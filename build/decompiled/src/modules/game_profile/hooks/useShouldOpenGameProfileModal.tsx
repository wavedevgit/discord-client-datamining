// modules/game_profile/hooks/useShouldOpenGameProfileModal.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var4 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var _closure1_slot2 = var6;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var7 = var6[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var4 = var3.AnalyticEvents;
    var _closure1_slot6 = var4;
    var3 = var3.ApplicationFlags;
    var _closure1_slot7 = var3;
    var3 = {};
    var4 = 'no match';
    var3.NoMatch = var4;
    var4 = 'nsfw';
    var3.NSFW = var4;
    var4 = 'no summary';
    var3.NoSummary = var4;
    var4 = 'no release date';
    var3.NoReleaseDate = var4;
    var4 = 'no cover image';
    var3.NoCoverImage = var4;
    var4 = 'profile disabled';
    var3.Disabled = var4;
    var _closure1_slot8 = var3;
    var3 = function arg0, arg1() {
        _fun78974: for (var _fun78974_ip = 0;;) switch (_fun78974_ip) {
            case 0:
                var0 = arg0;
                var3 = arg1;
                var1 = new Array(0);
                var4 = null;
                if (!(var4 != var0)) {
                    _fun78974_ip = 286;
                    continue _fun78974
                }
            case 19:
                if (!(var4 != var3)) {
                    _fun78974_ip = 286;
                    continue _fun78974
                }
            case 26:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var5 = 5;
                var5 = var7[var5];
                var8 = undefined;
                var7 = var6.bind(var8)(var5);
                var6 = var7.hasFlag;
                var5 = var3.flags;
                var3 = _closure1_slot7;
                var3 = var3.GAME_PROFILE_DISABLED;
                var3 = var6.bind(var7)(var5, var3);
                if (!var3) {
                    _fun78974_ip = 101;
                    continue _fun78974
                }
            case 81:
                var5 = var1.push;
                var3 = _closure1_slot8;
                var3 = var3.Disabled;
                var3 = var5.bind(var1)(var3);
            case 101:
                var6 = var0.themes;
                var5 = var6.includes;
                var7 = _closure1_slot0;
                var9 = _closure1_slot2;
                var3 = 6;
                var3 = var9[var3];
                var3 = var7.bind(var8)(var3);
                var3 = var3.ThirdPartyGameApplicationThemes;
                var3 = var3.EROTIC;
                var3 = var5.bind(var6)(var3);
                if (!var3) {
                    _fun78974_ip = 172;
                    continue _fun78974
                }
            case 152:
                var5 = var1.push;
                var3 = _closure1_slot8;
                var3 = var3.NSFW;
                var3 = var5.bind(var1)(var3);
            case 172:
                var3 = var0.summary;
                var3 = var4 != var3;
                if (!var3) {
                    _fun78974_ip = 202;
                    continue _fun78974
                }
            case 185:
                var5 = var0.summary;
                var6 = var5.length;
                var5 = 0;
                var3 = var5 !== var6;
            case 202:
                if (var3) {
                    _fun78974_ip = 225;
                    continue _fun78974
                }
            case 205:
                var5 = var1.push;
                var3 = _closure1_slot8;
                var3 = var3.NoSummary;
                var3 = var5.bind(var1)(var3);
            case 225:
                var3 = var0.summary;
                var3 = var4 != var3;
                if (!var3) {
                    _fun78974_ip = 255;
                    continue _fun78974
                }
            case 238:
                var0 = var0.summary;
                var4 = var0.length;
                var0 = 0;
                var3 = var0 !== var4;
            case 255:
                var0 = var1;
                if (var3) {
                    _fun78974_ip = 310;
                    continue _fun78974
                }
            case 261:
                var3 = var1.push;
                var2 = _closure1_slot8;
                var2 = var2.NoSummary;
                var2 = var3.bind(var1)(var2);
                var0 = var1;
                _fun78974_ip = 310;
                continue _fun78974;
            case 286:
                var1 = _closure1_slot8;
                var2 = var1.NoMatch;
                var1 = new Array(1);
                var1[0] = var2;
                var0 = var1;
            case 310:
                return var0;
        }
    };
    var _closure1_slot9 = var3;
    var3 = function arg0, arg1() {
        var3 = _closure1_slot9;
        var2 = undefined;
        var1 = arg0;
        var0 = arg1;
        var0 = var3.bind(var2)(var1, var0);
        var1 = var0.length;
        var0 = 0;
        var0 = var0 === var1;
        return var0;
    };
    var _closure1_slot10 = var3;
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/game_profile/hooks/useShouldOpenGameProfileModal.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function arg0() {
        _fun78976: for (var _fun78976_ip = 0;;) switch (_fun78976_ip) {
            case 0:
                var2 = arg0;
                var11 = var2.location;
                var1 = var2.applicationId;
                var6 = undefined;
                if (!(var1 === var6)) {
                    _fun78976_ip = 25;
                    continue _fun78976
                }
            case 21:
                var1 = '';
            case 25:
                var _closure2_slot0 = var1;
                var10 = var2.autoTrackExposure;
                if (!(var10 === var6)) {
                    _fun78976_ip = 41;
                    continue _fun78976
                }
            case 39:
                var10 = true;
            case 41:
                var8 = var2.source;
                var _closure2_slot1 = var8;
                var7 = var2.trackEntryPointImpression;
                if (!(var7 === var6)) {
                    _fun78976_ip = 64;
                    continue _fun78976
                }
            case 62:
                var7 = true;
            case 64:
                var _closure2_slot2 = var7;
                var _closure2_slot3 = var6;
                var _closure2_slot4 = var6;
                var _closure2_slot5 = var6;
                var _closure2_slot6 = var6;
                var _closure2_slot7 = var6;
                var5 = _closure1_slot3;
                var3 = var5.useRef;
                var2 = false;
                var2 = var3.bind(var5)(var2);
                _closure2_slot3 = var2;
                var5 = _closure1_slot0;
                var9 = _closure1_slot2;
                var2 = 7;
                var2 = var9[var2];
                var3 = var5.bind(var6)(var2);
                var2 = var3.useCanSeeGameProfile;
                var2 = var2.bind(var3)(var11, var10);
                _closure2_slot4 = var2;
                var3 = 8;
                var3 = var9[var3];
                var9 = var5.bind(var6)(var3);
                var5 = var9.useRequestDetectableGameSupplementalData;
                var3 = null;
                if (!var2) {
                    _fun78976_ip = 183;
                    continue _fun78976
                }
            case 170:
                var10 = '';
                var3 = null;
                if (!(var10 !== var1)) {
                    _fun78976_ip = 183;
                    continue _fun78976
                }
            case 180:
                var3 = var1;
            case 183:
                var3 = var5.bind(var9)(var3);
                var5 = _closure1_slot0;
                var10 = _closure1_slot2;
                var3 = 9;
                var3 = var10[var3];
                var12 = var5.bind(var6)(var3);
                var11 = var12.useStateFromStores;
                var3 = _closure1_slot5;
                var9 = new Array(1);
                var9[0] = var3;
                var3 = function() { // Environment: var0
                    var2 = _closure1_slot5;
                    var1 = var2.getGame;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var9 = var11.bind(var12)(var9, var3);
                _closure2_slot5 = var9;
                var3 = 10;
                var3 = var10[var3];
                var5 = var5.bind(var6)(var3);
                var3 = var5.useGetOrFetchApplicationBatched;
                var3 = var3.bind(var5)(var1);
                _closure2_slot6 = var3;
                var6 = _closure1_slot3;
                var5 = var6.useMemo;
                var4 = new Array(2);
                var4[0] = var3;
                var4[1] = var9;
                var3 = function() { // Environment: var0
                    _fun78978: for (var _fun78978_ip = 0;;) switch (_fun78978_ip) {
                        case 0:
                            var0 = _closure2_slot5;
                            var3 = null;
                            var2 = var3 != var0;
                            var0 = null;
                            if (!var2) {
                                _fun78978_ip = 54;
                                continue _fun78978
                            }
                        case 18:
                            var2 = _closure2_slot6;
                            var2 = var3 != var2;
                            var0 = null;
                            if (!var2) {
                                _fun78978_ip = 54;
                                continue _fun78978
                            }
                        case 31:
                            var4 = _closure1_slot10;
                            var3 = _closure2_slot5;
                            var2 = _closure2_slot6;
                            var1 = undefined;
                            var0 = var4.bind(var1)(var3, var2);
                        case 54:
                            return var0;
                    }
                };
                var4 = var5.bind(var6)(var3, var4);
                _closure2_slot7 = var4;
                var5 = var6.useEffect;
                var3 = new Array(6);
                var3[0] = var4;
                var3[1] = var1;
                var3[2] = var2;
                var3[3] = var9;
                var3[4] = var8;
                var3[5] = var7;
                var0 = function() { // Environment: var0
                    _fun78979: for (var _fun78979_ip = 0;;) switch (_fun78979_ip) {
                        case 0:
                            var1 = _closure2_slot3;
                            var1 = var1.current;
                            if (var1) {
                                _fun78979_ip = 240;
                                continue _fun78979
                            }
                        case 18:
                            var1 = _closure2_slot4;
                            if (!var1) {
                                _fun78979_ip = 240;
                                continue _fun78979
                            }
                        case 28:
                            var1 = _closure2_slot2;
                            if (!var1) {
                                _fun78979_ip = 240;
                                continue _fun78979
                            }
                        case 38:
                            var4 = _closure1_slot5;
                            var3 = var4.isFetching;
                            var2 = _closure2_slot0;
                            var3 = var3.bind(var4)(var2);
                            var2 = false;
                            if (!(var2 === var3)) {
                                _fun78979_ip = 240;
                                continue _fun78979
                            }
                        case 69:
                            var3 = _closure2_slot5;
                            var2 = null;
                            if (!(var2 != var3)) {
                                _fun78979_ip = 240;
                                continue _fun78979
                            }
                        case 82:
                            var3 = _closure2_slot7;
                            if (!(var2 != var3)) {
                                _fun78979_ip = 240;
                                continue _fun78979
                            }
                        case 93:
                            var5 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var3 = 11;
                            var3 = var4[var3];
                            var4 = undefined;
                            var6 = var5.bind(var4)(var3);
                            var5 = _closure2_slot1;
                            var3 = var2 != var5;
                            var2 = 'Cannot track a Game Profile Entry Point Impressions without a source.';
                            var2 = var6.bind(var4)(var3, var2);
                            var3 = _closure1_slot9;
                            var2 = _closure2_slot5;
                            var6 = var3.bind(var4)(var2);
                            var8 = _closure2_slot7;
                            var7 = _closure2_slot0;
                            if (!(var6 === var4)) {
                                _fun78979_ip = 164;
                                continue _fun78979
                            }
                        case 160:
                            var6 = new Array(0);
                        case 164:
                            var3 = _closure1_slot1;
                            var9 = _closure1_slot2;
                            var2 = 4;
                            var2 = var9[var2];
                            var4 = var3.bind(var4)(var2);
                            var3 = var4.track;
                            var1 = _closure1_slot6;
                            var2 = var1.GAME_PROFILE_ENTRY_POINT_AVAILABLE;
                            var1 = {};
                            var1.game_profile_available = var8;
                            var1.application_id = var7;
                            var1.rejection_reason = var6;
                            var1.source = var5;
                            var1 = var3.bind(var4)(var2, var1);
                            var1 = _closure2_slot3;
                            var0 = true;
                            var1.current = var0;
                        case 240:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var5.bind(var6)(var0, var3);
                var0 = {};
                if (!var2) {
                    _fun78976_ip = 364;
                    continue _fun78976
                }
            case 358:
                var3 = true;
                var2 = var3 === var4;
            case 364:
                var0.shouldOpenGameProfile = var2;
                var0.applicationId = var1;
                return var0;
        }
    };
    var2.default = var4;
    var2.gameIsAcceptable = var3;
    var1 = function(arg0) { // Environment: var1
        var4 = arg0;
        var2 = _closure1_slot5;
        var1 = var2.getGame;
        var3 = var1.bind(var2)(var4);
        var2 = _closure1_slot4;
        var1 = var2.getApplication;
        var2 = var1.bind(var2)(var4);
        var1 = _closure1_slot10;
        var0 = undefined;
        var0 = var1.bind(var0)(var3, var2);
        return var0;
    };
    var2.gameIdIsAcceptable = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 3454, 4671, 660, 795, 1384, 10051, 10052, 7840, 566, 10049, 44, 2]);