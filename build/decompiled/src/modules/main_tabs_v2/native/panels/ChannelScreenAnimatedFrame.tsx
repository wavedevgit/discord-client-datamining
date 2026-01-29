// modules/main_tabs_v2/native/panels/ChannelScreenAnimatedFrame.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var12 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var12;
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
    var3 = var3.View;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var9 = var3.HEADER_CORNER_RADIUS;
    var10 = var3.MIDNIGHT_BORDER_WIDTH;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ThemeTypes;
    var _closure1_slot4 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot5 = var6;
    var3 = var3.jsxs;
    var _closure1_slot6 = var3;
    var3 = 5;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'position': 'absolute',
        'zIndex': 1,
        'top': 0,
        'width': '100%'
    };
    var11 = 6;
    var13 = var5[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_BASE_LOW;
    var8.backgroundColor = var13;
    var3.container = var8;
    var8 = {};
    var11 = var5[var11];
    var11 = var12.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BORDER_STRONG;
    var8.borderLeftColor = var11;
    var8.borderLeftWidth = var10;
    var3.midnightContainer = var8;
    var8 = {};
    var8.height = var9;
    var3.additionalHeight = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot7 = var3;
    var3 = {};
    var6 = 'function ChannelScreenAnimatedFrameTsx1(){const{translateX,maxWidth,isChatLockedOpen,withTiming,STANDARD_EASING,SIDE_PANEL_CLOSE_DURATION_MS,SIDE_PANEL_OPEN_DURATION_MS}=this.__closure;const hide=translateX.get()===maxWidth||isChatLockedOpen;return{opacity:withTiming(hide?0:1,{easing:STANDARD_EASING,duration:hide?SIDE_PANEL_CLOSE_DURATION_MS:SIDE_PANEL_OPEN_DURATION_MS})};}';
    var3.code = var6;
    var _closure1_slot8 = var3;
    var3 = 14;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/main_tabs_v2/native/panels/ChannelScreenAnimatedFrame.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: ChannelScreenAnimatedFrame, environment: var1
        _fun101027: for (var _fun101027_ip = 0;;) switch (_fun101027_ip) {
            case 0:
                var0 = arg0;
                var15 = var0.translateX;
                var _closure2_slot0 = var15;
                var14 = var0.maxWidth;
                var _closure2_slot1 = var14;
                var13 = var0.isChatLockedOpen;
                var _closure2_slot2 = var13;
                var0 = _closure1_slot7;
                var3 = undefined;
                var8 = var0.bind(var3)();
                var1 = _closure1_slot1;
                var4 = _closure1_slot2;
                var0 = 7;
                var0 = var4[var0];
                var0 = var1.bind(var3)(var0);
                var11 = var0.bind(var3)();
                var0 = _closure1_slot4;
                var10 = var0.MIDNIGHT;
                var7 = _closure1_slot0;
                var0 = 8;
                var6 = var4[var0];
                var9 = var7.bind(var3)(var6);
                var6 = var9.useAnimatedStyle;
                var2 = function() { // Original name: S, environment: var2
                    _fun101028: for (var _fun101028_ip = 0;;) switch (_fun101028_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var1 = var2.get;
                            var2 = var1.bind(var2)();
                            var1 = _closure2_slot1;
                            var5 = var2 === var1;
                            if (var5) {
                                _fun101028_ip = 31;
                                continue _fun101028
                            }
                        case 27:
                            var5 = _closure2_slot2;
                        case 31:
                            var0 = {};
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 9;
                            var1 = var3[var1];
                            var8 = undefined;
                            var4 = var2.bind(var8)(var1);
                            var3 = var4.withTiming;
                            var2 = 1;
                            if (!var5) {
                                _fun101028_ip = 71;
                                continue _fun101028
                            }
                        case 69:
                            var2 = 0;
                        case 71:
                            var1 = {};
                            var9 = _closure1_slot0;
                            var10 = _closure1_slot2;
                            var7 = 10;
                            var7 = var10[var7];
                            var7 = var9.bind(var8)(var7);
                            var7 = var7.STANDARD_EASING;
                            var1.easing = var7;
                            var7 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var6 = 11;
                            var6 = var9[var6];
                            var6 = var7.bind(var8)(var6);
                            if (var5) {
                                _fun101028_ip = 135;
                                continue _fun101028
                            }
                        case 127:
                            var5 = var6.SIDE_PANEL_OPEN_DURATION_MS;
                            _fun101028_ip = 141;
                            continue _fun101028;
                        case 135:
                            var5 = var6.SIDE_PANEL_CLOSE_DURATION_MS;
                        case 141:
                            var1.duration = var5;
                            var1 = var3.bind(var4)(var2, var1);
                            var0.opacity = var1;
                            return var0;
                    }
                };
                var12 = {};
                var12.translateX = var15;
                var12.maxWidth = var14;
                var12.isChatLockedOpen = var13;
                var13 = 9;
                var13 = var4[var13];
                var13 = var7.bind(var3)(var13);
                var13 = var13.withTiming;
                var12.withTiming = var13;
                var13 = 10;
                var13 = var4[var13];
                var13 = var7.bind(var3)(var13);
                var13 = var13.STANDARD_EASING;
                var12.STANDARD_EASING = var13;
                var13 = 11;
                var14 = var4[var13];
                var14 = var7.bind(var3)(var14);
                var14 = var14.SIDE_PANEL_CLOSE_DURATION_MS;
                var12.SIDE_PANEL_CLOSE_DURATION_MS = var14;
                var13 = var4[var13];
                var13 = var7.bind(var3)(var13);
                var13 = var13.SIDE_PANEL_OPEN_DURATION_MS;
                var12.SIDE_PANEL_OPEN_DURATION_MS = var13;
                var2.__closure = var12;
                var12 = 9063010717249.0;
                var2.__workletHash = var12;
                var12 = _closure1_slot8;
                var2.__initData = var12;
                var6 = var6.bind(var9)(var2);
                var2 = 12;
                var2 = var4[var2];
                var7 = var7.bind(var3)(var2);
                var2 = var7.useGradientTop;
                var7 = var2.bind(var7)();
                var2 = _closure1_slot6;
                var0 = var4[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.View;
                var0 = {};
                var4 = 'none';
                var0.pointerEvents = var4;
                var9 = var8.container;
                var4 = new Array(4);
                var4[0] = var9;
                var9 = undefined;
                if (!(var11 === var10)) {
                    _fun101027_ip = 328;
                    continue _fun101027
                }
            case 322:
                var9 = var8.midnightContainer;
            case 328:
                var4[1] = var9;
                var4[2] = var7;
                var4[3] = var6;
                var0.style = var4;
                var7 = _closure1_slot5;
                var6 = _closure1_slot0;
                var9 = _closure1_slot2;
                var4 = 13;
                var4 = var9[var4];
                var4 = var6.bind(var3)(var4);
                var6 = var4.SafeAreaPaddingView;
                var4 = {};
                var9 = true;
                var4.top = var9;
                var6 = var7.bind(var3)(var6, var4);
                var4 = new Array(2);
                var4[0] = var6;
                var6 = _closure1_slot3;
                var5 = {};
                var8 = var8.additionalHeight;
                var5.style = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 8845, 660, 33, 1297, 671, 3205, 3677, 4050, 4840, 13108, 8853, 4690, 2]);