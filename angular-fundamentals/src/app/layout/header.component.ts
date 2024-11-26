import { NgFor } from "@angular/common";
import { Component } from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";

interface Link{
    title: string;
    route: string;
}

@Component({
    selector: "ios-header",
    imports: [
        RouterLink, 
        RouterLinkActive, 

        NgFor
    ],
    templateUrl: "./header.component.html"
})
export class HeaderComponent {
    links: Link[] = [
        { title: "Home", route: "/" },
        { title: "Posts", route: "/posts" },
        { title: "Products", route: "/products" },
        { title: "Shopping Cart", route: "/cart" },
        { title: "Contact", route: "/contact" },
    ]
}

