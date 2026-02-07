// modules/guild_profile/GuildProfileStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var0 = function() {
        _fun60280: for (var _fun60280_ip = 0;;) switch (_fun60280_ip) {
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
                _fun60280_ip = 74;
                continue _fun60280;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot11 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot11 = var0;
    var10 = function arg0() {
        _fun60283: for (var _fun60283_ip = 0;;) switch (_fun60283_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.guildId;
                var1 = _closure1_slot9;
                var0 = var1.get;
                var5 = var0.bind(var1)(var3);
                var0 = null;
                if (!(var0 != var5)) {
                    _fun60283_ip = 71;
                    continue _fun60283
                }
            case 31:
                var2 = _closure1_slot9;
                var1 = var2.set;
                var0 = {};
                var8 = var0;
                var7 = var5;
                var5 = copyDataProperties(var8, var7);
                var6 = true;
                var5 = 'isUpdating';
                var0[var5] = var6;
                var0 = var1.bind(var2)(var3, var0);
                _fun60283_ip = 110;
                continue _fun60283;
            case 71:
                var2 = _closure1_slot9;
                var1 = var2.set;
                var0 = {};
                var7 = _closure1_slot10;
                var8 = var0;
                var4 = copyDataProperties(var8, var7);
                var5 = true;
                var4 = 'isUpdating';
                var0[var4] = var5;
                var0 = var1.bind(var2)(var3, var0);
            case 110:
                var0 = undefined;
                return var0;
        }
    };
    var4 = function arg0() {
        _fun60284: for (var _fun60284_ip = 0;;) switch (_fun60284_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.guildId;
                var5 = var0.error;
                var1 = _closure1_slot9;
                var0 = var1.get;
                var6 = var0.bind(var1)(var3);
                var0 = null;
                if (!(var0 != var6)) {
                    _fun60284_ip = 85;
                    continue _fun60284
                }
            case 36:
                var2 = _closure1_slot9;
                var1 = var2.set;
                var0 = {};
                var9 = var0;
                var8 = var6;
                var6 = copyDataProperties(var9, var8);
                var6 = 'error';
                var0[var6] = var5;
                var7 = false;
                var6 = 'isUpdating';
                var0[var6] = var7;
                var0 = var1.bind(var2)(var3, var0);
                _fun60284_ip = 122;
                continue _fun60284;
            case 85:
                var2 = _closure1_slot9;
                var1 = var2.set;
                var0 = {};
                var8 = _closure1_slot10;
                var9 = var0;
                var4 = copyDataProperties(var9, var8);
                var4 = 'error';
                var0[var4] = var5;
                var0 = var1.bind(var2)(var3, var0);
            case 122:
                var0 = undefined;
                return var0;
        }
    };
    var11 = function arg0() {
        _fun60285: for (var _fun60285_ip = 0;;) switch (_fun60285_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.invite;
                var0 = var0.profile;
                var1 = null;
                if (!(var1 != var0)) {
                    _fun60285_ip = 258;
                    continue _fun60285
                }
            case 24:
                var5 = _closure1_slot9;
                var3 = var5.get;
                var2 = var0.id;
                var7 = var3.bind(var5)(var2);
                var5 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 6;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var5.bind(var2)(var3);
                var2 = var3.buildGuildProfileFromServer;
                var6 = var2.bind(var3)(var0);
                if (!(var1 != var7)) {
                    _fun60285_ip = 171;
                    continue _fun60285
                }
            case 83:
                var5 = _closure1_slot9;
                var3 = var5.set;
                var2 = var0.id;
                var1 = {};
                var10 = var1;
                var9 = var7;
                var7 = copyDataProperties(var10, var9);
                var7 = 'profile';
                var1[var7] = var6;
                var7 = global;
                var8 = var7.Date;
                var7 = var8.now;
                var8 = var7.bind(var8)();
                var7 = 'lastSyncTimestamp';
                var1[var7] = var8;
                var7 = _closure1_slot8;
                var8 = var7.FETCHED;
                var7 = 'fetchStatus';
                var1[var7] = var8;
                var1 = var3.bind(var5)(var2, var1);
                _fun60285_ip = 258;
                continue _fun60285;
            case 171:
                var3 = _closure1_slot9;
                var2 = var3.set;
                var1 = var0.id;
                var0 = {};
                var9 = _closure1_slot10;
                var10 = var0;
                var5 = copyDataProperties(var10, var9);
                var5 = 'profile';
                var0[var5] = var6;
                var5 = global;
                var6 = var5.Date;
                var5 = var6.now;
                var6 = var5.bind(var6)();
                var5 = 'lastSyncTimestamp';
                var0[var5] = var6;
                var4 = _closure1_slot8;
                var5 = var4.FETCHED;
                var4 = 'fetchStatus';
                var0[var4] = var5;
                var0 = var2.bind(var3)(var1, var0);
            case 258:
                var0 = undefined;
                return var0;
        }
    };
    var3 = global;
    var12 = var3.Object;
    var8 = var12.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var12)(var2, var0, var1);
    var0 = 0;
    var1 = var6[var0];
    var0 = undefined;
    var1 = var7.bind(var0)(var1);
    var _closure1_slot2 = var1;
    var1 = 1;
    var1 = var6[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 2;
    var1 = var6[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 3;
    var1 = var6[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 4;
    var1 = var6[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 5;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var1 = var1.ChannelTypes;
    var _closure1_slot7 = var1;
    var1 = {};
    var8 = 'NOT_FETCHED';
    var1.NOT_FETCHED = var8;
    var8 = 'FETCHING';
    var1.FETCHING = var8;
    var8 = 'FETCHED';
    var1.FETCHED = var8;
    var _closure1_slot8 = var1;
    var3 = var3.Map;
    var8 = var3.prototype;
    var8 = Object.create(var8, {
        constructor: {
            value: var3
        }
    });
    var16 = var8;
    var3 = new var16[var3](var15);
    var3 = var3 instanceof Object ? var3 : var8;
    var _closure1_slot9 = var3;
    var3 = {
        'profile': null,
        'lastSyncTimestamp': null,
        'fetchStatus': null,
        'isUpdating': false,
        'error': null
    };
    var8 = var1.NOT_FETCHED;
    var3.fetchStatus = var8;
    var _closure1_slot10 = var3;
    var3 = 7;
    var3 = var6[var3];
    var3 = var7.bind(var0)(var3);
    var8 = var3.Store;
    var3 = function(arg0) { // Environment: var9
        var3 = function() {
            _fun60287: for (var _fun60287_ip = 0;;) switch (_fun60287_ip) {
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
                    var0 = _closure1_slot11;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun60287_ip = 69;
                        continue _fun60287
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun60287_ip = 105;
                    continue _fun60287;
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
        var0 = 'getProfile';
        var4.key = var0;
        var0 = function arg0() {
            _fun60288: for (var _fun60288_ip = 0;;) switch (_fun60288_ip) {
                case 0:
                    var4 = arg0;
                    var1 = null;
                    var2 = var1 == var4;
                    var0 = null;
                    if (var2) {
                        _fun60288_ip = 61;
                        continue _fun60288
                    }
                case 14:
                    var3 = _closure1_slot9;
                    var2 = var3.get;
                    var3 = var2.bind(var3)(var4);
                    var4 = var1 == var3;
                    var2 = undefined;
                    if (var4) {
                        _fun60288_ip = 46;
                        continue _fun60288
                    }
                case 40:
                    var2 = var3.profile;
                case 46:
                    var3 = var1 != var2;
                    var1 = null;
                    if (!var3) {
                        _fun60288_ip = 58;
                        continue _fun60288
                    }
                case 55:
                    var1 = var2;
                case 58:
                    var0 = var1;
                case 61:
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(5);
        var0[0] = var4;
        var4 = {};
        var6 = 'getFetchStatus';
        var4.key = var6;
        var6 = function arg0() {
            _fun60289: for (var _fun60289_ip = 0;;) switch (_fun60289_ip) {
                case 0:
                    var4 = arg0;
                    var2 = null;
                    if (!(var2 != var4)) {
                        _fun60289_ip = 57;
                        continue _fun60289
                    }
                case 9:
                    var3 = _closure1_slot9;
                    var0 = var3.get;
                    var3 = var0.bind(var3)(var4);
                    var4 = var2 == var3;
                    var0 = undefined;
                    if (var4) {
                        _fun60289_ip = 41;
                        continue _fun60289
                    }
                case 35:
                    var0 = var3.fetchStatus;
                case 41:
                    if (!(var2 == var0)) {
                        _fun60289_ip = 55;
                        continue _fun60289
                    }
                case 45:
                    var1 = _closure1_slot8;
                    var0 = var1.NOT_FETCHED;
                case 55:
                    _fun60289_ip = 70;
                    continue _fun60289;
                case 57:
                    var1 = _closure1_slot8;
                    var0 = var1.NOT_FETCHED;
                case 70:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getLastSyncTimestamp';
        var4.key = var6;
        var6 = function arg0() {
            _fun60290: for (var _fun60290_ip = 0;;) switch (_fun60290_ip) {
                case 0:
                    var4 = arg0;
                    var1 = null;
                    var2 = var1 == var4;
                    var0 = null;
                    if (var2) {
                        _fun60290_ip = 61;
                        continue _fun60290
                    }
                case 14:
                    var3 = _closure1_slot9;
                    var2 = var3.get;
                    var3 = var2.bind(var3)(var4);
                    var4 = var1 == var3;
                    var2 = undefined;
                    if (var4) {
                        _fun60290_ip = 46;
                        continue _fun60290
                    }
                case 40:
                    var2 = var3.lastSyncTimestamp;
                case 46:
                    var3 = var1 != var2;
                    var1 = null;
                    if (!var3) {
                        _fun60290_ip = 58;
                        continue _fun60290
                    }
                case 55:
                    var1 = var2;
                case 58:
                    var0 = var1;
                case 61:
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'getIsUpdating';
        var4.key = var6;
        var6 = function arg0() {
            _fun60291: for (var _fun60291_ip = 0;;) switch (_fun60291_ip) {
                case 0:
                    var4 = arg0;
                    var1 = null;
                    var0 = var1 != var4;
                    if (!var0) {
                        _fun60291_ip = 57;
                        continue _fun60291
                    }
                case 12:
                    var3 = _closure1_slot9;
                    var2 = var3.get;
                    var3 = var2.bind(var3)(var4);
                    var4 = var1 == var3;
                    var2 = undefined;
                    if (var4) {
                        _fun60291_ip = 44;
                        continue _fun60291
                    }
                case 38:
                    var2 = var3.isUpdating;
                case 44:
                    var1 = var1 != var2;
                    if (!var1) {
                        _fun60291_ip = 54;
                        continue _fun60291
                    }
                case 51:
                    var1 = var2;
                case 54:
                    var0 = var1;
                case 57:
                    return var0;
            }
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'getErrorCode';
        var4.key = var6;
        var5 = function arg0() {
            _fun60292: for (var _fun60292_ip = 0;;) switch (_fun60292_ip) {
                case 0:
                    var4 = arg0;
                    var1 = null;
                    var2 = var1 == var4;
                    var0 = null;
                    if (var2) {
                        _fun60292_ip = 74;
                        continue _fun60292
                    }
                case 14:
                    var3 = _closure1_slot9;
                    var2 = var3.get;
                    var3 = var2.bind(var3)(var4);
                    var4 = var1 == var3;
                    var2 = undefined;
                    if (var4) {
                        _fun60292_ip = 59;
                        continue _fun60292
                    }
                case 40:
                    var3 = var3.error;
                    var4 = var1 == var3;
                    var2 = undefined;
                    if (var4) {
                        _fun60292_ip = 59;
                        continue _fun60292
                    }
                case 54:
                    var2 = var3.code;
                case 59:
                    var3 = var1 != var2;
                    var1 = null;
                    if (!var3) {
                        _fun60292_ip = 71;
                        continue _fun60292
                    }
                case 68:
                    var1 = var2;
                case 71:
                    var0 = var1;
                case 74:
                    return var0;
            }
        };
        var4.value = var5;
        var0[4] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var8 = var3.bind(var0)(var8);
    var3 = 'GuildProfileStore';
    var8.displayName = var3;
    var3 = 8;
    var3 = var6[var3];
    var15 = var7.bind(var0)(var3);
    var3 = {};
    var12 = function arg0() {
        _fun60293: for (var _fun60293_ip = 0;;) switch (_fun60293_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.guildId;
                var1 = _closure1_slot9;
                var0 = var1.get;
                var5 = var0.bind(var1)(var3);
                var0 = null;
                if (!(var0 != var5)) {
                    _fun60293_ip = 79;
                    continue _fun60293
                }
            case 31:
                var2 = _closure1_slot9;
                var1 = var2.set;
                var0 = {};
                var8 = var0;
                var7 = var5;
                var5 = copyDataProperties(var8, var7);
                var5 = _closure1_slot8;
                var6 = var5.FETCHING;
                var5 = 'fetchStatus';
                var0[var5] = var6;
                var0 = var1.bind(var2)(var3, var0);
                _fun60293_ip = 126;
                continue _fun60293;
            case 79:
                var2 = _closure1_slot9;
                var1 = var2.set;
                var0 = {};
                var7 = _closure1_slot10;
                var8 = var0;
                var5 = copyDataProperties(var8, var7);
                var4 = _closure1_slot8;
                var5 = var4.FETCHING;
                var4 = 'fetchStatus';
                var0[var4] = var5;
                var0 = var1.bind(var2)(var3, var0);
            case 126:
                var0 = undefined;
                return var0;
        }
    };
    var3.GUILD_PROFILE_FETCH = var12;
    var12 = function arg0() {
        _fun60294: for (var _fun60294_ip = 0;;) switch (_fun60294_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.guildId;
                var6 = var0.profile;
                var1 = _closure1_slot9;
                var0 = var1.get;
                var5 = var0.bind(var1)(var3);
                var0 = null;
                if (!(var0 != var5)) {
                    _fun60294_ip = 120;
                    continue _fun60294
                }
            case 37:
                var2 = _closure1_slot9;
                var1 = var2.set;
                var0 = {};
                var9 = var0;
                var8 = var5;
                var5 = copyDataProperties(var9, var8);
                var5 = 'profile';
                var0[var5] = var6;
                var5 = global;
                var7 = var5.Date;
                var5 = var7.now;
                var7 = var5.bind(var7)();
                var5 = 'lastSyncTimestamp';
                var0[var5] = var7;
                var5 = _closure1_slot8;
                var7 = var5.FETCHED;
                var5 = 'fetchStatus';
                var0[var5] = var7;
                var0 = var1.bind(var2)(var3, var0);
                _fun60294_ip = 202;
                continue _fun60294;
            case 120:
                var2 = _closure1_slot9;
                var1 = var2.set;
                var0 = {};
                var8 = _closure1_slot10;
                var9 = var0;
                var5 = copyDataProperties(var9, var8);
                var5 = 'profile';
                var0[var5] = var6;
                var5 = global;
                var6 = var5.Date;
                var5 = var6.now;
                var6 = var5.bind(var6)();
                var5 = 'lastSyncTimestamp';
                var0[var5] = var6;
                var4 = _closure1_slot8;
                var5 = var4.FETCHED;
                var4 = 'fetchStatus';
                var0[var4] = var5;
                var0 = var1.bind(var2)(var3, var0);
            case 202:
                var0 = undefined;
                return var0;
        }
    };
    var3.GUILD_PROFILE_FETCH_SUCCESS = var12;
    var12 = function arg0() {
        _fun60295: for (var _fun60295_ip = 0;;) switch (_fun60295_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.guildId;
                var6 = var0.error;
                var1 = _closure1_slot9;
                var0 = var1.get;
                var5 = var0.bind(var1)(var3);
                var0 = null;
                if (!(var0 != var5)) {
                    _fun60295_ip = 93;
                    continue _fun60295
                }
            case 36:
                var2 = _closure1_slot9;
                var1 = var2.set;
                var0 = {};
                var9 = var0;
                var8 = var5;
                var5 = copyDataProperties(var9, var8);
                var5 = 'error';
                var0[var5] = var6;
                var5 = _closure1_slot8;
                var7 = var5.FETCHED;
                var5 = 'fetchStatus';
                var0[var5] = var7;
                var0 = var1.bind(var2)(var3, var0);
                _fun60295_ip = 149;
                continue _fun60295;
            case 93:
                var2 = _closure1_slot9;
                var1 = var2.set;
                var0 = {};
                var8 = _closure1_slot10;
                var9 = var0;
                var5 = copyDataProperties(var9, var8);
                var5 = 'error';
                var0[var5] = var6;
                var4 = _closure1_slot8;
                var5 = var4.FETCHED;
                var4 = 'fetchStatus';
                var0[var4] = var5;
                var0 = var1.bind(var2)(var3, var0);
            case 149:
                var0 = undefined;
                return var0;
        }
    };
    var3.GUILD_PROFILE_FETCH_FAILURE = var12;
    var3.GUILD_PROFILE_UPDATE = var10;
    var12 = function arg0() {
        _fun60296: for (var _fun60296_ip = 0;;) switch (_fun60296_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.guildId;
                var5 = var0.profile;
                var1 = _closure1_slot9;
                var0 = var1.get;
                var6 = var0.bind(var1)(var3);
                var0 = null;
                if (!(var0 != var6)) {
                    _fun60296_ip = 86;
                    continue _fun60296
                }
            case 37:
                var2 = _closure1_slot9;
                var1 = var2.set;
                var0 = {};
                var9 = var0;
                var8 = var6;
                var6 = copyDataProperties(var9, var8);
                var6 = 'profile';
                var0[var6] = var5;
                var7 = false;
                var6 = 'isUpdating';
                var0[var6] = var7;
                var0 = var1.bind(var2)(var3, var0);
                _fun60296_ip = 123;
                continue _fun60296;
            case 86:
                var2 = _closure1_slot9;
                var1 = var2.set;
                var0 = {};
                var8 = _closure1_slot10;
                var9 = var0;
                var4 = copyDataProperties(var9, var8);
                var4 = 'profile';
                var0[var4] = var5;
                var0 = var1.bind(var2)(var3, var0);
            case 123:
                var0 = undefined;
                return var0;
        }
    };
    var3.GUILD_PROFILE_UPDATE_SUCCESS = var12;
    var3.GUILD_PROFILE_UPDATE_FAILURE = var4;
    var12 = function arg0() {
        _fun60297: for (var _fun60297_ip = 0;;) switch (_fun60297_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.form;
                var4 = var0.guildId;
                var1 = null;
                var3 = var1 == var2;
                var0 = undefined;
                var7 = undefined;
                if (var3) {
                    _fun60297_ip = 33;
                    continue _fun60297
                }
            case 27:
                var7 = var2.profile;
            case 33:
                if (!(var1 != var7)) {
                    _fun60297_ip = 226;
                    continue _fun60297
                }
            case 40:
                var3 = _closure1_slot9;
                var2 = var3.get;
                var6 = var2.bind(var3)(var4);
                if (!(var1 != var6)) {
                    _fun60297_ip = 144;
                    continue _fun60297
                }
            case 61:
                var3 = _closure1_slot9;
                var2 = var3.set;
                var1 = {};
                var10 = var1;
                var9 = var6;
                var6 = copyDataProperties(var10, var9);
                var6 = 'profile';
                var1[var6] = var7;
                var6 = global;
                var8 = var6.Date;
                var6 = var8.now;
                var8 = var6.bind(var8)();
                var6 = 'lastSyncTimestamp';
                var1[var6] = var8;
                var6 = _closure1_slot8;
                var8 = var6.FETCHED;
                var6 = 'fetchStatus';
                var1[var6] = var8;
                var1 = var2.bind(var3)(var4, var1);
                _fun60297_ip = 226;
                continue _fun60297;
            case 144:
                var3 = _closure1_slot9;
                var2 = var3.set;
                var1 = {};
                var9 = _closure1_slot10;
                var10 = var1;
                var6 = copyDataProperties(var10, var9);
                var6 = 'profile';
                var1[var6] = var7;
                var6 = global;
                var7 = var6.Date;
                var6 = var7.now;
                var7 = var6.bind(var7)();
                var6 = 'lastSyncTimestamp';
                var1[var6] = var7;
                var5 = _closure1_slot8;
                var6 = var5.FETCHED;
                var5 = 'fetchStatus';
                var1[var5] = var6;
                var1 = var2.bind(var3)(var4, var1);
            case 226:
                return var0;
        }
    };
    var3.MEMBER_VERIFICATION_FORM_UPDATE = var12;
    var3.INVITE_RESOLVE_SUCCESS = var11;
    var3.INSTANT_INVITE_CREATE_SUCCESS = var11;
    var11 = function arg0() {
        _fun60298: for (var _fun60298_ip = 0;;) switch (_fun60298_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.channel;
                var3 = var0.type;
                var2 = _closure1_slot7;
                var2 = var2.GUILD_ANNOUNCEMENT;
                var2 = var3 === var2;
                if (!var2) {
                    _fun60298_ip = 44;
                    continue _fun60298
                }
            case 33:
                var4 = var0.guild_id;
                var3 = null;
                var2 = var3 != var4;
            case 44:
                if (!var2) {
                    _fun60298_ip = 66;
                    continue _fun60298
                }
            case 47:
                var2 = _closure1_slot9;
                var1 = var2.delete;
                var0 = var0.guild_id;
                var0 = var1.bind(var2)(var0);
            case 66:
                var0 = undefined;
                return var0;
        }
    };
    var3.CHANNEL_CREATE = var11;
    var11 = function arg0() {
        _fun60299: for (var _fun60299_ip = 0;;) switch (_fun60299_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.guildId;
                var1 = var0.enabled;
                var0 = null;
                var0 = var0 != var2;
                if (!var0) {
                    _fun60299_ip = 25;
                    continue _fun60299
                }
            case 22:
                var0 = var1;
            case 25:
                if (!var0) {
                    _fun60299_ip = 45;
                    continue _fun60299
                }
            case 28:
                var1 = _closure1_slot9;
                var0 = var1.delete;
                var0 = var0.bind(var1)(var2);
            case 45:
                var0 = undefined;
                return var0;
        }
    };
    var3.GUILD_SETTINGS_SET_WIDGET = var11;
    var11 = function arg0() {
        _fun60300: for (var _fun60300_ip = 0;;) switch (_fun60300_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.guild;
                var4 = _closure1_slot9;
                var3 = var4.get;
                var2 = var0.id;
                var4 = var3.bind(var4)(var2);
                var3 = null;
                if (!(var3 != var4)) {
                    _fun60300_ip = 207;
                    continue _fun60300
                }
            case 39:
                var2 = var4.profile;
                if (!(var3 != var2)) {
                    _fun60300_ip = 207;
                    continue _fun60300
                }
            case 52:
                var5 = {};
                var8 = var4.profile;
                var9 = var5;
                var2 = copyDataProperties(var9, var8);
                var6 = var0.name;
                var2 = 'name';
                var5[var2] = var6;
                var2 = var0.icon;
                var7 = var3 != var2;
                var6 = null;
                if (!var7) {
                    _fun60300_ip = 98;
                    continue _fun60300
                }
            case 95:
                var6 = var2;
            case 98:
                var2 = 'icon';
                var5[var2] = var6;
                var2 = var0.description;
                var7 = var3 != var2;
                var6 = '';
                if (!var7) {
                    _fun60300_ip = 126;
                    continue _fun60300
                }
            case 123:
                var6 = var2;
            case 126:
                var2 = 'description';
                var5[var2] = var6;
                var2 = var0.discovery_splash;
                var6 = var3 != var2;
                var3 = null;
                if (!var6) {
                    _fun60300_ip = 153;
                    continue _fun60300
                }
            case 150:
                var3 = var2;
            case 153:
                var2 = 'customBanner';
                var5[var2] = var3;
                var3 = _closure1_slot9;
                var2 = var3.set;
                var1 = var0.id;
                var0 = {};
                var9 = var0;
                var8 = var4;
                var4 = copyDataProperties(var9, var8);
                var4 = 'profile';
                var0[var4] = var5;
                var0 = var2.bind(var3)(var1, var0);
                var0 = undefined;
                return var0;
            case 207:
                var0 = false;
                return var0;
        }
    };
    var3.GUILD_UPDATE = var11;
    var3.GUILD_PROFILE_UPDATE_VISIBILITY = var10;
    var9 = function arg0() {
        _fun60301: for (var _fun60301_ip = 0;;) switch (_fun60301_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.guildId;
                var7 = var0.visibility;
                var2 = _closure1_slot9;
                var0 = var2.get;
                var6 = var0.bind(var2)(var4);
                var3 = null;
                var2 = var3 == var6;
                var0 = undefined;
                var5 = undefined;
                if (var2) {
                    _fun60301_ip = 50;
                    continue _fun60301
                }
            case 44:
                var5 = var6.profile;
            case 50:
                var2 = var3 != var6;
                if (!var2) {
                    _fun60301_ip = 61;
                    continue _fun60301
                }
            case 57:
                var2 = var3 != var5;
            case 61:
                if (!var2) {
                    _fun60301_ip = 132;
                    continue _fun60301
                }
            case 64:
                var3 = _closure1_slot9;
                var2 = var3.set;
                var1 = {};
                var10 = var1;
                var9 = var6;
                var6 = copyDataProperties(var10, var9);
                var8 = false;
                var6 = 'isUpdating';
                var1[var6] = var8;
                var6 = {};
                var10 = var6;
                var9 = var5;
                var5 = copyDataProperties(var10, var9);
                var5 = 'visibility';
                var6[var5] = var7;
                var5 = 'profile';
                var1[var5] = var6;
                var1 = var2.bind(var3)(var4, var1);
            case 132:
                return var0;
        }
    };
    var3.GUILD_PROFILE_UPDATE_VISIBILITY_SUCCESS = var9;
    var3.GUILD_PROFILE_UPDATE_VISIBILITY_FAILURE = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var8
        }
    });
    var16 = var4;
    var14 = var3;
    var3 = new var16[var8](var15, var14, var13);
    var3 = var3 instanceof Object ? var3 : var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_profile/GuildProfileStore.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.GuildProfileFetchStatus = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 660, 7450, 566, 806, 2]);