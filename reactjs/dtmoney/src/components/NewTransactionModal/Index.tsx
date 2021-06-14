import Modal from 'react-modal';
import { Container, TransactionTypeContainer, RadioBox } from './styles';
import closeImg from '../../assets/close_button.svg'
import incomeImg from '../../assets/greenArrowUp.svg'
import outcomeImg from '../../assets/redArrowDown.svg'
import { useState } from 'react';

interface NewTransactionModalProps{
    isOpen: boolean;
    onRequestClose: () => void;
}
export function NewTransactionModal({isOpen , onRequestClose } : NewTransactionModalProps){
    // Armazenar estados dos Botões do Modal
    const[type,setType] = useState('deposit')



    return (
    
    <Modal 
    isOpen={isOpen} 
    onRequestClose={onRequestClose}
    overlayClassName="react-modal-overlay"
    className="react-modal-content"
    >   
     
      <Container>
        <button type="button" 
        onClick={onRequestClose} 
        className="react-modal-close">
            <img src={closeImg} alt="CloseButton"/>
        </button>
      <h2>Cadastrar Transação</h2>
      <input placeholder="Título" />

      <input 
      placeholder="Valor"
      type="number"
      />

        {/* botoes */}
     <TransactionTypeContainer>
        <RadioBox
         type="button"
         onClick={() =>{setType('deposit')}}
        >
          <img src={incomeImg} alt="Entradas" />
          <span>Entrada</span>
         </RadioBox>



         <RadioBox
         type="button"
         onClick={() =>{setType('withdraw')}}

         >
          <img src={outcomeImg} alt="Saídas"/>
          <span>Saída</span>
         </RadioBox>
     </TransactionTypeContainer>



      <input
        placeholder="Categoria" 
        
        />

        <button type="submit">
            Cadastrar
        </button>

      </Container>
      

  </Modal>
    );
}
    