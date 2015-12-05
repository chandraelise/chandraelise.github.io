$(document).ready(function () {

    $('#visible_pillow').mousedown(function(){
    $('#visible_pillow').hide();
    $('#hidden_pillow').show();
  });
    $('#visible_pillow').mousedown(function(){
    $('#visible_pillow').hide();
    $('#hidden_pillow').show();
  });
    $('#hidden_pillow').mouseup(function(){
    $('#visible_pillow').show();
    $('#hidden_pillow').hide();
  });
    var audio = $('#grunt')[0];
    console.log('audio');
     $('#visible_pillow').mousedown(function() {
     audio.play();
  });
});

  var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/10DvpWMP20ip2TsjayyeFLUfx-OeZa2IjhMJ8ffk-Jjs/pubhtml';
  Tabletop.init( { key: public_spreadsheet_url,
                     callback: showInfo,
                     simpleSheet: true } )
  function showInfo(data, tabletop) {

    data.sort(function(a,b) {
      return +new Date(b.Timestamp) - +new Date(a.Timestamp);
    });

    console.log(data);

    var post = d3.select("#posts")
      .selectAll(".post")
      .data(data)
      .enter()
      .append("div")
      .classed("post", true);

    var vent = post.append("aside")
      .classed("vent", true)
      .html(function(d) {
        var str = "<p>";
          str += d.vent + "</p>";
          return str;
    });

    post.append("aside")
        .classed("time", true)
        .html(function(d) { return "<b>" + d.Timestamp + "</b><br>"; 
    });
      
  }

$('form').on('submit', function() {
  event.preventDefault();

  //       // Get the form instance

  //       //when we submit this form, the event is a form--and it's putting the whole form in an object
  var $form = $(event.currentTarget);

  console.log($('#venting').val());
  
  var venting= $('#venting').val();

  if(venting !='') {

  //   //Network > XHR to see what ajax is doing
  //   //input type to upload a file is <input type="file">
       

  //       //This is the fancy stuff
  //       //-------------------------------
  //       // Use Ajax to submit form data
    // var url = 'https://docs.google.com/spreadsheets/d/10DvpWMP20ip2TsjayyeFLUfx-OeZa2IjhMJ8ffk-Jjs/pubhtml';
    var url = 'https://docs.google.com/forms/d/1iYVQncBtWVZ3gMMJifj3FQdEI4iGDaB0wSZU27EC200/formResponse';

    var data = $form.serialize();

    $.post(url, $form.serialize(), function() {

    }).always(function() {
    console.warn('Data sent to Google.');
  //           // $('body').append('<div>Thank you for submitting a form!</div>');
    });

  //       //clear the entry areas
    } else {
        alert('please fill entire form');
      }

     $( 'form' ).each(function(){
    this.reset();
    });
  });
  

    


  


  

  // function showInfo(data, tabletop) {
  //   //alert("Successfully processed!")
  //   console.log(data)
  //   // data.forEach(function(d,i){
  //   //   $('#post').append('<div>'+d.vent+'</div>');
  //   })
  // }


// $('.button').click() function(){
//   $('#post').html(tabletop.data()[1].Statement);
// });

