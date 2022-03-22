import { Component } from 'react';

class Subject extends Component {
    render() {
      return (
        <header>
          <h1><a href='/'
          onClick={function(e){
            e.preventDefault();
            this.props.onChangePage();
          }.bind(this)}>
          {this.props.title}
            </a></h1>
        </header>
      )
    }
  }

export default Subject;

/* <header>
    <h1><a href='/' onClick={function(e){
      e.preventDefault(); // 이벤트 발생시 리렌더링 막음
      //this.state.mode = 'welcome'; 
      // 1. event내에서는 this가 App이 아님
      // 2. bind로 고쳐도 이벤트 앞에서 바뀐 state의 존재를 알아차리지 못함 고로 setState사용
      this.setState({
        mode:'welcome'
    });
  }.bind(this)}>{this.state.subject.title}</a></h1>
</header> */