var ToC =
  "";

var newLine, el, title, link;

$("h3").each(function() {

  el = $(this);
  title = el.text();
  link = "#" + el.attr("id");

  el.addClass('sg-docs-title');
  newLine =
    "<li>" +
      "<a href='" + link + "'>" +
        title +
      "</a>" +
    "</li>";

  ToC += newLine;

});

ToC +=
   "</ul>" +
  "</nav>";

$("#docsNav").append(ToC);
