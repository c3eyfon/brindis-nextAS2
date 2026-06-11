# [D] NEXT.JS: API RENDERING COMPLEXITIES

## 0. YARN: "YET ANOTHER RESOURCE NEGOTIATOR"

### A. PACKAGE MANAGERS - USING "YARN" over "NPM"

Eventually, you may need to build your applications with alternate package managers, such as `yarn` or `pnpm` - *this will be good experience at learning to alter your package patterns*

**BENEFITS**

  - Many developers out in industry prefer yarn over npm, purely because it appears to manage packages more efficiently and less collision

  - There is widespread support for yarn, and most documentation at `npmjs.com` comes with yarn instructions

**DOCUMENTATION**

  - [**YARN DOCUMENTATION**](https://yarnpkg.com/getting-started/install)

  - **Don't accidentally use** [yarn classic](https://classic.yarnpkg.com/lang/en/docs/cli/install/)

&nbsp;

### B. YARN SETUP

- **DOCUMENTATION:** https://yarnpkg.com/getting-started/install

- **INSTALL** yarn package manager: `corepack enable`

  - NOTE: Corepack is included by default with all Node.js installs, but is currently opt-in - we merely just need to enable it, not so much an "install"

  - Ensure your `Node` is at least version 16.10, otherwise you will need to globally install corepack: `npm i -g corepack` (*Node LTS is at v16.15 so many of you will be at this version!*)

  - **IMPORTANT:** At this point, you would start a new Next.js with `yarn` being the central package manager

    - `npm` comes with a `package.lock.json` file

    - `yarn` comes with a `yarn.lock` file 

&nbsp;

### C. YARN COMMON CLI COMMANDS

- **DOCUMENTATION:** https://yarnpkg.com/getting-started/usage

- **KEY COMMANDS:**

  - Install all node_module dependencies within `package.json`: `yarn install`

  - Install a package dependency: `yarn add react-icons` OR `yarn add sass --dev` 

  - Remove a dependency: `yarn remove bootstrap`

  - Startup Next development server: `yarn dev` 

  - Startup Next production build: `yarn build`

&nbsp;

## 1. CODEFEED BASE SETUP

### A. NEXT TOOLCHAIN INSTALL + IMPORTING LIBRARIES/PREPARED FILES

*NOTE: You are welcome to continue on `npm` (with `package.lock.json`) or can shift to `yarn` (with `yarn.lock`), just make sure you have the correct file init and lock files*

&nbsp;

**1. Install next toolchain: `yarn create next-app`**

  - **SELECT:** Standard options, in `.` directory, agree to `ESLint` & choose default `alias`

  - **NOTE:** `/app` directory is JUST out of Beta - **we do NOT want to use it**
  
  - **DOCS:** https://nextjs.org/docs/api-reference/create-next-app

&nbsp;

**2. Install Required Libraries:**

  - Dependencies: `yarn add react-icons`

  - Dev Dependencies: `yarn add sass --dev`

&nbsp;

**3. Copy across PRE-PREPARED bundle files - `components`, `scss` & `public`:**

  - **(a) `bundle_components`:** 

    - Components: Standard components we have built similar versions of previously - each includes the component logic + .scss file: `Button`, `ButtonLink`, `Card`, `Header`, `Footer` & `index.jsx` for Layout.

    - *DIFFERENT FILE SYSTEM: As an example, I have enclosed each component in a folder, with a linking index file.  This way, you can keep many files relating to one component in one folder - just another way of managing component files!*
    
    - Database files: raw data "seeder" file, which we will use in tandem with the Next.js API

  - **(b) `bundle_public`:** static images we will use for our application

  - **(c) `bundle_scss`:** global scss files & pre-built `global.css` file

&nbsp;

**4. Finalise initial setup:**

  - **(a) Layout Setup**

    - **NOTE:** Next/Font already incorporated into our layout using the `Lato` font, like Week 3 (https://nextjs.org/docs/pages/building-your-application/optimizing/fonts)

    - Import Layout component into `_app.jsx`

    - Nest the App `<Components>` into the `Layout` component + nest all within a React `<Fragment>`

    - Will display our Header & Footer on all routes & manage other aspects as our app scales

  - **(b) SCSS Setup**

    - **SCSS scripts:** As used last week, the `build:scss` script has been included in the same form for this app in `package.json` 

    - **SCSS global incorporation:** As we have `sass` as a devDependency, the `main.scss` file as been included as a direct import into `_app.jsx`, to make dev work faster (*with the compiled `global.css` file commented out above*)

&nbsp;

### B. AVAILABLE FILES FOR USE:

*IMPORTANT: This file includes `SCSS` and some files which it is recommended you download, so we can focus more on Next.js functionality than basic Layout/CSS rules*

&nbsp;

**1. You can use this `01_codefeed-base` file as your intial base file;** OR

**2. You can incorporate this with a new Next `/pages` project + your portfolio, including:**
  
  - **The Components Bundle**, with all adjustments needed as listed above;

  - **The Public Bundle** which provides all necessary images;

  - **The SCSS Global Bundle**, with the `scss/main.scss` file connected with the app.