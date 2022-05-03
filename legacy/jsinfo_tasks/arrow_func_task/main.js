/* Rewrite with arrow functions

Replace Function Expressions with arrow functions in the code below:

1. function ask(question, yes, no) {
2.   if (confirm(question)) yes();
3.   else no();
4. }
5.
6. ask(
7.   "Do you agree?",
8.   function() { alert("You agreed."); },
9.   function() { alert("You canceled the execution."); }
10. );

*/

function ask(question, yes, no) { /* Not a function expression, no need to change anything here */
    if (confirm(question)) {
        yes();
    }
    else {
        no();
    }
}

ask(
    "Do you agree?",
    () => alert("You agreed."),
    () => alert("You canceled the execution.")
)