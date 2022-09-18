import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
// import 'rxjs/add/operator/toPromise';
// import { PermissionService } from '@byte/ng-security';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class IngredientsService {

  ingredientsUrl = environment.services.apiIngredients;

  constructor(private http: HttpClient) {}


  getTest(): Promise<any> {
    return this.http.get<any>(`${this.ingredientsUrl}`).toPromise();
  }

  /* cancelLock(client: ClienteDto): Promise<Date> {
    const body = { tipoIdentificacion: client.tipoIdentificacion, identificacion: client.identificacion};
    return this.securityService.post(this.accountsUrl + '/cancelLock', JSON.stringify(body))
      .then(response => response)
      .catch(this.handleError);
  }


  deleteAllLock(): Promise<any> {
    return this.securityService.delete(`${this.accountsUrl}/deleteAllLock`)
      .then(response => response)
      .catch(this.handleError);
  } */


}
