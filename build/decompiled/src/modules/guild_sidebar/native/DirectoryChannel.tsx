// modules/guild_sidebar/native/DirectoryChannel.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
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
    var6 = var3.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var3 = 1;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var10 = var3.CHANNEL_MARGIN_VERTICAL;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.UnreadSetting;
    var _closure1_slot6 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot7 = var3;
    var3 = 6;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {};
    var9.marginVertical = var10;
    var10 = 8;
    var9.marginHorizontal = var10;
    var10 = 7;
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.radii;
    var10 = var10.md;
    var9.borderRadius = var10;
    var3.container = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot8 = var3;
    var3 = var6.memo;
    var1 = function(arg0) { // Environment: var1
        _fun102190: for (var _fun102190_ip = 0;;) switch (_fun102190_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.guildId;
                var _closure2_slot0 = var2;
                var3 = var0.selectedChannelId;
                var6 = var0.selected;
                var4 = undefined;
                var _closure2_slot1 = var4;
                var0 = _closure1_slot8;
                var8 = var0.bind(var4)();
                var7 = _closure1_slot0;
                var9 = _closure1_slot2;
                var0 = 8;
                var0 = var9[var0];
                var10 = var7.bind(var4)(var0);
                var9 = var10.useStateFromStores;
                var0 = _closure1_slot4;
                var7 = new Array(2);
                var7[0] = var0;
                var0 = _closure1_slot5;
                var7[1] = var0;
                var0 = function() { // Environment: var1
                    _fun102191: for (var _fun102191_ip = 0;;) switch (_fun102191_ip) {
                        case 0:
                            var3 = _closure1_slot5;
                            var1 = var3.getDirectoryChannelIds;
                            var0 = _closure2_slot0;
                            var4 = var1.bind(var3)(var0);
                            var3 = var4.length;
                            var1 = 0;
                            var0 = null;
                            if (!(var1 !== var3)) {
                                _fun102191_ip = 56;
                                continue _fun102191
                            }
                        case 38:
                            var3 = _closure1_slot4;
                            var2 = var3.getChannel;
                            var1 = var4[var1];
                            var0 = var2.bind(var3)(var1);
                        case 56:
                            return var0;
                    }
                };
                var7 = var9.bind(var10)(var7, var0);
                var0 = null;
                var9 = var0 == var7;
                var10 = undefined;
                if (var9) {
                    _fun102190_ip = 117;
                    continue _fun102190
                }
            case 112:
                var10 = var7.id;
            case 117:
                _closure2_slot1 = var10;
                if (var6) {
                    _fun102190_ip = 128;
                    continue _fun102190
                }
            case 124:
                var6 = var10 === var3;
            case 128:
                var9 = _closure1_slot3;
                var11 = var9.useCallback;
                var3 = new Array(2);
                var3[0] = var2;
                var3[1] = var10;
                var2 = function() { // Environment: var1
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 9;
                    var1 = var1[var0];
                    var0 = undefined;
                    var4 = var2.bind(var0)(var1);
                    var3 = var4.transitionToGuild;
                    var2 = _closure2_slot0;
                    var1 = _closure2_slot1;
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
                };
                var12 = var11.bind(var9)(var2, var3);
                var3 = var9.useCallback;
                var2 = new Array(1);
                var2[0] = var10;
                var1 = function() { // Environment: var1
                    _fun102193: for (var _fun102193_ip = 0;;) switch (_fun102193_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun102193_ip = 53;
                                continue _fun102193
                            }
                        case 13:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 10;
                            var2 = var2[var1];
                            var1 = undefined;
                            var2 = var3.bind(var1)(var2);
                            var1 = var2.openChannelLongPressActionSheet;
                            var0 = _closure2_slot1;
                            var0 = var1.bind(var2)(var0);
                        case 53:
                            var0 = undefined;
                            return var0;
                    }
                };
                var11 = var3.bind(var9)(var1, var2);
                var1 = var0 == var7;
                var0 = null;
                if (var1) {
                    _fun102190_ip = 327;
                    continue _fun102190
                }
            case 200:
                var3 = _closure1_slot7;
                var9 = _closure1_slot1;
                var10 = _closure1_slot2;
                var1 = 11;
                var1 = var10[var1];
                var2 = var9.bind(var4)(var1);
                var1 = {};
                var1.onPress = var12;
                var1.onLongPress = var11;
                var8 = var8.container;
                var1.style = var8;
                var8 = true;
                var1.accessible = var8;
                var8 = 'button';
                var1.accessibilityRole = var8;
                var8 = 12;
                var8 = var10[var8];
                var9 = var9.bind(var4)(var8);
                var8 = {};
                var8.channel = var7;
                var8 = var9.bind(var4)(var8);
                var1.accessibilityLabel = var8;
                var8 = {};
                var8.selected = var6;
                var1.accessibilityState = var8;
                var1.channel = var7;
                var1.selected = var6;
                var5 = _closure1_slot6;
                var5 = var5.ONLY_MENTIONS;
                var1.resolvedUnreadSetting = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 327:
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 13;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_sidebar/native/DirectoryChannel.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1372, 1671, 8827, 4305, 33, 1297, 671, 632, 1220, 9137, 13314, 7902, 2]);