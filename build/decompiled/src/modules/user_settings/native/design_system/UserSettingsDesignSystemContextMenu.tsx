// modules/user_settings/native/design_system/UserSettingsDesignSystemContextMenu.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var13 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function arg0() {
        var4 = arg0;
        var _closure2_slot0 = var4;
        var5 = _closure1_slot0;
        var6 = _closure1_slot1;
        var2 = 13;
        var7 = var6[var2];
        var3 = undefined;
        var9 = var5.bind(var3)(var7);
        var8 = var9.shuffle;
        var7 = _closure1_slot8;
        var7 = var8.bind(var9)(var7);
        var _closure2_slot1 = var7;
        var2 = var6[var2];
        var3 = var5.bind(var3)(var2);
        var2 = var3.shuffle;
        var1 = _closure1_slot7;
        var1 = var2.bind(var3)(var1);
        var _closure2_slot2 = var1;
        var1 = global;
        var3 = var1.Array;
        var2 = var3.from;
        var1 = {};
        var1.length = var4;
        var2 = var2.bind(var3)(var1);
        var1 = var2.map;
        var0 = function(arg0, arg1) { // Environment: var0
            _fun87132: for (var _fun87132_ip = 0;;) switch (_fun87132_ip) {
                case 0:
                    var3 = arg1;
                    var0 = {};
                    var4 = _closure2_slot1;
                    var2 = var4.length;
                    var2 = var3 % var2;
                    var2 = var4[var2];
                    var0.label = var2;
                    var2 = undefined;
                    var0.IconComponent = var2;
                    var4 = _closure2_slot2;
                    var2 = var4.length;
                    var2 = var3 % var2;
                    var2 = var4[var2];
                    var0.iconSource = var2;
                    var2 = _closure2_slot0;
                    var1 = 1;
                    var2 = var2 - var1;
                    var1 = 'default';
                    if (!(var3 === var2)) {
                        _fun87132_ip = 82;
                        continue _fun87132
                    }
                case 76:
                    var1 = 'destructive';
                case 82:
                    var0.variant = var1;
                    var1 = function() {
                        var0 = undefined;
                        return var0;
                    };
                    var0.action = var1;
                    return var0;
            }
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot34 = var0;
    var7 = function arg0() {
        _fun87134: for (var _fun87134_ip = 0;;) switch (_fun87134_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.label;
                var _closure2_slot0 = var0;
                var8 = var1.align;
                var10 = var1.triggerOnLongPress;
                var3 = undefined;
                if (!(var10 === var3)) {
                    _fun87134_ip = 34;
                    continue _fun87134
                }
            case 32:
                var10 = false;
            case 34:
                var9 = var1.count;
                if (!(var9 === var3)) {
                    _fun87134_ip = 47;
                    continue _fun87134
                }
            case 44:
                var9 = 3;
            case 47:
                var _closure2_slot1 = var9;
                var0 = var1.sections;
                if (!(var0 === var3)) {
                    _fun87134_ip = 64;
                    continue _fun87134
                }
            case 61:
                var0 = 1;
            case 64:
                var _closure2_slot2 = var0;
                var6 = var1.alignButton;
                if (!(var6 === var3)) {
                    _fun87134_ip = 84;
                    continue _fun87134
                }
            case 78:
                var6 = 'flex-start';
            case 84:
                var5 = _closure1_slot2;
                var2 = var5.useMemo;
                var1 = new Array(2);
                var1[0] = var9;
                var1[1] = var0;
                var0 = function() { // Environment: var7
                    _fun87135: for (var _fun87135_ip = 0;;) switch (_fun87135_ip) {
                        case 0:
                            var1 = _closure2_slot2;
                            var0 = 1;
                            if (!(!(var1 > var0))) {
                                _fun87135_ip = 34;
                                continue _fun87135
                            }
                        case 14:
                            var2 = _closure1_slot34;
                            var1 = _closure2_slot1;
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                            _fun87135_ip = 81;
                            continue _fun87135;
                        case 34:
                            var1 = global;
                            var3 = var1.Array;
                            var2 = var3.from;
                            var1 = {};
                            var4 = _closure2_slot2;
                            var1.length = var4;
                            var3 = var2.bind(var3)(var1);
                            var2 = var3.map;
                            var1 = function() { // Environment: var1
                                var2 = _closure1_slot34;
                                var1 = _closure2_slot1;
                                var0 = undefined;
                                var0 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var0 = var2.bind(var3)(var1);
                        case 81:
                            return var0;
                    }
                };
                var9 = var2.bind(var5)(var0, var1);
                var2 = _closure1_slot5;
                var1 = _closure1_slot3;
                var0 = {};
                var5 = {};
                var5.alignSelf = var6;
                var0.style = var5;
                var6 = _closure1_slot5;
                var5 = _closure1_slot0;
                var11 = _closure1_slot1;
                var4 = 14;
                var4 = var11[var4];
                var4 = var5.bind(var3)(var4);
                var5 = var4.ContextMenu;
                var4 = {};
                var4.triggerOnLongPress = var10;
                var4.items = var9;
                var4.align = var8;
                var8 = 'Sample title';
                var4.title = var8;
                var7 = function arg0() {
                    var2 = arg0;
                    var5 = var2.ref;
                    var0 = null;
                    var1 = Object.create(var0);
                    var0 = 0;
                    var1.ref = var0;
                    var8 = {};
                    var7 = var2;
                    var6 = var1;
                    var7 = copyDataProperties(var8, var7, var6);
                    var3 = _closure1_slot5;
                    var1 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var0 = 15;
                    var0 = var2[var0];
                    var2 = undefined;
                    var0 = var1.bind(var2)(var0);
                    var1 = var0.Button;
                    var0 = {};
                    var0.ref = var5;
                    var8 = var0;
                    var4 = copyDataProperties(var8, var7);
                    var5 = _closure2_slot0;
                    var4 = 'text';
                    var0[var4] = var5;
                    var5 = 'primary';
                    var4 = 'variant';
                    var0[var4] = var5;
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                };
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var0 = global;
    var8 = var0.Object;
    var6 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var8)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = arg3;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.View;
    var _closure1_slot3 = var6;
    var3 = var3.ScrollView;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot5 = var6;
    var3 = var3.jsxs;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var8 = var13.bind(var0)(var3);
    var3 = new Array(8);
    var3[0] = var8;
    var8 = 4;
    var8 = var5[var8];
    var8 = var13.bind(var0)(var8);
    var3[1] = var8;
    var8 = 5;
    var8 = var5[var8];
    var8 = var13.bind(var0)(var8);
    var3[2] = var8;
    var8 = 6;
    var8 = var5[var8];
    var8 = var13.bind(var0)(var8);
    var3[3] = var8;
    var8 = 7;
    var8 = var5[var8];
    var8 = var13.bind(var0)(var8);
    var3[4] = var8;
    var8 = 8;
    var8 = var5[var8];
    var8 = var13.bind(var0)(var8);
    var3[5] = var8;
    var8 = 9;
    var8 = var5[var8];
    var8 = var13.bind(var0)(var8);
    var3[6] = var8;
    var8 = 10;
    var8 = var5[var8];
    var8 = var13.bind(var0)(var8);
    var3[7] = var8;
    var _closure1_slot7 = var3;
    var3 = ['Launch Probe!', 'Activate Laser', 'Teleport Widget', 'Engage Hyperdrive', 'Deploy Robots', 'Initiate Time Warp', 'Beam Up Snacks', 'Hack Database', 'Trigger Cosmic Boom', 'Unleash Space Vortex', 'Activate Cloaking Device'];
    var _closure1_slot8 = var3;
    var3 = 11;
    var3 = var5[var3];
    var10 = var4.bind(var0)(var3);
    var9 = var10.createStyles;
    var8 = {};
    var12 = 12;
    var3 = 16;
    var11 = {
        'flexDirection': 'column',
        'gap': 12,
        'padding': 16
    };
    var8.container = var11;
    var11 = {};
    var11.gap = var12;
    var8.card = var11;
    var11 = {
        'height': 1,
        'backgroundColor': null,
        'marginVertical': 12
    };
    var12 = var5[var12];
    var12 = var13.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BORDER_SUBTLE;
    var11.backgroundColor = var12;
    var8.divider = var11;
    var8 = var9.bind(var10)(var8);
    var _closure1_slot9 = var8;
    var8 = var5[var3];
    var8 = var4.bind(var0)(var8);
    var9 = var8.Text;
    var8 = {
        'variant': 'text-lg/bold',
        'children': 'Basic Example'
    };
    var8 = var6.bind(var0)(var9, var8);
    var _closure1_slot10 = var8;
    var8 = var5[var3];
    var8 = var4.bind(var0)(var8);
    var9 = var8.Text;
    var8 = {
        'variant': 'text-md/medium',
        'color': 'text-subtle',
        'children': 'You press the button to open the menu and then select an action, or tap and pan down in a single gesture.'
    };
    var8 = var6.bind(var0)(var9, var8);
    var _closure1_slot11 = var8;
    var8 = {};
    var9 = 'Open Menu';
    var8.label = var9;
    var8 = var6.bind(var0)(var7, var8);
    var _closure1_slot12 = var8;
    var8 = var5[var3];
    var8 = var4.bind(var0)(var8);
    var9 = var8.Text;
    var8 = {
        'variant': 'text-lg/bold',
        'children': 'Long Press'
    };
    var8 = var6.bind(var0)(var9, var8);
    var _closure1_slot13 = var8;
    var8 = var5[var3];
    var8 = var4.bind(var0)(var8);
    var9 = var8.Text;
    var8 = {
        'variant': 'text-md/medium',
        'color': 'text-subtle',
        'children': 'You can also have the menu open on long press instead.'
    };
    var8 = var6.bind(var0)(var9, var8);
    var _closure1_slot14 = var8;
    var8 = {
        'triggerOnLongPress': true,
        'label': 'Long Press to Open'
    };
    var8 = var6.bind(var0)(var7, var8);
    var _closure1_slot15 = var8;
    var8 = var5[var3];
    var8 = var4.bind(var0)(var8);
    var9 = var8.Text;
    var8 = {
        'variant': 'text-lg/bold',
        'children': 'Sections'
    };
    var8 = var6.bind(var0)(var9, var8);
    var _closure1_slot16 = var8;
    var8 = var5[var3];
    var8 = var4.bind(var0)(var8);
    var9 = var8.Text;
    var8 = {
        'variant': 'text-md/medium',
        'color': 'text-subtle',
        'children': 'You can pass an array of arrays of items to create sections in the menu.'
    };
    var8 = var6.bind(var0)(var9, var8);
    var _closure1_slot17 = var8;
    var8 = {
        'label': 'Open Sectioned Menu',
        'sections': 3,
        'count': 2
    };
    var8 = var6.bind(var0)(var7, var8);
    var _closure1_slot18 = var8;
    var8 = var5[var3];
    var8 = var4.bind(var0)(var8);
    var9 = var8.Text;
    var8 = {
        'variant': 'text-lg/bold',
        'children': 'Automatic Alignment'
    };
    var8 = var6.bind(var0)(var9, var8);
    var _closure1_slot19 = var8;
    var8 = var5[var3];
    var8 = var4.bind(var0)(var8);
    var9 = var8.Text;
    var8 = {
        'variant': 'text-md/medium',
        'color': 'text-subtle',
        'children': "The menu will automatically align itself so that it doesn't overflow offscreen horizontally."
    };
    var8 = var6.bind(var0)(var9, var8);
    var _closure1_slot20 = var8;
    var8 = {
        'alignButton': 'flex-end',
        'label': 'Open Right-Aligned Menu'
    };
    var8 = var6.bind(var0)(var7, var8);
    var _closure1_slot21 = var8;
    var8 = var5[var3];
    var8 = var4.bind(var0)(var8);
    var9 = var8.Text;
    var8 = {
        'variant': 'text-md/medium',
        'color': 'text-subtle',
        'children': "It will also position itself vertically, so that it doesn't overflow offscreen vertically."
    };
    var8 = var6.bind(var0)(var9, var8);
    var _closure1_slot22 = var8;
    var8 = {
        'count': 8,
        'label': 'Open Tall Menu'
    };
    var8 = var6.bind(var0)(var7, var8);
    var _closure1_slot23 = var8;
    var8 = var5[var3];
    var8 = var4.bind(var0)(var8);
    var9 = var8.Text;
    var8 = {
        'variant': 'text-lg/bold',
        'children': 'Intentional Alignment'
    };
    var8 = var6.bind(var0)(var9, var8);
    var _closure1_slot24 = var8;
    var8 = var5[var3];
    var8 = var4.bind(var0)(var8);
    var9 = var8.Text;
    var8 = {
        'variant': 'text-md/medium',
        'color': 'text-subtle',
        'children': 'Menus can take an align prop to intentionally align the menu, instead of using the automatic menu positioning.'
    };
    var8 = var6.bind(var0)(var9, var8);
    var _closure1_slot25 = var8;
    var8 = var5[var3];
    var8 = var4.bind(var0)(var8);
    var9 = var8.Text;
    var8 = {
        'variant': 'text-md/medium',
        'color': 'text-subtle',
        'children': 'The align prop can be set to above, below, left, or right of the menu trigger. How the menu positions relative to the start or end of the trigger is then automatically determined based on the available space.'
    };
    var8 = var6.bind(var0)(var9, var8);
    var _closure1_slot26 = var8;
    var8 = {
        'count': 3,
        'align': 'right',
        'label': 'Open Right'
    };
    var8 = var6.bind(var0)(var7, var8);
    var _closure1_slot27 = var8;
    var8 = {
        'count': 3,
        'alignButton': 'flex-end',
        'align': 'left',
        'label': 'Open Left'
    };
    var8 = var6.bind(var0)(var7, var8);
    var _closure1_slot28 = var8;
    var8 = {
        'count': 3,
        'align': 'below',
        'label': 'Always Open Below'
    };
    var8 = var6.bind(var0)(var7, var8);
    var _closure1_slot29 = var8;
    var8 = {
        'count': 3,
        'alignButton': 'flex-end',
        'align': 'above',
        'label': 'Always Open Above'
    };
    var8 = var6.bind(var0)(var7, var8);
    var _closure1_slot30 = var8;
    var8 = var5[var3];
    var8 = var4.bind(var0)(var8);
    var9 = var8.Text;
    var8 = {
        'variant': 'text-lg/bold',
        'children': 'Overflow Scrolling'
    };
    var8 = var6.bind(var0)(var9, var8);
    var _closure1_slot31 = var8;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var8 = var3.Text;
    var3 = {
        'variant': 'text-md/medium',
        'color': 'text-subtle',
        'children': 'Menus should not typically have enough items to require scrolling, but with font scaling and smaller devices its possible. In this case, the menu will allow the user to scroll.'
    };
    var3 = var6.bind(var0)(var8, var3);
    var _closure1_slot32 = var3;
    var3 = {
        'count': 30,
        'label': 'Open Really Tall Menu'
    };
    var3 = var6.bind(var0)(var7, var3);
    var _closure1_slot33 = var3;
    var3 = 18;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/native/design_system/UserSettingsDesignSystemContextMenu.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        var0 = _closure1_slot9;
        var3 = undefined;
        var10 = var0.bind(var3)();
        var2 = _closure1_slot5;
        var1 = _closure1_slot4;
        var0 = {};
        var6 = _closure1_slot6;
        var5 = _closure1_slot3;
        var4 = {};
        var7 = var10.container;
        var4.style = var7;
        var9 = _closure1_slot0;
        var12 = _closure1_slot1;
        var8 = 17;
        var7 = var12[var8];
        var7 = var9.bind(var3)(var7);
        var13 = var7.Card;
        var7 = {};
        var14 = var10.card;
        var7.style = var14;
        var15 = _closure1_slot10;
        var14 = new Array(3);
        var14[0] = var15;
        var15 = _closure1_slot11;
        var14[1] = var15;
        var15 = _closure1_slot12;
        var14[2] = var15;
        var7.children = var14;
        var13 = var6.bind(var3)(var13, var7);
        var7 = new Array(6);
        var7[0] = var13;
        var13 = var12[var8];
        var13 = var9.bind(var3)(var13);
        var14 = var13.Card;
        var13 = {};
        var15 = var10.card;
        var13.style = var15;
        var16 = _closure1_slot13;
        var15 = new Array(3);
        var15[0] = var16;
        var16 = _closure1_slot14;
        var15[1] = var16;
        var16 = _closure1_slot15;
        var15[2] = var16;
        var13.children = var15;
        var13 = var6.bind(var3)(var14, var13);
        var7[1] = var13;
        var13 = var12[var8];
        var13 = var9.bind(var3)(var13);
        var14 = var13.Card;
        var13 = {};
        var15 = var10.card;
        var13.style = var15;
        var16 = _closure1_slot16;
        var15 = new Array(3);
        var15[0] = var16;
        var16 = _closure1_slot17;
        var15[1] = var16;
        var16 = _closure1_slot18;
        var15[2] = var16;
        var13.children = var15;
        var13 = var6.bind(var3)(var14, var13);
        var7[2] = var13;
        var13 = var12[var8];
        var13 = var9.bind(var3)(var13);
        var14 = var13.Card;
        var13 = {};
        var15 = var10.card;
        var13.style = var15;
        var16 = _closure1_slot19;
        var15 = new Array(6);
        var15[0] = var16;
        var16 = _closure1_slot20;
        var15[1] = var16;
        var16 = _closure1_slot21;
        var15[2] = var16;
        var18 = _closure1_slot5;
        var17 = _closure1_slot3;
        var16 = {};
        var19 = var10.divider;
        var16.style = var19;
        var16 = var18.bind(var3)(var17, var16);
        var15[3] = var16;
        var16 = _closure1_slot22;
        var15[4] = var16;
        var16 = _closure1_slot23;
        var15[5] = var16;
        var13.children = var15;
        var13 = var6.bind(var3)(var14, var13);
        var7[3] = var13;
        var13 = var12[var8];
        var13 = var9.bind(var3)(var13);
        var14 = var13.Card;
        var13 = {};
        var15 = var10.card;
        var13.style = var15;
        var16 = _closure1_slot24;
        var15 = new Array(11);
        var15[0] = var16;
        var16 = _closure1_slot25;
        var15[1] = var16;
        var16 = _closure1_slot26;
        var15[2] = var16;
        var18 = _closure1_slot5;
        var17 = _closure1_slot3;
        var16 = {};
        var19 = var10.divider;
        var16.style = var19;
        var16 = var18.bind(var3)(var17, var16);
        var15[3] = var16;
        var16 = _closure1_slot27;
        var15[4] = var16;
        var18 = _closure1_slot5;
        var17 = _closure1_slot3;
        var16 = {};
        var19 = var10.divider;
        var16.style = var19;
        var16 = var18.bind(var3)(var17, var16);
        var15[5] = var16;
        var16 = _closure1_slot28;
        var15[6] = var16;
        var18 = _closure1_slot5;
        var17 = _closure1_slot3;
        var16 = {};
        var19 = var10.divider;
        var16.style = var19;
        var16 = var18.bind(var3)(var17, var16);
        var15[7] = var16;
        var16 = _closure1_slot29;
        var15[8] = var16;
        var18 = _closure1_slot5;
        var17 = _closure1_slot3;
        var16 = {};
        var19 = var10.divider;
        var16.style = var19;
        var16 = var18.bind(var3)(var17, var16);
        var15[9] = var16;
        var16 = _closure1_slot30;
        var15[10] = var16;
        var13.children = var15;
        var13 = var6.bind(var3)(var14, var13);
        var7[4] = var13;
        var8 = var12[var8];
        var8 = var9.bind(var3)(var8);
        var9 = var8.Card;
        var8 = {};
        var10 = var10.card;
        var8.style = var10;
        var12 = _closure1_slot31;
        var10 = new Array(3);
        var10[0] = var12;
        var12 = _closure1_slot32;
        var10[1] = var12;
        var11 = _closure1_slot33;
        var10[2] = var11;
        var8.children = var10;
        var8 = var6.bind(var3)(var9, var8);
        var7[5] = var8;
        var4.children = var7;
        var4 = var6.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 11218, 7777, 6774, 9450, 3276, 11219, 11220, 7792, 1297, 671, 22, 8799, 4090, 3938, 4878, 2]);