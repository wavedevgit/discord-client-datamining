// modules/libdiscore/DispatcherBridge.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var9 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var5;
    var0 = function arg0, arg1() {
        _fun118132: for (var _fun118132_ip = 0;;) switch (_fun118132_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun118132_ip = 46;
                    continue _fun118132
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun118132_ip = 55;
                    continue _fun118132
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun118132_ip = 345;
                    continue _fun118132
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun118132_ip = 323;
                    continue _fun118132
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun118132_ip = 283;
                    continue _fun118132
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun118132_ip = 270;
                    continue _fun118132
                }
            case 110:
                var6 = {};
                var8 = var6.toString;
                var6 = var8.call;
                var10 = var6.bind(var8)(var2);
                var9 = var10.slice;
                var8 = 8;
                var6 = -1;
                var8 = var9.bind(var10)(var8, var6);
                var6 = 'Object';
                var6 = var6 === var8;
                if (!var6) {
                    _fun118132_ip = 163;
                    continue _fun118132
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun118132_ip = 179;
                    continue _fun118132
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun118132_ip = 249;
                    continue _fun118132
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun118132_ip = 249;
                    continue _fun118132
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun118132_ip = 234;
                    continue _fun118132
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun118132_ip = 247;
                    continue _fun118132
                }
            case 234:
                var8 = _closure1_slot12;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun118132_ip = 265;
                continue _fun118132;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun118132_ip = 283;
                continue _fun118132;
            case 270:
                var6 = _closure1_slot12;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun118132_ip = 323;
                    continue _fun118132
                }
            case 289:
                var6 = var4.TypeError;
                var4 = var6.prototype;
                var5 = Object.create(var4, {
                    constructor: {
                        value: var6
                    }
                });
                var12 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
                var13 = var5;
                var4 = new var13[var6](var12, var11);
                var4 = var4 instanceof Object ? var4 : var5;
                throw var4;
            case 323:
                if (!var3) {
                    _fun118132_ip = 330;
                    continue _fun118132
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun118133: for (var _fun118133_ip = 0;;) switch (_fun118133_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun118133_ip = 56;
                                continue _fun118133
                            }
                        case 20:
                            var0 = {};
                            var1 = false;
                            var0.done = var1;
                            var2 = _closure2_slot0;
                            var1 = _closure2_slot1;
                            var1 = parseFloat(var1);
                            var3 = var1 + 1;
                            _closure2_slot1 = var3;
                            var1 = var2[var1];
                            var0.value = var1;
                            _fun118133_ip = 67;
                            continue _fun118133;
                        case 56:
                            var1 = {};
                            var2 = true;
                            var1.done = var2;
                            var0 = var1;
                        case 67:
                            return var0;
                    }
                };
                return var0;
            case 345:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot11 = var0;
    var0 = function arg0, arg1() {
        _fun118134: for (var _fun118134_ip = 0;;) switch (_fun118134_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun118134_ip = 23;
                    continue _fun118134
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun118134_ip = 33;
                    continue _fun118134
                }
            case 28:
                var1 = var3.length;
            case 33:
                var0 = global;
                var0 = var0.Array;
                var0 = var0.bind(var2)(var1);
                var2 = 0;
                var4 = var2 < var1;
                if (!var4) {
                    _fun118134_ip = 70;
                    continue _fun118134
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun118134_ip = 55;
                    continue _fun118134
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot12 = var0;
    var7 = global;
    var8 = var7.Object;
    var6 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var9.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var9.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var9.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var8 = var9.bind(var0)(var3);
    var3 = 4;
    var3 = var5[var3];
    var3 = var9.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 5;
    var3 = var5[var3];
    var6 = var9.bind(var0)(var3);
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AnalyticEvents;
    var _closure1_slot7 = var3;
    var3 = 7;
    var3 = var5[var3];
    var10 = var9.bind(var0)(var3);
    var3 = var10.prototype;
    var9 = Object.create(var3, {
        constructor: {
            value: var10
        }
    });
    var13 = 'DispatcherBridge';
    var14 = var9;
    var3 = new var14[var10](var13, var12);
    var3 = var3 instanceof Object ? var3 : var9;
    var _closure1_slot8 = var3;
    var3 = new Array(2);
    var3[0] = var8;
    var3[1] = var6;
    var6 = {};
    var8 = function arg0() {
        var0 = {};
        var3 = arg0;
        var4 = var0;
        var1 = copyDataProperties(var4, var3);
        var2 = _closure1_slot6;
        var1 = var2.getId;
        var2 = var1.bind(var2)();
        var1 = 'currentUserId';
        var0[var1] = var2;
        return var0;
    };
    var6.GUILD_MEMBER_ADD = var8;
    var8 = function arg0() {
        var0 = {};
        var1 = arg0;
        var1 = var1.guilds;
        var0.guilds = var1;
        return var0;
    };
    var6.CONNECTION_OPEN = var8;
    var8 = function arg0() {
        var0 = {};
        var1 = arg0;
        var1 = var1.guilds;
        var0.guilds = var1;
        return var0;
    };
    var6.CACHE_LOADED = var8;
    var8 = function arg0() {
        var0 = {};
        var1 = arg0;
        var1 = var1.guilds;
        var0.guilds = var1;
        return var0;
    };
    var6.CACHE_LOADED_LAZY = var8;
    var8 = function arg0() {
        var0 = {};
        var1 = arg0;
        var1 = var1.guilds;
        var0.guilds = var1;
        return var0;
    };
    var6.BACKGROUND_SYNC = var8;
    var _closure1_slot9 = var6;
    var6 = function() { // Environment: var1
        var3 = _closure1_slot4;
        var2 = function arg0() {
            _fun118141: for (var _fun118141_ip = 0;;) switch (_fun118141_ip) {
                case 0:
                    var6 = arg0;
                    var14 = this;
                    var _closure3_slot0 = var14;
                    var7 = var6;
                    var0 = undefined;
                    var3 = undefined;
                    var12 = undefined;
                    var5 = undefined;
                    var13 = undefined;
                    var _closure3_slot1 = var14;
                    var8 = _closure1_slot3;
                    var4 = _closure2_slot0;
                    var4 = var8.bind(var0)(var14, var4);
                    var4 = global;
                    var8 = var4.Map;
                    var9 = var8.prototype;
                    var9 = Object.create(var9, {
                        constructor: {
                            value: var8
                        }
                    });
                    var26 = var9;
                    var8 = new var26[var8](var25);
                    var8 = var8 instanceof Object ? var8 : var9;
                    var14.tokenToStore = var8;
                    var8 = var6.length;
                    var6 = 0;
                    if (!(var6 !== var8)) {
                        _fun118141_ip = 669;
                        continue _fun118141
                    }
                case 97:
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var6 = 8;
                    var6 = var9[var6];
                    var6 = var8.bind(var0)(var6);
                    var8 = var6.FLUX_API;
                    var3 = var8;
                    var _closure3_slot2 = var8;
                    var6 = null;
                    if (!(var6 == var8)) {
                        _fun118141_ip = 162;
                        continue _fun118141
                    }
                case 136:
                    var9 = _closure1_slot8;
                    var8 = var9.info;
                    var6 = 'Not initializing DispatcherBridge, because kvStoreApi is unavailable.';
                    var6 = var8.bind(var9)(var6);
                    _fun118141_ip = 669;
                    continue _fun118141;
                case 162: // try_start_0
                    var5 = new Array(0);
                    var8 = _closure1_slot11;
                    var6 = var7;
                    var6 = var8.bind(var0)(var6);
                    var13 = var6;
                    var6 = var6.bind(var0)();
                    var12 = var6;
                    var6 = var6.done;
                    var11 = '';
                    var10 = ' => [token: ';
                    var9 = ', mode: ';
                    var8 = ']';
                    if (var6) {
                        _fun118141_ip = 342;
                        continue _fun118141
                    }
                case 219:
                    var6 = var12;
                    var17 = var6.value;
                    var6 = var17.getName;
                    var19 = var6.bind(var17)();
                    var15 = var17.connectWithLibdiscore;
                    var6 = var3;
                    var18 = var15.bind(var17)(var6);
                    var15 = var14.tokenToStore;
                    var6 = var15.set;
                    var6 = var6.bind(var15)(var18, var17);
                    var16 = var5;
                    var15 = var16.push;
                    var6 = var17.getMode;
                    var21 = var6.bind(var17)();
                    var6 = var4.HermesInternal;
                    var6 = var6.concat;
                    var26 = var11;
                    var25 = var19;
                    var24 = var10;
                    var23 = var18;
                    var22 = var9;
                    var20 = var8;
                    var6 = var26[var6](var25, var24, var23, var22, var21, var20, var19);
                    var6 = var15.bind(var16)(var6);
                    var6 = var13;
                    var6 = var6.bind(var0)();
                    var12 = var6;
                    var6 = var6.done;
                    if (!var6) {
                        _fun118141_ip = 219;
                        continue _fun118141
                    }
                case 342:
                    var6 = _closure1_slot8;
                    var8 = var6.info;
                    var13 = var7.length;
                    var9 = var5;
                    var5 = var9.join;
                    var7 = ', ';
                    var23 = var5.bind(var9)(var7);
                    var5 = var4.HermesInternal;
                    var10 = var5.concat;
                    var26 = 'Connected ';
                    var24 = ' store(s), mapping: ';
                    var12 = '.';
                    var25 = var13;
                    var22 = var12;
                    var5 = var26[var10](var25, var24, var23, var22, var21);
                    var5 = var8.bind(var6)(var5);
                    var5 = var3;
                    var3 = var5.getRegisteredActionTypes;
                    var11 = var3.bind(var5)();
                    var5 = var6.info;
                    var10 = var11.length;
                    var3 = var11.join;
                    var23 = var3.bind(var11)(var7);
                    var3 = var4.HermesInternal;
                    var8 = var3.concat;
                    var26 = 'Registering ';
                    var24 = ' bridged action(s): ';
                    var25 = var10;
                    var3 = var26[var8](var25, var24, var23, var22, var21);
                    var3 = var5.bind(var6)(var3);
                    var3 = function arg0() {
                        _fun118142: for (var _fun118142_ip = 0;;) switch (_fun118142_ip) {
                            case 0:
                                var11 = arg0;
                                var _closure4_slot0 = var11;
                                var3 = _closure1_slot9;
                                var0 = var11.type;
                                var7 = var3[var0];
                                var9 = global;
                                var3 = var9.performance;
                                var0 = var3.now;
                                var10 = var0.bind(var3)();
                                var6 = null;
                                if (!(var6 == var7)) {
                                    _fun118142_ip = 67;
                                    continue _fun118142
                                }
                            case 48:
                                var3 = var9.JSON;
                                var0 = var3.stringify;
                                var12 = var0.bind(var3)(var11);
                                _fun118142_ip = 109;
                                continue _fun118142;
                            case 67:
                                var4 = var9.JSON;
                                var3 = var4.stringify;
                                var0 = {};
                                var5 = var11.type;
                                var0.type = var5;
                                var5 = undefined;
                                var24 = var7.bind(var5)(var11);
                                var25 = var0;
                                var5 = copyDataProperties(var25, var24);
                                var12 = var3.bind(var4)(var0);
                            case 109:
                                var4 = {};
                                var0 = 'json_stringify_action';
                                var4.kind = var0;
                                var3 = var9.performance;
                                var0 = var3.now;
                                var0 = var0.bind(var3)();
                                var0 = var0 - var10;
                                var4.durationMillis = var0;
                                var7 = _closure1_slot0;
                                var0 = _closure1_slot2;
                                var3 = 9;
                                var5 = var0[var3];
                                var0 = undefined;
                                var5 = var7.bind(var0)(var5);
                                var7 = var5.TelemetryExperiment;
                                var5 = var7.shouldCollectMetrics;
                                var5 = var5.bind(var7)();
                                var8 = _closure3_slot2;
                                var7 = var8.dispatchAction;
                                var7 = var7.bind(var8)(var12, var5);
                                var8 = var7.ok;
                                if (var8) {
                                    _fun118142_ip = 447;
                                    continue _fun118142
                                }
                            case 218:
                                var13 = var9.Error;
                                var25 = var7.error;
                                var12 = var13.prototype;
                                var12 = Object.create(var12, {
                                    constructor: {
                                        value: var13
                                    }
                                });
                                var26 = var12;
                                var8 = new var26[var13](var25, var24);
                                var8 = var8 instanceof Object ? var8 : var12;
                                var15 = _closure3_slot2;
                                var13 = var15.findStoresThatCanHandleActionType;
                                var12 = var11.type;
                                var15 = var13.bind(var15)(var12);
                                var13 = _closure3_slot0;
                                var12 = var13.filterAuthorativeStores;
                                var15 = var12.bind(var13)(var15);
                                var13 = var15.map;
                                var12 = function(arg0) { // Environment: var1
                                    var1 = arg0;
                                    var0 = var1.getName;
                                    var0 = var0.bind(var1)();
                                    return var0;
                                };
                                var12 = var13.bind(var15)(var12);
                                var19 = _closure1_slot8;
                                var18 = var19.error;
                                var24 = var11.type;
                                var25 = 'Failed to dispatch action';
                                var23 = 'authorative stores';
                                var21 = 'error:';
                                var26 = var19;
                                var22 = var12;
                                var20 = var8;
                                var13 = var26[var18](var25, var24, var23, var22, var21, var20, var19);
                                var15 = _closure1_slot1;
                                var16 = _closure1_slot2;
                                var13 = 10;
                                var13 = var16[var13];
                                var16 = var15.bind(var0)(var13);
                                var15 = var16.captureException;
                                var13 = {};
                                var17 = {};
                                var19 = var12.join;
                                var18 = ', ';
                                var18 = var19.bind(var12)(var18);
                                var17.authorativeStores = var18;
                                var13.extra = var17;
                                var17 = {};
                                var18 = 'libdiscore';
                                var17.source = var18;
                                var13.tags = var17;
                                var13 = var15.bind(var16)(var8, var13);
                                var13 = var12.length;
                                var12 = 0;
                                if (!(var13 > var12)) {
                                    _fun118142_ip = 1103;
                                    continue _fun118142
                                }
                            case 445:
                                throw var8;
                            case 447:
                                var12 = var9.performance;
                                var8 = var12.now;
                                var8 = var8.bind(var12)();
                                var10 = var8 - var10;
                                var7 = var7.value;
                                var8 = var7.metrics;
                                var12 = var7.changes;
                                var16 = function arg0() {
                                    var1 = arg0;
                                    var _closure5_slot0 = var1;
                                    var4 = _closure3_slot1;
                                    var3 = var4.withStoreToken;
                                    var2 = var1.storeToken;
                                    var1 = _closure4_slot0;
                                    var1 = var1.type;
                                    var0 = function(arg0) { // Environment: var0
                                        var2 = arg0;
                                        var1 = var2.applyChanges;
                                        var0 = _closure5_slot0;
                                        var0 = var0.databaseChanges;
                                        var0 = var1.bind(var2)(var0);
                                        var0 = undefined;
                                        return var0;
                                    };
                                    var0 = var3.bind(var4)(var2, var1, var0);
                                    var0 = undefined;
                                    return var0;
                                };
                                var7 = _closure1_slot11;
                                var15 = var7.bind(var0)(var12);
                                var13 = var15.bind(var0)();
                                var7 = var13.done;
                                if (var7) {
                                    _fun118142_ip = 536;
                                    continue _fun118142
                                }
                            case 511:
                                var7 = var13.value;
                                var7 = var16.bind(var0)(var7);
                                var17 = var15.bind(var0)();
                                var7 = var17.done;
                                var13 = var17;
                                if (!var7) {
                                    _fun118142_ip = 511;
                                    continue _fun118142
                                }
                            case 536:
                                var7 = _closure1_slot11;
                                var13 = var7.bind(var0)(var12);
                                var12 = var13.bind(var0)();
                                var7 = var12.done;
                                if (var7) {
                                    _fun118142_ip = 612;
                                    continue _fun118142
                                }
                            case 557:
                                var7 = var12.value;
                                var18 = _closure3_slot0;
                                var17 = var18.withStoreToken;
                                var16 = var7.storeToken;
                                var15 = var11.type;
                                var7 = function(arg0) { // Environment: var1
                                    var2 = arg0;
                                    var1 = var2.doEmitChanges;
                                    var0 = _closure4_slot0;
                                    var0 = var1.bind(var2)(var0);
                                    var0 = undefined;
                                    return var0;
                                };
                                var7 = var17.bind(var18)(var16, var15, var7);
                                var15 = var13.bind(var0)();
                                var7 = var15.done;
                                var12 = var15;
                                if (!var7) {
                                    _fun118142_ip = 557;
                                    continue _fun118142
                                }
                            case 612:
                                if (!(var6 != var8)) {
                                    _fun118142_ip = 1103;
                                    continue _fun118142
                                }
                            case 619:
                                if (!var5) {
                                    _fun118142_ip = 1103;
                                    continue _fun118142
                                }
                            case 625:
                                var12 = new Array(1);
                                var12[0] = var4;
                                var24 = var8.timings;
                                var23 = 1;
                                var25 = var12;
                                var4 = arraySpread(var25, var24, var23);
                                var6 = _closure1_slot5;
                                var5 = var6.get;
                                var4 = 'libdiscore_verbose_telemetry_logging';
                                var4 = var5.bind(var6)(var4);
                                if (!var4) {
                                    _fun118142_ip = 934;
                                    continue _fun118142
                                }
                            case 675:
                                var5 = var12.map;
                                var4 = function(arg0) { // Environment: var1
                                    var0 = arg0;
                                    var9 = var0.kind;
                                    var7 = var0.durationMillis;
                                    var0 = global;
                                    var0 = var0.HermesInternal;
                                    var3 = var0.concat;
                                    var10 = ' - ';
                                    var8 = ': ';
                                    var6 = 'ms';
                                    var0 = var10[var3](var9, var8, var7, var6, var5);
                                    return var0;
                                };
                                var5 = var5.bind(var12)(var4);
                                var4 = var5.join;
                                var7 = '\n';
                                var5 = var4.bind(var5)(var7);
                                var4 = ['Timings'];
                                var4[1] = var5;
                                var6 = new Array(3);
                                var6[0] = var4;
                                var13 = var8.mutations;
                                var5 = var13.map;
                                var4 = function(arg0) { // Environment: var1
                                    var0 = arg0;
                                    var4 = var0.recordType;
                                    var5 = var0.metrics;
                                    var0 = global;
                                    var3 = var0.Object;
                                    var2 = var3.entries;
                                    var5 = var2.bind(var3)(var5);
                                    var3 = var5.filter;
                                    var2 = function(arg0) { // Environment: var1
                                        _fun118148: for (var _fun118148_ip = 0;;) switch (_fun118148_ip) {
                                            case 0:
                                                var3 = arg0;
                                                var0 = var3[Symbol.iterator];
                                                var3 = var0().next;
                                                var1 = var3().value;
                                                var1 = var0;
                                                var5 = undefined;
                                                var2 = var1 === var5;
                                                var1 = undefined;
                                                if (var2) {
                                                    _fun118148_ip = 49;
                                                    continue _fun118148
                                                }
                                            case 24:
                                                var4 = var3().value;
                                                var3 = var0;
                                                var3 = var3 === var5;
                                                var1 = undefined;
                                                var2 = var3;
                                                if (var3) {
                                                    _fun118148_ip = 49;
                                                    continue _fun118148
                                                }
                                            case 43:
                                                var1 = var4;
                                                var2 = var3;
                                            case 49:
                                                if (var2) {
                                                    _fun118148_ip = 55;
                                                    continue _fun118148
                                                }
                                            case 52:
                                                var0.return();
                                            case 55:
                                                var0 = 0;
                                                var0 = var0 !== var1;
                                                return var0;
                                        }
                                    };
                                    var3 = var3.bind(var5)(var2);
                                    var2 = var3.map;
                                    var1 = function(arg0) { // Environment: var1
                                        _fun118149: for (var _fun118149_ip = 0;;) switch (_fun118149_ip) {
                                            case 0:
                                                var2 = arg0;
                                                var0 = var2[Symbol.iterator];
                                                var2 = var0().next;
                                                var3 = var2().value;
                                                var1 = var0;
                                                var6 = undefined;
                                                var1 = var1 === var6;
                                                var4 = undefined;
                                                if (var1) {
                                                    _fun118149_ip = 27;
                                                    continue _fun118149
                                                }
                                            case 24:
                                                var4 = var3;
                                            case 27:
                                                var3 = undefined;
                                                if (var1) {
                                                    _fun118149_ip = 57;
                                                    continue _fun118149
                                                }
                                            case 32:
                                                var5 = var2().value;
                                                var2 = var0;
                                                var2 = var2 === var6;
                                                var3 = undefined;
                                                var1 = var2;
                                                if (var2) {
                                                    _fun118149_ip = 57;
                                                    continue _fun118149
                                                }
                                            case 51:
                                                var3 = var5;
                                                var1 = var2;
                                            case 57:
                                                if (var1) {
                                                    _fun118149_ip = 63;
                                                    continue _fun118149
                                                }
                                            case 60:
                                                var0.return();
                                            case 63:
                                                var0 = global;
                                                var0 = var0.HermesInternal;
                                                var2 = var0.concat;
                                                var1 = ' - ';
                                                var0 = ': ';
                                                var0 = var2.bind(var1)(var4, var0, var3);
                                                return var0;
                                        }
                                    };
                                    var2 = var2.bind(var3)(var1);
                                    var1 = var2.join;
                                    var3 = '\n';
                                    var2 = var1.bind(var2)(var3);
                                    var0 = var0.HermesInternal;
                                    var1 = var0.concat;
                                    var0 = ' * Record Type: ';
                                    var0 = var1.bind(var0)(var4, var3, var2);
                                    return var0;
                                };
                                var5 = var5.bind(var13)(var4);
                                var4 = var5.join;
                                var5 = var4.bind(var5)(var7);
                                var4 = ['Mutations'];
                                var4[1] = var5;
                                var6[1] = var4;
                                var13 = var8.memory;
                                var5 = var13.map;
                                var4 = function(arg0) { // Environment: var1
                                    var0 = arg0;
                                    var4 = var0.recordType;
                                    var3 = var0.statistics;
                                    var0 = global;
                                    var2 = var0.Object;
                                    var1 = var2.entries;
                                    var3 = var1.bind(var2)(var3);
                                    var2 = var3.map;
                                    var1 = function(arg0) { // Environment: var1
                                        _fun118151: for (var _fun118151_ip = 0;;) switch (_fun118151_ip) {
                                            case 0:
                                                var2 = arg0;
                                                var0 = var2[Symbol.iterator];
                                                var2 = var0().next;
                                                var3 = var2().value;
                                                var1 = var0;
                                                var6 = undefined;
                                                var1 = var1 === var6;
                                                var4 = undefined;
                                                if (var1) {
                                                    _fun118151_ip = 27;
                                                    continue _fun118151
                                                }
                                            case 24:
                                                var4 = var3;
                                            case 27:
                                                var3 = undefined;
                                                if (var1) {
                                                    _fun118151_ip = 57;
                                                    continue _fun118151
                                                }
                                            case 32:
                                                var5 = var2().value;
                                                var2 = var0;
                                                var2 = var2 === var6;
                                                var3 = undefined;
                                                var1 = var2;
                                                if (var2) {
                                                    _fun118151_ip = 57;
                                                    continue _fun118151
                                                }
                                            case 51:
                                                var3 = var5;
                                                var1 = var2;
                                            case 57:
                                                if (var1) {
                                                    _fun118151_ip = 63;
                                                    continue _fun118151
                                                }
                                            case 60:
                                                var0.return();
                                            case 63:
                                                var0 = global;
                                                var2 = var0.JSON;
                                                var1 = var2.stringify;
                                                var3 = var1.bind(var2)(var3);
                                                var0 = var0.HermesInternal;
                                                var2 = var0.concat;
                                                var1 = ' - ';
                                                var0 = ': ';
                                                var0 = var2.bind(var1)(var4, var0, var3);
                                                return var0;
                                        }
                                    };
                                    var2 = var2.bind(var3)(var1);
                                    var1 = var2.join;
                                    var3 = '\n';
                                    var2 = var1.bind(var2)(var3);
                                    var0 = var0.HermesInternal;
                                    var1 = var0.concat;
                                    var0 = ' * Record Type: ';
                                    var0 = var1.bind(var0)(var4, var3, var2);
                                    return var0;
                                };
                                var5 = var5.bind(var13)(var4);
                                var4 = var5.join;
                                var5 = var4.bind(var5)(var7);
                                var4 = ['Memory Usage'];
                                var4[1] = var5;
                                var6[2] = var4;
                                var5 = var6.filter;
                                var4 = function(arg0) { // Environment: var1
                                    _fun118152: for (var _fun118152_ip = 0;;) switch (_fun118152_ip) {
                                        case 0:
                                            var5 = arg0;
                                            var1 = var5[Symbol.iterator];
                                            var5 = var1().next;
                                            var7 = undefined;
                                            var2 = undefined;
                                            var4 = undefined;
                                            var6 = var5().value;
                                            var8 = var1;
                                            var8 = var8 === var7;
                                            var2 = var8;
                                            if (var8) {
                                                _fun118152_ip = 32;
                                                continue _fun118152
                                            }
                                        case 29:
                                            var4 = var6;
                                        case 32:
                                            var4 = undefined;
                                            var6 = var2;
                                            if (var6) {
                                                _fun118152_ip = 60;
                                                continue _fun118152
                                            }
                                        case 40:
                                            var5 = var5().value;
                                            var6 = var1;
                                            var6 = var6 === var7;
                                            var2 = var6;
                                            if (var6) {
                                                _fun118152_ip = 60;
                                                continue _fun118152
                                            }
                                        case 57:
                                            var4 = var5;
                                        case 60:
                                            var3 = var4;
                                            var4 = var2;
                                            if (var4) {
                                                _fun118152_ip = 72;
                                                continue _fun118152
                                            }
                                        case 69:
                                            var1.return();
                                        case 72:
                                            var4 = var3.length;
                                            var3 = 0;
                                            var3 = var4 > var3;
                                            return var3;
                                        case 85:
                                            CatchBlockStart(arg_register = 0);
                                            if (var2) {
                                                _fun118152_ip = 93;
                                                continue _fun118152
                                            }
                                        case 90:
                                            var1.return();
                                        case 93:
                                            throw var0;
                                    }
                                };
                                var5 = var5.bind(var6)(var4);
                                var4 = var5.map;
                                var1 = function(arg0) { // Environment: var1
                                    _fun118153: for (var _fun118153_ip = 0;;) switch (_fun118153_ip) {
                                        case 0:
                                            var2 = arg0;
                                            var0 = var2[Symbol.iterator];
                                            var2 = var0().next;
                                            var3 = var2().value;
                                            var1 = var0;
                                            var6 = undefined;
                                            var1 = var1 === var6;
                                            var4 = undefined;
                                            if (var1) {
                                                _fun118153_ip = 27;
                                                continue _fun118153
                                            }
                                        case 24:
                                            var4 = var3;
                                        case 27:
                                            var3 = undefined;
                                            if (var1) {
                                                _fun118153_ip = 57;
                                                continue _fun118153
                                            }
                                        case 32:
                                            var5 = var2().value;
                                            var2 = var0;
                                            var2 = var2 === var6;
                                            var3 = undefined;
                                            var1 = var2;
                                            if (var2) {
                                                _fun118153_ip = 57;
                                                continue _fun118153
                                            }
                                        case 51:
                                            var3 = var5;
                                            var1 = var2;
                                        case 57:
                                            if (var1) {
                                                _fun118153_ip = 63;
                                                continue _fun118153
                                            }
                                        case 60:
                                            var0.return();
                                        case 63:
                                            var0 = global;
                                            var0 = var0.HermesInternal;
                                            var2 = var0.concat;
                                            var1 = '';
                                            var0 = ':\n';
                                            var0 = var2.bind(var1)(var4, var0, var3);
                                            return var0;
                                    }
                                };
                                var5 = var4.bind(var5)(var1);
                                var4 = var5.join;
                                var1 = '\n\n';
                                var21 = var4.bind(var5)(var1);
                                var5 = _closure1_slot8;
                                var4 = var5.info;
                                var25 = var11.type;
                                var1 = var9.HermesInternal;
                                var13 = var1.concat;
                                var26 = 'Handling action ';
                                var24 = ' took ';
                                var22 = 'ms\n';
                                var23 = var10;
                                var1 = var26[var13](var25, var24, var23, var22, var21, var20);
                                var1 = var4.bind(var5)(var1);
                            case 934:
                                var5 = _closure1_slot1;
                                var1 = _closure1_slot2;
                                var4 = 11;
                                var4 = var1[var4];
                                var7 = var5.bind(var0)(var4);
                                var6 = var7.track;
                                var4 = _closure1_slot7;
                                var5 = var4.LIBDISCORE_DISPATCH_BRIDGE_TELEMETRY;
                                var4 = {};
                                var11 = var11.type;
                                var4.action_type = var11;
                                var4.total_duration_millis = var10;
                                var11 = var9.JSON;
                                var10 = var11.stringify;
                                var10 = var10.bind(var11)(var12);
                                var4.timings = var10;
                                var12 = var9.JSON;
                                var11 = var12.stringify;
                                var10 = var8.mutations;
                                var10 = var11.bind(var12)(var10);
                                var4.mutations = var10;
                                var10 = var9.JSON;
                                var9 = var10.stringify;
                                var8 = var8.memory;
                                var8 = var9.bind(var10)(var8);
                                var4.memory_usage = var8;
                                var4 = var6.bind(var7)(var5, var4);
                                var2 = _closure1_slot0;
                                var1 = var1[var3];
                                var1 = var2.bind(var0)(var1);
                                var2 = var1.TelemetryExperiment;
                                var1 = var2.didEmit;
                                var1 = var1.bind(var2)();
                            case 1103:
                                return var0;
                        }
                    };
                    var _closure3_slot3 = var3;
                    var7 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 12;
                    var6 = var5[var3];
                    var10 = var7.bind(var0)(var6);
                    var9 = var10.register;
                    var7 = var4.Object;
                    var6 = var7.fromEntries;
                    var8 = var11.map;
                    var4 = function(arg0) { // Environment: var2
                        var0 = new Array(2);
                        var1 = arg0;
                        var0[0] = var1;
                        var1 = _closure3_slot3;
                        var0[1] = var1;
                        return var0;
                    };
                    var4 = var8.bind(var11)(var4);
                    var24 = var6.bind(var7)(var4);
                    var4 = _closure1_slot0;
                    var3 = var5[var3];
                    var3 = var4.bind(var0)(var3);
                    var3 = var3.DispatchBand;
                    var22 = var3.Database;
                    var25 = 'LibDiscoreDispatcherBridge';
                    var23 = function() { // Environment: var2
                        var0 = undefined;
                        return var0;
                    };
                    var26 = var10;
                    var3 = var26[var9](var25, var24, var23, var22, var21);
                    var3 = 13;
                    var3 = var5[var3];
                    var3 = var4.bind(var0)(var3);
                    var4 = var3.default;
                    var _closure3_slot4 = var4;
                    var3 = var4.addChangeListener;
                    var2 = function() { // Environment: var2
                        _fun118157: for (var _fun118157_ip = 0;;) switch (_fun118157_ip) {
                            case 0:
                                var3 = _closure3_slot4;
                                var2 = var3.getState;
                                var3 = var2.bind(var3)();
                                var2 = 'active';
                                if (!(var2 !== var3)) {
                                    _fun118157_ip = 87;
                                    continue _fun118157
                                }
                            case 27:
                                var2 = global;
                                var3 = var2.Date;
                                var2 = var3.now;
                                var2 = var2.bind(var3)();
                                var _closure4_slot0 = var2;
                                var2 = _closure3_slot2;
                                var1 = var2.flushReplicationStates;
                                var2 = var1.bind(var2)();
                                var1 = null;
                                if (!(var1 != var2)) {
                                    _fun118157_ip = 87;
                                    continue _fun118157
                                }
                            case 70:
                                var1 = var2.then;
                                var0 = function(arg0) { // Environment: var0
                                    _fun118158: for (var _fun118158_ip = 0;;) switch (_fun118158_ip) {
                                        case 0:
                                            var0 = arg0;
                                            if (!var0) {
                                                _fun118158_ip = 79;
                                                continue _fun118158
                                            }
                                        case 6:
                                            var2 = _closure1_slot8;
                                            var1 = var2.info;
                                            var0 = global;
                                            var4 = var0.Date;
                                            var3 = var4.now;
                                            var4 = var3.bind(var4)();
                                            var3 = _closure4_slot0;
                                            var5 = var4 - var3;
                                            var0 = var0.HermesInternal;
                                            var4 = var0.concat;
                                            var3 = 'Successfully flushed replication states in ';
                                            var0 = 'ms';
                                            var0 = var4.bind(var3)(var5, var0);
                                            var0 = var1.bind(var2)(var0);
                                        case 79:
                                            var0 = undefined;
                                            return var0;
                                    }
                                };
                                var0 = var1.bind(var2)(var0);
                            case 87:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var2 = var3.bind(var4)(var2);
                case 644: // try_end0
                    _fun118141_ip = 669;
                    continue _fun118141;
                case 646: // catch_target0
                    CatchBlockStart(arg_register = 4);
                    var3 = _closure1_slot8;
                    var2 = var3.error;
                    var1 = 'Failed to initialize the dispatcher bridge';
                    var1 = var2.bind(var3)(var1, var4);
                case 669:
                    return var0;
            }
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'withStoreToken';
        var0.key = var1;
        var1 = function arg0, arg1, arg2() {
            _fun118159: for (var _fun118159_ip = 0;;) switch (_fun118159_ip) {
                case 0:
                    var6 = arg0;
                    var0 = this;
                    var1 = var0.tokenToStore;
                    var0 = var1.get;
                    var2 = var0.bind(var1)(var6);
                    var0 = null;
                    if (!(var0 != var2)) {
                        _fun118159_ip = 40;
                        continue _fun118159
                    }
                case 28:
                    var1 = arg2;
                    var0 = undefined;
                    var0 = var1.bind(var0)(var2);
                    _fun118159_ip = 83;
                    continue _fun118159;
                case 40:
                    var5 = _closure1_slot8;
                    var4 = var5.warn;
                    var11 = 'When dispatching action';
                    var10 = arg1;
                    var9 = 'we got a store token';
                    var7 = 'that is unknown';
                    var12 = var5;
                    var8 = var6;
                    var0 = var12[var4](var11, var10, var9, var8, var7, var6);
                case 83:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var1;
        var1 = new Array(2);
        var1[0] = var0;
        var0 = {};
        var5 = 'filterAuthorativeStores';
        var0.key = var5;
        var4 = function arg0() {
            _fun118160: for (var _fun118160_ip = 0;;) switch (_fun118160_ip) {
                case 0:
                    var7 = this;
                    var0 = new Array(0);
                    var2 = _closure1_slot11;
                    var6 = undefined;
                    var1 = arg0;
                    var5 = var2.bind(var6)(var1);
                    var2 = var5.bind(var6)();
                    var1 = var2.done;
                    var4 = 'libdiscore';
                    var3 = null;
                    if (var1) {
                        _fun118160_ip = 114;
                        continue _fun118160
                    }
                case 44:
                    var9 = var2.value;
                    var8 = var7.tokenToStore;
                    var1 = var8.get;
                    var8 = var1.bind(var8)(var9);
                    var1 = var3 != var8;
                    if (!var1) {
                        _fun118160_ip = 86;
                        continue _fun118160
                    }
                case 72:
                    var9 = var8.getMode;
                    var9 = var9.bind(var8)();
                    var1 = var4 === var9;
                case 86:
                    if (!var1) {
                        _fun118160_ip = 99;
                        continue _fun118160
                    }
                case 89:
                    var1 = var0.push;
                    var1 = var1.bind(var0)(var8);
                case 99:
                    var8 = var5.bind(var6)();
                    var1 = var8.done;
                    var2 = var8;
                    if (!var1) {
                        _fun118160_ip = 44;
                        continue _fun118160
                    }
                case 114:
                    return var0;
            }
        };
        var0.value = var4;
        var1[1] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var6 = var6.bind(var0)();
    var9 = var7.Set;
    var7 = var9.prototype;
    var8 = Object.create(var7, {
        constructor: {
            value: var9
        }
    });
    var13 = ['libdiscore', 'typescript-libdiscore-dual-read'];
    var14 = var8;
    var7 = new var14[var9](var13, var12);
    var7 = var7 instanceof Object ? var7 : var8;
    var _closure1_slot10 = var7;
    var1 = function arg0() {
        var2 = arg0;
        var1 = var2.filter;
        var0 = function(arg0) { // Environment: var0
            var3 = arg0;
            var2 = _closure1_slot10;
            var1 = var2.has;
            var0 = var3.getMode;
            var0 = var0.bind(var3)();
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var13 = var1.bind(var0)(var3);
    var3 = var6.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var6
        }
    });
    var14 = var3;
    var1 = new var14[var6](var13, var12);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 14;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/libdiscore/DispatcherBridge.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 4005, 11951, 1216, 1410, 660, 3, 1615, 1613, 1207, 795, 806, 5284, 2]);