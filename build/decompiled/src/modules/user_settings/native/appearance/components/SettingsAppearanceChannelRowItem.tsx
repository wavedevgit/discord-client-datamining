// modules/user_settings/native/appearance/components/SettingsAppearanceChannelRowItem.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun85515: for (var _fun85515_ip = 0;;) switch (_fun85515_ip) {
        case 0:
            var4 = require;
            var13 = metroImportDefault;
            var2 = exports;
            var5 = dependencyMap;
            var _closure1_slot0 = var4;
            var _closure1_slot1 = var13;
            var _closure1_slot2 = var5;
            var0 = global;
            var7 = var0.Object;
            var6 = var7.defineProperty;
            var3 = {};
            var0 = true;
            var3.value = var0;
            var0 = '__esModule';
            var0 = var6.bind(var7)(var2, var0, var3);
            var9 = 0;
            var6 = var5[var9];
            var3 = metroImportAll;
            var0 = undefined;
            var3 = var3.bind(var0)(var6);
            var3 = 1;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var3 = var3.View;
            var _closure1_slot3 = var3;
            var7 = 2;
            var3 = var5[var7];
            var3 = var4.bind(var0)(var3);
            var3 = var3.StatusTypes;
            var _closure1_slot4 = var3;
            var3 = 3;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var6 = var3.jsx;
            var _closure1_slot5 = var6;
            var3 = var3.jsxs;
            var _closure1_slot6 = var3;
            var8 = 4;
            var3 = var5[var8];
            var10 = var4.bind(var0)(var3);
            var6 = var10.createStyles;
            var3 = {};
            var11 = {};
            var12 = 'row';
            var11.flexDirection = var12;
            var12 = 5;
            var14 = var5[var12];
            var14 = var13.bind(var0)(var14);
            var14 = var14.spacing;
            var14 = var14.PX_4;
            var11.gap = var14;
            var14 = var5[var12];
            var14 = var13.bind(var0)(var14);
            var14 = var14.radii;
            var14 = var14.sm;
            var11.borderRadius = var14;
            var14 = var5[var12];
            var14 = var13.bind(var0)(var14);
            var14 = var14.spacing;
            var14 = var14.PX_8;
            var11.paddingVertical = var14;
            var14 = var5[var12];
            var14 = var13.bind(var0)(var14);
            var14 = var14.spacing;
            var14 = var14.PX_16;
            var11.paddingRight = var14;
            var14 = var5[var12];
            var14 = var13.bind(var0)(var14);
            var14 = var14.spacing;
            var14 = var14.PX_8;
            var11.paddingLeft = var14;
            var3.channelItemContainer = var11;
            var11 = {
                'alignItems': 'center',
                'justifyContent': 'center'
            };
            var3.channelItemLeft = var11;
            var11 = {
                'backgroundColor': null,
                'height': 8,
                'width': 8
            };
            var14 = var5[var12];
            var14 = var13.bind(var0)(var14);
            var14 = var14.colors;
            var14 = var14.BACKGROUND_BRAND;
            var11.backgroundColor = var14;
            var14 = var5[var12];
            var14 = var13.bind(var0)(var14);
            var14 = var14.radii;
            var14 = var14.round;
            var11.borderRadius = var14;
            var14 = var5[var12];
            var14 = var13.bind(var0)(var14);
            var14 = var14.spacing;
            var14 = var14.PX_8;
            var11.margin = var14;
            var3.channelItemUnreadIndicator = var11;
            var11 = {
                'marginRight': null,
                'justifyContent': 'center',
                'alignItems': 'center'
            };
            var14 = var5[var12];
            var14 = var13.bind(var0)(var14);
            var14 = var14.spacing;
            var14 = var14.PX_8;
            var11.marginRight = var14;
            var3.channelItemAvatar = var11;
            var11 = {
                'flexDirection': 'column',
                'flex': 1,
                'justifyContent': 'center'
            };
            var3.channelItemContent = var11;
            var11 = {
                'flexDirection': 'row',
                'gap': null,
                'justifyContent': 'space-between',
                'alignItems': 'center'
            };
            var14 = var5[var12];
            var14 = var13.bind(var0)(var14);
            var14 = var14.spacing;
            var14 = var14.PX_4;
            var11.gap = var14;
            var3.channelItemTop = var11;
            var11 = {};
            var14 = 'flex-end';
            var11.alignSelf = var14;
            var3.channelItemMentionsBadge = var11;
            var11 = {};
            var12 = var5[var12];
            var12 = var13.bind(var0)(var12);
            var12 = var12.spacing;
            var12 = var12.PX_16;
            var11.marginTop = var12;
            var3.themeSelector = var11;
            var3 = var6.bind(var10)(var3);
            var _closure1_slot7 = var3;
            var3 = {};
            var6 = 6;
            var10 = var5[var6];
            var10 = var4.bind(var0)(var10);
            var10 = var10.CutoutDirection;
            var10 = var10.BOTTOM_RIGHT;
            var3.direction = var10;
            var10 = 7;
            var10 = var5[var10];
            var12 = var4.bind(var0)(var10);
            var11 = var12.getStatusSize;
            var10 = var5[var6];
            var10 = var4.bind(var0)(var10);
            var10 = var10.AvatarSizes;
            var10 = var10.LARGE_48;
            var10 = var11.bind(var12)(var10);
            var11 = null;
            var11 = var11 != var10;
            if (!var11) {
                _fun85515_ip = 669;
                continue _fun85515
            }
        case 666:
            var9 = var10;
        case 669:
            var7 = var9 / var7;
            var7 = var7 + var8;
            var3.radius = var7;
            var6 = var5[var6];
            var6 = var4.bind(var0)(var6);
            var6 = var6.CutoutType;
            var6 = var6.CIRCULAR;
            var3.imageType = var6;
            var6 = -4;
            var3.inset = var6;
            var _closure1_slot8 = var3;
            var3 = 10;
            var3 = var5[var3];
            var5 = var4.bind(var0)(var3);
            var4 = var5.fileFinishedImporting;
            var3 = 'modules/user_settings/native/appearance/components/SettingsAppearanceChannelRowItem.tsx';
            var3 = var4.bind(var5)(var3);
            var1 = function arg0() {
                _fun85516: for (var _fun85516_ip = 0;;) switch (_fun85516_ip) {
                    case 0:
                        var0 = arg0;
                        var15 = var0.animatedStyles;
                        var18 = var0.title;
                        var19 = var0.timestamp;
                        var13 = var0.preview;
                        var24 = var0.avatar1;
                        var23 = var0.avatar2;
                        var17 = var0.status;
                        var3 = undefined;
                        if (!(var17 === var3)) {
                            _fun85516_ip = 62;
                            continue _fun85516
                        }
                    case 49:
                        var1 = _closure1_slot4;
                        var17 = var1.ONLINE;
                    case 62:
                        var14 = var0.isUnread;
                        if (!(var14 === var3)) {
                            _fun85516_ip = 74;
                            continue _fun85516
                        }
                    case 72:
                        var14 = false;
                    case 74:
                        var0 = _closure1_slot7;
                        var11 = var0.bind(var3)();
                        var2 = _closure1_slot6;
                        var1 = _closure1_slot3;
                        var0 = {};
                        var4 = var11.channelItemContainer;
                        var0.style = var4;
                        var5 = _closure1_slot5;
                        var4 = {};
                        var6 = var11.channelItemLeft;
                        var4.style = var6;
                        var6 = {};
                        var8 = var11.channelItemUnreadIndicator;
                        var7 = new Array(2);
                        var7[0] = var8;
                        var8 = {};
                        var9 = 0;
                        if (!var14) {
                            _fun85516_ip = 147;
                            continue _fun85516
                        }
                    case 144:
                        var9 = 1;
                    case 147:
                        var8.opacity = var9;
                        var7[1] = var8;
                        var6.style = var7;
                        var6 = var5.bind(var3)(var1, var6);
                        var4.children = var6;
                        var5 = var5.bind(var3)(var1, var4);
                        var4 = new Array(3);
                        var4[0] = var5;
                        var7 = _closure1_slot5;
                        var6 = _closure1_slot3;
                        var5 = {};
                        var8 = var11.channelItemAvatar;
                        var5.style = var8;
                        var9 = null;
                        if (!(var9 == var23)) {
                            _fun85516_ip = 292;
                            continue _fun85516
                        }
                    case 209:
                        var16 = _closure1_slot5;
                        var12 = _closure1_slot1;
                        var21 = _closure1_slot2;
                        var8 = 7;
                        var8 = var21[var8];
                        var12 = var12.bind(var3)(var8);
                        var8 = {};
                        var8.status = var17;
                        var8.source = var24;
                        var17 = _closure1_slot8;
                        var8.cutout = var17;
                        var20 = _closure1_slot0;
                        var17 = 6;
                        var17 = var21[var17];
                        var17 = var20.bind(var3)(var17);
                        var17 = var17.AvatarSizes;
                        var17 = var17.LARGE_48;
                        var8.size = var17;
                        var8 = var16.bind(var3)(var12, var8);
                        _fun85516_ip = 375;
                        continue _fun85516;
                    case 292:
                        var17 = _closure1_slot5;
                        var21 = _closure1_slot0;
                        var22 = _closure1_slot2;
                        var12 = 8;
                        var12 = var22[var12];
                        var12 = var21.bind(var3)(var12);
                        var16 = var12.FacepileGroupDMAvatar;
                        var12 = {};
                        var20 = new Array(2);
                        var20[0] = var24;
                        var20[1] = var23;
                        var12.sources = var20;
                        var20 = 6;
                        var20 = var22[var20];
                        var20 = var21.bind(var3)(var20);
                        var20 = var20.AvatarSizes;
                        var20 = var20.LARGE_48;
                        var12.size = var20;
                        var8 = var17.bind(var3)(var16, var12);
                    case 375:
                        var5.children = var8;
                        var5 = var7.bind(var3)(var6, var5);
                        var4[1] = var5;
                        var7 = _closure1_slot6;
                        var6 = _closure1_slot3;
                        var5 = {};
                        var8 = var11.channelItemContent;
                        var5.style = var8;
                        var8 = {};
                        var11 = var11.channelItemTop;
                        var8.style = var11;
                        var17 = _closure1_slot5;
                        var12 = _closure1_slot0;
                        var11 = _closure1_slot2;
                        var16 = 9;
                        var11 = var11[var16];
                        var11 = var12.bind(var3)(var11);
                        var12 = var11.Text;
                        var11 = {
                            'animated': true,
                            'style': null,
                            'variant': 'redesign/channel-title/semibold'
                        };
                        if (var14) {
                            _fun85516_ip = 475;
                            continue _fun85516
                        }
                    case 467:
                        var20 = var15.textMuted;
                        _fun85516_ip = 481;
                        continue _fun85516;
                    case 475:
                        var20 = var15.textNormal;
                    case 481:
                        var11.style = var20;
                        var11.children = var18;
                        var12 = var17.bind(var3)(var12, var11);
                        var11 = new Array(2);
                        var11[0] = var12;
                        var18 = _closure1_slot5;
                        var17 = _closure1_slot0;
                        var12 = _closure1_slot2;
                        var12 = var12[var16];
                        var12 = var17.bind(var3)(var12);
                        var17 = var12.Text;
                        var12 = {
                            'animated': true,
                            'style': null,
                            'variant': 'text-xs/medium'
                        };
                        var20 = var15.textMuted;
                        var12.style = var20;
                        var12.children = var19;
                        var12 = var18.bind(var3)(var17, var12);
                        var11[1] = var12;
                        var8.children = var11;
                        var11 = var7.bind(var3)(var6, var8);
                        var8 = new Array(2);
                        var8[0] = var11;
                        var11 = var9 != var13;
                        var9 = null;
                        if (!var11) {
                            _fun85516_ip = 671;
                            continue _fun85516
                        }
                    case 598:
                        var12 = _closure1_slot5;
                        var11 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var10 = var10[var16];
                        var10 = var11.bind(var3)(var10);
                        var11 = var10.Text;
                        var10 = {
                            'animated': true,
                            'style': null,
                            'variant': 'redesign/message-preview/medium',
                            'lineClamp': 1
                        };
                        if (var14) {
                            _fun85516_ip = 649;
                            continue _fun85516
                        }
                    case 641:
                        var14 = var15.textMuted;
                        _fun85516_ip = 655;
                        continue _fun85516;
                    case 649:
                        var14 = var15.textNormal;
                    case 655:
                        var10.style = var14;
                        var10.children = var13;
                        var9 = var12.bind(var3)(var11, var10);
                    case 671:
                        var8[1] = var9;
                        var5.children = var8;
                        var5 = var7.bind(var3)(var6, var5);
                        var4[2] = var5;
                        var0.children = var4;
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                }
            };
            var2.default = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 660, 33, 1297, 671, 5506, 5504, 9110, 3942, 2]);