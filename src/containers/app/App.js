import React,{Component} from 'react';
import {connect} from 'react-redux';
import Button from '../../componentes/button';
import List from '../../componentes/list';
import Input from '../../componentes/input'; 

import {addTodo} from '../../store/actions/todo'
class App extends Component{
    state={
        input:''
    };

    handleOnClick=()=>{
        console.log('Button was clicked');
    };

    handleOnChange=(event)=>{
        //console.log('Input was clicked', event.target.value);
        this.setState({input: event.target.value})
        console.log(this.state);
    }
    render(){
        const {input}=this.state;
        const {listTodo}=this.props;
        console.log(listTodo);
        return (
            <div>
                <List todoList={[]}/>
                <Input onChange={event=>this.handleOnChange(event)} value={input}/>
                <Button onClick={()=>this.handleOnClick()}> Adicionar </Button>               
            </div>
        );
    }
}
const mapStateToProps=state=>({
    listTodo: state.todo
});
//export default App;
export default connect(mapStateToProps, {addTodo})(App);