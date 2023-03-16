import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentPage =0
  checkWindowIndex(index : number){
    
      return Math.abs(this.currentPage-index) < 5
  }
  images = [
    {title:"At The Beach",imageUrl:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60"},
     {title:"At The Snow",imageUrl:"https://images.unsplash.com/photo-1551582045-6ec9c11d8697?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c25vd3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60"},
     {title:"At The Mountain",imageUrl:"https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bW91bnRhaW58ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60"},
     {title:"At The Cloud",imageUrl:"https://images.unsplash.com/photo-1513002749550-c59d786b8e6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2xvdWR8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60"},
     {title:"At The Beach",imageUrl:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60"},
     {title:"At The Snow",imageUrl:"https://images.unsplash.com/photo-1551582045-6ec9c11d8697?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c25vd3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60"},
     {title:"At The Mountain",imageUrl:"https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bW91bnRhaW58ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60"},
     {title:"At The Cloud",imageUrl:"https://images.unsplash.com/photo-1513002749550-c59d786b8e6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2xvdWR8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60"},
     {title:"At The Beach",imageUrl:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60"},
     {title:"At The Snow",imageUrl:"https://images.unsplash.com/photo-1551582045-6ec9c11d8697?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c25vd3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60"},
     {title:"At The Mountain",imageUrl:"https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bW91bnRhaW58ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60"},
     {title:"At The Cloud",imageUrl:"https://images.unsplash.com/photo-1513002749550-c59d786b8e6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2xvdWR8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60"},
     {title:"At The Beach",imageUrl:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60"},
     {title:"At The Snow",imageUrl:"https://images.unsplash.com/photo-1551582045-6ec9c11d8697?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c25vd3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60"},
     {title:"At The Mountain",imageUrl:"https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bW91bnRhaW58ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60"},
     {title:"At The Cloud",imageUrl:"https://images.unsplash.com/photo-1513002749550-c59d786b8e6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2xvdWR8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60"},

    ]
}
