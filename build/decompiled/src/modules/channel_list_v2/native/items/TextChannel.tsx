// modules/channel_list_v2/native/items/TextChannel.tsx
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
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.CHANNEL_MARGIN_VERTICAL;
    var _closure1_slot10 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot11 = var7;
    var3 = var3.jsxs;
    var _closure1_slot12 = var3;
    var3 = 9;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = function(arg0, arg1) { // Environment: var1
        _fun102584: for (var _fun102584_ip = 0;;) switch (_fun102584_ip) {
            case 0:
                var0 = {};
                var1 = {
                    'position': 'relative',
                    'marginVertical': null,
                    'marginHorizontal': 8,
                    'borderRadius': null,
                    'flexGrow': 1
                };
                var3 = _closure1_slot10;
                var1.marginVertical = var3;
                var7 = _closure1_slot1;
                var6 = _closure1_slot2;
                var3 = 10;
                var4 = var6[var3];
                var5 = undefined;
                var4 = var7.bind(var5)(var4);
                var4 = var4.radii;
                var4 = var4.md;
                var1.borderRadius = var4;
                var4 = 1;
                var0.container = var1;
                var1 = {};
                var8 = var6[var3];
                var8 = var7.bind(var5)(var8);
                var8 = var8.colors;
                var8 = var8.BACKGROUND_MOD_MUTED;
                var1.backgroundColor = var8;
                var0.selected = var1;
                var1 = {
                    'position': 'absolute',
                    'top': 0,
                    'bottom': 0,
                    'left': 0,
                    'right': 0,
                    'borderWidth': 1
                };
                var8 = var6[var3];
                var8 = var7.bind(var5)(var8);
                var8 = var8.colors;
                var8 = var8.BORDER_MUTED;
                var1.borderColor = var8;
                var3 = var6[var3];
                var3 = var7.bind(var5)(var3);
                var3 = var3.radii;
                var3 = var3.md;
                var1.borderRadius = var3;
                var0.selectedBorder = var1;
                var1 = {
                    'padding': 8,
                    'flexDirection': 'row',
                    'alignItems': 'center'
                };
                var0.row = var1;
                var1 = {
                    'flexGrow': 1,
                    'paddingVertical': 6
                };
                var0.rowWithSubtitle = var1;
                var1 = {
                    'flexDirection': 'column',
                    'flex': 1
                };
                var0.channelLabel = var1;
                var1 = {
                    'textAlign': 'left',
                    'flex': 1
                };
                var3 = _closure1_slot0;
                var2 = 11;
                var2 = var6[var2];
                var3 = var3.bind(var5)(var2);
                var2 = var3.isIOS;
                var3 = var2.bind(var3)();
                var2 = 20;
                if (!var3) {
                    _fun102584_ip = 280;
                    continue _fun102584
                }
            case 277:
                var2 = 22;
            case 280:
                var1.lineHeight = var2;
                var3 = arg0;
                var2 = var4;
                if (!var3) {
                    _fun102584_ip = 313;
                    continue _fun102584
                }
            case 294:
                var3 = arg1;
                var2 = var4;
                if (var3) {
                    _fun102584_ip = 313;
                    continue _fun102584
                }
            case 303:
                var2 = 0.5;
            case 313:
                var1.opacity = var2;
                var0.channelLabelText = var1;
                return var0;
        }
    };
    var3 = var7.bind(var8)(var3);
    var _closure1_slot13 = var3;
    var3 = var6.memo;
    var1 = function(arg0) { // Environment: var1
        _fun102585: for (var _fun102585_ip = 0;;) switch (_fun102585_ip) {
            case 0:
                var2 = arg0;
                var20 = var2.channel;
                var _closure2_slot0 = var20;
                var18 = var2.muted;
                var19 = var2.selected;
                var1 = var2.isRulesChannel;
                var30 = var2.subtitle;
                var2 = _closure1_slot13;
                var3 = undefined;
                var23 = var2.bind(var3)(var18, var19);
                var4 = var20.id;
                var _closure2_slot1 = var4;
                var2 = var20.guild_id;
                var _closure2_slot2 = var2;
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var5 = 16;
                var5 = var7[var5];
                var9 = var6.bind(var3)(var5);
                var8 = var9.useStateFromStoresObject;
                var5 = _closure1_slot6;
                var7 = new Array(5);
                var7[0] = var5;
                var5 = _closure1_slot5;
                var7[1] = var5;
                var5 = _closure1_slot7;
                var7[2] = var5;
                var5 = _closure1_slot8;
                var7[3] = var5;
                var5 = _closure1_slot9;
                var7[4] = var5;
                var6 = new Array(2);
                var6[0] = var20;
                var6[1] = var4;
                var5 = function() { // Environment: var0
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 17;
                    var1 = var1[var0];
                    var0 = undefined;
                    var6 = var2.bind(var0)(var1);
                    var5 = var6.getChannelRoleSubscriptionStatus;
                    var7 = _closure2_slot1;
                    var10 = _closure1_slot6;
                    var9 = _closure1_slot5;
                    var8 = _closure1_slot7;
                    var12 = var6;
                    var11 = var7;
                    var0 = var12[var5](var11, var10, var9, var8, var7);
                    var2 = var0.isSubscriptionGated;
                    var1 = var0.needSubscriptionToAccess;
                    var0 = {};
                    var6 = _closure1_slot8;
                    var5 = var6.hasUnread;
                    var5 = var5.bind(var6)(var7);
                    var0.hasUnread = var5;
                    var5 = var6.getMentionCount;
                    var5 = var5.bind(var6)(var7);
                    var0.mentionCount = var5;
                    var5 = _closure1_slot9;
                    var4 = var5.resolveUnreadSetting;
                    var3 = _closure2_slot0;
                    var3 = var4.bind(var5)(var3);
                    var0.resolvedUnreadSetting = var3;
                    var0.isSubscriptionGated = var2;
                    var0.needSubscriptionToAccess = var1;
                    return var0;
                };
                var5 = var8.bind(var9)(var7, var5, var6);
                var11 = var5.hasUnread;
                var10 = var5.mentionCount;
                var17 = var5.isSubscriptionGated;
                var16 = var5.needSubscriptionToAccess;
                var26 = var5.resolvedUnreadSetting;
                var6 = _closure1_slot3;
                var7 = var6.useCallback;
                var5 = new Array(2);
                var5[0] = var4;
                var5[1] = var2;
                var2 = function() { // Environment: var0
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 18;
                    var1 = var1[var0];
                    var0 = undefined;
                    var4 = var2.bind(var0)(var1);
                    var3 = var4.preload;
                    var2 = _closure2_slot2;
                    var1 = _closure2_slot1;
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
                };
                var22 = var7.bind(var6)(var2, var5);
                var7 = var6.useCallback;
                var5 = new Array(1);
                var5[0] = var4;
                var2 = function() { // Environment: var0
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 19;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.transitionToChannel;
                    var1 = _closure2_slot1;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var21 = var7.bind(var6)(var2, var5);
                var5 = var6.useCallback;
                var2 = new Array(1);
                var2[0] = var4;
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 20;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.openChannelLongPressActionSheet;
                    var1 = _closure2_slot1;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var8 = var5.bind(var6)(var0, var2);
                var29 = var11;
                if (!var29) {
                    _fun102585_ip = 292;
                    continue _fun102585
                }
            case 289:
                var29 = !var18;
            case 292:
                var14 = _closure1_slot0;
                var9 = _closure1_slot2;
                var0 = 21;
                var0 = var9[var0];
                var5 = var14.bind(var3)(var0);
                var2 = var5.getChannelMode;
                var0 = {};
                var0.muted = var18;
                var0.selected = var19;
                var0.unread = var29;
                var0.resolvedUnreadSetting = var26;
                var0.mentionCount = var10;
                var6 = false;
                var0.locked = var6;
                var0.channel = var20;
                var33 = var2.bind(var5)(var0);
                var0 = 22;
                var0 = var9[var0];
                var2 = var14.bind(var3)(var0);
                var0 = var2.useIsActivitiesInTextEnabled;
                var15 = var0.bind(var2)(var4);
                var0 = {};
                var0.channel = var20;
                var0.isRulesChannel = var1;
                var5 = var0.channel;
                var0 = var0.isRulesChannel;
                if (var0) {
                    _fun102585_ip = 481;
                    continue _fun102585
                }
            case 409:
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 14;
                var1 = var4[var0];
                var13 = var2.bind(var3)(var1);
                var7 = var13.getChannelIcon;
                var1 = {};
                var1.isRulesChannel = var6;
                var1 = var7.bind(var13)(var5, var1);
                var0 = var4[var0];
                var4 = var2.bind(var3)(var0);
                var2 = var4.getChannelIconComponent;
                var0 = {};
                var0.isRulesChannel = var6;
                var4 = var2.bind(var4)(var5, var0);
                var5 = var1;
                _fun102585_ip = 523;
                continue _fun102585;
            case 481:
                var1 = _closure1_slot1;
                var6 = _closure1_slot2;
                var0 = 12;
                var0 = var6[var0];
                var5 = var1.bind(var3)(var0);
                var2 = _closure1_slot0;
                var0 = 13;
                var0 = var6[var0];
                var0 = var2.bind(var3)(var0);
                var4 = var0.BookCheckIcon;
            case 523:
                var1 = _closure1_slot0;
                var0 = _closure1_slot2;
                var27 = 15;
                var0 = var0[var27];
                var2 = var1.bind(var3)(var0);
                var1 = var2.BaseChannelIcon;
                var0 = {};
                var0.mode = var33;
                var0.source = var5;
                var0.IconComponent = var4;
                var13 = var1.bind(var2)(var0);
                var6 = _closure1_slot11;
                var24 = 23;
                var0 = var9[var24];
                var0 = var14.bind(var3)(var0);
                var1 = var0.Text;
                var0 = {
                    'experimental_useNativeText': true,
                    'lineClamp': 1
                };
                var7 = true;
                var2 = var23.channelLabelText;
                var0.style = var2;
                var2 = var9[var27];
                var4 = var14.bind(var3)(var2);
                var2 = var4.useChannelNameTextProps;
                var35 = var2.bind(var4)(var33);
                var36 = var0;
                var2 = copyDataProperties(var36, var35);
                var2 = var20.name;
                var28 = 'children';
                var0[var28] = var2;
                var25 = var6.bind(var3)(var1, var0);
                var2 = _closure1_slot12;
                var5 = _closure1_slot1;
                var0 = 24;
                var0 = var9[var0];
                var1 = var5.bind(var3)(var0);
                var0 = {};
                var4 = 25;
                var4 = var9[var4];
                var5 = var5.bind(var3)(var4);
                var4 = {};
                var4.unread = var29;
                var4.resolvedUnreadSetting = var26;
                var5 = var6.bind(var3)(var5, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var5 = 26;
                var5 = var9[var5];
                var5 = var14.bind(var3)(var5);
                var6 = var5.AnimatedPressableHighlight;
                var5 = {};
                var5.onPressIn = var22;
                var5.onPress = var21;
                var5.onLongPress = var8;
                var21 = var23.container;
                var8 = new Array(2);
                var8[0] = var21;
                var9 = var9[var27];
                var9 = var14.bind(var3)(var9);
                var9 = var9.ChannelModes;
                var9 = var9.SELECTED;
                var9 = var33 === var9;
                if (!var9) {
                    _fun102585_ip = 803;
                    continue _fun102585
                }
            case 797:
                var9 = var23.selected;
            case 803:
                var8[1] = var9;
                var5.style = var8;
                var5.accessible = var7;
                var7 = 'button';
                var5.accessibilityRole = var7;
                var9 = _closure1_slot1;
                var7 = _closure1_slot2;
                var8 = 27;
                var8 = var7[var8];
                var9 = var9.bind(var3)(var8);
                var8 = {};
                var8.channel = var20;
                var8.unread = var11;
                var8.mentionCount = var10;
                var8 = var9.bind(var3)(var8);
                var5.accessibilityLabel = var8;
                var8 = {};
                var8.selected = var19;
                var5.accessibilityState = var8;
                var8 = _closure1_slot0;
                var7 = var7[var27];
                var7 = var8.bind(var3)(var7);
                var7 = var7.ChannelModes;
                var7 = var7.SELECTED;
                var8 = var33 === var7;
                if (!var8) {
                    _fun102585_ip = 938;
                    continue _fun102585
                }
            case 912:
                var10 = _closure1_slot11;
                var9 = _closure1_slot4;
                var7 = {};
                var11 = var23.selectedBorder;
                var7.style = var11;
                var8 = var10.bind(var3)(var9, var7);
            case 938:
                var7 = new Array(2);
                var7[0] = var8;
                var10 = _closure1_slot12;
                var9 = _closure1_slot4;
                var8 = {};
                var14 = var23.row;
                var11 = new Array(2);
                var11[0] = var14;
                var14 = null;
                var21 = var14 != var30;
                if (!var21) {
                    _fun102585_ip = 985;
                    continue _fun102585
                }
            case 979:
                var21 = var23.rowWithSubtitle;
            case 985:
                var11[1] = var21;
                var8.style = var11;
                var11 = new Array(3);
                var11[0] = var13;
                var13 = var25;
                if (!(var14 != var30)) {
                    _fun102585_ip = 1160;
                    continue _fun102585
                }
            case 1011:
                var22 = _closure1_slot12;
                var21 = _closure1_slot4;
                var14 = {};
                var23 = var23.channelLabel;
                var14.style = var23;
                var23 = new Array(2);
                var23[0] = var25;
                var26 = _closure1_slot11;
                var29 = _closure1_slot0;
                var31 = _closure1_slot2;
                var24 = var31[var24];
                var24 = var29.bind(var3)(var24);
                var25 = var24.Text;
                var24 = {
                    'experimental_useNativeText': true,
                    'lineClamp': 1
                };
                var27 = var31[var27];
                var32 = var29.bind(var3)(var27);
                var27 = var32.getChannelSubtitleTextProps;
                var35 = var27.bind(var32)(var33);
                var36 = var24;
                var27 = copyDataProperties(var36, var35);
                var27 = 28;
                var27 = var31[var27];
                var29 = var29.bind(var3)(var27);
                var27 = var29.getChannelSubtitleData;
                var27 = var27.bind(var29)(var30);
                var27 = var27.subtitle;
                var24[var28] = var27;
                var24 = var26.bind(var3)(var25, var24);
                var23[1] = var24;
                var14.children = var23;
                var13 = var22.bind(var3)(var21, var14);
            case 1160:
                var11[1] = var13;
                var14 = _closure1_slot11;
                var13 = _closure1_slot1;
                var21 = _closure1_slot2;
                var12 = 29;
                var12 = var21[var12];
                var13 = var13.bind(var3)(var12);
                var12 = {};
                var12.channel = var20;
                var12.isChannelSelected = var19;
                var12.muted = var18;
                var12.isSubscriptionGated = var17;
                var12.needSubscriptionToAccess = var16;
                var12.enableActivities = var15;
                var12 = var14.bind(var3)(var13, var12);
                var11[2] = var12;
                var8.children = var11;
                var8 = var10.bind(var3)(var9, var8);
                var7[1] = var8;
                var5.children = var7;
                var5 = var2.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 30;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/channel_list_v2/native/items/TextChannel.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1672, 1372, 3091, 3947, 4303, 8800, 33, 1297, 671, 479, 13296, 4842, 4807, 11693, 566, 4791, 3945, 3943, 9110, 13295, 6819, 3941, 6457, 8780, 7025, 7875, 13406, 13407, 2]);