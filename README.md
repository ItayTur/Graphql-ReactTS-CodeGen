# Graphql-ReactTS-CodeGen
 App utilizing Graphql+React TypeScript and code-gen. Using the SpaceX Graphql api.
 following this tutorial: https://levelup.gitconnected.com/build-a-graphql-react-app-with-typescript-9661f908b26
 
 ## Running Instructions
 run:
 ```
 yarn i
 
 yarn start
 ```
 
 ## Query Instructions
 
 1) add query file under a component folder in `src\components` - e.g: `LaunchQuery.ts`
 2) run `yarn codegen`
 3) import the generated hook, e.g:query `LaunchProfile` will generate hook: `useLaunchProfileQuery`

