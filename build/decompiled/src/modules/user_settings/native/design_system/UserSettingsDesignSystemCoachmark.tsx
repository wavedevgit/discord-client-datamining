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
    var11 = 1;
    var6 = var5[var11];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.View;
    var _closure1_slot5 = var6;
    var7 = var3.ScrollView;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot6 = var6;
    var8 = var3.Fragment;
    var _closure1_slot7 = var8;
    var3 = var3.jsxs;
    var _closure1_slot8 = var3;
    var3 = 4;
    var3 = var5[var3];
    var9 = var4.bind(var0)(var3);
    var8 = var9.createStyles;
    var3 = {};
    var10 = {
        'paddingTop': 200,
        'flex': 1,
        'alignItems': 'center',
        'justifyContent': 'center'
    };
    var3.container = var10;
    var10 = {};
    var10.flex = var11;
    var3.flex = var10;
    var3 = var8.bind(var9)(var3);
    var _closure1_slot9 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var8 = var3.TooltipNote;
    var3 = {};
    var3 = var6.bind(var0)(var8, var3);
    var _closure1_slot10 = var3;
    var3 = {};
    var8 = 13;
    var8 = var5[var8];
    var8 = var4.bind(var0)(var8);
    var9 = var8.LayerScope;
    var8 = {};
    var11 = function() {
        _fun87184: for (var _fun87184_ip = 0;;) switch (_fun87184_ip) {
            case 0:
                var0 = _closure1_slot9;
                var3 = undefined;
                var22 = var0.bind(var3)();
                var2 = _closure1_slot4;
                var1 = var2.useState;
                var0 = true;
                var1 = var1.bind(var2)(var0);
                var0 = _closure1_slot3;
                var7 = 2;
                var1 = var0.bind(var3)(var1, var7);
                var4 = 0;
                var0 = var1[var4];
                var _closure2_slot0 = var0;
                var2 = 1;
                var1 = var1[var2];
                var _closure2_slot1 = var1;
                var6 = _closure1_slot4;
                var1 = var6.useState;
                var8 = false;
                var6 = var1.bind(var6)(var8);
                var1 = _closure1_slot3;
                var1 = var1.bind(var3)(var6, var7);
                var15 = var1[var4];
                var _closure2_slot2 = var15;
                var14 = var1[var2];
                var6 = _closure1_slot4;
                var1 = var6.useState;
                var6 = var1.bind(var6)(var8);
                var1 = _closure1_slot3;
                var1 = var1.bind(var3)(var6, var7);
                var24 = var1[var4];
                var _closure2_slot3 = var24;
                var23 = var1[var2];
                var6 = _closure1_slot0;
                var9 = _closure1_slot2;
                var1 = 5;
                var1 = var9[var1];
                var6 = var6.bind(var3)(var1);
                var1 = var6.useCanRotate;
                var6 = var1.bind(var6)();
                var1 = _closure1_slot3;
                var1 = var1.bind(var3)(var6, var7);
                var10 = var1[var4];
                var9 = var1[var2];
                var6 = _closure1_slot4;
                var1 = var6.useState;
                var6 = var1.bind(var6)(var8);
                var1 = _closure1_slot3;
                var1 = var1.bind(var3)(var6, var7);
                var16 = var1[var4];
                var _closure2_slot4 = var16;
                var12 = var1[var2];
                var6 = _closure1_slot4;
                var1 = var6.useState;
                var19 = 'secondary';
                var6 = var1.bind(var6)(var19);
                var1 = _closure1_slot3;
                var1 = var1.bind(var3)(var6, var7);
                var20 = var1[var4];
                var _closure2_slot5 = var20;
                var18 = var1[var2];
                var4 = 'Show tooltip';
                if (!var0) {
                    _fun87184_ip = 278;
                    continue _fun87184
                }
            case 272:
                var4 = 'Hide tooltip';
            case 278:
                var2 = _closure1_slot4;
                var1 = var2.useRef;
                var21 = null;
                var6 = var1.bind(var2)(var21);
                var7 = _closure1_slot4;
                var2 = var7.useMemo;
                var1 = new Array(5);
                var1[0] = var16;
                var1[1] = var24;
                var1[2] = var0;
                var1[3] = var15;
                var1[4] = var20;
                var0 = function() { // Environment: var17
                    _fun87185: for (var _fun87185_ip = 0;;) switch (_fun87185_ip) {
                        case 0:
                            var0 = {
                                'title': 'Introducing Coachmark!',
                                'description': 'Coachmark is a new component that can be used to highlight new features or UI elements.'
                            };
                            var4 = _closure2_slot3;
                            var3 = 'top';
                            if (!var4) {
                                _fun87185_ip = 34;
                                continue _fun87185
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
                                _fun87185_ip = 111;
                                continue _fun87185
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
                var8 = var2.bind(var7)(var0, var1);
                var1 = _closure1_slot0;
                var7 = _closure1_slot2;
                var0 = 7;
                var0 = var7[var0];
                var2 = var1.bind(var3)(var0);
                var0 = var2.useCoachmark;
                var0 = var0.bind(var2)(var6, var8);
                var2 = _closure1_slot6;
                var0 = 8;
                var0 = var7[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.Button;
                var0 = {};
                var0.ref = var6;
                var6 = function() {
                    var2 = _closure2_slot1;
                    var0 = _closure2_slot0;
                    var1 = !var0;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var0.onPress = var6;
                var6 = 'primary';
                var0.variant = var6;
                var0.text = var4;
                var4 = 'md';
                var0.size = var4;
                var11 = var2.bind(var3)(var1, var0);
                var2 = _closure1_slot8;
                var1 = _closure1_slot7;
                var0 = {};
                var8 = _closure1_slot6;
                if (var15) {
                    _fun87184_ip = 505;
                    continue _fun87184
                }
            case 454:
                var6 = _closure1_slot5;
                var4 = {};
                var13 = {};
                var7 = 300;
                var13.height = var7;
                var7 = new Array(2);
                var7[0] = var13;
                var13 = var22.container;
                var7[1] = var13;
                var4.style = var7;
                var4.children = var11;
                var6 = var8.bind(var3)(var6, var4);
                _fun87184_ip = 612;
                continue _fun87184;
            case 505:
                var7 = _closure1_slot1;
                var13 = _closure1_slot2;
                var4 = 9;
                var4 = var13[var4];
                var7 = var7.bind(var3)(var4);
                var4 = {};
                var25 = {};
                var13 = 300;
                var25.height = var13;
                var13 = new Array(2);
                var13[0] = var25;
                var22 = var22.container;
                var13[1] = var22;
                var4.style = var13;
                var13 = {
                    'x': 0,
                    'y': 0
                };
                var4.start = var13;
                var13 = {
                    'x': 1,
                    'y': 0
                };
                var4.end = var13;
                var13 = ['red', 'orange', 'yellow', 'green', 'teal', 'blue', 'purple'];
                var4.colors = var13;
                var4.children = var11;
                var6 = var8.bind(var3)(var7, var4);
            case 612:
                var4 = new Array(7);
                var4[0] = var6;
                var8 = _closure1_slot6;
                var13 = _closure1_slot0;
                var22 = _closure1_slot2;
                var11 = 10;
                var6 = var22[var11];
                var6 = var13.bind(var3)(var6);
                var7 = var6.TableSwitchRow;
                var6 = {};
                var25 = 'Enable Bottom Position';
                var6.label = var25;
                var6.value = var24;
                var6.onValueChange = var23;
                var6 = var8.bind(var3)(var7, var6);
                var4[1] = var6;
                var8 = _closure1_slot6;
                var6 = var22[var11];
                var6 = var13.bind(var3)(var6);
                var7 = var6.TableSwitchRow;
                var6 = {};
                var23 = 'Enable Button';
                var6.label = var23;
                var6.value = var16;
                var6.onValueChange = var12;
                var6 = var8.bind(var3)(var7, var6);
                var4[2] = var6;
                var8 = _closure1_slot6;
                var7 = _closure1_slot5;
                var6 = {};
                var12 = {};
                var16 = 16;
                var12.marginVertical = var16;
                var6.style = var12;
                var16 = _closure1_slot6;
                var12 = 11;
                var12 = var22[var12];
                var12 = var13.bind(var3)(var12);
                var13 = var12.TableRadioGroup;
                var12 = {};
                var22 = 'Button Variant';
                var12.title = var22;
                var21 = var21 != var20;
                if (!var21) {
                    _fun87184_ip = 799;
                    continue _fun87184
                }
            case 796:
                var19 = var20;
            case 799:
                var12.defaultValue = var19;
                var12.onChange = var18;
                var19 = ['secondary', 'primary', 'experimental_premium-primary'];
                var18 = var19.map;
                var17 = function(arg0) { // Environment: var17
                    var4 = arg0;
                    var3 = _closure1_slot6;
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
                var17 = var18.bind(var19)(var17);
                var12.children = var17;
                var12 = var16.bind(var3)(var13, var12);
                var6.children = var12;
                var6 = var8.bind(var3)(var7, var6);
                var4[3] = var6;
                var13 = _closure1_slot6;
                var7 = _closure1_slot0;
                var6 = _closure1_slot2;
                var8 = var6[var11];
                var8 = var7.bind(var3)(var8);
                var12 = var8.TableSwitchRow;
                var8 = {};
                var16 = 'Enable Blur Background';
                var8.label = var16;
                var8.value = var15;
                var8.onValueChange = var14;
                var8 = var13.bind(var3)(var12, var8);
                var4[4] = var8;
                var8 = _closure1_slot6;
                var6 = var6[var11];
                var6 = var7.bind(var3)(var6);
                var7 = var6.TableSwitchRow;
                var6 = {};
                var11 = 'Unlock Orientation';
                var6.label = var11;
                var6.value = var10;
                var6.onValueChange = var9;
                var6 = var8.bind(var3)(var7, var6);
                var4[5] = var6;
                var5 = _closure1_slot10;
                var4[6] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var10 = {};
    var10 = var6.bind(var0)(var11, var10);
    var8.children = var10;
    var8 = var6.bind(var0)(var9, var8);
    var3.children = var8;
    var3 = var6.bind(var0)(var7, var3);
    var _closure1_slot11 = var3;
    var3 = 15;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/native/design_system/UserSettingsDesignSystemCoachmark.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        var0 = _closure1_slot9;
        var3 = undefined;
        var5 = var0.bind(var3)();
        var2 = _closure1_slot6;
        var1 = _closure1_slot0;
        var6 = _closure1_slot2;
        var0 = 14;
        var0 = var6[var0];
        var0 = var1.bind(var3)(var0);
        var1 = var0.SafeAreaPaddingView;
        var0 = {};
        var5 = var5.flex;
        var0.style = var5;
        var5 = true;
        var0.bottom = var5;
        var4 = _closure1_slot11;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 33, 1297, 11227, 7842, 7114, 4090, 4104, 5344, 5481, 5480, 5229, 4754, 2]);