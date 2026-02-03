// utils/GuildBoostingUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var22 = require;
    var8 = metroImportDefault;
    var2 = exports;
    var23 = dependencyMap;
    var _closure1_slot0 = var22;
    var _closure1_slot1 = var8;
    var0 = metroImportAll;
    var _closure1_slot2 = var0;
    var _closure1_slot3 = var23;
    var0 = function arg0, arg1() {
        _fun55676: for (var _fun55676_ip = 0;;) switch (_fun55676_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun55676_ip = 46;
                    continue _fun55676
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun55676_ip = 55;
                    continue _fun55676
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun55676_ip = 343;
                    continue _fun55676
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun55676_ip = 323;
                    continue _fun55676
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun55676_ip = 283;
                    continue _fun55676
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun55676_ip = 270;
                    continue _fun55676
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
                    _fun55676_ip = 163;
                    continue _fun55676
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun55676_ip = 179;
                    continue _fun55676
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun55676_ip = 249;
                    continue _fun55676
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun55676_ip = 249;
                    continue _fun55676
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun55676_ip = 234;
                    continue _fun55676
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun55676_ip = 247;
                    continue _fun55676
                }
            case 234:
                var8 = _closure1_slot37;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun55676_ip = 265;
                continue _fun55676;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun55676_ip = 283;
                continue _fun55676;
            case 270:
                var6 = _closure1_slot37;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun55676_ip = 323;
                    continue _fun55676
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
                    _fun55676_ip = 330;
                    continue _fun55676
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun55677: for (var _fun55677_ip = 0;;) switch (_fun55677_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun55677_ip = 56;
                                continue _fun55677
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
                            _fun55677_ip = 67;
                            continue _fun55677;
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
    var _closure1_slot36 = var0;
    var0 = function arg0, arg1() {
        _fun55678: for (var _fun55678_ip = 0;;) switch (_fun55678_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun55678_ip = 23;
                    continue _fun55678
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun55678_ip = 33;
                    continue _fun55678
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
                    _fun55678_ip = 70;
                    continue _fun55678
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun55678_ip = 55;
                    continue _fun55678
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot37 = var0;
    var12 = function arg0() {
        _fun55679: for (var _fun55679_ip = 0;;) switch (_fun55679_ip) {
            case 0:
                var3 = _closure1_slot4;
                var2 = var3.getGuild;
                var0 = arg0;
                var3 = var2.bind(var3)(var0);
                var2 = null;
                var4 = var2 == var3;
                var0 = undefined;
                if (var4) {
                    _fun55679_ip = 37;
                    continue _fun55679
                }
            case 31:
                var0 = var3.premiumTier;
            case 37:
                if (!(var2 == var0)) {
                    _fun55679_ip = 51;
                    continue _fun55679
                }
            case 41:
                var1 = _closure1_slot10;
                var0 = var1.NONE;
            case 51:
                return var0;
        }
    };
    var _closure1_slot38 = var12;
    var11 = function arg0, arg1() {
        _fun55680: for (var _fun55680_ip = 0;;) switch (_fun55680_ip) {
            case 0:
                var3 = arg0;
                var2 = arg1;
                var1 = null;
                var0 = var1 == var2;
                if (var0) {
                    _fun55680_ip = 29;
                    continue _fun55680
                }
            case 15:
                var1 = var1 != var3;
                if (!var1) {
                    _fun55680_ip = 26;
                    continue _fun55680
                }
            case 22:
                var1 = var3 >= var2;
            case 26:
                var0 = var1;
            case 29:
                return var0;
        }
    };
    var _closure1_slot39 = var11;
    var10 = function arg0() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot3;
        var0 = 13;
        var1 = var1[var0];
        var0 = undefined;
        var2 = var2.bind(var0)(var1);
        var1 = var2.values;
        var0 = arg0;
        var2 = var1.bind(var2)(var0);
        var1 = var2.filter;
        var0 = function(arg0) { // Environment: var0
            var1 = arg0;
            var0 = var1.isAvailable;
            var0 = var0.bind(var1)();
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot40 = var10;
    var9 = function arg0, arg1() {
        _fun55683: for (var _fun55683_ip = 0;;) switch (_fun55683_ip) {
            case 0:
                var2 = arg0;
                var4 = arg1;
                var3 = _closure1_slot4;
                var1 = var3.getGuild;
                var1 = var1.bind(var3)(var4);
                var3 = null;
                var6 = var3 == var1;
                var3 = undefined;
                var5 = undefined;
                if (var6) {
                    _fun55683_ip = 62;
                    continue _fun55683
                }
            case 36:
                var7 = var1.features;
                var6 = var7.has;
                var1 = _closure1_slot11;
                var1 = var1.PREMIUM_TIER_3_OVERRIDE;
                var5 = var6.bind(var7)(var1);
            case 62:
                var1 = true;
                if (!(var1 !== var5)) {
                    _fun55683_ip = 122;
                    continue _fun55683
                }
            case 68:
                var1 = _closure1_slot38;
                var1 = var1.bind(var3)(var4);
                var0 = _closure1_slot9;
                var1 = var0[var1];
                var3 = var2.filter;
                var0 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var1 = var0.endsAt;
                    var0 = null;
                    var0 = var0 != var1;
                    return var0;
                };
                var0 = var3.bind(var2)(var0);
                var2 = var2.length;
                var0 = var0.length;
                var0 = var2 - var0;
                var0 = var1 - var0;
                return var0;
            case 122:
                var0 = 0;
                return var0;
        }
    };
    var _closure1_slot41 = var9;
    var7 = function arg0() {
        _fun55685: for (var _fun55685_ip = 0;;) switch (_fun55685_ip) {
            case 0:
                var0 = arg0;
                var2 = _closure1_slot19;
                var5 = var0.premiumFeatures;
                var1 = null;
                var6 = var1 == var5;
                var3 = undefined;
                if (var6) {
                    _fun55685_ip = 33;
                    continue _fun55685
                }
            case 27:
                var3 = var5.additionalSoundSlots;
            case 33:
                var5 = var1 != var3;
                var1 = 0;
                if (!var5) {
                    _fun55685_ip = 45;
                    continue _fun55685
                }
            case 42:
                var1 = var3;
            case 45:
                var3 = var2 + var1;
                var1 = global;
                var2 = var1.Math;
                var1 = var2.max;
                var6 = var0.features;
                var5 = var6.has;
                var0 = _closure1_slot11;
                var0 = var0.MORE_SOUNDBOARD;
                var0 = var5.bind(var6)(var0);
                if (var0) {
                    _fun55685_ip = 97;
                    continue _fun55685
                }
            case 91:
                var0 = _closure1_slot19;
                _fun55685_ip = 101;
                continue _fun55685;
            case 97:
                var0 = _closure1_slot20;
            case 101:
                var0 = var1.bind(var2)(var0, var3);
                return var0;
        }
    };
    var _closure1_slot42 = var7;
    var6 = function arg0() {
        _fun55686: for (var _fun55686_ip = 0;;) switch (_fun55686_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.subscription;
                var2 = null;
                var3 = var2 == var0;
                var2 = undefined;
                if (var3) {
                    _fun55686_ip = 25;
                    continue _fun55686
                }
            case 20:
                var2 = var0.status;
            case 25:
                var0 = _closure1_slot15;
                var0 = var0.CANCELED;
                var0 = var2 === var0;
                if (var0) {
                    _fun55686_ip = 51;
                    continue _fun55686
                }
            case 45:
                var0 = var1.canceled;
            case 51:
                return var0;
        }
    };
    var _closure1_slot43 = var6;
    var5 = function arg0() {
        _fun55687: for (var _fun55687_ip = 0;;) switch (_fun55687_ip) {
            case 0:
                var1 = arg0;
                var _closure2_slot0 = var1;
                var3 = _closure1_slot29;
                var2 = var3.find;
                var0 = function(arg0) { // Environment: var0
                    var1 = _closure2_slot0;
                    var2 = _closure1_slot9;
                    var0 = arg0;
                    var0 = var2[var0];
                    var0 = var1 >= var0;
                    return var0;
                };
                var0 = var2.bind(var3)(var0);
                var2 = null;
                if (!(var2 == var0)) {
                    _fun55687_ip = 47;
                    continue _fun55687
                }
            case 37:
                var1 = _closure1_slot10;
                var0 = var1.NONE;
            case 47:
                return var0;
        }
    };
    var _closure1_slot44 = var5;
    var4 = function arg0() {
        _fun55689: for (var _fun55689_ip = 0;;) switch (_fun55689_ip) {
            case 0:
                var1 = arg0;
                var _closure2_slot0 = var1;
                var3 = _closure1_slot28;
                var2 = var3.find;
                var0 = function(arg0) { // Environment: var0
                    var1 = _closure2_slot0;
                    var2 = _closure1_slot9;
                    var0 = arg0;
                    var0 = var2[var0];
                    var0 = var1 < var0;
                    return var0;
                };
                var0 = var2.bind(var3)(var0);
                var2 = null;
                if (!(var2 == var0)) {
                    _fun55689_ip = 47;
                    continue _fun55689
                }
            case 37:
                var1 = _closure1_slot10;
                var0 = var1.TIER_3;
            case 47:
                return var0;
        }
    };
    var _closure1_slot45 = var4;
    var3 = global;
    var15 = var3.Object;
    var14 = var15.defineProperty;
    var13 = {};
    var0 = true;
    var13.value = var0;
    var0 = '__esModule';
    var0 = var14.bind(var15)(var2, var0, var13);
    var26 = 0;
    var13 = var23[var26];
    var0 = undefined;
    var13 = var8.bind(var0)(var13);
    var _closure1_slot4 = var13;
    var24 = 1;
    var13 = var23[var24];
    var13 = var8.bind(var0)(var13);
    var _closure1_slot5 = var13;
    var25 = 2;
    var13 = var23[var25];
    var13 = var8.bind(var0)(var13);
    var _closure1_slot6 = var13;
    var19 = 3;
    var13 = var23[var19];
    var13 = var8.bind(var0)(var13);
    var _closure1_slot7 = var13;
    var18 = 4;
    var13 = var23[var18];
    var13 = var22.bind(var0)(var13);
    var14 = var13.AnalyticsObjectTypes;
    var _closure1_slot8 = var14;
    var27 = var13.AppliedGuildBoostsRequiredForBoostedGuildTier;
    var _closure1_slot9 = var27;
    var21 = var13.BoostedGuildTiers;
    var _closure1_slot10 = var21;
    var14 = var13.GuildFeatures;
    var _closure1_slot11 = var14;
    var14 = var13.HelpdeskArticles;
    var _closure1_slot12 = var14;
    var14 = var13.MAX_STAGE_VIDEO_USER_LIMIT_TIER2;
    var _closure1_slot13 = var14;
    var14 = var13.MAX_STAGE_VIDEO_USER_LIMIT_TIER3;
    var _closure1_slot14 = var14;
    var13 = var13.SubscriptionStatusTypes;
    var _closure1_slot15 = var13;
    var17 = 5;
    var13 = var23[var17];
    var13 = var22.bind(var0)(var13);
    var14 = var13.DEFAULT_EMOJI_SLOTS;
    var _closure1_slot16 = var14;
    var13 = var13.EMOJI_MAX_SLOTS_MORE;
    var _closure1_slot17 = var13;
    var16 = 6;
    var13 = var23[var16];
    var13 = var22.bind(var0)(var13);
    var14 = var13.BoostedGuildFeatures;
    var _closure1_slot18 = var14;
    var14 = var13.DEFAULT_SOUND_SLOTS;
    var _closure1_slot19 = var14;
    var14 = var13.MORE_SOUNDBOARD_SOUNDS;
    var _closure1_slot20 = var14;
    var14 = var13.FractionalPremiumStates;
    var _closure1_slot21 = var14;
    var14 = var13.IncrementalStickerCountsByTier;
    var _closure1_slot22 = var14;
    var14 = var13.TotalSoundboardSoundCountsByTier;
    var _closure1_slot23 = var14;
    var13 = var13.TotalStickerCountsByTier;
    var _closure1_slot24 = var13;
    var15 = 7;
    var13 = var23[var15];
    var13 = var22.bind(var0)(var13);
    var13 = var13.getPremiumGroupProductName;
    var _closure1_slot25 = var13;
    var29 = {};
    var29.LEVEL_1 = var24;
    var13 = 'LEVEL_1';
    var29[var24] = var13;
    var29.LEVEL_2 = var25;
    var13 = 'LEVEL_2';
    var29[var25] = var13;
    var29.LEVEL_3 = var19;
    var13 = 'LEVEL_3';
    var29[var19] = var13;
    var29.LEVEL_4 = var18;
    var13 = 'LEVEL_4';
    var29[var18] = var13;
    var29.LEVEL_5 = var17;
    var13 = 'LEVEL_5';
    var29[var17] = var13;
    var29.LEVEL_6 = var16;
    var13 = 'LEVEL_6';
    var29[var16] = var13;
    var29.LEVEL_7 = var15;
    var13 = 'LEVEL_7';
    var29[var15] = var13;
    var14 = 8;
    var29.LEVEL_8 = var14;
    var13 = 'LEVEL_8';
    var29[var14] = var13;
    var30 = 9;
    var29.LEVEL_9 = var30;
    var13 = 'LEVEL_9';
    var29[var30] = var13;
    var28 = var3.Object;
    var20 = var28.freeze;
    var3 = {};
    var13 = var29.LEVEL_1;
    var3[var13] = var24;
    var13 = var29.LEVEL_2;
    var3[var13] = var25;
    var13 = var29.LEVEL_3;
    var3[var13] = var19;
    var13 = var29.LEVEL_4;
    var3[var13] = var16;
    var13 = var29.LEVEL_5;
    var3[var13] = var30;
    var30 = var29.LEVEL_6;
    var13 = 12;
    var3[var30] = var13;
    var31 = var29.LEVEL_7;
    var30 = 15;
    var3[var31] = var30;
    var31 = var29.LEVEL_8;
    var30 = 18;
    var3[var31] = var30;
    var30 = var29.LEVEL_9;
    var29 = 24;
    var3[var30] = var29;
    var3 = var20.bind(var28)(var3);
    var _closure1_slot26 = var3;
    var20 = {};
    var20.EMOJI = var24;
    var3 = 'EMOJI';
    var20[var24] = var3;
    var20.AUDIO = var25;
    var3 = 'AUDIO';
    var20[var25] = var3;
    var20.ANIMATED = var19;
    var3 = 'ANIMATED';
    var20[var19] = var3;
    var20.CUSTOMIZATION = var18;
    var3 = 'CUSTOMIZATION';
    var20[var18] = var3;
    var20.UPLOAD = var17;
    var3 = 'UPLOAD';
    var20[var17] = var3;
    var20.VANITY = var16;
    var3 = 'VANITY';
    var20[var16] = var3;
    var20.STREAM = var15;
    var3 = 'STREAM';
    var20[var15] = var3;
    var20.STICKER = var14;
    var3 = 'STICKER';
    var20[var14] = var3;
    var14 = 11;
    var20.CUSTOM_ROLE_ICON = var14;
    var3 = 'CUSTOM_ROLE_ICON';
    var20[var14] = var3;
    var20.STAGE_VIDEO = var13;
    var3 = 'STAGE_VIDEO';
    var20[var13] = var3;
    var3 = 13;
    var20.SOUNDBOARD = var3;
    var13 = 'SOUNDBOARD';
    var20[var3] = var13;
    var _closure1_slot27 = var20;
    var13 = var21.NONE;
    var19 = new Array(4);
    var19[0] = var13;
    var13 = var21.TIER_1;
    var19[1] = var13;
    var13 = var21.TIER_2;
    var19[2] = var13;
    var13 = var21.TIER_3;
    var19[3] = var13;
    var _closure1_slot28 = var19;
    var13 = var19.slice;
    var14 = var13.bind(var19)();
    var13 = var14.reverse;
    var18 = var13.bind(var14)();
    var _closure1_slot29 = var18;
    var17 = function arg0, arg1() {
        _fun55691: for (var _fun55691_ip = 0;;) switch (_fun55691_ip) {
            case 0:
                var2 = arg0;
                var0 = arg1;
                var1 = null;
                if (!(var1 != var0)) {
                    _fun55691_ip = 58;
                    continue _fun55691
                }
            case 12:
                var4 = var0.features;
                var3 = var4.has;
                var0 = _closure1_slot11;
                var0 = var0.MORE_STICKERS;
                var0 = var3.bind(var4)(var0);
                if (!var0) {
                    _fun55691_ip = 58;
                    continue _fun55691
                }
            case 44:
                var0 = _closure1_slot10;
                var0 = var0.TIER_3;
                if (!(var2 !== var0)) {
                    _fun55691_ip = 71;
                    continue _fun55691
                }
            case 58:
                var0 = _closure1_slot24;
                var0 = var0[var2];
                _fun55691_ip = 105;
                continue _fun55691;
            case 71:
                var3 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 8;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.PremiumGuildOverrides;
                var0 = var1.MAX_STICKER_SLOTS;
            case 105:
                return var0;
        }
    };
    var _closure1_slot30 = var17;
    var16 = function arg0() {
        var1 = _closure1_slot22;
        var0 = arg0;
        var0 = var1[var0];
        return var0;
    };
    var _closure1_slot31 = var16;
    var15 = function arg0, arg1() {
        _fun55693: for (var _fun55693_ip = 0;;) switch (_fun55693_ip) {
            case 0:
                var0 = arg1;
                var1 = null;
                if (!(var1 != var0)) {
                    _fun55693_ip = 41;
                    continue _fun55693
                }
            case 9:
                var3 = var0.features;
                var2 = var3.has;
                var0 = _closure1_slot11;
                var0 = var0.MORE_SOUNDBOARD;
                var0 = var2.bind(var3)(var0);
                if (var0) {
                    _fun55693_ip = 57;
                    continue _fun55693
                }
            case 41:
                var2 = _closure1_slot23;
                var0 = arg0;
                var0 = var2[var0];
                _fun55693_ip = 61;
                continue _fun55693;
            case 57:
                var0 = _closure1_slot20;
            case 61:
                return var0;
        }
    };
    var _closure1_slot32 = var15;
    var14 = function arg0() {
        _fun55694: for (var _fun55694_ip = 0;;) switch (_fun55694_ip) {
            case 0:
                var1 = arg0;
                var2 = _closure1_slot10;
                var2 = var2.NONE;
                if (!(var1 !== var2)) {
                    _fun55694_ip = 64;
                    continue _fun55694
                }
            case 20:
                var3 = _closure1_slot28;
                var2 = var3.indexOf;
                var4 = var2.bind(var3)(var1);
                var2 = 1;
                var2 = var4 - var2;
                var4 = var3[var2];
                var2 = _closure1_slot23;
                var3 = var2[var1];
                var2 = var2[var4];
                var2 = var3 - var2;
                return var2;
            case 64:
                var0 = _closure1_slot23;
                var0 = var0[var1];
                return var0;
        }
    };
    var _closure1_slot33 = var14;
    var3 = var23[var3];
    var13 = var8.bind(var0)(var3);
    var8 = var13.memoize;
    var3 = function(arg0) { // Environment: var1
        _fun55695: for (var _fun55695_ip = 0;;) switch (_fun55695_ip) {
            case 0:
                var3 = arg0;
                var2 = _closure1_slot18;
                var0 = _closure1_slot10;
                var0 = var0.TIER_1;
                var0 = var2[var0];
                var2 = var0.features;
                var0 = var2.includes;
                var0 = var0.bind(var2)(var3);
                if (var0) {
                    _fun55695_ip = 143;
                    continue _fun55695
                }
            case 43:
                var2 = _closure1_slot18;
                var0 = _closure1_slot10;
                var0 = var0.TIER_2;
                var0 = var2[var0];
                var2 = var0.features;
                var0 = var2.includes;
                var0 = var0.bind(var2)(var3);
                if (var0) {
                    _fun55695_ip = 131;
                    continue _fun55695
                }
            case 80:
                var2 = _closure1_slot18;
                var0 = _closure1_slot10;
                var0 = var0.TIER_3;
                var0 = var2[var0];
                var2 = var0.features;
                var0 = var2.includes;
                var2 = var0.bind(var2)(var3);
                var0 = null;
                if (!var2) {
                    _fun55695_ip = 129;
                    continue _fun55695
                }
            case 119:
                var2 = _closure1_slot10;
                var0 = var2.TIER_3;
            case 129:
                _fun55695_ip = 141;
                continue _fun55695;
            case 131:
                var2 = _closure1_slot10;
                var0 = var2.TIER_2;
            case 141:
                _fun55695_ip = 153;
                continue _fun55695;
            case 143:
                var1 = _closure1_slot10;
                var0 = var1.TIER_1;
            case 153:
                return var0;
        }
    };
    var13 = var8.bind(var13)(var3);
    var3 = {};
    var8 = var21.TIER_3;
    var3.tier = var8;
    var8 = var21.TIER_3;
    var8 = var27[var8];
    var3.amount = var8;
    var8 = null;
    var3.nextTier = var8;
    var8 = new Array(3);
    var8[0] = var3;
    var3 = {};
    var25 = var21.TIER_2;
    var3.tier = var25;
    var25 = var21.TIER_2;
    var25 = var27[var25];
    var3.amount = var25;
    var25 = var21.TIER_3;
    var3.nextTier = var25;
    var8[1] = var3;
    var3 = {};
    var25 = var21.TIER_1;
    var3.tier = var25;
    var25 = var21.TIER_1;
    var25 = var27[var25];
    var3.amount = var25;
    var25 = var21.TIER_2;
    var3.nextTier = var25;
    var8[2] = var3;
    var _closure1_slot34 = var8;
    var3 = {};
    var25 = var21.NONE;
    var3[var25] = var26;
    var26 = var21.TIER_1;
    var25 = 0.3333333333333333;
    var3[var26] = var25;
    var26 = var21.TIER_2;
    var25 = 0.6666666666666666;
    var3[var26] = var25;
    var21 = var21.TIER_3;
    var3[var21] = var24;
    var _closure1_slot35 = var3;
    var21 = 21;
    var21 = var23[var21];
    var23 = var22.bind(var0)(var21);
    var22 = var23.fileFinishedImporting;
    var21 = 'utils/GuildBoostingUtils.tsx';
    var21 = var22.bind(var23)(var21);
    var2.PerkIcons = var20;
    var2.OrderedTiers = var19;
    var2.ReverseOrderedTiers = var18;
    var18 = function(arg0) { // Environment: var1
        _fun55696: for (var _fun55696_ip = 0;;) switch (_fun55696_ip) {
            case 0:
                var3 = arg0;
                var _closure2_slot0 = var3;
                var2 = _closure1_slot10;
                var2 = var2.NONE;
                if (!(var3 !== var2)) {
                    _fun55696_ip = 64;
                    continue _fun55696
                }
            case 26:
                var3 = _closure1_slot34;
                var2 = var3.find;
                var0 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var1 = var0.tier;
                    var0 = _closure2_slot0;
                    var0 = var1 === var0;
                    return var0;
                };
                var2 = var2.bind(var3)(var0);
                var0 = null;
                var3 = var0 == var2;
                var0 = undefined;
                if (var3) {
                    _fun55696_ip = 62;
                    continue _fun55696
                }
            case 56:
                var0 = var2.nextTier;
            case 62:
                _fun55696_ip = 74;
                continue _fun55696;
            case 64:
                var1 = _closure1_slot10;
                var0 = var1.TIER_1;
            case 74:
                return var0;
        }
    };
    var2.getNextTier = var18;
    var2.getTotalStickerCountForTier = var17;
    var2.getIncrementalStickerCountForTier = var16;
    var2.getTotalSoundboardSoundCountForTier = var15;
    var2.getIncrementalSoundboardSoundCountForTier = var14;
    var14 = function(arg0) { // Environment: var1
        _fun55698: for (var _fun55698_ip = 0;;) switch (_fun55698_ip) {
            case 0:
                var5 = arg0;
                var1 = {};
                var0 = _closure1_slot10;
                var0 = var0.TIER_1;
                var1.tier = var0;
                var12 = _closure1_slot0;
                var8 = _closure1_slot3;
                var13 = 9;
                var0 = var8[var13];
                var6 = undefined;
                var0 = var12.bind(var6)(var0);
                var4 = var0.intl;
                var3 = var4.string;
                var0 = var8[var13];
                var0 = var12.bind(var6)(var0);
                var0 = var0.t;
                var0 = var0["lK+WOT"];
                var0 = var3.bind(var4)(var0);
                var1.title = var0;
                var0 = {};
                var3 = var8[var13];
                var3 = var12.bind(var6)(var3);
                var9 = var3.intl;
                var7 = var9.formatToPlainString;
                var3 = var8[var13];
                var3 = var12.bind(var6)(var3);
                var3 = var3.t;
                var4 = var3.dnLAwl;
                var3 = {};
                var18 = _closure1_slot18;
                var10 = _closure1_slot10;
                var10 = var10.TIER_1;
                var10 = var18[var10];
                var10 = var10.limits;
                var11 = var10.emoji;
                var10 = _closure1_slot10;
                var10 = var10.NONE;
                var10 = var18[var10];
                var10 = var10.limits;
                var10 = var10.emoji;
                var10 = var11 - var10;
                var3.adding = var10;
                var10 = _closure1_slot10;
                var10 = var10.TIER_1;
                var10 = var18[var10];
                var10 = var10.limits;
                var10 = var10.emoji;
                var3.total = var10;
                var3 = var7.bind(var9)(var4, var3);
                var0.title = var3;
                var3 = var8[var13];
                var3 = var12.bind(var6)(var3);
                var7 = var3.intl;
                var4 = var7.string;
                var3 = var8[var13];
                var3 = var12.bind(var6)(var3);
                var3 = var3.t;
                var3 = var3["/Guvxs"];
                var3 = var4.bind(var7)(var3);
                var0.description = var3;
                var4 = _closure1_slot27;
                var3 = var4.EMOJI;
                var0.icon = var3;
                var9 = new Array(7);
                var9[0] = var0;
                var0 = {};
                var3 = var8[var13];
                var3 = var12.bind(var6)(var3);
                var11 = var3.intl;
                var10 = var11.formatToPlainString;
                var3 = var8[var13];
                var3 = var12.bind(var6)(var3);
                var3 = var3.t;
                var7 = var3["/9p2/g"];
                var3 = {};
                var22 = _closure1_slot31;
                var14 = _closure1_slot10;
                var14 = var14.TIER_1;
                var14 = var22.bind(var6)(var14);
                var3.adding = var14;
                var21 = _closure1_slot30;
                var14 = _closure1_slot10;
                var14 = var14.TIER_1;
                var14 = var21.bind(var6)(var14);
                var3.total = var14;
                var3 = var10.bind(var11)(var7, var3);
                var0.title = var3;
                var3 = var8[var13];
                var3 = var12.bind(var6)(var3);
                var10 = var3.intl;
                var7 = var10.string;
                var3 = var8[var13];
                var3 = var12.bind(var6)(var3);
                var3 = var3.t;
                var3 = var3.JfsnDQ;
                var3 = var7.bind(var10)(var3);
                var0.description = var3;
                var3 = var4.STICKER;
                var0.icon = var3;
                var9[1] = var0;
                var0 = {};
                var3 = var8[var13];
                var3 = var12.bind(var6)(var3);
                var11 = var3.intl;
                var10 = var11.formatToPlainString;
                var3 = var8[var13];
                var3 = var12.bind(var6)(var3);
                var3 = var3.t;
                var7 = var3.NRuk5m;
                var3 = {};
                var19 = _closure1_slot33;
                var14 = _closure1_slot10;
                var14 = var14.TIER_1;
                var14 = var19.bind(var6)(var14);
                var3.soundCount = var14;
                var17 = _closure1_slot32;
                var14 = _closure1_slot10;
                var14 = var14.TIER_1;
                var14 = var17.bind(var6)(var14);
                var3.totalSoundCount = var14;
                var3 = var10.bind(var11)(var7, var3);
                var0.title = var3;
                var3 = var8[var13];
                var3 = var12.bind(var6)(var3);
                var10 = var3.intl;
                var7 = var10.string;
                var3 = var8[var13];
                var3 = var12.bind(var6)(var3);
                var3 = var3.t;
                var3 = var3.Oq7OVl;
                var3 = var7.bind(var10)(var3);
                var0.description = var3;
                var3 = var4.SOUNDBOARD;
                var0.icon = var3;
                var9[2] = var0;
                var0 = {};
                var3 = var8[var13];
                var3 = var12.bind(var6)(var3);
                var11 = var3.intl;
                var10 = var11.formatToPlainString;
                var3 = var8[var13];
                var3 = var12.bind(var6)(var3);
                var3 = var3.t;
                var7 = var3.zoT1ZE;
                var3 = {};
                var14 = _closure1_slot10;
                var14 = var14.TIER_1;
                var14 = var18[var14];
                var14 = var14.limits;
                var14 = var14.bitrate;
                var20 = 1000;
                var14 = var14 / var20;
                var3.bitrate = var14;
                var3 = var10.bind(var11)(var7, var3);
                var0.title = var3;
                var3 = var8[var13];
                var3 = var12.bind(var6)(var3);
                var10 = var3.intl;
                var7 = var10.string;
                var3 = var8[var13];
                var3 = var12.bind(var6)(var3);
                var3 = var3.t;
                var3 = var3["8a03jk"];
                var3 = var7.bind(var10)(var3);
                var0.description = var3;
                var3 = var4.AUDIO;
                var0.icon = var3;
                var9[3] = var0;
                var0 = {};
                var3 = var8[var13];
                var3 = var12.bind(var6)(var3);
                var10 = var3.intl;
                var7 = var10.string;
                var3 = var8[var13];
                var3 = var12.bind(var6)(var3);
                var3 = var3.t;
                var3 = var3.h0s84V;
                var3 = var7.bind(var10)(var3);
                var0.title = var3;
                var3 = var8[var13];
                var3 = var12.bind(var6)(var3);
                var11 = var3.intl;
                var10 = var11.format;
                var3 = var8[var13];
                var3 = var12.bind(var6)(var3);
                var3 = var3.t;
                var7 = var3["t+0cbk"];
                var3 = {};
                var3 = var10.bind(var11)(var7, var3);
                var0.description = var3;
                var3 = var4.ANIMATED;
                var0.icon = var3;
                var9[4] = var0;
                var0 = {};
                var3 = var8[var13];
                var3 = var12.bind(var6)(var3);
                var10 = var3.intl;
                var7 = var10.string;
                var3 = var8[var13];
                var3 = var12.bind(var6)(var3);
                var3 = var3.t;
                var3 = var3.vjPGPp;
                var3 = var7.bind(var10)(var3);
                var0.title = var3;
                var3 = var8[var13];
                var3 = var12.bind(var6)(var3);
                var10 = var3.intl;
                var7 = var10.string;
                var3 = var8[var13];
                var3 = var12.bind(var6)(var3);
                var3 = var3.t;
                var3 = var3.tG4MMU;
                var3 = var7.bind(var10)(var3);
                var0.description = var3;
                var3 = var4.CUSTOMIZATION;
                var0.icon = var3;
                var9[5] = var0;
                var0 = {};
                var3 = var8[var13];
                var3 = var12.bind(var6)(var3);
                var10 = var3.intl;
                var7 = var10.string;
                var3 = var8[var13];
                var3 = var12.bind(var6)(var3);
                var3 = var3.t;
                var3 = var3.cObMZD;
                var3 = var7.bind(var10)(var3);
                var0.title = var3;
                var3 = var8[var13];
                var3 = var12.bind(var6)(var3);
                var10 = var3.intl;
                var7 = var10.string;
                var3 = var8[var13];
                var3 = var12.bind(var6)(var3);
                var3 = var3.t;
                var3 = var3["puH/9R"];
                var3 = var7.bind(var10)(var3);
                var0.description = var3;
                var3 = var4.STREAM;
                var0.icon = var3;
                var9[6] = var0;
                var3 = var9.filter;
                var7 = 10;
                var0 = var8[var7];
                var0 = var12.bind(var6)(var0);
                var0 = var0.isNotNullish;
                var0 = var3.bind(var9)(var0);
                var1.perks = var0;
                var0 = new Array(3);
                var0[0] = var1;
                var1 = {};
                var3 = _closure1_slot10;
                var3 = var3.TIER_2;
                var1.tier = var3;
                var3 = var8[var13];
                var3 = var12.bind(var6)(var3);
                var10 = var3.intl;
                var9 = var10.string;
                var3 = var8[var13];
                var3 = var12.bind(var6)(var3);
                var3 = var3.t;
                var3 = var3["34GpBc"];
                var3 = var9.bind(var10)(var3);
                var1.title = var3;
                var3 = {};
                var9 = var8[var13];
                var9 = var12.bind(var6)(var9);
                var14 = var9.intl;
                var11 = var14.formatToPlainString;
                var9 = var8[var13];
                var9 = var12.bind(var6)(var9);
                var9 = var9.t;
                var10 = var9.dnLAwl;
                var9 = {};
                var15 = _closure1_slot10;
                var15 = var15.TIER_2;
                var15 = var18[var15];
                var15 = var15.limits;
                var16 = var15.emoji;
                var15 = _closure1_slot10;
                var15 = var15.TIER_1;
                var15 = var18[var15];
                var15 = var15.limits;
                var15 = var15.emoji;
                var15 = var16 - var15;
                var9.adding = var15;
                var15 = _closure1_slot10;
                var15 = var15.TIER_2;
                var15 = var18[var15];
                var15 = var15.limits;
                var15 = var15.emoji;
                var9.total = var15;
                var9 = var11.bind(var14)(var10, var9);
                var3.title = var9;
                var9 = var8[var13];
                var9 = var12.bind(var6)(var9);
                var11 = var9.intl;
                var10 = var11.string;
                var9 = var8[var13];
                var9 = var12.bind(var6)(var9);
                var9 = var9.t;
                var9 = var9.fRiNhw;
                var9 = var10.bind(var11)(var9);
                var3.description = var9;
                var9 = var4.EMOJI;
                var3.icon = var9;
                var9 = new Array(9);
                var9[0] = var3;
                var3 = {};
                var10 = var8[var13];
                var10 = var12.bind(var6)(var10);
                var15 = var10.intl;
                var14 = var15.formatToPlainString;
                var10 = var8[var13];
                var10 = var12.bind(var6)(var10);
                var10 = var10.t;
                var11 = var10["/9p2/g"];
                var10 = {};
                var16 = _closure1_slot10;
                var16 = var16.TIER_2;
                var16 = var22.bind(var6)(var16);
                var10.adding = var16;
                var16 = _closure1_slot10;
                var16 = var16.TIER_2;
                var16 = var21.bind(var6)(var16);
                var10.total = var16;
                var10 = var14.bind(var15)(var11, var10);
                var3.title = var10;
                var10 = var8[var13];
                var10 = var12.bind(var6)(var10);
                var14 = var10.intl;
                var11 = var14.string;
                var10 = var8[var13];
                var10 = var12.bind(var6)(var10);
                var10 = var10.t;
                var10 = var10.t4TM28;
                var10 = var11.bind(var14)(var10);
                var3.description = var10;
                var10 = var4.STICKER;
                var3.icon = var10;
                var9[1] = var3;
                var3 = {};
                var10 = var8[var13];
                var10 = var12.bind(var6)(var10);
                var15 = var10.intl;
                var14 = var15.formatToPlainString;
                var10 = var8[var13];
                var10 = var12.bind(var6)(var10);
                var10 = var10.t;
                var11 = var10.NRuk5m;
                var10 = {};
                var16 = _closure1_slot10;
                var16 = var16.TIER_2;
                var16 = var19.bind(var6)(var16);
                var10.soundCount = var16;
                var16 = _closure1_slot10;
                var16 = var16.TIER_2;
                var16 = var17.bind(var6)(var16);
                var10.totalSoundCount = var16;
                var10 = var14.bind(var15)(var11, var10);
                var3.title = var10;
                var10 = var8[var13];
                var10 = var12.bind(var6)(var10);
                var14 = var10.intl;
                var11 = var14.string;
                var10 = var8[var13];
                var10 = var12.bind(var6)(var10);
                var10 = var10.t;
                var10 = var10.pEYlPZ;
                var10 = var11.bind(var14)(var10);
                var3.description = var10;
                var10 = var4.SOUNDBOARD;
                var3.icon = var10;
                var9[2] = var3;
                var3 = {};
                var10 = var8[var13];
                var10 = var12.bind(var6)(var10);
                var15 = var10.intl;
                var14 = var15.formatToPlainString;
                var10 = var8[var13];
                var10 = var12.bind(var6)(var10);
                var10 = var10.t;
                var11 = var10.zoT1ZE;
                var10 = {};
                var16 = _closure1_slot10;
                var16 = var16.TIER_2;
                var16 = var18[var16];
                var16 = var16.limits;
                var16 = var16.bitrate;
                var16 = var16 / var20;
                var10.bitrate = var16;
                var10 = var14.bind(var15)(var11, var10);
                var3.title = var10;
                var10 = var8[var13];
                var10 = var12.bind(var6)(var10);
                var14 = var10.intl;
                var11 = var14.string;
                var10 = var8[var13];
                var10 = var12.bind(var6)(var10);
                var10 = var10.t;
                var10 = var10["nzRo/I"];
                var10 = var11.bind(var14)(var10);
                var3.description = var10;
                var10 = var4.AUDIO;
                var3.icon = var10;
                var9[3] = var3;
                var3 = {};
                var10 = var8[var13];
                var10 = var12.bind(var6)(var10);
                var14 = var10.intl;
                var11 = var14.string;
                var10 = var8[var13];
                var10 = var12.bind(var6)(var10);
                var10 = var10.t;
                var10 = var10["+KhQKM"];
                var10 = var11.bind(var14)(var10);
                var3.title = var10;
                var10 = var8[var13];
                var10 = var12.bind(var6)(var10);
                var14 = var10.intl;
                var11 = var14.string;
                var10 = var8[var13];
                var10 = var12.bind(var6)(var10);
                var10 = var10.t;
                var10 = var10.ZWf10P;
                var10 = var11.bind(var14)(var10);
                var3.description = var10;
                var10 = var4.CUSTOMIZATION;
                var3.icon = var10;
                var9[4] = var3;
                var3 = {};
                var10 = var8[var13];
                var10 = var12.bind(var6)(var10);
                var15 = var10.intl;
                var14 = var15.formatToPlainString;
                var10 = var8[var13];
                var10 = var12.bind(var6)(var10);
                var10 = var10.t;
                var11 = var10.t95LnM;
                var10 = {};
                var17 = 11;
                var16 = var8[var17];
                var23 = var12.bind(var6)(var16);
                var22 = var23.formatSize;
                var16 = _closure1_slot10;
                var16 = var16.TIER_2;
                var16 = var18[var16];
                var16 = var16.limits;
                var16 = var16.fileSize;
                var18 = 1024;
                var19 = var16 / var18;
                var16 = {};
                var21 = true;
                var16.useKibibytes = var21;
                var16 = var22.bind(var23)(var19, var16);
                var10.fileSize = var16;
                var10 = var14.bind(var15)(var11, var10);
                var3.title = var10;
                var10 = var8[var13];
                var10 = var12.bind(var6)(var10);
                var15 = var10.intl;
                var14 = var15.format;
                var10 = var8[var13];
                var10 = var12.bind(var6)(var10);
                var10 = var10.t;
                var11 = var10.yvht65;
                var10 = {};
                var10 = var14.bind(var15)(var11, var10);
                var3.description = var10;
                var10 = var4.UPLOAD;
                var3.icon = var10;
                var9[5] = var3;
                var3 = {};
                var10 = var8[var13];
                var10 = var12.bind(var6)(var10);
                var14 = var10.intl;
                var11 = var14.string;
                var10 = var8[var13];
                var10 = var12.bind(var6)(var10);
                var10 = var10.t;
                var10 = var10.bmaoNI;
                var10 = var11.bind(var14)(var10);
                var3.title = var10;
                var10 = var8[var13];
                var10 = var12.bind(var6)(var10);
                var14 = var10.intl;
                var11 = var14.string;
                var10 = var8[var13];
                var10 = var12.bind(var6)(var10);
                var10 = var10.t;
                var10 = var10.WZW2Bj;
                var10 = var11.bind(var14)(var10);
                var3.description = var10;
                var10 = var4.STREAM;
                var3.icon = var10;
                var9[6] = var3;
                var3 = {};
                var10 = var8[var13];
                var10 = var12.bind(var6)(var10);
                var14 = var10.intl;
                var11 = var14.string;
                var10 = var8[var13];
                var10 = var12.bind(var6)(var10);
                var10 = var10.t;
                var10 = var10.BHtqcV;
                var10 = var11.bind(var14)(var10);
                var3.title = var10;
                var10 = var8[var13];
                var10 = var12.bind(var6)(var10);
                var11 = var10.intl;
                var10 = var11.string;
                var8 = var8[var13];
                var8 = var12.bind(var6)(var8);
                var8 = var8.t;
                var8 = var8.ukVcEe;
                var8 = var10.bind(var11)(var8);
                var3.description = var8;
                var4 = var4.CUSTOM_ROLE_ICON;
                var3.icon = var4;
                var9[7] = var3;
                var4 = null;
                if (!var5) {
                    _fun55698_ip = 2624;
                    continue _fun55698
                }
            case 2483:
                var8 = {};
                var11 = _closure1_slot0;
                var10 = _closure1_slot3;
                var12 = var10[var13];
                var12 = var11.bind(var6)(var12);
                var19 = var12.intl;
                var16 = var19.formatToPlainString;
                var12 = var10[var13];
                var12 = var11.bind(var6)(var12);
                var12 = var12.t;
                var14 = var12.T8P3TH;
                var12 = {};
                var15 = _closure1_slot13;
                var12.limit = var15;
                var12 = var16.bind(var19)(var14, var12);
                var8.title = var12;
                var12 = var10[var13];
                var12 = var11.bind(var6)(var12);
                var14 = var12.intl;
                var12 = var14.formatToPlainString;
                var10 = var10[var13];
                var10 = var11.bind(var6)(var10);
                var10 = var10.t;
                var11 = var10.T8P3TH;
                var10 = {};
                var10.limit = var15;
                var10 = var12.bind(var14)(var11, var10);
                var8.description = var10;
                var10 = _closure1_slot27;
                var10 = var10.STAGE_VIDEO;
                var8.icon = var10;
                var4 = var8;
            case 2624:
                var9[8] = var4;
                var8 = var9.filter;
                var14 = _closure1_slot0;
                var10 = _closure1_slot3;
                var4 = var10[var7];
                var4 = var14.bind(var6)(var4);
                var4 = var4.isNotNullish;
                var4 = var8.bind(var9)(var4);
                var1.perks = var4;
                var0[1] = var1;
                var1 = {};
                var4 = _closure1_slot10;
                var4 = var4.TIER_3;
                var1.tier = var4;
                var4 = var10[var13];
                var4 = var14.bind(var6)(var4);
                var9 = var4.intl;
                var8 = var9.string;
                var4 = var10[var13];
                var4 = var14.bind(var6)(var4);
                var4 = var4.t;
                var4 = var4.P7LdcQ;
                var4 = var8.bind(var9)(var4);
                var1.title = var4;
                var8 = {};
                var4 = var10[var13];
                var4 = var14.bind(var6)(var4);
                var12 = var4.intl;
                var11 = var12.formatToPlainString;
                var4 = var10[var13];
                var4 = var14.bind(var6)(var4);
                var4 = var4.t;
                var9 = var4.dnLAwl;
                var4 = {};
                var22 = _closure1_slot18;
                var15 = _closure1_slot10;
                var15 = var15.TIER_3;
                var15 = var22[var15];
                var15 = var15.limits;
                var16 = var15.emoji;
                var15 = _closure1_slot10;
                var15 = var15.TIER_2;
                var15 = var22[var15];
                var15 = var15.limits;
                var15 = var15.emoji;
                var15 = var16 - var15;
                var4.adding = var15;
                var15 = _closure1_slot10;
                var15 = var15.TIER_3;
                var15 = var22[var15];
                var15 = var15.limits;
                var15 = var15.emoji;
                var4.total = var15;
                var4 = var11.bind(var12)(var9, var4);
                var8.title = var4;
                var4 = var10[var13];
                var4 = var14.bind(var6)(var4);
                var11 = var4.intl;
                var9 = var11.string;
                var4 = var10[var13];
                var4 = var14.bind(var6)(var4);
                var4 = var4.t;
                var4 = var4.AfJxnV;
                var4 = var9.bind(var11)(var4);
                var8.description = var4;
                var9 = _closure1_slot27;
                var4 = var9.EMOJI;
                var8.icon = var4;
                var4 = new Array(8);
                var4[0] = var8;
                var8 = {};
                var11 = var10[var13];
                var11 = var14.bind(var6)(var11);
                var16 = var11.intl;
                var15 = var16.formatToPlainString;
                var11 = var10[var13];
                var11 = var14.bind(var6)(var11);
                var11 = var11.t;
                var12 = var11["/9p2/g"];
                var11 = {};
                var23 = _closure1_slot31;
                var19 = _closure1_slot10;
                var19 = var19.TIER_3;
                var19 = var23.bind(var6)(var19);
                var11.adding = var19;
                var23 = _closure1_slot30;
                var19 = _closure1_slot10;
                var19 = var19.TIER_3;
                var19 = var23.bind(var6)(var19);
                var11.total = var19;
                var11 = var15.bind(var16)(var12, var11);
                var8.title = var11;
                var11 = var10[var13];
                var11 = var14.bind(var6)(var11);
                var15 = var11.intl;
                var12 = var15.string;
                var11 = var10[var13];
                var11 = var14.bind(var6)(var11);
                var11 = var11.t;
                var11 = var11["+ZI4QZ"];
                var11 = var12.bind(var15)(var11);
                var8.description = var11;
                var11 = var9.STICKER;
                var8.icon = var11;
                var4[1] = var8;
                var8 = {};
                var11 = var10[var13];
                var11 = var14.bind(var6)(var11);
                var16 = var11.intl;
                var15 = var16.formatToPlainString;
                var11 = var10[var13];
                var11 = var14.bind(var6)(var11);
                var11 = var11.t;
                var12 = var11.NRuk5m;
                var11 = {};
                var23 = _closure1_slot33;
                var19 = _closure1_slot10;
                var19 = var19.TIER_3;
                var19 = var23.bind(var6)(var19);
                var11.soundCount = var19;
                var23 = _closure1_slot32;
                var19 = _closure1_slot10;
                var19 = var19.TIER_3;
                var19 = var23.bind(var6)(var19);
                var11.totalSoundCount = var19;
                var11 = var15.bind(var16)(var12, var11);
                var8.title = var11;
                var11 = var10[var13];
                var11 = var14.bind(var6)(var11);
                var15 = var11.intl;
                var12 = var15.string;
                var11 = var10[var13];
                var11 = var14.bind(var6)(var11);
                var11 = var11.t;
                var11 = var11["8omJSY"];
                var11 = var12.bind(var15)(var11);
                var8.description = var11;
                var11 = var9.SOUNDBOARD;
                var8.icon = var11;
                var4[2] = var8;
                var8 = {};
                var11 = var10[var13];
                var11 = var14.bind(var6)(var11);
                var16 = var11.intl;
                var15 = var16.formatToPlainString;
                var11 = var10[var13];
                var11 = var14.bind(var6)(var11);
                var11 = var11.t;
                var12 = var11.zoT1ZE;
                var11 = {};
                var19 = _closure1_slot10;
                var19 = var19.TIER_3;
                var19 = var22[var19];
                var19 = var19.limits;
                var19 = var19.bitrate;
                var19 = var19 / var20;
                var11.bitrate = var19;
                var11 = var15.bind(var16)(var12, var11);
                var8.title = var11;
                var11 = var10[var13];
                var11 = var14.bind(var6)(var11);
                var15 = var11.intl;
                var12 = var15.string;
                var11 = var10[var13];
                var11 = var14.bind(var6)(var11);
                var11 = var11.t;
                var11 = var11["cOkbp/"];
                var11 = var12.bind(var15)(var11);
                var8.description = var11;
                var11 = var9.AUDIO;
                var8.icon = var11;
                var4[3] = var8;
                var8 = {};
                var11 = var10[var13];
                var11 = var14.bind(var6)(var11);
                var15 = var11.intl;
                var12 = var15.string;
                var11 = var10[var13];
                var11 = var14.bind(var6)(var11);
                var11 = var11.t;
                var11 = var11.C2w2cM;
                var11 = var12.bind(var15)(var11);
                var8.title = var11;
                var11 = var10[var13];
                var11 = var14.bind(var6)(var11);
                var16 = var11.intl;
                var15 = var16.format;
                var11 = var10[var13];
                var11 = var14.bind(var6)(var11);
                var11 = var11.t;
                var12 = var11["3Reosx"];
                var11 = {};
                var20 = _closure1_slot1;
                var19 = 12;
                var19 = var10[var19];
                var23 = var20.bind(var6)(var19);
                var20 = var23.getArticleURL;
                var19 = _closure1_slot12;
                var19 = var19.GUILD_VANITY_URL;
                var19 = var20.bind(var23)(var19);
                var11.helpdeskArticle = var19;
                var11 = var15.bind(var16)(var12, var11);
                var8.description = var11;
                var11 = var9.VANITY;
                var8.icon = var11;
                var4[4] = var8;
                var8 = {};
                var11 = var10[var13];
                var11 = var14.bind(var6)(var11);
                var16 = var11.intl;
                var15 = var16.formatToPlainString;
                var11 = var10[var13];
                var11 = var14.bind(var6)(var11);
                var11 = var11.t;
                var12 = var11.t95LnM;
                var11 = {};
                var17 = var10[var17];
                var20 = var14.bind(var6)(var17);
                var19 = var20.formatSize;
                var17 = _closure1_slot10;
                var17 = var17.TIER_3;
                var17 = var22[var17];
                var17 = var17.limits;
                var17 = var17.fileSize;
                var18 = var17 / var18;
                var17 = {};
                var17.useKibibytes = var21;
                var17 = var19.bind(var20)(var18, var17);
                var11.fileSize = var17;
                var11 = var15.bind(var16)(var12, var11);
                var8.title = var11;
                var11 = var10[var13];
                var11 = var14.bind(var6)(var11);
                var16 = var11.intl;
                var15 = var16.format;
                var11 = var10[var13];
                var11 = var14.bind(var6)(var11);
                var11 = var11.t;
                var12 = var11.IwDqSL;
                var11 = {};
                var11 = var15.bind(var16)(var12, var11);
                var8.description = var11;
                var11 = var9.UPLOAD;
                var8.icon = var11;
                var4[5] = var8;
                var8 = {};
                var11 = var10[var13];
                var11 = var14.bind(var6)(var11);
                var15 = var11.intl;
                var12 = var15.string;
                var11 = var10[var13];
                var11 = var14.bind(var6)(var11);
                var11 = var11.t;
                var11 = var11.z0GtBG;
                var11 = var12.bind(var15)(var11);
                var8.title = var11;
                var11 = var10[var13];
                var11 = var14.bind(var6)(var11);
                var12 = var11.intl;
                var11 = var12.string;
                var10 = var10[var13];
                var10 = var14.bind(var6)(var10);
                var10 = var10.t;
                var10 = var10.v92GNV;
                var10 = var11.bind(var12)(var10);
                var8.description = var10;
                var9 = var9.ANIMATED;
                var8.icon = var9;
                var4[6] = var8;
                var3 = null;
                if (!var5) {
                    _fun55698_ip = 4049;
                    continue _fun55698
                }
            case 3908:
                var5 = {};
                var9 = _closure1_slot0;
                var8 = _closure1_slot3;
                var10 = var8[var13];
                var10 = var9.bind(var6)(var10);
                var15 = var10.intl;
                var14 = var15.formatToPlainString;
                var10 = var8[var13];
                var10 = var9.bind(var6)(var10);
                var10 = var10.t;
                var11 = var10.T8P3TH;
                var10 = {};
                var12 = _closure1_slot14;
                var10.limit = var12;
                var10 = var14.bind(var15)(var11, var10);
                var5.title = var10;
                var10 = var8[var13];
                var10 = var9.bind(var6)(var10);
                var11 = var10.intl;
                var10 = var11.formatToPlainString;
                var8 = var8[var13];
                var8 = var9.bind(var6)(var8);
                var8 = var8.t;
                var9 = var8.T8P3TH;
                var8 = {};
                var8.limit = var12;
                var8 = var10.bind(var11)(var9, var8);
                var5.description = var8;
                var8 = _closure1_slot27;
                var8 = var8.STAGE_VIDEO;
                var5.icon = var8;
                var3 = var5;
            case 4049:
                var4[7] = var3;
                var3 = var4.filter;
                var5 = _closure1_slot0;
                var2 = _closure1_slot3;
                var2 = var2[var7];
                var2 = var5.bind(var6)(var2);
                var2 = var2.isNotNullish;
                var2 = var3.bind(var4)(var2);
                var1.perks = var2;
                var0[2] = var1;
                return var0;
        }
    };
    var2.getTiers = var14;
    var14 = function arg0() {
        _fun55699: for (var _fun55699_ip = 0;;) switch (_fun55699_ip) {
            case 0:
                var3 = arg0;
                var0 = arguments[1];
                var5 = undefined;
                if (!(var0 === var5)) {
                    _fun55699_ip = 14;
                    continue _fun55699
                }
            case 12:
                var0 = {};
            case 14:
                var1 = var0.useLevels;
                var0 = var5 === var1;
                if (var0) {
                    _fun55699_ip = 30;
                    continue _fun55699
                }
            case 27:
                var0 = var1;
            case 30:
                var2 = _closure1_slot10;
                var2 = var2.NONE;
                if (!(var2 !== var3)) {
                    _fun55699_ip = 302;
                    continue _fun55699
                }
            case 50:
                var2 = _closure1_slot10;
                var2 = var2.TIER_1;
                if (!(var2 !== var3)) {
                    _fun55699_ip = 245;
                    continue _fun55699
                }
            case 67:
                var2 = _closure1_slot10;
                var2 = var2.TIER_2;
                if (!(var2 !== var3)) {
                    _fun55699_ip = 188;
                    continue _fun55699
                }
            case 81:
                var2 = _closure1_slot10;
                var2 = var2.TIER_3;
                if (!(var2 !== var3)) {
                    _fun55699_ip = 131;
                    continue _fun55699
                }
            case 95:
                var2 = global;
                var4 = var2.Error;
                var2 = var4.prototype;
                var3 = Object.create(var2, {
                    constructor: {
                        value: var4
                    }
                });
                var8 = 'Not a valid tier type';
                var9 = var3;
                var2 = new var9[var4](var8, var7);
                var2 = var2 instanceof Object ? var2 : var3;
                throw var2;
            case 131:
                var6 = _closure1_slot0;
                var7 = _closure1_slot3;
                var2 = 9;
                var3 = var7[var2];
                var3 = var6.bind(var5)(var3);
                var4 = var3.intl;
                var3 = var4.string;
                var2 = var7[var2];
                var2 = var6.bind(var5)(var2);
                var2 = var2.t;
                var2 = var2.BfF6ED;
                var2 = var3.bind(var4)(var2);
                return var2;
            case 188:
                var6 = _closure1_slot0;
                var7 = _closure1_slot3;
                var2 = 9;
                var3 = var7[var2];
                var3 = var6.bind(var5)(var3);
                var4 = var3.intl;
                var3 = var4.string;
                var2 = var7[var2];
                var2 = var6.bind(var5)(var2);
                var2 = var2.t;
                var2 = var2["h33/uW"];
                var2 = var3.bind(var4)(var2);
                return var2;
            case 245:
                var6 = _closure1_slot0;
                var7 = _closure1_slot3;
                var2 = 9;
                var3 = var7[var2];
                var3 = var6.bind(var5)(var3);
                var4 = var3.intl;
                var3 = var4.string;
                var2 = var7[var2];
                var2 = var6.bind(var5)(var2);
                var2 = var2.t;
                var2 = var2.nzXtaS;
                var2 = var3.bind(var4)(var2);
                return var2;
            case 302:
                var4 = _closure1_slot0;
                var6 = _closure1_slot3;
                var1 = 9;
                var2 = var6[var1];
                var2 = var4.bind(var5)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var4.bind(var5)(var1);
                var1 = var1.t;
                if (var0) {
                    _fun55699_ip = 364;
                    continue _fun55699
                }
            case 349:
                var0 = var1.mx8j2m;
                var0 = var2.bind(var3)(var0);
                _fun55699_ip = 375;
                continue _fun55699;
            case 364:
                var1 = var1.LcKgJd;
                var0 = var2.bind(var3)(var1);
            case 375:
                return var0;
        }
    };
    var2.getTierName = var14;
    var14 = function arg0() {
        _fun55700: for (var _fun55700_ip = 0;;) switch (_fun55700_ip) {
            case 0:
                var2 = arg0;
                var1 = _closure1_slot10;
                var1 = var1.NONE;
                if (!(var1 !== var2)) {
                    _fun55700_ip = 287;
                    continue _fun55700
                }
            case 23:
                var1 = _closure1_slot10;
                var1 = var1.TIER_1;
                if (!(var1 !== var2)) {
                    _fun55700_ip = 226;
                    continue _fun55700
                }
            case 40:
                var1 = _closure1_slot10;
                var1 = var1.TIER_2;
                if (!(var1 !== var2)) {
                    _fun55700_ip = 165;
                    continue _fun55700
                }
            case 54:
                var1 = _closure1_slot10;
                var1 = var1.TIER_3;
                if (!(var1 !== var2)) {
                    _fun55700_ip = 104;
                    continue _fun55700
                }
            case 68:
                var1 = global;
                var3 = var1.Error;
                var1 = var3.prototype;
                var2 = Object.create(var1, {
                    constructor: {
                        value: var3
                    }
                });
                var7 = 'Not a valid tier type';
                var8 = var2;
                var1 = new var8[var3](var7, var6);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
            case 104:
                var5 = _closure1_slot0;
                var6 = _closure1_slot3;
                var1 = 9;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.avGxmk;
                var1 = var2.bind(var3)(var1);
                return var1;
            case 165:
                var5 = _closure1_slot0;
                var6 = _closure1_slot3;
                var1 = 9;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.C7e2Bo;
                var1 = var2.bind(var3)(var1);
                return var1;
            case 226:
                var5 = _closure1_slot0;
                var6 = _closure1_slot3;
                var1 = 9;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.xRjU1V;
                var1 = var2.bind(var3)(var1);
                return var1;
            case 287:
                var4 = _closure1_slot0;
                var5 = _closure1_slot3;
                var0 = 9;
                var1 = var5[var0];
                var3 = undefined;
                var1 = var4.bind(var3)(var1);
                var2 = var1.intl;
                var1 = var2.string;
                var0 = var5[var0];
                var0 = var4.bind(var3)(var0);
                var0 = var0.t;
                var0 = var0.LcKgJd;
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var2.getShortenedTierName = var14;
    var2.minimumRequiredTierForGuildFeature = var13;
    var13 = function(arg0) { // Environment: var1
        _fun55701: for (var _fun55701_ip = 0;;) switch (_fun55701_ip) {
            case 0:
                var3 = arg0;
                var0 = _closure1_slot10;
                var0 = var0.NONE;
                if (!(var3 !== var0)) {
                    _fun55701_ip = 100;
                    continue _fun55701
                }
            case 20:
                var0 = _closure1_slot10;
                var0 = var0.TIER_1;
                if (!(var3 !== var0)) {
                    _fun55701_ip = 88;
                    continue _fun55701
                }
            case 34:
                var0 = _closure1_slot10;
                var0 = var0.TIER_2;
                if (!(var3 !== var0)) {
                    _fun55701_ip = 76;
                    continue _fun55701
                }
            case 48:
                var0 = _closure1_slot10;
                var2 = var0.TIER_3;
                var0 = null;
                if (!(var3 === var2)) {
                    _fun55701_ip = 74;
                    continue _fun55701
                }
            case 64:
                var2 = _closure1_slot8;
                var0 = var2.TIER_3;
            case 74:
                _fun55701_ip = 86;
                continue _fun55701;
            case 76:
                var2 = _closure1_slot8;
                var0 = var2.TIER_2;
            case 86:
                _fun55701_ip = 98;
                continue _fun55701;
            case 88:
                var2 = _closure1_slot8;
                var0 = var2.TIER_1;
            case 98:
                _fun55701_ip = 110;
                continue _fun55701;
            case 100:
                var1 = _closure1_slot8;
                var0 = var1.NONE;
            case 110:
                return var0;
        }
    };
    var2.boostedGuildTierToAnalyticsObjectType = var13;
    var2.getGuildTierFromGuild = var12;
    var12 = function arg0() {
        _fun55702: for (var _fun55702_ip = 0;;) switch (_fun55702_ip) {
            case 0:
                var2 = _closure1_slot38;
                var6 = undefined;
                var1 = arg0;
                var5 = var2.bind(var6)(var1);
                var2 = _closure1_slot36;
                var1 = _closure1_slot34;
                var4 = var2.bind(var6)(var1);
                var2 = var4.bind(var6)();
                var1 = var2.done;
                var3 = var2;
                if (var1) {
                    _fun55702_ip = 85;
                    continue _fun55702
                }
            case 45:
                var1 = var3.value;
                var2 = var1.tier;
                if (!(var5 !== var2)) {
                    _fun55702_ip = 77;
                    continue _fun55702
                }
            case 60:
                var7 = var4.bind(var6)();
                var2 = var7.done;
                var3 = var7;
                if (var2) {
                    _fun55702_ip = 85;
                    continue _fun55702
                }
            case 75:
                _fun55702_ip = 45;
                continue _fun55702;
            case 77:
                var1 = var1.nextTier;
                return var1;
            case 85:
                var0 = _closure1_slot10;
                var0 = var0.TIER_1;
                return var0;
        }
    };
    var2.getNextGuildTierFromGuild = var12;
    var12 = function arg0() {
        _fun55703: for (var _fun55703_ip = 0;;) switch (_fun55703_ip) {
            case 0:
                var1 = _closure1_slot1;
                var5 = _closure1_slot3;
                var0 = 14;
                var2 = var5[var0];
                var4 = undefined;
                var2 = var1.bind(var4)(var2);
                var3 = var2.bind(var4)();
                var2 = var3.diff;
                var0 = var5[var0];
                var1 = var1.bind(var4)(var0);
                var0 = arg0;
                var1 = var1.bind(var4)(var0);
                var0 = 'months';
                var1 = var2.bind(var3)(var1, var0);
                var0 = null;
                var2 = var0 != var1;
                var0 = 1;
                if (!var2) {
                    _fun55703_ip = 77;
                    continue _fun55703
                }
            case 74:
                var0 = var1;
            case 77:
                return var0;
        }
    };
    var2.getAppliedGuildBoostMonths = var12;
    var12 = function arg0() {
        _fun55704: for (var _fun55704_ip = 0;;) switch (_fun55704_ip) {
            case 0:
                var2 = _closure1_slot1;
                var1 = _closure1_slot3;
                var0 = 14;
                var0 = var1[var0];
                var1 = undefined;
                var0 = var2.bind(var1)(var0);
                var3 = var0.bind(var1)();
                var2 = var3.diff;
                var1 = arg0;
                var0 = 'months';
                var5 = var2.bind(var3)(var1, var0);
                var0 = global;
                var2 = var0.Object;
                var1 = var2.keys;
                var0 = _closure1_slot26;
                var4 = var1.bind(var2)(var0);
                var0 = var4.length;
                var3 = 0;
                var1 = var3 < var0;
                var2 = 1;
                var0 = var2;
                if (!var1) {
                    _fun55704_ip = 124;
                    continue _fun55704
                }
            case 90:
                var1 = var4[var3];
                var7 = _closure1_slot26;
                var7 = var7[var1];
                if (!(!(var5 < var7))) {
                    _fun55704_ip = 109;
                    continue _fun55704
                }
            case 106:
                var2 = var1 - 0;
            case 109:
                var3 = var3 + 1;
                var1 = var4.length;
                var0 = var2;
                if (var3 < var1) {
                    _fun55704_ip = 90;
                    continue _fun55704
                }
            case 124:
                return var0;
        }
    };
    var2.getUserLevel = var12;
    var2.isGuildBoostedAtLeast = var11;
    var11 = function arg0, arg1() {
        var3 = _closure1_slot39;
        var0 = arg0;
        var2 = var0.premiumTier;
        var1 = undefined;
        var0 = arg1;
        var0 = var3.bind(var1)(var2, var0);
        return var0;
    };
    var2.isTierUnlocked = var11;
    var2.getAvailableGuildBoostSlots = var10;
    var10 = function arg0() {
        _fun55706: for (var _fun55706_ip = 0;;) switch (_fun55706_ip) {
            case 0:
                var0 = arg0;
                var8 = var0.fractionalState;
                var1 = _closure1_slot7;
                var0 = var1.getPremiumTypeSubscription;
                var1 = var0.bind(var1)();
                var2 = _closure1_slot5;
                var0 = var2.getCurrentUser;
                var6 = var0.bind(var2)();
                var0 = _closure1_slot6;
                var0 = var0.hasFetched;
                if (var0) {
                    _fun55706_ip = 62;
                    continue _fun55706
                }
            case 52:
                var2 = _closure1_slot6;
                var0 = var2.isFetching;
            case 62:
                if (var0) {
                    _fun55706_ip = 97;
                    continue _fun55706
                }
            case 65:
                var3 = _closure1_slot0;
                var2 = _closure1_slot3;
                var0 = 15;
                var2 = var2[var0];
                var0 = undefined;
                var2 = var3.bind(var0)(var2);
                var0 = var2.fetchGuildBoostSlots;
                var0 = var0.bind(var2)();
            case 97:
                var2 = _closure1_slot40;
                var0 = _closure1_slot6;
                var0 = var0.boostSlots;
                var5 = undefined;
                var2 = var2.bind(var5)(var0);
                var0 = null;
                var3 = var0 == var1;
                var7 = undefined;
                if (var3) {
                    _fun55706_ip = 137;
                    continue _fun55706
                }
            case 129:
                var7 = var1.isPausedOrPausePending;
            case 137:
                var2 = var2.length;
                var3 = 0;
                var2 = var2 > var3;
                if (!var7) {
                    _fun55706_ip = 227;
                    continue _fun55706
                }
            case 151:
                var7 = _closure1_slot21;
                var7 = var7.NONE;
                if (!(var8 === var7)) {
                    _fun55706_ip = 227;
                    continue _fun55706
                }
            case 165:
                if (var2) {
                    _fun55706_ip = 227;
                    continue _fun55706
                }
            case 168:
                var9 = _closure1_slot0;
                var10 = _closure1_slot3;
                var2 = 9;
                var7 = var10[var2];
                var7 = var9.bind(var5)(var7);
                var8 = var7.intl;
                var7 = var8.string;
                var2 = var10[var2];
                var2 = var9.bind(var5)(var2);
                var2 = var2.t;
                var2 = var2.mOWsF1;
                var2 = var7.bind(var8)(var2);
                return var2;
            case 227:
                if (!(var0 != var6)) {
                    _fun55706_ip = 249;
                    continue _fun55706
                }
            case 231:
                var2 = var6.isPremiumGroupMember;
                var2 = var2.bind(var6)();
                if (var2) {
                    _fun55706_ip = 768;
                    continue _fun55706
                }
            case 249:
                var2 = global;
                var7 = var2.Object;
                var6 = var7.values;
                var2 = _closure1_slot6;
                var2 = var2.boostSlots;
                var8 = var6.bind(var7)(var2);
                var7 = var8.reduce;
                var6 = function(arg0, arg1) { // Environment: var2
                    _fun55707: for (var _fun55707_ip = 0;;) switch (_fun55707_ip) {
                        case 0:
                            var0 = arg0;
                            var2 = arg1;
                            var3 = _closure1_slot43;
                            var1 = undefined;
                            var1 = var3.bind(var1)(var2);
                            if (!var1) {
                                _fun55707_ip = 38;
                                continue _fun55707
                            }
                        case 23:
                            var1 = var0.numCanceledGuildBoostSlots;
                            var1 = var1 + 1;
                            var0.numCanceledGuildBoostSlots = var1;
                        case 38:
                            var1 = var2.isAvailable;
                            var1 = var1.bind(var2)();
                            if (!var1) {
                                _fun55707_ip = 66;
                                continue _fun55707
                            }
                        case 51:
                            var1 = var0.numAvailableGuildBoostSlots;
                            var1 = var1 + 1;
                            var0.numAvailableGuildBoostSlots = var1;
                        case 66:
                            return var0;
                    }
                };
                var2 = {
                    'numAvailableGuildBoostSlots': 0,
                    'numCanceledGuildBoostSlots': 0
                };
                var2 = var7.bind(var8)(var6, var2);
                var6 = var2.numAvailableGuildBoostSlots;
                var2 = var2.numCanceledGuildBoostSlots;
                if (!(var0 != var1)) {
                    _fun55706_ip = 766;
                    continue _fun55706
                }
            case 329:
                if (!(!(var6 > var3))) {
                    _fun55706_ip = 766;
                    continue _fun55706
                }
            case 336:
                var7 = var1.status;
                var6 = _closure1_slot15;
                var6 = var6.PAST_DUE;
                if (!(var7 !== var6)) {
                    _fun55706_ip = 707;
                    continue _fun55706
                }
            case 358:
                var7 = var1.status;
                var6 = _closure1_slot15;
                var6 = var6.ACCOUNT_HOLD;
                if (!(var7 !== var6)) {
                    _fun55706_ip = 648;
                    continue _fun55706
                }
            case 380:
                if (!(!(var2 > var3))) {
                    _fun55706_ip = 591;
                    continue _fun55706
                }
            case 387:
                var2 = var1.renewalMutations;
                if (!(var0 != var2)) {
                    _fun55706_ip = 589;
                    continue _fun55706
                }
            case 400:
                var6 = _closure1_slot2;
                var7 = _closure1_slot3;
                var3 = 17;
                var2 = var7[var3];
                var9 = var6.bind(var5)(var2);
                var8 = var9.getNumPremiumGuildSubscriptions;
                var2 = var1.renewalMutations;
                var2 = var2.additionalPlans;
                var2 = var8.bind(var9)(var2);
                var3 = var7[var3];
                var6 = var6.bind(var5)(var3);
                var3 = var6.getNumPremiumGuildSubscriptions;
                var1 = var1.additionalPlans;
                var1 = var3.bind(var6)(var1);
                if (!(!(var1 > var2))) {
                    _fun55706_ip = 532;
                    continue _fun55706
                }
            case 473:
                var6 = _closure1_slot0;
                var7 = _closure1_slot3;
                var1 = 9;
                var2 = var7[var1];
                var2 = var6.bind(var5)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var7[var1];
                var1 = var6.bind(var5)(var1);
                var1 = var1.t;
                var1 = var1["W/bb8f"];
                var1 = var2.bind(var3)(var1);
                _fun55706_ip = 587;
                continue _fun55706;
            case 532:
                var7 = _closure1_slot0;
                var8 = _closure1_slot3;
                var2 = 9;
                var3 = var8[var2];
                var3 = var7.bind(var5)(var3);
                var6 = var3.intl;
                var3 = var6.string;
                var2 = var8[var2];
                var2 = var7.bind(var5)(var2);
                var2 = var2.t;
                var2 = var2.x25mZR;
                var1 = var3.bind(var6)(var2);
            case 587:
                return var1;
            case 589:
                return var0;
            case 591:
                var6 = _closure1_slot0;
                var7 = _closure1_slot3;
                var1 = 9;
                var2 = var7[var1];
                var2 = var6.bind(var5)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var7[var1];
                var1 = var6.bind(var5)(var1);
                var1 = var1.t;
                var1 = var1.x25mZR;
                var1 = var2.bind(var3)(var1);
                return var1;
            case 648:
                var6 = _closure1_slot0;
                var7 = _closure1_slot3;
                var1 = 9;
                var2 = var7[var1];
                var2 = var6.bind(var5)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var7[var1];
                var1 = var6.bind(var5)(var1);
                var1 = var1.t;
                var1 = var1.JakNQ8;
                var1 = var2.bind(var3)(var1);
                return var1;
            case 707:
                var6 = _closure1_slot0;
                var7 = _closure1_slot3;
                var1 = 9;
                var2 = var7[var1];
                var2 = var6.bind(var5)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var7[var1];
                var1 = var6.bind(var5)(var1);
                var1 = var1.t;
                var1 = var1.De4Vm6;
                var1 = var2.bind(var3)(var1);
                return var1;
            case 766:
                return var0;
            case 768:
                var1 = _closure1_slot0;
                var6 = _closure1_slot3;
                var0 = 9;
                var0 = var6[var0];
                var0 = var1.bind(var5)(var0);
                var3 = var0.intl;
                var2 = var3.formatToPlainString;
                var1 = _closure1_slot1;
                var0 = 16;
                var0 = var6[var0];
                var0 = var1.bind(var5)(var0);
                var1 = var0["5xN/C1"];
                var0 = {};
                var4 = _closure1_slot25;
                var4 = var4.bind(var5)();
                var0.premiumGroupProductName = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.generateBlockGuildSubscriptionPurchasesNode = var10;
    var10 = function arg0, arg1() {
        var3 = _closure1_slot41;
        var2 = undefined;
        var1 = arg0;
        var0 = arg1;
        var1 = var3.bind(var2)(var1, var0);
        var0 = 0;
        var0 = var1 > var0;
        return var0;
    };
    var2.isInGracePeriod = var10;
    var2.appliedGuildBoostsRequiredForPerks = var9;
    var2.GuildTierSubscriptionsOrdered = var8;
    var8 = function arg0, arg1() {
        _fun55709: for (var _fun55709_ip = 0;;) switch (_fun55709_ip) {
            case 0:
                var9 = arg0;
                var10 = arg1;
                var2 = _closure1_slot41;
                var0 = undefined;
                var3 = var2.bind(var0)(var9, var10);
                var5 = 0;
                if (!(!(var3 > var5))) {
                    _fun55709_ip = 33;
                    continue _fun55709
                }
            case 29:
                var2 = null;
                return var2;
            case 33:
                var2 = function arg0() {
                    var2 = arg0;
                    var1 = var2.sort;
                    var0 = function(arg0, arg1) { // Environment: var0
                        _fun55711: for (var _fun55711_ip = 0;;) switch (_fun55711_ip) {
                            case 0:
                                var2 = arg0;
                                var1 = arg1;
                                var0 = var2.endsAt;
                                var5 = null;
                                var3 = var5 != var0;
                                var4 = -1;
                                var0 = var4;
                                if (!var3) {
                                    _fun55711_ip = 82;
                                    continue _fun55711
                                }
                            case 30:
                                var3 = var1.endsAt;
                                var3 = var5 != var3;
                                var0 = var4;
                                if (!var3) {
                                    _fun55711_ip = 82;
                                    continue _fun55711
                                }
                            case 46:
                                var3 = var2.endsAt;
                                var2 = var3.getTime;
                                var2 = var2.bind(var3)();
                                var3 = var1.endsAt;
                                var1 = var3.getTime;
                                var1 = var1.bind(var3)();
                                var0 = var2 - var1;
                            case 82:
                                return var0;
                        }
                    };
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var4 = var2.bind(var0)(var9);
                var2 = var4.filter;
                var1 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var1 = var0.endsAt;
                    var0 = null;
                    var0 = var0 != var1;
                    return var0;
                };
                var2 = var2.bind(var4)(var1);
                var1 = var2.length;
                var4 = var1 - var3;
                if (!(var4 < var5)) {
                    _fun55709_ip = 170;
                    continue _fun55709
                }
            case 71:
                var3 = _closure1_slot1;
                var6 = _closure1_slot3;
                var1 = 18;
                var1 = var6[var1];
                var6 = var3.bind(var0)(var1);
                var3 = var6.addBreadcrumb;
                var1 = {
                    'category': 'premium',
                    'message': 'Negative index while checking grace period ending date.'
                };
                var7 = {};
                var9 = var9.length;
                var7.subscriptionLength = var9;
                var9 = _closure1_slot9;
                var8 = _closure1_slot38;
                var8 = var8.bind(var0)(var10);
                var8 = var9[var8];
                var7.subscriptionsNeededForPremiumTier = var8;
                var8 = var2.length;
                var7.endingSubscriptionLength = var8;
                var1.data = var7;
                var1 = var3.bind(var6)(var1);
            case 170:
                var1 = global;
                var3 = var1.Math;
                var1 = var3.max;
                var1 = var1.bind(var3)(var4, var5);
                var1 = var2[var1];
                var2 = null;
                var2 = var2 == var1;
                var0 = undefined;
                if (var2) {
                    _fun55709_ip = 210;
                    continue _fun55709
                }
            case 204:
                var0 = var1.endsAt;
            case 210:
                return var0;
        }
    };
    var2.getGracePeriodEndingDate = var8;
    var8 = function arg0, arg1() {
        _fun55713: for (var _fun55713_ip = 0;;) switch (_fun55713_ip) {
            case 0:
                var7 = arg0;
                var2 = arg1;
                var3 = _closure1_slot31;
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var5 = _closure1_slot28;
                var3 = var5.indexOf;
                var6 = var3.bind(var5)(var2);
                var3 = -1;
                if (!(var3 !== var6)) {
                    _fun55713_ip = 132;
                    continue _fun55713
                }
            case 45:
                var5 = _closure1_slot28;
                var3 = 1;
                var3 = var6 - var3;
                var8 = var5[var3];
                var3 = null;
                var5 = var3 != var8;
                var3 = 0;
                var6 = 0;
                if (!var5) {
                    _fun55713_ip = 82;
                    continue _fun55713
                }
            case 73:
                var5 = _closure1_slot30;
                var6 = var5.bind(var1)(var8);
            case 82:
                var0 = _closure1_slot30;
                var5 = var0.bind(var1)(var2);
                var0 = global;
                var2 = var0.Math;
                var1 = var2.max;
                var0 = var7.slice;
                var0 = var0.bind(var7)(var6, var5);
                var0 = var0.length;
                var0 = var4 - var0;
                var0 = var1.bind(var2)(var3, var0);
                return var0;
            case 132:
                var0 = 0;
                return var0;
        }
    };
    var2.getAvailableStickerSlotCount = var8;
    var8 = function arg0, arg1, arg2() {
        _fun55714: for (var _fun55714_ip = 0;;) switch (_fun55714_ip) {
            case 0:
                var3 = _closure1_slot28;
                var2 = var3.indexOf;
                var1 = arg2;
                var2 = var2.bind(var3)(var1);
                var1 = -1;
                if (!(var1 !== var2)) {
                    _fun55714_ip = 80;
                    continue _fun55714
                }
            case 31:
                var2 = _closure1_slot42;
                var1 = undefined;
                var0 = arg0;
                var1 = var2.bind(var1)(var0);
                var0 = global;
                var3 = var0.Math;
                var2 = var3.max;
                var0 = arg1;
                var0 = var0.length;
                var1 = var1 - var0;
                var0 = 0;
                var0 = var2.bind(var3)(var0, var1);
                return var0;
            case 80:
                var0 = 0;
                return var0;
        }
    };
    var2.getAvailableSoundboardSoundCount = var8;
    var2.getMaxSoundboardSlots = var7;
    var7 = function arg0() {
        _fun55715: for (var _fun55715_ip = 0;;) switch (_fun55715_ip) {
            case 0:
                var0 = arg0;
                var2 = _closure1_slot16;
                var5 = var0.premiumFeatures;
                var1 = null;
                var6 = var1 == var5;
                var3 = undefined;
                if (var6) {
                    _fun55715_ip = 33;
                    continue _fun55715
                }
            case 27:
                var3 = var5.additionalEmojiSlots;
            case 33:
                var5 = var1 != var3;
                var1 = 0;
                if (!var5) {
                    _fun55715_ip = 45;
                    continue _fun55715
                }
            case 42:
                var1 = var3;
            case 45:
                var3 = var2 + var1;
                var1 = global;
                var2 = var1.Math;
                var1 = var2.max;
                var6 = var0.features;
                var5 = var6.has;
                var0 = _closure1_slot11;
                var0 = var0.MORE_EMOJI;
                var0 = var5.bind(var6)(var0);
                if (var0) {
                    _fun55715_ip = 97;
                    continue _fun55715
                }
            case 91:
                var0 = _closure1_slot16;
                _fun55715_ip = 101;
                continue _fun55715;
            case 97:
                var0 = _closure1_slot17;
            case 101:
                var0 = var1.bind(var2)(var0, var3);
                return var0;
        }
    };
    var2.getMaxEmojiSlots = var7;
    var7 = function arg0, arg1() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot3;
        var1 = 19;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.getGuildPowerupsBoostCount;
        var1 = arg0;
        var1 = var1.id;
        var1 = var2.bind(var3)(var1);
        var1 = var1.available;
        var2 = _closure1_slot9;
        var0 = arg1;
        var0 = var2[var0];
        var2 = global;
        var3 = var2.Math;
        var2 = var3.max;
        var1 = var0 - var1;
        var0 = 0;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.getNumberOfAppliedBoostsNeededForTier = var7;
    var2.isGuildBoostSlotCanceled = var6;
    var2.getTheoreticalPremiumTierForSubscriberCount = var5;
    var2.getNextPremiumTierForSubscriberCount = var4;
    var2.TierMarkerPositions = var3;
    var1 = function arg0() {
        _fun55717: for (var _fun55717_ip = 0;;) switch (_fun55717_ip) {
            case 0:
                var1 = _closure1_slot0;
                var3 = _closure1_slot3;
                var0 = 20;
                var0 = var3[var0];
                var3 = undefined;
                var4 = var1.bind(var3)(var0);
                var1 = var4.getGuildPowerupBoostLevelProgress;
                var0 = arg0;
                var0 = var0.id;
                var1 = var1.bind(var4)(var0);
                var0 = _closure1_slot44;
                var8 = var0.bind(var3)(var1);
                var0 = _closure1_slot45;
                var3 = var0.bind(var3)(var1);
                var0 = _closure1_slot9;
                var7 = var0[var8];
                var0 = _closure1_slot9;
                var5 = var0[var3];
                var0 = _closure1_slot35;
                var4 = var0[var8];
                var3 = var0[var3];
                var0 = {};
                var2 = _closure1_slot10;
                var6 = var2.TIER_3;
                var2 = 1;
                if (!(var8 !== var6)) {
                    _fun55717_ip = 133;
                    continue _fun55717
                }
            case 109:
                var6 = var1 - var7;
                var5 = var5 - var7;
                var5 = var6 / var5;
                var3 = var3 - var4;
                var3 = var5 * var3;
                var2 = var3 + var4;
            case 133:
                var0.fillFactor = var2;
                var0.totalAvailableBoostsCount = var1;
                return var0;
        }
    };
    var2.getGuildBoostingProgressBarFillFactor = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1410, 1621, 6708, 3117, 660, 1624, 1623, 3124, 6709, 1234, 1304, 3357, 1684, 22, 3045, 6710, 2436, 3109, 1207, 6713, 6718, 2]);