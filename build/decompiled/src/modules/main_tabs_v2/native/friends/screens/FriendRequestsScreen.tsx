// modules/main_tabs_v2/native/friends/screens/FriendRequestsScreen.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var5;
    var0 = function arg0, arg1() {
        _fun108601: for (var _fun108601_ip = 0;;) switch (_fun108601_ip) {
            case 0:
                var2 = arg0;
                var1 = arg1;
                var0 = var2.user;
                var3 = var0.id;
                var0 = var1.user;
                var0 = var0.id;
                if (!(var3 !== var0)) {
                    _fun108601_ip = 89;
                    continue _fun108601
                }
            case 30:
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var0 = 20;
                var3 = var3[var0];
                var0 = undefined;
                var5 = var4.bind(var0)(var3);
                var4 = var5.compare;
                var0 = var2.user;
                var3 = var0.id;
                var0 = var1.user;
                var0 = var0.id;
                var0 = var4.bind(var5)(var3, var0);
                _fun108601_ip = 136;
                continue _fun108601;
            case 89:
                var5 = _closure1_slot1;
                var4 = _closure1_slot2;
                var3 = 20;
                var4 = var4[var3];
                var3 = undefined;
                var4 = var5.bind(var3)(var4);
                var3 = var4.compare;
                var2 = var2.applicationId;
                var1 = var1.applicationId;
                var0 = var3.bind(var4)(var2, var1);
            case 136:
                return var0;
        }
    };
    var _closure1_slot18 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var7 = 0;
    var3 = var5[var7];
    var0 = undefined;
    var3 = var11.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var9 = 1;
    var6 = var5[var9];
    var3 = arg3;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var15 = 2;
    var3 = var5[var15];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot5 = var3;
    var12 = 3;
    var3 = var5[var12];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var13 = 5;
    var3 = var5[var13];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.UserRowModes;
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.AnalyticEvents;
    var _closure1_slot10 = var6;
    var6 = var3.AnalyticsSections;
    var _closure1_slot11 = var6;
    var3 = var3.RelationshipTypes;
    var _closure1_slot12 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.MINIMUM_PENDING_INCOMING_COUNT_FOR_CLEAR_ALL;
    var _closure1_slot13 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot14 = var6;
    var3 = var3.jsxs;
    var _closure1_slot15 = var3;
    var3 = {};
    var3.Incoming = var7;
    var6 = 'Incoming';
    var3[var7] = var6;
    var3.Outgoing = var9;
    var6 = 'Outgoing';
    var3[var9] = var6;
    var _closure1_slot16 = var3;
    var3 = 10;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var8.flex = var9;
    var3.container = var8;
    var8 = {};
    var10 = 11;
    var14 = var5[var10];
    var14 = var11.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_BASE_LOWER;
    var8.backgroundColor = var14;
    var8.flex = var9;
    var3.noResultsContainer = var8;
    var8 = {};
    var9 = var5[var10];
    var9 = var11.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.BACKGROUND_BASE_LOWER;
    var8.backgroundColor = var9;
    var9 = var5[var10];
    var9 = var11.bind(var0)(var9);
    var9 = var9.spacing;
    var9 = var9.PX_16;
    var8.paddingHorizontal = var9;
    var9 = var5[var10];
    var9 = var11.bind(var0)(var9);
    var9 = var9.spacing;
    var9 = var9.PX_16;
    var8.paddingBottom = var9;
    var9 = 'flex-end';
    var8.justifyContent = var9;
    var9 = 'row';
    var8.flexDirection = var9;
    var3.clearAllContainer = var8;
    var8 = {};
    var14 = var5[var10];
    var14 = var11.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.INPUT_BACKGROUND_DEFAULT;
    var8.backgroundColor = var14;
    var14 = var5[var10];
    var14 = var11.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.INPUT_BACKGROUND_DEFAULT;
    var8.borderColor = var14;
    var14 = var5[var10];
    var14 = var11.bind(var0)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_16;
    var8.paddingHorizontal = var14;
    var14 = var5[var10];
    var14 = var11.bind(var0)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_64;
    var14 = var15 * var14;
    var8.minWidth = var14;
    var14 = var5[var10];
    var14 = var11.bind(var0)(var14);
    var14 = var14.radii;
    var14 = var14.round;
    var8.borderRadius = var14;
    var14 = 'center';
    var8.alignItems = var14;
    var8.paddingVertical = var13;
    var8.borderWidth = var12;
    var3.clearAll = var8;
    var8 = {};
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_BASE_LOWER;
    var8.backgroundColor = var12;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var8.paddingHorizontal = var12;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var8.paddingBottom = var12;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_8;
    var8.paddingTop = var12;
    var3.tabs = var8;
    var8 = {};
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_BASE_LOWER;
    var8.backgroundColor = var12;
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_8;
    var8.paddingTop = var10;
    var8.flexDirection = var9;
    var3.tabsContainer = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot17 = var3;
    var3 = 40;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/main_tabs_v2/native/friends/screens/FriendRequestsScreen.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        _fun108602: for (var _fun108602_ip = 0;;) switch (_fun108602_ip) {
            case 0:
                var0 = _closure1_slot17;
                var3 = undefined;
                var12 = var0.bind(var3)();
                var2 = _closure1_slot1;
                var11 = _closure1_slot2;
                var0 = 21;
                var1 = var11[var0];
                var4 = var2.bind(var3)(var1);
                var1 = 22;
                var1 = var11[var1];
                var1 = var2.bind(var3)(var1);
                var1 = var1.FRIEND_REQUESTS;
                var1 = var4.bind(var3)(var1);
                var4 = var1.analyticsLocations;
                var _closure2_slot0 = var4;
                var1 = function() {
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var0 = 15;
                    var3 = var5[var0];
                    var0 = undefined;
                    var8 = var4.bind(var0)(var3);
                    var7 = var8.useStateFromStoresArray;
                    var3 = _closure1_slot6;
                    var6 = new Array(1);
                    var6[0] = var3;
                    var3 = function() { // Environment: var1
                        var0 = _closure1_slot6;
                        var2 = var0.localItems;
                        var1 = var2.filter;
                        var0 = function(arg0) { // Environment: var0
                            _fun108605: for (var _fun108605_ip = 0;;) switch (_fun108605_ip) {
                                case 0:
                                    var2 = arg0;
                                    var3 = var2.type;
                                    var6 = _closure1_slot0;
                                    var0 = _closure1_slot2;
                                    var5 = 16;
                                    var0 = var0[var5];
                                    var4 = undefined;
                                    var0 = var6.bind(var4)(var0);
                                    var0 = var0.NotificationCenterLocalItems;
                                    var0 = var0.INCOMING_FRIEND_REQUESTS;
                                    var0 = var3 === var0;
                                    if (var0) {
                                        _fun108605_ip = 90;
                                        continue _fun108605
                                    }
                                case 52:
                                    var2 = var2.type;
                                    var3 = _closure1_slot0;
                                    var1 = _closure1_slot2;
                                    var1 = var1[var5];
                                    var1 = var3.bind(var4)(var1);
                                    var1 = var1.NotificationCenterLocalItems;
                                    var1 = var1.INCOMING_GAME_FRIEND_REQUESTS;
                                    var0 = var2 === var1;
                                case 90:
                                    return var0;
                            }
                        };
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var6 = var7.bind(var8)(var6, var3);
                    var _closure3_slot0 = var6;
                    var3 = 17;
                    var3 = var5[var3];
                    var3 = var4.bind(var0)(var3);
                    var4 = var3.NotificationCenterAckedBeforeId;
                    var3 = var4.useSetting;
                    var5 = var3.bind(var4)();
                    var _closure3_slot1 = var5;
                    var4 = _closure1_slot4;
                    var3 = var4.useEffect;
                    var2 = new Array(2);
                    var2[0] = var6;
                    var2[1] = var5;
                    var1 = function() { // Environment: var1
                        _fun108606: for (var _fun108606_ip = 0;;) switch (_fun108606_ip) {
                            case 0:
                                var2 = _closure3_slot0;
                                var3 = var2.length;
                                var2 = 0;
                                if (!(var3 > var2)) {
                                    _fun108606_ip = 132;
                                    continue _fun108606
                                }
                            case 20:
                                var4 = _closure3_slot0;
                                var2 = var4.map;
                                var1 = function(arg0) { // Environment: var0
                                    var0 = arg0;
                                    var0 = var0.local_id;
                                    return var0;
                                };
                                var3 = var2.bind(var4)(var1);
                                var2 = var3.filter;
                                var1 = global;
                                var1 = var1.Boolean;
                                var8 = var2.bind(var3)(var1);
                                var3 = _closure1_slot0;
                                var5 = _closure1_slot2;
                                var1 = 18;
                                var6 = var5[var1];
                                var2 = undefined;
                                var7 = var3.bind(var2)(var6);
                                var6 = var7.markNotificationCenterLocalItemsAcked;
                                var6 = var6.bind(var7)(var8);
                                var1 = var5[var1];
                                var2 = var3.bind(var2)(var1);
                                var1 = var2.bulkMarkNotificationCenterItemsAcked;
                                var3 = var4.filter;
                                var0 = function(arg0) { // Environment: var0
                                    var2 = _closure1_slot0;
                                    var1 = _closure1_slot2;
                                    var0 = 19;
                                    var1 = var1[var0];
                                    var0 = undefined;
                                    var3 = var2.bind(var0)(var1);
                                    var2 = var3.isRemoteAcked;
                                    var1 = _closure3_slot1;
                                    var0 = arg0;
                                    var0 = var2.bind(var3)(var0, var1);
                                    var0 = !var0;
                                    return var0;
                                };
                                var0 = var3.bind(var4)(var0);
                                var0 = var1.bind(var2)(var0);
                            case 132:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var1 = var3.bind(var4)(var1, var2);
                    return var0;
                };
                var1 = var1.bind(var3)();
                var13 = _closure1_slot4;
                var6 = var13.useEffect;
                var5 = function() { // Environment: var24
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 23;
                    var1 = var1[var0];
                    var0 = undefined;
                    var4 = var2.bind(var0)(var1);
                    var3 = var4.track;
                    var1 = _closure1_slot10;
                    var2 = var1.FRIEND_ADD_VIEWED;
                    var1 = {};
                    var5 = _closure1_slot11;
                    var5 = var5.FRIENDS_REQUESTS_MODAL;
                    var1.friend_add_type = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
                };
                var1 = new Array(0);
                var1 = var6.bind(var13)(var5, var1);
                var9 = _closure1_slot0;
                var7 = 15;
                var1 = var11[var7];
                var8 = var9.bind(var3)(var1);
                var6 = var8.useStateFromStoresArray;
                var1 = _closure1_slot7;
                var5 = new Array(1);
                var5[0] = var1;
                var1 = function() { // Environment: var24
                    var2 = _closure1_slot7;
                    var0 = var2.getMutableRelationships;
                    var1 = var0.bind(var2)();
                    var0 = new Array(2);
                    var0[0] = var1;
                    var1 = var2.getVersion;
                    var1 = var1.bind(var2)();
                    var0[1] = var1;
                    return var0;
                };
                var1 = var6.bind(var8)(var5, var1);
                var19 = _closure1_slot3;
                var17 = 2;
                var1 = var19.bind(var3)(var1, var17);
                var6 = 0;
                var14 = var1[var6];
                var _closure2_slot1 = var14;
                var10 = 1;
                var1 = var1[var10];
                var _closure2_slot2 = var1;
                var8 = 24;
                var5 = var11[var8];
                var20 = var9.bind(var3)(var5);
                var18 = var20.useGameRelationshipsByType;
                var5 = _closure1_slot12;
                var15 = var5.PENDING_INCOMING;
                var22 = var18.bind(var20)(var15);
                var _closure2_slot3 = var22;
                var8 = var11[var8];
                var15 = var9.bind(var3)(var8);
                var8 = var15.useGameRelationshipsByType;
                var5 = var5.PENDING_OUTGOING;
                var21 = var8.bind(var15)(var5);
                var _closure2_slot4 = var21;
                var15 = var13.useMemo;
                var8 = new Array(2);
                var8[0] = var22;
                var8[1] = var21;
                var5 = function() { // Environment: var24
                    var0 = global;
                    var2 = var0.Set;
                    var3 = var2.prototype;
                    var3 = Object.create(var3, {
                        constructor: {
                            value: var2
                        }
                    });
                    var8 = var3;
                    var2 = new var8[var2](var7);
                    var2 = var2 instanceof Object ? var2 : var3;
                    var _closure3_slot0 = var2;
                    var6 = _closure2_slot3;
                    var5 = var6.forEach;
                    var4 = function(arg0) { // Environment: var1
                        var2 = _closure3_slot0;
                        var1 = var2.add;
                        var0 = arg0;
                        var0 = var0.applicationId;
                        var0 = var1.bind(var2)(var0);
                        var0 = undefined;
                        return var0;
                    };
                    var4 = var5.bind(var6)(var4);
                    var4 = _closure2_slot4;
                    var3 = var4.forEach;
                    var1 = function(arg0) { // Environment: var1
                        var2 = _closure3_slot0;
                        var1 = var2.add;
                        var0 = arg0;
                        var0 = var0.applicationId;
                        var0 = var1.bind(var2)(var0);
                        var0 = undefined;
                        return var0;
                    };
                    var1 = var3.bind(var4)(var1);
                    var1 = var0.Array;
                    var0 = var1.from;
                    var0 = var0.bind(var1)(var2);
                    return var0;
                };
                var8 = var15.bind(var13)(var5, var8);
                var5 = 25;
                var5 = var11[var5];
                var5 = var2.bind(var3)(var5);
                var5 = var5.bind(var3)(var8);
                var8 = var13.useMemo;
                var5 = new Array(2);
                var5[0] = var14;
                var5[1] = var1;
                var1 = function() { // Environment: var24
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 26;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.getPendingRelationshipIds;
                    var1 = _closure2_slot1;
                    var0 = _closure2_slot2;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var5 = var8.bind(var13)(var1, var5);
                var20 = var5.pendingIncomingIds;
                var _closure2_slot5 = var20;
                var18 = var5.pendingOutgoingIds;
                var _closure2_slot6 = var18;
                var1 = var5.spamIds;
                var _closure2_slot7 = var1;
                var5 = var5.ignoredUserIds;
                var _closure2_slot8 = var5;
                var7 = var11[var7];
                var15 = var9.bind(var3)(var7);
                var14 = var15.useStateFromStores;
                var7 = _closure1_slot8;
                var8 = new Array(1);
                var8[0] = var7;
                var7 = new Array(6);
                var7[0] = var5;
                var7[1] = var22;
                var7[2] = var21;
                var7[3] = var20;
                var7[4] = var18;
                var7[5] = var1;
                var1 = 27;
                var1 = var11[var1];
                var30 = var2.bind(var3)(var1);
                var32 = function() { // Environment: var24
                    var4 = _closure2_slot5;
                    var3 = var4.map;
                    var0 = function(arg0) { // Environment: var1
                        var0 = {};
                        var3 = _closure1_slot8;
                        var2 = var3.getUser;
                        var1 = arg0;
                        var1 = var2.bind(var3)(var1);
                        var0.user = var1;
                        var1 = false;
                        var0.isGameRelationship = var1;
                        return var0;
                    };
                    var4 = var3.bind(var4)(var0);
                    var3 = var4.filter;
                    var0 = function(arg0) { // Environment: var1
                        var0 = arg0;
                        var1 = var0.user;
                        var0 = null;
                        var0 = var0 != var1;
                        return var0;
                    };
                    var10 = var3.bind(var4)(var0);
                    var5 = _closure2_slot3;
                    var3 = var5.map;
                    var0 = function(arg0) { // Environment: var1
                        var1 = arg0;
                        var0 = {};
                        var4 = _closure1_slot8;
                        var3 = var4.getUser;
                        var2 = var1.id;
                        var2 = var3.bind(var4)(var2);
                        var0.user = var2;
                        var2 = true;
                        var0.isGameRelationship = var2;
                        var1 = var1.applicationId;
                        var0.applicationId = var1;
                        return var0;
                    };
                    var5 = var3.bind(var5)(var0);
                    var3 = var5.filter;
                    var0 = function(arg0) { // Environment: var1
                        var0 = arg0;
                        var1 = var0.user;
                        var0 = null;
                        var0 = var0 != var1;
                        return var0;
                    };
                    var5 = var3.bind(var5)(var0);
                    var6 = _closure2_slot6;
                    var3 = var6.map;
                    var0 = function(arg0) { // Environment: var1
                        var0 = {};
                        var3 = _closure1_slot8;
                        var2 = var3.getUser;
                        var1 = arg0;
                        var1 = var2.bind(var3)(var1);
                        var0.user = var1;
                        var1 = false;
                        var0.isGameRelationship = var1;
                        return var0;
                    };
                    var6 = var3.bind(var6)(var0);
                    var3 = var6.filter;
                    var0 = function(arg0) { // Environment: var1
                        var0 = arg0;
                        var1 = var0.user;
                        var0 = null;
                        var0 = var0 != var1;
                        return var0;
                    };
                    var7 = var3.bind(var6)(var0);
                    var6 = _closure2_slot4;
                    var3 = var6.map;
                    var0 = function(arg0) { // Environment: var1
                        var1 = arg0;
                        var0 = {};
                        var4 = _closure1_slot8;
                        var3 = var4.getUser;
                        var2 = var1.id;
                        var2 = var3.bind(var4)(var2);
                        var0.user = var2;
                        var2 = true;
                        var0.isGameRelationship = var2;
                        var1 = var1.applicationId;
                        var0.applicationId = var1;
                        return var0;
                    };
                    var6 = var3.bind(var6)(var0);
                    var3 = var6.filter;
                    var0 = function(arg0) { // Environment: var1
                        var0 = arg0;
                        var1 = var0.user;
                        var0 = null;
                        var0 = var0 != var1;
                        return var0;
                    };
                    var6 = var3.bind(var6)(var0);
                    var0 = {};
                    var8 = new Array(0);
                    var11 = var8;
                    var9 = 0;
                    var9 = arraySpread(var11, var10, var9);
                    var11 = var8;
                    var10 = var5;
                    var4 = arraySpread(var11, var10, var9);
                    var4 = var8.sort;
                    var5 = _closure1_slot18;
                    var4 = var4.bind(var8)(var5);
                    var0.incoming = var4;
                    var4 = new Array(0);
                    var11 = var4;
                    var10 = var7;
                    var9 = 0;
                    var9 = arraySpread(var11, var10, var9);
                    var11 = var4;
                    var10 = var6;
                    var3 = arraySpread(var11, var10, var9);
                    var3 = var4.sort;
                    var3 = var3.bind(var4)(var5);
                    var0.outgoing = var3;
                    var5 = _closure2_slot7;
                    var4 = var5.map;
                    var3 = function(arg0) { // Environment: var1
                        var0 = {};
                        var3 = _closure1_slot8;
                        var2 = var3.getUser;
                        var1 = arg0;
                        var1 = var2.bind(var3)(var1);
                        var0.user = var1;
                        return var0;
                    };
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.filter;
                    var3 = function(arg0) { // Environment: var1
                        var0 = arg0;
                        var1 = var0.user;
                        var0 = null;
                        var0 = var0 != var1;
                        return var0;
                    };
                    var3 = var4.bind(var5)(var3);
                    var0.spam = var3;
                    var4 = _closure2_slot8;
                    var3 = var4.map;
                    var2 = function(arg0) { // Environment: var1
                        var0 = {};
                        var3 = _closure1_slot8;
                        var2 = var3.getUser;
                        var1 = arg0;
                        var1 = var2.bind(var3)(var1);
                        var0.user = var1;
                        return var0;
                    };
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.filter;
                    var1 = function(arg0) { // Environment: var1
                        var0 = arg0;
                        var1 = var0.user;
                        var0 = null;
                        var0 = var0 != var1;
                        return var0;
                    };
                    var1 = var2.bind(var3)(var1);
                    var0.ignoredUsers = var1;
                    return var0;
                };
                var34 = var15;
                var33 = var8;
                var31 = var7;
                var8 = var34[var14](var33, var32, var31, var30, var29);
                var1 = var8.incoming;
                var _closure2_slot9 = var1;
                var2 = var8.outgoing;
                var _closure2_slot10 = var2;
                var7 = var8.spam;
                var _closure2_slot11 = var7;
                var14 = var8.ignoredUsers;
                var _closure2_slot12 = var14;
                var18 = var13.useMemo;
                var15 = new Array(4);
                var15[0] = var14;
                var15[1] = var1;
                var15[2] = var2;
                var15[3] = var7;
                var8 = function() { // Environment: var24
                    _fun108628: for (var _fun108628_ip = 0;;) switch (_fun108628_ip) {
                        case 0:
                            var0 = _closure2_slot11;
                            var2 = var0.length;
                            var0 = _closure2_slot12;
                            var0 = var0.length;
                            var5 = var2 + var0;
                            var0 = {};
                            var4 = {};
                            var2 = _closure2_slot9;
                            var4.items = var2;
                            var6 = _closure1_slot12;
                            var6 = var6.PENDING_INCOMING;
                            var4.relationship = var6;
                            var0.incomingData = var4;
                            var4 = var2.length;
                            var2 = new Array(2);
                            var2[0] = var4;
                            var4 = 0;
                            if (!(var5 > var4)) {
                                _fun108628_ip = 82;
                                continue _fun108628
                            }
                        case 79:
                            var4 = 1;
                        case 82:
                            var2[1] = var4;
                            var0.incomingSection = var2;
                            var2 = {};
                            var1 = _closure2_slot10;
                            var2.items = var1;
                            var3 = _closure1_slot12;
                            var3 = var3.PENDING_OUTGOING;
                            var2.relationship = var3;
                            var0.outgoingData = var2;
                            var2 = var1.length;
                            var1 = new Array(1);
                            var1[0] = var2;
                            var0.outgoingSection = var1;
                            return var0;
                    }
                };
                var8 = var18.bind(var13)(var8, var15);
                var21 = var8.incomingData;
                var _closure2_slot13 = var21;
                var18 = var8.incomingSection;
                var20 = var8.outgoingData;
                var _closure2_slot14 = var20;
                var15 = var8.outgoingSection;
                var22 = var13.useState;
                var8 = function() { // Environment: var24
                    _fun108629: for (var _fun108629_ip = 0;;) switch (_fun108629_ip) {
                        case 0:
                            var1 = _closure2_slot9;
                            var2 = var1.length;
                            var1 = 0;
                            if (!(var1 === var2)) {
                                _fun108629_ip = 31;
                                continue _fun108629
                            }
                        case 18:
                            var0 = _closure2_slot10;
                            var0 = var0.length;
                            if (!(!(var0 > var1))) {
                                _fun108629_ip = 46;
                                continue _fun108629
                            }
                        case 31:
                            var0 = _closure1_slot16;
                            var0 = var0.Incoming;
                            _fun108629_ip = 59;
                            continue _fun108629;
                        case 46:
                            var1 = _closure1_slot16;
                            var0 = var1.Outgoing;
                        case 59:
                            return var0;
                    }
                };
                var8 = var22.bind(var13)(var8);
                var8 = var19.bind(var3)(var8, var17);
                var17 = var8[var6];
                var _closure2_slot15 = var17;
                var8 = var8[var10];
                var _closure2_slot16 = var8;
                var19 = var13.useCallback;
                var10 = new Array(1);
                var10[0] = var4;
                var8 = function(arg0) { // Environment: var24
                    var3 = arg0;
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 28;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = {};
                    var4 = var3.id;
                    var1.userId = var4;
                    var1.localUser = var3;
                    var3 = _closure2_slot0;
                    var1.sourceAnalyticsLocations = var3;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var19 = var19.bind(var13)(var8, var10);
                var _closure2_slot17 = var19;
                var22 = var13.useCallback;
                var10 = function(arg0) { // Environment: var24
                    _fun108631: for (var _fun108631_ip = 0;;) switch (_fun108631_ip) {
                        case 0:
                            var1 = 1;
                            var0 = arg0;
                            if (!(var1 !== var0)) {
                                _fun108631_ip = 14;
                                continue _fun108631
                            }
                        case 10:
                            var0 = undefined;
                            return var0;
                        case 14:
                            var0 = {};
                            var1 = 'section';
                            var0.type = var1;
                            var1 = {};
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var2 = 29;
                            var3 = var7[var2];
                            var5 = undefined;
                            var3 = var6.bind(var5)(var3);
                            var4 = var3.intl;
                            var3 = var4.string;
                            var2 = var7[var2];
                            var2 = var6.bind(var5)(var2);
                            var2 = var2.t;
                            var2 = var2["NHpP/k"];
                            var2 = var3.bind(var4)(var2);
                            var1.title = var2;
                            var0.props = var1;
                            return var0;
                    }
                };
                var8 = new Array(0);
                var10 = var22.bind(var13)(var10, var8);
                var8 = 30;
                var8 = var11[var8];
                var9 = var9.bind(var3)(var8);
                var8 = var9.useNavigation;
                var8 = var8.bind(var9)();
                var _closure2_slot18 = var8;
                var11 = var13.useCallback;
                var9 = new Array(7);
                var9[0] = var17;
                var9[1] = var21;
                var9[2] = var20;
                var9[3] = var19;
                var19 = var7.length;
                var9[4] = var19;
                var14 = var14.length;
                var9[5] = var14;
                var9[6] = var8;
                var8 = function(arg0, arg1) { // Environment: var24
                    _fun108632: for (var _fun108632_ip = 0;;) switch (_fun108632_ip) {
                        case 0:
                            var3 = arg1;
                            var5 = 1;
                            var0 = arg0;
                            if (!(var5 !== var0)) {
                                _fun108632_ip = 173;
                                continue _fun108632
                            }
                        case 16:
                            var1 = _closure2_slot15;
                            var0 = _closure1_slot16;
                            var0 = var0.Incoming;
                            if (!(var1 !== var0)) {
                                _fun108632_ip = 46;
                                continue _fun108632
                            }
                        case 40:
                            var7 = _closure2_slot14;
                            _fun108632_ip = 50;
                            continue _fun108632;
                        case 46:
                            var7 = _closure2_slot13;
                        case 50:
                            var2 = var7.items;
                            var0 = {};
                            var1 = 'user';
                            var0.type = var1;
                            var1 = {};
                            var7 = var7.relationship;
                            var1.type = var7;
                            var7 = var2[var3];
                            var7 = var7.user;
                            var1.user = var7;
                            var6 = _closure2_slot17;
                            var1.onPress = var6;
                            var4 = _closure1_slot9;
                            var4 = var4.ACTIONS;
                            var1.mode = var4;
                            var4 = 0;
                            var4 = var4 === var3;
                            var1.start = var4;
                            var4 = var2.length;
                            var4 = var4 - var5;
                            var4 = var3 === var4;
                            var1.end = var4;
                            var4 = var2[var3];
                            var4 = var4.applicationId;
                            var1.applicationId = var4;
                            var2 = var2[var3];
                            var2 = var2.isGameRelationship;
                            var1.isGameRelationship = var2;
                            var0.props = var1;
                            return var0;
                        case 173:
                            var0 = {
                                'type': 'custom',
                                'component': null,
                                'key': 'spamRequests',
                                'itemType': 'spamRequests'
                            };
                            var1 = function() {
                                _fun108633: for (var _fun108633_ip = 0;;) switch (_fun108633_ip) {
                                    case 0:
                                        var3 = _closure1_slot15;
                                        var1 = _closure1_slot0;
                                        var2 = _closure1_slot2;
                                        var0 = 31;
                                        var0 = var2[var0];
                                        var2 = undefined;
                                        var0 = var1.bind(var2)(var0);
                                        var1 = var0.TableRowGroup;
                                        var0 = {};
                                        var4 = _closure2_slot11;
                                        var4 = var4.length;
                                        var8 = 0;
                                        var4 = var4 > var8;
                                        var7 = null;
                                        if (!var4) {
                                            _fun108633_ip = 229;
                                            continue _fun108633
                                        }
                                    case 65:
                                        var12 = _closure1_slot14;
                                        var14 = _closure1_slot0;
                                        var15 = _closure1_slot2;
                                        var4 = 32;
                                        var4 = var15[var4];
                                        var4 = var14.bind(var2)(var4);
                                        var10 = var4.TableRow;
                                        var4 = {};
                                        var13 = function() {
                                            var3 = _closure2_slot18;
                                            var2 = var3.navigate;
                                            var1 = {};
                                            var0 = 'spam-requests';
                                            var1.screen = var0;
                                            var0 = 'friends';
                                            var0 = var2.bind(var3)(var0, var1);
                                            var0 = undefined;
                                            return var0;
                                        };
                                        var4.onPress = var13;
                                        var13 = 29;
                                        var16 = var15[var13];
                                        var16 = var14.bind(var2)(var16);
                                        var17 = var16.intl;
                                        var16 = var17.string;
                                        var13 = var15[var13];
                                        var13 = var14.bind(var2)(var13);
                                        var13 = var13.t;
                                        var13 = var13.fUQoqD;
                                        var13 = var16.bind(var17)(var13);
                                        var4.label = var13;
                                        var13 = 33;
                                        var13 = var15[var13];
                                        var13 = var14.bind(var2)(var13);
                                        var14 = var13.Text;
                                        var13 = {
                                            'variant': 'text-sm/medium',
                                            'color': 'text-muted'
                                        };
                                        var15 = _closure2_slot11;
                                        var15 = var15.length;
                                        var13.children = var15;
                                        var13 = var12.bind(var2)(var14, var13);
                                        var4.trailing = var13;
                                        var13 = true;
                                        var4.arrow = var13;
                                        var7 = var12.bind(var2)(var10, var4);
                                    case 229:
                                        var4 = new Array(2);
                                        var4[0] = var7;
                                        var7 = _closure2_slot12;
                                        var7 = var7.length;
                                        var7 = var7 > var8;
                                        var5 = null;
                                        if (!var7) {
                                            _fun108633_ip = 422;
                                            continue _fun108633
                                        }
                                    case 258:
                                        var8 = _closure1_slot14;
                                        var10 = _closure1_slot0;
                                        var12 = _closure1_slot2;
                                        var6 = 32;
                                        var6 = var12[var6];
                                        var6 = var10.bind(var2)(var6);
                                        var7 = var6.TableRow;
                                        var6 = {};
                                        var9 = function() {
                                            var3 = _closure2_slot18;
                                            var2 = var3.navigate;
                                            var1 = {};
                                            var0 = 'ignored-user-requests';
                                            var1.screen = var0;
                                            var0 = 'friends';
                                            var0 = var2.bind(var3)(var0, var1);
                                            var0 = undefined;
                                            return var0;
                                        };
                                        var6.onPress = var9;
                                        var9 = 29;
                                        var13 = var12[var9];
                                        var13 = var10.bind(var2)(var13);
                                        var14 = var13.intl;
                                        var13 = var14.string;
                                        var9 = var12[var9];
                                        var9 = var10.bind(var2)(var9);
                                        var9 = var9.t;
                                        var9 = var9.en1Gkz;
                                        var9 = var13.bind(var14)(var9);
                                        var6.label = var9;
                                        var9 = 33;
                                        var9 = var12[var9];
                                        var9 = var10.bind(var2)(var9);
                                        var10 = var9.Text;
                                        var9 = {
                                            'variant': 'text-sm/medium',
                                            'color': 'text-muted'
                                        };
                                        var11 = _closure2_slot12;
                                        var11 = var11.length;
                                        var9.children = var11;
                                        var9 = var8.bind(var2)(var10, var9);
                                        var6.trailing = var9;
                                        var9 = true;
                                        var6.arrow = var9;
                                        var5 = var8.bind(var2)(var7, var6);
                                    case 422:
                                        var4[1] = var5;
                                        var0.children = var4;
                                        var0 = var3.bind(var2)(var1, var0);
                                        return var0;
                                }
                            };
                            var0.component = var1;
                            return var0;
                    }
                };
                var13 = var11.bind(var13)(var8, var9);
                var8 = _closure1_slot16;
                var8 = var8.Outgoing;
                var8 = var17 === var8;
                if (!var8) {
                    _fun108602_ip = 769;
                    continue _fun108602
                }
            case 760:
                var2 = var2.length;
                var8 = var6 === var2;
            case 769:
                if (var8) {
                    _fun108602_ip = 825;
                    continue _fun108602
                }
            case 772:
                var2 = _closure1_slot16;
                var2 = var2.Incoming;
                var2 = var17 === var2;
                if (!var2) {
                    _fun108602_ip = 798;
                    continue _fun108602
                }
            case 789:
                var9 = var1.length;
                var2 = var6 === var9;
            case 798:
                if (!var2) {
                    _fun108602_ip = 810;
                    continue _fun108602
                }
            case 801:
                var7 = var7.length;
                var2 = var6 === var7;
            case 810:
                if (!var2) {
                    _fun108602_ip = 822;
                    continue _fun108602
                }
            case 813:
                var5 = var5.length;
                var2 = var6 === var5;
            case 822:
                var8 = var2;
            case 825:
                var2 = _closure1_slot16;
                var2 = var2.Incoming;
                var11 = var17 === var2;
                if (!var11) {
                    _fun108602_ip = 855;
                    continue _fun108602
                }
            case 842:
                var2 = var1.length;
                var1 = _closure1_slot13;
                var11 = var2 >= var1;
            case 855:
                var22 = _closure1_slot0;
                var25 = _closure1_slot2;
                var1 = 34;
                var1 = var25[var1];
                var5 = var22.bind(var3)(var1);
                var2 = var5.useSegmentedControlState;
                var1 = {};
                var1.pageWidth = var6;
                var1.defaultIndex = var17;
                var6 = function arg0() {
                    _fun108636: for (var _fun108636_ip = 0;;) switch (_fun108636_ip) {
                        case 0:
                            var2 = _closure2_slot16;
                            var1 = 0;
                            var0 = arg0;
                            if (!(var1 !== var0)) {
                                _fun108636_ip = 31;
                                continue _fun108636
                            }
                        case 16:
                            var0 = _closure1_slot16;
                            var1 = var0.Outgoing;
                            _fun108636_ip = 44;
                            continue _fun108636;
                        case 31:
                            var0 = _closure1_slot16;
                            var1 = var0.Incoming;
                        case 44:
                            var0 = undefined;
                            var1 = var2.bind(var0)(var1);
                            return var0;
                    }
                };
                var1.onSetActiveIndex = var6;
                var7 = {};
                var14 = _closure1_slot16;
                var9 = var14.Incoming;
                var6 = var9.toString;
                var6 = var6.bind(var9)();
                var7.id = var6;
                var20 = 29;
                var6 = var25[var20];
                var6 = var22.bind(var3)(var6);
                var19 = var6.intl;
                var9 = var19.string;
                var6 = var25[var20];
                var6 = var22.bind(var3)(var6);
                var6 = var6.t;
                var6 = var6.bekioP;
                var6 = var9.bind(var19)(var6);
                var7.label = var6;
                var9 = null;
                var7.page = var9;
                var6 = new Array(2);
                var6[0] = var7;
                var7 = {};
                var19 = var14.Outgoing;
                var14 = var19.toString;
                var14 = var14.bind(var19)();
                var7.id = var14;
                var14 = var25[var20];
                var14 = var22.bind(var3)(var14);
                var21 = var14.intl;
                var19 = var21.string;
                var14 = var25[var20];
                var14 = var22.bind(var3)(var14);
                var14 = var14.t;
                var14 = var14.tWqcIF;
                var14 = var19.bind(var21)(var14);
                var7.label = var14;
                var7.page = var9;
                var6[1] = var7;
                var1.items = var6;
                var23 = var2.bind(var5)(var1);
                var2 = _closure1_slot15;
                var0 = var25[var0];
                var0 = var22.bind(var3)(var0);
                var1 = var0.AnalyticsLocationProvider;
                var0 = {};
                var0.value = var4;
                var19 = _closure1_slot14;
                var5 = _closure1_slot1;
                var4 = 35;
                var4 = var25[var4];
                var5 = var5.bind(var3)(var4);
                var4 = {};
                var14 = true;
                var4.absolute = var14;
                var5 = var19.bind(var3)(var5, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var6 = _closure1_slot5;
                var5 = {};
                var7 = var12.container;
                var5.style = var7;
                var7 = {};
                var21 = var12.tabs;
                var7.style = var21;
                var21 = 36;
                var21 = var25[var21];
                var21 = var22.bind(var3)(var21);
                var22 = var21.SegmentedControl;
                var21 = {};
                var21.state = var23;
                var21 = var19.bind(var3)(var22, var21);
                var7.children = var21;
                var19 = var19.bind(var3)(var6, var7);
                var7 = new Array(3);
                var7[0] = var19;
                if (!var11) {
                    _fun108602_ip = 1412;
                    continue _fun108602
                }
            case 1236:
                var21 = _closure1_slot14;
                var19 = _closure1_slot5;
                var11 = {};
                var22 = var12.clearAllContainer;
                var11.style = var22;
                var29 = _closure1_slot0;
                var26 = _closure1_slot2;
                var22 = 37;
                var22 = var26[var22];
                var22 = var29.bind(var3)(var22);
                var23 = var22.PressableOpacity;
                var22 = {};
                var25 = var12.clearAll;
                var22.style = var25;
                var24 = function() {
                    var0 = _closure2_slot9;
                    var2 = var0.length;
                    var1 = function arg0() {
                        var3 = _closure1_slot4;
                        var2 = var3.lazy;
                        var0 = function() { // Environment: var0
                            var2 = _closure1_slot0;
                            var0 = _closure1_slot2;
                            var1 = 13;
                            var1 = var0[var1];
                            var3 = undefined;
                            var2 = var2.bind(var3)(var1);
                            var1 = 12;
                            var1 = var0[var1];
                            var0 = var0.paths;
                            var0 = var2.bind(var3)(var1, var0);
                            return var0;
                        };
                        var5 = var2.bind(var3)(var0);
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var0 = 14;
                        var2 = var2[var0];
                        var0 = undefined;
                        var4 = var3.bind(var0)(var2);
                        var3 = var4.openAlert;
                        var2 = _closure1_slot14;
                        var1 = {};
                        var6 = arg0;
                        var1.incomingRequestCount = var6;
                        var2 = var2.bind(var0)(var5, var1);
                        var1 = 'clear-all-incoming-requests';
                        var1 = var3.bind(var4)(var1, var2);
                        return var0;
                    };
                    var0 = undefined;
                    var1 = var1.bind(var0)(var2);
                    return var0;
                };
                var22.onPress = var24;
                var24 = 33;
                var24 = var26[var24];
                var24 = var29.bind(var3)(var24);
                var25 = var24.Text;
                var24 = {
                    'variant': 'text-sm/semibold',
                    'color': 'text-brand'
                };
                var27 = var26[var20];
                var27 = var29.bind(var3)(var27);
                var28 = var27.intl;
                var27 = var28.string;
                var26 = var26[var20];
                var26 = var29.bind(var3)(var26);
                var26 = var26.t;
                var26 = var26.O8k7O4;
                var26 = var27.bind(var28)(var26);
                var24.children = var26;
                var24 = var21.bind(var3)(var25, var24);
                var22.children = var24;
                var22 = var21.bind(var3)(var23, var22);
                var11.children = var22;
                var9 = var21.bind(var3)(var19, var11);
            case 1412:
                var7[1] = var9;
                var11 = _closure1_slot14;
                if (var8) {
                    _fun108602_ip = 1494;
                    continue _fun108602
                }
            case 1423:
                var9 = _closure1_slot0;
                var19 = _closure1_slot2;
                var8 = 39;
                var8 = var19[var8];
                var8 = var9.bind(var3)(var8);
                var9 = var8.UsersFastList;
                var8 = {};
                var19 = _closure1_slot16;
                var19 = var19.Incoming;
                if (!(var17 === var19)) {
                    _fun108602_ip = 1468;
                    continue _fun108602
                }
            case 1465:
                var15 = var18;
            case 1468:
                var8.sections = var15;
                var8.getItemProps = var13;
                var8.getSectionProps = var10;
                var8 = var11.bind(var3)(var9, var8);
                _fun108602_ip = 1681;
                continue _fun108602;
            case 1494:
                var10 = _closure1_slot5;
                var9 = {};
                var12 = var12.noResultsContainer;
                var9.style = var12;
                var13 = _closure1_slot1;
                var15 = _closure1_slot2;
                var12 = 38;
                var12 = var15[var12];
                var13 = var13.bind(var3)(var12);
                var12 = {};
                var15 = _closure1_slot16;
                var15 = var15.Incoming;
                if (!(var17 !== var15)) {
                    _fun108602_ip = 1602;
                    continue _fun108602
                }
            case 1546:
                var19 = _closure1_slot0;
                var15 = _closure1_slot2;
                var17 = var15[var20];
                var17 = var19.bind(var3)(var17);
                var18 = var17.intl;
                var17 = var18.string;
                var15 = var15[var20];
                var15 = var19.bind(var3)(var15);
                var15 = var15.t;
                var15 = var15["yvzX/Z"];
                var15 = var17.bind(var18)(var15);
                _fun108602_ip = 1656;
                continue _fun108602;
            case 1602:
                var19 = _closure1_slot0;
                var16 = _closure1_slot2;
                var17 = var16[var20];
                var17 = var19.bind(var3)(var17);
                var18 = var17.intl;
                var17 = var18.string;
                var16 = var16[var20];
                var16 = var19.bind(var3)(var16);
                var16 = var16.t;
                var16 = var16["7uvAKe"];
                var15 = var17.bind(var18)(var16);
            case 1656:
                var12.title = var15;
                var12.disableBackgroundOverlay = var14;
                var12 = var11.bind(var3)(var13, var12);
                var9.children = var12;
                var8 = var11.bind(var3)(var10, var9);
            case 1681:
                var7[2] = var8;
                var5.children = var7;
                var5 = var2.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 3961, 3091, 1613, 8876, 660, 9004, 33, 1297, 671, 14008, 1307, 4020, 632, 3962, 1348, 13461, 4218, 21, 5721, 5574, 795, 11953, 6874, 14009, 644, 7345, 1234, 1469, 5358, 4893, 3932, 7790, 8705, 8183, 4897, 9152, 9077, 2]);