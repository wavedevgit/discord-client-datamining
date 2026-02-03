// modules/video_calls/native/components/ChannelCallHeaderSubtitle.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var12 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var12;
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
    var3 = var12.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var10 = 1;
    var6 = var5[var10];
    var3 = metroImportAll;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot4 = var6;
    var11 = 2;
    var3 = var5[var11];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.isGuildScheduledEventActive;
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AnalyticEvents;
    var _closure1_slot10 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot11 = var7;
    var3 = var3.jsxs;
    var _closure1_slot12 = var3;
    var3 = 9;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {
        'flexDirection': 'row',
        'alignItems': 'center'
    };
    var3.container = var9;
    var9 = {};
    var9.marginRight = var11;
    var11 = 10;
    var13 = var5[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.unsafe_rawColors;
    var13 = var13.GREEN_360;
    var9.tintColor = var13;
    var3.icon = var9;
    var9 = {};
    var11 = var5[var11];
    var11 = var12.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BLACK;
    var9.textShadowColor = var11;
    var9.textShadowRadius = var10;
    var3.subtitle = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot13 = var3;
    var3 = var6.memo;
    var1 = function(arg0) { // Environment: var1
        _fun69286: for (var _fun69286_ip = 0;;) switch (_fun69286_ip) {
            case 0:
                var1 = arg0;
                var1 = var1.channel;
                var _closure2_slot0 = var1;
                var4 = undefined;
                var _closure2_slot2 = var4;
                var _closure2_slot3 = var4;
                var1 = _closure1_slot13;
                var9 = var1.bind(var4)();
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var8 = 11;
                var1 = var3[var8];
                var7 = var2.bind(var4)(var1);
                var6 = var7.useStateFromStores;
                var1 = _closure1_slot8;
                var5 = new Array(1);
                var5[0] = var1;
                var1 = function() { // Environment: var0
                    _fun69287: for (var _fun69287_ip = 0;;) switch (_fun69287_ip) {
                        case 0:
                            var2 = _closure1_slot8;
                            var1 = var2.getChannel;
                            var4 = _closure2_slot0;
                            var0 = null;
                            var4 = var0 == var4;
                            var0 = undefined;
                            if (var4) {
                                _fun69287_ip = 39;
                                continue _fun69287
                            }
                        case 30:
                            var3 = _closure2_slot0;
                            var0 = var3.id;
                        case 39:
                            var0 = var1.bind(var2)(var0);
                            return var0;
                    }
                };
                var10 = var6.bind(var7)(var5, var1);
                var _closure2_slot1 = var10;
                var1 = 12;
                var1 = var3[var1];
                var5 = var2.bind(var4)(var1);
                var3 = var5.useGuildChannelScheduledEvents;
                var2 = null;
                var6 = var2 == var10;
                var1 = undefined;
                if (var6) {
                    _fun69286_ip = 123;
                    continue _fun69286
                }
            case 118:
                var1 = var10.id;
            case 123:
                var1 = var3.bind(var5)(var1);
                _closure2_slot2 = var1;
                var6 = _closure1_slot4;
                var5 = var6.useMemo;
                var3 = new Array(1);
                var3[0] = var1;
                var1 = function() { // Environment: var0
                    var2 = _closure2_slot2;
                    var1 = var2.filter;
                    var0 = function(arg0) { // Environment: var0
                        var2 = _closure1_slot7;
                        var1 = undefined;
                        var0 = arg0;
                        var0 = var2.bind(var1)(var0);
                        return var0;
                    };
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var5 = var5.bind(var6)(var1, var3);
                var3 = _closure1_slot3;
                var1 = 1;
                var1 = var3.bind(var4)(var5, var1);
                var7 = 0;
                var1 = var1[var7];
                var5 = _closure1_slot0;
                var3 = _closure1_slot2;
                var6 = var3[var8];
                var14 = var5.bind(var4)(var6);
                var13 = var14.useStateFromStores;
                var6 = _closure1_slot9;
                var12 = new Array(1);
                var12[0] = var6;
                var6 = function() { // Environment: var0
                    _fun69290: for (var _fun69290_ip = 0;;) switch (_fun69290_ip) {
                        case 0:
                            var2 = _closure1_slot9;
                            var1 = var2.getGuild;
                            var4 = _closure2_slot1;
                            var0 = null;
                            var4 = var0 == var4;
                            var0 = undefined;
                            if (var4) {
                                _fun69290_ip = 39;
                                continue _fun69290
                            }
                        case 30:
                            var3 = _closure2_slot1;
                            var0 = var3.guild_id;
                        case 39:
                            var0 = var1.bind(var2)(var0);
                            return var0;
                    }
                };
                var6 = var13.bind(var14)(var12, var6);
                var3 = var3[var8];
                var12 = var5.bind(var4)(var3);
                var8 = var12.useStateFromStores;
                var3 = _closure1_slot6;
                var5 = new Array(1);
                var5[0] = var3;
                var3 = function() { // Environment: var0
                    var2 = _closure1_slot6;
                    var1 = var2.getChannelStatus;
                    var0 = _closure2_slot1;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var3 = var8.bind(var12)(var5, var3);
                var12 = var2 != var10;
                if (!var12) {
                    _fun69286_ip = 278;
                    continue _fun69286
                }
            case 274:
                var12 = var2 != var3;
            case 278:
                if (!var12) {
                    _fun69286_ip = 290;
                    continue _fun69286
                }
            case 281:
                var5 = var3.length;
                var12 = var5 > var7;
            case 290:
                _closure2_slot3 = var12;
                var5 = var2 != var1;
                var17 = null;
                if (!var5) {
                    _fun69286_ip = 323;
                    continue _fun69286
                }
            case 303:
                var7 = _closure1_slot1;
                var8 = _closure1_slot2;
                var5 = 13;
                var5 = var8[var5];
                var17 = var7.bind(var4)(var5);
            case 323:
                var7 = var2 == var6;
                var5 = undefined;
                if (var7) {
                    _fun69286_ip = 337;
                    continue _fun69286
                }
            case 332:
                var5 = var6.name;
            case 337:
                var14 = var3;
                if (var12) {
                    _fun69286_ip = 369;
                    continue _fun69286
                }
            case 343:
                var6 = var2 == var1;
                var3 = undefined;
                if (var6) {
                    _fun69286_ip = 357;
                    continue _fun69286
                }
            case 352:
                var3 = var1.name;
            case 357:
                var14 = var5;
                if (!(var2 != var3)) {
                    _fun69286_ip = 369;
                    continue _fun69286
                }
            case 364:
                var14 = var1.name;
            case 369:
                var5 = _closure1_slot4;
                var3 = var5.useEffect;
                var1 = new Array(2);
                var1[0] = var10;
                var1[1] = var12;
                var0 = function() { // Environment: var0
                    _fun69292: for (var _fun69292_ip = 0;;) switch (_fun69292_ip) {
                        case 0:
                            var0 = _closure2_slot3;
                            if (!var0) {
                                _fun69292_ip = 80;
                                continue _fun69292
                            }
                        case 10:
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 14;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.track;
                            var0 = _closure1_slot10;
                            var1 = var0.VOICE_CHANNEL_TOPIC_VIEWED;
                            var0 = {};
                            var4 = _closure2_slot1;
                            var5 = var4.guild_id;
                            var0.guild_id = var5;
                            var4 = var4.id;
                            var0.channel_id = var4;
                            var0 = var2.bind(var3)(var1, var0);
                        case 80:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var3.bind(var5)(var0, var1);
                var1 = var2 == var10;
                var0 = null;
                if (var1) {
                    _fun69286_ip = 688;
                    continue _fun69286
                }
            case 415:
                var1 = var2 == var14;
                var0 = null;
                if (var1) {
                    _fun69286_ip = 688;
                    continue _fun69286
                }
            case 427:
                var3 = _closure1_slot12;
                var2 = _closure1_slot5;
                var1 = {};
                var5 = var9.container;
                var1.style = var5;
                var6 = var17;
                if (!var6) {
                    _fun69286_ip = 549;
                    continue _fun69286
                }
            case 452:
                var8 = _closure1_slot11;
                var15 = _closure1_slot1;
                var16 = _closure1_slot2;
                var13 = 15;
                var5 = var16[var13];
                var7 = var15.bind(var4)(var5);
                var5 = {};
                var18 = var9.icon;
                var5.style = var18;
                var5.source = var17;
                var13 = var16[var13];
                var13 = var15.bind(var4)(var13);
                var13 = var13.Sizes;
                var13 = var13.EXTRA_SMALL;
                var5.size = var13;
                var13 = 10;
                var13 = var16[var13];
                var13 = var15.bind(var4)(var13);
                var13 = var13.unsafe_rawColors;
                var13 = var13.GREEN_360;
                var5.color = var13;
                var6 = var8.bind(var4)(var7, var5);
            case 549:
                var5 = new Array(2);
                var5[0] = var6;
                var8 = _closure1_slot11;
                var7 = _closure1_slot0;
                var13 = _closure1_slot2;
                var6 = 16;
                var6 = var13[var6];
                var6 = var7.bind(var4)(var6);
                var7 = var6.Text;
                var6 = {
                    'style': null,
                    'lineClamp': 1,
                    'variant': 'text-xs/normal'
                };
                var9 = var9.subtitle;
                var6.style = var9;
                var9 = var14;
                if (!var12) {
                    _fun69286_ip = 664;
                    continue _fun69286
                }
            case 618:
                var12 = _closure1_slot1;
                var13 = _closure1_slot2;
                var11 = 17;
                var11 = var13[var11];
                var13 = var12.bind(var4)(var11);
                var12 = var13.parseVoiceChannelStatus;
                var11 = {};
                var10 = var10.id;
                var11.channelId = var10;
                var10 = true;
                var9 = var12.bind(var13)(var14, var10, var11);
            case 664:
                var6.children = var9;
                var6 = var8.bind(var4)(var7, var6);
                var5[1] = var6;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 688:
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 18;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/video_calls/native/components/ChannelCallHeaderSubtitle.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 4570, 3334, 1372, 1410, 660, 33, 1297, 671, 566, 8080, 8178, 795, 4086, 3941, 4781, 2]);