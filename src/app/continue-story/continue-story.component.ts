import {Component} from '@angular/core';
import {AngularFire, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2';
import {ROUTER_DIRECTIVES} from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'continue-story',
    templateUrl: 'continue-story.component.html',
    styleUrls: ['continue-story.component.css'],
    directives: [ROUTER_DIRECTIVES]
})
export class ContinueStoryComponent {
    selectedStory:FirebaseObjectObservable<any>;
    activeStories:FirebaseListObservable<any>;
    sections:FirebaseListObservable<any>;
    prevSection:FirebaseObjectObservable<any>;
    storyKey:string;
    sectionCount:number;

    constructor(af:AngularFire) {
        this.activeStories = af.database.list('/stories', {
            query: {
                orderByChild: 'status',
                equalTo: 'active'
            }
        });

        // subscribe to changes
        this.activeStories.subscribe(queriedItems => {
            let index = Math.floor(Math.random() * queriedItems.length);
            this.selectedStory = queriedItems[index];
            this.storyKey = queriedItems[index].$key;
            this.sections = af.database.list('/stories/' + this.storyKey + '/sections');

            this.sections.subscribe(sections => {
                this.sectionCount = sections.length;
                if (this.sectionCount) {
                    this.prevSection = sections[this.sectionCount - 1];
                }
            });

        });
    }

    saveSection(text:string) {
        this.sections.push({
            story: this.storyKey,
            text: text,
            index: this.sectionCount + 1
        });

    }
}
