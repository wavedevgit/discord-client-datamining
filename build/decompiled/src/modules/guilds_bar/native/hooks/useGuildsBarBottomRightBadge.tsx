// modules/guilds_bar/native/hooks/useGuildsBarBottomRightBadge.tsx
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
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var8 = var3.StyleSheet;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.BADGE_MASK_SIZE;
    var _closure1_slot5 = var6;
    var6 = var3.BADGE_MASK_UNREAD_SIZE;
    var _closure1_slot6 = var6;
    var3 = var3.BADGE_PADDING;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot8 = var3;
    var7 = var8.create;
    var6 = {};
    var3 = 9;
    var9 = {
        'position': 'absolute',
        'bottom': 1,
        'right': 9,
        'backgroundColor': 'transparent',
        'borderColor': 'transparent'
    };
    var6.bottomRightBadge = var9;
    var6 = var7.bind(var8)(var6);
    var _closure1_slot9 = var6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guilds_bar/native/hooks/useGuildsBarBottomRightBadge.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: useGuildsBarBottomRightBadge, environment: var1
        _fun101285: for (var _fun101285_ip = 0;;) switch (_fun101285_ip) {
            case 0:
                var1 = arg0;
                var5 = var1.mentionCount;
                var _closure2_slot0 = var5;
                var4 = var1.isMentionLowImportance;
                var _closure2_slot1 = var4;
                var6 = var1.joinRequestState;
                var _closure2_slot2 = var6;
                var7 = var1.shouldShowInvitesDisabled;
                var9 = undefined;
                if (!(var7 === var9)) {
                    _fun101285_ip = 49;
                    continue _fun101285
                }
            case 47:
                var7 = false;
            case 49:
                var _closure2_slot3 = var7;
                var _closure2_slot4 = var9;
                var _closure2_slot5 = var9;
                var3 = _closure1_slot4;
                var8 = var3.useState;
                var2 = function() { // Environment: var0
                    _fun101286: for (var _fun101286_ip = 0;;) switch (_fun101286_ip) {
                        case 0:
                            var1 = _closure2_slot0;
                            var0 = 0;
                            if (!(!(var1 > var0))) {
                                _fun101286_ip = 22;
                                continue _fun101286
                            }
                        case 13:
                            var0 = _closure1_slot6;
                            _fun101286_ip = 29;
                            continue _fun101286;
                        case 22:
                            var0 = _closure1_slot5;
                        case 29:
                            return var0;
                    }
                };
                var8 = var8.bind(var3)(var2);
                var2 = _closure1_slot3;
                var1 = 2;
                var2 = var2.bind(var9)(var8, var1);
                var1 = 0;
                var8 = var2[var1];
                _closure2_slot4 = var8;
                var1 = 1;
                var1 = var2[var1];
                _closure2_slot5 = var1;
                var2 = var3.useMemo;
                var1 = new Array(5);
                var1[0] = var8;
                var1[1] = var7;
                var1[2] = var6;
                var1[3] = var5;
                var1[4] = var4;
                var0 = function() { // Environment: var0
                    _fun101287: for (var _fun101287_ip = 0;;) switch (_fun101287_ip) {
                        case 0:
                            var1 = _closure2_slot0;
                            var0 = 0;
                            if (!(!(var1 > var0))) {
                                _fun101287_ip = 280;
                                continue _fun101287
                            }
                        case 16:
                            var0 = _closure2_slot2;
                            var1 = null;
                            if (!(var1 == var0)) {
                                _fun101287_ip = 164;
                                continue _fun101287
                            }
                        case 29:
                            var0 = _closure2_slot3;
                            if (var0) {
                                _fun101287_ip = 57;
                                continue _fun101287
                            }
                        case 36:
                            var0 = {};
                            var0.badge = var1;
                            var1 = undefined;
                            var0.cutout = var1;
                            var0.cutouts = var1;
                            return var0;
                        case 57:
                            var3 = _closure1_slot1;
                            var8 = _closure1_slot2;
                            var0 = 5;
                            var0 = var8[var0];
                            var5 = undefined;
                            var1 = var3.bind(var5)(var0);
                            var0 = {};
                            var2 = 'bottom-right';
                            var0.position = var2;
                            var2 = var1.bind(var5)(var0);
                            var0 = {};
                            var4 = _closure1_slot8;
                            var1 = 8;
                            var1 = var8[var1];
                            var3 = var3.bind(var5)(var1);
                            var1 = {};
                            var7 = _closure1_slot9;
                            var7 = var7.bottomRightBadge;
                            var1.style = var7;
                            var1 = var4.bind(var5)(var3, var1);
                            var0.badge = var1;
                            var0.cutout = var2;
                            var1 = new Array(1);
                            var1[0] = var2;
                            var0.cutouts = var1;
                            return var0;
                        case 164:
                            var3 = _closure1_slot1;
                            var8 = _closure1_slot2;
                            var0 = 5;
                            var0 = var8[var0];
                            var5 = undefined;
                            var1 = var3.bind(var5)(var0);
                            var0 = {};
                            var2 = 'bottom-right';
                            var0.position = var2;
                            var2 = var1.bind(var5)(var0);
                            var0 = {};
                            var4 = _closure1_slot8;
                            var1 = 7;
                            var1 = var8[var1];
                            var3 = var3.bind(var5)(var1);
                            var1 = {};
                            var7 = _closure1_slot9;
                            var7 = var7.bottomRightBadge;
                            var1.style = var7;
                            var7 = _closure2_slot2;
                            var1.joinRequestState = var7;
                            var1 = var4.bind(var5)(var3, var1);
                            var0.badge = var1;
                            var0.cutout = var2;
                            var1 = new Array(1);
                            var1[0] = var2;
                            var0.cutouts = var1;
                            return var0;
                        case 280:
                            var1 = _closure1_slot1;
                            var8 = _closure1_slot2;
                            var0 = 5;
                            var0 = var8[var0];
                            var5 = undefined;
                            var1 = var1.bind(var5)(var0);
                            var0 = {};
                            var2 = 'bottom-right';
                            var0.position = var2;
                            var3 = _closure2_slot4;
                            var4 = _closure1_slot7;
                            var2 = 2;
                            var2 = var2 * var4;
                            var2 = var3 - var2;
                            var0.width = var2;
                            var2 = var1.bind(var5)(var0);
                            var0 = {};
                            var4 = _closure1_slot8;
                            var3 = _closure1_slot0;
                            var1 = 6;
                            var1 = var8[var1];
                            var1 = var3.bind(var5)(var1);
                            var3 = var1.MaskedBadge;
                            var1 = {};
                            var7 = _closure1_slot9;
                            var7 = var7.bottomRightBadge;
                            var1.maskStyle = var7;
                            var7 = _closure2_slot0;
                            var1.value = var7;
                            var6 = _closure2_slot1;
                            var1.isMentionLowImportance = var6;
                            var6 = true;
                            var1.accessibilityElementsHidden = var6;
                            var6 = 'no-hide-descendants';
                            var1.importantForAccessibility = var6;
                            var6 = function(arg0) { // Original name: onLayout, environment: var6
                                _fun101288: for (var _fun101288_ip = 0;;) switch (_fun101288_ip) {
                                    case 0:
                                        var0 = arg0;
                                        var0 = var0.nativeEvent;
                                        var0 = var0.layout;
                                        var3 = _closure2_slot4;
                                        var2 = var0.width;
                                        if (!(var3 !== var2)) {
                                            _fun101288_ip = 47;
                                            continue _fun101288
                                        }
                                    case 31:
                                        var2 = _closure2_slot5;
                                        var1 = var0.width;
                                        var0 = undefined;
                                        var0 = var2.bind(var0)(var1);
                                    case 47:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var1.onLayout = var6;
                            var1 = var4.bind(var5)(var3, var1);
                            var0.badge = var1;
                            var0.cutout = var2;
                            var1 = new Array(1);
                            var1[0] = var2;
                            var0.cutouts = var1;
                            return var0;
                    }
                };
                var0 = var2.bind(var3)(var0, var1);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 8587, 33, 13139, 8586, 13140, 13144, 2]);