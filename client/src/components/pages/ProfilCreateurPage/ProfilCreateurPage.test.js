import renderer from "react-test-renderer"
import "jest-styled-components"
import ProfilCreateurPage from "./ProfilCreateurPage"
import testEnv from "../../../modules/jestUtil"

test("renders without crashing", () => {
    const tree = renderer.create(testEnv(ProfilCreateurPage)).toJSON()
})
