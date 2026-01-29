// modules/user_profile/UserProfileGameWidgetTypes.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var4 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var0 = global;
    var8 = var0.Object;
    var5 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var8)(var2, var0, var1);
    var0 = 0;
    var1 = var7[var0];
    var0 = undefined;
    var1 = var4.bind(var0)(var1);
    var _closure1_slot2 = var1;
    var1 = 1;
    var1 = var7[var1];
    var1 = var4.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 2;
    var4 = var7[var1];
    var4 = var6.bind(var0)(var4);
    var4 = var4.WidgetType;
    var5 = var4.CURRENT_GAMES;
    var4 = new Array(4);
    var4[0] = var5;
    var5 = var7[var1];
    var5 = var6.bind(var0)(var5);
    var5 = var5.WidgetType;
    var5 = var5.FAVORITE_GAMES;
    var4[1] = var5;
    var5 = var7[var1];
    var5 = var6.bind(var0)(var5);
    var5 = var5.WidgetType;
    var5 = var5.WANT_TO_PLAY_GAMES;
    var4[2] = var5;
    var1 = var7[var1];
    var1 = var6.bind(var0)(var1);
    var1 = var1.WidgetType;
    var1 = var1.PLAYED_GAMES;
    var4[3] = var1;
    var _closure1_slot4 = var4;
    var1 = function() { // Environment: var3
        var3 = function(arg0) { // Original name: BaseGameWidget, environment: var4
            var0 = arg0;
            var2 = this;
            var4 = var0.id;
            var3 = var0.type;
            var1 = var0.games;
            var6 = _closure1_slot2;
            var5 = _closure2_slot0;
            var0 = undefined;
            var5 = var6.bind(var0)(var2, var5);
            var2.id = var4;
            var2.type = var3;
            var2.games = var1;
            return var0;
        };
        var _closure2_slot0 = var3;
        var2 = _closure1_slot3;
        var0 = {};
        var1 = 'toSubmission';
        var0.key = var1;
        var1 = function() { // Original name: value, environment: var4
            var2 = this;
            var0 = {};
            var1 = var2.id;
            var0.id = var1;
            var1 = {};
            var3 = var2.type;
            var1.type = var3;
            var4 = var2.games;
            var3 = var4.map;
            var2 = function(arg0) { // Environment: var2
                var1 = arg0;
                var0 = {};
                var2 = var1.applicationId;
                var0.game_id = var2;
                var2 = var1.comment;
                var0.comment = var2;
                var1 = var1.tags;
                var0.tags = var1;
                return var0;
            };
            var2 = var3.bind(var4)(var2);
            var1.games = var2;
            var0.data = var1;
            return var0;
        };
        var0.value = var1;
        var1 = new Array(7);
        var1[0] = var0;
        var0 = {};
        var5 = 'isDiscardable';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var4
            var0 = this;
            var0 = var0.games;
            var1 = var0.length;
            var0 = 0;
            var0 = var0 === var1;
            return var0;
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'isValid';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var4
            _fun42625: for (var _fun42625_ip = 0;;) switch (_fun42625_ip) {
                case 0:
                    var1 = this;
                    var0 = var1.games;
                    var2 = var0.length;
                    var0 = 0;
                    var0 = var2 > var0;
                    if (!var0) {
                        _fun42625_ip = 78;
                        continue _fun42625
                    }
                case 23:
                    var2 = var1.games;
                    var2 = var2.length;
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var3 = 3;
                    var4 = var4[var3];
                    var3 = undefined;
                    var3 = var5.bind(var3)(var4);
                    var3 = var3.GAME_WIDGET_LIMITS_BY_TYPE;
                    var1 = var1.type;
                    var1 = var3[var1];
                    var0 = var2 <= var1;
                case 78:
                    return var0;
            }
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'isEqual';
        var0.key = var5;
        var5 = function(arg0) { // Original name: value, environment: var4
            _fun42626: for (var _fun42626_ip = 0;;) switch (_fun42626_ip) {
                case 0:
                    var3 = arg0;
                    var2 = this;
                    var0 = _closure2_slot0;
                    var0 = var3 instanceof var0;
                    if (!var0) {
                        _fun42626_ip = 95;
                        continue _fun42626
                    }
                case 20:
                    var4 = var3.type;
                    var1 = var2.type;
                    var1 = var4 === var1;
                    if (!var1) {
                        _fun42626_ip = 92;
                        continue _fun42626
                    }
                case 37:
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var4 = 4;
                    var5 = var5[var4];
                    var4 = undefined;
                    var6 = var6.bind(var4)(var5);
                    var5 = var6.areWidgetGamesEqual;
                    var4 = var2.games;
                    var3 = var3.games;
                    var2 = var2.type;
                    var1 = var5.bind(var6)(var4, var3, var2);
                case 92:
                    var0 = var1;
                case 95:
                    return var0;
            }
        };
        var0.value = var5;
        var1[3] = var0;
        var0 = {};
        var5 = 'getUniqueKey';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var4
            var0 = this;
            var0 = var0.type;
            return var0;
        };
        var0.value = var5;
        var1[4] = var0;
        var0 = {};
        var5 = 'getProfileAnalyticsOptions';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var4
            var0 = {};
            var1 = this;
            var1 = var1.type;
            var0.widgetType = var1;
            return var0;
        };
        var0.value = var5;
        var1[5] = var0;
        var0 = {};
        var5 = 'getProfileEditAnalyticsOptions';
        var0.key = var5;
        var4 = function() { // Original name: value, environment: var4
            var0 = {};
            var1 = this;
            var1 = var1.type;
            var0.widgetEdited = var1;
            return var0;
        };
        var0.value = var4;
        var1[6] = var0;
        var0 = undefined;
        var0 = var2.bind(var0)(var3, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var _closure1_slot5 = var1;
    var5 = 5;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/user_profile/UserProfileGameWidgetTypes.tsx';
    var5 = var6.bind(var7)(var5);
    var2.GAME_WIDGET_TYPES = var4;
    var4 = function(arg0) { // Original name: isGameWidgetType, environment: var3
        var2 = _closure1_slot4;
        var1 = var2.includes;
        var0 = arg0;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.isGameWidgetType = var4;
    var3 = function(arg0) { // Original name: isGameWidget, environment: var3
        var1 = _closure1_slot5;
        var0 = arg0;
        var0 = var0 instanceof var1;
        return var0;
    };
    var2.isGameWidget = var3;
    var2.BaseGameWidget = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 4617, 4619, 4620, 2]);