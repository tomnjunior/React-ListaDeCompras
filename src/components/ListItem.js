import React from 'react'
import Card from './Card'

function DoneImg(props){

    if (props.done){
        return(
            <img className="imgButton" alt="done" src='../assets/on.png'></img>
        )
    }else{
        return(
            <img className="imgButton" alt="undone" src='../assets/off.png'></img>
        )
    }
}



function ListItem(props){


    return(<li>
                <Card className={props.item.done?"done item" : "item"}>
                    {props.item.text}
                    <div>
                        <button onClick={()=>{props.onDone(props.item)}}>
                            <DoneImg done={props.item.done}></DoneImg>
                        </button>
                        <button onClick={()=>{props.onItemDeleted(props.item)}}>
                            <img className="imgButton" src="../assets/bin.png" alt="delete item"></img>
                        </button>
                    </div>
                </Card>
            </li>)
}

export default ListItem;