// modules/user_profile/native/UserProfileGameFriendActionSheet.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        _fun91963: for (var _fun91963_ip = 0;;) switch (_fun91963_ip) {
            case 0:
                var2 = arg0;
                var0 = var2.application;
                var _closure2_slot0 = var0;
                var6 = var2.userId;
                var _closure2_slot1 = var6;
                var7 = var2.userDisplayName;
                var _closure2_slot2 = var7;
                var2 = _closure1_slot12;
                var4 = undefined;
                var9 = var2.bind(var4)();
                var5 = _closure1_slot5;
                var3 = var5.useCallback;
                var8 = var0.id;
                var2 = new Array(4);
                var2[0] = var8;
                var8 = var0.name;
                var2[1] = var8;
                var2[2] = var7;
                var2[3] = var6;
                var1 = function() { // Environment: var1
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 9;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.confirmRemoveGameFriend;
                    var1 = {};
                    var5 = _closure2_slot2;
                    var1.userDisplayName = var5;
                    var5 = _closure2_slot1;
                    var1.userId = var5;
                    var4 = _closure2_slot0;
                    var5 = var4.id;
                    var1.applicationId = var5;
                    var4 = var4.name;
                    var1.gameName = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var5 = var3.bind(var5)(var1, var2);
                var3 = _closure1_slot10;
                var7 = _closure1_slot0;
                var14 = _closure1_slot2;
                var1 = 10;
                var1 = var14[var1];
                var1 = var7.bind(var4)(var1);
                var2 = var1.ActionSheetRow;
                var1 = {};
                var8 = _closure1_slot10;
                var6 = 11;
                var6 = var14[var6];
                var6 = var7.bind(var4)(var6);
                var7 = var6.XSmallIcon;
                var6 = {
                    'size': 'md',
                    'color': 'redesign-button-tertiary-text'
                };
                var6 = var8.bind(var4)(var7, var6);
                var1.trailing = var6;
                var8 = _closure1_slot11;
                var7 = _closure1_slot7;
                var6 = {};
                var11 = var9.applicationNameWrapper;
                var6.style = var11;
                var13 = _closure1_slot10;
                var12 = _closure1_slot1;
                var11 = 12;
                var11 = var14[var11];
                var12 = var12.bind(var4)(var11);
                var11 = {};
                var9 = var9.gameIcon;
                var11.style = var9;
                var9 = 'contain';
                var11.resizeMode = var9;
                var9 = {};
                var15 = var0.getIconURL;
                var14 = 32;
                var15 = var15.bind(var0)(var14);
                var14 = null;
                var16 = var14 != var15;
                var14 = '';
                if (!var16) {
                    _fun91963_ip = 269;
                    continue _fun91963
                }
            case 266:
                var14 = var15;
            case 269:
                var9.uri = var14;
                var11.source = var9;
                var9 = true;
                var11.disableColor = var9;
                var9 = var0.id;
                var11 = var13.bind(var4)(var12, var11, var9);
                var9 = new Array(2);
                var9[0] = var11;
                var12 = _closure1_slot10;
                var11 = _closure1_slot0;
                var13 = _closure1_slot2;
                var10 = 13;
                var10 = var13[var10];
                var10 = var11.bind(var4)(var10);
                var11 = var10.Text;
                var10 = {
                    'variant': 'text-md/semibold',
                    'color': 'mobile-text-heading-primary'
                };
                var13 = var0.name;
                var10.children = var13;
                var10 = var12.bind(var4)(var11, var10);
                var9[1] = var10;
                var6.children = var9;
                var6 = var8.bind(var4)(var7, var6);
                var1.label = var6;
                var1.onPress = var5;
                var0 = var0.id;
                var0 = var3.bind(var4)(var2, var1, var0);
                return var0;
        }
    };
    var _closure1_slot13 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var10.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var6 = var5[var3];
    var3 = arg3;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.ActivityIndicator;
    var _closure1_slot6 = var6;
    var3 = var3.View;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.RelationshipTypes;
    var _closure1_slot9 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot10 = var6;
    var3 = var3.jsxs;
    var _closure1_slot11 = var3;
    var3 = 7;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'flexDirection': 'row',
        'justifyContent': 'flex-start',
        'alignItems': 'center',
        'gap': 12
    };
    var3.applicationNameWrapper = var8;
    var8 = {
        'width': 32,
        'height': 32
    };
    var9 = 8;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.radii;
    var9 = var9.sm;
    var8.borderRadius = var9;
    var3.gameIcon = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot12 = var3;
    var3 = 23;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_profile/native/UserProfileGameFriendActionSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun91965: for (var _fun91965_ip = 0;;) switch (_fun91965_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.user;
                var _closure2_slot0 = var1;
                var6 = var0.guildId;
                var5 = var0.channelId;
                var18 = _closure1_slot0;
                var10 = _closure1_slot2;
                var0 = 14;
                var0 = var10[var0];
                var3 = undefined;
                var4 = var18.bind(var3)(var0);
                var2 = var4.useGameFriendsForUser;
                var0 = var1.id;
                var0 = var2.bind(var4)(var0);
                var _closure2_slot1 = var0;
                var7 = _closure1_slot5;
                var4 = var7.useMemo;
                var2 = new Array(1);
                var2[0] = var0;
                var0 = function() { // Environment: var8
                    var2 = _closure2_slot1;
                    var1 = var2.map;
                    var0 = function(arg0) { // Environment: var0
                        var0 = arg0;
                        var0 = var0.applicationId;
                        return var0;
                    };
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var0 = var4.bind(var7)(var0, var2);
                var _closure2_slot2 = var0;
                var4 = _closure1_slot1;
                var2 = 15;
                var2 = var10[var2];
                var2 = var4.bind(var3)(var2);
                var11 = var2.bind(var3)(var0);
                var2 = 16;
                var2 = var10[var2];
                var4 = var4.bind(var3)(var2);
                var2 = var4.useName;
                var2 = var2.bind(var4)(var6, var5, var1);
                var _closure2_slot3 = var2;
                var5 = _closure1_slot5;
                var4 = var5.useState;
                var2 = function() { // Environment: var8
                    _fun91968: for (var _fun91968_ip = 0;;) switch (_fun91968_ip) {
                        case 0:
                            var4 = _closure1_slot8;
                            var3 = var4.isFriend;
                            var2 = _closure2_slot0;
                            var2 = var2.id;
                            var2 = var3.bind(var4)(var2);
                            if (var2) {
                                _fun91968_ip = 117;
                                continue _fun91968
                            }
                        case 33:
                            var4 = _closure1_slot8;
                            var3 = var4.isBlockedOrIgnored;
                            var2 = _closure2_slot0;
                            var2 = var2.id;
                            var2 = var3.bind(var4)(var2);
                            if (var2) {
                                _fun91968_ip = 117;
                                continue _fun91968
                            }
                        case 60:
                            var3 = _closure1_slot8;
                            var2 = var3.getRelationshipType;
                            var0 = _closure2_slot0;
                            var0 = var0.id;
                            var2 = var2.bind(var3)(var0);
                            var0 = _closure1_slot9;
                            var0 = var0.PENDING_OUTGOING;
                            var0 = var2 !== var0;
                            if (!var0) {
                                _fun91968_ip = 115;
                                continue _fun91968
                            }
                        case 101:
                            var1 = _closure1_slot9;
                            var1 = var1.PENDING_INCOMING;
                            var0 = var2 !== var1;
                        case 115:
                            return var0;
                        case 117:
                            var0 = false;
                            return var0;
                    }
                };
                var2 = var4.bind(var5)(var2);
                var9 = _closure1_slot4;
                var4 = 1;
                var2 = var9.bind(var3)(var2, var4);
                var6 = 0;
                var5 = var2[var6];
                var7 = _closure1_slot5;
                var2 = var7.useState;
                var15 = false;
                var2 = var2.bind(var7)(var15);
                var7 = 2;
                var2 = var9.bind(var3)(var2, var7);
                var12 = var2[var6];
                var2 = var2[var4];
                var _closure2_slot4 = var2;
                var14 = _closure1_slot5;
                var2 = var14.useState;
                var2 = var2.bind(var14)(var15);
                var2 = var9.bind(var3)(var2, var7);
                var14 = var2[var6];
                var2 = var2[var4];
                var _closure2_slot5 = var2;
                var6 = _closure1_slot5;
                var4 = var6.useCallback;
                var7 = _closure1_slot3;
                var2 = function*() { // Environment: var8
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun91970: for (var _fun91970_ip = 0;;) switch (_fun91970_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun91970_ip = 198;
                                    continue _fun91970
                                }
                            case 10:
                                var1 = _closure2_slot4;
                                var4 = undefined;
                                var3 = true;
                                var1 = var1.bind(var4)(var3);
                                var1 = _closure2_slot5;
                                var1 = var1.bind(var4)(var3);
                            case 35: // try_start_0 // try_start_1
                                var5 = _closure1_slot1;
                                var6 = _closure1_slot2;
                                var1 = 17;
                                var1 = var6[var1];
                                var6 = var5.bind(var4)(var1);
                                var5 = var6.addRelationship;
                                var1 = {};
                                var7 = _closure2_slot0;
                                var7 = var7.id;
                                var1.userId = var7;
                                var7 = {};
                                var8 = 'User Profile Action Sheet';
                                var7.location = var8;
                                var1.context = var7;
                                var1 = var5.bind(var6)(var1);
                                SaveGenerator(address = 104);
                            case 102:
                                return var1;
                            case 104:
                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 5);
                                if (var5) {
                                    _fun91970_ip = 142;
                                    continue _fun91970
                                }
                            case 110:
                                var5 = _closure1_slot0;
                                var6 = _closure1_slot2;
                                var3 = 18;
                                var3 = var6[var3];
                                var5 = var5.bind(var4)(var3);
                                var3 = var5.presentAddedFriendToast;
                                var3 = var3.bind(var5)();
                            case 140: // try_end0
                                _fun91970_ip = 169;
                                continue _fun91970;
                            case 142: // try_end1
                                var5 = _closure2_slot5;
                                var3 = false;
                                var3 = var5.bind(var4)(var3);
                                return var1;
                            case 156: // try_start_2 // catch_target0
                                CatchBlockStart(arg_register = 1);
                                var3 = _closure2_slot4;
                                var1 = false;
                                var1 = var3.bind(var4)(var1);
                            case 169: // try_end2
                                var3 = _closure2_slot5;
                                var1 = false;
                                var1 = var3.bind(var4)(var1);
                                return var4;
                            case 183: // catch_target1 // catch_target2
                                CatchBlockStart(arg_register = 1);
                                var3 = _closure2_slot5;
                                var2 = false;
                                var2 = var3.bind(var4)(var2);
                                throw var1;
                            case 198:
                                return var0;
                        }
                    };
                    return var0;
                };
                var2 = var7.bind(var3)(var2);
                var7 = var1.id;
                var1 = new Array(1);
                var1[0] = var7;
                var15 = var4.bind(var6)(var2, var1);
                var4 = _closure1_slot5;
                var2 = var4.useEffect;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var8
                    _fun91971: for (var _fun91971_ip = 0;;) switch (_fun91971_ip) {
                        case 0:
                            var0 = _closure2_slot2;
                            var1 = var0.length;
                            var0 = 0;
                            if (!(var0 === var1)) {
                                _fun91971_ip = 53;
                                continue _fun91971
                            }
                        case 18:
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 19;
                            var1 = var1[var0];
                            var0 = undefined;
                            var1 = var2.bind(var0)(var1);
                            var0 = var1.hideActionSheet;
                            var0 = var0.bind(var1)();
                        case 53:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var2.bind(var4)(var0, var1);
                var2 = _closure1_slot11;
                var0 = 20;
                var0 = var10[var0];
                var0 = var18.bind(var3)(var0);
                var1 = var0.ActionSheet;
                var0 = {};
                var7 = _closure1_slot10;
                var4 = 21;
                var4 = var10[var4];
                var4 = var18.bind(var3)(var4);
                var6 = var4.BottomSheetTitleHeader;
                var4 = {};
                var20 = 22;
                var9 = var10[var20];
                var9 = var18.bind(var3)(var9);
                var17 = var9.intl;
                var16 = var17.string;
                var9 = var10[var20];
                var9 = var18.bind(var3)(var9);
                var9 = var9.t;
                var9 = var9["Uv/eTx"];
                var9 = var16.bind(var17)(var9);
                var4.title = var9;
                var4 = var7.bind(var3)(var6, var4);
                var0.header = var4;
                var7 = _closure1_slot10;
                var9 = 10;
                var4 = var10[var9];
                var4 = var18.bind(var3)(var4);
                var4 = var4.ActionSheetRow;
                var6 = var4.Group;
                var4 = {};
                var16 = var10[var20];
                var16 = var18.bind(var3)(var16);
                var17 = var16.intl;
                var16 = var17.string;
                var10 = var10[var20];
                var10 = var18.bind(var3)(var10);
                var10 = var10.t;
                var10 = var10.YpCiMt;
                var10 = var16.bind(var17)(var10);
                var4.title = var10;
                var10 = var11.map;
                var8 = function(arg0) { // Environment: var8
                    _fun91972: for (var _fun91972_ip = 0;;) switch (_fun91972_ip) {
                        case 0:
                            var1 = arg0;
                            var0 = null;
                            var0 = var0 != var1;
                            if (!var0) {
                                _fun91972_ip = 68;
                                continue _fun91972
                            }
                        case 12:
                            var5 = _closure1_slot10;
                            var4 = _closure1_slot13;
                            var3 = {};
                            var3.application = var1;
                            var6 = _closure2_slot3;
                            var3.userDisplayName = var6;
                            var2 = _closure2_slot0;
                            var2 = var2.id;
                            var3.userId = var2;
                            var2 = var1.id;
                            var1 = undefined;
                            var0 = var5.bind(var1)(var4, var3, var2);
                        case 68:
                            return var0;
                    }
                };
                var8 = var10.bind(var11)(var8);
                var4.children = var8;
                var6 = var7.bind(var3)(var6, var4);
                var4 = new Array(2);
                var4[0] = var6;
                if (!var5) {
                    _fun91965_ip = 821;
                    continue _fun91965
                }
            case 564:
                var8 = _closure1_slot10;
                var19 = _closure1_slot0;
                var16 = _closure1_slot2;
                var6 = var16[var9];
                var6 = var19.bind(var3)(var6);
                var6 = var6.ActionSheetRow;
                var7 = var6.Group;
                var6 = {};
                var10 = var16[var20];
                var10 = var19.bind(var3)(var10);
                var17 = var10.intl;
                var11 = var17.string;
                var10 = var16[var20];
                var10 = var19.bind(var3)(var10);
                var10 = var10.t;
                var10 = var10.GbsGCp;
                var10 = var11.bind(var17)(var10);
                var6.title = var10;
                var11 = _closure1_slot10;
                var9 = var16[var9];
                var9 = var19.bind(var3)(var9);
                var10 = var9.ActionSheetRow;
                var9 = {};
                var17 = var16[var20];
                var17 = var19.bind(var3)(var17);
                var21 = var17.intl;
                var18 = var21.string;
                var17 = var16[var20];
                var17 = var19.bind(var3)(var17);
                var17 = var17.t;
                var17 = var17.LAcY7m;
                var17 = var18.bind(var21)(var17);
                var9.label = var17;
                var17 = var16[var20];
                var17 = var19.bind(var3)(var17);
                var18 = var17.intl;
                var17 = var18.string;
                var16 = var16[var20];
                var16 = var19.bind(var3)(var16);
                var16 = var16.t;
                var16 = var16.YTvOUx;
                var16 = var17.bind(var18)(var16);
                var9.subLabel = var16;
                var9.onPress = var15;
                var9.disabled = var12;
                var12 = null;
                if (!var14) {
                    _fun91965_ip = 800;
                    continue _fun91965
                }
            case 784:
                var15 = _closure1_slot10;
                var14 = _closure1_slot6;
                var13 = {};
                var12 = var15.bind(var3)(var14, var13);
            case 800:
                var9.trailing = var12;
                var9 = var11.bind(var3)(var10, var9);
                var6.children = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 821:
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 31, 27, 3100, 660, 33, 1297, 671, 9018, 7735, 4732, 4086, 3941, 11966, 6884, 3961, 8022, 3147, 3278, 5208, 5211, 1234, 2]);