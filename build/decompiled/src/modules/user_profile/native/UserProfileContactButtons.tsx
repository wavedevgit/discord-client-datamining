// modules/user_profile/native/UserProfileContactButtons.tsx
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
        _fun92102: for (var _fun92102_ip = 0;;) switch (_fun92102_ip) {
            case 0:
                var3 = arg0;
                var12 = var3.icon;
                var9 = var3.label;
                var1 = var3.hasCustomProfileTheme;
                var2 = {
                    'icon': 0,
                    'label': 0,
                    'hasCustomProfileTheme': 0
                };
                var15 = null;
                var16 = var2;
                var0 = silentSetPrototypeOf(var16, var15);
                var16 = {};
                var15 = var3;
                var14 = var2;
                var7 = copyDataProperties(var16, var15, var14);
                var0 = _closure1_slot8;
                var3 = undefined;
                var4 = var0.bind(var3)();
                var8 = 'secondary';
                if (!var1) {
                    _fun92102_ip = 78;
                    continue _fun92102
                }
            case 74:
                var8 = 'primary';
            case 78:
                var2 = _closure1_slot1;
                var5 = _closure1_slot2;
                var0 = 7;
                var0 = var5[var0];
                var0 = var2.bind(var3)(var0);
                var0 = var0.colors;
                if (var1) {
                    _fun92102_ip = 114;
                    continue _fun92102
                }
            case 106:
                var13 = var0.CONTROL_SECONDARY_TEXT_DEFAULT;
                _fun92102_ip = 120;
                continue _fun92102;
            case 114:
                var13 = var0.WHITE;
            case 120:
                var2 = _closure1_slot6;
                var1 = _closure1_slot3;
                var0 = {};
                var4 = var4.buttonArea;
                var0.style = var4;
                var6 = _closure1_slot6;
                var5 = _closure1_slot0;
                var11 = _closure1_slot2;
                var4 = 8;
                var4 = var11[var4];
                var4 = var5.bind(var3)(var4);
                var5 = var4.IconButton;
                var4 = {};
                var11 = _closure1_slot6;
                var10 = {};
                var10.color = var13;
                var10 = var11.bind(var3)(var12, var10);
                var4.icon = var10;
                var4.label = var9;
                var4.accessibilityLabel = var9;
                var4.variant = var8;
                var16 = var4;
                var15 = var7;
                var7 = copyDataProperties(var16, var15);
                var8 = true;
                var7 = 'grow';
                var4[var7] = var8;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot9 = var0;
    var0 = function arg0() {
        _fun92103: for (var _fun92103_ip = 0;;) switch (_fun92103_ip) {
            case 0:
                var4 = arg0;
                var9 = var4.icon;
                var6 = var4.label;
                var0 = var4.hasCustomProfileTheme;
                var2 = var4.isPending;
                var3 = {
                    'icon': 0,
                    'label': 0,
                    'hasCustomProfileTheme': 0,
                    'isPending': 0
                };
                var12 = null;
                var13 = var3;
                var1 = silentSetPrototypeOf(var13, var12);
                var13 = {};
                var12 = var4;
                var11 = var3;
                var4 = copyDataProperties(var13, var12, var11);
                var1 = false;
                if (!(var1 !== var2)) {
                    _fun92103_ip = 69;
                    continue _fun92103
                }
            case 62:
                var5 = 'secondary';
                if (!var0) {
                    _fun92103_ip = 73;
                    continue _fun92103
                }
            case 69:
                var5 = 'primary';
            case 73:
                var0 = 'primary';
                if (!(var0 !== var5)) {
                    _fun92103_ip = 119;
                    continue _fun92103
                }
            case 81:
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 7;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var0 = var0.colors;
                var10 = var0.CONTROL_SECONDARY_TEXT_DEFAULT;
                _fun92103_ip = 155;
                continue _fun92103;
            case 119:
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 7;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var0 = var0.colors;
                var10 = var0.WHITE;
            case 155:
                var3 = _closure1_slot6;
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 9;
                var0 = var2[var0];
                var2 = undefined;
                var0 = var1.bind(var2)(var0);
                var1 = var0.Button;
                var0 = {};
                var0.text = var6;
                var8 = _closure1_slot6;
                var7 = {};
                var7.color = var10;
                var10 = 'xs';
                var7.size = var10;
                var7 = var8.bind(var2)(var9, var7);
                var0.icon = var7;
                var0.accessibilityLabel = var6;
                var0.variant = var5;
                var5 = 'md';
                var0.size = var5;
                var5 = true;
                var0.grow = var5;
                var13 = var0;
                var12 = var4;
                var4 = copyDataProperties(var13, var12);
                var0 = var3.bind(var2)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot10 = var0;
    var0 = function arg0() {
        _fun92104: for (var _fun92104_ip = 0;;) switch (_fun92104_ip) {
            case 0:
                var0 = arg0;
                var10 = var0.user;
                var _closure2_slot0 = var10;
                var6 = var0.hasCustomProfileTheme;
                var8 = var0.location;
                var4 = var0.ButtonComponent;
                var3 = undefined;
                var _closure2_slot2 = var3;
                var _closure2_slot3 = var3;
                var _closure2_slot4 = var3;
                var2 = _closure1_slot1;
                var9 = _closure1_slot2;
                var0 = 10;
                var0 = var9[var0];
                var0 = var2.bind(var3)(var0);
                var0 = var0.bind(var3)();
                var5 = var0.newestAnalyticsLocation;
                var2 = _closure1_slot0;
                var0 = 11;
                var0 = var9[var0];
                var2 = var2.bind(var3)(var0);
                var0 = var2.useUserProfileAnalyticsContext;
                var0 = var0.bind(var2)();
                var0 = var0.trackUserProfileAction;
                var _closure2_slot1 = var0;
                var2 = {};
                var0 = null;
                if (!(var0 != var8)) {
                    _fun92104_ip = 125;
                    continue _fun92104
                }
            case 122:
                var5 = var8;
            case 125:
                var2.location = var5;
                _closure2_slot2 = var2;
                var8 = _closure1_slot0;
                var11 = _closure1_slot2;
                var2 = 12;
                var2 = var11[var2];
                var9 = var8.bind(var3)(var2);
                var5 = var9.useGameFriendsForUser;
                var2 = var10.id;
                var2 = var5.bind(var9)(var2);
                var5 = 13;
                var5 = var11[var5];
                var12 = var8.bind(var3)(var5);
                var9 = var12.useStateFromStores;
                var5 = _closure1_slot4;
                var8 = new Array(1);
                var8[0] = var5;
                var5 = function() { // Environment: var7
                    var2 = _closure1_slot4;
                    var1 = var2.getRelationshipType;
                    var0 = _closure2_slot0;
                    var0 = var0.id;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var8 = var9.bind(var12)(var8, var5);
                _closure2_slot3 = var8;
                var9 = _closure1_slot1;
                var5 = 14;
                var5 = var11[var5];
                var9 = var9.bind(var3)(var5);
                var5 = var9.useName;
                var5 = var5.bind(var9)(var10);
                _closure2_slot4 = var5;
                var5 = _closure1_slot5;
                var5 = var5.FRIEND;
                if (!(var8 !== var5)) {
                    _fun92104_ip = 571;
                    continue _fun92104
                }
            case 263:
                var5 = _closure1_slot5;
                var5 = var5.BLOCKED;
                if (!(var8 !== var5)) {
                    _fun92104_ip = 571;
                    continue _fun92104
                }
            case 280:
                var5 = var2.length;
                var2 = 0;
                if (!(!(var5 > var2))) {
                    _fun92104_ip = 569;
                    continue _fun92104
                }
            case 294:
                var2 = _closure1_slot5;
                var2 = var2.PENDING_INCOMING;
                var5 = var8 === var2;
                if (var5) {
                    _fun92104_ip = 325;
                    continue _fun92104
                }
            case 311:
                var2 = _closure1_slot5;
                var2 = var2.PENDING_OUTGOING;
                var5 = var8 === var2;
            case 325:
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                if (var5) {
                    _fun92104_ip = 356;
                    continue _fun92104
                }
            case 336:
                var2 = 16;
                var2 = var9[var2];
                var2 = var8.bind(var3)(var2);
                var10 = var2.UserPlusIcon;
                _fun92104_ip = 374;
                continue _fun92104;
            case 356:
                var2 = 15;
                var2 = var9[var2];
                var2 = var8.bind(var3)(var2);
                var10 = var2.UserClockIcon;
            case 374:
                var9 = _closure1_slot0;
                var2 = _closure1_slot2;
                var13 = 17;
                var8 = var2[var13];
                var8 = var9.bind(var3)(var8);
                var11 = var8.intl;
                var8 = var11.string;
                var2 = var2[var13];
                var2 = var9.bind(var3)(var2);
                var2 = var2.t;
                if (var5) {
                    _fun92104_ip = 436;
                    continue _fun92104
                }
            case 421:
                var9 = var2["7815ae"];
                var9 = var8.bind(var11)(var9);
                _fun92104_ip = 449;
                continue _fun92104;
            case 436:
                var2 = var2["fMm5q/"];
                var9 = var8.bind(var11)(var2);
            case 449:
                var8 = _closure1_slot0;
                var2 = _closure1_slot2;
                var11 = var2[var13];
                var11 = var8.bind(var3)(var11);
                var12 = var11.intl;
                var11 = var12.string;
                var2 = var2[var13];
                var2 = var8.bind(var3)(var2);
                var2 = var2.t;
                if (var5) {
                    _fun92104_ip = 508;
                    continue _fun92104
                }
            case 493:
                var8 = var2.gc9aSx;
                var8 = var11.bind(var12)(var8);
                _fun92104_ip = 521;
                continue _fun92104;
            case 508:
                var2 = var2.H0Ql7N;
                var8 = var11.bind(var12)(var2);
            case 521:
                var2 = _closure1_slot6;
                var1 = {};
                var1.icon = var10;
                var1.label = var9;
                var1.accessibilityHint = var8;
                var7 = function() {
                    _fun92106: for (var _fun92106_ip = 0;;) switch (_fun92106_ip) {
                        case 0:
                            var2 = _closure2_slot3;
                            var1 = _closure1_slot5;
                            var1 = var1.PENDING_INCOMING;
                            if (!(var2 !== var1)) {
                                _fun92106_ip = 187;
                                continue _fun92106
                            }
                        case 27:
                            var2 = _closure2_slot3;
                            var1 = _closure1_slot5;
                            var1 = var1.PENDING_OUTGOING;
                            if (!(var2 !== var1)) {
                                _fun92106_ip = 127;
                                continue _fun92106
                            }
                        case 45:
                            var2 = _closure2_slot1;
                            var1 = {};
                            var4 = 'SEND_FRIEND_REQUEST';
                            var1.action = var4;
                            var4 = undefined;
                            var1 = var2.bind(var4)(var1);
                            var2 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var1 = 20;
                            var1 = var5[var1];
                            var4 = var2.bind(var4)(var1);
                            var2 = var4.addRelationship;
                            var1 = {};
                            var5 = _closure2_slot0;
                            var5 = var5.id;
                            var1.userId = var5;
                            var5 = _closure2_slot2;
                            var1.context = var5;
                            var1 = var2.bind(var4)(var1);
                            _fun92106_ip = 269;
                            continue _fun92106;
                        case 127:
                            var4 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 19;
                            var2 = var2[var1];
                            var1 = undefined;
                            var4 = var4.bind(var1)(var2);
                            var2 = var4.confirmCancelFriendRequest;
                            var1 = {};
                            var5 = _closure2_slot4;
                            var1.userDisplayName = var5;
                            var5 = function() {
                                var3 = _closure2_slot1;
                                var2 = {};
                                var0 = 'CANCEL_FRIEND_REQUEST';
                                var2.action = var0;
                                var0 = undefined;
                                var2 = var3.bind(var0)(var2);
                                var3 = _closure1_slot1;
                                var4 = _closure1_slot2;
                                var2 = 20;
                                var2 = var4[var2];
                                var4 = var3.bind(var0)(var2);
                                var3 = var4.cancelFriendRequest;
                                var2 = _closure2_slot0;
                                var2 = var2.id;
                                var1 = _closure2_slot2;
                                var1 = var3.bind(var4)(var2, var1);
                                return var0;
                            };
                            var1.onConfirm = var5;
                            var1 = var2.bind(var4)(var1);
                            _fun92106_ip = 269;
                            continue _fun92106;
                        case 187:
                            var4 = _closure2_slot1;
                            var1 = {};
                            var2 = 'ACCEPT_FRIEND_REQUEST';
                            var1.action = var2;
                            var2 = undefined;
                            var1 = var4.bind(var2)(var1);
                            var1 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var0 = 18;
                            var0 = var4[var0];
                            var2 = var1.bind(var2)(var0);
                            var1 = var2.maybeConfirmFriendRequestAccept;
                            var0 = {};
                            var4 = _closure2_slot0;
                            var4 = var4.id;
                            var0.userId = var4;
                            var3 = _closure2_slot2;
                            var3 = var3.location;
                            var0.location = var3;
                            var0 = var1.bind(var2)(var0);
                        case 269:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1.onPress = var7;
                var1.hasCustomProfileTheme = var6;
                var1.isPending = var5;
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            case 569:
                return var0;
            case 571:
                return var0;
        }
    };
    var _closure1_slot11 = var0;
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
    var3 = arg3;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var12 = 1;
    var3 = var5[var12];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.RelationshipTypes;
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot6 = var6;
    var3 = var3.jsxs;
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var11 = 'row';
    var8.flexDirection = var11;
    var9 = 6;
    var9 = var5[var9];
    var9 = var4.bind(var0)(var9);
    var13 = var9.LARGE_BUTTON_HEIGHT;
    var9 = 24;
    var9 = var13 + var9;
    var8.width = var9;
    var3.buttonArea = var8;
    var8 = {
        'flexDirection': 'row',
        'alignItems': 'center'
    };
    var9 = 7;
    var13 = var5[var9];
    var13 = var10.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_12;
    var8.gap = var13;
    var3.threeButtonLayout = var8;
    var8 = {};
    var8.flex = var12;
    var3.flexGrow = var8;
    var8 = {};
    var8.flexDirection = var11;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.spacing;
    var9 = var9.PX_12;
    var8.gap = var9;
    var3.iconButtonGroup = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot8 = var3;
    var3 = 31;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_profile/native/UserProfileContactButtons.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun92108: for (var _fun92108_ip = 0;;) switch (_fun92108_ip) {
            case 0:
                var0 = arg0;
                var34 = var0.user;
                var _closure2_slot0 = var34;
                var23 = var0.disableMessage;
                var13 = var0.disableCalls;
                var14 = var0.location;
                var12 = var0.hasCustomProfileTheme;
                var6 = var0.style;
                var2 = _closure1_slot0;
                var7 = _closure1_slot2;
                var0 = 11;
                var0 = var7[var0];
                var3 = undefined;
                var1 = var2.bind(var3)(var0);
                var0 = var1.useUserProfileAnalyticsContext;
                var0 = var0.bind(var1)();
                var0 = var0.trackUserProfileAction;
                var _closure2_slot1 = var0;
                var0 = 21;
                var0 = var7[var0];
                var4 = var2.bind(var3)(var0);
                var1 = var4.useIsEligibleForCombinedCallButton;
                var0 = {};
                var5 = 'UserProfileContactButtons';
                var0.location = var5;
                var0 = var1.bind(var4)(var0);
                var1 = _closure1_slot8;
                var9 = var1.bind(var3)();
                var1 = 13;
                var1 = var7[var1];
                var8 = var2.bind(var3)(var1);
                var5 = var8.useStateFromStores;
                var1 = _closure1_slot4;
                var4 = new Array(1);
                var4[0] = var1;
                var1 = function() { // Environment: var17
                    var2 = _closure1_slot4;
                    var1 = var2.getRelationshipType;
                    var0 = _closure2_slot0;
                    var0 = var0.id;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var4 = var5.bind(var8)(var4, var1);
                var1 = 12;
                var1 = var7[var1];
                var5 = var2.bind(var3)(var1);
                var2 = var5.useGameFriendsForUser;
                var1 = var34.id;
                var1 = var2.bind(var5)(var1);
                var2 = function() {
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var0 = 22;
                    var1 = var3[var0];
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    var1 = var1.bind(var0)();
                    var1 = 23;
                    var1 = var3[var1];
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.hideActionSheet;
                    var1 = var1.bind(var2)();
                    return var0;
                };
                var _closure2_slot2 = var2;
                var24 = function() {
                    _fun92111: for (var _fun92111_ip = 0;;) switch (_fun92111_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            var1 = {};
                            var0 = 'SEND_MESSAGE';
                            var1.action = var0;
                            var0 = undefined;
                            var1 = var2.bind(var0)(var1);
                            var2 = _closure2_slot2;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun92111_ip = 42;
                                continue _fun92111
                            }
                        case 34:
                            var1 = _closure2_slot2;
                            var1 = var1.bind(var0)();
                        case 42:
                            var2 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var1 = 24;
                            var1 = var3[var1];
                            var5 = var2.bind(var0)(var1);
                            var1 = var5.popAll;
                            var1 = var1.bind(var5)();
                            var1 = 25;
                            var1 = var3[var1];
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.openPrivateChannel;
                            var1 = {};
                            var4 = _closure2_slot0;
                            var4 = var4.id;
                            var1.recipientIds = var4;
                            var1 = var2.bind(var3)(var1);
                            return var0;
                    }
                };
                var5 = _closure1_slot1;
                var2 = 26;
                var8 = var7[var2];
                var15 = var5.bind(var3)(var8);
                var11 = var34.id;
                var10 = false;
                var8 = function() { // Environment: var17
                    _fun92112: for (var _fun92112_ip = 0;;) switch (_fun92112_ip) {
                        case 0:
                            var3 = _closure2_slot1;
                            var2 = {};
                            var0 = 'VOICE_CALL';
                            var2.action = var0;
                            var0 = undefined;
                            var2 = var3.bind(var0)(var2);
                            var3 = _closure2_slot2;
                            var2 = null;
                            if (!(var2 != var3)) {
                                _fun92112_ip = 42;
                                continue _fun92112
                            }
                        case 34:
                            var1 = _closure2_slot2;
                            var1 = var1.bind(var0)();
                        case 42:
                            return var0;
                    }
                };
                var8 = var15.bind(var3)(var11, var10, var8);
                var16 = var8.handlePress;
                var _closure2_slot3 = var16;
                var15 = var8.text;
                var18 = var8.inCall;
                var21 = var8.accessibilityHint;
                var2 = var7[var2];
                var7 = var5.bind(var3)(var2);
                var5 = var34.id;
                var25 = true;
                var2 = function() { // Environment: var17
                    _fun92113: for (var _fun92113_ip = 0;;) switch (_fun92113_ip) {
                        case 0:
                            var3 = _closure2_slot1;
                            var2 = {};
                            var0 = 'VIDEO_CALL';
                            var2.action = var0;
                            var0 = undefined;
                            var2 = var3.bind(var0)(var2);
                            var3 = _closure2_slot2;
                            var2 = null;
                            if (!(var2 != var3)) {
                                _fun92113_ip = 44;
                                continue _fun92113
                            }
                        case 36:
                            var1 = _closure2_slot2;
                            var1 = var1.bind(var0)();
                        case 44:
                            return var0;
                    }
                };
                var2 = var7.bind(var3)(var5, var25, var2);
                var19 = var2.handlePress;
                var _closure2_slot4 = var19;
                var26 = var2.text;
                var27 = var2.inCall;
                var28 = var2.accessibilityHint;
                if (var0) {
                    _fun92108_ip = 1050;
                    continue _fun92108
                }
            case 345:
                var5 = _closure1_slot7;
                var29 = _closure1_slot0;
                var30 = _closure1_slot2;
                var0 = 29;
                var0 = var30[var0];
                var0 = var29.bind(var3)(var0);
                var2 = var0.ButtonGroup;
                var0 = {
                    'direction': 'horizontal',
                    'align': 'flex-start',
                    'justify': 'space-evenly'
                };
                var0.style = var6;
                var8 = _closure1_slot6;
                var11 = _closure1_slot9;
                var7 = {};
                var10 = 27;
                var10 = var30[var10];
                var10 = var29.bind(var3)(var10);
                var10 = var10.ChatIcon;
                var7.icon = var10;
                var33 = 17;
                var10 = var30[var33];
                var10 = var29.bind(var3)(var10);
                var31 = var10.intl;
                var20 = var31.string;
                var10 = var30[var33];
                var10 = var29.bind(var3)(var10);
                var10 = var10.t;
                var10 = var10.zROXEV;
                var10 = var20.bind(var31)(var10);
                var7.label = var10;
                var10 = var30[var33];
                var10 = var29.bind(var3)(var10);
                var32 = var10.intl;
                var31 = var32.formatToPlainString;
                var10 = var30[var33];
                var10 = var29.bind(var3)(var10);
                var10 = var10.t;
                var20 = var10.zFfSFQ;
                var10 = {};
                var36 = _closure1_slot1;
                var35 = 14;
                var35 = var30[var35];
                var36 = var36.bind(var3)(var35);
                var35 = var36.getName;
                var35 = var35.bind(var36)(var34);
                var10.name = var35;
                var10 = var31.bind(var32)(var20, var10);
                var7.accessibilityHint = var10;
                var7.onPress = var24;
                var7.disabled = var23;
                var7.hasCustomProfileTheme = var12;
                var8 = var8.bind(var3)(var11, var7);
                var7 = new Array(4);
                var7[0] = var8;
                var10 = _closure1_slot6;
                var8 = {};
                var20 = 28;
                var20 = var30[var20];
                var20 = var29.bind(var3)(var20);
                var20 = var20.PhoneCallIcon;
                var8.icon = var20;
                var20 = null;
                var29 = var15;
                if (!(var20 == var29)) {
                    _fun92108_ip = 675;
                    continue _fun92108
                }
            case 623:
                var35 = _closure1_slot0;
                var30 = _closure1_slot2;
                var31 = var30[var33];
                var31 = var35.bind(var3)(var31);
                var32 = var31.intl;
                var31 = var32.string;
                var30 = var30[var33];
                var30 = var35.bind(var3)(var30);
                var30 = var30.t;
                var30 = var30["EZgS+9"];
                var29 = var31.bind(var32)(var30);
            case 675:
                var8.label = var29;
                var29 = var21;
                if (!(var20 == var21)) {
                    _fun92108_ip = 738;
                    continue _fun92108
                }
            case 686:
                var35 = _closure1_slot0;
                var30 = _closure1_slot2;
                var31 = var30[var33];
                var31 = var35.bind(var3)(var31);
                var32 = var31.intl;
                var31 = var32.string;
                var30 = var30[var33];
                var30 = var35.bind(var3)(var30);
                var30 = var30.t;
                var30 = var30.focH1t;
                var29 = var31.bind(var32)(var30);
            case 738:
                var8.accessibilityHint = var29;
                var29 = var16;
                if (var18) {
                    _fun92108_ip = 756;
                    continue _fun92108
                }
            case 749:
                var29 = function() { // Environment: var17
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 19;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.confirmStartCall;
                    var0 = _closure2_slot3;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
            case 756:
                var8.onPress = var29;
                var29 = var13;
                if (var13) {
                    _fun92108_ip = 770;
                    continue _fun92108
                }
            case 766:
                var29 = var20 == var15;
            case 770:
                var8.disabled = var29;
                var8.hasCustomProfileTheme = var12;
                var8 = var10.bind(var3)(var11, var8);
                var7[1] = var8;
                var11 = _closure1_slot6;
                var10 = _closure1_slot9;
                var8 = {};
                var30 = _closure1_slot0;
                var31 = _closure1_slot2;
                var29 = 30;
                var29 = var31[var29];
                var29 = var30.bind(var3)(var29);
                var29 = var29.VideoIcon;
                var8.icon = var29;
                var29 = var26;
                if (!(var20 == var29)) {
                    _fun92108_ip = 888;
                    continue _fun92108
                }
            case 836:
                var35 = _closure1_slot0;
                var30 = _closure1_slot2;
                var31 = var30[var33];
                var31 = var35.bind(var3)(var31);
                var32 = var31.intl;
                var31 = var32.string;
                var30 = var30[var33];
                var30 = var35.bind(var3)(var30);
                var30 = var30.t;
                var30 = var30["7AWk50"];
                var29 = var31.bind(var32)(var30);
            case 888:
                var8.label = var29;
                if (!(var20 == var28)) {
                    _fun92108_ip = 948;
                    continue _fun92108
                }
            case 896:
                var32 = _closure1_slot0;
                var29 = _closure1_slot2;
                var30 = var29[var33];
                var30 = var32.bind(var3)(var30);
                var31 = var30.intl;
                var30 = var31.string;
                var29 = var29[var33];
                var29 = var32.bind(var3)(var29);
                var29 = var29.t;
                var29 = var29.oCqlGG;
                var28 = var30.bind(var31)(var29);
            case 948:
                var8.accessibilityHint = var28;
                if (var27) {
                    _fun92108_ip = 963;
                    continue _fun92108
                }
            case 956:
                var19 = function() { // Environment: var17
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 19;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.confirmStartCall;
                    var0 = _closure2_slot4;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
            case 963:
                var8.onPress = var19;
                var19 = var13;
                if (var13) {
                    _fun92108_ip = 977;
                    continue _fun92108
                }
            case 973:
                var19 = var20 == var26;
            case 977:
                var8.disabled = var19;
                var8.hasCustomProfileTheme = var12;
                var8 = var11.bind(var3)(var10, var8);
                var7[2] = var8;
                var11 = _closure1_slot6;
                var10 = _closure1_slot11;
                var8 = {};
                var8.user = var34;
                var8.location = var14;
                var8.hasCustomProfileTheme = var12;
                var19 = _closure1_slot9;
                var8.ButtonComponent = var19;
                var8 = var11.bind(var3)(var10, var8);
                var7[3] = var8;
                var0.children = var7;
                var0 = var5.bind(var3)(var2, var0);
                return var0;
            case 1050:
                var20 = 'secondary';
                if (!var12) {
                    _fun92108_ip = 1061;
                    continue _fun92108
                }
            case 1057:
                var20 = 'primary';
            case 1061:
                var5 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 7;
                var2 = var2[var0];
                var2 = var5.bind(var3)(var2);
                var2 = var2.colors;
                if (var12) {
                    _fun92108_ip = 1097;
                    continue _fun92108
                }
            case 1089:
                var29 = var2.CONTROL_SECONDARY_TEXT_DEFAULT;
                _fun92108_ip = 1103;
                continue _fun92108;
            case 1097:
                var29 = var2.WHITE;
            case 1103:
                var2 = _closure1_slot5;
                var2 = var2.FRIEND;
                var5 = var4 !== var2;
                if (!var5) {
                    _fun92108_ip = 1134;
                    continue _fun92108
                }
            case 1120:
                var2 = _closure1_slot5;
                var2 = var2.BLOCKED;
                var5 = var4 !== var2;
            case 1134:
                if (!var5) {
                    _fun92108_ip = 1148;
                    continue _fun92108
                }
            case 1137:
                var2 = var1.length;
                var1 = 0;
                var5 = var1 === var2;
            case 1148:
                var2 = _closure1_slot7;
                var1 = _closure1_slot3;
                var4 = {};
                if (var5) {
                    _fun92108_ip = 1867;
                    continue _fun92108
                }
            case 1164:
                var5 = {};
                var7 = 'row';
                var5.flexDirection = var7;
                var38 = _closure1_slot1;
                var26 = _closure1_slot2;
                var0 = var26[var0];
                var0 = var38.bind(var3)(var0);
                var0 = var0.spacing;
                var0 = var0.PX_12;
                var5.gap = var0;
                var0 = new Array(2);
                var0[0] = var5;
                var0[1] = var6;
                var4.style = var0;
                var7 = _closure1_slot6;
                var5 = _closure1_slot3;
                var0 = {};
                var8 = {};
                var19 = 1;
                var8.flex = var19;
                var0.style = var8;
                var28 = _closure1_slot6;
                var31 = _closure1_slot0;
                var10 = 9;
                var8 = var26[var10];
                var8 = var31.bind(var3)(var8);
                var11 = var8.Button;
                var8 = {};
                var35 = 17;
                var27 = var26[var35];
                var27 = var31.bind(var3)(var27);
                var32 = var27.intl;
                var30 = var32.string;
                var27 = var26[var35];
                var27 = var31.bind(var3)(var27);
                var27 = var27.t;
                var27 = var27.zROXEV;
                var27 = var30.bind(var32)(var27);
                var8.text = var27;
                var32 = _closure1_slot6;
                var27 = 27;
                var27 = var26[var27];
                var27 = var31.bind(var3)(var27);
                var30 = var27.ChatIcon;
                var27 = {};
                var27.color = var29;
                var33 = 'xs';
                var27.size = var33;
                var27 = var32.bind(var3)(var30, var27);
                var8.icon = var27;
                var27 = var26[var35];
                var27 = var31.bind(var3)(var27);
                var32 = var27.intl;
                var30 = var32.string;
                var27 = var26[var35];
                var27 = var31.bind(var3)(var27);
                var27 = var27.t;
                var27 = var27.zROXEV;
                var27 = var30.bind(var32)(var27);
                var8.accessibilityLabel = var27;
                var27 = var26[var35];
                var27 = var31.bind(var3)(var27);
                var36 = var27.intl;
                var32 = var36.formatToPlainString;
                var27 = var26[var35];
                var27 = var31.bind(var3)(var27);
                var27 = var27.t;
                var30 = var27.zFfSFQ;
                var27 = {};
                var37 = 14;
                var37 = var26[var37];
                var38 = var38.bind(var3)(var37);
                var37 = var38.getName;
                var37 = var37.bind(var38)(var34);
                var27.name = var37;
                var27 = var32.bind(var36)(var30, var27);
                var8.accessibilityHint = var27;
                var8.variant = var20;
                var27 = 'md';
                var8.size = var27;
                var8.grow = var25;
                var8.onPress = var24;
                var8.disabled = var23;
                var8 = var28.bind(var3)(var11, var8);
                var0.children = var8;
                var5 = var7.bind(var3)(var5, var0);
                var0 = new Array(2);
                var0[0] = var5;
                var8 = _closure1_slot6;
                var7 = _closure1_slot3;
                var5 = {};
                var11 = {};
                var11.flex = var19;
                var5.style = var11;
                var19 = _closure1_slot6;
                var10 = var26[var10];
                var10 = var31.bind(var3)(var10);
                var11 = var10.Button;
                var10 = {};
                var28 = var26[var35];
                var28 = var31.bind(var3)(var28);
                var32 = var28.intl;
                var30 = var32.string;
                var28 = var26[var35];
                var28 = var31.bind(var3)(var28);
                var28 = var28.t;
                var28 = var28.JJogjm;
                var28 = var30.bind(var32)(var28);
                var10.text = var28;
                var32 = _closure1_slot6;
                var28 = 28;
                var28 = var26[var28];
                var28 = var31.bind(var3)(var28);
                var30 = var28.PhoneCallIcon;
                var28 = {};
                var28.color = var29;
                var28.size = var33;
                var28 = var32.bind(var3)(var30, var28);
                var10.icon = var28;
                var28 = var26[var35];
                var28 = var31.bind(var3)(var28);
                var30 = var28.intl;
                var28 = var30.string;
                var26 = var26[var35];
                var26 = var31.bind(var3)(var26);
                var26 = var26.t;
                var26 = var26.JJogjm;
                var26 = var28.bind(var30)(var26);
                var10.accessibilityLabel = var26;
                var26 = null;
                var28 = var21;
                if (!(var26 == var21)) {
                    _fun92108_ip = 1786;
                    continue _fun92108
                }
            case 1734:
                var33 = _closure1_slot0;
                var30 = _closure1_slot2;
                var31 = var30[var35];
                var31 = var33.bind(var3)(var31);
                var32 = var31.intl;
                var31 = var32.string;
                var30 = var30[var35];
                var30 = var33.bind(var3)(var30);
                var30 = var30.t;
                var30 = var30.focH1t;
                var28 = var31.bind(var32)(var30);
            case 1786:
                var10.accessibilityHint = var28;
                var10.variant = var20;
                var10.size = var27;
                var10.grow = var25;
                var25 = var16;
                if (var18) {
                    _fun92108_ip = 1817;
                    continue _fun92108
                }
            case 1810:
                var25 = function() { // Environment: var17
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 19;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.confirmStartCall;
                    var0 = _closure2_slot3;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
            case 1817:
                var10.onPress = var25;
                var25 = var13;
                if (var13) {
                    _fun92108_ip = 1831;
                    continue _fun92108
                }
            case 1827:
                var25 = var26 == var15;
            case 1831:
                var10.disabled = var25;
                var10 = var19.bind(var3)(var11, var10);
                var5.children = var10;
                var5 = var8.bind(var3)(var7, var5);
                var0[1] = var5;
                var4.children = var0;
                var0 = var4;
                _fun92108_ip = 2469;
                continue _fun92108;
            case 1867:
                var7 = var9.threeButtonLayout;
                var5 = new Array(2);
                var5[0] = var7;
                var5[1] = var6;
                var4.style = var5;
                var7 = _closure1_slot6;
                var6 = _closure1_slot3;
                var5 = {};
                var8 = var9.flexGrow;
                var5.style = var8;
                var11 = _closure1_slot6;
                var10 = _closure1_slot11;
                var8 = {};
                var8.user = var34;
                var8.location = var14;
                var8.hasCustomProfileTheme = var12;
                var12 = _closure1_slot10;
                var8.ButtonComponent = var12;
                var8 = var11.bind(var3)(var10, var8);
                var5.children = var8;
                var6 = var7.bind(var3)(var6, var5);
                var5 = new Array(2);
                var5[0] = var6;
                var8 = _closure1_slot7;
                var7 = _closure1_slot3;
                var6 = {};
                var9 = var9.iconButtonGroup;
                var6.style = var9;
                var12 = _closure1_slot6;
                var25 = _closure1_slot0;
                var14 = _closure1_slot2;
                var10 = 8;
                var9 = var14[var10];
                var9 = var25.bind(var3)(var9);
                var11 = var9.IconButton;
                var9 = {};
                var27 = _closure1_slot6;
                var19 = 27;
                var19 = var14[var19];
                var19 = var25.bind(var3)(var19);
                var26 = var19.ChatIcon;
                var19 = {};
                var19.color = var29;
                var28 = 'xs';
                var19.size = var28;
                var19 = var27.bind(var3)(var26, var19);
                var9.icon = var19;
                var26 = 17;
                var19 = var14[var26];
                var19 = var25.bind(var3)(var19);
                var30 = var19.intl;
                var27 = var30.string;
                var19 = var14[var26];
                var19 = var25.bind(var3)(var19);
                var19 = var19.t;
                var19 = var19.zROXEV;
                var19 = var27.bind(var30)(var19);
                var9.accessibilityLabel = var19;
                var19 = var14[var26];
                var19 = var25.bind(var3)(var19);
                var31 = var19.intl;
                var30 = var31.formatToPlainString;
                var19 = var14[var26];
                var19 = var25.bind(var3)(var19);
                var19 = var19.t;
                var27 = var19.zFfSFQ;
                var19 = {};
                var33 = _closure1_slot1;
                var32 = 14;
                var32 = var14[var32];
                var33 = var33.bind(var3)(var32);
                var32 = var33.getName;
                var32 = var32.bind(var33)(var34);
                var19.name = var32;
                var19 = var30.bind(var31)(var27, var19);
                var9.accessibilityHint = var19;
                var9.variant = var20;
                var19 = 'md';
                var9.size = var19;
                var9.onPress = var24;
                var9.disabled = var23;
                var11 = var12.bind(var3)(var11, var9);
                var9 = new Array(2);
                var9[0] = var11;
                var12 = _closure1_slot6;
                var10 = var14[var10];
                var10 = var25.bind(var3)(var10);
                var11 = var10.IconButton;
                var10 = {};
                var27 = _closure1_slot6;
                var23 = 28;
                var23 = var14[var23];
                var23 = var25.bind(var3)(var23);
                var24 = var23.PhoneCallIcon;
                var23 = {};
                var23.color = var29;
                var23.size = var28;
                var23 = var27.bind(var3)(var24, var23);
                var10.icon = var23;
                var23 = var14[var26];
                var23 = var25.bind(var3)(var23);
                var24 = var23.intl;
                var23 = var24.string;
                var14 = var14[var26];
                var14 = var25.bind(var3)(var14);
                var14 = var14.t;
                var14 = var14.JJogjm;
                var14 = var23.bind(var24)(var14);
                var10.accessibilityLabel = var14;
                var14 = null;
                if (!(var14 == var21)) {
                    _fun92108_ip = 2400;
                    continue _fun92108
                }
            case 2348:
                var25 = _closure1_slot0;
                var22 = _closure1_slot2;
                var23 = var22[var26];
                var23 = var25.bind(var3)(var23);
                var24 = var23.intl;
                var23 = var24.string;
                var22 = var22[var26];
                var22 = var25.bind(var3)(var22);
                var22 = var22.t;
                var22 = var22.focH1t;
                var21 = var23.bind(var24)(var22);
            case 2400:
                var10.accessibilityHint = var21;
                var10.variant = var20;
                var10.size = var19;
                if (var18) {
                    _fun92108_ip = 2423;
                    continue _fun92108
                }
            case 2416:
                var16 = function() { // Environment: var17
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 19;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.confirmStartCall;
                    var0 = _closure2_slot3;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
            case 2423:
                var10.onPress = var16;
                if (var13) {
                    _fun92108_ip = 2434;
                    continue _fun92108
                }
            case 2430:
                var13 = var14 == var15;
            case 2434:
                var10.disabled = var13;
                var10 = var12.bind(var3)(var11, var10);
                var9[1] = var10;
                var6.children = var9;
                var6 = var8.bind(var3)(var7, var6);
                var5[1] = var6;
                var4.children = var5;
                var0 = var4;
            case 2469:
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 3102, 660, 33, 1297, 4089, 671, 7535, 4085, 5734, 7001, 11987, 566, 3238, 12000, 3250, 1234, 9046, 9042, 8047, 12002, 7763, 3280, 4562, 3947, 12003, 4841, 7810, 6467, 8817, 2]);