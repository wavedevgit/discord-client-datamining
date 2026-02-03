// modules/safety_flows/native/ErrorScreen.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var5;
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
    var3 = var10.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var6 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot7 = var6;
    var3 = var3.jsxs;
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'flexDirection': 'column',
        'justifyContent': 'center',
        'gap': null,
        'padding': null,
        'alignItems': 'center'
    };
    var9 = 6;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_8;
    var8.gap = var11;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_16;
    var8.padding = var11;
    var3.container = var8;
    var8 = {};
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.spacing;
    var9 = var9.PX_8;
    var8.marginTop = var9;
    var3.buttonContainer = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot9 = var3;
    var3 = 15;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/safety_flows/native/ErrorScreen.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        var2 = _closure1_slot5;
        var1 = var2.useState;
        var0 = false;
        var2 = var1.bind(var2)(var0);
        var1 = _closure1_slot4;
        var3 = undefined;
        var0 = 2;
        var1 = var1.bind(var3)(var2, var0);
        var0 = 0;
        var11 = var1[var0];
        var0 = 1;
        var0 = var1[var0];
        var _closure2_slot0 = var0;
        var16 = _closure1_slot0;
        var17 = _closure1_slot2;
        var0 = 7;
        var0 = var17[var0];
        var1 = var16.bind(var3)(var0);
        var0 = var1.useNavigation;
        var0 = var0.bind(var1)();
        var _closure2_slot1 = var0;
        var0 = _closure1_slot9;
        var7 = var0.bind(var3)();
        var0 = function() { // Environment: var12
            var3 = _closure1_slot3;
            var2 = undefined;
            var1 = function*() { // Environment: var0
                var0 = function*() { // Original name: ?anon_0_, environment: var0
                    _fun117780: for (var _fun117780_ip = 0;;) switch (_fun117780_ip) {
                        case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                            if (var1) {
                                _fun117780_ip = 162;
                                continue _fun117780
                            }
                        case 10:
                            var4 = undefined;
                            var3 = undefined;
                        case 14: // try_start_0
                            var5 = _closure2_slot0;
                            var1 = true;
                            var1 = var5.bind(var4)(var1);
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var1 = 8;
                            var1 = var7[var1];
                            var6 = var6.bind(var4)(var1);
                            var1 = var6.getCurrentTask;
                            var1 = var1.bind(var6)();
                            SaveGenerator(address = 65);
                        case 63:
                            return var1;
                        case 65:
                            ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 6);
                            if (var6) {
                                _fun117780_ip = 130;
                                continue _fun117780
                            }
                        case 71:
                            var3 = var1;
                            var6 = null;
                            if (!(var6 != var1)) {
                                _fun117780_ip = 116;
                                continue _fun117780
                            }
                        case 80:
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var5 = 9;
                            var5 = var7[var5];
                            var7 = var6.bind(var4)(var5);
                            var6 = var7.navigateToScreenForTask;
                            var5 = _closure2_slot1;
                            var3 = var6.bind(var7)(var5, var3);
                        case 116: // try_end0
                            var5 = _closure2_slot0;
                            var3 = false;
                            var3 = var5.bind(var4)(var3);
                            return var4;
                        case 130:
                            var3 = _closure2_slot0;
                            var2 = false;
                            var2 = var3.bind(var4)(var2);
                            return var1;
                        case 144: // catch_target0
                            CatchBlockStart(arg_register = 1);
                            var3 = _closure2_slot0;
                            var2 = false;
                            var2 = var3.bind(var4)(var2);
                            throw var1;
                        case 162:
                            return var0;
                    }
                };
                return var0;
            };
            var1 = var3.bind(var2)(var1);
            var _closure3_slot0 = var1;
            var0 = function() { // Environment: var0
                var0 = undefined;
                var3 = _closure3_slot0;
                var2 = var3.apply;
                var0 = arguments;
                var1 = var0;
                var0 = this;
                var0 = var2.bind(var3)(var0, var1);
                return var0;
            };
            return var0;
        };
        var14 = var0.bind(var3)();
        var2 = _closure1_slot8;
        var1 = _closure1_slot6;
        var0 = {};
        var5 = var7.container;
        var0.style = var5;
        var10 = _closure1_slot7;
        var5 = 10;
        var4 = var17[var5];
        var4 = var16.bind(var3)(var4);
        var6 = var4.Text;
        var4 = {};
        var8 = 'heading-lg/semibold';
        var4.variant = var8;
        var13 = 11;
        var8 = var17[var13];
        var8 = var16.bind(var3)(var8);
        var15 = var8.intl;
        var9 = var15.string;
        var8 = var17[var13];
        var8 = var16.bind(var3)(var8);
        var8 = var8.t;
        var8 = var8.c6kn6F;
        var8 = var9.bind(var15)(var8);
        var4.children = var8;
        var6 = var10.bind(var3)(var6, var4);
        var4 = new Array(3);
        var4[0] = var6;
        var5 = var17[var5];
        var5 = var16.bind(var3)(var5);
        var6 = var5.Text;
        var5 = {
            'variant': 'text-md/normal',
            'color': 'text-muted'
        };
        var8 = var17[var13];
        var8 = var16.bind(var3)(var8);
        var15 = var8.intl;
        var9 = var15.string;
        var8 = var17[var13];
        var8 = var16.bind(var3)(var8);
        var8 = var8.t;
        var8 = var8.ZUEGFn;
        var8 = var9.bind(var15)(var8);
        var5.children = var8;
        var5 = var10.bind(var3)(var6, var5);
        var4[1] = var5;
        var5 = 12;
        var5 = var17[var5];
        var5 = var16.bind(var3)(var5);
        var6 = var5.Stack;
        var5 = {};
        var7 = var7.buttonContainer;
        var5.style = var7;
        var7 = 8;
        var5.spacing = var7;
        var8 = 13;
        var7 = var17[var8];
        var7 = var16.bind(var3)(var7);
        var9 = var7.Button;
        var7 = {};
        var12 = function() {
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 14;
            var1 = var1[var0];
            var0 = undefined;
            var2 = var2.bind(var0)(var1);
            var1 = var2.logout;
            var0 = 'safety_flows_error_screen';
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var7.onPress = var12;
        var12 = var17[var13];
        var12 = var16.bind(var3)(var12);
        var18 = var12.intl;
        var15 = var18.string;
        var12 = var17[var13];
        var12 = var16.bind(var3)(var12);
        var12 = var12.t;
        var12 = var12["2jxGer"];
        var12 = var15.bind(var18)(var12);
        var7.text = var12;
        var12 = 'secondary';
        var7.variant = var12;
        var12 = 'md';
        var7.size = var12;
        var9 = var10.bind(var3)(var9, var7);
        var7 = new Array(2);
        var7[0] = var9;
        var8 = var17[var8];
        var8 = var16.bind(var3)(var8);
        var9 = var8.Button;
        var8 = {};
        var8.onPress = var14;
        var14 = var17[var13];
        var14 = var16.bind(var3)(var14);
        var15 = var14.intl;
        var14 = var15.string;
        var13 = var17[var13];
        var13 = var16.bind(var3)(var13);
        var13 = var13.t;
        var13 = var13["7NqTJn"];
        var13 = var14.bind(var15)(var13);
        var8.text = var13;
        var13 = 'primary';
        var8.variant = var13;
        var8.size = var12;
        var8.loading = var11;
        var8 = var10.bind(var3)(var9, var8);
        var7[1] = var8;
        var5.children = var7;
        var5 = var2.bind(var3)(var6, var5);
        var4[2] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 31, 27, 33, 1297, 671, 1469, 15000, 15004, 4871, 1234, 4071, 4075, 4553, 2]);