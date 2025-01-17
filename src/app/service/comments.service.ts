import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  apiUrl = 'https://conduit.productionready.io/api';
  deleteEvent = new EventEmitter<number>();

  constructor(private http: HttpClient, private auth: AuthService) { }

  setAuthorizationHeaders() {
    const token = this.auth.getUserToken();
    const headers = new HttpHeaders({'Authorization': `${token}`});
    return headers;
  }

  postArticleComment(slug: any, comment: any) {
    const headers = this.setAuthorizationHeaders();
    return this.http.post(`${ this.apiUrl }/articles/${ slug }/comments`, comment, {headers: headers});
  }

  deleteArticleComment(slug: any, commentId: any) {
    const headers = this.setAuthorizationHeaders();
    return this.http.delete(`${ this.apiUrl }/articles/${ slug }/comments/${ commentId }`, {headers: headers});
  }
}
