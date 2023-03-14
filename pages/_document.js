import {Html, Head, Main, NextScript } from 'next/document';

export default function Document() {

    return(
        <Html>
            <Head>
                <meta name="author" content="Stephen Fields" key="author" />
                <meta name="copyright" content="Stephen Fields. All Rights Reserved." key="copyright" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css" />
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossOrigin="anonymous"/>
                <link rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"/>
                <link rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}