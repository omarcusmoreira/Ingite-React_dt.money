import { GlobalStyle } from './styles/global'
import { Header } from './components/Header'
import { Dashboard } from './components/Dashboard'
import { NewTransactionModal } from './components/NewTransactionModal'
import { TransactionsProvider } from './hooks/useTransactions'
import { useState } from 'react'

import Modal from 'react-modal'
import React from 'react'

Modal.setAppElement('#root')

function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransaction(){
      setIsNewTransactionModalOpen(true)
  }

  function handleCloseNewTransaction(){
      setIsNewTransactionModalOpen(false)
  }

  return (
    <TransactionsProvider >
      <GlobalStyle />
      <Header onOpenNewTransactionModal={handleOpenNewTransaction}/>
      <Dashboard />

      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransaction}
      />
      
    </TransactionsProvider>
  );
}
export default App;