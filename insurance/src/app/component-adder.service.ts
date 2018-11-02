import { Injectable, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComponentAdderService {

  viewRef: ViewContainerRef;
  constructor(private resolver: ComponentFactoryResolver) { }
  
  setViewRef(viewRef) {
    this.viewRef = viewRef;
  }

  addComponent(compToAdd: any) : any {
    const factory = this.resolver.resolveComponentFactory(compToAdd);
    const compRef = factory.create(this.viewRef.parentInjector);
    this.viewRef.insert(compRef.hostView);
    console.log(compRef);
    console.log(compRef.hostView);
    return compRef;
  }
}
