<template>
  <v-row justify="start" align="center">
    <v-col cols="12">
      <h1 class="text-xl-h4 text-md-h5 text-h7 header-text">
        ระบบรับสมัครนักศึกษาระดับปริญญาโท
      </h1>

      <span class="text-xl-h4 text-md-h5 text-sm-h6 text-subtitle-2 sub-header">
        สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง
      </span>
    </v-col>

    <v-col cols="12">
      <v-row no-gutters>
        <!-- Search panel -->
        <v-col cols="12">
          <LazyTabItem />
        </v-col>

        <!-- Result panel -->
        <v-col cols="12">
          <v-card tile flat>
            <v-card-title>
              <h1 class="text-2xl">
                ผลการค้นหา: 0 รายการ
              </h1>
            </v-card-title>
          </v-card>
        </v-col>

        <v-col cols="12">
          <v-card tile flat />
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>

<style scoped>
.header-text {
    color: #fff !important;
    text-shadow: 1px 1px 1px rgb(0 0 0 / 80%) !important;
    font-weight: 700 !important;
}

.sub-header {
    color: #ff3c00;
    background-color: hsla(0,0%,100%,.7);
    padding: 0 10px 0 10px;
    width: auto;
    font-weight: 700;
}
</style>
