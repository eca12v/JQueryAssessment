// When the page loads, have a button on the DOM that says 'generate'. Upon clicking on that
// button, append a new container onto the DOM. That container should have two buttons, one
// that reads 'delete', the other that reads 'change'. Additionally, there should be text that
// provides a number. The number should be the number of times the 'generate row' button has
// been clicked.
//
// The delete button should delete JUST the container that the button is in. The change button
// should change the background-color of the container to red. The default or 'normal' state of
// the background-color should be yellow. Clicking the button a second time should change it
// back to yellow, 3rd time red, 4th time yellow, etc.
//
// Do not add in anything additional beyond what is required. The goal is not to be clever here,
// it is simply to execute on the provided instructions.
//
// Once you are complete, check your work into a new repo and post it on GitHub.


var click = 0;



$( function () {
  //console.log('in function');
//creating button on page load
  var createButton = document.createElement('button');
  createButton.textContent = 'generate';
  createButton.id = 'buttonCreate';
  document.body.appendChild(createButton);
//createButton click event fuunction
  $('#buttonCreate').on('click', function () {
    click++;
    $('#counter').html(click);
//creating new div on button click
    var newDiv = document.createElement('div');
    newDiv.className = 'newDiv';
    newDiv.textContent = "Sup";
    $(newDiv).data("color", "yellow");
//creating new buttons within new div
    var newButtonDel = document.createElement('button');
    newButtonDel.textContent = 'Delete';
    newButtonDel.className = 'deleteButton';
    var newButtonChange = document.createElement('button');
    newButtonChange.textContent = 'Change';
    newButtonChange.className = 'changeButton';
//gives newDiv starting background color and creates all new elements
    $(newDiv).css("background-color", "yellow");
    document.body.appendChild(newDiv);
    (newDiv).appendChild(newButtonDel);
    (newDiv).appendChild(newButtonChange);


    //console.log('in button function');
  });
//deleting parent div of delete button clicked
  $(this).on('click', '.deleteButton', function(){
    $(this).parent().remove();
  });
//changing background-color of div when change button clicked by using .data()
  $(this).on('click', '.changeButton', function(){
    var parent = $(this).parent();
    console.log(parent);
    if((parent).data('color') == 'yellow'){
      (parent).data('color', 'red');
      (parent).css("background-color", "red");
    } else{
      (parent).data('color', 'yellow');
      (parent).css("background-color", "yellow");
    }
  });

});
