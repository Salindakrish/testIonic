import { TodoServices } from './../../providers/todo-services';
import { Component } from '@angular/core';

import { NavController,ToastController,AlertController} from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  todos: Observable<any>;

  constructor(public navCtrl: NavController, public todoService: TodoServices , public alertCtrl : AlertController , public toastCtrl:ToastController) {
    
    this.loadTodos();
    
  }

  loadTodos()
  {
      this.todos = this.todoService.getTodos();
  }

  addTodos()
  {
      let prompt = this.alertCtrl.create({
          title: 'Add Todo',
          message: 'Enter the text for your new todo',
          inputs :[{
            name:'text',
            placeholder : 'Buy Milk'
                  },],
          buttons : [
            {
            text: 'Cancel'
            },
            {
              text: 'Save',
              handler: data=>{
                  this.todoService.addTodos(data.text).subscribe(data => {
                      this.showToast(data.msg);
                      this.loadTodos();
                  });  
              }
            }
          ]

      });
      prompt.present();
  }

  removeTodos(id)
  {
      this.todoService.deleteTodos(id).subscribe(data=>{
        this.showToast(data.msg);
        this.loadTodos();
      });
  }
  
  private showToast(message:string)
    {
        let toast = this.toastCtrl.create({
          message:message,
          duration: 3000
        });

        toast.present();
    }
}
