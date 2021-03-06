import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import Head from 'next/head';
import theme from '../styles/theme';

export default function MyApp(props) {
  const { Component, pageProps } = props;
  return (
    <React.Fragment>
      <Head>
        <title>Next App</title>
        <link href="/favicon.ico" rel="icon" />
        <meta content="minimum-scale=1, initial-scale=1, width=device-width" name="viewport" />
      </Head>

      <ThemeProvider theme={theme}>
        <CssBaseline />

        <Component {...pageProps} />

      </ThemeProvider>
    </React.Fragment>
  );
}