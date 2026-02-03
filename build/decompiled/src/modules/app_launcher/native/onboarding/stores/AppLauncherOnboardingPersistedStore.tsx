// modules/app_launcher/native/onboarding/stores/AppLauncherOnboardingPersistedStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var4 = dependencyMap;
    var0 = function() {
        _fun90236: for (var _fun90236_ip = 0;;) switch (_fun90236_ip) {
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
                _fun90236_ip = 76;
                continue _fun90236;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot7 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot7 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var1);
    var0 = 0;
    var1 = var4[var0];
    var0 = undefined;
    var1 = var5.bind(var0)(var1);
    var _closure1_slot0 = var1;
    var1 = 1;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var _closure1_slot1 = var1;
    var1 = 2;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var _closure1_slot2 = var1;
    var1 = 3;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 4;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var6 = {
        'canShowBotsBanner': false,
        'canShowAppsOrActivitiesBanner': false,
        'willShowGlobalSearchOnboarding': false,
        'timeMs': 0,
        'channelId': '0'
    };
    var _closure1_slot5 = var6;
    var1 = {};
    var7 = null;
    var1.lastSeenTimeMs = var7;
    var1.triggeredOnboardingContentMetadata = var6;
    var _closure1_slot6 = var1;
    var1 = 5;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var6 = var1.PersistedStore;
    var1 = function(arg0) { // Environment: var3
        var3 = function() {
            _fun90240: for (var _fun90240_ip = 0;;) switch (_fun90240_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot0;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot3;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot2;
                    var0 = _closure1_slot7;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun90240_ip = 69;
                        continue _fun90240
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun90240_ip = 105;
                    continue _fun90240;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot3;
                    var5 = var5.bind(var2)(var3);
                    var5 = var5.constructor;
                    var4 = arguments;
                    var0 = var6.bind(var7)(var8, var4, var5);
                case 105:
                    var0 = var1.bind(var2)(var3, var0);
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot4;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot1;
        var4 = {};
        var0 = 'initialize';
        var4.key = var0;
        var0 = function arg0() {
            _fun90241: for (var _fun90241_ip = 0;;) switch (_fun90241_ip) {
                case 0:
                    var0 = arg0;
                    var1 = null;
                    if (!(var1 != var0)) {
                        _fun90241_ip = 40;
                        continue _fun90241
                    }
                case 9:
                    var1 = _closure1_slot6;
                    var2 = var0.lastSeenTimeMs;
                    var1.lastSeenTimeMs = var2;
                    var0 = var0.triggeredOnboardingContentMetadata;
                    var1.triggeredOnboardingContentMetadata = var0;
                case 40:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(4);
        var0[0] = var4;
        var4 = {};
        var6 = 'getState';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot6;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getLastSeenTimeMs';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot6;
            var0 = var0.lastSeenTimeMs;
            return var0;
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'getTriggeredOnboardingContentMetadata';
        var4.key = var6;
        var5 = function() {
            var0 = _closure1_slot6;
            var0 = var0.triggeredOnboardingContentMetadata;
            return var0;
        };
        var4.value = var5;
        var0[3] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var6 = var1.bind(var0)(var6);
    var1 = 'AppLauncherOnboardingPersistedStore';
    var6.displayName = var1;
    var6.persistKey = var1;
    var1 = new Array(1);
    var7 = function(arg0) { // Environment: var3
        _fun90245: for (var _fun90245_ip = 0;;) switch (_fun90245_ip) {
            case 0:
                var4 = arg0;
                var0 = {};
                var3 = null;
                var1 = var3 == var4;
                var2 = undefined;
                if (var1) {
                    _fun90245_ip = 22;
                    continue _fun90245
                }
            case 16:
                var2 = var4.lastSeenTimeMs;
            case 22:
                var5 = var3 != var2;
                var1 = null;
                if (!var5) {
                    _fun90245_ip = 34;
                    continue _fun90245
                }
            case 31:
                var1 = var2;
            case 34:
                var0.lastSeenTimeMs = var1;
                var1 = {};
                var5 = var3 == var4;
                var2 = undefined;
                if (var5) {
                    _fun90245_ip = 71;
                    continue _fun90245
                }
            case 50:
                var5 = var4.triggeredOnboardingContentMetadata;
                var7 = var3 == var5;
                var2 = undefined;
                if (var7) {
                    _fun90245_ip = 71;
                    continue _fun90245
                }
            case 65:
                var2 = var5.canShowBotsBanner;
            case 71:
                if (!(var3 == var2)) {
                    _fun90245_ip = 88;
                    continue _fun90245
                }
            case 75:
                var5 = _closure1_slot5;
                var2 = var5.canShowBotsBanner;
            case 88:
                var1.canShowBotsBanner = var2;
                var5 = var3 == var4;
                var2 = undefined;
                if (var5) {
                    _fun90245_ip = 123;
                    continue _fun90245
                }
            case 102:
                var5 = var4.triggeredOnboardingContentMetadata;
                var7 = var3 == var5;
                var2 = undefined;
                if (var7) {
                    _fun90245_ip = 123;
                    continue _fun90245
                }
            case 117:
                var2 = var5.canShowAppsOrActivitiesBanner;
            case 123:
                if (!(var3 == var2)) {
                    _fun90245_ip = 140;
                    continue _fun90245
                }
            case 127:
                var5 = _closure1_slot5;
                var2 = var5.canShowAppsOrActivitiesBanner;
            case 140:
                var1.canShowAppsOrActivitiesBanner = var2;
                var5 = var3 == var4;
                var2 = undefined;
                if (var5) {
                    _fun90245_ip = 175;
                    continue _fun90245
                }
            case 154:
                var5 = var4.triggeredOnboardingContentMetadata;
                var7 = var3 == var5;
                var2 = undefined;
                if (var7) {
                    _fun90245_ip = 175;
                    continue _fun90245
                }
            case 169:
                var2 = var5.willShowGlobalSearchOnboarding;
            case 175:
                if (!(var3 == var2)) {
                    _fun90245_ip = 192;
                    continue _fun90245
                }
            case 179:
                var5 = _closure1_slot5;
                var2 = var5.willShowGlobalSearchOnboarding;
            case 192:
                var1.willShowGlobalSearchOnboarding = var2;
                var5 = var3 == var4;
                var2 = undefined;
                if (var5) {
                    _fun90245_ip = 227;
                    continue _fun90245
                }
            case 206:
                var5 = var4.triggeredOnboardingContentMetadata;
                var7 = var3 == var5;
                var2 = undefined;
                if (var7) {
                    _fun90245_ip = 227;
                    continue _fun90245
                }
            case 221:
                var2 = var5.timeMs;
            case 227:
                if (!(var3 == var2)) {
                    _fun90245_ip = 244;
                    continue _fun90245
                }
            case 231:
                var5 = _closure1_slot5;
                var2 = var5.timeMs;
            case 244:
                var1.timeMs = var2;
                var5 = var3 == var4;
                var2 = undefined;
                if (var5) {
                    _fun90245_ip = 278;
                    continue _fun90245
                }
            case 258:
                var4 = var4.triggeredOnboardingContentMetadata;
                var5 = var3 == var4;
                var2 = undefined;
                if (var5) {
                    _fun90245_ip = 278;
                    continue _fun90245
                }
            case 273:
                var2 = var4.channelId;
            case 278:
                if (!(var3 == var2)) {
                    _fun90245_ip = 294;
                    continue _fun90245
                }
            case 282:
                var3 = _closure1_slot5;
                var2 = var3.channelId;
            case 294:
                var1.channelId = var2;
                var0.triggeredOnboardingContentMetadata = var1;
                return var0;
        }
    };
    var1[0] = var7;
    var6.migrations = var1;
    var1 = 6;
    var1 = var4[var1];
    var10 = var5.bind(var0)(var1);
    var1 = {};
    var7 = function() {
        var1 = _closure1_slot6;
        var0 = global;
        var2 = var0.Date;
        var0 = var2.now;
        var0 = var0.bind(var2)();
        var1.lastSeenTimeMs = var0;
        var0 = undefined;
        return var0;
    };
    var1.APP_LAUNCHER_ONBOARDING_SET_LAST_SEEN_TIME_MS = var7;
    var3 = function arg0() {
        var0 = arg0;
        var1 = var0.triggeredOnboardingContentMetadata;
        var0 = _closure1_slot6;
        var0.triggeredOnboardingContentMetadata = var1;
        var0 = undefined;
        return var0;
    };
    var1.APP_LAUNCHER_ONBOARDING_SET_TRIGGERED_ONBOARDING_CONTENT_METADATA = var3;
    var3 = var6.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var6
        }
    });
    var11 = var3;
    var9 = var1;
    var1 = new var11[var6](var10, var9, var8);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 7;
    var4 = var4[var3];
    var3 = arg1;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/app_launcher/native/onboarding/stores/AppLauncherOnboardingPersistedStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 566, 806, 2]);