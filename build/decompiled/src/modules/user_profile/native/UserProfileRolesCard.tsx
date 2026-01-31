// modules/user_profile/native/UserProfileRolesCard.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var0 = function(arg0) { // Original name: RoleDot, environment: var3
        _fun91732: for (var _fun91732_ip = 0;;) switch (_fun91732_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.color;
                var0 = _closure1_slot12;
                var3 = undefined;
                var4 = var0.bind(var3)();
                var2 = _closure1_slot9;
                var1 = _closure1_slot4;
                var0 = {};
                var5 = var4.roleDot;
                var4 = new Array(2);
                var4[0] = var5;
                var5 = {};
                var8 = null;
                if (!(var8 == var6)) {
                    _fun91732_ip = 57;
                    continue _fun91732
                }
            case 53:
                var6 = _closure1_slot7;
            case 57:
                var5.backgroundColor = var6;
                var4[1] = var5;
                var0.style = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot13 = var0;
    var1 = function(arg0) { // Original name: RoleItem, environment: var3
        _fun91733: for (var _fun91733_ip = 0;;) switch (_fun91733_ip) {
            case 0:
                var1 = arg0;
                var10 = var1.role;
                var _closure2_slot0 = var10;
                var9 = var1.guildId;
                var _closure2_slot1 = var9;
                var1 = var1.color;
                var4 = undefined;
                var _closure2_slot2 = var4;
                var _closure2_slot3 = var4;
                var _closure2_slot4 = var4;
                var _closure2_slot5 = var4;
                var2 = _closure1_slot12;
                var6 = var2.bind(var4)();
                var2 = var10.name;
                var3 = var2.length;
                var2 = _closure1_slot8;
                if (!(!(var3 <= var2))) {
                    _fun91733_ip = 129;
                    continue _fun91733
                }
            case 76:
                var8 = var10.name;
                var5 = var8.slice;
                var3 = _closure1_slot8;
                var2 = 0;
                var8 = var5.bind(var8)(var2, var3);
                var2 = global;
                var2 = var2.HermesInternal;
                var5 = var2.concat;
                var3 = '';
                var2 = '...';
                var8 = var5.bind(var3)(var8, var2);
                _fun91733_ip = 134;
                continue _fun91733;
            case 129:
                var8 = var10.name;
            case 134:
                _closure2_slot2 = var8;
                var2 = null;
                if (!(var2 == var1)) {
                    _fun91733_ip = 150;
                    continue _fun91733
                }
            case 144:
                var1 = var10.colorString;
            case 150:
                _closure2_slot3 = var1;
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 8;
                var1 = var5[var1];
                var5 = var3.bind(var4)(var1);
                var3 = var5.useRoleIcon;
                var1 = {};
                var1.guildId = var9;
                var9 = var10.id;
                var1.roleId = var9;
                var9 = 12;
                var1.size = var9;
                var1 = var3.bind(var5)(var1);
                _closure2_slot4 = var1;
                var3 = var10.tags;
                var5 = var2 == var3;
                var2 = undefined;
                if (var5) {
                    _fun91733_ip = 233;
                    continue _fun91733
                }
            case 227:
                var2 = var3.guild_connections;
            case 233:
                var2 = var4 !== var2;
                _closure2_slot5 = var2;
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 9;
                var2 = var5[var2];
                var2 = var3.bind(var4)(var2);
                var3 = var2.DeveloperMode;
                var2 = var3.useSetting;
                var12 = var2.bind(var3)();
                var3 = _closure1_slot1;
                var2 = 10;
                var2 = var5[var2];
                var9 = var3.bind(var4)(var2);
                var5 = var9.useExperiment;
                var3 = {};
                var2 = 'RoleItem';
                var3.location = var2;
                var2 = {};
                var11 = false;
                var2.autoTrackExposure = var11;
                var2 = var5.bind(var9)(var3, var2);
                var11 = var2.tidaWebformEnabled;
                var9 = _closure1_slot3;
                var5 = var9.useCallback;
                var2 = var10.id;
                var3 = new Array(2);
                var3[0] = var2;
                var3[1] = var8;
                var2 = function() { // Environment: var0
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var0 = 11;
                    var1 = var4[var0];
                    var0 = undefined;
                    var6 = var3.bind(var0)(var1);
                    var5 = var6.copy;
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var2 = var5.bind(var6)(var2);
                    var2 = 12;
                    var2 = var4[var2];
                    var3 = var3.bind(var0)(var2);
                    var2 = var3.roleIdCopied;
                    var1 = _closure2_slot2;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var9 = var5.bind(var9)(var2, var3);
                var5 = _closure1_slot3;
                var3 = var5.useCallback;
                var2 = new Array(3);
                var2[0] = var10;
                var2[1] = var8;
                var2[2] = var1;
                var1 = function() { // Environment: var0
                    _fun91735: for (var _fun91735_ip = 0;;) switch (_fun91735_ip) {
                        case 0:
                            var2 = {};
                            var7 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var10 = 13;
                            var4 = var3[var10];
                            var0 = undefined;
                            var4 = var7.bind(var0)(var4);
                            var6 = var4.intl;
                            var4 = var6.string;
                            var3 = var3[var10];
                            var3 = var7.bind(var0)(var3);
                            var3 = var3.t;
                            var3 = var3.sMsaLg;
                            var3 = var4.bind(var6)(var3);
                            var2.label = var3;
                            var3 = function() { // Original name: onPress, environment: var5
                                var3 = _closure1_slot0;
                                var4 = _closure1_slot2;
                                var0 = 11;
                                var1 = var4[var0];
                                var0 = undefined;
                                var6 = var3.bind(var0)(var1);
                                var5 = var6.copy;
                                var2 = _closure2_slot0;
                                var2 = var2.id;
                                var2 = var5.bind(var6)(var2);
                                var2 = 12;
                                var2 = var4[var2];
                                var3 = var3.bind(var0)(var2);
                                var2 = var3.roleIdCopied;
                                var1 = _closure2_slot2;
                                var1 = var2.bind(var3)(var1);
                                return var0;
                            };
                            var2.onPress = var3;
                            var4 = new Array(1);
                            var4[0] = var2;
                            var6 = _closure2_slot4;
                            var3 = null;
                            if (!(var3 != var6)) {
                                _fun91735_ip = 237;
                                continue _fun91735
                            }
                        case 103:
                            var7 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var6 = 14;
                            var6 = var8[var6];
                            var7 = var7.bind(var0)(var6);
                            var6 = var7.getRoleIconData;
                            var2 = _closure2_slot0;
                            var2 = var6.bind(var7)(var2);
                            if (!(var3 == var2)) {
                                _fun91735_ip = 144;
                                continue _fun91735
                            }
                        case 142:
                            var2 = {};
                        case 144:
                            var2 = var2.customIconSrc;
                            var _closure3_slot0 = var2;
                            if (!(var3 != var2)) {
                                _fun91735_ip = 237;
                                continue _fun91735
                            }
                        case 158:
                            var3 = var4.push;
                            var2 = {};
                            var9 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var7 = var6[var10];
                            var7 = var9.bind(var0)(var7);
                            var8 = var7.intl;
                            var7 = var8.string;
                            var6 = var6[var10];
                            var6 = var9.bind(var0)(var6);
                            var6 = var6.t;
                            var6 = var6["8xHmxo"];
                            var6 = var7.bind(var8)(var6);
                            var2.label = var6;
                            var5 = function() { // Original name: onPress, environment: var5
                                var2 = _closure1_slot0;
                                var3 = _closure1_slot2;
                                var0 = 11;
                                var1 = var3[var0];
                                var0 = undefined;
                                var5 = var2.bind(var0)(var1);
                                var4 = var5.copy;
                                var1 = _closure3_slot0;
                                var1 = var4.bind(var5)(var1);
                                var1 = 12;
                                var1 = var3[var1];
                                var2 = var2.bind(var0)(var1);
                                var1 = var2.presentCopiedToClipboard;
                                var1 = var1.bind(var2)();
                                return var0;
                            };
                            var2.onPress = var5;
                            var2 = var3.bind(var4)(var2);
                        case 237:
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 15;
                            var1 = var3[var1];
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.showSimpleActionSheet;
                            var1 = {};
                            var5 = 'RoleItem';
                            var1.key = var5;
                            var1.options = var4;
                            var1 = var2.bind(var3)(var1);
                            return var0;
                    }
                };
                var10 = var3.bind(var5)(var1, var2);
                var5 = function() { // Original name: renderContent, environment: var0
                    _fun91738: for (var _fun91738_ip = 0;;) switch (_fun91738_ip) {
                        case 0:
                            var3 = _closure1_slot11;
                            var2 = _closure1_slot10;
                            var1 = {};
                            var4 = _closure2_slot5;
                            var9 = _closure1_slot9;
                            if (var4) {
                                _fun91738_ip = 66;
                                continue _fun91738
                            }
                        case 27:
                            var6 = _closure1_slot13;
                            var5 = {};
                            var7 = _closure2_slot3;
                            var4 = null;
                            var10 = var4 != var7;
                            var4 = undefined;
                            var7 = undefined;
                            if (!var10) {
                                _fun91738_ip = 54;
                                continue _fun91738
                            }
                        case 50:
                            var7 = _closure2_slot3;
                        case 54:
                            var5.color = var7;
                            var5 = var9.bind(var4)(var6, var5);
                            _fun91738_ip = 170;
                            continue _fun91738;
                        case 66:
                            var6 = _closure1_slot1;
                            var7 = _closure1_slot2;
                            var4 = 16;
                            var4 = var7[var4];
                            var7 = undefined;
                            var6 = var6.bind(var7)(var4);
                            var4 = {};
                            var11 = _closure2_slot0;
                            var10 = var11.id;
                            var4.roleId = var10;
                            var10 = _closure2_slot1;
                            var4.guildId = var10;
                            var10 = null;
                            var12 = var10 == var11;
                            var11 = undefined;
                            if (var12) {
                                _fun91738_ip = 133;
                                continue _fun91738
                            }
                        case 123:
                            var12 = _closure2_slot0;
                            var11 = var12.colorString;
                        case 133:
                            var12 = var10 != var11;
                            var10 = undefined;
                            if (!var12) {
                                _fun91738_ip = 145;
                                continue _fun91738
                            }
                        case 142:
                            var10 = var11;
                        case 145:
                            var4.roleColor = var10;
                            var10 = 12;
                            var4.size = var10;
                            var10 = false;
                            var4.displayRoleIcon = var10;
                            var5 = var9.bind(var7)(var6, var4);
                        case 170:
                            var4 = new Array(3);
                            var4[0] = var5;
                            var5 = _closure2_slot4;
                            var4[1] = var5;
                            var7 = _closure1_slot9;
                            var6 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var0 = 17;
                            var5 = var5[var0];
                            var0 = undefined;
                            var5 = var6.bind(var0)(var5);
                            var6 = var5.Text;
                            var5 = {};
                            var9 = 'text-xs/medium';
                            var5.variant = var9;
                            var8 = _closure2_slot2;
                            var5.children = var8;
                            var5 = var7.bind(var0)(var6, var5);
                            var4[2] = var5;
                            var1.children = var4;
                            var0 = var3.bind(var0)(var2, var1);
                            return var0;
                    }
                };
                var3 = _closure1_slot9;
                if (var12) {
                    _fun91733_ip = 456;
                    continue _fun91733
                }
            case 421:
                var1 = _closure1_slot4;
                var0 = {};
                var2 = var6.role;
                var0.style = var2;
                var2 = var5.bind(var4)();
                var0.children = var2;
                var0 = var3.bind(var4)(var1, var0);
                _fun91733_ip = 602;
                continue _fun91733;
            case 456:
                var2 = _closure1_slot0;
                var13 = _closure1_slot2;
                var1 = 18;
                var1 = var13[var1];
                var1 = var2.bind(var4)(var1);
                var2 = var1.PressableHighlight;
                var1 = {};
                var1.onPress = var9;
                var9 = undefined;
                if (!var12) {
                    _fun91733_ip = 501;
                    continue _fun91733
                }
            case 493:
                var9 = undefined;
                if (!var11) {
                    _fun91733_ip = 501;
                    continue _fun91733
                }
            case 498:
                var9 = var10;
            case 501:
                var1.onLongPress = var9;
                var9 = 'button';
                var1.accessibilityRole = var9;
                var1.accessibilityLabel = var8;
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var7 = 13;
                var8 = var11[var7];
                var8 = var10.bind(var4)(var8);
                var9 = var8.intl;
                var8 = var9.string;
                var7 = var11[var7];
                var7 = var10.bind(var4)(var7);
                var7 = var7.t;
                var7 = var7.sMsaLg;
                var7 = var8.bind(var9)(var7);
                var1.accessibilityHint = var7;
                var6 = var6.role;
                var1.style = var6;
                var5 = var5.bind(var4)();
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 602:
                return var0;
        }
    };
    var _closure1_slot14 = var1;
    var0 = function(arg0) { // Original name: RolesList, environment: var3
        _fun91739: for (var _fun91739_ip = 0;;) switch (_fun91739_ip) {
            case 0:
                var0 = arg0;
                var9 = var0.guildMemberRoleIds;
                var _closure2_slot0 = var9;
                var0 = var0.guildId;
                var _closure2_slot1 = var0;
                var2 = _closure1_slot12;
                var4 = undefined;
                var6 = var2.bind(var4)();
                var3 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 19;
                var2 = var7[var2];
                var8 = var3.bind(var4)(var2);
                var7 = var8.useStateFromStoresArray;
                var2 = _closure1_slot6;
                var3 = new Array(1);
                var3[0] = var2;
                var2 = new Array(2);
                var2[0] = var9;
                var2[1] = var0;
                var0 = function() { // Environment: var5
                    var4 = _closure1_slot6;
                    var3 = var4.getManyRoles;
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var2 = var3.bind(var4)(var2, var1);
                    var1 = var2.sort;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var0 = 20;
                    var3 = var3[var0];
                    var0 = undefined;
                    var0 = var4.bind(var0)(var3);
                    var0 = var0.sortRolesByVerification;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var7 = var7.bind(var8)(var3, var0, var2);
                var3 = var7.length;
                var2 = 0;
                var0 = null;
                if (!(var2 !== var3)) {
                    _fun91739_ip = 161;
                    continue _fun91739
                }
            case 114:
                var3 = _closure1_slot9;
                var2 = _closure1_slot4;
                var1 = {};
                var6 = var6.roleContainer;
                var1.style = var6;
                var6 = var7.map;
                var5 = function(arg0) { // Environment: var5
                    var0 = arg0;
                    var4 = _closure1_slot9;
                    var3 = _closure1_slot14;
                    var2 = {};
                    var2.role = var0;
                    var1 = _closure2_slot1;
                    var2.guildId = var1;
                    var1 = var0.id;
                    var0 = undefined;
                    var0 = var4.bind(var0)(var3, var2, var1);
                    return var0;
                };
                var5 = var6.bind(var7)(var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 161:
                return var0;
        }
    };
    var _closure1_slot15 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var4);
    var0 = 0;
    var7 = var6[var0];
    var4 = arg3;
    var0 = undefined;
    var4 = var4.bind(var0)(var7);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var11.bind(var0)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var11.bind(var0)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var7 = var4.DEFAULT_ROLE_COLOR_HEX;
    var _closure1_slot7 = var7;
    var4 = var4.MAX_VISUAL_ROLE_LENGTH;
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var7 = var4.jsx;
    var _closure1_slot9 = var7;
    var7 = var4.Fragment;
    var _closure1_slot10 = var7;
    var4 = var4.jsxs;
    var _closure1_slot11 = var4;
    var4 = 6;
    var4 = var6[var4];
    var8 = var5.bind(var0)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {
        'flexDirection': 'row',
        'gap': 8,
        'flexWrap': 'wrap'
    };
    var4.roleContainer = var9;
    var9 = {
        'flexDirection': 'row',
        'alignItems': 'center',
        'columnGap': 4,
        'padding': 6
    };
    var10 = 7;
    var12 = var6[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_MOD_MUTED;
    var9.backgroundColor = var12;
    var12 = var6[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.sm;
    var9.borderRadius = var12;
    var4.role = var9;
    var9 = {
        'borderRadius': null,
        'height': 12,
        'width': 12
    };
    var10 = var6[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.radii;
    var10 = var10.round;
    var9.borderRadius = var10;
    var4.roleDot = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot12 = var4;
    var4 = 22;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/native/UserProfileRolesCard.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function(arg0) { // Original name: UserProfileRolesCard, environment: var3
        _fun91742: for (var _fun91742_ip = 0;;) switch (_fun91742_ip) {
            case 0:
                var1 = arg0;
                var8 = var1.userId;
                var _closure2_slot0 = var8;
                var9 = var1.guildId;
                var _closure2_slot1 = var9;
                var6 = var1.style;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 19;
                var1 = var3[var1];
                var4 = undefined;
                var7 = var2.bind(var4)(var1);
                var3 = var7.useStateFromStores;
                var1 = _closure1_slot5;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = new Array(2);
                var1[0] = var8;
                var1[1] = var9;
                var0 = function() { // Environment: var0
                    var3 = _closure1_slot5;
                    var2 = var3.getMember;
                    var1 = _closure2_slot1;
                    var0 = _closure2_slot0;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var1 = var3.bind(var7)(var2, var0, var1);
                var0 = null;
                var2 = var0 == var1;
                var8 = undefined;
                if (var2) {
                    _fun91742_ip = 113;
                    continue _fun91742
                }
            case 107:
                var8 = var1.roles;
            case 113:
                if (!(var0 == var8)) {
                    _fun91742_ip = 121;
                    continue _fun91742
                }
            case 117:
                var8 = new Array(0);
            case 121:
                var2 = var8.length;
                var1 = 0;
                var0 = null;
                if (!(var1 !== var2)) {
                    _fun91742_ip = 254;
                    continue _fun91742
                }
            case 134:
                var3 = _closure1_slot9;
                var2 = _closure1_slot1;
                var13 = _closure1_slot2;
                var1 = 21;
                var1 = var13[var1];
                var2 = var2.bind(var4)(var1);
                var1 = {};
                var12 = _closure1_slot0;
                var7 = 13;
                var10 = var13[var7];
                var10 = var12.bind(var4)(var10);
                var11 = var10.intl;
                var10 = var11.string;
                var7 = var13[var7];
                var7 = var12.bind(var4)(var7);
                var7 = var7.t;
                var7 = var7["LPJmL/"];
                var7 = var10.bind(var11)(var7);
                var1.title = var7;
                var1.style = var6;
                var7 = _closure1_slot9;
                var6 = _closure1_slot15;
                var5 = {};
                var5.guildId = var9;
                var5.guildMemberRoleIds = var8;
                var5 = var7.bind(var4)(var6, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 254:
                return var0;
        }
    };
    var2.default = var3;
    var2.RoleItem = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1672, 1665, 660, 33, 1297, 671, 6696, 1348, 8361, 5253, 3106, 1234, 6697, 7691, 9099, 3900, 4865, 566, 11894, 7701, 2]);