// modules/devtools/native/components/screens/DevToolsComponentsTestingScreen.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var14 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var14;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        _fun86789: for (var _fun86789_ip = 0;;) switch (_fun86789_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.type;
                var18 = var0.title;
                var3 = _closure1_slot4;
                var2 = var3.useState;
                var0 = false;
                var4 = var2.bind(var3)(var0);
                var2 = _closure1_slot3;
                var3 = undefined;
                var0 = 2;
                var0 = var2.bind(var3)(var4, var0);
                var2 = 0;
                var10 = var0[var2];
                var2 = 1;
                var0 = var0[var2];
                var _closure2_slot0 = var0;
                var6 = {};
                var20 = _closure1_slot11;
                var21 = var6;
                var0 = copyDataProperties(var21, var20);
                if (!var10) {
                    _fun86789_ip = 85;
                    continue _fun86789
                }
            case 82:
                var2 = 4;
            case 85:
                var0 = 'maxValues';
                var6[var0] = var2;
                var16 = 'type';
                var6[var16] = var1;
                var9 = global;
                var0 = var9.String;
                var1 = var0.bind(var3)(var1);
                var0 = 'id';
                var6[var0] = var1;
                var12 = _closure1_slot0;
                var15 = _closure1_slot2;
                var0 = 9;
                var0 = var15[var0];
                var1 = var12.bind(var3)(var0);
                var0 = var1.useComponentState;
                var0 = var0.bind(var1)(var6);
                var13 = var0.state;
                var2 = _closure1_slot8;
                var0 = 10;
                var0 = var15[var0];
                var0 = var12.bind(var3)(var0);
                var1 = var0.Card;
                var0 = {};
                var4 = {};
                var7 = 8;
                var4.gap = var7;
                var0.style = var4;
                var17 = _closure1_slot7;
                var14 = 11;
                var4 = var15[var14];
                var4 = var12.bind(var3)(var4);
                var11 = var4.Text;
                var4 = {};
                var19 = 'heading-lg/medium';
                var4.variant = var19;
                var4.children = var18;
                var11 = var17.bind(var3)(var11, var4);
                var4 = new Array(4);
                var4[0] = var11;
                var11 = var6.type;
                var7 = var15[var7];
                var7 = var12.bind(var3)(var7);
                var7 = var7.ComponentType;
                var7 = var7.STRING_SELECT;
                if (!(var11 !== var7)) {
                    _fun86789_ip = 333;
                    continue _fun86789
                }
            case 279:
                var12 = _closure1_slot7;
                var11 = _closure1_slot1;
                var15 = _closure1_slot2;
                var7 = 13;
                var7 = var15[var7];
                var11 = var11.bind(var3)(var7);
                var7 = {};
                var21 = var7;
                var20 = var6;
                var15 = copyDataProperties(var21, var20);
                var15 = var6.type;
                var7[var16] = var15;
                var7 = var12.bind(var3)(var11, var7);
                _fun86789_ip = 375;
                continue _fun86789;
            case 333:
                var15 = _closure1_slot7;
                var12 = _closure1_slot1;
                var16 = _closure1_slot2;
                var11 = 12;
                var11 = var16[var11];
                var12 = var12.bind(var3)(var11);
                var11 = {};
                var21 = var11;
                var20 = var6;
                var16 = copyDataProperties(var21, var20);
                var7 = var15.bind(var3)(var12, var11);
            case 375:
                var4[1] = var7;
                var7 = null;
                var11 = var7 == var13;
                var7 = undefined;
                if (var11) {
                    _fun86789_ip = 395;
                    continue _fun86789
                }
            case 390:
                var7 = var13.type;
            case 395:
                var6 = var6.type;
                if (!(var7 !== var6)) {
                    _fun86789_ip = 452;
                    continue _fun86789
                }
            case 404:
                var11 = _closure1_slot7;
                var7 = _closure1_slot0;
                var6 = _closure1_slot2;
                var6 = var6[var14];
                var6 = var7.bind(var3)(var6);
                var7 = var6.Text;
                var6 = {
                    'variant': 'text-md/normal',
                    'children': 'Nothing selected'
                };
                var6 = var11.bind(var3)(var7, var6);
                _fun86789_ip = 571;
                continue _fun86789;
            case 452:
                var12 = _closure1_slot8;
                var11 = _closure1_slot0;
                var7 = _closure1_slot2;
                var7 = var7[var14];
                var7 = var11.bind(var3)(var7);
                var11 = var7.Text;
                var7 = {};
                var14 = 'text-md/normal';
                var7.variant = var14;
                var14 = 'values';
                var14 = var14 in var13;
                if (var14) {
                    _fun86789_ip = 526;
                    continue _fun86789
                }
            case 501:
                var16 = var13.selectedOptions;
                var15 = var16.map;
                var14 = function(arg0) { // Environment: var8
                    var0 = arg0;
                    var0 = var0.label;
                    return var0;
                };
                var15 = var15.bind(var16)(var14);
                _fun86789_ip = 531;
                continue _fun86789;
            case 526:
                var15 = var13.values;
            case 531:
                var14 = var15.join;
                var13 = ', ';
                var14 = var14.bind(var15)(var13);
                var13 = ['Selected values: '];
                var13[1] = var14;
                var7.children = var13;
                var6 = var12.bind(var3)(var11, var7);
            case 571:
                var4[2] = var6;
                var7 = _closure1_slot7;
                var6 = _closure1_slot0;
                var11 = _closure1_slot2;
                var5 = 14;
                var5 = var11[var5];
                var5 = var6.bind(var3)(var5);
                var6 = var5.Button;
                var5 = {};
                var12 = 'off';
                if (!var10) {
                    _fun86789_ip = 618;
                    continue _fun86789
                }
            case 614:
                var12 = 'on';
            case 618:
                var9 = var9.HermesInternal;
                var11 = var9.concat;
                var10 = 'Toggle Multi Select (';
                var9 = ')';
                var9 = var11.bind(var10)(var12, var9);
                var5.text = var9;
                var8 = function() {
                    var2 = _closure2_slot0;
                    var1 = undefined;
                    var0 = function(arg0) { // Environment: var0
                        var0 = arg0;
                        var0 = !var0;
                        return var0;
                    };
                    var0 = var2.bind(var1)(var0);
                    return var0;
                };
                var5.onPress = var8;
                var8 = 'sm';
                var5.size = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[3] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot13 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var7 = 0;
    var3 = var5[var7];
    var0 = undefined;
    var9 = var14.bind(var0)(var3);
    var _closure1_slot3 = var9;
    var6 = 1;
    var8 = var5[var6];
    var3 = arg3;
    var3 = var3.bind(var0)(var8);
    var _closure1_slot4 = var3;
    var8 = 2;
    var3 = var5[var8];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ScrollView;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var14.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var10 = var3.jsx;
    var _closure1_slot7 = var10;
    var3 = var3.jsxs;
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var11 = var4.bind(var0)(var3);
    var10 = var11.createStyles;
    var3 = {};
    var12 = {};
    var13 = 6;
    var15 = var5[var13];
    var15 = var14.bind(var0)(var15);
    var15 = var15.colors;
    var15 = var15.BACKGROUND_BASE_LOW;
    var12.backgroundColor = var15;
    var12.flex = var6;
    var3.wrap = var12;
    var12 = {};
    var15 = var5[var13];
    var15 = var14.bind(var0)(var15);
    var15 = var15.spacing;
    var15 = var15.PX_16;
    var12.padding = var15;
    var13 = var5[var13];
    var13 = var14.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_32;
    var12.paddingBottom = var13;
    var3.contentContainer = var12;
    var3 = var10.bind(var11)(var3);
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var5[var3];
    var11 = var4.bind(var0)(var3);
    var10 = var11.transformComponents;
    var12 = {
        'type': null,
        'custom_id': 'test',
        'max_values': 1,
        'min_values': 1,
        'placeholder': 'Choose...'
    };
    var13 = 8;
    var3 = var5[var13];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ComponentType;
    var3 = var3.STRING_SELECT;
    var12.type = var3;
    var3 = new Array(4);
    var14 = {
        'label': 'test with a long label',
        'value': 'test'
    };
    var3[0] = var14;
    var14 = {
        'label': 'test 2 with a long label',
        'value': 'test2',
        'description': 'with description!'
    };
    var3[1] = var14;
    var14 = {
        'label': 'star with a long label',
        'value': 'star'
    };
    var15 = {};
    var16 = '⭐';
    var15.name = var16;
    var14.emoji = var15;
    var3[2] = var14;
    var14 = {
        'label': 'advaith',
        'value': 'advaith'
    };
    var15 = {
        'id': '889887673425199124',
        'name': 'advaith_anim',
        'animated': true
    };
    var14.emoji = var15;
    var3[3] = var14;
    var12.options = var3;
    var3 = new Array(2);
    var3[0] = var12;
    var12 = {};
    var13 = var5[var13];
    var13 = var4.bind(var0)(var13);
    var13 = var13.ComponentType;
    var13 = var13.TEXT_DISPLAY;
    var12.type = var13;
    var13 = 'hello world! :eyes: **bold** `code` https://cdn.discordapp.com/attachments/1408191424968523819/1408191500277387274/advaith.webp\nhttps://discord.com [google](https://google.com) ||spoiler|| <t:1755730638:t> <a:wumpus_party:393564669765353483>';
    var12.content = var13;
    var3[1] = var12;
    var3 = var10.bind(var11)(var3);
    var _closure1_slot10 = var3;
    var3 = var9.bind(var0)(var3, var8);
    var7 = var3[var7];
    var _closure1_slot11 = var7;
    var3 = var3[var6];
    var _closure1_slot12 = var3;
    var3 = 18;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/devtools/native/components/screens/DevToolsComponentsTestingScreen.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        var0 = _closure1_slot9;
        var3 = undefined;
        var4 = var0.bind(var3)();
        var2 = _closure1_slot7;
        var1 = _closure1_slot5;
        var0 = {};
        var5 = var4.wrap;
        var0.style = var5;
        var4 = var4.contentContainer;
        var0.contentContainerStyle = var4;
        var6 = _closure1_slot8;
        var9 = _closure1_slot0;
        var11 = _closure1_slot2;
        var4 = 15;
        var4 = var11[var4];
        var4 = var9.bind(var3)(var4);
        var5 = var4.Stack;
        var4 = {};
        var14 = 16;
        var4.spacing = var14;
        var12 = _closure1_slot7;
        var7 = 11;
        var7 = var11[var7];
        var7 = var9.bind(var3)(var7);
        var10 = var7.Text;
        var7 = {
            'variant': 'text-md/normal',
            'children': 'Test screen for embedding native components in RN'
        };
        var10 = var12.bind(var3)(var10, var7);
        var7 = new Array(3);
        var7[0] = var10;
        var13 = _closure1_slot8;
        var10 = 9;
        var10 = var11[var10];
        var10 = var9.bind(var3)(var10);
        var12 = var10.ComponentStateContextProvider;
        var10 = {};
        var15 = {};
        var16 = 'modal';
        var15.customId = var16;
        var17 = _closure1_slot6;
        var16 = var17.getChannelId;
        var16 = var16.bind(var17)();
        var15.channelId = var16;
        var16 = _closure1_slot10;
        var15.components = var16;
        var10.modal = var15;
        var16 = _closure1_slot7;
        var15 = _closure1_slot1;
        var14 = var11[var14];
        var15 = var15.bind(var3)(var14);
        var14 = {};
        var20 = _closure1_slot12;
        var21 = var14;
        var17 = copyDataProperties(var21, var20);
        var15 = var16.bind(var3)(var15, var14);
        var14 = new Array(6);
        var14[0] = var15;
        var16 = _closure1_slot7;
        var17 = _closure1_slot13;
        var15 = {};
        var18 = 'String Select';
        var15.title = var18;
        var18 = 8;
        var19 = var11[var18];
        var19 = var9.bind(var3)(var19);
        var19 = var19.ComponentType;
        var19 = var19.STRING_SELECT;
        var15.type = var19;
        var15 = var16.bind(var3)(var17, var15);
        var14[1] = var15;
        var16 = _closure1_slot7;
        var15 = {};
        var19 = 'User Select';
        var15.title = var19;
        var19 = var11[var18];
        var19 = var9.bind(var3)(var19);
        var19 = var19.ComponentType;
        var19 = var19.USER_SELECT;
        var15.type = var19;
        var15 = var16.bind(var3)(var17, var15);
        var14[2] = var15;
        var16 = _closure1_slot7;
        var15 = {};
        var19 = 'Role Select';
        var15.title = var19;
        var19 = var11[var18];
        var19 = var9.bind(var3)(var19);
        var19 = var19.ComponentType;
        var19 = var19.ROLE_SELECT;
        var15.type = var19;
        var15 = var16.bind(var3)(var17, var15);
        var14[3] = var15;
        var16 = _closure1_slot7;
        var15 = {};
        var19 = 'Mentionable Select';
        var15.title = var19;
        var19 = var11[var18];
        var19 = var9.bind(var3)(var19);
        var19 = var19.ComponentType;
        var19 = var19.MENTIONABLE_SELECT;
        var15.type = var19;
        var15 = var16.bind(var3)(var17, var15);
        var14[4] = var15;
        var16 = _closure1_slot7;
        var15 = {};
        var19 = 'Channel Select';
        var15.title = var19;
        var18 = var11[var18];
        var18 = var9.bind(var3)(var18);
        var18 = var18.ComponentType;
        var18 = var18.CHANNEL_SELECT;
        var15.type = var18;
        var15 = var16.bind(var3)(var17, var15);
        var14[5] = var15;
        var10.children = var14;
        var10 = var13.bind(var3)(var12, var10);
        var7[1] = var10;
        var10 = _closure1_slot7;
        var8 = 14;
        var8 = var11[var8];
        var8 = var9.bind(var3)(var8);
        var9 = var8.Button;
        var8 = {};
        var11 = function() {
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 17;
            var1 = var1[var0];
            var0 = undefined;
            var2 = var2.bind(var0)(var1);
            var1 = var2.dispatch;
            var0 = {
                'type': 'CLEAR_INTERACTION_MODAL_STATE',
                'customId': 'modal'
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var8.onPress = var11;
        var11 = 'Reset Modal State';
        var8.text = var11;
        var8 = var10.bind(var3)(var9, var8);
        var7[2] = var8;
        var4.children = var7;
        var4 = var6.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 1661, 33, 1297, 671, 3935, 1636, 6786, 4865, 3902, 11186, 11189, 4045, 4041, 11190, 806, 2]);