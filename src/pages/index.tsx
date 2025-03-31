import { PROJECT_ROUTES } from "@/routes/createRoutes";
import { useRouter } from "next/navigation";
import { useLayoutEffect } from "react";

const Home = () => {
  const router = useRouter();

  useLayoutEffect(() => {
    router.replace(PROJECT_ROUTES.auth.login);
  }, [router]);

  return null;
};

export default Home;
