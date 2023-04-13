import { Component } from '@angular/core';
import { faChessPawn } from '@fortawesome/free-regular-svg-icons';
import { faDiceFive, faDiceFour, faDiceOne, faDiceSix, faDiceThree, faDiceTwo } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent {

  faChessPawn = faChessPawn;
  faDice5 = faDiceFive;
  faDice4 = faDiceFour;
  faDice3 = faDiceThree;
  faDice2 = faDiceTwo;
  faDice1 = faDiceOne;
  faDice6 = faDiceSix;

  safepos = [[5, 0], [0, 6], [6, 11], [11, 5], [-1, -1]]
  player_turn = ['red', 'blue', 'green', 'yellow']
  buttonArray = Array(4).fill(0).map((x, i) => i);
  numbers = Array(12).fill(0).map((x, i) => i);
  numbers2 = Array(12).fill(0).map((x, i) => i);
  dice_numbers: number = 0
  red_token = [[10, 1, 0], [8, 3, 1], [8, 1, 2], [10, 3, 3]];
  red_token_start = [[10, 1], [8, 3], [8, 1], [10, 3]];
  red_token_status = [true, true, true, true]
  red_completed = [false, false, false, false]
  red_count = 0

  blue_token = [[1, 1, 0], [1, 3, 1], [3, 1, 2], [3, 3, 3]]
  blue_token_status = [true, true, true, true]
  blue_token_start = [[1, 1], [1, 3], [3, 1], [3, 3]]
  blue_completed = [false, false, false, false]
  blue_count = 0

  green_token = [[1, 10, 0], [3, 10, 1], [1, 8, 2], [3, 8, 3]]
  green_token_status = [true, true, true, true]
  green_token_start = [[1, 10], [3, 10], [1, 8], [3, 8]]
  green_completed = [false, false, false, false]
  green_count = 0

  yellow_token = [[10, 10, 0], [10, 8, 1], [8, 10, 2], [8, 8, 3]]
  yellow_token_status = [true, true, true, true]
  yellow_token_start = [[10, 10], [10, 8], [8, 10], [8, 8]]
  yellow_completed = [false, false, false, false]
  yellow_count = 0

  turn_order = [[11, 5], [5, 0], [0, 6], [6, 11]]
  alltokenrArray = [this.red_token,this.blue_token,this.green_token,this.yellow_token]
  allTokenStart = [this.red_token_start,this.blue_token_start,this.green_token_start,this.yellow_token_start]
  flag = 0
  diceRoll = false
  num = 0
  playing_token = this.red_token
  playing_token_status = this.red_token_status


  rollDice() {
    this.dice_numbers = Math.floor(Math.random() * (7 - 1) + 1);
     if (this.num == 0) {
      this.playing_token = this.red_token
      this.playing_token_status = this.red_token_status
      if (this.dice_numbers == 6) {
        this.flag = 4
        for(let i = 0; i < 4; i++ ){
          if (this.red_token[i][1] == 6 && this.red_token[i][0] > 6 && !(this.red_completed[i])) {
            this.flag -= 1
          }
          else {
            this.red_token_status[i] = false
          }
        }
        if (this.flag != 0) {
          this.flag = 6
        }
      }
      else {
        for(let i = 0; i < 4; i++ ){
          if (!(this.red_completed[i])) {
            if (!(this.red_token[i][0] == this.red_token_start[i][0] && this.red_token[i][1] == this.red_token_start[i][1])) {
              if (!(this.red_token[i][1] == 6 && this.red_token[i][0] + this.dice_numbers > 12)) {
                this.red_token_status[i] = false;
                this.flag = 1;
              }
            }
          }
        }
      }
    }
    if (this.num == 1) {
      this.playing_token = this.blue_token
      this.playing_token_status = this.blue_token_status
      if (this.dice_numbers == 6) {
        this.flag = 4
        for (let i = 0; i < 4; i++){
          if (this.blue_token[i][0] == 6 && this.blue_token[i][1] < 5 && !(this.blue_completed[i])) {
            this.flag -= 1
          }
          else {
            this.blue_token_status[i] = false
          }
        }
        if (this.flag != 0) {
          this.flag = 6
        }
      }
      else {
        for(let i =0 ; i <4 ; i++){
          if (!(this.blue_completed[i])) {
            if (!(this.blue_token[i][0] == this.blue_token_start[i][0] && this.blue_token[i][1] == this.blue_token_start[i][1])) {
              if (!(this.blue_token[i][0] == 6 && this.blue_token[i][1] - this.dice_numbers < -1)) {
                console.log((this.blue_token[i][0] == this.blue_token_start[i][0] && this.blue_token[i][1] == this.blue_token_start[i][0]))
                this.blue_token_status[i] = false;
                this.flag = 1;
              }
            }
          }
        }
      }
    }
    if (this.num == 2) {
      this.playing_token = this.green_token
      this.playing_token_status = this.green_token_status
      if (this.dice_numbers == 6) {
        this.flag = 4
        for(let i = 0 ; i < 4; i++){
          if (this.green_token[i][1] == 5 && this.green_token[i][0] < 5 && !(this.green_completed[i])) {
            this.flag -= 1
          }
          else {
            this.green_token_status[i] = false
          }
        }
        if (this.flag != 0) {
          this.flag = 6
        }
      }
      else {
        for (let i = 0; i < 4; i++){
          if (!(this.green_completed[i])) {
            if (!(this.green_token[i][0] == this.green_token_start[i][0] && this.green_token[i][1] == this.green_token_start[i][1])) {
              if (!(this.green_token[i][1] == 5 && this.green_token[i][0] - this.dice_numbers < -1)) {
                this.green_token_status[i] = false;
                this.flag = 1;
              }
            }
          }
        }
      }
    }
    if (this.num == 3) {
      this.playing_token = this.yellow_token
      this.playing_token_status = this.yellow_token_status
      if (this.dice_numbers == 6) {
        this.flag = 4
        for (let i = 0; i < 4; i++){
          if (this.yellow_token[i][0] == 5 && this.yellow_token[i][1] > 6 && !(this.yellow_completed[i])) {
            this.flag -= 1
          }
          else {
            this.yellow_token_status[i] = false
          }
        }
        if (this.flag != 0) {
          this.flag = 6
        }
      }
      else {
        for (let i = 0; i <4;i++){
          if (!(this.yellow_completed[i])) {
            if (!(this.yellow_token[i][0] == this.yellow_token_start[i][0] && this.yellow_token[i][1] == this.yellow_token_start[i][1])) {
              if (!(this.yellow_token[i][0] == 5 && this.yellow_token[i][1] + this.dice_numbers > 12)) {
                this.yellow_token_status[i] = false;
                this.flag = 1;
              }
            }
          }
        }
      }
    }
    if (this.flag == 0) {
      this.num = (this.num + 1) % 4;
    }
    else {
      this.diceRoll = true
    }
  }

  tokenPlay(id: number) {
    this.isWinning(id)
    if (!(this.playing_token[id][0] > 4 && this.playing_token[id][0] < 7) && !(this.playing_token[id][1] > 4 && this.playing_token[id][1] < 7) && this.dice_numbers == 6) {
      this.playing_token[id][0] = this.turn_order[this.num][0]
      this.playing_token[id][1] = this.turn_order[this.num][1]
      this.dice_numbers = 0
    }
    else {
      while (this.dice_numbers) {
        if (this.playing_token[id][1] == 5) {
          if (this.playing_token[id][0] == 7) {
            this.playing_token[id][1] = 4;
            this.playing_token[id][0] = 6
          }
          else {
            if (this.playing_token[id][0] == 0) {
              this.playing_token[id][1] = 6
            }
            else {
              this.playing_token[id][0] -= 1
            }
          }

        }
        else {
          if (this.playing_token[id][1] == 6) {
            if (this.playing_token[id][0] == 4) {
              this.playing_token[id][1] = 7;
              this.playing_token[id][0] = 5;
            }
            else {
              if (this.playing_token[id][0] == 11) {
                this.playing_token[id][1] = 5
              }
              else {
                this.playing_token[id][0] += 1
              }
            }

          }
          else {
            if (this.playing_token[id][0] == 5) {
              if (this.playing_token[id][1] == 4) {
                this.playing_token[id][0] = 4;
                this.playing_token[id][1] = 5;
              }
              else {
                if (this.playing_token[id][1] == 11) {
                  this.playing_token[id][0] = 6
                }
                else {
                  this.playing_token[id][1] += 1
                }
              }

            }
            else {
              if (this.playing_token[id][0] == 6) {
                if (this.playing_token[id][1] == 7) {
                  this.playing_token[id][0] = 7;
                  this.playing_token[id][1] = 6;
                }
                else {
                  if (this.playing_token[id][1] == 0) {
                    this.playing_token[id][0] = 5
                  }
                  else {
                    this.playing_token[id][1] -= 1
                  }
                }

              }
            }
          }
        }
        this.dice_numbers = this.dice_numbers - 1
      }
    }
    if (this.flag != 6) {
      this.num = (this.num + 1) % 4;
    }
    this.overLappingToken(id)
    this.red_token_status = [true, true, true, true]
    this.blue_token_status = [true, true, true, true]
    this.yellow_token_status = [true, true, true, true]
    this.green_token_status = [true, true, true, true]
    this.diceRoll = false
    this.flag = 0

    if (this.red_count == 4) {
      alert('red wins')
      window.location.reload()
    }
    if (this.blue_count == 4) {
      alert('blue wins')
      window.location.reload()
    }
    if (this.green_count == 4) {
      alert('green wins')
      window.location.reload()
    }
    if (this.yellow_count == 4) {
      alert('yellow wins')
      window.location.reload()
    }
  }

  overLappingToken(id: number) {
    if (!((this.playing_token[id][0] == this.safepos[0][0] && this.playing_token[id][0] == this.safepos[0][0])
      || this.playing_token[id][0] == this.safepos[1][0] && this.playing_token[id][0] == this.safepos[1][0]
      || this.playing_token[id][0] == this.safepos[2][0] && this.playing_token[id][0] == this.safepos[2][0]
      || this.playing_token[id][0] == this.safepos[3][0] && this.playing_token[id][0] == this.safepos[3][0]
      || this.playing_token[id][0] == this.safepos[4][0] && this.playing_token[id][0] == this.safepos[4][0])) {
      for(let i = 0; i < 4;i++){
        if (this.playing_token != this.alltokenrArray[i]) {
          for(let j = 0; j < 4; j++){
            if (this.playing_token[id][0] == this.alltokenrArray[i][0][0] && this.playing_token[id][1] == this.alltokenrArray[i][0][1]) {
              this.alltokenrArray[i][j][0] = this.allTokenStart[i][j][0]
              this.alltokenrArray[i][j][1] = this.allTokenStart[i][j][1]
            }
          }
        }
      }
    }
  }

  isWinning(id: number) {
    if (this.playing_token == this.red_token) {
      if ((this.red_token[id][0] + this.dice_numbers) == 12) {
        if (this.red_token[id][1] == 6) {
          this.red_token[id] = [-1, -1, -1]
          this.red_completed[id] = true
          this.red_count += 1
        }
      }
    }
    if (this.playing_token == this.blue_token) {
      if ((this.blue_token[id][1] - this.dice_numbers) == -1) {
        if (this.blue_token[id][0] == 6) {
          this.blue_completed[id] = true
          this.blue_count += 1
          this.blue_token[id] = [-1, -1, -1]
        }
      }
    }
    if (this.playing_token == this.green_token) {
      if ((this.green_token[id][0] - this.dice_numbers) == -1) {
        if (this.green_token[id][1] == 5) {
          this.green_completed[id] = true
          this.green_count += 1
          this.green_token[id] = [-1, -1, -1]
        }
      }
    }
    if (this.playing_token == this.yellow_token) {
      if ((this.yellow_token[id][1] + this.dice_numbers) == 12) {
        if (this.yellow_token[id][0] == 5) {
          this.yellow_completed[id] = true
          this.yellow_count += 1
          this.yellow_token[id] = [-1, -1, -1]
        }
      }
    }
  }
}
