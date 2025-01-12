import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  private baseUrl: string = 'https://chatbot-2ib4.onrender.com/';
  async sendMessage(message: string): Promise<string> {
    return new Promise(async (resolve) => {
      let messageObj = {
        "userId": "user123",
        "userInput": message
      }
      const apiUrl = `${this.baseUrl}chat`;
      try {
          let response: any = await this.http.post(apiUrl, messageObj).toPromise();
          resolve(response.botResponse);
      } catch (error) {
          resolve(error as string);
      }

    })
  }
}
