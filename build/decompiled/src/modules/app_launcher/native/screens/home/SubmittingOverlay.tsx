// modules/app_launcher/native/screens/home/SubmittingOverlay.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
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
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'backgroundColor': null,
        'justifyContent': 'center',
        'alignItems': 'center'
    };
    var9 = 2;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.BACKGROUND_SCRIM;
    var8.backgroundColor = var9;
    var3.ellipsis = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot4 = var3;
    var3 = {};
    var6 = "function SubmittingOverlayTsx1(){const{withSpring,submitting,SUBTLE_SPRING}=this.__closure;return{opacity:withSpring(submitting?1:0,SUBTLE_SPRING,'animate-always')};}";
    var3.code = var6;
    var _closure1_slot5 = var3;
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/app_launcher/native/screens/home/SubmittingOverlay.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: SubmittingOverlay, environment: var1
        _fun107324: for (var _fun107324_ip = 0;;) switch (_fun107324_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.submitting;
                var _closure2_slot0 = var4;
                var9 = var0.style;
                var0 = _closure1_slot4;
                var3 = undefined;
                var8 = var0.bind(var3)();
                var12 = _closure1_slot0;
                var6 = _closure1_slot2;
                var0 = 3;
                var2 = var6[var0];
                var7 = var12.bind(var3)(var2);
                var2 = var7.useAnimatedStyle;
                var1 = function() { // Original name: S, environment: var1
                    _fun107325: for (var _fun107325_ip = 0;;) switch (_fun107325_ip) {
                        case 0:
                            var0 = {};
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var2 = 4;
                            var2 = var4[var2];
                            var6 = undefined;
                            var5 = var3.bind(var6)(var2);
                            var4 = var5.withSpring;
                            var2 = _closure2_slot0;
                            var3 = 0;
                            if (!var2) {
                                _fun107325_ip = 47;
                                continue _fun107325
                            }
                        case 44:
                            var3 = 1;
                        case 47:
                            var2 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var1 = 5;
                            var1 = var7[var1];
                            var1 = var2.bind(var6)(var1);
                            var2 = var1.SUBTLE_SPRING;
                            var1 = 'animate-always';
                            var1 = var4.bind(var5)(var3, var2, var1);
                            var0.opacity = var1;
                            return var0;
                    }
                };
                var10 = {};
                var11 = 4;
                var11 = var6[var11];
                var11 = var12.bind(var3)(var11);
                var11 = var11.withSpring;
                var10.withSpring = var11;
                var10.submitting = var4;
                var11 = 5;
                var11 = var6[var11];
                var11 = var12.bind(var3)(var11);
                var11 = var11.SUBTLE_SPRING;
                var10.SUBTLE_SPRING = var11;
                var1.__closure = var10;
                var10 = 492443733468.0;
                var1.__workletHash = var10;
                var10 = _closure1_slot5;
                var1.__initData = var10;
                var7 = var2.bind(var7)(var1);
                var2 = _closure1_slot3;
                var1 = _closure1_slot1;
                var0 = var6[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.View;
                var0 = {};
                var6 = new Array(3);
                var6[0] = var9;
                var8 = var8.ellipsis;
                var6[1] = var8;
                var6[2] = var7;
                var0.style = var6;
                if (!var4) {
                    _fun107324_ip = 257;
                    continue _fun107324
                }
            case 207:
                var7 = _closure1_slot3;
                var6 = _closure1_slot0;
                var8 = _closure1_slot2;
                var5 = 6;
                var5 = var8[var5];
                var5 = var6.bind(var3)(var5);
                var6 = var5.Ellipsis;
                var5 = {
                    'variant': 'active',
                    'size': 'md'
                };
                var4 = var7.bind(var3)(var6, var5);
            case 257:
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.SubmittingOverlay = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [33, 1297, 671, 3679, 4040, 4046, 4061, 2]);