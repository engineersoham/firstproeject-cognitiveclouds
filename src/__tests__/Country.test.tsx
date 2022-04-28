import { screen,render, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "../App";
import Country from "../component/Country";
import Nav from "../component/Nav";

// jest.mock("react-router-dom",()=>{
//     return{
//         useLocation:()=>{
//             return{
//                 state:'india'
//             }
//         },
//         useNavigate:()=>jest.fn()
//     }
// })
// jest.mock("react-router-dom", () => ({
//     ...jest.requireActual("react-router-dom"),
//     useParams: jest.fn(),
//    }));
it('app snap country',()=>{
    const tree = render(
        <BrowserRouter>
        <Country/>
        </BrowserRouter>
    )
    expect(tree).toMatchSnapshot()
    screen.debug()
})

describe('test for country',()=>{
    
jest.setTimeout(10000);
test('app snap country button',async()=>{
     render(
        <BrowserRouter>
        <Country/>
        </BrowserRouter>
    )
    await new Promise((r) => setTimeout(r, 5000));
    //const back = screen.getByTestId('back');
    //fireEvent.click(back);
    //const capital = screen.getByTestId('capital');
    //fireEvent.click(capital);
    //screen.getAllByRole('button');
})
})