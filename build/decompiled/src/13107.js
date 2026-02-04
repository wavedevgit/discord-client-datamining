// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var5 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var6;
    var0 = ['children', 'style', 'onPress', 'to', 'accessibilityRole'];
    var _closure1_slot3 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var6[var0];
    var0 = undefined;
    var3 = var5.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 1;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var5 = var3.Platform;
    var5 = var3.Pressable;
    var _closure1_slot6 = var5;
    var5 = var3.StyleSheet;
    var3 = var3.Text;
    var _closure1_slot7 = var3;
    var3 = 3;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var4 = var3.jsx;
    var _closure1_slot8 = var4;
    var3 = var3.jsxs;
    var _closure1_slot9 = var3;
    var4 = var5.create;
    var3 = {};
    var6 = {
        'flex': 1,
        'alignItems': 'center'
    };
    var3.tab = var6;
    var6 = {
        'justifyContent': 'flex-end',
        'flexDirection': 'column'
    };
    var3.tabPortrait = var6;
    var6 = {
        'justifyContent': 'center',
        'flexDirection': 'row'
    };
    var3.tabLandscape = var6;
    var6 = {
        'textAlign': 'center',
        'backgroundColor': 'transparent'
    };
    var3.label = var6;
    var6 = {};
    var7 = 10;
    var6.fontSize = var7;
    var3.labelBeneath = var6;
    var6 = {
        'fontSize': 13,
        'marginLeft': 20,
        'marginTop': 3
    };
    var3.labelBeside = var6;
    var6 = {};
    var7 = 'flex';
    var6.display = var7;
    var3.button = var6;
    var3 = var4.bind(var5)(var3);
    var _closure1_slot10 = var3;
    var1 = function arg0() {
        _fun100628: for (var _fun100628_ip = 0;;) switch (_fun100628_ip) {
            case 0:
                var4 = arg0;
                var3 = var4.focused;
                var9 = var4.route;
                var8 = var4.descriptor;
                var11 = var4.label;
                var24 = var4.icon;
                var26 = var4.badge;
                var25 = var4.badgeStyle;
                var21 = var4.to;
                var2 = var4.button;
                var1 = undefined;
                if (!(var1 === var2)) {
                    _fun100628_ip = 69;
                    continue _fun100628
                }
            case 60:
                var2 = function(arg0) { // Environment: var0
                    var5 = arg0;
                    var0 = var5.children;
                    var8 = var5.style;
                    var9 = var5.onPress;
                    var1 = var5.to;
                    var10 = var5.accessibilityRole;
                    var4 = _closure1_slot4;
                    var2 = _closure1_slot3;
                    var3 = undefined;
                    var7 = var4.bind(var3)(var5, var2);
                    var2 = _closure1_slot8;
                    var1 = _closure1_slot6;
                    var4 = global;
                    var6 = var4.Object;
                    var5 = var6.assign;
                    var4 = {};
                    var4.accessibilityRole = var10;
                    var4.onPress = var9;
                    var4.style = var8;
                    var4.children = var0;
                    var0 = {};
                    var0 = var5.bind(var6)(var0, var7, var4);
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
            case 69:
                var5 = var4.accessibilityLabel;
                var7 = var4.testID;
                var20 = var4.onPress;
                var17 = var4.onLongPress;
                var15 = var4.horizontal;
                var13 = var4.activeTintColor;
                var18 = var4.inactiveTintColor;
                var10 = var4.activeBackgroundColor;
                var6 = 'transparent';
                var0 = var6;
                if (!(var1 !== var10)) {
                    _fun100628_ip = 129;
                    continue _fun100628
                }
            case 126:
                var0 = var10;
            case 129:
                var10 = var4.inactiveBackgroundColor;
                if (!(var1 !== var10)) {
                    _fun100628_ip = 142;
                    continue _fun100628
                }
            case 139:
                var6 = var10;
            case 142:
                var10 = var4.showLabel;
                var19 = var1 === var10;
                if (var19) {
                    _fun100628_ip = 158;
                    continue _fun100628
                }
            case 155:
                var19 = var10;
            case 158:
                var12 = var4.allowFontScaling;
                var14 = var4.labelStyle;
                var23 = var4.iconStyle;
                var4 = var4.style;
                var22 = _closure1_slot0;
                var27 = _closure1_slot2;
                var10 = 4;
                var10 = var27[var10];
                var22 = var22.bind(var1)(var10);
                var10 = var22.useTheme;
                var10 = var10.bind(var22)();
                var10 = var10.colors;
                if (!(var1 === var13)) {
                    _fun100628_ip = 229;
                    continue _fun100628
                }
            case 223:
                var13 = var10.primary;
            case 229:
                if (!(var1 === var18)) {
                    _fun100628_ip = 315;
                    continue _fun100628
                }
            case 233:
                var29 = _closure1_slot1;
                var30 = _closure1_slot2;
                var22 = 5;
                var27 = var30[var22];
                var28 = var29.bind(var1)(var27);
                var27 = var10.text;
                var28 = var28.bind(var1)(var27);
                var27 = var28.mix;
                var22 = var30[var22];
                var22 = var29.bind(var1)(var22);
                var10 = var10.card;
                var22 = var22.bind(var1)(var10);
                var10 = 0.5;
                var22 = var27.bind(var28)(var22, var10);
                var10 = var22.hex;
                var18 = var10.bind(var22)();
            case 315:
                var10 = {};
                var10.route = var9;
                var10.focused = var3;
                if (!var3) {
                    _fun100628_ip = 333;
                    continue _fun100628
                }
            case 330:
                var6 = var0;
            case 333:
                var0 = {};
                var0.to = var21;
                var0.onPress = var20;
                var0.onLongPress = var17;
                var0.testID = var7;
                var0.accessibilityLabel = var5;
                var5 = 'tab';
                var0.accessibilityRole = var5;
                var5 = {};
                var5.selected = var3;
                var0.accessibilityState = var5;
                if (var3) {
                    _fun100628_ip = 386;
                    continue _fun100628
                }
            case 380:
                var3 = new Array(0);
                _fun100628_ip = 396;
                continue _fun100628;
            case 386:
                var3 = ['selected'];
            case 396:
                var0.accessibilityStates = var3;
                var3 = _closure1_slot10;
                var5 = var3.tab;
                var3 = new Array(4);
                var3[0] = var5;
                var5 = {};
                var5.backgroundColor = var6;
                var3[1] = var5;
                var6 = _closure1_slot10;
                if (var15) {
                    _fun100628_ip = 446;
                    continue _fun100628
                }
            case 438:
                var5 = var6.tabPortrait;
                _fun100628_ip = 452;
                continue _fun100628;
            case 446:
                var5 = var6.tabLandscape;
            case 452:
                var3[2] = var5;
                var3[3] = var4;
                var0.style = var3;
                var5 = _closure1_slot9;
                var3 = _closure1_slot5;
                var4 = var3.Fragment;
                var3 = {};
                var22 = var10.focused;
                var17 = null;
                if (!(var1 !== var24)) {
                    _fun100628_ip = 568;
                    continue _fun100628
                }
            case 492:
                var21 = _closure1_slot8;
                var20 = _closure1_slot1;
                var27 = _closure1_slot2;
                var6 = 6;
                var6 = var27[var6];
                var20 = var20.bind(var1)(var6);
                var6 = {};
                var6.route = var9;
                var6.horizontal = var15;
                var6.badge = var26;
                var6.badgeStyle = var25;
                var6.activeTintColor = var13;
                var6.inactiveTintColor = var18;
                var6.renderIcon = var24;
                var6.style = var23;
                var6.focused = var22;
                var17 = var21.bind(var1)(var20, var6);
            case 568:
                var6 = new Array(2);
                var6[0] = var17;
                var10 = var10.focused;
                var17 = false;
                var7 = null;
                if (!(var17 !== var19)) {
                    _fun100628_ip = 793;
                    continue _fun100628
                }
            case 593:
                if (var10) {
                    _fun100628_ip = 598;
                    continue _fun100628
                }
            case 596:
                _fun100628_ip = 601;
                continue _fun100628;
            case 598:
                var18 = var13;
            case 601:
                var17 = 'string';
                var13 = typeof var11;
                if (!(var17 !== var13)) {
                    _fun100628_ip = 700;
                    continue _fun100628
                }
            case 612:
                var8 = var8.options;
                var13 = var8.tabBarLabel;
                var13 = typeof var13;
                if (!(var17 !== var13)) {
                    _fun100628_ip = 653;
                    continue _fun100628
                }
            case 630:
                var13 = var8.title;
                if (!(var1 === var13)) {
                    _fun100628_ip = 646;
                    continue _fun100628
                }
            case 639:
                var9 = var9.name;
                _fun100628_ip = 651;
                continue _fun100628;
            case 646:
                var9 = var8.title;
            case 651:
                _fun100628_ip = 659;
                continue _fun100628;
            case 653:
                var9 = var8.tabBarLabel;
            case 659:
                var8 = {};
                var8.focused = var10;
                var8.color = var18;
                var10 = 'below-icon';
                if (!var15) {
                    _fun100628_ip = 685;
                    continue _fun100628
                }
            case 679:
                var10 = 'beside-icon';
            case 685:
                var8.position = var10;
                var8.children = var9;
                var7 = var11.bind(var1)(var8);
                _fun100628_ip = 793;
                continue _fun100628;
            case 700:
                var10 = _closure1_slot8;
                var9 = _closure1_slot7;
                var8 = {};
                var13 = 1;
                var8.numberOfLines = var13;
                var13 = _closure1_slot10;
                var17 = var13.label;
                var13 = new Array(4);
                var13[0] = var17;
                var17 = {};
                var17.color = var18;
                var13[1] = var17;
                var16 = _closure1_slot10;
                if (var15) {
                    _fun100628_ip = 760;
                    continue _fun100628
                }
            case 752:
                var15 = var16.labelBeneath;
                _fun100628_ip = 766;
                continue _fun100628;
            case 760:
                var15 = var16.labelBeside;
            case 766:
                var13[2] = var15;
                var13[3] = var14;
                var8.style = var13;
                var8.allowFontScaling = var12;
                var8.children = var11;
                var7 = var10.bind(var1)(var9, var8);
            case 793:
                var6[1] = var7;
                var3.children = var6;
                var3 = var5.bind(var1)(var4, var3);
                var0.children = var3;
                var0 = var2.bind(var1)(var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [29, 31, 27, 33, 1470, 5828, 13108]);