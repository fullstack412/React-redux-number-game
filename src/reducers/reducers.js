
import * as types from '../cosntants/constants';
import { calculateWinner } from '../actions/actions';

const initialState = {
    history: [{
        squares: Array(9).fill(null),
    }],
    stepNumber: 0,
    xIsNext: true,
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case types.NEW_GAME:
            return initialState;
        case types.SQUARE_CLICK:
            const history = state.history.slice(0, state.stepNumber + 1);
            const current = history[history.length - 1];
            const squares = current.squares.slice();

            if (calculateWinner(squares) || squares[action.squareId]) {
                return;
            }

            squares[action.squareId] = state.xIsNext ? 'X' : 'O';
    
            return Object.assign({}, state, {
                history: history.concat([{
                    squares: squares
                }]),
                stepNumber: history.length,
                xIsNext: !state.xIsNext,
            });
        case types.JUMP_TO:
            return Object.assign({}, state, {
                stepNumber: action.step,
                xIsNext: (action.step % 2) === 0,
            });
        default:
            return state;
    }
}

export default rootReducer;
