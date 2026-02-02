// modules/content_inventory/ContentInventoryManager.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function() {
        _fun117333: for (var _fun117333_ip = 0;;) switch (_fun117333_ip) {
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
                _fun117333_ip = 76;
                continue _fun117333;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot24 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot24 = var0;
    var0 = function() {
        _fun117336: for (var _fun117336_ip = 0;;) switch (_fun117336_ip) {
            case 0:
                var2 = arguments[0];
                var0 = undefined;
                if (!(var2 === var0)) {
                    _fun117336_ip = 11;
                    continue _fun117336
                }
            case 9:
                var2 = 0;
            case 11:
                var0 = global;
                var1 = var0.Math;
                var0 = var1.random;
                var1 = var0.bind(var1)();
                var0 = 1;
                var0 = var2 + var0;
                var1 = var1 * var0;
                var0 = _closure1_slot16;
                var0 = var1 * var0;
                return var0;
        }
    };
    var _closure1_slot25 = var0;
    var0 = function arg0, arg1() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 17;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'CONTENT_INVENTORY_SET_FEED_STATE';
        var1.type = var4;
        var4 = arg0;
        var1.feedId = var4;
        var4 = arg1;
        var1.state = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var _closure1_slot26 = var0;
    var0 = function arg0() {
        _fun117338: for (var _fun117338_ip = 0;;) switch (_fun117338_ip) {
            case 0:
                var3 = arg0;
                var2 = _closure1_slot20;
                var1 = var2.has;
                var1 = var1.bind(var2)(var3);
                if (var1) {
                    _fun117338_ip = 285;
                    continue _fun117338
                }
            case 26:
                var1 = _closure1_slot14;
                var1 = var1.GAME_PROFILE_FEED;
                if (!(var3 === var1)) {
                    _fun117338_ip = 108;
                    continue _fun117338
                }
            case 40:
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 18;
                var1 = var2[var1];
                var2 = undefined;
                var5 = var4.bind(var2)(var1);
                var4 = var5.canSeeGameProfile;
                var1 = 'ContentInventoryManager';
                var1 = var4.bind(var5)(var1);
                if (var1) {
                    _fun117338_ip = 86;
                    continue _fun117338
                }
            case 82:
                var1 = false;
                return var1;
            case 86:
                var4 = _closure1_slot13;
                var1 = var4.getFeed;
                var1 = var1.bind(var4)(var3);
                if (!(var2 === var1)) {
                    _fun117338_ip = 281;
                    continue _fun117338
                }
            case 108:
                var1 = _closure1_slot17;
                if (!(var3 === var1)) {
                    _fun117338_ip = 269;
                    continue _fun117338
                }
            case 119:
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 19;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var2);
                var2 = var4.isEligibleForContentInventoryV1;
                var1 = 'ContentInventoryManager';
                var1 = var2.bind(var4)(var1);
                if (var1) {
                    _fun117338_ip = 165;
                    continue _fun117338
                }
            case 161:
                var1 = false;
                return var1;
            case 165:
                var1 = _closure1_slot12;
                var1 = var1.hidden;
                if (!var1) {
                    _fun117338_ip = 199;
                    continue _fun117338
                }
            case 178:
                var2 = _closure1_slot13;
                var1 = var2.getFeed;
                var2 = var1.bind(var2)(var3);
                var1 = null;
                if (!(var1 == var2)) {
                    _fun117338_ip = 277;
                    continue _fun117338
                }
            case 199:
                var2 = _closure1_slot9;
                var1 = var2.isConnected;
                var1 = var1.bind(var2)();
                if (var1) {
                    _fun117338_ip = 220;
                    continue _fun117338
                }
            case 216:
                var1 = false;
                return var1;
            case 220:
                var2 = _closure1_slot11;
                var1 = var2.getIdleSince;
                var2 = var1.bind(var2)();
                var1 = null;
                if (!(var1 != var2)) {
                    _fun117338_ip = 269;
                    continue _fun117338
                }
            case 240:
                var1 = global;
                var3 = var1.Date;
                var1 = var3.now;
                var1 = var1.bind(var3)();
                var1 = var1 - var2;
                var0 = _closure1_slot18;
                if (!(!(var1 > var0))) {
                    _fun117338_ip = 273;
                    continue _fun117338
                }
            case 269:
                var0 = true;
                return var0;
            case 273:
                var0 = false;
                return var0;
            case 277:
                var0 = false;
                return var0;
            case 281:
                var0 = false;
                return var0;
            case 285:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot27 = var0;
    var0 = function arg0() {
        _fun117339: for (var _fun117339_ip = 0;;) switch (_fun117339_ip) {
            case 0:
                var3 = arg0;
                var4 = _closure1_slot26;
                var2 = {};
                var0 = false;
                var2.loading = var0;
                var0 = undefined;
                var2 = var4.bind(var0)(var3, var2);
                var4 = _closure1_slot19;
                var2 = var4.get;
                var4 = var2.bind(var4)(var3);
                if (!(var0 !== var4)) {
                    _fun117339_ip = 72;
                    continue _fun117339
                }
            case 45:
                var2 = global;
                var2 = var2.clearTimeout;
                var2 = var2.bind(var0)(var4);
                var2 = _closure1_slot19;
                var1 = var2.delete;
                var1 = var1.bind(var2)(var3);
            case 72:
                return var0;
        }
    };
    var _closure1_slot28 = var0;
    var0 = function() {
        _fun117340: for (var _fun117340_ip = 0;;) switch (_fun117340_ip) {
            case 0:
                var3 = _closure1_slot21;
                var2 = var3.get;
                var0 = _closure1_slot17;
                var2 = var2.bind(var3)(var0);
                var3 = null;
                var4 = var3 != var2;
                var8 = 0;
                var0 = 0;
                if (!var4) {
                    _fun117340_ip = 37;
                    continue _fun117340
                }
            case 34:
                var0 = var2;
            case 37:
                if (!(var0 > var8)) {
                    _fun117340_ip = 51;
                    continue _fun117340
                }
            case 41:
                var2 = 4;
                if (!(!(var0 <= var2))) {
                    _fun117340_ip = 451;
                    continue _fun117340
                }
            case 51:
                var4 = _closure1_slot28;
                var2 = _closure1_slot17;
                var6 = undefined;
                var2 = var4.bind(var6)(var2);
                var4 = _closure1_slot27;
                var2 = _closure1_slot17;
                var2 = var4.bind(var6)(var2);
                if (!var2) {
                    _fun117340_ip = 451;
                    continue _fun117340
                }
            case 85:
                var5 = _closure1_slot13;
                var4 = var5.getFeed;
                var2 = _closure1_slot17;
                var4 = var4.bind(var5)(var2);
                var5 = var3 == var4;
                var2 = undefined;
                if (var5) {
                    _fun117340_ip = 119;
                    continue _fun117340
                }
            case 113:
                var2 = var4.refresh_stale_inbox_after_ms;
            case 119:
                if (!(var3 != var2)) {
                    _fun117340_ip = 134;
                    continue _fun117340
                }
            case 123:
                var2 = _closure1_slot22;
                if (!(var3 != var2)) {
                    _fun117340_ip = 451;
                    continue _fun117340
                }
            case 134:
                var5 = var3 == var4;
                var2 = undefined;
                if (var5) {
                    _fun117340_ip = 149;
                    continue _fun117340
                }
            case 143:
                var2 = var4.expired_at;
            case 149:
                var2 = var3 == var2;
                var7 = 0;
                if (var2) {
                    _fun117340_ip = 221;
                    continue _fun117340
                }
            case 158:
                var2 = global;
                var9 = var2.Date;
                var12 = var4.expired_at;
                var5 = var9.prototype;
                var5 = Object.create(var5, {
                    constructor: {
                        value: var9
                    }
                });
                var13 = var5;
                var4 = new var13[var9](var12, var11);
                var5 = var4 instanceof Object ? var4 : var5;
                var4 = var5.getTime;
                var4 = var4.bind(var5)();
                var5 = var2.Date;
                var2 = var5.now;
                var2 = var2.bind(var5)();
                var7 = var4 - var2;
            case 221:
                var2 = _closure1_slot22;
                var2 = var3 == var2;
                var5 = 0;
                if (var2) {
                    _fun117340_ip = 295;
                    continue _fun117340
                }
            case 234:
                var2 = global;
                var9 = var2.Date;
                var12 = _closure1_slot22;
                var4 = var9.prototype;
                var4 = Object.create(var4, {
                    constructor: {
                        value: var9
                    }
                });
                var13 = var4;
                var3 = new var13[var9](var12, var11);
                var4 = var3 instanceof Object ? var3 : var4;
                var3 = var4.getTime;
                var3 = var3.bind(var4)();
                var4 = var2.Date;
                var2 = var4.now;
                var2 = var2.bind(var4)();
                var5 = var3 - var2;
            case 295:
                var0 = var0 > var8;
                var3 = 0;
                if (!var0) {
                    _fun117340_ip = 312;
                    continue _fun117340
                }
            case 304:
                var0 = _closure1_slot25;
                var3 = var0.bind(var6)();
            case 312:
                var0 = global;
                var4 = var0.Math;
                var2 = var4.max;
                var2 = var2.bind(var4)(var8, var5, var7);
                var5 = var2 + var3;
                var4 = _closure1_slot26;
                var3 = _closure1_slot17;
                var2 = {};
                var7 = false;
                var2.loading = var7;
                var9 = var0.Date;
                var8 = var0.Date;
                var7 = var8.now;
                var7 = var7.bind(var8)();
                var12 = var7 + var5;
                var8 = var9.prototype;
                var8 = Object.create(var8, {
                    constructor: {
                        value: var9
                    }
                });
                var13 = var8;
                var7 = new var13[var9](var12, var11);
                var7 = var7 instanceof Object ? var7 : var8;
                var2.nextFetchDate = var7;
                var2 = var4.bind(var6)(var3, var2);
                var3 = _closure1_slot19;
                var2 = var3.set;
                var1 = _closure1_slot17;
                var4 = var0.setTimeout;
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot30;
                    var1 = {};
                    var3 = _closure1_slot17;
                    var1.feedId = var3;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var0 = 20;
                    var3 = var3[var0];
                    var0 = undefined;
                    var3 = var4.bind(var0)(var3);
                    var3 = var3.ContentInventoryFeature;
                    var3 = var3.INBOX;
                    var1.feature = var3;
                    var0 = var2.bind(var0)(var1);
                    return var0;
                };
                var0 = var4.bind(var6)(var0, var5);
                var0 = var2.bind(var3)(var1, var0);
            case 451:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot29 = var0;
    var0 = function() {
        var0 = undefined;
        var3 = _closure1_slot31;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot30 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot8;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun117345: for (var _fun117345_ip = 0;;) switch (_fun117345_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun117345_ip = 625;
                            continue _fun117345
                        }
                    case 15:
                        var2 = var1.feedId;
                        var3 = var2;
                        var _closure4_slot0 = var2;
                        var2 = var1.feature;
                        var12 = var2;
                        var _closure4_slot1 = var2;
                        var8 = var1.force;
                        var2 = undefined;
                        if (!(var8 === var2)) {
                            _fun117345_ip = 55;
                            continue _fun117345
                        }
                    case 53:
                        var8 = false;
                    case 55:
                        var _closure4_slot2 = var8;
                        var14 = undefined;
                        var7 = undefined;
                        var6 = undefined;
                        SaveGenerator(address = 69);
                    case 67:
                        return var2;
                    case 69:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                        if (var4) {
                            _fun117345_ip = 622;
                            continue _fun117345
                        }
                    case 78:
                        var10 = _closure1_slot27;
                        var9 = var3;
                        var9 = var10.bind(var2)(var9);
                        if (var9) {
                            _fun117345_ip = 102;
                            continue _fun117345
                        }
                    case 96:
                        if (!var8) {
                            _fun117345_ip = 619;
                            continue _fun117345
                        }
                    case 102: // try_start_0
                        var9 = _closure1_slot13;
                        var8 = var9.getFeed;
                        var10 = var3;
                        var13 = var8.bind(var9)(var10);
                        var14 = var13;
                        var9 = _closure1_slot20;
                        var8 = var9.add;
                        var8 = var8.bind(var9)(var10);
                        var9 = _closure1_slot26;
                        var8 = {};
                        var11 = true;
                        var8.loading = var11;
                        var8 = var9.bind(var2)(var10, var8);
                        var9 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var8 = 16;
                        var8 = var10[var8];
                        var11 = var9.bind(var2)(var8);
                        var10 = var11.getMyContentInventory;
                        var8 = {};
                        var9 = null;
                        var15 = var9 == var13;
                        var13 = undefined;
                        if (var15) {
                            _fun117345_ip = 203;
                            continue _fun117345
                        }
                    case 195:
                        var13 = var14.refresh_token;
                    case 203:
                        var8.token = var13;
                        var13 = var3;
                        var8.feedId = var13;
                        var8.feature = var12;
                        var8 = var10.bind(var11)(var8);
                        SaveGenerator(address = 230);
                    case 228:
                        return var8;
                    case 230:
                        ResumeGenerator(result_out_reg = 8, return_bool_out_reg = 10);
                        if (var10) {
                            _fun117345_ip = 367;
                            continue _fun117345
                        }
                    case 239:
                        var11 = _closure1_slot1;
                        var12 = _closure1_slot2;
                        var10 = 17;
                        var10 = var12[var10];
                        var13 = var11.bind(var2)(var10);
                        var12 = var13.dispatch;
                        var10 = {};
                        var11 = 'CONTENT_INVENTORY_SET_FEED';
                        var10.type = var11;
                        var11 = var3;
                        var10.feedId = var11;
                        var10.feed = var8;
                        var10 = var12.bind(var13)(var10);
                        var13 = _closure1_slot21;
                        var12 = var13.set;
                        var10 = 0;
                        var10 = var12.bind(var13)(var11, var10);
                        var12 = _closure1_slot20;
                        var10 = var12.delete;
                        var10 = var10.bind(var12)(var11);
                        var12 = _closure1_slot26;
                        var10 = {};
                        var13 = false;
                        var10.loading = var13;
                        var10 = var12.bind(var2)(var11, var10);
                        var10 = _closure1_slot17;
                        if (!(var11 === var10)) {
                            _fun117345_ip = 362;
                            continue _fun117345
                        }
                    case 350:
                        _closure1_slot22 = var9;
                        var9 = _closure1_slot29;
                        var9 = var9.bind(var2)();
                    case 362: // try_end0
                        _fun117345_ip = 619;
                        continue _fun117345;
                    case 367:
                        return var8;
                    case 370: // catch_target0
                        CatchBlockStart(arg_register = 8);
                        var10 = _closure1_slot21;
                        var9 = var10.get;
                        var8 = var3;
                        var9 = var9.bind(var10)(var8);
                        var7 = var9;
                        var8 = null;
                        var9 = var8 != var9;
                        var8 = 0;
                        if (!var9) {
                            _fun117345_ip = 406;
                            continue _fun117345
                        }
                    case 403:
                        var8 = var7;
                    case 406:
                        var6 = var8;
                        var7 = 4;
                        if (!(!(var8 < var7))) {
                            _fun117345_ip = 471;
                            continue _fun117345
                        }
                    case 416:
                        var8 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var7 = 17;
                        var7 = var9[var7];
                        var9 = var8.bind(var2)(var7);
                        var8 = var9.dispatch;
                        var7 = {};
                        var10 = 'CONTENT_INVENTORY_CLEAR_FEED';
                        var7.type = var10;
                        var10 = var3;
                        var7.feedId = var10;
                        var7 = var8.bind(var9)(var7);
                        _fun117345_ip = 605;
                        continue _fun117345;
                    case 471:
                        var8 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var7 = 14;
                        var7 = var9[var7];
                        var7 = var8.bind(var2)(var7);
                        var7 = var7.Millis;
                        var7 = var7.MINUTE;
                        var11 = global;
                        var10 = var11.Math;
                        var8 = var10.pow;
                        var9 = var6;
                        var6 = 2;
                        var6 = var8.bind(var10)(var6, var9);
                        var12 = var7 * var6;
                        var6 = _closure1_slot25;
                        var10 = var6.bind(var2)(var9);
                        var7 = _closure1_slot19;
                        var6 = var7.set;
                        var8 = var3;
                        var11 = var11.setTimeout;
                        var10 = var12 + var10;
                        var5 = function() { // Environment: var5
                            var2 = _closure1_slot30;
                            var1 = {};
                            var3 = _closure4_slot0;
                            var1.feedId = var3;
                            var3 = _closure4_slot1;
                            var1.feature = var3;
                            var0 = _closure4_slot2;
                            var1.force = var0;
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                            return var0;
                        };
                        var5 = var11.bind(var2)(var5, var10);
                        var5 = var6.bind(var7)(var8, var5);
                        var7 = _closure1_slot21;
                        var6 = var7.set;
                        var5 = 1;
                        var5 = var9 + var5;
                        var5 = var6.bind(var7)(var8, var5);
                    case 605:
                        var5 = _closure1_slot20;
                        var4 = var5.delete;
                        var3 = var4.bind(var5)(var3);
                    case 619:
                        return var2;
                    case 622:
                        return var1;
                    case 625:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot31 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot31 = var0;
    var0 = function() {
        var1 = _closure1_slot29;
        var0 = undefined;
        var1 = var1.bind(var0)();
        return var0;
    };
    var _closure1_slot32 = var0;
    var0 = function() {
        var1 = _closure1_slot32;
        var0 = undefined;
        var1 = var1.bind(var0)();
        return var0;
    };
    var _closure1_slot33 = var0;
    var0 = function() {
        var2 = _closure1_slot28;
        var1 = _closure1_slot17;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var _closure1_slot34 = var0;
    var0 = function arg0() {
        var0 = arg0;
        var4 = var0.feedId;
        var3 = var0.feature;
        var2 = _closure1_slot28;
        var0 = undefined;
        var2 = var2.bind(var0)(var4);
        var2 = _closure1_slot30;
        var1 = {};
        var1.feedId = var4;
        var1.feature = var3;
        var3 = true;
        var1.force = var3;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var _closure1_slot35 = var0;
    var0 = function arg0() {
        _fun117351: for (var _fun117351_ip = 0;;) switch (_fun117351_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.refreshAfterMs;
                var3 = _closure1_slot13;
                var2 = var3.getFeed;
                var0 = _closure1_slot17;
                var5 = var2.bind(var3)(var0);
                var6 = null;
                var3 = var6 == var5;
                var0 = undefined;
                var2 = undefined;
                if (var3) {
                    _fun117351_ip = 50;
                    continue _fun117351
                }
            case 44:
                var2 = var5.refresh_stale_inbox_after_ms;
            case 50:
                if (!(var6 != var2)) {
                    _fun117351_ip = 133;
                    continue _fun117351
                }
            case 54:
                var2 = global;
                var7 = var2.Date;
                var3 = var7.now;
                var3 = var3.bind(var7)();
                if (!(var6 == var4)) {
                    _fun117351_ip = 81;
                    continue _fun117351
                }
            case 75:
                var4 = var5.refresh_stale_inbox_after_ms;
            case 81:
                var8 = var3 + var4;
                var2 = var2.Date;
                var3 = var2.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var2
                    }
                });
                var9 = var3;
                var2 = new var9[var2](var8, var7);
                var3 = var2 instanceof Object ? var2 : var3;
                var2 = var3.toUTCString;
                var2 = var2.bind(var3)();
                _closure1_slot22 = var2;
                var1 = _closure1_slot29;
                var1 = var1.bind(var0)();
            case 133:
                return var0;
        }
    };
    var _closure1_slot36 = var0;
    var0 = function arg0() {
        _fun117352: for (var _fun117352_ip = 0;;) switch (_fun117352_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.connectionId;
                var2 = var0.track;
                var1 = null;
                if (!(var1 != var3)) {
                    _fun117352_ip = 79;
                    continue _fun117352
                }
            case 20:
                var6 = _closure1_slot10;
                var5 = var6.getAccount;
                var4 = _closure1_slot15;
                var4 = var4.SPOTIFY;
                var5 = var5.bind(var6)(var3, var4);
                var6 = var1 == var5;
                var1 = undefined;
                var4 = undefined;
                if (var6) {
                    _fun117352_ip = 66;
                    continue _fun117352
                }
            case 60:
                var4 = var5.showActivity;
            case 66:
                if (!var4) {
                    _fun117352_ip = 79;
                    continue _fun117352
                }
            case 69:
                var0 = _closure1_slot23;
                var0 = var0.bind(var1)(var3, var2);
            case 79:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot37 = var0;
    var0 = function() {
        var2 = _closure1_slot30;
        var1 = {};
        var3 = _closure1_slot14;
        var3 = var3.GLOBAL_FEED;
        var1.feedId = var3;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var0 = 20;
        var3 = var3[var0];
        var0 = undefined;
        var3 = var4.bind(var0)(var3);
        var3 = var3.ContentInventoryFeature;
        var3 = var3.GAME_PROFILE;
        var1.feature = var3;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var _closure1_slot38 = var0;
    var8 = global;
    var10 = var8.Object;
    var9 = var10.defineProperty;
    var7 = {};
    var3 = true;
    var7.value = var3;
    var0 = '__esModule';
    var0 = var9.bind(var10)(var2, var0, var7);
    var0 = 0;
    var7 = var5[var0];
    var0 = undefined;
    var7 = var6.bind(var0)(var7);
    var _closure1_slot3 = var7;
    var7 = 1;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot4 = var7;
    var11 = 2;
    var7 = var5[var11];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot5 = var7;
    var7 = 3;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot6 = var7;
    var7 = 4;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot7 = var7;
    var7 = 5;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot8 = var7;
    var7 = 6;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot9 = var7;
    var7 = 7;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot10 = var7;
    var7 = 8;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot11 = var7;
    var7 = 9;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var7 = 10;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot12 = var7;
    var7 = 11;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot13 = var7;
    var7 = 12;
    var7 = var5[var7];
    var7 = var4.bind(var0)(var7);
    var9 = var7.ContentInventoryFeedKey;
    var _closure1_slot14 = var9;
    var7 = 13;
    var7 = var5[var7];
    var7 = var4.bind(var0)(var7);
    var7 = var7.PlatformTypes;
    var _closure1_slot15 = var7;
    var7 = 14;
    var10 = var5[var7];
    var10 = var6.bind(var0)(var10);
    var10 = var10.Millis;
    var10 = var10.MINUTE;
    var10 = var11 * var10;
    var _closure1_slot16 = var10;
    var9 = var9.GLOBAL_FEED;
    var _closure1_slot17 = var9;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var7 = var7.Millis;
    var9 = var7.MINUTE;
    var7 = 15;
    var9 = var7 * var9;
    var _closure1_slot18 = var9;
    var9 = var8.Map;
    var10 = var9.prototype;
    var10 = Object.create(var10, {
        constructor: {
            value: var9
        }
    });
    var15 = var10;
    var9 = new var15[var9](var14);
    var9 = var9 instanceof Object ? var9 : var10;
    var _closure1_slot19 = var9;
    var9 = var8.Set;
    var10 = var9.prototype;
    var10 = Object.create(var10, {
        constructor: {
            value: var9
        }
    });
    var15 = var10;
    var9 = new var15[var9](var14);
    var9 = var9 instanceof Object ? var9 : var10;
    var _closure1_slot20 = var9;
    var8 = var8.Map;
    var9 = var8.prototype;
    var9 = Object.create(var9, {
        constructor: {
            value: var8
        }
    });
    var15 = var9;
    var8 = new var15[var8](var14);
    var8 = var8 instanceof Object ? var8 : var9;
    var _closure1_slot21 = var8;
    var8 = null;
    var _closure1_slot22 = var8;
    var7 = var5[var7];
    var10 = var4.bind(var0)(var7);
    var9 = var10.debounce;
    var7 = 16;
    var7 = var5[var7];
    var7 = var4.bind(var0)(var7);
    var8 = var7.postTrackToContentInventory;
    var7 = {};
    var7.trailing = var3;
    var3 = 3000;
    var3 = var9.bind(var10)(var8, var3, var7);
    var _closure1_slot23 = var3;
    var3 = 21;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var1 = function(arg0) { // Environment: var1
        var2 = function arg0() {
            _fun117355: for (var _fun117355_ip = 0;;) switch (_fun117355_ip) {
                case 0:
                    var4 = this;
                    var12 = 0;
                    var0 = copyRestArgs(var12);
                    var6 = _closure1_slot4;
                    var1 = _closure2_slot0;
                    var3 = undefined;
                    var6 = var6.bind(var3)(var4, var1);
                    var9 = new Array(0);
                    var12 = var9;
                    var11 = var0;
                    var10 = 0;
                    var0 = arraySpread(var12, var11, var10);
                    var0 = _closure1_slot6;
                    var8 = var0.bind(var3)(var1);
                    var1 = _closure1_slot5;
                    var0 = _closure1_slot24;
                    var0 = var0.bind(var3)();
                    if (var0) {
                        _fun117355_ip = 84;
                        continue _fun117355
                    }
                case 71:
                    var0 = var8.apply;
                    var0 = var0.bind(var8)(var4, var9);
                    _fun117355_ip = 118;
                    continue _fun117355;
                case 84:
                    var5 = global;
                    var7 = var5.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot6;
                    var5 = var5.bind(var3)(var4);
                    var5 = var5.constructor;
                    var0 = var6.bind(var7)(var8, var9, var5);
                case 118:
                    var0 = var1.bind(var3)(var4, var0);
                    var1 = {};
                    var3 = _closure1_slot33;
                    var1.POST_CONNECTION_OPEN = var3;
                    var3 = _closure1_slot34;
                    var1.CONNECTION_CLOSED = var3;
                    var3 = _closure1_slot32;
                    var1.WINDOW_FOCUS = var3;
                    var1.IDLE = var3;
                    var1.CONTENT_INVENTORY_TOGGLE_FEED_HIDDEN = var3;
                    var3 = _closure1_slot35;
                    var1.CONTENT_INVENTORY_MANUAL_REFRESH = var3;
                    var3 = _closure1_slot36;
                    var1.CONTENT_INVENTORY_INBOX_STALE = var3;
                    var3 = _closure1_slot37;
                    var1.SPOTIFY_NEW_TRACK = var3;
                    var2 = _closure1_slot38;
                    var1.GAME_PROFILE_OPEN = var2;
                    var0.actions = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var2;
        var4 = _closure1_slot7;
        var1 = undefined;
        var3 = arg0;
        var3 = var4.bind(var1)(var2, var3);
        var0 = _closure1_slot3;
        var0 = var0.bind(var1)(var2);
        return var0;
    };
    var1 = var1.bind(var0)(var3);
    var3 = var1.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var1
        }
    });
    var15 = var3;
    var1 = new var15[var1](var14);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 22;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/content_inventory/ContentInventoryManager.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [7, 6, 15, 17, 18, 5, 3435, 4485, 4195, 12186, 11499, 7797, 8837, 660, 667, 22, 14920, 806, 9953, 12416, 14921, 4265, 2]);