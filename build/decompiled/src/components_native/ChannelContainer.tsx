// components_native/ChannelContainer.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function() {
        _fun69507: for (var _fun69507_ip = 0;;) switch (_fun69507_ip) {
            case 0:
                var1 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 8;
                var0 = var2[var0];
                var4 = undefined;
                var0 = var1.bind(var4)(var0);
                var0 = var0.bind(var4)();
                var1 = var0.isChatBesideChannelList;
                var0 = null;
                if (!var1) {
                    _fun69507_ip = 105;
                    continue _fun69507
                }
            case 40:
                var3 = _closure1_slot10;
                var2 = _closure1_slot4;
                var1 = {};
                var6 = _closure1_slot12;
                var6 = var6.container;
                var1.style = var6;
                var7 = _closure1_slot10;
                var6 = _closure1_slot1;
                var8 = _closure1_slot2;
                var5 = 9;
                var5 = var8[var5];
                var6 = var6.bind(var4)(var5);
                var5 = {};
                var5 = var7.bind(var4)(var6, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 105:
                return var0;
        }
    };
    var _closure1_slot13 = var0;
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
    var7 = var3.StyleSheet;
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ChannelTypes;
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ContentDismissActionType;
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot10 = var6;
    var3 = var3.jsxs;
    var _closure1_slot11 = var3;
    var6 = var7.create;
    var3 = {};
    var8 = {
        'position': 'absolute',
        'left': 0,
        'right': 0,
        'backgroundColor': 'transparent',
        'marginTop': 8
    };
    var3.container = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot12 = var3;
    var3 = 18;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'components_native/ChannelContainer.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Environment: var1
        _fun69508: for (var _fun69508_ip = 0;;) switch (_fun69508_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.guildId;
                var _closure2_slot0 = var2;
                var15 = var1.channelId;
                var _closure2_slot1 = var15;
                var9 = var1.children;
                var3 = undefined;
                var _closure2_slot2 = var3;
                var _closure2_slot3 = var3;
                var _closure2_slot4 = var3;
                var2 = _closure1_slot0;
                var8 = _closure1_slot2;
                var4 = 10;
                var1 = var8[var4];
                var7 = var2.bind(var3)(var1);
                var6 = var7.useStateFromStoresObject;
                var1 = _closure1_slot7;
                var2 = new Array(2);
                var2[0] = var1;
                var1 = _closure1_slot6;
                var2[1] = var1;
                var1 = function() { // Environment: var0
                    _fun69509: for (var _fun69509_ip = 0;;) switch (_fun69509_ip) {
                        case 0:
                            var2 = _closure1_slot7;
                            var0 = var2.getVoiceChannelId;
                            var4 = var0.bind(var2)();
                            var0 = {};
                            var2 = _closure1_slot6;
                            var3 = var2.getChannel;
                            var1 = _closure2_slot1;
                            var1 = var3.bind(var2)(var1);
                            var0.channel = var1;
                            var0.voiceChannelId = var4;
                            var1 = global;
                            var3 = var1.Boolean;
                            var1 = var2.getChannel;
                            var5 = var1.bind(var2)(var4);
                            var1 = null;
                            var4 = var1 == var5;
                            var2 = undefined;
                            var1 = undefined;
                            if (var4) {
                                _fun69509_ip = 90;
                                continue _fun69509
                            }
                        case 80:
                            var4 = var5.isGuildStageVoice;
                            var1 = var4.bind(var5)();
                        case 90:
                            var1 = var3.bind(var2)(var1);
                            var0.isStageChannel = var1;
                            return var0;
                    }
                };
                var1 = var6.bind(var7)(var2, var1);
                var14 = var1.channel;
                var6 = var1.voiceChannelId;
                var2 = var1.isStageChannel;
                var7 = _closure1_slot1;
                var1 = 11;
                var1 = var8[var1];
                var1 = var7.bind(var3)(var1);
                var1 = var1.bind(var3)(var6);
                var8 = !var2;
                if (var8) {
                    _fun69508_ip = 151;
                    continue _fun69508
                }
            case 148:
                var8 = var1;
            case 151:
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var4];
                var6 = var2.bind(var3)(var1);
                var4 = var6.useStateFromStores;
                var1 = _closure1_slot5;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var0
                    _fun69510: for (var _fun69510_ip = 0;;) switch (_fun69510_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var0 = null;
                            var0 = var0 != var2;
                            if (!var0) {
                                _fun69510_ip = 38;
                                continue _fun69510
                            }
                        case 16:
                            var3 = _closure1_slot5;
                            var2 = var3.isLurking;
                            var1 = _closure2_slot0;
                            var0 = var2.bind(var3)(var1);
                        case 38:
                            return var0;
                    }
                };
                var7 = var4.bind(var6)(var2, var1);
                var11 = null;
                var12 = var11 != var14;
                if (!var12) {
                    _fun69508_ip = 217;
                    continue _fun69508
                }
            case 207:
                var1 = var14.isPrivate;
                var12 = var1.bind(var14)();
            case 217:
                _closure2_slot2 = var12;
                var4 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 12;
                var6 = var2[var1];
                var6 = var4.bind(var3)(var6);
                var10 = var6.bind(var3)(var12);
                _closure2_slot3 = var10;
                var1 = var2[var1];
                var1 = var4.bind(var3)(var1);
                var13 = var1.bind(var3)(var15);
                _closure2_slot4 = var13;
                var6 = _closure1_slot3;
                var4 = var6.useEffect;
                var1 = new Array(4);
                var1[0] = var15;
                var1[1] = var13;
                var1[2] = var12;
                var1[3] = var10;
                var0 = function() { // Environment: var0
                    _fun69511: for (var _fun69511_ip = 0;;) switch (_fun69511_ip) {
                        case 0:
                            var0 = _closure2_slot3;
                            if (!var0) {
                                _fun69511_ip = 17;
                                continue _fun69511
                            }
                        case 10:
                            var1 = _closure2_slot2;
                            var0 = !var1;
                        case 17:
                            if (var0) {
                                _fun69511_ip = 49;
                                continue _fun69511
                            }
                        case 20:
                            var1 = _closure2_slot3;
                            if (!var1) {
                                _fun69511_ip = 31;
                                continue _fun69511
                            }
                        case 27:
                            var1 = _closure2_slot2;
                        case 31:
                            if (!var1) {
                                _fun69511_ip = 46;
                                continue _fun69511
                            }
                        case 34:
                            var3 = _closure2_slot1;
                            var2 = _closure2_slot4;
                            var1 = var3 !== var2;
                        case 46:
                            var0 = var1;
                        case 49:
                            if (!var0) {
                                _fun69511_ip = 130;
                                continue _fun69511
                            }
                        case 52:
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var0 = 13;
                            var0 = var6[var0];
                            var1 = undefined;
                            var3 = var5.bind(var1)(var0);
                            var2 = var3.UNSAFE_markDismissibleContentAsDismissed;
                            var0 = 14;
                            var0 = var6[var0];
                            var0 = var5.bind(var1)(var0);
                            var0 = var0.DismissibleContent;
                            var1 = var0.ACTIVITY_GDM_CALL_TOOLTIP;
                            var0 = {};
                            var4 = _closure1_slot9;
                            var4 = var4.AUTO;
                            var0.dismissAction = var4;
                            var0 = var2.bind(var3)(var1, var0);
                        case 130:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var4.bind(var6)(var0, var1);
                var1 = _closure1_slot0;
                var0 = 15;
                var0 = var2[var0];
                var1 = var1.bind(var3)(var0);
                var0 = var1.useChannelStyles;
                var12 = var0.bind(var1)();
                var2 = _closure1_slot11;
                var1 = _closure1_slot4;
                var0 = {};
                var4 = var12.scene;
                var0.style = var4;
                var6 = _closure1_slot4;
                var4 = {};
                var10 = var12.flex;
                var4.style = var10;
                var10 = var11 == var14;
                var15 = undefined;
                if (var10) {
                    _fun69508_ip = 385;
                    continue _fun69508
                }
            case 380:
                var15 = var14.type;
            case 385:
                var10 = _closure1_slot8;
                var13 = var10.GUILD_ANNOUNCEMENT;
                var10 = null;
                if (!(var15 === var13)) {
                    _fun69508_ip = 442;
                    continue _fun69508
                }
            case 401:
                var10 = null;
                if (!var7) {
                    _fun69508_ip = 442;
                    continue _fun69508
                }
            case 406:
                var13 = _closure1_slot10;
                var11 = _closure1_slot1;
                var15 = _closure1_slot2;
                var7 = 16;
                var7 = var15[var7];
                var11 = var11.bind(var3)(var7);
                var7 = {};
                var7.channel = var14;
                var10 = var13.bind(var3)(var11, var7);
            case 442:
                var7 = new Array(3);
                var7[0] = var10;
                var7[1] = var9;
                if (!var8) {
                    _fun69508_ip = 499;
                    continue _fun69508
                }
            case 457:
                var11 = _closure1_slot10;
                var10 = _closure1_slot1;
                var13 = _closure1_slot2;
                var9 = 17;
                var9 = var13[var9];
                var10 = var10.bind(var3)(var9);
                var9 = {};
                var12 = var12.callPTTButton;
                var9.style = var12;
                var8 = var11.bind(var3)(var10, var9);
            case 499:
                var7[2] = var8;
                var4.children = var7;
                var6 = var2.bind(var3)(var6, var4);
                var4 = new Array(2);
                var4[0] = var6;
                var7 = _closure1_slot10;
                var6 = _closure1_slot13;
                var5 = {};
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.ChannelContainer = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 3053, 1372, 1661, 660, 1369, 33, 3883, 8677, 566, 7954, 5270, 3173, 1358, 9728, 9729, 8583, 2]);