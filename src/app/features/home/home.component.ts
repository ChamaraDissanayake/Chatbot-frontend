import { AfterViewInit, Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import { Toast } from 'bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {

  userMsg: string = '';
  botMsg: string = '';
  messageQueue: Array<[string, string]> = [['Bot', 'Hi there! How can I help you?']];
  isLoading: boolean = false;

  constructor(
    private apiService: ApiService,
    private renderer: Renderer2,
    private el: ElementRef
  ) { }

  ngAfterViewInit(): void {
    const toastElement = this.el.nativeElement.querySelector('#chatToast');
    this.renderer.listen(toastElement, 'hidden.bs.toast', () => {
      console.log('Toast hidden');
      this.isShowChatButton(true);
      this.userMsg = 'exit';
      this.send();
    });
  }

  public showChatToast(): void {
    const toastElement = this.el.nativeElement.querySelector('#chatToast');
    if (toastElement) {
      const toast = new Toast(toastElement, { autohide: false });
      toast.show();
      this.isShowChatButton(false);
    }
  }

  public send(): void {
    if(this.userMsg.trim().length > 0 && !this.isLoading){
      this.isLoading = true;
      this.apiService.sendMessage(this.userMsg).then((response) => {
        console.log(response);
        this.botMsg = response;
        this.addtoQueue(this.userMsg, this.botMsg);
        this.clearUserMsg();
        this.isLoading = false;
      }).catch((error) => {
        console.log(error);
        this.isLoading = false;
      });
    }
  }

  addtoQueue(userMessage: string, botMessage: string): void{
    this.messageQueue.push(["User", userMessage]);
    this.messageQueue.push(["Bot", botMessage]);
    console.log('Chamara queue', this.messageQueue);
    this.scrollToBottom();
  }

  private clearUserMsg(): void {
    if(this.userMsg == 'exit'){
      this.messageQueue = [['Bot', 'Hi there! How can I help you?']];
    }
    this.userMsg = '';
  }

  private isShowChatButton(isShow: boolean): void {
    const btnChat = document.querySelector('.btn-chat');
    if(btnChat){
      if(isShow){
        btnChat.classList.remove('d-none');
      } else {
        btnChat.classList.add('d-none');
      }
    }
  }

  private scrollToBottom(): void {
    setTimeout(() => {
      const chatContainer = document.getElementById('chatHistory');
      if (chatContainer) {
        chatContainer.scrollTop = chatContainer.scrollHeight;
      }
    }, 100);
  }

}
