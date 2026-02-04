// modules/application_commands/native/ContextMenuCommandItem.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        var0 = arg0;
        var6 = var0.onPress;
        var3 = _closure1_slot5;
        var5 = _closure1_slot0;
        var7 = _closure1_slot2;
        var0 = 5;
        var0 = var7[var0];
        var2 = undefined;
        var0 = var5.bind(var2)(var0);
        var1 = var0.Button;
        var0 = {
            'accessibilityRole': 'none',
            'size': 'sm',
            'variant': 'secondary'
        };
        var8 = 6;
        var9 = var7[var8];
        var9 = var5.bind(var2)(var9);
        var10 = var9.intl;
        var9 = var10.string;
        var8 = var7[var8];
        var8 = var5.bind(var2)(var8);
        var8 = var8.t;
        var8 = var8.TXNS7S;
        var8 = var9.bind(var10)(var8);
        var0.text = var8;
        var0.onPress = var6;
        var6 = _closure1_slot5;
        var4 = 7;
        var4 = var7[var4];
        var4 = var5.bind(var2)(var4);
        var5 = var4.SendMessageIcon;
        var4 = {};
        var7 = 'xs';
        var4.size = var7;
        var4 = var6.bind(var2)(var5, var4);
        var0.icon = var4;
        var4 = true;
        var0.grow = var4;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var _closure1_slot7 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = arg3;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'width': 32,
        'height': 32
    };
    var9 = 4;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.radii;
    var11 = var11.lg;
    var8.borderRadius = var11;
    var3.commandIcon = var8;
    var8 = {};
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_MOD_MUTED;
    var8.backgroundColor = var11;
    var3.loadingIcon = var8;
    var8 = {};
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_MOD_MUTED;
    var8.backgroundColor = var11;
    var11 = 24;
    var8.height = var11;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.radii;
    var9 = var9.md;
    var8.borderRadius = var9;
    var3.loadingName = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot6 = var3;
    var3 = 13;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/application_commands/native/ContextMenuCommandItem.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        _fun76016: for (var _fun76016_ip = 0;;) switch (_fun76016_ip) {
            case 0:
                var1 = arg0;
                var9 = var1.item;
                var _closure2_slot0 = var9;
                var10 = var1.onPress;
                var13 = var1.section;
                var _closure2_slot1 = var13;
                var5 = var1.start;
                var4 = var1.end;
                var6 = var1.newUI;
                var1 = _closure1_slot6;
                var3 = undefined;
                var14 = var1.bind(var3)();
                var11 = _closure1_slot3;
                var2 = var11.useMemo;
                var1 = new Array(2);
                var1[0] = var9;
                var8 = null;
                var15 = var8 == var13;
                var12 = undefined;
                if (var15) {
                    _fun76016_ip = 90;
                    continue _fun76016
                }
            case 85:
                var12 = var13.name;
            case 90:
                var1[1] = var12;
                var0 = function() { // Environment: var0
                    _fun76017: for (var _fun76017_ip = 0;;) switch (_fun76017_ip) {
                        case 0:
                            var0 = _closure2_slot0;
                            var2 = var0.type;
                            var3 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var6 = 12;
                            var1 = var1[var6];
                            var5 = undefined;
                            var1 = var3.bind(var5)(var1);
                            var1 = var1.ApplicationCommandType;
                            var1 = var1.MESSAGE;
                            if (!(var1 !== var2)) {
                                _fun76017_ip = 88;
                                continue _fun76017
                            }
                        case 53:
                            var3 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var1 = var1[var6];
                            var1 = var3.bind(var5)(var1);
                            var1 = var1.ApplicationCommandType;
                            var1 = var1.USER;
                            if (!(var1 !== var2)) {
                                _fun76017_ip = 88;
                                continue _fun76017
                            }
                        case 86:
                            return var5;
                        case 88:
                            var1 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var0 = 6;
                            var2 = var6[var0];
                            var2 = var1.bind(var5)(var2);
                            var3 = var2.intl;
                            var2 = var3.formatToPlainString;
                            var0 = var6[var0];
                            var0 = var1.bind(var5)(var0);
                            var0 = var0.t;
                            var1 = var0.Pk4Mz3;
                            var0 = {};
                            var7 = _closure2_slot1;
                            var6 = null;
                            var6 = var6 == var7;
                            var5 = undefined;
                            if (var6) {
                                _fun76017_ip = 166;
                                continue _fun76017
                            }
                        case 157:
                            var6 = _closure2_slot1;
                            var5 = var6.name;
                        case 166:
                            var0.applicationName = var5;
                            var4 = _closure2_slot0;
                            var4 = var4.displayName;
                            var0.commandName = var4;
                            var0 = var2.bind(var3)(var1, var0);
                            return var0;
                    }
                };
                var11 = var2.bind(var11)(var0, var1);
                var1 = _closure1_slot0;
                var12 = _closure1_slot2;
                var0 = 10;
                var0 = var12[var0];
                var2 = var1.bind(var3)(var0);
                var0 = var2.getApplicationCommandsIconSource;
                var13 = var0.bind(var2)(var13);
                var2 = _closure1_slot5;
                var0 = 8;
                var0 = var12[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.TableRow;
                var0 = {};
                var0.accessibilityLabel = var11;
                var0.onPress = var10;
                var9 = var9.displayName;
                var0.label = var9;
                var8 = var8 != var13;
                if (!var8) {
                    _fun76016_ip = 232;
                    continue _fun76016
                }
            case 186:
                var12 = _closure1_slot5;
                var11 = _closure1_slot1;
                var15 = _closure1_slot2;
                var9 = 11;
                var9 = var15[var9];
                var11 = var11.bind(var3)(var9);
                var9 = {};
                var14 = var14.commandIcon;
                var9.style = var14;
                var9.source = var13;
                var8 = var12.bind(var3)(var11, var9);
            case 232:
                var0.icon = var8;
                var9 = _closure1_slot5;
                if (var6) {
                    _fun76016_ip = 261;
                    continue _fun76016
                }
            case 243:
                var8 = _closure1_slot7;
                var6 = {};
                var6.onPress = var10;
                var6 = var9.bind(var3)(var8, var6);
                _fun76016_ip = 295;
                continue _fun76016;
            case 261:
                var8 = _closure1_slot0;
                var10 = _closure1_slot2;
                var7 = 7;
                var7 = var10[var7];
                var7 = var8.bind(var3)(var7);
                var8 = var7.SendMessageIcon;
                var7 = {};
                var6 = var9.bind(var3)(var8, var7);
            case 295:
                var0.trailing = var6;
                var0.start = var5;
                var0.end = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var3;
    var3 = function arg0() {
        var0 = arg0;
        var5 = var0.start;
        var4 = var0.end;
        var0 = _closure1_slot6;
        var3 = undefined;
        var10 = var0.bind(var3)();
        var2 = _closure1_slot5;
        var1 = _closure1_slot0;
        var15 = _closure1_slot2;
        var0 = 8;
        var0 = var15[var0];
        var0 = var1.bind(var3)(var0);
        var1 = var0.TableRow;
        var0 = {};
        var9 = _closure1_slot5;
        var8 = _closure1_slot4;
        var7 = {};
        var12 = var10.loadingName;
        var11 = new Array(2);
        var11[0] = var12;
        var12 = {};
        var14 = _closure1_slot1;
        var13 = 9;
        var13 = var15[var13];
        var16 = var14.bind(var3)(var13);
        var15 = var16.random;
        var14 = 60;
        var13 = 80;
        var16 = var15.bind(var16)(var14, var13);
        var13 = global;
        var13 = var13.HermesInternal;
        var15 = var13.concat;
        var14 = '';
        var13 = '%';
        var13 = var15.bind(var14)(var16, var13);
        var12.width = var13;
        var11[1] = var12;
        var7.style = var11;
        var7 = var9.bind(var3)(var8, var7);
        var0.label = var7;
        var7 = _closure1_slot5;
        var6 = {};
        var11 = var10.commandIcon;
        var9 = new Array(2);
        var9[0] = var11;
        var10 = var10.loadingIcon;
        var9[1] = var10;
        var6.style = var9;
        var6 = var7.bind(var3)(var8, var6);
        var0.icon = var6;
        var0.start = var5;
        var0.end = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.ContextMenuCommandLoadingItem = var3;
    var3 = function arg0() {
        var0 = arg0;
        var5 = var0.start;
        var4 = var0.end;
        var0 = _closure1_slot6;
        var3 = undefined;
        var10 = var0.bind(var3)();
        var2 = _closure1_slot5;
        var11 = _closure1_slot0;
        var12 = _closure1_slot2;
        var0 = 8;
        var0 = var12[var0];
        var0 = var11.bind(var3)(var0);
        var1 = var0.TableRow;
        var0 = {};
        var7 = 6;
        var8 = var12[var7];
        var8 = var11.bind(var3)(var8);
        var9 = var8.intl;
        var8 = var9.string;
        var7 = var12[var7];
        var7 = var11.bind(var3)(var7);
        var7 = var7.t;
        var7 = var7.YSNlV2;
        var7 = var8.bind(var9)(var7);
        var0.label = var7;
        var8 = _closure1_slot5;
        var7 = _closure1_slot4;
        var6 = {};
        var11 = var10.commandIcon;
        var9 = new Array(2);
        var9[0] = var11;
        var10 = var10.loadingIcon;
        var9[1] = var10;
        var6.style = var9;
        var6 = var8.bind(var3)(var7, var6);
        var0.icon = var6;
        var0.start = var5;
        var0.end = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.ContextMenuCommandEmptyItem = var3;
    var1 = function arg0() {
        _fun76020: for (var _fun76020_ip = 0;;) switch (_fun76020_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.section;
                var8 = var0.onPress;
                var5 = var0.start;
                var4 = var0.end;
                var0 = _closure1_slot6;
                var3 = undefined;
                var11 = var0.bind(var3)();
                var1 = _closure1_slot0;
                var9 = _closure1_slot2;
                var0 = 10;
                var0 = var9[var0];
                var2 = var1.bind(var3)(var0);
                var0 = var2.getApplicationCommandsIconSource;
                var10 = var0.bind(var2)(var6);
                var2 = _closure1_slot5;
                var0 = 8;
                var0 = var9[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.TableRow;
                var0 = {};
                var0.onPress = var8;
                var6 = var6.name;
                var0.label = var6;
                var6 = null;
                var6 = var6 != var10;
                if (!var6) {
                    _fun76020_ip = 159;
                    continue _fun76020
                }
            case 113:
                var9 = _closure1_slot5;
                var8 = _closure1_slot1;
                var12 = _closure1_slot2;
                var7 = 11;
                var7 = var12[var7];
                var8 = var8.bind(var3)(var7);
                var7 = {};
                var11 = var11.commandIcon;
                var7.style = var11;
                var7.source = var10;
                var6 = var9.bind(var3)(var8, var7);
            case 159:
                var0.icon = var6;
                var0.start = var5;
                var0.end = var4;
                var4 = true;
                var0.arrow = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.ContextMenuCommandAppItem = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 4084, 1234, 3256, 4898, 22, 9638, 4704, 1645, 2]);