// modules/guild_sidebar/native/useShouldRenderChannelList.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
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
    var _closure1_slot2 = var3;
    var3 = 1;
    var7 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ComponentActions;
    var _closure1_slot6 = var3;
    var3 = false;
    var _closure1_slot7 = var3;
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_sidebar/native/useShouldRenderChannelList.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        var4 = _closure1_slot3;
        var3 = var4.useState;
        var2 = _closure1_slot7;
        var5 = var3.bind(var4)(var2);
        var3 = _closure1_slot2;
        var2 = undefined;
        var0 = 2;
        var3 = var3.bind(var2)(var5, var0);
        var0 = 0;
        var0 = var3[var0];
        var _closure2_slot0 = var0;
        var2 = 1;
        var2 = var3[var2];
        var _closure2_slot1 = var2;
        var3 = var4.useEffect;
        var2 = new Array(1);
        var2[0] = var0;
        var1 = function() { // Environment: var1
            _fun102827: for (var _fun102827_ip = 0;;) switch (_fun102827_ip) {
                case 0:
                    var8 = function() {
                        var2 = true;
                        _closure1_slot7 = var2;
                        var1 = _closure2_slot1;
                        var0 = undefined;
                        var1 = var1.bind(var0)(var2);
                        return var0;
                    };
                    var _closure3_slot0 = var8;
                    var6 = function() {
                        _fun102829: for (var _fun102829_ip = 0;;) switch (_fun102829_ip) {
                            case 0:
                                var1 = _closure1_slot5;
                                var0 = var1.isConnected;
                                var0 = var0.bind(var1)();
                                if (!var0) {
                                    _fun102829_ip = 33;
                                    continue _fun102829
                                }
                            case 20:
                                var1 = _closure3_slot0;
                                var0 = undefined;
                                var0 = var1.bind(var0)();
                            case 33:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var _closure3_slot1 = var6;
                    var5 = function() {
                        _fun102830: for (var _fun102830_ip = 0;;) switch (_fun102830_ip) {
                            case 0:
                                var1 = _closure1_slot4;
                                var0 = var1.getLazyCacheStatus;
                                var1 = var0.bind(var1)();
                                var0 = 'cache-loaded';
                                if (!(var0 === var1)) {
                                    _fun102830_ip = 40;
                                    continue _fun102830
                                }
                            case 27:
                                var1 = _closure3_slot0;
                                var0 = undefined;
                                var0 = var1.bind(var0)();
                            case 40:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var _closure3_slot2 = var5;
                    var4 = function() {
                        _fun102831: for (var _fun102831_ip = 0;;) switch (_fun102831_ip) {
                            case 0:
                                var2 = _closure1_slot0;
                                var5 = _closure1_slot1;
                                var0 = 5;
                                var1 = var5[var0];
                                var0 = undefined;
                                var4 = var2.bind(var0)(var1);
                                var3 = var4.coerceGuildsRoute;
                                var1 = 6;
                                var1 = var5[var1];
                                var2 = var2.bind(var0)(var1);
                                var1 = var2.getRootNavigationRef;
                                var6 = var1.bind(var2)();
                                var2 = null;
                                var5 = var2 == var6;
                                var1 = undefined;
                                if (var5) {
                                    _fun102831_ip = 74;
                                    continue _fun102831
                                }
                            case 64:
                                var5 = var6.getCurrentRoute;
                                var1 = var5.bind(var6)();
                            case 74:
                                var1 = var3.bind(var4)(var1);
                                if (!(var2 != var1)) {
                                    _fun102831_ip = 94;
                                    continue _fun102831
                                }
                            case 83:
                                var1 = _closure3_slot0;
                                var1 = var1.bind(var0)();
                            case 94:
                                return var0;
                        }
                    };
                    var _closure3_slot3 = var4;
                    var1 = _closure2_slot0;
                    if (var1) {
                        _fun102827_ip = 195;
                        continue _fun102827
                    }
                case 59:
                    var3 = _closure1_slot5;
                    var2 = var3.addReactChangeListener;
                    var2 = var2.bind(var3)(var6);
                    var3 = _closure1_slot4;
                    var2 = var3.addReactChangeListener;
                    var2 = var2.bind(var3)(var5);
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var2 = 7;
                    var6 = var5[var2];
                    var2 = undefined;
                    var6 = var3.bind(var2)(var6);
                    var7 = var6.ComponentDispatch;
                    var6 = var7.subscribe;
                    var1 = _closure1_slot6;
                    var1 = var1.BOTTOM_CHANNEL_SCREEN_DRAG_START;
                    var1 = var6.bind(var7)(var1, var8);
                    var1 = 6;
                    var1 = var5[var1];
                    var2 = var3.bind(var2)(var1);
                    var1 = var2.getRootNavigationRef;
                    var3 = var1.bind(var2)();
                    var1 = null;
                    if (!(var1 != var3)) {
                        _fun102827_ip = 186;
                        continue _fun102827
                    }
                case 170:
                    var2 = var3.addListener;
                    var1 = 'state';
                    var1 = var2.bind(var3)(var1, var4);
                case 186:
                    var0 = function() { // Environment: var0
                        _fun102832: for (var _fun102832_ip = 0;;) switch (_fun102832_ip) {
                            case 0:
                                var4 = _closure1_slot5;
                                var3 = var4.removeReactChangeListener;
                                var0 = _closure3_slot1;
                                var0 = var3.bind(var4)(var0);
                                var4 = _closure1_slot4;
                                var3 = var4.addReactChangeListener;
                                var0 = _closure3_slot2;
                                var0 = var3.bind(var4)(var0);
                                var3 = _closure1_slot0;
                                var4 = _closure1_slot1;
                                var0 = 7;
                                var5 = var4[var0];
                                var0 = undefined;
                                var5 = var3.bind(var0)(var5);
                                var7 = var5.ComponentDispatch;
                                var6 = var7.unsubscribe;
                                var2 = _closure1_slot6;
                                var5 = var2.BOTTOM_CHANNEL_SCREEN_DRAG_START;
                                var2 = _closure3_slot0;
                                var2 = var6.bind(var7)(var5, var2);
                                var2 = 6;
                                var2 = var4[var2];
                                var3 = var3.bind(var0)(var2);
                                var2 = var3.getRootNavigationRef;
                                var4 = var2.bind(var3)();
                                var2 = null;
                                if (!(var2 != var4)) {
                                    _fun102832_ip = 146;
                                    continue _fun102832
                                }
                            case 126:
                                var3 = var4.removeListener;
                                var2 = _closure3_slot3;
                                var1 = 'state';
                                var1 = var3.bind(var4)(var1, var2);
                            case 146:
                                return var0;
                        }
                    };
                    return var0;
                case 195:
                    var0 = undefined;
                    return var0;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var0;
    };
    var2.useShouldRenderChannelList = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 4365, 3474, 660, 3919, 3920, 1229, 2]);