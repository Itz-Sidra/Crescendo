import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Your API",
        version: "1.0.0",
      },
      components: {
        securitySchemes: {
          BearerAuth: {
            type: "http",
            scheme: "bearer",
            bearerFormat: "JWT",
          },
        },
      },
      security: [
        {
          BearerAuth: [],
        },
      ],
    },
    apis: ["./routes/*.js"], 
  };
  
const swaggerSpec = swaggerJsdoc(options);

export { swaggerUi, swaggerSpec };
