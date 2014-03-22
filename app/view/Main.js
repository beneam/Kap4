Ext.define('HelloWorld.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    fullscreen: true,
    requires: [
        'Ext.TitleBar',
	'Ext.carousel.Carousel',
	'Ext.NestedList'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
          // {   
          //          title: 'Home',
          //          iconCls: 'home',
          //          cls: 'home',
          //          html: [ '<h1>Welcome to my first app</h1>'
          //          ].join("")
//},{
{		title: 'Carousel',
		iconCls: 'more',
		xtype: 'carousel',

    defaults: {
        styleHtmlContent: true
    },

    items: [
        {
            html : 'First item in the carousel',
	    style: 'background-color: #FF0000'
        },
        {
            html : 'Second item in the carousel',
            style: 'background-color: #FFFF00'
        },
        {
            html : 'Third item in the carousel',
            style: 'background-color: #FF00FF'
        }
    ]
                },  
           {
                    xtype: 'nestedlist',
                    title: 'Nested-List',
                    iconCls: 'star',
                    displayField: 'title',
                    store: {
                        type: 'tree',

                        fields: [
                            'title', 'link', 'author', 'contentSnippet', 'content',
                            {name: 'leaf', defaultValue: true}
                        ],

                        root: {
                            leaf: false
                        },

                        proxy: {
                            type: 'jsonp',
                            url: 'https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&q=http://feeds.feedburner.com/SenchaBlog',
                            reader: {
                                type: 'json',
                                rootProperty: 'responseData.feed.entries'
                            }
                        }
                    },

                    detailCard: {
                        xtype: 'panel',
                        scrollable: true,
                        styleHtmlContent: true
                    },

                    listeners: {
                        itemtap: function(nestedList, list, index, element, post) {
                            this.getDetailCard().setHtml(post.get('content'));
                        }
                    }
                },{ 
		 xtype: 'panel',
                 title: 'Buttons',
                 iconCls: 'action',
		flex  : 1,
                margin: 10,
		items: [
                    {
			xtype: 'button', 
			flex  : 1,
                	margin: 10,
			text: 'Normal Button'
		    },
                    {	xtype: 'button',
			flex  : 1,
                	margin: 10,
			ui: 'round',
			text: 'Round Button'
		    },
                    {	xtype: 'button',
			flex  : 1,
                	margin: 10,
			ui: 'small',
			text: 'Small Button'
		    }
		]
	},
	{
                    title: 'Form Panel',
                    iconCls: 'user',
                    xtype: 'formpanel',

                    items: [
                        {
                            xtype: 'fieldset',
                            title: 'Field-Set',
                            instructions: '(This is a test form-panel)',
                            height: 285,
                            items: [
                                {
                                    xtype: 'textfield',
                                    label: 'Text-Field'
                                },
                                {
                                    xtype: 'emailfield',
                                    label: 'E-Mail-Field'
                                },
                                {
                                    xtype: 'textareafield',
                                    label: 'Text-Area-Field'
                                }
                            ]
                        },
                        {
                            xtype: 'button',
                            text: 'Confirm',
                            ui: 'confirm',
                            handler: function() {
                                this.up('formpanel').submit();
                            }
                        }
                    ]
                }
	]
    }
});
