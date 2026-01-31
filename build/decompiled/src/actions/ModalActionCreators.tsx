// actions/ModalActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var4.bind(var0)(var1);
    var1 = var1.AppContext;
    var _closure1_slot3 = var1;
    var1 = {};
    var6 = function(arg0, arg1) { // Original name: push, environment: var3
        _fun41114: for (var _fun41114_ip = 0;;) switch (_fun41114_ip) {
            case 0:
                var6 = arg0;
                var5 = arg1;
                var0 = arguments[2];
                var4 = arguments[4];
                var3 = undefined;
                if (!(var0 === var3)) {
                    _fun41114_ip = 50;
                    continue _fun41114
                }
            case 18:
                var2 = _closure1_slot1;
                var7 = _closure1_slot2;
                var1 = 1;
                var1 = var7[var1];
                var2 = var2.bind(var3)(var1);
                var1 = 'modal';
                var0 = var2.bind(var3)(var1);
            case 50:
                if (!(var4 === var3)) {
                    _fun41114_ip = 67;
                    continue _fun41114
                }
            case 54:
                var1 = _closure1_slot3;
                var4 = var1.APP;
            case 67:
                var8 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 2;
                var1 = var7[var1];
                var9 = var8.bind(var3)(var1);
                var8 = var9.pushModal;
                var1 = {};
                var1.key = var0;
                var2 = _closure1_slot1;
                var10 = 3;
                var10 = var7[var10];
                var11 = var2.bind(var3)(var10);
                var14 = {};
                var16 = undefined;
                var15 = var6;
                var13 = var5;
                var12 = var0;
                var10 = var16[var11](var15, var14, var13, var12, var11);
                var1.modal = var10;
                var14 = arguments[3];
                var15 = var1;
                var10 = copyDataProperties(var15, var14);
                var1 = var8.bind(var9)(var1);
                var1 = 4;
                var1 = var7[var1];
                var3 = var2.bind(var3)(var1);
                var2 = var3.dispatch;
                var1 = {};
                var7 = 'MODAL_PUSH';
                var1.type = var7;
                var1.modal = var6;
                var1.props = var5;
                var1.key = var0;
                var1.appContext = var4;
                var1 = var2.bind(var3)(var1);
                return var0;
        }
    };
    var1.push = var6;
    var6 = function(arg0, arg1) { // Original name: pushLazy, environment: var3
        _fun41115: for (var _fun41115_ip = 0;;) switch (_fun41115_ip) {
            case 0:
                var5 = arg0;
                var0 = arguments[2];
                var2 = this;
                var _closure2_slot0 = var2;
                var _closure2_slot1 = var5;
                var2 = arg1;
                var _closure2_slot2 = var2;
                var2 = undefined;
                if (!(var0 === var2)) {
                    _fun41115_ip = 64;
                    continue _fun41115
                }
            case 32:
                var4 = _closure1_slot1;
                var6 = _closure1_slot2;
                var3 = 1;
                var3 = var6[var3];
                var4 = var4.bind(var2)(var3);
                var3 = 'modal';
                var0 = var4.bind(var2)(var3);
            case 64:
                var _closure2_slot3 = var0;
                var0 = arguments[3];
                var _closure2_slot4 = var0;
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 5;
                var0 = var4[var0];
                var3 = var3.bind(var2)(var0);
                var0 = var3.getRootNavigationRef;
                var3 = var0.bind(var3)();
                var0 = null;
                if (!(var0 != var3)) {
                    _fun41115_ip = 127;
                    continue _fun41115
                }
            case 114:
                var0 = var3.isReady;
                var0 = var0.bind(var3)();
                if (var0) {
                    _fun41115_ip = 162;
                    continue _fun41115
                }
            case 127:
                var0 = global;
                var4 = var0.Promise;
                var0 = var4.prototype;
                var3 = Object.create(var0, {
                    constructor: {
                        value: var4
                    }
                });
                var7 = function(arg0) { // Environment: var1
                    var1 = arg0;
                    var _closure3_slot0 = var1;
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.enqueue;
                    var0 = function() { // Environment: var0
                        var2 = _closure3_slot0;
                        var6 = _closure2_slot0;
                        var5 = var6.pushLazy;
                        var10 = _closure2_slot1;
                        var9 = _closure2_slot2;
                        var8 = _closure2_slot3;
                        var7 = _closure2_slot4;
                        var11 = var6;
                        var1 = var11[var5](var10, var9, var8, var7, var6);
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var8 = var3;
                var0 = new var8[var4](var7, var6);
                var0 = var0 instanceof Object ? var0 : var3;
                _fun41115_ip = 213;
                continue _fun41115;
            case 162:
                var3 = global;
                var3 = var3.Promise;
                var3 = var5 instanceof var3;
                if (var3) {
                    _fun41115_ip = 183;
                    continue _fun41115
                }
            case 177:
                var3 = var5.bind(var2)();
                _fun41115_ip = 198;
                continue _fun41115;
            case 183:
                var4 = var5.then;
                var2 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var0 = var0.default;
                    return var0;
                };
                var3 = var4.bind(var5)(var2);
            case 198:
                var2 = var3.then;
                var1 = function(arg0) { // Environment: var1
                    var5 = _closure2_slot0;
                    var4 = var5.push;
                    var8 = _closure2_slot2;
                    var7 = _closure2_slot3;
                    var6 = _closure2_slot4;
                    var9 = arg0;
                    var10 = var5;
                    var0 = var10[var4](var9, var8, var7, var6, var5);
                    return var0;
                };
                var0 = var2.bind(var3)(var1);
            case 213:
                return var0;
        }
    };
    var1.pushLazy = var6;
    var6 = function(arg0, arg1) { // Original name: updateAnimation, environment: var3
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 4;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'MODAL_UPDATE';
        var1.type = var4;
        var4 = arg0;
        var1.key = var4;
        var4 = {};
        var1.props = var4;
        var4 = true;
        var1.partial = var4;
        var4 = arg1;
        var1.animation = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1.updateAnimation = var6;
    var6 = function() { // Original name: pop, environment: var3
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var0 = 2;
        var2 = var3[var0];
        var0 = undefined;
        var4 = var4.bind(var0)(var2);
        var2 = var4.popModal;
        var2 = var2.bind(var4)();
        var2 = _closure1_slot1;
        var1 = 4;
        var1 = var3[var1];
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'MODAL_POP';
        var1.type = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1.pop = var6;
    var6 = function(arg0, arg1) { // Original name: popWithKey, environment: var3
        var5 = arg0;
        var4 = arg1;
        var6 = _closure1_slot0;
        var3 = _closure1_slot2;
        var0 = 2;
        var2 = var3[var0];
        var0 = undefined;
        var6 = var6.bind(var0)(var2);
        var2 = var6.popModal;
        var2 = var2.bind(var6)(var5, var4);
        var2 = _closure1_slot1;
        var1 = 4;
        var1 = var3[var1];
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var6 = 'MODAL_POP';
        var1.type = var6;
        var1.key = var5;
        var1.onExited = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1.popWithKey = var6;
    var6 = function(arg0) { // Original name: popAboveKey, environment: var3
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 2;
        var1 = var1[var0];
        var0 = undefined;
        var2 = var2.bind(var0)(var1);
        var1 = var2.popModalsAboveKey;
        var0 = arg0;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1.popAboveKey = var6;
    var3 = function() { // Original name: popAll, environment: var3
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var0 = 2;
        var2 = var3[var0];
        var0 = undefined;
        var4 = var4.bind(var0)(var2);
        var2 = var4.popAllModals;
        var2 = var2.bind(var4)();
        var2 = _closure1_slot1;
        var1 = 4;
        var4 = var3[var1];
        var6 = var2.bind(var0)(var4);
        var5 = var6.dispatch;
        var4 = {};
        var7 = 'MODAL_POP_ALL';
        var4.type = var7;
        var4 = var5.bind(var6)(var4);
        var4 = var3[var1];
        var6 = var2.bind(var0)(var4);
        var5 = var6.dispatch;
        var4 = {};
        var7 = 'EMAIL_VERIFICATION_MODAL_CLOSE';
        var4.type = var7;
        var4 = var5.bind(var6)(var4);
        var4 = var3[var1];
        var6 = var2.bind(var0)(var4);
        var5 = var6.dispatch;
        var4 = {};
        var7 = 'GUILD_SETTINGS_CLOSE';
        var4.type = var7;
        var4 = var5.bind(var6)(var4);
        var4 = var3[var1];
        var6 = var2.bind(var0)(var4);
        var5 = var6.dispatch;
        var4 = {};
        var7 = 'HIDE_ACTION_SHEET';
        var4.type = var7;
        var4 = var5.bind(var6)(var4);
        var4 = var3[var1];
        var6 = var2.bind(var0)(var4);
        var5 = var6.dispatch;
        var4 = {};
        var7 = 'DISPLAYED_INVITE_CLEAR';
        var4.type = var7;
        var4 = var5.bind(var6)(var4);
        var4 = var3[var1];
        var6 = var2.bind(var0)(var4);
        var5 = var6.dispatch;
        var4 = {};
        var7 = 'NOTIFICATION_SETTINGS_MODAL_CLOSE';
        var4.type = var7;
        var4 = var5.bind(var6)(var4);
        var4 = var3[var1];
        var6 = var2.bind(var0)(var4);
        var5 = var6.dispatch;
        var4 = {};
        var7 = 'QUICKSWITCHER_HIDE';
        var4.type = var7;
        var4 = var5.bind(var6)(var4);
        var4 = var3[var1];
        var6 = var2.bind(var0)(var4);
        var5 = var6.dispatch;
        var4 = {};
        var7 = 'USER_SETTINGS_MODAL_CLOSE';
        var4.type = var7;
        var4 = var5.bind(var6)(var4);
        var4 = var3[var1];
        var6 = var2.bind(var0)(var4);
        var5 = var6.dispatch;
        var4 = {};
        var7 = 'CONNECTIONS_GRID_MODAL_HIDE';
        var4.type = var7;
        var4 = var5.bind(var6)(var4);
        var1 = var3[var1];
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'USER_PROFILE_MODAL_CLOSE';
        var1.type = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1.popAll = var3;
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'actions/ModalActionCreators.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 4526, 3878, 4527, 806, 3879, 4528, 2]);