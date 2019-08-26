import React from 'react';
import { Button } from 'antd';
import styles from './index.css';

class ComponentTest extends React.Component{    // 构造函数
  constructor(props){        
    super(props)        
    this.state = {            
      data: 'Old State'
      }        
      console.log('子组件初始化数据','constructor');
  }    

  // 组件将要加载
  componentWillMount(){        
    console.log('componentWillMount');
  }    
  
  // 组件加载完成
  componentDidMount(){       
     console.log('componentDidMount');
  }    
  // 将要接收父组件传来的props
  componentWillReceiveProps(){        
    console.log('componentWillReceiveProps');
  }    
  
  // 子组件是不是应该更新
  shouldComponentUpdate(){        
    console.log('shouldComponentUpdate'); 
    // return false;       
    return true;
  }   

  // 组件将要更新
  componentWillUpdate(){        
    console.log('componentWillUpdate');
  }    

  // 组件更新完成
  componentDidUpdate(){        
    console.log('componentDidUpdate');
  }   

   // 组件即将销毁
  componentWillUnmount(){        
    console.log('componentWillUnmount');
  }    

  // 处理点击事件
  handleClick(){        
    console.log('更新数据：');       
     this.setState({            
       data: 'New State'
      });
    // this.props.getChildData('获取子组件的数据');
  }    
  
  // 渲染
  render(){        
    console.log('render')        
    return (           
      <div className={styles.child}>
        <div>Props: {this.props.data}</div>
        <Button onClick={()=>{this.handleClick()}}>子组件更新本身数据</Button>
      </div>
      );
  }
}


class MainTest extends React.Component{    // 构造函数
  constructor(props){       
     super(props)        
     this.state = {           
        data: 'Old Props',            
        hasChild: true
      }        
      // console.log('主组件初始化数据','constructor');
  }
  onPropsChange(){      
    console.log('更新props:');        
    this.setState({          
      data: 'New Props'
    });
}
  onDestoryChild(){       
    console.log('删除子组件：');       
     this.setState({           
        hasChild: false
      });
  }

  //通过调用父组件函数来获取子组件数据的方法
  // getChildData = (value) => {
  //   console.log(value)
  // }
   
  render(){        
    return (            
      <div className={styles.main}>
        {
          this.state.hasChild ? 
          <ComponentTest 
            data={this.state.data}
            // getChildData={(value) => this.getChildData(value)}
            /> : null
        }                
        <button onClick={()=>{this.onPropsChange()}}>主组件改变Props</button>
        <button onClick={()=>{this.onDestoryChild()}}>删除子组件</button>
      </div>
      );
  }
}

export default MainTest;