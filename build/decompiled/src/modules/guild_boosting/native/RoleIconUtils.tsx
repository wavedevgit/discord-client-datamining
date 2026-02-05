// modules/guild_boosting/native/RoleIconUtils.tsx
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
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot6 = var3;
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_boosting/native/RoleIconUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function(arg0) { // Environment: var1
        _fun55927: for (var _fun55927_ip = 0;;) switch (_fun55927_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.guildId;
                var _closure2_slot0 = var2;
                var5 = var1.roleId;
                var _closure2_slot1 = var5;
                var4 = var1.size;
                var7 = undefined;
                if (!(var4 === var7)) {
                    _fun55927_ip = 38;
                    continue _fun55927
                }
            case 35:
                var4 = 20;
            case 38:
                var _closure2_slot2 = var4;
                var _closure2_slot3 = var7;
                var _closure2_slot4 = var7;
                var6 = _closure1_slot0;
                var8 = _closure1_slot2;
                var3 = 4;
                var3 = var8[var3];
                var8 = var6.bind(var7)(var3);
                var7 = var8.useStateFromStoresObject;
                var3 = _closure1_slot5;
                var6 = new Array(2);
                var6[0] = var3;
                var3 = _closure1_slot4;
                var6[1] = var3;
                var3 = new Array(2);
                var3[0] = var2;
                var3[1] = var5;
                var2 = function() { // Environment: var0
                    _fun55928: for (var _fun55928_ip = 0;;) switch (_fun55928_ip) {
                        case 0:
                            var0 = {};
                            var5 = _closure1_slot5;
                            var4 = var5.getGuild;
                            var1 = _closure2_slot0;
                            var4 = var4.bind(var5)(var1);
                            var0.guild = var4;
                            var6 = null;
                            var4 = var6 != var1;
                            var1 = undefined;
                            if (!var4) {
                                _fun55928_ip = 78;
                                continue _fun55928
                            }
                        case 41:
                            var4 = _closure2_slot1;
                            var4 = var6 != var4;
                            var1 = undefined;
                            if (!var4) {
                                _fun55928_ip = 78;
                                continue _fun55928
                            }
                        case 54:
                            var5 = _closure1_slot4;
                            var4 = var5.getRole;
                            var3 = _closure2_slot0;
                            var2 = _closure2_slot1;
                            var1 = var4.bind(var5)(var3, var2);
                        case 78:
                            var0.role = var1;
                            return var0;
                    }
                };
                var2 = var7.bind(var8)(var6, var2, var3);
                var7 = var2.guild;
                _closure2_slot3 = var7;
                var6 = var2.role;
                _closure2_slot4 = var6;
                var3 = _closure1_slot3;
                var2 = var3.useMemo;
                var1 = new Array(4);
                var1[0] = var7;
                var1[1] = var6;
                var1[2] = var5;
                var1[3] = var4;
                var0 = function() { // Environment: var0
                    _fun55929: for (var _fun55929_ip = 0;;) switch (_fun55929_ip) {
                        case 0:
                            var0 = _closure2_slot3;
                            var5 = null;
                            if (!(var5 != var0)) {
                                _fun55929_ip = 151;
                                continue _fun55929
                            }
                        case 16:
                            var0 = _closure2_slot1;
                            if (!(var5 != var0)) {
                                _fun55929_ip = 151;
                                continue _fun55929
                            }
                        case 27:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var6 = 5;
                            var1 = var1[var6];
                            var3 = undefined;
                            var8 = var2.bind(var3)(var1);
                            var7 = var8.canGuildUseRoleIcons;
                            var2 = _closure2_slot3;
                            var1 = _closure2_slot4;
                            var1 = var7.bind(var8)(var2, var1);
                            if (!var1) {
                                _fun55929_ip = 151;
                                continue _fun55929
                            }
                        case 75:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var1 = var1[var6];
                            var6 = var2.bind(var3)(var1);
                            var2 = var6.getRoleIconData;
                            var1 = _closure2_slot4;
                            var1 = var2.bind(var6)(var1);
                            if (!(var5 == var1)) {
                                _fun55929_ip = 113;
                                continue _fun55929
                            }
                        case 111:
                            var1 = {};
                        case 113:
                            var2 = var1.customIconSrc;
                            var6 = var1.unicodeEmoji;
                            var1 = var5 != var2;
                            var7 = undefined;
                            if (!var1) {
                                _fun55929_ip = 143;
                                continue _fun55929
                            }
                        case 134:
                            var1 = {};
                            var1.uri = var2;
                            var7 = var1;
                        case 143:
                            if (!(var5 == var7)) {
                                _fun55929_ip = 155;
                                continue _fun55929
                            }
                        case 147:
                            if (!(var5 == var6)) {
                                _fun55929_ip = 155;
                                continue _fun55929
                            }
                        case 151:
                            var1 = undefined;
                            return var1;
                        case 155:
                            var2 = _closure1_slot6;
                            var1 = _closure1_slot1;
                            var8 = _closure1_slot2;
                            var0 = 6;
                            var0 = var8[var0];
                            var1 = var1.bind(var3)(var0);
                            var0 = {};
                            var0.source = var7;
                            var0.unicodeEmoji = var6;
                            var6 = _closure2_slot4;
                            var7 = var5 == var6;
                            var6 = undefined;
                            if (var7) {
                                _fun55929_ip = 212;
                                continue _fun55929
                            }
                        case 203:
                            var7 = _closure2_slot4;
                            var6 = var7.name;
                        case 212:
                            var7 = var5 != var6;
                            var5 = '';
                            if (!var7) {
                                _fun55929_ip = 226;
                                continue _fun55929
                            }
                        case 223:
                            var5 = var6;
                        case 226:
                            var0.name = var5;
                            var4 = _closure2_slot2;
                            var0.size = var4;
                            var0 = var2.bind(var3)(var1, var0);
                            return var0;
                    }
                };
                var0 = var2.bind(var3)(var0, var1);
                return var0;
        }
    };
    var2.useRoleIcon = var3;
    var1 = function arg0() {
        _fun55930: for (var _fun55930_ip = 0;;) switch (_fun55930_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.guildId;
                var6 = var0.roleId;
                var4 = var0.size;
                var2 = _closure1_slot5;
                var0 = var2.getGuild;
                var8 = var0.bind(var2)(var3);
                var2 = null;
                if (!(var2 != var8)) {
                    _fun55930_ip = 182;
                    continue _fun55930
                }
            case 45:
                if (!(var2 != var6)) {
                    _fun55930_ip = 182;
                    continue _fun55930
                }
            case 52:
                var5 = _closure1_slot4;
                var3 = var5.getRole;
                var0 = var8.id;
                var5 = var3.bind(var5)(var0, var6);
                if (!(var2 != var5)) {
                    _fun55930_ip = 182;
                    continue _fun55930
                }
            case 77:
                var3 = _closure1_slot0;
                var0 = _closure1_slot2;
                var7 = 5;
                var0 = var0[var7];
                var6 = undefined;
                var3 = var3.bind(var6)(var0);
                var0 = var3.canGuildUseRoleIcons;
                var0 = var0.bind(var3)(var8, var5);
                if (!var0) {
                    _fun55930_ip = 182;
                    continue _fun55930
                }
            case 114:
                var3 = _closure1_slot0;
                var0 = _closure1_slot2;
                var0 = var0[var7];
                var3 = var3.bind(var6)(var0);
                var0 = var3.getRoleIconData;
                var0 = var0.bind(var3)(var5);
                if (!(var2 == var0)) {
                    _fun55930_ip = 148;
                    continue _fun55930
                }
            case 146:
                var0 = {};
            case 148:
                var7 = var0.customIconSrc;
                var3 = var0.unicodeEmoji;
                if (!(var2 == var7)) {
                    _fun55930_ip = 186;
                    continue _fun55930
                }
            case 164:
                var8 = var2 == var3;
                var0 = undefined;
                if (var8) {
                    _fun55930_ip = 178;
                    continue _fun55930
                }
            case 173:
                var0 = var3.surrogates;
            case 178:
                if (!(var2 == var0)) {
                    _fun55930_ip = 186;
                    continue _fun55930
                }
            case 182:
                var0 = undefined;
                return var0;
            case 186:
                var0 = {};
                var0.source = var7;
                var7 = var5.name;
                var0.name = var7;
                var0.size = var4;
                var4 = var2 == var3;
                var2 = undefined;
                if (var4) {
                    _fun55930_ip = 219;
                    continue _fun55930
                }
            case 214:
                var2 = var3.surrogates;
            case 219:
                var0.unicodeEmoji = var2;
                var2 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 7;
                var3 = var7[var1];
                var3 = var2.bind(var6)(var3);
                var4 = var3.intl;
                var3 = var4.formatToPlainString;
                var1 = var7[var1];
                var1 = var2.bind(var6)(var1);
                var1 = var1.t;
                var2 = var1["9+YWrE"];
                var1 = {};
                var5 = var5.name;
                var1.name = var5;
                var1 = var3.bind(var4)(var2, var1);
                var0.alt = var1;
                return var0;
        }
    };
    var2.getRoleIcon = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1674, 1410, 33, 566, 6755, 6756, 1234, 2]);