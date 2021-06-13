import styled from "styled-components";
import { Dasboard } from "./components/Dashboard/Index";
import { Header } from "./components/Header/Index";
import { TransactionsTable } from "./components/TransactionsTable/Index";
import { GlobalStyle } from "./styles/global";
import Modal from 'react-modal';
import { NewTransactionModal } from "./components/NewTransactionModal/Index";
import { useState } from "react";

Modal.setAppElement('#root');
  
  
export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);
    
  function handleOpenNewTransactionModal(){
    setIsNewTransactionModalOpen(true);
  }
  function handleCloseNewTransactionModal(){
      setIsNewTransactionModalOpen(false);
  }

  return (
    <>

    <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />

    <Dasboard />

    <NewTransactionModal
      isOpen={isNewTransactionModalOpen}
      onRequestClose={handleCloseNewTransactionModal}
    />

    <TransactionsTable />


    
    
    
    
    
    
    
    <GlobalStyle />

    </>
  );
}
