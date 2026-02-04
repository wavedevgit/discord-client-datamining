// modules/mobile_native_updater/MobileNativeUpdateUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot2;
        var2 = function*() { // Environment: var2
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun88049: for (var _fun88049_ip = 0;;) switch (_fun88049_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun88049_ip = 462;
                            continue _fun88049
                        }
                    case 10:
                        var2 = _closure1_slot3;
                        var1 = null;
                        if (!(var1 !== var2)) {
                            _fun88049_ip = 459;
                            continue _fun88049
                        }
                    case 26:
                        var4 = _closure1_slot4;
                        var3 = var4.info;
                        var2 = _closure1_slot3;
                        var9 = var2.url;
                        var5 = global;
                        var2 = var5.HermesInternal;
                        var7 = var2.concat;
                        var6 = 'Checking ';
                        var2 = ' for updates';
                        var2 = var7.bind(var6)(var9, var2);
                        var2 = var3.bind(var4)(var2);
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot1;
                        var2 = 3;
                        var3 = var3[var2];
                        var2 = undefined;
                        var2 = var4.bind(var2)(var3);
                        var4 = var2.HTTP;
                        var3 = var4.get;
                        var2 = {};
                        var6 = _closure1_slot3;
                        var7 = var6.url;
                        var6 = var7.toString;
                        var6 = var6.bind(var7)();
                        var2.url = var6;
                        var6 = {};
                        var7 = 'application/json';
                        var6.Accept = var7;
                        var2.headers = var6;
                        var6 = false;
                        var2.rejectWithError = var6;
                        var2 = var3.bind(var4)(var2);
                        SaveGenerator(address = 168);
                    case 166:
                        return var2;
                    case 168:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 3);
                        if (var3) {
                            _fun88049_ip = 456;
                            continue _fun88049
                        }
                    case 177:
                        var3 = var2.ok;
                        if (var3) {
                            _fun88049_ip = 188;
                            continue _fun88049
                        }
                    case 186:
                        throw var2;
                    case 188:
                        var4 = {};
                        var3 = var2.body;
                        var3 = var3.build;
                        var4.build = var3;
                        var3 = var2.body;
                        var3 = var3.version;
                        var4.version = var3;
                        var7 = var5.Date;
                        var3 = var2.body;
                        var15 = var3.build_timestamp;
                        var6 = var7.prototype;
                        var6 = Object.create(var6, {
                            constructor: {
                                value: var7
                            }
                        });
                        var16 = var6;
                        var3 = new var16[var7](var15, var14);
                        var3 = var3 instanceof Object ? var3 : var6;
                        var4.buildTimestamp = var3;
                        var3 = var2.body;
                        var3 = var3.urls;
                        var4.urls = var3;
                        var6 = var4.build;
                        var3 = _closure1_slot3;
                        var3 = var3.currentBuild;
                        if (!(var6 > var3)) {
                            _fun88049_ip = 324;
                            continue _fun88049
                        }
                    case 304:
                        var6 = var4.version;
                        var3 = _closure1_slot3;
                        var3 = var3.currentVersion;
                        if (!(!(var6 >= var3))) {
                            _fun88049_ip = 389;
                            continue _fun88049
                        }
                    case 324:
                        var7 = _closure1_slot4;
                        var6 = var7.info;
                        var12 = var4.build;
                        var3 = _closure1_slot3;
                        var11 = var3.currentBuild;
                        var3 = var5.HermesInternal;
                        var10 = var3.concat;
                        var9 = 'Update build ';
                        var3 = ' is older than ';
                        var3 = var10.bind(var9)(var12, var3, var11);
                        var3 = var6.bind(var7)(var3);
                        var3 = null;
                        _fun88049_ip = 453;
                        continue _fun88049;
                    case 389:
                        var7 = _closure1_slot4;
                        var6 = var7.info;
                        var11 = var4.build;
                        var8 = _closure1_slot3;
                        var10 = var8.currentBuild;
                        var5 = var5.HermesInternal;
                        var9 = var5.concat;
                        var8 = 'Update build ';
                        var5 = ' is newer than ';
                        var5 = var9.bind(var8)(var11, var5, var10);
                        var5 = var6.bind(var7)(var5);
                        var3 = var4;
                    case 453:
                        return var3;
                    case 456:
                        return var2;
                    case 459:
                        return var1;
                    case 462:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot5 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot5 = var0;
    var1 = function arg0() {
        _fun88050: for (var _fun88050_ip = 0;;) switch (_fun88050_ip) {
            case 0:
                var2 = arg0;
                var0 = undefined;
                var4 = undefined;
                var3 = undefined;
            case 9: // try_start_0
                var1 = global;
                var6 = var1.URL;
                var9 = var2;
                var5 = var6.prototype;
                var5 = Object.create(var5, {
                    constructor: {
                        value: var6
                    }
                });
                var10 = var5;
                var2 = new var10[var6](var9, var8);
                var2 = var2 instanceof Object ? var2 : var5;
                var4 = var2;
                var6 = var2.origin;
                var7 = _closure1_slot3;
                var5 = null;
                var7 = var5 == var7;
                var5 = undefined;
                if (var7) {
                    _fun88050_ip = 82;
                    continue _fun88050
                }
            case 67:
                var7 = _closure1_slot3;
                var7 = var7.url;
                var5 = var7.origin;
            case 82:
                if (!(var6 === var5)) {
                    _fun88050_ip = 222;
                    continue _fun88050
                }
            case 89:
                var6 = _closure1_slot0;
                var7 = _closure1_slot1;
                var5 = 4;
                var5 = var7[var5];
                var5 = var6.bind(var0)(var5);
                var5 = var5.default;
                var3 = var5.openURLExternally;
                var5 = 5;
                var5 = var7[var5];
                var6 = var6.bind(var0)(var5);
                var5 = var6.isIOS;
                var5 = var5.bind(var6)();
                if (var5) {
                    _fun88050_ip = 167;
                    continue _fun88050
                }
            case 145:
                var6 = var3;
                var7 = var4;
                var5 = var7.toString;
                var5 = var5.bind(var7)();
                var5 = var6.bind(var0)(var5);
                _fun88050_ip = 220;
                continue _fun88050;
            case 167:
                var6 = _closure1_slot0;
                var7 = _closure1_slot1;
                var5 = 6;
                var5 = var7[var5];
                var5 = var6.bind(var0)(var5);
                var5 = var5.WebBrowserType;
                var6 = var5.SAFARI;
                var5 = var3;
                var7 = var4;
                var3 = var7.toString;
                var3 = var3.bind(var7)();
                var3 = var5.bind(var0)(var3, var6);
            case 220: // try_end0
                _fun88050_ip = 267;
                continue _fun88050;
            case 222: // try_start_1
                var3 = _closure1_slot4;
                var2 = var3.error;
                var5 = var4;
                var1 = var1.HermesInternal;
                var4 = var1.concat;
                var1 = 'Attempted to follow invalid install URL ';
                var1 = var4.bind(var1)(var5);
                var1 = var2.bind(var3)(var1);
            case 261: // try_end1
                var1 = undefined;
                return var1;
            case 265: // catch_target0 // catch_target1
                CatchBlockStart(arg_register = 1);
            case 267:
                return var0;
        }
    };
    var _closure1_slot6 = var1;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var4);
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var7.bind(var0)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.UPDATE_CONFIG;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var8 = var7.bind(var0)(var4);
    var4 = var8.prototype;
    var7 = Object.create(var4, {
        constructor: {
            value: var8
        }
    });
    var12 = 'MobileNativeUpdateUtils';
    var13 = var7;
    var4 = new var13[var8](var12, var11);
    var4 = var4 instanceof Object ? var4 : var7;
    var _closure1_slot4 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/mobile_native_updater/MobileNativeUpdateUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function() {
        var0 = undefined;
        var3 = _closure1_slot5;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.checkForNewerBuild = var4;
    var3 = function arg0() {
        var2 = _closure1_slot6;
        var0 = arg0;
        var0 = var0.urls;
        var1 = var0.install;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var2.openBuildInstaller = var3;
    var2.openBuildInstallerUrl = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 3320, 3, 507, 3144, 478, 670, 2]);