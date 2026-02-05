// modules/guild_profile/native/components/GuildProfileActionSheet.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
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
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.View;
    var _closure1_slot4 = var6;
    var3 = var3.ActivityIndicator;
    var _closure1_slot5 = var3;
    var3 = 2;
    var6 = var5[var3];
    var6 = var10.bind(var0)(var6);
    var _closure1_slot6 = var6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.GuildProfileFetchStatus;
    var _closure1_slot7 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.INVALID_ACCESS_ERROR_CODE;
    var _closure1_slot8 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.VerticalGradient;
    var _closure1_slot9 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot10 = var6;
    var3 = var3.jsxs;
    var _closure1_slot11 = var3;
    var3 = 6;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var9 = 40;
    var8.paddingTop = var9;
    var3.loadingContainer = var8;
    var8 = {
        'paddingHorizontal': 16,
        'paddingVertical': 40
    };
    var3.footerContainer = var8;
    var8 = {};
    var9 = 7;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.BACKGROUND_BASE_LOW;
    var8.backgroundColor = var9;
    var3.scrollView = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot12 = var3;
    var3 = 28;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_profile/native/components/GuildProfileActionSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun59795: for (var _fun59795_ip = 0;;) switch (_fun59795_ip) {
            case 0:
                var1 = arg0;
                var16 = var1.guildId;
                var _closure2_slot0 = var16;
                var1 = _closure1_slot12;
                var3 = undefined;
                var9 = var1.bind(var3)();
                var14 = _closure1_slot1;
                var17 = _closure1_slot2;
                var1 = 8;
                var1 = var17[var1];
                var1 = var14.bind(var3)(var1);
                var10 = var1.bind(var3)();
                var13 = _closure1_slot0;
                var1 = 9;
                var1 = var17[var1];
                var2 = var13.bind(var3)(var1);
                var1 = var2.useGuildProfile;
                var2 = var1.bind(var2)(var16);
                var12 = var2.guildProfile;
                var1 = var2.fetchGuildProfile;
                var _closure2_slot1 = var1;
                var2 = var2.fetchStatus;
                var4 = 10;
                var4 = var17[var4];
                var7 = var13.bind(var3)(var4);
                var6 = var7.useStateFromStores;
                var4 = _closure1_slot6;
                var5 = new Array(1);
                var5[0] = var4;
                var4 = function() { // Environment: var0
                    var2 = _closure1_slot6;
                    var1 = var2.getErrorCode;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var6 = var6.bind(var7)(var5, var4);
                var11 = 11;
                var4 = var17[var11];
                var8 = var13.bind(var3)(var4);
                var5 = var8.useToken;
                var7 = 7;
                var4 = var17[var7];
                var4 = var14.bind(var3)(var4);
                var4 = var4.colors;
                var4 = var4.INTERACTIVE_TEXT_HOVER;
                var10 = var5.bind(var8)(var4, var10);
                var4 = 12;
                var4 = var17[var4];
                var5 = var13.bind(var3)(var4);
                var4 = var5.useBottomSheetRef;
                var5 = var4.bind(var5)();
                var4 = var5.bottomSheetRef;
                var8 = var5.bottomSheetClose;
                var5 = 13;
                var5 = var17[var5];
                var18 = var14.bind(var3)(var5);
                var5 = 14;
                var5 = var17[var5];
                var5 = var14.bind(var3)(var5);
                var5 = var5.GUILD_PROFILE;
                var5 = var18.bind(var3)(var5);
                var5 = var5.analyticsLocations;
                var _closure2_slot2 = var5;
                var11 = var17[var11];
                var13 = var13.bind(var3)(var11);
                var11 = var13.useToken;
                var7 = var17[var7];
                var7 = var14.bind(var3)(var7);
                var7 = var7.colors;
                var7 = var7.BACKGROUND_BASE_LOW;
                var7 = var11.bind(var13)(var7);
                var _closure2_slot3 = var7;
                var14 = _closure1_slot3;
                var13 = var14.useEffect;
                var11 = new Array(2);
                var11[0] = var16;
                var11[1] = var5;
                var5 = function() { // Environment: var0
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 15;
                    var1 = var1[var0];
                    var0 = undefined;
                    var4 = var2.bind(var0)(var1);
                    var3 = var4.trackGuildProfileViewed;
                    var2 = _closure2_slot0;
                    var1 = _closure2_slot2;
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
                };
                var5 = var13.bind(var14)(var5, var11);
                var13 = var14.useCallback;
                var11 = new Array(1);
                var11[0] = var1;
                var5 = function() { // Environment: var0
                    var2 = _closure2_slot1;
                    var0 = undefined;
                    var1 = true;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var5 = var13.bind(var14)(var5, var11);
                var13 = var14.useEffect;
                var11 = new Array(1);
                var11[0] = var1;
                var1 = function() { // Environment: var0
                    var1 = _closure2_slot1;
                    var0 = undefined;
                    var1 = var1.bind(var0)();
                    return var0;
                };
                var1 = var13.bind(var14)(var1, var11);
                var1 = _closure1_slot7;
                var1 = var1.NOT_FETCHED;
                if (!(var2 !== var1)) {
                    _fun59795_ip = 777;
                    continue _fun59795
                }
            case 407:
                var1 = _closure1_slot7;
                var1 = var1.FETCHING;
                if (!(var2 !== var1)) {
                    _fun59795_ip = 777;
                    continue _fun59795
                }
            case 424:
                var1 = null;
                if (!(var1 == var12)) {
                    _fun59795_ip = 441;
                    continue _fun59795
                }
            case 430:
                var2 = _closure1_slot8;
                if (!(var6 !== var2)) {
                    _fun59795_ip = 650;
                    continue _fun59795
                }
            case 441:
                if (!(var1 != var12)) {
                    _fun59795_ip = 515;
                    continue _fun59795
                }
            case 445:
                var11 = _closure1_slot10;
                var6 = _closure1_slot1;
                var13 = _closure1_slot2;
                var1 = 20;
                var1 = var13[var1];
                var2 = var6.bind(var3)(var1);
                var1 = {};
                var1.guildProfile = var12;
                var2 = var11.bind(var3)(var2, var1);
                var1 = 21;
                var1 = var13[var1];
                var6 = var6.bind(var3)(var1);
                var1 = {};
                var1.profile = var12;
                var13 = var11.bind(var3)(var6, var1);
                var6 = var2;
                _fun59795_ip = 833;
                continue _fun59795;
            case 515:
                var11 = _closure1_slot10;
                var2 = _closure1_slot1;
                var18 = _closure1_slot2;
                var1 = 19;
                var1 = var18[var1];
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var1.onRetry = var5;
                var6 = var11.bind(var3)(var2, var1);
                var17 = _closure1_slot0;
                var1 = 17;
                var1 = var18[var1];
                var1 = var17.bind(var3)(var1);
                var5 = var1.Button;
                var1 = {};
                var12 = 'lg';
                var1.size = var12;
                var12 = 18;
                var14 = var18[var12];
                var14 = var17.bind(var3)(var14);
                var16 = var14.intl;
                var14 = var16.string;
                var12 = var18[var12];
                var12 = var17.bind(var3)(var12);
                var12 = var12.t;
                var12 = var12.cpT0Cq;
                var12 = var14.bind(var16)(var12);
                var1.text = var12;
                var1.onPress = var8;
                var13 = var11.bind(var3)(var5, var1);
                _fun59795_ip = 833;
                continue _fun59795;
            case 650:
                var11 = _closure1_slot10;
                var2 = _closure1_slot1;
                var18 = _closure1_slot2;
                var1 = 16;
                var1 = var18[var1];
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var6 = var11.bind(var3)(var2, var1);
                var17 = _closure1_slot0;
                var1 = 17;
                var1 = var18[var1];
                var1 = var17.bind(var3)(var1);
                var5 = var1.Button;
                var1 = {};
                var12 = 'lg';
                var1.size = var12;
                var12 = 18;
                var14 = var18[var12];
                var14 = var17.bind(var3)(var14);
                var16 = var14.intl;
                var14 = var16.string;
                var12 = var18[var12];
                var12 = var17.bind(var3)(var12);
                var12 = var12.t;
                var12 = var12.cpT0Cq;
                var12 = var14.bind(var16)(var12);
                var1.text = var12;
                var1.onPress = var8;
                var13 = var11.bind(var3)(var5, var1);
                _fun59795_ip = 833;
                continue _fun59795;
            case 777:
                var5 = _closure1_slot10;
                var2 = _closure1_slot4;
                var1 = {};
                var11 = var9.loadingContainer;
                var1.style = var11;
                var12 = _closure1_slot5;
                var11 = {
                    'animating': true,
                    'size': 'large'
                };
                var11 = var5.bind(var3)(var12, var11);
                var1.children = var11;
                var6 = var5.bind(var3)(var2, var1);
                var13 = null;
            case 833:
                var5 = _closure1_slot3;
                var2 = var5.useMemo;
                var1 = new Array(1);
                var1[0] = var7;
                var0 = function() { // Environment: var0
                    var1 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 22;
                    var0 = var2[var0];
                    var2 = undefined;
                    var0 = var1.bind(var2)(var0);
                    var1 = _closure2_slot3;
                    var3 = var0.bind(var2)(var1);
                    var2 = var3.alpha;
                    var0 = 0;
                    var2 = var2.bind(var3)(var0);
                    var0 = var2.hex;
                    var2 = var0.bind(var2)();
                    var0 = new Array(2);
                    var0[0] = var2;
                    var0[1] = var1;
                    return var0;
                };
                var14 = var2.bind(var5)(var0, var1);
                var2 = _closure1_slot11;
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var0 = 23;
                var0 = var12[var0];
                var0 = var11.bind(var3)(var0);
                var1 = var0.BottomSheet;
                var0 = {
                    'ref': null,
                    'scrollable': true,
                    'handleDisabled': true
                };
                var0.ref = var4;
                var7 = _closure1_slot10;
                var5 = _closure1_slot1;
                var4 = 24;
                var4 = var12[var4];
                var5 = var5.bind(var3)(var4);
                var4 = {};
                var15 = _closure1_slot9;
                var15 = var15.START;
                var4.start = var15;
                var15 = {
                    'x': 0,
                    'y': 0.5
                };
                var4.end = var15;
                var15 = var9.footerContainer;
                var4.style = var15;
                var4.colors = var14;
                var4.children = var13;
                var4 = var7.bind(var3)(var5, var4);
                var0.footer = var4;
                var4 = 25;
                var4 = var12[var4];
                var4 = var11.bind(var3)(var4);
                var5 = var4.BottomSheetScrollView;
                var4 = {};
                var9 = var9.scrollView;
                var4.style = var9;
                var4.children = var6;
                var5 = var7.bind(var3)(var5, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var5 = 26;
                var5 = var12[var5];
                var5 = var11.bind(var3)(var5);
                var6 = var5.ActionSheetHeaderBar;
                var5 = {};
                var9 = 27;
                var9 = var12[var9];
                var9 = var11.bind(var3)(var9);
                var9 = var9.ActionSheetHeaderBarVariants;
                var9 = var9.FLOATING;
                var5.variant = var9;
                var9 = {};
                var9.backgroundColor = var10;
                var5.tabStyle = var9;
                var5.onPress = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 7400, 5604, 660, 33, 1297, 671, 3246, 7405, 566, 3151, 5729, 5730, 5583, 7406, 7407, 4084, 1234, 7435, 7408, 7436, 669, 4933, 4098, 4935, 5204, 5204, 2]);