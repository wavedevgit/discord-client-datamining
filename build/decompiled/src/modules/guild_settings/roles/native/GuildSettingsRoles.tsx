// modules/guild_settings/roles/native/GuildSettingsRoles.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var6 = metroImportAll;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var _closure1_slot3 = var5;
    var0 = function arg0() {
        var1 = arg0;
        var0 = var1.trim;
        var1 = var0.bind(var1)();
        var0 = '';
        var0 = var0 !== var1;
        return var0;
    };
    var _closure1_slot26 = var0;
    var0 = function arg0, arg1() {
        var9 = arg0;
        var10 = arg1;
        var _closure2_slot0 = var9;
        var _closure2_slot1 = var10;
        var4 = _closure1_slot5;
        var2 = var4.useState;
        var1 = '';
        var2 = var2.bind(var4)(var1);
        var1 = _closure1_slot4;
        var5 = undefined;
        var8 = 2;
        var1 = var1.bind(var5)(var2, var8);
        var2 = 0;
        var4 = var1[var2];
        var _closure2_slot2 = var4;
        var6 = 1;
        var1 = var1[var6];
        var _closure2_slot3 = var1;
        var11 = _closure1_slot5;
        var7 = var11.useState;
        var1 = function() { // Environment: var0
            var0 = _closure2_slot0;
            return var0;
        };
        var7 = var7.bind(var11)(var1);
        var1 = _closure1_slot4;
        var1 = var1.bind(var5)(var7, var8);
        var2 = var1[var2];
        var1 = var1[var6];
        var _closure2_slot4 = var1;
        var7 = _closure1_slot5;
        var6 = var7.useRef;
        var1 = false;
        var1 = var6.bind(var7)(var1);
        var _closure2_slot5 = var1;
        var8 = _closure1_slot5;
        var7 = var8.useCallback;
        var6 = new Array(1);
        var6[0] = var9;
        var1 = function(arg0) { // Environment: var0
            _fun115792: for (var _fun115792_ip = 0;;) switch (_fun115792_ip) {
                case 0:
                    var2 = arg0;
                    var0 = var2.toLowerCase;
                    var2 = var0.bind(var2)();
                    var0 = var2.trim;
                    var5 = var0.bind(var2)();
                    var _closure3_slot0 = var5;
                    var0 = _closure2_slot5;
                    var0 = var0.current;
                    if (var0) {
                        _fun115792_ip = 52;
                        continue _fun115792
                    }
                case 44:
                    var2 = '';
                    var0 = var2 === var5;
                case 52:
                    if (var0) {
                        _fun115792_ip = 126;
                        continue _fun115792
                    }
                case 55:
                    var2 = _closure2_slot5;
                    var0 = true;
                    var2.current = var0;
                    var6 = _closure1_slot1;
                    var4 = _closure1_slot3;
                    var2 = 19;
                    var4 = var4[var2];
                    var2 = undefined;
                    var6 = var6.bind(var2)(var4);
                    var4 = var6.track;
                    var0 = _closure1_slot18;
                    var2 = var0.SEARCH_STARTED;
                    var0 = {};
                    var7 = 'Roles';
                    var0.search_type = var7;
                    var0 = var4.bind(var6)(var2, var0);
                case 126:
                    var2 = _closure2_slot3;
                    var0 = undefined;
                    var2 = var2.bind(var0)(var5);
                    var2 = _closure2_slot4;
                    var4 = '';
                    if (!(var4 !== var5)) {
                        _fun115792_ip = 172;
                        continue _fun115792
                    }
                case 149:
                    var5 = _closure2_slot0;
                    var4 = var5.filter;
                    var1 = function(arg0) { // Environment: var1
                        var0 = arg0;
                        var1 = var0.name;
                        var0 = var1.toLowerCase;
                        var2 = var0.bind(var1)();
                        var1 = var2.includes;
                        var0 = _closure3_slot0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var1 = var4.bind(var5)(var1);
                    _fun115792_ip = 176;
                    continue _fun115792;
                case 172:
                    var1 = _closure2_slot0;
                case 176:
                    var1 = var2.bind(var0)(var1);
                    return var0;
            }
        };
        var1 = var7.bind(var8)(var1, var6);
        var _closure2_slot6 = var1;
        var8 = _closure1_slot5;
        var7 = var8.useEffect;
        var6 = new Array(4);
        var6[0] = var10;
        var6[1] = var4;
        var6[2] = var9;
        var6[3] = var1;
        var0 = function() { // Environment: var0
            _fun115794: for (var _fun115794_ip = 0;;) switch (_fun115794_ip) {
                case 0:
                    var1 = _closure2_slot1;
                    if (var1) {
                        _fun115794_ip = 59;
                        continue _fun115794
                    }
                case 10:
                    var3 = _closure1_slot26;
                    var1 = _closure2_slot2;
                    var2 = undefined;
                    var1 = var3.bind(var2)(var1);
                    if (var1) {
                        _fun115794_ip = 46;
                        continue _fun115794
                    }
                case 31:
                    var3 = _closure2_slot4;
                    var1 = _closure2_slot0;
                    var1 = var3.bind(var2)(var1);
                    _fun115794_ip = 59;
                    continue _fun115794;
                case 46:
                    var1 = _closure2_slot6;
                    var0 = _closure2_slot2;
                    var0 = var1.bind(var2)(var0);
                case 59:
                    var0 = undefined;
                    return var0;
            }
        };
        var0 = var7.bind(var8)(var0, var6);
        var0 = {};
        var3 = _closure1_slot26;
        var3 = var3.bind(var5)(var4);
        var0.hasSearchQuery = var3;
        var0.filteredRoles = var2;
        var0.setSearchQuery = var1;
        return var0;
    };
    var _closure1_slot27 = var0;
    var0 = function arg0() {
        _fun115795: for (var _fun115795_ip = 0;;) switch (_fun115795_ip) {
            case 0:
                var1 = arg0;
                var4 = var1.guild;
                var _closure2_slot0 = var4;
                var5 = _closure1_slot5;
                var3 = var5.useEffect;
                var2 = new Array(1);
                var2[0] = var4;
                var1 = function() { // Environment: var0
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var0 = 24;
                    var1 = var3[var0];
                    var0 = undefined;
                    var5 = var2.bind(var0)(var1);
                    var4 = var5.UNSAFE_markSingleUseGuildDismissibleContentAsDismissed;
                    var1 = 25;
                    var1 = var3[var1];
                    var1 = var2.bind(var0)(var1);
                    var1 = var1.DismissibleContent;
                    var3 = var1.GUILD_JOINT_PERMISSION_MIGRATION_NOTIFICATION;
                    var6 = _closure2_slot0;
                    var2 = var6.id;
                    var1 = {};
                    var7 = _closure1_slot21;
                    var7 = var7.INDIRECT_ACTION;
                    var1.dismissAction = var7;
                    var6 = var6.id;
                    var1.guildId = var6;
                    var6 = true;
                    var1.forceTrack = var6;
                    var1 = var4.bind(var5)(var3, var2, var1);
                    return var0;
                };
                var1 = var3.bind(var5)(var1, var2);
                var3 = _closure1_slot5;
                var2 = var3.useCallback;
                var1 = new Array(1);
                var1[0] = var4;
                var0 = function() { // Environment: var0
                    var4 = _closure1_slot1;
                    var1 = _closure1_slot3;
                    var0 = 26;
                    var3 = var1[var0];
                    var0 = undefined;
                    var5 = var4.bind(var0)(var3);
                    var4 = var5.openLazy;
                    var3 = _closure1_slot0;
                    var2 = 28;
                    var2 = var1[var2];
                    var3 = var3.bind(var0)(var2);
                    var2 = 27;
                    var2 = var1[var2];
                    var1 = var1.paths;
                    var3 = var3.bind(var0)(var2, var1);
                    var6 = _closure2_slot0;
                    var7 = var6.id;
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var2 = var1.concat;
                    var1 = 'permission-migration-';
                    var2 = var2.bind(var1)(var7);
                    var1 = {};
                    var1.guild = var6;
                    var1 = var4.bind(var5)(var3, var2, var1);
                    return var0;
                };
                var5 = var2.bind(var3)(var0, var1);
                var1 = _closure1_slot1;
                var7 = _closure1_slot3;
                var0 = 29;
                var0 = var7[var0];
                var3 = undefined;
                var2 = var1.bind(var3)(var0);
                var1 = var2.useExperiment;
                var0 = {};
                var4 = var4.id;
                var0.guildId = var4;
                var4 = 'JointPermissionMigrationCallout';
                var0.location = var4;
                var0 = var1.bind(var2)(var0);
                var0 = var0.enabled;
                var2 = _closure1_slot22;
                var4 = _closure1_slot0;
                var1 = 30;
                var1 = var7[var1];
                var1 = var4.bind(var3)(var1);
                var1 = var1.RowButton;
                var4 = {};
                var9 = _closure1_slot22;
                var7 = _closure1_slot0;
                var10 = _closure1_slot3;
                var6 = 31;
                var6 = var10[var6];
                var6 = var7.bind(var3)(var6);
                var8 = var6.ShieldLockIcon;
                var6 = {};
                var11 = 'text-feedback-warning';
                var6.color = var11;
                var6 = var9.bind(var3)(var8, var6);
                var4.icon = var6;
                var6 = 'primary';
                var4.variant = var6;
                var6 = 32;
                var8 = var10[var6];
                var8 = var7.bind(var3)(var8);
                var11 = var8.intl;
                var9 = var11.string;
                var8 = var10[var6];
                var8 = var7.bind(var3)(var8);
                var8 = var8.t;
                if (var0) {
                    _fun115795_ip = 343;
                    continue _fun115795
                }
            case 263:
                var0 = var8.PggHmu;
                var0 = var9.bind(var11)(var0);
                var4.label = var0;
                var0 = var10[var6];
                var0 = var7.bind(var3)(var0);
                var14 = var0.intl;
                var13 = var14.format;
                var0 = var10[var6];
                var0 = var7.bind(var3)(var0);
                var0 = var0.t;
                var12 = var0.YUC2bm;
                var0 = {};
                var0 = var13.bind(var14)(var12, var0);
                var4.subLabel = var0;
                var4.onPress = var5;
                var0 = var4;
                _fun115795_ip = 419;
                continue _fun115795;
            case 343:
                var8 = var8.ExNRsW;
                var8 = var9.bind(var11)(var8);
                var4.label = var8;
                var8 = var10[var6];
                var8 = var7.bind(var3)(var8);
                var9 = var8.intl;
                var8 = var9.format;
                var6 = var10[var6];
                var6 = var7.bind(var3)(var6);
                var6 = var6.t;
                var7 = var6.qFXssF;
                var6 = {};
                var6 = var8.bind(var9)(var7, var6);
                var4.subLabel = var6;
                var4.onPress = var5;
                var0 = var4;
            case 419:
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot28 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var11.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var12 = 1;
    var3 = var5[var12];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.View;
    var _closure1_slot6 = var6;
    var13 = var3.StyleSheet;
    var3 = 3;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.isEveryoneRole;
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
    var3 = var11.bind(var0)(var3);
    var _closure1_slot11 = var3;
    var9 = 8;
    var3 = var5[var9];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot12 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot13 = var3;
    var3 = 10;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot14 = var3;
    var3 = 11;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot15 = var3;
    var10 = 12;
    var3 = var5[var10];
    var3 = var4.bind(var0)(var3);
    var3 = var3.GuildSettingsRoleEditSections;
    var _closure1_slot16 = var3;
    var3 = 13;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.GuildSettingsSections;
    var _closure1_slot17 = var6;
    var6 = var3.AnalyticEvents;
    var _closure1_slot18 = var6;
    var6 = var3.AnalyticsSections;
    var _closure1_slot19 = var6;
    var14 = var3.Fonts;
    var3 = var3.Permissions;
    var _closure1_slot20 = var3;
    var3 = 14;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ContentDismissActionType;
    var _closure1_slot21 = var3;
    var3 = 15;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot22 = var6;
    var6 = var3.jsxs;
    var _closure1_slot23 = var6;
    var3 = var3.Fragment;
    var _closure1_slot24 = var3;
    var15 = 16;
    var3 = var5[var15];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var8.flex = var12;
    var3.container = var8;
    var8 = {};
    var8.paddingHorizontal = var10;
    var3.scrollContainer = var8;
    var8 = {};
    var10 = 17;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var8.paddingTop = var12;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_12;
    var8.paddingHorizontal = var12;
    var3.searchWrapper = var8;
    var8 = {};
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var8.paddingVertical = var12;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var8.gap = var12;
    var3.subheaderContainer = var8;
    var8 = {
        'paddingBottom': 16,
        'alignItems': 'center'
    };
    var3.emptySubheaderContainer = var8;
    var8 = {
        'backgroundColor': null,
        'width': '100%',
        'flex': 1,
        'alignItems': 'center'
    };
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_BASE_LOW;
    var8.backgroundColor = var12;
    var12 = '100%';
    var3.emptyIlloContainer = var8;
    var8 = {
        'marginTop': 28,
        'width': '100%'
    };
    var3.emptyIllo = var8;
    var8 = {
        'marginTop': 0,
        'aspectRatio': 2.75,
        'width': '100%',
        'height': 'auto'
    };
    var3.emptyIlloLarge = var8;
    var18 = 24;
    var8 = {
        'paddingHorizontal': 16,
        'paddingTop': 8,
        'paddingBottom': 24,
        'alignItems': 'center'
    };
    var3.emptySubheaderBody = var8;
    var8 = {};
    var16 = 18;
    var16 = var5[var16];
    var17 = var11.bind(var0)(var16);
    var16 = var14.DISPLAY_EXTRABOLD;
    var14 = var5[var10];
    var14 = var11.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.MOBILE_TEXT_HEADING_PRIMARY;
    var20 = var17.bind(var0)(var16, var14, var18);
    var21 = var8;
    var14 = copyDataProperties(var21, var20);
    var14 = 'marginTop';
    var8[var14] = var15;
    var3.subheader = var8;
    var8 = {
        'marginTop': 8,
        'textAlign': 'center'
    };
    var3.subheaderBody = var8;
    var8 = {
        'flexGrow': 0,
        'marginTop': 16
    };
    var3.subheaderButton = var8;
    var8 = {
        'lineHeight': 18,
        'textAlign': 'center'
    };
    var3.subheaderDescription = var8;
    var8 = {};
    var8.marginTop = var9;
    var3.migrationInfoBox = var8;
    var8 = {};
    var13 = var13.hairlineWidth;
    var8.height = var13;
    var8.width = var12;
    var3.divider = var8;
    var8 = {
        'marginTop': 2,
        'marginBottom': 24
    };
    var3.everyoneWrapper = var8;
    var8 = {};
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var8.marginTop = var12;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var8.marginLeft = var12;
    var3.edittingRolesHeader = var8;
    var8 = {
        'flexDirection': 'row',
        'justifyContent': 'space-between',
        'alignItems': 'center'
    };
    var3.rolesHeader = var8;
    var8 = {
        'marginBottom': 8,
        'flexDirection': 'row',
        'alignItems': 'center'
    };
    var3.reorderButton = var8;
    var8 = {};
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.TEXT_LINK;
    var8.tintColor = var10;
    var3.reorderIcon = var8;
    var8 = {};
    var8.marginLeft = var9;
    var3.reorderButtonText = var8;
    var8 = {
        'padding': 16,
        'paddingTop': 8,
        'lineHeight': 18
    };
    var3.rolesBody = var8;
    var8 = {};
    var9 = 0.4;
    var8.opacity = var9;
    var3.emptyRolesIcon = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot25 = var3;
    var3 = 64;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_settings/roles/native/GuildSettingsRoles.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun115798: for (var _fun115798_ip = 0;;) switch (_fun115798_ip) {
            case 0:
                var1 = arg0;
                var6 = var1.guildId;
                var _closure2_slot0 = var6;
                var20 = var1.contentContainerStyle;
                var1 = _closure1_slot25;
                var3 = undefined;
                var19 = var1.bind(var3)();
                var _closure2_slot1 = var19;
                var2 = _closure1_slot5;
                var1 = var2.useRef;
                var26 = null;
                var21 = var1.bind(var2)(var26);
                var12 = _closure1_slot0;
                var17 = _closure1_slot3;
                var1 = 33;
                var1 = var17[var1];
                var2 = var12.bind(var3)(var1);
                var1 = var2.useNavigation;
                var2 = var1.bind(var2)();
                var _closure2_slot2 = var2;
                var4 = _closure1_slot1;
                var1 = 34;
                var1 = var17[var1];
                var1 = var4.bind(var3)(var1);
                var10 = var1.bind(var3)();
                var _closure2_slot3 = var10;
                var11 = 21;
                var1 = var17[var11];
                var8 = var12.bind(var3)(var1);
                var7 = var8.useStateFromStores;
                var1 = _closure1_slot7;
                var4 = new Array(1);
                var4[0] = var1;
                var1 = function() { // Environment: var0
                    var0 = _closure1_slot7;
                    var0 = var0.theme;
                    return var0;
                };
                var32 = var7.bind(var8)(var4, var1);
                var _closure2_slot4 = var32;
                var1 = var17[var11];
                var9 = var12.bind(var3)(var1);
                var8 = var9.useStateFromStoresObject;
                var1 = _closure1_slot12;
                var4 = new Array(6);
                var4[0] = var1;
                var7 = _closure1_slot11;
                var4[1] = var7;
                var1 = _closure1_slot9;
                var4[2] = var1;
                var1 = _closure1_slot15;
                var4[3] = var1;
                var1 = _closure1_slot14;
                var4[4] = var1;
                var1 = _closure1_slot10;
                var4[5] = var1;
                var1 = function() { // Environment: var0
                    _fun115800: for (var _fun115800_ip = 0;;) switch (_fun115800_ip) {
                        case 0:
                            var4 = _closure1_slot12;
                            var1 = var4.getGuild;
                            var0 = _closure2_slot0;
                            var5 = var1.bind(var4)(var0);
                            var1 = _closure1_slot9;
                            var0 = var1.getId;
                            var4 = var0.bind(var1)();
                            var0 = {};
                            var0.guild = var5;
                            var1 = null;
                            var7 = var1 != var5;
                            var6 = null;
                            if (!var7) {
                                _fun115800_ip = 70;
                                continue _fun115800
                            }
                        case 55:
                            var8 = _closure1_slot11;
                            var7 = var8.getEveryoneRole;
                            var6 = var7.bind(var8)(var5);
                        case 70:
                            var0.guildEveryoneRole = var6;
                            var9 = _closure1_slot10;
                            var8 = var9.getMemberCount;
                            var10 = var1 == var5;
                            var6 = undefined;
                            var7 = undefined;
                            if (var10) {
                                _fun115800_ip = 101;
                                continue _fun115800
                            }
                        case 96:
                            var7 = var5.id;
                        case 101:
                            var8 = var8.bind(var9)(var7);
                            var9 = var1 != var8;
                            var7 = 0;
                            if (!var9) {
                                _fun115800_ip = 118;
                                continue _fun115800
                            }
                        case 115:
                            var7 = var8;
                        case 118:
                            var0.memberCount = var7;
                            var9 = _closure1_slot14;
                            var8 = var9.getRoleMemberCount;
                            var10 = var1 == var5;
                            var7 = undefined;
                            if (var10) {
                                _fun115800_ip = 147;
                                continue _fun115800
                            }
                        case 142:
                            var7 = var5.id;
                        case 147:
                            var7 = var8.bind(var9)(var7);
                            var0.roleMemberCount = var7;
                            var8 = _closure1_slot11;
                            var7 = var8.getSortedRoles;
                            var3 = _closure2_slot0;
                            var3 = var7.bind(var8)(var3);
                            var0.sortedGuildRoles = var3;
                            var3 = _closure1_slot15;
                            var3 = var3.order;
                            var0.rolesOrder = var3;
                            var0.currentUserId = var4;
                            var3 = var1 != var5;
                            var1 = undefined;
                            if (!var3) {
                                _fun115800_ip = 242;
                                continue _fun115800
                            }
                        case 210:
                            var3 = _closure1_slot2;
                            var7 = _closure1_slot3;
                            var2 = 35;
                            var2 = var7[var2];
                            var3 = var3.bind(var6)(var2);
                            var2 = var3.getHighestRole;
                            var1 = var2.bind(var3)(var5, var4);
                        case 242:
                            var0.highestRole = var1;
                            return var0;
                    }
                };
                var4 = var8.bind(var9)(var4, var1);
                var8 = var4.guild;
                var _closure2_slot5 = var8;
                var9 = var4.guildEveryoneRole;
                var _closure2_slot6 = var9;
                var1 = var4.memberCount;
                var _closure2_slot7 = var1;
                var14 = var4.roleMemberCount;
                var _closure2_slot8 = var14;
                var18 = var4.sortedGuildRoles;
                var _closure2_slot9 = var18;
                var16 = var4.rolesOrder;
                var _closure2_slot10 = var16;
                var29 = var4.currentUserId;
                var _closure2_slot11 = var29;
                var24 = var4.highestRole;
                var _closure2_slot12 = var24;
                var4 = function arg0() {
                    var6 = arg0;
                    var _closure3_slot0 = var6;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var0 = 20;
                    var3 = var3[var0];
                    var0 = undefined;
                    var5 = var4.bind(var0)(var3);
                    var4 = var5.useGuildSettingsRolesManagerState;
                    var3 = function(arg0) { // Environment: var1
                        var0 = arg0;
                        var0 = var0.roleJustCreated;
                        return var0;
                    };
                    var5 = var4.bind(var5)(var3);
                    var _closure3_slot1 = var5;
                    var4 = _closure1_slot5;
                    var3 = var4.useLayoutEffect;
                    var2 = new Array(2);
                    var2[0] = var6;
                    var2[1] = var5;
                    var1 = function() { // Environment: var1
                        _fun115803: for (var _fun115803_ip = 0;;) switch (_fun115803_ip) {
                            case 0:
                                var1 = _closure3_slot1;
                                var4 = undefined;
                                if (var1) {
                                    _fun115803_ip = 16;
                                    continue _fun115803
                                }
                            case 14:
                                return var4;
                            case 16:
                                var1 = global;
                                var3 = var1.setTimeout;
                                var2 = function() { // Environment: var0
                                    _fun115804: for (var _fun115804_ip = 0;;) switch (_fun115804_ip) {
                                        case 0:
                                            var0 = _closure3_slot0;
                                            var1 = var0.current;
                                            var3 = null;
                                            var0 = var3 == var1;
                                            var2 = var1;
                                            if (var0) {
                                                _fun115804_ip = 37;
                                                continue _fun115804
                                            }
                                        case 24:
                                            var1 = var1._listRef;
                                            var0 = var3 == var1;
                                            var2 = var1;
                                        case 37:
                                            var1 = var2;
                                            if (var0) {
                                                _fun115804_ip = 55;
                                                continue _fun115804
                                            }
                                        case 43:
                                            var2 = var2.current;
                                            var0 = var3 == var2;
                                            var1 = var2;
                                        case 55:
                                            if (var0) {
                                                _fun115804_ip = 68;
                                                continue _fun115804
                                            }
                                        case 58:
                                            var0 = var1.scrollToEnd;
                                            var0 = var0.bind(var1)();
                                        case 68:
                                            var2 = _closure1_slot0;
                                            var1 = _closure1_slot3;
                                            var0 = 20;
                                            var1 = var1[var0];
                                            var0 = undefined;
                                            var3 = var2.bind(var0)(var1);
                                            var2 = var3.setRoleJustCreated;
                                            var1 = false;
                                            var1 = var2.bind(var3)(var1);
                                            return var0;
                                    }
                                };
                                var1 = 1000;
                                var1 = var3.bind(var4)(var2, var1);
                                var _closure4_slot0 = var1;
                                var0 = function() { // Environment: var0
                                    var0 = global;
                                    var2 = var0.clearTimeout;
                                    var1 = _closure4_slot0;
                                    var0 = undefined;
                                    var1 = var2.bind(var0)(var1);
                                    var2 = _closure1_slot0;
                                    var3 = _closure1_slot3;
                                    var1 = 20;
                                    var1 = var3[var1];
                                    var3 = var2.bind(var0)(var1);
                                    var2 = var3.setRoleJustCreated;
                                    var1 = false;
                                    var1 = var2.bind(var3)(var1);
                                    return var0;
                                };
                                return var0;
                        }
                    };
                    var1 = var3.bind(var4)(var1, var2);
                    return var0;
                };
                var4 = var4.bind(var3)(var21);
                var4 = function arg0() {
                    var0 = arg0;
                    var _closure3_slot0 = var0;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var0 = 21;
                    var3 = var3[var0];
                    var0 = undefined;
                    var6 = var4.bind(var0)(var3);
                    var5 = var6.useStateFromStoresObject;
                    var3 = _closure1_slot12;
                    var4 = new Array(2);
                    var4[0] = var3;
                    var3 = _closure1_slot13;
                    var4[1] = var3;
                    var3 = function() { // Environment: var1
                        _fun115807: for (var _fun115807_ip = 0;;) switch (_fun115807_ip) {
                            case 0:
                                var3 = _closure1_slot12;
                                var2 = var3.getGuild;
                                var0 = _closure3_slot0;
                                var4 = var2.bind(var3)(var0);
                                var0 = {};
                                var2 = null;
                                var2 = var2 != var4;
                                if (!var2) {
                                    _fun115807_ip = 50;
                                    continue _fun115807
                                }
                            case 35:
                                var5 = _closure1_slot13;
                                var3 = var5.canAccessGuildSettings;
                                var2 = var3.bind(var5)(var4);
                            case 50:
                                var0.canAccessSettings = var2;
                                var3 = _closure1_slot13;
                                var2 = var3.can;
                                var1 = _closure1_slot20;
                                var1 = var1.MANAGE_ROLES;
                                var1 = var2.bind(var3)(var1, var4);
                                var0.canManageRoles = var1;
                                return var0;
                        }
                    };
                    var3 = var5.bind(var6)(var4, var3);
                    var5 = var3.canAccessSettings;
                    var _closure3_slot1 = var5;
                    var6 = var3.canManageRoles;
                    var _closure3_slot2 = var6;
                    var4 = _closure1_slot5;
                    var3 = var4.useEffect;
                    var2 = new Array(2);
                    var2[0] = var6;
                    var2[1] = var5;
                    var1 = function() { // Environment: var1
                        _fun115808: for (var _fun115808_ip = 0;;) switch (_fun115808_ip) {
                            case 0:
                                var0 = _closure3_slot2;
                                if (!var0) {
                                    _fun115808_ip = 14;
                                    continue _fun115808
                                }
                            case 10:
                                var0 = _closure3_slot1;
                            case 14:
                                if (var0) {
                                    _fun115808_ip = 74;
                                    continue _fun115808
                                }
                            case 17:
                                var2 = _closure1_slot1;
                                var3 = _closure1_slot3;
                                var0 = 22;
                                var0 = var3[var0];
                                var1 = undefined;
                                var4 = var2.bind(var1)(var0);
                                var0 = var4.terminate;
                                var0 = var0.bind(var4)();
                                var0 = 23;
                                var0 = var3[var0];
                                var1 = var2.bind(var1)(var0);
                                var0 = var1.close;
                                var0 = var0.bind(var1)();
                            case 74:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var1 = var3.bind(var4)(var1, var2);
                    return var0;
                };
                var4 = var4.bind(var3)(var6);
                var13 = _closure1_slot5;
                var6 = var13.useState;
                var4 = false;
                var13 = var6.bind(var13)(var4);
                var6 = _closure1_slot4;
                var4 = 2;
                var6 = var6.bind(var3)(var13, var4);
                var13 = 0;
                var15 = var6[var13];
                var _closure2_slot13 = var15;
                var4 = 1;
                var4 = var6[var4];
                var _closure2_slot14 = var4;
                var4 = _closure1_slot27;
                var4 = var4.bind(var3)(var18, var15);
                var6 = var4.filteredRoles;
                var _closure2_slot15 = var6;
                var31 = var4.hasSearchQuery;
                var _closure2_slot16 = var31;
                var4 = var4.setSearchQuery;
                var _closure2_slot17 = var4;
                var11 = var17[var11];
                var17 = var12.bind(var3)(var11);
                var12 = var17.useStateFromStoresArray;
                var11 = new Array(1);
                var11[0] = var7;
                var7 = function() { // Environment: var0
                    _fun115809: for (var _fun115809_ip = 0;;) switch (_fun115809_ip) {
                        case 0:
                            var2 = _closure2_slot10;
                            var0 = null;
                            if (!(var0 == var2)) {
                                _fun115809_ip = 19;
                                continue _fun115809
                            }
                        case 13:
                            var0 = new Array(0);
                            _fun115809_ip = 46;
                            continue _fun115809;
                        case 19:
                            var4 = _closure1_slot11;
                            var3 = var4.getManyRoles;
                            var2 = _closure2_slot0;
                            var1 = _closure2_slot10;
                            var0 = var3.bind(var4)(var2, var1);
                        case 46:
                            return var0;
                    }
                };
                var17 = var12.bind(var17)(var11, var7);
                var _closure2_slot18 = var17;
                var12 = _closure1_slot5;
                var11 = var12.useMemo;
                var7 = new Array(8);
                var7[0] = var18;
                var7[1] = var17;
                var7[2] = var16;
                var7[3] = var14;
                var7[4] = var6;
                var7[5] = var8;
                var7[6] = var29;
                var7[7] = var24;
                var6 = function() { // Environment: var0
                    _fun115810: for (var _fun115810_ip = 0;;) switch (_fun115810_ip) {
                        case 0:
                            var2 = _closure2_slot10;
                            var3 = null;
                            if (!(var3 == var2)) {
                                _fun115810_ip = 21;
                                continue _fun115810
                            }
                        case 15:
                            var5 = _closure2_slot15;
                            _fun115810_ip = 25;
                            continue _fun115810;
                        case 21:
                            var5 = _closure2_slot18;
                        case 25:
                            var4 = var5.filter;
                            var2 = function(arg0) { // Environment: var1
                                var2 = _closure1_slot8;
                                var1 = undefined;
                                var0 = arg0;
                                var0 = var2.bind(var1)(var0);
                                var0 = !var0;
                                return var0;
                            };
                            var5 = var4.bind(var5)(var2);
                            var4 = var5.map;
                            var2 = function(arg0) { // Environment: var1
                                _fun115812: for (var _fun115812_ip = 0;;) switch (_fun115812_ip) {
                                    case 0:
                                        var3 = arg0;
                                        var0 = {};
                                        var0.role = var3;
                                        var2 = _closure2_slot8;
                                        var1 = null;
                                        var5 = var1 == var2;
                                        var2 = undefined;
                                        if (var5) {
                                            _fun115812_ip = 41;
                                            continue _fun115812
                                        }
                                    case 28:
                                        var4 = _closure2_slot8;
                                        var3 = var3.id;
                                        var2 = var4[var3];
                                    case 41:
                                        var3 = var1 != var2;
                                        var1 = 0;
                                        if (!var3) {
                                            _fun115812_ip = 53;
                                            continue _fun115812
                                        }
                                    case 50:
                                        var1 = var2;
                                    case 53:
                                        var0.memberCount = var1;
                                        return var0;
                                }
                            };
                            var4 = var4.bind(var5)(var2);
                            var2 = _closure2_slot5;
                            var5 = var3 != var2;
                            var2 = 0;
                            var3 = 0;
                            if (!var5) {
                                _fun115810_ip = 92;
                                continue _fun115810
                            }
                        case 74:
                            var5 = var4.findIndex;
                            var1 = function(arg0) { // Environment: var1
                                var2 = _closure1_slot2;
                                var1 = _closure1_slot3;
                                var0 = 35;
                                var1 = var1[var0];
                                var0 = undefined;
                                var5 = var2.bind(var0)(var1);
                                var4 = var5.isRoleHigher;
                                var9 = _closure2_slot5;
                                var8 = _closure2_slot11;
                                var7 = _closure2_slot12;
                                var0 = arg0;
                                var6 = var0.role;
                                var10 = var5;
                                var0 = var10[var4](var9, var8, var7, var6, var5);
                                var0 = !var0;
                                var0 = !var0;
                                return var0;
                            };
                            var3 = var5.bind(var4)(var1);
                        case 92:
                            var0 = _closure2_slot9;
                            var1 = var0.length;
                            var0 = 1;
                            var1 = var1 - var0;
                            var0 = {};
                            var0.roleData = var4;
                            var0.firstEditableIndex = var3;
                            var0.numSortableRoles = var1;
                            var1 = var1 > var2;
                            var0.hasRoles = var1;
                            return var0;
                    }
                };
                var6 = var11.bind(var12)(var6, var7);
                var18 = var6.roleData;
                var _closure2_slot19 = var18;
                var14 = var6.firstEditableIndex;
                var _closure2_slot20 = var14;
                var7 = var6.numSortableRoles;
                var28 = var6.hasRoles;
                var _closure2_slot21 = var28;
                var16 = _closure1_slot5;
                var12 = var16.useCallback;
                var11 = new Array(1);
                var11[0] = var4;
                var6 = function(arg0) { // Environment: var0
                    var1 = arg0;
                    var2 = _closure2_slot17;
                    var0 = var1.toLowerCase;
                    var1 = var0.bind(var1)();
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var22 = var12.bind(var16)(var6, var11);
                var16 = _closure1_slot5;
                var12 = var16.useCallback;
                var11 = new Array(1);
                var11[0] = var8;
                var6 = function() { // Environment: var0
                    _fun115815: for (var _fun115815_ip = 0;;) switch (_fun115815_ip) {
                        case 0:
                            var3 = _closure1_slot1;
                            var8 = _closure1_slot3;
                            var0 = 19;
                            var2 = var8[var0];
                            var0 = undefined;
                            var5 = var3.bind(var0)(var2);
                            var4 = var5.track;
                            var2 = _closure1_slot18;
                            var3 = var2.OPEN_MODAL;
                            var2 = {};
                            var6 = _closure1_slot19;
                            var6 = var6.GUILD_ROLE_CREATION_MODAL;
                            var2.type = var6;
                            var7 = _closure1_slot0;
                            var6 = 36;
                            var6 = var8[var6];
                            var8 = var7.bind(var0)(var6);
                            var7 = var8.collectGuildAnalyticsMetadata;
                            var10 = _closure2_slot5;
                            var6 = null;
                            var10 = var6 == var10;
                            var6 = undefined;
                            if (var10) {
                                _fun115815_ip = 105;
                                continue _fun115815
                            }
                        case 96:
                            var9 = _closure2_slot5;
                            var6 = var9.id;
                        case 105:
                            var11 = var7.bind(var8)(var6);
                            var12 = var2;
                            var6 = copyDataProperties(var12, var11);
                            var2 = var4.bind(var5)(var3, var2);
                            var2 = _closure1_slot1;
                            var3 = _closure1_slot3;
                            var1 = 37;
                            var1 = var3[var1];
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.open;
                            var1 = var1.bind(var2)();
                            return var0;
                    }
                };
                var23 = var12.bind(var16)(var6, var11);
                var _closure2_slot22 = var23;
                var16 = _closure1_slot5;
                var12 = var16.useCallback;
                var11 = new Array(1);
                var11[0] = var2;
                var6 = function(arg0) { // Environment: var0
                    _fun115816: for (var _fun115816_ip = 0;;) switch (_fun115816_ip) {
                        case 0:
                            var6 = arguments[1];
                            var0 = undefined;
                            if (!(var6 === var0)) {
                                _fun115816_ip = 11;
                                continue _fun115816
                            }
                        case 9:
                            var6 = false;
                        case 11:
                            var4 = _closure2_slot2;
                            var3 = var4.push;
                            var1 = _closure1_slot17;
                            var2 = var1.ROLE_EDIT_REFRESH;
                            var1 = {};
                            var7 = arg0;
                            var1.role = var7;
                            var1.newRole = var6;
                            var5 = _closure1_slot16;
                            var5 = var5.DISPLAY;
                            var1.section = var5;
                            var1 = var3.bind(var4)(var2, var1);
                            return var0;
                    }
                };
                var17 = var12.bind(var16)(var6, var11);
                var _closure2_slot23 = var17;
                var16 = _closure1_slot5;
                var12 = var16.useCallback;
                var11 = new Array(1);
                var11[0] = var4;
                var6 = function() { // Environment: var0
                    var3 = _closure2_slot14;
                    var0 = undefined;
                    var2 = true;
                    var2 = var3.bind(var0)(var2);
                    var2 = _closure2_slot17;
                    var1 = '';
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var6 = var12.bind(var16)(var6, var11);
                var _closure2_slot24 = var6;
                var16 = _closure1_slot5;
                var12 = var16.useCallback;
                var11 = new Array(1);
                var11[0] = var4;
                var4 = function() { // Environment: var0
                    var3 = _closure2_slot17;
                    var0 = undefined;
                    var2 = '';
                    var2 = var3.bind(var0)(var2);
                    var2 = _closure2_slot14;
                    var1 = function(arg0) { // Environment: var1
                        var0 = arg0;
                        var0 = !var0;
                        return var0;
                    };
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var4 = var12.bind(var16)(var4, var11);
                var _closure2_slot25 = var4;
                var25 = _closure1_slot5;
                var16 = var25.useCallback;
                var12 = new Array(2);
                var12[0] = var8;
                var12[1] = var4;
                var11 = function() { // Environment: var0
                    _fun115820: for (var _fun115820_ip = 0;;) switch (_fun115820_ip) {
                        case 0:
                            var2 = _closure1_slot15;
                            var1 = var2.getUpdates;
                            var3 = var1.bind(var2)();
                            var2 = var3.length;
                            var1 = 0;
                            var1 = var2 > var1;
                            if (!var1) {
                                _fun115820_ip = 46;
                                continue _fun115820
                            }
                        case 33:
                            var4 = _closure2_slot5;
                            var2 = null;
                            var1 = var2 != var4;
                        case 46:
                            if (!var1) {
                                _fun115820_ip = 95;
                                continue _fun115820
                            }
                        case 49:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot3;
                            var0 = 38;
                            var1 = var1[var0];
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.batchRoleUpdate;
                            var0 = _closure2_slot5;
                            var0 = var0.id;
                            var0 = var1.bind(var2)(var0, var3);
                        case 95:
                            var1 = _closure2_slot25;
                            var0 = undefined;
                            var1 = var1.bind(var0)();
                            return var0;
                    }
                };
                var11 = var16.bind(var25)(var11, var12);
                var _closure2_slot26 = var11;
                var27 = _closure1_slot5;
                var25 = var27.useCallback;
                var16 = new Array(1);
                var16[0] = var14;
                var12 = function(arg0) { // Environment: var0
                    _fun115821: for (var _fun115821_ip = 0;;) switch (_fun115821_ip) {
                        case 0:
                            var1 = arg0;
                            var3 = _closure2_slot20;
                            var2 = 0;
                            if (!(!(var3 >= var2))) {
                                _fun115821_ip = 23;
                                continue _fun115821
                            }
                        case 16:
                            var4 = var1.to;
                            _fun115821_ip = 51;
                            continue _fun115821;
                        case 23:
                            var2 = global;
                            var5 = var2.Math;
                            var3 = var5.max;
                            var2 = var1.to;
                            var0 = _closure2_slot20;
                            var4 = var3.bind(var5)(var2, var0);
                        case 51:
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot3;
                            var0 = 39;
                            var2 = var2[var0];
                            var0 = undefined;
                            var3 = var3.bind(var0)(var2);
                            var2 = var3.updateRoleOrder;
                            var1 = var1.from;
                            var1 = var2.bind(var3)(var1, var4);
                            return var0;
                    }
                };
                var16 = var25.bind(var27)(var12, var16);
                var30 = _closure1_slot5;
                var27 = var30.useCallback;
                var25 = new Array(5);
                var25[0] = var19;
                var25[1] = var18;
                var25[2] = var31;
                var25[3] = var15;
                var25[4] = var4;
                var12 = function() { // Environment: var0
                    _fun115822: for (var _fun115822_ip = 0;;) switch (_fun115822_ip) {
                        case 0:
                            var3 = _closure1_slot23;
                            var2 = _closure1_slot6;
                            var1 = {};
                            var4 = {};
                            var0 = _closure2_slot1;
                            var0 = var0.rolesHeader;
                            var5 = new Array(2);
                            var5[0] = var0;
                            var8 = _closure2_slot13;
                            var0 = undefined;
                            var7 = undefined;
                            if (!var8) {
                                _fun115822_ip = 57;
                                continue _fun115822
                            }
                        case 47:
                            var8 = _closure2_slot1;
                            var7 = var8.edittingRolesHeader;
                        case 57:
                            var5[1] = var7;
                            var4.style = var5;
                            var8 = _closure1_slot22;
                            var11 = _closure1_slot0;
                            var9 = _closure1_slot3;
                            var5 = 40;
                            var5 = var9[var5];
                            var5 = var11.bind(var0)(var5);
                            var7 = var5.TableRowGroupTitle;
                            var5 = {};
                            var13 = 32;
                            var12 = var9[var13];
                            var12 = var11.bind(var0)(var12);
                            var14 = var12.intl;
                            var12 = var14.formatToPlainString;
                            var9 = var9[var13];
                            var9 = var11.bind(var0)(var9);
                            var9 = var9.t;
                            var11 = var9["38N3Vz"];
                            var9 = {};
                            var15 = _closure2_slot19;
                            var17 = var15.length;
                            var15 = global;
                            var15 = var15.HermesInternal;
                            var16 = var15.concat;
                            var15 = '';
                            var15 = var16.bind(var15)(var17);
                            var9.numRoles = var15;
                            var9 = var12.bind(var14)(var11, var9);
                            var5.title = var9;
                            var5 = var8.bind(var0)(var7, var5);
                            var7 = new Array(2);
                            var7[0] = var5;
                            var9 = _closure2_slot13;
                            var8 = null;
                            if (var9) {
                                _fun115822_ip = 531;
                                continue _fun115822
                            }
                        case 217:
                            var9 = _closure2_slot16;
                            var8 = null;
                            if (var9) {
                                _fun115822_ip = 531;
                                continue _fun115822
                            }
                        case 229:
                            var12 = _closure1_slot23;
                            var21 = _closure1_slot0;
                            var18 = _closure1_slot3;
                            var9 = 41;
                            var9 = var18[var9];
                            var9 = var21.bind(var0)(var9);
                            var11 = var9.PressableOpacity;
                            var9 = {};
                            var14 = 'text';
                            var9.accessibilityRole = var14;
                            var14 = var18[var13];
                            var14 = var21.bind(var0)(var14);
                            var16 = var14.intl;
                            var15 = var16.string;
                            var14 = var18[var13];
                            var14 = var21.bind(var0)(var14);
                            var14 = var14.t;
                            var14 = var14["0dOFq+"];
                            var14 = var15.bind(var16)(var14);
                            var9.accessibilityLabel = var14;
                            var14 = _closure2_slot25;
                            var9.onPress = var14;
                            var19 = _closure2_slot1;
                            var14 = var19.reorderButton;
                            var9.style = var14;
                            var16 = _closure1_slot22;
                            var14 = 42;
                            var14 = var18[var14];
                            var14 = var21.bind(var0)(var14);
                            var15 = var14.ArrowsUpDownIcon;
                            var14 = {};
                            var20 = _closure1_slot1;
                            var17 = 17;
                            var17 = var18[var17];
                            var17 = var20.bind(var0)(var17);
                            var17 = var17.colors;
                            var17 = var17.TEXT_LINK;
                            var14.color = var17;
                            var17 = 'sm';
                            var14.size = var17;
                            var15 = var16.bind(var0)(var15, var14);
                            var14 = new Array(2);
                            var14[0] = var15;
                            var17 = _closure1_slot22;
                            var15 = 43;
                            var15 = var18[var15];
                            var15 = var21.bind(var0)(var15);
                            var16 = var15.Text;
                            var15 = {
                                'style': null,
                                'variant': 'text-sm/medium',
                                'color': 'text-link'
                            };
                            var19 = var19.reorderButtonText;
                            var15.style = var19;
                            var19 = var18[var13];
                            var19 = var21.bind(var0)(var19);
                            var20 = var19.intl;
                            var19 = var20.string;
                            var18 = var18[var13];
                            var18 = var21.bind(var0)(var18);
                            var18 = var18.t;
                            var18 = var18["0dOFq+"];
                            var18 = var19.bind(var20)(var18);
                            var15.children = var18;
                            var15 = var17.bind(var0)(var16, var15);
                            var14[1] = var15;
                            var9.children = var14;
                            var8 = var12.bind(var0)(var11, var9);
                        case 531:
                            var7[1] = var8;
                            var4.children = var7;
                            var7 = var3.bind(var0)(var2, var4);
                            var4 = new Array(2);
                            var4[0] = var7;
                            var7 = _closure2_slot13;
                            var5 = null;
                            if (!var7) {
                                _fun115822_ip = 677;
                                continue _fun115822
                            }
                        case 562:
                            var8 = _closure1_slot22;
                            var12 = _closure1_slot0;
                            var9 = _closure1_slot3;
                            var6 = 43;
                            var6 = var9[var6];
                            var6 = var12.bind(var0)(var6);
                            var7 = var6.Text;
                            var6 = {
                                'style': null,
                                'variant': 'text-sm/medium',
                                'color': 'interactive-text-default'
                            };
                            var10 = _closure2_slot1;
                            var10 = var10.rolesBody;
                            var6.style = var10;
                            var10 = var9[var13];
                            var10 = var12.bind(var0)(var10);
                            var11 = var10.intl;
                            var10 = var11.string;
                            var9 = var9[var13];
                            var9 = var12.bind(var0)(var9);
                            var9 = var9.t;
                            var9 = var9.nHcwVl;
                            var9 = var10.bind(var11)(var9);
                            var6.children = var9;
                            var5 = var8.bind(var0)(var7, var6);
                        case 677:
                            var4[1] = var5;
                            var1.children = var4;
                            var0 = var3.bind(var0)(var2, var1);
                            return var0;
                    }
                };
                var27 = var27.bind(var30)(var12, var25);
                var30 = _closure1_slot5;
                var25 = var30.useCallback;
                var12 = new Array(6);
                var12[0] = var19;
                var12[1] = var23;
                var12[2] = var28;
                var12[3] = var32;
                var12[4] = var10;
                var12[5] = var8;
                var10 = function() { // Environment: var0
                    _fun115823: for (var _fun115823_ip = 0;;) switch (_fun115823_ip) {
                        case 0:
                            var1 = _closure2_slot3;
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot3;
                            var0 = 44;
                            var0 = var3[var0];
                            var4 = undefined;
                            var3 = var2.bind(var4)(var0);
                            var2 = var3.isThemeDark;
                            var0 = _closure2_slot4;
                            var0 = var2.bind(var3)(var0);
                            var2 = _closure1_slot1;
                            var3 = _closure1_slot3;
                            if (var1) {
                                _fun115823_ip = 89;
                                continue _fun115823
                            }
                        case 58:
                            if (var0) {
                                _fun115823_ip = 75;
                                continue _fun115823
                            }
                        case 61:
                            var1 = 48;
                            var1 = var3[var1];
                            var11 = var2.bind(var4)(var1);
                            _fun115823_ip = 87;
                            continue _fun115823;
                        case 75:
                            var1 = 47;
                            var1 = var3[var1];
                            var11 = var2.bind(var4)(var1);
                        case 87:
                            _fun115823_ip = 121;
                            continue _fun115823;
                        case 89:
                            if (var0) {
                                _fun115823_ip = 106;
                                continue _fun115823
                            }
                        case 92:
                            var0 = 46;
                            var0 = var3[var0];
                            var0 = var2.bind(var4)(var0);
                            _fun115823_ip = 118;
                            continue _fun115823;
                        case 106:
                            var1 = 45;
                            var1 = var3[var1];
                            var0 = var2.bind(var4)(var1);
                        case 118:
                            var11 = var0;
                        case 121:
                            var0 = _closure2_slot21;
                            var3 = _closure1_slot23;
                            if (var0) {
                                _fun115823_ip = 685;
                                continue _fun115823
                            }
                        case 135:
                            var1 = _closure1_slot6;
                            var0 = {};
                            var12 = _closure2_slot1;
                            var2 = var12.emptySubheaderContainer;
                            var0.style = var2;
                            var5 = _closure1_slot22;
                            var2 = {};
                            var7 = var12.emptyIlloContainer;
                            var2.style = var7;
                            var10 = _closure1_slot22;
                            var8 = _closure1_slot1;
                            var13 = _closure1_slot3;
                            var7 = 49;
                            var7 = var13[var7];
                            var8 = var8.bind(var4)(var7);
                            var7 = {};
                            var13 = var12.emptyIllo;
                            var12 = new Array(2);
                            var12[0] = var13;
                            var14 = _closure2_slot3;
                            var13 = null;
                            if (!var14) {
                                _fun115823_ip = 230;
                                continue _fun115823
                            }
                        case 220:
                            var14 = _closure2_slot1;
                            var13 = var14.emptyIlloLarge;
                        case 230:
                            var12[1] = var13;
                            var7.style = var12;
                            var7.source = var11;
                            var7 = var10.bind(var4)(var8, var7);
                            var2.children = var7;
                            var5 = var5.bind(var4)(var1, var2);
                            var2 = new Array(3);
                            var2[0] = var5;
                            var7 = _closure1_slot23;
                            var8 = _closure1_slot6;
                            var5 = {};
                            var10 = _closure2_slot1;
                            var11 = var10.emptySubheaderBody;
                            var5.style = var11;
                            var14 = _closure1_slot22;
                            var20 = _closure1_slot0;
                            var21 = _closure1_slot3;
                            var12 = 43;
                            var11 = var21[var12];
                            var11 = var20.bind(var4)(var11);
                            var13 = var11.Text;
                            var11 = {
                                'style': null,
                                'variant': 'heading-xl/extrabold',
                                'color': 'mobile-text-heading-primary'
                            };
                            var15 = var10.subheader;
                            var11.style = var15;
                            var17 = 32;
                            var15 = var21[var17];
                            var15 = var20.bind(var4)(var15);
                            var18 = var15.intl;
                            var16 = var18.string;
                            var15 = var21[var17];
                            var15 = var20.bind(var4)(var15);
                            var15 = var15.t;
                            var15 = var15.ALlnbi;
                            var15 = var16.bind(var18)(var15);
                            var11.children = var15;
                            var13 = var14.bind(var4)(var13, var11);
                            var11 = new Array(3);
                            var11[0] = var13;
                            var14 = _closure1_slot22;
                            var12 = var21[var12];
                            var12 = var20.bind(var4)(var12);
                            var13 = var12.Text;
                            var12 = {
                                'style': null,
                                'variant': 'text-sm/medium',
                                'color': 'text-default'
                            };
                            var15 = var10.subheaderBody;
                            var12.style = var15;
                            var15 = var21[var17];
                            var15 = var20.bind(var4)(var15);
                            var18 = var15.intl;
                            var16 = var18.string;
                            var15 = var21[var17];
                            var15 = var20.bind(var4)(var15);
                            var15 = var15.t;
                            var15 = var15["1ydhVp"];
                            var15 = var16.bind(var18)(var15);
                            var12.children = var15;
                            var12 = var14.bind(var4)(var13, var12);
                            var11[1] = var12;
                            var13 = _closure1_slot22;
                            var12 = {};
                            var14 = var10.subheaderButton;
                            var12.style = var14;
                            var16 = _closure1_slot22;
                            var14 = 50;
                            var14 = var21[var14];
                            var14 = var20.bind(var4)(var14);
                            var15 = var14.Button;
                            var14 = {};
                            var18 = var21[var17];
                            var18 = var20.bind(var4)(var18);
                            var19 = var18.intl;
                            var18 = var19.string;
                            var17 = var21[var17];
                            var17 = var20.bind(var4)(var17);
                            var17 = var17.t;
                            var17 = var17.JZZjQK;
                            var17 = var18.bind(var19)(var17);
                            var14.text = var17;
                            var17 = _closure2_slot22;
                            var14.onPress = var17;
                            var14 = var16.bind(var4)(var15, var14);
                            var12.children = var14;
                            var12 = var13.bind(var4)(var8, var12);
                            var11[2] = var12;
                            var5.children = var11;
                            var5 = var7.bind(var4)(var8, var5);
                            var2[1] = var5;
                            var7 = _closure1_slot22;
                            var5 = {};
                            var10 = var10.divider;
                            var5.style = var10;
                            var5 = var7.bind(var4)(var8, var5);
                            var2[2] = var5;
                            var0.children = var2;
                            var0 = var3.bind(var4)(var1, var0);
                            _fun115823_ip = 934;
                            continue _fun115823;
                        case 685:
                            var2 = _closure1_slot24;
                            var1 = {};
                            var7 = _closure1_slot6;
                            var5 = {};
                            var12 = _closure2_slot1;
                            var8 = var12.subheaderContainer;
                            var5.style = var8;
                            var11 = _closure1_slot22;
                            var15 = _closure1_slot0;
                            var16 = _closure1_slot3;
                            var8 = 43;
                            var8 = var16[var8];
                            var8 = var15.bind(var4)(var8);
                            var10 = var8.Text;
                            var8 = {
                                'style': null,
                                'variant': 'text-sm/medium',
                                'color': 'interactive-text-default'
                            };
                            var12 = var12.subheaderDescription;
                            var8.style = var12;
                            var12 = 32;
                            var13 = var16[var12];
                            var13 = var15.bind(var4)(var13);
                            var14 = var13.intl;
                            var13 = var14.string;
                            var12 = var16[var12];
                            var12 = var15.bind(var4)(var12);
                            var12 = var12.t;
                            var12 = var12["1ydhVp"];
                            var12 = var13.bind(var14)(var12);
                            var8.children = var12;
                            var10 = var11.bind(var4)(var10, var8);
                            var8 = new Array(2);
                            var8[0] = var10;
                            var11 = _closure2_slot5;
                            var10 = null;
                            var10 = var10 != var11;
                            if (!var10) {
                                _fun115823_ip = 868;
                                continue _fun115823
                            }
                        case 844:
                            var13 = _closure1_slot22;
                            var12 = _closure1_slot28;
                            var11 = {};
                            var14 = _closure2_slot5;
                            var11.guild = var14;
                            var10 = var13.bind(var4)(var12, var11);
                        case 868:
                            var8[1] = var10;
                            var5.children = var8;
                            var7 = var3.bind(var4)(var7, var5);
                            var5 = new Array(2);
                            var5[0] = var7;
                            var8 = _closure1_slot22;
                            var7 = _closure1_slot6;
                            var6 = {};
                            var9 = _closure2_slot1;
                            var9 = var9.divider;
                            var6.style = var9;
                            var6 = var8.bind(var4)(var7, var6);
                            var5[1] = var6;
                            var1.children = var5;
                            var0 = var3.bind(var4)(var2, var1);
                        case 934:
                            return var0;
                    }
                };
                var25 = var25.bind(var30)(var10, var12);
                var30 = _closure1_slot5;
                var12 = var30.useCallback;
                var10 = new Array(6);
                var10[0] = var19;
                var10[1] = var17;
                var10[2] = var8;
                var10[3] = var29;
                var10[4] = var24;
                var10[5] = var9;
                var9 = function() { // Environment: var0
                    _fun115824: for (var _fun115824_ip = 0;;) switch (_fun115824_ip) {
                        case 0:
                            var1 = _closure2_slot5;
                            var0 = null;
                            if (!(var0 != var1)) {
                                _fun115824_ip = 217;
                                continue _fun115824
                            }
                        case 16:
                            var1 = _closure2_slot6;
                            if (!(var0 != var1)) {
                                _fun115824_ip = 217;
                                continue _fun115824
                            }
                        case 27:
                            var2 = _closure1_slot2;
                            var11 = _closure1_slot3;
                            var1 = 35;
                            var1 = var11[var1];
                            var4 = undefined;
                            var7 = var2.bind(var4)(var1);
                            var3 = var7.isRoleHigher;
                            var8 = _closure2_slot5;
                            var14 = _closure2_slot11;
                            var13 = _closure2_slot12;
                            var10 = _closure2_slot6;
                            var16 = var7;
                            var15 = var8;
                            var12 = var10;
                            var1 = var16[var3](var15, var14, var13, var12, var11);
                            var9 = !var1;
                            var3 = _closure1_slot22;
                            var2 = _closure1_slot6;
                            var1 = {};
                            var6 = _closure2_slot1;
                            var6 = var6.everyoneWrapper;
                            var1.style = var6;
                            var7 = _closure1_slot22;
                            var6 = _closure1_slot1;
                            var5 = 51;
                            var5 = var11[var5];
                            var6 = var6.bind(var4)(var5);
                            var5 = {};
                            var5.role = var10;
                            var5.locked = var9;
                            var9 = function() {
                                var2 = _closure2_slot23;
                                var1 = _closure2_slot6;
                                var0 = undefined;
                                var0 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var5.onPress = var9;
                            var8 = var8.id;
                            var5.guildId = var8;
                            var8 = false;
                            var5.sorting = var8;
                            var8 = 0;
                            var5.numMembers = var8;
                            var8 = true;
                            var5.isEveryoneRole = var8;
                            var5.isLastRole = var8;
                            var5.isFirstRole = var8;
                            var5 = var7.bind(var4)(var6, var5);
                            var1.children = var5;
                            var1 = var3.bind(var4)(var2, var1);
                            return var1;
                        case 217:
                            return var0;
                    }
                };
                var30 = var12.bind(var30)(var9, var10);
                var12 = _closure1_slot5;
                var10 = var12.useCallback;
                var9 = new Array(7);
                var9[0] = var8;
                var32 = var18.length;
                var9[1] = var32;
                var9[2] = var29;
                var9[3] = var24;
                var9[4] = var15;
                var9[5] = var17;
                var9[6] = var6;
                var6 = function(arg0, arg1) { // Environment: var0
                    _fun115826: for (var _fun115826_ip = 0;;) switch (_fun115826_ip) {
                        case 0:
                            var1 = arg0;
                            var7 = arg1;
                            var0 = _closure2_slot5;
                            var10 = null;
                            if (!(var10 != var0)) {
                                _fun115826_ip = 253;
                                continue _fun115826
                            }
                        case 22:
                            var0 = var1.role;
                            var8 = var1.memberCount;
                            var2 = _closure1_slot2;
                            var13 = _closure1_slot3;
                            var1 = 35;
                            var1 = var13[var1];
                            var4 = undefined;
                            var6 = var2.bind(var4)(var1);
                            var3 = var6.isRoleHigher;
                            var11 = _closure2_slot5;
                            var16 = _closure2_slot11;
                            var15 = _closure2_slot12;
                            var18 = var6;
                            var17 = var11;
                            var14 = var0;
                            var1 = var18[var3](var17, var16, var15, var14, var13);
                            var9 = !var1;
                            var1 = _closure2_slot19;
                            var2 = var1.length;
                            var1 = 1;
                            var6 = var2 - var1;
                            var3 = _closure1_slot22;
                            var2 = _closure1_slot1;
                            var1 = 51;
                            var1 = var13[var1];
                            var2 = var2.bind(var4)(var1);
                            var1 = {};
                            var13 = _closure2_slot13;
                            var1.sorting = var13;
                            var11 = var10 != var11;
                            if (!var11) {
                                _fun115826_ip = 156;
                                continue _fun115826
                            }
                        case 147:
                            var12 = _closure1_slot8;
                            var11 = var12.bind(var4)(var0);
                        case 156:
                            var1.isEveryoneRole = var11;
                            var1.role = var0;
                            var1.locked = var9;
                            var9 = _closure2_slot23;
                            var1.onPress = var9;
                            var9 = _closure2_slot5;
                            var10 = var10 == var9;
                            var9 = undefined;
                            if (var10) {
                                _fun115826_ip = 201;
                                continue _fun115826
                            }
                        case 192:
                            var10 = _closure2_slot5;
                            var9 = var10.id;
                        case 201:
                            var1.guildId = var9;
                            var1.numMembers = var8;
                            var8 = 0;
                            var8 = var8 === var7;
                            var1.isFirstRole = var8;
                            var6 = var7 === var6;
                            var1.isLastRole = var6;
                            var5 = _closure2_slot24;
                            var1.onLongPress = var5;
                            var0 = var0.id;
                            var0 = var3.bind(var4)(var2, var1, var0);
                            return var0;
                        case 253:
                            var3 = _closure1_slot22;
                            var2 = _closure1_slot24;
                            var1 = undefined;
                            var0 = {};
                            var0 = var3.bind(var1)(var2, var0);
                            return var0;
                    }
                };
                var12 = var10.bind(var12)(var6, var9);
                var17 = _closure1_slot5;
                var10 = var17.useCallback;
                var9 = function(arg0, arg1) { // Environment: var0
                    var1 = arg0;
                    var0 = arg1;
                    var0 = var1 !== var0;
                    return var0;
                };
                var6 = new Array(0);
                var17 = var10.bind(var17)(var9, var6);
                var10 = _closure1_slot5;
                var9 = var10.useEffect;
                var6 = new Array(6);
                var6[0] = var23;
                var6[1] = var11;
                var6[2] = var4;
                var6[3] = var28;
                var6[4] = var15;
                var6[5] = var2;
                var4 = function() { // Environment: var0
                    _fun115828: for (var _fun115828_ip = 0;;) switch (_fun115828_ip) {
                        case 0:
                            var3 = _closure2_slot2;
                            var2 = var3.setOptions;
                            var1 = {};
                            var7 = _closure2_slot13;
                            var0 = undefined;
                            var6 = undefined;
                            if (!var7) {
                                _fun115828_ip = 35;
                                continue _fun115828
                            }
                        case 28:
                            var6 = function() { // Environment: var5
                                var3 = _closure1_slot22;
                                var7 = _closure1_slot0;
                                var8 = _closure1_slot3;
                                var0 = 52;
                                var0 = var8[var0];
                                var2 = undefined;
                                var0 = var7.bind(var2)(var0);
                                var1 = var0.HeaderActionButton;
                                var0 = {};
                                var4 = _closure2_slot25;
                                var0.onPress = var4;
                                var4 = 32;
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
                                var0 = var3.bind(var2)(var1, var0);
                                return var0;
                            };
                        case 35:
                            var1.headerLeft = var6;
                            var6 = _closure2_slot13;
                            if (var6) {
                                _fun115828_ip = 65;
                                continue _fun115828
                            }
                        case 47:
                            var6 = _closure2_slot21;
                            var4 = undefined;
                            if (!var6) {
                                _fun115828_ip = 63;
                                continue _fun115828
                            }
                        case 56:
                            var4 = function() { // Environment: var5
                                var3 = _closure1_slot22;
                                var7 = _closure1_slot0;
                                var8 = _closure1_slot3;
                                var0 = 52;
                                var0 = var8[var0];
                                var2 = undefined;
                                var0 = var7.bind(var2)(var0);
                                var1 = var0.HeaderActionButton;
                                var0 = {};
                                var5 = _closure2_slot22;
                                var0.onPress = var5;
                                var5 = _closure1_slot1;
                                var4 = 53;
                                var4 = var8[var4];
                                var4 = var5.bind(var2)(var4);
                                var0.source = var4;
                                var4 = 32;
                                var5 = var8[var4];
                                var5 = var7.bind(var2)(var5);
                                var6 = var5.intl;
                                var5 = var6.string;
                                var4 = var8[var4];
                                var4 = var7.bind(var2)(var4);
                                var4 = var4.t;
                                var4 = var4.JZZjQK;
                                var4 = var5.bind(var6)(var4);
                                var0.accessibilityLabel = var4;
                                var0 = var3.bind(var2)(var1, var0);
                                return var0;
                            };
                        case 63:
                            _fun115828_ip = 72;
                            continue _fun115828;
                        case 65:
                            var4 = function() { // Environment: var5
                                var3 = _closure1_slot22;
                                var7 = _closure1_slot0;
                                var8 = _closure1_slot3;
                                var0 = 52;
                                var0 = var8[var0];
                                var2 = undefined;
                                var0 = var7.bind(var2)(var0);
                                var1 = var0.HeaderActionButton;
                                var0 = {};
                                var4 = _closure2_slot26;
                                var0.onPress = var4;
                                var4 = 32;
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
                                var0 = var3.bind(var2)(var1, var0);
                                return var0;
                            };
                        case 72:
                            var1.headerRight = var4;
                            var7 = _closure1_slot0;
                            var8 = _closure1_slot3;
                            var4 = 32;
                            var5 = var8[var4];
                            var5 = var7.bind(var0)(var5);
                            var6 = var5.intl;
                            var5 = var6.string;
                            var4 = var8[var4];
                            var4 = var7.bind(var0)(var4);
                            var4 = var4.t;
                            var4 = var4.UvdTMj;
                            var4 = var5.bind(var6)(var4);
                            var1.headerTitle = var4;
                            var1 = var2.bind(var3)(var1);
                            return var0;
                    }
                };
                var4 = var9.bind(var10)(var4, var6);
                var9 = _closure1_slot5;
                var6 = var9.useEffect;
                var4 = new Array(3);
                var4[0] = var8;
                var4[1] = var15;
                var4[2] = var2;
                var2 = function() { // Environment: var0
                    _fun115832: for (var _fun115832_ip = 0;;) switch (_fun115832_ip) {
                        case 0:
                            var0 = _closure2_slot13;
                            if (!var0) {
                                _fun115832_ip = 20;
                                continue _fun115832
                            }
                        case 10:
                            var1 = _closure2_slot5;
                            var0 = null;
                            if (!(var0 == var1)) {
                                _fun115832_ip = 57;
                                continue _fun115832
                            }
                        case 20:
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot3;
                            var0 = 39;
                            var1 = var1[var0];
                            var0 = undefined;
                            var1 = var2.bind(var0)(var1);
                            var0 = var1.stopReordering;
                            var0 = var0.bind(var1)();
                            _fun115832_ip = 102;
                            continue _fun115832;
                        case 57:
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot3;
                            var0 = 39;
                            var1 = var1[var0];
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.startReordering;
                            var0 = _closure2_slot5;
                            var0 = var0.id;
                            var0 = var1.bind(var2)(var0);
                        case 102:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot3;
                            var0 = 54;
                            var1 = var1[var0];
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.isIOS;
                            var1 = var1.bind(var2)();
                            if (!var1) {
                                _fun115832_ip = 169;
                                continue _fun115832
                            }
                        case 140:
                            var3 = _closure2_slot2;
                            var2 = var3.setOptions;
                            var1 = {};
                            var4 = _closure2_slot13;
                            var4 = !var4;
                            var1.gestureEnabled = var4;
                            var1 = var2.bind(var3)(var1);
                        case 169:
                            return var0;
                    }
                };
                var2 = var6.bind(var9)(var2, var4);
                var6 = _closure1_slot5;
                var4 = var6.useEffect;
                var2 = new Array(2);
                var2[0] = var8;
                var2[1] = var1;
                var1 = function() { // Environment: var0
                    _fun115833: for (var _fun115833_ip = 0;;) switch (_fun115833_ip) {
                        case 0:
                            var2 = _closure2_slot5;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun115833_ip = 145;
                                continue _fun115833
                            }
                        case 16:
                            var4 = _closure2_slot7;
                            var5 = _closure1_slot0;
                            var3 = _closure1_slot3;
                            var2 = 55;
                            var2 = var3[var2];
                            var3 = undefined;
                            var2 = var5.bind(var3)(var2);
                            var2 = var2.MAX_PREFETCH_MEMBER_COUNT;
                            if (!(var4 <= var2)) {
                                _fun115833_ip = 105;
                                continue _fun115833
                            }
                        case 55:
                            var4 = _closure1_slot1;
                            var5 = _closure1_slot3;
                            var2 = 56;
                            var2 = var5[var2];
                            var8 = var4.bind(var3)(var2);
                            var7 = var8.requestMembers;
                            var2 = _closure2_slot5;
                            var12 = var2.id;
                            var11 = '';
                            var10 = 0;
                            var9 = false;
                            var13 = var8;
                            var2 = var13[var7](var12, var11, var10, var9, var8);
                        case 105:
                            var2 = _closure1_slot2;
                            var4 = _closure1_slot3;
                            var1 = 57;
                            var1 = var4[var1];
                            var2 = var2.bind(var3)(var1);
                            var1 = var2.fetchMemberCounts;
                            var0 = _closure2_slot5;
                            var0 = var0.id;
                            var0 = var1.bind(var2)(var0);
                        case 145:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var4.bind(var6)(var1, var2);
                var4 = _closure1_slot5;
                var2 = var4.useEffect;
                var1 = new Array(1);
                var1[0] = var15;
                var0 = function() { // Environment: var0
                    var0 = function() { // Environment: var0
                        _fun115835: for (var _fun115835_ip = 0;;) switch (_fun115835_ip) {
                            case 0:
                                var0 = _closure2_slot13;
                                if (!var0) {
                                    _fun115835_ip = 45;
                                    continue _fun115835
                                }
                            case 10:
                                var2 = _closure1_slot1;
                                var1 = _closure1_slot3;
                                var0 = 39;
                                var1 = var1[var0];
                                var0 = undefined;
                                var1 = var2.bind(var0)(var1);
                                var0 = var1.stopReordering;
                                var0 = var0.bind(var1)();
                            case 45:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    return var0;
                };
                var0 = var2.bind(var4)(var0, var1);
                var2 = _closure1_slot23;
                var1 = _closure1_slot24;
                var0 = {};
                var6 = null;
                if (var15) {
                    _fun115798_ip = 1349;
                    continue _fun115798
                }
            case 1199:
                var4 = 10;
                var4 = var7 < var4;
                var6 = null;
                if (var4) {
                    _fun115798_ip = 1349;
                    continue _fun115798
                }
            case 1214:
                var8 = _closure1_slot22;
                var7 = _closure1_slot6;
                var4 = {};
                var10 = var19.searchWrapper;
                var9 = new Array(2);
                var9[0] = var10;
                var10 = {};
                var11 = 0;
                if (!var31) {
                    _fun115798_ip = 1275;
                    continue _fun115798
                }
            case 1245:
                var24 = _closure1_slot1;
                var29 = _closure1_slot3;
                var23 = 17;
                var23 = var29[var23];
                var23 = var24.bind(var3)(var23);
                var23 = var23.spacing;
                var11 = var23.PX_16;
            case 1275:
                var10.paddingBottom = var11;
                var9[1] = var10;
                var4.style = var9;
                var11 = _closure1_slot22;
                var10 = _closure1_slot0;
                var23 = _closure1_slot3;
                var9 = 58;
                var9 = var23[var9];
                var9 = var10.bind(var3)(var9);
                var10 = var9.SearchField;
                var9 = {};
                var23 = 'md';
                var9.size = var23;
                var9.onChange = var22;
                var9 = var11.bind(var3)(var10, var9);
                var4.children = var9;
                var6 = var8.bind(var3)(var7, var4);
            case 1349:
                var4 = new Array(4);
                var4[0] = var6;
                var8 = _closure1_slot22;
                var7 = _closure1_slot6;
                var6 = {};
                var9 = null;
                if (!var15) {
                    _fun115798_ip = 1637;
                    continue _fun115798
                }
            case 1375:
                var22 = _closure1_slot23;
                var11 = _closure1_slot24;
                var10 = {};
                var24 = var27.bind(var3)();
                var23 = new Array(2);
                var23[0] = var24;
                var24 = null;
                if (var28) {
                    _fun115798_ip = 1623;
                    continue _fun115798
                }
            case 1405:
                var33 = _closure1_slot22;
                var40 = _closure1_slot0;
                var41 = _closure1_slot3;
                var29 = 59;
                var29 = var41[var29];
                var29 = var40.bind(var3)(var29);
                var32 = var29.FormRow;
                var29 = {};
                var36 = _closure1_slot22;
                var38 = _closure1_slot1;
                var37 = 60;
                var34 = var41[var37];
                var35 = var38.bind(var3)(var34);
                var34 = {};
                var39 = var19.emptyRolesIcon;
                var34.style = var39;
                var37 = var41[var37];
                var37 = var38.bind(var3)(var37);
                var37 = var37.Sizes;
                var37 = var37.LARGE;
                var34.size = var37;
                var37 = 61;
                var37 = var41[var37];
                var37 = var38.bind(var3)(var37);
                var34.source = var37;
                var34 = var36.bind(var3)(var35, var34);
                var29.leading = var34;
                var36 = _closure1_slot22;
                var34 = 43;
                var34 = var41[var34];
                var34 = var40.bind(var3)(var34);
                var35 = var34.Text;
                var34 = {
                    'variant': 'text-md/semibold',
                    'color': 'interactive-text-default'
                };
                var37 = 32;
                var38 = var41[var37];
                var38 = var40.bind(var3)(var38);
                var39 = var38.intl;
                var38 = var39.string;
                var37 = var41[var37];
                var37 = var40.bind(var3)(var37);
                var37 = var37.t;
                var37 = var37.nZfHsf;
                var37 = var38.bind(var39)(var37);
                var34.children = var37;
                var34 = var36.bind(var3)(var35, var34);
                var29.label = var34;
                var24 = var33.bind(var3)(var32, var29);
            case 1623:
                var23[1] = var24;
                var10.children = var23;
                var9 = var22.bind(var3)(var11, var10);
            case 1637:
                var6.children = var9;
                var6 = var8.bind(var3)(var7, var6);
                var4[1] = var6;
                var8 = _closure1_slot22;
                var7 = _closure1_slot6;
                var6 = {};
                var9 = var19.container;
                var6.style = var9;
                var11 = _closure1_slot22;
                var10 = _closure1_slot1;
                var22 = _closure1_slot3;
                var9 = 62;
                var9 = var22[var9];
                var10 = var10.bind(var3)(var9);
                var9 = {};
                var9.ref = var21;
                var21 = null;
                if (var15) {
                    _fun115798_ip = 1768;
                    continue _fun115798
                }
            case 1705:
                var24 = _closure1_slot23;
                var23 = _closure1_slot24;
                var22 = {};
                var29 = null;
                if (var31) {
                    _fun115798_ip = 1724;
                    continue _fun115798
                }
            case 1720:
                var29 = var25.bind(var3)();
            case 1724:
                var25 = new Array(3);
                var25[0] = var29;
                var29 = null;
                if (var31) {
                    _fun115798_ip = 1741;
                    continue _fun115798
                }
            case 1737:
                var29 = var30.bind(var3)();
            case 1741:
                var25[1] = var29;
                var26 = null;
                if (!var28) {
                    _fun115798_ip = 1754;
                    continue _fun115798
                }
            case 1750:
                var26 = var27.bind(var3)();
            case 1754:
                var25[2] = var26;
                var22.children = var25;
                var21 = var24.bind(var3)(var23, var22);
            case 1768:
                var9.header = var21;
                var21 = var19.container;
                var9.wrapperStyles = var21;
                var21 = var19.scrollContainer;
                var19 = new Array(2);
                var19[0] = var21;
                var19[1] = var20;
                var9.contentContainerStyle = var19;
                var9.data = var18;
                var9.rowHasChanged = var17;
                var9.onRowMoved = var16;
                var15 = !var15;
                var9.disableSorting = var15;
                var15 = var14 >= var13;
                var13 = undefined;
                if (!var15) {
                    _fun115798_ip = 1839;
                    continue _fun115798
                }
            case 1836:
                var13 = var14;
            case 1839:
                var9.minDraggableIndex = var13;
                var9.renderRow = var12;
                var12 = 'handled';
                var9.keyboardShouldPersistTaps = var12;
                var12 = 16;
                var9.scrollEventThrottle = var12;
                var12 = true;
                var9.scrollEnabled = var12;
                var9 = var11.bind(var3)(var10, var9);
                var6.children = var9;
                var6 = var8.bind(var3)(var7, var6);
                var4[2] = var6;
                var7 = _closure1_slot22;
                var6 = _closure1_slot0;
                var8 = _closure1_slot3;
                var5 = 63;
                var5 = var8[var5];
                var5 = var6.bind(var3)(var5);
                var6 = var5.NavScrim;
                var5 = {};
                var5 = var7.bind(var3)(var6, var5);
                var4[3] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 3198, 1675, 1216, 1599, 1674, 1410, 3093, 9926, 14801, 14802, 660, 1369, 33, 1297, 671, 4683, 795, 14803, 566, 14716, 8180, 3214, 1358, 3280, 14804, 1307, 6561, 5385, 8316, 1234, 1469, 7712, 3098, 4303, 14805, 14814, 14815, 5368, 4905, 11140, 3943, 3208, 14816, 14817, 14818, 14819, 4705, 4085, 14820, 5327, 11439, 478, 14812, 4680, 9927, 7037, 5383, 4087, 8169, 13492, 5207, 2]);