"use client";
import React, { createContext, useEffect, useState } from "react";

export const ConversationContext = createContext({
  activeConversation: null,
  conversations: null,
  loadConversation: function (conversationId) {},
  clearConversation: function () {},
});

export default function ConversationContextProvider(props) {
  const [allConversation, setAllConversation] = useState([]);
  const [activeConversation, setActiveConversation] = useState(null);

  function loadConversationHandler(id, conversationObj, newChat = false) {
    // setActiveConversation()

    if (newChat) {
      // createNewConversation(conversationObj);
    } else {
      // insertConversation(id, conversationObj)
    }
  }
  //   {
  //     "conversation": [
  //         {
  //             "user": "kkkkk",
  //             "system": "this is a short sentence."
  //         }
  //     ],
  //     "id": 87926
  // }
  function clearConversationHandler() {
    console.log("clicked");
    setActiveConversation(null);
  }

  function createNewConversationHandler(conversationObj) {
    let newConversationObj = conversationObj;
    newConversationObj["id"] = Math.round(Math.random() * 100000);
    setAllConversation((prev) => [newConversationObj, ...prev]);
    setActiveConversation(newConversationObj);
  }

  function insertConversationHandler(conversationObj) {

    // Update the active conversation
    setActiveConversation((prevActiveConversation) => {
      const updatedActiveConversation = {
        ...prevActiveConversation,
        conversation: [...prevActiveConversation.conversation, conversationObj],
      };
  
      // Update the allConversation array 
      setAllConversation((prevConversations) =>
        prevConversations.map((conversation) =>
          conversation.id === prevActiveConversation.id
            ? updatedActiveConversation
            : conversation
        )
      );
  
      return updatedActiveConversation;
    });
  }


  // useEffect(() => {
    
  


  // }, [activeConversation])
  

  const context = {
    activeConversation: activeConversation,
    conversations: allConversation,
    loadConversation: (obj, newChat) => loadConversationHandler(obj, newChat),
    clearConversation: () => clearConversationHandler(),
    createNewConversation: (obj) => createNewConversationHandler(obj),
    insertConversation: (obj) => insertConversationHandler(obj),
  };
  return (
    <ConversationContext.Provider value={context}>
      {props.children}
    </ConversationContext.Provider>
  );
}
