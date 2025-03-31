export enum ROUTES_TYPE {
  cms = "/cms",
  auth = "/auth",
  dashboard = "/dashboard",
  profile = "/profile",
}

export const PROJECT_ROUTES = {
  dashboard: ROUTES_TYPE.dashboard,

  auth: {
    login: `${ROUTES_TYPE.auth}/login`,
    signup: `${ROUTES_TYPE.auth}/sign-up`,
    forgetPassword: `${ROUTES_TYPE.auth}/forgost-password`,
  },
  profile: {
    profile: `${ROUTES_TYPE.dashboard}${ROUTES_TYPE.profile}`,
  },
} as const;
