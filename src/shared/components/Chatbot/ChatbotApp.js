import React from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";

import BotAvatarImg from "../../../images/logos/bot.png";

import UserAvatarImg from "../../../images/logos/user.png";
import ChatAnswer from "./ChatAnswer";

const ChatbotApp = () => {
  const steps = [
    {
      id: "1",
      message: "Hola, ¿Cual es tu nombre?",
      trigger: "name",
    },
    {
      id: "name",
      user: true,
      trigger: "2",
    },
    {
      id: "2",
      message: "Hola {previousValue}! Espero ser de ayuda ",
      trigger: "3",
    },
    {
      id: "3",
      message: "¿sobre qué te gustaría saber?",
      trigger: "ayudas",
    },

    {
      id: "ayudas",
      options: [
        {
          value: "titulacion",
          label: "titulación",
          trigger: (value) => {
            console.log(value);

            return "4";
          },
        },
        {
          value: "idiomas",
          label: "idiomas",
          trigger: 4,
        },
        {
          value: "tramites",
          label: "trámites",
          trigger: (value) => {
            console.log(value);
            return "4";
          },
        },
        {
          value: "otros",
          label: "otros",
          trigger: 4,
        },
      ],
    },
    {
      id: "4",
      message: "¿Qué es lo que buscas?",
      trigger: "palabra",
    },

    {
      id: "palabra",
      user: true,
      trigger: (value) => {
        console.log(value.value);
        return "5";
      },
    },
    {
      id: "5",
      message: "¿Es esto lo que buscas?",
      trigger: "6",
    },
    {
      id: "6",
      component: <ChatAnswer />,
      trigger: "respuesta",
    },

    {
      id: "respuesta",
      options: [
        { value: "si", label: "si", trigger: "7" },
        { value: "no", label: "no", trigger: "3" },
      ],
    },
    {
      id: "7",
      message: "Excelente",
      trigger: "despedida",
    },

    {
      id: "despedida",
      message: "Ten un grandioso día!",
      end: true,
    },
  ];

  const theme = {
    background: "#F5F5F5",
    headerBgColor: "#223A6B",
    headerFontSize: "20px",
    botBubbleColor: "#223A6B",
    headerFontColor: "white",
    botFontColor: "white",
    userBubbleColor: "#223A6B",
    userFontColor: "white",
  };

  // Set some properties of the bot
  const config = {
    botAvatar: BotAvatarImg,
    userAvatar: UserAvatarImg,
    floating: true,
  };

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <ChatBot headerTitle="TecBot" steps={steps} {...config} />
      </ThemeProvider>
    </React.Fragment>
  );
};

export default ChatbotApp;
