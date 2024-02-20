# Assignment 1 
Web Development with React at IT-Högskolan.
<img src="./readmefiles/vite-react.jpg">
## Preface
### Välkommen till Laboration 1 i Webbutveckling i React
Projektet är ett individuellt arbete.
Ni får välja själva vilken webbsida/applikation ni ska göra men nedan krav ska uppfyllas och ni måste skapa ett github repository för ert projekt.  
Tänk på att hela tiden göra "commit" samt en "push", om ni är osäkra på hur man hanterar detta så är mitt tips att ni kikar på denna tutorial igen https://app.pluralsight.com/library/courses/github-getting-started/table-of-contents  
Vänligen lämna in en länk till ert Github repository

# För G
* Sätta upp ett React projekt med create-react-app eller med Vite
* Minst 3 funktionskomponenter
* Ta emot och "injicera"” minst en prop
* Hantera minst ett event
* Använd ett formulärsfält och spara innehåll till state
* Använd hooks (på ett korrekt sätt): useState & useEffect
* Projektet skall starta efter npm/yarn install & npm/yarn start utan några konsoll-fel

För VG
* Använd hooks: useRef
* Minst 5 komponenter
* Enhetligt formaterad kod (Använd https://prettier.io/ extension i VS Code)

# Project
Project idea is a currency converter, using any currency converter API such as CurrencyLayer or ExchangeRate-API to get current excange rate.

## Getting started
Project started by creating this repo. Then opened in GitHub Desktop and then opened in VS Code.  
ran command: `npm init vite@latest`  
`npm install` to install dependencies.  
Test start App with `npm run dev`
Application verified running at http://localhost:5173/  
<img src="./readmefiles/vite-react.jpg">

## Labb 1 requirements.

### Components:
Create at least 5 functional components for different parts of your application, such as one for the main layout, one for input fields and buttons, one for displaying conversion results, and possibly more to handle various parts of the user interface.

### Props:
Use props to pass data between your components. For example, you can pass exchange rates as props to the component that displays conversion results.

### Events:
Implement event handling to manage user interactions, such as when they enter the amount to convert or select currencies to convert between.

### Form fields and state:
Use a form field to allow the user to enter the amount they want to convert and save the value in a state variable using the useState hook.

### Hooks:
Use the useState and useEffect hooks to manage state and effects in your application. You can use useState to store the state of the amount the user wants to convert, and useEffect to fetch current exchange rates from a currency API when the component mounts or when the currency changes.

### Ref:
Use useRef to create a reference to the input field where the user enters the amount to convert.

### Formatted code:
Ensure your code is consistently formatted by using a tool like Prettier to automatically format the code according to predefined rules.

By following these steps and implementing functionality to fetch exchange rates from an API, handle currency conversion, and dynamically update the interface based on user input, you can create a currency converter that meets the requirements of Lab 1.

# Structure
In src folder, I added "components folder".  
In components folder I added five components.  
1. ConversionResult.jsx
2. ConvertButton.jsx
3. CurrencyInput.jsx
4. LayoutComponent.jsx
5. ErrorComponent.jsx

# API
I used the Open Exchange Rate API to get updated currency exchange rates.  
(I hade to change from CurrencyLayer API that only allowed 100 request per month, and I soon did that when developing.)

# Checking assessment criteria

### For grade G
* Set up a React project using `create-react-app` or Vite.  
Yes, used Vite as described in the Getting started section

* At least 3 function components  
Yes, I'm using 4.
    - CurrencyInput: This component handles the input for entering the currency value.
    - ConvertButton: This component represents the button used to trigger the currency conversion.
    - ConversionResult: This component displays the result of the currency conversion.
    - ErrorComponent: This component is used to display error messages when there are errors in the application.

* Recieve and inect at least one prop
Yes, there are several. For example:  
    - CurrencyInput: Takes in the `value` and `onChange` props.
    - ConversionResult: Takes in the `result` and `currency` props.
    - ErrorComponent: Takes in the `message` prop.

* Handle at least one even:
Yes, for example, the event handling occurs in the `handleConvert` function within the `LayoutComponent` component:
```
const handleConvert = () => {
  if (exchangeRates && exchangeRates.rates && selectedCurrency) {
    calculateConversion();
  }
};
```

* Use a form field an save the content to state
Yes, I have a form field represented by the `CurrencyInput` component, and its value is controlled by the `inputValue` state variable. The `handleInputChange` function is responsible for updating the `inputValue` state when the content of the form field changes.  

* Use hooks (in a correct way): useState & useEffect
Yes, the code utilizes hooks, specifically `useState` and `useEffect`, in an appropriate manner.
    - `useState` is used to manage state variables such as `exchangeRates`, `inputValue`, `selectedCurrency`, `conversionResult`, and `error`.
    - `useEffect` is used to perform side effects, such as fetching exchange rates from an API and updating state accordingly.  
Therefore, the code meets the requirement of using hooks correctly.

* Project run with npm/yarn install and npm/yarn start without any console errors
Yes. But Vite as your build tool, which typically uses `dev` for development server and `build` for creating a production build.
I added `"start": "vite",` to the package.json file to meet the requrement.  
No errors in console:  
<img src="./readmefiles/clean-console.jpg">

### För VG

* Use hook: useRef
Yes, the `useRef` hook is being used in the `CurrencyInput` component to create a reference to the input field. 
`const inputRef = useRef(null);`  
and later, it's utilized in:  
`useEffect(() => { inputRef.current.focus(); }, []);`

* At least 5 components.
Yes.
    - `App`: The root component of the application.
    - `LayoutComponent`: Manages the layout and contains the main functionality.
    - `CurrencyInput`: Handles the input field for entering currency values.
    - `ConvertButton`: Represents the button used to trigger the currency conversion.
    - `ConversionResult`: Displays the result of the currency conversion.
    - `ErrorComponent`: Used to display error messages.

* Uniformly formatted code (Use the https://prettier.io/ extension in VS Code).
Yes, Prettier is installed and utilized:  
<img src="./readmefiles/prettier.jpg">