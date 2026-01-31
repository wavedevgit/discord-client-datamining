// modules/guild_profile/GuildProfileBuilders.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var6;
    var0 = function arg0, arg1() {
        _fun59618: for (var _fun59618_ip = 0;;) switch (_fun59618_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun59618_ip = 46;
                    continue _fun59618
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun59618_ip = 55;
                    continue _fun59618
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun59618_ip = 343;
                    continue _fun59618
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun59618_ip = 323;
                    continue _fun59618
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun59618_ip = 283;
                    continue _fun59618
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun59618_ip = 270;
                    continue _fun59618
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
                    _fun59618_ip = 163;
                    continue _fun59618
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun59618_ip = 179;
                    continue _fun59618
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun59618_ip = 249;
                    continue _fun59618
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun59618_ip = 249;
                    continue _fun59618
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun59618_ip = 234;
                    continue _fun59618
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun59618_ip = 247;
                    continue _fun59618
                }
            case 234:
                var8 = _closure1_slot6;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun59618_ip = 265;
                continue _fun59618;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun59618_ip = 283;
                continue _fun59618;
            case 270:
                var6 = _closure1_slot6;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun59618_ip = 323;
                    continue _fun59618
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
                    _fun59618_ip = 330;
                    continue _fun59618
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun59619: for (var _fun59619_ip = 0;;) switch (_fun59619_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun59619_ip = 56;
                                continue _fun59619
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
                            _fun59619_ip = 67;
                            continue _fun59619;
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
    var _closure1_slot5 = var0;
    var0 = function arg0, arg1() {
        _fun59620: for (var _fun59620_ip = 0;;) switch (_fun59620_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun59620_ip = 23;
                    continue _fun59620
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun59620_ip = 33;
                    continue _fun59620
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
                    _fun59620_ip = 70;
                    continue _fun59620
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun59620_ip = 55;
                    continue _fun59620
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot6 = var0;
    var0 = function arg0() {
        _fun59621: for (var _fun59621_ip = 0;;) switch (_fun59621_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.guildId;
                var5 = var0.emojiId;
                var7 = var0.emojiName;
                var1 = _closure1_slot3;
                var0 = var1.get;
                var4 = var0.bind(var1)(var2);
                var2 = null;
                if (!(var2 == var5)) {
                    _fun59621_ip = 52;
                    continue _fun59621
                }
            case 43:
                var1 = var2 == var7;
                var0 = null;
                if (var1) {
                    _fun59621_ip = 126;
                    continue _fun59621
                }
            case 52:
                if (!(var2 == var5)) {
                    _fun59621_ip = 100;
                    continue _fun59621
                }
            case 56:
                var6 = var2 != var7;
                var1 = null;
                if (!var6) {
                    _fun59621_ip = 98;
                    continue _fun59621
                }
            case 65:
                var8 = _closure1_slot1;
                var6 = _closure1_slot2;
                var3 = 1;
                var6 = var6[var3];
                var3 = undefined;
                var6 = var8.bind(var3)(var6);
                var3 = var6.getByName;
                var1 = var3.bind(var6)(var7);
            case 98:
                _fun59621_ip = 123;
                continue _fun59621;
            case 100:
                var3 = var2 != var4;
                var2 = null;
                if (!var3) {
                    _fun59621_ip = 120;
                    continue _fun59621
                }
            case 109:
                var3 = var4.getById;
                var2 = var3.bind(var4)(var5);
            case 120:
                var1 = var2;
            case 123:
                var0 = var1;
            case 126:
                return var0;
        }
    };
    var _closure1_slot7 = var0;
    var0 = function arg0, arg1() {
        _fun59622: for (var _fun59622_ip = 0;;) switch (_fun59622_ip) {
            case 0:
                var10 = arg0;
                var0 = global;
                var2 = var0.Array;
                var1 = _closure1_slot0;
                var0 = _closure1_slot2;
                var8 = 2;
                var0 = var0[var8];
                var7 = undefined;
                var0 = var1.bind(var7)(var0);
                var16 = var0.MAX_TRAITS;
                var1 = var2.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var2
                    }
                });
                var17 = var1;
                var0 = new var17[var2](var16, var15);
                var2 = var0 instanceof Object ? var0 : var1;
                var1 = var2.fill;
                var0 = _closure1_slot4;
                var0 = var1.bind(var2)(var0);
                var2 = _closure1_slot5;
                var1 = arg1;
                var6 = var2.bind(var7)(var1);
                var2 = var6.bind(var7)();
                var1 = var2.done;
                var5 = null;
                var4 = 0;
                var3 = var2;
                var2 = undefined;
                if (var1) {
                    _fun59622_ip = 260;
                    continue _fun59622
                }
            case 113:
                var14 = var3.value;
                var1 = var14.position;
                var1 = var1 < var4;
                if (var1) {
                    _fun59622_ip = 162;
                    continue _fun59622
                }
            case 130:
                var12 = var14.position;
                var13 = _closure1_slot0;
                var11 = _closure1_slot2;
                var11 = var11[var8];
                var11 = var13.bind(var7)(var11);
                var11 = var11.MAX_TRAITS;
                var1 = var12 >= var11;
            case 162:
                if (var1) {
                    _fun59622_ip = 242;
                    continue _fun59622
                }
            case 165:
                var12 = var14.position;
                var11 = {};
                var1 = var14.label;
                var11.label = var1;
                var13 = _closure1_slot7;
                var1 = {};
                var1.guildId = var10;
                var15 = var14.emoji_id;
                var1.emojiId = var15;
                var14 = var14.emoji_name;
                var1.emojiName = var14;
                var1 = var13.bind(var7)(var1);
                var14 = var5 != var1;
                var13 = undefined;
                if (!var14) {
                    _fun59622_ip = 230;
                    continue _fun59622
                }
            case 227:
                var13 = var1;
            case 230:
                var11.emoji = var13;
                var0[var12] = var11;
                var2 = var1;
            case 242:
                var11 = var6.bind(var7)();
                var1 = var11.done;
                var3 = var11;
                if (!var1) {
                    _fun59622_ip = 113;
                    continue _fun59622
                }
            case 260:
                return var0;
        }
    };
    var _closure1_slot8 = var0;
    var3 = function arg0() {
        _fun59623: for (var _fun59623_ip = 0;;) switch (_fun59623_ip) {
            case 0:
                var1 = arg0;
                var0 = {};
                var2 = var1.id;
                var0.id = var2;
                var2 = var1.name;
                var0.name = var2;
                var4 = var1.description;
                var3 = null;
                var6 = var3 != var4;
                var5 = '';
                var2 = var5;
                if (!var6) {
                    _fun59623_ip = 47;
                    continue _fun59623
                }
            case 44:
                var2 = var4;
            case 47:
                var0.description = var2;
                var2 = var1.icon_hash;
                var0.icon = var2;
                var2 = var1.custom_banner_hash;
                var0.customBanner = var2;
                var2 = var1.online_count;
                var0.onlineCount = var2;
                var2 = var1.member_count;
                var0.memberCount = var2;
                var4 = var1.brand_color_primary;
                var6 = var3 == var4;
                var2 = null;
                if (var6) {
                    _fun59623_ip = 118;
                    continue _fun59623
                }
            case 109:
                var2 = null;
                if (!(var5 !== var4)) {
                    _fun59623_ip = 118;
                    continue _fun59623
                }
            case 115:
                var2 = var4;
            case 118:
                var0.brandColorPrimary = var2;
                var2 = var1.visibility;
                var0.visibility = var2;
                var6 = _closure1_slot8;
                var5 = var1.id;
                var4 = var1.traits;
                if (!(var3 == var4)) {
                    _fun59623_ip = 160;
                    continue _fun59623
                }
            case 156:
                var4 = new Array(0);
            case 160:
                var2 = undefined;
                var2 = var6.bind(var2)(var5, var4);
                var0.traits = var2;
                var2 = var1.game_application_ids;
                if (!(var3 == var2)) {
                    _fun59623_ip = 187;
                    continue _fun59623
                }
            case 183:
                var2 = new Array(0);
            case 187:
                var0.gameApplicationIds = var2;
                var5 = var1.game_activity;
                if (!(var3 != var5)) {
                    _fun59623_ip = 246;
                    continue _fun59623
                }
            case 204:
                var2 = global;
                var4 = var2.Object;
                var2 = var4.entries;
                var6 = var2.bind(var4)(var5);
                var5 = var6.reduce;
                var4 = function(arg0, arg1) { // Environment: var2
                    _fun59624: for (var _fun59624_ip = 0;;) switch (_fun59624_ip) {
                        case 0:
                            var0 = arg0;
                            var5 = arg1;
                            var1 = var5[Symbol.iterator];
                            var5 = var1().next;
                            var3 = var5().value;
                            var2 = var1;
                            var7 = undefined;
                            var4 = var2 === var7;
                            var2 = undefined;
                            if (var4) {
                                _fun59624_ip = 30;
                                continue _fun59624
                            }
                        case 27:
                            var2 = var3;
                        case 30:
                            var3 = undefined;
                            if (var4) {
                                _fun59624_ip = 60;
                                continue _fun59624
                            }
                        case 35:
                            var6 = var5().value;
                            var5 = var1;
                            var5 = var5 === var7;
                            var3 = undefined;
                            var4 = var5;
                            if (var5) {
                                _fun59624_ip = 60;
                                continue _fun59624
                            }
                        case 54:
                            var3 = var6;
                            var4 = var5;
                        case 60:
                            if (var4) {
                                _fun59624_ip = 66;
                                continue _fun59624
                            }
                        case 63:
                            var1.return();
                        case 66:
                            var1 = var2.toString;
                            var2 = var1.bind(var2)();
                            var1 = {};
                            var4 = var3.activity_level;
                            var1.level = var4;
                            var3 = var3.activity_score;
                            var1.score = var3;
                            var0[var2] = var1;
                            return var0;
                    }
                };
                var2 = {};
                var2 = var5.bind(var6)(var4, var2);
                _fun59623_ip = 248;
                continue _fun59623;
            case 246:
                var2 = {};
            case 248:
                var0.gameActivity = var2;
                var2 = var1.features;
                if (!(var3 == var2)) {
                    _fun59623_ip = 267;
                    continue _fun59623
                }
            case 263:
                var2 = new Array(0);
            case 267:
                var0.features = var2;
                var2 = var1.tag;
                var0.tag = var2;
                var2 = var1.badge;
                var0.badge = var2;
                var2 = var1.badge_color_primary;
                var0.badgeColorPrimary = var2;
                var2 = var1.badge_color_secondary;
                var0.badgeColorSecondary = var2;
                var2 = var1.badge_hash;
                var0.badgeHash = var2;
                var2 = var1.premium_subscription_count;
                var0.premiumSubscriberCount = var2;
                var1 = var1.premium_tier;
                var0.premiumTier = var1;
                return var0;
        }
    };
    var _closure1_slot9 = var3;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var4);
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var5.bind(var0)(var4);
    var4 = var4.EmojiDisambiguations;
    var _closure1_slot3 = var4;
    var4 = {};
    var7 = '';
    var4.label = var7;
    var _closure1_slot4 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_profile/GuildProfileBuilders.tsx';
    var4 = var5.bind(var6)(var4);
    var2.buildGuildProfileFromServer = var3;
    var3 = function arg0() {
        _fun59625: for (var _fun59625_ip = 0;;) switch (_fun59625_ip) {
            case 0:
                var1 = arg0;
                var0 = {};
                var2 = var1.name;
                var4 = null;
                if (!(var4 != var2)) {
                    _fun59625_ip = 27;
                    continue _fun59625
                }
            case 16:
                var2 = var1.name;
                var0.name = var2;
            case 27:
                var2 = var1.description;
                if (!(var4 != var2)) {
                    _fun59625_ip = 47;
                    continue _fun59625
                }
            case 36:
                var2 = var1.description;
                var0.description = var2;
            case 47:
                var2 = var1.icon;
                var3 = undefined;
                if (!(var3 !== var2)) {
                    _fun59625_ip = 69;
                    continue _fun59625
                }
            case 58:
                var2 = var1.icon;
                var0.icon = var2;
            case 69:
                var2 = var1.customBanner;
                if (!(var3 !== var2)) {
                    _fun59625_ip = 93;
                    continue _fun59625
                }
            case 79:
                var2 = var1.customBanner;
                var0.custom_banner = var2;
            case 93:
                var2 = var1.visibility;
                if (!(var4 != var2)) {
                    _fun59625_ip = 115;
                    continue _fun59625
                }
            case 103:
                var2 = var1.visibility;
                var0.visibility = var2;
            case 115:
                var2 = var1.brandColorPrimary;
                if (!(var3 !== var2)) {
                    _fun59625_ip = 137;
                    continue _fun59625
                }
            case 125:
                var2 = var1.brandColorPrimary;
                var0.brand_color_primary = var2;
            case 137:
                var2 = var1.traits;
                if (!(var4 != var2)) {
                    _fun59625_ip = 215;
                    continue _fun59625
                }
            case 147:
                var6 = var1.traits;
                var5 = var6.map;
                var2 = function(arg0, arg1) { // Environment: var2
                    _fun59626: for (var _fun59626_ip = 0;;) switch (_fun59626_ip) {
                        case 0:
                            var3 = arg0;
                            var4 = null;
                            var1 = var4 == var3;
                            var0 = undefined;
                            if (var1) {
                                _fun59626_ip = 19;
                                continue _fun59626
                            }
                        case 14:
                            var0 = var3.label;
                        case 19:
                            var1 = var4 == var0;
                            var0 = null;
                            if (var1) {
                                _fun59626_ip = 146;
                                continue _fun59626
                            }
                        case 28:
                            var1 = var3.label;
                            var5 = var1.length;
                            var1 = 0;
                            var1 = var5 <= var1;
                            var0 = null;
                            if (var1) {
                                _fun59626_ip = 146;
                                continue _fun59626
                            }
                        case 49:
                            var1 = {};
                            var5 = var3.label;
                            var1.label = var5;
                            var5 = arg1;
                            var1.position = var5;
                            var6 = var3.emoji;
                            var7 = var4 == var6;
                            var5 = undefined;
                            if (var7) {
                                _fun59626_ip = 87;
                                continue _fun59626
                            }
                        case 82:
                            var5 = var6.id;
                        case 87:
                            var1.emoji_id = var5;
                            var6 = var3.emoji;
                            var7 = var4 == var6;
                            var5 = undefined;
                            if (var7) {
                                _fun59626_ip = 112;
                                continue _fun59626
                            }
                        case 107:
                            var5 = var6.name;
                        case 112:
                            var1.emoji_name = var5;
                            var3 = var3.emoji;
                            var4 = var4 == var3;
                            var2 = undefined;
                            if (var4) {
                                _fun59626_ip = 138;
                                continue _fun59626
                            }
                        case 132:
                            var2 = var3.animated;
                        case 138:
                            var1.emoji_animated = var2;
                            var0 = var1;
                        case 146:
                            return var0;
                    }
                };
                var6 = var5.bind(var6)(var2);
                var5 = var6.filter;
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var2 = 3;
                var2 = var8[var2];
                var2 = var7.bind(var3)(var2);
                var2 = var2.isNotNullish;
                var2 = var5.bind(var6)(var2);
                var0.traits = var2;
            case 215:
                var2 = var1.gameApplicationIds;
                if (!(var4 != var2)) {
                    _fun59625_ip = 237;
                    continue _fun59625
                }
            case 225:
                var2 = var1.gameApplicationIds;
                var0.game_application_ids = var2;
            case 237:
                var2 = var1.tag;
                if (!(var3 !== var2)) {
                    _fun59625_ip = 257;
                    continue _fun59625
                }
            case 246:
                var2 = var1.tag;
                var0.tag = var2;
            case 257:
                var2 = var1.badge;
                if (!(var3 !== var2)) {
                    _fun59625_ip = 279;
                    continue _fun59625
                }
            case 267:
                var2 = var1.badge;
                var0.badge = var2;
            case 279:
                var2 = var1.badgeColorPrimary;
                if (!(var3 !== var2)) {
                    _fun59625_ip = 301;
                    continue _fun59625
                }
            case 289:
                var2 = var1.badgeColorPrimary;
                var0.badge_color_primary = var2;
            case 301:
                var2 = var1.badgeColorSecondary;
                if (!(var3 !== var2)) {
                    _fun59625_ip = 323;
                    continue _fun59625
                }
            case 311:
                var1 = var1.badgeColorSecondary;
                var0.badge_color_secondary = var1;
            case 323:
                return var0;
        }
    };
    var2.buildGuildProfileUpdateForServer = var3;
    var3 = function arg0() {
        var3 = arg0;
        var2 = var3.reduce;
        var1 = function(arg0, arg1) { // Environment: var0
            var0 = arg0;
            var3 = arg1;
            var2 = var3.game_application_id;
            var1 = {};
            var4 = var3.activity_level;
            var1.level = var4;
            var3 = var3.activity_score;
            var1.score = var3;
            var0[var2] = var1;
            return var0;
        };
        var0 = {};
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.buildTopGamesFromServer = var3;
    var1 = function arg0() {
        _fun59629: for (var _fun59629_ip = 0;;) switch (_fun59629_ip) {
            case 0:
                var7 = arg0;
                var3 = var7.guild;
                var5 = var7.profile;
                var4 = null;
                var1 = var4 != var5;
                var0 = null;
                if (!var1) {
                    _fun59629_ip = 39;
                    continue _fun59629
                }
            case 25:
                var2 = _closure1_slot9;
                var1 = undefined;
                var0 = var2.bind(var1)(var5);
            case 39:
                if (!(var4 == var0)) {
                    _fun59629_ip = 330;
                    continue _fun59629
                }
            case 46:
                var2 = var4 == var3;
                var1 = null;
                if (var2) {
                    _fun59629_ip = 327;
                    continue _fun59629
                }
            case 58:
                var2 = {};
                var5 = var3.id;
                var2.id = var5;
                var5 = var3.name;
                var2.name = var5;
                var6 = var3.description;
                var8 = var4 != var6;
                var5 = '';
                if (!var8) {
                    _fun59629_ip = 97;
                    continue _fun59629
                }
            case 94:
                var5 = var6;
            case 97:
                var2.description = var5;
                var5 = var3.icon;
                var2.icon = var5;
                var5 = var3.banner;
                var2.customBanner = var5;
                var8 = var3.approximate_presence_count;
                if (!(var4 == var8)) {
                    _fun59629_ip = 137;
                    continue _fun59629
                }
            case 131:
                var8 = var7.approximate_presence_count;
            case 137:
                var9 = var4 != var8;
                var6 = 0;
                if (!var9) {
                    _fun59629_ip = 149;
                    continue _fun59629
                }
            case 146:
                var6 = var8;
            case 149:
                var2.onlineCount = var6;
                var6 = var3.approximate_member_count;
                if (!(var4 == var6)) {
                    _fun59629_ip = 170;
                    continue _fun59629
                }
            case 164:
                var6 = var7.approximate_member_count;
            case 170:
                var7 = var4 != var6;
                var5 = 0;
                if (!var7) {
                    _fun59629_ip = 182;
                    continue _fun59629
                }
            case 179:
                var5 = var6;
            case 182:
                var2.memberCount = var5;
                var7 = _closure1_slot0;
                var6 = _closure1_slot2;
                var5 = 4;
                var6 = var6[var5];
                var5 = undefined;
                var5 = var7.bind(var5)(var6);
                var5 = var5.GuildProfileVisibility;
                var5 = var5.NOT_SPECIFIED;
                var2.visibility = var5;
                var5 = new Array(0);
                var2.traits = var5;
                var5 = new Array(0);
                var2.gameApplicationIds = var5;
                var5 = {};
                var2.gameActivity = var5;
                var5 = var3.features;
                if (!(var4 == var5)) {
                    _fun59629_ip = 268;
                    continue _fun59629
                }
            case 264:
                var5 = new Array(0);
            case 268:
                var2.features = var5;
                var2.brandColorPrimary = var4;
                var2.tag = var4;
                var2.badge = var4;
                var2.badgeHash = var4;
                var2.badgeColorPrimary = var4;
                var2.badgeColorSecondary = var4;
                var4 = var3.premium_subscription_count;
                var2.premiumSubscriberCount = var4;
                var3 = var3.premium_tier;
                var2.premiumTier = var3;
                var1 = var2;
            case 327:
                var0 = var1;
            case 330:
                return var0;
        }
    };
    var2.buildGuildProfileFromInvite = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [4700, 3063, 7342, 1304, 7343, 2]);