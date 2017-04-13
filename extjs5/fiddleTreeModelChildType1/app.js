/***************************
 DEFINE THE CLOSING ACCT MODEL
 ****************************/
Ext.define('DataBinding.model.ClosingAcct', {
    extend: 'Ext.data.TreeModel',
    idProperty: 'closingAcctId',
    entityName: 'ClosingAcct',
    fields: [
        { name: 'clUserCorp'},
        { name:'closingAcct'},
        { name: 'text',
          convert: function(v, record) {
          	return record.get('closingAcct');   
         }}
    ]
});

/***************************
 DEFINE THE USER CORPS MODEL.
 ****************************/
Ext.define('DataBinding.model.UserCorp', {
    extend: 'Ext.data.TreeModel',
    childType: 'ClosingAcct',
    entityName: 'UserCorp',
    /***************************
     5.0.0 CHANGE
     ****************************/
    idProperty: 'userCorpId',
    fields: [
        { name: 'clUserCorp'},
        { name: 'clOrgEntity'},
        { name: 'text',
         convert: function(v, record) {
             return record.get('clUserCorp');
         },
         depends: ['clUserCorp']
        }
    ]
});

/*****************************
 DEFINE THE STORE.
 ******************************/
Ext.define('DataBinding.store.UserCorps', {
    extend: 'Ext.data.TreeStore',
    requires: [
        'DataBinding.model.ClosingAcct'
    ],
    model: 'DataBinding.model.UserCorp',
    proxy: {
        type: 'ajax',
        url: 'data.json',
        reader: {
            type: 'json'
        }
    },
    clearOnLoad: true
});

/*****************************
 DEFINE THE TREE COMPONENT.
 ******************************/
Ext.define('DataBinding.view.navigation.UserCorps', {
    extend: 'Ext.tree.Panel',
    requires: [
        'Ext.tree.*',
        'Ext.data.*',
        'DataBinding.model.UserCorp',
        'DataBinding.store.UserCorps'],
    store: 'UserCorps',
    alias: 'widget.usercorps',
    rootVisible: false,
    title: 'TreeModel Childtype Property',
    columns: [{
        xtype: 'treecolumn',
        text: 'UserCorps-ClosingAcct',
        flex: 2.5,
        sortable: true,
        dataIndex: 'text'
    }, {
        text: 'Entity',
        flex: 1,
        renderer: function(v, cellValues, record) {
            return record.entityName;
        }
    }],
    initComponent: function() {
        var me = this;
        console.log(me.store);
        me.callParent();
    },
    single: true
});

/*****************************
 DEFINE THE MAIN CONTAINER.
 ******************************/
Ext.define('DataBinding.Main', {
    extend: "Ext.container.Container",
    border: true,
    padding: 10,
    initComponent: function() {
        var me = this;
        Ext.each(me.items, function(item) {
            item.style = {
                backgroundColor: "#f4f4f",
                border: "1px solid #333"
            };
            item.padding = 10;
            item.height = 450;
        });
        me.callParent();
    },
    onRender: function() {
        var me = this;
        me.callParent(arguments);
        if (me.border) {
            me.el.setStyle("border", "1px solid #333");
        }
    }
});

Ext.require('Ext.form.field.Display');
Ext.require('Ext.form.field.Trigger');

/*****************************
 ONCE EXT IS READY, CONFIGURE
 EXT'S AJAX SETTINGS, CREATE
 AN INSTANCE OF THE STORE AND
 THE MAIN CONTAINER.
 ******************************/
Ext.onReady(function() {
    Ext.create('DataBinding.store.UserCorps', {
        storeId: 'UserCorps'
    });
    Ext.create('DataBinding.Main', {
        renderTo: Ext.getBody(),
        items: [{
            xtype: 'usercorps'
        }]
    });
});