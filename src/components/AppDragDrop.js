import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class AppDragDropDemo extends Component {
  state = {        
    tasks: [
      { 
        name:"Learn Angular",
        category:"wip", 
        bgcolor: "orange"
      },  
      {
        name:"React", 
        category:"wip", 
        bgcolor:"burlywood"
      },  
      {
        name:"Vue", 
        category:"complete", 
        bgcolor:"coral"
      }          
    ]
  }
  onDragOver = (ev) => {
    ev.preventDefault()
  }
  onDragStart = (ev, id) => {
    console.log('drag start:', id)
    ev.dataTransfer.setData("id",id)
  }
  onDrop = (ev, cat) => {       
    let id = ev.dataTransfer.getData("id");
    let tasks = this.state.tasks.filter((task) => {
        if (task.name === id) {
                 task.category = cat;           
        }              
         return task;       
     });        
     this.setState({           
        ...this.state,           
        tasks       
     });    
  }
  render () {
    var tasks = { 
      wip: [], 
      complete: []        
    }         
    this.state.tasks.forEach ((t) => {               
      tasks[t.category].push(
      <div 
        key={t.name}                     
        onDragStart={(e)=>this.onDragStart(e, t.name)}                    
        draggable                    
        className="draggable"                    
        style={{backgroundColor: t.bgcolor, padding: '1rem'}}>                       
          {t.name}                
      </div>);        
    });
    return (<div className="container">
    <nav>
      <div>
        <input id="desktop-view" name="view display" type="radio"/>
        <label htmlFor="desktop-view">
          <FontAwesomeIcon icon="desktop"/>
        </label>
        <input id="tablet-view" name="view display" type="radio"/>
        <label htmlFor="tablet-view">
          <FontAwesomeIcon icon="tablet-alt"/>
        </label>
        <input id="mobile-view" name="view display" type="radio" defaultChecked/>
        <label htmlFor="mobile-view">
          <FontAwesomeIcon icon="mobile-alt"/>
        </label>
      </div>
      <div>
        <button>
          <FontAwesomeIcon icon="square"/>
        </button>
        <button>
          <FontAwesomeIcon icon="eye"/>
        </button>
        <button>
          <FontAwesomeIcon icon="expand-arrows-alt"/>
        </button>
        <button>
          <FontAwesomeIcon icon="code"/>
        </button>
        <button>
          <FontAwesomeIcon icon="undo"/>
        </button>
        <button>
          <FontAwesomeIcon icon="redo"/>
        </button>
        <a href={'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(this.wip))}> 
          <button>
            <FontAwesomeIcon icon="download"/>
          </button>
        </a>
        <button>
          <FontAwesomeIcon icon="trash-alt"/>
        </button>
        <div className="panel-right border-left justify-content-center">
          <button>
            <FontAwesomeIcon icon="paint-brush"/>
          </button>
          <button>
            <FontAwesomeIcon icon="cog"/>
          </button>
          <button>
            <FontAwesomeIcon icon="bars"/>
          </button>
          <button>
            <FontAwesomeIcon icon="th-large"/>
          </button>
        </div>
      </div>
    </nav>
    <main>
      <section className="dropzone"
          onDragOver={(e)=>this.onDragOver(e)}                    
          onDrop={(e)=>this.onDrop(e, "complete")}>                     
          {tasks.complete}                     
      </section>    
      <aside className="wip panel-right action-bar" 
          onDragOver={(e)=>this.onDragOver(e)}                    
          onDrop={(e)=>{this.onDrop(e, "wip")}}>                    
          {tasks.wip}                
        </aside>
      </main>    
  </div>
  )}
}