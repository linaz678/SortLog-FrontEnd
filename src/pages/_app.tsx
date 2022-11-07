import React from "react";
import { AppProps } from "next/app";
import { Provider as ReduxProvider } from "react-redux";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import store from "../store/store";
import DashboardLayout from "@/layouts";
import NextClientOnly from "@/components/NextClientOnly";
import createTheme from "@/theme";
import { ApolloProvider } from "@apollo/client";
import { client } from "@/utils/apollo";
import NextNProgress from "nextjs-progressbar";
import Amplify from "aws-amplify";
import awsmobile from "@/config/aws";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "@/contexts/amplify-context";
Amplify.configure(awsmobile);
const App = ({ Component, pageProps }: AppProps) => {


  return (
    <ApolloProvider client={client}>
      <ReduxProvider store={store}>
        <ThemeProvider theme={createTheme()}>
          <AuthProvider>
            <NextClientOnly>
              <NextNProgress />
              <CssBaseline />
              <DashboardLayout>
                <Component {...pageProps} />
              </DashboardLayout>
              <Toaster />
            </NextClientOnly>
          </AuthProvider>
        </ThemeProvider>
      </ReduxProvider>
    </ApolloProvider>
  );
};

export default App;
