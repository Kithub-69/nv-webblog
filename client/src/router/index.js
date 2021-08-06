import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'

import UserIndex from '@/components/Index'
import UserCreate from '@/components/CreateUser'
import UserEdit from '@/components/EditUser'
import UserShow from '@/components/ShowUser'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/users',
      name: 'users',
      component: UserIndex
    },
    {
      path: '/user/create',
      name: 'user-create',
      component: UserCreate
    },
    {
<<<<<<< HEAD
      path: '/user/edit/:userId',
=======
      path: '/user/edit',
>>>>>>> f06b1f46c3345e4723918d9c61b76999c1afdfd5
      name: 'user-edit',
      component: UserEdit
    },
    {
<<<<<<< HEAD
      path: '/user/:userId',
      name: 'user',
      component: UserShow
    }
  ]
})
=======
      path: '/user/show',
      name: 'user-show',
      component: UserShow
    }
  ]
})
>>>>>>> f06b1f46c3345e4723918d9c61b76999c1afdfd5
