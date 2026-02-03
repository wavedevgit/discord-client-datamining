// modules/user_profile/UserProfileAnalyticsContext.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var7 = var3.bind(var0)(var6);
    var _closure1_slot3 = var7;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot4 = var3;
    var6 = var7.createContext;
    var3 = null;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot5 = var3;
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_profile/UserProfileAnalyticsContext.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function(arg0) { // Environment: var1
        _fun57177: for (var _fun57177_ip = 0;;) switch (_fun57177_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.value;
                var4 = var0.children;
                var2 = var0.openedAt;
                var _closure2_slot0 = var2;
                var2 = var0.fetchStartedAt;
                var _closure2_slot1 = var2;
                var2 = var0.fetchEndedAt;
                var _closure2_slot2 = var2;
                var8 = var0.isLoaded;
                var3 = undefined;
                if (!(var8 === var3)) {
                    _fun57177_ip = 59;
                    continue _fun57177
                }
            case 57:
                var8 = false;
            case 59:
                var _closure2_slot3 = var8;
                var _closure2_slot4 = var3;
                var _closure2_slot5 = var3;
                var _closure2_slot6 = var3;
                var6 = _closure1_slot1;
                var7 = _closure1_slot2;
                var2 = 2;
                var2 = var7[var2];
                var2 = var6.bind(var3)(var2);
                var2 = var2.bind(var3)();
                var2 = var2.analyticsLocations;
                var7 = _closure1_slot3;
                var6 = var7.useRef;
                var6 = var6.bind(var7)(var3);
                _closure2_slot4 = var6;
                var6 = {};
                var6.analyticsLocations = var2;
                var6.value = var5;
                _closure2_slot5 = var6;
                var2 = var7.useRef;
                var2 = var2.bind(var7)(var6);
                _closure2_slot6 = var2;
                var6 = var7.useEffect;
                var2 = function() { // Environment: var1
                    var1 = _closure2_slot6;
                    var0 = _closure2_slot5;
                    var1.current = var0;
                    var0 = undefined;
                    return var0;
                };
                var2 = var6.bind(var7)(var2);
                var6 = var7.useEffect;
                var2 = new Array(1);
                var2[0] = var8;
                var1 = function() { // Environment: var1
                    _fun57179: for (var _fun57179_ip = 0;;) switch (_fun57179_ip) {
                        case 0:
                            var0 = global;
                            var1 = var0.Date;
                            var0 = var1.now;
                            var10 = var0.bind(var1)();
                            var0 = _closure2_slot4;
                            var0 = var0.current;
                            var9 = null;
                            var0 = var9 == var0;
                            if (!var0) {
                                _fun57179_ip = 46;
                                continue _fun57179
                            }
                        case 38:
                            var1 = _closure2_slot0;
                            var0 = var9 != var1;
                        case 46:
                            if (!var0) {
                                _fun57179_ip = 67;
                                continue _fun57179
                            }
                        case 49:
                            var1 = _closure2_slot4;
                            var0 = _closure2_slot0;
                            var0 = var10 - var0;
                            var1.current = var0;
                        case 67:
                            var0 = _closure2_slot3;
                            if (!var0) {
                                _fun57179_ip = 305;
                                continue _fun57179
                            }
                        case 77:
                            var0 = _closure2_slot6;
                            var0 = var0.current;
                            var4 = var0.analyticsLocations;
                            var3 = var0.value;
                            var1 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var0 = 3;
                            var6 = var2[var0];
                            var8 = undefined;
                            var11 = var1.bind(var8)(var6);
                            var7 = var11.trackUserProfileAction;
                            var6 = {};
                            var12 = 'VIEW';
                            var6.action = var12;
                            var6.analyticsLocations = var4;
                            var14 = var6;
                            var13 = var3;
                            var12 = copyDataProperties(var14, var13);
                            var6 = var7.bind(var11)(var6);
                            var0 = var2[var0];
                            var2 = var1.bind(var8)(var0);
                            var1 = var2.maybeTrackUserProfileUiViewed;
                            var0 = {};
                            var6 = 'USER_PROFILE';
                            var0.profileUi = var6;
                            var6 = _closure2_slot4;
                            var6 = var6.current;
                            var0.timeToInteractiveMs = var6;
                            var6 = _closure2_slot0;
                            var7 = var9 != var6;
                            var6 = undefined;
                            if (!var7) {
                                _fun57179_ip = 219;
                                continue _fun57179
                            }
                        case 211:
                            var7 = _closure2_slot0;
                            var6 = var10 - var7;
                        case 219:
                            var0.timeToLoadMs = var6;
                            var6 = _closure2_slot1;
                            var7 = var9 != var6;
                            var6 = undefined;
                            if (!var7) {
                                _fun57179_ip = 262;
                                continue _fun57179
                            }
                        case 237:
                            var7 = _closure2_slot2;
                            var7 = var9 != var7;
                            var6 = undefined;
                            if (!var7) {
                                _fun57179_ip = 262;
                                continue _fun57179
                            }
                        case 250:
                            var8 = _closure2_slot2;
                            var7 = _closure2_slot1;
                            var6 = var8 - var7;
                        case 262:
                            var0.timeToFetchMs = var6;
                            var6 = _closure2_slot0;
                            var0.viewStartedAt = var6;
                            var5 = _closure2_slot1;
                            var0.fetchStartedAt = var5;
                            var0.analyticsLocations = var4;
                            var14 = var0;
                            var13 = var3;
                            var3 = copyDataProperties(var14, var13);
                            var0 = var1.bind(var2)(var0);
                        case 305:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var6.bind(var7)(var1, var2);
                var2 = _closure1_slot4;
                var0 = _closure1_slot5;
                var1 = var0.Provider;
                var0 = {};
                var0.value = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.UserProfileAnalyticsProvider = var3;
    var3 = function(arg0) { // Environment: var1
        _fun57180: for (var _fun57180_ip = 0;;) switch (_fun57180_ip) {
            case 0:
                var1 = arg0;
                var11 = var1.layout;
                var _closure2_slot0 = var11;
                var10 = var1.userId;
                var _closure2_slot1 = var10;
                var9 = var1.guildId;
                var _closure2_slot2 = var9;
                var8 = var1.channelId;
                var _closure2_slot3 = var8;
                var7 = var1.messageId;
                var _closure2_slot4 = var7;
                var6 = var1.roleId;
                var _closure2_slot5 = var6;
                var5 = var1.sourceSessionId;
                var _closure2_slot6 = var5;
                var4 = var1.showGuildProfile;
                var12 = undefined;
                if (!(var4 === var12)) {
                    _fun57180_ip = 85;
                    continue _fun57180
                }
            case 83:
                var4 = true;
            case 85:
                var _closure2_slot7 = var4;
                var _closure2_slot8 = var12;
                var13 = _closure1_slot3;
                var3 = var13.useContext;
                var2 = _closure1_slot5;
                var2 = var3.bind(var13)(var2);
                var3 = null;
                var3 = var3 == var2;
                var12 = undefined;
                if (var3) {
                    _fun57180_ip = 132;
                    continue _fun57180
                }
            case 126:
                var12 = var2.sessionId;
            case 132:
                _closure2_slot8 = var12;
                var3 = _closure1_slot3;
                var2 = var3.useMemo;
                var1 = new Array(9);
                var1[0] = var12;
                var1[1] = var11;
                var1[2] = var10;
                var1[3] = var9;
                var1[4] = var8;
                var1[5] = var7;
                var1[6] = var6;
                var1[7] = var5;
                var1[8] = var4;
                var0 = function() { // Environment: var0
                    _fun57181: for (var _fun57181_ip = 0;;) switch (_fun57181_ip) {
                        case 0:
                            var0 = {};
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 4;
                            var2 = var2[var1];
                            var1 = undefined;
                            var2 = var3.bind(var1)(var2);
                            var1 = var2.v4;
                            var1 = var1.bind(var2)();
                            var0.sessionId = var1;
                            var3 = _closure2_slot6;
                            var2 = null;
                            if (!(var2 == var3)) {
                                _fun57181_ip = 61;
                                continue _fun57181
                            }
                        case 55:
                            var2 = _closure2_slot8;
                            _fun57181_ip = 65;
                            continue _fun57181;
                        case 61:
                            var2 = _closure2_slot6;
                        case 65:
                            var0.sourceSessionId = var2;
                            var2 = _closure2_slot0;
                            var0.layout = var2;
                            var2 = _closure2_slot1;
                            var0.userId = var2;
                            var2 = _closure2_slot2;
                            var0.guildId = var2;
                            var2 = _closure2_slot3;
                            var0.channelId = var2;
                            var2 = _closure2_slot4;
                            var0.messageId = var2;
                            var2 = _closure2_slot5;
                            var0.roleId = var2;
                            var1 = _closure2_slot7;
                            var0.showGuildProfile = var1;
                            return var0;
                    }
                };
                var0 = var2.bind(var3)(var0, var1);
                return var0;
        }
    };
    var2.useCreateUserProfileAnalyticsContext = var3;
    var1 = function() { // Environment: var1
        var4 = _closure1_slot3;
        var3 = var4.useContext;
        var2 = _closure1_slot5;
        var6 = var3.bind(var4)(var2);
        var _closure2_slot0 = var6;
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var0 = 2;
        var0 = var2[var0];
        var2 = undefined;
        var0 = var3.bind(var2)(var0);
        var0 = var0.bind(var2)();
        var5 = var0.analyticsLocations;
        var _closure2_slot1 = var5;
        var0 = {};
        var0.context = var6;
        var7 = var4.useCallback;
        var3 = new Array(2);
        var3[0] = var6;
        var3[1] = var5;
        var2 = function(arg0) { // Environment: var1
            _fun57183: for (var _fun57183_ip = 0;;) switch (_fun57183_ip) {
                case 0:
                    var1 = _closure2_slot0;
                    var0 = null;
                    if (!(var0 != var1)) {
                        _fun57183_ip = 81;
                        continue _fun57183
                    }
                case 13:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 3;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.trackUserProfileAction;
                    var0 = {};
                    var4 = _closure2_slot1;
                    var0.analyticsLocations = var4;
                    var5 = _closure2_slot0;
                    var6 = var0;
                    var3 = copyDataProperties(var6, var5);
                    var5 = arg0;
                    var6 = var0;
                    var3 = copyDataProperties(var6, var5);
                    var0 = var1.bind(var2)(var0);
                case 81:
                    var0 = undefined;
                    return var0;
            }
        };
        var2 = var7.bind(var4)(var2, var3);
        var0.trackUserProfileAction = var2;
        var7 = var4.useCallback;
        var3 = new Array(2);
        var3[0] = var6;
        var3[1] = var5;
        var2 = function(arg0) { // Environment: var1
            _fun57184: for (var _fun57184_ip = 0;;) switch (_fun57184_ip) {
                case 0:
                    var1 = _closure2_slot0;
                    var0 = null;
                    if (!(var0 != var1)) {
                        _fun57184_ip = 81;
                        continue _fun57184
                    }
                case 13:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 3;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.trackUserProfileEditAction;
                    var0 = {};
                    var4 = _closure2_slot1;
                    var0.analyticsLocations = var4;
                    var5 = _closure2_slot0;
                    var6 = var0;
                    var3 = copyDataProperties(var6, var5);
                    var5 = arg0;
                    var6 = var0;
                    var3 = copyDataProperties(var6, var5);
                    var0 = var1.bind(var2)(var0);
                case 81:
                    var0 = undefined;
                    return var0;
            }
        };
        var2 = var7.bind(var4)(var2, var3);
        var0.trackUserProfileEditAction = var2;
        var7 = var4.useCallback;
        var3 = new Array(2);
        var3[0] = var6;
        var3[1] = var5;
        var2 = function(arg0) { // Environment: var1
            _fun57185: for (var _fun57185_ip = 0;;) switch (_fun57185_ip) {
                case 0:
                    var1 = _closure2_slot0;
                    var0 = null;
                    if (!(var0 != var1)) {
                        _fun57185_ip = 81;
                        continue _fun57185
                    }
                case 13:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 3;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.trackUserProfileEditSaved;
                    var0 = {};
                    var4 = _closure2_slot1;
                    var0.analyticsLocations = var4;
                    var5 = _closure2_slot0;
                    var6 = var0;
                    var3 = copyDataProperties(var6, var5);
                    var5 = arg0;
                    var6 = var0;
                    var3 = copyDataProperties(var6, var5);
                    var0 = var1.bind(var2)(var0);
                case 81:
                    var0 = undefined;
                    return var0;
            }
        };
        var2 = var7.bind(var4)(var2, var3);
        var0.trackUserProfileEditSaved = var2;
        var3 = var4.useCallback;
        var2 = new Array(2);
        var2[0] = var6;
        var2[1] = var5;
        var1 = function(arg0) { // Environment: var1
            _fun57186: for (var _fun57186_ip = 0;;) switch (_fun57186_ip) {
                case 0:
                    var1 = _closure2_slot0;
                    var0 = null;
                    if (!(var0 != var1)) {
                        _fun57186_ip = 81;
                        continue _fun57186
                    }
                case 13:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 3;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.trackUserProfileWishlistAction;
                    var0 = {};
                    var4 = _closure2_slot1;
                    var0.analyticsLocations = var4;
                    var5 = _closure2_slot0;
                    var6 = var0;
                    var3 = copyDataProperties(var6, var5);
                    var5 = arg0;
                    var6 = var0;
                    var3 = copyDataProperties(var6, var5);
                    var0 = var1.bind(var2)(var0);
                case 81:
                    var0 = undefined;
                    return var0;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        var0.trackUserProfileWishlistAction = var1;
        return var0;
    };
    var2.useUserProfileAnalyticsContext = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 33, 5726, 6972, 491, 2]);