// modules/guilds_bar/native/GuildsBarPendingGuildFolder.tsx
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
    var3 = var7.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.EMPTY_STRING_SNOWFLAKE_ID;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot6 = var3;
    var3 = var6.memo;
    var1 = function arg0() {
        _fun100987: for (var _fun100987_ip = 0;;) switch (_fun100987_ip) {
            case 0:
                var0 = arg0;
                var10 = var0.id;
                var _closure2_slot0 = var10;
                var6 = var0.expanded;
                var9 = var0.childNodes;
                var14 = _closure1_slot0;
                var15 = _closure1_slot2;
                var0 = 4;
                var1 = var15[var0];
                var3 = undefined;
                var5 = var14.bind(var3)(var1);
                var1 = var5.useGuildsBarAnimatedWrapperStyles;
                var7 = true;
                var12 = false;
                var11 = var1.bind(var5)(var7, var12);
                var1 = _closure1_slot1;
                var5 = 5;
                var5 = var15[var5];
                var5 = var1.bind(var3)(var5);
                var5 = var5.bind(var3)();
                var _closure2_slot1 = var5;
                var5 = 6;
                var5 = var15[var5];
                var16 = var14.bind(var3)(var5);
                var13 = var16.useStateFromStores;
                var5 = _closure1_slot4;
                var8 = new Array(1);
                var8[0] = var5;
                var5 = function() { // Environment: var2
                    _fun100988: for (var _fun100988_ip = 0;;) switch (_fun100988_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            var1 = var2.includes;
                            var4 = _closure1_slot4;
                            var0 = var4.getGuildId;
                            var0 = var0.bind(var4)();
                            var4 = null;
                            if (!(var4 == var0)) {
                                _fun100988_ip = 39;
                                continue _fun100988
                            }
                        case 35:
                            var0 = _closure1_slot5;
                        case 39:
                            var0 = var1.bind(var2)(var0);
                            return var0;
                    }
                };
                var13 = var13.bind(var16)(var8, var5);
                var21 = _closure1_slot3;
                var16 = var21.useMemo;
                var8 = new Array(1);
                var8[0] = var10;
                var5 = function() { // Environment: var2
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 7;
                    var2 = var2[var0];
                    var0 = undefined;
                    var3 = var3.bind(var0)(var2);
                    var2 = var3.getGuildFolderMenuItems;
                    var0 = _closure2_slot0;
                    var4 = var2.bind(var3)(var0);
                    var _closure3_slot0 = var4;
                    var0 = {};
                    var3 = var4.map;
                    var2 = function(arg0) { // Environment: var1
                        var1 = arg0;
                        var0 = {};
                        var2 = var1.label;
                        var0.name = var2;
                        var1 = var1.label;
                        var0.label = var1;
                        return var0;
                    };
                    var2 = var3.bind(var4)(var2);
                    var0.accessibilityActions = var2;
                    var1 = function arg0() {
                        _fun100991: for (var _fun100991_ip = 0;;) switch (_fun100991_ip) {
                            case 0:
                                var1 = arg0;
                                var _closure4_slot0 = var1;
                                var2 = _closure3_slot0;
                                var1 = var2.find;
                                var0 = function(arg0) { // Environment: var0
                                    var0 = arg0;
                                    var1 = var0.label;
                                    var0 = _closure4_slot0;
                                    var0 = var0.nativeEvent;
                                    var0 = var0.actionName;
                                    var0 = var1 === var0;
                                    return var0;
                                };
                                var1 = var1.bind(var2)(var0);
                                var3 = null;
                                var0 = var3 == var1;
                                if (var0) {
                                    _fun100991_ip = 51;
                                    continue _fun100991
                                }
                            case 42:
                                var2 = var1.action;
                                var0 = var3 == var2;
                            case 51:
                                if (var0) {
                                    _fun100991_ip = 63;
                                    continue _fun100991
                                }
                            case 54:
                                var0 = var1.action;
                                var0 = var0.bind(var1)();
                            case 63:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.onAccessibilityAction = var1;
                    return var0;
                };
                var5 = var16.bind(var21)(var5, var8);
                var17 = var5.accessibilityActions;
                var16 = var5.onAccessibilityAction;
                var5 = 8;
                var5 = var15[var5];
                var20 = var14.bind(var3)(var5);
                var8 = var20.useSharedValue;
                var18 = global;
                var5 = var18.HermesInternal;
                var5 = var5.concat;
                var19 = '';
                var5 = var5.bind(var19)(var10);
                var8 = var8.bind(var20)(var5);
                var20 = var21.useMemo;
                var5 = new Array(1);
                var5[0] = var10;
                var2 = function() { // Environment: var2
                    var0 = {};
                    var1 = function() {
                        var6 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var2 = 9;
                        var4 = var3[var2];
                        var0 = undefined;
                        var5 = var6.bind(var0)(var4);
                        var4 = var5.triggerHapticFeedback;
                        var2 = var3[var2];
                        var2 = var6.bind(var0)(var2);
                        var2 = var2.HapticFeedbackTypes;
                        var2 = var2.IMPACT_LIGHT;
                        var2 = var4.bind(var5)(var2);
                        var2 = _closure1_slot1;
                        var1 = 10;
                        var1 = var3[var1];
                        var3 = var2.bind(var0)(var1);
                        var2 = var3.toggleGuildFolderExpand;
                        var1 = _closure2_slot0;
                        var1 = var2.bind(var3)(var1);
                        return var0;
                    };
                    var0.onPress = var1;
                    return var0;
                };
                var5 = var20.bind(var21)(var2, var5);
                var2 = _closure1_slot6;
                var0 = var15[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var18 = var18.HermesInternal;
                var18 = var18.concat;
                var18 = var18.bind(var19)(var10);
                var0.id = var18;
                var0.accessibilityActions = var17;
                var0.onAccessibilityAction = var16;
                var0.selected = var13;
                var0.unread = var12;
                var0.circle = var12;
                var0.styles = var11;
                var11 = 11;
                var12 = var15[var11];
                var12 = var14.bind(var3)(var12);
                var13 = var12.intl;
                var12 = var13.string;
                var11 = var15[var11];
                var11 = var14.bind(var3)(var11);
                var11 = var11.t;
                var11 = var11["scsU+l"];
                var11 = var12.bind(var13)(var11);
                var0.label = var11;
                var0.sharedId = var8;
                var0.cutouts = var3;
                var0.overState = var3;
                var0.preventClipping = var7;
                var0.config = var5;
                var5 = null;
                if (!var6) {
                    _fun100987_ip = 444;
                    continue _fun100987
                }
            case 391:
                var8 = _closure1_slot6;
                var7 = _closure1_slot0;
                var11 = _closure1_slot2;
                var6 = 12;
                var6 = var11[var6];
                var6 = var7.bind(var3)(var6);
                var7 = var6.GuildsBarGuildFolderBG;
                var6 = {};
                var6.folderId = var10;
                var9 = var9.length;
                var6.totalItems = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 444:
                var0.externalChildren = var5;
                var6 = _closure1_slot6;
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var4 = 13;
                var4 = var7[var4];
                var4 = var5.bind(var3)(var4);
                var5 = var4.HourglassIcon;
                var4 = {};
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 14;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guilds_bar/native/GuildsBarPendingGuildFolder.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 3213, 660, 33, 13145, 7419, 566, 13137, 3720, 3279, 4679, 1234, 13144, 7849, 2]);