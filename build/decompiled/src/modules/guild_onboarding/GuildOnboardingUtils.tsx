// modules/guild_onboarding/GuildOnboardingUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var0 = metroImportAll;
    var _closure1_slot2 = var0;
    var _closure1_slot3 = var7;
    var0 = function(arg0, arg1) { // Original name: _createForOfIteratorHelperLoose, environment: var1
        _fun41510: for (var _fun41510_ip = 0;;) switch (_fun41510_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun41510_ip = 45;
                    continue _fun41510
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 45:
                if (var1) {
                    _fun41510_ip = 54;
                    continue _fun41510
                }
            case 48:
                var1 = var2["@@iterator"];
            case 54:
                if (var1) {
                    _fun41510_ip = 342;
                    continue _fun41510
                }
            case 60:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun41510_ip = 322;
                    continue _fun41510
                }
            case 85:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun41510_ip = 282;
                    continue _fun41510
                }
            case 95:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun41510_ip = 269;
                    continue _fun41510
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
                    _fun41510_ip = 162;
                    continue _fun41510
                }
            case 157:
                var6 = var2.constructor;
            case 162:
                var9 = var8;
                if (!var6) {
                    _fun41510_ip = 178;
                    continue _fun41510
                }
            case 168:
                var6 = var2.constructor;
                var9 = var6.name;
            case 178:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun41510_ip = 248;
                    continue _fun41510
                }
            case 186:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun41510_ip = 248;
                    continue _fun41510
                }
            case 194:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun41510_ip = 233;
                    continue _fun41510
                }
            case 204:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun41510_ip = 246;
                    continue _fun41510
                }
            case 233:
                var8 = _closure1_slot16;
                var6 = var8.bind(var7)(var2, var7);
            case 246:
                _fun41510_ip = 264;
                continue _fun41510;
            case 248:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 264:
                var5 = var6;
                _fun41510_ip = 282;
                continue _fun41510;
            case 269:
                var6 = _closure1_slot16;
                var5 = var6.bind(var7)(var2, var7);
            case 282:
                var3 = var5;
                if (var3) {
                    _fun41510_ip = 322;
                    continue _fun41510
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
                    _fun41510_ip = 329;
                    continue _fun41510
                }
            case 325:
                _closure2_slot0 = var3;
            case 329:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun41511: for (var _fun41511_ip = 0;;) switch (_fun41511_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun41511_ip = 56;
                                continue _fun41511
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
                            _fun41511_ip = 67;
                            continue _fun41511;
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
    var _closure1_slot15 = var0;
    var0 = function(arg0, arg1) { // Original name: _arrayLikeToArray, environment: var1
        _fun41512: for (var _fun41512_ip = 0;;) switch (_fun41512_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun41512_ip = 23;
                    continue _fun41512
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun41512_ip = 33;
                    continue _fun41512
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
                    _fun41512_ip = 70;
                    continue _fun41512
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun41512_ip = 55;
                    continue _fun41512
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot16 = var0;
    var0 = function(arg0, arg1, arg2) { // Original name: getChannelCoverage, environment: var1
        var5 = arg0;
        var4 = arg1;
        var3 = arg2;
        var0 = global;
        var0 = var0.Set;
        var2 = var0.prototype;
        var2 = Object.create(var2, {
            constructor: {
                value: var0
            }
        });
        var7 = var2;
        var0 = new var7[var0](var6);
        var0 = var0 instanceof Object ? var0 : var2;
        var _closure2_slot0 = var0;
        var2 = var5.forEach;
        var0 = function(arg0) { // Environment: var1
            var0 = arg0;
            var2 = var0.options;
            var1 = var2.forEach;
            var0 = function(arg0) { // Environment: var0
                _fun41515: for (var _fun41515_ip = 0;;) switch (_fun41515_ip) {
                    case 0:
                        var2 = arg0;
                        var4 = null;
                        var1 = var4 == var2;
                        var0 = undefined;
                        var3 = undefined;
                        if (var1) {
                            _fun41515_ip = 29;
                            continue _fun41515
                        }
                    case 16:
                        var2 = var2.channelIds;
                        var1 = var4 == var2;
                        var3 = var2;
                    case 29:
                        if (var1) {
                            _fun41515_ip = 49;
                            continue _fun41515
                        }
                    case 32:
                        var2 = var3.forEach;
                        var1 = function(arg0) { // Environment: var1
                            var2 = _closure2_slot0;
                            var1 = var2.add;
                            var0 = arg0;
                            var0 = var1.bind(var2)(var0);
                            var0 = undefined;
                            return var0;
                        };
                        var1 = var2.bind(var3)(var1);
                    case 49:
                        return var0;
                }
            };
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var0 = var2.bind(var5)(var0);
        var2 = var4.forEach;
        var0 = function(arg0) { // Environment: var1
            var2 = _closure2_slot0;
            var1 = var2.add;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0 = var2.bind(var4)(var0);
        var2 = var3.filter;
        var0 = function(arg0) { // Environment: var1
            _fun41518: for (var _fun41518_ip = 0;;) switch (_fun41518_ip) {
                case 0:
                    var3 = arg0;
                    var0 = var3.isCategory;
                    var0 = var0.bind(var3)();
                    var0 = !var0;
                    if (!var0) {
                        _fun41518_ip = 32;
                        continue _fun41518
                    }
                case 19:
                    var1 = var3.isThread;
                    var1 = var1.bind(var3)();
                    var0 = !var1;
                case 32:
                    if (!var0) {
                        _fun41518_ip = 68;
                        continue _fun41518
                    }
                case 35:
                    var4 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var1 = 10;
                    var1 = var2[var1];
                    var2 = undefined;
                    var1 = var4.bind(var2)(var1);
                    var1 = var1.bind(var2)(var3);
                    var0 = !var1;
                case 68:
                    return var0;
            }
        };
        var3 = var2.bind(var3)(var0);
        var2 = var3.filter;
        var0 = function(arg0) { // Environment: var1
            _fun41519: for (var _fun41519_ip = 0;;) switch (_fun41519_ip) {
                case 0:
                    var2 = arg0;
                    var4 = _closure2_slot0;
                    var1 = var4.has;
                    var0 = var2.id;
                    var0 = var1.bind(var4)(var0);
                    if (var0) {
                        _fun41519_ip = 66;
                        continue _fun41519
                    }
                case 28:
                    var4 = var2.parent_id;
                    var1 = null;
                    var1 = var1 != var4;
                    if (!var1) {
                        _fun41519_ip = 63;
                        continue _fun41519
                    }
                case 43:
                    var4 = _closure2_slot0;
                    var3 = var4.has;
                    var2 = var2.parent_id;
                    var1 = var3.bind(var4)(var2);
                case 63:
                    var0 = var1;
                case 66:
                    return var0;
            }
        };
        var2 = var2.bind(var3)(var0);
        var0 = new Array(2);
        var0[0] = var2;
        var2 = var3.filter;
        var1 = function(arg0) { // Environment: var1
            _fun41520: for (var _fun41520_ip = 0;;) switch (_fun41520_ip) {
                case 0:
                    var2 = arg0;
                    var4 = _closure2_slot0;
                    var1 = var4.has;
                    var0 = var2.id;
                    var0 = var1.bind(var4)(var0);
                    if (var0) {
                        _fun41520_ip = 66;
                        continue _fun41520
                    }
                case 28:
                    var4 = var2.parent_id;
                    var1 = null;
                    var1 = var1 != var4;
                    if (!var1) {
                        _fun41520_ip = 63;
                        continue _fun41520
                    }
                case 43:
                    var4 = _closure2_slot0;
                    var3 = var4.has;
                    var2 = var2.parent_id;
                    var1 = var3.bind(var4)(var2);
                case 63:
                    var0 = var1;
                case 66:
                    var0 = !var0;
                    return var0;
            }
        };
        var1 = var2.bind(var3)(var1);
        var0[1] = var1;
        return var0;
    };
    var _closure1_slot17 = var0;
    var3 = function(arg0) { // Original name: isChattableChannel, environment: var1
        _fun41521: for (var _fun41521_ip = 0;;) switch (_fun41521_ip) {
            case 0:
                var6 = arg0;
                var0 = null;
                var0 = var0 != var6;
                if (!var0) {
                    _fun41521_ip = 146;
                    continue _fun41521
                }
            case 15:
                var2 = _closure1_slot0;
                var4 = _closure1_slot3;
                var1 = 11;
                var1 = var4[var1];
                var7 = undefined;
                var5 = var2.bind(var7)(var1);
                var4 = var5.canChannelBeDefault;
                var2 = var6.guild_id;
                var1 = var6.id;
                var1 = var4.bind(var5)(var2, var1);
                var2 = !var1;
                var1 = !var2;
                if (var2) {
                    _fun41521_ip = 143;
                    continue _fun41521
                }
            case 71:
                var2 = var6.isForumChannel;
                var2 = var2.bind(var6)();
                var5 = _closure1_slot2;
                var8 = _closure1_slot3;
                var4 = 12;
                var4 = var8[var4];
                var5 = var5.bind(var7)(var4);
                var4 = var5.canEveryoneRole;
                var3 = _closure1_slot12;
                if (var2) {
                    _fun41521_ip = 128;
                    continue _fun41521
                }
            case 114:
                var2 = var3.SEND_MESSAGES;
                var2 = var4.bind(var5)(var2, var6);
                _fun41521_ip = 140;
                continue _fun41521;
            case 128:
                var3 = var3.SEND_MESSAGES_IN_THREADS;
                var2 = var4.bind(var5)(var3, var6);
            case 140:
                var1 = var2;
            case 143:
                var0 = var1;
            case 146:
                return var0;
        }
    };
    var _closure1_slot18 = var3;
    var0 = function(arg0, arg1) { // Original name: getFlattenedDefaultChannels, environment: var1
        _fun41522: for (var _fun41522_ip = 0;;) switch (_fun41522_ip) {
            case 0:
                var11 = arg1;
                var10 = arguments[2];
                var9 = arguments[3];
                var8 = undefined;
                if (!(var10 === var8)) {
                    _fun41522_ip = 22;
                    continue _fun41522
                }
            case 17:
                var10 = function(arg0) { // Original name: r, environment: var0
                    var0 = arg0;
                    return var0;
                };
            case 22:
                if (!(var9 === var8)) {
                    _fun41522_ip = 31;
                    continue _fun41522
                }
            case 26:
                var9 = function() { // Original name: l, environment: var0
                    var0 = true;
                    return var0;
                };
            case 31:
                var0 = new Array(0);
                var2 = _closure1_slot15;
                var4 = _closure1_slot6;
                var3 = var4.getChannels;
                var1 = arg0;
                var3 = var3.bind(var4)(var1);
                var1 = _closure1_slot7;
                var1 = var3[var1];
                var6 = var2.bind(var8)(var1);
                var2 = var6.bind(var8)();
                var1 = var2.done;
                var5 = null;
                var4 = 11;
                var3 = var2;
                var2 = undefined;
                if (var1) {
                    _fun41522_ip = 285;
                    continue _fun41522
                }
            case 98:
                var1 = var3.value;
                var1 = var1.channel;
                var13 = _closure1_slot0;
                var12 = _closure1_slot3;
                var12 = var12[var4];
                var15 = var13.bind(var8)(var12);
                var14 = var15.canChannelBeDefault;
                var13 = var1.guild_id;
                var12 = var1.id;
                var13 = var14.bind(var15)(var13, var12);
                var12 = var2;
                if (!var13) {
                    _fun41522_ip = 264;
                    continue _fun41522
                }
            case 153:
                var14 = var11.includes;
                var13 = var1.id;
                var13 = var14.bind(var11)(var13);
                if (!var13) {
                    _fun41522_ip = 184;
                    continue _fun41522
                }
            case 171:
                var13 = var1.isCategory;
                var13 = var13.bind(var1)();
                if (!var13) {
                    _fun41522_ip = 235;
                    continue _fun41522
                }
            case 184:
                var13 = var1.isThread;
                var13 = var13.bind(var1)();
                var12 = var2;
                if (var13) {
                    _fun41522_ip = 264;
                    continue _fun41522
                }
            case 200:
                var13 = var1.parent_id;
                var12 = var2;
                if (!(var5 != var13)) {
                    _fun41522_ip = 264;
                    continue _fun41522
                }
            case 213:
                var14 = var11.includes;
                var13 = var1.parent_id;
                var13 = var14.bind(var11)(var13);
                var12 = var2;
                if (!var13) {
                    _fun41522_ip = 264;
                    continue _fun41522
                }
            case 235:
                var1 = var10.bind(var8)(var1);
                var13 = var9.bind(var8)(var1);
                var12 = var1;
                if (!var13) {
                    _fun41522_ip = 264;
                    continue _fun41522
                }
            case 251:
                var13 = var0.push;
                var13 = var13.bind(var0)(var1);
                var12 = var1;
            case 264:
                var13 = var6.bind(var8)();
                var1 = var13.done;
                var2 = var12;
                var3 = var13;
                if (!var1) {
                    _fun41522_ip = 98;
                    continue _fun41522
                }
            case 285:
                return var0;
        }
    };
    var _closure1_slot19 = var0;
    var0 = function(arg0, arg1) { // Original name: areStatesEqual, environment: var1
        _fun41525: for (var _fun41525_ip = 0;;) switch (_fun41525_ip) {
            case 0:
                var3 = arg0;
                var6 = arg1;
                var1 = 0;
                var0 = var3[var1];
                var2 = var0.length;
                var0 = var6[var1];
                var0 = var0.length;
                var0 = var2 === var0;
                if (!var0) {
                    _fun41525_ip = 58;
                    continue _fun41525
                }
            case 33:
                var2 = 1;
                var4 = var3[var2];
                var4 = var4.length;
                var2 = var6[var2];
                var2 = var2.length;
                var0 = var4 === var2;
            case 58:
                if (!var0) {
                    _fun41525_ip = 140;
                    continue _fun41525
                }
            case 61:
                var8 = _closure1_slot1;
                var4 = _closure1_slot3;
                var7 = 14;
                var4 = var4[var7];
                var5 = undefined;
                var8 = var8.bind(var5)(var4);
                var4 = var3[var1];
                var1 = var6[var1];
                var1 = var8.bind(var5)(var4, var1);
                if (!var1) {
                    _fun41525_ip = 137;
                    continue _fun41525
                }
            case 103:
                var4 = _closure1_slot1;
                var2 = _closure1_slot3;
                var2 = var2[var7];
                var4 = var4.bind(var5)(var2);
                var2 = 1;
                var3 = var3[var2];
                var2 = var6[var2];
                var1 = var4.bind(var5)(var3, var2);
            case 137:
                var0 = var1;
            case 140:
                return var0;
        }
    };
    var _closure1_slot20 = var0;
    var4 = global;
    var10 = var4.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var9.bind(var10)(var2, var0, var5);
    var0 = 0;
    var5 = var7[var0];
    var0 = undefined;
    var5 = var8.bind(var0)(var5);
    var _closure1_slot4 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var8.bind(var0)(var5);
    var _closure1_slot5 = var5;
    var5 = 2;
    var9 = var7[var5];
    var9 = var8.bind(var0)(var9);
    var _closure1_slot6 = var9;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var5 = var5.GUILD_SELECTABLE_CHANNELS_KEY;
    var _closure1_slot7 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var8.bind(var0)(var5);
    var _closure1_slot8 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var8.bind(var0)(var5);
    var _closure1_slot9 = var5;
    var5 = 5;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var5 = var5.OnboardingConnectionType;
    var _closure1_slot10 = var5;
    var5 = 6;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var8 = var5.GuildFeatures;
    var _closure1_slot11 = var8;
    var5 = var5.Permissions;
    var _closure1_slot12 = var5;
    var5 = 7;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var5 = var5.GuildMemberFlags;
    var _closure1_slot13 = var5;
    var8 = var4.Date;
    var4 = var8.prototype;
    var5 = Object.create(var4, {
        constructor: {
            value: var8
        }
    });
    var13 = 1682488800000.0;
    var14 = var5;
    var4 = new var14[var8](var13, var12);
    var4 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot14 = var4;
    var5 = 17;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/guild_onboarding/GuildOnboardingUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var2.ONBOARDING_EPOCH = var4;
    var4 = function(arg0) { // Original name: useGuildOnboardingSettingsAvailable, environment: var1
        var1 = arg0;
        var _closure2_slot0 = var1;
        var3 = _closure1_slot0;
        var2 = _closure1_slot3;
        var1 = 8;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.useStateFromStores;
        var5 = _closure1_slot8;
        var1 = new Array(2);
        var1[0] = var5;
        var4 = _closure1_slot9;
        var1[1] = var4;
        var0 = function() { // Environment: var0
            _fun41527: for (var _fun41527_ip = 0;;) switch (_fun41527_ip) {
                case 0:
                    var3 = _closure1_slot8;
                    var2 = var3.getGuild;
                    var0 = _closure2_slot0;
                    var6 = var2.bind(var3)(var0);
                    var0 = null;
                    var3 = var0 == var6;
                    if (var3) {
                        _fun41527_ip = 62;
                        continue _fun41527
                    }
                case 33:
                    var4 = var6.features;
                    var2 = var4.has;
                    var0 = _closure1_slot11;
                    var0 = var0.COMMUNITY;
                    var0 = var2.bind(var4)(var0);
                    var3 = !var0;
                case 62:
                    var0 = !var3;
                    var5 = _closure1_slot9;
                    var4 = var5.can;
                    var2 = _closure1_slot12;
                    var2 = var2.MANAGE_GUILD;
                    var2 = var4.bind(var5)(var2, var6);
                    var4 = var5.can;
                    var1 = _closure1_slot12;
                    var1 = var1.MANAGE_ROLES;
                    var1 = var4.bind(var5)(var1, var6);
                    if (var3) {
                        _fun41527_ip = 119;
                        continue _fun41527
                    }
                case 116:
                    var0 = var2;
                case 119:
                    if (!var0) {
                        _fun41527_ip = 125;
                        continue _fun41527
                    }
                case 122:
                    var0 = var1;
                case 125:
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.useGuildOnboardingSettingsAvailable = var4;
    var4 = function(arg0) { // Original name: isGuildOnboardingSettingsAvailable, environment: var1
        _fun41528: for (var _fun41528_ip = 0;;) switch (_fun41528_ip) {
            case 0:
                var3 = _closure1_slot8;
                var2 = var3.getGuild;
                var0 = arg0;
                var6 = var2.bind(var3)(var0);
                var0 = null;
                var3 = var0 == var6;
                if (var3) {
                    _fun41528_ip = 58;
                    continue _fun41528
                }
            case 29:
                var4 = var6.features;
                var2 = var4.has;
                var0 = _closure1_slot11;
                var0 = var0.COMMUNITY;
                var0 = var2.bind(var4)(var0);
                var3 = !var0;
            case 58:
                var0 = !var3;
                var5 = _closure1_slot9;
                var4 = var5.can;
                var2 = _closure1_slot12;
                var2 = var2.MANAGE_GUILD;
                var2 = var4.bind(var5)(var2, var6);
                var4 = var5.can;
                var1 = _closure1_slot12;
                var1 = var1.MANAGE_ROLES;
                var1 = var4.bind(var5)(var1, var6);
                if (var3) {
                    _fun41528_ip = 115;
                    continue _fun41528
                }
            case 112:
                var0 = var2;
            case 115:
                if (!var0) {
                    _fun41528_ip = 121;
                    continue _fun41528
                }
            case 118:
                var0 = var1;
            case 121:
                return var0;
        }
    };
    var2.isGuildOnboardingSettingsAvailable = var4;
    var4 = function(arg0, arg1) { // Original name: isBlockedByOnboarding, environment: var1
        _fun41529: for (var _fun41529_ip = 0;;) switch (_fun41529_ip) {
            case 0:
                var1 = arg0;
                var0 = arg1;
                var2 = null;
                if (!(var2 != var1)) {
                    _fun41529_ip = 231;
                    continue _fun41529
                }
            case 15:
                var5 = var1.features;
                var4 = var5.has;
                var3 = _closure1_slot11;
                var3 = var3.GUILD_ONBOARDING;
                var3 = var4.bind(var5)(var3);
                if (!var3) {
                    _fun41529_ip = 231;
                    continue _fun41529
                }
            case 50:
                if (!(var2 != var0)) {
                    _fun41529_ip = 227;
                    continue _fun41529
                }
            case 57:
                var3 = var0.joinedAt;
                if (!(var2 != var3)) {
                    _fun41529_ip = 227;
                    continue _fun41529
                }
            case 70:
                var3 = global;
                var5 = var3.Date;
                var8 = var0.joinedAt;
                var4 = var5.prototype;
                var4 = Object.create(var4, {
                    constructor: {
                        value: var5
                    }
                });
                var9 = var4;
                var3 = new var9[var5](var8, var7);
                var4 = var3 instanceof Object ? var3 : var4;
                var3 = _closure1_slot14;
                if (!(!(var4 < var3))) {
                    _fun41529_ip = 223;
                    continue _fun41529
                }
            case 112:
                var0 = var0.flags;
                var3 = var2 != var0;
                var2 = 0;
                if (!var3) {
                    _fun41529_ip = 129;
                    continue _fun41529
                }
            case 126:
                var2 = var0;
            case 129:
                var3 = _closure1_slot2;
                var0 = _closure1_slot3;
                var6 = 9;
                var0 = var0[var6];
                var5 = undefined;
                var4 = var3.bind(var5)(var0);
                var3 = var4.hasFlag;
                var0 = _closure1_slot13;
                var0 = var0.STARTED_ONBOARDING;
                var0 = var3.bind(var4)(var2, var0);
                var4 = var2;
                if (!var0) {
                    _fun41529_ip = 221;
                    continue _fun41529
                }
            case 179:
                var3 = _closure1_slot2;
                var2 = _closure1_slot3;
                var2 = var2[var6];
                var3 = var3.bind(var5)(var2);
                var2 = var3.hasFlag;
                var1 = _closure1_slot13;
                var1 = var1.COMPLETED_ONBOARDING;
                var1 = var2.bind(var3)(var4, var1);
                var0 = !var1;
            case 221:
                return var0;
            case 223:
                var0 = false;
                return var0;
            case 227:
                var0 = false;
                return var0;
            case 231:
                var0 = false;
                return var0;
        }
    };
    var2.isBlockedByOnboarding = var4;
    var4 = function(arg0, arg1) { // Original name: showRulesInOnboarding, environment: var1
        _fun41530: for (var _fun41530_ip = 0;;) switch (_fun41530_ip) {
            case 0:
                var1 = arg0;
                var2 = null;
                var0 = var2 != var1;
                if (!var0) {
                    _fun41530_ip = 41;
                    continue _fun41530
                }
            case 12:
                var5 = var1.features;
                var4 = var5.has;
                var3 = _closure1_slot11;
                var3 = var3.MEMBER_VERIFICATION_MANUAL_APPROVAL;
                var0 = var4.bind(var5)(var3);
            case 41:
                if (!var0) {
                    _fun41530_ip = 73;
                    continue _fun41530
                }
            case 44:
                var4 = var1.features;
                var3 = var4.has;
                var1 = _closure1_slot11;
                var1 = var1.MEMBER_VERIFICATION_GATE_ENABLED;
                var0 = var3.bind(var4)(var1);
            case 73:
                var0 = !var0;
                if (!var0) {
                    _fun41530_ip = 86;
                    continue _fun41530
                }
            case 79:
                var1 = arg1;
                var0 = var2 != var1;
            case 86:
                return var0;
        }
    };
    var2.showRulesInOnboarding = var4;
    var4 = function(arg0, arg1, arg2) { // Original name: getChannelCoverageForOnboarding, environment: var1
        var4 = _closure1_slot17;
        var3 = _closure1_slot6;
        var2 = var3.getChannels;
        var1 = arg0;
        var1 = var2.bind(var3)(var1);
        var0 = _closure1_slot7;
        var2 = var1[var0];
        var1 = var2.map;
        var0 = function(arg0) { // Environment: var0
            var0 = arg0;
            var0 = var0.channel;
            return var0;
        };
        var3 = var1.bind(var2)(var0);
        var2 = undefined;
        var1 = arg1;
        var0 = arg2;
        var0 = var4.bind(var2)(var1, var0, var3);
        return var0;
    };
    var2.getChannelCoverageForOnboarding = var4;
    var4 = function(arg0, arg1, arg2) { // Original name: useChannelCoverageForOnboarding, environment: var1
        var1 = arg0;
        var _closure2_slot0 = var1;
        var4 = _closure1_slot17;
        var5 = _closure1_slot0;
        var3 = _closure1_slot3;
        var2 = 8;
        var2 = var3[var2];
        var3 = undefined;
        var7 = var5.bind(var3)(var2);
        var6 = var7.useStateFromStores;
        var2 = _closure1_slot6;
        var5 = new Array(1);
        var5[0] = var2;
        var2 = function() { // Environment: var0
            var2 = _closure1_slot6;
            var1 = var2.getChannels;
            var0 = _closure2_slot0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var2 = var6.bind(var7)(var5, var2);
        var1 = _closure1_slot7;
        var2 = var2[var1];
        var1 = var2.map;
        var0 = function(arg0) { // Environment: var0
            var0 = arg0;
            var0 = var0.channel;
            return var0;
        };
        var2 = var1.bind(var2)(var0);
        var1 = arg1;
        var0 = arg2;
        var0 = var4.bind(var3)(var1, var0, var2);
        return var0;
    };
    var2.useChannelCoverageForOnboarding = var4;
    var4 = function(arg0) { // Original name: isChattableChannelId, environment: var1
        var2 = _closure1_slot18;
        var3 = _closure1_slot4;
        var1 = var3.getChannel;
        var0 = arg0;
        var1 = var1.bind(var3)(var0);
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        return var0;
    };
    var2.isChattableChannelId = var4;
    var2.isChattableChannel = var3;
    var3 = function(arg0) { // Original name: useIsChattableChannel, environment: var1
        var1 = arg0;
        var _closure2_slot0 = var1;
        var4 = _closure1_slot0;
        var3 = _closure1_slot3;
        var2 = 8;
        var3 = var3[var2];
        var2 = undefined;
        var3 = var4.bind(var2)(var3);
        var2 = var3.useStateFromStores;
        var4 = _closure1_slot4;
        var1 = new Array(1);
        var1[0] = var4;
        var0 = function() { // Environment: var0
            _fun41538: for (var _fun41538_ip = 0;;) switch (_fun41538_ip) {
                case 0:
                    var3 = _closure1_slot4;
                    var2 = var3.getChannel;
                    var0 = _closure2_slot0;
                    var3 = var2.bind(var3)(var0);
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var0 = 13;
                    var0 = var2[var0];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var0);
                    var0 = var4.isNotNullish;
                    var0 = var0.bind(var4)(var3);
                    if (!var0) {
                        _fun41538_ip = 69;
                        continue _fun41538
                    }
                case 60:
                    var1 = _closure1_slot18;
                    var0 = var1.bind(var2)(var3);
                case 69:
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.useIsChattableChannel = var3;
    var3 = function(arg0, arg1, arg2) { // Original name: getMinimumSetOfDefaultChannelIds, environment: var1
        _fun41539: for (var _fun41539_ip = 0;;) switch (_fun41539_ip) {
            case 0:
                var7 = arg0;
                var3 = arg2;
                var6 = arguments[3];
                var _closure2_slot0 = var7;
                var5 = undefined;
                if (!(var6 === var5)) {
                    _fun41539_ip = 26;
                    continue _fun41539
                }
            case 21:
                var6 = function() { // Original name: a, environment: var1
                    var0 = true;
                    return var0;
                };
            case 26:
                var _closure2_slot1 = var6;
                var _closure2_slot2 = var5;
                var4 = _closure1_slot19;
                var10 = arg1;
                var9 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var0 = var0.id;
                    return var0;
                };
                var12 = undefined;
                var11 = var7;
                var8 = var6;
                var0 = var12[var4](var11, var10, var9, var8, var7);
                _closure2_slot2 = var0;
                var2 = var3.forEach;
                var1 = function(arg0) { // Environment: var1
                    _fun41542: for (var _fun41542_ip = 0;;) switch (_fun41542_ip) {
                        case 0:
                            var2 = arg0;
                            var0 = var2.required;
                            if (!var0) {
                                _fun41542_ip = 135;
                                continue _fun41542
                            }
                        case 14:
                            var8 = _closure1_slot19;
                            var7 = _closure2_slot0;
                            var3 = var2.options;
                            var4 = 0;
                            var9 = var3[var4];
                            var3 = null;
                            var10 = var3 == var9;
                            var6 = undefined;
                            var5 = undefined;
                            if (var10) {
                                _fun41542_ip = 58;
                                continue _fun41542
                            }
                        case 52:
                            var5 = var9.channelIds;
                        case 58:
                            if (!(var3 == var5)) {
                                _fun41542_ip = 66;
                                continue _fun41542
                            }
                        case 62:
                            var5 = new Array(0);
                        case 66:
                            var3 = function(arg0) { // Environment: var1
                                var0 = arg0;
                                var0 = var0.id;
                                return var0;
                            };
                            var5 = var8.bind(var6)(var7, var5, var3);
                            var3 = var2.options;
                            var2 = var3.reduce;
                            var1 = function(arg0, arg1) { // Environment: var1
                                _fun41544: for (var _fun41544_ip = 0;;) switch (_fun41544_ip) {
                                    case 0:
                                        var0 = arg0;
                                        var2 = arg1;
                                        var4 = var2.channelIds;
                                        var3 = null;
                                        if (!(var3 != var4)) {
                                            _fun41544_ip = 75;
                                            continue _fun41544
                                        }
                                    case 20:
                                        var6 = _closure1_slot19;
                                        var10 = _closure2_slot0;
                                        var9 = var2.channelIds;
                                        var11 = undefined;
                                        var8 = function(arg0) { // Environment: var1
                                            var0 = arg0;
                                            var0 = var0.id;
                                            return var0;
                                        };
                                        var7 = function(arg0) { // Environment: var1
                                            _fun41546: for (var _fun41546_ip = 0;;) switch (_fun41546_ip) {
                                                case 0:
                                                    var3 = arg0;
                                                    var2 = _closure2_slot1;
                                                    var0 = undefined;
                                                    var0 = var2.bind(var0)(var3);
                                                    if (!var0) {
                                                        _fun41546_ip = 37;
                                                        continue _fun41546
                                                    }
                                                case 20:
                                                    var2 = _closure2_slot2;
                                                    var1 = var2.includes;
                                                    var1 = var1.bind(var2)(var3);
                                                    var0 = !var1;
                                                case 37:
                                                    return var0;
                                            }
                                        };
                                        var1 = var11[var6](var10, var9, var8, var7, var6);
                                        var3 = var1.length;
                                        var2 = var0.length;
                                        if (!(var3 < var2)) {
                                            _fun41544_ip = 73;
                                            continue _fun41544
                                        }
                                    case 70:
                                        var0 = var1;
                                    case 73:
                                        return var0;
                                    case 75:
                                        var0 = new Array(0);
                                        return var0;
                                }
                            };
                            var12 = var2.bind(var3)(var1, var5);
                            var2 = _closure2_slot2;
                            var1 = var2.push;
                            var0 = new Array(0);
                            var13 = var0;
                            var11 = 0;
                            var3 = arraySpread(var13, var12, var11);
                            var13 = var1;
                            var12 = var0;
                            var11 = var2;
                            var0 = apply(var13, var12, var11);
                        case 135:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var2.bind(var3)(var1);
                return var0;
        }
    };
    var2.getMinimumSetOfDefaultChannelIds = var3;
    var3 = function(arg0, arg1) { // Original name: getChattableDefaultChannels, environment: var1
        _fun41547: for (var _fun41547_ip = 0;;) switch (_fun41547_ip) {
            case 0:
                var8 = arg0;
                var3 = _closure1_slot19;
                var4 = undefined;
                var1 = arg1;
                var1 = var3.bind(var4)(var8, var1);
                var3 = {};
                var5 = _closure1_slot15;
                var7 = _closure1_slot6;
                var6 = var7.getChannels;
                var6 = var6.bind(var7)(var8);
                var2 = _closure1_slot7;
                var2 = var6[var2];
                var6 = var5.bind(var4)(var2);
                var5 = var6.bind(var4)();
                var2 = var5.done;
                if (var2) {
                    _fun41547_ip = 103;
                    continue _fun41547
                }
            case 69:
                var7 = var5.value;
                var2 = var7.channel;
                var2 = var2.id;
                var3[var2] = var7;
                var7 = var6.bind(var4)();
                var2 = var7.done;
                var5 = var7;
                if (!var2) {
                    _fun41547_ip = 69;
                    continue _fun41547
                }
            case 103:
                var5 = var1.map;
                var2 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var0 = var0.id;
                    return var0;
                };
                var2 = var5.bind(var1)(var2);
                var0 = function(arg0, arg1) { // Original name: filterChattableChannels, environment: var0
                    var2 = arg0;
                    var1 = arg1;
                    var _closure3_slot0 = var1;
                    var1 = var2.filter;
                    var0 = function(arg0) { // Environment: var0
                        _fun41549: for (var _fun41549_ip = 0;;) switch (_fun41549_ip) {
                            case 0:
                                var2 = _closure1_slot18;
                                var1 = _closure3_slot0;
                                var0 = arg0;
                                var3 = var1[var0];
                                var0 = null;
                                var4 = var0 == var3;
                                var1 = undefined;
                                var0 = undefined;
                                if (var4) {
                                    _fun41549_ip = 39;
                                    continue _fun41549
                                }
                            case 34:
                                var0 = var3.channel;
                            case 39:
                                var0 = var2.bind(var1)(var0);
                                return var0;
                        }
                    };
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var2 = var0.bind(var4)(var2, var3);
                var0 = new Array(2);
                var0[0] = var2;
                var0[1] = var1;
                return var0;
        }
    };
    var2.getChattableDefaultChannels = var3;
    var3 = function(arg0, arg1) { // Original name: useChattableDefaultChannels, environment: var1
        var7 = arg0;
        var6 = arg1;
        var _closure2_slot0 = var7;
        var _closure2_slot1 = var6;
        var4 = _closure1_slot0;
        var3 = _closure1_slot3;
        var2 = 8;
        var3 = var3[var2];
        var2 = undefined;
        var5 = var4.bind(var2)(var3);
        var4 = var5.useStateFromStores;
        var2 = _closure1_slot6;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = new Array(2);
        var2[0] = var7;
        var2[1] = var6;
        var8 = _closure1_slot20;
        var10 = function() { // Environment: var0
            _fun41552: for (var _fun41552_ip = 0;;) switch (_fun41552_ip) {
                case 0:
                    var1 = new Array(0);
                    var2 = new Array(0);
                    var10 = {};
                    var3 = _closure1_slot15;
                    var5 = _closure1_slot6;
                    var4 = var5.getChannels;
                    var0 = _closure2_slot0;
                    var4 = var4.bind(var5)(var0);
                    var0 = _closure1_slot7;
                    var0 = var4[var0];
                    var7 = undefined;
                    var6 = var3.bind(var7)(var0);
                    var3 = var6.bind(var7)();
                    var0 = var3.done;
                    var5 = null;
                    var4 = 11;
                    if (var0) {
                        _fun41552_ip = 336;
                        continue _fun41552
                    }
                case 74:
                    var0 = var3.value;
                    var12 = _closure1_slot0;
                    var11 = _closure1_slot3;
                    var11 = var11[var4];
                    var14 = var12.bind(var7)(var11);
                    var13 = var14.canChannelBeDefault;
                    var11 = var0.channel;
                    var12 = var11.guild_id;
                    var11 = var0.channel;
                    var11 = var11.id;
                    var11 = var13.bind(var14)(var12, var11);
                    if (!var11) {
                        _fun41552_ip = 249;
                        continue _fun41552
                    }
                case 131:
                    var14 = _closure2_slot1;
                    var13 = var14.has;
                    var12 = var0.channel;
                    var12 = var12.id;
                    var12 = var13.bind(var14)(var12);
                    if (!var12) {
                        _fun41552_ip = 176;
                        continue _fun41552
                    }
                case 158:
                    var14 = var0.channel;
                    var13 = var14.isCategory;
                    var13 = var13.bind(var14)();
                    var12 = !var13;
                case 176:
                    if (var12) {
                        _fun41552_ip = 246;
                        continue _fun41552
                    }
                case 179:
                    var14 = var0.channel;
                    var13 = var14.isThread;
                    var13 = var13.bind(var14)();
                    var13 = !var13;
                    if (!var13) {
                        _fun41552_ip = 215;
                        continue _fun41552
                    }
                case 200:
                    var14 = var0.channel;
                    var14 = var14.parent_id;
                    var13 = var5 != var14;
                case 215:
                    if (!var13) {
                        _fun41552_ip = 243;
                        continue _fun41552
                    }
                case 218:
                    var16 = _closure2_slot1;
                    var15 = var16.has;
                    var14 = var0.channel;
                    var14 = var14.parent_id;
                    var13 = var15.bind(var16)(var14);
                case 243:
                    var12 = var13;
                case 246:
                    var11 = var12;
                case 249:
                    if (!var11) {
                        _fun41552_ip = 318;
                        continue _fun41552
                    }
                case 252:
                    var11 = var0.channel;
                    var11 = var11.id;
                    var10[var11] = var0;
                    var12 = var1.push;
                    var11 = var0.channel;
                    var11 = var12.bind(var1)(var11);
                    var12 = _closure1_slot18;
                    var11 = var0.channel;
                    var11 = var12.bind(var7)(var11);
                    if (!var11) {
                        _fun41552_ip = 318;
                        continue _fun41552
                    }
                case 298:
                    var11 = var2.push;
                    var0 = var0.channel;
                    var0 = var0.id;
                    var0 = var11.bind(var2)(var0);
                case 318:
                    var11 = var6.bind(var7)();
                    var0 = var11.done;
                    var3 = var11;
                    if (!var0) {
                        _fun41552_ip = 74;
                        continue _fun41552
                    }
                case 336:
                    var0 = new Array(2);
                    var0[0] = var2;
                    var0[1] = var1;
                    return var0;
            }
        };
        var12 = var5;
        var11 = var3;
        var9 = var2;
        var0 = var12[var4](var11, var10, var9, var8, var7);
        return var0;
    };
    var2.useChattableDefaultChannels = var3;
    var3 = function(arg0) { // Original name: getSelectedRoleIds, environment: var1
        var3 = arg0;
        var0 = global;
        var2 = var0.Set;
        var1 = var3.map;
        var0 = function(arg0) { // Environment: var0
            var0 = arg0;
            var0 = var0.roleIds;
            return var0;
        };
        var1 = var1.bind(var3)(var0);
        var0 = var1.flat;
        var3 = var0.bind(var1)();
        var1 = var3.filter;
        var5 = _closure1_slot0;
        var4 = _closure1_slot3;
        var0 = 13;
        var4 = var4[var0];
        var0 = undefined;
        var0 = var5.bind(var0)(var4);
        var0 = var0.isNotNullish;
        var6 = var1.bind(var3)(var0);
        var1 = var2.prototype;
        var1 = Object.create(var1, {
            constructor: {
                value: var2
            }
        });
        var7 = var1;
        var0 = new var7[var2](var6, var5);
        var0 = var0 instanceof Object ? var0 : var1;
        return var0;
    };
    var2.getSelectedRoleIds = var3;
    var3 = function(arg0) { // Original name: getSelectedChannelIds, environment: var1
        var3 = arg0;
        var0 = global;
        var2 = var0.Set;
        var1 = var3.map;
        var0 = function(arg0) { // Environment: var0
            var0 = arg0;
            var0 = var0.channelIds;
            return var0;
        };
        var1 = var1.bind(var3)(var0);
        var0 = var1.flat;
        var3 = var0.bind(var1)();
        var1 = var3.filter;
        var5 = _closure1_slot0;
        var4 = _closure1_slot3;
        var0 = 13;
        var4 = var4[var0];
        var0 = undefined;
        var0 = var5.bind(var0)(var4);
        var0 = var0.isNotNullish;
        var6 = var1.bind(var3)(var0);
        var1 = var2.prototype;
        var1 = Object.create(var1, {
            constructor: {
                value: var2
            }
        });
        var7 = var1;
        var0 = new var7[var2](var6, var5);
        var0 = var0 instanceof Object ? var0 : var1;
        return var0;
    };
    var2.getSelectedChannelIds = var3;
    var3 = function(arg0) { // Original name: getProviderConnectionState, environment: var1
        var3 = arg0;
        var2 = var3.filter;
        var1 = function(arg0) { // Environment: var0
            _fun41558: for (var _fun41558_ip = 0;;) switch (_fun41558_ip) {
                case 0:
                    var1 = arg0;
                    var2 = var1.connection_type;
                    var0 = _closure1_slot10;
                    var0 = var0.PROVIDER_CONNECTED_ACCOUNT;
                    var0 = var2 === var0;
                    if (!var0) {
                        _fun41558_ip = 35;
                        continue _fun41558
                    }
                case 29:
                    var0 = var1.provider_id;
                case 35:
                    return var0;
            }
        };
        var4 = var2.bind(var3)(var1);
        var2 = new Array(0);
        var _closure2_slot0 = var2;
        var1 = new Array(0);
        var _closure2_slot1 = var1;
        var3 = var4.forEach;
        var0 = function(arg0) { // Environment: var0
            _fun41559: for (var _fun41559_ip = 0;;) switch (_fun41559_ip) {
                case 0:
                    var0 = arg0;
                    var3 = var0.provider_id;
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var0 = 15;
                    var2 = var2[var0];
                    var0 = undefined;
                    var4 = var4.bind(var0)(var2);
                    var2 = var4.isNullOrEmpty;
                    var2 = var2.bind(var4)(var3);
                    if (var2) {
                        _fun41559_ip = 115;
                        continue _fun41559
                    }
                case 48:
                    var4 = _closure1_slot5;
                    var1 = var4.getAccount;
                    var2 = null;
                    var1 = var1.bind(var4)(var2, var3);
                    if (!(var2 != var1)) {
                        _fun41559_ip = 98;
                        continue _fun41559
                    }
                case 70:
                    var1 = var1.revoked;
                    if (var1) {
                        _fun41559_ip = 98;
                        continue _fun41559
                    }
                case 79:
                    var2 = _closure2_slot0;
                    var1 = var2.push;
                    var1 = var1.bind(var2)(var3);
                    _fun41559_ip = 115;
                    continue _fun41559;
                case 98:
                    var2 = _closure2_slot1;
                    var1 = var2.push;
                    var1 = var1.bind(var2)(var3);
                case 115:
                    return var0;
            }
        };
        var0 = var3.bind(var4)(var0);
        var0 = {};
        var0.connected = var2;
        var0.notConnected = var1;
        return var0;
    };
    var2.getProviderConnectionState = var3;
    var1 = function(arg0) { // Original name: getApplicationConnectionState, environment: var1
        var3 = arg0;
        var2 = var3.filter;
        var1 = function(arg0) { // Environment: var0
            _fun41561: for (var _fun41561_ip = 0;;) switch (_fun41561_ip) {
                case 0:
                    var1 = arg0;
                    var2 = var1.connection_type;
                    var0 = _closure1_slot10;
                    var0 = var0.APPLICATION;
                    var0 = var2 === var0;
                    if (!var0) {
                        _fun41561_ip = 35;
                        continue _fun41561
                    }
                case 29:
                    var0 = var1.application_id;
                case 35:
                    return var0;
            }
        };
        var4 = var2.bind(var3)(var1);
        var2 = new Array(0);
        var _closure2_slot0 = var2;
        var1 = new Array(0);
        var _closure2_slot1 = var1;
        var6 = _closure1_slot0;
        var7 = _closure1_slot3;
        var3 = 16;
        var8 = var7[var3];
        var5 = undefined;
        var8 = var6.bind(var5)(var8);
        var8 = var8.default;
        var _closure2_slot2 = var8;
        var3 = var7[var3];
        var3 = var6.bind(var5)(var3);
        var3 = var3.FetchState;
        var _closure2_slot3 = var3;
        var3 = var4.forEach;
        var0 = function(arg0) { // Environment: var0
            _fun41562: for (var _fun41562_ip = 0;;) switch (_fun41562_ip) {
                case 0:
                    var0 = arg0;
                    var3 = var0.application_id;
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot3;
                    var0 = 15;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.isNullOrEmpty;
                    var1 = var1.bind(var2)(var3);
                    if (var1) {
                        _fun41562_ip = 127;
                        continue _fun41562
                    }
                case 48:
                    var5 = _closure2_slot2;
                    var2 = var5.getNewestTokenForApplication;
                    var4 = var2.bind(var5)(var3);
                    var2 = var5.getFetchStateForApplication;
                    var5 = var2.bind(var5)(var3);
                    var2 = _closure2_slot3;
                    var2 = var2.FETCHED;
                    if (!(var5 === var2)) {
                        _fun41562_ip = 97;
                        continue _fun41562
                    }
                case 91:
                    var2 = null;
                    if (!(var2 == var4)) {
                        _fun41562_ip = 113;
                        continue _fun41562
                    }
                case 97:
                    var4 = _closure2_slot1;
                    var2 = var4.push;
                    var2 = var2.bind(var4)(var3);
                    _fun41562_ip = 127;
                    continue _fun41562;
                case 113:
                    var2 = _closure2_slot0;
                    var1 = var2.push;
                    var1 = var1.bind(var2)(var3);
                case 127:
                    return var0;
            }
        };
        var0 = var3.bind(var4)(var0);
        var0 = {};
        var0.connected = var2;
        var0.notConnected = var1;
        return var0;
    };
    var2.getApplicationConnectionState = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1372, 4482, 1662, 1410, 3050, 4546, 660, 3038, 566, 1384, 4547, 4548, 3055, 1304, 628, 1607, 4549, 2]);