// modules/voice_filters/web/VoiceFilterActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var7;
    var0 = function arg0, arg1() {
        _fun94467: for (var _fun94467_ip = 0;;) switch (_fun94467_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun94467_ip = 46;
                    continue _fun94467
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun94467_ip = 55;
                    continue _fun94467
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun94467_ip = 345;
                    continue _fun94467
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun94467_ip = 323;
                    continue _fun94467
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun94467_ip = 283;
                    continue _fun94467
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun94467_ip = 270;
                    continue _fun94467
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
                    _fun94467_ip = 163;
                    continue _fun94467
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun94467_ip = 179;
                    continue _fun94467
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun94467_ip = 249;
                    continue _fun94467
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun94467_ip = 249;
                    continue _fun94467
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun94467_ip = 234;
                    continue _fun94467
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun94467_ip = 247;
                    continue _fun94467
                }
            case 234:
                var8 = _closure1_slot14;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun94467_ip = 265;
                continue _fun94467;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun94467_ip = 283;
                continue _fun94467;
            case 270:
                var6 = _closure1_slot14;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun94467_ip = 323;
                    continue _fun94467
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
                    _fun94467_ip = 330;
                    continue _fun94467
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun94468: for (var _fun94468_ip = 0;;) switch (_fun94468_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun94468_ip = 56;
                                continue _fun94468
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
                            _fun94468_ip = 67;
                            continue _fun94468;
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
    var0 = function arg0, arg1() {
        _fun94469: for (var _fun94469_ip = 0;;) switch (_fun94469_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun94469_ip = 23;
                    continue _fun94469
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun94469_ip = 33;
                    continue _fun94469
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
                    _fun94469_ip = 70;
                    continue _fun94469
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun94469_ip = 55;
                    continue _fun94469
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot14 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun94472: for (var _fun94472_ip = 0;;) switch (_fun94472_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arguments[1];
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun94472_ip = 334;
                            continue _fun94472
                        }
                    case 13:
                        var8 = arg0;
                        var3 = undefined;
                        if (!(var1 === var3)) {
                            _fun94472_ip = 24;
                            continue _fun94472
                        }
                    case 22:
                        var1 = null;
                    case 24:
                        var12 = var1;
                        var10 = undefined;
                        SaveGenerator(address = 33);
                    case 31:
                        return var3;
                    case 33:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun94472_ip = 331;
                            continue _fun94472
                        }
                    case 42:
                        var2 = _closure1_slot20;
                        var2 = var2.bind(var3)();
                        SaveGenerator(address = 57);
                    case 55:
                        return var2;
                    case 57:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 5);
                        if (var5) {
                            _fun94472_ip = 328;
                            continue _fun94472
                        }
                    case 66:
                        var11 = global;
                        var6 = var11.performance;
                        var5 = var6.now;
                        var10 = var5.bind(var6)();
                    case 83: // try_start_0
                        var6 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var5 = 9;
                        var5 = var7[var5];
                        var6 = var6.bind(var3)(var5);
                        var5 = var6.getVoiceFilters;
                        var7 = var5.bind(var6)();
                        var13 = _closure1_slot9;
                        var6 = var13.info;
                        var9 = var8;
                        var5 = 'Setting voice filter in native module:';
                        var5 = var6.bind(var13)(var5, var9);
                        var6 = var7.setVoiceFilter;
                        var5 = {};
                        var5.name = var9;
                        var5 = var6.bind(var7)(var5);
                        SaveGenerator(address = 161);
                    case 159:
                        return var5;
                    case 161:
                        ResumeGenerator(result_out_reg = 5, return_bool_out_reg = 6);
                        if (var6) {
                            _fun94472_ip = 250;
                            continue _fun94472
                        }
                    case 167:
                        var7 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var6 = 7;
                        var6 = var9[var6];
                        var9 = var7.bind(var3)(var6);
                        var7 = var9.dispatch;
                        var6 = {};
                        var13 = 'VOICE_FILTER_APPLIED';
                        var6.type = var13;
                        var13 = var8;
                        var6.voiceFilterId = var13;
                        var6.analyticsContext = var12;
                        var12 = var11.performance;
                        var11 = var12.now;
                        var11 = var11.bind(var12)();
                        var10 = var11 - var10;
                        var6.activationDurationMs = var10;
                        var6 = var7.bind(var9)(var6);
                    case 248: // try_end0
                        _fun94472_ip = 325;
                        continue _fun94472;
                    case 250:
                        return var5;
                    case 253: // catch_target0
                        CatchBlockStart(arg_register = 7);
                        var9 = _closure1_slot9;
                        var6 = var9.error;
                        var5 = 'failed to set voice filter';
                        var5 = var6.bind(var9)(var5, var7);
                        var5 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var4 = 7;
                        var4 = var6[var4];
                        var6 = var5.bind(var3)(var4);
                        var5 = var6.dispatch;
                        var4 = {};
                        var9 = 'VOICE_FILTER_APPLY_FAILED';
                        var4.type = var9;
                        var4.voiceFilterId = var8;
                        var4.error = var7;
                        var4 = var5.bind(var6)(var4);
                    case 325:
                        return var3;
                    case 328:
                        return var2;
                    case 331:
                        return var1;
                    case 334:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
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
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun94475: for (var _fun94475_ip = 0;;) switch (_fun94475_ip) {
                    case 0:
                        StartGenerator();
                        var6 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun94475_ip = 387;
                            continue _fun94475
                        }
                    case 13:
                        var1 = var6.getCatalogNonce;
                        var2 = null;
                        if (!(var2 != var1)) {
                            _fun94475_ip = 351;
                            continue _fun94475
                        }
                    case 28:
                        var1 = var6.getModuleVersion;
                        if (!(var2 != var1)) {
                            _fun94475_ip = 351;
                            continue _fun94475
                        }
                    case 41:
                        var1 = var6.getRequestedModelIds;
                        if (!(var2 != var1)) {
                            _fun94475_ip = 351;
                            continue _fun94475
                        }
                    case 54:
                        var1 = var6.setCatalog;
                        if (!(var2 != var1)) {
                            _fun94475_ip = 351;
                            continue _fun94475
                        }
                    case 67:
                        var1 = var6.getCatalogNonce;
                        var7 = var1.bind(var6)();
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 13;
                        var3 = var3[var1];
                        var1 = undefined;
                        var1 = var4.bind(var1)(var3);
                        var4 = var1.HTTP;
                        var3 = var4.get;
                        var1 = {};
                        var5 = _closure1_slot8;
                        var5 = var5.VOICE_FILTERS_CATALOG;
                        var1.url = var5;
                        var5 = {};
                        var8 = var6.getModuleVersion;
                        var8 = var8.bind(var6)();
                        var5.vfm_version = var8;
                        var8 = var6.getRequestedModelIds;
                        var10 = var8.bind(var6)();
                        var9 = var10.join;
                        var8 = ',';
                        var8 = var9.bind(var10)(var8);
                        var5.models = var8;
                        var5.nonce = var7;
                        var1.query = var5;
                        var5 = true;
                        var1.rejectWithError = var5;
                        var1 = var3.bind(var4)(var1);
                        SaveGenerator(address = 201);
                    case 199:
                        return var1;
                    case 201:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun94475_ip = 348;
                            continue _fun94475
                        }
                    case 210:
                        var5 = var1.text;
                        var3 = var1.body;
                        var4 = var1.headers;
                        var4 = var4["x-discord-catalog-signature"];
                        var7 = var3.models;
                        if (!(var2 != var7)) {
                            _fun94475_ip = 312;
                            continue _fun94475
                        }
                    case 244:
                        if (!(var2 != var4)) {
                            _fun94475_ip = 276;
                            continue _fun94475
                        }
                    case 248:
                        var2 = var6.setCatalog;
                        var2 = var2.bind(var6)(var5, var4);
                        SaveGenerator(address = 264);
                    case 262:
                        return var2;
                    case 264:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 4);
                        if (var4) {
                            _fun94475_ip = 273;
                            continue _fun94475
                        }
                    case 270:
                        return var3;
                    case 273:
                        return var2;
                    case 276:
                        var2 = global;
                        var4 = var2.Error;
                        var2 = var4.prototype;
                        var3 = Object.create(var2, {
                            constructor: {
                                value: var4
                            }
                        });
                        var12 = 'Voice filters catalog signature is missing';
                        var13 = var3;
                        var2 = new var13[var4](var12, var11);
                        var2 = var2 instanceof Object ? var2 : var3;
                        throw var2;
                    case 312:
                        var2 = global;
                        var4 = var2.Error;
                        var2 = var4.prototype;
                        var3 = Object.create(var2, {
                            constructor: {
                                value: var4
                            }
                        });
                        var12 = 'Voice filters catalog response is empty';
                        var13 = var3;
                        var2 = new var13[var4](var12, var11);
                        var2 = var2 instanceof Object ? var2 : var3;
                        throw var2;
                    case 348:
                        return var1;
                    case 351:
                        var1 = global;
                        var3 = var1.Error;
                        var1 = var3.prototype;
                        var2 = Object.create(var1, {
                            constructor: {
                                value: var3
                            }
                        });
                        var12 = 'Voice filters signed catalog is not supported';
                        var13 = var2;
                        var1 = new var13[var3](var12, var11);
                        var1 = var1 instanceof Object ? var1 : var2;
                        throw var1;
                    case 387:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot16 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot16 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun94478: for (var _fun94478_ip = 0;;) switch (_fun94478_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun94478_ip = 346;
                            continue _fun94478
                        }
                    case 12:
                        var3 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var9 = 9;
                        var1 = var1[var9];
                        var6 = undefined;
                        var3 = var3.bind(var6)(var1);
                        var1 = var3.canCheckVoiceFilterFilesExist;
                        var1 = var1.bind(var3)();
                        if (var1) {
                            _fun94478_ip = 53;
                            continue _fun94478
                        }
                    case 50:
                        return var6;
                    case 53:
                        var1 = global;
                        var5 = var1.Object;
                        var3 = var5.keys;
                        var1 = arg0;
                        var1 = var1.models;
                        var5 = var3.bind(var5)(var1);
                        var3 = var5.map;
                        var1 = function(arg0) { // Environment: var4
                            var3 = arg0;
                            var0 = {};
                            var0.id = var3;
                            var2 = _closure1_slot6;
                            var1 = undefined;
                            var1 = var2.bind(var1)(var3);
                            var0.fileName = var1;
                            return var0;
                        };
                        var7 = var3.bind(var5)(var1);
                        var3 = {};
                        var5 = _closure1_slot13;
                        var8 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var1 = var1[var9];
                        var8 = var8.bind(var6)(var1);
                        var1 = var8.checkVoiceFilterFilesExist;
                        var1 = var1.bind(var8)(var7);
                        SaveGenerator(address = 135);
                    case 133:
                        return var1;
                    case 135:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 8);
                        if (var8) {
                            _fun94478_ip = 343;
                            continue _fun94478
                        }
                    case 144:
                        var10 = var5.bind(var6)(var1);
                        var8 = var10.bind(var6)();
                        var5 = var8.done;
                        var9 = 8;
                        if (var5) {
                            _fun94478_ip = 245;
                            continue _fun94478
                        }
                    case 164:
                        var5 = var8.value;
                        var11 = var5.id;
                        var12 = var5.exists;
                        var5 = {};
                        var14 = _closure1_slot0;
                        var13 = _closure1_slot2;
                        var13 = var13[var9];
                        var13 = var14.bind(var6)(var13);
                        var13 = var13.VoiceFilterModelStatus;
                        if (var12) {
                            _fun94478_ip = 216;
                            continue _fun94478
                        }
                    case 208:
                        var12 = var13.MISSING;
                        _fun94478_ip = 222;
                        continue _fun94478;
                    case 216:
                        var12 = var13.DOWNLOADED;
                    case 222:
                        var5.status = var12;
                        var3[var11] = var5;
                        var11 = var10.bind(var6)();
                        var5 = var11.done;
                        var8 = var11;
                        if (!var5) {
                            _fun94478_ip = 164;
                            continue _fun94478
                        }
                    case 245:
                        var5 = var7.map;
                        var4 = function(arg0) { // Environment: var4
                            var0 = arg0;
                            var0 = var0.fileName;
                            return var0;
                        };
                        var5 = var5.bind(var7)(var4);
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var4 = 14;
                        var4 = var8[var4];
                        var7 = var7.bind(var6)(var4);
                        var4 = var7.arrayIsNotEmpty;
                        var4 = var4.bind(var7)(var5);
                        if (!var4) {
                            _fun94478_ip = 337;
                            continue _fun94478
                        }
                    case 296:
                        var4 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var2 = 15;
                        var2 = var7[var2];
                        var4 = var4.bind(var6)(var2);
                        var2 = var4.cleanupUnusedVoiceFilterFiles;
                        var2 = var2.bind(var4)(var5);
                        SaveGenerator(address = 331);
                    case 329:
                        return var2;
                    case 331:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 4);
                        if (var4) {
                            _fun94478_ip = 340;
                            continue _fun94478
                        }
                    case 337:
                        return var3;
                    case 340:
                        return var2;
                    case 343:
                        return var1;
                    case 346:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot17 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot17 = var0;
    var4 = function() {
        var0 = undefined;
        var3 = _closure1_slot19;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot18 = var4;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*() { // Environment: var2
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun94484: for (var _fun94484_ip = 0;;) switch (_fun94484_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun94484_ip = 513;
                            continue _fun94484
                        }
                    case 12:
                        var1 = undefined;
                        var9 = undefined;
                        var5 = _closure1_slot5;
                        var2 = var5.isNativeModuleLoaded;
                        var2 = var2.bind(var5)();
                        if (var2) {
                            _fun94484_ip = 62;
                            continue _fun94484
                        }
                    case 36:
                        var6 = _closure1_slot9;
                        var5 = var6.info;
                        var2 = 'Voice Filter catalog refresh ignored, module not loaded.';
                        var2 = var5.bind(var6)(var2);
                        _fun94484_ip = 510;
                        continue _fun94484;
                    case 62:
                        var2 = _closure1_slot11;
                        if (var2) {
                            _fun94484_ip = 510;
                            continue _fun94484
                        }
                    case 72: // try_start_0 // try_start_1
                        var2 = true;
                        _closure1_slot11 = var2;
                        var5 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var2 = 9;
                        var2 = var6[var2];
                        var5 = var5.bind(var1)(var2);
                        var2 = var5.getVoiceFilters;
                        var5 = var2.bind(var5)();
                        var2 = function() {
                            var0 = undefined;
                            var3 = _closure1_slot16;
                            var2 = var3.apply;
                            var0 = arguments;
                            var1 = var0;
                            var0 = this;
                            var0 = var2.bind(var3)(var0, var1);
                            return var0;
                        };
                        var2 = var2.bind(var1)(var5);
                        SaveGenerator(address = 124);
                    case 122:
                        return var2;
                    case 124:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 5);
                        if (var5) {
                            _fun94484_ip = 276;
                            continue _fun94484
                        }
                    case 133:
                        var9 = var2;
                        var6 = _closure1_slot5;
                        var5 = var6.getCatalogLastFetchTime;
                        var6 = var5.bind(var6)();
                        var5 = null;
                        var5 = var5 == var6;
                        var8 = undefined;
                        if (!var5) {
                            _fun94484_ip = 191;
                            continue _fun94484
                        }
                    case 163:
                        var5 = var9;
                        var3 = function() {
                            var0 = undefined;
                            var3 = _closure1_slot17;
                            var2 = var3.apply;
                            var0 = arguments;
                            var1 = var0;
                            var0 = this;
                            var0 = var2.bind(var3)(var0, var1);
                            return var0;
                        };
                        var3 = var3.bind(var1)(var5);
                        SaveGenerator(address = 182);
                    case 180:
                        return var3;
                    case 182:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 5);
                        var8 = var3;
                        if (var5) {
                            _fun94484_ip = 267;
                            continue _fun94484
                        }
                    case 191:
                        var6 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var5 = 7;
                        var5 = var7[var5];
                        var7 = var6.bind(var1)(var5);
                        var6 = var7.dispatch;
                        var5 = {};
                        var10 = 'VOICE_FILTER_CATALOG_FETCH_SUCCESS';
                        var5.type = var10;
                        var5.catalog = var9;
                        var5.initialModelState = var8;
                        var5 = var6.bind(var7)(var5);
                        SaveGenerator(address = 247);
                    case 245:
                        return var5;
                    case 247:
                        ResumeGenerator(result_out_reg = 5, return_bool_out_reg = 6);
                        if (var6) {
                            _fun94484_ip = 258;
                            continue _fun94484
                        }
                    case 253: // try_end0
                        _fun94484_ip = 483;
                        continue _fun94484;
                    case 258: // try_end1
                        var6 = false;
                        _closure1_slot11 = var6;
                        return var5;
                    case 267:
                        var5 = false;
                        _closure1_slot11 = var5;
                        return var3;
                    case 276:
                        var3 = false;
                        _closure1_slot11 = var3;
                        return var2;
                    case 285: // try_start_2 // catch_target0
                        CatchBlockStart(arg_register = 7);
                        var5 = _closure1_slot9;
                        var3 = var5.warn;
                        var8 = var7.message;
                        var2 = global;
                        var2 = var2.HermesInternal;
                        var6 = var2.concat;
                        var2 = 'Failed to refresh voice filters catalog: ';
                        var2 = var6.bind(var2)(var8);
                        var2 = var3.bind(var5)(var2);
                        var3 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var2 = 10;
                        var2 = var5[var2];
                        var9 = var3.bind(var1)(var2);
                        var8 = var9.track;
                        var2 = _closure1_slot7;
                        var6 = var2.VOICE_FILTER_ERROR;
                        var2 = {};
                        var10 = 'Failed to refresh voice filters catalog';
                        var2.error_message = var10;
                        var11 = _closure1_slot0;
                        var10 = 11;
                        var10 = var5[var10];
                        var11 = var11.bind(var1)(var10);
                        var10 = var11.serializeError;
                        var10 = var10.bind(var11)(var7);
                        var2.cause = var10;
                        var2 = var8.bind(var9)(var6, var2);
                        var2 = 12;
                        var2 = var5[var2];
                        var6 = var3.bind(var1)(var2);
                        var2 = var6.captureException;
                        var2 = var2.bind(var6)(var7);
                        var2 = 7;
                        var2 = var5[var2];
                        var5 = var3.bind(var1)(var2);
                        var3 = var5.dispatch;
                        var2 = {};
                        var6 = 'VOICE_FILTER_CATALOG_FETCH_FAILED';
                        var2.type = var6;
                        var2 = var3.bind(var5)(var2);
                        SaveGenerator(address = 477);
                    case 475:
                        return var2;
                    case 477:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 3);
                        if (var3) {
                            _fun94484_ip = 491;
                            continue _fun94484
                        }
                    case 483: // try_end2
                        var3 = false;
                        _closure1_slot11 = var3;
                        _fun94484_ip = 510;
                        continue _fun94484;
                    case 491:
                        var3 = false;
                        _closure1_slot11 = var3;
                        return var2;
                    case 500: // catch_target1 // catch_target2
                        CatchBlockStart(arg_register = 2);
                        var3 = false;
                        _closure1_slot11 = var3;
                        throw var2;
                    case 510:
                        return var1;
                    case 513:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot19 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot19 = var0;
    var1 = function() {
        var0 = undefined;
        var3 = _closure1_slot21;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot20 = var1;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*() { // Environment: var2
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun94490: for (var _fun94490_ip = 0;;) switch (_fun94490_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun94490_ip = 999;
                            continue _fun94490
                        }
                    case 12:
                        var1 = undefined;
                        var5 = undefined;
                        var11 = undefined;
                        var10 = undefined;
                        var3 = _closure1_slot5;
                        var2 = var3.isNativeModuleLoaded;
                        var2 = var2.bind(var3)();
                        if (var2) {
                            _fun94490_ip = 996;
                            continue _fun94490
                        }
                    case 43:
                        var3 = _closure1_slot5;
                        var2 = var3.isNativeModuleLoading;
                        var2 = var2.bind(var3)();
                        if (var2) {
                            _fun94490_ip = 996;
                            continue _fun94490
                        }
                    case 65:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var4 = 16;
                        var2 = var2[var4];
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.isWindows;
                        var2 = var2.bind(var3)();
                        if (var2) {
                            _fun94490_ip = 205;
                            continue _fun94490
                        }
                    case 98:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var2 = var2[var4];
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.isMac;
                        var2 = var2.bind(var3)();
                        if (var2) {
                            _fun94490_ip = 205;
                            continue _fun94490
                        }
                    case 128:
                        var3 = _closure1_slot1;
                        var12 = _closure1_slot2;
                        var2 = 7;
                        var2 = var12[var2];
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.dispatch;
                        var2 = {};
                        var7 = 'VOICE_FILTER_NATIVE_MODULE_STATE_CHANGE';
                        var2.type = var7;
                        var8 = _closure1_slot0;
                        var7 = 8;
                        var7 = var12[var7];
                        var7 = var8.bind(var1)(var7);
                        var7 = var7.VoiceFilterNativeModuleState;
                        var7 = var7.UNSUPPORTED;
                        var2.state = var7;
                        var2 = var3.bind(var4)(var2);
                        _fun94490_ip = 996;
                        continue _fun94490;
                    case 205: // try_start_0
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var7 = 7;
                        var4 = var2[var7];
                        var12 = var3.bind(var1)(var4);
                        var8 = var12.dispatch;
                        var4 = {};
                        var14 = 'VOICE_FILTER_NATIVE_MODULE_STATE_CHANGE';
                        var4.type = var14;
                        var16 = _closure1_slot0;
                        var15 = 8;
                        var13 = var2[var15];
                        var13 = var16.bind(var1)(var13);
                        var13 = var13.VoiceFilterNativeModuleState;
                        var13 = var13.LOADING;
                        var4.state = var13;
                        var4 = var8.bind(var12)(var4);
                        var8 = 9;
                        var2 = var2[var8];
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.ensureModule;
                        var2 = 'discord_voice_filters';
                        var2 = var3.bind(var4)(var2);
                        SaveGenerator(address = 310);
                    case 308:
                        return var2;
                    case 310:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 3);
                        if (var3) {
                            _fun94490_ip = 779;
                            continue _fun94490
                        }
                    case 319:
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var3 = var3[var8];
                        var4 = var4.bind(var1)(var3);
                        var3 = var4.getVoiceFilters;
                        var4 = var3.bind(var4)();
                        var5 = var4;
                        var3 = var4.setupResources;
                        var3 = var3.bind(var4)();
                        SaveGenerator(address = 365);
                    case 363:
                        return var3;
                    case 365:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 4);
                        if (var4) {
                            _fun94490_ip = 776;
                            continue _fun94490
                        }
                    case 374:
                        var4 = var5;
                        var4 = var4.setVoiceFilterLaggingCallback;
                        if (!(var1 !== var4)) {
                            _fun94490_ip = 418;
                            continue _fun94490
                        }
                    case 387:
                        var12 = var5;
                        var8 = var12.setVoiceFilterLaggingCallback;
                        var4 = _closure1_slot10;
                        var4 = var8.bind(var12)(var4);
                        SaveGenerator(address = 409);
                    case 407:
                        return var4;
                    case 409:
                        ResumeGenerator(result_out_reg = 4, return_bool_out_reg = 8);
                        if (var8) {
                            _fun94490_ip = 773;
                            continue _fun94490
                        }
                    case 418:
                        var8 = var5;
                        var8 = var8.setVoiceFilterReadyCallback;
                        if (!(var1 !== var8)) {
                            _fun94490_ip = 465;
                            continue _fun94490
                        }
                    case 431:
                        var12 = var5;
                        var8 = var12.setVoiceFilterReadyCallback;
                        var5 = function(arg0) { // Environment: var9
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 7;
                            var1 = var1[var0];
                            var0 = undefined;
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.dispatch;
                            var1 = {};
                            var4 = 'VOICE_FILTER_READY';
                            var1.type = var4;
                            var4 = arg0;
                            var1.name = var4;
                            var1 = var2.bind(var3)(var1);
                            return var0;
                        };
                        var5 = var8.bind(var12)(var5);
                        SaveGenerator(address = 456);
                    case 454:
                        return var5;
                    case 456:
                        ResumeGenerator(result_out_reg = 5, return_bool_out_reg = 8);
                        if (var8) {
                            _fun94490_ip = 770;
                            continue _fun94490
                        }
                    case 465:
                        var8 = _closure1_slot1;
                        var13 = _closure1_slot2;
                        var7 = var13[var7];
                        var12 = var8.bind(var1)(var7);
                        var8 = var12.dispatch;
                        var7 = {};
                        var7.type = var14;
                        var14 = _closure1_slot0;
                        var13 = var13[var15];
                        var13 = var14.bind(var1)(var13);
                        var13 = var13.VoiceFilterNativeModuleState;
                        var13 = var13.LOADED;
                        var7.state = var13;
                        var7 = var8.bind(var12)(var7);
                        SaveGenerator(address = 531);
                    case 529:
                        return var7;
                    case 531:
                        ResumeGenerator(result_out_reg = 7, return_bool_out_reg = 8);
                        if (var8) {
                            _fun94490_ip = 767;
                            continue _fun94490
                        }
                    case 540:
                        var8 = _closure1_slot18;
                        var8 = var8.bind(var1)();
                        SaveGenerator(address = 552);
                    case 550:
                        return var8;
                    case 552:
                        ResumeGenerator(result_out_reg = 8, return_bool_out_reg = 12);
                        if (var12) {
                            _fun94490_ip = 764;
                            continue _fun94490
                        }
                    case 561:
                        var13 = _closure1_slot4;
                        var12 = var13.getMostRecentlyRequestedVoiceFilter;
                        var13 = var12.bind(var13)();
                        var10 = var13;
                        var12 = null;
                        if (!(var12 != var13)) {
                            _fun94490_ip = 694;
                            continue _fun94490
                        }
                    case 586:
                        var15 = _closure1_slot5;
                        var14 = var15.getVoiceFilter;
                        var13 = var10;
                        var13 = var14.bind(var15)(var13);
                        var11 = var13;
                        var14 = var12 == var13;
                        var13 = undefined;
                        if (var14) {
                            _fun94490_ip = 624;
                            continue _fun94490
                        }
                    case 618:
                        var13 = var11.available;
                    case 624:
                        var11 = true;
                        if (!(var11 === var13)) {
                            _fun94490_ip = 663;
                            continue _fun94490
                        }
                    case 630:
                        var13 = _closure1_slot0;
                        var14 = _closure1_slot2;
                        var11 = 17;
                        var11 = var14[var11];
                        var13 = var13.bind(var1)(var11);
                        var11 = var13.requestVoiceFilterSwitch;
                        var10 = var11.bind(var13)(var10);
                        _fun94490_ip = 694;
                        continue _fun94490;
                    case 663:
                        var11 = _closure1_slot0;
                        var13 = _closure1_slot2;
                        var10 = 17;
                        var10 = var13[var10];
                        var11 = var11.bind(var1)(var10);
                        var10 = var11.requestVoiceFilterSwitch;
                        var10 = var10.bind(var11)(var12);
                    case 694:
                        var11 = _closure1_slot4;
                        var10 = var11.getMediaEngine;
                        var12 = var10.bind(var11)();
                        var11 = var12.on;
                        var13 = _closure1_slot0;
                        var14 = _closure1_slot2;
                        var10 = 18;
                        var10 = var14[var10];
                        var10 = var13.bind(var1)(var10);
                        var10 = var10.MediaEngineEvent;
                        var10 = var10.VoiceFiltersFailed;
                        var9 = function(arg0) { // Environment: var9
                            var4 = arg0;
                            var3 = _closure1_slot9;
                            var2 = var3.warn;
                            var1 = global;
                            var0 = var1.HermesInternal;
                            var5 = var0.concat;
                            var0 = 'Voice Filters failed in process: ';
                            var0 = var5.bind(var0)(var4);
                            var0 = var2.bind(var3)(var0);
                            var3 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var0 = 10;
                            var2 = var5[var0];
                            var0 = undefined;
                            var9 = var3.bind(var0)(var2);
                            var8 = var9.track;
                            var2 = _closure1_slot7;
                            var7 = var2.VOICE_FILTER_ERROR;
                            var2 = {};
                            var6 = 'Voice Filters failed in process';
                            var2.error_message = var6;
                            var11 = _closure1_slot0;
                            var10 = 11;
                            var10 = var5[var10];
                            var12 = var11.bind(var0)(var10);
                            var11 = var12.serializeError;
                            var10 = var1.Error;
                            var13 = var10.prototype;
                            var13 = Object.create(var13, {
                                constructor: {
                                    value: var10
                                }
                            });
                            var16 = var13;
                            var15 = var4;
                            var10 = new var16[var10](var15, var14);
                            var10 = var10 instanceof Object ? var10 : var13;
                            var10 = var11.bind(var12)(var10);
                            var2.cause = var10;
                            var2 = var8.bind(var9)(var7, var2);
                            var2 = 12;
                            var2 = var5[var2];
                            var3 = var3.bind(var0)(var2);
                            var2 = var3.captureException;
                            var5 = var1.Error;
                            var1 = {};
                            var1.cause = var4;
                            var4 = var5.prototype;
                            var4 = Object.create(var4, {
                                constructor: {
                                    value: var5
                                }
                            });
                            var16 = var4;
                            var15 = var6;
                            var14 = var1;
                            var1 = new var16[var5](var15, var14, var13);
                            var1 = var1 instanceof Object ? var1 : var4;
                            var1 = var2.bind(var3)(var1);
                            return var0;
                        };
                        var9 = var11.bind(var12)(var10, var9);
                    case 759: // try_end0
                        _fun94490_ip = 996;
                        continue _fun94490;
                    case 764:
                        return var8;
                    case 767:
                        return var7;
                    case 770:
                        return var5;
                    case 773:
                        return var4;
                    case 776:
                        return var3;
                    case 779:
                        return var2;
                    case 782: // catch_target0
                        CatchBlockStart(arg_register = 5);
                        var4 = _closure1_slot9;
                        var3 = var4.warn;
                        var8 = var5.message;
                        var2 = global;
                        var2 = var2.HermesInternal;
                        var7 = var2.concat;
                        var2 = 'Failed to load Voice Filters module: ';
                        var2 = var7.bind(var2)(var8);
                        var2 = var3.bind(var4)(var2);
                        var3 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var2 = 10;
                        var2 = var7[var2];
                        var9 = var3.bind(var1)(var2);
                        var8 = var9.track;
                        var2 = _closure1_slot7;
                        var4 = var2.VOICE_FILTER_ERROR;
                        var2 = {};
                        var10 = 'Failed to load Voice Filters module';
                        var2.error_message = var10;
                        var6 = _closure1_slot0;
                        var10 = 11;
                        var10 = var7[var10];
                        var11 = var6.bind(var1)(var10);
                        var10 = var11.serializeError;
                        var10 = var10.bind(var11)(var5);
                        var2.cause = var10;
                        var2 = var8.bind(var9)(var4, var2);
                        var2 = 12;
                        var2 = var7[var2];
                        var4 = var3.bind(var1)(var2);
                        var2 = var4.captureException;
                        var2 = var2.bind(var4)(var5);
                        var2 = 7;
                        var2 = var7[var2];
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.dispatch;
                        var2 = {};
                        var5 = 'VOICE_FILTER_NATIVE_MODULE_STATE_CHANGE';
                        var2.type = var5;
                        var5 = 8;
                        var5 = var7[var5];
                        var5 = var6.bind(var1)(var5);
                        var5 = var5.VoiceFilterNativeModuleState;
                        var5 = var5.FAILED;
                        var2.state = var5;
                        var2 = var3.bind(var4)(var2);
                    case 996:
                        return var1;
                    case 999:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot21 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot21 = var0;
    var5 = global;
    var12 = var5.Object;
    var11 = var12.defineProperty;
    var9 = {};
    var8 = true;
    var9.value = var8;
    var0 = '__esModule';
    var0 = var11.bind(var12)(var2, var0, var9);
    var0 = 0;
    var9 = var7[var0];
    var0 = undefined;
    var9 = var10.bind(var0)(var9);
    var _closure1_slot3 = var9;
    var9 = 1;
    var9 = var7[var9];
    var9 = var10.bind(var0)(var9);
    var _closure1_slot4 = var9;
    var9 = 2;
    var9 = var7[var9];
    var9 = var10.bind(var0)(var9);
    var _closure1_slot5 = var9;
    var9 = 3;
    var9 = var7[var9];
    var9 = var6.bind(var0)(var9);
    var9 = var9.getVoiceFilterModelFileName;
    var _closure1_slot6 = var9;
    var9 = 4;
    var9 = var7[var9];
    var9 = var6.bind(var0)(var9);
    var11 = var9.AnalyticEvents;
    var _closure1_slot7 = var11;
    var9 = var9.Endpoints;
    var _closure1_slot8 = var9;
    var9 = 5;
    var9 = var7[var9];
    var11 = var10.bind(var0)(var9);
    var9 = var11.prototype;
    var10 = Object.create(var9, {
        constructor: {
            value: var11
        }
    });
    var15 = 'VoiceFilterActionCreators';
    var16 = var10;
    var9 = new var16[var11](var15, var14);
    var9 = var9 instanceof Object ? var9 : var10;
    var _closure1_slot9 = var9;
    var9 = 6;
    var9 = var7[var9];
    var12 = var6.bind(var0)(var9);
    var11 = var12.debounce;
    var10 = {};
    var10.leading = var8;
    var9 = function() { // Environment: var3
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 7;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'VOICE_FILTER_LAGGING';
        var1.type = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var8 = 1000;
    var8 = var11.bind(var12)(var9, var8, var10);
    var _closure1_slot10 = var8;
    var8 = false;
    var _closure1_slot11 = var8;
    var5 = var5.Map;
    var8 = var5.prototype;
    var8 = Object.create(var8, {
        constructor: {
            value: var5
        }
    });
    var16 = var8;
    var5 = new var16[var5](var15);
    var5 = var5 instanceof Object ? var5 : var8;
    var _closure1_slot12 = var5;
    var5 = 19;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/voice_filters/web/VoiceFilterActionCreators.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function arg0() {
        _fun94494: for (var _fun94494_ip = 0;;) switch (_fun94494_ip) {
            case 0:
                var12 = arg0;
                var0 = arguments[1];
                var _closure2_slot0 = var12;
                var6 = undefined;
                if (!(var0 === var6)) {
                    _fun94494_ip = 20;
                    continue _fun94494
                }
            case 18:
                var0 = null;
            case 20:
                var _closure2_slot1 = var0;
                var _closure2_slot2 = var6;
                var8 = var12.url;
                var4 = var12.modelId;
                _closure2_slot2 = var4;
                var7 = var12.fileName;
                var3 = _closure1_slot5;
                var0 = var3.getModelState;
                var3 = var0.bind(var3)(var4);
                var5 = _closure1_slot12;
                var0 = var5.get;
                var0 = var0.bind(var5)(var4);
                var5 = null;
                if (!(var5 == var0)) {
                    _fun94494_ip = 422;
                    continue _fun94494
                }
            case 92:
                var9 = var5 == var3;
                var11 = undefined;
                if (var9) {
                    _fun94494_ip = 106;
                    continue _fun94494
                }
            case 101:
                var11 = var3.status;
            case 106:
                var13 = _closure1_slot0;
                var9 = _closure1_slot2;
                var10 = 8;
                var9 = var9[var10];
                var9 = var13.bind(var6)(var9);
                var9 = var9.VoiceFilterModelStatus;
                var9 = var9.DOWNLOADED;
                if (!(var11 !== var9)) {
                    _fun94494_ip = 402;
                    continue _fun94494
                }
            case 145:
                var9 = var5 == var3;
                var5 = undefined;
                if (var9) {
                    _fun94494_ip = 159;
                    continue _fun94494
                }
            case 154:
                var5 = var3.status;
            case 159:
                var9 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var10];
                var3 = var9.bind(var6)(var3);
                var3 = var3.VoiceFilterModelStatus;
                var3 = var3.DOWNLOADING;
                if (!(var5 !== var3)) {
                    _fun94494_ip = 349;
                    continue _fun94494
                }
            case 195:
                var5 = _closure1_slot1;
                var9 = _closure1_slot2;
                var3 = 7;
                var3 = var9[var3];
                var11 = var5.bind(var6)(var3);
                var10 = var11.dispatch;
                var3 = {};
                var13 = 'VOICE_FILTER_DOWNLOAD_STARTED';
                var3.type = var13;
                var16 = var3;
                var15 = var12;
                var12 = copyDataProperties(var16, var15);
                var3 = var10.bind(var11)(var3);
                var3 = 9;
                var3 = var9[var3];
                var6 = var5.bind(var6)(var3);
                var5 = var6.downloadVoiceFilterFile;
                var3 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var6 = var0.downloadedBytes;
                    var5 = var0.totalBytes;
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 7;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.dispatch;
                    var1 = {};
                    var4 = 'VOICE_FILTER_DOWNLOAD_PROGRESS';
                    var1.type = var4;
                    var7 = _closure2_slot0;
                    var8 = var1;
                    var4 = copyDataProperties(var8, var7);
                    var4 = 'downloadedBytes';
                    var1[var4] = var6;
                    var4 = 'totalBytes';
                    var1[var4] = var5;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var6 = var5.bind(var6)(var8, var7, var3);
                var5 = var6.then;
                var3 = function(arg0) { // Environment: var1
                    _fun94496: for (var _fun94496_ip = 0;;) switch (_fun94496_ip) {
                        case 0:
                            var0 = arg0;
                            var0 = var0.fetchedFromNetwork;
                            if (!var0) {
                                _fun94496_ip = 176;
                                continue _fun94496
                            }
                        case 17:
                            var1 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var0 = 10;
                            var0 = var2[var0];
                            var5 = undefined;
                            var3 = var1.bind(var5)(var0);
                            var2 = var3.track;
                            var0 = _closure1_slot7;
                            var1 = var0.VOICE_FILTER_DOWNLOAD_ATTEMPTED;
                            var0 = {};
                            var6 = _closure1_slot4;
                            var4 = var6.getActiveVoiceFilter;
                            var7 = var4.bind(var6)();
                            var4 = null;
                            var8 = var4 != var7;
                            var6 = null;
                            if (!var8) {
                                _fun94496_ip = 87;
                                continue _fun94496
                            }
                        case 84:
                            var6 = var7;
                        case 87:
                            var0.active_voice_filter_id = var6;
                            var6 = true;
                            var0.success = var6;
                            var7 = _closure2_slot0;
                            var7 = var7.voiceFilterId;
                            var0.voice_filter_id = var7;
                            var7 = _closure2_slot2;
                            var0.model_id = var7;
                            var7 = _closure2_slot1;
                            var7 = var4 == var7;
                            var5 = undefined;
                            if (var7) {
                                _fun94496_ip = 153;
                                continue _fun94496
                            }
                        case 143:
                            var6 = _closure2_slot1;
                            var5 = var6.reason;
                        case 153:
                            var6 = var4 != var5;
                            var4 = null;
                            if (!var6) {
                                _fun94496_ip = 165;
                                continue _fun94496
                            }
                        case 162:
                            var4 = var5;
                        case 165:
                            var0.reason = var4;
                            var0 = var2.bind(var3)(var1, var0);
                        case 176:
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 7;
                            var1 = var1[var0];
                            var0 = undefined;
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.dispatch;
                            var1 = {};
                            var4 = 'VOICE_FILTER_FILE_READY';
                            var1.type = var4;
                            var9 = _closure2_slot0;
                            var10 = var1;
                            var5 = copyDataProperties(var10, var9);
                            var5 = _closure2_slot1;
                            var4 = 'analyticsContext';
                            var1[var4] = var5;
                            var1 = var2.bind(var3)(var1);
                            return var0;
                    }
                };
                var6 = var5.bind(var6)(var3);
                var5 = var6.catch;
                var3 = function(arg0) { // Environment: var1
                    _fun94497: for (var _fun94497_ip = 0;;) switch (_fun94497_ip) {
                        case 0:
                            var5 = arg0;
                            var0 = null;
                            if (!(var0 != var5)) {
                                _fun94497_ip = 23;
                                continue _fun94497
                            }
                        case 9:
                            var0 = var5.USER_CANCELED_DOWNLOAD;
                            if (var0) {
                                _fun94497_ip = 276;
                                continue _fun94497
                            }
                        case 23:
                            var3 = _closure1_slot9;
                            var2 = var3.error;
                            var1 = {};
                            var1.reason = var5;
                            var15 = _closure2_slot0;
                            var16 = var1;
                            var4 = copyDataProperties(var16, var15);
                            var7 = 'Failed to download voice filter dependency';
                            var1 = var2.bind(var3)(var7, var1);
                            var3 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var1 = 10;
                            var1 = var4[var1];
                            var2 = undefined;
                            var10 = var3.bind(var2)(var1);
                            var9 = var10.track;
                            var1 = _closure1_slot7;
                            var8 = var1.VOICE_FILTER_ERROR;
                            var1 = {};
                            var1.error_message = var7;
                            var11 = _closure1_slot0;
                            var0 = 11;
                            var0 = var4[var0];
                            var13 = var11.bind(var2)(var0);
                            var12 = var13.serializeError;
                            var0 = global;
                            var11 = var0.Error;
                            var14 = var11.prototype;
                            var14 = Object.create(var14, {
                                constructor: {
                                    value: var11
                                }
                            });
                            var17 = var14;
                            var16 = var5;
                            var11 = new var17[var11](var16, var15);
                            var11 = var11 instanceof Object ? var11 : var14;
                            var11 = var12.bind(var13)(var11);
                            var1.cause = var11;
                            var1 = var9.bind(var10)(var8, var1);
                            var1 = 12;
                            var1 = var4[var1];
                            var3 = var3.bind(var2)(var1);
                            var2 = var3.captureException;
                            var4 = var0.Error;
                            var0 = {};
                            var0.cause = var5;
                            var1 = var4.prototype;
                            var1 = Object.create(var1, {
                                constructor: {
                                    value: var4
                                }
                            });
                            var17 = var1;
                            var16 = var7;
                            var15 = var0;
                            var0 = new var17[var4](var16, var15, var14);
                            var1 = var0 instanceof Object ? var0 : var1;
                            var0 = {};
                            var4 = {};
                            var6 = _closure2_slot2;
                            var4.modelId = var6;
                            var0.tags = var4;
                            var4 = {};
                            var4.reason = var5;
                            var0.extra = var4;
                            var0 = var2.bind(var3)(var1, var0);
                            _fun94497_ip = 308;
                            continue _fun94497;
                        case 276:
                            var3 = _closure1_slot9;
                            var2 = var3.info;
                            var1 = _closure2_slot0;
                            var0 = 'User canceled the download for Voice Filter dependency';
                            var0 = var2.bind(var3)(var0, var1);
                        case 308:
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 7;
                            var1 = var1[var0];
                            var0 = undefined;
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.dispatch;
                            var1 = {};
                            var4 = 'VOICE_FILTER_DOWNLOAD_FAILED';
                            var1.type = var4;
                            var15 = _closure2_slot0;
                            var16 = var1;
                            var4 = copyDataProperties(var16, var15);
                            var4 = 'error';
                            var1[var4] = var5;
                            var1 = var2.bind(var3)(var1);
                            return var0;
                    }
                };
                var5 = var5.bind(var6)(var3);
                var3 = var5.finally;
                var1 = function() { // Environment: var1
                    var2 = _closure1_slot12;
                    var1 = var2.delete;
                    var0 = _closure2_slot2;
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var1 = var3.bind(var5)(var1);
                var3 = _closure1_slot12;
                var2 = var3.set;
                var2 = var2.bind(var3)(var4, var1);
                return var1;
            case 349:
                var1 = global;
                var3 = var1.Promise;
                var2 = var3.reject;
                var5 = var1.Error;
                var1 = var5.prototype;
                var4 = Object.create(var1, {
                    constructor: {
                        value: var5
                    }
                });
                var16 = 'Voice filter model is downloading but not in active downloads map';
                var17 = var4;
                var1 = new var17[var5](var16, var15);
                var1 = var1 instanceof Object ? var1 : var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            case 402:
                var1 = global;
                var2 = var1.Promise;
                var1 = var2.resolve;
                var1 = var1.bind(var2)();
                return var1;
            case 422:
                return var0;
        }
    };
    var2.downloadVoiceFilterDependency = var5;
    var5 = function() {
        var0 = undefined;
        var3 = _closure1_slot15;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.applyVoiceFilterInNativeModule = var5;
    var2.refreshVoiceFiltersCatalog = var4;
    var3 = function() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 7;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'VOICE_FILTER_DOWNLOAD_CANCELED';
        var1.type = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.cancelVoiceFilterDownload = var3;
    var2.maybeSetupVoiceFiltersNativeModule = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 3476, 4321, 4322, 660, 3, 22, 806, 3515, 7444, 795, 7166, 1207, 507, 1385, 12395, 478, 12396, 3633, 2]);