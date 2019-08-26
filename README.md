# React-lifeCycle
简单描述了一个react组件的生命周期函数demo；初始化组件-改变组件props-改变组件state-等组件加载，更新，卸载的全过程

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
  

