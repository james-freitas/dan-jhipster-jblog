import {Component, OnInit} from '@angular/core';
import {Post} from "../entities/post";
import {ResponseWrapper} from "../shared";
import {PostService} from "../entities/post/post.service";

@Component({
    selector: 'jhi-home',
    templateUrl: './home.component.html',
    styleUrls: [
        'home.css'
    ]

})
export class HomeComponent implements OnInit {

    posts: Post[] = [];

    constructor(private postService: PostService) {}

    loadAll() {
        this.postService.query().subscribe(
            (res: ResponseWrapper) => {
                this.posts = res.json;
            },
            (res: ResponseWrapper) => console.log(res.json)
        );
    }

    ngOnInit() {
        console.log("ngOnInit...");
        this.loadAll();
    }

}
