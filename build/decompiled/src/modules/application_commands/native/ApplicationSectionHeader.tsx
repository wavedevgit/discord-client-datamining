// modules/application_commands/native/ApplicationSectionHeader.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var0 = global;
    var7 = var0.Object;
    var4 = var7.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var7)(var2, var0, var1);
    var0 = 0;
    var4 = var6[var0];
    var1 = metroImportAll;
    var0 = undefined;
    var1 = var1.bind(var0)(var4);
    var1 = 1;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var1 = var1.View;
    var _closure1_slot3 = var1;
    var1 = 2;
    var1 = var6[var1];
    var1 = var11.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 3;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var4 = var1.jsx;
    var _closure1_slot5 = var4;
    var1 = var1.jsxs;
    var _closure1_slot6 = var1;
    var1 = 4;
    var1 = var6[var1];
    var8 = var5.bind(var0)(var1);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {
        'flexDirection': 'row',
        'alignItems': 'center',
        'height': 32,
        'backgroundColor': null,
        'paddingHorizontal': 16
    };
    var1 = 32;
    var10 = 5;
    var12 = var6[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_SURFACE_HIGH;
    var9.backgroundColor = var12;
    var4.applicationHeaderWrapper = var9;
    var9 = {
        'width': 16,
        'height': 16,
        'borderRadius': null,
        'marginRight': 8
    };
    var10 = var6[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.radii;
    var10 = var10.sm;
    var9.borderRadius = var10;
    var4.applicationIcon = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot7 = var4;
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/application_commands/native/ApplicationSectionHeader.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function arg0() {
        _fun90123: for (var _fun90123_ip = 0;;) switch (_fun90123_ip) {
            case 0:
                var2 = arg0;
                var1 = var2.section;
                var _closure2_slot0 = var1;
                var2 = var2.guildId;
                var _closure2_slot1 = var2;
                var2 = _closure1_slot7;
                var3 = undefined;
                var11 = var2.bind(var3)();
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                var2 = 6;
                var2 = var6[var2];
                var8 = var4.bind(var3)(var2);
                var7 = var8.useStateFromStores;
                var9 = _closure1_slot4;
                var2 = new Array(1);
                var2[0] = var9;
                var0 = function() { // Environment: var0
                    _fun90124: for (var _fun90124_ip = 0;;) switch (_fun90124_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var2 = null;
                            if (!(var2 != var1)) {
                                _fun90124_ip = 40;
                                continue _fun90124
                            }
                        case 13:
                            var1 = _closure2_slot0;
                            var3 = var2 == var1;
                            var1 = undefined;
                            if (var3) {
                                _fun90124_ip = 36;
                                continue _fun90124
                            }
                        case 26:
                            var3 = _closure2_slot0;
                            var1 = var3.botId;
                        case 36:
                            if (!(var2 == var1)) {
                                _fun90124_ip = 44;
                                continue _fun90124
                            }
                        case 40:
                            var1 = undefined;
                            return var1;
                        case 44:
                            var3 = _closure1_slot4;
                            var2 = var3.getMember;
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.botId;
                            var0 = var2.bind(var3)(var1, var0);
                            return var0;
                    }
                };
                var0 = var7.bind(var8)(var2, var0);
                var2 = 7;
                var2 = var6[var2];
                var4 = var4.bind(var3)(var2);
                var2 = var4.getApplicationCommandsIconSource;
                var10 = var2.bind(var4)(var1, var0);
                var4 = null;
                var6 = var4 == var0;
                var2 = undefined;
                if (var6) {
                    _fun90123_ip = 127;
                    continue _fun90123
                }
            case 121:
                var2 = var0.nick;
            case 127:
                if (!(var4 == var2)) {
                    _fun90123_ip = 147;
                    continue _fun90123
                }
            case 131:
                var2 = var4 == var1;
                var8 = undefined;
                if (var2) {
                    _fun90123_ip = 145;
                    continue _fun90123
                }
            case 140:
                var8 = var1.name;
            case 145:
                _fun90123_ip = 153;
                continue _fun90123;
            case 147:
                var8 = var0.nick;
            case 153:
                var2 = _closure1_slot6;
                var1 = _closure1_slot3;
                var0 = {};
                var6 = var11.applicationHeaderWrapper;
                var0.style = var6;
                var7 = _closure1_slot0;
                var13 = _closure1_slot2;
                var6 = 8;
                var9 = var13[var6];
                var9 = var7.bind(var3)(var9);
                var12 = var9.intl;
                var9 = var12.formatToPlainString;
                var6 = var13[var6];
                var6 = var7.bind(var3)(var6);
                var6 = var6.t;
                var7 = var6["Ocw/sM"];
                var6 = {};
                var6.applicationName = var8;
                var6 = var9.bind(var12)(var7, var6);
                var0.accessibilityLabel = var6;
                var6 = var4 != var10;
                if (!var6) {
                    _fun90123_ip = 295;
                    continue _fun90123
                }
            case 249:
                var9 = _closure1_slot5;
                var7 = _closure1_slot1;
                var12 = _closure1_slot2;
                var4 = 9;
                var4 = var12[var4];
                var7 = var7.bind(var3)(var4);
                var4 = {};
                var11 = var11.applicationIcon;
                var4.style = var11;
                var4.source = var10;
                var6 = var9.bind(var3)(var7, var4);
            case 295:
                var4 = new Array(2);
                var4[0] = var6;
                var7 = _closure1_slot5;
                var6 = _closure1_slot0;
                var9 = _closure1_slot2;
                var5 = 10;
                var5 = var9[var5];
                var5 = var6.bind(var3)(var5);
                var6 = var5.Text;
                var5 = {
                    'variant': 'eyebrow',
                    'color': 'interactive-text-default'
                };
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var3;
    var2.APPLICATION_SECTION_HEADER_HEIGHT = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1681, 33, 1297, 671, 566, 9638, 1234, 4704, 3941, 2]);