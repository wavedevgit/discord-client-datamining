// modules/notification_center/native/ForYouMentionPlaceholder.tsx
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
    var3 = var3.bind(var0)(var6);
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot5 = var6;
    var3 = var3.jsxs;
    var _closure1_slot6 = var3;
    var9 = 4;
    var3 = var5[var9];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'flexDirection': 'row',
        'marginBottom': 16,
        'marginHorizontal': 24
    };
    var3.placeholder = var8;
    var8 = {
        'backgroundColor': null,
        'height': 52,
        'width': 52,
        'borderRadius': 26,
        'marginEnd': 12
    };
    var10 = 5;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_MOD_STRONG;
    var8.backgroundColor = var12;
    var3.placeholderImage = var8;
    var8 = {
        'backgroundColor': null,
        'height': 15,
        'borderRadius': null,
        'marginRight': 12,
        'marginBottom': 4
    };
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_MOD_STRONG;
    var8.backgroundColor = var12;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.sm;
    var8.borderRadius = var12;
    var3.placeholderText = var8;
    var8 = {
        'flexDirection': 'row',
        'flexWrap': 'wrap'
    };
    var3.placeholderTextContainer = var8;
    var8 = {};
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_MOD_STRONG;
    var8.backgroundColor = var12;
    var12 = 40;
    var8.height = var12;
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.radii;
    var10 = var10.sm;
    var8.borderRadius = var10;
    var8.marginTop = var9;
    var3.placeholderBody = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot7 = var3;
    var3 = [70, 50];
    var _closure1_slot8 = var3;
    var3 = {};
    var6 = 'function ForYouMentionPlaceholderTsx1(){const{reducedMotion,opacity}=this.__closure;return{opacity:reducedMotion?0.7:opacity.get()};}';
    var3.code = var6;
    var _closure1_slot9 = var3;
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/notification_center/native/ForYouMentionPlaceholder.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() { // Environment: var1
        var0 = _closure1_slot7;
        var3 = undefined;
        var10 = var0.bind(var3)();
        var _closure2_slot0 = var10;
        var2 = _closure1_slot0;
        var4 = _closure1_slot2;
        var0 = 6;
        var0 = var4[var0];
        var6 = var2.bind(var3)(var0);
        var5 = var6.useStateFromStores;
        var0 = _closure1_slot4;
        var1 = new Array(1);
        var1[0] = var0;
        var0 = function() { // Environment: var8
            var0 = _closure1_slot4;
            var0 = var0.useReducedMotion;
            return var0;
        };
        var9 = var5.bind(var6)(var1, var0);
        var _closure2_slot1 = var9;
        var0 = 7;
        var1 = var4[var0];
        var6 = var2.bind(var3)(var1);
        var5 = var6.useSharedValue;
        var1 = 0.3;
        var7 = var5.bind(var6)(var1);
        var _closure2_slot2 = var7;
        var5 = var7.set;
        var1 = var4[var0];
        var14 = var2.bind(var3)(var1);
        var13 = var14.withRepeat;
        var1 = 8;
        var1 = var4[var1];
        var15 = var2.bind(var3)(var1);
        var12 = var15.withTiming;
        var6 = {};
        var1 = 1000;
        var6.duration = var1;
        var1 = var4[var0];
        var1 = var2.bind(var3)(var1);
        var17 = var1.Easing;
        var16 = var17.inOut;
        var1 = var4[var0];
        var1 = var2.bind(var3)(var1);
        var1 = var1.Easing;
        var1 = var1.ease;
        var1 = var16.bind(var17)(var1);
        var6.easing = var1;
        var1 = 0.7;
        var12 = var12.bind(var15)(var1, var6);
        var6 = -1;
        var1 = true;
        var1 = var13.bind(var14)(var12, var6, var1);
        var1 = var5.bind(var7)(var1);
        var1 = var4[var0];
        var5 = var2.bind(var3)(var1);
        var2 = var5.useAnimatedStyle;
        var1 = function() {
            _fun103198: for (var _fun103198_ip = 0;;) switch (_fun103198_ip) {
                case 0:
                    var0 = {};
                    var3 = _closure2_slot1;
                    var1 = 0.7;
                    if (var3) {
                        _fun103198_ip = 35;
                        continue _fun103198
                    }
                case 22:
                    var3 = _closure2_slot2;
                    var2 = var3.get;
                    var1 = var2.bind(var3)();
                case 35:
                    var0.opacity = var1;
                    return var0;
            }
        };
        var6 = {};
        var6.reducedMotion = var9;
        var6.opacity = var7;
        var1.__closure = var6;
        var6 = 8828208724188.0;
        var1.__workletHash = var6;
        var6 = _closure1_slot9;
        var1.__initData = var6;
        var5 = var2.bind(var5)(var1);
        var2 = _closure1_slot6;
        var1 = _closure1_slot1;
        var0 = var4[var0];
        var0 = var1.bind(var3)(var0);
        var1 = var0.View;
        var0 = {};
        var6 = var10.placeholder;
        var4 = new Array(2);
        var4[0] = var6;
        var4[1] = var5;
        var0.style = var4;
        var9 = _closure1_slot5;
        var6 = _closure1_slot3;
        var4 = {};
        var5 = var10.placeholderImage;
        var4.style = var5;
        var5 = var9.bind(var3)(var6, var4);
        var4 = new Array(2);
        var4[0] = var5;
        var5 = {};
        var7 = {};
        var12 = var10.placeholderTextContainer;
        var7.style = var12;
        var12 = _closure1_slot8;
        var11 = var12.map;
        var8 = function(arg0, arg1) { // Environment: var8
            var4 = _closure1_slot5;
            var3 = _closure1_slot3;
            var2 = {};
            var0 = _closure2_slot0;
            var1 = var0.placeholderText;
            var0 = new Array(2);
            var0[0] = var1;
            var1 = {};
            var5 = global;
            var5 = var5.HermesInternal;
            var8 = var5.concat;
            var7 = '';
            var6 = arg0;
            var5 = '%';
            var5 = var8.bind(var7)(var6, var5);
            var1.width = var5;
            var0[1] = var1;
            var2.style = var0;
            var1 = undefined;
            var0 = arg1;
            var0 = var4.bind(var1)(var3, var2, var0);
            return var0;
        };
        var8 = var11.bind(var12)(var8);
        var7.children = var8;
        var8 = var9.bind(var3)(var6, var7);
        var7 = new Array(2);
        var7[0] = var8;
        var8 = {};
        var11 = var10.placeholderBody;
        var10 = new Array(2);
        var10[0] = var11;
        var11 = {};
        var12 = '85%';
        var11.width = var12;
        var10[1] = var11;
        var8.style = var10;
        var8 = var9.bind(var3)(var6, var8);
        var7[1] = var8;
        var5.children = var7;
        var5 = var2.bind(var3)(var6, var5);
        var4[1] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.ForYouMentionPlaceholder = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1298, 33, 1297, 671, 566, 3679, 4056, 2]);