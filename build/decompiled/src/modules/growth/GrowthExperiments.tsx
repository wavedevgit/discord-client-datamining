// modules/growth/GrowthExperiments.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var13 = require;
    var2 = exports;
    var14 = dependencyMap;
    var0 = function arg0, arg1() {
        _fun60513: for (var _fun60513_ip = 0;;) switch (_fun60513_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun60513_ip = 46;
                    continue _fun60513
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun60513_ip = 55;
                    continue _fun60513
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun60513_ip = 343;
                    continue _fun60513
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun60513_ip = 323;
                    continue _fun60513
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun60513_ip = 283;
                    continue _fun60513
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun60513_ip = 270;
                    continue _fun60513
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
                    _fun60513_ip = 163;
                    continue _fun60513
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun60513_ip = 179;
                    continue _fun60513
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun60513_ip = 249;
                    continue _fun60513
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun60513_ip = 249;
                    continue _fun60513
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun60513_ip = 234;
                    continue _fun60513
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun60513_ip = 247;
                    continue _fun60513
                }
            case 234:
                var8 = _closure1_slot2;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun60513_ip = 265;
                continue _fun60513;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun60513_ip = 283;
                continue _fun60513;
            case 270:
                var6 = _closure1_slot2;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun60513_ip = 323;
                    continue _fun60513
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
                    _fun60513_ip = 330;
                    continue _fun60513
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun60514: for (var _fun60514_ip = 0;;) switch (_fun60514_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun60514_ip = 56;
                                continue _fun60514
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
                            _fun60514_ip = 67;
                            continue _fun60514;
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
    var _closure1_slot1 = var0;
    var0 = function arg0, arg1() {
        _fun60515: for (var _fun60515_ip = 0;;) switch (_fun60515_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun60515_ip = 23;
                    continue _fun60515
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun60515_ip = 33;
                    continue _fun60515
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
                    _fun60515_ip = 70;
                    continue _fun60515
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun60515_ip = 55;
                    continue _fun60515
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot2 = var0;
    var3 = function arg0() {
        var0 = arg0;
        var _closure2_slot0 = var0;
        var0 = function arg0, arg1() {
            _fun60517: for (var _fun60517_ip = 0;;) switch (_fun60517_ip) {
                case 0:
                    var9 = arg0;
                    var1 = arg1;
                    var4 = _closure1_slot0;
                    var3 = var4.getUserExperimentDescriptor;
                    var2 = var1.definition;
                    var2 = var2.id;
                    var2 = var3.bind(var4)(var2);
                    var7 = var9.location;
                    var1 = var1.definition;
                    var6 = var1.id;
                    var1 = global;
                    var3 = var1.HermesInternal;
                    var5 = var3.concat;
                    var4 = 'location:';
                    var3 = ' experiment_name:';
                    var5 = var5.bind(var4)(var7, var3, var6);
                    var8 = null;
                    var7 = var5;
                    if (!(var8 != var2)) {
                        _fun60517_ip = 126;
                        continue _fun60517
                    }
                case 92:
                    var4 = var2.revision;
                    var1 = var1.HermesInternal;
                    var3 = var1.concat;
                    var2 = '';
                    var1 = ' revision:';
                    var7 = var3.bind(var2)(var5, var1, var4);
                case 126:
                    var1 = _closure1_slot1;
                    var0 = _closure2_slot0;
                    var6 = undefined;
                    var5 = var1.bind(var6)(var0);
                    var0 = var5.bind(var6)();
                    var1 = var0.done;
                    var2 = var0;
                    var0 = false;
                    if (var1) {
                        _fun60517_ip = 235;
                        continue _fun60517
                    }
                case 161:
                    var12 = var2.value;
                    var11 = var12.getCurrentConfig;
                    var10 = {};
                    var10.location = var7;
                    var1 = {};
                    var14 = var9.autoTrackExposure;
                    var13 = var8 == var14;
                    if (var13) {
                        _fun60517_ip = 196;
                        continue _fun60517
                    }
                case 193:
                    var13 = var14;
                case 196:
                    var1.autoTrackExposure = var13;
                    var1 = var11.bind(var12)(var10, var1);
                    var1 = var1.inHoldout;
                    var0 = true;
                    if (var1) {
                        _fun60517_ip = 235;
                        continue _fun60517
                    }
                case 218:
                    var10 = var5.bind(var6)();
                    var1 = var10.done;
                    var2 = var10;
                    var0 = false;
                    if (!var1) {
                        _fun60517_ip = 161;
                        continue _fun60517
                    }
                case 235:
                    return var0;
            }
        };
        var _closure2_slot1 = var0;
        var0 = {};
        var2 = function arg0, arg1() {
            _fun60518: for (var _fun60518_ip = 0;;) switch (_fun60518_ip) {
                case 0:
                    var3 = arg0;
                    var4 = arg1;
                    var1 = _closure2_slot1;
                    var0 = undefined;
                    var5 = var1.bind(var0)(var4, var3);
                    var2 = var3.useExperiment;
                    var1 = {};
                    var0 = var4.location;
                    var1.location = var0;
                    var0 = {};
                    var7 = var4.autoTrackExposure;
                    var6 = null;
                    var6 = var6 == var7;
                    if (var6) {
                        _fun60518_ip = 58;
                        continue _fun60518
                    }
                case 55:
                    var6 = var7;
                case 58:
                    var0.autoTrackExposure = var6;
                    var4 = var4.disable;
                    if (var4) {
                        _fun60518_ip = 75;
                        continue _fun60518
                    }
                case 72:
                    var4 = var5;
                case 75:
                    var0.disable = var4;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
            }
        };
        var0.useHoldoutExperiment = var2;
        var1 = function arg0, arg1() {
            _fun60519: for (var _fun60519_ip = 0;;) switch (_fun60519_ip) {
                case 0:
                    var3 = arg0;
                    var4 = arg1;
                    var1 = _closure2_slot1;
                    var0 = undefined;
                    var5 = var1.bind(var0)(var4, var3);
                    var2 = var3.getCurrentConfig;
                    var1 = {};
                    var0 = var4.location;
                    var1.location = var0;
                    var0 = {};
                    var7 = var4.autoTrackExposure;
                    var6 = null;
                    var6 = var6 == var7;
                    if (var6) {
                        _fun60519_ip = 58;
                        continue _fun60519
                    }
                case 55:
                    var6 = var7;
                case 58:
                    var0.autoTrackExposure = var6;
                    var4 = var4.disable;
                    if (var4) {
                        _fun60519_ip = 75;
                        continue _fun60519
                    }
                case 72:
                    var4 = var5;
                case 75:
                    var0.disable = var4;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
            }
        };
        var0.getHoldoutExperiment = var1;
        return var0;
    };
    var0 = global;
    var6 = var0.Object;
    var5 = var6.defineProperty;
    var1 = {};
    var17 = true;
    var1.value = var17;
    var0 = '__esModule';
    var0 = var5.bind(var6)(var2, var0, var1);
    var0 = 0;
    var5 = var14[var0];
    var1 = arg2;
    var0 = undefined;
    var1 = var1.bind(var0)(var5);
    var _closure1_slot0 = var1;
    var1 = 1;
    var4 = var14[var1];
    var6 = var13.bind(var0)(var4);
    var5 = var6.createExperiment;
    var4 = {
        'kind': 'user',
        'id': '2025-07_growth_holdout_h2',
        'label': 'Growth Holdout H2'
    };
    var7 = {};
    var18 = false;
    var7.inHoldout = var18;
    var4.defaultConfig = var7;
    var8 = {
        'id': 0,
        'label': 'In Holdout'
    };
    var7 = {};
    var7.inHoldout = var17;
    var8.config = var7;
    var7 = new Array(2);
    var7[0] = var8;
    var8 = {
        'id': 1,
        'label': 'Treatment for comparison to holdout'
    };
    var9 = {};
    var9.inHoldout = var18;
    var8.config = var9;
    var7[1] = var8;
    var4.treatments = var7;
    var11 = var5.bind(var6)(var4);
    var4 = var14[var1];
    var6 = var13.bind(var0)(var4);
    var5 = var6.createExperiment;
    var4 = {
        'kind': 'user',
        'id': '2025-07_access_holdout_h2',
        'label': 'Access Holdout H2'
    };
    var7 = {};
    var7.inHoldout = var18;
    var4.defaultConfig = var7;
    var8 = {
        'id': 0,
        'label': 'In Holdout'
    };
    var7 = {};
    var7.inHoldout = var17;
    var8.config = var7;
    var7 = new Array(2);
    var7[0] = var8;
    var8 = {
        'id': 1,
        'label': 'Treatment for comparison to holdout'
    };
    var9 = {};
    var9.inHoldout = var18;
    var8.config = var9;
    var7[1] = var8;
    var4.treatments = var7;
    var10 = var5.bind(var6)(var4);
    var4 = new Array(2);
    var4[0] = var11;
    var4[1] = var10;
    var4 = var3.bind(var0)(var4);
    var7 = var4.useHoldoutExperiment;
    var6 = var4.getHoldoutExperiment;
    var4 = var14[var1];
    var8 = var13.bind(var0)(var4);
    var5 = var8.createExperiment;
    var4 = {
        'kind': 'user',
        'id': '2025-07_experiences_holdout_h2',
        'label': 'Experiences Holdout H2'
    };
    var9 = {};
    var9.inHoldout = var18;
    var4.defaultConfig = var9;
    var12 = {
        'id': 0,
        'label': 'In Holdout'
    };
    var9 = {};
    var9.inHoldout = var17;
    var12.config = var9;
    var9 = new Array(2);
    var9[0] = var12;
    var12 = {
        'id': 1,
        'label': 'Treatment for comparison to holdout'
    };
    var15 = {};
    var15.inHoldout = var18;
    var12.config = var15;
    var9[1] = var12;
    var4.treatments = var9;
    var9 = var5.bind(var8)(var4);
    var4 = new Array(2);
    var4[0] = var11;
    var4[1] = var9;
    var4 = var3.bind(var0)(var4);
    var5 = var4.useHoldoutExperiment;
    var4 = var4.getHoldoutExperiment;
    var1 = var14[var1];
    var12 = var13.bind(var0)(var1);
    var8 = var12.createExperiment;
    var1 = {
        'kind': 'user',
        'id': '2025-07_notifications_platform_holdout_h2',
        'label': 'NotificationsPlatform Holdout H2'
    };
    var15 = {};
    var15.inHoldout = var18;
    var1.defaultConfig = var15;
    var16 = {
        'id': 0,
        'label': 'In Holdout'
    };
    var15 = {};
    var15.inHoldout = var17;
    var16.config = var15;
    var15 = new Array(2);
    var15[0] = var16;
    var16 = {
        'id': 1,
        'label': 'Treatment for comparison to holdout'
    };
    var17 = {};
    var17.inHoldout = var18;
    var16.config = var17;
    var15[1] = var16;
    var1.treatments = var15;
    var8 = var8.bind(var12)(var1);
    var1 = new Array(2);
    var1[0] = var11;
    var1[1] = var8;
    var1 = var3.bind(var0)(var1);
    var3 = var1.useHoldoutExperiment;
    var1 = var1.getHoldoutExperiment;
    var12 = 2;
    var12 = var14[var12];
    var14 = var13.bind(var0)(var12);
    var13 = var14.fileFinishedImporting;
    var12 = 'modules/growth/GrowthExperiments.tsx';
    var12 = var13.bind(var14)(var12);
    var2.GrowthHoldoutH2Experiment = var11;
    var2.AccessHoldoutH2Experiment = var10;
    var2.ExperiencesHoldoutH2Experiment = var9;
    var2.NotificationsPlatformHoldoutH2Experiment = var8;
    var2.useAccessExperiment = var7;
    var2.getAccessExperiment = var6;
    var2.useExperiencesExperiment = var5;
    var2.getExperiencesExperiment = var4;
    var2.useNotificationsPlatformExperiment = var3;
    var2.getNotificationsPlatformExperiment = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1590, 3074, 2]);