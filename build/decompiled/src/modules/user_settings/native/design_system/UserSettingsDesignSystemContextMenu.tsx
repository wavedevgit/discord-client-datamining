// modules/user_settings/native/design_system/UserSettingsDesignSystemContextMenu.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function(arg0) { // Original name: contextMenuItems, environment: var1
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
            _fun88204: for (var _fun88204_ip = 0;;) switch (_fun88204_ip) {
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
                        _fun88204_ip = 82;
                        continue _fun88204
                    }
                case 76:
                    var1 = 'destructive';
                case 82:
                    var0.variant = var1;
                    var1 = function() { // Original name: action, environment: var1
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
    var _closure1_slot10 = var0;
    var0 = function(arg0) { // Original name: DemoContextMenu, environment: var1
        _fun88206: for (var _fun88206_ip = 0;;) switch (_fun88206_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.label;
                var _closure2_slot0 = var0;
                var8 = var1.align;
                var10 = var1.triggerOnLongPress;
                var3 = undefined;
                if (!(var10 === var3)) {
                    _fun88206_ip = 34;
                    continue _fun88206
                }
            case 32:
                var10 = false;
            case 34:
                var9 = var1.count;
                if (!(var9 === var3)) {
                    _fun88206_ip = 47;
                    continue _fun88206
                }
            case 44:
                var9 = 3;
            case 47:
                var _closure2_slot1 = var9;
                var0 = var1.sections;
                if (!(var0 === var3)) {
                    _fun88206_ip = 64;
                    continue _fun88206
                }
            case 61:
                var0 = 1;
            case 64:
                var _closure2_slot2 = var0;
                var6 = var1.alignButton;
                if (!(var6 === var3)) {
                    _fun88206_ip = 84;
                    continue _fun88206
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
                    _fun88207: for (var _fun88207_ip = 0;;) switch (_fun88207_ip) {
                        case 0:
                            var1 = _closure2_slot2;
                            var0 = 1;
                            if (!(!(var1 > var0))) {
                                _fun88207_ip = 34;
                                continue _fun88207
                            }
                        case 14:
                            var2 = _closure1_slot10;
                            var1 = _closure2_slot1;
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                            _fun88207_ip = 81;
                            continue _fun88207;
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
                                var2 = _closure1_slot10;
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
                var7 = function(arg0) { // Original name: children, environment: var7
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
    var _closure1_slot11 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
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
    var6 = var10.bind(var0)(var3);
    var3 = new Array(8);
    var3[0] = var6;
    var6 = 4;
    var6 = var5[var6];
    var6 = var10.bind(var0)(var6);
    var3[1] = var6;
    var6 = 5;
    var6 = var5[var6];
    var6 = var10.bind(var0)(var6);
    var3[2] = var6;
    var6 = 6;
    var6 = var5[var6];
    var6 = var10.bind(var0)(var6);
    var3[3] = var6;
    var6 = 7;
    var6 = var5[var6];
    var6 = var10.bind(var0)(var6);
    var3[4] = var6;
    var6 = 8;
    var6 = var5[var6];
    var6 = var10.bind(var0)(var6);
    var3[5] = var6;
    var6 = 9;
    var6 = var5[var6];
    var6 = var10.bind(var0)(var6);
    var3[6] = var6;
    var6 = 10;
    var6 = var5[var6];
    var6 = var10.bind(var0)(var6);
    var3[7] = var6;
    var _closure1_slot7 = var3;
    var3 = ['Launch Probe!', 'Activate Laser', 'Teleport Widget', 'Engage Hyperdrive', 'Deploy Robots', 'Initiate Time Warp', 'Beam Up Snacks', 'Hack Database', 'Trigger Cosmic Boom', 'Unleash Space Vortex', 'Activate Cloaking Device'];
    var _closure1_slot8 = var3;
    var3 = 11;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var9 = 12;
    var8 = {
        'flexDirection': 'column',
        'gap': 12,
        'padding': 16
    };
    var3.container = var8;
    var8 = {};
    var8.gap = var9;
    var3.card = var8;
    var8 = {
        'height': 1,
        'backgroundColor': null,
        'marginVertical': 12
    };
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.BORDER_SUBTLE;
    var8.backgroundColor = var9;
    var3.divider = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot9 = var3;
    var3 = 18;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/native/design_system/UserSettingsDesignSystemContextMenu.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() { // Original name: UserSettingsDesignSystemAlertModal, environment: var1
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
        var14 = _closure1_slot0;
        var16 = _closure1_slot1;
        var8 = 16;
        var7 = var16[var8];
        var7 = var14.bind(var3)(var7);
        var9 = var7.Card;
        var7 = {};
        var12 = var10.card;
        var7.style = var12;
        var17 = _closure1_slot5;
        var12 = 17;
        var13 = var16[var12];
        var13 = var14.bind(var3)(var13);
        var15 = var13.Text;
        var13 = {
            'variant': 'text-lg/bold',
            'children': 'Basic Example'
        };
        var13 = var17.bind(var3)(var15, var13);
        var15 = new Array(3);
        var15[0] = var13;
        var18 = _closure1_slot5;
        var13 = var16[var12];
        var13 = var14.bind(var3)(var13);
        var17 = var13.Text;
        var13 = {
            'variant': 'text-md/medium',
            'color': 'text-subtle',
            'children': 'You press the button to open the menu and then select an action, or tap and pan down in a single gesture.'
        };
        var13 = var18.bind(var3)(var17, var13);
        var15[1] = var13;
        var18 = _closure1_slot5;
        var13 = _closure1_slot11;
        var17 = {};
        var19 = 'Open Menu';
        var17.label = var19;
        var17 = var18.bind(var3)(var13, var17);
        var15[2] = var17;
        var7.children = var15;
        var9 = var6.bind(var3)(var9, var7);
        var7 = new Array(6);
        var7[0] = var9;
        var9 = var16[var8];
        var9 = var14.bind(var3)(var9);
        var15 = var9.Card;
        var9 = {};
        var17 = var10.card;
        var9.style = var17;
        var19 = _closure1_slot5;
        var17 = var16[var12];
        var17 = var14.bind(var3)(var17);
        var18 = var17.Text;
        var17 = {
            'variant': 'text-lg/bold',
            'children': 'Long Press'
        };
        var18 = var19.bind(var3)(var18, var17);
        var17 = new Array(3);
        var17[0] = var18;
        var20 = _closure1_slot5;
        var18 = var16[var12];
        var18 = var14.bind(var3)(var18);
        var19 = var18.Text;
        var18 = {
            'variant': 'text-md/medium',
            'color': 'text-subtle',
            'children': 'You can also have the menu open on long press instead.'
        };
        var18 = var20.bind(var3)(var19, var18);
        var17[1] = var18;
        var19 = _closure1_slot5;
        var18 = {
            'triggerOnLongPress': true,
            'label': 'Long Press to Open'
        };
        var18 = var19.bind(var3)(var13, var18);
        var17[2] = var18;
        var9.children = var17;
        var9 = var6.bind(var3)(var15, var9);
        var7[1] = var9;
        var9 = var16[var8];
        var9 = var14.bind(var3)(var9);
        var15 = var9.Card;
        var9 = {};
        var17 = var10.card;
        var9.style = var17;
        var19 = _closure1_slot5;
        var17 = var16[var12];
        var17 = var14.bind(var3)(var17);
        var18 = var17.Text;
        var17 = {
            'variant': 'text-lg/bold',
            'children': 'Sections'
        };
        var18 = var19.bind(var3)(var18, var17);
        var17 = new Array(3);
        var17[0] = var18;
        var20 = _closure1_slot5;
        var18 = var16[var12];
        var18 = var14.bind(var3)(var18);
        var19 = var18.Text;
        var18 = {
            'variant': 'text-md/medium',
            'color': 'text-subtle',
            'children': 'You can pass an array of arrays of items to create sections in the menu.'
        };
        var18 = var20.bind(var3)(var19, var18);
        var17[1] = var18;
        var19 = _closure1_slot5;
        var18 = {
            'label': 'Open Sectioned Menu',
            'sections': 3,
            'count': 2
        };
        var18 = var19.bind(var3)(var13, var18);
        var17[2] = var18;
        var9.children = var17;
        var9 = var6.bind(var3)(var15, var9);
        var7[2] = var9;
        var9 = var16[var8];
        var9 = var14.bind(var3)(var9);
        var15 = var9.Card;
        var9 = {};
        var17 = var10.card;
        var9.style = var17;
        var19 = _closure1_slot5;
        var17 = var16[var12];
        var17 = var14.bind(var3)(var17);
        var18 = var17.Text;
        var17 = {
            'variant': 'text-lg/bold',
            'children': 'Automatic Alignment'
        };
        var18 = var19.bind(var3)(var18, var17);
        var17 = new Array(6);
        var17[0] = var18;
        var20 = _closure1_slot5;
        var18 = var16[var12];
        var18 = var14.bind(var3)(var18);
        var19 = var18.Text;
        var18 = {
            'variant': 'text-md/medium',
            'color': 'text-subtle',
            'children': "The menu will automatically align itself so that it doesn't overflow offscreen horizontally."
        };
        var18 = var20.bind(var3)(var19, var18);
        var17[1] = var18;
        var19 = _closure1_slot5;
        var18 = {
            'alignButton': 'flex-end',
            'label': 'Open Right-Aligned Menu'
        };
        var18 = var19.bind(var3)(var13, var18);
        var17[2] = var18;
        var20 = _closure1_slot5;
        var19 = _closure1_slot3;
        var18 = {};
        var21 = var10.divider;
        var18.style = var21;
        var18 = var20.bind(var3)(var19, var18);
        var17[3] = var18;
        var20 = _closure1_slot5;
        var18 = var16[var12];
        var18 = var14.bind(var3)(var18);
        var19 = var18.Text;
        var18 = {
            'variant': 'text-md/medium',
            'color': 'text-subtle',
            'children': "It will also position itself vertically, so that it doesn't overflow offscreen vertically."
        };
        var18 = var20.bind(var3)(var19, var18);
        var17[4] = var18;
        var19 = _closure1_slot5;
        var18 = {
            'count': 8,
            'label': 'Open Tall Menu'
        };
        var18 = var19.bind(var3)(var13, var18);
        var17[5] = var18;
        var9.children = var17;
        var9 = var6.bind(var3)(var15, var9);
        var7[3] = var9;
        var9 = var16[var8];
        var9 = var14.bind(var3)(var9);
        var15 = var9.Card;
        var9 = {};
        var17 = var10.card;
        var9.style = var17;
        var19 = _closure1_slot5;
        var17 = var16[var12];
        var17 = var14.bind(var3)(var17);
        var18 = var17.Text;
        var17 = {
            'variant': 'text-lg/bold',
            'children': 'Intentional Alignment'
        };
        var18 = var19.bind(var3)(var18, var17);
        var17 = new Array(11);
        var17[0] = var18;
        var20 = _closure1_slot5;
        var18 = var16[var12];
        var18 = var14.bind(var3)(var18);
        var19 = var18.Text;
        var18 = {
            'variant': 'text-md/medium',
            'color': 'text-subtle',
            'children': 'Menus can take an align prop to intentionally align the menu, instead of using the automatic menu positioning.'
        };
        var18 = var20.bind(var3)(var19, var18);
        var17[1] = var18;
        var20 = _closure1_slot5;
        var18 = var16[var12];
        var18 = var14.bind(var3)(var18);
        var19 = var18.Text;
        var18 = {
            'variant': 'text-md/medium',
            'color': 'text-subtle',
            'children': 'The align prop can be set to above, below, left, or right of the menu trigger. How the menu positions relative to the start or end of the trigger is then automatically determined based on the available space.'
        };
        var18 = var20.bind(var3)(var19, var18);
        var17[2] = var18;
        var20 = _closure1_slot5;
        var19 = _closure1_slot3;
        var18 = {};
        var21 = var10.divider;
        var18.style = var21;
        var18 = var20.bind(var3)(var19, var18);
        var17[3] = var18;
        var19 = _closure1_slot5;
        var18 = {
            'count': 3,
            'align': 'right',
            'label': 'Open Right'
        };
        var18 = var19.bind(var3)(var13, var18);
        var17[4] = var18;
        var20 = _closure1_slot5;
        var19 = _closure1_slot3;
        var18 = {};
        var21 = var10.divider;
        var18.style = var21;
        var18 = var20.bind(var3)(var19, var18);
        var17[5] = var18;
        var19 = _closure1_slot5;
        var18 = {
            'count': 3,
            'alignButton': 'flex-end',
            'align': 'left',
            'label': 'Open Left'
        };
        var18 = var19.bind(var3)(var13, var18);
        var17[6] = var18;
        var20 = _closure1_slot5;
        var19 = _closure1_slot3;
        var18 = {};
        var21 = var10.divider;
        var18.style = var21;
        var18 = var20.bind(var3)(var19, var18);
        var17[7] = var18;
        var19 = _closure1_slot5;
        var18 = {
            'count': 3,
            'align': 'below',
            'label': 'Always Open Below'
        };
        var18 = var19.bind(var3)(var13, var18);
        var17[8] = var18;
        var20 = _closure1_slot5;
        var19 = _closure1_slot3;
        var18 = {};
        var21 = var10.divider;
        var18.style = var21;
        var18 = var20.bind(var3)(var19, var18);
        var17[9] = var18;
        var19 = _closure1_slot5;
        var18 = {
            'count': 3,
            'alignButton': 'flex-end',
            'align': 'above',
            'label': 'Always Open Above'
        };
        var18 = var19.bind(var3)(var13, var18);
        var17[10] = var18;
        var9.children = var17;
        var9 = var6.bind(var3)(var15, var9);
        var7[4] = var9;
        var8 = var16[var8];
        var8 = var14.bind(var3)(var8);
        var9 = var8.Card;
        var8 = {};
        var10 = var10.card;
        var8.style = var10;
        var17 = _closure1_slot5;
        var10 = var16[var12];
        var10 = var14.bind(var3)(var10);
        var15 = var10.Text;
        var10 = {
            'variant': 'text-lg/bold',
            'children': 'Overflow Scrolling'
        };
        var15 = var17.bind(var3)(var15, var10);
        var10 = new Array(3);
        var10[0] = var15;
        var15 = _closure1_slot5;
        var12 = var16[var12];
        var12 = var14.bind(var3)(var12);
        var14 = var12.Text;
        var12 = {
            'variant': 'text-md/medium',
            'color': 'text-subtle',
            'children': 'Menus should not typically have enough items to require scrolling, but with font scaling and smaller devices its possible. In this case, the menu will allow the user to scroll.'
        };
        var12 = var15.bind(var3)(var14, var12);
        var10[1] = var12;
        var12 = _closure1_slot5;
        var11 = {
            'count': 30,
            'label': 'Open Really Tall Menu'
        };
        var11 = var12.bind(var3)(var13, var11);
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 11369, 7553, 6638, 9171, 3234, 11370, 11371, 7422, 1297, 671, 22, 8888, 4037, 4856, 3895, 2]);