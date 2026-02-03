// modules/main_tabs_v2/native/shared_components/user_list/PrivateChannelUserList.tsx
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
    var3 = var7.bind(var0)(var3);
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
    var3 = var4.bind(var0)(var3);
    var7 = var3.RelationshipTypes;
    var _closure1_slot7 = var7;
    var3 = var3.MAX_GROUP_DM_PARTICIPANTS;
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot9 = var3;
    var3 = var6.memo;
    var1 = function arg0() {
        _fun105826: for (var _fun105826_ip = 0;;) switch (_fun105826_ip) {
            case 0:
                var0 = arg0;
                var15 = var0.channelId;
                var _closure2_slot0 = var15;
                var8 = var0.disableStickySections;
                var7 = var0.listStyleOverride;
                var6 = var0.disableBottomSafeZone;
                var5 = var0.insetEnd;
                var11 = var0.headerShown;
                var3 = undefined;
                if (!(var11 === var3)) {
                    _fun105826_ip = 52;
                    continue _fun105826
                }
            case 50:
                var11 = true;
            case 52:
                var2 = var0.hideTitle;
                var _closure2_slot1 = var2;
                var4 = var0.inActionSheet;
                var18 = var0.onUserPress;
                var _closure2_slot2 = var18;
                var17 = var0.opensUserProfileOnUserPress;
                if (!(var17 === var3)) {
                    _fun105826_ip = 90;
                    continue _fun105826
                }
            case 88:
                var17 = true;
            case 90:
                var _closure2_slot3 = var17;
                var _closure2_slot4 = var3;
                var _closure2_slot5 = var3;
                var _closure2_slot6 = var3;
                var _closure2_slot7 = var3;
                var _closure2_slot8 = var3;
                var _closure2_slot9 = var3;
                var10 = _closure1_slot1;
                var12 = _closure1_slot2;
                var9 = 6;
                var9 = var12[var9];
                var9 = var10.bind(var3)(var9);
                var9 = var9.bind(var3)();
                var16 = var9.analyticsLocations;
                _closure2_slot4 = var16;
                var14 = _closure1_slot0;
                var9 = 7;
                var13 = var12[var9];
                var21 = var14.bind(var3)(var13);
                var20 = var21.useStateFromStores;
                var13 = _closure1_slot4;
                var19 = new Array(1);
                var19[0] = var13;
                var13 = function() { // Environment: var1
                    var2 = _closure1_slot4;
                    var1 = var2.getChannel;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var13 = var20.bind(var21)(var19, var13);
                _closure2_slot5 = var13;
                var9 = var12[var9];
                var21 = var14.bind(var3)(var9);
                var20 = var21.useStateFromStoresArray;
                var9 = _closure1_slot6;
                var19 = new Array(1);
                var19[0] = var9;
                var14 = new Array(1);
                var14[0] = var13;
                var9 = function() { // Environment: var1
                    _fun105828: for (var _fun105828_ip = 0;;) switch (_fun105828_ip) {
                        case 0:
                            var1 = _closure2_slot5;
                            var0 = null;
                            if (!(var0 == var1)) {
                                _fun105828_ip = 22;
                                continue _fun105828
                            }
                        case 13:
                            var0 = new Array(0);
                            _fun105828_ip = 163;
                            continue _fun105828;
                        case 22:
                            var4 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var3 = 8;
                            var3 = var6[var3];
                            var5 = undefined;
                            var3 = var4.bind(var5)(var3);
                            var2 = _closure2_slot5;
                            var2 = var2.recipients;
                            var4 = var3.bind(var5)(var2);
                            var3 = var4.map;
                            var7 = _closure1_slot6;
                            var2 = var7.getUser;
                            var4 = var3.bind(var4)(var2);
                            var3 = var4.unshift;
                            var2 = var7.getCurrentUser;
                            var2 = var2.bind(var7)();
                            var3 = var3.bind(var4)(var2);
                            var2 = var3.filter;
                            var4 = _closure1_slot0;
                            var1 = 9;
                            var1 = var6[var1];
                            var1 = var4.bind(var5)(var1);
                            var1 = var1.isNotNullish;
                            var3 = var2.bind(var3)(var1);
                            var2 = var3.sortBy;
                            var1 = function(arg0) { // Environment: var1
                                var0 = arg0;
                                var1 = var0.username;
                                var0 = var1.toLowerCase;
                                var0 = var0.bind(var1)();
                                return var0;
                            };
                            var2 = var2.bind(var3)(var1);
                            var1 = var2.value;
                            var0 = var1.bind(var2)();
                        case 163:
                            return var0;
                    }
                };
                var21 = var20.bind(var21)(var19, var9, var14);
                _closure2_slot6 = var21;
                var9 = 10;
                var9 = var12[var9];
                var10 = var10.bind(var3)(var9);
                var9 = {};
                var9.channel = var13;
                var11 = !var11;
                var9.disable = var11;
                var10 = var10.bind(var3)(var9);
                var9 = var10.listActionRenderer;
                var10 = var10.listActionHeight;
                var12 = null;
                var14 = var12 == var13;
                var11 = undefined;
                if (var14) {
                    _fun105826_ip = 322;
                    continue _fun105826
                }
            case 312:
                var14 = var13.isMultiUserDM;
                var11 = var14.bind(var13)();
            case 322:
                var20 = var12 != var11;
                if (!var20) {
                    _fun105826_ip = 332;
                    continue _fun105826
                }
            case 329:
                var20 = var11;
            case 332:
                _closure2_slot7 = var20;
                var19 = undefined;
                if (!var20) {
                    _fun105826_ip = 359;
                    continue _fun105826
                }
            case 341:
                var14 = var12 == var13;
                var11 = undefined;
                if (var14) {
                    _fun105826_ip = 356;
                    continue _fun105826
                }
            case 350:
                var11 = var13.ownerId;
            case 356:
                var19 = var11;
            case 359:
                _closure2_slot8 = var19;
                var14 = var12 == var13;
                var11 = undefined;
                if (var14) {
                    _fun105826_ip = 378;
                    continue _fun105826
                }
            case 372:
                var11 = var13.userLimit;
            case 378:
                var12 = var12 != var11;
                var22 = 0;
                if (!var12) {
                    _fun105826_ip = 390;
                    continue _fun105826
                }
            case 387:
                var22 = var11;
            case 390:
                _closure2_slot9 = var22;
                var14 = _closure1_slot3;
                var13 = var14.useMemo;
                var12 = new Array(1);
                var12[0] = var21;
                var11 = function() { // Environment: var1
                    var0 = _closure2_slot6;
                    var1 = var0.length;
                    var0 = new Array(1);
                    var0[0] = var1;
                    return var0;
                };
                var13 = var13.bind(var14)(var11, var12);
                var12 = var14.useCallback;
                var11 = new Array(4);
                var11[0] = var20;
                var11[1] = var21;
                var11[2] = var22;
                var11[3] = var2;
                var2 = function() { // Environment: var1
                    _fun105831: for (var _fun105831_ip = 0;;) switch (_fun105831_ip) {
                        case 0:
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var0 = 11;
                            var1 = var6[var0];
                            var3 = undefined;
                            var1 = var5.bind(var3)(var1);
                            var2 = var1.intl;
                            var1 = var2.string;
                            var0 = var6[var0];
                            var0 = var5.bind(var3)(var0);
                            var0 = var0.t;
                            var0 = var0["9Oq93m"];
                            var7 = var1.bind(var2)(var0);
                            var0 = _closure2_slot6;
                            var6 = var0.length;
                            var0 = global;
                            var1 = var0.HermesInternal;
                            var5 = var1.concat;
                            var3 = '';
                            var1 = ' — ';
                            var1 = var5.bind(var3)(var7, var1, var6);
                            var5 = _closure2_slot7;
                            var3 = var1;
                            if (!var5) {
                                _fun105831_ip = 156;
                                continue _fun105831
                            }
                        case 112:
                            var6 = _closure2_slot9;
                            var5 = 0;
                            if (!(!(var6 > var5))) {
                                _fun105831_ip = 128;
                                continue _fun105831
                            }
                        case 122:
                            var5 = _closure1_slot8;
                            _fun105831_ip = 132;
                            continue _fun105831;
                        case 128:
                            var5 = _closure2_slot9;
                        case 132:
                            var0 = var0.HermesInternal;
                            var4 = var0.concat;
                            var0 = '/';
                            var0 = var4.bind(var0)(var5);
                            var3 = var1 + var0;
                        case 156:
                            var0 = {};
                            var1 = 'section';
                            var0.type = var1;
                            var1 = {};
                            var1.title = var3;
                            var2 = _closure2_slot1;
                            var1.hideTitle = var2;
                            var0.props = var1;
                            return var0;
                    }
                };
                var11 = var12.bind(var14)(var2, var11);
                var12 = var14.useCallback;
                var2 = new Array(7);
                var2[0] = var21;
                var2[1] = var20;
                var2[2] = var19;
                var2[3] = var18;
                var2[4] = var17;
                var2[5] = var16;
                var2[6] = var15;
                var1 = function(arg0, arg1) { // Environment: var1
                    _fun105832: for (var _fun105832_ip = 0;;) switch (_fun105832_ip) {
                        case 0:
                            var2 = arg1;
                            var _closure3_slot0 = var2;
                            var0 = 0;
                            var4 = var0 === var2;
                            var1 = _closure2_slot6;
                            var3 = var1.length;
                            var1 = 1;
                            var1 = var3 - var1;
                            var3 = var2 === var1;
                            var1 = _closure2_slot6;
                            var2 = var1[var2];
                            var1 = null;
                            if (!(var1 == var2)) {
                                _fun105832_ip = 78;
                                continue _fun105832
                            }
                        case 52:
                            var1 = {};
                            var5 = 'placeholder';
                            var1.type = var5;
                            var5 = {};
                            var5.start = var4;
                            var5.end = var3;
                            var1.props = var5;
                            return var1;
                        case 78:
                            var5 = _closure2_slot7;
                            if (!var5) {
                                _fun105832_ip = 98;
                                continue _fun105832
                            }
                        case 85:
                            var1 = var2.id;
                            var0 = _closure2_slot8;
                            var5 = var1 === var0;
                        case 98:
                            var0 = {};
                            var1 = 'user';
                            var0.type = var1;
                            var1 = {};
                            var8 = _closure1_slot7;
                            var8 = var8.NONE;
                            var1.type = var8;
                            var1.user = var2;
                            var8 = _closure1_slot5;
                            var7 = var8.getNickname;
                            var2 = var2.id;
                            var2 = var7.bind(var8)(var2);
                            var1.nickname = var2;
                            var2 = true;
                            var1.isNameplatedRow = var2;
                            var6 = function arg0() {
                                _fun105833: for (var _fun105833_ip = 0;;) switch (_fun105833_ip) {
                                    case 0:
                                        var4 = arg0;
                                        var1 = _closure2_slot2;
                                        var0 = null;
                                        if (!(var0 != var1)) {
                                            _fun105833_ip = 44;
                                            continue _fun105833
                                        }
                                    case 16:
                                        var2 = _closure2_slot2;
                                        var1 = {};
                                        var1.user = var4;
                                        var0 = _closure3_slot0;
                                        var1.index = var0;
                                        var0 = undefined;
                                        var0 = var2.bind(var0)(var1);
                                    case 44:
                                        var0 = _closure2_slot3;
                                        if (!var0) {
                                            _fun105833_ip = 109;
                                            continue _fun105833
                                        }
                                    case 51:
                                        var1 = _closure1_slot1;
                                        var2 = _closure1_slot2;
                                        var0 = 12;
                                        var0 = var2[var0];
                                        var2 = undefined;
                                        var1 = var1.bind(var2)(var0);
                                        var0 = {};
                                        var4 = var4.id;
                                        var0.userId = var4;
                                        var4 = _closure2_slot4;
                                        var0.sourceAnalyticsLocations = var4;
                                        var3 = _closure2_slot0;
                                        var0.channelId = var3;
                                        var0 = var1.bind(var2)(var0);
                                    case 109:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var1.onPress = var6;
                            var1.isOwner = var5;
                            var1.start = var4;
                            var1.end = var3;
                            var1.canShowDisplayNameStyles = var2;
                            var0.props = var1;
                            return var0;
                    }
                };
                var12 = var12.bind(var14)(var1, var2);
                var2 = _closure1_slot9;
                var1 = _closure1_slot0;
                var14 = _closure1_slot2;
                var0 = 13;
                var0 = var14[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.UsersFastList;
                var0 = {};
                var0.sections = var13;
                var0.getItemProps = var12;
                var0.getSectionProps = var11;
                var0.listHeaderSize = var10;
                var0.renderListHeader = var9;
                var0.disableStickySections = var8;
                var8 = true;
                var0.disableBackgroundOverlay = var8;
                var0.listStyleOverride = var7;
                var0.disableBottomSafeZone = var6;
                var0.insetEnd = var5;
                var0.inActionSheet = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 14;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/main_tabs_v2/native/shared_components/user_list/PrivateChannelUserList.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1372, 3100, 1621, 660, 33, 5726, 566, 22, 1304, 13783, 1234, 7350, 9096, 2]);