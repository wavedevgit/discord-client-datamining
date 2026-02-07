// modules/voice_panel/native/card/VoicePanelCardLayoutManager.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var0 = function arg0, arg1() {
        _fun91472: for (var _fun91472_ip = 0;;) switch (_fun91472_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun91472_ip = 46;
                    continue _fun91472
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun91472_ip = 55;
                    continue _fun91472
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun91472_ip = 345;
                    continue _fun91472
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun91472_ip = 323;
                    continue _fun91472
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun91472_ip = 283;
                    continue _fun91472
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun91472_ip = 270;
                    continue _fun91472
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
                    _fun91472_ip = 163;
                    continue _fun91472
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun91472_ip = 179;
                    continue _fun91472
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun91472_ip = 249;
                    continue _fun91472
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun91472_ip = 249;
                    continue _fun91472
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun91472_ip = 234;
                    continue _fun91472
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun91472_ip = 247;
                    continue _fun91472
                }
            case 234:
                var8 = _closure1_slot22;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun91472_ip = 265;
                continue _fun91472;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun91472_ip = 283;
                continue _fun91472;
            case 270:
                var6 = _closure1_slot22;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun91472_ip = 323;
                    continue _fun91472
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
                    _fun91472_ip = 330;
                    continue _fun91472
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun91473: for (var _fun91473_ip = 0;;) switch (_fun91473_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun91473_ip = 56;
                                continue _fun91473
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
                            _fun91473_ip = 67;
                            continue _fun91473;
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
    var _closure1_slot21 = var0;
    var0 = function arg0, arg1() {
        _fun91474: for (var _fun91474_ip = 0;;) switch (_fun91474_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun91474_ip = 23;
                    continue _fun91474
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun91474_ip = 33;
                    continue _fun91474
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
                    _fun91474_ip = 70;
                    continue _fun91474
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun91474_ip = 55;
                    continue _fun91474
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot22 = var0;
    var0 = function arg0, arg1, arg2() {
        _fun91475: for (var _fun91475_ip = 0;;) switch (_fun91475_ip) {
            case 0:
                var3 = arg2;
                var0 = arg0;
                var0 = var3[var0];
                var1 = null;
                if (!(var1 == var0)) {
                    _fun91475_ip = 73;
                    continue _fun91475
                }
            case 16:
                var1 = global;
                var4 = var1.Array;
                var1 = var4.prototype;
                var2 = Object.create(var1, {
                    constructor: {
                        value: var4
                    }
                });
                var5 = arg1;
                var6 = var2;
                var1 = new var6[var4](var5, var4);
                var4 = var1 instanceof Object ? var1 : var2;
                var2 = var4.fill;
                var1 = 0;
                var1 = var2.bind(var4)(var1);
                var2 = var3.push;
                var2 = var2.bind(var3)(var1);
                var0 = var1;
            case 73:
                return var0;
        }
    };
    var _closure1_slot23 = var0;
    var0 = function arg0() {
        _fun91476: for (var _fun91476_ip = 0;;) switch (_fun91476_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.width;
                var0 = var0.height;
                var3 = var1 / var0;
                var0 = 'landscape';
                var1 = 1.3;
                if (!(!(var3 >= var1))) {
                    _fun91476_ip = 62;
                    continue _fun91476
                }
            case 35:
                var1 = 'square';
                var2 = 0.8;
                if (!(var3 <= var2)) {
                    _fun91476_ip = 59;
                    continue _fun91476
                }
            case 53:
                var1 = 'portrait';
            case 59:
                var0 = var1;
            case 62:
                return var0;
        }
    };
    var _closure1_slot24 = var0;
    var0 = function arg0, arg1, arg2, arg3() {
        _fun91477: for (var _fun91477_ip = 0;;) switch (_fun91477_ip) {
            case 0:
                var4 = arg0;
                var1 = arg1;
                var0 = arg2;
                var2 = arg3;
                var3 = 'portrait';
                if (!(var3 !== var4)) {
                    _fun91477_ip = 162;
                    continue _fun91477
                }
            case 25:
                var3 = 'landscape';
                if (!(var3 !== var4)) {
                    _fun91477_ip = 82;
                    continue _fun91477
                }
            case 33:
                var3 = 'square';
                if (!(var3 !== var4)) {
                    _fun91477_ip = 45;
                    continue _fun91477
                }
            case 41:
                var3 = undefined;
                return var3;
            case 45:
                var3 = var0.enlargeSquare;
                if (var3) {
                    _fun91477_ip = 66;
                    continue _fun91477
                }
            case 54:
                var3 = {
                    'width': 1,
                    'height': 1
                };
                _fun91477_ip = 80;
                continue _fun91477;
            case 66:
                var3 = {
                    'width': 2,
                    'height': 2
                };
            case 80:
                return var3;
            case 82:
                var3 = var0.fillAspectRatio;
                if (var3) {
                    _fun91477_ip = 107;
                    continue _fun91477
                }
            case 91:
                var3 = {
                    'width': 2,
                    'height': 1
                };
                _fun91477_ip = 160;
                continue _fun91477;
            case 107:
                if (var1) {
                    _fun91477_ip = 126;
                    continue _fun91477
                }
            case 110:
                var4 = {
                    'width': 2,
                    'height': 2
                };
                _fun91477_ip = 157;
                continue _fun91477;
            case 126:
                var5 = {};
                var7 = 0;
                if (!var2) {
                    _fun91477_ip = 136;
                    continue _fun91477
                }
            case 133:
                var7 = 1;
            case 136:
                var6 = 3;
                var6 = var6 + var7;
                var5.width = var6;
                var6 = 2;
                var5.height = var6;
                var4 = var5;
            case 157:
                var3 = var4;
            case 160:
                return var3;
            case 162:
                var0 = var0.fillAspectRatio;
                if (var0) {
                    _fun91477_ip = 183;
                    continue _fun91477
                }
            case 171:
                var0 = {
                    'width': 1,
                    'height': 2
                };
                _fun91477_ip = 233;
                continue _fun91477;
            case 183:
                if (var1) {
                    _fun91477_ip = 216;
                    continue _fun91477
                }
            case 186:
                var1 = {};
                var3 = 2;
                var1.width = var3;
                var3 = 0;
                if (!var2) {
                    _fun91477_ip = 203;
                    continue _fun91477
                }
            case 200:
                var3 = 1;
            case 203:
                var2 = 3;
                var2 = var2 + var3;
                var1.height = var2;
                _fun91477_ip = 230;
                continue _fun91477;
            case 216:
                var1 = {
                    'width': 2,
                    'height': 2
                };
            case 230:
                var0 = var1;
            case 233:
                return var0;
        }
    };
    var _closure1_slot25 = var0;
    var0 = function arg0() {
        _fun91478: for (var _fun91478_ip = 0;;) switch (_fun91478_ip) {
            case 0:
                var1 = arg0;
                var7 = var1.windowWidth;
                var0 = var1.windowHeight;
                var5 = var1.safeAreaLeft;
                var6 = var1.safeAreaRight;
                var0 = var7 > var0;
                var4 = 3;
                if (!var0) {
                    _fun91478_ip = 40;
                    continue _fun91478
                }
            case 37:
                var4 = 4;
            case 40:
                var0 = global;
                var3 = var0.Math;
                var2 = var3.max;
                var1 = _closure1_slot10;
                var5 = var7 - var5;
                var5 = var5 - var6;
                var6 = _closure1_slot15;
                var0 = 1;
                var0 = var4 - var0;
                var0 = var6 * var0;
                var0 = var5 - var0;
                var0 = var0 / var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot26 = var0;
    var7 = global;
    var10 = var7.Object;
    var9 = var10.defineProperty;
    var4 = {};
    var3 = true;
    var4.value = var3;
    var0 = '__esModule';
    var0 = var9.bind(var10)(var2, var0, var4);
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var8.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var8.bind(var0)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var8.bind(var0)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var9 = var6[var4];
    var4 = arg3;
    var4 = var4.bind(var0)(var9);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.PixelRatio;
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var8.bind(var0)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var8 = var4.VoicePanelCardItemType;
    var _closure1_slot9 = var8;
    var9 = var4.BASE_TARGET_CARD_SIZE;
    var _closure1_slot10 = var9;
    var9 = var4.VoicePanelCTACardDimensionKeys;
    var _closure1_slot11 = var9;
    var9 = var4.VoicePanelCTACardDimensions;
    var _closure1_slot12 = var9;
    var4 = var4.VOICE_PANEL_CHUNK_DIVISOR;
    var _closure1_slot13 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var9 = var4.EDGE_GUTTER;
    var _closure1_slot14 = var9;
    var4 = var4.CALL_TILE_GUTTER;
    var _closure1_slot15 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.ParticipantTypes;
    var _closure1_slot16 = var4;
    var4 = {
        'id': 'invalid',
        'type': null,
        'x': 0,
        'y': 0,
        'width': 0,
        'height': 0,
        'zIndex': 0
    };
    var8 = var8.PARTICIPANT;
    var4.type = var8;
    var _closure1_slot17 = var4;
    var4 = var7.Set;
    var8 = var4.prototype;
    var8 = Object.create(var8, {
        constructor: {
            value: var4
        }
    });
    var14 = var8;
    var4 = new var14[var4](var13);
    var4 = var4 instanceof Object ? var4 : var8;
    var _closure1_slot18 = var4;
    var4 = {
        'enlargeSquare': false,
        'fillAspectRatio': false
    };
    var _closure1_slot19 = var4;
    var4 = {};
    var10 = var7.Set;
    var8 = var10.prototype;
    var9 = Object.create(var8, {
        constructor: {
            value: var10
        }
    });
    var13 = ['1,camera', '2,camera', '2,camera,camera'];
    var14 = var9;
    var8 = new var14[var10](var13, var12);
    var8 = var8 instanceof Object ? var8 : var9;
    var4.match = var8;
    var8 = new Array(1);
    var9 = {
        'enlargeSquare': true,
        'fillAspectRatio': false
    };
    var8[0] = var9;
    var4.layouts = var8;
    var4.global = var3;
    var3 = new Array(2);
    var3[0] = var4;
    var4 = {};
    var9 = var7.Set;
    var7 = var9.prototype;
    var8 = Object.create(var7, {
        constructor: {
            value: var9
        }
    });
    var13 = ['1,stream', '2,stream', '3,stream', '2,stream,camera', '3,stream,camera', '3,stream,camera,camera', '3,camera', '3,camera,stream'];
    var14 = var8;
    var7 = new var14[var9](var13, var12);
    var7 = var7 instanceof Object ? var7 : var8;
    var4.match = var7;
    var7 = new Array(3);
    var8 = {
        'enlargeSquare': true,
        'fillAspectRatio': true
    };
    var7[0] = var8;
    var8 = {
        'enlargeSquare': false,
        'fillAspectRatio': false
    };
    var7[1] = var8;
    var8 = {
        'enlargeSquare': false,
        'fillAspectRatio': false
    };
    var7[2] = var8;
    var4.layouts = var7;
    var3[1] = var4;
    var _closure1_slot20 = var3;
    var3 = function() { // Environment: var1
        var3 = _closure1_slot4;
        var2 = function arg0() {
            var2 = this;
            var3 = _closure1_slot3;
            var1 = _closure2_slot0;
            var0 = undefined;
            var1 = var3.bind(var0)(var2, var1);
            var3 = true;
            var2.dirty = var3;
            var4 = global;
            var1 = var4.Map;
            var5 = var1.prototype;
            var5 = Object.create(var5, {
                constructor: {
                    value: var1
                }
            });
            var9 = var5;
            var1 = new var9[var1](var8);
            var1 = var1 instanceof Object ? var1 : var5;
            var2.targetDimensions = var1;
            var1 = var4.Map;
            var5 = var1.prototype;
            var5 = Object.create(var5, {
                constructor: {
                    value: var1
                }
            });
            var9 = var5;
            var1 = new var9[var1](var8);
            var1 = var1 instanceof Object ? var1 : var5;
            var2.cardCoords = var1;
            var1 = var4.Map;
            var5 = var1.prototype;
            var5 = Object.create(var5, {
                constructor: {
                    value: var1
                }
            });
            var9 = var5;
            var1 = new var9[var1](var8);
            var1 = var1 instanceof Object ? var1 : var5;
            var2.chunkedCoords = var1;
            var1 = 0;
            var5 = {
                'width': 0,
                'height': 0
            };
            var2.contentDimensions = var5;
            var5 = var4.Set;
            var6 = var5.prototype;
            var6 = Object.create(var6, {
                constructor: {
                    value: var5
                }
            });
            var9 = var6;
            var5 = new var9[var5](var8);
            var5 = var5 instanceof Object ? var5 : var6;
            var2.layoutCallbacks = var5;
            var4 = var4.Set;
            var5 = var4.prototype;
            var5 = Object.create(var5, {
                constructor: {
                    value: var4
                }
            });
            var9 = var5;
            var4 = new var9[var4](var8);
            var4 = var4 instanceof Object ? var4 : var5;
            var2.managerSubscriptions = var4;
            var4 = new Array(0);
            var2.items = var4;
            var2.emitItemChanges = var3;
            var3 = false;
            var2.mounted = var3;
            var2.layoutKey = var1;
            var1 = -1;
            var2.lastEmittedLayoutKey = var1;
            var2.emitTimeout = var1;
            var1 = {
                'windowWidth': 0,
                'windowHeight': 0,
                'chunkSize': 0,
                'safeAreaLeft': 0,
                'safeAreaRight': 0,
                'safeAreaTop': 0,
                'safeAreaBottom': 0,
                'gutter': 0,
                'controlBarSize': 0
            };
            var2.props = var1;
            var1 = {
                'width': 0,
                'height': 0
            };
            var2.defaultTargetCoords = var1;
            var1 = arg0;
            var2.channelId = var1;
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'setDirty';
        var0.key = var1;
        var1 = function arg0() {
            _fun91481: for (var _fun91481_ip = 0;;) switch (_fun91481_ip) {
                case 0:
                    var0 = arg0;
                    var1 = this;
                    if (!var0) {
                        _fun91481_ip = 18;
                        continue _fun91481
                    }
                case 9:
                    var2 = var1.dirty;
                    var0 = !var2;
                case 18:
                    if (!var0) {
                        _fun91481_ip = 35;
                        continue _fun91481
                    }
                case 21:
                    var0 = true;
                    var1.dirty = var0;
                    var1.emitItemChanges = var0;
                case 35:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var1;
        var1 = new Array(20);
        var1[0] = var0;
        var0 = {};
        var5 = 'requiresEmit';
        var0.key = var5;
        var5 = function() {
            _fun91482: for (var _fun91482_ip = 0;;) switch (_fun91482_ip) {
                case 0:
                    var0 = this;
                    var2 = var0.lastEmittedLayoutKey;
                    var1 = var0.layoutKey;
                    var1 = var2 !== var1;
                    var2 = var0.layoutKey;
                    var0.lastEmittedLayoutKey = var2;
                    var0 = var0.emitItemChanges;
                    if (var0) {
                        _fun91482_ip = 43;
                        continue _fun91482
                    }
                case 40:
                    var0 = var1;
                case 43:
                    return var0;
            }
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'handleLayoutEffect';
        var0.key = var5;
        var5 = function() {
            var1 = this;
            var0 = true;
            var1.mounted = var0;
            var0 = var1.emitLayoutChanges;
            var0 = var0.bind(var1)();
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'cleanUp';
        var0.key = var5;
        var5 = function() {
            var1 = false;
            var0 = this;
            var0.mounted = var1;
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[3] = var0;
        var0 = {};
        var5 = 'updateState';
        var0.key = var5;
        var5 = function arg0, arg1() {
            _fun91485: for (var _fun91485_ip = 0;;) switch (_fun91485_ip) {
                case 0:
                    var2 = arg0;
                    var3 = arg1;
                    var1 = this;
                    var0 = var3.windowWidth;
                    var7 = var3.windowHeight;
                    var12 = var3.safeAreaLeft;
                    var11 = var3.safeAreaRight;
                    var5 = var3.safeAreaTop;
                    var9 = var3.safeAreaBottom;
                    var4 = var3.controlBarSize;
                    var3 = {};
                    var3.windowHeight = var7;
                    var3.windowWidth = var0;
                    var6 = _closure1_slot13;
                    var6 = var7 / var6;
                    var3.chunkSize = var6;
                    var6 = global;
                    var10 = var6.Math;
                    var7 = var10.max;
                    var8 = _closure1_slot14;
                    var7 = var7.bind(var10)(var12, var8);
                    var3.safeAreaLeft = var7;
                    var10 = var6.Math;
                    var7 = var10.max;
                    var7 = var7.bind(var10)(var11, var8);
                    var3.safeAreaRight = var7;
                    var7 = var6.Math;
                    var6 = var7.max;
                    var6 = var6.bind(var7)(var9, var8);
                    var3.safeAreaBottom = var6;
                    var3.safeAreaTop = var5;
                    var5 = _closure1_slot15;
                    var3.gutter = var5;
                    var3.controlBarSize = var4;
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var0 = 11;
                    var4 = var4[var0];
                    var0 = undefined;
                    var5 = var5.bind(var0)(var4);
                    var4 = var1.props;
                    var4 = var5.bind(var0)(var3, var4);
                    if (var4) {
                        _fun91485_ip = 225;
                        continue _fun91485
                    }
                case 206:
                    var1.props = var3;
                    var4 = var1.setDirty;
                    var3 = true;
                    var3 = var4.bind(var1)(var3);
                case 225:
                    var4 = var1.setDirty;
                    var5 = var1.items;
                    var3 = function arg0, arg1() {
                        _fun91486: for (var _fun91486_ip = 0;;) switch (_fun91486_ip) {
                            case 0:
                                var3 = arg0;
                                var0 = arg1;
                                var _closure4_slot0 = var0;
                                var2 = var3.length;
                                var0 = var0.length;
                                var0 = var2 === var0;
                                if (!var0) {
                                    _fun91486_ip = 50;
                                    continue _fun91486
                                }
                            case 29:
                                var2 = var3.some;
                                var1 = function(arg0, arg1) { // Environment: var1
                                    var1 = _closure4_slot0;
                                    var0 = arg1;
                                    var1 = var1[var0];
                                    var0 = arg0;
                                    var0 = var1 !== var0;
                                    return var0;
                                };
                                var1 = var2.bind(var3)(var1);
                                var0 = !var1;
                            case 50:
                                return var0;
                        }
                    };
                    var3 = var3.bind(var0)(var2, var5);
                    var3 = !var3;
                    var3 = var4.bind(var1)(var3);
                    var1.items = var2;
                    return var0;
            }
        };
        var0.value = var5;
        var1[4] = var0;
        var0 = {};
        var5 = 'getLayoutKey';
        var0.key = var5;
        var5 = function() {
            var0 = this;
            var0 = var0.layoutKey;
            return var0;
        };
        var0.value = var5;
        var1[5] = var0;
        var0 = {};
        var5 = 'getChunk';
        var0.key = var5;
        var5 = function arg0() {
            _fun91489: for (var _fun91489_ip = 0;;) switch (_fun91489_ip) {
                case 0:
                    var0 = this;
                    var2 = var0.chunkedCoords;
                    var1 = var2.get;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    var1 = null;
                    if (!(var1 == var0)) {
                        _fun91489_ip = 35;
                        continue _fun91489
                    }
                case 28:
                    var0 = _closure1_slot18;
                case 35:
                    return var0;
            }
        };
        var0.value = var5;
        var1[6] = var0;
        var0 = {};
        var5 = 'getContentDimensions';
        var0.key = var5;
        var5 = function() {
            var0 = this;
            var1 = var0.computeCardsLayout;
            var1 = var1.bind(var0)();
            var0 = var0.contentDimensions;
            return var0;
        };
        var0.value = var5;
        var1[7] = var0;
        var0 = {};
        var5 = 'getCardCoords';
        var0.key = var5;
        var5 = function arg0() {
            var0 = this;
            var1 = var0.computeCardsLayout;
            var1 = var1.bind(var0)();
            var2 = var0.cardCoords;
            var1 = var2.get;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0.value = var5;
        var1[8] = var0;
        var0 = {};
        var5 = 'getCardCoordsMap';
        var0.key = var5;
        var5 = function() {
            var0 = this;
            var1 = var0.computeCardsLayout;
            var1 = var1.bind(var0)();
            var0 = var0.cardCoords;
            return var0;
        };
        var0.value = var5;
        var1[9] = var0;
        var0 = {};
        var5 = 'getDefaultTargetDimensions';
        var0.key = var5;
        var5 = function() {
            var0 = this;
            var0 = var0.defaultTargetCoords;
            return var0;
        };
        var0.value = var5;
        var1[10] = var0;
        var0 = {};
        var5 = 'getTargetDimensions';
        var0.key = var5;
        var5 = function arg0() {
            _fun91494: for (var _fun91494_ip = 0;;) switch (_fun91494_ip) {
                case 0:
                    var3 = arg0;
                    var1 = this;
                    var4 = null;
                    if (!(var4 != var3)) {
                        _fun91494_ip = 70;
                        continue _fun91494
                    }
                case 12:
                    var5 = _closure1_slot11;
                    var0 = var5.has;
                    var0 = var0.bind(var5)(var3);
                    if (var0) {
                        _fun91494_ip = 60;
                        continue _fun91494
                    }
                case 32:
                    var5 = var1.targetDimensions;
                    var0 = var5.get;
                    var0 = var0.bind(var5)(var3);
                    if (!(var4 == var0)) {
                        _fun91494_ip = 58;
                        continue _fun91494
                    }
                case 52:
                    var0 = var1.defaultTargetCoords;
                case 58:
                    _fun91494_ip = 68;
                    continue _fun91494;
                case 60:
                    var2 = _closure1_slot12;
                    var0 = var2[var3];
                case 68:
                    _fun91494_ip = 76;
                    continue _fun91494;
                case 70:
                    var0 = var1.defaultTargetCoords;
                case 76:
                    return var0;
            }
        };
        var0.value = var5;
        var1[11] = var0;
        var0 = {};
        var5 = 'setTargetDimensions';
        var0.key = var5;
        var5 = function arg0, arg1, arg2() {
            _fun91495: for (var _fun91495_ip = 0;;) switch (_fun91495_ip) {
                case 0:
                    var4 = arg0;
                    var6 = arg1;
                    var5 = arg2;
                    var1 = this;
                    var0 = var1.getTargetDimensions;
                    var2 = var0.bind(var1)(var4);
                    var0 = var2.width;
                    var0 = var0 === var6;
                    if (!var0) {
                        _fun91495_ip = 44;
                        continue _fun91495
                    }
                case 35:
                    var2 = var2.height;
                    var0 = var2 === var5;
                case 44:
                    if (var0) {
                        _fun91495_ip = 97;
                        continue _fun91495
                    }
                case 47:
                    var3 = var1.targetDimensions;
                    var2 = var3.set;
                    var0 = {};
                    var0.width = var6;
                    var0.height = var5;
                    var0 = var2.bind(var3)(var4, var0);
                    var2 = var1.setDirty;
                    var0 = true;
                    var0 = var2.bind(var1)(var0);
                    var0 = var1.deferredLayoutChange;
                    var0 = var0.bind(var1)();
                case 97:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[12] = var0;
        var0 = {};
        var5 = 'resetTargetDimensions';
        var0.key = var5;
        var5 = function arg0() {
            _fun91496: for (var _fun91496_ip = 0;;) switch (_fun91496_ip) {
                case 0:
                    var3 = arg0;
                    var1 = this;
                    var2 = var1.targetDimensions;
                    var0 = var2.has;
                    var0 = var0.bind(var2)(var3);
                    if (!var0) {
                        _fun91496_ip = 64;
                        continue _fun91496
                    }
                case 25:
                    var2 = var1.targetDimensions;
                    var0 = var2.delete;
                    var0 = var0.bind(var2)(var3);
                    var2 = var1.setDirty;
                    var0 = true;
                    var0 = var2.bind(var1)(var0);
                    var0 = var1.deferredLayoutChange;
                    var0 = var0.bind(var1)();
                case 64:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[13] = var0;
        var0 = {};
        var5 = 'setTargetAspectRatio';
        var0.key = var5;
        var5 = function arg0, arg1() {
            _fun91497: for (var _fun91497_ip = 0;;) switch (_fun91497_ip) {
                case 0:
                    var4 = arg0;
                    var2 = arg1;
                    var1 = this;
                    var0 = 'portrait';
                    if (!(var0 !== var2)) {
                        _fun91497_ip = 65;
                        continue _fun91497
                    }
                case 19:
                    var0 = 'landscape';
                    if (!(var0 !== var2)) {
                        _fun91497_ip = 49;
                        continue _fun91497
                    }
                case 27:
                    var0 = 'square';
                    var3 = undefined;
                    if (!(var0 === var2)) {
                        _fun91497_ip = 75;
                        continue _fun91497
                    }
                case 37:
                    var3 = {
                        'width': 1,
                        'height': 1
                    };
                    _fun91497_ip = 75;
                    continue _fun91497;
                case 49:
                    var3 = {
                        'width': 2,
                        'height': 1
                    };
                    _fun91497_ip = 75;
                    continue _fun91497;
                case 65:
                    var3 = {
                        'width': 1,
                        'height': 2
                    };
                case 75:
                    var0 = var1.getTargetDimensions;
                    var2 = var0.bind(var1)(var4);
                    var5 = var2.width;
                    var0 = var3.width;
                    var0 = var5 === var0;
                    if (!var0) {
                        _fun91497_ip = 117;
                        continue _fun91497
                    }
                case 103:
                    var5 = var2.height;
                    var2 = var3.height;
                    var0 = var5 === var2;
                case 117:
                    if (var0) {
                        _fun91497_ip = 160;
                        continue _fun91497
                    }
                case 120:
                    var2 = var1.targetDimensions;
                    var0 = var2.set;
                    var0 = var0.bind(var2)(var4, var3);
                    var2 = var1.setDirty;
                    var0 = true;
                    var0 = var2.bind(var1)(var0);
                    var0 = var1.deferredLayoutChange;
                    var0 = var0.bind(var1)();
                case 160:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[14] = var0;
        var0 = {};
        var5 = 'computeCardsLayout';
        var0.key = var5;
        var5 = function() {
            _fun91498: for (var _fun91498_ip = 0;;) switch (_fun91498_ip) {
                case 0:
                    var2 = this;
                    var _closure3_slot0 = var2;
                    var _closure3_slot1 = var2;
                    var1 = var2.dirty;
                    var0 = undefined;
                    if (!var1) {
                        _fun91498_ip = 1922;
                        continue _fun91498
                    }
                case 27:
                    var5 = global;
                    var1 = var5.Map;
                    var4 = var1.prototype;
                    var4 = Object.create(var4, {
                        constructor: {
                            value: var1
                        }
                    });
                    var29 = var4;
                    var1 = new var29[var1](var28);
                    var1 = var1 instanceof Object ? var1 : var4;
                    var2.cardCoords = var1;
                    var1 = var5.Map;
                    var4 = var1.prototype;
                    var4 = Object.create(var4, {
                        constructor: {
                            value: var1
                        }
                    });
                    var29 = var4;
                    var1 = new var29[var1](var28);
                    var1 = var1 instanceof Object ? var1 : var4;
                    var2.chunkedCoords = var1;
                    var1 = var2.props;
                    var14 = var1.windowWidth;
                    var _closure3_slot2 = var14;
                    var17 = var1.windowHeight;
                    var _closure3_slot3 = var17;
                    var23 = var1.safeAreaLeft;
                    var24 = var1.safeAreaRight;
                    var20 = var1.safeAreaTop;
                    var12 = var1.safeAreaBottom;
                    var6 = var1.gutter;
                    var18 = var1.controlBarSize;
                    var1 = var5.Set;
                    var4 = var1.prototype;
                    var4 = Object.create(var4, {
                        constructor: {
                            value: var1
                        }
                    });
                    var29 = var4;
                    var1 = new var29[var1](var28);
                    var16 = var1 instanceof Object ? var1 : var4;
                    var _closure3_slot4 = var16;
                    var1 = var5.Set;
                    var4 = var1.prototype;
                    var4 = Object.create(var4, {
                        constructor: {
                            value: var1
                        }
                    });
                    var29 = var4;
                    var1 = new var29[var1](var28);
                    var15 = var1 instanceof Object ? var1 : var4;
                    var _closure3_slot5 = var15;
                    var1 = var5.Set;
                    var4 = var1.prototype;
                    var4 = Object.create(var4, {
                        constructor: {
                            value: var1
                        }
                    });
                    var29 = var4;
                    var1 = new var29[var1](var28);
                    var13 = var1 instanceof Object ? var1 : var4;
                    var _closure3_slot6 = var13;
                    var7 = var5.Set;
                    var28 = var2.items;
                    var4 = var7.prototype;
                    var4 = Object.create(var4, {
                        constructor: {
                            value: var7
                        }
                    });
                    var29 = var4;
                    var1 = new var29[var7](var28, var27);
                    var11 = var1 instanceof Object ? var1 : var4;
                    var _closure3_slot7 = var11;
                    var1 = var2.items;
                    var7 = var1.length;
                    var1 = var5.HermesInternal;
                    var4 = var1.concat;
                    var1 = '';
                    var1 = var4.bind(var1)(var7);
                    var _closure3_slot8 = var1;
                    var10 = 0;
                    var _closure3_slot9 = var10;
                    var9 = function arg0() {
                        _fun91499: for (var _fun91499_ip = 0;;) switch (_fun91499_ip) {
                            case 0:
                                var2 = arg0;
                                var6 = _closure1_slot8;
                                var5 = var6.getParticipant;
                                var3 = _closure3_slot1;
                                var4 = var3.channelId;
                                var3 = var2.id;
                                var5 = var5.bind(var6)(var4, var3);
                                var4 = var2.type;
                                var3 = _closure1_slot9;
                                var3 = var3.CTA;
                                if (!(var4 !== var3)) {
                                    _fun91499_ip = 176;
                                    continue _fun91499
                                }
                            case 58:
                                var3 = null;
                                var3 = var3 == var5;
                                var6 = undefined;
                                var4 = undefined;
                                if (var3) {
                                    _fun91499_ip = 174;
                                    continue _fun91499
                                }
                            case 71:
                                var7 = var5.type;
                                var3 = _closure1_slot16;
                                var3 = var3.USER;
                                if (!(var7 === var3)) {
                                    _fun91499_ip = 120;
                                    continue _fun91499
                                }
                            case 90:
                                var7 = _closure1_slot1;
                                var8 = _closure1_slot2;
                                var3 = 12;
                                var3 = var8[var3];
                                var3 = var7.bind(var6)(var3);
                                var3 = var3.bind(var6)(var5);
                                var4 = undefined;
                                if (!var3) {
                                    _fun91499_ip = 174;
                                    continue _fun91499
                                }
                            case 120:
                                var6 = var5.type;
                                var3 = _closure1_slot16;
                                var3 = var3.USER;
                                if (!(var6 !== var3)) {
                                    _fun91499_ip = 161;
                                    continue _fun91499
                                }
                            case 139:
                                var7 = _closure3_slot1;
                                var6 = var7.getTargetDimensions;
                                var3 = var2.id;
                                var3 = var6.bind(var7)(var3);
                                _fun91499_ip = 171;
                                continue _fun91499;
                            case 161:
                                var6 = _closure3_slot1;
                                var3 = var6.defaultTargetCoords;
                            case 171:
                                var4 = var3;
                            case 174:
                                _fun91499_ip = 196;
                                continue _fun91499;
                            case 176:
                                var7 = _closure3_slot1;
                                var6 = var7.getTargetDimensions;
                                var3 = var2.id;
                                var4 = var6.bind(var7)(var3);
                            case 196:
                                var3 = null;
                                if (!(var3 != var4)) {
                                    _fun91499_ip = 430;
                                    continue _fun91499
                                }
                            case 205:
                                if (!(var3 != var5)) {
                                    _fun91499_ip = 430;
                                    continue _fun91499
                                }
                            case 212:
                                var6 = {};
                                var3 = 'custom';
                                var6.type = var3;
                                var6.item = var2;
                                var7 = var5.type;
                                var3 = _closure1_slot16;
                                var4 = var3.USER;
                                var4 = var7 === var4;
                                var6.forceSquare = var4;
                                var4 = var5.type;
                                var3 = var3.ACTIVITY;
                                if (!(var3 !== var4)) {
                                    _fun91499_ip = 325;
                                    continue _fun91499
                                }
                            case 265:
                                var3 = _closure1_slot16;
                                var3 = var3.STREAM;
                                if (!(var3 !== var4)) {
                                    _fun91499_ip = 309;
                                    continue _fun91499
                                }
                            case 279:
                                var3 = _closure1_slot16;
                                var3 = var3.USER;
                                if (!(var3 === var4)) {
                                    _fun91499_ip = 339;
                                    continue _fun91499
                                }
                            case 293:
                                var4 = _closure3_slot6;
                                var3 = var4.add;
                                var3 = var3.bind(var4)(var6);
                                _fun91499_ip = 339;
                                continue _fun91499;
                            case 309:
                                var4 = _closure3_slot5;
                                var3 = var4.add;
                                var3 = var3.bind(var4)(var6);
                                _fun91499_ip = 339;
                                continue _fun91499;
                            case 325:
                                var4 = _closure3_slot4;
                                var3 = var4.add;
                                var3 = var3.bind(var4)(var6);
                            case 339:
                                var3 = _closure3_slot8;
                                var7 = var5.type;
                                var4 = _closure1_slot16;
                                var6 = var4.STREAM;
                                var4 = 'stream';
                                if (!(var7 !== var6)) {
                                    _fun91499_ip = 396;
                                    continue _fun91499
                                }
                            case 366:
                                var6 = var5.type;
                                var1 = _closure1_slot16;
                                var5 = var1.USER;
                                var1 = 'activity';
                                if (!(var6 === var5)) {
                                    _fun91499_ip = 393;
                                    continue _fun91499
                                }
                            case 389:
                                var1 = 'camera';
                            case 393:
                                var4 = var1;
                            case 396:
                                var1 = ',';
                                var1 = var1 + var4;
                                var1 = var3 + var1;
                                _closure3_slot8 = var1;
                                var1 = _closure3_slot7;
                                var0 = var1.delete;
                                var0 = var0.bind(var1)(var2);
                                var0 = undefined;
                                return var0;
                            case 430:
                                var0 = 1;
                                return var0;
                        }
                    };
                    var4 = _closure1_slot21;
                    var8 = var4.bind(var0)(var11);
                    var7 = var8.bind(var0)();
                    var4 = var7.done;
                    if (var4) {
                        _fun91498_ip = 378;
                        continue _fun91498
                    }
                case 350:
                    var4 = var7.value;
                    var4 = var9.bind(var0)(var4);
                    if (var4) {
                        _fun91498_ip = 378;
                        continue _fun91498
                    }
                case 363:
                    var19 = var8.bind(var0)();
                    var4 = var19.done;
                    var7 = var19;
                    if (!var4) {
                        _fun91498_ip = 350;
                        continue _fun91498
                    }
                case 378:
                    var4 = var16.size;
                    var9 = null;
                    var22 = null;
                    if (!(var10 === var4)) {
                        _fun91498_ip = 412;
                        continue _fun91498
                    }
                case 391:
                    var8 = _closure1_slot20;
                    var7 = var8.find;
                    var4 = function(arg0) { // Environment: var3
                        var0 = arg0;
                        var2 = var0.match;
                        var1 = var2.has;
                        var0 = _closure3_slot8;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var22 = var7.bind(var8)(var4);
                case 412:
                    var _closure3_slot11 = var22;
                    var8 = var5.Math;
                    var7 = var8.max;
                    var19 = _closure1_slot1;
                    var21 = _closure1_slot2;
                    var4 = 13;
                    var4 = var21[var4];
                    var19 = var19.bind(var0)(var4);
                    var4 = {};
                    var4.top = var20;
                    var4.left = var23;
                    var4.right = var24;
                    var4.bottom = var12;
                    var4 = var19.bind(var0)(var4);
                    var4 = var4.height;
                    var19 = var17 - var4;
                    var4 = _closure1_slot14;
                    var4 = var19 - var4;
                    var4 = var4 - var18;
                    var4 = var4 - var12;
                    var12 = 120;
                    var18 = var7.bind(var8)(var12, var4);
                    var8 = var5.Math;
                    var7 = var8.max;
                    var4 = var14 - var23;
                    var4 = var4 - var24;
                    var12 = var7.bind(var8)(var12, var4);
                    if (!(var9 == var22)) {
                        _fun91498_ip = 787;
                        continue _fun91498
                    }
                case 536:
                    var4 = var16.size;
                    if (!(!(var4 > var10))) {
                        _fun91498_ip = 787;
                        continue _fun91498
                    }
                case 548:
                    var7 = _closure1_slot26;
                    var4 = {};
                    var4.windowWidth = var14;
                    var4.windowHeight = var17;
                    var4.safeAreaLeft = var23;
                    var4.safeAreaRight = var24;
                    var8 = var7.bind(var0)(var4);
                    var4 = var2.items;
                    var7 = var4.length;
                    var4 = 7;
                    if (!(!(var7 >= var4))) {
                        _fun91498_ip = 694;
                        continue _fun91498
                    }
                case 596:
                    var4 = var2.items;
                    var4 = var4.length;
                    if (!(var10 !== var4)) {
                        _fun91498_ip = 694;
                        continue _fun91498
                    }
                case 610:
                    var7 = _closure1_slot1;
                    var19 = _closure1_slot2;
                    var4 = 14;
                    var4 = var19[var4];
                    var7 = var7.bind(var0)(var4);
                    var4 = {};
                    var19 = var2.items;
                    var19 = var19.length;
                    var4.cardCount = var19;
                    var4.gutterSize = var6;
                    var4.availableWidth = var12;
                    var4.availableHeight = var18;
                    var4 = var7.bind(var0)(var4);
                    var7 = var4.columns;
                    _closure3_slot9 = var7;
                    var21 = var4.cardSize;
                    var4 = var7;
                    var12 = var4;
                    _fun91498_ip = 922;
                    continue _fun91498;
                case 694:
                    var20 = var5.Math;
                    var19 = var20.max;
                    var7 = var14 - var23;
                    var7 = var7 - var24;
                    var7 = var7 / var8;
                    var7 = var7 | 0;
                    var8 = 1;
                    var7 = var19.bind(var20)(var7, var8);
                    _closure3_slot9 = var7;
                    var20 = _closure1_slot7;
                    var19 = var20.roundToNearestPixel;
                    var25 = var14 - var23;
                    var25 = var25 - var24;
                    var26 = _closure1_slot15;
                    var8 = var7 - var8;
                    var8 = var26 * var8;
                    var8 = var25 - var8;
                    var8 = var8 / var7;
                    var21 = var19.bind(var20)(var8);
                    var4 = var7;
                    var12 = var4;
                    _fun91498_ip = 922;
                    continue _fun91498;
                case 787:
                    var8 = _closure1_slot26;
                    var7 = {};
                    var7.windowWidth = var14;
                    var7.windowHeight = var17;
                    var7.safeAreaLeft = var23;
                    var7.safeAreaRight = var24;
                    var8 = var8.bind(var0)(var7);
                    var19 = var5.Math;
                    var17 = var19.max;
                    var25 = var5.Math;
                    var20 = var25.min;
                    var7 = var14 - var23;
                    var7 = var7 - var24;
                    var7 = var7 / var8;
                    var8 = var7 | 0;
                    var7 = 4;
                    var7 = var20.bind(var25)(var8, var7);
                    var8 = 1;
                    var7 = var17.bind(var19)(var7, var8);
                    _closure3_slot9 = var7;
                    var19 = _closure1_slot7;
                    var17 = var19.roundToNearestPixel;
                    var20 = var14 - var23;
                    var20 = var20 - var24;
                    var8 = var7 - var8;
                    var8 = var6 * var8;
                    var8 = var20 - var8;
                    var8 = var8 / var7;
                    var21 = var17.bind(var19)(var8);
                    var4 = var7;
                    var12 = var4;
                case 922:
                    var8 = var9 == var22;
                    var7 = undefined;
                    if (var8) {
                        _fun91498_ip = 937;
                        continue _fun91498
                    }
                case 931:
                    var7 = var22.global;
                case 937:
                    var20 = true;
                    if (!(var20 === var7)) {
                        _fun91498_ip = 957;
                        continue _fun91498
                    }
                case 943:
                    var7 = var22.layouts;
                    var7 = var7[var10];
                    var _closure3_slot10 = var7;
                case 957:
                    var17 = var5.Math;
                    var8 = var17.floor;
                    var7 = var2.items;
                    var7 = var7.length;
                    var7 = var7 / var12;
                    var17 = var8.bind(var17)(var7);
                    var7 = var2.items;
                    var7 = var7.length;
                    var19 = var7 % var12;
                    var7 = 1;
                    var8 = var7;
                    if (!(var19 == var10)) {
                        _fun91498_ip = 1014;
                        continue _fun91498
                    }
                case 1012:
                    var8 = 0;
                case 1014:
                    var19 = var17 + var8;
                    var8 = {};
                    var17 = var21;
                    if (!(var9 == var22)) {
                        _fun91498_ip = 1061;
                        continue _fun91498
                    }
                case 1027:
                    var17 = var21;
                    if (!(var7 === var12)) {
                        _fun91498_ip = 1061;
                        continue _fun91498
                    }
                case 1034:
                    var17 = var21;
                    if (!(var19 > var7)) {
                        _fun91498_ip = 1061;
                        continue _fun91498
                    }
                case 1041:
                    var25 = var16.size;
                    var17 = var21;
                    if (!(var10 === var25)) {
                        _fun91498_ip = 1061;
                        continue _fun91498
                    }
                case 1053:
                    var23 = var14 - var23;
                    var17 = var23 - var24;
                case 1061:
                    var8.width = var17;
                    var17 = var21;
                    if (!(var9 == var22)) {
                        _fun91498_ip = 1101;
                        continue _fun91498
                    }
                case 1072:
                    var17 = var21;
                    if (!(var7 === var19)) {
                        _fun91498_ip = 1101;
                        continue _fun91498
                    }
                case 1079:
                    var17 = var21;
                    if (!(var12 > var7)) {
                        _fun91498_ip = 1101;
                        continue _fun91498
                    }
                case 1086:
                    var19 = var16.size;
                    var17 = var21;
                    if (!(var10 === var19)) {
                        _fun91498_ip = 1101;
                        continue _fun91498
                    }
                case 1098:
                    var17 = var18;
                case 1101:
                    var8.height = var17;
                    var18 = _closure1_slot1;
                    var19 = _closure1_slot2;
                    var17 = 11;
                    var17 = var19[var17];
                    var18 = var18.bind(var0)(var17);
                    var17 = var2.defaultTargetCoords;
                    var17 = var18.bind(var0)(var8, var17);
                    if (var17) {
                        _fun91498_ip = 1146;
                        continue _fun91498
                    }
                case 1140:
                    var2.defaultTargetCoords = var8;
                case 1146:
                    var8 = {};
                    var17 = var2.defaultTargetCoords;
                    var17 = var17.width;
                    var8.cardWidth = var17;
                    var17 = var2.defaultTargetCoords;
                    var17 = var17.height;
                    var8.cardHeight = var17;
                    var8.gutter = var6;
                    var17 = var2.items;
                    var17 = var17.length;
                    var8.totalItems = var17;
                    var8.windowWidth = var14;
                    var _closure3_slot12 = var8;
                    var5 = var5.Array;
                    var8 = var5.prototype;
                    var8 = Object.create(var8, {
                        constructor: {
                            value: var5
                        }
                    });
                    var29 = var8;
                    var28 = var12;
                    var5 = new var29[var5](var28, var27);
                    var8 = var5 instanceof Object ? var5 : var8;
                    var5 = var8.fill;
                    var5 = var5.bind(var8)(var10);
                    var8 = new Array(1);
                    var8[0] = var5;
                    var _closure3_slot13 = var8;
                    var5 = -1;
                    var _closure3_slot14 = var5;
                    var _closure3_slot15 = var5;
                    var _closure3_slot16 = var5;
                    var _closure3_slot17 = var10;
                    var5 = new Array(0);
                    var _closure3_slot18 = var5;
                    var14 = function arg0, arg1, arg2, arg3() {
                        _fun91501: for (var _fun91501_ip = 0;;) switch (_fun91501_ip) {
                            case 0:
                                var3 = arg0;
                                var2 = {};
                                var0 = _closure3_slot13;
                                var2.grid = var0;
                                var0 = _closure3_slot14;
                                var2.lastFullyFilledRow = var0;
                                var0 = arg2;
                                var2.width = var0;
                                var0 = arg3;
                                var2.height = var0;
                                var0 = _closure3_slot9;
                                var2.columns = var0;
                                var20 = var2.grid;
                                var0 = var2.lastFullyFilledRow;
                                var6 = var2.width;
                                var19 = var2.height;
                                var18 = var2.columns;
                                var5 = global;
                                var4 = var5.Math;
                                var2 = var4.min;
                                var17 = var2.bind(var4)(var6, var18);
                                var6 = 1;
                                if (!(var6 === var18)) {
                                    _fun91501_ip = 106;
                                    continue _fun91501
                                }
                            case 103:
                                var19 = var6;
                            case 106:
                                var16 = var0 + var6;
                                var0 = undefined;
                                var12 = -1;
                                var11 = null;
                                var4 = 0;
                                var14 = undefined;
                                var13 = var12;
                                var10 = var13;
                                var9 = undefined;
                                var8 = undefined;
                                var7 = undefined;
                            case 139:
                                var2 = _closure1_slot23;
                                var22 = var2.bind(var0)(var16, var18, var20);
                                var2 = var22.length;
                                var2 = var4 < var2;
                                var26 = var16;
                                var21 = 0;
                                var23 = var13;
                                var24 = var10;
                                if (!var2) {
                                    _fun91501_ip = 222;
                                    continue _fun91501
                                }
                            case 173:
                                var2 = var22[var21];
                                if (!(var6 !== var2)) {
                                    _fun91501_ip = 204;
                                    continue _fun91501
                                }
                            case 181:
                                var2 = var17 - var6;
                                var25 = var21 + var2;
                                var2 = var22.length;
                                var23 = var26;
                                var24 = var21;
                                if (!(var25 >= var2)) {
                                    _fun91501_ip = 222;
                                    continue _fun91501
                                }
                            case 204:
                                var21 = var21 + 1;
                                var2 = var22.length;
                                var23 = var13;
                                var24 = var10;
                                if (var21 < var2) {
                                    _fun91501_ip = 173;
                                    continue _fun91501
                                }
                            case 222:
                                if (!(var12 !== var23)) {
                                    _fun91501_ip = 230;
                                    continue _fun91501
                                }
                            case 226:
                                if (!(var12 === var24)) {
                                    _fun91501_ip = 253;
                                    continue _fun91501
                                }
                            case 230:
                                var16 = var26 + 1;
                                var2 = var14;
                                var13 = var12;
                                var10 = var13;
                                var22 = var8;
                                var21 = var7;
                                _fun91501_ip = 514;
                                continue _fun91501;
                            case 253:
                                var25 = var19 - var6;
                                var27 = var23 + var25;
                                var30 = var23;
                                var29 = var24;
                                var28 = var30;
                                var25 = var28;
                                var24 = var29;
                                var23 = var25;
                                if (!(var23 <= var27)) {
                                    _fun91501_ip = 442;
                                    continue _fun91501
                                }
                            case 286:
                                var27 = _closure1_slot23;
                                var33 = var27.bind(var0)(var28, var18, var20);
                                var27 = var17 - var6;
                                var31 = var29 + var27;
                                var27 = var28;
                                var36 = var29;
                                var35 = var30;
                                var34 = var36;
                                var32 = var34;
                                if (!(var32 <= var31)) {
                                    _fun91501_ip = 365;
                                    continue _fun91501
                                }
                            case 324:
                                var31 = var33[var36];
                                var35 = var12;
                                var34 = var35;
                                var32 = var36;
                                if (!(var4 === var31)) {
                                    _fun91501_ip = 365;
                                    continue _fun91501
                                }
                            case 341:
                                var36 = var36 + 1;
                                var31 = var17 - var6;
                                var31 = var29 + var31;
                                var35 = var30;
                                var34 = var29;
                                var32 = var36;
                                if (var32 <= var31) {
                                    _fun91501_ip = 324;
                                    continue _fun91501
                                }
                            case 365:
                                var25 = var35;
                                var24 = var34;
                                var23 = var27;
                                var8 = var33;
                                var7 = var32;
                                if (!(var12 !== var34)) {
                                    _fun91501_ip = 442;
                                    continue _fun91501
                                }
                            case 384:
                                var24 = var34;
                                var23 = var27;
                                var8 = var33;
                                var7 = var32;
                                var25 = var35;
                                if (!(var12 !== var25)) {
                                    _fun91501_ip = 442;
                                    continue _fun91501
                                }
                            case 403:
                                var28 = var27 + 1;
                                var27 = var19 - var6;
                                var27 = var35 + var27;
                                var30 = var35;
                                var29 = var34;
                                var25 = var30;
                                var24 = var29;
                                var8 = var33;
                                var7 = var32;
                                var23 = var28;
                                if (var23 <= var27) {
                                    _fun91501_ip = 286;
                                    continue _fun91501
                                }
                            case 442:
                                if (!(var12 !== var25)) {
                                    _fun91501_ip = 450;
                                    continue _fun91501
                                }
                            case 446:
                                if (!(var12 === var24)) {
                                    _fun91501_ip = 473;
                                    continue _fun91501
                                }
                            case 450:
                                var16 = var26 + 1;
                                var2 = var14;
                                var13 = var25;
                                var10 = var24;
                                var9 = var23;
                                var22 = var8;
                                var21 = var7;
                                _fun91501_ip = 514;
                                continue _fun91501;
                            case 473:
                                var27 = {};
                                var27.startRow = var25;
                                var27.startCol = var24;
                                var27.width = var17;
                                var27.height = var19;
                                var2 = var27;
                                var16 = var26;
                                var13 = var25;
                                var10 = var24;
                                var9 = var23;
                                var22 = var8;
                                var21 = var7;
                            case 514:
                                var8 = var22;
                                var7 = var21;
                                var14 = var2;
                                if (var11 == var14) {
                                    _fun91501_ip = 139;
                                    continue _fun91501
                                }
                            case 530:
                                var10 = _closure3_slot13;
                                var9 = _closure3_slot14;
                                var16 = var2.startRow;
                                var15 = var2.startCol;
                                var14 = var2.width;
                                var13 = var2.height;
                                var7 = var16 + var13;
                                var8 = var16;
                                if (!(var8 < var7)) {
                                    _fun91501_ip = 612;
                                    continue _fun91501
                                }
                            case 571:
                                var7 = var15 + var14;
                                var17 = var15;
                                if (!(var17 < var7)) {
                                    _fun91501_ip = 601;
                                    continue _fun91501
                                }
                            case 582:
                                var7 = var10[var8];
                                var7[var17] = var6;
                                var17 = var17 + 1;
                                var7 = var15 + var14;
                                if (var17 < var7) {
                                    _fun91501_ip = 582;
                                    continue _fun91501
                                }
                            case 601:
                                var8 = var8 + 1;
                                var7 = var16 + var13;
                                if (var8 < var7) {
                                    _fun91501_ip = 571;
                                    continue _fun91501
                                }
                            case 612:
                                var8 = var9 + var6;
                            case 616:
                                var14 = var10[var8];
                                var7 = var9;
                                if (!(var11 != var14)) {
                                    _fun91501_ip = 653;
                                    continue _fun91501
                                }
                            case 627:
                                var13 = var14.indexOf;
                                var13 = var13.bind(var14)(var4);
                                if (!(var12 === var13)) {
                                    _fun91501_ip = 653;
                                    continue _fun91501
                                }
                            case 642:
                                var13 = var8 + 1;
                                var9 = var8;
                                var8 = var13;
                                _fun91501_ip = 616;
                                continue _fun91501;
                            case 653:
                                _closure3_slot14 = var7;
                                var10 = var5.Math;
                                var9 = var10.min;
                                var13 = var5.Math;
                                var12 = var13.max;
                                var8 = _closure3_slot16;
                                var14 = var2.startCol;
                                var7 = var2.width;
                                var7 = var7 - var6;
                                var7 = var14 + var7;
                                var8 = var12.bind(var13)(var8, var7);
                                var7 = _closure3_slot9;
                                var7 = var9.bind(var10)(var8, var7);
                                _closure3_slot16 = var7;
                                var7 = _closure3_slot12;
                                var8 = _closure3_slot17;
                                var9 = {};
                                var9.id = var3;
                                var10 = arg1;
                                var9.type = var10;
                                var12 = var2.startCol;
                                var13 = var7.gutter;
                                var10 = var7.cardWidth;
                                var10 = var13 + var10;
                                var10 = var12 * var10;
                                var9.x = var10;
                                var12 = var2.startRow;
                                var13 = var7.gutter;
                                var10 = var7.cardHeight;
                                var10 = var13 + var10;
                                var10 = var12 * var10;
                                var9.y = var10;
                                var12 = var7.cardWidth;
                                var10 = var2.width;
                                var12 = var12 * var10;
                                var10 = var2.width;
                                var13 = var10 - var6;
                                var10 = var7.gutter;
                                var10 = var13 * var10;
                                var10 = var12 + var10;
                                var9.width = var10;
                                var12 = var7.cardHeight;
                                var10 = var2.height;
                                var12 = var12 * var10;
                                var10 = var2.height;
                                var13 = var10 - var6;
                                var10 = var7.gutter;
                                var10 = var13 * var10;
                                var10 = var12 + var10;
                                var9.height = var10;
                                var7 = var7.totalItems;
                                var7 = var7 - var8;
                                var9.zIndex = var7;
                                var12 = var9.y;
                                var7 = var9.height;
                                var8 = _closure3_slot0;
                                var8 = var8.props;
                                var8 = var8.chunkSize;
                                var10 = var12 / var8;
                                var13 = var10 | 0;
                                var10 = new Array(2);
                                var10[0] = var13;
                                var7 = var12 + var7;
                                var7 = var7 / var8;
                                var7 = var7 | 0;
                                var10[1] = var7;
                                var8 = var10[var4];
                                var7 = var10[var6];
                                if (!(var8 <= var7)) {
                                    _fun91501_ip = 1067;
                                    continue _fun91501
                                }
                            case 969:
                                var7 = _closure3_slot0;
                                var12 = var7.chunkedCoords;
                                var7 = var12.get;
                                var13 = var7.bind(var12)(var8);
                                var7 = var8;
                                if (!(var11 == var13)) {
                                    _fun91501_ip = 1046;
                                    continue _fun91501
                                }
                            case 996:
                                var12 = var5.Set;
                                var14 = var12.prototype;
                                var14 = Object.create(var14, {
                                    constructor: {
                                        value: var12
                                    }
                                });
                                var41 = var14;
                                var12 = new var41[var12](var40);
                                var12 = var12 instanceof Object ? var12 : var14;
                                var14 = _closure3_slot0;
                                var15 = var14.chunkedCoords;
                                var14 = var15.set;
                                var14 = var14.bind(var15)(var7, var12);
                                var13 = var12;
                            case 1046:
                                var12 = var13.add;
                                var12 = var12.bind(var13)(var9);
                                var8 = var7 + 1;
                                var7 = var10[var6];
                                if (var8 <= var7) {
                                    _fun91501_ip = 969;
                                    continue _fun91501
                                }
                            case 1067:
                                var7 = _closure3_slot0;
                                var8 = var7.cardCoords;
                                var7 = var8.set;
                                var7 = var7.bind(var8)(var3, var9);
                                var9 = var5.Math;
                                var8 = var9.max;
                                var7 = _closure3_slot15;
                                var10 = var2.startRow;
                                var5 = var2.height;
                                var5 = var10 + var5;
                                var5 = var5 - var6;
                                var7 = var8.bind(var9)(var7, var5);
                                _closure3_slot15 = var7;
                                var5 = _closure3_slot14;
                                if (!(var7 !== var5)) {
                                    _fun91501_ip = 1163;
                                    continue _fun91501
                                }
                            case 1140:
                                var5 = var2.height;
                                if (!(var6 === var5)) {
                                    _fun91501_ip = 1163;
                                    continue _fun91501
                                }
                            case 1149:
                                var5 = var2.startRow;
                                var2 = _closure3_slot15;
                                if (!(var5 !== var2)) {
                                    _fun91501_ip = 1175;
                                    continue _fun91501
                                }
                            case 1163:
                                var2 = _closure3_slot18;
                                var2.length = var4;
                                _fun91501_ip = 1189;
                                continue _fun91501;
                            case 1175:
                                var2 = _closure3_slot18;
                                var1 = var2.push;
                                var1 = var1.bind(var2)(var3);
                            case 1189:
                                return var0;
                        }
                    };
                    var _closure3_slot19 = var14;
                    var14 = var2.items;
                    var14 = var14.length;
                    var14 = var7 === var14;
                    var _closure3_slot20 = var14;
                    var14 = new Array(4);
                    var14[0] = var16;
                    var14[1] = var15;
                    var14[2] = var13;
                    var14[3] = var11;
                    var11 = var14.length;
                    var11 = var10 < var11;
                    var13 = 0;
                    if (!var11) {
                        _fun91498_ip = 1423;
                        continue _fun91498
                    }
                case 1354:
                    var17 = function arg0() {
                        _fun91502: for (var _fun91502_ip = 0;;) switch (_fun91502_ip) {
                            case 0:
                                var3 = arg0;
                                var1 = var3.type;
                                var0 = 'custom';
                                if (!(var0 !== var1)) {
                                    _fun91502_ip = 94;
                                    continue _fun91502
                                }
                            case 16:
                                var1 = {};
                                var1.item = var3;
                                var7 = _closure1_slot25;
                                var5 = _closure3_slot2;
                                var4 = _closure3_slot3;
                                var6 = var5 > var4;
                                var5 = _closure3_slot10;
                                var4 = null;
                                if (!(var4 == var5)) {
                                    _fun91502_ip = 60;
                                    continue _fun91502
                                }
                            case 54:
                                var5 = _closure1_slot19;
                                _fun91502_ip = 64;
                                continue _fun91502;
                            case 60:
                                var5 = _closure3_slot10;
                            case 64:
                                var9 = _closure3_slot20;
                                var13 = undefined;
                                var12 = 'square';
                                var11 = var6;
                                var10 = var5;
                                var0 = var13[var7](var12, var11, var10, var9, var8);
                                var1.dimensions = var0;
                                _fun91502_ip = 261;
                                continue _fun91502;
                            case 94:
                                var4 = _closure3_slot10;
                                var0 = null;
                                if (!(var0 == var4)) {
                                    _fun91502_ip = 140;
                                    continue _fun91502
                                }
                            case 107:
                                var4 = _closure3_slot11;
                                var4 = var0 == var4;
                                var7 = undefined;
                                if (var4) {
                                    _fun91502_ip = 138;
                                    continue _fun91502
                                }
                            case 120:
                                var4 = _closure3_slot11;
                                var5 = var4.layouts;
                                var4 = _closure3_slot17;
                                var7 = var5[var4];
                            case 138:
                                _fun91502_ip = 144;
                                continue _fun91502;
                            case 140:
                                var7 = _closure3_slot10;
                            case 144:
                                if (!(var0 == var7)) {
                                    _fun91502_ip = 155;
                                    continue _fun91502
                                }
                            case 148:
                                var7 = _closure1_slot19;
                            case 155:
                                var0 = var3.forceSquare;
                                var6 = 'square';
                                if (var0) {
                                    _fun91502_ip = 207;
                                    continue _fun91502
                                }
                            case 168:
                                var5 = _closure1_slot24;
                                var8 = _closure3_slot1;
                                var4 = var8.getTargetDimensions;
                                var0 = var3.item;
                                var0 = var0.id;
                                var4 = var4.bind(var8)(var0);
                                var0 = undefined;
                                var6 = var5.bind(var0)(var4);
                            case 207:
                                var0 = {};
                                var3 = var3.item;
                                var0.item = var3;
                                var5 = _closure1_slot25;
                                var4 = _closure3_slot2;
                                var3 = _closure3_slot3;
                                var11 = var4 > var3;
                                var9 = _closure3_slot20;
                                var13 = undefined;
                                var12 = var6;
                                var10 = var7;
                                var2 = var13[var5](var12, var11, var10, var9, var8);
                                var0.dimensions = var2;
                                var1 = var0;
                            case 261:
                                var0 = var1.item;
                                var1 = var1.dimensions;
                                var10 = var1.width;
                                var9 = var1.height;
                                var12 = var0.id;
                                var3 = _closure3_slot19;
                                var11 = var0.type;
                                var0 = undefined;
                                var13 = undefined;
                                var1 = var13[var3](var12, var11, var10, var9, var8);
                                var1 = _closure3_slot17;
                                var1 = var1 + 1;
                                _closure3_slot17 = var1;
                                return var0;
                        }
                    };
                    var15 = _closure1_slot21;
                    var11 = var14[var13];
                    var16 = var15.bind(var0)(var11);
                    var15 = var16.bind(var0)();
                    var11 = var15.done;
                    if (var11) {
                        _fun91498_ip = 1411;
                        continue _fun91498
                    }
                case 1386:
                    var11 = var15.value;
                    var11 = var17.bind(var0)(var11);
                    var18 = var16.bind(var0)();
                    var11 = var18.done;
                    var15 = var18;
                    if (!var11) {
                        _fun91498_ip = 1386;
                        continue _fun91498
                    }
                case 1411:
                    var13 = var13 + 1;
                    var11 = var14.length;
                    if (var13 < var11) {
                        _fun91498_ip = 1354;
                        continue _fun91498
                    }
                case 1423:
                    var13 = _closure3_slot14;
                    var11 = _closure3_slot15;
                    if (!(var13 !== var11)) {
                        _fun91498_ip = 1693;
                        continue _fun91498
                    }
                case 1438:
                    var11 = _closure3_slot15;
                    var14 = var8[var11];
                    var11 = var14[var10];
                    var16 = var10 === var11;
                    var13 = _closure1_slot21;
                    var19 = var13.bind(var0)(var14);
                    var13 = var19.bind(var0)();
                    var14 = var13.done;
                    var17 = var13;
                    var18 = false;
                    var15 = 0;
                    var13 = var16;
                    var11 = 0;
                    if (var14) {
                        _fun91498_ip = 1562;
                        continue _fun91498
                    }
                case 1487:
                    var14 = var17.value;
                    var21 = var15 + var14;
                    var23 = var18;
                    var22 = var16;
                    if (var22) {
                        _fun91498_ip = 1532;
                        continue _fun91498
                    }
                case 1505:
                    var24 = var7 === var14;
                    if (!var24) {
                        _fun91498_ip = 1515;
                        continue _fun91498
                    }
                case 1512:
                    var24 = var18;
                case 1515:
                    if (!var24) {
                        _fun91498_ip = 1520;
                        continue _fun91498
                    }
                case 1518:
                    var16 = true;
                case 1520:
                    if (!(var10 === var14)) {
                        _fun91498_ip = 1526;
                        continue _fun91498
                    }
                case 1524:
                    var18 = true;
                case 1526:
                    var23 = var18;
                    var22 = var16;
                case 1532:
                    var24 = var19.bind(var0)();
                    var14 = var24.done;
                    var16 = var22;
                    var18 = var23;
                    var17 = var24;
                    var15 = var21;
                    var13 = var16;
                    var11 = var15;
                    if (!var14) {
                        _fun91498_ip = 1487;
                        continue _fun91498
                    }
                case 1562:
                    if (var13) {
                        _fun91498_ip = 1693;
                        continue _fun91498
                    }
                case 1568:
                    var11 = var12 - var11;
                    var13 = _closure1_slot7;
                    var12 = var13.roundToNearestPixel;
                    var14 = var2.defaultTargetCoords;
                    var14 = var14.width;
                    var14 = var11 * var14;
                    var11 = var11 * var6;
                    var14 = var14 + var11;
                    var11 = 2;
                    var11 = var14 / var11;
                    var12 = var12.bind(var13)(var11);
                    var1 = _closure1_slot21;
                    var11 = var1.bind(var0)(var5);
                    var5 = var11.bind(var0)();
                    var1 = var5.done;
                    if (var1) {
                        _fun91498_ip = 1693;
                        continue _fun91498
                    }
                case 1638:
                    var14 = var5.value;
                    var13 = var2.cardCoords;
                    var1 = var13.get;
                    var13 = var1.bind(var13)(var14);
                    if (!(var9 != var13)) {
                        _fun91498_ip = 1678;
                        continue _fun91498
                    }
                case 1663:
                    var1 = var13.x;
                    var1 = var1 + var12;
                    var13.x = var1;
                case 1678:
                    var13 = var11.bind(var0)();
                    var1 = var13.done;
                    var5 = var13;
                    if (!var1) {
                        _fun91498_ip = 1638;
                        continue _fun91498
                    }
                case 1693:
                    var1 = {};
                    var5 = var2.items;
                    var5 = var5.length;
                    if (!(var10 !== var5)) {
                        _fun91498_ip = 1757;
                        continue _fun91498
                    }
                case 1709:
                    var5 = _closure3_slot16;
                    var5 = var5 + 1;
                    _closure3_slot16 = var5;
                    var5 = var2.defaultTargetCoords;
                    var11 = var5.width;
                    var5 = _closure3_slot16;
                    var5 = var11 * var5;
                    var3 = _closure3_slot16;
                    var3 = var3 - var7;
                    var3 = var3 * var6;
                    var3 = var5 + var3;
                    _fun91498_ip = 1784;
                    continue _fun91498;
                case 1757:
                    var5 = var2.defaultTargetCoords;
                    var5 = var5.width;
                    var5 = var5 * var4;
                    var4 = var4 - var7;
                    var4 = var4 * var6;
                    var3 = var5 + var4;
                case 1784:
                    var1.width = var3;
                    var3 = var2.items;
                    var4 = var3.length;
                    var3 = 0;
                    if (!(var3 !== var4)) {
                        _fun91498_ip = 1889;
                        continue _fun91498
                    }
                case 1804:
                    var4 = var8.length;
                    var5 = var4 - var7;
                    var4 = var5;
                    if (!(var4 >= var10)) {
                        _fun91498_ip = 1859;
                        continue _fun91498
                    }
                case 1820:
                    var12 = var8[var5];
                    var4 = var5;
                    if (!(var9 != var12)) {
                        _fun91498_ip = 1859;
                        continue _fun91498
                    }
                case 1831:
                    var11 = var12.indexOf;
                    var11 = var11.bind(var12)(var7);
                    var4 = var5;
                    if (!(!(var11 >= var10))) {
                        _fun91498_ip = 1859;
                        continue _fun91498
                    }
                case 1849:
                    var5 = var5 - 1;
                    var4 = var5;
                    if (var4 >= var10) {
                        _fun91498_ip = 1820;
                        continue _fun91498
                    }
                case 1859:
                    var4 = var4 + 1;
                    var5 = var2.defaultTargetCoords;
                    var5 = var5.height;
                    var5 = var4 * var5;
                    var4 = var4 - var7;
                    var4 = var6 * var4;
                    var3 = var5 + var4;
                case 1889:
                    var1.height = var3;
                    var2.contentDimensions = var1;
                    var1 = false;
                    var2.dirty = var1;
                    var1 = var2.layoutKey;
                    var1 = var1 + 1;
                    var2.layoutKey = var1;
                case 1922:
                    return var0;
            }
        };
        var0.value = var5;
        var1[15] = var0;
        var0 = {};
        var5 = 'subscribeFromItem';
        var0.key = var5;
        var5 = function arg0() {
            var3 = arg0;
            var1 = this;
            var _closure3_slot0 = var1;
            var _closure3_slot1 = var3;
            var2 = var1.layoutCallbacks;
            var1 = var2.add;
            var1 = var1.bind(var2)(var3);
            var0 = function() { // Environment: var0
                var1 = _closure3_slot0;
                var2 = var1.layoutCallbacks;
                var1 = var2.delete;
                var0 = _closure3_slot1;
                var0 = var1.bind(var2)(var0);
                var0 = undefined;
                return var0;
            };
            return var0;
        };
        var0.value = var5;
        var1[16] = var0;
        var0 = {};
        var5 = 'subscribeToManager';
        var0.key = var5;
        var5 = function arg0() {
            var3 = arg0;
            var1 = this;
            var _closure3_slot0 = var1;
            var _closure3_slot1 = var3;
            var2 = var1.managerSubscriptions;
            var1 = var2.add;
            var1 = var1.bind(var2)(var3);
            var0 = function() { // Environment: var0
                var1 = _closure3_slot0;
                var2 = var1.managerSubscriptions;
                var1 = var2.delete;
                var0 = _closure3_slot1;
                var0 = var1.bind(var2)(var0);
                var0 = undefined;
                return var0;
            };
            return var0;
        };
        var0.value = var5;
        var1[17] = var0;
        var0 = {};
        var5 = 'emitLayoutChanges';
        var0.key = var5;
        var5 = function() {
            _fun91507: for (var _fun91507_ip = 0;;) switch (_fun91507_ip) {
                case 0:
                    var2 = this;
                    var _closure3_slot0 = var2;
                    var1 = var2.emitItemChanges;
                    if (!var1) {
                        _fun91507_ip = 24;
                        continue _fun91507
                    }
                case 18:
                    var1 = var2.mounted;
                case 24:
                    if (!var1) {
                        _fun91507_ip = 78;
                        continue _fun91507
                    }
                case 27:
                    var1 = false;
                    var2.emitItemChanges = var1;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 15;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.batchUpdates;
                    var0 = function() { // Environment: var0
                        _fun91508: for (var _fun91508_ip = 0;;) switch (_fun91508_ip) {
                            case 0:
                                var4 = _closure1_slot21;
                                var0 = _closure3_slot0;
                                var3 = var0.managerSubscriptions;
                                var0 = undefined;
                                var5 = var4.bind(var0)(var3);
                                var4 = var5.bind(var0)();
                                var3 = var4.done;
                                if (var3) {
                                    _fun91508_ip = 63;
                                    continue _fun91508
                                }
                            case 39:
                                var3 = var4.value;
                                var3 = var3.bind(var0)();
                                var6 = var5.bind(var0)();
                                var3 = var6.done;
                                var4 = var6;
                                if (!var3) {
                                    _fun91508_ip = 39;
                                    continue _fun91508
                                }
                            case 63:
                                var2 = _closure1_slot21;
                                var1 = _closure3_slot0;
                                var1 = var1.layoutCallbacks;
                                var3 = var2.bind(var0)(var1);
                                var2 = var3.bind(var0)();
                                var1 = var2.done;
                                if (var1) {
                                    _fun91508_ip = 118;
                                    continue _fun91508
                                }
                            case 94:
                                var1 = var2.value;
                                var1 = var1.bind(var0)();
                                var4 = var3.bind(var0)();
                                var1 = var4.done;
                                var2 = var4;
                                if (!var1) {
                                    _fun91508_ip = 94;
                                    continue _fun91508
                                }
                            case 118:
                                return var0;
                        }
                    };
                    var0 = var1.bind(var2)(var0);
                case 78:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[18] = var0;
        var0 = {};
        var5 = 'deferredLayoutChange';
        var0.key = var5;
        var4 = function() {
            _fun91509: for (var _fun91509_ip = 0;;) switch (_fun91509_ip) {
                case 0:
                    var1 = this;
                    var _closure3_slot0 = var1;
                    var2 = var1.emitItemChanges;
                    if (!var2) {
                        _fun91509_ip = 24;
                        continue _fun91509
                    }
                case 18:
                    var2 = var1.mounted;
                case 24:
                    if (!var2) {
                        _fun91509_ip = 59;
                        continue _fun91509
                    }
                case 27:
                    var2 = global;
                    var4 = var2.setTimeout;
                    var3 = undefined;
                    var2 = function() { // Environment: var0
                        var0 = global;
                        var3 = var0.clearTimeout;
                        var2 = _closure3_slot0;
                        var1 = var2.emitTimeout;
                        var0 = undefined;
                        var1 = var3.bind(var0)(var1);
                        var1 = -1;
                        var2.emitTimeout = var1;
                        var1 = var2.emitLayoutChanges;
                        var1 = var1.bind(var2)();
                        return var0;
                    };
                    var0 = 1;
                    var0 = var4.bind(var3)(var2, var0);
                    var1.emitTimeout = var0;
                case 59:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var4;
        var1[19] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var3 = var3.bind(var0)();
    var4 = 16;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/voice_panel/native/card/VoicePanelCardLayoutManager.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var3 = function arg0, arg1() {
        _fun91511: for (var _fun91511_ip = 0;;) switch (_fun91511_ip) {
            case 0:
                var6 = arg0;
                var5 = arg1;
                var _closure2_slot0 = var6;
                var _closure2_slot1 = var5;
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 9;
                var3 = var3[var0];
                var0 = undefined;
                var4 = var4.bind(var0)(var3);
                var3 = var4.useSharedValue;
                var0 = {};
                var7 = var5.getCardCoords;
                var7 = var7.bind(var5)(var6);
                var8 = null;
                if (!(var8 == var7)) {
                    _fun91511_ip = 70;
                    continue _fun91511
                }
            case 66:
                var7 = _closure1_slot17;
            case 70:
                var10 = var0;
                var9 = var7;
                var7 = copyDataProperties(var10, var9);
                var0 = var3.bind(var4)(var0);
                var _closure2_slot2 = var0;
                var4 = _closure1_slot6;
                var3 = var4.useLayoutEffect;
                var2 = new Array(3);
                var2[0] = var6;
                var2[1] = var5;
                var2[2] = var0;
                var1 = function() { // Environment: var1
                    var2 = function() {
                        _fun91513: for (var _fun91513_ip = 0;;) switch (_fun91513_ip) {
                            case 0:
                                var3 = _closure2_slot1;
                                var2 = var3.getCardCoords;
                                var1 = _closure2_slot0;
                                var3 = var2.bind(var3)(var1);
                                var1 = null;
                                if (!(var1 != var3)) {
                                    _fun91513_ip = 63;
                                    continue _fun91513
                                }
                            case 28:
                                var4 = _closure1_slot1;
                                var2 = _closure1_slot2;
                                var1 = 10;
                                var1 = var2[var1];
                                var2 = undefined;
                                var1 = var4.bind(var2)(var1);
                                var0 = _closure2_slot2;
                                var0 = var1.bind(var2)(var0, var3);
                            case 63:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0 = undefined;
                    var0 = var2.bind(var0)();
                    var1 = _closure2_slot1;
                    var0 = var1.subscribeFromItem;
                    var0 = var0.bind(var1)(var2);
                    return var0;
                };
                var1 = var3.bind(var4)(var1, var2);
                return var0;
        }
    };
    var2.useCardLayoutCoordsSubscription = var3;
    var3 = function arg0, arg1() {
        var6 = arg0;
        var5 = arg1;
        var _closure2_slot0 = var6;
        var _closure2_slot1 = var5;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var0 = 9;
        var3 = var3[var0];
        var0 = undefined;
        var4 = var4.bind(var0)(var3);
        var3 = var4.useSharedValue;
        var0 = {};
        var7 = var5.getTargetDimensions;
        var8 = var7.bind(var5)(var6);
        var9 = var0;
        var7 = copyDataProperties(var9, var8);
        var0 = var3.bind(var4)(var0);
        var _closure2_slot2 = var0;
        var4 = _closure1_slot6;
        var3 = var4.useLayoutEffect;
        var2 = new Array(3);
        var2[0] = var6;
        var2[1] = var5;
        var2[2] = var0;
        var1 = function() { // Environment: var1
            var2 = function() {
                var3 = _closure2_slot1;
                var2 = var3.getTargetDimensions;
                var0 = _closure2_slot0;
                var3 = var2.bind(var3)(var0);
                var4 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 10;
                var2 = var2[var0];
                var0 = undefined;
                var2 = var4.bind(var0)(var2);
                var1 = _closure2_slot2;
                var1 = var2.bind(var0)(var1, var3);
                return var0;
            };
            var0 = undefined;
            var0 = var2.bind(var0)();
            var1 = _closure2_slot1;
            var0 = var1.subscribeFromItem;
            var0 = var0.bind(var1)(var2);
            return var0;
        };
        var1 = var3.bind(var4)(var1, var2);
        return var0;
    };
    var2.useTargetDimensionsSubscription = var3;
    var1 = function arg0() {
        var5 = arg0;
        var _closure2_slot0 = var5;
        var3 = _closure1_slot6;
        var4 = var3.useState;
        var2 = var5.getLayoutKey;
        var2 = var2.bind(var5)();
        var5 = var4.bind(var3)(var2);
        var4 = _closure1_slot5;
        var2 = undefined;
        var0 = 2;
        var4 = var4.bind(var2)(var5, var0);
        var0 = 0;
        var0 = var4[var0];
        var2 = 1;
        var2 = var4[var2];
        var _closure2_slot1 = var2;
        var2 = var3.useLayoutEffect;
        var1 = function() { // Environment: var1
            var2 = _closure2_slot0;
            var1 = var2.subscribeToManager;
            var0 = function() { // Environment: var0
                var2 = _closure2_slot1;
                var1 = _closure2_slot0;
                var0 = var1.getLayoutKey;
                var1 = var0.bind(var1)();
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                return var0;
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.useManagerSubscription = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 57, 31, 27, 3949, 11886, 11889, 3524, 3721, 5353, 628, 8117, 11890, 11891, 802, 2]);