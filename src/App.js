
import { Component } from 'react';
import TOC from './components/TOC';
import Subject from './components/Subject';
import Content from './components/Content';
import './App.css';



class App extends Component {
  constructor(props){ //랜더링보다 더 빠르게 실행되기 원하는 코드
    super(props);
    // App이 내부적으로 사용할 용도 state
    this.state = {
      mode:'read',
      selected_content_id: 2,
      subject:{title:'React Study'},
      welcome:{title:'Welcome', desc: 'Hello React'},
      contents:[
        {id:1, title:'HTML', desc: 'HTML is for information'},
        {id:2, title:'CSS', desc: 'CSS is for design'},
        {id:3, title:'JavaScript', desc: 'JavaScript is for interactive'}
      ]
    }
  }
 // render함수는 state를 포함하는 내용이 변할때 자동으로 실행됨
  render(){
    var _title, _desc = null;
    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if(this.state.mode === 'read'){
      var i = 0;
      while(i < this.state.contents.length){
        var data = this.state.contents[i];
        if(data.id === this.state.selected_content_id){
          _title = this.state.contents[i].title;
          _desc = this.state.contents[i].desc;
          break;
        }
        i = i + 1;
      }
      
    }
    return (
      <div className='App'>
        <Subject 
        title={this.state.subject.title}
        onChangePage = {function(){
          this.setState({
            mode:'welcome'
          })
        }.bind(this)}/>
        
        <TOC data={this.state.contents}
        onChangePage = {function(id){
          this.setState({
            mode:'read',
            selected_content_id: Number(id)
          })
        }.bind(this)}/>
        <Content title={_title} desc={_desc}/>
      </div>
    )
  }
}


export default App;
