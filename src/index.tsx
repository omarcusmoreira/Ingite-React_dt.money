import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createServer, Model } from 'miragejs'

createServer({

  models: {
    transaction: Model
  },

  seeds(server){
    server.db.loadData({
      transactions:[
        {
          id: 1,
          title: 'Desenvolvimento de Website',
          amount:'12000',
          type:'deposit',
          category:'dev',
          createdAt:new Date('2021-04-05 19:20:00')
        },
        {
          id: 2,
          title: 'Financiamento',
          amount:'1200',
          type:'withdraw',
          category:'contas',
          createdAt:new Date('2021-04-05 14:10:00')
        }
      ]
    })
  },

  routes(){
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction')

    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data)
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
