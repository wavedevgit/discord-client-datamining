// modules/connections/ConnectionsHooks.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var6;
    var3 = function(arg0) { // Original name: usePlatformAllowed, environment: var1
        var1 = arg0;
        var1 = var1.forUserProfile;
        var _closure2_slot0 = var1;
        var3 = _closure1_slot0;
        var4 = _closure1_slot2;
        var2 = 7;
        var5 = var4[var2];
        var2 = undefined;
        var7 = var3.bind(var2)(var5);
        var6 = var7.useStateFromStores;
        var1 = _closure1_slot6;
        var5 = new Array(1);
        var5[0] = var1;
        var1 = function() { // Environment: var0
            var1 = _closure1_slot6;
            var0 = var1.getCurrentUser;
            var0 = var0.bind(var1)();
            return var0;
        };
        var1 = var6.bind(var7)(var5, var1);
        var _closure2_slot1 = var1;
        var1 = 8;
        var1 = var4[var1];
        var1 = var3.bind(var2)(var1);
        var4 = var1.PlayStationVoiceExperiment;
        var3 = var4.useExperiment;
        var2 = {};
        var1 = 'f2f7ef_1';
        var2.location = var1;
        var1 = {};
        var5 = false;
        var1.autoTrackExposure = var5;
        var1 = var3.bind(var4)(var2, var1);
        var1 = var1.allowPlayStationStaging;
        var _closure2_slot2 = var1;
        var0 = function(arg0) { // Environment: var0
            _fun40577: for (var _fun40577_ip = 0;;) switch (_fun40577_ip) {
                case 0:
                    var2 = arg0;
                    var3 = var2.type;
                    var1 = _closure1_slot8;
                    var1 = var1.PLAYSTATION_STAGING;
                    if (!(var3 !== var1)) {
                        _fun40577_ip = 117;
                        continue _fun40577
                    }
                case 25:
                    var3 = _closure2_slot1;
                    var5 = undefined;
                    var3 = var5 === var3;
                    if (var3) {
                        _fun40577_ip = 63;
                        continue _fun40577
                    }
                case 41:
                    var4 = _closure1_slot10;
                    var0 = var2.type;
                    var0 = var4[var0];
                    var4 = null;
                    var3 = var4 == var0;
                    var5 = var0;
                case 63:
                    if (var3) {
                        _fun40577_ip = 88;
                        continue _fun40577
                    }
                case 66:
                    var4 = var5.includes;
                    var0 = _closure2_slot1;
                    var0 = var0.id;
                    var0 = var4.bind(var5)(var0);
                    var3 = !var0;
                case 88:
                    var0 = !var3;
                    if (!var3) {
                        _fun40577_ip = 115;
                        continue _fun40577
                    }
                case 94:
                    var1 = _closure2_slot0;
                    var3 = !var1;
                    var1 = !var3;
                    if (!var3) {
                        _fun40577_ip = 112;
                        continue _fun40577
                    }
                case 107:
                    var1 = var2.enabled;
                case 112:
                    var0 = var1;
                case 115:
                    _fun40577_ip = 124;
                    continue _fun40577;
                case 117:
                    var0 = _closure2_slot2;
                case 124:
                    return var0;
            }
        };
        return var0;
    };
    var _closure1_slot14 = var3;
    var4 = global;
    var9 = var4.Object;
    var8 = var9.defineProperty;
    var7 = {};
    var0 = true;
    var7.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var7);
    var0 = 0;
    var7 = var6[var0];
    var0 = undefined;
    var7 = var10.bind(var0)(var7);
    var _closure1_slot3 = var7;
    var9 = 1;
    var8 = var6[var9];
    var7 = arg3;
    var7 = var7.bind(var0)(var8);
    var _closure1_slot4 = var7;
    var11 = 2;
    var7 = var6[var11];
    var7 = var10.bind(var0)(var7);
    var _closure1_slot5 = var7;
    var7 = 3;
    var7 = var6[var7];
    var7 = var10.bind(var0)(var7);
    var _closure1_slot6 = var7;
    var7 = 4;
    var7 = var6[var7];
    var7 = var5.bind(var0)(var7);
    var8 = var7.ACTIVITY_PLATFORM_TYPES;
    var _closure1_slot7 = var8;
    var7 = var7.PlatformTypes;
    var _closure1_slot8 = var7;
    var8 = 5;
    var8 = var6[var8];
    var8 = var5.bind(var0)(var8);
    var8 = var8.KeyboardKeysUpdated;
    var _closure1_slot9 = var8;
    var8 = {};
    var13 = var7.INSTAGRAM;
    var12 = ['1036753656588017764'];
    var8[var13] = var12;
    var _closure1_slot10 = var8;
    var13 = var4.Map;
    var8 = var7.INSTAGRAM;
    var12 = new Array(2);
    var12[0] = var8;
    var16 = var4.Date;
    var8 = var16.prototype;
    var14 = Object.create(var8, {
        constructor: {
            value: var16
        }
    });
    var19 = 2023;
    var17 = 18;
    var20 = var14;
    var18 = var9;
    var8 = new var20[var16](var19, var18, var17, var16);
    var14 = var8 instanceof Object ? var8 : var14;
    var8 = var14.getTime;
    var8 = var8.bind(var14)();
    var12[1] = var8;
    var8 = new Array(1);
    var8[0] = var12;
    var12 = var13.prototype;
    var12 = Object.create(var12, {
        constructor: {
            value: var13
        }
    });
    var20 = var12;
    var19 = var8;
    var8 = new var20[var13](var19, var18);
    var8 = var8 instanceof Object ? var8 : var12;
    var _closure1_slot11 = var8;
    var8 = 6;
    var8 = var6[var8];
    var8 = var10.bind(var0)(var8);
    var8 = var8.Millis;
    var10 = var8.DAY;
    var8 = 30;
    var8 = var8 * var10;
    var _closure1_slot12 = var8;
    var8 = var4.Map;
    var4 = var7.PLAYSTATION;
    var10 = new Array(2);
    var10[0] = var4;
    var10[1] = var11;
    var4 = new Array(5);
    var4[0] = var10;
    var12 = var7.XBOX;
    var10 = new Array(2);
    var10[0] = var12;
    var10[1] = var11;
    var4[1] = var10;
    var11 = var7.SPOTIFY;
    var10 = new Array(2);
    var10[0] = var11;
    var10[1] = var9;
    var4[2] = var10;
    var11 = var7.STEAM;
    var10 = new Array(2);
    var10[0] = var11;
    var10[1] = var9;
    var4[3] = var10;
    var10 = var7.TWITCH;
    var7 = new Array(2);
    var7[0] = var10;
    var7[1] = var9;
    var4[4] = var7;
    var7 = var8.prototype;
    var7 = Object.create(var7, {
        constructor: {
            value: var8
        }
    });
    var20 = var7;
    var19 = var4;
    var4 = new var20[var8](var19, var18);
    var4 = var4 instanceof Object ? var4 : var7;
    var _closure1_slot13 = var4;
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/connections/ConnectionsHooks.tsx';
    var4 = var5.bind(var6)(var4);
    var2.usePlatformAllowed = var3;
    var3 = function() { // Original name: usePlatforms, environment: var1
        var3 = _closure1_slot0;
        var4 = _closure1_slot2;
        var1 = 7;
        var1 = var4[var1];
        var5 = undefined;
        var6 = var3.bind(var5)(var1);
        var4 = var6.useStateFromStores;
        var1 = _closure1_slot5;
        var3 = new Array(1);
        var3[0] = var1;
        var1 = function() { // Environment: var0
            var1 = _closure1_slot5;
            var0 = var1.getAccounts;
            var0 = var0.bind(var1)();
            return var0;
        };
        var1 = var4.bind(var6)(var3, var1);
        var _closure2_slot0 = var1;
        var4 = _closure1_slot14;
        var3 = {};
        var6 = false;
        var3.forUserProfile = var6;
        var4 = var4.bind(var5)(var3);
        var _closure2_slot1 = var4;
        var3 = _closure1_slot4;
        var5 = var3.useMemo;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = function() { // Environment: var0
            var0 = global;
            var0 = var0.Set;
            var2 = var0.prototype;
            var2 = Object.create(var2, {
                constructor: {
                    value: var0
                }
            });
            var5 = var2;
            var0 = new var5[var0](var4);
            var0 = var0 instanceof Object ? var0 : var2;
            var _closure3_slot0 = var0;
            var3 = _closure2_slot0;
            var2 = var3.forEach;
            var1 = function(arg0) { // Environment: var1
                var2 = _closure3_slot0;
                var1 = var2.add;
                var0 = arg0;
                var0 = var0.type;
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var5 = var5.bind(var3)(var1, var2);
        var _closure2_slot2 = var5;
        var2 = var3.useMemo;
        var1 = new Array(2);
        var1[0] = var5;
        var1[1] = var4;
        var0 = function() { // Environment: var0
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var0 = 9;
            var0 = var6[var0];
            var1 = undefined;
            var3 = var5.bind(var1)(var0);
            var2 = var3.sortBy;
            var0 = 10;
            var0 = var6[var0];
            var5 = var5.bind(var1)(var0);
            var1 = var5.filter;
            var0 = _closure2_slot1;
            var1 = var1.bind(var5)(var0);
            var0 = new Array(5);
            var5 = function(arg0) { // Environment: var4
                _fun40583: for (var _fun40583_ip = 0;;) switch (_fun40583_ip) {
                    case 0:
                        var3 = arg0;
                        var4 = _closure1_slot11;
                        var2 = var4.has;
                        var0 = var3.type;
                        var0 = var2.bind(var4)(var0);
                        if (!var0) {
                            _fun40583_ip = 90;
                            continue _fun40583
                        }
                    case 28:
                        var2 = global;
                        var4 = var2.Date;
                        var2 = var4.now;
                        var2 = var2.bind(var4)();
                        var5 = _closure1_slot11;
                        var4 = var5.get;
                        var3 = var3.type;
                        var4 = var4.bind(var5)(var3);
                        var3 = null;
                        var5 = var3 != var4;
                        var3 = 0;
                        if (!var5) {
                            _fun40583_ip = 78;
                            continue _fun40583
                        }
                    case 75:
                        var3 = var4;
                    case 78:
                        var1 = _closure1_slot12;
                        var1 = var3 + var1;
                        var0 = var2 < var1;
                    case 90:
                        var0 = !var0;
                        return var0;
                }
            };
            var0[0] = var5;
            var5 = function(arg0) { // Environment: var4
                var2 = _closure2_slot2;
                var1 = var2.has;
                var0 = arg0;
                var0 = var0.type;
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var0[1] = var5;
            var5 = function(arg0) { // Environment: var4
                var0 = arg0;
                var0 = var0.hasMetadata;
                return var0;
            };
            var0[2] = var5;
            var5 = function(arg0) { // Environment: var4
                var2 = _closure1_slot7;
                var1 = var2.has;
                var0 = arg0;
                var0 = var0.type;
                var0 = var1.bind(var2)(var0);
                var0 = !var0;
                return var0;
            };
            var0[3] = var5;
            var4 = function(arg0) { // Environment: var4
                var0 = arg0;
                var0 = var0.name;
                return var0;
            };
            var0[4] = var4;
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.usePlatforms = var3;
    var3 = function() { // Original name: useEmptyStatePlatforms, environment: var1
        var4 = _closure1_slot14;
        var3 = {};
        var2 = false;
        var3.forUserProfile = var2;
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var _closure2_slot0 = var4;
        var3 = _closure1_slot4;
        var2 = var3.useMemo;
        var1 = new Array(1);
        var1[0] = var4;
        var0 = function() { // Environment: var0
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var0 = 9;
            var0 = var6[var0];
            var1 = undefined;
            var3 = var5.bind(var1)(var0);
            var2 = var3.sortBy;
            var0 = 10;
            var0 = var6[var0];
            var5 = var5.bind(var1)(var0);
            var1 = var5.filter;
            var0 = _closure2_slot0;
            var1 = var1.bind(var5)(var0);
            var0 = new Array(2);
            var5 = function(arg0) { // Environment: var4
                _fun40590: for (var _fun40590_ip = 0;;) switch (_fun40590_ip) {
                    case 0:
                        var2 = _closure1_slot13;
                        var1 = var2.get;
                        var0 = arg0;
                        var0 = var0.type;
                        var0 = var1.bind(var2)(var0);
                        var1 = null;
                        var2 = var1 != var0;
                        var1 = 0;
                        if (!var2) {
                            _fun40590_ip = 39;
                            continue _fun40590
                        }
                    case 36:
                        var1 = var0;
                    case 39:
                        var0 = -1;
                        var0 = var0 * var1;
                        return var0;
                }
            };
            var0[0] = var5;
            var4 = function(arg0) { // Environment: var4
                var0 = arg0;
                var0 = var0.name;
                return var0;
            };
            var0[1] = var4;
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.useEmptyStatePlatforms = var3;
    var1 = function(arg0) { // Original name: useLegacyPlatformType, environment: var1
        _fun40592: for (var _fun40592_ip = 0;;) switch (_fun40592_ip) {
            case 0:
                var3 = arg0;
                var1 = function(arg0) { // Original name: handleKeyDown, environment: var0
                    _fun40593: for (var _fun40593_ip = 0;;) switch (_fun40593_ip) {
                        case 0:
                            var0 = arg0;
                            var1 = var0.key;
                            var0 = _closure1_slot9;
                            var0 = var0.SHIFT;
                            if (!(var1 === var0)) {
                                _fun40593_ip = 41;
                                continue _fun40593
                            }
                        case 25:
                            var2 = _closure2_slot0;
                            var1 = undefined;
                            var0 = true;
                            var0 = var2.bind(var1)(var0);
                        case 41:
                            var0 = undefined;
                            return var0;
                    }
                };
                var _closure2_slot1 = var1;
                var1 = function(arg0) { // Original name: handleKeyUp, environment: var0
                    _fun40594: for (var _fun40594_ip = 0;;) switch (_fun40594_ip) {
                        case 0:
                            var0 = arg0;
                            var1 = var0.key;
                            var0 = _closure1_slot9;
                            var0 = var0.SHIFT;
                            if (!(var1 === var0)) {
                                _fun40594_ip = 41;
                                continue _fun40594
                            }
                        case 25:
                            var2 = _closure2_slot0;
                            var1 = undefined;
                            var0 = false;
                            var0 = var2.bind(var1)(var0);
                        case 41:
                            var0 = undefined;
                            return var0;
                    }
                };
                var _closure2_slot2 = var1;
                var6 = _closure1_slot4;
                var4 = var6.useState;
                var2 = false;
                var7 = var4.bind(var6)(var2);
                var5 = _closure1_slot3;
                var4 = undefined;
                var2 = 2;
                var5 = var5.bind(var4)(var7, var2);
                var2 = 0;
                var2 = var5[var2];
                var4 = 1;
                var4 = var5[var4];
                var _closure2_slot0 = var4;
                var5 = var6.useEffect;
                var4 = function() { // Environment: var0
                    var1 = global;
                    var5 = var1.window;
                    var4 = var5.addEventListener;
                    var3 = _closure2_slot1;
                    var2 = 'keydown';
                    var2 = var4.bind(var5)(var2, var3);
                    var3 = var1.window;
                    var2 = var3.addEventListener;
                    var1 = _closure2_slot2;
                    var0 = 'keyup';
                    var0 = var2.bind(var3)(var0, var1);
                    var0 = function() { // Environment: var0
                        var1 = global;
                        var5 = var1.window;
                        var4 = var5.removeEventListener;
                        var3 = _closure2_slot1;
                        var2 = 'keydown';
                        var2 = var4.bind(var5)(var2, var3);
                        var3 = var1.window;
                        var2 = var3.removeEventListener;
                        var1 = _closure2_slot2;
                        var0 = 'keyup';
                        var0 = var2.bind(var3)(var0, var1);
                        var0 = undefined;
                        return var0;
                    };
                    return var0;
                };
                var0 = new Array(0);
                var0 = var5.bind(var6)(var4, var0);
                var0 = var3;
                if (!var2) {
                    _fun40592_ip = 127;
                    continue _fun40592
                }
            case 100:
                var2 = _closure1_slot8;
                var2 = var2.TWITTER;
                var0 = var3;
                if (!(var0 === var2)) {
                    _fun40592_ip = 127;
                    continue _fun40592
                }
            case 117:
                var1 = _closure1_slot8;
                var0 = var1.TWITTER_LEGACY;
            case 127:
                return var0;
        }
    };
    var2.useLegacyPlatformType = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 4482, 1613, 660, 4489, 667, 566, 4491, 22, 4358, 2]);