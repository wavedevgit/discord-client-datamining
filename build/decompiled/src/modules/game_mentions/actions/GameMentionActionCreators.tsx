// modules/game_mentions/actions/GameMentionActionCreators.tsx
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
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*() { // Environment: var2
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun36739: for (var _fun36739_ip = 0;;) switch (_fun36739_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun36739_ip = 102;
                            continue _fun36739
                        }
                    case 7:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 2;
                        var1 = var2[var1];
                        var2 = undefined;
                        var1 = var3.bind(var2)(var1);
                        var4 = var1.HTTP;
                        var3 = var4.get;
                        var1 = {};
                        var5 = _closure1_slot4;
                        var5 = var5.GAME_NOTIFICATION_SETTINGS;
                        var1.url = var5;
                        var5 = true;
                        var1.rejectWithError = var5;
                        var4 = var3.bind(var4)(var1);
                        var3 = var4.then;
                        var1 = function(arg0) { // Environment: var1
                            var0 = arg0;
                            var4 = var0.body;
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 3;
                            var1 = var1[var0];
                            var0 = undefined;
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.dispatch;
                            var1 = {};
                            var5 = 'REPLACE_GAME_MENTION_SETTINGS';
                            var1.type = var5;
                            var1.settings = var4;
                            var1 = var2.bind(var3)(var1);
                            return var0;
                        };
                        var1 = var3.bind(var4)(var1);
                        SaveGenerator(address = 90);
                    case 88:
                        return var1;
                    case 90:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun36739_ip = 99;
                            continue _fun36739
                        }
                    case 96:
                        return var2;
                    case 99:
                        return var1;
                    case 102:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot5 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot5 = var0;
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
    var3 = var4.bind(var0)(var3);
    var3 = var3.Endpoints;
    var _closure1_slot4 = var3;
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/game_mentions/actions/GameMentionActionCreators.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0, arg1() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 2;
        var1 = var1[var0];
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        var3 = var1.HTTP;
        var2 = var3.patch;
        var1 = {};
        var6 = _closure1_slot4;
        var5 = var6.GAME_NOTIFICATION_SETTING_UPDATE;
        var4 = arg0;
        var4 = var5.bind(var6)(var4);
        var1.url = var4;
        var4 = {};
        var5 = arg1;
        var4.muted = var5;
        var1.body = var4;
        var4 = true;
        var1.rejectWithError = var4;
        var3 = var2.bind(var3)(var1);
        var2 = var3.then;
        var1 = function(arg0) { // Environment: var1
            var0 = arg0;
            var4 = var0.body;
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 3;
            var1 = var1[var0];
            var0 = undefined;
            var3 = var2.bind(var0)(var1);
            var2 = var3.dispatch;
            var1 = {};
            var5 = 'REPLACE_GAME_MENTION_SETTINGS';
            var1.type = var5;
            var1.settings = var4;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.updateGameMentionSettings = var3;
    var1 = function() {
        var0 = undefined;
        var3 = _closure1_slot5;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.fetchGameMentionSettings = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 660, 507, 806, 2]);