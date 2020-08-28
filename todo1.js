function BTNode(value) {
        this.val = value;
        this.left = null;
        this.right = null;
    }
    function BST() {
        this.root = null;
        // add methods here...



    //BST: Add
    //Create an add(val) method on the BST object to add new value to the tree. 
    //This entails creating a BTNode with this value and connecting it at the appropriate place in the tree. 
    //Unless specified otherwise, BSTs can contain duplicate values.
    console.log('#1 - BST: ADD')
    function add(val, node = this.root){
        //Check if root exist
        if(this.root === null){
            //If root does not exist make val the root
            this.root = new BTNode(val);
            return this;
        }
        //if root does exist determine if it needs to go left or right
        if(val < node.value){
            if(node.left === null){
                node.left = new BTNode(val);
                return this;
            }else{
                return this.add(val, node.left)
            }

        }else{
                if(node.right === null){
                    node.right = new BTNode(val);
                    return this;
                }else{
                    return this.add(val, node.right)
                }

        }
        
        //add value into place
    }

    //end of BST()
    }
    
    var tree = new BST();
    tree.add(4);
    