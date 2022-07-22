import {Html, Head, Main, NextScript } from 'next/document';

export default function Document() {

    return(
        <Html>
            <Head>
                <meta name="author" content="Stephen Fields" key="author" />
                <meta name="copyright" content="Stephen Fields. All Rights Reserved." key="copyright" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}