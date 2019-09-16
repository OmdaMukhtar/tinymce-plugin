import { customPlugin } from '../plugins/mybuttonMenu/plugin.js';

const config = {
    select: "#app-editor",
    plugins: "mybutton ",
    toolbar1: "mybutton ",
    setup: function () {

        // Here we can add plugin 
        window.tinymce.PluginManager.add('mybutton', customPlugin);
    }
}

export default { config };