// import { render } from "enzyme";
import React from "react";

export default class CatList extends React.Component {

    render(){
        const cats = this.props.catPics.map((cat) => <li key={cat.id}><img alt="cat pic"  src={cat.url} /></li>)
        // debugger
        console.log('cats')
        return(
            <div>{cats}</div>
            
        )
        
    }
}
