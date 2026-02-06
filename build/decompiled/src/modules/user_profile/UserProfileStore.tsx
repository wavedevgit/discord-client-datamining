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
    var0 = function() {
        _fun42772: for (var _fun42772_ip = 0;;) switch (_fun42772_ip) {
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
                _fun42772_ip = 74;
                continue _fun42772;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
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
    var0 = function arg0, arg1() {
        _fun42775: for (var _fun42775_ip = 0;;) switch (_fun42775_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun42775_ip = 46;
                    continue _fun42775
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun42775_ip = 55;
                    continue _fun42775
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun42775_ip = 343;
                    continue _fun42775
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun42775_ip = 323;
                    continue _fun42775
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun42775_ip = 283;
                    continue _fun42775
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun42775_ip = 270;
                    continue _fun42775
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
                    _fun42775_ip = 163;
                    continue _fun42775
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun42775_ip = 179;
                    continue _fun42775
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun42775_ip = 249;
                    continue _fun42775
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun42775_ip = 249;
                    continue _fun42775
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun42775_ip = 234;
                    continue _fun42775
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun42775_ip = 247;
                    continue _fun42775
                }
            case 234:
                var8 = _closure1_slot34;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun42775_ip = 265;
                continue _fun42775;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun42775_ip = 283;
                continue _fun42775;
            case 270:
                var6 = _closure1_slot34;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun42775_ip = 323;
                    continue _fun42775
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
                    _fun42775_ip = 330;
                    continue _fun42775
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun42776: for (var _fun42776_ip = 0;;) switch (_fun42776_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun42776_ip = 56;
                                continue _fun42776
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
                            _fun42776_ip = 67;
                            continue _fun42776;
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
    var _closure1_slot33 = var0;
    var0 = function arg0, arg1() {
        _fun42777: for (var _fun42777_ip = 0;;) switch (_fun42777_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun42777_ip = 23;
                    continue _fun42777
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun42777_ip = 33;
                    continue _fun42777
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
                    _fun42777_ip = 70;
                    continue _fun42777
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun42777_ip = 55;
                    continue _fun42777
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot34 = var0;
    var0 = function arg0() {
        _fun42778: for (var _fun42778_ip = 0;;) switch (_fun42778_ip) {
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
                    _fun42778_ip = 274;
                    continue _fun42778
                }
            case 57:
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var6];
                var1 = var2.bind(var5)(var1);
                var1 = var1.WidgetType;
                var1 = var1.FAVORITE_GAMES;
                if (!(var1 !== var3)) {
                    _fun42778_ip = 274;
                    continue _fun42778
                }
            case 93:
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var6];
                var1 = var2.bind(var5)(var1);
                var1 = var1.WidgetType;
                var1 = var1.PLAYED_GAMES;
                if (!(var1 !== var3)) {
                    _fun42778_ip = 274;
                    continue _fun42778
                }
            case 129:
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var6];
                var1 = var2.bind(var5)(var1);
                var1 = var1.WidgetType;
                var1 = var1.WANT_TO_PLAY_GAMES;
                if (!(var1 !== var3)) {
                    _fun42778_ip = 274;
                    continue _fun42778
                }
            case 162:
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var6];
                var1 = var2.bind(var5)(var1);
                var1 = var1.WidgetType;
                var1 = var1.APPLICATION;
                if (!(var1 !== var3)) {
                    _fun42778_ip = 197;
                    continue _fun42778
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
    var0 = function arg0() {
        _fun42780: for (var _fun42780_ip = 0;;) switch (_fun42780_ip) {
            case 0:
                var3 = arg0;
                var _closure2_slot0 = var3;
                var2 = _closure1_slot18;
                var1 = var2.get;
                var2 = var1.bind(var2)(var3);
                var6 = null;
                if (!(var6 != var2)) {
                    _fun42780_ip = 160;
                    continue _fun42780
                }
            case 35:
                var5 = var2.profileEffect;
                var8 = var6 == var5;
                var1 = undefined;
                var7 = undefined;
                if (var8) {
                    _fun42780_ip = 58;
                    continue _fun42780
                }
            case 52:
                var7 = var5.expiresAt;
            case 58:
                if (!(var6 != var7)) {
                    _fun42780_ip = 160;
                    continue _fun42780
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
                    _fun42780_ip = 164;
                    continue _fun42780
                }
            case 105:
                var8 = _closure1_slot20;
                var7 = var8.get;
                var7 = var7.bind(var8)(var3);
                if (!(var6 != var7)) {
                    _fun42780_ip = 160;
                    continue _fun42780
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
    var0 = function arg0, arg1() {
        _fun42782: for (var _fun42782_ip = 0;;) switch (_fun42782_ip) {
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
                    _fun42782_ip = 203;
                    continue _fun42782
                }
            case 42:
                var4 = var6.get;
                var7 = var4.bind(var6)(var3);
                if (!(var1 != var7)) {
                    _fun42782_ip = 203;
                    continue _fun42782
                }
            case 59:
                var4 = var7.profileEffect;
                var10 = var1 == var4;
                var8 = undefined;
                var9 = undefined;
                if (var10) {
                    _fun42782_ip = 82;
                    continue _fun42782
                }
            case 76:
                var9 = var4.expiresAt;
            case 82:
                if (!(var1 != var9)) {
                    _fun42782_ip = 203;
                    continue _fun42782
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
                    _fun42782_ip = 207;
                    continue _fun42782
                }
            case 129:
                var10 = _closure1_slot21;
                var9 = var10.get;
                var11 = var9.bind(var10)(var5);
                var9 = var1 == var11;
                var10 = undefined;
                if (var9) {
                    _fun42782_ip = 162;
                    continue _fun42782
                }
            case 152:
                var9 = var11.get;
                var10 = var9.bind(var11)(var3);
            case 162:
                if (!(var1 != var10)) {
                    _fun42782_ip = 203;
                    continue _fun42782
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
                    _fun42782_ip = 267;
                    continue _fun42782
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
    var0 = function() {
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
    var0 = function arg0() {
        var0 = arg0;
        var2 = var0.userId;
        var1 = _closure1_slot16;
        var0 = var1.add;
        var0 = var0.bind(var1)(var2);
        var0 = undefined;
        return var0;
    };
    var _closure1_slot39 = var0;
    var0 = function arg0() {
        var0 = arg0;
        var2 = var0.userId;
        var1 = _closure1_slot16;
        var0 = var1.delete;
        var0 = var0.bind(var1)(var2);
        var0 = undefined;
        return var0;
    };
    var _closure1_slot40 = var0;
    var0 = function arg0() {
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
    var0 = function arg0() {
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
    var0 = function arg0() {
        _fun42791: for (var _fun42791_ip = 0;;) switch (_fun42791_ip) {
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
                var5 = var4 == var2;
                var7 = undefined;
                if (var5) {
                    _fun42791_ip = 53;
                    continue _fun42791
                }
            case 48:
                var7 = var2.guild_id;
            case 53:
                if (!(var4 == var7)) {
                    _fun42791_ip = 64;
                    continue _fun42791
                }
            case 57:
                var7 = _closure1_slot14;
            case 64:
                var8 = _closure1_slot15;
                var6 = var8.get;
                var5 = var1.user;
                var5 = var5.id;
                var6 = var6.bind(var8)(var5);
                if (!(var4 != var6)) {
                    _fun42791_ip = 105;
                    continue _fun42791
                }
            case 95:
                var5 = var6.delete;
                var5 = var5.bind(var6)(var7);
            case 105:
                var7 = _closure1_slot16;
                var6 = var7.delete;
                var5 = var1.user;
                var5 = var5.id;
                var5 = var6.bind(var7)(var5);
                var5 = var1.mutual_guilds;
                if (!(var4 != var5)) {
                    _fun42791_ip = 235;
                    continue _fun42791
                }
            case 139:
                var5 = {};
                _closure2_slot0 = var5;
                var7 = var1.mutual_guilds;
                var6 = var7.forEach;
                var5 = function(arg0) { // Environment: var12
                    _fun42792: for (var _fun42792_ip = 0;;) switch (_fun42792_ip) {
                        case 0:
                            var0 = arg0;
                            var2 = var0.id;
                            var3 = var0.nick;
                            var1 = _closure1_slot11;
                            var0 = var1.getGuild;
                            var4 = var0.bind(var1)(var2);
                            var0 = null;
                            if (!(var0 != var4)) {
                                _fun42792_ip = 59;
                                continue _fun42792
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
                var5 = var6.bind(var7)(var5);
                var8 = _closure1_slot24;
                var7 = var8.set;
                var5 = var1.user;
                var6 = var5.id;
                var9 = _closure1_slot13;
                var5 = var9.getFlattenedGuildIds;
                var10 = var5.bind(var9)();
                var9 = var10.filter;
                var5 = function(arg0) { // Environment: var12
                    var1 = _closure2_slot0;
                    var0 = arg0;
                    var1 = var1[var0];
                    var0 = null;
                    var0 = var0 != var1;
                    return var0;
                };
                var10 = var9.bind(var10)(var5);
                var9 = var10.map;
                var5 = function(arg0) { // Environment: var12
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
                var5 = var9.bind(var10)(var5);
                var5 = var7.bind(var8)(var6, var5);
            case 235:
                var5 = var1.mutual_friends_count;
                if (!(var4 != var5)) {
                    _fun42791_ip = 311;
                    continue _fun42791
                }
            case 245:
                var6 = var1.mutual_friends_count;
                var8 = _closure1_slot23;
                var7 = var8.set;
                var5 = var1.user;
                var5 = var5.id;
                var5 = var7.bind(var8)(var5, var6);
                var5 = 0;
                if (!(var5 === var6)) {
                    _fun42791_ip = 311;
                    continue _fun42791
                }
            case 282:
                var8 = _closure1_slot22;
                var7 = var8.set;
                var5 = var1.user;
                var6 = var5.id;
                var5 = _closure1_slot25;
                var5 = var7.bind(var8)(var6, var5);
            case 311:
                var5 = var1.mutual_friends;
                if (!(var4 != var5)) {
                    _fun42791_ip = 397;
                    continue _fun42791
                }
            case 321:
                var8 = _closure1_slot22;
                var7 = var8.set;
                var5 = var1.user;
                var6 = var5.id;
                var9 = _closure1_slot41;
                var5 = var1.mutual_friends;
                var5 = var9.bind(var0)(var5);
                var5 = var7.bind(var8)(var6, var5);
                var8 = _closure1_slot23;
                var7 = var8.set;
                var5 = var1.user;
                var6 = var5.id;
                var5 = var1.mutual_friends;
                var5 = var5.length;
                var5 = var7.bind(var8)(var6, var5);
            case 397:
                var5 = var1.premium_since;
                var5 = var4 != var5;
                var14 = null;
                if (!var5) {
                    _fun42791_ip = 446;
                    continue _fun42791
                }
            case 412:
                var5 = global;
                var7 = var5.Date;
                var21 = var1.premium_since;
                var6 = var7.prototype;
                var6 = Object.create(var6, {
                    constructor: {
                        value: var7
                    }
                });
                var22 = var6;
                var5 = new var22[var7](var21, var20);
                var14 = var5 instanceof Object ? var5 : var6;
            case 446:
                _closure2_slot1 = var14;
                var5 = var1.premium_guild_since;
                var5 = var4 != var5;
                var13 = null;
                if (!var5) {
                    _fun42791_ip = 499;
                    continue _fun42791
                }
            case 465:
                var5 = global;
                var7 = var5.Date;
                var21 = var1.premium_guild_since;
                var6 = var7.prototype;
                var6 = Object.create(var6, {
                    constructor: {
                        value: var7
                    }
                });
                var22 = var6;
                var5 = new var22[var7](var21, var20);
                var13 = var5 instanceof Object ? var5 : var6;
            case 499:
                _closure2_slot2 = var13;
                var15 = var1.application;
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var7 = 16;
                var5 = var5[var7];
                var8 = var6.bind(var0)(var5);
                var6 = var8.parseUserProfileEffect;
                var5 = var1.user_profile;
                var6 = var6.bind(var8)(var5);
                var5 = var1.badges;
                if (!(var4 == var5)) {
                    _fun42791_ip = 561;
                    continue _fun42791
                }
            case 555:
                var11 = new Array(0);
                _fun42791_ip = 582;
                continue _fun42791;
            case 561:
                var9 = var1.badges;
                var8 = var9.map;
                var5 = function(arg0) { // Environment: var12
                    _fun42795: for (var _fun42795_ip = 0;;) switch (_fun42795_ip) {
                        case 0:
                            var1 = arg0;
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var2 = 17;
                            var2 = var4[var2];
                            var7 = undefined;
                            var4 = var3.bind(var7)(var2);
                            var3 = var4.getTieredTenureBadgeData;
                            var2 = var1.id;
                            var4 = var3.bind(var4)(var2);
                            var3 = var1.id;
                            var2 = 'premium';
                            if (!(var2 !== var3)) {
                                _fun42795_ip = 63;
                                continue _fun42795
                            }
                        case 57:
                            var2 = null;
                            if (!(var2 != var4)) {
                                _fun42795_ip = 79;
                                continue _fun42795
                            }
                        case 63:
                            var2 = _closure2_slot1;
                            var3 = null;
                            if (!(var3 == var2)) {
                                _fun42795_ip = 218;
                                continue _fun42795
                            }
                        case 79:
                            var8 = var1.id;
                            var5 = var8.startsWith;
                            var2 = 'guild_booster_lvl';
                            var5 = var5.bind(var8)(var2);
                            var2 = var1;
                            if (!var5) {
                                _fun42795_ip = 216;
                                continue _fun42795
                            }
                        case 107:
                            var8 = _closure2_slot2;
                            var5 = null;
                            var2 = var1;
                            if (!(var5 != var8)) {
                                _fun42795_ip = 216;
                                continue _fun42795
                            }
                        case 123:
                            var5 = {};
                            var15 = var5;
                            var14 = var1;
                            var8 = copyDataProperties(var15, var14);
                            var9 = _closure1_slot0;
                            var13 = _closure1_slot2;
                            var8 = 18;
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
                            var8 = 18;
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
                                _fun42795_ip = 353;
                                continue _fun42795
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
                var11 = var8.bind(var9)(var5);
            case 582:
                var5 = _closure1_slot30;
                var5 = var4 != var5;
                if (!var5) {
                    _fun42791_ip = 616;
                    continue _fun42791
                }
            case 593:
                var8 = _closure1_slot30;
                var9 = var8.userId;
                var8 = var1.user;
                var8 = var8.id;
                var5 = var9 === var8;
            case 616:
                if (!var5) {
                    _fun42791_ip = 670;
                    continue _fun42791
                }
            case 619:
                var5 = global;
                var8 = var5.Date;
                var5 = var8.now;
                var8 = var5.bind(var8)();
                var5 = _closure1_slot30;
                var5 = var5.expiresAtMs;
                if (!(!(var8 > var5))) {
                    _fun42791_ip = 666;
                    continue _fun42791
                }
            case 650:
                var8 = _closure1_slot44;
                var5 = _closure1_slot30;
                var5 = var8.bind(var0)(var11, var5);
                _fun42791_ip = 670;
                continue _fun42791;
            case 666:
                _closure1_slot30 = var4;
            case 670:
                var10 = _closure1_slot18;
                var9 = var10.set;
                var5 = var1.user;
                var8 = var5.id;
                var5 = {};
                var16 = var1.user;
                var16 = var16.id;
                var5.userId = var16;
                var17 = var1.user_profile;
                var18 = var4 == var17;
                var16 = undefined;
                if (var18) {
                    _fun42791_ip = 726;
                    continue _fun42791
                }
            case 720:
                var16 = var17.banner;
            case 726:
                var5.banner = var16;
                var17 = var1.user_profile;
                var18 = var4 == var17;
                var16 = undefined;
                if (var18) {
                    _fun42791_ip = 752;
                    continue _fun42791
                }
            case 746:
                var16 = var17.accent_color;
            case 752:
                var5.accentColor = var16;
                var17 = var1.user_profile;
                var18 = var4 == var17;
                var16 = undefined;
                if (var18) {
                    _fun42791_ip = 778;
                    continue _fun42791
                }
            case 772:
                var16 = var17.theme_colors;
            case 778:
                var5.themeColors = var16;
                var17 = var1.user_profile;
                var18 = var4 == var17;
                var16 = undefined;
                if (var18) {
                    _fun42791_ip = 804;
                    continue _fun42791
                }
            case 798:
                var16 = var17.popout_animation_particle_type;
            case 804:
                var5.popoutAnimationParticleType = var16;
                var16 = var1.user_profile;
                var17 = var4 == var16;
                var18 = undefined;
                if (var17) {
                    _fun42791_ip = 830;
                    continue _fun42791
                }
            case 824:
                var18 = var16.bio;
            case 830:
                var19 = var4 != var18;
                var16 = '';
                var17 = var16;
                if (!var19) {
                    _fun42791_ip = 847;
                    continue _fun42791
                }
            case 844:
                var17 = var18;
            case 847:
                var5.bio = var17;
                var5.profileEffect = var6;
                var18 = var1.user_profile;
                var19 = var4 == var18;
                var17 = undefined;
                if (var19) {
                    _fun42791_ip = 878;
                    continue _fun42791
                }
            case 872:
                var17 = var18.pronouns;
            case 878:
                var18 = var4 != var17;
                if (!var18) {
                    _fun42791_ip = 888;
                    continue _fun42791
                }
            case 885:
                var16 = var17;
            case 888:
                var5.pronouns = var16;
                var18 = var1.connected_accounts;
                var17 = var18.filter;
                var16 = function(arg0) { // Environment: var12
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
                var16 = var17.bind(var18)(var16);
                if (!(var4 == var16)) {
                    _fun42791_ip = 922;
                    continue _fun42791
                }
            case 918:
                var16 = new Array(0);
            case 922:
                var5.connectedAccounts = var16;
                var16 = var1.application_role_connections;
                if (!(var4 == var16)) {
                    _fun42791_ip = 943;
                    continue _fun42791
                }
            case 939:
                var16 = new Array(0);
            case 943:
                var5.applicationRoleConnections = var16;
                var5.premiumSince = var14;
                var14 = var1.premium_type;
                var5.premiumType = var14;
                var5.premiumGuildSince = var13;
                var5.fetchStartedAt = var3;
                var3 = global;
                var14 = var3.Date;
                var13 = var14.now;
                var13 = var13.bind(var14)();
                var5.fetchEndedAt = var13;
                var13 = var1.legacy_username;
                var5.legacyUsername = var13;
                var14 = var4 != var15;
                var13 = null;
                if (!var14) {
                    _fun42791_ip = 1116;
                    continue _fun42791
                }
            case 1016:
                var14 = {};
                var16 = var15.id;
                var14.id = var16;
                var16 = var15.primary_sku_id;
                var14.primarySkuId = var16;
                var16 = var15.custom_install_url;
                var14.customInstallUrl = var16;
                var16 = var15.install_params;
                var14.installParams = var16;
                var16 = var15.integration_types_config;
                var14.integrationTypesConfig = var16;
                var16 = var15.flags;
                var14.flags = var16;
                var16 = var15.popular_application_command_ids;
                var14.popularApplicationCommandIds = var16;
                var16 = var15.storefront_available;
                var14.storefront_available = var16;
                var15 = var15.name;
                var14.name = var15;
                var13 = var14;
            case 1116:
                var5.application = var13;
                var5.badges = var11;
                var15 = var1.widgets;
                var13 = var4 == var15;
                var11 = undefined;
                if (var13) {
                    _fun42791_ip = 1190;
                    continue _fun42791
                }
            case 1140:
                var14 = var15.map;
                var13 = _closure1_slot35;
                var15 = var14.bind(var15)(var13);
                var14 = var15.filter;
                var16 = _closure1_slot0;
                var17 = _closure1_slot2;
                var13 = 20;
                var13 = var17[var13];
                var13 = var16.bind(var0)(var13);
                var13 = var13.isNotNullish;
                var11 = var14.bind(var15)(var13);
            case 1190:
                var5.widgets = var11;
                var11 = var1.wishlist_settings;
                var5.wishlistSettings = var11;
                var13 = var1.user_profile;
                var14 = var4 == var13;
                var11 = undefined;
                if (var14) {
                    _fun42791_ip = 1253;
                    continue _fun42791
                }
            case 1223:
                var14 = var13.collectibles;
                var13 = var4 == var14;
                var11 = undefined;
                if (var13) {
                    _fun42791_ip = 1253;
                    continue _fun42791
                }
            case 1238:
                var13 = var14.map;
                var12 = function(arg0) { // Environment: var12
                    _fun42797: for (var _fun42797_ip = 0;;) switch (_fun42797_ip) {
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
                                _fun42797_ip = 64;
                                continue _fun42797
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
            case 1253:
                var5.collectibles = var11;
                var5 = var9.bind(var10)(var8, var5);
                var8 = var4 == var6;
                var5 = undefined;
                if (var8) {
                    _fun42791_ip = 1279;
                    continue _fun42791
                }
            case 1273:
                var5 = var6.expiresAt;
            case 1279:
                if (!(var4 != var5)) {
                    _fun42791_ip = 1373;
                    continue _fun42791
                }
            case 1283:
                var6 = _closure1_slot0;
                var8 = _closure1_slot2;
                var5 = 21;
                var5 = var8[var5];
                var5 = var6.bind(var0)(var5);
                var5 = var5.Timeout;
                var6 = var5.prototype;
                var6 = Object.create(var6, {
                    constructor: {
                        value: var5
                    }
                });
                var22 = var6;
                var5 = new var22[var5](var21);
                var9 = var5 instanceof Object ? var5 : var6;
                var8 = _closure1_slot20;
                var6 = var8.set;
                var5 = var1.user;
                var5 = var5.id;
                var5 = var6.bind(var8)(var5, var9);
                var6 = _closure1_slot36;
                var5 = var1.user;
                var5 = var5.id;
                var5 = var6.bind(var0)(var5);
            case 1373:
                var5 = var1.guild_member_profile;
                if (!(var4 != var5)) {
                    _fun42791_ip = 1938;
                    continue _fun42791
                }
            case 1386:
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var5 = var5[var7];
                var7 = var6.bind(var0)(var5);
                var6 = var7.parseUserProfileEffect;
                var5 = var1.guild_member_profile;
                var6 = var6.bind(var7)(var5);
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
                    _fun42791_ip = 1506;
                    continue _fun42791
                }
            case 1500:
                var5 = var7.theme_colors;
            case 1506:
                var9.themeColors = var5;
                var7 = var1.guild_member_profile;
                var8 = var4 == var7;
                var5 = undefined;
                if (var8) {
                    _fun42791_ip = 1532;
                    continue _fun42791
                }
            case 1526:
                var5 = var7.popout_animation_particle_type;
            case 1532:
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
                    _fun42791_ip = 1692;
                    continue _fun42791
                }
            case 1617:
                var5 = var3.Map;
                var7 = var5.prototype;
                var7 = Object.create(var7, {
                    constructor: {
                        value: var5
                    }
                });
                var22 = var7;
                var5 = new var22[var5](var21);
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
                _fun42791_ip = 1714;
                continue _fun42791;
            case 1692:
                var7 = var8.set;
                var5 = var1.guild_member_profile;
                var5 = var5.guild_id;
                var5 = var7.bind(var8)(var5, var9);
            case 1714:
                var7 = var4 == var6;
                var5 = undefined;
                if (var7) {
                    _fun42791_ip = 1729;
                    continue _fun42791
                }
            case 1723:
                var5 = var6.expiresAt;
            case 1729:
                if (!(var4 != var5)) {
                    _fun42791_ip = 1938;
                    continue _fun42791
                }
            case 1736:
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
                var22 = var6;
                var5 = new var22[var5](var21);
                var6 = var5 instanceof Object ? var5 : var6;
                var8 = _closure1_slot21;
                var7 = var8.get;
                var5 = var1.user;
                var5 = var5.id;
                var5 = var7.bind(var8)(var5);
                if (!(var4 == var5)) {
                    _fun42791_ip = 1885;
                    continue _fun42791
                }
            case 1810:
                var3 = var3.Map;
                var4 = var3.prototype;
                var4 = Object.create(var4, {
                    constructor: {
                        value: var3
                    }
                });
                var22 = var4;
                var3 = new var22[var3](var21);
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
                _fun42791_ip = 1907;
                continue _fun42791;
            case 1885:
                var4 = var5.set;
                var3 = var1.guild_member_profile;
                var3 = var3.guild_id;
                var3 = var4.bind(var5)(var3, var6);
            case 1907:
                var3 = _closure1_slot37;
                var2 = var1.user;
                var2 = var2.id;
                var1 = var1.guild_member_profile;
                var1 = var1.guild_id;
                var1 = var3.bind(var0)(var2, var1);
            case 1938:
                return var0;
        }
    };
    var _closure1_slot43 = var0;
    var0 = function arg0, arg1() {
        _fun42798: for (var _fun42798_ip = 0;;) switch (_fun42798_ip) {
            case 0:
                var0 = arg0;
                var2 = arg1;
                var3 = null;
                if (!(var3 == var0)) {
                    _fun42798_ip = 18;
                    continue _fun42798
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
                    _fun42798_ip = 95;
                    continue _fun42798
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
                    _fun42798_ip = 140;
                    continue _fun42798
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
    var0 = function arg0() {
        _fun42801: for (var _fun42801_ip = 0;;) switch (_fun42801_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.userId;
                var5 = var0.guildId;
                var1 = var0.withMutualFriends;
                var3 = null;
                if (!(var3 == var5)) {
                    _fun42801_ip = 32;
                    continue _fun42801
                }
            case 25:
                var5 = _closure1_slot14;
            case 32:
                var6 = _closure1_slot15;
                var4 = var6.get;
                var4 = var4.bind(var6)(var2);
                if (!(var3 == var4)) {
                    _fun42801_ip = 108;
                    continue _fun42801
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
                _fun42801_ip = 118;
                continue _fun42801;
            case 108:
                var3 = var4.add;
                var3 = var3.bind(var4)(var5);
            case 118:
                if (!var1) {
                    _fun42801_ip = 135;
                    continue _fun42801
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
    var0 = function arg0() {
        _fun42802: for (var _fun42802_ip = 0;;) switch (_fun42802_ip) {
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
                    _fun42802_ip = 66;
                    continue _fun42802
                }
            case 48:
                var5 = var6.delete;
                if (!(var0 == var7)) {
                    _fun42802_ip = 61;
                    continue _fun42802
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
                    _fun42802_ip = 148;
                    continue _fun42802
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
                    _fun42802_ip = 214;
                    continue _fun42802
                }
            case 209:
                var3 = var2.status;
            case 214:
                var2 = 404;
                if (!(var2 === var3)) {
                    _fun42802_ip = 279;
                    continue _fun42802
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
    var0 = function() {
        var0 = true;
        _closure1_slot29 = var0;
        var0 = undefined;
        return var0;
    };
    var _closure1_slot47 = var0;
    var0 = function arg0() {
        _fun42804: for (var _fun42804_ip = 0;;) switch (_fun42804_ip) {
            case 0:
                var1 = arg0;
                var2 = false;
                _closure1_slot29 = var2;
                var2 = var1.guild_id;
                var4 = null;
                if (!(var4 == var2)) {
                    _fun42804_ip = 321;
                    continue _fun42804
                }
            case 26:
                var5 = var1.userId;
                var15 = var1.accent_color;
                var14 = var1.banner;
                var13 = var1.bio;
                var12 = var1.pronouns;
                var11 = var1.popout_animation_particle_type;
                var10 = var1.theme_colors;
                var8 = var1.collectibles;
                var3 = _closure1_slot18;
                var2 = var3.get;
                var9 = var2.bind(var3)(var5);
                if (!(var4 != var9)) {
                    _fun42804_ip = 707;
                    continue _fun42804
                }
            case 94:
                var6 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 16;
                var2 = var3[var2];
                var3 = undefined;
                var7 = var6.bind(var3)(var2);
                var6 = var7.parseUserProfileEffect;
                var2 = {};
                var2.collectibles = var8;
                var6 = var6.bind(var7)(var2);
                var8 = _closure1_slot18;
                var7 = var8.set;
                var2 = {};
                var18 = var2;
                var17 = var9;
                var9 = copyDataProperties(var18, var17);
                var9 = 'accentColor';
                var2[var9] = var15;
                var9 = 'banner';
                var2[var9] = var14;
                var9 = 'bio';
                var2[var9] = var13;
                var9 = 'pronouns';
                var2[var9] = var12;
                var9 = 'popoutAnimationParticleType';
                var2[var9] = var11;
                var9 = 'themeColors';
                var2[var9] = var10;
                var9 = 'profileEffect';
                var2[var9] = var6;
                var2 = var7.bind(var8)(var5, var2);
                var7 = var4 == var6;
                var2 = undefined;
                if (var7) {
                    _fun42804_ip = 239;
                    continue _fun42804
                }
            case 233:
                var2 = var6.expiresAt;
            case 239:
                if (!(var4 != var2)) {
                    _fun42804_ip = 707;
                    continue _fun42804
                }
            case 246:
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
                var19 = var6;
                var2 = new var19[var2](var18);
                var7 = var2 instanceof Object ? var2 : var6;
                var6 = _closure1_slot20;
                var2 = var6.set;
                var2 = var2.bind(var6)(var5, var7);
                var2 = _closure1_slot36;
                var2 = var2.bind(var3)(var5);
                _fun42804_ip = 707;
                continue _fun42804;
            case 321:
                var3 = var1.userId;
                var2 = var1.guild_id;
                var15 = var1.accent_color;
                var14 = var1.banner;
                var13 = var1.bio;
                var12 = var1.pronouns;
                var11 = var1.popout_animation_particle_type;
                var10 = var1.theme_colors;
                var16 = var1.collectibles;
                var5 = _closure1_slot19;
                var1 = var5.get;
                var8 = var1.bind(var5)(var3);
                if (!(var4 != var2)) {
                    _fun42804_ip = 707;
                    continue _fun42804
                }
            case 394:
                if (!(var4 != var8)) {
                    _fun42804_ip = 707;
                    continue _fun42804
                }
            case 401:
                var1 = var8.get;
                var9 = var1.bind(var8)(var2);
                if (!(var4 != var9)) {
                    _fun42804_ip = 707;
                    continue _fun42804
                }
            case 418:
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 16;
                var5 = var5[var1];
                var1 = undefined;
                var7 = var6.bind(var1)(var5);
                var6 = var7.parseUserProfileEffect;
                var5 = {};
                var5.collectibles = var16;
                var6 = var6.bind(var7)(var5);
                var7 = var8.set;
                var5 = {};
                var18 = var5;
                var17 = var9;
                var9 = copyDataProperties(var18, var17);
                var9 = 'accentColor';
                var5[var9] = var15;
                var9 = 'banner';
                var5[var9] = var14;
                var9 = 'bio';
                var5[var9] = var13;
                var9 = 'pronouns';
                var5[var9] = var12;
                var9 = 'popoutAnimationParticleType';
                var5[var9] = var11;
                var9 = 'themeColors';
                var5[var9] = var10;
                var9 = 'profileEffect';
                var5[var9] = var6;
                var5 = var7.bind(var8)(var2, var5);
                var7 = var4 == var6;
                var5 = undefined;
                if (var7) {
                    _fun42804_ip = 559;
                    continue _fun42804
                }
            case 553:
                var5 = var6.expiresAt;
            case 559:
                if (!(var4 != var5)) {
                    _fun42804_ip = 707;
                    continue _fun42804
                }
            case 566:
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
                var19 = var6;
                var5 = new var19[var5](var18);
                var6 = var5 instanceof Object ? var5 : var6;
                var7 = _closure1_slot21;
                var5 = var7.get;
                var5 = var5.bind(var7)(var3);
                if (!(var4 == var5)) {
                    _fun42804_ip = 686;
                    continue _fun42804
                }
            case 630:
                var4 = global;
                var4 = var4.Map;
                var7 = var4.prototype;
                var7 = Object.create(var7, {
                    constructor: {
                        value: var4
                    }
                });
                var19 = var7;
                var4 = new var19[var4](var18);
                var8 = var4 instanceof Object ? var4 : var7;
                var4 = var8.set;
                var4 = var4.bind(var8)(var2, var6);
                var7 = _closure1_slot21;
                var4 = var7.set;
                var4 = var4.bind(var7)(var3, var8);
                _fun42804_ip = 697;
                continue _fun42804;
            case 686:
                var4 = var5.set;
                var4 = var4.bind(var5)(var2, var6);
            case 697:
                var0 = _closure1_slot37;
                var0 = var0.bind(var1)(var3, var2);
            case 707:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot48 = var0;
    var0 = function() {
        var0 = false;
        _closure1_slot29 = var0;
        var0 = undefined;
        return var0;
    };
    var _closure1_slot49 = var0;
    var0 = function arg0() {
        _fun42806: for (var _fun42806_ip = 0;;) switch (_fun42806_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.userId;
                var7 = var0.widgets;
                var2 = _closure1_slot18;
                var1 = var2.get;
                var5 = var1.bind(var2)(var4);
                var1 = null;
                if (!(var1 != var5)) {
                    _fun42806_ip = 127;
                    continue _fun42806
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
    var0 = function arg0() {
        _fun42807: for (var _fun42807_ip = 0;;) switch (_fun42807_ip) {
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
                    _fun42807_ip = 160;
                    continue _fun42807
                }
            case 94:
                var5 = var4.badges;
                if (!(var1 == var5)) {
                    _fun42807_ip = 108;
                    continue _fun42807
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
    var0 = function arg0() {
        _fun42808: for (var _fun42808_ip = 0;;) switch (_fun42808_ip) {
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
                    _fun42808_ip = 48;
                    continue _fun42808
                }
            case 43:
                var5 = var4.size;
            case 48:
                var6 = var0 != var5;
                var4 = 0;
                var0 = 0;
                if (!var6) {
                    _fun42808_ip = 62;
                    continue _fun42808
                }
            case 59:
                var0 = var5;
            case 62:
                var4 = var0 > var4;
                var0 = !var4;
                if (var4) {
                    _fun42808_ip = 81;
                    continue _fun42808
                }
            case 72:
                var1 = _closure1_slot57;
                var0 = var1.bind(var2)(var3);
            case 81:
                return var0;
        }
    };
    var _closure1_slot52 = var0;
    var0 = function() {
        var1 = _closure1_slot18;
        var0 = var1.keys;
        var5 = var0.bind(var1)();
        var3 = new Array(0);
        var4 = 0;
        var6 = var3;
        var0 = arraySpread(var6, var5, var4);
        var2 = var3.reduce;
        var1 = function(arg0, arg1) { // Environment: var0
            _fun42810: for (var _fun42810_ip = 0;;) switch (_fun42810_ip) {
                case 0:
                    var1 = arg0;
                    var3 = _closure1_slot57;
                    var2 = undefined;
                    var0 = arg1;
                    var0 = var3.bind(var2)(var0);
                    if (var0) {
                        _fun42810_ip = 26;
                        continue _fun42810
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
    var0 = function arg0() {
        var2 = _closure1_slot57;
        var0 = arg0;
        var0 = var0.user;
        var1 = var0.id;
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        return var0;
    };
    var _closure1_slot54 = var0;
    var0 = function arg0() {
        var2 = _closure1_slot57;
        var0 = arg0;
        var0 = var0.relationship;
        var1 = var0.id;
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        return var0;
    };
    var _closure1_slot55 = var0;
    var0 = function() {
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
    var0 = function arg0() {
        _fun42814: for (var _fun42814_ip = 0;;) switch (_fun42814_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                if (!(var0 != var3)) {
                    _fun42814_ip = 58;
                    continue _fun42814
                }
            case 9:
                var2 = _closure1_slot18;
                var1 = var2.get;
                var1 = var1.bind(var2)(var3);
                if (!(var0 != var1)) {
                    _fun42814_ip = 54;
                    continue _fun42814
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
    var0 = function arg0() {
        _fun42815: for (var _fun42815_ip = 0;;) switch (_fun42815_ip) {
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
                    _fun42815_ip = 114;
                    continue _fun42815
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
                    _fun42815_ip = 74;
                    continue _fun42815
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
        var3 = function() {
            _fun42818: for (var _fun42818_ip = 0;;) switch (_fun42818_ip) {
                case 0:
                    var4 = this;
                    var0 = _closure1_slot3;
                    var2 = _closure2_slot0;
                    var3 = undefined;
                    var0 = var0.bind(var3)(var4, var2);
                    var0 = {};
                    var6 = function() {
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
                        _fun42818_ip = 285;
                        continue _fun42818
                    }
                case 272:
                    var0 = var8.apply;
                    var0 = var0.bind(var8)(var4, var9);
                    _fun42818_ip = 319;
                    continue _fun42818;
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
                        _fun42820: for (var _fun42820_ip = 0;;) switch (_fun42820_ip) {
                            case 0:
                                var2 = _closure3_slot0;
                                var1 = var2.readSnapshot;
                                var0 = _closure2_slot0;
                                var0 = var0.LATEST_SNAPSHOT_VERSION;
                                var2 = var1.bind(var2)(var0);
                                var0 = null;
                                if (!(var0 != var2)) {
                                    _fun42820_ip = 54;
                                    continue _fun42820
                                }
                            case 37:
                                var1 = var2.forEach;
                                var0 = function(arg0) { // Environment: var0
                                    _fun42821: for (var _fun42821_ip = 0;;) switch (_fun42821_ip) {
                                        case 0:
                                            var0 = arg0;
                                            var3 = var0.userId;
                                            var2 = var0.profile;
                                            var0 = null;
                                            if (!(var0 != var3)) {
                                                _fun42821_ip = 61;
                                                continue _fun42821
                                            }
                                        case 20:
                                            if (!(var0 == var2)) {
                                                _fun42821_ip = 43;
                                                continue _fun42821
                                            }
                                        case 24:
                                            var1 = _closure1_slot18;
                                            var0 = var1.delete;
                                            var0 = var0.bind(var1)(var3);
                                            _fun42821_ip = 61;
                                            continue _fun42821;
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
        var0 = function() {
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
        var6 = function arg0, arg1() {
            _fun42823: for (var _fun42823_ip = 0;;) switch (_fun42823_ip) {
                case 0:
                    var3 = arg1;
                    var2 = _closure1_slot15;
                    var1 = var2.get;
                    var0 = arg0;
                    var2 = var1.bind(var2)(var0);
                    var5 = null;
                    var0 = var5 != var2;
                    if (!var0) {
                        _fun42823_ip = 50;
                        continue _fun42823
                    }
                case 32:
                    var1 = var2.has;
                    if (!(var5 == var3)) {
                        _fun42823_ip = 45;
                        continue _fun42823
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
        var6 = function arg0() {
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
        var6 = function() {
            var0 = _closure1_slot29;
            return var0;
        };
        var4.get = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'getUserProfile';
        var4.key = var6;
        var6 = function arg0() {
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
        var6 = function arg0, arg1() {
            _fun42827: for (var _fun42827_ip = 0;;) switch (_fun42827_ip) {
                case 0:
                    var5 = arg1;
                    var1 = null;
                    var2 = var1 == var5;
                    var0 = null;
                    if (var2) {
                        _fun42827_ip = 68;
                        continue _fun42827
                    }
                case 14:
                    var4 = _closure1_slot19;
                    var3 = var4.get;
                    var2 = arg0;
                    var4 = var3.bind(var4)(var2);
                    var3 = var1 == var4;
                    var2 = undefined;
                    if (var3) {
                        _fun42827_ip = 53;
                        continue _fun42827
                    }
                case 43:
                    var3 = var4.get;
                    var2 = var3.bind(var4)(var5);
                case 53:
                    var3 = var1 != var2;
                    var1 = null;
                    if (!var3) {
                        _fun42827_ip = 65;
                        continue _fun42827
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
        var6 = function arg0() {
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
        var6 = function arg0() {
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
        var6 = function arg0() {
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
        var6 = function arg0() {
            _fun42831: for (var _fun42831_ip = 0;;) switch (_fun42831_ip) {
                case 0:
                    var2 = _closure1_slot18;
                    var1 = var2.get;
                    var0 = arg0;
                    var1 = var1.bind(var2)(var0);
                    var0 = null;
                    var2 = var0 == var1;
                    var0 = undefined;
                    if (var2) {
                        _fun42831_ip = 37;
                        continue _fun42831
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
        var6 = function arg0() {
            _fun42832: for (var _fun42832_ip = 0;;) switch (_fun42832_ip) {
                case 0:
                    var2 = _closure1_slot18;
                    var1 = var2.get;
                    var0 = arg0;
                    var1 = var1.bind(var2)(var0);
                    var2 = null;
                    var3 = var2 == var1;
                    var0 = undefined;
                    if (var3) {
                        _fun42832_ip = 37;
                        continue _fun42832
                    }
                case 31:
                    var0 = var1.wishlistSettings;
                case 37:
                    if (!(var2 == var0)) {
                        _fun42832_ip = 47;
                        continue _fun42832
                    }
                case 41:
                    var0 = new Array(0);
                    _fun42832_ip = 71;
                    continue _fun42832;
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
        var6 = function arg0() {
            _fun42833: for (var _fun42833_ip = 0;;) switch (_fun42833_ip) {
                case 0:
                    var3 = arg0;
                    var2 = this;
                    var0 = null;
                    if (!(var0 != var3)) {
                        _fun42833_ip = 47;
                        continue _fun42833
                    }
                case 12:
                    var1 = var2.getWishlistIds;
                    var3 = var1.bind(var2)(var3);
                    var1 = var3.length;
                    var2 = 0;
                    var4 = var1 > var2;
                    var1 = null;
                    if (!var4) {
                        _fun42833_ip = 45;
                        continue _fun42833
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
        var6 = function arg0, arg1() {
            _fun42834: for (var _fun42834_ip = 0;;) switch (_fun42834_ip) {
                case 0:
                    var2 = _closure1_slot18;
                    var1 = var2.get;
                    var0 = arg0;
                    var2 = var1.bind(var2)(var0);
                    var0 = null;
                    var3 = var0 == var2;
                    var1 = undefined;
                    if (var3) {
                        _fun42834_ip = 53;
                        continue _fun42834
                    }
                case 31:
                    var3 = var2.wishlistSettings;
                    var2 = var0 == var3;
                    var1 = undefined;
                    if (var2) {
                        _fun42834_ip = 53;
                        continue _fun42834
                    }
                case 46:
                    var2 = arg1;
                    var1 = var3[var2];
                case 53:
                    var2 = var0 != var1;
                    var0 = null;
                    if (!var2) {
                        _fun42834_ip = 65;
                        continue _fun42834
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
        var6 = function() {
            _fun42835: for (var _fun42835_ip = 0;;) switch (_fun42835_ip) {
                case 0:
                    var2 = _closure1_slot10;
                    var1 = var2.getId;
                    var4 = var1.bind(var2)();
                    var1 = _closure1_slot18;
                    var0 = var1.get;
                    var2 = var0.bind(var1)(var4);
                    var0 = null;
                    if (!(var0 == var2)) {
                        _fun42835_ip = 67;
                        continue _fun42835
                    }
                case 37:
                    var0 = {};
                    var1 = _closure2_slot0;
                    var1 = var1.LATEST_SNAPSHOT_VERSION;
                    var0.version = var1;
                    var1 = new Array(0);
                    var0.data = var1;
                    _fun42835_ip = 113;
                    continue _fun42835;
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
        var6 = function() {
            var0 = _closure1_slot27;
            return var0;
        };
        var4.get = var6;
        var0[14] = var4;
        var4 = {};
        var6 = 'getApplicationWidgetConfig';
        var4.key = var6;
        var5 = function arg0() {
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1685, 1628, 1216, 1410, 1218, 3612, 4377, 4662, 22, 4663, 11325, 6932, 7349, 1234, 4396, 1304, 3632, 12221, 2]);