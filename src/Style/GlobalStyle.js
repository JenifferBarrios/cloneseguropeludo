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
    --text-paragraf: #8e8e8e;

    --family-titlle:  apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
    --family-paragraph: SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;
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
    min-height:100%;
    background-color: var(fondo);
}
`

