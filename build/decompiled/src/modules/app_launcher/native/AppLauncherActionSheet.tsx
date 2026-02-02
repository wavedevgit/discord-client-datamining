// modules/app_launcher/native/AppLauncherActionSheet.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        _fun108298: for (var _fun108298_ip = 0;;) switch (_fun108298_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.chatInputRef;
                var _closure2_slot0 = var1;
                var11 = var0.channel;
                var _closure2_slot1 = var11;
                var1 = _closure1_slot4;
                var0 = var1.useRef;
                var8 = null;
                var4 = var0.bind(var1)(var8);
                var _closure2_slot2 = var4;
                var10 = _closure1_slot0;
                var12 = _closure1_slot2;
                var0 = 4;
                var1 = var12[var0];
                var3 = undefined;
                var6 = var10.bind(var3)(var1);
                var2 = var6.useSharedValue;
                var1 = -1;
                var19 = var2.bind(var6)(var1);
                var0 = var12[var0];
                var2 = var10.bind(var3)(var0);
                var1 = var2.useSharedValue;
                var0 = 0;
                var18 = var1.bind(var2)(var0);
                var1 = _closure1_slot4;
                var0 = var1.useRef;
                var17 = var0.bind(var1)(var3);
                var2 = _closure1_slot4;
                var1 = var2.useRef;
                var0 = 5;
                var0 = var12[var0];
                var0 = var10.bind(var3)(var0);
                var0 = var0.AppLauncherKeyboardCloseReason;
                var0 = var0.DISMISSED;
                var13 = var1.bind(var2)(var0);
                var0 = 6;
                var0 = var12[var0];
                var0 = var10.bind(var3)(var0);
                var0 = var0.AppLauncherEntrypoint;
                var14 = var0.TEXT;
                var0 = 7;
                var0 = var12[var0];
                var1 = var10.bind(var3)(var0);
                var0 = var1.useDefaultAppLauncherWidth;
                var7 = var0.bind(var1)(var14);
                var6 = _closure1_slot4;
                var2 = var6.useMemo;
                var1 = new Array(1);
                var1[0] = var11;
                var0 = function() { // Environment: var5
                    var0 = {};
                    var1 = _closure2_slot1;
                    var0.channel = var1;
                    var1 = 'channel';
                    var0.type = var1;
                    return var0;
                };
                var16 = var2.bind(var6)(var0, var1);
                var2 = _closure1_slot4;
                var1 = var2.useRef;
                var0 = {};
                var6 = function() {
                    _fun108300: for (var _fun108300_ip = 0;;) switch (_fun108300_ip) {
                        case 0:
                            var0 = _closure2_slot0;
                            var2 = var0.current;
                            var0 = null;
                            var1 = var0 == var2;
                            var0 = undefined;
                            if (var1) {
                                _fun108300_ip = 33;
                                continue _fun108300
                            }
                        case 23:
                            var1 = var2.getApplicationCommandManager;
                            var0 = var1.bind(var2)();
                        case 33:
                            return var0;
                    }
                };
                var0.getApplicationCommandManager = var6;
                var6 = function() {
                    _fun108301: for (var _fun108301_ip = 0;;) switch (_fun108301_ip) {
                        case 0:
                            var0 = _closure2_slot2;
                            var1 = var0.current;
                            var0 = null;
                            if (!(var0 != var1)) {
                                _fun108301_ip = 28;
                                continue _fun108301
                            }
                        case 18:
                            var0 = var1.closeActionSheet;
                            var0 = var0.bind(var1)();
                        case 28:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0.closeCustomKeyboard = var6;
                var5 = function() {
                    _fun108302: for (var _fun108302_ip = 0;;) switch (_fun108302_ip) {
                        case 0:
                            var0 = _closure2_slot2;
                            var1 = var0.current;
                            var0 = null;
                            if (!(var0 != var1)) {
                                _fun108302_ip = 28;
                                continue _fun108302
                            }
                        case 18:
                            var0 = var1.expandActionSheet;
                            var0 = var0.bind(var1)();
                        case 28:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0.openCustomKeyboard = var5;
                var15 = var1.bind(var2)(var0);
                var2 = _closure1_slot6;
                var0 = 8;
                var0 = var12[var0];
                var0 = var10.bind(var3)(var0);
                var1 = var0.BottomSheet;
                var0 = {};
                var0.ref = var4;
                var0.animatedIndex = var19;
                var4 = true;
                var0.scrollable = var4;
                var0.startExpanded = var4;
                var6 = _closure1_slot6;
                var5 = _closure1_slot1;
                var4 = 9;
                var4 = var12[var4];
                var5 = var5.bind(var3)(var4);
                var4 = {};
                var4.bottomSheetIndex = var19;
                var4.bottomSheetPosition = var18;
                var4.bottomSheetExpandReasonRef = var17;
                var4.context = var16;
                var4.chatInputRef = var15;
                var4.entrypoint = var14;
                var4.keyboardCloseReasonRef = var13;
                var4.width = var7;
                var7 = {};
                var9 = _closure1_slot5;
                var9 = var9.HOME;
                var7.initialRouteName = var9;
                var9 = 10;
                var9 = var12[var9];
                var10 = var10.bind(var3)(var9);
                var9 = var10.getAppDMApplication;
                var9 = var9.bind(var10)(var11);
                var10 = var8 == var9;
                var8 = undefined;
                if (var10) {
                    _fun108298_ip = 448;
                    continue _fun108298
                }
            case 443:
                var8 = var9.name;
            case 448:
                var7.initialSearchQuery = var8;
                var4.overrideParams = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot7 = var0;
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
    var6 = var5[var3];
    var3 = arg3;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AppLauncherRouteName;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot6 = var3;
    var3 = 12;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/app_launcher/native/AppLauncherActionSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var6 = arg0;
        var _closure2_slot0 = var6;
        var4 = _closure1_slot4;
        var1 = var4.useState;
        var0 = false;
        var5 = var1.bind(var4)(var0);
        var4 = _closure1_slot3;
        var1 = undefined;
        var0 = 2;
        var1 = var4.bind(var1)(var5, var0);
        var0 = 0;
        var7 = var1[var0];
        var _closure2_slot1 = var7;
        var0 = 1;
        var1 = var1[var0];
        var _closure2_slot2 = var1;
        var0 = {};
        var5 = _closure1_slot4;
        var4 = var5.useMemo;
        var3 = new Array(2);
        var3[0] = var7;
        var3[1] = var6;
        var2 = function() { // Environment: var2
            _fun108304: for (var _fun108304_ip = 0;;) switch (_fun108304_ip) {
                case 0:
                    var1 = _closure2_slot1;
                    var0 = null;
                    if (!var1) {
                        _fun108304_ip = 142;
                        continue _fun108304
                    }
                case 17:
                    var4 = _closure1_slot6;
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 11;
                    var1 = var3[var1];
                    var3 = undefined;
                    var1 = var2.bind(var3)(var1);
                    var2 = var1.Provider;
                    var1 = {};
                    var6 = {};
                    var9 = 'visible';
                    var6.transitionState = var9;
                    var9 = function() {
                        var0 = undefined;
                        return var0;
                    };
                    var6.close = var9;
                    var9 = function() {
                        var2 = _closure2_slot2;
                        var0 = undefined;
                        var1 = false;
                        var1 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var6.onLeave = var9;
                    var7 = function() {
                        var0 = undefined;
                        return var0;
                    };
                    var6.registerDismissHandler = var7;
                    var1.value = var6;
                    var7 = _closure1_slot6;
                    var6 = _closure1_slot7;
                    var5 = {};
                    var10 = _closure2_slot0;
                    var11 = var5;
                    var8 = copyDataProperties(var11, var10);
                    var5 = var7.bind(var3)(var6, var5);
                    var1.children = var5;
                    var0 = var4.bind(var3)(var2, var1);
                case 142:
                    return var0;
            }
        };
        var2 = var4.bind(var5)(var2, var3);
        var0.appLauncherActionSheet = var2;
        var0.setAppLauncherActionSheetEnabled = var1;
        return var0;
    };
    var2.useAppLauncherActionSheet = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 1468, 33, 3681, 7697, 7698, 7699, 4896, 13845, 11604, 5165, 2]);