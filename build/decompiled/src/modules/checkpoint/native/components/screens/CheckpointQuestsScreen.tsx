// modules/checkpoint/native/components/screens/CheckpointQuestsScreen.tsx
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
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var3 = var3.useContext;
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.Pressable;
    var _closure1_slot4 = var6;
    var3 = var3.View;
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.CheckpointSlides;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.HelpdeskArticles;
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot9 = var6;
    var3 = var3.jsxs;
    var _closure1_slot10 = var3;
    var3 = 6;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'width': '100%',
        'height': '100%',
        'display': 'flex'
    };
    var9 = 7;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_40;
    var8.gap = var11;
    var3.container = var8;
    var8 = {
        'display': 'flex',
        'flexDirection': 'row',
        'alignItems': 'center',
        'gap': 8
    };
    var3.title = var8;
    var8 = {};
    var11 = 800;
    var8.fontWeight = var11;
    var3.titleText = var8;
    var8 = {
        'flexGrow': 1,
        'display': 'flex',
        'justifyContent': 'center'
    };
    var3.imageContainer = var8;
    var8 = {
        'aspectRatio': 0.6875,
        'width': 'auto',
        'height': '100%'
    };
    var3.image = var8;
    var8 = {};
    var11 = 'underline';
    var8.textDecorationLine = var11;
    var3.link = var8;
    var8 = {};
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_16;
    var8.marginBottom = var11;
    var3.titleSpacing = var8;
    var8 = {};
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.spacing;
    var9 = var9.PX_16;
    var8.marginTop = var9;
    var3.knickKnacks = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot11 = var3;
    var3 = 25;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/checkpoint/native/components/screens/CheckpointQuestsScreen.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() { // Original name: CheckpointQuestsScreen, environment: var1
        _fun87000: for (var _fun87000_ip = 0;;) switch (_fun87000_ip) {
            case 0:
                var0 = _closure1_slot11;
                var3 = undefined;
                var16 = var0.bind(var3)();
                var _closure2_slot0 = var16;
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 8;
                var0 = var2[var0];
                var4 = var1.bind(var3)(var0);
                var2 = var4.useStateFromStores;
                var0 = _closure1_slot6;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var23
                    var1 = _closure1_slot6;
                    var0 = var1.getCheckpointData;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var0 = var2.bind(var4)(var1, var0);
                var0 = var0.quests;
                if (!(var3 === var0)) {
                    _fun87000_ip = 89;
                    continue _fun87000
                }
            case 79:
                var0 = {
                    'numCompleted': 0,
                    'numOrbs': 0
                };
            case 89:
                var22 = var0.numCompleted;
                var24 = var0.numOrbs;
                var2 = _closure1_slot3;
                var1 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 9;
                var0 = var4[var0];
                var0 = var1.bind(var3)(var0);
                var0 = var0.CheckpointColorContext;
                var0 = var2.bind(var3)(var0);
                var2 = 10;
                var2 = var4[var2];
                var5 = var1.bind(var3)(var2);
                var2 = var5.useToken;
                var0 = var0.primaryColor;
                var20 = var2.bind(var5)(var0);
                var12 = 0;
                var18 = var12 === var22;
                var0 = 11;
                var0 = var4[var0];
                var1 = var1.bind(var3)(var0);
                var0 = var1.useIsScreenLandscape;
                var14 = var0.bind(var1)();
                var0 = function() { // Original name: handleLearnMore, environment: var23
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var0 = 12;
                    var2 = var6[var0];
                    var0 = undefined;
                    var3 = var5.bind(var0)(var2);
                    var2 = var3.openURL;
                    var4 = 13;
                    var4 = var6[var4];
                    var5 = var5.bind(var0)(var4);
                    var4 = var5.getArticleURL;
                    var1 = _closure1_slot8;
                    var1 = var1.QUESTS_LEARN_MORE;
                    var1 = var4.bind(var5)(var1);
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var _closure2_slot1 = var0;
                var2 = _closure1_slot9;
                var1 = _closure1_slot1;
                var0 = 14;
                var0 = var4[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var4 = _closure1_slot7;
                var4 = var4.QUESTS;
                var0.slide = var4;
                var6 = _closure1_slot10;
                var5 = _closure1_slot5;
                var4 = {};
                var8 = var16.container;
                var7 = new Array(2);
                var7[0] = var8;
                var8 = {};
                var9 = 'column';
                if (!var14) {
                    _fun87000_ip = 277;
                    continue _fun87000
                }
            case 273:
                var9 = 'row';
            case 277:
                var8.flexDirection = var9;
                var7[1] = var8;
                var4.style = var7;
                var9 = _closure1_slot9;
                var8 = _closure1_slot5;
                var7 = {};
                var11 = var16.imageContainer;
                var10 = new Array(2);
                var10[0] = var11;
                var11 = {};
                var13 = '50%';
                if (!var14) {
                    _fun87000_ip = 330;
                    continue _fun87000
                }
            case 324:
                var13 = '100%';
            case 330:
                var11.height = var13;
                var10[1] = var11;
                var7.style = var10;
                var13 = _closure1_slot9;
                var17 = _closure1_slot1;
                var19 = _closure1_slot2;
                var10 = 15;
                var10 = var19[var10];
                var11 = var17.bind(var3)(var10);
                var10 = {};
                var14 = 16;
                var14 = var19[var14];
                var14 = var17.bind(var3)(var14);
                var10.uri = var14;
                var14 = var16.image;
                var10.style = var14;
                var10 = var13.bind(var3)(var11, var10);
                var7.children = var10;
                var8 = var9.bind(var3)(var8, var7);
                var7 = new Array(2);
                var7[0] = var8;
                var10 = _closure1_slot10;
                var9 = _closure1_slot5;
                var8 = {};
                var11 = {};
                var14 = var16.title;
                var13 = new Array(2);
                var13[0] = var14;
                var14 = undefined;
                if (!var18) {
                    _fun87000_ip = 454;
                    continue _fun87000
                }
            case 448:
                var14 = var16.titleSpacing;
            case 454:
                var13[1] = var14;
                var11.style = var13;
                var21 = _closure1_slot9;
                var17 = _closure1_slot0;
                var14 = _closure1_slot2;
                var13 = 17;
                var13 = var14[var13];
                var13 = var17.bind(var3)(var13);
                var17 = var13.QuestsIcon;
                var13 = {};
                var19 = 'xs';
                var13.size = var19;
                var19 = {};
                var19.tintColor = var20;
                var13.style = var19;
                var17 = var21.bind(var3)(var17, var13);
                var13 = new Array(2);
                var13[0] = var17;
                var17 = _closure1_slot1;
                var19 = 18;
                var14 = var14[var19];
                var17 = var17.bind(var3)(var14);
                var14 = {
                    'variant': 'eyebrow',
                    'style': null,
                    'adjustsFontSizeToFit': true,
                    'lineClamp': 2
                };
                var20 = var16.titleText;
                var14.style = var20;
                var27 = _closure1_slot0;
                var26 = _closure1_slot2;
                var20 = 19;
                var25 = var26[var20];
                var25 = var27.bind(var3)(var25);
                var29 = var25.intl;
                var28 = var29.string;
                var27 = _closure1_slot1;
                var25 = 20;
                var26 = var26[var25];
                var27 = var27.bind(var3)(var26);
                if (var18) {
                    _fun87000_ip = 633;
                    continue _fun87000
                }
            case 618:
                var26 = var27.qsFkSO;
                var26 = var28.bind(var29)(var26);
                _fun87000_ip = 646;
                continue _fun87000;
            case 633:
                var27 = var27.QkdNzt;
                var26 = var28.bind(var29)(var27);
            case 646:
                var14.children = var26;
                var14 = var21.bind(var3)(var17, var14);
                var13[1] = var14;
                var11.children = var13;
                var13 = var10.bind(var3)(var9, var11);
                var11 = new Array(4);
                var11[0] = var13;
                var13 = !var18;
                if (var18) {
                    _fun87000_ip = 720;
                    continue _fun87000
                }
            case 684:
                var21 = _closure1_slot9;
                var17 = _closure1_slot1;
                var26 = _closure1_slot2;
                var14 = 21;
                var14 = var26[var14];
                var17 = var17.bind(var3)(var14);
                var14 = {};
                var14.end = var22;
                var13 = var21.bind(var3)(var17, var14);
            case 720:
                var11[1] = var13;
                var12 = var24 > var12;
                if (var12) {
                    _fun87000_ip = 734;
                    continue _fun87000
                }
            case 731:
                var12 = var18;
            case 734:
                if (!var12) {
                    _fun87000_ip = 893;
                    continue _fun87000
                }
            case 740:
                var17 = _closure1_slot9;
                var14 = _closure1_slot1;
                var13 = _closure1_slot2;
                var13 = var13[var19];
                var14 = var14.bind(var3)(var13);
                var13 = {
                    'variant': 'heading-lg/medium',
                    'adjustsFontSizeToFit': true,
                    'lineClamp': 4
                };
                var21 = _closure1_slot0;
                var19 = _closure1_slot2;
                var20 = var19[var20];
                var20 = var21.bind(var3)(var20);
                var22 = var20.intl;
                var21 = var22.format;
                var20 = _closure1_slot1;
                var19 = var19[var25];
                var19 = var20.bind(var3)(var19);
                if (var18) {
                    _fun87000_ip = 855;
                    continue _fun87000
                }
            case 818:
                var20 = var19["gd+Olh"];
                var18 = {};
                var18.numOrbs = var24;
                var24 = function(arg0, arg1) { // Original name: orbsHook, environment: var23
                    var4 = _closure1_slot9;
                    var7 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var1 = 22;
                    var1 = var8[var1];
                    var3 = undefined;
                    var2 = var7.bind(var3)(var1);
                    var1 = {};
                    var5 = true;
                    var1.forcePosition = var5;
                    var5 = _closure1_slot0;
                    var0 = 23;
                    var0 = var8[var0];
                    var0 = var5.bind(var3)(var0);
                    var5 = var0.OrbsIcon;
                    var0 = {};
                    var6 = 7;
                    var6 = var8[var6];
                    var6 = var7.bind(var3)(var6);
                    var6 = var6.colors;
                    var6 = var6.BLACK;
                    var0.color = var6;
                    var0 = var4.bind(var3)(var5, var0);
                    var1.icon = var0;
                    var0 = arg0;
                    var1.children = var0;
                    var0 = arg1;
                    var0 = var4.bind(var3)(var2, var1, var0);
                    return var0;
                };
                var18.orbsHook = var24;
                var18 = var21.bind(var22)(var20, var18);
                _fun87000_ip = 883;
                continue _fun87000;
            case 855:
                var20 = var19.UYTBoT;
                var19 = {};
                var23 = function(arg0, arg1) { // Original name: learnMoreHook, environment: var23
                    var4 = _closure1_slot9;
                    var3 = _closure1_slot4;
                    var2 = {};
                    var1 = _closure2_slot1;
                    var2.onPress = var1;
                    var5 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 18;
                    var0 = var1[var0];
                    var1 = undefined;
                    var5 = var5.bind(var1)(var0);
                    var0 = {};
                    var7 = 'heading-lg/medium';
                    var0.variant = var7;
                    var6 = _closure2_slot0;
                    var6 = var6.link;
                    var0.style = var6;
                    var6 = arg0;
                    var0.children = var6;
                    var0 = var4.bind(var1)(var5, var0);
                    var2.children = var0;
                    var0 = arg1;
                    var0 = var4.bind(var1)(var3, var2, var0);
                    return var0;
                };
                var19.learnMoreHook = var23;
                var18 = var21.bind(var22)(var20, var19);
            case 883:
                var13.children = var18;
                var12 = var17.bind(var3)(var14, var13);
            case 893:
                var11[2] = var12;
                var14 = _closure1_slot9;
                var13 = _closure1_slot1;
                var17 = _closure1_slot2;
                var12 = 24;
                var12 = var17[var12];
                var13 = var13.bind(var3)(var12);
                var12 = {};
                var16 = var16.knickKnacks;
                var12.style = var16;
                var15 = _closure1_slot7;
                var15 = var15.QUESTS;
                var12.slide = var15;
                var12 = var14.bind(var3)(var13, var12);
                var11[3] = var12;
                var8.children = var11;
                var8 = var10.bind(var3)(var9, var8);
                var7[1] = var8;
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 11134, 9123, 660, 33, 1297, 671, 566, 11136, 3110, 5323, 3103, 1675, 11138, 11141, 11181, 10603, 11143, 1234, 2267, 11154, 11157, 9512, 11150, 2]);