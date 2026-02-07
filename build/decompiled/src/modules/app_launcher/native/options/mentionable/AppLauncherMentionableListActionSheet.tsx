// modules/app_launcher/native/options/mentionable/AppLauncherMentionableListActionSheet.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var4 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var _closure1_slot2 = var6;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var1);
    var0 = 0;
    var1 = var6[var0];
    var0 = undefined;
    var1 = var4.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 1;
    var4 = var6[var1];
    var1 = metroImportAll;
    var1 = var1.bind(var0)(var4);
    var _closure1_slot4 = var1;
    var1 = 2;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var1 = var1.RelationshipTypes;
    var _closure1_slot5 = var1;
    var1 = 3;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var4 = var1.jsx;
    var _closure1_slot6 = var4;
    var1 = var1.jsxs;
    var _closure1_slot7 = var1;
    var1 = {};
    var4 = 'user';
    var1.USER = var4;
    var4 = 'role';
    var1.ROLE = var4;
    var4 = 'global';
    var1.GLOBAL = var4;
    var _closure1_slot8 = var1;
    var4 = 17;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/app_launcher/native/options/mentionable/AppLauncherMentionableListActionSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function arg0() {
        _fun108764: for (var _fun108764_ip = 0;;) switch (_fun108764_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.onMentionablePress;
                var _closure2_slot0 = var0;
                var9 = var1.onActionSheetDismiss;
                var _closure2_slot1 = var9;
                var0 = var1.channel;
                var _closure2_slot2 = var0;
                var13 = var1.option;
                var _closure2_slot3 = var13;
                var4 = _closure1_slot4;
                var2 = var4.useState;
                var1 = '';
                var1 = var2.bind(var4)(var1);
                var11 = _closure1_slot3;
                var3 = undefined;
                var5 = 2;
                var1 = var11.bind(var3)(var1, var5);
                var7 = 0;
                var8 = var1[var7];
                var _closure2_slot4 = var8;
                var2 = 1;
                var1 = var1[var2];
                var _closure2_slot5 = var1;
                var12 = var4.useRef;
                var1 = null;
                var12 = var12.bind(var4)(var1);
                var _closure2_slot6 = var12;
                var14 = var4.useState;
                var1 = new Array(0);
                var1 = var14.bind(var4)(var1);
                var1 = var11.bind(var3)(var1, var5);
                var11 = var1[var7];
                var _closure2_slot7 = var11;
                var1 = var1[var2];
                var _closure2_slot8 = var1;
                var1 = var0.guild_id;
                var _closure2_slot9 = var1;
                var5 = var11.length;
                var2 = var4.useEffect;
                var1 = new Array(3);
                var1[0] = var8;
                var1[1] = var13;
                var1[2] = var0;
                var0 = function() { // Environment: var10
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var0 = 4;
                    var1 = var5[var0];
                    var0 = undefined;
                    var7 = var4.bind(var0)(var1);
                    var6 = var7.getApplicationCommandOptionQueryOptions;
                    var4 = _closure2_slot3;
                    var6 = var6.bind(var7)(var4);
                    var4 = _closure1_slot1;
                    var2 = 5;
                    var2 = var5[var2];
                    var5 = var4.bind(var0)(var2);
                    var4 = var5.queryMentionResults;
                    var2 = {};
                    var7 = _closure2_slot4;
                    var2.query = var7;
                    var7 = _closure2_slot2;
                    var2.channel = var7;
                    var7 = var6.canMentionEveryone;
                    var2.canMentionEveryone = var7;
                    var7 = var6.canMentionHere;
                    var2.canMentionHere = var7;
                    var7 = var6.canMentionUsers;
                    var2.canMentionUsers = var7;
                    var7 = var6.canMentionRoles;
                    var2.canMentionRoles = var7;
                    var7 = var6.canMentionAnyGuildUser;
                    var2.includeAllGuildUsers = var7;
                    var6 = var6.canMentionNonMentionableRoles;
                    var2.includeNonMentionableRoles = var6;
                    var6 = true;
                    var2.request = var6;
                    var7 = 10;
                    var2.limit = var7;
                    var2.allowSnowflake = var6;
                    var5 = var4.bind(var5)(var2);
                    var2 = _closure2_slot8;
                    var6 = var5.users;
                    var4 = var6.map;
                    var1 = function(arg0) { // Environment: var3
                        var0 = {};
                        var1 = _closure1_slot8;
                        var1 = var1.USER;
                        var0.type = var1;
                        var1 = arg0;
                        var0.result = var1;
                        return var0;
                    };
                    var10 = var4.bind(var6)(var1);
                    var1 = new Array(0);
                    var9 = 0;
                    var11 = var1;
                    var9 = arraySpread(var11, var10, var9);
                    var8 = var5.roles;
                    var7 = var8.map;
                    var4 = function(arg0) { // Environment: var3
                        var0 = {};
                        var1 = _closure1_slot8;
                        var1 = var1.ROLE;
                        var0.type = var1;
                        var1 = arg0;
                        var0.result = var1;
                        return var0;
                    };
                    var10 = var7.bind(var8)(var4);
                    var11 = var1;
                    var9 = arraySpread(var11, var10, var9);
                    var6 = var5.globals;
                    var5 = var6.map;
                    var3 = function(arg0) { // Environment: var3
                        var0 = {};
                        var1 = _closure1_slot8;
                        var1 = var1.GLOBAL;
                        var0.type = var1;
                        var1 = arg0;
                        var0.result = var1;
                        return var0;
                    };
                    var10 = var5.bind(var6)(var3);
                    var11 = var1;
                    var3 = arraySpread(var11, var10, var9);
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var0 = var2.bind(var4)(var0, var1);
                var2 = _closure1_slot7;
                var8 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 7;
                var0 = var4[var0];
                var0 = var8.bind(var3)(var0);
                var1 = var0.AppLauncherCommandOptionActionSheet;
                var0 = {};
                var0.option = var13;
                var0.onDismiss = var9;
                var13 = _closure1_slot6;
                var9 = 8;
                var4 = var4[var9];
                var4 = var8.bind(var3)(var4);
                var8 = var4.AppLauncherListSearchBar;
                var4 = {};
                var14 = function arg0() {
                    _fun108769: for (var _fun108769_ip = 0;;) switch (_fun108769_ip) {
                        case 0:
                            var2 = arg0;
                            var3 = _closure2_slot5;
                            var0 = var2.toLowerCase;
                            var2 = var0.bind(var2)();
                            var0 = undefined;
                            var2 = var3.bind(var0)(var2);
                            var1 = _closure2_slot6;
                            var3 = var1.current;
                            var1 = null;
                            if (!(var1 != var3)) {
                                _fun108769_ip = 63;
                                continue _fun108769
                            }
                        case 42:
                            var2 = var3.scrollToOffset;
                            var1 = {
                                'offset': 0,
                                'animated': false
                            };
                            var1 = var2.bind(var3)(var1);
                        case 63:
                            return var0;
                    }
                };
                var4.onChange = var14;
                var8 = var13.bind(var3)(var8, var4);
                var4 = new Array(2);
                var4[0] = var8;
                if (!(var7 !== var5)) {
                    _fun108764_ip = 354;
                    continue _fun108764
                }
            case 297:
                var8 = _closure1_slot6;
                var7 = _closure1_slot0;
                var5 = _closure1_slot2;
                var5 = var5[var9];
                var5 = var7.bind(var3)(var5);
                var7 = var5.AppLauncherList;
                var5 = {};
                var5.ref = var12;
                var5.data = var11;
                var10 = function arg0() {
                    _fun108770: for (var _fun108770_ip = 0;;) switch (_fun108770_ip) {
                        case 0:
                            var2 = arg0;
                            var0 = var2.item;
                            var _closure3_slot0 = var0;
                            var2 = var2.index;
                            var5 = {};
                            var1 = function() {
                                var3 = _closure2_slot0;
                                var2 = {};
                                var0 = _closure3_slot0;
                                var2.mentionable = var0;
                                var0 = undefined;
                                var2 = var3.bind(var0)(var2);
                                var3 = _closure1_slot1;
                                var4 = _closure1_slot2;
                                var2 = 6;
                                var2 = var4[var2];
                                var4 = var3.bind(var0)(var2);
                                var3 = var4.hideActionSheet;
                                var2 = 'AppLauncherMentionableListActionSheet';
                                var2 = var3.bind(var4)(var2);
                                var1 = _closure2_slot1;
                                var1 = var1.bind(var0)();
                                return var0;
                            };
                            var5.onPress = var1;
                            var1 = 0;
                            var1 = var1 === var2;
                            var5.start = var1;
                            var1 = _closure2_slot7;
                            var3 = var1.length;
                            var1 = 1;
                            var1 = var3 - var1;
                            var1 = var2 === var1;
                            var5.end = var1;
                            var2 = var0.type;
                            var1 = _closure1_slot8;
                            var1 = var1.USER;
                            if (!(var1 !== var2)) {
                                _fun108770_ip = 486;
                                continue _fun108770
                            }
                        case 94:
                            var1 = _closure1_slot8;
                            var1 = var1.ROLE;
                            if (!(var1 !== var2)) {
                                _fun108770_ip = 409;
                                continue _fun108770
                            }
                        case 111:
                            var1 = _closure1_slot8;
                            var1 = var1.GLOBAL;
                            if (!(var1 !== var2)) {
                                _fun108770_ip = 129;
                                continue _fun108770
                            }
                        case 125:
                            var1 = undefined;
                            return var1;
                        case 129:
                            var1 = var0.result;
                            var3 = var1.text;
                            var4 = _closure1_slot1;
                            var8 = _closure1_slot2;
                            var2 = 13;
                            var2 = var8[var2];
                            var8 = undefined;
                            var4 = var4.bind(var8)(var2);
                            var2 = var4.MENTION_EVERYONE;
                            var2 = var2.bind(var4)();
                            var2 = var2.text;
                            if (!(var3 !== var2)) {
                                _fun108770_ip = 261;
                                continue _fun108770
                            }
                        case 181:
                            var4 = _closure1_slot6;
                            var3 = _closure1_slot1;
                            var11 = _closure1_slot2;
                            var2 = 14;
                            var2 = var11[var2];
                            var3 = var3.bind(var8)(var2);
                            var2 = {};
                            var10 = _closure1_slot0;
                            var9 = 15;
                            var9 = var11[var9];
                            var9 = var10.bind(var8)(var9);
                            var10 = var9.UserCircleIcon;
                            var9 = {
                                'size': 'sm',
                                'color': 'interactive-text-default'
                            };
                            var9 = var4.bind(var8)(var10, var9);
                            var2.icon = var9;
                            var9 = var4.bind(var8)(var3, var2);
                            _fun108770_ip = 299;
                            continue _fun108770;
                        case 261:
                            var4 = _closure1_slot6;
                            var3 = _closure1_slot0;
                            var10 = _closure1_slot2;
                            var2 = 12;
                            var2 = var10[var2];
                            var2 = var3.bind(var8)(var2);
                            var3 = var2.RoleIcon;
                            var2 = {};
                            var9 = var4.bind(var8)(var3, var2);
                        case 299:
                            var4 = _closure1_slot6;
                            var11 = _closure1_slot0;
                            var12 = _closure1_slot2;
                            var2 = 16;
                            var2 = var12[var2];
                            var2 = var11.bind(var8)(var2);
                            var3 = var2.TableRow;
                            var2 = {};
                            var10 = 10;
                            var10 = var12[var10];
                            var10 = var11.bind(var8)(var10);
                            var11 = var10.Text;
                            var10 = {
                                'lineClamp': 1,
                                'variant': 'text-md/semibold',
                                'color': 'mobile-text-heading-primary'
                            };
                            var12 = var1.text;
                            var10.children = var12;
                            var10 = var4.bind(var8)(var11, var10);
                            var2.label = var10;
                            var2.icon = var9;
                            var15 = var2;
                            var14 = var5;
                            var9 = copyDataProperties(var15, var14);
                            var1 = var1.text;
                            var1 = var4.bind(var8)(var3, var2, var1);
                            return var1;
                        case 409:
                            var1 = var0.result;
                            var8 = _closure1_slot6;
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var2 = 12;
                            var2 = var4[var2];
                            var4 = undefined;
                            var2 = var3.bind(var4)(var2);
                            var3 = var2.RoleRow;
                            var2 = {};
                            var2.guildRole = var1;
                            var9 = _closure2_slot9;
                            var2.guildId = var9;
                            var15 = var2;
                            var14 = var5;
                            var9 = copyDataProperties(var15, var14);
                            var1 = var1.id;
                            var1 = var8.bind(var4)(var3, var2, var1);
                            return var1;
                        case 486:
                            var1 = var0.result;
                            var0 = var1.user;
                            var8 = var1.nick;
                            var4 = _closure1_slot6;
                            var2 = _closure1_slot1;
                            var10 = _closure1_slot2;
                            var1 = 9;
                            var1 = var10[var1];
                            var3 = undefined;
                            var2 = var2.bind(var3)(var1);
                            var1 = {};
                            var9 = _closure1_slot5;
                            var9 = var9.NONE;
                            var1.type = var9;
                            var1.user = var0;
                            var1.nickname = var8;
                            var7 = _closure2_slot9;
                            var1.guildId = var7;
                            var9 = _closure1_slot0;
                            var6 = 10;
                            var6 = var10[var6];
                            var6 = var9.bind(var3)(var6);
                            var7 = var6.Text;
                            var6 = {
                                'color': 'text-subtle',
                                'variant': 'text-xs/normal'
                            };
                            var8 = 11;
                            var8 = var10[var8];
                            var9 = var9.bind(var3)(var8);
                            var8 = var9.getUserTag;
                            var8 = var8.bind(var9)(var0);
                            var6.children = var8;
                            var6 = var4.bind(var3)(var7, var6);
                            var1.subLabel = var6;
                            var15 = var1;
                            var14 = var5;
                            var5 = copyDataProperties(var15, var14);
                            var0 = var0.id;
                            var0 = var4.bind(var3)(var2, var1, var0);
                            return var0;
                    }
                };
                var5.renderItem = var10;
                var5 = var8.bind(var3)(var7, var5);
                _fun108764_ip = 389;
                continue _fun108764;
            case 354:
                var8 = _closure1_slot6;
                var7 = _closure1_slot0;
                var6 = _closure1_slot2;
                var6 = var6[var9];
                var6 = var7.bind(var3)(var6);
                var7 = var6.AppLauncherListEmptyState;
                var6 = {};
                var5 = var8.bind(var3)(var7, var6);
            case 389:
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var3;
    var3 = 'AppLauncherMentionableListActionSheet';
    var2.APP_LAUNCHER_MENTIONABLE_LIST_ACTION_SHEET_KEY = var3;
    var2.MentionableItemTypes = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 660, 33, 4544, 5642, 3279, 13812, 13813, 9172, 3942, 3237, 14036, 5652, 13811, 9184, 4900, 2]);