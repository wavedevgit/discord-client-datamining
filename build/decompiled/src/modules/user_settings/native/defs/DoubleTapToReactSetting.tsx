// modules/user_settings/native/defs/DoubleTapToReactSetting.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
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
    var1 = metroImportDefault;
    var0 = undefined;
    var1 = var1.bind(var0)(var3);
    var _closure1_slot2 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var8 = var1.MobileSetting;
    var1 = 2;
    var1 = var5[var1];
    var6 = var4.bind(var0)(var1);
    var3 = var6.createToggle;
    var1 = {};
    var9 = function() { // Original name: title, environment: var7
        var4 = _closure1_slot0;
        var5 = _closure1_slot1;
        var0 = 3;
        var1 = var5[var0];
        var3 = undefined;
        var1 = var4.bind(var3)(var1);
        var2 = var1.intl;
        var1 = var2.string;
        var0 = var5[var0];
        var0 = var4.bind(var3)(var0);
        var0 = var0.t;
        var0 = var0["4qhAjx"];
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1.title = var9;
    var8 = var8.CHAT;
    var1.parent = var8;
    var8 = function() { // Original name: useValue, environment: var7
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 4;
        var1 = var1[var0];
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        var1 = var0.DoubleTapReactionEmoji;
        var0 = var1.useSetting;
        var0 = var0.bind(var1)();
        var0 = var0.disableDoubleTap;
        var0 = !var0;
        return var0;
    };
    var1.useValue = var8;
    var7 = function(arg0) { // Original name: onValueChange, environment: var7
        _fun88858: for (var _fun88858_ip = 0;;) switch (_fun88858_ip) {
            case 0:
                var0 = _closure1_slot2;
                var0 = var0.settings;
                var2 = var0.textAndImages;
                var6 = null;
                var3 = var6 == var2;
                var0 = undefined;
                var5 = undefined;
                if (var3) {
                    _fun88858_ip = 38;
                    continue _fun88858
                }
            case 32:
                var5 = var2.defaultReactionEmoji;
            case 38:
                var2 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 4;
                var1 = var3[var1];
                var1 = var2.bind(var0)(var1);
                var3 = var1.DoubleTapReactionEmoji;
                var2 = var3.updateSetting;
                var1 = {};
                var4 = arg0;
                var4 = !var4;
                var1.disableDoubleTap = var4;
                var7 = var6 == var5;
                var4 = undefined;
                if (var7) {
                    _fun88858_ip = 112;
                    continue _fun88858
                }
            case 92:
                var7 = var5.emojiId;
                var8 = var6 == var7;
                var4 = undefined;
                if (var8) {
                    _fun88858_ip = 112;
                    continue _fun88858
                }
            case 107:
                var4 = var7.value;
            case 112:
                var1.emojiId = var4;
                var7 = var6 == var5;
                var4 = undefined;
                if (var7) {
                    _fun88858_ip = 146;
                    continue _fun88858
                }
            case 126:
                var7 = var5.emojiName;
                var8 = var6 == var7;
                var4 = undefined;
                if (var8) {
                    _fun88858_ip = 146;
                    continue _fun88858
                }
            case 141:
                var4 = var7.value;
            case 146:
                var1.emojiName = var4;
                var7 = var6 == var5;
                var4 = undefined;
                if (var7) {
                    _fun88858_ip = 180;
                    continue _fun88858
                }
            case 160:
                var5 = var5.animated;
                var6 = var6 == var5;
                var4 = undefined;
                if (var6) {
                    _fun88858_ip = 180;
                    continue _fun88858
                }
            case 175:
                var4 = var5.value;
            case 180:
                var1.animated = var4;
                var1 = var2.bind(var3)(var1);
                return var0;
        }
    };
    var1.onValueChange = var7;
    var1 = var3.bind(var6)(var1);
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/native/defs/DoubleTapToReactSetting.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1310, 6965, 8939, 1234, 1348, 2]);