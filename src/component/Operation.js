import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment,reset } from '../action/action';

const Operation = () => {

    const Data = useSelector((state) => state.OperationCounter.count)
    const dispatch=useDispatch();

  return (
    <>
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center mt-5">
                      <h1>{Data}</h1>
                      <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                          <button onClick={() => dispatch(increment())} type="button" className="btn btn-danger">Increment</button>
                          <button onClick={() => dispatch(decrement())} type="button" className="btn btn-warning">Decrement</button>
                          <button onClick={() => dispatch(reset())} type="button" className="btn btn-success">Reset</button>
                      </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Operation
