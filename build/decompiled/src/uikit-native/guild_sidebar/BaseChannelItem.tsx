// uikit-native/guild_sidebar/BaseChannelItem.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var8 = require;
    var2 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var9;
    var5 = function arg0() {
        _fun89820: for (var _fun89820_ip = 0;;) switch (_fun89820_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.mode;
                var6 = var0.subtitle;
                var0 = _closure1_slot12;
                var4 = undefined;
                var5 = var0.bind(var4)(var2);
                var0 = null;
                var2 = var0 == var6;
                if (var2) {
                    _fun89820_ip = 131;
                    continue _fun89820
                }
            case 37:
                var3 = _closure1_slot6;
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var1 = 7;
                var1 = var9[var1];
                var1 = var8.bind(var4)(var1);
                var2 = var1.Text;
                var1 = {};
                var7 = 6;
                var7 = var9[var7];
                var8 = var8.bind(var4)(var7);
                var7 = var8.isAndroid;
                var7 = var7.bind(var8)();
                var7 = !var7;
                var1.experimental_useNativeText = var7;
                var7 = 1;
                var1.lineClamp = var7;
                var11 = var1;
                var10 = var5;
                var5 = copyDataProperties(var11, var10);
                var5 = 'children';
                var1[var5] = var6;
                var0 = var3.bind(var4)(var2, var1);
            case 131:
                return var0;
        }
    };
    var _closure1_slot10 = var5;
    var4 = function arg0() {
        _fun89821: for (var _fun89821_ip = 0;;) switch (_fun89821_ip) {
            case 0:
                var1 = arg0;
                var2 = _closure1_slot9;
                var2 = var2.UNREAD_IMPORTANT;
                if (!(var1 !== var2)) {
                    _fun89821_ip = 140;
                    continue _fun89821
                }
            case 20:
                var2 = _closure1_slot9;
                var2 = var2.RELEVANT;
                if (!(var1 !== var2)) {
                    _fun89821_ip = 140;
                    continue _fun89821
                }
            case 34:
                var2 = _closure1_slot9;
                var2 = var2.UNREAD_LESS_IMPORTANT;
                if (!(var1 !== var2)) {
                    _fun89821_ip = 124;
                    continue _fun89821
                }
            case 48:
                var2 = _closure1_slot9;
                var2 = var2.MUTED;
                if (!(var1 !== var2)) {
                    _fun89821_ip = 108;
                    continue _fun89821
                }
            case 62:
                var0 = _closure1_slot9;
                var0 = var0.SELECTED;
                if (!(var1 !== var0)) {
                    _fun89821_ip = 92;
                    continue _fun89821
                }
            case 76:
                var0 = {
                    'variant': 'text-md/medium',
                    'color': 'redesign-channel-name-muted-text'
                };
                _fun89821_ip = 106;
                continue _fun89821;
            case 92:
                var0 = {
                    'variant': 'text-md/medium',
                    'color': 'redesign-channel-name-text'
                };
            case 106:
                _fun89821_ip = 122;
                continue _fun89821;
            case 108:
                var0 = {
                    'variant': 'text-md/medium',
                    'color': 'text-muted'
                };
            case 122:
                _fun89821_ip = 138;
                continue _fun89821;
            case 124:
                var0 = {
                    'variant': 'text-md/medium',
                    'color': 'redesign-channel-name-muted-text'
                };
            case 138:
                _fun89821_ip = 154;
                continue _fun89821;
            case 140:
                var0 = {
                    'variant': 'text-md/semibold',
                    'color': 'redesign-channel-name-text'
                };
            case 154:
                return var0;
        }
    };
    var _closure1_slot11 = var4;
    var3 = function arg0() {
        _fun89822: for (var _fun89822_ip = 0;;) switch (_fun89822_ip) {
            case 0:
                var2 = arg0;
                var1 = _closure1_slot9;
                var1 = var1.UNREAD_IMPORTANT;
                if (!(var2 !== var1)) {
                    _fun89822_ip = 74;
                    continue _fun89822
                }
            case 20:
                var1 = _closure1_slot9;
                var1 = var1.RELEVANT;
                if (!(var2 !== var1)) {
                    _fun89822_ip = 74;
                    continue _fun89822
                }
            case 34:
                var1 = _closure1_slot9;
                var1 = var1.SELECTED;
                if (!(var2 !== var1)) {
                    _fun89822_ip = 74;
                    continue _fun89822
                }
            case 48:
                var0 = _closure1_slot9;
                var0 = var0.MUTED;
                var0 = {
                    'variant': 'text-xs/medium',
                    'color': 'text-muted'
                };
                _fun89822_ip = 88;
                continue _fun89822;
            case 74:
                var0 = {
                    'variant': 'text-xs/medium',
                    'color': 'redesign-channel-name-text'
                };
            case 88:
                return var0;
        }
    };
    var _closure1_slot12 = var3;
    var0 = global;
    var10 = var0.Object;
    var7 = var10.defineProperty;
    var6 = {};
    var0 = true;
    var6.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var10)(var2, var0, var6);
    var0 = 0;
    var7 = var9[var0];
    var6 = arg3;
    var0 = undefined;
    var6 = var6.bind(var0)(var7);
    var _closure1_slot3 = var6;
    var6 = 1;
    var6 = var9[var6];
    var6 = var8.bind(var0)(var6);
    var6 = var6.View;
    var _closure1_slot4 = var6;
    var6 = 2;
    var6 = var9[var6];
    var6 = var8.bind(var0)(var6);
    var6 = var6.UnreadSetting;
    var _closure1_slot5 = var6;
    var6 = 3;
    var6 = var9[var6];
    var6 = var8.bind(var0)(var6);
    var7 = var6.jsx;
    var _closure1_slot6 = var7;
    var6 = var6.jsxs;
    var _closure1_slot7 = var6;
    var6 = 4;
    var6 = var9[var6];
    var10 = var8.bind(var0)(var6);
    var7 = var10.createStyles;
    var6 = function(arg0) { // Environment: var1
        _fun89823: for (var _fun89823_ip = 0;;) switch (_fun89823_ip) {
            case 0:
                var4 = arg0;
                var0 = {};
                var1 = {};
                var8 = 6;
                var1.paddingHorizontal = var8;
                var0.rowPaddingNoIcon = var1;
                var1 = {};
                var9 = _closure1_slot1;
                var5 = _closure1_slot2;
                var6 = 5;
                var2 = var5[var6];
                var7 = undefined;
                var2 = var9.bind(var7)(var2);
                var2 = var2.radii;
                var2 = var2.md;
                var1.borderRadius = var2;
                var2 = var5[var6];
                var2 = var9.bind(var7)(var2);
                var2 = var2.colors;
                var2 = var2.BACKGROUND_MOD_MUTED;
                var1.backgroundColor = var2;
                var0.rowSelected = var1;
                var1 = {};
                var2 = var5[var6];
                var2 = var9.bind(var7)(var2);
                var2 = var2.radii;
                var2 = var2.md;
                var1.borderRadius = var2;
                var0.rowSelectedThemed = var1;
                var1 = {
                    'position': 'absolute',
                    'top': 0,
                    'bottom': 0,
                    'left': 0,
                    'right': 0,
                    'borderWidth': 1
                };
                var2 = 1;
                var10 = var5[var6];
                var10 = var9.bind(var7)(var10);
                var10 = var10.colors;
                var10 = var10.BORDER_MUTED;
                var1.borderColor = var10;
                var10 = var5[var6];
                var10 = var9.bind(var7)(var10);
                var10 = var10.radii;
                var10 = var10.md;
                var1.borderRadius = var10;
                var0.selectedBorder = var1;
                var1 = {};
                var5 = var5[var6];
                var5 = var9.bind(var7)(var5);
                var5 = var5.spacing;
                var5 = var5.PX_8;
                var5 = -var5;
                var1.left = var5;
                var0.unreadIndicator = var1;
                var1 = {
                    'width': 16,
                    'height': 16,
                    'marginRight': 8
                };
                var5 = 8;
                var9 = _closure1_slot9;
                var10 = var9.MUTED;
                var9 = var2;
                if (!(var4 === var10)) {
                    _fun89823_ip = 270;
                    continue _fun89823
                }
            case 260:
                var9 = 0.5;
            case 270:
                var1.opacity = var9;
                var0.channelIcon = var1;
                var1 = {};
                var1.marginRight = var5;
                var5 = _closure1_slot9;
                var9 = var5.MUTED;
                var5 = var2;
                if (!(var4 === var9)) {
                    _fun89823_ip = 313;
                    continue _fun89823
                }
            case 303:
                var5 = 0.5;
            case 313:
                var1.opacity = var5;
                var0.redesignedChannelIcon = var1;
                var1 = {};
                var9 = _closure1_slot1;
                var5 = _closure1_slot2;
                var10 = var5[var6];
                var10 = var9.bind(var7)(var10);
                var10 = var10.colors;
                var10 = var10.CHANNEL_ICON;
                var1.tintColor = var10;
                var0.channelIconNormal = var1;
                var1 = {};
                var10 = var5[var6];
                var10 = var9.bind(var7)(var10);
                var10 = var10.colors;
                var10 = var10.INTERACTIVE_TEXT_ACTIVE;
                var1.tintColor = var10;
                var0.channelIconUnread = var1;
                var1 = {};
                var6 = var5[var6];
                var6 = var9.bind(var7)(var6);
                var6 = var6.colors;
                var6 = var6.ICON_MUTED;
                var1.tintColor = var6;
                var0.channelIconMuted = var1;
                var1 = {
                    'paddingHorizontal': 8,
                    'paddingVertical': 8,
                    'flexDirection': 'row',
                    'alignItems': 'center',
                    'position': 'relative'
                };
                var0.channel = var1;
                var1 = {
                    'flex': 1,
                    'flexDirection': 'column',
                    'alignItems': 'stretch',
                    'justifyContent': 'center'
                };
                var0.channelNameContainer = var1;
                var1 = {
                    'flexGrow': 1,
                    'textAlign': 'left'
                };
                var6 = _closure1_slot0;
                var5 = var5[var8];
                var6 = var6.bind(var7)(var5);
                var5 = var6.isIOS;
                var6 = var5.bind(var6)();
                var5 = 20;
                if (!var6) {
                    _fun89823_ip = 509;
                    continue _fun89823
                }
            case 506:
                var5 = 22;
            case 509:
                var1.lineHeight = var5;
                var3 = _closure1_slot9;
                var3 = var3.MUTED;
                if (!(var4 === var3)) {
                    _fun89823_ip = 538;
                    continue _fun89823
                }
            case 528:
                var2 = 0.5;
            case 538:
                var1.opacity = var2;
                var0.channelName = var1;
                return var0;
        }
    };
    var6 = var7.bind(var10)(var6);
    var _closure1_slot8 = var6;
    var6 = {};
    var7 = 'Selected';
    var6.SELECTED = var7;
    var7 = 'Locked';
    var6.LOCKED = var7;
    var7 = 'Muted';
    var6.MUTED = var7;
    var7 = 'Relevant';
    var6.RELEVANT = var7;
    var7 = 'UnreadLessImportant';
    var6.UNREAD_LESS_IMPORTANT = var7;
    var7 = 'UnreadImportant';
    var6.UNREAD_IMPORTANT = var7;
    var7 = 'Default';
    var6.DEFAULT = var7;
    var _closure1_slot9 = var6;
    var7 = 12;
    var7 = var9[var7];
    var9 = var8.bind(var0)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'uikit-native/guild_sidebar/BaseChannelItem.tsx';
    var7 = var8.bind(var9)(var7);
    var7 = function arg0() {
        _fun89824: for (var _fun89824_ip = 0;;) switch (_fun89824_ip) {
            case 0:
                var6 = arg0;
                var12 = var6.icon;
                var10 = var6.name;
                var18 = var6.mode;
                var _closure2_slot0 = var18;
                var11 = var6.hideIcon;
                var _closure2_slot1 = var11;
                var1 = var6.disableHighlightOnPress;
                var3 = undefined;
                if (!(var1 === var3)) {
                    _fun89824_ip = 48;
                    continue _fun89824
                }
            case 46:
                var1 = false;
            case 48:
                var9 = var6.channelInfo;
                var4 = var6.children;
                var17 = var6.unread;
                if (!(var17 === var3)) {
                    _fun89824_ip = 71;
                    continue _fun89824
                }
            case 69:
                var17 = false;
            case 71:
                var5 = {
                    'icon': 0,
                    'name': 0,
                    'mode': 0,
                    'hideIcon': 0,
                    'disableHighlightOnPress': 0,
                    'channelInfo': 0,
                    'children': 0,
                    'unread': 0
                };
                var22 = null;
                var23 = var5;
                var0 = silentSetPrototypeOf(var23, var22);
                var23 = {};
                var22 = var6;
                var21 = var5;
                var5 = copyDataProperties(var23, var22, var21);
                var _closure2_slot2 = var3;
                var6 = _closure1_slot8;
                var19 = var6.bind(var3)(var18);
                _closure2_slot2 = var19;
                var8 = _closure1_slot3;
                var7 = var8.useMemo;
                var6 = new Array(3);
                var6[0] = var11;
                var6[1] = var18;
                var6[2] = var19;
                var2 = function() { // Environment: var2
                    _fun89825: for (var _fun89825_ip = 0;;) switch (_fun89825_ip) {
                        case 0:
                            var0 = _closure2_slot2;
                            var1 = var0.channel;
                            var0 = new Array(3);
                            var0[0] = var1;
                            var1 = _closure2_slot1;
                            if (!var1) {
                                _fun89825_ip = 37;
                                continue _fun89825
                            }
                        case 27:
                            var3 = _closure2_slot2;
                            var1 = var3.rowPaddingNoIcon;
                        case 37:
                            var0[1] = var1;
                            var3 = _closure2_slot0;
                            var1 = _closure1_slot9;
                            var1 = var1.SELECTED;
                            var1 = var3 === var1;
                            if (!var1) {
                                _fun89825_ip = 75;
                                continue _fun89825
                            }
                        case 65:
                            var2 = _closure2_slot2;
                            var1 = var2.rowSelected;
                        case 75:
                            var0[2] = var1;
                            return var0;
                    }
                };
                var8 = var7.bind(var8)(var2, var6);
                var7 = _closure1_slot7;
                var6 = _closure1_slot4;
                var2 = {};
                var2.style = var8;
                var8 = _closure1_slot9;
                var8 = var8.SELECTED;
                var13 = var18 === var8;
                if (!var13) {
                    _fun89824_ip = 221;
                    continue _fun89824
                }
            case 195:
                var15 = _closure1_slot6;
                var14 = _closure1_slot4;
                var8 = {};
                var16 = var19.selectedBorder;
                var8.style = var16;
                var13 = var15.bind(var3)(var14, var8);
            case 221:
                var8 = new Array(5);
                var8[0] = var13;
                var13 = !var11;
                if (!var13) {
                    _fun89824_ip = 323;
                    continue _fun89824
                }
            case 235:
                var16 = _closure1_slot6;
                var15 = _closure1_slot1;
                var20 = _closure1_slot2;
                var14 = 9;
                var14 = var20[var14];
                var15 = var15.bind(var3)(var14);
                var14 = {};
                var19 = var19.unreadIndicator;
                var14.style = var19;
                var14.unread = var17;
                var17 = _closure1_slot9;
                var17 = var17.UNREAD_LESS_IMPORTANT;
                if (!(var18 !== var17)) {
                    _fun89824_ip = 302;
                    continue _fun89824
                }
            case 290:
                var17 = _closure1_slot5;
                var17 = var17.ALL_MESSAGES;
                _fun89824_ip = 312;
                continue _fun89824;
            case 302:
                var18 = _closure1_slot5;
                var17 = var18.ONLY_MENTIONS;
            case 312:
                var14.resolvedUnreadSetting = var17;
                var13 = var16.bind(var3)(var15, var14);
            case 323:
                var8[1] = var13;
                var11 = !var11;
                if (!var11) {
                    _fun89824_ip = 336;
                    continue _fun89824
                }
            case 333:
                var11 = var12;
            case 336:
                var8[2] = var11;
                var8[3] = var10;
                var8[4] = var9;
                var2.children = var8;
                var6 = var7.bind(var3)(var6, var2);
                var2 = _closure1_slot7;
                if (var1) {
                    _fun89824_ip = 393;
                    continue _fun89824
                }
            case 365:
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var1 = 10;
                var1 = var8[var1];
                var1 = var7.bind(var3)(var1);
                var1 = var1.AnimatedPressableHighlight;
                _fun89824_ip = 413;
                continue _fun89824;
            case 393:
                var7 = _closure1_slot1;
                var8 = _closure1_slot2;
                var0 = 11;
                var0 = var8[var0];
                var1 = var7.bind(var3)(var0);
            case 413:
                var0 = {};
                var23 = var0;
                var22 = var5;
                var5 = copyDataProperties(var23, var22);
                var5 = new Array(2);
                var5[0] = var6;
                var5[1] = var4;
                var4 = 'children';
                var0[var4] = var5;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var7;
    var2.ChannelModes = var6;
    var2.BaseChannelSubtitle = var5;
    var5 = function arg0() {
        _fun89826: for (var _fun89826_ip = 0;;) switch (_fun89826_ip) {
            case 0:
                var0 = arg0;
                var16 = var0.disableColor;
                var2 = var0.mode;
                var11 = var0.source;
                var4 = var0.IconComponent;
                var10 = var0.style;
                var6 = var0.isChannelLive;
                var0 = _closure1_slot8;
                var3 = undefined;
                var5 = var0.bind(var3)(var2);
                var0 = _closure1_slot9;
                var0 = var0.MUTED;
                var9 = var2 === var0;
                var0 = _closure1_slot9;
                var0 = var0.UNREAD_IMPORTANT;
                var7 = var2 === var0;
                var0 = _closure1_slot9;
                var0 = var0.SELECTED;
                var8 = var2 === var0;
                var0 = var5.channelIcon;
                var12 = new Array(1);
                var12[0] = var0;
                var0 = true;
                if (!(var0 !== var16)) {
                    _fun89826_ip = 152;
                    continue _fun89826
                }
            case 111:
                var2 = var12.push;
                if (var9) {
                    _fun89826_ip = 141;
                    continue _fun89826
                }
            case 119:
                if (var7) {
                    _fun89826_ip = 133;
                    continue _fun89826
                }
            case 122:
                if (var8) {
                    _fun89826_ip = 133;
                    continue _fun89826
                }
            case 125:
                var0 = var5.channelIconNormal;
                _fun89826_ip = 139;
                continue _fun89826;
            case 133:
                var0 = var5.channelIconUnread;
            case 139:
                _fun89826_ip = 147;
                continue _fun89826;
            case 141:
                var0 = var5.channelIconMuted;
            case 147:
                var0 = var2.bind(var12)(var0);
            case 152:
                var0 = null;
                if (!(var0 != var10)) {
                    _fun89826_ip = 168;
                    continue _fun89826
                }
            case 158:
                var2 = var12.push;
                var2 = var2.bind(var12)(var10);
            case 168:
                if (!(var0 == var4)) {
                    _fun89826_ip = 244;
                    continue _fun89826
                }
            case 172:
                var10 = _closure1_slot6;
                var14 = _closure1_slot1;
                var15 = _closure1_slot2;
                var13 = 8;
                var0 = var15[var13];
                var2 = var14.bind(var3)(var0);
                var0 = {};
                var0.disableColor = var16;
                var13 = var15[var13];
                var13 = var14.bind(var3)(var13);
                var13 = var13.Sizes;
                var13 = var13.CUSTOM;
                var0.size = var13;
                var0.style = var12;
                var0.source = var11;
                var0 = var10.bind(var3)(var2, var0);
                _fun89826_ip = 320;
                continue _fun89826;
            case 244:
                var2 = _closure1_slot6;
                var1 = {};
                var10 = 'sm';
                var1.size = var10;
                var5 = var5.redesignedChannelIcon;
                var1.style = var5;
                var5 = 'status-positive';
                if (var6) {
                    _fun89826_ip = 310;
                    continue _fun89826
                }
            case 277:
                var6 = 'icon-muted';
                if (var9) {
                    _fun89826_ip = 307;
                    continue _fun89826
                }
            case 286:
                if (var7) {
                    _fun89826_ip = 298;
                    continue _fun89826
                }
            case 289:
                var7 = 'channel-icon';
                if (!var8) {
                    _fun89826_ip = 304;
                    continue _fun89826
                }
            case 298:
                var7 = 'interactive-text-active';
            case 304:
                var6 = var7;
            case 307:
                var5 = var6;
            case 310:
                var1.color = var5;
                var0 = var2.bind(var3)(var4, var1);
            case 320:
                return var0;
        }
    };
    var2.BaseChannelIcon = var5;
    var2.useChannelNameTextProps = var4;
    var2.getChannelSubtitleTextProps = var3;
    var1 = function arg0() {
        var0 = arg0;
        var9 = var0.mode;
        var11 = var0.name;
        var8 = var0.subtitle;
        var10 = var0.textStyle;
        var0 = _closure1_slot8;
        var3 = undefined;
        var12 = var0.bind(var3)(var9);
        var2 = _closure1_slot7;
        var1 = _closure1_slot4;
        var0 = {};
        var4 = var12.channelNameContainer;
        var0.style = var4;
        var7 = _closure1_slot6;
        var6 = _closure1_slot0;
        var13 = _closure1_slot2;
        var4 = 7;
        var4 = var13[var4];
        var4 = var6.bind(var3)(var4);
        var6 = var4.Text;
        var4 = {};
        var13 = true;
        var4.experimental_useNativeText = var13;
        var13 = _closure1_slot11;
        var15 = var13.bind(var3)(var9);
        var16 = var4;
        var13 = copyDataProperties(var16, var15);
        var14 = 1;
        var13 = 'lineClamp';
        var4[var13] = var14;
        var13 = var12.channelName;
        var12 = new Array(2);
        var12[0] = var13;
        var12[1] = var10;
        var10 = 'style';
        var4[var10] = var12;
        var10 = 'children';
        var4[var10] = var11;
        var6 = var7.bind(var3)(var6, var4);
        var4 = new Array(2);
        var4[0] = var6;
        var7 = _closure1_slot6;
        var6 = _closure1_slot10;
        var5 = {};
        var5.mode = var9;
        var5.subtitle = var8;
        var5 = var7.bind(var3)(var6, var5);
        var4[1] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.BaseChannelName = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 4300, 33, 1297, 671, 479, 3932, 4077, 8761, 7020, 11681, 2]);