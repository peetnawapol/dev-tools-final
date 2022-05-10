<template>
  <v-card
    flat
    class="pa-5"
    color="rgba(0,0,0,.33)"
    tile
  >
    <v-row>
      <v-col cols="12">
        <h1 class="text-white text-center text-lg font-bold">
          ค้นหาหลักสูตรที่เปิด
        </h1>
      </v-col>
      <v-col>
        <v-card>
          <v-card-text>
            <v-form>
              <v-row no-gutters>
                <v-col cols="6" class="pr-md-4">
                  <span class="font-bold">ค้นหา 'คณะ'</span>
                  <v-combobox
                    v-model="faculties"
                    :items="facultyItems"
                    multiple
                    outlined
                    dense
                    chips
                  />
                </v-col>

                <v-col cols="6">
                  <span class="font-bold">ค้นหา 'รอบรับสมัคร'</span>
                  <v-combobox
                    v-model="faculties"
                    :items="facultyItems"
                    multiple
                    outlined
                    dense
                    chips
                  />
                </v-col>

                <v-col cols="6" class="pr-md-4">
                  <span class="font-bold">ค้นหา 'โครงการ'</span>
                  <v-combobox
                    v-model="faculties"
                    :items="facultyItems"
                    multiple
                    outlined
                    dense
                    chips
                  />
                </v-col>

                <v-col cols="6">
                  <span class="font-bold">ค้นหาหลักสูตร ไทย / นานาชาติ</span>
                  <v-combobox
                    v-model="faculties"
                    :items="facultyItems"
                    multiple
                    outlined
                    dense
                    chips
                  />
                </v-col>

                <v-col cols="12">
                  <span class="font-bold">คำค้นหาเพิ่มเติม (Enter เพื่อแยกคำ) [ระบบจะค้นจากชื่อคณะ,หลักสูตร]</span>
                  <v-combobox
                    v-model="searchForm.plainList"
                    clearable
                    hide-selected
                    multiple
                    outlined
                    small-chips
                    solo
                    dense
                    flat
                  />
                </v-col>
              </v-row>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  data () {
    const URL = this.$axios.defaults.baseURL

    return {
      API: URL,
      facultyItems: ['อุตสาหกรรมอาหาร', 'ครุศาสตร์อุตสาหกรรมและเทคโนโลยี', 'แพทยศาสตร์'],
      roundItems: [],
      projectItems: [],
      courseItems: [],
      searchForm: {
        faculties: [],
        rounds: [],
        projects: [],
        courses: [],
        plainList: []
      }
    }
  },

  async fetch () {
    this.facultyItems = await this.$axios.get(`${this.API}/faculties`)
    this.courseItems = await this.$axios.get(`${this.API}/courses`)
  }
}
</script>
