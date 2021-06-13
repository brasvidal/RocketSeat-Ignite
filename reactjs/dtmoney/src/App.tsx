import styled from "styled-components";
import { Dasboard } from "./components/Dashboard/Index";
import { Header } from "./components/Header/Index";
import { TransactionsTable } from "./components/TransactionsTable/Index";
import { GlobalStyle } from "./styles/global";
export function App() {
  return (
    <>
    <Header />
    <Dasboard />
    <TransactionsTable />
    <GlobalStyle />

    </>
  );
}
