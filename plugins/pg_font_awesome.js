import Vue from "vue";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { 
  faSignOutAlt, 
  faUser, 
  faUserCog, 
  faArrowCircleUp, 
  faArrowCircleDown, 
  faCaretDown, 
  faCaretUp, 
  faTimes, 
  faCaretRight,
  faSyncAlt 
} from '@fortawesome/free-solid-svg-icons';

library.add(
  faUser, 
  faUserCog, 
  faSignOutAlt, 
  faArrowCircleUp, 
  faArrowCircleDown, 
  faCaretDown, 
  faCaretUp, 
  faTimes, 
  faCaretRight,
  faSyncAlt
);
Vue.component('font-awesome-icon', FontAwesomeIcon);
