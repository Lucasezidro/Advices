import { Container } from "./style";
import pipeImage from "../assets/pattern-divider-desktop.svg"
import buttonimage from "../assets/icon-dice.svg"
import { useEffect, useState } from "react";

export function Card () {
  const [advices, setAdvices] = useState()
  const [ids, setId] = useState()

  const getAdvice = async (url: string) => {
    const res = await fetch(url)
    const data = await res.json()

    setAdvices(data.slip.advice)
    setId(data.slip.id)
  }

  useEffect(() => {
    const adviveURL = "https://api.adviceslip.com/advice"

    getAdvice(adviveURL)
  }, [])

  return (
    <Container>
      <span className="title-advice">ADVICE {ids}</span>

      <span className="content">
        "{advices}"
      </span>

      <div className="footer">
        <img src={pipeImage} className="pipe" />
      </div>

      <button onClick={() => window.location.reload()}>
        <img src={buttonimage} alt="" />
      </button>
    </Container>
  )
}