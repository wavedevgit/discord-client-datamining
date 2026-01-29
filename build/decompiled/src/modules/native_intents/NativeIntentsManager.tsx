// modules/native_intents/NativeIntentsManager.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var1
        _fun118056: for (var _fun118056_ip = 0;;) switch (_fun118056_ip) {
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
            case 72: // try_end0
                _fun118056_ip = 76;
                continue _fun118056;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot21 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot21 = var0;
    var0 = function(arg0, arg1) { // Original name: _createForOfIteratorHelperLoose, environment: var1
        _fun118059: for (var _fun118059_ip = 0;;) switch (_fun118059_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun118059_ip = 45;
                    continue _fun118059
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 45:
                if (var1) {
                    _fun118059_ip = 54;
                    continue _fun118059
                }
            case 48:
                var1 = var2["@@iterator"];
            case 54:
                if (var1) {
                    _fun118059_ip = 344;
                    continue _fun118059
                }
            case 60:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun118059_ip = 322;
                    continue _fun118059
                }
            case 85:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun118059_ip = 282;
                    continue _fun118059
                }
            case 95:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun118059_ip = 269;
                    continue _fun118059
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
                    _fun118059_ip = 162;
                    continue _fun118059
                }
            case 157:
                var6 = var2.constructor;
            case 162:
                var9 = var8;
                if (!var6) {
                    _fun118059_ip = 178;
                    continue _fun118059
                }
            case 168:
                var6 = var2.constructor;
                var9 = var6.name;
            case 178:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun118059_ip = 248;
                    continue _fun118059
                }
            case 186:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun118059_ip = 248;
                    continue _fun118059
                }
            case 194:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun118059_ip = 233;
                    continue _fun118059
                }
            case 204:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun118059_ip = 246;
                    continue _fun118059
                }
            case 233:
                var8 = _closure1_slot23;
                var6 = var8.bind(var7)(var2, var7);
            case 246:
                _fun118059_ip = 264;
                continue _fun118059;
            case 248:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 264:
                var5 = var6;
                _fun118059_ip = 282;
                continue _fun118059;
            case 269:
                var6 = _closure1_slot23;
                var5 = var6.bind(var7)(var2, var7);
            case 282:
                var3 = var5;
                if (var3) {
                    _fun118059_ip = 322;
                    continue _fun118059
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
                    _fun118059_ip = 329;
                    continue _fun118059
                }
            case 325:
                _closure2_slot0 = var3;
            case 329:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun118060: for (var _fun118060_ip = 0;;) switch (_fun118060_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun118060_ip = 56;
                                continue _fun118060
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
                            _fun118060_ip = 67;
                            continue _fun118060;
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
            case 344:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot22 = var0;
    var0 = function(arg0, arg1) { // Original name: _arrayLikeToArray, environment: var1
        _fun118061: for (var _fun118061_ip = 0;;) switch (_fun118061_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun118061_ip = 23;
                    continue _fun118061
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun118061_ip = 33;
                    continue _fun118061
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
                    _fun118061_ip = 70;
                    continue _fun118061
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun118061_ip = 55;
                    continue _fun118061
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot23 = var0;
    var0 = function() { // Original name: indexingEnabled, environment: var1
        var6 = _closure1_slot1;
        var7 = _closure1_slot2;
        var0 = 13;
        var0 = var7[var0];
        var5 = undefined;
        var3 = var6.bind(var5)(var0);
        var2 = var3.getCurrentConfig;
        var1 = {};
        var0 = 'NativeIntentsManager';
        var1.location = var0;
        var0 = {};
        var4 = true;
        var0.autoTrackExposure = var4;
        var4 = 14;
        var4 = var7[var4];
        var5 = var6.bind(var5)(var4);
        var4 = var5.hasSearch;
        var4 = var4.bind(var5)();
        var4 = !var4;
        var0.disable = var4;
        var0 = var2.bind(var3)(var1, var0);
        var0 = var0.searchEnabled;
        return var0;
    };
    var _closure1_slot24 = var0;
    var0 = function() { // Original name: clearEnabled, environment: var1
        var6 = _closure1_slot1;
        var7 = _closure1_slot2;
        var0 = 13;
        var0 = var7[var0];
        var5 = undefined;
        var3 = var6.bind(var5)(var0);
        var2 = var3.getCurrentConfig;
        var1 = {};
        var0 = 'NativeIntentsManager';
        var1.location = var0;
        var0 = {};
        var4 = true;
        var0.autoTrackExposure = var4;
        var4 = 14;
        var4 = var7[var4];
        var5 = var6.bind(var5)(var4);
        var4 = var5.hasSearch;
        var4 = var4.bind(var5)();
        var4 = !var4;
        var0.disable = var4;
        var0 = var2.bind(var3)(var1, var0);
        var0 = var0.clearEnabled;
        return var0;
    };
    var _closure1_slot25 = var0;
    var0 = function(arg0) { // Original name: handleRelativeURL, environment: var1
        _fun118064: for (var _fun118064_ip = 0;;) switch (_fun118064_ip) {
            case 0:
                var2 = arg0;
                var0 = null;
                if (!(var0 != var2)) {
                    _fun118064_ip = 37;
                    continue _fun118064
                }
            case 9:
                var1 = var2.startsWith;
                if (!(var0 != var1)) {
                    _fun118064_ip = 37;
                    continue _fun118064
                }
            case 19:
                var3 = var2.startsWith;
                var1 = '/';
                var1 = var3.bind(var2)(var1);
                if (var1) {
                    _fun118064_ip = 51;
                    continue _fun118064
                }
            case 37:
                var1 = var0 != var2;
                var0 = undefined;
                if (!var1) {
                    _fun118064_ip = 49;
                    continue _fun118064
                }
            case 46:
                var0 = var2;
            case 49:
                _fun118064_ip = 69;
                continue _fun118064;
            case 51:
                var1 = global;
                var1 = var1.location;
                var1 = var1.origin;
                var0 = var1 + var2;
            case 69:
                return var0;
        }
    };
    var _closure1_slot26 = var0;
    var0 = function(arg0, arg1) { // Original name: makeSearchItem, environment: var1
        _fun118065: for (var _fun118065_ip = 0;;) switch (_fun118065_ip) {
            case 0:
                var4 = arg0;
                var12 = arg1;
                var1 = arguments[2];
                var8 = undefined;
                if (!(var1 === var8)) {
                    _fun118065_ip = 17;
                    continue _fun118065
                }
            case 15:
                var1 = false;
            case 17:
                var2 = _closure1_slot0;
                var0 = _closure1_slot2;
                var14 = 15;
                var3 = var0[var14];
                var9 = var2.bind(var8)(var3);
                var7 = var9.computeChannelName;
                var22 = _closure1_slot14;
                var21 = _closure1_slot12;
                var24 = var9;
                var23 = var4;
                var20 = true;
                var7 = var24[var7](var23, var22, var21, var20, var19);
                var0 = var0[var14];
                var6 = var2.bind(var8)(var0);
                var3 = var6.computeChannelName;
                var22 = _closure1_slot14;
                var21 = _closure1_slot12;
                var11 = false;
                var24 = var6;
                var23 = var4;
                var20 = false;
                var10 = var24[var3](var23, var22, var21, var20, var19);
                var13 = new Array(0);
                var2 = new Array(2);
                var2[0] = var7;
                var2[1] = var10;
                var3 = new Array(0);
                var0 = var4.isGuildVocal;
                var0 = var0.bind(var4)();
                if (!var0) {
                    _fun118065_ip = 168;
                    continue _fun118065
                }
            case 136:
                var6 = var2.push;
                var0 = global;
                var0 = var0.HermesInternal;
                var9 = var0.concat;
                var0 = '!';
                var0 = var9.bind(var0)(var10);
                var0 = var6.bind(var2)(var0);
            case 168:
                var9 = _closure1_slot9;
                var6 = var9.getChannel;
                var0 = var4.parent_id;
                var16 = var6.bind(var9)(var0);
                var0 = null;
                if (!(var0 != var16)) {
                    _fun118065_ip = 302;
                    continue _fun118065
                }
            case 194:
                var10 = _closure1_slot0;
                var6 = _closure1_slot2;
                var9 = var6[var14];
                var18 = var10.bind(var8)(var9);
                var17 = var18.computeChannelName;
                var22 = _closure1_slot14;
                var21 = _closure1_slot12;
                var24 = var18;
                var23 = var16;
                var20 = true;
                var9 = var24[var17](var23, var22, var21, var20, var19);
                var6 = var6[var14];
                var15 = var10.bind(var8)(var6);
                var14 = var15.computeChannelName;
                var22 = _closure1_slot14;
                var21 = _closure1_slot12;
                var24 = var15;
                var23 = var16;
                var20 = false;
                var10 = var24[var14](var23, var22, var21, var20, var19);
                var6 = var3.push;
                var6 = var6.bind(var3)(var9);
                var6 = var3.push;
                var6 = var6.bind(var3)(var10);
                var6 = var13.push;
                var6 = var6.bind(var13)(var9);
            case 302:
                if (!(var0 != var12)) {
                    _fun118065_ip = 336;
                    continue _fun118065
                }
            case 306:
                var9 = var3.push;
                var6 = var12.name;
                var6 = var9.bind(var3)(var6);
                var9 = var13.push;
                var6 = var12.name;
                var6 = var9.bind(var13)(var6);
            case 336:
                var9 = var13.length;
                var6 = 0;
                var9 = var9 > var6;
                var6 = '';
                if (!var9) {
                    _fun118065_ip = 399;
                    continue _fun118065
                }
            case 354:
                var10 = var13.join;
                var9 = ', ';
                var14 = var10.bind(var13)(var9);
                var9 = global;
                var9 = var9.HermesInternal;
                var13 = var9.concat;
                var10 = ' (';
                var9 = ')';
                var6 = var13.bind(var10)(var14, var9);
            case 399:
                var6 = var7 + var6;
                var10 = _closure1_slot19;
                var9 = var10.CHANNEL;
                var13 = var0 == var12;
                var7 = undefined;
                if (var13) {
                    _fun118065_ip = 427;
                    continue _fun118065
                }
            case 422:
                var7 = var12.id;
            case 427:
                if (!(var0 == var7)) {
                    _fun118065_ip = 435;
                    continue _fun118065
                }
            case 431:
                var7 = _closure1_slot15;
            case 435:
                var0 = var4.id;
                var7 = var9.bind(var10)(var7, var0);
                var0 = {};
                var0.id = var7;
                var0.relatedUniqueIdentifier = var7;
                var7 = 'url';
                var0.type = var7;
                var0.title = var6;
                var0.displayName = var6;
                var7 = _closure1_slot26;
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var6 = 16;
                var6 = var10[var6];
                var10 = var9.bind(var8)(var6);
                var9 = var10.getChannelIconURL;
                var6 = 128;
                var6 = var9.bind(var10)(var4, var6, var11);
                var6 = var7.bind(var8)(var6);
                var0.thumbnailURL = var6;
                var6 = var4.type;
                var4 = _closure1_slot16;
                var4 = var4.DM;
                if (!(var6 !== var4)) {
                    _fun118065_ip = 556;
                    continue _fun118065
                }
            case 544:
                var4 = _closure1_slot20;
                var4 = var4.OTHER_CHANNEL;
                _fun118065_ip = 566;
                continue _fun118065;
            case 556:
                var5 = _closure1_slot20;
                var4 = var5.DM;
            case 566:
                var0.rankingHint = var4;
                var0.keywords = var3;
                var0.alternateNames = var2;
                var0.isUpdate = var1;
                return var0;
        }
    };
    var _closure1_slot27 = var0;
    var0 = function(arg0) { // Original name: getGuildThumbnail, environment: var1
        _fun118066: for (var _fun118066_ip = 0;;) switch (_fun118066_ip) {
            case 0:
                var6 = arg0;
                var0 = null;
                var1 = var0 != var6;
                var3 = undefined;
                var0 = undefined;
                if (!var1) {
                    _fun118066_ip = 86;
                    continue _fun118066
                }
            case 16:
                var2 = _closure1_slot26;
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 17;
                var1 = var5[var1];
                var5 = var4.bind(var3)(var1);
                var4 = var5.getGuildIconURL;
                var1 = {};
                var7 = var6.id;
                var1.id = var7;
                var6 = var6.icon;
                var1.icon = var6;
                var6 = 128;
                var1.size = var6;
                var1 = var4.bind(var5)(var1);
                var0 = var2.bind(var3)(var1);
            case 86:
                return var0;
        }
    };
    var _closure1_slot28 = var0;
    var0 = function(arg0) { // Original name: makeGuildDomain, environment: var1
        _fun118067: for (var _fun118067_ip = 0;;) switch (_fun118067_ip) {
            case 0:
                var4 = arg0;
                var1 = arguments[1];
                var8 = undefined;
                if (!(var1 === var8)) {
                    _fun118067_ip = 14;
                    continue _fun118067
                }
            case 12:
                var1 = false;
            case 14:
                var0 = _closure1_slot28;
                var2 = var0.bind(var8)(var4);
                var5 = _closure1_slot19;
                var3 = var5.CHANNEL;
                var0 = var4.id;
                var3 = var3.bind(var5)(var0);
                var0 = {};
                var0.id = var3;
                var0.relatedUniqueIdentifier = var3;
                var3 = 'url';
                var0.type = var3;
                var3 = var4.name;
                var0.title = var3;
                var3 = var4.name;
                var0.displayName = var3;
                var6 = var4.name;
                var3 = global;
                var3 = var3.HermesInternal;
                var5 = var3.concat;
                var3 = '*';
                var5 = var5.bind(var3)(var6);
                var3 = new Array(1);
                var3[0] = var5;
                var0.alternateNames = var3;
                var3 = _closure1_slot20;
                var3 = var3.GUILD;
                var0.rankingHint = var3;
                var3 = new Array(1);
                var3[0] = var0;
                var6 = _closure1_slot9;
                var5 = var6.getMutableGuildChannelsForGuild;
                var0 = var4.id;
                var11 = var5.bind(var6)(var0);
                var9 = var11;
                for (var0 in var9)
                    case 177: {
                        case 186: var12 = var0;
                        var14 = var11[var12];
                        var15 = _closure1_slot11;
                        var13 = var15.can;
                        var12 = _closure1_slot18;
                        var12 = var12.VIEW_CHANNEL;
                        var12 = var13.bind(var15)(var12, var14);
                        if (!var12) {
                            _fun118067_ip = 177;
                            continue _fun118067
                        }
                        case 222: var13 = var3.push;
                        var12 = _closure1_slot27;
                        var12 = var12.bind(var8)(var14, var4, var1);
                        var12 = var13.bind(var3)(var12);
                        _fun118067_ip = 177;
                        continue _fun118067;
                    }
            case 245:
                var5 = _closure1_slot22;
                var9 = _closure1_slot9;
                var6 = var9.getAllThreadsForGuild;
                var0 = var4.id;
                var0 = var6.bind(var9)(var0);
                var6 = var5.bind(var8)(var0);
                var5 = var6.bind(var8)();
                var0 = var5.done;
                if (var0) {
                    _fun118067_ip = 356;
                    continue _fun118067
                }
            case 286:
                var10 = var5.value;
                var11 = _closure1_slot11;
                var9 = var11.can;
                var0 = _closure1_slot18;
                var0 = var0.VIEW_CHANNEL;
                var0 = var9.bind(var11)(var0, var10);
                if (!var0) {
                    _fun118067_ip = 341;
                    continue _fun118067
                }
            case 320:
                var9 = var3.push;
                var0 = _closure1_slot27;
                var0 = var0.bind(var8)(var10, var4, var1);
                var0 = var9.bind(var3)(var0);
            case 341:
                var9 = var6.bind(var8)();
                var0 = var9.done;
                var5 = var9;
                if (!var0) {
                    _fun118067_ip = 286;
                    continue _fun118067
                }
            case 356:
                var0 = {};
                var4 = var4.id;
                var0.id = var4;
                var0.items = var3;
                var0.defaultThumbnailURL = var2;
                var0.isUpdate = var1;
                return var0;
        }
    };
    var _closure1_slot29 = var0;
    var0 = function(arg0) { // Original name: getChannelKeywords, environment: var1
        _fun118068: for (var _fun118068_ip = 0;;) switch (_fun118068_ip) {
            case 0:
                var3 = arg0;
                var0 = new Array(0);
                var2 = var3.name;
                var1 = '';
                if (!(var1 !== var2)) {
                    _fun118068_ip = 35;
                    continue _fun118068
                }
            case 20:
                var2 = var0.push;
                var1 = var3.name;
                var1 = var2.bind(var0)(var1);
            case 35:
                var2 = var3.nicks;
                var1 = null;
                if (!(var1 != var2)) {
                    _fun118068_ip = 102;
                    continue _fun118068
                }
            case 47:
                var4 = var0.push;
                var2 = global;
                var6 = var2.Object;
                var5 = var6.values;
                var2 = var3.nicks;
                var10 = var5.bind(var6)(var2);
                var2 = new Array(0);
                var9 = 0;
                var11 = var2;
                var5 = arraySpread(var11, var10, var9);
                var11 = var4;
                var10 = var2;
                var9 = var0;
                var2 = apply(var11, var10, var9);
            case 102:
                var5 = var3.type;
                var4 = _closure1_slot16;
                var4 = var4.DM;
                if (!(var5 === var4)) {
                    _fun118068_ip = 376;
                    continue _fun118068
                }
            case 127:
                var5 = var3.recipients;
                var4 = var5.map;
                var3 = _closure1_slot14;
                var3 = var3.getUser;
                var6 = var4.bind(var5)(var3);
                var4 = var6.filter;
                var7 = _closure1_slot0;
                var5 = _closure1_slot2;
                var3 = 18;
                var3 = var5[var3];
                var5 = undefined;
                var3 = var7.bind(var5)(var3);
                var3 = var3.isNotNullish;
                var6 = var4.bind(var6)(var3);
                var4 = _closure1_slot8;
                var3 = 1;
                var4 = var4.bind(var5)(var6, var3);
                var3 = 0;
                var4 = var4[var3];
                if (!(var1 != var4)) {
                    _fun118068_ip = 376;
                    continue _fun118068
                }
            case 217:
                var7 = _closure1_slot1;
                var3 = _closure1_slot2;
                var6 = 19;
                var3 = var3[var6];
                var7 = var7.bind(var5)(var3);
                var3 = var7.getGlobalName;
                var7 = var3.bind(var7)(var4);
                if (!(var1 != var7)) {
                    _fun118068_ip = 262;
                    continue _fun118068
                }
            case 252:
                var3 = var0.push;
                var3 = var3.bind(var0)(var7);
            case 262:
                var7 = var0.push;
                var3 = var4.username;
                var3 = var7.bind(var0)(var3);
                var7 = var0.push;
                var8 = var4.username;
                var3 = '@';
                var3 = var3 + var8;
                var3 = var7.bind(var0)(var3);
                var8 = _closure1_slot12;
                var7 = var8.getNickname;
                var3 = var4.id;
                var7 = var7.bind(var8)(var3);
                if (!(var1 != var7)) {
                    _fun118068_ip = 334;
                    continue _fun118068
                }
            case 324:
                var3 = var0.push;
                var3 = var3.bind(var0)(var7);
            case 334:
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var2 = var2[var6];
                var3 = var3.bind(var5)(var2);
                var2 = var3.getName;
                var2 = var2.bind(var3)(var4);
                if (!(var1 != var2)) {
                    _fun118068_ip = 376;
                    continue _fun118068
                }
            case 366:
                var1 = var0.push;
                var1 = var1.bind(var0)(var2);
            case 376:
                return var0;
        }
    };
    var _closure1_slot30 = var0;
    var0 = function(arg0) { // Original name: setChannelActivity, environment: var1
        _fun118069: for (var _fun118069_ip = 0;;) switch (_fun118069_ip) {
            case 0:
                var8 = arg0;
                var10 = _closure1_slot1;
                var9 = _closure1_slot2;
                var0 = 13;
                var2 = var9[var0];
                var0 = undefined;
                var7 = var10.bind(var0)(var2);
                var5 = var7.getCurrentConfig;
                var3 = {};
                var2 = 'NativeIntentsManager';
                var3.location = var2;
                var2 = {};
                var6 = true;
                var2.autoTrackExposure = var6;
                var4 = 14;
                var9 = var9[var4];
                var10 = var10.bind(var0)(var9);
                var9 = var10.hasUserActivity;
                var9 = var9.bind(var10)();
                var9 = !var9;
                var2.disable = var9;
                var2 = var5.bind(var7)(var3, var2);
                var2 = var2.activityEnabled;
                if (!var2) {
                    _fun118069_ip = 484;
                    continue _fun118069
                }
            case 103:
                var2 = null;
                var5 = var2 != var8;
                var3 = undefined;
                if (!var5) {
                    _fun118069_ip = 128;
                    continue _fun118069
                }
            case 114:
                var7 = _closure1_slot9;
                var5 = var7.getChannel;
                var3 = var5.bind(var7)(var8);
            case 128:
                if (!(var2 == var3)) {
                    _fun118069_ip = 164;
                    continue _fun118069
                }
            case 132:
                var7 = _closure1_slot1;
                var5 = _closure1_slot2;
                var5 = var5[var4];
                var7 = var7.bind(var0)(var5);
                var5 = var7.resignActivity;
                var5 = var5.bind(var7)();
                _fun118069_ip = 484;
                continue _fun118069;
            case 164:
                var8 = _closure1_slot10;
                var7 = var8.getGuild;
                var5 = var3.guild_id;
                var5 = var7.bind(var8)(var5);
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var7 = 15;
                var7 = var9[var7];
                var10 = var8.bind(var0)(var7);
                var9 = var10.computeChannelName;
                var14 = _closure1_slot14;
                var13 = _closure1_slot12;
                var16 = var10;
                var15 = var3;
                var12 = true;
                var7 = var16[var9](var15, var14, var13, var12, var11);
                var8 = var2 != var5;
                var10 = '';
                var2 = var10;
                if (!var8) {
                    _fun118069_ip = 277;
                    continue _fun118069
                }
            case 243:
                var11 = var5.name;
                var5 = global;
                var5 = var5.HermesInternal;
                var9 = var5.concat;
                var8 = ' (';
                var5 = ')';
                var2 = var9.bind(var8)(var11, var5);
            case 277:
                var2 = var7 + var2;
                var8 = global;
                var9 = var8.Set;
                var5 = new Array(1);
                var5[0] = var7;
                var7 = _closure1_slot30;
                var14 = var7.bind(var0)(var3);
                var13 = 1;
                var15 = var5;
                var7 = arraySpread(var15, var14, var13);
                var7 = var9.prototype;
                var7 = Object.create(var7, {
                    constructor: {
                        value: var9
                    }
                });
                var16 = var7;
                var15 = var5;
                var5 = new var16[var9](var15, var14);
                var14 = var5 instanceof Object ? var5 : var7;
                var5 = new Array(0);
                var13 = 0;
                var15 = var5;
                var7 = arraySpread(var15, var14, var13);
                var11 = _closure1_slot19;
                var9 = var11.CHANNEL;
                var7 = var3.guild_id;
                var3 = var3.id;
                var7 = var9.bind(var11)(var7, var3);
                var3 = {};
                var9 = _closure1_slot17;
                var9 = var9.BASE_URL;
                var8 = var8.HermesInternal;
                var8 = var8.concat;
                var8 = var8.bind(var10)(var9, var7);
                var3.webpageURL = var8;
                var3.relatedUniqueIdentifier = var7;
                var3.eligibleForHandoff = var6;
                var3.eligibleForSearch = var6;
                var3.title = var2;
                var3.keywords = var5;
                var3.displayName = var2;
                var2 = 'com.discord.view-channel';
                var3.type = var2;
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var1 = var1[var4];
                var2 = var2.bind(var0)(var1);
                var1 = var2.setActivity;
                var1 = var1.bind(var2)(var3);
            case 484:
                return var0;
        }
    };
    var _closure1_slot31 = var0;
    var0 = function(arg0) { // Original name: updateUserId, environment: var1
        _fun118070: for (var _fun118070_ip = 0;;) switch (_fun118070_ip) {
            case 0:
                var3 = _closure1_slot9;
                var2 = var3.getDMChannelFromUserId;
                var0 = arg0;
                var0 = var2.bind(var3)(var0);
                var2 = null;
                if (!(var2 != var0)) {
                    _fun118070_ip = 46;
                    continue _fun118070
                }
            case 27:
                var2 = _closure1_slot33;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
            case 46:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot32 = var0;
    var0 = function(arg0) { // Original name: indexChannelUpdates, environment: var1
        _fun118071: for (var _fun118071_ip = 0;;) switch (_fun118071_ip) {
            case 0:
                var2 = _closure1_slot24;
                var0 = undefined;
                var2 = var2.bind(var0)();
                if (!var2) {
                    _fun118071_ip = 379;
                    continue _fun118071
                }
            case 19:
                var6 = new Array(0);
                var3 = new Array(0);
                var14 = {};
                var4 = _closure1_slot22;
                var2 = arg0;
                var13 = var4.bind(var0)(var2);
                var4 = var13.bind(var0)();
                var2 = var4.done;
                var12 = true;
                var11 = null;
                var10 = var4;
                var9 = undefined;
                var8 = undefined;
                var7 = undefined;
                var5 = undefined;
                var4 = undefined;
                if (var2) {
                    _fun118071_ip = 297;
                    continue _fun118071
                }
            case 73:
                var15 = var10.value;
                var17 = _closure1_slot11;
                var16 = var17.can;
                var2 = _closure1_slot18;
                var2 = var2.VIEW_CHANNEL;
                var2 = var16.bind(var17)(var2, var15);
                if (var2) {
                    _fun118071_ip = 127;
                    continue _fun118071
                }
            case 107:
                var16 = var3.push;
                var2 = var15.id;
                var2 = var16.bind(var3)(var2);
                _fun118071_ip = 279;
                continue _fun118071;
            case 127:
                var17 = _closure1_slot10;
                var16 = var17.getGuild;
                var2 = var15.guild_id;
                var17 = var16.bind(var17)(var2);
                var2 = var11 == var17;
                var18 = undefined;
                if (var2) {
                    _fun118071_ip = 160;
                    continue _fun118071
                }
            case 155:
                var18 = var17.id;
            case 160:
                var16 = var18;
                if (!(var11 == var18)) {
                    _fun118071_ip = 171;
                    continue _fun118071
                }
            case 167:
                var16 = _closure1_slot15;
            case 171:
                var2 = _closure1_slot27;
                var15 = var2.bind(var0)(var15, var17, var12);
                var2 = var14[var16];
                if (!(var11 == var2)) {
                    _fun118071_ip = 254;
                    continue _fun118071
                }
            case 190:
                var19 = _closure1_slot28;
                var22 = var19.bind(var0)(var17);
                var19 = new Array(1);
                var19[0] = var15;
                var21 = var6.push;
                var20 = {};
                var20.id = var16;
                var20.items = var19;
                var20.defaultThumbnailURL = var22;
                var20 = var21.bind(var6)(var20);
                var14[var16] = var19;
                var9 = var18;
                var8 = var17;
                var7 = var16;
                var5 = var15;
                var4 = var2;
                _fun118071_ip = 279;
                continue _fun118071;
            case 254:
                var19 = var2.push;
                var19 = var19.bind(var2)(var15);
                var9 = var18;
                var8 = var17;
                var7 = var16;
                var5 = var15;
                var4 = var2;
            case 279:
                var15 = var13.bind(var0)();
                var2 = var15.done;
                var10 = var15;
                if (!var2) {
                    _fun118071_ip = 73;
                    continue _fun118071
                }
            case 297:
                var2 = var6.length;
                var4 = 0;
                if (!(var2 > var4)) {
                    _fun118071_ip = 339;
                    continue _fun118071
                }
            case 308:
                var5 = _closure1_slot1;
                var7 = _closure1_slot2;
                var2 = 14;
                var2 = var7[var2];
                var5 = var5.bind(var0)(var2);
                var2 = var5.indexDomains;
                var2 = var2.bind(var5)(var6);
            case 339:
                var2 = var3.length;
                if (!(var2 > var4)) {
                    _fun118071_ip = 379;
                    continue _fun118071
                }
            case 348:
                var2 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 14;
                var1 = var4[var1];
                var2 = var2.bind(var0)(var1);
                var1 = var2.deleteSearchItems;
                var1 = var1.bind(var2)(var3);
            case 379:
                return var0;
        }
    };
    var _closure1_slot33 = var0;
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
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot11 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot12 = var3;
    var3 = 10;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot13 = var3;
    var3 = 11;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot14 = var3;
    var3 = 12;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.ME;
    var _closure1_slot15 = var7;
    var7 = var3.ChannelTypes;
    var _closure1_slot16 = var7;
    var7 = var3.Links;
    var _closure1_slot17 = var7;
    var7 = var3.Permissions;
    var _closure1_slot18 = var7;
    var3 = var3.Routes;
    var _closure1_slot19 = var3;
    var3 = {};
    var8 = 100;
    var3.GUILD = var8;
    var7 = 'GUILD';
    var3[var8] = var7;
    var8 = 75;
    var3.DM = var8;
    var7 = 'DM';
    var3[var8] = var7;
    var8 = 50;
    var3.OTHER_CHANNEL = var8;
    var7 = 'OTHER_CHANNEL';
    var3[var8] = var7;
    var _closure1_slot20 = var3;
    var3 = 20;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var1 = function(arg0) { // Environment: var1
        var3 = function(arg0) { // Original name: NativeIntentsManager, environment: var5
            _fun118073: for (var _fun118073_ip = 0;;) switch (_fun118073_ip) {
                case 0:
                    var3 = this;
                    var11 = 0;
                    var0 = copyRestArgs(var11);
                    var6 = _closure1_slot3;
                    var1 = _closure2_slot0;
                    var2 = undefined;
                    var6 = var6.bind(var2)(var3, var1);
                    var8 = new Array(0);
                    var11 = var8;
                    var10 = var0;
                    var9 = 0;
                    var0 = arraySpread(var11, var10, var9);
                    var0 = _closure1_slot6;
                    var7 = var0.bind(var2)(var1);
                    var1 = _closure1_slot5;
                    var0 = _closure1_slot21;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun118073_ip = 84;
                        continue _fun118073
                    }
                case 71:
                    var0 = var7.apply;
                    var0 = var0.bind(var7)(var3, var8);
                    _fun118073_ip = 118;
                    continue _fun118073;
                case 84:
                    var5 = global;
                    var6 = var5.Reflect;
                    var5 = var6.construct;
                    var4 = _closure1_slot6;
                    var4 = var4.bind(var2)(var3);
                    var4 = var4.constructor;
                    var0 = var5.bind(var6)(var7, var8, var4);
                case 118:
                    var0 = var1.bind(var2)(var3, var0);
                    var1 = {};
                    var2 = var0.handleInit;
                    var1.POST_CONNECTION_OPEN = var2;
                    var2 = var0.handleLogout;
                    var1.LOGOUT = var2;
                    var2 = var0.handleChannelSelect;
                    var1.CHANNEL_SELECT = var2;
                    var2 = var0.handleChannelCreate;
                    var1.CHANNEL_CREATE = var2;
                    var2 = var0.handleChannelDelete;
                    var1.CHANNEL_DELETE = var2;
                    var2 = var0.handleChannelUpdates;
                    var1.CHANNEL_UPDATES = var2;
                    var2 = var0.handleGuildCreateOrUpdate;
                    var1.GUILD_CREATE = var2;
                    var2 = var0.handleGuildCreateOrUpdate;
                    var1.GUILD_UPDATE = var2;
                    var2 = var0.handleGuildDelete;
                    var1.GUILD_DELETE = var2;
                    var2 = var0.handleRelationshipChange;
                    var1.RELATIONSHIP_ADD = var2;
                    var2 = var0.handleRelationshipChange;
                    var1.RELATIONSHIP_REMOVE = var2;
                    var2 = var0.handleRelationshipChange;
                    var1.RELATIONSHIP_UPDATE = var2;
                    var2 = var0.handleChannelCreate;
                    var1.THREAD_CREATE = var2;
                    var2 = var0.handleChannelDelete;
                    var1.THREAD_DELETE = var2;
                    var2 = var0.handleThreadUpdate;
                    var1.THREAD_UPDATE = var2;
                    var2 = var0.handleUserUpdate;
                    var1.USER_UPDATE = var2;
                    var0.actions = var1;
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
        var0 = 'handleInit';
        var4.key = var0;
        var0 = function() { // Original name: value, environment: var5
            _fun118074: for (var _fun118074_ip = 0;;) switch (_fun118074_ip) {
                case 0:
                    var3 = _closure1_slot31;
                    var2 = _closure1_slot13;
                    var0 = var2.getCurrentlySelectedChannelId;
                    var2 = var0.bind(var2)();
                    var0 = undefined;
                    var2 = var3.bind(var0)(var2);
                    var2 = _closure1_slot25;
                    var2 = var2.bind(var0)();
                    if (!var2) {
                        _fun118074_ip = 69;
                        continue _fun118074
                    }
                case 39:
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 14;
                    var2 = var4[var2];
                    var3 = var3.bind(var0)(var2);
                    var2 = var3.clearSearchIndex;
                    var2 = var2.bind(var3)();
                case 69:
                    var1 = _closure1_slot24;
                    var1 = var1.bind(var0)();
                    if (!var1) {
                        _fun118074_ip = 93;
                        continue _fun118074
                    }
                case 80:
                    var1 = function() { // Original name: initializeIndex, environment: var1
                        _fun118075: for (var _fun118075_ip = 0;;) switch (_fun118075_ip) {
                            case 0:
                                var2 = _closure1_slot24;
                                var0 = undefined;
                                var2 = var2.bind(var0)();
                                if (!var2) {
                                    _fun118075_ip = 174;
                                    continue _fun118075
                                }
                            case 19:
                                var3 = _closure1_slot10;
                                var2 = var3.getGuildsArray;
                                var4 = var2.bind(var3)();
                                var3 = var4.map;
                                var2 = function(arg0) { // Environment: var2
                                    var2 = _closure1_slot29;
                                    var1 = undefined;
                                    var0 = arg0;
                                    var0 = var2.bind(var1)(var0);
                                    return var0;
                                };
                                var3 = var3.bind(var4)(var2);
                                var5 = new Array(0);
                                var4 = _closure1_slot9;
                                var2 = var4.getMutablePrivateChannels;
                                var9 = var2.bind(var4)();
                                var7 = var9;
                                for (var2 in var7)
                                    case 81: {
                                        case 90: var10 = var2;
                                        var12 = var9[var10];
                                        var11 = var5.push;
                                        var10 = _closure1_slot27;
                                        var10 = var10.bind(var0)(var12);
                                        var10 = var11.bind(var5)(var10);
                                        _fun118075_ip = 81;
                                        continue _fun118075;
                                    }
                            case 118:
                                var4 = var3.push;
                                var2 = {};
                                var6 = _closure1_slot15;
                                var2.id = var6;
                                var2.items = var5;
                                var2 = var4.bind(var3)(var2);
                                var2 = _closure1_slot1;
                                var4 = _closure1_slot2;
                                var1 = 14;
                                var1 = var4[var1];
                                var2 = var2.bind(var0)(var1);
                                var1 = var2.indexDomains;
                                var1 = var1.bind(var2)(var3);
                            case 174:
                                return var0;
                        }
                    };
                    var1 = var1.bind(var0)();
                case 93:
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(11);
        var0[0] = var4;
        var4 = {};
        var6 = 'handleLogout';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            _fun118077: for (var _fun118077_ip = 0;;) switch (_fun118077_ip) {
                case 0:
                    var2 = _closure1_slot25;
                    var0 = undefined;
                    var2 = var2.bind(var0)();
                    if (!var2) {
                        _fun118077_ip = 46;
                        continue _fun118077
                    }
                case 16:
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 14;
                    var1 = var3[var1];
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.clearSearchIndex;
                    var1 = var1.bind(var2)();
                case 46:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'handleChannelSelect';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            var0 = arg0;
            var2 = var0.channelId;
            var1 = _closure1_slot31;
            var0 = undefined;
            var1 = var1.bind(var0)(var2);
            return var0;
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'handleChannelCreate';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun118079: for (var _fun118079_ip = 0;;) switch (_fun118079_ip) {
                case 0:
                    var0 = arg0;
                    var7 = var0.channel;
                    var1 = _closure1_slot24;
                    var0 = undefined;
                    var1 = var1.bind(var0)();
                    if (!var1) {
                        _fun118079_ip = 197;
                        continue _fun118079
                    }
                case 27:
                    var3 = _closure1_slot11;
                    var2 = var3.can;
                    var1 = _closure1_slot18;
                    var1 = var1.VIEW_CHANNEL;
                    var1 = var2.bind(var3)(var1, var7);
                    if (!var1) {
                        _fun118079_ip = 197;
                        continue _fun118079
                    }
                case 59:
                    var3 = _closure1_slot10;
                    var2 = var3.getGuild;
                    var1 = var7.guild_id;
                    var6 = var2.bind(var3)(var1);
                    var9 = null;
                    if (!(var9 == var6)) {
                        _fun118079_ip = 93;
                        continue _fun118079
                    }
                case 84:
                    var1 = var7.guild_id;
                    if (!(var9 == var1)) {
                        _fun118079_ip = 197;
                        continue _fun118079
                    }
                case 93:
                    var1 = _closure1_slot28;
                    var1 = var1.bind(var0)(var6);
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 14;
                    var2 = var4[var2];
                    var3 = var3.bind(var0)(var2);
                    var2 = var3.indexDomains;
                    var4 = {};
                    var10 = var9 == var6;
                    var8 = undefined;
                    if (var10) {
                        _fun118079_ip = 144;
                        continue _fun118079
                    }
                case 139:
                    var8 = var6.id;
                case 144:
                    if (!(var9 == var8)) {
                        _fun118079_ip = 152;
                        continue _fun118079
                    }
                case 148:
                    var8 = _closure1_slot15;
                case 152:
                    var4.id = var8;
                    var5 = _closure1_slot27;
                    var6 = var5.bind(var0)(var7, var6);
                    var5 = new Array(1);
                    var5[0] = var6;
                    var4.items = var5;
                    var4.defaultThumbnailURL = var1;
                    var1 = new Array(1);
                    var1[0] = var4;
                    var1 = var2.bind(var3)(var1);
                case 197:
                    return var0;
            }
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'handleChannelDelete';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun118080: for (var _fun118080_ip = 0;;) switch (_fun118080_ip) {
                case 0:
                    var0 = arg0;
                    var1 = var0.channel;
                    var3 = _closure1_slot24;
                    var0 = undefined;
                    var3 = var3.bind(var0)();
                    if (!var3) {
                        _fun118080_ip = 68;
                        continue _fun118080
                    }
                case 24:
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 14;
                    var2 = var4[var2];
                    var3 = var3.bind(var0)(var2);
                    var2 = var3.deleteSearchItems;
                    var4 = var1.id;
                    var1 = new Array(1);
                    var1[0] = var4;
                    var1 = var2.bind(var3)(var1);
                case 68:
                    return var0;
            }
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'handleChannelUpdates';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            var0 = arg0;
            var2 = var0.channels;
            var1 = _closure1_slot33;
            var0 = undefined;
            var1 = var1.bind(var0)(var2);
            return var0;
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'handleGuildCreateOrUpdate';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun118082: for (var _fun118082_ip = 0;;) switch (_fun118082_ip) {
                case 0:
                    var0 = arg0;
                    var2 = var0.guild;
                    var6 = var0.type;
                    var3 = _closure1_slot24;
                    var0 = undefined;
                    var3 = var3.bind(var0)();
                    if (!var3) {
                        _fun118082_ip = 160;
                        continue _fun118082
                    }
                case 32:
                    var5 = _closure1_slot10;
                    var4 = var5.getGuild;
                    var3 = var2.id;
                    var5 = var4.bind(var5)(var3);
                    var3 = null;
                    if (!(var3 == var5)) {
                        _fun118082_ip = 103;
                        continue _fun118082
                    }
                case 57:
                    var4 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var3 = 14;
                    var3 = var7[var3];
                    var4 = var4.bind(var0)(var3);
                    var3 = var4.deleteSearchDomains;
                    var7 = var2.id;
                    var2 = new Array(1);
                    var2[0] = var7;
                    var2 = var3.bind(var4)(var2);
                    _fun118082_ip = 160;
                    continue _fun118082;
                case 103:
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 14;
                    var2 = var4[var2];
                    var3 = var3.bind(var0)(var2);
                    var2 = var3.indexDomains;
                    var4 = _closure1_slot29;
                    var1 = 'GUILD_UPDATE';
                    var1 = var1 === var6;
                    var4 = var4.bind(var0)(var5, var1);
                    var1 = new Array(1);
                    var1[0] = var4;
                    var1 = var2.bind(var3)(var1);
                case 160:
                    return var0;
            }
        };
        var4.value = var6;
        var0[6] = var4;
        var4 = {};
        var6 = 'handleGuildDelete';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun118083: for (var _fun118083_ip = 0;;) switch (_fun118083_ip) {
                case 0:
                    var0 = arg0;
                    var1 = var0.guild;
                    var3 = _closure1_slot24;
                    var0 = undefined;
                    var3 = var3.bind(var0)();
                    if (!var3) {
                        _fun118083_ip = 68;
                        continue _fun118083
                    }
                case 24:
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 14;
                    var2 = var4[var2];
                    var3 = var3.bind(var0)(var2);
                    var2 = var3.deleteSearchDomains;
                    var4 = var1.id;
                    var1 = new Array(1);
                    var1[0] = var4;
                    var1 = var2.bind(var3)(var1);
                case 68:
                    return var0;
            }
        };
        var4.value = var6;
        var0[7] = var4;
        var4 = {};
        var6 = 'handleThreadUpdate';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            var0 = arg0;
            var0 = var0.channel;
            var2 = _closure1_slot33;
            var1 = new Array(1);
            var1[0] = var0;
            var0 = undefined;
            var1 = var2.bind(var0)(var1);
            return var0;
        };
        var4.value = var6;
        var0[8] = var4;
        var4 = {};
        var6 = 'handleUserUpdate';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            var0 = arg0;
            var0 = var0.user;
            var2 = _closure1_slot32;
            var1 = var0.id;
            var0 = undefined;
            var1 = var2.bind(var0)(var1);
            return var0;
        };
        var4.value = var6;
        var0[9] = var4;
        var4 = {};
        var6 = 'handleRelationshipChange';
        var4.key = var6;
        var5 = function(arg0) { // Original name: value, environment: var5
            var0 = arg0;
            var0 = var0.relationship;
            var2 = _closure1_slot32;
            var1 = var0.id;
            var0 = undefined;
            var1 = var2.bind(var0)(var1);
            return var0;
        };
        var4.value = var5;
        var0[10] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var1 = var1.bind(var0)(var3);
    var3 = var1.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var1
        }
    });
    var12 = var3;
    var1 = new var12[var1](var11);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 21;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/native_intents/NativeIntentsManager.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 57, 1372, 1410, 3050, 3059, 1661, 1613, 660, 15004, 15005, 4748, 5413, 1417, 1304, 3195, 4256, 2]);