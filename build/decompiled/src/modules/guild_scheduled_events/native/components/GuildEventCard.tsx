// modules/guild_scheduled_events/native/components/GuildEventCard.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
    var0 = function arg0() {
        _fun67149: for (var _fun67149_ip = 0;;) switch (_fun67149_ip) {
            case 0:
                var0 = arg0;
                var8 = var0.event;
                var13 = var0.isConnected;
                var14 = var0.onCloseAction;
                var0 = _closure1_slot9;
                var3 = undefined;
                var4 = var0.bind(var3)();
                var10 = _closure1_slot0;
                var6 = _closure1_slot2;
                var9 = 8;
                var0 = var6[var9];
                var1 = var10.bind(var3)(var0);
                var0 = var1.usePrimaryActionButtonType;
                var7 = var0.bind(var1)(var8, var13);
                var2 = _closure1_slot8;
                var0 = 9;
                var0 = var6[var0];
                var0 = var10.bind(var3)(var0);
                var1 = var0.ButtonGroup;
                var0 = {};
                var11 = 'horizontal';
                var0.direction = var11;
                var4 = var4.actionContainer;
                var0.style = var4;
                var12 = _closure1_slot7;
                var4 = var6[var9];
                var4 = var10.bind(var3)(var4);
                var11 = var4.GuildEventCardPrimaryAction;
                var4 = {};
                var4.event = var8;
                var4.onCloseAction = var14;
                var4.isConnected = var13;
                var11 = var12.bind(var3)(var11, var4);
                var4 = new Array(3);
                var4[0] = var11;
                var6 = var6[var9];
                var6 = var10.bind(var3)(var6);
                var6 = var6.PrimaryActionType;
                var6 = var6.START;
                var6 = var7 === var6;
                if (!var6) {
                    _fun67149_ip = 227;
                    continue _fun67149
                }
            case 187:
                var11 = _closure1_slot7;
                var10 = _closure1_slot0;
                var7 = _closure1_slot2;
                var7 = var7[var9];
                var7 = var10.bind(var3)(var7);
                var10 = var7.GuildEventCardRSVPAction;
                var7 = {};
                var7.event = var8;
                var6 = var11.bind(var3)(var10, var7);
            case 227:
                var4[1] = var6;
                var7 = _closure1_slot7;
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var5 = var5[var9];
                var5 = var6.bind(var3)(var5);
                var6 = var5.GuildEventShareAction;
                var5 = {};
                var5.event = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[2] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot10 = var0;
    var0 = global;
    var7 = var0.Object;
    var4 = var7.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var7)(var2, var0, var1);
    var10 = 0;
    var4 = var6[var10];
    var1 = arg3;
    var0 = undefined;
    var7 = var1.bind(var0)(var4);
    var1 = 1;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var1 = var1.View;
    var _closure1_slot3 = var1;
    var1 = 2;
    var1 = var6[var1];
    var1 = var12.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 3;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var1 = var1.isGuildScheduledEventActive;
    var _closure1_slot5 = var1;
    var1 = 4;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var1 = var1.AGE_VERIFICATION_STAGE_CHANNEL_TYPES;
    var _closure1_slot6 = var1;
    var1 = 5;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var4 = var1.jsx;
    var _closure1_slot7 = var4;
    var1 = var1.jsxs;
    var _closure1_slot8 = var1;
    var1 = 6;
    var1 = var6[var1];
    var8 = var5.bind(var0)(var1);
    var4 = var8.createStyles;
    var1 = {};
    var9 = {};
    var11 = 7;
    var11 = var6[var11];
    var11 = var12.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_16;
    var9.paddingTop = var11;
    var9.paddingBottom = var10;
    var1.actionContainer = var9;
    var1 = var4.bind(var8)(var1);
    var _closure1_slot9 = var1;
    var4 = var7.memo;
    var3 = function(arg0) { // Environment: var3
        _fun67150: for (var _fun67150_ip = 0;;) switch (_fun67150_ip) {
            case 0:
                var0 = arg0;
                var13 = var0.event;
                var _closure2_slot0 = var13;
                var1 = var0.onPress;
                var _closure2_slot1 = var1;
                var18 = var0.onCloseAction;
                var11 = var0.hideControls;
                var3 = undefined;
                if (!(var11 === var3)) {
                    _fun67150_ip = 44;
                    continue _fun67150
                }
            case 42:
                var11 = false;
            case 44:
                var8 = var0.hideAgeVerificationNotice;
                if (!(var8 === var3)) {
                    _fun67150_ip = 56;
                    continue _fun67150
                }
            case 54:
                var8 = false;
            case 56:
                var23 = var0.isNew;
                if (!(var23 === var3)) {
                    _fun67150_ip = 68;
                    continue _fun67150
                }
            case 66:
                var23 = false;
            case 68:
                var _closure2_slot2 = var3;
                var20 = var13.channel_id;
                _closure2_slot2 = var20;
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 10;
                var0 = var2[var0];
                var5 = var1.bind(var3)(var0);
                var4 = var5.useStateFromStores;
                var0 = _closure1_slot4;
                var2 = new Array(1);
                var2[0] = var0;
                var1 = new Array(1);
                var1[0] = var20;
                var0 = function() { // Environment: var12
                    _fun67151: for (var _fun67151_ip = 0;;) switch (_fun67151_ip) {
                        case 0:
                            var2 = _closure1_slot4;
                            var0 = var2.isConnected;
                            var0 = var0.bind(var2)();
                            if (!var0) {
                                _fun67151_ip = 45;
                                continue _fun67151
                            }
                        case 20:
                            var2 = _closure1_slot4;
                            var1 = var2.getChannelId;
                            var2 = var1.bind(var2)();
                            var1 = _closure2_slot2;
                            var0 = var2 === var1;
                        case 45:
                            return var0;
                    }
                };
                var17 = var4.bind(var5)(var2, var0, var1);
                if (!var17) {
                    _fun67150_ip = 155;
                    continue _fun67150
                }
            case 146:
                var0 = _closure1_slot5;
                var17 = var0.bind(var3)(var13);
            case 155:
                var15 = _closure1_slot0;
                var10 = _closure1_slot2;
                var0 = 11;
                var0 = var10[var0];
                var2 = var15.bind(var3)(var0);
                var1 = var2.recurrenceRuleFromServer;
                var0 = var13.recurrence_rule;
                var14 = var1.bind(var2)(var0);
                var21 = function() {
                    _fun67152: for (var _fun67152_ip = 0;;) switch (_fun67152_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun67152_ip = 28;
                                continue _fun67152
                            }
                        case 13:
                            var2 = _closure2_slot1;
                            var1 = _closure2_slot0;
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                        case 28:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2 = _closure1_slot7;
                var0 = 12;
                var0 = var10[var0];
                var0 = var15.bind(var3)(var0);
                var1 = var0.Card;
                var0 = {};
                var4 = false;
                var0.accessible = var4;
                var0.onPress = var21;
                var6 = _closure1_slot8;
                var5 = _closure1_slot3;
                var4 = {};
                var22 = _closure1_slot7;
                var16 = 8;
                var7 = var10[var16];
                var7 = var15.bind(var3)(var7);
                var19 = var7.GuildEventCardHeader;
                var7 = {};
                var7.event = var13;
                var7.isNew = var23;
                var19 = var22.bind(var3)(var19, var7);
                var7 = new Array(6);
                var7[0] = var19;
                var19 = _closure1_slot7;
                var10 = var10[var16];
                var10 = var15.bind(var3)(var10);
                var15 = var10.GuildEventCardMetaInfo;
                var10 = {};
                var10.event = var13;
                var10.onTitlePress = var21;
                var10 = var19.bind(var3)(var15, var10);
                var7[1] = var10;
                var8 = !var8;
                if (!var8) {
                    _fun67150_ip = 358;
                    continue _fun67150
                }
            case 338:
                var19 = _closure1_slot6;
                var15 = var19.has;
                var10 = var13.entity_type;
                var8 = var15.bind(var19)(var10);
            case 358:
                if (!var8) {
                    _fun67150_ip = 409;
                    continue _fun67150
                }
            case 361:
                var19 = _closure1_slot7;
                var15 = _closure1_slot1;
                var21 = _closure1_slot2;
                var10 = 13;
                var10 = var21[var10];
                var15 = var15.bind(var3)(var10);
                var10 = {};
                var21 = true;
                var10.noBackground = var21;
                var10.onConfirmPress = var18;
                var10.channelId = var20;
                var8 = var19.bind(var3)(var15, var10);
            case 409:
                var7[2] = var8;
                var15 = _closure1_slot7;
                var10 = _closure1_slot0;
                var8 = _closure1_slot2;
                var8 = var8[var16];
                var8 = var10.bind(var3)(var8);
                var10 = var8.GuildEventSimpleLocation;
                var8 = {};
                var8.event = var13;
                var8 = var15.bind(var3)(var10, var8);
                var7[3] = var8;
                var8 = null;
                var10 = null;
                if (var11) {
                    _fun67150_ip = 495;
                    continue _fun67150
                }
            case 464:
                var16 = _closure1_slot7;
                var15 = _closure1_slot10;
                var11 = {};
                var11.event = var13;
                var11.onCloseAction = var18;
                var11.isConnected = var17;
                var10 = var16.bind(var3)(var15, var11);
            case 495:
                var7[4] = var10;
                var8 = var8 != var14;
                if (!var8) {
                    _fun67150_ip = 574;
                    continue _fun67150
                }
            case 506:
                var11 = _closure1_slot7;
                var10 = _closure1_slot1;
                var15 = _closure1_slot2;
                var9 = 14;
                var9 = var15[var9];
                var10 = var10.bind(var3)(var9);
                var9 = {};
                var15 = var13.guild_id;
                var9.guildId = var15;
                var9.recurrenceRule = var14;
                var13 = var13.id;
                var9.guildEventId = var13;
                var12 = function arg0() {
                    _fun67153: for (var _fun67153_ip = 0;;) switch (_fun67153_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            var0 = null;
                            var2 = var0 == var2;
                            var4 = undefined;
                            var0 = undefined;
                            if (var2) {
                                _fun67153_ip = 37;
                                continue _fun67153
                            }
                        case 20:
                            var3 = _closure2_slot1;
                            var2 = _closure2_slot0;
                            var1 = arg0;
                            var0 = var3.bind(var4)(var2, var1);
                        case 37:
                            return var0;
                    }
                };
                var9.onRecurrencePress = var12;
                var8 = var11.bind(var3)(var10, var9);
            case 574:
                var7[5] = var8;
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var3 = var4.bind(var7)(var3);
    var4 = 15;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_scheduled_events/native/components/GuildEventCard.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.useGuildEventCardStyles = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 3518, 3334, 1378, 33, 1297, 671, 8164, 6443, 566, 8101, 4900, 5931, 8193, 2]);