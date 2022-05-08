/* Amplify Params - DO NOT EDIT
	API_APPENCHERE_GRAPHQLAPIENDPOINTOUTPUT
	API_APPENCHERE_GRAPHQLAPIIDOUTPUT
	API_APPENCHERE_GRAPHQLAPIKEYOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */
const appsyncUrl = process.env.API_AMPLIFYLAYERGUIDE_GRAPHQLAPIENDPOINTOUTPUT;
const apiKey = process.env.API_AMPLIFYLAYERGUIDE_GRAPHQLAPIKEYOUTPUT;

const { DateTime } = require("luxon");
const { request } = require("/opt/appSyncRequest.js");
const {
    listOffers,
    listUsers,
    listProduct,
    updateOffers,
} = require("/opt/graphql/queries.js");
exports.handler = async(event) => {
    try {
        // get All published offers
        const publishedOffers = (
            await request({
                    query: listOffers,
                    variables: {
                        filter: {
                            isPublished: true,
                        },
                    },
                },
                appsyncUrl
            )
        ).listOffers.items;
        const expiredOffers = publishedOffers.filter(
            (offer) =>
            DateTime.fromISO(offer.endAt).diffNow().toObject().milliseconds < 0
        );

        /**
         * users
         */
        const usersIds = Array.from(
            new Set(expiredOffers.map((offer) => offer.userID))
        );
        const users = (
            await request({
                    query: listUsers,
                    variables: {
                        filter: {
                            id: usersIds,
                        },
                    },
                },
                appsyncUrl
            )
        ).listUsers.items;

        /**
         * products
         */
        const productsIds = Array.from(
            new Set(expiredOffers.map((offer) => offer.offerProductId))
        );
        const products = (
            await request({
                    query: listProduct,
                    variables: {
                        filter: {
                            id: productsIds,
                        },
                    },
                },
                appsyncUrl
            )
        ).listProduct.items;

        const expiredOffersWithUsersAndProducts = expiredOffers.map((offer) => {
            const user = users.find((u) => u.id === offer.userID);
            const product = products.find((p) => p.id === offer.offerProductId);
            return {
                ...offer,
                user,
                product,
            };
        });

        const updateOffersResult = await request({
                query: updateOffers,
                variables: {
                    input: {
                        id: expiredOffers.map((offer) => offer.id),
                        isPublished: false,
                    },
                },
            },
            appsyncUrl
        );
        return {
            statusCode: 200,
            body: JSON.stringify(updateOffersResult),
        };
    } catch (error) {
        console.log(error);
    }
};