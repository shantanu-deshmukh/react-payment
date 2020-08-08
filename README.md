# Payment Demo

- [Overview](#overview)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Installing Dependencies](#installing-dependencies)
  - [Running the Project](#running-the-project)
- [Dependencies](#dependencies)
- [Open Issues](#open-issues)
- [Attribution](#attribution)


## Overview

This repository features a react library containing re-usable component for CreditCard & PaymentForm. It also contains a demo application showing the usage of these components.

## Project Structure

- `ui-components` : Library exporting the CreditCard and Payment Form components 
  - Path: `libs/ui-components`
  - Example Usage: 
  
    ```typescript
    //import lib in any project within the workspace
    import { PayForm, CreditCard } from '@shantanu/ui-components';

    //use like a regular react component/html tag
    <CreditCard/>
    ```
- `payment-utils` : Library exporting commonly used functions
  - Path: `libs/payment-utils`
  - Example Usage: 
  ``` typescript
  //import lib in any project within the workspace
  import { maskAllCharacters, maskCreditCard } from '@shantanu/payment-utils';
  //then use like any regular javascript function
  ```
- Payment Demo: Demo react project showing usage of the above libraries
   - Path: `apps/payments`


## Getting Started

### Installing Dependencies

Clone the repo & cd into the project directory to install dependencies.

```cmd
> yarn install
   
//or

> npm install
```

### Running the Project
- Start the project in development mode
  ```cmd
  > yarn run start   

  //or

  > npm run start
  ```
- Build the Project
  ```cmd
    > yarn run build

    //or

    > npm run build
  ```

## Dependencies
- [React-Bootstrap](https://react-bootstrap.github.io/)
- [nx.dev](https://nx.dev/react) (Optional): For managing the workspace


## Open Issues
- Detect & display logo of Credit Card Network based card number (e.g. Visa, MasterCard, etc.)
- Animations: Need to add animations for a smoother experience


## Attribution
- Credit card background image taken from [Freepik](https://www.freepik.com/free-photo/3d-render-communications-background-with-low-poly-plexus-design_9378272.htm)
- Hologram image from [pngkey](https://www.pngkey.com/detail/u2w7e6e6t4y3t4i1_holographic-sticker-png-hologram-sticker-png/)
- Visa logo from [flaticon](https://www.flaticon.com/free-icon/symbols_39134?term=visa&page=1&position=24)