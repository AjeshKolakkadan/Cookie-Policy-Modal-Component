# Cookie Policy Modal Component

This repository contains a simple React component for displaying a cookie policy modal. The modal prompts users to accept or reject the cookie policy, storing their choice in `localStorage`.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Styles](#styles)
- [License](#license)

## Installation

To use this component in your project, follow these steps:

1. **Clone the repository:**
    ```sh
    git clone https://github.com/your-username/cookie-policy-modal.git
    cd cookie-policy-modal
    ```

2. **Install dependencies:**
    ```sh
    npm install
    ```

## Usage

To integrate the `CookiePolicyModal` component into your React application, follow these steps:

1. **Import the component:**
    ```jsx
    import React from 'react';
    import CookiePolicyModal from './CookiePolicyModal';
    ```

2. **Include the component in your application:**
    ```jsx
    function App() {
        return (
            <div className="App">
                <CookiePolicyModal />
                {/* Other components */}
            </div>
        );
    }

    export default App;
    ```

3. **Run your application:**
    ```sh
    npm start
    ```

## Styles

The component includes inline styles for the modal and buttons. You can customize these styles as needed. The default styles are defined as follows:

```jsx
const modalContentStyles = {
    backgroundColor: 'white',
    padding: '20px',
    fontSize: '14px',
    overflow: "hidden"
};

const buttonStyles = {
    margin: '10px 0px 0 10px',
    fontSize: '14px',
    border: "1px solid #e5e5e5",
    padding: "2px 10px",
    borderRadius: "3px"
};
```

## Preview

![image](https://github.com/AjeshKolakkadan/Cookie-Policy-Modal-Component/assets/42866031/c7da2c9f-532a-413a-aef0-8f69e2967a76)

