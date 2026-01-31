// modules/user_settings/native/defs/IOSConversationSuggestionsSetting.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        var0 = arg0;
        var _closure2_slot0 = var0;
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var0 = 4;
        var2 = var2[var0];
        var0 = undefined;
        var3 = var3.bind(var0)(var2);
        var2 = var3.batchUpdates;
        var1 = function() { // Environment: var1
            var2 = _closure1_slot4;
            var1 = var2.setState;
            var0 = {};
            var3 = _closure2_slot0;
            var0.isEnabled = var3;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var _closure1_slot6 = var0;
    var0 = global;
    var6 = var0.Object;
    var3 = var6.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var6)(var2, var0, var1);
    var0 = 0;
    var3 = var5[var0];
    var1 = arg3;
    var0 = undefined;
    var1 = var1.bind(var0)(var3);
    var _closure1_slot3 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.NativeModules;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var8 = var3.MobileSetting;
    var3 = 3;
    var3 = var5[var3];
    var9 = var4.bind(var0)(var3);
    var6 = var9.createWithEqualityFn;
    var3 = function() { // Environment: var7
        var0 = {};
        var1 = true;
        var0.isEnabled = var1;
        return var0;
    };
    var3 = var6.bind(var9)(var3);
    var _closure1_slot4 = var3;
    var1 = var1.IntentsHandler;
    var _closure1_slot5 = var1;
    var1 = 8;
    var1 = var5[var1];
    var6 = var4.bind(var0)(var1);
    var3 = var6.createToggle;
    var1 = {};
    var9 = function() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 9;
        var1 = var5[var0];
        var3 = undefined;
        var1 = var4.bind(var3)(var1);
        var2 = var1.intl;
        var1 = var2.string;
        var0 = var5[var0];
        var0 = var4.bind(var3)(var0);
        var0 = var0.t;
        var0 = var0.J8foZq;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1.title = var9;
    var8 = var8.CONTENT_AND_SOCIAL_DISCORD;
    var1.parent = var8;
    var8 = function() {
        var4 = _closure1_slot3;
        var3 = var4.useEffect;
        var2 = function() { // Environment: var0
            var1 = _closure1_slot5;
            var0 = var1.getConversationSuggestionsEnabled;
            var2 = var0.bind(var1)();
            var1 = var2.then;
            var0 = function(arg0) { // Environment: var0
                var2 = _closure1_slot6;
                var0 = undefined;
                var1 = arg0;
                var1 = var2.bind(var0)(var1);
                return var0;
            };
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var1 = new Array(0);
        var1 = var3.bind(var4)(var2, var1);
        var1 = function() {
            var3 = _closure1_slot4;
            var1 = _closure1_slot0;
            var2 = _closure1_slot2;
            var0 = 5;
            var0 = var2[var0];
            var2 = undefined;
            var0 = var1.bind(var2)(var0);
            var1 = var0.shallow;
            var0 = function(arg0) { // Environment: var0
                var0 = arg0;
                var0 = var0.isEnabled;
                return var0;
            };
            var0 = var3.bind(var2)(var0, var1);
            return var0;
        };
        var0 = undefined;
        var0 = var1.bind(var0)();
        return var0;
    };
    var1.useValue = var8;
    var8 = function arg0() {
        var3 = _closure1_slot5;
        var2 = var3.setConversationSuggestionsEnabled;
        var1 = arg0;
        var3 = var2.bind(var3)(var1);
        var2 = var3.then;
        var1 = function(arg0) { // Environment: var0
            var2 = _closure1_slot6;
            var0 = undefined;
            var1 = arg0;
            var1 = var2.bind(var0)(var1);
            return var0;
        };
        var2 = var2.bind(var3)(var1);
        var1 = var2.catch;
        var0 = function(arg0) { // Environment: var0
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 7;
            var1 = var1[var0];
            var0 = undefined;
            var3 = var2.bind(var0)(var1);
            var1 = var3.prototype;
            var2 = Object.create(var1, {
                constructor: {
                    value: var3
                }
            });
            var6 = 'ConversationSuggestions';
            var7 = var2;
            var1 = new var7[var3](var6, var5);
            var4 = var1 instanceof Object ? var1 : var2;
            var3 = var4.error;
            var2 = 'Error suggesting conversations';
            var1 = arg0;
            var1 = var3.bind(var4)(var2, var1);
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var1.onValueChange = var8;
    var7 = function() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 6;
        var1 = var1[var0];
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        var0 = var1.isAndroid;
        var0 = var0.bind(var1)();
        var0 = !var0;
        return var0;
    };
    var1.usePredicate = var7;
    var1 = var3.bind(var6)(var1);
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/native/defs/IOSConversationSuggestionsSetting.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 6967, 797, 802, 3035, 478, 3, 8943, 1234, 2]);