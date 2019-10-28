import { createGlobalStyle } from "styled-components";

import fontFiles from "./fonts";

export default createGlobalStyle `
    @font-face {
        font-family: 'Rift';
        src: local('Rift-Light'),
            url('${fontFiles.riftLight_woff2}') format('woff2'),
            url('${fontFiles.riftLight_ttf}') format('truetype');
        font-weight: 300;
        font-style: normal;
    }

    @font-face {
        font-family: 'Rift';
        src: local('Rift-Bold'),
            url('${fontFiles.riftBold_woff2}') format('woff2'),
            url('${fontFiles.riftBold_ttf}') format('truetype');
        font-weight: bold;
        font-style: normal;
    }

    @font-face {
        font-family: 'Rift Demi';
        src: local('Rift-Demi'),
            url('${fontFiles.riftDemi_woff2}') format('woff2'),
            url('${fontFiles.riftDemi_ttf}') format('truetype');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'Rift';
        src: local('Rift-Medium'),
            url('${fontFiles.riftMedium_woff2}') format('woff2'),
            url('${fontFiles.riftMedium_ttf}') format('truetype');
        font-weight: 500;
        font-style: normal;
    }

    @font-face {
        font-family: 'Rift';
        src: local('Rift-Regular'),
            url('${fontFiles.riftRegular_woff2}') format('woff2'),
            url('${fontFiles.riftRegular_ttf}') format('truetype');
        font-weight: normal;
        font-style: normal;
    }
`
