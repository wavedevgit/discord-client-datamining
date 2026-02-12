// modules/main_tabs_v2/native/friends/screens/FriendRequestsScreen.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function arg0, arg1() {
        _fun109325: for (var _fun109325_ip = 0;;) switch (_fun109325_ip) {
            case 0:
                var2 = arg0;
                var1 = arg1;
                var0 = var2.user;
                var3 = var0.id;
                var0 = var1.user;
                var0 = var0.id;
                if (!(var3 !== var0)) {
                    _fun109325_ip = 89;
                    continue _fun109325
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
                _fun109325_ip = 136;
                continue _fun109325;
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
    var _closure1_slot19 = var0;
    var0 = global;
    var9 = var0.Object;
    var7 = var9.defineProperty;
    var3 = {};
    var8 = true;
    var3.value = var8;
    var0 = '__esModule';
    var0 = var7.bind(var9)(var2, var0, var3);
    var10 = 0;
    var3 = var5[var10];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var15 = 1;
    var7 = var5[var15];
    var3 = arg3;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot4 = var3;
    var16 = 2;
    var3 = var5[var16];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot5 = var3;
    var13 = 3;
    var3 = var5[var13];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var14 = 5;
    var3 = var5[var14];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.UserRowModes;
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.AnalyticEvents;
    var _closure1_slot10 = var7;
    var7 = var3.AnalyticsSections;
    var _closure1_slot11 = var7;
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
    var7 = var3.jsx;
    var _closure1_slot14 = var7;
    var3 = var3.jsxs;
    var _closure1_slot15 = var3;
    var3 = {};
    var3.Incoming = var10;
    var9 = 'Incoming';
    var3[var10] = var9;
    var3.Outgoing = var15;
    var9 = 'Outgoing';
    var3[var15] = var9;
    var _closure1_slot16 = var3;
    var3 = 10;
    var3 = var5[var3];
    var10 = var4.bind(var0)(var3);
    var9 = var10.createStyles;
    var3 = {};
    var11 = {};
    var11.flex = var15;
    var3.container = var11;
    var11 = {};
    var12 = 11;
    var17 = var5[var12];
    var17 = var6.bind(var0)(var17);
    var17 = var17.colors;
    var17 = var17.BACKGROUND_BASE_LOWER;
    var11.backgroundColor = var17;
    var11.flex = var15;
    var3.noResultsContainer = var11;
    var11 = {};
    var15 = var5[var12];
    var15 = var6.bind(var0)(var15);
    var15 = var15.colors;
    var15 = var15.BACKGROUND_BASE_LOWER;
    var11.backgroundColor = var15;
    var15 = var5[var12];
    var15 = var6.bind(var0)(var15);
    var15 = var15.spacing;
    var15 = var15.PX_16;
    var11.paddingHorizontal = var15;
    var15 = var5[var12];
    var15 = var6.bind(var0)(var15);
    var15 = var15.spacing;
    var15 = var15.PX_16;
    var11.paddingBottom = var15;
    var15 = 'flex-end';
    var11.justifyContent = var15;
    var15 = 'row';
    var11.flexDirection = var15;
    var3.clearAllContainer = var11;
    var11 = {};
    var15 = var5[var12];
    var15 = var6.bind(var0)(var15);
    var15 = var15.colors;
    var15 = var15.INPUT_BACKGROUND_DEFAULT;
    var11.backgroundColor = var15;
    var15 = var5[var12];
    var15 = var6.bind(var0)(var15);
    var15 = var15.colors;
    var15 = var15.INPUT_BACKGROUND_DEFAULT;
    var11.borderColor = var15;
    var15 = var5[var12];
    var15 = var6.bind(var0)(var15);
    var15 = var15.spacing;
    var15 = var15.PX_16;
    var11.paddingHorizontal = var15;
    var15 = var5[var12];
    var15 = var6.bind(var0)(var15);
    var15 = var15.spacing;
    var15 = var15.PX_64;
    var15 = var16 * var15;
    var11.minWidth = var15;
    var15 = var5[var12];
    var15 = var6.bind(var0)(var15);
    var15 = var15.radii;
    var15 = var15.round;
    var11.borderRadius = var15;
    var15 = 'center';
    var11.alignItems = var15;
    var11.paddingVertical = var14;
    var11.borderWidth = var13;
    var3.clearAll = var11;
    var11 = {};
    var13 = var5[var12];
    var13 = var6.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_BASE_LOWER;
    var11.backgroundColor = var13;
    var13 = var5[var12];
    var13 = var6.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_16;
    var11.paddingHorizontal = var13;
    var13 = var5[var12];
    var13 = var6.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_16;
    var11.paddingBottom = var13;
    var12 = var5[var12];
    var12 = var6.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_8;
    var11.paddingTop = var12;
    var3.tabs = var11;
    var3 = var9.bind(var10)(var3);
    var _closure1_slot17 = var3;
    var3 = 21;
    var3 = var5[var3];
    var6 = var6.bind(var0)(var3);
    var3 = {};
    var3.absolute = var8;
    var3 = var7.bind(var0)(var6, var3);
    var _closure1_slot18 = var3;
    var3 = 40;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/main_tabs_v2/native/friends/screens/FriendRequestsScreen.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        _fun109326: for (var _fun109326_ip = 0;;) switch (_fun109326_ip) {
            case 0:
                var0 = _closure1_slot17;
                var3 = undefined;
                var12 = var0.bind(var3)();
                var2 = _closure1_slot1;
                var11 = _closure1_slot2;
                var0 = 22;
                var1 = var11[var0];
                var4 = var2.bind(var3)(var1);
                var1 = 23;
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
                            _fun109329: for (var _fun109329_ip = 0;;) switch (_fun109329_ip) {
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
                                        _fun109329_ip = 90;
                                        continue _fun109329
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
                        _fun109330: for (var _fun109330_ip = 0;;) switch (_fun109330_ip) {
                            case 0:
                                var2 = _closure3_slot0;
                                var3 = var2.length;
                                var2 = 0;
                                if (!(var3 > var2)) {
                                    _fun109330_ip = 132;
                                    continue _fun109330
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
                var5 = function() { // Environment: var23
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 24;
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
                var1 = function() { // Environment: var23
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
                var16 = 2;
                var1 = var19.bind(var3)(var1, var16);
                var6 = 0;
                var14 = var1[var6];
                var _closure2_slot1 = var14;
                var10 = 1;
                var1 = var1[var10];
                var _closure2_slot2 = var1;
                var8 = 25;
                var5 = var11[var8];
                var20 = var9.bind(var3)(var5);
                var18 = var20.useGameRelationshipsByType;
                var5 = _closure1_slot12;
                var17 = var5.PENDING_INCOMING;
                var22 = var18.bind(var20)(var17);
                var _closure2_slot3 = var22;
                var8 = var11[var8];
                var17 = var9.bind(var3)(var8);
                var8 = var17.useGameRelationshipsByType;
                var5 = var5.PENDING_OUTGOING;
                var21 = var8.bind(var17)(var5);
                var _closure2_slot4 = var21;
                var17 = var13.useMemo;
                var8 = new Array(2);
                var8[0] = var22;
                var8[1] = var21;
                var5 = function() { // Environment: var23
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
                var8 = var17.bind(var13)(var5, var8);
                var5 = 26;
                var5 = var11[var5];
                var5 = var2.bind(var3)(var5);
                var5 = var5.bind(var3)(var8);
                var8 = var13.useMemo;
                var5 = new Array(2);
                var5[0] = var14;
                var5[1] = var1;
                var1 = function() { // Environment: var23
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 27;
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
                var17 = var9.bind(var3)(var7);
                var14 = var17.useStateFromStores;
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
                var1 = 28;
                var1 = var11[var1];
                var29 = var2.bind(var3)(var1);
                var31 = function() { // Environment: var23
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
                    var5 = _closure1_slot19;
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
                var33 = var17;
                var32 = var8;
                var30 = var7;
                var8 = var33[var14](var32, var31, var30, var29, var28);
                var1 = var8.incoming;
                var _closure2_slot9 = var1;
                var2 = var8.outgoing;
                var _closure2_slot10 = var2;
                var7 = var8.spam;
                var _closure2_slot11 = var7;
                var18 = var8.ignoredUsers;
                var _closure2_slot12 = var18;
                var17 = var13.useMemo;
                var14 = new Array(4);
                var14[0] = var18;
                var14[1] = var1;
                var14[2] = var2;
                var14[3] = var7;
                var8 = function() { // Environment: var23
                    _fun109352: for (var _fun109352_ip = 0;;) switch (_fun109352_ip) {
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
                                _fun109352_ip = 82;
                                continue _fun109352
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
                var8 = var17.bind(var13)(var8, var14);
                var21 = var8.incomingData;
                var _closure2_slot13 = var21;
                var17 = var8.incomingSection;
                var20 = var8.outgoingData;
                var _closure2_slot14 = var20;
                var14 = var8.outgoingSection;
                var22 = var13.useState;
                var8 = function() { // Environment: var23
                    _fun109353: for (var _fun109353_ip = 0;;) switch (_fun109353_ip) {
                        case 0:
                            var1 = _closure2_slot9;
                            var2 = var1.length;
                            var1 = 0;
                            if (!(var1 === var2)) {
                                _fun109353_ip = 31;
                                continue _fun109353
                            }
                        case 18:
                            var0 = _closure2_slot10;
                            var0 = var0.length;
                            if (!(!(var0 > var1))) {
                                _fun109353_ip = 46;
                                continue _fun109353
                            }
                        case 31:
                            var0 = _closure1_slot16;
                            var0 = var0.Incoming;
                            _fun109353_ip = 59;
                            continue _fun109353;
                        case 46:
                            var1 = _closure1_slot16;
                            var0 = var1.Outgoing;
                        case 59:
                            return var0;
                    }
                };
                var8 = var22.bind(var13)(var8);
                var8 = var19.bind(var3)(var8, var16);
                var16 = var8[var6];
                var _closure2_slot15 = var16;
                var8 = var8[var10];
                var _closure2_slot16 = var8;
                var19 = var13.useCallback;
                var10 = new Array(1);
                var10[0] = var4;
                var8 = function(arg0) { // Environment: var23
                    var3 = arg0;
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 29;
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
                var10 = function(arg0) { // Environment: var23
                    _fun109355: for (var _fun109355_ip = 0;;) switch (_fun109355_ip) {
                        case 0:
                            var1 = 1;
                            var0 = arg0;
                            if (!(var1 !== var0)) {
                                _fun109355_ip = 14;
                                continue _fun109355
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
                            var2 = 30;
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
                var8 = 31;
                var8 = var11[var8];
                var9 = var9.bind(var3)(var8);
                var8 = var9.useNavigation;
                var8 = var8.bind(var9)();
                var _closure2_slot18 = var8;
                var11 = var13.useCallback;
                var9 = new Array(7);
                var9[0] = var16;
                var9[1] = var21;
                var9[2] = var20;
                var9[3] = var19;
                var19 = var7.length;
                var9[4] = var19;
                var18 = var18.length;
                var9[5] = var18;
                var9[6] = var8;
                var8 = function(arg0, arg1) { // Environment: var23
                    _fun109356: for (var _fun109356_ip = 0;;) switch (_fun109356_ip) {
                        case 0:
                            var3 = arg1;
                            var5 = 1;
                            var0 = arg0;
                            if (!(var5 !== var0)) {
                                _fun109356_ip = 173;
                                continue _fun109356
                            }
                        case 16:
                            var1 = _closure2_slot15;
                            var0 = _closure1_slot16;
                            var0 = var0.Incoming;
                            if (!(var1 !== var0)) {
                                _fun109356_ip = 46;
                                continue _fun109356
                            }
                        case 40:
                            var7 = _closure2_slot14;
                            _fun109356_ip = 50;
                            continue _fun109356;
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
                                _fun109357: for (var _fun109357_ip = 0;;) switch (_fun109357_ip) {
                                    case 0:
                                        var3 = _closure1_slot15;
                                        var1 = _closure1_slot0;
                                        var2 = _closure1_slot2;
                                        var0 = 32;
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
                                            _fun109357_ip = 229;
                                            continue _fun109357
                                        }
                                    case 65:
                                        var12 = _closure1_slot14;
                                        var14 = _closure1_slot0;
                                        var15 = _closure1_slot2;
                                        var4 = 33;
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
                                        var13 = 30;
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
                                        var13 = 34;
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
                                            _fun109357_ip = 422;
                                            continue _fun109357
                                        }
                                    case 258:
                                        var8 = _closure1_slot14;
                                        var10 = _closure1_slot0;
                                        var12 = _closure1_slot2;
                                        var6 = 33;
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
                                        var9 = 30;
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
                                        var9 = 34;
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
                var8 = var16 === var8;
                if (!var8) {
                    _fun109326_ip = 769;
                    continue _fun109326
                }
            case 760:
                var2 = var2.length;
                var8 = var6 === var2;
            case 769:
                if (var8) {
                    _fun109326_ip = 825;
                    continue _fun109326
                }
            case 772:
                var2 = _closure1_slot16;
                var2 = var2.Incoming;
                var2 = var16 === var2;
                if (!var2) {
                    _fun109326_ip = 798;
                    continue _fun109326
                }
            case 789:
                var9 = var1.length;
                var2 = var6 === var9;
            case 798:
                if (!var2) {
                    _fun109326_ip = 810;
                    continue _fun109326
                }
            case 801:
                var7 = var7.length;
                var2 = var6 === var7;
            case 810:
                if (!var2) {
                    _fun109326_ip = 822;
                    continue _fun109326
                }
            case 813:
                var5 = var5.length;
                var2 = var6 === var5;
            case 822:
                var8 = var2;
            case 825:
                var2 = _closure1_slot16;
                var2 = var2.Incoming;
                var11 = var16 === var2;
                if (!var11) {
                    _fun109326_ip = 855;
                    continue _fun109326
                }
            case 842:
                var2 = var1.length;
                var1 = _closure1_slot13;
                var11 = var2 >= var1;
            case 855:
                var21 = _closure1_slot0;
                var24 = _closure1_slot2;
                var1 = 35;
                var1 = var24[var1];
                var5 = var21.bind(var3)(var1);
                var2 = var5.useSegmentedControlState;
                var1 = {};
                var1.pageWidth = var6;
                var1.defaultIndex = var16;
                var6 = function arg0() {
                    _fun109360: for (var _fun109360_ip = 0;;) switch (_fun109360_ip) {
                        case 0:
                            var2 = _closure2_slot16;
                            var1 = 0;
                            var0 = arg0;
                            if (!(var1 !== var0)) {
                                _fun109360_ip = 31;
                                continue _fun109360
                            }
                        case 16:
                            var0 = _closure1_slot16;
                            var1 = var0.Outgoing;
                            _fun109360_ip = 44;
                            continue _fun109360;
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
                var18 = _closure1_slot16;
                var9 = var18.Incoming;
                var6 = var9.toString;
                var6 = var6.bind(var9)();
                var7.id = var6;
                var19 = 30;
                var6 = var24[var19];
                var6 = var21.bind(var3)(var6);
                var20 = var6.intl;
                var9 = var20.string;
                var6 = var24[var19];
                var6 = var21.bind(var3)(var6);
                var6 = var6.t;
                var6 = var6.bekioP;
                var6 = var9.bind(var20)(var6);
                var7.label = var6;
                var9 = null;
                var7.page = var9;
                var6 = new Array(2);
                var6[0] = var7;
                var7 = {};
                var20 = var18.Outgoing;
                var18 = var20.toString;
                var18 = var18.bind(var20)();
                var7.id = var18;
                var18 = var24[var19];
                var18 = var21.bind(var3)(var18);
                var22 = var18.intl;
                var20 = var22.string;
                var18 = var24[var19];
                var18 = var21.bind(var3)(var18);
                var18 = var18.t;
                var18 = var18.tWqcIF;
                var18 = var20.bind(var22)(var18);
                var7.label = var18;
                var7.page = var9;
                var6[1] = var7;
                var1.items = var6;
                var22 = var2.bind(var5)(var1);
                var2 = _closure1_slot15;
                var0 = var24[var0];
                var0 = var21.bind(var3)(var0);
                var1 = var0.AnalyticsLocationProvider;
                var0 = {};
                var0.value = var4;
                var5 = _closure1_slot18;
                var4 = new Array(2);
                var4[0] = var5;
                var6 = _closure1_slot5;
                var5 = {};
                var7 = var12.container;
                var5.style = var7;
                var18 = _closure1_slot14;
                var7 = {};
                var20 = var12.tabs;
                var7.style = var20;
                var20 = 36;
                var20 = var24[var20];
                var20 = var21.bind(var3)(var20);
                var21 = var20.SegmentedControl;
                var20 = {};
                var20.state = var22;
                var20 = var18.bind(var3)(var21, var20);
                var7.children = var20;
                var18 = var18.bind(var3)(var6, var7);
                var7 = new Array(3);
                var7[0] = var18;
                if (!var11) {
                    _fun109326_ip = 1385;
                    continue _fun109326
                }
            case 1209:
                var20 = _closure1_slot14;
                var18 = _closure1_slot5;
                var11 = {};
                var21 = var12.clearAllContainer;
                var11.style = var21;
                var28 = _closure1_slot0;
                var25 = _closure1_slot2;
                var21 = 37;
                var21 = var25[var21];
                var21 = var28.bind(var3)(var21);
                var22 = var21.PressableOpacity;
                var21 = {};
                var24 = var12.clearAll;
                var21.style = var24;
                var23 = function() {
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
                var21.onPress = var23;
                var23 = 34;
                var23 = var25[var23];
                var23 = var28.bind(var3)(var23);
                var24 = var23.Text;
                var23 = {
                    'variant': 'text-sm/semibold',
                    'color': 'text-brand'
                };
                var26 = var25[var19];
                var26 = var28.bind(var3)(var26);
                var27 = var26.intl;
                var26 = var27.string;
                var25 = var25[var19];
                var25 = var28.bind(var3)(var25);
                var25 = var25.t;
                var25 = var25.O8k7O4;
                var25 = var26.bind(var27)(var25);
                var23.children = var25;
                var23 = var20.bind(var3)(var24, var23);
                var21.children = var23;
                var21 = var20.bind(var3)(var22, var21);
                var11.children = var21;
                var9 = var20.bind(var3)(var18, var11);
            case 1385:
                var7[1] = var9;
                var11 = _closure1_slot14;
                if (var8) {
                    _fun109326_ip = 1467;
                    continue _fun109326
                }
            case 1396:
                var9 = _closure1_slot0;
                var18 = _closure1_slot2;
                var8 = 39;
                var8 = var18[var8];
                var8 = var9.bind(var3)(var8);
                var9 = var8.UsersFastList;
                var8 = {};
                var18 = _closure1_slot16;
                var18 = var18.Incoming;
                if (!(var16 === var18)) {
                    _fun109326_ip = 1441;
                    continue _fun109326
                }
            case 1438:
                var14 = var17;
            case 1441:
                var8.sections = var14;
                var8.getItemProps = var13;
                var8.getSectionProps = var10;
                var8 = var11.bind(var3)(var9, var8);
                _fun109326_ip = 1656;
                continue _fun109326;
            case 1467:
                var10 = _closure1_slot5;
                var9 = {};
                var12 = var12.noResultsContainer;
                var9.style = var12;
                var13 = _closure1_slot1;
                var14 = _closure1_slot2;
                var12 = 38;
                var12 = var14[var12];
                var13 = var13.bind(var3)(var12);
                var12 = {};
                var14 = _closure1_slot16;
                var14 = var14.Incoming;
                if (!(var16 !== var14)) {
                    _fun109326_ip = 1575;
                    continue _fun109326
                }
            case 1519:
                var18 = _closure1_slot0;
                var14 = _closure1_slot2;
                var16 = var14[var19];
                var16 = var18.bind(var3)(var16);
                var17 = var16.intl;
                var16 = var17.string;
                var14 = var14[var19];
                var14 = var18.bind(var3)(var14);
                var14 = var14.t;
                var14 = var14["yvzX/Z"];
                var14 = var16.bind(var17)(var14);
                _fun109326_ip = 1629;
                continue _fun109326;
            case 1575:
                var18 = _closure1_slot0;
                var15 = _closure1_slot2;
                var16 = var15[var19];
                var16 = var18.bind(var3)(var16);
                var17 = var16.intl;
                var16 = var17.string;
                var15 = var15[var19];
                var15 = var18.bind(var3)(var15);
                var15 = var15.t;
                var15 = var15["7uvAKe"];
                var14 = var16.bind(var17)(var15);
            case 1629:
                var12.title = var14;
                var14 = true;
                var12.disableBackgroundOverlay = var14;
                var12 = var11.bind(var3)(var13, var12);
                var9.children = var12;
                var8 = var11.bind(var3)(var10, var9);
            case 1656:
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 3965, 3102, 1621, 7689, 660, 8608, 33, 1297, 671, 14080, 1307, 4024, 632, 3966, 1348, 13532, 4228, 21, 7690, 5785, 5639, 795, 8805, 6979, 14081, 644, 8334, 1234, 1469, 5343, 4876, 3938, 8321, 8322, 4880, 11671, 8909, 2]);