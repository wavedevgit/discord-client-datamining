// modules/instant_invite/native/components/InstantInviteShareApps.tsx
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
    var3 = var5[var0];
    var0 = undefined;
    var3 = var11.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = metroImportAll;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot4 = var6;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.View;
    var _closure1_slot5 = var7;
    var3 = var3.ScrollView;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.SHARE_ITEMS;
    var _closure1_slot7 = var7;
    var3 = var3.SHARE_ITEMS_DEFAULT;
    var _closure1_slot8 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot9 = var3;
    var3 = 5;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {};
    var10 = 6;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var9.padding = var12;
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_12;
    var9.gap = var10;
    var10 = 'center';
    var9.alignItems = var10;
    var3.contentContainer = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot10 = var3;
    var3 = var6.memo;
    var1 = function arg0() {
        var0 = arg0;
        var1 = var0.onItemPressed;
        var _closure2_slot0 = var1;
        var10 = var0.contentContainerStyle;
        var1 = _closure1_slot10;
        var3 = undefined;
        var8 = var1.bind(var3)();
        var1 = _closure1_slot0;
        var6 = _closure1_slot2;
        var2 = 7;
        var2 = var6[var2];
        var4 = var1.bind(var3)(var2);
        var2 = var4.useFontScale;
        var2 = var2.bind(var4)();
        var _closure2_slot1 = var2;
        var12 = _closure1_slot4;
        var4 = var12.useState;
        var2 = _closure1_slot8;
        var5 = var4.bind(var12)(var2);
        var4 = _closure1_slot3;
        var2 = 2;
        var4 = var4.bind(var3)(var5, var2);
        var2 = 0;
        var9 = var4[var2];
        var2 = 1;
        var2 = var4[var2];
        var _closure2_slot2 = var2;
        var5 = var12.useMemo;
        var4 = function() { // Environment: var7
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 8;
            var1 = var1[var0];
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            var1 = var0.Gesture;
            var0 = var1.Native;
            var2 = var0.bind(var1)();
            var1 = var2.disallowInterruption;
            var0 = true;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var2 = new Array(0);
        var5 = var5.bind(var12)(var4, var2);
        var11 = var12.useEffect;
        var4 = function() { // Environment: var7
            var1 = global;
            var3 = var1.Promise;
            var2 = var3.all;
            var5 = _closure1_slot7;
            var4 = var5.map;
            var1 = function(arg0) { // Environment: var0
                var0 = arg0;
                var0 = var0.isAvailable;
                return var0;
            };
            var1 = var4.bind(var5)(var1);
            var2 = var2.bind(var3)(var1);
            var1 = var2.then;
            var0 = function(arg0) { // Environment: var0
                var3 = arg0;
                var2 = new Array(0);
                var _closure4_slot0 = var2;
                var1 = var3.forEach;
                var0 = function(arg0, arg1) { // Environment: var0
                    _fun67387: for (var _fun67387_ip = 0;;) switch (_fun67387_ip) {
                        case 0:
                            var0 = arg0;
                            if (!var0) {
                                _fun67387_ip = 37;
                                continue _fun67387
                            }
                        case 6:
                            var2 = _closure4_slot0;
                            var1 = var2.push;
                            var3 = _closure1_slot7;
                            var0 = arg1;
                            var0 = var3[var0];
                            var0 = var1.bind(var2)(var0);
                        case 37:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var1.bind(var3)(var0);
                var1 = _closure2_slot2;
                var0 = undefined;
                var1 = var1.bind(var0)(var2);
                return var0;
            };
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var2 = new Array(0);
        var2 = var11.bind(var12)(var4, var2);
        var2 = _closure1_slot9;
        var4 = _closure1_slot6;
        var0 = {
            'contentContainerStyle': null,
            'showsHorizontalScrollIndicator': false,
            'horizontal': true
        };
        var11 = var8.contentContainer;
        var8 = new Array(2);
        var8[0] = var11;
        var8[1] = var10;
        var0.contentContainerStyle = var8;
        var8 = var9.map;
        var7 = function(arg0) { // Environment: var7
            _fun67388: for (var _fun67388_ip = 0;;) switch (_fun67388_ip) {
                case 0:
                    var0 = arg0;
                    var11 = var0.fullIcon;
                    var10 = var0.getLabel;
                    var13 = var0.icon;
                    var12 = var0.IconComponent;
                    var1 = var0.onPress;
                    var _closure3_slot0 = var1;
                    var4 = var0.type;
                    var3 = _closure1_slot9;
                    var2 = _closure1_slot5;
                    var1 = {};
                    var0 = {};
                    var7 = _closure2_slot1;
                    var6 = 76;
                    var6 = var6 * var7;
                    var0.maxWidth = var6;
                    var1.style = var0;
                    var14 = null;
                    if (!(var14 == var11)) {
                        _fun67388_ip = 197;
                        continue _fun67388
                    }
                case 85:
                    var8 = _closure1_slot9;
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var0 = 10;
                    var0 = var7[var0];
                    var7 = undefined;
                    var0 = var6.bind(var7)(var0);
                    var6 = var0.IconButton;
                    var0 = {};
                    var15 = 'secondary';
                    var0.variant = var15;
                    if (!(var14 == var12)) {
                        _fun67388_ip = 158;
                        continue _fun67388
                    }
                case 131:
                    if (!(var14 == var13)) {
                        _fun67388_ip = 155;
                        continue _fun67388
                    }
                case 135:
                    var15 = _closure1_slot1;
                    var16 = _closure1_slot2;
                    var14 = 11;
                    var14 = var16[var14];
                    var13 = var15.bind(var7)(var14);
                case 155:
                    var12 = var13;
                case 158:
                    var0.icon = var12;
                    var12 = var10.bind(var7)();
                    var0.label = var12;
                    var12 = function() {
                        var2 = _closure2_slot0;
                        var1 = _closure3_slot0;
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var0.onPress = var12;
                    var12 = 2;
                    var0.maxFontSizeMultiplier = var12;
                    var0 = var8.bind(var7)(var6, var0);
                    _fun67388_ip = 269;
                    continue _fun67388;
                case 197:
                    var8 = _closure1_slot9;
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var5 = 9;
                    var5 = var7[var5];
                    var7 = undefined;
                    var5 = var6.bind(var7)(var5);
                    var6 = var5.ImageButton;
                    var5 = {};
                    var5.image = var11;
                    var10 = var10.bind(var7)();
                    var5.label = var10;
                    var9 = function() {
                        var2 = _closure2_slot0;
                        var1 = _closure3_slot0;
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var5.onPress = var9;
                    var9 = 2;
                    var5.maxFontSizeMultiplier = var9;
                    var0 = var8.bind(var7)(var6, var5);
                case 269:
                    var1.children = var0;
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2, var1, var4);
                    return var0;
            }
        };
        var7 = var8.bind(var9)(var7);
        var0.children = var7;
        var4 = var2.bind(var3)(var4, var0);
        var0 = 8;
        var0 = var6[var0];
        var0 = var1.bind(var3)(var0);
        var1 = var0.GestureDetector;
        var0 = {};
        var0.gesture = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var1 = var3.bind(var6)(var1);
    var3 = 12;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/instant_invite/native/components/InstantInviteShareApps.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 8319, 33, 1297, 671, 4049, 4924, 8351, 7470, 8129, 2]);