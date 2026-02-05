// modules/guild_onboarding_home/native/OnboardingHomeScrollView.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var10;
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
    var3 = var3.ScrollView;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var9 = 4;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.BACKGROUND_SURFACE_HIGH;
    var8.backgroundColor = var9;
    var3.guildFeedBackground = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot5 = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_onboarding_home/native/OnboardingHomeScrollView.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun104849: for (var _fun104849_ip = 0;;) switch (_fun104849_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.guildId;
                var1 = var0.headerOffset;
                var3 = undefined;
                if (!(var1 === var3)) {
                    _fun104849_ip = 26;
                    continue _fun104849
                }
            case 24:
                var1 = 0;
            case 26:
                var _closure2_slot0 = var1;
                var4 = var0.scrollValue;
                var _closure2_slot1 = var4;
                var4 = var0.children;
                var _closure2_slot2 = var3;
                var _closure2_slot3 = var3;
                var _closure2_slot4 = var3;
                var _closure2_slot5 = var3;
                var5 = _closure1_slot5;
                var6 = var5.bind(var3)();
                var9 = _closure1_slot2;
                var8 = var9.useRef;
                var5 = false;
                var5 = var8.bind(var9)(var5);
                _closure2_slot2 = var5;
                var8 = var9.useRef;
                var5 = null;
                var8 = var8.bind(var9)(var5);
                _closure2_slot3 = var8;
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var5 = 5;
                var5 = var11[var5];
                var5 = var10.bind(var3)(var5);
                var5 = var5.bind(var3)();
                var10 = var5.bottom;
                _closure2_slot4 = var10;
                var12 = var9.useEffect;
                var11 = new Array(1);
                var11[0] = var2;
                var5 = function() { // Environment: var7
                    var1 = _closure2_slot2;
                    var0 = false;
                    var1.current = var0;
                    var0 = undefined;
                    return var0;
                };
                var5 = var12.bind(var9)(var5, var11);
                var11 = var9.useRef;
                var5 = true;
                var5 = var11.bind(var9)(var5);
                _closure2_slot5 = var5;
                var11 = var9.useEffect;
                var5 = new Array(1);
                var5[0] = var2;
                var2 = function() { // Environment: var7
                    _fun104851: for (var _fun104851_ip = 0;;) switch (_fun104851_ip) {
                        case 0:
                            var1 = _closure2_slot3;
                            var2 = var1.current;
                            var1 = null;
                            var1 = var1 == var2;
                            if (var1) {
                                _fun104851_ip = 30;
                                continue _fun104851
                            }
                        case 21:
                            var2 = _closure2_slot5;
                            var1 = var2.current;
                        case 30:
                            if (var1) {
                                _fun104851_ip = 63;
                                continue _fun104851
                            }
                        case 33:
                            var1 = _closure2_slot3;
                            var3 = var1.current;
                            var2 = var3.scrollTo;
                            var1 = {
                                'animated': false,
                                'y': 0
                            };
                            var1 = var2.bind(var3)(var1);
                        case 63:
                            var1 = _closure2_slot5;
                            var0 = false;
                            var1.current = var0;
                            var0 = undefined;
                            return var0;
                    }
                };
                var2 = var11.bind(var9)(var2, var5);
                var5 = var9.useMemo;
                var2 = new Array(2);
                var2[0] = var10;
                var2[1] = var1;
                var1 = function() { // Environment: var7
                    var0 = {};
                    var3 = _closure2_slot4;
                    var2 = 16;
                    var2 = var2 + var3;
                    var0.paddingBottom = var2;
                    var1 = _closure2_slot0;
                    var0.marginTop = var1;
                    return var0;
                };
                var5 = var5.bind(var9)(var1, var2);
                var2 = _closure1_slot4;
                var1 = _closure1_slot3;
                var0 = {};
                var0.ref = var8;
                var8 = {};
                var9 = 1;
                var8.right = var9;
                var0.scrollIndicatorInsets = var8;
                var7 = function arg0() {
                    var0 = arg0;
                    var0 = var0.nativeEvent;
                    var0 = var0.contentOffset;
                    var2 = var0.y;
                    var1 = _closure2_slot1;
                    var0 = var1.set;
                    var0 = var0.bind(var1)(var2);
                    var0 = undefined;
                    return var0;
                };
                var0.onScroll = var7;
                var7 = 16;
                var0.scrollEventThrottle = var7;
                var6 = var6.guildFeedBackground;
                var0.style = var6;
                var0.contentContainerStyle = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 1568, 2]);