## Git Public Repo

https://github.com/ragz310/highspot-code.git

## Available Scripts

Once git cloned to local, in the project directory please run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

### `npm run build` fails to minify

If you're seeing this error, you're likely using an old version of react-scripts. You can either fix it by avoiding a dependency that uses modern syntax, or by upgrading to react-scripts@>=2.0.0 and following the migration instructions in the changelog.

### Developer Notes ###

### Prototype Development

- The primary motivation for developing this prototype is to accept the awesome Highspot coding excersice and to use use modern web technologies (React, CSS-Grid, @keyframe animations etc...)
- React component architecture was followed and also used react techniques like 'react-infinite-scroll-component', 'states & props', 'constructors', 'fetch API calls' etc...

### [Block, Element, Modifier (BEM) Syntax] - https://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/

A naming convention which generates more descriptive CSS class names that enables developers to quickly understand the properties of a feature.

### Challenges / Problems

- The biggest challenge faced was the image sizes in the API data, some images has a different border which consumes more real-estate than the others. This challenge lead to mis-alignment of content between cards.
- To stick to simplicity of CSS followed the approach of global styling for all cards instead of targeting specific image to match with other images (Area of improvement)