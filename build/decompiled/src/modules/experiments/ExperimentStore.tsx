// modules/experiments/ExperimentStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun17646: for (var _fun17646_ip = 0;;) switch (_fun17646_ip) {
        case 0:
            var5 = require;
            var9 = metroImportDefault;
            var2 = exports;
            var6 = dependencyMap;
            var _closure1_slot0 = var5;
            var _closure1_slot1 = var9;
            var _closure1_slot2 = var6;
            var0 = function() { // Original name: _isNativeReflectConstruct, environment: var1
                _fun17647: for (var _fun17647_ip = 0;;) switch (_fun17647_ip) {
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
                        _fun17647_ip = 74;
                        continue _fun17647;
                    case 72: // catch_target0
                        CatchBlockStart(arg_register = 1);
                    case 74:
                        var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                            var0 = _closure2_slot0;
                            var0 = !var0;
                            var0 = !var0;
                            return var0;
                        };
                        _closure1_slot35 = var1;
                        var0 = undefined;
                        var0 = var1.bind(var0)();
                        return var0;
                }
            };
            var _closure1_slot35 = var0;
            var0 = function(arg0, arg1) { // Original name: _createForOfIteratorHelperLoose, environment: var1
                _fun17650: for (var _fun17650_ip = 0;;) switch (_fun17650_ip) {
                    case 0:
                        var2 = arg0;
                        var _closure2_slot0 = var2;
                        var4 = global;
                        var1 = var4.Symbol;
                        var3 = 'undefined';
                        var1 = typeof var1;
                        var1 = var3 !== var1;
                        if (!var1) {
                            _fun17650_ip = 45;
                            continue _fun17650
                        }
                    case 30:
                        var3 = var4.Symbol;
                        var3 = var3.iterator;
                        var1 = var2[var3];
                    case 45:
                        if (var1) {
                            _fun17650_ip = 54;
                            continue _fun17650
                        }
                    case 48:
                        var1 = var2["@@iterator"];
                    case 54:
                        if (var1) {
                            _fun17650_ip = 342;
                            continue _fun17650
                        }
                    case 60:
                        var5 = var4.Array;
                        var3 = var5.isArray;
                        var5 = var3.bind(var5)(var2);
                        var3 = var1;
                        if (var5) {
                            _fun17650_ip = 322;
                            continue _fun17650
                        }
                    case 85:
                        var7 = undefined;
                        var5 = undefined;
                        if (!var2) {
                            _fun17650_ip = 282;
                            continue _fun17650
                        }
                    case 95:
                        var8 = 'string';
                        var6 = typeof var2;
                        if (!(var8 !== var6)) {
                            _fun17650_ip = 269;
                            continue _fun17650
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
                            _fun17650_ip = 162;
                            continue _fun17650
                        }
                    case 157:
                        var6 = var2.constructor;
                    case 162:
                        var9 = var8;
                        if (!var6) {
                            _fun17650_ip = 178;
                            continue _fun17650
                        }
                    case 168:
                        var6 = var2.constructor;
                        var9 = var6.name;
                    case 178:
                        var6 = 'Map';
                        if (!(var6 !== var9)) {
                            _fun17650_ip = 248;
                            continue _fun17650
                        }
                    case 186:
                        var6 = 'Set';
                        if (!(var6 !== var9)) {
                            _fun17650_ip = 248;
                            continue _fun17650
                        }
                    case 194:
                        var6 = 'Arguments';
                        if (!(var6 !== var9)) {
                            _fun17650_ip = 233;
                            continue _fun17650
                        }
                    case 204:
                        var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                        var6 = var8.test;
                        var8 = var6.bind(var8)(var9);
                        var6 = undefined;
                        if (!var8) {
                            _fun17650_ip = 246;
                            continue _fun17650
                        }
                    case 233:
                        var8 = _closure1_slot37;
                        var6 = var8.bind(var7)(var2, var7);
                    case 246:
                        _fun17650_ip = 264;
                        continue _fun17650;
                    case 248:
                        var9 = var4.Array;
                        var8 = var9.from;
                        var6 = var8.bind(var9)(var2);
                    case 264:
                        var5 = var6;
                        _fun17650_ip = 282;
                        continue _fun17650;
                    case 269:
                        var6 = _closure1_slot37;
                        var5 = var6.bind(var7)(var2, var7);
                    case 282:
                        var3 = var5;
                        if (var3) {
                            _fun17650_ip = 322;
                            continue _fun17650
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
                            _fun17650_ip = 329;
                            continue _fun17650
                        }
                    case 325:
                        _closure2_slot0 = var3;
                    case 329:
                        var3 = 0;
                        var _closure2_slot1 = var3;
                        var0 = function() { // Environment: var0
                            _fun17651: for (var _fun17651_ip = 0;;) switch (_fun17651_ip) {
                                case 0:
                                    var1 = _closure2_slot1;
                                    var0 = _closure2_slot0;
                                    var0 = var0.length;
                                    if (!(!(var1 >= var0))) {
                                        _fun17651_ip = 56;
                                        continue _fun17651
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
                                    _fun17651_ip = 67;
                                    continue _fun17651;
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
            var _closure1_slot36 = var0;
            var0 = function(arg0, arg1) { // Original name: _arrayLikeToArray, environment: var1
                _fun17652: for (var _fun17652_ip = 0;;) switch (_fun17652_ip) {
                    case 0:
                        var3 = arg0;
                        var0 = null;
                        var2 = undefined;
                        var0 = var0 == var2;
                        if (var0) {
                            _fun17652_ip = 23;
                            continue _fun17652
                        }
                    case 14:
                        var1 = var3.length;
                        var0 = var2 > var1;
                    case 23:
                        var1 = undefined;
                        if (!var0) {
                            _fun17652_ip = 33;
                            continue _fun17652
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
                            _fun17652_ip = 70;
                            continue _fun17652
                        }
                    case 55:
                        var4 = var3[var2];
                        var0[var2] = var4;
                        var2 = var2 + 1;
                        if (var2 < var1) {
                            _fun17652_ip = 55;
                            continue _fun17652
                        }
                    case 70:
                        return var0;
                }
            };
            var _closure1_slot37 = var0;
            var0 = function(arg0) { // Original name: getHash, environment: var1
                _fun17653: for (var _fun17653_ip = 0;;) switch (_fun17653_ip) {
                    case 0:
                        var2 = arg0;
                        var0 = _closure1_slot32;
                        var0 = var0[var2];
                        var4 = undefined;
                        if (!(var4 !== var0)) {
                            _fun17653_ip = 22;
                            continue _fun17653
                        }
                    case 20:
                        return var0;
                    case 22:
                        var3 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var0 = 12;
                        var0 = var5[var0];
                        var3 = var3.bind(var4)(var0);
                        var0 = var3.v3;
                        var0 = var0.bind(var3)(var2);
                        var1 = _closure1_slot32;
                        var1[var2] = var0;
                        return var0;
                }
            };
            var _closure1_slot38 = var0;
            var0 = function(arg0, arg1) { // Original name: isTriggerDebuggingEnabled, environment: var1
                _fun17654: for (var _fun17654_ip = 0;;) switch (_fun17654_ip) {
                    case 0:
                        var0 = arg0;
                        if (var0) {
                            _fun17654_ip = 26;
                            continue _fun17654
                        }
                    case 6:
                        var3 = _closure1_slot33;
                        var2 = var3.includes;
                        var1 = arg1;
                        var0 = var2.bind(var3)(var1);
                    case 26:
                        return var0;
                }
            };
            var _closure1_slot39 = var0;
            var0 = function(arg0) { // Original name: userCanUseExperiments, environment: var1
                _fun17655: for (var _fun17655_ip = 0;;) switch (_fun17655_ip) {
                    case 0:
                        var1 = arg0;
                        var0 = var1.flags;
                        var2 = null;
                        var3 = var2 != var0;
                        var4 = 0;
                        if (!var3) {
                            _fun17655_ip = 22;
                            continue _fun17655
                        }
                    case 19:
                        var4 = var0;
                    case 22:
                        var3 = _closure1_slot15;
                        var3 = var3.STAFF;
                        var3 = var4 & var3;
                        var0 = _closure1_slot15;
                        var0 = var0.STAFF;
                        var0 = var3 === var0;
                        if (var0) {
                            _fun17655_ip = 66;
                            continue _fun17655
                        }
                    case 56:
                        var1 = var1.personal_connection_id;
                        var0 = var2 != var1;
                    case 66:
                        return var0;
                }
            };
            var _closure1_slot40 = var0;
            var0 = function(arg0, arg1, arg2, arg3) { // Original name: getTrackExposureExperimentKey, environment: var1
                _fun17656: for (var _fun17656_ip = 0;;) switch (_fun17656_ip) {
                    case 0:
                        var0 = arg1;
                        var5 = arg2;
                        var2 = arg3;
                        var8 = var0.type;
                        var1 = global;
                        var3 = var1.HermesInternal;
                        var7 = var3.concat;
                        var6 = '';
                        var4 = '|';
                        var3 = arg0;
                        var3 = var7.bind(var6)(var8, var4, var3);
                        var6 = var0.triggerDebuggingEnabled;
                        if (!var6) {
                            _fun17656_ip = 60;
                            continue _fun17656
                        }
                    case 54:
                        var7 = undefined;
                        var6 = var7 !== var5;
                    case 60:
                        if (!var6) {
                            _fun17656_ip = 74;
                            continue _fun17656
                        }
                    case 63:
                        var8 = var5.length;
                        var7 = 0;
                        var6 = var8 > var7;
                    case 74:
                        var9 = var0.type;
                        var8 = _closure1_slot11;
                        var8 = var8.USER;
                        if (!(var9 !== var8)) {
                            _fun17656_ip = 215;
                            continue _fun17656
                        }
                    case 96:
                        var8 = var0.type;
                        var7 = _closure1_slot11;
                        var7 = var7.GUILD;
                        if (!(var8 !== var7)) {
                            _fun17656_ip = 143;
                            continue _fun17656
                        }
                    case 115:
                        var7 = var1.Error;
                        var8 = var7.prototype;
                        var8 = Object.create(var8, {
                            constructor: {
                                value: var7
                            }
                        });
                        var13 = var8;
                        var7 = new var13[var7](var12);
                        var7 = var7 instanceof Object ? var7 : var8;
                        throw var7;
                    case 143:
                        var7 = var0.guildId;
                        var0 = var1.HermesInternal;
                        var0 = var0.concat;
                        var0 = var0.bind(var4)(var7);
                        var8 = var3 + var0;
                        var0 = var8;
                        if (!var6) {
                            _fun17656_ip = 213;
                            continue _fun17656
                        }
                    case 174:
                        var7 = var1.HermesInternal;
                        var7 = var7.concat;
                        var7 = var7.bind(var4)(var5);
                        var9 = var8 + var7;
                        var7 = var9;
                        if (!var2) {
                            _fun17656_ip = 210;
                            continue _fun17656
                        }
                    case 200:
                        var8 = '|triggerDebugging';
                        var7 = var9 + var8;
                    case 210:
                        var0 = var7;
                    case 213:
                        return var0;
                    case 215:
                        var0 = var3;
                        if (!var6) {
                            _fun17656_ip = 260;
                            continue _fun17656
                        }
                    case 221:
                        var1 = var1.HermesInternal;
                        var1 = var1.concat;
                        var1 = var1.bind(var4)(var5);
                        var3 = var3 + var1;
                        var1 = var3;
                        if (!var2) {
                            _fun17656_ip = 257;
                            continue _fun17656
                        }
                    case 247:
                        var2 = '|triggerDebugging';
                        var1 = var3 + var2;
                    case 257:
                        var0 = var1;
                    case 260:
                        return var0;
                }
            };
            var _closure1_slot41 = var0;
            var0 = function(arg0) { // Original name: getTrackExposureExperimentHash, environment: var1
                _fun17657: for (var _fun17657_ip = 0;;) switch (_fun17657_ip) {
                    case 0:
                        var0 = arg0;
                        var3 = var0.type;
                        var2 = _closure1_slot11;
                        var2 = var2.USER;
                        if (!(var3 !== var2)) {
                            _fun17657_ip = 135;
                            continue _fun17657
                        }
                    case 25:
                        var3 = var0.type;
                        var2 = _closure1_slot11;
                        var2 = var2.GUILD;
                        if (!(var3 !== var2)) {
                            _fun17657_ip = 74;
                            continue _fun17657
                        }
                    case 44:
                        var2 = global;
                        var2 = var2.Error;
                        var3 = var2.prototype;
                        var3 = Object.create(var3, {
                            constructor: {
                                value: var2
                            }
                        });
                        var14 = var3;
                        var2 = new var14[var2](var13);
                        var2 = var2 instanceof Object ? var2 : var3;
                        throw var2;
                    case 74:
                        var4 = _closure1_slot38;
                        var13 = var0.bucket;
                        var11 = var0.revision;
                        var9 = var0.guildId;
                        var2 = global;
                        var2 = var2.HermesInternal;
                        var5 = var2.concat;
                        var14 = '';
                        var2 = '|';
                        var12 = var2;
                        var10 = var2;
                        var3 = var14[var5](var13, var12, var11, var10, var9, var8);
                        var2 = undefined;
                        var2 = var4.bind(var2)(var3);
                        return var2;
                    case 135:
                        var2 = _closure1_slot38;
                        var5 = var0.bucket;
                        var4 = var0.revision;
                        var0 = global;
                        var0 = var0.HermesInternal;
                        var3 = var0.concat;
                        var1 = '';
                        var0 = '|';
                        var1 = var3.bind(var1)(var5, var0, var4);
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                        return var0;
                }
            };
            var _closure1_slot42 = var0;
            var0 = function(arg0, arg1) { // Original name: _hasExperimentTrackedExposure, environment: var1
                _fun17658: for (var _fun17658_ip = 0;;) switch (_fun17658_ip) {
                    case 0:
                        var2 = _closure1_slot22;
                        var0 = arg0;
                        var2 = var2[var0];
                        var0 = null;
                        var0 = var0 != var2;
                        if (!var0) {
                            _fun17658_ip = 79;
                            continue _fun17658
                        }
                    case 23:
                        var3 = global;
                        var4 = var3.Date;
                        var3 = var4.now;
                        var4 = var3.bind(var4)();
                        var3 = var2.time;
                        var3 = var4 - var3;
                        var1 = _closure1_slot34;
                        var3 = var3 > var1;
                        var1 = !var3;
                        if (var3) {
                            _fun17658_ip = 76;
                            continue _fun17658
                        }
                    case 64:
                        var3 = var2.hash;
                        var2 = arg1;
                        var1 = var3 === var2;
                    case 76:
                        var0 = var1;
                    case 79:
                        return var0;
                }
            };
            var _closure1_slot43 = var0;
            var0 = function(arg0) { // Original name: trackExposure, environment: var1
                _fun17659: for (var _fun17659_ip = 0;;) switch (_fun17659_ip) {
                    case 0:
                        var0 = arg0;
                        var9 = var0.experimentId;
                        var8 = var0.descriptor;
                        var7 = var0.location;
                        var13 = var0.location_stack;
                        var10 = var0.context;
                        var14 = var0.fingerprint;
                        var12 = var0.excluded;
                        var11 = var0.exposureType;
                        var3 = var8.assignmentSource;
                        var0 = 'override';
                        if (!(var0 !== var3)) {
                            _fun17659_ip = 1183;
                            continue _fun17659
                        }
                    case 66:
                        var0 = 'ready_payload';
                        if (!(var0 !== var3)) {
                            _fun17659_ip = 121;
                            continue _fun17659
                        }
                    case 76:
                        var1 = 'logged_out_api';
                        var2 = true;
                        if (!(var1 === var3)) {
                            _fun17659_ip = 152;
                            continue _fun17659
                        }
                    case 88:
                        var3 = var8.fingerprint;
                        var4 = _closure1_slot9;
                        var1 = var4.getFingerprint;
                        var1 = var1.bind(var4)();
                        var2 = false;
                        if (!(var3 !== var1)) {
                            _fun17659_ip = 152;
                            continue _fun17659
                        }
                    case 117:
                        var2 = true;
                        _fun17659_ip = 152;
                        continue _fun17659;
                    case 121:
                        var1 = var8.sessionId;
                        var3 = _closure1_slot9;
                        var0 = var3.getSessionId;
                        var0 = var0.bind(var3)();
                        var2 = false;
                        if (!(var1 !== var0)) {
                            _fun17659_ip = 152;
                            continue _fun17659
                        }
                    case 150:
                        var2 = true;
                    case 152:
                        var0 = var8.override;
                        if (var0) {
                            _fun17659_ip = 1179;
                            continue _fun17659
                        }
                    case 164:
                        var0 = _closure1_slot12;
                        var0 = var0.AUTO_FALLBACK;
                        var5 = var11 === var0;
                        if (!var5) {
                            _fun17659_ip = 196;
                            continue _fun17659
                        }
                    case 184:
                        var0 = var8.triggerDebuggingEnabled;
                        var0 = !var0;
                        var5 = !var0;
                    case 196:
                        var3 = _closure1_slot41;
                        var0 = undefined;
                        var24 = undefined;
                        var23 = var9;
                        var22 = var8;
                        var21 = var7;
                        var20 = var5;
                        var4 = var24[var3](var23, var22, var21, var20, var19);
                        var3 = _closure1_slot42;
                        var3 = var3.bind(var0)(var8);
                        var6 = var2;
                        if (!var6) {
                            _fun17659_ip = 253;
                            continue _fun17659
                        }
                    case 235:
                        var16 = _closure1_slot23;
                        var15 = var16.get;
                        var15 = var15.bind(var16)(var4);
                        var6 = var15 === var3;
                    case 253:
                        if (var6) {
                            _fun17659_ip = 1175;
                            continue _fun17659
                        }
                    case 259:
                        var6 = _closure1_slot43;
                        var6 = var6.bind(var0)(var4, var3);
                        if (var6) {
                            _fun17659_ip = 1171;
                            continue _fun17659
                        }
                    case 275:
                        var15 = var8.type;
                        var6 = _closure1_slot11;
                        var6 = var6.USER;
                        if (!(var15 !== var6)) {
                            _fun17659_ip = 687;
                            continue _fun17659
                        }
                    case 297:
                        var15 = var8.type;
                        var6 = _closure1_slot11;
                        var6 = var6.GUILD;
                        if (!(var15 === var6)) {
                            _fun17659_ip = 1069;
                            continue _fun17659
                        }
                    case 319:
                        var6 = _closure1_slot13;
                        if (var5) {
                            _fun17659_ip = 334;
                            continue _fun17659
                        }
                    case 326:
                        var18 = var6.EXPERIMENT_GUILD_TRIGGERED;
                        _fun17659_ip = 340;
                        continue _fun17659;
                    case 334:
                        var18 = var6.EXPERIMENT_GUILD_TRIGGERED_FALLBACK;
                    case 340:
                        var6 = {};
                        var6.name = var9;
                        var15 = var8.revision;
                        var6.revision = var15;
                        var15 = var8.bucket;
                        var6.bucket = var15;
                        var15 = var8.guildId;
                        var6.guild_id = var15;
                        var6.location = var7;
                        var6.location_stack = var13;
                        var15 = var8.hashResult;
                        var6.hash_result = var15;
                        var6.excluded = var12;
                        var6.exposure_type = var11;
                        var15 = var8.assignmentSource;
                        var6.assignment_source = var15;
                        var15 = var8.sessionId;
                        var6.assignment_session_id = var15;
                        var15 = var8.loadedFromCache;
                        var6.assignment_loaded_from_cache = var15;
                        var15 = var8.holdoutName;
                        var6.holdout_name = var15;
                        var15 = var8.holdoutRevision;
                        var6.holdout_revision = var15;
                        var15 = var8.holdoutBucket;
                        var6.holdout_bucket = var15;
                        if (var2) {
                            _fun17659_ip = 527;
                            continue _fun17659
                        }
                    case 476:
                        var16 = _closure1_slot1;
                        var17 = _closure1_slot2;
                        var15 = 13;
                        var15 = var17[var15];
                        var17 = var16.bind(var0)(var15);
                        var16 = var17.track;
                        var15 = {};
                        var19 = true;
                        var15.flush = var19;
                        var15.fingerprint = var14;
                        var15 = var16.bind(var17)(var18, var6, var15);
                        _fun17659_ip = 1069;
                        continue _fun17659;
                    case 527:
                        var18 = {};
                        var23 = var18;
                        var22 = var6;
                        var6 = copyDataProperties(var23, var22);
                        var15 = var8.fingerprint;
                        var6 = 'assignment_fingerprint';
                        var18[var6] = var15;
                        var15 = _closure1_slot9;
                        var6 = var15.getSessionId;
                        var15 = var6.bind(var15)();
                        var6 = 'current_session_id';
                        var18[var6] = var15;
                        var15 = _closure1_slot9;
                        var6 = var15.getFingerprint;
                        var15 = var6.bind(var15)();
                        var6 = 'current_fingerprint';
                        var18[var6] = var15;
                        var6 = _closure1_slot25;
                        var15 = var6.source;
                        var6 = 'current_source';
                        var18[var6] = var15;
                        var15 = _closure1_slot1;
                        var16 = _closure1_slot2;
                        var6 = 13;
                        var6 = var16[var6];
                        var17 = var15.bind(var0)(var6);
                        var16 = var17.track;
                        var6 = _closure1_slot13;
                        var15 = var6.EXPERIMENT_GUILD_TRIGGERED_IGNORED;
                        var6 = {};
                        var19 = false;
                        var6.flush = var19;
                        var6.fingerprint = var14;
                        var6 = var16.bind(var17)(var15, var18, var6);
                        _fun17659_ip = 1069;
                        continue _fun17659;
                    case 687:
                        var6 = {};
                        var6.name = var9;
                        var15 = var8.revision;
                        var6.revision = var15;
                        var15 = var8.population;
                        var6.population = var15;
                        var15 = var8.bucket;
                        var6.bucket = var15;
                        var6.location = var7;
                        var6.location_stack = var13;
                        var13 = var8.hashResult;
                        var6.hash_result = var13;
                        var6.excluded = var12;
                        var6.exposure_type = var11;
                        var11 = var8.assignmentSource;
                        var6.assignment_source = var11;
                        var11 = var8.sessionId;
                        var6.assignment_session_id = var11;
                        var11 = var8.loadedFromCache;
                        var6.assignment_loaded_from_cache = var11;
                        var11 = var8.holdoutName;
                        var6.holdout_name = var11;
                        var11 = var8.holdoutRevision;
                        var6.holdout_revision = var11;
                        var11 = var8.holdoutBucket;
                        var6.holdout_bucket = var11;
                        var11 = null;
                        if (!(var11 != var10)) {
                            _fun17659_ip = 839;
                            continue _fun17659
                        }
                    case 828:
                        var10 = var10.guildId;
                        var6.context_guild_id = var10;
                    case 839:
                        var10 = _closure1_slot13;
                        if (var5) {
                            _fun17659_ip = 854;
                            continue _fun17659
                        }
                    case 846:
                        var13 = var10.EXPERIMENT_USER_TRIGGERED;
                        _fun17659_ip = 860;
                        continue _fun17659;
                    case 854:
                        var13 = var10.EXPERIMENT_USER_TRIGGERED_FALLBACK;
                    case 860:
                        if (var2) {
                            _fun17659_ip = 914;
                            continue _fun17659
                        }
                    case 863:
                        var11 = _closure1_slot1;
                        var12 = _closure1_slot2;
                        var10 = 13;
                        var10 = var12[var10];
                        var12 = var11.bind(var0)(var10);
                        var11 = var12.track;
                        var10 = {};
                        var15 = true;
                        var10.flush = var15;
                        var10.fingerprint = var14;
                        var10 = var11.bind(var12)(var13, var6, var10);
                        _fun17659_ip = 1069;
                        continue _fun17659;
                    case 914:
                        var13 = {};
                        var23 = var13;
                        var22 = var6;
                        var6 = copyDataProperties(var23, var22);
                        var10 = var8.fingerprint;
                        var6 = 'assignment_fingerprint';
                        var13[var6] = var10;
                        var10 = _closure1_slot9;
                        var6 = var10.getSessionId;
                        var10 = var6.bind(var10)();
                        var6 = 'current_session_id';
                        var13[var6] = var10;
                        var10 = _closure1_slot9;
                        var6 = var10.getFingerprint;
                        var10 = var6.bind(var10)();
                        var6 = 'current_fingerprint';
                        var13[var6] = var10;
                        var6 = _closure1_slot25;
                        var10 = var6.source;
                        var6 = 'current_source';
                        var13[var6] = var10;
                        var10 = _closure1_slot1;
                        var11 = _closure1_slot2;
                        var6 = 13;
                        var6 = var11[var6];
                        var12 = var10.bind(var0)(var6);
                        var11 = var12.track;
                        var6 = _closure1_slot13;
                        var10 = var6.EXPERIMENT_USER_TRIGGERED_IGNORED;
                        var6 = {};
                        var15 = false;
                        var6.flush = var15;
                        var6.fingerprint = var14;
                        var6 = var11.bind(var12)(var10, var13, var6);
                    case 1069:
                        if (var2) {
                            _fun17659_ip = 1154;
                            continue _fun17659
                        }
                    case 1072:
                        var6 = _closure1_slot22;
                        var2 = _closure1_slot41;
                        var24 = undefined;
                        var23 = var9;
                        var22 = var8;
                        var21 = var7;
                        var20 = var5;
                        var5 = var24[var2](var23, var22, var21, var20, var19);
                        var2 = {};
                        var7 = global;
                        var9 = var7.Date;
                        var7 = var9.now;
                        var7 = var7.bind(var9)();
                        var2.time = var7;
                        var7 = _closure1_slot42;
                        var7 = var7.bind(var0)(var8);
                        var2.hash = var7;
                        var6[var5] = var2;
                        var5 = _closure1_slot59;
                        var2 = _closure1_slot22;
                        var2 = var5.bind(var0)(var2);
                        _fun17659_ip = 1169;
                        continue _fun17659;
                    case 1154:
                        var2 = _closure1_slot23;
                        var1 = var2.set;
                        var1 = var1.bind(var2)(var4, var3);
                    case 1169:
                        return var0;
                    case 1171:
                        var0 = false;
                        return var0;
                    case 1175:
                        var0 = false;
                        return var0;
                    case 1179:
                        var0 = false;
                        return var0;
                    case 1183:
                        var0 = false;
                        return var0;
                }
            };
            var _closure1_slot44 = var0;
            var0 = function(arg0) { // Original name: _loadGuildFilter, environment: var1
                _fun17660: for (var _fun17660_ip = 0;;) switch (_fun17660_ip) {
                    case 0:
                        var4 = arg0;
                        var0 = var4[Symbol.iterator];
                        var4 = var0().next;
                        var3 = var4().value;
                        var1 = var0;
                        var5 = undefined;
                        var2 = var1 === var5;
                        var1 = undefined;
                        if (var2) {
                            _fun17660_ip = 27;
                            continue _fun17660
                        }
                    case 24:
                        var1 = var3;
                    case 27:
                        var3 = undefined;
                        if (var2) {
                            _fun17660_ip = 57;
                            continue _fun17660
                        }
                    case 32:
                        var6 = var4().value;
                        var4 = var0;
                        var4 = var4 === var5;
                        var3 = undefined;
                        var2 = var4;
                        if (var4) {
                            _fun17660_ip = 57;
                            continue _fun17660
                        }
                    case 51:
                        var3 = var6;
                        var2 = var4;
                    case 57:
                        if (var2) {
                            _fun17660_ip = 63;
                            continue _fun17660
                        }
                    case 60:
                        var0.return();
                    case 63:
                        var4 = _closure1_slot0;
                        var0 = _closure1_slot2;
                        var6 = 14;
                        var0 = var0[var6];
                        var0 = var4.bind(var5)(var0);
                        var0 = var0.GUILD_FILTERS;
                        var4 = var0[var1];
                        var0 = null;
                        var4 = var0 != var4;
                        if (!var4) {
                            _fun17660_ip = 137;
                            continue _fun17660
                        }
                    case 105:
                        var4 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var2 = var2[var6];
                        var2 = var4.bind(var5)(var2);
                        var2 = var2.GUILD_FILTERS;
                        var1 = var2[var1];
                        var0 = var1.bind(var2)(var3);
                    case 137:
                        return var0;
                }
            };
            var _closure1_slot45 = var0;
            var0 = function(arg0) { // Original name: _loadOverrides, environment: var1
                _fun17661: for (var _fun17661_ip = 0;;) switch (_fun17661_ip) {
                    case 0:
                        var2 = arg0;
                        var0 = {};
                        var1 = null;
                        if (!(var1 != var2)) {
                            _fun17661_ip = 115;
                            continue _fun17661
                        }
                    case 11:
                        var1 = _closure1_slot36;
                        var4 = undefined;
                        var3 = var1.bind(var4)(var2);
                        var2 = var3.bind(var4)();
                        var1 = var2.done;
                        if (var1) {
                            _fun17661_ip = 113;
                            continue _fun17661
                        }
                    case 37:
                        var1 = var2.value;
                        var8 = var1.b;
                        var6 = _closure1_slot36;
                        var1 = var1.k;
                        var7 = var6.bind(var4)(var1);
                        var6 = var7.bind(var4)();
                        var1 = var6.done;
                        if (var1) {
                            _fun17661_ip = 98;
                            continue _fun17661
                        }
                    case 74:
                        var1 = var6.value;
                        var0[var1] = var8;
                        var9 = var7.bind(var4)();
                        var1 = var9.done;
                        var6 = var9;
                        if (!var1) {
                            _fun17661_ip = 74;
                            continue _fun17661
                        }
                    case 98:
                        var6 = var3.bind(var4)();
                        var1 = var6.done;
                        var2 = var6;
                        if (!var1) {
                            _fun17661_ip = 37;
                            continue _fun17661
                        }
                    case 113:
                        return var0;
                    case 115:
                        return var0;
                }
            };
            var _closure1_slot46 = var0;
            var0 = function(arg0) { // Original name: _loadPopulation, environment: var1
                var4 = _closure1_slot8;
                var3 = undefined;
                var1 = arg0;
                var0 = 2;
                var1 = var4.bind(var3)(var1, var0);
                var0 = 0;
                var5 = var1[var0];
                var0 = 1;
                var1 = var1[var0];
                var0 = {};
                var4 = var5.map;
                var3 = function(arg0) { // Environment: var3
                    _fun17663: for (var _fun17663_ip = 0;;) switch (_fun17663_ip) {
                        case 0:
                            var4 = arg0;
                            var0 = var4[Symbol.iterator];
                            var4 = var0().next;
                            var3 = var4().value;
                            var1 = var0;
                            var6 = undefined;
                            var2 = var1 === var6;
                            var1 = undefined;
                            if (var2) {
                                _fun17663_ip = 27;
                                continue _fun17663
                            }
                        case 24:
                            var1 = var3;
                        case 27:
                            var3 = undefined;
                            if (var2) {
                                _fun17663_ip = 57;
                                continue _fun17663
                            }
                        case 32:
                            var5 = var4().value;
                            var4 = var0;
                            var4 = var4 === var6;
                            var3 = undefined;
                            var2 = var4;
                            if (var4) {
                                _fun17663_ip = 57;
                                continue _fun17663
                            }
                        case 51:
                            var3 = var5;
                            var2 = var4;
                        case 57:
                            if (var2) {
                                _fun17663_ip = 63;
                                continue _fun17663
                            }
                        case 60:
                            var0.return();
                        case 63:
                            var0 = {};
                            var0.bucket = var1;
                            var2 = var3.map;
                            var1 = function(arg0) { // Environment: var1
                                var0 = arg0;
                                var2 = var0.s;
                                var1 = var0.e;
                                var0 = {};
                                var0.start = var2;
                                var0.end = var1;
                                return var0;
                            };
                            var1 = var2.bind(var3)(var1);
                            var0.positions = var1;
                            return var0;
                    }
                };
                var3 = var4.bind(var5)(var3);
                var0.buckets = var3;
                var3 = var1.map;
                var2 = _closure1_slot45;
                var2 = var3.bind(var1)(var2);
                var0.filters = var2;
                var0.rawFilterData = var1;
                return var0;
            };
            var _closure1_slot47 = var0;
            var0 = function(arg0) { // Original name: handleLoadedExperiments, environment: var1
                _fun17665: for (var _fun17665_ip = 0;;) switch (_fun17665_ip) {
                    case 0:
                        var0 = arg0;
                        var3 = _closure1_slot31;
                        var2 = !var3;
                        if (var3) {
                            _fun17665_ip = 29;
                            continue _fun17665
                        }
                    case 16:
                        var4 = var0.type;
                        var3 = 'CONNECTION_OPEN';
                        var2 = var3 === var4;
                    case 29:
                        if (!var2) {
                            _fun17665_ip = 48;
                            continue _fun17665
                        }
                    case 32:
                        var5 = _closure1_slot40;
                        var4 = var0.user;
                        var3 = undefined;
                        var2 = var5.bind(var3)(var4);
                    case 48:
                        if (!var2) {
                            _fun17665_ip = 57;
                            continue _fun17665
                        }
                    case 51:
                        var2 = true;
                        _closure1_slot31 = var2;
                    case 57:
                        var3 = var0.type;
                        var2 = 'EXPERIMENTS_FETCH_SUCCESS';
                        var2 = var2 === var3;
                        if (!var2) {
                            _fun17665_ip = 77;
                            continue _fun17665
                        }
                    case 73:
                        var2 = _closure1_slot21;
                    case 77:
                        if (!var2) {
                            _fun17665_ip = 99;
                            continue _fun17665
                        }
                    case 80:
                        var3 = _closure1_slot25;
                        var4 = var3.source;
                        var3 = 'ready_payload';
                        var2 = var3 === var4;
                    case 99:
                        if (!var2) {
                            _fun17665_ip = 202;
                            continue _fun17665
                        }
                    case 102:
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var2 = 13;
                        var3 = var3[var2];
                        var2 = undefined;
                        var5 = var4.bind(var2)(var3);
                        var4 = var5.track;
                        var2 = _closure1_slot13;
                        var3 = var2.EXPERIMENT_FETCH_IGNORED;
                        var2 = {};
                        var6 = var0.fingerprint;
                        var2.fingerprint = var6;
                        var6 = _closure1_slot25;
                        var6 = var6.source;
                        var2.current_snapshot_source = var6;
                        var6 = _closure1_slot25;
                        var6 = var6.sessionId;
                        var2.current_snapshot_session_id = var6;
                        var6 = _closure1_slot25;
                        var6 = var6.fingerprint;
                        var2.current_snapshot_fingerprint = var6;
                        var2 = var4.bind(var5)(var3, var2);
                    case 202:
                        var2 = {};
                        _closure1_slot26 = var2;
                        var2 = {};
                        _closure1_slot27 = var2;
                        var2 = {};
                        _closure1_slot28 = var2;
                        var2 = var0.type;
                        var4 = 'CONNECTION_OPEN';
                        var3 = var4 === var2;
                        if (var3) {
                            _fun17665_ip = 248;
                            continue _fun17665
                        }
                    case 236:
                        var5 = var0.fingerprint;
                        var2 = null;
                        var3 = var2 == var5;
                    case 248:
                        if (var3) {
                            _fun17665_ip = 275;
                            continue _fun17665
                        }
                    case 251:
                        var5 = var0.fingerprint;
                        var6 = _closure1_slot9;
                        var2 = var6.getFingerprint;
                        var2 = var2.bind(var6)();
                        var3 = var5 === var2;
                    case 275:
                        var7 = var0.experiments;
                        var6 = var0.guildExperiments;
                        var2 = var0.type;
                        var5 = 'logged_out_api';
                        if (!(var4 === var2)) {
                            _fun17665_ip = 308;
                            continue _fun17665
                        }
                    case 302:
                        var5 = 'ready_payload';
                    case 308:
                        var2 = 'sessionId';
                        var2 = var2 in var0;
                        if (var2) {
                            _fun17665_ip = 351;
                            continue _fun17665
                        }
                    case 319:
                        var4 = _closure1_slot9;
                        var2 = var4.getSessionId;
                        var4 = var2.bind(var4)();
                        var2 = null;
                        var8 = var2 != var4;
                        var2 = '';
                        if (!var8) {
                            _fun17665_ip = 349;
                            continue _fun17665
                        }
                    case 346:
                        var2 = var4;
                    case 349:
                        _fun17665_ip = 357;
                        continue _fun17665;
                    case 351:
                        var2 = var0.sessionId;
                    case 357:
                        var4 = _closure1_slot9;
                        var0 = var4.getFingerprint;
                        var0 = var0.bind(var4)();
                        if (!var3) {
                            _fun17665_ip = 424;
                            continue _fun17665
                        }
                    case 374:
                        var4 = _closure1_slot49;
                        var3 = {};
                        var3.rawUserExperiments = var7;
                        var7 = null;
                        if (!(var7 == var6)) {
                            _fun17665_ip = 395;
                            continue _fun17665
                        }
                    case 391:
                        var6 = new Array(0);
                    case 395:
                        var3.rawGuildExperiments = var6;
                        var3.source = var5;
                        var3.sessionId = var2;
                        var3.fingerprint = var0;
                        var2 = undefined;
                        var0 = false;
                        var0 = var4.bind(var2)(var3, var0);
                    case 424:
                        var0 = true;
                        _closure1_slot21 = var0;
                        var0 = undefined;
                        return var0;
                }
            };
            var _closure1_slot48 = var0;
            var0 = function(arg0) { // Original name: processRawExperiments, environment: var1
                _fun17666: for (var _fun17666_ip = 0;;) switch (_fun17666_ip) {
                    case 0:
                        var0 = arg0;
                        var2 = arguments[1];
                        var6 = var0.rawUserExperiments;
                        var3 = var0.rawGuildExperiments;
                        var8 = var0.source;
                        var _closure2_slot0 = var8;
                        var7 = var0.sessionId;
                        var _closure2_slot1 = var7;
                        var4 = var0.fingerprint;
                        var _closure2_slot2 = var4;
                        var0 = undefined;
                        if (!(var2 === var0)) {
                            _fun17666_ip = 57;
                            continue _fun17666
                        }
                    case 55:
                        var2 = false;
                    case 57:
                        var _closure2_slot3 = var2;
                        var5 = {};
                        var5.rawUserExperiments = var6;
                        var2 = null;
                        var9 = var3;
                        if (!(var2 == var9)) {
                            _fun17666_ip = 81;
                            continue _fun17666
                        }
                    case 77:
                        var9 = new Array(0);
                    case 81:
                        var5.rawGuildExperiments = var9;
                        var5.source = var8;
                        var5.sessionId = var7;
                        var5.fingerprint = var4;
                        _closure1_slot25 = var5;
                        var5 = var6.forEach;
                        var4 = function(arg0) { // Environment: var1
                            _fun17667: for (var _fun17667_ip = 0;;) switch (_fun17667_ip) {
                                case 0:
                                    var8 = arg0;
                                    var1 = var8[Symbol.iterator];
                                    var8 = var1().next;
                                    var4 = var8().value;
                                    var2 = var1;
                                    var0 = undefined;
                                    var2 = var2 === var0;
                                    var3 = undefined;
                                    if (var2) {
                                        _fun17667_ip = 27;
                                        continue _fun17667
                                    }
                                case 24:
                                    var3 = var4;
                                case 27:
                                    var14 = undefined;
                                    if (var2) {
                                        _fun17667_ip = 57;
                                        continue _fun17667
                                    }
                                case 32:
                                    var5 = var8().value;
                                    var4 = var1;
                                    var4 = var4 === var0;
                                    var14 = undefined;
                                    var2 = var4;
                                    if (var4) {
                                        _fun17667_ip = 57;
                                        continue _fun17667
                                    }
                                case 51:
                                    var14 = var5;
                                    var2 = var4;
                                case 57:
                                    var7 = undefined;
                                    if (var2) {
                                        _fun17667_ip = 87;
                                        continue _fun17667
                                    }
                                case 62:
                                    var5 = var8().value;
                                    var4 = var1;
                                    var4 = var4 === var0;
                                    var7 = undefined;
                                    var2 = var4;
                                    if (var4) {
                                        _fun17667_ip = 87;
                                        continue _fun17667
                                    }
                                case 81:
                                    var7 = var5;
                                    var2 = var4;
                                case 87:
                                    var12 = undefined;
                                    if (var2) {
                                        _fun17667_ip = 117;
                                        continue _fun17667
                                    }
                                case 92:
                                    var5 = var8().value;
                                    var4 = var1;
                                    var4 = var4 === var0;
                                    var12 = undefined;
                                    var2 = var4;
                                    if (var4) {
                                        _fun17667_ip = 117;
                                        continue _fun17667
                                    }
                                case 111:
                                    var12 = var5;
                                    var2 = var4;
                                case 117:
                                    var13 = undefined;
                                    if (var2) {
                                        _fun17667_ip = 147;
                                        continue _fun17667
                                    }
                                case 122:
                                    var5 = var8().value;
                                    var4 = var1;
                                    var4 = var4 === var0;
                                    var13 = undefined;
                                    var2 = var4;
                                    if (var4) {
                                        _fun17667_ip = 147;
                                        continue _fun17667
                                    }
                                case 141:
                                    var13 = var5;
                                    var2 = var4;
                                case 147:
                                    var11 = undefined;
                                    if (var2) {
                                        _fun17667_ip = 177;
                                        continue _fun17667
                                    }
                                case 152:
                                    var5 = var8().value;
                                    var4 = var1;
                                    var4 = var4 === var0;
                                    var11 = undefined;
                                    var2 = var4;
                                    if (var4) {
                                        _fun17667_ip = 177;
                                        continue _fun17667
                                    }
                                case 171:
                                    var11 = var5;
                                    var2 = var4;
                                case 177:
                                    var10 = undefined;
                                    if (var2) {
                                        _fun17667_ip = 207;
                                        continue _fun17667
                                    }
                                case 182:
                                    var5 = var8().value;
                                    var4 = var1;
                                    var4 = var4 === var0;
                                    var10 = undefined;
                                    var2 = var4;
                                    if (var4) {
                                        _fun17667_ip = 207;
                                        continue _fun17667
                                    }
                                case 201:
                                    var10 = var5;
                                    var2 = var4;
                                case 207:
                                    var9 = undefined;
                                    if (var2) {
                                        _fun17667_ip = 237;
                                        continue _fun17667
                                    }
                                case 212:
                                    var5 = var8().value;
                                    var4 = var1;
                                    var4 = var4 === var0;
                                    var9 = undefined;
                                    var2 = var4;
                                    if (var4) {
                                        _fun17667_ip = 237;
                                        continue _fun17667
                                    }
                                case 231:
                                    var9 = var5;
                                    var2 = var4;
                                case 237:
                                    var6 = undefined;
                                    if (var2) {
                                        _fun17667_ip = 267;
                                        continue _fun17667
                                    }
                                case 242:
                                    var5 = var8().value;
                                    var4 = var1;
                                    var4 = var4 === var0;
                                    var6 = undefined;
                                    var2 = var4;
                                    if (var4) {
                                        _fun17667_ip = 267;
                                        continue _fun17667
                                    }
                                case 261:
                                    var6 = var5;
                                    var2 = var4;
                                case 267:
                                    var5 = undefined;
                                    if (var2) {
                                        _fun17667_ip = 297;
                                        continue _fun17667
                                    }
                                case 272:
                                    var15 = var8().value;
                                    var4 = var1;
                                    var4 = var4 === var0;
                                    var5 = undefined;
                                    var2 = var4;
                                    if (var4) {
                                        _fun17667_ip = 297;
                                        continue _fun17667
                                    }
                                case 291:
                                    var5 = var15;
                                    var2 = var4;
                                case 297:
                                    var4 = undefined;
                                    if (var2) {
                                        _fun17667_ip = 327;
                                        continue _fun17667
                                    }
                                case 302:
                                    var15 = var8().value;
                                    var8 = var1;
                                    var8 = var8 === var0;
                                    var4 = undefined;
                                    var2 = var8;
                                    if (var8) {
                                        _fun17667_ip = 327;
                                        continue _fun17667
                                    }
                                case 321:
                                    var4 = var15;
                                    var2 = var8;
                                case 327:
                                    if (var2) {
                                        _fun17667_ip = 333;
                                        continue _fun17667
                                    }
                                case 330:
                                    var1.return();
                                case 333:
                                    var2 = _closure1_slot26;
                                    var1 = {};
                                    var15 = 'user';
                                    var1.type = var15;
                                    var1.revision = var14;
                                    var1.population = var13;
                                    var1.bucket = var7;
                                    var7 = 0;
                                    var7 = var7 === var12;
                                    var1.override = var7;
                                    var7 = null;
                                    var12 = var7 != var11;
                                    var7 = -1;
                                    if (!var12) {
                                        _fun17667_ip = 394;
                                        continue _fun17667
                                    }
                                case 391:
                                    var7 = var11;
                                case 394:
                                    var1.hashResult = var7;
                                    var7 = 1;
                                    var10 = var7 === var10;
                                    var1.aaMode = var10;
                                    var8 = _closure1_slot39;
                                    var7 = var7 === var9;
                                    var7 = var8.bind(var0)(var7, var3);
                                    var1.triggerDebuggingEnabled = var7;
                                    var8 = _closure2_slot0;
                                    var1.assignmentSource = var8;
                                    var8 = _closure2_slot1;
                                    var1.sessionId = var8;
                                    var8 = _closure2_slot3;
                                    var1.loadedFromCache = var8;
                                    var7 = _closure2_slot2;
                                    var1.fingerprint = var7;
                                    var1.holdoutName = var6;
                                    var1.holdoutRevision = var5;
                                    var1.holdoutBucket = var4;
                                    var2[var3] = var1;
                                    return var0;
                            }
                        };
                        var4 = var5.bind(var6)(var4);
                        if (!(var2 != var3)) {
                            _fun17666_ip = 141;
                            continue _fun17666
                        }
                    case 126:
                        var2 = var3.forEach;
                        var1 = function(arg0) { // Environment: var1
                            _fun17668: for (var _fun17668_ip = 0;;) switch (_fun17668_ip) {
                                case 0:
                                    var5 = arg0;
                                    var1 = var5[Symbol.iterator];
                                    var5 = var1().next;
                                    var4 = var5().value;
                                    var2 = var1;
                                    var0 = undefined;
                                    var2 = var2 === var0;
                                    var3 = undefined;
                                    if (var2) {
                                        _fun17668_ip = 27;
                                        continue _fun17668
                                    }
                                case 24:
                                    var3 = var4;
                                case 27:
                                    var11 = undefined;
                                    if (var2) {
                                        _fun17668_ip = 57;
                                        continue _fun17668
                                    }
                                case 32:
                                    var6 = var5().value;
                                    var4 = var1;
                                    var4 = var4 === var0;
                                    var11 = undefined;
                                    var2 = var4;
                                    if (var4) {
                                        _fun17668_ip = 57;
                                        continue _fun17668
                                    }
                                case 51:
                                    var11 = var6;
                                    var2 = var4;
                                case 57:
                                    var4 = undefined;
                                    if (var2) {
                                        _fun17668_ip = 87;
                                        continue _fun17668
                                    }
                                case 62:
                                    var7 = var5().value;
                                    var6 = var1;
                                    var6 = var6 === var0;
                                    var4 = undefined;
                                    var2 = var6;
                                    if (var6) {
                                        _fun17668_ip = 87;
                                        continue _fun17668
                                    }
                                case 81:
                                    var4 = var7;
                                    var2 = var6;
                                case 87:
                                    var13 = undefined;
                                    if (var2) {
                                        _fun17668_ip = 117;
                                        continue _fun17668
                                    }
                                case 92:
                                    var7 = var5().value;
                                    var6 = var1;
                                    var6 = var6 === var0;
                                    var13 = undefined;
                                    var2 = var6;
                                    if (var6) {
                                        _fun17668_ip = 117;
                                        continue _fun17668
                                    }
                                case 111:
                                    var13 = var7;
                                    var2 = var6;
                                case 117:
                                    var9 = undefined;
                                    if (var2) {
                                        _fun17668_ip = 147;
                                        continue _fun17668
                                    }
                                case 122:
                                    var7 = var5().value;
                                    var6 = var1;
                                    var6 = var6 === var0;
                                    var9 = undefined;
                                    var2 = var6;
                                    if (var6) {
                                        _fun17668_ip = 147;
                                        continue _fun17668
                                    }
                                case 141:
                                    var9 = var7;
                                    var2 = var6;
                                case 147:
                                    var12 = undefined;
                                    if (var2) {
                                        _fun17668_ip = 177;
                                        continue _fun17668
                                    }
                                case 152:
                                    var7 = var5().value;
                                    var6 = var1;
                                    var6 = var6 === var0;
                                    var12 = undefined;
                                    var2 = var6;
                                    if (var6) {
                                        _fun17668_ip = 177;
                                        continue _fun17668
                                    }
                                case 171:
                                    var12 = var7;
                                    var2 = var6;
                                case 177:
                                    var10 = undefined;
                                    if (var2) {
                                        _fun17668_ip = 207;
                                        continue _fun17668
                                    }
                                case 182:
                                    var7 = var5().value;
                                    var6 = var1;
                                    var6 = var6 === var0;
                                    var10 = undefined;
                                    var2 = var6;
                                    if (var6) {
                                        _fun17668_ip = 207;
                                        continue _fun17668
                                    }
                                case 201:
                                    var10 = var7;
                                    var2 = var6;
                                case 207:
                                    var8 = undefined;
                                    if (var2) {
                                        _fun17668_ip = 237;
                                        continue _fun17668
                                    }
                                case 212:
                                    var7 = var5().value;
                                    var6 = var1;
                                    var6 = var6 === var0;
                                    var8 = undefined;
                                    var2 = var6;
                                    if (var6) {
                                        _fun17668_ip = 237;
                                        continue _fun17668
                                    }
                                case 231:
                                    var8 = var7;
                                    var2 = var6;
                                case 237:
                                    var7 = undefined;
                                    if (var2) {
                                        _fun17668_ip = 267;
                                        continue _fun17668
                                    }
                                case 242:
                                    var14 = var5().value;
                                    var6 = var1;
                                    var6 = var6 === var0;
                                    var7 = undefined;
                                    var2 = var6;
                                    if (var6) {
                                        _fun17668_ip = 267;
                                        continue _fun17668
                                    }
                                case 261:
                                    var7 = var14;
                                    var2 = var6;
                                case 267:
                                    var6 = undefined;
                                    if (var2) {
                                        _fun17668_ip = 297;
                                        continue _fun17668
                                    }
                                case 272:
                                    var14 = var5().value;
                                    var5 = var1;
                                    var5 = var5 === var0;
                                    var6 = undefined;
                                    var2 = var5;
                                    if (var5) {
                                        _fun17668_ip = 297;
                                        continue _fun17668
                                    }
                                case 291:
                                    var6 = var14;
                                    var2 = var5;
                                case 297:
                                    if (var2) {
                                        _fun17668_ip = 303;
                                        continue _fun17668
                                    }
                                case 300:
                                    var1.return();
                                case 303:
                                    var2 = _closure1_slot27;
                                    var1 = {};
                                    var1.hashKey = var11;
                                    var1.revision = var4;
                                    var11 = var13.map;
                                    var4 = _closure1_slot47;
                                    var4 = var11.bind(var13)(var4);
                                    var1.populations = var4;
                                    var4 = _closure1_slot46;
                                    var4 = var4.bind(var0)(var9);
                                    var1.overrides = var4;
                                    var4 = null;
                                    if (!(var4 == var12)) {
                                        _fun17668_ip = 365;
                                        continue _fun17668
                                    }
                                case 361:
                                    var12 = new Array(0);
                                case 365:
                                    var11 = var12.map;
                                    var9 = function(arg0) { // Environment: var9
                                        var2 = arg0;
                                        var1 = var2.map;
                                        var0 = _closure1_slot47;
                                        var0 = var1.bind(var2)(var0);
                                        return var0;
                                    };
                                    var9 = var11.bind(var12)(var9);
                                    var1.overridesFormatted = var9;
                                    var11 = var4 != var10;
                                    var9 = null;
                                    if (!var11) {
                                        _fun17668_ip = 399;
                                        continue _fun17668
                                    }
                                case 396:
                                    var9 = var10;
                                case 399:
                                    var1.holdoutName = var9;
                                    var9 = var4 != var8;
                                    var4 = null;
                                    if (!var9) {
                                        _fun17668_ip = 416;
                                        continue _fun17668
                                    }
                                case 413:
                                    var4 = var8;
                                case 416:
                                    var1.holdoutControlBucket = var4;
                                    var4 = 1;
                                    var7 = var4 === var7;
                                    var1.aaMode = var7;
                                    var5 = _closure1_slot39;
                                    var4 = var4 === var6;
                                    var4 = var5.bind(var0)(var4, var3);
                                    var1.triggerDebuggingEnabled = var4;
                                    var5 = _closure2_slot0;
                                    var1.assignmentSource = var5;
                                    var5 = _closure2_slot1;
                                    var1.sessionId = var5;
                                    var5 = _closure2_slot3;
                                    var1.loadedFromCache = var5;
                                    var4 = _closure2_slot2;
                                    var1.fingerprint = var4;
                                    var2[var3] = var1;
                                    return var0;
                            }
                        };
                        var1 = var2.bind(var3)(var1);
                    case 141:
                        return var0;
                }
            };
            var _closure1_slot49 = var0;
            var0 = function(arg0, arg1, arg2) { // Original name: computeGuildExperimentBucketFromPopulationsOrNull, environment: var1
                _fun17670: for (var _fun17670_ip = 0;;) switch (_fun17670_ip) {
                    case 0:
                        var13 = arg0;
                        var0 = arg2;
                        var _closure2_slot0 = var0;
                        var3 = _closure1_slot36;
                        var12 = undefined;
                        var0 = arg1;
                        var11 = var3.bind(var12)(var0);
                        var4 = var11.bind(var12)();
                        var3 = var4.done;
                        var0 = null;
                        var8 = var4;
                        var7 = undefined;
                        var6 = undefined;
                        var5 = undefined;
                        if (var3) {
                            _fun17670_ip = 257;
                            continue _fun17670
                        }
                    case 55:
                        var3 = var8.value;
                        var4 = var3.buckets;
                        var16 = var3.filters;
                        var15 = var0 != var16;
                        var3 = true;
                        var14 = var5;
                        if (!var15) {
                            _fun17670_ip = 173;
                            continue _fun17670
                        }
                    case 84:
                        var15 = _closure1_slot36;
                        var17 = var15.bind(var12)(var16);
                        var18 = var17.bind(var12)();
                        var15 = var18.done;
                        var16 = var18;
                        var3 = true;
                        var7 = var16;
                        var6 = var17;
                        var14 = var5;
                        if (var15) {
                            _fun17670_ip = 173;
                            continue _fun17670
                        }
                    case 119:
                        var18 = var16.value;
                        if (!(var0 != var18)) {
                            _fun17670_ip = 147;
                            continue _fun17670
                        }
                    case 128:
                        var15 = var18.bind(var12)(var13);
                        var3 = false;
                        var7 = var16;
                        var6 = var17;
                        var14 = var18;
                        if (!var15) {
                            _fun17670_ip = 173;
                            continue _fun17670
                        }
                    case 147:
                        var19 = var17.bind(var12)();
                        var15 = var19.done;
                        var16 = var19;
                        var3 = true;
                        var7 = var16;
                        var6 = var17;
                        var14 = var18;
                        if (!var15) {
                            _fun17670_ip = 119;
                            continue _fun17670
                        }
                    case 173:
                        if (var3) {
                            _fun17670_ip = 199;
                            continue _fun17670
                        }
                    case 176:
                        var15 = var11.bind(var12)();
                        var3 = var15.done;
                        var8 = var15;
                        var5 = var14;
                        if (var3) {
                            _fun17670_ip = 257;
                            continue _fun17670
                        }
                    case 194:
                        _fun17670_ip = 55;
                        continue _fun17670;
                    case 199:
                        var3 = var4.find;
                        var2 = function(arg0) { // Environment: var2
                            var0 = arg0;
                            var2 = var0.positions;
                            var1 = var2.some;
                            var0 = function(arg0) { // Environment: var0
                                _fun17672: for (var _fun17672_ip = 0;;) switch (_fun17672_ip) {
                                    case 0:
                                        var0 = arg0;
                                        var3 = var0.start;
                                        var2 = var0.end;
                                        var0 = _closure2_slot0;
                                        var0 = var0 >= var3;
                                        if (!var0) {
                                            _fun17672_ip = 35;
                                            continue _fun17672
                                        }
                                    case 27:
                                        var1 = _closure2_slot0;
                                        var0 = var1 < var2;
                                    case 35:
                                        return var0;
                                }
                            };
                            var0 = var1.bind(var2)(var0);
                            return var0;
                        };
                        var3 = var3.bind(var4)(var2);
                        if (!(var0 == var3)) {
                            _fun17670_ip = 230;
                            continue _fun17670
                        }
                    case 218:
                        var2 = _closure1_slot10;
                        var2 = var2.CONTROL;
                        _fun17670_ip = 236;
                        continue _fun17670;
                    case 230:
                        var2 = var3.bucket;
                    case 236:
                        var1 = _closure1_slot10;
                        var3 = var1.NOT_ELIGIBLE;
                        var1 = null;
                        if (!(var2 !== var3)) {
                            _fun17670_ip = 255;
                            continue _fun17670
                        }
                    case 252:
                        var1 = var2;
                    case 255:
                        return var1;
                    case 257:
                        return var0;
                }
            };
            var _closure1_slot50 = var0;
            var0 = function(arg0, arg1) { // Original name: computeGuildExperimentDescriptor, environment: var1
                _fun17673: for (var _fun17673_ip = 0;;) switch (_fun17673_ip) {
                    case 0:
                        var6 = arg0;
                        var13 = arg1;
                        var0 = _closure1_slot38;
                        var2 = undefined;
                        var4 = var0.bind(var2)(var13);
                        var3 = _closure1_slot27;
                        var1 = global;
                        var0 = var1.HermesInternal;
                        var0 = var0.concat;
                        var14 = '';
                        var0 = var0.bind(var14)(var4);
                        var10 = var3[var0];
                        var0 = null;
                        if (!(var0 != var10)) {
                            _fun17673_ip = 718;
                            continue _fun17673
                        }
                    case 59:
                        var5 = var10.revision;
                        var9 = var10.aaMode;
                        var3 = var10.overrides;
                        var4 = var3[var6];
                        var3 = var10.triggerDebuggingEnabled;
                        if (!(var0 == var4)) {
                            _fun17673_ip = 644;
                            continue _fun17673
                        }
                    case 94:
                        var8 = _closure1_slot38;
                        var11 = var10.hashKey;
                        var12 = var13;
                        if (!(var0 != var11)) {
                            _fun17673_ip = 114;
                            continue _fun17673
                        }
                    case 111:
                        var12 = var11;
                    case 114:
                        var1 = var1.HermesInternal;
                        var11 = var1.concat;
                        var1 = ':';
                        var1 = var11.bind(var14)(var12, var1, var6);
                        var8 = var8.bind(var2)(var1);
                        var1 = 10000;
                        var11 = var8 % var1;
                        var8 = _closure1_slot36;
                        var1 = var10.overridesFormatted;
                        if (!(var0 == var1)) {
                            _fun17673_ip = 169;
                            continue _fun17673
                        }
                    case 165:
                        var1 = new Array(0);
                    case 169:
                        var14 = var8.bind(var2)(var1);
                        var8 = var14.bind(var2)();
                        var1 = var8.done;
                        var12 = var8;
                        if (var1) {
                            _fun17673_ip = 317;
                            continue _fun17673
                        }
                    case 192:
                        var8 = _closure1_slot50;
                        var1 = var12.value;
                        var8 = var8.bind(var2)(var6, var1, var11);
                        if (!(var0 === var8)) {
                            _fun17673_ip = 229;
                            continue _fun17673
                        }
                    case 212:
                        var15 = var14.bind(var2)();
                        var1 = var15.done;
                        var12 = var15;
                        if (var1) {
                            _fun17673_ip = 317;
                            continue _fun17673
                        }
                    case 227:
                        _fun17673_ip = 192;
                        continue _fun17673;
                    case 229:
                        var1 = {};
                        var12 = _closure1_slot11;
                        var12 = var12.GUILD;
                        var1.type = var12;
                        var1.guildId = var6;
                        var12 = var10.revision;
                        var1.revision = var12;
                        var1.bucket = var8;
                        var8 = true;
                        var1.override = var8;
                        var1.hashResult = var11;
                        var1.triggerDebuggingEnabled = var3;
                        var8 = var10.assignmentSource;
                        var1.assignmentSource = var8;
                        var8 = var10.sessionId;
                        var1.sessionId = var8;
                        var8 = var10.loadedFromCache;
                        var1.loadedFromCache = var8;
                        return var1;
                    case 317:
                        var8 = _closure1_slot50;
                        var1 = var10.populations;
                        var12 = var8.bind(var2)(var6, var1, var11);
                        if (!(var0 != var12)) {
                            _fun17673_ip = 642;
                            continue _fun17673
                        }
                    case 341:
                        var1 = var10.holdoutName;
                        var1 = var0 != var1;
                        var8 = null;
                        if (!var1) {
                            _fun17673_ip = 494;
                            continue _fun17673
                        }
                    case 359:
                        var1 = var10.holdoutControlBucket;
                        var1 = var0 != var1;
                        var8 = null;
                        if (!var1) {
                            _fun17673_ip = 494;
                            continue _fun17673
                        }
                    case 374:
                        var1 = var10.holdoutName;
                        var8 = null;
                        if (!(var1 !== var13)) {
                            _fun17673_ip = 494;
                            continue _fun17673
                        }
                    case 386:
                        var13 = _closure1_slot51;
                        var1 = var10.holdoutName;
                        var14 = var13.bind(var2)(var6, var1);
                        var13 = var0 == var14;
                        var1 = undefined;
                        if (var13) {
                            _fun17673_ip = 417;
                            continue _fun17673
                        }
                    case 411:
                        var1 = var14.bucket;
                    case 417:
                        var8 = var14;
                        if (!(var0 != var1)) {
                            _fun17673_ip = 494;
                            continue _fun17673
                        }
                    case 424:
                        var13 = var14.override;
                        var1 = true;
                        if (!(var1 !== var13)) {
                            _fun17673_ip = 463;
                            continue _fun17673
                        }
                    case 436:
                        var13 = _closure1_slot44;
                        var1 = {};
                        var15 = var10.holdoutName;
                        var1.experimentId = var15;
                        var1.descriptor = var14;
                        var1 = var13.bind(var2)(var1);
                    case 463:
                        var1 = var0 == var14;
                        var13 = undefined;
                        if (var1) {
                            _fun17673_ip = 478;
                            continue _fun17673
                        }
                    case 472:
                        var13 = var14.bucket;
                    case 478:
                        var1 = var10.holdoutControlBucket;
                        var8 = var14;
                        if (!(var13 !== var1)) {
                            _fun17673_ip = 640;
                            continue _fun17673
                        }
                    case 494:
                        var1 = {};
                        var13 = _closure1_slot11;
                        var13 = var13.GUILD;
                        var1.type = var13;
                        var1.guildId = var6;
                        var13 = var10.revision;
                        var1.revision = var13;
                        var1.bucket = var12;
                        var1.hashResult = var11;
                        var1.aaMode = var9;
                        var1.triggerDebuggingEnabled = var3;
                        var9 = var10.assignmentSource;
                        var1.assignmentSource = var9;
                        var9 = var10.sessionId;
                        var1.sessionId = var9;
                        var9 = var10.loadedFromCache;
                        var1.loadedFromCache = var9;
                        var11 = var0 != var8;
                        var9 = null;
                        if (!var11) {
                            _fun17673_ip = 593;
                            continue _fun17673
                        }
                    case 587:
                        var9 = var10.holdoutName;
                    case 593:
                        var1.holdoutName = var9;
                        var10 = var0 == var8;
                        var9 = undefined;
                        if (var10) {
                            _fun17673_ip = 613;
                            continue _fun17673
                        }
                    case 607:
                        var9 = var8.revision;
                    case 613:
                        var1.holdoutRevision = var9;
                        var9 = var0 == var8;
                        var2 = undefined;
                        if (var9) {
                            _fun17673_ip = 633;
                            continue _fun17673
                        }
                    case 627:
                        var2 = var8.bucket;
                    case 633:
                        var1.holdoutBucket = var2;
                        return var1;
                    case 640:
                        return var0;
                    case 642:
                        return var0;
                    case 644:
                        var1 = _closure1_slot10;
                        var2 = var1.NOT_ELIGIBLE;
                        var1 = null;
                        if (!(var4 !== var2)) {
                            _fun17673_ip = 716;
                            continue _fun17673
                        }
                    case 660:
                        var2 = {};
                        var7 = _closure1_slot11;
                        var7 = var7.GUILD;
                        var2.type = var7;
                        var2.guildId = var6;
                        var2.revision = var5;
                        var2.bucket = var4;
                        var4 = true;
                        var2.override = var4;
                        var4 = -1;
                        var2.hashResult = var4;
                        var2.triggerDebuggingEnabled = var3;
                        var1 = var2;
                    case 716:
                        return var1;
                    case 718:
                        return var0;
                }
            };
            var _closure1_slot51 = var0;
            var0 = function(arg0) { // Original name: processGuildExperimentPopulationFromCache, environment: var1
                _fun17674: for (var _fun17674_ip = 0;;) switch (_fun17674_ip) {
                    case 0:
                        var14 = arg0;
                        var0 = {};
                        var12 = var14;
                        var8 = undefined;
                        var6 = null;
                        var5 = undefined;
                        var4 = undefined;
                        for (var9 in var12)
                            case 30: {
                                case 42: var1 = var9;
                                var20 = var14[var1];
                                var2 = {};
                                var21 = var2;
                                var3 = copyDataProperties(var21, var20);
                                var0[var1] = var2;
                                var3 = _closure1_slot36;
                                var2 = var0[var1];
                                var2 = var2.populations;
                                var15 = var3.bind(var8)(var2);
                                var3 = var15.bind(var8)();
                                var2 = var3.done;
                                if (var2) {
                                    _fun17674_ip = 139;
                                    continue _fun17674
                                }
                                case 93: var16 = var3.value;
                                var18 = var16.rawFilterData;
                                var17 = var18.map;
                                var2 = _closure1_slot45;
                                var2 = var17.bind(var18)(var2);
                                var16.filters = var2;
                                var16 = var15.bind(var8)();
                                var2 = var16.done;
                                var3 = var16;
                                if (!var2) {
                                    _fun17674_ip = 93;
                                    continue _fun17674
                                }
                                case 139: var2 = _closure1_slot36;
                                var1 = var0[var1];
                                var1 = var1.overridesFormatted;
                                if (!(var6 == var1)) {
                                    _fun17674_ip = 161;
                                    continue _fun17674
                                }
                                case 157: var1 = new Array(0);
                                case 161: var3 = var2.bind(var8)(var1);
                                var2 = var3.bind(var8)();
                                var1 = var2.done;
                                if (var1) {
                                    _fun17674_ip = 30;
                                    continue _fun17674
                                }
                                case 181: var15 = _closure1_slot36;
                                var1 = var2.value;
                                var16 = var15.bind(var8)(var1);
                                var17 = var16.bind(var8)();
                                var1 = var17.done;
                                var15 = var17;
                                var5 = var15;
                                if (var1) {
                                    _fun17674_ip = 262;
                                    continue _fun17674
                                }
                                case 213: var17 = var15.value;
                                var19 = var17.rawFilterData;
                                var18 = var19.map;
                                var1 = _closure1_slot45;
                                var1 = var18.bind(var19)(var1);
                                var17.filters = var1;
                                var17 = var16.bind(var8)();
                                var1 = var17.done;
                                var15 = var17;
                                var5 = var15;
                                if (!var1) {
                                    _fun17674_ip = 213;
                                    continue _fun17674
                                }
                                case 262: var15 = var3.bind(var8)();
                                var1 = var15.done;
                                var4 = var16;
                                var2 = var15;
                                if (var1) {
                                    _fun17674_ip = 30;
                                    continue _fun17674
                                }
                                case 283: _fun17674_ip = 181;
                                continue _fun17674;
                            }
                    case 285:
                        return var0;
                }
            };
            var _closure1_slot52 = var0;
            var0 = function(arg0) { // Original name: handleOverlayInitialize, environment: var1
                _fun17675: for (var _fun17675_ip = 0;;) switch (_fun17675_ip) {
                    case 0:
                        var1 = arg0;
                        var0 = var1.serializedExperimentStore;
                        var5 = var1.user;
                        var3 = _closure1_slot31;
                        var1 = !var3;
                        if (var3) {
                            _fun17675_ip = 38;
                            continue _fun17675
                        }
                    case 27:
                        var4 = _closure1_slot40;
                        var3 = undefined;
                        var1 = var4.bind(var3)(var5);
                    case 38:
                        if (!var1) {
                            _fun17675_ip = 47;
                            continue _fun17675
                        }
                    case 41:
                        var1 = true;
                        _closure1_slot31 = var1;
                    case 47:
                        var1 = var0.hasLoadedExperiments;
                        _closure1_slot21 = var1;
                        var1 = var0.trackedExposureExperiments;
                        _closure1_slot22 = var1;
                        var1 = var0.loadedUserExperiments;
                        _closure1_slot26 = var1;
                        var1 = var0.userExperimentOverrides;
                        _closure1_slot29 = var1;
                        var1 = var0.guildExperimentOverrides;
                        _closure1_slot30 = var1;
                        var1 = {};
                        var6 = _closure1_slot25;
                        var7 = var1;
                        var3 = copyDataProperties(var7, var6);
                        var4 = var0.assignmentSource;
                        var3 = 'source';
                        var1[var3] = var4;
                        var4 = var0.assignmentSessionId;
                        var3 = 'sessionId';
                        var1[var3] = var4;
                        var4 = var0.assignmentFingerprint;
                        var3 = 'fingerprint';
                        var1[var3] = var4;
                        _closure1_slot25 = var1;
                        var3 = _closure1_slot52;
                        var1 = var0.loadedGuildExperiments;
                        var0 = undefined;
                        var1 = var3.bind(var0)(var1);
                        _closure1_slot27 = var1;
                        var1 = {};
                        _closure1_slot28 = var1;
                        return var0;
                }
            };
            var _closure1_slot53 = var0;
            var0 = function() { // Original name: handleFetchFailure, environment: var1
                var0 = true;
                _closure1_slot21 = var0;
                var0 = undefined;
                return var0;
            };
            var _closure1_slot54 = var0;
            var0 = function(arg0) { // Original name: handleLogout, environment: var1
                _fun17677: for (var _fun17677_ip = 0;;) switch (_fun17677_ip) {
                    case 0:
                        var0 = arg0;
                        var1 = var0.isSwitchingAccount;
                        var5 = _closure1_slot0;
                        var0 = _closure1_slot2;
                        var4 = 15;
                        var3 = var0[var4];
                        var0 = undefined;
                        var3 = var5.bind(var0)(var3);
                        var6 = var3.Storage;
                        var5 = var6.remove;
                        var3 = _closure1_slot16;
                        var3 = var5.bind(var6)(var3);
                        if (var1) {
                            _fun17677_ip = 168;
                            continue _fun17677
                        }
                    case 58:
                        var3 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var5 = var1[var4];
                        var5 = var3.bind(var0)(var5);
                        var7 = var5.Storage;
                        var6 = var7.remove;
                        var5 = _closure1_slot17;
                        var5 = var6.bind(var7)(var5);
                        var5 = var1[var4];
                        var5 = var3.bind(var0)(var5);
                        var7 = var5.Storage;
                        var6 = var7.remove;
                        var5 = _closure1_slot18;
                        var5 = var6.bind(var7)(var5);
                        var1 = var1[var4];
                        var1 = var3.bind(var0)(var1);
                        var4 = var1.Storage;
                        var3 = var4.remove;
                        var1 = _closure1_slot19;
                        var1 = var3.bind(var4)(var1);
                        var1 = {};
                        _closure1_slot29 = var1;
                        var1 = {};
                        _closure1_slot30 = var1;
                    case 168:
                        var1 = {};
                        _closure1_slot26 = var1;
                        var1 = {};
                        var8 = _closure1_slot25;
                        var9 = var1;
                        var3 = copyDataProperties(var9, var8);
                        var4 = new Array(0);
                        var3 = 'rawUserExperiments';
                        var1[var3] = var4;
                        _closure1_slot25 = var1;
                        var1 = {};
                        _closure1_slot22 = var1;
                        var1 = false;
                        _closure1_slot21 = var1;
                        return var0;
                }
            };
            var _closure1_slot55 = var0;
            var0 = function() { // Original name: handleLogin, environment: var1
                var0 = false;
                _closure1_slot21 = var0;
                var0 = {};
                _closure1_slot22 = var0;
                var0 = {};
                _closure1_slot27 = var0;
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 15;
                var2 = var2[var0];
                var0 = undefined;
                var2 = var3.bind(var0)(var2);
                var3 = var2.Storage;
                var2 = var3.remove;
                var1 = _closure1_slot16;
                var1 = var2.bind(var3)(var1);
                return var0;
            };
            var _closure1_slot56 = var0;
            var0 = function() { // Original name: loadLocalOverrides, environment: var1
                _fun17679: for (var _fun17679_ip = 0;;) switch (_fun17679_ip) {
                    case 0:
                        var3 = _closure1_slot0;
                        var0 = _closure1_slot2;
                        var4 = 15;
                        var2 = var0[var4];
                        var0 = undefined;
                        var2 = var3.bind(var0)(var2);
                        var5 = var2.Storage;
                        var3 = var5.get;
                        var2 = _closure1_slot17;
                        var2 = var3.bind(var5)(var2);
                        var9 = null;
                        if (!(var9 == var2)) {
                            _fun17679_ip = 53;
                            continue _fun17679
                        }
                    case 51:
                        var2 = {};
                    case 53:
                        var8 = new Array(3);
                        var8[0] = var2;
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var2 = var2[var4];
                        var2 = var3.bind(var0)(var2);
                        var5 = var2.Storage;
                        var3 = var5.get;
                        var2 = _closure1_slot18;
                        var2 = var3.bind(var5)(var2);
                        if (!(var9 == var2)) {
                            _fun17679_ip = 104;
                            continue _fun17679
                        }
                    case 102:
                        var2 = {};
                    case 104:
                        var8[1] = var2;
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var2 = var2[var4];
                        var2 = var3.bind(var0)(var2);
                        var4 = var2.Storage;
                        var3 = var4.get;
                        var2 = _closure1_slot19;
                        var2 = var3.bind(var4)(var2);
                        if (!(var9 == var2)) {
                            _fun17679_ip = 151;
                            continue _fun17679
                        }
                    case 149:
                        var2 = {};
                    case 151:
                        var8[2] = var2;
                        var2 = {};
                        _closure1_slot29 = var2;
                        var2 = {};
                        _closure1_slot30 = var2;
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var2 = 16;
                        var2 = var4[var2];
                        var4 = var3.bind(var0)(var2);
                        var3 = var4.isEmpty;
                        var7 = 0;
                        var2 = var8[var7];
                        var2 = var3.bind(var4)(var2);
                        var6 = !var2;
                        var2 = var8.length;
                        var2 = var7 < var2;
                        var11 = true;
                        var5 = undefined;
                        var4 = undefined;
                        var3 = var6;
                        if (!var2) {
                            _fun17679_ip = 473;
                            continue _fun17679
                        }
                    case 231:
                        var19 = var8[var7];
                        var17 = var19;
                        var13 = var6;
                        var12 = var5;
                        var2 = var4;
                        var10 = var13;
                        var5 = var12;
                        var4 = var2;
                        for (var14 in var17)
                            case 267: {
                                var22 = var13;
                                var5 = var12;
                                var4 = var2;
                                var10 = var22;
                                case 291: var21 = var14;
                                var20 = var19[var21];
                                if (!(var9 != var20)) {
                                    _fun17679_ip = 435;
                                    continue _fun17679
                                }
                                case 305: var24 = var20.type;
                                var23 = _closure1_slot11;
                                var23 = var23.USER;
                                if (!(var24 !== var23)) {
                                    _fun17679_ip = 343;
                                    continue _fun17679
                                }
                                case 324: var24 = var20.type;
                                var23 = _closure1_slot11;
                                var23 = var23.GUILD;
                                if (!(var24 === var23)) {
                                    _fun17679_ip = 435;
                                    continue _fun17679
                                }
                                case 343: var23 = var20.bucket;
                                if (!(var9 != var23)) {
                                    _fun17679_ip = 435;
                                    continue _fun17679
                                }
                                case 353: var23 = var20.override;
                                if (!(var11 === var23)) {
                                    _fun17679_ip = 435;
                                    continue _fun17679
                                }
                                case 363: var23 = var20.fromCookie;
                                if (var23) {
                                    _fun17679_ip = 435;
                                    continue _fun17679
                                }
                                case 372: var24 = var20.type;
                                var23 = _closure1_slot11;
                                var23 = var23.USER;
                                if (!(var24 !== var23)) {
                                    _fun17679_ip = 413;
                                    continue _fun17679
                                }
                                case 391: var23 = _closure1_slot30;
                                var23[var21] = var20;
                                var13 = var22;
                                var12 = var21;
                                var2 = var20;
                                _fun17679_ip = 267;
                                continue _fun17679;
                                case 413: var23 = _closure1_slot29;
                                var23[var21] = var20;
                                var13 = var22;
                                var12 = var21;
                                var2 = var20;
                                _fun17679_ip = 267;
                                continue _fun17679;
                                case 435: var22 = delete var19[var21];
                                var13 = true;
                                var12 = var21;
                                var2 = var20;
                                _fun17679_ip = 267;
                                continue _fun17679;
                            }
                    case 452:
                        var7 = var7 + 1;
                        var2 = var8.length;
                        var6 = var10;
                        var3 = var6;
                        if (var7 < var2) {
                            _fun17679_ip = 231;
                            continue _fun17679
                        }
                    case 473:
                        var4 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var2 = 11;
                        var2 = var5[var2];
                        var4 = var4.bind(var0)(var2);
                        var2 = var4.getBuildOverrideExperiments;
                        var10 = var2.bind(var4)();
                        var8 = var10;
                        var4 = false;
                        var2 = false;
                        for (var5 in var8)
                            case 518: {
                                var2 = var4;
                                case 530: var14 = var5;
                                var13 = _closure1_slot29;
                                var12 = {
                                    'type': null,
                                    'revision': 1,
                                    'population': 0,
                                    'override': true,
                                    'fromCookie': true,
                                    'assignmentSource': 'override'
                                };
                                var15 = _closure1_slot11;
                                var15 = var15.USER;
                                var12.type = var15;
                                var15 = var10[var14];
                                var12.bucket = var15;
                                var13[var14] = var12;
                                var13 = _closure1_slot30;
                                var12 = {
                                    'type': null,
                                    'revision': 1,
                                    'override': true,
                                    'fromCookie': true,
                                    'assignmentSource': 'override'
                                };
                                var15 = _closure1_slot11;
                                var15 = var15.GUILD;
                                var12.type = var15;
                                var15 = var10[var14];
                                var12.bucket = var15;
                                var13[var14] = var12;
                                var4 = true;
                                _fun17679_ip = 518;
                                continue _fun17679;
                            }
                    case 631:
                        if (var2) {
                            _fun17679_ip = 637;
                            continue _fun17679
                        }
                    case 634:
                        var2 = var3;
                    case 637:
                        if (!var2) {
                            _fun17679_ip = 648;
                            continue _fun17679
                        }
                    case 640:
                        var1 = _closure1_slot58;
                        var1 = var1.bind(var0)();
                    case 648:
                        return var0;
                }
            };
            var _closure1_slot57 = var0;
            var0 = function() { // Original name: saveExperimentOverrides, environment: var1
                _fun17680: for (var _fun17680_ip = 0;;) switch (_fun17680_ip) {
                    case 0: // try_start_0
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 15;
                        var2 = var2[var1];
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        var3 = var1.Storage;
                        var2 = var3.set;
                        var1 = _closure1_slot18;
                        var0 = _closure1_slot29;
                        var0 = var2.bind(var3)(var1, var0);
                    case 50: // try_end0
                        _fun17680_ip = 135;
                        continue _fun17680;
                    case 52: // catch_target0
                        CatchBlockStart(arg_register = 4);
                        var3 = _closure1_slot20;
                        var2 = var3.error;
                        var1 = 'Error saving user experiment overrides, unsaved data will be lost';
                        var1 = var2.bind(var3)(var1, var4);
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 13;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.track;
                        var0 = _closure1_slot13;
                        var1 = var0.EXPERIMENT_SAVE_EXPOSURE_FAILED;
                        var0 = {
                            'module': 'discord_app',
                            'call': 'ExperimentStore.saveExperimentOverrides'
                        };
                        var0 = var2.bind(var3)(var1, var0);
                    case 135: // try_start_1
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 15;
                        var2 = var2[var1];
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        var3 = var1.Storage;
                        var2 = var3.set;
                        var1 = _closure1_slot19;
                        var0 = _closure1_slot30;
                        var0 = var2.bind(var3)(var1, var0);
                    case 185: // try_end1
                        _fun17680_ip = 270;
                        continue _fun17680;
                    case 187: // catch_target1
                        CatchBlockStart(arg_register = 4);
                        var3 = _closure1_slot20;
                        var2 = var3.error;
                        var1 = 'Error saving guild experiment overrides, unsaved data will be lost';
                        var1 = var2.bind(var3)(var1, var4);
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 13;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.track;
                        var0 = _closure1_slot13;
                        var1 = var0.EXPERIMENT_SAVE_EXPOSURE_FAILED;
                        var0 = {
                            'module': 'discord_app',
                            'call': 'ExperimentStore.saveExperimentOverrides'
                        };
                        var0 = var2.bind(var3)(var1, var0);
                    case 270:
                        var0 = undefined;
                        return var0;
                }
            };
            var _closure1_slot58 = var0;
            var0 = function(arg0) { // Original name: saveTrackedExposureExperiments, environment: var1
                _fun17681: for (var _fun17681_ip = 0;;) switch (_fun17681_ip) {
                    case 0:
                        var4 = arg0;
                    case 3: // try_start_0
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 15;
                        var2 = var2[var1];
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        var3 = var1.Storage;
                        var2 = var3.set;
                        var1 = _closure1_slot16;
                        var0 = {};
                        var5 = 1;
                        var0.v = var5;
                        var0.e = var4;
                        var0 = var2.bind(var3)(var1, var0);
                    case 62: // try_end0
                        _fun17681_ip = 147;
                        continue _fun17681;
                    case 64: // catch_target0
                        CatchBlockStart(arg_register = 4);
                        var3 = _closure1_slot20;
                        var2 = var3.error;
                        var1 = 'Error saving tracked exposure experiments, unsaved data will be lost';
                        var1 = var2.bind(var3)(var1, var4);
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 13;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.track;
                        var0 = _closure1_slot13;
                        var1 = var0.EXPERIMENT_SAVE_EXPOSURE_FAILED;
                        var0 = {
                            'module': 'discord_app',
                            'call': 'ExperimentStore.saveTrackedExposureExperiments'
                        };
                        var0 = var2.bind(var3)(var1, var0);
                    case 147:
                        var0 = undefined;
                        return var0;
                }
            };
            var _closure1_slot59 = var0;
            var0 = function(arg0) { // Original name: handleExperimentOverrideBucket, environment: var1
                _fun17682: for (var _fun17682_ip = 0;;) switch (_fun17682_ip) {
                    case 0:
                        var0 = arg0;
                        var2 = var0.experimentId;
                        var6 = var0.experimentBucket;
                        var7 = var0.experimentType;
                        var0 = var0.skipCleanup;
                        var5 = null;
                        if (!(var5 == var7)) {
                            _fun17682_ip = 61;
                            continue _fun17682
                        }
                    case 33:
                        var1 = _closure1_slot24;
                        var3 = var1[var2];
                        var4 = var5 == var3;
                        var1 = undefined;
                        if (var4) {
                            _fun17682_ip = 58;
                            continue _fun17682
                        }
                    case 53:
                        var1 = var3.type;
                    case 58:
                        var7 = var1;
                    case 61:
                        if (!(var5 != var7)) {
                            _fun17682_ip = 364;
                            continue _fun17682
                        }
                    case 68:
                        if (!(var5 != var6)) {
                            _fun17682_ip = 186;
                            continue _fun17682
                        }
                    case 72:
                        var1 = 'user';
                        if (!(var1 !== var7)) {
                            _fun17682_ip = 133;
                            continue _fun17682
                        }
                    case 80:
                        var3 = {};
                        var13 = _closure1_slot30;
                        var14 = var3;
                        var4 = copyDataProperties(var14, var13);
                        var4 = {};
                        var4.type = var7;
                        var8 = 1;
                        var4.revision = var8;
                        var4.bucket = var6;
                        var8 = true;
                        var4.override = var8;
                        var3[var2] = var4;
                        _closure1_slot30 = var3;
                        _fun17682_ip = 231;
                        continue _fun17682;
                    case 133:
                        var3 = {};
                        var13 = _closure1_slot29;
                        var14 = var3;
                        var4 = copyDataProperties(var14, var13);
                        var4 = {
                            'type': null,
                            'revision': 1,
                            'population': 0,
                            'bucket': null,
                            'override': true
                        };
                        var4.type = var7;
                        var4.bucket = var6;
                        var3[var2] = var4;
                        _closure1_slot29 = var3;
                        _fun17682_ip = 231;
                        continue _fun17682;
                    case 186:
                        var1 = {};
                        var13 = _closure1_slot29;
                        var14 = var1;
                        var4 = copyDataProperties(var14, var13);
                        _closure1_slot29 = var1;
                        var1 = delete var1[var2];
                        var1 = {};
                        var13 = _closure1_slot30;
                        var14 = var1;
                        var4 = copyDataProperties(var14, var13);
                        _closure1_slot30 = var1;
                        var1 = delete var1[var2];
                    case 231:
                        if (var0) {
                            _fun17682_ip = 349;
                            continue _fun17682
                        }
                    case 234:
                        var0 = _closure1_slot29;
                        var3 = new Array(2);
                        var3[0] = var0;
                        var0 = _closure1_slot30;
                        var3[1] = var0;
                        var0 = var3.length;
                        var2 = 0;
                        var0 = var2 < var0;
                        var1 = undefined;
                        if (!var0) {
                            _fun17682_ip = 349;
                            continue _fun17682
                        }
                    case 273:
                        var0 = var3[var2];
                        var9 = var0;
                        var0 = var1;
                        var1 = var0;
                        for (var6 in var9)
                            case 294: {
                                var1 = var0;
                                case 306: var11 = var6;
                                var12 = _closure1_slot24;
                                var12 = var12[var11];
                                var0 = var11;
                                if (var5 != var12) {
                                    _fun17682_ip = 294;
                                    continue _fun17682
                                }
                                case 324: var12 = _closure1_slot29;
                                var12 = delete var12[var11];
                                var0 = var11;
                                _fun17682_ip = 294;
                                continue _fun17682;
                            }
                    case 337:
                        var2 = var2 + 1;
                        var0 = var3.length;
                        if (var2 < var0) {
                            _fun17682_ip = 273;
                            continue _fun17682
                        }
                    case 349:
                        var1 = _closure1_slot58;
                        var0 = undefined;
                        var1 = var1.bind(var0)();
                        return var0;
                    case 364:
                        var0 = false;
                        return var0;
                }
            };
            var _closure1_slot60 = var0;
            var0 = function(arg0) { // Original name: handleGuildChange, environment: var1
                _fun17683: for (var _fun17683_ip = 0;;) switch (_fun17683_ip) {
                    case 0:
                        var0 = arg0;
                        var10 = var0.guild;
                        var8 = _closure1_slot28;
                        var3 = ':';
                        var0 = undefined;
                        var2 = 1;
                        var1 = 0;
                        for (var4 in var8)
                            case 34: {
                                case 43: var12 = var4;
                                var11 = var12.split;
                                var13 = var11.bind(var12)(var3);
                                var11 = _closure1_slot8;
                                var11 = var11.bind(var0)(var13, var2);
                                var13 = var11[var1];
                                var11 = var10.id;
                                if (var11 !== var13) {
                                    _fun17683_ip = 34;
                                    continue _fun17683
                                }
                                case 79: var11 = _closure1_slot28;
                                var11 = delete var11[var12];
                                _fun17683_ip = 34;
                                continue _fun17683;
                            }
                    case 89:
                        return var0;
                }
            };
            var _closure1_slot61 = var0;
            var3 = global;
            var8 = var3.Object;
            var7 = var8.defineProperty;
            var4 = {};
            var10 = true;
            var4.value = var10;
            var0 = '__esModule';
            var0 = var7.bind(var8)(var2, var0, var4);
            var0 = 0;
            var4 = var6[var0];
            var0 = undefined;
            var4 = var9.bind(var0)(var4);
            var _closure1_slot3 = var4;
            var4 = 1;
            var7 = var6[var4];
            var7 = var9.bind(var0)(var7);
            var _closure1_slot4 = var7;
            var7 = 2;
            var7 = var6[var7];
            var7 = var9.bind(var0)(var7);
            var _closure1_slot5 = var7;
            var7 = 3;
            var7 = var6[var7];
            var7 = var9.bind(var0)(var7);
            var _closure1_slot6 = var7;
            var7 = 4;
            var7 = var6[var7];
            var7 = var9.bind(var0)(var7);
            var _closure1_slot7 = var7;
            var7 = 5;
            var7 = var6[var7];
            var7 = var9.bind(var0)(var7);
            var _closure1_slot8 = var7;
            var7 = 6;
            var7 = var6[var7];
            var7 = var9.bind(var0)(var7);
            var _closure1_slot9 = var7;
            var7 = 7;
            var7 = var6[var7];
            var8 = var9.bind(var0)(var7);
            var7 = 8;
            var7 = var6[var7];
            var7 = var5.bind(var0)(var7);
            var11 = var7.ExperimentBuckets;
            var _closure1_slot10 = var11;
            var11 = var7.ExperimentTypes;
            var _closure1_slot11 = var11;
            var11 = var7.ExposureTypes;
            var _closure1_slot12 = var11;
            var11 = var7.TriggerDebuggingAAExperiments;
            var7 = 9;
            var7 = var6[var7];
            var7 = var5.bind(var0)(var7);
            var12 = var7.AnalyticEvents;
            var _closure1_slot13 = var12;
            var12 = var7.EMPTY_STRING_SNOWFLAKE_ID;
            var _closure1_slot14 = var12;
            var7 = var7.UserFlags;
            var _closure1_slot15 = var7;
            var7 = 'scientist:triggered';
            var _closure1_slot16 = var7;
            var7 = 'exerimentOverrides';
            var _closure1_slot17 = var7;
            var7 = 'userExperimentOverrides';
            var _closure1_slot18 = var7;
            var7 = 'guildExperimentOverrides';
            var _closure1_slot19 = var7;
            var7 = 10;
            var7 = var6[var7];
            var9 = var9.bind(var0)(var7);
            var7 = var9.prototype;
            var12 = Object.create(var7, {
                constructor: {
                    value: var9
                }
            });
            var7 = 'ExperimentStore';
            var16 = var12;
            var15 = var7;
            var9 = new var16[var9](var15, var14);
            var9 = var9 instanceof Object ? var9 : var12;
            var _closure1_slot20 = var9;
            var9 = false;
            var _closure1_slot21 = var9;
            var9 = {};
            var _closure1_slot22 = var9;
            var9 = var3.Map;
            var12 = var9.prototype;
            var12 = Object.create(var12, {
                constructor: {
                    value: var9
                }
            });
            var16 = var12;
            var9 = new var16[var9](var15);
            var9 = var9 instanceof Object ? var9 : var12;
            var _closure1_slot23 = var9;
            var9 = {};
            var _closure1_slot24 = var9;
            var9 = {};
            var12 = new Array(0);
            var9.rawUserExperiments = var12;
            var12 = new Array(0);
            var9.rawGuildExperiments = var12;
            var _closure1_slot25 = var9;
            var9 = {};
            var _closure1_slot26 = var9;
            var9 = {};
            var _closure1_slot27 = var9;
            var9 = {};
            var _closure1_slot28 = var9;
            var9 = {};
            var _closure1_slot29 = var9;
            var9 = {};
            var _closure1_slot30 = var9;
            var9 = var3.window;
            var9 = var9.GLOBAL_ENV;
            var12 = var9.RELEASE_CHANNEL;
            var9 = 'staging';
            var9 = var9 === var12;
            if (var9) {
                _fun17646_ip = 729;
                continue _fun17646
            }
        case 727:
            var9 = true;
        case 729:
            var _closure1_slot31 = var9;
            var9 = {};
            var _closure1_slot32 = var9;
            var10 = var11.map;
            var9 = function(arg0) { // Environment: var1
                var2 = _closure1_slot38;
                var1 = undefined;
                var0 = arg0;
                var0 = var2.bind(var1)(var0);
                return var0;
            };
            var9 = var10.bind(var11)(var9);
            var _closure1_slot33 = var9;
            var9 = 604800000;
            var _closure1_slot34 = var9;
            var9 = var3.Date;
            var3 = var9.now;
            var3 = var3.bind(var9)();
            var3 = function(arg0) { // Environment: var1
                var3 = function() { // Original name: ExperimentStore, environment: var5
                    _fun17686: for (var _fun17686_ip = 0;;) switch (_fun17686_ip) {
                        case 0:
                            var4 = this;
                            var0 = _closure1_slot3;
                            var2 = _closure2_slot0;
                            var3 = undefined;
                            var0 = var0.bind(var3)(var4, var2);
                            var0 = {};
                            var5 = _closure1_slot55;
                            var0.LOGOUT = var5;
                            var5 = _closure1_slot56;
                            var0.LOGIN_SUCCESS = var5;
                            var5 = _closure1_slot48;
                            var0.CONNECTION_OPEN = var5;
                            var0.EXPERIMENTS_FETCH_SUCCESS = var5;
                            var5 = _closure1_slot53;
                            var0.OVERLAY_INITIALIZE = var5;
                            var5 = _closure1_slot54;
                            var0.EXPERIMENTS_FETCH_FAILURE = var5;
                            var5 = _closure1_slot60;
                            var0.EXPERIMENT_OVERRIDE_BUCKET = var5;
                            var5 = _closure1_slot61;
                            var0.GUILD_CREATE = var5;
                            var0.GUILD_UPDATE = var5;
                            var9 = new Array(2);
                            var9[0] = var0;
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var0 = 17;
                            var0 = var6[var0];
                            var0 = var5.bind(var3)(var0);
                            var0 = var0.DispatchBand;
                            var0 = var0.Early;
                            var9[1] = var0;
                            var0 = _closure1_slot6;
                            var8 = var0.bind(var3)(var2);
                            var2 = _closure1_slot5;
                            var0 = _closure1_slot35;
                            var0 = var0.bind(var3)();
                            if (var0) {
                                _fun17686_ip = 181;
                                continue _fun17686
                            }
                        case 168:
                            var0 = var8.apply;
                            var0 = var0.bind(var8)(var4, var9);
                            _fun17686_ip = 215;
                            continue _fun17686;
                        case 181:
                            var5 = global;
                            var7 = var5.Reflect;
                            var6 = var7.construct;
                            var5 = _closure1_slot6;
                            var5 = var5.bind(var3)(var4);
                            var5 = var5.constructor;
                            var0 = var6.bind(var7)(var8, var9, var5);
                        case 215:
                            var0 = var2.bind(var3)(var4, var0);
                            var1 = _closure1_slot44;
                            var0.trackExposure = var1;
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
                    _fun17687: for (var _fun17687_ip = 0;;) switch (_fun17687_ip) {
                        case 0:
                            var2 = this;
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var0 = 15;
                            var3 = var3[var0];
                            var0 = undefined;
                            var3 = var4.bind(var0)(var3);
                            var5 = var3.Storage;
                            var4 = var5.get;
                            var3 = _closure1_slot16;
                            var3 = var4.bind(var5)(var3);
                            var4 = null;
                            if (!(var4 != var3)) {
                                _fun17687_ip = 168;
                                continue _fun17687
                            }
                        case 54:
                            var5 = var3.v;
                            var4 = 1;
                            if (!(var4 === var5)) {
                                _fun17687_ip = 168;
                                continue _fun17687
                            }
                        case 66:
                            var4 = var3.e;
                            var3 = global;
                            var5 = var3.Date;
                            var3 = var5.now;
                            var12 = var3.bind(var5)();
                            var10 = var4;
                            var3 = false;
                            var5 = false;
                            for (var7 in var10)
                                case 103: {
                                    var5 = var3;
                                    case 115: var13 = var7;
                                    var14 = var4[var13];
                                    var14 = var14.time;
                                    var15 = var12 - var14;
                                    var14 = _closure1_slot34;
                                    if (!(var15 > var14)) {
                                        _fun17687_ip = 103;
                                        continue _fun17687
                                    }
                                    case 140: var13 = delete var4[var13];
                                    var3 = true;
                                    _fun17687_ip = 103;
                                    continue _fun17687;
                                }
                        case 148:
                            var3 = var4;
                            if (!var5) {
                                _fun17687_ip = 170;
                                continue _fun17687
                            }
                        case 154:
                            var5 = _closure1_slot59;
                            var5 = var5.bind(var0)(var4);
                            var3 = var4;
                            _fun17687_ip = 170;
                            continue _fun17687;
                        case 168:
                            var3 = {};
                        case 170:
                            _closure1_slot22 = var3;
                            var3 = _closure1_slot57;
                            var3 = var3.bind(var0)();
                            var3 = var2.waitFor;
                            var1 = _closure1_slot9;
                            var1 = var3.bind(var2)(var1);
                            var1 = var2.loadCache;
                            var1 = var1.bind(var2)();
                            return var0;
                    }
                };
                var4.value = var0;
                var0 = new Array(20);
                var0[0] = var4;
                var4 = {};
                var6 = 'loadCache';
                var4.key = var6;
                var6 = function() { // Original name: value, environment: var5
                    _fun17688: for (var _fun17688_ip = 0;;) switch (_fun17688_ip) {
                        case 0:
                            var3 = this;
                            var2 = var3.readSnapshot;
                            var1 = _closure2_slot0;
                            var1 = var1.LATEST_SNAPSHOT_VERSION;
                            var2 = var2.bind(var3)(var1);
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun17688_ip = 171;
                                continue _fun17688
                            }
                        case 38:
                            var1 = 'loadedUserExperiments';
                            var3 = var1 in var2;
                            if (var3) {
                                _fun17688_ip = 68;
                                continue _fun17688
                            }
                        case 52:
                            var5 = _closure1_slot49;
                            var4 = undefined;
                            var3 = true;
                            var3 = var5.bind(var4)(var2, var3);
                            _fun17688_ip = 171;
                            continue _fun17688;
                        case 68:
                            var3 = var2.loadedUserExperiments;
                            _closure1_slot26 = var3;
                            var4 = _closure1_slot52;
                            var3 = var2.loadedGuildExperiments;
                            var2 = undefined;
                            var2 = var4.bind(var2)(var3);
                            _closure1_slot27 = var2;
                            var2 = global;
                            var5 = var2.Object;
                            var4 = var5.values;
                            var3 = _closure1_slot26;
                            var5 = var4.bind(var5)(var3);
                            var4 = var5.forEach;
                            var3 = function(arg0) { // Environment: var0
                                var0 = true;
                                var1 = arg0;
                                var1.loadedFromCache = var0;
                                return var0;
                            };
                            var3 = var4.bind(var5)(var3);
                            var3 = var2.Object;
                            var2 = var3.values;
                            var1 = _closure1_slot27;
                            var2 = var2.bind(var3)(var1);
                            var1 = var2.forEach;
                            var0 = function(arg0) { // Environment: var0
                                var0 = true;
                                var1 = arg0;
                                var1.loadedFromCache = var0;
                                return var0;
                            };
                            var0 = var1.bind(var2)(var0);
                        case 171:
                            var0 = undefined;
                            return var0;
                    }
                };
                var4.value = var6;
                var0[1] = var4;
                var4 = {};
                var6 = 'takeSnapshot';
                var4.key = var6;
                var6 = function() { // Original name: value, environment: var5
                    var0 = {};
                    var1 = _closure2_slot0;
                    var1 = var1.LATEST_SNAPSHOT_VERSION;
                    var0.version = var1;
                    var1 = {};
                    var3 = _closure1_slot25;
                    var4 = var1;
                    var2 = copyDataProperties(var4, var3);
                    var0.data = var1;
                    return var0;
                };
                var4.value = var6;
                var0[2] = var4;
                var4 = {};
                var6 = 'hasLoadedExperiments';
                var4.key = var6;
                var6 = function() { // Original name: get, environment: var5
                    var0 = _closure1_slot21;
                    return var0;
                };
                var4.get = var6;
                var0[3] = var4;
                var4 = {};
                var6 = 'hasRegisteredExperiment';
                var4.key = var6;
                var6 = function(arg0) { // Original name: value, environment: var5
                    var1 = _closure1_slot24;
                    var0 = arg0;
                    var1 = var1[var0];
                    var0 = null;
                    var0 = var0 != var1;
                    return var0;
                };
                var4.value = var6;
                var0[4] = var4;
                var4 = {};
                var6 = 'getUserExperimentDescriptor';
                var4.key = var6;
                var6 = function(arg0) { // Original name: value, environment: var5
                    _fun17694: for (var _fun17694_ip = 0;;) switch (_fun17694_ip) {
                        case 0:
                            var4 = arg0;
                            var0 = _closure1_slot31;
                            if (!var0) {
                                _fun17694_ip = 27;
                                continue _fun17694
                            }
                        case 13:
                            var0 = _closure1_slot29;
                            var0 = var0[var4];
                            var2 = null;
                            if (!(var2 == var0)) {
                                _fun17694_ip = 70;
                                continue _fun17694
                            }
                        case 27:
                            var3 = _closure1_slot38;
                            var2 = undefined;
                            var4 = var3.bind(var2)(var4);
                            var2 = _closure1_slot26;
                            var1 = global;
                            var1 = var1.HermesInternal;
                            var3 = var1.concat;
                            var1 = '';
                            var1 = var3.bind(var1)(var4);
                            var1 = var2[var1];
                            return var1;
                        case 70:
                            return var0;
                    }
                };
                var4.value = var6;
                var0[5] = var4;
                var4 = {};
                var6 = 'getGuildExperimentDescriptor';
                var4.key = var6;
                var6 = function(arg0, arg1) { // Original name: value, environment: var5
                    _fun17695: for (var _fun17695_ip = 0;;) switch (_fun17695_ip) {
                        case 0:
                            var6 = arg0;
                            var5 = arg1;
                            var2 = null;
                            if (!(var2 == var5)) {
                                _fun17695_ip = 19;
                                continue _fun17695
                            }
                        case 12:
                            var5 = _closure1_slot14;
                        case 19:
                            var0 = _closure1_slot30;
                            var0 = var0[var6];
                            var3 = _closure1_slot31;
                            if (!var3) {
                                _fun17695_ip = 41;
                                continue _fun17695
                            }
                        case 37:
                            if (!(var2 == var0)) {
                                _fun17695_ip = 112;
                                continue _fun17695
                            }
                        case 41:
                            var2 = global;
                            var2 = var2.HermesInternal;
                            var4 = var2.concat;
                            var3 = '';
                            var2 = ':';
                            var2 = var4.bind(var3)(var5, var2, var6);
                            var3 = _closure1_slot28;
                            var3 = var2 in var3;
                            if (var3) {
                                _fun17695_ip = 102;
                                continue _fun17695
                            }
                        case 80:
                            var4 = _closure1_slot51;
                            var3 = undefined;
                            var3 = var4.bind(var3)(var5, var6);
                            var4 = _closure1_slot28;
                            var4[var2] = var3;
                            return var3;
                        case 102:
                            var1 = _closure1_slot28;
                            var1 = var1[var2];
                            return var1;
                        case 112:
                            return var0;
                    }
                };
                var4.value = var6;
                var0[6] = var4;
                var4 = {};
                var6 = 'getUserExperimentBucket';
                var4.key = var6;
                var6 = function(arg0) { // Original name: value, environment: var5
                    _fun17696: for (var _fun17696_ip = 0;;) switch (_fun17696_ip) {
                        case 0:
                            var2 = this;
                            var1 = var2.getUserExperimentDescriptor;
                            var0 = arg0;
                            var1 = var1.bind(var2)(var0);
                            var0 = null;
                            if (!(var0 == var1)) {
                                _fun17696_ip = 38;
                                continue _fun17696
                            }
                        case 23:
                            var0 = _closure1_slot10;
                            var0 = var0.NOT_ELIGIBLE;
                            _fun17696_ip = 44;
                            continue _fun17696;
                        case 38:
                            var0 = var1.bucket;
                        case 44:
                            return var0;
                    }
                };
                var4.value = var6;
                var0[7] = var4;
                var4 = {};
                var6 = 'getGuildExperimentBucket';
                var4.key = var6;
                var6 = function(arg0, arg1) { // Original name: value, environment: var5
                    _fun17697: for (var _fun17697_ip = 0;;) switch (_fun17697_ip) {
                        case 0:
                            var3 = this;
                            var2 = var3.getGuildExperimentDescriptor;
                            var1 = arg0;
                            var0 = arg1;
                            var1 = var2.bind(var3)(var1, var0);
                            var0 = null;
                            if (!(var0 == var1)) {
                                _fun17697_ip = 42;
                                continue _fun17697
                            }
                        case 27:
                            var0 = _closure1_slot10;
                            var0 = var0.NOT_ELIGIBLE;
                            _fun17697_ip = 48;
                            continue _fun17697;
                        case 42:
                            var0 = var1.bucket;
                        case 48:
                            return var0;
                    }
                };
                var4.value = var6;
                var0[8] = var4;
                var4 = {};
                var6 = 'getAllUserExperimentDescriptors';
                var4.key = var6;
                var6 = function() { // Original name: value, environment: var5
                    var0 = _closure1_slot26;
                    return var0;
                };
                var4.value = var6;
                var0[9] = var4;
                var4 = {};
                var6 = 'getGuildExperiments';
                var4.key = var6;
                var6 = function() { // Original name: value, environment: var5
                    var0 = _closure1_slot27;
                    return var0;
                };
                var4.value = var6;
                var0[10] = var4;
                var4 = {};
                var6 = 'getLoadedUserExperiment';
                var4.key = var6;
                var6 = function(arg0) { // Original name: value, environment: var5
                    var1 = _closure1_slot26;
                    var3 = _closure1_slot38;
                    var2 = undefined;
                    var0 = arg0;
                    var0 = var3.bind(var2)(var0);
                    var0 = var1[var0];
                    return var0;
                };
                var4.value = var6;
                var0[11] = var4;
                var4 = {};
                var6 = 'getLoadedGuildExperiment';
                var4.key = var6;
                var6 = function(arg0) { // Original name: value, environment: var5
                    var1 = _closure1_slot27;
                    var3 = _closure1_slot38;
                    var2 = undefined;
                    var0 = arg0;
                    var0 = var3.bind(var2)(var0);
                    var0 = var1[var0];
                    return var0;
                };
                var4.value = var6;
                var0[12] = var4;
                var4 = {};
                var6 = 'getRecentExposures';
                var4.key = var6;
                var6 = function(arg0, arg1) { // Original name: value, environment: var5
                    var1 = global;
                    var2 = var1.HermesInternal;
                    var6 = var2.concat;
                    var11 = '';
                    var10 = arg0;
                    var3 = '|';
                    var8 = arg1;
                    var9 = var3;
                    var7 = var3;
                    var2 = var11[var6](var10, var9, var8, var7, var6);
                    var _closure3_slot0 = var2;
                    var3 = var1.Object;
                    var2 = var3.entries;
                    var1 = _closure1_slot22;
                    var3 = var2.bind(var3)(var1);
                    var2 = var3.filter;
                    var1 = function(arg0) { // Environment: var0
                        _fun17703: for (var _fun17703_ip = 0;;) switch (_fun17703_ip) {
                            case 0:
                                var1 = arg0;
                                var0 = var1[Symbol.iterator];
                                var1 = var0().next;
                                var3 = var1().value;
                                var1 = var0;
                                var2 = undefined;
                                var1 = var1 === var2;
                                if (var1) {
                                    _fun17703_ip = 25;
                                    continue _fun17703
                                }
                            case 22:
                                var2 = var3;
                            case 25:
                                if (var1) {
                                    _fun17703_ip = 31;
                                    continue _fun17703
                                }
                            case 28:
                                var0.return();
                            case 31:
                                var1 = var2.startsWith;
                                var0 = _closure3_slot0;
                                var0 = var1.bind(var2)(var0);
                                return var0;
                        }
                    };
                    var2 = var2.bind(var3)(var1);
                    var1 = var2.map;
                    var0 = function(arg0) { // Environment: var0
                        _fun17704: for (var _fun17704_ip = 0;;) switch (_fun17704_ip) {
                            case 0:
                                var6 = arg0;
                                var1 = var6[Symbol.iterator];
                                var6 = var1().next;
                                var8 = undefined;
                                var2 = undefined;
                                var5 = undefined;
                                var7 = var6().value;
                                var9 = var1;
                                var9 = var9 === var8;
                                var2 = var9;
                                if (var9) {
                                    _fun17704_ip = 32;
                                    continue _fun17704
                                }
                            case 29:
                                var5 = var7;
                            case 32:
                                var3 = var5;
                                var5 = undefined;
                                var7 = var2;
                                if (var7) {
                                    _fun17704_ip = 63;
                                    continue _fun17704
                                }
                            case 43:
                                var6 = var6().value;
                                var7 = var1;
                                var7 = var7 === var8;
                                var2 = var7;
                                if (var7) {
                                    _fun17704_ip = 63;
                                    continue _fun17704
                                }
                            case 60:
                                var5 = var6;
                            case 63: // try_start_0
                                var4 = var5.time;
                            case 69: // try_end0
                                var5 = var2;
                                if (var5) {
                                    _fun17704_ip = 78;
                                    continue _fun17704
                                }
                            case 75:
                                var1.return();
                            case 78:
                                var7 = var3;
                                var6 = var7.replace;
                                var5 = _closure3_slot0;
                                var3 = '';
                                var5 = var6.bind(var7)(var5, var3);
                                var3 = new Array(2);
                                var3[0] = var5;
                                var3[1] = var4;
                                return var3;
                            case 117: // catch_target0
                                CatchBlockStart(arg_register = 0);
                                _fun17704_ip = 123;
                                continue _fun17704;
                            case 121:
                                CatchBlockStart(arg_register = 0);
                            case 123:
                                if (var2) {
                                    _fun17704_ip = 129;
                                    continue _fun17704
                                }
                            case 126:
                                var1.return();
                            case 129:
                                throw var0;
                        }
                    };
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var4.value = var6;
                var0[13] = var4;
                var4 = {};
                var6 = 'getRegisteredExperiments';
                var4.key = var6;
                var6 = function() { // Original name: value, environment: var5
                    var0 = _closure1_slot24;
                    return var0;
                };
                var4.value = var6;
                var0[14] = var4;
                var4 = {};
                var6 = 'getAllExperimentOverrideDescriptors';
                var4.key = var6;
                var6 = function() { // Original name: value, environment: var5
                    _fun17706: for (var _fun17706_ip = 0;;) switch (_fun17706_ip) {
                        case 0:
                            var0 = _closure1_slot31;
                            var1 = {};
                            if (var0) {
                                _fun17706_ip = 17;
                                continue _fun17706
                            }
                        case 12:
                            var0 = var1;
                            _fun17706_ip = 42;
                            continue _fun17706;
                        case 17:
                            var4 = _closure1_slot29;
                            var5 = var1;
                            var3 = copyDataProperties(var5, var4);
                            var4 = _closure1_slot30;
                            var5 = var1;
                            var2 = copyDataProperties(var5, var4);
                            var0 = var1;
                        case 42:
                            return var0;
                    }
                };
                var4.value = var6;
                var0[15] = var4;
                var4 = {};
                var6 = 'getExperimentOverrideDescriptor';
                var4.key = var6;
                var6 = function(arg0) { // Original name: value, environment: var5
                    _fun17707: for (var _fun17707_ip = 0;;) switch (_fun17707_ip) {
                        case 0:
                            var3 = arg0;
                            var1 = _closure1_slot31;
                            var4 = null;
                            var0 = null;
                            if (!var1) {
                                _fun17707_ip = 40;
                                continue _fun17707
                            }
                        case 17:
                            var1 = _closure1_slot29;
                            var1 = var1[var3];
                            if (!(var4 == var1)) {
                                _fun17707_ip = 37;
                                continue _fun17707
                            }
                        case 29:
                            var2 = _closure1_slot30;
                            var1 = var2[var3];
                        case 37:
                            var0 = var1;
                        case 40:
                            return var0;
                    }
                };
                var4.value = var6;
                var0[16] = var4;
                var4 = {};
                var6 = 'getAllExperimentAssignments';
                var4.key = var6;
                var6 = function() { // Original name: value, environment: var5
                    _fun17708: for (var _fun17708_ip = 0;;) switch (_fun17708_ip) {
                        case 0:
                            var0 = {};
                            var8 = {};
                            var _closure3_slot0 = var8;
                            var6 = global;
                            var10 = var6.Object;
                            var9 = var10.keys;
                            var6 = _closure1_slot24;
                            var9 = var9.bind(var10)(var6);
                            var6 = var9.forEach;
                            var1 = function(arg0) { // Environment: var1
                                var3 = arg0;
                                var2 = _closure3_slot0;
                                var4 = _closure1_slot38;
                                var0 = global;
                                var0 = var0.HermesInternal;
                                var1 = var0.concat;
                                var0 = '';
                                var1 = var1.bind(var0)(var3);
                                var0 = undefined;
                                var1 = var4.bind(var0)(var1);
                                var2[var1] = var3;
                                return var0;
                            };
                            var1 = var6.bind(var9)(var1);
                            var4 = _closure1_slot26;
                            var6 = null;
                            for (var1 in var4)
                                case 64: {
                                    case 73: var11 = var1;
                                    var10 = var8[var11];
                                    if (var6 == var10) {
                                        _fun17708_ip = 64;
                                        continue _fun17708
                                    }
                                    case 84: var9 = _closure1_slot26;
                                    var9 = var9[var11];
                                    var9 = var9.bucket;
                                    var0[var10] = var9;
                                    _fun17708_ip = 64;
                                    continue _fun17708;
                                }
                        case 104:
                            var4 = _closure1_slot28;
                            for (var1 in var4)
                                case 116: {
                                    case 125: var9 = var1;
                                    var8 = _closure1_slot28;
                                    var8 = var8[var9];
                                    if (var6 == var8) {
                                        _fun17708_ip = 116;
                                        continue _fun17708
                                    }
                                    case 140: var8 = var8.bucket;
                                    var0[var9] = var8;
                                    _fun17708_ip = 116;
                                    continue _fun17708;
                                }
                        case 152:
                            return var0;
                    }
                };
                var4.value = var6;
                var0[17] = var4;
                var4 = {};
                var6 = 'getSerializedState';
                var4.key = var6;
                var6 = function() { // Original name: value, environment: var5
                    _fun17710: for (var _fun17710_ip = 0;;) switch (_fun17710_ip) {
                        case 0:
                            var2 = {};
                            var10 = _closure1_slot27;
                            var6 = global;
                            var4 = undefined;
                            for (var7 in var10)
                                case 21: {
                                    case 30: var0 = var7;
                                    var12 = var6.JSON;
                                    var5 = var12.parse;
                                    var14 = var6.JSON;
                                    var13 = var14.stringify;
                                    var3 = _closure1_slot27;
                                    var3 = var3[var0];
                                    var3 = var13.bind(var14)(var3);
                                    var3 = var5.bind(var12)(var3);
                                    var2[var0] = var3;
                                    var3 = _closure1_slot36;
                                    var0 = var2[var0];
                                    var0 = var0.populations;
                                    var5 = var3.bind(var4)(var0);
                                    var3 = var5.bind(var4)();
                                    var0 = var3.done;
                                    if (var0) {
                                        _fun17710_ip = 21;
                                        continue _fun17710
                                    }
                                    case 110: var12 = var3.value;
                                    var0 = new Array(0);
                                    var12.filters = var0;
                                    var12 = var5.bind(var4)();
                                    var0 = var12.done;
                                    var3 = var12;
                                    if (var0) {
                                        _fun17710_ip = 21;
                                        continue _fun17710
                                    }
                                    case 140: _fun17710_ip = 110;
                                    continue _fun17710;
                                }
                        case 142:
                            var0 = {};
                            var3 = _closure1_slot21;
                            var0.hasLoadedExperiments = var3;
                            var3 = _closure1_slot22;
                            var0.trackedExposureExperiments = var3;
                            var3 = _closure1_slot26;
                            var0.loadedUserExperiments = var3;
                            var0.loadedGuildExperiments = var2;
                            var2 = _closure1_slot29;
                            var0.userExperimentOverrides = var2;
                            var2 = _closure1_slot30;
                            var0.guildExperimentOverrides = var2;
                            var3 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var2 = 11;
                            var2 = var5[var2];
                            var3 = var3.bind(var4)(var2);
                            var2 = var3.getBuildOverrideExperiments;
                            var2 = var2.bind(var3)();
                            var0.cookieOverrides = var2;
                            var2 = _closure1_slot25;
                            var2 = var2.source;
                            var0.assignmentSource = var2;
                            var2 = _closure1_slot25;
                            var2 = var2.sessionId;
                            var0.assignmentSessionId = var2;
                            var1 = _closure1_slot25;
                            var1 = var1.fingerprint;
                            var0.assignmentFingerprint = var1;
                            return var0;
                    }
                };
                var4.value = var6;
                var0[18] = var4;
                var4 = {};
                var6 = 'hasExperimentTrackedExposure';
                var4.key = var6;
                var5 = function(arg0, arg1, arg2, arg3) { // Original name: value, environment: var5
                    var4 = arg1;
                    var3 = _closure1_slot43;
                    var7 = _closure1_slot41;
                    var2 = undefined;
                    var11 = arg0;
                    var9 = arg2;
                    var8 = arg3;
                    var12 = undefined;
                    var10 = var4;
                    var1 = var12[var7](var11, var10, var9, var8, var7);
                    var0 = _closure1_slot42;
                    var0 = var0.bind(var2)(var4);
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                };
                var4.value = var5;
                var0[19] = var4;
                var0 = var1.bind(var2)(var3, var0);
                return var0;
            };
            var3 = var3.bind(var0)(var8);
            var3.displayName = var7;
            var3.LATEST_SNAPSHOT_VERSION = var4;
            var4 = var3.prototype;
            var4 = Object.create(var4, {
                constructor: {
                    value: var3
                }
            });
            var16 = var4;
            var3 = new var16[var3](var15);
            var3 = var3 instanceof Object ? var3 : var4;
            var4 = 18;
            var4 = var6[var4];
            var6 = var5.bind(var0)(var4);
            var5 = var6.fileFinishedImporting;
            var4 = 'modules/experiments/ExperimentStore.tsx';
            var4 = var5.bind(var6)(var4);
            var2.default = var3;
            var1 = function(arg0) { // Original name: registerExperiment, environment: var1
                var0 = arg0;
                var2 = var0.experimentId;
                var7 = var0.experimentType;
                var6 = var0.title;
                var5 = var0.description;
                var4 = var0.buckets;
                var3 = var0.commonTriggerPoint;
                var1 = _closure1_slot24;
                var0 = {};
                var0.type = var7;
                var0.title = var6;
                var0.description = var5;
                var0.buckets = var4;
                var0.commonTriggerPoint = var3;
                var1[var2] = var0;
                var0 = undefined;
                return var0;
            };
            var2.registerExperiment = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 57, 1216, 1218, 1591, 660, 3, 1592, 1215, 795, 1596, 587, 22, 806, 2]);