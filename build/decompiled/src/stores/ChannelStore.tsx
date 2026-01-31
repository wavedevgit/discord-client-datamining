// stores/ChannelStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var9
        _fun15852: for (var _fun15852_ip = 0;;) switch (_fun15852_ip) {
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
                _fun15852_ip = 74;
                continue _fun15852;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot40 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot40 = var0;
    var0 = function(arg0, arg1) { // Original name: _createForOfIteratorHelperLoose, environment: var9
        _fun15855: for (var _fun15855_ip = 0;;) switch (_fun15855_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun15855_ip = 46;
                    continue _fun15855
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun15855_ip = 55;
                    continue _fun15855
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun15855_ip = 343;
                    continue _fun15855
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun15855_ip = 323;
                    continue _fun15855
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun15855_ip = 283;
                    continue _fun15855
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun15855_ip = 270;
                    continue _fun15855
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
                    _fun15855_ip = 163;
                    continue _fun15855
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun15855_ip = 179;
                    continue _fun15855
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun15855_ip = 249;
                    continue _fun15855
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun15855_ip = 249;
                    continue _fun15855
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun15855_ip = 234;
                    continue _fun15855
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun15855_ip = 247;
                    continue _fun15855
                }
            case 234:
                var8 = _closure1_slot42;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun15855_ip = 265;
                continue _fun15855;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun15855_ip = 283;
                continue _fun15855;
            case 270:
                var6 = _closure1_slot42;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun15855_ip = 323;
                    continue _fun15855
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
                    _fun15855_ip = 330;
                    continue _fun15855
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun15856: for (var _fun15856_ip = 0;;) switch (_fun15856_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun15856_ip = 56;
                                continue _fun15856
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
                            _fun15856_ip = 67;
                            continue _fun15856;
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
    var _closure1_slot41 = var0;
    var0 = function(arg0, arg1) { // Original name: _arrayLikeToArray, environment: var9
        _fun15857: for (var _fun15857_ip = 0;;) switch (_fun15857_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun15857_ip = 23;
                    continue _fun15857
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun15857_ip = 33;
                    continue _fun15857
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
                    _fun15857_ip = 70;
                    continue _fun15857
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun15857_ip = 55;
                    continue _fun15857
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot42 = var0;
    var0 = function(arg0, arg1, arg2) { // Original name: ensureGuildLoaded, environment: var9
        _fun15858: for (var _fun15858_ip = 0;;) switch (_fun15858_ip) {
            case 0:
                var7 = arg0;
                var8 = arg1;
                var _closure2_slot0 = var7;
                var2 = null;
                if (!(var2 != var7)) {
                    _fun15858_ip = 667;
                    continue _fun15858
                }
            case 21:
                var0 = 'null';
                if (!(var0 !== var7)) {
                    _fun15858_ip = 667;
                    continue _fun15858
                }
            case 32:
                var4 = _closure1_slot34;
                var0 = var4.has;
                var0 = var0.bind(var4)(var7);
                if (var0) {
                    _fun15858_ip = 667;
                    continue _fun15858
                }
            case 55:
                var0 = _closure1_slot39;
                var0 = var0.Basic;
                if (!(var8 === var0)) {
                    _fun15858_ip = 90;
                    continue _fun15858
                }
            case 69:
                var4 = _closure1_slot10;
                var0 = var4.hasGuild;
                var0 = var0.bind(var4)(var7);
                if (var0) {
                    _fun15858_ip = 667;
                    continue _fun15858
                }
            case 90:
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var0 = 16;
                var0 = var5[var0];
                var9 = undefined;
                var4 = var4.bind(var9)(var0);
                var0 = var4.database;
                var6 = var0.bind(var4)();
                var _closure2_slot1 = var6;
                if (!(var2 != var6)) {
                    _fun15858_ip = 667;
                    continue _fun15858
                }
            case 133:
                var11 = _closure1_slot22;
                var10 = var11.verbose;
                var0 = global;
                var4 = var0.HermesInternal;
                var14 = var4.concat;
                var21 = 'hydrating guild (guild: ';
                var19 = ', trace: ';
                var18 = arg2;
                var5 = ')';
                var20 = var7;
                var17 = var5;
                var4 = var21[var14](var20, var19, var18, var17, var16);
                var4 = var10.bind(var11)(var4);
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var4 = 17;
                var4 = var11[var4];
                var12 = var10.bind(var9)(var4);
                var11 = var12.tryLoadOrResetCacheGateway;
                var4 = var0.HermesInternal;
                var10 = var4.concat;
                var4 = 'ensureGuildLoaded(';
                var10 = var10.bind(var4)(var7, var5);
                var4 = function() { // Environment: var3
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 18;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.getSync;
                    var1 = _closure2_slot1;
                    var0 = _closure2_slot0;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var3 = 'ensureGuildLoaded';
                var4 = var11.bind(var12)(var10, var4, var3);
                if (!(var2 != var4)) {
                    _fun15858_ip = 584;
                    continue _fun15858
                }
            case 264:
                var3 = _closure1_slot6;
                var2 = 2;
                var3 = var3.bind(var9)(var4, var2);
                var2 = 0;
                var2 = var3[var2];
                var4 = 1;
                var11 = var3[var4];
                var10 = _closure1_slot1;
                var12 = _closure1_slot2;
                var3 = 20;
                var3 = var12[var3];
                var3 = var10.bind(var9)(var3);
                var3 = var3.bind(var9)(var2);
                var3 = _closure1_slot39;
                var3 = var3.Basic;
                if (!(var8 !== var3)) {
                    _fun15858_ip = 341;
                    continue _fun15858
                }
            case 329:
                var3 = _closure1_slot38;
                var3 = var3 + var4;
                _closure1_slot38 = var3;
            case 341:
                var4 = _closure1_slot34;
                var3 = var4.add;
                var3 = var3.bind(var4)(var7);
                var4 = _closure1_slot10;
                var3 = var4.restored;
                var3 = var3.bind(var4)(var7);
                var4 = _closure1_slot1;
                var8 = _closure1_slot2;
                var3 = 21;
                var3 = var8[var3];
                var10 = var4.bind(var9)(var3);
                var8 = var10.mark;
                var3 = var0.HermesInternal;
                var4 = var3.concat;
                var3 = 'loaded guild channels (guild: ';
                var4 = var4.bind(var3)(var7, var5);
                var3 = '❗';
                var3 = var8.bind(var10)(var3, var4, var11);
                var3 = _closure1_slot41;
                var8 = var3.bind(var9)(var2);
                var4 = var8.bind(var9)();
                var3 = var4.done;
                if (var3) {
                    _fun15858_ip = 519;
                    continue _fun15858
                }
            case 451:
                var11 = var4.value;
                var13 = var0.Object;
                var12 = var13.hasOwn;
                var10 = _closure1_slot24;
                var3 = var11.id;
                var3 = var12.bind(var13)(var10, var3);
                if (var3) {
                    _fun15858_ip = 504;
                    continue _fun15858
                }
            case 486:
                var10 = _closure1_slot51;
                var3 = _closure1_slot17;
                var3 = var3.bind(var9)(var11);
                var3 = var10.bind(var9)(var3);
            case 504:
                var10 = var8.bind(var9)();
                var3 = var10.done;
                var4 = var10;
                if (!var3) {
                    _fun15858_ip = 451;
                    continue _fun15858
                }
            case 519:
                var4 = _closure1_slot22;
                var3 = var4.verbose;
                var18 = var2.length;
                var16 = _closure1_slot38;
                var2 = var0.HermesInternal;
                var10 = var2.concat;
                var21 = 'hydration complete (guild: ';
                var19 = ', channels: ';
                var17 = ', guilds_loaded: ';
                var20 = var7;
                var15 = var5;
                var2 = var21[var10](var20, var19, var18, var17, var16, var15, var14);
                var2 = var3.bind(var4)(var2);
                _fun15858_ip = 667;
                continue _fun15858;
            case 584:
                var3 = _closure1_slot34;
                var2 = var3.add;
                var2 = var2.bind(var3)(var7);
                var3 = _closure1_slot10;
                var2 = var3.restored;
                var2 = var2.bind(var3)(var7);
                var2 = _closure1_slot22;
                var1 = var2.log;
                var0 = var0.HermesInternal;
                var4 = var0.concat;
                var21 = 'load returned null; early returning (guild: ';
                var19 = ', database: ';
                var20 = var7;
                var18 = var6;
                var17 = var5;
                var0 = var21[var4](var20, var19, var18, var17, var16);
                var0 = var1.bind(var2)(var0);
                var0 = undefined;
                return var0;
            case 667:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot43 = var0;
    var0 = function(arg0, arg1, arg2) { // Original name: ensureChannelLoaded, environment: var9
        _fun15860: for (var _fun15860_ip = 0;;) switch (_fun15860_ip) {
            case 0:
                var3 = arg0;
                var4 = arg1;
                var0 = global;
                var6 = var0.Object;
                var5 = var6.hasOwn;
                var2 = _closure1_slot24;
                var2 = var5.bind(var6)(var2, var3);
                if (var2) {
                    _fun15860_ip = 184;
                    continue _fun15860
                }
            case 39:
                var6 = var0.Object;
                var5 = var6.hasOwn;
                var2 = _closure1_slot26;
                var2 = var5.bind(var6)(var2, var3);
                if (var2) {
                    _fun15860_ip = 184;
                    continue _fun15860
                }
            case 64:
                var6 = var0.Object;
                var5 = var6.hasOwn;
                var2 = _closure1_slot28;
                var2 = var5.bind(var6)(var2, var3);
                if (var2) {
                    _fun15860_ip = 184;
                    continue _fun15860
                }
            case 89:
                var5 = var0.Object;
                var2 = var5.hasOwn;
                var0 = _closure1_slot33;
                var0 = var2.bind(var5)(var0, var3);
                if (var0) {
                    _fun15860_ip = 184;
                    continue _fun15860
                }
            case 114:
                var0 = _closure1_slot39;
                var0 = var0.Full;
                if (!(var4 === var0)) {
                    _fun15860_ip = 184;
                    continue _fun15860
                }
            case 128:
                var2 = _closure1_slot10;
                var0 = var2.getBasicChannel;
                var0 = var0.bind(var2)(var3);
                var5 = null;
                var6 = var5 == var0;
                var3 = undefined;
                var2 = undefined;
                if (var6) {
                    _fun15860_ip = 161;
                    continue _fun15860
                }
            case 156:
                var2 = var0.guild_id;
            case 161:
                if (!(var5 != var2)) {
                    _fun15860_ip = 184;
                    continue _fun15860
                }
            case 165:
                var2 = _closure1_slot43;
                var1 = var0.guild_id;
                var0 = arg2;
                var0 = var2.bind(var3)(var1, var4, var0);
            case 184:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot44 = var0;
    var0 = function(arg0) { // Original name: deleteGuildChannels, environment: var9
        _fun15861: for (var _fun15861_ip = 0;;) switch (_fun15861_ip) {
            case 0:
                var1 = arg0;
                var4 = _closure1_slot22;
                var3 = var4.fileOnly;
                var2 = global;
                var2 = var2.HermesInternal;
                var5 = var2.concat;
                var2 = 'Deleting guild channels for ';
                var2 = var5.bind(var2)(var1);
                var2 = var3.bind(var4)(var2);
                var2 = _closure1_slot25;
                var2 = var2[var1];
                var3 = null;
                if (!(var3 != var2)) {
                    _fun15861_ip = 156;
                    continue _fun15861
                }
            case 59:
                var4 = _closure1_slot41;
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var2 = 22;
                var2 = var6[var2];
                var6 = undefined;
                var7 = var5.bind(var6)(var2);
                var5 = var7.keys;
                var2 = _closure1_slot25;
                var2 = var2[var1];
                var2 = var5.bind(var7)(var2);
                var5 = var4.bind(var6)(var2);
                var4 = var5.bind(var6)();
                var2 = var4.done;
                if (var2) {
                    _fun15861_ip = 148;
                    continue _fun15861
                }
            case 120:
                var7 = var4.value;
                var2 = _closure1_slot24;
                var2 = delete var2[var7];
                var7 = var5.bind(var6)();
                var2 = var7.done;
                var4 = var7;
                if (!var2) {
                    _fun15861_ip = 120;
                    continue _fun15861
                }
            case 148:
                var2 = _closure1_slot25;
                var2 = delete var2[var1];
            case 156:
                var2 = _closure1_slot29;
                var2 = var2[var1];
                if (!(var3 != var2)) {
                    _fun15861_ip = 176;
                    continue _fun15861
                }
            case 168:
                var0 = _closure1_slot29;
                var0 = delete var0[var1];
            case 176:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot45 = var0;
    var0 = function(arg0) { // Original name: _getBasicChannel2, environment: var9
        _fun15862: for (var _fun15862_ip = 0;;) switch (_fun15862_ip) {
            case 0:
                var3 = arg0;
                var5 = _closure1_slot44;
                var0 = _closure1_slot39;
                var4 = var0.Basic;
                var2 = undefined;
                var0 = 'getBasicChannel';
                var0 = var5.bind(var2)(var3, var4, var0);
                var0 = _closure1_slot24;
                var0 = var0[var3];
                var2 = null;
                if (!(var2 == var0)) {
                    _fun15862_ip = 55;
                    continue _fun15862
                }
            case 47:
                var4 = _closure1_slot26;
                var0 = var4[var3];
            case 55:
                if (!(var2 == var0)) {
                    _fun15862_ip = 67;
                    continue _fun15862
                }
            case 59:
                var4 = _closure1_slot28;
                var0 = var4[var3];
            case 67:
                if (!(var2 == var0)) {
                    _fun15862_ip = 79;
                    continue _fun15862
                }
            case 71:
                var4 = _closure1_slot33;
                var0 = var4[var3];
            case 79:
                if (!(var2 == var0)) {
                    _fun15862_ip = 98;
                    continue _fun15862
                }
            case 83:
                var2 = _closure1_slot10;
                var1 = var2.getBasicChannel;
                var0 = var1.bind(var2)(var3);
            case 98:
                return var0;
        }
    };
    var _closure1_slot46 = var0;
    var0 = function(arg0) { // Original name: _getChannel, environment: var9
        _fun15863: for (var _fun15863_ip = 0;;) switch (_fun15863_ip) {
            case 0:
                var2 = arg0;
                var5 = _closure1_slot44;
                var0 = _closure1_slot39;
                var4 = var0.Full;
                var3 = undefined;
                var0 = 'getChannel';
                var0 = var5.bind(var3)(var2, var4, var0);
                var0 = _closure1_slot24;
                var0 = var0[var2];
                var3 = null;
                if (!(var3 == var0)) {
                    _fun15863_ip = 55;
                    continue _fun15863
                }
            case 47:
                var4 = _closure1_slot26;
                var0 = var4[var2];
            case 55:
                if (!(var3 == var0)) {
                    _fun15863_ip = 67;
                    continue _fun15863
                }
            case 59:
                var4 = _closure1_slot28;
                var0 = var4[var2];
            case 67:
                if (!(var3 == var0)) {
                    _fun15863_ip = 79;
                    continue _fun15863
                }
            case 71:
                var4 = _closure1_slot33;
                var0 = var4[var2];
            case 79:
                if (!(var3 == var0)) {
                    _fun15863_ip = 91;
                    continue _fun15863
                }
            case 83:
                var1 = _closure1_slot37;
                var0 = var1[var2];
            case 91:
                return var0;
        }
    };
    var _closure1_slot47 = var0;
    var0 = function(arg0) { // Original name: setChannel, environment: var9
        _fun15864: for (var _fun15864_ip = 0;;) switch (_fun15864_ip) {
            case 0:
                var2 = arg0;
                var0 = var2.isPrivate;
                var1 = var0.bind(var2)();
                if (var1) {
                    _fun15864_ip = 80;
                    continue _fun15864
                }
            case 19:
                var1 = var2.isThread;
                var1 = var1.bind(var2)();
                if (var1) {
                    _fun15864_ip = 67;
                    continue _fun15864
                }
            case 32:
                var4 = _closure1_slot14;
                var3 = var4.has;
                var1 = var2.type;
                var1 = var3.bind(var4)(var1);
                if (!var1) {
                    _fun15864_ip = 104;
                    continue _fun15864
                }
            case 54:
                var3 = _closure1_slot51;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                _fun15864_ip = 104;
                continue _fun15864;
            case 67:
                var3 = _closure1_slot50;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                _fun15864_ip = 104;
                continue _fun15864;
            case 80:
                var3 = _closure1_slot37;
                var1 = var2.id;
                var1 = delete var3[var1];
                var1 = _closure1_slot49;
                var0 = undefined;
                var0 = var1.bind(var0)(var2);
            case 104:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot48 = var0;
    var0 = function(arg0) { // Original name: setPrivateChannel, environment: var9
        _fun15865: for (var _fun15865_ip = 0;;) switch (_fun15865_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.recipients;
                var2 = var3.find;
                var1 = function(arg0) { // Environment: var1
                    var1 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 23;
                    var0 = var2[var0];
                    var2 = undefined;
                    var1 = var1.bind(var2)(var0);
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var2 = var2.bind(var3)(var1);
                var1 = null;
                if (!(var1 == var2)) {
                    _fun15865_ip = 109;
                    continue _fun15865
                }
            case 32:
                var3 = _closure1_slot26;
                var2 = var0.id;
                var3[var2] = var0;
                var3 = var0.type;
                var2 = _closure1_slot21;
                var2 = var2.DM;
                if (!(var3 === var2)) {
                    _fun15865_ip = 90;
                    continue _fun15865
                }
            case 67:
                var3 = _closure1_slot30;
                var2 = var0.getRecipientId;
                var2 = var2.bind(var0)();
                var0 = var0.id;
                var3[var2] = var0;
            case 90:
                var2 = _closure1_slot31;
                var0 = 1;
                var0 = var2 + var0;
                _closure1_slot31 = var0;
                var0 = undefined;
                return var0;
            case 109:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot49 = var0;
    var0 = function(arg0) { // Original name: setThread, environment: var9
        _fun15867: for (var _fun15867_ip = 0;;) switch (_fun15867_ip) {
            case 0:
                var4 = arg0;
                var2 = _closure1_slot24;
                var0 = var4.parent_id;
                var8 = var2[var0];
                var5 = _closure1_slot28;
                var3 = var4.id;
                var6 = var4.merge;
                var2 = {};
                var7 = null;
                var9 = var7 == var8;
                var0 = undefined;
                var10 = undefined;
                if (var9) {
                    _fun15867_ip = 56;
                    continue _fun15867
                }
            case 50:
                var10 = var8.nsfw;
            case 56:
                var9 = true;
                var9 = var9 === var10;
                var2.nsfw = var9;
                var9 = var7 == var8;
                var7 = undefined;
                if (var9) {
                    _fun15867_ip = 81;
                    continue _fun15867
                }
            case 76:
                var7 = var8.type;
            case 81:
                var2.parentChannelThreadType = var7;
                var2 = var6.bind(var4)(var2);
                var5[var3] = var2;
                var2 = var4.isScheduledForDeletion;
                var2 = var2.bind(var4)();
                if (!var2) {
                    _fun15867_ip = 152;
                    continue _fun15867
                }
            case 108:
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 19;
                var1 = var3[var1];
                var3 = var2.bind(var0)(var1);
                var2 = var3.dispatch;
                var1 = {};
                var5 = 'THREAD_DELETE';
                var1.type = var5;
                var1.channel = var4;
                var1 = var2.bind(var3)(var1);
            case 152:
                return var0;
        }
    };
    var _closure1_slot50 = var0;
    var0 = function(arg0) { // Original name: setGuildChannelRaw, environment: var9
        _fun15868: for (var _fun15868_ip = 0;;) switch (_fun15868_ip) {
            case 0:
                var2 = arg0;
                var1 = var2.id;
                var3 = var2.guild_id;
                var4 = _closure1_slot24;
                var4[var1] = var2;
                var5 = _closure1_slot25;
                var4 = var5[var3];
                var6 = null;
                if (!(var6 == var4)) {
                    _fun15868_ip = 40;
                    continue _fun15868
                }
            case 38:
                var4 = {};
            case 40:
                var5[var3] = var4;
                var4 = _closure1_slot25;
                var4 = var4[var3];
                var4[var1] = var2;
                var5 = _closure1_slot32;
                var4 = var5[var3];
                var8 = var6 != var4;
                var7 = 0;
                if (!var8) {
                    _fun15868_ip = 76;
                    continue _fun15868
                }
            case 73:
                var7 = var4;
            case 76:
                var4 = 1;
                var4 = var7 + var4;
                var5[var3] = var4;
                var4 = var2.linkedLobby;
                if (!(var6 == var4)) {
                    _fun15868_ip = 115;
                    continue _fun15868
                }
            case 97:
                var4 = _closure1_slot29;
                var4 = var4[var3];
                if (!(var6 != var4)) {
                    _fun15868_ip = 145;
                    continue _fun15868
                }
            case 109:
                var4 = delete var4[var1];
                _fun15868_ip = 145;
                continue _fun15868;
            case 115:
                var5 = _closure1_slot29;
                var4 = var5[var3];
                if (!(var6 == var4)) {
                    _fun15868_ip = 129;
                    continue _fun15868
                }
            case 127:
                var4 = {};
            case 129:
                var5[var3] = var4;
                var0 = _closure1_slot29;
                var0 = var0[var3];
                var0[var1] = var2;
            case 145:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot51 = var0;
    var0 = function(arg0) { // Original name: handleOneGuildCreate, environment: var9
        _fun15869: for (var _fun15869_ip = 0;;) switch (_fun15869_ip) {
            case 0:
                var1 = arg0;
                var6 = var1.id;
                var0 = var1.channels;
                var1 = var1.threads;
                var3 = var0.op;
                var2 = 'full_sync';
                if (!(var2 !== var3)) {
                    _fun15869_ip = 238;
                    continue _fun15869
                }
            case 38:
                var2 = 'update';
                if (!(var2 === var3)) {
                    _fun15869_ip = 393;
                    continue _fun15869
                }
            case 49:
                var2 = var0.writes;
                var2 = var2.length;
                var4 = 0;
                var2 = var2 > var4;
                if (var2) {
                    _fun15869_ip = 84;
                    continue _fun15869
                }
            case 69:
                var3 = var0.deletes;
                var3 = var3.length;
                var2 = var3 > var4;
            case 84:
                if (!var2) {
                    _fun15869_ip = 105;
                    continue _fun15869
                }
            case 87:
                var3 = _closure1_slot10;
                var2 = var3.invalidate;
                var2 = var2.bind(var3)(var6);
            case 105:
                var3 = _closure1_slot41;
                var2 = var0.deletes;
                var5 = undefined;
                var4 = var3.bind(var5)(var2);
                var3 = var4.bind(var5)();
                var2 = var3.done;
                if (var2) {
                    _fun15869_ip = 174;
                    continue _fun15869
                }
            case 137:
                var9 = var3.value;
                var8 = _closure1_slot53;
                var2 = _closure1_slot24;
                var2 = var2[var9];
                var2 = var8.bind(var5)(var2);
                var8 = var4.bind(var5)();
                var2 = var8.done;
                var3 = var8;
                if (!var2) {
                    _fun15869_ip = 137;
                    continue _fun15869
                }
            case 174:
                var3 = _closure1_slot41;
                var2 = var0.writes;
                var4 = var3.bind(var5)(var2);
                var3 = var4.bind(var5)();
                var2 = var3.done;
                if (var2) {
                    _fun15869_ip = 393;
                    continue _fun15869
                }
            case 204:
                var8 = _closure1_slot51;
                var2 = var3.value;
                var2 = var8.bind(var5)(var2);
                var8 = var4.bind(var5)();
                var2 = var8.done;
                var3 = var8;
                if (var2) {
                    _fun15869_ip = 393;
                    continue _fun15869
                }
            case 236:
                _fun15869_ip = 204;
                continue _fun15869;
            case 238:
                var4 = _closure1_slot22;
                var3 = var4.fileOnly;
                var2 = var0.items;
                var9 = var2.length;
                var2 = global;
                var2 = var2.HermesInternal;
                var8 = var2.concat;
                var7 = 'ConnectionOpen contained full channels for ';
                var2 = ' #:';
                var2 = var8.bind(var7)(var6, var2, var9);
                var2 = var3.bind(var4)(var2);
                var2 = _closure1_slot45;
                var4 = undefined;
                var2 = var2.bind(var4)(var6);
                var3 = _closure1_slot34;
                var2 = var3.add;
                var2 = var2.bind(var3)(var6);
                var3 = _closure1_slot10;
                var2 = var3.restored;
                var2 = var2.bind(var3)(var6);
                var2 = _closure1_slot41;
                var0 = var0.items;
                var3 = var2.bind(var4)(var0);
                var2 = var3.bind(var4)();
                var0 = var2.done;
                if (var0) {
                    _fun15869_ip = 393;
                    continue _fun15869
                }
            case 364:
                var6 = _closure1_slot51;
                var0 = var2.value;
                var0 = var6.bind(var4)(var0);
                var6 = var3.bind(var4)();
                var0 = var6.done;
                var2 = var6;
                if (!var0) {
                    _fun15869_ip = 364;
                    continue _fun15869
                }
            case 393:
                var0 = null;
                if (!(var0 != var1)) {
                    _fun15869_ip = 454;
                    continue _fun15869
                }
            case 399:
                var0 = _closure1_slot41;
                var3 = undefined;
                var2 = var0.bind(var3)(var1);
                var1 = var2.bind(var3)();
                var0 = var1.done;
                if (var0) {
                    _fun15869_ip = 454;
                    continue _fun15869
                }
            case 425:
                var5 = _closure1_slot50;
                var0 = var1.value;
                var0 = var5.bind(var3)(var0);
                var5 = var2.bind(var3)();
                var0 = var5.done;
                var1 = var5;
                if (!var0) {
                    _fun15869_ip = 425;
                    continue _fun15869
                }
            case 454:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot52 = var0;
    var4 = function(arg0) { // Original name: handleThreadCreateOrUpdate, environment: var9
        _fun15870: for (var _fun15870_ip = 0;;) switch (_fun15870_ip) {
            case 0:
                var3 = arg0;
                var4 = _closure1_slot16;
                var2 = var4.has;
                var0 = var3.channel;
                var0 = var0.type;
                var0 = var2.bind(var4)(var0);
                if (var0) {
                    _fun15870_ip = 37;
                    continue _fun15870
                }
            case 33:
                var0 = false;
                return var0;
            case 37:
                var4 = _closure1_slot47;
                var0 = var3.channel;
                var2 = var0.id;
                var0 = undefined;
                var5 = var4.bind(var0)(var2);
                var6 = null;
                if (!(var6 != var5)) {
                    _fun15870_ip = 131;
                    continue _fun15870
                }
            case 64:
                var4 = var5.merge;
                var2 = {};
                var8 = var3.channel;
                var7 = var8.toJS;
                var9 = var7.bind(var8)();
                var10 = var2;
                var7 = copyDataProperties(var10, var9);
                var7 = var3.channel;
                var7 = var7.bitrate;
                if (!(var6 == var7)) {
                    _fun15870_ip = 115;
                    continue _fun15870
                }
            case 109:
                var7 = var5.bitrate;
            case 115:
                var6 = 'bitrate';
                var2[var6] = var7;
                var2 = var4.bind(var5)(var2);
                _fun15870_ip = 136;
                continue _fun15870;
            case 131:
                var2 = var3.channel;
            case 136:
                var1 = _closure1_slot48;
                var1 = var1.bind(var0)(var2);
                return var0;
        }
    };
    var12 = function(arg0) { // Original name: handleLoadArchivedThreadsSuccess, environment: var9
        var0 = arg0;
        var2 = var0.threads;
        var1 = var2.forEach;
        var0 = function(arg0) { // Environment: var0
            _fun15872: for (var _fun15872_ip = 0;;) switch (_fun15872_ip) {
                case 0:
                    var3 = arg0;
                    var4 = _closure1_slot16;
                    var2 = var4.has;
                    var1 = var3.type;
                    var1 = var2.bind(var4)(var1);
                    if (!var1) {
                        _fun15872_ip = 48;
                        continue _fun15872
                    }
                case 28:
                    var2 = _closure1_slot48;
                    var0 = _closure1_slot12;
                    var1 = undefined;
                    var0 = var0.bind(var1)(var3);
                    var0 = var2.bind(var1)(var0);
                case 48:
                    var0 = undefined;
                    return var0;
            }
        };
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var0 = function(arg0) { // Original name: deleteChannel, environment: var9
        _fun15873: for (var _fun15873_ip = 0;;) switch (_fun15873_ip) {
            case 0:
                var0 = arg0;
                var5 = null;
                if (!(var5 != var0)) {
                    _fun15873_ip = 327;
                    continue _fun15873
                }
            case 12:
                var3 = var0.guild_id;
                var4 = var0.id;
                var2 = _closure1_slot26;
                var2 = var4 in var2;
                if (!var2) {
                    _fun15873_ip = 49;
                    continue _fun15873
                }
            case 36:
                var4 = _closure1_slot26;
                var2 = var0.id;
                var2 = delete var4[var2];
            case 49:
                var4 = var0.id;
                var2 = _closure1_slot24;
                var2 = var4 in var2;
                if (!var2) {
                    _fun15873_ip = 78;
                    continue _fun15873
                }
            case 65:
                var4 = _closure1_slot24;
                var2 = var0.id;
                var2 = delete var4[var2];
            case 78:
                var4 = var0.id;
                var2 = _closure1_slot28;
                var2 = var4 in var2;
                if (!var2) {
                    _fun15873_ip = 107;
                    continue _fun15873
                }
            case 94:
                var4 = _closure1_slot28;
                var2 = var0.id;
                var2 = delete var4[var2];
            case 107:
                if (!(var5 != var3)) {
                    _fun15873_ip = 215;
                    continue _fun15873
                }
            case 111:
                var2 = _closure1_slot25;
                var2 = var2[var3];
                var2 = var5 != var2;
                if (!var2) {
                    _fun15873_ip = 143;
                    continue _fun15873
                }
            case 126:
                var6 = var0.id;
                var4 = _closure1_slot25;
                var4 = var4[var3];
                var2 = var6 in var4;
            case 143:
                if (!var2) {
                    _fun15873_ip = 163;
                    continue _fun15873
                }
            case 146:
                var2 = _closure1_slot25;
                var4 = var2[var3];
                var2 = var0.id;
                var2 = delete var4[var2];
            case 163:
                var2 = _closure1_slot29;
                var2 = var2[var3];
                var2 = var5 != var2;
                if (!var2) {
                    _fun15873_ip = 195;
                    continue _fun15873
                }
            case 178:
                var6 = var0.id;
                var4 = _closure1_slot29;
                var4 = var4[var3];
                var2 = var6 in var4;
            case 195:
                if (!var2) {
                    _fun15873_ip = 215;
                    continue _fun15873
                }
            case 198:
                var2 = _closure1_slot29;
                var3 = var2[var3];
                var2 = var0.id;
                var2 = delete var3[var2];
            case 215:
                var2 = var0.guild_id;
                if (!(var5 != var2)) {
                    _fun15873_ip = 293;
                    continue _fun15873
                }
            case 224:
                var4 = _closure1_slot15;
                var3 = var4.has;
                var2 = var0.type;
                var2 = var3.bind(var4)(var2);
                if (var2) {
                    _fun15873_ip = 293;
                    continue _fun15873
                }
            case 246:
                var4 = _closure1_slot32;
                var3 = var0.guild_id;
                var6 = _closure1_slot32;
                var2 = var0.guild_id;
                var2 = var6[var2];
                var6 = var5 != var2;
                var5 = 0;
                if (!var6) {
                    _fun15873_ip = 280;
                    continue _fun15873
                }
            case 277:
                var5 = var2;
            case 280:
                var2 = 1;
                var2 = var5 + var2;
                var4[var3] = var2;
                _fun15873_ip = 327;
                continue _fun15873;
            case 293:
                var3 = _closure1_slot13;
                var2 = var0.type;
                var0 = undefined;
                var0 = var3.bind(var0)(var2);
                if (!var0) {
                    _fun15873_ip = 327;
                    continue _fun15873
                }
            case 312:
                var2 = _closure1_slot31;
                var0 = 1;
                var0 = var2 + var0;
                _closure1_slot31 = var0;
            case 327:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot53 = var0;
    var10 = function(arg0) { // Original name: handleDeleteChannel, environment: var9
        _fun15874: for (var _fun15874_ip = 0;;) switch (_fun15874_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.channel;
                var3 = _closure1_slot24;
                var0 = var2.id;
                var3 = var3[var0];
                var0 = null;
                if (!(var0 == var3)) {
                    _fun15874_ip = 43;
                    continue _fun15874
                }
            case 30:
                var5 = _closure1_slot26;
                var4 = var2.id;
                var3 = var5[var4];
            case 43:
                if (!(var0 == var3)) {
                    _fun15874_ip = 60;
                    continue _fun15874
                }
            case 47:
                var4 = _closure1_slot28;
                var2 = var2.id;
                var3 = var4[var2];
            case 60:
                if (!(var0 != var3)) {
                    _fun15874_ip = 142;
                    continue _fun15874
                }
            case 64:
                var2 = _closure1_slot53;
                var0 = undefined;
                var2 = var2.bind(var0)(var3);
                var2 = 'basicPermissions';
                var2 = var2 in var3;
                if (var2) {
                    _fun15874_ip = 140;
                    continue _fun15874
                }
            case 86:
                var4 = var3.type;
                var2 = _closure1_slot21;
                var2 = var2.DM;
                if (!(var4 === var2)) {
                    _fun15874_ip = 140;
                    continue _fun15874
                }
            case 105:
                var2 = var3.getRecipientId;
                var2 = var2.bind(var3)();
                var4 = _closure1_slot30;
                var4 = var4[var2];
                var3 = var3.id;
                if (!(var4 === var3)) {
                    _fun15874_ip = 140;
                    continue _fun15874
                }
            case 132:
                var1 = _closure1_slot30;
                var1 = delete var1[var2];
            case 140:
                return var0;
            case 142:
                var0 = false;
                return var0;
        }
    };
    var13 = function(arg0) { // Original name: handleLoadMessages, environment: var9
        _fun15875: for (var _fun15875_ip = 0;;) switch (_fun15875_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.messages;
                var1 = _closure1_slot41;
                var0 = undefined;
                var4 = var1.bind(var0)(var2);
                var2 = var4.bind(var0)();
                var1 = var2.done;
                var3 = null;
                if (var1) {
                    _fun15875_ip = 147;
                    continue _fun15875
                }
            case 37:
                var1 = var2.value;
                var6 = var1.thread;
                var6 = var3 != var6;
                if (!var6) {
                    _fun15875_ip = 77;
                    continue _fun15875
                }
            case 55:
                var7 = var1.thread;
                var8 = var7.id;
                var7 = _closure1_slot28;
                var7 = var8 in var7;
                var6 = !var7;
            case 77:
                if (!var6) {
                    _fun15875_ip = 105;
                    continue _fun15875
                }
            case 80:
                var9 = _closure1_slot16;
                var8 = var9.has;
                var7 = var1.thread;
                var7 = var7.type;
                var6 = var8.bind(var9)(var7);
            case 105:
                if (!var6) {
                    _fun15875_ip = 132;
                    continue _fun15875
                }
            case 108:
                var6 = _closure1_slot50;
                var7 = _closure1_slot12;
                var1 = var1.thread;
                var1 = var7.bind(var0)(var1);
                var1 = var6.bind(var0)(var1);
            case 132:
                var6 = var4.bind(var0)();
                var1 = var6.done;
                var2 = var6;
                if (!var1) {
                    _fun15875_ip = 37;
                    continue _fun15875
                }
            case 147:
                return var0;
        }
    };
    var11 = function(arg0) { // Original name: handleSearchMessagesSuccess, environment: var9
        var0 = arg0;
        var2 = var0.data;
        var1 = var2.forEach;
        var0 = function(arg0) { // Environment: var0
            var1 = arg0;
            var5 = var1.messages;
            var4 = var1.threads;
            var2 = var1.channels;
            var3 = var5.forEach;
            var1 = function(arg0) { // Environment: var0
                var2 = arg0;
                var1 = var2.forEach;
                var0 = function(arg0) { // Environment: var0
                    var2 = _closure1_slot54;
                    var0 = arg0;
                    var1 = var0.thread;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var0 = var1.bind(var2)(var0);
                var0 = undefined;
                return var0;
            };
            var1 = var3.bind(var5)(var1);
            var3 = var4.forEach;
            var1 = _closure1_slot54;
            var1 = var3.bind(var4)(var1);
            var1 = var2.forEach;
            var0 = function(arg0) { // Environment: var0
                _fun15880: for (var _fun15880_ip = 0;;) switch (_fun15880_ip) {
                    case 0:
                        var4 = arg0;
                        var2 = _closure1_slot12;
                        var0 = undefined;
                        var3 = var2.bind(var0)(var4);
                        var5 = _closure1_slot47;
                        var2 = var4.id;
                        var2 = var5.bind(var0)(var2);
                        var5 = null;
                        var2 = var5 != var2;
                        var6 = _closure1_slot37;
                        var4 = var4.id;
                        var4 = var6[var4];
                        var4 = var5 != var4;
                        var5 = var3.isPrivate;
                        var5 = var5.bind(var3)();
                        if (!var5) {
                            _fun15880_ip = 73;
                            continue _fun15880
                        }
                    case 67:
                        if (!var2) {
                            _fun15880_ip = 87;
                            continue _fun15880
                        }
                    case 70:
                        if (var4) {
                            _fun15880_ip = 87;
                            continue _fun15880
                        }
                    case 73:
                        if (var2) {
                            _fun15880_ip = 100;
                            continue _fun15880
                        }
                    case 76:
                        var2 = _closure1_slot48;
                        var2 = var2.bind(var0)(var3);
                        _fun15880_ip = 100;
                        continue _fun15880;
                    case 87:
                        var2 = _closure1_slot37;
                        var1 = var3.id;
                        var2[var1] = var3;
                    case 100:
                        return var0;
                }
            };
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var0 = function(arg0) { // Original name: addThreadIfMissing, environment: var9
        _fun15881: for (var _fun15881_ip = 0;;) switch (_fun15881_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var0 = var0 != var3;
                if (!var0) {
                    _fun15881_ip = 31;
                    continue _fun15881
                }
            case 12:
                var2 = var3.id;
                var1 = _closure1_slot28;
                var1 = var2 in var1;
                var0 = !var1;
            case 31:
                if (!var0) {
                    _fun15881_ip = 56;
                    continue _fun15881
                }
            case 34:
                var4 = _closure1_slot16;
                var2 = var4.has;
                var1 = var3.type;
                var0 = var2.bind(var4)(var1);
            case 56:
                if (!var0) {
                    _fun15881_ip = 82;
                    continue _fun15881
                }
            case 59:
                var2 = _closure1_slot50;
                var0 = _closure1_slot12;
                var1 = undefined;
                var0 = var0.bind(var1)(var3);
                var0 = var2.bind(var1)(var0);
            case 82:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot54 = var0;
    var0 = function() { // Original name: handleFavoritesUpdate, environment: var9
        _fun15882: for (var _fun15882_ip = 0;;) switch (_fun15882_ip) {
            case 0:
                var0 = {};
                _closure1_slot33 = var0;
                var1 = _closure1_slot11;
                var0 = var1.getFavoriteChannels;
                var5 = var0.bind(var1)();
                var0 = null;
                for (var1 in var5)
                    case 33: {
                        case 42: var9 = var1;
                        var8 = _closure1_slot11;
                        var7 = var8.getCategoryRecord;
                        var8 = var7.bind(var8)(var9);
                        if (var0 == var8) {
                            _fun15882_ip = 33;
                            continue _fun15882
                        }
                        case 64: var7 = _closure1_slot33;
                        var7[var9] = var8;
                        _fun15882_ip = 33;
                        continue _fun15882;
                    }
            case 74:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot55 = var0;
    var0 = function(arg0) { // Original name: guildChannelCount, environment: var9
        _fun15883: for (var _fun15883_ip = 0;;) switch (_fun15883_ip) {
            case 0:
                var4 = arg0;
                var0 = _closure1_slot25;
                var2 = var0[var4];
                var0 = null;
                var2 = var0 == var2;
                if (var2) {
                    _fun15883_ip = 54;
                    continue _fun15883
                }
            case 23:
                var2 = global;
                var3 = var2.Object;
                var2 = var3.keys;
                var1 = _closure1_slot25;
                var1 = var1[var4];
                var1 = var2.bind(var3)(var1);
                var0 = var1.length;
            case 54:
                return var0;
        }
    };
    var _closure1_slot56 = var0;
    var1 = global;
    var14 = var1.Object;
    var8 = var14.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var14)(var2, var0, var3);
    var16 = 0;
    var3 = var6[var16];
    var0 = undefined;
    var3 = var7.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var15 = 1;
    var3 = var6[var15];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var6[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var6[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var6[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var6[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var6[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var6[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 8;
    var3 = var6[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot11 = var3;
    var3 = 9;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var8 = var3.createChannelRecordFromServer;
    var _closure1_slot12 = var8;
    var8 = var3.isPrivate;
    var _closure1_slot13 = var8;
    var8 = var3.GUILD_CHANNEL_TYPES;
    var _closure1_slot14 = var8;
    var8 = var3.THREAD_CHANNEL_TYPES;
    var _closure1_slot15 = var8;
    var8 = var3.ALL_CHANNEL_TYPES;
    var _closure1_slot16 = var8;
    var3 = var3.castChannelRecord;
    var _closure1_slot17 = var3;
    var3 = 10;
    var3 = var6[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot18 = var3;
    var3 = 11;
    var3 = var6[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot19 = var3;
    var3 = 12;
    var3 = var6[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot20 = var3;
    var3 = 13;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var3 = var3.ChannelTypes;
    var _closure1_slot21 = var3;
    var3 = 14;
    var3 = var6[var3];
    var8 = var7.bind(var0)(var3);
    var3 = var8.prototype;
    var14 = Object.create(var3, {
        constructor: {
            value: var8
        }
    });
    var3 = 'ChannelStore';
    var20 = var14;
    var19 = var3;
    var8 = new var20[var8](var19, var18);
    var8 = var8 instanceof Object ? var8 : var14;
    var _closure1_slot22 = var8;
    var8 = {};
    var _closure1_slot23 = var8;
    var8 = {};
    var _closure1_slot24 = var8;
    var8 = {};
    var _closure1_slot25 = var8;
    var8 = {};
    var _closure1_slot26 = var8;
    var8 = null;
    var _closure1_slot27 = var8;
    var8 = {};
    var _closure1_slot28 = var8;
    var8 = {};
    var _closure1_slot29 = var8;
    var8 = {};
    var _closure1_slot30 = var8;
    var _closure1_slot31 = var16;
    var8 = {};
    var _closure1_slot32 = var8;
    var8 = {};
    var _closure1_slot33 = var8;
    var1 = var1.Set;
    var8 = var1.prototype;
    var8 = Object.create(var8, {
        constructor: {
            value: var1
        }
    });
    var20 = var8;
    var1 = new var20[var1](var19);
    var1 = var1 instanceof Object ? var1 : var8;
    var _closure1_slot34 = var1;
    var1 = {};
    var _closure1_slot35 = var1;
    var _closure1_slot36 = var16;
    var1 = {};
    var _closure1_slot37 = var1;
    var _closure1_slot38 = var16;
    var1 = function() { // Environment: var9
        var4 = function() { // Original name: ChannelLoader, environment: var1
            var3 = _closure1_slot8;
            var2 = _closure2_slot0;
            var0 = undefined;
            var1 = this;
            var1 = var3.bind(var0)(var1, var2);
            return var0;
        };
        var _closure2_slot0 = var4;
        var3 = _closure1_slot9;
        var0 = {};
        var2 = 'loadAllMissingChannels';
        var0.key = var2;
        var2 = function() { // Original name: value, environment: var1
            var2 = this;
            var1 = _closure1_slot19;
            var0 = var1.getGuildIds;
            var3 = var0.bind(var1)();
            var1 = var3.filter;
            var0 = function(arg0) { // Environment: var0
                var2 = _closure1_slot34;
                var1 = var2.has;
                var0 = arg0;
                var0 = var1.bind(var2)(var0);
                var0 = !var0;
                return var0;
            };
            var1 = var1.bind(var3)(var0);
            var0 = var2.loadGuildIds;
            var0 = var0.bind(var2)(var1);
            return var0;
        };
        var0.value = var2;
        var2 = new Array(3);
        var2[0] = var0;
        var0 = {};
        var5 = 'loadGuildFromChannelId';
        var0.key = var5;
        var5 = function(arg0) { // Original name: value, environment: var1
            _fun15888: for (var _fun15888_ip = 0;;) switch (_fun15888_ip) {
                case 0:
                    var6 = arg0;
                    var5 = null;
                    var1 = var5 == var6;
                    var0 = null;
                    if (var1) {
                        _fun15888_ip = 66;
                        continue _fun15888
                    }
                case 14:
                    var3 = _closure2_slot0;
                    var2 = var3.loadGuildIds;
                    var1 = _closure1_slot46;
                    var4 = undefined;
                    var1 = var1.bind(var4)(var6);
                    var5 = var5 == var1;
                    if (var5) {
                        _fun15888_ip = 53;
                        continue _fun15888
                    }
                case 48:
                    var4 = var1.guild_id;
                case 53:
                    var1 = new Array(1);
                    var1[0] = var4;
                    var0 = var2.bind(var3)(var1);
                case 66:
                    return var0;
            }
        };
        var0.value = var5;
        var2[1] = var0;
        var0 = {};
        var5 = 'loadGuildIds';
        var0.key = var5;
        var1 = function(arg0) { // Original name: value, environment: var1
            _fun15889: for (var _fun15889_ip = 0;;) switch (_fun15889_ip) {
                case 0:
                    var4 = arg0;
                    var3 = var4.filter;
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var0 = 15;
                    var0 = var5[var0];
                    var5 = undefined;
                    var0 = var6.bind(var5)(var0);
                    var0 = var0.isNotNullish;
                    var6 = var3.bind(var4)(var0);
                    var _closure3_slot0 = var6;
                    var3 = var6.length;
                    var0 = 0;
                    if (!(var0 !== var3)) {
                        _fun15889_ip = 189;
                        continue _fun15889
                    }
                case 64:
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var0 = 16;
                    var0 = var4[var0];
                    var3 = var3.bind(var5)(var0);
                    var0 = var3.database;
                    var3 = var0.bind(var3)();
                    var _closure3_slot1 = var3;
                    var0 = null;
                    if (!(var0 != var3)) {
                        _fun15889_ip = 187;
                        continue _fun15889
                    }
                case 104:
                    var4 = var6.some;
                    var3 = function(arg0) { // Environment: var1
                        var2 = _closure1_slot34;
                        var1 = var2.has;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        var0 = !var0;
                        return var0;
                    };
                    var3 = var4.bind(var6)(var3);
                    if (var3) {
                        _fun15889_ip = 125;
                        continue _fun15889
                    }
                case 123:
                    return var0;
                case 125:
                    var3 = _closure1_slot36;
                    var _closure3_slot2 = var3;
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var3 = 17;
                    var3 = var6[var3];
                    var4 = var4.bind(var5)(var3);
                    var3 = var4.tryLoadOrResetCacheGatewayAsync;
                    var2 = _closure1_slot7;
                    var1 = function*() { // Environment: var1
                        var0 = function*() { // Original name: ?anon_0_, environment: var0
                            _fun15892: for (var _fun15892_ip = 0;;) switch (_fun15892_ip) {
                                case 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 3);
                                    if (var3) {
                                        _fun15892_ip = 395;
                                        continue _fun15892
                                    }
                                case 12:
                                    var4 = undefined;
                                    var7 = undefined;
                                    var8 = undefined;
                                    var9 = undefined;
                                    var5 = undefined;
                                    var6 = undefined;
                                    var12 = _closure3_slot0;
                                    var11 = var12.map;
                                    var3 = function(arg0) { // Environment: var2
                                        _fun15893: for (var _fun15893_ip = 0;;) switch (_fun15893_ip) {
                                            case 0:
                                                var6 = arg0;
                                                var _closure6_slot0 = var6;
                                                var3 = _closure1_slot34;
                                                var0 = var3.has;
                                                var3 = var0.bind(var3)(var6);
                                                var0 = null;
                                                if (var3) {
                                                    _fun15893_ip = 171;
                                                    continue _fun15893
                                                }
                                            case 34:
                                                var3 = _closure1_slot35;
                                                var3 = var3[var6];
                                                if (!(var0 == var3)) {
                                                    _fun15893_ip = 123;
                                                    continue _fun15893
                                                }
                                            case 46:
                                                var5 = _closure1_slot1;
                                                var4 = _closure1_slot2;
                                                var3 = 18;
                                                var4 = var4[var3];
                                                var3 = undefined;
                                                var5 = var5.bind(var3)(var4);
                                                var4 = var5.getAsync;
                                                var3 = _closure3_slot1;
                                                var4 = var4.bind(var5)(var3, var6);
                                                var3 = var4.then;
                                                var2 = function(arg0) { // Environment: var2
                                                    var1 = arg0;
                                                    var4 = _closure1_slot22;
                                                    var3 = var4.fileOnly;
                                                    var2 = _closure6_slot0;
                                                    var7 = var1.length;
                                                    var0 = global;
                                                    var0 = var0.HermesInternal;
                                                    var6 = var0.concat;
                                                    var5 = 'Lazy loaded channels for ';
                                                    var0 = ' #:';
                                                    var0 = var6.bind(var5)(var2, var0, var7);
                                                    var0 = var3.bind(var4)(var0);
                                                    var0 = {};
                                                    var0.guildId = var2;
                                                    var0.channels = var1;
                                                    return var0;
                                                };
                                                var3 = var3.bind(var4)(var2);
                                                var2 = _closure1_slot35;
                                                var2[var6] = var3;
                                                var2 = {};
                                                var2.guildId = var6;
                                                var2.promise = var3;
                                                return var2;
                                            case 123:
                                                var3 = _closure1_slot22;
                                                var2 = var3.fileOnly;
                                                var1 = global;
                                                var1 = var1.HermesInternal;
                                                var5 = var1.concat;
                                                var4 = 'Skipping loading ';
                                                var1 = ' because a load is pending';
                                                var1 = var5.bind(var4)(var6, var1);
                                                var1 = var2.bind(var3)(var1);
                                                return var0;
                                            case 171:
                                                return var0;
                                        }
                                    };
                                    var13 = var11.bind(var12)(var3);
                                    var12 = var13.filter;
                                    var14 = _closure1_slot0;
                                    var15 = _closure1_slot2;
                                    var11 = 15;
                                    var11 = var15[var11];
                                    var11 = var14.bind(var4)(var11);
                                    var11 = var11.isNotNullish;
                                    var13 = var12.bind(var13)(var11);
                                    var7 = var13;
                                    var12 = var13.map;
                                    var11 = function(arg0) { // Environment: var2
                                        var0 = arg0;
                                        var0 = var0.promise;
                                        return var0;
                                    };
                                    var8 = var12.bind(var13)(var11);
                                case 103: // try_start_0
                                    var11 = global;
                                    var12 = var11.Promise;
                                    var11 = var12.all;
                                    var8 = var11.bind(var12)(var8);
                                    SaveGenerator(address = 126);
                                case 124:
                                    return var8;
                                case 126:
                                    ResumeGenerator(result_out_reg = 8, return_bool_out_reg = 11);
                                    if (var11) {
                                        _fun15892_ip = 279;
                                        continue _fun15892
                                    }
                                case 135:
                                    var9 = var8;
                                    var11 = _closure1_slot36;
                                    var10 = _closure3_slot2;
                                    if (!(var11 === var10)) {
                                        _fun15892_ip = 231;
                                        continue _fun15892
                                    }
                                case 150:
                                    var11 = var9;
                                    var10 = var11.filter;
                                    var9 = function(arg0) { // Environment: var2
                                        var2 = _closure1_slot34;
                                        var1 = var2.has;
                                        var0 = arg0;
                                        var0 = var0.guildId;
                                        var0 = var1.bind(var2)(var0);
                                        var0 = !var0;
                                        return var0;
                                    };
                                    var12 = var10.bind(var11)(var9);
                                    var10 = _closure1_slot1;
                                    var11 = _closure1_slot2;
                                    var9 = 19;
                                    var9 = var11[var9];
                                    var11 = var10.bind(var4)(var9);
                                    var10 = var11.dispatch;
                                    var9 = {};
                                    var13 = 'LOAD_CHANNELS';
                                    var9.type = var13;
                                    var9.channels = var12;
                                    var9 = var10.bind(var11)(var9);
                                    SaveGenerator(address = 217);
                                case 215:
                                    return var9;
                                case 217:
                                    ResumeGenerator(result_out_reg = 9, return_bool_out_reg = 10);
                                    if (var10) {
                                        _fun15892_ip = 228;
                                        continue _fun15892
                                    }
                                case 223: // try_end0
                                    var10 = null;
                                    return var10;
                                case 228:
                                    return var9;
                                case 231: // try_start_1
                                    var11 = _closure1_slot22;
                                    var10 = var11.fileOnly;
                                    var13 = var7;
                                    var12 = var13.map;
                                    var9 = function(arg0) { // Environment: var2
                                        var0 = arg0;
                                        var0 = var0.guildId;
                                        return var0;
                                    };
                                    var12 = var12.bind(var13)(var9);
                                    var9 = 'lastResetTime has changed, skipping loads for ';
                                    var9 = var9 + var12;
                                    var9 = var10.bind(var11)(var9);
                                case 274: // try_end1
                                    var9 = null;
                                    return var9;
                                case 279:
                                    return var8;
                                case 282: // catch_target0 // catch_target1
                                    CatchBlockStart(arg_register = 10);
                                    var1 = var10;
                                    var9 = _closure1_slot22;
                                    var8 = var9.error;
                                    var11 = var7.map;
                                    var2 = function(arg0) { // Environment: var2
                                        var0 = arg0;
                                        var0 = var0.guildId;
                                        return var0;
                                    };
                                    var11 = var11.bind(var7)(var2);
                                    var2 = 'Failed to load channels from disk for ';
                                    var2 = var2 + var11;
                                    var2 = var8.bind(var9)(var2, var10);
                                    var2 = _closure1_slot41;
                                    var2 = var2.bind(var4)(var7);
                                    var6 = var2;
                                    var2 = var2.bind(var4)();
                                    var5 = var2;
                                    var2 = var2.done;
                                    if (var2) {
                                        _fun15892_ip = 393;
                                        continue _fun15892
                                    }
                                case 354:
                                    var2 = var5;
                                    var2 = var2.value;
                                    var7 = _closure1_slot35;
                                    var2 = var2.guildId;
                                    var2 = delete var7[var2];
                                    var2 = var6;
                                    var2 = var2.bind(var4)();
                                    var5 = var2;
                                    var2 = var2.done;
                                    if (!var2) {
                                        _fun15892_ip = 354;
                                        continue _fun15892
                                    }
                                case 393:
                                    throw var1;
                                case 395:
                                    return var0;
                            }
                        };
                        return var0;
                    };
                    var2 = var2.bind(var5)(var1);
                    var1 = 'loadChannels';
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                case 187:
                    return var0;
                case 189:
                    var0 = null;
                    return var0;
            }
        };
        var0.value = var1;
        var2[2] = var0;
        var1 = undefined;
        var0 = null;
        var0 = var3.bind(var1)(var4, var0, var2);
        return var0;
    };
    var1 = var1.bind(var0)();
    var8 = {};
    var8.Basic = var16;
    var14 = 'Basic';
    var8[var16] = var14;
    var8.Full = var15;
    var14 = 'Full';
    var8[var15] = var14;
    var _closure1_slot39 = var8;
    var8 = 25;
    var8 = var6[var8];
    var8 = var7.bind(var0)(var8);
    var14 = var8.Store;
    var8 = function(arg0) { // Environment: var9
        var3 = function() { // Original name: ChannelStore, environment: var5
            _fun15900: for (var _fun15900_ip = 0;;) switch (_fun15900_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot8;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot4;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot3;
                    var0 = _closure1_slot40;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun15900_ip = 69;
                        continue _fun15900
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun15900_ip = 105;
                    continue _fun15900;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot4;
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
        var4 = _closure1_slot5;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot9;
        var4 = {};
        var0 = 'initialize';
        var4.key = var0;
        var0 = function() { // Original name: value, environment: var5
            var3 = this;
            var7 = var3.waitFor;
            var12 = _closure1_slot18;
            var11 = _closure1_slot10;
            var10 = _closure1_slot11;
            var9 = _closure1_slot19;
            var8 = _closure1_slot20;
            var13 = var3;
            var1 = var13[var7](var12, var11, var10, var9, var8, var7);
            var2 = var3.syncWith;
            var4 = _closure1_slot11;
            var1 = new Array(1);
            var1[0] = var4;
            var0 = _closure1_slot55;
            var0 = var2.bind(var3)(var1, var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(21);
        var0[0] = var4;
        var4 = {};
        var6 = 'hasChannel';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            var2 = _closure1_slot46;
            var1 = undefined;
            var0 = arg0;
            var1 = var2.bind(var1)(var0);
            var0 = null;
            var0 = var0 != var1;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getBasicChannel';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun15903: for (var _fun15903_ip = 0;;) switch (_fun15903_ip) {
                case 0:
                    var2 = arg0;
                    var0 = null;
                    if (!(var0 == var2)) {
                        _fun15903_ip = 13;
                        continue _fun15903
                    }
                case 9:
                    var0 = undefined;
                    return var0;
                case 13:
                    var1 = _closure1_slot46;
                    var0 = undefined;
                    var0 = var1.bind(var0)(var2);
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'getChannel';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun15904: for (var _fun15904_ip = 0;;) switch (_fun15904_ip) {
                case 0:
                    var2 = arg0;
                    var0 = null;
                    if (!(var0 == var2)) {
                        _fun15904_ip = 13;
                        continue _fun15904
                    }
                case 9:
                    var0 = undefined;
                    return var0;
                case 13:
                    var1 = _closure1_slot47;
                    var0 = undefined;
                    var0 = var1.bind(var0)(var2);
                    return var0;
            }
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'loadAllGuildAndPrivateChannelsFromDisk';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            _fun15905: for (var _fun15905_ip = 0;;) switch (_fun15905_ip) {
                case 0:
                    var2 = _closure1_slot41;
                    var3 = _closure1_slot19;
                    var0 = var3.getGuildIds;
                    var0 = var0.bind(var3)();
                    var5 = undefined;
                    var4 = var2.bind(var5)(var0);
                    var2 = var4.bind(var5)();
                    var0 = var2.done;
                    var3 = 'loadAllGuildAndPrivateChannelsFromDisk';
                    if (var0) {
                        _fun15905_ip = 85;
                        continue _fun15905
                    }
                case 44:
                    var7 = _closure1_slot43;
                    var6 = var2.value;
                    var0 = _closure1_slot39;
                    var0 = var0.Full;
                    var0 = var7.bind(var5)(var6, var0, var3);
                    var6 = var4.bind(var5)();
                    var0 = var6.done;
                    var2 = var6;
                    if (!var0) {
                        _fun15905_ip = 44;
                        continue _fun15905
                    }
                case 85:
                    var0 = {};
                    var9 = _closure1_slot24;
                    var10 = var0;
                    var2 = copyDataProperties(var10, var9);
                    var9 = _closure1_slot26;
                    var10 = var0;
                    var1 = copyDataProperties(var10, var9);
                    return var0;
            }
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'getChannelIds';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun15906: for (var _fun15906_ip = 0;;) switch (_fun15906_ip) {
                case 0:
                    var7 = arg0;
                    var3 = _closure1_slot43;
                    var0 = _closure1_slot39;
                    var2 = var0.Basic;
                    var4 = undefined;
                    var0 = 'getChannelIds';
                    var0 = var3.bind(var4)(var7, var2, var0);
                    var5 = null;
                    if (!(var5 != var7)) {
                        _fun15906_ip = 106;
                        continue _fun15906
                    }
                case 39:
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var0 = 22;
                    var0 = var3[var0];
                    var3 = var2.bind(var4)(var0);
                    var2 = var3.keys;
                    var6 = _closure1_slot10;
                    var0 = var6.getGuildBasicChannels;
                    var0 = var0.bind(var6)(var7);
                    if (!(var5 == var0)) {
                        _fun15906_ip = 91;
                        continue _fun15906
                    }
                case 83:
                    var6 = _closure1_slot25;
                    var0 = var6[var7];
                case 91:
                    if (!(var5 == var0)) {
                        _fun15906_ip = 99;
                        continue _fun15906
                    }
                case 95:
                    var0 = _closure1_slot23;
                case 99:
                    var0 = var2.bind(var3)(var0);
                    _fun15906_ip = 140;
                    continue _fun15906;
                case 106:
                    var3 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var2 = 22;
                    var2 = var5[var2];
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.keys;
                    var1 = _closure1_slot26;
                    var0 = var2.bind(var3)(var1);
                case 140:
                    return var0;
            }
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'getMutablePrivateChannels';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot26;
            return var0;
        };
        var4.value = var6;
        var0[6] = var4;
        var4 = {};
        var6 = 'getMutableBasicGuildChannelsForGuild';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun15908: for (var _fun15908_ip = 0;;) switch (_fun15908_ip) {
                case 0:
                    var4 = arg0;
                    var5 = _closure1_slot43;
                    var0 = _closure1_slot39;
                    var3 = var0.Basic;
                    var2 = undefined;
                    var0 = 'getMutableBasicGuildChannelsForGuild';
                    var0 = var5.bind(var2)(var4, var3, var0);
                    var2 = _closure1_slot10;
                    var0 = var2.getGuildBasicChannels;
                    var0 = var0.bind(var2)(var4);
                    var2 = null;
                    if (!(var2 == var0)) {
                        _fun15908_ip = 62;
                        continue _fun15908
                    }
                case 54:
                    var3 = _closure1_slot25;
                    var0 = var3[var4];
                case 62:
                    if (!(var2 == var0)) {
                        _fun15908_ip = 70;
                        continue _fun15908
                    }
                case 66:
                    var0 = _closure1_slot23;
                case 70:
                    return var0;
            }
        };
        var4.value = var6;
        var0[7] = var4;
        var4 = {};
        var6 = 'getMutableGuildChannelsForGuild';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun15909: for (var _fun15909_ip = 0;;) switch (_fun15909_ip) {
                case 0:
                    var2 = arg0;
                    var5 = _closure1_slot43;
                    var0 = _closure1_slot39;
                    var4 = var0.Full;
                    var3 = undefined;
                    var0 = 'getMutableGuildChannelsForGuild';
                    var0 = var5.bind(var3)(var2, var4, var0);
                    var0 = _closure1_slot25;
                    var0 = var0[var2];
                    var2 = null;
                    if (!(var2 == var0)) {
                        _fun15909_ip = 51;
                        continue _fun15909
                    }
                case 47:
                    var0 = _closure1_slot23;
                case 51:
                    return var0;
            }
        };
        var4.value = var6;
        var0[8] = var4;
        var4 = {};
        var6 = 'getSortedLinkedChannelsForGuild';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun15910: for (var _fun15910_ip = 0;;) switch (_fun15910_ip) {
                case 0:
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 24;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.values;
                    var4 = _closure1_slot29;
                    var0 = arg0;
                    var0 = var4[var0];
                    var4 = null;
                    if (!(var4 == var0)) {
                        _fun15910_ip = 51;
                        continue _fun15910
                    }
                case 47:
                    var0 = _closure1_slot23;
                case 51:
                    var2 = var1.bind(var2)(var0);
                    var1 = var2.sort;
                    var0 = function(arg0, arg1) { // Environment: var0
                        var2 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var0 = 22;
                        var1 = var1[var0];
                        var0 = undefined;
                        var3 = var2.bind(var0)(var1);
                        var2 = var3.compare;
                        var0 = arg0;
                        var1 = var0.id;
                        var0 = arg1;
                        var0 = var0.id;
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                    };
                    var0 = var1.bind(var2)(var0);
                    return var0;
            }
        };
        var4.value = var6;
        var0[9] = var4;
        var4 = {};
        var6 = 'getSortedPrivateChannels';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 24;
            var1 = var2[var1];
            var2 = undefined;
            var1 = var3.bind(var2)(var1);
            var0 = _closure1_slot26;
            var1 = var1.bind(var2)(var0);
            var0 = var1.values;
            var2 = var0.bind(var1)();
            var1 = var2.sort;
            var0 = function(arg0, arg1) { // Environment: var0
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 22;
                var1 = var1[var0];
                var0 = undefined;
                var3 = var2.bind(var0)(var1);
                var2 = var3.compare;
                var0 = arg0;
                var1 = var0.lastMessageId;
                var0 = arg1;
                var0 = var0.lastMessageId;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            };
            var1 = var1.bind(var2)(var0);
            var0 = var1.reverse;
            var1 = var0.bind(var1)();
            var0 = var1.value;
            var0 = var0.bind(var1)();
            return var0;
        };
        var4.value = var6;
        var0[10] = var4;
        var4 = {};
        var6 = 'getDMFromUserId';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun15914: for (var _fun15914_ip = 0;;) switch (_fun15914_ip) {
                case 0:
                    var1 = arg0;
                    var0 = null;
                    if (!(var0 == var1)) {
                        _fun15914_ip = 13;
                        continue _fun15914
                    }
                case 9:
                    var0 = undefined;
                    return var0;
                case 13:
                    var0 = _closure1_slot30;
                    var0 = var0[var1];
                    return var0;
            }
        };
        var4.value = var6;
        var0[11] = var4;
        var4 = {};
        var6 = 'getDMChannelFromUserId';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun15915: for (var _fun15915_ip = 0;;) switch (_fun15915_ip) {
                case 0:
                    var3 = arg0;
                    var2 = this;
                    var0 = null;
                    if (!(var0 == var3)) {
                        _fun15915_ip = 16;
                        continue _fun15915
                    }
                case 12:
                    var0 = undefined;
                    return var0;
                case 16:
                    var1 = var2.getChannel;
                    var0 = _closure1_slot30;
                    var0 = var0[var3];
                    var0 = var1.bind(var2)(var0);
                    return var0;
            }
        };
        var4.value = var6;
        var0[12] = var4;
        var4 = {};
        var6 = 'getMutableDMsByUserIds';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot30;
            return var0;
        };
        var4.value = var6;
        var0[13] = var4;
        var4 = {};
        var6 = 'getDMUserIds';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 22;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            var1 = var2.keys;
            var0 = _closure1_slot30;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[14] = var4;
        var4 = {};
        var6 = 'getPrivateChannelsVersion';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot31;
            return var0;
        };
        var4.value = var6;
        var0[15] = var4;
        var4 = {};
        var6 = 'getGuildChannelsVersion';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun15919: for (var _fun15919_ip = 0;;) switch (_fun15919_ip) {
                case 0:
                    var1 = _closure1_slot32;
                    var0 = arg0;
                    var1 = var1[var0];
                    var0 = null;
                    var2 = var0 != var1;
                    var0 = 0;
                    if (!var2) {
                        _fun15919_ip = 28;
                        continue _fun15919
                    }
                case 25:
                    var0 = var1;
                case 28:
                    return var0;
            }
        };
        var4.value = var6;
        var0[16] = var4;
        var4 = {};
        var6 = 'getAllThreadsForParent';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            var1 = arg0;
            var _closure3_slot0 = var1;
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var2 = 24;
            var3 = var3[var2];
            var2 = undefined;
            var3 = var4.bind(var2)(var3);
            var2 = var3.values;
            var1 = _closure1_slot28;
            var2 = var2.bind(var3)(var1);
            var1 = var2.filter;
            var0 = function(arg0) { // Environment: var0
                var0 = arg0;
                var1 = var0.parent_id;
                var0 = _closure3_slot0;
                var0 = var1 === var0;
                return var0;
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[17] = var4;
        var4 = {};
        var6 = 'getAllThreadsForGuild';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            var1 = arg0;
            var _closure3_slot0 = var1;
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var2 = 24;
            var3 = var3[var2];
            var2 = undefined;
            var3 = var4.bind(var2)(var3);
            var2 = var3.values;
            var1 = _closure1_slot28;
            var2 = var2.bind(var3)(var1);
            var1 = var2.filter;
            var0 = function(arg0) { // Environment: var0
                var0 = arg0;
                var1 = var0.guild_id;
                var0 = _closure3_slot0;
                var0 = var1 === var0;
                return var0;
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[18] = var4;
        var4 = {};
        var6 = 'getInitialOverlayState';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = {};
            var3 = _closure1_slot24;
            var4 = var0;
            var2 = copyDataProperties(var4, var3);
            var3 = _closure1_slot26;
            var4 = var0;
            var2 = copyDataProperties(var4, var3);
            var3 = _closure1_slot28;
            var4 = var0;
            var1 = copyDataProperties(var4, var3);
            return var0;
        };
        var4.value = var6;
        var0[19] = var4;
        var4 = {};
        var6 = 'getDebugInfo';
        var4.key = var6;
        var5 = function() { // Original name: value, environment: var5
            var0 = {};
            var3 = global;
            var5 = var3.Array;
            var4 = var5.from;
            var1 = _closure1_slot34;
            var9 = var4.bind(var5)(var1);
            var8 = var9.sort;
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var1 = 22;
            var7 = var6[var1];
            var4 = undefined;
            var7 = var5.bind(var4)(var7);
            var7 = var7.compare;
            var7 = var8.bind(var9)(var7);
            var0.loadedGuildIds = var7;
            var9 = var3.Object;
            var8 = var9.keys;
            var7 = _closure1_slot35;
            var9 = var8.bind(var9)(var7);
            var8 = var9.sort;
            var7 = var6[var1];
            var7 = var5.bind(var4)(var7);
            var7 = var7.compare;
            var7 = var8.bind(var9)(var7);
            var0.pendingGuildLoads = var7;
            var7 = var3.Object;
            var3 = var7.keys;
            var2 = _closure1_slot25;
            var3 = var3.bind(var7)(var2);
            var2 = var3.sort;
            var1 = var6[var1];
            var1 = var5.bind(var4)(var1);
            var1 = var1.compare;
            var3 = var2.bind(var3)(var1);
            var2 = var3.map;
            var1 = function(arg0) { // Environment: var1
                var4 = arg0;
                var1 = _closure1_slot56;
                var0 = undefined;
                var3 = var1.bind(var0)(var4);
                var0 = global;
                var0 = var0.HermesInternal;
                var2 = var0.concat;
                var1 = '';
                var0 = ': ';
                var0 = var2.bind(var1)(var4, var0, var3);
                return var0;
            };
            var1 = var2.bind(var3)(var1);
            var0.guildSizes = var1;
            return var0;
        };
        var4.value = var5;
        var0[20] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var8 = var8.bind(var0)(var14);
    var8.displayName = var3;
    var3 = 19;
    var3 = var6[var3];
    var19 = var7.bind(var0)(var3);
    var3 = {};
    var14 = function(arg0) { // Original name: handleBackgroundSync, environment: var9
        var1 = arg0;
        var2 = var1.guilds;
        var1 = _closure1_slot25;
        var _closure2_slot0 = var1;
        var1 = {};
        _closure1_slot24 = var1;
        var1 = {};
        _closure1_slot25 = var1;
        var1 = {};
        _closure1_slot32 = var1;
        var1 = {};
        _closure1_slot29 = var1;
        var1 = var2.forEach;
        var0 = function(arg0) { // Environment: var0
            _fun15928: for (var _fun15928_ip = 0;;) switch (_fun15928_ip) {
                case 0:
                    var1 = arg0;
                    var _closure3_slot0 = var1;
                    var3 = var1.data_mode;
                    var2 = 'unavailable';
                    if (!(var2 !== var3)) {
                        _fun15928_ip = 426;
                        continue _fun15928
                    }
                case 26:
                    var3 = var1.data_mode;
                    var2 = 'partial';
                    if (!(var2 !== var3)) {
                        _fun15928_ip = 190;
                        continue _fun15928
                    }
                case 43:
                    var5 = _closure1_slot22;
                    var4 = var5.fileOnly;
                    var9 = var1.id;
                    var3 = var1.channels;
                    var8 = var3.length;
                    var3 = global;
                    var3 = var3.HermesInternal;
                    var7 = var3.concat;
                    var6 = 'BG sync contained full channels for ';
                    var3 = ' #:';
                    var3 = var7.bind(var6)(var9, var3, var8);
                    var3 = var4.bind(var5)(var3);
                    var5 = _closure1_slot45;
                    var4 = var1.id;
                    var3 = undefined;
                    var3 = var5.bind(var3)(var4);
                    var5 = _closure1_slot34;
                    var4 = var5.add;
                    var3 = var1.id;
                    var3 = var4.bind(var5)(var3);
                    var4 = _closure1_slot10;
                    var3 = var4.restored;
                    var2 = var1.id;
                    var2 = var3.bind(var4)(var2);
                    var4 = var1.channels;
                    var3 = var4.forEach;
                    var2 = function(arg0) { // Environment: var0
                        var2 = _closure1_slot51;
                        var4 = _closure1_slot12;
                        var0 = _closure3_slot0;
                        var3 = var0.id;
                        var0 = undefined;
                        var1 = arg0;
                        var1 = var4.bind(var0)(var1, var3);
                        var1 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var2 = var3.bind(var4)(var2);
                    _fun15928_ip = 548;
                    continue _fun15928;
                case 190:
                    var5 = _closure1_slot22;
                    var4 = var5.fileOnly;
                    var10 = var1.id;
                    var6 = _closure1_slot56;
                    var2 = var1.id;
                    var8 = undefined;
                    var9 = var6.bind(var8)(var2);
                    var2 = global;
                    var2 = var2.HermesInternal;
                    var7 = var2.concat;
                    var6 = 'Restoring guild channels b/c partial in bg sync, for ';
                    var2 = ' #:';
                    var2 = var7.bind(var6)(var10, var2, var9);
                    var2 = var4.bind(var5)(var2);
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var2 = 24;
                    var2 = var5[var2];
                    var6 = var4.bind(var8)(var2);
                    var5 = var6.forEach;
                    var4 = _closure2_slot0;
                    var2 = var1.id;
                    var4 = var4[var2];
                    var2 = _closure1_slot51;
                    var2 = var5.bind(var6)(var4, var2);
                    var2 = var1.partial_updates;
                    var5 = var2.deleted_channel_ids;
                    var2 = null;
                    if (!(var2 == var5)) {
                        _fun15928_ip = 334;
                        continue _fun15928
                    }
                case 330:
                    var5 = new Array(0);
                case 334:
                    var6 = var5.length;
                    var4 = 0;
                    if (!(var6 > var4)) {
                        _fun15928_ip = 390;
                        continue _fun15928
                    }
                case 345:
                    var7 = _closure1_slot43;
                    var6 = var1.id;
                    var3 = _closure1_slot39;
                    var4 = var3.Full;
                    var3 = 'handleBackgroundSync';
                    var3 = var7.bind(var8)(var6, var4, var3);
                    var4 = var5.forEach;
                    var3 = function(arg0) { // Environment: var0
                        var2 = _closure1_slot53;
                        var1 = _closure1_slot24;
                        var0 = arg0;
                        var1 = var1[var0];
                        var0 = undefined;
                        var1 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var3 = var4.bind(var5)(var3);
                case 390:
                    var3 = var1.partial_updates;
                    var3 = var3.channels;
                    if (!(var2 != var3)) {
                        _fun15928_ip = 548;
                        continue _fun15928
                    }
                case 409:
                    var2 = var3.forEach;
                    var0 = function(arg0) { // Environment: var0
                        var2 = _closure1_slot51;
                        var4 = _closure1_slot12;
                        var0 = _closure3_slot0;
                        var3 = var0.id;
                        var0 = undefined;
                        var1 = arg0;
                        var1 = var4.bind(var0)(var1, var3);
                        var1 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var0 = var2.bind(var3)(var0);
                    _fun15928_ip = 548;
                    continue _fun15928;
                case 426:
                    var5 = _closure1_slot22;
                    var3 = var5.fileOnly;
                    var9 = var1.id;
                    var6 = _closure1_slot56;
                    var2 = var1.id;
                    var4 = undefined;
                    var8 = var6.bind(var4)(var2);
                    var2 = global;
                    var2 = var2.HermesInternal;
                    var7 = var2.concat;
                    var6 = 'Restoring guild channels b/c unavailable in bg sync, for ';
                    var2 = ' #:';
                    var2 = var7.bind(var6)(var9, var2, var8);
                    var2 = var3.bind(var5)(var2);
                    var3 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var2 = 24;
                    var2 = var5[var2];
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.forEach;
                    var4 = _closure2_slot0;
                    var1 = var1.id;
                    var1 = var4[var1];
                    var0 = _closure1_slot51;
                    var0 = var2.bind(var3)(var1, var0);
                case 548:
                    var0 = undefined;
                    return var0;
            }
        };
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var3.BACKGROUND_SYNC = var14;
    var14 = function(arg0) { // Original name: handleLazyCacheLoaded, environment: var9
        _fun15932: for (var _fun15932_ip = 0;;) switch (_fun15932_ip) {
            case 0:
                var2 = _closure1_slot41;
                var0 = arg0;
                var1 = var0.guildChannels;
                var0 = undefined;
                var9 = var2.bind(var0)(var1);
                var2 = var9.bind(var0)();
                var1 = var2.done;
                var8 = 2;
                var7 = 0;
                var6 = 1;
                var5 = global;
                var4 = 'Lazy cache contained full guild channels for ';
                var3 = ' #:';
                if (var1) {
                    _fun15932_ip = 212;
                    continue _fun15932
                }
            case 60:
                var11 = var2.value;
                var1 = _closure1_slot6;
                var1 = var1.bind(var0)(var11, var8);
                var13 = var1[var7];
                var11 = var1[var6];
                var14 = _closure1_slot22;
                var12 = var14.fileOnly;
                var15 = var11.length;
                var1 = var5.HermesInternal;
                var1 = var1.concat;
                var1 = var1.bind(var4)(var13, var3, var15);
                var1 = var12.bind(var14)(var1);
                var12 = _closure1_slot34;
                var1 = var12.add;
                var1 = var1.bind(var12)(var13);
                var1 = _closure1_slot41;
                var12 = var1.bind(var0)(var11);
                var11 = var12.bind(var0)();
                var1 = var11.done;
                if (var1) {
                    _fun15932_ip = 194;
                    continue _fun15932
                }
            case 156:
                var14 = var11.value;
                var13 = _closure1_slot48;
                var1 = _closure1_slot17;
                var1 = var1.bind(var0)(var14);
                var1 = var13.bind(var0)(var1);
                var13 = var12.bind(var0)();
                var1 = var13.done;
                var11 = var13;
                if (!var1) {
                    _fun15932_ip = 156;
                    continue _fun15932
                }
            case 194:
                var11 = var9.bind(var0)();
                var1 = var11.done;
                var2 = var11;
                if (!var1) {
                    _fun15932_ip = 60;
                    continue _fun15932
                }
            case 212:
                return var0;
        }
    };
    var3.CACHE_LOADED_LAZY = var14;
    var14 = function(arg0) { // Original name: handleCacheLoaded, environment: var9
        _fun15933: for (var _fun15933_ip = 0;;) switch (_fun15933_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.guilds;
                var0 = var0.length;
                var0 = var1.privateChannels;
                var3 = var1.initialGuildChannels;
                var7 = new Array(2);
                var7[0] = var0;
                var7[1] = var3;
                var0 = var7.length;
                var2 = 0;
                var4 = var2 < var0;
                var0 = undefined;
                var6 = 20;
                var5 = 0;
                if (!var4) {
                    _fun15933_ip = 165;
                    continue _fun15933
                }
            case 62:
                var8 = _closure1_slot41;
                var4 = var7[var5];
                var9 = var8.bind(var0)(var4);
                var8 = var9.bind(var0)();
                var4 = var8.done;
                if (var4) {
                    _fun15933_ip = 153;
                    continue _fun15933
                }
            case 87:
                var13 = var8.value;
                var10 = _closure1_slot48;
                var11 = _closure1_slot0;
                var4 = _closure1_slot2;
                var4 = var4[var6];
                var12 = var11.bind(var0)(var4);
                var11 = var12.deserializeChannel;
                var4 = _closure1_slot17;
                var4 = var4.bind(var0)(var13);
                var4 = var11.bind(var12)(var4);
                var4 = var10.bind(var0)(var4);
                var10 = var9.bind(var0)();
                var4 = var10.done;
                var8 = var10;
                if (!var4) {
                    _fun15933_ip = 87;
                    continue _fun15933
                }
            case 153:
                var5 = var5 + 1;
                var4 = var7.length;
                if (var5 < var4) {
                    _fun15933_ip = 62;
                    continue _fun15933
                }
            case 165:
                var4 = var3[var2];
                var2 = null;
                var5 = var2 == var4;
                var3 = undefined;
                if (var5) {
                    _fun15933_ip = 185;
                    continue _fun15933
                }
            case 180:
                var3 = var4.guild_id;
            case 185:
                if (!(var2 != var3)) {
                    _fun15933_ip = 242;
                    continue _fun15933
                }
            case 189:
                var5 = _closure1_slot22;
                var4 = var5.fileOnly;
                var2 = global;
                var2 = var2.HermesInternal;
                var6 = var2.concat;
                var2 = 'Early cache contained full guild channels for ';
                var2 = var6.bind(var2)(var3);
                var2 = var4.bind(var5)(var2);
                var2 = _closure1_slot34;
                var1 = var2.add;
                var1 = var1.bind(var2)(var3);
            case 242:
                return var0;
        }
    };
    var3.CACHE_LOADED = var14;
    var14 = function(arg0) { // Original name: handleChannelCreate, environment: var9
        var2 = _closure1_slot48;
        var0 = arg0;
        var1 = var0.channel;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3.CHANNEL_CREATE = var14;
    var3.CHANNEL_DELETE = var10;
    var14 = function(arg0) { // Original name: handleAddRecipient, environment: var9
        _fun15935: for (var _fun15935_ip = 0;;) switch (_fun15935_ip) {
            case 0:
                var1 = arg0;
                var4 = _closure1_slot47;
                var0 = var1.channelId;
                var3 = undefined;
                var7 = var4.bind(var3)(var0);
                var4 = _closure1_slot18;
                var0 = var4.getId;
                var6 = var0.bind(var4)();
                var0 = null;
                var4 = var0 == var7;
                if (var4) {
                    _fun15935_ip = 58;
                    continue _fun15935
                }
            case 45:
                var0 = var7.isPrivate;
                var0 = var0.bind(var7)();
                var4 = !var0;
            case 58:
                var0 = !var4;
                if (var4) {
                    _fun15935_ip = 104;
                    continue _fun15935
                }
            case 64:
                var2 = _closure1_slot48;
                var5 = var7.addRecipient;
                var4 = var1.user;
                var4 = var4.id;
                var1 = var1.nick;
                var1 = var5.bind(var7)(var4, var1, var6);
                var1 = var2.bind(var3)(var1);
                var0 = true;
            case 104:
                return var0;
        }
    };
    var3.CHANNEL_RECIPIENT_ADD = var14;
    var14 = function(arg0) { // Original name: handleRemoveRecipient, environment: var9
        _fun15936: for (var _fun15936_ip = 0;;) switch (_fun15936_ip) {
            case 0:
                var1 = arg0;
                var4 = _closure1_slot47;
                var0 = var1.channelId;
                var3 = undefined;
                var5 = var4.bind(var3)(var0);
                var0 = null;
                var4 = var0 == var5;
                if (var4) {
                    _fun15936_ip = 44;
                    continue _fun15936
                }
            case 31:
                var0 = var5.isPrivate;
                var0 = var0.bind(var5)();
                var4 = !var0;
            case 44:
                var0 = !var4;
                if (var4) {
                    _fun15936_ip = 82;
                    continue _fun15936
                }
            case 50:
                var2 = _closure1_slot48;
                var4 = var5.removeRecipient;
                var1 = var1.user;
                var1 = var1.id;
                var1 = var4.bind(var5)(var1);
                var1 = var2.bind(var3)(var1);
                var0 = true;
            case 82:
                return var0;
        }
    };
    var3.CHANNEL_RECIPIENT_REMOVE = var14;
    var14 = function(arg0) { // Original name: handleUpdateChannels, environment: var9
        _fun15937: for (var _fun15937_ip = 0;;) switch (_fun15937_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.channels;
                var3 = var4.some;
                var2 = function(arg0) { // Environment: var1
                    _fun15938: for (var _fun15938_ip = 0;;) switch (_fun15938_ip) {
                        case 0:
                            var2 = arg0;
                            var3 = _closure1_slot47;
                            var0 = var2.id;
                            var1 = undefined;
                            var3 = var3.bind(var1)(var0);
                            var5 = var2.nsfw;
                            var4 = null;
                            var6 = var4 == var3;
                            var0 = undefined;
                            if (var6) {
                                _fun15938_ip = 45;
                                continue _fun15938
                            }
                        case 39:
                            var0 = var3.nsfw;
                        case 45:
                            var0 = var5 !== var0;
                            if (var0) {
                                _fun15938_ip = 75;
                                continue _fun15938
                            }
                        case 52:
                            var2 = var2.type;
                            var4 = var4 == var3;
                            var1 = undefined;
                            if (var4) {
                                _fun15938_ip = 71;
                                continue _fun15938
                            }
                        case 66:
                            var1 = var3.type;
                        case 71:
                            var0 = var2 !== var1;
                        case 75:
                            return var0;
                    }
                };
                var3 = var3.bind(var4)(var2);
                var5 = _closure1_slot41;
                var4 = var0.channels;
                var0 = undefined;
                var6 = var5.bind(var0)(var4);
                var5 = var6.bind(var0)();
                var4 = var5.done;
                if (var4) {
                    _fun15937_ip = 88;
                    continue _fun15937
                }
            case 59:
                var7 = _closure1_slot48;
                var4 = var5.value;
                var4 = var7.bind(var0)(var4);
                var7 = var6.bind(var0)();
                var4 = var7.done;
                var5 = var7;
                if (!var4) {
                    _fun15937_ip = 59;
                    continue _fun15937
                }
            case 88:
                if (!var3) {
                    _fun15937_ip = 128;
                    continue _fun15937
                }
            case 91:
                var3 = global;
                var4 = var3.Object;
                var3 = var4.values;
                var2 = _closure1_slot28;
                var3 = var3.bind(var4)(var2);
                var2 = var3.forEach;
                var1 = function(arg0) { // Environment: var1
                    var2 = _closure1_slot48;
                    var0 = undefined;
                    var1 = arg0;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var1 = var2.bind(var3)(var1);
            case 128:
                return var0;
        }
    };
    var3.CHANNEL_UPDATES = var14;
    var14 = function(arg0) { // Original name: handleConnectionOpenSupplemental, environment: var9
        _fun15940: for (var _fun15940_ip = 0;;) switch (_fun15940_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.lazyPrivateChannels;
                var3 = _closure1_slot27;
                var1 = null;
                if (!(var1 != var3)) {
                    _fun15940_ip = 46;
                    continue _fun15940
                }
            case 22:
                var1 = {};
                _closure1_slot26 = var1;
                var4 = _closure1_slot27;
                var3 = var4.forEach;
                var1 = _closure1_slot49;
                var1 = var3.bind(var4)(var1);
            case 46:
                var1 = var2.forEach;
                var0 = _closure1_slot49;
                var0 = var1.bind(var2)(var0);
                var0 = undefined;
                return var0;
        }
    };
    var3.CONNECTION_OPEN_SUPPLEMENTAL = var14;
    var14 = function(arg0) { // Original name: handleConnectionOpen, environment: var9
        _fun15941: for (var _fun15941_ip = 0;;) switch (_fun15941_ip) {
            case 0:
                var0 = arg0;
                var10 = _closure1_slot25;
                var2 = {};
                _closure1_slot30 = var2;
                var2 = {};
                _closure1_slot24 = var2;
                var2 = {};
                _closure1_slot25 = var2;
                var2 = {};
                _closure1_slot29 = var2;
                var2 = {};
                _closure1_slot28 = var2;
                var2 = {};
                _closure1_slot32 = var2;
                var2 = {};
                _closure1_slot37 = var2;
                var2 = {};
                _closure1_slot35 = var2;
                var9 = global;
                var3 = var9.Date;
                var2 = var3.now;
                var2 = var2.bind(var3)();
                _closure1_slot36 = var2;
                var2 = var0.initialPrivateChannels;
                _closure1_slot27 = var2;
                var4 = var0.initialPrivateChannels;
                var3 = var4.forEach;
                var2 = _closure1_slot49;
                var2 = var3.bind(var4)(var2);
                var3 = _closure1_slot41;
                var2 = var0.guilds;
                var0 = undefined;
                var8 = var3.bind(var0)(var2);
                var3 = var8.bind(var0)();
                var2 = var3.done;
                var7 = 24;
                var6 = 'Restoring guild channels for ';
                var5 = ' #:';
                var4 = 'partial';
                if (var2) {
                    _fun15941_ip = 295;
                    continue _fun15941
                }
            case 160:
                var11 = var3.value;
                var2 = var11.dataMode;
                if (!(var4 === var2)) {
                    _fun15941_ip = 268;
                    continue _fun15941
                }
            case 175:
                var12 = _closure1_slot1;
                var2 = _closure1_slot2;
                var2 = var2[var7];
                var14 = var12.bind(var0)(var2);
                var13 = var14.forEach;
                var2 = var11.id;
                var12 = var10[var2];
                var2 = _closure1_slot51;
                var2 = var13.bind(var14)(var12, var2);
                var13 = _closure1_slot22;
                var12 = var13.fileOnly;
                var15 = var11.id;
                var14 = _closure1_slot56;
                var2 = var11.id;
                var14 = var14.bind(var0)(var2);
                var2 = var9.HermesInternal;
                var2 = var2.concat;
                var2 = var2.bind(var6)(var15, var5, var14);
                var2 = var12.bind(var13)(var2);
            case 268:
                var2 = _closure1_slot52;
                var2 = var2.bind(var0)(var11);
                var11 = var8.bind(var0)();
                var2 = var11.done;
                var3 = var11;
                if (!var2) {
                    _fun15941_ip = 160;
                    continue _fun15941
                }
            case 295:
                var1 = _closure1_slot55;
                var1 = var1.bind(var0)();
                return var0;
        }
    };
    var3.CONNECTION_OPEN = var14;
    var14 = function(arg0) { // Original name: handlePutOverwriteSuccess, environment: var9
        _fun15942: for (var _fun15942_ip = 0;;) switch (_fun15942_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.channelId;
                var6 = var0.overwrite;
                var2 = _closure1_slot47;
                var0 = undefined;
                var5 = var2.bind(var0)(var3);
                var2 = null;
                if (!(var2 != var5)) {
                    _fun15942_ip = 85;
                    continue _fun15942
                }
            case 34:
                var2 = _closure1_slot48;
                var4 = var5.set;
                var3 = {};
                var7 = var5.permissionOverwrites;
                var8 = var3;
                var1 = copyDataProperties(var8, var7);
                var1 = var6.id;
                var3[var1] = var6;
                var1 = 'permissionOverwrites';
                var1 = var4.bind(var5)(var1, var3);
                var1 = var2.bind(var0)(var1);
                return var0;
            case 85:
                var0 = false;
                return var0;
        }
    };
    var3.CHANNEL_PERMISSIONS_PUT_OVERWRITE_SUCCESS = var14;
    var14 = function(arg0) { // Original name: handleDeleteOverwriteSuccess, environment: var9
        _fun15943: for (var _fun15943_ip = 0;;) switch (_fun15943_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.channelId;
                var2 = var0.overwriteId;
                var3 = _closure1_slot47;
                var0 = undefined;
                var5 = var3.bind(var0)(var4);
                var3 = null;
                if (!(var3 != var5)) {
                    _fun15943_ip = 79;
                    continue _fun15943
                }
            case 34:
                var4 = {};
                var6 = var5.permissionOverwrites;
                var7 = var4;
                var3 = copyDataProperties(var7, var6);
                var2 = delete var4[var2];
                var2 = _closure1_slot48;
                var3 = var5.set;
                var1 = 'permissionOverwrites';
                var1 = var3.bind(var5)(var1, var4);
                var1 = var2.bind(var0)(var1);
                return var0;
            case 79:
                var0 = false;
                return var0;
        }
    };
    var3.CHANNEL_PERMISSIONS_DELETE_OVERWRITE_SUCCESS = var14;
    var14 = function(arg0) { // Original name: handleCreateGuild, environment: var9
        var2 = _closure1_slot52;
        var0 = arg0;
        var1 = var0.guild;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3.GUILD_CREATE = var14;
    var14 = function(arg0) { // Original name: handleGuildDelete, environment: var9
        var1 = arg0;
        var4 = _closure1_slot22;
        var3 = var4.fileOnly;
        var0 = var1.guild;
        var6 = var0.id;
        var0 = global;
        var0 = var0.HermesInternal;
        var5 = var0.concat;
        var0 = 'GuildDelete of ';
        var0 = var5.bind(var0)(var6);
        var0 = var3.bind(var4)(var0);
        var4 = _closure1_slot45;
        var0 = var1.guild;
        var3 = var0.id;
        var0 = undefined;
        var3 = var4.bind(var0)(var3);
        var5 = _closure1_slot34;
        var4 = var5.delete;
        var3 = var1.guild;
        var3 = var3.id;
        var3 = var4.bind(var5)(var3);
        var3 = _closure1_slot10;
        var2 = var3.invalidate;
        var1 = var1.guild;
        var1 = var1.id;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var3.GUILD_DELETE = var14;
    var3.LOAD_ARCHIVED_THREADS_SUCCESS = var12;
    var14 = function(arg0) { // Original name: handleLoadChannels, environment: var9
        _fun15946: for (var _fun15946_ip = 0;;) switch (_fun15946_ip) {
            case 0:
                var1 = _closure1_slot41;
                var0 = arg0;
                var0 = var0.channels;
                var7 = undefined;
                var6 = var1.bind(var7)(var0);
                var1 = var6.bind(var7)();
                var0 = var1.done;
                var5 = global;
                var4 = 'Lazy loaded guild channels for ';
                var3 = 20;
                var2 = var1;
                var1 = undefined;
                if (var0) {
                    _fun15946_ip = 262;
                    continue _fun15946
                }
            case 54:
                var0 = var2.value;
                var11 = var0.guildId;
                var9 = var0.channels;
                var12 = _closure1_slot22;
                var10 = var12.fileOnly;
                var0 = var5.HermesInternal;
                var0 = var0.concat;
                var0 = var0.bind(var4)(var11);
                var0 = var10.bind(var12)(var0);
                var10 = _closure1_slot1;
                var0 = _closure1_slot2;
                var0 = var0[var3];
                var0 = var10.bind(var7)(var0);
                var0 = var0.bind(var7)(var9);
                var10 = _closure1_slot34;
                var0 = var10.add;
                var0 = var0.bind(var10)(var11);
                var10 = _closure1_slot10;
                var0 = var10.restored;
                var0 = var0.bind(var10)(var11);
                var0 = _closure1_slot41;
                var10 = var0.bind(var7)(var9);
                var9 = var10.bind(var7)();
                var0 = var9.done;
                if (var0) {
                    _fun15946_ip = 244;
                    continue _fun15946
                }
            case 173:
                var11 = var9.value;
                var14 = var5.Object;
                var13 = var14.hasOwn;
                var12 = _closure1_slot24;
                var0 = var11.id;
                var0 = var13.bind(var14)(var12, var0);
                if (var0) {
                    _fun15946_ip = 226;
                    continue _fun15946
                }
            case 208:
                var12 = _closure1_slot51;
                var0 = _closure1_slot17;
                var0 = var0.bind(var7)(var11);
                var0 = var12.bind(var7)(var0);
            case 226:
                var12 = var10.bind(var7)();
                var0 = var12.done;
                var9 = var12;
                var1 = var11;
                if (!var0) {
                    _fun15946_ip = 173;
                    continue _fun15946
                }
            case 244:
                var9 = var6.bind(var7)();
                var0 = var9.done;
                var2 = var9;
                if (!var0) {
                    _fun15946_ip = 54;
                    continue _fun15946
                }
            case 262:
                var0 = false;
                return var0;
        }
    };
    var3.LOAD_CHANNELS = var14;
    var3.LOAD_MESSAGES_AROUND_SUCCESS = var13;
    var3.LOAD_MESSAGES_SUCCESS = var13;
    var3.LOAD_THREADS_SUCCESS = var12;
    var12 = function() { // Original name: handleLogout, environment: var9
        var3 = _closure1_slot22;
        var2 = var3.fileOnly;
        var0 = 'initializeClear()';
        var0 = var2.bind(var3)(var0);
        var0 = {};
        _closure1_slot30 = var0;
        var0 = {};
        _closure1_slot24 = var0;
        var0 = {};
        _closure1_slot25 = var0;
        var0 = {};
        _closure1_slot32 = var0;
        var0 = {};
        _closure1_slot29 = var0;
        var0 = {};
        _closure1_slot26 = var0;
        var0 = {};
        _closure1_slot37 = var0;
        var0 = {};
        _closure1_slot28 = var0;
        var0 = global;
        var2 = var0.Set;
        var3 = var2.prototype;
        var3 = Object.create(var3, {
            constructor: {
                value: var2
            }
        });
        var5 = var3;
        var2 = new var5[var2](var4);
        var2 = var2 instanceof Object ? var2 : var3;
        _closure1_slot34 = var2;
        var2 = {};
        _closure1_slot35 = var2;
        var2 = var0.Date;
        var0 = var2.now;
        var0 = var0.bind(var2)();
        _closure1_slot36 = var0;
        var0 = undefined;
        return var0;
    };
    var3.LOGOUT = var12;
    var12 = function(arg0) { // Original name: handleInitialize, environment: var9
        _fun15948: for (var _fun15948_ip = 0;;) switch (_fun15948_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.guilds;
                var1 = var1.length;
                var2 = _closure1_slot41;
                var1 = var0.channels;
                var0 = undefined;
                var4 = var2.bind(var0)(var1);
                var2 = var4.bind(var0)();
                var1 = var2.done;
                var3 = 20;
                if (var1) {
                    _fun15948_ip = 115;
                    continue _fun15948
                }
            case 49:
                var9 = var2.value;
                var6 = _closure1_slot48;
                var7 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var3];
                var8 = var7.bind(var0)(var1);
                var7 = var8.deserializeChannel;
                var1 = _closure1_slot17;
                var1 = var1.bind(var0)(var9);
                var1 = var7.bind(var8)(var1);
                var1 = var6.bind(var0)(var1);
                var6 = var4.bind(var0)();
                var1 = var6.done;
                var2 = var6;
                if (!var1) {
                    _fun15948_ip = 49;
                    continue _fun15948
                }
            case 115:
                return var0;
        }
    };
    var3.OVERLAY_INITIALIZE = var12;
    var3.SEARCH_MESSAGES_SUCCESS = var11;
    var3.MOD_VIEW_SEARCH_MESSAGES_SUCCESS = var11;
    var3.THREAD_CREATE = var4;
    var3.THREAD_DELETE = var10;
    var9 = function(arg0) { // Original name: handleThreadListSync, environment: var9
        var0 = arg0;
        var2 = var0.threads;
        var1 = var2.forEach;
        var0 = function(arg0) { // Environment: var0
            _fun15950: for (var _fun15950_ip = 0;;) switch (_fun15950_ip) {
                case 0:
                    var2 = arg0;
                    var4 = _closure1_slot16;
                    var3 = var4.has;
                    var1 = var2.type;
                    var1 = var3.bind(var4)(var1);
                    if (!var1) {
                        _fun15950_ip = 39;
                        continue _fun15950
                    }
                case 28:
                    var1 = _closure1_slot48;
                    var0 = undefined;
                    var0 = var1.bind(var0)(var2);
                case 39:
                    var0 = undefined;
                    return var0;
            }
        };
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var3.THREAD_LIST_SYNC = var9;
    var3.THREAD_UPDATE = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var8
        }
    });
    var20 = var4;
    var18 = var3;
    var3 = new var20[var8](var19, var18, var17);
    var3 = var3 instanceof Object ? var3 : var4;
    var4 = 26;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'stores/ChannelStore.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.ChannelLoader = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [15, 17, 18, 57, 5, 6, 7, 1373, 1375, 1376, 1216, 1410, 1613, 660, 3, 1304, 1637, 1656, 1657, 806, 1658, 20, 21, 1659, 22, 566, 2]);