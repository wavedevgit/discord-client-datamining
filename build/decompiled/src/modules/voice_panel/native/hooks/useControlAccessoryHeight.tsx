// modules/voice_panel/native/hooks/useControlAccessoryHeight.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
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
    var _closure1_slot3 = var3;
    var3 = {};
    var6 = 'function useControlAccessoryHeightTsx1(){const{consoleStatusHeight,floatingCTAHeight}=this.__closure;return consoleStatusHeight.get()+floatingCTAHeight.get();}';
    var3.code = var6;
    var _closure1_slot4 = var3;
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/voice_panel/native/hooks/useControlAccessoryHeight.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        var11 = _closure1_slot3;
        var5 = var11.useContext;
        var2 = _closure1_slot1;
        var7 = _closure1_slot2;
        var1 = 1;
        var1 = var7[var1];
        var4 = undefined;
        var1 = var2.bind(var4)(var1);
        var1 = var5.bind(var11)(var1);
        var9 = var1.channelId;
        var1 = 2;
        var1 = var7[var1];
        var1 = var2.bind(var4)(var1);
        var1 = var1.bind(var4)(var9);
        var5 = var1.isConnectingOrConnectedToConsole;
        var _closure2_slot0 = var5;
        var2 = _closure1_slot0;
        var1 = 3;
        var6 = var7[var1];
        var8 = var2.bind(var4)(var6);
        var6 = var8.useSharedValue;
        var10 = 0;
        var6 = var6.bind(var8)(var10);
        var _closure2_slot1 = var6;
        var12 = var11.useEffect;
        var8 = new Array(2);
        var8[0] = var6;
        var8[1] = var5;
        var5 = function() { // Environment: var0
            _fun111624: for (var _fun111624_ip = 0;;) switch (_fun111624_ip) {
                case 0:
                    var2 = _closure2_slot1;
                    var1 = var2.set;
                    var3 = _closure2_slot0;
                    var0 = 0;
                    if (!var3) {
                        _fun111624_ip = 52;
                        continue _fun111624
                    }
                case 21:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 4;
                    var4 = var4[var3];
                    var3 = undefined;
                    var3 = var5.bind(var3)(var4);
                    var0 = var3.CONSOLE_STATUS_HEIGHT;
                case 52:
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
            }
        };
        var5 = var12.bind(var11)(var5, var8);
        var5 = 5;
        var5 = var7[var5];
        var8 = var2.bind(var4)(var5);
        var5 = var8.useShouldShowFloatingCTA;
        var8 = var5.bind(var8)(var9);
        var _closure2_slot2 = var8;
        var5 = var7[var1];
        var9 = var2.bind(var4)(var5);
        var5 = var9.useSharedValue;
        var5 = var5.bind(var9)(var10);
        var _closure2_slot3 = var5;
        var10 = var11.useEffect;
        var9 = new Array(2);
        var9[0] = var5;
        var9[1] = var8;
        var8 = function() { // Environment: var0
            _fun111625: for (var _fun111625_ip = 0;;) switch (_fun111625_ip) {
                case 0:
                    var2 = _closure2_slot3;
                    var1 = var2.set;
                    var3 = _closure2_slot2;
                    var0 = 0;
                    if (!var3) {
                        _fun111625_ip = 52;
                        continue _fun111625
                    }
                case 21:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 6;
                    var4 = var4[var3];
                    var3 = undefined;
                    var3 = var5.bind(var3)(var4);
                    var0 = var3.FLOATING_CTA_TOTAL_VIEW_HEIGHT;
                case 52:
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
            }
        };
        var8 = var10.bind(var11)(var8, var9);
        var1 = var7[var1];
        var2 = var2.bind(var4)(var1);
        var1 = var2.useDerivedValue;
        var0 = function() {
            var2 = _closure2_slot1;
            var1 = var2.get;
            var1 = var1.bind(var2)();
            var2 = _closure2_slot3;
            var0 = var2.get;
            var0 = var0.bind(var2)();
            var0 = var1 + var0;
            return var0;
        };
        var4 = {};
        var4.consoleStatusHeight = var6;
        var4.floatingCTAHeight = var5;
        var0.__closure = var4;
        var4 = 7974849446653.0;
        var0.__workletHash = var4;
        var3 = _closure1_slot4;
        var0.__initData = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 11770, 14293, 3679, 14298, 14198, 14295, 2]);