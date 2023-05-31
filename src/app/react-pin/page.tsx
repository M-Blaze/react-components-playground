'use client'

import { Metadata } from 'next';
import { useReducer } from 'react';

import CopyToClipboard from "../components/CopyToClipboard"
import ReactPin, { PinType } from "./ReactPin"


export const metadata: Metadata = {
  title: 'React Pin',
  description: 'React pin component',
};

type ReactPinState = {
  length: number,
  type: PinType
}

enum ActionKind {
  updateLength = 'LENGTH',
  updateType = 'TYPE'
}

type LengthUpdateAction = {
  type: ActionKind.updateLength,
  payload: number
}

type TypeUpdateAction = {
  type: ActionKind.updateType,
  payload: PinType
}

type Action = LengthUpdateAction | TypeUpdateAction

const InputTypes = ['numeric', 'alphaNumeric', 'alphaNumericPassword', 'numericPassword', 'alphabet'] as const

const reactPinReducer = (state: ReactPinState, action: Action) => {
  switch(action.type) {
    case ActionKind.updateLength: {
      return {
        ...state,
        length: action.payload
      }
    }

    case ActionKind.updateType: {
      return {
        ...state,
        type: action.payload
      }
    }

    default: return state
  }
}

const INITIAL_STATE: ReactPinState = {
  length: 6,
  type: 'alphaNumeric'
}
 
export default function ReactPinPage() {
  const [reactPinProps, dispatch] = useReducer(reactPinReducer, INITIAL_STATE)

  return (
    <>
      <div className="block-header text-center">
        <div className="container">
          <h1>React Pin</h1>
          <p>Use <CopyToClipboard text='npm -i react-pin-widget'/> or <CopyToClipboard text='yarn add react-pin-widget'/> to add this component in your project</p>
        </div>
      </div>
      <div className="component-wrapper text-center">
        <div className="container">
          <div className="inputs-block text-left">
            <div className="flex justify-center" style={{ marginBottom: '20px' }}>
              <div className="input-group" style={{ marginRight: '10px' }}>
                <label htmlFor="pin-length" style={{ marginBottom: '5px', display: 'inline-block' }}>Length</label> <br />
                <input type="number" id='pin-length' value={reactPinProps.length} onChange={eve => dispatch({ type: ActionKind.updateLength, payload: Number(eve.target.value) })} />
              </div>
              <div className="input-group">
                <label htmlFor="pin-type" style={{ marginBottom: '5px', display: 'inline-block' }}>Type</label> <br />
                <select name="react-pin-type-select" id='pin-type' value={reactPinProps.type}>
                  {
                    InputTypes.map(type => <option value={type} key={type}>{type}</option>)
                  }
                </select>
              </div>
            </div>
          </div>
          <ReactPin {...reactPinProps}/>
        </div>
      </div>
    </>
  )
}
