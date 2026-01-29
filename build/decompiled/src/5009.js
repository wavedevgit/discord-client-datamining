// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
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
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.useMemo;
    var _closure1_slot4 = var6;
    var3 = var3.useState;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var4 = var3.Platform;
    var _closure1_slot6 = var4;
    var3 = var3.StyleSheet;
    var _closure1_slot7 = var3;
    var3 = {};
    var4 = 'function pnpm_useBottomSheetContentContainerStyleTs1(){const{animatedFooterHeight}=this.__closure;return animatedFooterHeight.get();}';
    var3.code = var4;
    var _closure1_slot8 = var3;
    var3 = {};
    var4 = "function pnpm_useBottomSheetContentContainerStyleTs2(result,previousFooterHeight){const{enableFooterMarginAdjustment,runOnJS,setFooterHeight,Platform,animatedContentHeight}=this.__closure;if(!enableFooterMarginAdjustment){return;}runOnJS(setFooterHeight)(result);if(Platform.OS==='web'){if(result&&!previousFooterHeight){const contentHeight=animatedContentHeight.get();animatedContentHeight.set(contentHeight+result);}}}";
    var3.code = var4;
    var _closure1_slot9 = var3;
    var1 = function(arg0, arg1) { // Original name: useBottomSheetContentContainerStyle, environment: var1
        var6 = arg0;
        var0 = arg1;
        var _closure2_slot0 = var6;
        var _closure2_slot1 = var0;
        var4 = _closure1_slot5;
        var13 = undefined;
        var3 = 0;
        var7 = var4.bind(var13)(var3);
        var5 = _closure1_slot3;
        var4 = 2;
        var4 = var5.bind(var13)(var7, var4);
        var5 = var4[var3];
        var _closure2_slot2 = var5;
        var3 = 1;
        var10 = var4[var3];
        var _closure2_slot3 = var10;
        var12 = _closure1_slot0;
        var14 = _closure1_slot1;
        var3 = 4;
        var3 = var14[var3];
        var4 = var12.bind(var13)(var3);
        var3 = var4.useBottomSheetInternal;
        var3 = var3.bind(var4)();
        var8 = var3.animatedFooterHeight;
        var _closure2_slot4 = var8;
        var7 = var3.animatedContentHeight;
        var4 = _closure1_slot4;
        var3 = new Array(1);
        var3[0] = var0;
        var0 = function() { // Environment: var2
            _fun45225: for (var _fun45225_ip = 0;;) switch (_fun45225_ip) {
                case 0:
                    var0 = _closure2_slot1;
                    if (var0) {
                        _fun45225_ip = 14;
                        continue _fun45225
                    }
                case 10:
                    var0 = {};
                    _fun45225_ip = 87;
                    continue _fun45225;
                case 14:
                    var1 = global;
                    var4 = var1.Array;
                    var3 = var4.isArray;
                    var1 = _closure2_slot1;
                    var1 = var3.bind(var4)(var1);
                    if (var1) {
                        _fun45225_ip = 45;
                        continue _fun45225
                    }
                case 39:
                    var1 = _closure2_slot1;
                    _fun45225_ip = 84;
                    continue _fun45225;
                case 45:
                    var5 = _closure1_slot7;
                    var4 = var5.compose;
                    var3 = var4.apply;
                    var7 = _closure1_slot2;
                    var6 = _closure2_slot1;
                    var2 = undefined;
                    var2 = var7.bind(var2)(var6);
                    var1 = var3.bind(var4)(var5, var2);
                case 84:
                    var0 = var1;
                case 87:
                    return var0;
            }
        };
        var0 = var4.bind(var13)(var0, var3);
        var _closure2_slot5 = var0;
        var3 = new Array(3);
        var3[0] = var5;
        var3[1] = var6;
        var3[2] = var0;
        var0 = function() { // Environment: var2
            _fun45226: for (var _fun45226_ip = 0;;) switch (_fun45226_ip) {
                case 0:
                    var1 = _closure2_slot0;
                    var0 = _closure2_slot5;
                    if (var1) {
                        _fun45226_ip = 16;
                        continue _fun45226
                    }
                case 14:
                    return var0;
                case 16:
                    var3 = 0;
                    if (!var0) {
                        _fun45226_ip = 123;
                        continue _fun45226
                    }
                case 21:
                    var0 = _closure2_slot5;
                    var1 = 'object';
                    var0 = typeof var0;
                    var3 = 0;
                    if (!(var1 === var0)) {
                        _fun45226_ip = 123;
                        continue _fun45226
                    }
                case 38:
                    var1 = _closure2_slot5;
                    var8 = var1.paddingBottom;
                    var0 = var1.padding;
                    var7 = var1.paddingVertical;
                    var1 = undefined;
                    if (!(var1 !== var8)) {
                        _fun45226_ip = 79;
                        continue _fun45226
                    }
                case 65:
                    var6 = 'number';
                    var5 = typeof var8;
                    var3 = var8;
                    if (!(var6 !== var5)) {
                        _fun45226_ip = 123;
                        continue _fun45226
                    }
                case 79:
                    if (!(var1 !== var7)) {
                        _fun45226_ip = 97;
                        continue _fun45226
                    }
                case 83:
                    var6 = 'number';
                    var5 = typeof var7;
                    var3 = var7;
                    if (!(var6 !== var5)) {
                        _fun45226_ip = 123;
                        continue _fun45226
                    }
                case 97:
                    var1 = var1 !== var0;
                    if (!var1) {
                        _fun45226_ip = 115;
                        continue _fun45226
                    }
                case 104:
                    var6 = 'number';
                    var5 = typeof var0;
                    var1 = var6 === var5;
                case 115:
                    var3 = 0;
                    if (!var1) {
                        _fun45226_ip = 123;
                        continue _fun45226
                    }
                case 120:
                    var3 = var0;
                case 123:
                    var1 = _closure2_slot5;
                    var0 = new Array(2);
                    var0[0] = var1;
                    var1 = {};
                    var2 = _closure2_slot2;
                    var2 = var3 + var2;
                    var1.paddingBottom = var2;
                    var2 = 'visible';
                    var1.overflow = var2;
                    var0[1] = var1;
                    return var0;
            }
        };
        var0 = var4.bind(var13)(var0, var3);
        var11 = 5;
        var3 = var14[var11];
        var5 = var12.bind(var13)(var3);
        var4 = var5.useAnimatedReaction;
        var3 = function() { // Original name: pnpm_useBottomSheetContentContainerStyleTs1, environment: var2
            var1 = _closure2_slot4;
            var0 = var1.get;
            var0 = var0.bind(var1)();
            return var0;
        };
        var9 = {};
        var9.animatedFooterHeight = var8;
        var3.__closure = var9;
        var9 = 10172145694310.0;
        var3.__workletHash = var9;
        var9 = _closure1_slot8;
        var3.__initData = var9;
        var2 = function(arg0, arg1) { // Original name: pnpm_useBottomSheetContentContainerStyleTs2, environment: var2
            _fun45228: for (var _fun45228_ip = 0;;) switch (_fun45228_ip) {
                case 0:
                    var1 = _closure2_slot0;
                    if (!var1) {
                        _fun45228_ip = 57;
                        continue _fun45228
                    }
                case 10:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 5;
                    var1 = var2[var1];
                    var2 = undefined;
                    var3 = var3.bind(var2)(var1);
                    var1 = var3.runOnJS;
                    var0 = _closure2_slot3;
                    var1 = var1.bind(var3)(var0);
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                case 57:
                    var0 = undefined;
                    return var0;
            }
        };
        var9 = {};
        var9.enableFooterMarginAdjustment = var6;
        var11 = var14[var11];
        var11 = var12.bind(var13)(var11);
        var11 = var11.runOnJS;
        var9.runOnJS = var11;
        var9.setFooterHeight = var10;
        var10 = _closure1_slot6;
        var9.Platform = var10;
        var9.animatedContentHeight = var7;
        var2.__closure = var9;
        var9 = 1149497927090.0;
        var2.__workletHash = var9;
        var1 = _closure1_slot9;
        var2.__initData = var1;
        var1 = new Array(3);
        var1[0] = var8;
        var1[1] = var7;
        var1[2] = var6;
        var1 = var4.bind(var5)(var3, var2, var1);
        return var0;
    };
    var2.useBottomSheetContentContainerStyle = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [65, 57, 31, 27, 4897, 3678]);