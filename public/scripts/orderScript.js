$(function() {
   
    console.log("doc is ready");
   
    
    //use jquery selector to grab any one of those we've clicked

    $('li').click(
        (e) => {

        e.preventDefault(); 

        console.log($(this).text); 

    })
});