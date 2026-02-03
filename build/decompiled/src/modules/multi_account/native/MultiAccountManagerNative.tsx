// modules/multi_account/native/MultiAccountManagerNative.tsx
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
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var4.bind(var0)(var1);
    var1 = var1.SWITCH_ACCOUNTS_MODAL_KEY;
    var _closure1_slot3 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.Routes;
    var _closure1_slot4 = var1;
    var1 = null;
    var _closure1_slot5 = var1;
    var1 = 2;
    var1 = var5[var1];
    var6 = var6.bind(var0)(var1);
    var1 = {};
    var7 = function() {
        _fun113724: for (var _fun113724_ip = 0;;) switch (_fun113724_ip) {
            case 0:
                var4 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 3;
                var3 = var1[var0];
                var0 = undefined;
                var6 = var4.bind(var0)(var3);
                var5 = var6.pushLazy;
                var4 = _closure1_slot0;
                var3 = 5;
                var3 = var1[var3];
                var4 = var4.bind(var0)(var3);
                var3 = 4;
                var3 = var1[var3];
                var1 = var1.paths;
                var4 = var4.bind(var0)(var3, var1);
                var3 = {};
                var1 = 'switch-accounts-spinner-modal';
                var1 = var5.bind(var6)(var4, var3, var1);
                var3 = _closure1_slot5;
                var1 = null;
                if (!(var1 !== var3)) {
                    _fun113724_ip = 107;
                    continue _fun113724
                }
            case 90:
                var1 = global;
                var3 = var1.clearTimeout;
                var1 = _closure1_slot5;
                var1 = var3.bind(var0)(var1);
            case 107:
                var1 = global;
                var4 = var1.setTimeout;
                var3 = function() { // Environment: var1
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 3;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.popWithKey;
                    var0 = 'switch-accounts-spinner-modal';
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var1 = 15000;
                var1 = var4.bind(var0)(var3, var1);
                _closure1_slot5 = var1;
                return var0;
        }
    };
    var1.onSwitchStart = var7;
    var7 = function arg0, arg1() {
        var0 = arg0;
        var _closure2_slot0 = var0;
        var0 = arg1;
        var _closure2_slot1 = var0;
        var0 = global;
        var3 = var0.setTimeout;
        var0 = undefined;
        var2 = function() { // Environment: var1
            _fun113727: for (var _fun113727_ip = 0;;) switch (_fun113727_ip) {
                case 0:
                    var0 = _closure2_slot1;
                    if (!var0) {
                        _fun113727_ip = 56;
                        continue _fun113727
                    }
                case 10:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.transitionTo;
                    var0 = _closure1_slot4;
                    var0 = var0.ME;
                    var0 = var1.bind(var2)(var0);
                case 56:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var0 = 7;
                    var1 = var6[var0];
                    var0 = undefined;
                    var3 = var5.bind(var0)(var1);
                    var2 = var3.open;
                    var1 = {};
                    var7 = 'SWITCH_ACCOUNTS_TOAST_LOGIN_SUCCESS';
                    var1.key = var7;
                    var7 = _closure1_slot0;
                    var4 = 8;
                    var8 = var6[var4];
                    var8 = var7.bind(var0)(var8);
                    var9 = var8.intl;
                    var8 = var9.formatToPlainString;
                    var4 = var6[var4];
                    var4 = var7.bind(var0)(var4);
                    var4 = var4.t;
                    var7 = var4.wx7O3L;
                    var4 = {};
                    var10 = _closure2_slot0;
                    var10 = var10.username;
                    var4.username = var10;
                    var4 = var8.bind(var9)(var7, var4);
                    var1.content = var4;
                    var4 = 9;
                    var4 = var6[var4];
                    var4 = var5.bind(var0)(var4);
                    var1.icon = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
            }
        };
        var1 = 100;
        var1 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1.onSwitchSuccess = var7;
    var7 = function() {
        var5 = _closure1_slot1;
        var6 = _closure1_slot2;
        var0 = 7;
        var1 = var6[var0];
        var0 = undefined;
        var3 = var5.bind(var0)(var1);
        var2 = var3.open;
        var1 = {};
        var7 = 'SWITCH_ACCOUNTS_TOAST_LOGIN_ERROR';
        var1.key = var7;
        var9 = _closure1_slot0;
        var4 = 8;
        var7 = var6[var4];
        var7 = var9.bind(var0)(var7);
        var8 = var7.intl;
        var7 = var8.string;
        var4 = var6[var4];
        var4 = var9.bind(var0)(var4);
        var4 = var4.t;
        var4 = var4.pqvKWA;
        var4 = var7.bind(var8)(var4);
        var1.content = var4;
        var4 = 9;
        var4 = var6[var4];
        var4 = var5.bind(var0)(var4);
        var1.icon = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1.onSwitchError = var7;
    var3 = function() {
        var3 = _closure1_slot1;
        var4 = _closure1_slot2;
        var2 = 3;
        var5 = var4[var2];
        var0 = undefined;
        var7 = var3.bind(var0)(var5);
        var6 = var7.popWithKey;
        var5 = _closure1_slot3;
        var5 = var6.bind(var7)(var5);
        var2 = var4[var2];
        var4 = var3.bind(var0)(var2);
        var3 = var4.popWithKey;
        var2 = 'switch-accounts-spinner-modal';
        var2 = var3.bind(var4)(var2);
        var2 = global;
        var2 = var2.clearTimeout;
        var1 = _closure1_slot5;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var1.onTokenSet = var3;
    var3 = var6.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var6
        }
    });
    var12 = var3;
    var11 = var1;
    var1 = new var12[var6](var11, var10);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/multi_account/native/MultiAccountManagerNative.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [10279, 660, 14578, 4561, 14579, 1307, 1220, 3148, 1234, 14580, 2]);