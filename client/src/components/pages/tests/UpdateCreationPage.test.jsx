import renderer from "react-test-renderer"
import "jest-styled-components"
import UpdateCreationPage from "../UpdateCreationPage"
import testEnv from "../../../modules/jestUtil"

test("renders without crashing", () => {
    const tree = renderer.create(testEnv(UpdateCreationPage)).toJSON()
})
