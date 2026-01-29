// modules/contact_sync/native/components/ContactSyncError.tsx
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
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var9 = 'center';
    var8.justifyContent = var9;
    var3.container = var8;
    var8 = {
        'paddingHorizontal': 16,
        'textAlign': 'center'
    };
    var3.error = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot4 = var3;
    var3 = {};
    var6 = 'function ContactSyncErrorTsx1(){const{withTiming,hasError,ERROR_HEIGHT}=this.__closure;return{height:withTiming(hasError?ERROR_HEIGHT:0)};}';
    var3.code = var6;
    var _closure1_slot5 = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/contact_sync/native/components/ContactSyncError.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: ContactSyncError, environment: var1
        _fun80594: for (var _fun80594_ip = 0;;) switch (_fun80594_ip) {
            case 0:
                var0 = arg0;
                var10 = var0.style;
                var6 = var0.error;
                var3 = undefined;
                var _closure2_slot0 = var3;
                var0 = _closure1_slot4;
                var7 = var0.bind(var3)();
                var0 = null;
                var12 = var0 != var6;
                if (!var12) {
                    _fun80594_ip = 49;
                    continue _fun80594
                }
            case 41:
                var0 = '';
                var12 = var0 !== var6;
            case 49:
                _closure2_slot0 = var12;
                var5 = _closure1_slot0;
                var8 = _closure1_slot2;
                var0 = 3;
                var4 = var8[var0];
                var9 = var5.bind(var3)(var4);
                var4 = var9.useAnimatedStyle;
                var2 = function() { // Original name: l, environment: var2
                    _fun80595: for (var _fun80595_ip = 0;;) switch (_fun80595_ip) {
                        case 0:
                            var0 = {};
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 4;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.withTiming;
                            var4 = _closure2_slot0;
                            var1 = 0;
                            if (!var4) {
                                _fun80595_ip = 47;
                                continue _fun80595
                            }
                        case 44:
                            var1 = 44;
                        case 47:
                            var1 = var2.bind(var3)(var1);
                            var0.height = var1;
                            return var0;
                    }
                };
                var11 = {};
                var13 = 4;
                var13 = var8[var13];
                var13 = var5.bind(var3)(var13);
                var13 = var13.withTiming;
                var11.withTiming = var13;
                var11.hasError = var12;
                var12 = 44;
                var11.ERROR_HEIGHT = var12;
                var2.__closure = var11;
                var11 = 14558247431913.0;
                var2.__workletHash = var11;
                var11 = _closure1_slot5;
                var2.__initData = var11;
                var9 = var4.bind(var9)(var2);
                var2 = _closure1_slot3;
                var1 = _closure1_slot1;
                var0 = var8[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.View;
                var0 = {};
                var11 = var7.container;
                var4 = new Array(3);
                var4[0] = var11;
                var4[1] = var10;
                var4[2] = var9;
                var0.style = var4;
                var4 = 5;
                var4 = var8[var4];
                var4 = var5.bind(var3)(var4);
                var5 = var4.Text;
                var4 = {
                    'variant': 'text-sm/medium',
                    'color': 'text-feedback-critical'
                };
                var7 = var7.error;
                var4.style = var7;
                var4.children = var6;
                var4 = var2.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 33, 1297, 3677, 4050, 3895, 2]);