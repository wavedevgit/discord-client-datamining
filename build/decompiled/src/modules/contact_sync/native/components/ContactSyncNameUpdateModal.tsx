// modules/contact_sync/native/components/ContactSyncNameUpdateModal.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var12 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var12;
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
    var3 = var12.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var12.bind(var0)(var3);
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
    var6 = var3.ContactSyncScenes;
    var _closure1_slot7 = var6;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot8 = var3;
    var10 = function() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 6;
        var1 = var1[var0];
        var0 = undefined;
        var2 = var2.bind(var0)(var1);
        var1 = var2.pop;
        var1 = var1.bind(var2)();
        return var0;
    };
    var _closure1_slot9 = var10;
    var3 = 7;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {
        'flex': 1,
        'backgroundColor': null,
        'justifyContent': 'center'
    };
    var11 = 8;
    var11 = var5[var11];
    var11 = var12.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_BASE_LOW;
    var9.backgroundColor = var11;
    var11 = 9;
    var11 = var5[var11];
    var11 = var4.bind(var0)(var11);
    var12 = var11.NAV_BAR_HEIGHT;
    var11 = 32;
    var11 = var12 + var11;
    var9.paddingTop = var11;
    var3.container = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot10 = var3;
    var3 = function() {
        _fun81994: for (var _fun81994_ip = 0;;) switch (_fun81994_ip) {
            case 0:
                var0 = _closure1_slot10;
                var3 = undefined;
                var5 = var0.bind(var3)();
                var1 = _closure1_slot0;
                var10 = _closure1_slot2;
                var0 = 10;
                var0 = var10[var0];
                var1 = var1.bind(var3)(var0);
                var0 = var1.useContactSyncAccount;
                var8 = var0.bind(var1)();
                var2 = _closure1_slot5;
                var1 = var2.useState;
                var0 = false;
                var2 = var1.bind(var2)(var0);
                var1 = _closure1_slot4;
                var0 = 2;
                var1 = var1.bind(var3)(var2, var0);
                var0 = 0;
                var6 = var1[var0];
                var0 = 1;
                var0 = var1[var0];
                var _closure2_slot0 = var0;
                var0 = function() { // Environment: var7
                    var3 = _closure1_slot3;
                    var2 = undefined;
                    var1 = function*(arg0) { // Environment: var0
                        var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                            _fun81997: for (var _fun81997_ip = 0;;) switch (_fun81997_ip) {
                                case 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                    if (var1) {
                                        _fun81997_ip = 233;
                                        continue _fun81997
                                    }
                                case 10:
                                    var3 = arg0;
                                    var5 = _closure2_slot0;
                                    var1 = undefined;
                                    var4 = true;
                                    var4 = var5.bind(var1)(var4);
                                case 29: // try_start_0
                                    var6 = _closure1_slot1;
                                    var7 = _closure1_slot2;
                                    var5 = 11;
                                    var5 = var7[var5];
                                    var6 = var6.bind(var1)(var5);
                                    var5 = var6.updateName;
                                    var3 = var5.bind(var6)(var3);
                                    SaveGenerator(address = 67);
                                case 65:
                                    return var3;
                                case 67:
                                    ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 5);
                                    if (var5) {
                                        _fun81997_ip = 97;
                                        continue _fun81997
                                    }
                                case 73:
                                    var6 = _closure2_slot0;
                                    var5 = false;
                                    var5 = var6.bind(var1)(var5);
                                    var4 = _closure1_slot9;
                                    var4 = var4.bind(var1)();
                                case 92: // try_end0
                                    _fun81997_ip = 230;
                                    continue _fun81997;
                                case 97:
                                    return var3;
                                case 100: // catch_target0
                                    CatchBlockStart(arg_register = 3);
                                    var7 = _closure1_slot1;
                                    var8 = _closure1_slot2;
                                    var3 = 12;
                                    var3 = var8[var3];
                                    var5 = var7.bind(var1)(var3);
                                    var4 = var5.open;
                                    var3 = {};
                                    var9 = 'ERROR_GENERIC_TITLE';
                                    var3.key = var9;
                                    var11 = _closure1_slot0;
                                    var6 = 13;
                                    var9 = var8[var6];
                                    var9 = var11.bind(var1)(var9);
                                    var10 = var9.intl;
                                    var9 = var10.string;
                                    var6 = var8[var6];
                                    var6 = var11.bind(var1)(var6);
                                    var6 = var6.t;
                                    var6 = var6.R0RpRX;
                                    var6 = var9.bind(var10)(var6);
                                    var3.content = var6;
                                    var6 = 14;
                                    var6 = var8[var6];
                                    var6 = var7.bind(var1)(var6);
                                    var3.icon = var6;
                                    var3 = var4.bind(var5)(var3);
                                    var3 = _closure2_slot0;
                                    var2 = false;
                                    var2 = var3.bind(var1)(var2);
                                case 230:
                                    return var1;
                                case 233:
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
                var9 = var0.bind(var3)();
                var _closure2_slot1 = var9;
                var2 = _closure1_slot8;
                var1 = _closure1_slot6;
                var0 = {};
                var5 = var5.container;
                var0.style = var5;
                var5 = _closure1_slot1;
                var4 = 15;
                var4 = var10[var4];
                var5 = var5.bind(var3)(var4);
                var4 = {};
                var4.onNext = var9;
                var7 = function() {
                    var2 = _closure2_slot1;
                    var1 = undefined;
                    var0 = null;
                    var0 = var2.bind(var1)(var0);
                    return var0;
                };
                var4.onRemoveName = var7;
                var4.loading = var6;
                var6 = null;
                var9 = var6 == var8;
                var7 = undefined;
                if (var9) {
                    _fun81994_ip = 181;
                    continue _fun81994
                }
            case 176:
                var7 = var8.name;
            case 181:
                var8 = var6 != var7;
                var6 = '';
                if (!var8) {
                    _fun81994_ip = 195;
                    continue _fun81994
                }
            case 192:
                var6 = var7;
            case 195:
                var4.initialName = var6;
                var4 = var2.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot11 = var3;
    var3 = {};
    var7 = var6.NAME_INPUT;
    var6 = {
        'render': null,
        'ignoreKeyboard': true,
        'fullscreen': true,
        'headerLeft': null,
        'title': ''
    };
    var8 = function() {
        var3 = _closure1_slot8;
        var2 = _closure1_slot11;
        var1 = undefined;
        var0 = {};
        var0 = var3.bind(var1)(var2, var0);
        return var0;
    };
    var6.render = var8;
    var8 = 16;
    var8 = var5[var8];
    var9 = var4.bind(var0)(var8);
    var8 = var9.getHeaderCloseButton;
    var8 = var8.bind(var9)(var10);
    var6.headerLeft = var8;
    var3[var7] = var6;
    var _closure1_slot12 = var3;
    var3 = 18;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/contact_sync/native/components/ContactSyncNameUpdateModal.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        var3 = _closure1_slot8;
        var1 = _closure1_slot0;
        var2 = _closure1_slot2;
        var0 = 17;
        var0 = var2[var0];
        var2 = undefined;
        var0 = var1.bind(var2)(var0);
        var1 = var0.Navigator;
        var0 = {};
        var5 = _closure1_slot7;
        var5 = var5.NAME_INPUT;
        var0.initialRouteName = var5;
        var4 = _closure1_slot12;
        var0.screens = var4;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 31, 27, 10294, 33, 4557, 1297, 671, 4698, 10302, 10301, 3139, 1234, 7452, 10308, 4700, 5781, 2]);