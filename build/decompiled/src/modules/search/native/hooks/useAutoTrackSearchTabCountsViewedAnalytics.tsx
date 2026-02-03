// modules/search/native/hooks/useAutoTrackSearchTabCountsViewedAnalytics.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var0 = metroImportDefault;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var5;
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
    var3 = var3.bind(var0)(var6);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.SearchTabs;
    var _closure1_slot3 = var3;
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/search/native/hooks/useAutoTrackSearchTabCountsViewedAnalytics.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var1 = arg0;
        var5 = var1.searchContext;
        var _closure2_slot0 = var5;
        var4 = var1.visibleTabCounts;
        var _closure2_slot1 = var4;
        var1 = var1.visibleTabs;
        var _closure2_slot2 = var1;
        var3 = _closure1_slot2;
        var2 = var3.useRef;
        var2 = var2.bind(var3)(var1);
        var _closure2_slot3 = var2;
        var6 = var3.useEffect;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = function() { // Environment: var0
            var1 = _closure2_slot3;
            var0 = _closure2_slot2;
            var1.current = var0;
            var0 = undefined;
            return var0;
        };
        var1 = var6.bind(var3)(var1, var2);
        var2 = var3.useEffect;
        var1 = new Array(2);
        var1[0] = var5;
        var1[1] = var4;
        var0 = function() { // Environment: var0
            _fun106949: for (var _fun106949_ip = 0;;) switch (_fun106949_ip) {
                case 0:
                    var2 = _closure2_slot1;
                    var1 = null;
                    if (!(var1 != var2)) {
                        _fun106949_ip = 247;
                        continue _fun106949
                    }
                case 18:
                    var5 = function arg0() {
                        _fun106950: for (var _fun106950_ip = 0;;) switch (_fun106950_ip) {
                            case 0:
                                var2 = arg0;
                                var0 = _closure2_slot3;
                                var3 = var0.current;
                                var0 = var3.includes;
                                var3 = var0.bind(var3)(var2);
                                var0 = null;
                                if (!var3) {
                                    _fun106950_ip = 38;
                                    continue _fun106950
                                }
                            case 30:
                                var1 = _closure2_slot1;
                                var0 = var1[var2];
                            case 38:
                                return var0;
                        }
                    };
                    var _closure3_slot0 = var5;
                    var1 = global;
                    var3 = var1.Object;
                    var2 = var3.keys;
                    var1 = _closure2_slot1;
                    var3 = var2.bind(var3)(var1);
                    var2 = var3.reduce;
                    var1 = function(arg0, arg1) { // Environment: var0
                        _fun106951: for (var _fun106951_ip = 0;;) switch (_fun106951_ip) {
                            case 0:
                                var2 = _closure3_slot0;
                                var1 = undefined;
                                var0 = arg1;
                                var0 = var2.bind(var1)(var0);
                                var1 = null;
                                var2 = var1 != var0;
                                var1 = 0;
                                if (!var2) {
                                    _fun106951_ip = 31;
                                    continue _fun106951
                                }
                            case 28:
                                var1 = var0;
                            case 31:
                                var0 = arg0;
                                var0 = var0 + var1;
                                return var0;
                        }
                    };
                    var0 = 0;
                    var6 = var2.bind(var3)(var1, var0);
                    if (!(var6 > var0)) {
                        _fun106949_ip = 247;
                        continue _fun106949
                    }
                case 79:
                    var1 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var0 = 2;
                    var0 = var2[var0];
                    var4 = undefined;
                    var2 = var1.bind(var4)(var0);
                    var1 = var2.trackSearchResultReturned;
                    var0 = {};
                    var7 = _closure2_slot0;
                    var0.searchContext = var7;
                    var0.searchResultTotalCount = var6;
                    var3 = _closure1_slot3;
                    var6 = var3.MEMBERS;
                    var6 = var5.bind(var4)(var6);
                    var0.numMemberTabReturnedResults = var6;
                    var6 = var3.GUILD_CHANNELS;
                    var6 = var5.bind(var4)(var6);
                    var0.numChannelTabReturnedResults = var6;
                    var6 = var3.PEOPLE;
                    var6 = var5.bind(var4)(var6);
                    var0.numPeopleTabReturnedResults = var6;
                    var6 = var3.MESSAGES;
                    var6 = var5.bind(var4)(var6);
                    var0.numMessageTabReturnedResults = var6;
                    var6 = var3.MEDIA;
                    var6 = var5.bind(var4)(var6);
                    var0.numMediaTabReturnedResults = var6;
                    var6 = var3.FILES;
                    var6 = var5.bind(var4)(var6);
                    var0.numFileTabReturnedResults = var6;
                    var3 = var3.LINKS;
                    var3 = var5.bind(var4)(var3);
                    var0.numLinkTabReturnedResults = var3;
                    var0 = var1.bind(var2)(var0);
                case 247:
                    var0 = undefined;
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var0, var1);
        var0 = undefined;
        return var0;
    };
    var2.useAutoTrackSearchTabCountsViewedAnalytics = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 8914, 8977, 2]);