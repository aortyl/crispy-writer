import {Component} from '@angular/core';
import {AngularFire, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2';
import {ROUTER_DIRECTIVES} from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'new-story',
    templateUrl: 'new-story.component.html',
    styleUrls: ['new-story.component.css'],
    directives: [ROUTER_DIRECTIVES]
})
export class NewStoryComponent {
    stories:FirebaseListObservable<any>;
    selectedStory:FirebaseObjectObservable<any>;
    activeStories:FirebaseListObservable<any>;
    oldStories:FirebaseListObservable<any>;
    sections:FirebaseListObservable<any>;
    prevSection:FirebaseObjectObservable<any>;
    storyKey:string;
    sectionCount:number;

    constructor(af:AngularFire) {
        this.stories = af.database.list('/stories');
        this.activeStories = af.database.list('/stories', {
            query: {
                orderByChild: 'status',
                equalTo: 'active'
            }
        });
        this.oldStories = af.database.list('/stories', {
            query: {
                orderByChild: 'status',
                equalTo: 'finished'
            }
        });
    }

    //stories
    addStory(newTitle:string) {
        this.stories.push({
            title: newTitle,
            status: 'active',
            sections: []
        });
    }

    updateStory(key:string, newStatus:string) {
        this.stories.update(key, {status: newStatus});
    }
}
