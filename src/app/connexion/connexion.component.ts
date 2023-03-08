import { Router } from '@angular/router';
import { AuthService } from './../service/authentifier/auth.service';
import { Component, OnInit } from '@angular/core';
import { StorageService } from '../service/storage/storage.service';


@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  constructor(private authService: AuthService, private storageService: StorageService, private router: Router) { }

  ngOnInit(): void {
    // if (this.storageService.isLoggedIn()) {
    //   this.isLoggedIn = true;
    //   this.roles = this.storageService.getUser().roles;
    // }
  }

  onSubmit(): void {
    const { username, password } = this.form;

    this.authService.login(username, password).subscribe({
      next: data => {
        this.storageService.saveToken(data.accessToken);
        this.storageService.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.storageService.getUser().roles;
        // this.reloadPage();
        if(this.roles[0] == 'ROLE_ADMIN_AUTOECOLE')
        {
          this.router.navigate(['/dashboar-admin'])
        }else{
          this.router.navigate(['/side-bar/dashboard'])
        }
        

        console.log(this.roles[0]);
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;

      }

    });
  }

  reloadPage(): void {
    window.location.reload();
  }

}
