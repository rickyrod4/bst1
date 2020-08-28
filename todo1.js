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
    add(val, node = this.root){
        //Check if root exist
        if(this.root === null){
            //If root does not exist make val the root
            this.root = new BTNode(val);
            return this;
        }
        //if root does exist determine if it needs to go left or right
        //add value into place
        if(val < node.value){
            if(node.left === null){
                node.left = new BTNode(val);
                return this;
            }else{
                return this.add(val, node.left);
            }

        }else{
                if(node.right === null){
                    node.right = new BTNode(val);
                    return this;
                }else{
                    return this.add(val, node.right);
                }

        }
        
    }//End of Add()


    //BST: Contains
    //Create a contains(val) method on BST that returns whether the tree contains a given value. 
    //Take advantage of the BST structure to make this a much more rapid operation than SList.contains() would be.
    contains(val, node = this.root) {
        if(node){
            if(node.value === val){
                return true;
            }
            if(node.value > val){
                return this.contains(val, node.left);
            }else{
                return this.contains(val, node.right);
            }
        }else{
            return false;
        }
    }//End of Contains()

    //BST: Size
    //Write a size() method that returns the number of nodes (values) contained in the tree.
    size(node= this.root) {
        if(node !== null){
            return 1 + this.size(node.left) + this.size(node.right);
        }
    }//end of size()

    //BST: Is Empty
    //Create an isEmpty() method to return whether the BST is empty (whether it contains no values).
    isEmpty(){
        if(this.root === null){
            return true;
        }
        else{
            return false;
        }
    }
    
    }//end of BST()
    
    var tree = new BST();
    tree.add(4);
