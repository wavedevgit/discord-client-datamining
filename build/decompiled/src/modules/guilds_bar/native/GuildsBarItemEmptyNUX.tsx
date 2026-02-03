// modules/guilds_bar/native/GuildsBarItemEmptyNUX.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var6 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var8)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var8 = var3.Pressable;
    var _closure1_slot4 = var8;
    var8 = var3.Image;
    var _closure1_slot5 = var8;
    var3 = var3.View;
    var _closure1_slot6 = var3;
    var13 = 2;
    var3 = var5[var13];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var11 = 3;
    var3 = var5[var11];
    var3 = var4.bind(var0)(var3);
    var10 = var3.GUILD_ITEM_SIZE;
    var14 = var3.GUILD_ITEM_PADDING;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var12 = var3.DM_WIDTH;
    var3 = var3.EMPTY_NUX_SERVER;
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.MODE_CHANGE_PHYSICS;
    var _closure1_slot9 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot10 = var7;
    var3 = var3.jsxs;
    var _closure1_slot11 = var3;
    var3 = {
        'top': 4,
        'left': 12,
        'bottom': 4,
        'right': 12
    };
    var _closure1_slot12 = var3;
    var3 = 7;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {
        'position': 'relative',
        'flexDirection': 'row',
        'alignItems': 'center',
        'marginTop': null,
        'height': 55
    };
    var9.marginTop = var14;
    var9.width = var10;
    var3.container = var9;
    var9 = {
        'position': 'absolute',
        'left': null,
        'top': 4
    };
    var12 = var12 - var10;
    var12 = -var12;
    var12 = var12 / var13;
    var9.left = var12;
    var3.guildIndicator = var9;
    var9 = {
        'width': 59,
        'height': 55,
        'marginLeft': 4294967293,
        'marginRight': 4294967290
    };
    var3.icon = var9;
    var9 = {
        'position': 'absolute',
        'top': 16
    };
    var9.width = var10;
    var12 = 10;
    var12 = var10 - var12;
    var9.height = var12;
    var10 = var10 / var11;
    var9.borderRadius = var10;
    var3.backdrop = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot13 = var3;
    var3 = {};
    var7 = "function GuildsBarItemEmptyNUXTsx1(){const{withSpring,selected,activeColor,inactiveColor,MODE_CHANGE_PHYSICS}=this.__closure;return{backgroundColor:withSpring(selected?activeColor:inactiveColor,MODE_CHANGE_PHYSICS,'animate-always')};}";
    var3.code = var7;
    var _closure1_slot14 = var3;
    var3 = var6.memo;
    var1 = function() {
        var1 = _closure1_slot13;
        var3 = undefined;
        var8 = var1.bind(var3)();
        var9 = _closure1_slot0;
        var12 = _closure1_slot2;
        var1 = 8;
        var1 = var12[var1];
        var6 = var9.bind(var3)(var1);
        var4 = var6.useStateFromStores;
        var1 = _closure1_slot7;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = function() { // Environment: var0
            var2 = _closure1_slot7;
            var1 = var2.getGuildId;
            var1 = var1.bind(var2)();
            var0 = _closure1_slot8;
            var0 = var1 === var0;
            return var0;
        };
        var11 = var4.bind(var6)(var2, var1);
        var _closure2_slot0 = var11;
        var13 = _closure1_slot3;
        var4 = var13.useCallback;
        var2 = function() { // Environment: var0
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var0 = 9;
            var2 = var2[var0];
            var0 = undefined;
            var3 = var3.bind(var0)(var2);
            var2 = var3.transitionToGuild;
            var1 = _closure1_slot8;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var1 = new Array(0);
        var6 = var4.bind(var13)(var2, var1);
        var4 = 10;
        var1 = var12[var4];
        var7 = var9.bind(var3)(var1);
        var2 = var7.useSharedValue;
        var1 = false;
        var1 = var2.bind(var7)(var1);
        var _closure2_slot1 = var1;
        var10 = var13.useCallback;
        var7 = new Array(1);
        var7[0] = var1;
        var2 = function() { // Environment: var0
            var2 = _closure2_slot1;
            var1 = var2.set;
            var0 = true;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var10 = var10.bind(var13)(var2, var7);
        var7 = var13.useCallback;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = function() { // Environment: var0
            var2 = _closure2_slot1;
            var1 = var2.set;
            var0 = false;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var7 = var7.bind(var13)(var1, var2);
        var2 = 11;
        var1 = var12[var2];
        var16 = var9.bind(var3)(var1);
        var14 = var16.useToken;
        var15 = _closure1_slot1;
        var1 = 12;
        var13 = var12[var1];
        var13 = var15.bind(var3)(var13);
        var13 = var13.colors;
        var13 = var13.BACKGROUND_SURFACE_HIGH;
        var14 = var14.bind(var16)(var13);
        var _closure2_slot2 = var14;
        var2 = var12[var2];
        var13 = var9.bind(var3)(var2);
        var2 = var13.useToken;
        var1 = var12[var1];
        var1 = var15.bind(var3)(var1);
        var1 = var1.colors;
        var1 = var1.BACKGROUND_BRAND;
        var16 = var2.bind(var13)(var1);
        var _closure2_slot3 = var16;
        var1 = var12[var4];
        var2 = var9.bind(var3)(var1);
        var1 = var2.useAnimatedStyle;
        var0 = function() {
            _fun101109: for (var _fun101109_ip = 0;;) switch (_fun101109_ip) {
                case 0:
                    var0 = {};
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 13;
                    var3 = var3[var2];
                    var2 = undefined;
                    var5 = var4.bind(var2)(var3);
                    var4 = var5.withSpring;
                    var3 = _closure2_slot0;
                    if (var3) {
                        _fun101109_ip = 48;
                        continue _fun101109
                    }
                case 42:
                    var3 = _closure2_slot2;
                    _fun101109_ip = 52;
                    continue _fun101109;
                case 48:
                    var3 = _closure2_slot3;
                case 52:
                    var2 = _closure1_slot9;
                    var1 = 'animate-always';
                    var1 = var4.bind(var5)(var3, var2, var1);
                    var0.backgroundColor = var1;
                    return var0;
            }
        };
        var13 = {};
        var17 = 13;
        var17 = var12[var17];
        var17 = var9.bind(var3)(var17);
        var17 = var17.withSpring;
        var13.withSpring = var17;
        var13.selected = var11;
        var13.activeColor = var16;
        var13.inactiveColor = var14;
        var14 = _closure1_slot9;
        var13.MODE_CHANGE_PHYSICS = var14;
        var0.__closure = var13;
        var13 = 15012639840543.0;
        var0.__workletHash = var13;
        var13 = _closure1_slot14;
        var0.__initData = var13;
        var14 = var1.bind(var2)(var0);
        var2 = _closure1_slot11;
        var1 = _closure1_slot4;
        var0 = {};
        var13 = var8.container;
        var0.style = var13;
        var0.onPressIn = var10;
        var0.onPressOut = var7;
        var0.onPress = var6;
        var10 = true;
        var0.accessible = var10;
        var6 = 'button';
        var0.accessibilityRole = var6;
        var6 = 14;
        var7 = var12[var6];
        var7 = var9.bind(var3)(var7);
        var13 = var7.intl;
        var7 = var13.string;
        var6 = var12[var6];
        var6 = var9.bind(var3)(var6);
        var6 = var6.t;
        var6 = var6["3S2xmm"];
        var6 = var7.bind(var13)(var6);
        var0.accessibilityLabel = var6;
        var6 = {};
        var6.selected = var11;
        var0.accessibilityState = var6;
        var6 = _closure1_slot12;
        var0.hitSlop = var6;
        var7 = _closure1_slot10;
        var4 = var12[var4];
        var4 = var15.bind(var3)(var4);
        var6 = var4.View;
        var4 = {};
        var16 = var8.backdrop;
        var13 = new Array(2);
        var13[0] = var16;
        var13[1] = var14;
        var4.style = var13;
        var6 = var7.bind(var3)(var6, var4);
        var4 = new Array(3);
        var4[0] = var6;
        var13 = _closure1_slot5;
        var6 = {};
        var14 = var8.icon;
        var6.style = var14;
        var14 = 15;
        var14 = var12[var14];
        var14 = var15.bind(var3)(var14);
        var6.source = var14;
        var14 = 'contain';
        var6.resizeMode = var14;
        var6 = var7.bind(var3)(var13, var6);
        var4[1] = var6;
        var6 = _closure1_slot6;
        var5 = {};
        var8 = var8.guildIndicator;
        var5.style = var8;
        var8 = 16;
        var8 = var12[var8];
        var8 = var9.bind(var3)(var8);
        var9 = var8.UnreadIndicator;
        var8 = {};
        var10 = var10 === var11;
        var8.selected = var10;
        var8 = var7.bind(var3)(var9, var8);
        var5.children = var8;
        var5 = var7.bind(var3)(var6, var5);
        var4[2] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var1 = var3.bind(var6)(var1);
    var3 = 17;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guilds_bar/native/GuildsBarItemEmptyNUX.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 3204, 13121, 660, 6935, 33, 1297, 566, 5610, 3711, 3142, 671, 4072, 1234, 13174, 13132, 2]);