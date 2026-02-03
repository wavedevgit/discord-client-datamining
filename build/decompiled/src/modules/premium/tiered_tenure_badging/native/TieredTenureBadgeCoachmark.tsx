// modules/premium/tiered_tenure_badging/native/TieredTenureBadgeCoachmark.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        _fun59740: for (var _fun59740_ip = 0;;) switch (_fun59740_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.badge;
                var0 = _closure1_slot9;
                var4 = undefined;
                var8 = var0.bind(var4)();
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 7;
                var0 = var3[var0];
                var6 = var2.bind(var4)(var0);
                var3 = var6.useMobileTenureBadgeImages;
                var0 = null;
                var7 = var0 == var1;
                var2 = undefined;
                if (var7) {
                    _fun59740_ip = 64;
                    continue _fun59740
                }
            case 59:
                var2 = var1.id;
            case 64:
                var2 = var3.bind(var6)(var2);
                var3 = var0 == var2;
                var9 = undefined;
                if (var3) {
                    _fun59740_ip = 84;
                    continue _fun59740
                }
            case 78:
                var9 = var2.medium;
            case 84:
                var1 = var0 == var1;
                var0 = null;
                if (var1) {
                    _fun59740_ip = 183;
                    continue _fun59740
                }
            case 93:
                var3 = _closure1_slot8;
                var2 = _closure1_slot5;
                var1 = {};
                var6 = var8.imageContainer;
                var1.style = var6;
                var7 = _closure1_slot8;
                var6 = _closure1_slot1;
                var10 = _closure1_slot2;
                var5 = 8;
                var5 = var10[var5];
                var6 = var6.bind(var4)(var5);
                var5 = {};
                var10 = 'contain';
                var5.resizeMode = var10;
                var8 = var8.image;
                var5.style = var8;
                var8 = {};
                var8.uri = var9;
                var5.source = var8;
                var5 = var7.bind(var4)(var6, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 183:
                return var0;
        }
    };
    var _closure1_slot10 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = arg3;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.UserSettingsSections;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ContentDismissActionType;
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'width': '100%',
        'height': '100%'
    };
    var3.image = var8;
    var8 = {
        'width': 110,
        'height': 72,
        'marginTop': 16
    };
    var3.imageContainer = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot9 = var3;
    var3 = 15;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/premium/tiered_tenure_badging/native/TieredTenureBadgeCoachmark.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun59741: for (var _fun59741_ip = 0;;) switch (_fun59741_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.targetRef;
                var6 = var0.badgeId;
                var5 = undefined;
                var _closure2_slot0 = var5;
                var _closure2_slot1 = var5;
                var _closure2_slot2 = var5;
                var2 = _closure1_slot0;
                var0 = _closure1_slot2;
                var8 = 9;
                var0 = var0[var8];
                var2 = var2.bind(var5)(var0);
                var0 = var2.getTieredTenureBadge;
                var7 = var0.bind(var2)(var6);
                var0 = null;
                var2 = var0 != var7;
                var9 = null;
                if (!var2) {
                    _fun59741_ip = 104;
                    continue _fun59741
                }
            case 76:
                var6 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var8];
                var6 = var6.bind(var5)(var2);
                var2 = var6.getTieredTenureBadgeData;
                var9 = var2.bind(var6)(var7);
            case 104:
                _closure2_slot0 = var9;
                if (!(var0 == var9)) {
                    _fun59741_ip = 118;
                    continue _fun59741
                }
            case 112:
                var10 = new Array(0);
                _fun59741_ip = 161;
                continue _fun59741;
            case 118:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 10;
                var2 = var7[var2];
                var2 = var6.bind(var5)(var2);
                var2 = var2.DismissibleContent;
                var6 = var2.TIERED_TENURE_BADGE_COACHMARK;
                var2 = new Array(1);
                var2[0] = var6;
                var10 = var2;
            case 161:
                var2 = _closure1_slot0;
                var6 = _closure1_slot2;
                var7 = 11;
                var7 = var6[var7];
                var8 = var2.bind(var5)(var7);
                var7 = var8.useSelectedDismissibleContent;
                var10 = var7.bind(var8)(var10);
                var8 = _closure1_slot3;
                var7 = 2;
                var8 = var8.bind(var5)(var10, var7);
                var7 = 0;
                var10 = var8[var7];
                _closure2_slot1 = var10;
                var7 = 1;
                var11 = var8[var7];
                _closure2_slot2 = var11;
                var8 = _closure1_slot4;
                var7 = var8.useMemo;
                var3 = new Array(3);
                var3[0] = var11;
                var3[1] = var10;
                var3[2] = var9;
                var1 = function() { // Environment: var1
                    var0 = {};
                    var6 = 12;
                    var0.offsetY = var6;
                    var5 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var3 = var1[var6];
                    var4 = undefined;
                    var3 = var5.bind(var4)(var3);
                    var8 = var3.intl;
                    var7 = var8.string;
                    var3 = var1[var6];
                    var3 = var5.bind(var4)(var3);
                    var3 = var3.t;
                    var3 = var3.Ajj8iG;
                    var3 = var7.bind(var8)(var3);
                    var0.title = var3;
                    var3 = var1[var6];
                    var3 = var5.bind(var4)(var3);
                    var8 = var3.intl;
                    var7 = var8.string;
                    var3 = var1[var6];
                    var3 = var5.bind(var4)(var3);
                    var3 = var3.t;
                    var3 = var3["WUNqD/"];
                    var3 = var7.bind(var8)(var3);
                    var0.description = var3;
                    var3 = 'bottom';
                    var0.position = var3;
                    var7 = _closure2_slot1;
                    var3 = 10;
                    var3 = var1[var3];
                    var3 = var5.bind(var4)(var3);
                    var3 = var3.DismissibleContent;
                    var3 = var3.TIERED_TENURE_BADGE_COACHMARK;
                    var3 = var7 === var3;
                    var0.visible = var3;
                    var3 = function() {
                        var2 = _closure2_slot2;
                        var0 = _closure1_slot7;
                        var1 = var0.USER_DISMISS;
                        var0 = undefined;
                        var1 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var0.onDismiss = var3;
                    var3 = function() {
                        var3 = _closure1_slot8;
                        var2 = _closure1_slot10;
                        var1 = {};
                        var0 = _closure2_slot0;
                        var1.badge = var0;
                        var0 = undefined;
                        var0 = var3.bind(var0)(var2, var1);
                        return var0;
                    };
                    var0.renderImgComponent = var3;
                    var2 = function() {
                        var2 = _closure2_slot2;
                        var0 = _closure1_slot7;
                        var1 = var0.TAKE_ACTION;
                        var0 = undefined;
                        var1 = var2.bind(var0)(var1);
                        var2 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 13;
                        var1 = var3[var1];
                        var3 = var2.bind(var0)(var1);
                        var2 = var3.openUserSettings;
                        var1 = {};
                        var4 = _closure1_slot6;
                        var4 = var4.PREMIUM;
                        var1.screen = var4;
                        var1 = var2.bind(var3)(var1);
                        return var0;
                    };
                    var0.onButtonPress = var2;
                    var2 = var1[var6];
                    var2 = var5.bind(var4)(var2);
                    var3 = var2.intl;
                    var2 = var3.string;
                    var1 = var1[var6];
                    var1 = var5.bind(var4)(var1);
                    var1 = var1.t;
                    var1 = var1.RzWDqY;
                    var1 = var2.bind(var3)(var1);
                    var0.buttonLabel = var1;
                    var1 = 'experimental_premium-primary';
                    var0.buttonVariant = var1;
                    return var0;
                };
                var3 = var7.bind(var8)(var1, var3);
                var1 = 14;
                var1 = var6[var1];
                var2 = var2.bind(var5)(var1);
                var1 = var2.useCoachmark;
                var1 = var1.bind(var2)(var4, var3);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 660, 1369, 33, 1297, 7323, 4704, 7322, 1358, 5957, 1234, 5922, 7016, 2]);