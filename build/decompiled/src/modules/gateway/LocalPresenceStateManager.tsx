// modules/gateway/LocalPresenceStateManager.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var0 = function() {
        _fun94925: for (var _fun94925_ip = 0;;) switch (_fun94925_ip) {
            case 0:
            case 2: // try_start_0
                var1 = global;
                var2 = var1.Boolean;
                var2 = var2.prototype;
                var3 = var2.valueOf;
                var2 = var3.call;
                var7 = var1.Reflect;
                var6 = var7.construct;
                var5 = var1.Boolean;
                var4 = new Array(0);
                var1 = function() { // Environment: var0
                    var0 = undefined;
                    return var0;
                };
                var1 = var6.bind(var7)(var5, var4, var1);
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                var _closure2_slot0 = var1;
            case 72: // try_end0
                _fun94925_ip = 76;
                continue _fun94925;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot8 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot8 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var4[var0];
    var0 = undefined;
    var3 = var5.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 5;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 7;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var1 = function(arg0) { // Environment: var1
        var3 = function arg0() {
            _fun94929: for (var _fun94929_ip = 0;;) switch (_fun94929_ip) {
                case 0:
                    var4 = this;
                    var0 = _closure1_slot2;
                    var3 = _closure2_slot0;
                    var5 = undefined;
                    var0 = var0.bind(var5)(var4, var3);
                    var10 = new Array(1);
                    var2 = false;
                    var10[0] = var2;
                    var0 = _closure1_slot5;
                    var9 = var0.bind(var5)(var3);
                    var3 = _closure1_slot4;
                    var0 = _closure1_slot8;
                    var0 = var0.bind(var5)();
                    if (var0) {
                        _fun94929_ip = 72;
                        continue _fun94929
                    }
                case 59:
                    var0 = var9.apply;
                    var0 = var0.bind(var9)(var4, var10);
                    _fun94929_ip = 106;
                    continue _fun94929;
                case 72:
                    var6 = global;
                    var8 = var6.Reflect;
                    var7 = var8.construct;
                    var6 = _closure1_slot5;
                    var6 = var6.bind(var5)(var4);
                    var6 = var6.constructor;
                    var0 = var7.bind(var8)(var9, var10, var6);
                case 106:
                    var0 = var3.bind(var5)(var4, var0);
                    var3 = arg0;
                    var0.socket = var3;
                    var0.switchingAccounts = var2;
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var1 = 6;
                    var1 = var3[var1];
                    var4 = var2.bind(var5)(var1);
                    var2 = var0.emitPresenceUpdate;
                    var1 = var2.bind;
                    var3 = var1.bind(var2)(var0);
                    var2 = 5;
                    var1 = 20000;
                    var1 = var4.bind(var5)(var2, var1, var3);
                    var0.didCommit = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot6;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot3;
        var4 = {};
        var0 = 'getInitialState';
        var4.key = var0;
        var0 = function() {
            var1 = _closure1_slot7;
            var0 = var1.getLocalPresence;
            var0 = var0.bind(var1)();
            return var0;
        };
        var4.value = var0;
        var0 = new Array(6);
        var0[0] = var4;
        var4 = {};
        var6 = 'getNextState';
        var4.key = var6;
        var6 = function() {
            var1 = _closure1_slot7;
            var0 = var1.getLocalPresence;
            var0 = var0.bind(var1)();
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'shouldCommit';
        var4.key = var6;
        var6 = function() {
            var0 = this;
            var1 = var0.socket;
            var0 = var1.isSessionEstablished;
            var0 = var0.bind(var1)();
            return var0;
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'emitPresenceUpdate';
        var4.key = var6;
        var6 = function arg0() {
            var0 = arg0;
            var9 = var0.status;
            var8 = var0.since;
            var7 = var0.activities;
            var6 = var0.afk;
            var0 = this;
            var1 = var0.socket;
            var0 = var1.presenceUpdate;
            var10 = var1;
            var0 = var10[var0](var9, var8, var7, var6, var5);
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'handleConnectionOpen';
        var4.key = var6;
        var6 = function() {
            var1 = this;
            var0 = var1.switchingAccounts;
            var3 = !var0;
            var2 = var1.update;
            var0 = {};
            var0 = var2.bind(var1)(var0, var3);
            var0 = false;
            var1.switchingAccounts = var0;
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'handleAccountSwitch';
        var4.key = var6;
        var5 = function() {
            var2 = this;
            var0 = true;
            var2.switchingAccounts = var0;
            var0 = var2.reset;
            var0 = var0.bind(var2)();
            var1 = var2.emitPresenceUpdate;
            var0 = var2.getState;
            var0 = var0.bind(var2)();
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var5;
        var0[5] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var1 = var1.bind(var0)(var3);
    var3 = 8;
    var4 = var4[var3];
    var3 = arg1;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/gateway/LocalPresenceStateManager.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 5657, 12438, 12439, 2]);