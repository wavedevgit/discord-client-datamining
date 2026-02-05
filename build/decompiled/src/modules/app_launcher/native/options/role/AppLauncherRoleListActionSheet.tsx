// modules/app_launcher/native/options/role/AppLauncherRoleListActionSheet.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var5 = metroImportDefault;
    var8 = metroImportAll;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var8;
    var _closure1_slot3 = var7;
    var0 = function arg0() {
        _fun108269: for (var _fun108269_ip = 0;;) switch (_fun108269_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.colorString;
                var0 = null;
                if (!(var0 == var2)) {
                    _fun108269_ip = 24;
                    continue _fun108269
                }
            case 15:
                var0 = _closure1_slot9;
                _fun108269_ip = 30;
                continue _fun108269;
            case 24:
                var0 = var1.colorString;
            case 30:
                return var0;
        }
    };
    var _closure1_slot13 = var0;
    var3 = function arg0() {
        _fun108270: for (var _fun108270_ip = 0;;) switch (_fun108270_ip) {
            case 0:
                var0 = arg0;
                var9 = var0.role;
                var4 = {};
                var8 = null;
                if (!(var8 != var9)) {
                    _fun108270_ip = 40;
                    continue _fun108270
                }
            case 17:
                var0 = {};
                var2 = _closure1_slot13;
                var1 = undefined;
                var1 = var2.bind(var1)(var9);
                var0.backgroundColor = var1;
                var4 = var0;
            case 40:
                var3 = _closure1_slot10;
                var1 = _closure1_slot1;
                var10 = _closure1_slot3;
                var0 = 7;
                var0 = var10[var0];
                var2 = undefined;
                var1 = var1.bind(var2)(var0);
                var0 = {};
                var7 = _closure1_slot10;
                var6 = _closure1_slot0;
                var5 = 8;
                var5 = var10[var5];
                var5 = var6.bind(var2)(var5);
                var6 = var5.ShieldUserIcon;
                var5 = {};
                var10 = 'sm';
                var5.size = var10;
                var9 = var8 != var9;
                var8 = 'interactive-text-default';
                if (!var9) {
                    _fun108270_ip = 124;
                    continue _fun108270
                }
            case 120:
                var8 = 'white';
            case 124:
                var5.color = var8;
                var5 = var7.bind(var2)(var6, var5);
                var0.icon = var5;
                var0.wrapperStyle = var4;
                var0 = var3.bind(var2)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot14 = var3;
    var0 = global;
    var10 = var0.Object;
    var9 = var10.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var9.bind(var10)(var2, var0, var1);
    var0 = 0;
    var1 = var7[var0];
    var0 = undefined;
    var1 = var5.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 1;
    var1 = var7[var1];
    var1 = var8.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 2;
    var1 = var7[var1];
    var1 = var5.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 3;
    var1 = var7[var1];
    var1 = var6.bind(var0)(var1);
    var1 = var1.isEveryoneRole;
    var _closure1_slot7 = var1;
    var1 = 4;
    var1 = var7[var1];
    var1 = var5.bind(var0)(var1);
    var _closure1_slot8 = var1;
    var1 = 5;
    var1 = var7[var1];
    var1 = var6.bind(var0)(var1);
    var1 = var1.DEFAULT_ROLE_COLOR_HEX;
    var _closure1_slot9 = var1;
    var1 = 6;
    var1 = var7[var1];
    var1 = var6.bind(var0)(var1);
    var5 = var1.jsx;
    var _closure1_slot10 = var5;
    var1 = var1.jsxs;
    var _closure1_slot11 = var1;
    var1 = function arg0() {
        _fun108271: for (var _fun108271_ip = 0;;) switch (_fun108271_ip) {
            case 0:
                var4 = arg0;
                var0 = var4.guildRole;
                var _closure2_slot0 = var0;
                var13 = var4.guildId;
                var _closure2_slot1 = var13;
                var9 = null;
                var3 = Object.create(var9);
                var2 = 0;
                var3.guildRole = var2;
                var3.guildId = var2;
                var17 = {};
                var16 = var4;
                var15 = var3;
                var5 = copyDataProperties(var17, var16, var15);
                var12 = _closure1_slot0;
                var6 = _closure1_slot3;
                var2 = 9;
                var2 = var6[var2];
                var4 = undefined;
                var8 = var12.bind(var4)(var2);
                var7 = var8.useStateFromStores;
                var2 = _closure1_slot6;
                var3 = new Array(1);
                var3[0] = var2;
                var2 = function() { // Environment: var1
                    _fun108272: for (var _fun108272_ip = 0;;) switch (_fun108272_ip) {
                        case 0:
                            var3 = _closure1_slot6;
                            var2 = var3.getRoleMemberCount;
                            var0 = _closure2_slot1;
                            var2 = var2.bind(var3)(var0);
                            var0 = null;
                            var3 = var0 == var2;
                            var0 = undefined;
                            if (var3) {
                                _fun108272_ip = 49;
                                continue _fun108272
                            }
                        case 36:
                            var1 = _closure2_slot0;
                            var1 = var1.id;
                            var0 = var2[var1];
                        case 49:
                            return var0;
                    }
                };
                var11 = var7.bind(var8)(var3, var2);
                var2 = _closure1_slot7;
                var8 = var2.bind(var4)(var0);
                var7 = _closure1_slot5;
                var3 = var7.useEffect;
                var2 = new Array(1);
                var2[0] = var13;
                var1 = function() { // Environment: var1
                    var2 = _closure1_slot2;
                    var1 = _closure1_slot3;
                    var0 = 10;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.fetchMemberCounts;
                    var1 = _closure2_slot1;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var1 = var3.bind(var7)(var1, var2);
                var3 = _closure1_slot10;
                var1 = 11;
                var1 = var6[var1];
                var1 = var12.bind(var4)(var1);
                var2 = var1.TableRow;
                var1 = {};
                var13 = _closure1_slot10;
                var7 = 12;
                var6 = var6[var7];
                var6 = var12.bind(var4)(var6);
                var12 = var6.Text;
                var6 = {
                    'lineClamp': 1,
                    'variant': 'text-md/semibold',
                    'color': 'mobile-text-heading-primary'
                };
                var14 = var0.name;
                var6.children = var14;
                var6 = var13.bind(var4)(var12, var6);
                var1.label = var6;
                var13 = _closure1_slot10;
                var12 = _closure1_slot14;
                var6 = {};
                var6.role = var0;
                var6 = var13.bind(var4)(var12, var6);
                var1.icon = var6;
                var6 = null;
                if (var8) {
                    _fun108271_ip = 380;
                    continue _fun108271
                }
            case 257:
                var8 = var9 == var11;
                var6 = null;
                if (var8) {
                    _fun108271_ip = 380;
                    continue _fun108271
                }
            case 266:
                var9 = _closure1_slot11;
                var12 = _closure1_slot0;
                var14 = _closure1_slot3;
                var7 = var14[var7];
                var7 = var12.bind(var4)(var7);
                var8 = var7.Text;
                var7 = {
                    'variant': 'text-sm/normal',
                    'color': 'text-muted'
                };
                var13 = _closure1_slot10;
                var10 = 13;
                var10 = var14[var10];
                var10 = var12.bind(var4)(var10);
                var12 = var10.GroupIcon;
                var10 = {
                    'size': 'xxs',
                    'color': 'text-muted'
                };
                var12 = var13.bind(var4)(var12, var10);
                var10 = new Array(3);
                var10[0] = var12;
                var12 = ' ';
                var10[1] = var12;
                var10[2] = var11;
                var7.children = var10;
                var6 = var9.bind(var4)(var8, var7);
            case 380:
                var1.trailing = var6;
                var17 = var1;
                var16 = var5;
                var5 = copyDataProperties(var17, var16);
                var0 = var0.id;
                var0 = var3.bind(var4)(var2, var1, var0);
                return var0;
        }
    };
    var _closure1_slot12 = var1;
    var5 = 18;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/app_launcher/native/options/role/AppLauncherRoleListActionSheet.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function arg0() {
        _fun108274: for (var _fun108274_ip = 0;;) switch (_fun108274_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.onRolePress;
                var _closure2_slot0 = var0;
                var9 = var1.onActionSheetDismiss;
                var _closure2_slot1 = var9;
                var0 = var1.channel;
                var13 = var1.option;
                var0 = var0.guild_id;
                var _closure2_slot2 = var0;
                var5 = _closure1_slot5;
                var1 = var5.useState;
                var0 = '';
                var2 = var1.bind(var5)(var0);
                var1 = _closure1_slot4;
                var3 = undefined;
                var0 = 2;
                var2 = var1.bind(var3)(var2, var0);
                var7 = 0;
                var0 = var2[var7];
                var _closure2_slot3 = var0;
                var1 = 1;
                var1 = var2[var1];
                var _closure2_slot4 = var1;
                var2 = var5.useRef;
                var1 = null;
                var12 = var2.bind(var5)(var1);
                var _closure2_slot5 = var12;
                var8 = _closure1_slot0;
                var4 = _closure1_slot3;
                var1 = 9;
                var1 = var4[var1];
                var14 = var8.bind(var3)(var1);
                var11 = var14.useStateFromStores;
                var1 = _closure1_slot8;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var10
                    var2 = _closure1_slot8;
                    var1 = var2.getSortedRoles;
                    var0 = _closure2_slot2;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var11 = var11.bind(var14)(var2, var1);
                var _closure2_slot6 = var11;
                var2 = var5.useMemo;
                var1 = new Array(2);
                var1[0] = var11;
                var1[1] = var0;
                var0 = function() { // Environment: var10
                    var2 = _closure2_slot6;
                    var1 = var2.filter;
                    var0 = function(arg0) { // Environment: var0
                        _fun108277: for (var _fun108277_ip = 0;;) switch (_fun108277_ip) {
                            case 0:
                                var1 = arg0;
                                var3 = _closure2_slot3;
                                var0 = var1.id;
                                var0 = var3 === var0;
                                if (var0) {
                                    _fun108277_ip = 82;
                                    continue _fun108277
                                }
                            case 22:
                                var5 = _closure1_slot1;
                                var4 = _closure1_slot3;
                                var3 = 14;
                                var3 = var4[var3];
                                var4 = undefined;
                                var3 = var5.bind(var4)(var3);
                                var5 = _closure2_slot3;
                                var2 = var5.trim;
                                var2 = var2.bind(var5)();
                                var5 = var1.name;
                                var1 = var5.toLowerCase;
                                var1 = var1.bind(var5)();
                                var0 = var3.bind(var4)(var2, var1);
                            case 82:
                                return var0;
                        }
                    };
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var11 = var2.bind(var5)(var0, var1);
                var _closure2_slot7 = var11;
                var5 = var11.length;
                var0 = function arg0() {
                    var0 = arg0;
                    var0 = var0.role;
                    var3 = _closure2_slot0;
                    var2 = {};
                    var2.role = var0;
                    var0 = undefined;
                    var2 = var3.bind(var0)(var2);
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot3;
                    var2 = 15;
                    var2 = var4[var2];
                    var4 = var3.bind(var0)(var2);
                    var3 = var4.hideActionSheet;
                    var2 = 'AppLauncherRoleListActionSheet';
                    var2 = var3.bind(var4)(var2);
                    var1 = _closure2_slot1;
                    var1 = var1.bind(var0)();
                    return var0;
                };
                var _closure2_slot8 = var0;
                var2 = _closure1_slot11;
                var0 = 16;
                var0 = var4[var0];
                var0 = var8.bind(var3)(var0);
                var1 = var0.AppLauncherCommandOptionActionSheet;
                var0 = {};
                var0.option = var13;
                var0.onDismiss = var9;
                var13 = _closure1_slot10;
                var9 = 17;
                var4 = var4[var9];
                var4 = var8.bind(var3)(var4);
                var8 = var4.AppLauncherListSearchBar;
                var4 = {};
                var14 = function arg0() {
                    _fun108279: for (var _fun108279_ip = 0;;) switch (_fun108279_ip) {
                        case 0:
                            var2 = arg0;
                            var3 = _closure2_slot4;
                            var0 = var2.toLowerCase;
                            var2 = var0.bind(var2)();
                            var0 = undefined;
                            var2 = var3.bind(var0)(var2);
                            var1 = _closure2_slot5;
                            var3 = var1.current;
                            var1 = null;
                            if (!(var1 != var3)) {
                                _fun108279_ip = 63;
                                continue _fun108279
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
                    _fun108274_ip = 367;
                    continue _fun108274
                }
            case 310:
                var8 = _closure1_slot10;
                var7 = _closure1_slot0;
                var5 = _closure1_slot3;
                var5 = var5[var9];
                var5 = var7.bind(var3)(var5);
                var7 = var5.AppLauncherList;
                var5 = {};
                var5.ref = var12;
                var5.data = var11;
                var10 = function arg0() {
                    var0 = arg0;
                    var6 = var0.item;
                    var _closure3_slot0 = var6;
                    var4 = var0.index;
                    var3 = _closure1_slot10;
                    var2 = _closure1_slot12;
                    var1 = {};
                    var7 = _closure2_slot2;
                    var1.guildId = var7;
                    var1.guildRole = var6;
                    var5 = function() {
                        var2 = _closure2_slot8;
                        var1 = {};
                        var0 = _closure3_slot0;
                        var1.role = var0;
                        var0 = undefined;
                        var1 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var1.onPress = var5;
                    var5 = 0;
                    var5 = var5 === var4;
                    var1.start = var5;
                    var0 = _closure2_slot7;
                    var5 = var0.length;
                    var0 = 1;
                    var0 = var5 - var0;
                    var0 = var4 === var0;
                    var1.end = var0;
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2, var1);
                    return var0;
                };
                var5.renderItem = var10;
                var5 = var8.bind(var3)(var7, var5);
                _fun108274_ip = 402;
                continue _fun108274;
            case 367:
                var8 = _closure1_slot10;
                var7 = _closure1_slot0;
                var6 = _closure1_slot3;
                var6 = var6[var9];
                var6 = var7.bind(var3)(var6);
                var7 = var6.AppLauncherListEmptyState;
                var6 = {};
                var5 = var8.bind(var3)(var7, var6);
            case 402:
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var4;
    var4 = 'AppLauncherRoleListActionSheet';
    var2.APP_LAUNCHER_ROLE_LIST_ACTION_SHEET_KEY = var4;
    var2.RoleIcon = var3;
    var2.RoleRow = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 9920, 1675, 1674, 660, 33, 13765, 8161, 566, 9921, 4900, 3941, 4855, 5606, 3278, 13766, 13767, 2]);