// modules/experiments/createExperiment.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function arg0, arg1, arg2() {
        _fun17630: for (var _fun17630_ip = 0;;) switch (_fun17630_ip) {
            case 0:
                var4 = arg1;
                var1 = 'guild';
                var0 = arg0;
                if (!(var1 !== var0)) {
                    _fun17630_ip = 34;
                    continue _fun17630
                }
            case 14:
                var1 = _closure1_slot7;
                var0 = var1.getUserExperimentDescriptor;
                var0 = var0.bind(var1)(var4);
                _fun17630_ip = 61;
                continue _fun17630;
            case 34:
                var3 = _closure1_slot7;
                var2 = var3.getGuildExperimentDescriptor;
                var1 = arg2;
                var1 = var1.guildId;
                var0 = var2.bind(var3)(var4, var1);
            case 61:
                return var0;
        }
    };
    var _closure1_slot10 = var0;
    var0 = function arg0, arg1, arg2, arg3() {
        _fun17631: for (var _fun17631_ip = 0;;) switch (_fun17631_ip) {
            case 0:
                var1 = arg0;
                var4 = arg2;
                var0 = arg3;
                var2 = null;
                if (!(var2 != var0)) {
                    _fun17631_ip = 24;
                    continue _fun17631
                }
            case 15:
                var0 = var0.aaMode;
                if (var0) {
                    _fun17631_ip = 63;
                    continue _fun17631
                }
            case 24:
                var3 = var4.get;
                var0 = arg1;
                var3 = var3.bind(var4)(var0);
                var4 = var2 == var3;
                var0 = undefined;
                if (var4) {
                    _fun17631_ip = 51;
                    continue _fun17631
                }
            case 46:
                var0 = var3.config;
            case 51:
                if (!(var2 == var0)) {
                    _fun17631_ip = 61;
                    continue _fun17631
                }
            case 55:
                var0 = var1.defaultConfig;
            case 61:
                _fun17631_ip = 69;
                continue _fun17631;
            case 63:
                var0 = var1.defaultConfig;
            case 69:
                return var0;
        }
    };
    var _closure1_slot11 = var0;
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
    var3 = var4.bind(var0)(var3);
    var7 = var3.useState;
    var _closure1_slot4 = var7;
    var3 = var3.useEffect;
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.ExperimentBuckets;
    var _closure1_slot8 = var6;
    var3 = var3.ExposureTypes;
    var _closure1_slot9 = var3;
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/experiments/createExperiment.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun17632: for (var _fun17632_ip = 0;;) switch (_fun17632_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var0 = function arg0() {
                    _fun17633: for (var _fun17633_ip = 0;;) switch (_fun17633_ip) {
                        case 0:
                            var4 = arg0;
                            var3 = arguments[1];
                            var2 = arguments[3];
                            var0 = undefined;
                            if (!(var3 === var0)) {
                                _fun17633_ip = 17;
                                continue _fun17633
                            }
                        case 15:
                            var3 = {};
                        case 17:
                            if (!(var2 === var0)) {
                                _fun17633_ip = 23;
                                continue _fun17633
                            }
                        case 21:
                            var2 = null;
                        case 23:
                            var5 = _closure1_slot9;
                            var1 = arguments[2];
                            if (var1) {
                                _fun17633_ip = 44;
                                continue _fun17633
                            }
                        case 36:
                            var1 = var5.AUTO;
                            _fun17633_ip = 50;
                            continue _fun17633;
                        case 44:
                            var1 = var5.AUTO_FALLBACK;
                        case 50:
                            var3.exposureType = var1;
                            var1 = false;
                            var3.excluded = var1;
                            var1 = null;
                            if (!(var1 == var2)) {
                                _fun17633_ip = 85;
                                continue _fun17633
                            }
                        case 70:
                            var1 = _closure2_slot4;
                            var1 = var1.bind(var0)(var4, var3);
                            _fun17633_ip = 99;
                            continue _fun17633;
                        case 85:
                            var1 = _closure2_slot5;
                            var1 = var1.bind(var0)(var4, var3, var2);
                        case 99:
                            return var0;
                    }
                };
                var _closure2_slot3 = var0;
                var3 = function arg0() {
                    _fun17634: for (var _fun17634_ip = 0;;) switch (_fun17634_ip) {
                        case 0:
                            var4 = arg0;
                            var3 = arguments[1];
                            var0 = undefined;
                            if (!(var3 === var0)) {
                                _fun17634_ip = 42;
                                continue _fun17634
                            }
                        case 12:
                            var1 = {};
                            var2 = false;
                            var1.excluded = var2;
                            var2 = _closure1_slot9;
                            var2 = var2.MANUAL;
                            var1.exposureType = var2;
                            var3 = var1;
                        case 42:
                            var6 = _closure1_slot10;
                            var2 = _closure2_slot0;
                            var5 = var2.kind;
                            var2 = _closure2_slot2;
                            var2 = var2.id;
                            var2 = var6.bind(var0)(var5, var2, var4);
                            var5 = null;
                            if (!(var5 != var2)) {
                                _fun17634_ip = 94;
                                continue _fun17634
                            }
                        case 83:
                            var1 = _closure2_slot5;
                            var1 = var1.bind(var0)(var4, var3, var2);
                        case 94:
                            return var0;
                    }
                };
                var _closure2_slot4 = var3;
                var0 = function arg0, arg1, arg2() {
                    _fun17635: for (var _fun17635_ip = 0;;) switch (_fun17635_ip) {
                        case 0:
                            var10 = arg0;
                            var8 = arg1;
                            var4 = arg2;
                            var7 = null;
                            if (!(var7 != var4)) {
                                _fun17635_ip = 242;
                                continue _fun17635
                            }
                        case 18:
                            var0 = _closure1_slot9;
                            var5 = var0.MANUAL;
                            var1 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var0 = 5;
                            var0 = var2[var0];
                            var6 = undefined;
                            var3 = var1.bind(var6)(var0);
                            var2 = var3.trackExposureToExperiment;
                            var0 = _closure2_slot2;
                            var1 = var0.id;
                            var0 = {};
                            var12 = var7 == var10;
                            var11 = undefined;
                            if (var12) {
                                _fun17635_ip = 87;
                                continue _fun17635
                            }
                        case 82:
                            var11 = var10.location;
                        case 87:
                            var12 = var7 != var11;
                            var10 = 'unknown';
                            if (!var12) {
                                _fun17635_ip = 101;
                                continue _fun17635
                            }
                        case 98:
                            var10 = var11;
                        case 101:
                            var0.location = var10;
                            var11 = var7 == var8;
                            var10 = undefined;
                            if (var11) {
                                _fun17635_ip = 120;
                                continue _fun17635
                            }
                        case 114:
                            var10 = var8.analyticsLocations;
                        case 120:
                            if (!(var7 == var10)) {
                                _fun17635_ip = 128;
                                continue _fun17635
                            }
                        case 124:
                            var10 = new Array(0);
                        case 128:
                            var0.analyticsLocations = var10;
                            var11 = var7 == var8;
                            var10 = undefined;
                            if (var11) {
                                _fun17635_ip = 148;
                                continue _fun17635
                            }
                        case 142:
                            var10 = var8.fingerprint;
                        case 148:
                            if (!(var7 == var10)) {
                                _fun17635_ip = 166;
                                continue _fun17635
                            }
                        case 152:
                            var11 = _closure1_slot6;
                            var9 = var11.getFingerprint;
                            var10 = var9.bind(var11)();
                        case 166:
                            var11 = var7 != var10;
                            var9 = undefined;
                            if (!var11) {
                                _fun17635_ip = 178;
                                continue _fun17635
                            }
                        case 175:
                            var9 = var10;
                        case 178:
                            var0.fingerprint = var9;
                            var10 = var7 == var8;
                            var9 = undefined;
                            if (var10) {
                                _fun17635_ip = 198;
                                continue _fun17635
                            }
                        case 192:
                            var9 = var8.excluded;
                        case 198:
                            if (var9) {
                                _fun17635_ip = 203;
                                continue _fun17635
                            }
                        case 201:
                            var9 = false;
                        case 203:
                            var0.excluded = var9;
                            var9 = var7 == var8;
                            var6 = undefined;
                            if (var9) {
                                _fun17635_ip = 223;
                                continue _fun17635
                            }
                        case 217:
                            var6 = var8.exposureType;
                        case 223:
                            if (!(var7 != var6)) {
                                _fun17635_ip = 230;
                                continue _fun17635
                            }
                        case 227:
                            var5 = var6;
                        case 230:
                            var0.exposureType = var5;
                            var0 = var2.bind(var3)(var1, var4, var0);
                        case 242:
                            var0 = undefined;
                            return var0;
                    }
                };
                var _closure2_slot5 = var0;
                var4 = function arg0, arg1() {
                    _fun17636: for (var _fun17636_ip = 0;;) switch (_fun17636_ip) {
                        case 0:
                            var11 = arg0;
                            var7 = arg1;
                            var1 = arguments[2];
                            var _closure3_slot0 = var11;
                            var _closure3_slot1 = var7;
                            var6 = undefined;
                            if (!(var1 === var6)) {
                                _fun17636_ip = 27;
                                continue _fun17636
                            }
                        case 25:
                            var1 = {};
                        case 27:
                            var _closure3_slot2 = var6;
                            var _closure3_slot3 = var6;
                            var _closure3_slot4 = var6;
                            var3 = function() {
                                _fun17637: for (var _fun17637_ip = 0;;) switch (_fun17637_ip) {
                                    case 0:
                                        var7 = _closure1_slot10;
                                        var0 = _closure2_slot0;
                                        var5 = var0.kind;
                                        var3 = var0.id;
                                        var1 = _closure3_slot0;
                                        var0 = undefined;
                                        var8 = var7.bind(var0)(var5, var3, var1);
                                        var1 = null;
                                        if (!(var1 != var8)) {
                                            _fun17637_ip = 61;
                                            continue _fun17637
                                        }
                                    case 46:
                                        var3 = _closure3_slot2;
                                        if (var3) {
                                            _fun17637_ip = 61;
                                            continue _fun17637
                                        }
                                    case 53:
                                        var3 = var8.bucket;
                                        _fun17637_ip = 71;
                                        continue _fun17637;
                                    case 61:
                                        var5 = _closure1_slot8;
                                        var3 = var5.NOT_ELIGIBLE;
                                    case 71:
                                        var5 = var1 == var8;
                                        var1 = -1;
                                        if (var5) {
                                            _fun17637_ip = 90;
                                            continue _fun17637
                                        }
                                    case 84:
                                        var1 = var8.revision;
                                    case 90:
                                        var5 = _closure3_slot3;
                                        var5 = var3 === var5;
                                        if (!var5) {
                                            _fun17637_ip = 109;
                                            continue _fun17637
                                        }
                                    case 101:
                                        var7 = _closure3_slot4;
                                        var5 = var7 === var1;
                                    case 109:
                                        if (var5) {
                                            _fun17637_ip = 155;
                                            continue _fun17637
                                        }
                                    case 112:
                                        var5 = _closure3_slot1;
                                        var7 = _closure1_slot11;
                                        var12 = _closure2_slot0;
                                        var10 = _closure2_slot1;
                                        var13 = undefined;
                                        var11 = var3;
                                        var9 = var8;
                                        var4 = var13[var7](var12, var11, var10, var9, var8);
                                        var4 = var5.bind(var0)(var4, var3, var1);
                                        _closure3_slot3 = var3;
                                        _closure3_slot4 = var1;
                                    case 155:
                                        return var0;
                                }
                            };
                            var _closure3_slot5 = var3;
                            var2 = var1.disable;
                            var4 = null;
                            var5 = var4 != var2;
                            if (!var5) {
                                _fun17636_ip = 69;
                                continue _fun17636
                            }
                        case 63:
                            var5 = var1.disable;
                        case 69:
                            _closure3_slot2 = var5;
                            var10 = _closure1_slot10;
                            var8 = _closure2_slot0;
                            var9 = var8.kind;
                            var8 = var8.id;
                            var9 = var10.bind(var6)(var9, var8, var11);
                            if (!(var4 != var9)) {
                                _fun17636_ip = 119;
                                continue _fun17636
                            }
                        case 108:
                            if (var5) {
                                _fun17636_ip = 119;
                                continue _fun17636
                            }
                        case 111:
                            var5 = var9.bucket;
                            _fun17636_ip = 129;
                            continue _fun17636;
                        case 119:
                            var8 = _closure1_slot8;
                            var5 = var8.NOT_ELIGIBLE;
                        case 129:
                            _closure3_slot3 = var5;
                            var5 = var4 == var9;
                            var4 = -1;
                            if (var5) {
                                _fun17636_ip = 152;
                                continue _fun17636
                            }
                        case 146:
                            var4 = var9.revision;
                        case 152:
                            _closure3_slot4 = var4;
                            var8 = _closure1_slot11;
                            var15 = _closure2_slot0;
                            var14 = _closure3_slot3;
                            var13 = _closure2_slot1;
                            var16 = undefined;
                            var12 = var9;
                            var5 = var16[var8](var15, var14, var13, var12, var11);
                            var4 = _closure3_slot3;
                            var2 = _closure3_slot4;
                            var2 = var7.bind(var6)(var5, var4, var2);
                            var2 = _closure1_slot7;
                            var1 = var2.addReactChangeListener;
                            var1 = var1.bind(var2)(var3);
                            var0 = function() { // Environment: var0
                                var2 = _closure1_slot7;
                                var1 = var2.removeReactChangeListener;
                                var0 = _closure3_slot5;
                                var0 = var1.bind(var2)(var0);
                                var0 = undefined;
                                return var0;
                            };
                            return var0;
                    }
                };
                var _closure2_slot6 = var4;
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var0 = 6;
                var0 = var7[var0];
                var8 = undefined;
                var10 = var6.bind(var8)(var0);
                var9 = var10.validateOneExperiment;
                var7 = var2.id;
                var6 = var2.label;
                var0 = var2.commonTriggerPoint;
                var0 = var9.bind(var10)(var7, var6, var0);
                var0 = global;
                var0 = var0.Map;
                var6 = var0.prototype;
                var6 = Object.create(var6, {
                    constructor: {
                        value: var0
                    }
                });
                var16 = var6;
                var0 = new var16[var0](var15);
                var9 = var0 instanceof Object ? var0 : var6;
                var _closure2_slot1 = var9;
                var10 = var9.set;
                var0 = _closure1_slot8;
                var7 = var0.NOT_ELIGIBLE;
                var6 = {};
                var11 = 'Not Eligible';
                var6.description = var11;
                var11 = var2.defaultConfig;
                var6.config = var11;
                var6 = var10.bind(var9)(var7, var6);
                var7 = var9.set;
                var6 = var0.CONTROL;
                var0 = {};
                var10 = 'Control Bucket';
                var0.description = var10;
                var10 = var2.defaultConfig;
                var0.config = var10;
                var0 = var7.bind(var9)(var6, var0);
                var7 = var2.treatments;
                var6 = var7.forEach;
                var0 = function(arg0) { // Environment: var1
                    var4 = arg0;
                    var3 = _closure2_slot1;
                    var2 = var3.set;
                    var1 = var4.id;
                    var0 = {};
                    var9 = var4.id;
                    var8 = var4.label;
                    var5 = global;
                    var5 = var5.HermesInternal;
                    var7 = var5.concat;
                    var6 = 'Treatment ';
                    var5 = ': ';
                    var5 = var7.bind(var6)(var9, var5, var8);
                    var0.description = var5;
                    var4 = var4.config;
                    var0.config = var4;
                    var0 = var2.bind(var3)(var1, var0);
                    var0 = undefined;
                    return var0;
                };
                var0 = var6.bind(var7)(var0);
                var6 = var2.kind;
                var7 = {};
                var0 = var2.id;
                var7.id = var0;
                var0 = var2.label;
                var7.title = var0;
                var0 = var2.commonTriggerPoint;
                var7.commonTriggerPoint = var0;
                var0 = var9.values;
                var14 = var0.bind(var9)();
                var12 = new Array(0);
                var15 = var12;
                var13 = 0;
                var0 = arraySpread(var15, var14, var13);
                var11 = var12.map;
                var0 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var0 = var0.description;
                    return var0;
                };
                var0 = var11.bind(var12)(var0);
                var7.description = var0;
                var0 = var9.keys;
                var14 = var0.bind(var9)();
                var0 = new Array(0);
                var15 = var0;
                var9 = arraySpread(var15, var14, var13);
                var7.buckets = var0;
                var0 = 'guild';
                if (!(var0 !== var6)) {
                    _fun17632_ip = 377;
                    continue _fun17632
                }
            case 344:
                var6 = _closure1_slot0;
                var9 = _closure1_slot2;
                var0 = 5;
                var0 = var9[var0];
                var6 = var6.bind(var8)(var0);
                var0 = var6.registerUserExperiment;
                var0 = var0.bind(var6)(var7);
                _fun17632_ip = 408;
                continue _fun17632;
            case 377:
                var6 = _closure1_slot0;
                var9 = _closure1_slot2;
                var5 = 5;
                var5 = var9[var5];
                var6 = var6.bind(var8)(var5);
                var5 = var6.registerGuildExperiment;
                var0 = var5.bind(var6)(var7);
            case 408:
                var _closure2_slot2 = var0;
                var0 = {};
                var5 = function arg0() {
                    _fun17641: for (var _fun17641_ip = 0;;) switch (_fun17641_ip) {
                        case 0:
                            var7 = arg0;
                            var0 = arguments[1];
                            var4 = undefined;
                            if (!(var0 === var4)) {
                                _fun17641_ip = 26;
                                continue _fun17641
                            }
                        case 14:
                            var2 = {};
                            var3 = true;
                            var2.autoTrackExposure = var3;
                            var0 = var2;
                        case 26:
                            var _closure3_slot0 = var4;
                            var _closure3_slot1 = var4;
                            var _closure3_slot2 = var4;
                            var _closure3_slot3 = var4;
                            var _closure3_slot4 = var4;
                            var _closure3_slot5 = var4;
                            var _closure3_slot6 = var4;
                            var3 = var0.disable;
                            var2 = null;
                            var6 = var2 != var3;
                            if (!var6) {
                                _fun17641_ip = 72;
                                continue _fun17641
                            }
                        case 69:
                            var6 = var3;
                        case 72:
                            _closure3_slot0 = var6;
                            var5 = var0.autoTrackExposure;
                            var3 = false;
                            var11 = var3 !== var5;
                            _closure3_slot1 = var11;
                            var9 = _closure1_slot10;
                            var5 = _closure2_slot0;
                            var8 = var5.kind;
                            var5 = var5.id;
                            var5 = var9.bind(var4)(var8, var5, var7);
                            _closure3_slot2 = var5;
                            var8 = var0.trackExposureOptions;
                            var8 = var2 == var8;
                            var10 = undefined;
                            if (var8) {
                                _fun17641_ip = 179;
                                continue _fun17641
                            }
                        case 142:
                            var9 = _closure1_slot1;
                            var12 = _closure1_slot2;
                            var8 = 7;
                            var8 = var12[var8];
                            var8 = var9.bind(var4)(var8);
                            var0 = var0.trackExposureOptions;
                            if (!(var2 == var0)) {
                                _fun17641_ip = 174;
                                continue _fun17641
                            }
                        case 172:
                            var0 = {};
                        case 174:
                            var10 = var8.bind(var4)(var0);
                        case 179:
                            _closure3_slot3 = var10;
                            var8 = var2 == var5;
                            var0 = undefined;
                            if (var8) {
                                _fun17641_ip = 198;
                                continue _fun17641
                            }
                        case 192:
                            var0 = var5.triggerDebuggingEnabled;
                        case 198:
                            var2 = var2 != var0;
                            if (!var2) {
                                _fun17641_ip = 208;
                                continue _fun17641
                            }
                        case 205:
                            var2 = var0;
                        case 208:
                            _closure3_slot4 = var2;
                            var5 = _closure1_slot4;
                            var0 = function() { // Environment: var1
                                _fun17642: for (var _fun17642_ip = 0;;) switch (_fun17642_ip) {
                                    case 0:
                                        var0 = _closure3_slot2;
                                        var3 = null;
                                        if (!(var3 != var0)) {
                                            _fun17642_ip = 32;
                                            continue _fun17642
                                        }
                                    case 13:
                                        var0 = _closure3_slot0;
                                        if (var0) {
                                            _fun17642_ip = 32;
                                            continue _fun17642
                                        }
                                    case 20:
                                        var0 = _closure3_slot2;
                                        var1 = var0.bucket;
                                        _fun17642_ip = 45;
                                        continue _fun17642;
                                    case 32:
                                        var0 = _closure1_slot8;
                                        var1 = var0.NOT_ELIGIBLE;
                                    case 45:
                                        var7 = _closure1_slot11;
                                        var11 = _closure2_slot0;
                                        var9 = _closure2_slot1;
                                        var8 = _closure3_slot2;
                                        var12 = undefined;
                                        var10 = var1;
                                        var4 = var12[var7](var11, var10, var9, var8, var7);
                                        var0 = new Array(3);
                                        var0[0] = var4;
                                        var0[1] = var1;
                                        var1 = _closure3_slot2;
                                        var3 = var3 == var1;
                                        var1 = -1;
                                        if (var3) {
                                            _fun17642_ip = 115;
                                            continue _fun17642
                                        }
                                    case 105:
                                        var2 = _closure3_slot2;
                                        var1 = var2.revision;
                                    case 115:
                                        var0[2] = var1;
                                        return var0;
                                }
                            };
                            var0 = var5.bind(var4)(var0);
                            var9 = _closure1_slot3;
                            var13 = 2;
                            var12 = var9.bind(var4)(var0, var13);
                            var0 = 0;
                            var8 = var12[var0];
                            var5 = 3;
                            var8 = var9.bind(var4)(var8, var5);
                            var0 = var8[var0];
                            var5 = 1;
                            var9 = var8[var5];
                            var8 = var8[var13];
                            var5 = var12[var5];
                            _closure3_slot5 = var5;
                            var12 = _closure1_slot1;
                            var13 = _closure1_slot2;
                            var5 = 7;
                            var5 = var13[var5];
                            var5 = var12.bind(var4)(var5);
                            var5 = var5.bind(var4)(var7);
                            _closure3_slot6 = var5;
                            var3 = _closure1_slot5;
                            var7 = new Array(7);
                            var7[0] = var6;
                            var7[1] = var11;
                            var7[2] = var5;
                            var7[3] = var10;
                            var7[4] = var9;
                            var7[5] = var8;
                            var7[6] = var2;
                            var2 = function() { // Environment: var1
                                _fun17643: for (var _fun17643_ip = 0;;) switch (_fun17643_ip) {
                                    case 0:
                                        var1 = _closure3_slot0;
                                        if (var1) {
                                            _fun17643_ip = 30;
                                            continue _fun17643
                                        }
                                    case 10:
                                        var3 = _closure3_slot1;
                                        var2 = !var3;
                                        if (var3) {
                                            _fun17643_ip = 27;
                                            continue _fun17643
                                        }
                                    case 20:
                                        var3 = _closure3_slot4;
                                        var2 = !var3;
                                    case 27:
                                        var1 = var2;
                                    case 30:
                                        if (var1) {
                                            _fun17643_ip = 52;
                                            continue _fun17643
                                        }
                                    case 33:
                                        var2 = _closure2_slot0;
                                        var3 = var2.commonTriggerPoint;
                                        var2 = null;
                                        var1 = var2 != var3;
                                    case 52:
                                        if (var1) {
                                            _fun17643_ip = 89;
                                            continue _fun17643
                                        }
                                    case 55:
                                        var4 = _closure2_slot3;
                                        var3 = _closure3_slot6;
                                        var2 = _closure3_slot3;
                                        var5 = _closure3_slot1;
                                        var1 = undefined;
                                        var0 = false;
                                        var0 = var0 === var5;
                                        var0 = var4.bind(var1)(var3, var2, var0);
                                    case 89:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var2 = var3.bind(var4)(var2, var7);
                            var2 = new Array(2);
                            var2[0] = var6;
                            var2[1] = var5;
                            var1 = function() { // Environment: var1
                                var4 = _closure2_slot6;
                                var3 = _closure3_slot6;
                                var2 = {};
                                var0 = _closure3_slot0;
                                var2.disable = var0;
                                var1 = undefined;
                                var0 = function(arg0, arg1, arg2) { // Environment: var0
                                    var0 = arg0;
                                    var _closure5_slot0 = var0;
                                    var0 = arg1;
                                    var _closure5_slot1 = var0;
                                    var0 = arg2;
                                    var _closure5_slot2 = var0;
                                    var2 = _closure3_slot5;
                                    var0 = undefined;
                                    var1 = function(arg0) { // Environment: var1
                                        _fun17646: for (var _fun17646_ip = 0;;) switch (_fun17646_ip) {
                                            case 0:
                                                var0 = arg0;
                                                var1 = 0;
                                                var3 = var0[var1];
                                                var1 = _closure5_slot0;
                                                if (!(var3 === var1)) {
                                                    _fun17646_ip = 50;
                                                    continue _fun17646
                                                }
                                            case 20:
                                                var1 = 1;
                                                var3 = var0[var1];
                                                var1 = _closure5_slot1;
                                                if (!(var3 === var1)) {
                                                    _fun17646_ip = 50;
                                                    continue _fun17646
                                                }
                                            case 35:
                                                var1 = 2;
                                                var3 = var0[var1];
                                                var1 = _closure5_slot2;
                                                if (!(var3 !== var1)) {
                                                    _fun17646_ip = 81;
                                                    continue _fun17646
                                                }
                                            case 50:
                                                var3 = _closure5_slot0;
                                                var1 = new Array(3);
                                                var1[0] = var3;
                                                var3 = _closure5_slot1;
                                                var1[1] = var3;
                                                var2 = _closure5_slot2;
                                                var1[2] = var2;
                                                var0 = var1;
                                            case 81:
                                                return var0;
                                        }
                                    };
                                    var1 = var2.bind(var0)(var1);
                                    return var0;
                                };
                                var0 = var4.bind(var1)(var3, var0, var2);
                                return var0;
                            };
                            var1 = var3.bind(var4)(var1, var2);
                            return var0;
                    }
                };
                var0.useExperiment = var5;
                var0.subscribe = var4;
                var0.trackExposure = var3;
                var3 = function arg0() {
                    _fun17647: for (var _fun17647_ip = 0;;) switch (_fun17647_ip) {
                        case 0:
                            var7 = arg0;
                            var3 = arguments[1];
                            var5 = undefined;
                            if (!(var3 === var5)) {
                                _fun17647_ip = 24;
                                continue _fun17647
                            }
                        case 12:
                            var0 = {};
                            var1 = true;
                            var0.autoTrackExposure = var1;
                            var3 = var0;
                        case 24:
                            var6 = _closure1_slot10;
                            var2 = _closure2_slot0;
                            var4 = var2.kind;
                            var2 = var2.id;
                            var4 = var6.bind(var5)(var4, var2, var7);
                            var6 = null;
                            if (!(var6 != var4)) {
                                _fun17647_ip = 166;
                                continue _fun17647
                            }
                        case 61:
                            var2 = var3.disable;
                            if (var2) {
                                _fun17647_ip = 166;
                                continue _fun17647
                            }
                        case 70:
                            var2 = var3.autoTrackExposure;
                            var8 = false;
                            if (!(var8 === var2)) {
                                _fun17647_ip = 91;
                                continue _fun17647
                            }
                        case 82:
                            var2 = var4.triggerDebuggingEnabled;
                            if (!var2) {
                                _fun17647_ip = 137;
                                continue _fun17647
                            }
                        case 91:
                            var2 = _closure2_slot0;
                            var2 = var2.commonTriggerPoint;
                            if (!(var6 == var2)) {
                                _fun17647_ip = 137;
                                continue _fun17647
                            }
                        case 105:
                            var2 = var3.autoTrackExposure;
                            var6 = _closure2_slot3;
                            var11 = var3.trackExposureOptions;
                            var10 = var8 === var2;
                            var13 = undefined;
                            var12 = var7;
                            var9 = var4;
                            var2 = var13[var6](var12, var11, var10, var9, var8);
                        case 137:
                            var7 = _closure1_slot11;
                            var12 = _closure2_slot0;
                            var11 = var4.bucket;
                            var10 = _closure2_slot1;
                            var13 = undefined;
                            var9 = var4;
                            var2 = var13[var7](var12, var11, var10, var9, var8);
                            return var2;
                        case 166:
                            var3 = _closure1_slot11;
                            var12 = _closure2_slot0;
                            var1 = _closure1_slot8;
                            var11 = var1.NOT_ELIGIBLE;
                            var10 = _closure2_slot1;
                            var13 = undefined;
                            var9 = var4;
                            var0 = var13[var3](var12, var11, var10, var9, var8);
                            return var0;
                    }
                };
                var0.getCurrentConfig = var3;
                var0.definition = var2;
                var1 = function arg0() {
                    _fun17648: for (var _fun17648_ip = 0;;) switch (_fun17648_ip) {
                        case 0:
                            var4 = _closure1_slot10;
                            var0 = _closure2_slot0;
                            var3 = var0.kind;
                            var2 = var0.id;
                            var1 = undefined;
                            var0 = arg0;
                            var1 = var4.bind(var1)(var3, var2, var0);
                            var0 = null;
                            var0 = var0 == var1;
                            if (var0) {
                                _fun17648_ip = 54;
                                continue _fun17648
                            }
                        case 45:
                            var1 = var1.aaMode;
                            var0 = !var1;
                        case 54:
                            var0 = !var0;
                            return var0;
                    }
                };
                var0.isAAMode = var1;
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 1216, 1590, 1591, 1600, 1601, 1602, 2]);