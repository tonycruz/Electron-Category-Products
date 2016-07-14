import {inject} from "aurelia-framework";
import {ContextBaseFetch} from "../modules/contextBaseFetch";

@inject(ContextBaseFetch)
export class CategoriesDataContext {
    apiName = "http://localhost/CategoriesProductsAPI/api/Categories"; 

    constructor(context) {
        this.context = context;
        this.context.apiName = this.apiName;
    }
    getAll() {
        this.context.baseUrl = this.baseUrl;
         return this.context.getAll()
            .then(result => { return result });
    }
    getById(id) {
        this.context.baseUrl = this.baseUrl;
        return this.context.getById(id)
    }
    deleteRecord(id) {
        this.context.baseUrl = this.baseUrl;
        return this.context.deleteByID(id);   
    }
    update(category) {
        this.context.baseUrl = this.baseUrl;
         return this.context.update(category, category.categoryID);
    }
    save(category) {
        this.context.baseUrl = this.baseUrl;
       return this.context.save(category);
    }
}
