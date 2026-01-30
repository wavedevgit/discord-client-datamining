// ../discord_common/js/packages/analytics-utils/getSuperProperties.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun7324: for (var _fun7324_ip = 0;;) switch (_fun7324_ip) {
        case 0:
            var7 = require;
            var18 = metroImportDefault;
            var2 = exports;
            var8 = dependencyMap;
            var _closure1_slot0 = var7;
            var _closure1_slot1 = var18;
            var _closure1_slot2 = var8;
            var0 = function() { // Original name: isMetaQuestRuntime, environment: var1
                _fun7325: for (var _fun7325_ip = 0;;) switch (_fun7325_ip) {
                    case 0:
                        var1 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var0 = 4;
                        var0 = var2[var0];
                        var3 = undefined;
                        var0 = var1.bind(var3)(var0);
                        var4 = var0.default;
                        var2 = null;
                        var0 = var2 == var4;
                        var1 = undefined;
                        if (var0) {
                            _fun7325_ip = 66;
                            continue _fun7325
                        }
                    case 41:
                        var0 = var4.getConstants;
                        var0 = var0.bind(var4)();
                        var2 = var2 == var0;
                        var1 = undefined;
                        if (var2) {
                            _fun7325_ip = 66;
                            continue _fun7325
                        }
                    case 60:
                        var1 = var0.deviceModel;
                    case 66:
                        var0 = 'Quest';
                        var0 = var0 === var1;
                        return var0;
                }
            };
            var _closure1_slot7 = var0;
            var5 = function() { // Original name: getOS, environment: var1
                _fun7326: for (var _fun7326_ip = 0;;) switch (_fun7326_ip) {
                    case 0:
                        var0 = global;
                        var0 = var0.window;
                        var0 = var0.navigator;
                        var0 = var0.userAgent;
                        var1 = _closure1_slot7;
                        var0 = undefined;
                        var1 = var1.bind(var0)();
                        var0 = 'Android';
                        if (!var1) {
                            _fun7326_ip = 48;
                            continue _fun7326
                        }
                    case 42:
                        var0 = 'Horizon OS';
                    case 48:
                        return var0;
                }
            };
            var _closure1_slot8 = var5;
            var4 = function() { // Original name: getDevice, environment: var1
                _fun7327: for (var _fun7327_ip = 0;;) switch (_fun7327_ip) {
                    case 0:
                        var0 = global;
                        var0 = var0.window;
                        var0 = var0.navigator;
                        var0 = var0.userAgent;
                        var2 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var0 = 5;
                        var0 = var3[var0];
                        var3 = undefined;
                        var0 = var2.bind(var3)(var0);
                        var2 = var0.Platform;
                        var4 = var2.OS;
                        var2 = 'android';
                        if (!(var2 !== var4)) {
                            _fun7327_ip = 85;
                            continue _fun7327
                        }
                    case 65:
                        var0 = var0.NativeModules;
                        var0 = var0.DCDDeviceManager;
                        var0 = var0.device;
                        _fun7327_ip = 126;
                        continue _fun7327;
                    case 85:
                        var2 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var1 = 4;
                        var1 = var4[var1];
                        var1 = var2.bind(var3)(var1);
                        var2 = var1.default;
                        var1 = var2.getConstants;
                        var1 = var1.bind(var2)();
                        var0 = var1.device;
                    case 126:
                        return var0;
                }
            };
            var _closure1_slot9 = var4;
            var0 = function() { // Original name: getDeviceProperties, environment: var1
                _fun7328: for (var _fun7328_ip = 0;;) switch (_fun7328_ip) {
                    case 0:
                        var4 = undefined;
                        var2 = undefined;
                        var6 = undefined;
                        var5 = undefined;
                        var3 = undefined;
                        var8 = {};
                        var0 = var8;
                        var7 = _closure1_slot8;
                        var7 = var7.bind(var4)();
                        var2 = var7;
                        var8.os = var7;
                        var7 = global;
                        var9 = var7.window;
                        var9 = var9.navigator;
                        var10 = var9.userAgent;
                        var9 = var9.vendor;
                        var7 = var7.window;
                        var7 = var7.opera;
                        var7 = _closure1_slot7;
                        var9 = var7.bind(var4)();
                        var7 = 'Discord Android';
                        if (!var9) {
                            _fun7328_ip = 96;
                            continue _fun7328
                        }
                    case 90:
                        var7 = 'Discord VR';
                    case 96:
                        var8.browser = var7;
                        var7 = _closure1_slot9;
                        var7 = var7.bind(var4)();
                        var8.device = var7;
                        var7 = _closure1_slot5;
                        var7 = var7.bind(var4)();
                        var8.system_locale = var7;
                        var9 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var7 = 1;
                        var7 = var10[var7];
                        var9 = var9.bind(var4)(var7);
                        var7 = var9.usesClientMods;
                        var7 = var7.bind(var9)();
                        var8.has_client_mods = var7;
                    case 166: // try_start_0
                        var8 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var7 = 5;
                        var7 = var9[var7];
                        var7 = var8.bind(var4)(var7);
                        var6 = var7;
                        var7 = var7.Platform;
                        var8 = var7.OS;
                        var7 = 'android';
                        if (!(var7 !== var8)) {
                            _fun7328_ip = 233;
                            continue _fun7328
                        }
                    case 209:
                        var6 = var6.NativeModules;
                        var7 = var6.InfoDictionaryManager;
                        var6 = var7.getConstants;
                        var6 = var6.bind(var7)();
                        _fun7328_ip = 268;
                        continue _fun7328;
                    case 233:
                        var8 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var7 = 6;
                        var7 = var9[var7];
                        var7 = var8.bind(var4)(var7);
                        var8 = var7.default;
                        var7 = var8.getConstants;
                        var6 = var7.bind(var8)();
                    case 268:
                        var7 = var6.Version;
                        var5 = var6.ReleaseChannel;
                        var3 = var6.DeviceVendorID;
                        var6 = var0;
                        var9 = var2;
                        var2 = '';
                        var8 = 'Android';
                        if (!(var8 === var9)) {
                            _fun7328_ip = 312;
                            continue _fun7328
                        }
                    case 306:
                        var2 = ' - rn';
                    case 312:
                        var2 = var7 + var2;
                        var6.client_version = var2;
                        var2 = var0;
                        var2.release_channel = var5;
                        var2.device_vendor_id = var3;
                        var3 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var1 = 7;
                        var1 = var5[var1];
                        var1 = var3.bind(var4)(var1);
                        var1 = var1.DesignIds;
                        var1 = var1.DESIGN_TABS_IA;
                        var2.design_id = var1;
                    case 375: // try_end0
                        _fun7328_ip = 379;
                        continue _fun7328;
                    case 377: // catch_target0
                        CatchBlockStart(arg_register = 1);
                    case 379:
                        return var0;
                }
            };
            var _closure1_slot10 = var0;
            var3 = function(arg0) { // Original name: extendSuperProperties, environment: var1
                var0 = {};
                var5 = _closure1_slot3;
                var6 = var0;
                var1 = copyDataProperties(var6, var5);
                var5 = arg0;
                var6 = var0;
                var1 = copyDataProperties(var6, var5);
                _closure1_slot3 = var0;
                var3 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 10;
                var1 = var1[var0];
                var0 = undefined;
                var4 = var3.bind(var0)(var1);
                var3 = var4.encodeProperties;
                var1 = _closure1_slot3;
                var1 = var3.bind(var4)(var1);
                var _closure1_slot4 = var1;
                return var0;
            };
            var11 = global;
            var10 = var11.Object;
            var9 = var10.defineProperty;
            var6 = {};
            var0 = true;
            var6.value = var0;
            var0 = '__esModule';
            var0 = var9.bind(var10)(var2, var0, var6);
            var14 = 0;
            var6 = var8[var14];
            var0 = undefined;
            var6 = var7.bind(var0)(var6);
            var6 = var6.getSystemLocale;
            var _closure1_slot5 = var6;
            var9 = var11.window;
            var12 = var9.DiscordNative;
            var9 = null;
            if (!(var9 != var12)) {
                _fun7324_ip = 680;
                continue _fun7324
            }
        case 143:
            var13 = var12.remoteApp;
            var10 = var13.getVersion;
            var20 = var10.bind(var13)();
            var10 = var12.process;
            var10 = var10.platform;
            var13 = var12.os;
            var16 = var13.release;
            var13 = var12.os;
            var19 = var13.arch;
            var13 = var12.os;
            var17 = var13.appArch;
            var15 = var12.remoteApp;
            var13 = var15.getReleaseChannel;
            var21 = var13.bind(var15)();
            var15 = var6.bind(var0)();
            var22 = 'Windows';
            var6 = 'win32';
            if (!(var6 !== var10)) {
                _fun7324_ip = 280;
                continue _fun7324
            }
        case 243:
            var13 = 'darwin';
            if (!(var13 !== var10)) {
                _fun7324_ip = 274;
                continue _fun7324
            }
        case 253:
            var13 = 'linux';
            if (!(var13 !== var10)) {
                _fun7324_ip = 266;
                continue _fun7324
            }
        case 261:
            var22 = var10;
            _fun7324_ip = 280;
            continue _fun7324;
        case 266:
            var22 = 'Linux';
            _fun7324_ip = 280;
            continue _fun7324;
        case 274:
            var22 = 'Mac OS X';
        case 280:
            var13 = {};
            var13.os = var22;
            var22 = 'Discord Client';
            var13.browser = var22;
            if (var21) {
                _fun7324_ip = 305;
                continue _fun7324
            }
        case 301:
            var21 = 'unknown';
        case 305:
            var13.release_channel = var21;
            var13.client_version = var20;
            var13.os_version = var16;
            var13.os_arch = var19;
            var13.app_arch = var17;
            var13.system_locale = var15;
            var15 = 1;
            var15 = var8[var15];
            var17 = var7.bind(var0)(var15);
            var15 = var17.usesClientMods;
            var15 = var15.bind(var17)();
            var13.has_client_mods = var15;
            var15 = 2;
            var17 = var8[var15];
            var17 = var7.bind(var0)(var17);
            var17 = var17.clientLaunchId;
            var13.client_launch_id = var17;
            var _closure1_slot3 = var13;
            var13 = 3;
            var17 = var8[var13];
            var17 = var18.bind(var0)(var17);
            var20 = var17.name;
            var17 = var9 == var20;
            var19 = undefined;
            if (var17) {
                _fun7324_ip = 425;
                continue _fun7324
            }
        case 415:
            var17 = var20.toLocaleLowerCase;
            var19 = var17.bind(var20)();
        case 425:
            var17 = 'electron';
            if (!(var17 === var19)) {
                _fun7324_ip = 497;
                continue _fun7324
            }
        case 433:
            var19 = _closure1_slot3;
            var17 = var8[var13];
            var17 = var18.bind(var0)(var17);
            var17 = var17.ua;
            if (var17) {
                _fun7324_ip = 459;
                continue _fun7324
            }
        case 455:
            var17 = '';
        case 459:
            var19.browser_user_agent = var17;
            var17 = _closure1_slot3;
            var13 = var8[var13];
            var13 = var18.bind(var0)(var13);
            var13 = var13.version;
            if (var13) {
                _fun7324_ip = 491;
                continue _fun7324
            }
        case 487:
            var13 = '';
        case 491:
            var17.browser_version = var13;
        case 497:
            var13 = 'linux';
            if (!(var13 !== var10)) {
                _fun7324_ip = 600;
                continue _fun7324
            }
        case 505:
            var13 = 'darwin';
            if (!(var13 !== var10)) {
                _fun7324_ip = 561;
                continue _fun7324
            }
        case 515:
            if (!(var6 === var10)) {
                _fun7324_ip = 680;
                continue _fun7324
            }
        case 522:
            var10 = _closure1_slot3;
            var13 = var9 == var16;
            var6 = undefined;
            if (var13) {
                _fun7324_ip = 553;
                continue _fun7324
            }
        case 535:
            var17 = var16.split;
            var13 = '.';
            var13 = var17.bind(var16)(var13);
            var6 = var13[var15];
        case 553:
            var10.os_sdk_version = var6;
            _fun7324_ip = 680;
            continue _fun7324;
        case 561:
            var10 = _closure1_slot3;
            var13 = var9 == var16;
            var6 = undefined;
            if (var13) {
                _fun7324_ip = 592;
                continue _fun7324
            }
        case 574:
            var15 = var16.split;
            var13 = '.';
            var13 = var15.bind(var16)(var13);
            var6 = var13[var14];
        case 592:
            var10.os_sdk_version = var6;
            _fun7324_ip = 680;
            continue _fun7324;
        case 600:
            var10 = var12.crashReporter;
            var6 = var10.getMetadata;
            var6 = var6.bind(var10)();
            var13 = _closure1_slot3;
            var10 = var6.wm;
            var13.window_manager = var10;
            var13 = _closure1_slot3;
            var10 = var6.distro;
            var13.distro = var10;
            var13 = _closure1_slot3;
            var10 = var6.runtime_environment;
            var13.runtime_environment = var10;
            var10 = _closure1_slot3;
            var6 = var6.display_server;
            var10.display_server = var6;
        case 680:
            var13 = 'utm_source utm_medium utm_campaign utm_content utm_term';
            var10 = var13.split;
            var6 = ' ';
            var6 = var10.bind(var13)(var6);
            var _closure1_slot6 = var6;
            var6 = _closure1_slot3;
            if (!(var9 == var6)) {
                _fun7324_ip = 737;
                continue _fun7324
            }
        case 714: // try_start_0
            var6 = function() { // Original name: getCachedSuperProperties, environment: var1
                _fun7330: for (var _fun7330_ip = 0;;) switch (_fun7330_ip) {
                    case 0:
                        var1 = _closure1_slot0;
                        var0 = _closure1_slot2;
                        var9 = 8;
                        var0 = var0[var9];
                        var7 = undefined;
                        var0 = var1.bind(var7)(var0);
                        var1 = var0.Storage;
                        var0 = var1.get;
                        var6 = 'deviceProperties';
                        var3 = var0.bind(var1)(var6);
                        var0 = null;
                        if (!(var0 == var3)) {
                            _fun7330_ip = 98;
                            continue _fun7330
                        }
                    case 53:
                        var1 = _closure1_slot10;
                        var1 = var1.bind(var7)();
                        var5 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var2 = var2[var9];
                        var2 = var5.bind(var7)(var2);
                        var5 = var2.Storage;
                        var2 = var5.set;
                        var2 = var2.bind(var5)(var6, var1);
                        var3 = var1;
                    case 98:
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var1 = var1[var9];
                        var1 = var2.bind(var7)(var1);
                        var2 = var1.Storage;
                        var1 = var2.get;
                        var8 = 'referralProperties';
                        var2 = var1.bind(var2)(var8);
                        if (!(var0 == var2)) {
                            _fun7330_ip = 180;
                            continue _fun7330
                        }
                    case 141:
                        var1 = {};
                        var6 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var5 = var5[var9];
                        var5 = var6.bind(var7)(var5);
                        var6 = var5.Storage;
                        var5 = var6.set;
                        var5 = var5.bind(var6)(var8, var1);
                        var2 = var1;
                    case 180:
                        var5 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var9 = 9;
                        var1 = var1[var9];
                        var1 = var5.bind(var7)(var1);
                        var5 = var1.SessionStorage;
                        var1 = var5.get;
                        var1 = var1.bind(var5)(var8);
                        if (!(var0 == var1)) {
                            _fun7330_ip = 276;
                            continue _fun7330
                        }
                    case 220:
                        var6 = function(arg0, arg1) { // Original name: suffixObjectKeys, environment: var0
                            var4 = arg0;
                            var _closure3_slot0 = var4;
                            var0 = '_current';
                            var _closure3_slot1 = var0;
                            var0 = {};
                            var _closure3_slot2 = var0;
                            var2 = global;
                            var3 = var2.Object;
                            var2 = var3.keys;
                            var3 = var2.bind(var3)(var4);
                            var2 = var3.map;
                            var1 = function(arg0) { // Environment: var1
                                var3 = arg0;
                                var2 = _closure3_slot2;
                                var5 = _closure3_slot1;
                                var1 = global;
                                var1 = var1.HermesInternal;
                                var4 = var1.concat;
                                var1 = '';
                                var1 = var4.bind(var1)(var3, var5);
                                var0 = _closure3_slot0;
                                var0 = var0[var3];
                                var2[var1] = var0;
                                return var0;
                            };
                            var1 = var2.bind(var3)(var1);
                            return var0;
                        };
                        var5 = {};
                        var0 = '_current';
                        var0 = var6.bind(var7)(var5, var0);
                        var6 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var5 = var5[var9];
                        var5 = var6.bind(var7)(var5);
                        var6 = var5.SessionStorage;
                        var5 = var6.set;
                        var5 = var5.bind(var6)(var8, var0);
                        var1 = var0;
                    case 276:
                        var0 = {};
                        var11 = var0;
                        var10 = var3;
                        var3 = copyDataProperties(var11, var10);
                        var6 = {};
                        var3 = global;
                        var3 = var3.window;
                        var3 = var3.navigator;
                        var3 = var3.userAgent;
                        if (var3) {
                            _fun7330_ip = 317;
                            continue _fun7330
                        }
                    case 313:
                        var3 = '';
                    case 317:
                        var6.browser_user_agent = var3;
                        var5 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var3 = 3;
                        var3 = var8[var3];
                        var3 = var5.bind(var7)(var3);
                        var3 = var3.version;
                        if (var3) {
                            _fun7330_ip = 355;
                            continue _fun7330
                        }
                    case 351:
                        var3 = '';
                    case 355:
                        var6.browser_version = var3;
                        var5 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var3 = 5;
                        var3 = var8[var3];
                        var5 = var5.bind(var7)(var3);
                        var3 = {};
                        var11 = var3;
                        var10 = var6;
                        var6 = copyDataProperties(var11, var10);
                        var6 = var5.Platform;
                        var8 = var6.OS;
                        var6 = 'android';
                        if (!(var6 !== var8)) {
                            _fun7330_ip = 432;
                            continue _fun7330
                        }
                    case 412:
                        var5 = var5.NativeModules;
                        var5 = var5.DCDDeviceManager;
                        var5 = var5.systemVersion;
                        _fun7330_ip = 473;
                        continue _fun7330;
                    case 432:
                        var6 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var4 = 4;
                        var4 = var8[var4];
                        var4 = var6.bind(var7)(var4);
                        var6 = var4.default;
                        var4 = var6.getConstants;
                        var4 = var4.bind(var6)();
                        var5 = var4.systemVersion;
                    case 473:
                        if (var5) {
                            _fun7330_ip = 480;
                            continue _fun7330
                        }
                    case 476:
                        var5 = '';
                    case 480:
                        var4 = 'os_version';
                        var3[var4] = var5;
                        var11 = var0;
                        var10 = var3;
                        var3 = copyDataProperties(var11, var10);
                        var11 = var0;
                        var10 = var2;
                        var2 = copyDataProperties(var11, var10);
                        var11 = var0;
                        var10 = var1;
                        var1 = copyDataProperties(var11, var10);
                        return var0;
                }
            };
            var6 = var6.bind(var0)();
            _closure1_slot3 = var6;
        case 727: // try_end0
            _fun7324_ip = 737;
            continue _fun7324;
        case 729: // catch_target0
            CatchBlockStart(arg_register = 6);
            var6 = {};
            _closure1_slot3 = var6;
        case 737:
            var6 = {};
            var10 = var11.window;
            var10 = var10.GLOBAL_ENV;
            var10 = var10.RELEASE_CHANNEL;
            var14 = var11.parseInt;
            var13 = '5099';
            var10 = 10;
            var10 = var14.bind(var0)(var13, var10);
            var13 = var11.isNaN;
            var13 = var13.bind(var0)(var10);
            if (var13) {
                _fun7324_ip = 798;
                continue _fun7324
            }
        case 792:
            var6.client_build_number = var10;
        case 798:
            var13 = var9 == var12;
            var10 = undefined;
            if (var13) {
                _fun7324_ip = 844;
                continue _fun7324
            }
        case 807:
            var13 = var12.remoteApp;
            var13 = var13.getBuildNumber;
            var13 = var9 == var13;
            var10 = undefined;
            if (var13) {
                _fun7324_ip = 844;
                continue _fun7324
            }
        case 828:
            var13 = var12.remoteApp;
            var12 = var13.getBuildNumber;
            var10 = var12.bind(var13)();
        case 844:
            var11 = var11.isNaN;
            var11 = var11.bind(var0)(var10);
            if (var11) {
                _fun7324_ip = 864;
                continue _fun7324
            }
        case 858:
            var6.native_build_number = var10;
        case 864:
            var6.client_event_source = var9;
            var9 = 1;
            var9 = var8[var9];
            var10 = var7.bind(var0)(var9);
            var9 = var10.usesClientMods;
            var9 = var9.bind(var10)();
            var6.has_client_mods = var9;
            var9 = 2;
            var9 = var8[var9];
            var9 = var7.bind(var0)(var9);
            var9 = var9.clientLaunchId;
            var6.client_launch_id = var9;
            var6 = var3.bind(var0)(var6);
            var6 = 11;
            var6 = var8[var6];
            var8 = var7.bind(var0)(var6);
            var7 = var8.fileFinishedImporting;
            var6 = '../discord_common/js/packages/analytics-utils/getSuperProperties.tsx';
            var6 = var7.bind(var8)(var6);
            var2.getOS = var5;
            var2.getDevice = var4;
            var4 = function(arg0) { // Original name: getCampaignParams, environment: var1
                var0 = arg0;
                var _closure2_slot0 = var0;
                var0 = {};
                var _closure2_slot1 = var0;
                var3 = _closure1_slot6;
                var2 = var3.forEach;
                var1 = function(arg0) { // Environment: var1
                    _fun7334: for (var _fun7334_ip = 0;;) switch (_fun7334_ip) {
                        case 0:
                            var2 = arg0;
                            var7 = _closure2_slot0;
                            var4 = null;
                            var3 = var4 == var7;
                            var8 = '';
                            var1 = var8;
                            if (var3) {
                                _fun7334_ip = 250;
                                continue _fun7334
                            }
                        case 29:
                            var6 = var2.replace;
                            var5 = /[[]/;
                            var3 = '\\[';
                            var9 = var6.bind(var2)(var5, var3);
                            var6 = var9.replace;
                            var5 = /[\]]/;
                            var3 = '\\]';
                            var11 = var6.bind(var9)(var5, var3);
                            var6 = global;
                            var9 = var6.RegExp;
                            var3 = var6.HermesInternal;
                            var10 = var3.concat;
                            var5 = '[\\?&]';
                            var3 = '=([^&#]*)';
                            var13 = var10.bind(var5)(var11, var3);
                            var5 = var9.prototype;
                            var5 = Object.create(var5, {
                                constructor: {
                                    value: var9
                                }
                            });
                            var14 = var5;
                            var3 = new var14[var9](var13, var12);
                            var5 = var3 instanceof Object ? var3 : var5;
                            var3 = var5.exec;
                            var5 = var3.bind(var5)(var7);
                            var3 = var8;
                            if (!(var4 !== var5)) {
                                _fun7334_ip = 247;
                                continue _fun7334
                            }
                        case 166:
                            var4 = 1;
                            var7 = var5[var4];
                            var9 = 'string';
                            var7 = typeof var7;
                            if (!(var9 !== var7)) {
                                _fun7334_ip = 199;
                                continue _fun7334
                            }
                        case 184:
                            var7 = var5[var4];
                            var7 = var7.length;
                            var3 = var8;
                            if (var7) {
                                _fun7334_ip = 247;
                                continue _fun7334
                            }
                        case 199:
                            var6 = var6.decodeURIComponent;
                            var5 = var5[var4];
                            var4 = undefined;
                            var7 = var6.bind(var4)(var5);
                            var6 = var7.replace;
                            var5 = /\+/g;
                            var4 = ' ';
                            var3 = var6.bind(var7)(var5, var4);
                        case 247:
                            var1 = var3;
                        case 250:
                            var4 = var1.length;
                            var3 = 0;
                            if (!(var4 > var3)) {
                                _fun7334_ip = 269;
                                continue _fun7334
                            }
                        case 261:
                            var0 = _closure2_slot1;
                            var0[var2] = var1;
                        case 269:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var2.bind(var3)(var1);
                return var0;
            };
            var2.getCampaignParams = var4;
            var2.extendSuperProperties = var3;
            var3 = function() { // Original name: getSuperProperties, environment: var1
                var0 = _closure1_slot3;
                return var0;
            };
            var2.getSuperProperties = var3;
            var1 = function() { // Original name: getSuperPropertiesBase64, environment: var1
                var0 = _closure1_slot4;
                return var0;
            };
            var2.getSuperPropertiesBase64 = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [650, 652, 653, 654, 655, 27, 656, 657, 587, 658, 647, 2]);