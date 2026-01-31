// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun10194: for (var _fun10194_ip = 0;;) switch (_fun10194_ip) {
        case 0:
            var5 = require;
            var2 = exports;
            var3 = dependencyMap;
            var4 = this;
            var _closure1_slot0 = var5;
            var _closure1_slot1 = var3;
            var0 = function(arg0, arg1, arg2) { // Original name: processEvent, environment: var1
                var1 = arg0;
                var _closure2_slot0 = var1;
                var1 = arg2;
                var _closure2_slot1 = var1;
                var3 = _closure1_slot3;
                var7 = this;
                var4 = function*() { // Environment: var0
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun10197: for (var _fun10197_ip = 0;;) switch (_fun10197_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun10197_ip = 1079;
                                    continue _fun10197
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
                                    _fun10197_ip = 90;
                                    continue _fun10197
                                }
                            case 85:
                                var8 = var1;
                            case 88: // try_end0
                                _fun10197_ip = 158;
                                continue _fun10197;
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
                            case 158:
                                var14 = var8;
                                if (var14) {
                                    _fun10197_ip = 174;
                                    continue _fun10197
                                }
                            case 167:
                                var14 = _closure2_slot0;
                                return var14;
                            case 174:
                                var14 = var8;
                                var6 = var14.user;
                                var15 = _closure2_slot0;
                                var15 = var15.user;
                                var15 = !var15;
                                var14 = var15;
                                if (!var15) {
                                    _fun10197_ip = 203;
                                    continue _fun10197
                                }
                            case 200:
                                var14 = var6;
                            case 203:
                                if (!var14) {
                                    _fun10197_ip = 216;
                                    continue _fun10197
                                }
                            case 206:
                                var14 = _closure2_slot0;
                                var14.user = var6;
                            case 216:
                                var6 = var8;
                                var16 = var6.contexts;
                                var14 = _closure1_slot2;
                                var15 = var14.currentState;
                                var14 = 'unknown';
                                if (!(var14 !== var15)) {
                                    _fun10197_ip = 338;
                                    continue _fun10197
                                }
                            case 246:
                                var15 = var16;
                                var14 = var15;
                                if (var15) {
                                    _fun10197_ip = 257;
                                    continue _fun10197
                                }
                            case 255:
                                var14 = {};
                            case 257:
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
                            case 338:
                                var14 = var16;
                                if (!var14) {
                                    _fun10197_ip = 483;
                                    continue _fun10197
                                }
                            case 347:
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
                                    _fun10197_ip = 483;
                                    continue _fun10197
                                }
                            case 413:
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
                            case 483:
                                var14 = var8;
                                var14 = var14.tags;
                                var13 = var14;
                                if (!var14) {
                                    _fun10197_ip = 555;
                                    continue _fun10197
                                }
                            case 498:
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
                            case 555:
                                var13 = var8;
                                var13 = var13.extra;
                                var12 = var13;
                                if (!var13) {
                                    _fun10197_ip = 627;
                                    continue _fun10197
                                }
                            case 570:
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
                            case 627:
                                var12 = var8;
                                var12 = var12.fingerprint;
                                var11 = var12;
                                if (!var12) {
                                    _fun10197_ip = 712;
                                    continue _fun10197
                                }
                            case 642:
                                var12 = _closure2_slot0;
                                var13 = var12.fingerprint;
                                var _closure2_slot2 = var13;
                                if (!(var9 !== var13)) {
                                    _fun10197_ip = 668;
                                    continue _fun10197
                                }
                            case 660:
                                var13 = _closure2_slot2;
                                if (!(var7 === var13)) {
                                    _fun10197_ip = 674;
                                    continue _fun10197
                                }
                            case 668:
                                var14 = new Array(0);
                                _fun10197_ip = 678;
                                continue _fun10197;
                            case 674:
                                var14 = _closure2_slot2;
                            case 678:
                                var13 = var14.concat;
                                var16 = var11;
                                var15 = var16.filter;
                                var11 = function(arg0) { // Environment: var4
                                    _fun10198: for (var _fun10198_ip = 0;;) switch (_fun10198_ip) {
                                        case 0:
                                            var0 = _closure2_slot0;
                                            var2 = var0.fingerprint;
                                            var0 = null;
                                            if (!(var0 !== var2)) {
                                                _fun10198_ip = 25;
                                                continue _fun10198
                                            }
                                        case 19:
                                            var0 = undefined;
                                            if (!(var0 === var2)) {
                                                _fun10198_ip = 29;
                                                continue _fun10198
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
                            case 712:
                                var11 = var8;
                                var11 = var11.level;
                                var13 = 'string';
                                var12 = typeof var11;
                                var11 = undefined;
                                if (!(var13 === var12)) {
                                    _fun10197_ip = 774;
                                    continue _fun10197
                                }
                            case 734:
                                var13 = _closure1_slot0;
                                var14 = _closure1_slot1;
                                var12 = 2;
                                var12 = var14[var12];
                                var14 = var13.bind(var7)(var12);
                                var13 = var14.severityLevelFromString;
                                var12 = var8;
                                var12 = var12.level;
                                var11 = var13.bind(var14)(var12);
                            case 774:
                                var10 = var11;
                                var12 = _closure2_slot0;
                                var12 = var12.level;
                                var12 = !var12;
                                var11 = var12;
                                if (!var12) {
                                    _fun10197_ip = 799;
                                    continue _fun10197
                                }
                            case 796:
                                var11 = var10;
                            case 799:
                                if (!var11) {
                                    _fun10197_ip = 812;
                                    continue _fun10197
                                }
                            case 802:
                                var11 = _closure2_slot0;
                                var11.level = var10;
                            case 812:
                                var10 = var8;
                                var3 = var10.environment;
                                var11 = _closure2_slot0;
                                var11 = var11.environment;
                                var11 = !var11;
                                var10 = var11;
                                if (!var11) {
                                    _fun10197_ip = 843;
                                    continue _fun10197
                                }
                            case 840:
                                var10 = var3;
                            case 843:
                                if (!var10) {
                                    _fun10197_ip = 856;
                                    continue _fun10197
                                }
                            case 846:
                                var10 = _closure2_slot0;
                                var10.environment = var3;
                            case 856:
                                var3 = global;
                                var11 = var3.Array;
                                var10 = var11.isArray;
                                var3 = var8;
                                var3 = var3.breadcrumbs;
                                var10 = var10.bind(var11)(var3);
                                var3 = undefined;
                                if (!var10) {
                                    _fun10197_ip = 930;
                                    continue _fun10197
                                }
                            case 888:
                                var10 = var8.breadcrumbs;
                                var8 = var10.map;
                                var11 = _closure1_slot0;
                                var12 = _closure1_slot1;
                                var6 = 3;
                                var6 = var12[var6];
                                var6 = var11.bind(var7)(var6);
                                var6 = var6.breadcrumbFromObject;
                                var3 = var8.bind(var10)(var6);
                            case 930:
                                var5 = var3;
                                if (!var3) {
                                    _fun10197_ip = 1072;
                                    continue _fun10197
                                }
                            case 939:
                                var3 = _closure2_slot1;
                                var3 = var9 == var3;
                                var6 = undefined;
                                if (var3) {
                                    _fun10197_ip = 972;
                                    continue _fun10197
                                }
                            case 952:
                                var8 = _closure2_slot1;
                                var3 = var8.getOptions;
                                var3 = var3.bind(var8)();
                                var6 = var3.maxBreadcrumbs;
                            case 972:
                                var _closure2_slot3 = var6;
                                var8 = 100;
                                var3 = var8;
                                if (!(var9 !== var6)) {
                                    _fun10197_ip = 1001;
                                    continue _fun10197
                                }
                            case 986:
                                var6 = _closure2_slot3;
                                var3 = var8;
                                if (!(var7 !== var6)) {
                                    _fun10197_ip = 1001;
                                    continue _fun10197
                                }
                            case 997:
                                var3 = _closure2_slot3;
                            case 1001:
                                var2 = var3;
                                var3 = _closure2_slot0;
                                var7 = var5;
                                var6 = var7.concat;
                                var8 = var3.breadcrumbs;
                                var5 = var8;
                                if (var8) {
                                    _fun10197_ip = 1032;
                                    continue _fun10197
                                }
                            case 1028:
                                var5 = new Array(0);
                            case 1032:
                                var6 = var6.bind(var7)(var5);
                                var5 = var6.sort;
                                var4 = function(arg0, arg1) { // Environment: var4
                                    _fun10199: for (var _fun10199_ip = 0;;) switch (_fun10199_ip) {
                                        case 0:
                                            var0 = arg0;
                                            var0 = var0.timestamp;
                                            var3 = null;
                                            var1 = 0;
                                            if (!(var3 !== var0)) {
                                                _fun10199_ip = 28;
                                                continue _fun10199
                                            }
                                        case 17:
                                            var2 = undefined;
                                            var1 = 0;
                                            if (!(var2 !== var0)) {
                                                _fun10199_ip = 28;
                                                continue _fun10199
                                            }
                                        case 25:
                                            var1 = var0;
                                        case 28:
                                            var0 = arg1;
                                            var2 = var0.timestamp;
                                            var0 = 0;
                                            if (!(var3 !== var2)) {
                                                _fun10199_ip = 54;
                                                continue _fun10199
                                            }
                                        case 43:
                                            var3 = undefined;
                                            var0 = 0;
                                            if (!(var3 !== var2)) {
                                                _fun10199_ip = 54;
                                                continue _fun10199
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
                            case 1072:
                                var1 = _closure2_slot0;
                                return var1;
                            case 1079:
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
                _fun10194_ip = 98;
                continue _fun10194
            }
        case 92:
            var3 = var4.__awaiter;
        case 98:
            if (var3) {
                _fun10194_ip = 106;
                continue _fun10194
            }
        case 101:
            var3 = function(arg0, arg1, arg2, arg3) { // Environment: var1
                _fun10200: for (var _fun10200_ip = 0;;) switch (_fun10200_ip) {
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
                            _fun10200_ip = 48;
                            continue _fun10200
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
                            _fun10201: for (var _fun10201_ip = 0;;) switch (_fun10201_ip) {
                                case 0:
                                    var1 = arg0;
                                    var _closure3_slot0 = var1;
                                    var1 = arg1;
                                    var _closure3_slot1 = var1;
                                    var1 = function(arg0) { // Original name: fulfilled, environment: var0
                                        _fun10202: for (var _fun10202_ip = 0;;) switch (_fun10202_ip) {
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
                                                _fun10202_ip = 52;
                                                continue _fun10202;
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
                                    var1 = function(arg0) { // Original name: rejected, environment: var0
                                        _fun10203: for (var _fun10203_ip = 0;;) switch (_fun10203_ip) {
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
                                                _fun10203_ip = 53;
                                                continue _fun10203;
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
                                    var2 = function(arg0) { // Original name: step, environment: var0
                                        _fun10204: for (var _fun10204_ip = 0;;) switch (_fun10204_ip) {
                                            case 0:
                                                var0 = arg0;
                                                var1 = var0.done;
                                                if (var1) {
                                                    _fun10204_ip = 54;
                                                    continue _fun10204
                                                }
                                            case 11:
                                                var3 = var0.value;
                                                var2 = function(arg0) { // Original name: adopt, environment: var1
                                                    _fun10205: for (var _fun10205_ip = 0;;) switch (_fun10205_ip) {
                                                        case 0:
                                                            var0 = arg0;
                                                            var _closure5_slot0 = var0;
                                                            var3 = _closure2_slot2;
                                                            var3 = var0 instanceof var3;
                                                            if (var3) {
                                                                _fun10205_ip = 52;
                                                                continue _fun10205
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
                                                _fun10204_ip = 73;
                                                continue _fun10204;
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
                                        _fun10201_ip = 70;
                                        continue _fun10201
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
            var1 = function() { // Original name: deviceContextIntegration, environment: var1
                var0 = {};
                var1 = 'DeviceContext';
                var0.name = var1;
                var1 = function() { // Original name: setupOnce, environment: var1
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