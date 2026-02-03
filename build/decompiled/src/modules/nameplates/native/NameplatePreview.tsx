// modules/nameplates/native/NameplatePreview.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var7 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot7 = var6;
    var3 = var3.jsxs;
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = function(arg0) { // Environment: var1
        _fun56918: for (var _fun56918_ip = 0;;) switch (_fun56918_ip) {
            case 0:
                var6 = arg0;
                var0 = {};
                var1 = {
                    'borderRadius': null,
                    'padding': null,
                    'flexDirection': 'row',
                    'alignItems': 'center',
                    'width': '100%'
                };
                var2 = 0;
                if (!var6) {
                    _fun56918_ip = 60;
                    continue _fun56918
                }
            case 24:
                var7 = _closure1_slot1;
                var5 = _closure1_slot2;
                var4 = 6;
                var5 = var5[var4];
                var4 = undefined;
                var4 = var7.bind(var4)(var5);
                var4 = var4.radii;
                var2 = var4.sm;
            case 60:
                var1.borderRadius = var2;
                var8 = _closure1_slot1;
                var7 = _closure1_slot2;
                var5 = 6;
                var9 = var7[var5];
                var4 = undefined;
                var9 = var8.bind(var4)(var9);
                var9 = var9.spacing;
                var9 = var9.PX_8;
                var1.padding = var9;
                var7 = var7[var5];
                var7 = var8.bind(var4)(var7);
                var7 = var7.colors;
                var7 = var7.BACKGROUND_BASE_LOWEST;
                var1.backgroundColor = var7;
                var0.container = var1;
                var1 = {};
                var3 = 0;
                if (!var6) {
                    _fun56918_ip = 171;
                    continue _fun56918
                }
            case 143:
                var7 = _closure1_slot1;
                var6 = _closure1_slot2;
                var6 = var6[var5];
                var6 = var7.bind(var4)(var6);
                var6 = var6.radii;
                var3 = var6.sm;
            case 171:
                var1.borderRadius = var3;
                var0.nameplate = var1;
                var1 = {};
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var6 = var2[var5];
                var6 = var3.bind(var4)(var6);
                var6 = var6.radii;
                var6 = var6.round;
                var1.borderRadius = var6;
                var6 = var2[var5];
                var6 = var3.bind(var4)(var6);
                var6 = var6.spacing;
                var6 = var6.PX_8;
                var1.marginRight = var6;
                var0.avatar = var1;
                var1 = {};
                var6 = 1;
                var1.flex = var6;
                var2 = var2[var5];
                var2 = var3.bind(var4)(var2);
                var2 = var2.spacing;
                var2 = var2.PX_40;
                var1.paddingRight = var2;
                var0.content = var1;
                return var0;
        }
    };
    var3 = var6.bind(var7)(var3);
    var _closure1_slot9 = var3;
    var3 = 18;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/nameplates/native/NameplatePreview.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Environment: var1
        _fun56919: for (var _fun56919_ip = 0;;) switch (_fun56919_ip) {
            case 0:
                var1 = arg0;
                var4 = var1.nameplate;
                var17 = var1.nameplateData;
                var16 = var1.user;
                var _closure2_slot0 = var16;
                var2 = var1.hasRoundedCorners;
                var3 = undefined;
                if (!(var2 === var3)) {
                    _fun56919_ip = 42;
                    continue _fun56919
                }
            case 40:
                var2 = true;
            case 42:
                var13 = var1.animate;
                if (!(var13 === var3)) {
                    _fun56919_ip = 54;
                    continue _fun56919
                }
            case 52:
                var13 = false;
            case 54:
                var15 = var1.guildId;
                var _closure2_slot1 = var15;
                var14 = var1.pendingDisplayNameStyles;
                var11 = var1.pendingGlobalName;
                var _closure2_slot2 = var3;
                var _closure2_slot3 = var3;
                var _closure2_slot4 = var3;
                var1 = _closure1_slot9;
                var6 = var1.bind(var3)(var2);
                _closure2_slot2 = var6;
                var9 = null;
                if (!(var9 != var4)) {
                    _fun56919_ip = 140;
                    continue _fun56919
                }
            case 109:
                var2 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 7;
                var1 = var5[var1];
                var2 = var2.bind(var3)(var1);
                var1 = var2.getNameplateDataFromRecord;
                var17 = var1.bind(var2)(var4);
            case 140:
                var7 = _closure1_slot0;
                var12 = _closure1_slot2;
                var1 = 8;
                var1 = var12[var1];
                var2 = var7.bind(var3)(var1);
                var1 = var2.useAvatarDecoration;
                var2 = var1.bind(var2)(var16);
                var5 = _closure1_slot1;
                var1 = 9;
                var1 = var12[var1];
                var4 = var5.bind(var3)(var1);
                var1 = {};
                var1 = var4.bind(var3)(var1);
                var1 = var1.pendingAvatarDecoration;
                var4 = 10;
                var10 = var12[var4];
                var20 = var7.bind(var3)(var10);
                var19 = var20.useStateFromStores;
                var10 = _closure1_slot5;
                var18 = new Array(1);
                var18[0] = var10;
                var10 = function() { // Environment: var0
                    var0 = _closure1_slot5;
                    var0 = var0.useReducedMotion;
                    return var0;
                };
                var10 = var19.bind(var20)(var18, var10);
                _closure2_slot3 = var10;
                var4 = var12[var4];
                var19 = var7.bind(var3)(var4);
                var18 = var19.useStateFromStores;
                var4 = _closure1_slot6;
                var7 = new Array(1);
                var7[0] = var4;
                var4 = function() { // Environment: var0
                    _fun56921: for (var _fun56921_ip = 0;;) switch (_fun56921_ip) {
                        case 0:
                            var0 = _closure2_slot1;
                            var3 = null;
                            var2 = var3 != var0;
                            var0 = null;
                            if (!var2) {
                                _fun56921_ip = 63;
                                continue _fun56921
                            }
                        case 18:
                            var2 = _closure2_slot0;
                            var2 = var3 != var2;
                            var0 = null;
                            if (!var2) {
                                _fun56921_ip = 63;
                                continue _fun56921
                            }
                        case 31:
                            var4 = _closure1_slot6;
                            var3 = var4.getMember;
                            var2 = _closure2_slot1;
                            var1 = _closure2_slot0;
                            var1 = var1.id;
                            var0 = var3.bind(var4)(var2, var1);
                        case 63:
                            return var0;
                    }
                };
                var7 = var18.bind(var19)(var7, var4);
                var4 = 11;
                var4 = var12[var4];
                var5 = var5.bind(var3)(var4);
                var4 = var5.useName;
                var12 = var4.bind(var5)(var16);
                if (!(var9 == var11)) {
                    _fun56919_ip = 358;
                    continue _fun56919
                }
            case 308:
                var4 = var12;
                if (!(var9 != var15)) {
                    _fun56919_ip = 355;
                    continue _fun56919
                }
            case 315:
                var18 = var9 == var7;
                var5 = undefined;
                if (var18) {
                    _fun56919_ip = 330;
                    continue _fun56919
                }
            case 324:
                var5 = var7.nick;
            case 330:
                var4 = var12;
                if (!(var9 != var5)) {
                    _fun56919_ip = 355;
                    continue _fun56919
                }
            case 337:
                var12 = var9 == var7;
                var5 = undefined;
                if (var12) {
                    _fun56919_ip = 352;
                    continue _fun56919
                }
            case 346:
                var5 = var7.nick;
            case 352:
                var4 = var5;
            case 355:
                var11 = var4;
            case 358:
                var12 = var2;
                if (!(var3 !== var1)) {
                    _fun56919_ip = 368;
                    continue _fun56919
                }
            case 365:
                var12 = var1;
            case 368:
                _closure2_slot4 = var12;
                var5 = _closure1_slot1;
                var18 = _closure1_slot2;
                var1 = 12;
                var1 = var18[var1];
                var2 = var5.bind(var3)(var1);
                var1 = {};
                var4 = var16.id;
                var1.userId = var4;
                var1.guildId = var15;
                var1.pendingDisplayNameStyles = var14;
                var7 = var2.bind(var3)(var1);
                var4 = _closure1_slot3;
                var2 = var4.useMemo;
                var19 = var6.avatar;
                var1 = new Array(5);
                var1[0] = var19;
                var1[1] = var16;
                var1[2] = var15;
                var1[3] = var12;
                var1[4] = var10;
                var0 = function() { // Environment: var0
                    var3 = _closure1_slot7;
                    var1 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var5 = 13;
                    var0 = var7[var5];
                    var2 = undefined;
                    var1 = var1.bind(var2)(var0);
                    var0 = {};
                    var8 = _closure2_slot2;
                    var8 = var8.avatar;
                    var0.style = var8;
                    var8 = _closure2_slot0;
                    var0.user = var8;
                    var8 = _closure2_slot1;
                    var0.guildId = var8;
                    var6 = _closure1_slot0;
                    var5 = var7[var5];
                    var5 = var6.bind(var2)(var5);
                    var5 = var5.AvatarSizes;
                    var5 = var5.NORMAL;
                    var0.size = var5;
                    var5 = _closure2_slot4;
                    var0.avatarDecoration = var5;
                    var4 = _closure2_slot3;
                    var4 = !var4;
                    var0.animate = var4;
                    var4 = true;
                    var0.autoStatusCutout = var4;
                    var0['aria-hidden'] = var4;
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                };
                var12 = var2.bind(var4)(var0, var1);
                var2 = _closure1_slot8;
                var1 = _closure1_slot4;
                var0 = {};
                var4 = var6.container;
                var0.style = var4;
                var10 = _closure1_slot7;
                var4 = 14;
                var4 = var18[var4];
                var5 = var5.bind(var3)(var4);
                var4 = {};
                var4.nameplate = var17;
                var17 = var6.nameplate;
                var4.style = var17;
                var17 = true;
                var4.fullOpacity = var17;
                var4.animate = var13;
                var5 = var10.bind(var3)(var5, var4);
                var4 = new Array(3);
                var4[0] = var5;
                var5 = {};
                var13 = var6.avatar;
                var5.style = var13;
                var5.children = var12;
                var5 = var10.bind(var3)(var1, var5);
                var4[1] = var5;
                var5 = {};
                var6 = var6.content;
                var5.style = var6;
                var10 = var9 != var7;
                if (!var10) {
                    _fun56919_ip = 693;
                    continue _fun56919
                }
            case 589:
                var13 = _closure1_slot7;
                var12 = _closure1_slot1;
                var17 = _closure1_slot2;
                var6 = 15;
                var6 = var17[var6];
                var12 = var12.bind(var3)(var6);
                var6 = {};
                var16 = var16.id;
                var6.userId = var16;
                var6.guildId = var15;
                var6.userName = var11;
                var15 = 'text-md/semibold';
                var6.variant = var15;
                var16 = _closure1_slot0;
                var15 = 16;
                var15 = var17[var15];
                var15 = var16.bind(var3)(var15);
                var15 = var15.EffectDisplayType;
                var15 = var15.STATIC;
                var6.effectDisplayType = var15;
                var15 = 1;
                var6.lineClamp = var15;
                var6.pendingDisplayNameStyles = var14;
                var10 = var13.bind(var3)(var12, var6);
            case 693:
                var6 = new Array(2);
                var6[0] = var10;
                var7 = var9 == var7;
                if (!var7) {
                    _fun56919_ip = 761;
                    continue _fun56919
                }
            case 708:
                var10 = _closure1_slot7;
                var9 = _closure1_slot0;
                var12 = _closure1_slot2;
                var8 = 17;
                var8 = var12[var8];
                var8 = var9.bind(var3)(var8);
                var9 = var8.Text;
                var8 = {
                    'lineClamp': 1,
                    'variant': 'text-md/semibold',
                    'color': 'mobile-text-heading-primary'
                };
                var8.children = var11;
                var7 = var10.bind(var3)(var9, var8);
            case 761:
                var6[1] = var7;
                var5.children = var6;
                var5 = var2.bind(var3)(var1, var5);
                var4[2] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.NameplatePreview = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1298, 1681, 33, 1297, 671, 1643, 3962, 5581, 566, 3236, 3984, 5452, 6913, 6918, 6919, 3941, 2]);