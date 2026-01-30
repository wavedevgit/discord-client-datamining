// modules/activities/native/ActivityShelfBadge.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var12 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
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
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot2 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var9 = var3.Fonts;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot3 = var3;
    var3 = 4;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'position': 'absolute',
        'top': 4,
        'right': 4,
        'display': 'flex',
        'flexDirection': 'row',
        'alignItems': 'center'
    };
    var11 = 5;
    var10 = var5[var11];
    var10 = var12.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.STATUS_POSITIVE_BACKGROUND;
    var8.backgroundColor = var10;
    var3.badge = var8;
    var10 = {
        'paddingLeft': 4,
        'paddingRight': 6,
        'borderRadius': null,
        'height': 16
    };
    var8 = 6;
    var13 = var5[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.radii;
    var13 = var13.sm;
    var10.borderRadius = var13;
    var13 = var5[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BADGE_NOTIFICATION_BACKGROUND;
    var10.backgroundColor = var13;
    var3.newBadge = var10;
    var10 = {
        'paddingLeft': 4,
        'paddingRight': 6,
        'borderRadius': null,
        'height': 16
    };
    var13 = var5[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.radii;
    var13 = var13.sm;
    var10.borderRadius = var13;
    var11 = var5[var11];
    var11 = var12.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BADGE_BACKGROUND_BRAND;
    var10.backgroundColor = var11;
    var3.updatedBadge = var10;
    var10 = var5[var8];
    var11 = var4.bind(var0)(var10);
    var10 = var11.generateBoxShadowStyle;
    var8 = var5[var8];
    var8 = var4.bind(var0)(var8);
    var8 = var8.FOUR_DP_ELEVATION_SHADOW_PARAMS;
    var8 = var10.bind(var11)(var8);
    var3.elevationShadow = var8;
    var8 = {
        'textTransform': 'uppercase',
        'marginLeft': 2,
        'fontFamily': null,
        'lineHeight': 16,
        'fontSize': 12
    };
    var9 = var9.DISPLAY_EXTRABOLD;
    var8.fontFamily = var9;
    var3.badgeText = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot4 = var3;
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/activities/native/ActivityShelfBadge.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: ActivityShelfBadge, environment: var1
        _fun108309: for (var _fun108309_ip = 0;;) switch (_fun108309_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.labelType;
                var8 = var0.replacementStyles;
                var0 = _closure1_slot4;
                var4 = undefined;
                var7 = var0.bind(var4)();
                var0 = null;
                if (!(var0 == var8)) {
                    _fun108309_ip = 40;
                    continue _fun108309
                }
            case 34:
                var8 = var7.badge;
            case 40:
                var3 = _closure1_slot0;
                var1 = _closure1_slot1;
                var6 = 7;
                var1 = var1[var6];
                var1 = var3.bind(var4)(var1);
                var1 = var1.EmbeddedActivityLabelTypes;
                var1 = var1.NEW;
                if (!(var2 !== var1)) {
                    _fun108309_ip = 284;
                    continue _fun108309
                }
            case 79:
                var3 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var6];
                var1 = var3.bind(var4)(var1);
                var1 = var1.EmbeddedActivityLabelTypes;
                var1 = var1.UPDATED;
                var0 = null;
                if (!(var2 === var1)) {
                    _fun108309_ip = 279;
                    continue _fun108309
                }
            case 117:
                var3 = _closure1_slot3;
                var2 = _closure1_slot2;
                var1 = {};
                var6 = new Array(3);
                var6[0] = var8;
                var9 = var7.updatedBadge;
                var6[1] = var9;
                var9 = var7.elevationShadow;
                var6[2] = var9;
                var1.style = var6;
                var13 = _closure1_slot0;
                var14 = _closure1_slot1;
                var6 = 8;
                var6 = var14[var6];
                var6 = var13.bind(var4)(var6);
                var9 = var6.Text;
                var6 = {
                    'variant': 'text-xs/semibold',
                    'style': null,
                    'color': 'always-white'
                };
                var10 = var7.badgeText;
                var6.style = var10;
                var10 = 9;
                var11 = var14[var10];
                var11 = var13.bind(var4)(var11);
                var12 = var11.intl;
                var11 = var12.string;
                var10 = var14[var10];
                var10 = var13.bind(var4)(var10);
                var10 = var10.t;
                var10 = var10["/qdhkk"];
                var10 = var11.bind(var12)(var10);
                var6.children = var10;
                var6 = var3.bind(var4)(var9, var6);
                var1.children = var6;
                var0 = var3.bind(var4)(var2, var1);
            case 279:
                _fun108309_ip = 444;
                continue _fun108309;
            case 284:
                var3 = _closure1_slot3;
                var2 = _closure1_slot2;
                var1 = {};
                var6 = new Array(3);
                var6[0] = var8;
                var8 = var7.newBadge;
                var6[1] = var8;
                var8 = var7.elevationShadow;
                var6[2] = var8;
                var1.style = var6;
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var5 = 8;
                var5 = var11[var5];
                var5 = var10.bind(var4)(var5);
                var6 = var5.Text;
                var5 = {
                    'variant': 'text-xs/semibold',
                    'style': null,
                    'color': 'always-white'
                };
                var7 = var7.badgeText;
                var5.style = var7;
                var7 = 9;
                var8 = var11[var7];
                var8 = var10.bind(var4)(var8);
                var9 = var8.intl;
                var8 = var9.string;
                var7 = var11[var7];
                var7 = var10.bind(var4)(var7);
                var7 = var7.t;
                var7 = var7.y2b7CA;
                var7 = var8.bind(var9)(var7);
                var5.children = var7;
                var5 = var3.bind(var4)(var6, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 444:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 660, 33, 1297, 671, 4848, 1636, 3901, 1234, 2]);