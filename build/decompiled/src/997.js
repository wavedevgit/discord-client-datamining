// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun10195: for (var _fun10195_ip = 0;;) switch (_fun10195_ip) {
        case 0:
            var5 = require;
            var2 = exports;
            var3 = dependencyMap;
            var4 = this;
            var _closure1_slot0 = var5;
            var _closure1_slot1 = var3;
            var0 = function arg0, arg1, arg2() {
                var1 = arg0;
                var _closure2_slot0 = var1;
                var1 = arg2;
                var _closure2_slot1 = var1;
                var3 = _closure1_slot3;
                var7 = this;
                var4 = function*() { // Environment: var0
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun10198: for (var _fun10198_ip = 0;;) switch (_fun10198_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun10198_ip = 1080;
                                    continue _fun10198
                                }
                            case 12:
                                var7 = undefined;
                                var6 = undefined;
                                var16 = undefined;
                                var13 = undefined;
                                var12 = undefined;
                                var11 = undefined;
                                var10 = undefined;
                                var3 = undefined;
                                var5 = undefined;
                                var2 = undefined;
                                var9 = null;
                                var8 = null;
                            case 36: // try_start_0
                                var14 = _closure1_slot0;
                                var15 = _closure1_slot1;
                                var1 = 1;
                                var1 = var15[var1];
                                var1 = var14.bind(var7)(var1);
                                var14 = var1.NATIVE;
                                var1 = var14.fetchNativeDeviceContexts;
                                var1 = var1.bind(var14)();
                                SaveGenerator(address = 79);
                            case 77:
                                return var1;
                            case 79:
                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 14);
                                if (var14) {
                                    _fun10198_ip = 90;
                                    continue _fun10198
                                }
                            case 85:
                                var8 = var1;
                            case 88: // try_end0
                                _fun10198_ip = 159;
                                continue _fun10198;
                            case 90:
                                return var1;
                            case 93: // catch_target0
                                CatchBlockStart(arg_register = 18);
                                var14 = _closure1_slot0;
                                var15 = _closure1_slot1;
                                var1 = 2;
                                var1 = var15[var1];
                                var1 = var14.bind(var7)(var1);
                                var15 = var1.debug;
                                var14 = var15.log;
                                var1 = global;
                                var1 = var1.HermesInternal;
                                var17 = var1.concat;
                                var1 = 'Failed to get device context from native: ';
                                var1 = var17.bind(var1)(var18);
                                var1 = var14.bind(var15)(var1);
                            case 159:
                                var14 = var8;
                                if (var14) {
                                    _fun10198_ip = 175;
                                    continue _fun10198
                                }
                            case 168:
                                var14 = _closure2_slot0;
                                return var14;
                            case 175:
                                var14 = var8;
                                var6 = var14.user;
                                var15 = _closure2_slot0;
                                var15 = var15.user;
                                var15 = !var15;
                                var14 = var15;
                                if (!var15) {
                                    _fun10198_ip = 204;
                                    continue _fun10198
                                }
                            case 201:
                                var14 = var6;
                            case 204:
                                if (!var14) {
                                    _fun10198_ip = 217;
                                    continue _fun10198
                                }
                            case 207:
                                var14 = _closure2_slot0;
                                var14.user = var6;
                            case 217:
                                var6 = var8;
                                var16 = var6.contexts;
                                var14 = _closure1_slot2;
                                var15 = var14.currentState;
                                var14 = 'unknown';
                                if (!(var14 !== var15)) {
                                    _fun10198_ip = 339;
                                    continue _fun10198
                                }
                            case 247:
                                var15 = var16;
                                var14 = var15;
                                if (var15) {
                                    _fun10198_ip = 258;
                                    continue _fun10198
                                }
                            case 256:
                                var14 = {};
                            case 258:
                                var15 = var14;
                                var16 = var15;
                                var14 = global;
                                var19 = var14.Object;
                                var18 = var19.assign;
                                var21 = var14.Object;
                                var20 = var21.assign;
                                var17 = var15.app;
                                var14 = {};
                                var17 = var20.bind(var21)(var14, var17);
                                var14 = {};
                                var20 = _closure1_slot2;
                                var21 = var20.currentState;
                                var20 = 'active';
                                var20 = var20 === var21;
                                var14.in_foreground = var20;
                                var14 = var18.bind(var19)(var17, var14);
                                var15.app = var14;
                            case 339:
                                var14 = var16;
                                if (!var14) {
                                    _fun10198_ip = 484;
                                    continue _fun10198
                                }
                            case 348:
                                var17 = _closure2_slot0;
                                var19 = global;
                                var21 = var19.Object;
                                var20 = var21.assign;
                                var22 = var19.Object;
                                var18 = var22.assign;
                                var14 = var16;
                                var15 = {};
                                var18 = var18.bind(var22)(var15, var14);
                                var15 = var17.contexts;
                                var15 = var20.bind(var21)(var18, var15);
                                var17.contexts = var15;
                                var14 = var14.app;
                                if (!var14) {
                                    _fun10198_ip = 484;
                                    continue _fun10198
                                }
                            case 414:
                                var14 = _closure2_slot0;
                                var15 = var14.contexts;
                                var18 = var19.Object;
                                var17 = var18.assign;
                                var21 = var19.Object;
                                var20 = var21.assign;
                                var19 = var16.app;
                                var16 = {};
                                var16 = var20.bind(var21)(var16, var19);
                                var14 = var14.contexts;
                                var14 = var14.app;
                                var14 = var17.bind(var18)(var16, var14);
                                var15.app = var14;
                            case 484:
                                var14 = var8;
                                var14 = var14.tags;
                                var13 = var14;
                                if (!var14) {
                                    _fun10198_ip = 556;
                                    continue _fun10198
                                }
                            case 499:
                                var14 = _closure2_slot0;
                                var15 = global;
                                var17 = var15.Object;
                                var16 = var17.assign;
                                var19 = var15.Object;
                                var18 = var19.assign;
                                var15 = var13;
                                var13 = {};
                                var15 = var18.bind(var19)(var13, var15);
                                var13 = var14.tags;
                                var13 = var16.bind(var17)(var15, var13);
                                var14.tags = var13;
                            case 556:
                                var13 = var8;
                                var13 = var13.extra;
                                var12 = var13;
                                if (!var13) {
                                    _fun10198_ip = 628;
                                    continue _fun10198
                                }
                            case 571:
                                var13 = _closure2_slot0;
                                var14 = global;
                                var16 = var14.Object;
                                var15 = var16.assign;
                                var18 = var14.Object;
                                var17 = var18.assign;
                                var14 = var12;
                                var12 = {};
                                var14 = var17.bind(var18)(var12, var14);
                                var12 = var13.extra;
                                var12 = var15.bind(var16)(var14, var12);
                                var13.extra = var12;
                            case 628:
                                var12 = var8;
                                var12 = var12.fingerprint;
                                var11 = var12;
                                if (!var12) {
                                    _fun10198_ip = 713;
                                    continue _fun10198
                                }
                            case 643:
                                var12 = _closure2_slot0;
                                var13 = var12.fingerprint;
                                var _closure2_slot2 = var13;
                                if (!(var9 !== var13)) {
                                    _fun10198_ip = 669;
                                    continue _fun10198
                                }
                            case 661:
                                var13 = _closure2_slot2;
                                if (!(var7 === var13)) {
                                    _fun10198_ip = 675;
                                    continue _fun10198
                                }
                            case 669:
                                var14 = new Array(0);
                                _fun10198_ip = 679;
                                continue _fun10198;
                            case 675:
                                var14 = _closure2_slot2;
                            case 679:
                                var13 = var14.concat;
                                var16 = var11;
                                var15 = var16.filter;
                                var11 = function(arg0) { // Environment: var4
                                    _fun10199: for (var _fun10199_ip = 0;;) switch (_fun10199_ip) {
                                        case 0:
                                            var0 = _closure2_slot0;
                                            var2 = var0.fingerprint;
                                            var0 = null;
                                            if (!(var0 !== var2)) {
                                                _fun10199_ip = 25;
                                                continue _fun10199
                                            }
                                        case 19:
                                            var0 = undefined;
                                            if (!(var0 === var2)) {
                                                _fun10199_ip = 29;
                                                continue _fun10199
                                            }
                                        case 25:
                                            var2 = new Array(0);
                                        case 29:
                                            var1 = var2.indexOf;
                                            var0 = arg0;
                                            var1 = var1.bind(var2)(var0);
                                            var0 = 0;
                                            var0 = var1 < var0;
                                            return var0;
                                    }
                                };
                                var11 = var15.bind(var16)(var11);
                                var11 = var13.bind(var14)(var11);
                                var12.fingerprint = var11;
                            case 713:
                                var11 = var8;
                                var11 = var11.level;
                                var13 = 'string';
                                var12 = typeof var11;
                                var11 = undefined;
                                if (!(var13 === var12)) {
                                    _fun10198_ip = 775;
                                    continue _fun10198
                                }
                            case 735:
                                var13 = _closure1_slot0;
                                var14 = _closure1_slot1;
                                var12 = 2;
                                var12 = var14[var12];
                                var14 = var13.bind(var7)(var12);
                                var13 = var14.severityLevelFromString;
                                var12 = var8;
                                var12 = var12.level;
                                var11 = var13.bind(var14)(var12);
                            case 775:
                                var10 = var11;
                                var12 = _closure2_slot0;
                                var12 = var12.level;
                                var12 = !var12;
                                var11 = var12;
                                if (!var12) {
                                    _fun10198_ip = 800;
                                    continue _fun10198
                                }
                            case 797:
                                var11 = var10;
                            case 800:
                                if (!var11) {
                                    _fun10198_ip = 813;
                                    continue _fun10198
                                }
                            case 803:
                                var11 = _closure2_slot0;
                                var11.level = var10;
                            case 813:
                                var10 = var8;
                                var3 = var10.environment;
                                var11 = _closure2_slot0;
                                var11 = var11.environment;
                                var11 = !var11;
                                var10 = var11;
                                if (!var11) {
                                    _fun10198_ip = 844;
                                    continue _fun10198
                                }
                            case 841:
                                var10 = var3;
                            case 844:
                                if (!var10) {
                                    _fun10198_ip = 857;
                                    continue _fun10198
                                }
                            case 847:
                                var10 = _closure2_slot0;
                                var10.environment = var3;
                            case 857:
                                var3 = global;
                                var11 = var3.Array;
                                var10 = var11.isArray;
                                var3 = var8;
                                var3 = var3.breadcrumbs;
                                var10 = var10.bind(var11)(var3);
                                var3 = undefined;
                                if (!var10) {
                                    _fun10198_ip = 931;
                                    continue _fun10198
                                }
                            case 889:
                                var10 = var8.breadcrumbs;
                                var8 = var10.map;
                                var11 = _closure1_slot0;
                                var12 = _closure1_slot1;
                                var6 = 3;
                                var6 = var12[var6];
                                var6 = var11.bind(var7)(var6);
                                var6 = var6.breadcrumbFromObject;
                                var3 = var8.bind(var10)(var6);
                            case 931:
                                var5 = var3;
                                if (!var3) {
                                    _fun10198_ip = 1073;
                                    continue _fun10198
                                }
                            case 940:
                                var3 = _closure2_slot1;
                                var3 = var9 == var3;
                                var6 = undefined;
                                if (var3) {
                                    _fun10198_ip = 973;
                                    continue _fun10198
                                }
                            case 953:
                                var8 = _closure2_slot1;
                                var3 = var8.getOptions;
                                var3 = var3.bind(var8)();
                                var6 = var3.maxBreadcrumbs;
                            case 973:
                                var _closure2_slot3 = var6;
                                var8 = 100;
                                var3 = var8;
                                if (!(var9 !== var6)) {
                                    _fun10198_ip = 1002;
                                    continue _fun10198
                                }
                            case 987:
                                var6 = _closure2_slot3;
                                var3 = var8;
                                if (!(var7 !== var6)) {
                                    _fun10198_ip = 1002;
                                    continue _fun10198
                                }
                            case 998:
                                var3 = _closure2_slot3;
                            case 1002:
                                var2 = var3;
                                var3 = _closure2_slot0;
                                var7 = var5;
                                var6 = var7.concat;
                                var8 = var3.breadcrumbs;
                                var5 = var8;
                                if (var8) {
                                    _fun10198_ip = 1033;
                                    continue _fun10198
                                }
                            case 1029:
                                var5 = new Array(0);
                            case 1033:
                                var6 = var6.bind(var7)(var5);
                                var5 = var6.sort;
                                var4 = function(arg0, arg1) { // Environment: var4
                                    _fun10200: for (var _fun10200_ip = 0;;) switch (_fun10200_ip) {
                                        case 0:
                                            var0 = arg0;
                                            var0 = var0.timestamp;
                                            var3 = null;
                                            var1 = 0;
                                            if (!(var3 !== var0)) {
                                                _fun10200_ip = 28;
                                                continue _fun10200
                                            }
                                        case 17:
                                            var2 = undefined;
                                            var1 = 0;
                                            if (!(var2 !== var0)) {
                                                _fun10200_ip = 28;
                                                continue _fun10200
                                            }
                                        case 25:
                                            var1 = var0;
                                        case 28:
                                            var0 = arg1;
                                            var2 = var0.timestamp;
                                            var0 = 0;
                                            if (!(var3 !== var2)) {
                                                _fun10200_ip = 54;
                                                continue _fun10200
                                            }
                                        case 43:
                                            var3 = undefined;
                                            var0 = 0;
                                            if (!(var3 !== var2)) {
                                                _fun10200_ip = 54;
                                                continue _fun10200
                                            }
                                        case 51:
                                            var0 = var2;
                                        case 54:
                                            var0 = var1 - var0;
                                            return var0;
                                    }
                                };
                                var5 = var5.bind(var6)(var4);
                                var4 = var5.slice;
                                var2 = -var2;
                                var2 = var4.bind(var5)(var2);
                                var3.breadcrumbs = var2;
                            case 1073:
                                var1 = _closure2_slot0;
                                return var1;
                            case 1080:
                                return var0;
                        }
                    };
                    return var0;
                };
                var8 = undefined;
                var6 = undefined;
                var5 = undefined;
                var0 = var8[var3](var7, var6, var5, var4, var3);
                return var0;
            };
            var _closure1_slot4 = var0;
            var0 = global;
            var8 = var0.Object;
            var7 = var8.defineProperty;
            var6 = {};
            var0 = true;
            var6.value = var0;
            var0 = '__esModule';
            var0 = var7.bind(var8)(var2, var0, var6);
            var0 = 0;
            var3 = var3[var0];
            var0 = undefined;
            var3 = var5.bind(var0)(var3);
            var3 = var3.AppState;
            var _closure1_slot2 = var3;
            var3 = var4;
            if (!var3) {
                _fun10195_ip = 98;
                continue _fun10195
            }
        case 92:
            var3 = var4.__awaiter;
        case 98:
            if (var3) {
                _fun10195_ip = 106;
                continue _fun10195
            }
        case 101:
            var3 = function(arg0, arg1, arg2, arg3) { // Environment: var1
                _fun10201: for (var _fun10201_ip = 0;;) switch (_fun10201_ip) {
                    case 0:
                        var2 = arg2;
                        var1 = arg0;
                        var _closure2_slot0 = var1;
                        var1 = arg1;
                        var _closure2_slot1 = var1;
                        var _closure2_slot2 = var2;
                        var1 = arg3;
                        var _closure2_slot3 = var1;
                        if (var2) {
                            _fun10201_ip = 48;
                            continue _fun10201
                        }
                    case 33:
                        var1 = global;
                        var1 = var1.Promise;
                        _closure2_slot2 = var1;
                        var2 = var1;
                    case 48:
                        var1 = var2.prototype;
                        var1 = Object.create(var1, {
                            constructor: {
                                value: var2
                            }
                        });
                        var4 = function(arg0, arg1) { // Environment: var0
                            _fun10202: for (var _fun10202_ip = 0;;) switch (_fun10202_ip) {
                                case 0:
                                    var1 = arg0;
                                    var _closure3_slot0 = var1;
                                    var1 = arg1;
                                    var _closure3_slot1 = var1;
                                    var1 = function arg0() {
                                        _fun10203: for (var _fun10203_ip = 0;;) switch (_fun10203_ip) {
                                            case 0:
                                                var0 = arg0;
                                            case 3: // try_start_0
                                                var2 = _closure3_slot4;
                                                var3 = _closure2_slot3;
                                                var1 = var3.next;
                                                var1 = var1.bind(var3)(var0);
                                                var0 = undefined;
                                                var0 = var2.bind(var0)(var1);
                                            case 34: // try_end0
                                                _fun10203_ip = 52;
                                                continue _fun10203;
                                            case 36: // catch_target0
                                                CatchBlockStart(arg_register = 2);
                                                var1 = _closure3_slot1;
                                                var0 = undefined;
                                                var0 = var1.bind(var0)(var2);
                                            case 52:
                                                var0 = undefined;
                                                return var0;
                                        }
                                    };
                                    var _closure3_slot2 = var1;
                                    var1 = function arg0() {
                                        _fun10204: for (var _fun10204_ip = 0;;) switch (_fun10204_ip) {
                                            case 0:
                                                var0 = arg0;
                                            case 3: // try_start_0
                                                var2 = _closure3_slot4;
                                                var3 = _closure2_slot3;
                                                var1 = var3.throw;
                                                var1 = var1.bind(var3)(var0);
                                                var0 = undefined;
                                                var0 = var2.bind(var0)(var1);
                                            case 35: // try_end0
                                                _fun10204_ip = 53;
                                                continue _fun10204;
                                            case 37: // catch_target0
                                                CatchBlockStart(arg_register = 2);
                                                var1 = _closure3_slot1;
                                                var0 = undefined;
                                                var0 = var1.bind(var0)(var2);
                                            case 53:
                                                var0 = undefined;
                                                return var0;
                                        }
                                    };
                                    var _closure3_slot3 = var1;
                                    var2 = function arg0() {
                                        _fun10205: for (var _fun10205_ip = 0;;) switch (_fun10205_ip) {
                                            case 0:
                                                var0 = arg0;
                                                var1 = var0.done;
                                                if (var1) {
                                                    _fun10205_ip = 54;
                                                    continue _fun10205
                                                }
                                            case 11:
                                                var3 = var0.value;
                                                var2 = function arg0() {
                                                    _fun10206: for (var _fun10206_ip = 0;;) switch (_fun10206_ip) {
                                                        case 0:
                                                            var0 = arg0;
                                                            var _closure5_slot0 = var0;
                                                            var3 = _closure2_slot2;
                                                            var3 = var0 instanceof var3;
                                                            if (var3) {
                                                                _fun10206_ip = 52;
                                                                continue _fun10206
                                                            }
                                                        case 23:
                                                            var3 = _closure2_slot2;
                                                            var2 = var3.prototype;
                                                            var2 = Object.create(var2, {
                                                                constructor: {
                                                                    value: var3
                                                                }
                                                            });
                                                            var4 = function(arg0) { // Environment: var1
                                                                var2 = _closure5_slot0;
                                                                var1 = arg0;
                                                                var0 = undefined;
                                                                var1 = var1.bind(var0)(var2);
                                                                return var0;
                                                            };
                                                            var5 = var2;
                                                            var1 = new var5[var3](var4, var3);
                                                            var0 = var1 instanceof Object ? var1 : var2;
                                                        case 52:
                                                            return var0;
                                                    }
                                                };
                                                var1 = undefined;
                                                var4 = var2.bind(var1)(var3);
                                                var3 = var4.then;
                                                var2 = _closure3_slot2;
                                                var1 = _closure3_slot3;
                                                var1 = var3.bind(var4)(var2, var1);
                                                _fun10205_ip = 73;
                                                continue _fun10205;
                                            case 54:
                                                var2 = _closure3_slot0;
                                                var1 = var0.value;
                                                var0 = undefined;
                                                var0 = var2.bind(var0)(var1);
                                            case 73:
                                                var0 = undefined;
                                                return var0;
                                        }
                                    };
                                    var _closure3_slot4 = var2;
                                    var5 = _closure2_slot3;
                                    var4 = var5.apply;
                                    var3 = _closure2_slot0;
                                    var1 = _closure2_slot1;
                                    if (var1) {
                                        _fun10202_ip = 70;
                                        continue _fun10202
                                    }
                                case 66:
                                    var1 = new Array(0);
                                case 70:
                                    var1 = var4.bind(var5)(var3, var1);
                                    _closure2_slot3 = var1;
                                    var0 = var1.next;
                                    var1 = var0.bind(var1)();
                                    var0 = undefined;
                                    var1 = var2.bind(var0)(var1);
                                    return var0;
                            }
                        };
                        var5 = var1;
                        var0 = new var5[var2](var4, var3);
                        var0 = var0 instanceof Object ? var0 : var1;
                        return var0;
                }
            };
        case 106:
            var _closure1_slot3 = var3;
            var1 = function() {
                var0 = {};
                var1 = 'DeviceContext';
                var0.name = var1;
                var1 = function() {
                    var0 = undefined;
                    return var0;
                };
                var0.setupOnce = var1;
                var1 = _closure1_slot4;
                var0.processEvent = var1;
                return var0;
            };
            var2.deviceContextIntegration = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [27, 998, 817, 1012]);