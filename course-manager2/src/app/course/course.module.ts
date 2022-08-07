import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { Error404Component } from "../core/components/error-404/error-404.component";
import { StarModule } from "../shared/components/star/star.module";
import { AppPipeModule } from "../shared/pipe/app-pipe.module";
import { CourseInfoComponent } from "./course-info.component";
import { CourseListComponent } from "./course-list.component";


@NgModule({
    declarations: [
        CourseListComponent,
        CourseInfoComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        StarModule,
        AppPipeModule,
        RouterModule.forChild([
            {
                path: '', redirectTo: 'courses', pathMatch: 'full'
            },
            {
                path: 'courses/info/:id', component: CourseInfoComponent
            },
            {
                path: 'courses', component: CourseListComponent
            },
            {
                path: '**', component: Error404Component
            }
        ])
    ]
})

export class CourseModule {

}