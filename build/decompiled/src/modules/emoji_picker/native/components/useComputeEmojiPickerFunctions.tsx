// modules/emoji_picker/native/components/useComputeEmojiPickerFunctions.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function arg0, arg1() {
        _fun74376: for (var _fun74376_ip = 0;;) switch (_fun74376_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun74376_ip = 46;
                    continue _fun74376
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun74376_ip = 55;
                    continue _fun74376
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun74376_ip = 345;
                    continue _fun74376
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun74376_ip = 323;
                    continue _fun74376
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun74376_ip = 283;
                    continue _fun74376
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun74376_ip = 270;
                    continue _fun74376
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
                    _fun74376_ip = 163;
                    continue _fun74376
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun74376_ip = 179;
                    continue _fun74376
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun74376_ip = 249;
                    continue _fun74376
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun74376_ip = 249;
                    continue _fun74376
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun74376_ip = 234;
                    continue _fun74376
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun74376_ip = 247;
                    continue _fun74376
                }
            case 234:
                var8 = _closure1_slot9;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun74376_ip = 265;
                continue _fun74376;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun74376_ip = 283;
                continue _fun74376;
            case 270:
                var6 = _closure1_slot9;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun74376_ip = 323;
                    continue _fun74376
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
                    _fun74376_ip = 330;
                    continue _fun74376
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun74377: for (var _fun74377_ip = 0;;) switch (_fun74377_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun74377_ip = 56;
                                continue _fun74377
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
                            _fun74377_ip = 67;
                            continue _fun74377;
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
    var _closure1_slot8 = var0;
    var0 = function arg0, arg1() {
        _fun74378: for (var _fun74378_ip = 0;;) switch (_fun74378_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun74378_ip = 23;
                    continue _fun74378
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun74378_ip = 33;
                    continue _fun74378
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
                    _fun74378_ip = 70;
                    continue _fun74378
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun74378_ip = 55;
                    continue _fun74378
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot9 = var0;
    var0 = function arg0() {
        _fun74379: for (var _fun74379_ip = 0;;) switch (_fun74379_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.categories;
                var19 = var0.rowSize;
                var18 = var0.isNativeEmojiPickerEnabled;
                var0 = new Array(0);
                var1 = _closure1_slot8;
                var16 = undefined;
                var15 = var1.bind(var16)(var2);
                var2 = var15.bind(var16)();
                var1 = var2.done;
                var14 = 0;
                var13 = 4;
                var12 = global;
                var11 = null;
                var10 = 6;
                var9 = 5;
                var8 = var2;
                var7 = undefined;
                var6 = undefined;
                var5 = undefined;
                var4 = undefined;
                var3 = undefined;
                var2 = undefined;
                if (var1) {
                    _fun74379_ip = 1363;
                    continue _fun74379
                }
            case 84:
                var28 = var8.value;
                var26 = var28.type;
                var1 = _closure1_slot6;
                var1 = var1.TOP_GUILD_EMOJI;
                if (!(var1 !== var26)) {
                    _fun74379_ip = 1210;
                    continue _fun74379
                }
            case 111:
                var1 = _closure1_slot6;
                var1 = var1.FAVORITES;
                if (!(var1 !== var26)) {
                    _fun74379_ip = 1102;
                    continue _fun74379
                }
            case 128:
                var1 = _closure1_slot6;
                var1 = var1.RECENT;
                if (!(var1 !== var26)) {
                    _fun74379_ip = 991;
                    continue _fun74379
                }
            case 145:
                var1 = _closure1_slot6;
                var1 = var1.GUILD;
                if (!(var1 !== var26)) {
                    _fun74379_ip = 590;
                    continue _fun74379
                }
            case 162:
                var1 = _closure1_slot6;
                var1 = var1.UNICODE;
                var25 = var7;
                var24 = var6;
                var23 = var5;
                var22 = var4;
                var21 = var3;
                var20 = var2;
                if (!(var1 === var26)) {
                    _fun74379_ip = 1327;
                    continue _fun74379
                }
            case 197:
                var26 = _closure1_slot1;
                var1 = _closure1_slot2;
                var1 = var1[var9];
                var27 = var26.bind(var16)(var1);
                var26 = var27.getByCategory;
                var1 = var28.name;
                var26 = var26.bind(var27)(var1);
                if (var18) {
                    _fun74379_ip = 400;
                    continue _fun74379
                }
            case 236:
                var27 = _closure1_slot12;
                var1 = {};
                var1.emojiSections = var0;
                var29 = {};
                var30 = _closure1_slot7;
                var30 = var30.EMOJI;
                var29.type = var30;
                var30 = var26;
                if (!(var11 == var26)) {
                    _fun74379_ip = 274;
                    continue _fun74379
                }
            case 270:
                var30 = new Array(0);
            case 274:
                var29.emojis = var30;
                var30 = var12.Set;
                var31 = var30.prototype;
                var31 = Object.create(var31, {
                    constructor: {
                        value: var30
                    }
                });
                var36 = var31;
                var30 = new var36[var30](var35);
                var30 = var30 instanceof Object ? var30 : var31;
                var29.emojisDisabled = var30;
                var31 = _closure1_slot1;
                var30 = _closure1_slot2;
                var30 = var30[var10];
                var32 = var31.bind(var16)(var30);
                var31 = var32.capitalize;
                var30 = var28.name;
                var30 = var31.bind(var32)(var30);
                var29.label = var30;
                var30 = _closure1_slot6;
                var30 = var30.UNICODE;
                var29.footer = var30;
                var1.renderingData = var29;
                var1.rowSize = var19;
                var1 = var27.bind(var16)(var1);
                var25 = var7;
                var24 = var6;
                var23 = var5;
                var22 = var4;
                var21 = var26;
                var20 = var2;
                _fun74379_ip = 1327;
                continue _fun74379;
            case 400:
                var29 = _closure1_slot13;
                var27 = {};
                var27.emojiSections = var0;
                var30 = {};
                var1 = _closure1_slot7;
                var1 = var1.NATIVE_SECTION;
                var30.type = var1;
                var31 = _closure1_slot1;
                var1 = _closure1_slot2;
                var1 = var1[var10];
                var32 = var31.bind(var16)(var1);
                var31 = var32.capitalize;
                var1 = var28.name;
                var1 = var31.bind(var32)(var1);
                var30.label = var1;
                var31 = var11 == var26;
                var1 = undefined;
                if (var31) {
                    _fun74379_ip = 478;
                    continue _fun74379
                }
            case 473:
                var1 = var26.length;
            case 478:
                var32 = var11 != var1;
                var31 = 0;
                if (!var32) {
                    _fun74379_ip = 490;
                    continue _fun74379
                }
            case 487:
                var31 = var1;
            case 490:
                var30.emojiCount = var31;
                var31 = var12.Set;
                var32 = var31.prototype;
                var32 = Object.create(var32, {
                    constructor: {
                        value: var31
                    }
                });
                var36 = var32;
                var31 = new var36[var31](var35);
                var31 = var31 instanceof Object ? var31 : var32;
                var30.emojisDisabled = var31;
                var31 = var12.Set;
                var32 = var31.prototype;
                var32 = Object.create(var32, {
                    constructor: {
                        value: var31
                    }
                });
                var36 = var32;
                var31 = new var36[var31](var35);
                var31 = var31 instanceof Object ? var31 : var32;
                var30.emojisHidden = var31;
                var27.renderingData = var30;
                var27 = var29.bind(var16)(var27);
                var25 = var7;
                var24 = var6;
                var23 = var5;
                var22 = var4;
                var21 = var26;
                var20 = var1;
                _fun74379_ip = 1327;
                continue _fun74379;
            case 590:
                var29 = var28.guild;
                var27 = var28.emojis;
                var26 = var28.emojisDisabled;
                var1 = var28.emojisHidden;
                if (var18) {
                    _fun74379_ip = 882;
                    continue _fun74379
                }
            case 619:
                var31 = _closure1_slot0;
                var30 = _closure1_slot2;
                var30 = var30[var13];
                var32 = var31.bind(var16)(var30);
                var31 = var32.shouldNSFWGateGuild;
                var30 = var29.id;
                var30 = var31.bind(var32)(var30);
                if (var30) {
                    _fun74379_ip = 765;
                    continue _fun74379
                }
            case 655:
                var31 = _closure1_slot12;
                var30 = {};
                var30.emojiSections = var0;
                var32 = {};
                var33 = _closure1_slot7;
                var33 = var33.EMOJI;
                var32.type = var33;
                var32.emojis = var27;
                var32.emojisDisabled = var26;
                var33 = var29.name;
                var32.label = var33;
                var33 = _closure1_slot6;
                var33 = var33.GUILD;
                var32.footer = var33;
                var33 = var28.isNitroLocked;
                var32.isSectionNitroLocked = var33;
                var30.renderingData = var32;
                var30.rowSize = var19;
                var30 = var31.bind(var16)(var30);
                var25 = var29;
                var24 = var27;
                var23 = var26;
                var22 = var1;
                var21 = var3;
                var20 = var2;
                _fun74379_ip = 1327;
                continue _fun74379;
            case 765:
                var30 = {};
                var30.emojiSections = var0;
                var31 = {};
                var32 = _closure1_slot7;
                var32 = var32.NSFW;
                var31.type = var32;
                var32 = var29.name;
                var31.label = var32;
                var32 = _closure1_slot6;
                var32 = var32.GUILD;
                var31.footer = var32;
                var32 = new Array(0);
                var31.emojis = var32;
                var32 = var28.isNitroLocked;
                var31.isSectionNitroLocked = var32;
                var30.renderingData = var31;
                var32 = var30.emojiSections;
                var31 = var32.push;
                var30 = var30.renderingData;
                var30 = var31.bind(var32)(var30);
                var25 = var29;
                var24 = var27;
                var23 = var26;
                var22 = var1;
                var21 = var3;
                var20 = var2;
                _fun74379_ip = 1327;
                continue _fun74379;
            case 882:
                var31 = _closure1_slot13;
                var30 = {};
                var30.emojiSections = var0;
                var32 = {};
                var33 = _closure1_slot7;
                var33 = var33.NATIVE_SECTION;
                var32.type = var33;
                var33 = var29.name;
                var32.label = var33;
                var33 = var29.id;
                var32.guildId = var33;
                var33 = var27.length;
                var32.emojiCount = var33;
                var32.emojisDisabled = var26;
                var32.emojisHidden = var1;
                var33 = var28.isNitroLocked;
                var32.isSectionNitroLocked = var33;
                var30.renderingData = var32;
                var30 = var31.bind(var16)(var30);
                var25 = var29;
                var24 = var27;
                var23 = var26;
                var22 = var1;
                var21 = var3;
                var20 = var2;
                _fun74379_ip = 1327;
                continue _fun74379;
            case 991:
                var26 = _closure1_slot12;
                var1 = {};
                var1.emojiSections = var0;
                var27 = {};
                var29 = _closure1_slot7;
                var29 = var29.EMOJI;
                var27.type = var29;
                var29 = var28.emojisDisabled;
                var27.emojisDisabled = var29;
                var29 = var28.emojis;
                var27.emojis = var29;
                var29 = var28.name;
                var27.label = var29;
                var29 = _closure1_slot6;
                var29 = var29.RECENT;
                var27.footer = var29;
                var1.renderingData = var27;
                var1.rowSize = var19;
                var1 = var26.bind(var16)(var1);
                var25 = var7;
                var24 = var6;
                var23 = var5;
                var22 = var4;
                var21 = var3;
                var20 = var2;
                _fun74379_ip = 1327;
                continue _fun74379;
            case 1102:
                var26 = _closure1_slot12;
                var1 = {};
                var1.emojiSections = var0;
                var27 = {};
                var29 = _closure1_slot7;
                var29 = var29.EMOJI;
                var27.type = var29;
                var29 = var28.emojis;
                var27.emojis = var29;
                var29 = var28.emojisDisabled;
                var27.emojisDisabled = var29;
                var29 = var28.name;
                var27.label = var29;
                var29 = _closure1_slot6;
                var29 = var29.FAVORITES;
                var27.footer = var29;
                var1.renderingData = var27;
                var1.rowSize = var19;
                var1 = var26.bind(var16)(var1);
                var25 = var7;
                var24 = var6;
                var23 = var5;
                var22 = var4;
                var21 = var3;
                var20 = var2;
                _fun74379_ip = 1327;
                continue _fun74379;
            case 1210:
                var26 = var28.emojis;
                var1 = var26.slice;
                var29 = var1.bind(var26)(var14, var19);
                var26 = _closure1_slot12;
                var1 = {};
                var1.emojiSections = var0;
                var27 = {};
                var30 = _closure1_slot7;
                var30 = var30.EMOJI;
                var27.type = var30;
                var27.emojis = var29;
                var29 = var28.emojisDisabled;
                var27.emojisDisabled = var29;
                var28 = var28.name;
                var27.label = var28;
                var28 = _closure1_slot6;
                var28 = var28.TOP_GUILD_EMOJI;
                var27.footer = var28;
                var1.renderingData = var27;
                var1.rowSize = var19;
                var1 = var26.bind(var16)(var1);
                var25 = var7;
                var24 = var6;
                var23 = var5;
                var22 = var4;
                var21 = var3;
                var20 = var2;
            case 1327:
                var26 = var15.bind(var16)();
                var1 = var26.done;
                var7 = var25;
                var6 = var24;
                var5 = var23;
                var4 = var22;
                var3 = var21;
                var2 = var20;
                var8 = var26;
                if (!var1) {
                    _fun74379_ip = 84;
                    continue _fun74379
                }
            case 1363:
                return var0;
        }
    };
    var _closure1_slot10 = var0;
    var0 = function arg0() {
        _fun74380: for (var _fun74380_ip = 0;;) switch (_fun74380_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.emojis;
                var2 = var1.locked;
                var12 = var1.unlocked;
                var4 = var0.rowSize;
                var9 = var0.limit;
                var3 = undefined;
                if (!(var9 === var3)) {
                    _fun74380_ip = 52;
                    continue _fun74380
                }
            case 38:
                var0 = global;
                var0 = var0.Number;
                var9 = var0.MAX_SAFE_INTEGER;
            case 52:
                var0 = new Array(0);
                var7 = _closure1_slot12;
                var5 = {};
                var5.emojiSections = var0;
                var8 = {};
                var1 = _closure1_slot7;
                var1 = var1.EMOJI;
                var8.type = var1;
                var10 = var12.length;
                var1 = var12;
                if (!(var10 > var9)) {
                    _fun74380_ip = 111;
                    continue _fun74380
                }
            case 98:
                var11 = var12.slice;
                var10 = 0;
                var1 = var11.bind(var12)(var10, var9);
            case 111:
                var8.emojis = var1;
                var1 = global;
                var10 = var1.Set;
                var11 = var10.prototype;
                var11 = Object.create(var11, {
                    constructor: {
                        value: var10
                    }
                });
                var15 = var11;
                var10 = new var15[var10](var14);
                var10 = var10 instanceof Object ? var10 : var11;
                var8.emojisDisabled = var10;
                var10 = '';
                var8.label = var10;
                var10 = _closure1_slot6;
                var10 = var10.SEARCH_RESULTS;
                var8.footer = var10;
                var5.renderingData = var8;
                var5.rowSize = var4;
                var5 = var7.bind(var3)(var5);
                var5 = var2.length;
                var8 = var2;
                if (!(var5 > var9)) {
                    _fun74380_ip = 212;
                    continue _fun74380
                }
            case 199:
                var7 = var2.slice;
                var5 = 0;
                var8 = var7.bind(var2)(var5, var9);
            case 212:
                var1 = var1.Set;
                var5 = var1.prototype;
                var5 = Object.create(var5, {
                    constructor: {
                        value: var1
                    }
                });
                var15 = var5;
                var1 = new var15[var1](var14);
                var7 = var1 instanceof Object ? var1 : var5;
                var1 = _closure1_slot8;
                var9 = var1.bind(var3)(var2);
                var2 = var9.bind(var3)();
                var1 = var2.done;
                var5 = null;
                if (var1) {
                    _fun74380_ip = 305;
                    continue _fun74380
                }
            case 261:
                var1 = var2.value;
                var10 = var1.id;
                if (!(var5 != var10)) {
                    _fun74380_ip = 290;
                    continue _fun74380
                }
            case 275:
                var10 = var7.add;
                var1 = var1.id;
                var1 = var10.bind(var7)(var1);
            case 290:
                var10 = var9.bind(var3)();
                var1 = var10.done;
                var2 = var10;
                if (!var1) {
                    _fun74380_ip = 261;
                    continue _fun74380
                }
            case 305:
                var2 = _closure1_slot12;
                var1 = {};
                var1.emojiSections = var0;
                var5 = {};
                var9 = _closure1_slot7;
                var9 = var9.EMOJI;
                var5.type = var9;
                var5.emojis = var8;
                var5.emojisDisabled = var7;
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var7 = 7;
                var7 = var9[var7];
                var9 = var8.bind(var3)(var7);
                var8 = var9.getStringForEmojiCategory;
                var7 = _closure1_slot5;
                var7 = var7.PREMIUM_UPSELL;
                var7 = var8.bind(var9)(var7);
                var5.label = var7;
                var6 = _closure1_slot6;
                var6 = var6.PREMIUM_UPSELL;
                var5.footer = var6;
                var1.renderingData = var5;
                var1.rowSize = var4;
                var1 = var2.bind(var3)(var1);
                return var0;
        }
    };
    var _closure1_slot11 = var0;
    var0 = function arg0() {
        _fun74381: for (var _fun74381_ip = 0;;) switch (_fun74381_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.renderingData;
                var2 = var1.emojis;
                var1 = null;
                var1 = var1 != var2;
                if (!var1) {
                    _fun74381_ip = 35;
                    continue _fun74381
                }
            case 24:
                var3 = var2.length;
                var2 = 0;
                var1 = var2 !== var3;
            case 35:
                if (!var1) {
                    _fun74381_ip = 60;
                    continue _fun74381
                }
            case 38:
                var2 = var0.emojiSections;
                var1 = var2.push;
                var0 = var0.renderingData;
                var0 = var1.bind(var2)(var0);
            case 60:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot12 = var0;
    var0 = function arg0() {
        var0 = arg0;
        var2 = var0.emojiSections;
        var1 = var2.push;
        var0 = var0.renderingData;
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var _closure1_slot13 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = arg3;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.EmojiCategories;
    var _closure1_slot5 = var6;
    var3 = var3.EmojiCategoryTypes;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.EmojiPickerRenderingDataType;
    var _closure1_slot7 = var3;
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/emoji_picker/native/components/useComputeEmojiPickerFunctions.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        var3 = _closure1_slot4;
        var2 = var3.useState;
        var1 = function() { // Environment: var1
            var0 = {};
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 8;
            var6 = var5[var2];
            var3 = undefined;
            var8 = var4.bind(var3)(var6);
            var7 = var8.cachedFunction;
            var6 = _closure1_slot10;
            var6 = var7.bind(var8)(var6);
            var0.computeCategories = var6;
            var2 = var5[var2];
            var3 = var4.bind(var3)(var2);
            var2 = var3.cachedFunction;
            var1 = _closure1_slot11;
            var1 = var2.bind(var3)(var1);
            var0.computeSearchResults = var1;
            return var0;
        };
        var3 = var2.bind(var3)(var1);
        var2 = _closure1_slot3;
        var1 = undefined;
        var0 = 1;
        var1 = var2.bind(var1)(var3, var0);
        var0 = 0;
        var0 = var1[var0];
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 4750, 9332, 9080, 3111, 22, 7082, 1685, 2]);