// modules/app_launcher/native/onboarding/hooks/useAppLauncherOnboardingContent.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function arg0, arg1() {
        _fun90380: for (var _fun90380_ip = 0;;) switch (_fun90380_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun90380_ip = 46;
                    continue _fun90380
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun90380_ip = 55;
                    continue _fun90380
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun90380_ip = 345;
                    continue _fun90380
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun90380_ip = 323;
                    continue _fun90380
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun90380_ip = 283;
                    continue _fun90380
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun90380_ip = 270;
                    continue _fun90380
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
                    _fun90380_ip = 163;
                    continue _fun90380
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun90380_ip = 179;
                    continue _fun90380
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun90380_ip = 249;
                    continue _fun90380
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun90380_ip = 249;
                    continue _fun90380
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun90380_ip = 234;
                    continue _fun90380
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun90380_ip = 247;
                    continue _fun90380
                }
            case 234:
                var8 = _closure1_slot8;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun90380_ip = 265;
                continue _fun90380;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun90380_ip = 283;
                continue _fun90380;
            case 270:
                var6 = _closure1_slot8;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun90380_ip = 323;
                    continue _fun90380
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
                    _fun90380_ip = 330;
                    continue _fun90380
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun90381: for (var _fun90381_ip = 0;;) switch (_fun90381_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun90381_ip = 56;
                                continue _fun90381
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
                            _fun90381_ip = 67;
                            continue _fun90381;
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
    var _closure1_slot7 = var0;
    var0 = function arg0, arg1() {
        _fun90382: for (var _fun90382_ip = 0;;) switch (_fun90382_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun90382_ip = 23;
                    continue _fun90382
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun90382_ip = 33;
                    continue _fun90382
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
                    _fun90382_ip = 70;
                    continue _fun90382
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun90382_ip = 55;
                    continue _fun90382
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot8 = var0;
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
    var3 = var4.bind(var0)(var3);
    var3 = var3.DismissibleContentGroupName;
    var _closure1_slot6 = var3;
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/app_launcher/native/onboarding/hooks/useAppLauncherOnboardingContent.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun90383: for (var _fun90383_ip = 0;;) switch (_fun90383_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.channelId;
                var _closure2_slot0 = var6;
                var5 = new Array(0);
                var2 = {};
                var8 = _closure1_slot0;
                var7 = _closure1_slot2;
                var3 = 6;
                var4 = var7[var3];
                var3 = undefined;
                var10 = var8.bind(var3)(var4);
                var9 = var10.useStateFromStores;
                var4 = _closure1_slot5;
                var8 = new Array(1);
                var8[0] = var4;
                var4 = function() { // Environment: var1
                    var2 = _closure1_slot5;
                    var1 = var2.getChannel;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var4 = var9.bind(var10)(var8, var4);
                var2.channel = var4;
                var1 = function arg0() {
                    _fun90384: for (var _fun90384_ip = 0;;) switch (_fun90384_ip) {
                        case 0:
                            var0 = arg0;
                            var1 = var0.channel;
                            var3 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var5 = 4;
                            var2 = var6[var5];
                            var8 = undefined;
                            var9 = var3.bind(var8)(var2);
                            var7 = var9.UNSAFE_useIsDismissibleContentDismissed;
                            var2 = 5;
                            var4 = var6[var2];
                            var4 = var3.bind(var8)(var4);
                            var4 = var4.DismissibleContent;
                            var4 = var4.APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER;
                            var4 = var7.bind(var9)(var4);
                            var5 = var6[var5];
                            var7 = var3.bind(var8)(var5);
                            var5 = var7.UNSAFE_useIsDismissibleContentDismissed;
                            var2 = var6[var2];
                            var2 = var3.bind(var8)(var2);
                            var2 = var2.DismissibleContent;
                            var2 = var2.APP_LAUNCHER_ONBOARDING_APPS_BANNER;
                            var5 = var5.bind(var7)(var2);
                            var2 = 6;
                            var2 = var6[var2];
                            var7 = var3.bind(var8)(var2);
                            var6 = var7.useStateFromStores;
                            var2 = _closure1_slot4;
                            var3 = new Array(1);
                            var3[0] = var2;
                            var2 = function() { // Environment: var2
                                var1 = _closure1_slot4;
                                var0 = var1.getApplicationFrecencyWithoutLoadingLatest;
                                var0 = var0.bind(var1)();
                                return var0;
                            };
                            var7 = var6.bind(var7)(var3, var2);
                            var6 = null;
                            var2 = var6 == var1;
                            var9 = undefined;
                            if (var2) {
                                _fun90384_ip = 169;
                                continue _fun90384
                            }
                        case 164:
                            var9 = var1.guild_id;
                        case 169:
                            var1 = _closure1_slot7;
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var0 = 7;
                            var0 = var3[var0];
                            var3 = var2.bind(var8)(var0);
                            var2 = var3.useActivityApplications;
                            var0 = {};
                            var0.guildId = var9;
                            if (!var4) {
                                _fun90384_ip = 211;
                                continue _fun90384
                            }
                        case 208:
                            var4 = var5;
                        case 211:
                            var4 = !var4;
                            var0.fetchesShelf = var4;
                            var0 = var2.bind(var3)(var0);
                            var5 = var1.bind(var8)(var0);
                            var1 = var5.bind(var8)();
                            var0 = var1.done;
                            var2 = var1;
                            var1 = false;
                            if (var0) {
                                _fun90384_ip = 293;
                                continue _fun90384
                            }
                        case 246:
                            var0 = var2.value;
                            var9 = var7.getEntry;
                            var0 = var0.id;
                            var0 = var9.bind(var7)(var0);
                            var0 = var6 != var0;
                            var1 = true;
                            if (var0) {
                                _fun90384_ip = 293;
                                continue _fun90384
                            }
                        case 276:
                            var9 = var5.bind(var8)();
                            var0 = var9.done;
                            var2 = var9;
                            var1 = false;
                            if (!var0) {
                                _fun90384_ip = 246;
                                continue _fun90384
                            }
                        case 293:
                            var0 = {};
                            var0.hasUsedActivities = var1;
                            return var0;
                    }
                };
                var1 = var1.bind(var3)(var2);
                var4 = var1.hasUsedActivities;
                var2 = _closure1_slot1;
                var1 = 8;
                var1 = var7[var1];
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var1.channelId = var6;
                var1 = var2.bind(var3)(var1);
                var2 = var1.canShowBotsBanner;
                var1 = var1.canShowAppsOrActivitiesBanner;
                if (!var2) {
                    _fun90383_ip = 181;
                    continue _fun90383
                }
            case 139:
                var6 = var5.push;
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var2 = 5;
                var2 = var8[var2];
                var2 = var7.bind(var3)(var2);
                var2 = var2.DismissibleContent;
                var2 = var2.APP_LAUNCHER_ONBOARDING_BOTS_BANNER;
                var2 = var6.bind(var5)(var2);
            case 181:
                if (!var1) {
                    _fun90383_ip = 242;
                    continue _fun90383
                }
            case 184:
                var2 = var5.push;
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 5;
                var1 = var7[var1];
                var1 = var6.bind(var3)(var1);
                var1 = var1.DismissibleContent;
                if (var4) {
                    _fun90383_ip = 231;
                    continue _fun90383
                }
            case 218:
                var4 = var1.APP_LAUNCHER_ONBOARDING_APPS_BANNER;
                var4 = var2.bind(var5)(var4);
                _fun90383_ip = 242;
                continue _fun90383;
            case 231:
                var1 = var1.APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER;
                var1 = var2.bind(var5)(var1);
            case 242:
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 9;
                var1 = var4[var1];
                var4 = var2.bind(var3)(var1);
                var2 = var4.useSelectedDismissibleContent;
                var1 = _closure1_slot6;
                var1 = var1.APP_LAUNCHER_ONBOARDING;
                var2 = var2.bind(var4)(var5, var1);
                var1 = _closure1_slot3;
                var0 = 2;
                var2 = var1.bind(var3)(var2, var0);
                var0 = {};
                var1 = 0;
                var1 = var2[var1];
                var0.visibleContent = var1;
                var1 = 1;
                var1 = var2[var1];
                var0.markAsDismissed = var1;
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 4675, 1372, 1369, 3212, 1358, 566, 11736, 11730, 5957, 2]);