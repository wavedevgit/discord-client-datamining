// modules/app_launcher/native/options/mentionable/AppLauncherMentionableOption.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        _fun108844: for (var _fun108844_ip = 0;;) switch (_fun108844_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.mentionable;
                var9 = var0.guildId;
                var0 = _closure1_slot10;
                var4 = undefined;
                var5 = var0.bind(var4)();
                var2 = _closure1_slot0;
                var7 = _closure1_slot2;
                var0 = 10;
                var0 = var7[var0];
                var8 = var2.bind(var4)(var0);
                var3 = var8.useStateFromStores;
                var0 = _closure1_slot5;
                var2 = new Array(1);
                var2[0] = var0;
                var0 = function() { // Environment: var0
                    var0 = _closure1_slot5;
                    var0 = var0.useReducedMotion;
                    return var0;
                };
                var8 = var3.bind(var8)(var2, var0);
                var3 = _closure1_slot9;
                var2 = _closure1_slot1;
                var0 = 11;
                var0 = var7[var0];
                var2 = var2.bind(var4)(var0);
                var0 = {};
                var7 = _closure1_slot11;
                var0.icon = var7;
                var5 = var5.iconWrapper;
                var0.wrapperStyle = var5;
                var0 = var3.bind(var4)(var2, var0);
                var2 = null;
                if (!(var2 != var1)) {
                    _fun108844_ip = 381;
                    continue _fun108844
                }
            case 135:
                var3 = var1.type;
                var7 = _closure1_slot0;
                var2 = _closure1_slot2;
                var5 = 12;
                var2 = var2[var5];
                var2 = var7.bind(var4)(var2);
                var2 = var2.MentionableItemTypes;
                var2 = var2.USER;
                if (!(var2 !== var3)) {
                    _fun108844_ip = 291;
                    continue _fun108844
                }
            case 176:
                var7 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var5];
                var2 = var7.bind(var4)(var2);
                var2 = var2.MentionableItemTypes;
                var2 = var2.ROLE;
                if (!(var2 !== var3)) {
                    _fun108844_ip = 240;
                    continue _fun108844
                }
            case 209:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var5];
                var2 = var3.bind(var4)(var2);
                var2 = var2.MentionableItemTypes;
                var2 = var2.GLOBAL;
                return var0;
            case 240:
                var7 = var1.result;
                var5 = _closure1_slot9;
                var3 = _closure1_slot0;
                var10 = _closure1_slot2;
                var2 = 14;
                var2 = var10[var2];
                var2 = var3.bind(var4)(var2);
                var3 = var2.RoleIcon;
                var2 = {};
                var2.role = var7;
                var2 = var5.bind(var4)(var3, var2);
                return var2;
            case 291:
                var1 = var1.result;
                var10 = var1.user;
                var3 = _closure1_slot9;
                var2 = _closure1_slot1;
                var7 = _closure1_slot2;
                var5 = 13;
                var1 = var7[var5];
                var2 = var2.bind(var4)(var1);
                var1 = {};
                var1.user = var10;
                var1.guildId = var9;
                var8 = !var8;
                var1.animate = var8;
                var6 = _closure1_slot0;
                var5 = var7[var5];
                var5 = var6.bind(var4)(var5);
                var5 = var5.AvatarSizes;
                var5 = var5.REFRESH_MEDIUM_32;
                var1.size = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            case 381:
                return var0;
        }
    };
    var _closure1_slot12 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var11.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = arg3;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.StatusTypes;
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot9 = var7;
    var3 = 7;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var6 = var8.createStyles;
    var3 = {};
    var9 = {};
    var10 = 8;
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_MOD_SUBTLE;
    var9.backgroundColor = var10;
    var3.iconWrapper = var9;
    var3 = var6.bind(var8)(var3);
    var _closure1_slot10 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.UserCircleIcon;
    var3 = {
        'size': 'sm',
        'color': 'interactive-text-default'
    };
    var3 = var7.bind(var0)(var6, var3);
    var _closure1_slot11 = var3;
    var3 = 20;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/app_launcher/native/options/mentionable/AppLauncherMentionableOption.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun108846: for (var _fun108846_ip = 0;;) switch (_fun108846_ip) {
            case 0:
                var2 = arg0;
                var12 = var2.style;
                var11 = var2.option;
                var _closure2_slot0 = var11;
                var0 = var2.initialValue;
                var _closure2_slot1 = var0;
                var13 = var2.onMentionablePress;
                var _closure2_slot2 = var13;
                var1 = var2.onActionSheetDismiss;
                var _closure2_slot3 = var1;
                var1 = var2.channel;
                var _closure2_slot4 = var1;
                var4 = var2.autoFocus;
                var7 = var2.hasError;
                var2 = var2.onPress;
                var _closure2_slot5 = var2;
                var9 = var1.guild_id;
                var _closure2_slot6 = var9;
                var8 = _closure1_slot4;
                var2 = var8.useState;
                var1 = function() { // Environment: var5
                    _fun108847: for (var _fun108847_ip = 0;;) switch (_fun108847_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            var0 = null;
                            if (!(var0 != var2)) {
                                _fun108847_ip = 310;
                                continue _fun108847
                            }
                        case 16:
                            var2 = _closure2_slot1;
                            var3 = var2.type;
                            var2 = 'roleMention';
                            if (!(var2 !== var3)) {
                                _fun108847_ip = 273;
                                continue _fun108847
                            }
                        case 36:
                            var2 = _closure2_slot1;
                            var3 = var2.type;
                            var2 = 'userMention';
                            if (!(var2 !== var3)) {
                                _fun108847_ip = 159;
                                continue _fun108847
                            }
                        case 55:
                            var2 = _closure2_slot1;
                            var3 = var2.type;
                            var2 = 'textMention';
                            if (!(var2 === var3)) {
                                _fun108847_ip = 310;
                                continue _fun108847
                            }
                        case 77:
                            var2 = {};
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var3 = 12;
                            var4 = var4[var3];
                            var3 = undefined;
                            var3 = var5.bind(var3)(var4);
                            var3 = var3.MentionableItemTypes;
                            var3 = var3.GLOBAL;
                            var2.type = var3;
                            var3 = {};
                            var4 = _closure2_slot1;
                            var5 = var4.text;
                            var3.text = var5;
                            var4 = var4.text;
                            var3.test = var4;
                            var4 = '';
                            var3.description = var4;
                            var2.result = var3;
                            return var2;
                        case 159:
                            var5 = _closure1_slot7;
                            var3 = var5.getUser;
                            var2 = _closure2_slot1;
                            var2 = var2.userId;
                            var5 = var3.bind(var5)(var2);
                            if (!(var0 != var5)) {
                                _fun108847_ip = 310;
                                continue _fun108847
                            }
                        case 190:
                            var2 = {};
                            var7 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var3 = 12;
                            var6 = var6[var3];
                            var3 = undefined;
                            var3 = var7.bind(var3)(var6);
                            var3 = var3.MentionableItemTypes;
                            var3 = var3.USER;
                            var2.type = var3;
                            var3 = {};
                            var3.user = var5;
                            var5 = 0;
                            var3.score = var5;
                            var4 = _closure1_slot8;
                            var4 = var4.UNKNOWN;
                            var3.status = var4;
                            var4 = '';
                            var3.nick = var4;
                            var2.result = var3;
                            return var2;
                        case 273:
                            var5 = _closure1_slot6;
                            var4 = var5.getRole;
                            var3 = _closure2_slot6;
                            var1 = _closure2_slot1;
                            var1 = var1.roleId;
                            var1 = var4.bind(var5)(var3, var1);
                            if (!(var0 == var1)) {
                                _fun108847_ip = 312;
                                continue _fun108847
                            }
                        case 310:
                            return var0;
                        case 312:
                            var0 = {};
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var2 = 12;
                            var3 = var3[var2];
                            var2 = undefined;
                            var2 = var4.bind(var2)(var3);
                            var2 = var2.MentionableItemTypes;
                            var2 = var2.ROLE;
                            var0.type = var2;
                            var0.result = var1;
                            return var0;
                    }
                };
                var10 = var2.bind(var8)(var1);
                var2 = _closure1_slot3;
                var3 = undefined;
                var1 = 2;
                var2 = var2.bind(var3)(var10, var1);
                var1 = 0;
                var10 = var2[var1];
                var _closure2_slot7 = var10;
                var1 = 1;
                var1 = var2[var1];
                var _closure2_slot8 = var1;
                var2 = var8.useEffect;
                var1 = new Array(4);
                var1[0] = var13;
                var13 = var11.name;
                var1[1] = var13;
                var1[2] = var0;
                var1[3] = var10;
                var0 = function() { // Environment: var5
                    _fun108848: for (var _fun108848_ip = 0;;) switch (_fun108848_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            var0 = null;
                            var2 = var0 != var2;
                            if (!var2) {
                                _fun108848_ip = 24;
                                continue _fun108848
                            }
                        case 16:
                            var3 = _closure2_slot7;
                            var2 = var0 == var3;
                        case 24:
                            if (!var2) {
                                _fun108848_ip = 45;
                                continue _fun108848
                            }
                        case 27:
                            var2 = _closure2_slot2;
                            var1 = {};
                            var1.mentionable = var0;
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                        case 45:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var2.bind(var8)(var0, var1);
                var2 = var8.useMemo;
                var1 = new Array(2);
                var1[0] = var10;
                var1[1] = var9;
                var0 = function() { // Environment: var5
                    _fun108849: for (var _fun108849_ip = 0;;) switch (_fun108849_ip) {
                        case 0:
                            var1 = _closure2_slot7;
                            var0 = null;
                            if (!(var0 != var1)) {
                                _fun108849_ip = 229;
                                continue _fun108849
                            }
                        case 16:
                            var1 = _closure2_slot7;
                            var3 = var1.type;
                            var5 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var7 = 12;
                            var2 = var2[var7];
                            var4 = undefined;
                            var2 = var5.bind(var4)(var2);
                            var2 = var2.MentionableItemTypes;
                            var2 = var2.USER;
                            if (!(var2 !== var3)) {
                                _fun108849_ip = 168;
                                continue _fun108849
                            }
                        case 66:
                            var5 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var2 = var2[var7];
                            var2 = var5.bind(var4)(var2);
                            var2 = var2.MentionableItemTypes;
                            var2 = var2.ROLE;
                            if (!(var2 !== var3)) {
                                _fun108849_ip = 151;
                                continue _fun108849
                            }
                        case 99:
                            var5 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var2 = var2[var7];
                            var2 = var5.bind(var4)(var2);
                            var2 = var2.MentionableItemTypes;
                            var2 = var2.GLOBAL;
                            if (!(var2 !== var3)) {
                                _fun108849_ip = 134;
                                continue _fun108849
                            }
                        case 132:
                            return var4;
                        case 134:
                            var2 = _closure2_slot7;
                            var2 = var2.result;
                            var2 = var2.text;
                            return var2;
                        case 151:
                            var2 = _closure2_slot7;
                            var2 = var2.result;
                            var2 = var2.name;
                            return var2;
                        case 168:
                            var2 = _closure2_slot7;
                            var2 = var2.result;
                            var5 = var2.user;
                            var3 = _closure1_slot9;
                            var2 = _closure1_slot1;
                            var7 = _closure1_slot2;
                            var1 = 15;
                            var1 = var7[var1];
                            var2 = var2.bind(var4)(var1);
                            var1 = {};
                            var6 = _closure2_slot6;
                            var1.guildId = var6;
                            var1.user = var5;
                            var1 = var3.bind(var4)(var2, var1);
                            return var1;
                        case 229:
                            return var0;
                    }
                };
                var8 = var2.bind(var8)(var0, var1);
                var2 = _closure1_slot9;
                var1 = _closure1_slot1;
                var13 = _closure1_slot2;
                var0 = 16;
                var0 = var13[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var0.style = var12;
                var0.option = var11;
                var0.hasError = var7;
                var7 = null;
                var11 = var7 != var10;
                var0.selected = var11;
                var11 = var7 != var10;
                var7 = undefined;
                if (!var11) {
                    _fun108846_ip = 285;
                    continue _fun108846
                }
            case 282:
                var7 = var8;
            case 285:
                var0.selectedItemName = var7;
                var8 = _closure1_slot9;
                var7 = _closure1_slot12;
                var6 = {};
                var6.mentionable = var10;
                var6.guildId = var9;
                var6 = var8.bind(var3)(var7, var6);
                var0.leading = var6;
                var5 = function() {
                    _fun108850: for (var _fun108850_ip = 0;;) switch (_fun108850_ip) {
                        case 0:
                            var1 = _closure2_slot5;
                            var0 = null;
                            if (!(var0 != var1)) {
                                _fun108850_ip = 23;
                                continue _fun108850
                            }
                        case 13:
                            var1 = _closure2_slot5;
                            var0 = undefined;
                            var0 = var1.bind(var0)();
                        case 23:
                            var3 = _closure1_slot1;
                            var7 = _closure1_slot2;
                            var0 = 17;
                            var2 = var7[var0];
                            var0 = undefined;
                            var5 = var3.bind(var0)(var2);
                            var4 = var5.openLazy;
                            var2 = _closure1_slot0;
                            var1 = 19;
                            var1 = var7[var1];
                            var8 = var2.bind(var0)(var1);
                            var1 = 18;
                            var3 = var7[var1];
                            var1 = var7.paths;
                            var3 = var8.bind(var0)(var3, var1);
                            var1 = 12;
                            var1 = var7[var1];
                            var1 = var2.bind(var0)(var1);
                            var2 = var1.APP_LAUNCHER_MENTIONABLE_LIST_ACTION_SHEET_KEY;
                            var1 = {};
                            var7 = _closure2_slot0;
                            var1.option = var7;
                            var7 = _closure2_slot4;
                            var1.channel = var7;
                            var7 = function arg0() {
                                var0 = arg0;
                                var3 = var0.mentionable;
                                var2 = _closure2_slot8;
                                var0 = undefined;
                                var2 = var2.bind(var0)(var3);
                                var2 = _closure2_slot2;
                                var1 = {};
                                var1.mentionable = var3;
                                var1 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var1.onMentionablePress = var7;
                            var6 = _closure2_slot3;
                            var1.onActionSheetDismiss = var6;
                            var1 = var4.bind(var5)(var3, var2, var1);
                            return var0;
                    }
                };
                var0.onPress = var5;
                var0.autoFocus = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 1298, 1676, 1621, 483, 33, 1297, 671, 8975, 566, 13805, 14027, 5512, 14028, 14029, 14024, 3279, 14027, 1307, 2]);