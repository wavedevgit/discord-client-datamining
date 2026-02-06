// modules/user_settings/native/design_system/UserSettingsDesignSystemAlertModal.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function() {
        var4 = _closure1_slot3;
        var2 = var4.useCallback;
        var1 = _closure1_slot2;
        var3 = undefined;
        var0 = function*() { // Environment: var0
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun88245: for (var _fun88245_ip = 0;;) switch (_fun88245_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun88245_ip = 62;
                            continue _fun88245
                        }
                    case 7:
                        var1 = global;
                        var3 = var1.Promise;
                        var1 = var3.prototype;
                        var2 = Object.create(var1, {
                            constructor: {
                                value: var3
                            }
                        });
                        var4 = function(arg0) { // Environment: var1
                            var0 = global;
                            var3 = var0.setTimeout;
                            var2 = undefined;
                            var1 = arg0;
                            var0 = 2000;
                            var0 = var3.bind(var2)(var1, var0);
                            return var0;
                        };
                        var5 = var2;
                        var1 = new var5[var3](var4, var3);
                        var1 = var1 instanceof Object ? var1 : var2;
                        SaveGenerator(address = 48);
                    case 46:
                        return var1;
                    case 48:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun88245_ip = 59;
                            continue _fun88245
                        }
                    case 54:
                        var2 = undefined;
                        return var2;
                    case 59:
                        return var1;
                    case 62:
                        return var0;
                }
            };
            return var0;
        };
        var1 = var1.bind(var3)(var0);
        var0 = new Array(0);
        var5 = var2.bind(var4)(var1, var0);
        var2 = _closure1_slot6;
        var7 = _closure1_slot0;
        var9 = _closure1_slot1;
        var6 = 4;
        var0 = var9[var6];
        var0 = var7.bind(var3)(var0);
        var1 = var0.AlertModal;
        var0 = {
            'title': 'Are you sure?',
            'content': 'This will clear 3 incoming friend requests. The users who sent them won’t be informed.'
        };
        var12 = _closure1_slot6;
        var4 = var9[var6];
        var4 = var7.bind(var3)(var4);
        var11 = var4.AlertActionButton;
        var10 = {
            'variant': 'destructive',
            'onPress': null,
            'text': 'Clear'
        };
        var10.onPress = var5;
        var4 = 'clear';
        var10 = var12.bind(var3)(var11, var10, var4);
        var4 = new Array(2);
        var4[0] = var10;
        var8 = _closure1_slot6;
        var6 = var9[var6];
        var6 = var7.bind(var3)(var6);
        var7 = var6.AlertActionButton;
        var6 = {
            'variant': 'secondary',
            'onPress': null,
            'text': 'Cancel'
        };
        var6.onPress = var5;
        var5 = 'cancel';
        var5 = var8.bind(var3)(var7, var6, var5);
        var4[1] = var5;
        var0.actions = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot8 = var0;
    var0 = function() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var0 = 5;
        var2 = var2[var0];
        var0 = undefined;
        var4 = var3.bind(var0)(var2);
        var3 = var4.openAlert;
        var5 = _closure1_slot6;
        var2 = _closure1_slot8;
        var1 = {};
        var2 = var5.bind(var0)(var2, var1);
        var1 = 'demo-1';
        var1 = var3.bind(var4)(var1, var2);
        return var0;
    };
    var _closure1_slot9 = var0;
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
    var3 = arg2;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot2 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = arg3;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.View;
    var _closure1_slot4 = var6;
    var3 = var3.ScrollView;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot6 = var3;
    var3 = 6;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'padding': 16,
        'flex': 1,
        'alignItems': 'center'
    };
    var3.container = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot7 = var3;
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/native/design_system/UserSettingsDesignSystemAlertModal.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        var0 = _closure1_slot7;
        var3 = undefined;
        var6 = var0.bind(var3)();
        var2 = _closure1_slot6;
        var1 = _closure1_slot5;
        var0 = {};
        var5 = _closure1_slot4;
        var4 = {};
        var6 = var6.container;
        var4.style = var6;
        var8 = _closure1_slot6;
        var7 = _closure1_slot0;
        var10 = _closure1_slot1;
        var6 = 7;
        var6 = var10[var6];
        var6 = var7.bind(var3)(var6);
        var7 = var6.Button;
        var6 = {};
        var9 = _closure1_slot9;
        var6.onPress = var9;
        var9 = 'Show Alert';
        var6.text = var9;
        var6 = var8.bind(var3)(var7, var6);
        var4.children = var6;
        var4 = var2.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 31, 27, 33, 4027, 4029, 1297, 4085, 2]);