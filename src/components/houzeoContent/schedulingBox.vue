<template>
  <div class="scheduling-box">

    <b class="scheduling-text">Schedule a Showing</b>
    <div class="showingdetails">
      <button :class="[selectedButton1 === true ? 'active' : 'default']" @click="selectButton('button1')">In Person
        Showing</button>
      <button :class="[selectedButton2 === true ? 'active' : 'default']" @click="selectButton('button2')">Virtual
        Showing</button>

    </div>
    <div class="schedule">
      <button @click="previousData" :disabled="currentIndex === 0" class="leftSheduling"><i
          class="fas fa-chevron-left black-icon 1g" :style="{ 'font-size': '9px' }"></i></button>
      <div v-for="(item, index) in displayedData" :key="index">
        <!-- Render the item data here -->
        <div class="card">
          <p id="itemWeekday">{{ item.weekday }}</p>
          <p id="itemDate"><b>{{ item.date }}</b></p>
          <p id="itemMonth">{{ item.month }}</p>
        </div>
      </div>
      <button @click="nextData" :disabled="currentIndex === noOfDays.length - 4" class="rightSheduling"><i
          class="fas fa-chevron-right black-icon 1g" :style="{ 'font-size': '9px' }"></i></button>
    </div>
    <div class="current-Time">
      <button @click="previousDataTime" :disabled="currentTimeIndex === 0" class="leftSheduling"><i
          class="fas fa-chevron-left black-icon 1g" :style="{ 'font-size': '9px' }"></i></button>
      <div v-for="(item, index) in displyedTime" :key="index">
        <div class="time">
          {{ item }}
        </div>

      </div>
      <button @click="nextDataTime" :disabled="currentIndex === noOfDays.length - 4" class="rightSheduling"><i
          class="fas fa-chevron-right black-icon 1g" :style="{ 'font-size': '9px' }"></i></button>

    </div>
    <div>
      <button class="scheduleShowing">Schedule Showing</button>
      <p class="freetag">{{ $t('freetag') }}</p>
    </div>

    <realPeople />
  </div>
</template>

<script>
import realPeople from './realPeople.vue';
export default {
  components: {
    realPeople
  },
  data() {
    return {
      selectedButton1: true,
      selectedButton2: false,
      currentIndex: 0,
      currentTimeIndex: 0,
      noOfDays: [
        { date: '1', weekday: 'Thu', month: 'June' },
        { date: '2', weekday: 'Fri', month: 'June' },
        { date: '3', weekday: 'Sat', month: 'June' },
        { date: '4', weekday: 'Sun', month: 'June' },
        { date: '5', weekday: 'Mon', month: 'June' },
        { date: '6', weekday: 'Tue', month: 'June' },
        { date: '7', weekday: 'Wed', month: 'June' },
        { date: '8', weekday: 'Thu', month: 'June' },
        { date: '9', weekday: 'Fri', month: 'June' },
        { date: '10', weekday: 'Sat', month: 'June' },
        { date: '11', weekday: 'Sun', month: 'June' },
        { date: '12', weekday: 'Mon', month: 'June' },
        { date: '13', weekday: 'Tue', month: 'June' },
        { date: '14', weekday: 'Wed', month: 'June' },
        { date: '15', weekday: 'Thu', month: 'June' },
        { date: '16', weekday: 'Fri', month: 'June' },
        { date: '17', weekday: 'Sat', month: 'June' },
        { date: '18', weekday: 'Sun', month: 'June' },
        { date: '19', weekday: 'Mon', month: 'June' },
        { date: '20', weekday: 'Tue', month: 'June' },
        { date: '21', weekday: 'Wed', month: 'June' },
        { date: '22', weekday: 'Thu', month: 'June' },
        { date: '23', weekday: 'Fri', month: 'June' },
        { date: '24', weekday: 'Sat', month: 'June' },
        { date: '25', weekday: 'Sun', month: 'June' },
        { date: '26', weekday: 'Mon', month: 'June' },
        { date: '27', weekday: 'Tue', month: 'June' },
        { date: '28', weekday: 'Wed', month: 'June' },
        { date: '29', weekday: 'Thu', month: 'June' },
        { date: '30', weekday: 'Fri', month: 'June' },

      ],
      currentTime: ['10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM', '12:30PM', '1:00 PM', '1:30 PM', '2:00 PM',
        '2:30 PM', '3:00 PM', '4:00 PM', '5:00 PM', '5:30 PM', '6:00 PM']
    };
  },
  computed: {
    displayedData() {
      // Slice the data array to display four items based on the current index
      return this.noOfDays.slice(this.currentIndex, this.currentIndex + 4);
    },
    displyedTime() {
      return this.currentTime.slice(this.currentTimeIndex, this.currentTimeIndex + 4);
    }

  },
  methods: {
    selectButton(button) {
      if (button === 'button1') {
        this.selectedButton1 = true;
        this.selectedButton2 = false;
      }
      if (button === 'button2') {
        this.selectedButton2 = true;
        this.selectedButton1 = false;
      }
    },
    previousData() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
      }
    },
    previousDataTime() {
      if (this.currentTimeIndex > 0) {
        this.currentTimeIndex--;
      }
    },
    nextData() {
      if (this.currentIndex < this.noOfDays.length - 4) {
        this.currentIndex++;
      }
    },
    nextDataTime() {
      if (this.currentTimeIndex < this.currentTime.length - 4) {
        this.currentTimeIndex++;
      }

    }

  },

}
</script>
<style>
#itemWeekday {
  font-size: 10px;

}

#itemDate {
  font-size: 18px;
}

#itemMonth {
  font-size: 10px;
}

.showingdetails {
  background-color: #00000026;
  width: 249px;
  height: 47px;
  margin-left: 25px;
  margin-top: 14px;
  border-radius: 8px;

}

.freetag {
  font-size: 11px;
  margin-right: 15px;
  margin-left: 24px;
  color: #AFAFAF;
}

.scheduling-box {
  width: 312px;
  height: 300px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
  margin-left: 15px;
  border-radius: 8px;
}

.scheduling-text {
  padding-left: 17px;
}

.active {
  width: 103px;
  height: 25px;
  background-color: white;
  border-radius: 5px;
  border: 2px transparent;
  font-size: 10px;
  margin-left: 12px;
  margin-top: 12px;
}

.default {
  width: 109px;
  height: 25px;
  background-color: #00000026;
  border-radius: 5px;
  border: 2px transparent;
  font-size: 10px;
  margin-left: 9px;
  margin-top: 12px;
}

.items {
  padding: 0px
}

.card {
  width: 50px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  border: 1px solid transparent;
  margin-right: 10px;
  display: flex;
  flex-direction: column;
  height: 54px;
  border-radius: 8px;
  margin-right: 5px;
  padding-left: 5px;
  justify-content: space-between;
  z-index: 0;

}

.card p {
  margin: 0px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.schedule {
  display: flex;
  margin-top: 25px;
  margin-left: 2px;
}

.leftSheduling {
  border-radius: 50%;
  height: 15px;
  width: 15px;
  background-color: white;
  margin-top: 21px;
  margin-left: 15px;
  display: flex;
  justify-content: center;
}

.rightSheduling {
  border-radius: 50%;
  height: 15px;
  width: 15px;
  background-color: white;
  margin-top: 21px;
  margin-right: 25px;
  display: flex;
  justify-content: center;

}

.current-Time {
  display: flex;
  margin-left: 2px;
  ;
}

.time {
  width: 50px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  border: 1px solid transparent;
  margin-right: 10px;
  display: flex;
  flex-direction: column;
  height: 24px;
  border-radius: 8px;
  margin-right: 5px;
  padding-left: 5px;
  justify-content: center;
  font-size: 10px;
  margin-top: 17px;
}

.scheduleShowing {
  background-color: #004484;
  width: 269px;
  height: 30px;
  border-radius: 8px;
  border: 1px solid transparent;
  color: #FAFAFC;
  margin-left: 22px;
  margin-top: 12px;
}
</style>