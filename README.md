
# Create react app
npx create-react-app myapp
> npx executes create-react-app script from your default npm-module directory.

bootstrap
> import in index.js

reactstrap 
> reactstrap is dependent on bootstrap. 
> reactstrap.github.io

Botton reactstrap
> http://reactstrap.github.io/components/buttons/

Layout Bootstrap
> getbootstrap.com/docs/4.0/grid#grid-options
<Col xs='6' 	// 12/6=2 columns
	md='4'	// 12/4=3 columns
	xl='3'	// 12/3=4 columns
>


++++++++++++++++

# Create-react-app template
> You can build a React app from scratch with just an HTML page and some JavaScript, but that method is not scalable. If you want to use the latest Javascript features, and pre-processors, and all the fun toys that make our jobs fun, then you will have to do a lot of configuration upfront. However, this gets very cumbersome very quickly. After a while, React developers started talking about how this was causing JavaScript fatigue - a term that has many many articles written on it. There was just so much to do to set up every single React project.

> Understanding this frustration, the React team built a tool called Create React App that sets up our entire app for us. It gives us all the “boilerplate,” or necessary configuration and setup code, that we need for a React app so we can start building the app, and not spend hours on configurations.

> We run this tool in the command prompt/terminal. You can run Create React App (CRA) with yarn, npm, or even download it and run it on its own. Since everyone’s computer is different and not everyone’s will work with just one of these tools, we will learn a couple of different methods. Find which one works best on your machine, and use that throughout your time here.

> Previously, global installs of create-react-app were common and you may still see this suggested in older tutorials. This is no longer recommended and will lead to breaking code.

> Note, however, that if you have installed create-react-app globally, you will need to uninstall it with 
> npm uninstall -g create-react-app 
> before running the new command to prevent npm from running the outdated version of create-react-app installed on your computer.

> If you run the outdated version, you will get a broken app that is missing critical components.

> To create a new React app use these commands:

> Open your terminal and build a React app. We will use the npx utility, which was introduced in npm v. 5.2.0. Here, animals is the name of the React project you want to build:

```js
npx create-react-app animals --use-npm
```

> As soon as you run the command successfully, CRA gets to work installing all necessary files, folders, and dependencies using npm. It will even initialize a git repository and perform an initial commit. Once the process completes (it might take a while!) you should see a Happy hacking! success message in your terminal.

> If npx does not work for you, CRA has got you covered. Let’s look in here at how we can install CRA globally and run that command (https://facebook.github.io/create-react-app/){:target=”_blank”}):

> Let’s install CRA globally with npm first, and then create a CRA app:

```js
npm install -g create-react-app
create-react-app animals –use-npm
```

> Starting your React App

```js
// cd into the project folder
cd animals

// start up the project
npm start
```
> The start command here will launch the bundler (Webpack) and a transcompiler (Babel’s Webpack loader), and spin up a dev server so you can visit your project at the default http://localhost:3000. This server will also listen for you to make changes to your project and refresh the browser page every time you save your files in your editor. This process is called “hot reloading.”

> Some other commands you can run here are as follows.

> npm test will launch tests with the testing library jest.

> npm run build will launch the bundler and transcompiler to produce a minified bundle appropriate for deployment.

> npm run eject will unhide all the configuration and dependencies that CRA-generated react apps use under the hood. No way back from this, so don’t do it unless you are sure you need to! Ejecting is usually NOT necessary for toy apps or small prototypes, but often inevitable when building real-world apps.

### Project dependencies
> Learn to install additional packages. We can use npm to install any other JavaScript packages as dependencies besides react and react-dom (which you’ll find already among the project’s dependencies inside package.json).

> Example of installing and uninstalling the moment library as a project dependency:

```js
npm install moment
npm uninstall moment
```

> Example of installing and uninstalling the chai library as a dev project dependency:

```js
npm install -D chai
npm uninstall chai
```
> Dev dependencies are packages you as a developer need for performing specific operations like spinning up the app in your laptop, creating a bundle, or running tests. Non-dev or “regular” dependencies are the packages imported and consumed directly by your application code.

> Study the file structure. Your file structure (as of this CRA release) will look like this:
file-struct

> You should have a main index.js file in the src, which is mounting our App component to the root div found in the index.html file which lives in public. Notice how we’re importing in App.js from inside of index.js.

> Inside of src/App.js, we can see a class component. This approach is helpful because, in a typical React app, this main App.js component is used to hold onto state and sort of acts as the data control center for the rest of our application. Of course, you can build out many other components but app’s main purpose is to be the one single component that we pass to ReactDOM.render to compose our application.

> Add your own code! Inside of App.js, make modifications to make this component “yours.”
Then, go ahead and run npm start to bundle the app and boot up our web developer server. This is a step that you’re pretty familiar with at this point. You should be able to tell if something is wrong pretty quickly. Now that your server is up and running, head to localhost:3000 to see if you can inspect with the react-dev-tools in the browser.


# Reactstrap
> Learn to understand how to style React components using Reactstrap
> As part of writing React applications, you need to know how to apply styles via CSS to React components, as well using a themed library of components such as React Bootstrap, in order to add style to React applications. Typically when you get to a company they will already have made a decision on what types of libraries they’ll be using as a team. Learning how to work with Reactstrap will help you when you get to that point where you’ll be using some sort of custom component library or styling library at your day job.

## Reactstrap, the de-facto Bootstrap Styling library for React Components.

> What’s great about this library is that you have some pre-built components that are already styled out for you using the Bootstrap styling library. So not only do you get a chance to use the Bootstrap styling library, but you also get interactive styled components that you can use for interactivity throughout your react application.

> Let’s figure out how to get this all installed and start playing around with it. If you head over to the documentation, you’ll find that the installation process is pretty darn easy.

```js
npm install reactstrap bootstrap
```
> Notice that we’re installing BOTH Reactstrap and Bootstrap here. Reactstrap is the component library that uses Bootstrap under the hood. So you’ll need both. To get the stylesheet included to your React Application, you can either use the script tag option or, my preferred choice, import the bootstrap library into your index.js file.

```js
import 'bootstrap/dist/css/bootstrap.min.css';
```
> Adding that line to your index.js file will make the bootstrap style sheet available. Now how do we use the React Strap component library? Well, it’s as simple as any other node package we’re using. Wherever you want to include any of your Reactstrap components, you’ll have to explicitly import them into any component that you’d like to use them in.

```js
import React from 'react';
import { Alert } from 'reactstrap';
```
> That Alert component is now available for use like any other component that you’ve worked with/built on your own. And we’ll use it as such.

```js
<Alert color="primary">
  This is a primary alert — check it out!
</Alert>
```
> Reactstrap Bootstrap card component example.
```js
import React from 'react';

    import 'bootstrap/dist/css/bootstrap.min.css';
    import { Button, Card } from 'react-bootstrap';

    const ReactBootstrap = () => (
    <Card style={{ width: 300 }}>
      <Card.Body>
        <Card.Title>React Bootstrap card</Card.Title>
        <Card.Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        </Card.Text>
        <Button variant="primary">Read more</Button>
      </Card.Body>
    </Card>
    )

```
>Get this package installed into a react application from Create React App.

1. Step 1 Build your application
> run npx create-react-app reactstrap-project --use-npm
> or if you have CRA installed globally run create-react-app reactstrap-project --use-npm
> cd into your project and run run npm start to start your webpack-dev-server
> navigate to localhost:3000 to see your app

2. Step 2 installing Reactstrap
> inside the root of your reactstrap-project run npm install reactstrap bootstrap to get both bootstrap and reactstrap installed

3. Step 3 configuring your index.js file to use the Global bootstrap.css stylesheet
> inside of the index.js file add import 'bootstrap/dist/css/bootstrap.min.css'; This will install the bootstrap styling lib globally for your project.

# Styled-components
### Learn to use styled-components to add functional styles to their React Components
> So far through the React unit, we have learned how we can write our HTML in JavaScript using JSX. Now, we’re going to ask the question that many React devs have asked - why can’t we write our CSS in JavaScript as well? The answer… We can! With a library called Styled Components, we are going to build reusable components that get passed the styling we want via JavaScript! 

> Styled Components is a library for writing CSS in our JS files. As mentioned in the article above, it’s not that the idea of having HTML or CSS written in JS is bad, it’s more that the implementation isn’t properly implemented for either. React introduced JSX as a better tool for writing HTML in JS, and now we have great libraries to write CSS in JS.

> To get started with styled-components we run npm install styled-components. And that’s it! Now you’re ready to roll! We can import it into our js files, and start building components.

> Now that I have installed styled-components Let’s look at how you can use them.

> First, import the styled default object from styled-components . This gives you access to every property on that object. Each property is a React component that will print out whatever property you reference as a DOM element.

```js
import styled from 'styled-components'
Copy
// div
const StyledDiv = styled.div``;

// paragraph
const StyledP = styled.p``;

// section
const StyledSection = styled.section``;

// headers h1 - h6
const StyledHeading = styled.h1``;

// a
const StyledA = styled.a``;
```

> Hopefully, you’re starting to get the point. You’ll notice that I’m using that fancy template literal syntax. That’s because each one of the properties found on the styled objects are actually methods. In JS, we can pass in string arguments using string literals.

### Lets build out div component
> To import styled-components, add import styled from 'styled-components'; to your js file. Then we will use styled.div to create a new component. Look at how we set this up, then we’ll talk about the funny syntax:

```js
import React from 'react';
import styled from 'styled-components';

const WrapperDiv = styled.div`
    width: 100%;
    height: 100%;
`;

function SomeComponent() {
  return (
    <div className="wrapper">
      <h1>Hello From the Home Component</h1>
    </div>
  );
}
export default SomeComponent;
```

> We have created a component called WrapperDiv that is going to take the place of the .wrapper div. We have passed two css properties and values - width and height. But what is up with the backtick syntax?

> From their docs: “This unusual backtick syntax is a new JavaScript feature called a tagged template literal. You know how you can call functions with parenthesis? (myFunc()) Well, now you can also call functions with backticks!”

> So we are just invoking a function! And when we invoke this function, we are passing a string with our styles to it. Under the hood, styled-components is going to render a div with a funny looking class name, and apply the styles that we passed to it. Now we can take our new component, and put it into the JSX.

```js
import React from 'react';
import styled from 'styled-components';

const WrapperDiv = styled.div`
    width: 100%;
    height: 100%;
`;

function SomeComponent() {
  return (
    <WrapperDiv>
      <h1>Hello From the Home Component</h1>
    </WrapperDiv>
  );
}

export default SomeComponent;
```

> While this is all really cool, it seems like a little too much work if that is all we are gaining from style-components, right? Until we realize that there is so much more we can do! How about passing in props to change the color of buttons?

```js
import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    padding: 6px 10px;
    margin: 5px;
    border: none;
    border-radius: 3px;
    color: white;

    ${props => (props.type === 'primary' ? `background: #2196f3;` : null)}
    ${props => (props.type === 'success' ? `background: #4caf50;` : null)}
    ${props => (props.type === 'danger' ? `background: #f44336;` : null)}
    ${props => (props.type === 'warning' ? `background: #fdd835;` : null)}
`;

function SomeComponent() {
  return (
    <div>
      <Button type="primary">Primary</Button>
      <Button type="success">Success</Button>
      <Button type="danger">Danger</Button>
      <Button type="warning">Warning</Button>
    </div>
  );
}

export default SomeComponent;
```

> Note that inside the ${} we are running a function that takes in props, and returns the correct background color based on props.type. This has endless possibilities!

> So we just created a single, reusable <Button /> component that will change colors based on what we pass to the type prop! But wait… there’s more!!! Let’s create a “base” Button component, then create a TomatoButton component that extends some extra styles to it (this example is straight out of the docs)!

```js
import React from 'react';
import styled from 'styled-components';


const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

// A new component based on Button, but with some override styles
const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;

function SomeComponent() {
  return (
  <div>
    <Button>Normal Button</Button>
    <TomatoButton>Tomato Button</TomatoButton>
  </div>
);

export default SomeComponent;
```

> (You may have noticed that we are invoking a function, passing in a component, and it is returning a new component with added functionality… styled is an HOC!!!!)
