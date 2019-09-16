const customPlugin = function (editor) {
     editor.ui.registry.addMenuButton('mybutton', {
          text: 'My button',
          icon: 'facebook',
          fetch: function (callback) {
               var items = [
                    {
                         type: 'menuitem',
                         text: 'Menu item 1',
                         onAction: function () {
                              editor.insertContent('&nbsp;<em>You clicked menu item 1!</em>');
                         }
                    },
                    {
                         type: 'menuitem',
                         text: 'Menu item 2',
                         icon: 'user',
                         onAction: function () {
                              editor.insertContent('&nbsp;<em>You clicked menu item 2!</em>');
                         }
                    }
               ];

               callback(items);
          }
     });

}

export { customPlugin };