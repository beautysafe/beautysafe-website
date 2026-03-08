import { Toaster } from "@/components/ui/toaster";
import { pagesConfig } from "./pages.config";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToHash from "@/lib/ScrollToHash";
import PrivacyPolicy from "./pages/PrivacyPolicy";

const { Pages, Layout, mainPage } = pagesConfig;

function App() {
  return (
    <Router>
      <ScrollToHash />

      <Routes>
        {Object.entries(Pages).map(([path, Component]) => (
          <Route
            key={path}
            path={path === mainPage ? "/" : `/${path.replace(/ /g, "-")}`}
            element={
              Layout ? (
                <Layout currentPageName={path}>
                  <Component />
                </Layout>
              ) : (
                <Component />
              )
            }
          />
        ))}

        <Route
          path="/privacy-policy"
          element={
            Layout ? (
              <Layout currentPageName="Privacy Policy">
                <PrivacyPolicy />
              </Layout>
            ) : (
              <PrivacyPolicy />
            )
          }
        />

        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>

      <Toaster />
    </Router>
  );
}

export default App;