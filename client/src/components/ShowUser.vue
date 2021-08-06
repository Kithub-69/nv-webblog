<<<<<<< HEAD
<template>
    <div>
    <h1>show User</h1>
    <p>id: {{ user.Id }}</p>
    <p>ชื่อ - นามสกุล {{ user.name }} - {{ user.lastname }}</p>
    <p>email: {{ user.email }}</p>
    <p>password: {{ user.password }}</p>
    </div>
</template>
<script>
import UsersService from '@/services/UsersService'

export default {
  data() {
    return{
      user: null,
    };
  },
  async created() {
    let userId = this.$route.params.userId;
    this.user = (await UsersService.show(userId)).data
  },
};
</script>
<style scoped>
=======
<template>
    <h1>Get User By Id</h1>
</template>
<script>
export default {
    
}
</script>
<style scoped>


>>>>>>> f06b1f46c3345e4723918d9c61b76999c1afdfd5
</style>