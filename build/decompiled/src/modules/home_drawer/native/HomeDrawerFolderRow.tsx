// modules/home_drawer/native/HomeDrawerFolderRow.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        var0 = arg0;
        var2 = var0.folder;
        var _closure2_slot0 = var2;
        var3 = var0.unread;
        var _closure2_slot1 = var3;
        var7 = _closure1_slot3;
        var6 = var7.useMemo;
        var5 = function() { // Environment: var1
            var0 = {};
            var1 = false;
            var0.isMuted = var1;
            return var0;
        };
        var4 = new Array(0);
        var7 = var6.bind(var7)(var5, var4);
        var _closure2_slot2 = var7;
        var6 = _closure1_slot3;
        var5 = var6.useMemo;
        var8 = var2.folderName;
        var4 = new Array(3);
        var4[0] = var8;
        var4[1] = var7;
        var4[2] = var3;
        var3 = function() { // Environment: var1
            _fun100929: for (var _fun100929_ip = 0;;) switch (_fun100929_ip) {
                case 0:
                    var0 = _closure2_slot2;
                    var0 = var0.isMuted;
                    if (var0) {
                        _fun100929_ip = 25;
                        continue _fun100929
                    }
                case 19:
                    var6 = _closure1_slot6;
                    _fun100929_ip = 53;
                    continue _fun100929;
                case 25:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 5;
                    var1 = var1[var0];
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    var6 = var0.BellSlashIcon;
                case 53:
                    var11 = _closure2_slot1;
                    if (!var11) {
                        _fun100929_ip = 73;
                        continue _fun100929
                    }
                case 60:
                    var0 = _closure2_slot2;
                    var0 = var0.isMuted;
                    var11 = !var0;
                case 73:
                    var3 = _closure1_slot8;
                    var2 = _closure1_slot4;
                    var1 = {};
                    var0 = {
                        'flexDirection': 'row',
                        'alignItems': 'center',
                        'gap': 4
                    };
                    var1.style = var0;
                    var5 = _closure1_slot7;
                    var4 = {};
                    var0 = 'xs';
                    var4.size = var0;
                    var0 = undefined;
                    var5 = var5.bind(var0)(var6, var4);
                    var4 = new Array(2);
                    var4[0] = var5;
                    var7 = _closure1_slot7;
                    var6 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var5 = 6;
                    var5 = var10[var5];
                    var5 = var6.bind(var0)(var5);
                    var6 = var5.Text;
                    var5 = {};
                    var10 = 'text-md/semibold';
                    var5.variant = var10;
                    var10 = 'text-muted';
                    if (!var11) {
                        _fun100929_ip = 185;
                        continue _fun100929
                    }
                case 179:
                    var10 = 'mobile-text-heading-primary';
                case 185:
                    var5.color = var10;
                    var8 = _closure2_slot0;
                    var8 = var8.folderName;
                    var10 = null;
                    if (!(var10 == var8)) {
                        _fun100929_ip = 262;
                        continue _fun100929
                    }
                case 205:
                    var12 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var9 = 7;
                    var10 = var13[var9];
                    var10 = var12.bind(var0)(var10);
                    var11 = var10.intl;
                    var10 = var11.string;
                    var9 = var13[var9];
                    var9 = var12.bind(var0)(var9);
                    var9 = var9.t;
                    var9 = var9["JQ/1n3"];
                    var8 = var10.bind(var11)(var9);
                case 262:
                    var5.children = var8;
                    var5 = var7.bind(var0)(var6, var5);
                    var4[1] = var5;
                    var1.children = var4;
                    var0 = var3.bind(var0)(var2, var1);
                    return var0;
            }
        };
        var5 = var5.bind(var6)(var3, var4);
        var4 = _closure1_slot3;
        var3 = var4.useMemo;
        var2 = var2.guildIds;
        var6 = var2.length;
        var2 = new Array(1);
        var2[0] = var6;
        var1 = function() { // Environment: var1
            var3 = _closure1_slot7;
            var5 = _closure1_slot0;
            var8 = _closure1_slot2;
            var0 = 6;
            var0 = var8[var0];
            var2 = undefined;
            var0 = var5.bind(var2)(var0);
            var1 = var0.Text;
            var0 = {
                'variant': 'text-xs/medium',
                'color': 'text-muted'
            };
            var4 = 7;
            var6 = var8[var4];
            var6 = var5.bind(var2)(var6);
            var7 = var6.intl;
            var6 = var7.format;
            var4 = var8[var4];
            var4 = var5.bind(var2)(var4);
            var4 = var4.t;
            var5 = var4.knOfkb;
            var4 = {};
            var8 = _closure2_slot0;
            var8 = var8.guildIds;
            var8 = var8.length;
            var4.num = var8;
            var4 = var6.bind(var7)(var5, var4);
            var0.children = var4;
            var0 = var3.bind(var2)(var1, var0);
            return var0;
        };
        var4 = var3.bind(var4)(var1, var2);
        var3 = _closure1_slot7;
        var1 = _closure1_slot0;
        var2 = _closure1_slot2;
        var0 = 8;
        var0 = var2[var0];
        var2 = undefined;
        var0 = var1.bind(var2)(var0);
        var1 = var0.HomeDrawerSharedItem;
        var0 = {};
        var0.title = var5;
        var0.subtitle = var4;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var _closure1_slot9 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var7 = var5[var0];
    var3 = arg3;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.NOOP;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot7 = var6;
    var3 = var3.jsxs;
    var _closure1_slot8 = var3;
    var3 = 12;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/home_drawer/native/HomeDrawerFolderRow.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun100931: for (var _fun100931_ip = 0;;) switch (_fun100931_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.folderId;
                var _closure2_slot0 = var2;
                var5 = var1.unread;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var4 = 9;
                var6 = var3[var4];
                var4 = undefined;
                var8 = var2.bind(var4)(var6);
                var7 = var8.useStateFromStores;
                var9 = _closure1_slot5;
                var6 = new Array(1);
                var6[0] = var9;
                var0 = function() { // Environment: var0
                    _fun100932: for (var _fun100932_ip = 0;;) switch (_fun100932_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var0 = null;
                            var2 = var0 != var2;
                            if (!var2) {
                                _fun100932_ip = 38;
                                continue _fun100932
                            }
                        case 16:
                            var3 = _closure1_slot5;
                            var2 = var3.getGuildFolderById;
                            var1 = _closure2_slot0;
                            var0 = var2.bind(var3)(var1);
                        case 38:
                            return var0;
                    }
                };
                var6 = var7.bind(var8)(var6, var0);
                var0 = 10;
                var0 = var3[var0];
                var0 = var2.bind(var4)(var0);
                var7 = var0.MobileHomeDrawerExperiment;
                var2 = var7.useConfig;
                var0 = {};
                var8 = 'folder-expanded-children';
                var0.location = var8;
                var0 = var2.bind(var7)(var0);
                var7 = var0.enableHome;
                var2 = _closure1_slot1;
                var0 = 11;
                var0 = var3[var0];
                var0 = var2.bind(var4)(var0);
                var0 = var0.bind(var4)();
                var2 = var0.isChatBesideChannelList;
                var3 = null;
                var8 = var3 == var6;
                var0 = null;
                if (var8) {
                    _fun100931_ip = 196;
                    continue _fun100931
                }
            case 160:
                var0 = null;
                if (!var7) {
                    _fun100931_ip = 196;
                    continue _fun100931
                }
            case 165:
                var0 = null;
                if (var2) {
                    _fun100931_ip = 196;
                    continue _fun100931
                }
            case 170:
                var3 = _closure1_slot7;
                var2 = _closure1_slot9;
                var1 = {};
                var1.folder = var6;
                var1.unread = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 196:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 4342, 660, 33, 8717, 3902, 1234, 13110, 566, 3886, 3883, 2]);