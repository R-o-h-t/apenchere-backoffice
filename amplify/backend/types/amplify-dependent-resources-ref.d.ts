export type AmplifyDependentResourcesAttributes = {
    "api": {
        "appenchere": {
            "GraphQLAPIKeyOutput": "string",
            "GraphQLAPIIdOutput": "string",
            "GraphQLAPIEndpointOutput": "string"
        }
    },
    "auth": {
        "appenchere": {
            "IdentityPoolId": "string",
            "IdentityPoolName": "string",
            "UserPoolId": "string",
            "UserPoolArn": "string",
            "UserPoolName": "string",
            "AppClientIDWeb": "string",
            "AppClientID": "string"
        }
    },
    "storage": {
        "s3appencherestoragefc0ee81a": {
            "BucketName": "string",
            "Region": "string"
        }
    },
    "function": {
        "notificationCheck": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string",
            "CloudWatchEventRule": "string"
        },
        "appenchereAppSyncOperations": {
            "Arn": "string"
        }
    },
    "analytics": {
        "appenchere": {
            "Region": "string",
            "Id": "string",
            "appName": "string"
        }
    }
}