// modules/main_tabs_v2/native/shared_components/user_list/useMemberListAction.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var7 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var9 = var3.USERS_LIST_PADDING_BETWEEN_SECTIONS;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.Permissions;
    var _closure1_slot9 = var6;
    var6 = var3.AnalyticsSections;
    var _closure1_slot10 = var6;
    var3 = var3.InstantInviteSources;
    var _closure1_slot11 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot12 = var3;
    var3 = {};
    var3.listActionRenderer = var0;
    var3.listActionHeight = var0;
    var _closure1_slot13 = var3;
    var3 = 9;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var8.paddingTop = var9;
    var3.wrapper = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot14 = var3;
    var3 = 29;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/main_tabs_v2/native/shared_components/user_list/useMemberListAction.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun105791: for (var _fun105791_ip = 0;;) switch (_fun105791_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.channel;
                var _closure2_slot0 = var2;
                var8 = var1.disable;
                var3 = undefined;
                if (!(var8 === var3)) {
                    _fun105791_ip = 28;
                    continue _fun105791
                }
            case 26:
                var8 = false;
            case 28:
                var _closure2_slot1 = var3;
                var _closure2_slot2 = var3;
                var _closure2_slot3 = var3;
                var _closure2_slot4 = var3;
                var _closure2_slot5 = var3;
                var _closure2_slot6 = var3;
                var _closure2_slot7 = var3;
                var _closure2_slot8 = var3;
                var _closure2_slot9 = var3;
                var4 = _closure1_slot14;
                var4 = var4.bind(var3)();
                _closure2_slot1 = var4;
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var5 = 10;
                var5 = var7[var5];
                var9 = var6.bind(var3)(var5);
                var7 = var9.useStateFromStores;
                var5 = _closure1_slot8;
                var6 = new Array(1);
                var6[0] = var5;
                var5 = function() { // Environment: var0
                    _fun105792: for (var _fun105792_ip = 0;;) switch (_fun105792_ip) {
                        case 0:
                            var0 = _closure2_slot0;
                            var1 = null;
                            var3 = var1 != var0;
                            var0 = null;
                            if (!var3) {
                                _fun105792_ip = 86;
                                continue _fun105792
                            }
                        case 18:
                            var4 = _closure2_slot0;
                            var3 = var4.isDM;
                            var3 = var3.bind(var4)();
                            var0 = null;
                            if (!var3) {
                                _fun105792_ip = 86;
                                continue _fun105792
                            }
                        case 37:
                            var4 = _closure1_slot8;
                            var3 = var4.getUser;
                            var5 = _closure2_slot0;
                            var2 = var5.getRecipientId;
                            var2 = var2.bind(var5)();
                            var2 = var3.bind(var4)(var2);
                            var3 = var1 == var2;
                            var1 = undefined;
                            if (var3) {
                                _fun105792_ip = 83;
                                continue _fun105792
                            }
                        case 78:
                            var1 = var2.username;
                        case 83:
                            var0 = var1;
                        case 86:
                            return var0;
                    }
                };
                var7 = var7.bind(var9)(var6, var5);
                _closure2_slot2 = var7;
                var9 = _closure1_slot6;
                var6 = var9.can;
                var5 = _closure1_slot9;
                var5 = var5.MANAGE_ROLES;
                var12 = var6.bind(var9)(var5, var2);
                if (!var12) {
                    _fun105791_ip = 193;
                    continue _fun105791
                }
            case 162:
                var6 = _closure1_slot0;
                var9 = _closure1_slot2;
                var5 = 11;
                var5 = var9[var5];
                var6 = var6.bind(var3)(var5);
                var5 = var6.isPrivateGuildChannel;
                var12 = var5.bind(var6)(var2);
            case 193:
                _closure2_slot3 = var12;
                var6 = null;
                var5 = var6 != var2;
                if (!var5) {
                    _fun105791_ip = 209;
                    continue _fun105791
                }
            case 206:
                var5 = !var8;
            case 209:
                if (!var5) {
                    _fun105791_ip = 309;
                    continue _fun105791
                }
            case 212:
                var8 = var12;
                if (var8) {
                    _fun105791_ip = 306;
                    continue _fun105791
                }
            case 218:
                var9 = var2.isDM;
                var9 = var9.bind(var2)();
                if (var9) {
                    _fun105791_ip = 278;
                    continue _fun105791
                }
            case 231:
                var9 = var2.isMultiUserDM;
                var9 = var9.bind(var2)();
                var10 = !var9;
                var9 = !var10;
                if (!var10) {
                    _fun105791_ip = 276;
                    continue _fun105791
                }
            case 250:
                var13 = _closure1_slot6;
                var11 = var13.can;
                var10 = _closure1_slot9;
                var10 = var10.CREATE_INSTANT_INVITE;
                var9 = var11.bind(var13)(var10, var2);
            case 276:
                _fun105791_ip = 303;
                continue _fun105791;
            case 278:
                var13 = _closure1_slot7;
                var11 = var13.isFriend;
                var10 = var2.getRecipientId;
                var10 = var10.bind(var2)();
                var9 = var11.bind(var13)(var10);
            case 303:
                var8 = var9;
            case 306:
                var5 = var8;
            case 309:
                _closure2_slot4 = var5;
                var9 = var6 == var2;
                var8 = undefined;
                if (var9) {
                    _fun105791_ip = 332;
                    continue _fun105791
                }
            case 322:
                var9 = var2.isDM;
                var8 = var9.bind(var2)();
            case 332:
                var9 = var6 != var8;
                if (!var9) {
                    _fun105791_ip = 342;
                    continue _fun105791
                }
            case 339:
                var9 = var8;
            case 342:
                _closure2_slot5 = var9;
                var8 = var6 == var2;
                var10 = undefined;
                if (var8) {
                    _fun105791_ip = 365;
                    continue _fun105791
                }
            case 355:
                var8 = var2.isMultiUserDM;
                var10 = var8.bind(var2)();
            case 365:
                var8 = var6 != var10;
                if (!var8) {
                    _fun105791_ip = 375;
                    continue _fun105791
                }
            case 372:
                var8 = var10;
            case 375:
                _closure2_slot6 = var8;
                var6 = var6 == var2;
                var11 = undefined;
                if (var6) {
                    _fun105791_ip = 393;
                    continue _fun105791
                }
            case 388:
                var11 = var2.id;
            case 393:
                _closure2_slot7 = var11;
                var6 = _closure1_slot1;
                var10 = _closure1_slot2;
                var2 = 12;
                var2 = var10[var2];
                var2 = var6.bind(var3)(var2);
                var6 = var2.bind(var3)();
                _closure2_slot8 = var6;
                var3 = _closure1_slot3;
                var10 = var3.useCallback;
                var2 = new Array(1);
                var2[0] = var11;
                var1 = function() { // Environment: var0
                    _fun105793: for (var _fun105793_ip = 0;;) switch (_fun105793_ip) {
                        case 0:
                            var2 = _closure2_slot7;
                            var0 = null;
                            if (!(var0 != var2)) {
                                _fun105793_ip = 64;
                                continue _fun105793
                            }
                        case 13:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var2 = 13;
                            var3 = var3[var2];
                            var2 = undefined;
                            var3 = var4.bind(var2)(var3);
                            var2 = var3.navigateToNewGroupDM;
                            var1 = _closure2_slot7;
                            var0 = _closure1_slot10;
                            var0 = var0.MEMBER_LIST;
                            var0 = var2.bind(var3)(var1, var0);
                        case 64:
                            var0 = undefined;
                            return var0;
                    }
                };
                var10 = var10.bind(var3)(var1, var2);
                _closure2_slot9 = var10;
                var2 = var3.useMemo;
                var1 = new Array(9);
                var1[0] = var12;
                var1[1] = var11;
                var1[2] = var10;
                var1[3] = var9;
                var1[4] = var8;
                var1[5] = var7;
                var1[6] = var6;
                var1[7] = var5;
                var1[8] = var4;
                var0 = function() { // Environment: var0
                    _fun105794: for (var _fun105794_ip = 0;;) switch (_fun105794_ip) {
                        case 0:
                            var0 = _closure2_slot7;
                            var6 = null;
                            if (!(var6 != var0)) {
                                _fun105794_ip = 857;
                                continue _fun105794
                            }
                        case 18:
                            var0 = _closure2_slot4;
                            if (!var0) {
                                _fun105794_ip = 857;
                                continue _fun105794
                            }
                        case 28:
                            var0 = _closure2_slot5;
                            if (var0) {
                                _fun105794_ip = 422;
                                continue _fun105794
                            }
                        case 38:
                            var0 = _closure2_slot6;
                            var3 = {};
                            if (var0) {
                                _fun105794_ip = 298;
                                continue _fun105794
                            }
                        case 53:
                            var0 = _closure2_slot3;
                            var7 = _closure1_slot1;
                            var11 = _closure1_slot2;
                            if (var0) {
                                _fun105794_ip = 183;
                                continue _fun105794
                            }
                        case 68:
                            var0 = 17;
                            var0 = var11[var0];
                            var10 = undefined;
                            var0 = var7.bind(var10)(var0);
                            var3.iconSource = var0;
                            var9 = _closure1_slot0;
                            var0 = 18;
                            var0 = var11[var0];
                            var0 = var9.bind(var10)(var0);
                            var0 = var0.GroupPlusIcon;
                            var3.IconComponent = var0;
                            var0 = 16;
                            var5 = var11[var0];
                            var5 = var9.bind(var10)(var5);
                            var8 = var5.intl;
                            var5 = var8.string;
                            var0 = var11[var0];
                            var0 = var9.bind(var10)(var0);
                            var0 = var0.t;
                            var0 = var0["Ab/6S0"];
                            var0 = var5.bind(var8)(var0);
                            var3.label = var0;
                            var0 = function() {
                                _fun105797: for (var _fun105797_ip = 0;;) switch (_fun105797_ip) {
                                    case 0:
                                        var2 = _closure1_slot5;
                                        var1 = var2.getChannel;
                                        var0 = _closure2_slot7;
                                        var3 = var1.bind(var2)(var0);
                                        var0 = null;
                                        if (!(var0 != var3)) {
                                            _fun105797_ip = 102;
                                            continue _fun105797
                                        }
                                    case 30:
                                        var2 = _closure1_slot0;
                                        var5 = _closure1_slot2;
                                        var0 = 25;
                                        var0 = var5[var0];
                                        var1 = undefined;
                                        var6 = var2.bind(var1)(var0);
                                        var0 = var6.dismissGlobalKeyboard;
                                        var0 = var0.bind(var6)();
                                        var0 = 26;
                                        var0 = var5[var0];
                                        var2 = var2.bind(var1)(var0);
                                        var1 = var2.showInstantInviteActionSheet;
                                        var0 = {};
                                        var4 = _closure1_slot11;
                                        var4 = var4.CHAT_SIDEBAR;
                                        var0.source = var4;
                                        var0 = var1.bind(var2)(var3, var0);
                                    case 102:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var3.handlePress = var0;
                            var0 = var3;
                            _fun105794_ip = 296;
                            continue _fun105794;
                        case 183:
                            var5 = 22;
                            var5 = var11[var5];
                            var10 = undefined;
                            var5 = var7.bind(var10)(var5);
                            var3.iconSource = var5;
                            var9 = _closure1_slot0;
                            var5 = 23;
                            var5 = var11[var5];
                            var5 = var9.bind(var10)(var5);
                            var5 = var5.SettingsIcon;
                            var3.IconComponent = var5;
                            var5 = 16;
                            var7 = var11[var5];
                            var7 = var9.bind(var10)(var7);
                            var8 = var7.intl;
                            var7 = var8.string;
                            var5 = var11[var5];
                            var5 = var9.bind(var10)(var5);
                            var5 = var5.t;
                            var5 = var5.z9Mqln;
                            var5 = var7.bind(var8)(var5);
                            var3.label = var5;
                            var5 = function() {
                                _fun105796: for (var _fun105796_ip = 0;;) switch (_fun105796_ip) {
                                    case 0:
                                        var3 = _closure1_slot5;
                                        var2 = var3.getChannel;
                                        var0 = _closure2_slot7;
                                        var0 = var2.bind(var3)(var0);
                                        var2 = null;
                                        if (!(var2 != var0)) {
                                            _fun105796_ip = 74;
                                            continue _fun105796
                                        }
                                    case 30:
                                        var3 = _closure1_slot0;
                                        var2 = _closure1_slot2;
                                        var1 = 24;
                                        var2 = var2[var1];
                                        var1 = undefined;
                                        var3 = var3.bind(var1)(var2);
                                        var2 = var3.openChannelMembersActionSheet;
                                        var1 = var0.id;
                                        var0 = var0.guild_id;
                                        var0 = var2.bind(var3)(var1, var0);
                                    case 74:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var3.handlePress = var5;
                            var0 = var3;
                        case 296:
                            _fun105794_ip = 417;
                            continue _fun105794;
                        case 298:
                            var7 = _closure1_slot1;
                            var10 = _closure1_slot2;
                            var5 = 17;
                            var5 = var10[var5];
                            var9 = undefined;
                            var5 = var7.bind(var9)(var5);
                            var3.iconSource = var5;
                            var8 = _closure1_slot0;
                            var4 = 18;
                            var4 = var10[var4];
                            var4 = var8.bind(var9)(var4);
                            var4 = var4.GroupPlusIcon;
                            var3.IconComponent = var4;
                            var4 = 16;
                            var5 = var10[var4];
                            var5 = var8.bind(var9)(var5);
                            var7 = var5.intl;
                            var5 = var7.string;
                            var4 = var10[var4];
                            var4 = var8.bind(var9)(var4);
                            var4 = var4.t;
                            var4 = var4["LR+Ptf"];
                            var4 = var5.bind(var7)(var4);
                            var3.label = var4;
                            var4 = function() {
                                _fun105795: for (var _fun105795_ip = 0;;) switch (_fun105795_ip) {
                                    case 0:
                                        var4 = _closure1_slot5;
                                        var3 = var4.getChannel;
                                        var1 = _closure2_slot7;
                                        var3 = var3.bind(var4)(var1);
                                        var1 = null;
                                        if (!(var1 != var3)) {
                                            _fun105795_ip = 136;
                                            continue _fun105795
                                        }
                                    case 30:
                                        var6 = _closure1_slot0;
                                        var7 = _closure1_slot2;
                                        var1 = 19;
                                        var3 = var7[var1];
                                        var1 = undefined;
                                        var5 = var6.bind(var1)(var3);
                                        var4 = var5.UNSAFE_isDismissibleContentDismissed;
                                        var3 = 20;
                                        var3 = var7[var3];
                                        var3 = var6.bind(var1)(var3);
                                        var3 = var3.DismissibleContent;
                                        var3 = var3.GDM_INVITE_REMINDER;
                                        var3 = var4.bind(var5)(var3);
                                        if (var3) {
                                            _fun105795_ip = 128;
                                            continue _fun105795
                                        }
                                    case 90:
                                        var3 = _closure1_slot1;
                                        var4 = _closure1_slot2;
                                        var2 = 21;
                                        var2 = var4[var2];
                                        var3 = var3.bind(var1)(var2);
                                        var2 = {};
                                        var4 = _closure2_slot9;
                                        var2.onClick = var4;
                                        var2 = var3.bind(var1)(var2);
                                        _fun105795_ip = 136;
                                        continue _fun105795;
                                    case 128:
                                        var0 = _closure2_slot9;
                                        var0 = var0.bind(var1)();
                                    case 136:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var3.handlePress = var4;
                            var0 = var3;
                        case 417:
                            _fun105794_ip = 627;
                            continue _fun105794;
                        case 422:
                            var3 = {};
                            var8 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var7 = 14;
                            var7 = var4[var7];
                            var9 = undefined;
                            var7 = var8.bind(var9)(var7);
                            var3.iconSource = var7;
                            var11 = _closure1_slot0;
                            var7 = 15;
                            var7 = var4[var7];
                            var7 = var11.bind(var9)(var7);
                            var7 = var7.ChatPlusIcon;
                            var3.IconComponent = var7;
                            var10 = 16;
                            var7 = var4[var10];
                            var7 = var11.bind(var9)(var7);
                            var8 = var7.intl;
                            var7 = var8.string;
                            var4 = var4[var10];
                            var4 = var11.bind(var9)(var4);
                            var4 = var4.t;
                            var4 = var4["3hF1W4"];
                            var4 = var7.bind(var8)(var4);
                            var3.label = var4;
                            var4 = _closure2_slot2;
                            var6 = var6 != var4;
                            var4 = undefined;
                            if (!var6) {
                                _fun105794_ip = 610;
                                continue _fun105794
                            }
                        case 544:
                            var6 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var7 = var5[var10];
                            var7 = var6.bind(var9)(var7);
                            var8 = var7.intl;
                            var7 = var8.formatToPlainString;
                            var5 = var5[var10];
                            var5 = var6.bind(var9)(var5);
                            var5 = var5.t;
                            var6 = var5["Sh/xNN"];
                            var5 = {};
                            var9 = _closure2_slot2;
                            var5.recipient = var9;
                            var4 = var7.bind(var8)(var6, var5);
                        case 610:
                            var3.sublabel = var4;
                            var4 = _closure2_slot9;
                            var3.handlePress = var4;
                            var0 = var3;
                        case 627:
                            var9 = var0.label;
                            var14 = var0.iconSource;
                            var13 = var0.IconComponent;
                            var10 = var0.handlePress;
                            var8 = var0.sublabel;
                            var5 = _closure1_slot12;
                            var4 = _closure1_slot4;
                            var3 = {};
                            var6 = _closure2_slot1;
                            var6 = var6.wrapper;
                            var3.style = var6;
                            var12 = _closure1_slot0;
                            var15 = _closure1_slot2;
                            var0 = 27;
                            var6 = var15[var0];
                            var0 = undefined;
                            var6 = var12.bind(var0)(var6);
                            var7 = var6.TableRow;
                            var6 = {};
                            var11 = 28;
                            var11 = var15[var11];
                            var11 = var12.bind(var0)(var11);
                            var11 = var11.RowButton;
                            var12 = var11.Icon;
                            var11 = {};
                            var11.source = var14;
                            var14 = 'blurple';
                            var11.variant = var14;
                            var11.IconComponent = var13;
                            var11 = var5.bind(var0)(var12, var11);
                            var6.icon = var11;
                            var6.onPress = var10;
                            var6.label = var9;
                            var6.subLabel = var8;
                            var8 = true;
                            var6.start = var8;
                            var6.end = var8;
                            var6.arrow = var8;
                            var6 = var5.bind(var0)(var7, var6);
                            var3.children = var6;
                            var0 = var5.bind(var0)(var4, var3);
                            var _closure3_slot0 = var0;
                            var0 = {};
                            var2 = function() {
                                var0 = _closure3_slot0;
                                return var0;
                            };
                            var0.listActionRenderer = var2;
                            var2 = _closure2_slot8;
                            var1 = _closure2_slot1;
                            var1 = var1.wrapper;
                            var1 = var1.paddingTop;
                            var1 = var2 + var1;
                            var0.listActionHeight = var1;
                            return var0;
                        case 857:
                            var0 = _closure1_slot13;
                            return var0;
                    }
                };
                var0 = var2.bind(var3)(var0, var1);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1372, 3091, 3100, 1621, 9097, 660, 33, 1297, 632, 8133, 7559, 3919, 13784, 13785, 1234, 8646, 8647, 3212, 1358, 11804, 13786, 5369, 11788, 1582, 8328, 4898, 5380, 2]);