// modules/main_tabs_v2/native/friends/components/ClearAllIncomingRequestsAlertModal.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function() {
        var0 = undefined;
        var3 = _closure1_slot7;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot6 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*() { // Environment: var2
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun108701: for (var _fun108701_ip = 0;;) switch (_fun108701_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun108701_ip = 58;
                            continue _fun108701
                        }
                    case 7:
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 3;
                        var1 = var2[var1];
                        var2 = undefined;
                        var3 = var3.bind(var2)(var1);
                        var1 = var3.clearPendingRelationships;
                        var1 = var1.bind(var3)();
                        SaveGenerator(address = 46);
                    case 44:
                        return var1;
                    case 46:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun108701_ip = 55;
                            continue _fun108701
                        }
                    case 52:
                        return var2;
                    case 55:
                        return var1;
                    case 58:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot7 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot7 = var0;
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
    var6 = var5[var3];
    var3 = arg3;
    var3 = var3.bind(var0)(var6);
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot4 = var6;
    var3 = var3.jsxs;
    var _closure1_slot5 = var3;
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/main_tabs_v2/native/friends/components/ClearAllIncomingRequestsAlertModal.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var0 = arg0;
        var11 = var0.incomingRequestCount;
        var3 = _closure1_slot4;
        var13 = _closure1_slot0;
        var14 = _closure1_slot2;
        var9 = 4;
        var0 = var14[var9];
        var2 = undefined;
        var0 = var13.bind(var2)(var0);
        var1 = var0.AlertModal;
        var0 = {};
        var8 = 5;
        var4 = var14[var8];
        var4 = var13.bind(var2)(var4);
        var6 = var4.intl;
        var5 = var6.string;
        var4 = var14[var8];
        var4 = var13.bind(var2)(var4);
        var4 = var4.t;
        var4 = var4.z2pFjo;
        var4 = var5.bind(var6)(var4);
        var0.title = var4;
        var4 = var14[var8];
        var4 = var13.bind(var2)(var4);
        var10 = var4.intl;
        var6 = var10.formatToPlainString;
        var4 = var14[var8];
        var4 = var13.bind(var2)(var4);
        var4 = var4.t;
        var5 = var4["0nTvEw"];
        var4 = {};
        var4.incomingRequestCount = var11;
        var4 = var6.bind(var10)(var5, var4);
        var0.content = var4;
        var6 = _closure1_slot5;
        var4 = 6;
        var4 = var14[var4];
        var4 = var13.bind(var2)(var4);
        var5 = var4.AlertActions;
        var4 = {};
        var10 = var14[var9];
        var10 = var13.bind(var2)(var10);
        var11 = var10.AlertActionButton;
        var10 = {};
        var12 = 'destructive';
        var10.variant = var12;
        var7 = _closure1_slot6;
        var10.onPress = var7;
        var7 = var14[var8];
        var7 = var13.bind(var2)(var7);
        var15 = var7.intl;
        var12 = var15.string;
        var7 = var14[var8];
        var7 = var13.bind(var2)(var7);
        var7 = var7.t;
        var7 = var7["cY+Oob"];
        var7 = var12.bind(var15)(var7);
        var10.text = var7;
        var7 = 'confirm';
        var10 = var3.bind(var2)(var11, var10, var7);
        var7 = new Array(2);
        var7[0] = var10;
        var9 = var14[var9];
        var9 = var13.bind(var2)(var9);
        var10 = var9.AlertActionButton;
        var9 = {};
        var11 = 'secondary';
        var9.variant = var11;
        var11 = var14[var8];
        var11 = var13.bind(var2)(var11);
        var12 = var11.intl;
        var11 = var12.string;
        var8 = var14[var8];
        var8 = var13.bind(var2)(var8);
        var8 = var8.t;
        var8 = var8["ETE/oC"];
        var8 = var11.bind(var12)(var8);
        var9.text = var8;
        var8 = 'cancel';
        var8 = var3.bind(var2)(var10, var9, var8);
        var7[1] = var8;
        var4.children = var7;
        var4 = var6.bind(var2)(var5, var4);
        var0.actions = var4;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 31, 33, 7983, 3988, 1234, 3988, 2]);