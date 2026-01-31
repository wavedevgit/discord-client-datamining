// ../discord_common/js/packages/media-engine/native/ui/DirectVideo.tsx
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
        _fun32209: for (var _fun32209_ip = 0;;) switch (_fun32209_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun32209_ip = 46;
                    continue _fun32209
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun32209_ip = 55;
                    continue _fun32209
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun32209_ip = 343;
                    continue _fun32209
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun32209_ip = 323;
                    continue _fun32209
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun32209_ip = 283;
                    continue _fun32209
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun32209_ip = 270;
                    continue _fun32209
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
                    _fun32209_ip = 163;
                    continue _fun32209
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun32209_ip = 179;
                    continue _fun32209
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun32209_ip = 249;
                    continue _fun32209
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun32209_ip = 249;
                    continue _fun32209
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun32209_ip = 234;
                    continue _fun32209
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun32209_ip = 247;
                    continue _fun32209
                }
            case 234:
                var8 = _closure1_slot11;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun32209_ip = 265;
                continue _fun32209;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun32209_ip = 283;
                continue _fun32209;
            case 270:
                var6 = _closure1_slot11;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun32209_ip = 323;
                    continue _fun32209
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
                    _fun32209_ip = 330;
                    continue _fun32209
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun32210: for (var _fun32210_ip = 0;;) switch (_fun32210_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun32210_ip = 56;
                                continue _fun32210
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
                            _fun32210_ip = 67;
                            continue _fun32210;
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
    var _closure1_slot10 = var0;
    var0 = function arg0, arg1() {
        _fun32211: for (var _fun32211_ip = 0;;) switch (_fun32211_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun32211_ip = 23;
                    continue _fun32211
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun32211_ip = 33;
                    continue _fun32211
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
                    _fun32211_ip = 70;
                    continue _fun32211
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun32211_ip = 55;
                    continue _fun32211
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot11 = var0;
    var0 = function arg0() {
        _fun32212: for (var _fun32212_ip = 0;;) switch (_fun32212_ip) {
            case 0:
                var2 = arg0;
                var3 = _closure1_slot9;
                var1 = var3.get;
                var4 = var1.bind(var3)(var2);
                var1 = null;
                var1 = var1 != var4;
                if (!var1) {
                    _fun32212_ip = 39;
                    continue _fun32212
                }
            case 29:
                var3 = var4.release;
                var1 = var3.bind(var4)();
            case 39:
                if (!var1) {
                    _fun32212_ip = 101;
                    continue _fun32212
                }
            case 42:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 5;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var1 = var3.getVoiceEngine;
                var3 = var1.bind(var3)();
                var1 = var3.removeDirectVideoOutputSink;
                var1 = var1.bind(var3)(var2);
                var1 = _closure1_slot9;
                var0 = var1.delete;
                var0 = var0.bind(var1)(var2);
            case 101:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot12 = var0;
    var3 = global;
    var9 = var3.Object;
    var8 = var9.defineProperty;
    var6 = {};
    var0 = true;
    var6.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var6);
    var0 = 0;
    var6 = var5[var0];
    var0 = undefined;
    var6 = var7.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var6 = 1;
    var6 = var5[var6];
    var6 = var7.bind(var0)(var6);
    var _closure1_slot4 = var6;
    var6 = 2;
    var7 = var5[var6];
    var6 = arg3;
    var6 = var6.bind(var0)(var7);
    var _closure1_slot5 = var6;
    var6 = 3;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var6 = var6.jsx;
    var _closure1_slot6 = var6;
    var6 = 4;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var8 = var6.Logger;
    var6 = var8.prototype;
    var7 = Object.create(var6, {
        constructor: {
            value: var8
        }
    });
    var12 = 'DirectVideo';
    var13 = var7;
    var6 = new var13[var8](var12, var11);
    var6 = var6 instanceof Object ? var6 : var7;
    var _closure1_slot7 = var6;
    var6 = function() { // Environment: var1
        var3 = _closure1_slot4;
        var2 = function arg0() {
            var2 = this;
            var3 = _closure1_slot3;
            var1 = _closure2_slot0;
            var0 = undefined;
            var1 = var3.bind(var0)(var2, var1);
            var1 = 1;
            var2.refcount = var1;
            var1 = global;
            var4 = var1.window;
            var3 = var4.createDiscordStream;
            var1 = arg0;
            var1 = var3.bind(var4)(var1);
            var2.stream = var1;
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'addref';
        var0.key = var1;
        var1 = function() {
            var1 = this;
            var0 = var1.refcount;
            var0 = var0 + 1;
            var1.refcount = var0;
            var0 = undefined;
            return var0;
        };
        var0.value = var1;
        var1 = new Array(2);
        var1[0] = var0;
        var0 = {};
        var5 = 'release';
        var0.key = var5;
        var4 = function() {
            var0 = this;
            var1 = var0.refcount;
            var1 = var1 - 1;
            var0.refcount = var1;
            var1 = var0.refcount;
            var0 = 0;
            var0 = var0 === var1;
            return var0;
        };
        var0.value = var4;
        var1[1] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var6 = var6.bind(var0)();
    var _closure1_slot8 = var6;
    var3 = var3.Map;
    var6 = var3.prototype;
    var6 = Object.create(var6, {
        constructor: {
            value: var3
        }
    });
    var13 = var6;
    var3 = new var13[var3](var12);
    var3 = var3 instanceof Object ? var3 : var6;
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = '../discord_common/js/packages/media-engine/native/ui/DirectVideo.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0, arg1() {
        _fun32217: for (var _fun32217_ip = 0;;) switch (_fun32217_ip) {
            case 0:
                var5 = arg0;
                var9 = var5.streamId;
                var _closure2_slot0 = var9;
                var10 = var5.paused;
                var3 = undefined;
                if (!(var10 === var3)) {
                    _fun32217_ip = 29;
                    continue _fun32217
                }
            case 27:
                var10 = false;
            case 29:
                var _closure2_slot1 = var10;
                var13 = var5.onReady;
                var _closure2_slot2 = var13;
                var12 = var5.onResize;
                var _closure2_slot3 = var12;
                var2 = var5.reportContainerResized;
                if (!(var2 === var3)) {
                    _fun32217_ip = 65;
                    continue _fun32217
                }
            case 63:
                var2 = true;
            case 65:
                var _closure2_slot4 = var2;
                var7 = var5.className;
                var4 = {
                    'streamId': 0,
                    'paused': 0,
                    'onReady': 0,
                    'onResize': 0,
                    'reportContainerResized': 0,
                    'className': 0
                };
                var11 = null;
                var17 = var4;
                var16 = null;
                var0 = silentSetPrototypeOf(var17, var16);
                var17 = {};
                var16 = var5;
                var15 = var4;
                var0 = copyDataProperties(var17, var16, var15);
                var _closure2_slot5 = var3;
                var _closure2_slot6 = var3;
                var _closure2_slot7 = var3;
                var _closure2_slot8 = var3;
                var8 = _closure1_slot5;
                var4 = var8.useRef;
                var4 = var4.bind(var8)(var11);
                _closure2_slot5 = var4;
                var6 = var8.useRef;
                var6 = var6.bind(var8)(var11);
                _closure2_slot6 = var6;
                var11 = var8.useRef;
                var6 = {
                    'width': 0,
                    'height': 0
                };
                var6 = var11.bind(var8)(var6);
                _closure2_slot7 = var6;
                var11 = var8.useRef;
                var6 = {};
                var6.streamId = var9;
                var6.paused = var10;
                var6.onReady = var13;
                var6.onResize = var12;
                var12 = arg1;
                var6.onContainerResized = var12;
                var6 = var11.bind(var8)(var6);
                _closure2_slot8 = var6;
                var11 = var8.useLayoutEffect;
                var6 = new Array(1);
                var6[0] = var2;
                var2 = function() { // Environment: var1
                    _fun32218: for (var _fun32218_ip = 0;;) switch (_fun32218_ip) {
                        case 0:
                            var1 = _closure2_slot5;
                            var4 = var1.current;
                            var2 = global;
                            var6 = var2.ResizeObserver;
                            var1 = var6.prototype;
                            var3 = Object.create(var1, {
                                constructor: {
                                    value: var6
                                }
                            });
                            var15 = function(arg0) { // Environment: var5
                                _fun32219: for (var _fun32219_ip = 0;;) switch (_fun32219_ip) {
                                    case 0:
                                        var0 = _closure2_slot4;
                                        if (!var0) {
                                            _fun32219_ip = 225;
                                            continue _fun32219
                                        }
                                    case 13:
                                        var1 = _closure1_slot10;
                                        var7 = undefined;
                                        var0 = arg0;
                                        var6 = var1.bind(var7)(var0);
                                        var1 = var6.bind(var7)();
                                        var0 = var1.done;
                                        var5 = global;
                                        var4 = null;
                                        var3 = var1;
                                        var2 = undefined;
                                        var1 = undefined;
                                        if (var0) {
                                            _fun32219_ip = 225;
                                            continue _fun32219
                                        }
                                    case 56:
                                        var0 = var3.value;
                                        var10 = var0.target;
                                        var9 = _closure2_slot6;
                                        var9 = var9.current;
                                        if (!(var10 === var9)) {
                                            _fun32219_ip = 207;
                                            continue _fun32219
                                        }
                                    case 83:
                                        var9 = var5.window;
                                        var10 = var9.devicePixelRatio;
                                        var9 = var0.target;
                                        var9 = var9.clientWidth;
                                        var9 = var10 * var9;
                                        var10 = var5.window;
                                        var10 = var10.devicePixelRatio;
                                        var0 = var0.target;
                                        var0 = var0.clientHeight;
                                        var0 = var10 * var0;
                                        var10 = _closure2_slot8;
                                        var10 = var10.current;
                                        var10 = var10.onContainerResized;
                                        var2 = var9;
                                        var1 = var0;
                                        if (!(var4 != var10)) {
                                            _fun32219_ip = 207;
                                            continue _fun32219
                                        }
                                    case 164:
                                        var10 = _closure2_slot8;
                                        var12 = var10.current;
                                        var11 = var12.onContainerResized;
                                        var10 = _closure2_slot8;
                                        var10 = var10.current;
                                        var10 = var10.streamId;
                                        var10 = var11.bind(var12)(var10, var9, var0);
                                        var2 = var9;
                                        var1 = var0;
                                    case 207:
                                        var9 = var6.bind(var7)();
                                        var0 = var9.done;
                                        var3 = var9;
                                        if (!var0) {
                                            _fun32219_ip = 56;
                                            continue _fun32219
                                        }
                                    case 225:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var16 = var3;
                            var1 = new var16[var6](var15, var14);
                            var3 = var1 instanceof Object ? var1 : var3;
                            var1 = null;
                            if (!(var1 != var4)) {
                                _fun32218_ip = 385;
                                continue _fun32218
                            }
                        case 58:
                            var7 = var2.document;
                            var6 = var7.createElement;
                            var1 = 'video';
                            var1 = var6.bind(var7)(var1);
                            var7 = var1.style;
                            var6 = 'block';
                            var7.display = var6;
                            var6 = var1.style;
                            var7 = '100%';
                            var6.width = var7;
                            var6 = var1.style;
                            var6.height = var7;
                            var6 = true;
                            var1.autoplay = var6;
                            var1.muted = var6;
                            var8 = var1.addEventListener;
                            var7 = 'pause';
                            var6 = function() {
                                _fun32220: for (var _fun32220_ip = 0;;) switch (_fun32220_ip) {
                                    case 0:
                                        var0 = _closure2_slot8;
                                        var0 = var0.current;
                                        var1 = var0.paused;
                                        var0 = undefined;
                                        var2 = undefined;
                                        if (var1) {
                                            _fun32220_ip = 43;
                                            continue _fun32220
                                        }
                                    case 25:
                                        var3 = _closure2_slot6;
                                        var3 = var3.current;
                                        var4 = null;
                                        var1 = var4 == var3;
                                        var2 = var3;
                                    case 43:
                                        if (var1) {
                                            _fun32220_ip = 56;
                                            continue _fun32220
                                        }
                                    case 46:
                                        var1 = var2.play;
                                        var1 = var1.bind(var2)();
                                    case 56:
                                        return var0;
                                }
                            };
                            var6 = var8.bind(var1)(var7, var6);
                            var8 = var1.addEventListener;
                            var7 = 'resize';
                            var6 = function() {
                                _fun32221: for (var _fun32221_ip = 0;;) switch (_fun32221_ip) {
                                    case 0:
                                        var0 = _closure2_slot7;
                                        var0 = var0.current;
                                        var6 = var0.width;
                                        var2 = var0.height;
                                        var0 = _closure2_slot6;
                                        var3 = var0.current;
                                        var4 = null;
                                        var5 = var4 == var3;
                                        var0 = undefined;
                                        var7 = undefined;
                                        if (var5) {
                                            _fun32221_ip = 50;
                                            continue _fun32221
                                        }
                                    case 44:
                                        var7 = var3.videoWidth;
                                    case 50:
                                        var8 = var4 != var7;
                                        var5 = 0;
                                        if (!var8) {
                                            _fun32221_ip = 62;
                                            continue _fun32221
                                        }
                                    case 59:
                                        var5 = var7;
                                    case 62:
                                        var7 = _closure2_slot6;
                                        var8 = var7.current;
                                        var9 = var4 == var8;
                                        var7 = undefined;
                                        if (var9) {
                                            _fun32221_ip = 86;
                                            continue _fun32221
                                        }
                                    case 80:
                                        var7 = var8.videoHeight;
                                    case 86:
                                        var8 = var4 != var7;
                                        var3 = 0;
                                        if (!var8) {
                                            _fun32221_ip = 98;
                                            continue _fun32221
                                        }
                                    case 95:
                                        var3 = var7;
                                    case 98:
                                        if (!(var6 === var5)) {
                                            _fun32221_ip = 106;
                                            continue _fun32221
                                        }
                                    case 102:
                                        if (!(var2 !== var3)) {
                                            _fun32221_ip = 165;
                                            continue _fun32221
                                        }
                                    case 106:
                                        var2 = {};
                                        var2.width = var5;
                                        var2.height = var3;
                                        var3 = _closure2_slot8;
                                        var3 = var3.current;
                                        var3 = var3.onResize;
                                        if (!(var4 != var3)) {
                                            _fun32221_ip = 155;
                                            continue _fun32221
                                        }
                                    case 135:
                                        var3 = _closure2_slot8;
                                        var4 = var3.current;
                                        var3 = var4.onResize;
                                        var3 = var3.bind(var4)(var2);
                                    case 155:
                                        var1 = _closure2_slot7;
                                        var1.current = var2;
                                    case 165:
                                        return var0;
                                }
                            };
                            var6 = var8.bind(var1)(var7, var6);
                            var7 = var1.addEventListener;
                            var6 = 'canplaythrough';
                            var5 = function() {
                                _fun32222: for (var _fun32222_ip = 0;;) switch (_fun32222_ip) {
                                    case 0:
                                        var4 = _closure1_slot7;
                                        var3 = var4.info;
                                        var1 = _closure2_slot8;
                                        var1 = var1.current;
                                        var8 = var1.streamId;
                                        var1 = _closure2_slot8;
                                        var1 = var1.current;
                                        var1 = var1.onReady;
                                        var2 = null;
                                        var7 = var2 != var1;
                                        var1 = global;
                                        var1 = var1.HermesInternal;
                                        var6 = var1.concat;
                                        var5 = 'handleReady for ';
                                        var1 = ', have onReady callback = ';
                                        var1 = var6.bind(var5)(var8, var1, var7);
                                        var1 = var3.bind(var4)(var1);
                                        var1 = _closure2_slot8;
                                        var1 = var1.current;
                                        var1 = var1.onReady;
                                        if (!(var2 != var1)) {
                                            _fun32222_ip = 127;
                                            continue _fun32222
                                        }
                                    case 108:
                                        var0 = _closure2_slot8;
                                        var1 = var0.current;
                                        var0 = var1.onReady;
                                        var0 = var0.bind(var1)();
                                    case 127:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var5 = var7.bind(var1)(var6, var5);
                            var8 = _closure1_slot7;
                            var7 = var8.info;
                            var6 = _closure2_slot8;
                            var6 = var6.current;
                            var12 = var6.streamId;
                            var11 = var1.readyState;
                            var6 = var2.HermesInternal;
                            var10 = var6.concat;
                            var9 = 'create video element for ';
                            var6 = ', readyState=';
                            var6 = var10.bind(var9)(var12, var6, var11);
                            var6 = var7.bind(var8)(var6);
                            var7 = var1.readyState;
                            var6 = 3;
                            if (!(var7 > var6)) {
                                _fun32218_ip = 343;
                                continue _fun32218
                            }
                        case 285:
                            var6 = _closure1_slot7;
                            var5 = var6.error;
                            var7 = _closure2_slot8;
                            var7 = var7.current;
                            var9 = var7.streamId;
                            var2 = var2.HermesInternal;
                            var8 = var2.concat;
                            var7 = 'video element for ';
                            var2 = ' was ready before attached';
                            var2 = var8.bind(var7)(var9, var2);
                            var2 = var5.bind(var6)(var2);
                        case 343:
                            var2 = var4.appendChild;
                            var2 = var2.bind(var4)(var1);
                            var2 = var3.disconnect;
                            var2 = var2.bind(var3)();
                            var2 = var3.observe;
                            var2 = var2.bind(var3)(var1);
                            var0 = _closure2_slot6;
                            var0.current = var1;
                        case 385:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2 = var11.bind(var8)(var2, var6);
                var6 = var8.useEffect;
                var2 = function() { // Environment: var1
                    var1 = _closure2_slot8;
                    var2 = var1.current;
                    var1 = _closure2_slot0;
                    var2.streamId = var1;
                    var1 = _closure2_slot8;
                    var2 = var1.current;
                    var1 = _closure2_slot1;
                    var2.paused = var1;
                    var1 = _closure2_slot8;
                    var2 = var1.current;
                    var1 = _closure2_slot2;
                    var2.onReady = var1;
                    var1 = _closure2_slot8;
                    var1 = var1.current;
                    var0 = _closure2_slot3;
                    var1.onResize = var0;
                    var0 = undefined;
                    return var0;
                };
                var2 = var6.bind(var8)(var2);
                var6 = var8.useEffect;
                var2 = new Array(2);
                var2[0] = var10;
                var2[1] = var9;
                var1 = function() { // Environment: var1
                    _fun32224: for (var _fun32224_ip = 0;;) switch (_fun32224_ip) {
                        case 0:
                            var1 = _closure2_slot6;
                            var2 = var1.current;
                            var _closure3_slot0 = var2;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun32224_ip = 258;
                                continue _fun32224
                            }
                        case 27:
                            var4 = _closure2_slot1;
                            if (var4) {
                                _fun32224_ip = 224;
                                continue _fun32224
                            }
                        case 37:
                            var7 = _closure1_slot7;
                            var5 = var7.info;
                            var8 = _closure2_slot0;
                            var4 = global;
                            var4 = var4.HermesInternal;
                            var9 = var4.concat;
                            var4 = 'attaching srcObject for ';
                            var4 = var9.bind(var4)(var8);
                            var4 = var5.bind(var7)(var4);
                            var5 = _closure1_slot9;
                            var4 = var5.get;
                            var4 = var4.bind(var5)(var8);
                            if (!(var1 != var4)) {
                                _fun32224_ip = 115;
                                continue _fun32224
                            }
                        case 101:
                            var5 = var4.addref;
                            var5 = var5.bind(var4)();
                            _fun32224_ip = 205;
                            continue _fun32224;
                        case 115:
                            var5 = _closure1_slot8;
                            var7 = var5.prototype;
                            var7 = Object.create(var7, {
                                constructor: {
                                    value: var5
                                }
                            });
                            var13 = var7;
                            var12 = var8;
                            var5 = new var13[var5](var12, var11);
                            var5 = var5 instanceof Object ? var5 : var7;
                            var10 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var7 = 5;
                            var9 = var9[var7];
                            var7 = undefined;
                            var9 = var10.bind(var7)(var9);
                            var7 = var9.getVoiceEngine;
                            var9 = var7.bind(var9)();
                            var7 = var9.addDirectVideoOutputSink;
                            var7 = var7.bind(var9)(var8);
                            var7 = _closure1_slot9;
                            var6 = var7.set;
                            var6 = var6.bind(var7)(var8, var5);
                            var4 = var5;
                        case 205:
                            var4 = var4.stream;
                            var2.srcObject = var4;
                            var3 = function() { // Environment: var3
                                var2 = _closure1_slot12;
                                var1 = _closure2_slot0;
                                var0 = undefined;
                                var1 = var2.bind(var0)(var1);
                                var2 = _closure3_slot0;
                                var1 = null;
                                var2.srcObject = var1;
                                return var0;
                            };
                            return var3;
                        case 224:
                            var3 = var2.srcObject;
                            if (!(var1 != var3)) {
                                _fun32224_ip = 258;
                                continue _fun32224
                            }
                        case 234:
                            var2.srcObject = var1;
                            var2 = _closure1_slot12;
                            var1 = _closure2_slot0;
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                        case 258:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var6.bind(var8)(var1, var2);
                var2 = _closure1_slot6;
                var1 = {};
                var6 = _closure1_slot1;
                var8 = _closure1_slot2;
                var5 = 6;
                var5 = var8[var5];
                var6 = var6.bind(var3)(var5);
                var5 = 'media-engine-video';
                var5 = var6.bind(var3)(var5, var7);
                var1.className = var5;
                var1.ref = var4;
                var17 = var1;
                var16 = var0;
                var0 = copyDataProperties(var17, var16);
                var0 = 'div';
                var0 = var2.bind(var3)(var0, var1);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 31, 33, 4, 3437, 3597, 2]);