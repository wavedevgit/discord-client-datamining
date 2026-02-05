// modules/soundboard/native/SoundboardSoundPickerList.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var5;
    var0 = function arg0, arg1() {
        _fun68669: for (var _fun68669_ip = 0;;) switch (_fun68669_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun68669_ip = 46;
                    continue _fun68669
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun68669_ip = 55;
                    continue _fun68669
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun68669_ip = 345;
                    continue _fun68669
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun68669_ip = 323;
                    continue _fun68669
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun68669_ip = 283;
                    continue _fun68669
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun68669_ip = 270;
                    continue _fun68669
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
                    _fun68669_ip = 163;
                    continue _fun68669
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun68669_ip = 179;
                    continue _fun68669
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun68669_ip = 249;
                    continue _fun68669
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun68669_ip = 249;
                    continue _fun68669
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun68669_ip = 234;
                    continue _fun68669
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun68669_ip = 247;
                    continue _fun68669
                }
            case 234:
                var8 = _closure1_slot12;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun68669_ip = 265;
                continue _fun68669;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun68669_ip = 283;
                continue _fun68669;
            case 270:
                var6 = _closure1_slot12;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun68669_ip = 323;
                    continue _fun68669
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
                    _fun68669_ip = 330;
                    continue _fun68669
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun68670: for (var _fun68670_ip = 0;;) switch (_fun68670_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun68670_ip = 56;
                                continue _fun68670
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
                            _fun68670_ip = 67;
                            continue _fun68670;
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
    var _closure1_slot11 = var0;
    var0 = function arg0, arg1() {
        _fun68671: for (var _fun68671_ip = 0;;) switch (_fun68671_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun68671_ip = 23;
                    continue _fun68671
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun68671_ip = 33;
                    continue _fun68671
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
                    _fun68671_ip = 70;
                    continue _fun68671
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun68671_ip = 55;
                    continue _fun68671
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot12 = var0;
    var0 = function arg0() {
        _fun68672: for (var _fun68672_ip = 0;;) switch (_fun68672_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.category;
                var1 = var1.categoryInfo;
                var3 = var1.type;
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var6 = 7;
                var2 = var2[var6];
                var5 = undefined;
                var2 = var4.bind(var5)(var2);
                var2 = var2.SoundboardSoundGridSectionType;
                var2 = var2.GUILD;
                if (!(var2 !== var3)) {
                    _fun68672_ip = 472;
                    continue _fun68672
                }
            case 64:
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var6];
                var2 = var4.bind(var5)(var2);
                var2 = var2.SoundboardSoundGridSectionType;
                var2 = var2.DEFAULTS;
                if (!(var2 !== var3)) {
                    _fun68672_ip = 415;
                    continue _fun68672
                }
            case 100:
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var6];
                var2 = var4.bind(var5)(var2);
                var2 = var2.SoundboardSoundGridSectionType;
                var2 = var2.FAVORITES;
                if (!(var2 !== var3)) {
                    _fun68672_ip = 358;
                    continue _fun68672
                }
            case 136:
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var6];
                var2 = var4.bind(var5)(var2);
                var2 = var2.SoundboardSoundGridSectionType;
                var2 = var2.SEARCH;
                if (!(var2 !== var3)) {
                    _fun68672_ip = 354;
                    continue _fun68672
                }
            case 172:
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var6];
                var2 = var4.bind(var5)(var2);
                var2 = var2.SoundboardSoundGridSectionType;
                var2 = var2.RECENTLY_HEARD;
                if (!(var2 !== var3)) {
                    _fun68672_ip = 297;
                    continue _fun68672
                }
            case 205:
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var6];
                var2 = var4.bind(var5)(var2);
                var2 = var2.SoundboardSoundGridSectionType;
                var2 = var2.FREQUENTLY_USED;
                if (!(var2 !== var3)) {
                    _fun68672_ip = 240;
                    continue _fun68672
                }
            case 238:
                return var5;
            case 240:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 8;
                var3 = var7[var2];
                var3 = var6.bind(var5)(var3);
                var4 = var3.intl;
                var3 = var4.string;
                var2 = var7[var2];
                var2 = var6.bind(var5)(var2);
                var2 = var2.t;
                var2 = var2["+cGVV6"];
                var2 = var3.bind(var4)(var2);
                return var2;
            case 297:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 8;
                var3 = var7[var2];
                var3 = var6.bind(var5)(var3);
                var4 = var3.intl;
                var3 = var4.string;
                var2 = var7[var2];
                var2 = var6.bind(var5)(var2);
                var2 = var2.t;
                var2 = var2["8i/+SA"];
                var2 = var3.bind(var4)(var2);
                return var2;
            case 354:
                var2 = null;
                return var2;
            case 358:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 8;
                var3 = var7[var2];
                var3 = var6.bind(var5)(var3);
                var4 = var3.intl;
                var3 = var4.string;
                var2 = var7[var2];
                var2 = var6.bind(var5)(var2);
                var2 = var2.t;
                var2 = var2.y3LQCG;
                var2 = var3.bind(var4)(var2);
                return var2;
            case 415:
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 8;
                var2 = var6[var1];
                var2 = var4.bind(var5)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var4.bind(var5)(var1);
                var1 = var1.t;
                var1 = var1.Rtvk9X;
                var1 = var2.bind(var3)(var1);
                return var1;
            case 472:
                var0 = var0.category;
                var0 = var0.categoryInfo;
                var0 = var0.guild;
                var0 = var0.name;
                return var0;
        }
    };
    var _closure1_slot13 = var0;
    var0 = global;
    var8 = var0.Object;
    var6 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var8)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = arg3;
    var0 = undefined;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.SOUND_BUTTON_HEIGHT;
    var11 = var3.SOUND_ROW_HORIZONTAL_PADDING;
    var10 = var3.SOUND_ROW_SPACING;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var12 = var3.ACTION_SHEET_BACKGROUND_COLOR;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var8 = var3.jsx;
    var _closure1_slot6 = var8;
    var3 = var3.jsxs;
    var _closure1_slot7 = var3;
    var3 = 8;
    var13 = var7 + var3;
    var _closure1_slot8 = var13;
    var3 = 6;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {
        'height': null,
        'display': 'flex',
        'flexDirection': 'row'
    };
    var9.height = var13;
    var9.paddingHorizontal = var11;
    var3.row = var9;
    var9 = {
        'flex': 1,
        'display': 'flex',
        'flexDirection': 'row',
        'alignItems': 'center',
        'paddingTop': 16,
        'paddingBottom': 8
    };
    var9.backgroundColor = var12;
    var9.paddingHorizontal = var11;
    var3.sectionHeader = var9;
    var9 = {
        'height': 16,
        'width': 16,
        'borderRadius': 8,
        'marginRight': 4
    };
    var3.sectionIcon = var9;
    var9 = {};
    var9.marginLeft = var10;
    var3.soundButtonNotFirst = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot9 = var3;
    var3 = function arg0() {
        _fun68673: for (var _fun68673_ip = 0;;) switch (_fun68673_ip) {
            case 0:
                var0 = arg0;
                var8 = var0.row;
                var7 = var0.section;
                var _closure2_slot0 = var7;
                var1 = var0.channel;
                var _closure2_slot1 = var1;
                var4 = undefined;
                var _closure2_slot3 = var4;
                var0 = _closure1_slot9;
                var10 = var0.bind(var4)();
                var _closure2_slot2 = var10;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 10;
                var0 = var3[var0];
                var9 = var2.bind(var4)(var0);
                var3 = var9.useStateFromStores;
                var0 = _closure1_slot5;
                var2 = new Array(1);
                var2[0] = var0;
                var0 = function() { // Environment: var6
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 11;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.canUseSoundboardEverywhere;
                    var3 = _closure1_slot5;
                    var0 = var3.getCurrentUser;
                    var0 = var0.bind(var3)();
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var2 = var3.bind(var9)(var2, var0);
                var0 = null;
                if (!(var0 != var7)) {
                    _fun68673_ip = 288;
                    continue _fun68673
                }
            case 109:
                var9 = !var2;
                if (!var9) {
                    _fun68673_ip = 164;
                    continue _fun68673
                }
            case 115:
                var3 = _closure1_slot0;
                var11 = _closure1_slot2;
                var2 = 12;
                var2 = var11[var2];
                var11 = var3.bind(var4)(var2);
                var3 = var11.isSoundboardSectionNitroLocked;
                var2 = var1.guild_id;
                var1 = var7.category;
                var1 = var1.categoryInfo;
                var9 = var3.bind(var11)(var2, var1);
            case 164:
                _closure2_slot3 = var9;
                var3 = _closure1_slot7;
                var2 = _closure1_slot4;
                var1 = {};
                var11 = var10.row;
                var10 = new Array(1);
                var10[0] = var11;
                var1.style = var10;
                if (!var9) {
                    _fun68673_ip = 237;
                    continue _fun68673
                }
            case 199:
                var11 = _closure1_slot6;
                var10 = _closure1_slot0;
                var12 = _closure1_slot2;
                var5 = 13;
                var5 = var12[var5];
                var5 = var10.bind(var4)(var5);
                var10 = var5.PremiumUpsellGradientBackground;
                var5 = {};
                var9 = var11.bind(var4)(var10, var5);
            case 237:
                var5 = new Array(2);
                var5[0] = var9;
                var7 = var7.soundsByRow;
                var8 = var7[var8];
                var7 = var8.map;
                var6 = function(arg0, arg1) { // Environment: var6
                    _fun68675: for (var _fun68675_ip = 0;;) switch (_fun68675_ip) {
                        case 0:
                            var0 = arg0;
                            var3 = var0.type;
                            var5 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var6 = 7;
                            var2 = var2[var6];
                            var4 = undefined;
                            var2 = var5.bind(var4)(var2);
                            var2 = var2.SoundboardSoundItemType;
                            var2 = var2.SOUND;
                            if (!(var2 !== var3)) {
                                _fun68675_ip = 120;
                                continue _fun68675
                            }
                        case 49:
                            var5 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var2 = var2[var6];
                            var2 = var5.bind(var4)(var2);
                            var2 = var2.SoundboardSoundItemType;
                            var2 = var2.ADD_SOUND;
                            if (!(var2 !== var3)) {
                                _fun68675_ip = 84;
                                continue _fun68675
                            }
                        case 82:
                            return var4;
                        case 84:
                            var2 = global;
                            var5 = var2.Error;
                            var2 = var5.prototype;
                            var3 = Object.create(var2, {
                                constructor: {
                                    value: var5
                                }
                            });
                            var11 = 'ADD_SOUND Not implemented';
                            var12 = var3;
                            var2 = new var12[var5](var11, var10);
                            var2 = var2 instanceof Object ? var2 : var3;
                            throw var2;
                        case 120:
                            var0 = var0.sound;
                            var3 = _closure1_slot6;
                            var2 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var1 = 14;
                            var1 = var5[var1];
                            var1 = var2.bind(var4)(var1);
                            var2 = var1.SoundButton;
                            var1 = {};
                            var1.sound = var0;
                            var6 = _closure2_slot1;
                            var1.channel = var6;
                            var7 = arg1;
                            var6 = 0;
                            var7 = var7 > var6;
                            var6 = null;
                            if (!var7) {
                                _fun68675_ip = 198;
                                continue _fun68675
                            }
                        case 188:
                            var7 = _closure2_slot2;
                            var6 = var7.soundButtonNotFirst;
                        case 198:
                            var1.style = var6;
                            var6 = _closure2_slot3;
                            var1.isSectionLocked = var6;
                            var5 = _closure2_slot0;
                            var5 = var5.category;
                            var8 = var5.key;
                            var7 = var0.soundId;
                            var0 = global;
                            var0 = var0.HermesInternal;
                            var6 = var0.concat;
                            var5 = '';
                            var0 = '-';
                            var0 = var6.bind(var5)(var8, var0, var7);
                            var0 = var3.bind(var4)(var2, var1, var0);
                            return var0;
                    }
                };
                var6 = var7.bind(var8)(var6);
                var5[1] = var6;
                var1.children = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            case 288:
                return var0;
        }
    };
    var _closure1_slot10 = var3;
    var3 = var6.memo;
    var1 = function(arg0) { // Environment: var1
        _fun68676: for (var _fun68676_ip = 0;;) switch (_fun68676_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.channel;
                var _closure2_slot0 = var1;
                var5 = var0.insetBottom;
                var3 = undefined;
                if (!(var5 === var3)) {
                    _fun68676_ip = 28;
                    continue _fun68676
                }
            case 26:
                var5 = 0;
            case 28:
                var7 = var0.listRef;
                var2 = var0.scrollPosition;
                var _closure2_slot1 = var2;
                var2 = var0.onScroll;
                var _closure2_slot2 = var2;
                var2 = var0.setCategoryIndex;
                var _closure2_slot3 = var2;
                var2 = var0.shouldShowPremiumUpsell;
                var _closure2_slot4 = var2;
                var10 = var0.categories;
                var _closure2_slot5 = var3;
                var _closure2_slot6 = var3;
                var _closure2_slot7 = var3;
                var _closure2_slot8 = var3;
                var _closure2_slot9 = var3;
                var _closure2_slot10 = var3;
                var0 = function arg0, arg1() {
                    _fun68677: for (var _fun68677_ip = 0;;) switch (_fun68677_ip) {
                        case 0:
                            var0 = global;
                            var2 = var0.Math;
                            var1 = var2.round;
                            var0 = arg0;
                            var5 = var1.bind(var2)(var0);
                            var0 = _closure2_slot7;
                            var0 = var0.length;
                            var7 = 0;
                            var1 = var7 < var0;
                            var0 = 0;
                            if (!var1) {
                                _fun68677_ip = 116;
                                continue _fun68677
                            }
                        case 44:
                            var1 = _closure2_slot7;
                            var2 = var1[var7];
                            var1 = arg1;
                            var3 = var1 + var2;
                            var6 = var5 >= var3;
                            var2 = 0;
                            var1 = 0;
                            var0 = 0;
                            if (!var6) {
                                _fun68677_ip = 116;
                                continue _fun68677
                            }
                        case 72:
                            var6 = var2 + 1;
                            var1 = var1 + 1;
                            var7 = _closure2_slot7;
                            var7 = var7.length;
                            var0 = var6;
                            if (!(var1 < var7)) {
                                _fun68677_ip = 116;
                                continue _fun68677
                            }
                        case 94:
                            var7 = _closure2_slot7;
                            var7 = var7[var1];
                            var3 = var3 + var7;
                            var2 = var6;
                            var0 = var2;
                            if (var5 >= var3) {
                                _fun68677_ip = 72;
                                continue _fun68677
                            }
                        case 116:
                            return var0;
                    }
                };
                var _closure2_slot11 = var0;
                var0 = function arg0() {
                    _fun68678: for (var _fun68678_ip = 0;;) switch (_fun68678_ip) {
                        case 0:
                            var4 = arg0;
                            var0 = var4.category;
                            var0 = var0.categoryInfo;
                            var1 = var0.type;
                            var2 = _closure1_slot0;
                            var0 = _closure1_slot2;
                            var5 = 7;
                            var0 = var0[var5];
                            var3 = undefined;
                            var0 = var2.bind(var3)(var0);
                            var0 = var0.SoundboardSoundGridSectionType;
                            var0 = var0.GUILD;
                            if (!(var0 !== var1)) {
                                _fun68678_ip = 512;
                                continue _fun68678
                            }
                        case 64:
                            var2 = _closure1_slot0;
                            var0 = _closure1_slot2;
                            var0 = var0[var5];
                            var0 = var2.bind(var3)(var0);
                            var0 = var0.SoundboardSoundGridSectionType;
                            var0 = var0.DEFAULTS;
                            if (!(var0 !== var1)) {
                                _fun68678_ip = 445;
                                continue _fun68678
                            }
                        case 100:
                            var2 = _closure1_slot0;
                            var0 = _closure1_slot2;
                            var0 = var0[var5];
                            var0 = var2.bind(var3)(var0);
                            var0 = var0.SoundboardSoundGridSectionType;
                            var0 = var0.FAVORITES;
                            if (!(var0 !== var1)) {
                                _fun68678_ip = 378;
                                continue _fun68678
                            }
                        case 136:
                            var2 = _closure1_slot0;
                            var0 = _closure1_slot2;
                            var0 = var0[var5];
                            var0 = var2.bind(var3)(var0);
                            var0 = var0.SoundboardSoundGridSectionType;
                            var0 = var0.RECENTLY_HEARD;
                            if (!(var0 !== var1)) {
                                _fun68678_ip = 311;
                                continue _fun68678
                            }
                        case 172:
                            var2 = _closure1_slot0;
                            var0 = _closure1_slot2;
                            var0 = var0[var5];
                            var0 = var2.bind(var3)(var0);
                            var0 = var0.SoundboardSoundGridSectionType;
                            var0 = var0.FREQUENTLY_USED;
                            if (!(var0 !== var1)) {
                                _fun68678_ip = 244;
                                continue _fun68678
                            }
                        case 205:
                            var2 = _closure1_slot0;
                            var0 = _closure1_slot2;
                            var0 = var0[var5];
                            var0 = var2.bind(var3)(var0);
                            var0 = var0.SoundboardSoundGridSectionType;
                            var0 = var0.SEARCH;
                            if (!(var0 !== var1)) {
                                _fun68678_ip = 240;
                                continue _fun68678
                            }
                        case 238:
                            return var3;
                        case 240:
                            var0 = null;
                            return var0;
                        case 244:
                            var2 = _closure1_slot6;
                            var7 = _closure1_slot1;
                            var8 = _closure1_slot2;
                            var0 = 19;
                            var0 = var8[var0];
                            var1 = var7.bind(var3)(var0);
                            var0 = {};
                            var5 = 23;
                            var5 = var8[var5];
                            var5 = var7.bind(var3)(var5);
                            var0.source = var5;
                            var5 = _closure2_slot5;
                            var5 = var5.sectionIcon;
                            var0.style = var5;
                            var0 = var2.bind(var3)(var1, var0);
                            return var0;
                        case 311:
                            var2 = _closure1_slot6;
                            var7 = _closure1_slot1;
                            var8 = _closure1_slot2;
                            var0 = 19;
                            var0 = var8[var0];
                            var1 = var7.bind(var3)(var0);
                            var0 = {};
                            var5 = 22;
                            var5 = var8[var5];
                            var5 = var7.bind(var3)(var5);
                            var0.source = var5;
                            var5 = _closure2_slot5;
                            var5 = var5.sectionIcon;
                            var0.style = var5;
                            var0 = var2.bind(var3)(var1, var0);
                            return var0;
                        case 378:
                            var2 = _closure1_slot6;
                            var7 = _closure1_slot1;
                            var8 = _closure1_slot2;
                            var0 = 19;
                            var0 = var8[var0];
                            var1 = var7.bind(var3)(var0);
                            var0 = {};
                            var5 = 21;
                            var5 = var8[var5];
                            var5 = var7.bind(var3)(var5);
                            var0.source = var5;
                            var5 = _closure2_slot5;
                            var5 = var5.sectionIcon;
                            var0.style = var5;
                            var0 = var2.bind(var3)(var1, var0);
                            return var0;
                        case 445:
                            var2 = _closure1_slot6;
                            var7 = _closure1_slot1;
                            var8 = _closure1_slot2;
                            var0 = 19;
                            var0 = var8[var0];
                            var1 = var7.bind(var3)(var0);
                            var0 = {};
                            var5 = 20;
                            var5 = var8[var5];
                            var5 = var7.bind(var3)(var5);
                            var0.source = var5;
                            var5 = _closure2_slot5;
                            var5 = var5.sectionIcon;
                            var0.style = var5;
                            var0 = var2.bind(var3)(var1, var0);
                            return var0;
                        case 512:
                            var2 = _closure1_slot6;
                            var1 = _closure1_slot1;
                            var7 = _closure1_slot2;
                            var5 = 18;
                            var0 = var7[var5];
                            var1 = var1.bind(var3)(var0);
                            var0 = {};
                            var6 = _closure1_slot0;
                            var5 = var7[var5];
                            var5 = var6.bind(var3)(var5);
                            var5 = var5.GuildIconSizes;
                            var5 = var5.XXSMALL_12;
                            var0.size = var5;
                            var4 = var4.category;
                            var4 = var4.categoryInfo;
                            var4 = var4.guild;
                            var0.guild = var4;
                            var4 = _closure2_slot5;
                            var4 = var4.sectionIcon;
                            var0.style = var4;
                            var0 = var2.bind(var3)(var1, var0);
                            return var0;
                    }
                };
                var _closure2_slot12 = var0;
                var0 = function arg0() {
                    _fun68679: for (var _fun68679_ip = 0;;) switch (_fun68679_ip) {
                        case 0:
                            var5 = arg0;
                            var0 = _closure2_slot10;
                            var0 = !var0;
                            if (!var0) {
                                _fun68679_ip = 30;
                                continue _fun68679
                            }
                        case 16:
                            var2 = _closure2_slot6;
                            var3 = var2[var5];
                            var2 = null;
                            var0 = var2 != var3;
                        case 30:
                            if (!var0) {
                                _fun68679_ip = 99;
                                continue _fun68679
                            }
                        case 33:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var2 = 12;
                            var3 = var3[var2];
                            var2 = undefined;
                            var4 = var4.bind(var2)(var3);
                            var3 = var4.isSoundboardSectionNitroLocked;
                            var2 = _closure2_slot0;
                            var2 = var2.guild_id;
                            var1 = _closure2_slot6;
                            var1 = var1[var5];
                            var1 = var1.category;
                            var1 = var1.categoryInfo;
                            var0 = var3.bind(var4)(var2, var1);
                        case 99:
                            return var0;
                    }
                };
                var _closure2_slot13 = var0;
                var0 = function arg0() {
                    _fun68680: for (var _fun68680_ip = 0;;) switch (_fun68680_ip) {
                        case 0:
                            var3 = arg0;
                            var2 = _closure2_slot13;
                            var1 = 1;
                            var0 = var3 - var1;
                            var4 = undefined;
                            var0 = var2.bind(var4)(var0);
                            var5 = var2.bind(var4)(var3);
                            var1 = var3 + var1;
                            var2 = var2.bind(var4)(var1);
                            if (var5) {
                                _fun68680_ip = 84;
                                continue _fun68680
                            }
                        case 41:
                            if (!var2) {
                                _fun68680_ip = 84;
                                continue _fun68680
                            }
                        case 44:
                            if (var0) {
                                _fun68680_ip = 84;
                                continue _fun68680
                            }
                        case 47:
                            var1 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var0 = 24;
                            var0 = var3[var0];
                            var0 = var1.bind(var4)(var0);
                            var0 = var0.PremiumUpsellSectionDividerPosition;
                            var0 = var0.START;
                            _fun68680_ip = 132;
                            continue _fun68680;
                        case 84:
                            var1 = null;
                            if (!var5) {
                                _fun68680_ip = 129;
                                continue _fun68680
                            }
                        case 89:
                            var1 = null;
                            if (var2) {
                                _fun68680_ip = 129;
                                continue _fun68680
                            }
                        case 94:
                            var3 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var2 = 24;
                            var2 = var5[var2];
                            var2 = var3.bind(var4)(var2);
                            var2 = var2.PremiumUpsellSectionDividerPosition;
                            var1 = var2.END;
                        case 129:
                            var0 = var1;
                        case 132:
                            return var0;
                    }
                };
                var _closure2_slot14 = var0;
                var2 = _closure1_slot9;
                var2 = var2.bind(var3)();
                _closure2_slot5 = var2;
                var2 = _closure1_slot0;
                var9 = _closure1_slot2;
                var6 = 15;
                var6 = var9[var6];
                var8 = var2.bind(var3)(var6);
                var6 = var8.useFontScale;
                var17 = var6.bind(var8)();
                var6 = 16;
                var6 = var9[var6];
                var8 = var2.bind(var3)(var6);
                var6 = var8.useSoundPickerListStyleConfig;
                var6 = var6.bind(var8)();
                var16 = var6.soundsPerRow;
                var8 = new Array(0);
                var6 = _closure1_slot11;
                var13 = var6.bind(var3)(var10);
                var11 = var13.bind(var3)();
                var6 = var11.done;
                var12 = global;
                if (var6) {
                    _fun68676_ip = 309;
                    continue _fun68676
                }
            case 248:
                var6 = var11.value;
                var6 = var6.items;
                var15 = var12.Math;
                var14 = var15.ceil;
                var6 = var6.length;
                var6 = var6 / var16;
                var14 = var14.bind(var15)(var6);
                var6 = var8.push;
                var6 = var6.bind(var8)(var14);
                var14 = var13.bind(var3)();
                var6 = var14.done;
                var11 = var14;
                if (!var6) {
                    _fun68676_ip = 248;
                    continue _fun68676
                }
            case 309:
                var12 = new Array(0);
                var6 = _closure1_slot11;
                var15 = var6.bind(var3)(var10);
                var10 = var15.bind(var3)();
                var6 = var10.done;
                var14 = 9;
                var13 = 18;
                var11 = 8;
                if (var6) {
                    _fun68676_ip = 442;
                    continue _fun68676
                }
            case 343:
                var22 = var10.value;
                var18 = _closure1_slot1;
                var6 = _closure1_slot2;
                var6 = var6[var14];
                var18 = var18.bind(var3)(var6);
                var6 = var22.items;
                var19 = var18.bind(var3)(var6, var16);
                var18 = var19.length;
                var6 = _closure1_slot8;
                var21 = var18 * var6;
                var20 = var13 * var17;
                var18 = var12.push;
                var6 = {};
                var6.category = var22;
                var20 = var20 + var11;
                var20 = var21 + var20;
                var6.height = var20;
                var6.soundsByRow = var19;
                var6 = var18.bind(var12)(var6);
                var18 = var15.bind(var3)();
                var6 = var18.done;
                var10 = var18;
                if (!var6) {
                    _fun68676_ip = 343;
                    continue _fun68676
                }
            case 442:
                _closure2_slot6 = var12;
                var11 = _closure1_slot3;
                var13 = var11.useMemo;
                var10 = new Array(1);
                var10[0] = var12;
                var6 = function() { // Environment: var4
                    var2 = _closure2_slot6;
                    var1 = var2.map;
                    var0 = function(arg0) { // Environment: var0
                        var0 = arg0;
                        var0 = var0.height;
                        return var0;
                    };
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var6 = var13.bind(var11)(var6, var10);
                _closure2_slot7 = var6;
                var10 = var11.useCallback;
                var6 = new Array(2);
                var6[0] = var12;
                var6[1] = var1;
                var1 = function(arg0, arg1) { // Environment: var4
                    var3 = _closure1_slot6;
                    var2 = _closure1_slot10;
                    var1 = {};
                    var0 = arg1;
                    var1.row = var0;
                    var5 = _closure2_slot6;
                    var4 = arg0;
                    var4 = var5[var4];
                    var1.section = var4;
                    var0 = _closure2_slot0;
                    var1.channel = var0;
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2, var1);
                    return var0;
                };
                var6 = var10.bind(var11)(var1, var6);
                var1 = 17;
                var10 = var9[var1];
                var12 = var2.bind(var3)(var10);
                var11 = var12.debounce;
                var10 = function(arg0) { // Environment: var4
                    var4 = _closure2_slot11;
                    var0 = undefined;
                    var3 = arg0;
                    var2 = 0;
                    var2 = var4.bind(var0)(var3, var2);
                    var1 = _closure2_slot3;
                    var1 = var1.bind(var0)(var2);
                    return var0;
                };
                var10 = var11.bind(var12)(var10);
                _closure2_slot8 = var10;
                var1 = var9[var1];
                var11 = var2.bind(var3)(var1);
                var10 = var11.debounce;
                var1 = function(arg0, arg1) { // Environment: var4
                    var4 = _closure2_slot11;
                    var0 = arg1;
                    var2 = -var0;
                    var0 = 2;
                    var3 = var2 / var0;
                    var0 = undefined;
                    var2 = arg0;
                    var7 = var4.bind(var0)(var2, var3);
                    var3 = _closure2_slot4;
                    var2 = var3.set;
                    var4 = _closure2_slot13;
                    var5 = global;
                    var6 = var5.Math;
                    var5 = var6.min;
                    var1 = _closure2_slot7;
                    var8 = var1.length;
                    var1 = 1;
                    var1 = var8 - var1;
                    var1 = var5.bind(var6)(var7, var1);
                    var1 = var4.bind(var0)(var1);
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var1 = var10.bind(var11)(var1);
                _closure2_slot9 = var1;
                var1 = 10;
                var1 = var9[var1];
                var11 = var2.bind(var3)(var1);
                var10 = var11.useStateFromStores;
                var1 = _closure1_slot5;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var4
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 11;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.canUseSoundboardEverywhere;
                    var3 = _closure1_slot5;
                    var0 = var3.getCurrentUser;
                    var0 = var0.bind(var3)();
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var1 = var10.bind(var11)(var2, var1);
                _closure2_slot10 = var1;
                var2 = _closure1_slot6;
                var1 = _closure1_slot1;
                var0 = 25;
                var0 = var9[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var9 = function arg0() {
                    var3 = _closure2_slot9;
                    var0 = arg0;
                    var0 = var0.nativeEvent;
                    var0 = var0.layout;
                    var2 = var0.height;
                    var1 = undefined;
                    var0 = 0;
                    var0 = var3.bind(var1)(var0, var2);
                    return var0;
                };
                var0.onLayout = var9;
                var0.sections = var8;
                var8 = function arg0() {
                    _fun68688: for (var _fun68688_ip = 0;;) switch (_fun68688_ip) {
                        case 0:
                            var1 = _closure2_slot6;
                            var0 = arg0;
                            var3 = var1[var0];
                            var1 = null;
                            if (!(var1 != var3)) {
                                _fun68688_ip = 44;
                                continue _fun68688
                            }
                        case 20:
                            var2 = _closure1_slot13;
                            var0 = undefined;
                            var0 = var2.bind(var0)(var3);
                            var1 = var1 == var0;
                            var0 = 42;
                            if (!var1) {
                                _fun68688_ip = 46;
                                continue _fun68688
                            }
                        case 44:
                            var0 = 0;
                        case 46:
                            return var0;
                    }
                };
                var0.sectionSize = var8;
                var8 = function arg0() {
                    _fun68689: for (var _fun68689_ip = 0;;) switch (_fun68689_ip) {
                        case 0:
                            var1 = _closure2_slot6;
                            var0 = arg0;
                            var1 = var1[var0];
                            var0 = null;
                            var1 = var0 == var1;
                            var0 = 0;
                            if (var1) {
                                _fun68689_ip = 32;
                                continue _fun68689
                            }
                        case 25:
                            var0 = _closure1_slot8;
                        case 32:
                            return var0;
                    }
                };
                var0.itemSize = var8;
                var8 = function arg0() {
                    _fun68690: for (var _fun68690_ip = 0;;) switch (_fun68690_ip) {
                        case 0:
                            var1 = _closure2_slot14;
                            var4 = undefined;
                            var0 = arg0;
                            var1 = var1.bind(var4)(var0);
                            var0 = null;
                            var1 = var0 == var1;
                            var0 = 0;
                            if (var1) {
                                _fun68690_ip = 76;
                                continue _fun68690
                            }
                        case 28:
                            var3 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var1 = 24;
                            var2 = var5[var1];
                            var2 = var3.bind(var4)(var2);
                            var2 = var2.PREMIUM_UPSELL_SECTION_DIVIDER_HEIGHT;
                            var1 = var5[var1];
                            var1 = var3.bind(var4)(var1);
                            var1 = var1.PREMIUM_UPSELL_SECTION_DIVIDER_MARGIN;
                            var0 = var2 + var1;
                        case 76:
                            return var0;
                    }
                };
                var0.sectionFooterSize = var8;
                var0.ref = var7;
                var0.renderItem = var6;
                var6 = function arg0() {
                    _fun68691: for (var _fun68691_ip = 0;;) switch (_fun68691_ip) {
                        case 0:
                            var2 = arg0;
                            var0 = _closure2_slot6;
                            var0 = var0[var2];
                            var1 = _closure2_slot13;
                            var4 = undefined;
                            var7 = var1.bind(var4)(var2);
                            var3 = _closure1_slot6;
                            var2 = _closure1_slot4;
                            var1 = {};
                            var6 = _closure1_slot7;
                            var5 = {};
                            var9 = _closure2_slot5;
                            var9 = var9.sectionHeader;
                            var5.style = var9;
                            var9 = var7;
                            if (!var9) {
                                _fun68691_ip = 102;
                                continue _fun68691
                            }
                        case 64:
                            var12 = _closure1_slot6;
                            var10 = _closure1_slot0;
                            var13 = _closure1_slot2;
                            var7 = 13;
                            var7 = var13[var7];
                            var7 = var10.bind(var4)(var7);
                            var10 = var7.PremiumUpsellGradientBackground;
                            var7 = {};
                            var9 = var12.bind(var4)(var10, var7);
                        case 102:
                            var7 = new Array(3);
                            var7[0] = var9;
                            var8 = _closure2_slot12;
                            var8 = var8.bind(var4)(var0);
                            var7[1] = var8;
                            var10 = _closure1_slot6;
                            var9 = _closure1_slot0;
                            var12 = _closure1_slot2;
                            var8 = 26;
                            var8 = var12[var8];
                            var8 = var9.bind(var4)(var8);
                            var9 = var8.Text;
                            var8 = {
                                'accessibilityRole': 'header',
                                'lineClamp': 1,
                                'variant': 'heading-sm/semibold'
                            };
                            var11 = _closure1_slot13;
                            var11 = var11.bind(var4)(var0);
                            var8.children = var11;
                            var8 = var10.bind(var4)(var9, var8);
                            var7[2] = var8;
                            var5.children = var7;
                            var5 = var6.bind(var4)(var2, var5);
                            var1.children = var5;
                            var0 = var0.category;
                            var0 = var0.key;
                            var0 = var3.bind(var4)(var2, var1, var0);
                            return var0;
                    }
                };
                var0.renderSection = var6;
                var6 = function arg0() {
                    _fun68692: for (var _fun68692_ip = 0;;) switch (_fun68692_ip) {
                        case 0:
                            var1 = _closure2_slot14;
                            var4 = undefined;
                            var0 = arg0;
                            var5 = var1.bind(var4)(var0);
                            var0 = null;
                            var1 = var0 != var5;
                            if (!var1) {
                                _fun68692_ip = 65;
                                continue _fun68692
                            }
                        case 26:
                            var3 = _closure1_slot6;
                            var2 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var1 = 24;
                            var1 = var6[var1];
                            var2 = var2.bind(var4)(var1);
                            var1 = {};
                            var1.position = var5;
                            var0 = var3.bind(var4)(var2, var1);
                        case 65:
                            return var0;
                    }
                };
                var0.renderSectionFooter = var6;
                var0.insetEnd = var5;
                var4 = function arg0() {
                    _fun68693: for (var _fun68693_ip = 0;;) switch (_fun68693_ip) {
                        case 0:
                            var2 = arg0;
                            var3 = var2.nativeEvent;
                            var0 = var3.contentOffset;
                            var6 = var0.y;
                            var4 = _closure2_slot8;
                            var0 = undefined;
                            var4 = var4.bind(var0)(var6);
                            var5 = _closure2_slot9;
                            var4 = var3.layoutMeasurement;
                            var4 = var4.height;
                            var4 = var5.bind(var0)(var6, var4);
                            var5 = var3.layoutMeasurement;
                            var4 = var3.contentOffset;
                            var3 = var3.contentSize;
                            var5 = var5.height;
                            var4 = var4.y;
                            var4 = var5 + var4;
                            var5 = var3.height;
                            var3 = 20;
                            var3 = var5 - var3;
                            if (!(!(var4 >= var3))) {
                                _fun68693_ip = 144;
                                continue _fun68693
                            }
                        case 103:
                            var3 = _closure2_slot1;
                            var4 = null;
                            if (!(var4 != var3)) {
                                _fun68693_ip = 127;
                                continue _fun68693
                            }
                        case 113:
                            var5 = _closure2_slot1;
                            var3 = var5.set;
                            var3 = var3.bind(var5)(var6);
                        case 127:
                            var3 = _closure2_slot2;
                            if (!(var4 != var3)) {
                                _fun68693_ip = 144;
                                continue _fun68693
                            }
                        case 135:
                            var1 = _closure2_slot2;
                            var1 = var1.bind(var0)(var2);
                        case 144:
                            return var0;
                    }
                };
                var0.onScroll = var4;
                var4 = 'handled';
                var0.keyboardShouldPersistTaps = var4;
                var4 = true;
                var0.optimizeListItemRender = var4;
                var0.inActionSheet = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 27;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/soundboard/native/SoundboardSoundPickerList.tsx';
    var3 = var4.bind(var5)(var3);
    var2.SoundboardSoundPickerList = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1621, 8530, 4934, 33, 1297, 4801, 1234, 8585, 566, 3109, 7649, 8587, 8588, 4090, 8590, 22, 7415, 4086, 8600, 8601, 8602, 8603, 8604, 6476, 3941, 2]);