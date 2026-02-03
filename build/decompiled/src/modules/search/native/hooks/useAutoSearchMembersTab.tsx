// modules/search/native/hooks/useAutoSearchMembersTab.tsx
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
    var3 = var3.SEARCH_TEXT_INPUT_DEBOUNCE_TIME;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.SearchTypes;
    var _closure1_slot6 = var3;
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/search/native/hooks/useAutoSearchMembersTab.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0, arg1() {
        var4 = arg0;
        var1 = arg1;
        var _closure2_slot0 = var4;
        var _closure2_slot1 = var1;
        var3 = _closure1_slot3;
        var5 = var3.useEffect;
        var2 = new Array(2);
        var2[0] = var1;
        var2[1] = var4;
        var1 = function() { // Environment: var0
            _fun106931: for (var _fun106931_ip = 0;;) switch (_fun106931_ip) {
                case 0:
                    var1 = _closure2_slot1;
                    if (var1) {
                        _fun106931_ip = 82;
                        continue _fun106931
                    }
                case 10:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 4;
                    var3 = var3[var2];
                    var2 = undefined;
                    var5 = var4.bind(var2)(var3);
                    var4 = var5.debounce;
                    var3 = _closure1_slot5;
                    var2 = function(arg0) { // Environment: var2
                        _fun106932: for (var _fun106932_ip = 0;;) switch (_fun106932_ip) {
                            case 0:
                                var4 = _closure1_slot4;
                                var3 = var4.getState;
                                var2 = _closure2_slot0;
                                var1 = function(arg0) { // Environment: var0
                                    var1 = arg0;
                                    var0 = var1.isAutocompleteVisible;
                                    var0 = var0.bind(var1)();
                                    return var0;
                                };
                                var1 = var3.bind(var4)(var2, var1);
                                if (var1) {
                                    _fun106932_ip = 269;
                                    continue _fun106932
                                }
                            case 41:
                                var3 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var1 = 5;
                                var1 = var2[var1];
                                var2 = undefined;
                                var4 = var3.bind(var2)(var1);
                                var3 = var4.getGuildIdFromSearchContext;
                                var1 = _closure2_slot0;
                                var3 = var3.bind(var4)(var1);
                                var7 = null;
                                if (!(var7 != var3)) {
                                    _fun106932_ip = 269;
                                    continue _fun106932
                                }
                            case 87:
                                var1 = _closure1_slot1;
                                var10 = _closure1_slot2;
                                var4 = 6;
                                var4 = var10[var4];
                                var12 = var1.bind(var2)(var4);
                                var11 = var12.getCurrentConfig;
                                var8 = {};
                                var4 = 'useMemberSearchTabCount';
                                var8.location = var4;
                                var4 = {};
                                var9 = _closure2_slot0;
                                var14 = var9.type;
                                var13 = _closure1_slot6;
                                var13 = var13.THREAD;
                                var13 = var14 !== var13;
                                var4.disable = var13;
                                var13 = true;
                                var4.autoTrackExposure = var13;
                                var4 = var11.bind(var12)(var8, var4);
                                var8 = var4.enabled;
                                var0 = function arg0() {
                                    _fun106934: for (var _fun106934_ip = 0;;) switch (_fun106934_ip) {
                                        case 0:
                                            var3 = _closure1_slot4;
                                            var2 = var3.getState;
                                            var1 = arg0;
                                            var0 = function(arg0) { // Environment: var0
                                                var1 = arg0;
                                                var0 = var1.getChannelIds;
                                                var0 = var0.bind(var1)();
                                                return var0;
                                            };
                                            var5 = var2.bind(var3)(var1, var0);
                                            var2 = var5.size;
                                            var3 = 0;
                                            var0 = null;
                                            if (!(var3 !== var2)) {
                                                _fun106934_ip = 83;
                                                continue _fun106934
                                            }
                                        case 44:
                                            var4 = var5.size;
                                            var2 = 1;
                                            var1 = null;
                                            if (!(var2 === var4)) {
                                                _fun106934_ip = 80;
                                                continue _fun106934
                                            }
                                        case 58:
                                            var2 = global;
                                            var4 = var2.Array;
                                            var2 = var4.from;
                                            var2 = var2.bind(var4)(var5);
                                            var1 = var2[var3];
                                        case 80:
                                            var0 = var1;
                                        case 83:
                                            return var0;
                                    }
                                };
                                var4 = var0.bind(var2)(var9);
                                var0 = 7;
                                var0 = var10[var0];
                                var2 = var1.bind(var2)(var0);
                                var1 = var2.searchGuildMemberTab;
                                var0 = {};
                                var0.searchContext = var9;
                                var9 = arg0;
                                var0.searchQueryString = var9;
                                var0.guildId = var3;
                                var0.channelId = var4;
                                var3 = null;
                                if (!var8) {
                                    _fun106932_ip = 259;
                                    continue _fun106932
                                }
                            case 231:
                                var6 = _closure2_slot0;
                                var6 = var6.type;
                                var5 = _closure1_slot6;
                                var5 = var5.THREAD;
                                var3 = null;
                                if (!(var6 === var5)) {
                                    _fun106932_ip = 259;
                                    continue _fun106932
                                }
                            case 256:
                                var3 = var4;
                            case 259:
                                var0.threadId = var3;
                                var0 = var1.bind(var2)(var0);
                            case 269:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var3 = var4.bind(var5)(var2, var3);
                    var2 = _closure1_slot4;
                    var1 = var2.subscribeTextInputValue;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0, var3);
                    return var0;
                case 82:
                    var0 = undefined;
                    return var0;
            }
        };
        var1 = var5.bind(var3)(var1, var2);
        var2 = var3.useEffect;
        var1 = new Array(1);
        var1[0] = var4;
        var0 = function() { // Environment: var0
            var0 = function() { // Environment: var0
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 7;
                var1 = var1[var0];
                var0 = undefined;
                var3 = var2.bind(var0)(var1);
                var2 = var3.cleanupGuildMemberTab;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var0;
            };
            return var0;
        };
        var0 = var2.bind(var3)(var0, var1);
        var0 = undefined;
        return var0;
    };
    var2.useAutoSearchMembersTab = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 8978, 11674, 660, 22, 8980, 8973, 13719, 2]);