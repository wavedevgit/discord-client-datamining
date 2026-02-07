// modules/connections/native/ConnectionMetadataVanityItems.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var5;
    var0 = function arg0, arg1() {
        _fun78761: for (var _fun78761_ip = 0;;) switch (_fun78761_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun78761_ip = 46;
                    continue _fun78761
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun78761_ip = 55;
                    continue _fun78761
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun78761_ip = 345;
                    continue _fun78761
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun78761_ip = 323;
                    continue _fun78761
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun78761_ip = 283;
                    continue _fun78761
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun78761_ip = 270;
                    continue _fun78761
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
                    _fun78761_ip = 163;
                    continue _fun78761
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun78761_ip = 179;
                    continue _fun78761
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun78761_ip = 249;
                    continue _fun78761
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun78761_ip = 249;
                    continue _fun78761
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun78761_ip = 234;
                    continue _fun78761
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun78761_ip = 247;
                    continue _fun78761
                }
            case 234:
                var8 = _closure1_slot10;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun78761_ip = 265;
                continue _fun78761;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun78761_ip = 283;
                continue _fun78761;
            case 270:
                var6 = _closure1_slot10;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun78761_ip = 323;
                    continue _fun78761
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
                    _fun78761_ip = 330;
                    continue _fun78761
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun78762: for (var _fun78762_ip = 0;;) switch (_fun78762_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun78762_ip = 56;
                                continue _fun78762
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
                            _fun78762_ip = 67;
                            continue _fun78762;
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
    var _closure1_slot9 = var0;
    var0 = function arg0, arg1() {
        _fun78763: for (var _fun78763_ip = 0;;) switch (_fun78763_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun78763_ip = 23;
                    continue _fun78763
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun78763_ip = 33;
                    continue _fun78763
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
                    _fun78763_ip = 70;
                    continue _fun78763
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun78763_ip = 55;
                    continue _fun78763
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot10 = var0;
    var0 = function arg0() {
        var0 = arg0;
        var7 = var0.style;
        var1 = _closure1_slot8;
        var4 = undefined;
        var5 = var1.bind(var4)();
        var3 = _closure1_slot6;
        var2 = _closure1_slot14;
        var1 = {};
        var8 = var5.paypalVerifiedTag;
        var6 = new Array(2);
        var6[0] = var8;
        var6[1] = var7;
        var1.style = var6;
        var9 = _closure1_slot0;
        var10 = _closure1_slot2;
        var6 = 6;
        var7 = var10[var6];
        var7 = var9.bind(var4)(var7);
        var8 = var7.intl;
        var7 = var8.string;
        var6 = var10[var6];
        var6 = var9.bind(var4)(var6);
        var6 = var6.t;
        var6 = var6.IhXLyx;
        var6 = var7.bind(var8)(var6);
        var1.label = var6;
        var5 = var5.paypalVerifiedTagText;
        var1.textStyle = var5;
        var0 = _closure1_slot4;
        var0 = var0.PAYPAL_VERIFIED;
        var0 = var3.bind(var4)(var2, var1, var0);
        return var0;
    };
    var _closure1_slot11 = var0;
    var0 = function arg0() {
        _fun78765: for (var _fun78765_ip = 0;;) switch (_fun78765_ip) {
            case 0:
                var0 = arg0;
                var7 = var0.count;
                var10 = var0.label;
                var6 = var0.style;
                var4 = var0.percent;
                var1 = _closure1_slot8;
                var3 = undefined;
                var5 = var1.bind(var3)();
                var2 = _closure1_slot0;
                var8 = _closure1_slot2;
                var1 = 10;
                var1 = var8[var1];
                var2 = var2.bind(var3)(var1);
                var1 = var2.shortenAndLocalizeNumber;
                var2 = var1.bind(var2)(var7);
                var1 = '';
                if (!var4) {
                    _fun78765_ip = 80;
                    continue _fun78765
                }
            case 76:
                var1 = '%';
            case 80:
                var9 = var2 + var1;
                var2 = 'string';
                var1 = typeof var10;
                if (!(var2 !== var1)) {
                    _fun78765_ip = 139;
                    continue _fun78765
                }
            case 95:
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 6;
                var1 = var4[var1];
                var1 = var2.bind(var3)(var1);
                var4 = var1.intl;
                var2 = var4.format;
                var1 = {};
                var1.value = var9;
                var4 = var2.bind(var4)(var10, var1);
                _fun78765_ip = 205;
                continue _fun78765;
            case 139:
                var2 = _closure1_slot0;
                var11 = _closure1_slot2;
                var1 = 6;
                var7 = var11[var1];
                var7 = var2.bind(var3)(var7);
                var8 = var7.intl;
                var7 = var8.format;
                var1 = var11[var1];
                var1 = var2.bind(var3)(var1);
                var1 = var1.t;
                var2 = var1.HLoinF;
                var1 = {};
                var1.name = var10;
                var1.value = var9;
                var4 = var7.bind(var8)(var2, var1);
            case 205:
                var2 = _closure1_slot6;
                var1 = _closure1_slot0;
                var7 = _closure1_slot2;
                var0 = 11;
                var0 = var7[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.Text;
                var0 = {
                    'variant': 'text-xs/normal',
                    'color': 'text-muted'
                };
                var7 = var5.connectedAccountVanityMetadata;
                var5 = new Array(2);
                var5[0] = var7;
                var5[1] = var6;
                var0.style = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot12 = var0;
    var0 = function arg0() {
        var0 = arg0;
        var8 = var0.label;
        var13 = var0.imageSrc;
        var12 = var0.imageAlt;
        var9 = var0.style;
        var0 = _closure1_slot8;
        var3 = undefined;
        var11 = var0.bind(var3)();
        var2 = _closure1_slot7;
        var1 = _closure1_slot3;
        var0 = {};
        var6 = var11.connectedAccountVanityMetadata;
        var4 = new Array(3);
        var4[0] = var6;
        var6 = var11.connectedAccountVanityMetadataItem;
        var4[1] = var6;
        var4[2] = var9;
        var0.style = var4;
        var7 = _closure1_slot6;
        var6 = _closure1_slot1;
        var10 = _closure1_slot2;
        var4 = 12;
        var4 = var10[var4];
        var6 = var6.bind(var3)(var4);
        var4 = {};
        var4.source = var13;
        var4.accessibilityLabel = var12;
        var11 = var11.connectedAccountVanityMetadataItemIcon;
        var4.style = var11;
        var11 = true;
        var4.disableColor = var11;
        var6 = var7.bind(var3)(var6, var4);
        var4 = new Array(2);
        var4[0] = var6;
        var7 = _closure1_slot6;
        var6 = _closure1_slot0;
        var5 = 11;
        var5 = var10[var5];
        var5 = var6.bind(var3)(var5);
        var6 = var5.Text;
        var5 = {
            'variant': 'text-xs/normal',
            'color': 'text-muted'
        };
        var5.style = var9;
        var5.children = var8;
        var5 = var7.bind(var3)(var6, var5);
        var4[1] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot13 = var0;
    var0 = function arg0() {
        var0 = arg0;
        var7 = var0.label;
        var6 = var0.style;
        var8 = var0.textStyle;
        var0 = _closure1_slot8;
        var3 = undefined;
        var9 = var0.bind(var3)();
        var2 = _closure1_slot6;
        var1 = _closure1_slot3;
        var0 = {};
        var10 = var9.connectedAccountVanityMetadata;
        var5 = new Array(3);
        var5[0] = var10;
        var9 = var9.connectedAccountVanityMetadataTag;
        var5[1] = var9;
        var5[2] = var6;
        var0.style = var5;
        var6 = _closure1_slot6;
        var5 = _closure1_slot0;
        var9 = _closure1_slot2;
        var4 = 11;
        var4 = var9[var4];
        var4 = var5.bind(var3)(var4);
        var5 = var4.Text;
        var4 = {
            'variant': 'text-xs/normal',
            'color': 'text-muted'
        };
        var4.style = var8;
        var4.children = var7;
        var4 = var6.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot14 = var0;
    var0 = function arg0() {
        var0 = arg0;
        var12 = var0.date;
        var8 = var0.label;
        var11 = var0.locale;
        var5 = var0.style;
        var1 = _closure1_slot8;
        var3 = undefined;
        var4 = var1.bind(var3)();
        var2 = _closure1_slot6;
        var10 = _closure1_slot0;
        var13 = _closure1_slot2;
        var0 = 11;
        var0 = var13[var0];
        var0 = var10.bind(var3)(var0);
        var1 = var0.Text;
        var0 = {
            'variant': 'text-xs/normal',
            'color': 'text-muted'
        };
        var6 = var4.connectedAccountVanityMetadata;
        var4 = new Array(2);
        var4[0] = var6;
        var4[1] = var5;
        var0.style = var4;
        var4 = 6;
        var5 = var13[var4];
        var5 = var10.bind(var3)(var5);
        var7 = var5.intl;
        var6 = var7.format;
        var4 = var13[var4];
        var4 = var10.bind(var3)(var4);
        var4 = var4.t;
        var5 = var4.HLoinF;
        var4 = {};
        var9 = 13;
        var9 = var13[var9];
        var10 = var10.bind(var3)(var9);
        var9 = var10.getCreatedAtDate;
        var9 = var9.bind(var10)(var12, var11);
        var4.value = var9;
        var4.name = var8;
        var4 = var6.bind(var7)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot15 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = arg3;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.MetadataFields;
    var _closure1_slot4 = var6;
    var3 = var3.MetadataItemTypes;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot6 = var6;
    var3 = var3.jsxs;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'marginTop': 4,
        'paddingRight': 8
    };
    var3.connectedAccountVanityMetadata = var8;
    var8 = {
        'flexDirection': 'row',
        'alignItems': 'center'
    };
    var3.connectedAccountVanityMetadataItem = var8;
    var8 = {
        'height': 18,
        'width': 18,
        'marginRight': 8
    };
    var3.connectedAccountVanityMetadataItemIcon = var8;
    var8 = {
        'backgroundColor': null,
        'borderRadius': null,
        'paddingHorizontal': 8,
        'paddingVertical': 1,
        'marginRight': 8
    };
    var9 = 5;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BORDER_SUBTLE;
    var8.backgroundColor = var11;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.radii;
    var11 = var11.md;
    var8.borderRadius = var11;
    var3.connectedAccountVanityMetadataTag = var8;
    var8 = {};
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.STATUS_POSITIVE_BACKGROUND;
    var8.backgroundColor = var11;
    var3.paypalVerifiedTag = var8;
    var8 = {};
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.WHITE;
    var8.color = var9;
    var3.paypalVerifiedTagText = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot8 = var3;
    var3 = 14;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/connections/native/ConnectionMetadataVanityItems.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        _fun78769: for (var _fun78769_ip = 0;;) switch (_fun78769_ip) {
            case 0:
                var8 = arg0;
                var7 = arguments[1];
                var6 = undefined;
                if (!(var7 === var6)) {
                    _fun78769_ip = 14;
                    continue _fun78769
                }
            case 12:
                var7 = undefined;
            case 14:
                var0 = new Array(0);
                var1 = global;
                var3 = var1.Number;
                var2 = _closure1_slot4;
                var2 = var2.REDDIT_TOTAL_KARMA;
                var4 = var8[var2];
                var2 = null;
                var9 = var2 != var4;
                var5 = -1;
                var2 = var5;
                if (!var9) {
                    _fun78769_ip = 64;
                    continue _fun78769
                }
            case 61:
                var2 = var4;
            case 64:
                var2 = var3.bind(var6)(var2);
                var3 = _closure1_slot4;
                var3 = var3.REDDIT_GOLD;
                var4 = var8[var3];
                var3 = _closure1_slot4;
                var3 = var3.REDDIT_MOD;
                var3 = var8[var3];
                if (!(var2 > var5)) {
                    _fun78769_ip = 184;
                    continue _fun78769
                }
            case 101:
                var5 = var0.push;
                var10 = _closure1_slot6;
                var9 = _closure1_slot12;
                var8 = {};
                var8.style = var7;
                var8.count = var2;
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var2 = 6;
                var2 = var12[var2];
                var2 = var11.bind(var6)(var2);
                var2 = var2.t;
                var2 = var2.SbCNox;
                var8.label = var2;
                var2 = _closure1_slot4;
                var2 = var2.REDDIT_TOTAL_KARMA;
                var2 = var10.bind(var6)(var9, var8, var2);
                var2 = var5.bind(var0)(var2);
            case 184:
                var2 = '1';
                if (!(var2 === var4)) {
                    _fun78769_ip = 296;
                    continue _fun78769
                }
            case 194:
                var5 = var0.push;
                var10 = _closure1_slot6;
                var9 = _closure1_slot14;
                var8 = {};
                var8.style = var7;
                var13 = _closure1_slot0;
                var14 = _closure1_slot2;
                var4 = 6;
                var11 = var14[var4];
                var11 = var13.bind(var6)(var11);
                var12 = var11.intl;
                var11 = var12.string;
                var4 = var14[var4];
                var4 = var13.bind(var6)(var4);
                var4 = var4.t;
                var4 = var4["06rDHU"];
                var4 = var11.bind(var12)(var4);
                var8.label = var4;
                var4 = _closure1_slot4;
                var4 = var4.REDDIT_GOLD;
                var4 = var10.bind(var6)(var9, var8, var4);
                var4 = var5.bind(var0)(var4);
            case 296:
                if (!(var2 === var3)) {
                    _fun78769_ip = 402;
                    continue _fun78769
                }
            case 300:
                var2 = var0.push;
                var5 = _closure1_slot6;
                var4 = _closure1_slot14;
                var3 = {};
                var3.style = var7;
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var7 = 6;
                var8 = var11[var7];
                var8 = var10.bind(var6)(var8);
                var9 = var8.intl;
                var8 = var9.string;
                var7 = var11[var7];
                var7 = var10.bind(var6)(var7);
                var7 = var7.t;
                var7 = var7.oWM95M;
                var7 = var8.bind(var9)(var7);
                var3.label = var7;
                var1 = _closure1_slot4;
                var1 = var1.REDDIT_MOD;
                var1 = var5.bind(var6)(var4, var3, var1);
                var1 = var2.bind(var0)(var1);
            case 402:
                return var0;
        }
    };
    var2.generateRedditMetadataItems = var3;
    var3 = function arg0() {
        _fun78770: for (var _fun78770_ip = 0;;) switch (_fun78770_ip) {
            case 0:
                var9 = arg0;
                var8 = arguments[1];
                var6 = undefined;
                if (!(var8 === var6)) {
                    _fun78770_ip = 14;
                    continue _fun78770
                }
            case 12:
                var8 = undefined;
            case 14:
                var0 = new Array(0);
                var5 = global;
                var7 = var5.Number;
                var2 = _closure1_slot4;
                var2 = var2.TWITTER_STATUSES_COUNT;
                var10 = var9[var2];
                var4 = null;
                var11 = var4 != var10;
                var2 = -1;
                var3 = var2;
                if (!var11) {
                    _fun78770_ip = 64;
                    continue _fun78770
                }
            case 61:
                var3 = var10;
            case 64:
                var3 = var7.bind(var6)(var3);
                var5 = var5.Number;
                var7 = _closure1_slot4;
                var7 = var7.TWITTER_FOLLOWERS_COUNT;
                var7 = var9[var7];
                var9 = var4 != var7;
                var4 = var2;
                if (!var9) {
                    _fun78770_ip = 102;
                    continue _fun78770
                }
            case 99:
                var4 = var7;
            case 102:
                var7 = var5.bind(var6)(var4);
                if (!(var3 > var2)) {
                    _fun78770_ip = 194;
                    continue _fun78770
                }
            case 111:
                var4 = var0.push;
                var10 = _closure1_slot6;
                var9 = _closure1_slot12;
                var5 = {};
                var5.style = var8;
                var5.count = var3;
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var3 = 6;
                var3 = var12[var3];
                var3 = var11.bind(var6)(var3);
                var3 = var3.t;
                var3 = var3.llwqqe;
                var5.label = var3;
                var3 = _closure1_slot4;
                var3 = var3.TWITTER_STATUSES_COUNT;
                var3 = var10.bind(var6)(var9, var5, var3);
                var3 = var4.bind(var0)(var3);
            case 194:
                if (!(var7 > var2)) {
                    _fun78770_ip = 281;
                    continue _fun78770
                }
            case 198:
                var2 = var0.push;
                var5 = _closure1_slot6;
                var4 = _closure1_slot12;
                var3 = {};
                var3.style = var8;
                var3.count = var7;
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var7 = 6;
                var7 = var9[var7];
                var7 = var8.bind(var6)(var7);
                var7 = var7.t;
                var7 = var7.LMNOUQ;
                var3.label = var7;
                var1 = _closure1_slot4;
                var1 = var1.TWITTER_FOLLOWERS_COUNT;
                var1 = var5.bind(var6)(var4, var3, var1);
                var1 = var2.bind(var0)(var1);
            case 281:
                return var0;
        }
    };
    var2.generateTwitterMetadataItems = var3;
    var3 = function arg0() {
        _fun78771: for (var _fun78771_ip = 0;;) switch (_fun78771_ip) {
            case 0:
                var9 = arg0;
                var8 = arguments[1];
                var6 = undefined;
                if (!(var8 === var6)) {
                    _fun78771_ip = 14;
                    continue _fun78771
                }
            case 12:
                var8 = undefined;
            case 14:
                var0 = new Array(0);
                var5 = global;
                var7 = var5.Number;
                var2 = _closure1_slot4;
                var2 = var2.BLUESKY_STATUSES_COUNT;
                var10 = var9[var2];
                var4 = null;
                var11 = var4 != var10;
                var2 = -1;
                var3 = var2;
                if (!var11) {
                    _fun78771_ip = 64;
                    continue _fun78771
                }
            case 61:
                var3 = var10;
            case 64:
                var3 = var7.bind(var6)(var3);
                var5 = var5.Number;
                var7 = _closure1_slot4;
                var7 = var7.BLUESKY_FOLLOWERS_COUNT;
                var7 = var9[var7];
                var9 = var4 != var7;
                var4 = var2;
                if (!var9) {
                    _fun78771_ip = 102;
                    continue _fun78771
                }
            case 99:
                var4 = var7;
            case 102:
                var7 = var5.bind(var6)(var4);
                if (!(var3 > var2)) {
                    _fun78771_ip = 194;
                    continue _fun78771
                }
            case 111:
                var4 = var0.push;
                var10 = _closure1_slot6;
                var9 = _closure1_slot12;
                var5 = {};
                var5.style = var8;
                var5.count = var3;
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var3 = 6;
                var3 = var12[var3];
                var3 = var11.bind(var6)(var3);
                var3 = var3.t;
                var3 = var3.thA2ir;
                var5.label = var3;
                var3 = _closure1_slot4;
                var3 = var3.BLUESKY_STATUSES_COUNT;
                var3 = var10.bind(var6)(var9, var5, var3);
                var3 = var4.bind(var0)(var3);
            case 194:
                if (!(var7 > var2)) {
                    _fun78771_ip = 281;
                    continue _fun78771
                }
            case 198:
                var2 = var0.push;
                var5 = _closure1_slot6;
                var4 = _closure1_slot12;
                var3 = {};
                var3.style = var8;
                var3.count = var7;
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var7 = 6;
                var7 = var9[var7];
                var7 = var8.bind(var6)(var7);
                var7 = var7.t;
                var7 = var7.RQath2;
                var3.label = var7;
                var1 = _closure1_slot4;
                var1 = var1.BLUESKY_FOLLOWERS_COUNT;
                var1 = var5.bind(var6)(var4, var3, var1);
                var1 = var2.bind(var0)(var1);
            case 281:
                return var0;
        }
    };
    var2.generateBlueskyMetadataItems = var3;
    var3 = function arg0() {
        _fun78772: for (var _fun78772_ip = 0;;) switch (_fun78772_ip) {
            case 0:
                var9 = arg0;
                var7 = arguments[1];
                var6 = undefined;
                if (!(var7 === var6)) {
                    _fun78772_ip = 14;
                    continue _fun78772
                }
            case 12:
                var7 = undefined;
            case 14:
                var0 = new Array(0);
                var5 = global;
                var8 = var5.Number;
                var2 = _closure1_slot4;
                var2 = var2.STEAM_GAME_COUNT;
                var10 = var9[var2];
                var4 = null;
                var11 = var4 != var10;
                var2 = -1;
                var3 = var2;
                if (!var11) {
                    _fun78772_ip = 64;
                    continue _fun78772
                }
            case 61:
                var3 = var10;
            case 64:
                var3 = var8.bind(var6)(var3);
                var10 = var5.Number;
                var8 = _closure1_slot4;
                var8 = var8.STEAM_ITEM_COUNT_DOTA2;
                var11 = var9[var8];
                var12 = var4 != var11;
                var8 = var2;
                if (!var12) {
                    _fun78772_ip = 102;
                    continue _fun78772
                }
            case 99:
                var8 = var11;
            case 102:
                var17 = var10.bind(var6)(var8);
                var5 = var5.Number;
                var8 = _closure1_slot4;
                var8 = var8.STEAM_ITEM_COUNT_TF2;
                var8 = var9[var8];
                var9 = var4 != var8;
                var4 = var2;
                if (!var9) {
                    _fun78772_ip = 140;
                    continue _fun78772
                }
            case 137:
                var4 = var8;
            case 140:
                var14 = var5.bind(var6)(var4);
                if (!(var3 > var2)) {
                    _fun78772_ip = 232;
                    continue _fun78772
                }
            case 149:
                var4 = var0.push;
                var9 = _closure1_slot6;
                var8 = _closure1_slot12;
                var5 = {};
                var5.style = var7;
                var5.count = var3;
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var3 = 6;
                var3 = var11[var3];
                var3 = var10.bind(var6)(var3);
                var3 = var3.t;
                var3 = var3["ppXMu/"];
                var5.label = var3;
                var3 = _closure1_slot4;
                var3 = var3.STEAM_GAME_COUNT;
                var3 = var9.bind(var6)(var8, var5, var3);
                var3 = var4.bind(var0)(var3);
            case 232:
                if (!(var17 > var2)) {
                    _fun78772_ip = 419;
                    continue _fun78772
                }
            case 239:
                var4 = var0.push;
                var9 = _closure1_slot6;
                var8 = _closure1_slot13;
                var5 = {};
                var5.style = var7;
                var12 = _closure1_slot0;
                var13 = _closure1_slot2;
                var3 = 6;
                var10 = var13[var3];
                var10 = var12.bind(var6)(var10);
                var16 = var10.intl;
                var15 = var16.format;
                var10 = var13[var3];
                var10 = var12.bind(var6)(var10);
                var10 = var10.t;
                var11 = var10.Y88M5x;
                var10 = {};
                var10.count = var17;
                var10 = var15.bind(var16)(var11, var10);
                var5.label = var10;
                var11 = _closure1_slot1;
                var10 = 7;
                var10 = var13[var10];
                var10 = var11.bind(var6)(var10);
                var5.imageSrc = var10;
                var10 = var13[var3];
                var10 = var12.bind(var6)(var10);
                var11 = var10.intl;
                var10 = var11.string;
                var3 = var13[var3];
                var3 = var12.bind(var6)(var3);
                var3 = var3.t;
                var3 = var3.HKUEZo;
                var3 = var10.bind(var11)(var3);
                var5.imageAlt = var3;
                var3 = _closure1_slot4;
                var3 = var3.STEAM_ITEM_COUNT_DOTA2;
                var3 = var9.bind(var6)(var8, var5, var3);
                var3 = var4.bind(var0)(var3);
            case 419:
                if (!(var14 > var2)) {
                    _fun78772_ip = 606;
                    continue _fun78772
                }
            case 426:
                var2 = var0.push;
                var5 = _closure1_slot6;
                var4 = _closure1_slot13;
                var3 = {};
                var3.style = var7;
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var7 = 6;
                var8 = var11[var7];
                var8 = var10.bind(var6)(var8);
                var13 = var8.intl;
                var12 = var13.format;
                var8 = var11[var7];
                var8 = var10.bind(var6)(var8);
                var8 = var8.t;
                var9 = var8.Y88M5x;
                var8 = {};
                var8.count = var14;
                var8 = var12.bind(var13)(var9, var8);
                var3.label = var8;
                var9 = _closure1_slot1;
                var8 = 8;
                var8 = var11[var8];
                var8 = var9.bind(var6)(var8);
                var3.imageSrc = var8;
                var8 = var11[var7];
                var8 = var10.bind(var6)(var8);
                var9 = var8.intl;
                var8 = var9.string;
                var7 = var11[var7];
                var7 = var10.bind(var6)(var7);
                var7 = var7.t;
                var7 = var7.C8p1Sh;
                var7 = var8.bind(var9)(var7);
                var3.imageAlt = var7;
                var1 = _closure1_slot4;
                var1 = var1.STEAM_ITEM_COUNT_TF2;
                var1 = var5.bind(var6)(var4, var3, var1);
                var1 = var2.bind(var0)(var1);
            case 606:
                return var0;
        }
    };
    var2.generateSteamMetadataItems = var3;
    var3 = function arg0() {
        _fun78773: for (var _fun78773_ip = 0;;) switch (_fun78773_ip) {
            case 0:
                var6 = arguments[1];
                var5 = undefined;
                if (!(var6 === var5)) {
                    _fun78773_ip = 11;
                    continue _fun78773
                }
            case 9:
                var6 = undefined;
            case 11:
                var0 = new Array(0);
                var2 = _closure1_slot4;
                var3 = var2.PAYPAL_VERIFIED;
                var2 = arg0;
                var3 = var2[var3];
                var2 = '1';
                if (!(var2 === var3)) {
                    _fun78773_ip = 75;
                    continue _fun78773
                }
            case 45:
                var2 = var0.push;
                var4 = _closure1_slot6;
                var3 = _closure1_slot11;
                var1 = {};
                var1.style = var6;
                var1 = var4.bind(var5)(var3, var1);
                var1 = var2.bind(var0)(var1);
            case 75:
                return var0;
        }
    };
    var2.generatePaypalMetadataItems = var3;
    var3 = function arg0() {
        _fun78774: for (var _fun78774_ip = 0;;) switch (_fun78774_ip) {
            case 0:
                var4 = arg0;
                var7 = arguments[1];
                var6 = undefined;
                if (!(var7 === var6)) {
                    _fun78774_ip = 14;
                    continue _fun78774
                }
            case 12:
                var7 = undefined;
            case 14:
                var0 = new Array(0);
                var1 = global;
                var3 = var1.Number;
                var2 = _closure1_slot4;
                var2 = var2.EBAY_POSITIVE_FEEDBACK_PERCENTAGE;
                var5 = var4[var2];
                var2 = null;
                var8 = var2 != var5;
                var2 = -1;
                if (!var8) {
                    _fun78774_ip = 61;
                    continue _fun78774
                }
            case 58:
                var2 = var5;
            case 61:
                var2 = var3.bind(var6)(var2);
                var3 = _closure1_slot4;
                var3 = var3.EBAY_TOP_RATED_SELLER;
                var3 = var4[var3];
                var4 = 0;
                if (!(var2 > var4)) {
                    _fun78774_ip = 176;
                    continue _fun78774
                }
            case 86:
                var4 = var0.push;
                var9 = _closure1_slot6;
                var8 = _closure1_slot12;
                var5 = {};
                var5.style = var7;
                var5.count = var2;
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var2 = 6;
                var2 = var11[var2];
                var2 = var10.bind(var6)(var2);
                var2 = var2.t;
                var2 = var2.YmL22d;
                var5.label = var2;
                var2 = true;
                var5.percent = var2;
                var2 = _closure1_slot4;
                var2 = var2.EBAY_POSITIVE_FEEDBACK_PERCENTAGE;
                var2 = var9.bind(var6)(var8, var5, var2);
                var2 = var4.bind(var0)(var2);
            case 176:
                var2 = '1';
                if (!(var2 === var3)) {
                    _fun78774_ip = 286;
                    continue _fun78774
                }
            case 186:
                var2 = var0.push;
                var5 = _closure1_slot6;
                var4 = _closure1_slot14;
                var3 = {};
                var3.style = var7;
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var7 = 6;
                var8 = var11[var7];
                var8 = var10.bind(var6)(var8);
                var9 = var8.intl;
                var8 = var9.string;
                var7 = var11[var7];
                var7 = var10.bind(var6)(var7);
                var7 = var7.t;
                var7 = var7.TEEYwa;
                var7 = var8.bind(var9)(var7);
                var3.label = var7;
                var1 = _closure1_slot4;
                var1 = var1.EBAY_TOP_RATED_SELLER;
                var1 = var5.bind(var6)(var4, var3, var1);
                var1 = var2.bind(var0)(var1);
            case 286:
                return var0;
        }
    };
    var2.generateEbayMetadataItems = var3;
    var3 = function arg0() {
        _fun78775: for (var _fun78775_ip = 0;;) switch (_fun78775_ip) {
            case 0:
                var11 = arg0;
                var7 = arguments[1];
                var6 = undefined;
                if (!(var7 === var6)) {
                    _fun78775_ip = 14;
                    continue _fun78775
                }
            case 12:
                var7 = undefined;
            case 14:
                var0 = new Array(0);
                var2 = _closure1_slot4;
                var2 = var2.TIKTOK_VERIFIED;
                var3 = var11[var2];
                var9 = global;
                var8 = var9.Number;
                var2 = _closure1_slot4;
                var2 = var2.TIKTOK_FOLLOWER_COUNT;
                var10 = var11[var2];
                var2 = null;
                var12 = var2 != var10;
                var4 = -1;
                var5 = var4;
                if (!var12) {
                    _fun78775_ip = 78;
                    continue _fun78775
                }
            case 75:
                var5 = var10;
            case 78:
                var8 = var8.bind(var6)(var5);
                var10 = var9.Number;
                var5 = _closure1_slot4;
                var5 = var5.TIKTOK_FOLLOWING_COUNT;
                var12 = var11[var5];
                var13 = var2 != var12;
                var5 = var4;
                if (!var13) {
                    _fun78775_ip = 116;
                    continue _fun78775
                }
            case 113:
                var5 = var12;
            case 116:
                var5 = var10.bind(var6)(var5);
                var9 = var9.Number;
                var10 = _closure1_slot4;
                var10 = var10.TIKTOK_LIKES_COUNT;
                var10 = var11[var10];
                var11 = var2 != var10;
                var2 = var4;
                if (!var11) {
                    _fun78775_ip = 154;
                    continue _fun78775
                }
            case 151:
                var2 = var10;
            case 154:
                var2 = var9.bind(var6)(var2);
                if (!(var8 > var4)) {
                    _fun78775_ip = 246;
                    continue _fun78775
                }
            case 163:
                var9 = var0.push;
                var12 = _closure1_slot6;
                var11 = _closure1_slot12;
                var10 = {};
                var10.style = var7;
                var10.count = var8;
                var13 = _closure1_slot0;
                var14 = _closure1_slot2;
                var8 = 6;
                var8 = var14[var8];
                var8 = var13.bind(var6)(var8);
                var8 = var8.t;
                var8 = var8["Mpm/Bc"];
                var10.label = var8;
                var8 = _closure1_slot4;
                var8 = var8.TIKTOK_FOLLOWER_COUNT;
                var8 = var12.bind(var6)(var11, var10, var8);
                var8 = var9.bind(var0)(var8);
            case 246:
                if (!(var5 > var4)) {
                    _fun78775_ip = 333;
                    continue _fun78775
                }
            case 250:
                var8 = var0.push;
                var11 = _closure1_slot6;
                var10 = _closure1_slot12;
                var9 = {};
                var9.style = var7;
                var9.count = var5;
                var12 = _closure1_slot0;
                var13 = _closure1_slot2;
                var5 = 6;
                var5 = var13[var5];
                var5 = var12.bind(var6)(var5);
                var5 = var5.t;
                var5 = var5.ftf12v;
                var9.label = var5;
                var5 = _closure1_slot4;
                var5 = var5.TIKTOK_FOLLOWING_COUNT;
                var5 = var11.bind(var6)(var10, var9, var5);
                var5 = var8.bind(var0)(var5);
            case 333:
                if (!(var2 > var4)) {
                    _fun78775_ip = 420;
                    continue _fun78775
                }
            case 337:
                var4 = var0.push;
                var9 = _closure1_slot6;
                var8 = _closure1_slot12;
                var5 = {};
                var5.style = var7;
                var5.count = var2;
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var2 = 6;
                var2 = var11[var2];
                var2 = var10.bind(var6)(var2);
                var2 = var2.t;
                var2 = var2.Qwhe5j;
                var5.label = var2;
                var2 = _closure1_slot4;
                var2 = var2.TIKTOK_LIKES_COUNT;
                var2 = var9.bind(var6)(var8, var5, var2);
                var2 = var4.bind(var0)(var2);
            case 420:
                var2 = '1';
                if (!(var2 === var3)) {
                    _fun78775_ip = 532;
                    continue _fun78775
                }
            case 430:
                var2 = var0.push;
                var5 = _closure1_slot6;
                var4 = _closure1_slot14;
                var3 = {};
                var3.style = var7;
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var7 = 6;
                var8 = var11[var7];
                var8 = var10.bind(var6)(var8);
                var9 = var8.intl;
                var8 = var9.string;
                var7 = var11[var7];
                var7 = var10.bind(var6)(var7);
                var7 = var7.t;
                var7 = var7.QHHwRR;
                var7 = var8.bind(var9)(var7);
                var3.label = var7;
                var1 = _closure1_slot4;
                var1 = var1.TIKTOK_VERIFIED;
                var1 = var5.bind(var6)(var4, var3, var1);
                var1 = var2.bind(var0)(var1);
            case 532:
                return var0;
        }
    };
    var2.generateTikTokMetadataItems = var3;
    var1 = function arg0() {
        _fun78776: for (var _fun78776_ip = 0;;) switch (_fun78776_ip) {
            case 0:
                var4 = arg0;
                var3 = arguments[1];
                var2 = arguments[2];
                var9 = var4;
                var _closure2_slot0 = var4;
                var8 = undefined;
                if (!(var3 === var8)) {
                    _fun78776_ip = 26;
                    continue _fun78776
                }
            case 24:
                var3 = undefined;
            case 26:
                var10 = var3;
                if (!(var2 === var8)) {
                    _fun78776_ip = 35;
                    continue _fun78776
                }
            case 33:
                var2 = undefined;
            case 35:
                var11 = var2;
                var12 = undefined;
                var13 = undefined;
                var14 = undefined;
                var0 = new Array(0);
                var7 = global;
                var5 = var7.Object;
                var4 = var5.keys;
                var2 = var9;
                var3 = var2.metadata;
                var15 = var4.bind(var5)(var3);
                var2 = var2.application_metadata;
                var6 = null;
                if (!(var6 != var2)) {
                    _fun78776_ip = 711;
                    continue _fun78776
                }
            case 90:
                var4 = var7.Object;
                var3 = var4.keys;
                var2 = var9;
                var2 = var2.application_metadata;
                var2 = var3.bind(var4)(var2);
                var2 = var2.length;
                var3 = 0;
                if (!(var3 !== var2)) {
                    _fun78776_ip = 711;
                    continue _fun78776
                }
            case 129:
                var2 = var15.length;
                if (!(var3 !== var2)) {
                    _fun78776_ip = 711;
                    continue _fun78776
                }
            case 141:
                var2 = _closure1_slot9;
                var4 = _closure1_slot1;
                var16 = _closure1_slot2;
                var3 = 9;
                var3 = var16[var3];
                var4 = var4.bind(var8)(var3);
                var3 = var4.sortBy;
                var1 = function(arg0) { // Environment: var1
                    _fun78777: for (var _fun78777_ip = 0;;) switch (_fun78777_ip) {
                        case 0:
                            var0 = _closure2_slot0;
                            var4 = var0.application_metadata;
                            var2 = null;
                            var1 = var2 == var4;
                            var0 = undefined;
                            if (var1) {
                                _fun78777_ip = 45;
                                continue _fun78777
                            }
                        case 24:
                            var1 = arg0;
                            var1 = var4[var1];
                            var2 = var2 == var1;
                            var0 = undefined;
                            if (var2) {
                                _fun78777_ip = 45;
                                continue _fun78777
                            }
                        case 40:
                            var0 = var1.name;
                        case 45:
                            return var0;
                    }
                };
                var1 = var3.bind(var4)(var15, var1);
                var4 = var2.bind(var8)(var1);
                var2 = var4.bind(var8)();
                var1 = var2.done;
                var3 = '1';
                if (var1) {
                    _fun78776_ip = 706;
                    continue _fun78776
                }
            case 213:
                var15 = var2.value;
                var12 = var15;
                var1 = var9;
                var1 = var1.application_metadata;
                var1 = var1[var15];
                var13 = var1;
                if (!(var6 != var1)) {
                    _fun78776_ip = 688;
                    continue _fun78776
                }
            case 244:
                var1 = var9;
                var15 = var1.metadata;
                var1 = var12;
                var14 = var15[var1];
            case 260: // try_start_0
                var1 = var13;
                var15 = var1.type;
                var1 = _closure1_slot5;
                var1 = var1.BOOLEAN_EQUAL;
                if (!(var1 !== var15)) {
                    _fun78776_ip = 548;
                    continue _fun78776
                }
            case 285:
                var1 = _closure1_slot5;
                var1 = var1.BOOLEAN_NOT_EQUAL;
                if (!(var1 !== var15)) {
                    _fun78776_ip = 548;
                    continue _fun78776
                }
            case 302:
                var1 = _closure1_slot5;
                var1 = var1.DATETIME_GREATER_THAN_EQUAL;
                if (!(var1 !== var15)) {
                    _fun78776_ip = 473;
                    continue _fun78776
                }
            case 319:
                var1 = _closure1_slot5;
                var1 = var1.DATETIME_LESS_THAN_EQUAL;
                if (!(var1 !== var15)) {
                    _fun78776_ip = 473;
                    continue _fun78776
                }
            case 336:
                var1 = _closure1_slot5;
                var1 = var1.INTEGER_EQUAL;
                if (!(var1 !== var15)) {
                    _fun78776_ip = 395;
                    continue _fun78776
                }
            case 350:
                var1 = _closure1_slot5;
                var1 = var1.INTEGER_NOT_EQUAL;
                if (!(var1 !== var15)) {
                    _fun78776_ip = 395;
                    continue _fun78776
                }
            case 364:
                var1 = _closure1_slot5;
                var1 = var1.INTEGER_GREATER_THAN_EQUAL;
                if (!(var1 !== var15)) {
                    _fun78776_ip = 395;
                    continue _fun78776
                }
            case 378:
                var1 = _closure1_slot5;
                var1 = var1.INTEGER_LESS_THAN_EQUAL;
                if (!(var1 === var15)) {
                    _fun78776_ip = 684;
                    continue _fun78776
                }
            case 395:
                var16 = var0;
                var15 = var16.push;
                var19 = _closure1_slot6;
                var18 = _closure1_slot12;
                var17 = {};
                var1 = var10;
                var17.style = var1;
                var20 = var7.Number;
                var1 = var14;
                var1 = var20.bind(var8)(var1);
                var17.count = var1;
                var1 = var13;
                var20 = var1.name;
                var17.label = var20;
                var1 = var1.key;
                var1 = var19.bind(var8)(var18, var17, var1);
                var1 = var15.bind(var16)(var1);
                _fun78776_ip = 684;
                continue _fun78776;
            case 473:
                var16 = var0;
                var15 = var16.push;
                var19 = _closure1_slot6;
                var18 = _closure1_slot15;
                var17 = {};
                var1 = var10;
                var17.style = var1;
                var1 = var14;
                var17.date = var1;
                var1 = var11;
                var17.locale = var1;
                var1 = var13;
                var20 = var1.name;
                var17.label = var20;
                var1 = var1.key;
                var1 = var19.bind(var8)(var18, var17, var1);
                var1 = var15.bind(var16)(var1);
                _fun78776_ip = 684;
                continue _fun78776;
            case 548:
                var16 = var13;
                var17 = var16.type;
                var16 = _closure1_slot5;
                var16 = var16.BOOLEAN_EQUAL;
                var16 = var17 === var16;
                var15 = var16;
                if (!var16) {
                    _fun78776_ip = 583;
                    continue _fun78776
                }
            case 576:
                var16 = var14;
                var15 = var3 === var16;
            case 583:
                var1 = var15;
                if (var15) {
                    _fun78776_ip = 627;
                    continue _fun78776
                }
            case 589:
                var16 = var13;
                var17 = var16.type;
                var16 = _closure1_slot5;
                var16 = var16.BOOLEAN_NOT_EQUAL;
                var16 = var17 === var16;
                var15 = var16;
                if (!var16) {
                    _fun78776_ip = 624;
                    continue _fun78776
                }
            case 617:
                var16 = var14;
                var15 = var3 !== var16;
            case 624:
                var1 = var15;
            case 627:
                if (!var1) {
                    _fun78776_ip = 684;
                    continue _fun78776
                }
            case 630:
                var16 = var0;
                var15 = var16.push;
                var19 = _closure1_slot6;
                var18 = _closure1_slot14;
                var17 = {};
                var1 = var10;
                var17.style = var1;
                var1 = var13;
                var20 = var1.name;
                var17.label = var20;
                var1 = var1.key;
                var1 = var19.bind(var8)(var18, var17, var1);
                var1 = var15.bind(var16)(var1);
            case 684: // try_end0
                _fun78776_ip = 688;
                continue _fun78776;
            case 686: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 688:
                var15 = var4.bind(var8)();
                var1 = var15.done;
                var2 = var15;
                if (!var1) {
                    _fun78776_ip = 213;
                    continue _fun78776
                }
            case 706:
                var1 = var0;
                return var1;
            case 711:
                return var0;
        }
    };
    var2.generateRoleConnectionMetadataItems = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 4523, 33, 1297, 671, 1234, 9987, 9988, 22, 1604, 3942, 4086, 4522, 2]);