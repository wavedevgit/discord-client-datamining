// modules/settings/native/renderer/SettingListItemHighlight.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
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
    var6 = var3.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.StyleSheet;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {};
    var10 = 5;
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.INTERACTIVE_TEXT_HOVER;
    var9.backgroundColor = var10;
    var3.background = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot7 = var3;
    var3 = {};
    var7 = "function SettingListItemHighlightTsx1(){const{withSequence,withDelay,withTiming,Easing,runOnJS,clearSelectedSearchResult}=this.__closure;return{opacity:withSequence(withDelay(500,withTiming(0,{duration:0})),withTiming(0.2,{duration:300,easing:Easing.ease}),withTiming(0,{duration:300,easing:Easing.ease},'respect-motion-settings',function(finished){if(finished){runOnJS(clearSelectedSearchResult);}}))};}";
    var3.code = var7;
    var _closure1_slot8 = var3;
    var3 = {};
    var7 = 'function SettingListItemHighlightTsx2(finished){const{runOnJS,clearSelectedSearchResult}=this.__closure;if(finished){runOnJS(clearSelectedSearchResult);}}';
    var3.code = var7;
    var _closure1_slot9 = var3;
    var3 = var6.memo;
    var1 = function(arg0) { // Environment: var1
        var2 = arg0;
        var0 = var2.start;
        var _closure2_slot0 = var0;
        var7 = var2.end;
        var _closure2_slot1 = var7;
        var5 = var2.style;
        var2 = _closure1_slot7;
        var3 = undefined;
        var8 = var2.bind(var3)();
        var9 = _closure1_slot3;
        var6 = var9.useMemo;
        var2 = new Array(2);
        var2[0] = var7;
        var2[1] = var0;
        var0 = function() { // Environment: var1
            _fun88967: for (var _fun88967_ip = 0;;) switch (_fun88967_ip) {
                case 0:
                    var0 = {};
                    var3 = _closure2_slot0;
                    var4 = undefined;
                    var2 = undefined;
                    if (!var3) {
                        _fun88967_ip = 50;
                        continue _fun88967
                    }
                case 16:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var3 = 5;
                    var3 = var6[var3];
                    var3 = var5.bind(var4)(var3);
                    var3 = var3.radii;
                    var2 = var3.lg;
                case 50:
                    var0.borderTopStartRadius = var2;
                    var3 = _closure2_slot0;
                    var2 = undefined;
                    if (!var3) {
                        _fun88967_ip = 98;
                        continue _fun88967
                    }
                case 64:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var3 = 5;
                    var3 = var6[var3];
                    var3 = var5.bind(var4)(var3);
                    var3 = var3.radii;
                    var2 = var3.lg;
                case 98:
                    var0.borderTopEndRadius = var2;
                    var3 = _closure2_slot1;
                    var2 = undefined;
                    if (!var3) {
                        _fun88967_ip = 146;
                        continue _fun88967
                    }
                case 112:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var3 = 5;
                    var3 = var6[var3];
                    var3 = var5.bind(var4)(var3);
                    var3 = var3.radii;
                    var2 = var3.lg;
                case 146:
                    var0.borderBottomStartRadius = var2;
                    var2 = _closure2_slot1;
                    var1 = undefined;
                    if (!var2) {
                        _fun88967_ip = 194;
                        continue _fun88967
                    }
                case 160:
                    var3 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var2 = 5;
                    var2 = var5[var2];
                    var2 = var3.bind(var4)(var2);
                    var2 = var2.radii;
                    var1 = var2.lg;
                case 194:
                    var0.borderBottomEndRadius = var1;
                    return var0;
            }
        };
        var7 = var6.bind(var9)(var0, var2);
        var6 = var9.useCallback;
        var2 = function() { // Environment: var1
            var2 = _closure1_slot5;
            var1 = var2.setState;
            var0 = {};
            var3 = null;
            var0.selected = var3;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var0 = new Array(0);
        var11 = var6.bind(var9)(var2, var0);
        var _closure2_slot2 = var11;
        var13 = _closure1_slot0;
        var9 = _closure1_slot2;
        var0 = 6;
        var2 = var9[var0];
        var6 = var13.bind(var3)(var2);
        var2 = var6.useAnimatedStyle;
        var1 = function() { // Original name: _, environment: var1
            var0 = {};
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var12 = 6;
            var2 = var15[var12];
            var13 = undefined;
            var5 = var14.bind(var13)(var2);
            var4 = var5.withSequence;
            var2 = var15[var12];
            var8 = var14.bind(var13)(var2);
            var6 = var8.withDelay;
            var7 = 7;
            var2 = var15[var7];
            var9 = var14.bind(var13)(var2);
            var3 = var9.withTiming;
            var2 = {};
            var10 = 0;
            var2.duration = var10;
            var3 = var3.bind(var9)(var10, var2);
            var2 = 500;
            var3 = var6.bind(var8)(var2, var3);
            var2 = var15[var7];
            var11 = var14.bind(var13)(var2);
            var9 = var11.withTiming;
            var8 = {};
            var6 = 300;
            var8.duration = var6;
            var2 = var15[var12];
            var2 = var14.bind(var13)(var2);
            var2 = var2.Easing;
            var2 = var2.ease;
            var8.easing = var2;
            var2 = 0.2;
            var2 = var9.bind(var11)(var2, var8);
            var7 = var15[var7];
            var9 = var14.bind(var13)(var7);
            var8 = var9.withTiming;
            var7 = {};
            var7.duration = var6;
            var6 = var15[var12];
            var6 = var14.bind(var13)(var6);
            var6 = var6.Easing;
            var6 = var6.ease;
            var7.easing = var6;
            var6 = function(arg0) { // Original name: t, environment: var6
                _fun88970: for (var _fun88970_ip = 0;;) switch (_fun88970_ip) {
                    case 0:
                        var0 = arg0;
                        if (!var0) {
                            _fun88970_ip = 48;
                            continue _fun88970
                        }
                    case 6:
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var0 = 6;
                        var1 = var1[var0];
                        var0 = undefined;
                        var2 = var2.bind(var0)(var1);
                        var1 = var2.runOnJS;
                        var0 = _closure2_slot2;
                        var0 = var1.bind(var2)(var0);
                    case 48:
                        var0 = undefined;
                        return var0;
                }
            };
            var11 = {};
            var12 = var15[var12];
            var12 = var14.bind(var13)(var12);
            var12 = var12.runOnJS;
            var11.runOnJS = var12;
            var12 = _closure2_slot2;
            var11.clearSelectedSearchResult = var12;
            var6.__closure = var11;
            var11 = 13391094209244.0;
            var6.__workletHash = var11;
            var1 = _closure1_slot9;
            var6.__initData = var1;
            var17 = 'respect-motion-settings';
            var20 = var9;
            var19 = 0;
            var18 = var7;
            var16 = var6;
            var1 = var20[var8](var19, var18, var17, var16, var15);
            var1 = var4.bind(var5)(var3, var2, var1);
            var0.opacity = var1;
            return var0;
        };
        var10 = {};
        var12 = var9[var0];
        var12 = var13.bind(var3)(var12);
        var12 = var12.withSequence;
        var10.withSequence = var12;
        var12 = var9[var0];
        var12 = var13.bind(var3)(var12);
        var12 = var12.withDelay;
        var10.withDelay = var12;
        var12 = 7;
        var12 = var9[var12];
        var12 = var13.bind(var3)(var12);
        var12 = var12.withTiming;
        var10.withTiming = var12;
        var12 = var9[var0];
        var12 = var13.bind(var3)(var12);
        var12 = var12.Easing;
        var10.Easing = var12;
        var12 = var9[var0];
        var12 = var13.bind(var3)(var12);
        var12 = var12.runOnJS;
        var10.runOnJS = var12;
        var10.clearSelectedSearchResult = var11;
        var1.__closure = var10;
        var10 = 13630242918990.0;
        var1.__workletHash = var10;
        var10 = _closure1_slot8;
        var1.__initData = var10;
        var6 = var2.bind(var6)(var1);
        var2 = _closure1_slot6;
        var1 = _closure1_slot1;
        var0 = var9[var0];
        var0 = var1.bind(var3)(var0);
        var1 = var0.View;
        var0 = {};
        var9 = 'none';
        var0.pointerEvents = var9;
        var4 = _closure1_slot4;
        var9 = var4.absoluteFill;
        var4 = new Array(5);
        var4[0] = var9;
        var8 = var8.background;
        var4[1] = var8;
        var4[2] = var7;
        var4[3] = var6;
        var4[4] = var5;
        var0.style = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var1 = var3.bind(var6)(var1);
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/settings/native/renderer/SettingListItemHighlight.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 10084, 33, 1297, 671, 3677, 4050, 2]);