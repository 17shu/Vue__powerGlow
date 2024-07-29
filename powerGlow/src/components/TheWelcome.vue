<template>
  <div>
    <h2>Welcome Test!!!!</h2>
    <div class="tableDiv">
      <table>
        <thead class="tableStyle">
          <tr>
            <th>id</th>
            <th>name</th>
            <th>value</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="data in datas" :key="data.id">
            <td>{{ data.Id }}</td>
            <td>{{ data.Name }}</td>
            <td>{{ data.Value }}</td>
          </tr>
        </tbody>
     </table>
    </div>
  
  </div>
</template>


<script setup>
import api from '@/api';
import { onMounted ,ref} from 'vue';

const datas = ref([]);

onMounted(async () => {
  const res = await api.getDatas();
  datas.value = res.data;
});


</script>
<style>
.tableDiv{
  height: 400PX; 
  overflow-y: scroll;

}
.tableStyle{
  position: sticky;
  top:0px;
}
</style>


