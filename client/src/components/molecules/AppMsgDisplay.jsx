import React, { Fragment, Component } from "react"
import { connect } from "react-redux"
import Container from "../atoms/Container/Container"
import Button from "../atoms/Button/Button"

class AppMsgDisplay extends Component {
    state = {
        oldMsg: "",
        display: false
    }

    componentDidUpdate = () => {
        if (this.state.oldMsg !== this.props.msg)
            this.setState({ oldMsg: this.props.msg, display: true })
    }
    render = () =>
        this.state.display ? (
            <Fragment
                style={{
                    position: "fixed",
                    bottom: "5px",
                    width: "100%"
                }}>
                <center>
                    <Container style={{ width: "max-content" }}>
                        <p>{this.props.msg}</p>
                        <Button
                            onClick={() => this.setState({ display: false })}>
                            OK
                        </Button>
                    </Container>
                </center>
            </Fragment>
        ) : (
            ""
        )
}

const mapStateToProps = state => {
    return {
        msg: state.app.msg
    }
}

export default connect(mapStateToProps)(AppMsgDisplay)
