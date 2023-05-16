import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Modal from "../components/Modal";

const activeModalMock = {
    sprites: {
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    },
    name: "bulbasaur",
    pokeNumber: 1,
    types: [
      { type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" } },
      { type: { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" } },
    ],
    weight: 69,
    height: 7,
  };

const closeModalMock = jest.fn();

describe("Testes do Modal", () => {

    test("Renderizar o componente", () => {
        
        render(<Modal activeModal={activeModalMock} closeModal={closeModalMock}/>)
    })

    test("Se ao clicar em fechar Modal, a funçaõ está funcionando", async () => {
        const user = userEvent.setup()

        render(<Modal activeModal={activeModalMock} closeModal={closeModalMock}/>)

        const buttonModal = screen.getByRole('button',{name: /❌/i})
        
        await user.click(buttonModal)
        expect(closeModalMock).toBeCalled()
    })
});
