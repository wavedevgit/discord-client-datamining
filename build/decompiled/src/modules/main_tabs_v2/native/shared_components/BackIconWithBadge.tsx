// modules/main_tabs_v2/native/shared_components/BackIconWithBadge.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var0 = global;
    var7 = var0.Object;
    var4 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var7)(var2, var0, var3);
    var0 = 0;
    var4 = var6[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var7 = var3.bind(var0)(var4);
    var _closure1_slot3 = var7;
    var3 = 1;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var6[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var14 = var3.BADGE_SIZE;
    var _closure1_slot6 = var14;
    var13 = 4;
    var3 = var6[var13];
    var3 = var5.bind(var0)(var3);
    var4 = var3.jsx;
    var _closure1_slot7 = var4;
    var3 = var3.jsxs;
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var6[var3];
    var8 = var5.bind(var0)(var3);
    var4 = var8.createStyles;
    var3 = {};
    var9 = {
        'height': 40,
        'width': 40,
        'alignItems': 'center',
        'justifyContent': 'center',
        'borderRadius': null,
        'position': 'relative'
    };
    var12 = 40;
    var10 = 6;
    var15 = var6[var10];
    var15 = var11.bind(var0)(var15);
    var15 = var15.radii;
    var15 = var15.lg;
    var9.borderRadius = var15;
    var3.closeButton = var9;
    var9 = {};
    var15 = var6[var10];
    var15 = var11.bind(var0)(var15);
    var15 = var15.spacing;
    var15 = var15.PX_24;
    var9.height = var15;
    var15 = var6[var10];
    var15 = var11.bind(var0)(var15);
    var15 = var15.spacing;
    var15 = var15.PX_24;
    var9.width = var15;
    var3.backIcon = var9;
    var9 = {
        'position': 'absolute',
        'left': null,
        'bottom': 0
    };
    var12 = var12 - var14;
    var12 = var12 - var13;
    var9.left = var12;
    var3.badge = var9;
    var9 = {
        'display': 'flex',
        'flexDirection': 'row',
        'alignItems': 'center'
    };
    var10 = var6[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_4;
    var9.gap = var10;
    var3.backIconWithBadge = var9;
    var3 = var4.bind(var8)(var3);
    var _closure1_slot9 = var3;
    var4 = var7.memo;
    var3 = function(arg0) { // Environment: var1
        _fun103067: for (var _fun103067_ip = 0;;) switch (_fun103067_ip) {
            case 0:
                var1 = arg0;
                var5 = var1.includeNotificationsCount;
                var3 = undefined;
                if (!(var5 === var3)) {
                    _fun103067_ip = 19;
                    continue _fun103067
                }
            case 17:
                var5 = false;
            case 19:
                var _closure2_slot0 = var3;
                var _closure2_slot1 = var3;
                var _closure2_slot2 = var3;
                var _closure2_slot3 = var3;
                var1 = _closure1_slot9;
                var10 = var1.bind(var3)();
                var2 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 7;
                var1 = var6[var1];
                var7 = var2.bind(var3)(var1);
                var4 = var7.useStateFromStores;
                var1 = _closure1_slot5;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var0
                    var1 = _closure1_slot5;
                    var0 = var1.getTotalMentionCount;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var1 = var4.bind(var7)(var2, var1);
                var4 = _closure1_slot1;
                var2 = 8;
                var2 = var6[var2];
                var2 = var4.bind(var3)(var2);
                var2 = var2.bind(var3)();
                var4 = var2.value;
                var2 = null;
                var7 = var2 != var1;
                var6 = 0;
                var2 = 0;
                if (!var7) {
                    _fun103067_ip = 137;
                    continue _fun103067
                }
            case 134:
                var2 = var1;
            case 137:
                var1 = 0;
                if (!var5) {
                    _fun103067_ip = 145;
                    continue _fun103067
                }
            case 142:
                var1 = var4;
            case 145:
                var11 = var2 + var1;
                _closure2_slot0 = var11;
                var5 = var11 > var6;
                _closure2_slot1 = var5;
                var4 = _closure1_slot3;
                var7 = var4.useMemo;
                var2 = new Array(1);
                var2[0] = var11;
                var1 = function() { // Environment: var0
                    _fun103069: for (var _fun103069_ip = 0;;) switch (_fun103069_ip) {
                        case 0:
                            var1 = _closure2_slot0;
                            var0 = 10;
                            if (!(!(var1 < var0))) {
                                _fun103069_ip = 30;
                                continue _fun103069
                            }
                        case 14:
                            var1 = _closure1_slot6;
                            var0 = 8;
                            var0 = var1 + var0;
                            _fun103069_ip = 37;
                            continue _fun103069;
                        case 30:
                            var0 = _closure1_slot6;
                        case 37:
                            return var0;
                    }
                };
                var12 = var7.bind(var4)(var1, var2);
                _closure2_slot2 = var12;
                var7 = var4.useMemo;
                var2 = new Array(1);
                var2[0] = var12;
                var1 = function() { // Environment: var0
                    var0 = {};
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 9;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var2 = var2.CutoutShape;
                    var2 = var2.RoundedRect;
                    var0.shape = var2;
                    var2 = _closure1_slot6;
                    var3 = 40;
                    var5 = var3 - var2;
                    var1 = 2;
                    var6 = var2 / var1;
                    var4 = 4;
                    var5 = var5 - var4;
                    var5 = var5 - var6;
                    var5 = var5 - var1;
                    var0.x = var5;
                    var5 = var3 - var2;
                    var3 = var2 / var1;
                    var3 = var5 - var3;
                    var3 = var3 - var1;
                    var0.y = var3;
                    var3 = _closure2_slot2;
                    var3 = var3 + var4;
                    var0.width = var3;
                    var0.height = var2;
                    var1 = var2 / var1;
                    var0.cornerRadius = var1;
                    return var0;
                };
                var7 = var7.bind(var4)(var1, var2);
                _closure2_slot3 = var7;
                var2 = var4.useMemo;
                var1 = new Array(2);
                var1[0] = var7;
                var1[1] = var5;
                var0 = function() { // Environment: var0
                    _fun103071: for (var _fun103071_ip = 0;;) switch (_fun103071_ip) {
                        case 0:
                            var0 = _closure2_slot1;
                            if (var0) {
                                _fun103071_ip = 16;
                                continue _fun103071
                            }
                        case 10:
                            var0 = new Array(0);
                            _fun103071_ip = 31;
                            continue _fun103071;
                        case 16:
                            var2 = _closure2_slot3;
                            var1 = new Array(1);
                            var1[0] = var2;
                            var0 = var1;
                        case 31:
                            return var0;
                    }
                };
                var13 = var2.bind(var4)(var0, var1);
                var2 = _closure1_slot8;
                var1 = _closure1_slot4;
                var0 = {};
                var4 = var10.closeButton;
                var0.style = var4;
                var4 = var13.length;
                if (!(!(var4 > var6))) {
                    _fun103067_ip = 348;
                    continue _fun103067
                }
            case 284:
                var7 = _closure1_slot7;
                var6 = _closure1_slot0;
                var8 = _closure1_slot2;
                var4 = 10;
                var4 = var8[var4];
                var4 = var6.bind(var3)(var4);
                var6 = var4.ArrowLargeLeftIcon;
                var4 = {
                    'size': 'sm',
                    'style': null,
                    'color': 'interactive-text-active'
                };
                var8 = var10.backIcon;
                var4.style = var8;
                var6 = var7.bind(var3)(var6, var4);
                _fun103067_ip = 443;
                continue _fun103067;
            case 348:
                var8 = _closure1_slot7;
                var7 = _closure1_slot1;
                var15 = _closure1_slot2;
                var4 = 9;
                var4 = var15[var4];
                var7 = var7.bind(var3)(var4);
                var4 = {};
                var4.cutouts = var13;
                var14 = _closure1_slot0;
                var13 = 10;
                var13 = var15[var13];
                var13 = var14.bind(var3)(var13);
                var14 = var13.ArrowLargeLeftIcon;
                var13 = {
                    'size': 'sm',
                    'style': null,
                    'color': 'interactive-text-active'
                };
                var15 = var10.backIcon;
                var13.style = var15;
                var13 = var8.bind(var3)(var14, var13);
                var4.children = var13;
                var6 = var8.bind(var3)(var7, var4);
            case 443:
                var4 = new Array(2);
                var4[0] = var6;
                if (!var5) {
                    _fun103067_ip = 535;
                    continue _fun103067
                }
            case 454:
                var8 = _closure1_slot7;
                var7 = _closure1_slot4;
                var6 = {};
                var10 = var10.badge;
                var6.style = var10;
                var10 = _closure1_slot1;
                var13 = _closure1_slot2;
                var9 = 11;
                var9 = var13[var9];
                var10 = var10.bind(var3)(var9);
                var9 = {};
                var13 = 99;
                var9.maxValue = var13;
                var9.value = var11;
                var11 = {};
                var11.minWidth = var12;
                var9.style = var11;
                var9 = var8.bind(var3)(var10, var9);
                var6.children = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 535:
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var3 = var4.bind(var7)(var3);
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/shared_components/BackIconWithBadge.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var1 = function() {
        _fun103072: for (var _fun103072_ip = 0;;) switch (_fun103072_ip) {
            case 0:
                var0 = _closure1_slot9;
                var3 = undefined;
                var4 = var0.bind(var3)();
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 7;
                var0 = var2[var0];
                var5 = var1.bind(var3)(var0);
                var2 = var5.useStateFromStores;
                var0 = _closure1_slot5;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var0
                    var1 = _closure1_slot5;
                    var0 = var1.getTotalMentionCount;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var0 = var2.bind(var5)(var1, var0);
                var5 = null;
                var2 = var5 != var0;
                var7 = 0;
                var1 = 0;
                if (!var2) {
                    _fun103072_ip = 81;
                    continue _fun103072
                }
            case 78:
                var1 = var0;
            case 81:
                var2 = _closure1_slot1;
                var11 = _closure1_slot2;
                var0 = 8;
                var0 = var11[var0];
                var0 = var2.bind(var3)(var0);
                var0 = var0.bind(var3)();
                var0 = var0.value;
                var9 = var1 + var0;
                var2 = _closure1_slot8;
                var1 = _closure1_slot4;
                var0 = {};
                var4 = var4.backIconWithBadge;
                var0.style = var4;
                var10 = _closure1_slot7;
                var8 = _closure1_slot0;
                var4 = 10;
                var4 = var11[var4];
                var4 = var8.bind(var3)(var4);
                var8 = var4.ArrowLargeLeftIcon;
                var4 = {
                    'size': 'sm',
                    'color': 'white'
                };
                var8 = var10.bind(var3)(var8, var4);
                var4 = new Array(2);
                var4[0] = var8;
                var5 = null;
                if (!(var9 > var7)) {
                    _fun103072_ip = 230;
                    continue _fun103072
                }
            case 194:
                var8 = _closure1_slot7;
                var7 = _closure1_slot1;
                var10 = _closure1_slot2;
                var6 = 11;
                var6 = var10[var6];
                var7 = var7.bind(var3)(var6);
                var6 = {};
                var6.value = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 230:
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.BackIconWithBadgeOnSide = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 8641, 8646, 33, 1297, 671, 566, 13450, 5457, 4706, 8645, 2]);