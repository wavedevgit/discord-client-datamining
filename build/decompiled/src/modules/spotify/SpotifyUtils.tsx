// modules/spotify/SpotifyUtils.tsx
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
        _fun62469: for (var _fun62469_ip = 0;;) switch (_fun62469_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun62469_ip = 46;
                    continue _fun62469
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun62469_ip = 55;
                    continue _fun62469
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun62469_ip = 343;
                    continue _fun62469
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun62469_ip = 323;
                    continue _fun62469
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun62469_ip = 283;
                    continue _fun62469
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun62469_ip = 270;
                    continue _fun62469
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
                    _fun62469_ip = 163;
                    continue _fun62469
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun62469_ip = 179;
                    continue _fun62469
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun62469_ip = 249;
                    continue _fun62469
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun62469_ip = 249;
                    continue _fun62469
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun62469_ip = 234;
                    continue _fun62469
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun62469_ip = 247;
                    continue _fun62469
                }
            case 234:
                var8 = _closure1_slot13;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun62469_ip = 265;
                continue _fun62469;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun62469_ip = 283;
                continue _fun62469;
            case 270:
                var6 = _closure1_slot13;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun62469_ip = 323;
                    continue _fun62469
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
                    _fun62469_ip = 330;
                    continue _fun62469
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun62470: for (var _fun62470_ip = 0;;) switch (_fun62470_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun62470_ip = 56;
                                continue _fun62470
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
                            _fun62470_ip = 67;
                            continue _fun62470;
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
    var _closure1_slot12 = var0;
    var0 = function arg0, arg1() {
        _fun62471: for (var _fun62471_ip = 0;;) switch (_fun62471_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun62471_ip = 23;
                    continue _fun62471
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun62471_ip = 33;
                    continue _fun62471
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
                    _fun62471_ip = 70;
                    continue _fun62471
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun62471_ip = 55;
                    continue _fun62471
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot13 = var0;
    var0 = function arg0() {
        _fun62472: for (var _fun62472_ip = 0;;) switch (_fun62472_ip) {
            case 0:
                var0 = arg0;
                var2 = 'string';
                var1 = typeof var0;
                if (!(var2 !== var1)) {
                    _fun62472_ip = 50;
                    continue _fun62472
                }
            case 14:
                var1 = global;
                var3 = var1.Error;
                var1 = var3.prototype;
                var2 = Object.create(var1, {
                    constructor: {
                        value: var3
                    }
                });
                var4 = 'value is not a string';
                var5 = var2;
                var1 = new var5[var3](var4, var3);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
            case 50:
                return var0;
        }
    };
    var _closure1_slot14 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0, arg1) { // Environment: var2
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun62475: for (var _fun62475_ip = 0;;) switch (_fun62475_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun62475_ip = 345;
                            continue _fun62475
                        }
                    case 10:
                        var2 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 9;
                        var1 = var3[var1];
                        var7 = undefined;
                        var5 = var2.bind(var7)(var1);
                        var3 = var5.getMetadata;
                        var2 = arg0;
                        var1 = arg1;
                        var1 = var3.bind(var5)(var2, var1);
                        SaveGenerator(address = 57);
                    case 55:
                        return var1;
                    case 57:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun62475_ip = 342;
                            continue _fun62475
                        }
                    case 66:
                        var5 = _closure1_slot9;
                        var6 = _closure1_slot14;
                        var3 = var1.type;
                        var2 = null;
                        if (!(var2 == var3)) {
                            _fun62475_ip = 95;
                            continue _fun62475
                        }
                    case 85:
                        var8 = _closure1_slot8;
                        var3 = var8.TRACK;
                    case 95:
                        var6 = var6.bind(var7)(var3);
                        var5 = var5.bind(var7)(var3);
                        if (!(var2 !== var5)) {
                            _fun62475_ip = 285;
                            continue _fun62475
                        }
                    case 112:
                        var2 = {};
                        var3 = var1.context_uri;
                        var8 = 'string';
                        var6 = typeof var3;
                        var3 = undefined;
                        if (!(var8 === var6)) {
                            _fun62475_ip = 139;
                            continue _fun62475
                        }
                    case 133:
                        var3 = var1.context_uri;
                    case 139:
                        var2.context_uri = var3;
                        var6 = _closure1_slot14;
                        var3 = var1.album_id;
                        var6 = var6.bind(var7)(var3);
                        var2.album_id = var3;
                        var3 = global;
                        var8 = var3.Array;
                        var7 = var8.isArray;
                        var6 = var1.artist_ids;
                        var6 = var7.bind(var8)(var6);
                        if (var6) {
                            _fun62475_ip = 197;
                            continue _fun62475
                        }
                    case 191:
                        var6 = new Array(0);
                        _fun62475_ip = 217;
                        continue _fun62475;
                    case 197:
                        var9 = var1.artist_ids;
                        var8 = var9.map;
                        var7 = _closure1_slot14;
                        var6 = var8.bind(var9)(var7);
                    case 217:
                        var2.artist_ids = var6;
                        var2.type = var5;
                        var6 = var3.Array;
                        var5 = var6.isArray;
                        var3 = var1.button_urls;
                        var3 = var5.bind(var6)(var3);
                        if (var3) {
                            _fun62475_ip = 257;
                            continue _fun62475
                        }
                    case 251:
                        var3 = new Array(0);
                        _fun62475_ip = 277;
                        continue _fun62475;
                    case 257:
                        var6 = var1.button_urls;
                        var5 = var6.map;
                        var4 = _closure1_slot14;
                        var3 = var5.bind(var6)(var4);
                    case 277:
                        var2.button_urls = var3;
                        return var2;
                    case 285:
                        var2 = global;
                        var4 = var2.Error;
                        var5 = var1.type;
                        var2 = var2.HermesInternal;
                        var3 = var2.concat;
                        var2 = 'invalid type ';
                        var11 = var3.bind(var2)(var5);
                        var3 = var4.prototype;
                        var3 = Object.create(var3, {
                            constructor: {
                                value: var4
                            }
                        });
                        var12 = var3;
                        var2 = new var12[var4](var11, var10);
                        var2 = var2 instanceof Object ? var2 : var3;
                        throw var2;
                    case 342:
                        return var1;
                    case 345:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot15 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
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
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.SPOTIFY_APP_PROTOCOL;
    var _closure1_slot7 = var7;
    var7 = var3.SpotifyResourceTypes;
    var _closure1_slot8 = var7;
    var3 = var3.getSpotifyResourceType;
    var _closure1_slot9 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.PlatformTypes;
    var _closure1_slot10 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var3 = var3.Millis;
    var6 = var3.SECOND;
    var3 = 30;
    var3 = var3 * var6;
    var _closure1_slot11 = var3;
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/spotify/SpotifyUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        _fun62476: for (var _fun62476_ip = 0;;) switch (_fun62476_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.getActiveSocketAndDevice;
                var1 = var0.bind(var1)();
                var0 = null;
                var0 = var0 != var1;
                if (var0) {
                    _fun62476_ip = 39;
                    continue _fun62476
                }
            case 22:
                var2 = _closure1_slot5;
                var1 = var2.isProtocolRegistered;
                var0 = var1.bind(var2)();
            case 39:
                return var0;
        }
    };
    var2.isSpotifyPlayable = var3;
    var3 = function() {
        _fun62477: for (var _fun62477_ip = 0;;) switch (_fun62477_ip) {
            case 0:
                var2 = _closure1_slot6;
                var1 = var2.getActiveSocketAndDevice;
                var2 = var1.bind(var2)();
                var1 = null;
                if (!(var1 == var2)) {
                    _fun62477_ip = 321;
                    continue _fun62477
                }
            case 28:
                var3 = _closure1_slot5;
                var1 = var3.isProtocolRegistered;
                var1 = var1.bind(var3)();
                if (var1) {
                    _fun62477_ip = 98;
                    continue _fun62477
                }
            case 45:
                var1 = global;
                var4 = var1.Promise;
                var3 = var4.reject;
                var7 = var1.Error;
                var1 = var7.prototype;
                var6 = Object.create(var1, {
                    constructor: {
                        value: var7
                    }
                });
                var11 = 'protocol is not registered';
                var12 = var6;
                var1 = new var12[var7](var11, var10);
                var1 = var1 instanceof Object ? var1 : var6;
                var1 = var3.bind(var4)(var1);
                return var1;
            case 98:
                var3 = _closure1_slot6;
                var1 = var3.getPlayableComputerDevices;
                var4 = var1.bind(var3)();
                var _closure2_slot0 = var4;
                var7 = _closure1_slot4;
                var6 = var7.isObservedAppRunning;
                var8 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 7;
                var1 = var3[var1];
                var3 = undefined;
                var9 = var8.bind(var3)(var1);
                var8 = var9.get;
                var1 = _closure1_slot10;
                var1 = var1.SPOTIFY;
                var1 = var8.bind(var9)(var1);
                var1 = var1.name;
                var1 = var6.bind(var7)(var1);
                if (!var1) {
                    _fun62477_ip = 194;
                    continue _fun62477
                }
            case 183:
                var6 = var4.length;
                var1 = 0;
                if (!(!(var6 > var1))) {
                    _fun62477_ip = 229;
                    continue _fun62477
                }
            case 194:
                var6 = global;
                var7 = var6.Promise;
                var6 = var7.prototype;
                var6 = Object.create(var6, {
                    constructor: {
                        value: var7
                    }
                });
                var11 = function(arg0, arg1) { // Environment: var5
                    var0 = arg0;
                    var _closure3_slot0 = var0;
                    var0 = arg1;
                    var _closure3_slot1 = var0;
                    var1 = global;
                    var6 = var1.setTimeout;
                    var5 = _closure1_slot11;
                    var0 = undefined;
                    var3 = function() { // Environment: var2
                        var3 = _closure1_slot6;
                        var2 = var3.removeChangeListener;
                        var1 = _closure3_slot3;
                        var1 = var2.bind(var3)(var1);
                        var2 = _closure3_slot1;
                        var0 = global;
                        var3 = var0.Error;
                        var0 = var3.prototype;
                        var1 = Object.create(var0, {
                            constructor: {
                                value: var3
                            }
                        });
                        var4 = 'timeout launching spotify';
                        var5 = var1;
                        var0 = new var5[var3](var4, var3);
                        var1 = var0 instanceof Object ? var0 : var1;
                        var0 = undefined;
                        var1 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var3 = var6.bind(var0)(var3, var5);
                    var _closure3_slot2 = var3;
                    var5 = function() {
                        _fun62480: for (var _fun62480_ip = 0;;) switch (_fun62480_ip) {
                            case 0:
                                var4 = function arg0, arg1() {
                                    _fun62481: for (var _fun62481_ip = 0;;) switch (_fun62481_ip) {
                                        case 0:
                                            var1 = arg0;
                                            var _closure5_slot0 = var1;
                                            var1 = arg1;
                                            var _closure5_slot1 = var1;
                                            var3 = _closure2_slot0;
                                            var2 = var3.find;
                                            var1 = function(arg0) { // Environment: var0
                                                var0 = arg0;
                                                var0 = var0.device;
                                                var1 = var0.id;
                                                var0 = _closure5_slot1;
                                                var0 = var0.id;
                                                var0 = var1 === var0;
                                                return var0;
                                            };
                                            var2 = var2.bind(var3)(var1);
                                            var1 = null;
                                            if (!(var1 == var2)) {
                                                _fun62481_ip = 104;
                                                continue _fun62481
                                            }
                                        case 44:
                                            var1 = global;
                                            var5 = var1.clearTimeout;
                                            var4 = _closure3_slot2;
                                            var2 = undefined;
                                            var4 = var5.bind(var2)(var4);
                                            var5 = _closure1_slot6;
                                            var4 = var5.removeChangeListener;
                                            var3 = _closure3_slot3;
                                            var3 = var4.bind(var5)(var3);
                                            var1 = var1.setImmediate;
                                            var0 = function() { // Environment: var0
                                                var2 = _closure1_slot0;
                                                var1 = _closure1_slot2;
                                                var0 = 8;
                                                var1 = var1[var0];
                                                var0 = undefined;
                                                var6 = var2.bind(var0)(var1);
                                                var5 = var6.setActiveDevice;
                                                var4 = _closure5_slot0;
                                                var2 = var4.accountId;
                                                var3 = _closure5_slot1;
                                                var1 = var3.id;
                                                var1 = var5.bind(var6)(var2, var1);
                                                var2 = _closure3_slot0;
                                                var1 = {};
                                                var1.socket = var4;
                                                var1.device = var3;
                                                var1 = var2.bind(var0)(var1);
                                                return var0;
                                            };
                                            var0 = var1.bind(var2)(var0);
                                        case 104:
                                            var0 = undefined;
                                            return var0;
                                    }
                                };
                                var2 = _closure1_slot12;
                                var1 = _closure1_slot6;
                                var0 = var1.getPlayableComputerDevices;
                                var1 = var0.bind(var1)();
                                var0 = undefined;
                                var3 = var2.bind(var0)(var1);
                                var2 = var3.bind(var0)();
                                var1 = var2.done;
                                if (var1) {
                                    _fun62480_ip = 85;
                                    continue _fun62480
                                }
                            case 47:
                                var1 = var2.value;
                                var5 = var1.socket;
                                var1 = var1.device;
                                var1 = var4.bind(var0)(var5, var1);
                                var5 = var3.bind(var0)();
                                var1 = var5.done;
                                var2 = var5;
                                if (!var1) {
                                    _fun62480_ip = 47;
                                    continue _fun62480
                                }
                            case 85:
                                return var0;
                        }
                    };
                    var _closure3_slot3 = var5;
                    var3 = _closure1_slot6;
                    var2 = var3.addChangeListener;
                    var2 = var2.bind(var3)(var5);
                    var3 = var1.window;
                    var2 = var3.open;
                    var6 = _closure1_slot7;
                    var1 = var1.HermesInternal;
                    var5 = var1.concat;
                    var4 = '';
                    var1 = ':';
                    var1 = var5.bind(var4)(var6, var1);
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var12 = var6;
                var5 = new var12[var7](var11, var10);
                var5 = var5 instanceof Object ? var5 : var6;
                return var5;
            case 229:
                var1 = var4[var1];
                var5 = var1.socket;
                var4 = var1.device;
                var1 = _closure1_slot0;
                var6 = _closure1_slot2;
                var0 = 8;
                var0 = var6[var0];
                var6 = var1.bind(var3)(var0);
                var3 = var6.setActiveDevice;
                var1 = var5.accountId;
                var0 = var4.id;
                var0 = var3.bind(var6)(var1, var0);
                var0 = global;
                var3 = var0.Promise;
                var1 = var3.resolve;
                var0 = {};
                var0.socket = var5;
                var0.device = var4;
                var0 = var1.bind(var3)(var0);
                return var0;
            case 321:
                var0 = global;
                var1 = var0.Promise;
                var0 = var1.resolve;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var2.ensureSpotifyPlayable = var3;
    var3 = function() {
        _fun62484: for (var _fun62484_ip = 0;;) switch (_fun62484_ip) {
            case 0:
                var1 = _closure1_slot6;
                var0 = var1.getActiveSocketAndDevice;
                var1 = var0.bind(var1)();
                var0 = null;
                var2 = var0 == var1;
                if (var2) {
                    _fun62484_ip = 38;
                    continue _fun62484
                }
            case 26:
                var1 = var1.socket;
                var0 = var1.isPremium;
            case 38:
                return var0;
        }
    };
    var2.isSpotifyPremium = var3;
    var3 = function() {
        _fun62485: for (var _fun62485_ip = 0;;) switch (_fun62485_ip) {
            case 0:
                var3 = _closure1_slot6;
                var1 = var3.getActiveSocketAndDevice;
                var1 = var1.bind(var3)();
                var3 = null;
                if (!(var3 != var1)) {
                    _fun62485_ip = 127;
                    continue _fun62485
                }
            case 25:
                var1 = var1.socket;
                var _closure2_slot0 = var1;
                var3 = var1.isPremium;
                if (var3) {
                    _fun62485_ip = 107;
                    continue _fun62485
                }
            case 44:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 8;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.getProfile;
                var2 = var1.accountId;
                var1 = var1.accessToken;
                var2 = var3.bind(var4)(var2, var1);
                var1 = var2.then;
                var0 = function() { // Environment: var0
                    _fun62486: for (var _fun62486_ip = 0;;) switch (_fun62486_ip) {
                        case 0:
                            var0 = _closure2_slot0;
                            var0 = var0.isPremium;
                            if (var0) {
                                _fun62486_ip = 69;
                                continue _fun62486
                            }
                        case 16:
                            var0 = global;
                            var2 = var0.Promise;
                            var1 = var2.reject;
                            var4 = var0.Error;
                            var0 = var4.prototype;
                            var3 = Object.create(var0, {
                                constructor: {
                                    value: var4
                                }
                            });
                            var5 = 'spotify account is not premium';
                            var6 = var3;
                            var0 = new var6[var4](var5, var4);
                            var0 = var0 instanceof Object ? var0 : var3;
                            var0 = var1.bind(var2)(var0);
                            return var0;
                        case 69:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var1.bind(var2)(var0);
                _fun62485_ip = 125;
                continue _fun62485;
            case 107:
                var1 = global;
                var2 = var1.Promise;
                var1 = var2.resolve;
                var0 = var1.bind(var2)();
            case 125:
                return var0;
            case 127:
                var0 = global;
                var2 = var0.Promise;
                var1 = var2.reject;
                var4 = var0.Error;
                var0 = var4.prototype;
                var3 = Object.create(var0, {
                    constructor: {
                        value: var4
                    }
                });
                var6 = 'no active profile';
                var7 = var3;
                var0 = new var7[var4](var6, var5);
                var0 = var0 instanceof Object ? var0 : var3;
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var2.ensureSpotifyPremium = var3;
    var1 = function() {
        var0 = undefined;
        var3 = _closure1_slot15;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.getSpotifyMetadataFromActivity = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 3474, 5646, 5643, 5644, 660, 667, 4391, 5645, 7837, 2]);