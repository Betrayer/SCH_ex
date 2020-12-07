import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";

const LazyFirstPage = lazy(
  () =>
    import(
      "../components/pages/firstPage/FirstPage"
    ) /* webpackChunkName: 'Home' */
);

const LazySecondPage = lazy(
  () =>
    import(
      "../components/pages/secondPage/SecondPage"
    ) /* webpackChunkName: 'Home' */
);



export const useRouter = () => {
  return (
    <Suspense
      fallback={
        <div>
          <p>Loading...</p>
        </div>
      }
    >
      <Switch>
        <Route exact path="/" component={LazyFirstPage} />
        <Route exact path="/secondpage" component={LazySecondPage} />
      </Switch>
    </Suspense>
  );
};