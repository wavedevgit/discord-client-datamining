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
    var _closure1_slot28 = var0;
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
            _fun115581: for (var _fun115581_ip = 0;;) switch (_fun115581_ip) {
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
                        _fun115581_ip = 52;
                        continue _fun115581
                    }
                case 44:
                    var2 = '';
                    var0 = var2 === var5;
                case 52:
                    if (var0) {
                        _fun115581_ip = 126;
                        continue _fun115581
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
                        _fun115581_ip = 172;
                        continue _fun115581
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
                    _fun115581_ip = 176;
                    continue _fun115581;
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
            _fun115583: for (var _fun115583_ip = 0;;) switch (_fun115583_ip) {
                case 0:
                    var1 = _closure2_slot1;
                    if (var1) {
                        _fun115583_ip = 59;
                        continue _fun115583
                    }
                case 10:
                    var3 = _closure1_slot28;
                    var1 = _closure2_slot2;
                    var2 = undefined;
                    var1 = var3.bind(var2)(var1);
                    if (var1) {
                        _fun115583_ip = 46;
                        continue _fun115583
                    }
                case 31:
                    var3 = _closure2_slot4;
                    var1 = _closure2_slot0;
                    var1 = var3.bind(var2)(var1);
                    _fun115583_ip = 59;
                    continue _fun115583;
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
        var3 = _closure1_slot28;
        var3 = var3.bind(var5)(var4);
        var0.hasSearchQuery = var3;
        var0.filteredRoles = var2;
        var0.setSearchQuery = var1;
        return var0;
    };
    var _closure1_slot29 = var0;
    var0 = function arg0() {
        _fun115584: for (var _fun115584_ip = 0;;) switch (_fun115584_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.guild;
                var _closure2_slot0 = var4;
                var0 = _closure1_slot27;
                var3 = undefined;
                var5 = var0.bind(var3)();
                var6 = _closure1_slot5;
                var2 = var6.useEffect;
                var1 = new Array(1);
                var1[0] = var4;
                var0 = function() { // Environment: var12
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
                    var3 = var1.GUILD_PIN_PERMISSION_MIGRATION_NOTIFICATION;
                    var6 = _closure2_slot0;
                    var2 = var6.id;
                    var1 = {};
                    var7 = _closure1_slot23;
                    var7 = var7.INDIRECT_ACTION;
                    var1.dismissAction = var7;
                    var6 = var6.id;
                    var1.guildId = var6;
                    var6 = true;
                    var1.forceTrack = var6;
                    var1 = var4.bind(var5)(var3, var2, var1);
                    return var0;
                };
                var0 = var2.bind(var6)(var0, var1);
                var1 = _closure1_slot0;
                var8 = _closure1_slot3;
                var0 = 28;
                var0 = var8[var0];
                var6 = var1.bind(var3)(var0);
                var2 = var6.dateFormat;
                var1 = _closure1_slot1;
                var0 = 29;
                var0 = var8[var0];
                var1 = var1.bind(var3)(var0);
                var0 = _closure1_slot22;
                var1 = var1.bind(var3)(var0);
                var0 = 'LL';
                var11 = var2.bind(var6)(var1, var0);
                var2 = var4.features;
                var1 = var2.has;
                var0 = _closure1_slot21;
                var0 = var0.PIN_PERMISSION_MIGRATION_COMPLETE;
                var0 = var1.bind(var2)(var0);
                if (var0) {
                    _fun115584_ip = 336;
                    continue _fun115584
                }
            case 150:
                var2 = _closure1_slot13;
                var1 = var2.can;
                var0 = _closure1_slot20;
                var0 = var0.ADMINISTRATOR;
                var4 = var1.bind(var2)(var0, var4);
                var2 = _closure1_slot24;
                var8 = _closure1_slot0;
                var13 = _closure1_slot3;
                var0 = 30;
                var0 = var13[var0];
                var0 = var8.bind(var3)(var0);
                var1 = var0.Text;
                var0 = {};
                var6 = 'text-sm/normal';
                var0.variant = var6;
                var6 = 27;
                var9 = var13[var6];
                var9 = var8.bind(var3)(var9);
                var10 = var9.intl;
                var9 = var10.format;
                var6 = var13[var6];
                var6 = var8.bind(var3)(var6);
                var6 = var6.t;
                if (var4) {
                    _fun115584_ip = 289;
                    continue _fun115584
                }
            case 256:
                var8 = var6.cAuU1S;
                var4 = {};
                var4.breakingChangeDate = var11;
                var4 = var9.bind(var10)(var8, var4);
                var0.children = var4;
                var4 = var2.bind(var3)(var1, var0);
                _fun115584_ip = 334;
                continue _fun115584;
            case 289:
                var8 = var6.DXvUMK;
                var6 = {};
                var12 = function() {
                    var2 = _closure1_slot1;
                    var8 = _closure1_slot3;
                    var0 = 26;
                    var1 = var8[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.show;
                    var1 = {};
                    var7 = _closure1_slot0;
                    var4 = 27;
                    var5 = var8[var4];
                    var5 = var7.bind(var0)(var5);
                    var9 = var5.intl;
                    var6 = var9.string;
                    var5 = var8[var4];
                    var5 = var7.bind(var0)(var5);
                    var5 = var5.t;
                    var5 = var5.nFE8dD;
                    var5 = var6.bind(var9)(var5);
                    var1.title = var5;
                    var5 = var8[var4];
                    var5 = var7.bind(var0)(var5);
                    var10 = var5.intl;
                    var9 = var10.format;
                    var5 = var8[var4];
                    var5 = var7.bind(var0)(var5);
                    var5 = var5.t;
                    var6 = var5["1PAzQ6"];
                    var5 = {};
                    var11 = _closure2_slot0;
                    var11 = var11.name;
                    var5.guildName = var11;
                    var5 = var9.bind(var10)(var6, var5);
                    var1.body = var5;
                    var5 = var8[var4];
                    var5 = var7.bind(var0)(var5);
                    var9 = var5.intl;
                    var6 = var9.string;
                    var5 = var8[var4];
                    var5 = var7.bind(var0)(var5);
                    var5 = var5.t;
                    var5 = var5["ETE/oC"];
                    var5 = var6.bind(var9)(var5);
                    var1.cancelText = var5;
                    var5 = var8[var4];
                    var5 = var7.bind(var0)(var5);
                    var6 = var5.intl;
                    var5 = var6.string;
                    var4 = var8[var4];
                    var4 = var7.bind(var0)(var4);
                    var4 = var4.t;
                    var4 = var4["cY+Oob"];
                    var4 = var5.bind(var6)(var4);
                    var1.confirmText = var4;
                    var4 = function() {
                        var2 = _closure1_slot1;
                        var1 = _closure1_slot3;
                        var0 = 23;
                        var1 = var1[var0];
                        var0 = undefined;
                        var3 = var2.bind(var0)(var1);
                        var2 = var3.migratePinPermission;
                        var1 = _closure2_slot0;
                        var1 = var1.id;
                        var1 = var2.bind(var3)(var1);
                        return var0;
                    };
                    var1.onConfirm = var4;
                    var4 = false;
                    var1.hideActionSheet = var4;
                    var4 = 'primary';
                    var1.confirmVariant = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var6.onClickMigrate = var12;
                var6.breakingChangeDate = var11;
                var6 = var9.bind(var10)(var8, var6);
                var0.children = var6;
                var4 = var2.bind(var3)(var1, var0);
            case 334:
                _fun115584_ip = 444;
                continue _fun115584;
            case 336:
                var2 = _closure1_slot24;
                var8 = _closure1_slot0;
                var12 = _closure1_slot3;
                var0 = 30;
                var0 = var12[var0];
                var0 = var8.bind(var3)(var0);
                var1 = var0.Text;
                var0 = {};
                var6 = 'text-sm/normal';
                var0.variant = var6;
                var6 = 27;
                var9 = var12[var6];
                var9 = var8.bind(var3)(var9);
                var10 = var9.intl;
                var9 = var10.format;
                var6 = var12[var6];
                var6 = var8.bind(var3)(var6);
                var6 = var6.t;
                var8 = var6.Vg2oTN;
                var6 = {};
                var6.breakingChangeDate = var11;
                var6 = var9.bind(var10)(var8, var6);
                var0.children = var6;
                var4 = var2.bind(var3)(var1, var0);
            case 444:
                var2 = _closure1_slot24;
                var1 = _closure1_slot1;
                var8 = _closure1_slot3;
                var6 = 31;
                var0 = var8[var6];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var7 = _closure1_slot0;
                var6 = var8[var6];
                var6 = var7.bind(var3)(var6);
                var6 = var6.InfoBoxLooks;
                var6 = var6.WARNING;
                var0.look = var6;
                var5 = var5.migrationInfoBox;
                var0.style = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot30 = var0;
    var0 = function arg0() {
        _fun115588: for (var _fun115588_ip = 0;;) switch (_fun115588_ip) {
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
                    var7 = _closure1_slot23;
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
                    var0 = 32;
                    var3 = var1[var0];
                    var0 = undefined;
                    var5 = var4.bind(var0)(var3);
                    var4 = var5.openLazy;
                    var3 = _closure1_slot0;
                    var2 = 34;
                    var2 = var1[var2];
                    var3 = var3.bind(var0)(var2);
                    var2 = 33;
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
                var0 = 35;
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
                var2 = _closure1_slot24;
                var4 = _closure1_slot0;
                var1 = 36;
                var1 = var7[var1];
                var1 = var4.bind(var3)(var1);
                var1 = var1.RowButton;
                var4 = {};
                var9 = _closure1_slot24;
                var7 = _closure1_slot0;
                var10 = _closure1_slot3;
                var6 = 37;
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
                var6 = 27;
                var8 = var10[var6];
                var8 = var7.bind(var3)(var8);
                var11 = var8.intl;
                var9 = var11.string;
                var8 = var10[var6];
                var8 = var7.bind(var3)(var8);
                var8 = var8.t;
                if (var0) {
                    _fun115588_ip = 343;
                    continue _fun115588
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
                _fun115588_ip = 419;
                continue _fun115588;
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
    var _closure1_slot31 = var0;
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
    var6 = var3.Permissions;
    var _closure1_slot20 = var6;
    var6 = var3.GuildFeatures;
    var _closure1_slot21 = var6;
    var3 = var3.PIN_AND_BYPASS_SLOWMODE_PERMISSION_MIGRATION_BREAKING_CHANGE_TIMESTAMP;
    var _closure1_slot22 = var3;
    var3 = 14;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ContentDismissActionType;
    var _closure1_slot23 = var3;
    var3 = 15;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot24 = var6;
    var6 = var3.jsxs;
    var _closure1_slot25 = var6;
    var3 = var3.Fragment;
    var _closure1_slot26 = var3;
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
    var _closure1_slot27 = var3;
    var3 = 69;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_settings/roles/native/GuildSettingsRoles.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun115591: for (var _fun115591_ip = 0;;) switch (_fun115591_ip) {
            case 0:
                var1 = arg0;
                var6 = var1.guildId;
                var _closure2_slot0 = var6;
                var18 = var1.contentContainerStyle;
                var3 = undefined;
                var _closure2_slot13 = var3;
                var _closure2_slot14 = var3;
                var _closure2_slot15 = var3;
                var _closure2_slot16 = var3;
                var _closure2_slot17 = var3;
                var _closure2_slot18 = var3;
                var _closure2_slot19 = var3;
                var _closure2_slot20 = var3;
                var _closure2_slot21 = var3;
                var _closure2_slot22 = var3;
                var _closure2_slot23 = var3;
                var _closure2_slot24 = var3;
                var _closure2_slot25 = var3;
                var _closure2_slot26 = var3;
                var _closure2_slot27 = var3;
                var1 = _closure1_slot27;
                var17 = var1.bind(var3)();
                var _closure2_slot1 = var17;
                var2 = _closure1_slot5;
                var1 = var2.useRef;
                var24 = null;
                var19 = var1.bind(var2)(var24);
                var4 = _closure1_slot0;
                var10 = _closure1_slot3;
                var1 = 38;
                var1 = var10[var1];
                var2 = var4.bind(var3)(var1);
                var1 = var2.useNavigation;
                var2 = var1.bind(var2)();
                var _closure2_slot2 = var2;
                var7 = _closure1_slot1;
                var1 = 39;
                var1 = var10[var1];
                var1 = var7.bind(var3)(var1);
                var32 = var1.bind(var3)();
                var _closure2_slot3 = var32;
                var14 = 21;
                var1 = var10[var14];
                var11 = var4.bind(var3)(var1);
                var9 = var11.useStateFromStores;
                var1 = _closure1_slot7;
                var8 = new Array(1);
                var8[0] = var1;
                var1 = function() { // Environment: var0
                    var0 = _closure1_slot7;
                    var0 = var0.theme;
                    return var0;
                };
                var33 = var9.bind(var11)(var8, var1);
                var _closure2_slot4 = var33;
                var1 = var10[var14];
                var9 = var4.bind(var3)(var1);
                var8 = var9.useStateFromStoresObject;
                var1 = _closure1_slot12;
                var4 = new Array(6);
                var4[0] = var1;
                var1 = _closure1_slot11;
                var4[1] = var1;
                var1 = _closure1_slot9;
                var4[2] = var1;
                var1 = _closure1_slot15;
                var4[3] = var1;
                var1 = _closure1_slot14;
                var4[4] = var1;
                var1 = _closure1_slot10;
                var4[5] = var1;
                var1 = function() { // Environment: var0
                    _fun115593: for (var _fun115593_ip = 0;;) switch (_fun115593_ip) {
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
                                _fun115593_ip = 70;
                                continue _fun115593
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
                                _fun115593_ip = 101;
                                continue _fun115593
                            }
                        case 96:
                            var7 = var5.id;
                        case 101:
                            var8 = var8.bind(var9)(var7);
                            var9 = var1 != var8;
                            var7 = 0;
                            if (!var9) {
                                _fun115593_ip = 118;
                                continue _fun115593
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
                                _fun115593_ip = 147;
                                continue _fun115593
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
                                _fun115593_ip = 242;
                                continue _fun115593
                            }
                        case 210:
                            var3 = _closure1_slot2;
                            var7 = _closure1_slot3;
                            var2 = 40;
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
                var30 = var4.highestRole;
                var _closure2_slot12 = var30;
                var4 = 41;
                var4 = var10[var4];
                var10 = var7.bind(var3)(var4);
                var7 = var10.useExperiment;
                var4 = {};
                var12 = var24 == var8;
                var11 = undefined;
                if (var12) {
                    _fun115591_ip = 410;
                    continue _fun115591
                }
            case 405:
                var11 = var8.id;
            case 410:
                var4.guildId = var11;
                var11 = 'GuildSettingsRoles';
                var4.location = var11;
                var4 = var7.bind(var10)(var4);
                var10 = var4.enabled;
                _closure2_slot13 = var10;
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
                        _fun115596: for (var _fun115596_ip = 0;;) switch (_fun115596_ip) {
                            case 0:
                                var1 = _closure3_slot1;
                                var4 = undefined;
                                if (var1) {
                                    _fun115596_ip = 16;
                                    continue _fun115596
                                }
                            case 14:
                                return var4;
                            case 16:
                                var1 = global;
                                var3 = var1.setTimeout;
                                var2 = function() { // Environment: var0
                                    _fun115597: for (var _fun115597_ip = 0;;) switch (_fun115597_ip) {
                                        case 0:
                                            var0 = _closure3_slot0;
                                            var1 = var0.current;
                                            var3 = null;
                                            var0 = var3 == var1;
                                            var2 = var1;
                                            if (var0) {
                                                _fun115597_ip = 37;
                                                continue _fun115597
                                            }
                                        case 24:
                                            var1 = var1._listRef;
                                            var0 = var3 == var1;
                                            var2 = var1;
                                        case 37:
                                            var1 = var2;
                                            if (var0) {
                                                _fun115597_ip = 55;
                                                continue _fun115597
                                            }
                                        case 43:
                                            var2 = var2.current;
                                            var0 = var3 == var2;
                                            var1 = var2;
                                        case 55:
                                            if (var0) {
                                                _fun115597_ip = 68;
                                                continue _fun115597
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
                var4 = var4.bind(var3)(var19);
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
                        _fun115600: for (var _fun115600_ip = 0;;) switch (_fun115600_ip) {
                            case 0:
                                var3 = _closure1_slot12;
                                var2 = var3.getGuild;
                                var0 = _closure3_slot0;
                                var4 = var2.bind(var3)(var0);
                                var0 = {};
                                var2 = null;
                                var2 = var2 != var4;
                                if (!var2) {
                                    _fun115600_ip = 50;
                                    continue _fun115600
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
                        _fun115601: for (var _fun115601_ip = 0;;) switch (_fun115601_ip) {
                            case 0:
                                var0 = _closure3_slot2;
                                if (!var0) {
                                    _fun115601_ip = 14;
                                    continue _fun115601
                                }
                            case 10:
                                var0 = _closure3_slot1;
                            case 14:
                                if (var0) {
                                    _fun115601_ip = 74;
                                    continue _fun115601
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
                var7 = _closure1_slot5;
                var6 = var7.useState;
                var4 = false;
                var7 = var6.bind(var7)(var4);
                var6 = _closure1_slot4;
                var4 = 2;
                var6 = var6.bind(var3)(var7, var4);
                var11 = 0;
                var13 = var6[var11];
                _closure2_slot14 = var13;
                var4 = 1;
                var4 = var6[var4];
                _closure2_slot15 = var4;
                var4 = _closure1_slot29;
                var4 = var4.bind(var3)(var21, var13);
                var6 = var4.filteredRoles;
                _closure2_slot16 = var6;
                var29 = var4.hasSearchQuery;
                _closure2_slot17 = var29;
                var4 = var4.setSearchQuery;
                _closure2_slot18 = var4;
                var12 = _closure1_slot0;
                var7 = _closure1_slot3;
                var7 = var7[var14];
                var20 = var12.bind(var3)(var7);
                var14 = var20.useStateFromStoresArray;
                var7 = _closure1_slot11;
                var12 = new Array(1);
                var12[0] = var7;
                var7 = function() { // Environment: var0
                    _fun115602: for (var _fun115602_ip = 0;;) switch (_fun115602_ip) {
                        case 0:
                            var2 = _closure2_slot10;
                            var0 = null;
                            if (!(var0 == var2)) {
                                _fun115602_ip = 19;
                                continue _fun115602
                            }
                        case 13:
                            var0 = new Array(0);
                            _fun115602_ip = 46;
                            continue _fun115602;
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
                var20 = var14.bind(var20)(var12, var7);
                _closure2_slot19 = var20;
                var14 = _closure1_slot5;
                var12 = var14.useMemo;
                var7 = new Array(8);
                var7[0] = var8;
                var7[1] = var21;
                var7[2] = var20;
                var7[3] = var16;
                var7[4] = var15;
                var7[5] = var31;
                var7[6] = var30;
                var7[7] = var6;
                var6 = function() { // Environment: var0
                    _fun115603: for (var _fun115603_ip = 0;;) switch (_fun115603_ip) {
                        case 0:
                            var2 = _closure2_slot10;
                            var3 = null;
                            if (!(var3 == var2)) {
                                _fun115603_ip = 21;
                                continue _fun115603
                            }
                        case 15:
                            var5 = _closure2_slot16;
                            _fun115603_ip = 25;
                            continue _fun115603;
                        case 21:
                            var5 = _closure2_slot19;
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
                                _fun115605: for (var _fun115605_ip = 0;;) switch (_fun115605_ip) {
                                    case 0:
                                        var3 = arg0;
                                        var0 = {};
                                        var0.role = var3;
                                        var2 = _closure2_slot8;
                                        var1 = null;
                                        var5 = var1 == var2;
                                        var2 = undefined;
                                        if (var5) {
                                            _fun115605_ip = 41;
                                            continue _fun115605
                                        }
                                    case 28:
                                        var4 = _closure2_slot8;
                                        var3 = var3.id;
                                        var2 = var4[var3];
                                    case 41:
                                        var3 = var1 != var2;
                                        var1 = 0;
                                        if (!var3) {
                                            _fun115605_ip = 53;
                                            continue _fun115605
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
                                _fun115603_ip = 92;
                                continue _fun115603
                            }
                        case 74:
                            var5 = var4.findIndex;
                            var1 = function(arg0) { // Environment: var1
                                _fun115606: for (var _fun115606_ip = 0;;) switch (_fun115606_ip) {
                                    case 0:
                                        var1 = arg0;
                                        var4 = _closure1_slot2;
                                        var3 = _closure1_slot3;
                                        var0 = 40;
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
                                            _fun115606_ip = 89;
                                            continue _fun115606
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
                var6 = var12.bind(var14)(var6, var7);
                var16 = var6.roleData;
                _closure2_slot20 = var16;
                var27 = var6.firstEditableIndex;
                _closure2_slot21 = var27;
                var7 = var6.numSortableRoles;
                var26 = var6.hasRoles;
                _closure2_slot22 = var26;
                var15 = _closure1_slot5;
                var14 = var15.useCallback;
                var12 = new Array(1);
                var12[0] = var4;
                var6 = function(arg0) { // Environment: var0
                    var1 = arg0;
                    var2 = _closure2_slot18;
                    var0 = var1.toLowerCase;
                    var1 = var0.bind(var1)();
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var20 = var14.bind(var15)(var6, var12);
                var15 = _closure1_slot5;
                var14 = var15.useCallback;
                var12 = new Array(1);
                var12[0] = var8;
                var6 = function() { // Environment: var0
                    _fun115608: for (var _fun115608_ip = 0;;) switch (_fun115608_ip) {
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
                            var6 = 42;
                            var6 = var8[var6];
                            var8 = var7.bind(var0)(var6);
                            var7 = var8.collectGuildAnalyticsMetadata;
                            var10 = _closure2_slot5;
                            var6 = null;
                            var10 = var6 == var10;
                            var6 = undefined;
                            if (var10) {
                                _fun115608_ip = 105;
                                continue _fun115608
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
                            var1 = 43;
                            var1 = var3[var1];
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.open;
                            var1 = var1.bind(var2)();
                            return var0;
                    }
                };
                var22 = var14.bind(var15)(var6, var12);
                _closure2_slot23 = var22;
                var15 = _closure1_slot5;
                var14 = var15.useCallback;
                var12 = new Array(1);
                var12[0] = var2;
                var6 = function(arg0) { // Environment: var0
                    _fun115609: for (var _fun115609_ip = 0;;) switch (_fun115609_ip) {
                        case 0:
                            var6 = arguments[1];
                            var0 = undefined;
                            if (!(var6 === var0)) {
                                _fun115609_ip = 11;
                                continue _fun115609
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
                var15 = var14.bind(var15)(var6, var12);
                _closure2_slot24 = var15;
                var21 = _closure1_slot5;
                var14 = var21.useCallback;
                var12 = new Array(1);
                var12[0] = var4;
                var6 = function() { // Environment: var0
                    var3 = _closure2_slot15;
                    var0 = undefined;
                    var2 = true;
                    var2 = var3.bind(var0)(var2);
                    var2 = _closure2_slot18;
                    var1 = '';
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var6 = var14.bind(var21)(var6, var12);
                _closure2_slot25 = var6;
                var21 = _closure1_slot5;
                var14 = var21.useCallback;
                var12 = new Array(1);
                var12[0] = var4;
                var4 = function() { // Environment: var0
                    var3 = _closure2_slot18;
                    var0 = undefined;
                    var2 = '';
                    var2 = var3.bind(var0)(var2);
                    var2 = _closure2_slot15;
                    var1 = function(arg0) { // Environment: var1
                        var0 = arg0;
                        var0 = !var0;
                        return var0;
                    };
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var4 = var14.bind(var21)(var4, var12);
                _closure2_slot26 = var4;
                var23 = _closure1_slot5;
                var21 = var23.useCallback;
                var14 = new Array(2);
                var14[0] = var8;
                var14[1] = var4;
                var12 = function() { // Environment: var0
                    _fun115613: for (var _fun115613_ip = 0;;) switch (_fun115613_ip) {
                        case 0:
                            var2 = _closure1_slot15;
                            var1 = var2.getUpdates;
                            var3 = var1.bind(var2)();
                            var2 = var3.length;
                            var1 = 0;
                            var1 = var2 > var1;
                            if (!var1) {
                                _fun115613_ip = 46;
                                continue _fun115613
                            }
                        case 33:
                            var4 = _closure2_slot5;
                            var2 = null;
                            var1 = var2 != var4;
                        case 46:
                            if (!var1) {
                                _fun115613_ip = 95;
                                continue _fun115613
                            }
                        case 49:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot3;
                            var0 = 44;
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
                var21 = var21.bind(var23)(var12, var14);
                _closure2_slot27 = var21;
                var25 = _closure1_slot5;
                var23 = var25.useCallback;
                var14 = function(arg0) { // Environment: var0
                    var1 = arg0;
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var0 = 45;
                    var2 = var2[var0];
                    var0 = undefined;
                    var4 = var3.bind(var0)(var2);
                    var3 = var4.updateRoleOrder;
                    var2 = var1.from;
                    var1 = var1.to;
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
                };
                var12 = new Array(0);
                var14 = var23.bind(var25)(var14, var12);
                var28 = _closure1_slot5;
                var25 = var28.useCallback;
                var23 = new Array(5);
                var23[0] = var17;
                var23[1] = var16;
                var23[2] = var29;
                var23[3] = var13;
                var23[4] = var4;
                var12 = function() { // Environment: var0
                    _fun115615: for (var _fun115615_ip = 0;;) switch (_fun115615_ip) {
                        case 0:
                            var3 = _closure1_slot25;
                            var2 = _closure1_slot6;
                            var1 = {};
                            var4 = {};
                            var0 = _closure2_slot1;
                            var0 = var0.rolesHeader;
                            var5 = new Array(2);
                            var5[0] = var0;
                            var8 = _closure2_slot14;
                            var0 = undefined;
                            var7 = undefined;
                            if (!var8) {
                                _fun115615_ip = 57;
                                continue _fun115615
                            }
                        case 47:
                            var8 = _closure2_slot1;
                            var7 = var8.edittingRolesHeader;
                        case 57:
                            var5[1] = var7;
                            var4.style = var5;
                            var8 = _closure1_slot24;
                            var11 = _closure1_slot0;
                            var9 = _closure1_slot3;
                            var5 = 46;
                            var5 = var9[var5];
                            var5 = var11.bind(var0)(var5);
                            var7 = var5.TableRowGroupTitle;
                            var5 = {};
                            var13 = 27;
                            var12 = var9[var13];
                            var12 = var11.bind(var0)(var12);
                            var14 = var12.intl;
                            var12 = var14.formatToPlainString;
                            var9 = var9[var13];
                            var9 = var11.bind(var0)(var9);
                            var9 = var9.t;
                            var11 = var9["38N3Vz"];
                            var9 = {};
                            var15 = _closure2_slot20;
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
                            var9 = _closure2_slot14;
                            var8 = null;
                            if (var9) {
                                _fun115615_ip = 531;
                                continue _fun115615
                            }
                        case 217:
                            var9 = _closure2_slot17;
                            var8 = null;
                            if (var9) {
                                _fun115615_ip = 531;
                                continue _fun115615
                            }
                        case 229:
                            var12 = _closure1_slot25;
                            var21 = _closure1_slot0;
                            var18 = _closure1_slot3;
                            var9 = 47;
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
                            var16 = _closure1_slot24;
                            var14 = 48;
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
                            var17 = _closure1_slot24;
                            var15 = 30;
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
                            var7 = _closure2_slot14;
                            var5 = null;
                            if (!var7) {
                                _fun115615_ip = 677;
                                continue _fun115615
                            }
                        case 562:
                            var8 = _closure1_slot24;
                            var12 = _closure1_slot0;
                            var9 = _closure1_slot3;
                            var6 = 30;
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
                var25 = var25.bind(var28)(var12, var23);
                var28 = _closure1_slot5;
                var23 = var28.useCallback;
                var12 = new Array(7);
                var12[0] = var17;
                var12[1] = var22;
                var12[2] = var26;
                var12[3] = var33;
                var12[4] = var32;
                var12[5] = var8;
                var12[6] = var10;
                var10 = function() { // Environment: var0
                    _fun115616: for (var _fun115616_ip = 0;;) switch (_fun115616_ip) {
                        case 0:
                            var1 = _closure2_slot3;
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot3;
                            var0 = 49;
                            var0 = var3[var0];
                            var4 = undefined;
                            var3 = var2.bind(var4)(var0);
                            var2 = var3.isThemeDark;
                            var0 = _closure2_slot4;
                            var0 = var2.bind(var3)(var0);
                            var2 = _closure1_slot1;
                            var3 = _closure1_slot3;
                            if (var1) {
                                _fun115616_ip = 89;
                                continue _fun115616
                            }
                        case 58:
                            if (var0) {
                                _fun115616_ip = 75;
                                continue _fun115616
                            }
                        case 61:
                            var1 = 53;
                            var1 = var3[var1];
                            var11 = var2.bind(var4)(var1);
                            _fun115616_ip = 87;
                            continue _fun115616;
                        case 75:
                            var1 = 52;
                            var1 = var3[var1];
                            var11 = var2.bind(var4)(var1);
                        case 87:
                            _fun115616_ip = 121;
                            continue _fun115616;
                        case 89:
                            if (var0) {
                                _fun115616_ip = 106;
                                continue _fun115616
                            }
                        case 92:
                            var0 = 51;
                            var0 = var3[var0];
                            var0 = var2.bind(var4)(var0);
                            _fun115616_ip = 118;
                            continue _fun115616;
                        case 106:
                            var1 = 50;
                            var1 = var3[var1];
                            var0 = var2.bind(var4)(var1);
                        case 118:
                            var11 = var0;
                        case 121:
                            var0 = _closure2_slot13;
                            if (var0) {
                                _fun115616_ip = 134;
                                continue _fun115616
                            }
                        case 128:
                            var13 = _closure1_slot30;
                            _fun115616_ip = 138;
                            continue _fun115616;
                        case 134:
                            var13 = _closure1_slot31;
                        case 138:
                            var0 = _closure2_slot22;
                            var3 = _closure1_slot25;
                            if (var0) {
                                _fun115616_ip = 702;
                                continue _fun115616
                            }
                        case 152:
                            var1 = _closure1_slot6;
                            var0 = {};
                            var12 = _closure2_slot1;
                            var2 = var12.emptySubheaderContainer;
                            var0.style = var2;
                            var5 = _closure1_slot24;
                            var2 = {};
                            var7 = var12.emptyIlloContainer;
                            var2.style = var7;
                            var10 = _closure1_slot24;
                            var8 = _closure1_slot1;
                            var14 = _closure1_slot3;
                            var7 = 54;
                            var7 = var14[var7];
                            var8 = var8.bind(var4)(var7);
                            var7 = {};
                            var14 = var12.emptyIllo;
                            var12 = new Array(2);
                            var12[0] = var14;
                            var15 = _closure2_slot3;
                            var14 = null;
                            if (!var15) {
                                _fun115616_ip = 247;
                                continue _fun115616
                            }
                        case 237:
                            var15 = _closure2_slot1;
                            var14 = var15.emptyIlloLarge;
                        case 247:
                            var12[1] = var14;
                            var7.style = var12;
                            var7.source = var11;
                            var7 = var10.bind(var4)(var8, var7);
                            var2.children = var7;
                            var5 = var5.bind(var4)(var1, var2);
                            var2 = new Array(3);
                            var2[0] = var5;
                            var7 = _closure1_slot25;
                            var8 = _closure1_slot6;
                            var5 = {};
                            var10 = _closure2_slot1;
                            var11 = var10.emptySubheaderBody;
                            var5.style = var11;
                            var15 = _closure1_slot24;
                            var21 = _closure1_slot0;
                            var22 = _closure1_slot3;
                            var12 = 30;
                            var11 = var22[var12];
                            var11 = var21.bind(var4)(var11);
                            var14 = var11.Text;
                            var11 = {
                                'style': null,
                                'variant': 'heading-xl/extrabold',
                                'color': 'mobile-text-heading-primary'
                            };
                            var16 = var10.subheader;
                            var11.style = var16;
                            var18 = 27;
                            var16 = var22[var18];
                            var16 = var21.bind(var4)(var16);
                            var19 = var16.intl;
                            var17 = var19.string;
                            var16 = var22[var18];
                            var16 = var21.bind(var4)(var16);
                            var16 = var16.t;
                            var16 = var16.ALlnbi;
                            var16 = var17.bind(var19)(var16);
                            var11.children = var16;
                            var14 = var15.bind(var4)(var14, var11);
                            var11 = new Array(3);
                            var11[0] = var14;
                            var15 = _closure1_slot24;
                            var12 = var22[var12];
                            var12 = var21.bind(var4)(var12);
                            var14 = var12.Text;
                            var12 = {
                                'style': null,
                                'variant': 'text-sm/medium',
                                'color': 'text-default'
                            };
                            var16 = var10.subheaderBody;
                            var12.style = var16;
                            var16 = var22[var18];
                            var16 = var21.bind(var4)(var16);
                            var19 = var16.intl;
                            var17 = var19.string;
                            var16 = var22[var18];
                            var16 = var21.bind(var4)(var16);
                            var16 = var16.t;
                            var16 = var16["1ydhVp"];
                            var16 = var17.bind(var19)(var16);
                            var12.children = var16;
                            var12 = var15.bind(var4)(var14, var12);
                            var11[1] = var12;
                            var14 = _closure1_slot24;
                            var12 = {};
                            var15 = var10.subheaderButton;
                            var12.style = var15;
                            var17 = _closure1_slot24;
                            var15 = 55;
                            var15 = var22[var15];
                            var15 = var21.bind(var4)(var15);
                            var16 = var15.Button;
                            var15 = {};
                            var19 = var22[var18];
                            var19 = var21.bind(var4)(var19);
                            var20 = var19.intl;
                            var19 = var20.string;
                            var18 = var22[var18];
                            var18 = var21.bind(var4)(var18);
                            var18 = var18.t;
                            var18 = var18.JZZjQK;
                            var18 = var19.bind(var20)(var18);
                            var15.text = var18;
                            var18 = _closure2_slot23;
                            var15.onPress = var18;
                            var15 = var17.bind(var4)(var16, var15);
                            var12.children = var15;
                            var12 = var14.bind(var4)(var8, var12);
                            var11[2] = var12;
                            var5.children = var11;
                            var5 = var7.bind(var4)(var8, var5);
                            var2[1] = var5;
                            var7 = _closure1_slot24;
                            var5 = {};
                            var10 = var10.divider;
                            var5.style = var10;
                            var5 = var7.bind(var4)(var8, var5);
                            var2[2] = var5;
                            var0.children = var2;
                            var0 = var3.bind(var4)(var1, var0);
                            _fun115616_ip = 947;
                            continue _fun115616;
                        case 702:
                            var2 = _closure1_slot26;
                            var1 = {};
                            var7 = _closure1_slot6;
                            var5 = {};
                            var12 = _closure2_slot1;
                            var8 = var12.subheaderContainer;
                            var5.style = var8;
                            var11 = _closure1_slot24;
                            var16 = _closure1_slot0;
                            var17 = _closure1_slot3;
                            var8 = 30;
                            var8 = var17[var8];
                            var8 = var16.bind(var4)(var8);
                            var10 = var8.Text;
                            var8 = {
                                'style': null,
                                'variant': 'text-sm/medium',
                                'color': 'interactive-text-default'
                            };
                            var12 = var12.subheaderDescription;
                            var8.style = var12;
                            var12 = 27;
                            var14 = var17[var12];
                            var14 = var16.bind(var4)(var14);
                            var15 = var14.intl;
                            var14 = var15.string;
                            var12 = var17[var12];
                            var12 = var16.bind(var4)(var12);
                            var12 = var12.t;
                            var12 = var12["1ydhVp"];
                            var12 = var14.bind(var15)(var12);
                            var8.children = var12;
                            var10 = var11.bind(var4)(var10, var8);
                            var8 = new Array(2);
                            var8[0] = var10;
                            var11 = _closure2_slot5;
                            var10 = null;
                            var10 = var10 != var11;
                            if (!var10) {
                                _fun115616_ip = 881;
                                continue _fun115616
                            }
                        case 861:
                            var12 = _closure1_slot24;
                            var11 = {};
                            var14 = _closure2_slot5;
                            var11.guild = var14;
                            var10 = var12.bind(var4)(var13, var11);
                        case 881:
                            var8[1] = var10;
                            var5.children = var8;
                            var7 = var3.bind(var4)(var7, var5);
                            var5 = new Array(2);
                            var5[0] = var7;
                            var8 = _closure1_slot24;
                            var7 = _closure1_slot6;
                            var6 = {};
                            var9 = _closure2_slot1;
                            var9 = var9.divider;
                            var6.style = var9;
                            var6 = var8.bind(var4)(var7, var6);
                            var5[1] = var6;
                            var1.children = var5;
                            var0 = var3.bind(var4)(var2, var1);
                        case 947:
                            return var0;
                    }
                };
                var23 = var23.bind(var28)(var10, var12);
                var28 = _closure1_slot5;
                var12 = var28.useCallback;
                var10 = new Array(6);
                var10[0] = var17;
                var10[1] = var15;
                var10[2] = var8;
                var10[3] = var31;
                var10[4] = var30;
                var10[5] = var9;
                var9 = function() { // Environment: var0
                    _fun115617: for (var _fun115617_ip = 0;;) switch (_fun115617_ip) {
                        case 0:
                            var1 = _closure2_slot5;
                            var0 = null;
                            if (!(var0 != var1)) {
                                _fun115617_ip = 217;
                                continue _fun115617
                            }
                        case 16:
                            var1 = _closure2_slot6;
                            if (!(var0 != var1)) {
                                _fun115617_ip = 217;
                                continue _fun115617
                            }
                        case 27:
                            var2 = _closure1_slot2;
                            var11 = _closure1_slot3;
                            var1 = 40;
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
                            var3 = _closure1_slot24;
                            var2 = _closure1_slot6;
                            var1 = {};
                            var6 = _closure2_slot1;
                            var6 = var6.everyoneWrapper;
                            var1.style = var6;
                            var7 = _closure1_slot24;
                            var6 = _closure1_slot1;
                            var5 = 56;
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
                var28 = var12.bind(var28)(var9, var10);
                var12 = _closure1_slot5;
                var10 = var12.useCallback;
                var9 = new Array(8);
                var9[0] = var8;
                var9[1] = var16;
                var9[2] = var31;
                var9[3] = var30;
                var9[4] = var13;
                var9[5] = var27;
                var9[6] = var15;
                var9[7] = var6;
                var6 = function(arg0, arg1) { // Environment: var0
                    _fun115619: for (var _fun115619_ip = 0;;) switch (_fun115619_ip) {
                        case 0:
                            var7 = arg1;
                            var0 = _closure2_slot5;
                            var11 = null;
                            if (!(var11 != var0)) {
                                _fun115619_ip = 280;
                                continue _fun115619
                            }
                        case 19:
                            var0 = _closure2_slot20;
                            var1 = var0[var7];
                            var0 = var1.role;
                            var9 = var1.memberCount;
                            var1 = _closure2_slot20;
                            var8 = var1.length;
                            var2 = _closure1_slot2;
                            var3 = _closure1_slot3;
                            var1 = 40;
                            var1 = var3[var1];
                            var4 = undefined;
                            var10 = var2.bind(var4)(var1);
                            var6 = var10.isRoleHigher;
                            var18 = _closure2_slot5;
                            var17 = _closure2_slot11;
                            var16 = _closure2_slot12;
                            var19 = var10;
                            var15 = var0;
                            var1 = var19[var6](var18, var17, var16, var15, var14);
                            var10 = !var1;
                            var1 = _closure2_slot14;
                            if (var1) {
                                _fun115619_ip = 119;
                                continue _fun115619
                            }
                        case 111:
                            var1 = 0;
                            var6 = var1 === var7;
                            _fun115619_ip = 127;
                            continue _fun115619;
                        case 119:
                            var1 = _closure2_slot21;
                            var6 = var7 === var1;
                        case 127:
                            var3 = _closure1_slot24;
                            var2 = _closure1_slot1;
                            var12 = _closure1_slot3;
                            var1 = 56;
                            var1 = var12[var1];
                            var2 = var2.bind(var4)(var1);
                            var1 = {};
                            var12 = _closure2_slot14;
                            var1.sorting = var12;
                            var12 = _closure2_slot5;
                            var12 = var11 != var12;
                            if (!var12) {
                                _fun115619_ip = 182;
                                continue _fun115619
                            }
                        case 173:
                            var13 = _closure1_slot8;
                            var12 = var13.bind(var4)(var0);
                        case 182:
                            var1.isEveryoneRole = var12;
                            var1.role = var0;
                            var1.locked = var10;
                            var10 = _closure2_slot24;
                            var1.onPress = var10;
                            var10 = _closure2_slot5;
                            var11 = var11 == var10;
                            var10 = undefined;
                            if (var11) {
                                _fun115619_ip = 227;
                                continue _fun115619
                            }
                        case 218:
                            var11 = _closure2_slot5;
                            var10 = var11.id;
                        case 227:
                            var1.guildId = var10;
                            var1.numMembers = var9;
                            var1.isFirstRole = var6;
                            var6 = 1;
                            var6 = var8 - var6;
                            var6 = var7 === var6;
                            var1.isLastRole = var6;
                            var5 = _closure2_slot25;
                            var1.onLongPress = var5;
                            var0 = var0.id;
                            var0 = var3.bind(var4)(var2, var1, var0);
                            return var0;
                        case 280:
                            var3 = _closure1_slot24;
                            var2 = _closure1_slot26;
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
                var6[0] = var22;
                var6[1] = var21;
                var6[2] = var4;
                var6[3] = var26;
                var6[4] = var13;
                var6[5] = var2;
                var4 = function() { // Environment: var0
                    _fun115621: for (var _fun115621_ip = 0;;) switch (_fun115621_ip) {
                        case 0:
                            var3 = _closure2_slot2;
                            var2 = var3.setOptions;
                            var1 = {};
                            var7 = _closure2_slot14;
                            var0 = undefined;
                            var6 = undefined;
                            if (!var7) {
                                _fun115621_ip = 35;
                                continue _fun115621
                            }
                        case 28:
                            var6 = function() { // Environment: var5
                                var3 = _closure1_slot24;
                                var7 = _closure1_slot0;
                                var8 = _closure1_slot3;
                                var0 = 57;
                                var0 = var8[var0];
                                var2 = undefined;
                                var0 = var7.bind(var2)(var0);
                                var1 = var0.HeaderActionButton;
                                var0 = {};
                                var4 = _closure2_slot26;
                                var0.onPress = var4;
                                var4 = 27;
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
                            var6 = _closure2_slot14;
                            if (var6) {
                                _fun115621_ip = 65;
                                continue _fun115621
                            }
                        case 47:
                            var6 = _closure2_slot22;
                            var4 = undefined;
                            if (!var6) {
                                _fun115621_ip = 63;
                                continue _fun115621
                            }
                        case 56:
                            var4 = function() { // Environment: var5
                                var3 = _closure1_slot24;
                                var7 = _closure1_slot0;
                                var8 = _closure1_slot3;
                                var0 = 57;
                                var0 = var8[var0];
                                var2 = undefined;
                                var0 = var7.bind(var2)(var0);
                                var1 = var0.HeaderActionButton;
                                var0 = {};
                                var5 = _closure2_slot23;
                                var0.onPress = var5;
                                var5 = _closure1_slot1;
                                var4 = 58;
                                var4 = var8[var4];
                                var4 = var5.bind(var2)(var4);
                                var0.source = var4;
                                var4 = 27;
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
                            _fun115621_ip = 72;
                            continue _fun115621;
                        case 65:
                            var4 = function() { // Environment: var5
                                var3 = _closure1_slot24;
                                var7 = _closure1_slot0;
                                var8 = _closure1_slot3;
                                var0 = 57;
                                var0 = var8[var0];
                                var2 = undefined;
                                var0 = var7.bind(var2)(var0);
                                var1 = var0.HeaderActionButton;
                                var0 = {};
                                var4 = _closure2_slot27;
                                var0.onPress = var4;
                                var4 = 27;
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
                            var4 = 27;
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
                    _fun115625: for (var _fun115625_ip = 0;;) switch (_fun115625_ip) {
                        case 0:
                            var0 = _closure2_slot14;
                            if (!var0) {
                                _fun115625_ip = 20;
                                continue _fun115625
                            }
                        case 10:
                            var1 = _closure2_slot5;
                            var0 = null;
                            if (!(var0 == var1)) {
                                _fun115625_ip = 57;
                                continue _fun115625
                            }
                        case 20:
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot3;
                            var0 = 45;
                            var1 = var1[var0];
                            var0 = undefined;
                            var1 = var2.bind(var0)(var1);
                            var0 = var1.stopReordering;
                            var0 = var0.bind(var1)();
                            _fun115625_ip = 102;
                            continue _fun115625;
                        case 57:
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot3;
                            var0 = 45;
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
                            var0 = 59;
                            var1 = var1[var0];
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.isIOS;
                            var1 = var1.bind(var2)();
                            if (!var1) {
                                _fun115625_ip = 169;
                                continue _fun115625
                            }
                        case 140:
                            var3 = _closure2_slot2;
                            var2 = var3.setOptions;
                            var1 = {};
                            var4 = _closure2_slot14;
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
                    _fun115626: for (var _fun115626_ip = 0;;) switch (_fun115626_ip) {
                        case 0:
                            var2 = _closure2_slot5;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun115626_ip = 145;
                                continue _fun115626
                            }
                        case 16:
                            var4 = _closure2_slot7;
                            var5 = _closure1_slot0;
                            var3 = _closure1_slot3;
                            var2 = 60;
                            var2 = var3[var2];
                            var3 = undefined;
                            var2 = var5.bind(var3)(var2);
                            var2 = var2.MAX_PREFETCH_MEMBER_COUNT;
                            if (!(var4 <= var2)) {
                                _fun115626_ip = 105;
                                continue _fun115626
                            }
                        case 55:
                            var4 = _closure1_slot1;
                            var5 = _closure1_slot3;
                            var2 = 61;
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
                            var1 = 62;
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
                        _fun115628: for (var _fun115628_ip = 0;;) switch (_fun115628_ip) {
                            case 0:
                                var0 = _closure2_slot14;
                                if (!var0) {
                                    _fun115628_ip = 45;
                                    continue _fun115628
                                }
                            case 10:
                                var2 = _closure1_slot1;
                                var1 = _closure1_slot3;
                                var0 = 45;
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
                var2 = _closure1_slot25;
                var1 = _closure1_slot26;
                var0 = {};
                var6 = null;
                if (var13) {
                    _fun115591_ip = 1482;
                    continue _fun115591
                }
            case 1332:
                var4 = 10;
                var4 = var7 < var4;
                var6 = null;
                if (var4) {
                    _fun115591_ip = 1482;
                    continue _fun115591
                }
            case 1347:
                var8 = _closure1_slot24;
                var7 = _closure1_slot6;
                var4 = {};
                var10 = var17.searchWrapper;
                var9 = new Array(2);
                var9[0] = var10;
                var10 = {};
                var11 = 0;
                if (!var29) {
                    _fun115591_ip = 1408;
                    continue _fun115591
                }
            case 1378:
                var22 = _closure1_slot1;
                var27 = _closure1_slot3;
                var21 = 17;
                var21 = var27[var21];
                var21 = var22.bind(var3)(var21);
                var21 = var21.spacing;
                var11 = var21.PX_16;
            case 1408:
                var10.paddingBottom = var11;
                var9[1] = var10;
                var4.style = var9;
                var11 = _closure1_slot24;
                var10 = _closure1_slot0;
                var21 = _closure1_slot3;
                var9 = 63;
                var9 = var21[var9];
                var9 = var10.bind(var3)(var9);
                var10 = var9.SearchField;
                var9 = {};
                var21 = 'md';
                var9.size = var21;
                var9.onChange = var20;
                var9 = var11.bind(var3)(var10, var9);
                var4.children = var9;
                var6 = var8.bind(var3)(var7, var4);
            case 1482:
                var4 = new Array(4);
                var4[0] = var6;
                var8 = _closure1_slot24;
                var7 = _closure1_slot6;
                var6 = {};
                var9 = null;
                if (!var13) {
                    _fun115591_ip = 1770;
                    continue _fun115591
                }
            case 1508:
                var20 = _closure1_slot25;
                var11 = _closure1_slot26;
                var10 = {};
                var22 = var25.bind(var3)();
                var21 = new Array(2);
                var21[0] = var22;
                var22 = null;
                if (var26) {
                    _fun115591_ip = 1756;
                    continue _fun115591
                }
            case 1538:
                var31 = _closure1_slot24;
                var38 = _closure1_slot0;
                var39 = _closure1_slot3;
                var27 = 64;
                var27 = var39[var27];
                var27 = var38.bind(var3)(var27);
                var30 = var27.FormRow;
                var27 = {};
                var34 = _closure1_slot24;
                var36 = _closure1_slot1;
                var35 = 65;
                var32 = var39[var35];
                var33 = var36.bind(var3)(var32);
                var32 = {};
                var37 = var17.emptyRolesIcon;
                var32.style = var37;
                var35 = var39[var35];
                var35 = var36.bind(var3)(var35);
                var35 = var35.Sizes;
                var35 = var35.LARGE;
                var32.size = var35;
                var35 = 66;
                var35 = var39[var35];
                var35 = var36.bind(var3)(var35);
                var32.source = var35;
                var32 = var34.bind(var3)(var33, var32);
                var27.leading = var32;
                var34 = _closure1_slot24;
                var32 = 30;
                var32 = var39[var32];
                var32 = var38.bind(var3)(var32);
                var33 = var32.Text;
                var32 = {
                    'variant': 'text-md/semibold',
                    'color': 'interactive-text-default'
                };
                var35 = 27;
                var36 = var39[var35];
                var36 = var38.bind(var3)(var36);
                var37 = var36.intl;
                var36 = var37.string;
                var35 = var39[var35];
                var35 = var38.bind(var3)(var35);
                var35 = var35.t;
                var35 = var35.nZfHsf;
                var35 = var36.bind(var37)(var35);
                var32.children = var35;
                var32 = var34.bind(var3)(var33, var32);
                var27.label = var32;
                var22 = var31.bind(var3)(var30, var27);
            case 1756:
                var21[1] = var22;
                var10.children = var21;
                var9 = var20.bind(var3)(var11, var10);
            case 1770:
                var6.children = var9;
                var6 = var8.bind(var3)(var7, var6);
                var4[1] = var6;
                var8 = _closure1_slot24;
                var7 = _closure1_slot6;
                var6 = {};
                var9 = var17.container;
                var6.style = var9;
                var11 = _closure1_slot24;
                var10 = _closure1_slot1;
                var20 = _closure1_slot3;
                var9 = 67;
                var9 = var20[var9];
                var10 = var10.bind(var3)(var9);
                var9 = {};
                var9.ref = var19;
                var19 = null;
                if (var13) {
                    _fun115591_ip = 1901;
                    continue _fun115591
                }
            case 1838:
                var22 = _closure1_slot25;
                var21 = _closure1_slot26;
                var20 = {};
                var27 = null;
                if (var29) {
                    _fun115591_ip = 1857;
                    continue _fun115591
                }
            case 1853:
                var27 = var23.bind(var3)();
            case 1857:
                var23 = new Array(3);
                var23[0] = var27;
                var27 = null;
                if (var29) {
                    _fun115591_ip = 1874;
                    continue _fun115591
                }
            case 1870:
                var27 = var28.bind(var3)();
            case 1874:
                var23[1] = var27;
                var24 = null;
                if (!var26) {
                    _fun115591_ip = 1887;
                    continue _fun115591
                }
            case 1883:
                var24 = var25.bind(var3)();
            case 1887:
                var23[2] = var24;
                var20.children = var23;
                var19 = var22.bind(var3)(var21, var20);
            case 1901:
                var9.header = var19;
                var19 = var17.container;
                var9.wrapperStyles = var19;
                var19 = var17.scrollContainer;
                var17 = new Array(2);
                var17[0] = var19;
                var17[1] = var18;
                var9.contentContainerStyle = var17;
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
                var7 = _closure1_slot24;
                var6 = _closure1_slot0;
                var8 = _closure1_slot3;
                var5 = 68;
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 3155, 1666, 1216, 1599, 1665, 1410, 3050, 9801, 14707, 14708, 660, 1369, 33, 1297, 671, 4645, 795, 14709, 566, 14622, 8114, 3171, 1358, 3962, 1234, 3091, 3004, 3900, 6853, 3237, 14710, 1307, 6499, 5342, 8249, 1469, 7647, 3055, 12545, 4266, 14711, 14720, 14721, 5325, 4865, 11020, 3165, 14722, 14723, 14724, 14725, 4667, 4043, 14726, 5284, 11325, 478, 14718, 4642, 9802, 6971, 5340, 4045, 8103, 13417, 5167, 2]);