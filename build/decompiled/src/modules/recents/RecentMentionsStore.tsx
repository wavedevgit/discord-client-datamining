// modules/recents/RecentMentionsStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var0 = function() {
        _fun69220: for (var _fun69220_ip = 0;;) switch (_fun69220_ip) {
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
                _fun69220_ip = 76;
                continue _fun69220;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
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
    var0 = function arg0() {
        _fun69223: for (var _fun69223_ip = 0;;) switch (_fun69223_ip) {
            case 0:
                var1 = arg0;
                var5 = var1.addedMessages;
                var2 = var1.deletedMessages;
                var1 = null;
                if (!(var1 != var5)) {
                    _fun69223_ip = 40;
                    continue _fun69223
                }
            case 23:
                var4 = var5.forEach;
                var3 = function(arg0) { // Environment: var0
                    _fun69224: for (var _fun69224_ip = 0;;) switch (_fun69224_ip) {
                        case 0:
                            var1 = arg0;
                            var3 = _closure1_slot24;
                            var2 = var1.getChannelId;
                            var2 = var2.bind(var1)();
                            var3 = var3[var2];
                            var2 = null;
                            if (!(var2 == var3)) {
                                _fun69224_ip = 50;
                                continue _fun69224
                            }
                        case 30:
                            var4 = _closure1_slot24;
                            var2 = var1.getChannelId;
                            var3 = var2.bind(var1)();
                            var2 = 0;
                            var4[var3] = var2;
                        case 50:
                            var2 = _closure1_slot24;
                            var0 = var1.getChannelId;
                            var1 = var0.bind(var1)();
                            var0 = var2[var1];
                            var0 = var0 + 1;
                            var2[var1] = var0;
                            var0 = undefined;
                            return var0;
                    }
                };
                var3 = var4.bind(var5)(var3);
            case 40:
                if (!(var1 != var2)) {
                    _fun69223_ip = 61;
                    continue _fun69223
                }
            case 44:
                var1 = var2.forEach;
                var0 = function(arg0) { // Environment: var0
                    _fun69225: for (var _fun69225_ip = 0;;) switch (_fun69225_ip) {
                        case 0:
                            var6 = arg0;
                            var2 = _closure1_slot24;
                            var1 = var6.getChannelId;
                            var1 = var1.bind(var6)();
                            var2 = var2[var1];
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun69225_ip = 94;
                                continue _fun69225
                            }
                        case 30:
                            var2 = _closure1_slot24;
                            var1 = var6.getChannelId;
                            var1 = var1.bind(var6)();
                            var3 = global;
                            var5 = var3.Math;
                            var4 = var5.max;
                            var3 = _closure1_slot24;
                            var0 = var6.getChannelId;
                            var0 = var0.bind(var6)();
                            var3 = var3[var0];
                            var0 = 1;
                            var3 = var3 - var0;
                            var0 = 0;
                            var0 = var4.bind(var5)(var0, var3);
                            var2[var1] = var0;
                        case 94:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var1.bind(var2)(var0);
            case 61:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot33 = var0;
    var0 = function arg0() {
        _fun69226: for (var _fun69226_ip = 0;;) switch (_fun69226_ip) {
            case 0:
                var0 = arg0;
                var1 = _closure1_slot8;
                var1 = var0 instanceof var1;
                if (var1) {
                    _fun69226_ip = 84;
                    continue _fun69226
                }
            case 17:
                var5 = _closure1_slot11;
                var4 = var5.getMessage;
                var3 = var0.channel_id;
                var1 = var0.id;
                var1 = var4.bind(var5)(var3, var1);
                var3 = null;
                if (!(var3 == var1)) {
                    _fun69226_ip = 82;
                    continue _fun69226
                }
            case 49:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 16;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var4.bind(var2)(var3);
                var2 = var3.createMessageRecord;
                var1 = var2.bind(var3)(var0);
            case 82:
                return var1;
            case 84:
                return var0;
        }
    };
    var _closure1_slot34 = var0;
    var3 = function arg0() {
        _fun69227: for (var _fun69227_ip = 0;;) switch (_fun69227_ip) {
            case 0:
                var7 = arg0;
                var3 = _closure1_slot10;
                var2 = var3.getBasicChannel;
                var0 = var7.channel_id;
                var2 = var2.bind(var3)(var0);
                var0 = null;
                if (!(var0 != var2)) {
                    _fun69227_ip = 326;
                    continue _fun69227
                }
            case 35:
                var3 = _closure1_slot21;
                var5 = var3.GUILD_TEXTUAL;
                var4 = var5.has;
                var3 = var2.type;
                var3 = var4.bind(var5)(var3);
                if (!var3) {
                    _fun69227_ip = 326;
                    continue _fun69227
                }
            case 66:
                var6 = _closure1_slot15;
                var5 = var6.isGuildOrCategoryOrChannelMuted;
                var4 = var2.guild_id;
                var3 = var2.id;
                var3 = var5.bind(var6)(var4, var3);
                if (var3) {
                    _fun69227_ip = 322;
                    continue _fun69227
                }
            case 98:
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var3 = 17;
                var4 = var4[var3];
                var3 = undefined;
                var6 = var5.bind(var3)(var4);
                var5 = var6.shouldShowAgeGateForChannelId;
                var4 = var2.id;
                var4 = var5.bind(var6)(var4);
                if (var4) {
                    _fun69227_ip = 318;
                    continue _fun69227
                }
            case 142:
                var5 = _closure1_slot15;
                var4 = var5.resolvedMessageNotifications;
                var5 = var4.bind(var5)(var2);
                var4 = _closure1_slot20;
                var4 = var4.ALL_MESSAGES;
                if (!(var4 !== var5)) {
                    _fun69227_ip = 314;
                    continue _fun69227
                }
            case 174:
                var4 = _closure1_slot20;
                var4 = var4.ONLY_MENTIONS;
                if (!(var4 !== var5)) {
                    _fun69227_ip = 202;
                    continue _fun69227
                }
            case 188:
                var4 = _closure1_slot20;
                var4 = var4.NO_MESSAGES;
                var4 = false;
                return var4;
            case 202:
                var6 = _closure1_slot15;
                var5 = var6.isSuppressEveryoneEnabled;
                var4 = var2.guild_id;
                var5 = var5.bind(var6)(var4);
                var6 = _closure1_slot15;
                var4 = var6.isSuppressRolesEnabled;
                var2 = var2.guild_id;
                var4 = var4.bind(var6)(var2);
                var6 = _closure1_slot16;
                var2 = var6.getCurrentUser;
                var6 = var2.bind(var6)();
                var0 = var0 != var6;
                if (!var0) {
                    _fun69227_ip = 312;
                    continue _fun69227
                }
            case 262:
                var2 = _closure1_slot1;
                var8 = _closure1_slot2;
                var1 = 18;
                var1 = var8[var1];
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var1.message = var7;
                var6 = var6.id;
                var1.userId = var6;
                var1.suppressEveryone = var5;
                var1.suppressRoles = var4;
                var0 = var2.bind(var3)(var1);
            case 312:
                return var0;
            case 314:
                var0 = true;
                return var0;
            case 318:
                var0 = false;
                return var0;
            case 322:
                var0 = false;
                return var0;
            case 326:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot35 = var3;
    var1 = function arg0() {
        _fun69228: for (var _fun69228_ip = 0;;) switch (_fun69228_ip) {
            case 0:
                var2 = arg0;
                var5 = arguments[1];
                var7 = undefined;
                if (!(var5 === var7)) {
                    _fun69228_ip = 14;
                    continue _fun69228
                }
            case 12:
                var5 = null;
            case 14:
                var1 = _closure1_slot1;
                var3 = _closure1_slot2;
                var0 = 21;
                var0 = var3[var0];
                var0 = var1.bind(var7)(var0);
                var0 = var0.bind(var7)(var2);
                if (!var0) {
                    _fun69228_ip = 77;
                    continue _fun69228
                }
            case 45:
                var0 = _closure1_slot19;
                var3 = var0.SELF_MENTIONABLE_SYSTEM;
                var1 = var3.has;
                var0 = var2.type;
                var0 = var1.bind(var3)(var0);
                if (var0) {
                    _fun69228_ip = 77;
                    continue _fun69228
                }
            case 73:
                var0 = null;
                return var0;
            case 77:
                var0 = null;
                if (!(var0 == var5)) {
                    _fun69228_ip = 88;
                    continue _fun69228
                }
            case 83:
                var5 = var2.channel_id;
            case 88:
                var3 = _closure1_slot10;
                var1 = var3.getChannel;
                var11 = var1.bind(var3)(var5);
                if (!(var0 != var11)) {
                    _fun69228_ip = 493;
                    continue _fun69228
                }
            case 109:
                var3 = var11.type;
                var1 = _closure1_slot18;
                var1 = var1.DM;
                if (!(var3 !== var1)) {
                    _fun69228_ip = 493;
                    continue _fun69228
                }
            case 131:
                var1 = _closure1_slot28;
                var3 = var1.guildFilter;
                var1 = _closure1_slot17;
                var1 = var1.THIS_SERVER;
                if (!(var3 === var1)) {
                    _fun69228_ip = 186;
                    continue _fun69228
                }
            case 155:
                var1 = var11.getGuildId;
                var3 = var1.bind(var11)();
                var5 = _closure1_slot14;
                var1 = var5.getGuildId;
                var1 = var1.bind(var5)();
                if (!(var3 === var1)) {
                    _fun69228_ip = 491;
                    continue _fun69228
                }
            case 186:
                var3 = _closure1_slot9;
                var1 = var3.getId;
                var8 = var1.bind(var3)();
                var3 = _closure1_slot13;
                var1 = var3.isBlockedOrIgnoredForMessage;
                var1 = var1.bind(var3)(var2);
                if (var1) {
                    _fun69228_ip = 489;
                    continue _fun69228
                }
            case 221:
                var3 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 22;
                var1 = var5[var1];
                var1 = var3.bind(var7)(var1);
                var1 = var1.bind(var7)(var2, var8);
                if (var1) {
                    _fun69228_ip = 489;
                    continue _fun69228
                }
            case 253:
                var1 = _closure1_slot34;
                var2 = var1.bind(var7)(var2);
                var1 = _closure1_slot28;
                var1 = var1.everyoneFilter;
                var6 = !var1;
                var1 = _closure1_slot28;
                var1 = var1.roleFilter;
                var5 = !var1;
                var3 = _closure1_slot1;
                var1 = _closure1_slot2;
                var9 = 18;
                var1 = var1[var9];
                var3 = var3.bind(var7)(var1);
                var1 = {};
                var1.message = var2;
                var1.userId = var8;
                var1.suppressEveryone = var6;
                var1.suppressRoles = var5;
                var3 = var3.bind(var7)(var1);
                var1 = null;
                if (!var3) {
                    _fun69228_ip = 487;
                    continue _fun69228
                }
            case 341:
                var3 = _closure1_slot31;
                if (!var3) {
                    _fun69228_ip = 377;
                    continue _fun69228
                }
            case 348:
                var10 = _closure1_slot12;
                var6 = var10.ackMessageId;
                var5 = var11.id;
                var6 = var6.bind(var10)(var5);
                var5 = var2.id;
                var3 = var6 !== var5;
            case 377:
                if (!var3) {
                    _fun69228_ip = 472;
                    continue _fun69228
                }
            case 380:
                var6 = _closure1_slot1;
                var5 = _closure1_slot2;
                var5 = var5[var9];
                var6 = var6.bind(var7)(var5);
                var5 = {};
                var5.message = var2;
                var5.userId = var8;
                var10 = _closure1_slot15;
                var9 = var10.isSuppressEveryoneEnabled;
                var8 = var11.getGuildId;
                var8 = var8.bind(var11)();
                var8 = var9.bind(var10)(var8);
                var5.suppressEveryone = var8;
                var10 = _closure1_slot15;
                var9 = var10.isSuppressRolesEnabled;
                var8 = var11.getGuildId;
                var8 = var8.bind(var11)();
                var8 = var9.bind(var10)(var8);
                var5.suppressRoles = var8;
                var3 = var6.bind(var7)(var5);
            case 472:
                var1 = var2;
                if (!var3) {
                    _fun69228_ip = 487;
                    continue _fun69228
                }
            case 478:
                var3 = false;
                _closure1_slot31 = var3;
                var1 = var2;
            case 487:
                return var1;
            case 489:
                return var0;
            case 491:
                return var0;
            case 493:
                return var0;
        }
    };
    var _closure1_slot36 = var1;
    var0 = function arg0() {
        _fun69229: for (var _fun69229_ip = 0;;) switch (_fun69229_ip) {
            case 0:
                var3 = arg0;
                var _closure2_slot0 = var3;
                var0 = _closure1_slot25;
                var4 = var0[var3];
                var0 = null;
                if (!(var0 != var4)) {
                    _fun69229_ip = 131;
                    continue _fun69229
                }
            case 26:
                var0 = _closure1_slot25;
                var0 = delete var0[var3];
                var7 = _closure1_slot33;
                var6 = {};
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var3 = 19;
                var8 = var5[var3];
                var0 = undefined;
                var11 = var4.bind(var0)(var8);
                var10 = var11.filter;
                var9 = _closure1_slot23;
                var8 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var1 = var0.id;
                    var0 = _closure2_slot0;
                    var0 = var1 === var0;
                    return var0;
                };
                var8 = var10.bind(var11)(var9, var8);
                var6.deletedMessages = var8;
                var6 = var7.bind(var0)(var6);
                var3 = var5[var3];
                var5 = var4.bind(var0)(var3);
                var4 = var5.filter;
                var3 = _closure1_slot23;
                var1 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var1 = var0.id;
                    var0 = _closure2_slot0;
                    var0 = var1 !== var0;
                    return var0;
                };
                var1 = var4.bind(var5)(var3, var1);
                _closure1_slot23 = var1;
                return var0;
            case 131:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot37 = var0;
    var12 = function arg0() {
        var0 = arg0;
        var2 = var0.id;
        var1 = _closure1_slot37;
        var0 = undefined;
        var0 = var1.bind(var0)(var2);
        return var0;
    };
    var14 = function arg0() {
        _fun69233: for (var _fun69233_ip = 0;;) switch (_fun69233_ip) {
            case 0:
                var0 = {};
                var10 = _closure1_slot28;
                var11 = var0;
                var3 = copyDataProperties(var11, var10);
                var _closure2_slot0 = var0;
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var3 = 19;
                var6 = var5[var3];
                var0 = undefined;
                var7 = var4.bind(var0)(var6);
                var6 = var7.defaults;
                var3 = var5[var3];
                var9 = var4.bind(var0)(var3);
                var8 = var9.pick;
                var4 = arg0;
                var3 = ['guildFilter', 'roleFilter', 'everyoneFilter'];
                var4 = var8.bind(var9)(var4, var3);
                var3 = _closure1_slot28;
                var3 = var6.bind(var7)(var4, var3);
                _closure1_slot28 = var3;
                var4 = _closure1_slot0;
                var3 = 15;
                var3 = var5[var3];
                var3 = var4.bind(var0)(var3);
                var6 = var3.Storage;
                var5 = var6.set;
                var4 = _closure1_slot22;
                var3 = _closure1_slot28;
                var3 = var5.bind(var6)(var4, var3);
                var6 = function arg0, arg1() {
                    _fun69234: for (var _fun69234_ip = 0;;) switch (_fun69234_ip) {
                        case 0:
                            var2 = arg0;
                            var0 = _closure2_slot0;
                            var3 = var0[var2];
                            var0 = _closure1_slot28;
                            var0 = var0[var2];
                            var0 = var3 !== var0;
                            if (!var0) {
                                _fun69234_ip = 47;
                                continue _fun69234
                            }
                        case 32:
                            var1 = _closure1_slot28;
                            var2 = var1[var2];
                            var1 = arg1;
                            var0 = var2 === var1;
                        case 47:
                            return var0;
                    }
                };
                var3 = _closure1_slot17;
                var4 = var3.THIS_SERVER;
                var3 = 'guildFilter';
                var4 = var6.bind(var0)(var3, var4);
                if (var4) {
                    _fun69233_ip = 181;
                    continue _fun69233
                }
            case 169:
                var5 = 'everyoneFilter';
                var3 = false;
                var4 = var6.bind(var0)(var5, var3);
            case 181:
                if (var4) {
                    _fun69233_ip = 196;
                    continue _fun69233
                }
            case 184:
                var5 = 'roleFilter';
                var3 = false;
                var4 = var6.bind(var0)(var5, var3);
            case 196:
                var3 = {};
                _closure1_slot25 = var3;
                var3 = new Array(0);
                var _closure2_slot1 = var3;
                if (!var4) {
                    _fun69233_ip = 234;
                    continue _fun69233
                }
            case 213:
                var6 = _closure1_slot23;
                var5 = var6.forEach;
                var4 = function(arg0) { // Environment: var1
                    _fun69235: for (var _fun69235_ip = 0;;) switch (_fun69235_ip) {
                        case 0:
                            var3 = _closure1_slot36;
                            var0 = undefined;
                            var1 = arg0;
                            var1 = var3.bind(var0)(var1);
                            var3 = null;
                            if (!(var3 != var1)) {
                                _fun69235_ip = 55;
                                continue _fun69235
                            }
                        case 23:
                            var4 = _closure2_slot1;
                            var3 = var4.push;
                            var3 = var3.bind(var4)(var1);
                            var3 = _closure1_slot25;
                            var2 = var1.id;
                            var1 = true;
                            var3[var2] = var1;
                        case 55:
                            return var0;
                    }
                };
                var4 = var5.bind(var6)(var4);
            case 234:
                _closure1_slot23 = var3;
                var1 = function arg0() {
                    var2 = arg0;
                    var0 = {};
                    _closure1_slot24 = var0;
                    var1 = var2.forEach;
                    var0 = function(arg0) { // Environment: var0
                        _fun69237: for (var _fun69237_ip = 0;;) switch (_fun69237_ip) {
                            case 0:
                                var1 = arg0;
                                var3 = _closure1_slot24;
                                var2 = var1.getChannelId;
                                var2 = var2.bind(var1)();
                                var3 = var3[var2];
                                var2 = null;
                                if (!(var2 == var3)) {
                                    _fun69237_ip = 50;
                                    continue _fun69237
                                }
                            case 30:
                                var4 = _closure1_slot24;
                                var2 = var1.getChannelId;
                                var3 = var2.bind(var1)();
                                var2 = 0;
                                var4[var3] = var2;
                            case 50:
                                var2 = _closure1_slot24;
                                var0 = var1.getChannelId;
                                var1 = var0.bind(var1)();
                                var0 = var2[var1];
                                var0 = var0 + 1;
                                var2[var1] = var0;
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var1 = var1.bind(var0)(var3);
                var1 = _closure1_slot23;
                var3 = var1.length;
                var1 = 0;
                if (!(var1 === var3)) {
                    _fun69233_ip = 271;
                    continue _fun69233
                }
            case 265:
                var1 = false;
                _closure1_slot29 = var1;
            case 271:
                return var0;
        }
    };
    var _closure1_slot38 = var14;
    var13 = function() {
        var0 = new Array(0);
        _closure1_slot23 = var0;
        var0 = {};
        _closure1_slot25 = var0;
        var0 = false;
        _closure1_slot29 = var0;
        _closure1_slot31 = var0;
        var0 = {};
        _closure1_slot24 = var0;
        var0 = undefined;
        return var0;
    };
    var _closure1_slot39 = var13;
    var10 = function() {
        var4 = _closure1_slot33;
        var3 = {};
        var6 = _closure1_slot1;
        var5 = _closure1_slot2;
        var0 = 19;
        var5 = var5[var0];
        var0 = undefined;
        var8 = var6.bind(var0)(var5);
        var7 = var8.filter;
        var6 = _closure1_slot23;
        var5 = function(arg0) { // Environment: var1
            var2 = _closure1_slot13;
            var1 = var2.isBlockedOrIgnoredForMessage;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var5 = var7.bind(var8)(var6, var5);
        var3.deletedMessages = var5;
        var3 = var4.bind(var0)(var3);
        var4 = _closure1_slot23;
        var3 = var4.filter;
        var1 = function(arg0) { // Environment: var1
            var2 = _closure1_slot13;
            var1 = var2.isBlockedOrIgnoredForMessage;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            var0 = !var0;
            return var0;
        };
        var1 = var3.bind(var4)(var1);
        _closure1_slot23 = var1;
        return var0;
    };
    var11 = function arg0() {
        var0 = arg0;
        var0 = var0.channel;
        var _closure2_slot0 = var0;
        var3 = new Array(0);
        var _closure2_slot1 = var3;
        var5 = _closure1_slot1;
        var4 = _closure1_slot2;
        var0 = 19;
        var4 = var4[var0];
        var0 = undefined;
        var6 = var5.bind(var0)(var4);
        var5 = var6.filter;
        var4 = _closure1_slot23;
        var2 = function(arg0) { // Environment: var2
            _fun69243: for (var _fun69243_ip = 0;;) switch (_fun69243_ip) {
                case 0:
                    var3 = arg0;
                    var2 = var3.channel_id;
                    var0 = _closure2_slot0;
                    var0 = var0.id;
                    var0 = var2 !== var0;
                    if (var0) {
                        _fun69243_ip = 59;
                        continue _fun69243
                    }
                case 27:
                    var4 = _closure1_slot25;
                    var2 = var3.id;
                    var2 = delete var4[var2];
                    var2 = _closure2_slot1;
                    var1 = var2.push;
                    var1 = var1.bind(var2)(var3);
                    var0 = false;
                case 59:
                    return var0;
            }
        };
        var2 = var5.bind(var6)(var4, var2);
        _closure1_slot23 = var2;
        var2 = _closure1_slot33;
        var1 = {};
        var1.deletedMessages = var3;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var0 = global;
    var16 = var0.Object;
    var9 = var16.defineProperty;
    var4 = {};
    var15 = true;
    var4.value = var15;
    var0 = '__esModule';
    var0 = var9.bind(var16)(var2, var0, var4);
    var9 = 0;
    var4 = var7[var9];
    var0 = undefined;
    var4 = var8.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var7[var4];
    var4 = var8.bind(var0)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var7[var4];
    var4 = var8.bind(var0)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var7[var4];
    var4 = var8.bind(var0)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var7[var4];
    var4 = var8.bind(var0)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var7[var4];
    var4 = var8.bind(var0)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var7[var4];
    var4 = var8.bind(var0)(var4);
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var7[var4];
    var4 = var8.bind(var0)(var4);
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var7[var4];
    var4 = var8.bind(var0)(var4);
    var _closure1_slot11 = var4;
    var4 = 9;
    var4 = var7[var4];
    var4 = var8.bind(var0)(var4);
    var _closure1_slot12 = var4;
    var4 = 10;
    var4 = var7[var4];
    var4 = var8.bind(var0)(var4);
    var _closure1_slot13 = var4;
    var4 = 11;
    var4 = var7[var4];
    var4 = var8.bind(var0)(var4);
    var _closure1_slot14 = var4;
    var4 = 12;
    var4 = var7[var4];
    var4 = var8.bind(var0)(var4);
    var _closure1_slot15 = var4;
    var4 = 13;
    var4 = var7[var4];
    var4 = var8.bind(var0)(var4);
    var _closure1_slot16 = var4;
    var4 = 14;
    var4 = var7[var4];
    var4 = var6.bind(var0)(var4);
    var19 = var4.RecentMentionsFilters;
    var _closure1_slot17 = var19;
    var16 = var4.ChannelTypes;
    var _closure1_slot18 = var16;
    var16 = var4.MessageTypesSets;
    var _closure1_slot19 = var16;
    var16 = var4.UserNotificationSettings;
    var _closure1_slot20 = var16;
    var4 = var4.ChannelTypesSets;
    var _closure1_slot21 = var4;
    var18 = 'recentMentionFilterSettings';
    var _closure1_slot22 = var18;
    var4 = new Array(0);
    var _closure1_slot23 = var4;
    var4 = {};
    var _closure1_slot24 = var4;
    var4 = {};
    var _closure1_slot25 = var4;
    var4 = false;
    var _closure1_slot26 = var4;
    var _closure1_slot27 = var15;
    var15 = 15;
    var15 = var7[var15];
    var15 = var6.bind(var0)(var15);
    var17 = var15.Storage;
    var16 = var17.get;
    var15 = {
        'guildFilter': null,
        'everyoneFilter': true,
        'roleFilter': true
    };
    var19 = var19.ALL_SERVERS;
    var15.guildFilter = var19;
    var15 = var16.bind(var17)(var18, var15);
    var _closure1_slot28 = var15;
    var _closure1_slot29 = var4;
    var _closure1_slot30 = var9;
    var _closure1_slot31 = var4;
    var4 = 23;
    var4 = var7[var4];
    var4 = var8.bind(var0)(var4);
    var9 = var4.Store;
    var4 = function(arg0) { // Environment: var5
        var3 = function() {
            _fun69245: for (var _fun69245_ip = 0;;) switch (_fun69245_ip) {
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
                    var0 = _closure1_slot32;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun69245_ip = 69;
                        continue _fun69245
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun69245_ip = 105;
                    continue _fun69245;
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
        var0 = function() {
            var9 = this;
            var8 = var9.waitFor;
            var17 = _closure1_slot9;
            var16 = _closure1_slot10;
            var15 = _closure1_slot11;
            var14 = _closure1_slot12;
            var13 = _closure1_slot13;
            var12 = _closure1_slot14;
            var11 = _closure1_slot15;
            var10 = _closure1_slot16;
            var18 = var9;
            var0 = var18[var8](var17, var16, var15, var14, var13, var12, var11, var10, var9);
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(14);
        var0[0] = var4;
        var4 = {};
        var6 = 'hasLoadedEver';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot29;
            return var0;
        };
        var4.get = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'lastLoaded';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot30;
            return var0;
        };
        var4.get = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'getMentions';
        var4.key = var6;
        var6 = function() {
            _fun69249: for (var _fun69249_ip = 0;;) switch (_fun69249_ip) {
                case 0:
                    var0 = _closure1_slot29;
                    if (var0) {
                        _fun69249_ip = 30;
                        continue _fun69249
                    }
                case 10:
                    var0 = _closure1_slot23;
                    var2 = var0.length;
                    var0 = 0;
                    var2 = var2 > var0;
                    var0 = null;
                    if (!var2) {
                        _fun69249_ip = 34;
                        continue _fun69249
                    }
                case 30:
                    var0 = _closure1_slot23;
                case 34:
                    return var0;
            }
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'getSettingsFilteredMentions';
        var4.key = var6;
        var6 = function() {
            _fun69250: for (var _fun69250_ip = 0;;) switch (_fun69250_ip) {
                case 0:
                    var0 = _closure1_slot29;
                    if (var0) {
                        _fun69250_ip = 30;
                        continue _fun69250
                    }
                case 10:
                    var0 = _closure1_slot23;
                    var2 = var0.length;
                    var0 = 0;
                    var2 = var2 > var0;
                    var0 = null;
                    if (!var2) {
                        _fun69250_ip = 48;
                        continue _fun69250
                    }
                case 30:
                    var3 = _closure1_slot23;
                    var2 = var3.filter;
                    var1 = _closure1_slot35;
                    var0 = var2.bind(var3)(var1);
                case 48:
                    return var0;
            }
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'hasMention';
        var4.key = var6;
        var6 = function arg0() {
            var1 = _closure1_slot25;
            var0 = arg0;
            var0 = var1[var0];
            return var0;
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'loading';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot26;
            return var0;
        };
        var4.get = var6;
        var0[6] = var4;
        var4 = {};
        var6 = 'hasMore';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot27;
            return var0;
        };
        var4.get = var6;
        var0[7] = var4;
        var4 = {};
        var6 = 'guildFilter';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot28;
            var0 = var0.guildFilter;
            return var0;
        };
        var4.get = var6;
        var0[8] = var4;
        var4 = {};
        var6 = 'everyoneFilter';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot28;
            var0 = var0.everyoneFilter;
            return var0;
        };
        var4.get = var6;
        var0[9] = var4;
        var4 = {};
        var6 = 'roleFilter';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot28;
            var0 = var0.roleFilter;
            return var0;
        };
        var4.get = var6;
        var0[10] = var4;
        var4 = {};
        var6 = 'mentionsAreStale';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot31;
            return var0;
        };
        var4.get = var6;
        var0[11] = var4;
        var4 = {};
        var6 = 'mentionCountByChannel';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot24;
            return var0;
        };
        var4.get = var6;
        var0[12] = var4;
        var4 = {};
        var6 = 'getMentionCountForChannel';
        var4.key = var6;
        var5 = function arg0() {
            _fun69259: for (var _fun69259_ip = 0;;) switch (_fun69259_ip) {
                case 0:
                    var1 = _closure1_slot24;
                    var0 = arg0;
                    var1 = var1[var0];
                    var0 = null;
                    var2 = var0 != var1;
                    var0 = 0;
                    if (!var2) {
                        _fun69259_ip = 28;
                        continue _fun69259
                    }
                case 25:
                    var0 = var1;
                case 28:
                    return var0;
            }
        };
        var4.value = var5;
        var0[13] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var9 = var4.bind(var0)(var9);
    var4 = 'RecentMentionsStore';
    var9.displayName = var4;
    var4 = 24;
    var4 = var7[var4];
    var22 = var8.bind(var0)(var4);
    var4 = {};
    var15 = function arg0() {
        _fun69260: for (var _fun69260_ip = 0;;) switch (_fun69260_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.guildId;
                var1 = true;
                _closure1_slot26 = var1;
                var1 = null;
                var1 = var1 == var2;
                if (!var1) {
                    _fun69260_ip = 50;
                    continue _fun69260
                }
            case 26:
                var2 = _closure1_slot28;
                var3 = var2.guildFilter;
                var2 = _closure1_slot17;
                var2 = var2.THIS_SERVER;
                var1 = var3 === var2;
            case 50:
                if (!var1) {
                    _fun69260_ip = 81;
                    continue _fun69260
                }
            case 53:
                var2 = _closure1_slot38;
                var1 = {};
                var0 = _closure1_slot17;
                var0 = var0.ALL_SERVERS;
                var1.guildFilter = var0;
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
            case 81:
                var0 = undefined;
                return var0;
        }
    };
    var4.LOAD_RECENT_MENTIONS = var15;
    var15 = function arg0() {
        _fun69261: for (var _fun69261_ip = 0;;) switch (_fun69261_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.hasMoreAfter;
                var8 = var0.messages;
                var4 = var0.isAfter;
                var6 = _closure1_slot1;
                var0 = _closure1_slot2;
                var3 = 19;
                var5 = var0[var3];
                var0 = undefined;
                var7 = var6.bind(var0)(var5);
                var6 = var7.map;
                var5 = _closure1_slot34;
                var7 = var6.bind(var7)(var8, var5);
                var6 = _closure1_slot33;
                var5 = {};
                var5.addedMessages = var7;
                var5 = var6.bind(var0)(var5);
                if (var4) {
                    _fun69261_ip = 92;
                    continue _fun69261
                }
            case 80:
                _closure1_slot23 = var7;
                var4 = {};
                _closure1_slot25 = var4;
                _fun69261_ip = 110;
                continue _fun69261;
            case 92:
                var5 = _closure1_slot23;
                var4 = var5.concat;
                var4 = var4.bind(var5)(var7);
                _closure1_slot23 = var4;
            case 110:
                var5 = _closure1_slot1;
                var4 = _closure1_slot2;
                var3 = var4[var3];
                var6 = var5.bind(var0)(var3);
                var5 = var6.forEach;
                var3 = function(arg0) { // Environment: var3
                    var2 = _closure1_slot25;
                    var0 = arg0;
                    var1 = var0.id;
                    var0 = true;
                    var2[var1] = var0;
                    var0 = undefined;
                    return var0;
                };
                var3 = var5.bind(var6)(var7, var3);
                var3 = false;
                _closure1_slot26 = var3;
                _closure1_slot27 = var1;
                var3 = _closure1_slot0;
                var1 = 20;
                var1 = var4[var1];
                var3 = var3.bind(var0)(var1);
                var1 = var3.now;
                var1 = var1.bind(var3)();
                _closure1_slot30 = var1;
                var1 = true;
                _closure1_slot29 = var1;
                return var0;
        }
    };
    var4.LOAD_RECENT_MENTIONS_SUCCESS = var15;
    var15 = function() {
        var0 = false;
        _closure1_slot26 = var0;
        var0 = undefined;
        return var0;
    };
    var4.LOAD_RECENT_MENTIONS_FAILURE = var15;
    var4.SET_RECENT_MENTIONS_FILTER = var14;
    var14 = function() {
        var1 = _closure1_slot39;
        var0 = undefined;
        var1 = var1.bind(var0)();
        return var0;
    };
    var4.CLEAR_MENTIONS = var14;
    var14 = function arg0() {
        _fun69265: for (var _fun69265_ip = 0;;) switch (_fun69265_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.size;
                var3 = _closure1_slot33;
                var1 = {};
                var4 = _closure1_slot23;
                var0 = var4.slice;
                var0 = var0.bind(var4)(var6);
                var1.deletedMessages = var0;
                var0 = undefined;
                var1 = var3.bind(var0)(var1);
                var1 = _closure1_slot23;
                var1 = var1.length;
                var3 = var6;
                if (!(var3 < var1)) {
                    _fun69265_ip = 96;
                    continue _fun69265
                }
            case 59:
                var4 = _closure1_slot25;
                var1 = _closure1_slot23;
                var1 = var1[var3];
                var1 = var1.id;
                var1 = delete var4[var1];
                var3 = var3 + 1;
                var1 = _closure1_slot23;
                var1 = var1.length;
                if (var3 < var1) {
                    _fun69265_ip = 59;
                    continue _fun69265
                }
            case 96:
                var1 = _closure1_slot23;
                var3 = var1.length;
                var5 = _closure1_slot23;
                var4 = var5.slice;
                var1 = 0;
                var1 = var4.bind(var5)(var1, var6);
                _closure1_slot23 = var1;
                var1 = var1.length;
                if (!(var3 > var1)) {
                    _fun69265_ip = 141;
                    continue _fun69265
                }
            case 135:
                var1 = true;
                _closure1_slot27 = var1;
            case 141:
                return var0;
        }
    };
    var4.TRUNCATE_MENTIONS = var14;
    var14 = function() {
        _fun69266: for (var _fun69266_ip = 0;;) switch (_fun69266_ip) {
            case 0:
                var0 = _closure1_slot28;
                var2 = var0.guildFilter;
                var0 = _closure1_slot17;
                var0 = var0.THIS_SERVER;
                if (!(var2 === var0)) {
                    _fun69266_ip = 37;
                    continue _fun69266
                }
            case 27:
                var0 = false;
                _closure1_slot29 = var0;
                var0 = undefined;
                return var0;
            case 37:
                var0 = false;
                return var0;
        }
    };
    var4.CHANNEL_SELECT = var14;
    var4.CONNECTION_OPEN = var13;
    var13 = function arg0() {
        var0 = arg0;
        var0 = var0.guild;
        var _closure2_slot0 = var0;
        var3 = new Array(0);
        var _closure2_slot1 = var3;
        var5 = _closure1_slot1;
        var4 = _closure1_slot2;
        var0 = 19;
        var4 = var4[var0];
        var0 = undefined;
        var6 = var5.bind(var0)(var4);
        var5 = var6.filter;
        var4 = _closure1_slot23;
        var2 = function(arg0) { // Environment: var2
            _fun69268: for (var _fun69268_ip = 0;;) switch (_fun69268_ip) {
                case 0:
                    var3 = arg0;
                    var4 = _closure1_slot10;
                    var2 = var4.getChannel;
                    var0 = var3.channel_id;
                    var4 = var2.bind(var4)(var0);
                    var0 = null;
                    var0 = var0 != var4;
                    if (!var0) {
                        _fun69268_ip = 60;
                        continue _fun69268
                    }
                case 34:
                    var2 = var4.getGuildId;
                    var4 = var2.bind(var4)();
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var0 = var4 !== var2;
                case 60:
                    if (var0) {
                        _fun69268_ip = 95;
                        continue _fun69268
                    }
                case 63:
                    var2 = _closure1_slot25;
                    var1 = var3.id;
                    var1 = delete var2[var1];
                    var2 = _closure2_slot1;
                    var1 = var2.push;
                    var1 = var1.bind(var2)(var3);
                    var0 = false;
                case 95:
                    return var0;
            }
        };
        var2 = var5.bind(var6)(var4, var2);
        _closure1_slot23 = var2;
        var2 = _closure1_slot33;
        var1 = {};
        var1.deletedMessages = var3;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var4.GUILD_DELETE = var13;
    var13 = function arg0() {
        _fun69269: for (var _fun69269_ip = 0;;) switch (_fun69269_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.channelId;
                var5 = var0.message;
                var1 = _closure1_slot16;
                var0 = var1.getCurrentUser;
                var0 = var0.bind(var1)();
                var3 = null;
                if (!(var3 != var0)) {
                    _fun69269_ip = 187;
                    continue _fun69269
                }
            case 38:
                var7 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 18;
                var4 = var4[var1];
                var1 = undefined;
                var8 = var7.bind(var1)(var4);
                var7 = var8.isRawMessageMentioned;
                var4 = {};
                var4.rawMessage = var5;
                var0 = var0.id;
                var4.userId = var0;
                var0 = false;
                var4.suppressRoles = var0;
                var4.suppressEveryone = var0;
                var4 = var7.bind(var8)(var4);
                if (!var4) {
                    _fun69269_ip = 187;
                    continue _fun69269
                }
            case 102:
                var4 = _closure1_slot36;
                var5 = var4.bind(var1)(var5, var6);
                if (!(var3 != var5)) {
                    _fun69269_ip = 185;
                    continue _fun69269
                }
            case 116:
                var4 = _closure1_slot23;
                var3 = var4.slice;
                var4 = var3.bind(var4)();
                _closure1_slot23 = var4;
                var3 = var4.unshift;
                var3 = var3.bind(var4)(var5);
                var6 = _closure1_slot25;
                var4 = var5.id;
                var3 = true;
                var6[var4] = var3;
                var3 = _closure1_slot33;
                var2 = {};
                var4 = new Array(1);
                var4[0] = var5;
                var2.addedMessages = var4;
                var2 = var3.bind(var1)(var2);
                return var1;
            case 185:
                return var0;
            case 187:
                var0 = false;
                return var0;
        }
    };
    var4.MESSAGE_CREATE = var13;
    var13 = function arg0() {
        _fun69270: for (var _fun69270_ip = 0;;) switch (_fun69270_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.message;
                var5 = var0.id;
                var _closure2_slot0 = var5;
                var2 = null;
                if (!(var2 != var5)) {
                    _fun69270_ip = 160;
                    continue _fun69270
                }
            case 28:
                var0 = _closure1_slot25;
                var0 = var0[var5];
                if (!(var2 != var0)) {
                    _fun69270_ip = 160;
                    continue _fun69270
                }
            case 43:
                var6 = _closure1_slot1;
                var5 = _closure1_slot2;
                var0 = 19;
                var5 = var5[var0];
                var0 = undefined;
                var7 = var6.bind(var0)(var5);
                var6 = var7.findIndex;
                var5 = _closure1_slot23;
                var3 = function(arg0) { // Environment: var3
                    var0 = arg0;
                    var1 = var0.id;
                    var0 = _closure2_slot0;
                    var0 = var1 === var0;
                    return var0;
                };
                var3 = var6.bind(var7)(var5, var3);
                var6 = _closure1_slot23;
                var5 = var6.slice;
                var5 = var5.bind(var6)();
                _closure1_slot23 = var5;
                var6 = var5[var3];
                if (!(var2 != var6)) {
                    _fun69270_ip = 158;
                    continue _fun69270
                }
            case 113:
                var2 = _closure1_slot23;
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var4 = 16;
                var4 = var7[var4];
                var5 = var5.bind(var0)(var4);
                var4 = var5.updateMessageRecord;
                var1 = var1.message;
                var1 = var4.bind(var5)(var6, var1);
                var2[var3] = var1;
            case 158:
                return var0;
            case 160:
                var0 = false;
                return var0;
        }
    };
    var4.MESSAGE_UPDATE = var13;
    var4.MESSAGE_DELETE = var12;
    var4.RECENT_MENTION_DELETE = var12;
    var12 = function arg0() {
        var0 = arg0;
        var4 = var0.ids;
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var0 = 19;
        var2 = var2[var0];
        var0 = undefined;
        var3 = var3.bind(var0)(var2);
        var2 = var3.forEach;
        var1 = _closure1_slot37;
        var1 = var2.bind(var3)(var4, var1);
        return var0;
    };
    var4.MESSAGE_DELETE_BULK = var12;
    var4.CHANNEL_DELETE = var11;
    var4.THREAD_DELETE = var11;
    var4.RELATIONSHIP_ADD = var10;
    var4.RELATIONSHIP_REMOVE = var10;
    var4.RELATIONSHIP_UPDATE = var10;
    var5 = function() {
        var0 = true;
        _closure1_slot31 = var0;
        var0 = undefined;
        return var0;
    };
    var4.SET_RECENT_MENTIONS_STALE = var5;
    var5 = var9.prototype;
    var5 = Object.create(var5, {
        constructor: {
            value: var9
        }
    });
    var23 = var5;
    var21 = var4;
    var4 = new var23[var9](var22, var21, var20);
    var4 = var4 instanceof Object ? var4 : var5;
    var5 = 25;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/recents/RecentMentionsStore.tsx';
    var5 = var6.bind(var7)(var5);
    var2.default = var4;
    var2.hasMentionNotificationEnabled = var3;
    var2.parseMessage = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 3101, 1216, 1372, 4249, 3947, 3100, 3213, 4303, 1621, 660, 587, 3971, 4551, 3989, 22, 3529, 6693, 8661, 566, 806, 2]);