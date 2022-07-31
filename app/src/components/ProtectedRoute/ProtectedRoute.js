import { Route, Routes, Navigate } from "react-router-dom";

function ProtectedRoute({ children, defaultRoute, loggedIn, ...props }) {
  return (
    <Routes>
      <Route
        {...props}
        element={loggedIn ? children : <Navigate to={defaultRoute} />}
      />
    </Routes>
  );
}

export default ProtectedRoute;
