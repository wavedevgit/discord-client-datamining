// modules/main_tabs_v2/native/shared_components/guild_channels/ChannelTitle.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
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
    var6 = var3.bind(var0)(var6);
    var _closure1_slot2 = var6;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.UnreadSetting;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyleProperties;
    var3 = {};
    var9 = 4;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.TEXT_MUTED;
    var3.muted = var11;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.REDESIGN_CHANNEL_NAME_MUTED_TEXT;
    var3.normal = var11;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.REDESIGN_CHANNEL_NAME_TEXT;
    var3.unreadOrConnected = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot5 = var3;
    var3 = var6.memo;
    var1 = function arg0() {
        _fun105540: for (var _fun105540_ip = 0;;) switch (_fun105540_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.title;
                var11 = var0.muted;
                var _closure2_slot0 = var11;
                var14 = var0.unread;
                var _closure2_slot1 = var14;
                var10 = var0.resolvedUnreadSetting;
                var _closure2_slot2 = var10;
                var12 = var0.connected;
                var _closure2_slot3 = var12;
                var8 = var0.layout;
                var1 = _closure1_slot0;
                var7 = _closure1_slot1;
                var3 = 5;
                var4 = var7[var3];
                var3 = undefined;
                var6 = var1.bind(var3)(var4);
                var4 = var6.getLayoutStyles;
                var6 = var4.bind(var6)(var8);
                var4 = _closure1_slot5;
                var13 = var4.bind(var3)();
                var _closure2_slot4 = var13;
                var9 = _closure1_slot2;
                var8 = var9.useMemo;
                var4 = new Array(5);
                var4[0] = var14;
                var4[1] = var13;
                var4[2] = var12;
                var4[3] = var11;
                var4[4] = var10;
                var2 = function() { // Environment: var2
                    _fun105541: for (var _fun105541_ip = 0;;) switch (_fun105541_ip) {
                        case 0:
                            var1 = _closure2_slot4;
                            var1 = var1.normal;
                            var2 = _closure2_slot0;
                            if (var2) {
                                _fun105541_ip = 70;
                                continue _fun105541
                            }
                        case 20:
                            var2 = _closure2_slot1;
                            if (!var2) {
                                _fun105541_ip = 48;
                                continue _fun105541
                            }
                        case 27:
                            var4 = _closure2_slot2;
                            var3 = _closure1_slot3;
                            var3 = var3.ALL_MESSAGES;
                            var2 = var4 === var3;
                        case 48:
                            if (var2) {
                                _fun105541_ip = 55;
                                continue _fun105541
                            }
                        case 51:
                            var2 = _closure2_slot3;
                        case 55:
                            if (!var2) {
                                _fun105541_ip = 80;
                                continue _fun105541
                            }
                        case 58:
                            var2 = _closure2_slot4;
                            var1 = var2.unreadOrConnected;
                            _fun105541_ip = 80;
                            continue _fun105541;
                        case 70:
                            var0 = _closure2_slot4;
                            var1 = var0.muted;
                        case 80:
                            var0 = {
                                'color': null,
                                'paddingRight': 4,
                                'flexShrink': 1
                            };
                            var0.color = var1;
                            return var0;
                    }
                };
                var4 = var8.bind(var9)(var2, var4);
                var2 = _closure1_slot4;
                var0 = 6;
                var0 = var7[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.Text;
                var0 = {
                    'variant': null,
                    'lineClamp': 1,
                    'maxFontSizeMultiplier': 1.75
                };
                var6 = var6.channelName;
                var6 = var6.text;
                var6 = var6.variant;
                var0.variant = var6;
                var0.style = var4;
                var4 = null;
                var6 = var4 != var5;
                var4 = '';
                if (!var6) {
                    _fun105540_ip = 227;
                    continue _fun105540
                }
            case 224:
                var4 = var5;
            case 227:
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/main_tabs_v2/native/shared_components/guild_channels/ChannelTitle.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 4304, 33, 1297, 671, 8822, 3941, 2]);