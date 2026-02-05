// modules/guild_role_subscriptions/native/components/FormChannelPicker.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
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
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot4 = var6;
    var3 = var3.jsxs;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'alignItems': 'center',
        'flexDirection': 'row'
    };
    var3.container = var8;
    var8 = {
        'marginStart': 8,
        'flexGrow': 1
    };
    var3.content = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot6 = var3;
    var3 = 16;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_role_subscriptions/native/components/FormChannelPicker.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun117006: for (var _fun117006_ip = 0;;) switch (_fun117006_ip) {
            case 0:
                var0 = arg0;
                var9 = var0.channelId;
                var _closure2_slot0 = var9;
                var1 = var0.guildId;
                var _closure2_slot1 = var1;
                var0 = var0.onChange;
                var3 = undefined;
                var _closure2_slot3 = var3;
                var2 = _closure1_slot1;
                var6 = _closure1_slot2;
                var1 = 4;
                var1 = var6[var1];
                var1 = var2.bind(var3)(var1);
                var7 = var1.bind(var3)();
                var1 = _closure1_slot6;
                var12 = var1.bind(var3)();
                var2 = _closure1_slot0;
                var1 = 5;
                var1 = var6[var1];
                var10 = var2.bind(var3)(var1);
                var8 = var10.useStateFromStores;
                var1 = _closure1_slot3;
                var6 = new Array(1);
                var6[0] = var1;
                var2 = new Array(1);
                var2[0] = var9;
                var1 = function() { // Environment: var4
                    var2 = _closure1_slot3;
                    var1 = var2.getChannel;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var11 = var8.bind(var10)(var6, var1, var2);
                var _closure2_slot2 = var11;
                var10 = null;
                if (!(var10 == var0)) {
                    _fun117006_ip = 142;
                    continue _fun117006
                }
            case 135:
                var0 = function() { // Environment: var4
                    var0 = undefined;
                    return var0;
                };
            case 142:
                _closure2_slot3 = var0;
                var2 = _closure1_slot5;
                var1 = _closure1_slot1;
                var13 = _closure1_slot2;
                var0 = 6;
                var0 = var13[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var8 = var12.container;
                var6 = new Array(2);
                var6[0] = var8;
                var7 = var7.textInput;
                var6[1] = var7;
                var0.style = var6;
                var6 = 'link';
                var0.accessibilityRole = var6;
                var4 = function() {
                    _fun117009: for (var _fun117009_ip = 0;;) switch (_fun117009_ip) {
                        case 0:
                            var4 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 7;
                            var3 = var1[var0];
                            var0 = undefined;
                            var5 = var4.bind(var0)(var3);
                            var4 = var5.openLazy;
                            var3 = _closure1_slot0;
                            var2 = 9;
                            var2 = var1[var2];
                            var3 = var3.bind(var0)(var2);
                            var2 = 8;
                            var2 = var1[var2];
                            var1 = var1.paths;
                            var3 = var3.bind(var0)(var2, var1);
                            var2 = {};
                            var6 = _closure2_slot1;
                            var2.guildId = var6;
                            var7 = _closure2_slot2;
                            var6 = null;
                            var7 = var6 == var7;
                            var6 = undefined;
                            if (var7) {
                                _fun117009_ip = 102;
                                continue _fun117009
                            }
                        case 93:
                            var7 = _closure2_slot2;
                            var6 = var7.id;
                        case 102:
                            var2.selectedChannelId = var6;
                            var1 = _closure2_slot3;
                            var2.onChannelSelected = var1;
                            var1 = 'ChannelSelectorActionSheet';
                            var1 = var4.bind(var5)(var3, var1, var2);
                            return var0;
                    }
                };
                var0.onPress = var4;
                var4 = var10 == var11;
                var6 = null;
                if (var4) {
                    _fun117006_ip = 308;
                    continue _fun117006
                }
            case 227:
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var4 = 10;
                var4 = var8[var4];
                var7 = var7.bind(var3)(var4);
                var4 = var7.getChannelIconComponent;
                var8 = var4.bind(var7)(var11);
                if (!(var10 == var8)) {
                    _fun117006_ip = 288;
                    continue _fun117006
                }
            case 262:
                var7 = _closure1_slot0;
                var14 = _closure1_slot2;
                var4 = 11;
                var4 = var14[var4];
                var4 = var7.bind(var3)(var4);
                var8 = var4.TextIcon;
            case 288:
                var7 = _closure1_slot4;
                var4 = {};
                var14 = 'sm';
                var4.size = var14;
                var6 = var7.bind(var3)(var8, var4);
            case 308:
                var4 = new Array(3);
                var4[0] = var6;
                var8 = _closure1_slot4;
                var7 = _closure1_slot0;
                var6 = 12;
                var6 = var13[var6];
                var6 = var7.bind(var3)(var6);
                var7 = var6.Text;
                var6 = {};
                var12 = var12.content;
                var6.style = var12;
                var12 = 'text-md/medium';
                var6.variant = var12;
                var12 = var10 != var9;
                var9 = 'text-muted';
                if (!var12) {
                    _fun117006_ip = 379;
                    continue _fun117006
                }
            case 373:
                var9 = 'text-default';
            case 379:
                var6.color = var9;
                var12 = var10 == var11;
                var9 = undefined;
                if (var12) {
                    _fun117006_ip = 397;
                    continue _fun117006
                }
            case 392:
                var9 = var11.name;
            case 397:
                if (!(var10 == var9)) {
                    _fun117006_ip = 456;
                    continue _fun117006
                }
            case 401:
                var13 = _closure1_slot0;
                var14 = _closure1_slot2;
                var10 = 13;
                var11 = var14[var10];
                var11 = var13.bind(var3)(var11);
                var12 = var11.intl;
                var11 = var12.string;
                var10 = var14[var10];
                var10 = var13.bind(var3)(var10);
                var10 = var10.t;
                var10 = var10.r2ptsz;
                var9 = var11.bind(var12)(var10);
            case 456:
                var6.children = var9;
                var6 = var8.bind(var3)(var7, var6);
                var4[1] = var6;
                var7 = _closure1_slot4;
                var9 = _closure1_slot1;
                var10 = _closure1_slot2;
                var8 = 14;
                var5 = var10[var8];
                var6 = var9.bind(var3)(var5);
                var5 = {};
                var8 = var10[var8];
                var8 = var9.bind(var3)(var8);
                var8 = var8.Sizes;
                var8 = var8.MEDIUM;
                var5.size = var8;
                var8 = 15;
                var8 = var10[var8];
                var8 = var9.bind(var3)(var8);
                var5.source = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[2] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1372, 33, 1297, 12582, 566, 6804, 3278, 14950, 1307, 4809, 4848, 3941, 1234, 4086, 8466, 2]);