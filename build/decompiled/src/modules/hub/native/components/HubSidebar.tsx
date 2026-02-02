// modules/hub/native/components/HubSidebar.tsx
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
    var3 = var3.bind(var0)(var6);
    var9 = 1;
    var3 = var5[var9];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.InstantInviteSources;
    var _closure1_slot6 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var10 = var3.CHANNEL_MARGIN_VERTICAL;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot7 = var6;
    var3 = var3.jsxs;
    var _closure1_slot8 = var3;
    var3 = 7;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var8.marginVertical = var10;
    var10 = 8;
    var8.marginHorizontal = var10;
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.radii;
    var10 = var10.md;
    var8.borderRadius = var10;
    var3.container = var8;
    var8 = {};
    var8.flex = var9;
    var3.row = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot9 = var3;
    var3 = function arg0() {
        _fun102164: for (var _fun102164_ip = 0;;) switch (_fun102164_ip) {
            case 0:
                var0 = arg0;
                var7 = var0.IconComponent;
                var13 = var0.label;
                var6 = var0.handleItemClick;
                var1 = var0.active;
                var8 = var0.unreadCount;
                var0 = _closure1_slot9;
                var3 = undefined;
                var11 = var0.bind(var3)();
                var2 = _closure1_slot0;
                var0 = _closure1_slot2;
                var10 = 9;
                var0 = var0[var10];
                var0 = var2.bind(var3)(var0);
                var0 = var0.ChannelModes;
                if (var1) {
                    _fun102164_ip = 81;
                    continue _fun102164
                }
            case 73:
                var9 = var0.DEFAULT;
                _fun102164_ip = 87;
                continue _fun102164;
            case 81:
                var9 = var0.SELECTED;
            case 87:
                var2 = _closure1_slot7;
                var1 = _closure1_slot1;
                var4 = _closure1_slot2;
                var0 = var4[var10];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var11 = var11.container;
                var0.style = var11;
                var0.accessibilityLabel = var13;
                var11 = 'menuitem';
                var0.accessibilityRole = var11;
                var0.onPress = var6;
                var6 = true;
                var0.disableHighlightOnPress = var6;
                var0.mode = var9;
                var6 = _closure1_slot0;
                var11 = var4[var10];
                var11 = var6.bind(var3)(var11);
                var12 = var11.BaseChannelName;
                var11 = {};
                var11.name = var13;
                var11.mode = var9;
                var11 = var2.bind(var3)(var12, var11);
                var0.name = var11;
                var4 = var4[var10];
                var4 = var6.bind(var3)(var4);
                var6 = var4.BaseChannelIcon;
                var4 = {};
                var4.mode = var9;
                var4.IconComponent = var7;
                var4 = var2.bind(var3)(var6, var4);
                var0.icon = var4;
                var4 = null;
                var6 = var4 == var8;
                if (var6) {
                    _fun102164_ip = 267;
                    continue _fun102164
                }
            case 231:
                var7 = _closure1_slot7;
                var6 = _closure1_slot1;
                var9 = _closure1_slot2;
                var5 = 10;
                var5 = var9[var5];
                var6 = var6.bind(var3)(var5);
                var5 = {};
                var5.value = var8;
                var4 = var7.bind(var3)(var6, var5);
            case 267:
                var0.channelInfo = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot10 = var3;
    var3 = 21;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/hub/native/components/HubSidebar.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun102165: for (var _fun102165_ip = 0;;) switch (_fun102165_ip) {
            case 0:
                var0 = arg0;
                var7 = var0.guild;
                var _closure2_slot0 = var7;
                var8 = var0.flashList;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 11;
                var0 = var3[var1];
                var4 = undefined;
                var13 = var2.bind(var4)(var0);
                var12 = var13.useStateFromStores;
                var5 = _closure1_slot4;
                var11 = new Array(1);
                var11[0] = var5;
                var0 = var7.id;
                var6 = new Array(1);
                var6[0] = var0;
                var0 = function() { // Environment: var9
                    var2 = _closure1_slot4;
                    var1 = var2.getDefaultChannel;
                    var0 = _closure2_slot0;
                    var0 = var0.id;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var0 = var12.bind(var13)(var11, var0, var6);
                var _closure2_slot1 = var0;
                var6 = _closure1_slot9;
                var6 = var6.bind(var4)();
                var11 = var3[var1];
                var13 = var2.bind(var4)(var11);
                var12 = var13.useStateFromStoresObject;
                var11 = new Array(1);
                var11[0] = var5;
                var5 = function() { // Environment: var9
                    var2 = _closure1_slot4;
                    var1 = var2.getChannels;
                    var0 = _closure2_slot0;
                    var0 = var0.id;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var5 = var12.bind(var13)(var11, var5);
                var _closure2_slot2 = var5;
                var1 = var3[var1];
                var12 = var2.bind(var4)(var1);
                var11 = var12.useStateFromStores;
                var1 = _closure1_slot5;
                var5 = new Array(1);
                var5[0] = var1;
                var1 = function() { // Environment: var9
                    _fun102168: for (var _fun102168_ip = 0;;) switch (_fun102168_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            var0 = null;
                            var0 = var0 != var2;
                            if (!var0) {
                                _fun102168_ip = 46;
                                continue _fun102168
                            }
                        case 16:
                            var3 = _closure1_slot5;
                            var2 = var3.getChannelId;
                            var2 = var2.bind(var3)();
                            var1 = _closure2_slot1;
                            var1 = var1.id;
                            var0 = var2 === var1;
                        case 46:
                            return var0;
                    }
                };
                var12 = var11.bind(var12)(var5, var1);
                var1 = 12;
                var1 = var3[var1];
                var2 = var2.bind(var4)(var1);
                var1 = var2.useHubUnreadCount;
                var11 = var1.bind(var2)(var0);
                var5 = null;
                var1 = var5 == var0;
                var0 = null;
                if (var1) {
                    _fun102165_ip = 603;
                    continue _fun102165
                }
            case 219:
                var3 = _closure1_slot8;
                var2 = _closure1_slot3;
                var1 = {};
                var5 = null;
                if (!var8) {
                    _fun102165_ip = 240;
                    continue _fun102165
                }
            case 234:
                var5 = var6.row;
            case 240:
                var1.style = var5;
                var8 = _closure1_slot7;
                var6 = _closure1_slot1;
                var14 = _closure1_slot2;
                var5 = 13;
                var5 = var14[var5];
                var6 = var6.bind(var4)(var5);
                var5 = {};
                var5.guild = var7;
                var6 = var8.bind(var4)(var6, var5);
                var5 = new Array(4);
                var5[0] = var6;
                var7 = _closure1_slot10;
                var6 = {};
                var6.active = var12;
                var13 = _closure1_slot0;
                var10 = 14;
                var10 = var14[var10];
                var10 = var13.bind(var4)(var10);
                var10 = var10.CompassIcon;
                var6.IconComponent = var10;
                var10 = 15;
                var12 = var14[var10];
                var12 = var13.bind(var4)(var12);
                var16 = var12.intl;
                var15 = var16.string;
                var12 = var14[var10];
                var12 = var13.bind(var4)(var12);
                var12 = var12.t;
                var12 = var12.K50GHd;
                var12 = var15.bind(var16)(var12);
                var6.label = var12;
                var12 = function() {
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 16;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.transitionToChannel;
                    var1 = _closure2_slot1;
                    var1 = var1.id;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var6.handleItemClick = var12;
                var6.unreadCount = var11;
                var6 = var8.bind(var4)(var7, var6);
                var5[1] = var6;
                var6 = {};
                var11 = 17;
                var11 = var14[var11];
                var11 = var13.bind(var4)(var11);
                var11 = var11.PlusMediumIcon;
                var6.IconComponent = var11;
                var11 = var14[var10];
                var11 = var13.bind(var4)(var11);
                var15 = var11.intl;
                var12 = var15.string;
                var11 = var14[var10];
                var11 = var13.bind(var4)(var11);
                var11 = var11.t;
                var11 = var11.emRpdS;
                var11 = var12.bind(var15)(var11);
                var6.label = var11;
                var11 = function() {
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 18;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.open;
                    var0 = {};
                    var4 = _closure2_slot0;
                    var5 = var4.name;
                    var0.directoryGuildName = var5;
                    var4 = var4.id;
                    var0.directoryGuildId = var4;
                    var3 = _closure2_slot1;
                    var3 = var3.id;
                    var0.directoryChannelId = var3;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var6.handleItemClick = var11;
                var6 = var8.bind(var4)(var7, var6);
                var5[2] = var6;
                var6 = {};
                var11 = 19;
                var11 = var14[var11];
                var11 = var13.bind(var4)(var11);
                var11 = var11.UserPlusIcon;
                var6.IconComponent = var11;
                var11 = var14[var10];
                var11 = var13.bind(var4)(var11);
                var12 = var11.intl;
                var11 = var12.string;
                var10 = var14[var10];
                var10 = var13.bind(var4)(var10);
                var10 = var10.t;
                var10 = var10.MJQOuJ;
                var10 = var11.bind(var12)(var10);
                var6.label = var10;
                var9 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 20;
                    var2 = var2[var0];
                    var0 = undefined;
                    var6 = var3.bind(var0)(var2);
                    var5 = var6.handleOpenInviteActionsheet;
                    var10 = _closure2_slot0;
                    var3 = _closure2_slot1;
                    var9 = var3.id;
                    var8 = _closure2_slot2;
                    var1 = _closure1_slot6;
                    var7 = var1.GUILD_HEADER;
                    var11 = var6;
                    var1 = var11[var5](var10, var9, var8, var7, var6);
                    return var0;
                };
                var6.handleItemClick = var9;
                var6 = var8.bind(var4)(var7, var6);
                var5[3] = var6;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 603:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1662, 1661, 660, 8749, 33, 1297, 671, 11650, 8591, 566, 13283, 13284, 11041, 1234, 3904, 11819, 8882, 3209, 8291, 2]);