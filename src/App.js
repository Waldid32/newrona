import { Route, Routes } from "react-router-dom";
import { Operario } from "./pages/Operario";
import { Gerente } from "./pages/Gerente";
import { Login } from "./pages/Login";
import { AuthRoute } from "./components/AuthRoute";
import { initializeApp } from "firebase/app";
import { config } from "./config/config";


initializeApp(config.firebaseConfig);

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/operario"
          element={
            <AuthRoute>
              <Operario />
            </AuthRoute>
          }
        />
        <Route
          path="/gerente"
          element={
            <AuthRoute>
              <Gerente />
            </AuthRoute>
          }
        />
        <Route path="/" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
