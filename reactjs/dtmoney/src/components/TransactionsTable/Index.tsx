import { useEffect } from "react";
import { Container } from "./styles";
import { api } from '../../services/api'

export function TransactionsTable(){

useEffect(()=> {
    api.get('transactions')
    .then(response => console.log(response.data))

},[]);

return(
    <h1>ola mundo</h1>

)


}

