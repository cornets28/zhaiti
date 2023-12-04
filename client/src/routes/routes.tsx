/* eslint-disable react-hooks/exhaustive-deps */
import { Suspense, lazy } from "react";
import type { ComponentType } from "react";
import Navbar from "../components/Layout/Navbar/Navbar";
import Footer from "../components/Layout/Footer/Footer";
import AuthModal from "../components/Auth/AuthModal";
import { Route, Routes, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import userApi from "../api/modules/user.api";
import { setUser } from "../redux/features/userSlice";
import type { LazyExoticComponent } from "react";

import { Grid } from "../components/Grid/Grid";

type RoutesTypes = {
  exact?: boolean;
  path: string;
  component: ComponentType<{}> | LazyExoticComponent<ComponentType<{}>>;
  routes?: RoutesTypes;
  label?: string;
}[];

const RenderRoutes = (): JSX.Element => {
  const dispatch = useDispatch();
  // @ts-ignore
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    console.log("user: ", user);
    const authUser = async () => {
      const { response, err } = await userApi.getInfo();
      if (response) dispatch(setUser(response));
      if (err) dispatch(setUser(null));
    };

    authUser();
  }, [dispatch]);

  return (
    <>
      <AuthModal />
      <Suspense>
        <Navbar />
        <Grid
          className="container"
          sx={{
            md: 0,
            mb: { xs: 0, sm: 0, md: 0, lg: 45 },
          }}
        >
          <Routes>
            {routes.map((route: any, i: number) => {
              return (
                <Route
                  key={i}
                  path={route.path}
                  element={<route.component />}
                />
              );
            })}
          </Routes>
        </Grid>
        <Footer />
      </Suspense>
    </>
  );
};

export default RenderRoutes;

const routes: RoutesTypes = [
  {
    exact: true,
    path: "/404",
    component: lazy(() => import("../views/errors/NotFoundView")),
  },
  {
    exact: true,
    label: "Kiyès Nou Ye",
    path: "/",
    component: lazy(() => import("../views/home/page/Home")),
  },
  {
    exact: true,
    label: "Atik",
    path: "/atik",
    component: lazy(() => import("../views/articles/page/Articles")),
  },
  {
    exact: true,
    label: "Aktyalite",
    path: "/nouvèl",
    component: lazy(() => import("../views/news/page/News")),
  },
  {
    exact: true,
    label: "Atik",
    path: "/atik/1",
    component: lazy(() => import("../views/article/page/Article")),
  },
  {
    exact: true,
    label: "Sa k ap pase",
    path: "/nouvèl",
    component: lazy(() => import("../views/articles/page/Articles")),
  },
  {
    exact: true,
    label: "Kontakte Nou",
    path: "/kontak",
    component: lazy(() => import("../views/contact/page/Contact")),
  },
  {
    exact: true,
    label: "Chanèl",
    path: "/chanèl",
    component: lazy(() => import("../views/channels/page/Channels")),
  },
  {
    exact: true,
    label: "Atik",
    path: "/Atik-yo/:id",
    component: lazy(() => import("../views/article/page/Article")),
  },

  {
    exact: true,
    label: "Sign Up",
    path: "/signup",
    component: lazy(() => import("../views/signUp/page/SignUp")),
  },
  {
    exact: true,
    label: "Sign In",
    path: "/signin",
    component: lazy(() => import("../views/signIn/page/SignIn")),
  },
  {
    path: "*",
    component: () => <Navigate to="/404" />,
  },
];
