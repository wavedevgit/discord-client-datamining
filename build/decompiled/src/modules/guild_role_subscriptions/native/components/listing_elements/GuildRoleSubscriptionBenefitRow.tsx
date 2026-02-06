// modules/guild_role_subscriptions/native/components/listing_elements/GuildRoleSubscriptionBenefitRow.tsx
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
        _fun84799: for (var _fun84799_ip = 0;;) switch (_fun84799_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.emoji_id;
                var2 = null;
                if (!(var2 == var0)) {
                    _fun84799_ip = 79;
                    continue _fun84799
                }
            case 15:
                var0 = var1.emoji_name;
                var2 = var2 == var0;
                var0 = '';
                if (var2) {
                    _fun84799_ip = 77;
                    continue _fun84799
                }
            case 32:
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 5;
                var3 = var3[var2];
                var2 = undefined;
                var5 = var4.bind(var2)(var3);
                var4 = var5.convertSurrogateToName;
                var3 = var1.emoji_name;
                var2 = false;
                var0 = var4.bind(var5)(var3, var2);
            case 77:
                _fun84799_ip = 85;
                continue _fun84799;
            case 79:
                var0 = var1.emoji_id;
            case 85:
                return var0;
        }
    };
    var _closure1_slot8 = var0;
    var0 = function arg0() {
        _fun84800: for (var _fun84800_ip = 0;;) switch (_fun84800_ip) {
            case 0:
                var0 = arg0;
                var11 = var0.emojiId;
                var12 = var0.guildId;
                var9 = var0.title;
                var13 = var0.description;
                var0 = _closure1_slot7;
                var3 = undefined;
                var14 = var0.bind(var3)();
                var2 = _closure1_slot6;
                var1 = _closure1_slot3;
                var0 = {};
                var4 = var14.container;
                var0.style = var4;
                var7 = _closure1_slot5;
                var6 = _closure1_slot1;
                var8 = _closure1_slot2;
                var4 = 6;
                var4 = var8[var4];
                var5 = var6.bind(var3)(var4);
                var4 = {};
                var4.guildId = var12;
                var4.id = var11;
                var11 = 22;
                var4.size = var11;
                var11 = 18;
                var4.fontSize = var11;
                var5 = var7.bind(var3)(var5, var4);
                var4 = new Array(3);
                var4[0] = var5;
                var7 = _closure1_slot5;
                var5 = 7;
                var5 = var8[var5];
                var6 = var6.bind(var3)(var5);
                var5 = {};
                var8 = 16;
                var5.size = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var7 = _closure1_slot6;
                var6 = _closure1_slot3;
                var5 = {};
                var8 = var14.textContainer;
                var5.style = var8;
                var8 = new Array(2);
                var8[0] = var9;
                var9 = null;
                var11 = var9 != var13;
                if (!var11) {
                    _fun84800_ip = 255;
                    continue _fun84800
                }
            case 191:
                var12 = _closure1_slot5;
                var11 = _closure1_slot0;
                var15 = _closure1_slot2;
                var10 = 8;
                var10 = var15[var10];
                var10 = var11.bind(var3)(var10);
                var11 = var10.Text;
                var10 = {
                    'style': null,
                    'variant': 'text-sm/normal',
                    'color': 'interactive-text-default'
                };
                var14 = var14.description;
                var10.style = var14;
                var10.children = var13;
                var9 = var12.bind(var3)(var11, var10);
            case 255:
                var8[1] = var9;
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[2] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
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
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot3 = var3;
    var9 = 2;
    var3 = var5[var9];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot5 = var6;
    var3 = var3.jsxs;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'flexDirection': 'row',
        'justifyContent': 'flex-start'
    };
    var3.container = var8;
    var8 = {
        'flex': 1,
        'justifyContent': 'center'
    };
    var3.textContainer = var8;
    var8 = {};
    var8.marginTop = var9;
    var3.description = var8;
    var8 = {
        'flexDirection': 'row',
        'alignItems': 'center'
    };
    var3.channelTitle = var8;
    var8 = {
        'width': 16,
        'height': 16,
        'marginEnd': 8
    };
    var3.channelIcon = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot7 = var3;
    var3 = 13;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_role_subscriptions/native/components/listing_elements/GuildRoleSubscriptionBenefitRow.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        _fun84801: for (var _fun84801_ip = 0;;) switch (_fun84801_ip) {
            case 0:
                var1 = arg0;
                var4 = var1.benefit;
                var _closure2_slot0 = var4;
                var6 = var1.guildId;
                var1 = _closure1_slot7;
                var3 = undefined;
                var16 = var1.bind(var3)();
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var1 = 9;
                var1 = var11[var1];
                var8 = var10.bind(var3)(var1);
                var5 = var8.useStateFromStores;
                var1 = _closure1_slot4;
                var2 = new Array(1);
                var2[0] = var1;
                var9 = var4.ref_id;
                var1 = new Array(1);
                var1[0] = var9;
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot4;
                    var1 = var2.getChannel;
                    var0 = _closure2_slot0;
                    var0 = var0.ref_id;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var12 = var5.bind(var8)(var2, var0, var1);
                var2 = _closure1_slot5;
                var13 = 8;
                var0 = var11[var13];
                var0 = var10.bind(var3)(var0);
                var1 = var0.Text;
                var0 = {
                    'variant': 'text-md/semibold',
                    'color': 'mobile-text-heading-primary'
                };
                var5 = 10;
                var8 = var11[var5];
                var8 = var10.bind(var3)(var8);
                var9 = var8.intl;
                var8 = var9.string;
                var5 = var11[var5];
                var5 = var10.bind(var3)(var5);
                var5 = var5.t;
                var5 = var5.bz1PZX;
                var10 = var8.bind(var9)(var5);
                var5 = global;
                var5 = var5.HermesInternal;
                var9 = var5.concat;
                var8 = '[';
                var5 = ']';
                var5 = var9.bind(var8)(var10, var5);
                var0.children = var5;
                var5 = var2.bind(var3)(var1, var0);
                var0 = null;
                if (!(var0 != var12)) {
                    _fun84801_ip = 413;
                    continue _fun84801
                }
            case 226:
                var2 = _closure1_slot6;
                var1 = _closure1_slot3;
                var0 = {};
                var8 = var16.channelTitle;
                var0.style = var8;
                var14 = _closure1_slot5;
                var15 = _closure1_slot1;
                var9 = _closure1_slot2;
                var10 = 11;
                var8 = var9[var10];
                var11 = var15.bind(var3)(var8);
                var8 = {};
                var16 = var16.channelIcon;
                var8.style = var16;
                var10 = var9[var10];
                var10 = var15.bind(var3)(var10);
                var10 = var10.Sizes;
                var10 = var10.CUSTOM;
                var8.size = var10;
                var10 = _closure1_slot0;
                var15 = 12;
                var15 = var9[var15];
                var16 = var10.bind(var3)(var15);
                var15 = var16.getChannelIcon;
                var15 = var15.bind(var16)(var12);
                var8.source = var15;
                var11 = var14.bind(var3)(var11, var8);
                var8 = new Array(2);
                var8[0] = var11;
                var11 = _closure1_slot5;
                var9 = var9[var13];
                var9 = var10.bind(var3)(var9);
                var10 = var9.Text;
                var9 = {
                    'variant': 'text-md/medium',
                    'color': 'mobile-text-heading-primary'
                };
                var12 = var12.name;
                var9.children = var12;
                var9 = var11.bind(var3)(var10, var9);
                var8[1] = var9;
                var0.children = var8;
                var5 = var2.bind(var3)(var1, var0);
            case 413:
                var2 = _closure1_slot5;
                var1 = _closure1_slot9;
                var0 = {};
                var7 = _closure1_slot8;
                var7 = var7.bind(var3)(var4);
                var0.emojiId = var7;
                var0.guildId = var6;
                var0.title = var5;
                var4 = var4.description;
                var0.description = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.ChannelBenefitRow = var3;
    var1 = function arg0() {
        var0 = arg0;
        var4 = var0.benefit;
        var6 = var0.guildId;
        var3 = _closure1_slot5;
        var2 = _closure1_slot9;
        var1 = {};
        var7 = _closure1_slot8;
        var0 = undefined;
        var7 = var7.bind(var0)(var4);
        var1.emojiId = var7;
        var1.guildId = var6;
        var7 = _closure1_slot5;
        var6 = _closure1_slot0;
        var8 = _closure1_slot2;
        var5 = 8;
        var5 = var8[var5];
        var5 = var6.bind(var0)(var5);
        var6 = var5.Text;
        var5 = {
            'variant': 'text-md/medium',
            'color': 'mobile-text-heading-primary'
        };
        var8 = var4.name;
        var5.children = var8;
        var5 = var7.bind(var0)(var6, var5);
        var1.title = var5;
        var4 = var4.description;
        var1.description = var4;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var2.IntangibleBenefitRow = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1372, 33, 1297, 3106, 10858, 9307, 3943, 566, 1234, 4087, 4810, 2]);