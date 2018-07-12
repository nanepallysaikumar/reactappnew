import React, {Component} from 'react';


export default class Service extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items : []
        }
    }
    render() {
        console.log("renderdata", this.state.items);
        let itmelist = this.state.items.map((item,index) => {
            console.log(item);
            return(
            <ul key={index}>
                Name:<li>{item.name}</li>
                Image: <img height="30" width="30" src={item.image}></img>
                Price: <li>{item.price}</li>
            </ul>
            );
        });
        return(
            <div>
                Servicecomponnet:
                <div>
                    {itmelist}
                    </div>
                </div>
        );
    }
    componentDidMount() {
          
              fetch('http://localhost:3000/items').then(response => response.json()).then(
                  data => {
                      console.log(data);
                    this.setState({items:data})
                  }
              );
    }
}