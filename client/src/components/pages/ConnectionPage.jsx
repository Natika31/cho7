import React from "react"
import styled from "styled-components"
import logo from "./../../assets/images/logo.png"
import Logo from "../atoms/Logo"
import ConnectionForm from "./../organisms/ConnectionForm"
import { Link, Redirect } from "react-router-dom"
import { SubmissionError } from "redux-form"
import { login } from "../../modules/api"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { userLoginAction } from "../../modules/actionsAndReducers"

const ConnectionFormContainer = styled.div`
    width: 28vw;
    margin-left: auto;
    margin-right: auto;
    padding: 6vh 4vw;
    background: #eaeaea;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
`

const ConnectionHeader = styled.div`
    width: 100vw;
    margin-top: 5vh;
    display: flex;
    justify-content: space-around;
`
const SiteTitle = styled.h1`
    font-family: "Sevillana";
    font-size: 40px;
    text-align: center;
    margin-left: 5vw;
    margin-top: 1vh;
    display: inline-block;
`

class ConnectionPage extends React.Component {
    state = {}
    async componentDidMount() {
        document.title = "Connexion"
    }

    submit = async values => {
        if ((await login(values.username, values.password)) === true) {
            this.setState({ redirect: <Redirect to="/" /> }, () => {
                this.props.userLoginAction(true)
            })
        } else {
            throw new SubmissionError({
                username: "Erreur dans le login ou mot de passe",
                password: "Erreur dans le login ou mot de passe"
            })
        }
    }

    render = () => (
        <div>
            <Link to="/" title="Accueil">
                <ConnectionHeader>
                    <Logo src={logo} alt="logo" />
                    <SiteTitle children="La Compagnie de l ' Aventure" />
                </ConnectionHeader>
            </Link>
            <ConnectionFormContainer>
                <ConnectionForm onSubmit={this.submit} />
            </ConnectionFormContainer>
            {this.state.redirect}
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ userLoginAction }, dispatch)
}

export default connect(
    null,
    mapDispatchToProps
)(ConnectionPage)
