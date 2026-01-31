// modules/main_tabs_v2/native/friends/components/useSuggestedFriends.tsx
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
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var7 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.SuggestedFriendSource;
    var _closure1_slot6 = var3;
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/main_tabs_v2/native/friends/components/useSuggestedFriends.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: useSuggestedFriends, environment: var1
        _fun101407: for (var _fun101407_ip = 0;;) switch (_fun101407_ip) {
            case 0:
                var1 = arg0;
                var3 = null;
                if (!(var3 == var1)) {
                    _fun101407_ip = 13;
                    continue _fun101407
                }
            case 11:
                var1 = {};
            case 13:
                var6 = var1.isConnected;
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 4;
                var1 = var5[var1];
                var8 = undefined;
                var7 = var4.bind(var8)(var1);
                var5 = var7.useStateFromStoresArray;
                var1 = _closure1_slot5;
                var4 = new Array(1);
                var4[0] = var1;
                var1 = function() { // Environment: var0
                    var1 = _closure1_slot5;
                    var0 = var1.getSuggestions;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var1 = var5.bind(var7)(var4, var1);
                var _closure2_slot0 = var1;
                var7 = _closure1_slot4;
                var5 = var7.useState;
                var4 = new Array(0);
                var7 = var5.bind(var7)(var4);
                var5 = _closure1_slot3;
                var4 = 2;
                var7 = var5.bind(var8)(var7, var4);
                var4 = 0;
                var5 = var7[var4];
                var _closure2_slot1 = var5;
                var4 = 1;
                var4 = var7[var4];
                var3 = var3 == var6;
                if (var3) {
                    _fun101407_ip = 137;
                    continue _fun101407
                }
            case 134:
                var3 = var6;
            case 137:
                var _closure2_slot2 = var3;
                var7 = _closure1_slot4;
                var6 = var7.useMemo;
                var2 = new Array(3);
                var2[0] = var5;
                var2[1] = var1;
                var2[2] = var3;
                var0 = function() { // Environment: var0
                    _fun101409: for (var _fun101409_ip = 0;;) switch (_fun101409_ip) {
                        case 0:
                            var2 = _closure2_slot2;
                            if (var2) {
                                _fun101409_ip = 18;
                                continue _fun101409
                            }
                        case 12:
                            var2 = new Array(0);
                            return var2;
                        case 18:
                            var4 = _closure2_slot1;
                            var3 = var4.filter;
                            var2 = function(arg0) { // Environment: var0
                                var0 = arg0;
                                var1 = var0.source;
                                var0 = _closure1_slot6;
                                var0 = var0.USER_SUGGESTIONS;
                                var0 = var1 === var0;
                                return var0;
                            };
                            var5 = var3.bind(var4)(var2);
                            var3 = _closure2_slot0;
                            var2 = var3.map;
                            var1 = function(arg0) { // Environment: var0
                                _fun101411: for (var _fun101411_ip = 0;;) switch (_fun101411_ip) {
                                    case 0:
                                        var1 = arg0;
                                        var0 = {};
                                        var2 = var1.user;
                                        var0.user = var2;
                                        var3 = var1.name;
                                        var2 = null;
                                        var4 = var2 != var3;
                                        var2 = undefined;
                                        if (!var4) {
                                            _fun101411_ip = 33;
                                            continue _fun101411
                                        }
                                    case 30:
                                        var2 = var3;
                                    case 33:
                                        var0.friendSuggestionName = var2;
                                        var2 = _closure1_slot6;
                                        var2 = var2.USER_SUGGESTIONS;
                                        var0.source = var2;
                                        var1 = var1.contactNames;
                                        var0.contactNames = var1;
                                        return var0;
                                }
                            };
                            var4 = var2.bind(var3)(var1);
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 5;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.unionBy;
                            var1 = function(arg0) { // Environment: var0
                                var0 = arg0;
                                var0 = var0.user;
                                var0 = var0.id;
                                return var0;
                            };
                            var2 = var2.bind(var3)(var5, var4, var1);
                            var1 = var2.sort;
                            var0 = function(arg0, arg1) { // Environment: var0
                                var4 = _closure1_slot1;
                                var5 = _closure1_slot2;
                                var0 = 6;
                                var1 = var5[var0];
                                var3 = undefined;
                                var6 = var4.bind(var3)(var1);
                                var2 = var6.getName;
                                var1 = arg0;
                                var1 = var1.user;
                                var2 = var2.bind(var6)(var1);
                                var1 = var2.localeCompare;
                                var0 = var5[var0];
                                var4 = var4.bind(var3)(var0);
                                var3 = var4.getName;
                                var0 = arg1;
                                var0 = var0.user;
                                var0 = var3.bind(var4)(var0);
                                var0 = var1.bind(var2)(var0);
                                return var0;
                            };
                            var0 = var1.bind(var2)(var0);
                            return var0;
                    }
                };
                var2 = var6.bind(var7)(var0, var2);
                var0 = {};
                var0.added = var5;
                var0.setAdded = var4;
                var0.friendSuggestions = var2;
                if (var3) {
                    _fun101407_ip = 206;
                    continue _fun101407
                }
            case 199:
                var1 = var1.length;
                _fun101407_ip = 211;
                continue _fun101407;
            case 206:
                var1 = var2.length;
            case 211:
                var0.numFriendSuggestions = var1;
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 9040, 10368, 632, 22, 3195, 2]);