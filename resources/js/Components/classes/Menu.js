export default class Menu {
    children = []
    m = [];

    constructor(props) {
        this.children = props
    }

    getMenu() {
        function child(children,e){
            children.forEach((el2) => {
                if (e.id === el2.parent_id) {
                    e.child.push(el2);
                   }
            })
        }

        this.children.forEach((el, i) => {
            el.child = [];
            if (el.parent_id === 0) {
                child(this.children,el)
            }


        })
      return   this.children.filter((el)=>el.parent_id === 0)
    }
    view(){
       this.getMenu()
    }
}


