import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../../models/ingredient.model';
import { ShoppingListService } from '../../services/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit,OnDestroy {
  ingredients: Ingredient[];
  private subscription : Subscription;
  constructor(private slService:ShoppingListService) {

  }


  ngOnInit(): void {
    this.ingredients = this.slService.getIngredients();
    this.subscription = this.slService.ingredientChanged.subscribe((ingredients:Ingredient[])=>{
      this.ingredients = ingredients;
    });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onEditItem(index:number){
    this.slService.startedEditing.next(index);
  }
}
