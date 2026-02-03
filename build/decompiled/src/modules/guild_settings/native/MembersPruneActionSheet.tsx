// modules/guild_settings/native/MembersPruneActionSheet.tsx
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
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var6 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot6 = var6;
    var3 = var3.jsxs;
    var _closure1_slot7 = var3;
    var3 = 13;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_settings/native/MembersPruneActionSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var0 = arg0;
        var6 = var0.guild;
        var _closure2_slot0 = var6;
        var0 = var6.id;
        var _closure2_slot1 = var0;
        var5 = _closure1_slot5;
        var0 = var5.useState;
        var12 = 7;
        var0 = var0.bind(var5)(var12);
        var8 = _closure1_slot4;
        var3 = undefined;
        var7 = 2;
        var0 = var8.bind(var3)(var0, var7);
        var2 = 0;
        var16 = var0[var2];
        var _closure2_slot2 = var16;
        var1 = 1;
        var0 = var0[var1];
        var _closure2_slot3 = var0;
        var10 = var5.useState;
        var0 = null;
        var0 = var10.bind(var5)(var0);
        var0 = var8.bind(var3)(var0, var7);
        var17 = var0[var2];
        var0 = var0[var1];
        var _closure2_slot4 = var0;
        var2 = var5.useCallback;
        var1 = _closure1_slot3;
        var0 = function*() { // Environment: var9
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun104912: for (var _fun104912_ip = 0;;) switch (_fun104912_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun104912_ip = 85;
                            continue _fun104912
                        }
                    case 7:
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 4;
                        var1 = var2[var1];
                        var2 = undefined;
                        var6 = var3.bind(var2)(var1);
                        var5 = var6.updateEstimate;
                        var1 = _closure2_slot0;
                        var4 = var1.id;
                        var1 = _closure2_slot2;
                        var1 = var5.bind(var6)(var4, var1);
                        SaveGenerator(address = 64);
                    case 62:
                        return var1;
                    case 64:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                        if (var4) {
                            _fun104912_ip = 82;
                            continue _fun104912
                        }
                    case 70:
                        var3 = _closure2_slot4;
                        var3 = var3.bind(var2)(var1);
                        return var2;
                    case 82:
                        return var1;
                    case 85:
                        return var0;
                }
            };
            return var0;
        };
        var1 = var1.bind(var3)(var0);
        var0 = new Array(2);
        var0[0] = var16;
        var6 = var6.id;
        var0[1] = var6;
        var0 = var2.bind(var5)(var1, var0);
        var _closure2_slot5 = var0;
        var2 = var5.useEffect;
        var1 = new Array(1);
        var1[0] = var0;
        var0 = function() { // Environment: var9
            var1 = _closure2_slot5;
            var0 = undefined;
            var1 = var1.bind(var0)();
            return var0;
        };
        var0 = var2.bind(var5)(var0, var1);
        var2 = _closure1_slot7;
        var11 = _closure1_slot0;
        var8 = _closure1_slot2;
        var0 = 5;
        var0 = var8[var0];
        var0 = var11.bind(var3)(var0);
        var1 = var0.ActionSheet;
        var0 = {};
        var7 = _closure1_slot6;
        var4 = 6;
        var4 = var8[var4];
        var4 = var11.bind(var3)(var4);
        var5 = var4.BottomSheetTitleHeader;
        var4 = {};
        var6 = var8[var12];
        var6 = var11.bind(var3)(var6);
        var13 = var6.intl;
        var10 = var13.string;
        var6 = var8[var12];
        var6 = var11.bind(var3)(var6);
        var6 = var6.t;
        var6 = var6.zbyz7p;
        var6 = var10.bind(var13)(var6);
        var4.title = var6;
        var4 = var7.bind(var3)(var5, var4);
        var0.header = var4;
        var4 = 8;
        var4 = var8[var4];
        var4 = var11.bind(var3)(var4);
        var5 = var4.TableRadioGroup;
        var4 = {};
        var6 = var8[var12];
        var6 = var11.bind(var3)(var6);
        var13 = var6.intl;
        var10 = var13.string;
        var6 = var8[var12];
        var6 = var11.bind(var3)(var6);
        var6 = var6.t;
        var6 = var6.YccTvK;
        var6 = var10.bind(var13)(var6);
        var4.title = var6;
        var4.defaultValue = var16;
        var6 = function arg0() {
            _fun104914: for (var _fun104914_ip = 0;;) switch (_fun104914_ip) {
                case 0:
                    var2 = arg0;
                    var1 = _closure2_slot2;
                    var1 = var1 !== var2;
                    if (!var1) {
                        _fun104914_ip = 27;
                        continue _fun104914
                    }
                case 17:
                    var4 = _closure2_slot1;
                    var3 = null;
                    var1 = var3 != var4;
                case 27:
                    if (!var1) {
                        _fun104914_ip = 41;
                        continue _fun104914
                    }
                case 30:
                    var1 = _closure2_slot3;
                    var0 = undefined;
                    var0 = var1.bind(var0)(var2);
                case 41:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.onChange = var6;
        var10 = 9;
        var6 = var8[var10];
        var6 = var11.bind(var3)(var6);
        var13 = var6.TableRadioRow;
        var6 = {};
        var6.value = var12;
        var14 = var8[var12];
        var14 = var11.bind(var3)(var14);
        var19 = var14.intl;
        var18 = var19.formatToPlainString;
        var14 = var8[var12];
        var14 = var11.bind(var3)(var14);
        var14 = var14.t;
        var15 = var14.FM1dHS;
        var14 = {};
        var14.days = var12;
        var14 = var18.bind(var19)(var15, var14);
        var6.label = var14;
        var13 = var7.bind(var3)(var13, var6);
        var6 = new Array(2);
        var6[0] = var13;
        var10 = var8[var10];
        var10 = var11.bind(var3)(var10);
        var13 = var10.TableRadioRow;
        var10 = {};
        var20 = 30;
        var10.value = var20;
        var14 = var8[var12];
        var14 = var11.bind(var3)(var14);
        var19 = var14.intl;
        var18 = var19.formatToPlainString;
        var14 = var8[var12];
        var14 = var11.bind(var3)(var14);
        var14 = var14.t;
        var15 = var14.FM1dHS;
        var14 = {};
        var14.days = var20;
        var14 = var18.bind(var19)(var15, var14);
        var10.label = var14;
        var10 = var7.bind(var3)(var13, var10);
        var6[1] = var10;
        var4.children = var6;
        var5 = var2.bind(var3)(var5, var4);
        var4 = new Array(3);
        var4[0] = var5;
        var5 = 10;
        var5 = var8[var5];
        var5 = var11.bind(var3)(var5);
        var6 = var5.Text;
        var5 = {};
        var10 = 'text-sm/medium';
        var5.variant = var10;
        var10 = var8[var12];
        var10 = var11.bind(var3)(var10);
        var15 = var10.intl;
        var14 = var15.format;
        var10 = var8[var12];
        var10 = var11.bind(var3)(var10);
        var10 = var10.t;
        var13 = var10.f13az9;
        var10 = {};
        var10.members = var17;
        var10.days = var16;
        var10 = var14.bind(var15)(var13, var10);
        var5.children = var10;
        var5 = var7.bind(var3)(var6, var5);
        var4[1] = var5;
        var5 = 11;
        var5 = var8[var5];
        var5 = var11.bind(var3)(var5);
        var6 = var5.Button;
        var5 = {};
        var10 = 'destructive';
        var5.variant = var10;
        var9 = function() {
            _fun104915: for (var _fun104915_ip = 0;;) switch (_fun104915_ip) {
                case 0:
                    var1 = _closure2_slot1;
                    var3 = null;
                    var1 = var3 != var1;
                    if (!var1) {
                        _fun104915_ip = 24;
                        continue _fun104915
                    }
                case 16:
                    var2 = _closure2_slot2;
                    var1 = var3 != var2;
                case 24:
                    if (!var1) {
                        _fun104915_ip = 94;
                        continue _fun104915
                    }
                case 27:
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 4;
                    var4 = var3[var1];
                    var1 = undefined;
                    var6 = var2.bind(var1)(var4);
                    var5 = var6.prune;
                    var4 = _closure2_slot1;
                    var0 = _closure2_slot2;
                    var0 = var5.bind(var6)(var4, var0);
                    var0 = 12;
                    var0 = var3[var0];
                    var1 = var2.bind(var1)(var0);
                    var0 = var1.hideActionSheet;
                    var0 = var0.bind(var1)();
                case 94:
                    var0 = undefined;
                    return var0;
            }
        };
        var5.onPress = var9;
        var9 = var8[var12];
        var9 = var11.bind(var3)(var9);
        var10 = var9.intl;
        var9 = var10.string;
        var8 = var8[var12];
        var8 = var11.bind(var3)(var8);
        var8 = var8.t;
        var8 = var8["2mIlKQ"];
        var8 = var9.bind(var10)(var8);
        var5.text = var8;
        var5 = var7.bind(var3)(var6, var5);
        var4[2] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 31, 33, 13685, 5208, 5211, 1234, 5422, 5421, 3941, 4084, 3278, 2]);