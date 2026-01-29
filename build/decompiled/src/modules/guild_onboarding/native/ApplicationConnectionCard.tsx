// modules/guild_onboarding/native/ApplicationConnectionCard.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var7 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AnalyticEvents;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot6 = var3;
    var3 = 13;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_onboarding/native/ApplicationConnectionCard.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: ApplicationConnectionCard, environment: var1
        _fun77386: for (var _fun77386_ip = 0;;) switch (_fun77386_ip) {
            case 0:
                var1 = arg0;
                var9 = var1.connection;
                var _closure2_slot0 = var9;
                var16 = var1.guildId;
                var _closure2_slot1 = var16;
                var15 = var1.location;
                var _closure2_slot2 = var15;
                var3 = undefined;
                var _closure2_slot5 = var3;
                var2 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 4;
                var1 = var5[var1];
                var8 = var2.bind(var3)(var1);
                var7 = var8.useStateFromStores;
                var1 = _closure1_slot4;
                var6 = new Array(1);
                var6[0] = var1;
                var1 = var9.application_id;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var0
                    _fun77387: for (var _fun77387_ip = 0;;) switch (_fun77387_ip) {
                        case 0:
                            var0 = _closure2_slot0;
                            var2 = var0.application_id;
                            var0 = null;
                            var2 = var0 != var2;
                            if (!var2) {
                                _fun77387_ip = 50;
                                continue _fun77387
                            }
                        case 22:
                            var3 = _closure1_slot4;
                            var2 = var3.getApplication;
                            var1 = _closure2_slot0;
                            var1 = var1.application_id;
                            var0 = var2.bind(var3)(var1);
                        case 50:
                            return var0;
                    }
                };
                var19 = var7.bind(var8)(var6, var1, var2);
                var _closure2_slot3 = var19;
                var2 = _closure1_slot1;
                var1 = 5;
                var1 = var5[var1];
                var1 = var2.bind(var3)(var1);
                var1 = var1.bind(var3)(var15);
                var14 = var1.analyticsLocations;
                var _closure2_slot4 = var14;
                var6 = _closure1_slot3;
                var5 = var6.useEffect;
                var2 = new Array(2);
                var2[0] = var19;
                var1 = var9.application_id;
                var2[1] = var1;
                var1 = function() { // Environment: var0
                    _fun77388: for (var _fun77388_ip = 0;;) switch (_fun77388_ip) {
                        case 0:
                            var1 = _closure2_slot3;
                            var3 = null;
                            var1 = var3 != var1;
                            if (var1) {
                                _fun77388_ip = 30;
                                continue _fun77388
                            }
                        case 16:
                            var2 = _closure2_slot0;
                            var2 = var2.application_id;
                            var1 = var3 == var2;
                        case 30:
                            if (var1) {
                                _fun77388_ip = 61;
                                continue _fun77388
                            }
                        case 33:
                            var4 = _closure1_slot4;
                            var3 = var4.isFetchingApplication;
                            var2 = _closure2_slot0;
                            var2 = var2.application_id;
                            var1 = var3.bind(var4)(var2);
                        case 61:
                            if (var1) {
                                _fun77388_ip = 92;
                                continue _fun77388
                            }
                        case 64:
                            var4 = _closure1_slot4;
                            var3 = var4.didFetchingApplicationFail;
                            var2 = _closure2_slot0;
                            var2 = var2.application_id;
                            var1 = var3.bind(var4)(var2);
                        case 92:
                            if (var1) {
                                _fun77388_ip = 161;
                                continue _fun77388
                            }
                        case 95:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 6;
                            var2 = var2[var1];
                            var1 = undefined;
                            var2 = var3.bind(var1)(var2);
                            var1 = var2.fetchApplication;
                            var0 = _closure2_slot0;
                            var0 = var0.application_id;
                            var2 = var1.bind(var2)(var0);
                            var1 = var2.catch;
                            var0 = function() { // Environment: var0
                                var0 = undefined;
                                return var0;
                            };
                            var0 = var1.bind(var2)(var0);
                        case 161:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var5.bind(var6)(var1, var2);
                var1 = null;
                var2 = var1 == var19;
                var10 = undefined;
                if (var2) {
                    _fun77386_ip = 198;
                    continue _fun77386
                }
            case 193:
                var10 = var19.name;
            case 198:
                if (!(var1 == var10)) {
                    _fun77386_ip = 259;
                    continue _fun77386
                }
            case 202:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 7;
                var2 = var7[var1];
                var2 = var6.bind(var3)(var2);
                var5 = var2.intl;
                var2 = var5.string;
                var1 = var7[var1];
                var1 = var6.bind(var3)(var1);
                var1 = var1.t;
                var1 = var1.cgPbaZ;
                var10 = var2.bind(var5)(var1);
            case 259:
                var18 = _closure1_slot0;
                var11 = _closure1_slot2;
                var1 = 8;
                var1 = var11[var1];
                var2 = var18.bind(var3)(var1);
                var1 = var2.useStartAuthorize;
                var1 = var1.bind(var2)(var19);
                var6 = var1.hasAlreadyLinked;
                var5 = var1.canStartAuthorization;
                var17 = var1.startAuthorization;
                _closure2_slot5 = var17;
                var7 = var1.fetched;
                var2 = _closure1_slot6;
                var1 = _closure1_slot1;
                var13 = 9;
                var8 = var11[var13];
                var12 = var1.bind(var3)(var8);
                var8 = {};
                var8.game = var19;
                var13 = var11[var13];
                var13 = var18.bind(var3)(var13);
                var13 = var13.GameIconSizes;
                var13 = var13.SMALL;
                var8.size = var13;
                var8 = var2.bind(var3)(var12, var8);
                var13 = _closure1_slot3;
                var12 = var13.useCallback;
                var4 = new Array(5);
                var4[0] = var17;
                var4[1] = var16;
                var16 = var9.application_id;
                var4[2] = var16;
                var4[3] = var15;
                var4[4] = var14;
                var0 = function() { // Environment: var0
                    _fun77390: for (var _fun77390_ip = 0;;) switch (_fun77390_ip) {
                        case 0:
                            var2 = _closure1_slot1;
                            var7 = _closure1_slot2;
                            var0 = 10;
                            var1 = var7[var0];
                            var0 = undefined;
                            var5 = var2.bind(var0)(var1);
                            var4 = var5.track;
                            var1 = _closure1_slot5;
                            var2 = var1.GUILD_ONBOARDING_CONNECTION_CLICKED;
                            var1 = {};
                            var6 = _closure1_slot0;
                            var3 = 11;
                            var3 = var7[var3];
                            var8 = var6.bind(var0)(var3);
                            var7 = var8.collectGuildAnalyticsMetadata;
                            var6 = _closure2_slot1;
                            var9 = var7.bind(var8)(var6);
                            var10 = var1;
                            var6 = copyDataProperties(var10, var9);
                            var7 = 'application';
                            var6 = 'connection_type';
                            var1[var6] = var7;
                            var6 = _closure2_slot0;
                            var6 = var6.application_id;
                            var7 = null;
                            var8 = var7 != var6;
                            var7 = undefined;
                            if (!var8) {
                                _fun77390_ip = 120;
                                continue _fun77390
                            }
                        case 117:
                            var7 = var6;
                        case 120:
                            var6 = 'application_id';
                            var1[var6] = var7;
                            var7 = _closure2_slot2;
                            var6 = 'location';
                            var1[var6] = var7;
                            var1 = var4.bind(var5)(var2, var1);
                            var2 = _closure2_slot5;
                            var1 = {};
                            var3 = _closure2_slot4;
                            var1.analyticsLocations = var3;
                            var1 = var2.bind(var0)(var1);
                            return var0;
                    }
                };
                var4 = var12.bind(var13)(var0, var4);
                var0 = 12;
                var0 = var11[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var0.displayName = var10;
                var9 = var9.description;
                var0.description = var9;
                var0.icon = var8;
                var7 = !var7;
                var0.isLoading = var7;
                var0.isConnected = var6;
                var0.canConnect = var5;
                var0.onConnect = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 3413, 660, 33, 566, 5684, 5301, 1234, 6842, 6852, 795, 4259, 9784, 2]);