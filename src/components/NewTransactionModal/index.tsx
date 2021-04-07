import Modal from 'react-modal';
import { useState, FormEvent } from 'react';
import { Container, TransactionTypeContainer, RadioBox } from './styles';


import closeImg from '../../assets/close.svg'
import outcomeImg from '../../assets/outcome.svg'
import incomeImg from '../../assets/income.svg'
import React from 'react';
import { useTransactions } from '../../hooks/useTransactions';

interface NewTransactionModalProps{
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal( {isOpen, onRequestClose} : NewTransactionModalProps){

  const { createTransaction } = useTransactions();
  const [ title, setTitle ] = useState('')
  const [ amount, setAmount ] = useState(0)
  const [ category, setCategory ] = useState('')

  const [ type, setType ] = useState('deposit')

  async function handleCreateNewTransaction(e:FormEvent){
    e.preventDefault();

    await createTransaction({
      title,
      amount,
      category,
      type
    });

    setTitle('');
    setAmount(0);
    setType('deposit')
    setCategory('');

    onRequestClose();
  }

  return (
        <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        className="react-modal-content"
        overlayClassName="react-modal-overlay"
      >
        <button 
          type="button" 
          onClick={onRequestClose} 
          className="react-modal-close-button"
        >
          <img src={closeImg} alt="Fechar cadastro" />
        </button>

        <Container onSubmit={handleCreateNewTransaction}>
            <h2>Nova transação</h2>
            <input 
              placeholder="Descrição"
              value={title}
              onChange={ e => setTitle(e.target.value) }
            />
            <input 
              placeholder="Valor" 
              type="number"
              value={amount}
              onChange={ e => setAmount(Number(e.target.value)) }
            />
            
            <TransactionTypeContainer>
              
              <RadioBox 
                type="button"
                onClick={() => {setType('deposit')}}
                isActive={ type === 'deposit'}
                activeColor='green'
              >
                <img src={incomeImg} alt="Entrada"/>
                <span>Entrada</span>
              </RadioBox>
              
              <RadioBox 
                type="button"
                onClick={() => {setType('withdraw')}}
                isActive={ type === 'withdraw'}
                activeColor='red'
              >
                <img src={outcomeImg} alt="Saída"/>
                <span>Saída</span>
              </RadioBox>

            </TransactionTypeContainer>
            
            <input 
              placeholder="Categoria"
              value={category} 
              onChange={ e => setCategory(e.target.value) }
            />
            <button type="submit">Cadastrar</button>
        </Container>

      </Modal>
    )
}