// modules/instant_invite/native/components/InstantInviteActionSheet.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var5;
    var0 = function() {
        _fun67408: for (var _fun67408_ip = 0;;) switch (_fun67408_ip) {
            case 0:
                var0 = _closure1_slot16;
                var3 = undefined;
                var9 = var0.bind(var3)();
                var5 = new Array(0);
                var1 = 12;
                var0 = 10;
                var2 = 0;
            case 25:
                var7 = var5.push;
                var10 = _closure1_slot13;
                var8 = _closure1_slot1;
                var4 = _closure1_slot2;
                var4 = var4[var1];
                var8 = var8.bind(var3)(var4);
                var4 = {};
                var4.row = var2;
                var4 = var10.bind(var3)(var8, var4, var2);
                var4 = var7.bind(var5)(var4);
                var2 = var2 + 1;
                if (var2 < var0) {
                    _fun67408_ip = 25;
                    continue _fun67408
                }
            case 77:
                var2 = _closure1_slot15;
                var1 = _closure1_slot14;
                var0 = {};
                var8 = _closure1_slot13;
                var7 = _closure1_slot5;
                var4 = {};
                var10 = var9.placeholderHeader;
                var4.style = var10;
                var7 = var8.bind(var3)(var7, var4);
                var4 = new Array(3);
                var4[0] = var7;
                var8 = _closure1_slot13;
                var7 = _closure1_slot5;
                var6 = {};
                var9 = var9.placeholderLabel;
                var6.style = var9;
                var6 = var8.bind(var3)(var7, var6);
                var4[1] = var6;
                var4[2] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot17 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var9 = 0;
    var3 = var5[var9];
    var0 = undefined;
    var3 = var11.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var12 = 1;
    var6 = var5[var12];
    var3 = arg3;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.View;
    var _closure1_slot5 = var6;
    var3 = var3.ScrollView;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.InviteTargetTypes;
    var _closure1_slot11 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.Permissions;
    var _closure1_slot12 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot13 = var6;
    var6 = var3.Fragment;
    var _closure1_slot14 = var6;
    var3 = var3.jsxs;
    var _closure1_slot15 = var3;
    var3 = 10;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'height': 16,
        'width': '80%',
        'margin': 16,
        'marginBottom': 8
    };
    var10 = 11;
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.radii;
    var13 = var13.sm;
    var8.borderRadius = var13;
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_MOD_MUTED;
    var8.backgroundColor = var13;
    var3.placeholderHeader = var8;
    var8 = {
        'height': 16,
        'width': '40%',
        'margin': 16
    };
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.radii;
    var13 = var13.sm;
    var8.borderRadius = var13;
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_MOD_MUTED;
    var8.backgroundColor = var13;
    var3.placeholderLabel = var8;
    var8 = {};
    var13 = 'transparent';
    var8.backgroundColor = var13;
    var3.errorEmptyState = var8;
    var8 = {};
    var8.borderTopWidth = var12;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BORDER_SUBTLE;
    var8.borderColor = var12;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_8;
    var8.marginTop = var12;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_8;
    var8.paddingVertical = var12;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_12;
    var8.paddingHorizontal = var12;
    var12 = 'column';
    var8.flexDirection = var12;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_12;
    var8.gap = var12;
    var3.searchAndShareContainer = var8;
    var8 = {};
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_8;
    var8.paddingBottom = var12;
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_4;
    var8.paddingHorizontal = var10;
    var3.inviteAgeText = var8;
    var8 = {};
    var8.paddingVertical = var9;
    var3.shareApps = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot16 = var3;
    var3 = 37;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/instant_invite/native/components/InstantInviteActionSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun67409: for (var _fun67409_ip = 0;;) switch (_fun67409_ip) {
            case 0:
                var0 = arg0;
                var37 = var0.channel;
                var _closure2_slot0 = var37;
                var26 = var0.source;
                var _closure2_slot1 = var26;
                var32 = var0.vanityURLCode;
                var _closure2_slot2 = var32;
                var2 = var0.guildScheduledEventId;
                var _closure2_slot3 = var2;
                var35 = var0.targetApplicationId;
                var36 = var0.code;
                var _closure2_slot4 = var36;
                var3 = undefined;
                var _closure2_slot6 = var3;
                var _closure2_slot7 = var3;
                var0 = _closure1_slot16;
                var13 = var0.bind(var3)();
                var5 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 13;
                var0 = var2[var0];
                var0 = var5.bind(var3)(var0);
                var0 = var0.bind(var3)();
                var16 = var0.bottom;
                var0 = 14;
                var4 = var2[var0];
                var6 = var5.bind(var3)(var4);
                var4 = 15;
                var4 = var2[var4];
                var4 = var5.bind(var3)(var4);
                var4 = var4.INSTANT_INVITE_MODAL;
                var4 = var6.bind(var3)(var4);
                var4 = var4.analyticsLocations;
                var _closure2_slot5 = var4;
                var15 = 16;
                var2 = var2[var15];
                var5 = var5.bind(var3)(var2);
                var25 = null;
                if (!(var25 == var35)) {
                    _fun67409_ip = 177;
                    continue _fun67409
                }
            case 171:
                var2 = new Array(0);
                _fun67409_ip = 188;
                continue _fun67409;
            case 177:
                var6 = new Array(1);
                var6[0] = var35;
                var2 = var6;
            case 188:
                var5 = var5.bind(var3)(var2);
                var2 = _closure1_slot3;
                var6 = 1;
                var5 = var2.bind(var3)(var5, var6);
                var2 = 0;
                var38 = var5[var2];
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var7 = 17;
                var5 = var9[var7];
                var17 = var8.bind(var3)(var5);
                var14 = var17.useStateFromStores;
                var5 = _closure1_slot10;
                var11 = new Array(3);
                var11[0] = var5;
                var5 = _closure1_slot8;
                var11[1] = var5;
                var10 = _closure1_slot7;
                var11[2] = var10;
                var10 = function() { // Environment: var1
                    _fun67410: for (var _fun67410_ip = 0;;) switch (_fun67410_ip) {
                        case 0:
                            var1 = _closure2_slot4;
                            var4 = null;
                            if (!(var4 == var1)) {
                                _fun67410_ip = 234;
                                continue _fun67410
                            }
                        case 16:
                            var2 = _closure2_slot0;
                            var1 = var2.isGuildStageVoice;
                            var1 = var1.bind(var2)();
                            if (!var1) {
                                _fun67410_ip = 120;
                                continue _fun67410
                            }
                        case 33:
                            var6 = _closure1_slot10;
                            var5 = var6.can;
                            var2 = _closure1_slot12;
                            var3 = var2.CREATE_INSTANT_INVITE;
                            var2 = _closure2_slot0;
                            var2 = var5.bind(var6)(var3, var2);
                            if (var2) {
                                _fun67410_ip = 120;
                                continue _fun67410
                            }
                        case 69:
                            var3 = _closure1_slot7;
                            var2 = var3.getStageInstanceByChannel;
                            var1 = _closure2_slot0;
                            var1 = var1.id;
                            var1 = var2.bind(var3)(var1);
                            var3 = var4 == var1;
                            var2 = undefined;
                            if (var3) {
                                _fun67410_ip = 108;
                                continue _fun67410
                            }
                        case 102:
                            var2 = var1.invite_code;
                        case 108:
                            if (!(var4 != var2)) {
                                _fun67410_ip = 120;
                                continue _fun67410
                            }
                        case 112:
                            var1 = var1.invite_code;
                            return var1;
                        case 120:
                            var1 = _closure2_slot2;
                            if (!(var4 == var1)) {
                                _fun67410_ip = 228;
                                continue _fun67410
                            }
                        case 128:
                            var2 = _closure1_slot8;
                            var1 = var2.getInvite;
                            var6 = var1.bind(var2)();
                            var2 = var4 != var6;
                            var5 = undefined;
                            var1 = undefined;
                            if (!var2) {
                                _fun67410_ip = 226;
                                continue _fun67410
                            }
                        case 156:
                            var2 = _closure2_slot3;
                            if (!(var4 == var2)) {
                                _fun67410_ip = 171;
                                continue _fun67410
                            }
                        case 164:
                            var2 = var6.code;
                            _fun67410_ip = 223;
                            continue _fun67410;
                        case 171:
                            var4 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var3 = 18;
                            var3 = var7[var3];
                            var5 = var4.bind(var5)(var3);
                            var4 = var5.generateInviteKeyFromExtraData;
                            var3 = {};
                            var6 = var6.code;
                            var3.baseCode = var6;
                            var6 = _closure2_slot3;
                            var3.guildScheduledEventId = var6;
                            var2 = var4.bind(var5)(var3);
                        case 223:
                            var1 = var2;
                        case 226:
                            return var1;
                        case 228:
                            var1 = _closure2_slot2;
                            return var1;
                        case 234:
                            var0 = _closure2_slot4;
                            return var0;
                    }
                };
                var27 = var14.bind(var17)(var11, var10);
                _closure2_slot6 = var27;
                var7 = var9[var7];
                var9 = var8.bind(var3)(var7);
                var8 = var9.useStateFromStores;
                var7 = new Array(1);
                var7[0] = var5;
                var5 = function() { // Environment: var1
                    var1 = _closure1_slot8;
                    var0 = var1.getError;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var11 = var8.bind(var9)(var7, var5);
                var5 = var25 != var27;
                var20 = null;
                if (!var5) {
                    _fun67409_ip = 351;
                    continue _fun67409
                }
            case 326:
                var7 = _closure1_slot1;
                var8 = _closure1_slot2;
                var5 = 19;
                var5 = var8[var5];
                var5 = var7.bind(var3)(var5);
                var20 = var5.bind(var3)(var27);
            case 351:
                var5 = var25 != var20;
                var7 = '';
                if (!var5) {
                    _fun67409_ip = 393;
                    continue _fun67409
                }
            case 362:
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var5 = 20;
                var5 = var9[var5];
                var8 = var8.bind(var3)(var5);
                var5 = var8.getShareMessage;
                var7 = var5.bind(var8)(var20);
            case 393:
                _closure2_slot7 = var7;
                var8 = var25 != var35;
                var5 = null;
                if (!var8) {
                    _fun67409_ip = 416;
                    continue _fun67409
                }
            case 406:
                var8 = _closure1_slot11;
                var5 = var8.EMBEDDED_APPLICATION;
            case 416:
                var9 = _closure1_slot4;
                var14 = var9.useCallback;
                var10 = new Array(2);
                var10[0] = var37;
                var10[1] = var4;
                var8 = function(arg0) { // Environment: var1
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var0 = 21;
                    var1 = var3[var0];
                    var0 = undefined;
                    var4 = var2.bind(var0)(var1);
                    var1 = var4.hideActionSheet;
                    var1 = var1.bind(var4)();
                    var1 = 22;
                    var1 = var3[var1];
                    var2 = var2.bind(var0)(var1);
                    var1 = {};
                    var3 = arg0;
                    var1.userId = var3;
                    var4 = _closure2_slot0;
                    var4 = var4.id;
                    var1.channelId = var4;
                    var3 = _closure2_slot5;
                    var1.sourceAnalyticsLocations = var3;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var24 = var14.bind(var9)(var8, var10);
                var14 = var9.useCallback;
                var10 = new Array(4);
                var10[0] = var37;
                var10[1] = var27;
                var10[2] = var7;
                var10[3] = var26;
                var8 = function(arg0) { // Environment: var1
                    _fun67413: for (var _fun67413_ip = 0;;) switch (_fun67413_ip) {
                        case 0:
                            var2 = _closure2_slot6;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun67413_ip = 126;
                                continue _fun67413
                            }
                        case 13:
                            var2 = {};
                            var1 = _closure2_slot0;
                            var2.channel = var1;
                            var3 = _closure2_slot6;
                            var2.code = var3;
                            var3 = _closure2_slot7;
                            var2.message = var3;
                            var0 = _closure2_slot1;
                            var2.location = var0;
                            var0 = arg0;
                            var5 = undefined;
                            var0 = var0.bind(var5)(var2);
                            var4 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var0 = 23;
                            var0 = var6[var0];
                            var3 = var4.bind(var5)(var0);
                            var2 = var3.setHubProgressActionComplete;
                            var0 = var1.getGuildId;
                            var1 = var0.bind(var1)();
                            var0 = 24;
                            var0 = var6[var0];
                            var0 = var4.bind(var5)(var0);
                            var0 = var0.HubProgressStep;
                            var0 = var0.INVITE_USER;
                            var0 = var2.bind(var3)(var1, var0);
                        case 126:
                            var0 = undefined;
                            return var0;
                    }
                };
                var30 = var14.bind(var9)(var8, var10);
                var14 = var9.useCallback;
                var10 = new Array(1);
                var10[0] = var37;
                var8 = function() { // Environment: var1
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var0 = 23;
                    var1 = var6[var0];
                    var0 = undefined;
                    var4 = var5.bind(var0)(var1);
                    var3 = var4.setHubProgressActionComplete;
                    var2 = _closure2_slot0;
                    var1 = var2.getGuildId;
                    var2 = var1.bind(var2)();
                    var1 = 24;
                    var1 = var6[var1];
                    var1 = var5.bind(var0)(var1);
                    var1 = var1.HubProgressStep;
                    var1 = var1.INVITE_USER;
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
                };
                var23 = var14.bind(var9)(var8, var10);
                var14 = var9.useCallback;
                var10 = new Array(3);
                var10[0] = var27;
                var10[1] = var37;
                var10[2] = var26;
                var8 = function() { // Environment: var1
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 20;
                    var1 = var1[var0];
                    var0 = undefined;
                    var4 = var2.bind(var0)(var1);
                    var3 = var4.handleCopy;
                    var2 = _closure2_slot6;
                    var1 = _closure2_slot0;
                    var0 = _closure2_slot1;
                    var0 = var3.bind(var4)(var2, var1, var0);
                    return var0;
                };
                var19 = var14.bind(var9)(var8, var10);
                var10 = var9.useCallback;
                var8 = new Array(4);
                var8[0] = var27;
                var8[1] = var37;
                var8[2] = var7;
                var8[3] = var26;
                var7 = function() { // Environment: var1
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 20;
                    var1 = var1[var0];
                    var0 = undefined;
                    var5 = var2.bind(var0)(var1);
                    var4 = var5.handleOpenShareSheet;
                    var9 = _closure2_slot6;
                    var8 = _closure2_slot0;
                    var7 = _closure2_slot7;
                    var6 = _closure2_slot1;
                    var10 = var5;
                    var0 = var10[var4](var9, var8, var7, var6, var5);
                    return var0;
                };
                var18 = var10.bind(var9)(var7, var8);
                var8 = var9.useCallback;
                var7 = new Array(1);
                var7[0] = var37;
                var1 = function() { // Environment: var1
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 20;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.handlePressSettings;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var17 = var8.bind(var9)(var1, var7);
                var7 = _closure1_slot1;
                var8 = _closure1_slot2;
                var1 = 25;
                var1 = var8[var1];
                var1 = var7.bind(var3)(var1);
                var48 = undefined;
                var47 = var37;
                var46 = var26;
                var45 = var5;
                var44 = var35;
                var1 = var48[var1](var47, var46, var45, var44, var43);
                var28 = var1.rows;
                var9 = var1.isFetchingRows;
                var8 = var25 == var27;
                if (var8) {
                    _fun67409_ip = 687;
                    continue _fun67409
                }
            case 669:
                var1 = var28.length;
                var1 = var2 === var1;
                if (!var1) {
                    _fun67409_ip = 684;
                    continue _fun67409
                }
            case 681:
                var1 = var9;
            case 684:
                var8 = var1;
            case 687:
                var7 = _closure1_slot4;
                var5 = var7.useState;
                var1 = var25 != var27;
                if (!var1) {
                    _fun67409_ip = 712;
                    continue _fun67409
                }
            case 703:
                var10 = var28.length;
                var1 = var2 === var10;
            case 712:
                if (!var1) {
                    _fun67409_ip = 718;
                    continue _fun67409
                }
            case 715:
                var1 = !var9;
            case 718:
                var5 = var5.bind(var7)(var1);
                var1 = _closure1_slot3;
                var1 = var1.bind(var3)(var5, var6);
                var7 = var1[var2];
                var2 = _closure1_slot13;
                var5 = _closure1_slot0;
                var9 = _closure1_slot2;
                var0 = var9[var0];
                var0 = var5.bind(var3)(var0);
                var1 = var0.AnalyticsLocationProvider;
                var0 = {};
                var0.value = var4;
                var6 = _closure1_slot13;
                var4 = 26;
                var4 = var9[var4];
                var4 = var5.bind(var3)(var4);
                var5 = var4.BottomSheet;
                var4 = {
                    'showGradient': null,
                    'scrollable': true,
                    'startExpanded': true
                };
                var9 = var25 != var11;
                if (var9) {
                    _fun67409_ip = 816;
                    continue _fun67409
                }
            case 813:
                var9 = !var8;
            case 816:
                if (var9) {
                    _fun67409_ip = 822;
                    continue _fun67409
                }
            case 819:
                var9 = !var7;
            case 822:
                var4.showGradient = var9;
                var14 = _closure1_slot13;
                var10 = _closure1_slot0;
                var21 = _closure1_slot2;
                var9 = 27;
                var9 = var21[var9];
                var9 = var10.bind(var3)(var9);
                var10 = var9.BottomSheetTitleHeader;
                var9 = {};
                if (!(var25 == var35)) {
                    _fun67409_ip = 924;
                    continue _fun67409
                }
            case 864:
                var31 = _closure1_slot0;
                var33 = _closure1_slot2;
                var21 = 28;
                var22 = var33[var21];
                var22 = var31.bind(var3)(var22);
                var29 = var22.intl;
                var22 = var29.string;
                var21 = var33[var21];
                var21 = var31.bind(var3)(var21);
                var21 = var21.t;
                var21 = var21["f1+QIK"];
                var21 = var22.bind(var29)(var21);
                _fun67409_ip = 1058;
                continue _fun67409;
            case 924:
                if (!(var25 == var38)) {
                    _fun67409_ip = 985;
                    continue _fun67409
                }
            case 928:
                var33 = _closure1_slot0;
                var34 = _closure1_slot2;
                var22 = 28;
                var29 = var34[var22];
                var29 = var33.bind(var3)(var29);
                var31 = var29.intl;
                var29 = var31.string;
                var22 = var34[var22];
                var22 = var33.bind(var3)(var22);
                var22 = var22.t;
                var22 = var22["OzOM/q"];
                var22 = var29.bind(var31)(var22);
                _fun67409_ip = 1055;
                continue _fun67409;
            case 985:
                var31 = _closure1_slot0;
                var39 = _closure1_slot2;
                var29 = 28;
                var33 = var39[var29];
                var33 = var31.bind(var3)(var33);
                var34 = var33.intl;
                var33 = var34.formatToPlainString;
                var29 = var39[var29];
                var29 = var31.bind(var3)(var29);
                var29 = var29.t;
                var31 = var29.ZdK3dW;
                var29 = {};
                var38 = var38.name;
                var29.applicationName = var38;
                var22 = var33.bind(var34)(var31, var29);
            case 1055:
                var21 = var22;
            case 1058:
                var9.title = var21;
                var9 = var14.bind(var3)(var10, var9);
                var4.header = var9;
                if (!(var25 == var11)) {
                    _fun67409_ip = 1717;
                    continue _fun67409
                }
            case 1079:
                if (var8) {
                    _fun67409_ip = 1699;
                    continue _fun67409
                }
            case 1085:
                if (var7) {
                    _fun67409_ip = 1609;
                    continue _fun67409
                }
            case 1091:
                var9 = _closure1_slot15;
                var8 = _closure1_slot14;
                var7 = {};
                var14 = _closure1_slot5;
                var10 = {};
                var29 = _closure1_slot13;
                var22 = _closure1_slot1;
                var40 = _closure1_slot2;
                var21 = 32;
                var21 = var40[var21];
                var22 = var22.bind(var3)(var21);
                var21 = {};
                var31 = var13.shareApps;
                var21.contentContainerStyle = var31;
                var21.onItemPressed = var30;
                var22 = var29.bind(var3)(var22, var21);
                var21 = new Array(2);
                var21[0] = var22;
                var30 = _closure1_slot15;
                var29 = _closure1_slot5;
                var22 = {};
                var31 = var13.searchAndShareContainer;
                var22.style = var31;
                var34 = _closure1_slot13;
                var39 = _closure1_slot0;
                var31 = 33;
                var31 = var40[var31];
                var31 = var39.bind(var3)(var31);
                var33 = var31.SearchField;
                var31 = {
                    'size': 'md',
                    'isRound': true
                };
                var38 = 34;
                var38 = var40[var38];
                var38 = var39.bind(var3)(var38);
                var38 = var38.searchInviteSuggestions;
                var31.onChange = var38;
                if (!(var25 == var35)) {
                    _fun67409_ip = 1352;
                    continue _fun67409
                }
            case 1250:
                var38 = _closure1_slot0;
                var41 = _closure1_slot2;
                var35 = 28;
                var39 = var41[var35];
                var39 = var38.bind(var3)(var39);
                var40 = var39.intl;
                var39 = var40.formatToPlainString;
                var35 = var41[var35];
                var35 = var38.bind(var3)(var35);
                var35 = var35.t;
                var38 = var35["1UgGdm"];
                var35 = {};
                var43 = _closure1_slot9;
                var42 = var43.getGuild;
                var41 = var37.guild_id;
                var42 = var42.bind(var43)(var41);
                var43 = var25 == var42;
                var41 = undefined;
                if (var43) {
                    _fun67409_ip = 1337;
                    continue _fun67409
                }
            case 1332:
                var41 = var42.name;
            case 1337:
                var35.groupname = var41;
                var35 = var39.bind(var40)(var38, var35);
                _fun67409_ip = 1407;
                continue _fun67409;
            case 1352:
                var41 = _closure1_slot0;
                var42 = _closure1_slot2;
                var38 = 28;
                var39 = var42[var38];
                var39 = var41.bind(var3)(var39);
                var40 = var39.intl;
                var39 = var40.string;
                var38 = var42[var38];
                var38 = var41.bind(var3)(var38);
                var38 = var38.t;
                var38 = var38.iI1gMg;
                var35 = var39.bind(var40)(var38);
            case 1407:
                var31.placeholder = var35;
                var33 = var34.bind(var3)(var33, var31);
                var31 = new Array(2);
                var31[0] = var33;
                var33 = var25 != var32;
                var32 = !var33;
                if (var33) {
                    _fun67409_ip = 1491;
                    continue _fun67409
                }
            case 1436:
                var35 = _closure1_slot13;
                var34 = _closure1_slot1;
                var38 = _closure1_slot2;
                var33 = 35;
                var33 = var38[var33];
                var34 = var34.bind(var3)(var33);
                var33 = {};
                var38 = var13.inviteAgeText;
                var33.style = var38;
                var33.channel = var37;
                var36 = var25 == var36;
                var33.canEditInvite = var36;
                var32 = var35.bind(var3)(var34, var33);
            case 1491:
                var31[1] = var32;
                var22.children = var31;
                var22 = var30.bind(var3)(var29, var22);
                var21[1] = var22;
                var10.children = var21;
                var14 = var9.bind(var3)(var14, var10);
                var10 = new Array(2);
                var10[0] = var14;
                var22 = _closure1_slot13;
                var21 = _closure1_slot1;
                var29 = _closure1_slot2;
                var14 = 36;
                var14 = var29[var14];
                var21 = var21.bind(var3)(var14);
                var14 = {};
                var14.data = var28;
                var14.code = var27;
                var27 = var25 != var26;
                var25 = undefined;
                if (!var27) {
                    _fun67409_ip = 1573;
                    continue _fun67409
                }
            case 1570:
                var25 = var26;
            case 1573:
                var14.source = var25;
                var14.onPressAvatar = var24;
                var14.onInviteSent = var23;
                var14 = var22.bind(var3)(var21, var14);
                var10[1] = var14;
                var7.children = var10;
                var7 = var9.bind(var3)(var8, var7);
                _fun67409_ip = 1697;
                continue _fun67409;
            case 1609:
                var10 = _closure1_slot13;
                var9 = _closure1_slot6;
                var8 = {};
                var14 = {};
                var15 = var16 + var15;
                var14.paddingBottom = var15;
                var8.contentContainerStyle = var14;
                var16 = _closure1_slot13;
                var15 = _closure1_slot1;
                var21 = _closure1_slot2;
                var14 = 31;
                var14 = var21[var14];
                var15 = var15.bind(var3)(var14);
                var14 = {};
                var14.link = var20;
                var14.onCopy = var19;
                var14.onShare = var18;
                var14.onPressSettings = var17;
                var14 = var16.bind(var3)(var15, var14);
                var8.children = var14;
                var7 = var10.bind(var3)(var9, var8);
            case 1697:
                _fun67409_ip = 1715;
                continue _fun67409;
            case 1699:
                var10 = _closure1_slot13;
                var9 = _closure1_slot17;
                var8 = {};
                var7 = var10.bind(var3)(var9, var8);
            case 1715:
                _fun67409_ip = 1790;
                continue _fun67409;
            case 1717:
                var10 = _closure1_slot13;
                var9 = _closure1_slot1;
                var14 = _closure1_slot2;
                var8 = 29;
                var8 = var14[var8];
                var9 = var9.bind(var3)(var8);
                var8 = {};
                var13 = var13.errorEmptyState;
                var8.style = var13;
                var13 = _closure1_slot0;
                var12 = 30;
                var12 = var14[var12];
                var12 = var13.bind(var3)(var12);
                var12 = var12.AppCrash;
                var8.Illustration = var12;
                var8.title = var11;
                var7 = var10.bind(var3)(var9, var8);
            case 1790:
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 1377, 8324, 1410, 3082, 3326, 660, 33, 1297, 671, 8337, 1568, 5721, 5574, 6874, 566, 3315, 6544, 8323, 3269, 7345, 8338, 1311, 8340, 4926, 5206, 1234, 7353, 8345, 8349, 8352, 7004, 8342, 8386, 8387, 2]);