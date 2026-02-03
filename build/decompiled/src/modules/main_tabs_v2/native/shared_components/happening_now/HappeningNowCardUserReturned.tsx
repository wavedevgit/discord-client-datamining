// modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCardUserReturned.tsx
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
    var3 = var5[var0];
    var0 = undefined;
    var3 = var7.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = metroImportAll;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot4 = var6;
    var10 = 2;
    var3 = var5[var10];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
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
    var3 = var4.bind(var0)(var3);
    var3 = var3.HappeningNowCardTrackingType;
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AnalyticEvents;
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot10 = var7;
    var3 = var3.jsxs;
    var _closure1_slot11 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AvatarSizes;
    var3 = var3.LARGE;
    var _closure1_slot12 = var3;
    var3 = 9;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {
        'flexShrink': 1,
        'flexDirection': 'row',
        'alignItems': 'center'
    };
    var3.content = var9;
    var9 = {};
    var11 = 12;
    var9.marginLeft = var11;
    var3.contentText = var9;
    var9 = {};
    var9.marginBottom = var10;
    var3.contentTextTitle = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot13 = var3;
    var3 = {};
    var7 = 'function HappeningNowCardUserReturnedTsx1(){const{viewableCardKeys,cardKey}=this.__closure;return viewableCardKeys.get().find(function(key){return key===cardKey;})!=null;}';
    var3.code = var7;
    var _closure1_slot14 = var3;
    var3 = {};
    var7 = 'function HappeningNowCardUserReturnedTsx2(isViewable,previous){const{runOnJS,setHasViewed}=this.__closure;if(!isViewable||isViewable===previous)return;runOnJS(setHasViewed)(true);}';
    var3.code = var7;
    var _closure1_slot15 = var3;
    var3 = var6.memo;
    var1 = function(arg0) { // Environment: var1
        _fun101681: for (var _fun101681_ip = 0;;) switch (_fun101681_ip) {
            case 0:
                var0 = arg0;
                var12 = var0.index;
                var _closure2_slot0 = var12;
                var11 = var0.userId;
                var _closure2_slot1 = var11;
                var22 = var0.guildId;
                var _closure2_slot2 = var22;
                var7 = var0.fullwidth;
                var18 = var0.cardKey;
                var _closure2_slot3 = var18;
                var5 = var0.panelVariant;
                var4 = undefined;
                if (!(var5 === var4)) {
                    _fun101681_ip = 62;
                    continue _fun101681
                }
            case 60:
                var5 = false;
            case 62:
                var _closure2_slot4 = var4;
                var _closure2_slot5 = var4;
                var _closure2_slot6 = var4;
                var _closure2_slot7 = var4;
                var _closure2_slot8 = var4;
                var _closure2_slot9 = var4;
                var _closure2_slot10 = var4;
                var0 = _closure1_slot13;
                var19 = var0.bind(var4)();
                var8 = _closure1_slot1;
                var13 = _closure1_slot2;
                var0 = 10;
                var0 = var13[var0];
                var0 = var8.bind(var4)(var0);
                var0 = var0.bind(var4)();
                var2 = var0.analyticsLocations;
                _closure2_slot4 = var2;
                var23 = _closure1_slot0;
                var9 = 11;
                var0 = var13[var9];
                var15 = var23.bind(var4)(var0);
                var14 = var15.useStateFromStores;
                var0 = _closure1_slot7;
                var6 = new Array(1);
                var6[0] = var0;
                var3 = new Array(1);
                var3[0] = var11;
                var0 = function() { // Environment: var1
                    var2 = _closure1_slot7;
                    var1 = var2.getUser;
                    var0 = _closure2_slot1;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var16 = var14.bind(var15)(var6, var0, var3);
                _closure2_slot5 = var16;
                var17 = _closure1_slot4;
                var3 = var17.useContext;
                var0 = 12;
                var0 = var13[var0];
                var0 = var23.bind(var4)(var0);
                var0 = var0.ViewableHappeningNowCardKeysContext;
                var24 = var3.bind(var17)(var0);
                _closure2_slot6 = var24;
                var0 = var17.useRef;
                var0 = var0.bind(var17)(var18);
                _closure2_slot7 = var0;
                var6 = var17.useState;
                var0 = var24.get;
                var14 = var0.bind(var24)();
                var3 = var14.find;
                var0 = function(arg0) { // Environment: var1
                    var1 = _closure2_slot3;
                    var0 = arg0;
                    var0 = var0 === var1;
                    return var0;
                };
                var3 = var3.bind(var14)(var0);
                var0 = null;
                var3 = var0 != var3;
                var14 = var6.bind(var17)(var3);
                var6 = _closure1_slot3;
                var3 = 2;
                var14 = var6.bind(var4)(var14, var3);
                var3 = 0;
                var3 = var14[var3];
                var6 = 1;
                var20 = var14[var6];
                _closure2_slot8 = var20;
                var6 = var17.useRef;
                var6 = var6.bind(var17)(var24);
                _closure2_slot9 = var6;
                var14 = var17.useEffect;
                var6 = function() { // Environment: var1
                    var1 = _closure2_slot9;
                    var0 = _closure2_slot6;
                    var1.current = var0;
                    var0 = undefined;
                    return var0;
                };
                var6 = var14.bind(var17)(var6);
                var15 = var17.useEffect;
                var14 = new Array(1);
                var14[0] = var18;
                var6 = function() { // Environment: var1
                    _fun101685: for (var _fun101685_ip = 0;;) switch (_fun101685_ip) {
                        case 0:
                            var2 = _closure2_slot3;
                            var1 = _closure2_slot7;
                            var1 = var1.current;
                            if (!(var2 !== var1)) {
                                _fun101685_ip = 88;
                                continue _fun101685
                            }
                        case 20:
                            var2 = _closure2_slot7;
                            var1 = _closure2_slot3;
                            var2.current = var1;
                            var2 = _closure2_slot8;
                            var0 = _closure2_slot9;
                            var1 = var0.current;
                            var0 = var1.get;
                            var3 = var0.bind(var1)();
                            var1 = var3.find;
                            var0 = function(arg0) { // Environment: var0
                                var1 = _closure2_slot3;
                                var0 = arg0;
                                var0 = var0 === var1;
                                return var0;
                            };
                            var1 = var1.bind(var3)(var0);
                            var0 = null;
                            var1 = var0 != var1;
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                        case 88:
                            var0 = undefined;
                            return var0;
                    }
                };
                var6 = var15.bind(var17)(var6, var14);
                var21 = 13;
                var6 = var13[var21];
                var17 = var23.bind(var4)(var6);
                var15 = var17.useAnimatedReaction;
                var14 = function() {
                    var1 = _closure2_slot6;
                    var0 = var1.get;
                    var2 = var0.bind(var1)();
                    var1 = var2.find;
                    var0 = function(arg0) { // Environment: var0
                        var1 = _closure2_slot3;
                        var0 = arg0;
                        var0 = var0 === var1;
                        return var0;
                    };
                    var1 = var1.bind(var2)(var0);
                    var0 = null;
                    var0 = var0 != var1;
                    return var0;
                };
                var6 = {};
                var6.viewableCardKeys = var24;
                var6.cardKey = var18;
                var14.__closure = var6;
                var6 = 2084761019690.0;
                var14.__workletHash = var6;
                var6 = _closure1_slot14;
                var14.__initData = var6;
                var6 = function arg0, arg1() {
                    _fun101689: for (var _fun101689_ip = 0;;) switch (_fun101689_ip) {
                        case 0:
                            var2 = arg0;
                            var0 = var2;
                            if (!var0) {
                                _fun101689_ip = 16;
                                continue _fun101689
                            }
                        case 9:
                            var1 = arg1;
                            var0 = var2 !== var1;
                        case 16:
                            if (!var0) {
                                _fun101689_ip = 68;
                                continue _fun101689
                            }
                        case 19:
                            var1 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var0 = 13;
                            var0 = var2[var0];
                            var2 = undefined;
                            var3 = var1.bind(var2)(var0);
                            var1 = var3.runOnJS;
                            var0 = _closure2_slot8;
                            var1 = var1.bind(var3)(var0);
                            var0 = true;
                            var0 = var1.bind(var2)(var0);
                        case 68:
                            var0 = undefined;
                            return var0;
                    }
                };
                var18 = {};
                var21 = var13[var21];
                var21 = var23.bind(var4)(var21);
                var21 = var21.runOnJS;
                var18.runOnJS = var21;
                var18.setHasViewed = var20;
                var6.__closure = var18;
                var18 = 10943750422586.0;
                var6.__workletHash = var18;
                var18 = _closure1_slot15;
                var6.__initData = var18;
                var6 = var15.bind(var17)(var14, var6);
                var6 = 14;
                var6 = var13[var6];
                var6 = var8.bind(var4)(var6);
                if (var3) {
                    _fun101681_ip = 532;
                    continue _fun101681
                }
            case 528:
                var3 = {};
                _fun101681_ip = 612;
                continue _fun101681;
            case 532:
                var8 = {};
                var14 = _closure1_slot0;
                var15 = _closure1_slot2;
                var13 = 15;
                var17 = var15[var13];
                var17 = var14.bind(var4)(var17);
                var17 = var17.ImpressionTypes;
                var17 = var17.VIEW;
                var8.type = var17;
                var13 = var15[var13];
                var13 = var14.bind(var4)(var13);
                var13 = var13.ImpressionNames;
                var13 = var13.USER_RETURNED_HAPPENING_NOW;
                var8.name = var13;
                var13 = {};
                var13.returned_user_id = var11;
                var8.properties = var13;
                var3 = var8;
            case 612:
                var3 = var6.bind(var4)(var3);
                var8 = _closure1_slot4;
                var6 = var8.useCallback;
                var3 = new Array(5);
                var3[0] = var12;
                var3[1] = var22;
                var3[2] = var11;
                var3[3] = var16;
                var3[4] = var2;
                var2 = function() { // Environment: var1
                    _fun101690: for (var _fun101690_ip = 0;;) switch (_fun101690_ip) {
                        case 0:
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var0 = 16;
                            var2 = var2[var0];
                            var0 = undefined;
                            var6 = var3.bind(var0)(var2);
                            var5 = var6.track;
                            var2 = _closure1_slot9;
                            var4 = var2.ACTIVITY_CARD_CLICKED;
                            var3 = {};
                            var7 = _closure2_slot0;
                            var3.order = var7;
                            var7 = _closure2_slot2;
                            var3.guild_id = var7;
                            var7 = _closure1_slot8;
                            var7 = var7.USER_RETURNED_CARD;
                            var3.type = var7;
                            var8 = _closure2_slot1;
                            var7 = new Array(1);
                            var7[0] = var8;
                            var3.highlighted_user_ids = var7;
                            var3 = var5.bind(var6)(var4, var3);
                            var3 = _closure2_slot5;
                            var2 = null;
                            if (!(var2 != var3)) {
                                _fun101690_ip = 166;
                                continue _fun101690
                            }
                        case 109:
                            var3 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var2 = 18;
                            var2 = var1[var2];
                            var3 = var3.bind(var0)(var2);
                            var2 = 17;
                            var2 = var1[var2];
                            var1 = var1.paths;
                            var3 = var3.bind(var0)(var2, var1);
                            var2 = var3.then;
                            var1 = function(arg0) { // Environment: var1
                                var0 = arg0;
                                var2 = var0.default;
                                var1 = {};
                                var3 = _closure2_slot5;
                                var3 = var3.id;
                                var1.userId = var3;
                                var3 = _closure2_slot5;
                                var1.localUser = var3;
                                var0 = _closure2_slot4;
                                var1.sourceAnalyticsLocations = var0;
                                var0 = undefined;
                                var0 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var1 = var2.bind(var3)(var1);
                        case 166:
                            return var0;
                    }
                };
                var6 = var6.bind(var8)(var2, var3);
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var9];
                var12 = var3.bind(var4)(var2);
                var11 = var12.useStateFromStoresObject;
                var2 = _closure1_slot6;
                var9 = new Array(1);
                var9[0] = var2;
                var3 = new Array(2);
                var3[0] = var22;
                var3[1] = var16;
                var2 = function() { // Environment: var1
                    _fun101692: for (var _fun101692_ip = 0;;) switch (_fun101692_ip) {
                        case 0:
                            var2 = _closure2_slot5;
                            var0 = null;
                            if (!(var0 != var2)) {
                                _fun101692_ip = 104;
                                continue _fun101692
                            }
                        case 13:
                            var0 = {};
                            var3 = _closure1_slot6;
                            var4 = var3.getStatus;
                            var2 = _closure2_slot5;
                            var2 = var2.id;
                            var5 = _closure2_slot2;
                            var2 = var4.bind(var3)(var2, var5);
                            var0.status = var2;
                            var4 = var3.getActivities;
                            var2 = _closure2_slot5;
                            var2 = var2.id;
                            var2 = var4.bind(var3)(var2, var5);
                            var0.activities = var2;
                            var2 = var3.isMobileOnline;
                            var1 = _closure2_slot5;
                            var1 = var1.id;
                            var1 = var2.bind(var3)(var1);
                            var0.isMobileOnline = var1;
                            _fun101692_ip = 106;
                            continue _fun101692;
                        case 104:
                            var0 = {};
                        case 106:
                            return var0;
                    }
                };
                var2 = var11.bind(var12)(var9, var2, var3);
                var11 = var2.status;
                _closure2_slot10 = var11;
                var21 = var2.activities;
                var20 = var2.isMobileOnline;
                var3 = var8.useMemo;
                var2 = new Array(2);
                var2[0] = var11;
                var2[1] = var16;
                var1 = function() { // Environment: var1
                    _fun101693: for (var _fun101693_ip = 0;;) switch (_fun101693_ip) {
                        case 0:
                            var2 = _closure2_slot5;
                            var0 = null;
                            if (!(var0 != var2)) {
                                _fun101693_ip = 32;
                                continue _fun101693
                            }
                        case 13:
                            var3 = _closure2_slot5;
                            var2 = var3.isSystemUser;
                            var2 = var2.bind(var3)();
                            var0 = null;
                            if (var2) {
                                _fun101693_ip = 36;
                                continue _fun101693
                            }
                        case 32:
                            var0 = _closure2_slot10;
                        case 36:
                            return var0;
                    }
                };
                var17 = var3.bind(var8)(var1, var2);
                if (!(var0 != var16)) {
                    _fun101681_ip = 1246;
                    continue _fun101681
                }
            case 782:
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var14 = 19;
                var3 = var1[var14];
                var8 = var2.bind(var4)(var3);
                var3 = var8.getName;
                var3 = var3.bind(var8)(var16);
                var9 = new Array(2);
                var9[0] = var3;
                var8 = _closure1_slot0;
                var3 = 20;
                var3 = var1[var3];
                var8 = var8.bind(var4)(var3);
                var3 = var8.getStatusLabel;
                var3 = var3.bind(var8)(var11);
                var9[1] = var3;
                var8 = var9.join;
                var3 = ', ';
                var12 = var8.bind(var9)(var3);
                var3 = _closure1_slot10;
                var11 = 21;
                var1 = var1[var11];
                var2 = var2.bind(var4)(var1);
                var1 = {};
                var1.onPress = var6;
                var6 = 'stretchy';
                if (!var7) {
                    _fun101681_ip = 903;
                    continue _fun101681
                }
            case 899:
                var6 = 'full';
            case 903:
                var1.width = var6;
                var1.panelVariant = var5;
                var1.accessibilityLabel = var12;
                var7 = _closure1_slot11;
                var6 = _closure1_slot5;
                var5 = {};
                var8 = var19.content;
                var5.style = var8;
                var13 = _closure1_slot10;
                var15 = _closure1_slot1;
                var18 = _closure1_slot2;
                var8 = 8;
                var8 = var18[var8];
                var9 = var15.bind(var4)(var8);
                var8 = {};
                var8.user = var16;
                var23 = var16.avatarDecoration;
                var8.avatarDecoration = var23;
                var8.guildId = var22;
                var22 = _closure1_slot12;
                var8.size = var22;
                var8.isMobileOnline = var20;
                var20 = 22;
                var20 = var18[var20];
                var20 = var15.bind(var4)(var20);
                var20 = var20.bind(var4)(var21);
                var8.streaming = var20;
                var8.status = var17;
                var8.accessibilityLabel = var12;
                var20 = true;
                var8.autoStatusCutout = var20;
                var9 = var13.bind(var4)(var9, var8);
                var8 = new Array(2);
                var8[0] = var9;
                var9 = {};
                var12 = var19.contentText;
                var9.style = var12;
                var17 = _closure1_slot0;
                var10 = var18[var11];
                var10 = var17.bind(var4)(var10);
                var12 = var10.HappeningNowCardHeader;
                var10 = {};
                var10.noMargin = var20;
                var19 = var19.contentTextTitle;
                var10.style = var19;
                var14 = var18[var14];
                var15 = var15.bind(var4)(var14);
                var14 = var15.getName;
                var14 = var14.bind(var15)(var16);
                var10.children = var14;
                var12 = var13.bind(var4)(var12, var10);
                var10 = new Array(2);
                var10[0] = var12;
                var11 = var18[var11];
                var11 = var17.bind(var4)(var11);
                var12 = var11.HappeningNowCardSubtitle;
                var11 = {};
                var14 = 23;
                var15 = var18[var14];
                var15 = var17.bind(var4)(var15);
                var16 = var15.intl;
                var15 = var16.string;
                var14 = var18[var14];
                var14 = var17.bind(var4)(var14);
                var14 = var14.t;
                var14 = var14["0/R0d0"];
                var14 = var15.bind(var16)(var14);
                var11.children = var14;
                var11 = var13.bind(var4)(var12, var11);
                var10[1] = var11;
                var9.children = var10;
                var9 = var7.bind(var4)(var6, var9);
                var8[1] = var9;
                var5.children = var8;
                var5 = var7.bind(var4)(var6, var5);
                var1.children = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            case 1246:
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 24;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCardUserReturned.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 3601, 1613, 10880, 660, 33, 5447, 1297, 5721, 566, 13218, 3711, 5209, 481, 795, 7345, 1307, 3227, 7870, 10881, 5731, 1234, 2]);