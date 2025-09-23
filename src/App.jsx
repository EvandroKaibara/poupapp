import { Aside } from "./components/Aside"
import { Container } from "./components/Container"
import { Main } from "./components/Main"
import { SearchInput } from "./components/SearchInput"
import { Typography } from "./components/Typography"
import { DailyBudget } from "./components/DailyBudget"
import Card from "./components/Card"
import { SavingStatus } from "./components/SavingStatus"

function App() {
  return (
    <div className="bg-neutral-background min-h-screen">
      <Container>
        <Aside />
        <Main>
          <SearchInput name="q" />
          <div>
            <Typography variant={"h1"}>
              Olá Evandro
            </Typography>
            <Typography variant={"body"}>
              Veja como estão suas finanças hoje.
            </Typography>
          </div>
          <section className="grid grid-cols-2 items-stretch gap-[24px]">
            <Card>
              <Card.Header>
                Orçamento diário disponível:
              </Card.Header>
              <Card.Body>
                <DailyBudget value={200} />
              </Card.Body>
            </Card>
            <Card>
              <Card.Header>
                Progresso da meta financeira
              </Card.Header>
              <Card.Body>
                <SavingStatus />
              </Card.Body>
            </Card>
            <Card>
              <Card.Header>
                Movimentação financeira
              </Card.Header>
              <Card.Body>
                R$200
              </Card.Body>
            </Card>
            <Card>
              <Card.Header>
                Minhas contas
              </Card.Header>
              <Card.Body>
                R$200
              </Card.Body>
            </Card>
          </section>
        </Main>
      </Container>
    </div>
  )
}

export default App
