import Vue from "vue";
import VueRouter from "vue-router";
import applist from "./app-list";
import appWeapon from "./app-weapon";
import appGear from "./app-gear";
import heroesAdd from "./app-addheroes";
import container from "./app-container";
import Edit from "./app-editheroes";
import Gearcontainer from "./app-gearcontainer";
import Weaponcontainer from "./app-weapon-container";
import Addgear from "./app-addgear";
import Addweapon from "./app-addweapon";
import Editgear from "./app-editgear";
import Editweapon from "./app-editweapon";

Vue.use(VueRouter);

export default new VueRouter({
  linkActiveClass: "active",
  routes: [
    {
      path: "/",
      redirect: "/heroes"
    },
    {
      path: "/heroes",
      component: container,
      children: [
        {
          path: "",
          component: applist
        },
        {
          path: "add",
          component: heroesAdd
        },
        {
          path: "edit/:id",
          component: Edit
        }
      ]
    },
    {
      path: "/weapon",
      component: Weaponcontainer,
      children: [
        {
          path: "",
          component: appWeapon
        },
        {
          path: "add",
          component: Addweapon
        },
        {
          path: "edit/:id",
          component: Editweapon
        }
      ]
    },
    {
      path: "/gear",
      component: Gearcontainer,
      children: [
        {
          path: "",
          component: appGear
        },
        {
          path: "add",
          component: Addgear
        },
        {
          path: "edit/:id",
          component: Editgear
        }
      ]
    }
  ]
});
