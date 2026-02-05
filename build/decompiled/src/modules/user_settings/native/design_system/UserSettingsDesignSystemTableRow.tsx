// modules/user_settings/native/design_system/UserSettingsDesignSystemTableRow.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function() {
        var3 = _closure1_slot12;
        var8 = _closure1_slot0;
        var9 = _closure1_slot2;
        var4 = 7;
        var0 = var9[var4];
        var2 = undefined;
        var0 = var8.bind(var2)(var0);
        var1 = var0.TableRow;
        var0 = {};
        var6 = 'Notifications';
        var0.label = var6;
        var6 = _closure1_slot10;
        var0.onPress = var6;
        var6 = _closure1_slot12;
        var4 = var9[var4];
        var4 = var8.bind(var2)(var4);
        var4 = var4.TableRow;
        var5 = var4.Icon;
        var4 = {};
        var7 = 8;
        var7 = var9[var7];
        var7 = var8.bind(var2)(var7);
        var7 = var7.SettingsIcon;
        var4.IconComponent = var7;
        var4 = var6.bind(var2)(var5, var4);
        var0.icon = var4;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var _closure1_slot14 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var7 = var5[var3];
    var3 = arg3;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.View;
    var _closure1_slot5 = var7;
    var7 = var3.Image;
    var _closure1_slot6 = var7;
    var3 = var3.ScrollView;
    var _closure1_slot7 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.NOOP;
    var _closure1_slot10 = var6;
    var3 = var3.StatusTypes;
    var _closure1_slot11 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot12 = var6;
    var3 = var3.jsxs;
    var _closure1_slot13 = var3;
    var3 = 27;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/native/design_system/UserSettingsDesignSystemTableRow.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        var22 = _closure1_slot0;
        var23 = _closure1_slot2;
        var1 = 9;
        var1 = var23[var1];
        var3 = undefined;
        var5 = var22.bind(var3)(var1);
        var4 = var5.useStateFromStores;
        var1 = _closure1_slot9;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = function() { // Environment: var0
            var1 = _closure1_slot9;
            var0 = var1.getCurrentUser;
            var0 = var0.bind(var1)();
            return var0;
        };
        var35 = var4.bind(var5)(var2, var1);
        var2 = _closure1_slot8;
        var1 = var2.getGuildId;
        var34 = var1.bind(var2)();
        var12 = _closure1_slot1;
        var1 = 10;
        var1 = var23[var1];
        var1 = var12.bind(var3)(var1);
        var9 = var1.bind(var3)();
        var4 = _closure1_slot4;
        var1 = var4.useState;
        var7 = false;
        var1 = var1.bind(var4)(var7);
        var6 = _closure1_slot3;
        var5 = 2;
        var1 = var6.bind(var3)(var1, var5);
        var2 = 0;
        var30 = var1[var2];
        var38 = 1;
        var1 = var1[var38];
        var _closure2_slot0 = var1;
        var1 = var4.useState;
        var1 = var1.bind(var4)(var7);
        var1 = var6.bind(var3)(var1, var5);
        var26 = var1[var2];
        var1 = var1[var38];
        var _closure2_slot1 = var1;
        var5 = var4.useCallback;
        var2 = function(arg0) { // Environment: var0
            var2 = _closure2_slot0;
            var0 = undefined;
            var1 = arg0;
            var1 = var2.bind(var0)(var1);
            return var0;
        };
        var1 = new Array(0);
        var29 = var5.bind(var4)(var2, var1);
        var2 = var4.useCallback;
        var1 = function(arg0) { // Environment: var0
            var2 = _closure2_slot1;
            var0 = undefined;
            var1 = arg0;
            var1 = var2.bind(var0)(var1);
            return var0;
        };
        var0 = new Array(0);
        var25 = var2.bind(var4)(var1, var0);
        var2 = _closure1_slot12;
        var1 = _closure1_slot7;
        var0 = {};
        var6 = _closure1_slot13;
        var8 = 11;
        var4 = var23[var8];
        var4 = var22.bind(var3)(var4);
        var5 = var4.Stack;
        var4 = {};
        var27 = 24;
        var4.spacing = var27;
        var7 = {};
        var10 = var9.top;
        var7.paddingTop = var10;
        var9 = var9.bottom;
        var7.paddingBottom = var9;
        var11 = 12;
        var7.paddingHorizontal = var11;
        var4.style = var7;
        var7 = var23[var11];
        var7 = var22.bind(var3)(var7);
        var9 = var7.TableRowGroup;
        var7 = {};
        var14 = _closure1_slot12;
        var18 = 7;
        var10 = var23[var18];
        var10 = var22.bind(var3)(var10);
        var13 = var10.TableRow;
        var10 = {};
        var15 = _closure1_slot10;
        var10.onPress = var15;
        var19 = _closure1_slot12;
        var15 = var23[var18];
        var15 = var22.bind(var3)(var15);
        var15 = var15.TableRow;
        var16 = var15.Icon;
        var15 = {};
        var21 = 8;
        var20 = var23[var21];
        var20 = var22.bind(var3)(var20);
        var20 = var20.SettingsIcon;
        var15.IconComponent = var20;
        var15 = var19.bind(var3)(var16, var15);
        var10.icon = var15;
        var15 = 'Boost your Server';
        var10.label = var15;
        var15 = 'Unlock perks for the entire community';
        var10.subLabel = var15;
        var19 = _closure1_slot12;
        var15 = var23[var18];
        var15 = var22.bind(var3)(var15);
        var15 = var15.TableRow;
        var16 = var15.Arrow;
        var15 = {};
        var15 = var19.bind(var3)(var16, var15);
        var10.trailing = var15;
        var10 = var14.bind(var3)(var13, var10);
        var13 = new Array(7);
        var13[0] = var10;
        var15 = _closure1_slot12;
        var14 = _closure1_slot14;
        var10 = {};
        var10 = var15.bind(var3)(var14, var10);
        var13[1] = var10;
        var15 = _closure1_slot12;
        var10 = var23[var18];
        var10 = var22.bind(var3)(var10);
        var14 = var10.TableRow;
        var10 = {};
        var20 = _closure1_slot12;
        var16 = var23[var18];
        var16 = var22.bind(var3)(var16);
        var16 = var16.TableRow;
        var19 = var16.Icon;
        var16 = {};
        var24 = var23[var21];
        var24 = var22.bind(var3)(var24);
        var24 = var24.SettingsIcon;
        var16.IconComponent = var24;
        var28 = 'blurple';
        var16.variant = var28;
        var16 = var20.bind(var3)(var19, var16);
        var10.icon = var16;
        var16 = 'Add a Friend';
        var10.label = var16;
        var10 = var15.bind(var3)(var14, var10);
        var13[2] = var10;
        var15 = _closure1_slot12;
        var10 = var23[var18];
        var10 = var22.bind(var3)(var10);
        var14 = var10.TableRow;
        var10 = {
            'icon': null,
            'label': 'A really long label that takes up all of the space and then some',
            'subLabel': 'A really long sublabel that takes up all of the space and then some'
        };
        var20 = _closure1_slot12;
        var16 = var23[var18];
        var16 = var22.bind(var3)(var16);
        var16 = var16.TableRow;
        var19 = var16.Icon;
        var16 = {};
        var24 = var23[var21];
        var24 = var22.bind(var3)(var24);
        var24 = var24.SettingsIcon;
        var16.IconComponent = var24;
        var24 = 'boosting-pink';
        var16.variant = var24;
        var16 = var20.bind(var3)(var19, var16);
        var10.icon = var16;
        var10 = var15.bind(var3)(var14, var10);
        var13[3] = var10;
        var15 = _closure1_slot12;
        var10 = var23[var18];
        var10 = var22.bind(var3)(var10);
        var14 = var10.TableRow;
        var10 = {
            'icon': null,
            'label': 'A really long label, but next to an arrow, that takes up all of the space and then some',
            'subLabel': 'A really long sublabel, but next to an arrow, that takes up all of the space and then some'
        };
        var20 = _closure1_slot12;
        var16 = var23[var18];
        var16 = var22.bind(var3)(var16);
        var16 = var16.TableRow;
        var19 = var16.Icon;
        var16 = {};
        var31 = var23[var21];
        var31 = var22.bind(var3)(var31);
        var31 = var31.SettingsIcon;
        var16.IconComponent = var31;
        var16.variant = var24;
        var16 = var20.bind(var3)(var19, var16);
        var10.icon = var16;
        var20 = _closure1_slot12;
        var16 = var23[var18];
        var16 = var22.bind(var3)(var16);
        var16 = var16.TableRow;
        var19 = var16.Arrow;
        var16 = {};
        var16 = var20.bind(var3)(var19, var16);
        var10.trailing = var16;
        var10 = var15.bind(var3)(var14, var10);
        var13[4] = var10;
        var16 = _closure1_slot12;
        var10 = var23[var18];
        var10 = var22.bind(var3)(var10);
        var15 = var10.TableRow;
        var14 = {};
        var20 = _closure1_slot12;
        var10 = var23[var18];
        var10 = var22.bind(var3)(var10);
        var10 = var10.TableRow;
        var19 = var10.Icon;
        var10 = {};
        var31 = var23[var21];
        var31 = var22.bind(var3)(var31);
        var31 = var31.SettingsIcon;
        var10.IconComponent = var31;
        var10.variant = var24;
        var10 = var20.bind(var3)(var19, var10);
        var14.icon = var10;
        var31 = _closure1_slot12;
        var10 = 13;
        var19 = var23[var10];
        var19 = var22.bind(var3)(var19);
        var20 = var19.Text;
        var19 = {
            'variant': 'text-md/medium',
            'lineClamp': 1,
            'children': 'Custom node for label - A really long label that takes up all of the space and then some'
        };
        var19 = var31.bind(var3)(var20, var19);
        var14.label = var19;
        var20 = _closure1_slot5;
        var19 = {};
        var31 = {
            'flexDirection': 'row',
            'alignItems': 'center'
        };
        var19.style = var31;
        var33 = _closure1_slot12;
        var32 = _closure1_slot6;
        var31 = {};
        var36 = {
            'flexShrink': 0,
            'height': 24,
            'width': 24,
            'marginEnd': 8
        };
        var31.style = var36;
        var36 = {};
        var37 = 14;
        var37 = var23[var37];
        var40 = var12.bind(var3)(var37);
        var39 = var40.getEmojiURL;
        var37 = {
            'id': '801497159479722084',
            'animated': false,
            'size': 24
        };
        var37 = var39.bind(var40)(var37);
        var36.uri = var37;
        var31.source = var36;
        var36 = 'contain';
        var31.resizeMode = var36;
        var32 = var33.bind(var3)(var32, var31);
        var31 = new Array(2);
        var31[0] = var32;
        var36 = _closure1_slot12;
        var32 = var23[var10];
        var32 = var22.bind(var3)(var32);
        var33 = var32.Text;
        var32 = {
            'variant': 'text-md/medium',
            'lineClamp': 1,
            'color': 'text-muted',
            'style': null,
            'children': 'Custom node for subLabel - A really long sublabel that takes up all of the space and then some'
        };
        var37 = {};
        var37.flexShrink = var38;
        var32.style = var37;
        var32 = var36.bind(var3)(var33, var32);
        var31[1] = var32;
        var19.children = var31;
        var19 = var6.bind(var3)(var20, var19);
        var14.subLabel = var19;
        var14 = var16.bind(var3)(var15, var14);
        var13[5] = var14;
        var16 = _closure1_slot12;
        var14 = var23[var18];
        var14 = var22.bind(var3)(var14);
        var15 = var14.TableRow;
        var14 = {
            'icon': null,
            'label': 'A disabled row',
            'subLabel': 'you cant do anything with this',
            'disabled': true
        };
        var31 = _closure1_slot12;
        var19 = var23[var18];
        var19 = var22.bind(var3)(var19);
        var19 = var19.TableRow;
        var20 = var19.Icon;
        var19 = {};
        var32 = var23[var21];
        var32 = var22.bind(var3)(var32);
        var32 = var32.SettingsIcon;
        var19.IconComponent = var32;
        var19 = var31.bind(var3)(var20, var19);
        var14.icon = var19;
        var20 = true;
        var14 = var16.bind(var3)(var15, var14);
        var13[6] = var14;
        var7.children = var13;
        var9 = var6.bind(var3)(var9, var7);
        var7 = new Array(7);
        var7[0] = var9;
        var9 = var23[var11];
        var9 = var22.bind(var3)(var9);
        var13 = var9.TableRowGroup;
        var9 = {};
        var14 = 'Table Row Section';
        var9.title = var14;
        var16 = _closure1_slot12;
        var14 = var23[var18];
        var14 = var22.bind(var3)(var14);
        var15 = var14.TableRow;
        var14 = {};
        var19 = var35.globalName;
        var14.label = var19;
        var19 = var35.username;
        var14.subLabel = var19;
        var32 = _closure1_slot12;
        var33 = 15;
        var19 = var23[var33];
        var31 = var12.bind(var3)(var19);
        var19 = {};
        var19.user = var35;
        var19.guildId = var34;
        var34 = _closure1_slot11;
        var34 = var34.ONLINE;
        var19.status = var34;
        var33 = var23[var33];
        var33 = var22.bind(var3)(var33);
        var33 = var33.AvatarSizes;
        var33 = var33.REFRESH_MEDIUM_32;
        var19.size = var33;
        var19 = var32.bind(var3)(var31, var19);
        var14.icon = var19;
        var15 = var16.bind(var3)(var15, var14);
        var14 = new Array(11);
        var14[0] = var15;
        var19 = _closure1_slot12;
        var15 = var23[var18];
        var15 = var22.bind(var3)(var15);
        var16 = var15.TableRow;
        var15 = {};
        var33 = _closure1_slot12;
        var31 = var23[var18];
        var31 = var22.bind(var3)(var31);
        var31 = var31.TableRow;
        var32 = var31.Icon;
        var31 = {};
        var34 = var23[var21];
        var34 = var22.bind(var3)(var34);
        var34 = var34.SettingsIcon;
        var31.IconComponent = var34;
        var31 = var33.bind(var3)(var32, var31);
        var15.icon = var31;
        var31 = 'Language';
        var15.label = var31;
        var33 = _closure1_slot12;
        var31 = var23[var18];
        var31 = var22.bind(var3)(var31);
        var31 = var31.TableRow;
        var32 = var31.TrailingText;
        var31 = {};
        var34 = 'English (US)';
        var31.text = var34;
        var31 = var33.bind(var3)(var32, var31);
        var15.trailing = var31;
        var15 = var19.bind(var3)(var16, var15);
        var14[1] = var15;
        var19 = _closure1_slot12;
        var15 = var23[var18];
        var15 = var22.bind(var3)(var15);
        var16 = var15.TableRow;
        var15 = {};
        var33 = _closure1_slot12;
        var31 = var23[var18];
        var31 = var22.bind(var3)(var31);
        var31 = var31.TableRow;
        var32 = var31.Icon;
        var31 = {};
        var34 = var23[var21];
        var34 = var22.bind(var3)(var34);
        var34 = var34.SettingsIcon;
        var31.IconComponent = var34;
        var31 = var33.bind(var3)(var32, var31);
        var15.icon = var31;
        var31 = 'Display Name';
        var15.label = var31;
        var35 = _closure1_slot12;
        var32 = var23[var18];
        var32 = var22.bind(var3)(var32);
        var32 = var32.TableRow;
        var33 = var32.TrailingText;
        var32 = {};
        var34 = 'thisisareallylongusernamewhichshouldtruncate';
        var32.text = var34;
        var32 = var35.bind(var3)(var33, var32);
        var15.trailing = var32;
        var15 = var19.bind(var3)(var16, var15);
        var14[2] = var15;
        var19 = _closure1_slot12;
        var15 = var23[var18];
        var15 = var22.bind(var3)(var15);
        var16 = var15.TableRow;
        var15 = {};
        var35 = _closure1_slot12;
        var32 = var23[var18];
        var32 = var22.bind(var3)(var32);
        var32 = var32.TableRow;
        var33 = var32.Icon;
        var32 = {};
        var36 = var23[var21];
        var36 = var22.bind(var3)(var36);
        var36 = var36.SettingsIcon;
        var32.IconComponent = var36;
        var32 = var35.bind(var3)(var33, var32);
        var15.icon = var32;
        var15.label = var31;
        var33 = _closure1_slot12;
        var31 = var23[var18];
        var31 = var22.bind(var3)(var31);
        var31 = var31.TableRow;
        var32 = var31.TrailingText;
        var31 = {};
        var31.text = var34;
        var31 = var33.bind(var3)(var32, var31);
        var15.trailing = var31;
        var15.arrow = var20;
        var15 = var19.bind(var3)(var16, var15);
        var14[3] = var15;
        var19 = _closure1_slot12;
        var15 = var23[var18];
        var15 = var22.bind(var3)(var15);
        var16 = var15.TableRow;
        var15 = {};
        var32 = _closure1_slot12;
        var20 = var23[var18];
        var20 = var22.bind(var3)(var20);
        var20 = var20.TableRow;
        var31 = var20.Icon;
        var20 = {};
        var33 = var23[var21];
        var33 = var22.bind(var3)(var33);
        var33 = var33.SettingsIcon;
        var20.IconComponent = var33;
        var20 = var32.bind(var3)(var31, var20);
        var15.icon = var20;
        var20 = 'Display Name That Is Very Long And Maybe Wrap';
        var15.label = var20;
        var33 = _closure1_slot12;
        var31 = var23[var18];
        var31 = var22.bind(var3)(var31);
        var31 = var31.TableRow;
        var32 = var31.TrailingText;
        var31 = {};
        var31.text = var34;
        var31 = var33.bind(var3)(var32, var31);
        var15.trailing = var31;
        var15 = var19.bind(var3)(var16, var15);
        var14[4] = var15;
        var19 = _closure1_slot12;
        var15 = var23[var18];
        var15 = var22.bind(var3)(var15);
        var16 = var15.TableRow;
        var15 = {};
        var33 = _closure1_slot12;
        var31 = var23[var18];
        var31 = var22.bind(var3)(var31);
        var31 = var31.TableRow;
        var32 = var31.Icon;
        var31 = {};
        var34 = var23[var21];
        var34 = var22.bind(var3)(var34);
        var34 = var34.SettingsIcon;
        var31.IconComponent = var34;
        var31 = var33.bind(var3)(var32, var31);
        var15.icon = var31;
        var15.label = var20;
        var32 = _closure1_slot12;
        var20 = var23[var18];
        var20 = var22.bind(var3)(var20);
        var20 = var20.TableRow;
        var31 = var20.TrailingText;
        var20 = {};
        var33 = '100';
        var20.text = var33;
        var20 = var32.bind(var3)(var31, var20);
        var15.trailing = var20;
        var15 = var19.bind(var3)(var16, var15);
        var14[5] = var15;
        var19 = _closure1_slot12;
        var15 = var23[var18];
        var15 = var22.bind(var3)(var15);
        var16 = var15.TableRow;
        var15 = {
            'icon': null,
            'label': 'Language',
            'subLabel': 'English (US)'
        };
        var32 = _closure1_slot12;
        var20 = var23[var18];
        var20 = var22.bind(var3)(var20);
        var20 = var20.TableRow;
        var31 = var20.Icon;
        var20 = {};
        var33 = var23[var21];
        var33 = var22.bind(var3)(var33);
        var33 = var33.SettingsIcon;
        var20.IconComponent = var33;
        var20 = var32.bind(var3)(var31, var20);
        var15.icon = var20;
        var15 = var19.bind(var3)(var16, var15);
        var14[6] = var15;
        var20 = _closure1_slot12;
        var15 = 16;
        var16 = var23[var15];
        var16 = var22.bind(var3)(var16);
        var19 = var16.TableSwitchRow;
        var16 = {
            'icon': null,
            'label': 'A really long label that has a switch next to it',
            'subLabel': 'Show more information in less space'
        };
        var33 = _closure1_slot12;
        var31 = var23[var18];
        var31 = var22.bind(var3)(var31);
        var31 = var31.TableRow;
        var32 = var31.Icon;
        var31 = {};
        var34 = var23[var21];
        var34 = var22.bind(var3)(var34);
        var34 = var34.SettingsIcon;
        var31.IconComponent = var34;
        var31.variant = var28;
        var31 = var33.bind(var3)(var32, var31);
        var16.icon = var31;
        var16.value = var30;
        var16.onValueChange = var29;
        var16 = var20.bind(var3)(var19, var16);
        var14[7] = var16;
        var19 = _closure1_slot12;
        var15 = var23[var15];
        var15 = var22.bind(var3)(var15);
        var16 = var15.TableSwitchRow;
        var15 = {
            'icon': null,
            'label': 'Text & Images',
            'subLabel': 'Automatically play GIFs when possible',
            'value': true,
            'onValueChange': null,
            'disabled': true
        };
        var30 = _closure1_slot12;
        var20 = var23[var18];
        var20 = var22.bind(var3)(var20);
        var20 = var20.TableRow;
        var29 = var20.Icon;
        var20 = {};
        var31 = var23[var21];
        var31 = var22.bind(var3)(var31);
        var31 = var31.SettingsIcon;
        var20.IconComponent = var31;
        var20.variant = var24;
        var20 = var30.bind(var3)(var29, var20);
        var15.icon = var20;
        var20 = _closure1_slot10;
        var15.onValueChange = var20;
        var15 = var19.bind(var3)(var16, var15);
        var14[8] = var15;
        var20 = _closure1_slot12;
        var15 = 17;
        var16 = var23[var15];
        var16 = var22.bind(var3)(var16);
        var19 = var16.TableCheckboxRow;
        var16 = {
            'icon': null,
            'label': 'A checkbox row',
            'subLabel': 'This can be checked or unchecked'
        };
        var31 = _closure1_slot12;
        var29 = var23[var18];
        var29 = var22.bind(var3)(var29);
        var29 = var29.TableRow;
        var30 = var29.Icon;
        var29 = {};
        var32 = var23[var21];
        var32 = var22.bind(var3)(var32);
        var32 = var32.SettingsIcon;
        var29.IconComponent = var32;
        var29.variant = var28;
        var29 = var31.bind(var3)(var30, var29);
        var16.icon = var29;
        var16.checked = var26;
        var16.onPress = var25;
        var16 = var20.bind(var3)(var19, var16);
        var14[9] = var16;
        var19 = _closure1_slot12;
        var15 = var23[var15];
        var15 = var22.bind(var3)(var15);
        var16 = var15.TableCheckboxRow;
        var15 = {
            'icon': null,
            'label': 'A really long label that has a checkbox next to it',
            'subLabel': 'Show more information in less space',
            'checked': true,
            'disabled': true
        };
        var26 = _closure1_slot12;
        var20 = var23[var18];
        var20 = var22.bind(var3)(var20);
        var20 = var20.TableRow;
        var25 = var20.Icon;
        var20 = {};
        var29 = var23[var21];
        var29 = var22.bind(var3)(var29);
        var29 = var29.SettingsIcon;
        var20.IconComponent = var29;
        var20.variant = var28;
        var20 = var26.bind(var3)(var25, var20);
        var15.icon = var20;
        var20 = _closure1_slot10;
        var15.onPress = var20;
        var15 = var19.bind(var3)(var16, var15);
        var14[10] = var15;
        var9.children = var14;
        var9 = var6.bind(var3)(var13, var9);
        var7[1] = var9;
        var9 = var23[var11];
        var9 = var22.bind(var3)(var9);
        var13 = var9.TableRowGroup;
        var9 = {
            'title': 'Draggable Table Rows',
            'description': 'Table rows can optionally show a drag handle. Note that this does not actually make them draggable, you need to implement that yourself.',
            'hasIcons': false
        };
        var16 = _closure1_slot12;
        var14 = var23[var18];
        var14 = var22.bind(var3)(var14);
        var15 = var14.TableRow;
        var14 = {
            'draggable': true,
            'onPress': null,
            'icon': null,
            'label': 'Boost your Server',
            'subLabel': 'Unlock perks for the entire community'
        };
        var19 = _closure1_slot10;
        var14.onPress = var19;
        var25 = _closure1_slot12;
        var19 = var23[var18];
        var19 = var22.bind(var3)(var19);
        var19 = var19.TableRow;
        var20 = var19.Icon;
        var19 = {};
        var26 = var23[var21];
        var26 = var22.bind(var3)(var26);
        var26 = var26.SettingsIcon;
        var19.IconComponent = var26;
        var19 = var25.bind(var3)(var20, var19);
        var14.icon = var19;
        var25 = _closure1_slot12;
        var19 = var23[var18];
        var19 = var22.bind(var3)(var19);
        var19 = var19.TableRow;
        var20 = var19.Arrow;
        var19 = {};
        var19 = var25.bind(var3)(var20, var19);
        var14.trailing = var19;
        var15 = var16.bind(var3)(var15, var14);
        var14 = new Array(2);
        var14[0] = var15;
        var19 = _closure1_slot12;
        var15 = var23[var18];
        var15 = var22.bind(var3)(var15);
        var16 = var15.TableRow;
        var15 = {
            'draggable': true,
            'onPress': null,
            'icon': null,
            'label': 'Boost your Server',
            'subLabel': 'Unlock perks for the entire community'
        };
        var20 = _closure1_slot10;
        var15.onPress = var20;
        var26 = _closure1_slot12;
        var20 = var23[var18];
        var20 = var22.bind(var3)(var20);
        var20 = var20.TableRow;
        var25 = var20.Icon;
        var20 = {};
        var28 = var23[var21];
        var28 = var22.bind(var3)(var28);
        var28 = var28.SettingsIcon;
        var20.IconComponent = var28;
        var20 = var26.bind(var3)(var25, var20);
        var15.icon = var20;
        var26 = _closure1_slot12;
        var20 = var23[var18];
        var20 = var22.bind(var3)(var20);
        var20 = var20.TableRow;
        var25 = var20.Arrow;
        var20 = {};
        var20 = var26.bind(var3)(var25, var20);
        var15.trailing = var20;
        var15 = var19.bind(var3)(var16, var15);
        var14[1] = var15;
        var9.children = var14;
        var9 = var6.bind(var3)(var13, var9);
        var7[2] = var9;
        var9 = var23[var11];
        var9 = var22.bind(var3)(var9);
        var13 = var9.TableRowGroup;
        var9 = {};
        var14 = 'No Icons';
        var9.title = var14;
        var16 = _closure1_slot12;
        var14 = var23[var18];
        var14 = var22.bind(var3)(var14);
        var15 = var14.TableRow;
        var14 = {
            'label': 'First Item',
            'subLabel': 'Here is an item'
        };
        var19 = _closure1_slot10;
        var14.onPress = var19;
        var15 = var16.bind(var3)(var15, var14);
        var14 = new Array(3);
        var14[0] = var15;
        var19 = _closure1_slot12;
        var15 = var23[var18];
        var15 = var22.bind(var3)(var15);
        var16 = var15.TableRow;
        var15 = {
            'label': 'Second Item',
            'subLabel': 'Here is another item'
        };
        var20 = _closure1_slot10;
        var15.onPress = var20;
        var15 = var19.bind(var3)(var16, var15);
        var14[1] = var15;
        var19 = _closure1_slot12;
        var15 = var23[var18];
        var15 = var22.bind(var3)(var15);
        var16 = var15.TableRow;
        var15 = {
            'label': 'Third Item',
            'subLabel': 'Here is yet another item'
        };
        var20 = _closure1_slot10;
        var15.onPress = var20;
        var15 = var19.bind(var3)(var16, var15);
        var14[2] = var15;
        var9.children = var14;
        var9 = var6.bind(var3)(var13, var9);
        var7[3] = var9;
        var9 = 18;
        var13 = var23[var9];
        var13 = var22.bind(var3)(var13);
        var14 = var13.TableRadioGroup;
        var13 = {
            'title': 'Radio Group',
            'hasIcons': false,
            'defaultValue': 'option1'
        };
        var15 = _closure1_slot10;
        var13.onChange = var15;
        var20 = _closure1_slot12;
        var15 = 19;
        var16 = var23[var15];
        var16 = var22.bind(var3)(var16);
        var19 = var16.TableRadioRow;
        var16 = {
            'label': 'First Item',
            'subLabel': 'Here is an item',
            'value': 'option1'
        };
        var19 = var20.bind(var3)(var19, var16);
        var16 = new Array(4);
        var16[0] = var19;
        var25 = _closure1_slot12;
        var19 = var23[var15];
        var19 = var22.bind(var3)(var19);
        var20 = var19.TableRadioRow;
        var19 = {
            'label': 'Second Item',
            'subLabel': 'Here is another item',
            'value': 'option2'
        };
        var19 = var25.bind(var3)(var20, var19);
        var16[1] = var19;
        var25 = _closure1_slot12;
        var19 = var23[var15];
        var19 = var22.bind(var3)(var19);
        var20 = var19.TableRadioRow;
        var19 = {
            'label': 'Third Item',
            'subLabel': 'Here is yet another item',
            'value': 'option3'
        };
        var19 = var25.bind(var3)(var20, var19);
        var16[2] = var19;
        var25 = _closure1_slot12;
        var19 = var23[var15];
        var19 = var22.bind(var3)(var19);
        var20 = var19.TableRadioRow;
        var19 = {
            'label': 'Disabled Item',
            'subLabel': 'This should not be selectable',
            'value': 'option4',
            'disabled': true
        };
        var19 = var25.bind(var3)(var20, var19);
        var16[3] = var19;
        var13.children = var16;
        var13 = var6.bind(var3)(var14, var13);
        var7[4] = var13;
        var9 = var23[var9];
        var9 = var22.bind(var3)(var9);
        var13 = var9.TableRadioGroup;
        var9 = {
            'title': 'Online Status',
            'hasIcons': true,
            'defaultValue': 'option1'
        };
        var14 = _closure1_slot10;
        var9.onChange = var14;
        var19 = _closure1_slot12;
        var14 = var23[var15];
        var14 = var22.bind(var3)(var14);
        var16 = var14.TableRadioRow;
        var14 = {
            'icon': null,
            'label': 'Online',
            'value': 'option1'
        };
        var28 = _closure1_slot12;
        var20 = 20;
        var25 = var23[var20];
        var25 = var22.bind(var3)(var25);
        var26 = var25.TableRowIcon;
        var25 = {};
        var29 = 'text-status-online';
        var25.variant = var29;
        var29 = 21;
        var29 = var23[var29];
        var29 = var12.bind(var3)(var29);
        var25.source = var29;
        var25 = var28.bind(var3)(var26, var25);
        var14.icon = var25;
        var16 = var19.bind(var3)(var16, var14);
        var14 = new Array(4);
        var14[0] = var16;
        var25 = _closure1_slot12;
        var16 = var23[var15];
        var16 = var22.bind(var3)(var16);
        var19 = var16.TableRadioRow;
        var16 = {
            'icon': null,
            'label': 'Idle',
            'value': 'option2'
        };
        var29 = _closure1_slot12;
        var26 = var23[var20];
        var26 = var22.bind(var3)(var26);
        var28 = var26.TableRowIcon;
        var26 = {};
        var30 = 'text-status-idle';
        var26.variant = var30;
        var30 = 22;
        var30 = var23[var30];
        var30 = var12.bind(var3)(var30);
        var26.source = var30;
        var26 = var29.bind(var3)(var28, var26);
        var16.icon = var26;
        var16 = var25.bind(var3)(var19, var16);
        var14[1] = var16;
        var25 = _closure1_slot12;
        var16 = var23[var15];
        var16 = var22.bind(var3)(var16);
        var19 = var16.TableRadioRow;
        var16 = {
            'icon': null,
            'label': 'Do Not Disturb',
            'value': 'option3'
        };
        var29 = _closure1_slot12;
        var26 = var23[var20];
        var26 = var22.bind(var3)(var26);
        var28 = var26.TableRowIcon;
        var26 = {};
        var30 = 'text-status-dnd';
        var26.variant = var30;
        var30 = 23;
        var30 = var23[var30];
        var30 = var12.bind(var3)(var30);
        var26.source = var30;
        var26 = var29.bind(var3)(var28, var26);
        var16.icon = var26;
        var16 = var25.bind(var3)(var19, var16);
        var14[2] = var16;
        var19 = _closure1_slot12;
        var15 = var23[var15];
        var15 = var22.bind(var3)(var15);
        var16 = var15.TableRadioRow;
        var15 = {
            'icon': null,
            'label': 'Invisible',
            'value': 'option4'
        };
        var26 = _closure1_slot12;
        var20 = var23[var20];
        var20 = var22.bind(var3)(var20);
        var25 = var20.TableRowIcon;
        var20 = {};
        var28 = 'text-status-offline';
        var20.variant = var28;
        var27 = var23[var27];
        var27 = var12.bind(var3)(var27);
        var20.source = var27;
        var20 = var26.bind(var3)(var25, var20);
        var15.icon = var20;
        var15 = var19.bind(var3)(var16, var15);
        var14[3] = var15;
        var9.children = var14;
        var9 = var6.bind(var3)(var13, var9);
        var7[5] = var9;
        var8 = var23[var8];
        var8 = var22.bind(var3)(var8);
        var9 = var8.Stack;
        var8 = {};
        var8.spacing = var11;
        var13 = _closure1_slot12;
        var10 = var23[var10];
        var10 = var22.bind(var3)(var10);
        var11 = var10.Text;
        var10 = {
            'variant': 'heading-sm/semibold',
            'children': 'Row buttons'
        };
        var11 = var13.bind(var3)(var11, var10);
        var10 = new Array(4);
        var10[0] = var11;
        var15 = _closure1_slot12;
        var14 = 25;
        var11 = var23[var14];
        var11 = var22.bind(var3)(var11);
        var13 = var11.RowButton;
        var11 = {};
        var20 = _closure1_slot12;
        var16 = var23[var18];
        var16 = var22.bind(var3)(var16);
        var16 = var16.TableRow;
        var19 = var16.Icon;
        var16 = {};
        var25 = var23[var21];
        var25 = var22.bind(var3)(var25);
        var25 = var25.SettingsIcon;
        var16.IconComponent = var25;
        var16.variant = var24;
        var16 = var20.bind(var3)(var19, var16);
        var11.icon = var16;
        var16 = 'Boost your server';
        var11.label = var16;
        var16 = _closure1_slot10;
        var11.onPress = var16;
        var11 = var15.bind(var3)(var13, var11);
        var10[1] = var11;
        var15 = _closure1_slot12;
        var11 = var23[var14];
        var11 = var22.bind(var3)(var11);
        var13 = var11.RowButton;
        var11 = {
            'label': 'Disabled row button',
            'onPress': null,
            'disabled': true,
            'arrow': false
        };
        var16 = _closure1_slot10;
        var11.onPress = var16;
        var11 = var15.bind(var3)(var13, var11);
        var10[2] = var11;
        var13 = _closure1_slot12;
        var11 = 26;
        var11 = var23[var11];
        var12 = var12.bind(var3)(var11);
        var11 = {};
        var15 = {};
        var15.padding = var21;
        var11.style = var15;
        var15 = {
            'x': 0,
            'y': 0
        };
        var11.start = var15;
        var15 = {
            'x': 1,
            'y': 0
        };
        var11.end = var15;
        var15 = ['red', 'orange', 'yellow', 'green', 'teal', 'blue', 'purple'];
        var11.colors = var15;
        var16 = _closure1_slot12;
        var14 = var23[var14];
        var14 = var22.bind(var3)(var14);
        var15 = var14.RowButton;
        var14 = {
            'icon': null,
            'experimental_withBlurBackground': true,
            'label': 'Row Button'
        };
        var20 = _closure1_slot12;
        var18 = var23[var18];
        var18 = var22.bind(var3)(var18);
        var18 = var18.TableRow;
        var19 = var18.Icon;
        var18 = {};
        var21 = var23[var21];
        var21 = var22.bind(var3)(var21);
        var21 = var21.SettingsIcon;
        var18.IconComponent = var21;
        var21 = 'translucent';
        var18.variant = var21;
        var18 = var20.bind(var3)(var19, var18);
        var14.icon = var18;
        var17 = _closure1_slot10;
        var14.onPress = var17;
        var14 = var16.bind(var3)(var15, var14);
        var11.children = var14;
        var11 = var13.bind(var3)(var12, var11);
        var10[3] = var11;
        var8.children = var10;
        var8 = var6.bind(var3)(var9, var8);
        var7[6] = var8;
        var4.children = var7;
        var4 = var6.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 3213, 1621, 660, 33, 4900, 5373, 566, 1568, 4080, 5367, 3941, 1417, 5456, 5420, 8806, 5426, 5425, 4907, 5766, 5763, 5764, 5765, 5384, 4098, 2]);