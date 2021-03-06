﻿import {inject} from 'aurelia-framework';
import {CategoriesDataContext} from "./categoriesDataContext";
import {Router} from "aurelia-router";

@inject(CategoriesDataContext, Router)
export class CategoryDelete {

    constructor(datacontext , router) {
        this.datacontext = datacontext;
        this.router = router;
    }
    activate(params) {
     
        this.id = params.id;
        return this.datacontext.getById(params.id)
            .then(category => { this.category = category });
    }
    goToMainPage() {
       return this.router.navigateToRoute("categories");
    }
    delteCategory() {
        
        return this.datacontext.deleteRecord(this.category.categoryID)
            .then(deleteItem => {
                deleteItem = deleteItem;
                toastr.success(deleteItem.categoryName + " Removed", "Category"); 
                this.goToMainPage();
            });
    }
}