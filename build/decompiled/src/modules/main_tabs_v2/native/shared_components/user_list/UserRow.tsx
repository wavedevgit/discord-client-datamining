// modules/main_tabs_v2/native/shared_components/user_list/UserRow.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun72518: for (var _fun72518_ip = 0;;) switch (_fun72518_ip) {
        case 0:
            var4 = require;
            var11 = metroImportDefault;
            var2 = exports;
            var5 = dependencyMap;
            var _closure1_slot0 = var4;
            var _closure1_slot1 = var11;
            var _closure1_slot2 = var5;
            var0 = function(arg0) { // Original name: handleCall, environment: var1
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 14;
                var1 = var1[var0];
                var0 = undefined;
                var3 = var2.bind(var0)(var1);
                var2 = var3.ensurePrivateChannel;
                var1 = arg0;
                var1 = var1.id;
                var3 = var2.bind(var3)(var1);
                var2 = var3.then;
                var1 = function(arg0) { // Environment: var1
                    _fun72520: for (var _fun72520_ip = 0;;) switch (_fun72520_ip) {
                        case 0:
                            var3 = _closure1_slot8;
                            var2 = var3.getChannel;
                            var1 = arg0;
                            var3 = var2.bind(var3)(var1);
                            var1 = null;
                            if (!(var1 != var3)) {
                                _fun72520_ip = 99;
                                continue _fun72520
                            }
                        case 26:
                            var2 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var0 = 15;
                            var0 = var4[var0];
                            var1 = undefined;
                            var6 = var2.bind(var1)(var0);
                            var0 = var3.isPrivate;
                            var5 = var0.bind(var3)();
                            var0 = 'must be a DM';
                            var0 = var6.bind(var1)(var5, var0);
                            var0 = 16;
                            var0 = var4[var0];
                            var2 = var2.bind(var1)(var0);
                            var0 = false;
                            var0 = var2.bind(var1)(var3, var0);
                            var0 = var0.onPress;
                            var0 = var0.bind(var1)();
                        case 99:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var2.bind(var3)(var1);
                return var0;
            };
            var _closure1_slot21 = var0;
            var0 = function(arg0, arg1) { // Original name: handleAccept, environment: var1
                var6 = arg1;
                var _closure2_slot0 = var6;
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 17;
                var1 = var1[var0];
                var0 = undefined;
                var3 = var2.bind(var0)(var1);
                var2 = var3.maybeConfirmFriendRequestAccept;
                var1 = {};
                var7 = arg0;
                var7 = var7.id;
                var1.userId = var7;
                var1.applicationId = var6;
                var5 = _closure1_slot20;
                var1.location = var5;
                var4 = function() { // Original name: onConfirm, environment: var4
                    _fun72522: for (var _fun72522_ip = 0;;) switch (_fun72522_ip) {
                        case 0:
                            var1 = _closure2_slot0;
                            var0 = null;
                            if (!(var0 == var1)) {
                                _fun72522_ip = 50;
                                continue _fun72522
                            }
                        case 13:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 18;
                            var1 = var1[var0];
                            var0 = undefined;
                            var1 = var2.bind(var0)(var1);
                            var0 = var1.presentFriendRequestAcceptedToast;
                            var0 = var0.bind(var1)();
                            _fun72522_ip = 85;
                            continue _fun72522;
                        case 50:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 18;
                            var1 = var1[var0];
                            var0 = undefined;
                            var1 = var2.bind(var0)(var1);
                            var0 = var1.presentGameFriendRequestAcceptedToast;
                            var0 = var0.bind(var1)();
                        case 85:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1.onConfirm = var4;
                var1 = var2.bind(var3)(var1);
                return var0;
            };
            var _closure1_slot22 = var0;
            var0 = function(arg0, arg1) { // Original name: handleCancel, environment: var1
                _fun72523: for (var _fun72523_ip = 0;;) switch (_fun72523_ip) {
                    case 0:
                        var7 = arg0;
                        var6 = arg1;
                        var0 = null;
                        if (!(var0 == var6)) {
                            _fun72523_ip = 92;
                            continue _fun72523
                        }
                    case 12:
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var1 = 20;
                        var1 = var3[var1];
                        var2 = undefined;
                        var8 = var4.bind(var2)(var1);
                        var5 = var8.cancelFriendRequest;
                        var4 = var7.id;
                        var1 = {};
                        var9 = _closure1_slot20;
                        var1.location = var9;
                        var1 = var5.bind(var8)(var4, var1);
                        var1 = _closure1_slot0;
                        var0 = 18;
                        var0 = var3[var0];
                        var1 = var1.bind(var2)(var0);
                        var0 = var1.presentFriendRequestIgnoredToast;
                        var0 = var0.bind(var1)();
                        _fun72523_ip = 169;
                        continue _fun72523;
                    case 92:
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var1 = 19;
                        var1 = var3[var1];
                        var2 = undefined;
                        var5 = var4.bind(var2)(var1);
                        var4 = var5.cancelGameFriendRequest;
                        var1 = {};
                        var7 = var7.id;
                        var1.userId = var7;
                        var1.applicationId = var6;
                        var1 = var4.bind(var5)(var1);
                        var1 = _closure1_slot0;
                        var0 = 18;
                        var0 = var3[var0];
                        var1 = var1.bind(var2)(var0);
                        var0 = var1.presentGameFriendRequestIgnoredToast;
                        var0 = var0.bind(var1)();
                    case 169:
                        var0 = undefined;
                        return var0;
                }
            };
            var _closure1_slot23 = var0;
            var0 = function(arg0) { // Original name: handleAcceptSuggestion, environment: var1
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var0 = 20;
                var2 = var3[var0];
                var0 = undefined;
                var5 = var4.bind(var0)(var2);
                var4 = var5.addRelationship;
                var2 = {};
                var6 = arg0;
                var6 = var6.id;
                var2.userId = var6;
                var6 = {};
                var7 = _closure1_slot20;
                var6.location = var7;
                var2.context = var6;
                var2.type = var0;
                var6 = true;
                var2.fromFriendSuggestion = var6;
                var2 = var4.bind(var5)(var2);
                var2 = _closure1_slot0;
                var1 = 18;
                var1 = var3[var1];
                var2 = var2.bind(var0)(var1);
                var1 = var2.presentAddedFriendToast;
                var1 = var1.bind(var2)();
                return var0;
            };
            var _closure1_slot24 = var0;
            var0 = function(arg0) { // Original name: UserRowSubLabel, environment: var1
                _fun72525: for (var _fun72525_ip = 0;;) switch (_fun72525_ip) {
                    case 0:
                        var3 = arg0;
                        var9 = var3.user;
                        var2 = var3.type;
                        var5 = var3.animate;
                        var1 = var3.isGameRelationship;
                        var8 = var3.guildId;
                        var3 = var3.applicationId;
                        var _closure2_slot0 = var3;
                        var4 = _closure1_slot19;
                        var6 = undefined;
                        var7 = var4.bind(var6)();
                        var10 = _closure1_slot0;
                        var11 = _closure1_slot2;
                        var4 = 22;
                        var4 = var11[var4];
                        var11 = var10.bind(var6)(var4);
                        var10 = var11.useStateFromStores;
                        var12 = _closure1_slot6;
                        var4 = new Array(1);
                        var4[0] = var12;
                        var0 = function() { // Environment: var0
                            var2 = _closure1_slot6;
                            var1 = var2.getApplication;
                            var0 = _closure2_slot0;
                            var0 = var1.bind(var2)(var0);
                            return var0;
                        };
                        var12 = var10.bind(var11)(var4, var0);
                        var0 = _closure1_slot12;
                        var0 = var0.PENDING_INCOMING;
                        if (!(var2 !== var0)) {
                            _fun72525_ip = 212;
                            continue _fun72525
                        }
                    case 118:
                        var0 = _closure1_slot12;
                        var0 = var0.SUGGESTION;
                        if (!(var2 !== var0)) {
                            _fun72525_ip = 212;
                            continue _fun72525
                        }
                    case 132:
                        var0 = _closure1_slot12;
                        var0 = var0.PENDING_OUTGOING;
                        if (!(var2 !== var0)) {
                            _fun72525_ip = 212;
                            continue _fun72525
                        }
                    case 146:
                        var4 = _closure1_slot14;
                        var2 = _closure1_slot1;
                        var10 = _closure1_slot2;
                        var0 = 26;
                        var0 = var10[var0];
                        var2 = var2.bind(var6)(var0);
                        var0 = {};
                        var10 = var9.id;
                        var0.userId = var10;
                        var0.guildId = var8;
                        var8 = var7.activityText;
                        var0.textStyle = var8;
                        var0.animate = var5;
                        var0 = var4.bind(var6)(var2, var0);
                        _fun72525_ip = 540;
                        continue _fun72525;
                    case 212:
                        if (var1) {
                            _fun72525_ip = 296;
                            continue _fun72525
                        }
                    case 215:
                        var4 = _closure1_slot14;
                        var8 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var1 = 24;
                        var1 = var10[var1];
                        var1 = var8.bind(var6)(var1);
                        var2 = var1.Text;
                        var1 = {
                            'lineClamp': 1,
                            'variant': 'text-xs/medium',
                            'color': 'text-muted'
                        };
                        var5 = 25;
                        var5 = var10[var5];
                        var8 = var8.bind(var6)(var5);
                        var5 = var8.getUserTag;
                        var5 = var5.bind(var8)(var9);
                        var1.children = var5;
                        var1 = var4.bind(var6)(var2, var1);
                        _fun72525_ip = 537;
                        continue _fun72525;
                    case 296:
                        var13 = null;
                        if (!(var13 != var12)) {
                            _fun72525_ip = 508;
                            continue _fun72525
                        }
                    case 305:
                        var5 = _closure1_slot15;
                        var4 = _closure1_slot4;
                        var2 = {};
                        var8 = var7.gameContainer;
                        var2.style = var8;
                        var11 = _closure1_slot14;
                        var9 = _closure1_slot1;
                        var10 = _closure1_slot2;
                        var8 = 23;
                        var8 = var10[var8];
                        var10 = var9.bind(var6)(var8);
                        var9 = {};
                        var8 = var7.gameIcon;
                        var9.style = var8;
                        var8 = 'contain';
                        var9.resizeMode = var8;
                        var8 = {};
                        var15 = var12.getIconURL;
                        var14 = 16;
                        var14 = var15.bind(var12)(var14);
                        var15 = var13 != var14;
                        var13 = '';
                        if (!var15) {
                            _fun72525_ip = 399;
                            continue _fun72525
                        }
                    case 396:
                        var13 = var14;
                    case 399:
                        var8.uri = var13;
                        var9.source = var8;
                        var8 = true;
                        var9.disableColor = var8;
                        var8 = var12.id;
                        var9 = var11.bind(var6)(var10, var9, var8);
                        var8 = new Array(2);
                        var8[0] = var9;
                        var11 = _closure1_slot14;
                        var10 = _closure1_slot0;
                        var13 = _closure1_slot2;
                        var9 = 24;
                        var9 = var13[var9];
                        var9 = var10.bind(var6)(var9);
                        var10 = var9.Text;
                        var9 = {
                            'lineClamp': 1,
                            'variant': 'text-xs/medium',
                            'color': 'text-subtle'
                        };
                        var12 = var12.name;
                        var9.children = var12;
                        var9 = var11.bind(var6)(var10, var9);
                        var8[1] = var9;
                        var2.children = var8;
                        var2 = var5.bind(var6)(var4, var2);
                        _fun72525_ip = 534;
                        continue _fun72525;
                    case 508:
                        var5 = _closure1_slot14;
                        var4 = _closure1_slot4;
                        var3 = {};
                        var7 = var7.gameIcon;
                        var3.style = var7;
                        var2 = var5.bind(var6)(var4, var3);
                    case 534:
                        var1 = var2;
                    case 537:
                        var0 = var1;
                    case 540:
                        return var0;
                }
            };
            var _closure1_slot25 = var0;
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
            var6 = var3.bind(var0)(var6);
            var _closure1_slot3 = var6;
            var3 = 1;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var3 = var3.View;
            var _closure1_slot4 = var3;
            var3 = 2;
            var3 = var5[var3];
            var3 = var11.bind(var0)(var3);
            var _closure1_slot5 = var3;
            var3 = 3;
            var3 = var5[var3];
            var3 = var11.bind(var0)(var3);
            var _closure1_slot6 = var3;
            var3 = 4;
            var3 = var5[var3];
            var3 = var11.bind(var0)(var3);
            var _closure1_slot7 = var3;
            var3 = 5;
            var3 = var5[var3];
            var3 = var11.bind(var0)(var3);
            var _closure1_slot8 = var3;
            var3 = 6;
            var3 = var5[var3];
            var3 = var11.bind(var0)(var3);
            var _closure1_slot9 = var3;
            var3 = 7;
            var3 = var5[var3];
            var3 = var11.bind(var0)(var3);
            var _closure1_slot10 = var3;
            var13 = 8;
            var3 = var5[var13];
            var3 = var4.bind(var0)(var3);
            var3 = var3.UserRowModes;
            var _closure1_slot11 = var3;
            var3 = 9;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var7 = var3.RelationshipTypes;
            var _closure1_slot12 = var7;
            var3 = var3.StatusTypes;
            var _closure1_slot13 = var3;
            var3 = 10;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var7 = var3.jsx;
            var _closure1_slot14 = var7;
            var7 = var3.jsxs;
            var _closure1_slot15 = var7;
            var3 = var3.Fragment;
            var _closure1_slot16 = var3;
            var3 = {};
            var7 = 'call';
            var3.CALL = var7;
            var7 = 'message';
            var3.MESSAGE = var7;
            var7 = 'accept';
            var3.ACCEPT = var7;
            var7 = 'decline';
            var3.DECLINE = var7;
            var7 = 'cancel';
            var3.CANCEL = var7;
            var7 = 'accept-suggestion';
            var3.ACCEPT_SUGGESTION = var7;
            var7 = 'ignore-suggestion';
            var3.IGNORE_SUGGESTION = var7;
            var7 = 'toggle';
            var3.TOGGLE = var7;
            var _closure1_slot17 = var3;
            var3 = 11;
            var7 = var5[var3];
            var9 = var4.bind(var0)(var7);
            var8 = var9.createStyles;
            var7 = {};
            var10 = {
                'flexShrink': 0,
                'flexGrow': 0
            };
            var7.avatar = var10;
            var12 = {};
            var10 = 12;
            var14 = var5[var10];
            var14 = var11.bind(var0)(var14);
            var14 = var14.colors;
            var14 = var14.TEXT_LINK;
            var12.tintColor = var14;
            var7.iconColor = var12;
            var12 = {
                'marginLeft': 12,
                'flexGrow': 1,
                'flexShrink': 0
            };
            var7.content = var12;
            var12 = {
                'marginLeft': 12,
                'flexGrow': 1,
                'flexShrink': 0,
                'height': '100%',
                'justifyContent': 'center'
            };
            var7.itemContent = var12;
            var14 = 'row';
            var12 = {
                'flexGrow': 1,
                'flexShrink': 0,
                'flexDirection': 'row',
                'alignContent': 'center',
                'alignItems': 'center'
            };
            var7.contentInner = var12;
            var12 = {
                'flex': 1,
                'marginRight': 12
            };
            var7.contentText = var12;
            var12 = {};
            var12.flexDirection = var14;
            var7.actions = var12;
            var12 = {
                'marginLeft': 12,
                'alignSelf': 'center'
            };
            var7.action = var12;
            var12 = {};
            var12.marginLeft = var13;
            var7.buttonWrapper = var12;
            var12 = {
                'flexDirection': 'row',
                'alignItems': 'center'
            };
            var7.labelContainer = var12;
            var12 = {
                'marginRight': 4,
                'paddingTop': 0
            };
            var7.roleDot = var12;
            var12 = {
                'display': 'flex',
                'flex': 1,
                'flexDirection': 'row',
                'alignItems': 'center',
                'gap': 4
            };
            var7.usernameLabelContainer = var12;
            var12 = {
                'display': 'flex',
                'flexShrink': 1
            };
            var7.usernameLabel = var12;
            var12 = {};
            var13 = 13;
            var13 = var5[var13];
            var14 = var4.bind(var0)(var13);
            var13 = var14.isIOS;
            var14 = var13.bind(var14)();
            var13 = 16;
            if (!var14) {
                _fun72518_ip = 740;
                continue _fun72518
            }
        case 737:
            var13 = 22;
        case 740:
            var12.lineHeight = var13;
            var7.usernameLabelWithLineHeight = var12;
            var7 = var8.bind(var9)(var7);
            var _closure1_slot18 = var7;
            var3 = var5[var3];
            var8 = var4.bind(var0)(var3);
            var7 = var8.createStyles;
            var3 = {};
            var9 = {};
            var12 = var5[var10];
            var12 = var11.bind(var0)(var12);
            var12 = var12.colors;
            var12 = var12.TEXT_SUBTLE;
            var9.color = var12;
            var3.activityText = var9;
            var9 = {
                'flexDirection': 'row',
                'gap': 4
            };
            var10 = var5[var10];
            var10 = var11.bind(var0)(var10);
            var10 = var10.radii;
            var10 = var10.xs;
            var9.cornerRadius = var10;
            var3.gameContainer = var9;
            var9 = {
                'width': 14,
                'height': 14
            };
            var3.gameIcon = var9;
            var3 = var7.bind(var8)(var3);
            var _closure1_slot19 = var3;
            var3 = 'Friends_v2';
            var _closure1_slot20 = var3;
            var3 = var6.memo;
            var1 = function(arg0) { // Original name: UserRow, environment: var1
                _fun72527: for (var _fun72527_ip = 0;;) switch (_fun72527_ip) {
                    case 0:
                        var11 = arg0;
                        var36 = var11.type;
                        var _closure2_slot0 = var36;
                        var32 = var11.user;
                        var _closure2_slot1 = var32;
                        var7 = var11.mode;
                        var4 = undefined;
                        if (!(var7 === var4)) {
                            _fun72527_ip = 47;
                            continue _fun72527
                        }
                    case 34:
                        var0 = _closure1_slot11;
                        var7 = var0.NONE;
                    case 47:
                        var _closure2_slot2 = var7;
                        var6 = var11.selected;
                        if (!(var6 === var4)) {
                            _fun72527_ip = 63;
                            continue _fun72527
                        }
                    case 61:
                        var6 = false;
                    case 63:
                        var19 = var11.disabled;
                        if (!(var19 === var4)) {
                            _fun72527_ip = 74;
                            continue _fun72527
                        }
                    case 72:
                        var19 = false;
                    case 74:
                        var _closure2_slot3 = var19;
                        var38 = var11.isOwner;
                        if (!(var38 === var4)) {
                            _fun72527_ip = 90;
                            continue _fun72527
                        }
                    case 88:
                        var38 = false;
                    case 90:
                        var _closure2_slot4 = var38;
                        var14 = var11.onPress;
                        var _closure2_slot5 = var14;
                        var44 = var11.onLongPress;
                        var _closure2_slot6 = var44;
                        var12 = var11.handleMessage;
                        var _closure2_slot7 = var12;
                        var0 = var11.nickname;
                        var _closure2_slot8 = var0;
                        var29 = var11.usernameColor;
                        var _closure2_slot9 = var29;
                        var28 = var11.roleColors;
                        var10 = var11.premiumSince;
                        var _closure2_slot10 = var10;
                        var22 = var11.guildId;
                        var _closure2_slot11 = var22;
                        var27 = var11.trailing;
                        var _closure2_slot12 = var27;
                        var37 = var11.subLabel;
                        var _closure2_slot13 = var37;
                        var39 = var11.label;
                        var _closure2_slot14 = var39;
                        var13 = var11.accessibilityActions;
                        var3 = var11.onAccessibilityAction;
                        var8 = var11.applicationId;
                        var _closure2_slot15 = var8;
                        var30 = var11.isGameRelationship;
                        if (!(var30 === var4)) {
                            _fun72527_ip = 230;
                            continue _fun72527
                        }
                    case 228:
                        var30 = false;
                    case 230:
                        var _closure2_slot16 = var30;
                        var0 = var11.isNameplatedRow;
                        if (!(var0 === var4)) {
                            _fun72527_ip = 246;
                            continue _fun72527
                        }
                    case 244:
                        var0 = false;
                    case 246:
                        var25 = var11.canShowDisplayNameStyles;
                        if (!(var25 === var4)) {
                            _fun72527_ip = 258;
                            continue _fun72527
                        }
                    case 256:
                        var25 = false;
                    case 258:
                        var34 = var11.canShowDisplayNameStylesFont;
                        if (!(var34 === var4)) {
                            _fun72527_ip = 270;
                            continue _fun72527
                        }
                    case 268:
                        var34 = false;
                    case 270:
                        var9 = {
                            'type': 0,
                            'user': 0,
                            'mode': 0,
                            'selected': 0,
                            'disabled': 0,
                            'isOwner': 0,
                            'onPress': 0,
                            'onLongPress': 0,
                            'handleMessage': 0,
                            'nickname': 0,
                            'usernameColor': 0,
                            'roleColors': 0,
                            'premiumSince': 0,
                            'guildId': 0,
                            'trailing': 0,
                            'subLabel': 0,
                            'label': 0,
                            'accessibilityActions': 0,
                            'onAccessibilityAction': 0,
                            'applicationId': 0,
                            'isGameRelationship': 0,
                            'isNameplatedRow': 0,
                            'canShowDisplayNameStyles': 0,
                            'canShowDisplayNameStylesFont': 0
                        };
                        var2 = null;
                        var48 = var9;
                        var47 = null;
                        var1 = silentSetPrototypeOf(var48, var47);
                        var48 = {};
                        var47 = var11;
                        var46 = var9;
                        var15 = copyDataProperties(var48, var47, var46);
                        var _closure2_slot17 = var4;
                        var _closure2_slot18 = var4;
                        var _closure2_slot19 = var4;
                        var _closure2_slot20 = var4;
                        var _closure2_slot21 = var4;
                        var _closure2_slot22 = var4;
                        var _closure2_slot23 = var4;
                        var _closure2_slot24 = var4;
                        var _closure2_slot25 = var4;
                        var _closure2_slot26 = var4;
                        var _closure2_slot27 = var4;
                        var9 = _closure1_slot18;
                        var26 = var9.bind(var4)();
                        _closure2_slot17 = var26;
                        var11 = _closure1_slot1;
                        var23 = _closure1_slot2;
                        var9 = 27;
                        var9 = var23[var9];
                        var9 = var11.bind(var4)(var9);
                        var9 = var9.bind(var4)();
                        var9 = var9.analyticsLocations;
                        _closure2_slot18 = var9;
                        var21 = _closure1_slot0;
                        var16 = 22;
                        var11 = var23[var16];
                        var20 = var21.bind(var4)(var11);
                        var18 = var20.useStateFromStoresObject;
                        var11 = _closure1_slot5;
                        var17 = new Array(1);
                        var17[0] = var11;
                        var11 = function() { // Environment: var5
                            var0 = {};
                            var1 = _closure1_slot5;
                            var2 = var1.useReducedMotion;
                            var0.useReducedMotion = var2;
                            var1 = var1.roleStyle;
                            var0.roleStyle = var1;
                            return var0;
                        };
                        var11 = var18.bind(var20)(var17, var11);
                        var35 = var11.useReducedMotion;
                        _closure2_slot19 = var35;
                        var11 = var11.roleStyle;
                        _closure2_slot20 = var11;
                        var17 = var23[var16];
                        var24 = var21.bind(var4)(var17);
                        var20 = var24.useStateFromStoresObject;
                        var17 = _closure1_slot9;
                        var18 = new Array(1);
                        var18[0] = var17;
                        var17 = function() { // Environment: var5
                            var0 = {};
                            var3 = _closure1_slot9;
                            var4 = var3.isMobileOnline;
                            var1 = _closure2_slot1;
                            var2 = var1.id;
                            var2 = var4.bind(var3)(var2);
                            var0.isMobileOnline = var2;
                            var4 = var3.isVROnline;
                            var2 = var1.id;
                            var2 = var4.bind(var3)(var2);
                            var0.isVROnline = var2;
                            var2 = var3.getStatus;
                            var1 = var1.id;
                            var1 = var2.bind(var3)(var1);
                            var0.status = var1;
                            return var0;
                        };
                        var17 = var20.bind(var24)(var18, var17);
                        var42 = var17.isMobileOnline;
                        _closure2_slot21 = var42;
                        var40 = var17.isVROnline;
                        _closure2_slot22 = var40;
                        var43 = var17.status;
                        _closure2_slot23 = var43;
                        var17 = var23[var16];
                        var24 = var21.bind(var4)(var17);
                        var20 = var24.useStateFromStores;
                        var17 = _closure1_slot10;
                        var18 = new Array(1);
                        var18[0] = var17;
                        var17 = function() { // Environment: var5
                            _fun72530: for (var _fun72530_ip = 0;;) switch (_fun72530_ip) {
                                case 0:
                                    var2 = _closure2_slot8;
                                    var0 = null;
                                    if (!(var0 == var2)) {
                                        _fun72530_ip = 42;
                                        continue _fun72530
                                    }
                                case 13:
                                    var3 = _closure1_slot10;
                                    var2 = var3.getNickname;
                                    var0 = _closure2_slot1;
                                    var0 = var0.id;
                                    var0 = var2.bind(var3)(var0);
                                    _fun72530_ip = 46;
                                    continue _fun72530;
                                case 42:
                                    var0 = _closure2_slot8;
                                case 46:
                                    return var0;
                            }
                        };
                        var20 = var20.bind(var24)(var18, var17);
                        _closure2_slot8 = var20;
                        var16 = var23[var16];
                        var24 = var21.bind(var4)(var16);
                        var18 = var24.useStateFromStores;
                        var16 = _closure1_slot7;
                        var17 = new Array(1);
                        var17[0] = var16;
                        var16 = function() { // Environment: var5
                            var2 = _closure1_slot7;
                            var1 = var2.getSuggestion;
                            var0 = _closure2_slot1;
                            var0 = var0.id;
                            var0 = var1.bind(var2)(var0);
                            return var0;
                        };
                        var41 = var18.bind(var24)(var17, var16);
                        _closure2_slot24 = var41;
                        var16 = 28;
                        var16 = var23[var16];
                        var17 = var21.bind(var4)(var16);
                        var16 = var17.useAvatarDecoration;
                        var18 = var16.bind(var17)(var32, var22);
                        _closure2_slot25 = var18;
                        var31 = _closure1_slot3;
                        var17 = var31.useCallback;
                        var16 = new Array(2);
                        var16[0] = var32;
                        var16[1] = var14;
                        var14 = function() { // Environment: var5
                            _fun72532: for (var _fun72532_ip = 0;;) switch (_fun72532_ip) {
                                case 0:
                                    var2 = _closure2_slot5;
                                    var1 = null;
                                    if (!(var1 != var2)) {
                                        _fun72532_ip = 28;
                                        continue _fun72532
                                    }
                                case 13:
                                    var2 = _closure2_slot5;
                                    var1 = _closure2_slot1;
                                    var0 = undefined;
                                    var0 = var2.bind(var0)(var1);
                                case 28:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var17 = var17.bind(var31)(var14, var16);
                        var14 = var31.useRef;
                        var14 = var14.bind(var31)(var32);
                        _closure2_slot26 = var14;
                        var24 = var31.useEffect;
                        var16 = new Array(1);
                        var16[0] = var32;
                        var14 = function() { // Environment: var5
                            var1 = _closure2_slot26;
                            var0 = _closure2_slot1;
                            var1.current = var0;
                            var0 = undefined;
                            return var0;
                        };
                        var14 = var24.bind(var31)(var14, var16);
                        var24 = var31.useMemo;
                        var16 = new Array(6);
                        var16[0] = var7;
                        var16[1] = var36;
                        var16[2] = var32;
                        var16[3] = var12;
                        var16[4] = var8;
                        var16[5] = var26;
                        var14 = function() { // Environment: var5
                            _fun72534: for (var _fun72534_ip = 0;;) switch (_fun72534_ip) {
                                case 0:
                                    var1 = new Array(0);
                                    var2 = _closure2_slot2;
                                    var0 = _closure1_slot11;
                                    var0 = var0.ACTIONS;
                                    if (!(var2 === var0)) {
                                        _fun72534_ip = 1916;
                                        continue _fun72534
                                    }
                                case 33:
                                    var2 = _closure2_slot0;
                                    var0 = _closure1_slot12;
                                    var0 = var0.PENDING_INCOMING;
                                    if (!(var0 !== var2)) {
                                        _fun72534_ip = 1336;
                                        continue _fun72534
                                    }
                                case 54:
                                    var0 = _closure1_slot12;
                                    var0 = var0.PENDING_OUTGOING;
                                    if (!(var0 !== var2)) {
                                        _fun72534_ip = 1016;
                                        continue _fun72534
                                    }
                                case 71:
                                    var0 = _closure1_slot12;
                                    var0 = var0.SUGGESTION;
                                    if (!(var0 !== var2)) {
                                        _fun72534_ip = 665;
                                        continue _fun72534
                                    }
                                case 88:
                                    var0 = _closure1_slot12;
                                    var0 = var0.FRIEND;
                                    var3 = var1.push;
                                    var2 = {};
                                    var5 = _closure1_slot17;
                                    var0 = var5.CALL;
                                    var2.name = var0;
                                    var11 = _closure1_slot0;
                                    var19 = _closure1_slot2;
                                    var10 = 29;
                                    var0 = var19[var10];
                                    var4 = undefined;
                                    var0 = var11.bind(var4)(var0);
                                    var9 = var0.intl;
                                    var7 = var9.formatToPlainString;
                                    var0 = var19[var10];
                                    var0 = var11.bind(var4)(var0);
                                    var0 = var0.t;
                                    var6 = var0.Q75ddl;
                                    var0 = {};
                                    var17 = _closure1_slot1;
                                    var16 = 25;
                                    var14 = var19[var16];
                                    var15 = var17.bind(var4)(var14);
                                    var14 = var15.getName;
                                    var18 = _closure2_slot1;
                                    var14 = var14.bind(var15)(var18);
                                    var0.name = var14;
                                    var0 = var7.bind(var9)(var6, var0);
                                    var2.label = var0;
                                    var0 = {};
                                    var5 = var5.MESSAGE;
                                    var0.name = var5;
                                    var5 = var19[var10];
                                    var5 = var11.bind(var4)(var5);
                                    var9 = var5.intl;
                                    var7 = var9.formatToPlainString;
                                    var5 = var19[var10];
                                    var5 = var11.bind(var4)(var5);
                                    var5 = var5.t;
                                    var6 = var5.zFfSFQ;
                                    var5 = {};
                                    var14 = var19[var16];
                                    var15 = var17.bind(var4)(var14);
                                    var14 = var15.getName;
                                    var14 = var14.bind(var15)(var18);
                                    var5.name = var14;
                                    var5 = var7.bind(var9)(var6, var5);
                                    var0.label = var5;
                                    var0 = var3.bind(var1)(var2, var0);
                                    var3 = _closure1_slot15;
                                    var2 = _closure1_slot4;
                                    var0 = {};
                                    var5 = _closure2_slot17;
                                    var5 = var5.actions;
                                    var0.style = var5;
                                    var9 = _closure1_slot14;
                                    var6 = 30;
                                    var5 = var19[var6];
                                    var7 = var17.bind(var4)(var5);
                                    var5 = {};
                                    var14 = _closure2_slot17;
                                    var14 = var14.action;
                                    var5.styles = var14;
                                    var14 = 35;
                                    var14 = var19[var14];
                                    var14 = var11.bind(var4)(var14);
                                    var14 = var14.PhoneCallIcon;
                                    var5.IconComponent = var14;
                                    var14 = 'neutral';
                                    var5.type = var14;
                                    var15 = function() { // Original name: onPress, environment: var12
                                        var2 = _closure1_slot21;
                                        var0 = _closure2_slot26;
                                        var1 = var0.current;
                                        var0 = undefined;
                                        var1 = var2.bind(var0)(var1);
                                        return var0;
                                    };
                                    var5.onPress = var15;
                                    var15 = var19[var10];
                                    var15 = var11.bind(var4)(var15);
                                    var22 = var15.intl;
                                    var21 = var22.formatToPlainString;
                                    var15 = var19[var10];
                                    var15 = var11.bind(var4)(var15);
                                    var15 = var15.t;
                                    var20 = var15.Q75ddl;
                                    var15 = {};
                                    var23 = var19[var16];
                                    var24 = var17.bind(var4)(var23);
                                    var23 = var24.getName;
                                    var23 = var23.bind(var24)(var18);
                                    var15.name = var23;
                                    var15 = var21.bind(var22)(var20, var15);
                                    var5.accessibilityLabel = var15;
                                    var7 = var9.bind(var4)(var7, var5);
                                    var5 = new Array(2);
                                    var5[0] = var7;
                                    var9 = _closure1_slot14;
                                    var6 = var19[var6];
                                    var7 = var17.bind(var4)(var6);
                                    var6 = {};
                                    var15 = _closure2_slot17;
                                    var15 = var15.action;
                                    var6.styles = var15;
                                    var15 = 36;
                                    var15 = var19[var15];
                                    var15 = var11.bind(var4)(var15);
                                    var15 = var15.ChatIcon;
                                    var6.IconComponent = var15;
                                    var6.type = var14;
                                    var14 = function() { // Original name: onPress, environment: var12
                                        _fun72540: for (var _fun72540_ip = 0;;) switch (_fun72540_ip) {
                                            case 0:
                                                var2 = _closure2_slot7;
                                                var0 = null;
                                                var2 = var0 == var2;
                                                var3 = undefined;
                                                var0 = undefined;
                                                if (var2) {
                                                    _fun72540_ip = 38;
                                                    continue _fun72540
                                                }
                                            case 20:
                                                var2 = _closure2_slot7;
                                                var1 = _closure2_slot26;
                                                var1 = var1.current;
                                                var0 = var2.bind(var3)(var1);
                                            case 38:
                                                return var0;
                                        }
                                    };
                                    var6.onPress = var14;
                                    var14 = var19[var10];
                                    var14 = var11.bind(var4)(var14);
                                    var15 = var14.intl;
                                    var14 = var15.formatToPlainString;
                                    var10 = var19[var10];
                                    var10 = var11.bind(var4)(var10);
                                    var10 = var10.t;
                                    var11 = var10.zFfSFQ;
                                    var10 = {};
                                    var16 = var19[var16];
                                    var17 = var17.bind(var4)(var16);
                                    var16 = var17.getName;
                                    var16 = var16.bind(var17)(var18);
                                    var10.name = var16;
                                    var10 = var14.bind(var15)(var11, var10);
                                    var6.accessibilityLabel = var10;
                                    var6 = var9.bind(var4)(var7, var6);
                                    var5[1] = var6;
                                    var0.children = var5;
                                    var2 = var3.bind(var4)(var2, var0);
                                    _fun72534_ip = 1902;
                                    continue _fun72534;
                                case 665:
                                    var4 = var1.push;
                                    var3 = {};
                                    var6 = _closure1_slot17;
                                    var0 = var6.ACCEPT_SUGGESTION;
                                    var3.name = var0;
                                    var20 = _closure1_slot0;
                                    var21 = _closure1_slot2;
                                    var15 = 29;
                                    var0 = var21[var15];
                                    var5 = undefined;
                                    var0 = var20.bind(var5)(var0);
                                    var9 = var0.intl;
                                    var7 = var9.string;
                                    var0 = var21[var15];
                                    var0 = var20.bind(var5)(var0);
                                    var0 = var0.t;
                                    var0 = var0["ed99+i"];
                                    var0 = var7.bind(var9)(var0);
                                    var3.label = var0;
                                    var0 = {};
                                    var6 = var6.IGNORE_SUGGESTION;
                                    var0.name = var6;
                                    var6 = var21[var15];
                                    var6 = var20.bind(var5)(var6);
                                    var9 = var6.intl;
                                    var7 = var9.string;
                                    var6 = var21[var15];
                                    var6 = var20.bind(var5)(var6);
                                    var6 = var6.t;
                                    var6 = var6["Tw3a/R"];
                                    var6 = var7.bind(var9)(var6);
                                    var0.label = var6;
                                    var0 = var4.bind(var1)(var3, var0);
                                    var4 = _closure1_slot14;
                                    var3 = _closure1_slot4;
                                    var0 = {};
                                    var6 = _closure2_slot17;
                                    var6 = var6.actions;
                                    var0.style = var6;
                                    var9 = _closure1_slot14;
                                    var7 = _closure1_slot4;
                                    var6 = {};
                                    var10 = _closure2_slot17;
                                    var10 = var10.buttonWrapper;
                                    var6.style = var10;
                                    var14 = _closure1_slot14;
                                    var10 = 33;
                                    var10 = var21[var10];
                                    var10 = var20.bind(var5)(var10);
                                    var11 = var10.Button;
                                    var10 = {
                                        'variant': 'secondary',
                                        'size': 'sm'
                                    };
                                    var16 = 34;
                                    var16 = var21[var16];
                                    var18 = var20.bind(var5)(var16);
                                    var17 = var18.truncateText;
                                    var16 = var21[var15];
                                    var16 = var20.bind(var5)(var16);
                                    var19 = var16.intl;
                                    var16 = var19.string;
                                    var15 = var21[var15];
                                    var15 = var20.bind(var5)(var15);
                                    var15 = var15.t;
                                    var15 = var15.OYkgVk;
                                    var16 = var16.bind(var19)(var15);
                                    var15 = 8;
                                    var15 = var17.bind(var18)(var16, var15);
                                    var10.text = var15;
                                    var15 = function() { // Original name: onPress, environment: var12
                                        var2 = _closure1_slot24;
                                        var0 = _closure2_slot26;
                                        var1 = var0.current;
                                        var0 = undefined;
                                        var1 = var2.bind(var0)(var1);
                                        return var0;
                                    };
                                    var10.onPress = var15;
                                    var10 = var14.bind(var5)(var11, var10);
                                    var6.children = var10;
                                    var6 = var9.bind(var5)(var7, var6);
                                    var0.children = var6;
                                    var2 = var4.bind(var5)(var3, var0);
                                    _fun72534_ip = 1902;
                                    continue _fun72534;
                                case 1016:
                                    var3 = var1.push;
                                    var0 = {};
                                    var4 = _closure1_slot17;
                                    var4 = var4.CANCEL;
                                    var0.name = var4;
                                    var11 = _closure1_slot0;
                                    var19 = _closure1_slot2;
                                    var10 = 29;
                                    var4 = var19[var10];
                                    var5 = undefined;
                                    var4 = var11.bind(var5)(var4);
                                    var9 = var4.intl;
                                    var7 = var9.formatToPlainString;
                                    var4 = var19[var10];
                                    var4 = var11.bind(var5)(var4);
                                    var4 = var4.t;
                                    var6 = var4.JFJ8Cg;
                                    var4 = {};
                                    var17 = _closure1_slot1;
                                    var16 = 25;
                                    var14 = var19[var16];
                                    var15 = var17.bind(var5)(var14);
                                    var14 = var15.getName;
                                    var18 = _closure2_slot1;
                                    var14 = var14.bind(var15)(var18);
                                    var4.name = var14;
                                    var4 = var7.bind(var9)(var6, var4);
                                    var0.label = var4;
                                    var0 = var3.bind(var1)(var0);
                                    var4 = _closure1_slot14;
                                    var3 = _closure1_slot4;
                                    var0 = {};
                                    var6 = _closure2_slot17;
                                    var6 = var6.actions;
                                    var0.style = var6;
                                    var9 = _closure1_slot14;
                                    var6 = 30;
                                    var6 = var19[var6];
                                    var7 = var17.bind(var5)(var6);
                                    var6 = {};
                                    var14 = _closure2_slot17;
                                    var14 = var14.action;
                                    var6.styles = var14;
                                    var14 = 31;
                                    var14 = var19[var14];
                                    var14 = var11.bind(var5)(var14);
                                    var14 = var14.XLargeIcon;
                                    var6.IconComponent = var14;
                                    var14 = 'neutral';
                                    var6.type = var14;
                                    var14 = function() { // Original name: onPress, environment: var12
                                        var3 = _closure1_slot23;
                                        var1 = _closure2_slot26;
                                        var2 = var1.current;
                                        var1 = _closure2_slot15;
                                        var0 = undefined;
                                        var1 = var3.bind(var0)(var2, var1);
                                        return var0;
                                    };
                                    var6.onPress = var14;
                                    var14 = var19[var10];
                                    var14 = var11.bind(var5)(var14);
                                    var15 = var14.intl;
                                    var14 = var15.formatToPlainString;
                                    var10 = var19[var10];
                                    var10 = var11.bind(var5)(var10);
                                    var10 = var10.t;
                                    var11 = var10.JFJ8Cg;
                                    var10 = {};
                                    var16 = var19[var16];
                                    var17 = var17.bind(var5)(var16);
                                    var16 = var17.getName;
                                    var16 = var16.bind(var17)(var18);
                                    var10.name = var16;
                                    var10 = var14.bind(var15)(var11, var10);
                                    var6.accessibilityLabel = var10;
                                    var6 = var9.bind(var5)(var7, var6);
                                    var0.children = var6;
                                    var2 = var4.bind(var5)(var3, var0);
                                    _fun72534_ip = 1902;
                                    continue _fun72534;
                                case 1336:
                                    var4 = var1.push;
                                    var3 = {};
                                    var6 = _closure1_slot17;
                                    var0 = var6.DECLINE;
                                    var3.name = var0;
                                    var11 = _closure1_slot0;
                                    var17 = _closure1_slot2;
                                    var10 = 29;
                                    var0 = var17[var10];
                                    var5 = undefined;
                                    var0 = var11.bind(var5)(var0);
                                    var18 = var0.intl;
                                    var9 = var18.formatToPlainString;
                                    var0 = var17[var10];
                                    var0 = var11.bind(var5)(var0);
                                    var0 = var0.t;
                                    var7 = var0["C9Xe6+"];
                                    var0 = {};
                                    var15 = _closure1_slot1;
                                    var14 = 25;
                                    var16 = var17[var14];
                                    var20 = var15.bind(var5)(var16);
                                    var19 = var20.getName;
                                    var16 = _closure2_slot1;
                                    var19 = var19.bind(var20)(var16);
                                    var0.name = var19;
                                    var0 = var9.bind(var18)(var7, var0);
                                    var3.label = var0;
                                    var0 = {};
                                    var6 = var6.ACCEPT;
                                    var0.name = var6;
                                    var6 = var17[var10];
                                    var6 = var11.bind(var5)(var6);
                                    var18 = var6.intl;
                                    var9 = var18.formatToPlainString;
                                    var6 = var17[var10];
                                    var6 = var11.bind(var5)(var6);
                                    var6 = var6.t;
                                    var7 = var6["6p0yBo"];
                                    var6 = {};
                                    var19 = var17[var14];
                                    var20 = var15.bind(var5)(var19);
                                    var19 = var20.getName;
                                    var19 = var19.bind(var20)(var16);
                                    var6.name = var19;
                                    var6 = var9.bind(var18)(var7, var6);
                                    var0.label = var6;
                                    var0 = var4.bind(var1)(var3, var0);
                                    var4 = _closure1_slot15;
                                    var3 = _closure1_slot4;
                                    var0 = {};
                                    var6 = _closure2_slot17;
                                    var6 = var6.actions;
                                    var0.style = var6;
                                    var18 = _closure1_slot14;
                                    var7 = 30;
                                    var6 = var17[var7];
                                    var9 = var15.bind(var5)(var6);
                                    var6 = {};
                                    var19 = _closure2_slot17;
                                    var19 = var19.action;
                                    var6.styles = var19;
                                    var19 = 31;
                                    var19 = var17[var19];
                                    var19 = var11.bind(var5)(var19);
                                    var19 = var19.XLargeIcon;
                                    var6.IconComponent = var19;
                                    var19 = 'neutral';
                                    var6.type = var19;
                                    var19 = function() { // Original name: onPress, environment: var12
                                        var3 = _closure1_slot23;
                                        var1 = _closure2_slot26;
                                        var2 = var1.current;
                                        var1 = _closure2_slot15;
                                        var0 = undefined;
                                        var1 = var3.bind(var0)(var2, var1);
                                        return var0;
                                    };
                                    var6.onPress = var19;
                                    var19 = var17[var10];
                                    var19 = var11.bind(var5)(var19);
                                    var22 = var19.intl;
                                    var21 = var22.formatToPlainString;
                                    var19 = var17[var10];
                                    var19 = var11.bind(var5)(var19);
                                    var19 = var19.t;
                                    var20 = var19["C9Xe6+"];
                                    var19 = {};
                                    var23 = var17[var14];
                                    var24 = var15.bind(var5)(var23);
                                    var23 = var24.getName;
                                    var23 = var23.bind(var24)(var16);
                                    var19.name = var23;
                                    var19 = var21.bind(var22)(var20, var19);
                                    var6.accessibilityLabel = var19;
                                    var9 = var18.bind(var5)(var9, var6);
                                    var6 = new Array(2);
                                    var6[0] = var9;
                                    var9 = _closure1_slot14;
                                    var7 = var17[var7];
                                    var8 = var15.bind(var5)(var7);
                                    var7 = {};
                                    var13 = _closure2_slot17;
                                    var13 = var13.action;
                                    var7.styles = var13;
                                    var13 = 32;
                                    var13 = var17[var13];
                                    var13 = var11.bind(var5)(var13);
                                    var13 = var13.CheckmarkLargeIcon;
                                    var7.IconComponent = var13;
                                    var13 = 'positive';
                                    var7.type = var13;
                                    var12 = function() { // Original name: onPress, environment: var12
                                        var3 = _closure1_slot22;
                                        var1 = _closure2_slot26;
                                        var2 = var1.current;
                                        var1 = _closure2_slot15;
                                        var0 = undefined;
                                        var1 = var3.bind(var0)(var2, var1);
                                        return var0;
                                    };
                                    var7.onPress = var12;
                                    var12 = var17[var10];
                                    var12 = var11.bind(var5)(var12);
                                    var13 = var12.intl;
                                    var12 = var13.formatToPlainString;
                                    var10 = var17[var10];
                                    var10 = var11.bind(var5)(var10);
                                    var10 = var10.t;
                                    var11 = var10["6p0yBo"];
                                    var10 = {};
                                    var14 = var17[var14];
                                    var15 = var15.bind(var5)(var14);
                                    var14 = var15.getName;
                                    var14 = var14.bind(var15)(var16);
                                    var10.name = var14;
                                    var10 = var12.bind(var13)(var11, var10);
                                    var7.accessibilityLabel = var10;
                                    var7 = var9.bind(var5)(var8, var7);
                                    var6[1] = var7;
                                    var0.children = var6;
                                    var2 = var4.bind(var5)(var3, var0);
                                case 1902:
                                    var0 = {};
                                    var0.accessibilityActions = var1;
                                    var0.actions = var2;
                                    return var0;
                                case 1916:
                                    var0 = {};
                                    var0.accessibilityActions = var1;
                                    var1 = undefined;
                                    var0.actions = var1;
                                    return var0;
                            }
                        };
                        var16 = var24.bind(var31)(var14, var16);
                        var14 = var16.accessibilityActions;
                        var24 = var16.actions;
                        _closure2_slot27 = var24;
                        var33 = var31.useCallback;
                        var16 = new Array(3);
                        var16[0] = var32;
                        var16[1] = var12;
                        var16[2] = var8;
                        var12 = function(arg0) { // Environment: var5
                            _fun72541: for (var _fun72541_ip = 0;;) switch (_fun72541_ip) {
                                case 0:
                                    var0 = arg0;
                                    var0 = var0.nativeEvent;
                                    var2 = var0.actionName;
                                    var1 = _closure1_slot17;
                                    var1 = var1.CALL;
                                    if (!(var1 !== var2)) {
                                        _fun72541_ip = 281;
                                        continue _fun72541
                                    }
                                case 35:
                                    var1 = _closure1_slot17;
                                    var1 = var1.MESSAGE;
                                    if (!(var1 !== var2)) {
                                        _fun72541_ip = 246;
                                        continue _fun72541
                                    }
                                case 52:
                                    var1 = _closure1_slot17;
                                    var1 = var1.ACCEPT;
                                    if (!(var1 !== var2)) {
                                        _fun72541_ip = 221;
                                        continue _fun72541
                                    }
                                case 69:
                                    var1 = _closure1_slot17;
                                    var1 = var1.DECLINE;
                                    if (!(var1 !== var2)) {
                                        _fun72541_ip = 196;
                                        continue _fun72541
                                    }
                                case 83:
                                    var1 = _closure1_slot17;
                                    var1 = var1.CANCEL;
                                    if (!(var1 !== var2)) {
                                        _fun72541_ip = 196;
                                        continue _fun72541
                                    }
                                case 97:
                                    var1 = _closure1_slot17;
                                    var1 = var1.ACCEPT_SUGGESTION;
                                    if (!(var1 !== var2)) {
                                        _fun72541_ip = 176;
                                        continue _fun72541
                                    }
                                case 111:
                                    var1 = _closure1_slot17;
                                    var1 = var1.IGNORE_SUGGESTION;
                                    if (!(var1 !== var2)) {
                                        _fun72541_ip = 129;
                                        continue _fun72541
                                    }
                                case 125:
                                    var1 = undefined;
                                    return var1;
                                case 129:
                                    var2 = _closure2_slot1;
                                    var4 = _closure1_slot1;
                                    var3 = _closure1_slot2;
                                    var1 = 21;
                                    var3 = var3[var1];
                                    var1 = undefined;
                                    var4 = var4.bind(var1)(var3);
                                    var3 = var4.ignore;
                                    var2 = var2.id;
                                    var2 = var3.bind(var4)(var2);
                                    return var1;
                                case 176:
                                    var3 = _closure1_slot24;
                                    var2 = _closure2_slot1;
                                    var1 = undefined;
                                    var2 = var3.bind(var1)(var2);
                                    return var1;
                                case 196:
                                    var4 = _closure1_slot23;
                                    var3 = _closure2_slot1;
                                    var2 = _closure2_slot15;
                                    var1 = undefined;
                                    var2 = var4.bind(var1)(var3, var2);
                                    return var1;
                                case 221:
                                    var4 = _closure1_slot22;
                                    var3 = _closure2_slot1;
                                    var2 = _closure2_slot15;
                                    var1 = undefined;
                                    var2 = var4.bind(var1)(var3, var2);
                                    return var1;
                                case 246:
                                    var3 = _closure2_slot7;
                                    var1 = null;
                                    var3 = var1 == var3;
                                    var4 = undefined;
                                    var1 = undefined;
                                    if (var3) {
                                        _fun72541_ip = 279;
                                        continue _fun72541
                                    }
                                case 266:
                                    var3 = _closure2_slot7;
                                    var2 = _closure2_slot1;
                                    var1 = var3.bind(var4)(var2);
                                case 279:
                                    return var1;
                                case 281:
                                    var2 = _closure1_slot21;
                                    var1 = _closure2_slot1;
                                    var0 = undefined;
                                    var1 = var2.bind(var0)(var1);
                                    return var0;
                            }
                        };
                        var12 = var33.bind(var31)(var12, var16);
                        var33 = var31.useCallback;
                        var16 = new Array(3);
                        var16[0] = var44;
                        var16[1] = var32;
                        var16[2] = var9;
                        var9 = function() { // Environment: var5
                            _fun72542: for (var _fun72542_ip = 0;;) switch (_fun72542_ip) {
                                case 0:
                                    var2 = _closure2_slot6;
                                    var1 = null;
                                    if (!(var1 != var2)) {
                                        _fun72542_ip = 30;
                                        continue _fun72542
                                    }
                                case 13:
                                    var2 = _closure2_slot6;
                                    var1 = _closure2_slot1;
                                    var0 = undefined;
                                    var0 = var2.bind(var0)(var1);
                                    _fun72542_ip = 92;
                                    continue _fun72542;
                                case 30:
                                    var2 = _closure1_slot0;
                                    var0 = _closure1_slot2;
                                    var1 = 38;
                                    var1 = var0[var1];
                                    var3 = undefined;
                                    var2 = var2.bind(var3)(var1);
                                    var1 = 37;
                                    var1 = var0[var1];
                                    var0 = var0.paths;
                                    var2 = var2.bind(var3)(var1, var0);
                                    var1 = var2.then;
                                    var0 = function(arg0) { // Environment: var0
                                        var0 = arg0;
                                        var2 = var0.default;
                                        var1 = {};
                                        var3 = _closure2_slot1;
                                        var4 = var3.id;
                                        var1.userId = var4;
                                        var1.localUser = var3;
                                        var0 = _closure2_slot18;
                                        var1.sourceAnalyticsLocations = var0;
                                        var0 = undefined;
                                        var0 = var2.bind(var0)(var1);
                                        return var0;
                                    };
                                    var0 = var1.bind(var2)(var0);
                                case 92:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var16 = var33.bind(var31)(var9, var16);
                        var9 = 39;
                        var9 = var23[var9];
                        var23 = var21.bind(var4)(var9);
                        var21 = var23.useNameplate;
                        var9 = {};
                        var9.user = var32;
                        var9.guildId = var22;
                        var9 = var21.bind(var23)(var9);
                        var33 = var31.useMemo;
                        var23 = new Array(2);
                        var23[0] = var29;
                        var23[1] = var11;
                        var21 = function() { // Environment: var5
                            _fun72544: for (var _fun72544_ip = 0;;) switch (_fun72544_ip) {
                                case 0:
                                    var1 = _closure2_slot9;
                                    var0 = null;
                                    var1 = var0 != var1;
                                    var0 = undefined;
                                    if (!var1) {
                                        _fun72544_ip = 45;
                                        continue _fun72544
                                    }
                                case 18:
                                    var3 = _closure2_slot20;
                                    var1 = 'username';
                                    var0 = undefined;
                                    if (!(var1 === var3)) {
                                        _fun72544_ip = 45;
                                        continue _fun72544
                                    }
                                case 32:
                                    var1 = {};
                                    var2 = _closure2_slot9;
                                    var1.color = var2;
                                    var0 = var1;
                                case 45:
                                    return var0;
                            }
                        };
                        var33 = var33.bind(var31)(var21, var23);
                        var23 = var31.useMemo;
                        var44 = var26.avatar;
                        var21 = new Array(7);
                        var21[0] = var44;
                        var21[1] = var32;
                        var21[2] = var22;
                        var21[3] = var43;
                        var21[4] = var42;
                        var21[5] = var40;
                        var21[6] = var18;
                        var18 = function() { // Environment: var5
                            _fun72545: for (var _fun72545_ip = 0;;) switch (_fun72545_ip) {
                                case 0:
                                    var3 = _closure1_slot14;
                                    var1 = _closure1_slot1;
                                    var0 = _closure1_slot2;
                                    var7 = 40;
                                    var0 = var0[var7];
                                    var2 = undefined;
                                    var1 = var1.bind(var2)(var0);
                                    var0 = {};
                                    var6 = _closure2_slot17;
                                    var6 = var6.avatar;
                                    var0.style = var6;
                                    var6 = _closure2_slot1;
                                    var0.user = var6;
                                    var6 = _closure2_slot11;
                                    var0.guildId = var6;
                                    var6 = _closure1_slot13;
                                    var9 = var6.OFFLINE;
                                    var8 = _closure2_slot23;
                                    var6 = null;
                                    if (!(var9 !== var8)) {
                                        _fun72545_ip = 88;
                                        continue _fun72545
                                    }
                                case 84:
                                    var6 = _closure2_slot23;
                                case 88:
                                    var0.status = var6;
                                    var6 = _closure2_slot21;
                                    var0.isMobileOnline = var6;
                                    var6 = _closure2_slot22;
                                    var0.isVROnline = var6;
                                    var6 = _closure1_slot0;
                                    var5 = _closure1_slot2;
                                    var5 = var5[var7];
                                    var5 = var6.bind(var2)(var5);
                                    var5 = var5.AvatarSizes;
                                    var5 = var5.REFRESH_MEDIUM_32;
                                    var0.size = var5;
                                    var4 = _closure2_slot25;
                                    var0.avatarDecoration = var4;
                                    var4 = true;
                                    var0.autoStatusCutout = var4;
                                    var0 = var3.bind(var2)(var1, var0);
                                    return var0;
                            }
                        };
                        var18 = var23.bind(var31)(var18, var21);
                        var23 = var31.useMemo;
                        var21 = new Array(5);
                        var21[0] = var39;
                        var21[1] = var36;
                        var42 = var2 == var41;
                        var40 = undefined;
                        if (var42) {
                            _fun72527_ip = 1004;
                            continue _fun72527
                        }
                    case 999:
                        var40 = var41.name;
                    case 1004:
                        var21[2] = var40;
                        var21[3] = var20;
                        var21[4] = var32;
                        var20 = function() { // Environment: var5
                            _fun72546: for (var _fun72546_ip = 0;;) switch (_fun72546_ip) {
                                case 0:
                                    var0 = _closure2_slot14;
                                    var3 = undefined;
                                    if (!(var3 === var0)) {
                                        _fun72546_ip = 126;
                                        continue _fun72546
                                    }
                                case 13:
                                    var4 = _closure2_slot0;
                                    var2 = _closure1_slot12;
                                    var2 = var2.SUGGESTION;
                                    if (!(var4 === var2)) {
                                        _fun72546_ip = 62;
                                        continue _fun72546
                                    }
                                case 34:
                                    var2 = _closure2_slot24;
                                    var4 = null;
                                    var5 = var4 == var2;
                                    var2 = undefined;
                                    if (var5) {
                                        _fun72546_ip = 58;
                                        continue _fun72546
                                    }
                                case 49:
                                    var5 = _closure2_slot24;
                                    var2 = var5.name;
                                case 58:
                                    if (!(var4 == var2)) {
                                        _fun72546_ip = 115;
                                        continue _fun72546
                                    }
                                case 62:
                                    var4 = _closure2_slot8;
                                    var2 = null;
                                    if (!(var2 == var4)) {
                                        _fun72546_ip = 109;
                                        continue _fun72546
                                    }
                                case 72:
                                    var2 = _closure1_slot1;
                                    var4 = _closure1_slot2;
                                    var0 = 25;
                                    var0 = var4[var0];
                                    var3 = var2.bind(var3)(var0);
                                    var2 = var3.getName;
                                    var0 = _closure2_slot1;
                                    var0 = var2.bind(var3)(var0);
                                    _fun72546_ip = 113;
                                    continue _fun72546;
                                case 109:
                                    var0 = _closure2_slot8;
                                case 113:
                                    _fun72546_ip = 124;
                                    continue _fun72546;
                                case 115:
                                    var2 = _closure2_slot24;
                                    var0 = var2.name;
                                case 124:
                                    _fun72546_ip = 130;
                                    continue _fun72546;
                                case 126:
                                    var0 = _closure2_slot14;
                                case 130:
                                    return var0;
                            }
                        };
                        var31 = var23.bind(var31)(var20, var21);
                        var21 = _closure1_slot3;
                        var23 = var21.useMemo;
                        var20 = new Array(3);
                        var20[0] = var39;
                        var20[1] = var38;
                        var20[2] = var10;
                        var10 = function() { // Environment: var5
                            _fun72547: for (var _fun72547_ip = 0;;) switch (_fun72547_ip) {
                                case 0:
                                    var0 = _closure2_slot14;
                                    var3 = undefined;
                                    if (!(var3 !== var0)) {
                                        _fun72547_ip = 15;
                                        continue _fun72547
                                    }
                                case 13:
                                    return var3;
                                case 15:
                                    var2 = _closure1_slot15;
                                    var1 = _closure1_slot16;
                                    var0 = {};
                                    var4 = _closure2_slot4;
                                    var5 = null;
                                    var7 = null;
                                    if (!var4) {
                                        _fun72547_ip = 116;
                                        continue _fun72547
                                    }
                                case 39:
                                    var10 = _closure1_slot14;
                                    var8 = _closure1_slot0;
                                    var13 = _closure1_slot2;
                                    var4 = 41;
                                    var4 = var13[var4];
                                    var4 = var8.bind(var3)(var4);
                                    var8 = var4.CrownIcon;
                                    var4 = {};
                                    var11 = 'xs';
                                    var4.size = var11;
                                    var12 = _closure1_slot1;
                                    var11 = 12;
                                    var11 = var13[var11];
                                    var11 = var12.bind(var3)(var11);
                                    var11 = var11.colors;
                                    var11 = var11.TEXT_FEEDBACK_WARNING;
                                    var4.color = var11;
                                    var7 = var10.bind(var3)(var8, var4);
                                case 116:
                                    var4 = new Array(2);
                                    var4[0] = var7;
                                    var6 = _closure2_slot10;
                                    var6 = var5 != var6;
                                    var5 = null;
                                    if (!var6) {
                                        _fun72547_ip = 214;
                                        continue _fun72547
                                    }
                                case 137:
                                    var8 = _closure1_slot14;
                                    var7 = _closure1_slot0;
                                    var11 = _closure1_slot2;
                                    var6 = 42;
                                    var6 = var11[var6];
                                    var6 = var7.bind(var3)(var6);
                                    var7 = var6.BoostGemIcon;
                                    var6 = {};
                                    var10 = 'xs';
                                    var6.size = var10;
                                    var10 = _closure1_slot1;
                                    var9 = 12;
                                    var9 = var11[var9];
                                    var9 = var10.bind(var3)(var9);
                                    var9 = var9.unsafe_rawColors;
                                    var9 = var9.GUILD_BOOSTING_PINK;
                                    var6.color = var9;
                                    var5 = var8.bind(var3)(var7, var6);
                                case 214:
                                    var4[1] = var5;
                                    var0.children = var4;
                                    var0 = var2.bind(var3)(var1, var0);
                                    return var0;
                            }
                        };
                        var23 = var23.bind(var21)(var10, var20);
                        var20 = var21.useMemo;
                        var10 = new Array(7);
                        var10[0] = var37;
                        var10[1] = var32;
                        var10[2] = var36;
                        var10[3] = var35;
                        var10[4] = var30;
                        var10[5] = var22;
                        var10[6] = var8;
                        var8 = function() { // Environment: var5
                            _fun72548: for (var _fun72548_ip = 0;;) switch (_fun72548_ip) {
                                case 0:
                                    var0 = _closure2_slot13;
                                    var4 = undefined;
                                    if (!(var4 === var0)) {
                                        _fun72548_ip = 87;
                                        continue _fun72548
                                    }
                                case 13:
                                    var3 = _closure1_slot14;
                                    var2 = _closure1_slot25;
                                    var0 = {};
                                    var5 = _closure2_slot1;
                                    var0.user = var5;
                                    var5 = _closure2_slot0;
                                    var0.type = var5;
                                    var5 = _closure2_slot19;
                                    var5 = !var5;
                                    var0.animate = var5;
                                    var5 = _closure2_slot16;
                                    var0.isGameRelationship = var5;
                                    var5 = _closure2_slot11;
                                    var0.guildId = var5;
                                    var5 = _closure2_slot15;
                                    var0.applicationId = var5;
                                    var0 = var3.bind(var4)(var2, var0);
                                    _fun72548_ip = 91;
                                    continue _fun72548;
                                case 87:
                                    var0 = _closure2_slot13;
                                case 91:
                                    return var0;
                            }
                        };
                        var8 = var20.bind(var21)(var8, var10);
                        var20 = var21.useMemo;
                        var10 = new Array(4);
                        var10[0] = var27;
                        var10[1] = var19;
                        var10[2] = var7;
                        var10[3] = var24;
                        var5 = function() { // Environment: var5
                            _fun72549: for (var _fun72549_ip = 0;;) switch (_fun72549_ip) {
                                case 0:
                                    var2 = _closure2_slot12;
                                    var0 = null;
                                    if (!(var0 == var2)) {
                                        _fun72549_ip = 54;
                                        continue _fun72549
                                    }
                                case 13:
                                    var2 = _closure2_slot3;
                                    var0 = null;
                                    if (var2) {
                                        _fun72549_ip = 52;
                                        continue _fun72549
                                    }
                                case 22:
                                    var4 = _closure2_slot2;
                                    var2 = _closure1_slot11;
                                    var3 = var2.ACTIONS;
                                    var2 = undefined;
                                    if (!(var4 === var3)) {
                                        _fun72549_ip = 49;
                                        continue _fun72549
                                    }
                                case 45:
                                    var2 = _closure2_slot27;
                                case 49:
                                    var0 = var2;
                                case 52:
                                    _fun72549_ip = 58;
                                    continue _fun72549;
                                case 54:
                                    var0 = _closure2_slot12;
                                case 58:
                                    return var0;
                            }
                        };
                        var10 = var20.bind(var21)(var5, var10);
                        var20 = _closure1_slot1;
                        var24 = _closure1_slot2;
                        var5 = 43;
                        var5 = var24[var5];
                        var20 = var20.bind(var4)(var5);
                        var5 = var32.id;
                        var37 = var20.bind(var4)(var22, var5);
                        var21 = _closure1_slot0;
                        var20 = 44;
                        var20 = var24[var20];
                        var21 = var21.bind(var4)(var20);
                        var20 = var21.useProcessColorStringsArray;
                        var35 = var20.bind(var21)(var28);
                        if (!var37) {
                            _fun72527_ip = 1224;
                            continue _fun72527
                        }
                    case 1216:
                        var5 = 'username';
                        var37 = var5 === var11;
                    case 1224:
                        if (!var37) {
                            _fun72527_ip = 1239;
                            continue _fun72527
                        }
                    case 1227:
                        var20 = var35.length;
                        var5 = 1;
                        var37 = var20 > var5;
                    case 1239:
                        var20 = _closure1_slot1;
                        var21 = _closure1_slot2;
                        var5 = 45;
                        var5 = var21[var5];
                        var20 = var20.bind(var4)(var5);
                        var5 = {};
                        var24 = var32.id;
                        var5.userId = var24;
                        var5.guildId = var22;
                        var24 = var20.bind(var4)(var5);
                        var20 = _closure1_slot0;
                        var5 = 46;
                        var5 = var21[var5];
                        var21 = var20.bind(var4)(var5);
                        var20 = var21.useDisplayNameStylesFont;
                        var5 = {};
                        var5.displayNameStyles = var24;
                        var36 = var20.bind(var21)(var5);
                        var30 = {
                            'lineClamp': 1,
                            'variant': 'text-md/semibold'
                        };
                        var21 = _closure1_slot15;
                        var20 = _closure1_slot4;
                        var5 = {};
                        var27 = var26.usernameLabelContainer;
                        var5.style = var27;
                        if (!var25) {
                            _fun72527_ip = 1361;
                            continue _fun72527
                        }
                    case 1350:
                        if (!(var2 != var24)) {
                            _fun72527_ip = 1361;
                            continue _fun72527
                        }
                    case 1354:
                        if (!(var2 != var22)) {
                            _fun72527_ip = 1498;
                            continue _fun72527
                        }
                    case 1361:
                        var25 = _closure1_slot14;
                        var24 = _closure1_slot0;
                        var27 = _closure1_slot2;
                        var22 = 24;
                        var22 = var27[var22];
                        var22 = var24.bind(var4)(var22);
                        var24 = var22.Text;
                        var22 = {};
                        var27 = undefined;
                        if (!var37) {
                            _fun72527_ip = 1400;
                            continue _fun72527
                        }
                    case 1397:
                        var27 = var35;
                    case 1400:
                        var22.gradientColors = var27;
                        var27 = 'mobile-text-heading-primary';
                        var22.color = var27;
                        var35 = var26.usernameLabel;
                        var27 = new Array(4);
                        var27[0] = var35;
                        var35 = var26.usernameLabelWithLineHeight;
                        var27[1] = var35;
                        var27[2] = var33;
                        if (!var34) {
                            _fun72527_ip = 1450;
                            continue _fun72527
                        }
                    case 1446:
                        var34 = var2 != var36;
                    case 1450:
                        if (!var34) {
                            _fun72527_ip = 1463;
                            continue _fun72527
                        }
                    case 1453:
                        var35 = {};
                        var35.fontFamily = var36;
                        var34 = var35;
                    case 1463:
                        var27[3] = var34;
                        var22.style = var27;
                        var48 = var22;
                        var47 = var30;
                        var27 = copyDataProperties(var48, var47);
                        var27 = 'children';
                        var22[var27] = var31;
                        var24 = var25.bind(var4)(var24, var22);
                        _fun72527_ip = 1587;
                        continue _fun72527;
                    case 1498:
                        var27 = _closure1_slot14;
                        var25 = _closure1_slot1;
                        var34 = _closure1_slot2;
                        var22 = 47;
                        var22 = var34[var22];
                        var25 = var25.bind(var4)(var22);
                        var22 = {};
                        var34 = var32.id;
                        var22.userId = var34;
                        var22.userName = var31;
                        var34 = var26.usernameLabel;
                        var31 = new Array(2);
                        var31[0] = var34;
                        var31[1] = var33;
                        var22.style = var31;
                        var31 = 'mobile-text-heading-primary';
                        var22.defaultColor = var31;
                        var48 = var22;
                        var47 = var30;
                        var30 = copyDataProperties(var48, var47);
                        var24 = var27.bind(var4)(var25, var22);
                    case 1587:
                        var22 = new Array(3);
                        var22[0] = var24;
                        var22[1] = var23;
                        var23 = var32.bot;
                        var27 = _closure1_slot14;
                        var25 = _closure1_slot1;
                        var33 = _closure1_slot2;
                        if (var23) {
                            _fun72527_ip = 1651;
                            continue _fun72527
                        }
                    case 1620:
                        var23 = 50;
                        var23 = var33[var23];
                        var24 = var25.bind(var4)(var23);
                        var23 = {};
                        var30 = var32.id;
                        var23.userId = var30;
                        var23 = var27.bind(var4)(var24, var23);
                        _fun72527_ip = 1717;
                        continue _fun72527;
                    case 1651:
                        var24 = 48;
                        var24 = var33[var24];
                        var25 = var25.bind(var4)(var24);
                        var24 = {};
                        var30 = var32.isVerifiedBot;
                        var30 = var30.bind(var32)();
                        var24.verified = var30;
                        var31 = _closure1_slot0;
                        var30 = 49;
                        var30 = var33[var30];
                        var31 = var31.bind(var4)(var30);
                        var30 = var31.getBotTagTypeFromUser;
                        var30 = var30.bind(var31)(var32);
                        var24.type = var30;
                        var23 = var27.bind(var4)(var25, var24);
                    case 1717:
                        var22[2] = var23;
                        var5.children = var22;
                        var23 = var21.bind(var4)(var20, var5);
                        var5 = 'dot';
                        var5 = var5 !== var11;
                        if (var5) {
                            _fun72527_ip = 1756;
                            continue _fun72527
                        }
                    case 1742:
                        var11 = var2 == var29;
                        if (!var11) {
                            _fun72527_ip = 1753;
                            continue _fun72527
                        }
                    case 1749:
                        var11 = var2 == var28;
                    case 1753:
                        var5 = var11;
                    case 1756:
                        var11 = var23;
                        if (var5) {
                            _fun72527_ip = 1888;
                            continue _fun72527
                        }
                    case 1765:
                        var21 = _closure1_slot15;
                        var20 = _closure1_slot4;
                        var5 = {};
                        var22 = var26.labelContainer;
                        var5.style = var22;
                        var25 = _closure1_slot14;
                        var24 = _closure1_slot0;
                        var27 = _closure1_slot2;
                        var22 = 51;
                        var22 = var27[var22];
                        var22 = var24.bind(var4)(var22);
                        var24 = var22.RoleDot;
                        var22 = {};
                        var30 = var2 != var29;
                        var27 = null;
                        if (!var30) {
                            _fun72527_ip = 1829;
                            continue _fun72527
                        }
                    case 1826:
                        var27 = var29;
                    case 1829:
                        var22.color = var27;
                        var29 = var2 != var28;
                        var27 = null;
                        if (!var29) {
                            _fun72527_ip = 1845;
                            continue _fun72527
                        }
                    case 1842:
                        var27 = var28;
                    case 1845:
                        var22.colors = var27;
                        var26 = var26.roleDot;
                        var22.containerStyles = var26;
                        var24 = var25.bind(var4)(var24, var22);
                        var22 = new Array(2);
                        var22[0] = var24;
                        var22[1] = var23;
                        var5.children = var22;
                        var11 = var21.bind(var4)(var20, var5);
                    case 1888:
                        var5 = {};
                        var48 = var5;
                        var47 = var15;
                        var15 = copyDataProperties(var48, var47);
                        var15 = 'disabled';
                        var5[var15] = var19;
                        var15 = 'icon';
                        var5[var15] = var18;
                        var15 = 'onPress';
                        var5[var15] = var17;
                        var15 = 'onLongPress';
                        var5[var15] = var16;
                        if (!(var2 != var13)) {
                            _fun72527_ip = 1943;
                            continue _fun72527
                        }
                    case 1940:
                        var14 = var13;
                    case 1943:
                        var13 = 'accessibilityActions';
                        var5[var13] = var14;
                        if (!(var2 != var3)) {
                            _fun72527_ip = 1959;
                            continue _fun72527
                        }
                    case 1956:
                        var12 = var3;
                    case 1959:
                        var3 = 'onAccessibilityAction';
                        var5[var3] = var12;
                        var3 = 'label';
                        var5[var3] = var11;
                        var3 = 'subLabel';
                        var5[var3] = var8;
                        var3 = _closure1_slot11;
                        var3 = var3.TOGGLE;
                        if (!(var7 !== var3)) {
                            _fun72527_ip = 2137;
                            continue _fun72527
                        }
                    case 2003:
                        if (!(var2 != var9)) {
                            _fun72527_ip = 2010;
                            continue _fun72527
                        }
                    case 2007:
                        if (var0) {
                            _fun72527_ip = 2069;
                            continue _fun72527
                        }
                    case 2010:
                        var3 = _closure1_slot14;
                        var2 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var0 = 54;
                        var0 = var7[var0];
                        var0 = var2.bind(var4)(var0);
                        var2 = var0.TableRow;
                        var0 = {};
                        var48 = var0;
                        var47 = var5;
                        var7 = copyDataProperties(var48, var47);
                        var7 = 'trailing';
                        var0[var7] = var10;
                        var0 = var3.bind(var4)(var2, var0);
                        _fun72527_ip = 2135;
                        continue _fun72527;
                    case 2069:
                        var7 = _closure1_slot14;
                        var3 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var2 = 53;
                        var2 = var8[var2];
                        var2 = var3.bind(var4)(var2);
                        var3 = var2.UserNameplateRow;
                        var2 = {};
                        var48 = var2;
                        var47 = var5;
                        var8 = copyDataProperties(var48, var47);
                        var8 = 'trailing';
                        var2[var8] = var10;
                        var8 = 'nameplate';
                        var2[var8] = var9;
                        var0 = var7.bind(var4)(var3, var2);
                    case 2135:
                        _fun72527_ip = 2194;
                        continue _fun72527;
                    case 2137:
                        var3 = _closure1_slot14;
                        var2 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var1 = 52;
                        var1 = var7[var1];
                        var1 = var2.bind(var4)(var1);
                        var2 = var1.TableCheckboxRow;
                        var1 = {};
                        var48 = var1;
                        var47 = var5;
                        var5 = copyDataProperties(var48, var47);
                        var5 = 'checked';
                        var1[var5] = var6;
                        var0 = var3.bind(var4)(var2, var1);
                    case 2194:
                        return var0;
                }
            };
            var1 = var3.bind(var6)(var1);
            var3 = 55;
            var3 = var5[var3];
            var5 = var4.bind(var0)(var3);
            var4 = var5.fileFinishedImporting;
            var3 = 'modules/main_tabs_v2/native/shared_components/user_list/UserRow.tsx';
            var3 = var4.bind(var5)(var3);
            var2.default = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1298, 3413, 9040, 1372, 3569, 3059, 8842, 660, 33, 1297, 671, 479, 3904, 44, 8961, 8966, 3106, 8967, 7981, 9041, 566, 4045, 3900, 3195, 7722, 5688, 3921, 1234, 9048, 3223, 3221, 4043, 1608, 7745, 4801, 7312, 1307, 9049, 5414, 9050, 7640, 4752, 6639, 3943, 6882, 6880, 5729, 9052, 7338, 8153, 8732, 9053, 4861, 2]);