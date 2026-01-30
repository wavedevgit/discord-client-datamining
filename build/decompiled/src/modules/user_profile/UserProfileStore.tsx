// modules/user_profile/UserProfileStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var9 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var5;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var3
        _fun42601: for (var _fun42601_ip = 0;;) switch (_fun42601_ip) {
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
                _fun42601_ip = 74;
                continue _fun42601;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot32 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot32 = var0;
    var0 = function(arg0, arg1) { // Original name: _createForOfIteratorHelperLoose, environment: var3
        _fun42604: for (var _fun42604_ip = 0;;) switch (_fun42604_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun42604_ip = 45;
                    continue _fun42604
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 45:
                if (var1) {
                    _fun42604_ip = 54;
                    continue _fun42604
                }
            case 48:
                var1 = var2["@@iterator"];
            case 54:
                if (var1) {
                    _fun42604_ip = 342;
                    continue _fun42604
                }
            case 60:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun42604_ip = 322;
                    continue _fun42604
                }
            case 85:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun42604_ip = 282;
                    continue _fun42604
                }
            case 95:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun42604_ip = 269;
                    continue _fun42604
                }
            case 109:
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
                    _fun42604_ip = 162;
                    continue _fun42604
                }
            case 157:
                var6 = var2.constructor;
            case 162:
                var9 = var8;
                if (!var6) {
                    _fun42604_ip = 178;
                    continue _fun42604
                }
            case 168:
                var6 = var2.constructor;
                var9 = var6.name;
            case 178:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun42604_ip = 248;
                    continue _fun42604
                }
            case 186:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun42604_ip = 248;
                    continue _fun42604
                }
            case 194:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun42604_ip = 233;
                    continue _fun42604
                }
            case 204:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun42604_ip = 246;
                    continue _fun42604
                }
            case 233:
                var8 = _closure1_slot34;
                var6 = var8.bind(var7)(var2, var7);
            case 246:
                _fun42604_ip = 264;
                continue _fun42604;
            case 248:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 264:
                var5 = var6;
                _fun42604_ip = 282;
                continue _fun42604;
            case 269:
                var6 = _closure1_slot34;
                var5 = var6.bind(var7)(var2, var7);
            case 282:
                var3 = var5;
                if (var3) {
                    _fun42604_ip = 322;
                    continue _fun42604
                }
            case 288:
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
            case 322:
                if (!var3) {
                    _fun42604_ip = 329;
                    continue _fun42604
                }
            case 325:
                _closure2_slot0 = var3;
            case 329:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun42605: for (var _fun42605_ip = 0;;) switch (_fun42605_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun42605_ip = 56;
                                continue _fun42605
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
                            _fun42605_ip = 67;
                            continue _fun42605;
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
            case 342:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot33 = var0;
    var0 = function(arg0, arg1) { // Original name: _arrayLikeToArray, environment: var3
        _fun42606: for (var _fun42606_ip = 0;;) switch (_fun42606_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun42606_ip = 23;
                    continue _fun42606
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun42606_ip = 33;
                    continue _fun42606
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
                    _fun42606_ip = 70;
                    continue _fun42606
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun42606_ip = 55;
                    continue _fun42606
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot34 = var0;
    var0 = function(arg0) { // Original name: createUserWidgetFromServer, environment: var3
        _fun42607: for (var _fun42607_ip = 0;;) switch (_fun42607_ip) {
            case 0:
                var4 = arg0;
                var0 = var4.data;
                var3 = var0.type;
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var6 = 12;
                var1 = var1[var6];
                var5 = undefined;
                var1 = var2.bind(var5)(var1);
                var1 = var1.WidgetType;
                var1 = var1.CURRENT_GAMES;
                if (!(var1 !== var3)) {
                    _fun42607_ip = 274;
                    continue _fun42607
                }
            case 57:
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var6];
                var1 = var2.bind(var5)(var1);
                var1 = var1.WidgetType;
                var1 = var1.FAVORITE_GAMES;
                if (!(var1 !== var3)) {
                    _fun42607_ip = 274;
                    continue _fun42607
                }
            case 93:
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var6];
                var1 = var2.bind(var5)(var1);
                var1 = var1.WidgetType;
                var1 = var1.PLAYED_GAMES;
                if (!(var1 !== var3)) {
                    _fun42607_ip = 274;
                    continue _fun42607
                }
            case 129:
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var6];
                var1 = var2.bind(var5)(var1);
                var1 = var1.WidgetType;
                var1 = var1.WANT_TO_PLAY_GAMES;
                if (!(var1 !== var3)) {
                    _fun42607_ip = 274;
                    continue _fun42607
                }
            case 162:
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var6];
                var1 = var2.bind(var5)(var1);
                var1 = var1.WidgetType;
                var1 = var1.APPLICATION;
                if (!(var1 !== var3)) {
                    _fun42607_ip = 197;
                    continue _fun42607
                }
            case 195:
                return var5;
            case 197:
                var2 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 15;
                var1 = var6[var1];
                var1 = var2.bind(var5)(var1);
                var6 = var1.ApplicationWidget;
                var1 = {};
                var2 = var4.id;
                var1.id = var2;
                var2 = var4.data;
                var2 = var2.application_id;
                var1.applicationId = var2;
                var2 = var6.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var6
                    }
                });
                var11 = var2;
                var10 = var1;
                var1 = new var11[var6](var10, var9);
                var1 = var1 instanceof Object ? var1 : var2;
                return var1;
            case 274:
                var1 = var4.data;
                var6 = var1.games;
                var2 = var6.map;
                var1 = function(arg0) { // Environment: var1
                    var1 = arg0;
                    var0 = {};
                    var2 = var1.game_id;
                    var0.applicationId = var2;
                    var2 = var1.comment;
                    var0.comment = var2;
                    var1 = var1.tags;
                    var0.tags = var1;
                    return var0;
                };
                var8 = var2.bind(var6)(var1);
                var2 = _closure1_slot1;
                var6 = _closure1_slot2;
                var1 = 13;
                var1 = var6[var1];
                var7 = var2.bind(var5)(var1);
                var2 = var7.uniqBy;
                var1 = 'applicationId';
                var1 = var2.bind(var7)(var8, var1);
                var2 = _closure1_slot0;
                var0 = 14;
                var0 = var6[var0];
                var0 = var2.bind(var5)(var0);
                var2 = var0.BaseGameWidget;
                var0 = {};
                var4 = var4.id;
                var0.id = var4;
                var0.type = var3;
                var0.games = var1;
                var1 = var2.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var2
                    }
                });
                var11 = var1;
                var10 = var0;
                var0 = new var11[var2](var10, var9);
                var0 = var0 instanceof Object ? var0 : var1;
                return var0;
        }
    };
    var _closure1_slot35 = var0;
    var0 = function(arg0) { // Original name: checkUserProfileEffectExpiry, environment: var3
        _fun42609: for (var _fun42609_ip = 0;;) switch (_fun42609_ip) {
            case 0:
                var3 = arg0;
                var _closure2_slot0 = var3;
                var2 = _closure1_slot18;
                var1 = var2.get;
                var2 = var1.bind(var2)(var3);
                var6 = null;
                if (!(var6 != var2)) {
                    _fun42609_ip = 160;
                    continue _fun42609
                }
            case 35:
                var5 = var2.profileEffect;
                var8 = var6 == var5;
                var1 = undefined;
                var7 = undefined;
                if (var8) {
                    _fun42609_ip = 58;
                    continue _fun42609
                }
            case 52:
                var7 = var5.expiresAt;
            case 58:
                if (!(var6 != var7)) {
                    _fun42609_ip = 160;
                    continue _fun42609
                }
            case 62:
                var7 = var5.expiresAt;
                var5 = 1000;
                var8 = var5 * var7;
                var5 = global;
                var9 = var5.Date;
                var7 = var9.now;
                var7 = var7.bind(var9)();
                var10 = var8 - var7;
                var7 = 0;
                if (!(!(var10 <= var7))) {
                    _fun42609_ip = 164;
                    continue _fun42609
                }
            case 105:
                var8 = _closure1_slot20;
                var7 = var8.get;
                var7 = var7.bind(var8)(var3);
                if (!(var6 != var7)) {
                    _fun42609_ip = 160;
                    continue _fun42609
                }
            case 123:
                var6 = var7.start;
                var9 = var5.Math;
                var8 = var9.min;
                var5 = _closure1_slot17;
                var5 = var8.bind(var9)(var5, var10);
                var4 = function() { // Environment: var4
                    var2 = _closure1_slot36;
                    var1 = _closure2_slot0;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    return var0;
                };
                var4 = var6.bind(var7)(var5, var4);
            case 160:
                var4 = undefined;
                return var4;
            case 164:
                var2.profileEffect = var1;
                var2 = _closure1_slot20;
                var1 = var2.delete;
                var1 = var1.bind(var2)(var3);
                var1 = _closure1_slot31;
                var0 = var1.emitChange;
                var0 = var0.bind(var1)();
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot36 = var0;
    var0 = function(arg0, arg1) { // Original name: checkGuildMemberProfileEffectExpiry, environment: var3
        _fun42611: for (var _fun42611_ip = 0;;) switch (_fun42611_ip) {
            case 0:
                var5 = arg0;
                var3 = arg1;
                var _closure2_slot0 = var5;
                var _closure2_slot1 = var3;
                var4 = _closure1_slot19;
                var1 = var4.get;
                var6 = var1.bind(var4)(var5);
                var1 = null;
                if (!(var1 != var6)) {
                    _fun42611_ip = 203;
                    continue _fun42611
                }
            case 42:
                var4 = var6.get;
                var7 = var4.bind(var6)(var3);
                if (!(var1 != var7)) {
                    _fun42611_ip = 203;
                    continue _fun42611
                }
            case 59:
                var4 = var7.profileEffect;
                var10 = var1 == var4;
                var8 = undefined;
                var9 = undefined;
                if (var10) {
                    _fun42611_ip = 82;
                    continue _fun42611
                }
            case 76:
                var9 = var4.expiresAt;
            case 82:
                if (!(var1 != var9)) {
                    _fun42611_ip = 203;
                    continue _fun42611
                }
            case 86:
                var9 = var4.expiresAt;
                var4 = 1000;
                var10 = var4 * var9;
                var4 = global;
                var11 = var4.Date;
                var9 = var11.now;
                var9 = var9.bind(var11)();
                var13 = var10 - var9;
                var9 = 0;
                if (!(!(var13 <= var9))) {
                    _fun42611_ip = 207;
                    continue _fun42611
                }
            case 129:
                var10 = _closure1_slot21;
                var9 = var10.get;
                var11 = var9.bind(var10)(var5);
                var9 = var1 == var11;
                var10 = undefined;
                if (var9) {
                    _fun42611_ip = 162;
                    continue _fun42611
                }
            case 152:
                var9 = var11.get;
                var10 = var9.bind(var11)(var3);
            case 162:
                if (!(var1 != var10)) {
                    _fun42611_ip = 203;
                    continue _fun42611
                }
            case 166:
                var9 = var10.start;
                var12 = var4.Math;
                var11 = var12.min;
                var4 = _closure1_slot17;
                var4 = var11.bind(var12)(var4, var13);
                var2 = function() { // Environment: var2
                    var3 = _closure1_slot37;
                    var2 = _closure2_slot0;
                    var1 = _closure2_slot1;
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2, var1);
                    return var0;
                };
                var2 = var9.bind(var10)(var4, var2);
            case 203:
                var2 = undefined;
                return var2;
            case 207:
                var4 = var6.set;
                var2 = {};
                var15 = var2;
                var14 = var7;
                var7 = copyDataProperties(var15, var14);
                var7 = 'profileEffect';
                var2[var7] = var8;
                var2 = var4.bind(var6)(var3, var2);
                var4 = _closure1_slot21;
                var2 = var4.get;
                var2 = var2.bind(var4)(var5);
                if (!(var1 != var2)) {
                    _fun42611_ip = 267;
                    continue _fun42611
                }
            case 257:
                var1 = var2.delete;
                var1 = var1.bind(var2)(var3);
            case 267:
                var1 = _closure1_slot31;
                var0 = var1.emitChange;
                var0 = var0.bind(var1)();
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot37 = var0;
    var0 = function() { // Original name: handleLogout, environment: var3
        var2 = _closure1_slot15;
        var0 = var2.clear;
        var0 = var0.bind(var2)();
        var2 = _closure1_slot16;
        var0 = var2.clear;
        var0 = var0.bind(var2)();
        var2 = _closure1_slot18;
        var0 = var2.clear;
        var0 = var0.bind(var2)();
        var2 = _closure1_slot19;
        var0 = var2.clear;
        var0 = var0.bind(var2)();
        var2 = _closure1_slot22;
        var0 = var2.clear;
        var0 = var0.bind(var2)();
        var2 = _closure1_slot23;
        var0 = var2.clear;
        var0 = var0.bind(var2)();
        var2 = _closure1_slot24;
        var0 = var2.clear;
        var0 = var0.bind(var2)();
        var0 = false;
        _closure1_slot29 = var0;
        var0 = undefined;
        return var0;
    };
    var _closure1_slot38 = var0;
    var0 = function(arg0) { // Original name: handleMutualFriendsFetchStart, environment: var3
        var0 = arg0;
        var2 = var0.userId;
        var1 = _closure1_slot16;
        var0 = var1.add;
        var0 = var0.bind(var1)(var2);
        var0 = undefined;
        return var0;
    };
    var _closure1_slot39 = var0;
    var0 = function(arg0) { // Original name: handleMutualFriendsFetchFailure, environment: var3
        var0 = arg0;
        var2 = var0.userId;
        var1 = _closure1_slot16;
        var0 = var1.delete;
        var0 = var0.bind(var1)(var2);
        var0 = undefined;
        return var0;
    };
    var _closure1_slot40 = var0;
    var0 = function(arg0) { // Original name: getMutualFriends, environment: var3
        var2 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 13;
        var1 = var3[var1];
        var3 = undefined;
        var2 = var2.bind(var3)(var1);
        var1 = arg0;
        var3 = var2.bind(var3)(var1);
        var2 = var3.map;
        var1 = function(arg0) { // Environment: var0
            var1 = arg0;
            var0 = {};
            var2 = var1.id;
            var0.key = var2;
            var3 = _closure1_slot9;
            var4 = var3.prototype;
            var4 = Object.create(var4, {
                constructor: {
                    value: var3
                }
            });
            var6 = var4;
            var5 = var1;
            var3 = new var6[var3](var5, var4);
            var3 = var3 instanceof Object ? var3 : var4;
            var0.user = var3;
            var3 = _closure1_slot12;
            var2 = var3.getStatus;
            var1 = var1.id;
            var1 = var2.bind(var3)(var1);
            var0.status = var1;
            return var0;
        };
        var2 = var2.bind(var3)(var1);
        var1 = var2.sortBy;
        var0 = function(arg0) { // Environment: var0
            var0 = arg0;
            var0 = var0.user;
            var1 = var0.username;
            var0 = var1.toLowerCase;
            var0 = var0.bind(var1)();
            return var0;
        };
        var1 = var1.bind(var2)(var0);
        var0 = var1.value;
        var0 = var0.bind(var1)();
        return var0;
    };
    var _closure1_slot41 = var0;
    var0 = function(arg0) { // Original name: handleMutualFriendsFetchSuccess, environment: var3
        var1 = arg0;
        var4 = _closure1_slot16;
        var3 = var4.delete;
        var0 = var1.userId;
        var0 = var3.bind(var4)(var0);
        var6 = _closure1_slot22;
        var5 = var6.set;
        var4 = var1.userId;
        var7 = _closure1_slot41;
        var3 = var1.mutualFriends;
        var0 = undefined;
        var3 = var7.bind(var0)(var3);
        var3 = var5.bind(var6)(var4, var3);
        var4 = _closure1_slot23;
        var3 = var4.set;
        var2 = var1.userId;
        var1 = var1.mutualFriends;
        var1 = var1.length;
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var _closure1_slot42 = var0;
    var0 = function(arg0) { // Original name: handleProfileFetch, environment: var3
        _fun42620: for (var _fun42620_ip = 0;;) switch (_fun42620_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.userProfile;
                var3 = var0.fetchStartedAt;
                var0 = undefined;
                var _closure2_slot0 = var0;
                var _closure2_slot1 = var0;
                var _closure2_slot2 = var0;
                var2 = var1.guild_member_profile;
                var4 = null;
                var6 = var4 == var2;
                var8 = undefined;
                if (var6) {
                    _fun42620_ip = 53;
                    continue _fun42620
                }
            case 48:
                var8 = var2.guild_id;
            case 53:
                if (!(var4 == var8)) {
                    _fun42620_ip = 64;
                    continue _fun42620
                }
            case 57:
                var8 = _closure1_slot14;
            case 64:
                var9 = _closure1_slot15;
                var7 = var9.get;
                var6 = var1.user;
                var6 = var6.id;
                var7 = var7.bind(var9)(var6);
                if (!(var4 != var7)) {
                    _fun42620_ip = 105;
                    continue _fun42620
                }
            case 95:
                var6 = var7.delete;
                var6 = var6.bind(var7)(var8);
            case 105:
                var8 = _closure1_slot16;
                var7 = var8.delete;
                var6 = var1.user;
                var6 = var6.id;
                var6 = var7.bind(var8)(var6);
                var6 = var1.mutual_guilds;
                if (!(var4 != var6)) {
                    _fun42620_ip = 235;
                    continue _fun42620
                }
            case 139:
                var6 = {};
                _closure2_slot0 = var6;
                var8 = var1.mutual_guilds;
                var7 = var8.forEach;
                var6 = function(arg0) { // Environment: var5
                    _fun42621: for (var _fun42621_ip = 0;;) switch (_fun42621_ip) {
                        case 0:
                            var0 = arg0;
                            var2 = var0.id;
                            var3 = var0.nick;
                            var1 = _closure1_slot11;
                            var0 = var1.getGuild;
                            var4 = var0.bind(var1)(var2);
                            var0 = null;
                            if (!(var0 != var4)) {
                                _fun42621_ip = 59;
                                continue _fun42621
                            }
                        case 37:
                            var1 = _closure2_slot0;
                            var0 = {};
                            var0.guild = var4;
                            var0.nick = var3;
                            var1[var2] = var0;
                        case 59:
                            var0 = undefined;
                            return var0;
                    }
                };
                var6 = var7.bind(var8)(var6);
                var9 = _closure1_slot24;
                var8 = var9.set;
                var6 = var1.user;
                var7 = var6.id;
                var10 = _closure1_slot13;
                var6 = var10.getFlattenedGuildIds;
                var11 = var6.bind(var10)();
                var10 = var11.filter;
                var6 = function(arg0) { // Environment: var5
                    var1 = _closure2_slot0;
                    var0 = arg0;
                    var1 = var1[var0];
                    var0 = null;
                    var0 = var0 != var1;
                    return var0;
                };
                var11 = var10.bind(var11)(var6);
                var10 = var11.map;
                var6 = function(arg0) { // Environment: var5
                    var2 = arg0;
                    var0 = {};
                    var3 = _closure2_slot0;
                    var3 = var3[var2];
                    var3 = var3.guild;
                    var0.guild = var3;
                    var1 = _closure2_slot0;
                    var1 = var1[var2];
                    var1 = var1.nick;
                    var0.nick = var1;
                    return var0;
                };
                var6 = var10.bind(var11)(var6);
                var6 = var8.bind(var9)(var7, var6);
            case 235:
                var6 = var1.mutual_friends_count;
                if (!(var4 != var6)) {
                    _fun42620_ip = 311;
                    continue _fun42620
                }
            case 245:
                var7 = var1.mutual_friends_count;
                var9 = _closure1_slot23;
                var8 = var9.set;
                var6 = var1.user;
                var6 = var6.id;
                var6 = var8.bind(var9)(var6, var7);
                var6 = 0;
                if (!(var6 === var7)) {
                    _fun42620_ip = 311;
                    continue _fun42620
                }
            case 282:
                var9 = _closure1_slot22;
                var8 = var9.set;
                var6 = var1.user;
                var7 = var6.id;
                var6 = _closure1_slot25;
                var6 = var8.bind(var9)(var7, var6);
            case 311:
                var6 = var1.mutual_friends;
                if (!(var4 != var6)) {
                    _fun42620_ip = 397;
                    continue _fun42620
                }
            case 321:
                var9 = _closure1_slot22;
                var8 = var9.set;
                var6 = var1.user;
                var7 = var6.id;
                var10 = _closure1_slot41;
                var6 = var1.mutual_friends;
                var6 = var10.bind(var0)(var6);
                var6 = var8.bind(var9)(var7, var6);
                var9 = _closure1_slot23;
                var8 = var9.set;
                var6 = var1.user;
                var7 = var6.id;
                var6 = var1.mutual_friends;
                var6 = var6.length;
                var6 = var8.bind(var9)(var7, var6);
            case 397:
                var6 = var1.premium_since;
                var6 = var4 != var6;
                var13 = null;
                if (!var6) {
                    _fun42620_ip = 446;
                    continue _fun42620
                }
            case 412:
                var6 = global;
                var8 = var6.Date;
                var20 = var1.premium_since;
                var7 = var8.prototype;
                var7 = Object.create(var7, {
                    constructor: {
                        value: var8
                    }
                });
                var21 = var7;
                var6 = new var21[var8](var20, var19);
                var13 = var6 instanceof Object ? var6 : var7;
            case 446:
                _closure2_slot1 = var13;
                var6 = var1.premium_guild_since;
                var6 = var4 != var6;
                var12 = null;
                if (!var6) {
                    _fun42620_ip = 499;
                    continue _fun42620
                }
            case 465:
                var6 = global;
                var8 = var6.Date;
                var20 = var1.premium_guild_since;
                var7 = var8.prototype;
                var7 = Object.create(var7, {
                    constructor: {
                        value: var8
                    }
                });
                var21 = var7;
                var6 = new var21[var8](var20, var19);
                var12 = var6 instanceof Object ? var6 : var7;
            case 499:
                _closure2_slot2 = var12;
                var14 = var1.application;
                var6 = var1.badges;
                if (!(var4 == var6)) {
                    _fun42620_ip = 524;
                    continue _fun42620
                }
            case 518:
                var11 = new Array(0);
                _fun42620_ip = 545;
                continue _fun42620;
            case 524:
                var8 = var1.badges;
                var7 = var8.map;
                var6 = function(arg0) { // Environment: var5
                    _fun42624: for (var _fun42624_ip = 0;;) switch (_fun42624_ip) {
                        case 0:
                            var1 = arg0;
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var2 = 16;
                            var2 = var4[var2];
                            var7 = undefined;
                            var4 = var3.bind(var7)(var2);
                            var3 = var4.getTieredTenureBadgeData;
                            var2 = var1.id;
                            var4 = var3.bind(var4)(var2);
                            var3 = var1.id;
                            var2 = 'premium';
                            if (!(var2 !== var3)) {
                                _fun42624_ip = 63;
                                continue _fun42624
                            }
                        case 57:
                            var2 = null;
                            if (!(var2 != var4)) {
                                _fun42624_ip = 79;
                                continue _fun42624
                            }
                        case 63:
                            var2 = _closure2_slot1;
                            var3 = null;
                            if (!(var3 == var2)) {
                                _fun42624_ip = 218;
                                continue _fun42624
                            }
                        case 79:
                            var8 = var1.id;
                            var5 = var8.startsWith;
                            var2 = 'guild_booster_lvl';
                            var5 = var5.bind(var8)(var2);
                            var2 = var1;
                            if (!var5) {
                                _fun42624_ip = 216;
                                continue _fun42624
                            }
                        case 107:
                            var8 = _closure2_slot2;
                            var5 = null;
                            var2 = var1;
                            if (!(var5 != var8)) {
                                _fun42624_ip = 216;
                                continue _fun42624
                            }
                        case 123:
                            var5 = {};
                            var15 = var5;
                            var14 = var1;
                            var8 = copyDataProperties(var15, var14);
                            var9 = _closure1_slot0;
                            var13 = _closure1_slot2;
                            var8 = 17;
                            var10 = var13[var8];
                            var10 = var9.bind(var7)(var10);
                            var11 = var10.intl;
                            var10 = var11.formatToPlainString;
                            var8 = var13[var8];
                            var8 = var9.bind(var7)(var8);
                            var8 = var8.t;
                            var9 = var8.IWkAq7;
                            var8 = {};
                            var12 = _closure2_slot2;
                            var8.date = var12;
                            var9 = var10.bind(var11)(var9, var8);
                            var8 = 'description';
                            var5[var8] = var9;
                            var2 = var5;
                        case 216:
                            return var2;
                        case 218:
                            var5 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var8 = 17;
                            var9 = var2[var8];
                            var9 = var5.bind(var7)(var9);
                            var10 = var9.intl;
                            var9 = var10.formatToPlainString;
                            var2 = var2[var8];
                            var2 = var5.bind(var7)(var2);
                            var2 = var2.t;
                            var5 = var2["8zbGNR"];
                            var2 = {};
                            var11 = _closure2_slot1;
                            var2.date = var11;
                            var2 = var9.bind(var10)(var5, var2);
                            if (!(var3 != var4)) {
                                _fun42624_ip = 353;
                                continue _fun42624
                            }
                        case 289:
                            var3 = _closure1_slot0;
                            var0 = _closure1_slot2;
                            var4 = var0[var8];
                            var4 = var3.bind(var7)(var4);
                            var5 = var4.intl;
                            var4 = var5.formatToPlainString;
                            var0 = var0[var8];
                            var0 = var3.bind(var7)(var0);
                            var0 = var0.t;
                            var3 = var0.Hu4jfi;
                            var0 = {};
                            var6 = _closure2_slot1;
                            var0.date = var6;
                            var2 = var4.bind(var5)(var3, var0);
                        case 353:
                            var0 = {};
                            var15 = var0;
                            var14 = var1;
                            var1 = copyDataProperties(var15, var14);
                            var1 = 'description';
                            var0[var1] = var2;
                            return var0;
                    }
                };
                var11 = var7.bind(var8)(var6);
            case 545:
                var6 = _closure1_slot30;
                var6 = var4 != var6;
                if (!var6) {
                    _fun42620_ip = 579;
                    continue _fun42620
                }
            case 556:
                var7 = _closure1_slot30;
                var8 = var7.userId;
                var7 = var1.user;
                var7 = var7.id;
                var6 = var8 === var7;
            case 579:
                if (!var6) {
                    _fun42620_ip = 633;
                    continue _fun42620
                }
            case 582:
                var6 = global;
                var7 = var6.Date;
                var6 = var7.now;
                var7 = var6.bind(var7)();
                var6 = _closure1_slot30;
                var6 = var6.expiresAtMs;
                if (!(!(var7 > var6))) {
                    _fun42620_ip = 629;
                    continue _fun42620
                }
            case 613:
                var7 = _closure1_slot44;
                var6 = _closure1_slot30;
                var6 = var7.bind(var0)(var11, var6);
                _fun42620_ip = 633;
                continue _fun42620;
            case 629:
                _closure1_slot30 = var4;
            case 633:
                var7 = var1.user_profile;
                var8 = var4 == var7;
                var6 = undefined;
                if (var8) {
                    _fun42620_ip = 654;
                    continue _fun42620
                }
            case 648:
                var6 = var7.collectibles;
            case 654:
                var6 = var4 != var6;
                var7 = undefined;
                if (!var6) {
                    _fun42620_ip = 809;
                    continue _fun42620
                }
            case 666:
                var6 = var1.user_profile;
                var9 = var6.collectibles;
                var8 = var9.find;
                var6 = function(arg0) { // Environment: var5
                    var0 = arg0;
                    var1 = var0.type;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 18;
                    var2 = var2[var0];
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2);
                    var0 = var0.CollectiblesItemType;
                    var0 = var0.PROFILE_EFFECT;
                    var0 = var1 === var0;
                    return var0;
                };
                var9 = var8.bind(var9)(var6);
                var6 = var4 != var9;
                var7 = undefined;
                if (!var6) {
                    _fun42620_ip = 809;
                    continue _fun42620
                }
            case 702:
                var6 = {};
                var8 = var9.sku_id;
                var6.skuId = var8;
                var8 = var9.expires_at;
                var10 = var4 != var8;
                var8 = undefined;
                if (!var10) {
                    _fun42620_ip = 801;
                    continue _fun42620
                }
            case 730:
                var16 = global;
                var15 = var16.Math;
                var10 = var15.floor;
                var17 = var16.Date;
                var20 = var9.expires_at;
                var16 = var17.prototype;
                var16 = Object.create(var16, {
                    constructor: {
                        value: var17
                    }
                });
                var21 = var16;
                var9 = new var21[var17](var20, var19);
                var16 = var9 instanceof Object ? var9 : var16;
                var9 = var16.getTime;
                var16 = var9.bind(var16)();
                var9 = 1000;
                var9 = var16 / var9;
                var8 = var10.bind(var15)(var9);
            case 801:
                var6.expiresAt = var8;
                var7 = var6;
            case 809:
                var6 = var4 == var7;
                if (!var6) {
                    _fun42620_ip = 841;
                    continue _fun42620
                }
            case 816:
                var9 = var1.user_profile;
                var10 = var4 == var9;
                var8 = undefined;
                if (var10) {
                    _fun42620_ip = 837;
                    continue _fun42620
                }
            case 831:
                var8 = var9.profile_effect;
            case 837:
                var6 = var4 != var8;
            case 841:
                if (!var6) {
                    _fun42620_ip = 895;
                    continue _fun42620
                }
            case 844:
                var6 = {};
                var8 = var1.user_profile;
                var8 = var8.profile_effect;
                var8 = var8.sku_id;
                var6.skuId = var8;
                var8 = var1.user_profile;
                var8 = var8.profile_effect;
                var8 = var8.expires_at;
                var6.expiresAt = var8;
                var7 = var6;
            case 895:
                var10 = _closure1_slot18;
                var9 = var10.set;
                var6 = var1.user;
                var8 = var6.id;
                var6 = {};
                var15 = var1.user;
                var15 = var15.id;
                var6.userId = var15;
                var16 = var1.user_profile;
                var17 = var4 == var16;
                var15 = undefined;
                if (var17) {
                    _fun42620_ip = 951;
                    continue _fun42620
                }
            case 945:
                var15 = var16.banner;
            case 951:
                var6.banner = var15;
                var16 = var1.user_profile;
                var17 = var4 == var16;
                var15 = undefined;
                if (var17) {
                    _fun42620_ip = 977;
                    continue _fun42620
                }
            case 971:
                var15 = var16.accent_color;
            case 977:
                var6.accentColor = var15;
                var16 = var1.user_profile;
                var17 = var4 == var16;
                var15 = undefined;
                if (var17) {
                    _fun42620_ip = 1003;
                    continue _fun42620
                }
            case 997:
                var15 = var16.theme_colors;
            case 1003:
                var6.themeColors = var15;
                var16 = var1.user_profile;
                var17 = var4 == var16;
                var15 = undefined;
                if (var17) {
                    _fun42620_ip = 1029;
                    continue _fun42620
                }
            case 1023:
                var15 = var16.popout_animation_particle_type;
            case 1029:
                var6.popoutAnimationParticleType = var15;
                var15 = var1.user_profile;
                var16 = var4 == var15;
                var17 = undefined;
                if (var16) {
                    _fun42620_ip = 1055;
                    continue _fun42620
                }
            case 1049:
                var17 = var15.bio;
            case 1055:
                var18 = var4 != var17;
                var15 = '';
                var16 = var15;
                if (!var18) {
                    _fun42620_ip = 1072;
                    continue _fun42620
                }
            case 1069:
                var16 = var17;
            case 1072:
                var6.bio = var16;
                var6.profileEffect = var7;
                var17 = var1.user_profile;
                var18 = var4 == var17;
                var16 = undefined;
                if (var18) {
                    _fun42620_ip = 1103;
                    continue _fun42620
                }
            case 1097:
                var16 = var17.pronouns;
            case 1103:
                var17 = var4 != var16;
                if (!var17) {
                    _fun42620_ip = 1113;
                    continue _fun42620
                }
            case 1110:
                var15 = var16;
            case 1113:
                var6.pronouns = var15;
                var17 = var1.connected_accounts;
                var16 = var17.filter;
                var15 = function(arg0) { // Environment: var5
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 19;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.isSupported;
                    var0 = arg0;
                    var0 = var0.type;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var15 = var16.bind(var17)(var15);
                if (!(var4 == var15)) {
                    _fun42620_ip = 1147;
                    continue _fun42620
                }
            case 1143:
                var15 = new Array(0);
            case 1147:
                var6.connectedAccounts = var15;
                var15 = var1.application_role_connections;
                if (!(var4 == var15)) {
                    _fun42620_ip = 1168;
                    continue _fun42620
                }
            case 1164:
                var15 = new Array(0);
            case 1168:
                var6.applicationRoleConnections = var15;
                var6.premiumSince = var13;
                var13 = var1.premium_type;
                var6.premiumType = var13;
                var6.premiumGuildSince = var12;
                var6.fetchStartedAt = var3;
                var3 = global;
                var13 = var3.Date;
                var12 = var13.now;
                var12 = var12.bind(var13)();
                var6.fetchEndedAt = var12;
                var12 = var1.legacy_username;
                var6.legacyUsername = var12;
                var13 = var4 != var14;
                var12 = null;
                if (!var13) {
                    _fun42620_ip = 1341;
                    continue _fun42620
                }
            case 1241:
                var13 = {};
                var15 = var14.id;
                var13.id = var15;
                var15 = var14.primary_sku_id;
                var13.primarySkuId = var15;
                var15 = var14.custom_install_url;
                var13.customInstallUrl = var15;
                var15 = var14.install_params;
                var13.installParams = var15;
                var15 = var14.integration_types_config;
                var13.integrationTypesConfig = var15;
                var15 = var14.flags;
                var13.flags = var15;
                var15 = var14.popular_application_command_ids;
                var13.popularApplicationCommandIds = var15;
                var15 = var14.storefront_available;
                var13.storefront_available = var15;
                var14 = var14.name;
                var13.name = var14;
                var12 = var13;
            case 1341:
                var6.application = var12;
                var6.badges = var11;
                var14 = var1.widgets;
                var12 = var4 == var14;
                var11 = undefined;
                if (var12) {
                    _fun42620_ip = 1415;
                    continue _fun42620
                }
            case 1365:
                var13 = var14.map;
                var12 = _closure1_slot35;
                var14 = var13.bind(var14)(var12);
                var13 = var14.filter;
                var15 = _closure1_slot0;
                var16 = _closure1_slot2;
                var12 = 20;
                var12 = var16[var12];
                var12 = var15.bind(var0)(var12);
                var12 = var12.isNotNullish;
                var11 = var13.bind(var14)(var12);
            case 1415:
                var6.widgets = var11;
                var11 = var1.wishlist_settings;
                var6.wishlistSettings = var11;
                var12 = var1.user_profile;
                var13 = var4 == var12;
                var11 = undefined;
                if (var13) {
                    _fun42620_ip = 1478;
                    continue _fun42620
                }
            case 1448:
                var14 = var12.collectibles;
                var12 = var4 == var14;
                var11 = undefined;
                if (var12) {
                    _fun42620_ip = 1478;
                    continue _fun42620
                }
            case 1463:
                var13 = var14.map;
                var12 = function(arg0) { // Environment: var5
                    _fun42627: for (var _fun42627_ip = 0;;) switch (_fun42627_ip) {
                        case 0:
                            var0 = arg0;
                            var2 = var0.sku_id;
                            var1 = var0.type;
                            var6 = var0.expires_at;
                            var0 = {};
                            var3 = null;
                            var4 = var3 != var6;
                            var3 = undefined;
                            if (!var4) {
                                _fun42627_ip = 64;
                                continue _fun42627
                            }
                        case 33:
                            var4 = global;
                            var4 = var4.Date;
                            var5 = var4.prototype;
                            var5 = Object.create(var5, {
                                constructor: {
                                    value: var4
                                }
                            });
                            var8 = var5;
                            var7 = var6;
                            var4 = new var8[var4](var7, var6);
                            var3 = var4 instanceof Object ? var4 : var5;
                        case 64:
                            var0.expiresAt = var3;
                            var0.skuId = var2;
                            var0.type = var1;
                            return var0;
                    }
                };
                var11 = var13.bind(var14)(var12);
            case 1478:
                var6.collectibles = var11;
                var6 = var9.bind(var10)(var8, var6);
                var8 = var4 == var7;
                var6 = undefined;
                if (var8) {
                    _fun42620_ip = 1504;
                    continue _fun42620
                }
            case 1498:
                var6 = var7.expiresAt;
            case 1504:
                if (!(var4 != var6)) {
                    _fun42620_ip = 1598;
                    continue _fun42620
                }
            case 1508:
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var6 = 21;
                var6 = var8[var6];
                var6 = var7.bind(var0)(var6);
                var6 = var6.Timeout;
                var7 = var6.prototype;
                var7 = Object.create(var7, {
                    constructor: {
                        value: var6
                    }
                });
                var21 = var7;
                var6 = new var21[var6](var20);
                var9 = var6 instanceof Object ? var6 : var7;
                var8 = _closure1_slot20;
                var7 = var8.set;
                var6 = var1.user;
                var6 = var6.id;
                var6 = var7.bind(var8)(var6, var9);
                var7 = _closure1_slot36;
                var6 = var1.user;
                var6 = var6.id;
                var6 = var7.bind(var0)(var6);
            case 1598:
                var6 = var1.guild_member_profile;
                if (!(var4 != var6)) {
                    _fun42620_ip = 2389;
                    continue _fun42620
                }
            case 1611:
                var7 = var1.guild_member_profile;
                var8 = var4 == var7;
                var6 = undefined;
                if (var8) {
                    _fun42620_ip = 1632;
                    continue _fun42620
                }
            case 1626:
                var6 = var7.collectibles;
            case 1632:
                var7 = var4 != var6;
                var6 = undefined;
                if (!var7) {
                    _fun42620_ip = 1785;
                    continue _fun42620
                }
            case 1644:
                var7 = var1.guild_member_profile;
                var8 = var7.collectibles;
                var7 = var8.find;
                var5 = function(arg0) { // Environment: var5
                    var0 = arg0;
                    var1 = var0.type;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 18;
                    var2 = var2[var0];
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2);
                    var0 = var0.CollectiblesItemType;
                    var0 = var0.PROFILE_EFFECT;
                    var0 = var1 === var0;
                    return var0;
                };
                var8 = var7.bind(var8)(var5);
                var5 = var4 != var8;
                var6 = undefined;
                if (!var5) {
                    _fun42620_ip = 1785;
                    continue _fun42620
                }
            case 1680:
                var5 = {};
                var7 = var8.sku_id;
                var5.skuId = var7;
                var7 = var8.expires_at;
                var9 = var4 != var7;
                var7 = undefined;
                if (!var9) {
                    _fun42620_ip = 1777;
                    continue _fun42620
                }
            case 1708:
                var10 = var3.Math;
                var9 = var10.floor;
                var12 = var3.Date;
                var20 = var8.expires_at;
                var11 = var12.prototype;
                var11 = Object.create(var11, {
                    constructor: {
                        value: var12
                    }
                });
                var21 = var11;
                var8 = new var21[var12](var20, var19);
                var11 = var8 instanceof Object ? var8 : var11;
                var8 = var11.getTime;
                var11 = var8.bind(var11)();
                var8 = 1000;
                var8 = var11 / var8;
                var7 = var9.bind(var10)(var8);
            case 1777:
                var5.expiresAt = var7;
                var6 = var5;
            case 1785:
                var5 = var4 == var6;
                if (!var5) {
                    _fun42620_ip = 1817;
                    continue _fun42620
                }
            case 1792:
                var8 = var1.guild_member_profile;
                var9 = var4 == var8;
                var7 = undefined;
                if (var9) {
                    _fun42620_ip = 1813;
                    continue _fun42620
                }
            case 1807:
                var7 = var8.profile_effect;
            case 1813:
                var5 = var4 != var7;
            case 1817:
                if (!var5) {
                    _fun42620_ip = 1871;
                    continue _fun42620
                }
            case 1820:
                var5 = {};
                var7 = var1.guild_member_profile;
                var7 = var7.profile_effect;
                var7 = var7.sku_id;
                var5.skuId = var7;
                var7 = var1.guild_member_profile;
                var7 = var7.profile_effect;
                var7 = var7.expires_at;
                var5.expiresAt = var7;
                var6 = var5;
            case 1871:
                var9 = {};
                var5 = var1.user;
                var5 = var5.id;
                var9.userId = var5;
                var5 = var1.guild_member_profile;
                var5 = var5.guild_id;
                var9.guildId = var5;
                var5 = var1.guild_member_profile;
                var5 = var5.banner;
                var9.banner = var5;
                var5 = var1.guild_member_profile;
                var5 = var5.accent_color;
                var9.accentColor = var5;
                var7 = var1.guild_member_profile;
                var8 = var4 == var7;
                var5 = undefined;
                if (var8) {
                    _fun42620_ip = 1957;
                    continue _fun42620
                }
            case 1951:
                var5 = var7.theme_colors;
            case 1957:
                var9.themeColors = var5;
                var7 = var1.guild_member_profile;
                var8 = var4 == var7;
                var5 = undefined;
                if (var8) {
                    _fun42620_ip = 1983;
                    continue _fun42620
                }
            case 1977:
                var5 = var7.popout_animation_particle_type;
            case 1983:
                var9.popoutAnimationParticleType = var5;
                var9.profileEffect = var6;
                var5 = var1.guild_member_profile;
                var5 = var5.bio;
                var9.bio = var5;
                var5 = var1.guild_member_profile;
                var5 = var5.pronouns;
                var9.pronouns = var5;
                var5 = var1.guild_badges;
                var9.badges = var5;
                var8 = _closure1_slot19;
                var7 = var8.get;
                var5 = var1.user;
                var5 = var5.id;
                var8 = var7.bind(var8)(var5);
                if (!(var4 == var8)) {
                    _fun42620_ip = 2143;
                    continue _fun42620
                }
            case 2068:
                var5 = var3.Map;
                var7 = var5.prototype;
                var7 = Object.create(var7, {
                    constructor: {
                        value: var5
                    }
                });
                var21 = var7;
                var5 = new var21[var5](var20);
                var11 = var5 instanceof Object ? var5 : var7;
                var7 = var11.set;
                var5 = var1.guild_member_profile;
                var5 = var5.guild_id;
                var5 = var7.bind(var11)(var5, var9);
                var10 = _closure1_slot19;
                var7 = var10.set;
                var5 = var1.user;
                var5 = var5.id;
                var5 = var7.bind(var10)(var5, var11);
                _fun42620_ip = 2165;
                continue _fun42620;
            case 2143:
                var7 = var8.set;
                var5 = var1.guild_member_profile;
                var5 = var5.guild_id;
                var5 = var7.bind(var8)(var5, var9);
            case 2165:
                var7 = var4 == var6;
                var5 = undefined;
                if (var7) {
                    _fun42620_ip = 2180;
                    continue _fun42620
                }
            case 2174:
                var5 = var6.expiresAt;
            case 2180:
                if (!(var4 != var5)) {
                    _fun42620_ip = 2389;
                    continue _fun42620
                }
            case 2187:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var5 = 21;
                var5 = var7[var5];
                var5 = var6.bind(var0)(var5);
                var5 = var5.Timeout;
                var6 = var5.prototype;
                var6 = Object.create(var6, {
                    constructor: {
                        value: var5
                    }
                });
                var21 = var6;
                var5 = new var21[var5](var20);
                var6 = var5 instanceof Object ? var5 : var6;
                var8 = _closure1_slot21;
                var7 = var8.get;
                var5 = var1.user;
                var5 = var5.id;
                var5 = var7.bind(var8)(var5);
                if (!(var4 == var5)) {
                    _fun42620_ip = 2336;
                    continue _fun42620
                }
            case 2261:
                var3 = var3.Map;
                var4 = var3.prototype;
                var4 = Object.create(var4, {
                    constructor: {
                        value: var3
                    }
                });
                var21 = var4;
                var3 = new var21[var3](var20);
                var8 = var3 instanceof Object ? var3 : var4;
                var4 = var8.set;
                var3 = var1.guild_member_profile;
                var3 = var3.guild_id;
                var3 = var4.bind(var8)(var3, var6);
                var7 = _closure1_slot21;
                var4 = var7.set;
                var3 = var1.user;
                var3 = var3.id;
                var3 = var4.bind(var7)(var3, var8);
                _fun42620_ip = 2358;
                continue _fun42620;
            case 2336:
                var4 = var5.set;
                var3 = var1.guild_member_profile;
                var3 = var3.guild_id;
                var3 = var4.bind(var5)(var3, var6);
            case 2358:
                var3 = _closure1_slot37;
                var2 = var1.user;
                var2 = var2.id;
                var1 = var1.guild_member_profile;
                var1 = var1.guild_id;
                var1 = var3.bind(var0)(var2, var1);
            case 2389:
                return var0;
        }
    };
    var _closure1_slot43 = var0;
    var0 = function(arg0, arg1) { // Original name: mergePinnedBadges, environment: var3
        _fun42629: for (var _fun42629_ip = 0;;) switch (_fun42629_ip) {
            case 0:
                var0 = arg0;
                var2 = arg1;
                var3 = null;
                if (!(var3 == var0)) {
                    _fun42629_ip = 18;
                    continue _fun42629
                }
            case 14:
                var4 = undefined;
                return var4;
            case 18:
                var4 = global;
                var6 = var4.Set;
                var5 = var0.map;
                var4 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var0 = var0.id;
                    return var0;
                };
                var9 = var5.bind(var0)(var4);
                var5 = var6.prototype;
                var5 = Object.create(var5, {
                    constructor: {
                        value: var6
                    }
                });
                var10 = var5;
                var4 = new var10[var6](var9, var8);
                var4 = var4 instanceof Object ? var4 : var5;
                var _closure2_slot0 = var4;
                var3 = var3 == var2;
                var4 = undefined;
                if (var3) {
                    _fun42629_ip = 95;
                    continue _fun42629
                }
            case 74:
                var3 = var2.badges;
                var2 = var3.filter;
                var1 = function(arg0) { // Environment: var1
                    var2 = _closure2_slot0;
                    var1 = var2.has;
                    var0 = arg0;
                    var0 = var0.id;
                    var0 = var1.bind(var2)(var0);
                    var0 = !var0;
                    return var0;
                };
                var4 = var2.bind(var3)(var1);
            case 95:
                var1 = var4.length;
                var3 = 0;
                if (!(var1 > var3)) {
                    _fun42629_ip = 140;
                    continue _fun42629
                }
            case 106:
                var2 = var0.push;
                var1 = new Array(0);
                var9 = var1;
                var8 = var4;
                var7 = 0;
                var3 = arraySpread(var9, var8, var7);
                var9 = var2;
                var8 = var1;
                var7 = var0;
                var1 = apply(var9, var8, var7);
            case 140:
                return var0;
        }
    };
    var _closure1_slot44 = var0;
    var0 = function(arg0) { // Original name: handleProfileFetchStart, environment: var3
        _fun42632: for (var _fun42632_ip = 0;;) switch (_fun42632_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.userId;
                var5 = var0.guildId;
                var1 = var0.withMutualFriends;
                var3 = null;
                if (!(var3 == var5)) {
                    _fun42632_ip = 32;
                    continue _fun42632
                }
            case 25:
                var5 = _closure1_slot14;
            case 32:
                var6 = _closure1_slot15;
                var4 = var6.get;
                var4 = var4.bind(var6)(var2);
                if (!(var3 == var4)) {
                    _fun42632_ip = 108;
                    continue _fun42632
                }
            case 53:
                var3 = global;
                var3 = var3.Set;
                var6 = var3.prototype;
                var6 = Object.create(var6, {
                    constructor: {
                        value: var3
                    }
                });
                var10 = var6;
                var3 = new var10[var3](var9);
                var7 = var3 instanceof Object ? var3 : var6;
                var3 = var7.add;
                var3 = var3.bind(var7)(var5);
                var6 = _closure1_slot15;
                var3 = var6.set;
                var3 = var3.bind(var6)(var2, var7);
                _fun42632_ip = 118;
                continue _fun42632;
            case 108:
                var3 = var4.add;
                var3 = var3.bind(var4)(var5);
            case 118:
                if (!var1) {
                    _fun42632_ip = 135;
                    continue _fun42632
                }
            case 121:
                var1 = _closure1_slot16;
                var0 = var1.add;
                var0 = var0.bind(var1)(var2);
            case 135:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot45 = var0;
    var0 = function(arg0) { // Original name: handleProfileFetchFailure, environment: var3
        _fun42633: for (var _fun42633_ip = 0;;) switch (_fun42633_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.userId;
                var7 = var0.guildId;
                var2 = var0.apiError;
                var3 = var0.fetchStartedAt;
                var5 = _closure1_slot15;
                var0 = var5.get;
                var6 = var0.bind(var5)(var4);
                var0 = null;
                if (!(var0 != var6)) {
                    _fun42633_ip = 66;
                    continue _fun42633
                }
            case 48:
                var5 = var6.delete;
                if (!(var0 == var7)) {
                    _fun42633_ip = 61;
                    continue _fun42633
                }
            case 57:
                var7 = _closure1_slot14;
            case 61:
                var5 = var5.bind(var6)(var7);
            case 66:
                var6 = _closure1_slot16;
                var5 = var6.delete;
                var5 = var5.bind(var6)(var4);
                var6 = _closure1_slot18;
                var5 = var6.get;
                var6 = var5.bind(var6)(var4);
                if (!(var0 == var6)) {
                    _fun42633_ip = 148;
                    continue _fun42633
                }
            case 98:
                var5 = {
                    'connectedAccounts': null,
                    'applicationRoleConnections': null,
                    'premiumSince': null,
                    'premiumGuildSince': null,
                    'application': null,
                    'legacyUsername': null,
                    'userId': null,
                    'banner': null,
                    'accentColor': null,
                    'bio': '',
                    'pronouns': '',
                    'premiumType': null,
                    'fetchStartedAt': 0,
                    'fetchEndedAt': 0
                };
                var7 = new Array(0);
                var5.connectedAccounts = var7;
                var7 = new Array(0);
                var5.applicationRoleConnections = var7;
                var5.userId = var4;
                var7 = undefined;
                var5.fetchError = var7;
                var6 = var5;
            case 148:
                var6.fetchStartedAt = var3;
                var3 = global;
                var5 = var3.Date;
                var3 = var5.now;
                var3 = var3.bind(var5)();
                var6.fetchEndedAt = var3;
                var6.fetchError = var2;
                var5 = _closure1_slot18;
                var3 = var5.set;
                var3 = var3.bind(var5)(var4, var6);
                var5 = var0 == var2;
                var0 = undefined;
                var3 = undefined;
                if (var5) {
                    _fun42633_ip = 214;
                    continue _fun42633
                }
            case 209:
                var3 = var2.status;
            case 214:
                var2 = 404;
                if (!(var2 === var3)) {
                    _fun42633_ip = 279;
                    continue _fun42633
                }
            case 224:
                var5 = _closure1_slot23;
                var3 = var5.set;
                var2 = 0;
                var2 = var3.bind(var5)(var4, var2);
                var5 = _closure1_slot22;
                var3 = var5.set;
                var2 = _closure1_slot25;
                var2 = var3.bind(var5)(var4, var2);
                var3 = _closure1_slot24;
                var2 = var3.set;
                var1 = _closure1_slot26;
                var1 = var2.bind(var3)(var4, var1);
            case 279:
                return var0;
        }
    };
    var _closure1_slot46 = var0;
    var0 = function() { // Original name: handleProfileUpdateStart, environment: var3
        var0 = true;
        _closure1_slot29 = var0;
        var0 = undefined;
        return var0;
    };
    var _closure1_slot47 = var0;
    var0 = function(arg0) { // Original name: handleProfileUpdateSuccess, environment: var3
        _fun42635: for (var _fun42635_ip = 0;;) switch (_fun42635_ip) {
            case 0:
                var1 = arg0;
                var2 = false;
                _closure1_slot29 = var2;
                var2 = var1.guild_id;
                var4 = null;
                if (!(var4 == var2)) {
                    _fun42635_ip = 319;
                    continue _fun42635
                }
            case 26:
                var5 = var1.userId;
                var14 = var1.accent_color;
                var13 = var1.banner;
                var12 = var1.bio;
                var11 = var1.pronouns;
                var10 = var1.popout_animation_particle_type;
                var9 = var1.theme_colors;
                var6 = var1.profile_effect;
                var3 = _closure1_slot18;
                var2 = var3.get;
                var3 = var2.bind(var3)(var5);
                if (!(var4 != var3)) {
                    _fun42635_ip = 703;
                    continue _fun42635
                }
            case 94:
                var8 = _closure1_slot18;
                var7 = var8.set;
                var2 = {};
                var16 = var2;
                var15 = var3;
                var3 = copyDataProperties(var16, var15);
                var3 = 'accentColor';
                var2[var3] = var14;
                var3 = 'banner';
                var2[var3] = var13;
                var3 = 'bio';
                var2[var3] = var12;
                var3 = 'pronouns';
                var2[var3] = var11;
                var3 = 'popoutAnimationParticleType';
                var2[var3] = var10;
                var3 = 'themeColors';
                var2[var3] = var9;
                var9 = var4 != var6;
                var3 = undefined;
                var10 = undefined;
                if (!var9) {
                    _fun42635_ip = 207;
                    continue _fun42635
                }
            case 180:
                var9 = {};
                var11 = var6.sku_id;
                var9.skuId = var11;
                var11 = var6.expires_at;
                var9.expiresAt = var11;
                var10 = var9;
            case 207:
                var9 = 'profileEffect';
                var2[var9] = var10;
                var2 = var7.bind(var8)(var5, var2);
                var7 = var4 == var6;
                var2 = undefined;
                if (var7) {
                    _fun42635_ip = 237;
                    continue _fun42635
                }
            case 231:
                var2 = var6.expires_at;
            case 237:
                if (!(var4 != var2)) {
                    _fun42635_ip = 703;
                    continue _fun42635
                }
            case 244:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 21;
                var2 = var7[var2];
                var2 = var6.bind(var3)(var2);
                var2 = var2.Timeout;
                var6 = var2.prototype;
                var6 = Object.create(var6, {
                    constructor: {
                        value: var2
                    }
                });
                var17 = var6;
                var2 = new var17[var2](var16);
                var7 = var2 instanceof Object ? var2 : var6;
                var6 = _closure1_slot20;
                var2 = var6.set;
                var2 = var2.bind(var6)(var5, var7);
                var2 = _closure1_slot36;
                var2 = var2.bind(var3)(var5);
                _fun42635_ip = 703;
                continue _fun42635;
            case 319:
                var3 = var1.userId;
                var2 = var1.guild_id;
                var14 = var1.accent_color;
                var13 = var1.banner;
                var12 = var1.bio;
                var11 = var1.pronouns;
                var10 = var1.popout_animation_particle_type;
                var9 = var1.theme_colors;
                var6 = var1.profile_effect;
                var5 = _closure1_slot19;
                var1 = var5.get;
                var8 = var1.bind(var5)(var3);
                if (!(var4 != var2)) {
                    _fun42635_ip = 703;
                    continue _fun42635
                }
            case 392:
                if (!(var4 != var8)) {
                    _fun42635_ip = 703;
                    continue _fun42635
                }
            case 399:
                var1 = var8.get;
                var1 = var1.bind(var8)(var2);
                if (!(var4 != var1)) {
                    _fun42635_ip = 703;
                    continue _fun42635
                }
            case 416:
                var7 = var8.set;
                var5 = {};
                var16 = var5;
                var15 = var1;
                var1 = copyDataProperties(var16, var15);
                var1 = 'accentColor';
                var5[var1] = var14;
                var1 = 'banner';
                var5[var1] = var13;
                var1 = 'bio';
                var5[var1] = var12;
                var1 = 'pronouns';
                var5[var1] = var11;
                var1 = 'popoutAnimationParticleType';
                var5[var1] = var10;
                var1 = 'themeColors';
                var5[var1] = var9;
                var9 = var4 != var6;
                var1 = undefined;
                var10 = undefined;
                if (!var9) {
                    _fun42635_ip = 525;
                    continue _fun42635
                }
            case 498:
                var9 = {};
                var11 = var6.sku_id;
                var9.skuId = var11;
                var11 = var6.expires_at;
                var9.expiresAt = var11;
                var10 = var9;
            case 525:
                var9 = 'profileEffect';
                var5[var9] = var10;
                var5 = var7.bind(var8)(var2, var5);
                var7 = var4 == var6;
                var5 = undefined;
                if (var7) {
                    _fun42635_ip = 555;
                    continue _fun42635
                }
            case 549:
                var5 = var6.expires_at;
            case 555:
                if (!(var4 != var5)) {
                    _fun42635_ip = 703;
                    continue _fun42635
                }
            case 562:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var5 = 21;
                var5 = var7[var5];
                var5 = var6.bind(var1)(var5);
                var5 = var5.Timeout;
                var6 = var5.prototype;
                var6 = Object.create(var6, {
                    constructor: {
                        value: var5
                    }
                });
                var17 = var6;
                var5 = new var17[var5](var16);
                var6 = var5 instanceof Object ? var5 : var6;
                var7 = _closure1_slot21;
                var5 = var7.get;
                var5 = var5.bind(var7)(var3);
                if (!(var4 == var5)) {
                    _fun42635_ip = 682;
                    continue _fun42635
                }
            case 626:
                var4 = global;
                var4 = var4.Map;
                var7 = var4.prototype;
                var7 = Object.create(var7, {
                    constructor: {
                        value: var4
                    }
                });
                var17 = var7;
                var4 = new var17[var4](var16);
                var8 = var4 instanceof Object ? var4 : var7;
                var4 = var8.set;
                var4 = var4.bind(var8)(var2, var6);
                var7 = _closure1_slot21;
                var4 = var7.set;
                var4 = var4.bind(var7)(var3, var8);
                _fun42635_ip = 693;
                continue _fun42635;
            case 682:
                var4 = var5.set;
                var4 = var4.bind(var5)(var2, var6);
            case 693:
                var0 = _closure1_slot37;
                var0 = var0.bind(var1)(var3, var2);
            case 703:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot48 = var0;
    var0 = function() { // Original name: handleProfileUpdateFailure, environment: var3
        var0 = false;
        _closure1_slot29 = var0;
        var0 = undefined;
        return var0;
    };
    var _closure1_slot49 = var0;
    var0 = function(arg0) { // Original name: handleWidgetsUpdateSuccess, environment: var3
        _fun42637: for (var _fun42637_ip = 0;;) switch (_fun42637_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.userId;
                var7 = var0.widgets;
                var2 = _closure1_slot18;
                var1 = var2.get;
                var5 = var1.bind(var2)(var4);
                var1 = null;
                if (!(var1 != var5)) {
                    _fun42637_ip = 127;
                    continue _fun42637
                }
            case 37:
                var3 = _closure1_slot18;
                var2 = var3.set;
                var1 = {};
                var10 = var1;
                var9 = var5;
                var5 = copyDataProperties(var10, var9);
                var6 = var7.map;
                var5 = _closure1_slot35;
                var7 = var6.bind(var7)(var5);
                var6 = var7.filter;
                var8 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 20;
                var5 = var5[var0];
                var0 = undefined;
                var5 = var8.bind(var0)(var5);
                var5 = var5.isNotNullish;
                var6 = var6.bind(var7)(var5);
                var5 = 'widgets';
                var1[var5] = var6;
                var1 = var2.bind(var3)(var4, var1);
                return var0;
            case 127:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot50 = var0;
    var0 = function(arg0) { // Original name: handlePinBadgesToProfile, environment: var3
        _fun42638: for (var _fun42638_ip = 0;;) switch (_fun42638_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.badges;
                var4 = var1.ttlInSeconds;
                var3 = var1.userId;
                var1 = {};
                var1.userId = var3;
                var1.badges = var0;
                var0 = global;
                var2 = var0.Date;
                var0 = var2.now;
                var2 = var0.bind(var2)();
                var0 = 1000;
                var0 = var0 * var4;
                var0 = var2 + var0;
                var1.expiresAtMs = var0;
                _closure1_slot30 = var1;
                var2 = _closure1_slot18;
                var1 = var2.get;
                var4 = var1.bind(var2)(var3);
                var1 = null;
                if (!(var1 != var4)) {
                    _fun42638_ip = 160;
                    continue _fun42638
                }
            case 94:
                var5 = var4.badges;
                if (!(var1 == var5)) {
                    _fun42638_ip = 108;
                    continue _fun42638
                }
            case 104:
                var5 = new Array(0);
            case 108:
                var6 = _closure1_slot44;
                var2 = _closure1_slot30;
                var1 = undefined;
                var1 = var6.bind(var1)(var5, var2);
                var2 = _closure1_slot18;
                var1 = var2.set;
                var0 = {};
                var8 = var0;
                var7 = var4;
                var4 = copyDataProperties(var8, var7);
                var4 = 'badges';
                var0[var4] = var5;
                var0 = var1.bind(var2)(var3, var0);
            case 160:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot51 = var0;
    var0 = function(arg0) { // Original name: handleUserUpdate, environment: var3
        _fun42639: for (var _fun42639_ip = 0;;) switch (_fun42639_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.user;
                var3 = var0.id;
                var2 = _closure1_slot15;
                var0 = var2.get;
                var4 = var0.bind(var2)(var3);
                var0 = null;
                var6 = var0 == var4;
                var2 = undefined;
                var5 = undefined;
                if (var6) {
                    _fun42639_ip = 48;
                    continue _fun42639
                }
            case 43:
                var5 = var4.size;
            case 48:
                var6 = var0 != var5;
                var4 = 0;
                var0 = 0;
                if (!var6) {
                    _fun42639_ip = 62;
                    continue _fun42639
                }
            case 59:
                var0 = var5;
            case 62:
                var4 = var0 > var4;
                var0 = !var4;
                if (var4) {
                    _fun42639_ip = 81;
                    continue _fun42639
                }
            case 72:
                var1 = _closure1_slot57;
                var0 = var1.bind(var2)(var3);
            case 81:
                return var0;
        }
    };
    var _closure1_slot52 = var0;
    var0 = function() { // Original name: handleGuildStatusChange, environment: var3
        var1 = _closure1_slot18;
        var0 = var1.keys;
        var5 = var0.bind(var1)();
        var3 = new Array(0);
        var4 = 0;
        var6 = var3;
        var0 = arraySpread(var6, var5, var4);
        var2 = var3.reduce;
        var1 = function(arg0, arg1) { // Environment: var0
            _fun42641: for (var _fun42641_ip = 0;;) switch (_fun42641_ip) {
                case 0:
                    var1 = arg0;
                    var3 = _closure1_slot57;
                    var2 = undefined;
                    var0 = arg1;
                    var0 = var3.bind(var2)(var0);
                    if (var0) {
                        _fun42641_ip = 26;
                        continue _fun42641
                    }
                case 23:
                    var0 = var1;
                case 26:
                    return var0;
            }
        };
        var0 = false;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot53 = var0;
    var0 = function(arg0) { // Original name: handleGuildMemberStatusChange, environment: var3
        var2 = _closure1_slot57;
        var0 = arg0;
        var0 = var0.user;
        var1 = var0.id;
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        return var0;
    };
    var _closure1_slot54 = var0;
    var0 = function(arg0) { // Original name: handleRelationshipStatusChange, environment: var3
        var2 = _closure1_slot57;
        var0 = arg0;
        var0 = var0.relationship;
        var1 = var0.id;
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        return var0;
    };
    var _closure1_slot55 = var0;
    var0 = function() { // Original name: handleLocaleStoreChange, environment: var3
        var2 = _closure1_slot15;
        var1 = var2.clear;
        var1 = var1.bind(var2)();
        var2 = _closure1_slot16;
        var1 = var2.clear;
        var1 = var1.bind(var2)();
        var2 = _closure1_slot18;
        var1 = var2.clear;
        var1 = var1.bind(var2)();
        var1 = _closure1_slot19;
        var0 = var1.clear;
        var0 = var0.bind(var1)();
        var0 = undefined;
        return var0;
    };
    var _closure1_slot56 = var0;
    var0 = function(arg0) { // Original name: resetProfileFetch, environment: var3
        _fun42645: for (var _fun42645_ip = 0;;) switch (_fun42645_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                if (!(var0 != var3)) {
                    _fun42645_ip = 58;
                    continue _fun42645
                }
            case 9:
                var2 = _closure1_slot18;
                var1 = var2.get;
                var1 = var1.bind(var2)(var3);
                if (!(var0 != var1)) {
                    _fun42645_ip = 54;
                    continue _fun42645
                }
            case 30:
                var0 = 0;
                var1.fetchStartedAt = var0;
                var1.fetchEndedAt = var0;
                var0 = undefined;
                var1.fetchError = var0;
                return var0;
            case 54:
                var0 = false;
                return var0;
            case 58:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot57 = var0;
    var0 = function(arg0) { // Original name: handleAppWidgetConfigsFetchSuccess, environment: var3
        _fun42646: for (var _fun42646_ip = 0;;) switch (_fun42646_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.applicationConfigs;
                var1 = var2.map;
                var0 = function(arg0) { // Environment: var0
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 22;
                    var1 = var1[var0];
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    var2 = var0.ApplicationWidgetConfig;
                    var0 = var2.prototype;
                    var1 = Object.create(var0, {
                        constructor: {
                            value: var2
                        }
                    });
                    var3 = arg0;
                    var4 = var1;
                    var0 = new var4[var2](var3, var2);
                    var0 = var0 instanceof Object ? var0 : var1;
                    return var0;
                };
                var0 = var1.bind(var2)(var0);
                _closure1_slot27 = var0;
                var1 = _closure1_slot28;
                var0 = var1.clear;
                var0 = var0.bind(var1)();
                var2 = _closure1_slot33;
                var1 = _closure1_slot27;
                var0 = undefined;
                var3 = var2.bind(var0)(var1);
                var2 = var3.bind(var0)();
                var1 = var2.done;
                if (var1) {
                    _fun42646_ip = 114;
                    continue _fun42646
                }
            case 74:
                var7 = var2.value;
                var6 = _closure1_slot28;
                var5 = var6.set;
                var1 = var7.applicationId;
                var1 = var5.bind(var6)(var1, var7);
                var5 = var3.bind(var0)();
                var1 = var5.done;
                var2 = var5;
                if (!var1) {
                    _fun42646_ip = 74;
                    continue _fun42646
                }
            case 114:
                return var0;
        }
    };
    var _closure1_slot58 = var0;
    var8 = global;
    var7 = var8.Object;
    var6 = var7.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var9.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var6 = 1;
    var1 = var5[var6];
    var1 = var9.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 2;
    var1 = var5[var1];
    var1 = var9.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 3;
    var1 = var5[var1];
    var1 = var9.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 4;
    var1 = var5[var1];
    var1 = var9.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var1 = 5;
    var1 = var5[var1];
    var1 = var9.bind(var0)(var1);
    var _closure1_slot8 = var1;
    var1 = 6;
    var1 = var5[var1];
    var1 = var9.bind(var0)(var1);
    var _closure1_slot9 = var1;
    var1 = 7;
    var1 = var5[var1];
    var1 = var9.bind(var0)(var1);
    var _closure1_slot10 = var1;
    var1 = 8;
    var1 = var5[var1];
    var1 = var9.bind(var0)(var1);
    var _closure1_slot11 = var1;
    var1 = 9;
    var1 = var5[var1];
    var7 = var9.bind(var0)(var1);
    var1 = 10;
    var1 = var5[var1];
    var1 = var9.bind(var0)(var1);
    var _closure1_slot12 = var1;
    var1 = 11;
    var1 = var5[var1];
    var1 = var9.bind(var0)(var1);
    var _closure1_slot13 = var1;
    var9 = var8.Symbol;
    var1 = 'NO GUILD ID';
    var1 = var9.bind(var0)(var1);
    var _closure1_slot14 = var1;
    var1 = var8.Map;
    var9 = var1.prototype;
    var9 = Object.create(var9, {
        constructor: {
            value: var1
        }
    });
    var13 = var9;
    var1 = new var13[var1](var12);
    var1 = var1 instanceof Object ? var1 : var9;
    var _closure1_slot15 = var1;
    var1 = var8.Set;
    var9 = var1.prototype;
    var9 = Object.create(var9, {
        constructor: {
            value: var1
        }
    });
    var13 = var9;
    var1 = new var13[var1](var12);
    var1 = var1 instanceof Object ? var1 : var9;
    var _closure1_slot16 = var1;
    var1 = 2147483647;
    var _closure1_slot17 = var1;
    var1 = var8.Map;
    var9 = var1.prototype;
    var9 = Object.create(var9, {
        constructor: {
            value: var1
        }
    });
    var13 = var9;
    var1 = new var13[var1](var12);
    var1 = var1 instanceof Object ? var1 : var9;
    var _closure1_slot18 = var1;
    var1 = var8.Map;
    var9 = var1.prototype;
    var9 = Object.create(var9, {
        constructor: {
            value: var1
        }
    });
    var13 = var9;
    var1 = new var13[var1](var12);
    var1 = var1 instanceof Object ? var1 : var9;
    var _closure1_slot19 = var1;
    var1 = var8.Map;
    var9 = var1.prototype;
    var9 = Object.create(var9, {
        constructor: {
            value: var1
        }
    });
    var13 = var9;
    var1 = new var13[var1](var12);
    var1 = var1 instanceof Object ? var1 : var9;
    var _closure1_slot20 = var1;
    var1 = var8.Map;
    var9 = var1.prototype;
    var9 = Object.create(var9, {
        constructor: {
            value: var1
        }
    });
    var13 = var9;
    var1 = new var13[var1](var12);
    var1 = var1 instanceof Object ? var1 : var9;
    var _closure1_slot21 = var1;
    var1 = var8.Map;
    var9 = var1.prototype;
    var9 = Object.create(var9, {
        constructor: {
            value: var1
        }
    });
    var13 = var9;
    var1 = new var13[var1](var12);
    var1 = var1 instanceof Object ? var1 : var9;
    var _closure1_slot22 = var1;
    var1 = var8.Map;
    var9 = var1.prototype;
    var9 = Object.create(var9, {
        constructor: {
            value: var1
        }
    });
    var13 = var9;
    var1 = new var13[var1](var12);
    var1 = var1 instanceof Object ? var1 : var9;
    var _closure1_slot23 = var1;
    var1 = var8.Map;
    var9 = var1.prototype;
    var9 = Object.create(var9, {
        constructor: {
            value: var1
        }
    });
    var13 = var9;
    var1 = new var13[var1](var12);
    var1 = var1 instanceof Object ? var1 : var9;
    var _closure1_slot24 = var1;
    var1 = new Array(0);
    var _closure1_slot25 = var1;
    var1 = new Array(0);
    var _closure1_slot26 = var1;
    var1 = null;
    var _closure1_slot27 = var1;
    var8 = var8.Map;
    var9 = var8.prototype;
    var9 = Object.create(var9, {
        constructor: {
            value: var8
        }
    });
    var13 = var9;
    var8 = new var13[var8](var12);
    var8 = var8 instanceof Object ? var8 : var9;
    var _closure1_slot28 = var8;
    var8 = false;
    var _closure1_slot29 = var8;
    var _closure1_slot30 = var1;
    var1 = function(arg0) { // Environment: var3
        var3 = function() { // Original name: UserProfileStore, environment: var5
            _fun42649: for (var _fun42649_ip = 0;;) switch (_fun42649_ip) {
                case 0:
                    var4 = this;
                    var0 = _closure1_slot3;
                    var2 = _closure2_slot0;
                    var3 = undefined;
                    var0 = var0.bind(var3)(var4, var2);
                    var0 = {};
                    var6 = function() { // Original name: CACHE_LOADED_LAZY, environment: var1
                        var1 = _closure3_slot0;
                        var0 = var1.loadCache;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    var0.CACHE_LOADED_LAZY = var6;
                    var6 = _closure1_slot45;
                    var0.USER_PROFILE_FETCH_START = var6;
                    var6 = _closure1_slot46;
                    var0.USER_PROFILE_FETCH_FAILURE = var6;
                    var6 = _closure1_slot43;
                    var0.USER_PROFILE_FETCH_SUCCESS = var6;
                    var6 = _closure1_slot47;
                    var0.USER_PROFILE_UPDATE_START = var6;
                    var6 = _closure1_slot48;
                    var0.USER_PROFILE_UPDATE_SUCCESS = var6;
                    var6 = _closure1_slot49;
                    var0.USER_PROFILE_UPDATE_FAILURE = var6;
                    var6 = _closure1_slot50;
                    var0.WIDGET_PENDING_SAVE_SUCCESS = var6;
                    var6 = _closure1_slot51;
                    var0.USER_PROFILE_PIN_BADGES_ON_CLIENT = var6;
                    var6 = _closure1_slot39;
                    var0.MUTUAL_FRIENDS_FETCH_START = var6;
                    var6 = _closure1_slot42;
                    var0.MUTUAL_FRIENDS_FETCH_SUCCESS = var6;
                    var6 = _closure1_slot40;
                    var0.MUTUAL_FRIENDS_FETCH_FAILURE = var6;
                    var6 = _closure1_slot52;
                    var0.USER_UPDATE = var6;
                    var0.GUILD_MEMBER_UPDATE = var6;
                    var6 = _closure1_slot53;
                    var0.GUILD_JOIN = var6;
                    var0.GUILD_DELETE = var6;
                    var0.INVITE_ACCEPT_SUCCESS = var6;
                    var6 = _closure1_slot54;
                    var0.GUILD_MEMBER_ADD = var6;
                    var0.GUILD_MEMBER_REMOVE = var6;
                    var6 = _closure1_slot55;
                    var0.RELATIONSHIP_ADD = var6;
                    var0.RELATIONSHIP_REMOVE = var6;
                    var0.RELATIONSHIP_UPDATE = var6;
                    var6 = _closure1_slot58;
                    var0.USER_PROFILE_APPLICATION_WIDGET_CONFIGS_FETCH_SUCCESS = var6;
                    var6 = _closure1_slot38;
                    var0.LOGOUT = var6;
                    var9 = new Array(1);
                    var9[0] = var0;
                    var0 = _closure1_slot6;
                    var8 = var0.bind(var3)(var2);
                    var2 = _closure1_slot5;
                    var0 = _closure1_slot32;
                    var0 = var0.bind(var3)();
                    if (var0) {
                        _fun42649_ip = 285;
                        continue _fun42649
                    }
                case 272:
                    var0 = var8.apply;
                    var0 = var0.bind(var8)(var4, var9);
                    _fun42649_ip = 319;
                    continue _fun42649;
                case 285:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot6;
                    var5 = var5.bind(var3)(var4);
                    var5 = var5.constructor;
                    var0 = var6.bind(var7)(var8, var9, var5);
                case 319:
                    var0 = var2.bind(var3)(var4, var0);
                    var _closure3_slot0 = var0;
                    var1 = function() { // Environment: var1
                        _fun42651: for (var _fun42651_ip = 0;;) switch (_fun42651_ip) {
                            case 0:
                                var2 = _closure3_slot0;
                                var1 = var2.readSnapshot;
                                var0 = _closure2_slot0;
                                var0 = var0.LATEST_SNAPSHOT_VERSION;
                                var2 = var1.bind(var2)(var0);
                                var0 = null;
                                if (!(var0 != var2)) {
                                    _fun42651_ip = 54;
                                    continue _fun42651
                                }
                            case 37:
                                var1 = var2.forEach;
                                var0 = function(arg0) { // Environment: var0
                                    _fun42652: for (var _fun42652_ip = 0;;) switch (_fun42652_ip) {
                                        case 0:
                                            var0 = arg0;
                                            var3 = var0.userId;
                                            var2 = var0.profile;
                                            var0 = null;
                                            if (!(var0 != var3)) {
                                                _fun42652_ip = 61;
                                                continue _fun42652
                                            }
                                        case 20:
                                            if (!(var0 == var2)) {
                                                _fun42652_ip = 43;
                                                continue _fun42652
                                            }
                                        case 24:
                                            var1 = _closure1_slot18;
                                            var0 = var1.delete;
                                            var0 = var0.bind(var1)(var3);
                                            _fun42652_ip = 61;
                                            continue _fun42652;
                                        case 43:
                                            var1 = _closure1_slot18;
                                            var0 = var1.set;
                                            var0 = var0.bind(var1)(var3, var2);
                                        case 61:
                                            var0 = undefined;
                                            return var0;
                                    }
                                };
                                var0 = var1.bind(var2)(var0);
                            case 54:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.loadCache = var1;
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
            var2 = var3.waitFor;
            var1 = _closure1_slot13;
            var1 = var2.bind(var3)(var1);
            var2 = var3.syncWith;
            var4 = _closure1_slot8;
            var1 = new Array(1);
            var1[0] = var4;
            var0 = _closure1_slot56;
            var0 = var2.bind(var3)(var1, var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(16);
        var0[0] = var4;
        var4 = {};
        var6 = 'isFetchingProfile';
        var4.key = var6;
        var6 = function(arg0, arg1) { // Original name: value, environment: var5
            _fun42654: for (var _fun42654_ip = 0;;) switch (_fun42654_ip) {
                case 0:
                    var3 = arg1;
                    var2 = _closure1_slot15;
                    var1 = var2.get;
                    var0 = arg0;
                    var2 = var1.bind(var2)(var0);
                    var5 = null;
                    var0 = var5 != var2;
                    if (!var0) {
                        _fun42654_ip = 50;
                        continue _fun42654
                    }
                case 32:
                    var1 = var2.has;
                    if (!(var5 == var3)) {
                        _fun42654_ip = 45;
                        continue _fun42654
                    }
                case 41:
                    var3 = _closure1_slot14;
                case 45:
                    var0 = var1.bind(var2)(var3);
                case 50:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'isFetchingFriends';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            var2 = _closure1_slot16;
            var1 = var2.has;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'isSubmitting';
        var4.key = var6;
        var6 = function() { // Original name: get, environment: var5
            var0 = _closure1_slot29;
            return var0;
        };
        var4.get = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'getUserProfile';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            var2 = _closure1_slot18;
            var1 = var2.get;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'getGuildMemberProfile';
        var4.key = var6;
        var6 = function(arg0, arg1) { // Original name: value, environment: var5
            _fun42658: for (var _fun42658_ip = 0;;) switch (_fun42658_ip) {
                case 0:
                    var5 = arg1;
                    var1 = null;
                    var2 = var1 == var5;
                    var0 = null;
                    if (var2) {
                        _fun42658_ip = 68;
                        continue _fun42658
                    }
                case 14:
                    var4 = _closure1_slot19;
                    var3 = var4.get;
                    var2 = arg0;
                    var4 = var3.bind(var4)(var2);
                    var3 = var1 == var4;
                    var2 = undefined;
                    if (var3) {
                        _fun42658_ip = 53;
                        continue _fun42658
                    }
                case 43:
                    var3 = var4.get;
                    var2 = var3.bind(var4)(var5);
                case 53:
                    var3 = var1 != var2;
                    var1 = null;
                    if (!var3) {
                        _fun42658_ip = 65;
                        continue _fun42658
                    }
                case 62:
                    var1 = var2;
                case 65:
                    var0 = var1;
                case 68:
                    return var0;
            }
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'getMutualFriends';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            var2 = _closure1_slot22;
            var1 = var2.get;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[6] = var4;
        var4 = {};
        var6 = 'getMutualFriendsCount';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            var2 = _closure1_slot23;
            var1 = var2.get;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[7] = var4;
        var4 = {};
        var6 = 'getMutualGuilds';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            var2 = _closure1_slot24;
            var1 = var2.get;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[8] = var4;
        var4 = {};
        var6 = 'getWidgets';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun42662: for (var _fun42662_ip = 0;;) switch (_fun42662_ip) {
                case 0:
                    var2 = _closure1_slot18;
                    var1 = var2.get;
                    var0 = arg0;
                    var1 = var1.bind(var2)(var0);
                    var0 = null;
                    var2 = var0 == var1;
                    var0 = undefined;
                    if (var2) {
                        _fun42662_ip = 37;
                        continue _fun42662
                    }
                case 31:
                    var0 = var1.widgets;
                case 37:
                    return var0;
            }
        };
        var4.value = var6;
        var0[9] = var4;
        var4 = {};
        var6 = 'getWishlistIds';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun42663: for (var _fun42663_ip = 0;;) switch (_fun42663_ip) {
                case 0:
                    var2 = _closure1_slot18;
                    var1 = var2.get;
                    var0 = arg0;
                    var1 = var1.bind(var2)(var0);
                    var2 = null;
                    var3 = var2 == var1;
                    var0 = undefined;
                    if (var3) {
                        _fun42663_ip = 37;
                        continue _fun42663
                    }
                case 31:
                    var0 = var1.wishlistSettings;
                case 37:
                    if (!(var2 == var0)) {
                        _fun42663_ip = 47;
                        continue _fun42663
                    }
                case 41:
                    var0 = new Array(0);
                    _fun42663_ip = 71;
                    continue _fun42663;
                case 47:
                    var2 = global;
                    var3 = var2.Object;
                    var2 = var3.keys;
                    var1 = var1.wishlistSettings;
                    var0 = var2.bind(var3)(var1);
                case 71:
                    return var0;
            }
        };
        var4.value = var6;
        var0[10] = var4;
        var4 = {};
        var6 = 'getFirstWishlistId';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun42664: for (var _fun42664_ip = 0;;) switch (_fun42664_ip) {
                case 0:
                    var3 = arg0;
                    var2 = this;
                    var0 = null;
                    if (!(var0 != var3)) {
                        _fun42664_ip = 47;
                        continue _fun42664
                    }
                case 12:
                    var1 = var2.getWishlistIds;
                    var3 = var1.bind(var2)(var3);
                    var1 = var3.length;
                    var2 = 0;
                    var4 = var1 > var2;
                    var1 = null;
                    if (!var4) {
                        _fun42664_ip = 45;
                        continue _fun42664
                    }
                case 41:
                    var1 = var3[var2];
                case 45:
                    return var1;
                case 47:
                    return var0;
            }
        };
        var4.value = var6;
        var0[11] = var4;
        var4 = {};
        var6 = 'getWishlistSettings';
        var4.key = var6;
        var6 = function(arg0, arg1) { // Original name: value, environment: var5
            _fun42665: for (var _fun42665_ip = 0;;) switch (_fun42665_ip) {
                case 0:
                    var2 = _closure1_slot18;
                    var1 = var2.get;
                    var0 = arg0;
                    var2 = var1.bind(var2)(var0);
                    var0 = null;
                    var3 = var0 == var2;
                    var1 = undefined;
                    if (var3) {
                        _fun42665_ip = 53;
                        continue _fun42665
                    }
                case 31:
                    var3 = var2.wishlistSettings;
                    var2 = var0 == var3;
                    var1 = undefined;
                    if (var2) {
                        _fun42665_ip = 53;
                        continue _fun42665
                    }
                case 46:
                    var2 = arg1;
                    var1 = var3[var2];
                case 53:
                    var2 = var0 != var1;
                    var0 = null;
                    if (!var2) {
                        _fun42665_ip = 65;
                        continue _fun42665
                    }
                case 62:
                    var0 = var1;
                case 65:
                    return var0;
            }
        };
        var4.value = var6;
        var0[12] = var4;
        var4 = {};
        var6 = 'takeSnapshot';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            _fun42666: for (var _fun42666_ip = 0;;) switch (_fun42666_ip) {
                case 0:
                    var2 = _closure1_slot10;
                    var1 = var2.getId;
                    var4 = var1.bind(var2)();
                    var1 = _closure1_slot18;
                    var0 = var1.get;
                    var2 = var0.bind(var1)(var4);
                    var0 = null;
                    if (!(var0 == var2)) {
                        _fun42666_ip = 67;
                        continue _fun42666
                    }
                case 37:
                    var0 = {};
                    var1 = _closure2_slot0;
                    var1 = var1.LATEST_SNAPSHOT_VERSION;
                    var0.version = var1;
                    var1 = new Array(0);
                    var0.data = var1;
                    _fun42666_ip = 113;
                    continue _fun42666;
                case 67:
                    var1 = {};
                    var3 = _closure2_slot0;
                    var3 = var3.LATEST_SNAPSHOT_VERSION;
                    var1.version = var3;
                    var3 = {};
                    var3.userId = var4;
                    var3.profile = var2;
                    var2 = new Array(1);
                    var2[0] = var3;
                    var1.data = var2;
                    var0 = var1;
                case 113:
                    return var0;
            }
        };
        var4.value = var6;
        var0[13] = var4;
        var4 = {};
        var6 = 'applicationWidgetConfigs';
        var4.key = var6;
        var6 = function() { // Original name: get, environment: var5
            var0 = _closure1_slot27;
            return var0;
        };
        var4.get = var6;
        var0[14] = var4;
        var4 = {};
        var6 = 'getApplicationWidgetConfig';
        var4.key = var6;
        var5 = function(arg0) { // Original name: value, environment: var5
            var2 = _closure1_slot28;
            var1 = var2.get;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var5;
        var0[15] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var1 = var1.bind(var0)(var7);
    var7 = 'UserProfileStore';
    var1.displayName = var7;
    var1.LATEST_SNAPSHOT_VERSION = var6;
    var6 = var1.prototype;
    var6 = Object.create(var6, {
        constructor: {
            value: var1
        }
    });
    var13 = var6;
    var1 = new var13[var1](var12);
    var1 = var1 instanceof Object ? var1 : var6;
    var _closure1_slot31 = var1;
    var3 = 23;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_profile/UserProfileStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1676, 1620, 1216, 1410, 1218, 3569, 4339, 4623, 22, 4624, 11272, 7285, 1234, 3452, 4358, 1304, 3589, 12217, 2]);