// modules/media_keyboard/native/components/MediaKeyboardListHeader.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var13 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var6;
    var0 = global;
    var7 = var0.Object;
    var4 = var7.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var7)(var2, var0, var1);
    var0 = 0;
    var4 = var6[var0];
    var1 = metroImportAll;
    var0 = undefined;
    var7 = var1.bind(var0)(var4);
    var _closure1_slot3 = var7;
    var1 = 1;
    var1 = var6[var1];
    var1 = var13.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var11 = 2;
    var1 = var6[var11];
    var1 = var5.bind(var0)(var1);
    var12 = var1.HEADER_HANDLE_HEIGHT;
    var1 = 3;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var1 = var1.jsx;
    var _closure1_slot5 = var1;
    var1 = {
        'mass': 0.1,
        'damping': 13,
        'stiffness': 270,
        'overshootClamping': true
    };
    var _closure1_slot6 = var1;
    var1 = 4;
    var1 = var6[var1];
    var9 = var5.bind(var0)(var1);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {
        'flex': 1,
        'flexDirection': 'row',
        'justifyContent': 'space-around',
        'overflow': 'hidden',
        'paddingHorizontal': null,
        'paddingBottom': 16,
        'gap': 8,
        'top': null,
        'left': 0,
        'right': 0
    };
    var1 = 5;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var1 = var1.PARENT_PADDING;
    var1 = var1 / var11;
    var10.paddingHorizontal = var1;
    var1 = 16;
    var11 = 8;
    var10.top = var12;
    var4.header = var10;
    var10 = {};
    var12 = 6;
    var12 = var6[var12];
    var12 = var13.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.INTERACTIVE_TEXT_DEFAULT;
    var10.tintColor = var12;
    var10.marginRight = var11;
    var4.headerIcon = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot7 = var4;
    var4 = {};
    var8 = 'function MediaKeyboardListHeaderTsx1(){const{animatedIndex,animatedIndexThreshold,animatedSnapPoints,reducedMotion,withSpring,HEADER_SPRING}=this.__closure;const nearTop=animatedIndex.get()>animatedIndexThreshold(animatedSnapPoints,0.7);const targetOpacity=nearTop?0:1;const targetTranslateY=nearTop?30:0;const targetScale=nearTop?0.9:1;return{paddingTop:0,opacity:reducedMotion?targetOpacity:withSpring(targetOpacity,HEADER_SPRING),transform:[{translateY:reducedMotion?targetTranslateY:withSpring(targetTranslateY,HEADER_SPRING)},{scale:reducedMotion?targetScale:withSpring(targetScale,HEADER_SPRING)}]};}';
    var4.code = var8;
    var _closure1_slot8 = var4;
    var4 = {};
    var8 = "function MediaKeyboardListHeaderTsx2(){const{animatedIndex,animatedIndexThreshold,animatedSnapPoints}=this.__closure;return{pointerEvents:animatedIndex.get()<animatedIndexThreshold(animatedSnapPoints,0.5)?'auto':'none'};}";
    var4.code = var8;
    var _closure1_slot9 = var4;
    var4 = var7.memo;
    var3 = function(arg0) { // Original name: MediaKeyboardListHeader, environment: var3
        var0 = arg0;
        var14 = var0.animatedIndex;
        var _closure2_slot0 = var14;
        var6 = var0.overflowButtons;
        var1 = _closure1_slot7;
        var3 = undefined;
        var7 = var1.bind(var3)();
        var _closure2_slot1 = var7;
        var2 = _closure1_slot0;
        var10 = _closure1_slot2;
        var1 = 7;
        var1 = var10[var1];
        var9 = var2.bind(var3)(var1);
        var8 = var9.useStateFromStores;
        var1 = _closure1_slot4;
        var5 = new Array(1);
        var5[0] = var1;
        var1 = function() { // Environment: var4
            var0 = _closure1_slot4;
            var0 = var0.useReducedMotion;
            return var0;
        };
        var15 = var8.bind(var9)(var5, var1);
        var _closure2_slot2 = var15;
        var1 = 8;
        var1 = var10[var1];
        var5 = var2.bind(var3)(var1);
        var1 = var5.useBottomSheetInternal;
        var1 = var1.bind(var5)();
        var12 = var1.animatedSnapPoints;
        var _closure2_slot3 = var12;
        var1 = 9;
        var5 = var10[var1];
        var9 = var2.bind(var3)(var5);
        var8 = var9.useAnimatedStyle;
        var5 = function() { // Original name: _, environment: var4
            _fun75444: for (var _fun75444_ip = 0;;) switch (_fun75444_ip) {
                case 0:
                    var1 = _closure2_slot0;
                    var0 = var1.get;
                    var1 = var0.bind(var1)();
                    var2 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var0 = 10;
                    var0 = var5[var0];
                    var8 = undefined;
                    var6 = var2.bind(var8)(var0);
                    var5 = var6.animatedIndexThreshold;
                    var2 = _closure2_slot3;
                    var0 = 0.7;
                    var0 = var5.bind(var6)(var2, var0);
                    var0 = var1 > var0;
                    var7 = 1;
                    var9 = var7;
                    if (!var0) {
                        _fun75444_ip = 82;
                        continue _fun75444
                    }
                case 80:
                    var9 = 0;
                case 82:
                    var1 = 0;
                    var10 = 0;
                    if (!var0) {
                        _fun75444_ip = 92;
                        continue _fun75444
                    }
                case 89:
                    var10 = 30;
                case 92:
                    if (!var0) {
                        _fun75444_ip = 105;
                        continue _fun75444
                    }
                case 95:
                    var7 = 0.9;
                case 105:
                    var0 = {};
                    var0.paddingTop = var1;
                    var2 = _closure2_slot2;
                    var1 = var9;
                    if (var2) {
                        _fun75444_ip = 157;
                        continue _fun75444
                    }
                case 122:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var2 = 11;
                    var2 = var6[var2];
                    var6 = var5.bind(var8)(var2);
                    var5 = var6.withSpring;
                    var2 = _closure1_slot6;
                    var1 = var5.bind(var6)(var9, var2);
                case 157:
                    var0.opacity = var1;
                    var2 = {};
                    var5 = _closure2_slot2;
                    var1 = var10;
                    if (var5) {
                        _fun75444_ip = 208;
                        continue _fun75444
                    }
                case 173:
                    var6 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var5 = 11;
                    var5 = var9[var5];
                    var9 = var6.bind(var8)(var5);
                    var6 = var9.withSpring;
                    var5 = _closure1_slot6;
                    var1 = var6.bind(var9)(var10, var5);
                case 208:
                    var2.translateY = var1;
                    var1 = new Array(2);
                    var1[0] = var2;
                    var2 = {};
                    var5 = _closure2_slot2;
                    var3 = var7;
                    if (var5) {
                        _fun75444_ip = 268;
                        continue _fun75444
                    }
                case 233:
                    var6 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var5 = 11;
                    var5 = var9[var5];
                    var6 = var6.bind(var8)(var5);
                    var5 = var6.withSpring;
                    var4 = _closure1_slot6;
                    var3 = var5.bind(var6)(var7, var4);
                case 268:
                    var2.scale = var3;
                    var1[1] = var2;
                    var0.transform = var1;
                    return var0;
            }
        };
        var11 = {};
        var11.animatedIndex = var14;
        var13 = 10;
        var16 = var10[var13];
        var16 = var2.bind(var3)(var16);
        var16 = var16.animatedIndexThreshold;
        var11.animatedIndexThreshold = var16;
        var11.animatedSnapPoints = var12;
        var11.reducedMotion = var15;
        var15 = 11;
        var15 = var10[var15];
        var15 = var2.bind(var3)(var15);
        var15 = var15.withSpring;
        var11.withSpring = var15;
        var15 = _closure1_slot6;
        var11.HEADER_SPRING = var15;
        var5.__closure = var11;
        var11 = 63674039954.0;
        var5.__workletHash = var11;
        var11 = _closure1_slot8;
        var5.__initData = var11;
        var9 = var8.bind(var9)(var5);
        var1 = var10[var1];
        var8 = var2.bind(var3)(var1);
        var5 = var8.useAnimatedProps;
        var1 = function() { // Original name: I, environment: var4
            _fun75445: for (var _fun75445_ip = 0;;) switch (_fun75445_ip) {
                case 0:
                    var0 = {};
                    var3 = _closure2_slot0;
                    var2 = var3.get;
                    var2 = var2.bind(var3)();
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 10;
                    var4 = var4[var3];
                    var3 = undefined;
                    var5 = var5.bind(var3)(var4);
                    var4 = var5.animatedIndexThreshold;
                    var3 = _closure2_slot3;
                    var1 = 0.5;
                    var1 = var4.bind(var5)(var3, var1);
                    var2 = var2 < var1;
                    var1 = 'none';
                    if (!var2) {
                        _fun75445_ip = 84;
                        continue _fun75445
                    }
                case 80:
                    var1 = 'auto';
                case 84:
                    var0.pointerEvents = var1;
                    return var0;
            }
        };
        var11 = {};
        var11.animatedIndex = var14;
        var13 = var10[var13];
        var13 = var2.bind(var3)(var13);
        var13 = var13.animatedIndexThreshold;
        var11.animatedIndexThreshold = var13;
        var11.animatedSnapPoints = var12;
        var1.__closure = var11;
        var11 = 1463681350701.0;
        var1.__workletHash = var11;
        var11 = _closure1_slot9;
        var1.__initData = var11;
        var5 = var5.bind(var8)(var1);
        var1 = 12;
        var8 = var10[var1];
        var11 = var2.bind(var3)(var8);
        var8 = var11.useGradientBottom;
        var8 = var8.bind(var11)();
        var _closure2_slot4 = var8;
        var13 = _closure1_slot3;
        var12 = var13.useMemo;
        var11 = new Array(1);
        var11[0] = var8;
        var8 = function() { // Environment: var4
            var0 = {};
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 6;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var1 = var1.spacing;
            var1 = var1.PX_4;
            var0.marginBottom = var1;
            var4 = _closure2_slot4;
            var5 = var0;
            var1 = copyDataProperties(var5, var4);
            return var0;
        };
        var8 = var12.bind(var13)(var8, var11);
        var1 = var10[var1];
        var2 = var2.bind(var3)(var1);
        var1 = var2.useClientThemesOverride;
        var8 = var1.bind(var2)(var8);
        var2 = _closure1_slot5;
        var1 = _closure1_slot1;
        var0 = 13;
        var0 = var10[var0];
        var1 = var1.bind(var3)(var0);
        var0 = {};
        var10 = var7.header;
        var7 = new Array(3);
        var7[0] = var10;
        var7[1] = var9;
        var7[2] = var8;
        var0.style = var7;
        var0.animatedProps = var5;
        var5 = var6.map;
        var4 = function(arg0, arg1) { // Environment: var4
            var0 = arg0;
            var8 = var0.IconComponent;
            var6 = var0.text;
            var5 = var0.onPress;
            var0 = var0.disabled;
            var4 = _closure1_slot5;
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 14;
            var1 = var3[var1];
            var3 = undefined;
            var1 = var2.bind(var3)(var1);
            var2 = var1.Button;
            var1 = {};
            var7 = {};
            var9 = 'sm';
            var7.size = var9;
            var9 = _closure2_slot1;
            var9 = var9.headerIcon;
            var7.style = var9;
            var7 = var4.bind(var3)(var8, var7);
            var1.icon = var7;
            var1.text = var6;
            var1.onPress = var5;
            var1.disabled = var0;
            var0 = 'md';
            var1.size = var0;
            var0 = 'secondary';
            var1.variant = var0;
            var0 = true;
            var1.grow = var0;
            var0 = arg1;
            var0 = var4.bind(var3)(var2, var1, var0);
            return var0;
        };
        var4 = var5.bind(var6)(var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var3 = var4.bind(var7)(var3);
    var4 = 15;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/media_keyboard/native/components/MediaKeyboardListHeader.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.HEADER_PADDING_BOTTOM = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1298, 1566, 33, 1297, 9529, 671, 566, 4889, 3677, 9357, 4034, 8853, 3863, 4037, 2]);