import { connect } from 'react-redux';
import { jumpTo, squareClick } from '../actions/actions';
import Game from '../components/Game';

const mapStateToProps = state => {
    return {
        history: state.history,
        stepNumber: state.stepNumber,
        xIsNext: state.xIsNext
    }
}

const mapDispatchToProps = dispatch => {
    return {
        jumpTo: step => { dispatch(jumpTo(step)) },
        handleClick: index => { dispatch(squareClick(index)) }
    }
}

const GameContainer = connect(mapStateToProps, mapDispatchToProps)(Game);

export default GameContainer;