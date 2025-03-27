export const authorizeRole = (roles) => {
    return (req, res, next) => {
      if (!req.user) {
        return res.status(401).json({ message: "Unauthorized request. Please log in." });
      }
  
      if (!roles.includes(req.user.role)) {
        return res.status(403).json({
          message: `Access Denied! Required roles: [${roles.join(", ")}]. Your role: ${req.user.role}.`,
        });
      }
  
      next();
    };
  };
  