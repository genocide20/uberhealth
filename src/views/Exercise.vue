<template>
  <ion-page>
    <ion-content>
      <ion-grid>
        <ion-row>
          <ion-col>
            <ion-text class="ion-text-lg-center">
              <div class="ion-text-center">
                <h1>Exercise</h1>
                <p>{{ displayName }}</p>
              </div>
            </ion-text>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col>
            <ion-list>
              <ion-item detail router-link="/activities/walk-records">
                <ion-thumbnail slot="start">
                  <img src="https://source.unsplash.com/PHIgYUGQPvU">
                </ion-thumbnail>
                <ion-label>
                  Walking
                  <p>เดิน</p>
                  <ion-progress-bar :value="counts['walking']/total"></ion-progress-bar>
                </ion-label>
              </ion-item>
              <ion-item detail router-link="/activities/jog-records">
                <ion-thumbnail slot="start">
                  <img src="https://source.unsplash.com/oGv9xIl7DkY">
                </ion-thumbnail>
                <ion-label>
                  Jogging
                  <p>วิ่ง</p>
                  <ion-progress-bar :value="counts['jogging']/total"></ion-progress-bar>
                </ion-label>
              </ion-item>
              <!--
              <ion-item detail router-link="/activities/swim-records">
                <ion-thumbnail slot="start">
                  <img src="https://source.unsplash.com/XOcM3n0QkHg">
                </ion-thumbnail>
                <ion-label>
                  Swimming
                  <p>ว่ายน้ำ</p>
                  <ion-progress-bar :value="counts['swimming']/total"></ion-progress-bar>
                </ion-label>
              </ion-item>
              <ion-item detail router-link="/activities/bike-records">
                <ion-thumbnail slot="start">
                  <img src="https://source.unsplash.com/K2xGNNcQn_w">
                </ion-thumbnail>
                <ion-label>
                  Biking
                  <p>ปั่นจักรยาน</p>
                  <ion-progress-bar :value="counts['biking']/total"></ion-progress-bar>
                </ion-label>
              </ion-item>
              <ion-item detail>
                <ion-thumbnail slot="start">
                  <img src="https://source.unsplash.com/BcVvVvqiCGA">
                </ion-thumbnail>
                <ion-label>
                  Dancing
                  <p>เต้นแอโรบิก ลีลาศ ซุมบ้า</p>
                  <ion-progress-bar value="0"></ion-progress-bar>
                </ion-label>
              </ion-item>
              -->
            </ion-list>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonThumbnail,
  IonContent,
  IonPage,
  IonList,
  IonLabel,
  IonItem,
  IonGrid,
  IonRow,
  IonCol,
  IonProgressBar,
  IonText,
} from '@ionic/vue';
import {defineComponent} from 'vue';
import {mapGetters, mapState} from "vuex";
export default defineComponent({
  name: "Exercise",
  components: {
    IonProgressBar,
    IonText,
    IonThumbnail,
    IonGrid,
    IonRow,
    IonCol,
    IonContent,
    IonPage,
    IonList,
    IonItem,
    IonLabel,
  },
  data () {
    return {
      counts: {
        walking: 0,
        jogging: 0,
        swimming: 0,
        biking: 0
      },
      total: 0
    }
  },
  computed: {
    ...mapGetters(['displayName', 'userId']),
    ...mapState(['activity_records'])
  },
  methods: {
    loadActivities () {
      this.activity_records.forEach(d=>{
        this.total++
        this.counts[d.type]++
      })
    }
  },
  mounted () {
    this.loadActivities()
  }
});
</script>

<style scoped>

</style>