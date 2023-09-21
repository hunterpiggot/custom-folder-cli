const folderStructureTypeA = [
    {
        name: "api-client",
        type: "folder",
        children: [
            {
                name: "live",
                type: "folder",
                children: [
                    {
                        name: "index.ts",
                        type: "file",
                    },
                ],
            },
            {
                name: "mock",
                type: "folder",
                children: [
                    {
                        name: "user-account",
                        type: "folder",
                        children: [
                            {
                                name: "index.ts",
                                type: "file",
                            },
                        ],
                    },
                    {
                        name: "index.ts",
                        type: "file",
                        content: 'export * from "user-account";',
                    },
                ],
            },
            {
                name: "models",
                type: "folder",
                children: [
                    {
                        name: "user-account",
                        type: "folder",
                        children: [
                            {
                                name: "UserAccountApiClient.interface.txt",
                                type: "file",
                            },
                            {
                                name: "UserAccountApiClient.model.txt",
                                type: "file",
                            },
                            {
                                name: "index.ts",
                                type: "file",
                            },
                        ],
                    },
                    {
                        name: "ApiClient.interface.ts",
                        type: "file",
                    },
                    {
                        name: "index.ts",
                        type: "file",
                    },
                ],
            },
            {
                name: "index.ts",
                type: "file",
            },
        ],
    },
    {
        name: "assets",
        type: "folder",
        children: [
            {
                name: "index.ts",
                type: "file",
            },
        ],
    },
    {
        name: "components",
        type: "folder",
        children: [
            {
                name: "home-page",
                type: "folder",
                children: [
                    {
                        name: "HomePage.component.tsx",
                        type: "file",
                        content: "export const HomePage = <div>Home Page</div>;",
                    },
                    {
                        name: "index.ts",
                        type: "file",
                        content: 'export * from "HomePage.component.tsx";',
                    },
                ],
            },
            {
                name: "index.ts",
                type: "file",
                content: 'export * from "home-page";',
            },
        ],
    },
    {
        name: "constants",
        type: "folder",
        children: [
            {
                name: "index.ts",
                type: "file",
            },
        ],
    },
    {
        name: "http-client",
        type: "folder",
        children: [
            {
                name: "index.ts",
                type: "file",
            },
        ],
    },
    {
        name: "localization",
        type: "folder",
        children: [
            {
                name: "index.ts",
                type: "file",
            },
        ],
    },
    {
        name: "models",
        type: "folder",
        children: [
            {
                name: "index.ts",
                type: "file",
            },
        ],
    },
    {
        name: "primitives",
        type: "folder",
        children: [
            {
                name: "index.ts",
                type: "file",
            },
        ],
    },
    {
        name: "shared-hooks",
        type: "folder",
        children: [
            {
                name: "index.ts",
                type: "file",
            },
        ],
    },
    {
        name: "store",
        type: "folder",
        children: [
            {
                name: "index.ts",
                type: "file",
            },
        ],
    },
    {
        name: "tailwind",
        type: "folder",
        children: [
            {
                name: "index.ts",
                type: "file",
            },
        ],
    },
    {
        name: "tests",
        type: "folder",
        children: [
            {
                name: "index.ts",
                type: "file",
            },
        ],
    },
    {
        name: "views",
        type: "folder",
        children: [
            {
                name: "index.ts",
                type: "file",
            },
        ],
    },
    {
        name: "views-public",
        type: "folder",
        children: [
            {
                name: "home-page",
                type: "folder",
                children: [
                    {
                        name: "HomePageView.view.tsx",
                        type: "file",
                        content: "export const HomePageView = <div>Home Page</div>;",
                    },
                    {
                        name: "index.ts",
                        type: "file",
                        content: 'export * from "HomePageView.view.tsx";',
                    },
                ],
            },
            {
                name: "index.ts",
                type: "file",
                content: 'export * from "home-page";',
            },
        ],
    },
];
export default folderStructureTypeA;
