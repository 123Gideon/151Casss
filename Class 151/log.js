AFRAME.registerComponent("box1",{
    schema:{
        moveX:{type:"number",defualt:1}
    },

    init:function(){

    },

    update:function(){

    },

    tick:function(){
        this.data.moveX=this.data.moveX+0.01

        var pos=this.el.getAttribute("position")
        pos.x=this.data.moveX

        this.el.setAttribute("position",{
            x:pos.x,
            y:pos.y,
            z:pos.z
        })
        
    }
})