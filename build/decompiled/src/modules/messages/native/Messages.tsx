// modules/messages/native/Messages.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function arg0, arg1() {
        _fun77465: for (var _fun77465_ip = 0;;) switch (_fun77465_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun77465_ip = 46;
                    continue _fun77465
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun77465_ip = 55;
                    continue _fun77465
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun77465_ip = 345;
                    continue _fun77465
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun77465_ip = 323;
                    continue _fun77465
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun77465_ip = 283;
                    continue _fun77465
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun77465_ip = 270;
                    continue _fun77465
                }
            case 110:
                var6 = {};
                var8 = var6.toString;
                var6 = var8.call;
                var10 = var6.bind(var8)(var2);
                var9 = var10.slice;
                var8 = 8;
                var6 = -1;
                var8 = var9.bind(var10)(var8, var6);
                var6 = 'Object';
                var6 = var6 === var8;
                if (!var6) {
                    _fun77465_ip = 163;
                    continue _fun77465
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun77465_ip = 179;
                    continue _fun77465
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun77465_ip = 249;
                    continue _fun77465
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun77465_ip = 249;
                    continue _fun77465
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun77465_ip = 234;
                    continue _fun77465
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun77465_ip = 247;
                    continue _fun77465
                }
            case 234:
                var8 = _closure1_slot68;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun77465_ip = 265;
                continue _fun77465;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun77465_ip = 283;
                continue _fun77465;
            case 270:
                var6 = _closure1_slot68;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun77465_ip = 323;
                    continue _fun77465
                }
            case 289:
                var6 = var4.TypeError;
                var4 = var6.prototype;
                var5 = Object.create(var4, {
                    constructor: {
                        value: var6
                    }
                });
                var12 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
                var13 = var5;
                var4 = new var13[var6](var12, var11);
                var4 = var4 instanceof Object ? var4 : var5;
                throw var4;
            case 323:
                if (!var3) {
                    _fun77465_ip = 330;
                    continue _fun77465
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun77466: for (var _fun77466_ip = 0;;) switch (_fun77466_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun77466_ip = 56;
                                continue _fun77466
                            }
                        case 20:
                            var0 = {};
                            var1 = false;
                            var0.done = var1;
                            var2 = _closure2_slot0;
                            var1 = _closure2_slot1;
                            var1 = parseFloat(var1);
                            var3 = var1 + 1;
                            _closure2_slot1 = var3;
                            var1 = var2[var1];
                            var0.value = var1;
                            _fun77466_ip = 67;
                            continue _fun77466;
                        case 56:
                            var1 = {};
                            var2 = true;
                            var1.done = var2;
                            var0 = var1;
                        case 67:
                            return var0;
                    }
                };
                return var0;
            case 345:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot67 = var0;
    var0 = function arg0, arg1() {
        _fun77467: for (var _fun77467_ip = 0;;) switch (_fun77467_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun77467_ip = 23;
                    continue _fun77467
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun77467_ip = 33;
                    continue _fun77467
                }
            case 28:
                var1 = var3.length;
            case 33:
                var0 = global;
                var0 = var0.Array;
                var0 = var0.bind(var2)(var1);
                var2 = 0;
                var4 = var2 < var1;
                if (!var4) {
                    _fun77467_ip = 70;
                    continue _fun77467
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun77467_ip = 55;
                    continue _fun77467
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot68 = var0;
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
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var7 = var5[var3];
    var3 = arg3;
    var7 = var3.bind(var0)(var7);
    var _closure1_slot5 = var7;
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
    var3 = var6.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot11 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot12 = var3;
    var3 = 10;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.updateShouldShowJumpToPresentButton;
    var _closure1_slot13 = var3;
    var3 = 11;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot14 = var3;
    var3 = 12;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot15 = var3;
    var3 = 13;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot16 = var3;
    var3 = 14;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot17 = var3;
    var3 = 15;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot18 = var3;
    var3 = 16;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot19 = var3;
    var3 = 17;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot20 = var3;
    var3 = 18;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot21 = var3;
    var3 = 19;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot22 = var3;
    var3 = 20;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot23 = var3;
    var3 = 21;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot24 = var3;
    var3 = 22;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot25 = var3;
    var3 = 23;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var8 = var3.useChannelPollInteractions;
    var _closure1_slot26 = var8;
    var3 = var3.useMessagePollInteractions;
    var _closure1_slot27 = var3;
    var3 = 24;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot28 = var3;
    var3 = 25;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot29 = var3;
    var3 = 26;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot30 = var3;
    var3 = 27;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot31 = var3;
    var3 = 28;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot32 = var3;
    var3 = 29;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot33 = var3;
    var3 = 30;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot34 = var3;
    var3 = 31;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot35 = var3;
    var3 = 32;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot36 = var3;
    var3 = 33;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot37 = var3;
    var3 = 34;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot38 = var3;
    var3 = 35;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot39 = var3;
    var3 = 36;
    var8 = var5[var3];
    var8 = var6.bind(var0)(var8);
    var _closure1_slot40 = var8;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.getUserCommunicationDisabledVersion;
    var _closure1_slot41 = var3;
    var3 = 37;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot42 = var3;
    var3 = 38;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot43 = var3;
    var3 = 39;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot44 = var3;
    var3 = 40;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot45 = var3;
    var3 = 41;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot46 = var3;
    var3 = 42;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot47 = var3;
    var3 = 43;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot48 = var3;
    var3 = 44;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot49 = var3;
    var3 = 45;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot50 = var3;
    var3 = 46;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot51 = var3;
    var3 = 47;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot52 = var3;
    var3 = 48;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot53 = var3;
    var3 = 49;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot54 = var3;
    var3 = 50;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var8 = var3.ChannelTypesSets;
    var _closure1_slot55 = var8;
    var8 = var3.MessageTypes;
    var _closure1_slot56 = var8;
    var8 = var3.MessageFlags;
    var _closure1_slot57 = var8;
    var8 = var3.Permissions;
    var _closure1_slot58 = var8;
    var8 = var3.ME;
    var _closure1_slot59 = var8;
    var3 = var3.ActivityActionTypes;
    var _closure1_slot60 = var3;
    var3 = 51;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var8 = var3.PREMIUM_TIER_2_REFERRAL_TRIAL_ID;
    var _closure1_slot61 = var8;
    var3 = var3.PremiumTypes;
    var _closure1_slot62 = var3;
    var3 = 52;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var8 = var3.jsx;
    var _closure1_slot63 = var8;
    var8 = var3.Fragment;
    var _closure1_slot64 = var8;
    var3 = var3.jsxs;
    var _closure1_slot65 = var3;
    var3 = 53;
    var3 = var5[var3];
    var6 = var6.bind(var0)(var3);
    var3 = var6.prototype;
    var8 = Object.create(var3, {
        constructor: {
            value: var6
        }
    });
    var3 = 'Messages';
    var12 = var8;
    var11 = var3;
    var6 = new var12[var6](var11, var10);
    var6 = var6 instanceof Object ? var6 : var8;
    var _closure1_slot66 = var6;
    var6 = var7.forwardRef;
    var1 = function(arg0, arg1) { // Environment: var1
        _fun77468: for (var _fun77468_ip = 0;;) switch (_fun77468_ip) {
            case 0:
                var66 = arg0;
                var _closure2_slot0 = var66;
                var7 = var66.channel;
                var _closure2_slot1 = var7;
                var17 = var66.screenIndex;
                var _closure2_slot2 = var17;
                var13 = var66.chatInputRef;
                var _closure2_slot3 = var13;
                var21 = var66.isResourceChannel;
                var _closure2_slot4 = var21;
                var24 = var66.style;
                var22 = var66.visibleMessagesWindowHandler;
                var _closure2_slot5 = var22;
                var20 = var66.onPressKey;
                var10 = var66.children;
                var15 = var66.HACK_fixModalInteraction;
                var25 = var66.alwaysRespectKeyboard;
                var4 = _closure1_slot0;
                var1 = _closure1_slot2;
                var2 = 54;
                var6 = var1[var2];
                var3 = undefined;
                var12 = var4.bind(var3)(var6);
                var11 = var12.useStateFromStores;
                var6 = _closure1_slot45;
                var9 = new Array(1);
                var9[0] = var6;
                var6 = var7.id;
                var8 = new Array(1);
                var8[0] = var6;
                var6 = function() { // Environment: var0
                    var2 = _closure1_slot45;
                    var1 = var2.getMessages;
                    var0 = _closure2_slot1;
                    var0 = var0.id;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var8 = var11.bind(var12)(var9, var6, var8);
                var _closure2_slot6 = var8;
                var9 = var7.id;
                var _closure2_slot7 = var9;
                var6 = var7.getGuildId;
                var11 = var6.bind(var7)();
                var _closure2_slot8 = var11;
                var1 = var1[var2];
                var12 = var4.bind(var3)(var1);
                var6 = var12.useStateFromStores;
                var1 = _closure1_slot42;
                var4 = new Array(1);
                var4[0] = var1;
                var1 = function() { // Environment: var0
                    var2 = _closure1_slot42;
                    var1 = var2.getGuild;
                    var0 = _closure2_slot8;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var32 = var6.bind(var12)(var4, var1);
                var _closure2_slot9 = var32;
                var4 = null;
                var1 = var4 == var32;
                var58 = undefined;
                if (var1) {
                    _fun77468_ip = 242;
                    continue _fun77468
                }
            case 236:
                var58 = var32.systemChannelFlags;
            case 242:
                var _closure2_slot10 = var58;
                var14 = _closure1_slot0;
                var16 = _closure1_slot2;
                var1 = var16[var2];
                var19 = var14.bind(var3)(var1);
                var18 = var19.useStateFromStores;
                var1 = _closure1_slot37;
                var12 = new Array(1);
                var12[0] = var1;
                var6 = function() { // Environment: var0
                    var1 = _closure1_slot37;
                    var0 = var1.getId;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var1 = new Array(0);
                var71 = var18.bind(var19)(var12, var6, var1);
                var _closure2_slot11 = var71;
                var1 = 55;
                var6 = var16[var1];
                var6 = var14.bind(var3)(var6);
                var12 = var6.InlineAttachmentMedia;
                var6 = var12.useSetting;
                var57 = var6.bind(var12)();
                var _closure2_slot12 = var57;
                var6 = var16[var1];
                var6 = var14.bind(var3)(var6);
                var12 = var6.InlineEmbedMedia;
                var6 = var12.useSetting;
                var56 = var6.bind(var12)();
                var _closure2_slot13 = var56;
                var6 = var16[var1];
                var6 = var14.bind(var3)(var6);
                var12 = var6.RenderEmbeds;
                var6 = var12.useSetting;
                var53 = var6.bind(var12)();
                var _closure2_slot14 = var53;
                var6 = var16[var1];
                var6 = var14.bind(var3)(var6);
                var12 = var6.RenderReactions;
                var6 = var12.useSetting;
                var52 = var6.bind(var12)();
                var _closure2_slot15 = var52;
                var6 = var16[var1];
                var6 = var14.bind(var3)(var6);
                var12 = var6.AnimateEmoji;
                var6 = var12.useSetting;
                var19 = var6.bind(var12)();
                var _closure2_slot16 = var19;
                var6 = var16[var1];
                var6 = var14.bind(var3)(var6);
                var12 = var6.AnimateStickers;
                var6 = var12.useSetting;
                var63 = var6.bind(var12)();
                var _closure2_slot17 = var63;
                var6 = var16[var1];
                var6 = var14.bind(var3)(var6);
                var12 = var6.GifAutoPlay;
                var6 = var12.useSetting;
                var61 = var6.bind(var12)();
                var _closure2_slot18 = var61;
                var6 = var16[var2];
                var26 = var14.bind(var3)(var6);
                var23 = var26.useStateFromStores;
                var6 = _closure1_slot36;
                var18 = new Array(1);
                var18[0] = var6;
                var12 = function() { // Environment: var0
                    var0 = _closure1_slot36;
                    var0 = var0.theme;
                    return var0;
                };
                var6 = new Array(0);
                var48 = var23.bind(var26)(var18, var12, var6);
                var _closure2_slot19 = var48;
                var6 = 56;
                var6 = var16[var6];
                var12 = var14.bind(var3)(var6);
                var6 = var12.useIsMessageSwipeActionsEnabled;
                var44 = var6.bind(var12)();
                var _closure2_slot20 = var44;
                var1 = var16[var1];
                var1 = var14.bind(var3)(var1);
                var6 = var1.TimestampHourCycle;
                var1 = var6.useSetting;
                var60 = var1.bind(var6)();
                var _closure2_slot21 = var60;
                var132 = 57;
                var1 = var16[var132];
                var6 = var14.bind(var3)(var1);
                var1 = var6.useMessageAuthorActivities;
                var101 = var1.bind(var6)(var8);
                var _closure2_slot22 = var101;
                var1 = var16[var132];
                var6 = var14.bind(var3)(var1);
                var1 = var6.useFetchMessageApplications;
                var1 = var1.bind(var6)(var8);
                var23 = _closure1_slot1;
                var1 = 58;
                var1 = var16[var1];
                var1 = var23.bind(var3)(var1);
                var1 = var1.bind(var3)(var8, var7);
                var18 = _closure1_slot4;
                var29 = 2;
                var1 = var18.bind(var3)(var1, var29);
                var12 = 0;
                var100 = var1[var12];
                var _closure2_slot23 = var100;
                var6 = 1;
                var1 = var1[var6];
                var1 = var16[var2];
                var30 = var14.bind(var3)(var1);
                var28 = var30.useStateFromStores;
                var1 = _closure1_slot44;
                var27 = new Array(1);
                var27[0] = var1;
                var26 = function() { // Environment: var0
                    var1 = _closure1_slot44;
                    var0 = var1.getInvites;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var1 = new Array(0);
                var76 = var28.bind(var30)(var27, var26, var1);
                var _closure2_slot24 = var76;
                var1 = var16[var2];
                var30 = var14.bind(var3)(var1);
                var28 = var30.useStateFromStoresObject;
                var1 = _closure1_slot17;
                var27 = new Array(1);
                var27[0] = var1;
                var26 = function() { // Environment: var0
                    var0 = {};
                    var2 = _closure1_slot17;
                    var1 = var2.getApplications;
                    var1 = var1.bind(var2)();
                    var0.appDirectoryEmbedApplications = var1;
                    var1 = var2.getInvalidApplicationIds;
                    var1 = var1.bind(var2)();
                    var0.invalidAppDirectoryEmbedApplicationIds = var1;
                    var1 = var2.getApplicationFetchStates;
                    var1 = var1.bind(var2)();
                    var0.appDirectoryEmbedApplicationFetchStates = var1;
                    return var0;
                };
                var1 = new Array(0);
                var1 = var28.bind(var30)(var27, var26, var1);
                var99 = var1.appDirectoryEmbedApplications;
                var _closure2_slot25 = var99;
                var98 = var1.invalidAppDirectoryEmbedApplicationIds;
                var _closure2_slot26 = var98;
                var97 = var1.appDirectoryEmbedApplicationFetchStates;
                var _closure2_slot27 = var97;
                var1 = var16[var2];
                var28 = var14.bind(var3)(var1);
                var27 = var28.useStateFromStoresArray;
                var1 = _closure1_slot9;
                var26 = new Array(1);
                var26[0] = var1;
                var1 = function() { // Environment: var0
                    var1 = _closure1_slot9;
                    var0 = var1.getFetchingOrFailedFetchingIds;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var107 = var27.bind(var28)(var26, var1);
                var _closure2_slot28 = var107;
                var1 = var16[var2];
                var28 = var14.bind(var3)(var1);
                var27 = var28.useStateFromStoresArray;
                var1 = _closure1_slot8;
                var26 = new Array(1);
                var26[0] = var1;
                var1 = function() { // Environment: var0
                    var1 = _closure1_slot8;
                    var0 = var1.getFetchingIds;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var96 = var27.bind(var28)(var26, var1);
                var _closure2_slot29 = var96;
                var1 = var16[var2];
                var31 = var14.bind(var3)(var1);
                var30 = var31.useStateFromStoresArray;
                var1 = _closure1_slot7;
                var28 = new Array(1);
                var28[0] = var1;
                var27 = new Array(1);
                var27[0] = var9;
                var26 = function() { // Environment: var0
                    var3 = _closure1_slot7;
                    var2 = var3.getEmbeddedActivitiesForChannel;
                    var1 = _closure2_slot7;
                    var3 = var2.bind(var3)(var1);
                    var2 = var3.map;
                    var1 = function(arg0) { // Environment: var1
                        var0 = arg0;
                        var0 = var0.launchId;
                        return var0;
                    };
                    var2 = var2.bind(var3)(var1);
                    var1 = var2.filter;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var0 = 59;
                    var3 = var3[var0];
                    var0 = undefined;
                    var0 = var4.bind(var0)(var3);
                    var0 = var0.isNotNullish;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var114 = var30.bind(var31)(var28, var26, var27);
                var _closure2_slot30 = var114;
                var26 = var16[var2];
                var30 = var14.bind(var3)(var26);
                var28 = var30.useStateFromStoresArray;
                var27 = new Array(2);
                var27[0] = var1;
                var26 = _closure1_slot47;
                var27[1] = var26;
                var26 = function() { // Environment: var0
                    _fun77479: for (var _fun77479_ip = 0;;) switch (_fun77479_ip) {
                        case 0:
                            var0 = new Array(0);
                            var _closure3_slot0 = var0;
                            var5 = function arg0() {
                                _fun77480: for (var _fun77480_ip = 0;;) switch (_fun77480_ip) {
                                    case 0:
                                        var4 = arg0;
                                        var _closure4_slot0 = var4;
                                        var3 = _closure1_slot47;
                                        var2 = var3.findActivity;
                                        var5 = var4.userIds;
                                        var1 = var5.values;
                                        var5 = var1.bind(var5)();
                                        var1 = var5.next;
                                        var1 = var1.bind(var5)();
                                        var1 = var1.value;
                                        var0 = function(arg0) { // Environment: var0
                                            var0 = arg0;
                                            var1 = var0.application_id;
                                            var0 = _closure4_slot0;
                                            var0 = var0.applicationId;
                                            var0 = var1 === var0;
                                            return var0;
                                        };
                                        var1 = var2.bind(var3)(var1, var0);
                                        var3 = null;
                                        var5 = var3 == var1;
                                        var0 = undefined;
                                        var2 = undefined;
                                        if (var5) {
                                            _fun77480_ip = 83;
                                            continue _fun77480
                                        }
                                    case 77:
                                        var2 = var1.details;
                                    case 83:
                                        if (!(var3 != var2)) {
                                            _fun77480_ip = 144;
                                            continue _fun77480
                                        }
                                    case 87:
                                        var3 = _closure3_slot0;
                                        var2 = var3.push;
                                        var7 = var4.launchId;
                                        var6 = var1.details;
                                        var1 = global;
                                        var1 = var1.HermesInternal;
                                        var5 = var1.concat;
                                        var4 = '';
                                        var1 = ':';
                                        var1 = var5.bind(var4)(var7, var1, var6);
                                        var1 = var2.bind(var3)(var1);
                                    case 144:
                                        return var0;
                                }
                            };
                            var2 = _closure1_slot67;
                            var4 = _closure1_slot7;
                            var3 = var4.getEmbeddedActivitiesForChannel;
                            var1 = _closure2_slot7;
                            var1 = var3.bind(var4)(var1);
                            var4 = undefined;
                            var3 = var2.bind(var4)(var1);
                            var2 = var3.bind(var4)();
                            var1 = var2.done;
                            if (var1) {
                                _fun77479_ip = 90;
                                continue _fun77479
                            }
                        case 65:
                            var1 = var2.value;
                            var1 = var5.bind(var4)(var1);
                            var6 = var3.bind(var4)();
                            var1 = var6.done;
                            var2 = var6;
                            if (!var1) {
                                _fun77479_ip = 65;
                                continue _fun77479
                            }
                        case 90:
                            return var0;
                    }
                };
                var112 = var28.bind(var30)(var27, var26);
                var _closure2_slot31 = var112;
                var26 = var16[var2];
                var30 = var14.bind(var3)(var26);
                var28 = var30.useStateFromStoresArray;
                var27 = new Array(1);
                var27[0] = var1;
                var26 = function() { // Environment: var0
                    var0 = global;
                    var2 = var0.Set;
                    var3 = var2.prototype;
                    var3 = Object.create(var3, {
                        constructor: {
                            value: var2
                        }
                    });
                    var6 = var3;
                    var2 = new var6[var2](var5);
                    var2 = var2 instanceof Object ? var2 : var3;
                    var _closure3_slot0 = var2;
                    var4 = _closure1_slot7;
                    var3 = var4.getEmbeddedActivitiesByChannel;
                    var4 = var3.bind(var4)();
                    var3 = var4.forEach;
                    var1 = function(arg0, arg1) { // Environment: var1
                        var2 = arg0;
                        var1 = arg1;
                        var _closure4_slot0 = var1;
                        var1 = var2.forEach;
                        var0 = function(arg0) { // Environment: var0
                            var0 = arg0;
                            var2 = var0.userIds;
                            var1 = var2.forEach;
                            var0 = function(arg0) { // Environment: var0
                                var2 = _closure3_slot0;
                                var1 = var2.add;
                                var6 = _closure4_slot0;
                                var0 = global;
                                var0 = var0.HermesInternal;
                                var5 = var0.concat;
                                var4 = '';
                                var3 = ':';
                                var0 = arg0;
                                var0 = var5.bind(var4)(var6, var3, var0);
                                var0 = var1.bind(var2)(var0);
                                var0 = undefined;
                                return var0;
                            };
                            var0 = var1.bind(var2)(var0);
                            var0 = undefined;
                            return var0;
                        };
                        var0 = var1.bind(var2)(var0);
                        var0 = undefined;
                        return var0;
                    };
                    var1 = var3.bind(var4)(var1);
                    var1 = var0.Array;
                    var0 = var1.from;
                    var0 = var0.bind(var1)(var2);
                    return var0;
                };
                var113 = var28.bind(var30)(var27, var26);
                var _closure2_slot32 = var113;
                var26 = var16[var2];
                var28 = var14.bind(var3)(var26);
                var27 = var28.useStateFromStoresArray;
                var26 = new Array(1);
                var26[0] = var1;
                var1 = function() { // Environment: var0
                    _fun77486: for (var _fun77486_ip = 0;;) switch (_fun77486_ip) {
                        case 0:
                            var0 = new Array(0);
                            var2 = _closure1_slot67;
                            var3 = _closure1_slot7;
                            var1 = var3.getLaunchStates;
                            var1 = var1.bind(var3)();
                            var8 = undefined;
                            var7 = var2.bind(var8)(var1);
                            var2 = var7.bind(var8)();
                            var1 = var2.done;
                            var6 = 0;
                            var5 = null;
                            var4 = 2;
                            var3 = 1;
                            if (var1) {
                                _fun77486_ip = 148;
                                continue _fun77486
                            }
                        case 54:
                            var10 = var2.value;
                            var1 = _closure1_slot4;
                            var1 = var1.bind(var8)(var10, var4);
                            var10 = var1[var6];
                            var1 = var1[var3];
                            var10 = var1.isLaunching;
                            if (!var10) {
                                _fun77486_ip = 96;
                                continue _fun77486
                            }
                        case 86:
                            var11 = var1.componentId;
                            var10 = var5 != var11;
                        case 96:
                            if (!var10) {
                                _fun77486_ip = 114;
                                continue _fun77486
                            }
                        case 99:
                            var11 = var1.componentId;
                            var11 = var11.length;
                            var10 = var11 > var6;
                        case 114:
                            if (!var10) {
                                _fun77486_ip = 133;
                                continue _fun77486
                            }
                        case 117:
                            var10 = var0.push;
                            var1 = var1.componentId;
                            var1 = var10.bind(var0)(var1);
                        case 133:
                            var10 = var7.bind(var8)();
                            var1 = var10.done;
                            var2 = var10;
                            if (!var1) {
                                _fun77486_ip = 54;
                                continue _fun77486
                            }
                        case 148:
                            return var0;
                    }
                };
                var111 = var27.bind(var28)(var26, var1);
                var _closure2_slot33 = var111;
                var1 = var16[var2];
                var28 = var14.bind(var3)(var1);
                var27 = var28.useStateFromStores;
                var1 = _closure1_slot24;
                var26 = new Array(1);
                var26[0] = var1;
                var1 = function() { // Environment: var0
                    var1 = _closure1_slot24;
                    var0 = var1.getMediaPostEmbeds;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var95 = var27.bind(var28)(var26, var1);
                var _closure2_slot34 = var95;
                var1 = var16[var2];
                var30 = var14.bind(var3)(var1);
                var28 = var30.useStateFromStores;
                var1 = _closure1_slot21;
                var27 = new Array(1);
                var27[0] = var1;
                var26 = function() { // Environment: var0
                    var1 = _closure1_slot21;
                    var0 = var1.getGuildTemplates;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var1 = new Array(0);
                var93 = var28.bind(var30)(var27, var26, var1);
                var _closure2_slot35 = var93;
                var1 = var16[var2];
                var30 = var14.bind(var3)(var1);
                var28 = var30.useStateFromStores;
                var1 = _closure1_slot10;
                var27 = new Array(1);
                var27[0] = var1;
                var26 = function() { // Environment: var0
                    var1 = _closure1_slot10;
                    var0 = var1.getBuildOverrides;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var1 = new Array(0);
                var92 = var28.bind(var30)(var27, var26, var1);
                var _closure2_slot36 = var92;
                var1 = 60;
                var1 = var16[var1];
                var26 = var14.bind(var3)(var1);
                var1 = var26.useCodedLinksExperimentEmbeds;
                var91 = var1.bind(var26)();
                var _closure2_slot37 = var91;
                var1 = 61;
                var1 = var16[var1];
                var27 = var14.bind(var3)(var1);
                var26 = var27.useQuests;
                var1 = {
                    'fetchPolicy': 'cache-or-network',
                    'callerSource': 'messages_native_fn'
                };
                var1 = var26.bind(var27)(var1);
                var90 = var1.quests;
                var _closure2_slot38 = var90;
                var89 = var1.isFetchingCurrentQuests;
                var _closure2_slot39 = var89;
                var26 = var8.filter;
                var1 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var1 = var0.type;
                    var0 = _closure1_slot56;
                    var0 = var0.PREMIUM_REFERRAL;
                    var0 = var1 === var0;
                    return var0;
                };
                var27 = var26.bind(var8)(var1);
                var26 = var27.map;
                var1 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var0 = var0.referralTrialOfferId;
                    return var0;
                };
                var27 = var26.bind(var27)(var1);
                var26 = var27.filter;
                var1 = 59;
                var1 = var16[var1];
                var1 = var14.bind(var3)(var1);
                var1 = var1.isNotNullish;
                var1 = var26.bind(var27)(var1);
                var _closure2_slot40 = var1;
                var1 = var16[var2];
                var28 = var14.bind(var3)(var1);
                var27 = var28.useStateFromStoresArray;
                var1 = _closure1_slot28;
                var26 = new Array(1);
                var26[0] = var1;
                var1 = function() { // Environment: var0
                    var2 = _closure2_slot40;
                    var1 = var2.map;
                    var0 = function(arg0) { // Environment: var0
                        _fun77493: for (var _fun77493_ip = 0;;) switch (_fun77493_ip) {
                            case 0:
                                var2 = _closure1_slot28;
                                var1 = var2.getRelevantUserTrialOffer;
                                var0 = arg0;
                                var1 = var1.bind(var2)(var0);
                                var0 = null;
                                var2 = var0 == var1;
                                var0 = undefined;
                                if (var2) {
                                    _fun77493_ip = 37;
                                    continue _fun77493
                                }
                            case 32:
                                var0 = var1.id;
                            case 37:
                                return var0;
                        }
                    };
                    var2 = var1.bind(var2)(var0);
                    var1 = var2.filter;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var0 = 59;
                    var3 = var3[var0];
                    var0 = undefined;
                    var0 = var4.bind(var0)(var3);
                    var0 = var0.isNotNullish;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var106 = var27.bind(var28)(var26, var1);
                var _closure2_slot41 = var106;
                var1 = 62;
                var1 = var16[var1];
                var27 = var14.bind(var3)(var1);
                var26 = var27.useTrialOffer;
                var1 = _closure1_slot61;
                var85 = var26.bind(var27)(var1);
                var _closure2_slot42 = var85;
                var1 = var16[var2];
                var28 = var14.bind(var3)(var1);
                var27 = var28.useStateFromStores;
                var1 = _closure1_slot52;
                var26 = new Array(1);
                var26[0] = var1;
                var1 = function() { // Environment: var0
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 63;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.isPremiumExactly;
                    var4 = _closure1_slot52;
                    var1 = var4.getCurrentUser;
                    var1 = var1.bind(var4)();
                    var0 = _closure1_slot62;
                    var0 = var0.TIER_2;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var84 = var27.bind(var28)(var26, var1);
                var _closure2_slot43 = var84;
                var1 = var16[var2];
                var30 = var14.bind(var3)(var1);
                var28 = var30.useStateFromStores;
                var1 = _closure1_slot38;
                var27 = new Array(1);
                var27[0] = var1;
                var26 = new Array(1);
                var26[0] = var9;
                var1 = function() { // Environment: var0
                    var2 = _closure1_slot38;
                    var1 = var2.getEditingMessageId;
                    var0 = _closure2_slot7;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var80 = var28.bind(var30)(var27, var1, var26);
                var _closure2_slot44 = var80;
                var1 = var16[var2];
                var30 = var14.bind(var3)(var1);
                var28 = var30.useStateFromStores;
                var1 = _closure1_slot30;
                var27 = new Array(1);
                var27[0] = var1;
                var26 = new Array(1);
                var26[0] = var9;
                var1 = function() { // Environment: var0
                    _fun77496: for (var _fun77496_ip = 0;;) switch (_fun77496_ip) {
                        case 0:
                            var2 = _closure1_slot30;
                            var1 = var2.getPendingReply;
                            var0 = _closure2_slot7;
                            var1 = var1.bind(var2)(var0);
                            var0 = null;
                            var2 = var0 == var1;
                            var0 = undefined;
                            if (var2) {
                                _fun77496_ip = 46;
                                continue _fun77496
                            }
                        case 36:
                            var1 = var1.message;
                            var0 = var1.id;
                        case 46:
                            return var0;
                    }
                };
                var68 = var28.bind(var30)(var27, var1, var26);
                var _closure2_slot45 = var68;
                var1 = var16[var2];
                var30 = var14.bind(var3)(var1);
                var28 = var30.useStateFromStores;
                var1 = _closure1_slot49;
                var27 = new Array(1);
                var27[0] = var1;
                var26 = new Array(1);
                var26[0] = var9;
                var1 = function() { // Environment: var0
                    var2 = _closure1_slot49;
                    var1 = var2.getOldestUnreadMessageId;
                    var0 = _closure2_slot7;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var36 = var28.bind(var30)(var27, var1, var26);
                var _closure2_slot46 = var36;
                var1 = var16[var2];
                var30 = var14.bind(var3)(var1);
                var28 = var30.useStateFromStores;
                var1 = _closure1_slot43;
                var27 = new Array(1);
                var27[0] = var1;
                var26 = new Array(1);
                var26[0] = var11;
                var1 = function() { // Environment: var0
                    _fun77498: for (var _fun77498_ip = 0;;) switch (_fun77498_ip) {
                        case 0:
                            var2 = _closure2_slot8;
                            var0 = null;
                            var0 = var0 != var2;
                            if (!var0) {
                                _fun77498_ip = 38;
                                continue _fun77498
                            }
                        case 16:
                            var3 = _closure1_slot43;
                            var2 = var3.canChatInGuild;
                            var1 = _closure2_slot8;
                            var0 = var2.bind(var3)(var1);
                        case 38:
                            return var0;
                    }
                };
                var39 = var28.bind(var30)(var27, var1, var26);
                var _closure2_slot47 = var39;
                var1 = var16[var2];
                var30 = var14.bind(var3)(var1);
                var28 = var30.useStateFromStores;
                var1 = _closure1_slot46;
                var27 = new Array(1);
                var27[0] = var1;
                var26 = new Array(1);
                var26[0] = var7;
                var1 = function() { // Environment: var0
                    var3 = _closure1_slot46;
                    var2 = var3.can;
                    var0 = _closure1_slot58;
                    var1 = var0.SEND_MESSAGES;
                    var0 = _closure2_slot1;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var79 = var28.bind(var30)(var27, var1, var26);
                var _closure2_slot48 = var79;
                var1 = 64;
                var1 = var16[var1];
                var1 = var23.bind(var3)(var1);
                var70 = var1.bind(var3)(var9);
                var _closure2_slot49 = var70;
                var1 = var16[var2];
                var28 = var14.bind(var3)(var1);
                var27 = var28.useStateFromStores;
                var1 = _closure1_slot53;
                var26 = new Array(1);
                var26[0] = var1;
                var23 = new Array(1);
                var23[0] = var71;
                var1 = function() { // Environment: var0
                    var3 = _closure1_slot53;
                    var2 = var3.getUserVoiceChannelId;
                    var1 = _closure1_slot59;
                    var0 = _closure2_slot11;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var77 = var27.bind(var28)(var26, var1, var23);
                var _closure2_slot50 = var77;
                var1 = var16[var2];
                var30 = var14.bind(var3)(var1);
                var28 = var30.useStateFromStores;
                var1 = _closure1_slot31;
                var27 = new Array(1);
                var27[0] = var1;
                var26 = new Array(1);
                var26[0] = var7;
                var23 = function() { // Environment: var0
                    _fun77501: for (var _fun77501_ip = 0;;) switch (_fun77501_ip) {
                        case 0:
                            var0 = _closure1_slot55;
                            var3 = var0.THREADS;
                            var2 = var3.has;
                            var0 = _closure2_slot1;
                            var0 = var0.type;
                            var2 = var2.bind(var3)(var0);
                            var3 = null;
                            var0 = null;
                            if (!var2) {
                                _fun77501_ip = 124;
                                continue _fun77501
                            }
                        case 42:
                            var2 = _closure2_slot1;
                            var2 = var2.parent_id;
                            var2 = var3 != var2;
                            var0 = null;
                            if (!var2) {
                                _fun77501_ip = 124;
                                continue _fun77501
                            }
                        case 61:
                            var3 = _closure1_slot31;
                            var2 = var3.getMessageByReference;
                            var1 = {};
                            var5 = _closure2_slot1;
                            var5 = var5.parent_id;
                            var1.channel_id = var5;
                            var5 = _closure2_slot1;
                            var5 = var5.id;
                            var1.message_id = var5;
                            var4 = _closure2_slot1;
                            var4 = var4.guild_id;
                            var1.guild_id = var4;
                            var1 = var2.bind(var3)(var1);
                            var0 = var1.message;
                        case 124:
                            return var0;
                    }
                };
                var104 = var28.bind(var30)(var27, var23, var26);
                var _closure2_slot51 = var104;
                var23 = var16[var2];
                var30 = var14.bind(var3)(var23);
                var28 = var30.useStateFromStoresObject;
                var23 = _closure1_slot39;
                var27 = new Array(1);
                var27[0] = var23;
                var26 = function() { // Environment: var0
                    var0 = {};
                    var2 = _closure1_slot39;
                    var1 = var2.getResolvingCodes;
                    var1 = var1.bind(var2)();
                    var0.resolvingGiftCodes = var1;
                    var1 = var2.getResolvedCodes;
                    var1 = var1.bind(var2)();
                    var0.resolvedGiftCodes = var1;
                    var1 = var2.getAcceptingCodes;
                    var1 = var1.bind(var2)();
                    var0.acceptingGiftCodes = var1;
                    return var0;
                };
                var23 = new Array(0);
                var23 = var28.bind(var30)(var27, var26, var23);
                var88 = var23.resolvingGiftCodes;
                var _closure2_slot52 = var88;
                var87 = var23.resolvedGiftCodes;
                var _closure2_slot53 = var87;
                var86 = var23.acceptingGiftCodes;
                var _closure2_slot54 = var86;
                var23 = var16[var2];
                var30 = var14.bind(var3)(var23);
                var28 = var30.useStateFromStores;
                var23 = _closure1_slot12;
                var27 = new Array(1);
                var27[0] = var23;
                var26 = new Array(1);
                var26[0] = var9;
                var23 = function() { // Environment: var0
                    var2 = _closure1_slot12;
                    var1 = var2.getParticipants;
                    var0 = _closure2_slot7;
                    var0 = var1.bind(var2)(var0);
                    var0 = var0.length;
                    return var0;
                };
                var69 = var28.bind(var30)(var27, var23, var26);
                var _closure2_slot55 = var69;
                var23 = var16[var2];
                var30 = var14.bind(var3)(var23);
                var28 = var30.useStateFromStores;
                var23 = _closure1_slot51;
                var27 = new Array(1);
                var27[0] = var23;
                var26 = new Array(1);
                var26[0] = var9;
                var23 = function() { // Environment: var0
                    var2 = _closure1_slot51;
                    var1 = var2.getFiles;
                    var0 = _closure2_slot7;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var65 = var28.bind(var30)(var27, var23, var26);
                var _closure2_slot56 = var65;
                var23 = var16[var2];
                var28 = var14.bind(var3)(var23);
                var27 = var28.useStateFromStores;
                var26 = new Array(1);
                var26[0] = var1;
                var23 = new Array(1);
                var23[0] = var9;
                var1 = function() { // Environment: var0
                    var2 = _closure1_slot31;
                    var1 = var2.getReplyIdsForChannel;
                    var0 = _closure2_slot7;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var125 = var27.bind(var28)(var26, var1, var23);
                var _closure2_slot57 = var125;
                var1 = var16[var2];
                var28 = var14.bind(var3)(var1);
                var27 = var28.useStateFromStoresObject;
                var1 = _closure1_slot6;
                var26 = new Array(1);
                var26[0] = var1;
                var23 = function() { // Environment: var0
                    var0 = {};
                    var1 = _closure1_slot6;
                    var2 = var1.useReducedMotion;
                    var0.useReducedMotion = var2;
                    var2 = var1.roleStyle;
                    var0.roleStyle = var2;
                    var2 = var1.saturation;
                    var0.saturation = var2;
                    var1 = var1.displayNameStylesEnabled;
                    var0.displayNameStylesEnabled = var1;
                    return var0;
                };
                var1 = new Array(0);
                var1 = var27.bind(var28)(var26, var23, var1);
                var31 = var1.useReducedMotion;
                var _closure2_slot58 = var31;
                var23 = var1.roleStyle;
                var _closure2_slot59 = var23;
                var47 = var1.saturation;
                var _closure2_slot60 = var47;
                var42 = var1.displayNameStylesEnabled;
                var _closure2_slot61 = var42;
                var1 = var16[var2];
                var30 = var14.bind(var3)(var1);
                var28 = var30.useStateFromStores;
                var1 = _closure1_slot34;
                var27 = new Array(1);
                var27[0] = var1;
                var26 = new Array(1);
                var26[0] = var9;
                var1 = function() { // Environment: var0
                    var2 = _closure1_slot34;
                    var1 = var2.getChannelThreadsVersion;
                    var0 = _closure2_slot7;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var127 = var28.bind(var30)(var27, var1, var26);
                var _closure2_slot62 = var127;
                var1 = var16[var2];
                var28 = var14.bind(var3)(var1);
                var27 = var28.useStateFromStoresObject;
                var1 = _closure1_slot23;
                var26 = new Array(1);
                var26[0] = var1;
                var1 = function() { // Environment: var0
                    var1 = _closure1_slot23;
                    var0 = var1.getMessageInteractionStates;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var120 = var27.bind(var28)(var26, var1);
                var _closure2_slot63 = var120;
                var1 = var16[var2];
                var33 = var14.bind(var3)(var1);
                var30 = var33.useStateFromStores;
                var1 = _closure1_slot22;
                var28 = new Array(1);
                var28[0] = var1;
                var1 = 65;
                var1 = var16[var1];
                var1 = var14.bind(var3)(var1);
                var135 = var1.isVersionEqual;
                var137 = function() { // Environment: var0
                    var2 = _closure1_slot22;
                    var0 = var2.getInteractionComponentStates;
                    var1 = var0.bind(var2)();
                    var0 = new Array(2);
                    var0[0] = var1;
                    var1 = var2.getInteractionComponentStateVersion;
                    var1 = var1.bind(var2)();
                    var0[1] = var1;
                    return var0;
                };
                var136 = new Array(0);
                var139 = var33;
                var138 = var28;
                var1 = var139[var30](var138, var137, var136, var135, var134);
                var1 = var18.bind(var3)(var1, var29);
                var119 = var1[var12];
                var _closure2_slot64 = var119;
                var118 = var1[var6];
                var _closure2_slot65 = var118;
                var1 = var16[var2];
                var27 = var14.bind(var3)(var1);
                var26 = var27.useStateFromStores;
                var1 = _closure1_slot15;
                var18 = new Array(1);
                var18[0] = var1;
                var1 = function() { // Environment: var0
                    var0 = _closure1_slot15;
                    var0 = var0.hasLoadedExperiments;
                    return var0;
                };
                var124 = var26.bind(var27)(var18, var1);
                var _closure2_slot66 = var124;
                var1 = 66;
                var1 = var16[var1];
                var26 = var14.bind(var3)(var1);
                var18 = var26.useIsSpamMessageRequest;
                var1 = var7.id;
                var75 = var18.bind(var26)(var1);
                var _closure2_slot67 = var75;
                var1 = 67;
                var1 = var16[var1];
                var16 = var14.bind(var3)(var1);
                var14 = var16.useIsMessageRequest;
                var1 = var7.id;
                var74 = var14.bind(var16)(var1);
                var _closure2_slot68 = var74;
                var128 = var4 != var8;
                if (!var128) {
                    _fun77468_ip = 2520;
                    continue _fun77468
                }
            case 2502:
                var1 = var8.ready;
                if (var1) {
                    _fun77468_ip = 2517;
                    continue _fun77468
                }
            case 2511:
                var1 = var8.cached;
            case 2517:
                var128 = var1;
            case 2520:
                var _closure2_slot69 = var128;
                var40 = var4 != var8;
                if (!var40) {
                    _fun77468_ip = 2537;
                    continue _fun77468
                }
            case 2531:
                var40 = var8.cached;
            case 2537:
                var _closure2_slot70 = var40;
                var131 = var4 != var8;
                if (!var131) {
                    _fun77468_ip = 2554;
                    continue _fun77468
                }
            case 2548:
                var131 = var8.ready;
            case 2554:
                if (!var131) {
                    _fun77468_ip = 2566;
                    continue _fun77468
                }
            case 2557:
                var1 = var8.loadingMore;
                var131 = !var1;
            case 2566:
                var _closure2_slot71 = var131;
                var14 = _closure1_slot0;
                var16 = _closure1_slot2;
                var1 = var16[var2];
                var27 = var14.bind(var3)(var1);
                var26 = var27.useStateFromStores;
                var1 = _closure1_slot20;
                var18 = new Array(1);
                var18[0] = var1;
                var1 = function() { // Environment: var0
                    var1 = _closure1_slot20;
                    var0 = var1.getRsvpVersion;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var126 = var26.bind(var27)(var18, var1);
                var _closure2_slot72 = var126;
                var1 = var16[var2];
                var27 = var14.bind(var3)(var1);
                var26 = var27.useStateFromStores;
                var1 = _closure1_slot19;
                var18 = new Array(1);
                var18[0] = var1;
                var1 = function() { // Environment: var0
                    var1 = _closure1_slot19;
                    var0 = var1.getMessagesVersion;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var121 = var26.bind(var27)(var18, var1);
                var _closure2_slot73 = var121;
                var1 = var16[var2];
                var28 = var14.bind(var3)(var1);
                var27 = var28.useStateFromStores;
                var1 = _closure1_slot40;
                var26 = new Array(1);
                var26[0] = var1;
                var18 = function() { // Environment: var0
                    var1 = _closure1_slot40;
                    var0 = var1.getCommunicationDisabledVersion;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var123 = var27.bind(var28)(var26, var18);
                var _closure2_slot74 = var123;
                var18 = var16[var2];
                var28 = var14.bind(var3)(var18);
                var27 = var28.useStateFromStoresObject;
                var26 = new Array(1);
                var26[0] = var1;
                var18 = new Array(2);
                var18[0] = var11;
                var18[1] = var8;
                var1 = function() { // Environment: var0
                    _fun77514: for (var _fun77514_ip = 0;;) switch (_fun77514_ip) {
                        case 0:
                            var0 = _closure2_slot8;
                            var3 = null;
                            if (!(var3 != var0)) {
                                _fun77514_ip = 52;
                                continue _fun77514
                            }
                        case 15:
                            var0 = _closure2_slot6;
                            if (!(var3 != var0)) {
                                _fun77514_ip = 52;
                                continue _fun77514
                            }
                        case 23:
                            var0 = {};
                            var _closure3_slot0 = var0;
                            var3 = _closure2_slot6;
                            var2 = var3.forEach;
                            var1 = function(arg0) { // Environment: var1
                                _fun77515: for (var _fun77515_ip = 0;;) switch (_fun77515_ip) {
                                    case 0:
                                        var1 = arg0;
                                        var4 = var1.author;
                                        var2 = null;
                                        var5 = var2 == var4;
                                        var0 = undefined;
                                        var3 = undefined;
                                        if (var5) {
                                            _fun77515_ip = 27;
                                            continue _fun77515
                                        }
                                    case 22:
                                        var3 = var4.id;
                                    case 27:
                                        if (!(var2 != var3)) {
                                            _fun77515_ip = 94;
                                            continue _fun77515
                                        }
                                    case 31:
                                        var6 = _closure1_slot40;
                                        var5 = var6.getMember;
                                        var4 = _closure2_slot8;
                                        var3 = var1.author;
                                        var3 = var3.id;
                                        var3 = var5.bind(var6)(var4, var3);
                                        if (!(var2 != var3)) {
                                            _fun77515_ip = 94;
                                            continue _fun77515
                                        }
                                    case 72:
                                        var2 = _closure3_slot0;
                                        var1 = var1.author;
                                        var1 = var1.id;
                                        var2[var1] = var3;
                                    case 94:
                                        return var0;
                                }
                            };
                            var1 = var2.bind(var3)(var1);
                            return var0;
                        case 52:
                            var0 = {};
                            return var0;
                    }
                };
                var122 = var27.bind(var28)(var26, var1, var18);
                var _closure2_slot75 = var122;
                var1 = var16[var2];
                var27 = var14.bind(var3)(var1);
                var26 = var27.useStateFromStores;
                var1 = _closure1_slot46;
                var18 = new Array(1);
                var18[0] = var1;
                var1 = function() { // Environment: var0
                    var3 = _closure1_slot46;
                    var2 = var3.can;
                    var0 = _closure1_slot58;
                    var1 = var0.MODERATE_MEMBERS;
                    var0 = _closure2_slot9;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var72 = var26.bind(var27)(var18, var1);
                var _closure2_slot76 = var72;
                var1 = 68;
                var1 = var16[var1];
                var16 = var14.bind(var3)(var1);
                var14 = var16.useCurrentUserCommunicationDisabled;
                var18 = var4 == var32;
                var1 = undefined;
                if (var18) {
                    _fun77468_ip = 2835;
                    continue _fun77468
                }
            case 2830:
                var1 = var32.id;
            case 2835:
                var1 = var14.bind(var16)(var1);
                var18 = _closure1_slot4;
                var1 = var18.bind(var3)(var1, var29);
                var73 = var1[var6];
                var _closure2_slot77 = var73;
                var34 = _closure1_slot0;
                var130 = _closure1_slot2;
                var1 = var130[var2];
                var26 = var34.bind(var3)(var1);
                var16 = var26.useStateFromStores;
                var1 = _closure1_slot35;
                var14 = new Array(1);
                var14[0] = var1;
                var1 = function() { // Environment: var0
                    var0 = _closure1_slot35;
                    var0 = var0.locale;
                    return var0;
                };
                var82 = var16.bind(var26)(var14, var1);
                var _closure2_slot78 = var82;
                var67 = _closure1_slot1;
                var1 = 69;
                var1 = var130[var1];
                var26 = var67.bind(var3)(var1);
                var16 = var26.useExperiment;
                var14 = {};
                var1 = '41de6d_2';
                var14.location = var1;
                var1 = {};
                var33 = false;
                var1.autoTrackExposure = var33;
                var1 = var16.bind(var26)(var14, var1);
                var16 = var1.paymentsBlocked;
                var _closure2_slot79 = var16;
                var1 = var130[var2];
                var27 = var34.bind(var3)(var1);
                var26 = var27.useStateFromStores;
                var1 = _closure1_slot33;
                var14 = new Array(1);
                var14[0] = var1;
                var1 = function() { // Environment: var0
                    _fun77518: for (var _fun77518_ip = 0;;) switch (_fun77518_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            var0 = var2.isForumPost;
                            var0 = var0.bind(var2)();
                            var2 = !var0;
                            var0 = !var2;
                            if (var2) {
                                _fun77518_ip = 48;
                                continue _fun77518
                            }
                        case 26:
                            var3 = _closure1_slot33;
                            var2 = var3.hasJoined;
                            var1 = _closure2_slot7;
                            var0 = var2.bind(var3)(var1);
                        case 48:
                            return var0;
                    }
                };
                var103 = var26.bind(var27)(var14, var1);
                var _closure2_slot80 = var103;
                var1 = var130[var2];
                var27 = var34.bind(var3)(var1);
                var26 = var27.useStateFromStores;
                var1 = _closure1_slot25;
                var14 = new Array(1);
                var14[0] = var1;
                var1 = function() { // Environment: var0
                    var2 = _closure1_slot25;
                    var1 = var2.shouldDisplayPrompt;
                    var0 = _closure2_slot7;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var102 = var26.bind(var27)(var14, var1);
                var _closure2_slot81 = var102;
                var1 = var130[var2];
                var27 = var34.bind(var3)(var1);
                var26 = var27.useStateFromStores;
                var1 = _closure1_slot29;
                var14 = new Array(1);
                var14[0] = var1;
                var1 = function() { // Environment: var0
                    var1 = _closure1_slot29;
                    var0 = var1.isEligible;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var83 = var26.bind(var27)(var14, var1);
                var _closure2_slot82 = var83;
                var1 = var130[var2];
                var27 = var34.bind(var3)(var1);
                var26 = var27.useStateFromStores;
                var1 = _closure1_slot11;
                var14 = new Array(1);
                var14[0] = var1;
                var1 = function() { // Environment: var0
                    var1 = _closure1_slot11;
                    var0 = var1.getLazyCacheStatus;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var105 = var26.bind(var27)(var14, var1);
                var _closure2_slot83 = var105;
                var1 = 70;
                var1 = var130[var1];
                var14 = var34.bind(var3)(var1);
                var1 = var14.useMessageJumpAndroidKeyboardHeight;
                var78 = var1.bind(var14)();
                var _closure2_slot84 = var78;
                var1 = 71;
                var1 = var130[var1];
                var1 = var67.bind(var3)(var1);
                var1 = var1.bind(var3)();
                var _closure2_slot85 = var1;
                var14 = 72;
                var14 = var130[var14];
                var26 = var34.bind(var3)(var14);
                var14 = var26.useChannelSummariesExperiment;
                var14 = var14.bind(var26)(var7);
                var _closure2_slot86 = var14;
                var26 = var130[var2];
                var30 = var34.bind(var3)(var26);
                var28 = var30.useStateFromStores;
                var26 = _closure1_slot32;
                var27 = new Array(1);
                var27[0] = var26;
                var26 = new Array(2);
                var26[0] = var14;
                var14 = var7.id;
                var26[1] = var14;
                var14 = function() { // Environment: var0
                    _fun77522: for (var _fun77522_ip = 0;;) switch (_fun77522_ip) {
                        case 0:
                            var2 = _closure2_slot86;
                            var0 = null;
                            if (!var2) {
                                _fun77522_ip = 39;
                                continue _fun77522
                            }
                        case 12:
                            var3 = _closure1_slot32;
                            var2 = var3.selectedSummary;
                            var1 = _closure2_slot1;
                            var1 = var1.id;
                            var0 = var2.bind(var3)(var1);
                        case 39:
                            return var0;
                    }
                };
                var51 = var28.bind(var30)(var27, var14, var26);
                var _closure2_slot87 = var51;
                var14 = var130[var2];
                var30 = var34.bind(var3)(var14);
                var28 = var30.useStateFromStores;
                var14 = _closure1_slot52;
                var27 = new Array(1);
                var27[0] = var14;
                var26 = function() { // Environment: var0
                    _fun77523: for (var _fun77523_ip = 0;;) switch (_fun77523_ip) {
                        case 0:
                            var1 = _closure1_slot52;
                            var0 = var1.getCurrentUser;
                            var1 = var0.bind(var1)();
                            var0 = null;
                            var2 = var0 == var1;
                            var0 = undefined;
                            if (var2) {
                                _fun77523_ip = 33;
                                continue _fun77523
                            }
                        case 27:
                            var0 = var1.displayNameStyles;
                        case 33:
                            return var0;
                    }
                };
                var41 = var28.bind(var30)(var27, var26);
                var _closure2_slot88 = var41;
                var129 = _closure1_slot5;
                var28 = var129.useEffect;
                var26 = var7.id;
                var27 = new Array(5);
                var27[0] = var26;
                var26 = var8.hasMoreAfter;
                var27[1] = var26;
                var26 = var8.hasMoreBefore;
                var27[2] = var26;
                var26 = var8.length;
                var27[3] = var26;
                var26 = var8.ready;
                var27[4] = var26;
                var26 = function() { // Environment: var0
                    _fun77524: for (var _fun77524_ip = 0;;) switch (_fun77524_ip) {
                        case 0:
                            var1 = _closure2_slot6;
                            var1 = var1.ready;
                            var1 = !var1;
                            if (var1) {
                                _fun77524_ip = 34;
                                continue _fun77524
                            }
                        case 19:
                            var2 = _closure2_slot6;
                            var3 = var2.length;
                            var2 = 0;
                            var1 = var2 !== var3;
                        case 34:
                            if (var1) {
                                _fun77524_ip = 47;
                                continue _fun77524
                            }
                        case 37:
                            var2 = _closure2_slot6;
                            var1 = var2.hasMoreBefore;
                        case 47:
                            if (var1) {
                                _fun77524_ip = 60;
                                continue _fun77524
                            }
                        case 50:
                            var2 = _closure2_slot6;
                            var1 = var2.hasMoreAfter;
                        case 60:
                            if (var1) {
                                _fun77524_ip = 121;
                                continue _fun77524
                            }
                        case 63:
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 73;
                            var2 = var2[var1];
                            var1 = undefined;
                            var4 = var3.bind(var1)(var2);
                            var3 = var4.updateChannelDimensions;
                            var0 = _closure2_slot1;
                            var8 = var0.id;
                            var1 = 1;
                            var5 = 0;
                            var9 = var4;
                            var7 = var1;
                            var6 = var1;
                            var0 = var9[var3](var8, var7, var6, var5, var4);
                        case 121:
                            var0 = undefined;
                            return var0;
                    }
                };
                var26 = var28.bind(var129)(var26, var27);
                var26 = 74;
                var27 = var130[var26];
                var30 = var34.bind(var3)(var27);
                var28 = var30.useShouldTrackAnnouncementMessageViews;
                var27 = {};
                var27.guild = var32;
                var27.channel = var7;
                var27.messages = var8;
                var27.isMessagesReady = var128;
                var133 = 'Messages';
                var27.location = var133;
                var28 = var28.bind(var30)(var27);
                var _closure2_slot89 = var28;
                var26 = var130[var26];
                var30 = var34.bind(var3)(var26);
                var27 = var30.useShouldTrackRichPresenceInviteEmbedViews;
                var26 = {};
                var26.messages = var8;
                var26.isMessagesReady = var128;
                var27 = var27.bind(var30)(var26);
                var _closure2_slot90 = var27;
                var26 = 75;
                var26 = var130[var26];
                var30 = var34.bind(var3)(var26);
                var26 = var30.useShouldDisplaySpoilerObscurity;
                var49 = var26.bind(var30)(var7);
                var _closure2_slot91 = var49;
                var26 = 76;
                var26 = var130[var26];
                var30 = var34.bind(var3)(var26);
                var26 = var30.useIsAgeVerified;
                var55 = var26.bind(var30)();
                var _closure2_slot92 = var55;
                var32 = var129.useEffect;
                var30 = new Array(2);
                var30[0] = var9;
                var30[1] = var11;
                var26 = function() { // Environment: var0
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 77;
                    var1 = var1[var0];
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    var0 = var1.handleChannelSelect;
                    var0 = var0.bind(var1)();
                    var0 = function() { // Environment: var0
                        var2 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var0 = 77;
                        var1 = var1[var0];
                        var0 = undefined;
                        var2 = var2.bind(var0)(var1);
                        var1 = var2.handleChannelSelect;
                        var1 = var1.bind(var2)();
                        return var0;
                    };
                    return var0;
                };
                var26 = var32.bind(var129)(var26, var30);
                var26 = 78;
                var26 = var130[var26];
                var32 = var34.bind(var3)(var26);
                var30 = var32.useShouldDisableInteractiveComponents;
                var26 = var7.id;
                var117 = var30.bind(var32)(var26);
                var _closure2_slot93 = var117;
                var30 = _closure1_slot26;
                var26 = var7.id;
                var116 = var30.bind(var3)(var26);
                var _closure2_slot94 = var116;
                var30 = new Array(0);
                var _closure2_slot95 = var30;
                var32 = var8.forEach;
                var26 = function(arg0) { // Environment: var0
                    _fun77527: for (var _fun77527_ip = 0;;) switch (_fun77527_ip) {
                        case 0:
                            var0 = arg0;
                            var2 = var0.messageReference;
                            var1 = null;
                            var4 = var1 == var2;
                            var0 = undefined;
                            var3 = undefined;
                            if (var4) {
                                _fun77527_ip = 28;
                                continue _fun77527
                            }
                        case 22:
                            var3 = var2.message_id;
                        case 28:
                            if (!(var1 != var3)) {
                                _fun77527_ip = 49;
                                continue _fun77527
                            }
                        case 32:
                            var2 = _closure2_slot95;
                            var1 = var2.push;
                            var1 = var1.bind(var2)(var3);
                        case 49:
                            return var0;
                    }
                };
                var26 = var32.bind(var8)(var26);
                var26 = _closure1_slot27;
                var115 = var26.bind(var3)(var30);
                var _closure2_slot96 = var115;
                var26 = var130[var2];
                var37 = var34.bind(var3)(var26);
                var35 = var37.useStateFromStores;
                var26 = _closure1_slot16;
                var32 = new Array(1);
                var32[0] = var26;
                var30 = new Array(1);
                var30[0] = var9;
                var26 = function() { // Environment: var0
                    var2 = _closure1_slot16;
                    var1 = var2.getChannelFpInfo;
                    var0 = _closure2_slot7;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var94 = var35.bind(var37)(var32, var26, var30);
                var _closure2_slot97 = var94;
                var26 = 79;
                var26 = var130[var26];
                var26 = var67.bind(var3)(var26);
                var62 = var26.bind(var3)();
                var _closure2_slot98 = var62;
                var26 = 80;
                var26 = var130[var26];
                var26 = var67.bind(var3)(var26);
                var26 = var26.bind(var3)(var8);
                var46 = var26.unloadedContentEntryMessageIds;
                var _closure2_slot99 = var46;
                var38 = var26.unloadableContentEntryMessageIds;
                var _closure2_slot100 = var38;
                var26 = var130[var2];
                var32 = var34.bind(var3)(var26);
                var30 = var32.useStateFromStores;
                var26 = new Array(1);
                var26[0] = var14;
                var14 = function() { // Environment: var0
                    _fun77529: for (var _fun77529_ip = 0;;) switch (_fun77529_ip) {
                        case 0:
                            var1 = _closure1_slot52;
                            var0 = var1.getCurrentUser;
                            var3 = var0.bind(var1)();
                            var0 = null;
                            var2 = var0 == var3;
                            var1 = undefined;
                            if (var2) {
                                _fun77529_ip = 37;
                                continue _fun77529
                            }
                        case 27:
                            var2 = var3.isStaff;
                            var1 = var2.bind(var3)();
                        case 37:
                            var0 = var0 != var1;
                            if (!var0) {
                                _fun77529_ip = 47;
                                continue _fun77529
                            }
                        case 44:
                            var0 = var1;
                        case 47:
                            return var0;
                    }
                };
                var54 = var30.bind(var32)(var26, var14);
                var _closure2_slot101 = var54;
                var14 = var130[var2];
                var32 = var34.bind(var3)(var14);
                var30 = var32.useStateFromStores;
                var14 = _closure1_slot18;
                var26 = new Array(1);
                var26[0] = var14;
                var14 = function() { // Environment: var0
                    var1 = _closure1_slot18;
                    var0 = var1.getVersion;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var81 = var30.bind(var32)(var26, var14);
                var _closure2_slot102 = var81;
                var14 = 81;
                var14 = var130[var14];
                var30 = var34.bind(var3)(var14);
                var26 = var30.useColorStore;
                var14 = function(arg0) { // Environment: var0
                    var0 = global;
                    var2 = var0.Object;
                    var1 = var2.keys;
                    var0 = arg0;
                    var0 = var0.palette;
                    var0 = var1.bind(var2)(var0);
                    var0 = var0.length;
                    return var0;
                };
                var59 = var26.bind(var30)(var14);
                var _closure2_slot103 = var59;
                var14 = var130[var2];
                var32 = var34.bind(var3)(var14);
                var30 = var32.useStateFromStores;
                var14 = _closure1_slot14;
                var26 = new Array(1);
                var26[0] = var14;
                var14 = function() { // Environment: var0
                    var2 = _closure1_slot14;
                    var1 = var2.getGuildEmoji;
                    var0 = _closure2_slot8;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var45 = var30.bind(var32)(var26, var14);
                var _closure2_slot104 = var45;
                var14 = var130[var2];
                var35 = var34.bind(var3)(var14);
                var32 = var35.useStateFromStores;
                var14 = _closure1_slot48;
                var30 = new Array(1);
                var30[0] = var14;
                var26 = function() { // Environment: var0
                    var1 = _closure1_slot48;
                    var0 = var1.getChannelId;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var14 = new Array(0);
                var109 = var32.bind(var35)(var30, var26, var14);
                var _closure2_slot105 = var109;
                var14 = var130[var2];
                var32 = var34.bind(var3)(var14);
                var30 = var32.useStateFromStoresArray;
                var14 = _closure1_slot50;
                var26 = new Array(1);
                var26[0] = var14;
                var14 = function() { // Environment: var0
                    var4 = _closure1_slot50;
                    var1 = var4.getRemoteActivities;
                    var6 = var1.bind(var4)();
                    var2 = new Array(0);
                    var5 = 0;
                    var7 = var2;
                    var5 = arraySpread(var7, var6, var5);
                    var1 = var4.getHiddenActivities;
                    var6 = var1.bind(var4)();
                    var7 = var2;
                    var1 = arraySpread(var7, var6, var5);
                    var1 = var2.filter;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var0 = 59;
                    var3 = var3[var0];
                    var0 = undefined;
                    var0 = var4.bind(var0)(var3);
                    var0 = var0.isNotNullish;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var108 = var30.bind(var32)(var26, var14);
                var _closure2_slot106 = var108;
                var2 = var130[var2];
                var30 = var34.bind(var3)(var2);
                var26 = var30.useStateFromStoresObject;
                var2 = _closure1_slot54;
                var14 = new Array(1);
                var14[0] = var2;
                var2 = function() { // Environment: var0
                    var3 = _closure2_slot106;
                    var2 = var3.reduce;
                    var1 = function(arg0, arg1) { // Environment: var0
                        _fun77536: for (var _fun77536_ip = 0;;) switch (_fun77536_ip) {
                            case 0:
                                var0 = arg0;
                                var1 = arg1;
                                var2 = var1.application_id;
                                var3 = null;
                                if (!(var3 != var2)) {
                                    _fun77536_ip = 69;
                                    continue _fun77536
                                }
                            case 18:
                                var6 = _closure1_slot54;
                                var5 = var6.getState;
                                var4 = var1.application_id;
                                var2 = _closure1_slot60;
                                var2 = var2.JOIN;
                                var2 = var5.bind(var6)(var4, var2);
                                if (!(var3 != var2)) {
                                    _fun77536_ip = 67;
                                    continue _fun77536
                                }
                            case 57:
                                var1 = var1.application_id;
                                var0[var1] = var2;
                            case 67:
                                return var0;
                            case 69:
                                return var0;
                        }
                    };
                    var0 = {};
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var110 = var26.bind(var30)(var14, var2);
                var _closure2_slot107 = var110;
                var2 = var129.useRef;
                var26 = var2.bind(var129)(var4);
                var _closure2_slot108 = var26;
                var2 = var130[var132];
                var14 = var34.bind(var3)(var2);
                var2 = var14.useScrollState;
                var2 = var2.bind(var14)();
                var2 = var18.bind(var3)(var2, var29);
                var30 = var2[var12];
                var _closure2_slot109 = var30;
                var14 = var2[var6];
                var _closure2_slot110 = var14;
                var2 = var129.useState;
                var2 = var2.bind(var129)(var4);
                var2 = var18.bind(var3)(var2, var29);
                var29 = var2[var12];
                var _closure2_slot111 = var29;
                var2 = var2[var6];
                var _closure2_slot112 = var2;
                var6 = var130[var132];
                var12 = var34.bind(var3)(var6);
                var6 = var12.useMessagesState;
                var6 = var6.bind(var12)();
                var50 = var6.shouldForceRender;
                var _closure2_slot113 = var50;
                var37 = var6.hasJumpedToOriginalPost;
                var _closure2_slot114 = var37;
                var32 = var6.setHasJumpedToOriginalPost;
                var _closure2_slot115 = var32;
                var64 = var6.setShouldForceRender;
                var _closure2_slot116 = var64;
                var18 = var129.useMemo;
                var12 = function() { // Environment: var0
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 82;
                    var1 = var1[var0];
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    var1 = var0.prototype;
                    var1 = Object.create(var1, {
                        constructor: {
                            value: var0
                        }
                    });
                    var4 = var1;
                    var0 = new var4[var0](var3);
                    var0 = var0 instanceof Object ? var0 : var1;
                    return var0;
                };
                var6 = new Array(0);
                var6 = var18.bind(var129)(var12, var6);
                var _closure2_slot117 = var6;
                var35 = var129.useMemo;
                var18 = function() { // Environment: var0
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 83;
                    var1 = var1[var0];
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    var1 = var0.prototype;
                    var1 = Object.create(var1, {
                        constructor: {
                            value: var0
                        }
                    });
                    var4 = var1;
                    var0 = new var4[var0](var3);
                    var0 = var0 instanceof Object ? var0 : var1;
                    return var0;
                };
                var12 = new Array(0);
                var18 = var35.bind(var129)(var18, var12);
                var _closure2_slot118 = var18;
                var12 = var129.useRef;
                var12 = var12.bind(var129)(var33);
                var _closure2_slot119 = var12;
                var35 = var129.useRef;
                var12 = 84;
                var12 = var130[var12];
                var12 = var67.bind(var3)(var12);
                var43 = var12.prototype;
                var43 = Object.create(var43, {
                    constructor: {
                        value: var12
                    }
                });
                var139 = var43;
                var138 = var133;
                var12 = new var139[var12](var138, var137);
                var12 = var12 instanceof Object ? var12 : var43;
                var12 = var35.bind(var129)(var12);
                var _closure2_slot120 = var12;
                var12 = var129.useRef;
                var12 = var12.bind(var129)(var33);
                var _closure2_slot121 = var12;
                var35 = var129.useCallback;
                var33 = function(arg0) { // Environment: var0
                    var1 = arg0;
                    var11 = var1.rows;
                    var2 = var1.hasMoreMessagesAfter;
                    var9 = var1.scrollData;
                    var8 = var1.HACK_iOSForceAnimations;
                    var7 = var1.forceReload;
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var0 = 85;
                    var4 = var5[var0];
                    var0 = undefined;
                    var12 = var6.bind(var0)(var4);
                    var10 = var12.isLoadingAtTop;
                    var6 = var1.rows;
                    var4 = _closure2_slot121;
                    var4 = var4.current;
                    var10 = var10.bind(var12)(var6, var4);
                    var4 = _closure1_slot1;
                    var3 = 86;
                    var3 = var5[var3];
                    var6 = var4.bind(var0)(var3);
                    var5 = var6.updateRows;
                    var3 = _closure2_slot108;
                    var4 = var3.current;
                    var3 = {};
                    var3.rows = var11;
                    var3.isLoadingAtTop = var10;
                    var3.scrollData = var9;
                    var3.HACK_iOSForceAnimations = var8;
                    var3.forceReload = var7;
                    var3 = var5.bind(var6)(var4, var3);
                    var1 = _closure2_slot121;
                    var1.current = var2;
                    return var0;
                };
                var12 = new Array(0);
                var33 = var35.bind(var129)(var33, var12);
                var _closure2_slot122 = var33;
                var12 = var130[var132];
                var34 = var34.bind(var3)(var12);
                var12 = var34.useChatUpdatesQueue;
                var12 = var12.bind(var34)(var26, var33);
                var _closure2_slot123 = var12;
                var35 = var129.useCallback;
                var34 = new Array(4);
                var34[0] = var12;
                var34[1] = var33;
                var33 = var30.decelerating;
                var34[2] = var33;
                var33 = var30.dragging;
                var34[3] = var33;
                var33 = function(arg0) { // Environment: var0
                    _fun77540: for (var _fun77540_ip = 0;;) switch (_fun77540_ip) {
                        case 0:
                            var2 = arg0;
                            var1 = _closure2_slot123;
                            var1 = var1.isBlocking;
                            if (var1) {
                                _fun77540_ip = 85;
                                continue _fun77540
                            }
                        case 21:
                            var1 = var2.isLoadingAtTop;
                            if (!var1) {
                                _fun77540_ip = 56;
                                continue _fun77540
                            }
                        case 30:
                            var1 = _closure2_slot109;
                            var1 = var1.decelerating;
                            if (var1) {
                                _fun77540_ip = 69;
                                continue _fun77540
                            }
                        case 43:
                            var1 = _closure2_slot109;
                            var1 = var1.dragging;
                            if (var1) {
                                _fun77540_ip = 69;
                                continue _fun77540
                            }
                        case 56:
                            var3 = _closure2_slot122;
                            var1 = undefined;
                            var1 = var3.bind(var1)(var2);
                            _fun77540_ip = 99;
                            continue _fun77540;
                        case 69:
                            var3 = _closure2_slot123;
                            var1 = var3.add;
                            var1 = var1.bind(var3)(var2);
                            _fun77540_ip = 99;
                            continue _fun77540;
                        case 85:
                            var1 = _closure2_slot123;
                            var0 = var1.add;
                            var0 = var0.bind(var1)(var2);
                        case 99:
                            var0 = undefined;
                            return var0;
                    }
                };
                var35 = var35.bind(var129)(var33, var34);
                var _closure2_slot124 = var35;
                var34 = var129.useCallback;
                var33 = new Array(27);
                var33[0] = var7;
                var33[1] = var8;
                var33[2] = var128;
                var33[3] = var57;
                var33[4] = var56;
                var33[5] = var53;
                var33[6] = var52;
                var33[7] = var19;
                var33[8] = var29;
                var33[9] = var62;
                var33[10] = var61;
                var33[11] = var60;
                var33[12] = var72;
                var33[13] = var44;
                var33[14] = var49;
                var33[15] = var117;
                var33[16] = var65;
                var33[17] = var36;
                var33[18] = var68;
                var33[19] = var71;
                var33[20] = var39;
                var33[21] = var51;
                var33[22] = var23;
                var33[23] = var21;
                var33[24] = var38;
                var33[25] = var6;
                var33[26] = var18;
                var18 = function(arg0) { // Environment: var0
                    _fun77541: for (var _fun77541_ip = 0;;) switch (_fun77541_ip) {
                        case 0:
                            var0 = arg0;
                            var2 = var0.forceRender;
                            var _closure3_slot0 = var2;
                            var2 = var0.updateMessageIds;
                            var _closure3_slot1 = var2;
                            var0 = var0.ignoreEmbedDescriptionCache;
                            var _closure3_slot2 = var0;
                            var0 = _closure2_slot1;
                            var3 = null;
                            var4 = var3 != var0;
                            var0 = null;
                            if (!var4) {
                                _fun77541_ip = 124;
                                continue _fun77541
                            }
                        case 53:
                            var4 = _closure2_slot6;
                            var4 = var3 != var4;
                            var0 = null;
                            if (!var4) {
                                _fun77541_ip = 124;
                                continue _fun77541
                            }
                        case 66:
                            var2 = _closure2_slot69;
                            var0 = null;
                            if (!var2) {
                                _fun77541_ip = 124;
                                continue _fun77541
                            }
                        case 75:
                            var4 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var2 = 87;
                            var3 = var3[var2];
                            var2 = undefined;
                            var2 = var4.bind(var2)(var3);
                            var3 = var2.firstRowGenerator;
                            var2 = var3.measure;
                            var1 = function() { // Environment: var1
                                _fun77542: for (var _fun77542_ip = 0;;) switch (_fun77542_ip) {
                                    case 0:
                                        var3 = _closure2_slot117;
                                        var2 = var3.setup;
                                        var1 = _closure2_slot6;
                                        var1 = var2.bind(var3)(var1);
                                        var3 = _closure2_slot118;
                                        var2 = var3.setOptions;
                                        var1 = {};
                                        var4 = _closure2_slot12;
                                        var1.inlineAttachmentMedia = var4;
                                        var4 = _closure2_slot13;
                                        var1.inlineEmbedMedia = var4;
                                        var4 = _closure2_slot14;
                                        var1.renderEmbeds = var4;
                                        var4 = _closure2_slot15;
                                        var1.renderReactions = var4;
                                        var4 = _closure2_slot16;
                                        var1.animateEmoji = var4;
                                        var4 = _closure2_slot21;
                                        var1.timestampHourCycle = var4;
                                        var4 = _closure2_slot111;
                                        var1.animatingStickerMessageId = var4;
                                        var4 = _closure2_slot98;
                                        var1.constrainedWidth = var4;
                                        var4 = _closure2_slot18;
                                        var1.gifAutoPlay = var4;
                                        var4 = _closure2_slot76;
                                        var1.renderCommunicationDisabled = var4;
                                        var4 = _closure3_slot2;
                                        var1.ignoreEmbedDescriptionCache = var4;
                                        var4 = _closure2_slot20;
                                        var1.enableSwipeActions = var4;
                                        var4 = _closure2_slot91;
                                        var1.shouldObscureSpoiler = var4;
                                        var4 = _closure2_slot93;
                                        var1.shouldDisableInteractiveComponents = var4;
                                        var1 = var2.bind(var3)(var1);
                                        var2 = _closure1_slot67;
                                        var3 = _closure1_slot1;
                                        var4 = _closure1_slot2;
                                        var1 = 88;
                                        var1 = var4[var1];
                                        var4 = undefined;
                                        var3 = var3.bind(var4)(var1);
                                        var1 = {};
                                        var7 = _closure2_slot1;
                                        var1.channel = var7;
                                        var7 = _closure2_slot6;
                                        var1.messages = var7;
                                        var8 = _closure2_slot56;
                                        var7 = null;
                                        if (!(var7 == var8)) {
                                            _fun77542_ip = 232;
                                            continue _fun77542
                                        }
                                    case 226:
                                        var7 = new Array(0);
                                        _fun77542_ip = 236;
                                        continue _fun77542;
                                    case 232:
                                        var7 = _closure2_slot56;
                                    case 236:
                                        var1.uploads = var7;
                                        var7 = _closure2_slot46;
                                        var1.oldestUnreadMessageId = var7;
                                        var7 = _closure2_slot45;
                                        var1.replyingMessageId = var7;
                                        var7 = _closure2_slot11;
                                        var1.currentUserId = var7;
                                        var7 = _closure1_slot0;
                                        var8 = _closure1_slot2;
                                        var6 = 85;
                                        var6 = var8[var6];
                                        var9 = var7.bind(var4)(var6);
                                        var8 = var9.canAddNewReactions;
                                        var7 = _closure2_slot1;
                                        var6 = _closure2_slot47;
                                        var6 = var8.bind(var9)(var7, var6);
                                        var1.canAddNewReactions = var6;
                                        var6 = _closure2_slot87;
                                        var1.selectedSummary = var6;
                                        var6 = _closure2_slot117;
                                        var1.chatManager = var6;
                                        var6 = _closure2_slot59;
                                        var1.roleStyle = var6;
                                        var6 = _closure3_slot0;
                                        var1.forceRender = var6;
                                        var5 = _closure3_slot1;
                                        var1.updateMessageIds = var5;
                                        var5 = _closure2_slot4;
                                        var1.isResourceChannel = var5;
                                        var5 = _closure2_slot100;
                                        var1.unloadableContentEntryMessageIds = var5;
                                        var1 = var3.bind(var4)(var1);
                                        var3 = var2.bind(var4)(var1);
                                        var2 = var3.bind(var4)();
                                        var1 = var2.done;
                                        if (var1) {
                                            _fun77542_ip = 448;
                                            continue _fun77542
                                        }
                                    case 398:
                                        var6 = var2.value;
                                        var5 = _closure2_slot118;
                                        var1 = var5.generate;
                                        var6 = var1.bind(var5)(var6);
                                        var5 = _closure2_slot117;
                                        var1 = var5.createRow;
                                        var1 = var1.bind(var5)(var6);
                                        var5 = var3.bind(var4)();
                                        var1 = var5.done;
                                        var2 = var5;
                                        if (!var1) {
                                            _fun77542_ip = 398;
                                            continue _fun77542
                                        }
                                    case 448:
                                        var1 = _closure2_slot117;
                                        var0 = var1.createChangeset;
                                        var0 = var0.bind(var1)();
                                        return var0;
                                }
                            };
                            var0 = var2.bind(var3)(var1);
                        case 124:
                            return var0;
                    }
                };
                var38 = var34.bind(var129)(var18, var33);
                var _closure2_slot125 = var38;
                var34 = var129.useCallback;
                var33 = new Array(1);
                var33[0] = var6;
                var18 = function(arg0) { // Environment: var0
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 85;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.findMessageIndexInRows;
                    var1 = _closure2_slot117;
                    var0 = var1.getPreviousRows;
                    var1 = var0.bind(var1)();
                    var0 = arg0;
                    var0 = var2.bind(var3)(var0, var1);
                    return var0;
                };
                var18 = var34.bind(var129)(var18, var33);
                var _closure2_slot126 = var18;
                var34 = var129.useCallback;
                var33 = new Array(14);
                var33[0] = var38;
                var38 = var30.animated;
                var33[1] = var38;
                var33[2] = var12;
                var33[3] = var35;
                var33[4] = var18;
                var33[5] = var37;
                var33[6] = var7;
                var33[7] = var9;
                var33[8] = var8;
                var33[9] = var40;
                var33[10] = var51;
                var33[11] = var21;
                var33[12] = var6;
                var33[13] = var31;
                var21 = function() { // Environment: var0
                    _fun77544: for (var _fun77544_ip = 0;;) switch (_fun77544_ip) {
                        case 0:
                            var2 = arguments[0];
                            var0 = undefined;
                            if (!(var2 === var0)) {
                                _fun77544_ip = 13;
                                continue _fun77544
                            }
                        case 11:
                            var2 = {};
                        case 13:
                            var10 = var2.forceRender;
                            if (!(var10 === var0)) {
                                _fun77544_ip = 25;
                                continue _fun77544
                            }
                        case 23:
                            var10 = false;
                        case 25:
                            var6 = var2.forceReload;
                            var9 = var2.updateMessageIds;
                            if (!(var9 === var0)) {
                                _fun77544_ip = 69;
                                continue _fun77544
                            }
                        case 41:
                            var3 = global;
                            var3 = var3.Set;
                            var4 = var3.prototype;
                            var4 = Object.create(var4, {
                                constructor: {
                                    value: var3
                                }
                            });
                            var29 = var4;
                            var3 = new var29[var3](var28);
                            var9 = var3 instanceof Object ? var3 : var4;
                        case 69:
                            var16 = var2.scrollToMessageId;
                            if (!(var16 === var0)) {
                                _fun77544_ip = 81;
                                continue _fun77544
                            }
                        case 79:
                            var16 = null;
                        case 81:
                            var15 = var2.jumpTargetId;
                            if (!(var15 === var0)) {
                                _fun77544_ip = 93;
                                continue _fun77544
                            }
                        case 91:
                            var15 = null;
                        case 93:
                            var19 = var2.jumpType;
                            if (!(var19 === var0)) {
                                _fun77544_ip = 138;
                                continue _fun77544
                            }
                        case 103:
                            var4 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var3 = 89;
                            var3 = var5[var3];
                            var3 = var4.bind(var0)(var3);
                            var3 = var3.JumpTypes;
                            var19 = var3.ANIMATED;
                        case 138:
                            var8 = var2.focusTargetId;
                            if (!(var8 === var0)) {
                                _fun77544_ip = 150;
                                continue _fun77544
                            }
                        case 148:
                            var8 = null;
                        case 150:
                            var5 = var2.ignoreEmbedDescriptionCache;
                            if (!(var5 === var0)) {
                                _fun77544_ip = 162;
                                continue _fun77544
                            }
                        case 160:
                            var5 = false;
                        case 162:
                            var7 = var2.messagesNewlyLoaded;
                            if (!(var7 === var0)) {
                                _fun77544_ip = 174;
                                continue _fun77544
                            }
                        case 172:
                            var7 = false;
                        case 174:
                            var13 = var2.shouldInitialScroll;
                            if (!(var13 === var0)) {
                                _fun77544_ip = 186;
                                continue _fun77544
                            }
                        case 184:
                            var13 = false;
                        case 186:
                            var18 = var2.minimizeScrolling;
                            if (!(var18 === var0)) {
                                _fun77544_ip = 198;
                                continue _fun77544
                            }
                        case 196:
                            var18 = false;
                        case 198:
                            var17 = var2.isRescrolling;
                            if (!(var17 === var0)) {
                                _fun77544_ip = 210;
                                continue _fun77544
                            }
                        case 208:
                            var17 = false;
                        case 210:
                            var11 = var2.overrideScrollJumpType;
                            var2 = _closure2_slot108;
                            var2 = var2.current;
                            var14 = null;
                            if (!(var14 != var2)) {
                                _fun77544_ip = 1058;
                                continue _fun77544
                            }
                        case 237:
                            var4 = _closure2_slot125;
                            var2 = {};
                            var2.forceRender = var10;
                            var2.updateMessageIds = var9;
                            var2.ignoreEmbedDescriptionCache = var5;
                            var12 = var4.bind(var0)(var2);
                            var2 = _closure2_slot119;
                            var5 = var2.current;
                            var2 = _closure2_slot87;
                            var2 = var14 != var2;
                            var10 = undefined;
                            if (!var2) {
                                _fun77544_ip = 336;
                                continue _fun77544
                            }
                        case 285:
                            var2 = _closure2_slot87;
                            var2 = var2.startId;
                            var10 = undefined;
                            if (!(var2 === var16)) {
                                _fun77544_ip = 336;
                                continue _fun77544
                            }
                        case 301:
                            var4 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var2 = 86;
                            var2 = var9[var2];
                            var2 = var4.bind(var0)(var2);
                            var2 = var2.ChatScrollPosition;
                            var10 = var2.MIDDLE;
                        case 336:
                            if (!(var14 != var12)) {
                                _fun77544_ip = 354;
                                continue _fun77544
                            }
                        case 340:
                            var4 = var12.length;
                            var2 = 0;
                            if (!(!(var4 > var2))) {
                                _fun77544_ip = 715;
                                continue _fun77544
                            }
                        case 354:
                            var2 = _closure2_slot119;
                            var2 = var2.current;
                            if (!var2) {
                                _fun77544_ip = 386;
                                continue _fun77544
                            }
                        case 366:
                            var4 = _closure2_slot123;
                            var2 = var4.hasUpdates;
                            var2 = var2.bind(var4)();
                            if (var2) {
                                _fun77544_ip = 696;
                                continue _fun77544
                            }
                        case 386:
                            var2 = _closure2_slot119;
                            var2 = var2.current;
                            if (var2) {
                                _fun77544_ip = 461;
                                continue _fun77544
                            }
                        case 398:
                            if (!(var14 != var12)) {
                                _fun77544_ip = 461;
                                continue _fun77544
                            }
                        case 402:
                            var4 = var12.length;
                            var2 = 0;
                            if (!(var2 === var4)) {
                                _fun77544_ip = 461;
                                continue _fun77544
                            }
                        case 413:
                            var4 = _closure1_slot1;
                            var9 = _closure1_slot2;
                            var2 = 86;
                            var2 = var9[var2];
                            var9 = var4.bind(var0)(var2);
                            var4 = var9.fadeIn;
                            var2 = _closure2_slot108;
                            var2 = var2.current;
                            var2 = var4.bind(var9)(var2);
                            _fun77544_ip = 999;
                            continue _fun77544;
                        case 461:
                            if (!(var14 != var16)) {
                                _fun77544_ip = 624;
                                continue _fun77544
                            }
                        case 468:
                            var20 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var9 = 85;
                            var4 = var4[var9];
                            var24 = var20.bind(var0)(var4);
                            var23 = var24.shouldJumpToOriginalPost;
                            var28 = _closure2_slot1;
                            var27 = _closure2_slot7;
                            var26 = _closure2_slot6;
                            var25 = _closure2_slot114;
                            var29 = var24;
                            var4 = var29[var23](var28, var27, var26, var25, var24);
                            if (var4) {
                                _fun77544_ip = 624;
                                continue _fun77544
                            }
                        case 523:
                            var4 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var2 = var2[var9];
                            var9 = var4.bind(var0)(var2);
                            var4 = var9.scrollToMessageIdWithRescroll;
                            var2 = {};
                            var2.scrollToMessageId = var16;
                            var2.jumpTargetId = var15;
                            var2.jumpType = var19;
                            var2.scrollPosition = var10;
                            var2.minimizeScrolling = var18;
                            var2.isRescrolling = var17;
                            var17 = _closure2_slot58;
                            var2.useReducedMotion = var17;
                            var17 = _closure2_slot108;
                            var2.chatRef = var17;
                            var17 = _closure2_slot126;
                            var2.findMessageIndex = var17;
                            var17 = _closure2_slot127;
                            var2.updateRows = var17;
                            var2 = var4.bind(var9)(var2);
                            _fun77544_ip = 999;
                            continue _fun77544;
                        case 624:
                            if (!(var14 != var8)) {
                                _fun77544_ip = 999;
                                continue _fun77544
                            }
                        case 631:
                            var2 = _closure2_slot126;
                            var17 = var2.bind(var0)(var8);
                            if (!(var14 != var17)) {
                                _fun77544_ip = 999;
                                continue _fun77544
                            }
                        case 647:
                            var4 = _closure1_slot1;
                            var9 = _closure1_slot2;
                            var2 = 86;
                            var2 = var9[var2];
                            var9 = var4.bind(var0)(var2);
                            var4 = var9.focus;
                            var2 = _closure2_slot108;
                            var2 = var2.current;
                            var2 = var4.bind(var9)(var2, var17);
                            _fun77544_ip = 999;
                            continue _fun77544;
                        case 696:
                            var4 = _closure2_slot123;
                            var2 = var4.tryFlush;
                            var2 = var2.bind(var4)();
                            _fun77544_ip = 999;
                            continue _fun77544;
                        case 715:
                            var4 = _closure1_slot1;
                            var17 = _closure1_slot2;
                            var2 = 90;
                            var2 = var17[var2];
                            var4 = var4.bind(var0)(var2);
                            var2 = {};
                            var18 = _closure2_slot117;
                            var17 = var18.getPreviousRows;
                            var17 = var17.bind(var18)();
                            var2.rows = var17;
                            var2.scrollToMessageId = var16;
                            var2.jumpTargetId = var15;
                            if (!(var14 == var11)) {
                                _fun77544_ip = 783;
                                continue _fun77544
                            }
                        case 773:
                            var14 = _closure2_slot6;
                            var11 = var14.jumpType;
                        case 783:
                            var2.jumpType = var11;
                            var11 = _closure2_slot119;
                            var11 = var11.current;
                            var11 = !var11;
                            if (var11) {
                                _fun77544_ip = 806;
                                continue _fun77544
                            }
                        case 803:
                            var11 = var13;
                        case 806:
                            var2.shouldInitialScroll = var11;
                            var11 = _closure2_slot109;
                            var11 = var11.animated;
                            var2.animated = var11;
                            var2.scrollPosition = var10;
                            var2.focusTargetId = var8;
                            var8 = function() {
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 91;
                                var1 = var1[var0];
                                var0 = undefined;
                                var2 = var2.bind(var0)(var1);
                                var1 = var2.getOldestUnreadMentionOnLoad;
                                var0 = {};
                                var4 = _closure2_slot1;
                                var0.channel = var4;
                                var3 = _closure2_slot6;
                                var0.messages = var3;
                                var3 = true;
                                var0.track = var3;
                                var0 = var1.bind(var2)(var0);
                                return var0;
                            };
                            var2.getInitialScrollMessageId = var8;
                            var8 = var4.bind(var0)(var2);
                            var4 = _closure2_slot119;
                            var2 = true;
                            var4.current = var2;
                            var4 = _closure2_slot124;
                            var2 = {};
                            var2.rows = var12;
                            var10 = _closure2_slot6;
                            var10 = var10.hasMoreAfter;
                            var2.hasMoreMessagesAfter = var10;
                            var10 = _closure1_slot0;
                            var11 = _closure1_slot2;
                            var9 = 85;
                            var9 = var11[var9];
                            var11 = var10.bind(var0)(var9);
                            var10 = var11.isLoadingAtTop;
                            var9 = _closure2_slot121;
                            var9 = var9.current;
                            var9 = var10.bind(var11)(var12, var9);
                            var2.isLoadingAtTop = var9;
                            var2.scrollData = var8;
                            var2.HACK_iOSForceAnimations = var7;
                            var2.forceReload = var6;
                            var2 = var4.bind(var0)(var2);
                            if (var5) {
                                _fun77544_ip = 999;
                                continue _fun77544
                            }
                        case 960:
                            var2 = _closure2_slot120;
                            var6 = var2.current;
                            var4 = var6.finish;
                            var2 = {};
                            var7 = _closure2_slot7;
                            var2.channelId = var7;
                            var7 = _closure2_slot70;
                            var2.areMessagesCached = var7;
                            var2 = var4.bind(var6)(var2);
                        case 999:
                            var2 = _closure2_slot119;
                            var2 = var2.current;
                            if (!var2) {
                                _fun77544_ip = 1024;
                                continue _fun77544
                            }
                        case 1011:
                            var4 = _closure2_slot119;
                            var4 = var4.current;
                            var2 = var4 !== var5;
                        case 1024:
                            if (!var2) {
                                _fun77544_ip = 1031;
                                continue _fun77544
                            }
                        case 1027:
                            var2 = _closure2_slot4;
                        case 1031:
                            if (!var2) {
                                _fun77544_ip = 1058;
                                continue _fun77544
                            }
                        case 1034:
                            var2 = global;
                            var3 = var2.setTimeout;
                            var2 = function() { // Environment: var1
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 85;
                                var1 = var1[var0];
                                var0 = undefined;
                                var3 = var2.bind(var0)(var1);
                                var2 = var3.scrollToTopMessage;
                                var1 = _closure2_slot108;
                                var0 = _closure2_slot117;
                                var0 = var2.bind(var3)(var1, var0);
                                return var0;
                            };
                            var1 = 100;
                            var1 = var3.bind(var0)(var2, var1);
                        case 1058:
                            return var0;
                    }
                };
                var21 = var34.bind(var129)(var21, var33);
                var _closure2_slot127 = var21;
                var35 = var129.useCallback;
                var34 = new Array(4);
                var34[0] = var31;
                var34[1] = var26;
                var34[2] = var18;
                var34[3] = var21;
                var33 = function(arg0) { // Environment: var0
                    _fun77547: for (var _fun77547_ip = 0;;) switch (_fun77547_ip) {
                        case 0:
                            var1 = arg0;
                            var9 = var1.scrollToMessageId;
                            var8 = var1.jumpTargetId;
                            var0 = undefined;
                            if (!(var8 === var0)) {
                                _fun77547_ip = 23;
                                continue _fun77547
                            }
                        case 21:
                            var8 = null;
                        case 23:
                            var7 = var1.jumpType;
                            if (!(var7 === var0)) {
                                _fun77547_ip = 68;
                                continue _fun77547
                            }
                        case 33:
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var2 = 89;
                            var2 = var4[var2];
                            var2 = var3.bind(var0)(var2);
                            var2 = var2.JumpTypes;
                            var7 = var2.ANIMATED;
                        case 68:
                            var6 = var1.scrollPosition;
                            if (!(var6 === var0)) {
                                _fun77547_ip = 113;
                                continue _fun77547
                            }
                        case 78:
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var2 = 86;
                            var2 = var4[var2];
                            var2 = var3.bind(var0)(var2);
                            var2 = var2.ChatScrollPosition;
                            var6 = var2.TOP;
                        case 113:
                            var5 = var1.minimizeScrolling;
                            if (!(var5 === var0)) {
                                _fun77547_ip = 125;
                                continue _fun77547
                            }
                        case 123:
                            var5 = false;
                        case 125:
                            var4 = var1.isRescrolling;
                            if (!(var4 === var0)) {
                                _fun77547_ip = 137;
                                continue _fun77547
                            }
                        case 135:
                            var4 = false;
                        case 137:
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 85;
                            var1 = var3[var1];
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.scrollToMessageIdWithRescroll;
                            var1 = {};
                            var1.scrollToMessageId = var9;
                            var1.jumpTargetId = var8;
                            var1.jumpType = var7;
                            var1.scrollPosition = var6;
                            var1.minimizeScrolling = var5;
                            var1.isRescrolling = var4;
                            var5 = _closure2_slot58;
                            var1.useReducedMotion = var5;
                            var5 = _closure2_slot108;
                            var1.chatRef = var5;
                            var5 = _closure2_slot126;
                            var1.findMessageIndex = var5;
                            var4 = _closure2_slot127;
                            var1.updateRows = var4;
                            var1 = var2.bind(var3)(var1);
                            return var0;
                    }
                };
                var38 = var35.bind(var129)(var33, var34);
                var _closure2_slot128 = var38;
                var35 = var129.useCallback;
                var34 = new Array(2);
                var34[0] = var18;
                var34[1] = var21;
                var33 = function(arg0) { // Environment: var0
                    _fun77548: for (var _fun77548_ip = 0;;) switch (_fun77548_ip) {
                        case 0:
                            var5 = arguments[1];
                            var1 = arguments[2];
                            var0 = undefined;
                            if (!(var5 === var0)) {
                                _fun77548_ip = 14;
                                continue _fun77548
                            }
                        case 12:
                            var5 = false;
                        case 14:
                            if (!(var1 === var0)) {
                                _fun77548_ip = 53;
                                continue _fun77548
                            }
                        case 18:
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var2 = 89;
                            var2 = var4[var2];
                            var2 = var3.bind(var0)(var2);
                            var2 = var2.JumpTypes;
                            var1 = var2.INSTANT;
                        case 53:
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var2 = 85;
                            var2 = var4[var2];
                            var4 = var3.bind(var0)(var2);
                            var3 = var4.maybeRescrollToMessageId;
                            var2 = {};
                            var7 = _closure2_slot108;
                            var2.chatRef = var7;
                            var7 = _closure2_slot126;
                            var2.findMessageIndex = var7;
                            var6 = _closure2_slot127;
                            var2.updateRows = var6;
                            var2.updateRowsEnabled = var5;
                            var2.jumpType = var1;
                            var1 = arg0;
                            var1 = var3.bind(var4)(var1, var2);
                            return var0;
                    }
                };
                var35 = var35.bind(var129)(var33, var34);
                var _closure2_slot129 = var35;
                var39 = var129.useCallback;
                var34 = new Array(5);
                var34[0] = var9;
                var34[1] = var17;
                var34[2] = var14;
                var34[3] = var2;
                var34[4] = var6;
                var33 = function() { // Environment: var0
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 85;
                    var1 = var1[var0];
                    var0 = undefined;
                    var7 = var2.bind(var0)(var1);
                    var6 = var7.clearRows;
                    var12 = _closure2_slot108;
                    var11 = _closure2_slot117;
                    var10 = _closure2_slot7;
                    var9 = _closure2_slot2;
                    var8 = function(arg0) { // Environment: var1
                        var3 = _closure2_slot110;
                        var0 = undefined;
                        var2 = arg0;
                        var2 = var3.bind(var0)(var2);
                        var3 = _closure2_slot112;
                        var2 = null;
                        var2 = var3.bind(var0)(var2);
                        var2 = _closure2_slot119;
                        var1 = false;
                        var2.current = var1;
                        return var0;
                    };
                    var13 = var7;
                    var1 = var13[var6](var12, var11, var10, var9, var8, var7);
                    return var0;
                };
                var34 = var39.bind(var129)(var33, var34);
                var _closure2_slot130 = var34;
                var43 = var129.useCallback;
                var39 = new Array(2);
                var39[0] = var6;
                var39[1] = var9;
                var33 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var6 = var0.firstVisibleMessageRowIndex;
                    var5 = var0.lastVisibleMessageRowIndex;
                    var4 = var0.firstVisibleMessagePercentVisible;
                    var3 = var0.lastVisibleMessagePercentVisible;
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 85;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.getVisibleMessages;
                    var0 = {};
                    var0.firstVisibleMessageRowIndex = var6;
                    var0.lastVisibleMessageRowIndex = var5;
                    var0.firstVisibleMessagePercentVisible = var4;
                    var0.lastVisibleMessagePercentVisible = var3;
                    var4 = _closure2_slot117;
                    var0.chatManager = var4;
                    var3 = _closure2_slot7;
                    var0.channelId = var3;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var33 = var43.bind(var129)(var33, var39);
                var _closure2_slot131 = var33;
                var43 = var129.useCallback;
                var39 = new Array(6);
                var39[0] = var9;
                var39[1] = var13;
                var39[2] = var8;
                var39[3] = var65;
                var39[4] = var16;
                var39[5] = var14;
                var16 = function() { // Environment: var0
                    _fun77552: for (var _fun77552_ip = 0;;) switch (_fun77552_ip) {
                        case 0:
                            var0 = {};
                            var2 = function arg0() {
                                var1 = arg0;
                                var _closure4_slot0 = var1;
                                var3 = _closure1_slot1;
                                var2 = _closure1_slot2;
                                var1 = 92;
                                var2 = var2[var1];
                                var1 = undefined;
                                var3 = var3.bind(var1)(var2);
                                var2 = var3.find;
                                var4 = _closure2_slot6;
                                var1 = var4.toArray;
                                var1 = var1.bind(var4)();
                                var0 = function(arg0) { // Environment: var0
                                    _fun77554: for (var _fun77554_ip = 0;;) switch (_fun77554_ip) {
                                        case 0:
                                            var0 = arg0;
                                            var3 = var0.id;
                                            var2 = var0.nonce;
                                            var0 = _closure4_slot0;
                                            var0 = var3 === var0;
                                            if (var0) {
                                                _fun77554_ip = 36;
                                                continue _fun77554
                                            }
                                        case 28:
                                            var1 = _closure4_slot0;
                                            var0 = var2 === var1;
                                        case 36:
                                            return var0;
                                    }
                                };
                                var0 = var2.bind(var3)(var1, var0);
                                return var0;
                            };
                            var0.getMessage = var2;
                            var2 = _closure2_slot3;
                            var0.chatInputRef = var2;
                            var2 = _closure2_slot7;
                            var0.selectedChannelId = var2;
                            var2 = _closure2_slot6;
                            var2 = var2.revealedMessageId;
                            var0.revealedMessageId = var2;
                            var2 = _closure2_slot56;
                            var4 = null;
                            if (!(var4 == var2)) {
                                _fun77552_ip = 68;
                                continue _fun77552
                            }
                        case 62:
                            var2 = new Array(0);
                            _fun77552_ip = 72;
                            continue _fun77552;
                        case 68:
                            var2 = _closure2_slot56;
                        case 72:
                            var0.uploads = var2;
                            var2 = _closure2_slot79;
                            var2 = var4 != var2;
                            if (!var2) {
                                _fun77552_ip = 92;
                                continue _fun77552
                            }
                        case 88:
                            var2 = _closure2_slot79;
                        case 92:
                            var0.paymentsBlocked = var2;
                            var2 = function() {
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 85;
                                var1 = var1[var0];
                                var0 = undefined;
                                var4 = var2.bind(var0)(var1);
                                var3 = var4.loadMoreBefore;
                                var2 = _closure2_slot7;
                                var1 = _closure2_slot6;
                                var0 = function(arg0) { // Environment: var0
                                    var2 = _closure2_slot110;
                                    var1 = {};
                                    var0 = arg0;
                                    var1.animated = var0;
                                    var0 = undefined;
                                    var0 = var2.bind(var0)(var1);
                                    return var0;
                                };
                                var0 = var3.bind(var4)(var2, var1, var0);
                                return var0;
                            };
                            var0.loadMoreBefore = var2;
                            var1 = function() {
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 85;
                                var1 = var1[var0];
                                var0 = undefined;
                                var4 = var2.bind(var0)(var1);
                                var3 = var4.loadMoreAfter;
                                var2 = _closure2_slot7;
                                var1 = _closure2_slot6;
                                var0 = function(arg0) { // Environment: var0
                                    var2 = _closure2_slot110;
                                    var1 = {};
                                    var0 = arg0;
                                    var1.animated = var0;
                                    var0 = undefined;
                                    var0 = var2.bind(var0)(var1);
                                    return var0;
                                };
                                var0 = var3.bind(var4)(var2, var1, var0);
                                return var0;
                            };
                            var0.loadMoreAfter = var1;
                            return var0;
                    }
                };
                var16 = var43.bind(var129)(var16, var39);
                var _closure2_slot132 = var16;
                var43 = var129.useMemo;
                var39 = new Array(1);
                var39[0] = var16;
                var16 = function() { // Environment: var0
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 93;
                    var1 = var1[var0];
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    var2 = var0.MessagesHandlers;
                    var3 = _closure2_slot132;
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
                var16 = var43.bind(var129)(var16, var39);
                var _closure2_slot133 = var16;
                var43 = var129.useCallback;
                var39 = new Array(7);
                var39[0] = var66;
                var39[1] = var7;
                var39[2] = var8;
                var39[3] = var12;
                var39[4] = var30;
                var39[5] = var9;
                var39[6] = var14;
                var12 = function(arg0) { // Environment: var0
                    _fun77560: for (var _fun77560_ip = 0;;) switch (_fun77560_ip) {
                        case 0:
                            var0 = arg0;
                            var5 = var0.isAtBottom;
                            var9 = var0.isNearBottom;
                            var3 = undefined;
                            if (!(var9 === var3)) {
                                _fun77560_ip = 25;
                                continue _fun77560
                            }
                        case 23:
                            var9 = false;
                        case 25:
                            var11 = var0.isNearTop;
                            if (!(var11 === var3)) {
                                _fun77560_ip = 37;
                                continue _fun77560
                            }
                        case 35:
                            var11 = false;
                        case 37:
                            var12 = var0.dragging;
                            if (!(var12 === var3)) {
                                _fun77560_ip = 49;
                                continue _fun77560
                            }
                        case 47:
                            var12 = false;
                        case 49:
                            var14 = var0.decelerating;
                            if (!(var14 === var3)) {
                                _fun77560_ip = 61;
                                continue _fun77560
                            }
                        case 59:
                            var14 = false;
                        case 61:
                            var4 = var0.isFirstMessageVisible;
                            if (!(var4 === var3)) {
                                _fun77560_ip = 73;
                                continue _fun77560
                            }
                        case 71:
                            var4 = false;
                        case 73:
                            var1 = _closure2_slot0;
                            var2 = var1.onScroll;
                            var6 = _closure2_slot1;
                            var1 = null;
                            if (!(var1 != var6)) {
                                _fun77560_ip = 524;
                                continue _fun77560
                            }
                        case 99:
                            var6 = _closure2_slot6;
                            var6 = var6.length;
                            var10 = 0;
                            if (!(var10 === var6)) {
                                _fun77560_ip = 130;
                                continue _fun77560
                            }
                        case 114:
                            var6 = _closure2_slot6;
                            var6 = var6.loadingMore;
                            if (var6) {
                                _fun77560_ip = 524;
                                continue _fun77560
                            }
                        case 130:
                            var13 = _closure1_slot0;
                            var15 = _closure1_slot2;
                            var8 = 94;
                            var8 = var15[var8];
                            var13 = var13.bind(var3)(var8);
                            var8 = var13.getIsScreenReaderEnabled;
                            var13 = var8.bind(var13)();
                            var8 = _closure2_slot6;
                            var8 = var8.loadingMore;
                            var8 = !var8;
                            if (!var8) {
                                _fun77560_ip = 194;
                                continue _fun77560
                            }
                        case 179:
                            if (var12) {
                                _fun77560_ip = 185;
                                continue _fun77560
                            }
                        case 182:
                            var12 = var14;
                        case 185:
                            if (var12) {
                                _fun77560_ip = 191;
                                continue _fun77560
                            }
                        case 188:
                            var12 = var13;
                        case 191:
                            var8 = var12;
                        case 194:
                            if (!var8) {
                                _fun77560_ip = 214;
                                continue _fun77560
                            }
                        case 197:
                            var13 = _closure2_slot123;
                            var12 = var13.hasUpdates;
                            var12 = var12.bind(var13)();
                            var8 = !var12;
                        case 214:
                            var12 = _closure2_slot109;
                            var12 = var12.isNearTop;
                            if (var12) {
                                _fun77560_ip = 299;
                                continue _fun77560
                            }
                        case 227:
                            if (!var11) {
                                _fun77560_ip = 299;
                                continue _fun77560
                            }
                        case 230:
                            var11 = _closure2_slot6;
                            var11 = var11.hasMoreBefore;
                            if (!var11) {
                                _fun77560_ip = 299;
                                continue _fun77560
                            }
                        case 243:
                            if (!var8) {
                                _fun77560_ip = 299;
                                continue _fun77560
                            }
                        case 246:
                            var12 = _closure1_slot0;
                            var13 = _closure1_slot2;
                            var11 = 85;
                            var11 = var13[var11];
                            var15 = var12.bind(var3)(var11);
                            var14 = var15.loadMoreBefore;
                            var13 = _closure2_slot7;
                            var12 = _closure2_slot6;
                            var11 = function(arg0) { // Environment: var7
                                var2 = _closure2_slot110;
                                var1 = {};
                                var0 = arg0;
                                var1.animated = var0;
                                var0 = undefined;
                                var0 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var11 = var14.bind(var15)(var13, var12, var11);
                            _fun77560_ip = 490;
                            continue _fun77560;
                        case 299:
                            var11 = _closure2_slot109;
                            var11 = var11.isNearBottom;
                            if (var11) {
                                _fun77560_ip = 381;
                                continue _fun77560
                            }
                        case 312:
                            if (!var9) {
                                _fun77560_ip = 381;
                                continue _fun77560
                            }
                        case 315:
                            var9 = _closure2_slot6;
                            var9 = var9.hasMoreAfter;
                            if (!var9) {
                                _fun77560_ip = 381;
                                continue _fun77560
                            }
                        case 328:
                            if (!var8) {
                                _fun77560_ip = 381;
                                continue _fun77560
                            }
                        case 331:
                            var9 = _closure1_slot0;
                            var11 = _closure1_slot2;
                            var8 = 85;
                            var8 = var11[var8];
                            var12 = var9.bind(var3)(var8);
                            var11 = var12.loadMoreAfter;
                            var9 = _closure2_slot7;
                            var8 = _closure2_slot6;
                            var7 = function(arg0) { // Environment: var7
                                var2 = _closure2_slot110;
                                var1 = {};
                                var0 = arg0;
                                var1.animated = var0;
                                var0 = undefined;
                                var0 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var7 = var11.bind(var12)(var9, var8, var7);
                            _fun77560_ip = 490;
                            continue _fun77560;
                        case 381:
                            var7 = _closure2_slot109;
                            var7 = var7.isAtBottom;
                            var7 = var7 === var5;
                            if (!var7) {
                                _fun77560_ip = 408;
                                continue _fun77560
                            }
                        case 398:
                            var8 = _closure2_slot109;
                            var7 = var8.hasHandledScroll;
                        case 408:
                            if (var7) {
                                _fun77560_ip = 490;
                                continue _fun77560
                            }
                        case 411:
                            var7 = _closure1_slot1;
                            var8 = _closure1_slot2;
                            var6 = 73;
                            var6 = var8[var6];
                            var9 = var7.bind(var3)(var6);
                            var8 = var9.updateChannelDimensions;
                            var6 = _closure2_slot1;
                            var7 = var6.id;
                            var6 = 0;
                            if (!var5) {
                                _fun77560_ip = 454;
                                continue _fun77560
                            }
                        case 451:
                            var6 = 1;
                        case 454:
                            var17 = 1;
                            var20 = var9;
                            var19 = var7;
                            var18 = var6;
                            var16 = 0;
                            var5 = var20[var8](var19, var18, var17, var16, var15);
                            var6 = _closure2_slot110;
                            var5 = {};
                            var7 = true;
                            var5.hasHandledScroll = var7;
                            var5 = var6.bind(var3)(var5);
                        case 490:
                            if (!(var1 != var2)) {
                                _fun77560_ip = 506;
                                continue _fun77560
                            }
                        case 494:
                            var1 = {};
                            var1.isFirstMessageVisible = var4;
                            var1 = var2.bind(var3)(var1);
                        case 506:
                            var1 = _closure2_slot123;
                            var0 = var1.tryFlush;
                            var0 = var0.bind(var1)();
                            var0 = true;
                            return var0;
                        case 524:
                            var0 = false;
                            return var0;
                    }
                };
                var12 = var43.bind(var129)(var12, var39);
                var _closure2_slot134 = var12;
                var43 = var129.useCallback;
                var39 = new Array(13);
                var39[0] = var26;
                var39[1] = var9;
                var39[2] = var28;
                var39[3] = var27;
                var39[4] = var11;
                var39[5] = var7;
                var39[6] = var8;
                var39[7] = var14;
                var39[8] = var54;
                var39[9] = var17;
                var39[10] = var22;
                var39[11] = var6;
                var39[12] = var12;
                var22 = function(arg0) { // Environment: var0
                    _fun77563: for (var _fun77563_ip = 0;;) switch (_fun77563_ip) {
                        case 0:
                            var0 = arg0;
                            var0 = var0.nativeEvent;
                            var11 = var0.isAtBottom;
                            var10 = var0.isNearBottom;
                            var9 = var0.isNearTop;
                            var8 = var0.dragging;
                            var7 = var0.decelerating;
                            var5 = var0.firstVisibleMessageIndex;
                            var17 = var0.firstVisibleMessagePercentVisible;
                            var4 = var0.lastVisibleMessageIndex;
                            var14 = var0.lastVisibleMessagePercentVisible;
                            var3 = var0.shouldShowJumpToPresent;
                            var1 = var0.isFirstMessageVisible;
                            var19 = var0.changesetUpdateId;
                            var12 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var0 = 95;
                            var6 = var6[var0];
                            var0 = undefined;
                            var15 = var12.bind(var0)(var6);
                            var13 = var15.getChangesetIdForChat;
                            var12 = _closure2_slot108;
                            var12 = var12.current;
                            var18 = var13.bind(var15)(var12);
                            if (!(var19 !== var18)) {
                                _fun77563_ip = 181;
                                continue _fun77563
                            }
                        case 134:
                            var12 = _closure2_slot101;
                            if (!var12) {
                                _fun77563_ip = 420;
                                continue _fun77563
                            }
                        case 144:
                            var16 = _closure1_slot66;
                            var15 = var16.log;
                            var22 = _closure2_slot7;
                            var23 = 'STAFF-ACK-LOG: Ignoring outdated scroll event.';
                            var24 = var16;
                            var21 = var19;
                            var20 = var18;
                            var12 = var24[var15](var23, var22, var21, var20, var19);
                            _fun77563_ip = 420;
                            continue _fun77563;
                        case 181:
                            var15 = _closure1_slot0;
                            var16 = _closure1_slot2;
                            var2 = 85;
                            var2 = var16[var2];
                            var13 = var15.bind(var0)(var2);
                            var12 = var13.handleVisibleMessagesChange;
                            var2 = {};
                            var2.firstVisibleMessageRowIndex = var5;
                            var2.firstVisibleMessagePercentVisible = var17;
                            var2.lastVisibleMessageRowIndex = var4;
                            var2.lastVisibleMessagePercentVisible = var14;
                            var14 = 96;
                            var14 = var16[var14];
                            var14 = var15.bind(var0)(var14);
                            var14 = var14.QuestsVisibleMessagesChangedSource;
                            var14 = var14.SCROLL;
                            var2.source = var14;
                            var14 = _closure2_slot117;
                            var2.chatManager = var14;
                            var14 = _closure2_slot89;
                            var2.shouldTrackAnnouncementMessageViews = var14;
                            var14 = _closure2_slot90;
                            var2.shouldTrackRichPresenceInviteEmbedViews = var14;
                            var14 = _closure2_slot8;
                            var2.guildId = var14;
                            var14 = _closure2_slot7;
                            var2.channelId = var14;
                            var14 = _closure2_slot1;
                            var2.channel = var14;
                            var2 = var12.bind(var13)(var2);
                            var2 = {};
                            var2.isAtBottom = var11;
                            var2.isNearBottom = var10;
                            var2.isNearTop = var9;
                            var2.dragging = var8;
                            var2.decelerating = var7;
                            var2.shouldShowJumpToPresent = var3;
                            var2.isFirstMessageVisible = var1;
                            var1 = function(arg0) { // Environment: var1
                                _fun77564: for (var _fun77564_ip = 0;;) switch (_fun77564_ip) {
                                    case 0:
                                        var2 = arg0;
                                        var8 = var2.isAtBottom;
                                        var7 = var2.isNearBottom;
                                        var0 = undefined;
                                        if (!(var7 === var0)) {
                                            _fun77564_ip = 25;
                                            continue _fun77564
                                        }
                                    case 23:
                                        var7 = false;
                                    case 25:
                                        var6 = var2.isNearTop;
                                        if (!(var6 === var0)) {
                                            _fun77564_ip = 37;
                                            continue _fun77564
                                        }
                                    case 35:
                                        var6 = false;
                                    case 37:
                                        var5 = var2.dragging;
                                        if (!(var5 === var0)) {
                                            _fun77564_ip = 49;
                                            continue _fun77564
                                        }
                                    case 47:
                                        var5 = false;
                                    case 49:
                                        var4 = var2.decelerating;
                                        if (!(var4 === var0)) {
                                            _fun77564_ip = 61;
                                            continue _fun77564
                                        }
                                    case 59:
                                        var4 = false;
                                    case 61:
                                        var3 = var2.shouldShowJumpToPresent;
                                        if (!(var3 === var0)) {
                                            _fun77564_ip = 73;
                                            continue _fun77564
                                        }
                                    case 71:
                                        var3 = false;
                                    case 73:
                                        var _closure4_slot0 = var3;
                                        var10 = var2.isFirstMessageVisible;
                                        if (!(var10 === var0)) {
                                            _fun77564_ip = 89;
                                            continue _fun77564
                                        }
                                    case 87:
                                        var10 = false;
                                    case 89:
                                        var9 = _closure2_slot134;
                                        var3 = {};
                                        var3.isAtBottom = var8;
                                        var3.isNearBottom = var7;
                                        var3.isNearTop = var6;
                                        var3.dragging = var5;
                                        var3.decelerating = var4;
                                        var3.isFirstMessageVisible = var10;
                                        var3 = var9.bind(var0)(var3);
                                        if (!var3) {
                                            _fun77564_ip = 213;
                                            continue _fun77564
                                        }
                                    case 136:
                                        var3 = _closure2_slot110;
                                        var2 = {};
                                        var2.isAtBottom = var8;
                                        var2.isNearBottom = var7;
                                        var2.isNearTop = var6;
                                        var2.dragging = var5;
                                        var2.decelerating = var4;
                                        var2 = var3.bind(var0)(var2);
                                        var3 = _closure1_slot0;
                                        var4 = _closure1_slot2;
                                        var2 = 97;
                                        var2 = var4[var2];
                                        var3 = var3.bind(var0)(var2);
                                        var2 = var3.batchUpdates;
                                        var1 = function() { // Environment: var1
                                            _fun77565: for (var _fun77565_ip = 0;;) switch (_fun77565_ip) {
                                                case 0:
                                                    var4 = _closure1_slot13;
                                                    var3 = _closure2_slot7;
                                                    var2 = _closure2_slot2;
                                                    var1 = _closure4_slot0;
                                                    if (var1) {
                                                        _fun77565_ip = 38;
                                                        continue _fun77565
                                                    }
                                                case 28:
                                                    var0 = _closure2_slot6;
                                                    var1 = var0.hasMoreAfter;
                                                case 38:
                                                    var0 = undefined;
                                                    var1 = var4.bind(var0)(var3, var2, var1);
                                                    return var0;
                                            }
                                        };
                                        var1 = var2.bind(var3)(var1);
                                    case 213:
                                        return var0;
                                }
                            };
                            var1 = var1.bind(var0)(var2);
                            var2 = _closure2_slot5;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun77563_ip = 420;
                                continue _fun77563
                            }
                        case 374:
                            var3 = _closure2_slot5;
                            var2 = var3.handleScrollPosition;
                            var1 = {};
                            var7 = _closure2_slot117;
                            var6 = var7.getPreviousRows;
                            var6 = var6.bind(var7)();
                            var1.rows = var6;
                            var1.firstVisibleMessageRowIndex = var5;
                            var1.lastVisibleMessageRowIndex = var4;
                            var1 = var2.bind(var3)(var1);
                        case 420:
                            return var0;
                    }
                };
                var22 = var43.bind(var129)(var22, var39);
                var43 = var129.useMemo;
                var39 = new Array(1);
                var39[0] = var16;
                var16 = function() { // Environment: var0
                    var0 = {};
                    var2 = function arg0() {
                        var2 = _closure2_slot133;
                        var1 = var2.handleTapImage;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapImage = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot133;
                        var1 = var2.handleTapChannel;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapChannel = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot133;
                        var1 = var2.handleLongPressChannel;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleLongPressChannel = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot133;
                        var1 = var2.handleTapAttachmentLink;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapAttachmentLink = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot133;
                        var1 = var2.handleLongPressAttachmentLink;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleLongPressAttachmentLink = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot133;
                        var1 = var2.handleTapCall;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapCall = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot133;
                        var1 = var2.handleTapMention;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapMention = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot133;
                        var1 = var2.handleTapCommandMention;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapCommandMention = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot133;
                        var1 = var2.handleLongPressCommandMention;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleLongPressCommandMention = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot133;
                        var1 = var2.handleTapLink;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapLink = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot133;
                        var1 = var2.handleLongPressLink;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleLongPressLink = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot133;
                        var1 = var2.handleTapReaction;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapReaction = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot133;
                        var1 = var2.handleLongPressReaction;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleLongPressReaction = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot133;
                        var1 = var2.handleOpenSticker;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleOpenSticker = var2;
                    var2 = function arg0() {
                        var3 = _closure2_slot133;
                        var2 = var3.handleOpenProfile;
                        var4 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var0 = 98;
                        var1 = var1[var0];
                        var0 = undefined;
                        var0 = var4.bind(var0)(var1);
                        var0 = var0.AVATAR;
                        var1 = new Array(1);
                        var1[0] = var0;
                        var0 = arg0;
                        var0 = var2.bind(var3)(var0, var1);
                        return var0;
                    };
                    var0.handleTapAvatar = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot133;
                        var1 = var2.handleTapUsername;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapUsername = var2;
                    var2 = function arg0() {
                        var3 = _closure2_slot133;
                        var2 = var3.handleOpenProfile;
                        var4 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var0 = 98;
                        var1 = var1[var0];
                        var0 = undefined;
                        var0 = var4.bind(var0)(var1);
                        var0 = var0.USERNAME;
                        var1 = new Array(1);
                        var1[0] = var0;
                        var0 = arg0;
                        var0 = var2.bind(var3)(var0, var1);
                        return var0;
                    };
                    var0.handleLongPressUsername = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot133;
                        var1 = var2.handleTapThreadEmbed;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapThreadEmbed = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot133;
                        var1 = var2.handleTapReply;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapReply = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot133;
                        var1 = var2.handleTapSummary;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapSummary = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot133;
                        var1 = var2.handleTapSummaryJump;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapSummaryJump = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot133;
                        var1 = var2.handleLongPressMessage;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleLongPressMessage = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot133;
                        var1 = var2.handleInitiateReply;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleInitiateReply = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot133;
                        var1 = var2.handleInitiateEdit;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleInitiateEdit = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot133;
                        var1 = var2.handleInitiateThread;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleInitiateThread = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot133;
                        var1 = var2.handleTapMessage;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapMessage = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot133;
                        var1 = var2.handleTapSeparator;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapSeparator = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot133;
                        var1 = var2.handleDoubleTapMessage;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleDoubleTapMessage = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot133;
                        var1 = var2.handleTapCancelUploadItem;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapCancelUploadItem = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot133;
                        var1 = var2.handleTapInviteEmbedAccept;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapInviteEmbedAccept = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot133;
                        var1 = var2.handleTapInviteEmbed;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapInviteEmbed = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot133;
                        var1 = var2.handleTapJoinActivity;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapJoinActivity = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot133;
                        var1 = var2.handleTapJoinRichPresence;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapJoinRichPresence = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot133;
                        var1 = var2.handleTapGiftCodeEmbed;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapGiftCodeEmbed = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot133;
                        var1 = var2.handleTapGiftCodeAccept;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapGiftCodeAccept = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot133;
                        var1 = var2.handleTapReferralRedeem;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapReferralRedeem = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot133;
                        var1 = var2.handleTapEmoji;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapEmoji = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot133;
                        var1 = var2.handleTapTimestamp;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapTimestamp = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot133;
                        var1 = var2.handleTapInlineCode;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapInlineCode = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot133;
                        var1 = var2.handleTapRoleIcon;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapRoleIcon = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot133;
                        var1 = var2.handleTapGameIcon;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapGameIcon = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot133;
                        var1 = var2.handleTapSuppressNotificationsIcon;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapSuppressNotificationsIcon = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot133;
                        var1 = var2.handleTapConnectionsRoleTag;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapConnectionsRoleTag = var2;
                    var2 = function() {
                        var1 = _closure2_slot133;
                        var0 = var1.handleTapTimeoutIcon;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    var0.handleTapTimeoutIcon = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot133;
                        var1 = var2.handleTapButtonActionComponent;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapButtonActionComponent = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot133;
                        var1 = var2.handleTapSelectActionComponent;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapSelectActionComponent = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot133;
                        var1 = var2.handleTapWelcomeReply;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapWelcomeReply = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot133;
                        var1 = var2.handleTapInviteToSpeak;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapInviteToSpeak = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot133;
                        var1 = var2.handleTapAutoModerationActions;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapAutoModerationActions = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot133;
                        var1 = var2.handleTapAutoModerationFeedback;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapAutoModerationFeedback = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot133;
                        var1 = var2.handleTapFollowForumPost;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapFollowForumPost = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot133;
                        var1 = var2.handleTapShareForumPost;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapShareForumPost = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot133;
                        var1 = var2.handleTapReactionOverflow;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapReactionOverflow = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot133;
                        var1 = var2.handleCopyText;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleCopyText = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot133;
                        var1 = var2.handleTapOpTag;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapOpTag = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot133;
                        var1 = var2.handleTapTag;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapTag = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot133;
                        var1 = var2.handleMediaAttachmentPlaybackStarted;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleMediaAttachmentPlaybackStarted = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot133;
                        var1 = var2.handleMediaAttachmentPlaybackEnded;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleMediaAttachmentPlaybackEnded = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot133;
                        var1 = var2.handleVoiceMessagePlaybackFailed;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handlerVoiceMessagePlaybackFailed = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot133;
                        var1 = var2.handleTapPostPreviewEmbed;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapPostPreviewEmbed = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot133;
                        var1 = var2.handleTapDismissMediaPostSharePrompt;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapDismissMediaPostSharePrompt = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot133;
                        var1 = var2.handleTapChannelPromptButton;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapChannelPromptButton = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot133;
                        var1 = var2.handleTapObscuredMediaLearnMore;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapObscuredMediaLearnMore = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot133;
                        var1 = var2.onTapObscuredMediaToggle;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapObscuredMediaToggle = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot133;
                        var1 = var2.handleTapSafetyPolicyNoticeEmbed;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapSafetyPolicyNoticeEmbed = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot133;
                        var1 = var2.handleTapSafetySystemNotificationCta;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapSafetySystemNotificationCta = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot133;
                        var1 = var2.handleTapPollAnswer;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapPollAnswer = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot133;
                        var1 = var2.handleTapPollSubmitVote;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapPollSubmitVote = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot133;
                        var1 = var2.handleTapPollAction;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapPollAction = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot133;
                        var1 = var2.handleLongPressPollImage;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleLongPressPollImage = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot133;
                        var1 = var2.handleTapCtaButton;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapCtaButton = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot133;
                        var1 = var2.handleMessageAccessibilityAction;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleMessageAccessibilityAction = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot133;
                        var1 = var2.handleTapForwardFooter;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapForwardFooter = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot133;
                        var1 = var2.handleTapInlineForward;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapInlineForward = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot133;
                        var1 = var2.handleTapClanTagChiplet;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapClanTagChiplet = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot133;
                        var1 = var2.handleTapContentInventoryEntryEmbed;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapContentInventoryEntryEmbed = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot133;
                        var1 = var2.handleTapCheckpointCard;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapCheckpointCard = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot133;
                        var1 = var2.handleTapSoundmoji;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapSoundmoji = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot133;
                        var1 = var2.handleTapAppMessageEmbed;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapAppMessageEmbed = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot133;
                        var1 = var2.handleTapPreviewSharedClientTheme;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapSharedClientTheme = var2;
                    var1 = function arg0() {
                        var2 = _closure2_slot133;
                        var1 = var2.handleSharedClientThemeViewed;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleSharedClientThemeViewed = var1;
                    return var0;
                };
                var16 = var43.bind(var129)(var16, var39);
                var66 = var129.useMemo;
                var43 = new Array(86);
                var43[0] = var127;
                var43[1] = var126;
                var43[2] = var123;
                var43[3] = var122;
                var43[4] = var121;
                var43[5] = var118;
                var43[6] = var81;
                var43[7] = var124;
                var43[8] = var103;
                var43[9] = var102;
                var43[10] = var117;
                var43[11] = var70;
                var43[12] = var77;
                var43[13] = var69;
                var43[14] = var80;
                var43[15] = var68;
                var43[16] = var36;
                var43[17] = var75;
                var43[18] = var74;
                var43[19] = var73;
                var43[20] = var78;
                var43[21] = var72;
                var43[22] = var59;
                var43[23] = var105;
                var43[24] = var50;
                var43[25] = var40;
                var43[26] = var57;
                var43[27] = var56;
                var43[28] = var53;
                var43[29] = var52;
                var43[30] = var19;
                var43[31] = var63;
                var43[32] = var61;
                var43[33] = var60;
                var43[34] = var62;
                var43[35] = var58;
                var43[36] = var82;
                var43[37] = var23;
                var43[38] = var79;
                var43[39] = var83;
                var43[40] = var51;
                var43[41] = var49;
                var43[42] = var94;
                var43[43] = var54;
                var43[44] = var55;
                var43[45] = var48;
                var43[46] = var47;
                var43[47] = var42;
                var43[48] = var114;
                var43[49] = var113;
                var43[50] = var112;
                var43[51] = var111;
                var43[52] = var107;
                var43[53] = var96;
                var43[54] = var99;
                var43[55] = var98;
                var43[56] = var97;
                var43[57] = var106;
                var43[58] = var101;
                var43[59] = var100;
                var43[60] = var88;
                var43[61] = var87;
                var43[62] = var86;
                var43[63] = var95;
                var43[64] = var93;
                var43[65] = var92;
                var43[66] = var91;
                var43[67] = var90;
                var43[68] = var89;
                var43[69] = var76;
                var43[70] = var125;
                var43[71] = var116;
                var43[72] = var115;
                var43[73] = var46;
                var43[74] = var120;
                var43[75] = var119;
                var43[76] = var85;
                var43[77] = var84;
                var43[78] = var104;
                var43[79] = var65;
                var43[80] = var45;
                var43[81] = var44;
                var43[82] = var41;
                var43[83] = var109;
                var43[84] = var108;
                var43[85] = var110;
                var39 = function() { // Environment: var0
                    var0 = {};
                    var2 = _closure2_slot62;
                    var0.channelThreadsVersion = var2;
                    var2 = _closure2_slot72;
                    var0.rsvpVersion = var2;
                    var2 = _closure2_slot74;
                    var0.communicationDisabledVersion = var2;
                    var2 = _closure2_slot75;
                    var0.messageAuthorMembers = var2;
                    var2 = _closure2_slot73;
                    var0.failedMessagesVersion = var2;
                    var2 = _closure2_slot65;
                    var0.interactionComponentStatesVersion = var2;
                    var2 = _closure2_slot102;
                    var0.forwardGuildsVersion = var2;
                    var2 = _closure2_slot66;
                    var0.hasLoadedExperiments = var2;
                    var2 = _closure2_slot80;
                    var0.isFollowingForumPost = var2;
                    var2 = _closure2_slot81;
                    var0.showMediaPostSharePrompt = var2;
                    var2 = _closure2_slot93;
                    var0.shouldDisableInteractiveComponents = var2;
                    var2 = _closure2_slot49;
                    var0.isCallActive = var2;
                    var2 = _closure2_slot50;
                    var0.voiceStateChannelId = var2;
                    var2 = _closure2_slot55;
                    var0.participantsLength = var2;
                    var2 = _closure2_slot44;
                    var0.editingMessageId = var2;
                    var2 = _closure2_slot45;
                    var0.replyingMessageId = var2;
                    var2 = _closure2_slot46;
                    var0.oldestUnreadMessageId = var2;
                    var2 = _closure2_slot67;
                    var0.isSpamMessageRequest = var2;
                    var2 = _closure2_slot68;
                    var0.isMessageRequest = var2;
                    var2 = _closure2_slot77;
                    var0.currentUserCommunicationDisabled = var2;
                    var2 = _closure2_slot84;
                    var0.androidKeyboardHeight = var2;
                    var2 = _closure2_slot76;
                    var0.renderCommunicationDisabled = var2;
                    var2 = _closure2_slot103;
                    var0.guildInviteColorsFetched = var2;
                    var2 = _closure2_slot83;
                    var0.lazyCacheStatus = var2;
                    var2 = _closure2_slot113;
                    var0.shouldForceRender = var2;
                    var2 = _closure2_slot70;
                    var0.isMessagesCached = var2;
                    var2 = _closure2_slot104;
                    var0.guildEmojis = var2;
                    var2 = _closure2_slot20;
                    var0.enableSwipeActions = var2;
                    var2 = _closure2_slot12;
                    var0.inlineAttachmentMedia = var2;
                    var2 = _closure2_slot13;
                    var0.inlineEmbedMedia = var2;
                    var2 = _closure2_slot14;
                    var0.renderEmbeds = var2;
                    var2 = _closure2_slot15;
                    var0.renderReactions = var2;
                    var2 = _closure2_slot16;
                    var0.animateEmoji = var2;
                    var2 = _closure2_slot17;
                    var0.animateStickers = var2;
                    var2 = _closure2_slot18;
                    var0.gifAutoPlay = var2;
                    var2 = _closure2_slot21;
                    var0.timestampHourCycle = var2;
                    var2 = _closure2_slot98;
                    var0.containerWidth = var2;
                    var2 = _closure2_slot10;
                    var0.guildSystemChannelFlags = var2;
                    var2 = _closure2_slot78;
                    var0.userSettingsLocale = var2;
                    var2 = _closure2_slot59;
                    var0.roleStyle = var2;
                    var2 = _closure2_slot48;
                    var0.canSendMessages = var2;
                    var2 = _closure2_slot82;
                    var0.showPushFeedback = var2;
                    var2 = _closure2_slot87;
                    var0.selectedSummary = var2;
                    var2 = _closure2_slot91;
                    var0.shouldObscureSpoiler = var2;
                    var2 = _closure2_slot97;
                    var0.explicitMediaFalsePositiveInfo = var2;
                    var2 = _closure2_slot101;
                    var0.isStaff = var2;
                    var2 = _closure2_slot92;
                    var0.isAgeVerified = var2;
                    var2 = _closure2_slot19;
                    var0.theme = var2;
                    var2 = _closure2_slot60;
                    var0.saturation = var2;
                    var2 = _closure2_slot61;
                    var0.displayNameStylesEnabled = var2;
                    var2 = _closure2_slot30;
                    var0.activityInstanceIds = var2;
                    var2 = _closure2_slot32;
                    var0.activityParticipants = var2;
                    var2 = _closure2_slot31;
                    var0.activityInstancePresenceDetails = var2;
                    var2 = _closure2_slot33;
                    var0.messagesWithActivitiesLaunching = var2;
                    var2 = _closure2_slot28;
                    var0.invalidApplicationIds = var2;
                    var2 = _closure2_slot29;
                    var0.applicationAssetFetchingIds = var2;
                    var2 = _closure2_slot25;
                    var0.appDirectoryEmbedApplications = var2;
                    var2 = _closure2_slot26;
                    var0.invalidAppDirectoryEmbedApplicationIds = var2;
                    var2 = _closure2_slot27;
                    var0.appDirectoryEmbedApplicationFetchStates = var2;
                    var2 = _closure2_slot41;
                    var0.referralTrialOfferIds = var2;
                    var2 = _closure2_slot22;
                    var0.messageAuthorActivities = var2;
                    var2 = _closure2_slot23;
                    var0.activityInviteMessageIds = var2;
                    var2 = _closure2_slot52;
                    var0.resolvingGiftCodes = var2;
                    var2 = _closure2_slot53;
                    var0.resolvedGiftCodes = var2;
                    var2 = _closure2_slot54;
                    var0.acceptingGiftCodes = var2;
                    var2 = _closure2_slot34;
                    var0.mediaPostPreviewEmbeds = var2;
                    var2 = _closure2_slot35;
                    var0.guildTemplates = var2;
                    var2 = _closure2_slot36;
                    var0.buildOverrides = var2;
                    var2 = _closure2_slot37;
                    var0.experimentEmbeds = var2;
                    var2 = _closure2_slot38;
                    var0.quests = var2;
                    var2 = _closure2_slot39;
                    var0.isFetchingCurrentQuests = var2;
                    var2 = _closure2_slot24;
                    var0.invites = var2;
                    var2 = _closure2_slot57;
                    var0.repliedIds = var2;
                    var2 = _closure2_slot94;
                    var0.channelPolls = var2;
                    var2 = _closure2_slot96;
                    var0.messageReferencePolls = var2;
                    var2 = _closure2_slot99;
                    var0.unloadedContentEntryMessageIds = var2;
                    var2 = _closure2_slot63;
                    var0.interactionStates = var2;
                    var2 = _closure2_slot64;
                    var0.interactionComponentStates = var2;
                    var2 = _closure2_slot42;
                    var0.trialOffer = var2;
                    var2 = _closure2_slot43;
                    var0.isPremiumTier2User = var2;
                    var2 = _closure2_slot51;
                    var0.threadStartingReferenceMessage = var2;
                    var2 = _closure2_slot56;
                    var0.uploads = var2;
                    var2 = _closure2_slot88;
                    var0.currentUserDisplayNameStyles = var2;
                    var2 = _closure2_slot105;
                    var0.currentClientVoiceChannelId = var2;
                    var2 = _closure2_slot106;
                    var0.selfActivities = var2;
                    var1 = _closure2_slot107;
                    var0.activityLaunchJoinStates = var1;
                    return var0;
                };
                var43 = var66.bind(var129)(var39, var43);
                var66 = 99;
                var39 = var130[var66];
                var39 = var67.bind(var3)(var39);
                var43 = var39.bind(var3)(var43);
                var _closure2_slot135 = var43;
                var39 = var130[var66];
                var39 = var67.bind(var3)(var39);
                var129 = var39.bind(var3)(var9);
                var _closure2_slot136 = var129;
                var39 = var130[var66];
                var39 = var67.bind(var3)(var39);
                var39 = var39.bind(var3)(var131);
                var _closure2_slot137 = var39;
                var66 = var130[var66];
                var66 = var67.bind(var3)(var66);
                var66 = var66.bind(var3)(var8);
                var _closure2_slot138 = var66;
                var67 = var128;
                if (!var67) {
                    _fun77468_ip = 5529;
                    continue _fun77468
                }
            case 5526:
                var67 = !var40;
            case 5529:
                if (!var67) {
                    _fun77468_ip = 5550;
                    continue _fun77468
                }
            case 5532:
                var130 = var4 == var43;
                var40 = undefined;
                if (var130) {
                    _fun77468_ip = 5547;
                    continue _fun77468
                }
            case 5541:
                var40 = var43.isMessagesCached;
            case 5547:
                var67 = var40;
            case 5550:
                var _closure2_slot139 = var67;
                var40 = _closure1_slot5;
                var133 = var40.useEffect;
                var130 = new Array(7);
                var130[0] = var7;
                var130[1] = var9;
                var130[2] = var37;
                var130[3] = var8;
                var130[4] = var36;
                var130[5] = var129;
                var130[6] = var34;
                var129 = function() { // Environment: var0
                    _fun77649: for (var _fun77649_ip = 0;;) switch (_fun77649_ip) {
                        case 0:
                            var0 = _closure2_slot136;
                            var2 = null;
                            var1 = var2 != var0;
                            if (!var1) {
                                _fun77649_ip = 28;
                                continue _fun77649
                            }
                        case 16:
                            var4 = _closure2_slot136;
                            var0 = _closure2_slot7;
                            var1 = var4 !== var0;
                        case 28:
                            var0 = _closure2_slot136;
                            var0 = var2 == var0;
                            if (!var1) {
                                _fun77649_ip = 87;
                                continue _fun77649
                            }
                        case 39:
                            var2 = _closure2_slot130;
                            var5 = undefined;
                            var2 = var2.bind(var5)();
                            var4 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var2 = 73;
                            var2 = var6[var2];
                            var5 = var4.bind(var5)(var2);
                            var4 = var5.clearChannelDimensions;
                            var2 = _closure2_slot7;
                            var2 = var4.bind(var5)(var2);
                        case 87:
                            if (var0) {
                                _fun77649_ip = 93;
                                continue _fun77649
                            }
                        case 90:
                            var0 = var1;
                        case 93:
                            if (!var0) {
                                _fun77649_ip = 226;
                                continue _fun77649
                            }
                        case 99:
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var4 = 85;
                            var0 = var7[var4];
                            var5 = undefined;
                            var2 = var6.bind(var5)(var0);
                            var1 = var2.startOrCancelChannelLatestMessagesLoad;
                            var0 = {};
                            var8 = _closure2_slot6;
                            var8 = var8.jumpTargetId;
                            var0.jumpTargetId = var8;
                            var8 = _closure2_slot46;
                            var0.oldestUnreadMessageId = var8;
                            var4 = var7[var4];
                            var9 = var6.bind(var5)(var4);
                            var8 = var9.shouldJumpToOriginalPost;
                            var13 = _closure2_slot1;
                            var12 = _closure2_slot7;
                            var11 = _closure2_slot6;
                            var10 = _closure2_slot114;
                            var14 = var9;
                            var4 = var14[var8](var13, var12, var11, var10, var9);
                            var0.shouldJumpToOriginalPost = var4;
                            var4 = _closure2_slot7;
                            var0.channelId = var4;
                            var3 = _closure2_slot120;
                            var3 = var3.current;
                            var0.tracker = var3;
                            var0 = var1.bind(var2)(var0);
                        case 226:
                            var0 = undefined;
                            return var0;
                    }
                };
                var129 = var133.bind(var40)(var129, var130);
                var130 = _closure1_slot0;
                var129 = _closure1_slot2;
                var129 = var129[var132];
                var132 = var130.bind(var3)(var129);
                var130 = var132.useMessagesLifecycle;
                var129 = {};
                var129.messages = var8;
                var129.isMessagesReady = var128;
                var129.oldestUnreadMessageId = var36;
                var129.channelId = var9;
                var129.screenIndex = var17;
                var129.updateRows = var21;
                var129.scrollToMessageId = var38;
                var129 = var130.bind(var132)(var129);
                var130 = var40.useEffect;
                var129 = new Array(3);
                var129[0] = var131;
                var129[1] = var39;
                var129[2] = var14;
                var39 = function() { // Environment: var0
                    _fun77650: for (var _fun77650_ip = 0;;) switch (_fun77650_ip) {
                        case 0:
                            var1 = _closure2_slot137;
                            var1 = !var1;
                            if (!var1) {
                                _fun77650_ip = 17;
                                continue _fun77650
                            }
                        case 13:
                            var1 = _closure2_slot71;
                        case 17:
                            if (!var1) {
                                _fun77650_ip = 40;
                                continue _fun77650
                            }
                        case 20:
                            var2 = _closure2_slot110;
                            var1 = {};
                            var0 = false;
                            var1.hasHandledScroll = var0;
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                        case 40:
                            var0 = undefined;
                            return var0;
                    }
                };
                var39 = var130.bind(var40)(var39, var129);
                var129 = var40.useEffect;
                var39 = new Array(8);
                var39[0] = var7;
                var39[1] = var9;
                var39[2] = var8;
                var39[3] = var37;
                var39[4] = var31;
                var39[5] = var66;
                var39[6] = var128;
                var39[7] = var32;
                var32 = function() { // Environment: var0
                    _fun77651: for (var _fun77651_ip = 0;;) switch (_fun77651_ip) {
                        case 0:
                            var3 = _closure1_slot0;
                            var0 = _closure1_slot2;
                            var4 = 85;
                            var1 = var0[var4];
                            var0 = undefined;
                            var9 = var3.bind(var0)(var1);
                            var8 = var9.shouldJumpToOriginalPost;
                            var13 = _closure2_slot1;
                            var12 = _closure2_slot7;
                            var11 = _closure2_slot6;
                            var10 = _closure2_slot114;
                            var14 = var9;
                            var3 = var14[var8](var13, var12, var11, var10, var9);
                            if (!var3) {
                                _fun77651_ip = 163;
                                continue _fun77651
                            }
                        case 60:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var2 = var2[var4];
                            var6 = var3.bind(var0)(var2);
                            var5 = var6.scrollToTop;
                            var4 = _closure2_slot108;
                            var3 = _closure2_slot58;
                            var2 = false;
                            var2 = var5.bind(var6)(var4, var3, var2);
                            var2 = _closure2_slot138;
                            var4 = null;
                            var2 = var4 == var2;
                            var3 = undefined;
                            if (var2) {
                                _fun77651_ip = 125;
                                continue _fun77651
                            }
                        case 115:
                            var2 = _closure2_slot138;
                            var3 = var2.jumpSequenceId;
                        case 125:
                            var2 = _closure2_slot6;
                            var4 = var4 == var2;
                            var2 = undefined;
                            if (var4) {
                                _fun77651_ip = 148;
                                continue _fun77651
                            }
                        case 138:
                            var4 = _closure2_slot6;
                            var2 = var4.jumpSequenceId;
                        case 148:
                            if (!(var3 === var2)) {
                                _fun77651_ip = 163;
                                continue _fun77651
                            }
                        case 152:
                            var2 = _closure2_slot115;
                            var1 = true;
                            var1 = var2.bind(var0)(var1);
                        case 163:
                            return var0;
                    }
                };
                var32 = var129.bind(var40)(var32, var39);
                var39 = var40.useEffect;
                var32 = new Array(182);
                var32[0] = var128;
                var32[1] = var8;
                var32[2] = var127;
                var32[3] = var126;
                var32[4] = var125;
                var32[5] = var124;
                var32[6] = var123;
                var32[7] = var122;
                var32[8] = var121;
                var32[9] = var120;
                var32[10] = var119;
                var32[11] = var118;
                var32[12] = var117;
                var32[13] = var116;
                var32[14] = var115;
                var32[15] = var114;
                var32[16] = var113;
                var32[17] = var112;
                var32[18] = var111;
                var32[19] = var110;
                var32[20] = var109;
                var32[21] = var108;
                var32[22] = var107;
                var32[23] = var106;
                var32[24] = var105;
                var32[25] = var104;
                var32[26] = var103;
                var32[27] = var102;
                var32[28] = var101;
                var32[29] = var100;
                var32[30] = var99;
                var32[31] = var98;
                var32[32] = var97;
                var32[33] = var96;
                var32[34] = var95;
                var32[35] = var94;
                var32[36] = var93;
                var32[37] = var92;
                var32[38] = var91;
                var32[39] = var90;
                var32[40] = var89;
                var32[41] = var88;
                var32[42] = var87;
                var32[43] = var86;
                var32[44] = var85;
                var32[45] = var84;
                var32[46] = var83;
                var32[47] = var82;
                var32[48] = var81;
                var32[49] = var80;
                var32[50] = var79;
                var32[51] = var78;
                var32[52] = var77;
                var32[53] = var76;
                var32[54] = var75;
                var32[55] = var74;
                var32[56] = var73;
                var32[57] = var72;
                var32[58] = var71;
                var32[59] = var11;
                var32[60] = var9;
                var32[61] = var7;
                var32[62] = var21;
                var32[63] = var70;
                var32[64] = var69;
                var32[65] = var68;
                var69 = var4 == var43;
                var68 = undefined;
                if (var69) {
                    _fun77468_ip = 6048;
                    continue _fun77468
                }
            case 6042:
                var68 = var43.channelThreadsVersion;
            case 6048:
                var32[66] = var68;
                var69 = var4 == var43;
                var68 = undefined;
                if (var69) {
                    _fun77468_ip = 6067;
                    continue _fun77468
                }
            case 6061:
                var68 = var43.rsvpVersion;
            case 6067:
                var32[67] = var68;
                var69 = var4 == var43;
                var68 = undefined;
                if (var69) {
                    _fun77468_ip = 6086;
                    continue _fun77468
                }
            case 6080:
                var68 = var43.repliedIds;
            case 6086:
                var32[68] = var68;
                var69 = var4 == var43;
                var68 = undefined;
                if (var69) {
                    _fun77468_ip = 6105;
                    continue _fun77468
                }
            case 6099:
                var68 = var43.hasLoadedExperiments;
            case 6105:
                var32[69] = var68;
                var69 = var4 == var43;
                var68 = undefined;
                if (var69) {
                    _fun77468_ip = 6124;
                    continue _fun77468
                }
            case 6118:
                var68 = var43.communicationDisabledVersion;
            case 6124:
                var32[70] = var68;
                var69 = var4 == var43;
                var68 = undefined;
                if (var69) {
                    _fun77468_ip = 6143;
                    continue _fun77468
                }
            case 6137:
                var68 = var43.messageAuthorMembers;
            case 6143:
                var32[71] = var68;
                var69 = var4 == var43;
                var68 = undefined;
                if (var69) {
                    _fun77468_ip = 6162;
                    continue _fun77468
                }
            case 6156:
                var68 = var43.failedMessagesVersion;
            case 6162:
                var32[72] = var68;
                var69 = var4 == var43;
                var68 = undefined;
                if (var69) {
                    _fun77468_ip = 6181;
                    continue _fun77468
                }
            case 6175:
                var68 = var43.interactionStates;
            case 6181:
                var32[73] = var68;
                var69 = var4 == var43;
                var68 = undefined;
                if (var69) {
                    _fun77468_ip = 6200;
                    continue _fun77468
                }
            case 6194:
                var68 = var43.interactionComponentStates;
            case 6200:
                var32[74] = var68;
                var69 = var4 == var43;
                var68 = undefined;
                if (var69) {
                    _fun77468_ip = 6219;
                    continue _fun77468
                }
            case 6213:
                var68 = var43.interactionComponentStatesVersion;
            case 6219:
                var32[75] = var68;
                var69 = var4 == var43;
                var68 = undefined;
                if (var69) {
                    _fun77468_ip = 6238;
                    continue _fun77468
                }
            case 6232:
                var68 = var43.shouldDisableInteractiveComponents;
            case 6238:
                var32[76] = var68;
                var69 = var4 == var43;
                var68 = undefined;
                if (var69) {
                    _fun77468_ip = 6257;
                    continue _fun77468
                }
            case 6251:
                var68 = var43.channelPolls;
            case 6257:
                var32[77] = var68;
                var69 = var4 == var43;
                var68 = undefined;
                if (var69) {
                    _fun77468_ip = 6276;
                    continue _fun77468
                }
            case 6270:
                var68 = var43.messageReferencePolls;
            case 6276:
                var32[78] = var68;
                var69 = var4 == var43;
                var68 = undefined;
                if (var69) {
                    _fun77468_ip = 6295;
                    continue _fun77468
                }
            case 6289:
                var68 = var43.activityInstanceIds;
            case 6295:
                var32[79] = var68;
                var69 = var4 == var43;
                var68 = undefined;
                if (var69) {
                    _fun77468_ip = 6314;
                    continue _fun77468
                }
            case 6308:
                var68 = var43.activityParticipants;
            case 6314:
                var32[80] = var68;
                var69 = var4 == var43;
                var68 = undefined;
                if (var69) {
                    _fun77468_ip = 6333;
                    continue _fun77468
                }
            case 6327:
                var68 = var43.activityInstancePresenceDetails;
            case 6333:
                var32[81] = var68;
                var69 = var4 == var43;
                var68 = undefined;
                if (var69) {
                    _fun77468_ip = 6352;
                    continue _fun77468
                }
            case 6346:
                var68 = var43.messagesWithActivitiesLaunching;
            case 6352:
                var32[82] = var68;
                var69 = var4 == var43;
                var68 = undefined;
                if (var69) {
                    _fun77468_ip = 6371;
                    continue _fun77468
                }
            case 6365:
                var68 = var43.activityLaunchJoinStates;
            case 6371:
                var32[83] = var68;
                var69 = var4 == var43;
                var68 = undefined;
                if (var69) {
                    _fun77468_ip = 6390;
                    continue _fun77468
                }
            case 6384:
                var68 = var43.currentClientVoiceChannelId;
            case 6390:
                var32[84] = var68;
                var69 = var4 == var43;
                var68 = undefined;
                if (var69) {
                    _fun77468_ip = 6409;
                    continue _fun77468
                }
            case 6403:
                var68 = var43.selfActivities;
            case 6409:
                var32[85] = var68;
                var69 = var4 == var43;
                var68 = undefined;
                if (var69) {
                    _fun77468_ip = 6428;
                    continue _fun77468
                }
            case 6422:
                var68 = var43.invalidApplicationIds;
            case 6428:
                var32[86] = var68;
                var69 = var4 == var43;
                var68 = undefined;
                if (var69) {
                    _fun77468_ip = 6447;
                    continue _fun77468
                }
            case 6441:
                var68 = var43.applicationAssetFetchingIds;
            case 6447:
                var32[87] = var68;
                var69 = var4 == var43;
                var68 = undefined;
                if (var69) {
                    _fun77468_ip = 6466;
                    continue _fun77468
                }
            case 6460:
                var68 = var43.appDirectoryEmbedApplications;
            case 6466:
                var32[88] = var68;
                var69 = var4 == var43;
                var68 = undefined;
                if (var69) {
                    _fun77468_ip = 6485;
                    continue _fun77468
                }
            case 6479:
                var68 = var43.invalidAppDirectoryEmbedApplicationIds;
            case 6485:
                var32[89] = var68;
                var69 = var4 == var43;
                var68 = undefined;
                if (var69) {
                    _fun77468_ip = 6504;
                    continue _fun77468
                }
            case 6498:
                var68 = var43.appDirectoryEmbedApplicationFetchStates;
            case 6504:
                var32[90] = var68;
                var69 = var4 == var43;
                var68 = undefined;
                if (var69) {
                    _fun77468_ip = 6523;
                    continue _fun77468
                }
            case 6517:
                var68 = var43.lazyCacheStatus;
            case 6523:
                var32[91] = var68;
                var69 = var4 == var43;
                var68 = undefined;
                if (var69) {
                    _fun77468_ip = 6542;
                    continue _fun77468
                }
            case 6536:
                var68 = var43.isFollowingForumPost;
            case 6542:
                var32[92] = var68;
                var69 = var4 == var43;
                var68 = undefined;
                if (var69) {
                    _fun77468_ip = 6561;
                    continue _fun77468
                }
            case 6555:
                var68 = var43.showMediaPostSharePrompt;
            case 6561:
                var32[93] = var68;
                var69 = var4 == var43;
                var68 = undefined;
                if (var69) {
                    _fun77468_ip = 6580;
                    continue _fun77468
                }
            case 6574:
                var68 = var43.referralTrialOfferIds;
            case 6580:
                var32[94] = var68;
                var69 = var4 == var43;
                var68 = undefined;
                if (var69) {
                    _fun77468_ip = 6599;
                    continue _fun77468
                }
            case 6593:
                var68 = var43.trialOffer;
            case 6599:
                var32[95] = var68;
                var69 = var4 == var43;
                var68 = undefined;
                if (var69) {
                    _fun77468_ip = 6618;
                    continue _fun77468
                }
            case 6612:
                var68 = var43.isPremiumTier2User;
            case 6618:
                var32[96] = var68;
                var69 = var4 == var43;
                var68 = undefined;
                if (var69) {
                    _fun77468_ip = 6637;
                    continue _fun77468
                }
            case 6631:
                var68 = var43.messageAuthorActivities;
            case 6637:
                var32[97] = var68;
                var69 = var4 == var43;
                var68 = undefined;
                if (var69) {
                    _fun77468_ip = 6656;
                    continue _fun77468
                }
            case 6650:
                var68 = var43.activityInviteMessageIds;
            case 6656:
                var32[98] = var68;
                var69 = var4 == var43;
                var68 = undefined;
                if (var69) {
                    _fun77468_ip = 6675;
                    continue _fun77468
                }
            case 6669:
                var68 = var43.resolvingGiftCodes;
            case 6675:
                var32[99] = var68;
                var69 = var4 == var43;
                var68 = undefined;
                if (var69) {
                    _fun77468_ip = 6694;
                    continue _fun77468
                }
            case 6688:
                var68 = var43.resolvedGiftCodes;
            case 6694:
                var32[100] = var68;
                var69 = var4 == var43;
                var68 = undefined;
                if (var69) {
                    _fun77468_ip = 6713;
                    continue _fun77468
                }
            case 6707:
                var68 = var43.acceptingGiftCodes;
            case 6713:
                var32[101] = var68;
                var69 = var4 == var43;
                var68 = undefined;
                if (var69) {
                    _fun77468_ip = 6732;
                    continue _fun77468
                }
            case 6726:
                var68 = var43.mediaPostPreviewEmbeds;
            case 6732:
                var32[102] = var68;
                var69 = var4 == var43;
                var68 = undefined;
                if (var69) {
                    _fun77468_ip = 6751;
                    continue _fun77468
                }
            case 6745:
                var68 = var43.explicitMediaFalsePositiveInfo;
            case 6751:
                var32[103] = var68;
                var69 = var4 == var43;
                var68 = undefined;
                if (var69) {
                    _fun77468_ip = 6770;
                    continue _fun77468
                }
            case 6764:
                var68 = var43.guildTemplates;
            case 6770:
                var32[104] = var68;
                var69 = var4 == var43;
                var68 = undefined;
                if (var69) {
                    _fun77468_ip = 6789;
                    continue _fun77468
                }
            case 6783:
                var68 = var43.buildOverrides;
            case 6789:
                var32[105] = var68;
                var69 = var4 == var43;
                var68 = undefined;
                if (var69) {
                    _fun77468_ip = 6808;
                    continue _fun77468
                }
            case 6802:
                var68 = var43.experimentEmbeds;
            case 6808:
                var32[106] = var68;
                var69 = var4 == var43;
                var68 = undefined;
                if (var69) {
                    _fun77468_ip = 6827;
                    continue _fun77468
                }
            case 6821:
                var68 = var43.quests;
            case 6827:
                var32[107] = var68;
                var69 = var4 == var43;
                var68 = undefined;
                if (var69) {
                    _fun77468_ip = 6846;
                    continue _fun77468
                }
            case 6840:
                var68 = var43.isFetchingCurrentQuests;
            case 6846:
                var32[108] = var68;
                var69 = var4 == var43;
                var68 = undefined;
                if (var69) {
                    _fun77468_ip = 6865;
                    continue _fun77468
                }
            case 6859:
                var68 = var43.showPushFeedback;
            case 6865:
                var32[109] = var68;
                var69 = var4 == var43;
                var68 = undefined;
                if (var69) {
                    _fun77468_ip = 6884;
                    continue _fun77468
                }
            case 6878:
                var68 = var43.forwardGuildsVersion;
            case 6884:
                var32[110] = var68;
                var69 = var4 == var43;
                var68 = undefined;
                if (var69) {
                    _fun77468_ip = 6903;
                    continue _fun77468
                }
            case 6897:
                var68 = var43.renderCommunicationDisabled;
            case 6903:
                var32[111] = var68;
                var69 = var4 == var43;
                var68 = undefined;
                if (var69) {
                    _fun77468_ip = 6922;
                    continue _fun77468
                }
            case 6916:
                var68 = var43.editingMessageId;
            case 6922:
                var32[112] = var68;
                var69 = var4 == var43;
                var68 = undefined;
                if (var69) {
                    _fun77468_ip = 6941;
                    continue _fun77468
                }
            case 6935:
                var68 = var43.replyingMessageId;
            case 6941:
                var32[113] = var68;
                var69 = var4 == var43;
                var68 = undefined;
                if (var69) {
                    _fun77468_ip = 6960;
                    continue _fun77468
                }
            case 6954:
                var68 = var43.oldestUnreadMessageId;
            case 6960:
                var32[114] = var68;
                var69 = var4 == var43;
                var68 = undefined;
                if (var69) {
                    _fun77468_ip = 6979;
                    continue _fun77468
                }
            case 6973:
                var68 = var43.isCallActive;
            case 6979:
                var32[115] = var68;
                var69 = var4 == var43;
                var68 = undefined;
                if (var69) {
                    _fun77468_ip = 6998;
                    continue _fun77468
                }
            case 6992:
                var68 = var43.voiceStateChannelId;
            case 6998:
                var32[116] = var68;
                var69 = var4 == var43;
                var68 = undefined;
                if (var69) {
                    _fun77468_ip = 7017;
                    continue _fun77468
                }
            case 7011:
                var68 = var43.participantsLength;
            case 7017:
                var32[117] = var68;
                var69 = var4 == var43;
                var68 = undefined;
                if (var69) {
                    _fun77468_ip = 7036;
                    continue _fun77468
                }
            case 7030:
                var68 = var43.invites;
            case 7036:
                var32[118] = var68;
                var69 = var4 == var43;
                var68 = undefined;
                if (var69) {
                    _fun77468_ip = 7055;
                    continue _fun77468
                }
            case 7049:
                var68 = var43.isSpamMessageRequest;
            case 7055:
                var32[119] = var68;
                var69 = var4 == var43;
                var68 = undefined;
                if (var69) {
                    _fun77468_ip = 7074;
                    continue _fun77468
                }
            case 7068:
                var68 = var43.isMessageRequest;
            case 7074:
                var32[120] = var68;
                var69 = var4 == var43;
                var68 = undefined;
                if (var69) {
                    _fun77468_ip = 7093;
                    continue _fun77468
                }
            case 7087:
                var68 = var43.currentUserCommunicationDisabled;
            case 7093:
                var32[121] = var68;
                var69 = var4 == var43;
                var68 = undefined;
                if (var69) {
                    _fun77468_ip = 7112;
                    continue _fun77468
                }
            case 7106:
                var68 = var43.androidKeyboardHeight;
            case 7112:
                var32[122] = var68;
                var69 = var4 == var43;
                var68 = undefined;
                if (var69) {
                    _fun77468_ip = 7131;
                    continue _fun77468
                }
            case 7125:
                var68 = var43.inlineAttachmentMedia;
            case 7131:
                var32[123] = var68;
                var69 = var4 == var43;
                var68 = undefined;
                if (var69) {
                    _fun77468_ip = 7150;
                    continue _fun77468
                }
            case 7144:
                var68 = var43.inlineEmbedMedia;
            case 7150:
                var32[124] = var68;
                var69 = var4 == var43;
                var68 = undefined;
                if (var69) {
                    _fun77468_ip = 7169;
                    continue _fun77468
                }
            case 7163:
                var68 = var43.renderEmbeds;
            case 7169:
                var32[125] = var68;
                var69 = var4 == var43;
                var68 = undefined;
                if (var69) {
                    _fun77468_ip = 7188;
                    continue _fun77468
                }
            case 7182:
                var68 = var43.renderReactions;
            case 7188:
                var32[126] = var68;
                var69 = var4 == var43;
                var68 = undefined;
                if (var69) {
                    _fun77468_ip = 7207;
                    continue _fun77468
                }
            case 7201:
                var68 = var43.animateEmoji;
            case 7207:
                var32[127] = var68;
                var69 = var4 == var43;
                var68 = undefined;
                if (var69) {
                    _fun77468_ip = 7226;
                    continue _fun77468
                }
            case 7220:
                var68 = var43.animateStickers;
            case 7226:
                var32[128] = var68;
                var69 = var4 == var43;
                var68 = undefined;
                if (var69) {
                    _fun77468_ip = 7245;
                    continue _fun77468
                }
            case 7239:
                var68 = var43.gifAutoPlay;
            case 7245:
                var32[129] = var68;
                var69 = var4 == var43;
                var68 = undefined;
                if (var69) {
                    _fun77468_ip = 7264;
                    continue _fun77468
                }
            case 7258:
                var68 = var43.containerWidth;
            case 7264:
                var32[130] = var68;
                var69 = var4 == var43;
                var68 = undefined;
                if (var69) {
                    _fun77468_ip = 7283;
                    continue _fun77468
                }
            case 7277:
                var68 = var43.timestampHourCycle;
            case 7283:
                var32[131] = var68;
                var69 = var4 == var43;
                var68 = undefined;
                if (var69) {
                    _fun77468_ip = 7302;
                    continue _fun77468
                }
            case 7296:
                var68 = var43.guildSystemChannelFlags;
            case 7302:
                var32[132] = var68;
                var69 = var4 == var43;
                var68 = undefined;
                if (var69) {
                    _fun77468_ip = 7321;
                    continue _fun77468
                }
            case 7315:
                var68 = var43.userSettingsLocale;
            case 7321:
                var32[133] = var68;
                var69 = var4 == var43;
                var68 = undefined;
                if (var69) {
                    _fun77468_ip = 7340;
                    continue _fun77468
                }
            case 7334:
                var68 = var43.roleStyle;
            case 7340:
                var32[134] = var68;
                var69 = var4 == var43;
                var68 = undefined;
                if (var69) {
                    _fun77468_ip = 7359;
                    continue _fun77468
                }
            case 7353:
                var68 = var43.canSendMessages;
            case 7359:
                var32[135] = var68;
                var69 = var4 == var43;
                var68 = undefined;
                if (var69) {
                    _fun77468_ip = 7378;
                    continue _fun77468
                }
            case 7372:
                var68 = var43.selectedSummary;
            case 7378:
                var32[136] = var68;
                var69 = var4 == var43;
                var68 = undefined;
                if (var69) {
                    _fun77468_ip = 7397;
                    continue _fun77468
                }
            case 7391:
                var68 = var43.shouldObscureSpoiler;
            case 7397:
                var32[137] = var68;
                var69 = var4 == var43;
                var68 = undefined;
                if (var69) {
                    _fun77468_ip = 7416;
                    continue _fun77468
                }
            case 7410:
                var68 = var43.isStaff;
            case 7416:
                var32[138] = var68;
                var69 = var4 == var43;
                var68 = undefined;
                if (var69) {
                    _fun77468_ip = 7435;
                    continue _fun77468
                }
            case 7429:
                var68 = var43.isAgeVerified;
            case 7435:
                var32[139] = var68;
                var69 = var4 == var43;
                var68 = undefined;
                if (var69) {
                    _fun77468_ip = 7454;
                    continue _fun77468
                }
            case 7448:
                var68 = var43.theme;
            case 7454:
                var32[140] = var68;
                var69 = var4 == var43;
                var68 = undefined;
                if (var69) {
                    _fun77468_ip = 7473;
                    continue _fun77468
                }
            case 7467:
                var68 = var43.saturation;
            case 7473:
                var32[141] = var68;
                var69 = var4 == var43;
                var68 = undefined;
                if (var69) {
                    _fun77468_ip = 7492;
                    continue _fun77468
                }
            case 7486:
                var68 = var43.threadStartingReferenceMessage;
            case 7492:
                var32[142] = var68;
                var69 = var4 == var43;
                var68 = undefined;
                if (var69) {
                    _fun77468_ip = 7511;
                    continue _fun77468
                }
            case 7505:
                var68 = var43.unloadedContentEntryMessageIds;
            case 7511:
                var32[143] = var68;
                var69 = var4 == var43;
                var68 = undefined;
                if (var69) {
                    _fun77468_ip = 7530;
                    continue _fun77468
                }
            case 7524:
                var68 = var43.guildInviteColorsFetched;
            case 7530:
                var32[144] = var68;
                var32[145] = var67;
                var32[146] = var66;
                var66 = var30.isAtBottom;
                var32[147] = var66;
                var32[148] = var65;
                var66 = var4 == var43;
                var65 = undefined;
                if (var66) {
                    _fun77468_ip = 7571;
                    continue _fun77468
                }
            case 7565:
                var65 = var43.uploads;
            case 7571:
                var32[149] = var65;
                var32[150] = var64;
                var32[151] = var19;
                var32[152] = var63;
                var32[153] = var62;
                var32[154] = var61;
                var32[155] = var60;
                var32[156] = var59;
                var32[157] = var58;
                var32[158] = var57;
                var32[159] = var56;
                var32[160] = var55;
                var32[161] = var54;
                var32[162] = var36;
                var55 = var4 == var43;
                var54 = undefined;
                if (var55) {
                    _fun77468_ip = 7642;
                    continue _fun77468
                }
            case 7636:
                var54 = var43.shouldForceRender;
            case 7642:
                var32[163] = var54;
                var32[164] = var53;
                var32[165] = var52;
                var32[166] = var23;
                var32[167] = var51;
                var32[168] = var50;
                var32[169] = var49;
                var32[170] = var48;
                var32[171] = var47;
                var32[172] = var46;
                var32[173] = var6;
                var32[174] = var45;
                var46 = var4 == var43;
                var45 = undefined;
                if (var46) {
                    _fun77468_ip = 7705;
                    continue _fun77468
                }
            case 7699:
                var45 = var43.guildEmojis;
            case 7705:
                var32[175] = var45;
                var32[176] = var44;
                var45 = var4 == var43;
                var44 = undefined;
                if (var45) {
                    _fun77468_ip = 7728;
                    continue _fun77468
                }
            case 7722:
                var44 = var43.enableSwipeActions;
            case 7728:
                var32[177] = var44;
                var45 = var4 == var43;
                var44 = undefined;
                if (var45) {
                    _fun77468_ip = 7747;
                    continue _fun77468
                }
            case 7741:
                var44 = var43.displayNameStylesEnabled;
            case 7747:
                var32[178] = var44;
                var32[179] = var42;
                var44 = var4 == var43;
                var42 = undefined;
                if (var44) {
                    _fun77468_ip = 7785;
                    continue _fun77468
                }
            case 7764:
                var43 = var43.currentUserDisplayNameStyles;
                var44 = var4 == var43;
                var42 = undefined;
                if (var44) {
                    _fun77468_ip = 7785;
                    continue _fun77468
                }
            case 7779:
                var42 = var43.fontId;
            case 7785:
                var32[180] = var42;
                var42 = var4 == var41;
                var4 = undefined;
                if (var42) {
                    _fun77468_ip = 7804;
                    continue _fun77468
                }
            case 7798:
                var4 = var41.fontId;
            case 7804:
                var32[181] = var4;
                var4 = function() { // Environment: var0
                    _fun77652: for (var _fun77652_ip = 0;;) switch (_fun77652_ip) {
                        case 0:
                            var1 = _closure2_slot11;
                            var7 = null;
                            if (!(var7 != var1)) {
                                _fun77652_ip = 4432;
                                continue _fun77652
                            }
                        case 18:
                            var1 = _closure2_slot135;
                            var1 = var7 == var1;
                            var3 = undefined;
                            var4 = undefined;
                            if (var1) {
                                _fun77652_ip = 43;
                                continue _fun77652
                            }
                        case 33:
                            var1 = _closure2_slot135;
                            var4 = var1.theme;
                        case 43:
                            var1 = _closure2_slot19;
                            var13 = var4 !== var1;
                            if (var13) {
                                _fun77652_ip = 85;
                                continue _fun77652
                            }
                        case 54:
                            var1 = _closure2_slot135;
                            var1 = var7 == var1;
                            var4 = undefined;
                            if (var1) {
                                _fun77652_ip = 77;
                                continue _fun77652
                            }
                        case 67:
                            var1 = _closure2_slot135;
                            var4 = var1.saturation;
                        case 77:
                            var1 = _closure2_slot60;
                            var13 = var4 !== var1;
                        case 85:
                            var14 = var13;
                            if (var14) {
                                _fun77652_ip = 122;
                                continue _fun77652
                            }
                        case 91:
                            var1 = _closure2_slot135;
                            var1 = var7 == var1;
                            var4 = undefined;
                            if (var1) {
                                _fun77652_ip = 114;
                                continue _fun77652
                            }
                        case 104:
                            var1 = _closure2_slot135;
                            var4 = var1.inlineAttachmentMedia;
                        case 114:
                            var1 = _closure2_slot12;
                            var14 = var4 !== var1;
                        case 122:
                            if (var14) {
                                _fun77652_ip = 156;
                                continue _fun77652
                            }
                        case 125:
                            var1 = _closure2_slot135;
                            var1 = var7 == var1;
                            var4 = undefined;
                            if (var1) {
                                _fun77652_ip = 148;
                                continue _fun77652
                            }
                        case 138:
                            var1 = _closure2_slot135;
                            var4 = var1.inlineEmbedMedia;
                        case 148:
                            var1 = _closure2_slot13;
                            var14 = var4 !== var1;
                        case 156:
                            if (var14) {
                                _fun77652_ip = 190;
                                continue _fun77652
                            }
                        case 159:
                            var1 = _closure2_slot135;
                            var1 = var7 == var1;
                            var4 = undefined;
                            if (var1) {
                                _fun77652_ip = 182;
                                continue _fun77652
                            }
                        case 172:
                            var1 = _closure2_slot135;
                            var4 = var1.renderEmbeds;
                        case 182:
                            var1 = _closure2_slot14;
                            var14 = var4 !== var1;
                        case 190:
                            if (var14) {
                                _fun77652_ip = 224;
                                continue _fun77652
                            }
                        case 193:
                            var1 = _closure2_slot135;
                            var1 = var7 == var1;
                            var4 = undefined;
                            if (var1) {
                                _fun77652_ip = 216;
                                continue _fun77652
                            }
                        case 206:
                            var1 = _closure2_slot135;
                            var4 = var1.renderReactions;
                        case 216:
                            var1 = _closure2_slot15;
                            var14 = var4 !== var1;
                        case 224:
                            if (var14) {
                                _fun77652_ip = 258;
                                continue _fun77652
                            }
                        case 227:
                            var1 = _closure2_slot135;
                            var1 = var7 == var1;
                            var4 = undefined;
                            if (var1) {
                                _fun77652_ip = 250;
                                continue _fun77652
                            }
                        case 240:
                            var1 = _closure2_slot135;
                            var4 = var1.animateEmoji;
                        case 250:
                            var1 = _closure2_slot16;
                            var14 = var4 !== var1;
                        case 258:
                            if (var14) {
                                _fun77652_ip = 292;
                                continue _fun77652
                            }
                        case 261:
                            var1 = _closure2_slot135;
                            var1 = var7 == var1;
                            var4 = undefined;
                            if (var1) {
                                _fun77652_ip = 284;
                                continue _fun77652
                            }
                        case 274:
                            var1 = _closure2_slot135;
                            var4 = var1.animateStickers;
                        case 284:
                            var1 = _closure2_slot17;
                            var14 = var4 !== var1;
                        case 292:
                            if (var14) {
                                _fun77652_ip = 326;
                                continue _fun77652
                            }
                        case 295:
                            var1 = _closure2_slot135;
                            var1 = var7 == var1;
                            var4 = undefined;
                            if (var1) {
                                _fun77652_ip = 318;
                                continue _fun77652
                            }
                        case 308:
                            var1 = _closure2_slot135;
                            var4 = var1.gifAutoPlay;
                        case 318:
                            var1 = _closure2_slot18;
                            var14 = var4 !== var1;
                        case 326:
                            if (var14) {
                                _fun77652_ip = 360;
                                continue _fun77652
                            }
                        case 329:
                            var1 = _closure2_slot135;
                            var1 = var7 == var1;
                            var4 = undefined;
                            if (var1) {
                                _fun77652_ip = 352;
                                continue _fun77652
                            }
                        case 342:
                            var1 = _closure2_slot135;
                            var4 = var1.timestampHourCycle;
                        case 352:
                            var1 = _closure2_slot21;
                            var14 = var4 !== var1;
                        case 360:
                            if (var14) {
                                _fun77652_ip = 394;
                                continue _fun77652
                            }
                        case 363:
                            var1 = _closure2_slot135;
                            var1 = var7 == var1;
                            var4 = undefined;
                            if (var1) {
                                _fun77652_ip = 386;
                                continue _fun77652
                            }
                        case 376:
                            var1 = _closure2_slot135;
                            var4 = var1.containerWidth;
                        case 386:
                            var1 = _closure2_slot98;
                            var14 = var4 !== var1;
                        case 394:
                            if (var14) {
                                _fun77652_ip = 428;
                                continue _fun77652
                            }
                        case 397:
                            var1 = _closure2_slot135;
                            var1 = var7 == var1;
                            var4 = undefined;
                            if (var1) {
                                _fun77652_ip = 420;
                                continue _fun77652
                            }
                        case 410:
                            var1 = _closure2_slot135;
                            var4 = var1.guildSystemChannelFlags;
                        case 420:
                            var1 = _closure2_slot10;
                            var14 = var4 !== var1;
                        case 428:
                            if (var14) {
                                _fun77652_ip = 462;
                                continue _fun77652
                            }
                        case 431:
                            var1 = _closure2_slot135;
                            var1 = var7 == var1;
                            var4 = undefined;
                            if (var1) {
                                _fun77652_ip = 454;
                                continue _fun77652
                            }
                        case 444:
                            var1 = _closure2_slot135;
                            var4 = var1.userSettingsLocale;
                        case 454:
                            var1 = _closure2_slot78;
                            var14 = var4 !== var1;
                        case 462:
                            if (var14) {
                                _fun77652_ip = 496;
                                continue _fun77652
                            }
                        case 465:
                            var1 = _closure2_slot135;
                            var1 = var7 == var1;
                            var4 = undefined;
                            if (var1) {
                                _fun77652_ip = 488;
                                continue _fun77652
                            }
                        case 478:
                            var1 = _closure2_slot135;
                            var4 = var1.roleStyle;
                        case 488:
                            var1 = _closure2_slot59;
                            var14 = var4 !== var1;
                        case 496:
                            if (var14) {
                                _fun77652_ip = 530;
                                continue _fun77652
                            }
                        case 499:
                            var1 = _closure2_slot135;
                            var1 = var7 == var1;
                            var4 = undefined;
                            if (var1) {
                                _fun77652_ip = 522;
                                continue _fun77652
                            }
                        case 512:
                            var1 = _closure2_slot135;
                            var4 = var1.canSendMessages;
                        case 522:
                            var1 = _closure2_slot48;
                            var14 = var4 !== var1;
                        case 530:
                            if (var14) {
                                _fun77652_ip = 564;
                                continue _fun77652
                            }
                        case 533:
                            var1 = _closure2_slot135;
                            var1 = var7 == var1;
                            var4 = undefined;
                            if (var1) {
                                _fun77652_ip = 556;
                                continue _fun77652
                            }
                        case 546:
                            var1 = _closure2_slot135;
                            var4 = var1.showPushFeedback;
                        case 556:
                            var1 = _closure2_slot82;
                            var14 = var4 !== var1;
                        case 564:
                            if (var14) {
                                _fun77652_ip = 598;
                                continue _fun77652
                            }
                        case 567:
                            var1 = _closure2_slot135;
                            var1 = var7 == var1;
                            var4 = undefined;
                            if (var1) {
                                _fun77652_ip = 590;
                                continue _fun77652
                            }
                        case 580:
                            var1 = _closure2_slot135;
                            var4 = var1.selectedSummary;
                        case 590:
                            var1 = _closure2_slot87;
                            var14 = var4 !== var1;
                        case 598:
                            if (var14) {
                                _fun77652_ip = 632;
                                continue _fun77652
                            }
                        case 601:
                            var1 = _closure2_slot135;
                            var1 = var7 == var1;
                            var4 = undefined;
                            if (var1) {
                                _fun77652_ip = 624;
                                continue _fun77652
                            }
                        case 614:
                            var1 = _closure2_slot135;
                            var4 = var1.shouldObscureSpoiler;
                        case 624:
                            var1 = _closure2_slot91;
                            var14 = var4 !== var1;
                        case 632:
                            if (var14) {
                                _fun77652_ip = 666;
                                continue _fun77652
                            }
                        case 635:
                            var1 = _closure2_slot135;
                            var1 = var7 == var1;
                            var4 = undefined;
                            if (var1) {
                                _fun77652_ip = 658;
                                continue _fun77652
                            }
                        case 648:
                            var1 = _closure2_slot135;
                            var4 = var1.explicitMediaFalsePositiveInfo;
                        case 658:
                            var1 = _closure2_slot97;
                            var14 = var4 !== var1;
                        case 666:
                            if (var14) {
                                _fun77652_ip = 700;
                                continue _fun77652
                            }
                        case 669:
                            var1 = _closure2_slot135;
                            var1 = var7 == var1;
                            var4 = undefined;
                            if (var1) {
                                _fun77652_ip = 692;
                                continue _fun77652
                            }
                        case 682:
                            var1 = _closure2_slot135;
                            var4 = var1.isStaff;
                        case 692:
                            var1 = _closure2_slot101;
                            var14 = var4 !== var1;
                        case 700:
                            if (var14) {
                                _fun77652_ip = 734;
                                continue _fun77652
                            }
                        case 703:
                            var1 = _closure2_slot135;
                            var1 = var7 == var1;
                            var4 = undefined;
                            if (var1) {
                                _fun77652_ip = 726;
                                continue _fun77652
                            }
                        case 716:
                            var1 = _closure2_slot135;
                            var4 = var1.isAgeVerified;
                        case 726:
                            var1 = _closure2_slot92;
                            var14 = var4 !== var1;
                        case 734:
                            if (var14) {
                                _fun77652_ip = 768;
                                continue _fun77652
                            }
                        case 737:
                            var1 = _closure2_slot135;
                            var1 = var7 == var1;
                            var4 = undefined;
                            if (var1) {
                                _fun77652_ip = 760;
                                continue _fun77652
                            }
                        case 750:
                            var1 = _closure2_slot135;
                            var4 = var1.displayNameStylesEnabled;
                        case 760:
                            var1 = _closure2_slot61;
                            var14 = var4 !== var1;
                        case 768:
                            if (var14) {
                                _fun77652_ip = 812;
                                continue _fun77652
                            }
                        case 771:
                            var1 = _closure2_slot135;
                            var1 = var7 == var1;
                            var4 = undefined;
                            if (var1) {
                                _fun77652_ip = 794;
                                continue _fun77652
                            }
                        case 784:
                            var1 = _closure2_slot135;
                            var4 = var1.shouldForceRender;
                        case 794:
                            var1 = _closure2_slot113;
                            var1 = var4 !== var1;
                            if (!var1) {
                                _fun77652_ip = 809;
                                continue _fun77652
                            }
                        case 805:
                            var1 = _closure2_slot113;
                        case 809:
                            var14 = var1;
                        case 812:
                            var5 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var4 = 70;
                            var4 = var6[var4];
                            var8 = var5.bind(var3)(var4);
                            var6 = {};
                            var4 = _closure2_slot6;
                            var6.messages = var4;
                            var4 = _closure2_slot84;
                            var6.androidKeyboardHeight = var4;
                            var4 = _closure2_slot45;
                            var6.replyingMessageId = var4;
                            var5 = {};
                            var4 = _closure2_slot109;
                            var4 = var4.isAtBottom;
                            var5.isAtBottom = var4;
                            var9 = _closure2_slot117;
                            var4 = var9.getPreviousMessages;
                            var4 = var4.bind(var9)();
                            var4 = var7 != var4;
                            var5.hasPreviousMessages = var4;
                            var4 = {};
                            var9 = _closure2_slot138;
                            if (!(var7 == var9)) {
                                _fun77652_ip = 922;
                                continue _fun77652
                            }
                        case 916:
                            var9 = _closure2_slot6;
                            _fun77652_ip = 926;
                            continue _fun77652;
                        case 922:
                            var9 = _closure2_slot138;
                        case 926:
                            var4.messages = var9;
                            var9 = _closure2_slot135;
                            var10 = var7 == var9;
                            var9 = undefined;
                            if (var10) {
                                _fun77652_ip = 954;
                                continue _fun77652
                            }
                        case 944:
                            var10 = _closure2_slot135;
                            var9 = var10.androidKeyboardHeight;
                        case 954:
                            if (!(var7 == var9)) {
                                _fun77652_ip = 962;
                                continue _fun77652
                            }
                        case 958:
                            var9 = _closure2_slot84;
                        case 962:
                            var4.androidKeyboardHeight = var9;
                            var4 = var8.bind(var3)(var6, var5, var4);
                            var11 = var4.scrollToMessageId;
                            var10 = var4.jumpTargetId;
                            var9 = var4.jumpType;
                            var5 = var4.minimizeScrolling;
                            var8 = var4.focusTargetId;
                            var6 = var4.shouldInitialScroll;
                            var4 = _closure2_slot135;
                            var4 = var7 == var4;
                            var12 = undefined;
                            if (var4) {
                                _fun77652_ip = 1033;
                                continue _fun77652
                            }
                        case 1023:
                            var4 = _closure2_slot135;
                            var12 = var4.resolvingGiftCodes;
                        case 1033:
                            var4 = _closure2_slot52;
                            var39 = var12 !== var4;
                            if (var39) {
                                _fun77652_ip = 1075;
                                continue _fun77652
                            }
                        case 1044:
                            var4 = _closure2_slot135;
                            var4 = var7 == var4;
                            var12 = undefined;
                            if (var4) {
                                _fun77652_ip = 1067;
                                continue _fun77652
                            }
                        case 1057:
                            var4 = _closure2_slot135;
                            var12 = var4.resolvedGiftCodes;
                        case 1067:
                            var4 = _closure2_slot53;
                            var39 = var12 !== var4;
                        case 1075:
                            if (var39) {
                                _fun77652_ip = 1109;
                                continue _fun77652
                            }
                        case 1078:
                            var4 = _closure2_slot135;
                            var4 = var7 == var4;
                            var12 = undefined;
                            if (var4) {
                                _fun77652_ip = 1101;
                                continue _fun77652
                            }
                        case 1091:
                            var4 = _closure2_slot135;
                            var12 = var4.acceptingGiftCodes;
                        case 1101:
                            var4 = _closure2_slot54;
                            var39 = var12 !== var4;
                        case 1109:
                            var _closure3_slot0 = var39;
                            var4 = _closure2_slot135;
                            var4 = var7 == var4;
                            var38 = undefined;
                            if (var4) {
                                _fun77652_ip = 1136;
                                continue _fun77652
                            }
                        case 1126:
                            var4 = _closure2_slot135;
                            var38 = var4.uploads;
                        case 1136:
                            var37 = _closure2_slot56;
                            var12 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var15 = 100;
                            var4 = var4[var15];
                            var16 = var12.bind(var3)(var4);
                            var4 = _closure2_slot135;
                            var4 = var7 == var4;
                            var12 = undefined;
                            if (var4) {
                                _fun77652_ip = 1183;
                                continue _fun77652
                            }
                        case 1173:
                            var4 = _closure2_slot135;
                            var12 = var4.interactionStates;
                        case 1183:
                            var4 = _closure2_slot63;
                            var4 = var16.bind(var3)(var12, var4);
                            var29 = !var4;
                            var _closure3_slot1 = var29;
                            var4 = _closure2_slot135;
                            var4 = var7 == var4;
                            var12 = undefined;
                            if (var4) {
                                _fun77652_ip = 1223;
                                continue _fun77652
                            }
                        case 1213:
                            var4 = _closure2_slot135;
                            var12 = var4.channelPolls;
                        case 1223:
                            var4 = _closure2_slot94;
                            var26 = var12 !== var4;
                            var _closure3_slot2 = var26;
                            var4 = _closure2_slot135;
                            var4 = var7 == var4;
                            var12 = undefined;
                            if (var4) {
                                _fun77652_ip = 1258;
                                continue _fun77652
                            }
                        case 1248:
                            var4 = _closure2_slot135;
                            var12 = var4.messageReferencePolls;
                        case 1258:
                            var4 = _closure2_slot96;
                            var25 = var12 !== var4;
                            var _closure3_slot3 = var25;
                            var4 = _closure2_slot135;
                            var4 = var7 == var4;
                            var12 = undefined;
                            if (var4) {
                                _fun77652_ip = 1293;
                                continue _fun77652
                            }
                        case 1283:
                            var4 = _closure2_slot135;
                            var12 = var4.interactionComponentStatesVersion;
                        case 1293:
                            var4 = _closure2_slot65;
                            var28 = var12 !== var4;
                            var _closure3_slot4 = var28;
                            var4 = _closure2_slot135;
                            var4 = var7 == var4;
                            var12 = undefined;
                            if (var4) {
                                _fun77652_ip = 1328;
                                continue _fun77652
                            }
                        case 1318:
                            var4 = _closure2_slot135;
                            var12 = var4.shouldDisableInteractiveComponents;
                        case 1328:
                            var4 = _closure2_slot93;
                            var4 = var12 !== var4;
                            var _closure3_slot5 = var4;
                            var4 = _closure2_slot135;
                            var4 = var7 == var4;
                            var12 = undefined;
                            if (var4) {
                                _fun77652_ip = 1363;
                                continue _fun77652
                            }
                        case 1353:
                            var4 = _closure2_slot135;
                            var12 = var4.communicationDisabledVersion;
                        case 1363:
                            var4 = _closure2_slot74;
                            var35 = var12 !== var4;
                            var _closure3_slot6 = var35;
                            var4 = _closure2_slot135;
                            var4 = var7 == var4;
                            var12 = undefined;
                            if (var4) {
                                _fun77652_ip = 1398;
                                continue _fun77652
                            }
                        case 1388:
                            var4 = _closure2_slot135;
                            var12 = var4.messageAuthorMembers;
                        case 1398:
                            var4 = _closure2_slot75;
                            var34 = var12 !== var4;
                            var _closure3_slot7 = var34;
                            var4 = _closure2_slot135;
                            var4 = var7 == var4;
                            var12 = undefined;
                            if (var4) {
                                _fun77652_ip = 1433;
                                continue _fun77652
                            }
                        case 1423:
                            var4 = _closure2_slot135;
                            var12 = var4.failedMessagesVersion;
                        case 1433:
                            var4 = _closure2_slot73;
                            var33 = var12 !== var4;
                            var _closure3_slot8 = var33;
                            var4 = _closure2_slot135;
                            var4 = var7 == var4;
                            var12 = undefined;
                            if (var4) {
                                _fun77652_ip = 1468;
                                continue _fun77652
                            }
                        case 1458:
                            var4 = _closure2_slot135;
                            var12 = var4.renderCommunicationDisabled;
                        case 1468:
                            var4 = _closure2_slot76;
                            var30 = var12 !== var4;
                            var _closure3_slot9 = var30;
                            var4 = _closure2_slot135;
                            var4 = var7 == var4;
                            var32 = undefined;
                            if (var4) {
                                _fun77652_ip = 1503;
                                continue _fun77652
                            }
                        case 1493:
                            var4 = _closure2_slot135;
                            var32 = var4.forwardGuildsVersion;
                        case 1503:
                            var31 = _closure2_slot102;
                            var12 = _closure2_slot1;
                            var4 = var12.isForumPost;
                            var27 = var4.bind(var12)();
                            if (!var27) {
                                _fun77652_ip = 1555;
                                continue _fun77652
                            }
                        case 1524:
                            var4 = _closure2_slot135;
                            var4 = var7 == var4;
                            var12 = undefined;
                            if (var4) {
                                _fun77652_ip = 1547;
                                continue _fun77652
                            }
                        case 1537:
                            var4 = _closure2_slot135;
                            var12 = var4.isFollowingForumPost;
                        case 1547:
                            var4 = _closure2_slot80;
                            var27 = var12 !== var4;
                        case 1555:
                            var _closure3_slot10 = var27;
                            var4 = _closure2_slot135;
                            var4 = var7 == var4;
                            var12 = undefined;
                            if (var4) {
                                _fun77652_ip = 1582;
                                continue _fun77652
                            }
                        case 1572:
                            var4 = _closure2_slot135;
                            var12 = var4.showMediaPostSharePrompt;
                        case 1582:
                            var4 = _closure2_slot81;
                            var24 = var12 !== var4;
                            var _closure3_slot11 = var24;
                            var4 = _closure2_slot135;
                            var4 = var7 == var4;
                            var12 = undefined;
                            if (var4) {
                                _fun77652_ip = 1617;
                                continue _fun77652
                            }
                        case 1607:
                            var4 = _closure2_slot135;
                            var12 = var4.unloadedContentEntryMessageIds;
                        case 1617:
                            var4 = _closure2_slot99;
                            var23 = var12 !== var4;
                            var _closure3_slot12 = var23;
                            var4 = _closure2_slot135;
                            var4 = var7 == var4;
                            var12 = undefined;
                            if (var4) {
                                _fun77652_ip = 1652;
                                continue _fun77652
                            }
                        case 1642:
                            var4 = _closure2_slot135;
                            var12 = var4.invalidApplicationIds;
                        case 1652:
                            var4 = _closure2_slot28;
                            var4 = var12 !== var4;
                            var _closure3_slot13 = var4;
                            var12 = _closure2_slot135;
                            var12 = var7 == var12;
                            var16 = undefined;
                            if (var12) {
                                _fun77652_ip = 1687;
                                continue _fun77652
                            }
                        case 1677:
                            var12 = _closure2_slot135;
                            var16 = var12.activityInstanceIds;
                        case 1687:
                            var12 = _closure2_slot30;
                            var36 = var16 !== var12;
                            if (var36) {
                                _fun77652_ip = 1729;
                                continue _fun77652
                            }
                        case 1698:
                            var12 = _closure2_slot135;
                            var12 = var7 == var12;
                            var16 = undefined;
                            if (var12) {
                                _fun77652_ip = 1721;
                                continue _fun77652
                            }
                        case 1711:
                            var12 = _closure2_slot135;
                            var16 = var12.activityParticipants;
                        case 1721:
                            var12 = _closure2_slot32;
                            var36 = var16 !== var12;
                        case 1729:
                            if (var36) {
                                _fun77652_ip = 1763;
                                continue _fun77652
                            }
                        case 1732:
                            var12 = _closure2_slot135;
                            var12 = var7 == var12;
                            var16 = undefined;
                            if (var12) {
                                _fun77652_ip = 1755;
                                continue _fun77652
                            }
                        case 1745:
                            var12 = _closure2_slot135;
                            var16 = var12.applicationAssetFetchingIds;
                        case 1755:
                            var12 = _closure2_slot29;
                            var36 = var16 !== var12;
                        case 1763:
                            if (var36) {
                                _fun77652_ip = 1797;
                                continue _fun77652
                            }
                        case 1766:
                            var12 = _closure2_slot135;
                            var12 = var7 == var12;
                            var16 = undefined;
                            if (var12) {
                                _fun77652_ip = 1789;
                                continue _fun77652
                            }
                        case 1779:
                            var12 = _closure2_slot135;
                            var16 = var12.activityInstancePresenceDetails;
                        case 1789:
                            var12 = _closure2_slot31;
                            var36 = var16 !== var12;
                        case 1797:
                            if (var36) {
                                _fun77652_ip = 1831;
                                continue _fun77652
                            }
                        case 1800:
                            var12 = _closure2_slot135;
                            var12 = var7 == var12;
                            var16 = undefined;
                            if (var12) {
                                _fun77652_ip = 1823;
                                continue _fun77652
                            }
                        case 1813:
                            var12 = _closure2_slot135;
                            var16 = var12.messagesWithActivitiesLaunching;
                        case 1823:
                            var12 = _closure2_slot33;
                            var36 = var16 !== var12;
                        case 1831:
                            if (var36) {
                                _fun77652_ip = 1837;
                                continue _fun77652
                            }
                        case 1834:
                            var36 = var4;
                        case 1837:
                            var _closure3_slot14 = var36;
                            var12 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var4 = var4[var15];
                            var17 = var12.bind(var3)(var4);
                            var16 = var17.areArraysShallowEqual;
                            var4 = _closure2_slot135;
                            var4 = var7 == var4;
                            var12 = undefined;
                            if (var4) {
                                _fun77652_ip = 1887;
                                continue _fun77652
                            }
                        case 1877:
                            var4 = _closure2_slot135;
                            var12 = var4.activityInviteMessageIds;
                        case 1887:
                            if (!(var7 == var12)) {
                                _fun77652_ip = 1895;
                                continue _fun77652
                            }
                        case 1891:
                            var12 = new Array(0);
                        case 1895:
                            var4 = _closure2_slot23;
                            if (!(var7 == var4)) {
                                _fun77652_ip = 1909;
                                continue _fun77652
                            }
                        case 1903:
                            var4 = new Array(0);
                            _fun77652_ip = 1913;
                            continue _fun77652;
                        case 1909:
                            var4 = _closure2_slot23;
                        case 1913:
                            var4 = var16.bind(var17)(var12, var4);
                            var22 = !var4;
                            var _closure3_slot15 = var22;
                            var12 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var4 = var4[var15];
                            var16 = var12.bind(var3)(var4);
                            var15 = var16.areArraysShallowEqual;
                            var4 = _closure2_slot135;
                            var4 = var7 == var4;
                            var12 = undefined;
                            if (var4) {
                                _fun77652_ip = 1972;
                                continue _fun77652
                            }
                        case 1962:
                            var4 = _closure2_slot135;
                            var12 = var4.referralTrialOfferIds;
                        case 1972:
                            if (!(var7 == var12)) {
                                _fun77652_ip = 1980;
                                continue _fun77652
                            }
                        case 1976:
                            var12 = new Array(0);
                        case 1980:
                            var4 = _closure2_slot41;
                            if (!(var7 == var4)) {
                                _fun77652_ip = 1994;
                                continue _fun77652
                            }
                        case 1988:
                            var4 = new Array(0);
                            _fun77652_ip = 1998;
                            continue _fun77652;
                        case 1994:
                            var4 = _closure2_slot41;
                        case 1998:
                            var4 = var15.bind(var16)(var12, var4);
                            var21 = !var4;
                            if (var21) {
                                _fun77652_ip = 2041;
                                continue _fun77652
                            }
                        case 2010:
                            var4 = _closure2_slot135;
                            var4 = var7 == var4;
                            var12 = undefined;
                            if (var4) {
                                _fun77652_ip = 2033;
                                continue _fun77652
                            }
                        case 2023:
                            var4 = _closure2_slot135;
                            var12 = var4.trialOffer;
                        case 2033:
                            var4 = _closure2_slot42;
                            var21 = var12 !== var4;
                        case 2041:
                            if (var21) {
                                _fun77652_ip = 2075;
                                continue _fun77652
                            }
                        case 2044:
                            var4 = _closure2_slot135;
                            var4 = var7 == var4;
                            var12 = undefined;
                            if (var4) {
                                _fun77652_ip = 2067;
                                continue _fun77652
                            }
                        case 2057:
                            var4 = _closure2_slot135;
                            var12 = var4.isPremiumTier2User;
                        case 2067:
                            var4 = _closure2_slot43;
                            var21 = var12 !== var4;
                        case 2075:
                            var _closure3_slot16 = var21;
                            var4 = _closure2_slot135;
                            var4 = var7 == var4;
                            var12 = undefined;
                            if (var4) {
                                _fun77652_ip = 2102;
                                continue _fun77652
                            }
                        case 2092:
                            var4 = _closure2_slot135;
                            var12 = var4.guildInviteColorsFetched;
                        case 2102:
                            var4 = _closure2_slot103;
                            var20 = var12 !== var4;
                            var _closure3_slot17 = var20;
                            var4 = _closure2_slot135;
                            var4 = var7 == var4;
                            var12 = undefined;
                            if (var4) {
                                _fun77652_ip = 2137;
                                continue _fun77652
                            }
                        case 2127:
                            var4 = _closure2_slot135;
                            var12 = var4.guildEmojis;
                        case 2137:
                            var4 = _closure2_slot104;
                            var19 = var12 !== var4;
                            var _closure3_slot18 = var19;
                            var4 = _closure2_slot83;
                            var15 = 'initializing';
                            var4 = var15 !== var4;
                            var12 = _closure2_slot135;
                            var16 = var7 == var12;
                            var12 = undefined;
                            if (var16) {
                                _fun77652_ip = 2186;
                                continue _fun77652
                            }
                        case 2176:
                            var16 = _closure2_slot135;
                            var12 = var16.lazyCacheStatus;
                        case 2186:
                            var15 = var15 !== var12;
                            var12 = _closure2_slot135;
                            var12 = var7 == var12;
                            var16 = undefined;
                            if (var12) {
                                _fun77652_ip = 2228;
                                continue _fun77652
                            }
                        case 2203:
                            var12 = _closure2_slot135;
                            var12 = var12.currentUserDisplayNameStyles;
                            var17 = var7 == var12;
                            var16 = undefined;
                            if (var17) {
                                _fun77652_ip = 2228;
                                continue _fun77652
                            }
                        case 2222:
                            var16 = var12.fontId;
                        case 2228:
                            var12 = _closure2_slot88;
                            var17 = var7 == var12;
                            var12 = undefined;
                            if (var17) {
                                _fun77652_ip = 2251;
                                continue _fun77652
                            }
                        case 2241:
                            var17 = _closure2_slot88;
                            var12 = var17.fontId;
                        case 2251:
                            var18 = var16 !== var12;
                            var _closure3_slot19 = var18;
                            var12 = _closure2_slot135;
                            var12 = var7 == var12;
                            var16 = undefined;
                            if (var12) {
                                _fun77652_ip = 2282;
                                continue _fun77652
                            }
                        case 2272:
                            var12 = _closure2_slot135;
                            var16 = var12.selfActivities;
                        case 2282:
                            var12 = _closure2_slot106;
                            var17 = var16 !== var12;
                            var _closure3_slot20 = var17;
                            var12 = _closure2_slot135;
                            var12 = var7 == var12;
                            var16 = undefined;
                            if (var12) {
                                _fun77652_ip = 2317;
                                continue _fun77652
                            }
                        case 2307:
                            var12 = _closure2_slot135;
                            var16 = var12.currentClientVoiceChannelId;
                        case 2317:
                            var12 = _closure2_slot105;
                            var12 = var16 !== var12;
                            var _closure3_slot21 = var12;
                            var16 = _closure2_slot135;
                            var16 = var7 == var16;
                            var40 = undefined;
                            if (var16) {
                                _fun77652_ip = 2352;
                                continue _fun77652
                            }
                        case 2342:
                            var16 = _closure2_slot135;
                            var40 = var16.activityLaunchJoinStates;
                        case 2352:
                            var16 = _closure2_slot107;
                            var16 = var40 !== var16;
                            var _closure3_slot22 = var16;
                            if (var14) {
                                _fun77652_ip = 3617;
                                continue _fun77652
                            }
                        case 2370:
                            if (var39) {
                                _fun77652_ip = 3617;
                                continue _fun77652
                            }
                        case 2376:
                            if (!(var38 === var37)) {
                                _fun77652_ip = 3617;
                                continue _fun77652
                            }
                        case 2383:
                            if (var36) {
                                _fun77652_ip = 3617;
                                continue _fun77652
                            }
                        case 2389:
                            var37 = _closure2_slot138;
                            var36 = _closure2_slot6;
                            if (!(var37 === var36)) {
                                _fun77652_ip = 3617;
                                continue _fun77652
                            }
                        case 2404:
                            var36 = _closure2_slot135;
                            var36 = var7 == var36;
                            var37 = undefined;
                            if (var36) {
                                _fun77652_ip = 2427;
                                continue _fun77652
                            }
                        case 2417:
                            var36 = _closure2_slot135;
                            var37 = var36.editingMessageId;
                        case 2427:
                            var36 = _closure2_slot44;
                            if (!(var37 === var36)) {
                                _fun77652_ip = 3617;
                                continue _fun77652
                            }
                        case 2438:
                            var36 = _closure2_slot135;
                            var36 = var7 == var36;
                            var37 = undefined;
                            if (var36) {
                                _fun77652_ip = 2461;
                                continue _fun77652
                            }
                        case 2451:
                            var36 = _closure2_slot135;
                            var37 = var36.replyingMessageId;
                        case 2461:
                            var36 = _closure2_slot45;
                            if (!(var37 === var36)) {
                                _fun77652_ip = 3617;
                                continue _fun77652
                            }
                        case 2472:
                            var36 = _closure2_slot135;
                            var36 = var7 == var36;
                            var37 = undefined;
                            if (var36) {
                                _fun77652_ip = 2495;
                                continue _fun77652
                            }
                        case 2485:
                            var36 = _closure2_slot135;
                            var37 = var36.voiceStateChannelId;
                        case 2495:
                            var36 = _closure2_slot50;
                            if (!(var37 === var36)) {
                                _fun77652_ip = 3617;
                                continue _fun77652
                            }
                        case 2506:
                            var36 = _closure2_slot135;
                            var36 = var7 == var36;
                            var37 = undefined;
                            if (var36) {
                                _fun77652_ip = 2529;
                                continue _fun77652
                            }
                        case 2519:
                            var36 = _closure2_slot135;
                            var37 = var36.messageAuthorActivities;
                        case 2529:
                            var36 = _closure2_slot22;
                            if (!(var37 === var36)) {
                                _fun77652_ip = 3617;
                                continue _fun77652
                            }
                        case 2540:
                            var36 = _closure2_slot135;
                            var36 = var7 == var36;
                            var37 = undefined;
                            if (var36) {
                                _fun77652_ip = 2563;
                                continue _fun77652
                            }
                        case 2553:
                            var36 = _closure2_slot135;
                            var37 = var36.oldestUnreadMessageId;
                        case 2563:
                            var36 = _closure2_slot46;
                            if (!(var37 === var36)) {
                                _fun77652_ip = 3617;
                                continue _fun77652
                            }
                        case 2574:
                            var36 = _closure2_slot135;
                            var36 = var7 == var36;
                            var37 = undefined;
                            if (var36) {
                                _fun77652_ip = 2597;
                                continue _fun77652
                            }
                        case 2587:
                            var36 = _closure2_slot135;
                            var37 = var36.invites;
                        case 2597:
                            var36 = _closure2_slot24;
                            if (!(var37 === var36)) {
                                _fun77652_ip = 3617;
                                continue _fun77652
                            }
                        case 2608:
                            var36 = _closure2_slot135;
                            var36 = var7 == var36;
                            var37 = undefined;
                            if (var36) {
                                _fun77652_ip = 2631;
                                continue _fun77652
                            }
                        case 2621:
                            var36 = _closure2_slot135;
                            var37 = var36.appDirectoryEmbedApplications;
                        case 2631:
                            var36 = _closure2_slot25;
                            if (!(var37 === var36)) {
                                _fun77652_ip = 3617;
                                continue _fun77652
                            }
                        case 2642:
                            var36 = _closure2_slot135;
                            var36 = var7 == var36;
                            var37 = undefined;
                            if (var36) {
                                _fun77652_ip = 2665;
                                continue _fun77652
                            }
                        case 2655:
                            var36 = _closure2_slot135;
                            var37 = var36.invalidAppDirectoryEmbedApplicationIds;
                        case 2665:
                            var36 = _closure2_slot26;
                            if (!(var37 === var36)) {
                                _fun77652_ip = 3617;
                                continue _fun77652
                            }
                        case 2676:
                            var36 = _closure2_slot135;
                            var36 = var7 == var36;
                            var37 = undefined;
                            if (var36) {
                                _fun77652_ip = 2699;
                                continue _fun77652
                            }
                        case 2689:
                            var36 = _closure2_slot135;
                            var37 = var36.appDirectoryEmbedApplicationFetchStates;
                        case 2699:
                            var36 = _closure2_slot27;
                            if (!(var37 === var36)) {
                                _fun77652_ip = 3617;
                                continue _fun77652
                            }
                        case 2710:
                            var36 = _closure2_slot135;
                            var36 = var7 == var36;
                            var37 = undefined;
                            if (var36) {
                                _fun77652_ip = 2733;
                                continue _fun77652
                            }
                        case 2723:
                            var36 = _closure2_slot135;
                            var37 = var36.guildTemplates;
                        case 2733:
                            var36 = _closure2_slot35;
                            if (!(var37 === var36)) {
                                _fun77652_ip = 3617;
                                continue _fun77652
                            }
                        case 2744:
                            var36 = _closure2_slot135;
                            var36 = var7 == var36;
                            var37 = undefined;
                            if (var36) {
                                _fun77652_ip = 2767;
                                continue _fun77652
                            }
                        case 2757:
                            var36 = _closure2_slot135;
                            var37 = var36.buildOverrides;
                        case 2767:
                            var36 = _closure2_slot36;
                            if (!(var37 === var36)) {
                                _fun77652_ip = 3617;
                                continue _fun77652
                            }
                        case 2778:
                            var36 = _closure2_slot135;
                            var36 = var7 == var36;
                            var37 = undefined;
                            if (var36) {
                                _fun77652_ip = 2801;
                                continue _fun77652
                            }
                        case 2791:
                            var36 = _closure2_slot135;
                            var37 = var36.experimentEmbeds;
                        case 2801:
                            var36 = _closure2_slot37;
                            if (!(var37 === var36)) {
                                _fun77652_ip = 3617;
                                continue _fun77652
                            }
                        case 2812:
                            var36 = _closure2_slot135;
                            var36 = var7 == var36;
                            var37 = undefined;
                            if (var36) {
                                _fun77652_ip = 2835;
                                continue _fun77652
                            }
                        case 2825:
                            var36 = _closure2_slot135;
                            var37 = var36.quests;
                        case 2835:
                            var36 = _closure2_slot38;
                            if (!(var37 === var36)) {
                                _fun77652_ip = 3617;
                                continue _fun77652
                            }
                        case 2846:
                            var36 = _closure2_slot135;
                            var36 = var7 == var36;
                            var37 = undefined;
                            if (var36) {
                                _fun77652_ip = 2869;
                                continue _fun77652
                            }
                        case 2859:
                            var36 = _closure2_slot135;
                            var37 = var36.isFetchingCurrentQuests;
                        case 2869:
                            var36 = _closure2_slot39;
                            if (!(var37 === var36)) {
                                _fun77652_ip = 3617;
                                continue _fun77652
                            }
                        case 2880:
                            var36 = _closure2_slot135;
                            var36 = var7 == var36;
                            var37 = undefined;
                            if (var36) {
                                _fun77652_ip = 2903;
                                continue _fun77652
                            }
                        case 2893:
                            var36 = _closure2_slot135;
                            var37 = var36.participantsLength;
                        case 2903:
                            var36 = _closure2_slot55;
                            if (!(var37 === var36)) {
                                _fun77652_ip = 3617;
                                continue _fun77652
                            }
                        case 2914:
                            var37 = _closure2_slot69;
                            var36 = _closure2_slot138;
                            var36 = var7 != var36;
                            if (!var36) {
                                _fun77652_ip = 2955;
                                continue _fun77652
                            }
                        case 2929:
                            var38 = _closure2_slot138;
                            var38 = var38.ready;
                            if (var38) {
                                _fun77652_ip = 2952;
                                continue _fun77652
                            }
                        case 2942:
                            var39 = _closure2_slot138;
                            var38 = var39.cached;
                        case 2952:
                            var36 = var38;
                        case 2955:
                            if (!(var37 === var36)) {
                                _fun77652_ip = 3617;
                                continue _fun77652
                            }
                        case 2962:
                            var36 = _closure2_slot135;
                            var36 = var7 == var36;
                            var37 = undefined;
                            if (var36) {
                                _fun77652_ip = 2985;
                                continue _fun77652
                            }
                        case 2975:
                            var36 = _closure2_slot135;
                            var37 = var36.channelThreadsVersion;
                        case 2985:
                            var36 = _closure2_slot62;
                            if (!(var37 === var36)) {
                                _fun77652_ip = 3617;
                                continue _fun77652
                            }
                        case 2996:
                            var36 = _closure2_slot135;
                            var36 = var7 == var36;
                            var37 = undefined;
                            if (var36) {
                                _fun77652_ip = 3019;
                                continue _fun77652
                            }
                        case 3009:
                            var36 = _closure2_slot135;
                            var37 = var36.rsvpVersion;
                        case 3019:
                            var36 = _closure2_slot72;
                            if (!(var37 === var36)) {
                                _fun77652_ip = 3617;
                                continue _fun77652
                            }
                        case 3030:
                            var36 = _closure2_slot135;
                            var36 = var7 == var36;
                            var37 = undefined;
                            if (var36) {
                                _fun77652_ip = 3053;
                                continue _fun77652
                            }
                        case 3043:
                            var36 = _closure2_slot135;
                            var37 = var36.repliedIds;
                        case 3053:
                            var36 = _closure2_slot57;
                            if (!(var37 === var36)) {
                                _fun77652_ip = 3617;
                                continue _fun77652
                            }
                        case 3064:
                            var36 = _closure2_slot135;
                            var36 = var7 == var36;
                            var37 = undefined;
                            if (var36) {
                                _fun77652_ip = 3087;
                                continue _fun77652
                            }
                        case 3077:
                            var36 = _closure2_slot135;
                            var37 = var36.hasLoadedExperiments;
                        case 3087:
                            var36 = _closure2_slot66;
                            if (!(var37 === var36)) {
                                _fun77652_ip = 3617;
                                continue _fun77652
                            }
                        case 3098:
                            var36 = _closure2_slot135;
                            var36 = var7 == var36;
                            var37 = undefined;
                            if (var36) {
                                _fun77652_ip = 3121;
                                continue _fun77652
                            }
                        case 3111:
                            var36 = _closure2_slot135;
                            var37 = var36.isMessageRequest;
                        case 3121:
                            var36 = _closure2_slot68;
                            if (!(var37 === var36)) {
                                _fun77652_ip = 3617;
                                continue _fun77652
                            }
                        case 3132:
                            var36 = _closure2_slot135;
                            var36 = var7 == var36;
                            var37 = undefined;
                            if (var36) {
                                _fun77652_ip = 3155;
                                continue _fun77652
                            }
                        case 3145:
                            var36 = _closure2_slot135;
                            var37 = var36.isSpamMessageRequest;
                        case 3155:
                            var36 = _closure2_slot67;
                            if (!(var37 === var36)) {
                                _fun77652_ip = 3617;
                                continue _fun77652
                            }
                        case 3166:
                            var36 = _closure2_slot135;
                            var36 = var7 == var36;
                            var37 = undefined;
                            if (var36) {
                                _fun77652_ip = 3189;
                                continue _fun77652
                            }
                        case 3179:
                            var36 = _closure2_slot135;
                            var37 = var36.currentUserCommunicationDisabled;
                        case 3189:
                            var36 = _closure2_slot77;
                            if (!(var37 === var36)) {
                                _fun77652_ip = 3617;
                                continue _fun77652
                            }
                        case 3200:
                            var36 = _closure2_slot135;
                            var36 = var7 == var36;
                            var37 = undefined;
                            if (var36) {
                                _fun77652_ip = 3223;
                                continue _fun77652
                            }
                        case 3213:
                            var36 = _closure2_slot135;
                            var37 = var36.userSettingsLocale;
                        case 3223:
                            var36 = _closure2_slot78;
                            if (!(var37 === var36)) {
                                _fun77652_ip = 3617;
                                continue _fun77652
                            }
                        case 3234:
                            var36 = _closure2_slot135;
                            var36 = var7 == var36;
                            var37 = undefined;
                            if (var36) {
                                _fun77652_ip = 3257;
                                continue _fun77652
                            }
                        case 3247:
                            var36 = _closure2_slot135;
                            var37 = var36.selectedSummary;
                        case 3257:
                            var36 = _closure2_slot87;
                            if (!(var37 === var36)) {
                                _fun77652_ip = 3617;
                                continue _fun77652
                            }
                        case 3268:
                            var36 = _closure2_slot135;
                            var36 = var7 == var36;
                            var37 = undefined;
                            if (var36) {
                                _fun77652_ip = 3291;
                                continue _fun77652
                            }
                        case 3281:
                            var36 = _closure2_slot135;
                            var37 = var36.showPushFeedback;
                        case 3291:
                            var36 = _closure2_slot82;
                            if (!(var37 === var36)) {
                                _fun77652_ip = 3617;
                                continue _fun77652
                            }
                        case 3302:
                            if (!(var15 === var4)) {
                                _fun77652_ip = 3617;
                                continue _fun77652
                            }
                        case 3309:
                            if (var35) {
                                _fun77652_ip = 3617;
                                continue _fun77652
                            }
                        case 3315:
                            if (var34) {
                                _fun77652_ip = 3617;
                                continue _fun77652
                            }
                        case 3321:
                            if (var33) {
                                _fun77652_ip = 3617;
                                continue _fun77652
                            }
                        case 3327:
                            if (!(var32 === var31)) {
                                _fun77652_ip = 3617;
                                continue _fun77652
                            }
                        case 3334:
                            if (var30) {
                                _fun77652_ip = 3617;
                                continue _fun77652
                            }
                        case 3340:
                            if (var29) {
                                _fun77652_ip = 3617;
                                continue _fun77652
                            }
                        case 3346:
                            if (var28) {
                                _fun77652_ip = 3617;
                                continue _fun77652
                            }
                        case 3352:
                            if (var27) {
                                _fun77652_ip = 3617;
                                continue _fun77652
                            }
                        case 3358:
                            if (!(var7 == var10)) {
                                _fun77652_ip = 3617;
                                continue _fun77652
                            }
                        case 3365:
                            if (!(var7 == var8)) {
                                _fun77652_ip = 3617;
                                continue _fun77652
                            }
                        case 3372:
                            var27 = _closure2_slot135;
                            var27 = var7 == var27;
                            var28 = undefined;
                            if (var27) {
                                _fun77652_ip = 3395;
                                continue _fun77652
                            }
                        case 3385:
                            var27 = _closure2_slot135;
                            var28 = var27.androidKeyboardHeight;
                        case 3395:
                            var27 = _closure2_slot84;
                            if (!(var28 === var27)) {
                                _fun77652_ip = 3617;
                                continue _fun77652
                            }
                        case 3406:
                            var27 = _closure2_slot135;
                            var27 = var7 == var27;
                            var28 = undefined;
                            if (var27) {
                                _fun77652_ip = 3429;
                                continue _fun77652
                            }
                        case 3419:
                            var27 = _closure2_slot135;
                            var28 = var27.mediaPostPreviewEmbeds;
                        case 3429:
                            var27 = _closure2_slot34;
                            if (!(var28 === var27)) {
                                _fun77652_ip = 3617;
                                continue _fun77652
                            }
                        case 3440:
                            var27 = _closure2_slot135;
                            var27 = var7 == var27;
                            var28 = undefined;
                            if (var27) {
                                _fun77652_ip = 3463;
                                continue _fun77652
                            }
                        case 3453:
                            var27 = _closure2_slot135;
                            var28 = var27.shouldObscureSpoiler;
                        case 3463:
                            var27 = _closure2_slot91;
                            if (!(var28 === var27)) {
                                _fun77652_ip = 3617;
                                continue _fun77652
                            }
                        case 3474:
                            var27 = _closure2_slot135;
                            var27 = var7 == var27;
                            var28 = undefined;
                            if (var27) {
                                _fun77652_ip = 3497;
                                continue _fun77652
                            }
                        case 3487:
                            var27 = _closure2_slot135;
                            var28 = var27.shouldDisableInteractiveComponents;
                        case 3497:
                            var27 = _closure2_slot93;
                            if (!(var28 === var27)) {
                                _fun77652_ip = 3617;
                                continue _fun77652
                            }
                        case 3505:
                            if (var26) {
                                _fun77652_ip = 3617;
                                continue _fun77652
                            }
                        case 3508:
                            if (var25) {
                                _fun77652_ip = 3617;
                                continue _fun77652
                            }
                        case 3511:
                            if (var24) {
                                _fun77652_ip = 3617;
                                continue _fun77652
                            }
                        case 3514:
                            var24 = _closure2_slot135;
                            var24 = var7 == var24;
                            var25 = undefined;
                            if (var24) {
                                _fun77652_ip = 3537;
                                continue _fun77652
                            }
                        case 3527:
                            var24 = _closure2_slot135;
                            var25 = var24.threadStartingReferenceMessage;
                        case 3537:
                            var24 = _closure2_slot51;
                            if (!(var25 === var24)) {
                                _fun77652_ip = 3617;
                                continue _fun77652
                            }
                        case 3545:
                            if (var23) {
                                _fun77652_ip = 3617;
                                continue _fun77652
                            }
                        case 3548:
                            if (var22) {
                                _fun77652_ip = 3617;
                                continue _fun77652
                            }
                        case 3551:
                            if (var21) {
                                _fun77652_ip = 3617;
                                continue _fun77652
                            }
                        case 3554:
                            if (var20) {
                                _fun77652_ip = 3617;
                                continue _fun77652
                            }
                        case 3557:
                            if (var19) {
                                _fun77652_ip = 3617;
                                continue _fun77652
                            }
                        case 3560:
                            if (var18) {
                                _fun77652_ip = 3617;
                                continue _fun77652
                            }
                        case 3563:
                            if (var17) {
                                _fun77652_ip = 3617;
                                continue _fun77652
                            }
                        case 3566:
                            if (var16) {
                                _fun77652_ip = 3617;
                                continue _fun77652
                            }
                        case 3569:
                            if (var12) {
                                _fun77652_ip = 3617;
                                continue _fun77652
                            }
                        case 3572:
                            var16 = _closure1_slot0;
                            var17 = _closure1_slot2;
                            var12 = 85;
                            var12 = var17[var12];
                            var18 = var16.bind(var3)(var12);
                            var17 = var18.recordTimings;
                            var16 = _closure2_slot7;
                            var12 = _closure2_slot6;
                            var12 = var17.bind(var18)(var16, var12);
                            _fun77652_ip = 4432;
                            continue _fun77652;
                        case 3617:
                            var12 = global;
                            var12 = var12.Set;
                            var16 = var12.prototype;
                            var16 = Object.create(var16, {
                                constructor: {
                                    value: var12
                                }
                            });
                            var44 = var16;
                            var12 = new var44[var12](var43);
                            var12 = var12 instanceof Object ? var12 : var16;
                            var _closure3_slot23 = var12;
                            var16 = _closure2_slot135;
                            var16 = var7 == var16;
                            var17 = undefined;
                            if (var16) {
                                _fun77652_ip = 3672;
                                continue _fun77652
                            }
                        case 3662:
                            var16 = _closure2_slot135;
                            var17 = var16.editingMessageId;
                        case 3672:
                            var16 = _closure2_slot44;
                            if (!(var17 !== var16)) {
                                _fun77652_ip = 3762;
                                continue _fun77652
                            }
                        case 3680:
                            var16 = _closure2_slot44;
                            if (!(var7 != var16)) {
                                _fun77652_ip = 3702;
                                continue _fun77652
                            }
                        case 3688:
                            var17 = var12.add;
                            var16 = _closure2_slot44;
                            var16 = var17.bind(var12)(var16);
                        case 3702:
                            var16 = _closure2_slot135;
                            var17 = var7 == var16;
                            var16 = undefined;
                            if (var17) {
                                _fun77652_ip = 3725;
                                continue _fun77652
                            }
                        case 3715:
                            var17 = _closure2_slot135;
                            var16 = var17.editingMessageId;
                        case 3725:
                            if (!(var7 != var16)) {
                                _fun77652_ip = 3762;
                                continue _fun77652
                            }
                        case 3729:
                            var17 = var12.add;
                            var16 = _closure2_slot135;
                            var18 = var7 == var16;
                            var16 = undefined;
                            if (var18) {
                                _fun77652_ip = 3757;
                                continue _fun77652
                            }
                        case 3747:
                            var18 = _closure2_slot135;
                            var16 = var18.editingMessageId;
                        case 3757:
                            var16 = var17.bind(var12)(var16);
                        case 3762:
                            var16 = _closure2_slot135;
                            var16 = var7 == var16;
                            var17 = undefined;
                            if (var16) {
                                _fun77652_ip = 3785;
                                continue _fun77652
                            }
                        case 3775:
                            var16 = _closure2_slot135;
                            var17 = var16.replyingMessageId;
                        case 3785:
                            var16 = _closure2_slot45;
                            if (!(var17 !== var16)) {
                                _fun77652_ip = 3875;
                                continue _fun77652
                            }
                        case 3793:
                            var16 = _closure2_slot45;
                            if (!(var7 != var16)) {
                                _fun77652_ip = 3815;
                                continue _fun77652
                            }
                        case 3801:
                            var17 = var12.add;
                            var16 = _closure2_slot45;
                            var16 = var17.bind(var12)(var16);
                        case 3815:
                            var16 = _closure2_slot135;
                            var17 = var7 == var16;
                            var16 = undefined;
                            if (var17) {
                                _fun77652_ip = 3838;
                                continue _fun77652
                            }
                        case 3828:
                            var17 = _closure2_slot135;
                            var16 = var17.replyingMessageId;
                        case 3838:
                            if (!(var7 != var16)) {
                                _fun77652_ip = 3875;
                                continue _fun77652
                            }
                        case 3842:
                            var17 = var12.add;
                            var16 = _closure2_slot135;
                            var18 = var7 == var16;
                            var16 = undefined;
                            if (var18) {
                                _fun77652_ip = 3870;
                                continue _fun77652
                            }
                        case 3860:
                            var18 = _closure2_slot135;
                            var16 = var18.replyingMessageId;
                        case 3870:
                            var16 = var17.bind(var12)(var16);
                        case 3875:
                            var17 = _closure2_slot69;
                            var16 = _closure2_slot138;
                            var16 = var7 != var16;
                            if (!var16) {
                                _fun77652_ip = 3916;
                                continue _fun77652
                            }
                        case 3890:
                            var18 = _closure2_slot138;
                            var18 = var18.ready;
                            if (var18) {
                                _fun77652_ip = 3913;
                                continue _fun77652
                            }
                        case 3903:
                            var19 = _closure2_slot138;
                            var18 = var19.cached;
                        case 3913:
                            var16 = var18;
                        case 3916:
                            if (!(var17 === var16)) {
                                _fun77652_ip = 4013;
                                continue _fun77652
                            }
                        case 3920:
                            var16 = _closure2_slot135;
                            var16 = var7 == var16;
                            var17 = undefined;
                            if (var16) {
                                _fun77652_ip = 3943;
                                continue _fun77652
                            }
                        case 3933:
                            var16 = _closure2_slot135;
                            var17 = var16.isCallActive;
                        case 3943:
                            var16 = _closure2_slot49;
                            if (!(var17 === var16)) {
                                _fun77652_ip = 4013;
                                continue _fun77652
                            }
                        case 3951:
                            var16 = _closure2_slot135;
                            var16 = var7 == var16;
                            var17 = undefined;
                            if (var16) {
                                _fun77652_ip = 3974;
                                continue _fun77652
                            }
                        case 3964:
                            var16 = _closure2_slot135;
                            var17 = var16.voiceStateChannelId;
                        case 3974:
                            var16 = _closure2_slot50;
                            if (!(var17 === var16)) {
                                _fun77652_ip = 4013;
                                continue _fun77652
                            }
                        case 3982:
                            var16 = _closure2_slot135;
                            var16 = var7 == var16;
                            var17 = undefined;
                            if (var16) {
                                _fun77652_ip = 4005;
                                continue _fun77652
                            }
                        case 3995:
                            var16 = _closure2_slot135;
                            var17 = var16.participantsLength;
                        case 4005:
                            var16 = _closure2_slot55;
                            if (!(var17 !== var16)) {
                                _fun77652_ip = 4094;
                                continue _fun77652
                            }
                        case 4013:
                            var17 = _closure1_slot1;
                            var18 = _closure1_slot2;
                            var16 = 92;
                            var16 = var18[var16];
                            var19 = var17.bind(var3)(var16);
                            var18 = var19.find;
                            var17 = _closure2_slot6;
                            var16 = var17.toArray;
                            var17 = var16.bind(var17)();
                            var16 = var17.reverse;
                            var17 = var16.bind(var17)();
                            var16 = function(arg0) { // Environment: var2
                                var0 = arg0;
                                var1 = var0.type;
                                var0 = _closure1_slot56;
                                var0 = var0.CALL;
                                var0 = var1 === var0;
                                return var0;
                            };
                            var16 = var18.bind(var19)(var17, var16);
                            if (!(var7 != var16)) {
                                _fun77652_ip = 4094;
                                continue _fun77652
                            }
                        case 4079:
                            var17 = var12.add;
                            var16 = var16.id;
                            var16 = var17.bind(var12)(var16);
                        case 4094:
                            var16 = _closure2_slot135;
                            var16 = var7 == var16;
                            var17 = undefined;
                            if (var16) {
                                _fun77652_ip = 4117;
                                continue _fun77652
                            }
                        case 4107:
                            var16 = _closure2_slot135;
                            var17 = var16.channelThreadsVersion;
                        case 4117:
                            var16 = _closure2_slot62;
                            var16 = var17 !== var16;
                            var _closure3_slot24 = var16;
                            var16 = _closure2_slot135;
                            var16 = var7 == var16;
                            var17 = undefined;
                            if (var16) {
                                _fun77652_ip = 4152;
                                continue _fun77652
                            }
                        case 4142:
                            var16 = _closure2_slot135;
                            var17 = var16.rsvpVersion;
                        case 4152:
                            var16 = _closure2_slot72;
                            var16 = var17 !== var16;
                            var _closure3_slot25 = var16;
                            var16 = _closure2_slot135;
                            var16 = var7 == var16;
                            var17 = undefined;
                            if (var16) {
                                _fun77652_ip = 4187;
                                continue _fun77652
                            }
                        case 4177:
                            var16 = _closure2_slot135;
                            var17 = var16.repliedIds;
                        case 4187:
                            var16 = _closure2_slot57;
                            var16 = var17 !== var16;
                            var _closure3_slot26 = var16;
                            var16 = _closure2_slot135;
                            var16 = var7 == var16;
                            var17 = undefined;
                            if (var16) {
                                _fun77652_ip = 4222;
                                continue _fun77652
                            }
                        case 4212:
                            var16 = _closure2_slot135;
                            var17 = var16.hasLoadedExperiments;
                        case 4222:
                            var16 = _closure2_slot66;
                            var16 = var17 !== var16;
                            var _closure3_slot27 = var16;
                            var16 = _closure2_slot135;
                            var17 = var7 == var16;
                            var16 = undefined;
                            if (var17) {
                                _fun77652_ip = 4257;
                                continue _fun77652
                            }
                        case 4247:
                            var17 = _closure2_slot135;
                            var16 = var17.communicationDisabledVersion;
                        case 4257:
                            var17 = var7 != var16;
                            var7 = -1;
                            if (!var17) {
                                _fun77652_ip = 4273;
                                continue _fun77652
                            }
                        case 4270:
                            var7 = var16;
                        case 4273:
                            var _closure3_slot28 = var7;
                            var7 = !var15;
                            if (var15) {
                                _fun77652_ip = 4286;
                                continue _fun77652
                            }
                        case 4283:
                            var7 = var4;
                        case 4286:
                            var _closure3_slot29 = var7;
                            var15 = _closure2_slot6;
                            var4 = var15.forEach;
                            var2 = function(arg0) { // Environment: var2
                                _fun77654: for (var _fun77654_ip = 0;;) switch (_fun77654_ip) {
                                    case 0:
                                        var0 = arg0;
                                        var2 = _closure3_slot21;
                                        if (!var2) {
                                            _fun77654_ip = 55;
                                            continue _fun77654
                                        }
                                    case 13:
                                        var2 = var0.activity;
                                        var3 = null;
                                        var4 = var3 == var2;
                                        var3 = undefined;
                                        if (var4) {
                                            _fun77654_ip = 35;
                                            continue _fun77654
                                        }
                                    case 30:
                                        var3 = var2.type;
                                    case 35:
                                        var2 = _closure1_slot60;
                                        var2 = var2.STREAM_REQUEST;
                                        if (!(var3 !== var2)) {
                                            _fun77654_ip = 3312;
                                            continue _fun77654
                                        }
                                    case 55:
                                        var2 = _closure3_slot27;
                                        if (!var2) {
                                            _fun77654_ip = 87;
                                            continue _fun77654
                                        }
                                    case 62:
                                        var3 = var0.type;
                                        var2 = _closure1_slot56;
                                        var2 = var2.USER_JOIN;
                                        if (!(var3 !== var2)) {
                                            _fun77654_ip = 3291;
                                            continue _fun77654
                                        }
                                    case 87:
                                        var2 = _closure3_slot26;
                                        if (!var2) {
                                            _fun77654_ip = 157;
                                            continue _fun77654
                                        }
                                    case 94:
                                        var3 = var0.type;
                                        var2 = _closure1_slot56;
                                        var2 = var2.REPLY;
                                        if (!(var3 === var2)) {
                                            _fun77654_ip = 157;
                                            continue _fun77654
                                        }
                                    case 116:
                                        var2 = var0.messageReference;
                                        var3 = null;
                                        if (!(var3 != var2)) {
                                            _fun77654_ip = 157;
                                            continue _fun77654
                                        }
                                    case 128:
                                        var4 = _closure2_slot57;
                                        var3 = var4.has;
                                        var2 = var2.message_id;
                                        var2 = var3.bind(var4)(var2);
                                        if (var2) {
                                            _fun77654_ip = 3268;
                                            continue _fun77654
                                        }
                                    case 157:
                                        var2 = _closure3_slot24;
                                        if (!var2) {
                                            _fun77654_ip = 194;
                                            continue _fun77654
                                        }
                                    case 164:
                                        var3 = var0.hasFlag;
                                        var2 = _closure1_slot57;
                                        var2 = var2.HAS_THREAD;
                                        var2 = var3.bind(var0)(var2);
                                        if (var2) {
                                            _fun77654_ip = 3247;
                                            continue _fun77654
                                        }
                                    case 194:
                                        var2 = _closure3_slot25;
                                        if (!var2) {
                                            _fun77654_ip = 221;
                                            continue _fun77654
                                        }
                                    case 201:
                                        var2 = var0.codedLinks;
                                        var3 = var2.length;
                                        var2 = 0;
                                        if (!(!(var3 > var2))) {
                                            _fun77654_ip = 3226;
                                            continue _fun77654
                                        }
                                    case 221:
                                        var2 = _closure3_slot18;
                                        if (!var2) {
                                            _fun77654_ip = 253;
                                            continue _fun77654
                                        }
                                    case 228:
                                        var3 = var0.type;
                                        var2 = _closure1_slot56;
                                        var2 = var2.EMOJI_ADDED;
                                        if (!(var3 !== var2)) {
                                            _fun77654_ip = 3205;
                                            continue _fun77654
                                        }
                                    case 253:
                                        var2 = _closure3_slot9;
                                        if (var2) {
                                            _fun77654_ip = 3181;
                                            continue _fun77654
                                        }
                                    case 263:
                                        var2 = _closure3_slot6;
                                        if (!var2) {
                                            _fun77654_ip = 324;
                                            continue _fun77654
                                        }
                                    case 270:
                                        var4 = _closure2_slot8;
                                        var3 = null;
                                        if (!(var3 != var4)) {
                                            _fun77654_ip = 324;
                                            continue _fun77654
                                        }
                                    case 283:
                                        var5 = _closure1_slot41;
                                        var4 = _closure2_slot8;
                                        var2 = var0.author;
                                        var3 = var2.id;
                                        var2 = undefined;
                                        var3 = var5.bind(var2)(var4, var3);
                                        var2 = _closure3_slot28;
                                        if (!(!(var3 > var2))) {
                                            _fun77654_ip = 3181;
                                            continue _fun77654
                                        }
                                    case 324:
                                        var2 = _closure3_slot7;
                                        if (!var2) {
                                            _fun77654_ip = 371;
                                            continue _fun77654
                                        }
                                    case 331:
                                        var2 = _closure2_slot8;
                                        var4 = null;
                                        if (!(var4 != var2)) {
                                            _fun77654_ip = 371;
                                            continue _fun77654
                                        }
                                    case 344:
                                        var3 = var0.author;
                                        var7 = var4 == var3;
                                        var2 = undefined;
                                        if (var7) {
                                            _fun77654_ip = 364;
                                            continue _fun77654
                                        }
                                    case 359:
                                        var2 = var3.id;
                                    case 364:
                                        if (!(var4 == var2)) {
                                            _fun77654_ip = 3084;
                                            continue _fun77654
                                        }
                                    case 371:
                                        var2 = _closure3_slot8;
                                        if (!var2) {
                                            _fun77654_ip = 403;
                                            continue _fun77654
                                        }
                                    case 378:
                                        var2 = var0.author;
                                        var3 = var2.id;
                                        var2 = _closure2_slot11;
                                        if (!(var3 !== var2)) {
                                            _fun77654_ip = 3060;
                                            continue _fun77654
                                        }
                                    case 403:
                                        var2 = _closure3_slot1;
                                        if (!var2) {
                                            _fun77654_ip = 485;
                                            continue _fun77654
                                        }
                                    case 410:
                                        var3 = _closure2_slot135;
                                        var8 = null;
                                        var3 = var8 == var3;
                                        var7 = undefined;
                                        if (var3) {
                                            _fun77654_ip = 438;
                                            continue _fun77654
                                        }
                                    case 428:
                                        var3 = _closure2_slot135;
                                        var7 = var3.interactionStates;
                                    case 438:
                                        if (!(var8 == var7)) {
                                            _fun77654_ip = 444;
                                            continue _fun77654
                                        }
                                    case 442:
                                        var7 = {};
                                    case 444:
                                        var3 = var0.id;
                                        var3 = var7[var3];
                                        var7 = _closure2_slot63;
                                        if (!(var8 == var7)) {
                                            _fun77654_ip = 465;
                                            continue _fun77654
                                        }
                                    case 461:
                                        var7 = {};
                                        _fun77654_ip = 469;
                                        continue _fun77654;
                                    case 465:
                                        var7 = _closure2_slot63;
                                    case 469:
                                        var2 = var0.id;
                                        var2 = var7[var2];
                                        if (!(var3 === var2)) {
                                            _fun77654_ip = 3037;
                                            continue _fun77654
                                        }
                                    case 485:
                                        var2 = _closure3_slot4;
                                        if (!var2) {
                                            _fun77654_ip = 583;
                                            continue _fun77654
                                        }
                                    case 492:
                                        var2 = _closure2_slot135;
                                        var9 = null;
                                        var8 = var9 == var2;
                                        var2 = undefined;
                                        if (var8) {
                                            _fun77654_ip = 544;
                                            continue _fun77654
                                        }
                                    case 510:
                                        var8 = _closure2_slot135;
                                        var11 = var8.interactionComponentStates;
                                        var8 = var9 == var11;
                                        var2 = undefined;
                                        if (var8) {
                                            _fun77654_ip = 544;
                                            continue _fun77654
                                        }
                                    case 529:
                                        var10 = var11.get;
                                        var8 = var0.id;
                                        var2 = var10.bind(var11)(var8);
                                    case 544:
                                        var8 = _closure2_slot64;
                                        var8 = var9 == var8;
                                        var3 = undefined;
                                        if (var8) {
                                            _fun77654_ip = 576;
                                            continue _fun77654
                                        }
                                    case 557:
                                        var9 = _closure2_slot64;
                                        var8 = var9.get;
                                        var7 = var0.id;
                                        var3 = var8.bind(var9)(var7);
                                    case 576:
                                        if (!(var2 === var3)) {
                                            _fun77654_ip = 3014;
                                            continue _fun77654
                                        }
                                    case 583:
                                        var2 = _closure3_slot5;
                                        if (!var2) {
                                            _fun77654_ip = 610;
                                            continue _fun77654
                                        }
                                    case 590:
                                        var2 = var0.components;
                                        var3 = var2.length;
                                        var2 = 0;
                                        if (!(var2 === var3)) {
                                            _fun77654_ip = 2990;
                                            continue _fun77654
                                        }
                                    case 610:
                                        var2 = _closure3_slot2;
                                        if (!var2) {
                                            _fun77654_ip = 692;
                                            continue _fun77654
                                        }
                                    case 617:
                                        var3 = _closure2_slot135;
                                        var8 = null;
                                        var3 = var8 == var3;
                                        var7 = undefined;
                                        if (var3) {
                                            _fun77654_ip = 645;
                                            continue _fun77654
                                        }
                                    case 635:
                                        var3 = _closure2_slot135;
                                        var7 = var3.channelPolls;
                                    case 645:
                                        if (!(var8 == var7)) {
                                            _fun77654_ip = 651;
                                            continue _fun77654
                                        }
                                    case 649:
                                        var7 = {};
                                    case 651:
                                        var3 = var0.id;
                                        var3 = var7[var3];
                                        var7 = _closure2_slot94;
                                        if (!(var8 == var7)) {
                                            _fun77654_ip = 672;
                                            continue _fun77654
                                        }
                                    case 668:
                                        var7 = {};
                                        _fun77654_ip = 676;
                                        continue _fun77654;
                                    case 672:
                                        var7 = _closure2_slot94;
                                    case 676:
                                        var2 = var0.id;
                                        var2 = var7[var2];
                                        if (!(var3 === var2)) {
                                            _fun77654_ip = 2967;
                                            continue _fun77654
                                        }
                                    case 692:
                                        var2 = _closure3_slot3;
                                        if (!var2) {
                                            _fun77654_ip = 789;
                                            continue _fun77654
                                        }
                                    case 699:
                                        var3 = var0.messageReference;
                                        var9 = null;
                                        var8 = var9 == var3;
                                        var7 = undefined;
                                        if (var8) {
                                            _fun77654_ip = 722;
                                            continue _fun77654
                                        }
                                    case 716:
                                        var7 = var3.message_id;
                                    case 722:
                                        if (!(var9 != var7)) {
                                            _fun77654_ip = 789;
                                            continue _fun77654
                                        }
                                    case 726:
                                        var3 = _closure2_slot135;
                                        var3 = var9 == var3;
                                        var2 = undefined;
                                        if (var3) {
                                            _fun77654_ip = 752;
                                            continue _fun77654
                                        }
                                    case 742:
                                        var3 = _closure2_slot135;
                                        var2 = var3.messageReferencePolls;
                                    case 752:
                                        if (!(var9 == var2)) {
                                            _fun77654_ip = 758;
                                            continue _fun77654
                                        }
                                    case 756:
                                        var2 = {};
                                    case 758:
                                        var3 = var2[var7];
                                        var2 = _closure2_slot96;
                                        if (!(var9 == var2)) {
                                            _fun77654_ip = 774;
                                            continue _fun77654
                                        }
                                    case 770:
                                        var2 = {};
                                        _fun77654_ip = 778;
                                        continue _fun77654;
                                    case 774:
                                        var2 = _closure2_slot96;
                                    case 778:
                                        var2 = var2[var7];
                                        if (!(var3 === var2)) {
                                            _fun77654_ip = 2944;
                                            continue _fun77654
                                        }
                                    case 789:
                                        var2 = _closure3_slot12;
                                        if (!var2) {
                                            _fun77654_ip = 938;
                                            continue _fun77654
                                        }
                                    case 799:
                                        var3 = _closure2_slot135;
                                        var8 = null;
                                        var3 = var8 == var3;
                                        var9 = undefined;
                                        if (var3) {
                                            _fun77654_ip = 827;
                                            continue _fun77654
                                        }
                                    case 817:
                                        var3 = _closure2_slot135;
                                        var9 = var3.unloadedContentEntryMessageIds;
                                    case 827:
                                        if (!(var8 == var9)) {
                                            _fun77654_ip = 859;
                                            continue _fun77654
                                        }
                                    case 831:
                                        var3 = global;
                                        var3 = var3.Set;
                                        var7 = var3.prototype;
                                        var7 = Object.create(var7, {
                                            constructor: {
                                                value: var3
                                            }
                                        });
                                        var23 = var7;
                                        var3 = new var23[var3](var22);
                                        var9 = var3 instanceof Object ? var3 : var7;
                                    case 859:
                                        var7 = var9.has;
                                        var3 = var0.id;
                                        var3 = var7.bind(var9)(var3);
                                        var7 = _closure2_slot99;
                                        if (!(var8 == var7)) {
                                            _fun77654_ip = 912;
                                            continue _fun77654
                                        }
                                    case 882:
                                        var7 = global;
                                        var7 = var7.Set;
                                        var8 = var7.prototype;
                                        var8 = Object.create(var8, {
                                            constructor: {
                                                value: var7
                                            }
                                        });
                                        var23 = var8;
                                        var7 = new var23[var7](var22);
                                        var8 = var7 instanceof Object ? var7 : var8;
                                        _fun77654_ip = 916;
                                        continue _fun77654;
                                    case 912:
                                        var8 = _closure2_slot99;
                                    case 916:
                                        var7 = var8.has;
                                        var2 = var0.id;
                                        var2 = var7.bind(var8)(var2);
                                        if (!(var3 === var2)) {
                                            _fun77654_ip = 2921;
                                            continue _fun77654
                                        }
                                    case 938:
                                        var7 = _closure2_slot1;
                                        var2 = var7.isForumPost;
                                        var2 = var2.bind(var7)();
                                        if (!var2) {
                                            _fun77654_ip = 1024;
                                            continue _fun77654
                                        }
                                    case 958:
                                        var2 = _closure3_slot10;
                                        if (var2) {
                                            _fun77654_ip = 972;
                                            continue _fun77654
                                        }
                                    case 965:
                                        var2 = _closure3_slot11;
                                        if (!var2) {
                                            _fun77654_ip = 1024;
                                            continue _fun77654
                                        }
                                    case 972:
                                        var7 = var0.id;
                                        var9 = _closure1_slot1;
                                        var8 = _closure1_slot2;
                                        var2 = 101;
                                        var8 = var8[var2];
                                        var2 = undefined;
                                        var9 = var9.bind(var2)(var8);
                                        var8 = var9.castChannelIdAsMessageId;
                                        var2 = _closure2_slot7;
                                        var2 = var8.bind(var9)(var2);
                                        if (!(var7 !== var2)) {
                                            _fun77654_ip = 2897;
                                            continue _fun77654
                                        }
                                    case 1024:
                                        var2 = _closure3_slot14;
                                        if (!var2) {
                                            _fun77654_ip = 1046;
                                            continue _fun77654
                                        }
                                    case 1031:
                                        var7 = var0.activityInstance;
                                        var2 = null;
                                        if (!(var2 == var7)) {
                                            _fun77654_ip = 2873;
                                            continue _fun77654
                                        }
                                    case 1046:
                                        var2 = _closure3_slot15;
                                        if (!var2) {
                                            _fun77654_ip = 1080;
                                            continue _fun77654
                                        }
                                    case 1053:
                                        var9 = var0.activity;
                                        var8 = null;
                                        var10 = var8 == var9;
                                        var7 = undefined;
                                        if (var10) {
                                            _fun77654_ip = 1076;
                                            continue _fun77654
                                        }
                                    case 1070:
                                        var7 = var9.party_id;
                                    case 1076:
                                        var2 = var8 != var7;
                                    case 1080:
                                        if (!var2) {
                                            _fun77654_ip = 1102;
                                            continue _fun77654
                                        }
                                    case 1083:
                                        var8 = _closure3_slot23;
                                        var7 = var8.add;
                                        var2 = var0.id;
                                        var2 = var7.bind(var8)(var2);
                                    case 1102:
                                        var2 = _closure3_slot20;
                                        if (var2) {
                                            _fun77654_ip = 1116;
                                            continue _fun77654
                                        }
                                    case 1109:
                                        var2 = _closure3_slot22;
                                        if (!var2) {
                                            _fun77654_ip = 1162;
                                            continue _fun77654
                                        }
                                    case 1116:
                                        var8 = var0.activity;
                                        var7 = null;
                                        var9 = var7 == var8;
                                        var2 = undefined;
                                        if (var9) {
                                            _fun77654_ip = 1139;
                                            continue _fun77654
                                        }
                                    case 1133:
                                        var2 = var8.party_id;
                                    case 1139:
                                        if (!(var7 != var2)) {
                                            _fun77654_ip = 1162;
                                            continue _fun77654
                                        }
                                    case 1143:
                                        var8 = _closure3_slot23;
                                        var7 = var8.add;
                                        var2 = var0.id;
                                        var2 = var7.bind(var8)(var2);
                                    case 1162:
                                        var2 = var0.author;
                                        var9 = null;
                                        if (!(var9 != var2)) {
                                            _fun77654_ip = 3331;
                                            continue _fun77654
                                        }
                                    case 1177:
                                        var19 = {};
                                        var2 = _closure2_slot135;
                                        var8 = var9 == var2;
                                        var7 = undefined;
                                        var2 = undefined;
                                        if (var8) {
                                            _fun77654_ip = 1204;
                                            continue _fun77654
                                        }
                                    case 1194:
                                        var8 = _closure2_slot135;
                                        var2 = var8.messageAuthorActivities;
                                    case 1204:
                                        if (!(var9 == var2)) {
                                            _fun77654_ip = 1210;
                                            continue _fun77654
                                        }
                                    case 1208:
                                        var2 = {};
                                    case 1210:
                                        var19.messageAuthorActivities = var2;
                                        var18 = {};
                                        var2 = _closure2_slot22;
                                        if (!(var9 == var2)) {
                                            _fun77654_ip = 1229;
                                            continue _fun77654
                                        }
                                    case 1225:
                                        var2 = {};
                                        _fun77654_ip = 1233;
                                        continue _fun77654;
                                    case 1229:
                                        var2 = _closure2_slot22;
                                    case 1233:
                                        var18.messageAuthorActivities = var2;
                                        var17 = {};
                                        var2 = _closure2_slot135;
                                        var8 = var9 == var2;
                                        var2 = undefined;
                                        if (var8) {
                                            _fun77654_ip = 1263;
                                            continue _fun77654
                                        }
                                    case 1253:
                                        var8 = _closure2_slot135;
                                        var2 = var8.invites;
                                    case 1263:
                                        if (!(var9 == var2)) {
                                            _fun77654_ip = 1295;
                                            continue _fun77654
                                        }
                                    case 1267:
                                        var8 = global;
                                        var8 = var8.Map;
                                        var10 = var8.prototype;
                                        var10 = Object.create(var10, {
                                            constructor: {
                                                value: var8
                                            }
                                        });
                                        var23 = var10;
                                        var8 = new var23[var8](var22);
                                        var2 = var8 instanceof Object ? var8 : var10;
                                    case 1295:
                                        var17.invites = var2;
                                        var2 = _closure2_slot135;
                                        var8 = var9 == var2;
                                        var2 = undefined;
                                        if (var8) {
                                            _fun77654_ip = 1323;
                                            continue _fun77654
                                        }
                                    case 1313:
                                        var8 = _closure2_slot135;
                                        var2 = var8.appDirectoryEmbedApplications;
                                    case 1323:
                                        if (!(var9 == var2)) {
                                            _fun77654_ip = 1329;
                                            continue _fun77654
                                        }
                                    case 1327:
                                        var2 = {};
                                    case 1329:
                                        var17.appDirectoryEmbedApplications = var2;
                                        var2 = _closure2_slot135;
                                        var8 = var9 == var2;
                                        var2 = undefined;
                                        if (var8) {
                                            _fun77654_ip = 1357;
                                            continue _fun77654
                                        }
                                    case 1347:
                                        var8 = _closure2_slot135;
                                        var2 = var8.invalidAppDirectoryEmbedApplicationIds;
                                    case 1357:
                                        if (!(var9 == var2)) {
                                            _fun77654_ip = 1389;
                                            continue _fun77654
                                        }
                                    case 1361:
                                        var8 = global;
                                        var8 = var8.Set;
                                        var10 = var8.prototype;
                                        var10 = Object.create(var10, {
                                            constructor: {
                                                value: var8
                                            }
                                        });
                                        var23 = var10;
                                        var8 = new var23[var8](var22);
                                        var2 = var8 instanceof Object ? var8 : var10;
                                    case 1389:
                                        var17.invalidAppDirectoryEmbedApplicationIds = var2;
                                        var2 = _closure2_slot135;
                                        var8 = var9 == var2;
                                        var2 = undefined;
                                        if (var8) {
                                            _fun77654_ip = 1417;
                                            continue _fun77654
                                        }
                                    case 1407:
                                        var8 = _closure2_slot135;
                                        var2 = var8.invalidApplicationIds;
                                    case 1417:
                                        if (!(var9 == var2)) {
                                            _fun77654_ip = 1425;
                                            continue _fun77654
                                        }
                                    case 1421:
                                        var2 = new Array(0);
                                    case 1425:
                                        var17.invalidApplicationIds = var2;
                                        var2 = _closure2_slot135;
                                        var8 = var9 == var2;
                                        var2 = undefined;
                                        if (var8) {
                                            _fun77654_ip = 1453;
                                            continue _fun77654
                                        }
                                    case 1443:
                                        var8 = _closure2_slot135;
                                        var2 = var8.activityParticipants;
                                    case 1453:
                                        if (!(var9 == var2)) {
                                            _fun77654_ip = 1461;
                                            continue _fun77654
                                        }
                                    case 1457:
                                        var2 = new Array(0);
                                    case 1461:
                                        var17.activityParticipants = var2;
                                        var2 = _closure2_slot135;
                                        var8 = var9 == var2;
                                        var2 = undefined;
                                        if (var8) {
                                            _fun77654_ip = 1489;
                                            continue _fun77654
                                        }
                                    case 1479:
                                        var8 = _closure2_slot135;
                                        var2 = var8.applicationAssetFetchingIds;
                                    case 1489:
                                        if (!(var9 == var2)) {
                                            _fun77654_ip = 1497;
                                            continue _fun77654
                                        }
                                    case 1493:
                                        var2 = new Array(0);
                                    case 1497:
                                        var17.applicationAssetFetchingIds = var2;
                                        var2 = _closure2_slot135;
                                        var8 = var9 == var2;
                                        var2 = undefined;
                                        if (var8) {
                                            _fun77654_ip = 1525;
                                            continue _fun77654
                                        }
                                    case 1515:
                                        var8 = _closure2_slot135;
                                        var2 = var8.appDirectoryEmbedApplicationFetchStates;
                                    case 1525:
                                        if (!(var9 == var2)) {
                                            _fun77654_ip = 1531;
                                            continue _fun77654
                                        }
                                    case 1529:
                                        var2 = {};
                                    case 1531:
                                        var17.appDirectoryEmbedApplicationFetchStates = var2;
                                        var2 = _closure2_slot135;
                                        var8 = var9 == var2;
                                        var2 = undefined;
                                        if (var8) {
                                            _fun77654_ip = 1559;
                                            continue _fun77654
                                        }
                                    case 1549:
                                        var8 = _closure2_slot135;
                                        var2 = var8.guildTemplates;
                                    case 1559:
                                        if (!(var9 == var2)) {
                                            _fun77654_ip = 1591;
                                            continue _fun77654
                                        }
                                    case 1563:
                                        var8 = global;
                                        var8 = var8.Map;
                                        var10 = var8.prototype;
                                        var10 = Object.create(var10, {
                                            constructor: {
                                                value: var8
                                            }
                                        });
                                        var23 = var10;
                                        var8 = new var23[var8](var22);
                                        var2 = var8 instanceof Object ? var8 : var10;
                                    case 1591:
                                        var17.guildTemplates = var2;
                                        var2 = _closure2_slot135;
                                        var8 = var9 == var2;
                                        var2 = undefined;
                                        if (var8) {
                                            _fun77654_ip = 1619;
                                            continue _fun77654
                                        }
                                    case 1609:
                                        var8 = _closure2_slot135;
                                        var2 = var8.buildOverrides;
                                    case 1619:
                                        if (!(var9 == var2)) {
                                            _fun77654_ip = 1625;
                                            continue _fun77654
                                        }
                                    case 1623:
                                        var2 = {};
                                    case 1625:
                                        var17.buildOverrides = var2;
                                        var2 = _closure2_slot135;
                                        var8 = var9 == var2;
                                        var2 = undefined;
                                        if (var8) {
                                            _fun77654_ip = 1653;
                                            continue _fun77654
                                        }
                                    case 1643:
                                        var8 = _closure2_slot135;
                                        var2 = var8.experimentEmbeds;
                                    case 1653:
                                        if (!(var9 == var2)) {
                                            _fun77654_ip = 1659;
                                            continue _fun77654
                                        }
                                    case 1657:
                                        var2 = {};
                                    case 1659:
                                        var17.experimentEmbeds = var2;
                                        var2 = _closure2_slot135;
                                        var8 = var9 == var2;
                                        var2 = undefined;
                                        if (var8) {
                                            _fun77654_ip = 1687;
                                            continue _fun77654
                                        }
                                    case 1677:
                                        var8 = _closure2_slot135;
                                        var2 = var8.quests;
                                    case 1687:
                                        if (!(var9 == var2)) {
                                            _fun77654_ip = 1695;
                                            continue _fun77654
                                        }
                                    case 1691:
                                        var2 = new Array(0);
                                    case 1695:
                                        var17.quests = var2;
                                        var2 = _closure2_slot135;
                                        var2 = var9 == var2;
                                        var8 = undefined;
                                        if (var2) {
                                            _fun77654_ip = 1723;
                                            continue _fun77654
                                        }
                                    case 1713:
                                        var2 = _closure2_slot135;
                                        var8 = var2.isFetchingCurrentQuests;
                                    case 1723:
                                        var2 = var9 != var8;
                                        if (!var2) {
                                            _fun77654_ip = 1733;
                                            continue _fun77654
                                        }
                                    case 1730:
                                        var2 = var8;
                                    case 1733:
                                        var17.isFetchingCurrentQuests = var2;
                                        var16 = {};
                                        var2 = _closure2_slot24;
                                        if (!(var9 == var2)) {
                                            _fun77654_ip = 1778;
                                            continue _fun77654
                                        }
                                    case 1748:
                                        var2 = global;
                                        var2 = var2.Map;
                                        var8 = var2.prototype;
                                        var8 = Object.create(var8, {
                                            constructor: {
                                                value: var2
                                            }
                                        });
                                        var23 = var8;
                                        var2 = new var23[var2](var22);
                                        var2 = var2 instanceof Object ? var2 : var8;
                                        _fun77654_ip = 1782;
                                        continue _fun77654;
                                    case 1778:
                                        var2 = _closure2_slot24;
                                    case 1782:
                                        var16.invites = var2;
                                        var2 = _closure2_slot25;
                                        if (!(var9 == var2)) {
                                            _fun77654_ip = 1799;
                                            continue _fun77654
                                        }
                                    case 1795:
                                        var2 = {};
                                        _fun77654_ip = 1803;
                                        continue _fun77654;
                                    case 1799:
                                        var2 = _closure2_slot25;
                                    case 1803:
                                        var16.appDirectoryEmbedApplications = var2;
                                        var2 = _closure2_slot26;
                                        if (!(var9 == var2)) {
                                            _fun77654_ip = 1846;
                                            continue _fun77654
                                        }
                                    case 1816:
                                        var2 = global;
                                        var2 = var2.Set;
                                        var8 = var2.prototype;
                                        var8 = Object.create(var8, {
                                            constructor: {
                                                value: var2
                                            }
                                        });
                                        var23 = var8;
                                        var2 = new var23[var2](var22);
                                        var2 = var2 instanceof Object ? var2 : var8;
                                        _fun77654_ip = 1850;
                                        continue _fun77654;
                                    case 1846:
                                        var2 = _closure2_slot26;
                                    case 1850:
                                        var16.invalidAppDirectoryEmbedApplicationIds = var2;
                                        var2 = _closure2_slot28;
                                        if (!(var9 == var2)) {
                                            _fun77654_ip = 1869;
                                            continue _fun77654
                                        }
                                    case 1863:
                                        var2 = new Array(0);
                                        _fun77654_ip = 1873;
                                        continue _fun77654;
                                    case 1869:
                                        var2 = _closure2_slot28;
                                    case 1873:
                                        var16.invalidApplicationIds = var2;
                                        var2 = _closure2_slot32;
                                        if (!(var9 == var2)) {
                                            _fun77654_ip = 1892;
                                            continue _fun77654
                                        }
                                    case 1886:
                                        var2 = new Array(0);
                                        _fun77654_ip = 1896;
                                        continue _fun77654;
                                    case 1892:
                                        var2 = _closure2_slot32;
                                    case 1896:
                                        var16.activityParticipants = var2;
                                        var2 = _closure2_slot29;
                                        if (!(var9 == var2)) {
                                            _fun77654_ip = 1915;
                                            continue _fun77654
                                        }
                                    case 1909:
                                        var2 = new Array(0);
                                        _fun77654_ip = 1919;
                                        continue _fun77654;
                                    case 1915:
                                        var2 = _closure2_slot29;
                                    case 1919:
                                        var16.applicationAssetFetchingIds = var2;
                                        var2 = _closure2_slot27;
                                        if (!(var9 == var2)) {
                                            _fun77654_ip = 1936;
                                            continue _fun77654
                                        }
                                    case 1932:
                                        var2 = {};
                                        _fun77654_ip = 1940;
                                        continue _fun77654;
                                    case 1936:
                                        var2 = _closure2_slot27;
                                    case 1940:
                                        var16.appDirectoryEmbedApplicationFetchStates = var2;
                                        var2 = _closure2_slot35;
                                        if (!(var9 == var2)) {
                                            _fun77654_ip = 1983;
                                            continue _fun77654
                                        }
                                    case 1953:
                                        var2 = global;
                                        var2 = var2.Map;
                                        var8 = var2.prototype;
                                        var8 = Object.create(var8, {
                                            constructor: {
                                                value: var2
                                            }
                                        });
                                        var23 = var8;
                                        var2 = new var23[var2](var22);
                                        var2 = var2 instanceof Object ? var2 : var8;
                                        _fun77654_ip = 1987;
                                        continue _fun77654;
                                    case 1983:
                                        var2 = _closure2_slot35;
                                    case 1987:
                                        var16.guildTemplates = var2;
                                        var2 = _closure2_slot36;
                                        if (!(var9 == var2)) {
                                            _fun77654_ip = 2004;
                                            continue _fun77654
                                        }
                                    case 2000:
                                        var2 = {};
                                        _fun77654_ip = 2008;
                                        continue _fun77654;
                                    case 2004:
                                        var2 = _closure2_slot36;
                                    case 2008:
                                        var16.buildOverrides = var2;
                                        var2 = _closure2_slot37;
                                        if (!(var9 == var2)) {
                                            _fun77654_ip = 2025;
                                            continue _fun77654
                                        }
                                    case 2021:
                                        var2 = {};
                                        _fun77654_ip = 2029;
                                        continue _fun77654;
                                    case 2025:
                                        var2 = _closure2_slot37;
                                    case 2029:
                                        var16.experimentEmbeds = var2;
                                        var2 = _closure2_slot38;
                                        if (!(var9 == var2)) {
                                            _fun77654_ip = 2048;
                                            continue _fun77654
                                        }
                                    case 2042:
                                        var2 = new Array(0);
                                        _fun77654_ip = 2052;
                                        continue _fun77654;
                                    case 2048:
                                        var2 = _closure2_slot38;
                                    case 2052:
                                        var16.quests = var2;
                                        var2 = _closure2_slot39;
                                        var2 = var9 != var2;
                                        if (!var2) {
                                            _fun77654_ip = 2072;
                                            continue _fun77654
                                        }
                                    case 2068:
                                        var2 = _closure2_slot39;
                                    case 2072:
                                        var16.isFetchingCurrentQuests = var2;
                                        var15 = {};
                                        var2 = _closure2_slot135;
                                        var8 = var9 == var2;
                                        var2 = undefined;
                                        if (var8) {
                                            _fun77654_ip = 2102;
                                            continue _fun77654
                                        }
                                    case 2092:
                                        var8 = _closure2_slot135;
                                        var2 = var8.resolvingGiftCodes;
                                    case 2102:
                                        if (!(var9 == var2)) {
                                            _fun77654_ip = 2110;
                                            continue _fun77654
                                        }
                                    case 2106:
                                        var2 = new Array(0);
                                    case 2110:
                                        var15.resolvingGiftCodes = var2;
                                        var2 = _closure2_slot135;
                                        var8 = var9 == var2;
                                        var2 = undefined;
                                        if (var8) {
                                            _fun77654_ip = 2138;
                                            continue _fun77654
                                        }
                                    case 2128:
                                        var8 = _closure2_slot135;
                                        var2 = var8.resolvedGiftCodes;
                                    case 2138:
                                        if (!(var9 == var2)) {
                                            _fun77654_ip = 2146;
                                            continue _fun77654
                                        }
                                    case 2142:
                                        var2 = new Array(0);
                                    case 2146:
                                        var15.resolvedGiftCodes = var2;
                                        var2 = _closure2_slot135;
                                        var8 = var9 == var2;
                                        var2 = undefined;
                                        if (var8) {
                                            _fun77654_ip = 2174;
                                            continue _fun77654
                                        }
                                    case 2164:
                                        var8 = _closure2_slot135;
                                        var2 = var8.acceptingGiftCodes;
                                    case 2174:
                                        if (!(var9 == var2)) {
                                            _fun77654_ip = 2182;
                                            continue _fun77654
                                        }
                                    case 2178:
                                        var2 = new Array(0);
                                    case 2182:
                                        var15.acceptingGiftCodes = var2;
                                        var14 = {};
                                        var2 = _closure2_slot52;
                                        if (!(var9 == var2)) {
                                            _fun77654_ip = 2203;
                                            continue _fun77654
                                        }
                                    case 2197:
                                        var2 = new Array(0);
                                        _fun77654_ip = 2207;
                                        continue _fun77654;
                                    case 2203:
                                        var2 = _closure2_slot52;
                                    case 2207:
                                        var14.resolvingGiftCodes = var2;
                                        var2 = _closure2_slot53;
                                        if (!(var9 == var2)) {
                                            _fun77654_ip = 2226;
                                            continue _fun77654
                                        }
                                    case 2220:
                                        var2 = new Array(0);
                                        _fun77654_ip = 2230;
                                        continue _fun77654;
                                    case 2226:
                                        var2 = _closure2_slot53;
                                    case 2230:
                                        var14.resolvedGiftCodes = var2;
                                        var2 = _closure2_slot54;
                                        if (!(var9 == var2)) {
                                            _fun77654_ip = 2249;
                                            continue _fun77654
                                        }
                                    case 2243:
                                        var2 = new Array(0);
                                        _fun77654_ip = 2253;
                                        continue _fun77654;
                                    case 2249:
                                        var2 = _closure2_slot54;
                                    case 2253:
                                        var14.acceptingGiftCodes = var2;
                                        var12 = {};
                                        var2 = _closure2_slot135;
                                        var8 = var9 == var2;
                                        var2 = undefined;
                                        if (var8) {
                                            _fun77654_ip = 2283;
                                            continue _fun77654
                                        }
                                    case 2273:
                                        var8 = _closure2_slot135;
                                        var2 = var8.mediaPostPreviewEmbeds;
                                    case 2283:
                                        if (!(var9 == var2)) {
                                            _fun77654_ip = 2289;
                                            continue _fun77654
                                        }
                                    case 2287:
                                        var2 = {};
                                    case 2289:
                                        var12.mediaPostPreviewEmbeds = var2;
                                        var11 = {};
                                        var2 = _closure2_slot34;
                                        if (!(var9 == var2)) {
                                            _fun77654_ip = 2308;
                                            continue _fun77654
                                        }
                                    case 2304:
                                        var2 = {};
                                        _fun77654_ip = 2312;
                                        continue _fun77654;
                                    case 2308:
                                        var2 = _closure2_slot34;
                                    case 2312:
                                        var11.mediaPostPreviewEmbeds = var2;
                                        var10 = _closure1_slot1;
                                        var8 = _closure1_slot2;
                                        var13 = 102;
                                        var8 = var8[var13];
                                        var10 = var10.bind(var7)(var8);
                                        var8 = var10.messageAuthorActivitiesChanged;
                                        var8 = var8.bind(var10)(var0, var19, var18);
                                        if (var8) {
                                            _fun77654_ip = 2849;
                                            continue _fun77654
                                        }
                                    case 2359:
                                        var10 = _closure1_slot1;
                                        var8 = _closure1_slot2;
                                        var8 = var8[var13];
                                        var10 = var10.bind(var7)(var8);
                                        var8 = var10.codedLinksChanged;
                                        var8 = var8.bind(var10)(var0, var17, var16);
                                        if (var8) {
                                            _fun77654_ip = 2849;
                                            continue _fun77654
                                        }
                                    case 2395:
                                        var8 = _closure3_slot0;
                                        if (!var8) {
                                            _fun77654_ip = 2438;
                                            continue _fun77654
                                        }
                                    case 2402:
                                        var10 = _closure1_slot1;
                                        var8 = _closure1_slot2;
                                        var8 = var8[var13];
                                        var10 = var10.bind(var7)(var8);
                                        var8 = var10.giftCodesChanged;
                                        var8 = var8.bind(var10)(var0, var15, var14);
                                        if (var8) {
                                            _fun77654_ip = 2849;
                                            continue _fun77654
                                        }
                                    case 2438:
                                        var10 = _closure1_slot1;
                                        var8 = _closure1_slot2;
                                        var8 = var8[var13];
                                        var10 = var10.bind(var7)(var8);
                                        var8 = var10.mediaPostPreviewEmbedsChanged;
                                        var8 = var8.bind(var10)(var0, var12, var11);
                                        if (var8) {
                                            _fun77654_ip = 2849;
                                            continue _fun77654
                                        }
                                    case 2474:
                                        var8 = _closure3_slot29;
                                        if (!var8) {
                                            _fun77654_ip = 2498;
                                            continue _fun77654
                                        }
                                    case 2481:
                                        var10 = var0.embeds;
                                        var11 = var10.length;
                                        var10 = 0;
                                        var8 = var11 > var10;
                                    case 2498:
                                        if (!var8) {
                                            _fun77654_ip = 2520;
                                            continue _fun77654
                                        }
                                    case 2501:
                                        var11 = _closure3_slot23;
                                        var10 = var11.add;
                                        var8 = var0.id;
                                        var8 = var10.bind(var11)(var8);
                                    case 2520:
                                        var8 = var0.type;
                                        var2 = _closure1_slot56;
                                        var2 = var2.THREAD_STARTER_MESSAGE;
                                        var2 = var8 === var2;
                                        if (!var2) {
                                            _fun77654_ip = 2573;
                                            continue _fun77654
                                        }
                                    case 2542:
                                        var8 = _closure2_slot135;
                                        var8 = var9 == var8;
                                        var10 = undefined;
                                        if (var8) {
                                            _fun77654_ip = 2565;
                                            continue _fun77654
                                        }
                                    case 2555:
                                        var8 = _closure2_slot135;
                                        var10 = var8.threadStartingReferenceMessage;
                                    case 2565:
                                        var8 = _closure2_slot51;
                                        var2 = var10 !== var8;
                                    case 2573:
                                        if (!var2) {
                                            _fun77654_ip = 2595;
                                            continue _fun77654
                                        }
                                    case 2576:
                                        var10 = _closure3_slot23;
                                        var8 = var10.add;
                                        var2 = var0.id;
                                        var2 = var8.bind(var10)(var2);
                                    case 2595:
                                        var2 = _closure3_slot13;
                                        if (!var2) {
                                            _fun77654_ip = 2611;
                                            continue _fun77654
                                        }
                                    case 2602:
                                        var8 = var0.applicationId;
                                        var2 = var9 != var8;
                                    case 2611:
                                        if (!var2) {
                                            _fun77654_ip = 2660;
                                            continue _fun77654
                                        }
                                    case 2614:
                                        var8 = _closure2_slot135;
                                        var8 = var9 == var8;
                                        var11 = undefined;
                                        if (var8) {
                                            _fun77654_ip = 2637;
                                            continue _fun77654
                                        }
                                    case 2627:
                                        var8 = _closure2_slot135;
                                        var11 = var8.invalidApplicationIds;
                                    case 2637:
                                        if (!(var9 == var11)) {
                                            _fun77654_ip = 2645;
                                            continue _fun77654
                                        }
                                    case 2641:
                                        var11 = new Array(0);
                                    case 2645:
                                        var10 = var11.includes;
                                        var8 = var0.applicationId;
                                        var2 = var10.bind(var11)(var8);
                                    case 2660:
                                        if (!var2) {
                                            _fun77654_ip = 2682;
                                            continue _fun77654
                                        }
                                    case 2663:
                                        var10 = _closure3_slot23;
                                        var8 = var10.add;
                                        var2 = var0.id;
                                        var2 = var8.bind(var10)(var2);
                                    case 2682:
                                        var2 = _closure3_slot16;
                                        if (!var2) {
                                            _fun77654_ip = 2738;
                                            continue _fun77654
                                        }
                                    case 2689:
                                        var11 = var0.referralTrialOfferId;
                                        var2 = var9 != var11;
                                        if (!var2) {
                                            _fun77654_ip = 2716;
                                            continue _fun77654
                                        }
                                    case 2702:
                                        var10 = _closure2_slot41;
                                        var8 = var10.includes;
                                        var2 = var8.bind(var10)(var11);
                                    case 2716:
                                        if (!var2) {
                                            _fun77654_ip = 2738;
                                            continue _fun77654
                                        }
                                    case 2719:
                                        var10 = _closure3_slot23;
                                        var8 = var10.add;
                                        var2 = var0.id;
                                        var2 = var8.bind(var10)(var2);
                                    case 2738:
                                        var2 = _closure3_slot17;
                                        if (!var2) {
                                            _fun77654_ip = 2762;
                                            continue _fun77654
                                        }
                                    case 2745:
                                        var8 = var0.codedLinks;
                                        var10 = var8.length;
                                        var8 = 0;
                                        var2 = var10 > var8;
                                    case 2762:
                                        if (!var2) {
                                            _fun77654_ip = 2784;
                                            continue _fun77654
                                        }
                                    case 2765:
                                        var10 = _closure3_slot23;
                                        var8 = var10.add;
                                        var2 = var0.id;
                                        var2 = var8.bind(var10)(var2);
                                    case 2784:
                                        var2 = _closure3_slot19;
                                        if (!var2) {
                                            _fun77654_ip = 2819;
                                            continue _fun77654
                                        }
                                    case 2791:
                                        var8 = var0.author;
                                        var9 = var9 == var8;
                                        var7 = undefined;
                                        if (var9) {
                                            _fun77654_ip = 2811;
                                            continue _fun77654
                                        }
                                    case 2806:
                                        var7 = var8.id;
                                    case 2811:
                                        var3 = _closure2_slot11;
                                        var2 = var7 === var3;
                                    case 2819:
                                        if (!var2) {
                                            _fun77654_ip = 3331;
                                            continue _fun77654
                                        }
                                    case 2825:
                                        var7 = _closure3_slot23;
                                        var3 = var7.add;
                                        var2 = var0.id;
                                        var2 = var3.bind(var7)(var2);
                                        _fun77654_ip = 3331;
                                        continue _fun77654;
                                    case 2849:
                                        var7 = _closure3_slot23;
                                        var3 = var7.add;
                                        var2 = var0.id;
                                        var2 = var3.bind(var7)(var2);
                                        _fun77654_ip = 3331;
                                        continue _fun77654;
                                    case 2873:
                                        var7 = _closure3_slot23;
                                        var3 = var7.add;
                                        var2 = var0.id;
                                        var2 = var3.bind(var7)(var2);
                                        _fun77654_ip = 3331;
                                        continue _fun77654;
                                    case 2897:
                                        var7 = _closure3_slot23;
                                        var3 = var7.add;
                                        var2 = var0.id;
                                        var2 = var3.bind(var7)(var2);
                                        _fun77654_ip = 3331;
                                        continue _fun77654;
                                    case 2921:
                                        var7 = _closure3_slot23;
                                        var3 = var7.add;
                                        var2 = var0.id;
                                        var2 = var3.bind(var7)(var2);
                                        var2 = undefined;
                                        return var2;
                                    case 2944:
                                        var7 = _closure3_slot23;
                                        var3 = var7.add;
                                        var2 = var0.id;
                                        var2 = var3.bind(var7)(var2);
                                        var2 = undefined;
                                        return var2;
                                    case 2967:
                                        var7 = _closure3_slot23;
                                        var3 = var7.add;
                                        var2 = var0.id;
                                        var2 = var3.bind(var7)(var2);
                                        var2 = undefined;
                                        return var2;
                                    case 2990:
                                        var7 = _closure3_slot23;
                                        var3 = var7.add;
                                        var2 = var0.id;
                                        var2 = var3.bind(var7)(var2);
                                        _fun77654_ip = 3331;
                                        continue _fun77654;
                                    case 3014:
                                        var7 = _closure3_slot23;
                                        var3 = var7.add;
                                        var2 = var0.id;
                                        var2 = var3.bind(var7)(var2);
                                        var2 = undefined;
                                        return var2;
                                    case 3037:
                                        var7 = _closure3_slot23;
                                        var3 = var7.add;
                                        var2 = var0.id;
                                        var2 = var3.bind(var7)(var2);
                                        var2 = undefined;
                                        return var2;
                                    case 3060:
                                        var7 = _closure3_slot23;
                                        var3 = var7.add;
                                        var2 = var0.id;
                                        var2 = var3.bind(var7)(var2);
                                        _fun77654_ip = 3331;
                                        continue _fun77654;
                                    case 3084:
                                        var3 = _closure2_slot75;
                                        var2 = var0.author;
                                        var2 = var2.id;
                                        var3 = var3[var2];
                                        var2 = _closure2_slot135;
                                        var7 = var4 == var2;
                                        var2 = undefined;
                                        if (var7) {
                                            _fun77654_ip = 3150;
                                            continue _fun77654
                                        }
                                    case 3116:
                                        var5 = _closure2_slot135;
                                        var5 = var5.messageAuthorMembers;
                                        var4 = var4 == var5;
                                        var2 = undefined;
                                        if (var4) {
                                            _fun77654_ip = 3150;
                                            continue _fun77654
                                        }
                                    case 3135:
                                        var4 = var0.author;
                                        var4 = var4.id;
                                        var2 = var5[var4];
                                    case 3150:
                                        if (!(var3 !== var2)) {
                                            _fun77654_ip = 3331;
                                            continue _fun77654
                                        }
                                    case 3157:
                                        var4 = _closure3_slot23;
                                        var3 = var4.add;
                                        var2 = var0.id;
                                        var2 = var3.bind(var4)(var2);
                                        _fun77654_ip = 3331;
                                        continue _fun77654;
                                    case 3181:
                                        var4 = _closure3_slot23;
                                        var3 = var4.add;
                                        var2 = var0.id;
                                        var2 = var3.bind(var4)(var2);
                                        _fun77654_ip = 3331;
                                        continue _fun77654;
                                    case 3205:
                                        var4 = _closure3_slot23;
                                        var3 = var4.add;
                                        var2 = var0.id;
                                        var2 = var3.bind(var4)(var2);
                                        _fun77654_ip = 3331;
                                        continue _fun77654;
                                    case 3226:
                                        var4 = _closure3_slot23;
                                        var3 = var4.add;
                                        var2 = var0.id;
                                        var2 = var3.bind(var4)(var2);
                                        _fun77654_ip = 3331;
                                        continue _fun77654;
                                    case 3247:
                                        var4 = _closure3_slot23;
                                        var3 = var4.add;
                                        var2 = var0.id;
                                        var2 = var3.bind(var4)(var2);
                                        _fun77654_ip = 3331;
                                        continue _fun77654;
                                    case 3268:
                                        var4 = _closure3_slot23;
                                        var3 = var4.add;
                                        var2 = var0.id;
                                        var2 = var3.bind(var4)(var2);
                                        var2 = undefined;
                                        return var2;
                                    case 3291:
                                        var4 = _closure3_slot23;
                                        var3 = var4.add;
                                        var2 = var0.id;
                                        var2 = var3.bind(var4)(var2);
                                        _fun77654_ip = 3331;
                                        continue _fun77654;
                                    case 3312:
                                        var2 = _closure3_slot23;
                                        var1 = var2.add;
                                        var0 = var0.id;
                                        var0 = var1.bind(var2)(var0);
                                    case 3331:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var2 = var4.bind(var15)(var2);
                            var4 = _closure2_slot127;
                            var2 = {};
                            var2.forceRender = var14;
                            var2.forceReload = var13;
                            var2.updateMessageIds = var12;
                            var2.scrollToMessageId = var11;
                            var2.jumpTargetId = var10;
                            var2.jumpType = var9;
                            var2.focusTargetId = var8;
                            var2.ignoreEmbedDescriptionCache = var7;
                            var7 = _closure2_slot139;
                            var2.messagesNewlyLoaded = var7;
                            var2.shouldInitialScroll = var6;
                            var2.minimizeScrolling = var5;
                            var2 = var4.bind(var3)(var2);
                            var4 = _closure2_slot116;
                            var2 = false;
                            var2 = var4.bind(var3)(var2);
                            var2 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var1 = 85;
                            var1 = var4[var1];
                            var3 = var2.bind(var3)(var1);
                            var2 = var3.recordTimings;
                            var1 = _closure2_slot7;
                            var0 = _closure2_slot6;
                            var0 = var2.bind(var3)(var1, var0);
                        case 4432:
                            var0 = undefined;
                            return var0;
                    }
                };
                var4 = var39.bind(var40)(var4, var32);
                var4 = _closure1_slot5;
                var39 = var4.useEffect;
                var32 = new Array(2);
                var32[0] = var9;
                var32[1] = var17;
                var17 = function() { // Environment: var0
                    var0 = function() { // Environment: var0
                        var4 = _closure1_slot13;
                        var3 = _closure2_slot7;
                        var2 = _closure2_slot2;
                        var0 = undefined;
                        var1 = false;
                        var1 = var4.bind(var0)(var3, var2, var1);
                        return var0;
                    };
                    return var0;
                };
                var17 = var39.bind(var4)(var17, var32);
                var32 = var4.useImperativeHandle;
                var17 = new Array(15);
                var17[0] = var18;
                var17[1] = var21;
                var17[2] = var38;
                var17[3] = var31;
                var17[4] = var8;
                var17[5] = var7;
                var17[6] = var9;
                var17[7] = var37;
                var17[8] = var36;
                var17[9] = var35;
                var17[10] = var34;
                var17[11] = var33;
                var17[12] = var6;
                var17[13] = var14;
                var17[14] = var12;
                var14 = arg1;
                var12 = function() { // Environment: var0
                    var0 = {};
                    var3 = _closure2_slot126;
                    var0.findMessageIndex = var3;
                    var3 = _closure2_slot127;
                    var0.updateRows = var3;
                    var3 = _closure2_slot128;
                    var0.scrollToMessageId = var3;
                    var3 = function() {
                        _fun77658: for (var _fun77658_ip = 0;;) switch (_fun77658_ip) {
                            case 0:
                                var6 = arguments[0];
                                var0 = undefined;
                                if (!(var6 === var0)) {
                                    _fun77658_ip = 11;
                                    continue _fun77658
                                }
                            case 9:
                                var6 = true;
                            case 11:
                                var2 = _closure1_slot0;
                                var3 = _closure1_slot2;
                                var1 = 85;
                                var1 = var3[var1];
                                var5 = var2.bind(var0)(var1);
                                var4 = var5.scrollToBottom;
                                var10 = _closure2_slot108;
                                var9 = _closure2_slot58;
                                var8 = _closure2_slot134;
                                var11 = var5;
                                var7 = var6;
                                var1 = var11[var4](var10, var9, var8, var7, var6);
                                return var0;
                        }
                    };
                    var0.scrollToBottom = var3;
                    var3 = function() {
                        _fun77659: for (var _fun77659_ip = 0;;) switch (_fun77659_ip) {
                            case 0:
                                var4 = arguments[0];
                                var2 = undefined;
                                if (!(var4 === var2)) {
                                    _fun77659_ip = 11;
                                    continue _fun77659
                                }
                            case 9:
                                var4 = true;
                            case 11:
                                var1 = _closure1_slot0;
                                var3 = _closure1_slot2;
                                var0 = 85;
                                var0 = var3[var0];
                                var3 = var1.bind(var2)(var0);
                                var2 = var3.scrollToTop;
                                var1 = _closure2_slot108;
                                var0 = _closure2_slot58;
                                var0 = var2.bind(var3)(var1, var0, var4);
                                return var0;
                        }
                    };
                    var0.scrollToTop = var3;
                    var3 = function arg0() {
                        _fun77660: for (var _fun77660_ip = 0;;) switch (_fun77660_ip) {
                            case 0:
                                var5 = arguments[1];
                                var2 = undefined;
                                if (!(var5 === var2)) {
                                    _fun77660_ip = 11;
                                    continue _fun77660
                                }
                            case 9:
                                var5 = true;
                            case 11:
                                var1 = _closure1_slot0;
                                var3 = _closure1_slot2;
                                var0 = 85;
                                var0 = var3[var0];
                                var4 = var1.bind(var2)(var0);
                                var3 = var4.scrollToRelativeOffset;
                                var9 = _closure2_slot108;
                                var8 = _closure2_slot58;
                                var7 = arg0;
                                var10 = var4;
                                var6 = var5;
                                var0 = var10[var3](var9, var8, var7, var6, var5);
                                return var0;
                        }
                    };
                    var0.scrollToRelativeOffset = var3;
                    var3 = function() {
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var0 = 85;
                        var1 = var1[var0];
                        var0 = undefined;
                        var3 = var2.bind(var0)(var1);
                        var2 = var3.scrollToTopMessage;
                        var1 = _closure2_slot108;
                        var0 = _closure2_slot117;
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                    };
                    var0.scrollToTopMessage = var3;
                    var3 = function() {
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var0 = 85;
                        var1 = var1[var0];
                        var0 = undefined;
                        var5 = var2.bind(var0)(var1);
                        var4 = var5.jumpToPresent;
                        var3 = _closure2_slot6;
                        var2 = _closure2_slot1;
                        var1 = function() { // Environment: var1
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 85;
                            var1 = var1[var0];
                            var0 = undefined;
                            var6 = var2.bind(var0)(var1);
                            var5 = var6.scrollToBottom;
                            var10 = _closure2_slot108;
                            var9 = _closure2_slot58;
                            var8 = _closure2_slot134;
                            var7 = true;
                            var11 = var6;
                            var1 = var11[var5](var10, var9, var8, var7, var6);
                            return var0;
                        };
                        var1 = var4.bind(var5)(var3, var2, var1);
                        return var0;
                    };
                    var0.jumpToPresent = var3;
                    var3 = function() {
                        _fun77664: for (var _fun77664_ip = 0;;) switch (_fun77664_ip) {
                            case 0:
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 85;
                                var1 = var1[var0];
                                var0 = undefined;
                                var2 = var2.bind(var0)(var1);
                                var1 = var2.scrollToNewMessages;
                                var0 = {};
                                var4 = _closure2_slot1;
                                var0.channel = var4;
                                var4 = _closure2_slot7;
                                var0.channelId = var4;
                                var4 = _closure2_slot6;
                                var0.messages = var4;
                                var4 = _closure2_slot114;
                                var0.hasJumpedToOriginalPost = var4;
                                var4 = _closure2_slot58;
                                var0.useReducedMotion = var4;
                                var5 = _closure2_slot46;
                                var4 = null;
                                var5 = var4 != var5;
                                if (!var5) {
                                    _fun77664_ip = 96;
                                    continue _fun77664
                                }
                            case 92:
                                var4 = _closure2_slot46;
                            case 96:
                                var0.oldestUnreadMessageId = var4;
                                var5 = _closure2_slot117;
                                var4 = var5.getPreviousRows;
                                var4 = var4.bind(var5)();
                                var0.chatManagerRows = var4;
                                var4 = _closure2_slot126;
                                var0.findMessageIndex = var4;
                                var3 = _closure2_slot108;
                                var0.chatRef = var3;
                                var3 = function() {
                                    var2 = _closure1_slot0;
                                    var1 = _closure1_slot2;
                                    var0 = 85;
                                    var1 = var1[var0];
                                    var0 = undefined;
                                    var4 = var2.bind(var0)(var1);
                                    var3 = var4.loadMoreBefore;
                                    var2 = _closure2_slot7;
                                    var1 = _closure2_slot6;
                                    var0 = function(arg0) { // Environment: var0
                                        var2 = _closure2_slot110;
                                        var1 = {};
                                        var0 = arg0;
                                        var1.animated = var0;
                                        var0 = undefined;
                                        var0 = var2.bind(var0)(var1);
                                        return var0;
                                    };
                                    var0 = var3.bind(var4)(var2, var1, var0);
                                    return var0;
                                };
                                var0.loadMoreBefore = var3;
                                var0 = var1.bind(var2)(var0);
                                return var0;
                        }
                    };
                    var0.scrollToNewMessages = var3;
                    var2 = function() {
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var0 = 85;
                        var1 = var1[var0];
                        var0 = undefined;
                        var2 = var2.bind(var0)(var1);
                        var1 = var2.getChatRef;
                        var0 = _closure2_slot108;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.getChatRef = var2;
                    var2 = _closure2_slot129;
                    var0.maybeRescrollToMessageId = var2;
                    var2 = _closure2_slot130;
                    var0.clearRows = var2;
                    var1 = _closure2_slot131;
                    var0.getVisibleMessages = var1;
                    return var0;
                };
                var12 = var32.bind(var4)(var14, var12, var17);
                var17 = var4.useCallback;
                var14 = _closure1_slot3;
                var12 = function*() { // Environment: var0
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun77669: for (var _fun77669_ip = 0;;) switch (_fun77669_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun77669_ip = 140;
                                    continue _fun77669
                                }
                            case 10:
                                var3 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var1 = 85;
                                var1 = var2[var1];
                                var2 = undefined;
                                var4 = var3.bind(var2)(var1);
                                var3 = var4.handleTapNavBar;
                                var1 = {};
                                var6 = _closure2_slot1;
                                var1.channel = var6;
                                var6 = _closure2_slot58;
                                var1.useReducedMotion = var6;
                                var6 = _closure2_slot109;
                                var6 = var6.isNearTop;
                                var1.isNearTop = var6;
                                var6 = _closure2_slot6;
                                var1.messages = var6;
                                var6 = _closure2_slot126;
                                var1.findMessageIndex = var6;
                                var6 = function() {
                                    _fun77670: for (var _fun77670_ip = 0;;) switch (_fun77670_ip) {
                                        case 0:
                                            var4 = arguments[0];
                                            var2 = undefined;
                                            if (!(var4 === var2)) {
                                                _fun77670_ip = 11;
                                                continue _fun77670
                                            }
                                        case 9:
                                            var4 = true;
                                        case 11:
                                            var1 = _closure1_slot0;
                                            var3 = _closure1_slot2;
                                            var0 = 85;
                                            var0 = var3[var0];
                                            var3 = var1.bind(var2)(var0);
                                            var2 = var3.scrollToTop;
                                            var1 = _closure2_slot108;
                                            var0 = _closure2_slot58;
                                            var0 = var2.bind(var3)(var1, var0, var4);
                                            return var0;
                                    }
                                };
                                var1.scrollToTop = var6;
                                var5 = _closure2_slot108;
                                var1.chatRef = var5;
                                var1 = var3.bind(var4)(var1);
                                SaveGenerator(address = 128);
                            case 126:
                                return var1;
                            case 128:
                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                                if (var3) {
                                    _fun77669_ip = 137;
                                    continue _fun77669
                                }
                            case 134:
                                return var2;
                            case 137:
                                return var1;
                            case 140:
                                return var0;
                        }
                    };
                    return var0;
                };
                var14 = var14.bind(var3)(var12);
                var12 = new Array(6);
                var12[0] = var7;
                var12[1] = var31;
                var30 = var30.isNearTop;
                var12[2] = var30;
                var12[3] = var8;
                var12[4] = var18;
                var12[5] = var26;
                var18 = var17.bind(var4)(var14, var12);
                var17 = var4.useCallback;
                var14 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var0 = var0.nativeEvent;
                    var3 = var0.description;
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 103;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = {};
                    var1.description = var3;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var12 = new Array(0);
                var17 = var17.bind(var4)(var14, var12);
                var14 = var4.useCallback;
                var12 = new Array(3);
                var12[0] = var29;
                var12[1] = var21;
                var12[2] = var2;
                var2 = function(arg0) { // Environment: var0
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var0 = 104;
                    var1 = var3[var0];
                    var0 = undefined;
                    var5 = var2.bind(var0)(var1);
                    var4 = var5.getNativeSyntheticEventData;
                    var1 = arg0;
                    var1 = var4.bind(var5)(var1);
                    var6 = var1.messageId;
                    var1 = 85;
                    var1 = var3[var1];
                    var5 = var2.bind(var0)(var1);
                    var4 = var5.handleLongPressSticker;
                    var3 = _closure2_slot111;
                    var2 = _closure2_slot127;
                    var2 = var4.bind(var5)(var6, var3, var2);
                    var1 = _closure2_slot112;
                    var1 = var1.bind(var0)(var2);
                    return var0;
                };
                var21 = var14.bind(var4)(var2, var12);
                var12 = var4.useCallback;
                var2 = new Array(2);
                var2[0] = var13;
                var2[1] = var1;
                var1 = function() { // Environment: var0
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 85;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.handleTapTableView;
                    var1 = _closure2_slot3;
                    var0 = _closure2_slot85;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var14 = var12.bind(var4)(var1, var2);
                var12 = var4.useCallback;
                var2 = new Array(6);
                var2[0] = var28;
                var2[1] = var27;
                var2[2] = var11;
                var2[3] = var9;
                var2[4] = var7;
                var2[5] = var6;
                var1 = function(arg0) { // Environment: var0
                    _fun77674: for (var _fun77674_ip = 0;;) switch (_fun77674_ip) {
                        case 0:
                            var0 = arg0;
                            var0 = var0.nativeEvent;
                            var6 = var0.firstVisibleMessageIndex;
                            var5 = var0.lastVisibleMessageIndex;
                            var4 = var0.firstVisibleMessagePercentVisible;
                            var3 = var0.lastVisibleMessagePercentVisible;
                            var1 = null;
                            var0 = var1 != var6;
                            if (!var0) {
                                _fun77674_ip = 45;
                                continue _fun77674
                            }
                        case 41:
                            var0 = var1 != var5;
                        case 45:
                            if (!var0) {
                                _fun77674_ip = 52;
                                continue _fun77674
                            }
                        case 48:
                            var0 = var1 != var4;
                        case 52:
                            if (!var0) {
                                _fun77674_ip = 59;
                                continue _fun77674
                            }
                        case 55:
                            var0 = var1 != var3;
                        case 59:
                            if (!var0) {
                                _fun77674_ip = 121;
                                continue _fun77674
                            }
                        case 62:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 85;
                            var1 = var1[var0];
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.handleFirstLayout;
                            var11 = function(arg0) { // Environment: var0
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 85;
                                var1 = var1[var0];
                                var0 = undefined;
                                var2 = var2.bind(var0)(var1);
                                var1 = var2.handleVisibleMessagesChange;
                                var0 = {};
                                var6 = arg0;
                                var7 = var0;
                                var3 = copyDataProperties(var7, var6);
                                var5 = _closure2_slot117;
                                var4 = 'chatManager';
                                var0[var4] = var5;
                                var5 = _closure2_slot89;
                                var4 = 'shouldTrackAnnouncementMessageViews';
                                var0[var4] = var5;
                                var5 = _closure2_slot90;
                                var4 = 'shouldTrackRichPresenceInviteEmbedViews';
                                var0[var4] = var5;
                                var5 = _closure2_slot8;
                                var4 = 'guildId';
                                var0[var4] = var5;
                                var5 = _closure2_slot7;
                                var4 = 'channelId';
                                var0[var4] = var5;
                                var4 = _closure2_slot1;
                                var3 = 'channel';
                                var0[var3] = var4;
                                var0 = var1.bind(var2)(var0);
                                return var0;
                            };
                            var12 = var2;
                            var10 = var6;
                            var9 = var5;
                            var8 = var4;
                            var7 = var3;
                            var0 = var12[var1](var11, var10, var9, var8, var7, var6);
                        case 121:
                            var0 = undefined;
                            return var0;
                    }
                };
                var13 = var12.bind(var4)(var1, var2);
                var12 = var4.useCallback;
                var2 = function(arg0) { // Environment: var0
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 85;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.handleMediaPlayFinishedAnalytics;
                    var0 = arg0;
                    var0 = var0.nativeEvent;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var1 = new Array(0);
                var12 = var12.bind(var4)(var2, var1);
                var2 = var4.useCallback;
                var1 = new Array(6);
                var1[0] = var28;
                var1[1] = var27;
                var1[2] = var11;
                var1[3] = var9;
                var1[4] = var7;
                var1[5] = var6;
                var0 = function(arg0) { // Environment: var0
                    _fun77677: for (var _fun77677_ip = 0;;) switch (_fun77677_ip) {
                        case 0:
                            var0 = arg0;
                            var0 = var0.nativeEvent;
                            var6 = var0.firstVisibleMessageIndex;
                            var5 = var0.lastVisibleMessageIndex;
                            var4 = var0.firstVisibleMessagePercentVisible;
                            var3 = var0.lastVisibleMessagePercentVisible;
                            var1 = null;
                            var0 = var1 != var6;
                            if (!var0) {
                                _fun77677_ip = 45;
                                continue _fun77677
                            }
                        case 41:
                            var0 = var1 != var5;
                        case 45:
                            if (!var0) {
                                _fun77677_ip = 52;
                                continue _fun77677
                            }
                        case 48:
                            var0 = var1 != var4;
                        case 52:
                            if (!var0) {
                                _fun77677_ip = 59;
                                continue _fun77677
                            }
                        case 55:
                            var0 = var1 != var3;
                        case 59:
                            if (!var0) {
                                _fun77677_ip = 121;
                                continue _fun77677
                            }
                        case 62:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 85;
                            var1 = var1[var0];
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.handleMessageVisibilityChanged;
                            var11 = function(arg0) { // Environment: var0
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 85;
                                var1 = var1[var0];
                                var0 = undefined;
                                var2 = var2.bind(var0)(var1);
                                var1 = var2.handleVisibleMessagesChange;
                                var0 = {};
                                var6 = arg0;
                                var7 = var0;
                                var3 = copyDataProperties(var7, var6);
                                var5 = _closure2_slot117;
                                var4 = 'chatManager';
                                var0[var4] = var5;
                                var5 = _closure2_slot89;
                                var4 = 'shouldTrackAnnouncementMessageViews';
                                var0[var4] = var5;
                                var5 = _closure2_slot90;
                                var4 = 'shouldTrackRichPresenceInviteEmbedViews';
                                var0[var4] = var5;
                                var5 = _closure2_slot8;
                                var4 = 'guildId';
                                var0[var4] = var5;
                                var5 = _closure2_slot7;
                                var4 = 'channelId';
                                var0[var4] = var5;
                                var4 = _closure2_slot1;
                                var3 = 'channel';
                                var0[var3] = var4;
                                var0 = var1.bind(var2)(var0);
                                return var0;
                            };
                            var12 = var2;
                            var10 = var6;
                            var9 = var5;
                            var8 = var4;
                            var7 = var3;
                            var0 = var12[var1](var11, var10, var9, var8, var7, var6);
                        case 121:
                            var0 = undefined;
                            return var0;
                    }
                };
                var11 = var2.bind(var4)(var0, var1);
                var2 = _closure1_slot65;
                var1 = _closure1_slot64;
                var0 = {};
                var7 = _closure1_slot63;
                var6 = _closure1_slot1;
                var9 = _closure1_slot2;
                var4 = 105;
                var4 = var9[var4];
                var6 = var6.bind(var3)(var4);
                var4 = {};
                var4.ref = var26;
                var26 = true;
                var4.inverted = var26;
                var4.alwaysRespectKeyboard = var25;
                var4.style = var24;
                var4.roleStyle = var23;
                var4.onChatScrollPosition = var22;
                var22 = var16.handleTapImage;
                var4.onTapImage = var22;
                var22 = var16.handleTapChannel;
                var4.onTapChannel = var22;
                var22 = var16.handleLongPressChannel;
                var4.onLongPressChannel = var22;
                var22 = var16.handleTapAttachmentLink;
                var4.onTapAttachmentLink = var22;
                var22 = var16.handleLongPressAttachmentLink;
                var4.onLongPressAttachmentLink = var22;
                var22 = var16.handleTapCall;
                var4.onTapCall = var22;
                var22 = var16.handleTapMention;
                var4.onTapMention = var22;
                var22 = var16.handleTapCommandMention;
                var4.onTapCommandMention = var22;
                var22 = var16.handleLongPressCommandMention;
                var4.onLongPressCommandMention = var22;
                var22 = var16.handleTapLink;
                var4.onTapLink = var22;
                var22 = var16.handleLongPressLink;
                var4.onLongPressLink = var22;
                var22 = var16.handleTapReaction;
                var4.onTapReaction = var22;
                var22 = var16.handleLongPressReaction;
                var4.onLongPressReaction = var22;
                var22 = var16.handleTapAvatar;
                var4.onTapAvatar = var22;
                var22 = var16.handleTapUsername;
                var4.onTapUsername = var22;
                var22 = var16.handleLongPressUsername;
                var4.onLongPressUsername = var22;
                var22 = var16.handleOpenSticker;
                var4.onTapSticker = var22;
                var4.onLongPressSticker = var21;
                var21 = var16.handleLongPressMessage;
                var4.onLongPressMessage = var21;
                var21 = var16.handleInitiateReply;
                var4.onInitiateReply = var21;
                var21 = var16.handleInitiateEdit;
                var4.onInitiateEdit = var21;
                var21 = var16.handleInitiateThread;
                var4.onInitiateThread = var21;
                var21 = var16.handleTapMessage;
                var4.onTapMessage = var21;
                var21 = var16.handleDoubleTapMessage;
                var4.onDoubleTapMessage = var21;
                var21 = var16.handleTapSeparator;
                var4.onTapSeparator = var21;
                var21 = var16.handleTapInviteEmbed;
                var4.onTapInviteEmbed = var21;
                var21 = var16.handleTapInviteEmbedAccept;
                var4.onTapInviteEmbedAccept = var21;
                var21 = var16.handleTapJoinActivity;
                var4.onTapJoinActivity = var21;
                var21 = var16.handleTapJoinRichPresence;
                var4.onTapJoinRichPresence = var21;
                var4.onPressKey = var20;
                var4.animateEmoji = var19;
                var19 = var16.handleTapGiftCodeEmbed;
                var4.onTapGiftCodeEmbed = var19;
                var19 = var16.handleTapCancelUploadItem;
                var4.onTapCancelUploadItem = var19;
                var19 = var16.handleTapReply;
                var4.onTapMessageReply = var19;
                var19 = var16.handleTapSummary;
                var4.onTapSummary = var19;
                var19 = var16.handleTapSummaryJump;
                var4.onTapSummaryJump = var19;
                var19 = var16.handleTapGiftCodeAccept;
                var4.onTapGiftCodeAccept = var19;
                var19 = var16.handleTapReferralRedeem;
                var4.onTapReferralRedeem = var19;
                var19 = var16.handleTapThreadEmbed;
                var4.onTapThreadEmbed = var19;
                var19 = var16.handleTapEmoji;
                var4.onTapEmoji = var19;
                var19 = var16.handleTapTimestamp;
                var4.onTapTimestamp = var19;
                var19 = var16.handleTapInlineCode;
                var4.onTapInlineCode = var19;
                var19 = var16.handleTapRoleIcon;
                var4.onTapRoleIcon = var19;
                var19 = var16.handleTapGameIcon;
                var4.onTapGameIcon = var19;
                var19 = var16.handleTapSuppressNotificationsIcon;
                var4.onTapSuppressNotificationsIcon = var19;
                var19 = var16.handleTapConnectionsRoleTag;
                var4.onTapConnectionsRoleTag = var19;
                var19 = var16.handleTapTimeoutIcon;
                var4.onTapTimeoutIcon = var19;
                var19 = var16.handleTapButtonActionComponent;
                var4.onTapButtonActionComponent = var19;
                var19 = var16.handleTapSelectActionComponent;
                var4.onTapSelectActionComponent = var19;
                var19 = var16.handleTapWelcomeReply;
                var4.onTapWelcomeReply = var19;
                var19 = var16.handleTapInviteToSpeak;
                var4.onTapInviteToSpeak = var19;
                var19 = var16.handleTapAutoModerationActions;
                var4.onTapAutoModerationActions = var19;
                var19 = var16.handleTapAutoModerationFeedback;
                var4.onTapAutoModerationFeedback = var19;
                var19 = var16.handleTapFollowForumPost;
                var4.onTapFollowForumPost = var19;
                var19 = var16.handleTapShareForumPost;
                var4.onTapShareForumPost = var19;
                var19 = var16.handleTapReactionOverflow;
                var4.onTapReactionOverflow = var19;
                var4.onTapNavBar = var18;
                var18 = var16.handleCopyText;
                var4.onTapCopyText = var18;
                var18 = var16.handleTapOpTag;
                var4.onTapOpTag = var18;
                var18 = var16.handleTapTag;
                var4.onTapTag = var18;
                var18 = var16.handleMediaAttachmentPlaybackEnded;
                var4.onMediaAttachmentPlaybackEnded = var18;
                var18 = var16.handleMediaAttachmentPlaybackStarted;
                var4.onMediaAttachmentPlaybackStarted = var18;
                var18 = var16.handlerVoiceMessagePlaybackFailed;
                var4.onVoiceMessagePlaybackFailed = var18;
                var4.onTapShowAltText = var17;
                var17 = var16.handleTapPostPreviewEmbed;
                var4.onTapPostPreviewEmbed = var17;
                var17 = var16.handleTapDismissMediaPostSharePrompt;
                var4.onTapDismissMediaPostSharePrompt = var17;
                var17 = var16.handleTapChannelPromptButton;
                var4.onTapChannelPromptButton = var17;
                var17 = var16.handleTapObscuredMediaLearnMore;
                var4.onTapObscuredMediaLearnMore = var17;
                var17 = var16.handleTapObscuredMediaToggle;
                var4.onTapObscuredMediaToggle = var17;
                var17 = var16.handleTapSafetyPolicyNoticeEmbed;
                var4.onTapSafetyPolicyNoticeEmbed = var17;
                var17 = var16.handleTapSafetySystemNotificationCta;
                var4.onTapSafetySystemNotificationCta = var17;
                var17 = var16.handleTapPollAnswer;
                var4.onTapPollAnswer = var17;
                var17 = var16.handleTapPollSubmitVote;
                var4.onTapPollSubmitVote = var17;
                var17 = var16.handleTapPollAction;
                var4.onTapPollAction = var17;
                var17 = var16.handleLongPressPollImage;
                var4.onLongPressPollImage = var17;
                var17 = var16.handleTapCtaButton;
                var4.onTapCtaButton = var17;
                var17 = var16.handleMessageAccessibilityAction;
                var4.onMessageAccessibilityAction = var17;
                var17 = var16.handleTapForwardFooter;
                var4.onTapForwardFooter = var17;
                var17 = var16.handleTapInlineForward;
                var4.onTapInlineForward = var17;
                var17 = var16.handleTapClanTagChiplet;
                var4.onTapClanTagChiplet = var17;
                var17 = var16.handleTapContentInventoryEntryEmbed;
                var4.onTapContentInventoryEntryEmbed = var17;
                var17 = var16.handleTapCheckpointCard;
                var4.onTapCheckpointCard = var17;
                var17 = var16.handleTapSoundmoji;
                var4.onTapSoundmoji = var17;
                var17 = var16.handleTapAppMessageEmbed;
                var4.onTapAppMessageEmbed = var17;
                var17 = var16.handleTapSharedClientTheme;
                var4.onTapPreviewSharedClientTheme = var17;
                var16 = var16.handleSharedClientThemeViewed;
                var4.onSharedClientThemeViewed = var16;
                var4.HACK_fixModalInteraction = var15;
                var4.onTapTableView = var14;
                var4.onFirstLayout = var13;
                var4.onMediaPlayFinishedAnalytics = var12;
                var4.onMessageVisibilityChanged = var11;
                var4.children = var10;
                var6 = var7.bind(var3)(var6, var4);
                var4 = new Array(2);
                var4[0] = var6;
                var6 = _closure1_slot0;
                var5 = 106;
                var5 = var9[var5];
                var5 = var6.bind(var3)(var5);
                var6 = var5.ChatTTITracker;
                var5 = {};
                var5.messages = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var6.bind(var7)(var1);
    var1.displayName = var3;
    var3 = 107;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/messages/native/Messages.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 31, 1298, 1371, 5716, 3456, 9855, 4373, 3947, 7923, 4746, 1590, 4267, 5406, 6749, 6599, 3336, 6605, 6909, 6602, 9856, 6715, 6887, 6720, 9857, 6609, 4278, 9294, 3100, 6550, 1690, 3203, 1217, 6610, 6944, 1686, 1410, 4242, 3325, 4259, 3098, 3609, 3517, 3946, 3519, 6692, 1621, 3520, 9858, 660, 1623, 33, 3, 566, 1348, 9859, 9860, 9862, 1304, 9866, 5374, 6727, 3116, 6763, 8443, 9818, 9819, 6911, 6951, 9870, 3913, 9296, 9123, 9288, 9871, 4256, 9290, 6908, 9872, 9874, 6923, 9875, 6593, 9877, 9266, 9282, 14, 9878, 4261, 9281, 9287, 22, 9885, 4078, 9285, 5291, 803, 5641, 5367, 628, 21, 11650, 9254, 9265, 9711, 11651, 2]);