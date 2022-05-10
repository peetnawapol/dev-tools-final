<template>
  <v-row no-gutters>
    <v-col cols="7" class="flex flex-row gap-0">
      <v-btn contained router class="rounded-tl-lg rounded-0">
        ค้นหาหลักสูตร | ปริญญาตรี
      </v-btn>
      <v-btn contained router class="rounded-0" to="/">
        ค้นหาหลักสูตร | ปริญญาโท
      </v-btn>
      <v-btn contained router class="rounded-tr-lg rounded-0">
        ค้นหาหลักสูตร | ปริญญาเอก
      </v-btn>
    </v-col>

    <v-col cols="5" class="flex flex-row gap-0 items-end justify-start">
      <v-btn contained router class="rounded-tl-lg rounded-0" small>
        รวมประกาศ | ปริญญาตรี
      </v-btn>
      <v-btn contained router class="rounded-tr-lg rounded-0" small>
        รวมประกาศ | บัณฑิตศึกษา
      </v-btn>
    </v-col>

    <v-col cols="12">
      <LazyTabCard />
    </v-col>
  </v-row>
</template>

<script>
export default {
}
</script>
