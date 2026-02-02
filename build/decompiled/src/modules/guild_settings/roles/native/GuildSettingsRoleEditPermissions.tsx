// modules/guild_settings/roles/native/GuildSettingsRoleEditPermissions.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var6 = metroImportAll;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var6;
    var _closure1_slot3 = var5;
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
    var3 = var10.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.View;
    var _closure1_slot6 = var6;
    var6 = var3.Keyboard;
    var _closure1_slot7 = var6;
    var3 = var3.SectionList;
    var _closure1_slot8 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.isGuildOwner;
    var _closure1_slot9 = var3;
    var11 = 4;
    var3 = var5[var11];
    var3 = var4.bind(var0)(var3);
    var3 = var3.isEveryoneRole;
    var _closure1_slot10 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot11 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot12 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.AnalyticEvents;
    var _closure1_slot13 = var6;
    var3 = var3.Permissions;
    var _closure1_slot14 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot15 = var6;
    var6 = var3.jsxs;
    var _closure1_slot16 = var6;
    var3 = var3.Fragment;
    var _closure1_slot17 = var3;
    var3 = 9;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var9 = 10;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var8.paddingVertical = var12;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var8.paddingHorizontal = var12;
    var3.search = var8;
    var8 = {};
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var8.paddingBottom = var12;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var8.paddingHorizontal = var12;
    var3.searchAtTop = var8;
    var8 = {};
    var12 = 16;
    var8.paddingHorizontal = var12;
    var3.permissionHint = var8;
    var8 = {};
    var8.marginHorizontal = var12;
    var3.formRow = var8;
    var8 = {
        'lineHeight': 20,
        'flexShrink': 1
    };
    var3.formLabel = var8;
    var8 = {
        'display': 'flex',
        'flexDirection': 'row',
        'gap': 8,
        'alignItems': 'center'
    };
    var3.labelWithTagContainer = var8;
    var8 = {};
    var8.marginLeft = var11;
    var3.formSwitch = var8;
    var8 = {
        'backgroundColor': 'transparent',
        'paddingTop': 40
    };
    var3.emptyState = var8;
    var8 = {};
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.TEXT_DEFAULT;
    var8.color = var9;
    var3.emptyStateText = var8;
    var8 = {};
    var9 = 'uppercase';
    var8.textTransform = var9;
    var3.subHead = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot18 = var3;
    var3 = 30;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_settings/roles/native/GuildSettingsRoleEditPermissions.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun116015: for (var _fun116015_ip = 0;;) switch (_fun116015_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.guild;
                var _closure2_slot0 = var4;
                var14 = var0.role;
                var _closure2_slot1 = var14;
                var1 = var0.permissions;
                var _closure2_slot2 = var1;
                var1 = var0.onPermissionsChanged;
                var _closure2_slot3 = var1;
                var9 = var0.contentContainerStyle;
                var3 = undefined;
                var _closure2_slot5 = var3;
                var _closure2_slot6 = var3;
                var _closure2_slot7 = var3;
                var _closure2_slot8 = var3;
                var _closure2_slot9 = var3;
                var _closure2_slot10 = var3;
                var _closure2_slot11 = var3;
                var _closure2_slot12 = var3;
                var0 = _closure1_slot18;
                var13 = var0.bind(var3)();
                var _closure2_slot4 = var13;
                var1 = _closure1_slot12;
                var0 = var1.getCurrentUser;
                var8 = var0.bind(var1)();
                var2 = null;
                var0 = var2 != var8;
                var11 = undefined;
                if (!var0) {
                    _fun116015_ip = 160;
                    continue _fun116015
                }
            case 123:
                var1 = _closure1_slot2;
                var5 = _closure1_slot3;
                var0 = 11;
                var0 = var5[var0];
                var5 = var1.bind(var3)(var0);
                var1 = var5.getHighestRole;
                var0 = var8.id;
                var11 = var1.bind(var5)(var4, var0);
            case 160:
                _closure2_slot5 = var11;
                var1 = _closure1_slot2;
                var0 = _closure1_slot3;
                var7 = 11;
                var0 = var0[var7];
                var5 = var1.bind(var3)(var0);
                var1 = var5.isRoleHigher;
                var12 = var2 == var8;
                var0 = undefined;
                if (var12) {
                    _fun116015_ip = 204;
                    continue _fun116015
                }
            case 199:
                var0 = var8.id;
            case 204:
                var27 = var5;
                var26 = var4;
                var25 = var0;
                var24 = var11;
                var23 = var14;
                var0 = var27[var1](var26, var25, var24, var23, var22);
                var12 = !var0;
                _closure2_slot6 = var12;
                var0 = _closure1_slot10;
                var19 = var0.bind(var3)(var14);
                var1 = _closure1_slot5;
                var5 = var1.useState;
                var0 = '';
                var0 = var5.bind(var1)(var0);
                var16 = _closure1_slot4;
                var15 = 2;
                var0 = var16.bind(var3)(var0, var15);
                var20 = 0;
                var17 = var0[var20];
                _closure2_slot7 = var17;
                var5 = 1;
                var0 = var0[var5];
                _closure2_slot8 = var0;
                var0 = var1.useState;
                var11 = false;
                var0 = var0.bind(var1)(var11);
                var0 = var16.bind(var3)(var0, var15);
                var15 = var0[var20];
                _closure2_slot9 = var15;
                var0 = var0[var5];
                _closure2_slot10 = var0;
                var15 = _closure1_slot1;
                var0 = _closure1_slot3;
                var5 = 12;
                var5 = var0[var5];
                var15 = var15.bind(var3)(var5);
                var5 = var2 != var4;
                var2 = 'Guild cannot be null';
                var2 = var15.bind(var3)(var5, var2);
                var2 = _closure1_slot9;
                var5 = var2.bind(var3)(var4, var8);
                var2 = _closure1_slot2;
                var0 = var0[var7];
                var7 = var2.bind(var3)(var0);
                var2 = var7.can;
                var0 = {};
                var15 = _closure1_slot14;
                var15 = var15.ADMINISTRATOR;
                var0.permission = var15;
                var0.user = var8;
                var0.context = var4;
                var8 = var2.bind(var7)(var0);
                var0 = var1.useRef;
                var0 = var0.bind(var1)(var11);
                _closure2_slot11 = var0;
                var2 = _closure1_slot15;
                var1 = _closure1_slot6;
                var0 = {};
                if (var5) {
                    _fun116015_ip = 459;
                    continue _fun116015
                }
            case 447:
                var7 = !var12;
                if (var12) {
                    _fun116015_ip = 456;
                    continue _fun116015
                }
            case 453:
                var7 = var8;
            case 456:
                var5 = var7;
            case 459:
                if (!var5) {
                    _fun116015_ip = 597;
                    continue _fun116015
                }
            case 465:
                var12 = _closure1_slot15;
                var16 = _closure1_slot0;
                var22 = _closure1_slot3;
                var7 = 13;
                var7 = var22[var7];
                var7 = var16.bind(var3)(var7);
                var8 = var7.TextWithIOSLinkWorkaround;
                var7 = {
                    'style': null,
                    'variant': 'text-sm/medium',
                    'color': 'text-muted'
                };
                var15 = var13.permissionHint;
                var7.style = var15;
                var15 = 14;
                var18 = var22[var15];
                var18 = var16.bind(var3)(var18);
                var21 = var18.intl;
                var18 = var21.format;
                var15 = var22[var15];
                var15 = var16.bind(var3)(var15);
                var15 = var15.t;
                var16 = var15.ZhSOBy;
                var15 = {};
                var22 = function() {
                    var1 = _closure1_slot7;
                    var0 = var1.dismiss;
                    var0 = var0.bind(var1)();
                    var4 = _closure1_slot1;
                    var1 = _closure1_slot3;
                    var0 = 15;
                    var3 = var1[var0];
                    var0 = undefined;
                    var5 = var4.bind(var0)(var3);
                    var4 = var5.openLazy;
                    var3 = _closure1_slot0;
                    var2 = 17;
                    var2 = var1[var2];
                    var3 = var3.bind(var0)(var2);
                    var2 = 16;
                    var2 = var1[var2];
                    var1 = var1.paths;
                    var3 = var3.bind(var0)(var2, var1);
                    var6 = _closure2_slot0;
                    var10 = var6.id;
                    var1 = _closure2_slot1;
                    var9 = var1.id;
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var8 = var1.concat;
                    var2 = 'role-permission-templates-';
                    var1 = '-';
                    var2 = var8.bind(var2)(var10, var1, var9);
                    var1 = {};
                    var8 = _closure2_slot9;
                    var1.permissionsEdited = var8;
                    var7 = _closure2_slot3;
                    var1.onPermissionsChanged = var7;
                    var6 = var6.id;
                    var1.guildId = var6;
                    var1 = var4.bind(var5)(var3, var2, var1);
                    return var0;
                };
                var15.onTemplateOpen = var22;
                var15 = var18.bind(var21)(var16, var15);
                var7.children = var15;
                var5 = var12.bind(var3)(var8, var7);
            case 597:
                var0.children = var5;
                var7 = var2.bind(var3)(var1, var0);
                var8 = _closure1_slot1;
                var16 = _closure1_slot3;
                var0 = 18;
                var0 = var16[var0];
                var1 = var8.bind(var3)(var0);
                var0 = var1.generateGuildPermissionSpec;
                var2 = var0.bind(var1)(var4);
                var1 = var2.map;
                var0 = function(arg0) { // Environment: var10
                    var1 = arg0;
                    var0 = {};
                    var5 = var0;
                    var4 = var1;
                    var2 = copyDataProperties(var5, var4);
                    var3 = var1.permissions;
                    var2 = var3.filter;
                    var1 = function(arg0) { // Environment: var1
                        var0 = arg0;
                        var1 = var0.title;
                        var0 = var1.toLowerCase;
                        var2 = var0.bind(var1)();
                        var1 = var2.includes;
                        var3 = _closure2_slot7;
                        var0 = var3.trimStart;
                        var3 = var0.bind(var3)();
                        var0 = var3.toLowerCase;
                        var0 = var0.bind(var3)();
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var2 = var2.bind(var3)(var1);
                    var1 = 'permissions';
                    var0[var1] = var2;
                    return var0;
                };
                var2 = var1.bind(var2)(var0);
                var1 = var2.filter;
                var0 = function(arg0) { // Environment: var10
                    var0 = arg0;
                    var0 = var0.permissions;
                    var1 = var0.length;
                    var0 = 0;
                    var0 = var1 > var0;
                    return var0;
                };
                var2 = var1.bind(var2)(var0);
                var1 = var2.map;
                var0 = function(arg0) { // Environment: var10
                    var1 = arg0;
                    var0 = {};
                    var2 = var1.title;
                    var0.title = var2;
                    var1 = var1.permissions;
                    var0.data = var1;
                    return var0;
                };
                var12 = var1.bind(var2)(var0);
                var0 = var12.length;
                var5 = var0 > var20;
                var0 = 19;
                var0 = var16[var0];
                var2 = var8.bind(var3)(var0);
                var1 = var2.useExperiment;
                var0 = {};
                var15 = 'GuildSettingsRoleEditPermission';
                var0.location = var15;
                var4 = var4.id;
                var0.guildId = var4;
                var0 = var1.bind(var2)(var0);
                var0 = var0.enabled;
                _closure2_slot12 = var0;
                var2 = _closure1_slot16;
                var1 = _closure1_slot17;
                var0 = {};
                var15 = _closure1_slot15;
                var4 = 20;
                var4 = var16[var4];
                var8 = var8.bind(var3)(var4);
                var4 = {};
                var4.role = var14;
                var8 = var15.bind(var3)(var8, var4);
                var4 = new Array(4);
                var4[0] = var8;
                var14 = _closure1_slot6;
                var8 = {};
                var18 = var13.search;
                var16 = new Array(2);
                var16[0] = var18;
                var18 = undefined;
                if (var19) {
                    _fun116015_ip = 833;
                    continue _fun116015
                }
            case 823:
                var19 = {};
                var19.paddingTop = var20;
                var18 = var19;
            case 833:
                var16[1] = var18;
                var8.style = var16;
                var19 = _closure1_slot15;
                var18 = _closure1_slot0;
                var20 = _closure1_slot3;
                var16 = 21;
                var16 = var20[var16];
                var16 = var18.bind(var3)(var16);
                var18 = var16.SearchField;
                var16 = {};
                var20 = 'md';
                var16.size = var20;
                var20 = function arg0() {
                    _fun116021: for (var _fun116021_ip = 0;;) switch (_fun116021_ip) {
                        case 0:
                            var3 = arg0;
                            var2 = _closure2_slot8;
                            var0 = undefined;
                            var2 = var2.bind(var0)(var3);
                            var2 = var3.trimStart;
                            var3 = var2.bind(var3)();
                            var2 = '';
                            var2 = var2 === var3;
                            if (var2) {
                                _fun116021_ip = 47;
                                continue _fun116021
                            }
                        case 38:
                            var3 = _closure2_slot11;
                            var2 = var3.current;
                        case 47:
                            if (var2) {
                                _fun116021_ip = 117;
                                continue _fun116021
                            }
                        case 50:
                            var4 = _closure1_slot1;
                            var5 = _closure1_slot3;
                            var3 = 22;
                            var3 = var5[var3];
                            var5 = var4.bind(var0)(var3);
                            var4 = var5.track;
                            var2 = _closure1_slot13;
                            var3 = var2.SEARCH_STARTED;
                            var2 = {};
                            var6 = 'Permissions';
                            var2.search_type = var6;
                            var2 = var4.bind(var5)(var3, var2);
                            var2 = _closure2_slot11;
                            var1 = true;
                            var2.current = var1;
                        case 117:
                            return var0;
                    }
                };
                var16.onChange = var20;
                var16 = var19.bind(var3)(var18, var16);
                var8.children = var16;
                var8 = var15.bind(var3)(var14, var8);
                var4[1] = var8;
                var4[2] = var7;
                var8 = _closure1_slot15;
                if (var5) {
                    _fun116015_ip = 1066;
                    continue _fun116015
                }
            case 927:
                var7 = _closure1_slot1;
                var18 = _closure1_slot3;
                var5 = 28;
                var5 = var18[var5];
                var7 = var7.bind(var3)(var5);
                var5 = {};
                var14 = _closure1_slot0;
                var15 = 29;
                var15 = var18[var15];
                var15 = var14.bind(var3)(var15);
                var15 = var15.NoResultsAlt;
                var5.Illustration = var15;
                var15 = var13.emptyState;
                var5.style = var15;
                var13 = var13.emptyStateText;
                var5.bodyStyle = var13;
                var13 = 14;
                var15 = var18[var13];
                var15 = var14.bind(var3)(var15);
                var16 = var15.intl;
                var15 = var16.format;
                var13 = var18[var13];
                var13 = var14.bind(var3)(var13);
                var13 = var13.t;
                var14 = var13.Psh5OO;
                var13 = {};
                var13.query = var17;
                var13 = var15.bind(var16)(var14, var13);
                var5.body = var13;
                var5 = var8.bind(var3)(var7, var5);
                _fun116015_ip = 1152;
                continue _fun116015;
            case 1066:
                var7 = _closure1_slot8;
                var6 = {};
                var6.sections = var12;
                var6.stickySectionHeadersEnabled = var11;
                var11 = function arg0() {
                    _fun116022: for (var _fun116022_ip = 0;;) switch (_fun116022_ip) {
                        case 0:
                            var1 = arg0;
                            var0 = var1.item;
                            var13 = var1.index;
                            var10 = var1.section;
                            var20 = var0.description;
                            var18 = var0.title;
                            var11 = var0.flag;
                            var _closure3_slot0 = var11;
                            var7 = _closure2_slot6;
                            if (!var7) {
                                _fun116022_ip = 62;
                                continue _fun116022
                            }
                        case 50:
                            var2 = _closure2_slot1;
                            var1 = _closure2_slot5;
                            var7 = var2 === var1;
                        case 62:
                            if (var7) {
                                _fun116022_ip = 69;
                                continue _fun116022
                            }
                        case 65:
                            var7 = _closure2_slot6;
                        case 69:
                            if (var7) {
                                _fun116022_ip = 98;
                                continue _fun116022
                            }
                        case 72:
                            var3 = _closure1_slot11;
                            var2 = var3.can;
                            var1 = _closure2_slot0;
                            var1 = var2.bind(var3)(var11, var1);
                            var7 = !var1;
                        case 98:
                            if (var7) {
                                _fun116022_ip = 214;
                                continue _fun116022
                            }
                        case 101:
                            var5 = _closure1_slot11;
                            var4 = var5.can;
                            var3 = _closure2_slot0;
                            var2 = {};
                            var14 = _closure2_slot1;
                            var9 = var14.id;
                            var1 = {};
                            var26 = var1;
                            var25 = var14;
                            var14 = copyDataProperties(var26, var25);
                            var15 = _closure1_slot2;
                            var14 = _closure1_slot3;
                            var12 = 23;
                            var14 = var14[var12];
                            var12 = undefined;
                            var15 = var15.bind(var12)(var14);
                            var14 = var15.remove;
                            var12 = _closure2_slot2;
                            var14 = var14.bind(var15)(var12, var11);
                            var12 = 'permissions';
                            var1[var12] = var14;
                            var2[var9] = var1;
                            var24 = null;
                            var27 = var5;
                            var26 = var11;
                            var25 = var3;
                            var23 = var2;
                            var1 = var27[var4](var26, var25, var24, var23, var22);
                            var7 = !var1;
                        case 214:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot3;
                            var21 = 24;
                            var1 = var1[var21];
                            var3 = undefined;
                            var5 = var2.bind(var3)(var1);
                            var4 = var5.getMigrationWarning;
                            var2 = var0.flag;
                            var1 = _closure2_slot12;
                            var0 = _closure2_slot0;
                            var0 = var0.id;
                            var17 = var4.bind(var5)(var2, var1, var0);
                            var12 = null;
                            var5 = var18;
                            if (!(var12 != var17)) {
                                _fun116022_ip = 439;
                                continue _fun116022
                            }
                        case 283:
                            var2 = _closure1_slot16;
                            var1 = _closure1_slot6;
                            var0 = {};
                            var4 = _closure2_slot4;
                            var4 = var4.labelWithTagContainer;
                            var0.style = var4;
                            var16 = _closure1_slot15;
                            var15 = _closure1_slot0;
                            var22 = _closure1_slot3;
                            var4 = 25;
                            var4 = var22[var4];
                            var4 = var15.bind(var3)(var4);
                            var14 = var4.Text;
                            var4 = {
                                'variant': 'text-md/semibold',
                                'color': 'mobile-text-heading-primary'
                            };
                            var4.children = var18;
                            var14 = var16.bind(var3)(var14, var4);
                            var4 = new Array(2);
                            var4[0] = var14;
                            var14 = 26;
                            var14 = var22[var14];
                            var14 = var15.bind(var3)(var14);
                            var15 = var14.WarningIcon;
                            var14 = {};
                            var19 = _closure1_slot1;
                            var18 = 10;
                            var18 = var22[var18];
                            var18 = var19.bind(var3)(var18);
                            var18 = var18.colors;
                            var18 = var18.STATUS_WARNING;
                            var14.color = var18;
                            var14 = var16.bind(var3)(var15, var14);
                            var4[1] = var14;
                            var0.children = var4;
                            var5 = var2.bind(var3)(var1, var0);
                        case 439:
                            var2 = _closure1_slot16;
                            var1 = _closure1_slot17;
                            var0 = {};
                            var15 = _closure1_slot15;
                            var19 = _closure1_slot0;
                            var16 = _closure1_slot3;
                            var18 = 25;
                            var4 = var16[var18];
                            var4 = var19.bind(var3)(var4);
                            var14 = var4.Text;
                            var4 = {
                                'variant': 'text-xs/medium',
                                'color': 'text-subtle'
                            };
                            var16 = var16[var21];
                            var19 = var19.bind(var3)(var16);
                            var16 = var19.renderDescription;
                            var16 = var16.bind(var19)(var20);
                            var4.children = var16;
                            var14 = var15.bind(var3)(var14, var4);
                            var4 = new Array(2);
                            var4[0] = var14;
                            var12 = var12 != var17;
                            if (!var12) {
                                _fun116022_ip = 587;
                                continue _fun116022
                            }
                        case 537:
                            var16 = _closure1_slot15;
                            var15 = _closure1_slot0;
                            var14 = _closure1_slot3;
                            var14 = var14[var18];
                            var14 = var15.bind(var3)(var14);
                            var15 = var14.Text;
                            var14 = {
                                'variant': 'text-xs/medium',
                                'color': 'text-feedback-warning'
                            };
                            var14.children = var17;
                            var12 = var16.bind(var3)(var15, var14);
                        case 587:
                            var4[1] = var12;
                            var0.children = var4;
                            var4 = var2.bind(var3)(var1, var0);
                            var2 = _closure1_slot15;
                            var1 = _closure1_slot0;
                            var12 = _closure1_slot3;
                            var0 = 27;
                            var0 = var12[var0];
                            var0 = var1.bind(var3)(var0);
                            var1 = var0.FormSwitchRow;
                            var0 = {};
                            var14 = 0;
                            var14 = var14 === var13;
                            var0.start = var14;
                            var10 = var10.data;
                            var14 = var10.length;
                            var10 = 1;
                            var10 = var14 - var10;
                            var10 = var13 === var10;
                            var0.end = var10;
                            var10 = _closure2_slot4;
                            var10 = var10.formRow;
                            var0.DEPRECATED_style = var10;
                            var10 = _closure1_slot2;
                            var9 = 23;
                            var9 = var12[var9];
                            var10 = var10.bind(var3)(var9);
                            var9 = var10.has;
                            var8 = _closure2_slot2;
                            var8 = var9.bind(var10)(var8, var11);
                            var0.value = var8;
                            var0.disabled = var7;
                            var6 = function arg0() {
                                _fun116023: for (var _fun116023_ip = 0;;) switch (_fun116023_ip) {
                                    case 0:
                                        var3 = _closure2_slot3;
                                        var4 = _closure1_slot2;
                                        var2 = _closure1_slot3;
                                        var0 = 23;
                                        var2 = var2[var0];
                                        var0 = undefined;
                                        var7 = var4.bind(var0)(var2);
                                        var2 = arg0;
                                        if (var2) {
                                            _fun116023_ip = 63;
                                            continue _fun116023
                                        }
                                    case 38:
                                        var5 = var7.remove;
                                        var4 = _closure2_slot2;
                                        var2 = _closure3_slot0;
                                        var2 = var5.bind(var7)(var4, var2);
                                        _fun116023_ip = 85;
                                        continue _fun116023;
                                    case 63:
                                        var6 = var7.add;
                                        var5 = _closure2_slot2;
                                        var4 = _closure3_slot0;
                                        var2 = var6.bind(var7)(var5, var4);
                                    case 85:
                                        var2 = var3.bind(var0)(var2);
                                        var2 = _closure2_slot10;
                                        var1 = true;
                                        var1 = var2.bind(var0)(var1);
                                        return var0;
                                }
                            };
                            var0.onValueChange = var6;
                            var0.label = var5;
                            var0.subLabel = var4;
                            var0 = var2.bind(var3)(var1, var0);
                            return var0;
                    }
                };
                var6.renderItem = var11;
                var11 = function arg0() {
                    var0 = arg0;
                    var0 = var0.section;
                    var4 = var0.title;
                    var3 = _closure1_slot15;
                    var1 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var0 = 27;
                    var0 = var2[var0];
                    var2 = undefined;
                    var0 = var1.bind(var2)(var0);
                    var1 = var0.FormTitle;
                    var0 = {};
                    var0.title = var4;
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                };
                var6.renderSectionHeader = var11;
                var11 = function() {
                    var3 = _closure1_slot15;
                    var1 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var0 = 27;
                    var0 = var2[var0];
                    var2 = undefined;
                    var0 = var1.bind(var2)(var0);
                    var1 = var0.FormDivider;
                    var0 = {};
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                };
                var6.ItemSeparatorComponent = var11;
                var10 = function arg0() {
                    var0 = arg0;
                    var1 = var0.flag;
                    var0 = var1.toString;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var6.keyExtractor = var10;
                var10 = 'on-drag';
                var6.keyboardDismissMode = var10;
                var6.contentContainerStyle = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 1152:
                var4[3] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 1416, 1666, 3052, 1613, 660, 33, 1297, 671, 3057, 44, 5296, 1234, 3239, 14739, 1307, 14003, 12546, 14736, 6973, 795, 484, 14006, 3902, 6408, 5342, 7322, 8109, 2]);