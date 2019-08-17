(function(){
    function addUserToList(name){
        const node = document.createElement('li');
        const textNode = document.createTextNode(name);
        node.appendChild(textNode);
        document.getElementById('users-list').appendChild(node);
    }
    const get_users = App.getUsers();
    for(let i=0;i<get_users.length;i++){
        addUserToList(get_users[i]);
    }
    document.getElementById('submit').addEventListener('click',function(){
        const input = document.getElementById('input');
        addUserToList(input.value);
        input.value=' ';
    })
})();
