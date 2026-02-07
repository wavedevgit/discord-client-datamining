// modules/gateway/dispatchSocketMessage.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var8 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var8;
    var0 = metroImportAll;
    var _closure1_slot2 = var0;
    var _closure1_slot3 = var5;
    var0 = function arg0, arg1() {
        _fun95484: for (var _fun95484_ip = 0;;) switch (_fun95484_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun95484_ip = 46;
                    continue _fun95484
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun95484_ip = 55;
                    continue _fun95484
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun95484_ip = 345;
                    continue _fun95484
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun95484_ip = 323;
                    continue _fun95484
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun95484_ip = 283;
                    continue _fun95484
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun95484_ip = 270;
                    continue _fun95484
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
                    _fun95484_ip = 163;
                    continue _fun95484
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun95484_ip = 179;
                    continue _fun95484
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun95484_ip = 249;
                    continue _fun95484
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun95484_ip = 249;
                    continue _fun95484
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun95484_ip = 234;
                    continue _fun95484
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun95484_ip = 247;
                    continue _fun95484
                }
            case 234:
                var8 = _closure1_slot25;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun95484_ip = 265;
                continue _fun95484;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun95484_ip = 283;
                continue _fun95484;
            case 270:
                var6 = _closure1_slot25;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun95484_ip = 323;
                    continue _fun95484
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
                    _fun95484_ip = 330;
                    continue _fun95484
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun95485: for (var _fun95485_ip = 0;;) switch (_fun95485_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun95485_ip = 56;
                                continue _fun95485
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
                            _fun95485_ip = 67;
                            continue _fun95485;
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
    var _closure1_slot24 = var0;
    var0 = function arg0, arg1() {
        _fun95486: for (var _fun95486_ip = 0;;) switch (_fun95486_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun95486_ip = 23;
                    continue _fun95486
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun95486_ip = 33;
                    continue _fun95486
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
                    _fun95486_ip = 70;
                    continue _fun95486
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun95486_ip = 55;
                    continue _fun95486
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot25 = var0;
    var0 = function arg0() {
        var2 = arg0;
        var1 = var2.map;
        var0 = function(arg0) { // Environment: var0
            _fun95488: for (var _fun95488_ip = 0;;) switch (_fun95488_ip) {
                case 0:
                    var2 = arg0;
                    var0 = var2.timestamps;
                    var1 = null;
                    var3 = var1 == var0;
                    var5 = undefined;
                    if (var3) {
                        _fun95488_ip = 25;
                        continue _fun95488
                    }
                case 20:
                    var5 = var0.end;
                case 25:
                    var4 = var2.created_at;
                    var0 = var2;
                    if (!(var1 != var5)) {
                        _fun95488_ip = 122;
                        continue _fun95488
                    }
                case 38:
                    var0 = var2;
                    if (!(var1 != var4)) {
                        _fun95488_ip = 122;
                        continue _fun95488
                    }
                case 45:
                    var1 = {};
                    var8 = var1;
                    var7 = var2;
                    var3 = copyDataProperties(var8, var7);
                    var3 = {};
                    var7 = var2.timestamps;
                    var8 = var3;
                    var6 = copyDataProperties(var8, var7);
                    var4 = var5 > var4;
                    if (!var4) {
                        _fun95488_ip = 101;
                        continue _fun95488
                    }
                case 79:
                    var5 = var2.type;
                    var2 = _closure1_slot17;
                    var2 = var2.LISTENING;
                    var4 = var5 !== var2;
                case 101:
                    var2 = 'isCountDown';
                    var3[var2] = var4;
                    var2 = 'timestamps';
                    var1[var2] = var3;
                    var0 = var1;
                case 122:
                    return var0;
            }
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot26 = var0;
    var7 = function arg0, arg1() {
        _fun95489: for (var _fun95489_ip = 0;;) switch (_fun95489_ip) {
            case 0:
                var5 = arg1;
                var2 = _closure1_slot24;
                var0 = undefined;
                var1 = arg0;
                var3 = var2.bind(var0)(var1);
                var2 = var3.bind(var0)();
                var1 = var2.done;
                if (var1) {
                    _fun95489_ip = 80;
                    continue _fun95489
                }
            case 34:
                var8 = var2.value;
                var7 = _closure1_slot23;
                var1 = {};
                var9 = function() {
                    var0 = null;
                    return var0;
                };
                var1.preload = var9;
                var1.dispatch = var5;
                var7[var8] = var1;
                var7 = var3.bind(var0)();
                var1 = var7.done;
                var2 = var7;
                if (!var1) {
                    _fun95489_ip = 34;
                    continue _fun95489
                }
            case 80:
                return var0;
        }
    };
    var9 = function arg0, arg1, arg2() {
        _fun95491: for (var _fun95491_ip = 0;;) switch (_fun95491_ip) {
            case 0:
                var6 = arg1;
                var5 = arg2;
                var2 = _closure1_slot24;
                var0 = undefined;
                var1 = arg0;
                var3 = var2.bind(var0)(var1);
                var2 = var3.bind(var0)();
                var1 = var2.done;
                if (var1) {
                    _fun95491_ip = 74;
                    continue _fun95491
                }
            case 35:
                var8 = var2.value;
                var7 = _closure1_slot23;
                var1 = {};
                var1.preload = var6;
                var1.dispatch = var5;
                var7[var8] = var1;
                var7 = var3.bind(var0)();
                var1 = var7.done;
                var2 = var7;
                if (!var1) {
                    _fun95491_ip = 35;
                    continue _fun95491
                }
            case 74:
                return var0;
        }
    };
    var0 = function arg0() {
        _fun95492: for (var _fun95492_ip = 0;;) switch (_fun95492_ip) {
            case 0:
                var3 = new Array(0);
                var4 = _closure1_slot24;
                var0 = undefined;
                var2 = arg0;
                var7 = var4.bind(var0)(var2);
                var4 = var7.bind(var0)();
                var2 = var4.done;
                var6 = null;
                if (var2) {
                    _fun95492_ip = 318;
                    continue _fun95492
                }
            case 38:
                var9 = var4.value;
                var2 = var9.member;
                if (!(var6 != var2)) {
                    _fun95492_ip = 86;
                    continue _fun95492
                }
            case 53:
                var11 = _closure1_slot29;
                var10 = var9.guild_id;
                var2 = var9.member;
                var8 = var2.user;
                var2 = var9.member;
                var2 = var11.bind(var0)(var10, var8, var2);
            case 86:
                var8 = var3.push;
                var2 = {};
                var10 = var9.user_id;
                var2.userId = var10;
                var10 = var9.guild_id;
                var2.guildId = var10;
                var10 = var9.session_id;
                var2.sessionId = var10;
                var10 = var9.channel_id;
                var2.channelId = var10;
                var10 = var9.mute;
                var2.mute = var10;
                var10 = var9.deaf;
                var2.deaf = var10;
                var10 = var9.self_mute;
                var2.selfMute = var10;
                var10 = var9.self_deaf;
                var2.selfDeaf = var10;
                var10 = var9.self_video;
                if (var10) {
                    _fun95492_ip = 187;
                    continue _fun95492
                }
            case 185:
                var10 = false;
            case 187:
                var2.selfVideo = var10;
                var10 = var9.suppress;
                var2.suppress = var10;
                var10 = var9.self_stream;
                if (var10) {
                    _fun95492_ip = 214;
                    continue _fun95492
                }
            case 212:
                var10 = false;
            case 214:
                var2.selfStream = var10;
                var11 = var9.request_to_speak_timestamp;
                var12 = var6 != var11;
                var10 = null;
                if (!var12) {
                    _fun95492_ip = 237;
                    continue _fun95492
                }
            case 234:
                var10 = var11;
            case 237:
                var2.requestToSpeakTimestamp = var10;
                var11 = var9.discoverable;
                var10 = var6 == var11;
                if (var10) {
                    _fun95492_ip = 258;
                    continue _fun95492
                }
            case 255:
                var10 = var11;
            case 258:
                var2.discoverable = var10;
                var12 = _closure1_slot14;
                var11 = var12.getUserVoiceChannelId;
                var10 = var9.guild_id;
                var9 = var9.user_id;
                var9 = var11.bind(var12)(var10, var9);
                var2.oldChannelId = var9;
                var2 = var8.bind(var3)(var2);
                var8 = var7.bind(var0)();
                var2 = var8.done;
                var4 = var8;
                if (!var2) {
                    _fun95492_ip = 38;
                    continue _fun95492
                }
            case 318:
                var2 = _closure1_slot28;
                var1 = {};
                var4 = 'VOICE_STATE_UPDATES';
                var1.type = var4;
                var1.voiceStates = var3;
                var1 = var2.bind(var0)(var1);
                return var0;
        }
    };
    var _closure1_slot27 = var0;
    var0 = function arg0() {
        var4 = arg0;
        var _closure2_slot0 = var4;
        var3 = _closure1_slot1;
        var2 = _closure1_slot3;
        var0 = 21;
        var2 = var2[var0];
        var0 = undefined;
        var3 = var3.bind(var0)(var2);
        var2 = var3.dispatch;
        var3 = var2.bind(var3)(var4);
        var2 = var3.catch;
        var1 = function(arg0) { // Environment: var1
            var2 = _closure1_slot0;
            var1 = _closure1_slot3;
            var0 = 14;
            var1 = var1[var0];
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            var2 = var0.socket;
            var1 = var2.resetSocketOnDispatchError;
            var0 = {};
            var3 = arg0;
            var0.error = var3;
            var3 = _closure2_slot0;
            var3 = var3.type;
            var0.action = var3;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var _closure1_slot28 = var0;
    var0 = function arg0, arg1, arg2() {
        _fun95495: for (var _fun95495_ip = 0;;) switch (_fun95495_ip) {
            case 0:
                var16 = arg0;
                var15 = arg1;
                var0 = arg2;
                var14 = var0.roles;
                var13 = var0.nick;
                var12 = var0.avatar;
                var11 = var0.avatar_decoration_data;
                var5 = var0.flags;
                var10 = var0.premium_since;
                var9 = var0.pending;
                var8 = var0.joined_at;
                var7 = var0.communication_disabled_until;
                var6 = var0.unusual_dm_activity_until;
                var4 = var0.collectibles;
                var18 = var0.display_name_styles;
                var3 = _closure1_slot11;
                var2 = var3.getMember;
                var0 = var15.id;
                var17 = var2.bind(var3)(var16, var0);
                var3 = _closure1_slot0;
                var2 = _closure1_slot3;
                var0 = 25;
                var2 = var2[var0];
                var0 = undefined;
                var3 = var3.bind(var0)(var2);
                var2 = var3.parseServerDisplayNameStyles;
                var3 = var2.bind(var3)(var18);
                var20 = null;
                var2 = var20 != var17;
                if (!var2) {
                    _fun95495_ip = 156;
                    continue _fun95495
                }
            case 146:
                var18 = var17.nick;
                var2 = var18 === var13;
            case 156:
                if (!var2) {
                    _fun95495_ip = 169;
                    continue _fun95495
                }
            case 159:
                var18 = var17.avatar;
                var2 = var18 === var12;
            case 169:
                if (!var2) {
                    _fun95495_ip = 210;
                    continue _fun95495
                }
            case 172:
                var19 = _closure1_slot1;
                var21 = _closure1_slot3;
                var18 = 22;
                var18 = var21[var18];
                var21 = var19.bind(var0)(var18);
                var19 = var21.isEqual;
                var18 = var17.roles;
                var2 = var19.bind(var21)(var18, var14);
            case 210:
                if (!var2) {
                    _fun95495_ip = 275;
                    continue _fun95495
                }
            case 213:
                var19 = _closure1_slot0;
                var21 = _closure1_slot3;
                var18 = 34;
                var18 = var21[var18];
                var22 = var19.bind(var0)(var18);
                var21 = var22.isEqualAvatarDecoration;
                var18 = var17.avatarDecoration;
                var23 = var20 != var18;
                var19 = null;
                if (!var23) {
                    _fun95495_ip = 257;
                    continue _fun95495
                }
            case 254:
                var19 = var18;
            case 257:
                var23 = var20 != var11;
                var18 = null;
                if (!var23) {
                    _fun95495_ip = 269;
                    continue _fun95495
                }
            case 266:
                var18 = var11;
            case 269:
                var2 = var21.bind(var22)(var19, var18);
            case 275:
                if (!var2) {
                    _fun95495_ip = 288;
                    continue _fun95495
                }
            case 278:
                var18 = var17.premiumSince;
                var2 = var18 === var10;
            case 288:
                if (!var2) {
                    _fun95495_ip = 301;
                    continue _fun95495
                }
            case 291:
                var18 = var17.isPending;
                var2 = var18 === var9;
            case 301:
                if (!var2) {
                    _fun95495_ip = 314;
                    continue _fun95495
                }
            case 304:
                var18 = var17.joinedAt;
                var2 = var18 === var8;
            case 314:
                if (!var2) {
                    _fun95495_ip = 327;
                    continue _fun95495
                }
            case 317:
                var18 = var17.communicationDisabledUntil;
                var2 = var18 === var7;
            case 327:
                if (!var2) {
                    _fun95495_ip = 339;
                    continue _fun95495
                }
            case 330:
                var18 = var17.flags;
                var2 = var18 === var5;
            case 339:
                if (!var2) {
                    _fun95495_ip = 376;
                    continue _fun95495
                }
            case 342:
                var18 = var17.unusualDMActivityUntil;
                var21 = var20 != var18;
                var19 = null;
                if (!var21) {
                    _fun95495_ip = 360;
                    continue _fun95495
                }
            case 357:
                var19 = var18;
            case 360:
                var21 = var20 != var6;
                var18 = null;
                if (!var21) {
                    _fun95495_ip = 372;
                    continue _fun95495
                }
            case 369:
                var18 = var6;
            case 372:
                var2 = var19 === var18;
            case 376:
                if (!var2) {
                    _fun95495_ip = 441;
                    continue _fun95495
                }
            case 379:
                var19 = _closure1_slot1;
                var21 = _closure1_slot3;
                var18 = 22;
                var18 = var21[var18];
                var22 = var19.bind(var0)(var18);
                var21 = var22.isEqual;
                var18 = var17.collectibles;
                var23 = var20 != var18;
                var19 = null;
                if (!var23) {
                    _fun95495_ip = 423;
                    continue _fun95495
                }
            case 420:
                var19 = var18;
            case 423:
                var23 = var20 != var4;
                var18 = null;
                if (!var23) {
                    _fun95495_ip = 435;
                    continue _fun95495
                }
            case 432:
                var18 = var4;
            case 435:
                var2 = var21.bind(var22)(var19, var18);
            case 441:
                if (!var2) {
                    _fun95495_ip = 506;
                    continue _fun95495
                }
            case 444:
                var19 = _closure1_slot1;
                var21 = _closure1_slot3;
                var18 = 22;
                var18 = var21[var18];
                var19 = var19.bind(var0)(var18);
                var18 = var19.isEqual;
                var21 = var17.displayNameStyles;
                var22 = var20 != var21;
                var17 = null;
                if (!var22) {
                    _fun95495_ip = 488;
                    continue _fun95495
                }
            case 485:
                var17 = var21;
            case 488:
                var21 = var20 != var3;
                var20 = null;
                if (!var21) {
                    _fun95495_ip = 500;
                    continue _fun95495
                }
            case 497:
                var20 = var3;
            case 500:
                var2 = var18.bind(var19)(var17, var20);
            case 506:
                if (var2) {
                    _fun95495_ip = 595;
                    continue _fun95495
                }
            case 509:
                var2 = _closure1_slot28;
                var1 = {};
                var17 = 'GUILD_MEMBER_ADD';
                var1.type = var17;
                var1.guildId = var16;
                var1.user = var15;
                var1.roles = var14;
                var1.nick = var13;
                var1.avatar = var12;
                var1.avatarDecoration = var11;
                var1.premiumSince = var10;
                var1.isPending = var9;
                var1.joinedAt = var8;
                var1.communicationDisabledUntil = var7;
                var1.unusualDMActivityUntil = var6;
                var1.flags = var5;
                var1.collectibles = var4;
                var1.displayNameStyles = var3;
                var1 = var2.bind(var0)(var1);
            case 595:
                return var0;
        }
    };
    var _closure1_slot29 = var0;
    var0 = function arg0() {
        _fun95496: for (var _fun95496_ip = 0;;) switch (_fun95496_ip) {
            case 0:
                var1 = arg0;
                var7 = var1.member;
                var2 = var1.mentions;
                var6 = var1.author;
                var5 = var1.guild_id;
                var _closure2_slot0 = var5;
                var1 = null;
                var3 = var1 != var7;
                if (!var3) {
                    _fun95496_ip = 45;
                    continue _fun95496
                }
            case 41:
                var3 = var1 != var5;
            case 45:
                if (!var3) {
                    _fun95496_ip = 64;
                    continue _fun95496
                }
            case 48:
                var4 = _closure1_slot29;
                var3 = undefined;
                var3 = var4.bind(var3)(var5, var6, var7);
            case 64:
                if (!(var1 != var2)) {
                    _fun95496_ip = 85;
                    continue _fun95496
                }
            case 68:
                var1 = var2.forEach;
                var0 = function(arg0) { // Environment: var0
                    _fun95497: for (var _fun95497_ip = 0;;) switch (_fun95497_ip) {
                        case 0:
                            var4 = arg0;
                            var0 = var4.member;
                            var2 = null;
                            if (!(var2 != var0)) {
                                _fun95497_ip = 57;
                                continue _fun95497
                            }
                        case 15:
                            var1 = _closure2_slot0;
                            if (!(var2 != var1)) {
                                _fun95497_ip = 57;
                                continue _fun95497
                            }
                        case 26:
                            var3 = var4.member;
                            var1 = delete var4.member;
                            var2 = _closure1_slot29;
                            var1 = _closure2_slot0;
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1, var4, var3);
                        case 57:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var1.bind(var2)(var0);
            case 85:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot30 = var0;
    var0 = function arg0() {
        var2 = arg0;
        var1 = var2.map;
        var0 = function(arg0) { // Environment: var0
            _fun95499: for (var _fun95499_ip = 0;;) switch (_fun95499_ip) {
                case 0:
                    var1 = arg0;
                    var0 = {};
                    var2 = var1.session_id;
                    var0.sessionId = var2;
                    var2 = var1.last_modified;
                    var0.lastModified = var2;
                    var2 = var1.status;
                    var0.status = var2;
                    var5 = _closure1_slot26;
                    var4 = var1.activities;
                    var3 = null;
                    if (!(var3 == var4)) {
                        _fun95499_ip = 61;
                        continue _fun95499
                    }
                case 57:
                    var4 = new Array(0);
                case 61:
                    var2 = undefined;
                    var2 = var5.bind(var2)(var4);
                    var0.activities = var2;
                    var2 = var1.hidden_activities;
                    if (!(var3 == var2)) {
                        _fun95499_ip = 87;
                        continue _fun95499
                    }
                case 83:
                    var2 = new Array(0);
                case 87:
                    var0.hiddenActivities = var2;
                    var2 = var1.active;
                    var2 = !var2;
                    var2 = !var2;
                    var0.active = var2;
                    var1 = var1.client_info;
                    var0.clientInfo = var1;
                    return var0;
            }
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot31 = var0;
    var0 = function arg0() {
        _fun95500: for (var _fun95500_ip = 0;;) switch (_fun95500_ip) {
            case 0:
                var0 = arg0;
                var10 = var0.guildId;
                var9 = var0.user;
                var8 = var0.status;
                var7 = var0.activities;
                var5 = var0.hiddenActivities;
                var6 = var0.clientStatus;
                var4 = var0.processedAtTimestamp;
                var3 = _closure1_slot22;
                var2 = var3.add;
                var1 = {};
                var1.guildId = var10;
                var1.user = var9;
                var1.status = var8;
                var1.clientStatus = var6;
                var6 = _closure1_slot26;
                var0 = null;
                if (!(var0 == var7)) {
                    _fun95500_ip = 87;
                    continue _fun95500
                }
            case 83:
                var7 = new Array(0);
            case 87:
                var0 = undefined;
                var6 = var6.bind(var0)(var7);
                var1.activities = var6;
                var1.hiddenActivities = var5;
                var1.processedAtTimestamp = var4;
                var1 = var2.bind(var3)(var1);
                return var0;
        }
    };
    var _closure1_slot32 = var0;
    var0 = ['newly_created'];
    var _closure1_slot4 = var0;
    var0 = global;
    var10 = var0.Object;
    var6 = var10.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var10)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var8.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.createChannelRecordFromServer;
    var _closure1_slot6 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var8.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var8.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 4;
    var6 = var5[var3];
    var6 = var8.bind(var0)(var6);
    var _closure1_slot9 = var6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ChannelLoader;
    var _closure1_slot10 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var8.bind(var0)(var3);
    var _closure1_slot11 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var8.bind(var0)(var3);
    var _closure1_slot12 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var8.bind(var0)(var3);
    var _closure1_slot13 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var8.bind(var0)(var3);
    var _closure1_slot14 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var8.bind(var0)(var3);
    var _closure1_slot15 = var3;
    var3 = 10;
    var3 = var5[var3];
    var3 = var8.bind(var0)(var3);
    var _closure1_slot16 = var3;
    var3 = 11;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ActivityTypes;
    var _closure1_slot17 = var3;
    var3 = 12;
    var3 = var5[var3];
    var10 = var8.bind(var0)(var3);
    var3 = var10.prototype;
    var6 = Object.create(var3, {
        constructor: {
            value: var10
        }
    });
    var17 = 'ConnectionStore';
    var18 = var6;
    var3 = new var18[var10](var17, var16);
    var3 = var3 instanceof Object ? var3 : var6;
    var _closure1_slot18 = var3;
    var6 = 13;
    var3 = var5[var6];
    var14 = var8.bind(var0)(var3);
    var3 = 14;
    var10 = var5[var3];
    var10 = var4.bind(var0)(var10);
    var17 = var10.socket;
    var10 = var14.prototype;
    var11 = Object.create(var10, {
        constructor: {
            value: var14
        }
    });
    var16 = function(arg0, arg1) { // Environment: var1
        _fun95501: for (var _fun95501_ip = 0;;) switch (_fun95501_ip) {
            case 0:
                var0 = arg0;
                var2 = arg1;
                var5 = null;
                if (!(var5 == var0)) {
                    _fun95501_ip = 34;
                    continue _fun95501
                }
            case 12:
                var1 = {};
                var3 = 'CHANNEL_UPDATES';
                var1.type = var3;
                var3 = new Array(0);
                var1.channels = var3;
                var0 = var1;
            case 34:
                var1 = _closure1_slot6;
                var3 = undefined;
                var1 = var1.bind(var3)(var2);
                var6 = _closure1_slot9;
                var4 = var6.getChannel;
                var2 = var2.id;
                var6 = var4.bind(var6)(var2);
                var2 = var5 == var6;
                var4 = undefined;
                if (var2) {
                    _fun95501_ip = 139;
                    continue _fun95501
                }
            case 76:
                var3 = var6.merge;
                var2 = {};
                var10 = var2;
                var9 = var1;
                var7 = copyDataProperties(var10, var9);
                var8 = var6.recipients;
                var7 = 'recipients';
                var2[var7] = var8;
                var8 = var1.bitrate;
                if (!(var5 == var8)) {
                    _fun95501_ip = 125;
                    continue _fun95501
                }
            case 119:
                var8 = var6.bitrate;
            case 125:
                var7 = 'bitrate';
                var2[var7] = var8;
                var4 = var3.bind(var6)(var2);
            case 139:
                var3 = var0.channels;
                var2 = var3.push;
                if (!(var5 != var4)) {
                    _fun95501_ip = 157;
                    continue _fun95501
                }
            case 154:
                var1 = var4;
            case 157:
                var1 = var2.bind(var3)(var1);
                return var0;
        }
    };
    var15 = function(arg0) { // Environment: var1
        var1 = 'CHANNEL_UPDATE';
        var0 = arg0;
        var0 = var1 !== var0;
        return var0;
    };
    var18 = var11;
    var10 = new var18[var14](var17, var16, var15, var14);
    var10 = var10 instanceof Object ? var10 : var11;
    var _closure1_slot19 = var10;
    var10 = var5[var6];
    var14 = var8.bind(var0)(var10);
    var10 = var5[var3];
    var10 = var4.bind(var0)(var10);
    var17 = var10.socket;
    var10 = var14.prototype;
    var11 = Object.create(var10, {
        constructor: {
            value: var14
        }
    });
    var16 = function(arg0, arg1) { // Environment: var1
        _fun95503: for (var _fun95503_ip = 0;;) switch (_fun95503_ip) {
            case 0:
                var0 = arg0;
                var5 = arg1;
                var _closure2_slot0 = var5;
                var1 = null;
                if (!(var1 == var0)) {
                    _fun95503_ip = 42;
                    continue _fun95503
                }
            case 18:
                var1 = {};
                var2 = 'SOUNDBOARD_SOUNDS_RECEIVED';
                var1.type = var2;
                var2 = new Array(0);
                var1.updates = var2;
                var0 = var1;
            case 42:
                var3 = var0.updates;
                var2 = var3.push;
                var1 = {};
                var6 = var5.guild_id;
                var1.guildId = var6;
                var6 = var5.soundboard_sounds;
                var5 = var6.map;
                var4 = function(arg0) { // Environment: var4
                    var1 = arg0;
                    var0 = {};
                    var2 = var1.name;
                    var0.name = var2;
                    var2 = var1.sound_id;
                    var0.soundId = var2;
                    var2 = var1.emoji_name;
                    var0.emojiName = var2;
                    var2 = var1.emoji_id;
                    var0.emojiId = var2;
                    var2 = var1.user_id;
                    var0.userId = var2;
                    var2 = var1.volume;
                    var0.volume = var2;
                    var1 = var1.available;
                    var0.available = var1;
                    var1 = _closure2_slot0;
                    var1 = var1.guild_id;
                    var0.guildId = var1;
                    return var0;
                };
                var4 = var5.bind(var6)(var4);
                var1.sounds = var4;
                var1 = var2.bind(var3)(var1);
                return var0;
        }
    };
    var15 = function(arg0) { // Environment: var1
        var1 = 'SOUNDBOARD_SOUNDS';
        var0 = arg0;
        var0 = var1 !== var0;
        return var0;
    };
    var18 = var11;
    var10 = new var18[var14](var17, var16, var15, var14);
    var10 = var10 instanceof Object ? var10 : var11;
    var _closure1_slot20 = var10;
    var10 = var5[var6];
    var14 = var8.bind(var0)(var10);
    var10 = var5[var3];
    var10 = var4.bind(var0)(var10);
    var17 = var10.socket;
    var10 = var14.prototype;
    var11 = Object.create(var10, {
        constructor: {
            value: var14
        }
    });
    var16 = function(arg0, arg1) { // Environment: var1
        _fun95506: for (var _fun95506_ip = 0;;) switch (_fun95506_ip) {
            case 0:
                var0 = arg0;
                var1 = null;
                if (!(var1 == var0)) {
                    _fun95506_ip = 31;
                    continue _fun95506
                }
            case 9:
                var1 = {};
                var2 = 'GUILD_MEMBERS_CHUNK_BATCH';
                var1.type = var2;
                var2 = new Array(0);
                var1.chunks = var2;
                var0 = var1;
            case 31:
                var3 = var0.chunks;
                var2 = var3.push;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var0;
        }
    };
    var15 = function(arg0) { // Environment: var1
        var1 = 'GUILD_MEMBERS_CHUNK';
        var0 = arg0;
        var0 = var1 !== var0;
        return var0;
    };
    var18 = var11;
    var10 = new var18[var14](var17, var16, var15, var14);
    var10 = var10 instanceof Object ? var10 : var11;
    var _closure1_slot21 = var10;
    var6 = var5[var6];
    var11 = var8.bind(var0)(var6);
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var17 = var3.socket;
    var3 = var11.prototype;
    var6 = Object.create(var3, {
        constructor: {
            value: var11
        }
    });
    var16 = function(arg0, arg1) { // Environment: var1
        _fun95508: for (var _fun95508_ip = 0;;) switch (_fun95508_ip) {
            case 0:
                var0 = arg0;
                var1 = null;
                if (!(var1 == var0)) {
                    _fun95508_ip = 31;
                    continue _fun95508
                }
            case 9:
                var1 = {};
                var2 = 'PRESENCE_UPDATES';
                var1.type = var2;
                var2 = new Array(0);
                var1.updates = var2;
                var0 = var1;
            case 31:
                var3 = var0.updates;
                var2 = var3.push;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var0;
        }
    };
    var15 = function(arg0) { // Environment: var1
        _fun95509: for (var _fun95509_ip = 0;;) switch (_fun95509_ip) {
            case 0:
                var2 = arg0;
                var0 = 'PRESENCE_UPDATE';
                var0 = var0 !== var2;
                if (!var0) {
                    _fun95509_ip = 24;
                    continue _fun95509
                }
            case 14:
                var1 = 'GUILD_MEMBERS_CHUNK';
                var0 = var1 !== var2;
            case 24:
                return var0;
        }
    };
    var18 = var6;
    var3 = new var18[var11](var17, var16, var15, var14);
    var3 = var3 instanceof Object ? var3 : var6;
    var _closure1_slot22 = var3;
    var3 = {};
    var _closure1_slot23 = var3;
    var8 = ['INITIAL_GUILD'];
    var6 = function(arg0) { // Environment: var1
        _fun95510: for (var _fun95510_ip = 0;;) switch (_fun95510_ip) {
            case 0:
                var1 = arg0;
                var3 = var1.data_mode;
                var2 = 'full';
                var0 = null;
                if (!(var2 !== var3)) {
                    _fun95510_ip = 50;
                    continue _fun95510
                }
            case 19:
                var3 = _closure1_slot10;
                var2 = var3.loadGuildIds;
                var4 = var1.id;
                var1 = new Array(1);
                var1[0] = var4;
                var0 = var2.bind(var3)(var1);
            case 50:
                return var0;
        }
    };
    var3 = function(arg0) { // Environment: var1
        var0 = arg0;
        var _closure2_slot0 = var0;
        var3 = _closure1_slot1;
        var2 = _closure1_slot3;
        var0 = 15;
        var2 = var2[var0];
        var0 = undefined;
        var2 = var3.bind(var0)(var2);
        var3 = var2.initialGuild;
        var2 = var3.measure;
        var1 = function() { // Environment: var1
            var2 = _closure1_slot1;
            var1 = _closure1_slot3;
            var0 = 16;
            var1 = var1[var0];
            var0 = undefined;
            var1 = var2.bind(var0)(var1);
            var3 = var1.Emitter;
            var2 = var3.batched;
            var1 = function() { // Environment: var1
                _fun95513: for (var _fun95513_ip = 0;;) switch (_fun95513_ip) {
                    case 0:
                        var3 = _closure1_slot2;
                        var9 = _closure1_slot3;
                        var0 = 17;
                        var1 = var9[var0];
                        var0 = undefined;
                        var7 = var3.bind(var0)(var1);
                        var6 = var7.hydrateInitialGuild;
                        var4 = _closure2_slot0;
                        var8 = _closure1_slot0;
                        var3 = 14;
                        var3 = var9[var3];
                        var3 = var8.bind(var0)(var3);
                        var3 = var3.socket;
                        var3 = var3.identifyStartTime;
                        var6 = var6.bind(var7)(var4, var3);
                        var _closure4_slot0 = var6;
                        var4 = _closure1_slot13;
                        var3 = var4.getCurrentUser;
                        var4 = var3.bind(var4)();
                        var3 = null;
                        if (!(var3 != var4)) {
                            _fun95513_ip = 210;
                            continue _fun95513
                        }
                    case 97:
                        var4 = _closure1_slot28;
                        var3 = {};
                        var7 = 'GUILD_CREATE';
                        var3.type = var7;
                        var3.guild = var6;
                        var3 = var4.bind(var0)(var3);
                        var3 = {};
                        var7 = 'VOICE_STATE_UPDATES';
                        var3.type = var7;
                        var7 = var6.voice_states;
                        var6 = var7.map;
                        var5 = function(arg0) { // Environment: var5
                            _fun95514: for (var _fun95514_ip = 0;;) switch (_fun95514_ip) {
                                case 0:
                                    var2 = arg0;
                                    var0 = {};
                                    var1 = var2.user_id;
                                    var0.userId = var1;
                                    var1 = _closure4_slot0;
                                    var1 = var1.id;
                                    var0.guildId = var1;
                                    var1 = var2.session_id;
                                    var0.sessionId = var1;
                                    var1 = var2.channel_id;
                                    var0.channelId = var1;
                                    var1 = var2.mute;
                                    var0.mute = var1;
                                    var1 = var2.deaf;
                                    var0.deaf = var1;
                                    var1 = var2.self_mute;
                                    var0.selfMute = var1;
                                    var1 = var2.self_deaf;
                                    var0.selfDeaf = var1;
                                    var1 = var2.self_video;
                                    if (var1) {
                                        _fun95514_ip = 106;
                                        continue _fun95514
                                    }
                                case 104:
                                    var1 = false;
                                case 106:
                                    var0.selfVideo = var1;
                                    var1 = var2.suppress;
                                    var0.suppress = var1;
                                    var1 = var2.self_stream;
                                    if (var1) {
                                        _fun95514_ip = 133;
                                        continue _fun95514
                                    }
                                case 131:
                                    var1 = false;
                                case 133:
                                    var0.selfStream = var1;
                                    var4 = var2.request_to_speak_timestamp;
                                    var1 = null;
                                    var5 = var1 != var4;
                                    var3 = null;
                                    if (!var5) {
                                        _fun95514_ip = 158;
                                        continue _fun95514
                                    }
                                case 155:
                                    var3 = var4;
                                case 158:
                                    var0.requestToSpeakTimestamp = var3;
                                    var2 = var2.discoverable;
                                    var1 = var1 == var2;
                                    if (var1) {
                                        _fun95514_ip = 179;
                                        continue _fun95514
                                    }
                                case 176:
                                    var1 = var2;
                                case 179:
                                    var0.discoverable = var1;
                                    return var0;
                            }
                        };
                        var5 = var6.bind(var7)(var5);
                        var3.voiceStates = var5;
                        var3 = var4.bind(var0)(var3);
                        var3 = _closure1_slot18;
                        var2 = var3.log;
                        var1 = _closure2_slot0;
                        var5 = var1.id;
                        var1 = global;
                        var1 = var1.HermesInternal;
                        var4 = var1.concat;
                        var1 = 'Dispatched INITIAL_GUILD ';
                        var1 = var4.bind(var1)(var5);
                        var1 = var2.bind(var3)(var1);
                    case 210:
                        return var0;
                }
            };
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var3 = var9.bind(var0)(var8, var6, var3);
    var6 = ['READY_SUPPLEMENTAL'];
    var3 = function(arg0) { // Environment: var1
        var0 = arg0;
        var _closure2_slot0 = var0;
        var3 = _closure1_slot1;
        var2 = _closure1_slot3;
        var0 = 15;
        var2 = var2[var0];
        var0 = undefined;
        var2 = var3.bind(var0)(var2);
        var4 = var2.readySupplemental;
        var3 = var4.measure;
        var2 = function() { // Environment: var1
            var2 = _closure1_slot1;
            var1 = _closure1_slot3;
            var0 = 16;
            var1 = var1[var0];
            var0 = undefined;
            var1 = var2.bind(var0)(var1);
            var3 = var1.Emitter;
            var2 = var3.batched;
            var1 = function() { // Environment: var1
                _fun95517: for (var _fun95517_ip = 0;;) switch (_fun95517_ip) {
                    case 0:
                        var5 = _closure1_slot1;
                        var0 = _closure1_slot3;
                        var4 = 15;
                        var3 = var0[var4];
                        var0 = undefined;
                        var3 = var5.bind(var0)(var3);
                        var6 = var3.hydrateReadySupplemental;
                        var5 = var6.measure;
                        var3 = function() { // Environment: var2
                            var2 = _closure1_slot2;
                            var6 = _closure1_slot3;
                            var1 = 17;
                            var1 = var6[var1];
                            var5 = undefined;
                            var3 = var2.bind(var5)(var1);
                            var2 = var3.hydrateReadySupplementalPayload;
                            var1 = _closure2_slot0;
                            var4 = _closure1_slot0;
                            var0 = 14;
                            var0 = var6[var0];
                            var0 = var4.bind(var5)(var0);
                            var0 = var0.socket;
                            var0 = var0.identifyStartTime;
                            var0 = var2.bind(var3)(var1, var0);
                            return var0;
                        };
                        var5 = var5.bind(var6)(var3);
                        _closure2_slot0 = var5;
                        var8 = function arg0() {
                            var2 = arg0;
                            var1 = var2.map;
                            var0 = function(arg0) { // Environment: var0
                                var1 = arg0;
                                var0 = {};
                                var2 = var1.user;
                                var0.user = var2;
                                var2 = var1.status;
                                var0.status = var2;
                                var2 = var1.client_status;
                                var0.clientStatus = var2;
                                var2 = var1.activities;
                                var0.activities = var2;
                                var2 = var1.hidden_activities;
                                var0.hiddenActivities = var2;
                                var1 = var1.processed_at_timestamp;
                                var0.processedAtTimestamp = var1;
                                return var0;
                            };
                            var0 = var1.bind(var2)(var0);
                            return var0;
                        };
                        var _closure4_slot0 = var8;
                        var7 = var5.guilds;
                        var6 = var7.filter;
                        var5 = function(arg0) { // Environment: var2
                            var0 = arg0;
                            var1 = var0.unavailable;
                            var0 = true;
                            var0 = var0 !== var1;
                            return var0;
                        };
                        var6 = var6.bind(var7)(var5);
                        var _closure4_slot1 = var6;
                        var7 = var6.forEach;
                        var5 = function(arg0) { // Environment: var2
                            _fun95522: for (var _fun95522_ip = 0;;) switch (_fun95522_ip) {
                                case 0:
                                    var2 = arg0;
                                    var3 = _closure4_slot0;
                                    var1 = var2.presences;
                                    if (var1) {
                                        _fun95522_ip = 23;
                                        continue _fun95522
                                    }
                                case 19:
                                    var1 = new Array(0);
                                case 23:
                                    var0 = undefined;
                                    var1 = var3.bind(var0)(var1);
                                    var2.presences = var1;
                                    return var0;
                            }
                        };
                        var5 = var7.bind(var6)(var5);
                        var5 = _closure2_slot0;
                        var5 = var5.presences;
                        if (var5) {
                            _fun95517_ip = 132;
                            continue _fun95517
                        }
                    case 126:
                        var5 = new Array(0);
                        _fun95517_ip = 147;
                        continue _fun95517;
                    case 132:
                        var7 = _closure2_slot0;
                        var7 = var7.presences;
                        var5 = var8.bind(var0)(var7);
                    case 147:
                        var _closure4_slot2 = var5;
                        var3 = _closure2_slot0;
                        var7 = var3.lazy_private_channels;
                        var3 = null;
                        if (!(var3 == var7)) {
                            _fun95517_ip = 173;
                            continue _fun95517
                        }
                    case 169:
                        var7 = new Array(0);
                    case 173:
                        var5 = var7.map;
                        var3 = function(arg0) { // Environment: var2
                            var2 = _closure1_slot6;
                            var1 = undefined;
                            var0 = arg0;
                            var0 = var2.bind(var1)(var0);
                            return var0;
                        };
                        var3 = var5.bind(var7)(var3);
                        var _closure4_slot3 = var3;
                        var5 = _closure1_slot1;
                        var3 = _closure1_slot3;
                        var4 = var3[var4];
                        var4 = var5.bind(var0)(var4);
                        var7 = var4.dispatchReadySupplemental;
                        var5 = var7.measure;
                        var4 = function() { // Environment: var2
                            _fun95524: for (var _fun95524_ip = 0;;) switch (_fun95524_ip) {
                                case 0:
                                    var2 = _closure1_slot28;
                                    var1 = {};
                                    var0 = 'CONNECTION_OPEN_SUPPLEMENTAL';
                                    var1.type = var0;
                                    var3 = _closure4_slot1;
                                    var1.guilds = var3;
                                    var3 = _closure4_slot2;
                                    var1.presences = var3;
                                    var0 = _closure4_slot3;
                                    var1.lazyPrivateChannels = var0;
                                    var0 = _closure2_slot0;
                                    var4 = var0.user_activities;
                                    var0 = null;
                                    var5 = var0 != var4;
                                    var0 = undefined;
                                    var3 = undefined;
                                    if (!var5) {
                                        _fun95524_ip = 76;
                                        continue _fun95524
                                    }
                                case 73:
                                    var3 = var4;
                                case 76:
                                    var1.userActivities = var3;
                                    var1 = var2.bind(var0)(var1);
                                    return var0;
                            }
                        };
                        var4 = var5.bind(var7)(var4);
                        var5 = new Array(0);
                        var _closure4_slot4 = var5;
                        var4 = var6.forEach;
                        var2 = function(arg0) { // Environment: var2
                            var1 = arg0;
                            var _closure5_slot0 = var1;
                            var2 = var1.voice_states;
                            var1 = var2.forEach;
                            var0 = function(arg0) { // Environment: var0
                                _fun95526: for (var _fun95526_ip = 0;;) switch (_fun95526_ip) {
                                    case 0:
                                        var4 = arg0;
                                        var2 = _closure4_slot4;
                                        var1 = var2.push;
                                        var0 = {};
                                        var3 = var4.user_id;
                                        var0.userId = var3;
                                        var3 = _closure5_slot0;
                                        var3 = var3.id;
                                        var0.guildId = var3;
                                        var3 = var4.session_id;
                                        var0.sessionId = var3;
                                        var3 = var4.channel_id;
                                        var0.channelId = var3;
                                        var3 = var4.mute;
                                        var0.mute = var3;
                                        var3 = var4.deaf;
                                        var0.deaf = var3;
                                        var3 = var4.self_mute;
                                        var0.selfMute = var3;
                                        var3 = var4.self_deaf;
                                        var0.selfDeaf = var3;
                                        var3 = var4.self_video;
                                        if (var3) {
                                            _fun95526_ip = 118;
                                            continue _fun95526
                                        }
                                    case 116:
                                        var3 = false;
                                    case 118:
                                        var0.selfVideo = var3;
                                        var3 = var4.suppress;
                                        var0.suppress = var3;
                                        var3 = var4.self_stream;
                                        if (var3) {
                                            _fun95526_ip = 145;
                                            continue _fun95526
                                        }
                                    case 143:
                                        var3 = false;
                                    case 145:
                                        var0.selfStream = var3;
                                        var6 = var4.request_to_speak_timestamp;
                                        var3 = null;
                                        var7 = var3 != var6;
                                        var5 = null;
                                        if (!var7) {
                                            _fun95526_ip = 170;
                                            continue _fun95526
                                        }
                                    case 167:
                                        var5 = var6;
                                    case 170:
                                        var0.requestToSpeakTimestamp = var5;
                                        var4 = var4.discoverable;
                                        var3 = var3 == var4;
                                        if (var3) {
                                            _fun95526_ip = 191;
                                            continue _fun95526
                                        }
                                    case 188:
                                        var3 = var4;
                                    case 191:
                                        var0.discoverable = var3;
                                        var0 = var1.bind(var2)(var0);
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var0 = var1.bind(var2)(var0);
                            var0 = undefined;
                            return var0;
                        };
                        var2 = var4.bind(var6)(var2);
                        var4 = _closure1_slot28;
                        var2 = {
                            'type': 'VOICE_STATE_UPDATES',
                            'voiceStates': null,
                            'initial': true
                        };
                        var2.voiceStates = var5;
                        var2 = var4.bind(var0)(var2);
                        var2 = _closure1_slot0;
                        var1 = 14;
                        var1 = var3[var1];
                        var1 = var2.bind(var0)(var1);
                        var2 = var1.localVoiceState;
                        var1 = var2.update;
                        var1 = var1.bind(var2)();
                        return var0;
                }
            };
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var2 = var3.bind(var4)(var2);
        var2 = global;
        var3 = var2.setTimeout;
        var2 = function() { // Environment: var1
            var2 = _closure1_slot28;
            var1 = {};
            var0 = 'POST_CONNECTION_OPEN';
            var1.type = var0;
            var0 = undefined;
            var1 = var2.bind(var0)(var1);
            return var0;
        };
        var1 = 2000;
        var1 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var3 = var7.bind(var0)(var6, var3);
    var8 = ['READY'];
    var6 = function(arg0) { // Environment: var1
        _fun95528: for (var _fun95528_ip = 0;;) switch (_fun95528_ip) {
            case 0:
                var4 = _closure1_slot2;
                var3 = _closure1_slot3;
                var2 = 17;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var4.bind(var2)(var3);
                var2 = var3.preloadReadyPayloadData;
                var5 = var2.bind(var3)();
                var2 = arg0;
                var4 = var2.guilds;
                var3 = var4.filter;
                var2 = function(arg0) { // Environment: var0
                    _fun95529: for (var _fun95529_ip = 0;;) switch (_fun95529_ip) {
                        case 0:
                            var3 = arg0;
                            var0 = var3.unavailable;
                            var0 = !var0;
                            if (!var0) {
                                _fun95529_ip = 108;
                                continue _fun95529
                            }
                        case 15:
                            var2 = var3.data_mode;
                            var1 = 'partial';
                            var1 = var1 === var2;
                            if (!var1) {
                                _fun95529_ip = 105;
                                continue _fun95529
                            }
                        case 32:
                            var2 = var3.partial_updates;
                            var2 = var2.channels;
                            var5 = null;
                            if (!(var5 == var2)) {
                                _fun95529_ip = 54;
                                continue _fun95529
                            }
                        case 50:
                            var2 = new Array(0);
                        case 54:
                            var2 = var2.length;
                            var4 = 0;
                            var2 = var2 > var4;
                            if (var2) {
                                _fun95529_ip = 97;
                                continue _fun95529
                            }
                        case 68:
                            var3 = var3.partial_updates;
                            var3 = var3.deleted_channel_ids;
                            if (!(var5 == var3)) {
                                _fun95529_ip = 88;
                                continue _fun95529
                            }
                        case 84:
                            var3 = new Array(0);
                        case 88:
                            var3 = var3.length;
                            var2 = var3 > var4;
                        case 97:
                            if (var2) {
                                _fun95529_ip = 102;
                                continue _fun95529
                            }
                        case 100:
                            var2 = undefined;
                        case 102:
                            var1 = var2;
                        case 105:
                            var0 = var1;
                        case 108:
                            return var0;
                    }
                };
                var4 = var3.bind(var4)(var2);
                var3 = var4.map;
                var2 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var0 = var0.id;
                    return var0;
                };
                var3 = var3.bind(var4)(var2);
                var2 = _closure1_slot10;
                var1 = var2.loadGuildIds;
                var4 = var1.bind(var2)(var3);
                var1 = null;
                if (!(var1 == var4)) {
                    _fun95528_ip = 119;
                    continue _fun95528
                }
            case 101:
                var1 = global;
                var2 = var1.Promise;
                var1 = var2.resolve;
                var4 = var1.bind(var2)();
            case 119:
                var1 = global;
                var3 = var1.Promise;
                var2 = var3.all;
                var1 = new Array(2);
                var1[0] = var5;
                var1[1] = var4;
                var2 = var2.bind(var3)(var1);
                var1 = var2.then;
                var0 = function(arg0) { // Environment: var0
                    _fun95531: for (var _fun95531_ip = 0;;) switch (_fun95531_ip) {
                        case 0:
                            var0 = arg0;
                            var1 = var0[Symbol.iterator];
                            var0 = var1().next;
                            var3 = var0().value;
                            var2 = var1;
                            var0 = undefined;
                            var2 = var2 === var0;
                            if (var2) {
                                _fun95531_ip = 25;
                                continue _fun95531
                            }
                        case 22:
                            var0 = var3;
                        case 25:
                            if (var2) {
                                _fun95531_ip = 31;
                                continue _fun95531
                            }
                        case 28:
                            var1.return();
                        case 31:
                            return var0;
                    }
                };
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var3 = function(arg0, arg1, arg2) { // Environment: var1
        _fun95532: for (var _fun95532_ip = 0;;) switch (_fun95532_ip) {
            case 0:
                var0 = arg0;
                var _closure2_slot0 = var0;
                var2 = arg2;
                var _closure2_slot1 = var2;
                var0 = var0.user;
                var2 = var0.bot;
                if (var2) {
                    _fun95532_ip = 81;
                    continue _fun95532
                }
            case 33:
                var4 = _closure1_slot1;
                var3 = _closure1_slot3;
                var2 = 15;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var4.bind(var2)(var3);
                var3 = var2.ready;
                var2 = var3.measure;
                var1 = function() { // Environment: var1
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot3;
                    var0 = 16;
                    var1 = var1[var0];
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    var3 = var1.Emitter;
                    var2 = var3.batched;
                    var1 = function() { // Environment: var1
                        _fun95534: for (var _fun95534_ip = 0;;) switch (_fun95534_ip) {
                            case 0:
                                var4 = _closure1_slot1;
                                var0 = _closure1_slot3;
                                var7 = 15;
                                var3 = var0[var7];
                                var0 = undefined;
                                var3 = var4.bind(var0)(var3);
                                var5 = var3.hydrateReady;
                                var4 = var5.measure;
                                var3 = function() { // Environment: var2
                                    var2 = _closure1_slot2;
                                    var7 = _closure1_slot3;
                                    var0 = 17;
                                    var0 = var7[var0];
                                    var6 = undefined;
                                    var4 = var2.bind(var6)(var0);
                                    var3 = var4.hydrateReadyPayloadPrioritized;
                                    var2 = _closure2_slot0;
                                    var5 = _closure1_slot0;
                                    var1 = 14;
                                    var1 = var7[var1];
                                    var1 = var5.bind(var6)(var1);
                                    var1 = var1.socket;
                                    var1 = var1.identifyStartTime;
                                    var0 = _closure2_slot1;
                                    var0 = var3.bind(var4)(var2, var1, var0);
                                    return var0;
                                };
                                var3 = var4.bind(var5)(var3);
                                _closure2_slot0 = var3;
                                var6 = var3.private_channels;
                                var5 = var6.map;
                                var3 = function(arg0) { // Environment: var2
                                    var2 = _closure1_slot6;
                                    var1 = undefined;
                                    var0 = arg0;
                                    var0 = var2.bind(var1)(var0);
                                    return var0;
                                };
                                var3 = var5.bind(var6)(var3);
                                var _closure4_slot0 = var3;
                                var3 = _closure2_slot0;
                                var6 = var3.guilds;
                                var5 = var6.filter;
                                var3 = function(arg0) { // Environment: var2
                                    _fun95537: for (var _fun95537_ip = 0;;) switch (_fun95537_ip) {
                                        case 0:
                                            var1 = arg0;
                                            var0 = var1.unavailable;
                                            var2 = true;
                                            var0 = var2 === var0;
                                            if (!var0) {
                                                _fun95537_ip = 28;
                                                continue _fun95537
                                            }
                                        case 18:
                                            var1 = var1.geo_restricted;
                                            var0 = var2 !== var1;
                                        case 28:
                                            return var0;
                                    }
                                };
                                var6 = var5.bind(var6)(var3);
                                var5 = var6.map;
                                var3 = function(arg0) { // Environment: var2
                                    var0 = arg0;
                                    var0 = var0.id;
                                    return var0;
                                };
                                var3 = var5.bind(var6)(var3);
                                var _closure4_slot1 = var3;
                                var3 = _closure2_slot0;
                                var6 = var3.guilds;
                                var5 = var6.filter;
                                var3 = function(arg0) { // Environment: var2
                                    var0 = arg0;
                                    var1 = var0.unavailable;
                                    var0 = true;
                                    var0 = var0 !== var1;
                                    return var0;
                                };
                                var6 = var5.bind(var6)(var3);
                                var _closure4_slot2 = var6;
                                var3 = _closure2_slot0;
                                var8 = var3.guilds;
                                var5 = var8.filter;
                                var3 = function(arg0) { // Environment: var2
                                    var0 = arg0;
                                    var1 = var0.geo_restricted;
                                    var0 = true;
                                    var0 = var0 === var1;
                                    return var0;
                                };
                                var3 = var5.bind(var8)(var3);
                                var _closure4_slot3 = var3;
                                var5 = var6.forEach;
                                var3 = function(arg0) { // Environment: var2
                                    var1 = new Array(0);
                                    var0 = arg0;
                                    var0.presences = var1;
                                    var0 = undefined;
                                    return var0;
                                };
                                var3 = var5.bind(var6)(var3);
                                var3 = _closure2_slot0;
                                var5 = var3.user_settings_proto;
                                var3 = null;
                                var6 = var3 == var5;
                                var5 = undefined;
                                if (var6) {
                                    _fun95534_ip = 274;
                                    continue _fun95534
                                }
                            case 233:
                                var8 = _closure1_slot0;
                                var9 = _closure1_slot3;
                                var6 = 18;
                                var6 = var9[var6];
                                var9 = var8.bind(var0)(var6);
                                var8 = var9.b64ToPreloadedUserSettingsProto;
                                var6 = _closure2_slot0;
                                var6 = var6.user_settings_proto;
                                var5 = var8.bind(var9)(var6);
                            case 274:
                                var _closure4_slot4 = var5;
                                var6 = _closure1_slot1;
                                var5 = _closure1_slot3;
                                var8 = 19;
                                var8 = var5[var8];
                                var10 = var6.bind(var0)(var8);
                                var9 = 'AllGatewayConnectionStores';
                                var8 = function() { // Environment: var2
                                    var2 = _closure1_slot0;
                                    var1 = _closure1_slot3;
                                    var0 = 20;
                                    var1 = var1[var0];
                                    var0 = undefined;
                                    var0 = var2.bind(var0)(var1);
                                    return var0;
                                };
                                var8 = var10.bind(var0)(var9, var8);
                                var5 = var5[var7];
                                var5 = var6.bind(var0)(var5);
                                var6 = var5.dispatchReady;
                                var5 = var6.measure;
                                var2 = function() { // Environment: var2
                                    _fun95543: for (var _fun95543_ip = 0;;) switch (_fun95543_ip) {
                                        case 0:
                                            var2 = _closure1_slot28;
                                            var1 = {};
                                            var0 = 'CONNECTION_OPEN';
                                            var1.type = var0;
                                            var0 = _closure2_slot0;
                                            var0 = var0.session_id;
                                            var1.sessionId = var0;
                                            var0 = _closure2_slot0;
                                            var0 = var0.auth_session_id_hash;
                                            var1.authSessionIdHash = var0;
                                            var0 = _closure2_slot0;
                                            var0 = var0.static_client_session_id;
                                            var1.staticAuthSessionId = var0;
                                            var0 = _closure2_slot0;
                                            var0 = var0.user;
                                            var1.user = var0;
                                            var0 = _closure2_slot0;
                                            var0 = var0.users;
                                            var1.users = var0;
                                            var0 = _closure4_slot2;
                                            var1.guilds = var0;
                                            var0 = _closure4_slot0;
                                            var1.initialPrivateChannels = var0;
                                            var0 = _closure4_slot1;
                                            var1.unavailableGuilds = var0;
                                            var0 = _closure2_slot0;
                                            var0 = var0.read_state;
                                            var1.readState = var0;
                                            var0 = _closure2_slot0;
                                            var0 = var0.user_guild_settings;
                                            var1.userGuildSettings = var0;
                                            var0 = _closure2_slot0;
                                            var0 = var0.tutorial;
                                            var1.tutorial = var0;
                                            var0 = _closure2_slot0;
                                            var0 = var0.relationships;
                                            var1.relationships = var0;
                                            var0 = _closure2_slot0;
                                            var0 = var0.game_relationships;
                                            var1.gameRelationships = var0;
                                            var0 = _closure2_slot0;
                                            var0 = var0.friend_suggestion_count;
                                            var1.friendSuggestionCount = var0;
                                            var0 = _closure2_slot0;
                                            var0 = var0.presences;
                                            var1.presences = var0;
                                            var0 = _closure2_slot0;
                                            var0 = var0.analytics_token;
                                            var1.analyticsToken = var0;
                                            var0 = _closure2_slot0;
                                            var0 = var0.experiments;
                                            var1.experiments = var0;
                                            var0 = _closure2_slot0;
                                            var0 = var0.connected_accounts;
                                            var1.connectedAccounts = var0;
                                            var0 = _closure2_slot0;
                                            var0 = var0.guild_experiments;
                                            var1.guildExperiments = var0;
                                            var0 = _closure2_slot0;
                                            var8 = var0.apex_experiments;
                                            var3 = null;
                                            var9 = var3 != var8;
                                            var0 = undefined;
                                            var7 = undefined;
                                            if (!var9) {
                                                _fun95543_ip = 320;
                                                continue _fun95543
                                            }
                                        case 317:
                                            var7 = var8;
                                        case 320:
                                            var1.apexExperiments = var7;
                                            var7 = _closure2_slot0;
                                            var7 = var7.required_action;
                                            var1.requiredAction = var7;
                                            var7 = _closure2_slot0;
                                            var7 = var7.consents;
                                            var1.consents = var7;
                                            var7 = _closure1_slot31;
                                            var6 = _closure2_slot0;
                                            var6 = var6.sessions;
                                            if (var6) {
                                                _fun95543_ip = 376;
                                                continue _fun95543
                                            }
                                        case 372:
                                            var6 = new Array(0);
                                        case 376:
                                            var6 = var7.bind(var0)(var6);
                                            var1.sessions = var6;
                                            var6 = _closure2_slot0;
                                            var6 = var6.pending_payments;
                                            var1.pendingPayments = var6;
                                            var6 = _closure2_slot0;
                                            var7 = var6.country_code;
                                            var8 = var3 != var7;
                                            var6 = undefined;
                                            if (!var8) {
                                                _fun95543_ip = 427;
                                                continue _fun95543
                                            }
                                        case 424:
                                            var6 = var7;
                                        case 427:
                                            var1.countryCode = var6;
                                            var6 = _closure2_slot0;
                                            var6 = var6.guild_join_requests;
                                            if (var6) {
                                                _fun95543_ip = 449;
                                                continue _fun95543
                                            }
                                        case 445:
                                            var6 = new Array(0);
                                        case 449:
                                            var1.guildJoinRequests = var6;
                                            var6 = _closure4_slot4;
                                            var1.userSettingsProto = var6;
                                            var6 = _closure2_slot0;
                                            var6 = var6.api_code_version;
                                            var1.apiCodeVersion = var6;
                                            var6 = _closure2_slot0;
                                            var6 = var6.auth;
                                            var1.auth = var6;
                                            var6 = {};
                                            var7 = _closure2_slot0;
                                            var7 = var7.notification_settings;
                                            var7 = var7.flags;
                                            var6.flags = var7;
                                            var1.notificationSettings = var6;
                                            var5 = _closure4_slot3;
                                            var1.geoRestrictedGuilds = var5;
                                            var5 = _closure2_slot0;
                                            var5 = var5.explicit_content_scan_version;
                                            var1.explicitContentScanVersion = var5;
                                            var5 = _closure2_slot0;
                                            var5 = var5.failed_states;
                                            var1.failedStates = var5;
                                            var5 = _closure2_slot0;
                                            var6 = var5.linked_users;
                                            var7 = var3 != var6;
                                            var5 = undefined;
                                            if (!var7) {
                                                _fun95543_ip = 588;
                                                continue _fun95543
                                            }
                                        case 585:
                                            var5 = var6;
                                        case 588:
                                            var1.linkedUsers = var5;
                                            var4 = _closure2_slot0;
                                            var4 = var4.regional_feature_config;
                                            var5 = var3 != var4;
                                            var3 = undefined;
                                            if (!var5) {
                                                _fun95543_ip = 617;
                                                continue _fun95543
                                            }
                                        case 614:
                                            var3 = var4;
                                        case 617:
                                            var1.regionalFeatureConfig = var3;
                                            var1 = var2.bind(var0)(var1);
                                            return var0;
                                    }
                                };
                                var2 = var5.bind(var6)(var2);
                                var2 = _closure2_slot0;
                                var2 = var2.auth_token;
                                if (!(var3 != var2)) {
                                    _fun95534_ip = 416;
                                    continue _fun95534
                                }
                            case 364:
                                var5 = _closure1_slot28;
                                var2 = {};
                                var6 = 'UPDATE_TOKEN';
                                var2.type = var6;
                                var6 = _closure2_slot0;
                                var6 = var6.auth_token;
                                var2.token = var6;
                                var6 = _closure2_slot0;
                                var6 = var6.user;
                                var6 = var6.id;
                                var2.userId = var6;
                                var2 = var5.bind(var0)(var2);
                            case 416:
                                var2 = _closure2_slot0;
                                var2 = var2.ad_personalization_toggles_disabled;
                                if (!(var3 != var2)) {
                                    _fun95534_ip = 465;
                                    continue _fun95534
                                }
                            case 430:
                                var3 = _closure1_slot28;
                                var2 = {};
                                var5 = 'AD_PERSONALIZATION_TOGGLES_RESTRICTED';
                                var2.type = var5;
                                var4 = _closure2_slot0;
                                var4 = var4.ad_personalization_toggles_disabled;
                                var2.disabled = var4;
                                var2 = var3.bind(var0)(var2);
                            case 465:
                                var2 = _closure1_slot0;
                                var3 = _closure1_slot3;
                                var1 = 14;
                                var4 = var3[var1];
                                var4 = var2.bind(var0)(var4);
                                var5 = var4.localPresenceState;
                                var4 = var5.update;
                                var4 = var4.bind(var5)();
                                var1 = var3[var1];
                                var1 = var2.bind(var0)(var1);
                                var2 = var1.localVoiceState;
                                var1 = var2.update;
                                var1 = var1.bind(var2)();
                                return var0;
                        }
                    };
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var1 = var2.bind(var3)(var1);
                _fun95532_ip = 102;
                continue _fun95532;
            case 81:
                var2 = _closure1_slot28;
                var1 = {};
                var0 = 'LOGOUT';
                var1.type = var0;
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
            case 102:
                var0 = undefined;
                return var0;
        }
    };
    var3 = var9.bind(var0)(var8, var6, var3);
    var6 = ['STATE_UPDATE'];
    var3 = function(arg0) { // Environment: var1
        _fun95544: for (var _fun95544_ip = 0;;) switch (_fun95544_ip) {
            case 0:
                var4 = arg0;
                var2 = _closure1_slot28;
                var1 = {};
                var0 = 'CONNECTION_OPEN_STATE_UPDATE';
                var1.type = var0;
                var6 = var4.apex_experiments;
                var3 = null;
                var7 = var3 != var6;
                var0 = undefined;
                var5 = undefined;
                if (!var7) {
                    _fun95544_ip = 42;
                    continue _fun95544
                }
            case 39:
                var5 = var6;
            case 42:
                var1.apexExperiments = var5;
                var4 = var4.user_activities;
                var5 = var3 != var4;
                var3 = undefined;
                if (!var5) {
                    _fun95544_ip = 65;
                    continue _fun95544
                }
            case 62:
                var3 = var4;
            case 65:
                var1.userActivities = var3;
                var1 = var2.bind(var0)(var1);
                return var0;
        }
    };
    var3 = var7.bind(var0)(var6, var3);
    var6 = ['EXPERIMENT_SESSION_OVERRIDE_CREATE'];
    var3 = function(arg0) { // Environment: var1
        var4 = arg0;
        var2 = _closure1_slot1;
        var1 = _closure1_slot3;
        var0 = 21;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var5 = 'APEX_EXPERIMENT_SESSION_OVERRIDE_CREATE';
        var1.type = var5;
        var5 = var4.experiment_name;
        var1.experimentName = var5;
        var4 = var4.variant_id;
        var1.variantId = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var3 = var7.bind(var0)(var6, var3);
    var6 = ['EXPERIMENT_SESSION_OVERRIDE_DELETE'];
    var3 = function(arg0) { // Environment: var1
        var2 = _closure1_slot1;
        var1 = _closure1_slot3;
        var0 = 21;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'APEX_EXPERIMENT_SESSION_OVERRIDE_DELETE';
        var1.type = var4;
        var4 = arg0;
        var4 = var4.experiment_name;
        var1.experimentName = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var3 = var7.bind(var0)(var6, var3);
    var6 = ['RESUMED'];
    var3 = function() { // Environment: var1
        var3 = _closure1_slot0;
        var4 = _closure1_slot3;
        var2 = 14;
        var5 = var4[var2];
        var0 = undefined;
        var5 = var3.bind(var0)(var5);
        var6 = var5.localPresenceState;
        var5 = var6.forceUpdate;
        var5 = var5.bind(var6)();
        var2 = var4[var2];
        var2 = var3.bind(var0)(var2);
        var3 = var2.localVoiceState;
        var2 = var3.forceUpdate;
        var2 = var2.bind(var3)();
        var2 = _closure1_slot28;
        var1 = {};
        var3 = 'CONNECTION_RESUMED';
        var1.type = var3;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3 = var7.bind(var0)(var6, var3);
    var6 = ['TYPING_START'];
    var3 = function(arg0) { // Environment: var1
        _fun95548: for (var _fun95548_ip = 0;;) switch (_fun95548_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.member;
                var1 = null;
                if (!(var1 != var2)) {
                    _fun95548_ip = 53;
                    continue _fun95548
                }
            case 15:
                var5 = _closure1_slot29;
                var4 = var0.guild_id;
                var1 = var0.member;
                var3 = var1.user;
                var2 = var0.member;
                var1 = undefined;
                var1 = var5.bind(var1)(var4, var3, var2);
            case 53:
                var2 = _closure1_slot28;
                var1 = {};
                var3 = 'TYPING_START';
                var1.type = var3;
                var3 = var0.channel_id;
                var1.channelId = var3;
                var0 = var0.user_id;
                var1.userId = var0;
                var0 = undefined;
                var1 = var2.bind(var0)(var1);
                return var0;
        }
    };
    var3 = var7.bind(var0)(var6, var3);
    var6 = ['GUILD_RING_START'];
    var3 = function(arg0) { // Environment: var1
        var0 = arg0;
        var2 = _closure1_slot28;
        var1 = {};
        var3 = 'GUILD_RING_START';
        var1.type = var3;
        var3 = var0.ringing;
        var1.ringing = var3;
        var3 = var0.channel_id;
        var1.channelId = var3;
        var0 = var0.guild_id;
        var1.guildId = var0;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3 = var7.bind(var0)(var6, var3);
    var6 = ['GUILD_RING_STOP'];
    var3 = function(arg0) { // Environment: var1
        var0 = arg0;
        var2 = _closure1_slot28;
        var1 = {};
        var3 = 'GUILD_RING_STOP';
        var1.type = var3;
        var3 = var0.ringing;
        var1.ringing = var3;
        var3 = var0.channel_id;
        var1.channelId = var3;
        var0 = var0.guild_id;
        var1.guildId = var0;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3 = var7.bind(var0)(var6, var3);
    var6 = ['ACTIVITY_START'];
    var3 = function(arg0) { // Environment: var1
        var0 = arg0;
        var2 = _closure1_slot28;
        var1 = {};
        var3 = 'ACTIVITY_START';
        var1.type = var3;
        var3 = var0.user_id;
        var1.userId = var3;
        var0 = var0.activity;
        var1.activity = var0;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3 = var7.bind(var0)(var6, var3);
    var6 = ['ACTIVITY_USER_ACTION'];
    var3 = function(arg0) { // Environment: var1
        var0 = arg0;
        var2 = _closure1_slot28;
        var1 = {};
        var3 = 'ACTIVITY_USER_ACTION';
        var1.type = var3;
        var3 = var0.action_type;
        var1.actionType = var3;
        var3 = var0.user;
        var1.user = var3;
        var3 = var0.application_id;
        var1.applicationId = var3;
        var3 = var0.channel_id;
        var1.channelId = var3;
        var0 = var0.message_id;
        var1.messageId = var0;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3 = var7.bind(var0)(var6, var3);
    var8 = ['MESSAGE_CREATE'];
    var6 = function(arg0) { // Environment: var1
        var2 = _closure1_slot10;
        var1 = var2.loadGuildIds;
        var0 = arg0;
        var3 = var0.guild_id;
        var0 = new Array(1);
        var0[0] = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var3 = function(arg0) { // Environment: var1
        _fun95554: for (var _fun95554_ip = 0;;) switch (_fun95554_ip) {
            case 0:
                var3 = arg0;
                var2 = _closure1_slot30;
                var0 = undefined;
                var2 = var2.bind(var0)(var3);
                var4 = var3.author;
                var2 = null;
                if (!(var2 != var4)) {
                    _fun95554_ip = 80;
                    continue _fun95554
                }
            case 29:
                var2 = _closure1_slot28;
                var1 = {
                    'type': 'MESSAGE_CREATE',
                    'guildId': null,
                    'channelId': null,
                    'message': null,
                    'optimistic': false,
                    'isPushNotification': false
                };
                var4 = var3.guild_id;
                var1.guildId = var4;
                var4 = var3.channel_id;
                var1.channelId = var4;
                var1.message = var3;
                var1 = var2.bind(var0)(var1);
            case 80:
                return var0;
        }
    };
    var3 = var9.bind(var0)(var8, var6, var3);
    var8 = ['MESSAGE_UPDATE'];
    var6 = function(arg0) { // Environment: var1
        var2 = _closure1_slot10;
        var1 = var2.loadGuildIds;
        var0 = arg0;
        var3 = var0.guild_id;
        var0 = new Array(1);
        var0[0] = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var3 = function(arg0) { // Environment: var1
        var3 = arg0;
        var2 = _closure1_slot30;
        var0 = undefined;
        var2 = var2.bind(var0)(var3);
        var2 = _closure1_slot28;
        var1 = {};
        var4 = 'MESSAGE_UPDATE';
        var1.type = var4;
        var4 = var3.guild_id;
        var1.guildId = var4;
        var1.message = var3;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3 = var9.bind(var0)(var8, var6, var3);
    var8 = ['MESSAGE_DELETE'];
    var6 = function(arg0) { // Environment: var1
        var2 = _closure1_slot10;
        var1 = var2.loadGuildIds;
        var0 = arg0;
        var3 = var0.guild_id;
        var0 = new Array(1);
        var0[0] = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var3 = function(arg0) { // Environment: var1
        var0 = arg0;
        var2 = _closure1_slot28;
        var1 = {};
        var3 = 'MESSAGE_DELETE';
        var1.type = var3;
        var3 = var0.guild_id;
        var1.guildId = var3;
        var3 = var0.id;
        var1.id = var3;
        var0 = var0.channel_id;
        var1.channelId = var0;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3 = var9.bind(var0)(var8, var6, var3);
    var8 = ['MESSAGE_DELETE_BULK'];
    var6 = function(arg0) { // Environment: var1
        var2 = _closure1_slot10;
        var1 = var2.loadGuildIds;
        var0 = arg0;
        var3 = var0.guild_id;
        var0 = new Array(1);
        var0[0] = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var3 = function(arg0) { // Environment: var1
        var0 = arg0;
        var2 = _closure1_slot28;
        var1 = {};
        var3 = 'MESSAGE_DELETE_BULK';
        var1.type = var3;
        var3 = var0.guild_id;
        var1.guildId = var3;
        var3 = var0.ids;
        var1.ids = var3;
        var0 = var0.channel_id;
        var1.channelId = var0;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3 = var9.bind(var0)(var8, var6, var3);
    var8 = ['MESSAGE_ACK'];
    var6 = function(arg0) { // Environment: var1
        var2 = _closure1_slot10;
        var1 = var2.loadGuildFromChannelId;
        var0 = arg0;
        var0 = var0.channel_id;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var3 = function(arg0) { // Environment: var1
        var0 = arg0;
        var2 = _closure1_slot28;
        var1 = {};
        var3 = 'MESSAGE_ACK';
        var1.type = var3;
        var3 = var0.channel_id;
        var1.channelId = var3;
        var3 = var0.message_id;
        var1.messageId = var3;
        var3 = var0.manual;
        var1.manual = var3;
        var3 = var0.mention_count;
        var1.newMentionCount = var3;
        var0 = var0.version;
        var1.version = var0;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3 = var9.bind(var0)(var8, var6, var3);
    var6 = ['GUILD_FEATURE_ACK'];
    var3 = function(arg0) { // Environment: var1
        var0 = arg0;
        var2 = _closure1_slot28;
        var1 = {};
        var3 = 'GUILD_FEATURE_ACK';
        var1.type = var3;
        var3 = var0.resource_id;
        var1.id = var3;
        var3 = var0.ack_type;
        var1.ackType = var3;
        var0 = var0.entity_id;
        var1.ackedId = var0;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3 = var7.bind(var0)(var6, var3);
    var6 = ['USER_NON_CHANNEL_ACK'];
    var3 = function(arg0) { // Environment: var1
        var0 = arg0;
        var2 = _closure1_slot28;
        var1 = {};
        var3 = 'USER_NON_CHANNEL_ACK';
        var1.type = var3;
        var3 = var0.ack_type;
        var1.ackType = var3;
        var0 = var0.entity_id;
        var1.ackedId = var0;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3 = var7.bind(var0)(var6, var3);
    var8 = ['CHANNEL_PINS_ACK'];
    var6 = function(arg0) { // Environment: var1
        var2 = _closure1_slot10;
        var1 = var2.loadGuildIds;
        var0 = arg0;
        var3 = var0.guild_id;
        var0 = new Array(1);
        var0[0] = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var3 = function(arg0) { // Environment: var1
        var0 = arg0;
        var2 = _closure1_slot28;
        var1 = {};
        var3 = 'CHANNEL_PINS_ACK';
        var1.type = var3;
        var3 = var0.channel_id;
        var1.channelId = var3;
        var3 = var0.timestamp;
        var1.timestamp = var3;
        var0 = var0.version;
        var1.version = var0;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3 = var9.bind(var0)(var8, var6, var3);
    var8 = ['CHANNEL_PINS_UPDATE'];
    var6 = function(arg0) { // Environment: var1
        var2 = _closure1_slot10;
        var1 = var2.loadGuildIds;
        var0 = arg0;
        var3 = var0.guild_id;
        var0 = new Array(1);
        var0[0] = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var3 = function(arg0) { // Environment: var1
        var0 = arg0;
        var2 = _closure1_slot28;
        var1 = {};
        var3 = 'CHANNEL_PINS_UPDATE';
        var1.type = var3;
        var3 = var0.channel_id;
        var1.channelId = var3;
        var0 = var0.last_pin_timestamp;
        var1.lastPinTimestamp = var0;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3 = var9.bind(var0)(var8, var6, var3);
    var8 = ['CHANNEL_CREATE', 'CHANNEL_DELETE'];
    var6 = function(arg0) { // Environment: var1
        var2 = _closure1_slot10;
        var1 = var2.loadGuildIds;
        var0 = arg0;
        var3 = var0.guild_id;
        var0 = new Array(1);
        var0[0] = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var3 = function(arg0, arg1) { // Environment: var1
        var2 = _closure1_slot28;
        var1 = {};
        var3 = arg1;
        var1.type = var3;
        var4 = _closure1_slot6;
        var0 = undefined;
        var3 = arg0;
        var3 = var4.bind(var0)(var3);
        var1.channel = var3;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3 = var9.bind(var0)(var8, var6, var3);
    var6 = ['VOICE_CHANNEL_STATUS_UPDATE'];
    var3 = function(arg0, arg1) { // Environment: var1
        var0 = arg0;
        var2 = _closure1_slot28;
        var1 = {};
        var3 = arg1;
        var1.type = var3;
        var3 = var0.id;
        var1.id = var3;
        var3 = var0.guild_id;
        var1.guildId = var3;
        var0 = var0.status;
        var1.status = var0;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3 = var7.bind(var0)(var6, var3);
    var6 = ['VOICE_CHANNEL_START_TIME_UPDATE'];
    var3 = function(arg0, arg1) { // Environment: var1
        _fun95572: for (var _fun95572_ip = 0;;) switch (_fun95572_ip) {
            case 0:
                var0 = arg0;
                var2 = _closure1_slot28;
                var1 = {};
                var3 = arg1;
                var1.type = var3;
                var3 = var0.id;
                var1.id = var3;
                var3 = var0.guild_id;
                var1.guildId = var3;
                var4 = var0.voice_start_time;
                var0 = null;
                var5 = var0 != var4;
                var0 = undefined;
                var3 = undefined;
                if (!var5) {
                    _fun95572_ip = 59;
                    continue _fun95572
                }
            case 56:
                var3 = var4;
            case 59:
                var1.voiceStartTime = var3;
                var1 = var2.bind(var0)(var1);
                return var0;
        }
    };
    var3 = var7.bind(var0)(var6, var3);
    var6 = ['CHANNEL_STATUSES'];
    var3 = function(arg0, arg1) { // Environment: var1
        var0 = arg0;
        var2 = _closure1_slot28;
        var1 = {};
        var3 = arg1;
        var1.type = var3;
        var3 = var0.guild_id;
        var1.guildId = var3;
        var0 = var0.channels;
        var1.channels = var0;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3 = var7.bind(var0)(var6, var3);
    var6 = ['CHANNEL_INFO'];
    var3 = function(arg0, arg1) { // Environment: var1
        var0 = arg0;
        var2 = _closure1_slot28;
        var1 = {};
        var3 = arg1;
        var1.type = var3;
        var3 = var0.guild_id;
        var1.guildId = var3;
        var4 = var0.channels;
        var3 = var4.map;
        var0 = function(arg0) { // Environment: var0
            var1 = arg0;
            var0 = {};
            var2 = var1.id;
            var0.id = var2;
            var2 = var1.status;
            var0.status = var2;
            var1 = var1.voice_start_time;
            var0.voiceStartTime = var1;
            return var0;
        };
        var0 = var3.bind(var4)(var0);
        var1.channels = var0;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3 = var7.bind(var0)(var6, var3);
    var6 = ['CHANNEL_MEMBER_COUNT_UPDATE'];
    var3 = function(arg0, arg1) { // Environment: var1
        var0 = arg0;
        var2 = _closure1_slot28;
        var1 = {};
        var3 = arg1;
        var1.type = var3;
        var3 = var0.guild_id;
        var1.guildId = var3;
        var3 = var0.channel_id;
        var1.channelId = var3;
        var3 = var0.presence_count;
        var1.online = var3;
        var0 = var0.member_count;
        var1.total = var0;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3 = var7.bind(var0)(var6, var3);
    var8 = ['CHANNEL_UPDATE'];
    var6 = function(arg0) { // Environment: var1
        var2 = _closure1_slot10;
        var1 = var2.loadGuildIds;
        var0 = arg0;
        var3 = var0.guild_id;
        var0 = new Array(1);
        var0[0] = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var3 = function(arg0) { // Environment: var1
        var2 = _closure1_slot19;
        var1 = var2.add;
        var0 = arg0;
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var3 = var9.bind(var0)(var8, var6, var3);
    var8 = ['THREAD_CREATE', 'THREAD_UPDATE', 'THREAD_DELETE'];
    var6 = function(arg0) { // Environment: var1
        var2 = _closure1_slot10;
        var1 = var2.loadGuildIds;
        var0 = arg0;
        var3 = var0.guild_id;
        var0 = new Array(1);
        var0[0] = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var3 = function(arg0, arg1) { // Environment: var1
        var4 = arg0;
        var5 = var4.newly_created;
        var2 = _closure1_slot5;
        var1 = _closure1_slot4;
        var0 = undefined;
        var4 = var2.bind(var0)(var4, var1);
        var2 = _closure1_slot28;
        var1 = {};
        var6 = arg1;
        var1.type = var6;
        var1.isNewlyCreated = var5;
        var3 = _closure1_slot6;
        var3 = var3.bind(var0)(var4);
        var1.channel = var3;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3 = var9.bind(var0)(var8, var6, var3);
    var8 = ['THREAD_LIST_SYNC'];
    var6 = function(arg0) { // Environment: var1
        var2 = _closure1_slot10;
        var1 = var2.loadGuildIds;
        var0 = arg0;
        var3 = var0.guild_id;
        var0 = new Array(1);
        var0[0] = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var3 = function(arg0) { // Environment: var1
        _fun95582: for (var _fun95582_ip = 0;;) switch (_fun95582_ip) {
            case 0:
                var3 = arg0;
                var2 = _closure1_slot28;
                var1 = {};
                var0 = 'THREAD_LIST_SYNC';
                var1.type = var0;
                var0 = var3.guild_id;
                var1.guildId = var0;
                var6 = var3.threads;
                var4 = var6.map;
                var0 = function(arg0) { // Environment: var0
                    _fun95583: for (var _fun95583_ip = 0;;) switch (_fun95583_ip) {
                        case 0:
                            var2 = arg0;
                            var4 = _closure1_slot9;
                            var3 = var4.getChannel;
                            var1 = var2.parent_id;
                            var1 = var3.bind(var4)(var1);
                            var3 = null;
                            if (!(var3 != var1)) {
                                _fun95583_ip = 55;
                                continue _fun95583
                            }
                        case 32:
                            var3 = var1.nsfw;
                            var2.nsfw = var3;
                            var1 = var1.type;
                            var2.parentChannelThreadType = var1;
                        case 55:
                            var1 = _closure1_slot6;
                            var0 = undefined;
                            var0 = var1.bind(var0)(var2);
                            return var0;
                    }
                };
                var0 = var4.bind(var6)(var0);
                var1.threads = var0;
                var0 = var3.most_recent_messages;
                var1.mostRecentMessages = var0;
                var6 = var3.members;
                var0 = undefined;
                var4 = undefined;
                if (!var6) {
                    _fun95582_ip = 132;
                    continue _fun95582
                }
            case 83:
                var9 = _closure1_slot1;
                var10 = _closure1_slot3;
                var5 = 22;
                var5 = var10[var5];
                var8 = var9.bind(var0)(var5);
                var7 = var8.map;
                var6 = var3.members;
                var5 = 23;
                var5 = var10[var5];
                var5 = var9.bind(var0)(var5);
                var4 = var7.bind(var8)(var6, var5);
            case 132:
                var1.members = var4;
                var3 = var3.channel_ids;
                var1.channelIds = var3;
                var1 = var2.bind(var0)(var1);
                return var0;
        }
    };
    var3 = var9.bind(var0)(var8, var6, var3);
    var6 = ['THREAD_MEMBER_UPDATE'];
    var3 = function(arg0) { // Environment: var1
        var0 = arg0;
        var2 = _closure1_slot28;
        var1 = {};
        var3 = 'THREAD_MEMBER_UPDATE';
        var1.type = var3;
        var3 = var0.id;
        var1.id = var3;
        var3 = var0.guild_id;
        var1.guildId = var3;
        var3 = var0.user_id;
        var1.userId = var3;
        var3 = var0.flags;
        var1.flags = var3;
        var3 = var0.muted;
        var1.muted = var3;
        var3 = var0.mute_config;
        var1.muteConfig = var3;
        var0 = var0.join_timestamp;
        var1.joinTimestamp = var0;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3 = var7.bind(var0)(var6, var3);
    var6 = ['THREAD_MEMBERS_UPDATE'];
    var3 = function(arg0) { // Environment: var1
        _fun95585: for (var _fun95585_ip = 0;;) switch (_fun95585_ip) {
            case 0:
                var3 = arg0;
                var _closure2_slot0 = var3;
                var2 = _closure1_slot28;
                var1 = {};
                var0 = 'THREAD_MEMBERS_UPDATE';
                var1.type = var0;
                var0 = var3.id;
                var1.id = var0;
                var0 = var3.guild_id;
                var1.guildId = var0;
                var0 = var3.member_count;
                var1.memberCount = var0;
                var7 = var3.added_members;
                var0 = null;
                var6 = var0 == var7;
                var0 = undefined;
                var4 = undefined;
                if (var6) {
                    _fun95585_ip = 93;
                    continue _fun95585
                }
            case 76:
                var6 = var7.map;
                var5 = function(arg0) { // Environment: var5
                    var1 = arg0;
                    var0 = {};
                    var2 = var1.id;
                    var0.id = var2;
                    var2 = _closure2_slot0;
                    var2 = var2.guild_id;
                    var0.guildId = var2;
                    var2 = var1.user_id;
                    var0.userId = var2;
                    var2 = var1.flags;
                    var0.flags = var2;
                    var1 = var1.join_timestamp;
                    var0.joinTimestamp = var1;
                    return var0;
                };
                var4 = var6.bind(var7)(var5);
            case 93:
                var1.addedMembers = var4;
                var4 = var3.removed_member_ids;
                var1.removedMemberIds = var4;
                var3 = var3.member_ids_preview;
                var1.memberIdsPreview = var3;
                var1 = var2.bind(var0)(var1);
                return var0;
        }
    };
    var3 = var7.bind(var0)(var6, var3);
    var6 = ['FORUM_UNREADS'];
    var3 = function(arg0) { // Environment: var1
        _fun95587: for (var _fun95587_ip = 0;;) switch (_fun95587_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.permission_denied;
                if (var1) {
                    _fun95587_ip = 77;
                    continue _fun95587
                }
            case 12:
                var2 = _closure1_slot28;
                var1 = {};
                var3 = 'FORUM_UNREADS';
                var1.type = var3;
                var3 = var0.channel_id;
                var1.channelId = var3;
                var4 = var0.threads;
                var3 = var4.map;
                var0 = function(arg0) { // Environment: var0
                    var1 = arg0;
                    var0 = {};
                    var2 = var1.thread_id;
                    var0.threadId = var2;
                    var2 = var1.missing;
                    var0.missing = var2;
                    var1 = var1.count;
                    var0.count = var1;
                    return var0;
                };
                var0 = var3.bind(var4)(var0);
                var1.threads = var0;
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
            case 77:
                var0 = undefined;
                return var0;
        }
    };
    var3 = var7.bind(var0)(var6, var3);
    var6 = ['SOUNDBOARD_SOUNDS'];
    var3 = function(arg0) { // Environment: var1
        var2 = _closure1_slot20;
        var1 = var2.add;
        var0 = arg0;
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var3 = var7.bind(var0)(var6, var3);
    var6 = ['CHANNEL_RECIPIENT_ADD', 'CHANNEL_RECIPIENT_REMOVE'];
    var3 = function(arg0, arg1) { // Environment: var1
        var0 = arg0;
        var4 = _closure1_slot9;
        var3 = var4.getBasicChannel;
        var2 = var0.channel_id;
        var3 = var3.bind(var4)(var2);
        var2 = _closure1_slot28;
        var1 = {};
        var4 = arg1;
        var1.type = var4;
        var4 = var0.channel_id;
        var1.channelId = var4;
        var4 = var0.user;
        var1.user = var4;
        var0 = var0.nick;
        var1.nick = var0;
        var0 = null;
        var0 = var0 != var3;
        var1.isMember = var0;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3 = var7.bind(var0)(var6, var3);
    var8 = ['GUILD_CREATE'];
    var6 = function(arg0) { // Environment: var1
        _fun95591: for (var _fun95591_ip = 0;;) switch (_fun95591_ip) {
            case 0:
                var1 = arg0;
                var3 = var1.data_mode;
                var2 = 'full';
                var0 = null;
                if (!(var2 !== var3)) {
                    _fun95591_ip = 50;
                    continue _fun95591
                }
            case 19:
                var3 = _closure1_slot10;
                var2 = var3.loadGuildIds;
                var4 = var1.id;
                var1 = new Array(1);
                var1[0] = var4;
                var0 = var2.bind(var3)(var1);
            case 50:
                return var0;
        }
    };
    var3 = function(arg0) { // Environment: var1
        _fun95592: for (var _fun95592_ip = 0;;) switch (_fun95592_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.unavailable;
                if (var2) {
                    _fun95592_ip = 130;
                    continue _fun95592
                }
            case 17:
                var3 = _closure1_slot2;
                var7 = _closure1_slot3;
                var2 = 17;
                var2 = var7[var2];
                var4 = undefined;
                var3 = var3.bind(var4)(var2);
                var2 = var3.hydratePreviouslyUnavailableGuild;
                var6 = var2.bind(var3)(var0);
                var _closure2_slot0 = var6;
                var3 = _closure1_slot1;
                var2 = 24;
                var2 = var7[var2];
                var3 = var3.bind(var4)(var2);
                var2 = var3.createGuild;
                var2 = var2.bind(var3)(var6);
                var3 = _closure1_slot28;
                var2 = {};
                var7 = 'VOICE_STATE_UPDATES';
                var2.type = var7;
                var7 = var6.voice_states;
                var6 = var7.map;
                var5 = function(arg0) { // Environment: var5
                    _fun95593: for (var _fun95593_ip = 0;;) switch (_fun95593_ip) {
                        case 0:
                            var2 = arg0;
                            var0 = {};
                            var1 = var2.user_id;
                            var0.userId = var1;
                            var1 = _closure2_slot0;
                            var1 = var1.id;
                            var0.guildId = var1;
                            var1 = var2.session_id;
                            var0.sessionId = var1;
                            var1 = var2.channel_id;
                            var0.channelId = var1;
                            var1 = var2.mute;
                            var0.mute = var1;
                            var1 = var2.deaf;
                            var0.deaf = var1;
                            var1 = var2.self_mute;
                            var0.selfMute = var1;
                            var1 = var2.self_deaf;
                            var0.selfDeaf = var1;
                            var1 = var2.self_video;
                            if (var1) {
                                _fun95593_ip = 106;
                                continue _fun95593
                            }
                        case 104:
                            var1 = false;
                        case 106:
                            var0.selfVideo = var1;
                            var1 = var2.suppress;
                            var0.suppress = var1;
                            var1 = var2.self_stream;
                            if (var1) {
                                _fun95593_ip = 133;
                                continue _fun95593
                            }
                        case 131:
                            var1 = false;
                        case 133:
                            var0.selfStream = var1;
                            var4 = var2.request_to_speak_timestamp;
                            var1 = null;
                            var5 = var1 != var4;
                            var3 = null;
                            if (!var5) {
                                _fun95593_ip = 158;
                                continue _fun95593
                            }
                        case 155:
                            var3 = var4;
                        case 158:
                            var0.requestToSpeakTimestamp = var3;
                            var2 = var2.discoverable;
                            var1 = var1 == var2;
                            if (var1) {
                                _fun95593_ip = 179;
                                continue _fun95593
                            }
                        case 176:
                            var1 = var2;
                        case 179:
                            var0.discoverable = var1;
                            return var0;
                    }
                };
                var5 = var6.bind(var7)(var5);
                var2.voiceStates = var5;
                var2 = var3.bind(var4)(var2);
                _fun95592_ip = 160;
                continue _fun95592;
            case 130:
                var2 = _closure1_slot28;
                var1 = {};
                var3 = 'GUILD_UNAVAILABLE';
                var1.type = var3;
                var0 = var0.id;
                var1.guildId = var0;
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
            case 160:
                var0 = undefined;
                return var0;
        }
    };
    var3 = var9.bind(var0)(var8, var6, var3);
    var6 = ['GUILD_UPDATE'];
    var3 = function(arg0) { // Environment: var1
        _fun95594: for (var _fun95594_ip = 0;;) switch (_fun95594_ip) {
            case 0:
                var3 = arg0;
                var4 = _closure1_slot28;
                var2 = {};
                var0 = 'GUILD_UPDATE';
                var2.type = var0;
                var2.guild = var3;
                var0 = undefined;
                var2 = var4.bind(var0)(var2);
                var2 = var3.unavailable;
                if (!var2) {
                    _fun95594_ip = 68;
                    continue _fun95594
                }
            case 40:
                var2 = _closure1_slot28;
                var1 = {};
                var4 = 'GUILD_UNAVAILABLE';
                var1.type = var4;
                var3 = var3.id;
                var1.guildId = var3;
                var1 = var2.bind(var0)(var1);
            case 68:
                return var0;
        }
    };
    var3 = var7.bind(var0)(var6, var3);
    var6 = ['GUILD_PRUNE_UPDATE'];
    var3 = function(arg0) { // Environment: var1
        var3 = arg0;
        var2 = _closure1_slot28;
        var1 = {};
        var0 = 'GUILD_PRUNE_UPDATE';
        var1.type = var0;
        var0 = var3.guild_id;
        var1.guildId = var0;
        var0 = {};
        var4 = var3.prune;
        var4 = var4.is_preview;
        var0.isPreview = var4;
        var4 = var3.prune;
        var4 = var4.days;
        var0.days = var4;
        var4 = var3.prune;
        var4 = var4.prune_count;
        var0.pruneCount = var4;
        var3 = var3.prune;
        var3 = var3.include_roles;
        var0.includeRoles = var3;
        var1.prune = var0;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3 = var7.bind(var0)(var6, var3);
    var6 = ['GUILD_DELETE'];
    var3 = function(arg0) { // Environment: var1
        _fun95596: for (var _fun95596_ip = 0;;) switch (_fun95596_ip) {
            case 0:
                var3 = arg0;
                var4 = _closure1_slot28;
                var2 = {};
                var0 = 'GUILD_DELETE';
                var2.type = var0;
                var2.guild = var3;
                var0 = undefined;
                var2 = var4.bind(var0)(var2);
                var2 = var3.geo_restricted;
                if (var2) {
                    _fun95596_ip = 79;
                    continue _fun95596
                }
            case 40:
                var2 = var3.unavailable;
                if (!var2) {
                    _fun95596_ip = 125;
                    continue _fun95596
                }
            case 49:
                var4 = _closure1_slot28;
                var2 = {};
                var5 = 'GUILD_UNAVAILABLE';
                var2.type = var5;
                var5 = var3.id;
                var2.guildId = var5;
                var2 = var4.bind(var0)(var2);
                _fun95596_ip = 125;
                continue _fun95596;
            case 79:
                var2 = _closure1_slot28;
                var1 = {};
                var4 = 'GUILD_GEO_RESTRICTED';
                var1.type = var4;
                var4 = var3.id;
                var1.guildId = var4;
                var4 = var3.icon;
                var1.icon = var4;
                var3 = var3.name;
                var1.name = var3;
                var1 = var2.bind(var0)(var1);
            case 125:
                return var0;
        }
    };
    var3 = var7.bind(var0)(var6, var3);
    var6 = ['GUILD_MEMBERS_CHUNK'];
    var3 = function(arg0) { // Environment: var1
        var0 = arg0;
        var _closure2_slot0 = var0;
        var3 = _closure1_slot1;
        var2 = _closure1_slot3;
        var0 = 16;
        var2 = var2[var0];
        var0 = undefined;
        var2 = var3.bind(var0)(var2);
        var3 = var2.Emitter;
        var2 = var3.batched;
        var1 = function() { // Environment: var1
            _fun95598: for (var _fun95598_ip = 0;;) switch (_fun95598_ip) {
                case 0:
                    var5 = _closure1_slot21;
                    var4 = var5.add;
                    var3 = {};
                    var2 = _closure2_slot0;
                    var6 = var2.guild_id;
                    var3.guildId = var6;
                    var6 = var2.members;
                    var3.members = var6;
                    var6 = var2.not_found;
                    var3.notFound = var6;
                    var3 = var4.bind(var5)(var3);
                    var3 = var2.presences;
                    var2 = null;
                    if (!(var2 != var3)) {
                        _fun95598_ip = 98;
                        continue _fun95598
                    }
                case 69:
                    var1 = _closure2_slot0;
                    var3 = var1.presences;
                    var2 = var3.forEach;
                    var1 = function(arg0) { // Environment: var1
                        var0 = arg0;
                        var7 = var0.user;
                        var6 = var0.status;
                        var3 = var0.client_status;
                        var5 = var0.activities;
                        var4 = var0.hidden_activities;
                        var0 = var0.processed_at_timestamp;
                        var2 = _closure1_slot32;
                        var1 = {};
                        var8 = _closure2_slot0;
                        var8 = var8.guild_id;
                        var1.guildId = var8;
                        var1.user = var7;
                        var1.status = var6;
                        var1.activities = var5;
                        var1.hiddenActivities = var4;
                        var1.clientStatus = var3;
                        var1.processedAtTimestamp = var0;
                        var0 = undefined;
                        var1 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var1 = var2.bind(var3)(var1);
                case 98:
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot3;
                    var0 = 13;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.flush;
                    var1 = 'GUILD_MEMBERS_CHUNK';
                    var1 = var2.bind(var3)(var1);
                    return var0;
            }
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var3 = var7.bind(var0)(var6, var3);
    var6 = ['THREAD_MEMBER_LIST_UPDATE'];
    var3 = function(arg0) { // Environment: var1
        var0 = arg0;
        var _closure2_slot0 = var0;
        var3 = _closure1_slot1;
        var2 = _closure1_slot3;
        var0 = 16;
        var2 = var2[var0];
        var0 = undefined;
        var2 = var3.bind(var0)(var2);
        var3 = var2.Emitter;
        var2 = var3.batched;
        var1 = function() { // Environment: var1
            _fun95601: for (var _fun95601_ip = 0;;) switch (_fun95601_ip) {
                case 0:
                    var5 = _closure1_slot28;
                    var4 = {};
                    var0 = 'THREAD_MEMBER_LIST_UPDATE';
                    var4.type = var0;
                    var3 = _closure2_slot0;
                    var0 = var3.guild_id;
                    var4.guildId = var0;
                    var0 = var3.thread_id;
                    var4.threadId = var0;
                    var0 = var3.members;
                    var4.members = var0;
                    var0 = undefined;
                    var4 = var5.bind(var0)(var4);
                    var4 = var3.presences;
                    var3 = null;
                    if (!(var3 != var4)) {
                        _fun95601_ip = 103;
                        continue _fun95601
                    }
                case 74:
                    var2 = _closure2_slot0;
                    var4 = var2.presences;
                    var3 = var4.forEach;
                    var2 = function(arg0) { // Environment: var2
                        var0 = arg0;
                        var7 = var0.user;
                        var6 = var0.status;
                        var3 = var0.client_status;
                        var5 = var0.activities;
                        var4 = var0.hidden_activities;
                        var0 = var0.processed_at_timestamp;
                        var2 = _closure1_slot32;
                        var1 = {};
                        var8 = _closure2_slot0;
                        var8 = var8.guild_id;
                        var1.guildId = var8;
                        var1.user = var7;
                        var1.status = var6;
                        var1.activities = var5;
                        var1.hiddenActivities = var4;
                        var1.clientStatus = var3;
                        var1.processedAtTimestamp = var0;
                        var0 = undefined;
                        var1 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var2 = var3.bind(var4)(var2);
                case 103:
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot3;
                    var1 = 13;
                    var1 = var3[var1];
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.flush;
                    var1 = var1.bind(var2)();
                    return var0;
            }
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var3 = var7.bind(var0)(var6, var3);
    var6 = ['GUILD_BAN_ADD', 'GUILD_BAN_REMOVE', 'GUILD_MEMBER_ADD', 'GUILD_MEMBER_UPDATE', 'GUILD_MEMBER_REMOVE'];
    var3 = function(arg0, arg1) { // Environment: var1
        var3 = arg0;
        var2 = _closure1_slot28;
        var1 = {};
        var4 = arg1;
        var1.type = var4;
        var4 = var3.guild_id;
        var1.guildId = var4;
        var4 = var3.user;
        var1.user = var4;
        var4 = var3.avatar;
        var1.avatar = var4;
        var4 = var3.avatar_decoration_data;
        var1.avatarDecoration = var4;
        var4 = var3.roles;
        var1.roles = var4;
        var4 = var3.nick;
        var1.nick = var4;
        var4 = var3.premium_since;
        var1.premiumSince = var4;
        var4 = var3.pending;
        var1.isPending = var4;
        var4 = var3.joined_at;
        var1.joinedAt = var4;
        var4 = var3.communication_disabled_until;
        var1.communicationDisabledUntil = var4;
        var4 = var3.unusual_dm_activity_until;
        var1.unusualDMActivityUntil = var4;
        var4 = var3.flags;
        var1.flags = var4;
        var4 = var3.collectibles;
        var1.collectibles = var4;
        var5 = _closure1_slot0;
        var4 = _closure1_slot3;
        var0 = 25;
        var4 = var4[var0];
        var0 = undefined;
        var5 = var5.bind(var0)(var4);
        var4 = var5.parseServerDisplayNameStyles;
        var3 = var3.display_name_styles;
        var3 = var4.bind(var5)(var3);
        var1.displayNameStyles = var3;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3 = var7.bind(var0)(var6, var3);
    var8 = ['GUILD_ROLE_CREATE', 'GUILD_ROLE_UPDATE'];
    var6 = function(arg0) { // Environment: var1
        var2 = _closure1_slot10;
        var1 = var2.loadGuildIds;
        var0 = arg0;
        var3 = var0.guild_id;
        var0 = new Array(1);
        var0[0] = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var3 = function(arg0, arg1) { // Environment: var1
        var0 = arg0;
        var2 = _closure1_slot28;
        var1 = {};
        var3 = arg1;
        var1.type = var3;
        var3 = var0.guild_id;
        var1.guildId = var3;
        var0 = var0.role;
        var1.role = var0;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3 = var9.bind(var0)(var8, var6, var3);
    var8 = ['GUILD_ROLE_DELETE'];
    var6 = function(arg0) { // Environment: var1
        var2 = _closure1_slot10;
        var1 = var2.loadGuildIds;
        var0 = arg0;
        var3 = var0.guild_id;
        var0 = new Array(1);
        var0[0] = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var3 = function(arg0) { // Environment: var1
        var0 = arg0;
        var2 = _closure1_slot28;
        var1 = {};
        var3 = 'GUILD_ROLE_DELETE';
        var1.type = var3;
        var3 = var0.guild_id;
        var1.guildId = var3;
        var3 = var0.role_id;
        var1.roleId = var3;
        var0 = var0.version;
        var1.version = var0;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3 = var9.bind(var0)(var8, var6, var3);
    var6 = ['GUILD_EMOJIS_UPDATE'];
    var3 = function(arg0) { // Environment: var1
        var0 = arg0;
        var2 = _closure1_slot28;
        var1 = {};
        var3 = 'GUILD_EMOJIS_UPDATE';
        var1.type = var3;
        var3 = var0.guild_id;
        var1.guildId = var3;
        var0 = var0.emojis;
        var1.emojis = var0;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3 = var7.bind(var0)(var6, var3);
    var6 = ['GUILD_STICKERS_UPDATE'];
    var3 = function(arg0) { // Environment: var1
        var0 = arg0;
        var2 = _closure1_slot28;
        var1 = {};
        var3 = 'GUILD_STICKERS_UPDATE';
        var1.type = var3;
        var3 = var0.guild_id;
        var1.guildId = var3;
        var0 = var0.stickers;
        var1.stickers = var0;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3 = var7.bind(var0)(var6, var3);
    var6 = ['GUILD_INTEGRATIONS_UPDATE'];
    var3 = function(arg0) { // Environment: var1
        var2 = _closure1_slot28;
        var1 = {};
        var0 = 'GUILD_INTEGRATIONS_UPDATE';
        var1.type = var0;
        var0 = arg0;
        var0 = var0.guild_id;
        var1.guildId = var0;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3 = var7.bind(var0)(var6, var3);
    var6 = ['INTEGRATION_CREATE'];
    var3 = function(arg0) { // Environment: var1
        var0 = arg0;
        var2 = _closure1_slot28;
        var1 = {};
        var3 = 'INTEGRATION_CREATE';
        var1.type = var3;
        var3 = var0.application;
        var1.application = var3;
        var0 = var0.guild_id;
        var1.guildId = var0;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3 = var7.bind(var0)(var6, var3);
    var6 = ['INTEGRATION_DELETE'];
    var3 = function(arg0) { // Environment: var1
        var0 = arg0;
        var2 = _closure1_slot28;
        var1 = {};
        var3 = 'INTEGRATION_DELETE';
        var1.type = var3;
        var3 = var0.application_id;
        var1.applicationId = var3;
        var0 = var0.guild_id;
        var1.guildId = var0;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3 = var7.bind(var0)(var6, var3);
    var6 = ['USER_UPDATE'];
    var3 = function(arg0) { // Environment: var1
        var2 = _closure1_slot28;
        var1 = {};
        var0 = 'CURRENT_USER_UPDATE';
        var1.type = var0;
        var0 = arg0;
        var1.user = var0;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3 = var7.bind(var0)(var6, var3);
    var6 = ['USER_SETTINGS_PROTO_UPDATE'];
    var3 = function(arg0) { // Environment: var1
        _fun95614: for (var _fun95614_ip = 0;;) switch (_fun95614_ip) {
            case 0:
                var3 = arg0;
                var4 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 18;
                var1 = var2[var1];
                var2 = undefined;
                var6 = var4.bind(var2)(var1);
                var5 = var6.b64ToProtoWithType;
                var1 = var3.settings;
                var4 = var1.type;
                var1 = var3.settings;
                var1 = var1.proto;
                var5 = var5.bind(var6)(var4, var1);
                var1 = null;
                if (!(var1 != var5)) {
                    _fun95614_ip = 137;
                    continue _fun95614
                }
            case 69:
                var4 = 'string';
                var1 = typeof var5;
                if (!(var4 !== var1)) {
                    _fun95614_ip = 139;
                    continue _fun95614
                }
            case 80:
                var1 = _closure1_slot28;
                var0 = {};
                var4 = 'USER_SETTINGS_PROTO_UPDATE';
                var0.type = var4;
                var4 = {};
                var4.proto = var5;
                var5 = var3.settings;
                var5 = var5.type;
                var4.type = var5;
                var0.settings = var4;
                var3 = var3.partial;
                var0.partial = var3;
                var0 = var1.bind(var2)(var0);
            case 137:
                return var2;
            case 139:
                var0 = global;
                var1 = var0.Error;
                var0 = 'UserSettingsProto must not be a string';
                var0 = var1.bind(var2)(var0);
                throw var0;
        }
    };
    var3 = var7.bind(var0)(var6, var3);
    var6 = ['USER_GUILD_SETTINGS_UPDATE'];
    var3 = function(arg0) { // Environment: var1
        var2 = _closure1_slot28;
        var1 = {};
        var0 = 'USER_GUILD_SETTINGS_FULL_UPDATE';
        var1.type = var0;
        var0 = new Array(1);
        var3 = arg0;
        var0[0] = var3;
        var1.userGuildSettings = var0;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3 = var7.bind(var0)(var6, var3);
    var6 = ['USER_CONNECTIONS_UPDATE'];
    var3 = function() { // Environment: var1
        var2 = _closure1_slot28;
        var1 = {};
        var0 = 'USER_CONNECTIONS_UPDATE';
        var1.type = var0;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3 = var7.bind(var0)(var6, var3);
    var6 = ['USER_REQUIRED_ACTION_UPDATE'];
    var3 = function(arg0) { // Environment: var1
        var2 = _closure1_slot28;
        var1 = {};
        var0 = 'USER_REQUIRED_ACTION_UPDATE';
        var1.type = var0;
        var0 = arg0;
        var0 = var0.required_action;
        var1.requiredAction = var0;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3 = var7.bind(var0)(var6, var3);
    var6 = ['USER_NOTE_UPDATE'];
    var3 = function(arg0) { // Environment: var1
        var2 = _closure1_slot28;
        var1 = {};
        var0 = 'USER_NOTE_UPDATE';
        var1.type = var0;
        var3 = arg0;
        var4 = var1;
        var0 = copyDataProperties(var4, var3);
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3 = var7.bind(var0)(var6, var3);
    var6 = ['RELATIONSHIP_ADD'];
    var3 = function(arg0) { // Environment: var1
        _fun95619: for (var _fun95619_ip = 0;;) switch (_fun95619_ip) {
            case 0:
                var0 = arg0;
                var2 = _closure1_slot28;
                var1 = {};
                var3 = 'RELATIONSHIP_ADD';
                var1.type = var3;
                var3 = {};
                var4 = var0.id;
                var3.id = var4;
                var4 = var0.type;
                var3.type = var4;
                var4 = var0.user;
                var3.user = var4;
                var4 = var0.since;
                var3.since = var4;
                var4 = var0.nickname;
                var3.nickname = var4;
                var4 = var0.is_spam_request;
                if (var4) {
                    _fun95619_ip = 82;
                    continue _fun95619
                }
            case 80:
                var4 = false;
            case 82:
                var3.isSpamRequest = var4;
                var4 = var0.is_stranger_request;
                if (var4) {
                    _fun95619_ip = 98;
                    continue _fun95619
                }
            case 96:
                var4 = false;
            case 98:
                var3.isStrangerRequest = var4;
                var4 = var0.user_ignored;
                if (var4) {
                    _fun95619_ip = 114;
                    continue _fun95619
                }
            case 112:
                var4 = false;
            case 114:
                var3.userIgnored = var4;
                var4 = var0.origin_application_id;
                var3.originApplicationId = var4;
                var1.relationship = var3;
                var3 = var0.should_notify;
                var0 = true;
                var0 = var0 === var3;
                var1.shouldNotify = var0;
                var0 = undefined;
                var1 = var2.bind(var0)(var1);
                return var0;
        }
    };
    var3 = var7.bind(var0)(var6, var3);
    var6 = ['RELATIONSHIP_REMOVE'];
    var3 = function(arg0) { // Environment: var1
        var2 = _closure1_slot28;
        var1 = {};
        var0 = 'RELATIONSHIP_REMOVE';
        var1.type = var0;
        var0 = arg0;
        var1.relationship = var0;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3 = var7.bind(var0)(var6, var3);
    var6 = ['RELATIONSHIP_UPDATE'];
    var3 = function(arg0) { // Environment: var1
        _fun95621: for (var _fun95621_ip = 0;;) switch (_fun95621_ip) {
            case 0:
                var3 = arg0;
                var2 = _closure1_slot28;
                var1 = {};
                var0 = 'RELATIONSHIP_UPDATE';
                var1.type = var0;
                var0 = {};
                var4 = var3.id;
                var0.id = var4;
                var4 = var3.type;
                var0.type = var4;
                var4 = var3.user;
                var0.user = var4;
                var4 = var3.nickname;
                var0.nickname = var4;
                var4 = var3.since;
                var0.since = var4;
                var4 = var3.is_spam_request;
                if (var4) {
                    _fun95621_ip = 82;
                    continue _fun95621
                }
            case 80:
                var4 = false;
            case 82:
                var0.isSpamRequest = var4;
                var4 = var3.is_stranger_request;
                if (var4) {
                    _fun95621_ip = 98;
                    continue _fun95621
                }
            case 96:
                var4 = false;
            case 98:
                var0.isStrangerRequest = var4;
                var4 = var3.user_ignored;
                if (var4) {
                    _fun95621_ip = 114;
                    continue _fun95621
                }
            case 112:
                var4 = false;
            case 114:
                var0.userIgnored = var4;
                var3 = var3.origin_application_id;
                var0.originApplicationId = var3;
                var1.relationship = var0;
                var0 = undefined;
                var1 = var2.bind(var0)(var1);
                return var0;
        }
    };
    var3 = var7.bind(var0)(var6, var3);
    var6 = ['GAME_RELATIONSHIP_ADD'];
    var3 = function(arg0) { // Environment: var1
        var3 = arg0;
        var2 = _closure1_slot28;
        var1 = {};
        var0 = 'GAME_RELATIONSHIP_ADD';
        var1.type = var0;
        var0 = {};
        var4 = var3.id;
        var0.id = var4;
        var4 = var3.application_id;
        var0.applicationId = var4;
        var4 = var3.type;
        var0.type = var4;
        var4 = var3.since;
        var0.since = var4;
        var4 = var3.dm_access_type;
        var0.dmAccessType = var4;
        var3 = var3.user;
        var0.user = var3;
        var1.gameRelationship = var0;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3 = var7.bind(var0)(var6, var3);
    var6 = ['GAME_RELATIONSHIP_REMOVE'];
    var3 = function(arg0) { // Environment: var1
        var0 = arg0;
        var2 = _closure1_slot28;
        var1 = {};
        var3 = 'GAME_RELATIONSHIP_REMOVE';
        var1.type = var3;
        var3 = var0.id;
        var1.userId = var3;
        var0 = var0.application_id;
        var1.applicationId = var0;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3 = var7.bind(var0)(var6, var3);
    var6 = ['PRESENCE_UPDATE'];
    var3 = function(arg0) { // Environment: var1
        var0 = arg0;
        var2 = _closure1_slot32;
        var1 = {};
        var3 = var0.guild_id;
        var1.guildId = var3;
        var3 = var0.user;
        var1.user = var3;
        var3 = var0.status;
        var1.status = var3;
        var3 = var0.activities;
        var1.activities = var3;
        var3 = var0.hidden_activities;
        var1.hiddenActivities = var3;
        var3 = var0.client_status;
        var1.clientStatus = var3;
        var0 = var0.processed_at_timestamp;
        var1.processedAtTimestamp = var0;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3 = var7.bind(var0)(var6, var3);
    var6 = ['PRESENCES_REPLACE'];
    var3 = function(arg0) { // Environment: var1
        var2 = _closure1_slot28;
        var1 = {};
        var0 = 'PRESENCES_REPLACE';
        var1.type = var0;
        var0 = arg0;
        var1.presences = var0;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3 = var7.bind(var0)(var6, var3);
    var6 = ['SESSIONS_REPLACE'];
    var3 = function(arg0) { // Environment: var1
        var2 = _closure1_slot28;
        var1 = {};
        var3 = 'SESSIONS_REPLACE';
        var1.type = var3;
        var4 = _closure1_slot31;
        var0 = undefined;
        var3 = arg0;
        var3 = var4.bind(var0)(var3);
        var1.sessions = var3;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3 = var7.bind(var0)(var6, var3);
    var6 = ['VOICE_STATE_UPDATE'];
    var3 = function(arg0) { // Environment: var1
        var2 = _closure1_slot27;
        var1 = new Array(1);
        var0 = arg0;
        var1[0] = var0;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3 = var7.bind(var0)(var6, var3);
    var6 = ['VOICE_STATE_UPDATE_BATCH'];
    var3 = function(arg0) { // Environment: var1
        var2 = _closure1_slot27;
        var0 = arg0;
        var1 = var0.voice_states;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3 = var7.bind(var0)(var6, var3);
    var6 = ['VOICE_SERVER_UPDATE'];
    var3 = function(arg0) { // Environment: var1
        var0 = arg0;
        var2 = _closure1_slot28;
        var1 = {};
        var3 = 'VOICE_SERVER_UPDATE';
        var1.type = var3;
        var3 = var0.guild_id;
        var1.guildId = var3;
        var3 = var0.channel_id;
        var1.channelId = var3;
        var3 = var0.endpoint;
        var1.endpoint = var3;
        var0 = var0.token;
        var1.token = var0;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3 = var7.bind(var0)(var6, var3);
    var6 = ['CALL_CREATE'];
    var3 = function(arg0) { // Environment: var1
        _fun95630: for (var _fun95630_ip = 0;;) switch (_fun95630_ip) {
            case 0:
                var2 = arg0;
                var4 = _closure1_slot28;
                var3 = {};
                var0 = 'CALL_CREATE';
                var3.type = var0;
                var0 = var2.channel_id;
                var3.channelId = var0;
                var0 = var2.message_id;
                var3.messageId = var0;
                var0 = var2.region;
                var3.region = var0;
                var0 = var2.ringing;
                var3.ringing = var0;
                var0 = undefined;
                var3 = var4.bind(var0)(var3);
                var5 = var2.voice_states;
                var2 = null;
                if (!(var2 != var5)) {
                    _fun95630_ip = 123;
                    continue _fun95630
                }
            case 80:
                var2 = _closure1_slot28;
                var1 = {};
                var3 = 'VOICE_STATE_UPDATES';
                var1.type = var3;
                var4 = var5.map;
                var3 = function(arg0) { // Environment: var3
                    _fun95631: for (var _fun95631_ip = 0;;) switch (_fun95631_ip) {
                        case 0:
                            var2 = arg0;
                            var0 = {};
                            var1 = var2.user_id;
                            var0.userId = var1;
                            var1 = null;
                            var0.guildId = var1;
                            var3 = var2.session_id;
                            var0.sessionId = var3;
                            var3 = var2.channel_id;
                            var0.channelId = var3;
                            var3 = var2.mute;
                            var0.mute = var3;
                            var3 = var2.deaf;
                            var0.deaf = var3;
                            var3 = var2.self_mute;
                            var0.selfMute = var3;
                            var3 = var2.self_deaf;
                            var0.selfDeaf = var3;
                            var3 = var2.self_video;
                            if (var3) {
                                _fun95631_ip = 96;
                                continue _fun95631
                            }
                        case 94:
                            var3 = false;
                        case 96:
                            var0.selfVideo = var3;
                            var3 = var2.suppress;
                            var0.suppress = var3;
                            var3 = var2.self_stream;
                            if (var3) {
                                _fun95631_ip = 123;
                                continue _fun95631
                            }
                        case 121:
                            var3 = false;
                        case 123:
                            var0.selfStream = var3;
                            var4 = var2.request_to_speak_timestamp;
                            var5 = var1 != var4;
                            var3 = null;
                            if (!var5) {
                                _fun95631_ip = 146;
                                continue _fun95631
                            }
                        case 143:
                            var3 = var4;
                        case 146:
                            var0.requestToSpeakTimestamp = var3;
                            var2 = var2.discoverable;
                            var1 = var1 == var2;
                            if (var1) {
                                _fun95631_ip = 167;
                                continue _fun95631
                            }
                        case 164:
                            var1 = var2;
                        case 167:
                            var0.discoverable = var1;
                            return var0;
                    }
                };
                var3 = var4.bind(var5)(var3);
                var1.voiceStates = var3;
                var1 = var2.bind(var0)(var1);
            case 123:
                return var0;
        }
    };
    var3 = var7.bind(var0)(var6, var3);
    var6 = ['CALL_UPDATE'];
    var3 = function(arg0) { // Environment: var1
        var0 = arg0;
        var2 = _closure1_slot28;
        var1 = {};
        var3 = 'CALL_UPDATE';
        var1.type = var3;
        var3 = var0.channel_id;
        var1.channelId = var3;
        var3 = var0.message_id;
        var1.messageId = var3;
        var3 = var0.region;
        var1.region = var3;
        var0 = var0.ringing;
        var1.ringing = var0;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3 = var7.bind(var0)(var6, var3);
    var6 = ['CALL_DELETE'];
    var3 = function(arg0) { // Environment: var1
        var0 = arg0;
        var2 = _closure1_slot28;
        var1 = {};
        var3 = 'CALL_DELETE';
        var1.type = var3;
        var3 = var0.channel_id;
        var1.channelId = var3;
        var0 = var0.unavailable;
        var1.unavailable = var0;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3 = var7.bind(var0)(var6, var3);
    var6 = ['OAUTH2_TOKEN_CREATE'];
    var3 = function(arg0) { // Environment: var1
        var0 = arg0;
        var2 = _closure1_slot28;
        var1 = {};
        var3 = 'OAUTH2_TOKEN_CREATE';
        var1.type = var3;
        var3 = var0.id;
        var1.id = var3;
        var3 = var0.scopes;
        var1.scopes = var3;
        var0 = var0.application;
        var1.application = var0;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3 = var7.bind(var0)(var6, var3);
    var6 = ['OAUTH2_TOKEN_DELETE'];
    var3 = function(arg0) { // Environment: var1
        var0 = arg0;
        var2 = _closure1_slot28;
        var1 = {};
        var3 = 'OAUTH2_TOKEN_DELETE';
        var1.type = var3;
        var3 = var0.id;
        var1.id = var3;
        var0 = var0.application_id;
        var1.applicationId = var0;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3 = var7.bind(var0)(var6, var3);
    var6 = ['OAUTH2_TOKEN_REVOKE'];
    var3 = function(arg0) { // Environment: var1
        var2 = _closure1_slot28;
        var1 = {};
        var0 = 'OAUTH2_TOKEN_REVOKE';
        var1.type = var0;
        var0 = arg0;
        var0 = var0.access_token;
        var1.accessToken = var0;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3 = var7.bind(var0)(var6, var3);
    var6 = ['RECENT_MENTION_DELETE'];
    var3 = function(arg0) { // Environment: var1
        var2 = _closure1_slot28;
        var1 = {};
        var0 = 'RECENT_MENTION_DELETE';
        var1.type = var0;
        var0 = arg0;
        var0 = var0.message_id;
        var1.id = var0;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3 = var7.bind(var0)(var6, var3);
    var6 = ['SAVED_MESSAGE_CREATE'];
    var3 = function(arg0) { // Environment: var1
        var2 = _closure1_slot28;
        var1 = {};
        var3 = 'SAVED_MESSAGE_CREATE';
        var1.type = var3;
        var4 = _closure1_slot0;
        var3 = _closure1_slot3;
        var0 = 26;
        var3 = var3[var0];
        var0 = undefined;
        var5 = var4.bind(var0)(var3);
        var4 = var5.savedMessageCreateObjectToClient;
        var3 = arg0;
        var3 = var4.bind(var5)(var3);
        var1.savedMessage = var3;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3 = var7.bind(var0)(var6, var3);
    var6 = ['SAVED_MESSAGE_DELETE'];
    var3 = function(arg0) { // Environment: var1
        var2 = _closure1_slot28;
        var1 = {};
        var3 = 'SAVED_MESSAGE_DELETE';
        var1.type = var3;
        var4 = _closure1_slot0;
        var3 = _closure1_slot3;
        var0 = 26;
        var3 = var3[var0];
        var0 = undefined;
        var5 = var4.bind(var0)(var3);
        var4 = var5.savedMessageDeleteObjectToClient;
        var3 = arg0;
        var3 = var4.bind(var5)(var3);
        var1.savedMessageData = var3;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3 = var7.bind(var0)(var6, var3);
    var6 = ['FRIEND_SUGGESTION_CREATE'];
    var3 = function(arg0) { // Environment: var1
        var2 = _closure1_slot28;
        var1 = {};
        var0 = 'FRIEND_SUGGESTION_CREATE';
        var1.type = var0;
        var0 = arg0;
        var1.suggestion = var0;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3 = var7.bind(var0)(var6, var3);
    var6 = ['FRIEND_SUGGESTION_DELETE'];
    var3 = function(arg0) { // Environment: var1
        var2 = _closure1_slot28;
        var1 = {};
        var0 = 'FRIEND_SUGGESTION_DELETE';
        var1.type = var0;
        var0 = arg0;
        var0 = var0.suggested_user_id;
        var1.suggestedUserId = var0;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3 = var7.bind(var0)(var6, var3);
    var6 = ['WEBHOOKS_UPDATE'];
    var3 = function(arg0) { // Environment: var1
        var0 = arg0;
        var2 = _closure1_slot28;
        var1 = {};
        var3 = 'WEBHOOKS_UPDATE';
        var1.type = var3;
        var3 = var0.guild_id;
        var1.guildId = var3;
        var0 = var0.channel_id;
        var1.channelId = var0;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3 = var7.bind(var0)(var6, var3);
    var6 = ['MESSAGE_REACTION_ADD', 'MESSAGE_REACTION_REMOVE'];
    var3 = function(arg0, arg1) { // Environment: var1
        var0 = arg0;
        var2 = _closure1_slot28;
        var1 = {};
        var3 = arg1;
        var1.type = var3;
        var3 = var0.channel_id;
        var1.channelId = var3;
        var3 = var0.message_id;
        var1.messageId = var3;
        var3 = var0.user_id;
        var1.userId = var3;
        var3 = var0.emoji;
        var1.emoji = var3;
        var3 = var0.burst_colors;
        var1.colors = var3;
        var3 = var0.type;
        var1.reactionType = var3;
        var0 = var0.message_author_id;
        var1.messageAuthorId = var0;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3 = var7.bind(var0)(var6, var3);
    var6 = ['MESSAGE_POLL_VOTE_ADD', 'MESSAGE_POLL_VOTE_REMOVE'];
    var3 = function(arg0, arg1) { // Environment: var1
        _fun95644: for (var _fun95644_ip = 0;;) switch (_fun95644_ip) {
            case 0:
                var4 = arg0;
                var2 = _closure1_slot28;
                var1 = {};
                var3 = 'MESSAGE_REACTION_REMOVE';
                var6 = 'MESSAGE_POLL_VOTE_ADD';
                var5 = arg1;
                if (!(var6 === var5)) {
                    _fun95644_ip = 33;
                    continue _fun95644
                }
            case 29:
                var3 = 'MESSAGE_REACTION_ADD';
            case 33:
                var1.type = var3;
                var3 = var4.channel_id;
                var1.channelId = var3;
                var3 = var4.message_id;
                var1.messageId = var3;
                var3 = var4.user_id;
                var1.userId = var3;
                var3 = {};
                var4 = var4.answer_id;
                var3.id = var4;
                var4 = '';
                var3.name = var4;
                var1.emoji = var3;
                var4 = _closure1_slot0;
                var3 = _closure1_slot3;
                var0 = 27;
                var3 = var3[var0];
                var0 = undefined;
                var3 = var4.bind(var0)(var3);
                var3 = var3.ReactionTypes;
                var3 = var3.VOTE;
                var1.reactionType = var3;
                var1 = var2.bind(var0)(var1);
                return var0;
        }
    };
    var3 = var7.bind(var0)(var6, var3);
    var6 = ['MESSAGE_POLL_VOTE_ADD_MANY'];
    var3 = function(arg0) { // Environment: var1
        var0 = arg0;
        var2 = _closure1_slot28;
        var1 = {};
        var3 = 'MESSAGE_REACTION_ADD_MANY';
        var1.type = var3;
        var3 = var0.channel_id;
        var1.channelId = var3;
        var3 = var0.message_id;
        var1.messageId = var3;
        var4 = var0.votes;
        var3 = var4.map;
        var0 = function(arg0) { // Environment: var0
            var1 = arg0;
            var0 = {};
            var5 = var0;
            var4 = var1;
            var2 = copyDataProperties(var5, var4);
            var2 = {};
            var1 = var1.answer_id;
            var2.id = var1;
            var1 = '';
            var2.name = var1;
            var1 = 'emoji';
            var0[var1] = var2;
            var3 = _closure1_slot0;
            var2 = _closure1_slot3;
            var1 = 27;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var1 = var1.ReactionTypes;
            var2 = var1.VOTE;
            var1 = 'reactionType';
            var0[var1] = var2;
            return var0;
        };
        var0 = var3.bind(var4)(var0);
        var1.reactions = var0;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3 = var7.bind(var0)(var6, var3);
    var6 = ['MESSAGE_REACTION_REMOVE_ALL'];
    var3 = function(arg0) { // Environment: var1
        var0 = arg0;
        var2 = _closure1_slot28;
        var1 = {};
        var3 = 'MESSAGE_REACTION_REMOVE_ALL';
        var1.type = var3;
        var3 = var0.channel_id;
        var1.channelId = var3;
        var0 = var0.message_id;
        var1.messageId = var0;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3 = var7.bind(var0)(var6, var3);
    var6 = ['MESSAGE_REACTION_REMOVE_EMOJI'];
    var3 = function(arg0) { // Environment: var1
        var0 = arg0;
        var2 = _closure1_slot28;
        var1 = {};
        var3 = 'MESSAGE_REACTION_REMOVE_EMOJI';
        var1.type = var3;
        var3 = var0.channel_id;
        var1.channelId = var3;
        var3 = var0.message_id;
        var1.messageId = var3;
        var0 = var0.emoji;
        var1.emoji = var0;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3 = var7.bind(var0)(var6, var3);
    var6 = ['MESSAGE_REACTION_ADD_MANY'];
    var3 = function(arg0) { // Environment: var1
        var0 = arg0;
        var2 = _closure1_slot28;
        var1 = {};
        var3 = 'MESSAGE_REACTION_ADD_MANY';
        var1.type = var3;
        var3 = var0.channel_id;
        var1.channelId = var3;
        var3 = var0.message_id;
        var1.messageId = var3;
        var0 = var0.reactions;
        var1.reactions = var0;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3 = var7.bind(var0)(var6, var3);
    var6 = ['PAYMENT_UPDATE'];
    var3 = function(arg0) { // Environment: var1
        var2 = _closure1_slot28;
        var1 = {};
        var0 = 'PAYMENT_UPDATE';
        var1.type = var0;
        var0 = arg0;
        var1.payment = var0;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3 = var7.bind(var0)(var6, var3);
    var6 = ['ENTITLEMENT_CREATE', 'ENTITLEMENT_UPDATE', 'ENTITLEMENT_DELETE'];
    var3 = function(arg0, arg1) { // Environment: var1
        var2 = _closure1_slot28;
        var1 = {};
        var0 = arg1;
        var1.type = var0;
        var0 = arg0;
        var1.entitlement = var0;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3 = var7.bind(var0)(var6, var3);
    var6 = ['USER_PAYMENT_SOURCES_UPDATE'];
    var3 = function() { // Environment: var1
        _fun95652: for (var _fun95652_ip = 0;;) switch (_fun95652_ip) {
            case 0:
                var2 = _closure1_slot12;
                var1 = var2.hasLayers;
                var1 = var1.bind(var2)();
                if (!var1) {
                    _fun95652_ip = 95;
                    continue _fun95652
                }
            case 20:
                var2 = _closure1_slot0;
                var4 = _closure1_slot3;
                var1 = 28;
                var1 = var4[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = var2.fetchPaymentSources;
                var1 = var1.bind(var2)();
                var2 = _closure1_slot2;
                var1 = 29;
                var1 = var4[var1];
                var2 = var2.bind(var3)(var1);
                var1 = var2.fetchSubscriptionPlansBySKUs;
                var3 = _closure1_slot15;
                var0 = var3.getFetchedSKUIDs;
                var0 = var0.bind(var3)();
                var0 = var1.bind(var2)(var0);
            case 95:
                var0 = undefined;
                return var0;
        }
    };
    var3 = var7.bind(var0)(var6, var3);
    var6 = ['USER_SUBSCRIPTIONS_UPDATE'];
    var3 = function() { // Environment: var1
        _fun95653: for (var _fun95653_ip = 0;;) switch (_fun95653_ip) {
            case 0:
                var3 = _closure1_slot2;
                var2 = _closure1_slot3;
                var0 = 30;
                var2 = var2[var0];
                var0 = undefined;
                var3 = var3.bind(var0)(var2);
                var2 = var3.fetchCurrentUser;
                var2 = var2.bind(var3)();
                var3 = _closure1_slot12;
                var2 = var3.hasLayers;
                var2 = var2.bind(var3)();
                if (!var2) {
                    _fun95653_ip = 82;
                    continue _fun95653
                }
            case 52:
                var2 = _closure1_slot0;
                var3 = _closure1_slot3;
                var1 = 28;
                var1 = var3[var1];
                var2 = var2.bind(var0)(var1);
                var1 = var2.fetchSubscriptions;
                var1 = var1.bind(var2)();
            case 82:
                return var0;
        }
    };
    var3 = var7.bind(var0)(var6, var3);
    var6 = ['WISHLIST_ITEM_PURCHASED'];
    var3 = function(arg0) { // Environment: var1
        var0 = arg0;
        var2 = _closure1_slot28;
        var1 = {};
        var3 = 'WISHLIST_ITEM_PURCHASED';
        var1.type = var3;
        var3 = var0.recipient_id;
        var1.recipientId = var3;
        var0 = var0.sku_id;
        var1.skuId = var0;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3 = var7.bind(var0)(var6, var3);
    var6 = ['USER_PREMIUM_GUILD_SUBSCRIPTION_SLOT_CREATE'];
    var3 = function(arg0) { // Environment: var1
        var5 = arg0;
        var2 = _closure1_slot28;
        var1 = {};
        var3 = 'GUILD_BOOST_SLOT_CREATE';
        var1.type = var3;
        var4 = _closure1_slot7;
        var3 = var4.createFromServer;
        var7 = _closure1_slot16;
        var6 = var7.getSubscriptionById;
        var0 = var5.subscription_id;
        var0 = var6.bind(var7)(var0);
        var0 = var3.bind(var4)(var5, var0);
        var1.guildBoostSlot = var0;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3 = var7.bind(var0)(var6, var3);
    var6 = ['USER_PREMIUM_GUILD_SUBSCRIPTION_SLOT_UPDATE'];
    var3 = function(arg0) { // Environment: var1
        var5 = arg0;
        var2 = _closure1_slot28;
        var1 = {};
        var3 = 'GUILD_BOOST_SLOT_UPDATE';
        var1.type = var3;
        var4 = _closure1_slot7;
        var3 = var4.createFromServer;
        var7 = _closure1_slot16;
        var6 = var7.getSubscriptionById;
        var0 = var5.subscription_id;
        var0 = var6.bind(var7)(var0);
        var0 = var3.bind(var4)(var5, var0);
        var1.guildBoostSlot = var0;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3 = var7.bind(var0)(var6, var3);
    var6 = ['BILLING_POPUP_BRIDGE_CALLBACK'];
    var3 = function(arg0) { // Environment: var1
        var0 = arg0;
        var2 = _closure1_slot28;
        var1 = {};
        var3 = 'BILLING_POPUP_BRIDGE_CALLBACK';
        var1.type = var3;
        var3 = var0.payment_source_type;
        var1.paymentSourceType = var3;
        var3 = var0.state;
        var1.state = var3;
        var3 = var0.path;
        var1.path = var3;
        var0 = var0.query;
        var1.query = var0;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3 = var7.bind(var0)(var6, var3);
    var6 = ['USER_PAYMENT_BROWSER_CHECKOUT_DONE'];
    var3 = function(arg0) { // Environment: var1
        var0 = arg0;
        var2 = _closure1_slot28;
        var1 = {};
        var3 = 'USER_PAYMENT_BROWSER_CHECKOUT_DONE';
        var1.type = var3;
        var3 = var0.load_id;
        var1.loadId = var3;
        var3 = var0.sku_id;
        var1.skuId = var3;
        var0 = var0.sku_subscription_plan_id;
        var1.skuSubscriptionPlanId = var0;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3 = var7.bind(var0)(var6, var3);
    var6 = ['USER_PAYMENT_CLIENT_ADD'];
    var3 = function(arg0) { // Environment: var1
        var0 = arg0;
        var _closure2_slot0 = var0;
        var3 = _closure1_slot0;
        var2 = _closure1_slot3;
        var0 = 31;
        var2 = var2[var0];
        var0 = undefined;
        var3 = var3.bind(var0)(var2);
        var2 = var3.getPurchaseTokenHash;
        var3 = var2.bind(var3)();
        var2 = var3.then;
        var1 = function(arg0) { // Environment: var1
            _fun95660: for (var _fun95660_ip = 0;;) switch (_fun95660_ip) {
                case 0:
                    var1 = _closure2_slot0;
                    var3 = var1.purchase_token_hash;
                    var1 = arg0;
                    if (!(var3 === var1)) {
                        _fun95660_ip = 70;
                        continue _fun95660
                    }
                case 22:
                    var2 = _closure1_slot28;
                    var1 = {};
                    var4 = 'USER_PAYMENT_CLIENT_ADD';
                    var1.type = var4;
                    var1.purchaseTokenHash = var3;
                    var0 = _closure2_slot0;
                    var0 = var0.expires_at;
                    var1.expiresAt = var0;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                case 70:
                    var0 = undefined;
                    return var0;
            }
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var3 = var7.bind(var0)(var6, var3);
    var6 = ['GUILD_MEMBER_LIST_UPDATE'];
    var3 = function(arg0) { // Environment: var1
        var0 = arg0;
        var _closure2_slot0 = var0;
        var3 = _closure1_slot1;
        var2 = _closure1_slot3;
        var0 = 16;
        var2 = var2[var0];
        var0 = undefined;
        var2 = var3.bind(var0)(var2);
        var3 = var2.Emitter;
        var2 = var3.batched;
        var1 = function() { // Environment: var1
            var1 = function arg0() {
                _fun95663: for (var _fun95663_ip = 0;;) switch (_fun95663_ip) {
                    case 0:
                        var0 = arg0;
                        var1 = var0.member;
                        var5 = null;
                        if (!(var5 != var1)) {
                            _fun95663_ip = 159;
                            continue _fun95663
                        }
                    case 18:
                        var1 = var0.member;
                        var7 = _closure1_slot29;
                        var2 = _closure2_slot0;
                        var6 = var2.guild_id;
                        var3 = var1.user;
                        var2 = undefined;
                        var3 = var7.bind(var2)(var6, var3, var1);
                        var3 = var1.presence;
                        if (!(var5 != var3)) {
                            _fun95663_ip = 159;
                            continue _fun95663
                        }
                    case 67:
                        var3 = var1.presence;
                        var1 = _closure1_slot32;
                        var0 = {};
                        var4 = _closure2_slot0;
                        var4 = var4.guild_id;
                        var0.guildId = var4;
                        var4 = var3.user;
                        var0.user = var4;
                        var4 = var3.status;
                        var0.status = var4;
                        var4 = var3.activities;
                        var0.activities = var4;
                        var4 = var3.hidden_activities;
                        var0.hiddenActivities = var4;
                        var4 = var3.client_status;
                        var0.clientStatus = var4;
                        var3 = var3.processed_at_timestamp;
                        var0.processedAtTimestamp = var3;
                        var0 = var1.bind(var2)(var0);
                    case 159:
                        var0 = undefined;
                        return var0;
                }
            };
            var _closure3_slot0 = var1;
            var3 = _closure2_slot0;
            var2 = var3.ops;
            var1 = var2.forEach;
            var0 = function(arg0) { // Environment: var0
                _fun95664: for (var _fun95664_ip = 0;;) switch (_fun95664_ip) {
                    case 0:
                        var0 = arg0;
                        var1 = var0.op;
                        var2 = var0.items;
                        var3 = var0.item;
                        var0 = 'SYNC';
                        if (!(var0 !== var1)) {
                            _fun95664_ip = 58;
                            continue _fun95664
                        }
                    case 26:
                        var0 = 'UPDATE';
                        if (!(var0 !== var1)) {
                            _fun95664_ip = 42;
                            continue _fun95664
                        }
                    case 34:
                        var0 = 'INSERT';
                        if (!(var0 === var1)) {
                            _fun95664_ip = 75;
                            continue _fun95664
                        }
                    case 42:
                        var1 = _closure3_slot0;
                        var0 = undefined;
                        var0 = var1.bind(var0)(var3);
                        _fun95664_ip = 75;
                        continue _fun95664;
                    case 58:
                        var1 = var2.forEach;
                        var0 = _closure3_slot0;
                        var0 = var1.bind(var2)(var0);
                    case 75:
                        var0 = undefined;
                        return var0;
                }
            };
            var0 = var1.bind(var2)(var0);
            var4 = _closure1_slot1;
            var2 = _closure1_slot3;
            var0 = 13;
            var2 = var2[var0];
            var0 = undefined;
            var4 = var4.bind(var0)(var2);
            var2 = var4.flush;
            var2 = var2.bind(var4)();
            var2 = _closure1_slot28;
            var1 = {};
            var4 = 'GUILD_MEMBER_LIST_UPDATE';
            var1.type = var4;
            var4 = var3.guild_id;
            var1.guildId = var4;
            var4 = var3.id;
            var1.id = var4;
            var4 = var3.ops;
            var1.ops = var4;
            var4 = var3.groups;
            var1.groups = var4;
            var4 = var3.member_count;
            var1.memberCount = var4;
            var3 = var3.online_count;
            var1.onlineCount = var3;
            var1 = var2.bind(var0)(var1);
            return var0;
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var3 = var7.bind(var0)(var6, var3);
    var6 = ['GIFT_CODE_UPDATE'];
    var3 = function(arg0) { // Environment: var1
        var0 = arg0;
        var2 = _closure1_slot28;
        var1 = {};
        var3 = 'GIFT_CODE_UPDATE';
        var1.type = var3;
        var3 = var0.uses;
        var1.uses = var3;
        var0 = var0.code;
        var1.code = var0;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3 = var7.bind(var0)(var6, var3);
    var6 = ['GIFT_CODE_CREATE'];
    var3 = function(arg0) { // Environment: var1
        var2 = _closure1_slot28;
        var1 = {};
        var0 = 'GIFT_CODE_CREATE';
        var1.type = var0;
        var0 = arg0;
        var1.giftCode = var0;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3 = var7.bind(var0)(var6, var3);
    var6 = ['LIBRARY_APPLICATION_UPDATE'];
    var3 = function(arg0) { // Environment: var1
        var2 = _closure1_slot28;
        var1 = {};
        var0 = 'LIBRARY_APPLICATION_UPDATE';
        var1.type = var0;
        var0 = arg0;
        var1.libraryApplication = var0;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3 = var7.bind(var0)(var6, var3);
    var6 = ['STREAM_CREATE'];
    var3 = function(arg0) { // Environment: var1
        var0 = arg0;
        var2 = _closure1_slot28;
        var1 = {};
        var3 = 'STREAM_CREATE';
        var1.type = var3;
        var3 = var0.stream_key;
        var1.streamKey = var3;
        var3 = var0.region;
        var1.region = var3;
        var3 = var0.viewer_ids;
        var1.viewerIds = var3;
        var3 = var0.rtc_server_id;
        var1.rtcServerId = var3;
        var3 = var0.rtc_channel_id;
        var1.rtcChannelId = var3;
        var0 = var0.paused;
        var1.paused = var0;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3 = var7.bind(var0)(var6, var3);
    var6 = ['STREAM_SERVER_UPDATE'];
    var3 = function(arg0) { // Environment: var1
        var0 = arg0;
        var2 = _closure1_slot28;
        var1 = {};
        var3 = 'STREAM_SERVER_UPDATE';
        var1.type = var3;
        var3 = var0.stream_key;
        var1.streamKey = var3;
        var3 = var0.endpoint;
        var1.endpoint = var3;
        var0 = var0.token;
        var1.token = var0;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3 = var7.bind(var0)(var6, var3);
    var6 = ['STREAM_UPDATE'];
    var3 = function(arg0) { // Environment: var1
        var0 = arg0;
        var2 = _closure1_slot28;
        var1 = {};
        var3 = 'STREAM_UPDATE';
        var1.type = var3;
        var3 = var0.stream_key;
        var1.streamKey = var3;
        var3 = var0.region;
        var1.region = var3;
        var3 = var0.viewer_ids;
        var1.viewerIds = var3;
        var0 = var0.paused;
        var1.paused = var0;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3 = var7.bind(var0)(var6, var3);
    var6 = ['STREAM_DELETE'];
    var3 = function(arg0) { // Environment: var1
        var0 = arg0;
        var2 = _closure1_slot28;
        var1 = {};
        var3 = 'STREAM_DELETE';
        var1.type = var3;
        var3 = var0.stream_key;
        var1.streamKey = var3;
        var3 = var0.unavailable;
        var1.unavailable = var3;
        var0 = var0.reason;
        var1.reason = var0;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3 = var7.bind(var0)(var6, var3);
    var6 = ['GENERIC_PUSH_NOTIFICATION_SENT'];
    var3 = function(arg0) { // Environment: var1
        var0 = arg0;
        var2 = _closure1_slot28;
        var1 = {};
        var3 = 'GENERIC_PUSH_NOTIFICATION_SENT';
        var1.type = var3;
        var3 = var0.title;
        var1.title = var3;
        var3 = var0.body;
        var1.body = var3;
        var3 = var0.tracking_type;
        var1.trackingType = var3;
        var3 = var0.icon;
        var1.icon = var3;
        var3 = var0.route;
        var1.route = var3;
        var0 = var0.tag;
        var1.tag = var0;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3 = var7.bind(var0)(var6, var3);
    var6 = ['REACTION_NOTIFICATION_SENT'];
    var3 = function(arg0) { // Environment: var1
        var0 = arg0;
        var2 = _closure1_slot28;
        var1 = {};
        var3 = 'REACTION_NOTIFICATION_SENT';
        var1.type = var3;
        var3 = var0.route;
        var1.route = var3;
        var3 = var0.message;
        var1.message = var3;
        var3 = var0.emoji;
        var1.emoji = var3;
        var3 = var0.reactor_user_id;
        var1.reactorUserId = var3;
        var3 = var0.title;
        var1.title = var3;
        var3 = var0.body;
        var1.body = var3;
        var3 = var0.tracking_type;
        var1.trackingType = var3;
        var0 = var0.icon;
        var1.icon = var0;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3 = var7.bind(var0)(var6, var3);
    var6 = ['NOTIFICATION_CENTER_ITEM_CREATE'];
    var3 = function(arg0) { // Environment: var1
        var2 = _closure1_slot28;
        var1 = {};
        var0 = 'NOTIFICATION_CENTER_ITEM_CREATE';
        var1.type = var0;
        var0 = arg0;
        var1.item = var0;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3 = var7.bind(var0)(var6, var3);
    var6 = ['NOTIFICATION_CENTER_ITEM_DELETE'];
    var3 = function(arg0) { // Environment: var1
        var2 = _closure1_slot28;
        var1 = {};
        var0 = 'NOTIFICATION_CENTER_ITEM_DELETE';
        var1.type = var0;
        var0 = arg0;
        var0 = var0.id;
        var1.id = var0;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3 = var7.bind(var0)(var6, var3);
    var6 = ['NOTIFICATION_CENTER_ITEMS_ACK'];
    var3 = function(arg0) { // Environment: var1
        var2 = _closure1_slot28;
        var1 = {
            'type': 'NOTIFICATION_CENTER_ITEMS_ACK',
            'ids': null,
            'optimistic': false
        };
        var0 = arg0;
        var3 = var0.id;
        var0 = new Array(1);
        var0[0] = var3;
        var1.ids = var0;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3 = var7.bind(var0)(var6, var3);
    var6 = ['NOTIFICATION_CENTER_ITEM_COMPLETED'];
    var3 = function(arg0) { // Environment: var1
        var2 = _closure1_slot28;
        var1 = {};
        var0 = 'NOTIFICATION_CENTER_ITEM_COMPLETED';
        var1.type = var0;
        var0 = arg0;
        var0 = var0.item_enum;
        var1.item_enum = var0;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3 = var7.bind(var0)(var6, var3);
    var6 = ['QUESTS_USER_STATUS_UPDATE'];
    var3 = function(arg0) { // Environment: var1
        var2 = _closure1_slot28;
        var1 = {};
        var0 = 'QUESTS_USER_STATUS_UPDATE';
        var1.type = var0;
        var0 = arg0;
        var0 = var0.user_status;
        var1.user_status = var0;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3 = var7.bind(var0)(var6, var3);
    var6 = ['QUESTS_USER_COMPLETION_UPDATE'];
    var3 = function(arg0) { // Environment: var1
        var2 = _closure1_slot28;
        var1 = {};
        var0 = 'QUESTS_USER_COMPLETION_UPDATE';
        var1.type = var0;
        var0 = arg0;
        var0 = var0.quest_enrollment_blocked_until;
        var1.quest_enrollment_blocked_until = var0;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3 = var7.bind(var0)(var6, var3);
    var6 = ['QUEST_PREVIEW_UPDATE'];
    var3 = function(arg0) { // Environment: var1
        var2 = _closure1_slot28;
        var1 = {};
        var0 = 'QUEST_PREVIEW_UPDATE';
        var1.type = var0;
        var0 = arg0;
        var0 = var0.quest_id;
        var1.quest_id = var0;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3 = var7.bind(var0)(var6, var3);
    var6 = ['APPLICATION_COMMAND_PERMISSIONS_UPDATE'];
    var3 = function(arg0, arg1) { // Environment: var1
        var2 = _closure1_slot28;
        var1 = {};
        var0 = arg1;
        var1.type = var0;
        var0 = arg0;
        var0 = var0.guild_id;
        var1.guildId = var0;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3 = var7.bind(var0)(var6, var3);
    var6 = ['GUILD_APPLICATION_COMMAND_INDEX_UPDATE'];
    var3 = function(arg0) { // Environment: var1
        var0 = arg0;
        var2 = _closure1_slot28;
        var1 = {};
        var3 = 'GUILD_APPLICATION_COMMAND_INDEX_UPDATE';
        var1.type = var3;
        var3 = var0.guild_id;
        var1.guildId = var3;
        var0 = var0.version;
        var1.version = var0;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3 = var7.bind(var0)(var6, var3);
    var6 = ['GUILD_JOIN_REQUEST_CREATE'];
    var3 = function(arg0) { // Environment: var1
        var0 = arg0;
        var2 = _closure1_slot28;
        var1 = {};
        var3 = 'GUILD_JOIN_REQUEST_CREATE';
        var1.type = var3;
        var3 = var0.request;
        var1.request = var3;
        var3 = var0.status;
        var1.status = var3;
        var0 = var0.guild_id;
        var1.guildId = var0;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3 = var7.bind(var0)(var6, var3);
    var6 = ['GUILD_JOIN_REQUEST_UPDATE'];
    var3 = function(arg0) { // Environment: var1
        var0 = arg0;
        var2 = _closure1_slot28;
        var1 = {};
        var3 = 'GUILD_JOIN_REQUEST_UPDATE';
        var1.type = var3;
        var3 = var0.request;
        var1.request = var3;
        var3 = var0.status;
        var1.status = var3;
        var0 = var0.guild_id;
        var1.guildId = var0;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3 = var7.bind(var0)(var6, var3);
    var6 = ['GUILD_JOIN_REQUEST_DELETE'];
    var3 = function(arg0) { // Environment: var1
        var0 = arg0;
        var2 = _closure1_slot28;
        var1 = {};
        var3 = 'GUILD_JOIN_REQUEST_DELETE';
        var1.type = var3;
        var3 = var0.id;
        var1.id = var3;
        var3 = var0.user_id;
        var1.userId = var3;
        var0 = var0.guild_id;
        var1.guildId = var0;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3 = var7.bind(var0)(var6, var3);
    var6 = ['INTERACTION_CREATE'];
    var3 = function(arg0) { // Environment: var1
        var0 = arg0;
        var2 = _closure1_slot28;
        var1 = {};
        var3 = 'INTERACTION_CREATE';
        var1.type = var3;
        var3 = var0.id;
        var1.interactionId = var3;
        var0 = var0.nonce;
        var1.nonce = var0;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3 = var7.bind(var0)(var6, var3);
    var6 = ['INTERACTION_SUCCESS'];
    var3 = function(arg0) { // Environment: var1
        var0 = arg0;
        var2 = _closure1_slot28;
        var1 = {};
        var3 = 'INTERACTION_SUCCESS';
        var1.type = var3;
        var3 = var0.id;
        var1.interactionId = var3;
        var0 = var0.nonce;
        var1.nonce = var0;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3 = var7.bind(var0)(var6, var3);
    var6 = ['INTERACTION_FAILURE'];
    var3 = function(arg0) { // Environment: var1
        var0 = arg0;
        var2 = _closure1_slot28;
        var1 = {};
        var3 = 'INTERACTION_FAILURE';
        var1.type = var3;
        var3 = var0.id;
        var1.interactionId = var3;
        var3 = var0.nonce;
        var1.nonce = var3;
        var0 = var0.reason_code;
        var1.reasonCode = var0;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3 = var7.bind(var0)(var6, var3);
    var6 = ['APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE'];
    var3 = function(arg0) { // Environment: var1
        var0 = arg0;
        var2 = _closure1_slot28;
        var1 = {};
        var3 = 'APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE';
        var1.type = var3;
        var3 = var0.choices;
        var1.choices = var3;
        var0 = var0.nonce;
        var1.nonce = var0;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3 = var7.bind(var0)(var6, var3);
    var6 = ['INTERACTION_MODAL_CREATE'];
    var3 = function(arg0) { // Environment: var1
        var3 = arg0;
        var2 = _closure1_slot28;
        var1 = {};
        var4 = 'INTERACTION_MODAL_CREATE';
        var1.type = var4;
        var4 = var3.id;
        var1.id = var4;
        var4 = var3.channel_id;
        var1.channelId = var4;
        var4 = var3.custom_id;
        var1.customId = var4;
        var4 = var3.application;
        var1.application = var4;
        var4 = var3.title;
        var1.title = var4;
        var5 = _closure1_slot0;
        var4 = _closure1_slot3;
        var0 = 32;
        var4 = var4[var0];
        var0 = undefined;
        var6 = var5.bind(var0)(var4);
        var5 = var6.transformComponents;
        var4 = var3.components;
        var4 = var5.bind(var6)(var4);
        var1.components = var4;
        var4 = var3.nonce;
        var1.nonce = var4;
        var3 = var3.resolved;
        var1.resolved = var3;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3 = var7.bind(var0)(var6, var3);
    var6 = ['INTERACTION_IFRAME_MODAL_CREATE'];
    var3 = function(arg0) { // Environment: var1
        var0 = arg0;
        var2 = _closure1_slot28;
        var1 = {};
        var3 = 'INTERACTION_IFRAME_MODAL_CREATE';
        var1.type = var3;
        var3 = var0.id;
        var1.id = var3;
        var3 = var0.channel_id;
        var1.channelId = var3;
        var3 = var0.custom_id;
        var1.customId = var3;
        var3 = var0.application;
        var1.application = var3;
        var3 = var0.title;
        var1.title = var3;
        var3 = var0.iframe_path;
        var1.iframePath = var3;
        var3 = var0.modal_size;
        var1.modalSize = var3;
        var0 = var0.nonce;
        var1.nonce = var0;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3 = var7.bind(var0)(var6, var3);
    var6 = ['STAGE_INSTANCE_CREATE'];
    var3 = function(arg0) { // Environment: var1
        var2 = _closure1_slot28;
        var1 = {};
        var0 = 'STAGE_INSTANCE_CREATE';
        var1.type = var0;
        var0 = arg0;
        var1.instance = var0;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3 = var7.bind(var0)(var6, var3);
    var6 = ['STAGE_INSTANCE_UPDATE'];
    var3 = function(arg0) { // Environment: var1
        var2 = _closure1_slot28;
        var1 = {};
        var0 = 'STAGE_INSTANCE_UPDATE';
        var1.type = var0;
        var0 = arg0;
        var1.instance = var0;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3 = var7.bind(var0)(var6, var3);
    var6 = ['STAGE_INSTANCE_DELETE'];
    var3 = function(arg0) { // Environment: var1
        var2 = _closure1_slot28;
        var1 = {};
        var0 = 'STAGE_INSTANCE_DELETE';
        var1.type = var0;
        var0 = arg0;
        var1.instance = var0;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3 = var7.bind(var0)(var6, var3);
    var6 = ['GUILD_SCHEDULED_EVENT_CREATE'];
    var3 = function(arg0) { // Environment: var1
        var2 = _closure1_slot28;
        var1 = {};
        var0 = 'GUILD_SCHEDULED_EVENT_CREATE';
        var1.type = var0;
        var0 = arg0;
        var1.guildScheduledEvent = var0;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3 = var7.bind(var0)(var6, var3);
    var6 = ['GUILD_SCHEDULED_EVENT_UPDATE'];
    var3 = function(arg0) { // Environment: var1
        var2 = _closure1_slot28;
        var1 = {};
        var0 = 'GUILD_SCHEDULED_EVENT_UPDATE';
        var1.type = var0;
        var0 = arg0;
        var1.guildScheduledEvent = var0;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3 = var7.bind(var0)(var6, var3);
    var6 = ['GUILD_SCHEDULED_EVENT_DELETE'];
    var3 = function(arg0) { // Environment: var1
        var2 = _closure1_slot28;
        var1 = {};
        var0 = 'GUILD_SCHEDULED_EVENT_DELETE';
        var1.type = var0;
        var0 = arg0;
        var1.guildScheduledEvent = var0;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3 = var7.bind(var0)(var6, var3);
    var6 = ['GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE'];
    var3 = function(arg0) { // Environment: var1
        var2 = _closure1_slot28;
        var1 = {};
        var0 = 'GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE';
        var1.type = var0;
        var0 = arg0;
        var1.eventException = var0;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3 = var7.bind(var0)(var6, var3);
    var6 = ['GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE'];
    var3 = function(arg0) { // Environment: var1
        var2 = _closure1_slot28;
        var1 = {};
        var0 = 'GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE';
        var1.type = var0;
        var0 = arg0;
        var1.eventException = var0;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3 = var7.bind(var0)(var6, var3);
    var6 = ['GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE'];
    var3 = function(arg0) { // Environment: var1
        var2 = _closure1_slot28;
        var1 = {};
        var0 = 'GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE';
        var1.type = var0;
        var0 = arg0;
        var1.eventException = var0;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3 = var7.bind(var0)(var6, var3);
    var6 = ['GUILD_SCHEDULED_EVENT_EXCEPTIONS_DELETE'];
    var3 = function(arg0) { // Environment: var1
        var2 = _closure1_slot28;
        var1 = {};
        var0 = 'GUILD_SCHEDULED_EVENT_EXCEPTIONS_DELETE';
        var1.type = var0;
        var0 = arg0;
        var0 = var0.event_id;
        var1.eventId = var0;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3 = var7.bind(var0)(var6, var3);
    var6 = ['GUILD_SCHEDULED_EVENT_USER_ADD'];
    var3 = function(arg0) { // Environment: var1
        var0 = arg0;
        var2 = _closure1_slot28;
        var1 = {};
        var3 = 'GUILD_SCHEDULED_EVENT_USER_ADD';
        var1.type = var3;
        var3 = var0.user_id;
        var1.userId = var3;
        var3 = var0.guild_id;
        var1.guildId = var3;
        var3 = var0.guild_scheduled_event_id;
        var1.guildEventId = var3;
        var3 = var0.guild_scheduled_event_exception_id;
        var1.guildEventExceptionId = var3;
        var0 = var0.response;
        var1.response = var0;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3 = var7.bind(var0)(var6, var3);
    var6 = ['GUILD_SCHEDULED_EVENT_USER_REMOVE'];
    var3 = function(arg0) { // Environment: var1
        var0 = arg0;
        var2 = _closure1_slot28;
        var1 = {};
        var3 = 'GUILD_SCHEDULED_EVENT_USER_REMOVE';
        var1.type = var3;
        var3 = var0.user_id;
        var1.userId = var3;
        var3 = var0.guild_id;
        var1.guildId = var3;
        var3 = var0.guild_scheduled_event_id;
        var1.guildEventId = var3;
        var3 = var0.guild_scheduled_event_exception_id;
        var1.guildEventExceptionId = var3;
        var0 = var0.response;
        var1.response = var0;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3 = var7.bind(var0)(var6, var3);
    var6 = ['GUILD_DIRECTORY_ENTRY_CREATE'];
    var3 = function(arg0) { // Environment: var1
        var0 = arg0;
        var2 = _closure1_slot28;
        var1 = {};
        var3 = 'GUILD_DIRECTORY_ENTRY_CREATE';
        var1.type = var3;
        var3 = var0.directory_channel_id;
        var1.channelId = var3;
        var1.entry = var0;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3 = var7.bind(var0)(var6, var3);
    var6 = ['GUILD_DIRECTORY_ENTRY_UPDATE'];
    var3 = function(arg0) { // Environment: var1
        var0 = arg0;
        var2 = _closure1_slot28;
        var1 = {};
        var3 = 'GUILD_DIRECTORY_ENTRY_UPDATE';
        var1.type = var3;
        var3 = var0.directory_channel_id;
        var1.channelId = var3;
        var1.entry = var0;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3 = var7.bind(var0)(var6, var3);
    var6 = ['GUILD_DIRECTORY_ENTRY_DELETE'];
    var3 = function(arg0) { // Environment: var1
        var0 = arg0;
        var2 = _closure1_slot28;
        var1 = {};
        var3 = 'GUILD_DIRECTORY_ENTRY_DELETE';
        var1.type = var3;
        var3 = var0.directory_channel_id;
        var1.channelId = var3;
        var0 = var0.entity_id;
        var1.guildId = var0;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3 = var7.bind(var0)(var6, var3);
    var6 = ['AUTO_MODERATION_MENTION_RAID_DETECTION'];
    var3 = function(arg0) { // Environment: var1
        var0 = arg0;
        var2 = _closure1_slot28;
        var1 = {};
        var3 = 'AUTO_MODERATION_MENTION_RAID_DETECTION';
        var1.type = var3;
        var3 = var0.guild_id;
        var1.guildId = var3;
        var3 = var0.decision_id;
        var1.decisionId = var3;
        var0 = var0.suspicious_mention_activity_until;
        var1.suspiciousMentionActivityUntil = var0;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3 = var7.bind(var0)(var6, var3);
    var6 = ['VOICE_CHANNEL_EFFECT_SEND'];
    var3 = function(arg0) { // Environment: var1
        var0 = arg0;
        var2 = _closure1_slot28;
        var1 = {};
        var3 = 'VOICE_CHANNEL_EFFECT_SEND';
        var1.type = var3;
        var3 = var0.emoji;
        var1.emoji = var3;
        var3 = var0.channel_id;
        var1.channelId = var3;
        var3 = var0.user_id;
        var1.userId = var3;
        var3 = var0.animation_type;
        var1.animationType = var3;
        var3 = var0.animation_id;
        var1.animationId = var3;
        var3 = var0.sound_id;
        var1.soundId = var3;
        var3 = var0.sound_volume;
        var1.soundVolume = var3;
        var3 = var0.points;
        var1.points = var3;
        var3 = var0.streamer_id;
        var1.streamerId = var3;
        var3 = var0.line_id;
        var1.lineId = var3;
        var0 = var0.emoji_hose;
        var1.emojiHose = var0;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3 = var7.bind(var0)(var6, var3);
    var6 = ['GUILD_SOUNDBOARD_SOUND_CREATE'];
    var3 = function(arg0) { // Environment: var1
        var3 = arg0;
        var2 = _closure1_slot28;
        var1 = {};
        var0 = 'GUILD_SOUNDBOARD_SOUND_CREATE';
        var1.type = var0;
        var0 = {};
        var5 = var3.guild_id;
        var0.guildId = var5;
        var5 = var3.name;
        var0.name = var5;
        var5 = var3.sound_id;
        var0.soundId = var5;
        var6 = _closure1_slot8;
        var7 = var3.user;
        var5 = var6.prototype;
        var5 = Object.create(var5, {
            constructor: {
                value: var6
            }
        });
        var8 = var5;
        var4 = new var8[var6](var7, var6);
        var4 = var4 instanceof Object ? var4 : var5;
        var0.user = var4;
        var4 = var3.user_id;
        var0.userId = var4;
        var4 = var3.volume;
        var0.volume = var4;
        var4 = var3.emoji_id;
        var0.emojiId = var4;
        var4 = var3.emoji_name;
        var0.emojiName = var4;
        var3 = var3.available;
        var0.available = var3;
        var1.sound = var0;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3 = var7.bind(var0)(var6, var3);
    var6 = ['GUILD_SOUNDBOARD_SOUND_UPDATE'];
    var3 = function(arg0) { // Environment: var1
        var3 = arg0;
        var2 = _closure1_slot28;
        var1 = {};
        var0 = 'GUILD_SOUNDBOARD_SOUND_UPDATE';
        var1.type = var0;
        var0 = {};
        var5 = var3.guild_id;
        var0.guildId = var5;
        var5 = var3.name;
        var0.name = var5;
        var5 = var3.sound_id;
        var0.soundId = var5;
        var6 = _closure1_slot8;
        var7 = var3.user;
        var5 = var6.prototype;
        var5 = Object.create(var5, {
            constructor: {
                value: var6
            }
        });
        var8 = var5;
        var4 = new var8[var6](var7, var6);
        var4 = var4 instanceof Object ? var4 : var5;
        var0.user = var4;
        var4 = var3.user_id;
        var0.userId = var4;
        var4 = var3.volume;
        var0.volume = var4;
        var4 = var3.emoji_id;
        var0.emojiId = var4;
        var4 = var3.emoji_name;
        var0.emojiName = var4;
        var3 = var3.available;
        var0.available = var3;
        var1.sound = var0;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3 = var7.bind(var0)(var6, var3);
    var6 = ['GUILD_SOUNDBOARD_SOUND_DELETE'];
    var3 = function(arg0) { // Environment: var1
        var0 = arg0;
        var2 = _closure1_slot28;
        var1 = {};
        var3 = 'GUILD_SOUNDBOARD_SOUND_DELETE';
        var1.type = var3;
        var3 = var0.guild_id;
        var1.guildId = var3;
        var0 = var0.sound_id;
        var1.soundId = var0;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3 = var7.bind(var0)(var6, var3);
    var6 = ['GUILD_SOUNDBOARD_SOUNDS_UPDATE'];
    var3 = function(arg0) { // Environment: var1
        var3 = arg0;
        var _closure2_slot0 = var3;
        var2 = _closure1_slot28;
        var1 = {};
        var4 = 'GUILD_SOUNDBOARD_SOUNDS_UPDATE';
        var1.type = var4;
        var4 = var3.guild_id;
        var1.guildId = var4;
        var4 = var3.soundboard_sounds;
        var3 = var4.map;
        var0 = function(arg0) { // Environment: var0
            var1 = arg0;
            var0 = {};
            var2 = var1.name;
            var0.name = var2;
            var2 = var1.sound_id;
            var0.soundId = var2;
            var2 = var1.emoji_name;
            var0.emojiName = var2;
            var2 = var1.emoji_id;
            var0.emojiId = var2;
            var2 = var1.user_id;
            var0.userId = var2;
            var2 = var1.volume;
            var0.volume = var2;
            var1 = var1.available;
            var0.available = var1;
            var1 = _closure2_slot0;
            var1 = var1.guild_id;
            var0.guildId = var1;
            return var0;
        };
        var0 = var3.bind(var4)(var0);
        var1.soundboardSounds = var0;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3 = var7.bind(var0)(var6, var3);
    var8 = ['EMBEDDED_ACTIVITY_UPDATE_V2'];
    var6 = function(arg0) { // Environment: var1
        var2 = _closure1_slot10;
        var1 = var2.loadGuildIds;
        var0 = arg0;
        var3 = var0.guild_id;
        var0 = new Array(1);
        var0[0] = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var3 = function(arg0) { // Environment: var1
        var0 = arg0;
        var2 = _closure1_slot28;
        var1 = {};
        var3 = 'EMBEDDED_ACTIVITY_UPDATE_V2';
        var1.type = var3;
        var3 = var0.application_id;
        var1.applicationId = var3;
        var3 = var0.launch_id;
        var1.launchId = var3;
        var3 = var0.composite_instance_id;
        var1.compositeInstanceId = var3;
        var3 = var0.location;
        var1.location = var3;
        var0 = var0.participants;
        var1.participants = var0;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3 = var9.bind(var0)(var8, var6, var3);
    var6 = ['AUTH_SESSION_CHANGE'];
    var3 = function(arg0) { // Environment: var1
        var2 = _closure1_slot28;
        var1 = {};
        var0 = 'AUTH_SESSION_CHANGE';
        var1.type = var0;
        var0 = arg0;
        var0 = var0.auth_session_id_hash;
        var1.authSessionIdHash = var0;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3 = var7.bind(var0)(var6, var3);
    var6 = ['USER_CONNECTIONS_LINK_CALLBACK'];
    var3 = function(arg0) { // Environment: var1
        var0 = arg0;
        var2 = _closure1_slot28;
        var1 = {};
        var3 = 'USER_CONNECTIONS_LINK_CALLBACK';
        var1.type = var3;
        var3 = var0.provider;
        var1.provider = var3;
        var3 = var0.callback_code;
        var1.callbackCode = var3;
        var0 = var0.callback_state;
        var1.callbackState = var0;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3 = var7.bind(var0)(var6, var3);
    var6 = ['USER_CONNECTIONS_CALLBACK'];
    var3 = function(arg0) { // Environment: var1
        var0 = arg0;
        var2 = _closure1_slot28;
        var1 = {};
        var3 = 'USER_CONNECTIONS_CALLBACK';
        var1.type = var3;
        var3 = var0.provider;
        var1.provider = var3;
        var3 = var0.code;
        var1.code = var3;
        var3 = var0.state;
        var1.state = var3;
        var0 = var0.openid_params;
        var1.openid_params = var0;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3 = var7.bind(var0)(var6, var3);
    var6 = ['DELETED_ENTITY_IDS'];
    var3 = function(arg0) { // Environment: var1
        var2 = _closure1_slot28;
        var1 = {};
        var0 = 'DELETED_ENTITY_IDS';
        var1.type = var0;
        var3 = arg0;
        var4 = var1;
        var0 = copyDataProperties(var4, var3);
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3 = var7.bind(var0)(var6, var3);
    var8 = ['CHANNEL_SYNC'];
    var6 = function(arg0) { // Environment: var1
        var2 = _closure1_slot10;
        var1 = var2.loadGuildIds;
        var0 = arg0;
        var3 = var0.guild_id;
        var0 = new Array(1);
        var0[0] = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var3 = function(arg0) { // Environment: var1
        var0 = arg0;
        var3 = var0.channels;
        var2 = var3.forEach;
        var1 = function(arg0) { // Environment: var1
            var2 = _closure1_slot19;
            var1 = var2.add;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var1 = var2.bind(var3)(var1);
        var2 = _closure1_slot28;
        var1 = {};
        var3 = 'CHANNEL_SYNC';
        var1.type = var3;
        var3 = var0.guild_id;
        var1.guild_id = var3;
        var3 = var0.channels;
        var1.channels = var3;
        var0 = var0.integrity_check;
        var1.integrity_check = var0;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3 = var9.bind(var0)(var8, var6, var3);
    var6 = ['CONSOLE_COMMAND_UPDATE'];
    var3 = function(arg0) { // Environment: var1
        var0 = arg0;
        var2 = _closure1_slot28;
        var1 = {};
        var3 = 'CONSOLE_COMMAND_UPDATE';
        var1.type = var3;
        var3 = var0.id;
        var1.id = var3;
        var3 = var0.result;
        var1.result = var3;
        var0 = var0.error;
        var1.error = var0;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3 = var7.bind(var0)(var6, var3);
    var8 = ['PASSIVE_UPDATE_V2'];
    var6 = function(arg0) { // Environment: var1
        var2 = _closure1_slot10;
        var1 = var2.loadGuildIds;
        var0 = arg0;
        var3 = var0.guild_id;
        var0 = new Array(1);
        var0[0] = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var3 = function(arg0) { // Environment: var1
        var0 = arg0;
        var2 = _closure1_slot28;
        var1 = {};
        var4 = 'PASSIVE_UPDATE_V2';
        var1.type = var4;
        var4 = var0.guild_id;
        var1.guildId = var4;
        var4 = var0.updated_members;
        var1.members = var4;
        var6 = var0.updated_channels;
        var5 = var6.map;
        var4 = function(arg0) { // Environment: var3
            var1 = arg0;
            var0 = {};
            var2 = var1.id;
            var0.id = var2;
            var2 = var1.last_message_id;
            var0.lastMessageId = var2;
            var1 = var1.last_pin_timestamp;
            var0.lastPinTimestamp = var1;
            return var0;
        };
        var4 = var5.bind(var6)(var4);
        var1.channels = var4;
        var5 = var0.updated_voice_states;
        var4 = var5.map;
        var3 = function(arg0) { // Environment: var3
            _fun95727: for (var _fun95727_ip = 0;;) switch (_fun95727_ip) {
                case 0:
                    var2 = arg0;
                    var0 = {};
                    var1 = var2.channel_id;
                    var0.channelId = var1;
                    var1 = var2.deaf;
                    if (var1) {
                        _fun95727_ip = 25;
                        continue _fun95727
                    }
                case 23:
                    var1 = false;
                case 25:
                    var0.deaf = var1;
                    var1 = var2.mute;
                    if (var1) {
                        _fun95727_ip = 41;
                        continue _fun95727
                    }
                case 39:
                    var1 = false;
                case 41:
                    var0.mute = var1;
                    var4 = var2.request_to_speak_timestamp;
                    var1 = null;
                    var5 = var1 != var4;
                    var3 = null;
                    if (!var5) {
                        _fun95727_ip = 66;
                        continue _fun95727
                    }
                case 63:
                    var3 = var4;
                case 66:
                    var0.requestToSpeakTimestamp = var3;
                    var3 = var2.self_deaf;
                    if (var3) {
                        _fun95727_ip = 82;
                        continue _fun95727
                    }
                case 80:
                    var3 = false;
                case 82:
                    var0.selfDeaf = var3;
                    var3 = var2.self_mute;
                    if (var3) {
                        _fun95727_ip = 98;
                        continue _fun95727
                    }
                case 96:
                    var3 = false;
                case 98:
                    var0.selfMute = var3;
                    var3 = var2.self_stream;
                    if (var3) {
                        _fun95727_ip = 114;
                        continue _fun95727
                    }
                case 112:
                    var3 = false;
                case 114:
                    var0.selfStream = var3;
                    var3 = var2.self_video;
                    if (var3) {
                        _fun95727_ip = 130;
                        continue _fun95727
                    }
                case 128:
                    var3 = false;
                case 130:
                    var0.selfVideo = var3;
                    var3 = var2.session_id;
                    var0.sessionId = var3;
                    var3 = var2.suppress;
                    var0.suppress = var3;
                    var3 = var2.user_id;
                    var0.userId = var3;
                    var2 = var2.discoverable;
                    var1 = var1 == var2;
                    if (var1) {
                        _fun95727_ip = 183;
                        continue _fun95727
                    }
                case 180:
                    var1 = var2;
                case 183:
                    var0.discoverable = var1;
                    return var0;
            }
        };
        var3 = var4.bind(var5)(var3);
        var1.voiceStates = var3;
        var0 = var0.removed_voice_states;
        var1.removedVoiceStateUsers = var0;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3 = var9.bind(var0)(var8, var6, var3);
    var6 = ['CREATOR_MONETIZATION_RESTRICTIONS_UPDATE'];
    var3 = function(arg0) { // Environment: var1
        var0 = arg0;
        var2 = _closure1_slot28;
        var1 = {};
        var3 = 'GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS';
        var1.type = var3;
        var3 = var0.guild_id;
        var1.guildId = var3;
        var0 = var0.restrictions;
        var1.restrictions = var0;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3 = var7.bind(var0)(var6, var3);
    var6 = ['BILLING_REFERRAL_TRIAL_OFFER_UPDATE'];
    var3 = function(arg0) { // Environment: var1
        var0 = arg0;
        var2 = _closure1_slot28;
        var1 = {};
        var3 = 'BILLING_REFERRAL_TRIAL_OFFER_UPDATE';
        var1.type = var3;
        var3 = var0.user_trial_offer_id;
        var1.userTrialOfferId = var3;
        var0 = var0.recipient_id;
        var1.recipientId = var0;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3 = var7.bind(var0)(var6, var3);
    var6 = ['LAST_MESSAGES'];
    var3 = function(arg0) { // Environment: var1
        var0 = arg0;
        var2 = _closure1_slot28;
        var1 = {};
        var3 = 'MESSAGE_PREVIEWS_LOADED';
        var1.type = var3;
        var3 = var0.guild_id;
        var1.guildId = var3;
        var0 = var0.messages;
        var1.messages = var0;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3 = var7.bind(var0)(var6, var3);
    var6 = ['AUTHENTICATOR_UPDATE'];
    var3 = function(arg0) { // Environment: var1
        var2 = _closure1_slot28;
        var1 = {};
        var0 = 'AUTHENTICATOR_UPDATE';
        var1.type = var0;
        var0 = arg0;
        var1.credential = var0;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3 = var7.bind(var0)(var6, var3);
    var6 = ['AUTHENTICATOR_CREATE'];
    var3 = function(arg0) { // Environment: var1
        var2 = _closure1_slot28;
        var1 = {};
        var0 = 'AUTHENTICATOR_CREATE';
        var1.type = var0;
        var0 = arg0;
        var1.credential = var0;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3 = var7.bind(var0)(var6, var3);
    var6 = ['AUTHENTICATOR_DELETE'];
    var3 = function(arg0) { // Environment: var1
        var2 = _closure1_slot28;
        var1 = {};
        var0 = 'AUTHENTICATOR_DELETE';
        var1.type = var0;
        var0 = arg0;
        var1.credential = var0;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3 = var7.bind(var0)(var6, var3);
    var6 = ['NOTIFICATION_SETTINGS_UPDATE'];
    var3 = function(arg0) { // Environment: var1
        var2 = _closure1_slot28;
        var1 = {};
        var0 = 'NOTIFICATION_SETTINGS_UPDATE';
        var1.type = var0;
        var0 = {};
        var3 = arg0;
        var3 = var3.flags;
        var0.flags = var3;
        var1.settings = var0;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3 = var7.bind(var0)(var6, var3);
    var6 = ['CONVERSATION_SUMMARY_UPDATE'];
    var3 = function(arg0) { // Environment: var1
        var2 = _closure1_slot28;
        var1 = {};
        var0 = 'CONVERSATION_SUMMARY_UPDATE';
        var1.type = var0;
        var3 = arg0;
        var4 = var1;
        var0 = copyDataProperties(var4, var3);
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3 = var7.bind(var0)(var6, var3);
    var6 = ['PREMIUM_MARKETING_PREVIEW'];
    var3 = function(arg0) { // Environment: var1
        var2 = _closure1_slot28;
        var1 = {};
        var0 = 'PREMIUM_MARKETING_PREVIEW';
        var1.type = var0;
        var0 = arg0;
        var1.data = var0;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3 = var7.bind(var0)(var6, var3);
    var6 = ['USER_APPLICATION_UPDATE'];
    var3 = function(arg0) { // Environment: var1
        var2 = _closure1_slot28;
        var1 = {};
        var0 = 'USER_APPLICATION_UPDATE';
        var1.type = var0;
        var0 = arg0;
        var0 = var0.application_id;
        var1.applicationId = var0;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3 = var7.bind(var0)(var6, var3);
    var6 = ['USER_APPLICATION_REMOVE'];
    var3 = function(arg0) { // Environment: var1
        var2 = _closure1_slot28;
        var1 = {};
        var0 = 'USER_APPLICATION_REMOVE';
        var1.type = var0;
        var0 = arg0;
        var0 = var0.application_id;
        var1.applicationId = var0;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3 = var7.bind(var0)(var6, var3);
    var6 = ['DM_SETTINGS_UPSELL_SHOW'];
    var3 = function(arg0) { // Environment: var1
        var2 = _closure1_slot28;
        var1 = {};
        var0 = 'DM_SETTINGS_UPSELL_SHOW';
        var1.type = var0;
        var0 = arg0;
        var0 = var0.guild_id;
        var1.guildId = var0;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3 = var7.bind(var0)(var6, var3);
    var6 = ['CONTENT_INVENTORY_INBOX_STALE'];
    var3 = function(arg0) { // Environment: var1
        var2 = _closure1_slot28;
        var1 = {};
        var0 = 'CONTENT_INVENTORY_INBOX_STALE';
        var1.type = var0;
        var0 = arg0;
        var0 = var0.refresh_after_ms;
        var1.refreshAfterMs = var0;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3 = var7.bind(var0)(var6, var3);
    var6 = ['VIRTUAL_CURRENCY_BALANCE_UPDATE'];
    var3 = function(arg0) { // Environment: var1
        var2 = _closure1_slot28;
        var1 = {};
        var0 = 'VIRTUAL_CURRENCY_BALANCE_UPDATE';
        var1.type = var0;
        var0 = arg0;
        var0 = var0.balance;
        var1.balance = var0;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3 = var7.bind(var0)(var6, var3);
    var6 = ['GUILD_POWERUP_ENTITLEMENTS_CREATE', 'GUILD_POWERUP_ENTITLEMENTS_DELETE'];
    var3 = function(arg0, arg1) { // Environment: var1
        var0 = arg0;
        var2 = _closure1_slot28;
        var1 = {};
        var3 = arg1;
        var1.type = var3;
        var3 = var0.guild_id;
        var1.guildId = var3;
        var0 = var0.entitlements;
        var1.entitlements = var0;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3 = var7.bind(var0)(var6, var3);
    var6 = ['GAME_SERVER_CREATE', 'GAME_SERVER_UPDATE'];
    var3 = function(arg0, arg1) { // Environment: var1
        var0 = arg0;
        var2 = _closure1_slot28;
        var1 = {};
        var3 = arg1;
        var1.type = var3;
        var3 = var0.guild_id;
        var1.guildId = var3;
        var0 = var0.game_server;
        var1.gameServer = var0;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3 = var7.bind(var0)(var6, var3);
    var6 = ['GAME_SERVER_DELETE'];
    var3 = function(arg0, arg1) { // Environment: var1
        var0 = arg0;
        var2 = _closure1_slot28;
        var1 = {};
        var3 = arg1;
        var1.type = var3;
        var3 = var0.guild_id;
        var1.guildId = var3;
        var0 = var0.game_server_id;
        var1.gameServerId = var0;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3 = var7.bind(var0)(var6, var3);
    var6 = ['GUILD_APPLIED_BOOSTS_UPDATE'];
    var3 = function(arg0, arg1) { // Environment: var1
        var2 = _closure1_slot28;
        var1 = {};
        var0 = arg1;
        var1.type = var0;
        var0 = arg0;
        var0 = var0.guild_id;
        var1.guildId = var0;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3 = var7.bind(var0)(var6, var3);
    var6 = ['USER_APPLICATION_IDENTITY_UPDATE'];
    var3 = function(arg0, arg1) { // Environment: var1
        var0 = arg0;
        var2 = _closure1_slot28;
        var1 = {};
        var3 = arg1;
        var1.type = var3;
        var3 = var0.user_id;
        var1.user_id = var3;
        var3 = var0.application_id;
        var1.application_id = var3;
        var3 = var0.username;
        var1.username = var3;
        var3 = var0.avatar_hash;
        var1.avatar_hash = var3;
        var0 = var0.metadata;
        var1.metadata = var0;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3 = var7.bind(var0)(var6, var3);
    var6 = ['USER_APPLICATION_IDENTITY_REMOVE'];
    var3 = function(arg0, arg1) { // Environment: var1
        var0 = arg0;
        var2 = _closure1_slot28;
        var1 = {};
        var3 = arg1;
        var1.type = var3;
        var3 = var0.user_id;
        var1.user_id = var3;
        var0 = var0.application_id;
        var1.application_id = var0;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3 = var7.bind(var0)(var6, var3);
    var6 = ['SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_RESPONSE'];
    var3 = function(arg0) { // Environment: var1
        var0 = arg0;
        var2 = _closure1_slot28;
        var1 = {};
        var3 = 'SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_RESPONSE';
        var1.type = var3;
        var3 = var0.interaction_id;
        var1.interactionId = var3;
        var3 = var0.application_id;
        var1.applicationId = var3;
        var3 = var0.sku_id;
        var1.skuId = var3;
        var3 = var0.recipient_id;
        var1.recipientId = var3;
        var0 = var0.eligible;
        var1.eligible = var0;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3 = var7.bind(var0)(var6, var3);
    var6 = ['HAVEN_CONNECT'];
    var3 = function(arg0, arg1) { // Environment: var1
        var2 = _closure1_slot28;
        var1 = {};
        var3 = arg1;
        var1.type = var3;
        var4 = _closure1_slot0;
        var3 = _closure1_slot3;
        var0 = 33;
        var3 = var3[var0];
        var0 = undefined;
        var5 = var4.bind(var0)(var3);
        var4 = var5.parseRoom;
        var3 = arg0;
        var3 = var4.bind(var5)(var3);
        var1.room = var3;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3 = var7.bind(var0)(var6, var3);
    var6 = ['HAVEN_DISCONNECT'];
    var3 = function(arg0, arg1) { // Environment: var1
        var0 = arg0;
        var2 = _closure1_slot28;
        var1 = {};
        var3 = arg1;
        var1.type = var3;
        var3 = var0.user_id;
        var1.userId = var3;
        var0 = var0.room_id;
        var1.roomId = var0;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3 = var7.bind(var0)(var6, var3);
    var6 = ['HAVEN_UPDATE'];
    var3 = function(arg0, arg1) { // Environment: var1
        var2 = _closure1_slot28;
        var1 = {};
        var3 = arg1;
        var1.type = var3;
        var4 = _closure1_slot0;
        var3 = _closure1_slot3;
        var0 = 33;
        var3 = var3[var0];
        var0 = undefined;
        var5 = var4.bind(var0)(var3);
        var4 = var5.parseRoom;
        var3 = arg0;
        var3 = var4.bind(var5)(var3);
        var1.room = var3;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3 = var7.bind(var0)(var6, var3);
    var3 = 35;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/gateway/dispatchSocketMessage.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var1 = _closure1_slot23;
        var0 = arg0;
        var0 = var1[var0];
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [29, 1376, 6779, 1628, 1372, 1683, 10334, 1621, 3522, 3118, 3119, 660, 3, 12478, 12464, 14, 566, 12508, 1344, 4384, 12509, 806, 22, 6553, 4679, 1631, 9713, 6621, 3444, 5677, 7027, 3453, 3973, 12589, 1605, 2]);