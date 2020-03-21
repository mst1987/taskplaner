import { Injector, Pipe, PipeTransform } from '@angular/core';
import { Task } from 'src/app/taskplaner/models/task.model';
@Pipe({
    name: 'done'
})
export class DoneTasksPipe implements PipeTransform {
    public constructor(private readonly injector: Injector) {}

    transform(value: Array<any>, callback: any): any {
        return value.filter((task: Task) => task.status === 'done');
    }
}

@Pipe({
    name: 'progress'
})
export class ProgressTasksPipe implements PipeTransform {
    public constructor(private readonly injector: Injector) {}

    transform(value: Array<any>, callback: any): any {
        return value.filter((task: Task) => task.status === 'in progress');
    }
}

@Pipe({
    name: 'open'
})
export class OpenTasksPipe implements PipeTransform {
    public constructor(private readonly injector: Injector) {}

    transform(value: Array<any>, callback: any): any {
        return value.filter((task: Task) => task.status === 'open');
    }
}
