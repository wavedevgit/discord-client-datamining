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
        _fun74592: for (var _fun74592_ip = 0;;) switch (_fun74592_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun74592_ip = 46;
                    continue _fun74592
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun74592_ip = 55;
                    continue _fun74592
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun74592_ip = 345;
                    continue _fun74592
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun74592_ip = 323;
                    continue _fun74592
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun74592_ip = 283;
                    continue _fun74592
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun74592_ip = 270;
                    continue _fun74592
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
                    _fun74592_ip = 163;
                    continue _fun74592
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun74592_ip = 179;
                    continue _fun74592
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun74592_ip = 249;
                    continue _fun74592
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun74592_ip = 249;
                    continue _fun74592
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun74592_ip = 234;
                    continue _fun74592
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun74592_ip = 247;
                    continue _fun74592
                }
            case 234:
                var8 = _closure1_slot9;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun74592_ip = 265;
                continue _fun74592;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun74592_ip = 283;
                continue _fun74592;
            case 270:
                var6 = _closure1_slot9;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun74592_ip = 323;
                    continue _fun74592
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
                    _fun74592_ip = 330;
                    continue _fun74592
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun74593: for (var _fun74593_ip = 0;;) switch (_fun74593_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun74593_ip = 56;
                                continue _fun74593
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
                            _fun74593_ip = 67;
                            continue _fun74593;
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
        _fun74594: for (var _fun74594_ip = 0;;) switch (_fun74594_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun74594_ip = 23;
                    continue _fun74594
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun74594_ip = 33;
                    continue _fun74594
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
                    _fun74594_ip = 70;
                    continue _fun74594
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun74594_ip = 55;
                    continue _fun74594
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot9 = var0;
    var0 = function arg0() {
        _fun74595: for (var _fun74595_ip = 0;;) switch (_fun74595_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.categories;
                var18 = var0.rowSize;
                var17 = var0.isNativeEmojiPickerEnabled;
                var0 = new Array(0);
                var1 = _closure1_slot8;
                var15 = undefined;
                var14 = var1.bind(var15)(var2);
                var2 = var14.bind(var15)();
                var1 = var2.done;
                var13 = 0;
                var12 = 4;
                var11 = global;
                var10 = null;
                var9 = 6;
                var8 = 5;
                var7 = var2;
                var6 = undefined;
                var5 = undefined;
                var4 = undefined;
                var3 = undefined;
                var2 = undefined;
                if (var1) {
                    _fun74595_ip = 1289;
                    continue _fun74595
                }
            case 82:
                var26 = var7.value;
                var24 = var26.type;
                var1 = _closure1_slot6;
                var1 = var1.TOP_GUILD_EMOJI;
                if (!(var1 !== var24)) {
                    _fun74595_ip = 1142;
                    continue _fun74595
                }
            case 109:
                var1 = _closure1_slot6;
                var1 = var1.FAVORITES;
                if (!(var1 !== var24)) {
                    _fun74595_ip = 1037;
                    continue _fun74595
                }
            case 126:
                var1 = _closure1_slot6;
                var1 = var1.RECENT;
                if (!(var1 !== var24)) {
                    _fun74595_ip = 929;
                    continue _fun74595
                }
            case 143:
                var1 = _closure1_slot6;
                var1 = var1.GUILD;
                if (!(var1 !== var24)) {
                    _fun74595_ip = 548;
                    continue _fun74595
                }
            case 160:
                var1 = _closure1_slot6;
                var1 = var1.UNICODE;
                var23 = var6;
                var22 = var5;
                var21 = var4;
                var20 = var3;
                var19 = var2;
                if (!(var1 === var24)) {
                    _fun74595_ip = 1256;
                    continue _fun74595
                }
            case 192:
                var24 = _closure1_slot1;
                var1 = _closure1_slot2;
                var1 = var1[var8];
                var25 = var24.bind(var15)(var1);
                var24 = var25.getByCategory;
                var1 = var26.name;
                var24 = var24.bind(var25)(var1);
                if (var17) {
                    _fun74595_ip = 392;
                    continue _fun74595
                }
            case 231:
                var25 = _closure1_slot12;
                var1 = {};
                var1.emojiSections = var0;
                var27 = {};
                var28 = _closure1_slot7;
                var28 = var28.EMOJI;
                var27.type = var28;
                var28 = var24;
                if (!(var10 == var24)) {
                    _fun74595_ip = 269;
                    continue _fun74595
                }
            case 265:
                var28 = new Array(0);
            case 269:
                var27.emojis = var28;
                var28 = var11.Set;
                var29 = var28.prototype;
                var29 = Object.create(var29, {
                    constructor: {
                        value: var28
                    }
                });
                var33 = var29;
                var28 = new var33[var28](var32);
                var28 = var28 instanceof Object ? var28 : var29;
                var27.emojisDisabled = var28;
                var29 = _closure1_slot1;
                var28 = _closure1_slot2;
                var28 = var28[var9];
                var30 = var29.bind(var15)(var28);
                var29 = var30.capitalize;
                var28 = var26.name;
                var28 = var29.bind(var30)(var28);
                var27.label = var28;
                var28 = _closure1_slot6;
                var28 = var28.UNICODE;
                var27.footer = var28;
                var1.renderingData = var27;
                var1.rowSize = var18;
                var1 = var25.bind(var15)(var1);
                var23 = var6;
                var22 = var5;
                var21 = var4;
                var20 = var24;
                var19 = var2;
                _fun74595_ip = 1256;
                continue _fun74595;
            case 392:
                var27 = _closure1_slot13;
                var25 = {};
                var25.emojiSections = var0;
                var28 = {};
                var1 = _closure1_slot7;
                var1 = var1.NATIVE_SECTION;
                var28.type = var1;
                var29 = _closure1_slot1;
                var1 = _closure1_slot2;
                var1 = var1[var9];
                var30 = var29.bind(var15)(var1);
                var29 = var30.capitalize;
                var1 = var26.name;
                var1 = var29.bind(var30)(var1);
                var28.label = var1;
                var29 = var10 == var24;
                var1 = undefined;
                if (var29) {
                    _fun74595_ip = 470;
                    continue _fun74595
                }
            case 465:
                var1 = var24.length;
            case 470:
                var30 = var10 != var1;
                var29 = 0;
                if (!var30) {
                    _fun74595_ip = 482;
                    continue _fun74595
                }
            case 479:
                var29 = var1;
            case 482:
                var28.emojiCount = var29;
                var29 = var11.Set;
                var30 = var29.prototype;
                var30 = Object.create(var30, {
                    constructor: {
                        value: var29
                    }
                });
                var33 = var30;
                var29 = new var33[var29](var32);
                var29 = var29 instanceof Object ? var29 : var30;
                var28.emojisDisabled = var29;
                var25.renderingData = var28;
                var25 = var27.bind(var15)(var25);
                var23 = var6;
                var22 = var5;
                var21 = var4;
                var20 = var24;
                var19 = var1;
                _fun74595_ip = 1256;
                continue _fun74595;
            case 548:
                var25 = var26.guild;
                var24 = var26.emojis;
                var1 = var26.emojisDisabled;
                if (var17) {
                    _fun74595_ip = 828;
                    continue _fun74595
                }
            case 571:
                var28 = _closure1_slot0;
                var27 = _closure1_slot2;
                var27 = var27[var12];
                var29 = var28.bind(var15)(var27);
                var28 = var29.shouldNSFWGateGuild;
                var27 = var25.id;
                var27 = var28.bind(var29)(var27);
                if (var27) {
                    _fun74595_ip = 714;
                    continue _fun74595
                }
            case 607:
                var28 = _closure1_slot12;
                var27 = {};
                var27.emojiSections = var0;
                var29 = {};
                var30 = _closure1_slot7;
                var30 = var30.EMOJI;
                var29.type = var30;
                var29.emojis = var24;
                var29.emojisDisabled = var1;
                var30 = var25.name;
                var29.label = var30;
                var30 = _closure1_slot6;
                var30 = var30.GUILD;
                var29.footer = var30;
                var30 = var26.isNitroLocked;
                var29.isSectionNitroLocked = var30;
                var27.renderingData = var29;
                var27.rowSize = var18;
                var27 = var28.bind(var15)(var27);
                var23 = var25;
                var22 = var24;
                var21 = var1;
                var20 = var3;
                var19 = var2;
                _fun74595_ip = 1256;
                continue _fun74595;
            case 714:
                var27 = {};
                var27.emojiSections = var0;
                var28 = {};
                var29 = _closure1_slot7;
                var29 = var29.NSFW;
                var28.type = var29;
                var29 = var25.name;
                var28.label = var29;
                var29 = _closure1_slot6;
                var29 = var29.GUILD;
                var28.footer = var29;
                var29 = new Array(0);
                var28.emojis = var29;
                var29 = var26.isNitroLocked;
                var28.isSectionNitroLocked = var29;
                var27.renderingData = var28;
                var29 = var27.emojiSections;
                var28 = var29.push;
                var27 = var27.renderingData;
                var27 = var28.bind(var29)(var27);
                var23 = var25;
                var22 = var24;
                var21 = var1;
                var20 = var3;
                var19 = var2;
                _fun74595_ip = 1256;
                continue _fun74595;
            case 828:
                var28 = _closure1_slot13;
                var27 = {};
                var27.emojiSections = var0;
                var29 = {};
                var30 = _closure1_slot7;
                var30 = var30.NATIVE_SECTION;
                var29.type = var30;
                var30 = var25.name;
                var29.label = var30;
                var30 = var25.id;
                var29.guildId = var30;
                var30 = var24.length;
                var29.emojiCount = var30;
                var29.emojisDisabled = var1;
                var30 = var26.isNitroLocked;
                var29.isSectionNitroLocked = var30;
                var27.renderingData = var29;
                var27 = var28.bind(var15)(var27);
                var23 = var25;
                var22 = var24;
                var21 = var1;
                var20 = var3;
                var19 = var2;
                _fun74595_ip = 1256;
                continue _fun74595;
            case 929:
                var24 = _closure1_slot12;
                var1 = {};
                var1.emojiSections = var0;
                var25 = {};
                var27 = _closure1_slot7;
                var27 = var27.EMOJI;
                var25.type = var27;
                var27 = var26.emojisDisabled;
                var25.emojisDisabled = var27;
                var27 = var26.emojis;
                var25.emojis = var27;
                var27 = var26.name;
                var25.label = var27;
                var27 = _closure1_slot6;
                var27 = var27.RECENT;
                var25.footer = var27;
                var1.renderingData = var25;
                var1.rowSize = var18;
                var1 = var24.bind(var15)(var1);
                var23 = var6;
                var22 = var5;
                var21 = var4;
                var20 = var3;
                var19 = var2;
                _fun74595_ip = 1256;
                continue _fun74595;
            case 1037:
                var24 = _closure1_slot12;
                var1 = {};
                var1.emojiSections = var0;
                var25 = {};
                var27 = _closure1_slot7;
                var27 = var27.EMOJI;
                var25.type = var27;
                var27 = var26.emojis;
                var25.emojis = var27;
                var27 = var26.emojisDisabled;
                var25.emojisDisabled = var27;
                var27 = var26.name;
                var25.label = var27;
                var27 = _closure1_slot6;
                var27 = var27.FAVORITES;
                var25.footer = var27;
                var1.renderingData = var25;
                var1.rowSize = var18;
                var1 = var24.bind(var15)(var1);
                var23 = var6;
                var22 = var5;
                var21 = var4;
                var20 = var3;
                var19 = var2;
                _fun74595_ip = 1256;
                continue _fun74595;
            case 1142:
                var24 = var26.emojis;
                var1 = var24.slice;
                var27 = var1.bind(var24)(var13, var18);
                var24 = _closure1_slot12;
                var1 = {};
                var1.emojiSections = var0;
                var25 = {};
                var28 = _closure1_slot7;
                var28 = var28.EMOJI;
                var25.type = var28;
                var25.emojis = var27;
                var27 = var26.emojisDisabled;
                var25.emojisDisabled = var27;
                var26 = var26.name;
                var25.label = var26;
                var26 = _closure1_slot6;
                var26 = var26.TOP_GUILD_EMOJI;
                var25.footer = var26;
                var1.renderingData = var25;
                var1.rowSize = var18;
                var1 = var24.bind(var15)(var1);
                var23 = var6;
                var22 = var5;
                var21 = var4;
                var20 = var3;
                var19 = var2;
            case 1256:
                var24 = var14.bind(var15)();
                var1 = var24.done;
                var6 = var23;
                var5 = var22;
                var4 = var21;
                var3 = var20;
                var2 = var19;
                var7 = var24;
                if (!var1) {
                    _fun74595_ip = 82;
                    continue _fun74595
                }
            case 1289:
                return var0;
        }
    };
    var _closure1_slot10 = var0;
    var0 = function arg0() {
        _fun74596: for (var _fun74596_ip = 0;;) switch (_fun74596_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.emojis;
                var2 = var1.locked;
                var12 = var1.unlocked;
                var4 = var0.rowSize;
                var9 = var0.limit;
                var3 = undefined;
                if (!(var9 === var3)) {
                    _fun74596_ip = 52;
                    continue _fun74596
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
                    _fun74596_ip = 111;
                    continue _fun74596
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
                    _fun74596_ip = 212;
                    continue _fun74596
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
                    _fun74596_ip = 305;
                    continue _fun74596
                }
            case 261:
                var1 = var2.value;
                var10 = var1.id;
                if (!(var5 != var10)) {
                    _fun74596_ip = 290;
                    continue _fun74596
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
                    _fun74596_ip = 261;
                    continue _fun74596
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
        _fun74597: for (var _fun74597_ip = 0;;) switch (_fun74597_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.renderingData;
                var2 = var1.emojis;
                var1 = null;
                var1 = var1 != var2;
                if (!var1) {
                    _fun74597_ip = 35;
                    continue _fun74597
                }
            case 24:
                var3 = var2.length;
                var2 = 0;
                var1 = var2 !== var3;
            case 35:
                if (!var1) {
                    _fun74597_ip = 60;
                    continue _fun74597
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 4743, 9368, 9116, 3106, 22, 7064, 1682, 2]);