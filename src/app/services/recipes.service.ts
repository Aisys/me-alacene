import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
// import 'rxjs/add/operator/toPromise';
// import { PermissionService } from '@byte/ng-security';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class RecipesService {

  apiUrl = environment.services.apiRecipes;

  constructor(private http: HttpClient) {}

  getAllRecipesByIngredients(): Promise<any> {
    return this.http.get<any>(`${this.apiUrl}/cupboardId/${environment.currentUserId}`).toPromise();
  }

  getAllRecipes(): Promise<any> {
    return this.http.get<any>(`${this.apiUrl}`).toPromise();
  }


}
