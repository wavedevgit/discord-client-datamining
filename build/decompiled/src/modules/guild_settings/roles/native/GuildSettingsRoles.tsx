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
            _fun115529: for (var _fun115529_ip = 0;;) switch (_fun115529_ip) {
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
                        _fun115529_ip = 52;
                        continue _fun115529
                    }
                case 44:
                    var2 = '';
                    var0 = var2 === var5;
                case 52:
                    if (var0) {
                        _fun115529_ip = 126;
                        continue _fun115529
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
                        _fun115529_ip = 172;
                        continue _fun115529
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
                    _fun115529_ip = 176;
                    continue _fun115529;
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
            _fun115531: for (var _fun115531_ip = 0;;) switch (_fun115531_ip) {
                case 0:
                    var1 = _closure2_slot1;
                    if (var1) {
                        _fun115531_ip = 59;
                        continue _fun115531
                    }
                case 10:
                    var3 = _closure1_slot26;
                    var1 = _closure2_slot2;
                    var2 = undefined;
                    var1 = var3.bind(var2)(var1);
                    if (var1) {
                        _fun115531_ip = 46;
                        continue _fun115531
                    }
                case 31:
                    var3 = _closure2_slot4;
                    var1 = _closure2_slot0;
                    var1 = var3.bind(var2)(var1);
                    _fun115531_ip = 59;
                    continue _fun115531;
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
        _fun115532: for (var _fun115532_ip = 0;;) switch (_fun115532_ip) {
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
                    _fun115532_ip = 343;
                    continue _fun115532
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
                _fun115532_ip = 419;
                continue _fun115532;
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
        _fun115535: for (var _fun115535_ip = 0;;) switch (_fun115535_ip) {
            case 0:
                var1 = arg0;
                var6 = var1.guildId;
                var _closure2_slot0 = var6;
                var19 = var1.contentContainerStyle;
                var1 = _closure1_slot25;
                var3 = undefined;
                var18 = var1.bind(var3)();
                var _closure2_slot1 = var18;
                var2 = _closure1_slot5;
                var1 = var2.useRef;
                var25 = null;
                var20 = var1.bind(var2)(var25);
                var14 = _closure1_slot0;
                var17 = _closure1_slot3;
                var1 = 33;
                var1 = var17[var1];
                var2 = var14.bind(var3)(var1);
                var1 = var2.useNavigation;
                var2 = var1.bind(var2)();
                var _closure2_slot2 = var2;
                var4 = _closure1_slot1;
                var1 = 34;
                var1 = var17[var1];
                var1 = var4.bind(var3)(var1);
                var10 = var1.bind(var3)();
                var _closure2_slot3 = var10;
                var12 = 21;
                var1 = var17[var12];
                var8 = var14.bind(var3)(var1);
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
                var1 = var17[var12];
                var9 = var14.bind(var3)(var1);
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
                    _fun115537: for (var _fun115537_ip = 0;;) switch (_fun115537_ip) {
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
                                _fun115537_ip = 70;
                                continue _fun115537
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
                                _fun115537_ip = 101;
                                continue _fun115537
                            }
                        case 96:
                            var7 = var5.id;
                        case 101:
                            var8 = var8.bind(var9)(var7);
                            var9 = var1 != var8;
                            var7 = 0;
                            if (!var9) {
                                _fun115537_ip = 118;
                                continue _fun115537
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
                                _fun115537_ip = 147;
                                continue _fun115537
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
                                _fun115537_ip = 242;
                                continue _fun115537
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
                var15 = var4.roleMemberCount;
                var _closure2_slot8 = var15;
                var21 = var4.sortedGuildRoles;
                var _closure2_slot9 = var21;
                var16 = var4.rolesOrder;
                var _closure2_slot10 = var16;
                var31 = var4.currentUserId;
                var _closure2_slot11 = var31;
                var28 = var4.highestRole;
                var _closure2_slot12 = var28;
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
                        _fun115540: for (var _fun115540_ip = 0;;) switch (_fun115540_ip) {
                            case 0:
                                var1 = _closure3_slot1;
                                var4 = undefined;
                                if (var1) {
                                    _fun115540_ip = 16;
                                    continue _fun115540
                                }
                            case 14:
                                return var4;
                            case 16:
                                var1 = global;
                                var3 = var1.setTimeout;
                                var2 = function() { // Environment: var0
                                    _fun115541: for (var _fun115541_ip = 0;;) switch (_fun115541_ip) {
                                        case 0:
                                            var0 = _closure3_slot0;
                                            var1 = var0.current;
                                            var3 = null;
                                            var0 = var3 == var1;
                                            var2 = var1;
                                            if (var0) {
                                                _fun115541_ip = 37;
                                                continue _fun115541
                                            }
                                        case 24:
                                            var1 = var1._listRef;
                                            var0 = var3 == var1;
                                            var2 = var1;
                                        case 37:
                                            var1 = var2;
                                            if (var0) {
                                                _fun115541_ip = 55;
                                                continue _fun115541
                                            }
                                        case 43:
                                            var2 = var2.current;
                                            var0 = var3 == var2;
                                            var1 = var2;
                                        case 55:
                                            if (var0) {
                                                _fun115541_ip = 68;
                                                continue _fun115541
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
                var4 = var4.bind(var3)(var20);
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
                        _fun115544: for (var _fun115544_ip = 0;;) switch (_fun115544_ip) {
                            case 0:
                                var3 = _closure1_slot12;
                                var2 = var3.getGuild;
                                var0 = _closure3_slot0;
                                var4 = var2.bind(var3)(var0);
                                var0 = {};
                                var2 = null;
                                var2 = var2 != var4;
                                if (!var2) {
                                    _fun115544_ip = 50;
                                    continue _fun115544
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
                        _fun115545: for (var _fun115545_ip = 0;;) switch (_fun115545_ip) {
                            case 0:
                                var0 = _closure3_slot2;
                                if (!var0) {
                                    _fun115545_ip = 14;
                                    continue _fun115545
                                }
                            case 10:
                                var0 = _closure3_slot1;
                            case 14:
                                if (var0) {
                                    _fun115545_ip = 74;
                                    continue _fun115545
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
                var11 = _closure1_slot5;
                var6 = var11.useState;
                var4 = false;
                var11 = var6.bind(var11)(var4);
                var6 = _closure1_slot4;
                var4 = 2;
                var6 = var6.bind(var3)(var11, var4);
                var11 = 0;
                var13 = var6[var11];
                var _closure2_slot13 = var13;
                var4 = 1;
                var4 = var6[var4];
                var _closure2_slot14 = var4;
                var4 = _closure1_slot27;
                var4 = var4.bind(var3)(var21, var13);
                var6 = var4.filteredRoles;
                var _closure2_slot15 = var6;
                var30 = var4.hasSearchQuery;
                var _closure2_slot16 = var30;
                var4 = var4.setSearchQuery;
                var _closure2_slot17 = var4;
                var12 = var17[var12];
                var17 = var14.bind(var3)(var12);
                var14 = var17.useStateFromStoresArray;
                var12 = new Array(1);
                var12[0] = var7;
                var7 = function() { // Environment: var0
                    _fun115546: for (var _fun115546_ip = 0;;) switch (_fun115546_ip) {
                        case 0:
                            var2 = _closure2_slot10;
                            var0 = null;
                            if (!(var0 == var2)) {
                                _fun115546_ip = 19;
                                continue _fun115546
                            }
                        case 13:
                            var0 = new Array(0);
                            _fun115546_ip = 46;
                            continue _fun115546;
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
                var17 = var14.bind(var17)(var12, var7);
                var _closure2_slot18 = var17;
                var14 = _closure1_slot5;
                var12 = var14.useMemo;
                var7 = new Array(8);
                var7[0] = var8;
                var7[1] = var21;
                var7[2] = var17;
                var7[3] = var16;
                var7[4] = var15;
                var7[5] = var31;
                var7[6] = var28;
                var7[7] = var6;
                var6 = function() { // Environment: var0
                    _fun115547: for (var _fun115547_ip = 0;;) switch (_fun115547_ip) {
                        case 0:
                            var2 = _closure2_slot10;
                            var3 = null;
                            if (!(var3 == var2)) {
                                _fun115547_ip = 21;
                                continue _fun115547
                            }
                        case 15:
                            var5 = _closure2_slot15;
                            _fun115547_ip = 25;
                            continue _fun115547;
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
                                _fun115549: for (var _fun115549_ip = 0;;) switch (_fun115549_ip) {
                                    case 0:
                                        var3 = arg0;
                                        var0 = {};
                                        var0.role = var3;
                                        var2 = _closure2_slot8;
                                        var1 = null;
                                        var5 = var1 == var2;
                                        var2 = undefined;
                                        if (var5) {
                                            _fun115549_ip = 41;
                                            continue _fun115549
                                        }
                                    case 28:
                                        var4 = _closure2_slot8;
                                        var3 = var3.id;
                                        var2 = var4[var3];
                                    case 41:
                                        var3 = var1 != var2;
                                        var1 = 0;
                                        if (!var3) {
                                            _fun115549_ip = 53;
                                            continue _fun115549
                                        }
                                    case 50:
                                        var1 = var2;
                                    case 53:
                                        var0.memberCount = var1;
                                        return var0;
                                }
                            };
                            var5 = var4.bind(var5)(var2);
                            var _closure3_slot0 = var5;
                            var2 = _closure2_slot5;
                            var4 = var3 != var2;
                            var2 = 0;
                            var3 = 0;
                            if (!var4) {
                                _fun115547_ip = 96;
                                continue _fun115547
                            }
                        case 78:
                            var6 = var5.findIndex;
                            var4 = function(arg0) { // Environment: var1
                                _fun115550: for (var _fun115550_ip = 0;;) switch (_fun115550_ip) {
                                    case 0:
                                        var1 = arg0;
                                        var4 = _closure1_slot2;
                                        var3 = _closure1_slot3;
                                        var0 = 35;
                                        var0 = var3[var0];
                                        var3 = undefined;
                                        var8 = var4.bind(var3)(var0);
                                        var7 = var8.isRoleHigher;
                                        var12 = _closure2_slot5;
                                        var11 = _closure2_slot11;
                                        var10 = _closure2_slot12;
                                        var9 = var1.role;
                                        var13 = var8;
                                        var0 = var13[var7](var12, var11, var10, var9, var8);
                                        var4 = !var0;
                                        var0 = !var4;
                                        if (var4) {
                                            _fun115550_ip = 89;
                                            continue _fun115550
                                        }
                                    case 71:
                                        var2 = _closure1_slot8;
                                        var1 = var1.role;
                                        var1 = var2.bind(var3)(var1);
                                        var0 = !var1;
                                    case 89:
                                        return var0;
                                }
                            };
                            var3 = var6.bind(var5)(var4);
                        case 96:
                            if (!(!(var3 >= var2))) {
                                _fun115547_ip = 106;
                                continue _fun115547
                            }
                        case 100:
                            var4 = new Array(0);
                            _fun115547_ip = 123;
                            continue _fun115547;
                        case 106:
                            var6 = var5.filter;
                            var1 = function(arg0, arg1) { // Environment: var1
                                _fun115551: for (var _fun115551_ip = 0;;) switch (_fun115551_ip) {
                                    case 0:
                                        var2 = _closure2_slot5;
                                        var0 = null;
                                        var0 = var0 == var2;
                                        if (var0) {
                                            _fun115551_ip = 92;
                                            continue _fun115551
                                        }
                                    case 16:
                                        var4 = _closure1_slot2;
                                        var3 = _closure1_slot3;
                                        var2 = 35;
                                        var3 = var3[var2];
                                        var2 = undefined;
                                        var6 = var4.bind(var2)(var3);
                                        var5 = var6.isRoleHigher;
                                        var11 = _closure2_slot5;
                                        var10 = _closure2_slot11;
                                        var9 = _closure2_slot12;
                                        var7 = _closure3_slot0;
                                        var1 = arg1;
                                        var1 = var7[var1];
                                        var8 = var1.role;
                                        var12 = var6;
                                        var1 = var12[var5](var11, var10, var9, var8, var7);
                                        var1 = !var1;
                                        var0 = !var1;
                                    case 92:
                                        return var0;
                                }
                            };
                            var4 = var6.bind(var5)(var1);
                        case 123:
                            var0 = _closure2_slot9;
                            var1 = var0.length;
                            var0 = 1;
                            var1 = var1 - var0;
                            var0 = {};
                            var0.roleData = var5;
                            var0.editableRoleData = var4;
                            var0.firstEditableIndex = var3;
                            var0.numSortableRoles = var1;
                            var1 = var1 > var2;
                            var0.hasRoles = var1;
                            return var0;
                    }
                };
                var6 = var12.bind(var14)(var6, var7);
                var16 = var6.roleData;
                var _closure2_slot19 = var16;
                var17 = var6.editableRoleData;
                var _closure2_slot20 = var17;
                var12 = var6.firstEditableIndex;
                var _closure2_slot21 = var12;
                var7 = var6.numSortableRoles;
                var27 = var6.hasRoles;
                var _closure2_slot22 = var27;
                var21 = _closure1_slot5;
                var15 = var21.useCallback;
                var14 = new Array(1);
                var14[0] = var4;
                var6 = function(arg0) { // Environment: var0
                    var1 = arg0;
                    var2 = _closure2_slot17;
                    var0 = var1.toLowerCase;
                    var1 = var0.bind(var1)();
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var21 = var15.bind(var21)(var6, var14);
                var22 = _closure1_slot5;
                var15 = var22.useCallback;
                var14 = new Array(1);
                var14[0] = var8;
                var6 = function() { // Environment: var0
                    _fun115553: for (var _fun115553_ip = 0;;) switch (_fun115553_ip) {
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
                                _fun115553_ip = 105;
                                continue _fun115553
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
                var23 = var15.bind(var22)(var6, var14);
                var _closure2_slot23 = var23;
                var22 = _closure1_slot5;
                var15 = var22.useCallback;
                var14 = new Array(1);
                var14[0] = var2;
                var6 = function(arg0) { // Environment: var0
                    _fun115554: for (var _fun115554_ip = 0;;) switch (_fun115554_ip) {
                        case 0:
                            var6 = arguments[1];
                            var0 = undefined;
                            if (!(var6 === var0)) {
                                _fun115554_ip = 11;
                                continue _fun115554
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
                var15 = var15.bind(var22)(var6, var14);
                var _closure2_slot24 = var15;
                var24 = _closure1_slot5;
                var22 = var24.useCallback;
                var14 = new Array(1);
                var14[0] = var4;
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
                var6 = var22.bind(var24)(var6, var14);
                var _closure2_slot25 = var6;
                var24 = _closure1_slot5;
                var22 = var24.useCallback;
                var14 = new Array(1);
                var14[0] = var4;
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
                var4 = var22.bind(var24)(var4, var14);
                var _closure2_slot26 = var4;
                var26 = _closure1_slot5;
                var24 = var26.useCallback;
                var22 = new Array(2);
                var22[0] = var8;
                var22[1] = var4;
                var14 = function() { // Environment: var0
                    _fun115558: for (var _fun115558_ip = 0;;) switch (_fun115558_ip) {
                        case 0:
                            var2 = _closure1_slot15;
                            var1 = var2.getUpdates;
                            var3 = var1.bind(var2)();
                            var2 = var3.length;
                            var1 = 0;
                            var1 = var2 > var1;
                            if (!var1) {
                                _fun115558_ip = 46;
                                continue _fun115558
                            }
                        case 33:
                            var4 = _closure2_slot5;
                            var2 = null;
                            var1 = var2 != var4;
                        case 46:
                            if (!var1) {
                                _fun115558_ip = 95;
                                continue _fun115558
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
                            var1 = _closure2_slot26;
                            var0 = undefined;
                            var1 = var1.bind(var0)();
                            return var0;
                    }
                };
                var22 = var24.bind(var26)(var14, var22);
                var _closure2_slot27 = var22;
                var26 = _closure1_slot5;
                var24 = var26.useCallback;
                var14 = new Array(2);
                var14[0] = var13;
                var14[1] = var12;
                var12 = function(arg0) { // Environment: var0
                    _fun115559: for (var _fun115559_ip = 0;;) switch (_fun115559_ip) {
                        case 0:
                            var1 = arg0;
                            var2 = _closure2_slot13;
                            var3 = 0;
                            var5 = 0;
                            if (!var2) {
                                _fun115559_ip = 34;
                                continue _fun115559
                            }
                        case 17:
                            var2 = _closure2_slot21;
                            var2 = var2 >= var3;
                            var5 = 0;
                            if (!var2) {
                                _fun115559_ip = 34;
                                continue _fun115559
                            }
                        case 30:
                            var5 = _closure2_slot21;
                        case 34:
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot3;
                            var0 = 39;
                            var2 = var2[var0];
                            var0 = undefined;
                            var4 = var3.bind(var0)(var2);
                            var3 = var4.updateRoleOrder;
                            var2 = var1.from;
                            var2 = var2 + var5;
                            var1 = var1.to;
                            var1 = var1 + var5;
                            var1 = var3.bind(var4)(var2, var1);
                            return var0;
                    }
                };
                var14 = var24.bind(var26)(var12, var14);
                var29 = _closure1_slot5;
                var26 = var29.useCallback;
                var24 = new Array(5);
                var24[0] = var18;
                var24[1] = var16;
                var24[2] = var30;
                var24[3] = var13;
                var24[4] = var4;
                var12 = function() { // Environment: var0
                    _fun115560: for (var _fun115560_ip = 0;;) switch (_fun115560_ip) {
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
                                _fun115560_ip = 57;
                                continue _fun115560
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
                                _fun115560_ip = 531;
                                continue _fun115560
                            }
                        case 217:
                            var9 = _closure2_slot16;
                            var8 = null;
                            if (var9) {
                                _fun115560_ip = 531;
                                continue _fun115560
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
                            var14 = _closure2_slot26;
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
                                _fun115560_ip = 677;
                                continue _fun115560
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
                var26 = var26.bind(var29)(var12, var24);
                var29 = _closure1_slot5;
                var24 = var29.useCallback;
                var12 = new Array(6);
                var12[0] = var18;
                var12[1] = var23;
                var12[2] = var27;
                var12[3] = var32;
                var12[4] = var10;
                var12[5] = var8;
                var10 = function() { // Environment: var0
                    _fun115561: for (var _fun115561_ip = 0;;) switch (_fun115561_ip) {
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
                                _fun115561_ip = 89;
                                continue _fun115561
                            }
                        case 58:
                            if (var0) {
                                _fun115561_ip = 75;
                                continue _fun115561
                            }
                        case 61:
                            var1 = 48;
                            var1 = var3[var1];
                            var11 = var2.bind(var4)(var1);
                            _fun115561_ip = 87;
                            continue _fun115561;
                        case 75:
                            var1 = 47;
                            var1 = var3[var1];
                            var11 = var2.bind(var4)(var1);
                        case 87:
                            _fun115561_ip = 121;
                            continue _fun115561;
                        case 89:
                            if (var0) {
                                _fun115561_ip = 106;
                                continue _fun115561
                            }
                        case 92:
                            var0 = 46;
                            var0 = var3[var0];
                            var0 = var2.bind(var4)(var0);
                            _fun115561_ip = 118;
                            continue _fun115561;
                        case 106:
                            var1 = 45;
                            var1 = var3[var1];
                            var0 = var2.bind(var4)(var1);
                        case 118:
                            var11 = var0;
                        case 121:
                            var0 = _closure2_slot22;
                            var3 = _closure1_slot23;
                            if (var0) {
                                _fun115561_ip = 685;
                                continue _fun115561
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
                                _fun115561_ip = 230;
                                continue _fun115561
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
                            var17 = _closure2_slot23;
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
                            _fun115561_ip = 934;
                            continue _fun115561;
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
                                _fun115561_ip = 868;
                                continue _fun115561
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
                var24 = var24.bind(var29)(var10, var12);
                var29 = _closure1_slot5;
                var12 = var29.useCallback;
                var10 = new Array(6);
                var10[0] = var18;
                var10[1] = var15;
                var10[2] = var8;
                var10[3] = var31;
                var10[4] = var28;
                var10[5] = var9;
                var9 = function() { // Environment: var0
                    _fun115562: for (var _fun115562_ip = 0;;) switch (_fun115562_ip) {
                        case 0:
                            var1 = _closure2_slot5;
                            var0 = null;
                            if (!(var0 != var1)) {
                                _fun115562_ip = 217;
                                continue _fun115562
                            }
                        case 16:
                            var1 = _closure2_slot6;
                            if (!(var0 != var1)) {
                                _fun115562_ip = 217;
                                continue _fun115562
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
                                var2 = _closure2_slot24;
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
                var29 = var12.bind(var29)(var9, var10);
                var12 = _closure1_slot5;
                var10 = var12.useCallback;
                var9 = new Array(8);
                var9[0] = var8;
                var9[1] = var16;
                var9[2] = var17;
                var9[3] = var31;
                var9[4] = var28;
                var9[5] = var13;
                var9[6] = var15;
                var9[7] = var6;
                var6 = function(arg0, arg1) { // Environment: var0
                    _fun115564: for (var _fun115564_ip = 0;;) switch (_fun115564_ip) {
                        case 0:
                            var1 = arg0;
                            var7 = arg1;
                            var0 = _closure2_slot5;
                            var10 = null;
                            if (!(var10 != var0)) {
                                _fun115564_ip = 266;
                                continue _fun115564
                            }
                        case 22:
                            var0 = var1.role;
                            var8 = var1.memberCount;
                            var1 = _closure2_slot13;
                            if (var1) {
                                _fun115564_ip = 47;
                                continue _fun115564
                            }
                        case 41:
                            var1 = _closure2_slot19;
                            _fun115564_ip = 51;
                            continue _fun115564;
                        case 47:
                            var1 = _closure2_slot20;
                        case 51:
                            var3 = _closure1_slot2;
                            var13 = _closure1_slot3;
                            var2 = 35;
                            var2 = var13[var2];
                            var4 = undefined;
                            var9 = var3.bind(var4)(var2);
                            var6 = var9.isRoleHigher;
                            var11 = _closure2_slot5;
                            var16 = _closure2_slot11;
                            var15 = _closure2_slot12;
                            var18 = var9;
                            var17 = var11;
                            var14 = var0;
                            var2 = var18[var6](var17, var16, var15, var14, var13);
                            var9 = !var2;
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
                                _fun115564_ip = 169;
                                continue _fun115564
                            }
                        case 160:
                            var12 = _closure1_slot8;
                            var11 = var12.bind(var4)(var0);
                        case 169:
                            var1.isEveryoneRole = var11;
                            var1.role = var0;
                            var1.locked = var9;
                            var9 = _closure2_slot24;
                            var1.onPress = var9;
                            var9 = _closure2_slot5;
                            var10 = var10 == var9;
                            var9 = undefined;
                            if (var10) {
                                _fun115564_ip = 214;
                                continue _fun115564
                            }
                        case 205:
                            var10 = _closure2_slot5;
                            var9 = var10.id;
                        case 214:
                            var1.guildId = var9;
                            var1.numMembers = var8;
                            var8 = 0;
                            var8 = var8 === var7;
                            var1.isFirstRole = var8;
                            var6 = var7 === var6;
                            var1.isLastRole = var6;
                            var5 = _closure2_slot25;
                            var1.onLongPress = var5;
                            var0 = var0.id;
                            var0 = var3.bind(var4)(var2, var1, var0);
                            return var0;
                        case 266:
                            var3 = _closure1_slot22;
                            var2 = _closure1_slot24;
                            var1 = undefined;
                            var0 = {};
                            var0 = var3.bind(var1)(var2, var0);
                            return var0;
                    }
                };
                var12 = var10.bind(var12)(var6, var9);
                var15 = _closure1_slot5;
                var10 = var15.useCallback;
                var9 = function(arg0, arg1) { // Environment: var0
                    var1 = arg0;
                    var0 = arg1;
                    var0 = var1 !== var0;
                    return var0;
                };
                var6 = new Array(0);
                var15 = var10.bind(var15)(var9, var6);
                var10 = _closure1_slot5;
                var9 = var10.useEffect;
                var6 = new Array(6);
                var6[0] = var23;
                var6[1] = var22;
                var6[2] = var4;
                var6[3] = var27;
                var6[4] = var13;
                var6[5] = var2;
                var4 = function() { // Environment: var0
                    _fun115566: for (var _fun115566_ip = 0;;) switch (_fun115566_ip) {
                        case 0:
                            var3 = _closure2_slot2;
                            var2 = var3.setOptions;
                            var1 = {};
                            var7 = _closure2_slot13;
                            var0 = undefined;
                            var6 = undefined;
                            if (!var7) {
                                _fun115566_ip = 35;
                                continue _fun115566
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
                                _fun115566_ip = 65;
                                continue _fun115566
                            }
                        case 47:
                            var6 = _closure2_slot22;
                            var4 = undefined;
                            if (!var6) {
                                _fun115566_ip = 63;
                                continue _fun115566
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
                                var5 = _closure2_slot23;
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
                            _fun115566_ip = 72;
                            continue _fun115566;
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
                                var4 = _closure2_slot27;
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
                var4[1] = var13;
                var4[2] = var2;
                var2 = function() { // Environment: var0
                    _fun115570: for (var _fun115570_ip = 0;;) switch (_fun115570_ip) {
                        case 0:
                            var0 = _closure2_slot13;
                            if (!var0) {
                                _fun115570_ip = 20;
                                continue _fun115570
                            }
                        case 10:
                            var1 = _closure2_slot5;
                            var0 = null;
                            if (!(var0 == var1)) {
                                _fun115570_ip = 57;
                                continue _fun115570
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
                            _fun115570_ip = 102;
                            continue _fun115570;
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
                                _fun115570_ip = 169;
                                continue _fun115570
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
                    _fun115571: for (var _fun115571_ip = 0;;) switch (_fun115571_ip) {
                        case 0:
                            var2 = _closure2_slot5;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun115571_ip = 145;
                                continue _fun115571
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
                                _fun115571_ip = 105;
                                continue _fun115571
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
                var1[0] = var13;
                var0 = function() { // Environment: var0
                    var0 = function() { // Environment: var0
                        _fun115573: for (var _fun115573_ip = 0;;) switch (_fun115573_ip) {
                            case 0:
                                var0 = _closure2_slot13;
                                if (!var0) {
                                    _fun115573_ip = 45;
                                    continue _fun115573
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
                if (var13) {
                    _fun115535_ip = 1362;
                    continue _fun115535
                }
            case 1212:
                var4 = 10;
                var4 = var7 < var4;
                var6 = null;
                if (var4) {
                    _fun115535_ip = 1362;
                    continue _fun115535
                }
            case 1227:
                var8 = _closure1_slot22;
                var7 = _closure1_slot6;
                var4 = {};
                var10 = var18.searchWrapper;
                var9 = new Array(2);
                var9[0] = var10;
                var10 = {};
                var11 = 0;
                if (!var30) {
                    _fun115535_ip = 1288;
                    continue _fun115535
                }
            case 1258:
                var23 = _closure1_slot1;
                var28 = _closure1_slot3;
                var22 = 17;
                var22 = var28[var22];
                var22 = var23.bind(var3)(var22);
                var22 = var22.spacing;
                var11 = var22.PX_16;
            case 1288:
                var10.paddingBottom = var11;
                var9[1] = var10;
                var4.style = var9;
                var11 = _closure1_slot22;
                var10 = _closure1_slot0;
                var22 = _closure1_slot3;
                var9 = 58;
                var9 = var22[var9];
                var9 = var10.bind(var3)(var9);
                var10 = var9.SearchField;
                var9 = {};
                var22 = 'md';
                var9.size = var22;
                var9.onChange = var21;
                var9 = var11.bind(var3)(var10, var9);
                var4.children = var9;
                var6 = var8.bind(var3)(var7, var4);
            case 1362:
                var4 = new Array(4);
                var4[0] = var6;
                var8 = _closure1_slot22;
                var7 = _closure1_slot6;
                var6 = {};
                var9 = null;
                if (!var13) {
                    _fun115535_ip = 1650;
                    continue _fun115535
                }
            case 1388:
                var21 = _closure1_slot23;
                var11 = _closure1_slot24;
                var10 = {};
                var23 = var26.bind(var3)();
                var22 = new Array(2);
                var22[0] = var23;
                var23 = null;
                if (var27) {
                    _fun115535_ip = 1636;
                    continue _fun115535
                }
            case 1418:
                var32 = _closure1_slot22;
                var39 = _closure1_slot0;
                var40 = _closure1_slot3;
                var28 = 59;
                var28 = var40[var28];
                var28 = var39.bind(var3)(var28);
                var31 = var28.FormRow;
                var28 = {};
                var35 = _closure1_slot22;
                var37 = _closure1_slot1;
                var36 = 60;
                var33 = var40[var36];
                var34 = var37.bind(var3)(var33);
                var33 = {};
                var38 = var18.emptyRolesIcon;
                var33.style = var38;
                var36 = var40[var36];
                var36 = var37.bind(var3)(var36);
                var36 = var36.Sizes;
                var36 = var36.LARGE;
                var33.size = var36;
                var36 = 61;
                var36 = var40[var36];
                var36 = var37.bind(var3)(var36);
                var33.source = var36;
                var33 = var35.bind(var3)(var34, var33);
                var28.leading = var33;
                var35 = _closure1_slot22;
                var33 = 43;
                var33 = var40[var33];
                var33 = var39.bind(var3)(var33);
                var34 = var33.Text;
                var33 = {
                    'variant': 'text-md/semibold',
                    'color': 'interactive-text-default'
                };
                var36 = 32;
                var37 = var40[var36];
                var37 = var39.bind(var3)(var37);
                var38 = var37.intl;
                var37 = var38.string;
                var36 = var40[var36];
                var36 = var39.bind(var3)(var36);
                var36 = var36.t;
                var36 = var36.nZfHsf;
                var36 = var37.bind(var38)(var36);
                var33.children = var36;
                var33 = var35.bind(var3)(var34, var33);
                var28.label = var33;
                var23 = var32.bind(var3)(var31, var28);
            case 1636:
                var22[1] = var23;
                var10.children = var22;
                var9 = var21.bind(var3)(var11, var10);
            case 1650:
                var6.children = var9;
                var6 = var8.bind(var3)(var7, var6);
                var4[1] = var6;
                var8 = _closure1_slot22;
                var7 = _closure1_slot6;
                var6 = {};
                var9 = var18.container;
                var6.style = var9;
                var11 = _closure1_slot22;
                var10 = _closure1_slot1;
                var21 = _closure1_slot3;
                var9 = 62;
                var9 = var21[var9];
                var10 = var10.bind(var3)(var9);
                var9 = {};
                var9.ref = var20;
                var20 = null;
                if (var13) {
                    _fun115535_ip = 1781;
                    continue _fun115535
                }
            case 1718:
                var23 = _closure1_slot23;
                var22 = _closure1_slot24;
                var21 = {};
                var28 = null;
                if (var30) {
                    _fun115535_ip = 1737;
                    continue _fun115535
                }
            case 1733:
                var28 = var24.bind(var3)();
            case 1737:
                var24 = new Array(3);
                var24[0] = var28;
                var28 = null;
                if (var30) {
                    _fun115535_ip = 1754;
                    continue _fun115535
                }
            case 1750:
                var28 = var29.bind(var3)();
            case 1754:
                var24[1] = var28;
                var25 = null;
                if (!var27) {
                    _fun115535_ip = 1767;
                    continue _fun115535
                }
            case 1763:
                var25 = var26.bind(var3)();
            case 1767:
                var24[2] = var25;
                var21.children = var24;
                var20 = var23.bind(var3)(var22, var21);
            case 1781:
                var9.header = var20;
                var20 = var18.container;
                var9.wrapperStyles = var20;
                var20 = var18.scrollContainer;
                var18 = new Array(2);
                var18[0] = var20;
                var18[1] = var19;
                var9.contentContainerStyle = var18;
                if (!var13) {
                    _fun115535_ip = 1824;
                    continue _fun115535
                }
            case 1821:
                var16 = var17;
            case 1824:
                var9.data = var16;
                var9.rowHasChanged = var15;
                var9.onRowMoved = var14;
                var13 = !var13;
                var9.disableSorting = var13;
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 3187, 1666, 1216, 1599, 1665, 1410, 3082, 9880, 14739, 14740, 660, 1369, 33, 1297, 671, 4677, 795, 14741, 566, 14654, 8147, 3203, 1358, 3269, 14742, 1307, 6532, 5375, 8283, 1234, 1469, 7680, 3087, 4298, 14743, 14752, 14753, 5358, 4897, 11097, 3932, 3197, 14754, 14755, 14756, 14757, 4699, 4075, 14758, 5317, 11402, 478, 14750, 4674, 9881, 7004, 5373, 4077, 8136, 13445, 5199, 2]);