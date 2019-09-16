import { customPlugin } from '../plugins/mybuttonMenu/plugin.js';
import { cuPlugin } from '../plugins/myCustomToolbarButton/plugin.js';

const config = {
    select: "#app-editor",
    plugins: "myCustomToolbarButton mybutton ",
    toolbar1: "myCustomToolbarButton |mybutton",
    setup: function () {

        // Here we can add plugin 
        window.tinymce.PluginManager.add('myCustomToolbarButton', cuPlugin);
        window.tinymce.PluginManager.add('mybutton', customPlugin);

        
    }
}

export default { config };