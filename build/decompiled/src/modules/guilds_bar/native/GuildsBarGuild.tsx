// modules/guilds_bar/native/GuildsBarGuild.tsx
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
    var8 = var3.StyleSheet;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var9 = var3.getGuildIconSource;
    var _closure1_slot4 = var9;
    var3 = var3.getGuildIconURL;
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
    var3 = var7.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.useItemDragState;
    var _closure1_slot11 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var10 = var3.GUILD_ITEM_SIZE;
    var _closure1_slot12 = var10;
    var3 = var3.TRANSITION_PHYSICS;
    var _closure1_slot13 = var3;
    var3 = 10;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AnalyticEvents;
    var _closure1_slot14 = var3;
    var3 = 11;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.Fragment;
    var _closure1_slot15 = var7;
    var7 = var3.jsxs;
    var _closure1_slot16 = var7;
    var3 = var3.jsx;
    var _closure1_slot17 = var3;
    var7 = var8.create;
    var3 = {};
    var9 = {};
    var9.width = var10;
    var9.height = var10;
    var3.guildIcon = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot18 = var3;
    var3 = {};
    var7 = "function GuildsBarGuildTsx1(values){const{dragDropInProgress,sharedId,guildId,isDragTarget,withSpring,TRANSITION_PHYSICS}=this.__closure;var _guildId;const shouldAnimate=dragDropInProgress.get()&&sharedId.get()===guildId&&!isDragTarget;sharedId.set((_guildId=guildId)!==null&&_guildId!==void 0?_guildId:null);return{animations:{originY:shouldAnimate?withSpring(values.targetOriginY,TRANSITION_PHYSICS,'animate-always'):values.targetOriginY,height:shouldAnimate?withSpring(values.targetHeight,TRANSITION_PHYSICS,'animate-always'):values.targetHeight},initialValues:{originY:values.currentOriginY,height:values.currentHeight}};}";
    var3.code = var7;
    var _closure1_slot19 = var3;
    var3 = var6.memo;
    var1 = function arg0() {
        _fun101017: for (var _fun101017_ip = 0;;) switch (_fun101017_ip) {
            case 0:
                var0 = arg0;
                var11 = var0.guildId;
                var _closure2_slot0 = var11;
                var6 = var0.isDragPreview;
                var3 = undefined;
                if (!(var6 === var3)) {
                    _fun101017_ip = 28;
                    continue _fun101017
                }
            case 26:
                var6 = false;
            case 28:
                var _closure2_slot1 = var3;
                var _closure2_slot2 = var3;
                var _closure2_slot3 = var3;
                var _closure2_slot4 = var3;
                var _closure2_slot5 = var3;
                var _closure2_slot6 = var3;
                var _closure2_slot7 = var3;
                var _closure2_slot8 = var3;
                var30 = _closure1_slot0;
                var25 = _closure1_slot2;
                var0 = 12;
                var1 = var25[var0];
                var5 = var30.bind(var3)(var1);
                var4 = var5.useGuildsBarAnimatedWrapperStyles;
                var1 = true;
                var7 = var4.bind(var5)(var1, var1);
                var1 = 13;
                var4 = var25[var1];
                var12 = var30.bind(var3)(var4);
                var10 = var12.useStateFromStoresObject;
                var4 = _closure1_slot9;
                var9 = new Array(3);
                var9[0] = var4;
                var4 = _closure1_slot6;
                var9[1] = var4;
                var4 = _closure1_slot7;
                var9[2] = var4;
                var5 = new Array(1);
                var5[0] = var11;
                var4 = function() { // Environment: var2
                    var0 = {};
                    var3 = _closure1_slot9;
                    var2 = var3.getGuildId;
                    var2 = var2.bind(var3)();
                    var3 = _closure2_slot0;
                    var2 = var2 === var3;
                    var0.selected = var2;
                    var4 = _closure1_slot6;
                    var2 = var4.isUnavailable;
                    var2 = var2.bind(var4)(var3);
                    var0.isUnavailable = var2;
                    var2 = _closure1_slot7;
                    var1 = var2.hasUnread;
                    var1 = var1.bind(var2)(var3);
                    var0.unread = var1;
                    var1 = var2.getMentionCount;
                    var1 = var1.bind(var2)(var3);
                    var0.mentionCount = var1;
                    var1 = var2.getIsMentionLowImportance;
                    var1 = var1.bind(var2)(var3);
                    var0.isMentionLowImportance = var1;
                    return var0;
                };
                var9 = var10.bind(var12)(var9, var4, var5);
                var10 = var9.selected;
                _closure2_slot1 = var10;
                var4 = var9.isUnavailable;
                _closure2_slot2 = var4;
                var5 = var9.mentionCount;
                _closure2_slot3 = var5;
                var17 = var9.unread;
                _closure2_slot4 = var17;
                var14 = var9.isMentionLowImportance;
                var1 = var25[var1];
                var18 = var30.bind(var3)(var1);
                var16 = var18.useStateFromStores;
                var1 = _closure1_slot8;
                var15 = new Array(1);
                var15[0] = var1;
                var13 = new Array(2);
                var13[0] = var11;
                var13[1] = var10;
                var1 = _closure1_slot1;
                var9 = 15;
                var9 = var25[var9];
                var31 = var1.bind(var3)(var9);
                var33 = function() { // Environment: var2
                    _fun101019: for (var _fun101019_ip = 0;;) switch (_fun101019_ip) {
                        case 0:
                            var4 = _closure1_slot8;
                            var1 = var4.getGuild;
                            var0 = _closure2_slot0;
                            var6 = var1.bind(var4)(var0);
                            var4 = null;
                            var0 = var4 != var6;
                            var5 = undefined;
                            var1 = undefined;
                            if (!var0) {
                                _fun101019_ip = 56;
                                continue _fun101019
                            }
                        case 37:
                            var8 = _closure1_slot5;
                            var7 = _closure1_slot12;
                            var0 = _closure2_slot1;
                            var1 = var8.bind(var5)(var6, var7, var0);
                        case 56:
                            var0 = {};
                            var8 = var4 == var6;
                            var7 = undefined;
                            if (var8) {
                                _fun101019_ip = 72;
                                continue _fun101019
                            }
                        case 67:
                            var7 = var6.name;
                        case 72:
                            var0.guildName = var7;
                            var0.icon = var1;
                            var7 = var4 != var1;
                            var1 = undefined;
                            if (!var7) {
                                _fun101019_ip = 165;
                                continue _fun101019
                            }
                        case 90:
                            var4 = var4 != var6;
                            var1 = undefined;
                            if (!var4) {
                                _fun101019_ip = 165;
                                continue _fun101019
                            }
                        case 99:
                            var4 = _closure1_slot4;
                            var8 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var3 = 14;
                            var7 = var9[var3];
                            var7 = var8.bind(var5)(var7);
                            var7 = var7.ImageSizes;
                            var3 = var9[var3];
                            var3 = var8.bind(var5)(var3);
                            var3 = var3.GuildIconSizes;
                            var3 = var3.LARGE;
                            var3 = var7[var3];
                            var2 = _closure2_slot1;
                            var1 = var4.bind(var5)(var6, var3, var2);
                        case 165:
                            var0.asset = var1;
                            return var0;
                    }
                };
                var35 = var18;
                var34 = var15;
                var32 = var13;
                var12 = var35[var16](var34, var33, var32, var31, var30);
                var18 = var12.asset;
                var9 = var12.icon;
                var12 = var12.guildName;
                _closure2_slot5 = var12;
                var13 = 16;
                var13 = var25[var13];
                var13 = var1.bind(var3)(var13);
                var13 = var13.bind(var3)(var11, var5, var14);
                var15 = var13.badgeTopRight;
                var14 = var13.badgeBottomRight;
                var22 = var13.cutouts;
                var27 = _closure1_slot3;
                var19 = var27.useMemo;
                var16 = new Array(2);
                var16[0] = var11;
                var16[1] = var4;
                var13 = function() { // Environment: var2
                    var0 = {};
                    var1 = function() {
                        _fun101021: for (var _fun101021_ip = 0;;) switch (_fun101021_ip) {
                            case 0:
                                var4 = _closure1_slot8;
                                var2 = var4.getGuild;
                                var0 = _closure2_slot0;
                                var2 = var2.bind(var4)(var0);
                                var0 = null;
                                if (!(var0 != var2)) {
                                    _fun101021_ip = 177;
                                    continue _fun101021
                                }
                            case 33:
                                var0 = _closure2_slot2;
                                if (var0) {
                                    _fun101021_ip = 177;
                                    continue _fun101021
                                }
                            case 43:
                                var2 = _closure1_slot10;
                                var0 = var2.getGuildFolders;
                                var4 = var0.bind(var2)();
                                var2 = var4.findIndex;
                                var0 = function(arg0) { // Environment: var0
                                    var0 = arg0;
                                    var2 = var0.guildIds;
                                    var1 = var2.includes;
                                    var0 = _closure2_slot0;
                                    var0 = var1.bind(var2)(var0);
                                    return var0;
                                };
                                var6 = var2.bind(var4)(var0);
                                var0 = -1;
                                if (!(var6 > var0)) {
                                    _fun101021_ip = 144;
                                    continue _fun101021
                                }
                            case 87:
                                var4 = _closure1_slot1;
                                var2 = _closure1_slot2;
                                var0 = 19;
                                var2 = var2[var0];
                                var0 = undefined;
                                var5 = var4.bind(var0)(var2);
                                var4 = var5.track;
                                var0 = _closure1_slot14;
                                var2 = var0.GUILD_CLICKED;
                                var0 = {};
                                var7 = _closure2_slot0;
                                var0.guild_id = var7;
                                var0.index = var6;
                                var0 = var4.bind(var5)(var2, var0);
                            case 144:
                                var4 = _closure1_slot1;
                                var2 = _closure1_slot2;
                                var0 = 20;
                                var2 = var2[var0];
                                var0 = undefined;
                                var2 = var4.bind(var0)(var2);
                                var1 = _closure2_slot0;
                                var1 = var2.bind(var0)(var1);
                                return var0;
                            case 177:
                                var1 = _closure1_slot1;
                                var8 = _closure1_slot2;
                                var0 = 17;
                                var0 = var8[var0];
                                var7 = undefined;
                                var2 = var1.bind(var7)(var0);
                                var1 = var2.show;
                                var0 = {};
                                var6 = _closure1_slot0;
                                var3 = 18;
                                var4 = var8[var3];
                                var4 = var6.bind(var7)(var4);
                                var9 = var4.intl;
                                var5 = var9.string;
                                var4 = var8[var3];
                                var4 = var6.bind(var7)(var4);
                                var4 = var4.t;
                                var4 = var4.R0RpRX;
                                var4 = var5.bind(var9)(var4);
                                var0.title = var4;
                                var4 = var8[var3];
                                var4 = var6.bind(var7)(var4);
                                var5 = var4.intl;
                                var4 = var5.string;
                                var3 = var8[var3];
                                var3 = var6.bind(var7)(var3);
                                var3 = var3.t;
                                var3 = var3.m9gRVN;
                                var3 = var4.bind(var5)(var3);
                                var0.body = var3;
                                var0 = var1.bind(var2)(var0);
                                return var0;
                        }
                    };
                    var0.onPress = var1;
                    return var0;
                };
                var13 = var19.bind(var27)(var13, var16);
                var19 = var27.useMemo;
                var16 = new Array(3);
                var16[0] = var12;
                var16[1] = var5;
                var16[2] = var17;
                var5 = function() { // Environment: var2
                    _fun101023: for (var _fun101023_ip = 0;;) switch (_fun101023_ip) {
                        case 0:
                            var1 = _closure2_slot3;
                            var0 = null;
                            if (!(var0 != var1)) {
                                _fun101023_ip = 26;
                                continue _fun101023
                            }
                        case 13:
                            var1 = _closure2_slot3;
                            var0 = 0;
                            if (!(!(var1 > var0))) {
                                _fun101023_ip = 193;
                                continue _fun101023
                            }
                        case 26:
                            var1 = _closure2_slot4;
                            var0 = true;
                            if (!(var0 !== var1)) {
                                _fun101023_ip = 119;
                                continue _fun101023
                            }
                        case 36:
                            var4 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var0 = 18;
                            var2 = var6[var0];
                            var1 = undefined;
                            var2 = var4.bind(var1)(var2);
                            var3 = var2.intl;
                            var2 = var3.formatToPlainString;
                            var0 = var6[var0];
                            var0 = var4.bind(var1)(var0);
                            var0 = var0.t;
                            var1 = var0["/uzRss"];
                            var0 = {};
                            var4 = _closure2_slot5;
                            var0.guildName = var4;
                            var4 = _closure2_slot3;
                            var0.mentions = var4;
                            var0 = var2.bind(var3)(var1, var0);
                            _fun101023_ip = 191;
                            continue _fun101023;
                        case 119:
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var1 = 18;
                            var3 = var7[var1];
                            var2 = undefined;
                            var3 = var6.bind(var2)(var3);
                            var4 = var3.intl;
                            var3 = var4.formatToPlainString;
                            var1 = var7[var1];
                            var1 = var6.bind(var2)(var1);
                            var1 = var1.t;
                            var2 = var1.lzqe42;
                            var1 = {};
                            var6 = _closure2_slot5;
                            var1.guildName = var6;
                            var0 = var3.bind(var4)(var2, var1);
                        case 191:
                            _fun101023_ip = 274;
                            continue _fun101023;
                        case 193:
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var1 = 18;
                            var3 = var7[var1];
                            var2 = undefined;
                            var3 = var6.bind(var2)(var3);
                            var4 = var3.intl;
                            var3 = var4.formatToPlainString;
                            var1 = var7[var1];
                            var1 = var6.bind(var2)(var1);
                            var1 = var1.t;
                            var2 = var1["/uzRss"];
                            var1 = {};
                            var6 = _closure2_slot5;
                            var1.guildName = var6;
                            var5 = _closure2_slot3;
                            var1.mentions = var5;
                            var0 = var3.bind(var4)(var2, var1);
                        case 274:
                            return var0;
                    }
                };
                var16 = var19.bind(var27)(var5, var16);
                var5 = 21;
                var5 = var25[var5];
                var5 = var1.bind(var3)(var5);
                var9 = var5.bind(var3)(var11, var9, var18);
                var5 = _closure1_slot11;
                var5 = var5.bind(var3)(var11, var6);
                var6 = var5.isDragTarget;
                _closure2_slot6 = var6;
                var20 = var5.dragState;
                var18 = var5.overState;
                var24 = var5.itemSize;
                var28 = var5.dragDropInProgress;
                _closure2_slot7 = var28;
                var21 = var27.useMemo;
                var19 = new Array(1);
                var19[0] = var11;
                var5 = function() { // Environment: var2
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var0 = 22;
                    var0 = var3[var0];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var0);
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
                        _fun101026: for (var _fun101026_ip = 0;;) switch (_fun101026_ip) {
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
                                    _fun101026_ip = 51;
                                    continue _fun101026
                                }
                            case 42:
                                var2 = var1.action;
                                var0 = var3 == var2;
                            case 51:
                                if (var0) {
                                    _fun101026_ip = 63;
                                    continue _fun101026
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
                var5 = var21.bind(var27)(var5, var19);
                var23 = var5.accessibilityActions;
                var21 = var5.onAccessibilityAction;
                var5 = 23;
                var5 = var25[var5];
                var19 = var30.bind(var3)(var5);
                var5 = var19.useSharedValue;
                var19 = var5.bind(var19)(var11);
                _closure2_slot8 = var19;
                var26 = var27.useCallback;
                var5 = function arg0() {
                    _fun101028: for (var _fun101028_ip = 0;;) switch (_fun101028_ip) {
                        case 0:
                            var2 = arg0;
                            var1 = _closure2_slot7;
                            var0 = var1.get;
                            var3 = var0.bind(var1)();
                            if (!var3) {
                                _fun101028_ip = 43;
                                continue _fun101028
                            }
                        case 22:
                            var1 = _closure2_slot8;
                            var0 = var1.get;
                            var1 = var0.bind(var1)();
                            var0 = _closure2_slot0;
                            var3 = var1 === var0;
                        case 43:
                            if (!var3) {
                                _fun101028_ip = 53;
                                continue _fun101028
                            }
                        case 46:
                            var0 = _closure2_slot6;
                            var3 = !var0;
                        case 53:
                            var4 = _closure2_slot8;
                            var1 = var4.set;
                            var6 = _closure2_slot0;
                            var0 = null;
                            var6 = var0 != var6;
                            if (!var6) {
                                _fun101028_ip = 79;
                                continue _fun101028
                            }
                        case 75:
                            var0 = _closure2_slot0;
                        case 79:
                            var0 = var1.bind(var4)(var0);
                            var0 = {};
                            var1 = {};
                            if (var3) {
                                _fun101028_ip = 99;
                                continue _fun101028
                            }
                        case 91:
                            var4 = var2.targetOriginY;
                            _fun101028_ip = 152;
                            continue _fun101028;
                        case 99:
                            var8 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var6 = 24;
                            var7 = var7[var6];
                            var6 = undefined;
                            var9 = var8.bind(var6)(var7);
                            var8 = var9.withSpring;
                            var7 = var2.targetOriginY;
                            var6 = _closure1_slot13;
                            var5 = 'animate-always';
                            var4 = var8.bind(var9)(var7, var6, var5);
                        case 152:
                            var1.originY = var4;
                            if (var3) {
                                _fun101028_ip = 168;
                                continue _fun101028
                            }
                        case 160:
                            var3 = var2.targetHeight;
                            _fun101028_ip = 221;
                            continue _fun101028;
                        case 168:
                            var7 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var5 = 24;
                            var6 = var6[var5];
                            var5 = undefined;
                            var8 = var7.bind(var5)(var6);
                            var7 = var8.withSpring;
                            var6 = var2.targetHeight;
                            var5 = _closure1_slot13;
                            var4 = 'animate-always';
                            var3 = var7.bind(var8)(var6, var5, var4);
                        case 221:
                            var1.height = var3;
                            var0.animations = var1;
                            var1 = {};
                            var3 = var2.currentOriginY;
                            var1.originY = var3;
                            var2 = var2.currentHeight;
                            var1.height = var2;
                            var0.initialValues = var1;
                            return var0;
                    }
                };
                var2 = {};
                var2.dragDropInProgress = var28;
                var2.sharedId = var19;
                var2.guildId = var11;
                var2.isDragTarget = var6;
                var29 = 24;
                var29 = var25[var29];
                var29 = var30.bind(var3)(var29);
                var29 = var29.withSpring;
                var2.withSpring = var29;
                var29 = _closure1_slot13;
                var2.TRANSITION_PHYSICS = var29;
                var5.__closure = var2;
                var2 = 14096669603718.0;
                var5.__workletHash = var2;
                var2 = _closure1_slot19;
                var5.__initData = var2;
                var2 = new Array(4);
                var2[0] = var11;
                var2[1] = var19;
                var2[2] = var6;
                var2[3] = var28;
                var5 = var26.bind(var27)(var5, var2);
                var2 = _closure1_slot17;
                var0 = var25[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var0.id = var11;
                var0.draggedItemSize = var24;
                var0.accessibilityActions = var23;
                var0.onAccessibilityAction = var21;
                var21 = undefined;
                if (var6) {
                    _fun101017_ip = 706;
                    continue _fun101017
                }
            case 703:
                var21 = var22;
            case 706:
                var0.cutouts = var21;
                var0.selected = var10;
                var0.isDragTarget = var6;
                var0.dragState = var20;
                var0.sharedId = var19;
                var19 = !var10;
                var0.circle = var19;
                var0.overState = var18;
                var0.unread = var17;
                var0.label = var16;
                var0.config = var13;
                var0.styles = var7;
                var0.isDragPreview = var6;
                var0.layout = var5;
                var7 = _closure1_slot16;
                var6 = _closure1_slot15;
                var5 = {};
                var13 = new Array(2);
                var13[0] = var15;
                var13[1] = var14;
                var5.children = var13;
                var5 = var7.bind(var3)(var6, var5);
                var0.externalChildren = var5;
                var7 = _closure1_slot17;
                var6 = _closure1_slot1;
                var13 = _closure1_slot2;
                var5 = 25;
                var5 = var13[var5];
                var6 = var6.bind(var3)(var5);
                var5 = {};
                var5.guildId = var11;
                var5 = var7.bind(var3)(var6, var5);
                var0.expandedChildren = var5;
                if (var4) {
                    _fun101017_ip = 991;
                    continue _fun101017
                }
            case 856:
                var4 = null;
                if (!(var4 == var9)) {
                    _fun101017_ip = 939;
                    continue _fun101017
                }
            case 862:
                var6 = _closure1_slot17;
                var5 = _closure1_slot1;
                var11 = _closure1_slot2;
                var7 = 14;
                var4 = var11[var7];
                var5 = var5.bind(var3)(var4);
                var4 = {};
                var4.value = var12;
                var4.selected = var10;
                var4.animate = var10;
                var10 = _closure1_slot0;
                var7 = var11[var7];
                var7 = var10.bind(var3)(var7);
                var7 = var7.GuildIconSizes;
                var7 = var7.LARGE;
                var4.size = var7;
                var4 = var6.bind(var3)(var5, var4);
                _fun101017_ip = 989;
                continue _fun101017;
            case 939:
                var7 = _closure1_slot17;
                var6 = _closure1_slot1;
                var10 = _closure1_slot2;
                var5 = 26;
                var5 = var10[var5];
                var6 = var6.bind(var3)(var5);
                var5 = {};
                var5.source = var9;
                var9 = _closure1_slot18;
                var9 = var9.guildIcon;
                var5.style = var9;
                var4 = var7.bind(var3)(var6, var5);
            case 989:
                _fun101017_ip = 1053;
                continue _fun101017;
            case 991:
                var7 = _closure1_slot17;
                var10 = _closure1_slot1;
                var11 = _closure1_slot2;
                var5 = 26;
                var5 = var11[var5];
                var6 = var10.bind(var3)(var5);
                var5 = {};
                var9 = 27;
                var9 = var11[var9];
                var9 = var10.bind(var3)(var9);
                var5.source = var9;
                var8 = _closure1_slot18;
                var8 = var8.guildIcon;
                var5.style = var8;
                var4 = var7.bind(var3)(var6, var5);
            case 1053:
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 28;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guilds_bar/native/GuildsBarGuild.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1416, 4002, 8641, 1410, 3213, 4376, 13133, 13134, 660, 33, 13145, 566, 7396, 13165, 13166, 4003, 1234, 795, 13159, 13173, 13136, 3720, 4081, 13174, 4704, 13176, 2]);