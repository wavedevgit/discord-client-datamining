// modules/premium/native/GuildBoostSlotsInventory.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var6 = metroImportAll;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var6;
    var _closure1_slot3 = var5;
    var0 = function(arg0) { // Original name: GuildBoostSlotCooldown, environment: var1
        _fun82411: for (var _fun82411_ip = 0;;) switch (_fun82411_ip) {
            case 0:
                var1 = arg0;
                var7 = var1.cooldownEndsAt;
                var _closure2_slot0 = var7;
                var2 = _closure1_slot14;
                var4 = undefined;
                var5 = var2.bind(var4)();
                var6 = _closure1_slot4;
                var3 = var6.useMemo;
                var2 = new Array(1);
                var2[0] = var7;
                var0 = function() { // Environment: var0
                    var0 = global;
                    var2 = var0.Date;
                    var3 = _closure2_slot0;
                    var1 = var2.prototype;
                    var1 = Object.create(var1, {
                        constructor: {
                            value: var2
                        }
                    });
                    var4 = var1;
                    var0 = new var4[var2](var3, var2);
                    var0 = var0 instanceof Object ? var0 : var1;
                    return var0;
                };
                var2 = var3.bind(var6)(var0, var2);
                var3 = _closure1_slot1;
                var6 = _closure1_slot3;
                var0 = 11;
                var0 = var6[var0];
                var3 = var3.bind(var4)(var0);
                var0 = 15000;
                var0 = var3.bind(var4)(var2, var0);
                var11 = var0.days;
                var10 = var0.hours;
                var9 = var0.minutes;
                var0 = var2.valueOf;
                var2 = var0.bind(var2)();
                var0 = global;
                var3 = var0.Date;
                var0 = var3.now;
                var0 = var0.bind(var3)();
                var2 = var2 <= var0;
                var0 = null;
                if (var2) {
                    _fun82411_ip = 278;
                    continue _fun82411
                }
            case 146:
                var3 = _closure1_slot11;
                var6 = _closure1_slot0;
                var12 = _closure1_slot3;
                var1 = 12;
                var1 = var12[var1];
                var1 = var6.bind(var4)(var1);
                var2 = var1.Text;
                var1 = {
                    'style': null,
                    'variant': 'text-xs/medium',
                    'color': 'text-muted'
                };
                var5 = var5.subscriptionSlotInfoCooldown;
                var1.style = var5;
                var5 = 13;
                var7 = var12[var5];
                var7 = var6.bind(var4)(var7);
                var8 = var7.intl;
                var7 = var8.format;
                var5 = var12[var5];
                var5 = var6.bind(var4)(var5);
                var5 = var5.t;
                var6 = var5.NffSH8;
                var5 = {};
                var5.days = var11;
                var5.hours = var10;
                var5.minutes = var9;
                var5 = var7.bind(var8)(var6, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 278:
                return var0;
        }
    };
    var _closure1_slot15 = var0;
    var0 = function(arg0) { // Original name: GuildBoostSlotsInventoryRow, environment: var1
        _fun82413: for (var _fun82413_ip = 0;;) switch (_fun82413_ip) {
            case 0:
                var0 = arg0;
                var18 = var0.title;
                var15 = var0.subtitle;
                var11 = var0.action;
                var7 = var0.isLast;
                var0 = _closure1_slot14;
                var3 = undefined;
                var9 = var0.bind(var3)();
                var2 = _closure1_slot12;
                var1 = _closure1_slot5;
                var0 = {};
                var4 = var9.subscriptionSlot;
                var0.style = var4;
                var8 = _closure1_slot12;
                var5 = _closure1_slot5;
                var4 = {};
                var10 = var9.subscriptionSlotInner;
                var4.style = var10;
                var13 = _closure1_slot12;
                var12 = _closure1_slot5;
                var10 = {};
                var14 = var9.subscriptionSlotInfo;
                var10.style = var14;
                var17 = _closure1_slot11;
                var16 = _closure1_slot0;
                var19 = _closure1_slot3;
                var14 = 12;
                var14 = var19[var14];
                var14 = var16.bind(var3)(var14);
                var16 = var14.Text;
                var14 = {
                    'style': null,
                    'lineClamp': 1,
                    'variant': 'text-md/semibold',
                    'color': 'interactive-text-active'
                };
                var19 = var9.subscriptionSlotInfoTitle;
                var14.style = var19;
                var14.children = var18;
                var16 = var17.bind(var3)(var16, var14);
                var14 = new Array(2);
                var14[0] = var16;
                var14[1] = var15;
                var10.children = var14;
                var12 = var13.bind(var3)(var12, var10);
                var10 = new Array(2);
                var10[0] = var12;
                var10[1] = var11;
                var4.children = var10;
                var5 = var8.bind(var3)(var5, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var5 = null;
                if (var7) {
                    _fun82413_ip = 246;
                    continue _fun82413
                }
            case 220:
                var8 = _closure1_slot11;
                var7 = _closure1_slot5;
                var6 = {};
                var9 = var9.subscriptionSlotBorder;
                var6.style = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 246:
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot16 = var0;
    var0 = function(arg0) { // Original name: GuildBoostSlot, environment: var1
        _fun82414: for (var _fun82414_ip = 0;;) switch (_fun82414_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.guild;
                var7 = var0.guildBoostSlot;
                var _closure2_slot0 = var7;
                var5 = var0.isLast;
                var0 = _closure1_slot14;
                var4 = undefined;
                var13 = var0.bind(var4)();
                var0 = null;
                if (!(var0 != var1)) {
                    _fun82414_ip = 465;
                    continue _fun82414
                }
            case 48:
                var1 = var7.premiumGuildSubscription;
                var1 = var0 != var1;
                var3 = null;
                if (!var1) {
                    _fun82414_ip = 74;
                    continue _fun82414
                }
            case 63:
                var1 = var7.premiumGuildSubscription;
                var3 = var1.id;
            case 74:
                var1 = var0 != var3;
                var17 = null;
                if (!var1) {
                    _fun82414_ip = 114;
                    continue _fun82414
                }
            case 83:
                var2 = _closure1_slot1;
                var6 = _closure1_slot3;
                var1 = 14;
                var1 = var6[var1];
                var2 = var2.bind(var4)(var1);
                var1 = var2.extractTimestamp;
                var17 = var1.bind(var2)(var3);
            case 114:
                var3 = _closure1_slot11;
                var2 = _closure1_slot16;
                var1 = {};
                var8 = var0 != var17;
                var6 = null;
                if (!var8) {
                    _fun82414_ip = 229;
                    continue _fun82414
                }
            case 133:
                var9 = _closure1_slot0;
                var15 = _closure1_slot3;
                var8 = 13;
                var12 = var15[var8];
                var12 = var9.bind(var4)(var12);
                var14 = var12.intl;
                var12 = var14.formatToPlainString;
                var8 = var15[var8];
                var8 = var9.bind(var4)(var8);
                var8 = var8.t;
                var9 = var8["ePe+Xh"];
                var8 = {};
                var15 = global;
                var15 = var15.Date;
                var16 = var15.prototype;
                var16 = Object.create(var16, {
                    constructor: {
                        value: var15
                    }
                });
                var20 = var16;
                var19 = var17;
                var15 = new var20[var15](var19, var18);
                var15 = var15 instanceof Object ? var15 : var16;
                var8.date = var15;
                var6 = var12.bind(var14)(var9, var8);
            case 229:
                var1.title = var6;
                var6 = var7.cooldownEndsAt;
                var8 = var0 != var6;
                var6 = null;
                if (!var8) {
                    _fun82414_ip = 275;
                    continue _fun82414
                }
            case 248:
                var12 = _closure1_slot11;
                var9 = _closure1_slot15;
                var8 = {};
                var14 = var7.cooldownEndsAt;
                var8.cooldownEndsAt = var14;
                var6 = var12.bind(var4)(var9, var8);
            case 275:
                var1.subtitle = var6;
                var6 = var7.isOnCooldown;
                var7 = var6.bind(var7)();
                var6 = null;
                if (var7) {
                    _fun82414_ip = 448;
                    continue _fun82414
                }
            case 298:
                var9 = _closure1_slot11;
                var16 = _closure1_slot0;
                var17 = _closure1_slot3;
                var7 = 15;
                var7 = var17[var7];
                var7 = var16.bind(var4)(var7);
                var8 = var7.PressableOpacity;
                var7 = {};
                var12 = 'button';
                var7.accessibilityRole = var12;
                var11 = function() { // Original name: onPress, environment: var11
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot3;
                    var0 = 16;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.openTransferModal;
                    var0 = {};
                    var4 = _closure2_slot0;
                    var3 = new Array(1);
                    var3[0] = var4;
                    var0.guildBoostSlots = var3;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var7.onPress = var11;
                var12 = _closure1_slot11;
                var11 = _closure1_slot1;
                var10 = 17;
                var10 = var17[var10];
                var11 = var11.bind(var4)(var10);
                var10 = {};
                var13 = var13.subscriptionSlotInfoTransferText;
                var10.style = var13;
                var13 = 13;
                var14 = var17[var13];
                var14 = var16.bind(var4)(var14);
                var15 = var14.intl;
                var14 = var15.string;
                var13 = var17[var13];
                var13 = var16.bind(var4)(var13);
                var13 = var13.t;
                var13 = var13.jqqLb6;
                var13 = var14.bind(var15)(var13);
                var10.children = var13;
                var10 = var12.bind(var4)(var11, var10);
                var7.children = var10;
                var6 = var9.bind(var4)(var8, var7);
            case 448:
                var1.action = var6;
                var1.isLast = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            case 465:
                return var0;
        }
    };
    var _closure1_slot17 = var0;
    var0 = function(arg0) { // Original name: UnusedGuildBoostSlots, environment: var1
        _fun82416: for (var _fun82416_ip = 0;;) switch (_fun82416_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.unusedSlots;
                var0 = _closure1_slot14;
                var3 = undefined;
                var18 = var0.bind(var3)();
                var1 = var2.filter;
                var0 = function(arg0) { // Environment: var5
                    _fun82417: for (var _fun82417_ip = 0;;) switch (_fun82417_ip) {
                        case 0:
                            var0 = arg0;
                            var4 = var0.cooldownEndsAt;
                            var0 = null;
                            var0 = var0 != var4;
                            if (!var0) {
                                _fun82417_ip = 77;
                                continue _fun82417
                            }
                        case 18:
                            var1 = global;
                            var2 = var1.Date;
                            var3 = var2.prototype;
                            var3 = Object.create(var3, {
                                constructor: {
                                    value: var2
                                }
                            });
                            var6 = var3;
                            var5 = var4;
                            var2 = new var6[var2](var5, var4);
                            var3 = var2 instanceof Object ? var2 : var3;
                            var2 = var3.valueOf;
                            var2 = var2.bind(var3)();
                            var3 = var1.Date;
                            var1 = var3.now;
                            var1 = var1.bind(var3)();
                            var0 = var2 > var1;
                        case 77:
                            return var0;
                    }
                };
                var7 = var1.bind(var2)(var0);
                var _closure2_slot0 = var7;
                var1 = var2.filter;
                var0 = function(arg0) { // Environment: var5
                    _fun82418: for (var _fun82418_ip = 0;;) switch (_fun82418_ip) {
                        case 0:
                            var0 = arg0;
                            var4 = var0.cooldownEndsAt;
                            var0 = null;
                            var0 = var0 == var4;
                            if (var0) {
                                _fun82418_ip = 77;
                                continue _fun82418
                            }
                        case 18:
                            var1 = global;
                            var2 = var1.Date;
                            var3 = var2.prototype;
                            var3 = Object.create(var3, {
                                constructor: {
                                    value: var2
                                }
                            });
                            var6 = var3;
                            var5 = var4;
                            var2 = new var6[var2](var5, var4);
                            var3 = var2 instanceof Object ? var2 : var3;
                            var2 = var3.valueOf;
                            var2 = var2.bind(var3)();
                            var3 = var1.Date;
                            var1 = var3.now;
                            var1 = var1.bind(var3)();
                            var0 = var2 <= var1;
                        case 77:
                            return var0;
                    }
                };
                var16 = var1.bind(var2)(var0);
                var2 = _closure1_slot12;
                var1 = _closure1_slot5;
                var0 = {};
                var4 = var18.unusedSlots;
                var0.style = var4;
                var4 = var16.length;
                var11 = 0;
                var4 = var4 > var11;
                var6 = null;
                if (!var4) {
                    _fun82416_ip = 350;
                    continue _fun82416
                }
            case 101:
                var9 = _closure1_slot11;
                var8 = _closure1_slot16;
                var4 = {};
                var20 = _closure1_slot0;
                var21 = _closure1_slot3;
                var17 = 13;
                var10 = var21[var17];
                var10 = var20.bind(var3)(var10);
                var15 = var10.intl;
                var13 = var15.formatToPlainString;
                var10 = var21[var17];
                var10 = var20.bind(var3)(var10);
                var10 = var10.t;
                var12 = var10.ewI23O;
                var10 = {};
                var16 = var16.length;
                var10.numSubscriptions = var16;
                var10 = var13.bind(var15)(var12, var10);
                var4.title = var10;
                var13 = _closure1_slot11;
                var10 = 15;
                var10 = var21[var10];
                var10 = var20.bind(var3)(var10);
                var12 = var10.PressableOpacity;
                var10 = {};
                var15 = 'button';
                var10.accessibilityRole = var15;
                var15 = function() { // Original name: onPress, environment: var5
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot3;
                    var0 = 16;
                    var1 = var1[var0];
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    var0 = var1.openApplyBoostModal;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var10.onPress = var15;
                var16 = _closure1_slot11;
                var15 = _closure1_slot1;
                var14 = 17;
                var14 = var21[var14];
                var15 = var15.bind(var3)(var14);
                var14 = {};
                var18 = var18.subscribeButtonText;
                var14.style = var18;
                var18 = var21[var17];
                var18 = var20.bind(var3)(var18);
                var19 = var18.intl;
                var18 = var19.string;
                var17 = var21[var17];
                var17 = var20.bind(var3)(var17);
                var17 = var17.t;
                var17 = var17["7KyPor"];
                var17 = var18.bind(var19)(var17);
                var14.children = var17;
                var14 = var16.bind(var3)(var15, var14);
                var10.children = var14;
                var10 = var13.bind(var3)(var12, var10);
                var4.action = var10;
                var10 = var7.length;
                var10 = var11 === var10;
                var4.isLast = var10;
                var6 = var9.bind(var3)(var8, var4);
            case 350:
                var4 = new Array(2);
                var4[0] = var6;
                var6 = var7.map;
                var5 = function(arg0, arg1) { // Environment: var5
                    _fun82420: for (var _fun82420_ip = 0;;) switch (_fun82420_ip) {
                        case 0:
                            var0 = arg0;
                            var4 = _closure1_slot11;
                            var3 = _closure1_slot16;
                            var2 = {};
                            var6 = _closure1_slot0;
                            var8 = _closure1_slot3;
                            var5 = 13;
                            var9 = var8[var5];
                            var1 = undefined;
                            var9 = var6.bind(var1)(var9);
                            var10 = var9.intl;
                            var9 = var10.formatToPlainString;
                            var5 = var8[var5];
                            var5 = var6.bind(var1)(var5);
                            var5 = var5.t;
                            var8 = var5.gDsyB9;
                            var5 = {};
                            var6 = 1;
                            var5.numSubscriptions = var6;
                            var5 = var9.bind(var10)(var8, var5);
                            var2.title = var5;
                            var8 = var0.cooldownEndsAt;
                            var5 = null;
                            var8 = var5 != var8;
                            if (!var8) {
                                _fun82420_ip = 130;
                                continue _fun82420
                            }
                        case 103:
                            var9 = _closure1_slot11;
                            var8 = _closure1_slot15;
                            var7 = {};
                            var10 = var0.cooldownEndsAt;
                            var7.cooldownEndsAt = var10;
                            var5 = var9.bind(var1)(var8, var7);
                        case 130:
                            var2.subtitle = var5;
                            var5 = _closure2_slot0;
                            var5 = var5.length;
                            var6 = var5 - var6;
                            var5 = arg1;
                            var5 = var5 === var6;
                            var2.isLast = var5;
                            var0 = var0.id;
                            var0 = var4.bind(var1)(var3, var2, var0);
                            return var0;
                    }
                };
                var5 = var6.bind(var7)(var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot18 = var0;
    var0 = function(arg0) { // Original name: BoostedGuildInfo, environment: var1
        _fun82421: for (var _fun82421_ip = 0;;) switch (_fun82421_ip) {
            case 0:
                var0 = arg0;
                var12 = var0.guild;
                var21 = var0.numGuildBoostSlots;
                var0 = _closure1_slot14;
                var4 = undefined;
                var17 = var0.bind(var4)();
                var0 = null;
                var1 = var0 == var12;
                if (var1) {
                    _fun82421_ip = 472;
                    continue _fun82421
                }
            case 39:
                var3 = _closure1_slot12;
                var2 = _closure1_slot5;
                var1 = {};
                var5 = var17.guildInfo;
                var1.style = var5;
                var7 = _closure1_slot11;
                var6 = _closure1_slot5;
                var5 = {};
                var8 = var17.guildInfoIcon;
                var5.style = var8;
                var10 = _closure1_slot11;
                var23 = _closure1_slot1;
                var22 = _closure1_slot3;
                var11 = 18;
                var8 = var22[var11];
                var9 = var23.bind(var4)(var8);
                var8 = {};
                var8.guild = var12;
                var18 = _closure1_slot0;
                var11 = var22[var11];
                var11 = var18.bind(var4)(var11);
                var11 = var11.GuildIconSizes;
                var11 = var11.NORMAL;
                var8.size = var11;
                var11 = false;
                var8.selected = var11;
                var8 = var10.bind(var4)(var9, var8);
                var5.children = var8;
                var6 = var7.bind(var4)(var6, var5);
                var5 = new Array(2);
                var5[0] = var6;
                var8 = _closure1_slot12;
                var7 = _closure1_slot5;
                var6 = {};
                var11 = _closure1_slot11;
                var14 = 12;
                var9 = var22[var14];
                var9 = var18.bind(var4)(var9);
                var10 = var9.Text;
                var9 = {
                    'style': null,
                    'variant': 'heading-lg/extrabold',
                    'color': 'interactive-text-active'
                };
                var13 = var17.guildInfoName;
                var9.style = var13;
                var12 = var12.name;
                var9.children = var12;
                var10 = var11.bind(var4)(var10, var9);
                var9 = new Array(2);
                var9[0] = var10;
                var12 = _closure1_slot12;
                var11 = _closure1_slot5;
                var10 = {};
                var13 = var17.guildInfoRowBottom;
                var10.style = var13;
                var19 = _closure1_slot11;
                var16 = _closure1_slot6;
                var13 = {};
                var20 = 19;
                var20 = var22[var20];
                var20 = var23.bind(var4)(var20);
                var13.source = var20;
                var20 = var17.guildInfoRowIcon;
                var13.style = var20;
                var16 = var19.bind(var4)(var16, var13);
                var13 = new Array(2);
                var13[0] = var16;
                var16 = _closure1_slot11;
                var14 = var22[var14];
                var14 = var18.bind(var4)(var14);
                var15 = var14.Text;
                var14 = {
                    'style': null,
                    'variant': 'text-xs/semibold',
                    'color': 'interactive-text-active'
                };
                var17 = var17.guildInfoSubscriptionCount;
                var14.style = var17;
                var17 = 13;
                var19 = var22[var17];
                var19 = var18.bind(var4)(var19);
                var20 = var19.intl;
                var19 = var20.format;
                var17 = var22[var17];
                var17 = var18.bind(var4)(var17);
                var17 = var17.t;
                var18 = var17.bexfNy;
                var17 = {};
                var17.numSubscriptions = var21;
                var17 = var19.bind(var20)(var18, var17);
                var14.children = var17;
                var14 = var16.bind(var4)(var15, var14);
                var13[1] = var14;
                var10.children = var13;
                var10 = var12.bind(var4)(var11, var10);
                var9[1] = var10;
                var6.children = var9;
                var6 = var8.bind(var4)(var7, var6);
                var5[1] = var6;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 472:
                return var0;
        }
    };
    var _closure1_slot19 = var0;
    var0 = function(arg0) { // Original name: BoostedGuild, environment: var1
        _fun82422: for (var _fun82422_ip = 0;;) switch (_fun82422_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.guildId;
                var _closure2_slot0 = var1;
                var10 = var0.guildBoostSlots;
                var _closure2_slot1 = var10;
                var0 = _closure1_slot14;
                var3 = undefined;
                var20 = var0.bind(var3)();
                var1 = _closure1_slot0;
                var2 = _closure1_slot3;
                var0 = 20;
                var4 = var2[var0];
                var9 = var1.bind(var3)(var4);
                var7 = var9.useStateFromStores;
                var4 = _closure1_slot8;
                var6 = new Array(1);
                var6[0] = var4;
                var4 = function() { // Environment: var8
                    var2 = _closure1_slot8;
                    var1 = var2.getGuild;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var14 = var7.bind(var9)(var6, var4);
                var _closure2_slot2 = var14;
                var0 = var2[var0];
                var4 = var1.bind(var3)(var0);
                var2 = var4.useStateFromStores;
                var0 = _closure1_slot7;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var8
                    var0 = _closure1_slot7;
                    var0 = var0.theme;
                    return var0;
                };
                var18 = var2.bind(var4)(var1, var0);
                var15 = null;
                var0 = var15 != var14;
                var16 = null;
                if (!var0) {
                    _fun82422_ip = 187;
                    continue _fun82422
                }
            case 141:
                var0 = var14.banner;
                var0 = var15 != var0;
                var16 = null;
                if (!var0) {
                    _fun82422_ip = 187;
                    continue _fun82422
                }
            case 156:
                var1 = _closure1_slot1;
                var2 = _closure1_slot3;
                var0 = 21;
                var0 = var2[var0];
                var1 = var1.bind(var3)(var0);
                var0 = var1.getGuildBannerSource;
                var16 = var0.bind(var1)(var14);
            case 187:
                var1 = _closure1_slot0;
                var2 = _closure1_slot3;
                var0 = 22;
                var0 = var2[var0];
                var1 = var1.bind(var3)(var0);
                var0 = var1.useSubscriptionPlaceholderPatternSource;
                var21 = var0.bind(var1)();
                if (!(var15 != var16)) {
                    _fun82422_ip = 224;
                    continue _fun82422
                }
            case 221:
                var21 = var16;
            case 224:
                var2 = _closure1_slot12;
                var1 = _closure1_slot5;
                var0 = {};
                var4 = var20.boostedGuild;
                var0.style = var4;
                var7 = _closure1_slot12;
                var6 = _closure1_slot5;
                var4 = {};
                var9 = var20.subscriptionBody;
                var4.style = var9;
                var12 = _closure1_slot12;
                var11 = _closure1_slot5;
                var9 = {};
                var13 = var20.subscriptionImageView;
                var9.style = var13;
                var19 = _closure1_slot11;
                var17 = _closure1_slot6;
                var13 = {};
                var13.source = var21;
                var22 = var20.subscriptionImage;
                var21 = new Array(2);
                var21[0] = var22;
                var23 = var15 == var16;
                var22 = null;
                if (!var23) {
                    _fun82422_ip = 327;
                    continue _fun82422
                }
            case 321:
                var22 = var20.subscriptionImageFallback;
            case 327:
                var21[1] = var22;
                var13.style = var21;
                var17 = var19.bind(var3)(var17, var13);
                var13 = new Array(3);
                var13[0] = var17;
                var16 = var15 != var16;
                var15 = null;
                if (!var16) {
                    _fun82422_ip = 384;
                    continue _fun82422
                }
            case 358:
                var19 = _closure1_slot11;
                var17 = _closure1_slot5;
                var16 = {};
                var20 = var20.subscriptionImageOverlay;
                var16.style = var20;
                var15 = var19.bind(var3)(var17, var16);
            case 384:
                var13[1] = var15;
                var17 = _closure1_slot11;
                var16 = _closure1_slot1;
                var19 = _closure1_slot3;
                var15 = 23;
                var15 = var19[var15];
                var16 = var16.bind(var3)(var15);
                var15 = {};
                var15.guild = var14;
                var15.theme = var18;
                var15 = var17.bind(var3)(var16, var15);
                var13[2] = var15;
                var9.children = var13;
                var11 = var12.bind(var3)(var11, var9);
                var9 = new Array(2);
                var9[0] = var11;
                var13 = _closure1_slot11;
                var12 = _closure1_slot19;
                var11 = {};
                var11.guild = var14;
                var14 = var10.length;
                var11.numGuildBoostSlots = var14;
                var11 = var13.bind(var3)(var12, var11);
                var9[1] = var11;
                var4.children = var9;
                var6 = var7.bind(var3)(var6, var4);
                var4 = new Array(2);
                var4[0] = var6;
                var7 = _closure1_slot11;
                var6 = _closure1_slot5;
                var5 = {};
                var9 = var10.map;
                var8 = function(arg0, arg1) { // Environment: var8
                    var0 = arg0;
                    var4 = _closure1_slot11;
                    var3 = _closure1_slot17;
                    var2 = {};
                    var5 = _closure2_slot2;
                    var2.guild = var5;
                    var2.guildBoostSlot = var0;
                    var1 = _closure2_slot1;
                    var5 = var1.length;
                    var1 = 1;
                    var5 = var5 - var1;
                    var1 = arg1;
                    var1 = var1 === var5;
                    var2.isLast = var1;
                    var1 = var0.id;
                    var0 = undefined;
                    var0 = var4.bind(var0)(var3, var2, var1);
                    return var0;
                };
                var8 = var9.bind(var10)(var8);
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot20 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var13 = 1;
    var3 = var5[var13];
    var3 = var4.bind(var0)(var3);
    var6 = var3.View;
    var _closure1_slot5 = var6;
    var3 = var3.Image;
    var _closure1_slot6 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var15 = 4;
    var3 = var5[var15];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var14 = var3.Fonts;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot11 = var6;
    var6 = var3.jsxs;
    var _closure1_slot12 = var6;
    var3 = var3.Fragment;
    var _closure1_slot13 = var3;
    var16 = 8;
    var3 = var5[var16];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var11 = 32;
    var8.marginBottom = var11;
    var3.inventory = var8;
    var12 = 16;
    var8 = {
        'marginHorizontal': 16,
        'marginBottom': 16
    };
    var3.header = var8;
    var8 = {};
    var9 = 9;
    var17 = var5[var9];
    var17 = var10.bind(var0)(var17);
    var17 = var17.radii;
    var17 = var17.xs;
    var8.borderRadius = var17;
    var8.marginBottom = var12;
    var3.boostedGuild = var8;
    var8 = {};
    var17 = var5[var9];
    var17 = var10.bind(var0)(var17);
    var17 = var17.colors;
    var17 = var17.BACKGROUND_BASE_LOWEST;
    var8.backgroundColor = var17;
    var3.subscriptionBody = var8;
    var8 = {
        'backgroundColor': null,
        'width': '100%',
        'height': 112,
        'overflow': 'hidden',
        'alignItems': 'center',
        'justifyContent': 'center'
    };
    var17 = var5[var9];
    var17 = var10.bind(var0)(var17);
    var17 = var17.colors;
    var17 = var17.BACKGROUND_MOD_NORMAL;
    var8.backgroundColor = var17;
    var3.subscriptionImageView = var8;
    var8 = {
        'position': 'absolute',
        'width': '100%',
        'height': '100%'
    };
    var3.subscriptionImage = var8;
    var8 = {};
    var17 = 0.4;
    var8.opacity = var17;
    var3.subscriptionImageFallback = var8;
    var8 = {
        'position': 'absolute',
        'width': '100%',
        'height': '100%',
        'backgroundColor': null,
        'opacity': 0.4
    };
    var17 = var5[var9];
    var17 = var10.bind(var0)(var17);
    var17 = var17.colors;
    var17 = var17.BLACK;
    var8.backgroundColor = var17;
    var3.subscriptionImageOverlay = var8;
    var8 = {
        'flexDirection': 'row',
        'padding': 16
    };
    var3.guildInfo = var8;
    var8 = {};
    var8.marginRight = var16;
    var3.guildInfoIcon = var8;
    var8 = {};
    var16 = 10;
    var16 = var5[var16];
    var18 = var10.bind(var0)(var16);
    var17 = var14.DISPLAY_EXTRABOLD;
    var14 = var5[var9];
    var14 = var10.bind(var0)(var14);
    var14 = var14.colors;
    var16 = var14.INTERACTIVE_TEXT_ACTIVE;
    var14 = 20;
    var20 = var18.bind(var0)(var17, var16, var14);
    var21 = var8;
    var14 = copyDataProperties(var21, var20);
    var14 = 'marginBottom';
    var8[var14] = var15;
    var3.guildInfoName = var8;
    var8 = {
        'flexDirection': 'row',
        'alignItems': 'center'
    };
    var3.guildInfoRowBottom = var8;
    var8 = {
        'height': 12,
        'width': 8,
        'marginLeft': 2,
        'marginRight': 8
    };
    var3.guildInfoRowIcon = var8;
    var8 = {};
    var8.lineHeight = var12;
    var3.guildInfoSubscriptionCount = var8;
    var8 = {};
    var14 = var5[var9];
    var14 = var10.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_SURFACE_HIGH;
    var8.backgroundColor = var14;
    var8.paddingLeft = var12;
    var3.subscriptionSlot = var8;
    var8 = {
        'alignItems': 'center',
        'flexDirection': 'row',
        'paddingRight': 16,
        'paddingVertical': 12
    };
    var3.subscriptionSlotInner = var8;
    var8 = {};
    var14 = var5[var9];
    var14 = var10.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.BORDER_SUBTLE;
    var8.backgroundColor = var14;
    var8.height = var13;
    var3.subscriptionSlotBorder = var8;
    var8 = {
        'flexShrink': 1,
        'flexGrow': 1
    };
    var3.subscriptionSlotInfo = var8;
    var8 = {};
    var13 = 24;
    var8.lineHeight = var13;
    var3.subscriptionSlotInfoTitle = var8;
    var8 = {};
    var8.lineHeight = var12;
    var3.subscriptionSlotInfoCooldown = var8;
    var8 = {
        'color': null,
        'fontSize': 16,
        'fontWeight': '500',
        'lineHeight': 20
    };
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.CONTROL_BRAND_FOREGROUND;
    var8.color = var12;
    var3.subscriptionSlotInfoTransferText = var8;
    var8 = {};
    var8.marginBottom = var11;
    var3.unusedSlots = var8;
    var8 = {
        'color': null,
        'fontSize': 16,
        'fontWeight': '500',
        'lineHeight': 20
    };
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.TEXT_LINK;
    var8.color = var9;
    var3.subscribeButtonText = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot14 = var3;
    var3 = 27;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/premium/native/GuildBoostSlotsInventory.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() { // Original name: GuildBoostSlotsInventory, environment: var1
        _fun82426: for (var _fun82426_ip = 0;;) switch (_fun82426_ip) {
            case 0:
                var0 = _closure1_slot14;
                var4 = undefined;
                var15 = var0.bind(var4)();
                var3 = _closure1_slot4;
                var2 = var3.useEffect;
                var1 = function() { // Environment: var11
                    var4 = _closure1_slot2;
                    var3 = _closure1_slot3;
                    var0 = 24;
                    var2 = var3[var0];
                    var0 = undefined;
                    var4 = var4.bind(var0)(var2);
                    var2 = var4.fetchSubscriptions;
                    var2 = var2.bind(var4)();
                    var2 = _closure1_slot0;
                    var1 = 25;
                    var1 = var3[var1];
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.fetchGuildBoostSlots;
                    var1 = var1.bind(var2)();
                    return var0;
                };
                var0 = new Array(0);
                var0 = var2.bind(var3)(var1, var0);
                var2 = _closure1_slot0;
                var5 = _closure1_slot3;
                var0 = 20;
                var1 = var5[var0];
                var7 = var2.bind(var4)(var1);
                var6 = var7.useStateFromStores;
                var1 = _closure1_slot10;
                var3 = new Array(1);
                var3[0] = var1;
                var1 = function() { // Environment: var11
                    var1 = _closure1_slot10;
                    var0 = var1.getPremiumTypeSubscription;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var1 = var6.bind(var7)(var3, var1);
                var0 = var5[var0];
                var6 = var2.bind(var4)(var0);
                var3 = var6.useStateFromStores;
                var0 = _closure1_slot9;
                var2 = new Array(1);
                var2[0] = var0;
                var0 = function() { // Environment: var11
                    var0 = _closure1_slot9;
                    var0 = var0.boostSlots;
                    return var0;
                };
                var2 = var3.bind(var6)(var2, var0);
                var3 = _closure1_slot1;
                var0 = 26;
                var0 = var5[var0];
                var0 = var3.bind(var4)(var0);
                var3 = var0.bind(var4)(var2);
                var2 = var3.groupBy;
                var0 = function(arg0) { // Environment: var11
                    _fun82430: for (var _fun82430_ip = 0;;) switch (_fun82430_ip) {
                        case 0:
                            var0 = arg0;
                            var1 = var0.premiumGuildSubscription;
                            var0 = null;
                            var2 = var0 != var1;
                            var0 = '0';
                            if (!var2) {
                                _fun82430_ip = 29;
                                continue _fun82430
                            }
                        case 24:
                            var0 = var1.guildId;
                        case 29:
                            return var0;
                    }
                };
                var2 = var2.bind(var3)(var0);
                var0 = var2.value;
                var3 = var0.bind(var2)();
                var _closure2_slot0 = var3;
                var8 = 0;
                var14 = var3[var8];
                var0 = global;
                var2 = var0.Object;
                var0 = var2.keys;
                var3 = var0.bind(var2)(var3);
                var2 = var3.filter;
                var0 = function(arg0) { // Environment: var11
                    var1 = '0';
                    var0 = arg0;
                    var0 = var1 !== var0;
                    return var0;
                };
                var13 = var2.bind(var3)(var0);
                var0 = var13.length;
                if (!(var8 === var0)) {
                    _fun82426_ip = 244;
                    continue _fun82426
                }
            case 232:
                var0 = null;
                var2 = var0 == var14;
                if (var2) {
                    _fun82426_ip = 523;
                    continue _fun82426
                }
            case 244:
                var6 = null;
                var1 = var6 == var1;
                var0 = null;
                if (var1) {
                    _fun82426_ip = 523;
                    continue _fun82426
                }
            case 258:
                var3 = _closure1_slot12;
                var2 = _closure1_slot5;
                var1 = {};
                var5 = var15.inventory;
                var1.style = var5;
                var5 = var6 != var14;
                var7 = null;
                if (!var5) {
                    _fun82426_ip = 322;
                    continue _fun82426
                }
            case 287:
                var5 = var14.length;
                var5 = var5 > var8;
                var7 = null;
                if (!var5) {
                    _fun82426_ip = 322;
                    continue _fun82426
                }
            case 301:
                var12 = _closure1_slot11;
                var9 = _closure1_slot18;
                var5 = {};
                var5.unusedSlots = var14;
                var7 = var12.bind(var4)(var9, var5);
            case 322:
                var5 = new Array(2);
                var5[0] = var7;
                var7 = var13.length;
                var7 = var7 > var8;
                var6 = null;
                if (!var7) {
                    _fun82426_ip = 509;
                    continue _fun82426
                }
            case 347:
                var9 = _closure1_slot12;
                var8 = _closure1_slot13;
                var7 = {};
                var14 = _closure1_slot11;
                var18 = _closure1_slot0;
                var19 = _closure1_slot3;
                var10 = 12;
                var10 = var19[var10];
                var10 = var18.bind(var4)(var10);
                var12 = var10.Text;
                var10 = {
                    'style': null,
                    'variant': 'eyebrow',
                    'color': 'text-default'
                };
                var15 = var15.header;
                var10.style = var15;
                var15 = 13;
                var16 = var19[var15];
                var16 = var18.bind(var4)(var16);
                var17 = var16.intl;
                var16 = var17.string;
                var15 = var19[var15];
                var15 = var18.bind(var4)(var15);
                var15 = var15.t;
                var15 = var15.gB9oQ7;
                var15 = var16.bind(var17)(var15);
                var10.children = var15;
                var12 = var14.bind(var4)(var12, var10);
                var10 = new Array(2);
                var10[0] = var12;
                var12 = var13.map;
                var11 = function(arg0) { // Environment: var11
                    var4 = arg0;
                    var3 = _closure1_slot11;
                    var2 = _closure1_slot20;
                    var1 = {};
                    var1.guildId = var4;
                    var0 = _closure2_slot0;
                    var0 = var0[var4];
                    var1.guildBoostSlots = var0;
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2, var1, var4);
                    return var0;
                };
                var11 = var12.bind(var13)(var11);
                var10[1] = var11;
                var7.children = var10;
                var6 = var9.bind(var4)(var8, var7);
            case 509:
                var5[1] = var6;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 523:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 3155, 1410, 6666, 3076, 660, 33, 1297, 671, 4638, 7019, 3895, 1234, 21, 4858, 9844, 1295, 7353, 9874, 566, 1417, 10529, 10533, 3402, 6668, 22, 2]);