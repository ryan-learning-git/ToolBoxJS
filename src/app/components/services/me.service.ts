import {UserModel} from '../../Models/people/user.model';

export class MeService {

  private me: UserModel = null;
  private accessToken: string = null;
  private refreshToken: string = null;


  login(username: string, password: string){
    // TODO: get an access token and refresh token
  }

  public getMe(): UserModel{
    return this.me;
  }

  public getAccessToken(): string {
    return this.accessToken;
  }

  public refreshAccessToken(){
    // TODO: Use refresh token to get a new access token.
  }


}
