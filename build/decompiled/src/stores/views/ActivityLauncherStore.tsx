// stores/views/ActivityLauncherStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var3
        _fun89359: for (var _fun89359_ip = 0;;) switch (_fun89359_ip) {
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
                _fun89359_ip = 76;
                continue _fun89359;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot14 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot14 = var0;
    var0 = function(arg0, arg1, arg2) { // Original name: startActivityLaunchTimeout, environment: var3
        _fun89362: for (var _fun89362_ip = 0;;) switch (_fun89362_ip) {
            case 0:
                var3 = arg0;
                var _closure2_slot0 = var3;
                var0 = arg1;
                var _closure2_slot1 = var0;
                var0 = _closure1_slot13;
                var2 = var0[var3];
                var0 = null;
                if (!(var0 != var2)) {
                    _fun89362_ip = 51;
                    continue _fun89362
                }
            case 33:
                var0 = _closure1_slot13;
                var2 = var0[var3];
                var0 = var2.stop;
                var0 = var0.bind(var2)();
            case 51:
                var5 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 8;
                var2 = var2[var0];
                var0 = undefined;
                var2 = var5.bind(var0)(var2);
                var2 = var2.Timeout;
                var5 = var2.prototype;
                var5 = Object.create(var5, {
                    constructor: {
                        value: var2
                    }
                });
                var9 = var5;
                var2 = new var9[var2](var8);
                var2 = var2 instanceof Object ? var2 : var5;
                var6 = var2.start;
                var5 = arg2;
                var4 = function() { // Environment: var4
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 9;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.dispatch;
                    var0 = {};
                    var3 = 'ACTIVITY_LAUNCH_FAIL';
                    var0.type = var3;
                    var4 = _closure2_slot0;
                    var0.applicationId = var4;
                    var3 = _closure2_slot1;
                    var0.activityType = var3;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var4 = var6.bind(var2)(var5, var4);
                var1 = _closure1_slot13;
                var1[var3] = var2;
                return var0;
        }
    };
    var _closure1_slot15 = var0;
    var0 = function(arg0, arg1, arg2) { // Original name: handleActivityStateChanged, environment: var3
        _fun89364: for (var _fun89364_ip = 0;;) switch (_fun89364_ip) {
            case 0:
                var6 = arg0;
                var4 = arg1;
                var0 = arg2;
                var2 = var0.applicationId;
                var5 = var0.remotePartyId;
                var0 = _closure1_slot10;
                var0 = var0.COMPLETE;
                if (!(var6 !== var0)) {
                    _fun89364_ip = 161;
                    continue _fun89364
                }
            case 40:
                var0 = _closure1_slot12;
                var7 = var0[var2];
                var3 = null;
                if (!(var3 == var7)) {
                    _fun89364_ip = 56;
                    continue _fun89364
                }
            case 54:
                var7 = {};
            case 56:
                var0 = {};
                var0.state = var6;
                var0.remotePartyId = var5;
                var7[var4] = var0;
                var0 = _closure1_slot12;
                var0[var2] = var7;
                var0 = _closure1_slot10;
                var0 = var0.FAILED;
                if (!(var6 !== var0)) {
                    _fun89364_ip = 138;
                    continue _fun89364
                }
            case 93:
                var0 = _closure1_slot10;
                var0 = var0.LOADING;
                var0 = var6 === var0;
                if (!var0) {
                    _fun89364_ip = 114;
                    continue _fun89364
                }
            case 110:
                var0 = var3 != var5;
            case 114:
                if (!var0) {
                    _fun89364_ip = 157;
                    continue _fun89364
                }
            case 117:
                var5 = _closure1_slot15;
                var3 = undefined;
                var0 = 15000;
                var0 = var5.bind(var3)(var2, var4, var0);
                _fun89364_ip = 157;
                continue _fun89364;
            case 138:
                var5 = _closure1_slot15;
                var3 = undefined;
                var0 = 120000;
                var0 = var5.bind(var3)(var2, var4, var0);
            case 157:
                var0 = undefined;
                return var0;
            case 161:
                var0 = _closure1_slot12;
                var0 = var0[var2];
                var3 = null;
                if (!(var3 != var0)) {
                    _fun89364_ip = 179;
                    continue _fun89364
                }
            case 175:
                var0 = delete var0[var4];
            case 179:
                var0 = _closure1_slot13;
                var0 = var0[var2];
                var0 = var3 != var0;
                if (!var0) {
                    _fun89364_ip = 220;
                    continue _fun89364
                }
            case 194:
                var3 = _closure1_slot13;
                var4 = var3[var2];
                var3 = var4.stop;
                var3 = var3.bind(var4)();
                var1 = _closure1_slot13;
                var0 = delete var1[var2];
            case 220:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot16 = var0;
    var8 = function(arg0) { // Original name: handleActivityComplete, environment: var3
        var4 = _closure1_slot16;
        var1 = _closure1_slot10;
        var3 = var1.COMPLETE;
        var0 = _closure1_slot11;
        var2 = var0.JOIN;
        var1 = undefined;
        var0 = arg0;
        var0 = var4.bind(var1)(var3, var2, var0);
        return var0;
    };
    var0 = function() { // Original name: handleActivityUpdate, environment: var3
        var1 = global;
        var3 = var1.Object;
        var2 = var3.entries;
        var1 = _closure1_slot12;
        var3 = var2.bind(var3)(var1);
        var2 = var3.map;
        var1 = function(arg0) { // Environment: var0
            _fun89367: for (var _fun89367_ip = 0;;) switch (_fun89367_ip) {
                case 0:
                    var5 = arg0;
                    var0 = var5[Symbol.iterator];
                    var5 = var0().next;
                    var3 = var5().value;
                    var2 = var0;
                    var1 = undefined;
                    var4 = var2 === var1;
                    var2 = undefined;
                    if (var4) {
                        _fun89367_ip = 27;
                        continue _fun89367
                    }
                case 24:
                    var2 = var3;
                case 27:
                    var3 = undefined;
                    if (var4) {
                        _fun89367_ip = 57;
                        continue _fun89367
                    }
                case 32:
                    var6 = var5().value;
                    var5 = var0;
                    var5 = var5 === var1;
                    var3 = undefined;
                    var4 = var5;
                    if (var5) {
                        _fun89367_ip = 57;
                        continue _fun89367
                    }
                case 51:
                    var3 = var6;
                    var4 = var5;
                case 57:
                    if (var4) {
                        _fun89367_ip = 63;
                        continue _fun89367
                    }
                case 60:
                    var0.return();
                case 63:
                    var0 = {};
                    var0.applicationId = var2;
                    var2 = _closure1_slot11;
                    var2 = var2.JOIN;
                    var2 = var3[var2];
                    var3 = null;
                    var3 = var3 == var2;
                    var1 = undefined;
                    if (var3) {
                        _fun89367_ip = 103;
                        continue _fun89367
                    }
                case 97:
                    var1 = var2.remotePartyId;
                case 103:
                    var0.remotePartyId = var1;
                    return var0;
            }
        };
        var3 = var2.bind(var3)(var1);
        var2 = var3.filter;
        var1 = function(arg0) { // Environment: var0
            var0 = arg0;
            var1 = var0.remotePartyId;
            var0 = null;
            var0 = var0 != var1;
            return var0;
        };
        var3 = var2.bind(var3)(var1);
        var1 = false;
        var _closure2_slot0 = var1;
        var2 = var3.forEach;
        var1 = function(arg0) { // Environment: var0
            _fun89369: for (var _fun89369_ip = 0;;) switch (_fun89369_ip) {
                case 0:
                    var0 = arg0;
                    var6 = var0.applicationId;
                    var5 = var0.remotePartyId;
                    var2 = _closure1_slot8;
                    var0 = var2.getApplicationActivity;
                    var3 = var0.bind(var2)(var6);
                    var2 = _closure1_slot9;
                    var0 = var2.getApplicationActivity;
                    var4 = var0.bind(var2)(var6);
                    var7 = null;
                    var8 = var7 == var3;
                    var0 = undefined;
                    var2 = undefined;
                    if (var8) {
                        _fun89369_ip = 80;
                        continue _fun89369
                    }
                case 60:
                    var3 = var3.party;
                    var8 = var7 == var3;
                    var2 = undefined;
                    if (var8) {
                        _fun89369_ip = 80;
                        continue _fun89369
                    }
                case 75:
                    var2 = var3.id;
                case 80:
                    var2 = var2 !== var5;
                    if (!var2) {
                        _fun89369_ip = 120;
                        continue _fun89369
                    }
                case 87:
                    var8 = var7 == var4;
                    var3 = undefined;
                    if (var8) {
                        _fun89369_ip = 116;
                        continue _fun89369
                    }
                case 96:
                    var4 = var4.party;
                    var7 = var7 == var4;
                    var3 = undefined;
                    if (var7) {
                        _fun89369_ip = 116;
                        continue _fun89369
                    }
                case 111:
                    var3 = var4.id;
                case 116:
                    var2 = var3 !== var5;
                case 120:
                    if (var2) {
                        _fun89369_ip = 174;
                        continue _fun89369
                    }
                case 123:
                    var4 = _closure1_slot16;
                    var2 = _closure1_slot10;
                    var3 = var2.COMPLETE;
                    var1 = _closure1_slot11;
                    var2 = var1.JOIN;
                    var1 = {};
                    var1.applicationId = var6;
                    var1.remotePartyId = var5;
                    var1 = var4.bind(var0)(var3, var2, var1);
                    var1 = true;
                    _closure2_slot0 = var1;
                case 174:
                    return var0;
            }
        };
        var1 = var2.bind(var3)(var1);
        var0 = _closure2_slot0;
        return var0;
    };
    var _closure1_slot17 = var0;
    var0 = global;
    var9 = var0.Object;
    var7 = var9.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var9)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var6.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 2;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 3;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 4;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var1 = 5;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot8 = var1;
    var1 = 6;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot9 = var1;
    var1 = 7;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var7 = var1.ActivityActionStates;
    var _closure1_slot10 = var7;
    var1 = var1.ActivityActionTypes;
    var _closure1_slot11 = var1;
    var1 = {};
    var _closure1_slot12 = var1;
    var1 = {};
    var _closure1_slot13 = var1;
    var1 = 10;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.Store;
    var1 = function(arg0) { // Environment: var3
        var3 = function() { // Original name: ActivityLauncherStore, environment: var5
            _fun89371: for (var _fun89371_ip = 0;;) switch (_fun89371_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot3;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot6;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot5;
                    var0 = _closure1_slot14;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun89371_ip = 69;
                        continue _fun89371
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun89371_ip = 105;
                    continue _fun89371;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot6;
                    var5 = var5.bind(var2)(var3);
                    var5 = var5.constructor;
                    var4 = arguments;
                    var0 = var6.bind(var7)(var8, var4, var5);
                case 105:
                    var0 = var1.bind(var2)(var3, var0);
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'initialize';
        var4.key = var0;
        var0 = function() { // Original name: value, environment: var5
            var3 = this;
            var2 = var3.syncWith;
            var4 = _closure1_slot8;
            var1 = new Array(2);
            var1[0] = var4;
            var4 = _closure1_slot9;
            var1[1] = var4;
            var0 = _closure1_slot17;
            var0 = var2.bind(var3)(var1, var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(3);
        var0[0] = var4;
        var4 = {};
        var6 = 'getState';
        var4.key = var6;
        var6 = function(arg0, arg1) { // Original name: value, environment: var5
            _fun89373: for (var _fun89373_ip = 0;;) switch (_fun89373_ip) {
                case 0:
                    var1 = _closure1_slot12;
                    var0 = arg0;
                    var4 = var1[var0];
                    var2 = null;
                    var1 = var2 == var4;
                    var0 = undefined;
                    if (var1) {
                        _fun89373_ip = 46;
                        continue _fun89373
                    }
                case 25:
                    var1 = arg1;
                    var1 = var4[var1];
                    var2 = var2 == var1;
                    var0 = undefined;
                    if (var2) {
                        _fun89373_ip = 46;
                        continue _fun89373
                    }
                case 41:
                    var0 = var1.state;
                case 46:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getStates';
        var4.key = var6;
        var5 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot12;
            return var0;
        };
        var4.value = var5;
        var0[2] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var1.bind(var0)(var7);
    var1 = 'ActivityLauncherStore';
    var7.displayName = var1;
    var1 = 9;
    var1 = var5[var1];
    var12 = var6.bind(var0)(var1);
    var1 = {};
    var9 = function(arg0) { // Original name: handleOverlayInitialize, environment: var3
        var0 = arg0;
        var2 = var0.activityLauncherStates;
        var1 = {};
        var3 = var1;
        var0 = copyDataProperties(var3, var2);
        _closure1_slot12 = var1;
        var0 = undefined;
        return var0;
    };
    var1.OVERLAY_INITIALIZE = var9;
    var9 = function(arg0) { // Original name: ACTIVITY_JOIN_LOADING, environment: var3
        var4 = _closure1_slot16;
        var1 = _closure1_slot10;
        var3 = var1.LOADING;
        var0 = _closure1_slot11;
        var2 = var0.JOIN;
        var1 = undefined;
        var0 = arg0;
        var0 = var4.bind(var1)(var3, var2, var0);
        return var0;
    };
    var1.ACTIVITY_JOIN_LOADING = var9;
    var9 = function(arg0) { // Original name: ACTIVITY_JOIN_FAILED, environment: var3
        var4 = _closure1_slot16;
        var1 = _closure1_slot10;
        var3 = var1.FAILED;
        var0 = _closure1_slot11;
        var2 = var0.JOIN;
        var1 = undefined;
        var0 = arg0;
        var0 = var4.bind(var1)(var3, var2, var0);
        return var0;
    };
    var1.ACTIVITY_JOIN_FAILED = var9;
    var1.ACTIVITY_JOIN = var8;
    var1.EMBEDDED_ACTIVITY_CLOSE = var8;
    var3 = function(arg0) { // Original name: handleActivityLaunchFail, environment: var3
        _fun89378: for (var _fun89378_ip = 0;;) switch (_fun89378_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.applicationId;
                var1 = var0.activityType;
                var0 = _closure1_slot12;
                var0 = var0[var2];
                var2 = null;
                if (!(var2 != var0)) {
                    _fun89378_ip = 39;
                    continue _fun89378
                }
            case 31:
                var0 = delete var0[var1];
                var0 = undefined;
                return var0;
            case 39:
                var0 = false;
                return var0;
        }
    };
    var1.ACTIVITY_LAUNCH_FAIL = var3;
    var3 = var7.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var13 = var3;
    var11 = var1;
    var1 = new var13[var7](var12, var11, var10);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 11;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'stores/views/ActivityLauncherStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 5616, 5615, 660, 3587, 806, 566, 2]);