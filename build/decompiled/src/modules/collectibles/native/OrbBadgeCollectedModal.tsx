// modules/collectibles/native/OrbBadgeCollectedModal.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var5;
    var0 = function() {
        var1 = _closure1_slot0;
        var5 = _closure1_slot2;
        var2 = 9;
        var2 = var5[var2];
        var3 = undefined;
        var4 = var1.bind(var3)(var2);
        var2 = var4.useFetchVirtualCurrencyBalance;
        var2 = var2.bind(var4)();
        var4 = var2.balance;
        var2 = _closure1_slot6;
        var0 = 10;
        var0 = var5[var0];
        var0 = var1.bind(var3)(var0);
        var1 = var0.BalanceWidgetPill;
        var0 = {};
        var0.balance = var4;
        var4 = function() {
            var0 = undefined;
            return var0;
        };
        var0.onPress = var4;
        var4 = true;
        var0.disabled = var4;
        var4 = 'secondary';
        var0.variant = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot11 = var0;
    var0 = function arg0() {
        _fun87371: for (var _fun87371_ip = 0;;) switch (_fun87371_ip) {
            case 0:
                var1 = arg0;
                var6 = var1.modalKey;
                var _closure2_slot0 = var6;
                var1 = var1.onPressViewBadge;
                var _closure2_slot1 = var1;
                var2 = _closure1_slot8;
                var3 = undefined;
                var19 = var2.bind(var3)();
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 11;
                var2 = var5[var2];
                var7 = var4.bind(var3)(var2);
                var5 = var7.useStateFromStores;
                var2 = _closure1_slot5;
                var4 = new Array(1);
                var4[0] = var2;
                var2 = function() { // Environment: var0
                    var0 = _closure1_slot5;
                    var0 = var0.useReducedMotion;
                    return var0;
                };
                var4 = var5.bind(var7)(var4, var2);
                var7 = _closure1_slot3;
                var5 = var7.useCallback;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var0
                    var1 = _closure2_slot1;
                    var0 = undefined;
                    var1 = var1.bind(var0)();
                    return var0;
                };
                var28 = var5.bind(var7)(var1, var2);
                var5 = _closure1_slot3;
                var2 = var5.useCallback;
                var1 = new Array(1);
                var1[0] = var6;
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 7;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.popWithKey;
                    var1 = _closure2_slot0;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var24 = var2.bind(var5)(var0, var1);
                var2 = _closure1_slot7;
                var1 = _closure1_slot4;
                var0 = {};
                var5 = var19.root;
                var0.style = var5;
                var7 = _closure1_slot6;
                if (var4) {
                    _fun87371_ip = 281;
                    continue _fun87371
                }
            case 175:
                var5 = _closure1_slot0;
                var9 = _closure1_slot2;
                var4 = 14;
                var4 = var9[var4];
                var4 = var5.bind(var3)(var4);
                var5 = var4.VideoComponent;
                var4 = {
                    'source': null,
                    'poster': null,
                    'style': null,
                    'resizeMode': 'contain',
                    'muted': true,
                    'pauseWhileAppInactive': true,
                    'paused': false
                };
                var6 = {};
                var8 = _closure1_slot1;
                var10 = 15;
                var10 = var9[var10];
                var10 = var8.bind(var3)(var10);
                var6.uri = var10;
                var4.source = var6;
                var6 = 13;
                var6 = var9[var6];
                var6 = var8.bind(var3)(var6);
                var4.poster = var6;
                var6 = var19.background;
                var4.style = var6;
                var5 = var7.bind(var3)(var5, var4);
                _fun87371_ip = 341;
                continue _fun87371;
            case 281:
                var10 = _closure1_slot1;
                var11 = _closure1_slot2;
                var4 = 12;
                var4 = var11[var4];
                var6 = var10.bind(var3)(var4);
                var4 = {};
                var8 = {};
                var9 = 13;
                var9 = var11[var9];
                var9 = var10.bind(var3)(var9);
                var8.uri = var9;
                var4.source = var8;
                var8 = var19.background;
                var4.style = var8;
                var5 = var7.bind(var3)(var6, var4);
            case 341:
                var4 = new Array(2);
                var4[0] = var5;
                var7 = _closure1_slot6;
                var26 = _closure1_slot0;
                var27 = _closure1_slot2;
                var5 = 16;
                var5 = var27[var5];
                var5 = var26.bind(var3)(var5);
                var6 = var5.SafeAreaPaddingView;
                var5 = {
                    'style': null,
                    'top': true,
                    'bottom': true,
                    'left': true,
                    'right': true
                };
                var8 = var19.main;
                var5.style = var8;
                var10 = _closure1_slot7;
                var9 = _closure1_slot4;
                var8 = {};
                var11 = var19.body;
                var8.style = var11;
                var13 = _closure1_slot6;
                var16 = _closure1_slot1;
                var11 = 12;
                var11 = var27[var11];
                var12 = var16.bind(var3)(var11);
                var11 = {};
                var14 = {};
                var15 = 17;
                var15 = var27[var15];
                var15 = var16.bind(var3)(var15);
                var14.uri = var15;
                var11.source = var14;
                var14 = var19.orbBadge;
                var11.style = var14;
                var12 = var13.bind(var3)(var12, var11);
                var11 = new Array(2);
                var11[0] = var12;
                var14 = _closure1_slot7;
                var13 = _closure1_slot4;
                var12 = {};
                var15 = var19.bottomContainer;
                var12.style = var15;
                var17 = _closure1_slot7;
                var16 = _closure1_slot4;
                var15 = {};
                var18 = var19.textContainer;
                var15.style = var18;
                var25 = _closure1_slot6;
                var20 = 18;
                var18 = var27[var20];
                var18 = var26.bind(var3)(var18);
                var22 = var18.Text;
                var18 = {
                    'variant': 'heading-xl/bold',
                    'color': 'always-white'
                };
                var23 = var19.text;
                var18.style = var23;
                var23 = 19;
                var29 = var27[var23];
                var29 = var26.bind(var3)(var29);
                var31 = var29.intl;
                var30 = var31.string;
                var29 = var27[var23];
                var29 = var26.bind(var3)(var29);
                var29 = var29.t;
                var29 = var29.Bal8Cv;
                var29 = var30.bind(var31)(var29);
                var18.children = var29;
                var22 = var25.bind(var3)(var22, var18);
                var18 = new Array(2);
                var18[0] = var22;
                var25 = _closure1_slot6;
                var20 = var27[var20];
                var20 = var26.bind(var3)(var20);
                var22 = var20.Text;
                var20 = {
                    'variant': 'text-sm/medium',
                    'color': 'always-white'
                };
                var29 = var19.text;
                var20.style = var29;
                var29 = var27[var23];
                var29 = var26.bind(var3)(var29);
                var31 = var29.intl;
                var30 = var31.string;
                var29 = var27[var23];
                var29 = var26.bind(var3)(var29);
                var29 = var29.t;
                var29 = var29.B25MUf;
                var29 = var30.bind(var31)(var29);
                var20.children = var29;
                var20 = var25.bind(var3)(var22, var20);
                var18[1] = var20;
                var15.children = var18;
                var16 = var17.bind(var3)(var16, var15);
                var15 = new Array(2);
                var15[0] = var16;
                var18 = _closure1_slot7;
                var17 = _closure1_slot4;
                var16 = {};
                var19 = var19.buttonsContainer;
                var16.style = var19;
                var25 = _closure1_slot6;
                var20 = 20;
                var19 = var27[var20];
                var19 = var26.bind(var3)(var19);
                var22 = var19.Button;
                var19 = {
                    'onPress': null,
                    'variant': 'primary',
                    'size': 'lg'
                };
                var19.onPress = var28;
                var28 = var27[var23];
                var28 = var26.bind(var3)(var28);
                var30 = var28.intl;
                var29 = var30.string;
                var28 = var27[var23];
                var28 = var26.bind(var3)(var28);
                var28 = var28.t;
                var28 = var28.uYLGci;
                var28 = var29.bind(var30)(var28);
                var19.text = var28;
                var22 = var25.bind(var3)(var22, var19);
                var19 = new Array(2);
                var19[0] = var22;
                var22 = _closure1_slot6;
                var20 = var27[var20];
                var20 = var26.bind(var3)(var20);
                var21 = var20.Button;
                var20 = {
                    'onPress': null,
                    'variant': 'secondary',
                    'size': 'lg'
                };
                var20.onPress = var24;
                var24 = var27[var23];
                var24 = var26.bind(var3)(var24);
                var25 = var24.intl;
                var24 = var25.string;
                var23 = var27[var23];
                var23 = var26.bind(var3)(var23);
                var23 = var23.t;
                var23 = var23["6gF4aS"];
                var23 = var24.bind(var25)(var23);
                var20.text = var23;
                var20 = var22.bind(var3)(var21, var20);
                var19[1] = var20;
                var16.children = var19;
                var16 = var18.bind(var3)(var17, var16);
                var15[1] = var16;
                var12.children = var15;
                var12 = var14.bind(var3)(var13, var12);
                var11[1] = var12;
                var8.children = var11;
                var8 = var10.bind(var3)(var9, var8);
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot12 = var0;
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
    var3 = arg3;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var11 = 1;
    var3 = var5[var11];
    var3 = var4.bind(var0)(var3);
    var9 = var3.StyleSheet;
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot6 = var6;
    var3 = var3.jsxs;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var8.flex = var11;
    var3.root = var8;
    var8 = {};
    var15 = var9.absoluteFillObject;
    var16 = var8;
    var9 = copyDataProperties(var16, var15);
    var3.background = var8;
    var9 = 'row';
    var12 = 'center';
    var8 = {
        'flexDirection': 'row',
        'alignItems': 'center',
        'justifyContent': 'space-between'
    };
    var3.header = var8;
    var8 = {};
    var8.flexDirection = var9;
    var9 = 5;
    var13 = var5[var9];
    var13 = var10.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_8;
    var8.padding = var13;
    var3.orbsBalance = var8;
    var8 = {
        'width': 172,
        'height': 172,
        'alignSelf': 'center'
    };
    var3.orbBadge = var8;
    var8 = {};
    var8.flex = var11;
    var3.main = var8;
    var8 = {
        'paddingTop': '50%',
        'padding': null,
        'flex': 1,
        'justifyContent': 'space-between'
    };
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_16;
    var8.padding = var11;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_32;
    var8.gap = var11;
    var3.body = var8;
    var8 = {
        'alignSelf': 'flex-end',
        'alignItems': 'stretch',
        'gap': null,
        'width': '100%'
    };
    var11 = 'stretch';
    var13 = var5[var9];
    var13 = var10.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_32;
    var8.gap = var13;
    var3.bottomContainer = var8;
    var8 = {};
    var8.alignItems = var12;
    var13 = var5[var9];
    var13 = var10.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_8;
    var8.gap = var13;
    var3.textContainer = var8;
    var8 = {};
    var8.textAlign = var12;
    var3.text = var8;
    var8 = {};
    var8.alignItems = var11;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.spacing;
    var9 = var9.PX_16;
    var8.gap = var9;
    var3.buttonsContainer = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot8 = var3;
    var3 = {};
    var6 = 'ROOT';
    var3.ROOT = var6;
    var _closure1_slot9 = var3;
    var3 = function arg0, arg1() {
        var0 = arg0;
        var _closure2_slot0 = var0;
        var0 = arg1;
        var _closure2_slot1 = var0;
        var0 = {};
        var1 = _closure1_slot9;
        var2 = var1.ROOT;
        var1 = {
            'render': null,
            'ignoreKeyboard': true,
            'fullscreen': true,
            'headerLeft': null,
            'headerRight': null,
            'title': ''
        };
        var5 = function() {
            var3 = _closure1_slot6;
            var2 = _closure1_slot12;
            var1 = {};
            var4 = _closure2_slot0;
            var1.modalKey = var4;
            var0 = _closure2_slot1;
            var1.onPressViewBadge = var0;
            var0 = undefined;
            var0 = var3.bind(var0)(var2, var1);
            return var0;
        };
        var1.render = var5;
        var4 = function() {
            var2 = _closure2_slot0;
            var1 = function arg0() {
                var0 = arg0;
                var _closure4_slot0 = var0;
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var2 = 6;
                var2 = var6[var2];
                var3 = undefined;
                var4 = var5.bind(var3)(var2);
                var2 = var4.getHeaderCloseButton;
                var1 = function() { // Environment: var1
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 7;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.popWithKey;
                    var0 = _closure4_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var2 = var2.bind(var4)(var1);
                var1 = _closure1_slot6;
                var0 = {};
                var4 = 8;
                var4 = var6[var4];
                var4 = var5.bind(var3)(var4);
                var4 = var4.ButtonColors;
                var4 = var4.WHITE;
                var0.tintColor = var4;
                var0 = var1.bind(var3)(var2, var0);
                return var0;
            };
            var0 = undefined;
            var0 = var1.bind(var0)(var2);
            return var0;
        };
        var1.headerLeft = var4;
        var3 = _closure1_slot11;
        var1.headerRight = var3;
        var0[var2] = var1;
        return var0;
    };
    var _closure1_slot10 = var3;
    var3 = 24;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/collectibles/native/OrbBadgeCollectedModal.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var0 = arg0;
        var7 = var0.modalKey;
        var6 = var0.onPressViewBadge;
        var3 = _closure1_slot3;
        var2 = var3.useEffect;
        var1 = function() { // Environment: var0
            var2 = _closure1_slot0;
            var5 = _closure1_slot2;
            var0 = 21;
            var1 = var5[var0];
            var0 = undefined;
            var4 = var2.bind(var0)(var1);
            var3 = var4.pinUserProfileBadgesOnClient;
            var1 = 22;
            var1 = var5[var1];
            var2 = var2.bind(var0)(var1);
            var1 = var2.createOrbProfileBadge;
            var1 = var1.bind(var2)();
            var2 = new Array(1);
            var2[0] = var1;
            var1 = 600;
            var1 = var3.bind(var4)(var2, var1);
            return var0;
        };
        var0 = new Array(0);
        var0 = var2.bind(var3)(var1, var0);
        var3 = _closure1_slot6;
        var1 = _closure1_slot0;
        var2 = _closure1_slot2;
        var0 = 23;
        var0 = var2[var0];
        var2 = undefined;
        var0 = var1.bind(var2)(var0);
        var1 = var0.Navigator;
        var0 = {};
        var5 = _closure1_slot10;
        var5 = var5.bind(var2)(var7, var6);
        var0.screens = var5;
        var4 = _closure1_slot9;
        var4 = var4.ROOT;
        var0.initialRouteName = var4;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1298, 33, 1297, 671, 4668, 4525, 4836, 9961, 9498, 566, 4667, 9957, 8800, 9958, 4697, 11163, 3900, 1234, 4043, 5548, 11164, 5748, 2]);