import { screen,render, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "../App";
import Country from "../component/Country";
import Nav from "../component/Nav";


it('app snap App',()=>{
    const tree = render(
        <BrowserRouter>
        <App/>
        </BrowserRouter>
    )
    expect(tree).toMatchSnapshot()
    screen.debug()
})