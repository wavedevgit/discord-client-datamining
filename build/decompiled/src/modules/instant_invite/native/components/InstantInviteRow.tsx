// modules/instant_invite/native/components/InstantInviteRow.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var5;
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
    var3 = metroImportAll;
    var0 = undefined;
    var6 = var3.bind(var0)(var6);
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.setSendState;
    var _closure1_slot9 = var7;
    var3 = var3.useInstantInviteSendStates;
    var _closure1_slot10 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.InviteSendStates;
    var _closure1_slot11 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot12 = var3;
    var3 = 10;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {
        'width': 32,
        'height': 32,
        'borderRadius': null,
        'backgroundColor': null,
        'alignItems': 'center',
        'justifyContent': 'center',
        'overflow': 'hidden',
        'marginTop': 0,
        'marginRight': 10,
        'borderColor': null,
        'borderStyle': 'solid',
        'borderWidth': 2
    };
    var10 = 11;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.lg;
    var9.borderRadius = var12;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_BASE_LOW;
    var9.backgroundColor = var12;
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.BORDER_MUTED;
    var9.borderColor = var10;
    var3.acronym = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot13 = var3;
    var3 = var6.memo;
    var1 = function(arg0) { // Environment: var1
        _fun67535: for (var _fun67535_ip = 0;;) switch (_fun67535_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.row;
                var _closure2_slot0 = var3;
                var5 = var0.code;
                var _closure2_slot1 = var5;
                var2 = var0.onPressAvatar;
                var _closure2_slot2 = var2;
                var4 = var0.onInviteSent;
                var _closure2_slot3 = var4;
                var16 = var0.start;
                var15 = var0.end;
                var0 = var0.source;
                var _closure2_slot4 = var0;
                var0 = _closure1_slot13;
                var4 = undefined;
                var12 = var0.bind(var4)();
                var0 = var3.item;
                var17 = var0.id;
                var _closure2_slot5 = var17;
                var6 = _closure1_slot0;
                var11 = _closure1_slot2;
                var0 = 12;
                var7 = var11[var0];
                var14 = var6.bind(var4)(var7);
                var13 = var14.useStateFromStores;
                var7 = _closure1_slot5;
                var10 = new Array(1);
                var10[0] = var7;
                var9 = function() { // Environment: var1
                    var1 = _closure1_slot5;
                    var0 = var1.isSubmitting;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var10 = var13.bind(var14)(var10, var9);
                var9 = var11[var0];
                var14 = var6.bind(var4)(var9);
                var13 = var14.useStateFromStores;
                var9 = new Array(1);
                var9[0] = var7;
                var7 = function() { // Environment: var1
                    var1 = _closure1_slot5;
                    var0 = var1.getError;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var7 = var13.bind(var14)(var9, var7);
                var13 = _closure1_slot10;
                var9 = function(arg0) { // Environment: var1
                    _fun67538: for (var _fun67538_ip = 0;;) switch (_fun67538_ip) {
                        case 0:
                            var0 = _closure2_slot1;
                            var1 = null;
                            var3 = var1 != var0;
                            var0 = null;
                            if (!var3) {
                                _fun67538_ip = 49;
                                continue _fun67538
                            }
                        case 18:
                            var4 = _closure2_slot1;
                            var3 = arg0;
                            var3 = var3[var4];
                            var4 = var1 == var3;
                            var1 = undefined;
                            if (var4) {
                                _fun67538_ip = 46;
                                continue _fun67538
                            }
                        case 38:
                            var2 = _closure2_slot5;
                            var1 = var3[var2];
                        case 46:
                            var0 = var1;
                        case 49:
                            return var0;
                    }
                };
                var9 = var13.bind(var4)(var9);
                var0 = var11[var0];
                var14 = var6.bind(var4)(var0);
                var13 = var14.useStateFromStores;
                var0 = _closure1_slot4;
                var6 = new Array(1);
                var6[0] = var0;
                var0 = function() { // Environment: var1
                    var2 = _closure1_slot4;
                    var1 = var2.getChannel;
                    var0 = _closure2_slot5;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var28 = var13.bind(var14)(var6, var0);
                var6 = _closure1_slot1;
                var0 = 13;
                var0 = var11[var0];
                var0 = var6.bind(var4)(var0);
                var18 = var0.bind(var4)(var28);
                var0 = null;
                if (!(var0 != var5)) {
                    _fun67535_ip = 1470;
                    continue _fun67535
                }
            case 260:
                var11 = function() {
                    _fun67540: for (var _fun67540_ip = 0;;) switch (_fun67540_ip) {
                        case 0:
                            var4 = function arg0() {
                                _fun67541: for (var _fun67541_ip = 0;;) switch (_fun67541_ip) {
                                    case 0:
                                        var2 = arg0;
                                        var6 = _closure1_slot9;
                                        var5 = _closure2_slot1;
                                        var4 = _closure2_slot5;
                                        var0 = _closure1_slot11;
                                        if (var2) {
                                            _fun67541_ip = 36;
                                            continue _fun67541
                                        }
                                    case 28:
                                        var3 = var0.ERROR;
                                        _fun67541_ip = 42;
                                        continue _fun67541;
                                    case 36:
                                        var3 = var0.SENT;
                                    case 42:
                                        var0 = undefined;
                                        var3 = var6.bind(var0)(var5, var4, var3);
                                        if (!var2) {
                                            _fun67541_ip = 72;
                                            continue _fun67541
                                        }
                                    case 54:
                                        var3 = _closure2_slot3;
                                        var2 = null;
                                        if (!(var2 != var3)) {
                                            _fun67541_ip = 72;
                                            continue _fun67541
                                        }
                                    case 64:
                                        var1 = _closure2_slot3;
                                        var1 = var1.bind(var0)();
                                    case 72:
                                        return var0;
                                }
                            };
                            var5 = _closure1_slot9;
                            var3 = _closure2_slot1;
                            var2 = _closure2_slot5;
                            var0 = _closure1_slot11;
                            var1 = var0.SENDING;
                            var0 = undefined;
                            var1 = var5.bind(var0)(var3, var2, var1);
                            var1 = _closure2_slot0;
                            var2 = var1.type;
                            var3 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var5 = 14;
                            var1 = var1[var5];
                            var1 = var3.bind(var0)(var1);
                            var1 = var1.RowTypes;
                            var1 = var1.FRIEND;
                            if (!(var1 !== var2)) {
                                _fun67540_ip = 524;
                                continue _fun67540
                            }
                        case 94:
                            var3 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var1 = var1[var5];
                            var1 = var3.bind(var0)(var1);
                            var1 = var1.RowTypes;
                            var1 = var1.DM;
                            if (!(var1 !== var2)) {
                                _fun67540_ip = 524;
                                continue _fun67540
                            }
                        case 130:
                            var3 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var1 = var1[var5];
                            var1 = var3.bind(var0)(var1);
                            var1 = var1.RowTypes;
                            var1 = var1.GROUP_DM;
                            if (!(var1 !== var2)) {
                                _fun67540_ip = 363;
                                continue _fun67540
                            }
                        case 166:
                            var3 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var1 = var1[var5];
                            var1 = var3.bind(var0)(var1);
                            var1 = var1.RowTypes;
                            var1 = var1.CHANNEL;
                            if (!(var1 === var2)) {
                                _fun67540_ip = 681;
                                continue _fun67540
                            }
                        case 202:
                            var2 = _closure2_slot1;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun67540_ip = 681;
                                continue _fun67540
                            }
                        case 215:
                            var2 = _closure1_slot1;
                            var9 = _closure1_slot2;
                            var5 = 15;
                            var1 = var9[var5];
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.enqueue;
                            var1 = {};
                            var8 = _closure2_slot1;
                            var1.inviteKey = var8;
                            var8 = _closure1_slot0;
                            var5 = var9[var5];
                            var5 = var8.bind(var0)(var5);
                            var5 = var5.InvitePropertiesType;
                            var5 = var5.CHANNEL;
                            var1.type = var5;
                            var9 = _closure1_slot4;
                            var8 = var9.getChannel;
                            var5 = _closure2_slot5;
                            var5 = var8.bind(var9)(var5);
                            var1.channel = var5;
                            var5 = 'Invite Action Sheet';
                            var1.location = var5;
                            var5 = {};
                            var10 = _closure1_slot7;
                            var9 = var10.getSelectedInviteMetadata;
                            var8 = _closure2_slot0;
                            var8 = var9.bind(var10)(var8);
                            var5.suggestionData = var8;
                            var8 = _closure2_slot4;
                            var5.source = var8;
                            var1.inviteAnalyticsMetadata = var5;
                            var1 = var2.bind(var3)(var1, var4);
                            _fun67540_ip = 681;
                            continue _fun67540;
                        case 363:
                            var2 = _closure2_slot1;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun67540_ip = 681;
                                continue _fun67540
                            }
                        case 376:
                            var2 = _closure1_slot1;
                            var9 = _closure1_slot2;
                            var5 = 15;
                            var1 = var9[var5];
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.enqueue;
                            var1 = {};
                            var8 = _closure2_slot1;
                            var1.inviteKey = var8;
                            var8 = _closure1_slot0;
                            var5 = var9[var5];
                            var5 = var8.bind(var0)(var5);
                            var5 = var5.InvitePropertiesType;
                            var5 = var5.GROUP_DM;
                            var1.type = var5;
                            var9 = _closure1_slot4;
                            var8 = var9.getChannel;
                            var5 = _closure2_slot5;
                            var5 = var8.bind(var9)(var5);
                            var1.channel = var5;
                            var5 = 'Invite Action Sheet';
                            var1.location = var5;
                            var5 = {};
                            var10 = _closure1_slot7;
                            var9 = var10.getSelectedInviteMetadata;
                            var8 = _closure2_slot0;
                            var8 = var9.bind(var10)(var8);
                            var5.suggestionData = var8;
                            var8 = _closure2_slot4;
                            var5.source = var8;
                            var1.inviteAnalyticsMetadata = var5;
                            var1 = var2.bind(var3)(var1, var4);
                            _fun67540_ip = 681;
                            continue _fun67540;
                        case 524:
                            var2 = _closure2_slot1;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun67540_ip = 681;
                                continue _fun67540
                            }
                        case 537:
                            var2 = _closure1_slot1;
                            var9 = _closure1_slot2;
                            var5 = 15;
                            var1 = var9[var5];
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.enqueue;
                            var1 = {};
                            var8 = _closure2_slot1;
                            var1.inviteKey = var8;
                            var8 = _closure1_slot0;
                            var5 = var9[var5];
                            var5 = var8.bind(var0)(var5);
                            var5 = var5.InvitePropertiesType;
                            var5 = var5.USER;
                            var1.type = var5;
                            var9 = _closure1_slot8;
                            var8 = var9.getUser;
                            var5 = _closure2_slot5;
                            var5 = var8.bind(var9)(var5);
                            var1.user = var5;
                            var5 = 'Invite Action Sheet';
                            var1.location = var5;
                            var5 = {};
                            var9 = _closure1_slot7;
                            var8 = var9.getSelectedInviteMetadata;
                            var7 = _closure2_slot0;
                            var7 = var8.bind(var9)(var7);
                            var5.suggestionData = var7;
                            var6 = _closure2_slot4;
                            var5.source = var6;
                            var1.inviteAnalyticsMetadata = var5;
                            var1 = var2.bind(var3)(var1, var4);
                        case 681:
                            return var0;
                    }
                };
                var5 = var3.type;
                var6 = _closure1_slot0;
                var3 = _closure1_slot2;
                var13 = 14;
                var3 = var3[var13];
                var3 = var6.bind(var4)(var3);
                var3 = var3.RowTypes;
                var3 = var3.DM;
                if (!(var3 !== var5)) {
                    _fun67535_ip = 951;
                    continue _fun67535
                }
            case 311:
                var6 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var13];
                var3 = var6.bind(var4)(var3);
                var3 = var3.RowTypes;
                var3 = var3.FRIEND;
                if (!(var3 !== var5)) {
                    _fun67535_ip = 951;
                    continue _fun67535
                }
            case 347:
                var6 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var13];
                var3 = var6.bind(var4)(var3);
                var3 = var3.RowTypes;
                var3 = var3.GROUP_DM;
                if (!(var3 !== var5)) {
                    _fun67535_ip = 765;
                    continue _fun67535
                }
            case 383:
                var6 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var13];
                var3 = var6.bind(var4)(var3);
                var3 = var3.RowTypes;
                var3 = var3.CHANNEL;
                if (!(var3 !== var5)) {
                    _fun67535_ip = 418;
                    continue _fun67535
                }
            case 416:
                return var0;
            case 418:
                var5 = var0 == var28;
                var3 = undefined;
                if (var5) {
                    _fun67535_ip = 432;
                    continue _fun67535
                }
            case 427:
                var3 = var28.guild_id;
            case 432:
                var3 = var0 != var3;
                var24 = undefined;
                if (!var3) {
                    _fun67535_ip = 460;
                    continue _fun67535
                }
            case 441:
                var6 = _closure1_slot6;
                var5 = var6.getGuild;
                var3 = var28.guild_id;
                var24 = var5.bind(var6)(var3);
            case 460:
                if (!(var0 != var24)) {
                    _fun67535_ip = 763;
                    continue _fun67535
                }
            case 467:
                var3 = var24.icon;
                if (!(var0 == var3)) {
                    _fun67535_ip = 586;
                    continue _fun67535
                }
            case 476:
                var13 = _closure1_slot0;
                var19 = _closure1_slot2;
                var3 = 22;
                var3 = var19[var3];
                var6 = var13.bind(var4)(var3);
                var5 = var6.getAcronym;
                var3 = var24.name;
                var14 = var5.bind(var6)(var3);
                var6 = _closure1_slot12;
                var5 = _closure1_slot3;
                var3 = {};
                var12 = var12.acronym;
                var3.style = var12;
                var12 = 23;
                var12 = var19[var12];
                var12 = var13.bind(var4)(var12);
                var13 = var12.Text;
                var12 = {};
                var19 = 'text-sm/bold';
                var12.variant = var19;
                var12.children = var14;
                var12 = var6.bind(var4)(var13, var12);
                var3.children = var12;
                var13 = var6.bind(var4)(var5, var3);
                _fun67535_ip = 721;
                continue _fun67535;
            case 586:
                var6 = _closure1_slot12;
                var22 = _closure1_slot1;
                var19 = _closure1_slot2;
                var12 = 17;
                var3 = var19[var12];
                var5 = var22.bind(var4)(var3);
                var3 = {};
                var14 = 21;
                var20 = var19[var14];
                var21 = var22.bind(var4)(var20);
                var20 = var21.makeSource;
                var14 = var19[var14];
                var23 = var22.bind(var4)(var14);
                var22 = var23.getGuildIconURL;
                var14 = {};
                var25 = var24.id;
                var14.id = var25;
                var24 = var24.icon;
                var14.icon = var24;
                var24 = 32;
                var14.size = var24;
                var14 = var22.bind(var23)(var14);
                var14 = var20.bind(var21)(var14);
                var3.source = var14;
                var14 = _closure1_slot0;
                var12 = var19[var12];
                var12 = var14.bind(var4)(var12);
                var12 = var12.AvatarSizes;
                var12 = var12.REFRESH_MEDIUM_32;
                var3.size = var12;
                var13 = var6.bind(var4)(var5, var3);
            case 721:
                var3 = var0 == var18;
                var12 = '';
                if (var3) {
                    _fun67535_ip = 754;
                    continue _fun67535
                }
            case 732:
                var3 = global;
                var3 = var3.HermesInternal;
                var5 = var3.concat;
                var3 = '#';
                var12 = var5.bind(var3)(var18);
            case 754:
                var6 = undefined;
                var5 = undefined;
                _fun67535_ip = 1330;
                continue _fun67535;
            case 763:
                return var0;
            case 765:
                var3 = var0 != var28;
                var14 = null;
                if (!var3) {
                    _fun67535_ip = 922;
                    continue _fun67535
                }
            case 777:
                var20 = _closure1_slot12;
                var26 = _closure1_slot1;
                var23 = _closure1_slot2;
                var21 = 17;
                var3 = var23[var21];
                var19 = var26.bind(var4)(var3);
                var3 = {};
                var22 = 21;
                var24 = var23[var22];
                var25 = var26.bind(var4)(var24);
                var24 = var25.makeSource;
                var22 = var23[var22];
                var27 = var26.bind(var4)(var22);
                var26 = var27.getChannelIconURL;
                var22 = {};
                var29 = var28.id;
                var22.id = var29;
                var29 = var28.icon;
                var22.icon = var29;
                var28 = var28.application_id;
                var22.applicationId = var28;
                var28 = 32;
                var22.size = var28;
                var22 = var26.bind(var27)(var22);
                var22 = var24.bind(var25)(var22);
                var3.source = var22;
                var22 = _closure1_slot0;
                var21 = var23[var21];
                var21 = var22.bind(var4)(var21);
                var21 = var21.AvatarSizes;
                var21 = var21.REFRESH_MEDIUM_32;
                var3.size = var21;
                var14 = var20.bind(var4)(var19, var3);
            case 922:
                var19 = var0 != var18;
                var3 = '';
                if (!var19) {
                    _fun67535_ip = 936;
                    continue _fun67535
                }
            case 933:
                var3 = var18;
            case 936:
                var12 = var3;
                var13 = var14;
                var6 = undefined;
                var5 = undefined;
                _fun67535_ip = 1330;
                continue _fun67535;
            case 951:
                var14 = _closure1_slot8;
                var3 = var14.getUser;
                var23 = var3.bind(var14)(var17);
                var17 = _closure1_slot12;
                var14 = _closure1_slot0;
                var18 = _closure1_slot2;
                var3 = 16;
                var3 = var18[var3];
                var3 = var14.bind(var4)(var3);
                var14 = var3.PressableOpacity;
                var3 = {
                    'importantForAccessibility': 'no-hide-descendants',
                    'accessibilityElementsHidden': true
                };
                var19 = function arg0() {
                    _fun67542: for (var _fun67542_ip = 0;;) switch (_fun67542_ip) {
                        case 0:
                            var1 = arg0;
                            var0 = var1.stopPropagation;
                            var0 = var0.bind(var1)();
                            var2 = _closure2_slot2;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun67542_ip = 41;
                                continue _fun67542
                            }
                        case 26:
                            var2 = _closure2_slot2;
                            var1 = _closure2_slot5;
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                        case 41:
                            var0 = undefined;
                            return var0;
                    }
                };
                var3.onPress = var19;
                var19 = {
                    'padding': 8,
                    'margin': 4294967288
                };
                var3.style = var19;
                var19 = _closure1_slot1;
                var20 = 17;
                var18 = var18[var20];
                var19 = var19.bind(var4)(var18);
                var18 = {};
                var21 = var0 == var23;
                var22 = undefined;
                if (var21) {
                    _fun67535_ip = 1077;
                    continue _fun67535
                }
            case 1066:
                var21 = var23.getAvatarSource;
                var22 = var21.bind(var23)(var4);
            case 1077:
                var24 = var0 != var22;
                var21 = null;
                if (!var24) {
                    _fun67535_ip = 1089;
                    continue _fun67535
                }
            case 1086:
                var21 = var22;
            case 1089:
                var18.source = var21;
                var22 = _closure1_slot0;
                var21 = _closure1_slot2;
                var20 = var21[var20];
                var20 = var22.bind(var4)(var20);
                var20 = var20.AvatarSizes;
                var20 = var20.REFRESH_MEDIUM_32;
                var18.size = var20;
                var18 = var17.bind(var4)(var19, var18);
                var3.children = var18;
                var14 = var17.bind(var4)(var14, var3);
                var18 = _closure1_slot12;
                var20 = _closure1_slot1;
                var3 = 18;
                var3 = var21[var3];
                var17 = var20.bind(var4)(var3);
                var3 = {};
                var19 = 19;
                var19 = var21[var19];
                var20 = var20.bind(var4)(var19);
                var19 = var20.getGlobalName;
                var19 = var19.bind(var20)(var23);
                var3.nick = var19;
                var3.user = var23;
                var3 = var18.bind(var4)(var17, var3);
                var17 = var0 != var2;
                var2 = undefined;
                if (!var17) {
                    _fun67535_ip = 1314;
                    continue _fun67535
                }
            case 1211:
                var18 = {};
                var17 = 'viewProfile';
                var18.name = var17;
                var19 = _closure1_slot0;
                var22 = _closure1_slot2;
                var17 = 20;
                var20 = var22[var17];
                var20 = var19.bind(var4)(var20);
                var21 = var20.intl;
                var20 = var21.formatToPlainString;
                var17 = var22[var17];
                var17 = var19.bind(var4)(var17);
                var17 = var17.t;
                var19 = var17.uCenkh;
                var17 = {};
                var24 = var0 == var23;
                var22 = undefined;
                if (var24) {
                    _fun67535_ip = 1289;
                    continue _fun67535
                }
            case 1284:
                var22 = var23.tag;
            case 1289:
                var17.username = var22;
                var17 = var20.bind(var21)(var19, var17);
                var18.label = var17;
                var17 = new Array(1);
                var17[0] = var18;
                var2 = var17;
            case 1314:
                var5 = function arg0() {
                    _fun67543: for (var _fun67543_ip = 0;;) switch (_fun67543_ip) {
                        case 0:
                            var0 = arg0;
                            var0 = var0.nativeEvent;
                            var1 = var0.actionName;
                            var0 = 'viewProfile';
                            var0 = var0 === var1;
                            if (!var0) {
                                _fun67543_ip = 41;
                                continue _fun67543
                            }
                        case 28:
                            var2 = _closure2_slot2;
                            var1 = null;
                            var0 = var1 !== var2;
                        case 41:
                            if (!var0) {
                                _fun67543_ip = 72;
                                continue _fun67543
                            }
                        case 44:
                            var2 = _closure2_slot2;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun67543_ip = 72;
                                continue _fun67543
                            }
                        case 57:
                            var2 = _closure2_slot2;
                            var1 = _closure2_slot5;
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                        case 72:
                            var0 = undefined;
                            return var0;
                    }
                };
                var6 = var2;
                var13 = var14;
                var12 = var3;
            case 1330:
                var3 = _closure1_slot12;
                var2 = _closure1_slot0;
                var14 = _closure1_slot2;
                var1 = 24;
                var1 = var14[var1];
                var1 = var2.bind(var4)(var1);
                var2 = var1.TableRow;
                var1 = {};
                var1.start = var16;
                var1.end = var15;
                var1.icon = var13;
                var1.label = var12;
                var13 = _closure1_slot1;
                var12 = 25;
                var12 = var14[var12];
                var13 = var13.bind(var4)(var12);
                var12 = {};
                var12.sendState = var9;
                var12.onPressSend = var11;
                var12 = var3.bind(var4)(var13, var12);
                var1.trailing = var12;
                var1.onPress = var11;
                var7 = var0 != var7;
                if (var7) {
                    _fun67535_ip = 1431;
                    continue _fun67535
                }
            case 1428:
                var7 = var10;
            case 1431:
                if (var7) {
                    _fun67535_ip = 1448;
                    continue _fun67535
                }
            case 1434:
                var8 = _closure1_slot11;
                var8 = var8.SENT;
                var7 = var9 === var8;
            case 1448:
                var1.disabled = var7;
                var1.accessibilityActions = var6;
                var1.onAccessibilityAction = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            case 1470:
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 26;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/instant_invite/native/components/InstantInviteRow.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1372, 8292, 1410, 8309, 1613, 8358, 3296, 33, 1297, 671, 566, 4757, 8293, 8359, 4867, 5416, 8162, 3197, 1234, 1417, 1607, 3902, 4863, 8361, 2]);