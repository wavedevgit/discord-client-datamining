// modules/app_launcher/hooks/useAppLauncherFrecents.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var7 = metroImportAll;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var7;
    var _closure1_slot3 = var5;
    var0 = function arg0() {
        var1 = arg0;
        var6 = var1.sectionDescriptors;
        var5 = var1.context;
        var _closure2_slot0 = var5;
        var7 = var1.onlyActivityApps;
        var _closure2_slot1 = var7;
        var13 = var1.includeAuthorizedAppsAndFetch;
        var _closure2_slot2 = var13;
        var9 = _closure1_slot0;
        var10 = _closure1_slot3;
        var2 = 7;
        var4 = var10[var2];
        var3 = undefined;
        var12 = var9.bind(var3)(var4);
        var11 = var12.useStateFromStores;
        var4 = _closure1_slot5;
        var8 = new Array(1);
        var8[0] = var4;
        var4 = function() { // Environment: var0
            var1 = _closure1_slot5;
            var0 = var1.getFetchState;
            var0 = var0.bind(var1)();
            return var0;
        };
        var4 = var11.bind(var12)(var8, var4);
        var _closure2_slot3 = var4;
        var12 = _closure1_slot4;
        var11 = var12.useEffect;
        var8 = new Array(2);
        var8[0] = var13;
        var8[1] = var4;
        var4 = function() { // Environment: var0
            _fun107882: for (var _fun107882_ip = 0;;) switch (_fun107882_ip) {
                case 0:
                    var0 = _closure2_slot2;
                    if (!var0) {
                        _fun107882_ip = 31;
                        continue _fun107882
                    }
                case 10:
                    var2 = _closure2_slot3;
                    var1 = _closure1_slot6;
                    var1 = var1.NOT_FETCHED;
                    var0 = var2 === var1;
                case 31:
                    if (!var0) {
                        _fun107882_ip = 69;
                        continue _fun107882
                    }
                case 34:
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot3;
                    var0 = 8;
                    var1 = var1[var0];
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    var0 = var1.fetch;
                    var0 = var0.bind(var1)();
                case 69:
                    var0 = undefined;
                    return var0;
            }
        };
        var4 = var11.bind(var12)(var4, var8);
        var2 = var10[var2];
        var11 = var9.bind(var3)(var2);
        var8 = var11.useStateFromStoresArray;
        var2 = _closure1_slot5;
        var4 = new Array(1);
        var4[0] = var2;
        var2 = function() { // Environment: var0
            _fun107883: for (var _fun107883_ip = 0;;) switch (_fun107883_ip) {
                case 0:
                    var0 = _closure2_slot2;
                    if (var0) {
                        _fun107883_ip = 16;
                        continue _fun107883
                    }
                case 10:
                    var0 = new Array(0);
                    _fun107883_ip = 52;
                    continue _fun107883;
                case 16:
                    var2 = _closure1_slot5;
                    var1 = var2.getNewestTokens;
                    var3 = var1.bind(var2)();
                    var2 = var3.filter;
                    var1 = function(arg0) { // Environment: var1
                        var0 = arg0;
                        var2 = var0.scopes;
                        var1 = var2.includes;
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot3;
                        var0 = 9;
                        var3 = var3[var0];
                        var0 = undefined;
                        var0 = var4.bind(var0)(var3);
                        var0 = var0.OAuth2Scopes;
                        var0 = var0.APPLICATIONS_COMMANDS;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0 = var2.bind(var3)(var1);
                case 52:
                    return var0;
            }
        };
        var8 = var8.bind(var11)(var4, var2);
        var4 = var6.filter;
        var2 = function(arg0) { // Environment: var0
            _fun107885: for (var _fun107885_ip = 0;;) switch (_fun107885_ip) {
                case 0:
                    var2 = arg0;
                    var3 = var2.id;
                    var0 = _closure1_slot9;
                    var0 = var0.FRECENCY;
                    var0 = var3 !== var0;
                    if (!var0) {
                        _fun107885_ip = 47;
                        continue _fun107885
                    }
                case 28:
                    var2 = var2.id;
                    var1 = _closure1_slot9;
                    var1 = var1.BUILT_IN;
                    var0 = var2 !== var1;
                case 47:
                    return var0;
            }
        };
        var6 = var4.bind(var6)(var2);
        var4 = var5.type;
        var2 = 'contextless';
        var2 = var2 === var4;
        var _closure2_slot4 = var2;
        var12 = _closure1_slot4;
        var11 = var12.useMemo;
        var4 = new Array(1);
        var4[0] = var2;
        var2 = function() { // Environment: var0
            _fun107886: for (var _fun107886_ip = 0;;) switch (_fun107886_ip) {
                case 0:
                    var0 = new Array(0);
                    var1 = _closure2_slot4;
                    if (!var1) {
                        _fun107886_ip = 31;
                        continue _fun107886
                    }
                case 14:
                    var2 = var0.push;
                    var1 = _closure1_slot8;
                    var1 = var2.bind(var0)(var1);
                case 31:
                    return var0;
            }
        };
        var4 = var11.bind(var12)(var2, var4);
        var _closure2_slot5 = var4;
        var2 = 10;
        var2 = var10[var2];
        var3 = var9.bind(var3)(var2);
        var2 = var3.useSortApplicationsViaFrecency;
        var6 = var2.bind(var3)(var6, var8);
        var _closure2_slot6 = var6;
        var3 = _closure1_slot4;
        var2 = var3.useMemo;
        var1 = new Array(4);
        var1[0] = var7;
        var1[1] = var6;
        var1[2] = var5;
        var1[3] = var4;
        var0 = function() { // Environment: var0
            _fun107887: for (var _fun107887_ip = 0;;) switch (_fun107887_ip) {
                case 0:
                    var0 = _closure2_slot1;
                    var4 = _closure2_slot6;
                    var3 = var4.filter;
                    if (var0) {
                        _fun107887_ip = 35;
                        continue _fun107887
                    }
                case 21:
                    var0 = function(arg0) { // Environment: var1
                        var2 = _closure2_slot5;
                        var1 = var2.includes;
                        var0 = arg0;
                        var0 = var0.id;
                        var0 = var1.bind(var2)(var0);
                        var0 = !var0;
                        return var0;
                    };
                    var0 = var3.bind(var4)(var0);
                    _fun107887_ip = 64;
                    continue _fun107887;
                case 35:
                    var2 = function(arg0) { // Environment: var1
                        _fun107888: for (var _fun107888_ip = 0;;) switch (_fun107888_ip) {
                            case 0:
                                var1 = arg0;
                                var0 = var1.application;
                                var2 = null;
                                var0 = var2 != var0;
                                if (!var0) {
                                    _fun107888_ip = 58;
                                    continue _fun107888
                                }
                            case 17:
                                var5 = _closure1_slot0;
                                var4 = _closure1_slot3;
                                var3 = 11;
                                var4 = var4[var3];
                                var3 = undefined;
                                var5 = var5.bind(var3)(var4);
                                var4 = var5.isEmbeddedApp;
                                var3 = var1.application;
                                var0 = var4.bind(var5)(var3);
                            case 58:
                                if (!var0) {
                                    _fun107888_ip = 114;
                                    continue _fun107888
                                }
                            case 61:
                                var5 = _closure1_slot0;
                                var4 = _closure1_slot3;
                                var3 = 12;
                                var4 = var4[var3];
                                var3 = undefined;
                                var5 = var5.bind(var3)(var4);
                                var4 = var5.queryForPrimaryAppCommand;
                                var3 = _closure2_slot0;
                                var1 = var1.id;
                                var1 = var4.bind(var5)(var3, var1);
                                var0 = var2 != var1;
                            case 114:
                                return var0;
                        }
                    };
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.filter;
                    var1 = function(arg0) { // Environment: var1
                        var2 = _closure2_slot5;
                        var1 = var2.includes;
                        var0 = arg0;
                        var0 = var0.id;
                        var0 = var1.bind(var2)(var0);
                        var0 = !var0;
                        return var0;
                    };
                    var0 = var2.bind(var3)(var1);
                case 64:
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot12 = var0;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var7.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 1;
    var7 = var5[var3];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot5 = var7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.FetchState;
    var _closure1_slot6 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.WATCH_YOUTUBE_PROD_APP_ID;
    var _closure1_slot8 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.BuiltInSectionId;
    var _closure1_slot9 = var6;
    var6 = var3.DISCOVERY_COMMANDS_QUERY_LIMIT;
    var3 = {};
    var8 = 5;
    var7 = var5[var8];
    var7 = var4.bind(var0)(var7);
    var7 = var7.ApplicationCommandType;
    var9 = var7.CHAT;
    var7 = new Array(2);
    var7[0] = var9;
    var8 = var5[var8];
    var8 = var4.bind(var0)(var8);
    var8 = var8.ApplicationCommandType;
    var8 = var8.PRIMARY_ENTRY_POINT;
    var7[1] = var8;
    var3.commandTypes = var7;
    var _closure1_slot10 = var3;
    var3 = {
        'placeholderCount': 0,
        'limit': null,
        'includeFrecency': true
    };
    var3.limit = var6;
    var _closure1_slot11 = var3;
    var3 = 13;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/app_launcher/hooks/useAppLauncherFrecents.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        var0 = arg0;
        var7 = var0.context;
        var6 = var0.onlyActivityApps;
        var _closure2_slot0 = var6;
        var1 = _closure1_slot2;
        var10 = _closure1_slot3;
        var0 = 6;
        var0 = var10[var0];
        var4 = undefined;
        var8 = var1.bind(var4)(var0);
        var1 = var8.useDiscovery;
        var0 = {};
        var0.context = var7;
        var5 = _closure1_slot10;
        var0.filters = var5;
        var5 = _closure1_slot11;
        var0.options = var5;
        var5 = true;
        var0.allowFetch = var5;
        var8 = var1.bind(var8)(var0);
        var13 = var8.commands;
        var _closure2_slot1 = var13;
        var12 = var8.commandsByActiveSection;
        var _closure2_slot2 = var12;
        var1 = var8.sectionDescriptors;
        var0 = var8.filterSection;
        var _closure2_slot3 = var0;
        var8 = var8.loading;
        var14 = _closure1_slot4;
        var11 = var14.useEffect;
        var9 = new Array(1);
        var9[0] = var0;
        var0 = function() { // Environment: var3
            var2 = _closure2_slot3;
            var0 = _closure1_slot9;
            var1 = var0.FRECENCY;
            var0 = undefined;
            var1 = var2.bind(var0)(var1);
            return var0;
        };
        var0 = var11.bind(var14)(var0, var9);
        var9 = _closure1_slot0;
        var0 = 7;
        var0 = var10[var0];
        var11 = var9.bind(var4)(var0);
        var10 = var11.useStateFromStores;
        var0 = _closure1_slot7;
        var9 = new Array(1);
        var9[0] = var0;
        var0 = function() { // Environment: var3
            var1 = _closure1_slot7;
            var0 = var1.getLastUsedCommandId;
            var0 = var0.bind(var1)();
            return var0;
        };
        var11 = var10.bind(var11)(var9, var0);
        var _closure2_slot4 = var11;
        var0 = {};
        var0.loading = var8;
        var10 = _closure1_slot4;
        var9 = var10.useMemo;
        var8 = new Array(4);
        var8[0] = var13;
        var8[1] = var12;
        var8[2] = var11;
        var8[3] = var6;
        var3 = function() { // Environment: var3
            _fun107894: for (var _fun107894_ip = 0;;) switch (_fun107894_ip) {
                case 0:
                    var1 = _closure2_slot0;
                    if (var1) {
                        _fun107894_ip = 114;
                        continue _fun107894
                    }
                case 12:
                    var3 = _closure2_slot2;
                    var1 = 0;
                    var3 = var3[var1];
                    var1 = null;
                    var5 = var1 == var3;
                    var4 = undefined;
                    if (var5) {
                        _fun107894_ip = 38;
                        continue _fun107894
                    }
                case 33:
                    var4 = var3.data;
                case 38:
                    if (!(var1 == var4)) {
                        _fun107894_ip = 46;
                        continue _fun107894
                    }
                case 42:
                    var4 = new Array(0);
                case 46:
                    var5 = _closure2_slot1;
                    var3 = var5.find;
                    var0 = function(arg0) { // Environment: var2
                        var0 = arg0;
                        var1 = var0.id;
                        var0 = _closure2_slot4;
                        var0 = var1 === var0;
                        return var0;
                    };
                    var3 = var3.bind(var5)(var0);
                    var0 = var4;
                    if (!(var1 != var3)) {
                        _fun107894_ip = 112;
                        continue _fun107894
                    }
                case 74:
                    var1 = new Array(1);
                    var1[0] = var3;
                    var3 = var4.filter;
                    var2 = function(arg0) { // Environment: var2
                        var0 = arg0;
                        var1 = var0.id;
                        var0 = _closure2_slot4;
                        var0 = var1 !== var0;
                        return var0;
                    };
                    var7 = var3.bind(var4)(var2);
                    var6 = 1;
                    var8 = var1;
                    var2 = arraySpread(var8, var7, var6);
                    var0 = var1;
                case 112:
                    return var0;
                case 114:
                    var0 = new Array(0);
                    return var0;
            }
        };
        var3 = var9.bind(var10)(var3, var8);
        var0.frecencyCommands = var3;
        var3 = _closure1_slot12;
        var2 = {};
        var2.sectionDescriptors = var1;
        var2.context = var7;
        var2.onlyActivityApps = var6;
        var2.includeAuthorizedAppsAndFetch = var5;
        var2 = var3.bind(var4)(var2);
        var0.frecentApps = var2;
        var0.sectionDescriptors = var1;
        return var0;
    };
    var2.default = var3;
    var1 = function arg0() {
        var0 = arg0;
        var6 = var0.context;
        var5 = var0.onlyActivityApps;
        var8 = var0.allowCommandFetch;
        var4 = var0.includeAuthorizedAppsAndFetch;
        var2 = _closure1_slot2;
        var3 = _closure1_slot3;
        var0 = 6;
        var0 = var3[var0];
        var3 = undefined;
        var7 = var2.bind(var3)(var0);
        var2 = var7.useDiscovery;
        var0 = {};
        var0.context = var6;
        var9 = _closure1_slot10;
        var0.filters = var9;
        var9 = _closure1_slot11;
        var0.options = var9;
        var0.allowFetch = var8;
        var2 = var2.bind(var7)(var0);
        var7 = var2.sectionDescriptors;
        var0 = {};
        var2 = var2.loading;
        var0.loading = var2;
        var2 = _closure1_slot12;
        var1 = {};
        var1.sectionDescriptors = var7;
        var1.context = var6;
        var1.onlyActivityApps = var5;
        var1.includeAuthorizedAppsAndFetch = var4;
        var1 = var2.bind(var3)(var1);
        var0.frecentApps = var1;
        return var0;
    };
    var2.useAppLauncherFrecentApps = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 4586, 13945, 3457, 4545, 1645, 7620, 566, 5355, 3339, 13946, 4673, 8004, 2]);