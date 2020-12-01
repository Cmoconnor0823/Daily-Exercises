/*
Here is an example of a function in vanilla javascript that makes an image, sets its source and adds the image to the page:

````

//somewhere in our html file
<div id="myImageDiv"></div>
//

function makeImg(){
    const myImg = document.createElement("img");
    const imageDiv = document.getElementById("myImageDiv");

    myImg.setAttribute("src", "./myNonExistantImage.png");
    imageDiv.append(myImg)
}

````

Using vanilla javascript write a similar function that creates a square, red div that measures 300px by 300px. You can use inline styling or create classnames and provide css for the classnames.

Extra Credit: Write the same function in JQuery.

Extra Extra Extra Credit: What would be the method used in React to do the same thing?  How might that look?
*/

function redSqr(){
    const body = document.getElementById('root');
    const redBox = document.createElement("div");
    document.get
    redBox.setAttribute("style", "background-color:red;height:300px;width:300px;");
    body.append(redBox);

}


// jQuery jQuery jQuery jQuery jQuery

function reddersqr(){

    const redderBox = document.createElement('div')
    $('redderBox').setAttribute('id', 'thisIsExtra')
    $('redderBox').css('background-color', 'red')
    $('redderBox').css('height', '300px')
    $('redderBox').css('width', '300px')
    $('body').append(redderBox)

}
redderBox()


// react react react


const reddest = {background: 'red', width: 300, height: 300};

class reddestBox extends React.Component{
    constructor(props){
        super(props);
    }

render(){
    return(
        <div style = {reddest}>

        </div>
        
    );
}
};
// I have definately rewrote someone elses code as I really have no clue.
//  I feel as if I am falling behind and struggling.
//   I get plenty of help out of class but feel I  need more comp. time