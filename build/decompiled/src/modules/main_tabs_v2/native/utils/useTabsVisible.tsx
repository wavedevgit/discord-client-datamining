// modules/main_tabs_v2/native/utils/useTabsVisible.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var6;
    var0 = global;
    var7 = var0.Object;
    var4 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var6[var0];
    var0 = undefined;
    var3 = var5.bind(var0)(var3);
    var3 = var3.PixelRatio;
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var3 = var3.DM_WIDTH;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var6[var3];
    var7 = var5.bind(var0)(var3);
    var4 = var7.create;
    var3 = function() { // Environment: var1
        var0 = {};
        var1 = 0;
        var0.tabsHeight = var1;
        return var0;
    };
    var3 = var4.bind(var7)(var3);
    var _closure1_slot5 = var3;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/utils/useTabsVisible.tsx';
    var4 = var5.bind(var6)(var4);
    var2.TabsVisibleStore = var3;
    var3 = function arg0() {
        _fun46586: for (var _fun46586_ip = 0;;) switch (_fun46586_ip) {
            case 0:
                var2 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 3;
                var1 = var4[var1];
                var3 = undefined;
                var1 = var2.bind(var3)(var1);
                var1 = var1.bind(var3)();
                var1 = var1.isChatBesideChannelList;
                var2 = _closure1_slot0;
                var0 = 4;
                var0 = var4[var0];
                var3 = var2.bind(var3)(var0);
                var2 = var3.coerceGuildsRoute;
                var0 = arg0;
                var2 = var2.bind(var3)(var0);
                var0 = null;
                var0 = var0 == var2;
                if (!var0) {
                    _fun46586_ip = 77;
                    continue _fun46586
                }
            case 74:
                var0 = var1;
            case 77:
                var0 = !var0;
                return var0;
        }
    };
    var2.useTabsVisible = var3;
    var3 = function arg0() {
        _fun46587: for (var _fun46587_ip = 0;;) switch (_fun46587_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var1 = 0;
                if (!(var1 !== var2)) {
                    _fun46587_ip = 56;
                    continue _fun46587
                }
            case 15:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 5;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var1 = var2.batchUpdates;
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot5;
                    var1 = var2.setState;
                    var0 = function(arg0) { // Environment: var0
                        _fun46589: for (var _fun46589_ip = 0;;) switch (_fun46589_ip) {
                            case 0:
                                var0 = arg0;
                                var3 = _closure2_slot0;
                                var1 = var0.tabsHeight;
                                if (!(var3 !== var1)) {
                                    _fun46589_ip = 34;
                                    continue _fun46589
                                }
                            case 20:
                                var1 = {};
                                var2 = _closure2_slot0;
                                var1.tabsHeight = var2;
                                var0 = var1;
                            case 34:
                                return var0;
                        }
                    };
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var0 = var1.bind(var2)(var0);
            case 56:
                var0 = undefined;
                return var0;
        }
    };
    var2.setTabsHeight = var3;
    var3 = function() {
        _fun46590: for (var _fun46590_ip = 0;;) switch (_fun46590_ip) {
            case 0:
                var1 = arguments[0];
                var2 = undefined;
                if (!(var1 === var2)) {
                    _fun46590_ip = 25;
                    continue _fun46590
                }
            case 11:
                var1 = {
                    'enabled': true,
                    'ignoreQuestDock': false
                };
            case 25:
                var3 = var1.enabled;
                if (!(var3 === var2)) {
                    _fun46590_ip = 36;
                    continue _fun46590
                }
            case 34:
                var3 = true;
            case 36:
                var _closure2_slot0 = var3;
                var1 = var1.ignoreQuestDock;
                if (!(var1 === var2)) {
                    _fun46590_ip = 52;
                    continue _fun46590
                }
            case 50:
                var1 = false;
            case 52:
                var _closure2_slot1 = var1;
                var _closure2_slot2 = var2;
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var3 = 6;
                var3 = var5[var3];
                var4 = var4.bind(var2)(var3);
                var3 = var4.useMobileQuestDockHeight;
                var3 = var3.bind(var4)();
                _closure2_slot2 = var3;
                var1 = _closure1_slot5;
                var0 = function(arg0) { // Environment: var0
                    _fun46591: for (var _fun46591_ip = 0;;) switch (_fun46591_ip) {
                        case 0:
                            var1 = _closure2_slot0;
                            var0 = 0;
                            if (!var1) {
                                _fun46591_ip = 56;
                                continue _fun46591
                            }
                        case 12:
                            var3 = _closure1_slot3;
                            var2 = var3.roundToNearestPixel;
                            var1 = arg0;
                            var1 = var1.tabsHeight;
                            var6 = _closure2_slot1;
                            var4 = 0;
                            if (var6) {
                                _fun46591_ip = 47;
                                continue _fun46591
                            }
                        case 43:
                            var4 = _closure2_slot2;
                        case 47:
                            var1 = var1 + var4;
                            var0 = var2.bind(var3)(var1);
                        case 56:
                            return var0;
                    }
                };
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var2.useMainTabsHeight = var3;
    var1 = function() {
        _fun46592: for (var _fun46592_ip = 0;;) switch (_fun46592_ip) {
            case 0:
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var0 = 7;
                var0 = var5[var0];
                var3 = undefined;
                var0 = var4.bind(var3)(var0);
                var2 = var0.bind(var3)();
                var0 = 3;
                var0 = var5[var0];
                var0 = var4.bind(var3)(var0);
                var0 = var0.bind(var3)();
                var3 = var0.isChatBesideChannelList;
                var0 = '100%';
                if (!var3) {
                    _fun46592_ip = 68;
                    continue _fun46592
                }
            case 60:
                var1 = _closure1_slot4;
                var0 = var1 + var2;
            case 68:
                return var0;
        }
    };
    var2.useMainTabsWidth = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [27, 660, 629, 3922, 3919, 802, 5225, 12155, 2]);