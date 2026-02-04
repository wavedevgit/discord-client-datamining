// modules/app_launcher/native/options/choices/AppLauncherChoicesOption.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var10.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var6 = {};
    var9 = {};
    var3 = 4;
    var11 = var5[var3];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_SURFACE_HIGH;
    var9.backgroundColor = var11;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var3 = var3.radii;
    var3 = var3.lg;
    var9.borderRadius = var3;
    var3 = 'center';
    var9.alignItems = var3;
    var3 = 12;
    var9.padding = var3;
    var6.container = var9;
    var6 = var7.bind(var8)(var6);
    var _closure1_slot6 = var6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/app_launcher/native/options/choices/AppLauncherChoicesOption.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun108121: for (var _fun108121_ip = 0;;) switch (_fun108121_ip) {
            case 0:
                var1 = arg0;
                var15 = var1.style;
                var10 = var1.option;
                var _closure2_slot0 = var10;
                var2 = var1.initialValue;
                var _closure2_slot1 = var2;
                var6 = var1.onSelect;
                var _closure2_slot2 = var6;
                var8 = var1.onOpenChoicesSheet;
                var _closure2_slot3 = var8;
                var9 = var1.onDismissChoicesSheet;
                var _closure2_slot4 = var9;
                var2 = var1.autoFocus;
                var12 = var1.hasError;
                var1 = _closure1_slot6;
                var3 = undefined;
                var14 = var1.bind(var3)();
                var7 = _closure1_slot4;
                var4 = var7.useState;
                var1 = function() { // Environment: var0
                    _fun108122: for (var _fun108122_ip = 0;;) switch (_fun108122_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            var0 = null;
                            if (!(var0 != var2)) {
                                _fun108122_ip = 72;
                                continue _fun108122
                            }
                        case 13:
                            var2 = _closure2_slot1;
                            var3 = var2.type;
                            var2 = 'text';
                            if (!(var2 === var3)) {
                                _fun108122_ip = 72;
                                continue _fun108122
                            }
                        case 30:
                            var2 = _closure2_slot0;
                            var5 = var2.choices;
                            var2 = var0 == var5;
                            var3 = undefined;
                            if (var2) {
                                _fun108122_ip = 68;
                                continue _fun108122
                            }
                        case 49:
                            var4 = var5.find;
                            var2 = function(arg0) { // Environment: var2
                                var0 = arg0;
                                var1 = var0.displayName;
                                var0 = _closure2_slot1;
                                var0 = var0.text;
                                var0 = var1 === var0;
                                return var0;
                            };
                            var3 = var4.bind(var5)(var2);
                        case 68:
                            if (!(var0 == var3)) {
                                _fun108122_ip = 76;
                                continue _fun108122
                            }
                        case 72:
                            var0 = undefined;
                            return var0;
                        case 76:
                            var0 = {};
                            var0.choice = var3;
                            var1 = _closure2_slot0;
                            var2 = var1.choices;
                            var1 = var2.indexOf;
                            var1 = var1.bind(var2)(var3);
                            var0.index = var1;
                            return var0;
                    }
                };
                var11 = var4.bind(var7)(var1);
                var4 = _closure1_slot3;
                var1 = 2;
                var1 = var4.bind(var3)(var11, var1);
                var4 = 0;
                var11 = var1[var4];
                var _closure2_slot5 = var11;
                var13 = 1;
                var1 = var1[var13];
                var _closure2_slot6 = var1;
                var4 = var7.useCallback;
                var1 = new Array(5);
                var1[0] = var9;
                var1[1] = var8;
                var1[2] = var6;
                var1[3] = var10;
                var6 = null;
                var9 = var6 == var11;
                var8 = undefined;
                if (var9) {
                    _fun108121_ip = 181;
                    continue _fun108121
                }
            case 176:
                var8 = var11.index;
            case 181:
                var1[4] = var8;
                var0 = function() { // Environment: var0
                    _fun108124: for (var _fun108124_ip = 0;;) switch (_fun108124_ip) {
                        case 0:
                            var2 = _closure2_slot3;
                            var0 = undefined;
                            var2 = var2.bind(var0)();
                            var6 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var4 = 5;
                            var4 = var2[var4];
                            var5 = var6.bind(var0)(var4);
                            var4 = var5.dismissGlobalKeyboard;
                            var4 = var4.bind(var5)();
                            var4 = _closure1_slot1;
                            var3 = 6;
                            var3 = var2[var3];
                            var5 = var4.bind(var0)(var3);
                            var4 = var5.openLazy;
                            var3 = 8;
                            var3 = var2[var3];
                            var6 = var6.bind(var0)(var3);
                            var3 = 7;
                            var3 = var2[var3];
                            var2 = var2.paths;
                            var3 = var6.bind(var0)(var3, var2);
                            var2 = {};
                            var6 = _closure2_slot0;
                            var2.option = var6;
                            var7 = _closure2_slot5;
                            var6 = null;
                            var7 = var6 == var7;
                            var6 = undefined;
                            if (var7) {
                                _fun108124_ip = 133;
                                continue _fun108124
                            }
                        case 124:
                            var7 = _closure2_slot5;
                            var6 = var7.index;
                        case 133:
                            var2.initChoiceIndex = var6;
                            var6 = function arg0, arg1() {
                                var2 = arg0;
                                var4 = _closure2_slot6;
                                var3 = {};
                                var3.choice = var2;
                                var0 = arg1;
                                var3.index = var0;
                                var0 = undefined;
                                var3 = var4.bind(var0)(var3);
                                var1 = _closure2_slot2;
                                var1 = var1.bind(var0)(var2);
                                return var0;
                            };
                            var2.onChoiceSelect = var6;
                            var1 = _closure2_slot4;
                            var2.onDismiss = var1;
                            var1 = 'AppLauncherChoicesActionSheet';
                            var1 = var4.bind(var5)(var3, var1, var2);
                            return var0;
                    }
                };
                var4 = var4.bind(var7)(var0, var1);
                var9 = _closure1_slot0;
                var7 = _closure1_slot2;
                var0 = 9;
                var0 = var7[var0];
                var1 = var9.bind(var3)(var0);
                var0 = var1.useAnimationDelayedAutoFocus;
                var0 = var0.bind(var1)(var2, var4);
                var2 = _closure1_slot5;
                var8 = 10;
                var0 = var7[var8];
                var0 = var9.bind(var3)(var0);
                var1 = var0.FormRow;
                var0 = {
                    'start': true,
                    'end': true
                };
                var16 = var14.container;
                var14 = new Array(2);
                var14[0] = var16;
                var14[1] = var15;
                var0.style = var14;
                var0.hasError = var12;
                var12 = 11;
                var7 = var7[var12];
                var7 = var9.bind(var3)(var7);
                var9 = var7.Text;
                var7 = {};
                var15 = var6 == var11;
                var14 = 'text-sm/medium';
                if (!var15) {
                    _fun108121_ip = 322;
                    continue _fun108121
                }
            case 318:
                var14 = 'text-md/medium';
            case 322:
                var7.variant = var14;
                var15 = var6 == var11;
                var14 = 'interactive-text-default';
                if (!var15) {
                    _fun108121_ip = 345;
                    continue _fun108121
                }
            case 339:
                var14 = 'text-default';
            case 345:
                var7.color = var14;
                var7.lineClamp = var13;
                var10 = var10.displayName;
                var7.children = var10;
                var7 = var2.bind(var3)(var9, var7);
                var0.label = var7;
                var7 = var6 != var11;
                var6 = null;
                if (!var7) {
                    _fun108121_ip = 443;
                    continue _fun108121
                }
            case 382:
                var10 = _closure1_slot5;
                var9 = _closure1_slot0;
                var7 = _closure1_slot2;
                var7 = var7[var12];
                var7 = var9.bind(var3)(var7);
                var9 = var7.Text;
                var7 = {
                    'variant': 'text-md/medium',
                    'color': 'text-default',
                    'lineClamp': 1
                };
                var11 = var11.choice;
                var11 = var11.displayName;
                var7.children = var11;
                var6 = var10.bind(var3)(var9, var7);
            case 443:
                var0.subLabel = var6;
                var7 = _closure1_slot5;
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var5 = var5[var8];
                var5 = var6.bind(var3)(var5);
                var6 = var5.FormArrow;
                var5 = {};
                var5 = var7.bind(var3)(var6, var5);
                var0.trailing = var5;
                var0.onPress = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 33, 1297, 671, 1582, 3278, 13958, 1307, 13959, 5378, 3941, 2]);