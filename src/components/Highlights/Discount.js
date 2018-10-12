import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

class Discount extends Component {

    state = {
        discountStart:0,
        discountEnd: 30
    }

    porcentage = () =>{
        if(this.state.discountStart < this.state.discountEnd){
            this.setState({
                discountStart: this.state.discountStart + 1
            })
        }
    }
    render() {
        return (
            <div className="center_wrapper">
               <div className="discount_wrapper">
               <Fade
               onReveal={()=> this.porcentage()}
               >
                  <div className="discount_porcentage">
                    <span>{this.state.discountStart}%</span>
                    <span>OFF</span>
                   </div>
               </Fade>

               <Slide right>
                   
                  <div className="discount_description">
                    <h3>Purchase Ticket Before June 20th!</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <div>
                        <button></button>
                    </div>
                  </div>
               </Slide>
                  
                 
               </div>
                
            </div>
        );
    }
}

export default Discount;