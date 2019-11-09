import { Directive,HostListener,HostBinding,EventEmitter,Output } from '@angular/core';

@Directive({
  selector: '[appDnd]'
})
export class DndDirective {

  @HostBinding('style.background') private background = '#eee';

  //private filesChangeEmiter : EventEmitter<FileList> = new EventEmitter();

  @Output() private filesChangeEmiter : EventEmitter<FileList> = new EventEmitter();


  constructor() { }

  @HostListener('dragover', ['$event']) public onDragOver(evt){
    evt.preventDefault();
    evt.stopPropagation();
    this.background = '#999';
  }
  @HostListener('dragleave', ['$event']) public onDragLeave(evt){
    evt.preventDefault();
    evt.stopPropagation();
    this.background = '#eee'
  }
  @HostListener('drop', ['$event']) public onDrop(evt){
    evt.preventDefault();
    evt.stopPropagation();
    let files = evt.dataTransfer.files;
    if(files.length > 0){
      this.background = '#eee';
      this.filesChangeEmiter.emit(files);
    }
  }

}
