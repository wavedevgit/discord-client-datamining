// modules/user_settings/UserSettingsUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var10 = require;
    var9 = metroImportDefault;
    var2 = exports;
    var11 = dependencyMap;
    var _closure1_slot0 = var10;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var11;
    var0 = function arg0, arg1() {
        _fun15191: for (var _fun15191_ip = 0;;) switch (_fun15191_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun15191_ip = 46;
                    continue _fun15191
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun15191_ip = 55;
                    continue _fun15191
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun15191_ip = 343;
                    continue _fun15191
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun15191_ip = 323;
                    continue _fun15191
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun15191_ip = 283;
                    continue _fun15191
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun15191_ip = 270;
                    continue _fun15191
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
                    _fun15191_ip = 163;
                    continue _fun15191
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun15191_ip = 179;
                    continue _fun15191
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun15191_ip = 249;
                    continue _fun15191
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun15191_ip = 249;
                    continue _fun15191
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun15191_ip = 234;
                    continue _fun15191
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun15191_ip = 247;
                    continue _fun15191
                }
            case 234:
                var8 = _closure1_slot8;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun15191_ip = 265;
                continue _fun15191;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun15191_ip = 283;
                continue _fun15191;
            case 270:
                var6 = _closure1_slot8;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun15191_ip = 323;
                    continue _fun15191
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
                    _fun15191_ip = 330;
                    continue _fun15191
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun15192: for (var _fun15192_ip = 0;;) switch (_fun15192_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun15192_ip = 56;
                                continue _fun15192
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
                            _fun15192_ip = 67;
                            continue _fun15192;
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
    var _closure1_slot7 = var0;
    var0 = function arg0, arg1() {
        _fun15193: for (var _fun15193_ip = 0;;) switch (_fun15193_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun15193_ip = 23;
                    continue _fun15193
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun15193_ip = 33;
                    continue _fun15193
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
                    _fun15193_ip = 70;
                    continue _fun15193
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun15193_ip = 55;
                    continue _fun15193
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot8 = var0;
    var7 = function arg0, arg1() {
        _fun15194: for (var _fun15194_ip = 0;;) switch (_fun15194_ip) {
            case 0:
                var1 = arg1;
                var3 = arg0;
                var4 = var1;
                var7 = undefined;
                var2 = undefined;
                var0 = null;
                if (!(var0 != var1)) {
                    _fun15194_ip = 128;
                    continue _fun15194
                }
            case 19:
                var6 = _closure1_slot0;
                var8 = _closure1_slot2;
                var5 = 3;
                var5 = var8[var5];
                var6 = var6.bind(var7)(var5);
                var5 = var6.base64decode;
                var2 = var5.bind(var6)(var4);
            case 53: // try_start_0
                var4 = var3;
                var3 = var4.fromBinary;
                var1 = _closure1_slot5;
                var1 = var3.bind(var4)(var2, var1);
            case 72: // try_end0
                return var1;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 4);
                var1 = global;
                var3 = var1.Error;
                var1 = var1.HermesInternal;
                var2 = var1.concat;
                var1 = 'Settings proto failed to deserialize (potentially corrupt): ';
                var10 = var2.bind(var1)(var4);
                var2 = var3.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var3
                    }
                });
                var11 = var2;
                var1 = new var11[var3](var10, var9);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
            case 128:
                return var0;
        }
    };
    var _closure1_slot9 = var7;
    var6 = function arg0, arg1() {
        var4 = arg0;
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 3;
        var1 = var1[var0];
        var0 = undefined;
        var2 = var2.bind(var0)(var1);
        var1 = var2.base64encode;
        var3 = var4.toBinary;
        var0 = arg1;
        var0 = var3.bind(var4)(var0);
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot10 = var6;
    var5 = function arg0, arg1, arg2() {
        _fun15196: for (var _fun15196_ip = 0;;) switch (_fun15196_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.guilds;
                var1 = null;
                if (!(var1 == var2)) {
                    _fun15196_ip = 61;
                    continue _fun15196
                }
            case 15:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 4;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var2 = var1.AllGuildSettings;
                var1 = var2.create;
                var1 = var1.bind(var2)();
                var0.guilds = var1;
            case 61:
                var4 = _closure1_slot12;
                var3 = var0.guilds;
                var2 = undefined;
                var1 = arg1;
                var0 = arg2;
                var0 = var4.bind(var2)(var3, var1, var0);
                return var0;
        }
    };
    var _closure1_slot11 = var5;
    var4 = function arg0, arg1, arg2() {
        _fun15197: for (var _fun15197_ip = 0;;) switch (_fun15197_ip) {
            case 0:
                var0 = arg0;
                var1 = arg1;
                var2 = null;
                var2 = var2 != var1;
                if (!var2) {
                    _fun15197_ip = 23;
                    continue _fun15197
                }
            case 15:
                var3 = 'null';
                var2 = var3 !== var1;
            case 23:
                if (var2) {
                    _fun15197_ip = 33;
                    continue _fun15197
                }
            case 26:
                var1 = _closure1_slot4;
            case 33:
                var2 = var0.guilds;
                var2 = var1 in var2;
                if (var2) {
                    _fun15197_ip = 96;
                    continue _fun15197
                }
            case 46:
                var3 = var0.guilds;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 4;
                var4 = var4[var2];
                var2 = undefined;
                var2 = var5.bind(var2)(var4);
                var4 = var2.GuildSettings;
                var2 = var4.create;
                var2 = var2.bind(var4)();
                var3[var1] = var2;
            case 96:
                var0 = var0.guilds;
                var2 = var0[var1];
                var1 = arg2;
                var0 = undefined;
                var0 = var1.bind(var0)(var2);
                return var0;
        }
    };
    var _closure1_slot12 = var4;
    var3 = function arg0, arg1, arg2() {
        _fun15198: for (var _fun15198_ip = 0;;) switch (_fun15198_ip) {
            case 0:
                var0 = arg0;
                var1 = arg1;
                var2 = var0.channels;
                var2 = var1 in var2;
                if (var2) {
                    _fun15198_ip = 69;
                    continue _fun15198
                }
            case 19:
                var3 = var0.channels;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 4;
                var4 = var4[var2];
                var2 = undefined;
                var2 = var5.bind(var2)(var4);
                var4 = var2.ChannelSettings;
                var2 = var4.create;
                var2 = var2.bind(var4)();
                var3[var1] = var2;
            case 69:
                var0 = var0.channels;
                var2 = var0[var1];
                var1 = arg2;
                var0 = undefined;
                var0 = var1.bind(var0)(var2);
                return var0;
        }
    };
    var _closure1_slot13 = var3;
    var0 = global;
    var13 = var0.Object;
    var12 = var13.defineProperty;
    var8 = {};
    var0 = true;
    var8.value = var0;
    var0 = '__esModule';
    var0 = var12.bind(var13)(var2, var0, var8);
    var0 = 0;
    var8 = var11[var0];
    var0 = undefined;
    var8 = var9.bind(var0)(var8);
    var _closure1_slot3 = var8;
    var8 = 1;
    var8 = var11[var8];
    var8 = var10.bind(var0)(var8);
    var12 = var8.UserSettingsTypes;
    var8 = 2;
    var8 = var11[var8];
    var8 = var10.bind(var0)(var8);
    var8 = var8.ZERO_STRING_GUILD_ID;
    var _closure1_slot4 = var8;
    var8 = {};
    var9 = function arg0() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 3;
        var1 = var1[var0];
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        var3 = var0.BinaryReader;
        var0 = global;
        var2 = var0.TextDecoder;
        var0 = var2.prototype;
        var1 = Object.create(var0, {
            constructor: {
                value: var2
            }
        });
        var5 = 'utf-8';
        var6 = var1;
        var0 = new var6[var2](var5, var4);
        var4 = var0 instanceof Object ? var0 : var1;
        var0 = var3.prototype;
        var1 = Object.create(var0, {
            constructor: {
                value: var3
            }
        });
        var5 = arg0;
        var6 = var1;
        var0 = new var6[var3](var5, var4, var3);
        var0 = var0 instanceof Object ? var0 : var1;
        return var0;
    };
    var8.readerFactory = var9;
    var _closure1_slot5 = var8;
    var9 = {};
    var14 = var12.PRELOADED_USER_SETTINGS;
    var13 = 4;
    var13 = var11[var13];
    var13 = var10.bind(var0)(var13);
    var13 = var13.PreloadedUserSettings;
    var9[var14] = var13;
    var13 = var12.FRECENCY_AND_FAVORITES_SETTINGS;
    var12 = 5;
    var12 = var11[var12];
    var12 = var10.bind(var0)(var12);
    var12 = var12.FrecencyUserSettings;
    var9[var13] = var12;
    var _closure1_slot6 = var9;
    var9 = 8;
    var9 = var11[var9];
    var11 = var10.bind(var0)(var9);
    var10 = var11.fileFinishedImporting;
    var9 = 'modules/user_settings/UserSettingsUtils.tsx';
    var9 = var10.bind(var11)(var9);
    var2.BINARY_READ_OPTIONS = var8;
    var8 = function arg0, arg1() {
        _fun15200: for (var _fun15200_ip = 0;;) switch (_fun15200_ip) {
            case 0:
                var3 = arg0;
                var5 = arg1;
                var1 = null;
                var2 = var1 == var5;
                var0 = null;
                if (var2) {
                    _fun15200_ip = 56;
                    continue _fun15200
                }
            case 17:
                var4 = _closure1_slot6;
                var4 = var3 in var4;
                var1 = null;
                if (!var4) {
                    _fun15200_ip = 53;
                    continue _fun15200
                }
            case 33:
                var4 = _closure1_slot9;
                var2 = _closure1_slot6;
                var3 = var2[var3];
                var2 = undefined;
                var1 = var4.bind(var2)(var3, var5);
            case 53:
                var0 = var1;
            case 56:
                return var0;
        }
    };
    var2.b64ToProtoWithType = var8;
    var2.b64ToProto = var7;
    var7 = function arg0() {
        var3 = _closure1_slot9;
        var1 = _closure1_slot0;
        var2 = _closure1_slot2;
        var0 = 4;
        var0 = var2[var0];
        var2 = undefined;
        var0 = var1.bind(var2)(var0);
        var1 = var0.PreloadedUserSettings;
        var0 = arg0;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var2.b64ToPreloadedUserSettingsProto = var7;
    var7 = function arg0, arg1() {
        var3 = _closure1_slot10;
        var1 = _closure1_slot6;
        var0 = arg0;
        var2 = var1[var0];
        var1 = undefined;
        var0 = arg1;
        var0 = var3.bind(var1)(var2, var0);
        return var0;
    };
    var2.protoToB64WithType = var7;
    var2.protoToB64 = var6;
    var6 = function arg0, arg1, arg2() {
        _fun15203: for (var _fun15203_ip = 0;;) switch (_fun15203_ip) {
            case 0:
                var3 = arg0;
                var2 = arg2;
                var0 = {};
                var9 = arg1;
                var10 = var0;
                var1 = copyDataProperties(var10, var9);
                var6 = var2;
                for (var1 in var6)
                    case 29: {
                        case 38: var8 = var1;
                        var8 = delete var0[var8];
                        _fun15203_ip = 29;
                        continue _fun15203;
                    }
            case 47:
                var1 = var3.mergePartial;
                var1 = var1.bind(var3)(var0, var2);
                return var0;
        }
    };
    var2.mergeTopLevelFields = var6;
    var2.mutateUserGuildSettings = var5;
    var2.mutateUserGuildSettingsInternal = var4;
    var4 = function arg0, arg1, arg2, arg3() {
        var1 = arg2;
        var _closure2_slot0 = var1;
        var1 = arg3;
        var _closure2_slot1 = var1;
        var4 = _closure1_slot11;
        var3 = undefined;
        var2 = arg0;
        var1 = arg1;
        var0 = function(arg0) { // Environment: var0
            var4 = _closure1_slot13;
            var3 = _closure2_slot0;
            var2 = _closure2_slot1;
            var1 = undefined;
            var0 = arg0;
            var0 = var4.bind(var1)(var0, var3, var2);
            return var0;
        };
        var0 = var4.bind(var3)(var2, var1, var0);
        return var0;
    };
    var2.mutateUserChannelSettings = var4;
    var2.mutateUserChannelSettingsInternal = var3;
    var3 = function arg0, arg1() {
        _fun15206: for (var _fun15206_ip = 0;;) switch (_fun15206_ip) {
            case 0:
                var3 = arg0;
                var2 = arg1;
                var0 = var3.versions;
                var11 = null;
                if (!(var11 == var0)) {
                    _fun15206_ip = 64;
                    continue _fun15206
                }
            case 18:
                var4 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 6;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var4.bind(var0)(var1);
                var1 = var0.Versions;
                var0 = var1.create;
                var0 = var0.bind(var1)();
                var3.versions = var0;
            case 64:
                var1 = _closure1_slot7;
                var10 = undefined;
                var6 = var1.bind(var10)(var2);
                var4 = var6.bind(var10)();
                var1 = var4.done;
                var5 = 0;
                if (var1) {
                    _fun15206_ip = 151;
                    continue _fun15206
                }
            case 92:
                var1 = var4.value;
                var7 = var1.version;
                if (!(!(var7 <= var5))) {
                    _fun15206_ip = 130;
                    continue _fun15206
                }
            case 107:
                var5 = var1.version;
                var7 = var6.bind(var10)();
                var1 = var7.done;
                var4 = var7;
                if (var1) {
                    _fun15206_ip = 151;
                    continue _fun15206
                }
            case 128:
                _fun15206_ip = 92;
                continue _fun15206;
            case 130:
                var1 = global;
                var4 = var1.Error;
                var1 = 'Migrations are out of order or there is a duplicate version';
                var1 = var4.bind(var10)(var1);
                throw var1;
            case 151:
                var1 = global;
                var4 = var1.Math;
                var1 = var4.random;
                var4 = var1.bind(var4)();
                var1 = 0.1;
                var9 = var4 < var1;
                var1 = new Array(0);
                var0 = _closure1_slot7;
                var8 = var0.bind(var10)(var2);
                var2 = var8.bind(var10)();
                var0 = var2.done;
                var7 = false;
                var5 = var2;
                var4 = false;
                var2 = false;
                if (var0) {
                    _fun15206_ip = 399;
                    continue _fun15206
                }
            case 220:
                var13 = var5.value;
                var12 = var13.version;
                var0 = var3.versions;
                var0 = var0.clientVersion;
                if (!(!(var12 <= var0))) {
                    _fun15206_ip = 343;
                    continue _fun15206
                }
            case 247:
                var0 = var13.run;
                var0 = var0.bind(var13)(var3);
                var14 = var3.versions;
                var12 = var13.version;
                var14.clientVersion = var12;
                if (!(var7 === var0)) {
                    _fun15206_ip = 308;
                    continue _fun15206
                }
            case 280:
                var0 = var13.cleanup;
                var12 = var4;
                if (!(var11 != var0)) {
                    _fun15206_ip = 375;
                    continue _fun15206
                }
            case 293:
                var0 = var13.cleanup;
                var0 = var0.bind(var13)();
                var12 = var4;
                _fun15206_ip = 375;
                continue _fun15206;
            case 308:
                var0 = var13.cleanup;
                var0 = var11 != var0;
                var12 = true;
                if (!var0) {
                    _fun15206_ip = 375;
                    continue _fun15206
                }
            case 323:
                var14 = var1.push;
                var0 = var13.cleanup;
                var0 = var14.bind(var1)(var0);
                var12 = true;
                _fun15206_ip = 375;
                continue _fun15206;
            case 343:
                var12 = var4;
                if (!var9) {
                    _fun15206_ip = 375;
                    continue _fun15206
                }
            case 349:
                var0 = var13.cleanup;
                var12 = var4;
                if (!(var11 != var0)) {
                    _fun15206_ip = 375;
                    continue _fun15206
                }
            case 362:
                var0 = var13.cleanup;
                var0 = var0.bind(var13)();
                var12 = var4;
            case 375:
                var13 = var8.bind(var10)();
                var0 = var13.done;
                var4 = var12;
                var5 = var13;
                var2 = var4;
                if (!var0) {
                    _fun15206_ip = 220;
                    continue _fun15206
                }
            case 399:
                var0 = {};
                var0.proto = var3;
                var0.isDirty = var2;
                var0.cleanupFuncs = var1;
                return var0;
        }
    };
    var2.runMigrations = var3;
    var1 = function arg0, arg1() {
        _fun15207: for (var _fun15207_ip = 0;;) switch (_fun15207_ip) {
            case 0:
                var3 = arg1;
                var10 = global;
                var2 = var10.Object;
                var1 = var2.entries;
                var0 = arg0;
                var5 = var1.bind(var2)(var0);
                var0 = var5.length;
                var2 = var5;
                if (!(var0 > var3)) {
                    _fun15207_ip = 125;
                    continue _fun15207
                }
            case 39:
                var4 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 7;
                var1 = var1[var0];
                var0 = undefined;
                var4 = var4.bind(var0)(var1);
                var1 = var4.sortBy;
                var0 = function(arg0) { // Environment: var11
                    _fun15208: for (var _fun15208_ip = 0;;) switch (_fun15208_ip) {
                        case 0:
                            var3 = arg0;
                            var1 = var3[Symbol.iterator];
                            var3 = var1().next;
                            var0 = var3().value;
                            var0 = var1;
                            var5 = undefined;
                            var2 = var0 === var5;
                            var0 = undefined;
                            if (var2) {
                                _fun15208_ip = 49;
                                continue _fun15208
                            }
                        case 24:
                            var4 = var3().value;
                            var3 = var1;
                            var3 = var3 === var5;
                            var0 = undefined;
                            var2 = var3;
                            if (var3) {
                                _fun15208_ip = 49;
                                continue _fun15208
                            }
                        case 43:
                            var0 = var4;
                            var2 = var3;
                        case 49:
                            if (var2) {
                                _fun15208_ip = 55;
                                continue _fun15208
                            }
                        case 52:
                            var1.return();
                        case 55:
                            var1 = var0.recentUses;
                            var0 = var0.recentUses;
                            var2 = var0.length;
                            var0 = 1;
                            var0 = var2 - var0;
                            var0 = var1[var0];
                            return var0;
                    }
                };
                var1 = var1.bind(var4)(var5, var0);
                var0 = var1.reverse;
                var1 = var0.bind(var1)();
                var0 = var1.length;
                var2 = var1;
                if (!(var0 > var3)) {
                    _fun15207_ip = 125;
                    continue _fun15207
                }
            case 103:
                var0 = var1.pop;
                var0 = var0.bind(var1)();
                var0 = var1.length;
                var2 = var1;
                if (var0 > var3) {
                    _fun15207_ip = 103;
                    continue _fun15207
                }
            case 125:
                var0 = {};
                var1 = _closure1_slot7;
                var8 = undefined;
                var7 = var1.bind(var8)(var2);
                var2 = var7.bind(var8)();
                var1 = var2.done;
                var6 = 2;
                var5 = 0;
                var4 = 1;
                var3 = 5;
                if (var1) {
                    _fun15207_ip = 339;
                    continue _fun15207
                }
            case 167:
                var12 = var2.value;
                var1 = _closure1_slot3;
                var1 = var1.bind(var8)(var12, var6);
                var12 = var1[var5];
                var13 = var1[var4];
                var14 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var3];
                var1 = var14.bind(var8)(var1);
                var14 = var1.FrecencyItem;
                var1 = var14.create;
                var1 = var1.bind(var14)();
                var14 = var13.frecency;
                var1.frecency = var14;
                var16 = var13.recentUses;
                var15 = var16.filter;
                var14 = function(arg0) { // Environment: var11
                    _fun15209: for (var _fun15209_ip = 0;;) switch (_fun15209_ip) {
                        case 0:
                            var2 = arg0;
                            var0 = null;
                            var0 = var0 != var2;
                            if (!var0) {
                                _fun15209_ip = 18;
                                continue _fun15209
                            }
                        case 12:
                            var1 = 0;
                            var0 = var2 > var1;
                        case 18:
                            return var0;
                    }
                };
                var16 = var15.bind(var16)(var14);
                var15 = var16.map;
                var14 = var10.String;
                var14 = var15.bind(var16)(var14);
                var1.recentUses = var14;
                var16 = var10.Math;
                var15 = var16.round;
                var14 = var13.score;
                var14 = var15.bind(var16)(var14);
                var1.score = var14;
                var13 = var13.totalUses;
                var1.totalUses = var13;
                var0[var12] = var1;
                var12 = var7.bind(var8)();
                var1 = var12.done;
                var2 = var12;
                if (!var1) {
                    _fun15207_ip = 167;
                    continue _fun15207
                }
            case 339:
                return var0;
        }
    };
    var2.serializeUsageHistory = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 665, 660, 1313, 1311, 1343, 1312, 22, 2]);