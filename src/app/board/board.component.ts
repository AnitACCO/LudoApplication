import { Component } from '@angular/core';
import { delay } from 'rxjs';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent {


  numbers = Array(12).fill(0).map((x,i)=>i);
  numbers2 = Array(12).fill(0).map((x,i)=>i);
  dice_numbers : number = 0
  red_token = [[10,1,0],[8,3,1],[8,1,2],[10,3,3]];
  red_token_start = [[10,1],[8,3],[8,1],[10,3]];
  red_token_status = [true,true,true,true]

  blue_token = [[1,1,0],[1,3,1],[3,1,2],[3,3,3]]
  blue_token_status = [true,true,true,true]
  blue_token_start = [[1,1],[1,3],[3,1],[3,3]]

  green_token = [[1,10,0],[3,10,1],[1,8,2],[3,8,3]]
  green_token_status = [true,true,true,true]
  green_token_start = [[1,10],[3,10],[1,8],[3,8]]

  yellow_token = [[10,10,0],[10,8,1],[8,10,2],[8,8,3]]
  yellow_token_status = [true,true,true,true]
  yellow_token_start = [[10,10],[10,8],[8,10],[8,8]]

  turn_order = [[11,5],[5,0],[0,6],[6,11]]

  flag = 0
  diceRoll = false
  num = 0
  playing_token =   this.red_token
  playing_token_status = this.red_token_status

  rollDice(){
    this.dice_numbers = Math.floor(Math.random()*(7 - 1) + 1);
    if(this.num == 0){
      this.playing_token = this.red_token
      if(this.dice_numbers == 6){
        this.red_token_status = [false,false,false,false]
        this.playing_token_status = this.red_token_status
        this.flag = 6;
      }
      else{
        if(!(this.red_token[0][0] == this.red_token_start[0][0] && this.red_token[0][1] == this.red_token_start[0][1])){
          console.log((this.red_token[0][0] == this.red_token_start[0][0] && this.red_token[0][1] == this.red_token_start[0][0]))
          this.red_token_status[0] = false;
          this.flag = 1;
        }
        if(!(this.red_token[1][0] == this.red_token_start[1][0] && this.red_token[1][1] == this.red_token_start[1][1])){
          this.red_token_status[1] = false;
          this.flag = 1;
        }
        if(!(this.red_token[2][0] == this.red_token_start[2][0] && this.red_token[2][1] == this.red_token_start[2][1])){
          this.red_token_status[2] = false;
          this.flag = 1;
        }
        if(!(this.red_token[3][0] == this.red_token_start[3][0] && this.red_token[3][1] == this.red_token_start[3][1])){
          this.red_token_status[3] = false;
          this.flag = 1;
        }
      }
    }
    if(this.num == 1){
      this.playing_token = this.blue_token
      if(this.dice_numbers == 6){
        this.blue_token_status = [false,false,false,false]
        this.playing_token_status = this.blue_token_status
        this.flag = 6;
      }
      else{
        if(!(this.blue_token[0][0] == this.blue_token_start[0][0] && this.blue_token[0][1] == this.blue_token_start[0][1])){
          this.blue_token_status[0] = false;
          this.flag = 1;
        }
        if(!(this.blue_token[1][0] == this.blue_token_start[1][0] && this.blue_token[1][1] == this.blue_token_start[1][1])){
          this.blue_token_status[1] = false;
          this.flag = 1;
        }
        if(!(this.blue_token[2][0] == this.blue_token_start[2][0] && this.blue_token[2][1] == this.blue_token_start[2][1])){
          this.blue_token_status[2] = false;
          this.flag = 1;
        }
        if(!(this.blue_token[3][0] == this.blue_token_start[3][0] && this.blue_token[3][1] == this.blue_token_start[3][1])){
          this.blue_token_status[3] = false;
          this.flag = 1;
        }
      }
    }
    if(this.num == 2){
      this.playing_token = this.green_token
      if(this.dice_numbers == 6){
        this.green_token_status = [false,false,false,false]
        this.playing_token_status = this.green_token_status
        this.flag = 6;
      }
      else{
        if(!(this.green_token[0][0] == this.green_token_start[0][0] && this.green_token[0][1] == this.green_token_start[0][1])){
          this.green_token_status[0] = false;
          this.flag = 1;
        }
        if(!(this.green_token[1][0] == this.green_token_start[1][0] && this.green_token[1][1] == this.green_token_start[1][1])){
          this.green_token_status[1] = false;
          this.flag = 1;
        }
        if(!(this.green_token[2][0] == this.green_token_start[2][0] && this.green_token[2][1] == this.green_token_start[2][1])){
          this.green_token_status[2] = false;
          this.flag = 1;
        }
        if(!(this.green_token[3][0] == this.green_token_start[3][0] && this.green_token[3][1] == this.green_token_start[3][1])){
          this.green_token_status[3] = false;
          this.flag = 1;
        }
      }
    }
    if(this.num == 3){
      this.playing_token = this.yellow_token
      if(this.dice_numbers == 6){
        this.yellow_token_status = [false,false,false,false]
        this.playing_token_status = this.yellow_token_status
        this.flag = 6;
      }
      else{
        if(!(this.yellow_token[0][0] == this.yellow_token_start[0][0] && this.yellow_token[0][1] == this.yellow_token_start[0][1])){
          this.yellow_token_status[0] = false;
          this.flag = 1;
        }
        if(!(this.yellow_token[1][0] == this.yellow_token_start[1][0] && this.yellow_token[1][1] == this.yellow_token_start[1][1])){
          this.yellow_token_status[1] = false;
          this.flag = 1;
        }
        if(!(this.yellow_token[2][0] == this.yellow_token_start[2][0] && this.yellow_token[2][1] == this.yellow_token_start[2][1])){
          this.yellow_token_status[2] = false;
          this.flag = 1;
        }
        if(!(this.yellow_token[3][0] == this.yellow_token_start[3][0] && this.yellow_token[3][1] == this.yellow_token_start[3][1])){
          this.yellow_token_status[3] = false;
          this.flag = 1;
        }
      }
    }
    if(this.flag == 0){
      this.num = (this.num + 1)%4;
    }
    else{
      this.diceRoll = true
    }
  }

  tokenPlay(id : number){
    if(!(this.playing_token[id][0] > 4 && this.playing_token[id][0] <7 ) &&!(this.playing_token[id][1] > 4 && this.playing_token[id][1] <7 ) && this.dice_numbers == 6){
      this.playing_token[id][0] = this.turn_order[this.num][0]
      this.playing_token[id][1] = this.turn_order[this.num][1]
      this.dice_numbers = 0
    }
    else{
      console.log(this.dice_numbers)
      while(this.dice_numbers){
        if(this.playing_token[id][1] ==5 ){
          if(this.playing_token[id][0] ==7){
            this.playing_token[id][1] = 4;
            this.playing_token[id][0] =6
          }
          else{
            if(this.playing_token[id][0] == 0){
              this.playing_token[id][1] = 6
            }
            else{
              this.playing_token[id][0] -= 1
            }
          }

        }
        else{
          if(this.playing_token[id][1] ==6 ){
            if(this.playing_token[id][0] ==4){
              this.playing_token[id][1] = 7;
              this.playing_token[id][0] = 5 ;
            }
            else{
              if(this.playing_token[id][0] == 11){
                this.playing_token[id][1] = 5
              }
              else{
                this.playing_token[id][0] += 1
              }
            }

          }
          else{
            if(this.playing_token[id][0] ==5 ){
              if(this.playing_token[id][1] ==4){
                this.playing_token[id][0] = 4;
                this.playing_token[id][1] =5;
              }
              else{
                if(this.playing_token[id][1] == 11){
                  this.playing_token[id][0] = 6
                }
                else{
                  this.playing_token[id][1] += 1
                }
              }

            }
            else{
              if(this.playing_token[id][0] ==6 ){
                if(this.playing_token[id][1] ==7){
                  this.playing_token[id][0] = 7;
                  this.playing_token[id][1] = 6 ;
                }
                else{
                  if(this.playing_token[id][1] == 0){
                    this.playing_token[id][0] = 5
                  }
                  else{
                    this.playing_token[id][1] -= 1
                  }
                }

              }
            }
          }
        }
        this.dice_numbers = this.dice_numbers - 1
        delay(10000);
      }
    }
    if(this.flag!= 6){
      this.num = (this.num+1)%4
    }
    this.overLappingToken(id)
    this.red_token_status = [true,true,true,true]
    this.blue_token_status = [true,true,true,true]
    this.yellow_token_status = [true,true,true,true]
    this.green_token_status = [true,true,true,true]
    this.diceRoll = false
    this.flag = 0
  }

  overLappingToken(id : number){
    if(this.playing_token != this.red_token){
      if(this.playing_token[id][0] == this.red_token[0][0] && this.playing_token[id][1] == this.red_token[0][1]){
        this.red_token[0][0] = this.red_token_start[0][0]
        this.red_token[0][1] = this.red_token_start[0][1]
      }
      if(this.playing_token[id][0] == this.red_token[1][0] && this.playing_token[id][1] == this.red_token[1][1]){
        this.red_token[1][0] = this.red_token_start[1][0]
        this.red_token[1][1] = this.red_token_start[1][1]
      }
      if(this.playing_token[id][0] == this.red_token[2][0] && this.playing_token[id][1] == this.red_token[2][1]){
        this.red_token[2][0] = this.red_token_start[2][0]
        this.red_token[2][1] = this.red_token_start[2][1]
      }
      if(this.playing_token[id][0] == this.red_token[3][0] && this.playing_token[id][1] == this.red_token[3][1]){
        this.red_token[3][0] = this.red_token_start[3][0]
        this.red_token[3][1] = this.red_token_start[3][1]
      }
    }
    if(this.playing_token != this.blue_token){
      if(this.playing_token[id][0] == this.blue_token[0][0] && this.playing_token[id][1] == this.blue_token[0][1]){
        this.blue_token[0][0] = this.blue_token_start[0][0]
        this.blue_token[0][1] = this.blue_token_start[0][1]
      }
      if(this.playing_token[id][0] == this.blue_token[1][0] && this.playing_token[id][1] == this.blue_token[1][1]){
        this.blue_token[1][0] = this.blue_token_start[1][0]
        this.blue_token[1][1] = this.blue_token_start[1][1]
      }
      if(this.playing_token[id][0] == this.blue_token[2][0] && this.playing_token[id][1] == this.blue_token[2][1]){
        this.blue_token[2][0] = this.blue_token_start[2][0]
        this.blue_token[2][1] = this.blue_token_start[2][1]
      }
      if(this.playing_token[id][0] == this.blue_token[3][0] && this.playing_token[id][1] == this.blue_token[3][1]){
        this.blue_token[3][0] = this.blue_token_start[3][0]
        this.blue_token[3][1] = this.blue_token_start[3][1]
      }
    }
    if(this.playing_token != this.green_token){
      if(this.playing_token[id][0] == this.green_token[0][0] && this.playing_token[id][1] == this.green_token[0][1]){
        this.green_token[0][0] = this.green_token_start[0][0]
        this.green_token[0][1] = this.green_token_start[0][1]
      }
      if(this.playing_token[id][0] == this.green_token[1][0] && this.playing_token[id][1] == this.green_token[1][1]){
        this.green_token[1][0] = this.green_token_start[1][0]
        this.green_token[1][1] = this.green_token_start[1][1]
      }
      if(this.playing_token[id][0] == this.green_token[2][0] && this.playing_token[id][1] == this.green_token[2][1]){
        this.green_token[2][0] = this.green_token_start[2][0]
        this.green_token[2][1] = this.green_token_start[2][1]
      }
      if(this.playing_token[id][0] == this.green_token[3][0] && this.playing_token[id][1] == this.green_token[3][1]){
        this.green_token[3][0] = this.green_token_start[3][0]
        this.green_token[3][1] = this.green_token_start[3][1]
      }
    }
    if(this.playing_token != this.yellow_token){
      if(this.playing_token[id][0] == this.yellow_token[0][0] && this.playing_token[id][1] == this.yellow_token[0][1]){
        this.yellow_token[0][0] = this.yellow_token_start[0][0]
        this.yellow_token[0][1] = this.yellow_token_start[0][1]
      }
      if(this.playing_token[id][0] == this.yellow_token[1][0] && this.playing_token[id][1] == this.yellow_token[1][1]){
        this.yellow_token[1][0] = this.yellow_token_start[1][0]
        this.yellow_token[1][1] = this.yellow_token_start[1][1]
      }
      if(this.playing_token[id][0] == this.yellow_token[2][0] && this.playing_token[id][1] == this.yellow_token[2][1]){
        this.yellow_token[2][0] = this.yellow_token_start[2][0]
        this.yellow_token[2][1] = this.yellow_token_start[2][1]
      }
      if(this.playing_token[id][0] == this.yellow_token[3][0] && this.playing_token[id][1] == this.yellow_token[3][1]){
        this.yellow_token[3][0] = this.yellow_token_start[3][0]
        this.yellow_token[3][1] = this.yellow_token_start[3][1]
      }
    }
  }

}

