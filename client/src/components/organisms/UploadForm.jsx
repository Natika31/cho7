import styled from "styled-components";
import React from 'react';

const PlacementNCreation = styled.div`
    font-size: 30px;
    padding: 10px 20px;   
`;

const UploadContainer = styled.div`
    margin-top: 8vh;
    height: 15vh;
`;

const FooterUpload = styled.div`
    padding: 10px;
`;

export default class UploadForm extends React.Component{

    render(){
        return(<div>
            <PlacementNCreation children="Nouvelle Création" />
            <UploadContainer children="Formulaire Upload ici" />
            <FooterUpload children="Bouton publier"/>
        </div>)
    }
}