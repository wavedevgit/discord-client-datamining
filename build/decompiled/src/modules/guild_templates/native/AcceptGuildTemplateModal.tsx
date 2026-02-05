// modules/guild_templates/native/AcceptGuildTemplateModal.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var7 = metroImportAll;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var7;
    var _closure1_slot3 = var5;
    var0 = function arg0() {
        var0 = arg0;
        var13 = var0.code;
        var _closure2_slot0 = var13;
        var1 = _closure1_slot0;
        var14 = _closure1_slot3;
        var0 = 8;
        var0 = var14[var0];
        var3 = undefined;
        var5 = var1.bind(var3)(var0);
        var4 = var5.useStateFromStores;
        var0 = _closure1_slot7;
        var2 = new Array(1);
        var2[0] = var0;
        var0 = function() { // Environment: var7
            var2 = _closure1_slot7;
            var1 = var2.getGuildTemplate;
            var0 = _closure2_slot0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var12 = var4.bind(var5)(var2, var0);
        var _closure2_slot1 = var12;
        var4 = _closure1_slot6;
        var2 = var4.useState;
        var5 = _closure1_slot2;
        var0 = 9;
        var0 = var14[var0];
        var5 = var5.bind(var3)(var0);
        var0 = var5.getGuildNameSuggestion;
        var0 = var0.bind(var5)();
        var2 = var2.bind(var4)(var0);
        var0 = _closure1_slot5;
        var6 = 2;
        var0 = var0.bind(var3)(var2, var6);
        var4 = 0;
        var11 = var0[var4];
        var _closure2_slot2 = var11;
        var2 = 1;
        var0 = var0[var2];
        var _closure2_slot3 = var0;
        var5 = _closure1_slot6;
        var0 = var5.useState;
        var9 = null;
        var5 = var0.bind(var5)(var9);
        var0 = _closure1_slot5;
        var0 = var0.bind(var3)(var5, var6);
        var10 = var0[var4];
        var _closure2_slot4 = var10;
        var0 = var0[var2];
        var _closure2_slot5 = var0;
        var5 = _closure1_slot6;
        var0 = var5.useState;
        var5 = var0.bind(var5)(var9);
        var0 = _closure1_slot5;
        var0 = var0.bind(var3)(var5, var6);
        var9 = var0[var4];
        var0 = var0[var2];
        var _closure2_slot6 = var0;
        var5 = _closure1_slot1;
        var0 = 10;
        var0 = var14[var0];
        var0 = var5.bind(var3)(var0);
        var0 = var0.bind(var3)(var12);
        var2 = _closure1_slot9;
        var0 = 11;
        var0 = var14[var0];
        var0 = var1.bind(var3)(var0);
        var1 = var0.SafeAreaPaddingView;
        var0 = {};
        var4 = true;
        var0.top = var4;
        var4 = _closure1_slot10;
        var4 = var4.container;
        var0.style = var4;
        var6 = _closure1_slot9;
        var4 = 12;
        var4 = var14[var4];
        var5 = var5.bind(var3)(var4);
        var4 = {};
        var4.code = var13;
        var4.guildTemplate = var12;
        var4.name = var11;
        var11 = function arg0() {
            var2 = _closure2_slot3;
            var1 = undefined;
            var0 = arg0;
            var0 = var2.bind(var1)(var0);
            return var0;
        };
        var4.setName = var11;
        var4.icon = var10;
        var4.errors = var9;
        var9 = _closure1_slot4;
        var8 = function*() { // Environment: var7
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun79142: for (var _fun79142_ip = 0;;) switch (_fun79142_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun79142_ip = 93;
                            continue _fun79142
                        }
                    case 7:
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot3;
                        var1 = 13;
                        var1 = var2[var1];
                        var2 = undefined;
                        var4 = var3.bind(var2)(var1);
                        var3 = var4.openImagePicker;
                        var1 = {};
                        var5 = _closure1_slot8;
                        var1.size = var5;
                        var1 = var3.bind(var4)(var1);
                        SaveGenerator(address = 57);
                    case 55:
                        return var1;
                    case 57:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun79142_ip = 90;
                            continue _fun79142
                        }
                    case 63:
                        var4 = var1.base64;
                        var3 = null;
                        if (!(var3 != var4)) {
                            _fun79142_ip = 87;
                            continue _fun79142
                        }
                    case 75:
                        var3 = _closure2_slot5;
                        var3 = var3.bind(var2)(var4);
                    case 87:
                        return var2;
                    case 90:
                        return var1;
                    case 93:
                        return var0;
                }
            };
            return var0;
        };
        var8 = var9.bind(var3)(var8);
        var4.chooseIcon = var8;
        var7 = function() {
            _fun79143: for (var _fun79143_ip = 0;;) switch (_fun79143_ip) {
                case 0:
                    var3 = _closure2_slot1;
                    var2 = null;
                    if (!(var2 != var3)) {
                        _fun79143_ip = 95;
                        continue _fun79143
                    }
                case 15:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot3;
                    var2 = 14;
                    var3 = var3[var2];
                    var2 = undefined;
                    var5 = var4.bind(var2)(var3);
                    var4 = var5.acceptGuildTemplate;
                    var2 = _closure2_slot1;
                    var3 = var2.code;
                    var2 = _closure2_slot2;
                    var1 = _closure2_slot4;
                    var3 = var4.bind(var5)(var3, var2, var1);
                    var2 = var3.then;
                    var1 = function() { // Environment: var0
                        var2 = _closure1_slot1;
                        var1 = _closure1_slot3;
                        var0 = 15;
                        var1 = var1[var0];
                        var0 = undefined;
                        var1 = var2.bind(var0)(var1);
                        var0 = var1.hideModal;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    var0 = function(arg0) { // Environment: var0
                        var2 = _closure2_slot6;
                        var1 = undefined;
                        var0 = arg0;
                        var0 = var2.bind(var1)(var0);
                        return var0;
                    };
                    var0 = var2.bind(var3)(var1, var0);
                case 95:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.createServer = var7;
        var4 = var6.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot11 = var0;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.StyleSheet;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.UPLOAD_MEDIUM_SIZE;
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot9 = var3;
    var6 = var7.create;
    var3 = {};
    var8 = {};
    var9 = 7;
    var9 = var5[var9];
    var9 = var4.bind(var0)(var9);
    var9 = var9.NAV_BAR_HEIGHT;
    var8.marginTop = var9;
    var3.container = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot10 = var3;
    var3 = 18;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_templates/native/AcceptGuildTemplateModal.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var0 = arg0;
        var5 = var0.code;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot6;
        var3 = var4.useMemo;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() { // Environment: var1
            var2 = {};
            var0 = _closure2_slot0;
            var2.code = var0;
            var1 = function arg0() {
                var0 = arg0;
                var _closure4_slot0 = var0;
                var0 = {};
                var2 = {
                    'title': '',
                    'fullscreen': true
                };
                var5 = _closure1_slot0;
                var4 = _closure1_slot3;
                var3 = 16;
                var4 = var4[var3];
                var3 = undefined;
                var5 = var5.bind(var3)(var4);
                var4 = var5.getHeaderCloseButton;
                var3 = function() { // Environment: var1
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot3;
                    var0 = 15;
                    var1 = var1[var0];
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    var0 = var1.hideModal;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var3 = var4.bind(var5)(var3);
                var2.headerLeft = var3;
                var1 = function() {
                    var3 = _closure1_slot9;
                    var2 = _closure1_slot11;
                    var1 = {};
                    var4 = _closure4_slot0;
                    var5 = var1;
                    var0 = copyDataProperties(var5, var4);
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2, var1);
                    return var0;
                };
                var2.render = var1;
                var1 = 'ACCEPT_GUILD_TEMPLATE';
                var0[var1] = var2;
                return var0;
            };
            var0 = undefined;
            var0 = var1.bind(var0)(var2);
            return var0;
        };
        var4 = var3.bind(var4)(var1, var2);
        var3 = _closure1_slot9;
        var1 = _closure1_slot0;
        var2 = _closure1_slot3;
        var0 = 17;
        var0 = var2[var0];
        var2 = undefined;
        var0 = var1.bind(var2)(var0);
        var1 = var0.Navigator;
        var0 = {};
        var5 = 'ACCEPT_GUILD_TEMPLATE';
        var0.initialRouteName = var5;
        var0.screens = var4;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 31, 27, 6548, 660, 33, 4703, 566, 5608, 10088, 4736, 10089, 4012, 10092, 10086, 4705, 5790, 2]);