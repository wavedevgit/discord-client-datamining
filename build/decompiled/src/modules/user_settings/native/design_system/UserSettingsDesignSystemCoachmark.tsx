// modules/user_settings/native/design_system/UserSettingsDesignSystemCoachmark.tsx
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
        _fun88336: for (var _fun88336_ip = 0;;) switch (_fun88336_ip) {
            case 0:
                var0 = _closure1_slot10;
                var3 = undefined;
                var23 = var0.bind(var3)();
                var2 = _closure1_slot4;
                var1 = var2.useState;
                var0 = true;
                var1 = var1.bind(var2)(var0);
                var0 = _closure1_slot3;
                var6 = 2;
                var1 = var0.bind(var3)(var1, var6);
                var4 = 0;
                var0 = var1[var4];
                var _closure2_slot0 = var0;
                var2 = 1;
                var1 = var1[var2];
                var _closure2_slot1 = var1;
                var5 = _closure1_slot4;
                var1 = var5.useState;
                var9 = false;
                var5 = var1.bind(var5)(var9);
                var1 = _closure1_slot3;
                var1 = var1.bind(var3)(var5, var6);
                var16 = var1[var4];
                var _closure2_slot2 = var16;
                var15 = var1[var2];
                var5 = _closure1_slot4;
                var1 = var5.useState;
                var5 = var1.bind(var5)(var9);
                var1 = _closure1_slot3;
                var1 = var1.bind(var3)(var5, var6);
                var25 = var1[var4];
                var _closure2_slot3 = var25;
                var24 = var1[var2];
                var5 = _closure1_slot0;
                var1 = _closure1_slot2;
                var8 = 5;
                var1 = var1[var8];
                var5 = var5.bind(var3)(var1);
                var1 = var5.useCanRotate;
                var5 = var1.bind(var5)();
                var1 = _closure1_slot3;
                var1 = var1.bind(var3)(var5, var6);
                var13 = var1[var4];
                var12 = var1[var2];
                var5 = _closure1_slot4;
                var1 = var5.useState;
                var5 = var1.bind(var5)(var9);
                var1 = _closure1_slot3;
                var1 = var1.bind(var3)(var5, var6);
                var17 = var1[var4];
                var _closure2_slot4 = var17;
                var11 = var1[var2];
                var5 = _closure1_slot4;
                var1 = var5.useState;
                var20 = 'secondary';
                var5 = var1.bind(var5)(var20);
                var1 = _closure1_slot3;
                var1 = var1.bind(var3)(var5, var6);
                var21 = var1[var4];
                var _closure2_slot5 = var21;
                var19 = var1[var2];
                var4 = 'Show tooltip';
                if (!var0) {
                    _fun88336_ip = 278;
                    continue _fun88336
                }
            case 272:
                var4 = 'Hide tooltip';
            case 278:
                var2 = _closure1_slot4;
                var1 = var2.useRef;
                var22 = null;
                var5 = var1.bind(var2)(var22);
                var6 = _closure1_slot4;
                var2 = var6.useMemo;
                var1 = new Array(5);
                var1[0] = var17;
                var1[1] = var25;
                var1[2] = var0;
                var1[3] = var16;
                var1[4] = var21;
                var0 = function() { // Environment: var18
                    _fun88337: for (var _fun88337_ip = 0;;) switch (_fun88337_ip) {
                        case 0:
                            var0 = {
                                'title': 'Introducing Coachmark!',
                                'description': 'Coachmark is a new component that can be used to highlight new features or UI elements.'
                            };
                            var4 = _closure2_slot3;
                            var3 = 'top';
                            if (!var4) {
                                _fun88337_ip = 34;
                                continue _fun88337
                            }
                        case 30:
                            var3 = 'bottom';
                        case 34:
                            var0.position = var3;
                            var3 = _closure2_slot0;
                            var0.visible = var3;
                            var3 = function() {
                                var2 = _closure2_slot1;
                                var1 = undefined;
                                var0 = false;
                                var0 = var2.bind(var1)(var0);
                                return var0;
                            };
                            var0.onDismiss = var3;
                            var5 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var3 = 6;
                            var4 = var4[var3];
                            var3 = undefined;
                            var4 = var5.bind(var3)(var4);
                            var0.imgSource = var4;
                            var4 = _closure2_slot2;
                            var0.experimental_withBlurBackground = var4;
                            var4 = _closure2_slot4;
                            if (!var4) {
                                _fun88337_ip = 111;
                                continue _fun88337
                            }
                        case 105:
                            var3 = 'Got it!';
                        case 111:
                            var0.buttonLabel = var3;
                            var2 = function() {
                                var2 = _closure2_slot1;
                                var1 = undefined;
                                var0 = false;
                                var0 = var2.bind(var1)(var0);
                                return var0;
                            };
                            var0.onButtonPress = var2;
                            var1 = _closure2_slot5;
                            var0.buttonVariant = var1;
                            return var0;
                    }
                };
                var9 = var2.bind(var6)(var0, var1);
                var1 = _closure1_slot0;
                var6 = _closure1_slot2;
                var0 = 7;
                var0 = var6[var0];
                var2 = var1.bind(var3)(var0);
                var0 = var2.useCoachmark;
                var0 = var0.bind(var2)(var5, var9);
                var2 = _closure1_slot7;
                var0 = 8;
                var0 = var6[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.Button;
                var0 = {};
                var0.ref = var5;
                var5 = function() {
                    var2 = _closure2_slot1;
                    var0 = _closure2_slot0;
                    var1 = !var0;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var0.onPress = var5;
                var5 = 'primary';
                var0.variant = var5;
                var0.text = var4;
                var4 = 'md';
                var0.size = var4;
                var10 = var2.bind(var3)(var1, var0);
                var2 = _closure1_slot9;
                var1 = _closure1_slot8;
                var0 = {};
                var9 = _closure1_slot7;
                if (var16) {
                    _fun88336_ip = 505;
                    continue _fun88336
                }
            case 454:
                var5 = _closure1_slot5;
                var4 = {};
                var14 = {};
                var6 = 300;
                var14.height = var6;
                var6 = new Array(2);
                var6[0] = var14;
                var14 = var23.container;
                var6[1] = var14;
                var4.style = var6;
                var4.children = var10;
                var5 = var9.bind(var3)(var5, var4);
                _fun88336_ip = 612;
                continue _fun88336;
            case 505:
                var6 = _closure1_slot1;
                var14 = _closure1_slot2;
                var4 = 9;
                var4 = var14[var4];
                var6 = var6.bind(var3)(var4);
                var4 = {};
                var26 = {};
                var14 = 300;
                var26.height = var14;
                var14 = new Array(2);
                var14[0] = var26;
                var23 = var23.container;
                var14[1] = var23;
                var4.style = var14;
                var14 = {
                    'x': 0,
                    'y': 0
                };
                var4.start = var14;
                var14 = {
                    'x': 1,
                    'y': 0
                };
                var4.end = var14;
                var14 = ['red', 'orange', 'yellow', 'green', 'teal', 'blue', 'purple'];
                var4.colors = var14;
                var4.children = var10;
                var5 = var9.bind(var3)(var6, var4);
            case 612:
                var4 = new Array(7);
                var4[0] = var5;
                var10 = _closure1_slot7;
                var14 = _closure1_slot0;
                var23 = _closure1_slot2;
                var9 = 10;
                var5 = var23[var9];
                var5 = var14.bind(var3)(var5);
                var6 = var5.TableSwitchRow;
                var5 = {};
                var26 = 'Enable Bottom Position';
                var5.label = var26;
                var5.value = var25;
                var5.onValueChange = var24;
                var5 = var10.bind(var3)(var6, var5);
                var4[1] = var5;
                var10 = _closure1_slot7;
                var5 = var23[var9];
                var5 = var14.bind(var3)(var5);
                var6 = var5.TableSwitchRow;
                var5 = {};
                var24 = 'Enable Button';
                var5.label = var24;
                var5.value = var17;
                var5.onValueChange = var11;
                var5 = var10.bind(var3)(var6, var5);
                var4[2] = var5;
                var10 = _closure1_slot7;
                var6 = _closure1_slot5;
                var5 = {};
                var11 = {};
                var17 = 16;
                var11.marginVertical = var17;
                var5.style = var11;
                var17 = _closure1_slot7;
                var11 = 11;
                var11 = var23[var11];
                var11 = var14.bind(var3)(var11);
                var14 = var11.TableRadioGroup;
                var11 = {};
                var23 = 'Button Variant';
                var11.title = var23;
                var22 = var22 != var21;
                if (!var22) {
                    _fun88336_ip = 799;
                    continue _fun88336
                }
            case 796:
                var20 = var21;
            case 799:
                var11.defaultValue = var20;
                var11.onChange = var19;
                var20 = ['secondary', 'primary', 'experimental_premium-primary'];
                var19 = var20.map;
                var18 = function(arg0) { // Environment: var18
                    var4 = arg0;
                    var3 = _closure1_slot7;
                    var1 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 12;
                    var0 = var2[var0];
                    var2 = undefined;
                    var0 = var1.bind(var2)(var0);
                    var1 = var0.TableRadioRow;
                    var0 = {};
                    var0.value = var4;
                    var0.label = var4;
                    var0 = var3.bind(var2)(var1, var0, var4);
                    return var0;
                };
                var18 = var19.bind(var20)(var18);
                var11.children = var18;
                var11 = var17.bind(var3)(var14, var11);
                var5.children = var11;
                var5 = var10.bind(var3)(var6, var5);
                var4[3] = var5;
                var14 = _closure1_slot7;
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var10 = var5[var9];
                var10 = var6.bind(var3)(var10);
                var11 = var10.TableSwitchRow;
                var10 = {};
                var17 = 'Enable Blur Background';
                var10.label = var17;
                var10.value = var16;
                var10.onValueChange = var15;
                var10 = var14.bind(var3)(var11, var10);
                var4[4] = var10;
                var11 = _closure1_slot7;
                var9 = var5[var9];
                var9 = var6.bind(var3)(var9);
                var10 = var9.TableSwitchRow;
                var9 = {};
                var14 = 'Unlock Orientation';
                var9.label = var14;
                var9.value = var13;
                var9.onValueChange = var12;
                var9 = var11.bind(var3)(var10, var9);
                var4[5] = var9;
                var7 = _closure1_slot7;
                var5 = var5[var8];
                var5 = var6.bind(var3)(var5);
                var6 = var5.TooltipNote;
                var5 = {};
                var5 = var7.bind(var3)(var6, var5);
                var4[6] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot11 = var0;
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
    var9 = 1;
    var6 = var5[var9];
    var3 = arg3;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.View;
    var _closure1_slot5 = var6;
    var3 = var3.ScrollView;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot7 = var6;
    var6 = var3.Fragment;
    var _closure1_slot8 = var6;
    var3 = var3.jsxs;
    var _closure1_slot9 = var3;
    var3 = 4;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'paddingTop': 200,
        'flex': 1,
        'alignItems': 'center',
        'justifyContent': 'center'
    };
    var3.container = var8;
    var8 = {};
    var8.flex = var9;
    var3.flex = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot10 = var3;
    var3 = 15;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/native/design_system/UserSettingsDesignSystemCoachmark.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        var0 = _closure1_slot10;
        var3 = undefined;
        var4 = var0.bind(var3)();
        var2 = _closure1_slot7;
        var8 = _closure1_slot0;
        var10 = _closure1_slot2;
        var0 = 13;
        var0 = var10[var0];
        var0 = var8.bind(var3)(var0);
        var1 = var0.SafeAreaPaddingView;
        var0 = {};
        var4 = var4.flex;
        var0.style = var4;
        var4 = true;
        var0.bottom = var4;
        var6 = _closure1_slot7;
        var5 = _closure1_slot6;
        var4 = {};
        var7 = 14;
        var7 = var10[var7];
        var7 = var8.bind(var3)(var7);
        var8 = var7.LayerScope;
        var7 = {};
        var11 = _closure1_slot7;
        var10 = _closure1_slot11;
        var9 = {};
        var9 = var11.bind(var3)(var10, var9);
        var7.children = var9;
        var7 = var6.bind(var3)(var8, var7);
        var4.children = var7;
        var4 = var6.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 33, 1297, 11448, 7538, 7044, 4085, 4099, 5421, 5427, 5426, 4737, 5208, 2]);