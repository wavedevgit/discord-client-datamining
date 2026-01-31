// modules/icymi/native/ICYMIGeneratedCandidateRow.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function(arg0, arg1) { // Original name: _createForOfIteratorHelperLoose, environment: var1
        _fun104168: for (var _fun104168_ip = 0;;) switch (_fun104168_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun104168_ip = 46;
                    continue _fun104168
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun104168_ip = 55;
                    continue _fun104168
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun104168_ip = 345;
                    continue _fun104168
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun104168_ip = 323;
                    continue _fun104168
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun104168_ip = 283;
                    continue _fun104168
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun104168_ip = 270;
                    continue _fun104168
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
                    _fun104168_ip = 163;
                    continue _fun104168
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun104168_ip = 179;
                    continue _fun104168
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun104168_ip = 249;
                    continue _fun104168
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun104168_ip = 249;
                    continue _fun104168
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun104168_ip = 234;
                    continue _fun104168
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun104168_ip = 247;
                    continue _fun104168
                }
            case 234:
                var8 = _closure1_slot14;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun104168_ip = 265;
                continue _fun104168;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun104168_ip = 283;
                continue _fun104168;
            case 270:
                var6 = _closure1_slot14;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun104168_ip = 323;
                    continue _fun104168
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
                    _fun104168_ip = 330;
                    continue _fun104168
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun104169: for (var _fun104169_ip = 0;;) switch (_fun104169_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun104169_ip = 56;
                                continue _fun104169
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
                            _fun104169_ip = 67;
                            continue _fun104169;
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
    var _closure1_slot13 = var0;
    var0 = function(arg0, arg1) { // Original name: _arrayLikeToArray, environment: var1
        _fun104170: for (var _fun104170_ip = 0;;) switch (_fun104170_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun104170_ip = 23;
                    continue _fun104170
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun104170_ip = 33;
                    continue _fun104170
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
                    _fun104170_ip = 70;
                    continue _fun104170
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun104170_ip = 55;
                    continue _fun104170
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot14 = var0;
    var0 = function(arg0) { // Original name: FacePile, environment: var1
        var1 = arg0;
        var13 = var1.authors;
        var5 = var1.guildId;
        var _closure2_slot0 = var5;
        var1 = _closure1_slot12;
        var3 = undefined;
        var10 = var1.bind(var3)();
        var4 = _closure1_slot3;
        var2 = var4.useCallback;
        var1 = new Array(1);
        var1[0] = var5;
        var0 = function(arg0) { // Environment: var0
            _fun104172: for (var _fun104172_ip = 0;;) switch (_fun104172_ip) {
                case 0:
                    var8 = arg0;
                    var0 = null;
                    var1 = var0 == var8;
                    if (var1) {
                        _fun104172_ip = 93;
                        continue _fun104172
                    }
                case 12:
                    var4 = _closure1_slot10;
                    var2 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var5 = 9;
                    var1 = var7[var5];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var1);
                    var1 = {};
                    var1.user = var8;
                    var8 = _closure2_slot0;
                    var1.guildId = var8;
                    var6 = _closure1_slot0;
                    var5 = var7[var5];
                    var5 = var6.bind(var3)(var5);
                    var5 = var5.AvatarSizes;
                    var5 = var5.SMALL;
                    var1.size = var5;
                    var0 = var4.bind(var3)(var2, var1);
                case 93:
                    return var0;
            }
        };
        var11 = var2.bind(var4)(var0, var1);
        var2 = _closure1_slot10;
        var1 = _closure1_slot5;
        var0 = {};
        var4 = var10.facepileContainer;
        var0.style = var4;
        var6 = _closure1_slot10;
        var12 = _closure1_slot1;
        var9 = _closure1_slot2;
        var7 = 10;
        var4 = var9[var7];
        var5 = var12.bind(var3)(var4);
        var4 = {};
        var4.items = var13;
        var13 = 5;
        var4.max = var13;
        var4.renderItem = var11;
        var11 = 8;
        var11 = var9[var11];
        var11 = var12.bind(var3)(var11);
        var11 = var11.spacing;
        var11 = var11.PX_4;
        var11 = -var11;
        var4.offsetAmount = var11;
        var10 = var10.iconWrapper;
        var4.iconWrapperStyle = var10;
        var8 = _closure1_slot0;
        var7 = var9[var7];
        var7 = var8.bind(var3)(var7);
        var7 = var7.OverflowCircle;
        var4.overflowComponent = var7;
        var4 = var6.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot15 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var3 = 0;
    var8 = var5[var3];
    var7 = arg3;
    var0 = undefined;
    var7 = var7.bind(var0)(var8);
    var _closure1_slot3 = var7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.useMemo;
    var _closure1_slot4 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot10 = var6;
    var3 = var3.jsxs;
    var _closure1_slot11 = var3;
    var3 = 7;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createICYMIStyles;
    var3 = function(arg0) { // Environment: var1
        var7 = arg0;
        var0 = {};
        var1 = {};
        var6 = 1;
        var1.flex = var6;
        var2 = var7.inset;
        var1.paddingLeft = var2;
        var0.outerContainer = var1;
        var1 = {};
        var2 = var7.margin;
        var1.marginHorizontal = var2;
        var2 = var7.margin;
        var1.marginBottom = var2;
        var0.container = var1;
        var1 = {};
        var4 = _closure1_slot1;
        var5 = _closure1_slot2;
        var2 = 8;
        var8 = var5[var2];
        var3 = undefined;
        var8 = var4.bind(var3)(var8);
        var8 = var8.colors;
        var8 = var8.CARD_BACKGROUND_DEFAULT;
        var1.backgroundColor = var8;
        var8 = var5[var2];
        var8 = var4.bind(var3)(var8);
        var8 = var8.radii;
        var8 = var8.lg;
        var1.borderRadius = var8;
        var8 = var7.margin;
        var1.padding = var8;
        var8 = var7.margin;
        var1.gap = var8;
        var0.card = var1;
        var1 = {};
        var8 = 'flex-end';
        var1.justifyContent = var8;
        var7 = var7.inset;
        var1.paddingLeft = var7;
        var0.footer = var1;
        var7 = 'row';
        var1 = {
            'flexDirection': 'row',
            'alignItems': 'center',
            'justifyContent': 'space-between'
        };
        var0.header = var1;
        var1 = {
            'flexDirection': 'row',
            'alignItems': 'center'
        };
        var8 = var5[var2];
        var8 = var4.bind(var3)(var8);
        var8 = var8.spacing;
        var8 = var8.PX_8;
        var1.gap = var8;
        var0.title = var1;
        var1 = {
            'flexDirection': 'row',
            'alignItems': 'center',
            'gap': 6
        };
        var0.timestamp = var1;
        var1 = {};
        var8 = var5[var2];
        var8 = var4.bind(var3)(var8);
        var8 = var8.spacing;
        var8 = var8.PX_8;
        var1.marginTop = var8;
        var8 = var5[var2];
        var8 = var4.bind(var3)(var8);
        var8 = var8.spacing;
        var8 = var8.PX_8;
        var1.marginBottom = var8;
        var0.secondaryText = var1;
        var1 = {};
        var8 = 2;
        var1.borderWidth = var8;
        var8 = var5[var2];
        var8 = var4.bind(var3)(var8);
        var8 = var8.colors;
        var8 = var8.BACKGROUND_BASE_LOW;
        var1.borderColor = var8;
        var8 = var5[var2];
        var8 = var4.bind(var3)(var8);
        var8 = var8.colors;
        var8 = var8.BACKGROUND_BASE_LOW;
        var1.backgroundColor = var8;
        var8 = var5[var2];
        var8 = var4.bind(var3)(var8);
        var8 = var8.radii;
        var8 = var8.round;
        var1.borderRadius = var8;
        var0.iconWrapper = var1;
        var1 = {
            'flexDirection': 'row',
            'alignItems': 'center'
        };
        var8 = var5[var2];
        var8 = var4.bind(var3)(var8);
        var8 = var8.spacing;
        var8 = var8.PX_4;
        var1.gap = var8;
        var8 = var5[var2];
        var8 = var4.bind(var3)(var8);
        var8 = var8.spacing;
        var8 = var8.PX_4;
        var1.marginTop = var8;
        var0.facepileContainer = var1;
        var1 = {};
        var1.flexDirection = var7;
        var7 = var5[var2];
        var7 = var4.bind(var3)(var7);
        var7 = var7.spacing;
        var7 = var7.PX_8;
        var1.gap = var7;
        var7 = var5[var2];
        var7 = var4.bind(var3)(var7);
        var7 = var7.spacing;
        var7 = var7.PX_8;
        var1.marginBottom = var7;
        var0.messageContainer = var1;
        var1 = {};
        var1.flex = var6;
        var0.messageContent = var1;
        var1 = {};
        var7 = var5[var2];
        var7 = var4.bind(var3)(var7);
        var7 = var7.spacing;
        var7 = var7.PX_4;
        var1.gap = var7;
        var1.borderWidth = var6;
        var6 = var5[var2];
        var6 = var4.bind(var3)(var6);
        var6 = var6.colors;
        var6 = var6.BORDER_STRONG;
        var1.borderColor = var6;
        var6 = var5[var2];
        var6 = var4.bind(var3)(var6);
        var6 = var6.spacing;
        var6 = var6.PX_8;
        var1.marginVertical = var6;
        var6 = var5[var2];
        var6 = var4.bind(var3)(var6);
        var6 = var6.radii;
        var6 = var6.md;
        var1.borderRadius = var6;
        var2 = var5[var2];
        var2 = var4.bind(var3)(var2);
        var2 = var2.spacing;
        var2 = var2.PX_8;
        var1.padding = var2;
        var0.messages = var1;
        return var0;
    };
    var3 = var6.bind(var7)(var3);
    var _closure1_slot12 = var3;
    var3 = 20;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/icymi/native/ICYMIGeneratedCandidateRow.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: ICYMIGeneratedCandidateRow, environment: var1
        _fun104174: for (var _fun104174_ip = 0;;) switch (_fun104174_ip) {
            case 0:
                var0 = arg0;
                var14 = var0.item;
                var _closure2_slot0 = var14;
                var7 = var0.disableInteractions;
                var0 = _closure1_slot12;
                var4 = undefined;
                var11 = var0.bind(var4)();
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 11;
                var0 = var3[var1];
                var8 = var2.bind(var4)(var0);
                var6 = var8.useStateFromStores;
                var0 = _closure1_slot7;
                var5 = new Array(1);
                var5[0] = var0;
                var0 = function() { // Environment: var23
                    var2 = _closure1_slot7;
                    var1 = var2.getGuild;
                    var0 = _closure2_slot0;
                    var0 = var0.guild_id;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var21 = var6.bind(var8)(var5, var0);
                var _closure2_slot1 = var21;
                var0 = var3[var1];
                var8 = var2.bind(var4)(var0);
                var6 = var8.useStateFromStores;
                var0 = _closure1_slot6;
                var5 = new Array(1);
                var5[0] = var0;
                var0 = function() { // Environment: var23
                    var2 = _closure1_slot6;
                    var1 = var2.getChannel;
                    var0 = _closure2_slot0;
                    var0 = var0.channel_id;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var13 = var6.bind(var8)(var5, var0);
                var _closure2_slot2 = var13;
                var0 = var3[var1];
                var9 = var2.bind(var4)(var0);
                var8 = var9.useStateFromStoresArray;
                var0 = _closure1_slot8;
                var6 = new Array(1);
                var6[0] = var0;
                var0 = var14.channel_id;
                var5 = new Array(3);
                var5[0] = var0;
                var0 = var14.message_ids;
                var5[1] = var0;
                var0 = var14.messages;
                var5[2] = var0;
                var0 = function() { // Environment: var23
                    var1 = _closure2_slot0;
                    var3 = var1.message_ids;
                    var2 = var3.map;
                    var1 = function(arg0) { // Environment: var0
                        _fun104178: for (var _fun104178_ip = 0;;) switch (_fun104178_ip) {
                            case 0:
                                var5 = arg0;
                                var _closure4_slot0 = var5;
                                var4 = _closure1_slot8;
                                var3 = var4.getMessage;
                                var0 = _closure2_slot0;
                                var0 = var0.channel_id;
                                var5 = var3.bind(var4)(var0, var5);
                                var4 = null;
                                var0 = var5;
                                if (!(var4 == var5)) {
                                    _fun104178_ip = 93;
                                    continue _fun104178
                                }
                            case 49:
                                var3 = _closure2_slot0;
                                var3 = var3.messages;
                                var0 = var5;
                                if (!(var4 != var3)) {
                                    _fun104178_ip = 93;
                                    continue _fun104178
                                }
                            case 66:
                                var2 = _closure2_slot0;
                                var3 = var2.messages;
                                var2 = var3.find;
                                var1 = function(arg0) { // Environment: var1
                                    var0 = arg0;
                                    var1 = var0.id;
                                    var0 = _closure4_slot0;
                                    var0 = var1 === var0;
                                    return var0;
                                };
                                var0 = var2.bind(var3)(var1);
                            case 93:
                                return var0;
                        }
                    };
                    var3 = var2.bind(var3)(var1);
                    var2 = var3.filter;
                    var1 = function(arg0) { // Environment: var0
                        var1 = null;
                        var0 = arg0;
                        var0 = var1 != var0;
                        return var0;
                    };
                    var2 = var2.bind(var3)(var1);
                    var1 = var2.sort;
                    var0 = function(arg0, arg1) { // Environment: var0
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var0 = 12;
                        var1 = var4[var0];
                        var2 = undefined;
                        var6 = var3.bind(var2)(var1);
                        var5 = var6.extractTimestamp;
                        var1 = arg0;
                        var1 = var1.id;
                        var1 = var5.bind(var6)(var1);
                        var0 = var4[var0];
                        var3 = var3.bind(var2)(var0);
                        var2 = var3.extractTimestamp;
                        var0 = arg1;
                        var0 = var0.id;
                        var0 = var2.bind(var3)(var0);
                        var0 = var1 - var0;
                        return var0;
                    };
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var0 = var8.bind(var9)(var6, var0, var5);
                var _closure2_slot3 = var0;
                var1 = var3[var1];
                var6 = var2.bind(var4)(var1);
                var5 = var6.useStateFromStoresArray;
                var1 = _closure1_slot9;
                var3 = new Array(1);
                var3[0] = var1;
                var2 = new Array(1);
                var2[0] = var0;
                var1 = function() { // Environment: var23
                    _fun104182: for (var _fun104182_ip = 0;;) switch (_fun104182_ip) {
                        case 0:
                            var0 = global;
                            var0 = var0.Set;
                            var1 = var0.prototype;
                            var1 = Object.create(var1, {
                                constructor: {
                                    value: var0
                                }
                            });
                            var13 = var1;
                            var0 = new var13[var0](var12);
                            var8 = var0 instanceof Object ? var0 : var1;
                            var0 = new Array(0);
                            var2 = _closure1_slot13;
                            var1 = _closure2_slot3;
                            var6 = undefined;
                            var5 = var2.bind(var6)(var1);
                            var2 = var5.bind(var6)();
                            var1 = var2.done;
                            var4 = null;
                            var3 = var2;
                            var2 = undefined;
                            if (var1) {
                                _fun104182_ip = 180;
                                continue _fun104182
                            }
                        case 72:
                            var9 = var3.value;
                            var10 = var8.has;
                            var1 = var9.author;
                            var1 = var1.id;
                            var1 = var10.bind(var8)(var1);
                            if (var1) {
                                _fun104182_ip = 165;
                                continue _fun104182
                            }
                        case 101:
                            var11 = _closure1_slot9;
                            var10 = var11.getUser;
                            var1 = var9.author;
                            var1 = var1.id;
                            var1 = var10.bind(var11)(var1);
                            if (!(var4 == var1)) {
                                _fun104182_ip = 137;
                                continue _fun104182
                            }
                        case 131:
                            var1 = var9.author;
                        case 137:
                            var10 = var8.add;
                            var9 = var1.id;
                            var9 = var10.bind(var8)(var9);
                            var9 = var0.push;
                            var9 = var9.bind(var0)(var1);
                            var2 = var1;
                        case 165:
                            var9 = var5.bind(var6)();
                            var1 = var9.done;
                            var3 = var9;
                            if (!var1) {
                                _fun104182_ip = 72;
                                continue _fun104182
                            }
                        case 180:
                            return var0;
                    }
                };
                var22 = var5.bind(var6)(var3, var1, var2);
                var2 = _closure1_slot4;
                var1 = new Array(2);
                var1[0] = var0;
                var0 = var14.message_ids;
                var1[1] = var0;
                var0 = function() { // Environment: var23
                    _fun104183: for (var _fun104183_ip = 0;;) switch (_fun104183_ip) {
                        case 0:
                            var3 = -1;
                            var _closure3_slot0 = var3;
                            var1 = 0;
                            var _closure3_slot1 = var1;
                            var6 = function() { // Original name: _loop, environment: var0
                                var1 = _closure2_slot0;
                                var4 = var1.message_ids;
                                var3 = _closure3_slot1;
                                var3 = var4[var3];
                                var _closure4_slot0 = var3;
                                var3 = _closure2_slot3;
                                var2 = var3.findIndex;
                                var0 = function(arg0) { // Environment: var0
                                    var0 = arg0;
                                    var1 = var0.id;
                                    var0 = _closure4_slot0;
                                    var0 = var1 === var0;
                                    return var0;
                                };
                                var0 = var2.bind(var3)(var0);
                                _closure3_slot0 = var0;
                                var0 = _closure3_slot1;
                                var0 = var0 + 1;
                                _closure3_slot1 = var0;
                                var0 = undefined;
                                return var0;
                            };
                            var5 = undefined;
                        case 30:
                            var2 = var6.bind(var5)();
                            var2 = _closure3_slot0;
                            if (!(var3 === var2)) {
                                _fun104183_ip = 65;
                                continue _fun104183
                            }
                        case 42:
                            var4 = _closure3_slot1;
                            var2 = _closure2_slot0;
                            var2 = var2.message_ids;
                            var2 = var2.length;
                            if (var4 < var2) {
                                _fun104183_ip = 30;
                                continue _fun104183
                            }
                        case 65:
                            var2 = _closure3_slot0;
                            if (!(var3 !== var2)) {
                                _fun104183_ip = 95;
                                continue _fun104183
                            }
                        case 73:
                            var1 = _closure2_slot3;
                            var0 = _closure3_slot0;
                            var1 = var1[var0];
                            var0 = new Array(1);
                            var0[0] = var1;
                            _fun104183_ip = 99;
                            continue _fun104183;
                        case 95:
                            var0 = new Array(0);
                        case 99:
                            return var0;
                    }
                };
                var25 = var2.bind(var4)(var0, var1);
                var _closure2_slot4 = var25;
                var3 = _closure1_slot3;
                var2 = var3.useCallback;
                var1 = new Array(3);
                var1[0] = var13;
                var1[1] = var21;
                var0 = var14.content_id;
                var1[2] = var0;
                var0 = function() { // Environment: var23
                    _fun104186: for (var _fun104186_ip = 0;;) switch (_fun104186_ip) {
                        case 0:
                            var4 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var3 = 13;
                            var1 = var5[var3];
                            var0 = undefined;
                            var11 = var4.bind(var0)(var1);
                            var10 = var11.itemInteracted;
                            var7 = _closure2_slot0;
                            var9 = var7.content_id;
                            var6 = 'generated_candidate';
                            var8 = 'press_header';
                            var8 = var10.bind(var11)(var9, var6, var8);
                            var3 = var5[var3];
                            var5 = var4.bind(var0)(var3);
                            var4 = var5.feedItemActioned;
                            var3 = {};
                            var7 = var7.content_id;
                            var3.itemId = var7;
                            var3.itemType = var6;
                            var6 = {
                                'actionGestureType': 'press',
                                'actionTargetElement': 'item_header',
                                'actionIntentType': 'navigate',
                                'actionDestinationType': 'channel'
                            };
                            var3.actionParameters = var6;
                            var3 = var4.bind(var5)(var3);
                            var3 = _closure2_slot2;
                            var5 = null;
                            var3 = var5 != var3;
                            if (!var3) {
                                _fun104186_ip = 141;
                                continue _fun104186
                            }
                        case 133:
                            var4 = _closure2_slot1;
                            var3 = var5 != var4;
                        case 141:
                            if (!var3) {
                                _fun104186_ip = 195;
                                continue _fun104186
                            }
                        case 144:
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var2 = 14;
                            var2 = var4[var2];
                            var4 = var3.bind(var0)(var2);
                            var3 = var4.navigateToPost;
                            var2 = _closure2_slot2;
                            var2 = var2.id;
                            var1 = _closure2_slot1;
                            var1 = var1.id;
                            var1 = var3.bind(var4)(var2, var1, var0);
                        case 195:
                            return var0;
                    }
                };
                var8 = var2.bind(var3)(var0, var1);
                var3 = _closure1_slot3;
                var2 = var3.useCallback;
                var1 = new Array(2);
                var1[0] = var13;
                var0 = var14.content_id;
                var1[1] = var0;
                var0 = function() { // Environment: var23
                    _fun104187: for (var _fun104187_ip = 0;;) switch (_fun104187_ip) {
                        case 0:
                            var5 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var3 = 13;
                            var1 = var6[var3];
                            var0 = undefined;
                            var11 = var5.bind(var0)(var1);
                            var10 = var11.itemInteracted;
                            var7 = _closure2_slot0;
                            var9 = var7.content_id;
                            var4 = 'generated_candidate';
                            var8 = 'long_press';
                            var8 = var10.bind(var11)(var9, var4, var8);
                            var3 = var6[var3];
                            var6 = var5.bind(var0)(var3);
                            var5 = var6.feedItemActioned;
                            var3 = {};
                            var7 = var7.content_id;
                            var3.itemId = var7;
                            var3.itemType = var4;
                            var4 = null;
                            var7 = {
                                'actionGestureType': 'long_press',
                                'actionTargetElement': 'item_header',
                                'actionIntentType': 'open',
                                'actionDestinationType': null
                            };
                            var3.actionParameters = var7;
                            var3 = var5.bind(var6)(var3);
                            var3 = _closure2_slot2;
                            if (!(var4 != var3)) {
                                _fun104187_ip = 170;
                                continue _fun104187
                            }
                        case 130:
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var2 = 15;
                            var2 = var4[var2];
                            var3 = var3.bind(var0)(var2);
                            var2 = var3.openChannelLongPressActionSheet;
                            var1 = _closure2_slot2;
                            var1 = var1.id;
                            var1 = var2.bind(var3)(var1);
                        case 170:
                            return var0;
                    }
                };
                var5 = var2.bind(var3)(var0, var1);
                var3 = _closure1_slot3;
                var2 = var3.useCallback;
                var1 = new Array(3);
                var1[0] = var13;
                var0 = var14.content_id;
                var1[1] = var0;
                var1[2] = var25;
                var0 = function() { // Environment: var23
                    _fun104188: for (var _fun104188_ip = 0;;) switch (_fun104188_ip) {
                        case 0:
                            var2 = _closure2_slot2;
                            var1 = null;
                            var1 = var1 != var2;
                            if (!var1) {
                                _fun104188_ip = 31;
                                continue _fun104188
                            }
                        case 16:
                            var2 = _closure2_slot4;
                            var3 = var2.length;
                            var2 = 0;
                            var1 = var3 > var2;
                        case 31:
                            if (!var1) {
                                _fun104188_ip = 212;
                                continue _fun104188
                            }
                        case 37:
                            var5 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var2 = 13;
                            var6 = var4[var2];
                            var3 = undefined;
                            var11 = var5.bind(var3)(var6);
                            var10 = var11.itemInteracted;
                            var8 = _closure2_slot0;
                            var9 = var8.content_id;
                            var7 = 'generated_candidate';
                            var6 = 'press_content';
                            var6 = var10.bind(var11)(var9, var7, var6);
                            var2 = var4[var2];
                            var6 = var5.bind(var3)(var2);
                            var5 = var6.feedItemActioned;
                            var2 = {};
                            var8 = var8.content_id;
                            var2.itemId = var8;
                            var2.itemType = var7;
                            var7 = {
                                'actionGestureType': 'press',
                                'actionTargetElement': 'item_body',
                                'actionIntentType': 'navigate',
                                'actionDestinationType': 'channel'
                            };
                            var2.actionParameters = var7;
                            var2 = var5.bind(var6)(var2);
                            var2 = _closure1_slot0;
                            var1 = 14;
                            var1 = var4[var1];
                            var4 = var2.bind(var3)(var1);
                            var3 = var4.navigateToPost;
                            var1 = _closure2_slot2;
                            var2 = var1.id;
                            var1 = var1.guild_id;
                            var5 = _closure2_slot4;
                            var0 = 0;
                            var0 = var5[var0];
                            var0 = var0.id;
                            var0 = var3.bind(var4)(var2, var1, var0);
                        case 212:
                            var0 = undefined;
                            return var0;
                    }
                };
                var24 = var2.bind(var3)(var0, var1);
                var3 = _closure1_slot3;
                var2 = var3.useMemo;
                var0 = var14.message_ids;
                var1 = new Array(2);
                var1[0] = var0;
                var0 = var14.content_id;
                var1[1] = var0;
                var0 = function() { // Environment: var23
                    _fun104189: for (var _fun104189_ip = 0;;) switch (_fun104189_ip) {
                        case 0:
                            var3 = _closure1_slot13;
                            var0 = _closure2_slot0;
                            var0 = var0.message_ids;
                            var4 = undefined;
                            var9 = var3.bind(var4)(var0);
                            var0 = var9.bind(var4)();
                            var6 = var0.done;
                            var3 = 0;
                            var5 = 12;
                            var8 = var0;
                            var7 = 0;
                            var0 = 0;
                            if (var6) {
                                _fun104189_ip = 109;
                                continue _fun104189
                            }
                        case 51:
                            var11 = var8.value;
                            var10 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var6 = var6[var5];
                            var10 = var10.bind(var4)(var6);
                            var6 = var10.extractTimestamp;
                            var6 = var6.bind(var10)(var11);
                            if (!(var6 > var7)) {
                                _fun104189_ip = 91;
                                continue _fun104189
                            }
                        case 88:
                            var7 = var6;
                        case 91:
                            var11 = var9.bind(var4)();
                            var6 = var11.done;
                            var8 = var11;
                            var0 = var7;
                            if (!var6) {
                                _fun104189_ip = 51;
                                continue _fun104189
                            }
                        case 109:
                            if (!(var3 === var0)) {
                                _fun104189_ip = 151;
                                continue _fun104189
                            }
                        case 113:
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var2 = var2[var5];
                            var3 = var3.bind(var4)(var2);
                            var2 = var3.extractTimestamp;
                            var1 = _closure2_slot0;
                            var1 = var1.content_id;
                            var0 = var2.bind(var3)(var1);
                        case 151:
                            return var0;
                    }
                };
                var9 = var2.bind(var3)(var0, var1);
                var6 = null;
                var1 = var6 == var21;
                var0 = null;
                if (var1) {
                    _fun104174_ip = 993;
                    continue _fun104174
                }
            case 484:
                var1 = var6 == var13;
                var0 = null;
                if (var1) {
                    _fun104174_ip = 993;
                    continue _fun104174
                }
            case 496:
                var3 = _closure1_slot11;
                var18 = _closure1_slot0;
                var20 = _closure1_slot2;
                var1 = 14;
                var1 = var20[var1];
                var1 = var18.bind(var4)(var1);
                var2 = var1.GeneratedCandidateContentPost;
                var1 = {};
                var1.guild = var21;
                var1.channel = var13;
                var12 = var14.content_id;
                var1.id = var12;
                var1.timestamp = var9;
                var9 = var14.type;
                var1.type = var9;
                var1.onHeaderPress = var8;
                var1.onHeaderLongPress = var5;
                var9 = _closure1_slot10;
                var8 = _closure1_slot5;
                var5 = {};
                var12 = var11.outerContainer;
                var5.style = var12;
                var15 = _closure1_slot5;
                var12 = {};
                var16 = var11.container;
                var12.style = var16;
                var26 = _closure1_slot10;
                var17 = 16;
                var16 = var20[var17];
                var16 = var18.bind(var4)(var16);
                var19 = var16.Text;
                var16 = {
                    'variant': 'text-lg/semibold',
                    'color': 'mobile-text-heading-primary'
                };
                var27 = var14.primary_text;
                var16.children = var27;
                var19 = var26.bind(var4)(var19, var16);
                var16 = new Array(4);
                var16[0] = var19;
                var19 = _closure1_slot10;
                var17 = var20[var17];
                var17 = var18.bind(var4)(var17);
                var18 = var17.Text;
                var17 = {
                    'variant': 'text-md/normal',
                    'color': 'text-strong'
                };
                var20 = var11.secondaryText;
                var17.style = var20;
                var20 = var14.secondary_text;
                var17.children = var20;
                var17 = var19.bind(var4)(var18, var17);
                var16[1] = var17;
                var18 = var25.length;
                var17 = 0;
                var18 = var18 > var17;
                var17 = null;
                if (!var18) {
                    _fun104174_ip = 815;
                    continue _fun104174
                }
            case 742:
                var20 = _closure1_slot10;
                var19 = _closure1_slot0;
                var26 = _closure1_slot2;
                var18 = 17;
                var18 = var26[var18];
                var18 = var19.bind(var4)(var18);
                var19 = var18.PressableOpacity;
                var18 = {};
                var26 = var11.messages;
                var18.style = var26;
                var18.onPress = var24;
                var24 = var25.map;
                var23 = function(arg0) { // Environment: var23
                    _fun104190: for (var _fun104190_ip = 0;;) switch (_fun104190_ip) {
                        case 0:
                            var1 = arg0;
                            var0 = null;
                            var2 = var0 != var1;
                            if (!var2) {
                                _fun104190_ip = 77;
                                continue _fun104190
                            }
                        case 12:
                            var5 = _closure1_slot10;
                            var3 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var2 = 18;
                            var2 = var4[var2];
                            var4 = undefined;
                            var3 = var3.bind(var4)(var2);
                            var2 = {};
                            var2.message = var1;
                            var6 = _closure2_slot2;
                            var2.channel = var6;
                            var6 = true;
                            var2.showTimestamps = var6;
                            var1 = var1.id;
                            var0 = var5.bind(var4)(var3, var2, var1);
                        case 77:
                            return var0;
                    }
                };
                var23 = var24.bind(var25)(var23);
                var18.children = var23;
                var17 = var20.bind(var4)(var19, var18);
            case 815:
                var16[2] = var17;
                var18 = var22.length;
                var17 = 1;
                var18 = var18 > var17;
                var17 = null;
                if (!var18) {
                    _fun104174_ip = 866;
                    continue _fun104174
                }
            case 836:
                var20 = _closure1_slot10;
                var19 = _closure1_slot15;
                var18 = {};
                var18.authors = var22;
                var21 = var21.id;
                var18.guildId = var21;
                var17 = var20.bind(var4)(var19, var18);
            case 866:
                var16[3] = var17;
                var12.children = var16;
                var12 = var3.bind(var4)(var15, var12);
                var5.children = var12;
                var8 = var9.bind(var4)(var8, var5);
                var5 = new Array(2);
                var5[0] = var8;
                var6 = null;
                if (var7) {
                    _fun104174_ip = 979;
                    continue _fun104174
                }
            case 903:
                var9 = _closure1_slot10;
                var8 = _closure1_slot5;
                var7 = {};
                var11 = var11.footer;
                var7.style = var11;
                var12 = _closure1_slot10;
                var11 = _closure1_slot0;
                var15 = _closure1_slot2;
                var10 = 19;
                var10 = var15[var10];
                var10 = var11.bind(var4)(var10);
                var11 = var10.GeneratedCandidateReplyRow;
                var10 = {};
                var10.item = var14;
                var10.channel = var13;
                var10 = var12.bind(var4)(var11, var10);
                var7.children = var10;
                var6 = var9.bind(var4)(var8, var7);
            case 979:
                var5[1] = var6;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 993:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1372, 1410, 4213, 1613, 33, 13488, 671, 5414, 8031, 566, 21, 8832, 13527, 9057, 3900, 4865, 13542, 13543, 2]);