// modules/connectivity/native/ConnectivityStatusStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var6;
    var0 = function() {
        _fun95266: for (var _fun95266_ip = 0;;) switch (_fun95266_ip) {
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
                _fun95266_ip = 76;
                continue _fun95266;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot26 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot26 = var0;
    var0 = function() {
        _fun95269: for (var _fun95269_ip = 0;;) switch (_fun95269_ip) {
            case 0:
                var2 = _closure1_slot19;
                var0 = null;
                var2 = var0 != var2;
                var0 = 0;
                if (!var2) {
                    _fun95269_ip = 46;
                    continue _fun95269
                }
            case 18:
                var1 = _closure1_slot19;
                var2 = -var1;
                var1 = global;
                var3 = var1.Date;
                var1 = var3.now;
                var1 = var1.bind(var3)();
                var0 = var2 + var1;
            case 46:
                return var0;
        }
    };
    var _closure1_slot27 = var0;
    var0 = function() {
        _fun95270: for (var _fun95270_ip = 0;;) switch (_fun95270_ip) {
            case 0:
                var2 = _closure1_slot22;
                var5 = null;
                if (!(var5 != var2)) {
                    _fun95270_ip = 430;
                    continue _fun95270
                }
            case 18:
                var2 = _closure1_slot21;
                if (!(var5 != var2)) {
                    _fun95270_ip = 430;
                    continue _fun95270
                }
            case 29:
                var2 = _closure1_slot22;
                if (var2) {
                    _fun95270_ip = 81;
                    continue _fun95270
                }
            case 36:
                var2 = _closure1_slot21;
                if (!var2) {
                    _fun95270_ip = 57;
                    continue _fun95270
                }
            case 43:
                var2 = _closure1_slot23;
                if (!var2) {
                    _fun95270_ip = 69;
                    continue _fun95270
                }
            case 50:
                var2 = _closure1_slot24;
                if (var2) {
                    _fun95270_ip = 69;
                    continue _fun95270
                }
            case 57:
                var2 = _closure1_slot13;
                var3 = var2.ONLINE;
                _fun95270_ip = 79;
                continue _fun95270;
            case 69:
                var2 = _closure1_slot13;
                var3 = var2.CONNECTING;
            case 79:
                _fun95270_ip = 91;
                continue _fun95270;
            case 81:
                var2 = _closure1_slot13;
                var3 = var2.OFFLINE;
            case 91:
                var _closure2_slot0 = var3;
                var2 = _closure1_slot16;
                var2 = var2 === var3;
                if (!var2) {
                    _fun95270_ip = 114;
                    continue _fun95270
                }
            case 106:
                var4 = _closure1_slot19;
                var2 = var5 != var4;
            case 114:
                if (var2) {
                    _fun95270_ip = 254;
                    continue _fun95270
                }
            case 120:
                var2 = global;
                var4 = var2.Date;
                var2 = var4.now;
                var2 = var2.bind(var4)();
                _closure1_slot19 = var2;
                var8 = _closure1_slot16;
                var2 = _closure1_slot13;
                var4 = var2.ONLINE;
                var2 = 0;
                if (!(var4 !== var3)) {
                    _fun95270_ip = 250;
                    continue _fun95270
                }
            case 161:
                var4 = _closure1_slot13;
                var4 = var4.OFFLINE;
                var7 = 1000;
                var2 = var7;
                if (!(var4 !== var3)) {
                    _fun95270_ip = 250;
                    continue _fun95270
                }
            case 184:
                var4 = _closure1_slot13;
                var4 = var4.CONNECTING;
                var6 = undefined;
                var2 = undefined;
                if (!(var4 === var3)) {
                    _fun95270_ip = 250;
                    continue _fun95270
                }
            case 202:
                var4 = _closure1_slot13;
                var5 = var4.OFFLINE;
                var4 = var7;
                if (!(var8 !== var5)) {
                    _fun95270_ip = 247;
                    continue _fun95270
                }
            case 219:
                var8 = _closure1_slot7;
                var5 = var8.hasCache;
                var5 = var5.bind(var8)();
                var4 = var7;
                if (!var5) {
                    _fun95270_ip = 247;
                    continue _fun95270
                }
            case 239:
                var5 = _closure1_slot14;
                var4 = var5.bind(var6)();
            case 247:
                var2 = var4;
            case 250:
                _closure1_slot20 = var2;
            case 254:
                var4 = _closure1_slot20;
                var5 = _closure1_slot27;
                var2 = undefined;
                var2 = var5.bind(var2)();
                var6 = var4 - var2;
                var2 = global;
                var7 = var2.Math;
                var4 = var7.round;
                var5 = 100;
                var4 = var4.bind(var7)(var5);
                var4 = var6 / var4;
                var6 = var4 * var5;
                var5 = var2.Math;
                var4 = var5.max;
                var2 = 0;
                var2 = var4.bind(var5)(var6, var2);
                var4 = _closure1_slot16;
                var4 = var4 === var3;
                if (!var4) {
                    _fun95270_ip = 339;
                    continue _fun95270
                }
            case 331:
                var5 = _closure1_slot17;
                var4 = var5 === var2;
            case 339:
                if (var4) {
                    _fun95270_ip = 426;
                    continue _fun95270
                }
            case 342:
                _closure1_slot16 = var3;
                _closure1_slot17 = var2;
                var4 = _closure1_slot12;
                var3 = var4.verbose;
                var5 = _closure1_slot16;
                var2 = 'State set to ';
                var6 = var2 + var5;
                var5 = _closure1_slot17;
                var2 = ', with delay: ';
                var2 = var6 + var2;
                var2 = var2 + var5;
                var2 = var3.bind(var4)(var2);
                var4 = _closure1_slot15;
                var3 = var4.start;
                var2 = _closure1_slot17;
                var1 = function() { // Environment: var0
                    _fun95271: for (var _fun95271_ip = 0;;) switch (_fun95271_ip) {
                        case 0:
                            var2 = _closure1_slot18;
                            var1 = _closure1_slot16;
                            if (!(var2 !== var1)) {
                                _fun95271_ip = 66;
                                continue _fun95271
                            }
                        case 15:
                            var4 = _closure1_slot12;
                            var3 = var4.verbose;
                            var2 = _closure1_slot16;
                            var1 = 'New connectivity state published:';
                            var1 = var3.bind(var4)(var1, var2);
                            var1 = _closure2_slot0;
                            _closure1_slot18 = var1;
                            var1 = _closure1_slot25;
                            var0 = var1.emitChange;
                            var0 = var0.bind(var1)();
                        case 66:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = true;
                var0 = var3.bind(var4)(var2, var1, var0);
            case 426:
                var0 = false;
                return var0;
            case 430:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot28 = var0;
    var7 = function() {
        var0 = false;
        _closure1_slot23 = var0;
        var4 = _closure1_slot12;
        var3 = var4.verbose;
        var2 = 'Connection closed';
        var2 = var3.bind(var4)(var2);
        var2 = _closure1_slot28;
        var1 = undefined;
        var1 = var2.bind(var1)();
        return var0;
    };
    var0 = function() {
        _fun95273: for (var _fun95273_ip = 0;;) switch (_fun95273_ip) {
            case 0:
                var2 = _closure1_slot10;
                var0 = var2.getChannelId;
                var3 = var0.bind(var2)();
                var0 = null;
                if (!(var0 != var3)) {
                    _fun95273_ip = 95;
                    continue _fun95273
                }
            case 23:
                var2 = _closure1_slot9;
                var0 = var2.isLoadingMessages;
                var2 = var0.bind(var2)(var3);
                var0 = _closure1_slot24;
                var0 = var2 !== var0;
                if (!var0) {
                    _fun95273_ip = 93;
                    continue _fun95273
                }
            case 51:
                _closure1_slot24 = var2;
                var5 = _closure1_slot12;
                var4 = var5.verbose;
                var3 = _closure1_slot24;
                var2 = 'Loading messages: ';
                var2 = var4.bind(var5)(var2, var3);
                var2 = _closure1_slot28;
                var1 = undefined;
                var1 = var2.bind(var1)();
                var0 = false;
            case 93:
                return var0;
            case 95:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot29 = var0;
    var0 = function() {
        _fun95274: for (var _fun95274_ip = 0;;) switch (_fun95274_ip) {
            case 0:
                var2 = _closure1_slot8;
                var0 = var2.isAuthenticated;
                var2 = var0.bind(var2)();
                var0 = _closure1_slot21;
                var0 = var0 !== var2;
                if (!var0) {
                    _fun95274_ip = 70;
                    continue _fun95274
                }
            case 28:
                _closure1_slot21 = var2;
                var5 = _closure1_slot12;
                var4 = var5.verbose;
                var3 = _closure1_slot21;
                var2 = 'Is authenticated: ';
                var2 = var4.bind(var5)(var2, var3);
                var2 = _closure1_slot28;
                var1 = undefined;
                var1 = var2.bind(var1)();
                var0 = false;
            case 70:
                return var0;
        }
    };
    var _closure1_slot30 = var0;
    var0 = global;
    var9 = var0.Object;
    var3 = var9.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var9)(var2, var0, var1);
    var11 = 0;
    var1 = var6[var11];
    var0 = undefined;
    var1 = var8.bind(var0)(var1);
    var _closure1_slot2 = var1;
    var1 = 1;
    var1 = var6[var1];
    var1 = var8.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 2;
    var1 = var6[var1];
    var1 = var8.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 3;
    var1 = var6[var1];
    var1 = var8.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 4;
    var1 = var6[var1];
    var1 = var8.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 5;
    var1 = var6[var1];
    var1 = var8.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var1 = 6;
    var1 = var6[var1];
    var1 = var8.bind(var0)(var1);
    var _closure1_slot8 = var1;
    var1 = 7;
    var1 = var6[var1];
    var1 = var8.bind(var0)(var1);
    var _closure1_slot9 = var1;
    var1 = 8;
    var1 = var6[var1];
    var1 = var8.bind(var0)(var1);
    var _closure1_slot10 = var1;
    var1 = 9;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var1 = var1.AppStates;
    var _closure1_slot11 = var1;
    var1 = 10;
    var1 = var6[var1];
    var1 = var8.bind(var0)(var1);
    var3 = var1.prototype;
    var9 = Object.create(var3, {
        constructor: {
            value: var1
        }
    });
    var3 = 'ConnectivityStatusStore';
    var16 = var9;
    var15 = var3;
    var1 = new var16[var1](var15, var14);
    var1 = var1 instanceof Object ? var1 : var9;
    var _closure1_slot12 = var1;
    var1 = {};
    var9 = 'ONLINE';
    var1.ONLINE = var9;
    var9 = 'OFFLINE';
    var1.OFFLINE = var9;
    var9 = 'CONNECTING';
    var1.CONNECTING = var9;
    var _closure1_slot13 = var1;
    var10 = function() {
        _fun95275: for (var _fun95275_ip = 0;;) switch (_fun95275_ip) {
            case 0:
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 11;
                var1 = var1[var0];
                var0 = undefined;
                var2 = var2.bind(var0)(var1);
                var1 = var2.getConfig;
                var0 = {};
                var3 = 'ConnectivityStatusStore';
                var0.location = var3;
                var0 = var1.bind(var2)(var0);
                var1 = var0.timeoutMs;
                var0 = null;
                var2 = var0 != var1;
                var0 = 10000;
                if (!var2) {
                    _fun95275_ip = 72;
                    continue _fun95275
                }
            case 69:
                var0 = var1;
            case 72:
                return var0;
        }
    };
    var _closure1_slot14 = var10;
    var9 = 12;
    var9 = var6[var9];
    var9 = var5.bind(var0)(var9);
    var9 = var9.Timeout;
    var12 = var9.prototype;
    var12 = Object.create(var12, {
        constructor: {
            value: var9
        }
    });
    var16 = var12;
    var9 = new var16[var9](var15);
    var9 = var9 instanceof Object ? var9 : var12;
    var _closure1_slot15 = var9;
    var9 = null;
    var _closure1_slot16 = var9;
    var _closure1_slot17 = var11;
    var11 = var1.ONLINE;
    var _closure1_slot18 = var11;
    var _closure1_slot19 = var9;
    var10 = var10.bind(var0)();
    var _closure1_slot20 = var10;
    var _closure1_slot21 = var9;
    var _closure1_slot22 = var9;
    var9 = false;
    var _closure1_slot23 = var9;
    var _closure1_slot24 = var9;
    var9 = 14;
    var9 = var6[var9];
    var9 = var8.bind(var0)(var9);
    var10 = var9.Store;
    var9 = function(arg0) { // Environment: var4
        var3 = function() {
            _fun95277: for (var _fun95277_ip = 0;;) switch (_fun95277_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot2;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot5;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot4;
                    var0 = _closure1_slot26;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun95277_ip = 69;
                        continue _fun95277
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun95277_ip = 105;
                    continue _fun95277;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot5;
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
        var4 = _closure1_slot6;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot3;
        var4 = {};
        var0 = 'initialize';
        var4.key = var0;
        var0 = function() {
            var3 = this;
            var6 = var3.waitFor;
            var10 = _closure1_slot8;
            var9 = _closure1_slot7;
            var8 = _closure1_slot9;
            var7 = _closure1_slot10;
            var11 = var3;
            var1 = var11[var6](var10, var9, var8, var7, var6);
            var4 = var3.syncWith;
            var1 = _closure1_slot9;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = _closure1_slot29;
            var1 = var4.bind(var3)(var2, var1);
            var2 = var3.syncWith;
            var4 = _closure1_slot8;
            var1 = new Array(1);
            var1[0] = var4;
            var0 = _closure1_slot30;
            var0 = var2.bind(var3)(var1, var0);
            var1 = function() {
                var3 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 13;
                var6 = var4[var2];
                var0 = undefined;
                var8 = var3.bind(var0)(var6);
                var7 = var8.addOfflineCallback;
                var6 = function() { // Environment: var5
                    var1 = true;
                    _closure1_slot22 = var1;
                    var1 = _closure1_slot28;
                    var0 = undefined;
                    var1 = var1.bind(var0)();
                    return var0;
                };
                var6 = var7.bind(var8)(var6);
                var6 = var4[var2];
                var7 = var3.bind(var0)(var6);
                var6 = var7.addOnlineCallback;
                var5 = function() { // Environment: var5
                    var1 = false;
                    _closure1_slot22 = var1;
                    var1 = _closure1_slot28;
                    var0 = undefined;
                    var1 = var1.bind(var0)();
                    return var0;
                };
                var5 = var6.bind(var7)(var5);
                var2 = var4[var2];
                var3 = var3.bind(var0)(var2);
                var2 = var3.isOnline;
                var2 = var2.bind(var3)();
                var2 = !var2;
                _closure1_slot22 = var2;
                var3 = _closure1_slot8;
                var2 = var3.isAuthenticated;
                var2 = var2.bind(var3)();
                _closure1_slot21 = var2;
                var1 = _closure1_slot28;
                var1 = var1.bind(var0)();
                return var0;
            };
            var0 = undefined;
            var1 = var1.bind(var0)();
            return var0;
        };
        var4.value = var0;
        var0 = new Array(3);
        var0[0] = var4;
        var4 = {};
        var6 = 'isConnected';
        var4.key = var6;
        var6 = function() {
            var1 = _closure1_slot18;
            var0 = _closure1_slot13;
            var0 = var0.ONLINE;
            var0 = var1 === var0;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getState';
        var4.key = var6;
        var5 = function() {
            var0 = _closure1_slot18;
            return var0;
        };
        var4.value = var5;
        var0[2] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var9 = var9.bind(var0)(var10);
    var9.displayName = var3;
    var3 = 15;
    var3 = var6[var3];
    var15 = var8.bind(var0)(var3);
    var3 = {};
    var10 = function() {
        var1 = true;
        _closure1_slot23 = var1;
        var3 = _closure1_slot12;
        var2 = var3.verbose;
        var1 = 'Connection open.';
        var1 = var2.bind(var3)(var1);
        var1 = _closure1_slot28;
        var0 = undefined;
        var0 = var1.bind(var0)();
        var0 = false;
        return var0;
    };
    var3.CONNECTION_OPEN = var10;
    var10 = function() {
        var1 = true;
        _closure1_slot23 = var1;
        var3 = _closure1_slot12;
        var2 = var3.verbose;
        var1 = 'Connection resumed.';
        var1 = var2.bind(var3)(var1);
        var1 = _closure1_slot28;
        var0 = undefined;
        var0 = var1.bind(var0)();
        var0 = false;
        return var0;
    };
    var3.CONNECTION_RESUMED = var10;
    var3.CONNECTION_CLOSED = var7;
    var3.CONNECTION_INTERRUPTED = var7;
    var7 = function arg0() {
        _fun95286: for (var _fun95286_ip = 0;;) switch (_fun95286_ip) {
            case 0:
                var2 = arg0;
                var3 = var2.state;
                var0 = _closure1_slot11;
                var0 = var0.INACTIVE;
                var0 = var3 !== var0;
                if (!var0) {
                    _fun95286_ip = 167;
                    continue _fun95286
                }
            case 31:
                var4 = var2.state;
                var3 = _closure1_slot11;
                var3 = var3.BACKGROUND;
                if (!(var4 === var3)) {
                    _fun95286_ip = 72;
                    continue _fun95286
                }
            case 50:
                var4 = _closure1_slot20;
                var5 = _closure1_slot27;
                var3 = undefined;
                var3 = var5.bind(var3)();
                var3 = var4 - var3;
                _closure1_slot20 = var3;
            case 72:
                var4 = var2.state;
                var3 = _closure1_slot11;
                var3 = var3.ACTIVE;
                var3 = var4 === var3;
                if (!var3) {
                    _fun95286_ip = 104;
                    continue _fun95286
                }
            case 94:
                var5 = _closure1_slot19;
                var4 = null;
                var3 = var4 != var5;
            case 104:
                if (!var3) {
                    _fun95286_ip = 128;
                    continue _fun95286
                }
            case 107:
                var3 = global;
                var4 = var3.Date;
                var3 = var4.now;
                var3 = var3.bind(var4)();
                _closure1_slot19 = var3;
            case 128:
                var5 = _closure1_slot12;
                var4 = var5.verbose;
                var3 = var2.state;
                var2 = 'App state updated: ';
                var2 = var4.bind(var5)(var2, var3);
                var2 = _closure1_slot28;
                var1 = undefined;
                var1 = var2.bind(var1)();
                var0 = false;
            case 167:
                return var0;
        }
    };
    var3.APP_STATE_UPDATE = var7;
    var7 = var9.prototype;
    var7 = Object.create(var7, {
        constructor: {
            value: var9
        }
    });
    var16 = var7;
    var14 = var3;
    var3 = new var16[var9](var15, var14, var13);
    var3 = var3 instanceof Object ? var3 : var7;
    var _closure1_slot25 = var3;
    var4 = 16;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/connectivity/native/ConnectivityStatusStore.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.ConnectivityState = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 4331, 1216, 4215, 1661, 660, 3, 12401, 3591, 1444, 566, 806, 2]);