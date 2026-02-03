// modules/panels/morphable/native/getPIPBottomOffsetForPIPMode.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var0 = global;
    var7 = var0.Object;
    var4 = var7.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var7)(var2, var0, var1);
    var0 = 0;
    var1 = var6[var0];
    var0 = undefined;
    var1 = var5.bind(var0)(var1);
    var1 = var1.PIP_WINDOW_OFFSET;
    var _closure1_slot0 = var1;
    var4 = {};
    var7 = "function getPIPBottomOffsetForPIPMode_getPIPBottomOffsetForPIPModeTsx1(screenName){const{DEFAULT_CHANNEL_INPUT_HEIGHT,PIP_WINDOW_OFFSET,PIP_AVOIDANCE_TAB_BAR_HEIGHT}=this.__closure;switch(screenName){case'panels':return DEFAULT_CHANNEL_INPUT_HEIGHT+PIP_WINDOW_OFFSET;case'channel':return DEFAULT_CHANNEL_INPUT_HEIGHT+PIP_WINDOW_OFFSET;case'messages':case'notifications':case'main_tab':case'guilds':return PIP_AVOIDANCE_TAB_BAR_HEIGHT+PIP_WINDOW_OFFSET;default:return 0;}}";
    var4.code = var7;
    var3 = function arg0() {
        _fun109607: for (var _fun109607_ip = 0;;) switch (_fun109607_ip) {
            case 0:
                var1 = arg0;
                var0 = 'panels';
                if (!(var0 !== var1)) {
                    _fun109607_ip = 75;
                    continue _fun109607
                }
            case 13:
                var0 = 'channel';
                if (!(var0 !== var1)) {
                    _fun109607_ip = 75;
                    continue _fun109607
                }
            case 21:
                var0 = 'messages';
                if (!(var0 !== var1)) {
                    _fun109607_ip = 59;
                    continue _fun109607
                }
            case 29:
                var0 = 'notifications';
                if (!(var0 !== var1)) {
                    _fun109607_ip = 59;
                    continue _fun109607
                }
            case 37:
                var0 = 'main_tab';
                if (!(var0 !== var1)) {
                    _fun109607_ip = 59;
                    continue _fun109607
                }
            case 47:
                var0 = 'guilds';
                if (!(var0 !== var1)) {
                    _fun109607_ip = 59;
                    continue _fun109607
                }
            case 55:
                var0 = 0;
                return var0;
            case 59:
                var1 = _closure1_slot0;
                var0 = 46;
                var0 = var0 + var1;
                return var0;
            case 75:
                var1 = _closure1_slot0;
                var0 = 60;
                var0 = var0 + var1;
                return var0;
        }
    };
    var7 = {
        'DEFAULT_CHANNEL_INPUT_HEIGHT': 60,
        'PIP_WINDOW_OFFSET': null,
        'PIP_AVOIDANCE_TAB_BAR_HEIGHT': 46
    };
    var7.PIP_WINDOW_OFFSET = var1;
    var1 = 46;
    var3.__closure = var7;
    var7 = 7115458448589.0;
    var3.__workletHash = var7;
    var3.__initData = var4;
    var4 = 1;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/panels/morphable/native/getPIPBottomOffsetForPIPMode.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.PIP_AVOIDANCE_TAB_BAR_HEIGHT = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [11817, 2]);