// modules/app_database/stores/FileSystemStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var0 = function() {
        _fun40116: for (var _fun40116_ip = 0;;) switch (_fun40116_ip) {
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
            case 70: // try_end0
                _fun40116_ip = 74;
                continue _fun40116;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot10 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot10 = var0;
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
    var3 = 6;
    var3 = var4[var3];
    var7 = var5.bind(var0)(var3);
    var3 = var7.prototype;
    var6 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var10 = 'FileSystemStore';
    var11 = var6;
    var3 = new var11[var7](var10, var9);
    var3 = var3 instanceof Object ? var3 : var6;
    var _closure1_slot8 = var3;
    var3 = 7;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var3 = var3.Millis;
    var6 = var3.MINUTE;
    var3 = 10;
    var6 = var3 * var6;
    var _closure1_slot9 = var6;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var3 = var3.Store;
    var1 = function(arg0) { // Environment: var1
        var3 = function() {
            _fun40120: for (var _fun40120_ip = 0;;) switch (_fun40120_ip) {
                case 0:
                    var5 = this;
                    var0 = _closure1_slot3;
                    var3 = _closure2_slot1;
                    var4 = undefined;
                    var0 = var0.bind(var4)(var5, var3);
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var0 = 8;
                    var0 = var7[var0];
                    var0 = var6.bind(var4)(var0);
                    var12 = new Array(2);
                    var12[0] = var0;
                    var0 = {};
                    var8 = function arg0() {
                        var2 = _closure3_slot0;
                        var1 = var2.handleAppStateUpdate;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.APP_STATE_UPDATE = var8;
                    var8 = function() {
                        var1 = _closure3_slot0;
                        var0 = var1.handlePostConnectionOpen;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    var0.POST_CONNECTION_OPEN = var8;
                    var12[1] = var0;
                    var0 = _closure1_slot6;
                    var11 = var0.bind(var4)(var3);
                    var3 = _closure1_slot5;
                    var0 = _closure1_slot10;
                    var0 = var0.bind(var4)();
                    if (var0) {
                        _fun40120_ip = 118;
                        continue _fun40120
                    }
                case 105:
                    var0 = var11.apply;
                    var0 = var0.bind(var11)(var5, var12);
                    _fun40120_ip = 152;
                    continue _fun40120;
                case 118:
                    var8 = global;
                    var10 = var8.Reflect;
                    var9 = var10.construct;
                    var8 = _closure1_slot6;
                    var8 = var8.bind(var4)(var5);
                    var8 = var8.constructor;
                    var0 = var9.bind(var10)(var11, var12, var8);
                case 152:
                    var0 = var3.bind(var4)(var5, var0);
                    var _closure3_slot0 = var0;
                    var3 = false;
                    var0.isLowDisk = var3;
                    var3 = var0.refresh;
                    var3 = var3.bind(var0)();
                    var5 = var0.waitFor;
                    var3 = 9;
                    var3 = var7[var3];
                    var3 = var6.bind(var4)(var3);
                    var3 = var5.bind(var0)(var3);
                    var3 = global;
                    var3 = var3.setInterval;
                    var2 = _closure1_slot9;
                    var1 = function() { // Environment: var1
                        var1 = _closure3_slot0;
                        var0 = var1.refresh;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    var1 = var3.bind(var4)(var1, var2);
                    return var0;
            }
        };
        var _closure2_slot1 = var3;
        var1 = _closure1_slot7;
        var2 = undefined;
        var0 = arg0;
        var0 = var1.bind(var2)(var3, var0);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'handlePostConnectionOpen';
        var4.key = var0;
        var0 = function() {
            var1 = this;
            var0 = var1.refresh;
            var0 = var0.bind(var1)();
            var0 = false;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(3);
        var0[0] = var4;
        var4 = {};
        var7 = 'handleAppStateUpdate';
        var4.key = var7;
        var7 = function arg0() {
            _fun40125: for (var _fun40125_ip = 0;;) switch (_fun40125_ip) {
                case 0:
                    var1 = this;
                    var0 = arg0;
                    var2 = var0.state;
                    var0 = 'active';
                    if (!(var0 !== var2)) {
                        _fun40125_ip = 29;
                        continue _fun40125
                    }
                case 19:
                    var0 = var1.refresh;
                    var0 = var0.bind(var1)();
                case 29:
                    var0 = false;
                    return var0;
            }
        };
        var4.value = var7;
        var0[1] = var4;
        var4 = {};
        var7 = 'refresh';
        var4.key = var7;
        var7 = _closure1_slot2;
        var6 = function*() { // Environment: var5
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun40127: for (var _fun40127_ip = 0;;) switch (_fun40127_ip) {
                    case 0:
                        StartGenerator();
                        var4 = this;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun40127_ip = 376;
                            continue _fun40127
                        }
                    case 13:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot1;
                        var1 = 9;
                        var1 = var2[var1];
                        var2 = undefined;
                        var3 = var3.bind(var2)(var1);
                        var1 = var3.database;
                        var6 = var1.bind(var3)();
                        var5 = null;
                        var3 = var5 == var6;
                        var1 = undefined;
                        if (var3) {
                            _fun40127_ip = 98;
                            continue _fun40127
                        }
                    case 59:
                        var3 = var6.fsInfo;
                        var7 = var3.bind(var6)();
                        var3 = var5 == var7;
                        var1 = undefined;
                        if (var3) {
                            _fun40127_ip = 98;
                            continue _fun40127
                        }
                    case 80:
                        var6 = var7.catch;
                        var3 = function(arg0) { // Environment: var3
                            var3 = _closure1_slot8;
                            var2 = var3.warn;
                            var1 = "couldn't get fs info";
                            var0 = arg0;
                            var0 = var2.bind(var3)(var1, var0);
                            return var0;
                        };
                        var1 = var6.bind(var7)(var3);
                    case 98:
                        SaveGenerator(address = 102);
                    case 100:
                        return var1;
                    case 102:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun40127_ip = 373;
                            continue _fun40127
                        }
                    case 111:
                        if (!(var5 != var1)) {
                            _fun40127_ip = 370;
                            continue _fun40127
                        }
                    case 118:
                        var3 = var1.fs;
                        var6 = var3.available;
                        var3 = 268435456;
                        var6 = var6 < var3;
                        if (var6) {
                            _fun40127_ip = 178;
                            continue _fun40127
                        }
                    case 143:
                        var3 = var1.fs;
                        var7 = var3.available;
                        var3 = var1.database;
                        var8 = var3.used;
                        var3 = 3;
                        var3 = var3 * var8;
                        var6 = var7 < var3;
                    case 178:
                        if (var6) {
                            _fun40127_ip = 216;
                            continue _fun40127
                        }
                    case 181:
                        var3 = var1.fs;
                        var7 = var3.available;
                        var3 = var1.database;
                        var8 = var3.total;
                        var3 = 2;
                        var3 = var3 * var8;
                        var6 = var7 < var3;
                    case 216:
                        var3 = var1.fs;
                        var7 = var3.available;
                        var3 = 805306368;
                        var7 = var7 > var3;
                        if (!var7) {
                            _fun40127_ip = 276;
                            continue _fun40127
                        }
                    case 241:
                        var3 = var1.fs;
                        var8 = var3.available;
                        var3 = var1.database;
                        var9 = var3.used;
                        var3 = 4;
                        var3 = var3 * var9;
                        var7 = var8 > var3;
                    case 276:
                        if (!var7) {
                            _fun40127_ip = 314;
                            continue _fun40127
                        }
                    case 279:
                        var3 = var1.fs;
                        var8 = var3.available;
                        var3 = var1.database;
                        var9 = var3.total;
                        var3 = 4;
                        var3 = var3 * var9;
                        var7 = var8 > var3;
                    case 314:
                        var3 = !var6;
                        var3 = !var3;
                        if (var6) {
                            _fun40127_ip = 334;
                            continue _fun40127
                        }
                    case 323:
                        var6 = !var7;
                        if (var7) {
                            _fun40127_ip = 331;
                            continue _fun40127
                        }
                    case 329:
                        var6 = null;
                    case 331:
                        var3 = var6;
                    case 334:
                        var5 = var5 != var3;
                        if (!var5) {
                            _fun40127_ip = 351;
                            continue _fun40127
                        }
                    case 341:
                        var6 = var4.isLowDisk;
                        var5 = var6 !== var3;
                    case 351:
                        if (!var5) {
                            _fun40127_ip = 370;
                            continue _fun40127
                        }
                    case 354:
                        var4.isLowDisk = var3;
                        var3 = var4.emitChange;
                        var3 = var3.bind(var4)();
                    case 370:
                        return var2;
                    case 373:
                        return var1;
                    case 376:
                        return var0;
                }
            };
            return var0;
        };
        var6 = var7.bind(var2)(var6);
        var _closure2_slot0 = var6;
        var5 = function() {
            var0 = undefined;
            var3 = _closure2_slot0;
            var2 = var3.apply;
            var0 = arguments;
            var1 = var0;
            var0 = this;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        var4.value = var5;
        var0[2] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var1 = var1.bind(var0)(var3);
    var3 = var1.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var1
        }
    });
    var11 = var3;
    var1 = new var11[var1](var10);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 11;
    var4 = var4[var3];
    var3 = arg1;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/app_database/stores/FileSystemStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 6, 7, 15, 17, 18, 3, 667, 806, 1637, 566, 2]);