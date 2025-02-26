import { ERROR_MESSAGES } from "./messages";
import { regiones } from "./Regiones" 
import { comunasRM } from "./Comunas" 

export const formFields = [
  {
    label: "Nombre",
    name: "nombre",
    type: "text",
    rules: [
      { required: true, message: ERROR_MESSAGES.REQUIRED },
      {
        pattern: /^[A-Za-zÀ-ÿ\s]*$/,
        message: ERROR_MESSAGES.TYPE_TEXT,
      },
    ],
    placeholder: "Ingresa un nombre",
    disabled: false,
    dependencies: ""
  },
  {
    label: "Apellidos",
    name: "apellido",
    type: "text",
    rules: [
      { required: true, message: ERROR_MESSAGES.REQUIRED },
      {
        pattern: /^[A-Za-zÀ-ÿ\s]*$/,
        message: ERROR_MESSAGES.TYPE_TEXT,
      },
    ],
    placeholder: "Ingresa tus apellidos",
    disabled: false,
    dependencies: ""
  },
  {
    label: "Teléfono",
    name: "telefono",
    type: "text",
    rules: [
      { required: true, message: ERROR_MESSAGES.REQUIRED },
      { pattern: /^[0-9]{9}$/, message: ERROR_MESSAGES.PHONE_TOO_SHORT }
    ],
    placeholder: "Ingresa tu teléfono",
    disabled: false,
    dependencies: ""
  },
  {
    label: "Dirección",
    name: "direccion",
    type: "text",
    rules: [{ required: true, message: ERROR_MESSAGES.REQUIRED }],
    placeholder: "Ingresa tu dirección",
    disabled: true,
    dependencies: ""
  },
  {
    label: "Email",
    name: "email",
    type: "text",
    rules: [
      {
        required: true,
        message: ERROR_MESSAGES.REQUIRED,
      },
      {
        type: 'email',
        message: ERROR_MESSAGES.INVALID_EMAIL
      }
    ],
    placeholder: "Ingresa tu email",
    disabled: false,
    dependencies: ""
  },
  {
    label: "Contraseña",
    name: "password",
    type: "password",
    rules: [
      {
        required: true,
        message: ERROR_MESSAGES.REQUIRED,
      },
      {
        min: 6,
        message: ERROR_MESSAGES.PASSWORD_TOO_SHORT,
      }],
    placeholder: "Ingresa tu contraseña",
    disabled: false,
    dependencies: ""
  },
  {
    label: "Repetir contaseña",
    name: "password2",
    type: "password",
    rules: [
      {
        required: true,
        message: ERROR_MESSAGES.REQUIRED,
      },
      ({ getFieldValue }) => ({
        validator(_, value) {
          if (!value || getFieldValue("password") === value) {
            return Promise.resolve();
          }
          return Promise.reject(
            new Error(`${ERROR_MESSAGES.PASSWORDS_DONT_MATCH}`)
          );
        },
      })
    ],
    placeholder: "Ingresa tu contraseña",
    disabled: false,
    dependencies: "password"
  },
];

export const formLocation = [
  {
    label: "Región",
    name: "region",
    rules: [
      { required: true, message: ERROR_MESSAGES.REQUIRED },
    ],
    placeholder: "Seleciona una opción",
    disabled: false,
    options: regiones
  }, 
  {
    label: "Comuna",
    name: "comuna",
    rules: [
      { required: true, message: ERROR_MESSAGES.REQUIRED },
    ],
    placeholder: "Seleciona una opción",
    disabled: false,
    options: comunasRM
  }
];

