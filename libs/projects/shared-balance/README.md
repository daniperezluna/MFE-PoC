# SharedBalance

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.0.

## Publishing your library
Use the Angular CLI and the npm package manager to build and publish your library as an npm package.

Angular CLI uses a tool called ng-packagr to create packages from your compiled code that can be published to npm. See Building libraries with Ivy for information on the distribution formats supported by ng-packagr and guidance on how to choose the right format for your library.

You should always build libraries for distribution using the production configuration. This ensures that generated output uses the appropriate optimizations and the correct package format for npm.

```
ng build shared-balance
cd dist/shared-balance
npm publish
```

## Using your own library in apps
Using a Library in Local Angular Application:
To use this library anywhere we first need to BUILD it. We cannot use a library without building a dist folder. So for this open your terminal and write the following command:

`Syntax: ng build shared-balance`

This command will create a dist folder and inside this folder, our compiled library is stored.

## Publishing Library to Local npm:

For this, we need to build this library as an npm package and then we can publish it to the local node package manager’s registry so that we can use it in any angular projects which are in our local machine.

This means we need to follow 2 steps:

1. Create the Build
2. Create a Pack file
3. The first step is to create the build (compiled form). As we have already done this previously we can omit this step now.
4. To create a Pack file, open the Terminal and navigate up to your library folder from the dist directory and then write down a command to create the Pack file.

This will make a Pack (target) file with a name shared-balance-0.0.1.tgz.
Publishing has done..!! 

Now we can use this library in any angular application.

