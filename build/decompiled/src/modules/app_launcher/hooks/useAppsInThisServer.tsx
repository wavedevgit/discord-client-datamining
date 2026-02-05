// modules/app_launcher/hooks/useAppsInThisServer.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportAll;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var6;
    var _closure1_slot3 = var5;
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
    var _closure1_slot4 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.useGuildIndexState;
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.DISCOVERY_COMMANDS_QUERY_LIMIT;
    var _closure1_slot6 = var3;
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/app_launcher/hooks/useAppsInThisServer.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun107928: for (var _fun107928_ip = 0;;) switch (_fun107928_ip) {
            case 0:
                var0 = arg0;
                var8 = var0.context;
                var7 = undefined;
                var _closure2_slot0 = var7;
                var _closure2_slot1 = var7;
                var _closure2_slot2 = var7;
                var _closure2_slot3 = var7;
                var1 = var8.type;
                var0 = 'channel';
                var2 = undefined;
                if (!(var0 === var1)) {
                    _fun107928_ip = 48;
                    continue _fun107928
                }
            case 43:
                var2 = var8.channel;
            case 48:
                var1 = _closure1_slot5;
                var9 = null;
                var5 = var9 == var2;
                var0 = undefined;
                if (var5) {
                    _fun107928_ip = 71;
                    continue _fun107928
                }
            case 66:
                var0 = var2.guild_id;
            case 71:
                var6 = true;
                var1 = var1.bind(var7)(var0, var6);
                _closure2_slot0 = var1;
                var2 = _closure1_slot2;
                var13 = _closure1_slot3;
                var0 = 3;
                var0 = var13[var0];
                var5 = var2.bind(var7)(var0);
                var2 = var5.useDiscovery;
                var0 = {};
                var0.context = var8;
                var8 = {};
                var12 = _closure1_slot0;
                var11 = 4;
                var10 = var13[var11];
                var10 = var12.bind(var7)(var10);
                var10 = var10.ApplicationCommandType;
                var14 = var10.CHAT;
                var10 = new Array(2);
                var10[0] = var14;
                var11 = var13[var11];
                var11 = var12.bind(var7)(var11);
                var11 = var11.ApplicationCommandType;
                var11 = var11.PRIMARY_ENTRY_POINT;
                var10[1] = var11;
                var8.commandTypes = var10;
                var0.filters = var8;
                var8 = {
                    'placeholderCount': 0,
                    'limit': null,
                    'includeFrecency': true
                };
                var10 = _closure1_slot6;
                var8.limit = var10;
                var0.options = var8;
                var0.allowFetch = var6;
                var2 = var2.bind(var5)(var0);
                var0 = var2.commandsByActiveSection;
                _closure2_slot1 = var0;
                var2 = var2.loading;
                var8 = _closure1_slot4;
                var6 = var8.useMemo;
                var5 = new Array(1);
                var5[0] = var0;
                var0 = function() { // Environment: var3
                    var3 = _closure2_slot1;
                    var2 = var3.reduce;
                    var0 = global;
                    var0 = var0.Set;
                    var1 = var0.prototype;
                    var1 = Object.create(var1, {
                        constructor: {
                            value: var0
                        }
                    });
                    var6 = var1;
                    var0 = new var6[var0](var5);
                    var1 = var0 instanceof Object ? var0 : var1;
                    var0 = function(arg0, arg1) { // Environment: var0
                        _fun107930: for (var _fun107930_ip = 0;;) switch (_fun107930_ip) {
                            case 0:
                                var0 = arg0;
                                var2 = arg1;
                                var1 = var2.section;
                                var2 = var2.data;
                                var3 = var2.length;
                                var2 = 0;
                                if (!(var3 > var2)) {
                                    _fun107930_ip = 42;
                                    continue _fun107930
                                }
                            case 27:
                                var2 = var0.add;
                                var1 = var1.id;
                                var1 = var2.bind(var0)(var1);
                            case 42:
                                return var0;
                        }
                    };
                    var0 = var2.bind(var3)(var0, var1);
                    return var0;
                };
                var0 = var6.bind(var8)(var0, var5);
                _closure2_slot2 = var0;
                var6 = var8.useMemo;
                var5 = var1.result;
                var10 = var9 == var5;
                var9 = undefined;
                if (var10) {
                    _fun107928_ip = 302;
                    continue _fun107928
                }
            case 296:
                var9 = var5.sections;
            case 302:
                var5 = new Array(2);
                var5[0] = var9;
                var5[1] = var0;
                var0 = function() { // Environment: var3
                    _fun107931: for (var _fun107931_ip = 0;;) switch (_fun107931_ip) {
                        case 0:
                            var1 = global;
                            var3 = var1.Object;
                            var2 = var3.values;
                            var1 = _closure2_slot0;
                            var5 = var1.result;
                            var4 = null;
                            var6 = var4 == var5;
                            var1 = undefined;
                            if (var6) {
                                _fun107931_ip = 45;
                                continue _fun107931
                            }
                        case 39:
                            var1 = var5.sections;
                        case 45:
                            if (!(var4 == var1)) {
                                _fun107931_ip = 51;
                                continue _fun107931
                            }
                        case 49:
                            var1 = {};
                        case 51:
                            var3 = var2.bind(var3)(var1);
                            var2 = var3.map;
                            var1 = function(arg0) { // Environment: var0
                                var0 = arg0;
                                var0 = var0.descriptor;
                                return var0;
                            };
                            var2 = var2.bind(var3)(var1);
                            var1 = var2.filter;
                            var0 = function(arg0) { // Environment: var0
                                _fun107933: for (var _fun107933_ip = 0;;) switch (_fun107933_ip) {
                                    case 0:
                                        var1 = arg0;
                                        var2 = var1.id;
                                        var4 = _closure1_slot0;
                                        var3 = _closure1_slot3;
                                        var0 = 5;
                                        var3 = var3[var0];
                                        var0 = undefined;
                                        var0 = var4.bind(var0)(var3);
                                        var0 = var0.BUILT_IN_SECTIONS;
                                        var2 = var2 in var0;
                                        var0 = !var2;
                                        if (var2) {
                                            _fun107933_ip = 71;
                                            continue _fun107933
                                        }
                                    case 49:
                                        var3 = _closure2_slot2;
                                        var2 = var3.has;
                                        var1 = var1.id;
                                        var0 = var2.bind(var3)(var1);
                                    case 71:
                                        return var0;
                                }
                            };
                            var0 = var1.bind(var2)(var0);
                            return var0;
                    }
                };
                var6 = var6.bind(var8)(var0, var5);
                var5 = _closure1_slot0;
                var8 = _closure1_slot3;
                var0 = 6;
                var0 = var8[var0];
                var5 = var5.bind(var7)(var0);
                var0 = var5.useSortApplicationsViaFrecency;
                var7 = var0.bind(var5)(var6);
                _closure2_slot3 = var7;
                var0 = {};
                var6 = _closure1_slot4;
                var5 = var6.useMemo;
                var4 = new Array(1);
                var4[0] = var7;
                var3 = function() { // Environment: var3
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var1 = 7;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.compact;
                    var5 = _closure2_slot3;
                    var4 = var5.map;
                    var1 = function(arg0) { // Environment: var0
                        var0 = arg0;
                        var0 = var0.application;
                        return var0;
                    };
                    var1 = var4.bind(var5)(var1);
                    var2 = var2.bind(var3)(var1);
                    var1 = var2.map;
                    var0 = function(arg0) { // Environment: var0
                        var0 = {};
                        var1 = arg0;
                        var0.application = var1;
                        return var0;
                    };
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var3 = var5.bind(var6)(var3, var4);
                var0.appsInThisServer = var3;
                var1 = var1.fetchState;
                var1 = var1.fetching;
                if (var1) {
                    _fun107928_ip = 417;
                    continue _fun107928
                }
            case 414:
                var1 = var2;
            case 417:
                var0.isLoading = var1;
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 4674, 4545, 7620, 1645, 7622, 13946, 22, 2]);