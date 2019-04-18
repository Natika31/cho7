import renderer from "react-test-renderer"
import "jest-styled-components"
import MainContainer from "../MainContainer"
import testEnv from "../../../modules/jestUtil"

test("renders without crashing", () => {
    const tree = renderer.create(testEnv(MainContainer)).toJSON()
})
