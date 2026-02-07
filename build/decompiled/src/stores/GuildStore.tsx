// stores/GuildStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var0 = metroImportAll;
    var _closure1_slot2 = var0;
    var _closure1_slot3 = var5;
    var0 = function arg0, arg1() {
        _fun16451: for (var _fun16451_ip = 0;;) switch (_fun16451_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun16451_ip = 46;
                    continue _fun16451
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun16451_ip = 55;
                    continue _fun16451
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun16451_ip = 343;
                    continue _fun16451
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun16451_ip = 323;
                    continue _fun16451
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun16451_ip = 283;
                    continue _fun16451
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun16451_ip = 270;
                    continue _fun16451
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
                    _fun16451_ip = 163;
                    continue _fun16451
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun16451_ip = 179;
                    continue _fun16451
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun16451_ip = 249;
                    continue _fun16451
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun16451_ip = 249;
                    continue _fun16451
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun16451_ip = 234;
                    continue _fun16451
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun16451_ip = 247;
                    continue _fun16451
                }
            case 234:
                var8 = _closure1_slot16;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun16451_ip = 265;
                continue _fun16451;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun16451_ip = 283;
                continue _fun16451;
            case 270:
                var6 = _closure1_slot16;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun16451_ip = 323;
                    continue _fun16451
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
                    _fun16451_ip = 330;
                    continue _fun16451
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun16452: for (var _fun16452_ip = 0;;) switch (_fun16452_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun16452_ip = 56;
                                continue _fun16452
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
                            _fun16452_ip = 67;
                            continue _fun16452;
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
            case 343:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot15 = var0;
    var0 = function arg0, arg1() {
        _fun16453: for (var _fun16453_ip = 0;;) switch (_fun16453_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun16453_ip = 23;
                    continue _fun16453
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun16453_ip = 33;
                    continue _fun16453
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
                    _fun16453_ip = 70;
                    continue _fun16453
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun16453_ip = 55;
                    continue _fun16453
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot16 = var0;
    var0 = function() {
        _fun16454: for (var _fun16454_ip = 0;;) switch (_fun16454_ip) {
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
                _fun16454_ip = 74;
                continue _fun16454;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot17 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot17 = var0;
    var0 = function arg0() {
        _fun16457: for (var _fun16457_ip = 0;;) switch (_fun16457_ip) {
            case 0:
                var4 = arg0;
                var3 = _closure1_slot9;
                var2 = _closure1_slot10;
                var1 = {};
                var11 = var1;
                var10 = var4;
                var5 = copyDataProperties(var11, var10);
                var6 = _closure1_slot0;
                var5 = _closure1_slot3;
                var0 = 11;
                var5 = var5[var0];
                var0 = undefined;
                var7 = var6.bind(var0)(var5);
                var6 = var7.toSetInplace;
                var5 = var4.features;
                var6 = var6.bind(var7)(var5);
                var5 = 'features';
                var1[var5] = var6;
                var6 = var4.joinedAt;
                var5 = null;
                var6 = var5 != var6;
                var7 = null;
                if (!var6) {
                    _fun16457_ip = 125;
                    continue _fun16457
                }
            case 91:
                var6 = global;
                var9 = var6.Date;
                var11 = var4.joinedAt;
                var8 = var9.prototype;
                var8 = Object.create(var8, {
                    constructor: {
                        value: var9
                    }
                });
                var12 = var8;
                var6 = new var12[var9](var11, var10);
                var7 = var6 instanceof Object ? var6 : var8;
            case 125:
                var6 = 'joinedAt';
                var1[var6] = var7;
                var6 = var4.premiumProgressBarEnabledUserUpdatedAt;
                var6 = var5 != var6;
                var5 = null;
                if (!var6) {
                    _fun16457_ip = 183;
                    continue _fun16457
                }
            case 149:
                var6 = global;
                var7 = var6.Date;
                var11 = var4.premiumProgressBarEnabledUserUpdatedAt;
                var6 = var7.prototype;
                var6 = Object.create(var6, {
                    constructor: {
                        value: var7
                    }
                });
                var12 = var6;
                var4 = new var12[var7](var11, var10);
                var5 = var4 instanceof Object ? var4 : var6;
            case 183:
                var4 = 'premiumProgressBarEnabledUserUpdatedAt';
                var1[var4] = var5;
                var0 = var3.bind(var0)(var2, var1);
                return var0;
        }
    };
    var _closure1_slot18 = var0;
    var0 = global;
    var8 = var0.Object;
    var6 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var7.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.constructInPlace;
    var _closure1_slot9 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.LibdiscoreStore;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var8 = var3.GuildRecordTypeTag;
    var _closure1_slot10 = var8;
    var3 = var3.updateJoinedAt;
    var _closure1_slot11 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot12 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.FAVORITES;
    var _closure1_slot13 = var3;
    var3 = 10;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.FAVORITES_GUILD_RECORD;
    var _closure1_slot14 = var3;
    var3 = function(arg0) { // Environment: var1
        var3 = function arg0() {
            _fun16459: for (var _fun16459_ip = 0;;) switch (_fun16459_ip) {
                case 0:
                    var5 = this;
                    var13 = 0;
                    var0 = copyRestArgs(var13);
                    var7 = _closure1_slot4;
                    var3 = _closure2_slot0;
                    var4 = undefined;
                    var7 = var7.bind(var4)(var5, var3);
                    var10 = new Array(0);
                    var13 = var10;
                    var12 = var0;
                    var11 = 0;
                    var0 = arraySpread(var13, var12, var11);
                    var0 = _closure1_slot7;
                    var9 = var0.bind(var4)(var3);
                    var3 = _closure1_slot6;
                    var0 = _closure1_slot17;
                    var0 = var0.bind(var4)();
                    if (var0) {
                        _fun16459_ip = 86;
                        continue _fun16459
                    }
                case 73:
                    var0 = var9.apply;
                    var0 = var0.bind(var9)(var5, var10);
                    _fun16459_ip = 120;
                    continue _fun16459;
                case 86:
                    var6 = global;
                    var8 = var6.Reflect;
                    var7 = var8.construct;
                    var6 = _closure1_slot7;
                    var6 = var6.bind(var4)(var5);
                    var6 = var6.constructor;
                    var0 = var7.bind(var8)(var9, var10, var6);
                case 120:
                    var0 = var3.bind(var4)(var5, var0);
                    var _closure3_slot0 = var0;
                    var4 = var0.addKVDatabase;
                    var3 = _closure1_slot18;
                    var2 = 'guilds';
                    var2 = var4.bind(var0)(var2, var3);
                    var0.database = var2;
                    var2 = function(arg0) { // Environment: var1
                        _fun16460: for (var _fun16460_ip = 0;;) switch (_fun16460_ip) {
                            case 0:
                                var3 = arg0;
                                var0 = null;
                                if (!(var0 == var3)) {
                                    _fun16460_ip = 13;
                                    continue _fun16460
                                }
                            case 9:
                                var0 = undefined;
                                return var0;
                            case 13:
                                var0 = _closure1_slot13;
                                if (!(var3 !== var0)) {
                                    _fun16460_ip = 49;
                                    continue _fun16460
                                }
                            case 24:
                                var0 = _closure3_slot0;
                                var2 = var0.database;
                                var0 = var2.get;
                                var0 = var0.bind(var2)(var3);
                                _fun16460_ip = 53;
                                continue _fun16460;
                            case 49:
                                var0 = _closure1_slot14;
                            case 53:
                                return var0;
                        }
                    };
                    var0.getGuild = var2;
                    var4 = var0.database;
                    var3 = var4.memoized;
                    var2 = function(arg0) { // Environment: var1
                        var0 = {};
                        var2 = arg0;
                        var3 = var0;
                        var1 = copyDataProperties(var3, var2);
                        return var0;
                    };
                    var2 = var3.bind(var4)(var2);
                    var0.getGuilds = var2;
                    var4 = var0.database;
                    var3 = var4.memoized;
                    var2 = function(arg0) { // Environment: var1
                        var0 = global;
                        var2 = var0.Object;
                        var1 = var2.values;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var2 = var3.bind(var4)(var2);
                    var0.getGuildsArray = var2;
                    var3 = var0.database;
                    var2 = var3.memoized;
                    var1 = function(arg0) { // Environment: var1
                        var2 = _closure1_slot1;
                        var1 = _closure1_slot3;
                        var0 = 12;
                        var1 = var1[var0];
                        var0 = undefined;
                        var2 = var2.bind(var0)(var1);
                        var1 = var2.keys;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var1 = var2.bind(var3)(var1);
                    var0.getGuildIds = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot8;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot5;
        var4 = {};
        var0 = 'stateWrapper';
        var4.key = var0;
        var0 = function() {
            var0 = this;
            var0 = var0.database;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(2);
        var0[0] = var4;
        var4 = {};
        var6 = 'getGuildCount';
        var4.key = var6;
        var5 = function() {
            var0 = this;
            var1 = var0.database;
            var0 = var1.length;
            var0 = var0.bind(var1)();
            return var0;
        };
        var4.value = var5;
        var0[1] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var3.bind(var0)(var6);
    var3 = 'GuildStore';
    var7.displayName = var3;
    var6 = {};
    var3 = function arg0, arg1() {
        _fun16466: for (var _fun16466_ip = 0;;) switch (_fun16466_ip) {
            case 0:
                var8 = arg1;
                var0 = arg0;
                var2 = var0.guilds;
                var1 = _closure1_slot15;
                var0 = undefined;
                var6 = var1.bind(var0)(var2);
                var2 = var6.bind(var0)();
                var1 = var2.done;
                var5 = 13;
                var4 = 'unavailable';
                var3 = null;
                if (var1) {
                    _fun16466_ip = 147;
                    continue _fun16466
                }
            case 47:
                var13 = var2.value;
                var9 = var8.get;
                var1 = var13.id;
                var12 = var9.bind(var8)(var1);
                var1 = var3 != var12;
                if (!var1) {
                    _fun16466_ip = 84;
                    continue _fun16466
                }
            case 74:
                var9 = var13.data_mode;
                var1 = var4 !== var9;
            case 84:
                if (!var1) {
                    _fun16466_ip = 132;
                    continue _fun16466
                }
            case 87:
                var10 = var8.set;
                var9 = var13.id;
                var11 = _closure1_slot2;
                var1 = _closure1_slot3;
                var1 = var1[var5];
                var11 = var11.bind(var0)(var1);
                var1 = var11.fromBackgroundSync;
                var1 = var1.bind(var11)(var13, var12);
                var1 = var10.bind(var8)(var9, var1);
            case 132:
                var9 = var6.bind(var0)();
                var1 = var9.done;
                var2 = var9;
                if (!var1) {
                    _fun16466_ip = 47;
                    continue _fun16466
                }
            case 147:
                return var0;
        }
    };
    var6.BACKGROUND_SYNC = var3;
    var3 = function arg0, arg1() {
        _fun16467: for (var _fun16467_ip = 0;;) switch (_fun16467_ip) {
            case 0:
                var7 = arg1;
                var0 = arg0;
                var2 = var0.guilds;
                var6 = {};
                var1 = _closure1_slot15;
                var0 = undefined;
                var8 = var1.bind(var0)(var2);
                var3 = var8.bind(var0)();
                var1 = var3.done;
                var4 = null;
                if (var1) {
                    _fun16467_ip = 90;
                    continue _fun16467
                }
            case 42:
                var1 = var3.value;
                var10 = var7.get;
                var9 = var1.id;
                var9 = var10.bind(var7)(var9);
                if (!(var4 != var9)) {
                    _fun16467_ip = 75;
                    continue _fun16467
                }
            case 66:
                var1 = var1.id;
                var6[var1] = var9;
            case 75:
                var9 = var8.bind(var0)();
                var1 = var9.done;
                var3 = var9;
                if (!var1) {
                    _fun16467_ip = 42;
                    continue _fun16467
                }
            case 90:
                var1 = var7.clear;
                var1 = var1.bind(var7)();
                var1 = _closure1_slot15;
                var4 = var1.bind(var0)(var2);
                var2 = var4.bind(var0)();
                var1 = var2.done;
                var3 = 13;
                if (var1) {
                    _fun16467_ip = 198;
                    continue _fun16467
                }
            case 124:
                var12 = var2.value;
                var9 = var7.set;
                var8 = var12.id;
                var10 = _closure1_slot2;
                var1 = _closure1_slot3;
                var1 = var1[var3];
                var11 = var10.bind(var0)(var1);
                var10 = var11.fromServer;
                var1 = var12.id;
                var1 = var6[var1];
                var1 = var10.bind(var11)(var12, var1);
                var1 = var9.bind(var7)(var8, var1);
                var8 = var4.bind(var0)();
                var1 = var8.done;
                var2 = var8;
                if (!var1) {
                    _fun16467_ip = 124;
                    continue _fun16467
                }
            case 198:
                return var0;
        }
    };
    var6.CONNECTION_OPEN = var3;
    var3 = function arg0, arg1() {
        _fun16468: for (var _fun16468_ip = 0;;) switch (_fun16468_ip) {
            case 0:
                var8 = arg1;
                var0 = arg0;
                var1 = var0.guilds;
                var0 = var8.clear;
                var0 = var0.bind(var8)();
                var7 = null;
                if (!(var7 != var1)) {
                    _fun16468_ip = 210;
                    continue _fun16468
                }
            case 31:
                var0 = _closure1_slot15;
                var5 = undefined;
                var4 = var0.bind(var5)(var1);
                var1 = var4.bind(var5)();
                var0 = var1.done;
                var3 = global;
                var2 = 13;
                if (var0) {
                    _fun16468_ip = 210;
                    continue _fun16468
                }
            case 65:
                var0 = var1.value;
                var13 = var0.properties;
                var14 = var0.additionalFields;
                var10 = var8.set;
                var9 = var13.id;
                var11 = _closure1_slot2;
                var0 = _closure1_slot3;
                var0 = var0[var2];
                var12 = var11.bind(var5)(var0);
                var11 = var12.fromGuildPropertiesWithAdditionalFields;
                var0 = {};
                var15 = var14.joinedAt;
                var16 = var7 != var15;
                var15 = null;
                if (!var16) {
                    _fun16468_ip = 164;
                    continue _fun16468
                }
            case 132:
                var18 = var3.Date;
                var20 = var14.joinedAt;
                var17 = var18.prototype;
                var17 = Object.create(var17, {
                    constructor: {
                        value: var18
                    }
                });
                var21 = var17;
                var16 = new var21[var18](var20, var19);
                var15 = var16 instanceof Object ? var16 : var17;
            case 164:
                var0.joinedAt = var15;
                var14 = var14.premiumSubscriberCount;
                var0.premiumSubscriberCount = var14;
                var0 = var11.bind(var12)(var13, var0);
                var0 = var10.bind(var8)(var9, var0);
                var9 = var4.bind(var5)();
                var0 = var9.done;
                var1 = var9;
                if (!var0) {
                    _fun16468_ip = 65;
                    continue _fun16468
                }
            case 210:
                var0 = undefined;
                return var0;
        }
    };
    var6.OVERLAY_INITIALIZE = var3;
    var3 = function arg0, arg1() {
        _fun16469: for (var _fun16469_ip = 0;;) switch (_fun16469_ip) {
            case 0:
                var6 = arg1;
                var0 = arg0;
                var2 = var0.guilds;
                var0 = var6.clear;
                var0 = var0.bind(var6)();
                var1 = _closure1_slot15;
                var0 = undefined;
                var4 = var1.bind(var0)(var2);
                var2 = var4.bind(var0)();
                var1 = var2.done;
                var3 = 13;
                if (var1) {
                    _fun16469_ip = 115;
                    continue _fun16469
                }
            case 51:
                var10 = var2.value;
                var8 = var6.set;
                var7 = var10.id;
                var9 = _closure1_slot2;
                var1 = _closure1_slot3;
                var1 = var1[var3];
                var9 = var9.bind(var0)(var1);
                var1 = var9.fromSerializedGuildRecord;
                var1 = var1.bind(var9)(var10);
                var1 = var8.bind(var6)(var7, var1);
                var7 = var4.bind(var0)();
                var1 = var7.done;
                var2 = var7;
                if (!var1) {
                    _fun16469_ip = 51;
                    continue _fun16469
                }
            case 115:
                return var0;
        }
    };
    var6.CACHE_LOADED = var3;
    var3 = function arg0, arg1() {
        _fun16470: for (var _fun16470_ip = 0;;) switch (_fun16470_ip) {
            case 0:
                var6 = arg1;
                var0 = arg0;
                var1 = var0.guilds;
                var2 = var1.length;
                var0 = 0;
                if (!(var0 !== var2)) {
                    _fun16470_ip = 126;
                    continue _fun16470
                }
            case 23:
                var0 = var6.clear;
                var0 = var0.bind(var6)();
                var0 = _closure1_slot15;
                var4 = undefined;
                var3 = var0.bind(var4)(var1);
                var1 = var3.bind(var4)();
                var0 = var1.done;
                var2 = 13;
                if (var0) {
                    _fun16470_ip = 126;
                    continue _fun16470
                }
            case 62:
                var10 = var1.value;
                var8 = var6.set;
                var7 = var10.id;
                var9 = _closure1_slot2;
                var0 = _closure1_slot3;
                var0 = var0[var2];
                var9 = var9.bind(var4)(var0);
                var0 = var9.fromSerializedGuildRecord;
                var0 = var0.bind(var9)(var10);
                var0 = var8.bind(var6)(var7, var0);
                var7 = var3.bind(var4)();
                var0 = var7.done;
                var1 = var7;
                if (!var0) {
                    _fun16470_ip = 62;
                    continue _fun16470
                }
            case 126:
                var0 = undefined;
                return var0;
        }
    };
    var6.CACHE_LOADED_LAZY = var3;
    var3 = function arg0, arg1() {
        var4 = arg1;
        var0 = arg0;
        var7 = var0.guild;
        var1 = var4.get;
        var0 = var7.id;
        var6 = var1.bind(var4)(var0);
        var3 = var4.set;
        var2 = var7.id;
        var5 = _closure1_slot2;
        var1 = _closure1_slot3;
        var0 = 13;
        var1 = var1[var0];
        var0 = undefined;
        var5 = var5.bind(var0)(var1);
        var1 = var5.fromServer;
        var1 = var1.bind(var5)(var7, var6);
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var6.GUILD_CREATE = var3;
    var3 = function arg0, arg1() {
        var4 = arg1;
        var0 = arg0;
        var7 = var0.guild;
        var1 = var4.get;
        var0 = var7.id;
        var6 = var1.bind(var4)(var0);
        var3 = var4.set;
        var2 = var7.id;
        var5 = _closure1_slot2;
        var1 = _closure1_slot3;
        var0 = 13;
        var1 = var1[var0];
        var0 = undefined;
        var5 = var5.bind(var0)(var1);
        var1 = var5.fromGuild;
        var1 = var1.bind(var5)(var7, var6);
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var6.GUILD_UPDATE = var3;
    var3 = function arg0, arg1() {
        _fun16473: for (var _fun16473_ip = 0;;) switch (_fun16473_ip) {
            case 0:
                var2 = arg1;
                var0 = arg0;
                var0 = var0.guild;
                var1 = var0.unavailable;
                if (var1) {
                    _fun16473_ip = 36;
                    continue _fun16473
                }
            case 20:
                var1 = var2.remove;
                var0 = var0.id;
                var0 = var1.bind(var2)(var0);
            case 36:
                var0 = undefined;
                return var0;
        }
    };
    var6.GUILD_DELETE = var3;
    var1 = function arg0, arg1() {
        _fun16474: for (var _fun16474_ip = 0;;) switch (_fun16474_ip) {
            case 0:
                var0 = arg0;
                var3 = arg1;
                var2 = var0.guildId;
                var8 = var0.joinedAt;
                var1 = var0.user;
                var5 = _closure1_slot12;
                var4 = var5.getId;
                var4 = var4.bind(var5)();
                var5 = var3.get;
                var6 = var5.bind(var3)(var2);
                var1 = var1.id;
                if (!(var4 === var1)) {
                    _fun16474_ip = 152;
                    continue _fun16474
                }
            case 58:
                var4 = null;
                if (!(var4 != var6)) {
                    _fun16474_ip = 152;
                    continue _fun16474
                }
            case 64:
                var7 = 'string';
                var1 = typeof var8;
                var5 = var8;
                if (!(var7 === var1)) {
                    _fun16474_ip = 109;
                    continue _fun16474
                }
            case 78:
                var1 = global;
                var1 = var1.Date;
                var7 = var1.prototype;
                var7 = Object.create(var7, {
                    constructor: {
                        value: var1
                    }
                });
                var11 = var7;
                var10 = var8;
                var1 = new var11[var1](var10, var9);
                var5 = var1 instanceof Object ? var1 : var7;
            case 109:
                var1 = var6.joinedAt;
                var1 = var5 !== var1;
                if (!var1) {
                    _fun16474_ip = 126;
                    continue _fun16474
                }
            case 122:
                var1 = var4 != var5;
            case 126:
                if (!var1) {
                    _fun16474_ip = 152;
                    continue _fun16474
                }
            case 129:
                var1 = var3.set;
                var4 = _closure1_slot11;
                var0 = undefined;
                var0 = var4.bind(var0)(var6, var5);
                var0 = var1.bind(var3)(var2, var0);
            case 152:
                var0 = undefined;
                return var0;
        }
    };
    var6.GUILD_MEMBER_ADD = var1;
    var1 = 14;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var3 = var1.LibdiscoreBatchStoreRefactorExperiment;
    var1 = var3.getCachedBridgedStoreMode;
    var10 = var1.bind(var3)();
    var3 = var7.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var12 = var3;
    var11 = var6;
    var1 = new var12[var7](var11, var10, var9);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 15;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'stores/GuildStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1411, 1414, 1416, 1216, 660, 1612, 1413, 21, 1598, 1613, 2]);