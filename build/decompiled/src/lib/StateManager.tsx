// lib/StateManager.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
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
    var1 = function() { // Environment: var1
        var3 = _closure1_slot3;
        var2 = function() { // Original name: StateManager, environment: var4
            _fun95522: for (var _fun95522_ip = 0;;) switch (_fun95522_ip) {
                case 0:
                    var1 = arguments[0];
                    var2 = this;
                    var0 = undefined;
                    if (!(var1 === var0)) {
                        _fun95522_ip = 14;
                        continue _fun95522
                    }
                case 12:
                    var1 = true;
                case 14:
                    var4 = _closure1_slot2;
                    var3 = _closure2_slot0;
                    var3 = var4.bind(var0)(var2, var3);
                    var2.alwaysUpdateState = var1;
                    var1 = false;
                    var2.dirty = var1;
                    var1 = var2.getInitialState;
                    var1 = var1.bind(var2)();
                    var2.state = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'shouldCommit';
        var0.key = var1;
        var1 = function() { // Original name: value, environment: var4
            var0 = true;
            return var0;
        };
        var0.value = var1;
        var1 = new Array(6);
        var1[0] = var0;
        var0 = {};
        var5 = 'setState';
        var0.key = var5;
        var5 = function(arg0) { // Original name: value, environment: var4
            var1 = this;
            var0 = {};
            var3 = var1.state;
            var4 = var0;
            var2 = copyDataProperties(var4, var3);
            var3 = arg0;
            var4 = var0;
            var2 = copyDataProperties(var4, var3);
            var1.state = var0;
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'getState';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var4
            var0 = this;
            var0 = var0.state;
            return var0;
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'reset';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var4
            var1 = this;
            var0 = false;
            var1.dirty = var0;
            var0 = var1.getInitialState;
            var0 = var0.bind(var1)();
            var1.state = var0;
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[3] = var0;
        var0 = {};
        var5 = 'update';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var4
            _fun95527: for (var _fun95527_ip = 0;;) switch (_fun95527_ip) {
                case 0:
                    var5 = arguments[0];
                    var0 = arguments[1];
                    var3 = this;
                    var4 = undefined;
                    if (!(var5 === var4)) {
                        _fun95527_ip = 17;
                        continue _fun95527
                    }
                case 15:
                    var5 = {};
                case 17:
                    if (!(var0 === var4)) {
                        _fun95527_ip = 23;
                        continue _fun95527
                    }
                case 21:
                    var0 = false;
                case 23:
                    var2 = var3.getNextState;
                    var1 = {};
                    var11 = var3.state;
                    var12 = var1;
                    var6 = copyDataProperties(var12, var11);
                    var12 = var1;
                    var11 = var5;
                    var5 = copyDataProperties(var12, var11);
                    var1 = var2.bind(var3)(var1);
                    if (var0) {
                        _fun95527_ip = 173;
                        continue _fun95527
                    }
                case 63:
                    var0 = global;
                    var2 = var0.Object;
                    var0 = var2.keys;
                    var7 = var0.bind(var2)(var1);
                    var0 = var7.length;
                    var6 = 0;
                    var0 = var6 < var0;
                    var2 = 2;
                    if (!var0) {
                        _fun95527_ip = 221;
                        continue _fun95527
                    }
                case 101:
                    var8 = var7[var6];
                    var0 = var3.dirty;
                    if (var0) {
                        _fun95527_ip = 153;
                        continue _fun95527
                    }
                case 114:
                    var10 = _closure1_slot0;
                    var9 = _closure1_slot1;
                    var9 = var9[var2];
                    var10 = var10.bind(var4)(var9);
                    var9 = var3.state;
                    var9 = var9[var8];
                    var8 = var1[var8];
                    var8 = var10.bind(var4)(var9, var8);
                    var0 = !var8;
                case 153:
                    var3.dirty = var0;
                    var6 = var6 + 1;
                    var0 = var7.length;
                    if (var6 < var0) {
                        _fun95527_ip = 101;
                        continue _fun95527
                    }
                case 171:
                    _fun95527_ip = 221;
                    continue _fun95527;
                case 173:
                    var2 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var0 = 2;
                    var0 = var5[var0];
                    var2 = var2.bind(var4)(var0);
                    var0 = var3.getInitialState;
                    var0 = var0.bind(var3)();
                    var0 = var2.bind(var4)(var1, var0);
                    var0 = !var0;
                    var3.dirty = var0;
                case 221:
                    var0 = var3.dirty;
                    if (!var0) {
                        _fun95527_ip = 242;
                        continue _fun95527
                    }
                case 230:
                    var2 = var3.shouldCommit;
                    var0 = var2.bind(var3)();
                case 242:
                    var2 = var0;
                    if (var2) {
                        _fun95527_ip = 254;
                        continue _fun95527
                    }
                case 248:
                    var2 = var3.alwaysUpdateState;
                case 254:
                    if (!var2) {
                        _fun95527_ip = 263;
                        continue _fun95527
                    }
                case 257:
                    var3.state = var1;
                case 263:
                    var1 = !var0;
                    var0 = !var1;
                    if (var1) {
                        _fun95527_ip = 298;
                        continue _fun95527
                    }
                case 272:
                    var1 = false;
                    var3.dirty = var1;
                    var2 = var3.didCommit;
                    var1 = var3.state;
                    var1 = var2.bind(var3)(var1);
                    var0 = true;
                case 298:
                    return var0;
            }
        };
        var0.value = var5;
        var1[4] = var0;
        var0 = {};
        var5 = 'forceUpdate';
        var0.key = var5;
        var4 = function() { // Original name: value, environment: var4
            var2 = this;
            var0 = false;
            var2.dirty = var0;
            var1 = var2.didCommit;
            var0 = var2.state;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var0.value = var4;
        var1[5] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var3 = 3;
    var4 = var4[var3];
    var3 = arg1;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'lib/StateManager.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 644, 2]);