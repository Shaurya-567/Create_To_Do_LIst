document.querySelector("button").addEventListener("click", function () {
 
  let task = document.querySelector("#maininp").value;
  
  document.querySelector("#maininp").value = "";
  let entry = $('<li class="item"><input type="checkbox" class="checkBox"><span class="itemText">' + task + '</span><input type="text" class="editBox"><button class="edit" >Edit</button><button class="delete">Delete</button></li>');
  $("#ulId").append(entry);
  $(".checkBox").click(function(){
      if($(this).is(":checked")){
          $("#CompleUl").append($(this).parent(".item"))
      }else {
          $("#ulId").append($(this).parent(".item"))
      }  
  });
  $(".edit").click(function(){
      if($(this).parent(".item").find(".editBox").val()== ""){
          $(this).prev().val($(this).parent(".item").find(".itemText").text());
      }else{
          $(this).parent(".item").find(".itemText").text($(this).prev().val());
      }
  });
  $(".delete").click(function(){
      $(this).parent('.item').remove();
  });
});
