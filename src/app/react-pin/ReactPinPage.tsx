'use client'

import { useReducer, useState } from 'react';

import CopyToClipboard from "../components/CopyToClipboard"
import ReactPin, { PinType } from "./ReactPin"

type Length = number

type ReactPinState = {
  length: Length,
  type: PinType
}

enum ActionKind {
  updateLength = 'LENGTH',
  updateType = 'TYPE',
  resetState = 'RESET'
}

type LengthUpdateAction = {
  type: ActionKind.updateLength,
  payload: Length
}

type TypeUpdateAction = {
  type: ActionKind.updateType,
  payload: PinType
}

type ResetStateAction = {
  type: ActionKind.resetState
}

type Action = LengthUpdateAction | TypeUpdateAction | ResetStateAction

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

    case ActionKind.resetState: {
      return {
        ...INITIAL_STATE
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
  const [enteredValue, setEnteredValue] = useState<string>('')
  const [reactPinProps, dispatch] = useReducer(reactPinReducer, INITIAL_STATE)
  
  const onFillHandler = (code: string) => {
    setEnteredValue(code)
  }

  const lengthHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value)
    const length = (value > 0) ? value : 0

    dispatch({ type: ActionKind.updateLength, payload: length })
  }

  const typeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch({ type: ActionKind.updateType, payload: e.target.value as PinType })
  }

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
            <div className="flex justify-center items-end" style={{ marginBottom: '20px' }}>
              <div className="input-group" style={{ marginRight: '10px' }}>
                <label htmlFor="pin-length" style={{ marginBottom: '5px', display: 'inline-block' }}>Length</label> <br />
                <input type="number" id='pin-length' autoComplete='off' style={{ padding: '5px' }} defaultValue={reactPinProps.length} onChange={lengthHandler} />
              </div>
              <div className="input-group">
                <label htmlFor="pin-type" style={{ marginBottom: '5px', display: 'inline-block' }}>Type</label> <br />
                <select name="react-pin-type-select" id='pin-type' autoComplete='off' style={{ padding: '5px' }} value={reactPinProps.type} onChange={typeHandler}>
                  {
                    InputTypes.map(type => <option value={type} key={type}>{type}</option>)
                  }
                </select>
              </div>
              <div className="button-group"  style={{ marginLeft: '10px' }}>
                <button type='button' style={{ padding: '5px 10px', cursor: 'pointer' }} onClick={() => dispatch({ type: ActionKind.resetState })}>Reset</button>
              </div>
            </div>
          </div>
          <div className="text-wrap" style={{ marginBottom: '20px' }}>
            <strong>Value entered:</strong>&nbsp; {enteredValue}
          </div>
          <ReactPin type={reactPinProps.type} length={reactPinProps.length} onFill={onFillHandler} />
        </div>
      </div>
    </>
  )
}
