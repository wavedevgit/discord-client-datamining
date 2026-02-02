// modules/main_tabs_v2/native/sidebar/details/ChannelDetailsUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
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
    var3 = var4.bind(var0)(var3);
    var3 = var3.ChannelDetailsButtonTypes;
    var _closure1_slot3 = var3;
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/main_tabs_v2/native/sidebar/details/ChannelDetailsUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        _fun90766: for (var _fun90766_ip = 0;;) switch (_fun90766_ip) {
            case 0:
                var1 = arguments[1];
                var5 = undefined;
                if (!(var1 === var5)) {
                    _fun90766_ip = 11;
                    continue _fun90766
                }
            case 9:
                var1 = false;
            case 11:
                var0 = arg0;
                var3 = var0.type;
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var6 = 1;
                var2 = var2[var6];
                var2 = var4.bind(var5)(var2);
                var2 = var2.ChannelTypes;
                var2 = var2.GUILD_DIRECTORY;
                if (!(var2 !== var3)) {
                    _fun90766_ip = 550;
                    continue _fun90766
                }
            case 61:
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var6];
                var2 = var4.bind(var5)(var2);
                var2 = var2.ChannelTypes;
                var2 = var2.DM;
                if (!(var2 !== var3)) {
                    _fun90766_ip = 507;
                    continue _fun90766
                }
            case 97:
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var6];
                var2 = var4.bind(var5)(var2);
                var2 = var2.ChannelTypes;
                var2 = var2.GROUP_DM;
                if (!(var2 !== var3)) {
                    _fun90766_ip = 507;
                    continue _fun90766
                }
            case 133:
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var6];
                var2 = var4.bind(var5)(var2);
                var2 = var2.ChannelTypes;
                var2 = var2.ANNOUNCEMENT_THREAD;
                if (!(var2 !== var3)) {
                    _fun90766_ip = 386;
                    continue _fun90766
                }
            case 169:
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var6];
                var2 = var4.bind(var5)(var2);
                var2 = var2.ChannelTypes;
                var2 = var2.PUBLIC_THREAD;
                if (!(var2 !== var3)) {
                    _fun90766_ip = 386;
                    continue _fun90766
                }
            case 205:
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var6];
                var2 = var4.bind(var5)(var2);
                var2 = var2.ChannelTypes;
                var2 = var2.PRIVATE_THREAD;
                if (!(var2 !== var3)) {
                    _fun90766_ip = 386;
                    continue _fun90766
                }
            case 241:
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var6];
                var2 = var4.bind(var5)(var2);
                var2 = var2.ChannelTypes;
                var2 = var2.GUILD_FORUM;
                if (!(var2 !== var3)) {
                    _fun90766_ip = 350;
                    continue _fun90766
                }
            case 274:
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var6];
                var2 = var4.bind(var5)(var2);
                var2 = var2.ChannelTypes;
                var2 = var2.GUILD_MEDIA;
                if (!(var2 !== var3)) {
                    _fun90766_ip = 350;
                    continue _fun90766
                }
            case 307:
                var2 = _closure1_slot3;
                var4 = var2.SEARCH;
                var3 = new Array(3);
                var3[0] = var4;
                var4 = var2.MUTE;
                var3[1] = var4;
                var2 = var2.SETTINGS;
                var3[2] = var2;
                _fun90766_ip = 554;
                continue _fun90766;
            case 350:
                var4 = _closure1_slot3;
                var6 = var4.MUTE;
                var2 = new Array(2);
                var2[0] = var6;
                var4 = var4.SETTINGS;
                var2[1] = var4;
                var3 = var2;
                _fun90766_ip = 554;
                continue _fun90766;
            case 386:
                var4 = _closure1_slot1;
                var6 = _closure1_slot2;
                var2 = 2;
                var2 = var6[var2];
                var5 = var4.bind(var5)(var2);
                var4 = var5.getCurrentConfig;
                var2 = {};
                var6 = 'getChannelDetailsButtons';
                var2.location = var6;
                var2 = var4.bind(var5)(var2);
                var2 = var2.enabled;
                var5 = _closure1_slot3;
                if (var2) {
                    _fun90766_ip = 465;
                    continue _fun90766
                }
            case 439:
                var4 = var5.MUTE;
                var2 = new Array(2);
                var2[0] = var4;
                var4 = var5.SETTINGS;
                var2[1] = var4;
                _fun90766_ip = 502;
                continue _fun90766;
            case 465:
                var6 = var5.SEARCH;
                var4 = new Array(3);
                var4[0] = var6;
                var6 = var5.MUTE;
                var4[1] = var6;
                var5 = var5.SETTINGS;
                var4[2] = var5;
                var2 = var4;
            case 502:
                var3 = var2;
                _fun90766_ip = 554;
                continue _fun90766;
            case 507:
                var2 = _closure1_slot3;
                var4 = var2.SEARCH;
                var0 = new Array(3);
                var0[0] = var4;
                var4 = var2.MUTE;
                var0[1] = var4;
                var2 = var2.SETTINGS;
                var0[2] = var2;
                var3 = var0;
                _fun90766_ip = 554;
                continue _fun90766;
            case 550:
                var3 = new Array(0);
            case 554:
                var0 = var3;
                if (!var1) {
                    _fun90766_ip = 579;
                    continue _fun90766
                }
            case 560:
                var2 = var3.filter;
                var1 = function(arg0) { // Environment: var1
                    var0 = _closure1_slot3;
                    var1 = var0.MUTE;
                    var0 = arg0;
                    var0 = var0 !== var1;
                    return var0;
                };
                var0 = var2.bind(var3)(var1);
            case 579:
                return var0;
        }
    };
    var2.getChannelDetailsButtons = var3;
    var1 = function arg0, arg1, arg2, arg3() {
        var3 = arg0;
        var2 = var3.navigate;
        var1 = {};
        var0 = arg1;
        var1.screen = var0;
        var0 = arg2;
        var1.channelId = var0;
        var0 = arg3;
        var1.source = var0;
        var0 = 'sidebar';
        var0 = var2.bind(var3)(var0, var1);
        var0 = undefined;
        return var0;
    };
    var2.navigateToChannelDetailsScreen = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [8949, 790, 8922, 2]);