export class TreeNode {
    expanded: boolean = false;
    checked: boolean = false;
    selectable: boolean = false;
    _selectedNodes: String[];

    constructor(public name: String,
                public selectable: boolean,
                public nodes: Array<TreeNode>,
                public parent: TreeNode) {
        if (!parent) {
            this._selectedNodes = [];
        } else {
            this._selectedNodes = null;
        }
    }

    get icon() {
        if (!this.nodes.length) {
            return null;
        }
        if (this.expanded) {
            return '-';
        }
        return '+';
    }

    get isRoot() {
        return this._selectedNodes ? true : false;
    }

    get selectedNodes() {
        if (this.parent) {
            return this.parent.selectedNodes;
        } else {
            return this._selectedNodes;
        }
    }

    set selectedNodes(nodes) {
        if (this.parent) {
            this.parent.selectedNodes = nodes;
        } else {
            this._selectedNodes = nodes;
        }
    }

    toggle() {
        this.expanded = !this.expanded;
    }

    containsChecked() {
        let checkedNodes:TreeNode[];
        if (this.nodes && this.nodes.length) {
            checkedNodes = this.nodes.filter((node: TreeNode) => {
                return node.checked;
            });
        }
        return checkedNodes.length > 0;

    }

    containsName(name) {
        let query = name,
            matchingNodes:TreeNode[];

        if (this.nodes && this.nodes.length) {
            matchingNodes = this.nodes.filter((node: TreeNode) => {
                return node.name && node.name.indexOf(query) !== -1;
            });
        }
        return matchingNodes.length > 0;
    }

    check(callback) {
        let me = this;

        me.checked = me.expanded = !me.checked;
        if (me.parent) {
            me.parent.checked = me.parent.containsChecked();
            if (me.parent.isRoot) {
                me.select(callback);
            }
        }
        me.checkRecursive(me.checked);

    }

    checkRecursive(state: boolean) {
        this.nodes.forEach(node => {
            node.checked = node.expanded = state;
            node.checkRecursive(state);
        });
    }

    select(callback) {
        let me = this,
            nodeName = me.name;
        if (me.checked) {
            if (me.selectedNodes.indexOf(nodeName) == -1) {
                me.selectedNodes.push(nodeName);
                me.selectedNodes.sort(function (a, b) {
                    return b < a;
                });
            }
        } else {
            me.selectedNodes = me.selectedNodes.filter(function (node) {
                return node != nodeName;
            });
        }
        if (callback) {
            callback.apply(me);
        }
    }

}
