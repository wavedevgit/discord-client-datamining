// modules/explicit_media_redaction/hooks/useExplicitContentSettingsOrDefault.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
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
    var3 = metroImportDefault;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot2 = var3;
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/explicit_media_redaction/hooks/useExplicitContentSettingsOrDefault.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function() { // Environment: var1
        _fun81800: for (var _fun81800_ip = 0;;) switch (_fun81800_ip) {
            case 0:
                var6 = _closure1_slot0;
                var2 = _closure1_slot1;
                var0 = 1;
                var0 = var2[var0];
                var4 = undefined;
                var7 = var6.bind(var4)(var0);
                var5 = var7.useStateFromStoresObject;
                var0 = _closure1_slot2;
                var3 = new Array(1);
                var3[0] = var0;
                var0 = function() { // Environment: var0
                    _fun81801: for (var _fun81801_ip = 0;;) switch (_fun81801_ip) {
                        case 0:
                            var0 = _closure1_slot2;
                            var0 = var0.settings;
                            var4 = var0.textAndImages;
                            var2 = null;
                            var5 = var2 == var4;
                            var3 = undefined;
                            var0 = undefined;
                            if (var5) {
                                _fun81801_ip = 38;
                                continue _fun81801
                            }
                        case 32:
                            var0 = var4.explicitContentSettings;
                        case 38:
                            if (!(var2 == var0)) {
                                _fun81801_ip = 72;
                                continue _fun81801
                            }
                        case 42:
                            var2 = _closure1_slot0;
                            var4 = _closure1_slot1;
                            var1 = 2;
                            var1 = var4[var1];
                            var2 = var2.bind(var3)(var1);
                            var1 = var2.getExplicitContentSettingOrDefault;
                            var0 = var1.bind(var2)();
                        case 72:
                            return var0;
                    }
                };
                var5 = var5.bind(var7)(var3, var0);
                var0 = {};
                var3 = 2;
                var2 = var2[var3];
                var8 = var6.bind(var4)(var2);
                var7 = var8.resolveExplicitContentSettingWithDefaults;
                var2 = {};
                var6 = null;
                var10 = var6 == var5;
                var9 = undefined;
                if (var10) {
                    _fun81800_ip = 97;
                    continue _fun81800
                }
            case 91:
                var9 = var5.explicitContentGuilds;
            case 97:
                var2.setting = var9;
                var2 = var7.bind(var8)(var2);
                var0.explicitContentGuilds = var2;
                var7 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var3];
                var8 = var7.bind(var4)(var2);
                var7 = var8.resolveExplicitContentSettingWithDefaults;
                var2 = {};
                var10 = var6 == var5;
                var9 = undefined;
                if (var10) {
                    _fun81800_ip = 152;
                    continue _fun81800
                }
            case 146:
                var9 = var5.explicitContentNonFriendDm;
            case 152:
                var2.setting = var9;
                var9 = true;
                var2.isDm = var9;
                var2 = var7.bind(var8)(var2);
                var0.explicitContentNonFriendDm = var2;
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var3];
                var3 = var2.bind(var4)(var1);
                var2 = var3.resolveExplicitContentSettingWithDefaults;
                var1 = {
                    'setting': null,
                    'isDm': true,
                    'isFriend': true
                };
                var6 = var6 == var5;
                var4 = undefined;
                if (var6) {
                    _fun81800_ip = 226;
                    continue _fun81800
                }
            case 220:
                var4 = var5.explicitContentFriendDm;
            case 226:
                var1.setting = var4;
                var1 = var2.bind(var3)(var1);
                var0.explicitContentFriendDm = var1;
                return var0;
        }
    };
    var2.useExplicitContentSettingOrDefault = var3;
    var1 = function() { // Environment: var1
        _fun81802: for (var _fun81802_ip = 0;;) switch (_fun81802_ip) {
            case 0:
                var6 = _closure1_slot0;
                var2 = _closure1_slot1;
                var0 = 1;
                var0 = var2[var0];
                var4 = undefined;
                var7 = var6.bind(var4)(var0);
                var5 = var7.useStateFromStoresObject;
                var0 = _closure1_slot2;
                var3 = new Array(1);
                var3[0] = var0;
                var0 = function() { // Environment: var0
                    _fun81803: for (var _fun81803_ip = 0;;) switch (_fun81803_ip) {
                        case 0:
                            var0 = _closure1_slot2;
                            var0 = var0.settings;
                            var4 = var0.textAndImages;
                            var2 = null;
                            var5 = var2 == var4;
                            var3 = undefined;
                            var0 = undefined;
                            if (var5) {
                                _fun81803_ip = 38;
                                continue _fun81803
                            }
                        case 32:
                            var0 = var4.goreContentSettings;
                        case 38:
                            if (!(var2 == var0)) {
                                _fun81803_ip = 72;
                                continue _fun81803
                            }
                        case 42:
                            var2 = _closure1_slot0;
                            var4 = _closure1_slot1;
                            var1 = 3;
                            var1 = var4[var1];
                            var2 = var2.bind(var3)(var1);
                            var1 = var2.getGoreContentSettingOrDefault;
                            var0 = var1.bind(var2)();
                        case 72:
                            return var0;
                    }
                };
                var5 = var5.bind(var7)(var3, var0);
                var0 = {};
                var3 = 3;
                var2 = var2[var3];
                var8 = var6.bind(var4)(var2);
                var7 = var8.resolveGoreSettingWithDefaults;
                var2 = {};
                var6 = null;
                var10 = var6 == var5;
                var9 = undefined;
                if (var10) {
                    _fun81802_ip = 97;
                    continue _fun81802
                }
            case 91:
                var9 = var5.goreContentGuilds;
            case 97:
                var2.setting = var9;
                var2 = var7.bind(var8)(var2);
                var0.goreContentGuilds = var2;
                var7 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var3];
                var8 = var7.bind(var4)(var2);
                var7 = var8.resolveGoreSettingWithDefaults;
                var2 = {};
                var10 = var6 == var5;
                var9 = undefined;
                if (var10) {
                    _fun81802_ip = 152;
                    continue _fun81802
                }
            case 146:
                var9 = var5.goreContentNonFriendDm;
            case 152:
                var2.setting = var9;
                var9 = true;
                var2.isDm = var9;
                var2 = var7.bind(var8)(var2);
                var0.goreContentNonFriendDm = var2;
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var3];
                var3 = var2.bind(var4)(var1);
                var2 = var3.resolveGoreSettingWithDefaults;
                var1 = {
                    'setting': null,
                    'isDm': true,
                    'isFriend': true
                };
                var6 = var6 == var5;
                var4 = undefined;
                if (var6) {
                    _fun81802_ip = 226;
                    continue _fun81802
                }
            case 220:
                var4 = var5.goreContentFriendDm;
            case 226:
                var1.setting = var4;
                var1 = var2.bind(var3)(var1);
                var0.goreContentFriendDm = var1;
                return var0;
        }
    };
    var2.useGoreContentSettingOrDefault = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1310, 632, 4277, 4282, 2]);