import { useState } from 'react';
import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles';

export function Header(){
    
    const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);
    
    function handleOpenNewTransactionModal(){
        setIsNewTransactionModalOpen(true);
    }
    function handeCloseNewTransactionModal(){
        setIsNewTransactionModalOpen(false);
    }
    
    
    
    return(
    <Container>
        <Content>
            <img src={logoImg} alt="dt money" />
            <button type="button" 
            onCLick={handleOpenNewTransactionModal}>
                Nova transação
            </button>
        </Content>

    </Container>
    )
}