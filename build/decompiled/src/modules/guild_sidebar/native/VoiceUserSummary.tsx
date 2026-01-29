// modules/guild_sidebar/native/VoiceUserSummary.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var4);
    var0 = 0;
    var7 = var6[var0];
    var4 = metroImportAll;
    var0 = undefined;
    var7 = var4.bind(var0)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.View;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var8 = var4.jsx;
    var _closure1_slot4 = var8;
    var4 = var4.jsxs;
    var _closure1_slot5 = var4;
    var8 = var1.Object;
    var4 = var8.freeze;
    var1 = {};
    var9 = 3;
    var9 = var6[var9];
    var9 = var5.bind(var0)(var9);
    var9 = var9.CutoutDirection;
    var9 = var9.RIGHT;
    var1.direction = var9;
    var9 = -2;
    var1.inset = var9;
    var1 = var4.bind(var8)(var1);
    var _closure1_slot6 = var1;
    var11 = 4;
    var1 = var6[var11];
    var9 = var5.bind(var0)(var1);
    var8 = var9.createStyles;
    var4 = {};
    var1 = 40;
    var10 = {
        'flexDirection': 'row',
        'alignItems': 'center',
        'paddingHorizontal': 16,
        'height': 40
    };
    var4.container = var10;
    var10 = {
        'flexDirection': 'row',
        'alignItems': 'center',
        'height': 40
    };
    var4.containerNoPadding = var10;
    var10 = {};
    var10.height = var1;
    var4.iconContainer = var10;
    var10 = {
        'width': 20,
        'height': 20,
        'marginRight': 8
    };
    var12 = 5;
    var12 = var6[var12];
    var12 = var5.bind(var0)(var12);
    var12 = var12.DARK_PRIMARY_360_LIGHT_PRIMARY_400;
    var10.tintColor = var12;
    var4.channelIcon = var10;
    var10 = {};
    var10.marginRight = var11;
    var4.redesignChannelIcon = var10;
    var10 = {
        'height': 20,
        'paddingHorizontal': 4,
        'paddingVertical': 0,
        'display': 'flex',
        'flexDirection': 'row',
        'alignItems': 'center'
    };
    var4.overflow = var10;
    var10 = {};
    var11 = 'transparent';
    var10.borderColor = var11;
    var4.transparentBorder = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot7 = var4;
    var4 = var7.memo;
    var3 = function(arg0) { // Environment: var3
        _fun102480: for (var _fun102480_ip = 0;;) switch (_fun102480_ip) {
            case 0:
                var0 = arg0;
                var10 = var0.users;
                var9 = var0.max;
                var1 = var0.guildId;
                var _closure2_slot0 = var1;
                var5 = var0.renderIcon;
                var6 = var0.noPadding;
                var4 = var0.stageIcon;
                var0 = _closure1_slot7;
                var3 = undefined;
                var14 = var0.bind(var3)();
                var1 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 6;
                var0 = var2[var0];
                var0 = var1.bind(var3)(var0);
                var0 = var0.bind(var3)();
                var15 = null;
                if (!var0) {
                    _fun102480_ip = 91;
                    continue _fun102480
                }
            case 85:
                var15 = var14.transparentBorder;
            case 91:
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 7;
                var0 = var2[var0];
                var1 = var1.bind(var3)(var0);
                var0 = var1.useClientThemesOverride;
                var7 = var0.bind(var1)();
                var2 = _closure1_slot5;
                var1 = _closure1_slot3;
                var0 = {};
                if (var6) {
                    _fun102480_ip = 141;
                    continue _fun102480
                }
            case 134:
                var11 = var14.container;
                _fun102480_ip = 147;
                continue _fun102480;
            case 141:
                var11 = var14.containerNoPadding;
            case 147:
                var6 = new Array(2);
                var6[0] = var11;
                var6[1] = var7;
                var0.style = var6;
                var6 = _closure1_slot4;
                if (!var5) {
                    _fun102480_ip = 173;
                    continue _fun102480
                }
            case 170:
                if (var4) {
                    _fun102480_ip = 201;
                    continue _fun102480
                }
            case 173:
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var4 = 9;
                var4 = var7[var4];
                var4 = var5.bind(var3)(var4);
                var5 = var4.VoiceNormalIcon;
                _fun102480_ip = 227;
                continue _fun102480;
            case 201:
                var7 = _closure1_slot0;
                var11 = _closure1_slot2;
                var4 = 8;
                var4 = var11[var4];
                var4 = var7.bind(var3)(var4);
                var5 = var4.StageIcon;
            case 227:
                var4 = {
                    'size': 'sm',
                    'color': 'channel-icon'
                };
                var7 = var14.redesignChannelIcon;
                var4.style = var7;
                var5 = var6.bind(var3)(var5, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var7 = _closure1_slot4;
                var6 = _closure1_slot1;
                var13 = _closure1_slot2;
                var11 = 10;
                var5 = var13[var11];
                var6 = var6.bind(var3)(var5);
                var5 = {};
                var16 = -6;
                var5.offsetAmount = var16;
                var16 = var14.iconContainer;
                var5.style = var16;
                var16 = var14.overflow;
                var14 = new Array(2);
                var14[0] = var16;
                var14[1] = var15;
                var5.overflowStyle = var14;
                var12 = _closure1_slot0;
                var11 = var13[var11];
                var11 = var12.bind(var3)(var11);
                var11 = var11.OverflowTextSmall;
                var5.overflowComponent = var11;
                var5.items = var10;
                var5.max = var9;
                var8 = function(arg0, arg1) { // Original name: renderItem, environment: var8
                    _fun102481: for (var _fun102481_ip = 0;;) switch (_fun102481_ip) {
                        case 0:
                            var3 = _closure1_slot4;
                            var1 = _closure1_slot1;
                            var7 = _closure1_slot2;
                            var4 = 3;
                            var0 = var7[var4];
                            var2 = undefined;
                            var1 = var1.bind(var2)(var0);
                            var0 = {};
                            var6 = arg0;
                            var0.user = var6;
                            var6 = _closure2_slot0;
                            var0.guildId = var6;
                            var6 = _closure1_slot0;
                            var4 = var7[var4];
                            var4 = var6.bind(var2)(var4);
                            var4 = var4.AvatarSizes;
                            var4 = var4.XSMALL_20;
                            var0.size = var4;
                            var6 = arg1;
                            var4 = undefined;
                            if (var6) {
                                _fun102481_ip = 90;
                                continue _fun102481
                            }
                        case 86:
                            var4 = _closure1_slot6;
                        case 90:
                            var0.cutout = var4;
                            var0 = var3.bind(var2)(var1, var0);
                            return var0;
                    }
                };
                var5.renderItem = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var3 = var4.bind(var7)(var3);
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_sidebar/native/VoiceUserSummary.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.VOICE_USER_SUMMARY_HEIGHT = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 5411, 1297, 4828, 8668, 8853, 4816, 4819, 8029, 2]);