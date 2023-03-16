# ImageViewer

 elementRef
we access the element
ElementRef is simply like document.getElementById('myId');


templateRef
we access the child of the parent element
TemplateRef is an embedded template which you can use in ViewContainerRef.createEmbeddedView to create Embedded View.

*ngFor is doing the same, it reads the element as a TemplateRef and injects mutiple times to create view with data

TemplateRef cannot be used as an element for css decorations in .ts

viewContainer
we can add or remove element inside this element

