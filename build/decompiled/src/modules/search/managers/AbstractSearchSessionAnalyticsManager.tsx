// modules/search/managers/AbstractSearchSessionAnalyticsManager.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function() {
        var0 = {};
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 2;
        var2 = var2[var1];
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        var1 = var2.v4;
        var1 = var1.bind(var2)();
        var0.sessionId = var1;
        var1 = null;
        var0.searchQueryId = var1;
        return var0;
    };
    var _closure1_slot4 = var0;
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
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var1 = function() { // Environment: var1
        var3 = _closure1_slot3;
        var2 = function() {
            var2 = this;
            var3 = _closure1_slot2;
            var1 = _closure2_slot0;
            var0 = undefined;
            var1 = var3.bind(var0)(var2, var1);
            var1 = global;
            var1 = var1.Map;
            var3 = var1.prototype;
            var3 = Object.create(var3, {
                constructor: {
                    value: var1
                }
            });
            var6 = var3;
            var1 = new var6[var1](var5);
            var1 = var1 instanceof Object ? var1 : var3;
            var2.sessions = var1;
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'getSession';
        var0.key = var1;
        var1 = function arg0() {
            _fun71896: for (var _fun71896_ip = 0;;) switch (_fun71896_ip) {
                case 0:
                    var0 = this;
                    var2 = var0.sessions;
                    var1 = var2.get;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var0 = 3;
                    var3 = var3[var0];
                    var0 = undefined;
                    var4 = var4.bind(var0)(var3);
                    var3 = var4.getSearchContextId;
                    var0 = arg0;
                    var0 = var3.bind(var4)(var0);
                    var1 = var1.bind(var2)(var0);
                    var0 = null;
                    var2 = var0 != var1;
                    if (!var2) {
                        _fun71896_ip = 70;
                        continue _fun71896
                    }
                case 67:
                    var0 = var1;
                case 70:
                    return var0;
            }
        };
        var0.value = var1;
        var1 = new Array(9);
        var1[0] = var0;
        var0 = {};
        var5 = 'setSession';
        var0.key = var5;
        var5 = function arg0, arg1() {
            _fun71897: for (var _fun71897_ip = 0;;) switch (_fun71897_ip) {
                case 0:
                    var1 = this;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var0 = 3;
                    var3 = var3[var0];
                    var0 = undefined;
                    var5 = var4.bind(var0)(var3);
                    var4 = var5.getSearchContextId;
                    var3 = arg0;
                    var4 = var4.bind(var5)(var3);
                    var5 = var1.sessions;
                    var3 = var5.get;
                    var5 = var3.bind(var5)(var4);
                    var3 = null;
                    if (!(var3 == var5)) {
                        _fun71897_ip = 72;
                        continue _fun71897
                    }
                case 64:
                    var2 = _closure1_slot4;
                    var5 = var2.bind(var0)();
                case 72:
                    var3 = var1.sessions;
                    var2 = var3.set;
                    var1 = {};
                    var7 = var1;
                    var6 = var5;
                    var5 = copyDataProperties(var7, var6);
                    var6 = arg1;
                    var7 = var1;
                    var5 = copyDataProperties(var7, var6);
                    var1 = var2.bind(var3)(var4, var1);
                    return var0;
            }
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'deleteSession';
        var0.key = var5;
        var5 = function arg0() {
            var0 = this;
            var3 = var0.sessions;
            var2 = var3.delete;
            var4 = _closure1_slot0;
            var1 = _closure1_slot1;
            var0 = 3;
            var1 = var1[var0];
            var0 = undefined;
            var5 = var4.bind(var0)(var1);
            var4 = var5.getSearchContextId;
            var1 = arg0;
            var1 = var4.bind(var5)(var1);
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'getSessionId';
        var0.key = var5;
        var5 = function arg0() {
            _fun71899: for (var _fun71899_ip = 0;;) switch (_fun71899_ip) {
                case 0:
                    var2 = this;
                    var1 = var2.getSession;
                    var0 = arg0;
                    var2 = var1.bind(var2)(var0);
                    var0 = null;
                    var3 = var0 == var2;
                    var1 = undefined;
                    if (var3) {
                        _fun71899_ip = 34;
                        continue _fun71899
                    }
                case 28:
                    var1 = var2.sessionId;
                case 34:
                    var2 = var0 != var1;
                    var0 = null;
                    if (!var2) {
                        _fun71899_ip = 46;
                        continue _fun71899
                    }
                case 43:
                    var0 = var1;
                case 46:
                    return var0;
            }
        };
        var0.value = var5;
        var1[3] = var0;
        var0 = {};
        var5 = 'getQueryId';
        var0.key = var5;
        var5 = function arg0() {
            _fun71900: for (var _fun71900_ip = 0;;) switch (_fun71900_ip) {
                case 0:
                    var2 = this;
                    var1 = var2.getSession;
                    var0 = arg0;
                    var2 = var1.bind(var2)(var0);
                    var0 = null;
                    var3 = var0 == var2;
                    var1 = undefined;
                    if (var3) {
                        _fun71900_ip = 34;
                        continue _fun71900
                    }
                case 28:
                    var1 = var2.searchQueryId;
                case 34:
                    var2 = var0 != var1;
                    var0 = null;
                    if (!var2) {
                        _fun71900_ip = 46;
                        continue _fun71900
                    }
                case 43:
                    var0 = var1;
                case 46:
                    return var0;
            }
        };
        var0.value = var5;
        var1[4] = var0;
        var0 = {};
        var5 = 'refreshQueryId';
        var0.key = var5;
        var5 = function arg0() {
            var4 = this;
            var3 = var4.setSession;
            var2 = {};
            var5 = _closure1_slot0;
            var1 = _closure1_slot1;
            var0 = 2;
            var1 = var1[var0];
            var0 = undefined;
            var5 = var5.bind(var0)(var1);
            var1 = var5.v4;
            var1 = var1.bind(var5)();
            var2.searchQueryId = var1;
            var1 = arg0;
            var1 = var3.bind(var4)(var1, var2);
            return var0;
        };
        var0.value = var5;
        var1[5] = var0;
        var0 = {};
        var5 = 'initialize';
        var0.key = var5;
        var5 = function arg0, arg1() {
            var4 = arg0;
            var3 = this;
            var5 = 1;
            var9 = var5;
            var8 = copyRestArgs(var9);
            var1 = var3._initialize;
            var0 = new Array(1);
            var0[0] = var4;
            var9 = var0;
            var7 = var5;
            var2 = arraySpread(var9, var8, var7);
            var9 = var1;
            var8 = var0;
            var7 = var3;
            var0 = apply(var9, var8, var7);
            var2 = var3.setSession;
            var1 = {};
            var6 = _closure1_slot0;
            var5 = _closure1_slot1;
            var0 = 2;
            var5 = var5[var0];
            var0 = undefined;
            var6 = var6.bind(var0)(var5);
            var5 = var6.v4;
            var5 = var5.bind(var6)();
            var1.sessionId = var5;
            var5 = null;
            var1.searchQueryId = var5;
            var1 = var2.bind(var3)(var4, var1);
            return var0;
        };
        var0.value = var5;
        var1[6] = var0;
        var0 = {};
        var5 = 'terminate';
        var0.key = var5;
        var5 = function arg0() {
            var2 = arg0;
            var1 = this;
            var0 = var1._terminate;
            var0 = var0.bind(var1)(var2);
            var0 = var1.deleteSession;
            var0 = var0.bind(var1)(var2);
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[7] = var0;
        var0 = {};
        var5 = 'transferSession';
        var0.key = var5;
        var4 = function arg0, arg1() {
            _fun71904: for (var _fun71904_ip = 0;;) switch (_fun71904_ip) {
                case 0:
                    var3 = arg0;
                    var9 = arg1;
                    var2 = this;
                    var0 = var2._transferSession;
                    var0 = var0.bind(var2)(var3, var9);
                    var0 = var2.getSession;
                    var1 = var0.bind(var2)(var3);
                    var6 = var2.sessions;
                    var5 = var6.set;
                    var8 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var0 = 3;
                    var4 = var4[var0];
                    var0 = undefined;
                    var8 = var8.bind(var0)(var4);
                    var4 = var8.getSearchContextId;
                    var4 = var4.bind(var8)(var9);
                    var8 = null;
                    if (!(var8 == var1)) {
                        _fun71904_ip = 95;
                        continue _fun71904
                    }
                case 87:
                    var7 = _closure1_slot4;
                    var1 = var7.bind(var0)();
                case 95:
                    var1 = var5.bind(var6)(var4, var1);
                    var1 = var2.deleteSession;
                    var1 = var1.bind(var2)(var3);
                    return var0;
            }
        };
        var0.value = var4;
        var1[8] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/search/managers/AbstractSearchSessionAnalyticsManager.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 491, 8927, 2]);