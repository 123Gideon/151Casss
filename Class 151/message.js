AFRAME.registerComponent("message",{
    schema:{
        message:{type:"string",defualt:"hello world"}
    },

    init:function(){
        console.log(this.data.message)

    },

    


})