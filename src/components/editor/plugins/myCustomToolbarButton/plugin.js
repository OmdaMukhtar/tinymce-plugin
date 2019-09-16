const cuPlugin = function(editor){
  editor.ui.registry.addButton('myCustomToolbarButton', {
    text: 'My Custom Button',
    icon:'user',
    onAction: () => alert('Button clicked!')
  });
}

export { cuPlugin };