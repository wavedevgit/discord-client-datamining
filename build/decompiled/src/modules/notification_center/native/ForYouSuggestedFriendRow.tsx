// modules/notification_center/native/ForYouSuggestedFriendRow.tsx
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
    var7 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.AnalyticEvents;
    var _closure1_slot7 = var6;
    var3 = var3.RelationshipTypes;
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot9 = var6;
    var6 = var3.jsxs;
    var _closure1_slot10 = var6;
    var3 = var3.Fragment;
    var _closure1_slot11 = var3;
    var3 = 6;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = function(arg0) { // Environment: var1
        _fun103306: for (var _fun103306_ip = 0;;) switch (_fun103306_ip) {
            case 0:
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var0 = 7;
                var1 = var10[var0];
                var6 = undefined;
                var3 = var9.bind(var6)(var1);
                var2 = var3.getLayoutStyles;
                var1 = arg0;
                var2 = var2.bind(var3)(var1);
                var0 = var10[var0];
                var3 = var9.bind(var6)(var0);
                var1 = var3.makeSizeStyle;
                var0 = var2.icon;
                var0 = var0.wrapper;
                var0 = var0.size;
                var3 = var1.bind(var3)(var0);
                var0 = {};
                var1 = {};
                var12 = _closure1_slot1;
                var7 = 8;
                var5 = var10[var7];
                var5 = var12.bind(var6)(var5);
                var5 = var5.colors;
                var5 = var5.BACKGROUND_MOD_MUTED;
                var1.backgroundColor = var5;
                var0.rowActive = var1;
                var1 = {};
                var5 = 1;
                var1.flex = var5;
                var0.pressable = var1;
                var1 = {
                    'flexDirection': 'column',
                    'flexGrow': 2,
                    'flexShrink': 2,
                    'alignSelf': 'center',
                    'overflow': 'hidden',
                    'marginTop': 4294967294
                };
                var8 = 2;
                var11 = var10[var7];
                var11 = var12.bind(var6)(var11);
                var11 = var11.spacing;
                var11 = var11.PX_8;
                var1.marginRight = var11;
                var0.textContainer = var1;
                var1 = {};
                var1.flexShrink = var5;
                var5 = 9;
                var5 = var10[var5];
                var9 = var9.bind(var6)(var5);
                var5 = var9.isAndroid;
                var9 = var5.bind(var9)();
                var5 = 0;
                if (!var9) {
                    _fun103306_ip = 213;
                    continue _fun103306
                }
            case 210:
                var5 = var8;
            case 213:
                var1.marginBottom = var5;
                var0.nameText = var1;
                var1 = {
                    'position': 'relative',
                    'borderRadius': null,
                    'justifyContent': 'center',
                    'alignItems': 'center',
                    'flexShrink': 0,
                    'flexGrow': 0
                };
                var5 = _closure1_slot1;
                var4 = _closure1_slot2;
                var4 = var4[var7];
                var4 = var5.bind(var6)(var4);
                var4 = var4.radii;
                var4 = var4.round;
                var1.borderRadius = var4;
                var14 = var1;
                var13 = var3;
                var3 = copyDataProperties(var14, var13);
                var2 = var2.icon;
                var2 = var2.margin;
                var3 = var2.marginRight;
                var2 = 4;
                var3 = var3 + var2;
                var2 = 'marginRight';
                var1[var2] = var3;
                var0.avatar = var1;
                var1 = {};
                var2 = 0.8;
                var1.opacity = var2;
                var0.subtitle = var1;
                return var0;
        }
    };
    var3 = var6.bind(var7)(var3);
    var _closure1_slot12 = var3;
    var3 = 27;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/notification_center/native/ForYouSuggestedFriendRow.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun103307: for (var _fun103307_ip = 0;;) switch (_fun103307_ip) {
            case 0:
                var0 = arg0;
                var24 = var0.suggestedFriend;
                var _closure2_slot0 = var24;
                var1 = var0.onAddSuggestion;
                var _closure2_slot1 = var1;
                var1 = var0.onAddSuggestionAnimationFinish;
                var _closure2_slot2 = var1;
                var3 = var0.panelVariant;
                var7 = undefined;
                if (!(var3 === var7)) {
                    _fun103307_ip = 49;
                    continue _fun103307
                }
            case 47:
                var3 = false;
            case 49:
                var _closure2_slot3 = var7;
                var _closure2_slot4 = var7;
                var _closure2_slot5 = var7;
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var22 = 7;
                var0 = var2[var22];
                var1 = var4.bind(var7)(var0);
                var0 = var1.useMessagesTabLayout;
                var5 = var0.bind(var1)(var3);
                var0 = _closure1_slot12;
                var32 = var0.bind(var7)(var5);
                var1 = _closure1_slot1;
                var0 = 10;
                var0 = var2[var0];
                var0 = var1.bind(var7)(var0);
                var0 = var0.bind(var7)();
                var1 = var0.analyticsLocations;
                _closure2_slot3 = var1;
                var0 = var2[var22];
                var6 = var4.bind(var7)(var0);
                var0 = var6.getLayoutStyles;
                var20 = var0.bind(var6)(var5);
                var0 = 11;
                var0 = var2[var0];
                var6 = var4.bind(var7)(var0);
                var0 = var6.useFontScale;
                var12 = var0.bind(var6)();
                var0 = 12;
                var2 = var2[var0];
                var8 = var4.bind(var7)(var2);
                var6 = var8.useStateFromStoresObject;
                var2 = _closure1_slot5;
                var4 = new Array(1);
                var4[0] = var2;
                var2 = function() { // Environment: var19
                    var0 = _closure1_slot5;
                    var0 = var0.useReducedMotion;
                    return var0;
                };
                var18 = var6.bind(var8)(var4, var2);
                var6 = _closure1_slot3;
                var4 = var6.useCallback;
                var2 = new Array(2);
                var2[0] = var24;
                var2[1] = var1;
                var1 = function() { // Environment: var19
                    var3 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 14;
                    var2 = var1[var0];
                    var0 = undefined;
                    var3 = var3.bind(var0)(var2);
                    var2 = 13;
                    var2 = var1[var2];
                    var1 = var1.paths;
                    var3 = var3.bind(var0)(var2, var1);
                    var2 = var3.then;
                    var1 = function(arg0) { // Environment: var1
                        var0 = arg0;
                        var2 = var0.default;
                        var1 = {};
                        var3 = _closure2_slot0;
                        var4 = var3.user;
                        var4 = var4.id;
                        var1.userId = var4;
                        var3 = var3.user;
                        var1.localUser = var3;
                        var0 = _closure2_slot3;
                        var1.sourceAnalyticsLocations = var0;
                        var0 = 'Notifications Tab User Profile';
                        var1.location = var0;
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var8 = var4.bind(var6)(var1, var2);
                var1 = var24.friendSuggestionName;
                var2 = null;
                var4 = var3;
                if (!(var2 != var1)) {
                    _fun103307_ip = 285;
                    continue _fun103307
                }
            case 268:
                var1 = var24.friendSuggestionName;
                var3 = var1.length;
                var1 = 0;
                if (!(!(var3 > var1))) {
                    _fun103307_ip = 323;
                    continue _fun103307
                }
            case 285:
                var3 = _closure1_slot1;
                var6 = _closure1_slot2;
                var1 = 15;
                var1 = var6[var1];
                var6 = var3.bind(var7)(var1);
                var3 = var6.getName;
                var1 = var24.user;
                var3 = var3.bind(var6)(var1);
                _fun103307_ip = 329;
                continue _fun103307;
            case 323:
                var3 = var24.friendSuggestionName;
            case 329:
                var6 = _closure1_slot0;
                var9 = _closure1_slot2;
                var1 = 16;
                var1 = var9[var1];
                var6 = var6.bind(var7)(var1);
                var1 = var6.getSuggestedContactNameForSuggestion;
                var6 = var1.bind(var6)(var3, var24);
                var1 = var2 != var6;
                var31 = '';
                var27 = var3;
                var30 = var31;
                if (!var1) {
                    _fun103307_ip = 402;
                    continue _fun103307
                }
            case 378:
                var1 = global;
                var1 = var1.HermesInternal;
                var3 = var1.concat;
                var1 = ' · ';
                var30 = var3.bind(var1)(var6);
            case 402:
                var1 = var24.mutualFriendsCount;
                if (!(var2 != var1)) {
                    _fun103307_ip = 424;
                    continue _fun103307
                }
            case 412:
                var2 = var24.mutualFriendsCount;
                var1 = 0;
                if (!(!(var2 > var1))) {
                    _fun103307_ip = 462;
                    continue _fun103307
                }
            case 424:
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 15;
                var1 = var3[var1];
                var3 = var2.bind(var7)(var1);
                var2 = var3.getName;
                var1 = var24.user;
                var21 = var2.bind(var3)(var1);
                _fun103307_ip = 531;
                continue _fun103307;
            case 462:
                var2 = _closure1_slot0;
                var9 = _closure1_slot2;
                var1 = 17;
                var3 = var9[var1];
                var3 = var2.bind(var7)(var3);
                var6 = var3.intl;
                var3 = var6.formatToPlainString;
                var1 = var9[var1];
                var1 = var2.bind(var7)(var1);
                var1 = var1.t;
                var2 = var1.z7y34b;
                var1 = {};
                var9 = var24.mutualFriendsCount;
                var1.count = var9;
                var21 = var3.bind(var6)(var2, var1);
            case 531:
                var29 = _closure1_slot0;
                var28 = _closure1_slot2;
                var1 = 18;
                var1 = var28[var1];
                var3 = var29.bind(var7)(var1);
                var2 = var3.useSharedValue;
                var1 = false;
                var23 = var2.bind(var3)(var1);
                _closure2_slot4 = var23;
                var0 = var28[var0];
                var3 = var29.bind(var7)(var0);
                var2 = var3.useStateFromStores;
                var0 = _closure1_slot6;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var19
                    var3 = _closure1_slot6;
                    var2 = var3.getRelationshipType;
                    var1 = _closure2_slot0;
                    var1 = var1.user;
                    var1 = var1.id;
                    var1 = var2.bind(var3)(var1);
                    var0 = _closure1_slot8;
                    var0 = var0.PENDING_OUTGOING;
                    var0 = var1 === var0;
                    return var0;
                };
                var0 = var2.bind(var3)(var1, var0);
                _closure2_slot5 = var0;
                var3 = _closure1_slot3;
                var2 = var3.useEffect;
                var1 = new Array(2);
                var1[0] = var23;
                var1[1] = var0;
                var0 = function() { // Environment: var19
                    _fun103312: for (var _fun103312_ip = 0;;) switch (_fun103312_ip) {
                        case 0:
                            var1 = _closure2_slot5;
                            if (var1) {
                                _fun103312_ip = 26;
                                continue _fun103312
                            }
                        case 10:
                            var2 = _closure2_slot4;
                            var1 = var2.set;
                            var0 = false;
                            var0 = var1.bind(var2)(var0);
                        case 26:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var2.bind(var3)(var0, var1);
                var0 = 19;
                var0 = var28[var0];
                var3 = var29.bind(var7)(var0);
                var2 = var3.renderChannelPressableWrapper;
                var6 = _closure1_slot9;
                var0 = 20;
                var0 = var28[var0];
                var0 = var29.bind(var7)(var0);
                var1 = var0.PressableHighlight;
                var0 = {};
                var9 = 'button';
                var0.accessibilityRole = var9;
                var9 = var32.rowActive;
                var9 = var9.backgroundColor;
                var0.underlayColor = var9;
                var0.onPress = var8;
                var9 = var32.pressable;
                var8 = new Array(2);
                var8[0] = var9;
                var9 = {};
                var10 = var20.container;
                var10 = var10.borderRadius;
                var9.borderRadius = var10;
                var8[1] = var9;
                var0.style = var8;
                var8 = 21;
                var8 = var28[var8];
                var11 = var29.bind(var7)(var8);
                var10 = var11.renderChannelWrapper;
                var13 = _closure1_slot10;
                var9 = _closure1_slot11;
                var8 = {};
                var17 = _closure1_slot4;
                var14 = {};
                var16 = var32.avatar;
                var14.style = var16;
                var25 = _closure1_slot1;
                var16 = 22;
                var16 = var28[var16];
                var25 = var25.bind(var7)(var16);
                var16 = {};
                var26 = var24.user;
                var16.user = var26;
                var16.guildId = var7;
                var26 = var20.icon;
                var26 = var26.avatarSize;
                var16.size = var26;
                var26 = !var18;
                var16.animate = var26;
                var16 = var6.bind(var7)(var25, var16);
                var14.children = var16;
                var16 = var6.bind(var7)(var17, var14);
                var14 = new Array(3);
                var14[0] = var16;
                var16 = {};
                var25 = var32.textContainer;
                var16.style = var25;
                var25 = 23;
                var25 = var28[var25];
                var25 = var29.bind(var7)(var25);
                var26 = var25.Text;
                var25 = {
                    'lineClamp': 1,
                    'variant': null,
                    'color': 'text-default'
                };
                var33 = var20.channelName;
                var33 = var33.text;
                var33 = var33.variant;
                var25.variant = var33;
                var32 = var32.nameText;
                var25.style = var32;
                var25.children = var27;
                var26 = var6.bind(var7)(var26, var25);
                var25 = new Array(2);
                var25[0] = var26;
                var26 = {};
                var27 = {};
                var36 = 9;
                var28 = var28[var36];
                var29 = var29.bind(var7)(var28);
                var28 = var29.isAndroid;
                var29 = var28.bind(var29)();
                var28 = 0;
                if (!var29) {
                    _fun103307_ip = 1005;
                    continue _fun103307
                }
            case 999:
                var28 = -2;
            case 1005:
                var27.marginTop = var28;
                var26.style = var27;
                var29 = _closure1_slot9;
                var35 = _closure1_slot0;
                var34 = _closure1_slot2;
                var27 = 24;
                var27 = var34[var27];
                var27 = var35.bind(var7)(var27);
                var28 = var27.ActionStatusSubLabel;
                var27 = {};
                var32 = var20.messagePreview;
                var32 = var32.height;
                var34 = var34[var36];
                var35 = var35.bind(var7)(var34);
                var34 = var35.isAndroid;
                var34 = var34.bind(var35)();
                var33 = 0;
                if (!var34) {
                    _fun103307_ip = 1083;
                    continue _fun103307
                }
            case 1080:
                var33 = 2;
            case 1083:
                var32 = var32 + var33;
                var27.lineHeight = var32;
                var20 = var20.messagePreview;
                var20 = var20.text;
                var20 = var20.variant;
                var27.textVariant = var20;
                var27.actioned = var23;
                var20 = 1.75;
                var27.maxFontSizeMultiplier = var20;
                var20 = global;
                var20 = var20.HermesInternal;
                var20 = var20.concat;
                var20 = var20.bind(var31)(var21, var30);
                var27.label = var20;
                var21 = _closure1_slot0;
                var20 = _closure1_slot2;
                var30 = 17;
                var31 = var20[var30];
                var31 = var21.bind(var7)(var31);
                var32 = var31.intl;
                var31 = var32.string;
                var30 = var20[var30];
                var30 = var21.bind(var7)(var30);
                var30 = var30.t;
                var30 = var30.Kzyxm9;
                var30 = var31.bind(var32)(var30);
                var27.actionStatus = var30;
                var30 = !var18;
                var27.animate = var30;
                var27 = var29.bind(var7)(var28, var27);
                var26.children = var27;
                var26 = var6.bind(var7)(var17, var26);
                var25[1] = var26;
                var16.children = var25;
                var16 = var13.bind(var7)(var17, var16);
                var14[1] = var16;
                var17 = _closure1_slot9;
                var15 = 25;
                var15 = var20[var15];
                var15 = var21.bind(var7)(var15);
                var16 = var15.ContactSuggestionActions;
                var15 = {};
                var24 = var24.user;
                var15.user = var24;
                var15.added = var23;
                var20 = var20[var22];
                var21 = var21.bind(var7)(var20);
                var20 = var21.isLayoutCozy;
                var21 = var20.bind(var21)(var5);
                var20 = 'sm';
                if (!var21) {
                    _fun103307_ip = 1327;
                    continue _fun103307
                }
            case 1323:
                var20 = 'md';
            case 1327:
                var15.size = var20;
                var20 = function arg0() {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 26;
                    var2 = var2[var0];
                    var0 = undefined;
                    var6 = var3.bind(var0)(var2);
                    var5 = var6.track;
                    var1 = _closure1_slot7;
                    var4 = var1.FRIEND_SUGGESTION_ADDED;
                    var3 = {};
                    var1 = arg0;
                    var1 = var1.id;
                    var3.suggested_user_id = var1;
                    var2 = _closure2_slot0;
                    var7 = var2.source;
                    var3.suggestion_source = var7;
                    var7 = 'Notifications Tab';
                    var3.location = var7;
                    var3 = var5.bind(var6)(var4, var3);
                    var1 = _closure2_slot1;
                    var1 = var1.bind(var0)(var2);
                    return var0;
                };
                var15.onAddSuggestion = var20;
                var19 = function() {
                    var2 = _closure2_slot2;
                    var1 = _closure2_slot0;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var15.onFinishAnimation = var19;
                var18 = !var18;
                var15.animate = var18;
                var15 = var17.bind(var7)(var16, var15);
                var14[2] = var15;
                var8.children = var14;
                var9 = var13.bind(var7)(var9, var8);
                var8 = {};
                var8.layout = var5;
                var8.fontScale = var12;
                var8.panelVariant = var4;
                var8 = var10.bind(var11)(var9, var8);
                var0.children = var8;
                var1 = var6.bind(var7)(var1, var0);
                var0 = {};
                var0.layout = var5;
                var0.panelVariant = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1298, 3100, 660, 33, 1297, 8801, 671, 478, 5726, 4090, 632, 7350, 1307, 3236, 13218, 1234, 3720, 13496, 4902, 13497, 5452, 3941, 13498, 13499, 795, 2]);