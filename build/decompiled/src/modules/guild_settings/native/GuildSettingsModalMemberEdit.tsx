// modules/guild_settings/native/GuildSettingsModalMemberEdit.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var7 = metroImportAll;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var _closure1_slot3 = var6;
    var0 = function arg0, arg1, arg2() {
        _fun79982: for (var _fun79982_ip = 0;;) switch (_fun79982_ip) {
            case 0:
                var3 = arg0;
                var5 = arg2;
                var1 = _closure1_slot7;
                var2 = undefined;
                var0 = arg1;
                var8 = var1.bind(var2)(var0);
                var1 = _closure1_slot6;
                var0 = _closure1_slot30;
                var0 = var0.bind(var2)();
                if (var0) {
                    _fun79982_ip = 51;
                    continue _fun79982
                }
            case 38:
                var0 = var8.apply;
                var0 = var0.bind(var8)(var3, var5);
                _fun79982_ip = 92;
                continue _fun79982;
            case 51:
                var6 = global;
                var7 = var6.Reflect;
                var6 = var7.construct;
                if (var5) {
                    _fun79982_ip = 71;
                    continue _fun79982
                }
            case 67:
                var5 = new Array(0);
            case 71:
                var4 = _closure1_slot7;
                var4 = var4.bind(var2)(var3);
                var4 = var4.constructor;
                var0 = var6.bind(var7)(var8, var5, var4);
            case 92:
                var0 = var1.bind(var2)(var3, var0);
                return var0;
        }
    };
    var _closure1_slot29 = var0;
    var0 = function() {
        _fun79983: for (var _fun79983_ip = 0;;) switch (_fun79983_ip) {
            case 0:
            case 2: // try_start_0
                var1 = global;
                var2 = var1.Boolean;
                var2 = var2.prototype;
                var3 = var2.valueOf;
                var2 = var3.call;
                var7 = var1.Reflect;
                var6 = var7.construct;
                var5 = var1.Boolean;
                var4 = new Array(0);
                var1 = function() { // Environment: var0
                    var0 = undefined;
                    return var0;
                };
                var1 = var6.bind(var7)(var5, var4, var1);
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                var _closure2_slot0 = var1;
            case 72: // try_end0
                _fun79983_ip = 76;
                continue _fun79983;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot30 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot30 = var0;
    var1 = function arg0() {
        _fun79986: for (var _fun79986_ip = 0;;) switch (_fun79986_ip) {
            case 0:
                var1 = arg0;
                var7 = var1.guildId;
                var _closure2_slot0 = var7;
                var8 = var1.userId;
                var _closure2_slot1 = var8;
                var19 = var1.onClose;
                var12 = var1.contentContainerStyle;
                var2 = _closure1_slot0;
                var3 = _closure1_slot3;
                var1 = 35;
                var1 = var3[var1];
                var4 = undefined;
                var5 = var2.bind(var4)(var1);
                var1 = var5.useNavigation;
                var13 = var1.bind(var5)();
                var _closure2_slot2 = var13;
                var1 = 36;
                var5 = var3[var1];
                var11 = var2.bind(var4)(var5);
                var10 = var11.useStateFromStores;
                var5 = _closure1_slot16;
                var9 = new Array(1);
                var9[0] = var5;
                var5 = function() { // Environment: var0
                    var2 = _closure1_slot16;
                    var1 = var2.getGuild;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var17 = var10.bind(var11)(var9, var5);
                var _closure2_slot3 = var17;
                var5 = var3[var1];
                var11 = var2.bind(var4)(var5);
                var10 = var11.useStateFromStores;
                var5 = _closure1_slot15;
                var9 = new Array(1);
                var9[0] = var5;
                var5 = function() { // Environment: var0
                    var2 = _closure1_slot15;
                    var1 = var2.getSortedRoles;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var16 = var10.bind(var11)(var9, var5);
                var5 = var3[var1];
                var11 = var2.bind(var4)(var5);
                var10 = var11.useStateFromStoresObject;
                var5 = _closure1_slot18;
                var9 = new Array(1);
                var9[0] = var5;
                var5 = function() { // Environment: var0
                    var1 = _closure1_slot18;
                    var0 = var1.getCurrentUser;
                    var1 = var0.bind(var1)();
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot3;
                    var0 = 37;
                    var0 = var4[var0];
                    var5 = undefined;
                    var4 = var3.bind(var5)(var0);
                    var0 = null;
                    var3 = var0 != var1;
                    var0 = 'GuildSettingsModalMemberEditScene: current user cannot be undefined';
                    var0 = var4.bind(var5)(var3, var0);
                    var0 = {};
                    var4 = _closure1_slot18;
                    var3 = var4.getUser;
                    var2 = _closure2_slot1;
                    var2 = var3.bind(var4)(var2);
                    var0.user = var2;
                    var0.currentUser = var1;
                    return var0;
                };
                var5 = var10.bind(var11)(var9, var5);
                var14 = var5.user;
                var _closure2_slot4 = var14;
                var15 = var5.currentUser;
                var11 = _closure1_slot9;
                var10 = var11.useEffect;
                var9 = function() { // Environment: var0
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot3;
                    var0 = 22;
                    var1 = var1[var0];
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    var0 = var1.startEditingNickname;
                    var0 = var0.bind(var1)();
                    var0 = function() { // Environment: var0
                        var2 = _closure1_slot1;
                        var1 = _closure1_slot3;
                        var0 = 22;
                        var1 = var1[var0];
                        var0 = undefined;
                        var2 = var2.bind(var0)(var1);
                        var1 = var2.stopEditingRoles;
                        var1 = var1.bind(var2)();
                        return var0;
                    };
                    return var0;
                };
                var5 = new Array(0);
                var5 = var10.bind(var11)(var9, var5);
                var1 = var3[var1];
                var10 = var2.bind(var4)(var1);
                var9 = var10.useStateFromStoresObject;
                var1 = _closure1_slot19;
                var5 = new Array(5);
                var5[0] = var1;
                var1 = _closure1_slot14;
                var5[1] = var1;
                var1 = _closure1_slot17;
                var5[2] = var1;
                var1 = _closure1_slot18;
                var5[3] = var1;
                var1 = _closure1_slot16;
                var5[4] = var1;
                var1 = function() { // Environment: var0
                    _fun79992: for (var _fun79992_ip = 0;;) switch (_fun79992_ip) {
                        case 0:
                            var0 = {};
                            var5 = _closure1_slot14;
                            var4 = var5.getMember;
                            var3 = _closure2_slot0;
                            var2 = _closure2_slot1;
                            var2 = var4.bind(var5)(var3, var2);
                            var0.member = var2;
                            var2 = _closure1_slot19;
                            var2 = var2.nicknameError;
                            var0.nicknameError = var2;
                            var2 = _closure1_slot19;
                            var2 = var2.roles;
                            var0.editRoles = var2;
                            var2 = _closure1_slot19;
                            var2 = var2.isEditing;
                            var0.isEditing = var2;
                            var2 = _closure1_slot19;
                            var2 = var2.isSubmitting;
                            var0.submitting = var2;
                            var2 = _closure2_slot3;
                            var8 = null;
                            var2 = var8 != var2;
                            if (!var2) {
                                _fun79992_ip = 118;
                                continue _fun79992
                            }
                        case 110:
                            var3 = _closure2_slot4;
                            var2 = var8 != var3;
                        case 118:
                            if (!var2) {
                                _fun79992_ip = 156;
                                continue _fun79992
                            }
                        case 121:
                            var9 = _closure1_slot17;
                            var7 = var9.canManageUser;
                            var3 = _closure1_slot20;
                            var5 = var3.MANAGE_NICKNAMES;
                            var4 = _closure2_slot4;
                            var3 = _closure2_slot3;
                            var2 = var7.bind(var9)(var5, var4, var3);
                        case 156:
                            var0.canChangeNick = var2;
                            var5 = _closure1_slot17;
                            var4 = var5.can;
                            var2 = _closure1_slot20;
                            var3 = var2.MANAGE_ROLES;
                            var2 = _closure2_slot3;
                            var3 = var4.bind(var5)(var3, var2);
                            var0.canManageRoles = var3;
                            var2 = var8 != var2;
                            if (!var2) {
                                _fun79992_ip = 211;
                                continue _fun79992
                            }
                        case 203:
                            var3 = _closure2_slot4;
                            var2 = var8 != var3;
                        case 211:
                            if (!var2) {
                                _fun79992_ip = 249;
                                continue _fun79992
                            }
                        case 214:
                            var9 = _closure1_slot17;
                            var7 = var9.canManageUser;
                            var3 = _closure1_slot20;
                            var5 = var3.KICK_MEMBERS;
                            var4 = _closure2_slot4;
                            var3 = _closure2_slot3;
                            var2 = var7.bind(var9)(var5, var4, var3);
                        case 249:
                            var0.canKick = var2;
                            var2 = _closure2_slot3;
                            var2 = var8 != var2;
                            if (!var2) {
                                _fun79992_ip = 273;
                                continue _fun79992
                            }
                        case 265:
                            var3 = _closure2_slot4;
                            var2 = var8 != var3;
                        case 273:
                            if (!var2) {
                                _fun79992_ip = 311;
                                continue _fun79992
                            }
                        case 276:
                            var9 = _closure1_slot17;
                            var7 = var9.canManageUser;
                            var3 = _closure1_slot20;
                            var5 = var3.BAN_MEMBERS;
                            var4 = _closure2_slot4;
                            var3 = _closure2_slot3;
                            var2 = var7.bind(var9)(var5, var4, var3);
                        case 311:
                            var0.canBan = var2;
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot3;
                            var2 = 38;
                            var3 = var3[var2];
                            var2 = undefined;
                            var5 = var4.bind(var2)(var3);
                            var4 = var5.canToggleCommunicationDisableOnUser;
                            var3 = _closure2_slot3;
                            var7 = var8 == var3;
                            var3 = undefined;
                            if (var7) {
                                _fun79992_ip = 366;
                                continue _fun79992
                            }
                        case 357:
                            var7 = _closure2_slot3;
                            var3 = var7.id;
                        case 366:
                            var7 = _closure2_slot4;
                            var7 = var8 == var7;
                            var2 = undefined;
                            if (var7) {
                                _fun79992_ip = 388;
                                continue _fun79992
                            }
                        case 379:
                            var1 = _closure2_slot4;
                            var2 = var1.id;
                        case 388:
                            var7 = _closure1_slot18;
                            var1 = new Array(3);
                            var1[0] = var7;
                            var7 = _closure1_slot16;
                            var1[1] = var7;
                            var6 = _closure1_slot17;
                            var1[2] = var6;
                            var1 = var4.bind(var5)(var3, var2, var1);
                            var0.canDisableCommunication = var1;
                            return var0;
                    }
                };
                var11 = var9.bind(var10)(var5, var1);
                var1 = 39;
                var1 = var3[var1];
                var5 = var2.bind(var4)(var1);
                var3 = var5.useSubscribeGuildMembers;
                var2 = {};
                var1 = new Array(1);
                var1[0] = var8;
                var2[var7] = var1;
                var1 = 'GuildSettingsModalMemberEdit';
                var1 = var3.bind(var5)(var2, var1);
                var3 = _closure1_slot9;
                var2 = var3.useCallback;
                var1 = new Array(1);
                var1[0] = var13;
                var0 = function() { // Environment: var0
                    var2 = _closure2_slot2;
                    var1 = var2.pop;
                    var0 = 2;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var18 = var2.bind(var3)(var0, var1);
                var2 = null;
                var1 = var2 != var15;
                var0 = null;
                if (!var1) {
                    _fun79986_ip = 607;
                    continue _fun79986
                }
            case 401:
                var1 = var2 != var17;
                var0 = null;
                if (!var1) {
                    _fun79986_ip = 607;
                    continue _fun79986
                }
            case 413:
                var1 = var2 != var14;
                var0 = null;
                if (!var1) {
                    _fun79986_ip = 607;
                    continue _fun79986
                }
            case 425:
                var3 = _closure1_slot24;
                var7 = _closure1_slot0;
                var9 = _closure1_slot3;
                var1 = 40;
                var1 = var9[var1];
                var1 = var7.bind(var4)(var1);
                var2 = var1.RedesignCompat;
                var1 = {};
                var10 = _closure1_slot23;
                var8 = _closure1_slot28;
                var5 = {};
                var21 = var5;
                var20 = var11;
                var11 = copyDataProperties(var21, var20);
                var11 = 'onClose';
                var5[var11] = var19;
                var11 = 'handleSuccessfulRemoval';
                var5[var11] = var18;
                var11 = 'guild';
                var5[var11] = var17;
                var11 = 'sortedGuildRoles';
                var5[var11] = var16;
                var11 = 'currentUser';
                var5[var11] = var15;
                var11 = 'user';
                var5[var11] = var14;
                var11 = 'navigation';
                var5[var11] = var13;
                var11 = 'contentContainerStyle';
                var5[var11] = var12;
                var8 = var10.bind(var4)(var8, var5);
                var5 = new Array(2);
                var5[0] = var8;
                var8 = _closure1_slot23;
                var6 = 41;
                var6 = var9[var6];
                var6 = var7.bind(var4)(var6);
                var7 = var6.NavScrim;
                var6 = {};
                var6 = var8.bind(var4)(var7, var6);
                var5[1] = var6;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 607:
                return var0;
        }
    };
    var _closure1_slot31 = var1;
    var0 = global;
    var10 = var0.Object;
    var9 = var10.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var9.bind(var10)(var2, var0, var4);
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var8.bind(var0)(var4);
    var _closure1_slot4 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var8.bind(var0)(var4);
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var8.bind(var0)(var4);
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var8.bind(var0)(var4);
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var8.bind(var0)(var4);
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot9 = var4;
    var7 = 6;
    var7 = var6[var7];
    var7 = var5.bind(var0)(var7);
    var7 = var7.View;
    var _closure1_slot10 = var7;
    var7 = 7;
    var7 = var6[var7];
    var7 = var5.bind(var0)(var7);
    var9 = var7.isGuildOwner;
    var _closure1_slot11 = var9;
    var7 = var7.isGuildOwnerWithRequiredMfaLevel;
    var _closure1_slot12 = var7;
    var7 = 8;
    var7 = var6[var7];
    var7 = var5.bind(var0)(var7);
    var7 = var7.isEveryoneRole;
    var _closure1_slot13 = var7;
    var7 = 9;
    var7 = var6[var7];
    var7 = var8.bind(var0)(var7);
    var _closure1_slot14 = var7;
    var7 = 10;
    var7 = var6[var7];
    var7 = var8.bind(var0)(var7);
    var _closure1_slot15 = var7;
    var7 = 11;
    var7 = var6[var7];
    var7 = var8.bind(var0)(var7);
    var _closure1_slot16 = var7;
    var7 = 12;
    var7 = var6[var7];
    var7 = var8.bind(var0)(var7);
    var _closure1_slot17 = var7;
    var7 = 13;
    var7 = var6[var7];
    var7 = var8.bind(var0)(var7);
    var _closure1_slot18 = var7;
    var7 = 14;
    var7 = var6[var7];
    var7 = var8.bind(var0)(var7);
    var _closure1_slot19 = var7;
    var7 = 15;
    var7 = var6[var7];
    var7 = var5.bind(var0)(var7);
    var8 = var7.Permissions;
    var _closure1_slot20 = var8;
    var8 = var7.GuildFeatures;
    var _closure1_slot21 = var8;
    var7 = var7.GuildSettingsSections;
    var _closure1_slot22 = var7;
    var7 = 16;
    var7 = var6[var7];
    var7 = var5.bind(var0)(var7);
    var8 = var7.jsx;
    var _closure1_slot23 = var8;
    var8 = var7.jsxs;
    var _closure1_slot24 = var8;
    var7 = var7.Fragment;
    var _closure1_slot25 = var7;
    var7 = 17;
    var7 = var6[var7];
    var9 = var5.bind(var0)(var7);
    var8 = var9.createLegacyClassComponentStyles;
    var7 = {};
    var10 = {};
    var11 = 63;
    var10.height = var11;
    var7.userInfo = var10;
    var10 = {
        'width': 40,
        'height': 40
    };
    var7.avatar = var10;
    var10 = {};
    var11 = 'row';
    var10.flexDirection = var11;
    var7.rowLabel = var10;
    var10 = {
        'marginTop': 8,
        'marginBottom': 8
    };
    var7.ctaButton = var10;
    var10 = {
        'marginRight': 0,
        'marginLeft': 0,
        'paddingRight': 0,
        'paddingLeft': 16
    };
    var7.actionButtonLeft = var10;
    var10 = {
        'marginRight': 0,
        'marginLeft': 0,
        'paddingRight': 16,
        'paddingLeft': 0
    };
    var7.actionButtonRight = var10;
    var10 = {};
    var11 = 'auto';
    var10.flexBasis = var11;
    var7.actionButtonContainer = var10;
    var7 = var8.bind(var9)(var7);
    var _closure1_slot26 = var7;
    var8 = var4.PureComponent;
    var7 = function(arg0) { // Environment: var3
        var4 = function arg0() {
            var2 = arg0;
            var5 = this;
            var1 = _closure1_slot4;
            var4 = _closure2_slot0;
            var3 = undefined;
            var1 = var1.bind(var3)(var5, var4);
            var1 = _closure1_slot29;
            var0 = new Array(1);
            var0[0] = var2;
            var0 = var1.bind(var3)(var5, var4, var0);
            var1 = {};
            var2 = var2.isEditing;
            var1.isEditingProp = var2;
            var0.state = var1;
            return var0;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot8;
        var3 = undefined;
        var2 = arg0;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot5;
        var5 = {};
        var1 = 'render';
        var5.key = var1;
        var1 = function() {
            _fun79996: for (var _fun79996_ip = 0;;) switch (_fun79996_ip) {
                case 0:
                    var0 = this;
                    var0 = var0.props;
                    var9 = var0.guild;
                    var _closure3_slot0 = var9;
                    var5 = var0.sortedGuildRoles;
                    var2 = var0.roles;
                    var _closure3_slot1 = var2;
                    var2 = var0.isEditing;
                    var8 = var0.currentUserId;
                    var _closure3_slot2 = var8;
                    var3 = var0.onStartEditing;
                    var0 = var0.onToggleRole;
                    var _closure3_slot3 = var0;
                    if (var2) {
                        _fun79996_ip = 260;
                        continue _fun79996
                    }
                case 76:
                    var4 = _closure1_slot1;
                    var16 = _closure1_slot3;
                    var2 = 19;
                    var2 = var16[var2];
                    var11 = undefined;
                    var2 = var4.bind(var11)(var2);
                    var6 = var2.bind(var11)(var5);
                    var4 = var6.filter;
                    var2 = function(arg0) { // Environment: var1
                        var2 = _closure3_slot1;
                        var1 = var2.includes;
                        var0 = arg0;
                        var0 = var0.id;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var6 = var4.bind(var6)(var2);
                    var4 = var6.map;
                    var2 = function(arg0) { // Environment: var1
                        _fun80003: for (var _fun80003_ip = 0;;) switch (_fun80003_ip) {
                            case 0:
                                var0 = arg0;
                                var4 = _closure1_slot24;
                                var3 = _closure1_slot10;
                                var2 = {};
                                var8 = _closure1_slot23;
                                var11 = _closure1_slot0;
                                var10 = _closure1_slot3;
                                var9 = 20;
                                var5 = var10[var9];
                                var1 = undefined;
                                var5 = var11.bind(var1)(var5);
                                var7 = var5.FormRow;
                                var5 = {};
                                var12 = _closure1_slot23;
                                var10 = var10[var9];
                                var10 = var11.bind(var1)(var10);
                                var10 = var10.FormRow;
                                var11 = var10.Label;
                                var10 = {};
                                var14 = var0.colorString;
                                var13 = null;
                                var14 = var13 != var14;
                                if (!var14) {
                                    _fun80003_ip = 107;
                                    continue _fun80003
                                }
                            case 92:
                                var14 = {};
                                var15 = var0.colorString;
                                var14.color = var15;
                                var13 = var14;
                            case 107:
                                var10.style = var13;
                                var13 = var0.name;
                                var10.text = var13;
                                var10 = var12.bind(var1)(var11, var10);
                                var5.label = var10;
                                var7 = var8.bind(var1)(var7, var5);
                                var5 = new Array(2);
                                var5[0] = var7;
                                var8 = _closure1_slot23;
                                var7 = _closure1_slot0;
                                var6 = _closure1_slot3;
                                var6 = var6[var9];
                                var6 = var7.bind(var1)(var6);
                                var7 = var6.FormDivider;
                                var6 = {};
                                var6 = var8.bind(var1)(var7, var6);
                                var5[1] = var6;
                                var2.children = var5;
                                var0 = var0.id;
                                var0 = var4.bind(var1)(var3, var2, var0);
                                return var0;
                        }
                    };
                    var4 = var4.bind(var6)(var2);
                    var2 = var4.value;
                    var2 = var2.bind(var4)();
                    var4 = var2.push;
                    var10 = _closure1_slot23;
                    var15 = _closure1_slot0;
                    var6 = 20;
                    var6 = var16[var6];
                    var6 = var15.bind(var11)(var6);
                    var7 = var6.FormRow;
                    var6 = {};
                    var12 = 21;
                    var13 = var16[var12];
                    var13 = var15.bind(var11)(var13);
                    var14 = var13.intl;
                    var13 = var14.string;
                    var12 = var16[var12];
                    var12 = var15.bind(var11)(var12);
                    var12 = var12.t;
                    var12 = var12["+riKdA"];
                    var12 = var13.bind(var14)(var12);
                    var6.label = var12;
                    var6.onPress = var3;
                    var3 = 'addition';
                    var3 = var10.bind(var11)(var7, var6, var3);
                    var3 = var4.bind(var2)(var3);
                    var4 = var2;
                    _fun79996_ip = 396;
                    continue _fun79996;
                case 260:
                    var6 = _closure1_slot2;
                    var7 = _closure1_slot3;
                    var2 = 18;
                    var2 = var7[var2];
                    var3 = undefined;
                    var6 = var6.bind(var3)(var2);
                    var2 = var6.getHighestRole;
                    var2 = var2.bind(var6)(var9, var8);
                    var _closure3_slot4 = var2;
                    var6 = _closure1_slot1;
                    var2 = 19;
                    var2 = var7[var2];
                    var2 = var6.bind(var3)(var2);
                    var5 = var2.bind(var3)(var5);
                    var3 = var5.filter;
                    var2 = function(arg0) { // Environment: var1
                        var2 = _closure1_slot13;
                        var1 = undefined;
                        var0 = arg0;
                        var0 = var2.bind(var1)(var0);
                        var0 = !var0;
                        return var0;
                    };
                    var5 = var3.bind(var5)(var2);
                    var3 = var5.filter;
                    var2 = function(arg0) { // Environment: var1
                        var0 = arg0;
                        var0 = var0.managed;
                        var0 = !var0;
                        return var0;
                    };
                    var5 = var3.bind(var5)(var2);
                    var3 = var5.filter;
                    var2 = function(arg0) { // Environment: var1
                        var2 = _closure1_slot2;
                        var1 = _closure1_slot3;
                        var0 = 18;
                        var1 = var1[var0];
                        var0 = undefined;
                        var5 = var2.bind(var0)(var1);
                        var4 = var5.isRoleHigher;
                        var9 = _closure3_slot0;
                        var8 = _closure3_slot2;
                        var7 = _closure3_slot4;
                        var6 = arg0;
                        var10 = var5;
                        var0 = var10[var4](var9, var8, var7, var6, var5);
                        return var0;
                    };
                    var3 = var3.bind(var5)(var2);
                    var2 = var3.map;
                    var1 = function(arg0) { // Environment: var1
                        _fun80000: for (var _fun80000_ip = 0;;) switch (_fun80000_ip) {
                            case 0:
                                var0 = arg0;
                                var _closure4_slot0 = var0;
                                var3 = _closure3_slot1;
                                var2 = var3.indexOf;
                                var1 = var0.id;
                                var2 = var2.bind(var3)(var1);
                                var1 = -1;
                                var15 = var1 !== var2;
                                var _closure4_slot1 = var15;
                                var4 = _closure1_slot24;
                                var3 = _closure1_slot10;
                                var2 = {};
                                var11 = _closure1_slot23;
                                var12 = _closure1_slot0;
                                var7 = _closure1_slot3;
                                var9 = 20;
                                var5 = var7[var9];
                                var1 = undefined;
                                var5 = var12.bind(var1)(var5);
                                var10 = var5.FormRow;
                                var5 = {};
                                var13 = _closure1_slot23;
                                var7 = var7[var9];
                                var7 = var12.bind(var1)(var7);
                                var7 = var7.FormRow;
                                var12 = var7.Label;
                                var7 = {};
                                var16 = var0.colorString;
                                var14 = null;
                                var16 = var14 != var16;
                                if (!var16) {
                                    _fun80000_ip = 150;
                                    continue _fun80000
                                }
                            case 135:
                                var16 = {};
                                var17 = var0.colorString;
                                var16.color = var17;
                                var14 = var16;
                            case 150:
                                var7.style = var14;
                                var14 = var0.name;
                                var7.text = var14;
                                var7 = var13.bind(var1)(var12, var7);
                                var5.label = var7;
                                var6 = function() {
                                    var3 = _closure3_slot3;
                                    var1 = _closure4_slot0;
                                    var2 = var1.id;
                                    var0 = _closure4_slot1;
                                    var1 = !var0;
                                    var0 = undefined;
                                    var0 = var3.bind(var0)(var2, var1);
                                    return var0;
                                };
                                var5.onPress = var6;
                                var14 = _closure1_slot23;
                                var7 = _closure1_slot0;
                                var6 = _closure1_slot3;
                                var12 = var6[var9];
                                var12 = var7.bind(var1)(var12);
                                var12 = var12.FormRow;
                                var13 = var12.Radio;
                                var12 = {};
                                var12.selected = var15;
                                var12 = var14.bind(var1)(var13, var12);
                                var5.leading = var12;
                                var10 = var11.bind(var1)(var10, var5);
                                var5 = new Array(2);
                                var5[0] = var10;
                                var8 = _closure1_slot23;
                                var6 = var6[var9];
                                var6 = var7.bind(var1)(var6);
                                var7 = var6.FormDivider;
                                var6 = {};
                                var9 = true;
                                var6.iconPush = var9;
                                var6 = var8.bind(var1)(var7, var6);
                                var5[1] = var6;
                                var2.children = var5;
                                var0 = var0.id;
                                var0 = var4.bind(var1)(var3, var2, var0);
                                return var0;
                        }
                    };
                    var2 = var2.bind(var3)(var1);
                    var1 = var2.value;
                    var4 = var1.bind(var2)();
                case 396:
                    var3 = _closure1_slot23;
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot3;
                    var0 = 20;
                    var0 = var9[var0];
                    var2 = undefined;
                    var0 = var8.bind(var2)(var0);
                    var1 = var0.FormSection;
                    var0 = {};
                    var5 = 21;
                    var6 = var9[var5];
                    var6 = var8.bind(var2)(var6);
                    var7 = var6.intl;
                    var6 = var7.string;
                    var5 = var9[var5];
                    var5 = var8.bind(var2)(var5);
                    var5 = var5.t;
                    var5 = var5["LPJmL/"];
                    var5 = var6.bind(var7)(var5);
                    var0.title = var5;
                    var0.children = var4;
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
            }
        };
        var5.value = var1;
        var1 = new Array(1);
        var1[0] = var5;
        var5 = {};
        var6 = 'getDerivedStateFromProps';
        var5.key = var6;
        var0 = function arg0, arg1() {
            _fun80004: for (var _fun80004_ip = 0;;) switch (_fun80004_ip) {
                case 0:
                    var0 = arg0;
                    var2 = var0.isEditing;
                    var0 = arg1;
                    var1 = var0.isEditingProp;
                    var0 = null;
                    if (!(var1 !== var2)) {
                        _fun80004_ip = 34;
                        continue _fun80004
                    }
                case 24:
                    var1 = {};
                    var1.isEditingProp = var2;
                    var0 = var1;
                case 34:
                    return var0;
            }
        };
        var5.value = var0;
        var0 = new Array(1);
        var0[0] = var5;
        var0 = var2.bind(var3)(var4, var1, var0);
        return var0;
    };
    var8 = var7.bind(var0)(var8);
    var _closure1_slot27 = var8;
    var7 = {};
    var9 = new Array(0);
    var7.roles = var9;
    var8.defaultProps = var7;
    var7 = var4.PureComponent;
    var4 = function(arg0) { // Environment: var3
        var3 = function arg0() {
            _fun80006: for (var _fun80006_ip = 0;;) switch (_fun80006_ip) {
                case 0:
                    var5 = this;
                    var10 = 0;
                    var6 = copyRestArgs(var10);
                    var2 = _closure1_slot4;
                    var4 = _closure2_slot0;
                    var3 = undefined;
                    var2 = var2.bind(var3)(var5, var4);
                    var2 = _closure1_slot29;
                    var0 = new Array(0);
                    var10 = var0;
                    var9 = var6;
                    var8 = 0;
                    var6 = arraySpread(var10, var9, var8);
                    var0 = var2.bind(var3)(var5, var4, var0);
                    var _closure3_slot0 = var0;
                    var2 = {};
                    var4 = var0.props;
                    var4 = var4.member;
                    var5 = null;
                    var5 = var5 == var4;
                    if (var5) {
                        _fun80006_ip = 92;
                        continue _fun80006
                    }
                case 86:
                    var3 = var4.nick;
                case 92:
                    var2.nick = var3;
                    var0.state = var2;
                    var2 = function(arg0) { // Environment: var1
                        var2 = _closure3_slot0;
                        var1 = var2.setState;
                        var0 = {};
                        var3 = arg0;
                        var0.nick = var3;
                        var0 = var1.bind(var2)(var0);
                        var0 = undefined;
                        return var0;
                    };
                    var0.handleChangeNickname = var2;
                    var2 = function() { // Environment: var1
                        _fun80008: for (var _fun80008_ip = 0;;) switch (_fun80008_ip) {
                            case 0:
                                var1 = _closure3_slot0;
                                var1 = var1.state;
                                var1 = var1.nick;
                                var4 = null;
                                if (!(var4 != var1)) {
                                    _fun80008_ip = 155;
                                    continue _fun80008
                                }
                            case 27:
                                var3 = _closure1_slot1;
                                var2 = _closure1_slot3;
                                var1 = 22;
                                var2 = var2[var1];
                                var1 = undefined;
                                var3 = var3.bind(var1)(var2);
                                var2 = var3.changeNickname;
                                var5 = _closure3_slot0;
                                var1 = var5.props;
                                var1 = var1.guild;
                                var1 = var1.id;
                                var6 = var5.props;
                                var6 = var6.currentUser;
                                var6 = var6.id;
                                var5 = var5.props;
                                var5 = var5.user;
                                var5 = var5.id;
                                var4 = null;
                                if (!(var6 !== var5)) {
                                    _fun80008_ip = 133;
                                    continue _fun80008
                                }
                            case 114:
                                var5 = _closure3_slot0;
                                var5 = var5.props;
                                var5 = var5.user;
                                var4 = var5.id;
                            case 133:
                                var0 = _closure3_slot0;
                                var0 = var0.state;
                                var0 = var0.nick;
                                var0 = var2.bind(var3)(var1, var4, var0);
                            case 155:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.handleSaveNickname = var2;
                    var2 = function() { // Environment: var1
                        var2 = _closure1_slot1;
                        var1 = _closure1_slot3;
                        var0 = 22;
                        var1 = var1[var0];
                        var0 = undefined;
                        var4 = var2.bind(var0)(var1);
                        var3 = var4.startEditingRoles;
                        var1 = _closure3_slot0;
                        var2 = var1.props;
                        var2 = var2.guild;
                        var2 = var2.id;
                        var1 = var1.props;
                        var1 = var1.user;
                        var1 = var1.id;
                        var1 = var3.bind(var4)(var2, var1);
                        return var0;
                    };
                    var0.handleStartEditingRoles = var2;
                    var2 = function(arg0, arg1) { // Environment: var1
                        var2 = _closure1_slot1;
                        var1 = _closure1_slot3;
                        var0 = 22;
                        var1 = var1[var0];
                        var0 = undefined;
                        var4 = var2.bind(var0)(var1);
                        var3 = var4.toggleRole;
                        var2 = arg0;
                        var1 = arg1;
                        var1 = var3.bind(var4)(var2, var1);
                        return var0;
                    };
                    var0.handleToggleRole = var2;
                    var2 = function() { // Environment: var1
                        var0 = _closure3_slot0;
                        var0 = var0.props;
                        var5 = var0.guild;
                        var4 = var0.user;
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot3;
                        var0 = 23;
                        var1 = var1[var0];
                        var0 = undefined;
                        var3 = var2.bind(var0)(var1);
                        var2 = var3.openDisableCommunication;
                        var1 = {};
                        var5 = var5.id;
                        var1.guildId = var5;
                        var4 = var4.id;
                        var1.userId = var4;
                        var1 = var2.bind(var3)(var1);
                        return var0;
                    };
                    var0.handleSetCommunicationDisabled = var2;
                    var2 = function() { // Environment: var1
                        var0 = _closure3_slot0;
                        var0 = var0.props;
                        var5 = var0.guild;
                        var4 = var0.user;
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot3;
                        var0 = 23;
                        var1 = var1[var0];
                        var0 = undefined;
                        var3 = var2.bind(var0)(var1);
                        var2 = var3.openEnableCommunication;
                        var1 = {};
                        var5 = var5.id;
                        var1.guildId = var5;
                        var4 = var4.id;
                        var1.userId = var4;
                        var1 = var2.bind(var3)(var1);
                        return var0;
                    };
                    var0.handleClearCommunicationDisabled = var2;
                    var2 = function() { // Environment: var1
                        var0 = _closure3_slot0;
                        var0 = var0.props;
                        var5 = var0.user;
                        var4 = var0.handleSuccessfulRemoval;
                        var3 = var0.navigation;
                        var2 = var3.push;
                        var0 = _closure1_slot22;
                        var1 = var0.MEMBER_KICK;
                        var0 = {};
                        var5 = var5.id;
                        var0.userId = var5;
                        var0.onKick = var4;
                        var0 = var2.bind(var3)(var1, var0);
                        var0 = undefined;
                        return var0;
                    };
                    var0.handleKick = var2;
                    var2 = function() { // Environment: var1
                        var0 = _closure3_slot0;
                        var0 = var0.props;
                        var5 = var0.user;
                        var4 = var0.handleSuccessfulRemoval;
                        var3 = var0.navigation;
                        var2 = var3.push;
                        var0 = _closure1_slot22;
                        var1 = var0.MEMBER_BAN;
                        var0 = {};
                        var5 = var5.id;
                        var0.userId = var5;
                        var0.onBan = var4;
                        var0 = var2.bind(var3)(var1, var0);
                        var0 = undefined;
                        return var0;
                    };
                    var0.handleBan = var2;
                    var2 = function() { // Environment: var1
                        _fun80015: for (var _fun80015_ip = 0;;) switch (_fun80015_ip) {
                            case 0:
                                var0 = _closure3_slot0;
                                var0 = var0.props;
                                var4 = var0.guild;
                                var3 = var0.user;
                                var5 = var4.features;
                                var2 = var5.has;
                                var1 = _closure1_slot21;
                                var1 = var1.VERIFIED;
                                var1 = var2.bind(var5)(var1);
                                if (var1) {
                                    _fun80015_ip = 119;
                                    continue _fun80015
                                }
                            case 54:
                                var5 = var4.features;
                                var2 = var5.has;
                                var1 = _closure1_slot21;
                                var1 = var1.PARTNERED;
                                var1 = var2.bind(var5)(var1);
                                if (var1) {
                                    _fun80015_ip = 119;
                                    continue _fun80015
                                }
                            case 83:
                                var5 = _closure1_slot1;
                                var2 = _closure1_slot3;
                                var1 = 25;
                                var2 = var2[var1];
                                var1 = undefined;
                                var2 = var5.bind(var1)(var2);
                                var1 = var2.open;
                                var1 = var1.bind(var2)(var4, var3);
                                _fun80015_ip = 151;
                                continue _fun80015;
                            case 119:
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot3;
                                var0 = 24;
                                var1 = var1[var0];
                                var0 = undefined;
                                var1 = var2.bind(var0)(var1);
                                var0 = var1.transferOwnershipProtected;
                                var0 = var0.bind(var1)();
                            case 151:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.handleTransferOwnership = var2;
                    var2 = function() { // Environment: var1
                        _fun80016: for (var _fun80016_ip = 0;;) switch (_fun80016_ip) {
                            case 0:
                                var1 = _closure3_slot0;
                                var1 = var1.props;
                                var2 = var1.editRoles;
                                var1 = null;
                                if (!(var1 != var2)) {
                                    _fun80016_ip = 107;
                                    continue _fun80016
                                }
                            case 24:
                                var3 = _closure1_slot1;
                                var2 = _closure1_slot3;
                                var1 = 22;
                                var2 = var2[var1];
                                var1 = undefined;
                                var4 = var3.bind(var1)(var2);
                                var3 = var4.updateMemberRoles;
                                var0 = _closure3_slot0;
                                var1 = var0.props;
                                var1 = var1.guild;
                                var2 = var1.id;
                                var1 = var0.props;
                                var1 = var1.user;
                                var1 = var1.id;
                                var0 = var0.props;
                                var0 = var0.editRoles;
                                var0 = var3.bind(var4)(var2, var1, var0);
                            case 107:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.handleSaveMemberRoles = var2;
                    var1 = function() { // Environment: var1
                        var2 = _closure1_slot1;
                        var1 = _closure1_slot3;
                        var0 = 22;
                        var1 = var1[var0];
                        var0 = undefined;
                        var2 = var2.bind(var0)(var1);
                        var1 = var2.stopEditingRoles;
                        var1 = var1.bind(var2)();
                        return var0;
                    };
                    var0.handleCancelEditMemberRoles = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot8;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot5;
        var4 = {};
        var0 = 'componentDidMount';
        var4.key = var0;
        var0 = function() {
            var1 = this;
            var0 = var1.updateNavigator;
            var0 = var0.bind(var1)();
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(4);
        var0[0] = var4;
        var4 = {};
        var6 = 'componentDidUpdate';
        var4.key = var6;
        var6 = function arg0() {
            var2 = this;
            var1 = var2.updateNavigator;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'updateNavigator';
        var4.key = var6;
        var6 = function arg0() {
            _fun80020: for (var _fun80020_ip = 0;;) switch (_fun80020_ip) {
                case 0:
                    var1 = arg0;
                    var0 = this;
                    var _closure3_slot0 = var0;
                    var0 = var0.props;
                    var4 = var0.submitting;
                    var5 = var0.isEditing;
                    var2 = var0.navigation;
                    var9 = var0.onClose;
                    var6 = null;
                    var0 = var6 != var1;
                    if (!var0) {
                        _fun80020_ip = 60;
                        continue _fun80020
                    }
                case 50:
                    var7 = var1.submitting;
                    var0 = var4 === var7;
                case 60:
                    if (!var0) {
                        _fun80020_ip = 73;
                        continue _fun80020
                    }
                case 63:
                    var7 = var1.isEditing;
                    var0 = var5 === var7;
                case 73:
                    if (!var0) {
                        _fun80020_ip = 86;
                        continue _fun80020
                    }
                case 76:
                    var1 = var1.onClose;
                    var0 = var9 === var1;
                case 86:
                    if (var0) {
                        _fun80020_ip = 220;
                        continue _fun80020
                    }
                case 92:
                    var1 = var2.setOptions;
                    var0 = {};
                    if (var4) {
                        _fun80020_ip = 162;
                        continue _fun80020
                    }
                case 103:
                    if (var5) {
                        _fun80020_ip = 153;
                        continue _fun80020
                    }
                case 106:
                    var7 = var6 != var9;
                    var10 = undefined;
                    var6 = undefined;
                    if (!var7) {
                        _fun80020_ip = 151;
                        continue _fun80020
                    }
                case 117:
                    var8 = _closure1_slot0;
                    var11 = _closure1_slot3;
                    var7 = 27;
                    var7 = var11[var7];
                    var8 = var8.bind(var10)(var7);
                    var7 = var8.getHeaderCloseButton;
                    var6 = var7.bind(var8)(var9);
                case 151:
                    _fun80020_ip = 160;
                    continue _fun80020;
                case 153:
                    var6 = function() { // Environment: var3
                        var3 = _closure1_slot23;
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot3;
                        var0 = 26;
                        var0 = var8[var0];
                        var2 = undefined;
                        var0 = var7.bind(var2)(var0);
                        var1 = var0.HeaderActionButton;
                        var0 = {};
                        var4 = 21;
                        var5 = var8[var4];
                        var5 = var7.bind(var2)(var5);
                        var6 = var5.intl;
                        var5 = var6.string;
                        var4 = var8[var4];
                        var4 = var7.bind(var2)(var4);
                        var4 = var4.t;
                        var4 = var4["ETE/oC"];
                        var4 = var5.bind(var6)(var4);
                        var0.text = var4;
                        var4 = _closure3_slot0;
                        var4 = var4.handleCancelEditMemberRoles;
                        var0.onPress = var4;
                        var0 = var3.bind(var2)(var1, var0);
                        return var0;
                    };
                case 160:
                    _fun80020_ip = 169;
                    continue _fun80020;
                case 162:
                    var6 = function() { // Environment: var3
                        var0 = null;
                        return var0;
                    };
                case 169:
                    var0.headerLeft = var6;
                    if (var4) {
                        _fun80020_ip = 191;
                        continue _fun80020
                    }
                case 177:
                    var4 = undefined;
                    if (!var5) {
                        _fun80020_ip = 189;
                        continue _fun80020
                    }
                case 182:
                    var4 = function() { // Environment: var3
                        var3 = _closure1_slot23;
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot3;
                        var0 = 26;
                        var0 = var8[var0];
                        var2 = undefined;
                        var0 = var7.bind(var2)(var0);
                        var1 = var0.HeaderActionButton;
                        var0 = {};
                        var4 = 21;
                        var5 = var8[var4];
                        var5 = var7.bind(var2)(var5);
                        var6 = var5.intl;
                        var5 = var6.string;
                        var4 = var8[var4];
                        var4 = var7.bind(var2)(var4);
                        var4 = var4.t;
                        var4 = var4["R3BPH+"];
                        var4 = var5.bind(var6)(var4);
                        var0.text = var4;
                        var4 = _closure3_slot0;
                        var4 = var4.handleSaveMemberRoles;
                        var0.onPress = var4;
                        var0 = var3.bind(var2)(var1, var0);
                        return var0;
                    };
                case 189:
                    _fun80020_ip = 198;
                    continue _fun80020;
                case 191:
                    var4 = function() { // Environment: var3
                        var3 = _closure1_slot23;
                        var1 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var0 = 27;
                        var0 = var2[var0];
                        var2 = undefined;
                        var0 = var1.bind(var2)(var0);
                        var1 = var0.HeaderSubmittingIndicator;
                        var0 = {};
                        var0 = var3.bind(var2)(var1, var0);
                        return var0;
                    };
                case 198:
                    var0.headerRight = var4;
                    var3 = function() {
                        var3 = _closure1_slot23;
                        var5 = _closure1_slot0;
                        var10 = _closure1_slot3;
                        var0 = 27;
                        var0 = var10[var0];
                        var2 = undefined;
                        var0 = var5.bind(var2)(var0);
                        var1 = var0.NavigatorHeader;
                        var0 = {};
                        var4 = 21;
                        var6 = var10[var4];
                        var6 = var5.bind(var2)(var6);
                        var7 = var6.intl;
                        var6 = var7.formatToPlainString;
                        var4 = var10[var4];
                        var4 = var5.bind(var2)(var4);
                        var4 = var4.t;
                        var5 = var4.v7odxj;
                        var4 = {};
                        var9 = _closure1_slot1;
                        var8 = 28;
                        var8 = var10[var8];
                        var10 = var9.bind(var2)(var8);
                        var9 = var10.getName;
                        var8 = _closure3_slot0;
                        var8 = var8.props;
                        var8 = var8.user;
                        var8 = var9.bind(var10)(var8);
                        var4.user = var8;
                        var4 = var6.bind(var7)(var5, var4);
                        var0.title = var4;
                        var0 = var3.bind(var2)(var1, var0);
                        return var0;
                    };
                    var0.headerTitle = var3;
                    var0 = var1.bind(var2)(var0);
                case 220:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'render';
        var4.key = var6;
        var5 = function() {
            _fun80026: for (var _fun80026_ip = 0;;) switch (_fun80026_ip) {
                case 0:
                    var14 = this;
                    var1 = _closure1_slot26;
                    var0 = var14.context;
                    var4 = undefined;
                    var30 = var1.bind(var4)(var0);
                    var0 = var14.state;
                    var34 = var0.nick;
                    var0 = var14.props;
                    var21 = var0.user;
                    var29 = var0.guild;
                    var28 = var0.sortedGuildRoles;
                    var27 = var0.member;
                    var26 = var0.editRoles;
                    var31 = var0.nicknameError;
                    var25 = var0.currentUser;
                    var24 = var0.isEditing;
                    var18 = var0.canChangeNick;
                    var17 = var0.canManageRoles;
                    var13 = var0.canKick;
                    var7 = var0.canBan;
                    var15 = var0.canDisableCommunication;
                    var0 = null;
                    if (!(var0 != var27)) {
                        _fun80026_ip = 1747;
                        continue _fun80026
                    }
                case 123:
                    var3 = _closure1_slot24;
                    var2 = _closure1_slot10;
                    var1 = {};
                    var5 = var30.rowLabel;
                    var1.style = var5;
                    var8 = _closure1_slot23;
                    var6 = _closure1_slot0;
                    var9 = _closure1_slot3;
                    var5 = 29;
                    var5 = var9[var5];
                    var5 = var6.bind(var4)(var5);
                    var6 = var5.Text;
                    var5 = {};
                    var10 = 'text-sm/medium';
                    var5.variant = var10;
                    var10 = _closure1_slot1;
                    var22 = 28;
                    var9 = var9[var22];
                    var10 = var10.bind(var4)(var9);
                    var9 = var10.getUserTag;
                    var9 = var9.bind(var10)(var21);
                    var5.children = var9;
                    var6 = var8.bind(var4)(var6, var5);
                    var5 = new Array(2);
                    var5[0] = var6;
                    var8 = var21.bot;
                    var6 = null;
                    if (!var8) {
                        _fun80026_ip = 285;
                        continue _fun80026
                    }
                case 238:
                    var10 = _closure1_slot23;
                    var9 = _closure1_slot1;
                    var11 = _closure1_slot3;
                    var8 = 30;
                    var8 = var11[var8];
                    var9 = var9.bind(var4)(var8);
                    var8 = {};
                    var11 = var21.isVerifiedBot;
                    var11 = var11.bind(var21)();
                    var8.verified = var11;
                    var6 = var10.bind(var4)(var9, var8);
                case 285:
                    var5[1] = var6;
                    var1.children = var5;
                    var23 = var3.bind(var4)(var2, var1);
                    var1 = var0 != var27;
                    var16 = null;
                    if (!var1) {
                        _fun80026_ip = 596;
                        continue _fun80026
                    }
                case 311:
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var1 = 31;
                    var1 = var3[var1];
                    var2 = var2.bind(var4)(var1);
                    var1 = var2.isMemberCommunicationDisabled;
                    var1 = var1.bind(var2)(var27);
                    var5 = _closure1_slot23;
                    var11 = _closure1_slot0;
                    var32 = _closure1_slot3;
                    var2 = 20;
                    var2 = var32[var2];
                    var2 = var11.bind(var4)(var2);
                    var3 = var2.FormSection;
                    var2 = {};
                    var9 = _closure1_slot23;
                    var6 = 32;
                    var6 = var32[var6];
                    var6 = var11.bind(var4)(var6);
                    var8 = var6.TableRow;
                    var6 = {};
                    var10 = 'danger';
                    var6.variant = var10;
                    var10 = 21;
                    var12 = var32[var10];
                    var12 = var11.bind(var4)(var12);
                    var19 = var12.intl;
                    var12 = var19.formatToPlainString;
                    var10 = var32[var10];
                    var10 = var11.bind(var4)(var10);
                    var10 = var10.t;
                    if (var1) {
                        _fun80026_ip = 519;
                        continue _fun80026
                    }
                case 445:
                    var11 = var10.FN7NIS;
                    var1 = {};
                    var35 = _closure1_slot1;
                    var33 = var32[var22];
                    var35 = var35.bind(var4)(var33);
                    var33 = var35.getName;
                    var33 = var33.bind(var35)(var21);
                    var1.user = var33;
                    var1 = var12.bind(var19)(var11, var1);
                    var6.label = var1;
                    var1 = var14.handleSetCommunicationDisabled;
                    var6.onPress = var1;
                    var1 = var9.bind(var4)(var8, var6);
                    var2.children = var1;
                    var1 = var5.bind(var4)(var3, var2);
                    _fun80026_ip = 593;
                    continue _fun80026;
                case 519:
                    var11 = var10.RuL6o7;
                    var10 = {};
                    var33 = _closure1_slot1;
                    var32 = var32[var22];
                    var33 = var33.bind(var4)(var32);
                    var32 = var33.getName;
                    var32 = var32.bind(var33)(var21);
                    var10.user = var32;
                    var10 = var12.bind(var19)(var11, var10);
                    var6.label = var10;
                    var10 = var14.handleClearCommunicationDisabled;
                    var6.onPress = var10;
                    var6 = var9.bind(var4)(var8, var6);
                    var2.children = var6;
                    var1 = var5.bind(var4)(var3, var2);
                case 593:
                    var16 = var1;
                case 596:
                    var1 = _closure1_slot11;
                    var1 = var1.bind(var4)(var29, var21);
                    if (var1) {
                        _fun80026_ip = 622;
                        continue _fun80026
                    }
                case 609:
                    var2 = _closure1_slot12;
                    var2 = var2.bind(var4)(var29, var25);
                    var1 = !var2;
                case 622:
                    if (var1) {
                        _fun80026_ip = 631;
                        continue _fun80026
                    }
                case 625:
                    var1 = var21.bot;
                case 631:
                    var6 = undefined;
                    if (var1) {
                        _fun80026_ip = 780;
                        continue _fun80026
                    }
                case 639:
                    var3 = _closure1_slot23;
                    var19 = _closure1_slot0;
                    var32 = _closure1_slot3;
                    var1 = 20;
                    var1 = var32[var1];
                    var1 = var19.bind(var4)(var1);
                    var2 = var1.FormSection;
                    var1 = {};
                    var9 = _closure1_slot23;
                    var5 = 32;
                    var5 = var32[var5];
                    var5 = var19.bind(var4)(var5);
                    var8 = var5.TableRow;
                    var5 = {};
                    var10 = 'danger';
                    var5.variant = var10;
                    var10 = 21;
                    var11 = var32[var10];
                    var11 = var19.bind(var4)(var11);
                    var12 = var11.intl;
                    var11 = var12.string;
                    var10 = var32[var10];
                    var10 = var19.bind(var4)(var10);
                    var10 = var10.t;
                    var10 = var10.Z5s7PM;
                    var10 = var11.bind(var12)(var10);
                    var5.label = var10;
                    var10 = var14.handleTransferOwnership;
                    var5.onPress = var10;
                    var5 = var9.bind(var4)(var8, var5);
                    var1.children = var5;
                    var6 = var3.bind(var4)(var2, var1);
                case 780:
                    var3 = _closure1_slot24;
                    var12 = _closure1_slot0;
                    var36 = _closure1_slot3;
                    var8 = 20;
                    var1 = var36[var8];
                    var1 = var12.bind(var4)(var1);
                    var2 = var1.Form;
                    var1 = {};
                    var5 = {};
                    var9 = 1;
                    var5.flex = var9;
                    var1.style = var5;
                    var5 = var14.props;
                    var5 = var5.contentContainerStyle;
                    var1.contentContainerStyle = var5;
                    var10 = _closure1_slot23;
                    var5 = var36[var8];
                    var5 = var12.bind(var4)(var5);
                    var9 = var5.FormSection;
                    var5 = {};
                    var19 = _closure1_slot23;
                    var11 = var36[var8];
                    var11 = var12.bind(var4)(var11);
                    var12 = var11.FormRow;
                    var11 = {};
                    var35 = _closure1_slot23;
                    var33 = _closure1_slot1;
                    var32 = 33;
                    var32 = var36[var32];
                    var33 = var33.bind(var4)(var32);
                    var32 = {};
                    var36 = var30.avatar;
                    var32.style = var36;
                    var32.user = var21;
                    var36 = var29.id;
                    var32.guildId = var36;
                    var32 = var35.bind(var4)(var33, var32);
                    var11.leading = var32;
                    var30 = var30.userInfo;
                    var11.DEPRECATED_style = var30;
                    var11.label = var23;
                    var11 = var19.bind(var4)(var12, var11);
                    var5.children = var11;
                    var9 = var10.bind(var4)(var9, var5);
                    var5 = new Array(4);
                    var5[0] = var9;
                    var11 = _closure1_slot24;
                    var10 = _closure1_slot25;
                    var9 = {};
                    if (var18) {
                        _fun80026_ip = 1005;
                        continue _fun80026
                    }
                case 991:
                    var19 = var25.id;
                    var12 = var21.id;
                    var18 = var19 === var12;
                case 1005:
                    if (!var18) {
                        _fun80026_ip = 1246;
                        continue _fun80026
                    }
                case 1011:
                    var23 = _closure1_slot23;
                    var35 = _closure1_slot0;
                    var30 = _closure1_slot3;
                    var12 = var30[var8];
                    var12 = var35.bind(var4)(var12);
                    var19 = var12.FormSection;
                    var12 = {};
                    var37 = 21;
                    var32 = var30[var37];
                    var32 = var35.bind(var4)(var32);
                    var33 = var32.intl;
                    var32 = var33.string;
                    var30 = var30[var37];
                    var30 = var35.bind(var4)(var30);
                    var30 = var30.t;
                    var30 = var30["621LJD"];
                    var30 = var32.bind(var33)(var30);
                    var12.title = var30;
                    var32 = var0 != var31;
                    var30 = undefined;
                    if (!var32) {
                        _fun80026_ip = 1105;
                        continue _fun80026
                    }
                case 1102:
                    var30 = var31;
                case 1105:
                    var12.error = var30;
                    var32 = _closure1_slot23;
                    var36 = _closure1_slot0;
                    var33 = _closure1_slot3;
                    var30 = var33[var8];
                    var30 = var36.bind(var4)(var30);
                    var31 = var30.FormInput;
                    var30 = {};
                    var30.value = var34;
                    var34 = false;
                    var30.showTopContainer = var34;
                    var34 = var33[var37];
                    var34 = var36.bind(var4)(var34);
                    var35 = var34.intl;
                    var34 = var35.string;
                    var33 = var33[var37];
                    var33 = var36.bind(var4)(var33);
                    var33 = var33.t;
                    var33 = var33.h7UKXj;
                    var33 = var34.bind(var35)(var33);
                    var30.placeholder = var33;
                    var33 = var14.handleChangeNickname;
                    var30.onChange = var33;
                    var33 = var14.handleSaveNickname;
                    var30.onEndEditing = var33;
                    var33 = 32;
                    var30.maxLength = var33;
                    var30 = var32.bind(var4)(var31, var30);
                    var12.children = var30;
                    var18 = var23.bind(var4)(var19, var12);
                case 1246:
                    var12 = new Array(4);
                    var12[0] = var18;
                    if (!var17) {
                        _fun80026_ip = 1341;
                        continue _fun80026
                    }
                case 1257:
                    var23 = _closure1_slot23;
                    var19 = _closure1_slot27;
                    var18 = {};
                    var18.guild = var29;
                    var18.sortedGuildRoles = var28;
                    if (var24) {
                        _fun80026_ip = 1285;
                        continue _fun80026
                    }
                case 1279:
                    var26 = var27.roles;
                case 1285:
                    if (!(var0 == var26)) {
                        _fun80026_ip = 1293;
                        continue _fun80026
                    }
                case 1289:
                    var26 = new Array(0);
                case 1293:
                    var18.roles = var26;
                    var25 = var25.id;
                    var18.currentUserId = var25;
                    var18.isEditing = var24;
                    var24 = var14.handleToggleRole;
                    var18.onToggleRole = var24;
                    var24 = var14.handleStartEditingRoles;
                    var18.onStartEditing = var24;
                    var17 = var23.bind(var4)(var19, var18);
                case 1341:
                    var12[1] = var17;
                    if (!var15) {
                        _fun80026_ip = 1351;
                        continue _fun80026
                    }
                case 1348:
                    var15 = var16;
                case 1351:
                    var12[2] = var15;
                    if (!var13) {
                        _fun80026_ip = 1532;
                        continue _fun80026
                    }
                case 1361:
                    var17 = _closure1_slot23;
                    var25 = _closure1_slot0;
                    var28 = _closure1_slot3;
                    var15 = var28[var8];
                    var15 = var25.bind(var4)(var15);
                    var16 = var15.FormSection;
                    var15 = {};
                    var23 = _closure1_slot23;
                    var18 = 32;
                    var18 = var28[var18];
                    var18 = var25.bind(var4)(var18);
                    var19 = var18.TableRow;
                    var18 = {};
                    var24 = 'danger';
                    var18.variant = var24;
                    var24 = 21;
                    var26 = var28[var24];
                    var26 = var25.bind(var4)(var26);
                    var27 = var26.intl;
                    var26 = var27.formatToPlainString;
                    var24 = var28[var24];
                    var24 = var25.bind(var4)(var24);
                    var24 = var24.t;
                    var25 = var24.yOiJHB;
                    var24 = {};
                    var29 = _closure1_slot1;
                    var28 = var28[var22];
                    var29 = var29.bind(var4)(var28);
                    var28 = var29.getName;
                    var28 = var28.bind(var29)(var21);
                    var24.user = var28;
                    var24 = var26.bind(var27)(var25, var24);
                    var18.label = var24;
                    var24 = var14.handleKick;
                    var18.onPress = var24;
                    var18 = var23.bind(var4)(var19, var18);
                    var15.children = var18;
                    var13 = var17.bind(var4)(var16, var15);
                case 1532:
                    var12[3] = var13;
                    var9.children = var12;
                    var9 = var11.bind(var4)(var10, var9);
                    var5[1] = var9;
                    if (!var7) {
                        _fun80026_ip = 1727;
                        continue _fun80026
                    }
                case 1556:
                    var10 = _closure1_slot23;
                    var16 = _closure1_slot0;
                    var19 = _closure1_slot3;
                    var8 = var19[var8];
                    var8 = var16.bind(var4)(var8);
                    var9 = var8.FormSection;
                    var8 = {};
                    var13 = _closure1_slot23;
                    var11 = 32;
                    var11 = var19[var11];
                    var11 = var16.bind(var4)(var11);
                    var12 = var11.TableRow;
                    var11 = {};
                    var15 = 'danger';
                    var11.variant = var15;
                    var15 = 21;
                    var17 = var19[var15];
                    var17 = var16.bind(var4)(var17);
                    var18 = var17.intl;
                    var17 = var18.formatToPlainString;
                    var15 = var19[var15];
                    var15 = var16.bind(var4)(var15);
                    var15 = var15.t;
                    var16 = var15.TuAZuW;
                    var15 = {};
                    var20 = _closure1_slot1;
                    var19 = var19[var22];
                    var20 = var20.bind(var4)(var19);
                    var19 = var20.getName;
                    var19 = var19.bind(var20)(var21);
                    var15.user = var19;
                    var15 = var17.bind(var18)(var16, var15);
                    var11.label = var15;
                    var14 = var14.handleBan;
                    var11.onPress = var14;
                    var11 = var13.bind(var4)(var12, var11);
                    var8.children = var11;
                    var7 = var10.bind(var4)(var9, var8);
                case 1727:
                    var5[2] = var7;
                    var5[3] = var6;
                    var1.children = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                case 1747:
                    return var0;
            }
        };
        var4.value = var5;
        var0[3] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var4.bind(var0)(var7);
    var _closure1_slot28 = var7;
    var4 = 34;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.ThemeContext;
    var7.contextType = var4;
    var4 = 46;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_settings/native/GuildSettingsModalMemberEdit.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function arg0() {
        var1 = arg0;
        var2 = var1.guildId;
        var6 = var1.userId;
        var10 = var1.onClose;
        var _closure2_slot0 = var10;
        var9 = var1.onRemove;
        var _closure2_slot1 = var9;
        var5 = _closure1_slot1;
        var7 = _closure1_slot3;
        var1 = 44;
        var1 = var7[var1];
        var3 = undefined;
        var1 = var5.bind(var3)(var1);
        var8 = var1.bind(var3)(var2);
        var _closure2_slot2 = var8;
        var5 = _closure1_slot9;
        var2 = var5.useMemo;
        var1 = new Array(3);
        var1[0] = var10;
        var1[1] = var9;
        var1[2] = var8;
        var0 = function() { // Environment: var0
            var4 = _closure2_slot2;
            var3 = _closure2_slot0;
            var2 = _closure2_slot1;
            var1 = function arg0, arg1, arg2() {
                var0 = arg0;
                var _closure4_slot0 = var0;
                var0 = arg1;
                var _closure4_slot1 = var0;
                var0 = arg2;
                var _closure4_slot2 = var0;
                var0 = {};
                var1 = _closure1_slot22;
                var4 = var1.MEMBER_EDIT;
                var2 = {};
                var5 = function arg0() {
                    var3 = _closure1_slot23;
                    var2 = _closure1_slot31;
                    var1 = {};
                    var6 = arg0;
                    var7 = var1;
                    var0 = copyDataProperties(var7, var6);
                    var5 = _closure4_slot1;
                    var4 = 'onClose';
                    var1[var4] = var5;
                    var4 = _closure4_slot0;
                    var0 = 'guildId';
                    var1[var0] = var4;
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2, var1);
                    return var0;
                };
                var2.render = var5;
                var0[var4] = var2;
                var4 = var1.MEMBER_KICK;
                var2 = {};
                var5 = function() {
                    var0 = null;
                    return var0;
                };
                var2.headerTitle = var5;
                var5 = function arg0() {
                    var3 = _closure1_slot23;
                    var1 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var0 = 42;
                    var0 = var2[var0];
                    var2 = undefined;
                    var1 = var1.bind(var2)(var0);
                    var0 = {};
                    var7 = arg0;
                    var8 = var0;
                    var4 = copyDataProperties(var8, var7);
                    var6 = _closure4_slot0;
                    var5 = 'guildId';
                    var0[var5] = var6;
                    var5 = _closure4_slot2;
                    var4 = 'onKick';
                    var0[var4] = var5;
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                };
                var2.render = var5;
                var0[var4] = var2;
                var2 = var1.MEMBER_BAN;
                var1 = {};
                var4 = function() {
                    var0 = null;
                    return var0;
                };
                var1.headerTitle = var4;
                var3 = function arg0() {
                    var3 = _closure1_slot23;
                    var1 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var0 = 43;
                    var0 = var2[var0];
                    var2 = undefined;
                    var1 = var1.bind(var2)(var0);
                    var0 = {};
                    var7 = arg0;
                    var8 = var0;
                    var4 = copyDataProperties(var8, var7);
                    var6 = _closure4_slot0;
                    var5 = 'guildId';
                    var0[var5] = var6;
                    var5 = _closure4_slot2;
                    var4 = 'onBan';
                    var0[var4] = var5;
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                };
                var1.render = var3;
                var0[var2] = var1;
                return var0;
            };
            var0 = undefined;
            var0 = var1.bind(var0)(var4, var3, var2);
            return var0;
        };
        var5 = var2.bind(var5)(var0, var1);
        var2 = _closure1_slot23;
        var1 = _closure1_slot0;
        var0 = 45;
        var0 = var7[var0];
        var0 = var1.bind(var3)(var0);
        var1 = var0.Navigator;
        var0 = {};
        var0.screens = var5;
        var4 = _closure1_slot22;
        var5 = var4.MEMBER_EDIT;
        var0.initialRouteName = var5;
        var5 = {};
        var4 = var4.MEMBER_EDIT;
        var5.name = var4;
        var4 = {};
        var4.userId = var6;
        var5.params = var4;
        var4 = new Array(1);
        var4[0] = var5;
        var0.initialRouteStack = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var3;
    var2.GuildSettingsModalMemberEditScene = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 31, 27, 1416, 1677, 1683, 1676, 1410, 3093, 1621, 10178, 660, 33, 1297, 3098, 22, 5430, 1234, 10179, 10180, 3149, 10185, 5374, 4705, 3237, 3942, 5818, 3082, 4900, 5504, 3161, 1469, 566, 44, 7793, 7814, 4899, 5254, 10190, 10192, 4930, 5837, 2]);