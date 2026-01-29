// modules/app_launcher/native/options/channel/AppLauncherChannelListActionSheet.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var1 = function(arg0) { // Original name: ChannelIcon, environment: var3
        _fun105856: for (var _fun105856_ip = 0;;) switch (_fun105856_ip) {
            case 0:
                var0 = arg0;
                var11 = var0.channel;
                var9 = var0.size;
                var3 = undefined;
                if (!(var9 === var3)) {
                    _fun105856_ip = 23;
                    continue _fun105856
                }
            case 19:
                var9 = 'sm';
            case 23:
                var4 = var0.wrapperSize;
                if (!(var4 === var3)) {
                    _fun105856_ip = 36;
                    continue _fun105856
                }
            case 33:
                var4 = 32;
            case 36:
                var0 = _closure1_slot8;
                var5 = var0.bind(var3)();
                var1 = _closure1_slot0;
                var0 = _closure1_slot2;
                var7 = 6;
                var0 = var0[var7];
                var0 = var1.bind(var3)(var0);
                var8 = var0.TextIcon;
                var1 = null;
                if (!(var1 != var11)) {
                    _fun105856_ip = 165;
                    continue _fun105856
                }
            case 79:
                var10 = _closure1_slot5;
                var2 = var10.getGuild;
                var0 = var11.getGuildId;
                var0 = var0.bind(var11)();
                var10 = var2.bind(var10)(var0);
                var2 = _closure1_slot0;
                var12 = _closure1_slot2;
                var0 = 7;
                var0 = var12[var0];
                var2 = var2.bind(var3)(var0);
                var0 = var2.getChannelIconComponentWithGuild;
                var0 = var0.bind(var2)(var11, var10);
                if (!(var1 == var0)) {
                    _fun105856_ip = 162;
                    continue _fun105856
                }
            case 139:
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var7];
                var1 = var2.bind(var3)(var1);
                var0 = var1.TextIcon;
            case 162:
                var8 = var0;
            case 165:
                var2 = _closure1_slot6;
                var1 = _closure1_slot1;
                var7 = _closure1_slot2;
                var0 = 8;
                var0 = var7[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var7 = _closure1_slot6;
                var6 = {};
                var6.size = var9;
                var9 = 'interactive-text-default';
                var6.color = var9;
                var6 = var7.bind(var3)(var8, var6);
                var0.icon = var6;
                var5 = var5.channelIconWrapper;
                var0.wrapperStyle = var5;
                var0.wrapperSize = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot9 = var1;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var4);
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var11.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = arg3;
    var4 = var4.bind(var0)(var7);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var11.bind(var0)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var7 = var4.jsx;
    var _closure1_slot6 = var7;
    var4 = var4.jsxs;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var8 = var5.bind(var0)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = 5;
    var12 = var6[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.INTERACTIVE_TEXT_DEFAULT;
    var9.tintColor = var12;
    var4.channelIcon = var9;
    var9 = {};
    var10 = var6[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_MOD_SUBTLE;
    var9.backgroundColor = var10;
    var4.channelIconWrapper = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot8 = var4;
    var4 = 15;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/app_launcher/native/options/channel/AppLauncherChannelListActionSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function(arg0) { // Original name: AppLauncherChannelListActionSheet, environment: var3
        _fun105857: for (var _fun105857_ip = 0;;) switch (_fun105857_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.onChannelPress;
                var _closure2_slot0 = var0;
                var13 = var1.onActionSheetDismiss;
                var _closure2_slot1 = var13;
                var0 = var1.channel;
                var _closure2_slot2 = var0;
                var9 = var1.option;
                var _closure2_slot3 = var9;
                var4 = _closure1_slot4;
                var2 = var4.useState;
                var1 = '';
                var1 = var2.bind(var4)(var1);
                var11 = _closure1_slot3;
                var3 = undefined;
                var5 = 2;
                var1 = var11.bind(var3)(var1, var5);
                var7 = 0;
                var8 = var1[var7];
                var _closure2_slot4 = var8;
                var2 = 1;
                var1 = var1[var2];
                var _closure2_slot5 = var1;
                var12 = var4.useRef;
                var1 = null;
                var12 = var12.bind(var4)(var1);
                var _closure2_slot6 = var12;
                var14 = var4.useState;
                var1 = new Array(0);
                var1 = var14.bind(var4)(var1);
                var1 = var11.bind(var3)(var1, var5);
                var11 = var1[var7];
                var _closure2_slot7 = var11;
                var1 = var1[var2];
                var _closure2_slot8 = var1;
                var5 = var11.length;
                var2 = var4.useEffect;
                var1 = new Array(3);
                var1[0] = var8;
                var1[1] = var0;
                var1[2] = var9;
                var0 = function() { // Environment: var10
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 9;
                    var1 = var1[var0];
                    var0 = undefined;
                    var4 = var2.bind(var0)(var1);
                    var3 = var4.queryApplicationCommandChannelResults;
                    var1 = {};
                    var5 = _closure2_slot4;
                    var1.query = var5;
                    var5 = _closure2_slot2;
                    var1.channel = var5;
                    var5 = _closure2_slot3;
                    var5 = var5.channelTypes;
                    var1.channelTypes = var5;
                    var5 = null;
                    var1.limit = var5;
                    var5 = true;
                    var1.allowSnowflake = var5;
                    var1 = var3.bind(var4)(var1);
                    var2 = _closure2_slot8;
                    var1 = var1.channels;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var0 = var2.bind(var4)(var0, var1);
                var0 = function(arg0) { // Original name: handleChannelPress, environment: var10
                    var0 = arg0;
                    var0 = var0.channel;
                    var3 = _closure2_slot0;
                    var2 = {};
                    var2.channel = var0;
                    var0 = undefined;
                    var2 = var3.bind(var0)(var2);
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 10;
                    var2 = var4[var2];
                    var4 = var3.bind(var0)(var2);
                    var3 = var4.hideActionSheet;
                    var2 = 'AppLauncherChannelListActionSheet';
                    var2 = var3.bind(var4)(var2);
                    var1 = _closure2_slot1;
                    var1 = var1.bind(var0)();
                    return var0;
                };
                var _closure2_slot9 = var0;
                var2 = _closure1_slot7;
                var8 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 11;
                var0 = var4[var0];
                var0 = var8.bind(var3)(var0);
                var1 = var0.AppLauncherCommandOptionActionSheet;
                var0 = {};
                var0.onDismiss = var13;
                var0.option = var9;
                var13 = _closure1_slot6;
                var9 = 12;
                var4 = var4[var9];
                var4 = var8.bind(var3)(var4);
                var8 = var4.AppLauncherListSearchBar;
                var4 = {};
                var14 = function(arg0) { // Original name: onChange, environment: var10
                    _fun105860: for (var _fun105860_ip = 0;;) switch (_fun105860_ip) {
                        case 0:
                            var2 = arg0;
                            var3 = _closure2_slot5;
                            var0 = var2.toLowerCase;
                            var2 = var0.bind(var2)();
                            var0 = undefined;
                            var2 = var3.bind(var0)(var2);
                            var1 = _closure2_slot6;
                            var3 = var1.current;
                            var1 = null;
                            if (!(var1 != var3)) {
                                _fun105860_ip = 63;
                                continue _fun105860
                            }
                        case 42:
                            var2 = var3.scrollToOffset;
                            var1 = {
                                'offset': 0,
                                'animated': false
                            };
                            var1 = var2.bind(var3)(var1);
                        case 63:
                            return var0;
                    }
                };
                var4.onChange = var14;
                var8 = var13.bind(var3)(var8, var4);
                var4 = new Array(2);
                var4[0] = var8;
                if (!(var7 !== var5)) {
                    _fun105857_ip = 356;
                    continue _fun105857
                }
            case 299:
                var8 = _closure1_slot6;
                var7 = _closure1_slot0;
                var5 = _closure1_slot2;
                var5 = var5[var9];
                var5 = var7.bind(var3)(var5);
                var7 = var5.AppLauncherList;
                var5 = {};
                var5.ref = var12;
                var5.data = var11;
                var10 = function(arg0) { // Original name: renderItem, environment: var10
                    var1 = arg0;
                    var0 = var1.item;
                    var _closure3_slot0 = var0;
                    var6 = var1.index;
                    var4 = _closure1_slot6;
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var1 = 13;
                    var1 = var9[var1];
                    var3 = undefined;
                    var1 = var8.bind(var3)(var1);
                    var2 = var1.TableRow;
                    var1 = {};
                    var7 = function() { // Original name: onPress, environment: var7
                        var2 = _closure2_slot9;
                        var1 = {};
                        var0 = _closure3_slot0;
                        var1.channel = var0;
                        var0 = undefined;
                        var1 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var1.onPress = var7;
                    var10 = _closure1_slot6;
                    var7 = 14;
                    var7 = var9[var7];
                    var7 = var8.bind(var3)(var7);
                    var9 = var7.Text;
                    var8 = {
                        'lineClamp': 1,
                        'variant': 'text-md/semibold',
                        'color': 'mobile-text-heading-primary'
                    };
                    var7 = 1;
                    var11 = var0.name;
                    var8.children = var11;
                    var8 = var10.bind(var3)(var9, var8);
                    var1.label = var8;
                    var9 = _closure1_slot6;
                    var8 = _closure1_slot9;
                    var5 = {};
                    var5.channel = var0;
                    var5 = var9.bind(var3)(var8, var5);
                    var1.icon = var5;
                    var5 = 0;
                    var5 = var5 === var6;
                    var1.start = var5;
                    var5 = _closure2_slot7;
                    var5 = var5.length;
                    var5 = var5 - var7;
                    var5 = var6 === var5;
                    var1.end = var5;
                    var0 = var0.id;
                    var0 = var4.bind(var3)(var2, var1, var0);
                    return var0;
                };
                var5.renderItem = var10;
                var5 = var8.bind(var3)(var7, var5);
                _fun105857_ip = 391;
                continue _fun105857;
            case 356:
                var8 = _closure1_slot6;
                var7 = _closure1_slot0;
                var6 = _closure1_slot2;
                var6 = var6[var9];
                var6 = var7.bind(var3)(var6);
                var7 = var6.AppLauncherListEmptyState;
                var6 = {};
                var5 = var8.bind(var3)(var7, var6);
            case 391:
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var3;
    var3 = 'AppLauncherChannelListActionSheet';
    var2.APP_LAUNCHER_CHANNEL_LIST_ACTION_SHEET_KEY = var3;
    var2.ChannelIcon = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 1410, 33, 1297, 671, 4802, 4763, 13746, 5549, 3237, 13747, 13748, 4854, 3895, 2]);