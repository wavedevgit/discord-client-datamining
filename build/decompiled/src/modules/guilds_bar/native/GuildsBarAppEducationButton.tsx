// modules/guilds_bar/native/GuildsBarAppEducationButton.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var12 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var5;
    var0 = function() { // Original name: handleAppEducationPress, environment: var1
        var0 = undefined;
        var3 = _closure1_slot10;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot9 = var0;
    var0 = function() { // Original name: _handleAppEducationPress, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*() { // Environment: var2
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun101551: for (var _fun101551_ip = 0;;) switch (_fun101551_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun101551_ip = 153;
                            continue _fun101551
                        }
                    case 10:
                        var6 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var4 = 7;
                        var2 = var1[var4];
                        var3 = undefined;
                        var6 = var6.bind(var3)(var2);
                        var2 = 6;
                        var2 = var1[var2];
                        var1 = var1.paths;
                        var1 = var6.bind(var3)(var2, var1);
                        SaveGenerator(address = 57);
                    case 55:
                        return var1;
                    case 57:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun101551_ip = 150;
                            continue _fun101551
                        }
                    case 63:
                        var7 = var1.default;
                        var6 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var4 = var2[var4];
                        var6 = var6.bind(var3)(var4);
                        var4 = 8;
                        var4 = var2[var4];
                        var2 = var2.paths;
                        var2 = var6.bind(var3)(var4, var2);
                        SaveGenerator(address = 107);
                    case 105:
                        return var2;
                    case 107:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 4);
                        if (var4) {
                            _fun101551_ip = 147;
                            continue _fun101551
                        }
                    case 113:
                        var4 = var2.openInAppEducationActionSheet;
                        var6 = var7.acknowledgeTooltip;
                        var5 = _closure1_slot4;
                        var5 = var5.GUILD_TOOLTIP;
                        var5 = var6.bind(var7)(var5);
                        var4 = var4.bind(var3)();
                        return var3;
                    case 147:
                        return var2;
                    case 150:
                        return var1;
                    case 153:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot10 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot10 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var10 = 0;
    var3 = var5[var10];
    var0 = undefined;
    var3 = var12.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = arg3;
    var6 = var3.bind(var0)(var6);
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.TooltipNames;
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot5 = var7;
    var7 = var3.Fragment;
    var _closure1_slot6 = var7;
    var3 = var3.jsxs;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {
        'height': 1,
        'width': 34,
        'backgroundColor': null,
        'marginTop': 8
    };
    var11 = 5;
    var11 = var5[var11];
    var11 = var12.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_MOD_STRONG;
    var9.backgroundColor = var11;
    var3.separator = var9;
    var9 = {};
    var9.marginTop = var10;
    var3.marginOverrides = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot8 = var3;
    var3 = var6.memo;
    var1 = function() { // Original name: GuildsBarAppEducationButton, environment: var1
        var0 = _closure1_slot8;
        var3 = undefined;
        var8 = var0.bind(var3)();
        var2 = _closure1_slot7;
        var1 = _closure1_slot6;
        var0 = {};
        var7 = _closure1_slot5;
        var11 = _closure1_slot1;
        var13 = _closure1_slot2;
        var4 = 9;
        var4 = var13[var4];
        var5 = var11.bind(var3)(var4);
        var4 = {};
        var6 = var8.separator;
        var4.style = var6;
        var5 = var7.bind(var3)(var5, var4);
        var4 = new Array(2);
        var4[0] = var5;
        var5 = 10;
        var5 = var13[var5];
        var6 = var11.bind(var3)(var5);
        var5 = {};
        var10 = 11;
        var10 = var13[var10];
        var10 = var11.bind(var3)(var10);
        var5.iconSource = var10;
        var10 = true;
        var5.desaturated = var10;
        var10 = _closure1_slot9;
        var5.onPress = var10;
        var12 = _closure1_slot0;
        var9 = 12;
        var10 = var13[var9];
        var10 = var12.bind(var3)(var10);
        var11 = var10.intl;
        var10 = var11.string;
        var9 = var13[var9];
        var9 = var12.bind(var3)(var9);
        var9 = var9.t;
        var9 = var9["0zk2sS"];
        var9 = var10.bind(var11)(var9);
        var5.accessibilityLabel = var9;
        var8 = var8.marginOverrides;
        var5.style = var8;
        var5 = var7.bind(var3)(var6, var5);
        var4[1] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var1 = var3.bind(var6)(var1);
    var3 = 13;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guilds_bar/native/GuildsBarAppEducationButton.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 31, 660, 33, 1297, 671, 8576, 1307, 10204, 6415, 13182, 13185, 1234, 2]);