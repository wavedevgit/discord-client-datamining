// modules/launchpad/native/LaunchPadMembers.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var6 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var8)(var2, var0, var3);
    var10 = 0;
    var6 = var5[var10];
    var3 = metroImportAll;
    var0 = undefined;
    var6 = var3.bind(var0)(var6);
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot6 = var3;
    var3 = 5;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {};
    var11 = 16;
    var9.minHeight = var11;
    var3.wrapper = var9;
    var9 = {};
    var9.flex = var10;
    var3.listStyle = var9;
    var9 = {};
    var10 = 20;
    var9.padding = var10;
    var3.emptyWrapper = var9;
    var9 = {};
    var10 = 'center';
    var9.textAlign = var10;
    var3.emptyText = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot7 = var3;
    var3 = var6.memo;
    var1 = function() {
        _fun110819: for (var _fun110819_ip = 0;;) switch (_fun110819_ip) {
            case 0:
                var0 = _closure1_slot7;
                var4 = undefined;
                var8 = var0.bind(var4)();
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 6;
                var0 = var2[var0];
                var3 = var1.bind(var4)(var0);
                var2 = var3.useStateFromStoresObject;
                var0 = _closure1_slot5;
                var1 = new Array(2);
                var1[0] = var0;
                var0 = _closure1_slot4;
                var1[1] = var0;
                var0 = function() { // Environment: var0
                    _fun110820: for (var _fun110820_ip = 0;;) switch (_fun110820_ip) {
                        case 0:
                            var1 = _closure1_slot5;
                            var0 = var1.getCurrentlySelectedChannelId;
                            var4 = var0.bind(var1)();
                            var0 = null;
                            var5 = var0 != var4;
                            var1 = undefined;
                            var2 = undefined;
                            if (!var5) {
                                _fun110820_ip = 33;
                                continue _fun110820
                            }
                        case 30:
                            var2 = var4;
                        case 33:
                            var4 = _closure1_slot4;
                            var3 = var4.getChannel;
                            var3 = var3.bind(var4)(var2);
                            if (!(var0 != var2)) {
                                _fun110820_ip = 138;
                                continue _fun110820
                            }
                        case 51:
                            if (!(var0 != var3)) {
                                _fun110820_ip = 138;
                                continue _fun110820
                            }
                        case 55:
                            var0 = var3.isPrivate;
                            var0 = var0.bind(var3)();
                            if (var0) {
                                _fun110820_ip = 122;
                                continue _fun110820
                            }
                        case 68:
                            var4 = var3.guild_id;
                            var0 = var3.isThread;
                            var0 = var0.bind(var3)();
                            var3 = {};
                            var3.channelId = var2;
                            var3.guildId = var4;
                            if (var0) {
                                _fun110820_ip = 109;
                                continue _fun110820
                            }
                        case 96:
                            var0 = 'guild';
                            var3.type = var0;
                            var0 = var3;
                            _fun110820_ip = 120;
                            continue _fun110820;
                        case 109:
                            var4 = 'thread';
                            var3.type = var4;
                            var0 = var3;
                        case 120:
                            return var0;
                        case 122:
                            var0 = {};
                            var0.channelId = var2;
                            var2 = 'private';
                            var0.type = var2;
                            return var0;
                        case 138:
                            var0 = {};
                            var0.channelId = var1;
                            var1 = 'none';
                            var0.type = var1;
                            return var0;
                    }
                };
                var5 = var2.bind(var3)(var1, var0);
                var1 = var5.type;
                var0 = 'private';
                if (!(var0 !== var1)) {
                    _fun110819_ip = 478;
                    continue _fun110819
                }
            case 90:
                var1 = var5.type;
                var0 = 'thread';
                if (!(var0 !== var1)) {
                    _fun110819_ip = 368;
                    continue _fun110819
                }
            case 106:
                var1 = var5.type;
                var0 = 'guild';
                if (!(var0 !== var1)) {
                    _fun110819_ip = 258;
                    continue _fun110819
                }
            case 122:
                var2 = _closure1_slot6;
                var1 = _closure1_slot3;
                var0 = {};
                var3 = var8.emptyWrapper;
                var0.style = var3;
                var12 = _closure1_slot0;
                var13 = _closure1_slot2;
                var3 = 10;
                var3 = var13[var3];
                var3 = var12.bind(var4)(var3);
                var7 = var3.Text;
                var3 = {};
                var9 = var8.emptyText;
                var3.style = var9;
                var9 = 'text-md/semibold';
                var3.variant = var9;
                var9 = 11;
                var10 = var13[var9];
                var10 = var12.bind(var4)(var10);
                var11 = var10.intl;
                var10 = var11.string;
                var9 = var13[var9];
                var9 = var12.bind(var4)(var9);
                var9 = var9.t;
                var9 = var9["+7wtJq"];
                var9 = var10.bind(var11)(var9);
                var3.children = var9;
                var3 = var2.bind(var4)(var7, var3);
                var0.children = var3;
                var0 = var2.bind(var4)(var1, var0);
                _fun110819_ip = 366;
                continue _fun110819;
            case 258:
                var3 = _closure1_slot6;
                var2 = _closure1_slot3;
                var1 = {};
                var7 = var8.wrapper;
                var1.style = var7;
                var9 = _closure1_slot1;
                var10 = _closure1_slot2;
                var7 = 9;
                var7 = var10[var7];
                var10 = var9.bind(var4)(var7);
                var9 = {};
                var7 = var5.channelId;
                var9.channelId = var7;
                var7 = var5.guildId;
                var9.guildId = var7;
                var7 = var8.listStyle;
                var9.listStyleOverride = var7;
                var7 = true;
                var9.disableBottomSafeZone = var7;
                var7 = 20;
                var9.insetEnd = var7;
                var7 = var5.channelId;
                var7 = var3.bind(var4)(var10, var9, var7);
                var1.children = var7;
                var0 = var3.bind(var4)(var2, var1);
            case 366:
                _fun110819_ip = 476;
                continue _fun110819;
            case 368:
                var3 = _closure1_slot6;
                var2 = _closure1_slot3;
                var1 = {};
                var7 = var8.wrapper;
                var1.style = var7;
                var9 = _closure1_slot1;
                var10 = _closure1_slot2;
                var7 = 8;
                var7 = var10[var7];
                var10 = var9.bind(var4)(var7);
                var9 = {};
                var7 = var5.channelId;
                var9.channelId = var7;
                var7 = var5.guildId;
                var9.guildId = var7;
                var7 = var8.listStyle;
                var9.listStyleOverride = var7;
                var7 = true;
                var9.disableBottomSafeZone = var7;
                var7 = 20;
                var9.insetEnd = var7;
                var7 = var5.channelId;
                var7 = var3.bind(var4)(var10, var9, var7);
                var1.children = var7;
                var0 = var3.bind(var4)(var2, var1);
            case 476:
                _fun110819_ip = 577;
                continue _fun110819;
            case 478:
                var3 = _closure1_slot6;
                var2 = _closure1_slot3;
                var1 = {};
                var7 = var8.wrapper;
                var1.style = var7;
                var7 = _closure1_slot1;
                var9 = _closure1_slot2;
                var6 = 7;
                var6 = var9[var6];
                var7 = var7.bind(var4)(var6);
                var6 = {};
                var9 = var5.channelId;
                var6.channelId = var9;
                var8 = var8.listStyle;
                var6.listStyleOverride = var8;
                var8 = true;
                var6.disableBottomSafeZone = var8;
                var8 = 20;
                var6.insetEnd = var8;
                var5 = var5.channelId;
                var5 = var3.bind(var4)(var7, var6, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 577:
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 12;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/launchpad/native/LaunchPadMembers.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1372, 1675, 33, 1297, 632, 13846, 13844, 13838, 3940, 1235, 2]);