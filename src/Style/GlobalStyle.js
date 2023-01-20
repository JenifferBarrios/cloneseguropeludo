import { createGlobalStyle } from "styled-components";

export default createGlobalStyle `
:root {
    --fondo: #ffffff;
    --blue1: #0077b9;
    --blue2: #34bacf;
    --blue3: #094f71;
    --blue4: #123346;
    
    --grey1: #bababa;
    --grey2: #e5ecf7;

    --yellow1: #fece47;
    --yellow2: #f2c447;
    --yellow3: #efb718;
    --yellow4: #ffce45;
    --yellow5: #efb718;

    --text-popular: #846e2d;
    --text-popular2:#c79300;
    --text-cotizar: #455a81;

    --family-titlle: sofia_pro_bold;
    --family-paragraph: sofia_pro_regular;
    --family-numbers: sofia_pro_light;
    --family-logo: Gotham_Rounded_Book
    --family-footer: sans-serif;
    --family-titlle2: proxima_nova_ltsemibold;

}
*{
    margin:0;
    padding:0;
    box-sizing:border-box;

}
h1{
    color:var(--blue2);
    font-size: 36px;

}
html{
    min-heigth:100%;
    bagtground-color: var(fondo)
}
`


