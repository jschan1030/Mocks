import React from "react";
import { useParams } from 'react-router-dom';

import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../shared/util/validators';

const DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'Empire State Building',
        description: 'One of the best skyscrapers ever.',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Empire_State_Building_%28aerial_view%29.jpg/250px-Empire_State_Building_%28aerial_view%29.jpg',
        address: '20 W 34th St, New York, NY 10001',
        location: {
            lat:40.7484405,
            lng:-73.9878584
        },
        creator:'u1'
    },
    {
        id: 'p2',
        title: 'Empire State Building',
        description: 'One of the best skyscrapers ever.',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Empire_State_Building_%28aerial_view%29.jpg/250px-Empire_State_Building_%28aerial_view%29.jpg',
        address: '20 W 34th St, New York, NY 10001',
        location: {
            lat:40.7484405,
            lng:-73.9878584
        },
        creator:'u2'
    }
]

const UpdatePlace = () => {
    const placeId = useParams().placeId;

    const identifiedPlace = DUMMY_PLACES.find(p => p.id === placeId);

    if (!identifiedPlace) {
        return <div className="center">
            <h2>Could not find place!</h2>
        </div>
    }

    return <form>
        <Input id="title" element="input" type="text" label="Title" validators={[VALIDATOR_REQUIRE()]} onInput={() => {}} value={identifiedPlace.title} valid={true} errorText="Please enter a valid title."/>
        <Input id="description" element="textarea" type="text" label="Description" validators={[VALIDATOR_MINLENGTH(5)]} onInput={() => {}} value={identifiedPlace.description} valid={true} errorText="Please enter a valid description."/>
    </form>
}

export default UpdatePlace;