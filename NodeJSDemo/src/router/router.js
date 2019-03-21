export const RouterArr = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'home',
        component: ()=> import("@/view/Home/HomeController" )
    },
    {
        path:'/plan',
        name: 'plan',
        component: ()=> import("@/view/Plan/PlanController") 
    },
    {
        path:'/Inform',
        name: 'Inform',
        component: ()=> import("@/view/Inform/InformController") 
    },
    {
        path:'/Login1',
        name: 'Login1',
        component: ()=> import("@/view/Login/LoginController") 
    },
    {
        path:'/test',
        name: 'test',
        component: ()=> import("@/view/Test/TestView") 
    }
]