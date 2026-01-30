// stores/GuildReadStateStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var5;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var1
        _fun68849: for (var _fun68849_ip = 0;;) switch (_fun68849_ip) {
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
                _fun68849_ip = 76;
                continue _fun68849;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot31 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot31 = var0;
    var0 = function(arg0, arg1) { // Original name: _createForOfIteratorHelperLoose, environment: var1
        _fun68852: for (var _fun68852_ip = 0;;) switch (_fun68852_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun68852_ip = 45;
                    continue _fun68852
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 45:
                if (var1) {
                    _fun68852_ip = 54;
                    continue _fun68852
                }
            case 48:
                var1 = var2["@@iterator"];
            case 54:
                if (var1) {
                    _fun68852_ip = 344;
                    continue _fun68852
                }
            case 60:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun68852_ip = 322;
                    continue _fun68852
                }
            case 85:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun68852_ip = 282;
                    continue _fun68852
                }
            case 95:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun68852_ip = 269;
                    continue _fun68852
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
                    _fun68852_ip = 162;
                    continue _fun68852
                }
            case 157:
                var6 = var2.constructor;
            case 162:
                var9 = var8;
                if (!var6) {
                    _fun68852_ip = 178;
                    continue _fun68852
                }
            case 168:
                var6 = var2.constructor;
                var9 = var6.name;
            case 178:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun68852_ip = 248;
                    continue _fun68852
                }
            case 186:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun68852_ip = 248;
                    continue _fun68852
                }
            case 194:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun68852_ip = 233;
                    continue _fun68852
                }
            case 204:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun68852_ip = 246;
                    continue _fun68852
                }
            case 233:
                var8 = _closure1_slot33;
                var6 = var8.bind(var7)(var2, var7);
            case 246:
                _fun68852_ip = 264;
                continue _fun68852;
            case 248:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 264:
                var5 = var6;
                _fun68852_ip = 282;
                continue _fun68852;
            case 269:
                var6 = _closure1_slot33;
                var5 = var6.bind(var7)(var2, var7);
            case 282:
                var3 = var5;
                if (var3) {
                    _fun68852_ip = 322;
                    continue _fun68852
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
                    _fun68852_ip = 329;
                    continue _fun68852
                }
            case 325:
                _closure2_slot0 = var3;
            case 329:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun68853: for (var _fun68853_ip = 0;;) switch (_fun68853_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun68853_ip = 56;
                                continue _fun68853
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
                            _fun68853_ip = 67;
                            continue _fun68853;
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
            case 344:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot32 = var0;
    var0 = function(arg0, arg1) { // Original name: _arrayLikeToArray, environment: var1
        _fun68854: for (var _fun68854_ip = 0;;) switch (_fun68854_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun68854_ip = 23;
                    continue _fun68854
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun68854_ip = 33;
                    continue _fun68854
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
                    _fun68854_ip = 70;
                    continue _fun68854
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun68854_ip = 55;
                    continue _fun68854
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot33 = var0;
    var0 = function(arg0) { // Original name: createGuildState, environment: var1
        _fun68855: for (var _fun68855_ip = 0;;) switch (_fun68855_ip) {
            case 0:
                var1 = arg0;
                var0 = _closure1_slot28;
                var3 = null;
                if (!(var3 == var1)) {
                    _fun68855_ip = 20;
                    continue _fun68855
                }
            case 16:
                var1 = _closure1_slot27;
            case 20:
                var4 = var0[var1];
                var0 = {
                    'unread': false,
                    'unreadByType': null,
                    'unreadChannelId': null,
                    'lowImportanceMentionCount': 0,
                    'highImportanceMentionCount': 0,
                    'mentionCounts': null,
                    'ncMentionCount': 0
                };
                var1 = {};
                var0.unreadByType = var1;
                var2 = {};
                var0.mentionCounts = var2;
                var5 = var3 == var4;
                var2 = undefined;
                if (var5) {
                    _fun68855_ip = 69;
                    continue _fun68855
                }
            case 63:
                var2 = var4.sentinel;
            case 69:
                var3 = var3 != var2;
                var1 = 0;
                if (!var3) {
                    _fun68855_ip = 81;
                    continue _fun68855
                }
            case 78:
                var1 = var2;
            case 81:
                var0.sentinel = var1;
                return var0;
        }
    };
    var _closure1_slot34 = var0;
    var0 = function(arg0) { // Original name: getOrCreateGuildState, environment: var1
        _fun68856: for (var _fun68856_ip = 0;;) switch (_fun68856_ip) {
            case 0:
                var5 = arg0;
                var2 = _closure1_slot28;
                var4 = null;
                var1 = var5;
                if (!(var4 == var5)) {
                    _fun68856_ip = 23;
                    continue _fun68856
                }
            case 19:
                var1 = _closure1_slot27;
            case 23:
                var6 = _closure1_slot28;
                var0 = var5;
                if (!(var4 == var0)) {
                    _fun68856_ip = 38;
                    continue _fun68856
                }
            case 34:
                var0 = _closure1_slot27;
            case 38:
                var0 = var6[var0];
                if (!(var4 == var0)) {
                    _fun68856_ip = 57;
                    continue _fun68856
                }
            case 46:
                var4 = _closure1_slot34;
                var3 = undefined;
                var0 = var4.bind(var3)(var5);
            case 57:
                var2[var1] = var0;
                return var0;
        }
    };
    var _closure1_slot35 = var0;
    var0 = function(arg0) { // Original name: updateGuildUnreadSentinel, environment: var1
        var3 = _closure1_slot35;
        var0 = undefined;
        var1 = arg0;
        var3 = var3.bind(var0)(var1);
        var1 = var3.sentinel;
        var1 = var1 + 1;
        var3.sentinel = var1;
        var1 = _closure1_slot30;
        var1 = var1 + 1;
        _closure1_slot30 = var1;
        return var0;
    };
    var _closure1_slot36 = var0;
    var0 = function(arg0, arg1, arg2) { // Original name: disableUnreadForOptInChannel, environment: var1
        _fun68858: for (var _fun68858_ip = 0;;) switch (_fun68858_ip) {
            case 0:
                var5 = arg0;
                var1 = arg2;
                var2 = var5.guild_id;
                var0 = null;
                var0 = var0 != var2;
                if (!var0) {
                    _fun68858_ip = 78;
                    continue _fun68858
                }
            case 20:
                if (!var1) {
                    _fun68858_ip = 63;
                    continue _fun68858
                }
            case 23:
                var6 = _closure1_slot14;
                var4 = var5.type;
                var2 = undefined;
                var2 = var6.bind(var2)(var4);
                if (var2) {
                    _fun68858_ip = 60;
                    continue _fun68858
                }
            case 45:
                var4 = _closure1_slot21;
                var3 = var4.isChannelRecordOrParentOptedIn;
                var2 = var3.bind(var4)(var5);
            case 60:
                var1 = !var2;
            case 63:
                if (!var1) {
                    _fun68858_ip = 75;
                    continue _fun68858
                }
            case 66:
                var3 = 0;
                var2 = arg1;
                var1 = var3 === var2;
            case 75:
                var0 = var1;
            case 78:
                return var0;
        }
    };
    var _closure1_slot37 = var0;
    var0 = function(arg0) { // Original name: isCountableChannel, environment: var1
        _fun68859: for (var _fun68859_ip = 0;;) switch (_fun68859_ip) {
            case 0:
                var4 = arg0;
                var2 = arguments[1];
                var3 = arguments[2];
                var6 = undefined;
                if (!(var2 === var6)) {
                    _fun68859_ip = 17;
                    continue _fun68859
                }
            case 15:
                var2 = 0;
            case 17:
                if (!(var3 === var6)) {
                    _fun68859_ip = 23;
                    continue _fun68859
                }
            case 21:
                var3 = false;
            case 23:
                var0 = null;
                if (!(var0 != var4)) {
                    _fun68859_ip = 339;
                    continue _fun68859
                }
            case 32:
                var0 = var4.isGuildVocal;
                var0 = var0.bind(var4)();
                if (!var0) {
                    _fun68859_ip = 54;
                    continue _fun68859
                }
            case 45:
                var0 = 0;
                if (!(var0 !== var2)) {
                    _fun68859_ip = 335;
                    continue _fun68859
                }
            case 54:
                var5 = var4.hasFlag;
                var0 = _closure1_slot24;
                var0 = var0.IS_GUILD_RESOURCE_CHANNEL;
                var0 = var5.bind(var4)(var0);
                if (var0) {
                    _fun68859_ip = 331;
                    continue _fun68859
                }
            case 84:
                var0 = 0;
                if (!(var0 !== var2)) {
                    _fun68859_ip = 93;
                    continue _fun68859
                }
            case 90:
                if (!var3) {
                    _fun68859_ip = 193;
                    continue _fun68859
                }
            case 93:
                var3 = var4.isThread;
                var3 = var3.bind(var4)();
                if (var3) {
                    _fun68859_ip = 134;
                    continue _fun68859
                }
            case 106:
                var8 = _closure1_slot21;
                var7 = var8.isGuildOrCategoryOrChannelMuted;
                var5 = var4.guild_id;
                var3 = var4.id;
                var3 = var7.bind(var8)(var5, var3);
                _fun68859_ip = 187;
                continue _fun68859;
            case 134:
                var8 = _closure1_slot11;
                var7 = var8.isMuted;
                var5 = var4.id;
                var5 = var7.bind(var8)(var5);
                if (var5) {
                    _fun68859_ip = 184;
                    continue _fun68859
                }
            case 157:
                var10 = _closure1_slot21;
                var9 = var10.isGuildOrCategoryOrChannelMuted;
                var8 = var4.guild_id;
                var7 = var4.parent_id;
                var5 = var9.bind(var10)(var8, var7);
            case 184:
                var3 = var5;
            case 187:
                if (var3) {
                    _fun68859_ip = 327;
                    continue _fun68859
                }
            case 193:
                var3 = var4.isPrivate;
                var3 = var3.bind(var4)();
                if (var3) {
                    _fun68859_ip = 289;
                    continue _fun68859
                }
            case 206:
                var5 = _closure1_slot37;
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var3 = 22;
                var3 = var8[var3];
                var8 = var7.bind(var6)(var3);
                var7 = var8.isOptInEnabledForGuild;
                var3 = var4.guild_id;
                var3 = var7.bind(var8)(var3);
                var3 = var5.bind(var6)(var4, var2, var3);
                if (var3) {
                    _fun68859_ip = 285;
                    continue _fun68859
                }
            case 256:
                var6 = _closure1_slot18;
                var5 = var6.can;
                var3 = var4.accessPermissions;
                var3 = var5.bind(var6)(var3, var4);
                if (var3) {
                    _fun68859_ip = 289;
                    continue _fun68859
                }
            case 281:
                var3 = false;
                return var3;
            case 285:
                var3 = false;
                return var3;
            case 289:
                var0 = var2 > var0;
                if (var0) {
                    _fun68859_ip = 325;
                    continue _fun68859
                }
            case 296:
                var3 = _closure1_slot21;
                var2 = var3.resolveUnreadSetting;
                var2 = var2.bind(var3)(var4);
                var1 = _closure1_slot26;
                var1 = var1.ALL_MESSAGES;
                var0 = var2 === var1;
            case 325:
                return var0;
            case 327:
                var0 = false;
                return var0;
            case 331:
                var0 = false;
                return var0;
            case 335:
                var0 = false;
                return var0;
            case 339:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot38 = var0;
    var0 = function(arg0, arg1, arg2) { // Original name: computeIsCountableGuildChannel, environment: var1
        _fun68860: for (var _fun68860_ip = 0;;) switch (_fun68860_ip) {
            case 0:
                var8 = arg0;
                var6 = arg1;
                var1 = _closure1_slot13;
                var0 = var8.type;
                var4 = undefined;
                var0 = var1.bind(var4)(var0);
                var0 = !var0;
                if (var0) {
                    _fun68860_ip = 37;
                    continue _fun68860
                }
            case 31:
                var1 = 0;
                var0 = var1 !== var6;
            case 37:
                if (!var0) {
                    _fun68860_ip = 193;
                    continue _fun68860
                }
            case 43:
                var3 = _closure1_slot18;
                var2 = var3.canBasicChannel;
                var7 = _closure1_slot12;
                var1 = var8.type;
                var1 = var7.bind(var4)(var1);
                var1 = var2.bind(var3)(var1, var8);
                var2 = !var1;
                var1 = !var2;
                if (var2) {
                    _fun68860_ip = 190;
                    continue _fun68860
                }
            case 82:
                var3 = _closure1_slot37;
                var2 = arg2;
                var2 = var3.bind(var4)(var8, var6, var2);
                var2 = !var2;
                if (!var2) {
                    _fun68860_ip = 187;
                    continue _fun68860
                }
            case 102:
                var3 = 'flags';
                var4 = var3 in var8;
                var3 = !var4;
                if (!var4) {
                    _fun68860_ip = 140;
                    continue _fun68860
                }
            case 116:
                var7 = var8.hasFlag;
                var4 = _closure1_slot24;
                var4 = var4.IS_GUILD_RESOURCE_CHANNEL;
                var4 = var7.bind(var8)(var4);
                var3 = !var4;
            case 140:
                if (!var3) {
                    _fun68860_ip = 184;
                    continue _fun68860
                }
            case 143:
                var4 = 0;
                var4 = var6 > var4;
                if (var4) {
                    _fun68860_ip = 181;
                    continue _fun68860
                }
            case 152:
                var7 = _closure1_slot21;
                var6 = var7.resolveUnreadSetting;
                var6 = var6.bind(var7)(var8);
                var5 = _closure1_slot26;
                var5 = var5.ALL_MESSAGES;
                var4 = var6 === var5;
            case 181:
                var3 = var4;
            case 184:
                var2 = var3;
            case 187:
                var1 = var2;
            case 190:
                var0 = var1;
            case 193:
                return var0;
        }
    };
    var _closure1_slot39 = var0;
    var0 = function(arg0) { // Original name: sanitizeGuildId, environment: var1
        _fun68861: for (var _fun68861_ip = 0;;) switch (_fun68861_ip) {
            case 0:
                var0 = arg0;
                var1 = _closure1_slot27;
                if (!(var1 !== var0)) {
                    _fun68861_ip = 28;
                    continue _fun68861
                }
            case 14:
                var1 = null;
                if (!(var1 !== var0)) {
                    _fun68861_ip = 28;
                    continue _fun68861
                }
            case 20:
                var1 = undefined;
                if (!(var1 !== var0)) {
                    _fun68861_ip = 28;
                    continue _fun68861
                }
            case 26:
                return var0;
            case 28:
                var0 = null;
                return var0;
        }
    };
    var _closure1_slot40 = var0;
    var0 = function(arg0, arg1) { // Original name: isNonChannelUnread, environment: var1
        _fun68862: for (var _fun68862_ip = 0;;) switch (_fun68862_ip) {
            case 0:
                var5 = arg0;
                var4 = arg1;
                var1 = _closure1_slot19;
                var0 = var1.hasUnread;
                var3 = var0.bind(var1)(var5, var4);
                var0 = _closure1_slot25;
                var1 = var0.GUILD_EVENT;
                var0 = var3;
                if (!(var4 === var1)) {
                    _fun68862_ip = 93;
                    continue _fun68862
                }
            case 42:
                var4 = _closure1_slot21;
                var1 = var4.isMuted;
                var1 = var1.bind(var4)(var5);
                var1 = !var1;
                if (!var1) {
                    _fun68862_ip = 90;
                    continue _fun68862
                }
            case 63:
                var4 = _closure1_slot21;
                var2 = var4.isMuteScheduledEventsEnabled;
                var2 = var2.bind(var4)(var5);
                var2 = !var2;
                if (!var2) {
                    _fun68862_ip = 87;
                    continue _fun68862
                }
            case 84:
                var2 = var3;
            case 87:
                var1 = var2;
            case 90:
                var0 = var1;
            case 93:
                return var0;
        }
    };
    var _closure1_slot41 = var0;
    var0 = function(arg0, arg1) { // Original name: createNewStateFrom, environment: var1
        var2 = arg1;
        var3 = _closure1_slot34;
        var1 = undefined;
        var0 = arg0;
        var0 = var3.bind(var1)(var0);
        var1 = {};
        var4 = var2.mentionCounts;
        var5 = var1;
        var3 = copyDataProperties(var5, var4);
        var0.mentionCounts = var1;
        var1 = {};
        var4 = var2.unreadByType;
        var5 = var1;
        var2 = copyDataProperties(var5, var4);
        var0.unreadByType = var1;
        return var0;
    };
    var _closure1_slot42 = var0;
    var0 = function(arg0) { // Original name: updateGuildUnread, environment: var1
        var0 = arg0;
        var1 = global;
        var3 = var1.Object;
        var2 = var3.values;
        var1 = {};
        var6 = var0.unreadByType;
        var7 = var1;
        var4 = copyDataProperties(var7, var6);
        var4 = _closure1_slot25;
        var5 = var4.GUILD_EVENT;
        var4 = undefined;
        var1[var5] = var4;
        var3 = var2.bind(var3)(var1);
        var2 = var3.some;
        var1 = function(arg0) { // Environment: var1
            var0 = arg0;
            return var0;
        };
        var1 = var2.bind(var3)(var1);
        var0.unread = var1;
        return var0;
    };
    var _closure1_slot43 = var0;
    var0 = function(arg0, arg1) { // Original name: updateNotificationCenterMentions, environment: var1
        _fun68866: for (var _fun68866_ip = 0;;) switch (_fun68866_ip) {
            case 0:
                var1 = arg0;
                var5 = arg1;
                var2 = _closure1_slot8;
                var2 = var2.tabFocused;
                if (var2) {
                    _fun68866_ip = 100;
                    continue _fun68866
                }
            case 22:
                var0 = _closure1_slot45;
                var7 = undefined;
                var6 = var0.bind(var7)(var1);
                var0 = var0.bind(var7)(var5);
                var2 = global;
                var4 = var2.Math;
                var3 = var4.max;
                var2 = null;
                var8 = var2 == var5;
                if (var8) {
                    _fun68866_ip = 66;
                    continue _fun68866
                }
            case 60:
                var7 = var5.ncMentionCount;
            case 66:
                var8 = var2 != var7;
                var2 = 0;
                var5 = 0;
                if (!var8) {
                    _fun68866_ip = 80;
                    continue _fun68866
                }
            case 77:
                var5 = var7;
            case 80:
                var0 = var6 - var0;
                var0 = var5 + var0;
                var0 = var3.bind(var4)(var0, var2);
                var1.ncMentionCount = var0;
            case 100:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot44 = var0;
    var0 = function(arg0) { // Original name: getGuildNotifCenterMentionCount, environment: var1
        _fun68867: for (var _fun68867_ip = 0;;) switch (_fun68867_ip) {
            case 0:
                var1 = arg0;
                var _closure2_slot0 = var1;
                var2 = 0;
                var _closure2_slot1 = var2;
                var4 = _closure1_slot22;
                var3 = var4.getCurrentUser;
                var3 = var3.bind(var4)();
                var6 = null;
                var7 = var6 == var3;
                var4 = undefined;
                var5 = undefined;
                if (var7) {
                    _fun68867_ip = 66;
                    continue _fun68867
                }
            case 44:
                var8 = _closure1_slot19;
                var7 = var8.getNotifCenterReadState;
                var3 = var3.id;
                var5 = var7.bind(var8)(var3);
            case 66:
                var _closure2_slot2 = var5;
                var3 = var6 == var1;
                if (var3) {
                    _fun68867_ip = 81;
                    continue _fun68867
                }
            case 77:
                var3 = var6 == var5;
            case 81:
                if (var3) {
                    _fun68867_ip = 137;
                    continue _fun68867
                }
            case 84:
                var3 = _closure1_slot1;
                var5 = _closure1_slot2;
                var2 = 23;
                var2 = var5[var2];
                var3 = var3.bind(var4)(var2);
                var2 = var3.keys;
                var1 = var1.mentionCounts;
                var3 = var2.bind(var3)(var1);
                var2 = var3.forEach;
                var1 = function(arg0) { // Environment: var0
                    _fun68868: for (var _fun68868_ip = 0;;) switch (_fun68868_ip) {
                        case 0:
                            var4 = arg0;
                            var2 = _closure1_slot19;
                            var1 = var2.lastMessageId;
                            var6 = var1.bind(var2)(var4);
                            var1 = _closure2_slot2;
                            var5 = var1._ackMessageId;
                            var3 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 23;
                            var1 = var1[var0];
                            var0 = undefined;
                            var3 = var3.bind(var0)(var1);
                            var1 = var3.compare;
                            var3 = var1.bind(var3)(var6, var5);
                            var1 = 0;
                            if (!(var3 > var1)) {
                                _fun68868_ip = 106;
                                continue _fun68868
                            }
                        case 74:
                            var3 = _closure2_slot1;
                            var1 = _closure2_slot0;
                            var1 = var1.mentionCounts;
                            var1 = var1[var4];
                            var1 = var1.count;
                            var1 = var3 + var1;
                            _closure2_slot1 = var1;
                        case 106:
                            return var0;
                    }
                };
                var1 = var2.bind(var3)(var1);
            case 137:
                var0 = _closure2_slot1;
                return var0;
        }
    };
    var _closure1_slot45 = var0;
    var0 = function(arg0, arg1, arg2) { // Original name: aggregateGuildState, environment: var1
        _fun68869: for (var _fun68869_ip = 0;;) switch (_fun68869_ip) {
            case 0:
                var5 = arg0;
                var4 = arg1;
                var3 = arg2;
                var _closure2_slot0 = var4;
                var6 = _closure1_slot43;
                var2 = undefined;
                var6 = var6.bind(var2)(var4);
                var6 = 0;
                var4.lowImportanceMentionCount = var6;
                var4.highImportanceMentionCount = var6;
                var7 = _closure1_slot1;
                var8 = _closure1_slot2;
                var6 = 23;
                var6 = var8[var6];
                var8 = var7.bind(var2)(var6);
                var7 = var8.forEach;
                var6 = var4.mentionCounts;
                var0 = function(arg0) { // Environment: var0
                    _fun68870: for (var _fun68870_ip = 0;;) switch (_fun68870_ip) {
                        case 0:
                            var0 = arg0;
                            var2 = var0.count;
                            var0 = var0.isMentionLowImportance;
                            var1 = _closure2_slot0;
                            if (var0) {
                                _fun68870_ip = 43;
                                continue _fun68870
                            }
                        case 25:
                            var0 = var1.highImportanceMentionCount;
                            var0 = var0 + var2;
                            var1.highImportanceMentionCount = var0;
                            _fun68870_ip = 59;
                            continue _fun68870;
                        case 43:
                            var0 = var1.lowImportanceMentionCount;
                            var0 = var0 + var2;
                            var1.lowImportanceMentionCount = var0;
                        case 59:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var7.bind(var8)(var6, var0);
                var6 = var4.unread;
                var0 = var3.unread;
                var0 = var6 !== var0;
                if (var0) {
                    _fun68869_ip = 122;
                    continue _fun68869
                }
            case 106:
                var7 = var4.lowImportanceMentionCount;
                var6 = var3.lowImportanceMentionCount;
                var0 = var7 !== var6;
            case 122:
                if (var0) {
                    _fun68869_ip = 141;
                    continue _fun68869
                }
            case 125:
                var7 = var4.highImportanceMentionCount;
                var6 = var3.highImportanceMentionCount;
                var0 = var7 !== var6;
            case 141:
                if (!var0) {
                    _fun68869_ip = 244;
                    continue _fun68869
                }
            case 144:
                var8 = _closure1_slot28;
                var7 = null;
                var6 = var5;
                if (!(var7 == var5)) {
                    _fun68869_ip = 161;
                    continue _fun68869
                }
            case 157:
                var6 = _closure1_slot27;
            case 161:
                var8[var6] = var4;
                if (!(var7 != var5)) {
                    _fun68869_ip = 204;
                    continue _fun68869
                }
            case 169:
                var6 = var4.unread;
                var8 = _closure1_slot29;
                if (var6) {
                    _fun68869_ip = 194;
                    continue _fun68869
                }
            case 182:
                var6 = var8.delete;
                var6 = var6.bind(var8)(var5);
                _fun68869_ip = 204;
                continue _fun68869;
            case 194:
                var6 = var8.add;
                var6 = var6.bind(var8)(var5);
            case 204:
                var6 = _closure1_slot30;
                var6 = var6 + 1;
                _closure1_slot30 = var6;
                var6 = _closure1_slot36;
                if (!(var7 == var5)) {
                    _fun68869_ip = 227;
                    continue _fun68869
                }
            case 223:
                var5 = _closure1_slot27;
            case 227:
                var5 = var6.bind(var2)(var5);
                var1 = _closure1_slot44;
                var1 = var1.bind(var2)(var4, var3);
                var0 = true;
            case 244:
                return var0;
        }
    };
    var _closure1_slot46 = var0;
    var0 = function(arg0, arg1) { // Original name: recountChannels, environment: var1
        _fun68871: for (var _fun68871_ip = 0;;) switch (_fun68871_ip) {
            case 0:
                var9 = arg1;
                var2 = _closure1_slot40;
                var4 = undefined;
                var1 = arg0;
                var3 = var2.bind(var4)(var1);
                var _closure2_slot0 = var3;
                var1 = _closure1_slot35;
                var2 = var1.bind(var4)(var3);
                var1 = _closure1_slot42;
                var1 = var1.bind(var4)(var3, var2);
                var _closure2_slot1 = var1;
                var6 = false;
                var _closure2_slot2 = var6;
                var7 = var9.forEach;
                var6 = function(arg0) { // Environment: var5
                    _fun68872: for (var _fun68872_ip = 0;;) switch (_fun68872_ip) {
                        case 0:
                            var5 = arg0;
                            var1 = _closure1_slot16;
                            var0 = var1.getChannel;
                            var0 = var0.bind(var1)(var5);
                            var6 = null;
                            if (!(var6 == var0)) {
                                _fun68872_ip = 48;
                                continue _fun68872
                            }
                        case 26:
                            var1 = _closure2_slot1;
                            var1 = var1.mentionCounts;
                            var1 = delete var1[var5];
                            _fun68872_ip = 258;
                            continue _fun68872;
                        case 48:
                            var1 = var0.getGuildId;
                            var4 = var1.bind(var0)();
                            var2 = _closure2_slot0;
                            if (!(var4 === var2)) {
                                _fun68872_ip = 258;
                                continue _fun68872
                            }
                        case 72:
                            var4 = _closure1_slot19;
                            var2 = var4.getMentionCount;
                            var4 = var2.bind(var4)(var5);
                            var2 = _closure2_slot0;
                            var2 = var6 !== var2;
                            if (!var2) {
                                _fun68872_ip = 105;
                                continue _fun68872
                            }
                        case 98:
                            var6 = _closure2_slot2;
                            var2 = !var6;
                        case 105:
                            if (!var2) {
                                _fun68872_ip = 128;
                                continue _fun68872
                            }
                        case 108:
                            var8 = _closure1_slot19;
                            var7 = var8.hasUnread;
                            var6 = var0.id;
                            var2 = var7.bind(var8)(var6);
                        case 128:
                            if (!var2) {
                                _fun68872_ip = 146;
                                continue _fun68872
                            }
                        case 131:
                            var8 = _closure1_slot38;
                            var7 = undefined;
                            var6 = true;
                            var2 = var8.bind(var7)(var0, var4, var6);
                        case 146:
                            if (!var2) {
                                _fun68872_ip = 170;
                                continue _fun68872
                            }
                        case 149:
                            var2 = true;
                            _closure2_slot2 = var2;
                            var6 = _closure2_slot1;
                            var2 = var0.id;
                            var6.unreadChannelId = var2;
                        case 170:
                            var2 = 0;
                            if (!(var4 > var2)) {
                                _fun68872_ip = 191;
                                continue _fun68872
                            }
                        case 176:
                            var6 = _closure1_slot38;
                            var2 = undefined;
                            var2 = var6.bind(var2)(var0, var4);
                            if (var2) {
                                _fun68872_ip = 212;
                                continue _fun68872
                            }
                        case 191:
                            var2 = _closure2_slot1;
                            var6 = var2.mentionCounts;
                            var2 = var0.id;
                            var2 = delete var6[var2];
                            _fun68872_ip = 258;
                            continue _fun68872;
                        case 212:
                            var1 = _closure2_slot1;
                            var2 = var1.mentionCounts;
                            var1 = var0.id;
                            var0 = {};
                            var0.count = var4;
                            var4 = _closure1_slot19;
                            var3 = var4.getIsMentionLowImportance;
                            var3 = var3.bind(var4)(var5);
                            var0.isMentionLowImportance = var3;
                            var2[var1] = var0;
                        case 258:
                            var0 = undefined;
                            return var0;
                    }
                };
                var6 = var7.bind(var9)(var6);
                var7 = var1.unreadByType;
                var6 = _closure1_slot25;
                var6 = var6.CHANNEL;
                var5 = _closure2_slot2;
                var7[var6] = var5;
                var6 = var1.unreadByType;
                var5 = _closure1_slot25;
                var5 = var5.CHANNEL;
                var6 = var6[var5];
                var7 = var2.unreadByType;
                var5 = _closure1_slot25;
                var5 = var5.CHANNEL;
                var5 = var7[var5];
                if (!(var6 !== var5)) {
                    _fun68871_ip = 301;
                    continue _fun68871
                }
            case 143:
                var6 = var1.unreadByType;
                var5 = _closure1_slot25;
                var5 = var5.CHANNEL;
                var5 = var6[var5];
                if (var5) {
                    _fun68871_ip = 301;
                    continue _fun68871
                }
            case 169:
                var7 = _closure1_slot16;
                var6 = var7.getChannel;
                var5 = var2.unreadChannelId;
                var7 = var6.bind(var7)(var5);
                var5 = null;
                if (!(var5 != var7)) {
                    _fun68871_ip = 290;
                    continue _fun68871
                }
            case 195:
                var8 = var9.includes;
                var6 = var7.id;
                var6 = var8.bind(var9)(var6);
                if (var6) {
                    _fun68871_ip = 290;
                    continue _fun68871
                }
            case 213:
                var9 = _closure1_slot19;
                var8 = var9.hasUnread;
                var6 = var7.id;
                var6 = var8.bind(var9)(var6);
                if (!var6) {
                    _fun68871_ip = 290;
                    continue _fun68871
                }
            case 236:
                var6 = _closure1_slot38;
                var6 = var6.bind(var4)(var7);
                if (!var6) {
                    _fun68871_ip = 290;
                    continue _fun68871
                }
            case 248:
                if (!(var5 != var3)) {
                    _fun68871_ip = 266;
                    continue _fun68871
                }
            case 252:
                var6 = _closure1_slot29;
                var5 = var6.add;
                var5 = var5.bind(var6)(var3);
            case 266:
                var7 = var1.unreadByType;
                var5 = _closure1_slot25;
                var6 = var5.CHANNEL;
                var5 = true;
                var7[var6] = var5;
                _fun68871_ip = 301;
                continue _fun68871;
            case 290:
                var5 = _closure1_slot49;
                var5 = var5.bind(var4)(var3);
                return var5;
            case 301:
                var0 = _closure1_slot46;
                var0 = var0.bind(var4)(var3, var1, var2);
                return var0;
        }
    };
    var _closure1_slot47 = var0;
    var0 = function(arg0, arg1) { // Original name: updateNonChannel, environment: var1
        _fun68873: for (var _fun68873_ip = 0;;) switch (_fun68873_ip) {
            case 0:
                var4 = arg0;
                var0 = null;
                if (!(var0 == var4)) {
                    _fun68873_ip = 13;
                    continue _fun68873
                }
            case 9:
                var0 = undefined;
                return var0;
            case 13:
                var1 = _closure1_slot35;
                var3 = undefined;
                var2 = var1.bind(var3)(var4);
                var1 = _closure1_slot42;
                var1 = var1.bind(var3)(var4, var2);
                var7 = var1.unreadByType;
                var5 = _closure1_slot25;
                var6 = var5.GUILD_EVENT;
                var8 = _closure1_slot41;
                var5 = arg1;
                var5 = var8.bind(var3)(var4, var5);
                var7[var6] = var5;
                var0 = _closure1_slot46;
                var0 = var0.bind(var3)(var4, var1, var2);
                return var0;
        }
    };
    var _closure1_slot48 = var0;
    var0 = function(arg0, arg1) { // Original name: recountGuild, environment: var1
        _fun68874: for (var _fun68874_ip = 0;;) switch (_fun68874_ip) {
            case 0:
                var2 = _closure1_slot40;
                var4 = undefined;
                var0 = arg0;
                var5 = var2.bind(var4)(var0);
                var0 = _closure1_slot34;
                var3 = var0.bind(var4)(var5);
                var7 = null;
                if (!(var7 != var5)) {
                    _fun68874_ip = 882;
                    continue _fun68874
                }
            case 35:
                var2 = _closure1_slot21;
                var0 = var2.isMuted;
                var22 = var0.bind(var2)(var5);
                if (!var22) {
                    _fun68874_ip = 65;
                    continue _fun68874
                }
            case 53:
                var0 = false;
                var2 = arg1;
                if (!(var0 !== var2)) {
                    _fun68874_ip = 880;
                    continue _fun68874
                }
            case 65:
                var6 = _closure1_slot21;
                var2 = var6.getMutedChannels;
                var16 = var2.bind(var6)(var5);
                var6 = _closure1_slot21;
                var2 = var6.getChannelOverrides;
                var15 = var2.bind(var6)(var5);
                var6 = _closure1_slot0;
                var8 = _closure1_slot2;
                var2 = 22;
                var2 = var8[var2];
                var6 = var6.bind(var4)(var2);
                var2 = var6.isOptInEnabledForGuild;
                var14 = var2.bind(var6)(var5);
                var6 = _closure1_slot16;
                var2 = var6.getMutableBasicGuildChannelsForGuild;
                var13 = var2.bind(var6)(var5);
                var11 = var13;
                var8 = true;
                var21 = 0;
                var2 = undefined;
                for (var6 in var11)
                    case 161: {
                        case 173: var20 = var6;
                        var18 = var13[var20];
                        var26 = var22;
                        if (var22) {
                            _fun68874_ip = 196;
                            continue _fun68874
                        }
                        case 186: var17 = var16.has;
                        var26 = var17.bind(var16)(var20);
                        case 196: if (var26) {
                            _fun68874_ip = 231;
                            continue _fun68874
                        }
                        case 199: var17 = var18.parent_id;
                        var17 = var7 != var17;
                        if (!var17) {
                            _fun68874_ip = 228;
                            continue _fun68874
                        }
                        case 212: var23 = var16.has;
                        var19 = var18.parent_id;
                        var17 = var23.bind(var16)(var19);
                        case 228: var26 = var17;
                        case 231: var19 = var3.unreadByType;
                        var17 = _closure1_slot25;
                        var17 = var17.CHANNEL;
                        var17 = var19[var17];
                        var23 = _closure1_slot19;
                        var19 = var23.getGuildChannelUnreadState;
                        var34 = var23;
                        var33 = var18;
                        var32 = var14;
                        var31 = var15;
                        var30 = var26;
                        var29 = var17;
                        var19 = var34[var19](var33, var32, var31, var30, var29, var28);
                        var24 = var19.mentionCount;
                        var25 = var19.unread;
                        var23 = var19.isMentionLowImportance;
                        var19 = var24 > var21;
                        if (var19) {
                            _fun68874_ip = 314;
                            continue _fun68874
                        }
                        case 308: if (var26) {
                            _fun68874_ip = 161;
                            continue _fun68874
                        }
                        case 314: var17 = !var17;
                        if (!var17) {
                            _fun68874_ip = 332;
                            continue _fun68874
                        }
                        case 320: var26 = !var26;
                        if (var26) {
                            _fun68874_ip = 329;
                            continue _fun68874
                        }
                        case 326: var26 = var19;
                        case 329: var17 = var26;
                        case 332: if (!var17) {
                            _fun68874_ip = 338;
                            continue _fun68874
                        }
                        case 335: var17 = var25;
                        case 338: if (var17) {
                            _fun68874_ip = 350;
                            continue _fun68874
                        }
                        case 341: var2 = var17;
                        if (!var19) {
                            _fun68874_ip = 161;
                            continue _fun68874
                        }
                        case 350: var25 = _closure1_slot39;
                        var25 = var25.bind(var4)(var18, var24, var14);
                        var2 = var17;
                        if (!var25) {
                            _fun68874_ip = 161;
                            continue _fun68874
                        }
                        case 370: if (!var17) {
                            _fun68874_ip = 399;
                            continue _fun68874
                        }
                        case 373: var26 = var3.unreadByType;
                        var25 = _closure1_slot25;
                        var25 = var25.CHANNEL;
                        var26[var25] = var8;
                        var3.unreadChannelId = var20;
                        case 399: var2 = var17;
                        if (!var19) {
                            _fun68874_ip = 161;
                            continue _fun68874
                        }
                        case 408: if (var23) {
                            _fun68874_ip = 429;
                            continue _fun68874
                        }
                        case 411: var19 = var3.highImportanceMentionCount;
                        var19 = var19 + var24;
                        var3.highImportanceMentionCount = var19;
                        _fun68874_ip = 445;
                        continue _fun68874;
                        case 429: var19 = var3.lowImportanceMentionCount;
                        var19 = var19 + var24;
                        var3.lowImportanceMentionCount = var19;
                        case 445: var20 = var3.mentionCounts;
                        var19 = var18.id;
                        var18 = {};
                        var18.count = var24;
                        var18.isMentionLowImportance = var23;
                        var20[var19] = var18;
                        var2 = var17;
                        _fun68874_ip = 161;
                        continue _fun68874;
                    }
            case 480:
                var6 = _closure1_slot10;
                var2 = var6.getActiveJoinedThreadsForGuild;
                var20 = var2.bind(var6)(var5);
                var18 = var20;
                var25 = undefined;
                var24 = undefined;
                var23 = undefined;
                for (var15 in var18)
                    case 515: {
                        var9 = var25;
                        var6 = var24;
                        var2 = var23;
                        case 536: var10 = var15;
                        var13 = var20[var10];
                        var25 = var9;
                        var24 = var6;
                        var23 = var2;
                        var9 = var25;
                        var6 = var24;
                        var2 = var23;
                        ForInLoopInit(obj_props_register = 14, obj_register = 13, iter_index_register = 12, iter_size_register = 11);
                        if (var14 === undefined) {
                            _fun68874_ip = 515;
                            continue _fun68874
                        }
                        case 569: var25 = var9;
                        var24 = var6;
                        var23 = var2;
                        ForInLoopNextIter(next_value_register = 10, obj_props_register = 14, obj_register = 13, iter_index_register = 12, iter_size_register = 11);
                        if (var10 === undefined) {
                            _fun68874_ip = 515;
                            continue _fun68874
                        }
                        case 587: var25 = var10;
                        var24 = var3.unreadByType;
                        var23 = _closure1_slot25;
                        var23 = var23.CHANNEL;
                        var23 = var24[var23];
                        if (var23) {
                            _fun68874_ip = 631;
                            continue _fun68874
                        }
                        case 613: var26 = _closure1_slot19;
                        var24 = var26.hasUnread;
                        var24 = var24.bind(var26)(var25);
                        var23 = !var24;
                        case 631: if (var23) {
                            _fun68874_ip = 649;
                            continue _fun68874
                        }
                        case 634: var26 = _closure1_slot11;
                        var24 = var26.isMuted;
                        var23 = var24.bind(var26)(var25);
                        case 649: if (var23) {
                            _fun68874_ip = 655;
                            continue _fun68874
                        }
                        case 652: var23 = var22;
                        case 655: if (var23) {
                            _fun68874_ip = 684;
                            continue _fun68874
                        }
                        case 658: var24 = var3.unreadByType;
                        var23 = _closure1_slot25;
                        var23 = var23.CHANNEL;
                        var24[var23] = var8;
                        var3.unreadChannelId = var25;
                        case 684: var24 = _closure1_slot19;
                        var23 = var24.getMentionCount;
                        var24 = var23.bind(var24)(var25);
                        var26 = _closure1_slot19;
                        var23 = var26.getIsMentionLowImportance;
                        var23 = var23.bind(var26)(var25);
                        var9 = var25;
                        var6 = var24;
                        var2 = var23;
                        if (!(var24 > var21)) {
                            _fun68874_ip = 569;
                            continue _fun68874
                        }
                        case 730: if (var23) {
                            _fun68874_ip = 751;
                            continue _fun68874
                        }
                        case 733: var26 = var3.highImportanceMentionCount;
                        var26 = var26 + var24;
                        var3.highImportanceMentionCount = var26;
                        _fun68874_ip = 767;
                        continue _fun68874;
                        case 751: var26 = var3.lowImportanceMentionCount;
                        var26 = var26 + var24;
                        var3.lowImportanceMentionCount = var26;
                        case 767: var27 = var3.mentionCounts;
                        var26 = {};
                        var26.count = var24;
                        var26.isMentionLowImportance = var23;
                        var27[var25] = var26;
                        var9 = var25;
                        var6 = var24;
                        var2 = var23;
                        _fun68874_ip = 569;
                        continue _fun68874;
                    }
            case 803:
                var6 = var3.unreadByType;
                var2 = _closure1_slot25;
                var2 = var2.GUILD_EVENT;
                var2 = var6[var2];
                var2 = !var2;
                if (!var2) {
                    _fun68874_ip = 849;
                    continue _fun68874
                }
            case 829:
                var9 = _closure1_slot41;
                var6 = _closure1_slot25;
                var6 = var6.GUILD_EVENT;
                var2 = var9.bind(var4)(var5, var6);
            case 849:
                if (!var2) {
                    _fun68874_ip = 1007;
                    continue _fun68874
                }
            case 855:
                var6 = var3.unreadByType;
                var2 = _closure1_slot25;
                var2 = var2.GUILD_EVENT;
                var6[var2] = var8;
                _fun68874_ip = 1007;
                continue _fun68874;
            case 880:
                return var0;
            case 882:
                var2 = _closure1_slot16;
                var0 = var2.getMutablePrivateChannels;
                var12 = var0.bind(var2)();
                var10 = var12;
                var2 = false;
                var0 = 0;
                for (var6 in var10)
                    case 911: {
                        case 920: var16 = var6;
                        var13 = var12[var16];
                        var15 = _closure1_slot19;
                        var14 = var15.getMentionCount;
                        var16 = var14.bind(var15)(var16);
                        var14 = var16 > var0;
                        if (!var14) {
                            _fun68874_ip = 959;
                            continue _fun68874
                        }
                        case 949: var15 = _closure1_slot38;
                        var14 = var15.bind(var4)(var13, var16);
                        case 959: if (!var14) {
                            _fun68874_ip = 911;
                            continue _fun68874
                        }
                        case 962: var14 = var3.highImportanceMentionCount;
                        var14 = var14 + var16;
                        var3.highImportanceMentionCount = var14;
                        var15 = var3.mentionCounts;
                        var14 = var13.id;
                        var13 = {};
                        var13.count = var16;
                        var13.isMentionLowImportance = var2;
                        var15[var14] = var13;
                        _fun68874_ip = 911;
                        continue _fun68874;
                    }
            case 1007:
                var0 = _closure1_slot43;
                var0 = var0.bind(var4)(var3);
                var0 = _closure1_slot35;
                var2 = var0.bind(var4)(var5);
                var6 = var3.unread;
                var0 = var2.unread;
                var0 = var6 !== var0;
                if (var0) {
                    _fun68874_ip = 1060;
                    continue _fun68874
                }
            case 1044:
                var8 = var3.highImportanceMentionCount;
                var6 = var2.highImportanceMentionCount;
                var0 = var8 !== var6;
            case 1060:
                if (var0) {
                    _fun68874_ip = 1079;
                    continue _fun68874
                }
            case 1063:
                var8 = var3.lowImportanceMentionCount;
                var6 = var2.lowImportanceMentionCount;
                var0 = var8 !== var6;
            case 1079:
                if (!var0) {
                    _fun68874_ip = 1180;
                    continue _fun68874
                }
            case 1082:
                var8 = _closure1_slot28;
                var6 = var5;
                if (!(var7 == var5)) {
                    _fun68874_ip = 1097;
                    continue _fun68874
                }
            case 1093:
                var6 = _closure1_slot27;
            case 1097:
                var8[var6] = var3;
                if (!(var7 != var5)) {
                    _fun68874_ip = 1140;
                    continue _fun68874
                }
            case 1105:
                var6 = var3.unread;
                var8 = _closure1_slot29;
                if (var6) {
                    _fun68874_ip = 1130;
                    continue _fun68874
                }
            case 1118:
                var6 = var8.delete;
                var6 = var6.bind(var8)(var5);
                _fun68874_ip = 1140;
                continue _fun68874;
            case 1130:
                var6 = var8.add;
                var6 = var6.bind(var8)(var5);
            case 1140:
                var6 = _closure1_slot30;
                var6 = var6 + 1;
                _closure1_slot30 = var6;
                var6 = _closure1_slot36;
                if (!(var7 == var5)) {
                    _fun68874_ip = 1163;
                    continue _fun68874
                }
            case 1159:
                var5 = _closure1_slot27;
            case 1163:
                var5 = var6.bind(var4)(var5);
                var1 = _closure1_slot44;
                var1 = var1.bind(var4)(var3, var2);
                var0 = true;
            case 1180:
                return var0;
        }
    };
    var _closure1_slot49 = var0;
    var0 = function(arg0) { // Original name: handleOverlayInitialize, environment: var1
        _fun68875: for (var _fun68875_ip = 0;;) switch (_fun68875_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.guilds;
                var0 = {};
                _closure1_slot28 = var0;
                var3 = 0;
                _closure1_slot30 = var3;
                var0 = global;
                var0 = var0.Set;
                var1 = var0.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var0
                    }
                });
                var9 = var1;
                var0 = new var9[var0](var8);
                var0 = var0 instanceof Object ? var0 : var1;
                _closure1_slot29 = var0;
                var1 = _closure1_slot49;
                var0 = undefined;
                var2 = null;
                var1 = var1.bind(var0)(var2);
                var1 = var5.length;
                var6 = var3 < var1;
                if (!var6) {
                    _fun68875_ip = 116;
                    continue _fun68875
                }
            case 81:
                var6 = var5[var3];
                if (!(var2 != var6)) {
                    _fun68875_ip = 109;
                    continue _fun68875
                }
            case 89:
                var7 = _closure1_slot49;
                var6 = var6.properties;
                var6 = var6.id;
                var6 = var7.bind(var0)(var6);
            case 109:
                var3 = var3 + 1;
                if (var3 < var1) {
                    _fun68875_ip = 81;
                    continue _fun68875
                }
            case 116:
                return var0;
        }
    };
    var _closure1_slot50 = var0;
    var0 = function(arg0) { // Original name: handleConnectionOpen, environment: var1
        _fun68876: for (var _fun68876_ip = 0;;) switch (_fun68876_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.guilds;
                var1 = var1.readState;
                var3 = {};
                _closure1_slot28 = var3;
                var3 = 0;
                _closure1_slot30 = var3;
                var3 = global;
                var4 = var3.Set;
                var5 = var4.prototype;
                var5 = Object.create(var5, {
                    constructor: {
                        value: var4
                    }
                });
                var13 = var5;
                var4 = new var13[var4](var12);
                var4 = var4 instanceof Object ? var4 : var5;
                _closure1_slot29 = var4;
                var4 = var1.entries;
                var5 = var4.length;
                var4 = 500;
                var5 = var5 < var4;
                var3 = var3.Set;
                var4 = var3.prototype;
                var4 = Object.create(var4, {
                    constructor: {
                        value: var3
                    }
                });
                var13 = var4;
                var3 = new var13[var3](var12);
                var4 = var3 instanceof Object ? var3 : var4;
                var _closure2_slot0 = var4;
                if (!var5) {
                    _fun68876_ip = 141;
                    continue _fun68876
                }
            case 118:
                var3 = var1.entries;
                var1 = var3.forEach;
                var0 = function(arg0) { // Environment: var0
                    _fun68877: for (var _fun68877_ip = 0;;) switch (_fun68877_ip) {
                        case 0:
                            var3 = arg0;
                            var1 = var3.mention_count;
                            var0 = null;
                            var1 = var0 != var1;
                            if (!var1) {
                                _fun68877_ip = 30;
                                continue _fun68877
                            }
                        case 18:
                            var4 = var3.mention_count;
                            var2 = 0;
                            var1 = var4 > var2;
                        case 30:
                            if (!var1) {
                                _fun68877_ip = 143;
                                continue _fun68877
                            }
                        case 33:
                            var1 = var3.read_state_type;
                            if (!(var0 != var1)) {
                                _fun68877_ip = 90;
                                continue _fun68877
                            }
                        case 43:
                            var2 = var3.read_state_type;
                            var1 = _closure1_slot25;
                            var1 = var1.CHANNEL;
                            if (!(var2 !== var1)) {
                                _fun68877_ip = 90;
                                continue _fun68877
                            }
                        case 66:
                            var4 = _closure2_slot0;
                            var2 = var4.add;
                            var1 = var3.id;
                            var1 = var2.bind(var4)(var1);
                            _fun68877_ip = 143;
                            continue _fun68877;
                        case 90:
                            var2 = _closure2_slot0;
                            var1 = var2.add;
                            var5 = _closure1_slot16;
                            var4 = var5.getChannel;
                            var3 = var3.id;
                            var3 = var4.bind(var5)(var3);
                            var4 = var0 == var3;
                            var0 = undefined;
                            if (var4) {
                                _fun68877_ip = 138;
                                continue _fun68877
                            }
                        case 133:
                            var0 = var3.guild_id;
                        case 138:
                            var0 = var1.bind(var2)(var0);
                        case 143:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var1.bind(var3)(var0);
            case 141:
                var3 = _closure1_slot49;
                var0 = undefined;
                var1 = null;
                var1 = var3.bind(var0)(var1);
                var1 = _closure1_slot32;
                var3 = var1.bind(var0)(var2);
                var2 = var3.bind(var0)();
                var1 = var2.done;
                if (var1) {
                    _fun68876_ip = 230;
                    continue _fun68876
                }
            case 175:
                var9 = var2.value;
                var8 = _closure1_slot49;
                var7 = var9.id;
                var1 = undefined;
                if (!var5) {
                    _fun68876_ip = 209;
                    continue _fun68876
                }
            case 194:
                var10 = var4.has;
                var9 = var9.id;
                var1 = var10.bind(var4)(var9);
            case 209:
                var1 = var8.bind(var0)(var7, var1);
                var7 = var3.bind(var0)();
                var1 = var7.done;
                var2 = var7;
                if (!var1) {
                    _fun68876_ip = 175;
                    continue _fun68876
                }
            case 230:
                return var0;
        }
    };
    var _closure1_slot51 = var0;
    var0 = function() { // Original name: recomputeAllGuilds, environment: var1
        _fun68878: for (var _fun68878_ip = 0;;) switch (_fun68878_ip) {
            case 0:
                var0 = {};
                _closure1_slot28 = var0;
                var1 = global;
                var0 = var1.Set;
                var2 = var0.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var0
                    }
                });
                var7 = var2;
                var0 = new var7[var0](var6);
                var0 = var0 instanceof Object ? var0 : var2;
                _closure1_slot29 = var0;
                var3 = _closure1_slot49;
                var0 = undefined;
                var2 = null;
                var2 = var3.bind(var0)(var2);
                var3 = var1.Object;
                var2 = var3.values;
                var5 = _closure1_slot17;
                var1 = var5.getGuildIds;
                var1 = var1.bind(var5)();
                var3 = var2.bind(var3)(var1);
                var1 = var3.length;
                var2 = 0;
                var1 = var2 < var1;
                if (!var1) {
                    _fun68878_ip = 123;
                    continue _fun68878
                }
            case 98:
                var5 = _closure1_slot49;
                var1 = var3[var2];
                var1 = var5.bind(var0)(var1);
                var2 = var2 + 1;
                var1 = var3.length;
                if (var2 < var1) {
                    _fun68878_ip = 98;
                    continue _fun68878
                }
            case 123:
                return var0;
        }
    };
    var _closure1_slot52 = var0;
    var0 = function(arg0) { // Original name: handleGuildCreate, environment: var1
        var0 = arg0;
        var0 = var0.guild;
        var2 = _closure1_slot49;
        var1 = var0.id;
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        return var0;
    };
    var _closure1_slot53 = var0;
    var0 = function(arg0) { // Original name: handleGuildDelete, environment: var1
        _fun68880: for (var _fun68880_ip = 0;;) switch (_fun68880_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.guild;
                var3 = _closure1_slot28;
                var0 = var1.id;
                var3 = var3[var0];
                var0 = null;
                var0 = var0 != var3;
                if (!var0) {
                    _fun68880_ip = 78;
                    continue _fun68880
                }
            case 33:
                var4 = _closure1_slot28;
                var3 = var1.id;
                var3 = delete var4[var3];
                var4 = _closure1_slot29;
                var3 = var4.delete;
                var1 = var1.id;
                var1 = var3.bind(var4)(var1);
                var1 = _closure1_slot30;
                var1 = var1 + 1;
                _closure1_slot30 = var1;
                var0 = true;
            case 78:
                return var0;
        }
    };
    var _closure1_slot54 = var0;
    var0 = function(arg0) { // Original name: handleChannelDelete, environment: var1
        var0 = arg0;
        var1 = var0.channel;
        var0 = var1.id;
        var3 = var1.guild_id;
        var2 = _closure1_slot47;
        var1 = new Array(1);
        var1[0] = var0;
        var0 = undefined;
        var0 = var2.bind(var0)(var3, var1);
        return var0;
    };
    var _closure1_slot55 = var0;
    var0 = function() { // Original name: handleWindowFocus, environment: var1
        _fun68882: for (var _fun68882_ip = 0;;) switch (_fun68882_ip) {
            case 0:
                var3 = _closure1_slot16;
                var1 = var3.getChannel;
                var4 = _closure1_slot20;
                var0 = var4.getChannelId;
                var0 = var0.bind(var4)();
                var1 = var1.bind(var3)(var0);
                var0 = null;
                var0 = var0 != var1;
                if (!var0) {
                    _fun68882_ip = 75;
                    continue _fun68882
                }
            case 40:
                var4 = _closure1_slot47;
                var2 = var1.getGuildId;
                var3 = var2.bind(var1)();
                var1 = var1.id;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = undefined;
                var0 = var4.bind(var1)(var3, var2);
            case 75:
                return var0;
        }
    };
    var _closure1_slot56 = var0;
    var0 = function(arg0) { // Original name: handleGuildMemberUpdate, environment: var1
        _fun68883: for (var _fun68883_ip = 0;;) switch (_fun68883_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.user;
                var3 = var1.guildId;
                var2 = var0.id;
                var4 = _closure1_slot15;
                var0 = var4.getId;
                var0 = var0.bind(var4)();
                var0 = var2 === var0;
                if (!var0) {
                    _fun68883_ip = 53;
                    continue _fun68883
                }
            case 42:
                var2 = _closure1_slot49;
                var1 = undefined;
                var0 = var2.bind(var1)(var3);
            case 53:
                return var0;
        }
    };
    var _closure1_slot57 = var0;
    var0 = function(arg0) { // Original name: handleGenericUpdate, environment: var1
        _fun68884: for (var _fun68884_ip = 0;;) switch (_fun68884_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.channelId;
                var1 = _closure1_slot16;
                var0 = var1.getChannel;
                var1 = var0.bind(var1)(var3);
                var0 = null;
                var0 = var0 != var1;
                if (!var0) {
                    _fun68884_ip = 69;
                    continue _fun68884
                }
            case 34:
                var4 = _closure1_slot47;
                var2 = var1.getGuildId;
                var3 = var2.bind(var1)();
                var1 = var1.id;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = undefined;
                var0 = var4.bind(var1)(var3, var2);
            case 69:
                return var0;
        }
    };
    var _closure1_slot58 = var0;
    var0 = function(arg0) { // Original name: handleMessageCreate, environment: var1
        _fun68885: for (var _fun68885_ip = 0;;) switch (_fun68885_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.channelId;
                var2 = _closure1_slot16;
                var0 = var2.getChannel;
                var0 = var0.bind(var2)(var4);
                var3 = null;
                if (!(var3 != var0)) {
                    _fun68885_ip = 240;
                    continue _fun68885
                }
            case 34:
                var2 = var0.guild_id;
                if (!(var3 != var2)) {
                    _fun68885_ip = 199;
                    continue _fun68885
                }
            case 46:
                var5 = _closure1_slot35;
                var3 = var0.guild_id;
                var2 = undefined;
                var2 = var5.bind(var2)(var3);
                var3 = var0.isThread;
                var3 = var3.bind(var0)();
                if (var3) {
                    _fun68885_ip = 103;
                    continue _fun68885
                }
            case 75:
                var7 = _closure1_slot21;
                var6 = var7.isGuildOrCategoryOrChannelMuted;
                var5 = var0.guild_id;
                var3 = var0.id;
                var3 = var6.bind(var7)(var5, var3);
                _fun68885_ip = 152;
                continue _fun68885;
            case 103:
                var7 = _closure1_slot11;
                var6 = var7.hasJoined;
                var5 = var0.id;
                var5 = var6.bind(var7)(var5);
                var5 = !var5;
                if (var5) {
                    _fun68885_ip = 149;
                    continue _fun68885
                }
            case 129:
                var8 = _closure1_slot11;
                var7 = var8.isMuted;
                var6 = var0.id;
                var5 = var7.bind(var8)(var6);
            case 149:
                var3 = var5;
            case 152:
                if (var3) {
                    _fun68885_ip = 178;
                    continue _fun68885
                }
            case 155:
                var3 = var2.unreadByType;
                var2 = _closure1_slot25;
                var2 = var2.CHANNEL;
                var2 = var3[var2];
                if (!var2) {
                    _fun68885_ip = 199;
                    continue _fun68885
                }
            case 178:
                var3 = _closure1_slot19;
                var2 = var3.getMentionCount;
                var3 = var2.bind(var3)(var4);
                var2 = 0;
                if (!(var2 !== var3)) {
                    _fun68885_ip = 236;
                    continue _fun68885
                }
            case 199:
                var3 = _closure1_slot47;
                var1 = var0.getGuildId;
                var2 = var1.bind(var0)();
                var0 = var0.id;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = undefined;
                var0 = var3.bind(var0)(var2, var1);
                return var0;
            case 236:
                var0 = false;
                return var0;
            case 240:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot59 = var0;
    var0 = function(arg0) { // Original name: handleChannelSelect, environment: var1
        _fun68886: for (var _fun68886_ip = 0;;) switch (_fun68886_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.channelId;
                var5 = var0.guildId;
                var0 = _closure1_slot23;
                var0 = var5 !== var0;
                if (!var0) {
                    _fun68886_ip = 59;
                    continue _fun68886
                }
            case 27:
                var1 = null;
                var1 = var1 != var2;
                if (!var1) {
                    _fun68886_ip = 56;
                    continue _fun68886
                }
            case 36:
                var4 = _closure1_slot47;
                var3 = new Array(1);
                var3[0] = var2;
                var2 = undefined;
                var1 = var4.bind(var2)(var5, var3);
            case 56:
                var0 = var1;
            case 59:
                return var0;
        }
    };
    var _closure1_slot60 = var0;
    var0 = function(arg0) { // Original name: handleChannelUpdate, environment: var1
        var0 = arg0;
        var0 = var0.channel;
        var3 = _closure1_slot47;
        var1 = var0.getGuildId;
        var2 = var1.bind(var0)();
        var0 = var0.id;
        var1 = new Array(1);
        var1[0] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var _closure1_slot61 = var0;
    var0 = function(arg0) { // Original name: handleChannelUpdates, environment: var1
        var1 = arg0;
        var3 = var1.channels;
        var4 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 24;
        var1 = var2[var1];
        var2 = undefined;
        var1 = var4.bind(var2)(var1);
        var3 = var1.bind(var2)(var3);
        var2 = var3.groupBy;
        var1 = function(arg0) { // Environment: var0
            var1 = arg0;
            var0 = var1.getGuildId;
            var0 = var0.bind(var1)();
            return var0;
        };
        var3 = var2.bind(var3)(var1);
        var2 = var3.reduce;
        var1 = function(arg0, arg1, arg2) { // Environment: var0
            _fun68890: for (var _fun68890_ip = 0;;) switch (_fun68890_ip) {
                case 0:
                    var1 = arg0;
                    var3 = arg1;
                    var4 = _closure1_slot47;
                    var2 = var3.map;
                    var0 = function(arg0) { // Environment: var0
                        var0 = arg0;
                        var0 = var0.id;
                        return var0;
                    };
                    var3 = var2.bind(var3)(var0);
                    var2 = undefined;
                    var0 = arg2;
                    var0 = var4.bind(var2)(var0, var3);
                    if (var0) {
                        _fun68890_ip = 49;
                        continue _fun68890
                    }
                case 46:
                    var0 = var1;
                case 49:
                    return var0;
            }
        };
        var0 = false;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot62 = var0;
    var0 = function(arg0) { // Original name: handleBulkAck, environment: var1
        var1 = arg0;
        var3 = var1.channels;
        var4 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 24;
        var1 = var2[var1];
        var2 = undefined;
        var1 = var4.bind(var2)(var1);
        var3 = var1.bind(var2)(var3);
        var2 = var3.map;
        var1 = function(arg0) { // Environment: var0
            var0 = arg0;
            var0 = var0.channelId;
            return var0;
        };
        var3 = var2.bind(var3)(var1);
        var2 = var3.filter;
        var1 = function(arg0) { // Environment: var0
            var2 = _closure1_slot16;
            var1 = var2.getChannel;
            var0 = arg0;
            var1 = var1.bind(var2)(var0);
            var0 = null;
            var0 = var0 != var1;
            return var0;
        };
        var3 = var2.bind(var3)(var1);
        var2 = var3.groupBy;
        var1 = function(arg0) { // Environment: var0
            _fun68895: for (var _fun68895_ip = 0;;) switch (_fun68895_ip) {
                case 0:
                    var2 = _closure1_slot16;
                    var1 = var2.getChannel;
                    var0 = arg0;
                    var2 = var1.bind(var2)(var0);
                    var0 = null;
                    var1 = var0 == var2;
                    var0 = undefined;
                    if (var1) {
                        _fun68895_ip = 41;
                        continue _fun68895
                    }
                case 31:
                    var1 = var2.getGuildId;
                    var0 = var1.bind(var2)();
                case 41:
                    return var0;
            }
        };
        var3 = var2.bind(var3)(var1);
        var2 = var3.reduce;
        var1 = function(arg0, arg1, arg2) { // Environment: var0
            _fun68896: for (var _fun68896_ip = 0;;) switch (_fun68896_ip) {
                case 0:
                    var1 = arg0;
                    var4 = _closure1_slot47;
                    var3 = undefined;
                    var2 = arg2;
                    var0 = arg1;
                    var0 = var4.bind(var3)(var2, var0);
                    if (var0) {
                        _fun68896_ip = 30;
                        continue _fun68896
                    }
                case 27:
                    var0 = var1;
                case 30:
                    return var0;
            }
        };
        var0 = false;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot63 = var0;
    var0 = function(arg0) { // Original name: handleThreadUpdate, environment: var1
        var0 = arg0;
        var0 = var0.channel;
        var3 = _closure1_slot47;
        var1 = var0.getGuildId;
        var2 = var1.bind(var0)();
        var4 = var0.id;
        var1 = new Array(2);
        var1[0] = var4;
        var0 = var0.parent_id;
        var1[1] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var _closure1_slot64 = var0;
    var0 = function(arg0) { // Original name: handleGuildEventUpdate, environment: var1
        var0 = arg0;
        var1 = var0.guildScheduledEvent;
        var3 = _closure1_slot48;
        var2 = var1.guild_id;
        var0 = _closure1_slot25;
        var1 = var0.GUILD_EVENT;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var _closure1_slot65 = var0;
    var0 = function(arg0) { // Original name: handleGuildEventDelete, environment: var1
        var0 = arg0;
        var1 = var0.guildScheduledEvent;
        var3 = _closure1_slot48;
        var2 = var1.guild_id;
        var0 = _closure1_slot25;
        var1 = var0.GUILD_EVENT;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var _closure1_slot66 = var0;
    var0 = function(arg0) { // Original name: handleGuildFeatureAck, environment: var1
        var0 = arg0;
        var3 = var0.id;
        var2 = var0.ackType;
        var1 = _closure1_slot48;
        var0 = undefined;
        var0 = var1.bind(var0)(var3, var2);
        return var0;
    };
    var _closure1_slot67 = var0;
    var0 = function(arg0) { // Original name: handleThreadMemberUpdate, environment: var1
        var1 = arg0;
        var0 = var1.id;
        var3 = var1.guildId;
        var2 = _closure1_slot47;
        var1 = new Array(1);
        var1[0] = var0;
        var0 = undefined;
        var0 = var2.bind(var0)(var3, var1);
        return var0;
    };
    var _closure1_slot68 = var0;
    var0 = function(arg0) { // Original name: handleThreadMembersUpdate, environment: var1
        _fun68902: for (var _fun68902_ip = 0;;) switch (_fun68902_ip) {
            case 0:
                var1 = arg0;
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 25;
                var0 = var4[var0];
                var4 = undefined;
                var3 = var3.bind(var4)(var0);
                var0 = var3.doesThreadMembersActionAffectMe;
                var0 = var0.bind(var3)(var1);
                if (!var0) {
                    _fun68902_ip = 70;
                    continue _fun68902
                }
            case 42:
                var3 = _closure1_slot47;
                var2 = var1.guildId;
                var5 = var1.id;
                var1 = new Array(1);
                var1[0] = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 70:
                return var0;
        }
    };
    var _closure1_slot69 = var0;
    var0 = function(arg0) { // Original name: handleThreadListSync, environment: var1
        var1 = arg0;
        var5 = var1.threads;
        var3 = var1.guildId;
        var2 = _closure1_slot47;
        var4 = var5.filter;
        var1 = function(arg0) { // Environment: var0
            var2 = _closure1_slot11;
            var1 = var2.hasJoined;
            var0 = arg0;
            var0 = var0.id;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4 = var4.bind(var5)(var1);
        var1 = var4.map;
        var0 = function(arg0) { // Environment: var0
            var0 = arg0;
            var0 = var0.id;
            return var0;
        };
        var1 = var1.bind(var4)(var0);
        var0 = undefined;
        var0 = var2.bind(var0)(var3, var1);
        return var0;
    };
    var _closure1_slot70 = var0;
    var0 = function(arg0) { // Original name: handlePassiveUpdateV2, environment: var1
        _fun68906: for (var _fun68906_ip = 0;;) switch (_fun68906_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.channels;
                var2 = var0.length;
                var0 = 0;
                var0 = var2 > var0;
                if (!var0) {
                    _fun68906_ip = 68;
                    continue _fun68906
                }
            case 23:
                var4 = _closure1_slot47;
                var3 = var1.guildId;
                var5 = var1.channels;
                var2 = var5.map;
                var1 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var0 = var0.id;
                    return var0;
                };
                var2 = var2.bind(var5)(var1);
                var1 = undefined;
                var0 = var4.bind(var1)(var3, var2);
            case 68:
                return var0;
        }
    };
    var _closure1_slot71 = var0;
    var0 = function(arg0) { // Original name: handleMarkGuildAsRead, environment: var1
        var0 = arg0;
        var2 = var0.guildId;
        var1 = _closure1_slot49;
        var0 = undefined;
        var0 = var1.bind(var0)(var2);
        return var0;
    };
    var _closure1_slot72 = var0;
    var0 = function(arg0) { // Original name: handleGuildUpdate, environment: var1
        var0 = arg0;
        var2 = var0.guildId;
        var1 = _closure1_slot49;
        var0 = undefined;
        var0 = var1.bind(var0)(var2);
        return var0;
    };
    var _closure1_slot73 = var0;
    var0 = function(arg0) { // Original name: handleUserGuildSettingsFullUpdate, environment: var1
        var1 = arg0;
        var4 = var1.userGuildSettings;
        var1 = global;
        var3 = var1.Set;
        var2 = var4.map;
        var1 = function(arg0) { // Environment: var0
            _fun68911: for (var _fun68911_ip = 0;;) switch (_fun68911_ip) {
                case 0:
                    var0 = arg0;
                    var0 = var0.guild_id;
                    var1 = null;
                    if (!(var1 == var0)) {
                        _fun68911_ip = 21;
                        continue _fun68911
                    }
                case 14:
                    var0 = _closure1_slot27;
                case 21:
                    return var0;
            }
        };
        var6 = var2.bind(var4)(var1);
        var2 = var3.prototype;
        var2 = Object.create(var2, {
            constructor: {
                value: var3
            }
        });
        var7 = var2;
        var1 = new var7[var3](var6, var5);
        var1 = var1 instanceof Object ? var1 : var2;
        var _closure2_slot0 = var1;
        var4 = _closure1_slot1;
        var3 = _closure1_slot2;
        var2 = 23;
        var3 = var3[var2];
        var2 = undefined;
        var3 = var4.bind(var2)(var3);
        var2 = var3.keys;
        var1 = _closure1_slot28;
        var3 = var2.bind(var3)(var1);
        var2 = var3.reduce;
        var1 = function(arg0, arg1) { // Environment: var0
            _fun68912: for (var _fun68912_ip = 0;;) switch (_fun68912_ip) {
                case 0:
                    var1 = arg0;
                    var4 = arg1;
                    var2 = _closure2_slot0;
                    var0 = var2.has;
                    var0 = var0.bind(var2)(var4);
                    if (!var0) {
                        _fun68912_ip = 40;
                        continue _fun68912
                    }
                case 26:
                    var3 = _closure1_slot49;
                    var2 = undefined;
                    var0 = var3.bind(var2)(var4);
                case 40:
                    if (var0) {
                        _fun68912_ip = 46;
                        continue _fun68912
                    }
                case 43:
                    var0 = var1;
                case 46:
                    return var0;
            }
        };
        var0 = false;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot74 = var0;
    var0 = function() { // Original name: handleClearNotifCenterGuildMentions, environment: var1
        _fun68913: for (var _fun68913_ip = 0;;) switch (_fun68913_ip) {
            case 0:
                var5 = _closure1_slot28;
                var0 = 0;
                for (var1 in var5)
                    case 17: {
                        case 26: var8 = var1;
                        var7 = _closure1_slot28;
                        var7 = var7[var8];
                        var7.ncMentionCount = var0;
                        _fun68913_ip = 17;
                        continue _fun68913;
                    }
            case 45:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot75 = var0;
    var0 = function(arg0) { // Original name: handleUserGuildSettingsUpdate, environment: var1
        var0 = arg0;
        var2 = var0.guildId;
        var1 = _closure1_slot49;
        var0 = undefined;
        var0 = var1.bind(var0)(var2);
        return var0;
    };
    var _closure1_slot76 = var0;
    var0 = function(arg0) { // Original name: handleRecentMentionsSuccess, environment: var1
        var1 = arg0;
        var4 = var1.messages;
        var1 = global;
        var3 = var1.Set;
        var2 = var4.map;
        var1 = function(arg0) { // Environment: var0
            var0 = arg0;
            var0 = var0.channel_id;
            return var0;
        };
        var5 = var2.bind(var4)(var1);
        var2 = var3.prototype;
        var2 = Object.create(var2, {
            constructor: {
                value: var3
            }
        });
        var6 = var2;
        var1 = new var6[var3](var5, var4);
        var2 = var1 instanceof Object ? var1 : var2;
        var1 = var2.forEach;
        var0 = function(arg0) { // Environment: var0
            _fun68917: for (var _fun68917_ip = 0;;) switch (_fun68917_ip) {
                case 0:
                    var0 = arg0;
                    var3 = _closure1_slot16;
                    var2 = var3.getChannel;
                    var2 = var2.bind(var3)(var0);
                    var3 = null;
                    if (!(var3 != var2)) {
                        _fun68917_ip = 56;
                        continue _fun68917
                    }
                case 26:
                    var3 = _closure1_slot47;
                    var1 = var2.getGuildId;
                    var2 = var1.bind(var2)();
                    var1 = new Array(1);
                    var1[0] = var0;
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2, var1);
                case 56:
                    var0 = undefined;
                    return var0;
            }
        };
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var _closure1_slot77 = var0;
    var8 = global;
    var7 = var8.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var7 = 0;
    var3 = var5[var7];
    var0 = undefined;
    var3 = var10.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var6 = var5[var3];
    var6 = var10.bind(var0)(var6);
    var _closure1_slot4 = var6;
    var6 = 2;
    var6 = var5[var6];
    var6 = var10.bind(var0)(var6);
    var _closure1_slot5 = var6;
    var6 = 3;
    var6 = var5[var6];
    var6 = var10.bind(var0)(var6);
    var _closure1_slot6 = var6;
    var6 = 4;
    var6 = var5[var6];
    var6 = var10.bind(var0)(var6);
    var _closure1_slot7 = var6;
    var6 = 5;
    var6 = var5[var6];
    var6 = var10.bind(var0)(var6);
    var _closure1_slot8 = var6;
    var6 = 6;
    var6 = var5[var6];
    var6 = var10.bind(var0)(var6);
    var _closure1_slot9 = var6;
    var6 = 7;
    var6 = var5[var6];
    var6 = var10.bind(var0)(var6);
    var _closure1_slot10 = var6;
    var6 = 8;
    var6 = var5[var6];
    var6 = var10.bind(var0)(var6);
    var _closure1_slot11 = var6;
    var6 = 9;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var9 = var6.getBasicAccessPermissions;
    var _closure1_slot12 = var9;
    var9 = var6.isGuildVocalChannelType;
    var _closure1_slot13 = var9;
    var6 = var6.isThread;
    var _closure1_slot14 = var6;
    var6 = 10;
    var6 = var5[var6];
    var6 = var10.bind(var0)(var6);
    var _closure1_slot15 = var6;
    var6 = 11;
    var6 = var5[var6];
    var6 = var10.bind(var0)(var6);
    var _closure1_slot16 = var6;
    var6 = 12;
    var6 = var5[var6];
    var6 = var10.bind(var0)(var6);
    var _closure1_slot17 = var6;
    var6 = 13;
    var6 = var5[var6];
    var6 = var10.bind(var0)(var6);
    var9 = 14;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var _closure1_slot18 = var9;
    var9 = 15;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var _closure1_slot19 = var9;
    var9 = 16;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var _closure1_slot20 = var9;
    var9 = 17;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var _closure1_slot21 = var9;
    var9 = 18;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var _closure1_slot22 = var9;
    var9 = 19;
    var9 = var5[var9];
    var9 = var4.bind(var0)(var9);
    var10 = var9.FAVORITES;
    var _closure1_slot23 = var10;
    var9 = var9.NULL_STRING_GUILD_ID;
    var10 = 20;
    var10 = var5[var10];
    var10 = var4.bind(var0)(var10);
    var10 = var10.ChannelFlags;
    var _closure1_slot24 = var10;
    var10 = 21;
    var10 = var5[var10];
    var10 = var4.bind(var0)(var10);
    var11 = var10.ReadStateTypes;
    var _closure1_slot25 = var11;
    var10 = var10.UnreadSetting;
    var _closure1_slot26 = var10;
    var _closure1_slot27 = var9;
    var9 = {};
    var _closure1_slot28 = var9;
    var8 = var8.Set;
    var9 = var8.prototype;
    var9 = Object.create(var9, {
        constructor: {
            value: var8
        }
    });
    var15 = var9;
    var8 = new var15[var8](var14);
    var8 = var8 instanceof Object ? var8 : var9;
    var _closure1_slot29 = var8;
    var _closure1_slot30 = var7;
    var1 = function(arg0) { // Environment: var1
        var3 = function() { // Original name: GuildReadStateStore, environment: var5
            _fun68919: for (var _fun68919_ip = 0;;) switch (_fun68919_ip) {
                case 0:
                    var4 = this;
                    var0 = _closure1_slot3;
                    var2 = _closure2_slot0;
                    var3 = undefined;
                    var0 = var0.bind(var3)(var4, var2);
                    var0 = {};
                    var6 = _closure1_slot51;
                    var0.CONNECTION_OPEN = var6;
                    var6 = _closure1_slot50;
                    var0.OVERLAY_INITIALIZE = var6;
                    var6 = function() { // Original name: CACHE_LOADED_LAZY, environment: var1
                        var1 = _closure3_slot0;
                        var0 = var1.loadCache;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    var0.CACHE_LOADED_LAZY = var6;
                    var6 = _closure1_slot53;
                    var0.GUILD_CREATE = var6;
                    var6 = _closure1_slot54;
                    var0.GUILD_DELETE = var6;
                    var6 = _closure1_slot59;
                    var0.MESSAGE_CREATE = var6;
                    var6 = _closure1_slot58;
                    var0.MESSAGE_ACK = var6;
                    var7 = _closure1_slot63;
                    var0.BULK_ACK = var7;
                    var0.UPDATE_CHANNEL_DIMENSIONS = var6;
                    var7 = _closure1_slot60;
                    var0.CHANNEL_SELECT = var7;
                    var7 = _closure1_slot55;
                    var0.CHANNEL_DELETE = var7;
                    var7 = _closure1_slot56;
                    var0.WINDOW_FOCUS = var7;
                    var7 = _closure1_slot72;
                    var0.GUILD_ACK = var7;
                    var7 = _closure1_slot73;
                    var0.GUILD_ROLE_CREATE = var7;
                    var0.GUILD_ROLE_DELETE = var7;
                    var0.GUILD_ROLE_UPDATE = var7;
                    var7 = _closure1_slot61;
                    var0.CHANNEL_CREATE = var7;
                    var7 = _closure1_slot62;
                    var0.CHANNEL_UPDATES = var7;
                    var7 = _closure1_slot64;
                    var0.THREAD_CREATE = var7;
                    var0.THREAD_UPDATE = var7;
                    var0.THREAD_DELETE = var7;
                    var7 = _closure1_slot70;
                    var0.THREAD_LIST_SYNC = var7;
                    var7 = _closure1_slot68;
                    var0.THREAD_MEMBER_UPDATE = var7;
                    var7 = _closure1_slot69;
                    var0.THREAD_MEMBERS_UPDATE = var7;
                    var7 = _closure1_slot71;
                    var0.PASSIVE_UPDATE_V2 = var7;
                    var7 = _closure1_slot57;
                    var0.GUILD_MEMBER_UPDATE = var7;
                    var7 = _closure1_slot74;
                    var0.USER_GUILD_SETTINGS_FULL_UPDATE = var7;
                    var7 = _closure1_slot76;
                    var0.USER_GUILD_SETTINGS_CHANNEL_UPDATE = var7;
                    var0.USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK = var7;
                    var0.USER_GUILD_SETTINGS_GUILD_UPDATE = var7;
                    var0.USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE = var7;
                    var7 = _closure1_slot67;
                    var0.GUILD_FEATURE_ACK = var7;
                    var7 = _closure1_slot65;
                    var0.GUILD_SCHEDULED_EVENT_CREATE = var7;
                    var0.GUILD_SCHEDULED_EVENT_UPDATE = var7;
                    var7 = _closure1_slot66;
                    var0.GUILD_SCHEDULED_EVENT_DELETE = var7;
                    var0.CHANNEL_RTC_UPDATE_CHAT_OPEN = var6;
                    var0.LOAD_MESSAGES_SUCCESS = var6;
                    var0.CHANNEL_ACK = var6;
                    var0.CHANNEL_LOCAL_ACK = var6;
                    var7 = _closure1_slot52;
                    var0.NOTIFICATION_SETTINGS_UPDATE = var7;
                    var0.RECOMPUTE_READ_STATES = var7;
                    var0.VOICE_CHANNEL_SELECT = var6;
                    var0.ENABLE_AUTOMATIC_ACK = var6;
                    var0.RESORT_THREADS = var6;
                    var7 = _closure1_slot75;
                    var0.NOTIFICATION_CENTER_CLEAR_GUILD_MENTIONS = var7;
                    var0.TRY_ACK = var6;
                    var6 = _closure1_slot77;
                    var0.LOAD_RECENT_MENTIONS_SUCCESS = var6;
                    var9 = new Array(1);
                    var9[0] = var0;
                    var0 = _closure1_slot6;
                    var8 = var0.bind(var3)(var2);
                    var2 = _closure1_slot5;
                    var0 = _closure1_slot31;
                    var0 = var0.bind(var3)();
                    if (var0) {
                        _fun68919_ip = 432;
                        continue _fun68919
                    }
                case 419:
                    var0 = var8.apply;
                    var0 = var0.bind(var8)(var4, var9);
                    _fun68919_ip = 466;
                    continue _fun68919;
                case 432:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot6;
                    var5 = var5.bind(var3)(var4);
                    var5 = var5.constructor;
                    var0 = var6.bind(var7)(var8, var9, var5);
                case 466:
                    var0 = var2.bind(var3)(var4, var0);
                    var _closure3_slot0 = var0;
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
            var11 = this;
            var10 = var11.waitFor;
            var21 = _closure1_slot16;
            var20 = _closure1_slot20;
            var19 = _closure1_slot19;
            var18 = _closure1_slot18;
            var17 = _closure1_slot15;
            var16 = _closure1_slot22;
            var15 = _closure1_slot21;
            var14 = _closure1_slot10;
            var13 = _closure1_slot11;
            var12 = _closure1_slot9;
            var22 = var11;
            var0 = var22[var10](var21, var20, var19, var18, var17, var16, var15, var14, var13, var12, var11);
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(16);
        var0[0] = var4;
        var4 = {};
        var6 = 'loadCache';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            _fun68922: for (var _fun68922_ip = 0;;) switch (_fun68922_ip) {
                case 0:
                    var2 = this;
                    var1 = var2.readSnapshot;
                    var0 = _closure2_slot0;
                    var0 = var0.LATEST_SNAPSHOT_VERSION;
                    var0 = var1.bind(var2)(var0);
                    var1 = null;
                    if (!(var1 != var0)) {
                        _fun68922_ip = 84;
                        continue _fun68922
                    }
                case 33:
                    var2 = var0.guilds;
                    _closure1_slot28 = var2;
                    var2 = global;
                    var3 = var2.Set;
                    var4 = var0.unreadGuilds;
                    var2 = var3.prototype;
                    var2 = Object.create(var2, {
                        constructor: {
                            value: var3
                        }
                    });
                    var5 = var2;
                    var0 = new var5[var3](var4, var3);
                    var0 = var0 instanceof Object ? var0 : var2;
                    _closure1_slot29 = var0;
                case 84:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'takeSnapshot';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = {};
            var1 = _closure2_slot0;
            var1 = var1.LATEST_SNAPSHOT_VERSION;
            var0.version = var1;
            var1 = {};
            var3 = _closure1_slot28;
            var1.guilds = var3;
            var3 = global;
            var4 = var3.Array;
            var3 = var4.from;
            var2 = _closure1_slot29;
            var2 = var3.bind(var4)(var2);
            var1.unreadGuilds = var2;
            var0.data = var1;
            return var0;
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'hasAnyUnread';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot29;
            var1 = var0.size;
            var0 = 0;
            var0 = var1 > var0;
            return var0;
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'getStoreChangeSentinel';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot30;
            return var0;
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'getMutableUnreadGuilds';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot29;
            return var0;
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'getMutableGuildStates';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot28;
            return var0;
        };
        var4.value = var6;
        var0[6] = var4;
        var4 = {};
        var6 = 'hasUnread';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            var2 = _closure1_slot29;
            var1 = var2.has;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[7] = var4;
        var4 = {};
        var6 = 'getMentionCount';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            var2 = _closure1_slot35;
            var1 = undefined;
            var0 = arg0;
            var0 = var2.bind(var1)(var0);
            var1 = var0.highImportanceMentionCount;
            var0 = var0.lowImportanceMentionCount;
            var0 = var1 + var0;
            return var0;
        };
        var4.value = var6;
        var0[8] = var4;
        var4 = {};
        var6 = 'getIsMentionLowImportance';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            var2 = _closure1_slot35;
            var1 = undefined;
            var0 = arg0;
            var0 = var2.bind(var1)(var0);
            var1 = var0.highImportanceMentionCount;
            var0 = 0;
            var0 = var0 === var1;
            return var0;
        };
        var4.value = var6;
        var0[9] = var4;
        var4 = {};
        var6 = 'getGuildHasUnreadIgnoreMuted';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun68931: for (var _fun68931_ip = 0;;) switch (_fun68931_ip) {
                case 0:
                    var3 = arg0;
                    var2 = _closure1_slot16;
                    var1 = var2.getMutableGuildChannelsForGuild;
                    var9 = var1.bind(var2)(var3);
                    var7 = var9;
                    var2 = 0;
                    var14 = null;
                    for (var4 in var7)
                        case 36: {
                            case 45: var11 = var4;
                            var13 = var9[var11];
                            if (var14 == var13) {
                                _fun68931_ip = 36;
                                continue _fun68931
                            }
                            case 56: var1 = var13.isGuildVocal;
                            var1 = var1.bind(var13)();
                            if (!var1) {
                                _fun68931_ip = 88;
                                continue _fun68931
                            }
                            case 69: var10 = _closure1_slot19;
                            var1 = var10.getMentionCount;
                            var1 = var1.bind(var10)(var11);
                            if (var2 === var1) {
                                _fun68931_ip = 36;
                                continue _fun68931
                            }
                            case 88: var12 = _closure1_slot18;
                            var10 = var12.can;
                            var1 = var13.accessPermissions;
                            var1 = var10.bind(var12)(var1, var13);
                            if (!var1) {
                                _fun68931_ip = 36;
                                continue _fun68931
                            }
                            case 113: var10 = _closure1_slot19;
                            var1 = var10.hasUnreadOrMentions;
                            var1 = var1.bind(var10)(var11);
                            if (!var1) {
                                _fun68931_ip = 36;
                                continue _fun68931
                            }
                            case 131: var1 = true;
                            return var1;
                        }
                case 135:
                    var2 = _closure1_slot10;
                    var1 = var2.getActiveJoinedThreadsForGuild;
                    var13 = var1.bind(var2)(var3);
                    var11 = var13;
                    for (var8 in var11)
                        case 161: {
                            case 170: var1 = var8;
                            var4 = _closure1_slot16;
                            var2 = var4.getChannel;
                            var2 = var2.bind(var4)(var1);
                            if (var14 == var2) {
                                _fun68931_ip = 161;
                                continue _fun68931
                            }
                            case 191: var6 = var13[var1];
                            ForInLoopInit(obj_props_register = 7, obj_register = 6, iter_index_register = 5, iter_size_register = 4);
                            if (var7 === undefined) {
                                _fun68931_ip = 161;
                                continue _fun68931
                            }
                            case 203: ForInLoopNextIter(next_value_register = 2, obj_props_register = 7, obj_register = 6, iter_index_register = 5, iter_size_register = 4);
                            if (var2 === undefined) {
                                _fun68931_ip = 161;
                                continue _fun68931
                            }
                            case 212: var16 = var2;
                            var15 = _closure1_slot19;
                            var1 = var15.hasUnreadOrMentions;
                            var1 = var1.bind(var15)(var16);
                            if (!var1) {
                                _fun68931_ip = 203;
                                continue _fun68931
                            }
                            case 233: var1 = true;
                            return var1;
                        }
                case 237:
                    var2 = _closure1_slot19;
                    var1 = var2.hasUnreadOrMentions;
                    var0 = _closure1_slot25;
                    var0 = var0.GUILD_EVENT;
                    var0 = var1.bind(var2)(var3, var0);
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
            }
        };
        var4.value = var6;
        var0[10] = var4;
        var4 = {};
        var6 = 'getTotalMentionCount';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun68932: for (var _fun68932_ip = 0;;) switch (_fun68932_ip) {
                case 0:
                    var7 = _closure1_slot28;
                    var2 = true;
                    var1 = arg0;
                    var2 = var2 === var1;
                    var1 = 0;
                    var0 = 0;
                    for (var3 in var7)
                        case 28: {
                            var10 = var1;
                            var0 = var10;
                            case 43: var13 = var3;
                            var9 = _closure1_slot28;
                            var9 = var9[var13];
                            var11 = var2;
                            if (!var11) {
                                _fun68932_ip = 68;
                                continue _fun68932
                            }
                            case 60: var12 = _closure1_slot27;
                            var11 = var13 === var12;
                            case 68: var1 = var10;
                            if (var11) {
                                _fun68932_ip = 28;
                                continue _fun68932
                            }
                            case 74: var9 = var9.highImportanceMentionCount;
                            var1 = var10 + var9;
                            _fun68932_ip = 28;
                            continue _fun68932;
                        }
                case 86:
                    return var0;
            }
        };
        var4.value = var6;
        var0[11] = var4;
        var4 = {};
        var6 = 'getTotalNotificationsMentionCount';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun68933: for (var _fun68933_ip = 0;;) switch (_fun68933_ip) {
                case 0:
                    var7 = _closure1_slot28;
                    var2 = true;
                    var1 = arg0;
                    var2 = var2 === var1;
                    var1 = 0;
                    var0 = 0;
                    for (var3 in var7)
                        case 28: {
                            var10 = var1;
                            var0 = var10;
                            case 43: var13 = var3;
                            var9 = _closure1_slot28;
                            var9 = var9[var13];
                            var11 = var2;
                            if (!var11) {
                                _fun68933_ip = 68;
                                continue _fun68933
                            }
                            case 60: var12 = _closure1_slot27;
                            var11 = var13 === var12;
                            case 68: var1 = var10;
                            if (var11) {
                                _fun68933_ip = 28;
                                continue _fun68933
                            }
                            case 74: var9 = var9.ncMentionCount;
                            var1 = var10 + var9;
                            _fun68933_ip = 28;
                            continue _fun68933;
                        }
                case 86:
                    return var0;
            }
        };
        var4.value = var6;
        var0[12] = var4;
        var4 = {};
        var6 = 'getPrivateChannelMentionCount';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            _fun68934: for (var _fun68934_ip = 0;;) switch (_fun68934_ip) {
                case 0:
                    var1 = _closure1_slot28;
                    var0 = _closure1_slot27;
                    var2 = var1[var0];
                    var0 = null;
                    var3 = var0 == var2;
                    var1 = undefined;
                    if (var3) {
                        _fun68934_ip = 32;
                        continue _fun68934
                    }
                case 26:
                    var1 = var2.highImportanceMentionCount;
                case 32:
                    var2 = var0 != var1;
                    var0 = 0;
                    if (!var2) {
                        _fun68934_ip = 44;
                        continue _fun68934
                    }
                case 41:
                    var0 = var1;
                case 44:
                    return var0;
            }
        };
        var4.value = var6;
        var0[13] = var4;
        var4 = {};
        var6 = 'getMentionCountForPrivateChannel';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun68935: for (var _fun68935_ip = 0;;) switch (_fun68935_ip) {
                case 0:
                    var1 = _closure1_slot28;
                    var0 = _closure1_slot27;
                    var2 = var1[var0];
                    var0 = null;
                    var3 = var0 == var2;
                    var1 = undefined;
                    if (var3) {
                        _fun68935_ip = 39;
                        continue _fun68935
                    }
                case 26:
                    var3 = var2.mentionCounts;
                    var2 = arg0;
                    var1 = var3[var2];
                case 39:
                    var2 = var0 != var1;
                    var0 = 0;
                    if (!var2) {
                        _fun68935_ip = 51;
                        continue _fun68935
                    }
                case 48:
                    var0 = var1;
                case 51:
                    return var0;
            }
        };
        var4.value = var6;
        var0[14] = var4;
        var4 = {};
        var6 = 'getGuildChangeSentinel';
        var4.key = var6;
        var5 = function(arg0) { // Original name: value, environment: var5
            var2 = _closure1_slot35;
            var1 = undefined;
            var0 = arg0;
            var0 = var2.bind(var1)(var0);
            var0 = var0.sentinel;
            return var0;
        };
        var4.value = var5;
        var0[15] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var1 = var1.bind(var0)(var6);
    var6 = 'GuildReadStateStore';
    var1.displayName = var6;
    var1.LATEST_SNAPSHOT_VERSION = var3;
    var3 = var1.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var1
        }
    });
    var15 = var3;
    var1 = new var15[var1](var14);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 26;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'stores/GuildReadStateStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 3930, 8586, 4513, 3052, 1376, 1216, 1372, 1410, 1218, 3050, 3907, 1661, 4266, 1613, 660, 1379, 4267, 4542, 21, 22, 3057, 2]);