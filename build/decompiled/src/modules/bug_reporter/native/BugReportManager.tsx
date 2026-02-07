// modules/bug_reporter/native/BugReportManager.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function() {
        _fun77175: for (var _fun77175_ip = 0;;) switch (_fun77175_ip) {
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
                _fun77175_ip = 76;
                continue _fun77175;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot14 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot14 = var0;
    var0 = function() {
        var2 = function() { // Environment: var1
            var3 = _closure1_slot8;
            var2 = undefined;
            var1 = function*() { // Environment: var0
                var0 = function*() { // Original name: ?anon_0_, environment: var0
                    _fun77181: for (var _fun77181_ip = 0;;) switch (_fun77181_ip) {
                        case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                            if (var1) {
                                _fun77181_ip = 242;
                                continue _fun77181
                            }
                        case 10:
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var1 = 9;
                            var1 = var4[var1];
                            var4 = undefined;
                            var3 = var3.bind(var4)(var1);
                            var1 = var3.isIOS;
                            var1 = var1.bind(var3)();
                            if (var1) {
                                _fun77181_ip = 102;
                                continue _fun77181
                            }
                        case 48:
                            var1 = _closure1_slot9;
                            var5 = var1.CameraRollUtils;
                            var3 = var5.getPhotos;
                            var1 = {
                                'first': 1,
                                'assetType': 'photos'
                            };
                            var1 = var3.bind(var5)(var1);
                            SaveGenerator(address = 87);
                        case 85:
                            return var1;
                        case 87:
                            ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                            var5 = var3;
                            var3 = var1;
                            if (!var5) {
                                _fun77181_ip = 188;
                                continue _fun77181
                            }
                        case 99:
                            return var1;
                        case 102:
                            var5 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var6 = 10;
                            var1 = var1[var6];
                            var5 = var5.bind(var4)(var1);
                            var1 = null;
                            var5 = var1 == var5;
                            var1 = undefined;
                            if (var5) {
                                _fun77181_ip = 175;
                                continue _fun77181
                            }
                        case 133:
                            var5 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var2 = var2[var6];
                            var6 = var5.bind(var4)(var2);
                            var5 = var6.getPhotos;
                            var2 = {
                                'first': 1,
                                'groupTypes': 'Recents',
                                'assetType': 'Photos'
                            };
                            var1 = var5.bind(var6)(var2);
                        case 175:
                            SaveGenerator(address = 179);
                        case 177:
                            return var1;
                        case 179:
                            ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                            var3 = var1;
                            if (var2) {
                                _fun77181_ip = 239;
                                continue _fun77181
                            }
                        case 188:
                            var2 = null;
                            if (!(var2 == var3)) {
                                _fun77181_ip = 196;
                                continue _fun77181
                            }
                        case 194:
                            var3 = {};
                        case 196:
                            var3 = var3.edges;
                            if (!(var2 != var3)) {
                                _fun77181_ip = 217;
                                continue _fun77181
                            }
                        case 206:
                            var5 = var3.length;
                            var2 = 0;
                            if (!(!(var5 > var2))) {
                                _fun77181_ip = 220;
                                continue _fun77181
                            }
                        case 217:
                            return var4;
                        case 220:
                            var2 = var3[var2];
                            var2 = var2.node;
                            var2 = var2.image;
                            return var2;
                        case 239:
                            return var1;
                        case 242:
                            return var0;
                    }
                };
                return var0;
            };
            var1 = var3.bind(var2)(var1);
            var _closure3_slot0 = var1;
            var0 = function() { // Environment: var0
                var0 = undefined;
                var3 = _closure3_slot0;
                var2 = var3.apply;
                var0 = arguments;
                var1 = var0;
                var0 = this;
                var0 = var2.bind(var3)(var0, var1);
                return var0;
            };
            return var0;
        };
        var0 = undefined;
        var2 = var2.bind(var0)();
        var _closure2_slot0 = var2;
        var2 = global;
        var3 = var2.setTimeout;
        var2 = _closure1_slot8;
        var1 = function*() { // Environment: var1
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun77184: for (var _fun77184_ip = 0;;) switch (_fun77184_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun77184_ip = 157;
                            continue _fun77184
                        }
                    case 10:
                        var1 = _closure2_slot0;
                        var2 = undefined;
                        var1 = var1.bind(var2)();
                        SaveGenerator(address = 27);
                    case 25:
                        return var1;
                    case 27:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun77184_ip = 154;
                            continue _fun77184
                        }
                    case 33:
                        var4 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var3 = 11;
                        var3 = var8[var3];
                        var5 = var4.bind(var2)(var3);
                        var4 = var5.enqueueNotification;
                        var3 = {
                            'type': 'BUG_REPORTER',
                            'duration': 5000
                        };
                        var7 = _closure1_slot0;
                        var6 = 12;
                        var6 = var8[var6];
                        var7 = var7.bind(var2)(var6);
                        var6 = var7.v4;
                        var6 = var6.bind(var7)();
                        var3.key = var6;
                        var3.image = var1;
                        var6 = null;
                        var7 = var6 == var1;
                        var6 = undefined;
                        if (var7) {
                            _fun77184_ip = 127;
                            continue _fun77184
                        }
                    case 122:
                        var6 = var1.uri;
                    case 127:
                        var3.imageUri = var6;
                        var6 = function() {
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 11;
                            var1 = var1[var0];
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.clearNotification;
                            var1 = var1.bind(var2)();
                            return var0;
                        };
                        var3.onDismiss = var6;
                        var3 = var4.bind(var5)(var3);
                        return var2;
                    case 154:
                        return var1;
                    case 157:
                        return var0;
                }
            };
            return var0;
        };
        var2 = var2.bind(var0)(var1);
        var1 = 1200;
        var1 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var _closure1_slot15 = var0;
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
    var7 = var4.bind(var0)(var3);
    var3 = var7.NativeModules;
    var _closure1_slot9 = var3;
    var8 = var7.NativeEventEmitter;
    var7 = 7;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot10 = var7;
    var7 = 8;
    var7 = var5[var7];
    var7 = var4.bind(var0)(var7);
    var7 = var7.NativePermissionStatus;
    var _closure1_slot11 = var7;
    var11 = var3.ScreenshotHelper;
    var7 = var8.prototype;
    var7 = Object.create(var7, {
        constructor: {
            value: var8
        }
    });
    var12 = var7;
    var3 = new var12[var8](var11, var10);
    var3 = var3 instanceof Object ? var3 : var7;
    var _closure1_slot13 = var3;
    var3 = 14;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var1 = function(arg0) { // Environment: var1
        var3 = function() {
            _fun77187: for (var _fun77187_ip = 0;;) switch (_fun77187_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot3;
                    var1 = _closure2_slot1;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot6;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot5;
                    var0 = _closure1_slot14;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun77187_ip = 69;
                        continue _fun77187
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun77187_ip = 105;
                    continue _fun77187;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot6;
                    var5 = var5.bind(var2)(var3);
                    var5 = var5.constructor;
                    var4 = arguments;
                    var0 = var6.bind(var7)(var8, var4, var5);
                case 105:
                    var0 = var1.bind(var2)(var3, var0);
                    return var0;
            }
        };
        var _closure2_slot1 = var3;
        var1 = _closure1_slot7;
        var2 = undefined;
        var0 = arg0;
        var0 = var1.bind(var2)(var3, var0);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = '_initialize';
        var4.key = var0;
        var0 = function() {
            var1 = this;
            var0 = var1.initBugReporter;
            var0 = var0.bind(var1)();
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(3);
        var0[0] = var4;
        var4 = {};
        var7 = '_terminate';
        var4.key = var7;
        var7 = function() {
            _fun77189: for (var _fun77189_ip = 0;;) switch (_fun77189_ip) {
                case 0:
                    var2 = _closure1_slot12;
                    var0 = null;
                    if (!(var0 != var2)) {
                        _fun77189_ip = 23;
                        continue _fun77189
                    }
                case 13:
                    var0 = var2.remove;
                    var0 = var0.bind(var2)();
                case 23:
                    var0 = undefined;
                    var _closure1_slot12 = var0;
                    return var0;
            }
        };
        var4.value = var7;
        var0[1] = var4;
        var4 = {};
        var7 = 'initBugReporter';
        var4.key = var7;
        var7 = _closure1_slot8;
        var6 = function*() { // Environment: var5
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun77191: for (var _fun77191_ip = 0;;) switch (_fun77191_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun77191_ip = 184;
                            continue _fun77191
                        }
                    case 10:
                        var1 = _closure1_slot9;
                        var2 = var1.NativePermissionManager;
                        var1 = var2.hasPhotoAuthorization;
                        var1 = var1.bind(var2)();
                        SaveGenerator(address = 39);
                    case 37:
                        return var1;
                    case 39:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun77191_ip = 181;
                            continue _fun77191
                        }
                    case 48:
                        var2 = _closure1_slot11;
                        var2 = var2.AUTHORIZED;
                        var5 = var1 === var2;
                        var2 = _closure1_slot10;
                        var6 = var2.isBugReporterEnabled;
                        var7 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var2 = 13;
                        var3 = var3[var2];
                        var2 = undefined;
                        var8 = var7.bind(var2)(var3);
                        var7 = var8.getConfig;
                        var3 = {};
                        var9 = 'native-BugReportManager';
                        var3.location = var9;
                        var3 = var7.bind(var8)(var3);
                        var3 = var3.hasBugReporterAccess;
                        if (!var3) {
                            _fun77191_ip = 129;
                            continue _fun77191
                        }
                    case 126:
                        var3 = var6;
                    case 129:
                        if (!var3) {
                            _fun77191_ip = 135;
                            continue _fun77191
                        }
                    case 132:
                        var3 = var5;
                    case 135:
                        if (!var3) {
                            _fun77191_ip = 178;
                            continue _fun77191
                        }
                    case 138:
                        var5 = _closure1_slot12;
                        var3 = null;
                        if (!(var3 == var5)) {
                            _fun77191_ip = 178;
                            continue _fun77191
                        }
                    case 148:
                        var7 = _closure1_slot13;
                        var6 = var7.addListener;
                        var5 = _closure1_slot15;
                        var3 = 'screenshotTaken';
                        var3 = var6.bind(var7)(var3, var5);
                        _closure1_slot12 = var3;
                    case 178:
                        return var2;
                    case 181:
                        return var1;
                    case 184:
                        return var0;
                }
            };
            return var0;
        };
        var6 = var7.bind(var2)(var6);
        var _closure2_slot0 = var6;
        var5 = function() {
            var0 = undefined;
            var3 = _closure2_slot0;
            var2 = var3.apply;
            var0 = arguments;
            var1 = var0;
            var0 = this;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        var4.value = var5;
        var0[2] = var4;
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
    var3 = 15;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/bug_reporter/native/BugReportManager.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 5, 27, 803, 4013, 478, 9670, 8812, 491, 9835, 4299, 2]);