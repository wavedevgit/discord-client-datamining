// modules/virtual_currency/native/OrbOnboardingPill.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = global;
    var7 = var0.Object;
    var3 = var7.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var7)(var2, var0, var1);
    var12 = 0;
    var3 = var5[var12];
    var1 = metroImportAll;
    var0 = undefined;
    var1 = var1.bind(var0)(var3);
    var _closure1_slot2 = var1;
    var1 = var5[var12];
    var1 = var4.bind(var0)(var1);
    var1 = var1.useCallback;
    var _closure1_slot3 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var3 = var1.TouchableOpacity;
    var _closure1_slot4 = var3;
    var1 = var1.View;
    var _closure1_slot5 = var1;
    var1 = 2;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var3 = var1.jsx;
    var _closure1_slot6 = var3;
    var1 = var1.jsxs;
    var _closure1_slot7 = var1;
    var1 = function arg0() {
        var1 = arg0;
        var5 = var1.onPress;
        var _closure2_slot0 = var5;
        var8 = var1.disabled;
        var _closure2_slot1 = var8;
        var1 = _closure1_slot8;
        var3 = undefined;
        var13 = var1.bind(var3)();
        var4 = _closure1_slot2;
        var2 = var4.useRef;
        var1 = null;
        var4 = var2.bind(var4)(var1);
        var2 = _closure1_slot3;
        var1 = new Array(2);
        var1[0] = var8;
        var1[1] = var5;
        var0 = function() { // Environment: var0
            _fun86925: for (var _fun86925_ip = 0;;) switch (_fun86925_ip) {
                case 0:
                    var1 = _closure2_slot1;
                    if (var1) {
                        _fun86925_ip = 20;
                        continue _fun86925
                    }
                case 10:
                    var1 = _closure2_slot0;
                    var0 = undefined;
                    var0 = var1.bind(var0)();
                case 20:
                    var0 = undefined;
                    return var0;
            }
        };
        var7 = var2.bind(var3)(var0, var1);
        var2 = _closure1_slot6;
        var1 = _closure1_slot5;
        var0 = {};
        var0.ref = var4;
        var5 = _closure1_slot4;
        var4 = {};
        var4.onPress = var7;
        var4.disabled = var8;
        var7 = 0.8;
        var4.activeOpacity = var7;
        var7 = var13.clickable;
        var4.style = var7;
        var7 = 'button';
        var4.accessibilityRole = var7;
        var15 = _closure1_slot0;
        var16 = _closure1_slot1;
        var12 = 3;
        var7 = var16[var12];
        var7 = var15.bind(var3)(var7);
        var10 = var7.intl;
        var9 = var10.string;
        var7 = var16[var12];
        var7 = var15.bind(var3)(var7);
        var7 = var7.t;
        var7 = var7["9JpRfC"];
        var7 = var9.bind(var10)(var7);
        var4.accessibilityLabel = var7;
        var7 = {};
        var7.disabled = var8;
        var4.accessibilityState = var7;
        var7 = _closure1_slot7;
        var6 = {};
        var8 = var13.container;
        var6.style = var8;
        var8 = {};
        var9 = var13.orbsIconContainer;
        var8.style = var9;
        var9 = 4;
        var9 = var16[var9];
        var9 = var15.bind(var3)(var9);
        var10 = var9.OrbsIcon;
        var9 = {};
        var11 = 'sm';
        var9.size = var11;
        var9 = var2.bind(var3)(var10, var9);
        var8.children = var9;
        var9 = var2.bind(var3)(var1, var8);
        var8 = new Array(2);
        var8[0] = var9;
        var9 = {};
        var10 = var13.textContainer;
        var9.style = var10;
        var10 = 5;
        var10 = var16[var10];
        var10 = var15.bind(var3)(var10);
        var11 = var10.Text;
        var10 = {
            'variant': 'text-sm/semibold',
            'color': 'mobile-text-heading-primary'
        };
        var13 = var13.pillText;
        var10.style = var13;
        var13 = var16[var12];
        var13 = var15.bind(var3)(var13);
        var14 = var13.intl;
        var13 = var14.string;
        var12 = var16[var12];
        var12 = var15.bind(var3)(var12);
        var12 = var12.t;
        var12 = var12["9JpRfC"];
        var12 = var13.bind(var14)(var12);
        var10.children = var12;
        var10 = var2.bind(var3)(var11, var10);
        var9.children = var10;
        var9 = var2.bind(var3)(var1, var9);
        var8[1] = var9;
        var6.children = var8;
        var6 = var7.bind(var3)(var1, var6);
        var4.children = var6;
        var4 = var2.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var3 = 'OrbOnboardingPill';
    var1.displayName = var3;
    var3 = 6;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {
        'height': 36,
        'borderRadius': null,
        'justifyContent': 'center',
        'alignItems': 'center',
        'flexDirection': 'row'
    };
    var10 = 7;
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.radii;
    var13 = var13.round;
    var9.borderRadius = var13;
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_12;
    var9.paddingHorizontal = var13;
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_4;
    var9.paddingVertical = var13;
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.REDESIGN_BUTTON_TERTIARY_BACKGROUND;
    var9.backgroundColor = var13;
    var9.borderWidth = var12;
    var3.clickable = var9;
    var9 = {
        'flexDirection': 'row',
        'alignItems': 'center',
        'justifyContent': 'center',
        'flexShrink': 0,
        'position': 'relative',
        'gap': 4
    };
    var3.container = var9;
    var9 = {
        'position': 'relative',
        'height': 18,
        'width': 18,
        'justifyContent': 'center',
        'alignItems': 'center'
    };
    var3.orbsIconContainer = var9;
    var9 = {
        'justifyContent': 'center',
        'alignItems': 'flex-end'
    };
    var3.textContainer = var9;
    var9 = {};
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.REDESIGN_BUTTON_TERTIARY_TEXT;
    var9.color = var10;
    var10 = 'right';
    var9.textAlign = var10;
    var3.pillText = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot8 = var3;
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/virtual_currency/native/OrbOnboardingPill.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    var2.OrbOnboardingPill = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1234, 9548, 3932, 1297, 671, 2]);