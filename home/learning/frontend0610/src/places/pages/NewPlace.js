import React, { useCallback, useReducer } from 'react';

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import {
    VALIDATOR_REQUIRE,
    VALIDATOR_MINLENGTH
} from '../../shared/util/validators';
import './NewPlace.css';

//formReducer lecture 64
const formReducer = (state, action) => {
    switch (action.type) {
        case 'INPUT_CHANGE':
            let formIsValid = true;
            for (const inputId in state.inputs) {
                if (inputId === action.inputId) {
                    formIsValid = formIsValid && action.isValid;
                } else {
                    formIsValid = formIsValid && state.inputs[inputId].isValid;
                }
            }
            return {
                ...state,
                inputs: {
                    ...state.inputs,
                    [action.inputId]: { value: action.value, isValid: action.isValid }
                },
                isValid: formIsValid
            };
        default:
            return state;
    }
};

const NewPlace = () => {
    // useReducer returns something
    // in this case use object destructuring
    const [formState, dispatch] = useReducer(formReducer, {
        inputs: {
            title: {
                value: '',
                isValid: false
            },
            description: {
                value: '',
                isValid: false
            }
        },
        isValid: false
    })
    // to avoid infinite loop, useCallBack() wrapping
    const inputHandler = useCallback((id, value, isValid) => {
        dispatch({ type: 'INPUT_CHANGE', value: value, isValid: isValid, inputId: id })
    }, [])

    const placeSubmitHandler = event => {
        event.preventDefault();
        // send to back end here
        console.log(formState.inputs);
    }

    return (
        <form className="place-form" onSubmit={placeSubmitHandler}>
            <Input
                id='title'
                element="input"
                type="text"
                label="Title"
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Please enter a valid title."
                onInput={inputHandler}
            />
            <Input
                id='address'
                element="input"
                type="text"
                label="Address"
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Please enter a valid address."
                onInput={inputHandler}
            />
            <Input
                id='description'
                element="textarea"
                type="text"
                label="Description"
                validators={[VALIDATOR_MINLENGTH(5)]}
                errorText="Please enter a valid description (at least 5 char)."
                onInput={inputHandler}
            />
            <Button type="submit" disabled={!formState.isValid}>
                ADD PLACE
            </Button>
        </form>
    )

}

export default NewPlace;