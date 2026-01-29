// stores/SpeakingStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportAll;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var3
        _fun35767: for (var _fun35767_ip = 0;;) switch (_fun35767_ip) {
            case 0:
            case 2: // try_start_0
                var1 = global;
                var2 = var1.Boolean;
                var2 = var2.prototype;
                var3 = var2.valueOf;
                var2 = var3.call;
                var7 = var1.Reflect;
                var6 = var7.construct;
                var5 = var1.Boolean;
                var4 = new Array(0);
                var1 = function() { // Environment: var0
                    var0 = undefined;
                    return var0;
                };
                var1 = var6.bind(var7)(var5, var4, var1);
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                var _closure2_slot0 = var1;
            case 70: // try_end0
                _fun35767_ip = 74;
                continue _fun35767;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot22 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot22 = var0;
    var0 = function(arg0, arg1) { // Original name: _createForOfIteratorHelperLoose, environment: var3
        _fun35770: for (var _fun35770_ip = 0;;) switch (_fun35770_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun35770_ip = 45;
                    continue _fun35770
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 45:
                if (var1) {
                    _fun35770_ip = 54;
                    continue _fun35770
                }
            case 48:
                var1 = var2["@@iterator"];
            case 54:
                if (var1) {
                    _fun35770_ip = 342;
                    continue _fun35770
                }
            case 60:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun35770_ip = 322;
                    continue _fun35770
                }
            case 85:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun35770_ip = 282;
                    continue _fun35770
                }
            case 95:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun35770_ip = 269;
                    continue _fun35770
                }
            case 109:
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
                    _fun35770_ip = 162;
                    continue _fun35770
                }
            case 157:
                var6 = var2.constructor;
            case 162:
                var9 = var8;
                if (!var6) {
                    _fun35770_ip = 178;
                    continue _fun35770
                }
            case 168:
                var6 = var2.constructor;
                var9 = var6.name;
            case 178:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun35770_ip = 248;
                    continue _fun35770
                }
            case 186:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun35770_ip = 248;
                    continue _fun35770
                }
            case 194:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun35770_ip = 233;
                    continue _fun35770
                }
            case 204:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun35770_ip = 246;
                    continue _fun35770
                }
            case 233:
                var8 = _closure1_slot24;
                var6 = var8.bind(var7)(var2, var7);
            case 246:
                _fun35770_ip = 264;
                continue _fun35770;
            case 248:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 264:
                var5 = var6;
                _fun35770_ip = 282;
                continue _fun35770;
            case 269:
                var6 = _closure1_slot24;
                var5 = var6.bind(var7)(var2, var7);
            case 282:
                var3 = var5;
                if (var3) {
                    _fun35770_ip = 322;
                    continue _fun35770
                }
            case 288:
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
            case 322:
                if (!var3) {
                    _fun35770_ip = 329;
                    continue _fun35770
                }
            case 325:
                _closure2_slot0 = var3;
            case 329:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun35771: for (var _fun35771_ip = 0;;) switch (_fun35771_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun35771_ip = 56;
                                continue _fun35771
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
                            _fun35771_ip = 67;
                            continue _fun35771;
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
            case 342:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot23 = var0;
    var0 = function(arg0, arg1) { // Original name: _arrayLikeToArray, environment: var3
        _fun35772: for (var _fun35772_ip = 0;;) switch (_fun35772_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun35772_ip = 23;
                    continue _fun35772
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun35772_ip = 33;
                    continue _fun35772
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
                    _fun35772_ip = 70;
                    continue _fun35772
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun35772_ip = 55;
                    continue _fun35772
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot24 = var0;
    var0 = function(arg0, arg1) { // Original name: clearSpeakingFlagsInContext, environment: var3
        _fun35773: for (var _fun35773_ip = 0;;) switch (_fun35773_ip) {
            case 0:
                var3 = arg0;
                var2 = _closure1_slot16;
                var0 = var2.get;
                var2 = var0.bind(var2)(var3);
                var0 = null;
                if (!(var0 != var2)) {
                    _fun35773_ip = 66;
                    continue _fun35773
                }
            case 26:
                var4 = var2.delete;
                var0 = arg1;
                var0 = var4.bind(var2)(var0);
                var4 = var2.size;
                var2 = 0;
                if (!(var2 === var4)) {
                    _fun35773_ip = 64;
                    continue _fun35773
                }
            case 50:
                var2 = _closure1_slot16;
                var1 = var2.delete;
                var1 = var1.bind(var2)(var3);
            case 64:
                return var0;
            case 66:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot25 = var0;
    var0 = function(arg0, arg1, arg2) { // Original name: hasSpeakingFlagInContext, environment: var3
        _fun35774: for (var _fun35774_ip = 0;;) switch (_fun35774_ip) {
            case 0:
                var1 = arg2;
                var4 = _closure1_slot16;
                var3 = var4.get;
                var0 = arg0;
                var7 = var3.bind(var4)(var0);
                var3 = null;
                var4 = var3 == var7;
                var0 = undefined;
                if (var4) {
                    _fun35774_ip = 61;
                    continue _fun35774
                }
            case 34:
                var5 = var7.get;
                var4 = arg1;
                var4 = var5.bind(var7)(var4);
                var5 = var3 == var4;
                var0 = undefined;
                if (var5) {
                    _fun35774_ip = 61;
                    continue _fun35774
                }
            case 56:
                var0 = var4.flags;
            case 61:
                if (!(var3 == var0)) {
                    _fun35774_ip = 75;
                    continue _fun35774
                }
            case 65:
                var2 = _closure1_slot14;
                var0 = var2.NONE;
            case 75:
                var0 = var0 & var1;
                var0 = var0 === var1;
                return var0;
        }
    };
    var _closure1_slot26 = var0;
    var0 = function(arg0, arg1) { // Original name: anyoneHasFlagInContext, environment: var3
        _fun35775: for (var _fun35775_ip = 0;;) switch (_fun35775_ip) {
            case 0:
                var9 = arg1;
                var8 = arguments[2];
                var7 = undefined;
                if (!(var8 === var7)) {
                    _fun35775_ip = 14;
                    continue _fun35775
                }
            case 12:
                var8 = false;
            case 14:
                var2 = _closure1_slot16;
                var1 = var2.get;
                var0 = arg0;
                var1 = var1.bind(var2)(var0);
                var0 = null;
                if (!(var0 != var1)) {
                    _fun35775_ip = 141;
                    continue _fun35775
                }
            case 40:
                var0 = _closure1_slot23;
                var5 = var0.bind(var7)(var1);
                var1 = var5.bind(var7)();
                var0 = var1.done;
                var4 = 2;
                var3 = 0;
                var2 = 1;
                if (var0) {
                    _fun35775_ip = 137;
                    continue _fun35775
                }
            case 69:
                var10 = var1.value;
                var0 = _closure1_slot8;
                var0 = var0.bind(var7)(var10, var4);
                var11 = var0[var3];
                var0 = var0[var2];
                var0 = var0.flags;
                if (!var8) {
                    _fun35775_ip = 108;
                    continue _fun35775
                }
            case 100:
                var10 = _closure1_slot17;
                if (!(var11 !== var10)) {
                    _fun35775_ip = 116;
                    continue _fun35775
                }
            case 108:
                var0 = var0 & var9;
                if (!(var0 !== var9)) {
                    _fun35775_ip = 133;
                    continue _fun35775
                }
            case 116:
                var10 = var5.bind(var7)();
                var0 = var10.done;
                var1 = var10;
                if (var0) {
                    _fun35775_ip = 137;
                    continue _fun35775
                }
            case 131:
                _fun35775_ip = 69;
                continue _fun35775;
            case 133:
                var0 = true;
                return var0;
            case 137:
                var0 = false;
                return var0;
            case 141:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot27 = var0;
    var0 = function(arg0, arg1, arg2) { // Original name: setSpeakingFlagForUserInContext, environment: var3
        _fun35776: for (var _fun35776_ip = 0;;) switch (_fun35776_ip) {
            case 0:
                var2 = arg0;
                var5 = arg1;
                var9 = arg2;
                var7 = arguments[3];
                var6 = undefined;
                if (!(var7 === var6)) {
                    _fun35776_ip = 28;
                    continue _fun35776
                }
            case 18:
                var7 = -inf;
            case 28:
                var3 = var2;
                if (!(var3 === var6)) {
                    _fun35776_ip = 48;
                    continue _fun35776
                }
            case 35:
                var0 = _closure1_slot15;
                var3 = var0.DEFAULT;
            case 48:
                var4 = _closure1_slot16;
                var1 = var4.get;
                var1 = var1.bind(var4)(var3);
                var4 = null;
                var11 = var3;
                if (!(var4 == var1)) {
                    _fun35776_ip = 120;
                    continue _fun35776
                }
            case 74:
                var3 = global;
                var3 = var3.Map;
                var8 = var3.prototype;
                var8 = Object.create(var8, {
                    constructor: {
                        value: var3
                    }
                });
                var15 = var8;
                var3 = new var15[var3](var14);
                var3 = var3 instanceof Object ? var3 : var8;
                var10 = _closure1_slot16;
                var8 = var10.set;
                var8 = var8.bind(var10)(var11, var3);
                var1 = var3;
            case 120:
                var3 = var1.get;
                var8 = var3.bind(var1)(var5);
                var3 = var4 == var8;
                var11 = undefined;
                if (var3) {
                    _fun35776_ip = 144;
                    continue _fun35776
                }
            case 139:
                var11 = var8.flags;
            case 144:
                var12 = var4 != var11;
                var3 = 0;
                var10 = 0;
                if (!var12) {
                    _fun35776_ip = 158;
                    continue _fun35776
                }
            case 155:
                var10 = var11;
            case 158:
                if (!(var3 === var10)) {
                    _fun35776_ip = 169;
                    continue _fun35776
                }
            case 162:
                if (!(var3 !== var9)) {
                    _fun35776_ip = 354;
                    continue _fun35776
                }
            case 169:
                if (!(var3 !== var9)) {
                    _fun35776_ip = 317;
                    continue _fun35776
                }
            case 176:
                var11 = var4 == var8;
                var6 = undefined;
                if (var11) {
                    _fun35776_ip = 191;
                    continue _fun35776
                }
            case 185:
                var6 = var8.since;
            case 191:
                var11 = var4 != var6;
                var8 = null;
                if (!var11) {
                    _fun35776_ip = 203;
                    continue _fun35776
                }
            case 200:
                var8 = var6;
            case 203:
                var6 = _closure1_slot14;
                var6 = var6.VOICE;
                var11 = var10 & var6;
                var6 = _closure1_slot14;
                var10 = var6.VOICE;
                var6 = _closure1_slot14;
                var6 = var6.VOICE;
                var12 = var9 & var6;
                var6 = _closure1_slot14;
                var6 = var6.VOICE;
                var6 = var12 === var6;
                var10 = var11 === var10;
                if (!(var10 !== var6)) {
                    _fun35776_ip = 288;
                    continue _fun35776
                }
            case 263:
                var4 = null;
                if (!var6) {
                    _fun35776_ip = 285;
                    continue _fun35776
                }
            case 268:
                var6 = global;
                var10 = var6.Date;
                var6 = var10.now;
                var4 = var6.bind(var10)();
            case 285:
                var8 = var4;
            case 288:
                var6 = var1.set;
                var4 = {};
                var4.flags = var9;
                var4.since = var8;
                var4.voiceDb = var7;
                var4 = var6.bind(var1)(var5, var4);
                _fun35776_ip = 350;
                continue _fun35776;
            case 317:
                var4 = var1.delete;
                var4 = var4.bind(var1)(var5);
                var1 = var1.size;
                if (!(var3 === var1)) {
                    _fun35776_ip = 350;
                    continue _fun35776
                }
            case 336:
                var1 = _closure1_slot16;
                var0 = var1.delete;
                var0 = var0.bind(var1)(var2);
            case 350:
                var0 = true;
                return var0;
            case 354:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot28 = var0;
    var8 = function(arg0) { // Original name: handleConnectionOpen, environment: var3
        var0 = arg0;
        var1 = var0.user;
        var0 = var0.sessionId;
        var2 = var1.id;
        _closure1_slot17 = var2;
        _closure1_slot18 = var0;
        var0 = null;
        _closure1_slot19 = var0;
        var0 = undefined;
        return var0;
    };
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var7 = {};
    var0 = true;
    var7.value = var0;
    var0 = '__esModule';
    var0 = var9.bind(var10)(var2, var0, var7);
    var0 = 0;
    var7 = var5[var0];
    var0 = undefined;
    var7 = var6.bind(var0)(var7);
    var _closure1_slot3 = var7;
    var7 = 1;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot4 = var7;
    var7 = 2;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot5 = var7;
    var7 = 3;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot6 = var7;
    var7 = 4;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot7 = var7;
    var7 = 5;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot8 = var7;
    var7 = 6;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot9 = var7;
    var7 = 7;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot10 = var7;
    var7 = 8;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot11 = var7;
    var7 = 9;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot12 = var7;
    var7 = 10;
    var7 = var5[var7];
    var7 = var4.bind(var0)(var7);
    var7 = var7.Permissions;
    var _closure1_slot13 = var7;
    var7 = 11;
    var7 = var5[var7];
    var7 = var4.bind(var0)(var7);
    var9 = var7.SpeakingFlags;
    var _closure1_slot14 = var9;
    var7 = var7.MediaEngineContextTypes;
    var _closure1_slot15 = var7;
    var1 = var1.Map;
    var7 = var1.prototype;
    var7 = Object.create(var7, {
        constructor: {
            value: var1
        }
    });
    var14 = var7;
    var1 = new var14[var1](var13);
    var1 = var1 instanceof Object ? var1 : var7;
    var _closure1_slot16 = var1;
    var1 = null;
    var _closure1_slot17 = var1;
    var _closure1_slot18 = var1;
    var _closure1_slot19 = var1;
    var1 = false;
    var _closure1_slot20 = var1;
    var _closure1_slot21 = var1;
    var1 = 14;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.Store;
    var1 = function(arg0) { // Environment: var3
        var3 = function() { // Original name: SpeakingStore, environment: var5
            _fun35779: for (var _fun35779_ip = 0;;) switch (_fun35779_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot3;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot6;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot5;
                    var0 = _closure1_slot22;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun35779_ip = 69;
                        continue _fun35779
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun35779_ip = 105;
                    continue _fun35779;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot6;
                    var5 = var5.bind(var2)(var3);
                    var5 = var5.constructor;
                    var4 = arguments;
                    var0 = var6.bind(var7)(var8, var4, var5);
                case 105:
                    var0 = var1.bind(var2)(var3, var0);
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'initialize';
        var4.key = var0;
        var0 = function() { // Original name: value, environment: var5
            var5 = this;
            var1 = var5.mustEmitChanges;
            var0 = function(arg0) { // Environment: var0
                _fun35781: for (var _fun35781_ip = 0;;) switch (_fun35781_ip) {
                    case 0:
                        var1 = arg0;
                        var2 = var1.type;
                        var0 = 'CONNECTION_OPEN';
                        var0 = var0 !== var2;
                        if (!var0) {
                            _fun35781_ip = 32;
                            continue _fun35781
                        }
                    case 19:
                        var2 = var1.type;
                        var1 = 'VOICE_STATE_UPDATES';
                        var0 = var1 !== var2;
                    case 32:
                        return var0;
                }
            };
            var0 = var1.bind(var5)(var0);
            var4 = var5.waitFor;
            var9 = _closure1_slot9;
            var8 = _closure1_slot10;
            var7 = _closure1_slot11;
            var6 = _closure1_slot12;
            var10 = var5;
            var0 = var10[var4](var9, var8, var7, var6, var5);
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(14);
        var0[0] = var4;
        var4 = {};
        var6 = 'getSpeakingDuration';
        var4.key = var6;
        var6 = function(arg0, arg1) { // Original name: value, environment: var5
            _fun35782: for (var _fun35782_ip = 0;;) switch (_fun35782_ip) {
                case 0:
                    var2 = arguments[2];
                    var4 = undefined;
                    if (!(var2 === var4)) {
                        _fun35782_ip = 22;
                        continue _fun35782
                    }
                case 9:
                    var0 = _closure1_slot15;
                    var2 = var0.DEFAULT;
                case 22:
                    var1 = _closure1_slot16;
                    var0 = var1.get;
                    var5 = var0.bind(var1)(var2);
                    var0 = null;
                    var1 = var0 == var5;
                    var2 = undefined;
                    if (var1) {
                        _fun35782_ip = 78;
                        continue _fun35782
                    }
                case 50:
                    var3 = var5.get;
                    var1 = arg0;
                    var1 = var3.bind(var5)(var1);
                    var3 = var0 == var1;
                    var2 = undefined;
                    if (var3) {
                        _fun35782_ip = 78;
                        continue _fun35782
                    }
                case 72:
                    var2 = var1.since;
                case 78:
                    var1 = var0 != var2;
                    var0 = 0;
                    if (!var1) {
                        _fun35782_ip = 94;
                        continue _fun35782
                    }
                case 87:
                    var1 = arg1;
                    var0 = var1 - var2;
                case 94:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getSpeakers';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            _fun35783: for (var _fun35783_ip = 0;;) switch (_fun35783_ip) {
                case 0:
                    var6 = arguments[0];
                    var3 = undefined;
                    if (!(var6 === var3)) {
                        _fun35783_ip = 24;
                        continue _fun35783
                    }
                case 11:
                    var1 = _closure1_slot15;
                    var6 = var1.DEFAULT;
                case 24:
                    var _closure3_slot0 = var6;
                    var1 = global;
                    var2 = var1.Array;
                    var1 = var2.from;
                    var5 = _closure1_slot16;
                    var4 = var5.get;
                    var6 = var4.bind(var5)(var6);
                    var4 = null;
                    var5 = var4 == var6;
                    var3 = undefined;
                    if (var5) {
                        _fun35783_ip = 78;
                        continue _fun35783
                    }
                case 69:
                    var5 = var6.keys;
                    var3 = var5.bind(var6)();
                case 78:
                    if (!(var4 == var3)) {
                        _fun35783_ip = 86;
                        continue _fun35783
                    }
                case 82:
                    var3 = new Array(0);
                case 86:
                    var2 = var1.bind(var2)(var3);
                    var1 = var2.filter;
                    var0 = function(arg0) { // Environment: var0
                        var4 = _closure1_slot26;
                        var3 = _closure3_slot0;
                        var0 = _closure1_slot14;
                        var2 = var0.VOICE;
                        var1 = undefined;
                        var0 = arg0;
                        var0 = var4.bind(var1)(var3, var0, var2);
                        return var0;
                    };
                    var0 = var1.bind(var2)(var0);
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'isSpeaking';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun35785: for (var _fun35785_ip = 0;;) switch (_fun35785_ip) {
                case 0:
                    var4 = arguments[1];
                    var3 = undefined;
                    if (!(var4 === var3)) {
                        _fun35785_ip = 22;
                        continue _fun35785
                    }
                case 9:
                    var0 = _closure1_slot15;
                    var4 = var0.DEFAULT;
                case 22:
                    var2 = _closure1_slot26;
                    var0 = _closure1_slot14;
                    var1 = var0.VOICE;
                    var0 = arg0;
                    var0 = var2.bind(var3)(var4, var0, var1);
                    return var0;
            }
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'isPrioritySpeaker';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun35786: for (var _fun35786_ip = 0;;) switch (_fun35786_ip) {
                case 0:
                    var4 = arguments[1];
                    var3 = undefined;
                    if (!(var4 === var3)) {
                        _fun35786_ip = 22;
                        continue _fun35786
                    }
                case 9:
                    var0 = _closure1_slot15;
                    var4 = var0.DEFAULT;
                case 22:
                    var2 = _closure1_slot26;
                    var0 = _closure1_slot14;
                    var1 = var0.PRIORITY;
                    var0 = arg0;
                    var0 = var2.bind(var3)(var4, var0, var1);
                    return var0;
            }
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'isSoundSharing';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun35787: for (var _fun35787_ip = 0;;) switch (_fun35787_ip) {
                case 0:
                    var4 = arguments[1];
                    var3 = undefined;
                    if (!(var4 === var3)) {
                        _fun35787_ip = 22;
                        continue _fun35787
                    }
                case 9:
                    var0 = _closure1_slot15;
                    var4 = var0.DEFAULT;
                case 22:
                    var2 = _closure1_slot26;
                    var0 = _closure1_slot14;
                    var1 = var0.SOUNDSHARE;
                    var0 = arg0;
                    var0 = var2.bind(var3)(var4, var0, var1);
                    return var0;
            }
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'isAnyoneElseSpeaking';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            _fun35788: for (var _fun35788_ip = 0;;) switch (_fun35788_ip) {
                case 0:
                    var4 = arguments[0];
                    var3 = undefined;
                    if (!(var4 === var3)) {
                        _fun35788_ip = 22;
                        continue _fun35788
                    }
                case 9:
                    var0 = _closure1_slot15;
                    var4 = var0.DEFAULT;
                case 22:
                    var2 = _closure1_slot27;
                    var0 = _closure1_slot14;
                    var1 = var0.VOICE;
                    var0 = true;
                    var0 = var2.bind(var3)(var4, var1, var0);
                    return var0;
            }
        };
        var4.value = var6;
        var0[6] = var4;
        var4 = {};
        var6 = 'isCurrentUserSpeaking';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            _fun35789: for (var _fun35789_ip = 0;;) switch (_fun35789_ip) {
                case 0:
                    var4 = arguments[0];
                    var3 = this;
                    var0 = undefined;
                    if (!(var4 === var0)) {
                        _fun35789_ip = 25;
                        continue _fun35789
                    }
                case 12:
                    var0 = _closure1_slot15;
                    var4 = var0.DEFAULT;
                case 25:
                    var2 = _closure1_slot17;
                    var0 = null;
                    var0 = var0 != var2;
                    if (!var0) {
                        _fun35789_ip = 57;
                        continue _fun35789
                    }
                case 41:
                    var2 = var3.isSpeaking;
                    var1 = _closure1_slot17;
                    var0 = var2.bind(var3)(var1, var4);
                case 57:
                    return var0;
            }
        };
        var4.value = var6;
        var0[7] = var4;
        var4 = {};
        var6 = 'isCurrentUserPTTActive';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot21;
            return var0;
        };
        var4.value = var6;
        var0[8] = var4;
        var4 = {};
        var6 = 'isCurrentUserPTTLatched';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot20;
            return var0;
        };
        var4.value = var6;
        var0[9] = var4;
        var4 = {};
        var6 = 'isAnyonePrioritySpeaking';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            _fun35792: for (var _fun35792_ip = 0;;) switch (_fun35792_ip) {
                case 0:
                    var3 = arguments[0];
                    var2 = undefined;
                    if (!(var3 === var2)) {
                        _fun35792_ip = 22;
                        continue _fun35792
                    }
                case 9:
                    var0 = _closure1_slot15;
                    var3 = var0.DEFAULT;
                case 22:
                    var1 = _closure1_slot27;
                    var4 = _closure1_slot14;
                    var4 = var4.VOICE;
                    var0 = _closure1_slot14;
                    var0 = var0.PRIORITY;
                    var0 = var4 | var0;
                    var0 = var1.bind(var2)(var3, var0);
                    return var0;
            }
        };
        var4.value = var6;
        var0[10] = var4;
        var4 = {};
        var6 = 'isCurrentUserPrioritySpeaker';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            _fun35793: for (var _fun35793_ip = 0;;) switch (_fun35793_ip) {
                case 0:
                    var4 = arguments[0];
                    var3 = this;
                    var0 = undefined;
                    if (!(var4 === var0)) {
                        _fun35793_ip = 25;
                        continue _fun35793
                    }
                case 12:
                    var0 = _closure1_slot15;
                    var4 = var0.DEFAULT;
                case 25:
                    var2 = _closure1_slot17;
                    var0 = null;
                    var0 = var0 != var2;
                    if (!var0) {
                        _fun35793_ip = 57;
                        continue _fun35793
                    }
                case 41:
                    var2 = var3.isPrioritySpeaker;
                    var1 = _closure1_slot17;
                    var0 = var2.bind(var3)(var1, var4);
                case 57:
                    return var0;
            }
        };
        var4.value = var6;
        var0[11] = var4;
        var4 = {};
        var6 = 'isCurrentUserPrioritySpeaking';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            _fun35794: for (var _fun35794_ip = 0;;) switch (_fun35794_ip) {
                case 0:
                    var4 = arguments[0];
                    var3 = this;
                    var0 = undefined;
                    if (!(var4 === var0)) {
                        _fun35794_ip = 25;
                        continue _fun35794
                    }
                case 12:
                    var0 = _closure1_slot15;
                    var4 = var0.DEFAULT;
                case 25:
                    var2 = _closure1_slot17;
                    var0 = null;
                    var0 = var0 != var2;
                    if (!var0) {
                        _fun35794_ip = 57;
                        continue _fun35794
                    }
                case 41:
                    var5 = var3.isPrioritySpeaker;
                    var2 = _closure1_slot17;
                    var0 = var5.bind(var3)(var2, var4);
                case 57:
                    if (!var0) {
                        _fun35794_ip = 76;
                        continue _fun35794
                    }
                case 60:
                    var2 = var3.isSpeaking;
                    var1 = _closure1_slot17;
                    var0 = var2.bind(var3)(var1, var4);
                case 76:
                    return var0;
            }
        };
        var4.value = var6;
        var0[12] = var4;
        var4 = {};
        var6 = 'getVoiceVolume';
        var4.key = var6;
        var5 = function(arg0) { // Original name: value, environment: var5
            _fun35795: for (var _fun35795_ip = 0;;) switch (_fun35795_ip) {
                case 0:
                    var4 = arguments[1];
                    var6 = undefined;
                    if (!(var4 === var6)) {
                        _fun35795_ip = 22;
                        continue _fun35795
                    }
                case 9:
                    var0 = _closure1_slot15;
                    var4 = var0.DEFAULT;
                case 22:
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var0 = 13;
                    var0 = var3[var0];
                    var3 = var2.bind(var6)(var0);
                    var2 = var3.getProportionalVadIndicatorExperimentConfig;
                    var0 = {};
                    var5 = 'SpeakingStore';
                    var0.location = var5;
                    var0 = var2.bind(var3)(var0);
                    var2 = var0.enabled;
                    var3 = -inf;
                    var0 = var3;
                    if (!var2) {
                        _fun35795_ip = 155;
                        continue _fun35795
                    }
                case 89:
                    var2 = _closure1_slot16;
                    var1 = var2.get;
                    var7 = var1.bind(var2)(var4);
                    var2 = null;
                    var4 = var2 == var7;
                    var1 = undefined;
                    if (var4) {
                        _fun35795_ip = 142;
                        continue _fun35795
                    }
                case 114:
                    var5 = var7.get;
                    var4 = arg0;
                    var4 = var5.bind(var7)(var4);
                    var5 = var2 == var4;
                    var1 = undefined;
                    if (var5) {
                        _fun35795_ip = 142;
                        continue _fun35795
                    }
                case 136:
                    var1 = var4.voiceDb;
                case 142:
                    var2 = var2 != var1;
                    var0 = var3;
                    if (!var2) {
                        _fun35795_ip = 155;
                        continue _fun35795
                    }
                case 152:
                    var0 = var1;
                case 155:
                    return var0;
            }
        };
        var4.value = var5;
        var0[13] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var1.bind(var0)(var7);
    var1 = 'SpeakingStore';
    var7.displayName = var1;
    var1 = 15;
    var1 = var5[var1];
    var13 = var6.bind(var0)(var1);
    var1 = {};
    var1.CONNECTION_OPEN = var8;
    var1.OVERLAY_INITIALIZE = var8;
    var8 = function(arg0) { // Original name: handleSpeaking, environment: var3
        _fun35796: for (var _fun35796_ip = 0;;) switch (_fun35796_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.context;
                var4 = var0.userId;
                var1 = var0.speakingFlags;
                var3 = var0.voiceDb;
                var2 = _closure1_slot14;
                var2 = var2.PRIORITY;
                var7 = var1 & var2;
                var2 = _closure1_slot14;
                var6 = var2.PRIORITY;
                var2 = var1;
                if (!(var7 === var6)) {
                    _fun35796_ip = 215;
                    continue _fun35796
                }
            case 62:
                var8 = _closure1_slot9;
                var7 = var8.getChannel;
                var9 = _closure1_slot12;
                var6 = var9.getVoiceChannelId;
                var6 = var6.bind(var9)();
                var9 = var7.bind(var8)(var6);
                var6 = null;
                if (!(var6 != var9)) {
                    _fun35796_ip = 157;
                    continue _fun35796
                }
            case 96:
                var8 = _closure1_slot1;
                var7 = _closure1_slot2;
                var6 = 12;
                var7 = var7[var6];
                var6 = undefined;
                var8 = var8.bind(var6)(var7);
                var7 = var8.can;
                var6 = {};
                var10 = _closure1_slot13;
                var10 = var10.PRIORITY_SPEAKER;
                var6.permission = var10;
                var6.user = var4;
                var6.context = var9;
                var6 = var7.bind(var8)(var6);
                if (var6) {
                    _fun35796_ip = 194;
                    continue _fun35796
                }
            case 157:
                var8 = _closure1_slot10;
                var7 = var8.setCanHavePriority;
                var6 = false;
                var6 = var7.bind(var8)(var4, var6);
                var6 = _closure1_slot14;
                var6 = var6.PRIORITY;
                var6 = ~var6;
                var2 = var1 & var6;
                _fun35796_ip = 215;
                continue _fun35796;
            case 194:
                var8 = _closure1_slot10;
                var7 = var8.setCanHavePriority;
                var6 = true;
                var6 = var7.bind(var8)(var4, var6);
                var2 = var1;
            case 215:
                var1 = _closure1_slot14;
                var1 = var1.HIDDEN;
                var6 = var2 & var1;
                var1 = _closure1_slot14;
                var1 = var1.HIDDEN;
                if (!(var6 === var1)) {
                    _fun35796_ip = 245;
                    continue _fun35796
                }
            case 243:
                var2 = 0;
            case 245:
                var1 = _closure1_slot28;
                var15 = undefined;
                var14 = var5;
                var13 = var4;
                var12 = var2;
                var11 = var3;
                var0 = var15[var1](var14, var13, var12, var11, var10);
                return var0;
        }
    };
    var1.SPEAKING = var8;
    var8 = function(arg0) { // Original name: handleVoiceStateUpdates, environment: var3
        var0 = arg0;
        var3 = var0.voiceStates;
        var2 = var3.reduce;
        var1 = function(arg0, arg1) { // Environment: var0
            _fun35798: for (var _fun35798_ip = 0;;) switch (_fun35798_ip) {
                case 0:
                    var1 = arg0;
                    var0 = arg1;
                    var7 = var0.userId;
                    var6 = var0.channelId;
                    var5 = var0.sessionId;
                    var8 = _closure1_slot19;
                    var0 = _closure1_slot17;
                    var0 = var7 === var0;
                    if (!var0) {
                        _fun35798_ip = 48;
                        continue _fun35798
                    }
                case 40:
                    var2 = _closure1_slot18;
                    var0 = var5 === var2;
                case 48:
                    if (!var0) {
                        _fun35798_ip = 67;
                        continue _fun35798
                    }
                case 51:
                    var0 = null;
                    var2 = var0 != var6;
                    if (!var2) {
                        _fun35798_ip = 63;
                        continue _fun35798
                    }
                case 60:
                    var0 = var6;
                case 63:
                    _closure1_slot19 = var0;
                case 67:
                    var0 = _closure1_slot19;
                    var4 = false;
                    if (!(var8 !== var0)) {
                        _fun35798_ip = 109;
                        continue _fun35798
                    }
                case 77:
                    var9 = _closure1_slot16;
                    var8 = var9.delete;
                    var0 = _closure1_slot15;
                    var0 = var0.DEFAULT;
                    var0 = var8.bind(var9)(var0);
                    if (var0) {
                        _fun35798_ip = 106;
                        continue _fun35798
                    }
                case 104:
                    var0 = false;
                case 106:
                    var4 = var0;
                case 109:
                    var0 = null;
                    if (!(var0 != var6)) {
                        _fun35798_ip = 240;
                        continue _fun35798
                    }
                case 118:
                    var0 = _closure1_slot17;
                    if (!(var7 === var0)) {
                        _fun35798_ip = 134;
                        continue _fun35798
                    }
                case 126:
                    var0 = _closure1_slot18;
                    if (!(var5 === var0)) {
                        _fun35798_ip = 205;
                        continue _fun35798
                    }
                case 134:
                    var0 = _closure1_slot17;
                    var2 = var7 !== var0;
                    if (!var2) {
                        _fun35798_ip = 163;
                        continue _fun35798
                    }
                case 145:
                    var8 = _closure1_slot11;
                    var0 = var8.getChannelId;
                    var0 = var0.bind(var8)();
                    var2 = var6 !== var0;
                case 163:
                    var0 = var4;
                    if (!var2) {
                        _fun35798_ip = 322;
                        continue _fun35798
                    }
                case 172:
                    var8 = _closure1_slot25;
                    var2 = _closure1_slot15;
                    var6 = var2.DEFAULT;
                    var2 = undefined;
                    var2 = var8.bind(var2)(var6, var7);
                    if (var2) {
                        _fun35798_ip = 200;
                        continue _fun35798
                    }
                case 197:
                    var2 = var4;
                case 200:
                    var0 = var2;
                    _fun35798_ip = 322;
                    continue _fun35798;
                case 205:
                    var8 = _closure1_slot16;
                    var6 = var8.delete;
                    var2 = _closure1_slot15;
                    var2 = var2.DEFAULT;
                    var2 = var6.bind(var8)(var2);
                    if (var2) {
                        _fun35798_ip = 235;
                        continue _fun35798
                    }
                case 232:
                    var2 = var4;
                case 235:
                    var0 = var2;
                    _fun35798_ip = 322;
                    continue _fun35798;
                case 240:
                    var2 = _closure1_slot17;
                    if (!(var7 === var2)) {
                        _fun35798_ip = 256;
                        continue _fun35798
                    }
                case 248:
                    var2 = _closure1_slot18;
                    if (!(var5 !== var2)) {
                        _fun35798_ip = 286;
                        continue _fun35798
                    }
                case 256:
                    var6 = _closure1_slot25;
                    var2 = _closure1_slot15;
                    var5 = var2.DEFAULT;
                    var2 = undefined;
                    var2 = var6.bind(var2)(var5, var7);
                    if (var2) {
                        _fun35798_ip = 284;
                        continue _fun35798
                    }
                case 281:
                    var2 = var4;
                case 284:
                    _fun35798_ip = 319;
                    continue _fun35798;
                case 286:
                    var6 = _closure1_slot16;
                    var5 = var6.delete;
                    var3 = _closure1_slot15;
                    var3 = var3.DEFAULT;
                    var3 = var5.bind(var6)(var3);
                    if (var3) {
                        _fun35798_ip = 316;
                        continue _fun35798
                    }
                case 313:
                    var3 = var4;
                case 316:
                    var2 = var3;
                case 319:
                    var0 = var2;
                case 322:
                    if (var0) {
                        _fun35798_ip = 328;
                        continue _fun35798
                    }
                case 325:
                    var0 = var1;
                case 328:
                    return var0;
            }
        };
        var0 = false;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var1.VOICE_STATE_UPDATES = var8;
    var3 = function(arg0) { // Original name: handlePushToTalkStateChange, environment: var3
        var0 = arg0;
        var1 = var0.isActive;
        var2 = var0.isLatched;
        _closure1_slot20 = var2;
        _closure1_slot21 = var1;
        var0 = undefined;
        return var0;
    };
    var1.PUSH_TO_TALK_STATE_CHANGE = var3;
    var3 = var7.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var14 = var3;
    var12 = var1;
    var1 = new var14[var7](var13, var12, var11);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 16;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'stores/SpeakingStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 57, 1372, 3435, 3477, 1661, 660, 3469, 3055, 3904, 566, 806, 2]);