
"use client";
import React, { createContext, useState } from "react";

const ConversationContext = createContext({
  conversations: null,
  loadConversation: function (conversationId) {},
  clearConversation: function () {},
});

export default function ConversationContextProvider(props) {
  const [activeConversation, setActiveConversation] = useState([]);
  function loadConversationHandler(conversationId) {
    // setActiveConversation()
  }

  function clearConversationHandler() {
    setActiveConversation([]);
  }

  const context = {
    conversations: activeConversation,
    loadConversation: (id) => loadConversationHandler(id),
    clearConversation: () => clearConversationHandler(),
  };
  return (
    <ConversationContext.Provider value={context}>
      {props.children}
    </ConversationContext.Provider>
  );
}
