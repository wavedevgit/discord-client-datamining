// modules/guild_sidebar/ChannelListState.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var16 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var17 = dependencyMap;
    var _closure1_slot0 = var16;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var17;
    var0 = function(arg0, arg1, arg2, arg3) { // Original name: _superPropGet, environment: var18
        _fun41210: for (var _fun41210_ip = 0;;) switch (_fun41210_ip) {
            case 0:
                var4 = arg0;
                var6 = arg2;
                var _closure2_slot0 = var6;
                var5 = _closure1_slot3;
                var3 = _closure1_slot5;
                var0 = 1;
                var2 = 3;
                var7 = var0 & var2;
                var0 = var4;
                if (!var7) {
                    _fun41210_ip = 44;
                    continue _fun41210
                }
            case 39:
                var0 = var4.prototype;
            case 44:
                var4 = undefined;
                var3 = var3.bind(var4)(var0);
                var0 = arg1;
                var4 = var5.bind(var4)(var3, var0, var6);
                var _closure2_slot1 = var4;
                var0 = 2;
                var2 = var0 & var2;
                var0 = var4;
                if (!var2) {
                    _fun41210_ip = 97;
                    continue _fun41210
                }
            case 78:
                var3 = 'function';
                var2 = typeof var4;
                var0 = var4;
                if (!(var3 === var2)) {
                    _fun41210_ip = 97;
                    continue _fun41210
                }
            case 92:
                var0 = function(arg0) { // Environment: var1
                    var3 = _closure2_slot1;
                    var2 = var3.apply;
                    var1 = _closure2_slot0;
                    var0 = arg0;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
            case 97:
                return var0;
        }
    };
    var _closure1_slot63 = var0;
    var0 = function(arg0, arg1, arg2) { // Original name: _callSuper, environment: var18
        _fun41212: for (var _fun41212_ip = 0;;) switch (_fun41212_ip) {
            case 0:
                var3 = arg0;
                var5 = arg2;
                var1 = _closure1_slot5;
                var2 = undefined;
                var0 = arg1;
                var8 = var1.bind(var2)(var0);
                var1 = _closure1_slot4;
                var0 = _closure1_slot65;
                var0 = var0.bind(var2)();
                if (var0) {
                    _fun41212_ip = 51;
                    continue _fun41212
                }
            case 38:
                var0 = var8.apply;
                var0 = var0.bind(var8)(var3, var5);
                _fun41212_ip = 92;
                continue _fun41212;
            case 51:
                var6 = global;
                var7 = var6.Reflect;
                var6 = var7.construct;
                if (var5) {
                    _fun41212_ip = 71;
                    continue _fun41212
                }
            case 67:
                var5 = new Array(0);
            case 71:
                var4 = _closure1_slot5;
                var4 = var4.bind(var2)(var3);
                var4 = var4.constructor;
                var0 = var6.bind(var7)(var8, var5, var4);
            case 92:
                var0 = var1.bind(var2)(var3, var0);
                return var0;
        }
    };
    var _closure1_slot64 = var0;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var18
        _fun41213: for (var _fun41213_ip = 0;;) switch (_fun41213_ip) {
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
                _fun41213_ip = 74;
                continue _fun41213;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot65 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot65 = var0;
    var0 = function(arg0, arg1) { // Original name: _createForOfIteratorHelperLoose, environment: var18
        _fun41216: for (var _fun41216_ip = 0;;) switch (_fun41216_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun41216_ip = 46;
                    continue _fun41216
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun41216_ip = 55;
                    continue _fun41216
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun41216_ip = 343;
                    continue _fun41216
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun41216_ip = 323;
                    continue _fun41216
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun41216_ip = 283;
                    continue _fun41216
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun41216_ip = 270;
                    continue _fun41216
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
                    _fun41216_ip = 163;
                    continue _fun41216
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun41216_ip = 179;
                    continue _fun41216
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun41216_ip = 249;
                    continue _fun41216
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun41216_ip = 249;
                    continue _fun41216
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun41216_ip = 234;
                    continue _fun41216
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun41216_ip = 247;
                    continue _fun41216
                }
            case 234:
                var8 = _closure1_slot67;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun41216_ip = 265;
                continue _fun41216;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun41216_ip = 283;
                continue _fun41216;
            case 270:
                var6 = _closure1_slot67;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun41216_ip = 323;
                    continue _fun41216
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
                    _fun41216_ip = 330;
                    continue _fun41216
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun41217: for (var _fun41217_ip = 0;;) switch (_fun41217_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun41217_ip = 56;
                                continue _fun41217
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
                            _fun41217_ip = 67;
                            continue _fun41217;
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
    var _closure1_slot66 = var0;
    var0 = function(arg0, arg1) { // Original name: _arrayLikeToArray, environment: var18
        _fun41218: for (var _fun41218_ip = 0;;) switch (_fun41218_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun41218_ip = 23;
                    continue _fun41218
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun41218_ip = 33;
                    continue _fun41218
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
                    _fun41218_ip = 70;
                    continue _fun41218
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun41218_ip = 55;
                    continue _fun41218
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot67 = var0;
    var3 = function(arg0, arg1, arg2) { // Original name: _computeSubtitle, environment: var18
        _fun41219: for (var _fun41219_ip = 0;;) switch (_fun41219_ip) {
            case 0:
                var4 = arg0;
                var1 = var4.type;
                var0 = _closure1_slot36;
                var0 = var0.GUILD_VOICE;
                if (!(var0 !== var1)) {
                    _fun41219_ip = 96;
                    continue _fun41219
                }
            case 25:
                var0 = _closure1_slot36;
                var0 = var0.GUILD_STAGE_VOICE;
                if (!(var0 !== var1)) {
                    _fun41219_ip = 43;
                    continue _fun41219
                }
            case 39:
                var0 = null;
                return var0;
            case 43:
                var2 = _closure1_slot13;
                var1 = var2.getActiveEventByChannel;
                var0 = var4.id;
                var2 = var1.bind(var2)(var0);
                var0 = null;
                var1 = var0 != var2;
                if (!var1) {
                    _fun41219_ip = 94;
                    continue _fun41219
                }
            case 72:
                var1 = {};
                var5 = 'event';
                var1.type = var5;
                var2 = var2.name;
                var1.name = var2;
                var0 = var1;
            case 94:
                return var0;
            case 96:
                var2 = _closure1_slot13;
                var1 = var2.getActiveEventByChannel;
                var0 = var4.id;
                var1 = var1.bind(var2)(var0);
                var0 = null;
                if (!(var0 == var1)) {
                    _fun41219_ip = 382;
                    continue _fun41219
                }
            case 125:
                var5 = _closure1_slot33;
                var2 = var5.getVoiceStatesForChannel;
                var6 = var2.bind(var5)(var4);
                var2 = arg2;
                if (!var2) {
                    _fun41219_ip = 191;
                    continue _fun41219
                }
            case 146:
                var2 = arg1;
                if (!var2) {
                    _fun41219_ip = 191;
                    continue _fun41219
                }
            case 152:
                var7 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 42;
                var5 = var5[var2];
                var2 = undefined;
                var5 = var7.bind(var2)(var5);
                var2 = var5.hasStream;
                var2 = var2.bind(var5)(var6);
                if (var2) {
                    _fun41219_ip = 368;
                    continue _fun41219
                }
            case 191:
                var5 = _closure1_slot11;
                var2 = var5.getChannelStatus;
                var2 = var2.bind(var5)(var4);
                if (!(var0 != var2)) {
                    _fun41219_ip = 224;
                    continue _fun41219
                }
            case 210:
                var6 = var2.length;
                var5 = 0;
                if (!(!(var6 > var5))) {
                    _fun41219_ip = 352;
                    continue _fun41219
                }
            case 224:
                var6 = _closure1_slot9;
                var5 = var6.getEmbeddedActivitiesForChannel;
                var4 = var4.id;
                var6 = var5.bind(var6)(var4);
                var5 = var6.map;
                var4 = function(arg0) { // Environment: var4
                    _fun41220: for (var _fun41220_ip = 0;;) switch (_fun41220_ip) {
                        case 0:
                            var2 = _closure1_slot10;
                            var1 = var2.getApplication;
                            var0 = arg0;
                            var0 = var0.applicationId;
                            var1 = var1.bind(var2)(var0);
                            var0 = null;
                            var2 = var0 == var1;
                            var0 = undefined;
                            if (var2) {
                                _fun41220_ip = 42;
                                continue _fun41220
                            }
                        case 37:
                            var0 = var1.name;
                        case 42:
                            return var0;
                    }
                };
                var5 = var5.bind(var6)(var4);
                var4 = var5.filter;
                var7 = _closure1_slot0;
                var6 = _closure1_slot2;
                var3 = 40;
                var6 = var6[var3];
                var3 = undefined;
                var3 = var7.bind(var3)(var6);
                var3 = var3.isNotNullish;
                var6 = var4.bind(var5)(var3);
                var4 = var6.length;
                var3 = 0;
                var3 = var4 > var3;
                var0 = null;
                if (!var3) {
                    _fun41219_ip = 350;
                    continue _fun41219
                }
            case 315:
                var3 = {};
                var4 = 'embedded-activities';
                var3.type = var4;
                var5 = var6.join;
                var4 = ', ';
                var4 = var5.bind(var6)(var4);
                var3.name = var4;
                var0 = var3;
            case 350:
                return var0;
            case 352:
                var0 = {};
                var3 = 'voice';
                var0.type = var3;
                var0.text = var2;
                return var0;
            case 368:
                var0 = {};
                var2 = 'go-live';
                var0.type = var2;
                return var0;
            case 382:
                var0 = {};
                var2 = 'event';
                var0.type = var2;
                var1 = var1.name;
                var0.name = var1;
                return var0;
        }
    };
    var _closure1_slot68 = var3;
    var1 = function(arg0, arg1, arg2, arg3, arg4) { // Original name: computeThreadIds, environment: var18
        _fun41221: for (var _fun41221_ip = 0;;) switch (_fun41221_ip) {
            case 0:
                var2 = arg0;
                var5 = arg1;
                var3 = arg2;
                var0 = null;
                var6 = var0 != var3;
                if (!var6) {
                    _fun41221_ip = 52;
                    continue _fun41221
                }
            case 20:
                var7 = var3.id;
                var1 = var2.id;
                var1 = var7 === var1;
                if (var1) {
                    _fun41221_ip = 49;
                    continue _fun41221
                }
            case 37:
                var8 = var2.id;
                var7 = arg3;
                var1 = var7 === var8;
            case 49:
                var6 = var1;
            case 52:
                var1 = var0 != var3;
                if (!var1) {
                    _fun41221_ip = 69;
                    continue _fun41221
                }
            case 59:
                var0 = var3.isThread;
                var1 = var0.bind(var3)();
            case 69:
                if (!var1) {
                    _fun41221_ip = 87;
                    continue _fun41221
                }
            case 72:
                var7 = var3.parent_id;
                var0 = var2.id;
                var1 = var7 === var0;
            case 87:
                var8 = _closure1_slot23;
                var7 = var8.has;
                var2 = var2.type;
                var2 = var7.bind(var8)(var2);
                if (var2) {
                    _fun41221_ip = 118;
                    continue _fun41221
                }
            case 112:
                var2 = new Array(0);
                return var2;
            case 118:
                var7 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 33;
                var2 = var2[var0];
                var0 = undefined;
                var8 = var7.bind(var0)(var2);
                var7 = var8.sortBy;
                var0 = global;
                var2 = var0.Object;
                var0 = var2.values;
                var2 = var0.bind(var2)(var5);
                var0 = function(arg0) { // Environment: var4
                    var0 = arg0;
                    var0 = var0.joinTimestamp;
                    var0 = -var0;
                    return var0;
                };
                var7 = var7.bind(var8)(var2, var0);
                var2 = var7.map;
                var0 = function(arg0) { // Environment: var4
                    var0 = arg0;
                    var0 = var0.channel;
                    var0 = var0.id;
                    return var0;
                };
                var2 = var2.bind(var7)(var0);
                var0 = var2;
                if (var6) {
                    _fun41221_ip = 262;
                    continue _fun41221
                }
            case 196:
                if (var1) {
                    _fun41221_ip = 225;
                    continue _fun41221
                }
            case 199:
                var6 = arg4;
                var1 = var2;
                if (!var6) {
                    _fun41221_ip = 223;
                    continue _fun41221
                }
            case 208:
                var6 = var2.filter;
                var4 = function(arg0) { // Environment: var4
                    _fun41224: for (var _fun41224_ip = 0;;) switch (_fun41224_ip) {
                        case 0:
                            var3 = arg0;
                            var2 = _closure1_slot19;
                            var0 = var2.isMuted;
                            var0 = var0.bind(var2)(var3);
                            var0 = !var0;
                            if (var0) {
                                _fun41224_ip = 48;
                                continue _fun41224
                            }
                        case 27:
                            var2 = _closure1_slot29;
                            var1 = var2.getMentionCount;
                            var2 = var1.bind(var2)(var3);
                            var1 = 0;
                            var0 = var2 > var1;
                        case 48:
                            return var0;
                    }
                };
                var1 = var6.bind(var2)(var4);
            case 223:
                _fun41221_ip = 259;
                continue _fun41221;
            case 225:
                var4 = var3.id;
                var4 = var4 in var5;
                var1 = var2;
                if (var4) {
                    _fun41221_ip = 259;
                    continue _fun41221
                }
            case 240:
                var4 = var2.unshift;
                var3 = var3.id;
                var3 = var4.bind(var2)(var3);
                var1 = var2;
            case 259:
                var0 = var1;
            case 262:
                return var0;
        }
    };
    var _closure1_slot69 = var1;
    var0 = function(arg0, arg1) { // Original name: shouldShowInFavorites, environment: var18
        _fun41225: for (var _fun41225_ip = 0;;) switch (_fun41225_ip) {
            case 0:
                var1 = arg0;
                var3 = var1.favoriteChannelIds;
                var2 = var3.has;
                var0 = arg1;
                var0 = var0.id;
                var0 = var2.bind(var3)(var0);
                if (!var0) {
                    _fun41225_ip = 44;
                    continue _fun41225
                }
            case 30:
                var1 = var1.optInEnabled;
                if (var1) {
                    _fun41225_ip = 41;
                    continue _fun41225
                }
            case 39:
                var1 = true;
            case 41:
                var0 = var1;
            case 44:
                return var0;
        }
    };
    var _closure1_slot70 = var0;
    var0 = function(arg0, arg1) { // Original name: shouldAlwaysShowInRecents, environment: var18
        _fun41226: for (var _fun41226_ip = 0;;) switch (_fun41226_ip) {
            case 0:
                var1 = arg0;
                var0 = arg1;
                var2 = var0.selectedChannel;
                var4 = var0.activeJoinedRelevantThreads;
                var6 = _closure1_slot29;
                var5 = var6.getMentionCount;
                var3 = var1.id;
                var3 = var5.bind(var6)(var3);
                var9 = 0;
                if (!(!(var3 > var9))) {
                    _fun41226_ip = 230;
                    continue _fun41226
                }
            case 50:
                var3 = var1.id;
                var7 = var4[var3];
                for (var4 in var7)
                    case 67: {
                        case 76: var11 = var4;
                        var10 = _closure1_slot29;
                        var3 = var10.getMentionCount;
                        var3 = var3.bind(var10)(var11);
                        if (!(var3 > var9)) {
                            _fun41226_ip = 67;
                            continue _fun41226
                        }
                        case 98: var3 = true;
                        return var3;
                    }
            case 102:
                var3 = null;
                if (!(var3 != var2)) {
                    _fun41226_ip = 150;
                    continue _fun41226
                }
            case 108:
                var4 = var2.id;
                var3 = var1.id;
                if (!(var4 !== var3)) {
                    _fun41226_ip = 226;
                    continue _fun41226
                }
            case 122:
                var3 = var2.isThread;
                var3 = var3.bind(var2)();
                if (!var3) {
                    _fun41226_ip = 150;
                    continue _fun41226
                }
            case 135:
                var3 = var2.parent_id;
                var2 = var1.id;
                if (!(var3 !== var2)) {
                    _fun41226_ip = 222;
                    continue _fun41226
                }
            case 150:
                var3 = _closure1_slot17;
                var2 = var3.getNewChannelIds;
                var0 = var1.category;
                var0 = var0.guild;
                var0 = var0.id;
                var3 = var2.bind(var3)(var0);
                var2 = var3.size;
                var0 = 2;
                var2 = var2 > var0;
                var0 = !var2;
                if (var2) {
                    _fun41226_ip = 220;
                    continue _fun41226
                }
            case 199:
                var2 = var3.has;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                var0 = !var1;
            case 220:
                return var0;
            case 222:
                var0 = false;
                return var0;
            case 226:
                var0 = false;
                return var0;
            case 230:
                var0 = true;
                return var0;
        }
    };
    var _closure1_slot71 = var0;
    var0 = function(arg0, arg1, arg2) { // Original name: shouldShowInRecents, environment: var18
        _fun41227: for (var _fun41227_ip = 0;;) switch (_fun41227_ip) {
            case 0:
                var0 = arg0;
                var1 = arg1;
                var2 = arg2;
                var3 = var2.selectedChannel;
                var5 = var2.activeJoinedRelevantThreads;
                var4 = var1.type;
                var3 = _closure1_slot36;
                var3 = var3.GUILD_DIRECTORY;
                if (!(var4 !== var3)) {
                    _fun41227_ip = 632;
                    continue _fun41227
                }
            case 46:
                var3 = var0.optInEnabled;
                if (var3) {
                    _fun41227_ip = 59;
                    continue _fun41227
                }
            case 55:
                var3 = false;
                return var3;
            case 59:
                var6 = var0.optedInChannels;
                var4 = var6.has;
                var3 = var1.id;
                var3 = var4.bind(var6)(var3);
                if (var3) {
                    _fun41227_ip = 628;
                    continue _fun41227
                }
            case 86:
                var3 = var1.isThread;
                var3 = var3.bind(var1)();
                if (var3) {
                    _fun41227_ip = 624;
                    continue _fun41227
                }
            case 102:
                var3 = var1.parent_id;
                var4 = null;
                if (!(var4 != var3)) {
                    _fun41227_ip = 142;
                    continue _fun41227
                }
            case 114:
                var7 = var0.optedInChannels;
                var6 = var7.has;
                var3 = var1.parent_id;
                var3 = var6.bind(var7)(var3);
                if (var3) {
                    _fun41227_ip = 620;
                    continue _fun41227
                }
            case 142:
                var3 = var0.hideResourceChannels;
                if (!var3) {
                    _fun41227_ip = 178;
                    continue _fun41227
                }
            case 151:
                var6 = var1.hasFlag;
                var3 = _closure1_slot38;
                var3 = var3.IS_GUILD_RESOURCE_CHANNEL;
                var3 = var6.bind(var1)(var3);
                if (var3) {
                    _fun41227_ip = 616;
                    continue _fun41227
                }
            case 178:
                var3 = var1.isGuildVocal;
                var3 = var3.bind(var1)();
                if (!var3) {
                    _fun41227_ip = 280;
                    continue _fun41227
                }
            case 191:
                var7 = _closure1_slot34;
                var6 = var7.isVoiceCategoryCollapsed;
                var3 = var0.id;
                var6 = var6.bind(var7)(var3);
                if (var6) {
                    _fun41227_ip = 218;
                    continue _fun41227
                }
            case 214:
                var3 = false;
                return var3;
            case 218:
                var8 = _closure1_slot1;
                var7 = _closure1_slot2;
                var3 = 33;
                var7 = var7[var3];
                var3 = undefined;
                var8 = var8.bind(var3)(var7);
                var7 = var8.some;
                var10 = _closure1_slot32;
                var9 = var10.getVoiceStatesForChannel;
                var3 = var1.id;
                var3 = var9.bind(var10)(var3);
                var3 = var7.bind(var8)(var3);
                if (!var6) {
                    _fun41227_ip = 280;
                    continue _fun41227
                }
            case 274:
                if (var3) {
                    _fun41227_ip = 612;
                    continue _fun41227
                }
            case 280:
                var7 = _closure1_slot29;
                var6 = var7.getMentionCount;
                var3 = var1.id;
                var3 = var6.bind(var7)(var3);
                var10 = 0;
                if (!(!(var3 > var10))) {
                    _fun41227_ip = 608;
                    continue _fun41227
                }
            case 309:
                var3 = var1.id;
                var8 = var5[var3];
                for (var5 in var8)
                    case 326: {
                        case 335: var12 = var5;
                        var11 = _closure1_slot29;
                        var3 = var11.getMentionCount;
                        var3 = var3.bind(var11)(var12);
                        if (!(!(var3 > var10))) {
                            _fun41227_ip = 401;
                            continue _fun41227
                        }
                        case 357: var11 = _closure1_slot29;
                        var3 = var11.hasUnread;
                        var3 = var3.bind(var11)(var12);
                        if (var3) {
                            _fun41227_ip = 397;
                            continue _fun41227
                        }
                        case 375: var11 = _closure1_slot29;
                        var3 = var11.hasRecentlyVisitedAndRead;
                        var3 = var3.bind(var11)(var12);
                        if (!var3) {
                            _fun41227_ip = 326;
                            continue _fun41227
                        }
                        case 393: var3 = true;
                        return var3;
                        case 397: var3 = true;
                        return var3;
                        case 401: var3 = true;
                        return var3;
                    }
            case 405:
                var6 = var0.mutedChannelIds;
                var5 = var6.has;
                var3 = var1.id;
                var3 = var5.bind(var6)(var3);
                if (var3) {
                    _fun41227_ip = 604;
                    continue _fun41227
                }
            case 432:
                var3 = var1.parent_id;
                if (!(var4 != var3)) {
                    _fun41227_ip = 470;
                    continue _fun41227
                }
            case 442:
                var5 = var0.mutedChannelIds;
                var4 = var5.has;
                var3 = var1.parent_id;
                var3 = var4.bind(var5)(var3);
                if (var3) {
                    _fun41227_ip = 604;
                    continue _fun41227
                }
            case 470:
                var4 = _closure1_slot17;
                var3 = var4.getNewChannelIds;
                var0 = var0.id;
                var4 = var3.bind(var4)(var0);
                var0 = global;
                var3 = var0.Array;
                var0 = var3.from;
                var5 = var0.bind(var3)(var4);
                var3 = var5.sort;
                var0 = function(arg0, arg1) { // Environment: var0
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 41;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.compare;
                    var1 = arg1;
                    var0 = arg0;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var5 = var3.bind(var5)(var0);
                var3 = var4.has;
                var0 = var1.id;
                var0 = var3.bind(var4)(var0);
                if (!var0) {
                    _fun41227_ip = 567;
                    continue _fun41227
                }
            case 544:
                var4 = var5.indexOf;
                var3 = var1.id;
                var4 = var4.bind(var5)(var3);
                var3 = 2;
                var0 = var4 < var3;
            case 567:
                var3 = !var0;
                var0 = !var3;
                if (!var3) {
                    _fun41227_ip = 602;
                    continue _fun41227
                }
            case 576:
                var3 = _closure1_slot29;
                var2 = var3.hasRecentlyVisitedAndRead;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                var0 = !var1;
            case 602:
                return var0;
            case 604:
                var0 = false;
                return var0;
            case 608:
                var0 = true;
                return var0;
            case 612:
                var0 = false;
                return var0;
            case 616:
                var0 = false;
                return var0;
            case 620:
                var0 = false;
                return var0;
            case 624:
                var0 = false;
                return var0;
            case 628:
                var0 = false;
                return var0;
            case 632:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot72 = var0;
    var15 = global;
    var6 = var15.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var6)(var2, var0, var4);
    var10 = 0;
    var4 = var17[var10];
    var0 = undefined;
    var4 = var11.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var9 = 1;
    var4 = var17[var9];
    var4 = var11.bind(var0)(var4);
    var _closure1_slot4 = var4;
    var13 = 2;
    var4 = var17[var13];
    var4 = var11.bind(var0)(var4);
    var _closure1_slot5 = var4;
    var8 = 3;
    var4 = var17[var8];
    var4 = var11.bind(var0)(var4);
    var _closure1_slot6 = var4;
    var7 = 4;
    var4 = var17[var7];
    var4 = var11.bind(var0)(var4);
    var _closure1_slot7 = var4;
    var6 = 5;
    var4 = var17[var6];
    var4 = var11.bind(var0)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var17[var4];
    var4 = var11.bind(var0)(var4);
    var _closure1_slot9 = var4;
    var22 = 7;
    var4 = var17[var22];
    var4 = var11.bind(var0)(var4);
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var17[var4];
    var4 = var11.bind(var0)(var4);
    var _closure1_slot11 = var4;
    var4 = 9;
    var4 = var17[var4];
    var4 = var11.bind(var0)(var4);
    var _closure1_slot12 = var4;
    var4 = 10;
    var5 = var17[var4];
    var5 = var11.bind(var0)(var5);
    var _closure1_slot13 = var5;
    var5 = 11;
    var5 = var17[var5];
    var5 = var11.bind(var0)(var5);
    var _closure1_slot14 = var5;
    var5 = 12;
    var5 = var17[var5];
    var5 = var11.bind(var0)(var5);
    var _closure1_slot15 = var5;
    var5 = 13;
    var5 = var17[var5];
    var5 = var11.bind(var0)(var5);
    var _closure1_slot16 = var5;
    var5 = 14;
    var5 = var17[var5];
    var5 = var11.bind(var0)(var5);
    var _closure1_slot17 = var5;
    var5 = 15;
    var5 = var17[var5];
    var5 = var11.bind(var0)(var5);
    var _closure1_slot18 = var5;
    var5 = 16;
    var5 = var17[var5];
    var5 = var11.bind(var0)(var5);
    var _closure1_slot19 = var5;
    var5 = 17;
    var5 = var17[var5];
    var5 = var16.bind(var0)(var5);
    var12 = var5.ChannelRecordBase;
    var _closure1_slot20 = var12;
    var12 = var5.isGuildReadableType;
    var _closure1_slot21 = var12;
    var12 = var5.isThread;
    var _closure1_slot22 = var12;
    var5 = var5.THREADED_CHANNEL_TYPES;
    var _closure1_slot23 = var5;
    var5 = 18;
    var5 = var17[var5];
    var5 = var11.bind(var0)(var5);
    var _closure1_slot24 = var5;
    var5 = 19;
    var5 = var17[var5];
    var5 = var11.bind(var0)(var5);
    var _closure1_slot25 = var5;
    var5 = 20;
    var5 = var17[var5];
    var5 = var11.bind(var0)(var5);
    var _closure1_slot26 = var5;
    var5 = 21;
    var5 = var17[var5];
    var5 = var11.bind(var0)(var5);
    var _closure1_slot27 = var5;
    var5 = 22;
    var5 = var17[var5];
    var5 = var11.bind(var0)(var5);
    var _closure1_slot28 = var5;
    var5 = 23;
    var5 = var17[var5];
    var5 = var11.bind(var0)(var5);
    var _closure1_slot29 = var5;
    var5 = 24;
    var5 = var17[var5];
    var5 = var11.bind(var0)(var5);
    var _closure1_slot30 = var5;
    var5 = 25;
    var5 = var17[var5];
    var5 = var11.bind(var0)(var5);
    var _closure1_slot31 = var5;
    var5 = 26;
    var5 = var17[var5];
    var5 = var11.bind(var0)(var5);
    var _closure1_slot32 = var5;
    var5 = 27;
    var5 = var17[var5];
    var5 = var11.bind(var0)(var5);
    var _closure1_slot33 = var5;
    var5 = 28;
    var5 = var17[var5];
    var5 = var11.bind(var0)(var5);
    var _closure1_slot34 = var5;
    var5 = 29;
    var5 = var17[var5];
    var5 = var16.bind(var0)(var5);
    var21 = var5.ChannelListGuildActionRow;
    var _closure1_slot35 = var21;
    var5 = 30;
    var5 = var17[var5];
    var5 = var16.bind(var0)(var5);
    var11 = var5.ChannelTypes;
    var _closure1_slot36 = var11;
    var5 = var5.GuildFeatures;
    var _closure1_slot37 = var5;
    var5 = 31;
    var5 = var17[var5];
    var5 = var16.bind(var0)(var5);
    var5 = var5.ChannelFlags;
    var _closure1_slot38 = var5;
    var5 = 32;
    var5 = var17[var5];
    var5 = var16.bind(var0)(var5);
    var5 = var5.Permissions;
    var _closure1_slot39 = var5;
    var5 = {};
    var5.CannotShow = var9;
    var11 = 'CannotShow';
    var5[var9] = var11;
    var5.DoNotShow = var13;
    var11 = 'DoNotShow';
    var5[var13] = var11;
    var5.WouldShowIfUncollapsed = var8;
    var11 = 'WouldShowIfUncollapsed';
    var5[var8] = var11;
    var5.Show = var7;
    var11 = 'Show';
    var5[var7] = var11;
    var _closure1_slot40 = var5;
    var12 = {};
    var12.CHANNEL_NOTICES = var10;
    var5 = 'CHANNEL_NOTICES';
    var12[var10] = var5;
    var12.GUILD_ACTIONS = var9;
    var5 = 'GUILD_ACTIONS';
    var12[var9] = var5;
    var12.FAVORITES = var13;
    var5 = 'FAVORITES';
    var12[var13] = var5;
    var12.RECENTS = var8;
    var5 = 'RECENTS';
    var12[var8] = var5;
    var12.UNCATEGORIZED_CHANNELS = var7;
    var5 = 'UNCATEGORIZED_CHANNELS';
    var12[var7] = var5;
    var12.FIRST_NAMED_CATEGORY = var6;
    var5 = 'FIRST_NAMED_CATEGORY';
    var12[var6] = var5;
    var11 = var12.CHANNEL_NOTICES;
    var _closure1_slot41 = var11;
    var10 = var12.GUILD_ACTIONS;
    var _closure1_slot42 = var10;
    var9 = var12.FAVORITES;
    var _closure1_slot43 = var9;
    var8 = var12.RECENTS;
    var _closure1_slot44 = var8;
    var7 = var12.UNCATEGORIZED_CHANNELS;
    var _closure1_slot45 = var7;
    var6 = var12.FIRST_NAMED_CATEGORY;
    var _closure1_slot46 = var6;
    var19 = var15.Set;
    var14 = var15.String;
    var5 = var21.GUILD_DIRECTORY;
    var14 = var14.bind(var0)(var5);
    var5 = new Array(1);
    var5[0] = var14;
    var14 = var19.prototype;
    var14 = Object.create(var14, {
        constructor: {
            value: var19
        }
    });
    var27 = var14;
    var26 = var5;
    var5 = new var27[var19](var26, var25);
    var5 = var5 instanceof Object ? var5 : var14;
    var _closure1_slot47 = var5;
    var5 = function() { // Environment: var18
        var3 = _closure1_slot8;
        var2 = function() { // Original name: ChannelListStates, environment: var4
            var2 = this;
            var3 = _closure1_slot7;
            var1 = _closure2_slot0;
            var0 = undefined;
            var1 = var3.bind(var0)(var2, var1);
            var1 = {};
            var2.guilds = var1;
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = '_areGuildActionRowsUpdated';
        var0.key = var1;
        var1 = function(arg0, arg1) { // Original name: value, environment: var4
            _fun41231: for (var _fun41231_ip = 0;;) switch (_fun41231_ip) {
                case 0:
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 33;
                    var0 = var1[var0];
                    var1 = undefined;
                    var3 = var2.bind(var1)(var0);
                    var2 = var3.isEqual;
                    var0 = this;
                    var4 = var0.guilds;
                    var0 = arg0;
                    var4 = var4[var0];
                    var0 = null;
                    var0 = var0 == var4;
                    if (var0) {
                        _fun41231_ip = 93;
                        continue _fun41231
                    }
                case 56:
                    var0 = var4.getGuildActionSection;
                    var4 = var0.bind(var4)();
                    var0 = var4.getRows;
                    var5 = var0.bind(var4)();
                    var4 = var5.filter;
                    var0 = function(arg0) { // Environment: var0
                        var2 = _closure1_slot47;
                        var1 = var2.has;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        var0 = !var0;
                        return var0;
                    };
                    var1 = var4.bind(var5)(var0);
                case 93:
                    var0 = arg1;
                    var0 = var2.bind(var3)(var1, var0);
                    var0 = !var0;
                    return var0;
            }
        };
        var0.value = var1;
        var1 = new Array(11);
        var1[0] = var0;
        var0 = {};
        var5 = '_areChannelNoticeRowsUpdated';
        var0.key = var5;
        var5 = function(arg0, arg1) { // Original name: value, environment: var4
            _fun41233: for (var _fun41233_ip = 0;;) switch (_fun41233_ip) {
                case 0:
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 33;
                    var0 = var1[var0];
                    var1 = undefined;
                    var3 = var2.bind(var1)(var0);
                    var2 = var3.isEqual;
                    var0 = this;
                    var4 = var0.guilds;
                    var0 = arg0;
                    var4 = var4[var0];
                    var0 = null;
                    var0 = var0 == var4;
                    if (var0) {
                        _fun41233_ip = 76;
                        continue _fun41233
                    }
                case 56:
                    var0 = var4.getChannelNoticeSection;
                    var4 = var0.bind(var4)();
                    var0 = var4.getRows;
                    var1 = var0.bind(var4)();
                case 76:
                    var0 = arg1;
                    var0 = var2.bind(var3)(var1, var0);
                    var0 = !var0;
                    return var0;
            }
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = '_areGuildVocalChannelsInRecentsInNeedOfAppearingInActiveNow';
        var0.key = var5;
        var5 = function(arg0) { // Original name: value, environment: var4
            _fun41234: for (var _fun41234_ip = 0;;) switch (_fun41234_ip) {
                case 0:
                    var0 = this;
                    var1 = var0.guilds;
                    var0 = arg0;
                    var2 = var1[var0];
                    var12 = null;
                    if (!(var12 != var2)) {
                        _fun41234_ip = 258;
                        continue _fun41234
                    }
                case 25:
                    var1 = var2.getCategoryFromSection;
                    var0 = var2.voiceChannelsSectionNumber;
                    var11 = var1.bind(var2)(var0);
                    var1 = var2.getCategoryFromSection;
                    var0 = var2.recentsSectionNumber;
                    var10 = var1.bind(var2)(var0);
                    var8 = var10.channels;
                    var3 = 0;
                    var2 = 33;
                    var1 = undefined;
                    for (var5 in var8)
                        case 86: {
                            case 98: var13 = var5;
                            var0 = var10.channels;
                            var0 = var0[var13];
                            var14 = var0.renderLevel;
                            var13 = _closure1_slot40;
                            var13 = var13.DoNotShow;
                            if (var14 !== var13) {
                                _fun41234_ip = 86;
                                continue _fun41234
                            }
                            case 131: var14 = var0.record;
                            var13 = var14.isGuildVocal;
                            var13 = var13.bind(var14)();
                            if (!var13) {
                                _fun41234_ip = 86;
                                continue _fun41234
                            }
                            case 150: var14 = var11.channels;
                            var13 = var0.id;
                            var13 = var14[var13];
                            if (var12 != var13) {
                                _fun41234_ip = 86;
                                continue _fun41234
                            }
                            case 169: var14 = _closure1_slot1;
                            var13 = _closure1_slot2;
                            var13 = var13[var2];
                            var15 = var14.bind(var1)(var13);
                            var14 = var15.some;
                            var17 = _closure1_slot32;
                            var16 = var17.getVoiceStatesForChannel;
                            var13 = var0.id;
                            var13 = var16.bind(var17)(var13);
                            var13 = var14.bind(var15)(var13);
                            if (!var13) {
                                _fun41234_ip = 86;
                                continue _fun41234
                            }
                            case 223: var14 = _closure1_slot29;
                            var13 = var14.getMentionCount;
                            var0 = var0.id;
                            var0 = var13.bind(var14)(var0);
                            if (!(var0 > var3)) {
                                _fun41234_ip = 86;
                                continue _fun41234
                            }
                            case 250: var0 = true;
                            return var0;
                        }
                case 254:
                    var0 = false;
                    return var0;
                case 258:
                    var0 = false;
                    return var0;
            }
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'getGuild';
        var0.key = var5;
        var5 = function(arg0, arg1, arg2) { // Original name: value, environment: var4
            _fun41235: for (var _fun41235_ip = 0;;) switch (_fun41235_ip) {
                case 0:
                    var1 = arg0;
                    var6 = arg1;
                    var5 = arg2;
                    var0 = this;
                    var2 = var0.guilds;
                    var3 = var1 in var2;
                    var2 = !var3;
                    if (!var3) {
                        _fun41235_ip = 42;
                        continue _fun41235
                    }
                case 28:
                    var3 = var0._areGuildActionRowsUpdated;
                    var2 = var3.bind(var0)(var1, var6);
                case 42:
                    if (var2) {
                        _fun41235_ip = 59;
                        continue _fun41235
                    }
                case 45:
                    var3 = var0._areChannelNoticeRowsUpdated;
                    var2 = var3.bind(var0)(var1, var5);
                case 59:
                    if (var2) {
                        _fun41235_ip = 75;
                        continue _fun41235
                    }
                case 62:
                    var3 = var0._areGuildVocalChannelsInRecentsInNeedOfAppearingInActiveNow;
                    var2 = var3.bind(var0)(var1);
                case 75:
                    if (!var2) {
                        _fun41235_ip = 124;
                        continue _fun41235
                    }
                case 78:
                    var3 = var0.guilds;
                    var2 = _closure1_slot48;
                    var4 = var2.prototype;
                    var4 = Object.create(var4, {
                        constructor: {
                            value: var2
                        }
                    });
                    var10 = var4;
                    var9 = var1;
                    var8 = var6;
                    var7 = var5;
                    var2 = new var10[var2](var9, var8, var7, var6);
                    var2 = var2 instanceof Object ? var2 : var4;
                    var3[var1] = var2;
                case 124:
                    var0 = var0.guilds;
                    var0 = var0[var1];
                    return var0;
            }
        };
        var0.value = var5;
        var1[3] = var0;
        var0 = {};
        var5 = 'getGuildChannelRowsOnly';
        var0.key = var5;
        var5 = function(arg0) { // Original name: value, environment: var4
            _fun41236: for (var _fun41236_ip = 0;;) switch (_fun41236_ip) {
                case 0:
                    var1 = arg0;
                    var0 = this;
                    var2 = var0.guilds;
                    var2 = var1 in var2;
                    if (var2) {
                        _fun41236_ip = 67;
                        continue _fun41236
                    }
                case 19:
                    var3 = var0.guilds;
                    var6 = _closure1_slot48;
                    var2 = var6.prototype;
                    var4 = Object.create(var2, {
                        constructor: {
                            value: var6
                        }
                    });
                    var8 = new Array(0);
                    var7 = new Array(0);
                    var10 = var4;
                    var9 = var1;
                    var2 = new var10[var6](var9, var8, var7, var6);
                    var2 = var2 instanceof Object ? var2 : var4;
                    var3[var1] = var2;
                case 67:
                    var0 = var0.guilds;
                    var0 = var0[var1];
                    return var0;
            }
        };
        var0.value = var5;
        var1[4] = var0;
        var0 = {};
        var5 = 'clear';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var4
            var1 = {};
            var0 = this;
            var0.guilds = var1;
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[5] = var0;
        var0 = {};
        var5 = 'clearGuildId';
        var0.key = var5;
        var5 = function(arg0) { // Original name: value, environment: var4
            _fun41238: for (var _fun41238_ip = 0;;) switch (_fun41238_ip) {
                case 0:
                    var2 = arg0;
                    var1 = this;
                    var0 = null;
                    var0 = var0 != var2;
                    if (!var0) {
                        _fun41238_ip = 25;
                        continue _fun41238
                    }
                case 15:
                    var3 = var1.guilds;
                    var0 = var2 in var3;
                case 25:
                    if (!var0) {
                        _fun41238_ip = 40;
                        continue _fun41238
                    }
                case 28:
                    var1 = var1.guilds;
                    var1 = delete var1[var2];
                    var0 = true;
                case 40:
                    return var0;
            }
        };
        var0.value = var5;
        var1[6] = var0;
        var0 = {};
        var5 = 'updateRecentsCategory';
        var0.key = var5;
        var5 = function(arg0) { // Original name: value, environment: var4
            _fun41239: for (var _fun41239_ip = 0;;) switch (_fun41239_ip) {
                case 0:
                    var3 = arg0;
                    var2 = this;
                    var1 = null;
                    var0 = var1 != var3;
                    if (!var0) {
                        _fun41239_ip = 25;
                        continue _fun41239
                    }
                case 15:
                    var4 = var2.guilds;
                    var0 = var3 in var4;
                case 25:
                    if (!var0) {
                        _fun41239_ip = 70;
                        continue _fun41239
                    }
                case 28:
                    var2 = var2.guilds;
                    var4 = var2[var3];
                    var3 = var1 == var4;
                    var2 = undefined;
                    if (var3) {
                        _fun41239_ip = 57;
                        continue _fun41239
                    }
                case 47:
                    var3 = var4.updateRecentsCategory;
                    var2 = var3.bind(var4)();
                case 57:
                    var1 = var1 != var2;
                    if (!var1) {
                        _fun41239_ip = 67;
                        continue _fun41239
                    }
                case 64:
                    var1 = var2;
                case 67:
                    var0 = var1;
                case 70:
                    return var0;
            }
        };
        var0.value = var5;
        var1[7] = var0;
        var0 = {};
        var5 = 'nonPositionalChannelIdUpdate';
        var0.key = var5;
        var5 = function(arg0) { // Original name: value, environment: var4
            _fun41240: for (var _fun41240_ip = 0;;) switch (_fun41240_ip) {
                case 0:
                    var9 = arg0;
                    var6 = this;
                    var1 = _closure1_slot25;
                    var0 = var1.getBasicChannel;
                    var5 = var0.bind(var1)(var9);
                    var7 = null;
                    var0 = var7 != var5;
                    if (!var0) {
                        _fun41240_ip = 122;
                        continue _fun41240
                    }
                case 33:
                    var1 = var5.guild_id;
                    var1 = var7 != var1;
                    if (!var1) {
                        _fun41240_ip = 119;
                        continue _fun41240
                    }
                case 45:
                    var3 = var6.guilds;
                    var2 = var5.guild_id;
                    var2 = var3[var2];
                    var2 = var7 != var2;
                    if (!var2) {
                        _fun41240_ip = 116;
                        continue _fun41240
                    }
                case 67:
                    var3 = _closure1_slot20;
                    var3 = var5 instanceof var3;
                    if (var3) {
                        _fun41240_ip = 99;
                        continue _fun41240
                    }
                case 78:
                    var8 = _closure1_slot25;
                    var4 = var8.getChannel;
                    var4 = var4.bind(var8)(var9);
                    var3 = var7 != var4;
                    var5 = var4;
                case 99:
                    if (!var3) {
                        _fun41240_ip = 113;
                        continue _fun41240
                    }
                case 102:
                    var4 = var6.nonPositionalChannelUpdate;
                    var3 = var4.bind(var6)(var5);
                case 113:
                    var2 = var3;
                case 116:
                    var1 = var2;
                case 119:
                    var0 = var1;
                case 122:
                    return var0;
            }
        };
        var0.value = var5;
        var1[8] = var0;
        var0 = {};
        var5 = 'nonPositionalChannelUpdate';
        var0.key = var5;
        var5 = function(arg0) { // Original name: value, environment: var4
            _fun41241: for (var _fun41241_ip = 0;;) switch (_fun41241_ip) {
                case 0:
                    var3 = arg0;
                    var5 = this;
                    var1 = var3.guild_id;
                    var0 = null;
                    if (!(var0 != var1)) {
                        _fun41241_ip = 91;
                        continue _fun41241
                    }
                case 17:
                    var2 = var5.guilds;
                    var1 = var3.guild_id;
                    var2 = var2[var1];
                    if (!(var0 != var2)) {
                        _fun41241_ip = 87;
                        continue _fun41241
                    }
                case 36:
                    var0 = var3.isThread;
                    var0 = var0.bind(var3)();
                    var1 = false;
                    if (!var0) {
                        _fun41241_ip = 68;
                        continue _fun41241
                    }
                case 51:
                    var4 = var5.nonPositionalChannelIdUpdate;
                    var0 = var3.parent_id;
                    var1 = var4.bind(var5)(var0);
                case 68:
                    var0 = var2.nonPositionalChannelUpdate;
                    var0 = var0.bind(var2)(var3);
                    if (var0) {
                        _fun41241_ip = 85;
                        continue _fun41241
                    }
                case 82:
                    var0 = var1;
                case 85:
                    return var0;
                case 87:
                    var0 = false;
                    return var0;
                case 91:
                    var0 = false;
                    return var0;
            }
        };
        var0.value = var5;
        var1[9] = var0;
        var0 = {};
        var5 = 'updateSubtitles';
        var0.key = var5;
        var4 = function(arg0, arg1) { // Original name: value, environment: var4
            _fun41242: for (var _fun41242_ip = 0;;) switch (_fun41242_ip) {
                case 0:
                    var4 = arg0;
                    var1 = this;
                    var2 = arg1;
                    var _closure3_slot0 = var2;
                    var2 = null;
                    if (!(var2 != var4)) {
                        _fun41242_ip = 63;
                        continue _fun41242
                    }
                case 21:
                    var2 = var1.guilds;
                    var2 = var4 in var2;
                    if (var2) {
                        _fun41242_ip = 40;
                        continue _fun41242
                    }
                case 34:
                    var2 = new Array(0);
                    _fun41242_ip = 61;
                    continue _fun41242;
                case 40:
                    var3 = var1.guilds;
                    var4 = var3[var4];
                    var3 = new Array(1);
                    var3[0] = var4;
                    var2 = var3;
                case 61:
                    _fun41242_ip = 87;
                    continue _fun41242;
                case 63:
                    var3 = global;
                    var4 = var3.Object;
                    var3 = var4.values;
                    var1 = var1.guilds;
                    var2 = var3.bind(var4)(var1);
                case 87:
                    var1 = var2.forEach;
                    var0 = function(arg0) { // Environment: var0
                        var2 = arg0;
                        var1 = var2.updateSubtitles;
                        var0 = _closure3_slot0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var4;
        var1[10] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var14 = var5.bind(var0)();
    var5 = function() { // Environment: var18
        var3 = _closure1_slot8;
        var2 = function(arg0, arg1, arg2) { // Original name: ChannelListImpl, environment: var4
            _fun41245: for (var _fun41245_ip = 0;;) switch (_fun41245_ip) {
                case 0:
                    var2 = this;
                    var4 = _closure1_slot7;
                    var3 = _closure2_slot0;
                    var0 = undefined;
                    var3 = var4.bind(var0)(var2, var3);
                    var3 = arg0;
                    var2.id = var3;
                    var18 = null;
                    var2.sortedNamedCategories = var18;
                    var2.sections = var18;
                    var2.rows = var18;
                    var2.firstVoiceChannel = var0;
                    var2.allChannelsById = var18;
                    var4 = 0;
                    var2.version = var4;
                    var6 = _closure1_slot31;
                    var5 = var6.isGuildCollapsed;
                    var3 = var2.id;
                    var3 = var5.bind(var6)(var3);
                    var2.hideMutedChannels = var3;
                    var5 = var6.getMutedChannels;
                    var3 = var2.id;
                    var3 = var5.bind(var6)(var3);
                    var2.mutedChannelIds = var3;
                    var5 = var6.getOptedInChannelsWithPendingUpdates;
                    var3 = var2.id;
                    var3 = var5.bind(var6)(var3);
                    if (!(var18 == var3)) {
                        _fun41245_ip = 164;
                        continue _fun41245
                    }
                case 144:
                    var7 = _closure1_slot31;
                    var6 = var7.getOptedInChannels;
                    var5 = var2.id;
                    var3 = var6.bind(var7)(var5);
                case 164:
                    var2.optedInChannels = var3;
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var3 = 34;
                    var3 = var6[var3];
                    var8 = var5.bind(var0)(var3);
                    var7 = var8.isOptInEnabledForGuild;
                    var3 = var2.id;
                    var3 = var7.bind(var8)(var3);
                    var2.optInEnabled = var3;
                    var3 = 35;
                    var3 = var6[var3];
                    var6 = var5.bind(var0)(var3);
                    var5 = var6.canSeeOnboardingHome;
                    var3 = var2.id;
                    var3 = var5.bind(var6)(var3);
                    var2.hideResourceChannels = var3;
                    var3 = global;
                    var6 = var3.Set;
                    var7 = _closure1_slot31;
                    var5 = var7.getGuildFavorites;
                    var3 = var2.id;
                    var3 = var5.bind(var7)(var3);
                    if (!(var18 == var3)) {
                        _fun41245_ip = 282;
                        continue _fun41245
                    }
                case 278:
                    var3 = new Array(0);
                case 282:
                    var5 = var6.prototype;
                    var5 = Object.create(var5, {
                        constructor: {
                            value: var6
                        }
                    });
                    var28 = var5;
                    var27 = var3;
                    var3 = new var28[var6](var27, var26);
                    var3 = var3 instanceof Object ? var3 : var5;
                    var2.favoriteChannelIds = var3;
                    var6 = _closure1_slot15;
                    var5 = var6.getSuggestedChannelId;
                    var3 = var2.id;
                    var3 = var5.bind(var6)(var3);
                    var2.suggestedFavoriteChannelId = var3;
                    var5 = _closure1_slot24;
                    var3 = var5.getCollapsedCategories;
                    var3 = var3.bind(var5)();
                    var2.collapsedCategoryIds = var3;
                    var6 = _closure1_slot25;
                    var5 = var6.getMutableGuildChannelsForGuild;
                    var3 = var2.id;
                    var11 = var5.bind(var6)(var3);
                    var6 = _closure1_slot27;
                    var5 = var6.getGuild;
                    var3 = var2.id;
                    var17 = var5.bind(var6)(var3);
                    var5 = var18 != var17;
                    var3 = null;
                    if (!var5) {
                        _fun41245_ip = 432;
                        continue _fun41245
                    }
                case 407:
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var5 = 36;
                    var5 = var7[var5];
                    var5 = var6.bind(var0)(var5);
                    var3 = var5.bind(var0)(var17);
                case 432:
                    var2.moderatorReportChannelId = var3;
                    var3 = var18 != var17;
                    if (!var3) {
                        _fun41245_ip = 470;
                        continue _fun41245
                    }
                case 445:
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var5 = 37;
                    var5 = var7[var5];
                    var5 = var6.bind(var0)(var5);
                    var3 = var5.bind(var0)(var17);
                case 470:
                    var2.moderatorReportChannelEnabled = var3;
                    var9 = {};
                    var12 = new Array(0);
                    var16 = {};
                    var7 = var11;
                    for (var3 in var7)
                        case 497: {
                            case 506: var10 = var3;
                            var10 = var11[var10];
                            var14 = var10.type;
                            var13 = _closure1_slot36;
                            var13 = var13.GUILD_CATEGORY;
                            if (var14 !== var13) {
                                _fun41245_ip = 497;
                                continue _fun41245
                            }
                            case 532: var13 = var10.id;
                            var9[var13] = var10;
                            var13 = var10.id;
                            var10 = new Array(0);
                            var16[var13] = var10;
                            _fun41245_ip = 497;
                            continue _fun41245;
                        }
                case 556:
                    var10 = new Array(0);
                    var8 = new Array(0);
                    var3 = new Array(0);
                    var7 = var2.initializationData;
                    var14 = var11;
                    for (var5 in var14)
                        case 588: {
                            case 600: var19 = var5;
                            var21 = var11[var19];
                            var20 = var21.type;
                            var19 = _closure1_slot36;
                            var19 = var19.GUILD_CATEGORY;
                            if (var20 === var19) {
                                _fun41245_ip = 588;
                                continue _fun41245
                            }
                            case 626: var20 = var21.type;
                            var19 = _closure1_slot36;
                            var19 = var19.GUILD_DIRECTORY;
                            if (!(var20 === var19)) {
                                _fun41245_ip = 693;
                                continue _fun41245
                            }
                            case 645: var19 = var18 == var17;
                            if (var19) {
                                _fun41245_ip = 678;
                                continue _fun41245
                            }
                            case 652: var23 = var17.features;
                            var22 = var23.has;
                            var20 = _closure1_slot37;
                            var20 = var20.HUB;
                            var19 = var22.bind(var23)(var20);
                            case 678: if (var19) {
                                _fun41245_ip = 588;
                                continue _fun41245
                            }
                            case 681: var19 = var3.push;
                            var19 = var19.bind(var3)(var21);
                            _fun41245_ip = 588;
                            continue _fun41245;
                            case 693: var19 = _closure1_slot72;
                            var19 = var19.bind(var0)(var2, var21, var7);
                            if (var19) {
                                _fun41245_ip = 813;
                                continue _fun41245
                            }
                            case 707: var20 = var21.type;
                            var19 = _closure1_slot36;
                            var19 = var19.GUILD_VOICE;
                            var19 = var20 !== var19;
                            if (!var19) {
                                _fun41245_ip = 748;
                                continue _fun41245
                            }
                            case 729: var22 = var21.type;
                            var20 = _closure1_slot36;
                            var20 = var20.GUILD_STAGE_VOICE;
                            var19 = var22 !== var20;
                            case 748: if (var19) {
                                _fun41245_ip = 823;
                                continue _fun41245
                            }
                            case 751: var19 = var21.parent_id;
                            var19 = var18 != var19;
                            if (!var19) {
                                _fun41245_ip = 778;
                                continue _fun41245
                            }
                            case 764: var20 = var21.parent_id;
                            var20 = var9[var20];
                            var19 = var18 != var20;
                            case 778: if (!var19) {
                                _fun41245_ip = 801;
                                continue _fun41245
                            }
                            case 781: var20 = var8.push;
                            var19 = var21.parent_id;
                            var19 = var9[var19];
                            var19 = var20.bind(var8)(var19);
                            case 801: var19 = var8.push;
                            var19 = var19.bind(var8)(var21);
                            _fun41245_ip = 823;
                            continue _fun41245;
                            case 813: var19 = var10.push;
                            var19 = var19.bind(var10)(var21);
                            case 823: var19 = var21.parent_id;
                            if (!(var18 != var19)) {
                                _fun41245_ip = 846;
                                continue _fun41245
                            }
                            case 833: var19 = var21.parent_id;
                            var19 = var19 in var16;
                            if (var19) {
                                _fun41245_ip = 861;
                                continue _fun41245
                            }
                            case 846: var19 = var12.push;
                            var19 = var19.bind(var12)(var21);
                            _fun41245_ip = 588;
                            continue _fun41245;
                            case 861: var19 = var21.parent_id;
                            var20 = var16[var19];
                            var19 = var20.push;
                            var19 = var19.bind(var20)(var21);
                            _fun41245_ip = 588;
                            continue _fun41245;
                        }
                case 886:
                    var5 = {};
                    var2.categories = var5;
                    var14 = var16;
                    for (var5 in var14)
                        case 905: {
                            case 914: var19 = var5;
                            var18 = var2.categories;
                            var22 = _closure1_slot50;
                            var26 = var9[var19];
                            var25 = var16[var19];
                            var20 = var22.prototype;
                            var20 = Object.create(var20, {
                                constructor: {
                                    value: var22
                                }
                            });
                            var28 = var20;
                            var27 = var2;
                            var24 = var7;
                            var17 = new var28[var22](var27, var26, var25, var24, var23);
                            var17 = var17 instanceof Object ? var17 : var20;
                            var18[var19] = var17;
                            _fun41245_ip = 905;
                            continue _fun41245;
                        }
                case 967:
                    var5 = _closure1_slot44;
                    var2.recentsSectionNumber = var5;
                    var5 = _closure1_slot43;
                    var2.favoritesSectionNumber = var5;
                    var5 = _closure1_slot49;
                    var6 = var5.prototype;
                    var6 = Object.create(var6, {
                        constructor: {
                            value: var5
                        }
                    });
                    var28 = var6;
                    var27 = var2;
                    var26 = var12;
                    var25 = var7;
                    var5 = new var28[var5](var27, var26, var25, var24);
                    var5 = var5 instanceof Object ? var5 : var6;
                    var2.noParentCategory = var5;
                    var5 = _closure1_slot51;
                    var6 = var5.prototype;
                    var6 = Object.create(var6, {
                        constructor: {
                            value: var5
                        }
                    });
                    var28 = var6;
                    var27 = var2;
                    var26 = var7;
                    var5 = new var28[var5](var27, var26, var25);
                    var5 = var5 instanceof Object ? var5 : var6;
                    var2.favoritesCategory = var5;
                    var6 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var5 = 38;
                    var5 = var12[var5];
                    var6 = var6.bind(var0)(var5);
                    var5 = var6.isRecentlyActiveChannelsEnabled;
                    var5 = var5.bind(var6)();
                    if (var5) {
                        _fun41245_ip = 1130;
                        continue _fun41245
                    }
                case 1095:
                    var5 = _closure1_slot53;
                    var6 = var5.prototype;
                    var6 = Object.create(var6, {
                        constructor: {
                            value: var5
                        }
                    });
                    var28 = var6;
                    var27 = var2;
                    var26 = var10;
                    var25 = var7;
                    var5 = new var28[var5](var27, var26, var25, var24);
                    var5 = var5 instanceof Object ? var5 : var6;
                    _fun41245_ip = 1163;
                    continue _fun41245;
                case 1130:
                    var6 = _closure1_slot52;
                    var10 = var6.prototype;
                    var10 = Object.create(var10, {
                        constructor: {
                            value: var6
                        }
                    });
                    var28 = var10;
                    var27 = var2;
                    var26 = var11;
                    var25 = var7;
                    var6 = new var28[var6](var27, var26, var25, var24);
                    var5 = var6 instanceof Object ? var6 : var10;
                case 1163:
                    var2.recentsCategory = var5;
                    var5 = _closure1_slot54;
                    var6 = var5.prototype;
                    var6 = Object.create(var6, {
                        constructor: {
                            value: var5
                        }
                    });
                    var28 = var6;
                    var27 = var2;
                    var26 = var8;
                    var25 = var9;
                    var24 = var7;
                    var5 = new var28[var5](var27, var26, var25, var24, var23);
                    var5 = var5 instanceof Object ? var5 : var6;
                    var2.voiceChannelsCategory = var5;
                    var6 = _closure1_slot56;
                    var3 = var3.length;
                    var26 = var3 > var4;
                    var3 = var6.prototype;
                    var4 = Object.create(var3, {
                        constructor: {
                            value: var6
                        }
                    });
                    var27 = arg1;
                    var28 = var4;
                    var3 = new var28[var6](var27, var26, var25);
                    var3 = var3 instanceof Object ? var3 : var4;
                    var2.guildActionSection = var3;
                    var5 = _closure1_slot55;
                    var3 = var5.prototype;
                    var4 = Object.create(var3, {
                        constructor: {
                            value: var5
                        }
                    });
                    var27 = arg2;
                    var28 = var4;
                    var3 = new var28[var5](var27, var26);
                    var3 = var3 instanceof Object ? var3 : var4;
                    var2.channelNoticeSection = var3;
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 39;
                    var3 = var5[var3];
                    var7 = var4.bind(var0)(var3);
                    var6 = var2.categories;
                    var3 = 'null';
                    var3 = var3 in var6;
                    var6 = !var3;
                    var3 = 'somehow a null got into categories';
                    var3 = var7.bind(var0)(var6, var3);
                    var3 = _closure1_slot46;
                    var1 = 33;
                    var1 = var5[var1];
                    var5 = var4.bind(var0)(var1);
                    var4 = var5.size;
                    var1 = var2.categories;
                    var1 = var4.bind(var5)(var1);
                    var1 = var3 + var1;
                    var2.voiceChannelsSectionNumber = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'initializationData';
        var0.key = var1;
        var1 = function() { // Original name: get, environment: var4
            var1 = this;
            var0 = {};
            var6 = _closure1_slot25;
            var5 = var6.getChannel;
            var4 = _closure1_slot30;
            var3 = var4.getChannelId;
            var3 = var3.bind(var4)();
            var3 = var5.bind(var6)(var3);
            var0.selectedChannel = var3;
            var3 = var4.getVoiceChannelId;
            var3 = var3.bind(var4)();
            var0.selectedVoiceChannelId = var3;
            var3 = _closure1_slot18;
            var4 = var3.getActiveJoinedRelevantThreadsForGuild;
            var2 = var1.id;
            var2 = var4.bind(var3)(var2);
            var0.activeJoinedRelevantThreads = var2;
            var2 = var3.getActiveJoinedUnreadThreadsForGuild;
            var1 = var1.id;
            var1 = var2.bind(var3)(var1);
            var0.activeJoinedUnreadThreads = var1;
            return var0;
        };
        var0.get = var1;
        var1 = new Array(24);
        var1[0] = var0;
        var0 = {};
        var5 = 'invalidate';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var4
            var2 = this;
            var0 = null;
            var2.sections = var0;
            var2.rows = var0;
            var2.sortedNamedCategories = var0;
            var0 = undefined;
            var2.firstVoiceChannel = var0;
            var1 = var2.version;
            var1 = var1 + 1;
            var2.version = var1;
            return var0;
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'getSortedNamedCategories';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var4
            _fun41248: for (var _fun41248_ip = 0;;) switch (_fun41248_ip) {
                case 0:
                    var0 = this;
                    var2 = var0.sortedNamedCategories;
                    var1 = null;
                    if (!(var1 == var2)) {
                        _fun41248_ip = 25;
                        continue _fun41248
                    }
                case 15:
                    var1 = var0.getRows;
                    var1 = var1.bind(var0)();
                case 25:
                    var0 = var0.sortedNamedCategories;
                    return var0;
            }
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'getSortedCategories';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var4
            var1 = this;
            var2 = var1.favoritesCategory;
            var0 = new Array(4);
            var0[0] = var2;
            var2 = var1.recentsCategory;
            var0[1] = var2;
            var2 = var1.noParentCategory;
            var0[2] = var2;
            var2 = var1.getSortedNamedCategories;
            var5 = var2.bind(var1)();
            var4 = 3;
            var6 = var0;
            var2 = arraySpread(var6, var5, var4);
            var1 = var1.voiceChannelsCategory;
            var0[var2] = var1;
            var1 = 1;
            var1 = var2 + var1;
            return var0;
        };
        var0.value = var5;
        var1[3] = var0;
        var0 = {};
        var5 = 'getSections';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var4
            _fun41250: for (var _fun41250_ip = 0;;) switch (_fun41250_ip) {
                case 0:
                    var0 = arguments[0];
                    var1 = this;
                    var2 = undefined;
                    if (!(var0 === var2)) {
                        _fun41250_ip = 14;
                        continue _fun41250
                    }
                case 12:
                    var0 = false;
                case 14:
                    var3 = var1.sections;
                    var2 = null;
                    if (!(var2 == var3)) {
                        _fun41250_ip = 59;
                        continue _fun41250
                    }
                case 26:
                    var2 = var1.getRows;
                    var4 = var2.bind(var1)();
                    var3 = var4.map;
                    var2 = function(arg0) { // Environment: var2
                        var0 = arg0;
                        var0 = var0.length;
                        return var0;
                    };
                    var2 = var3.bind(var4)(var2);
                    var1.sections = var2;
                case 59:
                    var3 = var1.sections;
                    if (var0) {
                        _fun41250_ip = 73;
                        continue _fun41250
                    }
                case 68:
                    var0 = var3;
                    _fun41250_ip = 92;
                    continue _fun41250;
                case 73:
                    var1 = new Array(0);
                    var5 = 0;
                    var7 = var1;
                    var6 = var3;
                    var2 = arraySpread(var7, var6, var5);
                    var0 = var1;
                case 92:
                    return var0;
            }
        };
        var0.value = var5;
        var1[4] = var0;
        var0 = {};
        var5 = 'getRows';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var4
            _fun41252: for (var _fun41252_ip = 0;;) switch (_fun41252_ip) {
                case 0:
                    var0 = this;
                    var3 = var0.rows;
                    var2 = null;
                    if (!(var2 == var3)) {
                        _fun41252_ip = 354;
                        continue _fun41252
                    }
                case 20:
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 33;
                    var2 = var4[var2];
                    var5 = undefined;
                    var7 = var3.bind(var5)(var2);
                    var4 = var7.sortBy;
                    var2 = global;
                    var8 = var2.Object;
                    var3 = var8.values;
                    var2 = var0.categories;
                    var3 = var3.bind(var8)(var2);
                    var2 = function(arg0) { // Environment: var1
                        var0 = arg0;
                        var0 = var0.record;
                        var0 = var0.position;
                        return var0;
                    };
                    var2 = var4.bind(var7)(var3, var2);
                    var0.sortedNamedCategories = var2;
                    var2 = var0.channelNoticeSection;
                    var4 = new Array(6);
                    var4[0] = var2;
                    var2 = var0.guildActionSection;
                    var4[1] = var2;
                    var2 = var0.favoritesCategory;
                    var4[2] = var2;
                    var2 = var0.recentsCategory;
                    var4[3] = var2;
                    var2 = var0.noParentCategory;
                    var4[4] = var2;
                    var14 = var0.sortedNamedCategories;
                    var13 = 5;
                    var15 = var4;
                    var3 = arraySpread(var15, var14, var13);
                    var2 = var0.voiceChannelsCategory;
                    var4[var3] = var2;
                    var2 = 1;
                    var3 = var3 + var2;
                    var3 = var4.map;
                    var1 = function(arg0) { // Environment: var1
                        var1 = arg0;
                        var0 = var1.getRows;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    var1 = var3.bind(var4)(var1);
                    var0.rows = var1;
                    var1 = var0.noParentCategory;
                    var4 = new Array(1);
                    var4[0] = var1;
                    var14 = var0.sortedNamedCategories;
                    var15 = var4;
                    var13 = var2;
                    var1 = arraySpread(var15, var14, var13);
                    var1 = var4.length;
                    var2 = 0;
                    var1 = var2 < var1;
                    var3 = 0;
                    if (!var1) {
                        _fun41252_ip = 354;
                        continue _fun41252
                    }
                case 247:
                    var10 = var4[var2];
                    var11 = var3 + 1;
                    var10.position = var11;
                    var7 = _closure1_slot66;
                    var1 = var10.getShownChannelIds;
                    var1 = var1.bind(var10)();
                    var9 = var7.bind(var5)(var1);
                    var7 = var9.bind(var5)();
                    var1 = var7.done;
                    var8 = var11;
                    var3 = var8;
                    if (var1) {
                        _fun41252_ip = 342;
                        continue _fun41252
                    }
                case 297:
                    var11 = var7.value;
                    var1 = var10.channels;
                    var1 = var1[var11];
                    var11 = var8 + 1;
                    var1.position = var11;
                    var12 = var9.bind(var5)();
                    var1 = var12.done;
                    var8 = var11;
                    var7 = var12;
                    var3 = var8;
                    if (!var1) {
                        _fun41252_ip = 297;
                        continue _fun41252
                    }
                case 342:
                    var2 = var2 + 1;
                    var1 = var4.length;
                    if (var2 < var1) {
                        _fun41252_ip = 247;
                        continue _fun41252
                    }
                case 354:
                    var0 = var0.rows;
                    return var0;
            }
        };
        var0.value = var5;
        var1[5] = var0;
        var0 = {};
        var5 = 'getCategoryFromSection';
        var0.key = var5;
        var5 = function(arg0) { // Original name: value, environment: var4
            _fun41255: for (var _fun41255_ip = 0;;) switch (_fun41255_ip) {
                case 0:
                    var3 = arg0;
                    var0 = this;
                    var2 = _closure1_slot41;
                    if (!(var2 !== var3)) {
                        _fun41255_ip = 143;
                        continue _fun41255
                    }
                case 20:
                    var2 = _closure1_slot42;
                    if (!(var2 !== var3)) {
                        _fun41255_ip = 120;
                        continue _fun41255
                    }
                case 28:
                    var2 = _closure1_slot43;
                    if (!(var2 !== var3)) {
                        _fun41255_ip = 112;
                        continue _fun41255
                    }
                case 36:
                    var2 = _closure1_slot45;
                    if (!(var2 !== var3)) {
                        _fun41255_ip = 104;
                        continue _fun41255
                    }
                case 44:
                    var2 = var0.recentsSectionNumber;
                    if (!(var2 !== var3)) {
                        _fun41255_ip = 96;
                        continue _fun41255
                    }
                case 54:
                    var2 = var0.voiceChannelsSectionNumber;
                    if (!(var2 !== var3)) {
                        _fun41255_ip = 88;
                        continue _fun41255
                    }
                case 64:
                    var2 = var0.getSortedNamedCategories;
                    var2 = var2.bind(var0)();
                    var1 = _closure1_slot46;
                    var1 = var3 - var1;
                    var1 = var2[var1];
                    return var1;
                case 88:
                    var1 = var0.voiceChannelsCategory;
                    return var1;
                case 96:
                    var1 = var0.recentsCategory;
                    return var1;
                case 104:
                    var1 = var0.noParentCategory;
                    return var1;
                case 112:
                    var0 = var0.favoritesCategory;
                    return var0;
                case 120:
                    var0 = global;
                    var2 = var0.Error;
                    var1 = undefined;
                    var0 = 'Invalid section. Use getGuildActionSection instead';
                    var0 = var2.bind(var1)(var0);
                    throw var0;
                case 143:
                    var0 = global;
                    var2 = var0.Error;
                    var1 = undefined;
                    var0 = 'Invalid section. Use getChannelNoticeSection instead';
                    var0 = var2.bind(var1)(var0);
                    throw var0;
            }
        };
        var0.value = var5;
        var1[6] = var0;
        var0 = {};
        var5 = 'getNamedCategoryFromSection';
        var0.key = var5;
        var5 = function(arg0) { // Original name: value, environment: var4
            _fun41256: for (var _fun41256_ip = 0;;) switch (_fun41256_ip) {
                case 0:
                    var2 = this;
                    var3 = _closure1_slot46;
                    var1 = arg0;
                    var1 = var1 - var3;
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var0 = 39;
                    var0 = var4[var0];
                    var5 = undefined;
                    var4 = var3.bind(var5)(var0);
                    var0 = 0;
                    var3 = var1 >= var0;
                    if (!var3) {
                        _fun41256_ip = 67;
                        continue _fun41256
                    }
                case 48:
                    var0 = var2.getSortedNamedCategories;
                    var0 = var0.bind(var2)();
                    var0 = var0.length;
                    var3 = var1 < var0;
                case 67:
                    var0 = global;
                    var0 = var0.HermesInternal;
                    var6 = var0.concat;
                    var0 = 'invalid section index ';
                    var0 = var6.bind(var0)(var1);
                    var0 = var4.bind(var5)(var3, var0);
                    var0 = var2.getSortedNamedCategories;
                    var0 = var0.bind(var2)();
                    var0 = var0[var1];
                    return var0;
            }
        };
        var0.value = var5;
        var1[7] = var0;
        var0 = {};
        var5 = 'getGuildActionSection';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var4
            var0 = this;
            var0 = var0.guildActionSection;
            return var0;
        };
        var0.value = var5;
        var1[8] = var0;
        var0 = {};
        var5 = 'getChannelNoticeSection';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var4
            var0 = this;
            var0 = var0.channelNoticeSection;
            return var0;
        };
        var0.value = var5;
        var1[9] = var0;
        var0 = {};
        var5 = 'getChannelFromSectionRow';
        var0.key = var5;
        var5 = function(arg0, arg1) { // Original name: value, environment: var4
            _fun41259: for (var _fun41259_ip = 0;;) switch (_fun41259_ip) {
                case 0:
                    var2 = this;
                    var1 = var2.getCategoryFromSection;
                    var0 = arg0;
                    var4 = var1.bind(var2)(var0);
                    var0 = null;
                    if (!(var0 != var4)) {
                        _fun41259_ip = 75;
                        continue _fun41259
                    }
                case 23:
                    var2 = var4.channels;
                    var1 = var4.getShownChannelIds;
                    var3 = var1.bind(var4)();
                    var1 = arg1;
                    var1 = var3[var1];
                    var3 = var2[var1];
                    var2 = var0 == var3;
                    var1 = null;
                    if (var2) {
                        _fun41259_ip = 73;
                        continue _fun41259
                    }
                case 59:
                    var2 = {};
                    var2.category = var4;
                    var2.channel = var3;
                    var1 = var2;
                case 73:
                    return var1;
                case 75:
                    return var0;
            }
        };
        var0.value = var5;
        var1[10] = var0;
        var0 = {};
        var5 = 'isPlaceholderRow';
        var0.key = var5;
        var5 = function(arg0, arg1) { // Original name: value, environment: var4
            _fun41260: for (var _fun41260_ip = 0;;) switch (_fun41260_ip) {
                case 0:
                    var2 = arg0;
                    var3 = this;
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var1 = 39;
                    var1 = var5[var1];
                    var5 = undefined;
                    var4 = var4.bind(var5)(var1);
                    var0 = _closure1_slot42;
                    var1 = var2 > var0;
                    var0 = 'Invalid section';
                    var0 = var4.bind(var5)(var1, var0);
                    var0 = var3.recentsSectionNumber;
                    var0 = var2 !== var0;
                    if (!var0) {
                        _fun41260_ip = 95;
                        continue _fun41260
                    }
                case 64:
                    var1 = var3.getRows;
                    var1 = var1.bind(var3)();
                    var2 = var1[var2];
                    var1 = arg1;
                    var2 = var2[var1];
                    var1 = 'placeholder-channel-id';
                    var0 = var2 === var1;
                case 95:
                    return var0;
            }
        };
        var0.value = var5;
        var1[11] = var0;
        var0 = {};
        var5 = 'getFirstVoiceChannel';
        var0.key = var5;
        var5 = function(arg0) { // Original name: value, environment: var4
            _fun41261: for (var _fun41261_ip = 0;;) switch (_fun41261_ip) {
                case 0:
                    var3 = arg0;
                    var0 = this;
                    var1 = var0.firstVoiceChannel;
                    var7 = undefined;
                    if (!(var7 === var1)) {
                        _fun41261_ip = 183;
                        continue _fun41261
                    }
                case 21:
                    var2 = var0.favoritesCategory;
                    var1 = var2.getFirstVoiceChannel;
                    var1 = var1.bind(var2)(var3);
                    var0.firstVoiceChannel = var1;
                    var1 = var0.firstVoiceChannel;
                    var6 = null;
                    if (!(var6 == var1)) {
                        _fun41261_ip = 199;
                        continue _fun41261
                    }
                case 59:
                    var2 = var0.noParentCategory;
                    var1 = var2.getFirstVoiceChannel;
                    var1 = var1.bind(var2)(var3);
                    var0.firstVoiceChannel = var1;
                    var1 = var0.firstVoiceChannel;
                    if (!(var6 == var1)) {
                        _fun41261_ip = 191;
                        continue _fun41261
                    }
                case 92:
                    var2 = _closure1_slot66;
                    var1 = var0.getSortedNamedCategories;
                    var1 = var1.bind(var0)();
                    var5 = var2.bind(var7)(var1);
                    var2 = var5.bind(var7)();
                    var1 = var2.done;
                    var4 = var2;
                    if (var1) {
                        _fun41261_ip = 183;
                        continue _fun41261
                    }
                case 129:
                    var2 = var4.value;
                    var1 = var2.getFirstVoiceChannel;
                    var1 = var1.bind(var2)(var3);
                    if (!(var6 == var1)) {
                        _fun41261_ip = 166;
                        continue _fun41261
                    }
                case 149:
                    var8 = var5.bind(var7)();
                    var1 = var8.done;
                    var4 = var8;
                    if (var1) {
                        _fun41261_ip = 183;
                        continue _fun41261
                    }
                case 164:
                    _fun41261_ip = 129;
                    continue _fun41261;
                case 166:
                    var1 = var2.getFirstVoiceChannel;
                    var1 = var1.bind(var2)(var3);
                    var0.firstVoiceChannel = var1;
                case 183:
                    var1 = var0.firstVoiceChannel;
                    return var1;
                case 191:
                    var1 = var0.firstVoiceChannel;
                    return var1;
                case 199:
                    var0 = var0.firstVoiceChannel;
                    return var0;
            }
        };
        var0.value = var5;
        var1[12] = var0;
        var0 = {};
        var5 = 'getSectionRowsFromChannel';
        var0.key = var5;
        var5 = function(arg0) { // Original name: value, environment: var4
            _fun41262: for (var _fun41262_ip = 0;;) switch (_fun41262_ip) {
                case 0:
                    var12 = arg0;
                    var2 = this;
                    var5 = null;
                    var0 = var5 == var12;
                    var3 = null;
                    if (var0) {
                        _fun41262_ip = 90;
                        continue _fun41262
                    }
                case 19:
                    var6 = _closure1_slot62;
                    var1 = var6.has;
                    var1 = var1.bind(var6)(var12);
                    var3 = var12;
                    if (var1) {
                        _fun41262_ip = 90;
                        continue _fun41262
                    }
                case 42:
                    var6 = _closure1_slot25;
                    var1 = var6.getChannel;
                    var6 = var1.bind(var6)(var12);
                    var1 = var5 != var6;
                    var3 = null;
                    if (!var1) {
                        _fun41262_ip = 90;
                        continue _fun41262
                    }
                case 65:
                    var1 = var6.isDirectory;
                    var1 = var1.bind(var6)();
                    var3 = null;
                    if (!var1) {
                        _fun41262_ip = 90;
                        continue _fun41262
                    }
                case 80:
                    var0 = _closure1_slot35;
                    var3 = var0.GUILD_DIRECTORY;
                case 90:
                    if (!(var5 == var3)) {
                        _fun41262_ip = 632;
                        continue _fun41262
                    }
                case 97:
                    var0 = new Array(0);
                    var7 = _closure1_slot25;
                    var6 = var7.getChannel;
                    var7 = var6.bind(var7)(var12);
                    var _closure3_slot0 = var7;
                    if (!(var5 != var7)) {
                        _fun41262_ip = 630;
                        continue _fun41262
                    }
                case 129:
                    if (!(var5 != var12)) {
                        _fun41262_ip = 630;
                        continue _fun41262
                    }
                case 136:
                    var6 = var7.isThread;
                    var8 = var6.bind(var7)();
                    var6 = var7;
                    if (!var8) {
                        _fun41262_ip = 179;
                        continue _fun41262
                    }
                case 152:
                    var10 = _closure1_slot25;
                    var9 = var10.getChannel;
                    var7 = var7.parent_id;
                    var7 = var9.bind(var10)(var7);
                    _closure3_slot0 = var7;
                    var6 = var7;
                case 179:
                    if (!(var5 != var6)) {
                        _fun41262_ip = 628;
                        continue _fun41262
                    }
                case 186:
                    var7 = var2.favoritesCategory;
                    var5 = var7.getShownChannelIds;
                    var9 = var5.bind(var7)();
                    var7 = var9.indexOf;
                    var5 = var6.id;
                    var10 = var7.bind(var9)(var5);
                    var5 = 0;
                    if (!(var10 >= var5)) {
                        _fun41262_ip = 249;
                        continue _fun41262
                    }
                case 224:
                    var9 = var0.push;
                    var7 = {};
                    var11 = _closure1_slot43;
                    var7.section = var11;
                    var7.row = var10;
                    var7 = var9.bind(var0)(var7);
                case 249:
                    var9 = var2.recentsCategory;
                    var7 = var9.getShownChannelIds;
                    var10 = var7.bind(var9)();
                    var9 = var10.indexOf;
                    var7 = var6.id;
                    var10 = var9.bind(var10)(var7);
                    if (!(var10 >= var5)) {
                        _fun41262_ip = 312;
                        continue _fun41262
                    }
                case 285:
                    var9 = var0.push;
                    var7 = {};
                    var11 = var2.recentsSectionNumber;
                    var7.section = var11;
                    var7.row = var10;
                    var7 = var9.bind(var0)(var7);
                case 312:
                    var9 = var6.type;
                    var7 = _closure1_slot36;
                    var7 = var7.GUILD_CATEGORY;
                    if (!(var9 !== var7)) {
                        _fun41262_ip = 555;
                        continue _fun41262
                    }
                case 334:
                    var7 = var2.getCategory;
                    var7 = var7.bind(var2)(var6);
                    var9 = _closure1_slot49;
                    var9 = var7 instanceof var9;
                    if (var9) {
                        _fun41262_ip = 387;
                        continue _fun41262
                    }
                case 356:
                    var9 = var2.getSortedNamedCategories;
                    var10 = var9.bind(var2)();
                    var9 = var10.indexOf;
                    var10 = var9.bind(var10)(var7);
                    var9 = _closure1_slot46;
                    var11 = var10 + var9;
                    _fun41262_ip = 391;
                    continue _fun41262;
                case 387:
                    var11 = _closure1_slot45;
                case 391:
                    var9 = var7.getShownChannelIds;
                    var13 = var9.bind(var7)();
                    var10 = var13.indexOf;
                    var9 = var6.id;
                    var10 = var10.bind(var13)(var9);
                    if (!(var11 >= var5)) {
                        _fun41262_ip = 490;
                        continue _fun41262
                    }
                case 421:
                    if (!(var10 >= var5)) {
                        _fun41262_ip = 490;
                        continue _fun41262
                    }
                case 425:
                    var9 = 0;
                    if (!var8) {
                        _fun41262_ip = 462;
                        continue _fun41262
                    }
                case 430:
                    var8 = var7.channels;
                    var7 = var6.id;
                    var7 = var8[var7];
                    var8 = var7.threadIds;
                    var7 = var8.indexOf;
                    var9 = var7.bind(var8)(var12);
                case 462:
                    var8 = var0.push;
                    var7 = {};
                    var7.section = var11;
                    var7.row = var10;
                    var7.threadOffset = var9;
                    var7 = var8.bind(var0)(var7);
                case 490:
                    var8 = var2.voiceChannelsCategory;
                    var7 = var8.getShownChannelIds;
                    var8 = var7.bind(var8)();
                    var7 = var8.indexOf;
                    var6 = var6.id;
                    var7 = var7.bind(var8)(var6);
                    if (!(var7 >= var5)) {
                        _fun41262_ip = 553;
                        continue _fun41262
                    }
                case 526:
                    var6 = var0.push;
                    var5 = {};
                    var8 = var2.voiceChannelsSectionNumber;
                    var5.section = var8;
                    var5.row = var7;
                    var5 = var6.bind(var0)(var5);
                case 553:
                    return var0;
                case 555:
                    var7 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var5 = 33;
                    var6 = var6[var5];
                    var5 = undefined;
                    var7 = var7.bind(var5)(var6);
                    var6 = var7.findIndex;
                    var5 = var2.getSortedNamedCategories;
                    var5 = var5.bind(var2)();
                    var4 = function(arg0) { // Environment: var4
                        _fun41263: for (var _fun41263_ip = 0;;) switch (_fun41263_ip) {
                            case 0:
                                var0 = arg0;
                                var1 = var0.id;
                                var2 = _closure3_slot0;
                                var0 = null;
                                var3 = var0 == var2;
                                var0 = undefined;
                                if (var3) {
                                    _fun41263_ip = 31;
                                    continue _fun41263
                                }
                            case 26:
                                var0 = var2.id;
                            case 31:
                                var0 = var1 === var0;
                                return var0;
                        }
                    };
                    var5 = var6.bind(var7)(var5, var4);
                    var4 = {};
                    var1 = _closure1_slot46;
                    var1 = var5 + var1;
                    var4.section = var1;
                    var1 = new Array(1);
                    var1[0] = var4;
                    return var1;
                case 628:
                    return var0;
                case 630:
                    return var0;
                case 632:
                    var1 = {};
                    var0 = var2.getGuildActionSection;
                    var2 = var0.bind(var2)();
                    var0 = var2.getRows;
                    var2 = var0.bind(var2)();
                    var0 = var2.indexOf;
                    var0 = var0.bind(var2)(var3);
                    var1.row = var0;
                    var0 = _closure1_slot42;
                    var1.section = var0;
                    var0 = new Array(1);
                    var0[0] = var1;
                    return var0;
            }
        };
        var0.value = var5;
        var1[13] = var0;
        var0 = {};
        var5 = 'getCategory';
        var0.key = var5;
        var5 = function(arg0) { // Original name: value, environment: var4
            _fun41264: for (var _fun41264_ip = 0;;) switch (_fun41264_ip) {
                case 0:
                    var1 = arg0;
                    var2 = this;
                    var3 = var1.parent_id;
                    var0 = null;
                    if (!(var0 != var3)) {
                        _fun41264_ip = 37;
                        continue _fun41264
                    }
                case 18:
                    var3 = var1.parent_id;
                    var0 = var2.categories;
                    var0 = var3 in var0;
                    if (var0) {
                        _fun41264_ip = 45;
                        continue _fun41264
                    }
                case 37:
                    var0 = var2.noParentCategory;
                    _fun41264_ip = 61;
                    continue _fun41264;
                case 45:
                    var2 = var2.categories;
                    var1 = var1.parent_id;
                    var0 = var2[var1];
                case 61:
                    return var0;
            }
        };
        var0.value = var5;
        var1[14] = var0;
        var0 = {};
        var5 = 'updateRecentsCategory';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var4
            _fun41265: for (var _fun41265_ip = 0;;) switch (_fun41265_ip) {
                case 0:
                    var2 = this;
                    var3 = var2.recentsCategory;
                    var1 = var3.updateAllChannels;
                    var0 = var2.initializationData;
                    var0 = var1.bind(var3)(var0);
                    if (!var0) {
                        _fun41265_ip = 41;
                        continue _fun41265
                    }
                case 31:
                    var1 = var2.invalidate;
                    var1 = var1.bind(var2)();
                case 41:
                    return var0;
            }
        };
        var0.value = var5;
        var1[15] = var0;
        var0 = {};
        var5 = 'nonPositionalChannelUpdate';
        var0.key = var5;
        var5 = function(arg0) { // Original name: value, environment: var4
            _fun41266: for (var _fun41266_ip = 0;;) switch (_fun41266_ip) {
                case 0:
                    var5 = arg0;
                    var2 = this;
                    var4 = var2.initializationData;
                    var0 = var2.getCategory;
                    var1 = var0.bind(var2)(var5);
                    var0 = var1.updateChannel;
                    var0 = var0.bind(var1)(var5, var4);
                    var3 = var2.favoritesCategory;
                    var1 = var3.updateChannel;
                    var1 = var1.bind(var3)(var5, var4);
                    if (!var1) {
                        _fun41266_ip = 58;
                        continue _fun41266
                    }
                case 56:
                    var0 = true;
                case 58:
                    var3 = var2.recentsCategory;
                    var1 = var3.updateChannel;
                    var1 = var1.bind(var3)(var5, var4);
                    if (!var1) {
                        _fun41266_ip = 81;
                        continue _fun41266
                    }
                case 79:
                    var0 = true;
                case 81:
                    var3 = var2.voiceChannelsCategory;
                    var1 = var3.updateChannel;
                    var1 = var1.bind(var3)(var5, var4);
                    if (!var1) {
                        _fun41266_ip = 104;
                        continue _fun41266
                    }
                case 102:
                    var0 = true;
                case 104:
                    if (!var0) {
                        _fun41266_ip = 117;
                        continue _fun41266
                    }
                case 107:
                    var1 = var2.invalidate;
                    var1 = var1.bind(var2)();
                case 117:
                    return var0;
            }
        };
        var0.value = var5;
        var1[16] = var0;
        var0 = {};
        var5 = 'getSlicedChannels';
        var0.key = var5;
        var5 = function(arg0, arg1) { // Original name: value, environment: var4
            _fun41267: for (var _fun41267_ip = 0;;) switch (_fun41267_ip) {
                case 0:
                    var2 = arg0;
                    var17 = arg1;
                    var16 = this;
                    var1 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var0 = 39;
                    var0 = var3[var0];
                    var14 = undefined;
                    var4 = var1.bind(var14)(var0);
                    var1 = var2.length;
                    var0 = 0;
                    var3 = var1 > var0;
                    var1 = 'must have at least one channel in the slice';
                    var1 = var4.bind(var14)(var3, var1);
                    var13 = var2[var0];
                    var1 = var2.length;
                    var0 = 1;
                    var0 = var1 - var0;
                    var12 = var2[var0];
                    var3 = new Array(0);
                    var1 = new Array(0);
                    var4 = _closure1_slot66;
                    var0 = var16.getSortedCategories;
                    var0 = var0.bind(var16)();
                    var11 = var4.bind(var14)(var0);
                    var4 = var11.bind(var14)();
                    var0 = var4.done;
                    var8 = null;
                    var7 = var4;
                    var6 = true;
                    var5 = false;
                    var4 = undefined;
                    if (var0) {
                        _fun41267_ip = 375;
                        continue _fun41267
                    }
                case 130:
                    var23 = var7.value;
                    var0 = var8 == var17;
                    var22 = undefined;
                    if (var0) {
                        _fun41267_ip = 150;
                        continue _fun41267
                    }
                case 144:
                    var22 = var17.ignoreRecents;
                case 150:
                    if (!var22) {
                        _fun41267_ip = 163;
                        continue _fun41267
                    }
                case 153:
                    var0 = var16.recentsCategory;
                    var22 = var23 === var0;
                case 163:
                    var18 = _closure1_slot66;
                    var0 = var23.getShownChannelIds;
                    var0 = var0.bind(var23)();
                    var21 = var18.bind(var14)(var0);
                    var18 = var21.bind(var14)();
                    var0 = var18.done;
                    var20 = var6;
                    var19 = var5;
                    var6 = var20;
                    var5 = var19;
                    if (var0) {
                        _fun41267_ip = 357;
                        continue _fun41267
                    }
                case 209:
                    var24 = var18.value;
                    var0 = var23.channels;
                    var24 = var0[var24];
                    var26 = var20;
                    if (!var26) {
                        _fun41267_ip = 268;
                        continue _fun41267
                    }
                case 230:
                    var27 = var24.id;
                    var25 = var13.id;
                    var0 = false;
                    if (!(var27 !== var25)) {
                        _fun41267_ip = 265;
                        continue _fun41267
                    }
                case 246:
                    var0 = var20;
                    if (var22) {
                        _fun41267_ip = 265;
                        continue _fun41267
                    }
                case 252:
                    var25 = var3.push;
                    var25 = var25.bind(var3)(var24);
                    var0 = var20;
                case 265:
                    var26 = var0;
                case 268:
                    var0 = var19;
                    if (!var19) {
                        _fun41267_ip = 277;
                        continue _fun41267
                    }
                case 274:
                    var0 = !var22;
                case 277:
                    if (!var0) {
                        _fun41267_ip = 290;
                        continue _fun41267
                    }
                case 280:
                    var0 = var1.push;
                    var0 = var0.bind(var1)(var24);
                case 290:
                    var0 = var26;
                    if (var26) {
                        _fun41267_ip = 299;
                        continue _fun41267
                    }
                case 296:
                    var0 = var19;
                case 299:
                    var25 = var19;
                    if (var0) {
                        _fun41267_ip = 324;
                        continue _fun41267
                    }
                case 305:
                    var27 = var24.id;
                    var0 = var12.id;
                    if (!(var27 === var0)) {
                        _fun41267_ip = 321;
                        continue _fun41267
                    }
                case 319:
                    var19 = true;
                case 321:
                    var25 = var19;
                case 324:
                    var27 = var21.bind(var14)();
                    var0 = var27.done;
                    var19 = var25;
                    var20 = var26;
                    var18 = var27;
                    var6 = var20;
                    var5 = var19;
                    var4 = var24;
                    if (!var0) {
                        _fun41267_ip = 209;
                        continue _fun41267
                    }
                case 357:
                    var18 = var11.bind(var14)();
                    var0 = var18.done;
                    var7 = var18;
                    if (!var0) {
                        _fun41267_ip = 130;
                        continue _fun41267
                    }
                case 375:
                    var0 = new Array(3);
                    var0[0] = var3;
                    var0[1] = var2;
                    var0[2] = var1;
                    return var0;
            }
        };
        var0.value = var5;
        var1[17] = var0;
        var0 = {};
        var5 = '_initializeAllChannelsById';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var4
            _fun41268: for (var _fun41268_ip = 0;;) switch (_fun41268_ip) {
                case 0:
                    var0 = this;
                    var2 = var0.allChannelsById;
                    var1 = null;
                    if (!(var1 == var2)) {
                        _fun41268_ip = 127;
                        continue _fun41268
                    }
                case 15:
                    var1 = {};
                    var0.allChannelsById = var1;
                    var2 = _closure1_slot66;
                    var1 = var0.getSortedCategories;
                    var1 = var1.bind(var0)();
                    var4 = undefined;
                    var3 = var2.bind(var4)(var1);
                    var2 = var3.bind(var4)();
                    var1 = var2.done;
                    if (var1) {
                        _fun41268_ip = 127;
                        continue _fun41268
                    }
                case 59:
                    var9 = var2.value;
                    var7 = var9.channels;
                    for (var1 in var7)
                        case 78: {
                            case 87: var12 = var1;
                            var11 = var0.allChannelsById;
                            var10 = var9.channels;
                            var10 = var10[var12];
                            var11[var12] = var10;
                            _fun41268_ip = 78;
                            continue _fun41268;
                        }
                case 112:
                    var5 = var3.bind(var4)();
                    var1 = var5.done;
                    var2 = var5;
                    if (!var1) {
                        _fun41268_ip = 59;
                        continue _fun41268
                    }
                case 127:
                    var0 = var0.allChannelsById;
                    return var0;
            }
        };
        var0.value = var5;
        var1[18] = var0;
        var0 = {};
        var5 = 'getChannels';
        var0.key = var5;
        var5 = function(arg0) { // Original name: value, environment: var4
            _fun41269: for (var _fun41269_ip = 0;;) switch (_fun41269_ip) {
                case 0:
                    var2 = this;
                    var0 = new Array(0);
                    var1 = var2._initializeAllChannelsById;
                    var6 = var1.bind(var2)();
                    var2 = _closure1_slot66;
                    var5 = undefined;
                    var1 = arg0;
                    var4 = var2.bind(var5)(var1);
                    var2 = var4.bind(var5)();
                    var1 = var2.done;
                    var3 = null;
                    if (var1) {
                        _fun41269_ip = 90;
                        continue _fun41269
                    }
                case 48:
                    var1 = var2.value;
                    var7 = var6[var1];
                    if (!(var3 != var7)) {
                        _fun41269_ip = 75;
                        continue _fun41269
                    }
                case 61:
                    var7 = var0.push;
                    var1 = var6[var1];
                    var1 = var7.bind(var0)(var1);
                case 75:
                    var7 = var4.bind(var5)();
                    var1 = var7.done;
                    var2 = var7;
                    if (!var1) {
                        _fun41269_ip = 48;
                        continue _fun41269
                    }
                case 90:
                    return var0;
            }
        };
        var0.value = var5;
        var1[19] = var0;
        var0 = {};
        var5 = 'getChannel';
        var0.key = var5;
        var5 = function(arg0) { // Original name: value, environment: var4
            _fun41270: for (var _fun41270_ip = 0;;) switch (_fun41270_ip) {
                case 0:
                    var1 = this;
                    var0 = var1._initializeAllChannelsById;
                    var1 = var0.bind(var1)();
                    var0 = arg0;
                    var1 = var1[var0];
                    var0 = null;
                    var2 = var0 != var1;
                    if (!var2) {
                        _fun41270_ip = 32;
                        continue _fun41270
                    }
                case 29:
                    var0 = var1;
                case 32:
                    return var0;
            }
        };
        var0.value = var5;
        var1[20] = var0;
        var0 = {};
        var5 = 'updateSubtitles';
        var0.key = var5;
        var5 = function(arg0) { // Original name: value, environment: var4
            _fun41271: for (var _fun41271_ip = 0;;) switch (_fun41271_ip) {
                case 0:
                    var5 = arg0;
                    var2 = this;
                    var7 = new Array(0);
                    var9 = null;
                    if (!(var9 == var5)) {
                        _fun41271_ip = 97;
                        continue _fun41271
                    }
                case 18:
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var1 = 33;
                    var1 = var4[var1];
                    var4 = undefined;
                    var3 = var3.bind(var4)(var1);
                    var1 = var2.getSortedCategories;
                    var1 = var1.bind(var2)();
                    var4 = var3.bind(var4)(var1);
                    var3 = var4.map;
                    var1 = function(arg0) { // Environment: var0
                        var0 = global;
                        var2 = var0.Object;
                        var1 = var2.values;
                        var0 = arg0;
                        var0 = var0.channels;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var3 = var3.bind(var4)(var1);
                    var1 = var3.flatten;
                    var3 = var1.bind(var3)();
                    var1 = var3.value;
                    var4 = var1.bind(var3)();
                    _fun41271_ip = 299;
                    continue _fun41271;
                case 97:
                    var3 = _closure1_slot25;
                    var1 = var3.getChannel;
                    var1 = var1.bind(var3)(var5);
                    var4 = var7;
                    if (!(var9 != var1)) {
                        _fun41271_ip = 299;
                        continue _fun41271
                    }
                case 124:
                    var6 = var1.id;
                    var3 = var2.favoritesCategory;
                    var3 = var3.channels;
                    var3 = var6 in var3;
                    if (var3) {
                        _fun41271_ip = 267;
                        continue _fun41271
                    }
                case 148:
                    var6 = var1.id;
                    var3 = var2.recentsCategory;
                    var3 = var3.channels;
                    var3 = var6 in var3;
                    if (var3) {
                        _fun41271_ip = 233;
                        continue _fun41271
                    }
                case 172:
                    var3 = var2.getCategory;
                    var3 = var3.bind(var2)(var1);
                    var6 = var9 != var3;
                    if (!var6) {
                        _fun41271_ip = 204;
                        continue _fun41271
                    }
                case 190:
                    var8 = var3.channels;
                    var8 = var8[var5];
                    var6 = var9 != var8;
                case 204:
                    var4 = var7;
                    if (!var6) {
                        _fun41271_ip = 299;
                        continue _fun41271
                    }
                case 210:
                    var3 = var3.channels;
                    var5 = var3[var5];
                    var3 = new Array(1);
                    var3[0] = var5;
                    var4 = var3;
                    _fun41271_ip = 299;
                    continue _fun41271;
                case 233:
                    var3 = var2.recentsCategory;
                    var5 = var3.channels;
                    var3 = var1.id;
                    var5 = var5[var3];
                    var3 = new Array(1);
                    var3[0] = var5;
                    var4 = var3;
                    _fun41271_ip = 299;
                    continue _fun41271;
                case 267:
                    var3 = var2.favoritesCategory;
                    var3 = var3.channels;
                    var1 = var1.id;
                    var3 = var3[var1];
                    var1 = new Array(1);
                    var1[0] = var3;
                    var4 = var1;
                case 299:
                    var1 = false;
                    var _closure3_slot0 = var1;
                    var3 = var4.forEach;
                    var1 = function(arg0) { // Environment: var0
                        _fun41273: for (var _fun41273_ip = 0;;) switch (_fun41273_ip) {
                            case 0:
                                var1 = arg0;
                                var0 = var1.updateSubtitle;
                                var0 = var0.bind(var1)();
                                if (!var0) {
                                    _fun41273_ip = 25;
                                    continue _fun41273
                                }
                            case 16:
                                var0 = true;
                                _closure3_slot0 = var0;
                            case 25:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var1 = var3.bind(var4)(var1);
                    var1 = _closure3_slot0;
                    if (!var1) {
                        _fun41271_ip = 342;
                        continue _fun41271
                    }
                case 327:
                    var1 = var2.version;
                    var1 = var1 + 1;
                    var2.version = var1;
                case 342:
                    var0 = _closure3_slot0;
                    return var0;
            }
        };
        var0.value = var5;
        var1[21] = var0;
        var0 = {};
        var5 = 'forEachShownChannel';
        var0.key = var5;
        var5 = function(arg0, arg1) { // Original name: value, environment: var4
            _fun41274: for (var _fun41274_ip = 0;;) switch (_fun41274_ip) {
                case 0:
                    var13 = arg0;
                    var12 = arg1;
                    var11 = this;
                    var2 = _closure1_slot66;
                    var0 = var11.getSortedCategories;
                    var1 = var0.bind(var11)();
                    var0 = undefined;
                    var9 = var2.bind(var0)(var1);
                    var2 = var9.bind(var0)();
                    var1 = var2.done;
                    var8 = null;
                    var7 = var2;
                    var6 = undefined;
                    var5 = undefined;
                    var4 = undefined;
                    var3 = undefined;
                    var2 = undefined;
                    if (var1) {
                        _fun41274_ip = 326;
                        continue _fun41274
                    }
                case 63:
                    var20 = var7.value;
                    if (!(var8 != var12)) {
                        _fun41274_ip = 103;
                        continue _fun41274
                    }
                case 72:
                    var1 = var12.ignoreRecents;
                    if (!var1) {
                        _fun41274_ip = 103;
                        continue _fun41274
                    }
                case 81:
                    var1 = var11.recentsCategory;
                    var16 = var4;
                    var15 = var3;
                    var14 = var2;
                    if (!(var20 !== var1)) {
                        _fun41274_ip = 299;
                        continue _fun41274
                    }
                case 103:
                    var17 = _closure1_slot66;
                    var1 = var20.getShownChannelIds;
                    var1 = var1.bind(var20)();
                    var19 = var17.bind(var0)(var1);
                    var21 = var19.bind(var0)();
                    var1 = var21.done;
                    var18 = var21;
                    var17 = var2;
                    var6 = var18;
                    var5 = var19;
                    var16 = var4;
                    var15 = var3;
                    var14 = var17;
                    if (var1) {
                        _fun41274_ip = 299;
                        continue _fun41274
                    }
                case 158:
                    var21 = var18.value;
                    var1 = var20.channels;
                    var1 = var1[var21];
                    var21 = var1.record;
                    var21 = var13.bind(var0)(var21);
                    var21 = _closure1_slot66;
                    var1 = var1.threadIds;
                    var22 = var21.bind(var0)(var1);
                    var23 = var22.bind(var0)();
                    var1 = var23.done;
                    var21 = var23;
                    var23 = var21;
                    if (var1) {
                        _fun41274_ip = 266;
                        continue _fun41274
                    }
                case 217:
                    var25 = var21.value;
                    var24 = _closure1_slot25;
                    var1 = var24.getChannel;
                    var24 = var1.bind(var24)(var25);
                    if (!(var8 != var24)) {
                        _fun41274_ip = 245;
                        continue _fun41274
                    }
                case 240:
                    var1 = var13.bind(var0)(var24);
                case 245:
                    var25 = var22.bind(var0)();
                    var1 = var25.done;
                    var21 = var25;
                    var23 = var21;
                    var17 = var24;
                    if (!var1) {
                        _fun41274_ip = 217;
                        continue _fun41274
                    }
                case 266:
                    var24 = var19.bind(var0)();
                    var1 = var24.done;
                    var16 = var23;
                    var18 = var24;
                    var6 = var18;
                    var5 = var19;
                    var15 = var22;
                    var14 = var17;
                    if (!var1) {
                        _fun41274_ip = 158;
                        continue _fun41274
                    }
                case 299:
                    var17 = var9.bind(var0)();
                    var1 = var17.done;
                    var4 = var16;
                    var3 = var15;
                    var2 = var14;
                    var7 = var17;
                    if (!var1) {
                        _fun41274_ip = 63;
                        continue _fun41274
                    }
                case 326:
                    return var0;
            }
        };
        var0.value = var5;
        var1[22] = var0;
        var0 = {};
        var5 = 'forEachChannel';
        var0.key = var5;
        var4 = function(arg0, arg1) { // Original name: value, environment: var4
            _fun41275: for (var _fun41275_ip = 0;;) switch (_fun41275_ip) {
                case 0:
                    var10 = arg0;
                    var9 = arg1;
                    var8 = this;
                    var2 = _closure1_slot66;
                    var0 = var8.getSortedCategories;
                    var1 = var0.bind(var8)();
                    var0 = undefined;
                    var6 = var2.bind(var0)(var1);
                    var2 = var6.bind(var0)();
                    var1 = var2.done;
                    var5 = null;
                    var4 = var2;
                    var3 = undefined;
                    var2 = undefined;
                    if (var1) {
                        _fun41275_ip = 168;
                        continue _fun41275
                    }
                case 54:
                    var12 = var4.value;
                    if (!(var5 != var9)) {
                        _fun41275_ip = 82;
                        continue _fun41275
                    }
                case 63:
                    var1 = var9.ignoreRecents;
                    if (!var1) {
                        _fun41275_ip = 82;
                        continue _fun41275
                    }
                case 72:
                    var1 = var8.recentsCategory;
                    if (!(var12 !== var1)) {
                        _fun41275_ip = 153;
                        continue _fun41275
                    }
                case 82:
                    var11 = _closure1_slot66;
                    var1 = var12.getChannelRecords;
                    var1 = var1.bind(var12)();
                    var12 = var11.bind(var0)(var1);
                    var13 = var12.bind(var0)();
                    var1 = var13.done;
                    var11 = var13;
                    var3 = var11;
                    var2 = var12;
                    if (var1) {
                        _fun41275_ip = 153;
                        continue _fun41275
                    }
                case 122:
                    var1 = var11.value;
                    var1 = var10.bind(var0)(var1);
                    var13 = var12.bind(var0)();
                    var1 = var13.done;
                    var11 = var13;
                    var3 = var11;
                    var2 = var12;
                    if (!var1) {
                        _fun41275_ip = 122;
                        continue _fun41275
                    }
                case 153:
                    var11 = var6.bind(var0)();
                    var1 = var11.done;
                    var4 = var11;
                    if (!var1) {
                        _fun41275_ip = 54;
                        continue _fun41275
                    }
                case 168:
                    return var0;
            }
        };
        var0.value = var4;
        var1[23] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var5 = var5.bind(var0)();
    var _closure1_slot48 = var5;
    var5 = function() { // Environment: var18
        var3 = _closure1_slot8;
        var2 = function(arg0) { // Original name: BaseChannelListCategory, environment: var4
            var2 = this;
            var3 = _closure1_slot7;
            var1 = _closure2_slot0;
            var0 = undefined;
            var1 = var3.bind(var0)(var2, var1);
            var1 = arg0;
            var2.guild = var1;
            var1 = false;
            var2.isMuted = var1;
            var2.isCollapsed = var1;
            var1 = -1;
            var2.position = var1;
            var1 = {};
            var2.channels = var1;
            var1 = null;
            var2.shownChannelIds = var1;
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'updateChannel';
        var0.key = var1;
        var1 = function(arg0, arg1) { // Original name: value, environment: var4
            _fun41278: for (var _fun41278_ip = 0;;) switch (_fun41278_ip) {
                case 0:
                    var5 = arg0;
                    var2 = this;
                    var1 = var5.id;
                    var0 = var2.channels;
                    var0 = var1 in var0;
                    var1 = !var0;
                    if (!var0) {
                        _fun41278_ip = 60;
                        continue _fun41278
                    }
                case 27:
                    var3 = var2.channels;
                    var0 = var5.id;
                    var4 = var3[var0];
                    var3 = var4.updateChannel;
                    var0 = arg1;
                    var0 = var3.bind(var4)(var5, var0);
                    var1 = !var0;
                case 60:
                    var0 = !var1;
                    if (var1) {
                        _fun41278_ip = 78;
                        continue _fun41278
                    }
                case 66:
                    var1 = var2.invalidate;
                    var1 = var1.bind(var2)();
                    var0 = true;
                case 78:
                    return var0;
            }
        };
        var0.value = var1;
        var1 = new Array(9);
        var1[0] = var0;
        var0 = {};
        var5 = 'invalidate';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var4
            var1 = null;
            var0 = this;
            var0.shownChannelIds = var1;
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'getRows';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var4
            _fun41280: for (var _fun41280_ip = 0;;) switch (_fun41280_ip) {
                case 0:
                    var3 = this;
                    var0 = var3.getShownChannelIds;
                    var2 = var0.bind(var3)();
                    var4 = var2.length;
                    var1 = 0;
                    var0 = var2;
                    if (!(var1 === var4)) {
                        _fun41280_ip = 62;
                        continue _fun41280
                    }
                case 27:
                    var1 = var3.shouldShowEmptyCategory;
                    var1 = var1.bind(var3)();
                    var0 = var2;
                    if (!var1) {
                        _fun41280_ip = 62;
                        continue _fun41280
                    }
                case 45:
                    var1 = new Array(1);
                    var2 = 'placeholder-channel-id';
                    var1[0] = var2;
                    var0 = var1;
                case 62:
                    return var0;
            }
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'shouldShowEmptyCategory';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var4
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 33;
            var1 = var1[var0];
            var0 = undefined;
            var3 = var2.bind(var0)(var1);
            var2 = var3.some;
            var0 = this;
            var1 = var0.channels;
            var0 = function(arg0) { // Environment: var0
                var0 = arg0;
                var1 = var0.renderLevel;
                var0 = _closure1_slot40;
                var0 = var0.WouldShowIfUncollapsed;
                var0 = var1 >= var0;
                return var0;
            };
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var0.value = var5;
        var1[3] = var0;
        var0 = {};
        var5 = 'getShownChannelIds';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var4
            _fun41283: for (var _fun41283_ip = 0;;) switch (_fun41283_ip) {
                case 0:
                    var0 = this;
                    var3 = var0.shownChannelIds;
                    var2 = null;
                    if (!(var2 == var3)) {
                        _fun41283_ip = 123;
                        continue _fun41283
                    }
                case 17:
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 33;
                    var2 = var4[var2];
                    var4 = undefined;
                    var3 = var3.bind(var4)(var2);
                    var2 = var0.channels;
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.values;
                    var4 = var2.bind(var3)();
                    var3 = var4.filter;
                    var2 = function(arg0) { // Environment: var1
                        var0 = arg0;
                        var1 = var0.renderLevel;
                        var0 = _closure1_slot40;
                        var0 = var0.Show;
                        var0 = var1 === var0;
                        return var0;
                    };
                    var4 = var3.bind(var4)(var2);
                    var3 = var4.sortBy;
                    var2 = function(arg0) { // Environment: var1
                        _fun41285: for (var _fun41285_ip = 0;;) switch (_fun41285_ip) {
                            case 0:
                                var0 = arg0;
                                var1 = var0.record;
                                var0 = var1.isGuildVocal;
                                var0 = var0.bind(var1)();
                                var2 = var1.position;
                                if (var0) {
                                    _fun41285_ip = 32;
                                    continue _fun41285
                                }
                            case 27:
                                var0 = var2;
                                _fun41285_ip = 42;
                                continue _fun41285;
                            case 32:
                                var1 = 10000;
                                var0 = var2 + var1;
                            case 42:
                                return var0;
                        }
                    };
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.map;
                    var1 = function(arg0) { // Environment: var1
                        var0 = arg0;
                        var0 = var0.id;
                        return var0;
                    };
                    var2 = var2.bind(var3)(var1);
                    var1 = var2.value;
                    var1 = var1.bind(var2)();
                    var0.shownChannelIds = var1;
                case 123:
                    var0 = var0.shownChannelIds;
                    return var0;
            }
        };
        var0.value = var5;
        var1[4] = var0;
        var0 = {};
        var5 = 'getShownChannelAndThreadIds';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var4
            var1 = this;
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var0 = 33;
            var0 = var3[var0];
            var3 = undefined;
            var2 = var2.bind(var3)(var0);
            var0 = var1.channels;
            var2 = var2.bind(var3)(var0);
            var0 = var2.values;
            var3 = var0.bind(var2)();
            var2 = var3.flatMap;
            var0 = function(arg0) { // Environment: var0
                var0 = arg0;
                var0 = var0.threadIds;
                return var0;
            };
            var2 = var2.bind(var3)(var0);
            var0 = var2.value;
            var2 = var0.bind(var2)();
            var0 = var1.getShownChannelIds;
            var1 = var0.bind(var1)();
            var0 = var1.concat;
            var0 = var0.bind(var1)(var2);
            return var0;
        };
        var0.value = var5;
        var1[5] = var0;
        var0 = {};
        var5 = 'isEmpty';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var4
            var1 = this;
            var0 = var1.getShownChannelIds;
            var0 = var0.bind(var1)();
            var1 = var0.length;
            var0 = 0;
            var0 = var0 === var1;
            return var0;
        };
        var0.value = var5;
        var1[6] = var0;
        var0 = {};
        var5 = 'getChannelRecords';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var4
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 33;
            var1 = var3[var1];
            var3 = undefined;
            var2 = var2.bind(var3)(var1);
            var1 = this;
            var1 = var1.channels;
            var2 = var2.bind(var3)(var1);
            var1 = var2.values;
            var3 = var1.bind(var2)();
            var2 = var3.filter;
            var1 = function(arg0) { // Environment: var0
                var0 = arg0;
                var1 = var0.renderLevel;
                var0 = _closure1_slot40;
                var0 = var0.CannotShow;
                var0 = var1 > var0;
                return var0;
            };
            var2 = var2.bind(var3)(var1);
            var1 = var2.map;
            var0 = function(arg0) { // Environment: var0
                var0 = arg0;
                var0 = var0.record;
                return var0;
            };
            var1 = var1.bind(var2)(var0);
            var0 = var1.value;
            var0 = var0.bind(var1)();
            return var0;
        };
        var0.value = var5;
        var1[7] = var0;
        var0 = {};
        var5 = 'getFirstVoiceChannel';
        var0.key = var5;
        var4 = function(arg0) { // Original name: value, environment: var4
            _fun41293: for (var _fun41293_ip = 0;;) switch (_fun41293_ip) {
                case 0:
                    var6 = arg0;
                    var0 = this;
                    var2 = _closure1_slot66;
                    var1 = var0.getShownChannelIds;
                    var1 = var1.bind(var0)();
                    var5 = undefined;
                    var4 = var2.bind(var5)(var1);
                    var2 = var4.bind(var5)();
                    var1 = var2.done;
                    var3 = var2;
                    if (var1) {
                        _fun41293_ip = 155;
                        continue _fun41293
                    }
                case 45:
                    var1 = var3.value;
                    if (!var6) {
                        _fun41293_ip = 82;
                        continue _fun41293
                    }
                case 53:
                    var2 = var0.channels;
                    var2 = var2[var1];
                    var7 = var2.record;
                    var2 = var7.isGuildStageVoice;
                    var2 = var2.bind(var7)();
                    if (var2) {
                        _fun41293_ip = 143;
                        continue _fun41293
                    }
                case 82:
                    if (var6) {
                        _fun41293_ip = 126;
                        continue _fun41293
                    }
                case 85:
                    var2 = var0.channels;
                    var2 = var2[var1];
                    var7 = var2.record;
                    var2 = var7.isGuildVocal;
                    var2 = var2.bind(var7)();
                    if (!var2) {
                        _fun41293_ip = 126;
                        continue _fun41293
                    }
                case 114:
                    var2 = var0.channels;
                    var2 = var2[var1];
                    return var2;
                case 126:
                    var7 = var4.bind(var5)();
                    var2 = var7.done;
                    var3 = var7;
                    if (var2) {
                        _fun41293_ip = 155;
                        continue _fun41293
                    }
                case 141:
                    _fun41293_ip = 45;
                    continue _fun41293;
                case 143:
                    var0 = var0.channels;
                    var0 = var0[var1];
                    return var0;
                case 155:
                    var0 = null;
                    return var0;
            }
        };
        var0.value = var4;
        var1[8] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var19 = var5.bind(var0)();
    var5 = function(arg0) { // Environment: var18
        var2 = function(arg0, arg1, arg2) { // Original name: ChannelListCategoryNoParent, environment: var0
            var6 = this;
            var0 = arg2;
            var _closure3_slot0 = var0;
            var0 = _closure1_slot7;
            var5 = _closure2_slot0;
            var4 = undefined;
            var0 = var0.bind(var4)(var6, var5);
            var3 = _closure1_slot64;
            var0 = new Array(1);
            var7 = arg0;
            var0[0] = var7;
            var0 = var3.bind(var4)(var6, var5, var0);
            var _closure3_slot1 = var0;
            var3 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 33;
            var2 = var5[var2];
            var3 = var3.bind(var4)(var2);
            var2 = arg1;
            var4 = var3.bind(var4)(var2);
            var3 = var4.map;
            var2 = function(arg0) { // Environment: var1
                var4 = _closure1_slot57;
                var7 = _closure3_slot1;
                var5 = _closure3_slot0;
                var0 = var4.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var4
                    }
                });
                var6 = arg0;
                var8 = var1;
                var0 = new var8[var4](var7, var6, var5, var4);
                var0 = var0 instanceof Object ? var0 : var1;
                return var0;
            };
            var3 = var3.bind(var4)(var2);
            var2 = var3.keyBy;
            var1 = function(arg0) { // Environment: var1
                var0 = arg0;
                var0 = var0.id;
                return var0;
            };
            var2 = var2.bind(var3)(var1);
            var1 = var2.value;
            var1 = var1.bind(var2)();
            var0.channels = var1;
            return var0;
        };
        var _closure2_slot0 = var2;
        var4 = _closure1_slot6;
        var1 = undefined;
        var3 = arg0;
        var3 = var4.bind(var1)(var2, var3);
        var0 = _closure1_slot8;
        var0 = var0.bind(var1)(var2);
        return var0;
    };
    var5 = var5.bind(var0)(var19);
    var _closure1_slot49 = var5;
    var5 = function(arg0) { // Environment: var18
        var3 = function(arg0, arg1, arg2, arg3) { // Original name: ChannelListCategoryWithParent, environment: var0
            _fun41299: for (var _fun41299_ip = 0;;) switch (_fun41299_ip) {
                case 0:
                    var2 = arg0;
                    var1 = arg1;
                    var6 = arg3;
                    var8 = this;
                    var0 = _closure1_slot7;
                    var7 = _closure2_slot0;
                    var4 = undefined;
                    var0 = var0.bind(var4)(var8, var7);
                    var3 = _closure1_slot64;
                    var0 = new Array(1);
                    var0[0] = var2;
                    var0 = var3.bind(var4)(var8, var7, var0);
                    var0.record = var1;
                    var3 = var1.id;
                    var0.id = var3;
                    var7 = var2.collapsedCategoryIds;
                    var3 = var1.id;
                    var7 = var7[var3];
                    var3 = true;
                    var3 = var3 === var7;
                    var0.isCollapsed = var3;
                    var3 = var2.mutedChannelIds;
                    var2 = var3.has;
                    var1 = var1.id;
                    var1 = var2.bind(var3)(var1);
                    var0.isMuted = var1;
                    var1 = {};
                    var0.channels = var1;
                    var2 = _closure1_slot66;
                    var1 = arg2;
                    var3 = var2.bind(var4)(var1);
                    var2 = var3.bind(var4)();
                    var1 = var2.done;
                    if (var1) {
                        _fun41299_ip = 224;
                        continue _fun41299
                    }
                case 156:
                    var10 = var2.value;
                    var8 = var0.channels;
                    var7 = var10.id;
                    var1 = _closure1_slot57;
                    var9 = var1.prototype;
                    var9 = Object.create(var9, {
                        constructor: {
                            value: var1
                        }
                    });
                    var14 = var9;
                    var13 = var0;
                    var12 = var10;
                    var11 = var6;
                    var1 = new var14[var1](var13, var12, var11, var10);
                    var1 = var1 instanceof Object ? var1 : var9;
                    var8[var7] = var1;
                    var7 = var3.bind(var4)();
                    var1 = var7.done;
                    var2 = var7;
                    if (!var1) {
                        _fun41299_ip = 156;
                        continue _fun41299
                    }
                case 224:
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var5 = _closure1_slot6;
        var2 = undefined;
        var4 = arg0;
        var4 = var5.bind(var2)(var3, var4);
        var1 = _closure1_slot8;
        var4 = {};
        var5 = 'shouldShowEmptyCategory';
        var4.key = var5;
        var0 = function() { // Original name: value, environment: var0
            _fun41300: for (var _fun41300_ip = 0;;) switch (_fun41300_ip) {
                case 0:
                    var3 = this;
                    var6 = _closure1_slot63;
                    var12 = _closure2_slot0;
                    var5 = undefined;
                    var11 = 'shouldShowEmptyCategory';
                    var9 = 3;
                    var13 = undefined;
                    var10 = var3;
                    var1 = var13[var6](var12, var11, var10, var9, var8);
                    var0 = new Array(0);
                    var0 = var1.bind(var5)(var0);
                    var1 = !var0;
                    var0 = !var1;
                    if (!var1) {
                        _fun41300_ip = 220;
                        continue _fun41300
                    }
                case 58:
                    var7 = _closure1_slot28;
                    var6 = var7.can;
                    var1 = _closure1_slot39;
                    var4 = var1.MANAGE_CHANNELS;
                    var1 = var3.record;
                    var1 = var6.bind(var7)(var4, var1);
                    if (!var1) {
                        _fun41300_ip = 125;
                        continue _fun41300
                    }
                case 93:
                    var8 = _closure1_slot28;
                    var7 = var8.can;
                    var4 = _closure1_slot39;
                    var6 = var4.VIEW_CHANNEL;
                    var4 = var3.record;
                    var1 = var7.bind(var8)(var6, var4);
                case 125:
                    if (!var1) {
                        _fun41300_ip = 165;
                        continue _fun41300
                    }
                case 128:
                    var4 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var2 = 33;
                    var2 = var6[var2];
                    var5 = var4.bind(var5)(var2);
                    var4 = var5.isEmpty;
                    var2 = var3.channels;
                    var1 = var4.bind(var5)(var2);
                case 165:
                    var1 = !var1;
                    if (var1) {
                        _fun41300_ip = 217;
                        continue _fun41300
                    }
                case 171:
                    var2 = var3.guild;
                    var2 = var2.optInEnabled;
                    if (!var2) {
                        _fun41300_ip = 214;
                        continue _fun41300
                    }
                case 185:
                    var4 = var3.guild;
                    var5 = var4.optedInChannels;
                    var4 = var5.has;
                    var3 = var3.id;
                    var3 = var4.bind(var5)(var3);
                    var2 = !var3;
                case 214:
                    var1 = var2;
                case 217:
                    var0 = !var1;
                case 220:
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(1);
        var0[0] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var5 = var5.bind(var0)(var19);
    var _closure1_slot50 = var5;
    var5 = function(arg0) { // Environment: var18
        var3 = function(arg0, arg1) { // Original name: ChannelListFavoritesCategory, environment: var5
            _fun41302: for (var _fun41302_ip = 0;;) switch (_fun41302_ip) {
                case 0:
                    var2 = arg0;
                    var4 = arg1;
                    var7 = this;
                    var _closure3_slot0 = var4;
                    var0 = _closure1_slot7;
                    var6 = _closure2_slot0;
                    var10 = undefined;
                    var0 = var0.bind(var10)(var7, var6);
                    var5 = _closure1_slot64;
                    var0 = new Array(1);
                    var0[0] = var2;
                    var0 = var5.bind(var10)(var7, var6, var0);
                    var _closure3_slot1 = var0;
                    var5 = var2.optInEnabled;
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var5 = 33;
                    var5 = var7[var5];
                    var7 = var6.bind(var10)(var5);
                    var8 = _closure1_slot31;
                    var6 = var8.getGuildFavorites;
                    var5 = var2.id;
                    var6 = var6.bind(var8)(var5);
                    var5 = null;
                    if (!(var5 == var6)) {
                        _fun41302_ip = 116;
                        continue _fun41302
                    }
                case 112:
                    var6 = new Array(0);
                case 116:
                    var8 = var7.bind(var10)(var6);
                    var7 = var8.map;
                    var6 = function(arg0) { // Environment: var3
                        var2 = _closure1_slot25;
                        var1 = var2.getChannel;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var8 = var7.bind(var8)(var6);
                    var7 = var8.filter;
                    var9 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var6 = 40;
                    var6 = var11[var6];
                    var6 = var9.bind(var10)(var6);
                    var6 = var6.isNotNullish;
                    var8 = var7.bind(var8)(var6);
                    var7 = var8.map;
                    var6 = function(arg0) { // Environment: var3
                        var4 = _closure1_slot58;
                        var7 = _closure3_slot1;
                        var5 = _closure3_slot0;
                        var0 = var4.prototype;
                        var1 = Object.create(var0, {
                            constructor: {
                                value: var4
                            }
                        });
                        var6 = arg0;
                        var8 = var1;
                        var0 = new var8[var4](var7, var6, var5, var4);
                        var0 = var0 instanceof Object ? var0 : var1;
                        return var0;
                    };
                    var7 = var7.bind(var8)(var6);
                    var6 = var7.keyBy;
                    var3 = function(arg0) { // Environment: var3
                        var0 = arg0;
                        var0 = var0.id;
                        return var0;
                    };
                    var6 = var6.bind(var7)(var3);
                    var3 = var6.value;
                    var3 = var3.bind(var6)();
                    var0.channels = var3;
                    var6 = _closure1_slot15;
                    var3 = var6.getSuggestedChannelId;
                    var2 = var2.id;
                    var3 = var3.bind(var6)(var2);
                    var6 = _closure1_slot25;
                    var2 = var6.getChannel;
                    var6 = var2.bind(var6)(var3);
                    var2 = var5 != var6;
                    if (!var2) {
                        _fun41302_ip = 263;
                        continue _fun41302
                    }
                case 259:
                    var2 = var5 != var3;
                case 263:
                    if (!var2) {
                        _fun41302_ip = 343;
                        continue _fun41302
                    }
                case 266:
                    var2 = var0.channels;
                    var5 = _closure1_slot58;
                    var1 = {};
                    var14 = var1;
                    var13 = var4;
                    var4 = copyDataProperties(var14, var13);
                    var7 = {};
                    var4 = 'activeJoinedRelevantThreads';
                    var1[var4] = var7;
                    var7 = {};
                    var4 = 'activeJoinedUnreadThreads';
                    var1[var4] = var7;
                    var4 = var5.prototype;
                    var4 = Object.create(var4, {
                        constructor: {
                            value: var5
                        }
                    });
                    var15 = var4;
                    var14 = var0;
                    var13 = var6;
                    var12 = var1;
                    var1 = new var15[var5](var14, var13, var12, var11);
                    var1 = var1 instanceof Object ? var1 : var4;
                    var2[var3] = var1;
                case 343:
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot6;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot8;
        var4 = {};
        var0 = 'updateChannel';
        var4.key = var0;
        var0 = function(arg0, arg1) { // Original name: value, environment: var5
            _fun41306: for (var _fun41306_ip = 0;;) switch (_fun41306_ip) {
                case 0:
                    var1 = arg0;
                    var4 = arg1;
                    var2 = this;
                    var3 = var1.id;
                    var0 = var2.channels;
                    var3 = var3 in var0;
                    if (!var3) {
                        _fun41306_ip = 56;
                        continue _fun41306
                    }
                case 27:
                    var7 = _closure1_slot31;
                    var6 = var7.isFavorite;
                    var5 = var1.guild_id;
                    var0 = var1.id;
                    var3 = var6.bind(var7)(var5, var0);
                case 56:
                    var6 = _closure1_slot15;
                    var5 = var6.getSuggestedChannelId;
                    var0 = var1.guild_id;
                    var5 = var5.bind(var6)(var0);
                    var0 = var1.id;
                    var0 = var0 === var5;
                    if (!var0) {
                        _fun41306_ip = 94;
                        continue _fun41306
                    }
                case 91:
                    var0 = !var3;
                case 94:
                    var6 = var4;
                    if (!var0) {
                        _fun41306_ip = 137;
                        continue _fun41306
                    }
                case 100:
                    var0 = {};
                    var9 = var0;
                    var8 = var4;
                    var4 = copyDataProperties(var9, var8);
                    var7 = {};
                    var4 = 'activeJoinedRelevantThreads';
                    var0[var4] = var7;
                    var7 = {};
                    var4 = 'activeJoinedUnreadThreads';
                    var0[var4] = var7;
                    var6 = var0;
                case 137:
                    var4 = var1.id;
                    var0 = var2.channels;
                    var0 = var4 in var0;
                    if (!var0) {
                        _fun41306_ip = 185;
                        continue _fun41306
                    }
                case 155:
                    var4 = var2.channels;
                    var0 = var1.id;
                    var4 = var4[var0];
                    var0 = var4.updateChannel;
                    var0 = var0.bind(var4)(var1, var6);
                    if (var0) {
                        _fun41306_ip = 256;
                        continue _fun41306
                    }
                case 185:
                    var4 = var1.id;
                    var0 = var2.channels;
                    var4 = var4 in var0;
                    var0 = !var4;
                    if (!var4) {
                        _fun41306_ip = 215;
                        continue _fun41306
                    }
                case 206:
                    var4 = var1.id;
                    var0 = var4 === var5;
                case 215:
                    if (var0) {
                        _fun41306_ip = 221;
                        continue _fun41306
                    }
                case 218:
                    var0 = var3;
                case 221:
                    var0 = !var0;
                    if (!var0) {
                        _fun41306_ip = 254;
                        continue _fun41306
                    }
                case 227:
                    var3 = var2.channels;
                    var1 = var1.id;
                    var1 = delete var3[var1];
                    var1 = var2.invalidate;
                    var1 = var1.bind(var2)();
                    var0 = true;
                case 254:
                    _fun41306_ip = 268;
                    continue _fun41306;
                case 256:
                    var1 = var2.invalidate;
                    var1 = var1.bind(var2)();
                    var0 = true;
                case 268:
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(2);
        var0[0] = var4;
        var4 = {};
        var6 = 'getFirstVoiceChannel';
        var4.key = var6;
        var5 = function() { // Original name: value, environment: var5
            var0 = null;
            return var0;
        };
        var4.value = var5;
        var0[1] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var5 = var5.bind(var0)(var19);
    var _closure1_slot51 = var5;
    var20 = function(arg0) { // Environment: var18
        var3 = function(arg0, arg1, arg2) { // Original name: ChannelListRecentlyActiveCategory, environment: var5
            _fun41309: for (var _fun41309_ip = 0;;) switch (_fun41309_ip) {
                case 0:
                    var1 = arg0;
                    var3 = arg1;
                    var6 = arg2;
                    var8 = this;
                    var0 = _closure1_slot7;
                    var2 = _closure2_slot0;
                    var4 = undefined;
                    var0 = var0.bind(var4)(var8, var2);
                    var7 = _closure1_slot64;
                    var0 = new Array(1);
                    var0[0] = var1;
                    var0 = var7.bind(var4)(var8, var2, var0);
                    var7 = false;
                    var0.enabled = var7;
                    var8 = _closure1_slot16;
                    var7 = var8.isCollapsed;
                    var1 = var1.id;
                    var1 = var7.bind(var8)(var1);
                    var0.isCollapsed = var1;
                    var1 = global;
                    var8 = var1.Object;
                    var7 = var8.keys;
                    var7 = var7.bind(var8)(var3);
                    var7 = var7.length;
                    var2 = var2.MIN_READABLE_CHANNELS;
                    var2 = var7 >= var2;
                    var0.enabled = var2;
                    var2 = var0.enabled;
                    if (!var2) {
                        _fun41309_ip = 268;
                        continue _fun41309
                    }
                case 137:
                    var2 = var1.Object;
                    var1 = var2.values;
                    var3 = var1.bind(var2)(var3);
                    var1 = var3.length;
                    var2 = 0;
                    var1 = var2 < var1;
                    if (!var1) {
                        _fun41309_ip = 268;
                        continue _fun41309
                    }
                case 167:
                    var10 = var3[var2];
                    var7 = _closure1_slot21;
                    var1 = var10.type;
                    var1 = var7.bind(var4)(var1);
                    if (!var1) {
                        _fun41309_ip = 205;
                        continue _fun41309
                    }
                case 188:
                    var8 = _closure1_slot22;
                    var7 = var10.type;
                    var7 = var8.bind(var4)(var7);
                    var1 = !var7;
                case 205:
                    if (!var1) {
                        _fun41309_ip = 256;
                        continue _fun41309
                    }
                case 208:
                    var8 = var0.channels;
                    var7 = var10.id;
                    var1 = _closure1_slot60;
                    var9 = var1.prototype;
                    var9 = Object.create(var9, {
                        constructor: {
                            value: var1
                        }
                    });
                    var14 = var9;
                    var13 = var0;
                    var12 = var10;
                    var11 = var6;
                    var1 = new var14[var1](var13, var12, var11, var10);
                    var1 = var1 instanceof Object ? var1 : var9;
                    var8[var7] = var1;
                case 256:
                    var2 = var2 + 1;
                    var1 = var3.length;
                    if (var2 < var1) {
                        _fun41309_ip = 167;
                        continue _fun41309
                    }
                case 268:
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot6;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot8;
        var4 = {};
        var0 = 'shouldShowEmptyCategory';
        var4.key = var0;
        var0 = function() { // Original name: value, environment: var5
            _fun41310: for (var _fun41310_ip = 0;;) switch (_fun41310_ip) {
                case 0:
                    var6 = this;
                    var0 = var6.enabled;
                    if (!var0) {
                        _fun41310_ip = 17;
                        continue _fun41310
                    }
                case 11:
                    var0 = var6.isCollapsed;
                case 17:
                    if (!var0) {
                        _fun41310_ip = 63;
                        continue _fun41310
                    }
                case 20:
                    var5 = _closure1_slot63;
                    var10 = _closure2_slot0;
                    var3 = undefined;
                    var9 = 'shouldShowEmptyCategory';
                    var7 = 3;
                    var11 = undefined;
                    var8 = var6;
                    var2 = var11[var5](var10, var9, var8, var7, var6);
                    var1 = new Array(0);
                    var0 = var2.bind(var3)(var1);
                case 63:
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(6);
        var0[0] = var4;
        var4 = {};
        var6 = 'updateAllChannels';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            var1 = this;
            var _closure3_slot0 = var1;
            var2 = arg0;
            var _closure3_slot1 = var2;
            var2 = global;
            var3 = var2.Object;
            var2 = var3.values;
            var1 = var1.channels;
            var3 = var2.bind(var3)(var1);
            var2 = var3.reduce;
            var1 = function(arg0, arg1) { // Environment: var0
                _fun41312: for (var _fun41312_ip = 0;;) switch (_fun41312_ip) {
                    case 0:
                        var1 = arg0;
                        var4 = _closure3_slot0;
                        var3 = var4.updateChannel;
                        var2 = arg1;
                        var2 = var2.record;
                        var0 = _closure3_slot1;
                        var0 = var3.bind(var4)(var2, var0);
                        if (var0) {
                            _fun41312_ip = 41;
                            continue _fun41312
                        }
                    case 38:
                        var0 = var1;
                    case 41:
                        return var0;
                }
            };
            var0 = false;
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'updateChannel';
        var4.key = var6;
        var6 = function(arg0, arg1) { // Original name: value, environment: var5
            _fun41313: for (var _fun41313_ip = 0;;) switch (_fun41313_ip) {
                case 0:
                    var0 = arg0;
                    var5 = arg1;
                    var3 = this;
                    var1 = var3.enabled;
                    if (var1) {
                        _fun41313_ip = 21;
                        continue _fun41313
                    }
                case 17:
                    var1 = false;
                    return var1;
                case 21:
                    var4 = _closure1_slot22;
                    var1 = var0.type;
                    var6 = undefined;
                    var1 = var4.bind(var6)(var1);
                    if (var1) {
                        _fun41313_ip = 213;
                        continue _fun41313
                    }
                case 46:
                    var4 = _closure1_slot21;
                    var1 = var0.type;
                    var1 = var4.bind(var6)(var1);
                    if (var1) {
                        _fun41313_ip = 67;
                        continue _fun41313
                    }
                case 63:
                    var1 = false;
                    return var1;
                case 67:
                    var8 = _closure1_slot63;
                    var12 = _closure2_slot0;
                    var11 = 'updateChannel';
                    var9 = 3;
                    var13 = undefined;
                    var10 = var3;
                    var4 = var13[var8](var12, var11, var10, var9, var8);
                    var1 = new Array(2);
                    var1[0] = var0;
                    var1[1] = var5;
                    var4 = var4.bind(var6)(var1);
                    var6 = var3.channels;
                    var1 = var0.id;
                    var6 = var6[var1];
                    var1 = null;
                    if (!(var1 != var6)) {
                        _fun41313_ip = 151;
                        continue _fun41313
                    }
                case 132:
                    var1 = var3.updateShownChannelIds;
                    var1 = var1.bind(var3)(var6);
                    if (var1) {
                        _fun41313_ip = 149;
                        continue _fun41313
                    }
                case 146:
                    var1 = var4;
                case 149:
                    _fun41313_ip = 211;
                    continue _fun41313;
                case 151:
                    var2 = _closure1_slot60;
                    var4 = var2.prototype;
                    var4 = Object.create(var4, {
                        constructor: {
                            value: var2
                        }
                    });
                    var13 = var4;
                    var12 = var3;
                    var11 = var0;
                    var10 = var5;
                    var2 = new var13[var2](var12, var11, var10, var9);
                    var5 = var2 instanceof Object ? var2 : var4;
                    var4 = var3.channels;
                    var2 = var0.id;
                    var4[var2] = var5;
                    var2 = var3.invalidate;
                    var2 = var2.bind(var3)();
                    var1 = true;
                case 211:
                    return var1;
                case 213:
                    var1 = var3.channels;
                    var0 = var0.parent_id;
                    var2 = var1[var0];
                    var0 = null;
                    var0 = var0 != var2;
                    if (!var0) {
                        _fun41313_ip = 249;
                        continue _fun41313
                    }
                case 238:
                    var1 = var3.updateShownChannelIds;
                    var0 = var1.bind(var3)(var2);
                case 249:
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'getFirstVoiceChannel';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = null;
            return var0;
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'getShownChannelIds';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            _fun41315: for (var _fun41315_ip = 0;;) switch (_fun41315_ip) {
                case 0:
                    var0 = this;
                    var3 = var0.shownChannelIds;
                    var1 = null;
                    if (!(var1 == var3)) {
                        _fun41315_ip = 235;
                        continue _fun41315
                    }
                case 20:
                    var1 = var0.isCollapsed;
                    var4 = _closure1_slot40;
                    if (var1) {
                        _fun41315_ip = 44;
                        continue _fun41315
                    }
                case 36:
                    var1 = var4.WouldShowIfUncollapsed;
                    _fun41315_ip = 50;
                    continue _fun41315;
                case 44:
                    var1 = var4.Show;
                case 50:
                    var _closure3_slot0 = var1;
                    var1 = var0.enabled;
                    if (var1) {
                        _fun41315_ip = 71;
                        continue _fun41315
                    }
                case 62:
                    var1 = new Array(0);
                    _fun41315_ip = 229;
                    continue _fun41315;
                case 71:
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 33;
                    var3 = var5[var3];
                    var5 = undefined;
                    var4 = var4.bind(var5)(var3);
                    var3 = var0.channels;
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.filter;
                    var3 = function(arg0) { // Environment: var2
                        var0 = arg0;
                        var1 = var0.renderLevel;
                        var0 = _closure3_slot0;
                        var0 = var1 >= var0;
                        return var0;
                    };
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.map;
                    var3 = function(arg0) { // Environment: var2
                        var1 = arg0;
                        var2 = var1.id;
                        var0 = new Array(3);
                        var0[0] = var2;
                        var2 = var1.lastMessageTimestamp;
                        var0[1] = var2;
                        var1 = var1.renderLevel;
                        var0[2] = var1;
                        return var0;
                    };
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.filter;
                    var3 = function(arg0) { // Environment: var2
                        _fun41318: for (var _fun41318_ip = 0;;) switch (_fun41318_ip) {
                            case 0:
                                var6 = arg0;
                                var1 = var6[Symbol.iterator];
                                var6 = var1().next;
                                var8 = undefined;
                                var2 = undefined;
                                var3 = undefined;
                                var7 = var6().value;
                                var9 = var1;
                                var9 = var9 === var8;
                                var2 = var9;
                                if (var9) {
                                    _fun41318_ip = 32;
                                    continue _fun41318
                                }
                            case 29:
                                var3 = var7;
                            case 32:
                                var3 = undefined;
                                var7 = var2;
                                if (var7) {
                                    _fun41318_ip = 60;
                                    continue _fun41318
                                }
                            case 40:
                                var7 = var6().value;
                                var9 = var1;
                                var9 = var9 === var8;
                                var2 = var9;
                                if (var9) {
                                    _fun41318_ip = 60;
                                    continue _fun41318
                                }
                            case 57:
                                var3 = var7;
                            case 60:
                                var5 = var3;
                                var3 = undefined;
                                var7 = var2;
                                if (var7) {
                                    _fun41318_ip = 91;
                                    continue _fun41318
                                }
                            case 71:
                                var6 = var6().value;
                                var7 = var1;
                                var7 = var7 === var8;
                                var2 = var7;
                                if (var7) {
                                    _fun41318_ip = 91;
                                    continue _fun41318
                                }
                            case 88:
                                var3 = var6;
                            case 91:
                                var4 = var3;
                                var3 = var2;
                                if (var3) {
                                    _fun41318_ip = 103;
                                    continue _fun41318
                                }
                            case 100:
                                var1.return();
                            case 103:
                                var6 = var4;
                                var4 = _closure1_slot40;
                                var4 = var4.Show;
                                var4 = var6 === var4;
                                var3 = var4;
                                if (var4) {
                                    _fun41318_ip = 185;
                                    continue _fun41318
                                }
                            case 129:
                                var7 = var5;
                                var6 = 0;
                                var6 = var7 > var6;
                                var4 = var6;
                                if (!var6) {
                                    _fun41318_ip = 182;
                                    continue _fun41318
                                }
                            case 144:
                                var6 = global;
                                var7 = var6.Date;
                                var6 = var7.now;
                                var6 = var6.bind(var7)();
                                var6 = var6 - var5;
                                var5 = _closure2_slot0;
                                var5 = var5.MAX_TIMESTAMP_DELTA;
                                var4 = var6 < var5;
                            case 182:
                                var3 = var4;
                            case 185:
                                return var3;
                            case 187:
                                CatchBlockStart(arg_register = 0);
                                if (var2) {
                                    _fun41318_ip = 195;
                                    continue _fun41318
                                }
                            case 192:
                                var1.return();
                            case 195:
                                throw var0;
                        }
                    };
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.sortBy;
                    var3 = function(arg0) { // Environment: var2
                        _fun41319: for (var _fun41319_ip = 0;;) switch (_fun41319_ip) {
                            case 0:
                                var6 = arg0;
                                var1 = var6[Symbol.iterator];
                                var6 = var1().next;
                                var7 = undefined;
                                var2 = undefined;
                                var5 = undefined;
                                var8 = var6().value;
                                var9 = var1;
                                var9 = var9 === var7;
                                var2 = var9;
                                if (var9) {
                                    _fun41319_ip = 32;
                                    continue _fun41319
                                }
                            case 29:
                                var5 = var8;
                            case 32:
                                var5 = undefined;
                                var8 = var2;
                                if (var8) {
                                    _fun41319_ip = 60;
                                    continue _fun41319
                                }
                            case 40:
                                var8 = var6().value;
                                var9 = var1;
                                var9 = var9 === var7;
                                var2 = var9;
                                if (var9) {
                                    _fun41319_ip = 60;
                                    continue _fun41319
                                }
                            case 57:
                                var5 = var8;
                            case 60:
                                var4 = var5;
                                var5 = undefined;
                                var8 = var2;
                                if (var8) {
                                    _fun41319_ip = 91;
                                    continue _fun41319
                                }
                            case 71:
                                var6 = var6().value;
                                var8 = var1;
                                var8 = var8 === var7;
                                var2 = var8;
                                if (var8) {
                                    _fun41319_ip = 91;
                                    continue _fun41319
                                }
                            case 88:
                                var5 = var6;
                            case 91:
                                var3 = var5;
                                var5 = var2;
                                if (var5) {
                                    _fun41319_ip = 103;
                                    continue _fun41319
                                }
                            case 100:
                                var1.return();
                            case 103:
                                var8 = var3;
                                var3 = _closure1_slot40;
                                var6 = var3.Show;
                                var3 = 0;
                                if (!(var8 !== var6)) {
                                    _fun41319_ip = 151;
                                    continue _fun41319
                                }
                            case 125:
                                var6 = _closure1_slot0;
                                var8 = _closure1_slot2;
                                var5 = 41;
                                var5 = var8[var5];
                                var5 = var6.bind(var7)(var5);
                                var3 = var5.DISCORD_EPOCH;
                            case 151:
                                var3 = var4 - var3;
                                var3 = -var3;
                                return var3;
                            case 160:
                                CatchBlockStart(arg_register = 0);
                                if (var2) {
                                    _fun41319_ip = 168;
                                    continue _fun41319
                                }
                            case 165:
                                var1.return();
                            case 168:
                                throw var0;
                        }
                    };
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.take;
                    var3 = _closure2_slot0;
                    var3 = var3.MAX_RECENT_CHANNELS;
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.sortBy;
                    var3 = function(arg0) { // Environment: var2
                        _fun41320: for (var _fun41320_ip = 0;;) switch (_fun41320_ip) {
                            case 0:
                                var5 = arg0;
                                var1 = var5[Symbol.iterator];
                                var5 = var1().next;
                                var7 = undefined;
                                var2 = undefined;
                                var4 = undefined;
                                var6 = var5().value;
                                var8 = var1;
                                var8 = var8 === var7;
                                var2 = var8;
                                if (var8) {
                                    _fun41320_ip = 32;
                                    continue _fun41320
                                }
                            case 29:
                                var4 = var6;
                            case 32:
                                var4 = undefined;
                                var6 = var2;
                                if (var6) {
                                    _fun41320_ip = 60;
                                    continue _fun41320
                                }
                            case 40:
                                var5 = var5().value;
                                var6 = var1;
                                var6 = var6 === var7;
                                var2 = var6;
                                if (var6) {
                                    _fun41320_ip = 60;
                                    continue _fun41320
                                }
                            case 57:
                                var4 = var5;
                            case 60:
                                var3 = var4;
                                var4 = var2;
                                if (var4) {
                                    _fun41320_ip = 72;
                                    continue _fun41320
                                }
                            case 69:
                                var1.return();
                            case 72:
                                var3 = -var3;
                                return var3;
                            case 77:
                                CatchBlockStart(arg_register = 0);
                                if (var2) {
                                    _fun41320_ip = 85;
                                    continue _fun41320
                                }
                            case 82:
                                var1.return();
                            case 85:
                                throw var0;
                        }
                    };
                    var4 = var4.bind(var5)(var3);
                    var3 = var4.map;
                    var2 = function(arg0) { // Environment: var2
                        _fun41321: for (var _fun41321_ip = 0;;) switch (_fun41321_ip) {
                            case 0:
                                var0 = arg0;
                                var1 = var0[Symbol.iterator];
                                var0 = var1().next;
                                var3 = var0().value;
                                var2 = var1;
                                var0 = undefined;
                                var2 = var2 === var0;
                                if (var2) {
                                    _fun41321_ip = 25;
                                    continue _fun41321
                                }
                            case 22:
                                var0 = var3;
                            case 25:
                                if (var2) {
                                    _fun41321_ip = 31;
                                    continue _fun41321
                                }
                            case 28:
                                var1.return();
                            case 31:
                                return var0;
                        }
                    };
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.value;
                    var1 = var2.bind(var3)();
                case 229:
                    var0.shownChannelIds = var1;
                case 235:
                    var0 = var0.shownChannelIds;
                    return var0;
            }
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'updateShownChannelIds';
        var4.key = var6;
        var5 = function(arg0) { // Original name: value, environment: var5
            _fun41322: for (var _fun41322_ip = 0;;) switch (_fun41322_ip) {
                case 0:
                    var0 = arg0;
                    var1 = this;
                    var3 = var1.isCollapsed;
                    var2 = _closure1_slot40;
                    if (var3) {
                        _fun41322_ip = 30;
                        continue _fun41322
                    }
                case 22:
                    var4 = var2.WouldShowIfUncollapsed;
                    _fun41322_ip = 36;
                    continue _fun41322;
                case 30:
                    var4 = var2.Show;
                case 36:
                    var3 = var1.shownChannelIds;
                    var2 = null;
                    if (!(var2 != var3)) {
                        _fun41322_ip = 257;
                        continue _fun41322
                    }
                case 51:
                    var3 = var0.renderLevel;
                    if (!(!(var3 < var4))) {
                        _fun41322_ip = 257;
                        continue _fun41322
                    }
                case 64:
                    var3 = var0.lastMessageTimestamp;
                    var6 = var1.channels;
                    var5 = var1.shownChannelIds;
                    var4 = 0;
                    var5 = var5[var4];
                    var5 = var6[var5];
                    var6 = var2 == var5;
                    var2 = undefined;
                    if (var6) {
                        _fun41322_ip = 107;
                        continue _fun41322
                    }
                case 101:
                    var2 = var5.lastMessageTimestamp;
                case 107:
                    if (!(!(var3 > var2))) {
                        _fun41322_ip = 115;
                        continue _fun41322
                    }
                case 111:
                    var2 = false;
                    return var2;
                case 115:
                    var5 = var1.shownChannelIds;
                    var3 = var5.indexOf;
                    var2 = var0.id;
                    var6 = var3.bind(var5)(var2);
                    var2 = -1;
                    if (!(var6 > var2)) {
                        _fun41322_ip = 168;
                        continue _fun41322
                    }
                case 147:
                    var5 = var1.shownChannelIds;
                    var3 = var5.splice;
                    var2 = 1;
                    var2 = var3.bind(var5)(var6, var2);
                case 168:
                    var3 = var1.shownChannelIds;
                    var2 = var3.splice;
                    var0 = var0.id;
                    var0 = var2.bind(var3)(var4, var4, var0);
                    var0 = var1.shownChannelIds;
                    var3 = var0.length;
                    var2 = _closure2_slot0;
                    var2 = var2.MAX_RECENT_CHANNELS;
                    if (!(var3 > var2)) {
                        _fun41322_ip = 253;
                        continue _fun41322
                    }
                case 220:
                    var3 = var1.shownChannelIds;
                    var2 = var3.slice;
                    var0 = _closure2_slot0;
                    var0 = var0.MAX_RECENT_CHANNELS;
                    var0 = var2.bind(var3)(var4, var0);
                    var1.shownChannelIds = var0;
                case 253:
                    var0 = true;
                    return var0;
                case 257:
                    var0 = false;
                    return var0;
            }
        };
        var4.value = var5;
        var0[5] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var20 = var20.bind(var0)(var19);
    var _closure1_slot52 = var20;
    var20.MIN_READABLE_CHANNELS = var22;
    var20.MAX_RECENT_CHANNELS = var4;
    var4 = 604800000;
    var20.MAX_TIMESTAMP_DELTA = var4;
    var4 = function(arg0) { // Environment: var18
        var3 = function(arg0, arg1, arg2) { // Original name: ChannelListRecentsCategory, environment: var5
            _fun41324: for (var _fun41324_ip = 0;;) switch (_fun41324_ip) {
                case 0:
                    var5 = arg0;
                    var7 = this;
                    var0 = arg2;
                    var _closure3_slot0 = var0;
                    var0 = _closure1_slot7;
                    var6 = _closure2_slot0;
                    var4 = undefined;
                    var0 = var0.bind(var4)(var7, var6);
                    var3 = _closure1_slot64;
                    var0 = new Array(1);
                    var0[0] = var5;
                    var3 = var3.bind(var4)(var7, var6, var0);
                    var _closure3_slot1 = var3;
                    var0 = var5.optInEnabled;
                    if (var0) {
                        _fun41324_ip = 83;
                        continue _fun41324
                    }
                case 69:
                    var0 = _closure1_slot4;
                    var0 = var0.bind(var4)(var3);
                    _fun41324_ip = 211;
                    continue _fun41324;
                case 83:
                    var7 = _closure1_slot14;
                    var6 = var7.isFullServerPreview;
                    var5 = var5.id;
                    var5 = var6.bind(var7)(var5);
                    if (var5) {
                        _fun41324_ip = 199;
                        continue _fun41324
                    }
                case 106:
                    var5 = false;
                    var3.isCollapsed = var5;
                    var3.isMuted = var5;
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var5 = 33;
                    var5 = var7[var5];
                    var6 = var6.bind(var4)(var5);
                    var5 = arg1;
                    var7 = var6.bind(var4)(var5);
                    var6 = var7.map;
                    var5 = function(arg0) { // Environment: var1
                        var4 = _closure1_slot59;
                        var7 = _closure3_slot1;
                        var5 = _closure3_slot0;
                        var0 = var4.prototype;
                        var1 = Object.create(var0, {
                            constructor: {
                                value: var4
                            }
                        });
                        var6 = arg0;
                        var8 = var1;
                        var0 = new var8[var4](var7, var6, var5, var4);
                        var0 = var0 instanceof Object ? var0 : var1;
                        return var0;
                    };
                    var6 = var6.bind(var7)(var5);
                    var5 = var6.keyBy;
                    var1 = function(arg0) { // Environment: var1
                        var0 = arg0;
                        var0 = var0.id;
                        return var0;
                    };
                    var5 = var5.bind(var6)(var1);
                    var1 = var5.value;
                    var1 = var1.bind(var5)();
                    var3.channels = var1;
                    var1 = var3;
                    _fun41324_ip = 208;
                    continue _fun41324;
                case 199:
                    var2 = _closure1_slot4;
                    var1 = var2.bind(var4)(var3);
                case 208:
                    var0 = var1;
                case 211:
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot6;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot8;
        var4 = {};
        var0 = 'updateAllChannels';
        var4.key = var0;
        var0 = function(arg0) { // Original name: value, environment: var5
            var1 = this;
            var _closure3_slot0 = var1;
            var2 = arg0;
            var _closure3_slot1 = var2;
            var2 = false;
            var _closure3_slot2 = var2;
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var2 = 41;
            var3 = var3[var2];
            var2 = undefined;
            var3 = var4.bind(var2)(var3);
            var2 = var3.keys;
            var1 = var1.channels;
            var3 = var2.bind(var3)(var1);
            var2 = var3.forEach;
            var1 = function(arg0) { // Environment: var0
                _fun41328: for (var _fun41328_ip = 0;;) switch (_fun41328_ip) {
                    case 0:
                        var4 = _closure3_slot0;
                        var3 = var4.updateChannel;
                        var2 = var4.channels;
                        var0 = arg0;
                        var0 = var2[var0];
                        var2 = var0.record;
                        var0 = _closure3_slot1;
                        var0 = var3.bind(var4)(var2, var0);
                        if (!var0) {
                            _fun41328_ip = 51;
                            continue _fun41328
                        }
                    case 45:
                        var0 = true;
                        _closure3_slot2 = var0;
                    case 51:
                        var0 = undefined;
                        return var0;
                }
            };
            var1 = var2.bind(var3)(var1);
            var0 = _closure3_slot2;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(4);
        var0[0] = var4;
        var4 = {};
        var6 = 'updateChannel';
        var4.key = var6;
        var6 = function(arg0, arg1) { // Original name: value, environment: var5
            _fun41329: for (var _fun41329_ip = 0;;) switch (_fun41329_ip) {
                case 0:
                    var6 = arg0;
                    var5 = arg1;
                    var1 = this;
                    var7 = _closure1_slot63;
                    var12 = _closure2_slot0;
                    var8 = undefined;
                    var11 = 'updateChannel';
                    var9 = 3;
                    var13 = undefined;
                    var10 = var1;
                    var3 = var13[var7](var12, var11, var10, var9, var8);
                    var2 = new Array(2);
                    var2[0] = var6;
                    var2[1] = var5;
                    var2 = var3.bind(var8)(var2);
                    var3 = var1.guild;
                    var3 = var3.optInEnabled;
                    if (!var3) {
                        _fun41329_ip = 112;
                        continue _fun41329
                    }
                case 72:
                    var4 = var1.channels;
                    var3 = var6.id;
                    var4 = var4[var3];
                    var7 = _closure1_slot72;
                    var3 = var1.guild;
                    var3 = var7.bind(var8)(var3, var6, var5);
                    if (!var3) {
                        _fun41329_ip = 112;
                        continue _fun41329
                    }
                case 106:
                    var3 = null;
                    if (!(var3 != var4)) {
                        _fun41329_ip = 114;
                        continue _fun41329
                    }
                case 112:
                    return var2;
                case 114:
                    var3 = var1.channels;
                    var2 = var6.id;
                    var0 = _closure1_slot59;
                    var4 = var0.prototype;
                    var4 = Object.create(var4, {
                        constructor: {
                            value: var0
                        }
                    });
                    var13 = var4;
                    var12 = var1;
                    var11 = var6;
                    var10 = var5;
                    var0 = new var13[var0](var12, var11, var10, var9);
                    var0 = var0 instanceof Object ? var0 : var4;
                    var3[var2] = var0;
                    var0 = var1.invalidate;
                    var0 = var0.bind(var1)();
                    var0 = true;
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getFirstVoiceChannel';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = null;
            return var0;
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'getShownChannelIds';
        var4.key = var6;
        var5 = function() { // Original name: value, environment: var5
            _fun41331: for (var _fun41331_ip = 0;;) switch (_fun41331_ip) {
                case 0:
                    var0 = this;
                    var3 = var0.shownChannelIds;
                    var2 = null;
                    if (!(var2 == var3)) {
                        _fun41331_ip = 270;
                        continue _fun41331
                    }
                case 20:
                    var3 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var2 = 33;
                    var5 = var7[var2];
                    var4 = undefined;
                    var6 = var3.bind(var4)(var5);
                    var5 = var0.channels;
                    var6 = var6.bind(var4)(var5);
                    var5 = var6.values;
                    var8 = var5.bind(var6)();
                    var6 = var8.filter;
                    var5 = function(arg0) { // Environment: var1
                        _fun41332: for (var _fun41332_ip = 0;;) switch (_fun41332_ip) {
                            case 0:
                                var2 = arg0;
                                var3 = var2.renderLevel;
                                var0 = _closure1_slot40;
                                var0 = var0.Show;
                                var0 = var3 === var0;
                                if (var0) {
                                    _fun41332_ip = 49;
                                    continue _fun41332
                                }
                            case 29:
                                var2 = var2.renderLevel;
                                var1 = _closure1_slot40;
                                var1 = var1.WouldShowIfUncollapsed;
                                var0 = var2 === var1;
                            case 49:
                                return var0;
                        }
                    };
                    var8 = var6.bind(var8)(var5);
                    var6 = var8.sortBy;
                    var5 = function(arg0) { // Environment: var1
                        var0 = arg0;
                        var0 = var0.record;
                        var0 = var0.position;
                        return var0;
                    };
                    var9 = var6.bind(var8)(var5);
                    var6 = var9.take;
                    var5 = 5;
                    var6 = var6.bind(var9)(var5);
                    var5 = var6.value;
                    var10 = var5.bind(var6)();
                    var6 = var8.filter;
                    var5 = function(arg0) { // Environment: var1
                        var0 = arg0;
                        var1 = var0.renderLevel;
                        var0 = _closure1_slot40;
                        var0 = var0.Show;
                        var0 = var1 === var0;
                        return var0;
                    };
                    var6 = var6.bind(var8)(var5);
                    var5 = var6.value;
                    var12 = var5.bind(var6)();
                    var5 = global;
                    var9 = var5.Set;
                    var5 = new Array(0);
                    var13 = var5;
                    var11 = 0;
                    var11 = arraySpread(var13, var12, var11);
                    var13 = var5;
                    var12 = var10;
                    var8 = arraySpread(var13, var12, var11);
                    var8 = var9.prototype;
                    var8 = Object.create(var8, {
                        constructor: {
                            value: var9
                        }
                    });
                    var14 = var8;
                    var13 = var5;
                    var5 = new var14[var9](var13, var12);
                    var12 = var5 instanceof Object ? var5 : var8;
                    var2 = var7[var2];
                    var3 = var3.bind(var4)(var2);
                    var2 = new Array(0);
                    var13 = var2;
                    var11 = 0;
                    var5 = arraySpread(var13, var12, var11);
                    var4 = var3.bind(var4)(var2);
                    var3 = var4.sortBy;
                    var2 = function(arg0) { // Environment: var1
                        var0 = arg0;
                        var0 = var0.record;
                        var0 = var0.position;
                        return var0;
                    };
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.map;
                    var1 = function(arg0) { // Environment: var1
                        var0 = arg0;
                        var0 = var0.id;
                        return var0;
                    };
                    var2 = var2.bind(var3)(var1);
                    var1 = var2.value;
                    var1 = var1.bind(var2)();
                    var0.shownChannelIds = var1;
                case 270:
                    var0 = var0.shownChannelIds;
                    return var0;
            }
        };
        var4.value = var5;
        var0[3] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var4 = var4.bind(var0)(var19);
    var _closure1_slot53 = var4;
    var4 = function(arg0) { // Environment: var18
        var3 = function(arg0, arg1, arg2, arg3) { // Original name: ChannelListVoiceChannelsCategory, environment: var5
            _fun41338: for (var _fun41338_ip = 0;;) switch (_fun41338_ip) {
                case 0:
                    var6 = arg0;
                    var4 = arg2;
                    var8 = this;
                    var0 = arg3;
                    var _closure3_slot0 = var0;
                    var0 = _closure1_slot7;
                    var7 = _closure2_slot0;
                    var5 = undefined;
                    var0 = var0.bind(var5)(var8, var7);
                    var1 = _closure1_slot64;
                    var0 = new Array(1);
                    var0[0] = var6;
                    var1 = var1.bind(var5)(var8, var7, var0);
                    var _closure3_slot1 = var1;
                    var1.categoriesById = var4;
                    var0 = null;
                    var1.hiddenChannelIds = var0;
                    var0 = var6.optInEnabled;
                    if (var0) {
                        _fun41338_ip = 97;
                        continue _fun41338
                    }
                case 86:
                    var0 = _closure1_slot4;
                    var0 = var0.bind(var5)(var1);
                    _fun41338_ip = 214;
                    continue _fun41338;
                case 97:
                    var8 = _closure1_slot34;
                    var7 = var8.isVoiceCategoryCollapsed;
                    var6 = var6.id;
                    var6 = var7.bind(var8)(var6);
                    var1.isCollapsed = var6;
                    var6 = false;
                    var1.isMuted = var6;
                    var1.categoriesById = var4;
                    var4 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var3 = 33;
                    var3 = var6[var3];
                    var4 = var4.bind(var5)(var3);
                    var3 = arg1;
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.map;
                    var3 = function(arg0) { // Environment: var2
                        var4 = _closure1_slot61;
                        var7 = _closure3_slot1;
                        var5 = _closure3_slot0;
                        var0 = var4.prototype;
                        var1 = Object.create(var0, {
                            constructor: {
                                value: var4
                            }
                        });
                        var6 = arg0;
                        var8 = var1;
                        var0 = new var8[var4](var7, var6, var5, var4);
                        var0 = var0 instanceof Object ? var0 : var1;
                        return var0;
                    };
                    var4 = var4.bind(var5)(var3);
                    var3 = var4.keyBy;
                    var2 = function(arg0) { // Environment: var2
                        var0 = arg0;
                        var0 = var0.id;
                        return var0;
                    };
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.value;
                    var2 = var2.bind(var3)();
                    var1.channels = var2;
                    var0 = var1;
                case 214:
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot6;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot8;
        var4 = {};
        var0 = 'invalidate';
        var4.key = var0;
        var0 = function() { // Original name: value, environment: var5
            var2 = this;
            var5 = _closure1_slot63;
            var9 = _closure2_slot0;
            var0 = undefined;
            var8 = 'invalidate';
            var6 = 3;
            var10 = undefined;
            var7 = var2;
            var3 = var10[var5](var9, var8, var7, var6, var5);
            var1 = new Array(0);
            var1 = var3.bind(var0)(var1);
            var1 = null;
            var2.hiddenChannelIds = var1;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(5);
        var0[0] = var4;
        var4 = {};
        var6 = 'getHiddenChannelIds';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            _fun41342: for (var _fun41342_ip = 0;;) switch (_fun41342_ip) {
                case 0:
                    var0 = this;
                    var2 = var0.guild;
                    var2 = var2.optInEnabled;
                    if (var2) {
                        _fun41342_ip = 25;
                        continue _fun41342
                    }
                case 19:
                    var2 = new Array(0);
                    return var2;
                case 25:
                    var3 = var0.hiddenChannelIds;
                    var2 = null;
                    if (!(var2 == var3)) {
                        _fun41342_ip = 137;
                        continue _fun41342
                    }
                case 37:
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 33;
                    var2 = var4[var2];
                    var4 = undefined;
                    var3 = var3.bind(var4)(var2);
                    var2 = var0.channels;
                    var4 = var3.bind(var4)(var2);
                    var3 = var4.filter;
                    var2 = function(arg0) { // Environment: var1
                        var0 = arg0;
                        var1 = var0.renderLevel;
                        var0 = _closure1_slot40;
                        var0 = var0.WouldShowIfUncollapsed;
                        var0 = var1 === var0;
                        return var0;
                    };
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.value;
                    var3 = var2.bind(var3)();
                    var4 = var3.every;
                    var2 = function(arg0) { // Environment: var1
                        var0 = arg0;
                        var1 = var0.record;
                        var0 = var1.isCategory;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    var2 = var4.bind(var3)(var2);
                    if (var2) {
                        _fun41342_ip = 145;
                        continue _fun41342
                    }
                case 116:
                    var2 = var3.map;
                    var1 = function(arg0) { // Environment: var1
                        var0 = arg0;
                        var0 = var0.id;
                        return var0;
                    };
                    var1 = var2.bind(var3)(var1);
                    var0.hiddenChannelIds = var1;
                case 137:
                    var1 = var0.hiddenChannelIds;
                    return var1;
                case 145:
                    var1 = new Array(0);
                    var0.hiddenChannelIds = var1;
                    var0 = var0.hiddenChannelIds;
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getRows';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            _fun41346: for (var _fun41346_ip = 0;;) switch (_fun41346_ip) {
                case 0:
                    var4 = this;
                    var0 = var4.guild;
                    var0 = var0.optInEnabled;
                    if (var0) {
                        _fun41346_ip = 23;
                        continue _fun41346
                    }
                case 17:
                    var0 = new Array(0);
                    return var0;
                case 23:
                    var0 = var4.getShownChannelIds;
                    var3 = var0.bind(var4)();
                    var1 = var3.length;
                    var2 = 0;
                    var0 = var3;
                    if (!(var2 === var1)) {
                        _fun41346_ip = 86;
                        continue _fun41346
                    }
                case 47:
                    var1 = var4.getHiddenChannelIds;
                    var1 = var1.bind(var4)();
                    var1 = var1.length;
                    var0 = var3;
                    if (!(var1 > var2)) {
                        _fun41346_ip = 86;
                        continue _fun41346
                    }
                case 69:
                    var1 = new Array(1);
                    var2 = 'placeholder-channel-id';
                    var1[0] = var2;
                    var0 = var1;
                case 86:
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'getShownChannelIds';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            _fun41347: for (var _fun41347_ip = 0;;) switch (_fun41347_ip) {
                case 0:
                    var0 = this;
                    var _closure3_slot0 = var0;
                    var2 = var0.guild;
                    var2 = var2.optInEnabled;
                    if (var2) {
                        _fun41347_ip = 29;
                        continue _fun41347
                    }
                case 23:
                    var2 = new Array(0);
                    return var2;
                case 29:
                    var2 = var0.shownChannelIds;
                    var8 = null;
                    if (!(var8 == var2)) {
                        _fun41347_ip = 356;
                        continue _fun41347
                    }
                case 44:
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 33;
                    var2 = var4[var2];
                    var6 = undefined;
                    var3 = var3.bind(var6)(var2);
                    var2 = var0.channels;
                    var4 = var3.bind(var6)(var2);
                    var3 = var4.filter;
                    var2 = function(arg0) { // Environment: var1
                        var0 = arg0;
                        var1 = var0.renderLevel;
                        var0 = _closure1_slot40;
                        var0 = var0.Show;
                        var0 = var1 === var0;
                        return var0;
                    };
                    var4 = var3.bind(var4)(var2);
                    var3 = var4.orderBy;
                    var2 = new Array(2);
                    var5 = function(arg0) { // Environment: var1
                        _fun41349: for (var _fun41349_ip = 0;;) switch (_fun41349_ip) {
                            case 0:
                                var1 = arg0;
                                var0 = _closure3_slot0;
                                var5 = var0.categoriesById;
                                var0 = var1.record;
                                var2 = var0.type;
                                var0 = _closure1_slot36;
                                var0 = var0.GUILD_CATEGORY;
                                if (!(var2 !== var0)) {
                                    _fun41349_ip = 119;
                                    continue _fun41349
                                }
                            case 44:
                                var0 = var1.record;
                                var0 = var0.parent_id;
                                var3 = null;
                                var2 = var3 != var0;
                                var4 = -1;
                                var0 = var4;
                                if (!var2) {
                                    _fun41349_ip = 117;
                                    continue _fun41349
                                }
                            case 74:
                                var2 = var1.record;
                                var2 = var2.parent_id;
                                var5 = var5[var2];
                                var6 = var3 == var5;
                                var2 = undefined;
                                if (var6) {
                                    _fun41349_ip = 104;
                                    continue _fun41349
                                }
                            case 99:
                                var2 = var5.position;
                            case 104:
                                var3 = var3 != var2;
                                var0 = var4;
                                if (!var3) {
                                    _fun41349_ip = 117;
                                    continue _fun41349
                                }
                            case 114:
                                var0 = var2;
                            case 117:
                                _fun41349_ip = 130;
                                continue _fun41349;
                            case 119:
                                var1 = var1.record;
                                var0 = var1.position;
                            case 130:
                                return var0;
                        }
                    };
                    var2[0] = var5;
                    var1 = function(arg0) { // Environment: var1
                        _fun41350: for (var _fun41350_ip = 0;;) switch (_fun41350_ip) {
                            case 0:
                                var1 = arg0;
                                var0 = var1.record;
                                var3 = var0.type;
                                var0 = _closure1_slot36;
                                var2 = var0.GUILD_CATEGORY;
                                var0 = -1;
                                if (!(var3 !== var2)) {
                                    _fun41350_ip = 48;
                                    continue _fun41350
                                }
                            case 37:
                                var1 = var1.record;
                                var0 = var1.position;
                            case 48:
                                return var0;
                        }
                    };
                    var2[1] = var1;
                    var1 = ['asc', 'asc'];
                    var2 = var3.bind(var4)(var2, var1);
                    var1 = var2.value;
                    var5 = var1.bind(var2)();
                    var1 = new Array(0);
                    var0.shownChannelIds = var1;
                    var1 = var5.length;
                    var4 = 0;
                    var1 = var4 < var1;
                    var3 = 1;
                    var2 = undefined;
                    if (!var1) {
                        _fun41347_ip = 356;
                        continue _fun41347
                    }
                case 180:
                    var1 = var5[var4];
                    var9 = var5.length;
                    var9 = var9 - var3;
                    var9 = var4 < var9;
                    if (!var9) {
                        _fun41347_ip = 225;
                        continue _fun41347
                    }
                case 200:
                    var10 = var1.record;
                    var11 = var10.type;
                    var10 = _closure1_slot36;
                    var10 = var10.GUILD_CATEGORY;
                    var9 = var11 === var10;
                case 225:
                    if (!var9) {
                        _fun41347_ip = 273;
                        continue _fun41347
                    }
                case 228:
                    var10 = var4 + var3;
                    var10 = var5[var10];
                    var11 = var8 == var10;
                    var12 = undefined;
                    if (var11) {
                        _fun41347_ip = 256;
                        continue _fun41347
                    }
                case 245:
                    var11 = var10.record;
                    var12 = var11.type;
                case 256:
                    var11 = _closure1_slot36;
                    var11 = var11.GUILD_CATEGORY;
                    var9 = var12 === var11;
                    var2 = var10;
                case 273:
                    if (var9) {
                        _fun41347_ip = 341;
                        continue _fun41347
                    }
                case 276:
                    var9 = var5.length;
                    var9 = var9 - var3;
                    var9 = var4 === var9;
                    if (!var9) {
                        _fun41347_ip = 317;
                        continue _fun41347
                    }
                case 292:
                    var10 = var1.record;
                    var11 = var10.type;
                    var10 = _closure1_slot36;
                    var10 = var10.GUILD_CATEGORY;
                    var9 = var11 === var10;
                case 317:
                    if (var9) {
                        _fun41347_ip = 341;
                        continue _fun41347
                    }
                case 320:
                    var10 = var0.shownChannelIds;
                    var9 = var10.push;
                    var1 = var1.id;
                    var1 = var9.bind(var10)(var1);
                case 341:
                    var4 = var4 + 1;
                    var1 = var5.length;
                    if (var4 < var1) {
                        _fun41347_ip = 180;
                        continue _fun41347
                    }
                case 356:
                    var0 = var0.shownChannelIds;
                    return var0;
            }
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'getFirstVoiceChannel';
        var4.key = var6;
        var5 = function() { // Original name: value, environment: var5
            var0 = null;
            return var0;
        };
        var4.value = var5;
        var0[4] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var4 = var4.bind(var0)(var19);
    var _closure1_slot54 = var4;
    var19 = function() { // Environment: var18
        var3 = _closure1_slot8;
        var2 = function(arg0) { // Original name: ChannelListChannelNoticeSection, environment: var4
            var2 = this;
            var3 = _closure1_slot7;
            var1 = _closure2_slot0;
            var0 = undefined;
            var1 = var3.bind(var0)(var2, var1);
            var1 = arg0;
            var2.rows = var1;
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'isEmpty';
        var0.key = var1;
        var1 = function() { // Original name: value, environment: var4
            var0 = this;
            var0 = var0.rows;
            var1 = var0.length;
            var0 = 0;
            var0 = var0 === var1;
            return var0;
        };
        var0.value = var1;
        var1 = new Array(3);
        var1[0] = var0;
        var0 = {};
        var5 = 'getRows';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var4
            var0 = this;
            var0 = var0.rows;
            return var0;
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'getRow';
        var0.key = var5;
        var4 = function(arg0) { // Original name: value, environment: var4
            var0 = this;
            var1 = var0.rows;
            var0 = arg0;
            var0 = var1[var0];
            return var0;
        };
        var0.value = var4;
        var1[2] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var19 = var19.bind(var0)();
    var _closure1_slot55 = var19;
    var19 = function() { // Environment: var18
        var3 = _closure1_slot8;
        var2 = function(arg0, arg1) { // Original name: ChannelListGuildActionSection, environment: var4
            _fun41358: for (var _fun41358_ip = 0;;) switch (_fun41358_ip) {
                case 0:
                    var6 = arg0;
                    var2 = this;
                    var4 = _closure1_slot7;
                    var3 = _closure2_slot0;
                    var0 = undefined;
                    var3 = var4.bind(var0)(var2, var3);
                    var5 = var6.map;
                    var4 = global;
                    var3 = var4.String;
                    var3 = var5.bind(var6)(var3);
                    var2.guildActionRows = var3;
                    var3 = arg1;
                    if (!var3) {
                        _fun41358_ip = 95;
                        continue _fun41358
                    }
                case 58:
                    var3 = var2.guildActionRows;
                    var2 = var3.push;
                    var4 = var4.String;
                    var1 = _closure1_slot35;
                    var1 = var1.GUILD_DIRECTORY;
                    var1 = var4.bind(var0)(var1);
                    var1 = var2.bind(var3)(var1);
                case 95:
                    return var0;
            }
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'isEmpty';
        var0.key = var1;
        var1 = function() { // Original name: value, environment: var4
            var0 = this;
            var0 = var0.guildActionRows;
            var1 = var0.length;
            var0 = 0;
            var0 = var0 === var1;
            return var0;
        };
        var0.value = var1;
        var1 = new Array(3);
        var1[0] = var0;
        var0 = {};
        var5 = 'getRows';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var4
            var0 = this;
            var0 = var0.guildActionRows;
            return var0;
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'getRow';
        var0.key = var5;
        var4 = function(arg0) { // Original name: value, environment: var4
            var0 = this;
            var1 = var0.guildActionRows;
            var0 = arg0;
            var0 = var1[var0];
            return var0;
        };
        var0.value = var4;
        var1[2] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var19 = var19.bind(var0)();
    var _closure1_slot56 = var19;
    var19 = function() { // Environment: var18
        var3 = _closure1_slot8;
        var2 = function(arg0, arg1, arg2) { // Original name: BaseChannelListChannel, environment: var4
            _fun41363: for (var _fun41363_ip = 0;;) switch (_fun41363_ip) {
                case 0:
                    var3 = arg1;
                    var2 = this;
                    var4 = _closure1_slot7;
                    var1 = _closure2_slot0;
                    var0 = undefined;
                    var1 = var4.bind(var0)(var2, var1);
                    var1 = arg0;
                    var2.category = var1;
                    var2.record = var3;
                    var1 = -1;
                    var2.position = var1;
                    var1 = new Array(0);
                    var2.threadIds = var1;
                    var1 = 0;
                    var2.threadCount = var1;
                    var1 = null;
                    var2.subtitle = var1;
                    var1 = _closure1_slot40;
                    var4 = var1.CannotShow;
                    var2.renderLevel = var4;
                    var3 = var3.id;
                    var2.id = var3;
                    var4 = var2.computeState;
                    var3 = arg2;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.renderLevel;
                    var4 = var4.threadIds;
                    var2.renderLevel = var3;
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var5 = 33;
                    var5 = var7[var5];
                    var6 = var6.bind(var0)(var5);
                    var5 = var6.size;
                    var5 = var5.bind(var6)(var4);
                    var2.threadCount = var5;
                    var2.threadIds = var4;
                    var1 = var1.Show;
                    if (!(var3 === var1)) {
                        _fun41363_ip = 208;
                        continue _fun41363
                    }
                case 192:
                    var1 = var2.computeSubtitle;
                    var1 = var1.bind(var2)();
                    var2.subtitle = var1;
                case 208:
                    return var0;
            }
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'isMuted';
        var0.key = var1;
        var1 = function() { // Original name: get, environment: var4
            var0 = this;
            var1 = var0.category;
            var1 = var1.guild;
            var2 = var1.mutedChannelIds;
            var1 = var2.has;
            var0 = var0.id;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0.get = var1;
        var1 = new Array(7);
        var1[0] = var0;
        var0 = {};
        var5 = 'isCollapsed';
        var0.key = var5;
        var5 = function() { // Original name: get, environment: var4
            var2 = _closure1_slot26;
            var1 = var2.isCollapsed;
            var0 = this;
            var0 = var0.id;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0.get = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'isFirstVoiceChannel';
        var0.key = var5;
        var5 = function() { // Original name: get, environment: var4
            var1 = this;
            var2 = var1.category;
            var0 = var2.getFirstVoiceChannel;
            var0 = var0.bind(var2)();
            var0 = var0 === var1;
            return var0;
        };
        var0.get = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'lastMessageTimestamp';
        var0.key = var5;
        var5 = function() { // Original name: get, environment: var4
            var4 = this;
            var0 = global;
            var2 = var0.Math;
            var1 = var2.max;
            var6 = _closure1_slot29;
            var5 = var6.lastMessageTimestamp;
            var0 = var4.id;
            var5 = var5.bind(var6)(var0);
            var0 = new Array(1);
            var0[0] = var5;
            var5 = var4.threadIds;
            var4 = var5.map;
            var3 = _closure1_slot29;
            var3 = var3.lastMessageTimestamp;
            var8 = var4.bind(var5)(var3);
            var7 = 1;
            var9 = var0;
            var3 = arraySpread(var9, var8, var7);
            var9 = var1;
            var8 = var0;
            var7 = var2;
            var0 = apply(var9, var8, var7);
            return var0;
        };
        var0.get = var5;
        var1[3] = var0;
        var0 = {};
        var5 = 'updateChannel';
        var0.key = var5;
        var5 = function(arg0, arg1) { // Original name: value, environment: var4
            _fun41368: for (var _fun41368_ip = 0;;) switch (_fun41368_ip) {
                case 0:
                    var1 = arg0;
                    var3 = this;
                    var0 = null;
                    var2 = var0 != var1;
                    if (!var2) {
                        _fun41368_ip = 25;
                        continue _fun41368
                    }
                case 15:
                    var0 = var3.record;
                    var2 = var1 !== var0;
                case 25:
                    var0 = false;
                    if (!var2) {
                        _fun41368_ip = 38;
                        continue _fun41368
                    }
                case 30:
                    var3.record = var1;
                    var0 = true;
                case 38:
                    var2 = var3.computeState;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    var4 = var1.renderLevel;
                    var2 = var3.renderLevel;
                    var2 = var4 === var2;
                    if (!var2) {
                        _fun41368_ip = 120;
                        continue _fun41368
                    }
                case 71:
                    var6 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var4 = 33;
                    var5 = var5[var4];
                    var4 = undefined;
                    var7 = var6.bind(var4)(var5);
                    var6 = var7.isEqual;
                    var5 = var1.threadIds;
                    var4 = var3.threadIds;
                    var2 = var6.bind(var7)(var5, var4);
                case 120:
                    if (var2) {
                        _fun41368_ip = 196;
                        continue _fun41368
                    }
                case 123:
                    var2 = var1.renderLevel;
                    var3.renderLevel = var2;
                    var2 = var1.threadIds;
                    var3.threadIds = var2;
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 33;
                    var4 = var4[var2];
                    var2 = undefined;
                    var4 = var5.bind(var2)(var4);
                    var2 = var4.size;
                    var1 = var1.threadIds;
                    var1 = var2.bind(var4)(var1);
                    var3.threadCount = var1;
                    var0 = true;
                case 196:
                    var2 = var3.renderLevel;
                    var1 = _closure1_slot40;
                    var1 = var1.Show;
                    var1 = var2 === var1;
                    if (!var1) {
                        _fun41368_ip = 232;
                        continue _fun41368
                    }
                case 222:
                    var2 = var3.updateSubtitle;
                    var1 = var2.bind(var3)();
                case 232:
                    if (!var1) {
                        _fun41368_ip = 237;
                        continue _fun41368
                    }
                case 235:
                    var0 = true;
                case 237:
                    return var0;
            }
        };
        var0.value = var5;
        var1[4] = var0;
        var0 = {};
        var5 = 'updateSubtitle';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var4
            _fun41369: for (var _fun41369_ip = 0;;) switch (_fun41369_ip) {
                case 0:
                    var2 = this;
                    var0 = var2.computeSubtitle;
                    var1 = var0.bind(var2)();
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var0 = 33;
                    var3 = var3[var0];
                    var0 = undefined;
                    var4 = var4.bind(var0)(var3);
                    var3 = var4.isEqual;
                    var0 = var2.subtitle;
                    var0 = var3.bind(var4)(var0, var1);
                    var0 = !var0;
                    if (!var0) {
                        _fun41369_ip = 70;
                        continue _fun41369
                    }
                case 62:
                    var2.subtitle = var1;
                    var0 = true;
                case 70:
                    return var0;
            }
        };
        var0.value = var5;
        var1[5] = var0;
        var0 = {};
        var5 = 'computeSubtitle';
        var0.key = var5;
        var4 = function() { // Original name: value, environment: var4
            _fun41370: for (var _fun41370_ip = 0;;) switch (_fun41370_ip) {
                case 0:
                    var0 = this;
                    var4 = _closure1_slot68;
                    var3 = var0.record;
                    var2 = var0.isCollapsed;
                    if (var2) {
                        _fun41370_ip = 37;
                        continue _fun41370
                    }
                case 25:
                    var1 = var0.category;
                    var2 = var1.isCollapsed;
                case 37:
                    var0 = var0.category;
                    var0 = var0.guild;
                    var1 = var0.optInEnabled;
                    var0 = undefined;
                    var0 = var4.bind(var0)(var3, var2, var1);
                    return var0;
            }
        };
        var0.value = var4;
        var1[6] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var22 = var19.bind(var0)();
    var19 = function(arg0) { // Environment: var18
        var3 = function() { // Original name: ChannelListChannelImpl, environment: var0
            var4 = this;
            var3 = undefined;
            var0 = undefined;
            var5 = _closure1_slot7;
            var2 = _closure2_slot0;
            var5 = var5.bind(var3)(var4, var2);
            var1 = _closure1_slot64;
            var0 = arguments;
            var0 = var1.bind(var3)(var4, var2, var0);
            return var0;
        };
        var _closure2_slot0 = var3;
        var5 = _closure1_slot6;
        var2 = undefined;
        var4 = arg0;
        var4 = var5.bind(var2)(var3, var4);
        var1 = _closure1_slot8;
        var4 = {};
        var5 = 'computeState';
        var4.key = var5;
        var0 = function(arg0) { // Original name: value, environment: var0
            _fun41373: for (var _fun41373_ip = 0;;) switch (_fun41373_ip) {
                case 0:
                    var1 = arg0;
                    var0 = this;
                    var13 = var1.selectedChannel;
                    var12 = var1.selectedVoiceChannelId;
                    var9 = var1.activeJoinedRelevantThreads;
                    var10 = var1.activeJoinedUnreadThreads;
                    var5 = _closure1_slot28;
                    var4 = var5.can;
                    var2 = _closure1_slot39;
                    var3 = var2.VIEW_CHANNEL;
                    var2 = var0.record;
                    var2 = var4.bind(var5)(var3, var2);
                    if (var2) {
                        _fun41373_ip = 174;
                        continue _fun41373
                    }
                case 68:
                    var2 = var0.id;
                    if (!(var2 !== var12)) {
                        _fun41373_ip = 146;
                        continue _fun41373
                    }
                case 77:
                    var5 = _closure1_slot12;
                    var4 = var5.isChannelGatedAndVisible;
                    var2 = var0.record;
                    var3 = var2.guild_id;
                    var2 = var0.record;
                    var2 = var2.id;
                    var2 = var4.bind(var5)(var3, var2);
                    if (var2) {
                        _fun41373_ip = 174;
                        continue _fun41373
                    }
                case 118:
                    var2 = {};
                    var3 = _closure1_slot40;
                    var3 = var3.CannotShow;
                    var2.renderLevel = var3;
                    var3 = new Array(0);
                    var2.threadIds = var3;
                    return var2;
                case 146:
                    var2 = {};
                    var3 = _closure1_slot40;
                    var3 = var3.Show;
                    var2.renderLevel = var3;
                    var3 = new Array(0);
                    var2.threadIds = var3;
                    return var2;
                case 174:
                    var2 = var0.record;
                    var7 = var2.parent_id;
                    var2 = var0.category;
                    var4 = var2.guild;
                    var3 = _closure1_slot70;
                    var2 = var0.record;
                    var6 = undefined;
                    var2 = var3.bind(var6)(var4, var2);
                    if (var2) {
                        _fun41373_ip = 1016;
                        continue _fun41373
                    }
                case 221:
                    var5 = null;
                    var2 = var5 == var13;
                    var3 = undefined;
                    if (var2) {
                        _fun41373_ip = 237;
                        continue _fun41373
                    }
                case 232:
                    var3 = var13.id;
                case 237:
                    var2 = var0.id;
                    var3 = var3 === var2;
                    if (var3) {
                        _fun41373_ip = 258;
                        continue _fun41373
                    }
                case 249:
                    var2 = var0.id;
                    var3 = var12 === var2;
                case 258:
                    var8 = var5 != var13;
                    if (!var8) {
                        _fun41373_ip = 275;
                        continue _fun41373
                    }
                case 265:
                    var2 = var13.isThread;
                    var8 = var2.bind(var13)();
                case 275:
                    if (!var8) {
                        _fun41373_ip = 293;
                        continue _fun41373
                    }
                case 278:
                    var11 = var13.parent_id;
                    var2 = var0.id;
                    var8 = var11 === var2;
                case 293:
                    if (var3) {
                        _fun41373_ip = 334;
                        continue _fun41373
                    }
                case 296:
                    if (var8) {
                        _fun41373_ip = 334;
                        continue _fun41373
                    }
                case 299:
                    var2 = var0.category;
                    var2 = var2.isCollapsed;
                    if (var2) {
                        _fun41373_ip = 323;
                        continue _fun41373
                    }
                case 314:
                    var2 = var0.isMuted;
                    if (!var2) {
                        _fun41373_ip = 334;
                        continue _fun41373
                    }
                case 323:
                    var2 = var0.id;
                    var11 = var10[var2];
                    _fun41373_ip = 343;
                    continue _fun41373;
                case 334:
                    var2 = var0.id;
                    var11 = var9[var2];
                case 343:
                    if (!(var5 == var11)) {
                        _fun41373_ip = 349;
                        continue _fun41373
                    }
                case 347:
                    var11 = {};
                case 349:
                    var10 = _closure1_slot69;
                    var18 = var0.record;
                    var14 = var4.hideMutedChannels;
                    var19 = undefined;
                    var17 = var11;
                    var16 = var13;
                    var15 = var12;
                    var2 = var19[var10](var18, var17, var16, var15, var14, var13);
                    var10 = var0.id;
                    var9 = var4.moderatorReportChannelId;
                    if (!(var10 !== var9)) {
                        _fun41373_ip = 992;
                        continue _fun41373
                    }
                case 398:
                    var9 = var4.optInEnabled;
                    if (!var9) {
                        _fun41373_ip = 449;
                        continue _fun41373
                    }
                case 407:
                    var9 = var4.hideResourceChannels;
                    if (!var9) {
                        _fun41373_ip = 449;
                        continue _fun41373
                    }
                case 416:
                    var11 = var0.record;
                    var10 = var11.hasFlag;
                    var9 = _closure1_slot38;
                    var9 = var9.IS_GUILD_RESOURCE_CHANNEL;
                    var9 = var10.bind(var11)(var9);
                    if (var9) {
                        _fun41373_ip = 957;
                        continue _fun41373
                    }
                case 449:
                    var9 = var4.optInEnabled;
                    if (!var9) {
                        _fun41373_ip = 529;
                        continue _fun41373
                    }
                case 458:
                    var11 = var4.optedInChannels;
                    var10 = var11.has;
                    var9 = var0.id;
                    var9 = var10.bind(var11)(var9);
                    if (var9) {
                        _fun41373_ip = 529;
                        continue _fun41373
                    }
                case 482:
                    if (!(var5 != var7)) {
                        _fun41373_ip = 505;
                        continue _fun41373
                    }
                case 486:
                    var10 = var4.optedInChannels;
                    var9 = var10.has;
                    var9 = var9.bind(var10)(var7);
                    if (var9) {
                        _fun41373_ip = 529;
                        continue _fun41373
                    }
                case 505:
                    var9 = {};
                    var10 = _closure1_slot40;
                    var10 = var10.DoNotShow;
                    var9.renderLevel = var10;
                    var9.threadIds = var2;
                    return var9;
                case 529:
                    if (var3) {
                        _fun41373_ip = 933;
                        continue _fun41373
                    }
                case 535:
                    if (var8) {
                        _fun41373_ip = 933;
                        continue _fun41373
                    }
                case 541:
                    var9 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var8 = 33;
                    var8 = var10[var8];
                    var9 = var9.bind(var6)(var8);
                    var8 = var9.isEmpty;
                    var8 = var8.bind(var9)(var2);
                    if (!var8) {
                        _fun41373_ip = 933;
                        continue _fun41373
                    }
                case 578:
                    var10 = _closure1_slot29;
                    var9 = var10.getMentionCount;
                    var8 = var0.id;
                    var9 = var9.bind(var10)(var8);
                    var8 = 0;
                    if (!(!(var9 > var8))) {
                        _fun41373_ip = 933;
                        continue _fun41373
                    }
                case 607:
                    var8 = var4.hideMutedChannels;
                    if (!var8) {
                        _fun41373_ip = 643;
                        continue _fun41373
                    }
                case 616:
                    var10 = var4.mutedChannelIds;
                    var9 = var10.has;
                    var8 = var0.id;
                    var8 = var9.bind(var10)(var8);
                    if (var8) {
                        _fun41373_ip = 909;
                        continue _fun41373
                    }
                case 643:
                    var8 = var0.category;
                    var8 = var8.isCollapsed;
                    if (!var8) {
                        _fun41373_ip = 837;
                        continue _fun41373
                    }
                case 661:
                    var10 = var4.mutedChannelIds;
                    var9 = var10.has;
                    var8 = var0.id;
                    var8 = var9.bind(var10)(var8);
                    if (var8) {
                        _fun41373_ip = 885;
                        continue _fun41373
                    }
                case 688:
                    if (!(var5 != var7)) {
                        _fun41373_ip = 714;
                        continue _fun41373
                    }
                case 692:
                    var5 = var4.mutedChannelIds;
                    var4 = var5.has;
                    var4 = var4.bind(var5)(var7);
                    if (var4) {
                        _fun41373_ip = 885;
                        continue _fun41373
                    }
                case 714:
                    var5 = var0.record;
                    var4 = var5.isGuildVocal;
                    var4 = var4.bind(var5)();
                    if (var4) {
                        _fun41373_ip = 861;
                        continue _fun41373
                    }
                case 736:
                    var4 = var0.record;
                    var5 = var4.type;
                    var4 = _closure1_slot36;
                    var4 = var4.GUILD_STORE;
                    if (!(var5 !== var4)) {
                        _fun41373_ip = 861;
                        continue _fun41373
                    }
                case 761:
                    var5 = _closure1_slot21;
                    var4 = var0.record;
                    var4 = var4.type;
                    var4 = var5.bind(var6)(var4);
                    if (!var4) {
                        _fun41373_ip = 837;
                        continue _fun41373
                    }
                case 784:
                    var5 = _closure1_slot29;
                    var4 = var5.hasUnread;
                    var0 = var0.record;
                    var0 = var0.id;
                    var0 = var4.bind(var5)(var0);
                    if (var0) {
                        _fun41373_ip = 837;
                        continue _fun41373
                    }
                case 813:
                    var0 = {};
                    var4 = _closure1_slot40;
                    var4 = var4.WouldShowIfUncollapsed;
                    var0.renderLevel = var4;
                    var0.threadIds = var2;
                    return var0;
                case 837:
                    var0 = {};
                    var4 = _closure1_slot40;
                    var4 = var4.Show;
                    var0.renderLevel = var4;
                    var0.threadIds = var2;
                    return var0;
                case 861:
                    var0 = {};
                    var4 = _closure1_slot40;
                    var4 = var4.WouldShowIfUncollapsed;
                    var0.renderLevel = var4;
                    var0.threadIds = var2;
                    return var0;
                case 885:
                    var0 = {};
                    var4 = _closure1_slot40;
                    var4 = var4.WouldShowIfUncollapsed;
                    var0.renderLevel = var4;
                    var0.threadIds = var2;
                    return var0;
                case 909:
                    var0 = {};
                    var4 = _closure1_slot40;
                    var4 = var4.DoNotShow;
                    var0.renderLevel = var4;
                    var0.threadIds = var2;
                    return var0;
                case 933:
                    var0 = {};
                    var4 = _closure1_slot40;
                    var4 = var4.Show;
                    var0.renderLevel = var4;
                    var0.threadIds = var2;
                    return var0;
                case 957:
                    var0 = {};
                    var4 = _closure1_slot40;
                    if (var3) {
                        _fun41373_ip = 974;
                        continue _fun41373
                    }
                case 966:
                    var3 = var4.CannotShow;
                    _fun41373_ip = 980;
                    continue _fun41373;
                case 974:
                    var3 = var4.Show;
                case 980:
                    var0.renderLevel = var3;
                    var0.threadIds = var2;
                    return var0;
                case 992:
                    var0 = {};
                    var3 = _closure1_slot40;
                    var3 = var3.DoNotShow;
                    var0.renderLevel = var3;
                    var0.threadIds = var2;
                    return var0;
                case 1016:
                    var0 = {};
                    var1 = _closure1_slot40;
                    var1 = var1.CannotShow;
                    var0.renderLevel = var1;
                    var1 = new Array(0);
                    var0.threadIds = var1;
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(1);
        var0[0] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var20 = var19.bind(var0)(var22);
    var _closure1_slot57 = var20;
    var19 = function(arg0) { // Environment: var18
        var3 = function() { // Original name: FavoritesChannelListChannel, environment: var0
            var4 = this;
            var3 = undefined;
            var0 = undefined;
            var5 = _closure1_slot7;
            var2 = _closure2_slot0;
            var5 = var5.bind(var3)(var4, var2);
            var1 = _closure1_slot64;
            var0 = arguments;
            var0 = var1.bind(var3)(var4, var2, var0);
            return var0;
        };
        var _closure2_slot0 = var3;
        var5 = _closure1_slot6;
        var2 = undefined;
        var4 = arg0;
        var4 = var5.bind(var2)(var3, var4);
        var1 = _closure1_slot8;
        var4 = {};
        var5 = 'computeState';
        var4.key = var5;
        var0 = function(arg0) { // Original name: value, environment: var0
            _fun41376: for (var _fun41376_ip = 0;;) switch (_fun41376_ip) {
                case 0:
                    var0 = arg0;
                    var2 = this;
                    var8 = var0.selectedChannel;
                    var7 = var0.selectedVoiceChannelId;
                    var3 = var0.activeJoinedRelevantThreads;
                    var6 = _closure1_slot28;
                    var5 = var6.can;
                    var0 = _closure1_slot39;
                    var1 = var0.VIEW_CHANNEL;
                    var0 = var2.record;
                    var0 = var5.bind(var6)(var1, var0);
                    var1 = {};
                    var5 = _closure1_slot40;
                    if (var0) {
                        _fun41376_ip = 93;
                        continue _fun41376
                    }
                case 68:
                    var0 = var5.CannotShow;
                    var1.renderLevel = var0;
                    var0 = new Array(0);
                    var1.threadIds = var0;
                    var0 = var1;
                    _fun41376_ip = 159;
                    continue _fun41376;
                case 93:
                    var5 = var5.Show;
                    var1.renderLevel = var5;
                    var6 = _closure1_slot69;
                    var5 = var2.record;
                    var2 = var2.id;
                    var4 = var3[var2];
                    var2 = null;
                    if (!(var2 == var4)) {
                        _fun41376_ip = 131;
                        continue _fun41376
                    }
                case 129:
                    var4 = {};
                case 131:
                    var14 = undefined;
                    var9 = false;
                    var13 = var5;
                    var12 = var4;
                    var11 = var8;
                    var10 = var7;
                    var2 = var14[var6](var13, var12, var11, var10, var9, var8);
                    var1.threadIds = var2;
                    var0 = var1;
                case 159:
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(1);
        var0[0] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var19 = var19.bind(var0)(var22);
    var _closure1_slot58 = var19;
    var19 = function(arg0) { // Environment: var18
        var3 = function() { // Original name: RecentsChannelListChannel, environment: var0
            var4 = this;
            var3 = undefined;
            var0 = undefined;
            var5 = _closure1_slot7;
            var2 = _closure2_slot0;
            var5 = var5.bind(var3)(var4, var2);
            var1 = _closure1_slot64;
            var0 = arguments;
            var0 = var1.bind(var3)(var4, var2, var0);
            return var0;
        };
        var _closure2_slot0 = var3;
        var5 = _closure1_slot6;
        var2 = undefined;
        var4 = arg0;
        var4 = var5.bind(var2)(var3, var4);
        var1 = _closure1_slot8;
        var4 = {};
        var5 = 'computeState';
        var4.key = var5;
        var0 = function(arg0) { // Original name: value, environment: var0
            _fun41379: for (var _fun41379_ip = 0;;) switch (_fun41379_ip) {
                case 0:
                    var10 = arg0;
                    var3 = this;
                    var9 = var10.selectedChannel;
                    var8 = var10.selectedVoiceChannelId;
                    var4 = var10.activeJoinedRelevantThreads;
                    var6 = _closure1_slot28;
                    var2 = var6.can;
                    var0 = _closure1_slot39;
                    var1 = var0.VIEW_CHANNEL;
                    var0 = var3.record;
                    var0 = var2.bind(var6)(var1, var0);
                    if (var0) {
                        _fun41379_ip = 93;
                        continue _fun41379
                    }
                case 62:
                    var0 = {};
                    var1 = _closure1_slot40;
                    var1 = var1.CannotShow;
                    var0.renderLevel = var1;
                    var1 = new Array(0);
                    var0.threadIds = var1;
                    _fun41379_ip = 251;
                    continue _fun41379;
                case 93:
                    var6 = _closure1_slot72;
                    var1 = var3.category;
                    var2 = var1.guild;
                    var1 = var3.record;
                    var7 = undefined;
                    var1 = var6.bind(var7)(var2, var1, var10);
                    var2 = {};
                    if (var1) {
                        _fun41379_ip = 157;
                        continue _fun41379
                    }
                case 128:
                    var1 = _closure1_slot40;
                    var1 = var1.DoNotShow;
                    var2.renderLevel = var1;
                    var1 = new Array(0);
                    var2.threadIds = var1;
                    var1 = var2;
                    _fun41379_ip = 248;
                    continue _fun41379;
                case 157:
                    var6 = _closure1_slot71;
                    var6 = var6.bind(var7)(var3, var10);
                    var10 = _closure1_slot40;
                    if (var6) {
                        _fun41379_ip = 182;
                        continue _fun41379
                    }
                case 174:
                    var6 = var10.WouldShowIfUncollapsed;
                    _fun41379_ip = 188;
                    continue _fun41379;
                case 182:
                    var6 = var10.Show;
                case 188:
                    var2.renderLevel = var6;
                    var6 = _closure1_slot69;
                    var5 = var3.record;
                    var3 = var3.id;
                    var4 = var4[var3];
                    var3 = null;
                    if (!(var3 == var4)) {
                        _fun41379_ip = 220;
                        continue _fun41379
                    }
                case 218:
                    var4 = {};
                case 220:
                    var12 = false;
                    var17 = undefined;
                    var16 = var5;
                    var15 = var4;
                    var14 = var9;
                    var13 = var8;
                    var3 = var17[var6](var16, var15, var14, var13, var12, var11);
                    var2.threadIds = var3;
                    var1 = var2;
                case 248:
                    var0 = var1;
                case 251:
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(1);
        var0[0] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var19 = var19.bind(var0)(var22);
    var _closure1_slot59 = var19;
    var19 = function(arg0) { // Environment: var18
        var3 = function() { // Original name: RecentlyActiveChannelListChannel, environment: var0
            var4 = this;
            var3 = undefined;
            var0 = undefined;
            var5 = _closure1_slot7;
            var2 = _closure2_slot0;
            var5 = var5.bind(var3)(var4, var2);
            var1 = _closure1_slot64;
            var0 = arguments;
            var0 = var1.bind(var3)(var4, var2, var0);
            return var0;
        };
        var _closure2_slot0 = var3;
        var5 = _closure1_slot6;
        var2 = undefined;
        var4 = arg0;
        var4 = var5.bind(var2)(var3, var4);
        var1 = _closure1_slot8;
        var4 = {};
        var5 = 'computeState';
        var4.key = var5;
        var0 = function(arg0) { // Original name: value, environment: var0
            _fun41382: for (var _fun41382_ip = 0;;) switch (_fun41382_ip) {
                case 0:
                    var9 = arg0;
                    var8 = this;
                    var4 = _closure1_slot63;
                    var16 = _closure2_slot0;
                    var5 = undefined;
                    var15 = 'computeState';
                    var13 = 3;
                    var17 = undefined;
                    var14 = var8;
                    var2 = var17[var4](var16, var15, var14, var13, var12);
                    var1 = new Array(1);
                    var1[0] = var9;
                    var1 = var2.bind(var5)(var1);
                    var3 = var1.renderLevel;
                    var6 = var1.threadIds;
                    var1 = _closure1_slot40;
                    var4 = var1.CannotShow;
                    var1 = var6;
                    var2 = var3;
                    if (!(var2 > var4)) {
                        _fun41382_ip = 330;
                        continue _fun41382
                    }
                case 86:
                    var4 = var8.record;
                    var10 = var4.parent_id;
                    var4 = var8.category;
                    var4 = var4.guild;
                    var12 = var4.mutedChannelIds;
                    var11 = var12.has;
                    var7 = var8.id;
                    var7 = var11.bind(var12)(var7);
                    if (var7) {
                        _fun41382_ip = 238;
                        continue _fun41382
                    }
                case 133:
                    var7 = null;
                    if (!(var7 != var10)) {
                        _fun41382_ip = 158;
                        continue _fun41382
                    }
                case 139:
                    var7 = var4.mutedChannelIds;
                    var4 = var7.has;
                    var4 = var4.bind(var7)(var10);
                    if (var4) {
                        _fun41382_ip = 238;
                        continue _fun41382
                    }
                case 158:
                    var4 = _closure1_slot40;
                    var4 = var4.Show;
                    var4 = var3 === var4;
                    if (var4) {
                        _fun41382_ip = 223;
                        continue _fun41382
                    }
                case 175:
                    var7 = _closure1_slot40;
                    var7 = var7.DoNotShow;
                    var7 = var3 === var7;
                    if (!var7) {
                        _fun41382_ip = 220;
                        continue _fun41382
                    }
                case 192:
                    var12 = _closure1_slot72;
                    var10 = var8.category;
                    var11 = var10.guild;
                    var10 = var8.record;
                    var7 = var12.bind(var5)(var11, var10, var9);
                case 220:
                    var4 = var7;
                case 223:
                    if (!var4) {
                        _fun41382_ip = 248;
                        continue _fun41382
                    }
                case 226:
                    var4 = _closure1_slot40;
                    var3 = var4.WouldShowIfUncollapsed;
                    _fun41382_ip = 248;
                    continue _fun41382;
                case 238:
                    var4 = _closure1_slot40;
                    var3 = var4.DoNotShow;
                case 248:
                    var4 = _closure1_slot40;
                    var4 = var4.WouldShowIfUncollapsed;
                    var4 = var3 === var4;
                    if (!var4) {
                        _fun41382_ip = 275;
                        continue _fun41382
                    }
                case 265:
                    var7 = _closure1_slot71;
                    var4 = var7.bind(var5)(var8, var9);
                case 275:
                    if (!var4) {
                        _fun41382_ip = 288;
                        continue _fun41382
                    }
                case 278:
                    var4 = _closure1_slot40;
                    var3 = var4.Show;
                case 288:
                    var4 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var0 = 33;
                    var0 = var7[var0];
                    var5 = var4.bind(var5)(var0);
                    var4 = var5.sortBy;
                    var0 = function(arg0) { // Environment: var0
                        var2 = _closure1_slot29;
                        var1 = var2.lastMessageTimestamp;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        var0 = -var0;
                        return var0;
                    };
                    var1 = var4.bind(var5)(var6, var0);
                    var2 = var3;
                case 330:
                    var0 = {};
                    var0.renderLevel = var2;
                    var0.threadIds = var1;
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(1);
        var0[0] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var19 = var19.bind(var0)(var20);
    var _closure1_slot60 = var19;
    var19 = function(arg0) { // Environment: var18
        var3 = function() { // Original name: VoiceChannelListChannel, environment: var5
            var4 = this;
            var3 = undefined;
            var0 = undefined;
            var5 = _closure1_slot7;
            var2 = _closure2_slot0;
            var5 = var5.bind(var3)(var4, var2);
            var1 = _closure1_slot64;
            var0 = arguments;
            var0 = var1.bind(var3)(var4, var2, var0);
            return var0;
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot6;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot8;
        var4 = {};
        var0 = 'getRenderLevel';
        var4.key = var0;
        var0 = function(arg0) { // Original name: value, environment: var5
            _fun41386: for (var _fun41386_ip = 0;;) switch (_fun41386_ip) {
                case 0:
                    var4 = arg0;
                    var3 = this;
                    var0 = var3.category;
                    var5 = var0.guild;
                    var7 = _closure1_slot28;
                    var6 = var7.can;
                    var0 = _closure1_slot39;
                    var1 = var0.VIEW_CHANNEL;
                    var0 = var3.record;
                    var0 = var6.bind(var7)(var1, var0);
                    var1 = _closure1_slot40;
                    if (var0) {
                        _fun41386_ip = 70;
                        continue _fun41386
                    }
                case 59:
                    var0 = var1.CannotShow;
                    _fun41386_ip = 244;
                    continue _fun41386;
                case 70:
                    var1 = var1.Show;
                    if (!(var4 !== var1)) {
                        _fun41386_ip = 231;
                        continue _fun41386
                    }
                case 83:
                    var1 = _closure1_slot40;
                    var1 = var1.WouldShowIfUncollapsed;
                    if (!(var4 !== var1)) {
                        _fun41386_ip = 231;
                        continue _fun41386
                    }
                case 100:
                    var4 = _closure1_slot70;
                    var1 = var3.record;
                    var6 = undefined;
                    var1 = var4.bind(var6)(var5, var1);
                    if (var1) {
                        _fun41386_ip = 231;
                        continue _fun41386
                    }
                case 121:
                    var1 = var3.category;
                    var1 = var1.isCollapsed;
                    if (var1) {
                        _fun41386_ip = 148;
                        continue _fun41386
                    }
                case 136:
                    var1 = _closure1_slot40;
                    var1 = var1.Show;
                    _fun41386_ip = 229;
                    continue _fun41386;
                case 148:
                    var5 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var4 = 33;
                    var4 = var7[var4];
                    var5 = var5.bind(var6)(var4);
                    var4 = var5.some;
                    var7 = _closure1_slot32;
                    var6 = var7.getVoiceStatesForChannel;
                    var3 = var3.record;
                    var3 = var3.id;
                    var3 = var6.bind(var7)(var3);
                    var3 = var4.bind(var5)(var3);
                    var4 = _closure1_slot40;
                    if (var3) {
                        _fun41386_ip = 220;
                        continue _fun41386
                    }
                case 212:
                    var3 = var4.WouldShowIfUncollapsed;
                    _fun41386_ip = 226;
                    continue _fun41386;
                case 220:
                    var3 = var4.Show;
                case 226:
                    var1 = var3;
                case 229:
                    _fun41386_ip = 241;
                    continue _fun41386;
                case 231:
                    var2 = _closure1_slot40;
                    var1 = var2.CannotShow;
                case 241:
                    var0 = var1;
                case 244:
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(2);
        var0[0] = var4;
        var4 = {};
        var6 = 'computeState';
        var4.key = var6;
        var5 = function(arg0) { // Original name: value, environment: var5
            _fun41387: for (var _fun41387_ip = 0;;) switch (_fun41387_ip) {
                case 0:
                    var2 = this;
                    var5 = _closure1_slot63;
                    var10 = _closure2_slot0;
                    var6 = undefined;
                    var9 = 'computeState';
                    var7 = 3;
                    var11 = undefined;
                    var8 = var2;
                    var3 = var11[var5](var10, var9, var8, var7, var6);
                    var1 = new Array(1);
                    var4 = arg0;
                    var1[0] = var4;
                    var1 = var3.bind(var6)(var1);
                    var3 = var2.getRenderLevel;
                    var1 = var1.renderLevel;
                    var1 = var3.bind(var2)(var1);
                    var3 = _closure1_slot40;
                    var3 = var3.Show;
                    if (!(var1 === var3)) {
                        _fun41387_ip = 145;
                        continue _fun41387
                    }
                case 84:
                    var5 = _closure1_slot68;
                    var4 = var2.record;
                    var3 = var2.isCollapsed;
                    if (var3) {
                        _fun41387_ip = 115;
                        continue _fun41387
                    }
                case 103:
                    var0 = var2.category;
                    var3 = var0.isCollapsed;
                case 115:
                    var0 = var2.category;
                    var0 = var0.guild;
                    var0 = var0.optInEnabled;
                    var0 = var5.bind(var6)(var4, var3, var0);
                    var2.subtitle = var0;
                case 145:
                    var0 = {};
                    var2 = new Array(0);
                    var0.threadIds = var2;
                    var0.renderLevel = var1;
                    return var0;
            }
        };
        var4.value = var5;
        var0[1] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var19 = var19.bind(var0)(var20);
    var _closure1_slot61 = var19;
    var20 = var15.Set;
    var19 = var15.Object;
    var15 = var19.values;
    var26 = var15.bind(var19)(var21);
    var19 = var20.prototype;
    var19 = Object.create(var19, {
        constructor: {
            value: var20
        }
    });
    var27 = var19;
    var15 = new var27[var20](var26, var25);
    var15 = var15 instanceof Object ? var15 : var19;
    var _closure1_slot62 = var15;
    var15 = 43;
    var15 = var17[var15];
    var17 = var16.bind(var0)(var15);
    var16 = var17.fileFinishedImporting;
    var15 = 'modules/guild_sidebar/ChannelListState.tsx';
    var15 = var16.bind(var17)(var15);
    var2.default = var14;
    var2.MAX_NEW_CHANNELS_TO_SHOW = var13;
    var2.ChannelListSections = var12;
    var2.SECTION_INDEX_CHANNEL_NOTICES = var11;
    var2.SECTION_INDEX_GUILD_ACTIONS = var10;
    var2.SECTION_INDEX_FAVORITES = var9;
    var2.SECTION_INDEX_RECENTS = var8;
    var2.SECTION_INDEX_UNCATEGORIZED_CHANNELS = var7;
    var2.SECTION_INDEX_FIRST_NAMED_CATEGORY = var6;
    var2.ChannelListFavoritesCategory = var5;
    var2.ChannelListVoiceChannelsCategory = var4;
    var2.computeSubtitle = var3;
    var2.computeThreadIds = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [102, 15, 17, 18, 6, 7, 1371, 3413, 4534, 1663, 3293, 1664, 4535, 4536, 4537, 4514, 3052, 1376, 4531, 1372, 4532, 1410, 3050, 3906, 1661, 4267, 3480, 3485, 4541, 4542, 660, 1379, 483, 22, 4543, 4544, 4552, 4553, 4554, 44, 1304, 21, 4201, 2]);