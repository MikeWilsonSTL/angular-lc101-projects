import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercises: Angular Lesson 3';

  color = 'green';
  height = 0;
  width = 0;
  message = 'Space shuttle ready for takeoff!';
  takeOffEnabled: boolean = true;
  upEnabled: boolean = true;
  downEnabled: boolean = true;
  leftEnabled: boolean = true;
  rightEnabled: boolean = true;

  @HostListener('window:load')
  onLoad() {
    // console.log('is window:load');
    //this.moveRocketWithKeys(document, document.getElementById("rocketImage"));
  }

  handleTakeOff() {
    let result = window.confirm('Are you sure the shuttle is ready for takeoff?');
    if (result) {
      this.color = 'blue';
      this.width = 0;
      this.message = 'Shuttle in flight.';
      this.height = 10000;
      this.takeOffEnabled = false;
      // const takeoffAnimation = setInterval(function () {
      //   let movement = parseInt(document.getElementById("rocketImage").style.bottom) + 10 + 'px';
      //   document.getElementById("rocketImage").style.bottom = movement;
      //   this.height = this.height + 10000;
      // }, 200);
      // const takeoffAnimationStop = setTimeout(function () {
      //   clearInterval(takeoffAnimation);
      // }, 5000);
    }
  }

  land(rocketImage) {
    alert("The shuttle is landing. Landing gear engaged.");
    this.message = "The shuttle has landed."
    this.color = "green";
    this.height = 0;
    rocketImage.style.bottom = '0px';
    rocketImage.style.left = "0px";
    this.takeOffEnabled = true;
    // rocketLand();
  }

  abortMission(rocketImage) {
    if (window.confirm("Confirm that you want to abort the mission.")) {
      this.message = "Mission aborted! Space shuttle returning home."
      this.color = "red";
      this.height = 0;
      rocketImage.style.bottom = '0px';
      rocketImage.style.left = "0px";
      this.takeOffEnabled = true;
    }
  }

  moveRocket(rocketImage, direction) {
    if (direction === 'right') {
      let movement = parseInt(rocketImage.style.left) + 10 + 'px';
      rocketImage.style.left = movement;
      this.width = this.width + 10000;
    }
    if (direction === 'left') {
      let movement = parseInt(rocketImage.style.left) - 10 + 'px';
      rocketImage.style.left = movement;
      this.width = this.width - 10000;
    }
    if (direction === 'up') {
      let movement = parseInt(rocketImage.style.bottom) + 10 + 'px';
      rocketImage.style.bottom = movement;
      this.height = this.height + 10000;
    }
    if (direction === 'down') {
      let movement = parseInt(rocketImage.style.bottom) - 10 + 'px';
      rocketImage.style.bottom = movement;
      this.height = this.height - 10000;
    }
  }

  boundaryCheck() {
    if (this.width > 220000) {
      this.rightEnabled = false;
      this.message = "Whoa there, partner! You're getting a little too close to the right edge. Go this way <---";
    }
    else {
      this.rightEnabled = true;
    }

    if (this.width < -220000) {
      this.leftEnabled = false;
      this.message = "Whoa there, partner! You're getting a little too close to the left edge. Go that way --->";
    }
    else {
      this.leftEnabled = true;
    }

    if (this.height < 10000) {
      this.downEnabled = false;
      this.message = "Are you trying to crash?! Step on the gas and get up there!";
    }
    else {
      this.downEnabled = true;
    }

    if (this.height >= 330000) {
      this.upEnabled = false;
      this.message = "Wait, come back! This is just a test flight don't leave without the rest of the crew! Come back down!";
    }
    else {
      this.upEnabled = true;
    }

    if (this.height < 10000 || this.height >= 330000 || this.width > 220000 || this.width < -220000) {
      this.color = "orange";
    }
    else {
      if (this.message !== "Shuttle in flight.") {
        this.message = "There we go! You scared us for a second there.";
      }
      this.color = "blue"
    }
  }

  moveRocketWithKeys(document, rocketImage) {
    console.log("function accessed");
    document.onkeydown = function (event) {
      switch (event.key) {
        case "ArrowLeft":
          let movementLeft = parseInt(rocketImage.style.left) - 10 + 'px';
          rocketImage.style.left = movementLeft;
          this.width = this.width - 10000;
          break;
        case "ArrowRight":
          let movementRight = parseInt(rocketImage.style.left) + 10 + 'px';
          rocketImage.style.left = movementRight;
          this.width = this.width - 10000;
          break;
        case "ArrowUp":
          let movementUp = parseInt(rocketImage.style.bottom) + 10 + 'px';
          rocketImage.style.bottom = movementUp;
          this.height = this.height + 10000;
          break;
        case "ArrowDown":
          let movementDown = parseInt(rocketImage.style.bottom) - 10 + 'px';
          rocketImage.style.bottom = movementDown;
          this.height = this.height - 10000;
          break;
      }
    }
  }
}