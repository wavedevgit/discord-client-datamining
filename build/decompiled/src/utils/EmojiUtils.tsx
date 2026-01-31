// utils/EmojiUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var6;
    var0 = function arg0, arg1() {
        _fun24908: for (var _fun24908_ip = 0;;) switch (_fun24908_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun24908_ip = 46;
                    continue _fun24908
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun24908_ip = 55;
                    continue _fun24908
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun24908_ip = 343;
                    continue _fun24908
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun24908_ip = 323;
                    continue _fun24908
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun24908_ip = 283;
                    continue _fun24908
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun24908_ip = 270;
                    continue _fun24908
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
                    _fun24908_ip = 163;
                    continue _fun24908
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun24908_ip = 179;
                    continue _fun24908
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun24908_ip = 249;
                    continue _fun24908
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun24908_ip = 249;
                    continue _fun24908
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun24908_ip = 234;
                    continue _fun24908
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun24908_ip = 247;
                    continue _fun24908
                }
            case 234:
                var8 = _closure1_slot19;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun24908_ip = 265;
                continue _fun24908;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun24908_ip = 283;
                continue _fun24908;
            case 270:
                var6 = _closure1_slot19;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun24908_ip = 323;
                    continue _fun24908
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
                    _fun24908_ip = 330;
                    continue _fun24908
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun24909: for (var _fun24909_ip = 0;;) switch (_fun24909_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun24909_ip = 56;
                                continue _fun24909
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
                            _fun24909_ip = 67;
                            continue _fun24909;
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
    var _closure1_slot18 = var0;
    var0 = function arg0, arg1() {
        _fun24910: for (var _fun24910_ip = 0;;) switch (_fun24910_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun24910_ip = 23;
                    continue _fun24910
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun24910_ip = 33;
                    continue _fun24910
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
                    _fun24910_ip = 70;
                    continue _fun24910
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun24910_ip = 55;
                    continue _fun24910
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot19 = var0;
    var4 = function arg0() {
        _fun24911: for (var _fun24911_ip = 0;;) switch (_fun24911_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.type;
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 6;
                var3 = var3[var0];
                var0 = undefined;
                var0 = var4.bind(var0)(var3);
                var0 = var0.EmojiTypes;
                var0 = var0.GUILD;
                var0 = var2 === var0;
                if (var0) {
                    _fun24911_ip = 63;
                    continue _fun24911
                }
            case 52:
                var2 = var1.guildId;
                var1 = null;
                var0 = var1 != var2;
            case 63:
                return var0;
        }
    };
    var _closure1_slot20 = var4;
    var8 = function arg0, arg1() {
        _fun24912: for (var _fun24912_ip = 0;;) switch (_fun24912_ip) {
            case 0:
                var2 = arg0;
                var3 = arg1;
                var1 = null;
                var0 = var1 != var2;
                if (!var0) {
                    _fun24912_ip = 19;
                    continue _fun24912
                }
            case 15:
                var0 = var1 != var3;
            case 19:
                if (!var0) {
                    _fun24912_ip = 54;
                    continue _fun24912
                }
            case 22:
                var4 = _closure1_slot20;
                var1 = undefined;
                var4 = var4.bind(var1)(var2);
                var1 = !var4;
                if (!var4) {
                    _fun24912_ip = 51;
                    continue _fun24912
                }
            case 42:
                var2 = var2.guildId;
                var1 = var3 === var2;
            case 51:
                var0 = var1;
            case 54:
                return var0;
        }
    };
    var _closure1_slot21 = var8;
    var7 = function arg0() {
        _fun24913: for (var _fun24913_ip = 0;;) switch (_fun24913_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.emoji;
                var13 = var0.channel;
                var11 = var0.guildId;
                var7 = undefined;
                if (!(var11 === var7)) {
                    _fun24913_ip = 49;
                    continue _fun24913
                }
            case 25:
                var1 = null;
                var3 = var1 == var13;
                var1 = undefined;
                if (var3) {
                    _fun24913_ip = 46;
                    continue _fun24913
                }
            case 36:
                var3 = var13.getGuildId;
                var1 = var3.bind(var13)();
            case 46:
                var11 = var1;
            case 49:
                var5 = var0.intention;
                var9 = var0.forceIncludeExternalGuilds;
                var1 = _closure1_slot20;
                var1 = var1.bind(var7)(var2);
                if (var1) {
                    _fun24913_ip = 80;
                    continue _fun24913
                }
            case 76:
                var1 = null;
                return var1;
            case 80:
                var1 = _closure1_slot13;
                var1 = var1.GUILD_PROFILE;
                if (!(var5 !== var1)) {
                    _fun24913_ip = 618;
                    continue _fun24913
                }
            case 97:
                var1 = null;
                var8 = var1 != var13;
                if (!var8) {
                    _fun24913_ip = 120;
                    continue _fun24913
                }
            case 106:
                var4 = _closure1_slot4;
                var3 = var13.type;
                var8 = var4.bind(var7)(var3);
            case 120:
                var6 = var1 != var13;
                if (!var6) {
                    _fun24913_ip = 141;
                    continue _fun24913
                }
            case 127:
                var4 = _closure1_slot5;
                var3 = var13.type;
                var6 = var4.bind(var7)(var3);
            case 141:
                var3 = _closure1_slot21;
                var3 = var3.bind(var7)(var2, var11);
                var12 = _closure1_slot6;
                var10 = var12.can;
                var4 = _closure1_slot8;
                var4 = var4.USE_EXTERNAL_EMOJIS;
                var4 = var10.bind(var12)(var4, var13);
                var10 = _closure1_slot13;
                var10 = var10.COMMUNITY_CONTENT;
                if (!(var5 !== var10)) {
                    _fun24913_ip = 583;
                    continue _fun24913
                }
            case 194:
                var10 = _closure1_slot14;
                var10 = var10.bind(var7)(var5);
                if (var10) {
                    _fun24913_ip = 234;
                    continue _fun24913
                }
            case 206:
                var10 = _closure1_slot21;
                var10 = var10.bind(var7)(var2, var11);
                if (var10) {
                    _fun24913_ip = 234;
                    continue _fun24913
                }
            case 219:
                if (var9) {
                    _fun24913_ip = 234;
                    continue _fun24913
                }
            case 222:
                var9 = _closure1_slot12;
                var9 = var9.DISALLOW_EXTERNAL;
                return var9;
            case 234:
                if (var8) {
                    _fun24913_ip = 240;
                    continue _fun24913
                }
            case 237:
                if (!var6) {
                    _fun24913_ip = 258;
                    continue _fun24913
                }
            case 240:
                if (var3) {
                    _fun24913_ip = 258;
                    continue _fun24913
                }
            case 243:
                if (var4) {
                    _fun24913_ip = 258;
                    continue _fun24913
                }
            case 246:
                var4 = _closure1_slot12;
                var4 = var4.DISALLOW_EXTERNAL;
                return var4;
            case 258:
                var4 = var2.id;
                if (!(var1 != var4)) {
                    _fun24913_ip = 288;
                    continue _fun24913
                }
            case 267:
                var4 = var2.available;
                if (var4) {
                    _fun24913_ip = 288;
                    continue _fun24913
                }
            case 276:
                var4 = _closure1_slot12;
                var4 = var4.GUILD_SUBSCRIPTION_UNAVAILABLE;
                return var4;
            case 288:
                var6 = _closure1_slot7;
                var4 = var6.getCurrentUser;
                var9 = var4.bind(var6)();
                var6 = _closure1_slot1;
                var4 = _closure1_slot2;
                var10 = 7;
                var4 = var4[var10];
                var6 = var6.bind(var7)(var4);
                var4 = var6.canUseEmojisEverywhere;
                var4 = var4.bind(var6)(var9);
                if (var4) {
                    _fun24913_ip = 385;
                    continue _fun24913
                }
            case 335:
                if (var3) {
                    _fun24913_ip = 385;
                    continue _fun24913
                }
            case 338:
                var4 = _closure1_slot13;
                var4 = var4.STATUS;
                if (!(var5 !== var4)) {
                    _fun24913_ip = 373;
                    continue _fun24913
                }
            case 352:
                var4 = var2.managed;
                if (var4) {
                    _fun24913_ip = 385;
                    continue _fun24913
                }
            case 361:
                var4 = _closure1_slot12;
                var4 = var4.PREMIUM_LOCKED;
                return var4;
            case 373:
                var4 = _closure1_slot12;
                var4 = var4.PREMIUM_LOCKED;
                return var4;
            case 385:
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var8 = 8;
                var4 = var4[var8];
                var6 = var5.bind(var7)(var4);
                var5 = var6.isUnusableRoleSubscriptionEmoji;
                var12 = var1 != var11;
                var4 = undefined;
                if (!var12) {
                    _fun24913_ip = 423;
                    continue _fun24913
                }
            case 420:
                var4 = var11;
            case 423:
                var4 = var5.bind(var6)(var2, var4);
                if (var4) {
                    _fun24913_ip = 521;
                    continue _fun24913
                }
            case 432:
                var5 = var2.animated;
                var4 = null;
                if (!var5) {
                    _fun24913_ip = 519;
                    continue _fun24913
                }
            case 443:
                var6 = _closure1_slot1;
                var5 = _closure1_slot2;
                var5 = var5[var10];
                var6 = var6.bind(var7)(var5);
                var5 = var6.canUseAnimatedEmojis;
                var5 = var5.bind(var6)(var9);
                var4 = null;
                if (var5) {
                    _fun24913_ip = 519;
                    continue _fun24913
                }
            case 476:
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var5 = var5[var8];
                var6 = var6.bind(var7)(var5);
                var5 = var6.isPurchasableRoleSubscriptionEmoji;
                var5 = var5.bind(var6)(var2);
                var4 = null;
                if (var5) {
                    _fun24913_ip = 519;
                    continue _fun24913
                }
            case 509:
                var5 = _closure1_slot12;
                var4 = var5.PREMIUM_LOCKED;
            case 519:
                _fun24913_ip = 581;
                continue _fun24913;
            case 521:
                var6 = _closure1_slot0;
                var8 = _closure1_slot2;
                var5 = 9;
                var5 = var8[var5];
                var7 = var6.bind(var7)(var5);
                var6 = var7.shouldHideGuildPurchaseEntryPoints;
                var5 = var2.guildId;
                var5 = var6.bind(var7)(var5);
                var6 = _closure1_slot12;
                if (var5) {
                    _fun24913_ip = 572;
                    continue _fun24913
                }
            case 564:
                var5 = var6.ROLE_SUBSCRIPTION_LOCKED;
                _fun24913_ip = 578;
                continue _fun24913;
            case 572:
                var5 = var6.ROLE_SUBSCRIPTION_UNAVAILABLE;
            case 578:
                var4 = var5;
            case 581:
                return var4;
            case 583:
                if (!var3) {
                    _fun24913_ip = 606;
                    continue _fun24913
                }
            case 586:
                var3 = var2.guildId;
                if (!(var1 != var3)) {
                    _fun24913_ip = 606;
                    continue _fun24913
                }
            case 595:
                var2 = var2.available;
                var1 = null;
                if (var2) {
                    _fun24913_ip = 616;
                    continue _fun24913
                }
            case 606:
                var2 = _closure1_slot12;
                var1 = var2.DISALLOW_EXTERNAL;
            case 616:
                return var1;
            case 618:
                var0 = _closure1_slot12;
                var0 = var0.DISALLOW_CUSTOM;
                return var0;
        }
    };
    var _closure1_slot22 = var7;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun24916: for (var _fun24916_ip = 0;;) switch (_fun24916_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun24916_ip = 62;
                            continue _fun24916
                        }
                    case 7:
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 10;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.getEmojiColors;
                        var1 = arg0;
                        var1 = var2.bind(var3)(var1);
                        SaveGenerator(address = 50);
                    case 48:
                        return var1;
                    case 50:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun24916_ip = 59;
                            continue _fun24916
                        }
                    case 56:
                        return var1;
                    case 59:
                        return var1;
                    case 62:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot23 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot23 = var0;
    var3 = global;
    var12 = var3.Object;
    var11 = var12.defineProperty;
    var9 = {};
    var0 = true;
    var9.value = var0;
    var0 = '__esModule';
    var0 = var11.bind(var12)(var2, var0, var9);
    var15 = 0;
    var9 = var6[var15];
    var0 = undefined;
    var9 = var10.bind(var0)(var9);
    var _closure1_slot3 = var9;
    var14 = 1;
    var9 = var6[var14];
    var9 = var5.bind(var0)(var9);
    var11 = var9.isGuildTextChannelType;
    var _closure1_slot4 = var11;
    var9 = var9.isGuildVocalChannelType;
    var _closure1_slot5 = var9;
    var9 = 2;
    var9 = var6[var9];
    var9 = var10.bind(var0)(var9);
    var _closure1_slot6 = var9;
    var9 = 3;
    var9 = var6[var9];
    var9 = var10.bind(var0)(var9);
    var _closure1_slot7 = var9;
    var9 = 4;
    var9 = var6[var9];
    var9 = var5.bind(var0)(var9);
    var9 = var9.Permissions;
    var _closure1_slot8 = var9;
    var9 = 5;
    var9 = var6[var9];
    var11 = var5.bind(var0)(var9);
    var9 = var11.EMOJI_MAX_FILESIZE;
    var _closure1_slot9 = var9;
    var9 = var11.EMOJI_MAX_LENGTH;
    var _closure1_slot10 = var9;
    var9 = var11.EMOJI_RE;
    var _closure1_slot11 = var9;
    var9 = var11.EmojiDisabledReasons;
    var _closure1_slot12 = var9;
    var12 = var11.EmojiIntention;
    var _closure1_slot13 = var12;
    var11 = var11.isExternalEmojiAllowedForIntention;
    var _closure1_slot14 = var11;
    var13 = var3.Set;
    var12 = var9.PREMIUM_LOCKED;
    var11 = new Array(2);
    var11[0] = var12;
    var12 = var9.ROLE_SUBSCRIPTION_LOCKED;
    var11[1] = var12;
    var12 = var13.prototype;
    var12 = Object.create(var12, {
        constructor: {
            value: var13
        }
    });
    var19 = var12;
    var18 = var11;
    var11 = new var19[var13](var18, var17);
    var12 = var11 instanceof Object ? var11 : var12;
    var _closure1_slot15 = var12;
    var13 = var3.Set;
    var11 = new Array(2);
    var18 = var11;
    var17 = var12;
    var16 = 0;
    var12 = arraySpread(var18, var17, var16);
    var15 = var9.GUILD_SUBSCRIPTION_UNAVAILABLE;
    var11[var12] = var15;
    var14 = var12 + var14;
    var12 = var9.ROLE_SUBSCRIPTION_UNAVAILABLE;
    var11[var14] = var12;
    var12 = var13.prototype;
    var12 = Object.create(var12, {
        constructor: {
            value: var13
        }
    });
    var19 = var12;
    var18 = var11;
    var11 = new var19[var13](var18, var17);
    var11 = var11 instanceof Object ? var11 : var12;
    var _closure1_slot16 = var11;
    var11 = var3.Set;
    var12 = var9.DISALLOW_CUSTOM;
    var3 = new Array(4);
    var3[0] = var12;
    var12 = var9.DISALLOW_EXTERNAL;
    var3[1] = var12;
    var12 = var9.GUILD_SUBSCRIPTION_UNAVAILABLE;
    var3[2] = var12;
    var9 = var9.ONLY_GUILD_EMOJIS_ALLOWED;
    var3[3] = var9;
    var9 = var11.prototype;
    var9 = Object.create(var9, {
        constructor: {
            value: var11
        }
    });
    var19 = var9;
    var18 = var3;
    var3 = new var19[var11](var18, var17);
    var3 = var3 instanceof Object ? var3 : var9;
    var _closure1_slot17 = var3;
    var3 = {};
    var9 = function arg0() {
        _fun24917: for (var _fun24917_ip = 0;;) switch (_fun24917_ip) {
            case 0:
                var4 = arg0;
                var3 = var4.replace;
                var2 = _closure1_slot11;
                var1 = '';
                var3 = var3.bind(var4)(var2, var1);
                var2 = var3.slice;
                var1 = _closure1_slot10;
                var0 = 0;
                var0 = var2.bind(var3)(var0, var1);
                var1 = var0.length;
                var4 = '_';
                var3 = 2;
                var2 = var0;
                var0 = var2;
                if (!(var1 < var3)) {
                    _fun24917_ip = 83;
                    continue _fun24917
                }
            case 64:
                var5 = var2 + var4;
                var1 = var5.length;
                var2 = var5;
                var0 = var2;
                if (var1 < var3) {
                    _fun24917_ip = 64;
                    continue _fun24917
                }
            case 83:
                return var0;
        }
    };
    var3.sanitizeEmojiName = var9;
    var9 = 10;
    var11 = var6[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.filterUnsupportedEmojis;
    var3.filterUnsupportedEmojis = var11;
    var9 = var6[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.getURL;
    var3.getURL = var9;
    var3.isInternalEmojiForGuildId = var8;
    var3.getEmojiUnavailableReason = var7;
    var3.isCustomEmoji = var4;
    var4 = function arg0() {
        _fun24918: for (var _fun24918_ip = 0;;) switch (_fun24918_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.categoryEmojis;
                var15 = var0.channel;
                var14 = var0.guildId;
                var13 = var0.intention;
                var0 = global;
                var0 = var0.Set;
                var2 = var0.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var0
                    }
                });
                var23 = var2;
                var0 = new var23[var0](var22);
                var4 = var0 instanceof Object ? var0 : var2;
                var3 = new Array(0);
                var0 = _closure1_slot18;
                var11 = undefined;
                var10 = var0.bind(var11)(var1);
                var5 = var10.bind(var11)();
                var0 = var5.done;
                var6 = 0;
                var8 = null;
                var7 = var5;
                var5 = false;
                var2 = 0;
                var1 = false;
                if (var0) {
                    _fun24918_ip = 322;
                    continue _fun24918
                }
            case 99:
                var0 = var7.value;
                var17 = _closure1_slot22;
                var16 = {};
                var16.emoji = var0;
                var16.channel = var15;
                var16.guildId = var14;
                var16.intention = var13;
                var21 = var17.bind(var11)(var16);
                if (!(var8 == var21)) {
                    _fun24918_ip = 158;
                    continue _fun24918
                }
            case 137:
                var16 = var3.push;
                var16 = var16.bind(var3)(var0);
                var17 = var6;
                var16 = var5;
                _fun24918_ip = 292;
                continue _fun24918;
            case 158:
                var19 = _closure1_slot17;
                var18 = var19.has;
                var18 = var18.bind(var19)(var21);
                if (var18) {
                    _fun24918_ip = 185;
                    continue _fun24918
                }
            case 175:
                var18 = var3.push;
                var18 = var18.bind(var3)(var0);
            case 185:
                var19 = _closure1_slot16;
                var18 = var19.has;
                var18 = var18.bind(var19)(var21);
                var17 = var6;
                var16 = var5;
                if (!var18) {
                    _fun24918_ip = 292;
                    continue _fun24918
                }
            case 208:
                var18 = var0.id;
                if (!(var8 != var18)) {
                    _fun24918_ip = 232;
                    continue _fun24918
                }
            case 217:
                var18 = var4.add;
                var0 = var0.id;
                var0 = var18.bind(var4)(var0);
            case 232:
                var18 = _closure1_slot15;
                var0 = var18.has;
                var19 = var0.bind(var18)(var21);
                var18 = var6;
                var0 = var5;
                if (!var19) {
                    _fun24918_ip = 286;
                    continue _fun24918
                }
            case 255:
                var19 = var5;
                if (var5) {
                    _fun24918_ip = 275;
                    continue _fun24918
                }
            case 261:
                var20 = _closure1_slot12;
                var20 = var20.PREMIUM_LOCKED;
                var19 = var21 !== var20;
            case 275:
                if (var19) {
                    _fun24918_ip = 280;
                    continue _fun24918
                }
            case 278:
                var5 = true;
            case 280:
                var18 = var6 + 1;
                var0 = var5;
            case 286:
                var17 = var18;
                var16 = var0;
            case 292:
                var18 = var10.bind(var11)();
                var0 = var18.done;
                var6 = var17;
                var5 = var16;
                var7 = var18;
                var2 = var6;
                var1 = var5;
                if (!var0) {
                    _fun24918_ip = 99;
                    continue _fun24918
                }
            case 322:
                var0 = {};
                var0.emojisDisabled = var4;
                var0.emojisUnfiltered = var3;
                var0.emojisPremiumLockedCount = var2;
                var0.emojiNitroLocked = var1;
                return var0;
        }
    };
    var3.getEmojiUnavailableReasons = var4;
    var4 = function arg0() {
        var3 = _closure1_slot22;
        var2 = undefined;
        var1 = arg0;
        var2 = var3.bind(var2)(var1);
        var1 = _closure1_slot17;
        var0 = var1.has;
        var0 = var0.bind(var1)(var2);
        return var0;
    };
    var3.isEmojiFiltered = var4;
    var4 = function arg0() {
        var3 = _closure1_slot22;
        var2 = undefined;
        var1 = arg0;
        var2 = var3.bind(var2)(var1);
        var1 = _closure1_slot15;
        var0 = var1.has;
        var0 = var0.bind(var1)(var2);
        return var0;
    };
    var3.isEmojiPremiumLocked = var4;
    var4 = function arg0() {
        _fun24921: for (var _fun24921_ip = 0;;) switch (_fun24921_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.categoryEmojis;
                var13 = var0.channel;
                var12 = var0.guildId;
                var11 = var0.intention;
                var0 = _closure1_slot18;
                var9 = undefined;
                var8 = var0.bind(var9)(var1);
                var4 = var8.bind(var9)();
                var3 = var4.done;
                var5 = false;
                var6 = var4;
                var4 = 0;
                var0 = false;
                var2 = 0;
                if (var3) {
                    _fun24921_ip = 170;
                    continue _fun24921
                }
            case 62:
                var14 = _closure1_slot22;
                var3 = {};
                var15 = var6.value;
                var3.emoji = var15;
                var3.channel = var13;
                var3.intention = var11;
                var3.guildId = var12;
                var16 = var14.bind(var9)(var3);
                var3 = _closure1_slot12;
                var3 = var3.PREMIUM_LOCKED;
                if (!(var16 !== var3)) {
                    _fun24921_ip = 138;
                    continue _fun24921
                }
            case 110:
                var3 = _closure1_slot12;
                var3 = var3.GUILD_SUBSCRIPTION_UNAVAILABLE;
                var15 = var5;
                var14 = var4;
                if (!(var16 === var3)) {
                    _fun24921_ip = 143;
                    continue _fun24921
                }
            case 130:
                var14 = var4 + 1;
                var15 = var5;
                _fun24921_ip = 143;
                continue _fun24921;
            case 138:
                var14 = var4 + 1;
                var15 = true;
            case 143:
                var16 = var8.bind(var9)();
                var3 = var16.done;
                var5 = var15;
                var4 = var14;
                var6 = var16;
                var0 = var5;
                var2 = var4;
                if (!var3) {
                    _fun24921_ip = 62;
                    continue _fun24921
                }
            case 170:
                if (!var0) {
                    _fun24921_ip = 182;
                    continue _fun24921
                }
            case 173:
                var1 = var1.length;
                var0 = var2 === var1;
            case 182:
                return var0;
        }
    };
    var3.isEmojiCategoryNitroLocked = var4;
    var4 = function arg0() {
        _fun24922: for (var _fun24922_ip = 0;;) switch (_fun24922_ip) {
            case 0:
                var3 = arg0;
                var2 = this;
                var0 = var2.isEmojiFiltered;
                var0 = var0.bind(var2)(var3);
                if (var0) {
                    _fun24922_ip = 31;
                    continue _fun24922
                }
            case 20:
                var1 = var2.isEmojiPremiumLocked;
                var0 = var1.bind(var2)(var3);
            case 31:
                return var0;
        }
    };
    var3.isEmojiFilteredOrLocked = var4;
    var4 = function arg0() {
        var3 = _closure1_slot22;
        var2 = undefined;
        var1 = arg0;
        var2 = var3.bind(var2)(var1);
        var1 = _closure1_slot16;
        var0 = var1.has;
        var0 = var0.bind(var1)(var2);
        return var0;
    };
    var3.isEmojiDisabled = var4;
    var4 = function arg0() {
        var0 = arg0;
        var1 = var0.size;
        var0 = 2097152;
        var0 = var1 > var0;
        return var0;
    };
    var3.isFileTooBig = var4;
    var4 = function arg0() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 11;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.dataUriFileSize;
        var1 = arg0;
        var1 = var2.bind(var3)(var1);
        var0 = _closure1_slot9;
        var0 = var1 > var0;
        return var0;
    };
    var3.isDataTooBig = var4;
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'utils/EmojiUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var3 = function arg0, arg1() {
        var3 = arg0;
        var0 = arg1;
        var _closure2_slot0 = var0;
        var0 = 0;
        var _closure2_slot1 = var0;
        var _closure2_slot2 = var0;
        var _closure2_slot3 = var0;
        var _closure2_slot4 = var0;
        var _closure2_slot5 = var0;
        var _closure2_slot6 = var0;
        var2 = var3.forEach;
        var0 = function(arg0) { // Environment: var1
            _fun24927: for (var _fun24927_ip = 0;;) switch (_fun24927_ip) {
                case 0:
                    var0 = arg0;
                    var2 = var0.id;
                    var1 = null;
                    if (!(var1 == var2)) {
                        _fun24927_ip = 33;
                        continue _fun24927
                    }
                case 14:
                    var1 = _closure2_slot1;
                    var1 = var1 + 1;
                    _closure2_slot1 = var1;
                    _fun24927_ip = 186;
                    continue _fun24927;
                case 33:
                    var2 = var0.type;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 6;
                    var3 = var3[var1];
                    var1 = undefined;
                    var1 = var4.bind(var1)(var3);
                    var1 = var1.EmojiTypes;
                    var1 = var1.GUILD;
                    if (!(var2 === var1)) {
                        _fun24927_ip = 163;
                        continue _fun24927
                    }
                case 79:
                    var3 = var0.guildId;
                    var1 = _closure2_slot0;
                    if (!(var3 !== var1)) {
                        _fun24927_ip = 130;
                        continue _fun24927
                    }
                case 95:
                    var1 = var0.managed;
                    if (var1) {
                        _fun24927_ip = 117;
                        continue _fun24927
                    }
                case 104:
                    var1 = _closure2_slot3;
                    var1 = var1 + 1;
                    _closure2_slot3 = var1;
                    _fun24927_ip = 163;
                    continue _fun24927;
                case 117:
                    var1 = _closure2_slot5;
                    var1 = var1 + 1;
                    _closure2_slot5 = var1;
                    _fun24927_ip = 163;
                    continue _fun24927;
                case 130:
                    var1 = var0.managed;
                    if (var1) {
                        _fun24927_ip = 152;
                        continue _fun24927
                    }
                case 139:
                    var1 = _closure2_slot2;
                    var1 = var1 + 1;
                    _closure2_slot2 = var1;
                    _fun24927_ip = 163;
                    continue _fun24927;
                case 152:
                    var1 = _closure2_slot4;
                    var1 = var1 + 1;
                    _closure2_slot4 = var1;
                case 163:
                    var0 = var0.animated;
                    if (!var0) {
                        _fun24927_ip = 186;
                        continue _fun24927
                    }
                case 172:
                    var0 = _closure2_slot6;
                    var0 = var0 + 1;
                    _closure2_slot6 = var0;
                case 186:
                    var0 = undefined;
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var0);
        var0 = {};
        var2 = _closure2_slot1;
        var0.unicode = var2;
        var2 = _closure2_slot2;
        var0.custom = var2;
        var2 = _closure2_slot3;
        var0.customExternal = var2;
        var2 = _closure2_slot4;
        var0.managed = var2;
        var2 = _closure2_slot5;
        var0.managedExternal = var2;
        var1 = _closure2_slot6;
        var0.animated = var1;
        return var0;
    };
    var2.countEmoji = var3;
    var3 = function() {
        var0 = undefined;
        var3 = _closure1_slot23;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.getEmojiColors = var3;
    var3 = function arg0() {
        _fun24929: for (var _fun24929_ip = 0;;) switch (_fun24929_ip) {
            case 0:
                var0 = arg0;
                var6 = arguments[1];
                var3 = undefined;
                if (!(var6 === var3)) {
                    _fun24929_ip = 15;
                    continue _fun24929
                }
            case 12:
                var6 = 32;
            case 15:
                var7 = var0.id;
                var2 = var0.name;
                var5 = var0.animated;
                var4 = null;
                if (!(var4 == var7)) {
                    _fun24929_ip = 73;
                    continue _fun24929
                }
            case 37:
                var1 = _closure1_slot1;
                var8 = _closure1_slot2;
                var0 = 10;
                var0 = var8[var0];
                var1 = var1.bind(var3)(var0);
                var0 = var1.getURL;
                var0 = var0.bind(var1)(var2);
                _fun24929_ip = 132;
                continue _fun24929;
            case 73:
                var2 = _closure1_slot1;
                var8 = _closure1_slot2;
                var1 = 12;
                var1 = var8[var1];
                var3 = var2.bind(var3)(var1);
                var2 = var3.getEmojiURL;
                var1 = {};
                var1.id = var7;
                var1.size = var6;
                var4 = var4 != var5;
                if (!var4) {
                    _fun24929_ip = 122;
                    continue _fun24929
                }
            case 119:
                var4 = var5;
            case 122:
                var1.animated = var4;
                var0 = var2.bind(var3)(var1);
            case 132:
                return var0;
        }
    };
    var2.getEmojiUrl = var3;
    var1 = function arg0() {
        _fun24930: for (var _fun24930_ip = 0;;) switch (_fun24930_ip) {
            case 0:
                var1 = arg0;
                var0 = 'allNamesString';
                var0 = var0 in var1;
                if (var0) {
                    _fun24930_ip = 46;
                    continue _fun24930
                }
            case 16:
                var3 = var1.name;
                var0 = global;
                var0 = var0.HermesInternal;
                var2 = var0.concat;
                var0 = ':';
                var0 = var2.bind(var0)(var3, var0);
                _fun24930_ip = 54;
                continue _fun24930;
            case 46:
                var0 = var1.allNamesString;
            case 54:
                return var0;
        }
    };
    var2.getAllEmojiNamesString = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 1376, 3050, 1613, 660, 1616, 3066, 3068, 4705, 3043, 6517, 1461, 1417, 2]);