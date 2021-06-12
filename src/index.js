require("dotenv").config();

const sendMail = require("@sendgrid/mail");
const { mailTemplate } = require("./mailTemplate");

sendMail.setApiKey(process.env.SENDGRID_API_KEY);

const email = "email";

sendMail
  .send({
    to: email,
    from: process.env.SENDGRID_EMAIL,
    subject: "Tu usuario inmobi ha sido creado exitosamente",
    text:
      "Tu usuario Inmobi ha sido creado ha sido creado en el sistema con los siguientes datos",
    html: mailTemplate(
      "Su usuario ha sido creado exitosamente",
      "Datos del usuario",
      [
        ["Nombre", "Jose Miguel"],
        ["Apellido", "Ortiz Castrillon"],
        ["Correo", email],
        ["Contraseña", "DSFDS4324FD43"],
        ["Algo", "Algo"],
        ["Pepe ", "Guama"],
      ]
    ),
  })
  .then((res) => console.log("Message send"));
