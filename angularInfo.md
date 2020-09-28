# Angular Talking points and information (A Revision)

### Angular Event bindings syntax 

Generally the onClick event bindings that are there in vanilla JS/React are denoted in the following way in Angular. These can be attributed to DOM properties. 

(click)="someFunction($event)" activates or invokes the someFunction method which is in the associated TS file for this component. 4

This can also be written as on-click in Angular if you want to write it like that. 

The other event handlers are 

(drag)="myFunction()"
(drop)="myFunction()"
(dragover)="myFunction()"

(blur)="someFunction()"  
(focus)="someFunction()" 

(scroll)="someFunction()"

(submit)="someFunction()"

(click)="someFunction()"      
(dblclick)="someFunction()"   

(cut)="someFunction()"
(copy)="someFunction()"
(paste)="someFunction()"

(keyup)="someFunction()"
(keypress)="someFunction()"
(keydown)="someFunction()"

(mouseup)="someFunction()"
(mousedown)="someFunction()"
(mouseenter)="someFunction()"

### Angular Template reference variable syntax 

Basically you can add a #name to any HTML object to make it a template reference variable 

so in this example we can do this 

`<input #phone placeholder="phone number" />`
<button (click)="callPhone(phone.value)">Call</button>

In the above code the value is based on the template (HTML) where the reference is declared. So basically if I try to pass phone.value in the HTML it will work but if I try to do the same inside the ts file only it wont work. 

In most cases, Angular sets the reference variable's value to the element on which it is declared.In the previous example, phone refers to the phone number <input>. The button's click handler passes the <input> value to the component's callPhone() method.

This can also be written as ref-fax or something similar to how you can write on-click 

### Pipes in Angular 

Pipes are simple functions that you can plug and play directly in the template which allows you to transform strings/numbers etc. to do simple things 

for example you can have a pipe which upper cases stuff, pipes which convert numbers to money immediately and so on. You can even declare your own pipe. The useful thing about pipes is if it is something reusable or used a lot then you can 

Angular provides built-in pipes for typical data transformations, including transformations for internationalization (i18n), which use locale information to format data. The following are commonly used built-in pipes for data formatting:

DatePipe: Formats a date value according to locale rules.
UpperCasePipe: Transforms text to all upper case.
LowerCasePipe: guess 

<p>The hero's birthday is {{ birthday | date }}</p>

Pipe operator is a single | 

The template expression {{ amount | currency:'EUR' }} transforms the amount to currency in euros. Follow the pipe name (currency) with a colon (:) and the parameter value ('EUR').

You can also chain pipes as well 

{{  birthday | date:'fullDate' | uppercase}} something like this 

different pipes can take different parameters as well 

Creating pipes is also something which is possible 

It is important to remember that you need to add FormsModule to the app.module.ts as well as import the new pipe into the app.module.ts file otherwise it wont work. 

# Directives

### Attribute Directives in Angular 

* NgClass 
* NgStyle 
* NgModel 

<div [ngClass]="isSpecial ? 'special' : ''">This div is special</div>

<dig [ngStyle]="currentStyles"> </div>

[(ngModel)] is what we use when we want to do two way data binding. 

<label for="example-ngModel">[(ngModel)]:</label>
<input [(ngModel)]="currentItem.name" id="example-ngModel">

### Structural Directives in Angular

Structural directives are responsible for HTML layout. They shape or reshape the DOM's structure, typically by adding, removing, or manipulating elements.

Structural directives are easy to recognize. An asterisk (*) precedes the directive attribute name as in this example.



### Structural Directives 

