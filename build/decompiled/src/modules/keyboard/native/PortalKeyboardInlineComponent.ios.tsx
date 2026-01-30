// modules/keyboard/native/PortalKeyboardInlineComponent.ios.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var5;
    var0 = function(arg0) { // Original name: customKeyboardWillHide, environment: var1
        var0 = arg0;
        var4 = var0.viewHandle;
        var0 = _closure1_slot4;
        var3 = var0.DCDChatManager;
        var2 = var3.customKeyboardWillHide;
        var1 = 0.25;
        var0 = 7;
        var0 = var2.bind(var3)(var4, var1, var0);
        var0 = undefined;
        return var0;
    };
    var _closure1_slot7 = var0;
    var0 = function(arg0, arg1) { // Original name: withChatViewHandle, environment: var1
        _fun91495: for (var _fun91495_ip = 0;;) switch (_fun91495_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.current;
                var1 = null;
                var3 = var1 == var4;
                var0 = undefined;
                var2 = undefined;
                if (var3) {
                    _fun91495_ip = 31;
                    continue _fun91495
                }
            case 21:
                var3 = var4.getChatRef;
                var2 = var3.bind(var4)();
            case 31:
                if (!(var1 != var2)) {
                    _fun91495_ip = 64;
                    continue _fun91495
                }
            case 35:
                var3 = _closure1_slot5;
                var2 = var2.current;
                var2 = var3.bind(var0)(var2);
                if (!(var1 != var2)) {
                    _fun91495_ip = 64;
                    continue _fun91495
                }
            case 56:
                var1 = arg1;
                var1 = var1.bind(var0)(var2);
            case 64:
                return var0;
        }
    };
    var _closure1_slot8 = var0;
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
    var6 = var3.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var8 = var3.NativeModules;
    var _closure1_slot4 = var8;
    var3 = var3.findNodeHandle;
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = var6.memo;
    var1 = function(arg0) { // Original name: InlinePortalKeyboard, environment: var1
        var1 = arg0;
        var12 = var1.channelId;
        var7 = var1.messagesRef;
        var _closure2_slot0 = var7;
        var3 = _closure1_slot3;
        var1 = var3.useId;
        var11 = var1.bind(var3)();
        var _closure2_slot1 = var11;
        var10 = _closure1_slot1;
        var14 = _closure1_slot2;
        var1 = 3;
        var2 = var14[var1];
        var13 = undefined;
        var2 = var10.bind(var13)(var2);
        var8 = var2.bind(var13)();
        var _closure2_slot2 = var8;
        var2 = 4;
        var2 = var14[var2];
        var2 = var10.bind(var13)(var2);
        var5 = var2.bind(var13)();
        var2 = 5;
        var2 = var14[var2];
        var9 = var10.bind(var13)(var2);
        var4 = {};
        var2 = false;
        var4.includeCustomKeyboard = var2;
        var4 = var9.bind(var13)(var4);
        var _closure2_slot3 = var4;
        var9 = _closure1_slot0;
        var1 = var14[var1];
        var15 = var9.bind(var13)(var1);
        var6 = var15.useKeyboardContextForType;
        var1 = 6;
        var1 = var14[var1];
        var1 = var9.bind(var13)(var1);
        var1 = var1.KeyboardTypes;
        var1 = var1.SYSTEM;
        var6 = var6.bind(var15)(var1);
        var _closure2_slot4 = var6;
        var1 = 7;
        var1 = var14[var1];
        var10 = var10.bind(var13)(var1);
        var1 = function() { // Environment: var0
            var0 = function() { // Environment: var0
                _fun91498: for (var _fun91498_ip = 0;;) switch (_fun91498_ip) {
                    case 0:
                        var4 = _closure1_slot0;
                        var0 = _closure1_slot2;
                        var3 = 8;
                        var2 = var0[var3];
                        var0 = undefined;
                        var2 = var4.bind(var0)(var2);
                        var5 = var2.PortalKeyboardUIStore;
                        var4 = var5.getField;
                        var2 = 'keyboard';
                        var4 = var4.bind(var5)(var2);
                        var2 = null;
                        var2 = var2 != var4;
                        if (!var2) {
                            _fun91498_ip = 72;
                            continue _fun91498
                        }
                    case 55:
                        var5 = var4.handlerId;
                        var4 = _closure2_slot1;
                        var2 = var5 === var4;
                    case 72:
                        if (!var2) {
                            _fun91498_ip = 124;
                            continue _fun91498
                        }
                    case 75:
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var4 = 9;
                        var4 = var1[var4];
                        var5 = var2.bind(var0)(var4);
                        var4 = var5.dismissKeyboard;
                        var4 = var4.bind(var5)();
                        var1 = var1[var3];
                        var2 = var2.bind(var0)(var1);
                        var1 = var2.closePortalKeyboard;
                        var1 = var1.bind(var2)();
                    case 124:
                        return var0;
                }
            };
            return var0;
        };
        var1 = var10.bind(var13)(var1);
        var1 = 8;
        var10 = var14[var1];
        var10 = var9.bind(var13)(var10);
        var16 = var10.PortalKeyboardUIStore;
        var15 = var16.useField;
        var10 = 'keyboard';
        var10 = var15.bind(var16)(var10);
        var _closure2_slot5 = var10;
        var1 = var14[var1];
        var1 = var9.bind(var13)(var1);
        var13 = var1.PortalKeyboardUIStore;
        var9 = var13.useField;
        var1 = 'state';
        var9 = var9.bind(var13)(var1);
        var _closure2_slot6 = var9;
        var1 = var3.useRef;
        var1 = var1.bind(var3)(var2);
        var _closure2_slot7 = var1;
        var2 = var3.useLayoutEffect;
        var1 = new Array(9);
        var1[0] = var12;
        var1[1] = var11;
        var1[2] = var10;
        var1[3] = var9;
        var1[4] = var8;
        var1[5] = var7;
        var1[6] = var6;
        var1[7] = var5;
        var1[8] = var4;
        var0 = function() { // Environment: var0
            _fun91499: for (var _fun91499_ip = 0;;) switch (_fun91499_ip) {
                case 0:
                    var2 = _closure2_slot7;
                    var5 = var2.current;
                    var2 = _closure2_slot5;
                    var3 = null;
                    if (!(var3 == var2)) {
                        _fun91499_ip = 90;
                        continue _fun91499
                    }
                case 24:
                    var4 = _closure1_slot6;
                    var6 = var4.systemPrefersCrossfades;
                    var4 = _closure2_slot3;
                    if (var4) {
                        _fun91499_ip = 56;
                        continue _fun91499
                    }
                case 44:
                    var5 = !var5;
                    if (!var5) {
                        _fun91499_ip = 53;
                        continue _fun91499
                    }
                case 50:
                    var5 = !var6;
                case 53:
                    var4 = var5;
                case 56:
                    if (var4) {
                        _fun91499_ip = 316;
                        continue _fun91499
                    }
                case 62:
                    var6 = _closure1_slot8;
                    var5 = _closure2_slot0;
                    var4 = undefined;
                    var2 = function(arg0) { // Environment: var0
                        var1 = _closure2_slot7;
                        var0 = false;
                        var1.current = var0;
                        var2 = _closure1_slot7;
                        var1 = {};
                        var0 = arg0;
                        var1.viewHandle = var0;
                        var0 = undefined;
                        var1 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var2 = var6.bind(var4)(var5, var2);
                    _fun91499_ip = 316;
                    continue _fun91499;
                case 90:
                    var2 = _closure2_slot5;
                    var2 = var2.handlerId;
                    var2 = var3 != var2;
                    if (!var2) {
                        _fun91499_ip = 125;
                        continue _fun91499
                    }
                case 107:
                    var4 = _closure2_slot5;
                    var5 = var4.handlerId;
                    var4 = _closure2_slot1;
                    var2 = var5 !== var4;
                case 125:
                    if (var2) {
                        _fun91499_ip = 316;
                        continue _fun91499
                    }
                case 131:
                    var2 = _closure2_slot5;
                    if (!(var3 != var2)) {
                        _fun91499_ip = 207;
                        continue _fun91499
                    }
                case 139:
                    var4 = _closure2_slot6;
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 10;
                    var3 = var5[var3];
                    var5 = undefined;
                    var3 = var6.bind(var5)(var3);
                    var3 = var3.PortalKeyboardState;
                    var3 = var3.REQUEST_OPEN;
                    if (!(var4 === var3)) {
                        _fun91499_ip = 207;
                        continue _fun91499
                    }
                case 184:
                    var4 = _closure1_slot8;
                    var3 = _closure2_slot0;
                    var2 = function(arg0) { // Environment: var0
                        var4 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var0 = 8;
                        var2 = var5[var0];
                        var0 = undefined;
                        var7 = var4.bind(var0)(var2);
                        var6 = var7.handlePortalKeyboardOpen;
                        var3 = _closure2_slot1;
                        var3 = var6.bind(var7)(var3);
                        var3 = _closure2_slot7;
                        var2 = true;
                        var3.current = var2;
                        var2 = {};
                        var3 = arg0;
                        var2.viewHandle = var3;
                        var3 = 11;
                        var3 = var5[var3];
                        var4 = var4.bind(var0)(var3);
                        var3 = var4.getKeyboardActionSheetHeight;
                        var3 = var3.bind(var4)();
                        var3 = var3.minimum;
                        var2.height = var3;
                        var11 = var2.viewHandle;
                        var10 = var2.height;
                        var1 = _closure1_slot4;
                        var4 = var1.DCDChatManager;
                        var3 = var4.customKeyboardWillShow;
                        var9 = 0.25;
                        var8 = 7;
                        var12 = var4;
                        var1 = var12[var3](var11, var10, var9, var8, var7);
                        return var0;
                    };
                    var2 = var4.bind(var5)(var3, var2);
                    _fun91499_ip = 316;
                    continue _fun91499;
                case 207:
                    var5 = _closure2_slot2;
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 6;
                    var4 = var4[var3];
                    var3 = undefined;
                    var4 = var6.bind(var3)(var4);
                    var4 = var4.KeyboardTypes;
                    var4 = var4.SYSTEM;
                    if (!(var5 === var4)) {
                        _fun91499_ip = 316;
                        continue _fun91499
                    }
                case 252:
                    var4 = _closure2_slot4;
                    var4 = var4.keyboardWillOpen;
                    if (var4) {
                        _fun91499_ip = 316;
                        continue _fun91499
                    }
                case 265:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var4 = 8;
                    var4 = var6[var4];
                    var5 = var5.bind(var3)(var4);
                    var4 = var5.closePortalKeyboard;
                    var4 = var4.bind(var5)();
                    var2 = _closure1_slot8;
                    var1 = _closure2_slot0;
                    var0 = function(arg0) { // Environment: var0
                        var1 = _closure2_slot7;
                        var0 = false;
                        var1.current = var0;
                        var2 = _closure1_slot7;
                        var1 = {};
                        var0 = arg0;
                        var1.viewHandle = var0;
                        var0 = undefined;
                        var1 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var0 = var2.bind(var3)(var1, var0);
                case 316:
                    var0 = undefined;
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var0, var1);
        var0 = null;
        return var0;
    };
    var1 = var3.bind(var6)(var1);
    var3 = 12;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/keyboard/native/PortalKeyboardInlineComponent.ios.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1298, 3873, 1585, 5360, 1567, 4062, 3874, 3677, 3877, 11329, 2]);