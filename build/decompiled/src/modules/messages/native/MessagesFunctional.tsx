// modules/messages/native/MessagesFunctional.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var5;
    var0 = function arg0, arg1() {
        _fun76713: for (var _fun76713_ip = 0;;) switch (_fun76713_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun76713_ip = 46;
                    continue _fun76713
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun76713_ip = 55;
                    continue _fun76713
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun76713_ip = 345;
                    continue _fun76713
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun76713_ip = 323;
                    continue _fun76713
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun76713_ip = 283;
                    continue _fun76713
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun76713_ip = 270;
                    continue _fun76713
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
                    _fun76713_ip = 163;
                    continue _fun76713
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun76713_ip = 179;
                    continue _fun76713
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun76713_ip = 249;
                    continue _fun76713
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun76713_ip = 249;
                    continue _fun76713
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun76713_ip = 234;
                    continue _fun76713
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun76713_ip = 247;
                    continue _fun76713
                }
            case 234:
                var8 = _closure1_slot64;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun76713_ip = 265;
                continue _fun76713;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun76713_ip = 283;
                continue _fun76713;
            case 270:
                var6 = _closure1_slot64;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun76713_ip = 323;
                    continue _fun76713
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
                    _fun76713_ip = 330;
                    continue _fun76713
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun76714: for (var _fun76714_ip = 0;;) switch (_fun76714_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun76714_ip = 56;
                                continue _fun76714
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
                            _fun76714_ip = 67;
                            continue _fun76714;
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
    var _closure1_slot63 = var0;
    var0 = function arg0, arg1() {
        _fun76715: for (var _fun76715_ip = 0;;) switch (_fun76715_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun76715_ip = 23;
                    continue _fun76715
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun76715_ip = 33;
                    continue _fun76715
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
                    _fun76715_ip = 70;
                    continue _fun76715
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun76715_ip = 55;
                    continue _fun76715
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot64 = var0;
    var0 = global;
    var8 = var0.Object;
    var6 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var7.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var6 = var5[var3];
    var3 = arg3;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot5 = var6;
    var3 = 3;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot11 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot12 = var3;
    var3 = 10;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.updateShouldShowJumpToPresentButton;
    var _closure1_slot13 = var3;
    var3 = 11;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot14 = var3;
    var3 = 12;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot15 = var3;
    var3 = 13;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot16 = var3;
    var3 = 14;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot17 = var3;
    var3 = 15;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot18 = var3;
    var3 = 16;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot19 = var3;
    var3 = 17;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot20 = var3;
    var3 = 18;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot21 = var3;
    var3 = 19;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot22 = var3;
    var3 = 20;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot23 = var3;
    var3 = 21;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot24 = var3;
    var3 = 22;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
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
    var3 = var7.bind(var0)(var3);
    var _closure1_slot28 = var3;
    var3 = 25;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot29 = var3;
    var3 = 26;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot30 = var3;
    var3 = 27;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot31 = var3;
    var3 = 28;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot32 = var3;
    var3 = 29;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot33 = var3;
    var3 = 30;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot34 = var3;
    var3 = 31;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot35 = var3;
    var3 = 32;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot36 = var3;
    var3 = 33;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot37 = var3;
    var3 = 34;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot38 = var3;
    var3 = 35;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot39 = var3;
    var3 = 36;
    var8 = var5[var3];
    var8 = var7.bind(var0)(var8);
    var _closure1_slot40 = var8;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.getUserCommunicationDisabledVersion;
    var _closure1_slot41 = var3;
    var3 = 37;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot42 = var3;
    var3 = 38;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot43 = var3;
    var3 = 39;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot44 = var3;
    var3 = 40;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot45 = var3;
    var3 = 41;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot46 = var3;
    var3 = 42;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot47 = var3;
    var3 = 43;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot48 = var3;
    var3 = 44;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot49 = var3;
    var3 = 45;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot50 = var3;
    var3 = 46;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot51 = var3;
    var3 = 47;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var8 = var3.ChannelTypesSets;
    var _closure1_slot52 = var8;
    var8 = var3.MessageTypes;
    var _closure1_slot53 = var8;
    var8 = var3.MessageFlags;
    var _closure1_slot54 = var8;
    var8 = var3.Permissions;
    var _closure1_slot55 = var8;
    var3 = var3.ME;
    var _closure1_slot56 = var3;
    var3 = 48;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var8 = var3.PREMIUM_TIER_2_REFERRAL_TRIAL_ID;
    var _closure1_slot57 = var8;
    var3 = var3.PremiumTypes;
    var _closure1_slot58 = var3;
    var3 = 49;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var8 = var3.jsx;
    var _closure1_slot59 = var8;
    var8 = var3.Fragment;
    var _closure1_slot60 = var8;
    var3 = var3.jsxs;
    var _closure1_slot61 = var3;
    var3 = 50;
    var3 = var5[var3];
    var8 = var7.bind(var0)(var3);
    var3 = var8.prototype;
    var7 = Object.create(var3, {
        constructor: {
            value: var8
        }
    });
    var11 = 'Messages';
    var12 = var7;
    var3 = new var12[var8](var11, var10);
    var3 = var3 instanceof Object ? var3 : var7;
    var _closure1_slot62 = var3;
    var3 = var6.forwardRef;
    var1 = function(arg0, arg1) { // Environment: var1
        _fun76716: for (var _fun76716_ip = 0;;) switch (_fun76716_ip) {
            case 0:
                var65 = arg0;
                var _closure2_slot0 = var65;
                var7 = var65.channel;
                var _closure2_slot1 = var7;
                var17 = var65.screenIndex;
                var _closure2_slot2 = var17;
                var13 = var65.chatInputRef;
                var _closure2_slot3 = var13;
                var21 = var65.isResourceChannel;
                var _closure2_slot4 = var21;
                var24 = var65.style;
                var22 = var65.visibleMessagesWindowHandler;
                var _closure2_slot5 = var22;
                var20 = var65.onPressKey;
                var10 = var65.children;
                var15 = var65.HACK_fixModalInteraction;
                var25 = var65.alwaysRespectKeyboard;
                var4 = _closure1_slot0;
                var1 = _closure1_slot2;
                var2 = 51;
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
                    _fun76716_ip = 242;
                    continue _fun76716
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
                var70 = var18.bind(var19)(var12, var6, var1);
                var _closure2_slot11 = var70;
                var1 = 52;
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
                var62 = var6.bind(var12)();
                var _closure2_slot17 = var62;
                var1 = var16[var1];
                var1 = var14.bind(var3)(var1);
                var6 = var1.GifAutoPlay;
                var1 = var6.useSetting;
                var60 = var1.bind(var6)();
                var _closure2_slot18 = var60;
                var1 = var16[var2];
                var23 = var14.bind(var3)(var1);
                var18 = var23.useStateFromStores;
                var1 = _closure1_slot36;
                var12 = new Array(1);
                var12[0] = var1;
                var6 = function() { // Environment: var0
                    var0 = _closure1_slot36;
                    var0 = var0.theme;
                    return var0;
                };
                var1 = new Array(0);
                var48 = var18.bind(var23)(var12, var6, var1);
                var _closure2_slot19 = var48;
                var1 = 53;
                var1 = var16[var1];
                var6 = var14.bind(var3)(var1);
                var1 = var6.useIsMessageSwipeActionsEnabled;
                var44 = var1.bind(var6)();
                var _closure2_slot20 = var44;
                var128 = 54;
                var1 = var16[var128];
                var6 = var14.bind(var3)(var1);
                var1 = var6.useMessageAuthorActivities;
                var100 = var1.bind(var6)(var8);
                var _closure2_slot21 = var100;
                var1 = var16[var128];
                var6 = var14.bind(var3)(var1);
                var1 = var6.useFetchMessageApplications;
                var1 = var1.bind(var6)(var8);
                var23 = _closure1_slot1;
                var1 = 55;
                var1 = var16[var1];
                var1 = var23.bind(var3)(var1);
                var1 = var1.bind(var3)(var8, var7);
                var18 = _closure1_slot4;
                var29 = 2;
                var1 = var18.bind(var3)(var1, var29);
                var12 = 0;
                var99 = var1[var12];
                var _closure2_slot22 = var99;
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
                var75 = var28.bind(var30)(var27, var26, var1);
                var _closure2_slot23 = var75;
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
                var98 = var1.appDirectoryEmbedApplications;
                var _closure2_slot24 = var98;
                var97 = var1.invalidAppDirectoryEmbedApplicationIds;
                var _closure2_slot25 = var97;
                var96 = var1.appDirectoryEmbedApplicationFetchStates;
                var _closure2_slot26 = var96;
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
                var106 = var27.bind(var28)(var26, var1);
                var _closure2_slot27 = var106;
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
                var95 = var27.bind(var28)(var26, var1);
                var _closure2_slot28 = var95;
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
                    var0 = 56;
                    var3 = var3[var0];
                    var0 = undefined;
                    var0 = var4.bind(var0)(var3);
                    var0 = var0.isNotNullish;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var110 = var30.bind(var31)(var28, var26, var27);
                var _closure2_slot29 = var110;
                var26 = var16[var2];
                var30 = var14.bind(var3)(var26);
                var28 = var30.useStateFromStoresArray;
                var27 = new Array(2);
                var27[0] = var1;
                var26 = _closure1_slot47;
                var27[1] = var26;
                var26 = function() { // Environment: var0
                    _fun76727: for (var _fun76727_ip = 0;;) switch (_fun76727_ip) {
                        case 0:
                            var0 = new Array(0);
                            var _closure3_slot0 = var0;
                            var5 = function arg0() {
                                _fun76728: for (var _fun76728_ip = 0;;) switch (_fun76728_ip) {
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
                                            _fun76728_ip = 83;
                                            continue _fun76728
                                        }
                                    case 77:
                                        var2 = var1.details;
                                    case 83:
                                        if (!(var3 != var2)) {
                                            _fun76728_ip = 144;
                                            continue _fun76728
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
                            var2 = _closure1_slot63;
                            var4 = _closure1_slot7;
                            var3 = var4.getEmbeddedActivitiesForChannel;
                            var1 = _closure2_slot7;
                            var1 = var3.bind(var4)(var1);
                            var4 = undefined;
                            var3 = var2.bind(var4)(var1);
                            var2 = var3.bind(var4)();
                            var1 = var2.done;
                            if (var1) {
                                _fun76727_ip = 90;
                                continue _fun76727
                            }
                        case 65:
                            var1 = var2.value;
                            var1 = var5.bind(var4)(var1);
                            var6 = var3.bind(var4)();
                            var1 = var6.done;
                            var2 = var6;
                            if (!var1) {
                                _fun76727_ip = 65;
                                continue _fun76727
                            }
                        case 90:
                            return var0;
                    }
                };
                var108 = var28.bind(var30)(var27, var26);
                var _closure2_slot30 = var108;
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
                var109 = var28.bind(var30)(var27, var26);
                var _closure2_slot31 = var109;
                var26 = var16[var2];
                var28 = var14.bind(var3)(var26);
                var27 = var28.useStateFromStoresArray;
                var26 = new Array(1);
                var26[0] = var1;
                var1 = function() { // Environment: var0
                    _fun76734: for (var _fun76734_ip = 0;;) switch (_fun76734_ip) {
                        case 0:
                            var0 = new Array(0);
                            var2 = _closure1_slot63;
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
                                _fun76734_ip = 148;
                                continue _fun76734
                            }
                        case 54:
                            var10 = var2.value;
                            var1 = _closure1_slot4;
                            var1 = var1.bind(var8)(var10, var4);
                            var10 = var1[var6];
                            var1 = var1[var3];
                            var10 = var1.isLaunching;
                            if (!var10) {
                                _fun76734_ip = 96;
                                continue _fun76734
                            }
                        case 86:
                            var11 = var1.componentId;
                            var10 = var5 != var11;
                        case 96:
                            if (!var10) {
                                _fun76734_ip = 114;
                                continue _fun76734
                            }
                        case 99:
                            var11 = var1.componentId;
                            var11 = var11.length;
                            var10 = var11 > var6;
                        case 114:
                            if (!var10) {
                                _fun76734_ip = 133;
                                continue _fun76734
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
                                _fun76734_ip = 54;
                                continue _fun76734
                            }
                        case 148:
                            return var0;
                    }
                };
                var107 = var27.bind(var28)(var26, var1);
                var _closure2_slot32 = var107;
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
                var94 = var27.bind(var28)(var26, var1);
                var _closure2_slot33 = var94;
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
                var92 = var28.bind(var30)(var27, var26, var1);
                var _closure2_slot34 = var92;
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
                var91 = var28.bind(var30)(var27, var26, var1);
                var _closure2_slot35 = var91;
                var1 = 57;
                var1 = var16[var1];
                var26 = var14.bind(var3)(var1);
                var1 = var26.useCodedLinksExperimentEmbeds;
                var90 = var1.bind(var26)();
                var _closure2_slot36 = var90;
                var1 = 58;
                var1 = var16[var1];
                var27 = var14.bind(var3)(var1);
                var26 = var27.useQuests;
                var1 = {
                    'fetchPolicy': 'cache-or-network',
                    'callerSource': 'messages_native_fn'
                };
                var1 = var26.bind(var27)(var1);
                var89 = var1.quests;
                var _closure2_slot37 = var89;
                var88 = var1.isFetchingCurrentQuests;
                var _closure2_slot38 = var88;
                var26 = var8.filter;
                var1 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var1 = var0.type;
                    var0 = _closure1_slot53;
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
                var1 = 56;
                var1 = var16[var1];
                var1 = var14.bind(var3)(var1);
                var1 = var1.isNotNullish;
                var1 = var26.bind(var27)(var1);
                var _closure2_slot39 = var1;
                var1 = var16[var2];
                var28 = var14.bind(var3)(var1);
                var27 = var28.useStateFromStoresArray;
                var1 = _closure1_slot28;
                var26 = new Array(1);
                var26[0] = var1;
                var1 = function() { // Environment: var0
                    var2 = _closure2_slot39;
                    var1 = var2.map;
                    var0 = function(arg0) { // Environment: var0
                        _fun76741: for (var _fun76741_ip = 0;;) switch (_fun76741_ip) {
                            case 0:
                                var2 = _closure1_slot28;
                                var1 = var2.getRelevantUserTrialOffer;
                                var0 = arg0;
                                var1 = var1.bind(var2)(var0);
                                var0 = null;
                                var2 = var0 == var1;
                                var0 = undefined;
                                if (var2) {
                                    _fun76741_ip = 37;
                                    continue _fun76741
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
                    var0 = 56;
                    var3 = var3[var0];
                    var0 = undefined;
                    var0 = var4.bind(var0)(var3);
                    var0 = var0.isNotNullish;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var105 = var27.bind(var28)(var26, var1);
                var _closure2_slot40 = var105;
                var1 = 59;
                var1 = var16[var1];
                var27 = var14.bind(var3)(var1);
                var26 = var27.useTrialOffer;
                var1 = _closure1_slot57;
                var84 = var26.bind(var27)(var1);
                var _closure2_slot41 = var84;
                var1 = var16[var2];
                var28 = var14.bind(var3)(var1);
                var27 = var28.useStateFromStores;
                var1 = _closure1_slot50;
                var26 = new Array(1);
                var26[0] = var1;
                var1 = function() { // Environment: var0
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 60;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.isPremiumExactly;
                    var4 = _closure1_slot50;
                    var1 = var4.getCurrentUser;
                    var1 = var1.bind(var4)();
                    var0 = _closure1_slot58;
                    var0 = var0.TIER_2;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var83 = var27.bind(var28)(var26, var1);
                var _closure2_slot42 = var83;
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
                var79 = var28.bind(var30)(var27, var1, var26);
                var _closure2_slot43 = var79;
                var1 = var16[var2];
                var30 = var14.bind(var3)(var1);
                var28 = var30.useStateFromStores;
                var1 = _closure1_slot30;
                var27 = new Array(1);
                var27[0] = var1;
                var26 = new Array(1);
                var26[0] = var9;
                var1 = function() { // Environment: var0
                    _fun76744: for (var _fun76744_ip = 0;;) switch (_fun76744_ip) {
                        case 0:
                            var2 = _closure1_slot30;
                            var1 = var2.getPendingReply;
                            var0 = _closure2_slot7;
                            var1 = var1.bind(var2)(var0);
                            var0 = null;
                            var2 = var0 == var1;
                            var0 = undefined;
                            if (var2) {
                                _fun76744_ip = 46;
                                continue _fun76744
                            }
                        case 36:
                            var1 = var1.message;
                            var0 = var1.id;
                        case 46:
                            return var0;
                    }
                };
                var67 = var28.bind(var30)(var27, var1, var26);
                var _closure2_slot44 = var67;
                var1 = var16[var2];
                var30 = var14.bind(var3)(var1);
                var28 = var30.useStateFromStores;
                var1 = _closure1_slot48;
                var27 = new Array(1);
                var27[0] = var1;
                var26 = new Array(1);
                var26[0] = var9;
                var1 = function() { // Environment: var0
                    var2 = _closure1_slot48;
                    var1 = var2.getOldestUnreadMessageId;
                    var0 = _closure2_slot7;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var36 = var28.bind(var30)(var27, var1, var26);
                var _closure2_slot45 = var36;
                var1 = var16[var2];
                var30 = var14.bind(var3)(var1);
                var28 = var30.useStateFromStores;
                var1 = _closure1_slot43;
                var27 = new Array(1);
                var27[0] = var1;
                var26 = new Array(1);
                var26[0] = var11;
                var1 = function() { // Environment: var0
                    _fun76746: for (var _fun76746_ip = 0;;) switch (_fun76746_ip) {
                        case 0:
                            var2 = _closure2_slot8;
                            var0 = null;
                            var0 = var0 != var2;
                            if (!var0) {
                                _fun76746_ip = 38;
                                continue _fun76746
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
                var _closure2_slot46 = var39;
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
                    var0 = _closure1_slot55;
                    var1 = var0.SEND_MESSAGES;
                    var0 = _closure2_slot1;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var78 = var28.bind(var30)(var27, var1, var26);
                var _closure2_slot47 = var78;
                var1 = 61;
                var1 = var16[var1];
                var1 = var23.bind(var3)(var1);
                var69 = var1.bind(var3)(var9);
                var _closure2_slot48 = var69;
                var1 = var16[var2];
                var28 = var14.bind(var3)(var1);
                var27 = var28.useStateFromStores;
                var1 = _closure1_slot51;
                var26 = new Array(1);
                var26[0] = var1;
                var23 = new Array(1);
                var23[0] = var70;
                var1 = function() { // Environment: var0
                    var3 = _closure1_slot51;
                    var2 = var3.getUserVoiceChannelId;
                    var1 = _closure1_slot56;
                    var0 = _closure2_slot11;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var76 = var27.bind(var28)(var26, var1, var23);
                var _closure2_slot49 = var76;
                var1 = var16[var2];
                var30 = var14.bind(var3)(var1);
                var28 = var30.useStateFromStores;
                var1 = _closure1_slot31;
                var27 = new Array(1);
                var27[0] = var1;
                var26 = new Array(1);
                var26[0] = var7;
                var23 = function() { // Environment: var0
                    _fun76749: for (var _fun76749_ip = 0;;) switch (_fun76749_ip) {
                        case 0:
                            var0 = _closure1_slot52;
                            var3 = var0.THREADS;
                            var2 = var3.has;
                            var0 = _closure2_slot1;
                            var0 = var0.type;
                            var2 = var2.bind(var3)(var0);
                            var3 = null;
                            var0 = null;
                            if (!var2) {
                                _fun76749_ip = 124;
                                continue _fun76749
                            }
                        case 42:
                            var2 = _closure2_slot1;
                            var2 = var2.parent_id;
                            var2 = var3 != var2;
                            var0 = null;
                            if (!var2) {
                                _fun76749_ip = 124;
                                continue _fun76749
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
                var103 = var28.bind(var30)(var27, var23, var26);
                var _closure2_slot50 = var103;
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
                var87 = var23.resolvingGiftCodes;
                var _closure2_slot51 = var87;
                var86 = var23.resolvedGiftCodes;
                var _closure2_slot52 = var86;
                var85 = var23.acceptingGiftCodes;
                var _closure2_slot53 = var85;
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
                var68 = var28.bind(var30)(var27, var23, var26);
                var _closure2_slot54 = var68;
                var23 = var16[var2];
                var30 = var14.bind(var3)(var23);
                var28 = var30.useStateFromStores;
                var23 = _closure1_slot49;
                var27 = new Array(1);
                var27[0] = var23;
                var26 = new Array(1);
                var26[0] = var9;
                var23 = function() { // Environment: var0
                    var2 = _closure1_slot49;
                    var1 = var2.getFiles;
                    var0 = _closure2_slot7;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var64 = var28.bind(var30)(var27, var23, var26);
                var _closure2_slot55 = var64;
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
                var121 = var27.bind(var28)(var26, var1, var23);
                var _closure2_slot56 = var121;
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
                var _closure2_slot57 = var31;
                var23 = var1.roleStyle;
                var _closure2_slot58 = var23;
                var47 = var1.saturation;
                var _closure2_slot59 = var47;
                var42 = var1.displayNameStylesEnabled;
                var _closure2_slot60 = var42;
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
                var123 = var28.bind(var30)(var27, var1, var26);
                var _closure2_slot61 = var123;
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
                var116 = var27.bind(var28)(var26, var1);
                var _closure2_slot62 = var116;
                var1 = var16[var2];
                var33 = var14.bind(var3)(var1);
                var30 = var33.useStateFromStores;
                var1 = _closure1_slot22;
                var28 = new Array(1);
                var28[0] = var1;
                var1 = 62;
                var1 = var16[var1];
                var1 = var14.bind(var3)(var1);
                var131 = var1.isVersionEqual;
                var133 = function() { // Environment: var0
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
                var132 = new Array(0);
                var135 = var33;
                var134 = var28;
                var1 = var135[var30](var134, var133, var132, var131, var130);
                var1 = var18.bind(var3)(var1, var29);
                var115 = var1[var12];
                var _closure2_slot63 = var115;
                var114 = var1[var6];
                var _closure2_slot64 = var114;
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
                var120 = var26.bind(var27)(var18, var1);
                var _closure2_slot65 = var120;
                var1 = 63;
                var1 = var16[var1];
                var26 = var14.bind(var3)(var1);
                var18 = var26.useIsSpamMessageRequest;
                var1 = var7.id;
                var74 = var18.bind(var26)(var1);
                var _closure2_slot66 = var74;
                var1 = 64;
                var1 = var16[var1];
                var16 = var14.bind(var3)(var1);
                var14 = var16.useIsMessageRequest;
                var1 = var7.id;
                var73 = var14.bind(var16)(var1);
                var _closure2_slot67 = var73;
                var124 = var4 != var8;
                if (!var124) {
                    _fun76716_ip = 2491;
                    continue _fun76716
                }
            case 2473:
                var1 = var8.ready;
                if (var1) {
                    _fun76716_ip = 2488;
                    continue _fun76716
                }
            case 2482:
                var1 = var8.cached;
            case 2488:
                var124 = var1;
            case 2491:
                var _closure2_slot68 = var124;
                var40 = var4 != var8;
                if (!var40) {
                    _fun76716_ip = 2508;
                    continue _fun76716
                }
            case 2502:
                var40 = var8.cached;
            case 2508:
                var _closure2_slot69 = var40;
                var127 = var4 != var8;
                if (!var127) {
                    _fun76716_ip = 2525;
                    continue _fun76716
                }
            case 2519:
                var127 = var8.ready;
            case 2525:
                if (!var127) {
                    _fun76716_ip = 2537;
                    continue _fun76716
                }
            case 2528:
                var1 = var8.loadingMore;
                var127 = !var1;
            case 2537:
                var _closure2_slot70 = var127;
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
                var122 = var26.bind(var27)(var18, var1);
                var _closure2_slot71 = var122;
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
                var117 = var26.bind(var27)(var18, var1);
                var _closure2_slot72 = var117;
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
                var119 = var27.bind(var28)(var26, var18);
                var _closure2_slot73 = var119;
                var18 = var16[var2];
                var28 = var14.bind(var3)(var18);
                var27 = var28.useStateFromStoresObject;
                var26 = new Array(1);
                var26[0] = var1;
                var18 = new Array(2);
                var18[0] = var11;
                var18[1] = var8;
                var1 = function() { // Environment: var0
                    _fun76762: for (var _fun76762_ip = 0;;) switch (_fun76762_ip) {
                        case 0:
                            var0 = _closure2_slot8;
                            var3 = null;
                            if (!(var3 != var0)) {
                                _fun76762_ip = 52;
                                continue _fun76762
                            }
                        case 15:
                            var0 = _closure2_slot6;
                            if (!(var3 != var0)) {
                                _fun76762_ip = 52;
                                continue _fun76762
                            }
                        case 23:
                            var0 = {};
                            var _closure3_slot0 = var0;
                            var3 = _closure2_slot6;
                            var2 = var3.forEach;
                            var1 = function(arg0) { // Environment: var1
                                _fun76763: for (var _fun76763_ip = 0;;) switch (_fun76763_ip) {
                                    case 0:
                                        var1 = arg0;
                                        var4 = var1.author;
                                        var2 = null;
                                        var5 = var2 == var4;
                                        var0 = undefined;
                                        var3 = undefined;
                                        if (var5) {
                                            _fun76763_ip = 27;
                                            continue _fun76763
                                        }
                                    case 22:
                                        var3 = var4.id;
                                    case 27:
                                        if (!(var2 != var3)) {
                                            _fun76763_ip = 94;
                                            continue _fun76763
                                        }
                                    case 31:
                                        var6 = _closure1_slot40;
                                        var5 = var6.getMember;
                                        var4 = _closure2_slot8;
                                        var3 = var1.author;
                                        var3 = var3.id;
                                        var3 = var5.bind(var6)(var4, var3);
                                        if (!(var2 != var3)) {
                                            _fun76763_ip = 94;
                                            continue _fun76763
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
                var118 = var27.bind(var28)(var26, var1, var18);
                var _closure2_slot74 = var118;
                var1 = var16[var2];
                var27 = var14.bind(var3)(var1);
                var26 = var27.useStateFromStores;
                var1 = _closure1_slot46;
                var18 = new Array(1);
                var18[0] = var1;
                var1 = function() { // Environment: var0
                    var3 = _closure1_slot46;
                    var2 = var3.can;
                    var0 = _closure1_slot55;
                    var1 = var0.MODERATE_MEMBERS;
                    var0 = _closure2_slot9;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var71 = var26.bind(var27)(var18, var1);
                var _closure2_slot75 = var71;
                var1 = 65;
                var1 = var16[var1];
                var16 = var14.bind(var3)(var1);
                var14 = var16.useCurrentUserCommunicationDisabled;
                var18 = var4 == var32;
                var1 = undefined;
                if (var18) {
                    _fun76716_ip = 2806;
                    continue _fun76716
                }
            case 2801:
                var1 = var32.id;
            case 2806:
                var1 = var14.bind(var16)(var1);
                var18 = _closure1_slot4;
                var1 = var18.bind(var3)(var1, var29);
                var72 = var1[var6];
                var _closure2_slot76 = var72;
                var34 = _closure1_slot0;
                var126 = _closure1_slot2;
                var1 = var126[var2];
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
                var81 = var16.bind(var26)(var14, var1);
                var _closure2_slot77 = var81;
                var66 = _closure1_slot1;
                var1 = 66;
                var1 = var126[var1];
                var26 = var66.bind(var3)(var1);
                var16 = var26.useExperiment;
                var14 = {};
                var1 = '41de6d_2';
                var14.location = var1;
                var1 = {};
                var33 = false;
                var1.autoTrackExposure = var33;
                var1 = var16.bind(var26)(var14, var1);
                var16 = var1.paymentsBlocked;
                var _closure2_slot78 = var16;
                var1 = var126[var2];
                var27 = var34.bind(var3)(var1);
                var26 = var27.useStateFromStores;
                var1 = _closure1_slot33;
                var14 = new Array(1);
                var14[0] = var1;
                var1 = function() { // Environment: var0
                    _fun76766: for (var _fun76766_ip = 0;;) switch (_fun76766_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            var0 = var2.isForumPost;
                            var0 = var0.bind(var2)();
                            var2 = !var0;
                            var0 = !var2;
                            if (var2) {
                                _fun76766_ip = 48;
                                continue _fun76766
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
                var102 = var26.bind(var27)(var14, var1);
                var _closure2_slot79 = var102;
                var1 = var126[var2];
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
                var101 = var26.bind(var27)(var14, var1);
                var _closure2_slot80 = var101;
                var1 = var126[var2];
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
                var82 = var26.bind(var27)(var14, var1);
                var _closure2_slot81 = var82;
                var1 = var126[var2];
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
                var104 = var26.bind(var27)(var14, var1);
                var _closure2_slot82 = var104;
                var1 = 67;
                var1 = var126[var1];
                var14 = var34.bind(var3)(var1);
                var1 = var14.useMessageJumpAndroidKeyboardHeight;
                var77 = var1.bind(var14)();
                var _closure2_slot83 = var77;
                var1 = 68;
                var1 = var126[var1];
                var1 = var66.bind(var3)(var1);
                var1 = var1.bind(var3)();
                var _closure2_slot84 = var1;
                var14 = 69;
                var14 = var126[var14];
                var26 = var34.bind(var3)(var14);
                var14 = var26.useChannelSummariesExperiment;
                var14 = var14.bind(var26)(var7);
                var _closure2_slot85 = var14;
                var26 = var126[var2];
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
                    _fun76770: for (var _fun76770_ip = 0;;) switch (_fun76770_ip) {
                        case 0:
                            var2 = _closure2_slot85;
                            var0 = null;
                            if (!var2) {
                                _fun76770_ip = 39;
                                continue _fun76770
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
                var _closure2_slot86 = var51;
                var14 = var126[var2];
                var30 = var34.bind(var3)(var14);
                var28 = var30.useStateFromStores;
                var14 = _closure1_slot50;
                var27 = new Array(1);
                var27[0] = var14;
                var26 = function() { // Environment: var0
                    _fun76771: for (var _fun76771_ip = 0;;) switch (_fun76771_ip) {
                        case 0:
                            var1 = _closure1_slot50;
                            var0 = var1.getCurrentUser;
                            var1 = var0.bind(var1)();
                            var0 = null;
                            var2 = var0 == var1;
                            var0 = undefined;
                            if (var2) {
                                _fun76771_ip = 33;
                                continue _fun76771
                            }
                        case 27:
                            var0 = var1.displayNameStyles;
                        case 33:
                            return var0;
                    }
                };
                var41 = var28.bind(var30)(var27, var26);
                var _closure2_slot87 = var41;
                var125 = _closure1_slot5;
                var28 = var125.useEffect;
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
                    _fun76772: for (var _fun76772_ip = 0;;) switch (_fun76772_ip) {
                        case 0:
                            var1 = _closure2_slot6;
                            var1 = var1.ready;
                            var1 = !var1;
                            if (var1) {
                                _fun76772_ip = 34;
                                continue _fun76772
                            }
                        case 19:
                            var2 = _closure2_slot6;
                            var3 = var2.length;
                            var2 = 0;
                            var1 = var2 !== var3;
                        case 34:
                            if (var1) {
                                _fun76772_ip = 47;
                                continue _fun76772
                            }
                        case 37:
                            var2 = _closure2_slot6;
                            var1 = var2.hasMoreBefore;
                        case 47:
                            if (var1) {
                                _fun76772_ip = 60;
                                continue _fun76772
                            }
                        case 50:
                            var2 = _closure2_slot6;
                            var1 = var2.hasMoreAfter;
                        case 60:
                            if (var1) {
                                _fun76772_ip = 121;
                                continue _fun76772
                            }
                        case 63:
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 70;
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
                var26 = var28.bind(var125)(var26, var27);
                var26 = 71;
                var27 = var126[var26];
                var30 = var34.bind(var3)(var27);
                var28 = var30.useShouldTrackAnnouncementMessageViews;
                var27 = {};
                var27.guild = var32;
                var27.channel = var7;
                var27.messages = var8;
                var27.isMessagesReady = var124;
                var129 = 'MessagesFunctional';
                var27.location = var129;
                var28 = var28.bind(var30)(var27);
                var _closure2_slot88 = var28;
                var26 = var126[var26];
                var30 = var34.bind(var3)(var26);
                var27 = var30.useShouldTrackRichPresenceInviteEmbedViews;
                var26 = {};
                var26.messages = var8;
                var26.isMessagesReady = var124;
                var27 = var27.bind(var30)(var26);
                var _closure2_slot89 = var27;
                var26 = 72;
                var26 = var126[var26];
                var30 = var34.bind(var3)(var26);
                var26 = var30.useShouldDisplaySpoilerObscurity;
                var49 = var26.bind(var30)(var7);
                var _closure2_slot90 = var49;
                var26 = 73;
                var26 = var126[var26];
                var30 = var34.bind(var3)(var26);
                var26 = var30.useIsAgeVerified;
                var55 = var26.bind(var30)();
                var _closure2_slot91 = var55;
                var32 = var125.useEffect;
                var30 = new Array(2);
                var30[0] = var9;
                var30[1] = var11;
                var26 = function() { // Environment: var0
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 74;
                    var1 = var1[var0];
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    var0 = var1.handleChannelSelect;
                    var0 = var0.bind(var1)();
                    var0 = function() { // Environment: var0
                        var2 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var0 = 74;
                        var1 = var1[var0];
                        var0 = undefined;
                        var2 = var2.bind(var0)(var1);
                        var1 = var2.handleChannelSelect;
                        var1 = var1.bind(var2)();
                        return var0;
                    };
                    return var0;
                };
                var26 = var32.bind(var125)(var26, var30);
                var26 = 75;
                var26 = var126[var26];
                var32 = var34.bind(var3)(var26);
                var30 = var32.useShouldDisableInteractiveComponents;
                var26 = var7.id;
                var113 = var30.bind(var32)(var26);
                var _closure2_slot92 = var113;
                var30 = _closure1_slot26;
                var26 = var7.id;
                var112 = var30.bind(var3)(var26);
                var _closure2_slot93 = var112;
                var30 = new Array(0);
                var _closure2_slot94 = var30;
                var32 = var8.forEach;
                var26 = function(arg0) { // Environment: var0
                    _fun76775: for (var _fun76775_ip = 0;;) switch (_fun76775_ip) {
                        case 0:
                            var0 = arg0;
                            var2 = var0.messageReference;
                            var1 = null;
                            var4 = var1 == var2;
                            var0 = undefined;
                            var3 = undefined;
                            if (var4) {
                                _fun76775_ip = 28;
                                continue _fun76775
                            }
                        case 22:
                            var3 = var2.message_id;
                        case 28:
                            if (!(var1 != var3)) {
                                _fun76775_ip = 49;
                                continue _fun76775
                            }
                        case 32:
                            var2 = _closure2_slot94;
                            var1 = var2.push;
                            var1 = var1.bind(var2)(var3);
                        case 49:
                            return var0;
                    }
                };
                var26 = var32.bind(var8)(var26);
                var26 = _closure1_slot27;
                var111 = var26.bind(var3)(var30);
                var _closure2_slot95 = var111;
                var26 = var126[var2];
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
                var93 = var35.bind(var37)(var32, var26, var30);
                var _closure2_slot96 = var93;
                var26 = 76;
                var26 = var126[var26];
                var26 = var66.bind(var3)(var26);
                var61 = var26.bind(var3)();
                var _closure2_slot97 = var61;
                var26 = 77;
                var26 = var126[var26];
                var26 = var66.bind(var3)(var26);
                var26 = var26.bind(var3)(var8);
                var46 = var26.unloadedContentEntryMessageIds;
                var _closure2_slot98 = var46;
                var38 = var26.unloadableContentEntryMessageIds;
                var _closure2_slot99 = var38;
                var26 = var126[var2];
                var32 = var34.bind(var3)(var26);
                var30 = var32.useStateFromStores;
                var26 = new Array(1);
                var26[0] = var14;
                var14 = function() { // Environment: var0
                    _fun76777: for (var _fun76777_ip = 0;;) switch (_fun76777_ip) {
                        case 0:
                            var1 = _closure1_slot50;
                            var0 = var1.getCurrentUser;
                            var3 = var0.bind(var1)();
                            var0 = null;
                            var2 = var0 == var3;
                            var1 = undefined;
                            if (var2) {
                                _fun76777_ip = 37;
                                continue _fun76777
                            }
                        case 27:
                            var2 = var3.isStaff;
                            var1 = var2.bind(var3)();
                        case 37:
                            var0 = var0 != var1;
                            if (!var0) {
                                _fun76777_ip = 47;
                                continue _fun76777
                            }
                        case 44:
                            var0 = var1;
                        case 47:
                            return var0;
                    }
                };
                var54 = var30.bind(var32)(var26, var14);
                var _closure2_slot100 = var54;
                var14 = var126[var2];
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
                var80 = var30.bind(var32)(var26, var14);
                var _closure2_slot101 = var80;
                var14 = 78;
                var14 = var126[var14];
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
                var _closure2_slot102 = var59;
                var2 = var126[var2];
                var30 = var34.bind(var3)(var2);
                var26 = var30.useStateFromStores;
                var2 = _closure1_slot14;
                var14 = new Array(1);
                var14[0] = var2;
                var2 = function() { // Environment: var0
                    var2 = _closure1_slot14;
                    var1 = var2.getGuildEmoji;
                    var0 = _closure2_slot8;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var45 = var26.bind(var30)(var14, var2);
                var _closure2_slot103 = var45;
                var2 = var125.useRef;
                var26 = var2.bind(var125)(var4);
                var _closure2_slot104 = var26;
                var2 = var126[var128];
                var14 = var34.bind(var3)(var2);
                var2 = var14.useScrollState;
                var2 = var2.bind(var14)();
                var2 = var18.bind(var3)(var2, var29);
                var30 = var2[var12];
                var _closure2_slot105 = var30;
                var14 = var2[var6];
                var _closure2_slot106 = var14;
                var2 = var125.useState;
                var2 = var2.bind(var125)(var4);
                var2 = var18.bind(var3)(var2, var29);
                var29 = var2[var12];
                var _closure2_slot107 = var29;
                var2 = var2[var6];
                var _closure2_slot108 = var2;
                var6 = var126[var128];
                var12 = var34.bind(var3)(var6);
                var6 = var12.useMessagesState;
                var6 = var6.bind(var12)();
                var50 = var6.shouldForceRender;
                var _closure2_slot109 = var50;
                var37 = var6.hasJumpedToOriginalPost;
                var _closure2_slot110 = var37;
                var32 = var6.setHasJumpedToOriginalPost;
                var _closure2_slot111 = var32;
                var63 = var6.setShouldForceRender;
                var _closure2_slot112 = var63;
                var18 = var125.useMemo;
                var12 = function() { // Environment: var0
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 79;
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
                var6 = var18.bind(var125)(var12, var6);
                var _closure2_slot113 = var6;
                var35 = var125.useMemo;
                var18 = function() { // Environment: var0
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 80;
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
                var18 = var35.bind(var125)(var18, var12);
                var _closure2_slot114 = var18;
                var12 = var125.useRef;
                var12 = var12.bind(var125)(var33);
                var _closure2_slot115 = var12;
                var35 = var125.useRef;
                var12 = 81;
                var12 = var126[var12];
                var12 = var66.bind(var3)(var12);
                var43 = var12.prototype;
                var43 = Object.create(var43, {
                    constructor: {
                        value: var12
                    }
                });
                var135 = var43;
                var134 = var129;
                var12 = new var135[var12](var134, var133);
                var12 = var12 instanceof Object ? var12 : var43;
                var12 = var35.bind(var125)(var12);
                var _closure2_slot116 = var12;
                var12 = var125.useRef;
                var12 = var12.bind(var125)(var33);
                var _closure2_slot117 = var12;
                var35 = var125.useCallback;
                var33 = function(arg0) { // Environment: var0
                    var1 = arg0;
                    var10 = var1.rows;
                    var2 = var1.hasMoreMessagesAfter;
                    var8 = var1.scrollData;
                    var7 = var1.HACK_iOSForceAnimations;
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var0 = 82;
                    var4 = var5[var0];
                    var0 = undefined;
                    var11 = var6.bind(var0)(var4);
                    var9 = var11.isLoadingAtTop;
                    var6 = var1.rows;
                    var4 = _closure2_slot117;
                    var4 = var4.current;
                    var9 = var9.bind(var11)(var6, var4);
                    var4 = _closure1_slot1;
                    var3 = 83;
                    var3 = var5[var3];
                    var6 = var4.bind(var0)(var3);
                    var5 = var6.updateRows;
                    var3 = _closure2_slot104;
                    var4 = var3.current;
                    var3 = {};
                    var3.rows = var10;
                    var3.isLoadingAtTop = var9;
                    var3.scrollData = var8;
                    var3.HACK_iOSForceAnimations = var7;
                    var3 = var5.bind(var6)(var4, var3);
                    var1 = _closure2_slot117;
                    var1.current = var2;
                    return var0;
                };
                var12 = new Array(0);
                var33 = var35.bind(var125)(var33, var12);
                var _closure2_slot118 = var33;
                var12 = var126[var128];
                var34 = var34.bind(var3)(var12);
                var12 = var34.useChatUpdatesQueue;
                var12 = var12.bind(var34)(var26, var33);
                var _closure2_slot119 = var12;
                var35 = var125.useCallback;
                var34 = new Array(4);
                var34[0] = var12;
                var34[1] = var33;
                var33 = var30.decelerating;
                var34[2] = var33;
                var33 = var30.dragging;
                var34[3] = var33;
                var33 = function(arg0) { // Environment: var0
                    _fun76784: for (var _fun76784_ip = 0;;) switch (_fun76784_ip) {
                        case 0:
                            var2 = arg0;
                            var1 = _closure2_slot119;
                            var1 = var1.isBlocking;
                            if (var1) {
                                _fun76784_ip = 83;
                                continue _fun76784
                            }
                        case 19:
                            var1 = var2.isLoadingAtTop;
                            if (!var1) {
                                _fun76784_ip = 54;
                                continue _fun76784
                            }
                        case 28:
                            var1 = _closure2_slot105;
                            var1 = var1.decelerating;
                            if (var1) {
                                _fun76784_ip = 67;
                                continue _fun76784
                            }
                        case 41:
                            var1 = _closure2_slot105;
                            var1 = var1.dragging;
                            if (var1) {
                                _fun76784_ip = 67;
                                continue _fun76784
                            }
                        case 54:
                            var3 = _closure2_slot118;
                            var1 = undefined;
                            var1 = var3.bind(var1)(var2);
                            _fun76784_ip = 97;
                            continue _fun76784;
                        case 67:
                            var3 = _closure2_slot119;
                            var1 = var3.add;
                            var1 = var1.bind(var3)(var2);
                            _fun76784_ip = 97;
                            continue _fun76784;
                        case 83:
                            var1 = _closure2_slot119;
                            var0 = var1.add;
                            var0 = var0.bind(var1)(var2);
                        case 97:
                            var0 = undefined;
                            return var0;
                    }
                };
                var35 = var35.bind(var125)(var33, var34);
                var _closure2_slot120 = var35;
                var34 = var125.useCallback;
                var33 = new Array(26);
                var33[0] = var7;
                var33[1] = var8;
                var33[2] = var124;
                var33[3] = var57;
                var33[4] = var56;
                var33[5] = var53;
                var33[6] = var52;
                var33[7] = var19;
                var33[8] = var29;
                var33[9] = var61;
                var33[10] = var60;
                var33[11] = var71;
                var33[12] = var44;
                var33[13] = var49;
                var33[14] = var113;
                var33[15] = var64;
                var33[16] = var36;
                var33[17] = var67;
                var33[18] = var70;
                var33[19] = var39;
                var33[20] = var51;
                var33[21] = var23;
                var33[22] = var21;
                var33[23] = var38;
                var33[24] = var6;
                var33[25] = var18;
                var18 = function(arg0) { // Environment: var0
                    _fun76785: for (var _fun76785_ip = 0;;) switch (_fun76785_ip) {
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
                                _fun76785_ip = 124;
                                continue _fun76785
                            }
                        case 53:
                            var4 = _closure2_slot6;
                            var4 = var3 != var4;
                            var0 = null;
                            if (!var4) {
                                _fun76785_ip = 124;
                                continue _fun76785
                            }
                        case 66:
                            var2 = _closure2_slot68;
                            var0 = null;
                            if (!var2) {
                                _fun76785_ip = 124;
                                continue _fun76785
                            }
                        case 75:
                            var4 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var2 = 84;
                            var3 = var3[var2];
                            var2 = undefined;
                            var2 = var4.bind(var2)(var3);
                            var3 = var2.firstRowGenerator;
                            var2 = var3.measure;
                            var1 = function() { // Environment: var1
                                _fun76786: for (var _fun76786_ip = 0;;) switch (_fun76786_ip) {
                                    case 0:
                                        var3 = _closure2_slot113;
                                        var2 = var3.setup;
                                        var1 = _closure2_slot6;
                                        var1 = var2.bind(var3)(var1);
                                        var3 = _closure2_slot114;
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
                                        var4 = _closure2_slot107;
                                        var1.animatingStickerMessageId = var4;
                                        var4 = _closure2_slot97;
                                        var1.constrainedWidth = var4;
                                        var4 = _closure2_slot18;
                                        var1.gifAutoPlay = var4;
                                        var4 = _closure2_slot75;
                                        var1.renderCommunicationDisabled = var4;
                                        var4 = _closure3_slot2;
                                        var1.ignoreEmbedDescriptionCache = var4;
                                        var4 = _closure2_slot20;
                                        var1.enableSwipeActions = var4;
                                        var4 = _closure2_slot90;
                                        var1.shouldObscureSpoiler = var4;
                                        var4 = _closure2_slot92;
                                        var1.shouldDisableInteractiveComponents = var4;
                                        var1 = var2.bind(var3)(var1);
                                        var2 = _closure1_slot63;
                                        var3 = _closure1_slot1;
                                        var4 = _closure1_slot2;
                                        var1 = 85;
                                        var1 = var4[var1];
                                        var4 = undefined;
                                        var3 = var3.bind(var4)(var1);
                                        var1 = {};
                                        var7 = _closure2_slot1;
                                        var1.channel = var7;
                                        var7 = _closure2_slot6;
                                        var1.messages = var7;
                                        var8 = _closure2_slot55;
                                        var7 = null;
                                        if (!(var7 == var8)) {
                                            _fun76786_ip = 223;
                                            continue _fun76786
                                        }
                                    case 217:
                                        var7 = new Array(0);
                                        _fun76786_ip = 227;
                                        continue _fun76786;
                                    case 223:
                                        var7 = _closure2_slot55;
                                    case 227:
                                        var1.uploads = var7;
                                        var7 = _closure2_slot45;
                                        var1.oldestUnreadMessageId = var7;
                                        var7 = _closure2_slot44;
                                        var1.replyingMessageId = var7;
                                        var7 = _closure2_slot11;
                                        var1.currentUserId = var7;
                                        var7 = _closure1_slot0;
                                        var8 = _closure1_slot2;
                                        var6 = 82;
                                        var6 = var8[var6];
                                        var9 = var7.bind(var4)(var6);
                                        var8 = var9.canAddNewReactions;
                                        var7 = _closure2_slot1;
                                        var6 = _closure2_slot46;
                                        var6 = var8.bind(var9)(var7, var6);
                                        var1.canAddNewReactions = var6;
                                        var6 = _closure2_slot86;
                                        var1.selectedSummary = var6;
                                        var6 = _closure2_slot113;
                                        var1.chatManager = var6;
                                        var6 = _closure2_slot58;
                                        var1.roleStyle = var6;
                                        var6 = _closure3_slot0;
                                        var1.forceRender = var6;
                                        var5 = _closure3_slot1;
                                        var1.updateMessageIds = var5;
                                        var5 = _closure2_slot4;
                                        var1.isResourceChannel = var5;
                                        var5 = _closure2_slot99;
                                        var1.unloadableContentEntryMessageIds = var5;
                                        var1 = var3.bind(var4)(var1);
                                        var3 = var2.bind(var4)(var1);
                                        var2 = var3.bind(var4)();
                                        var1 = var2.done;
                                        if (var1) {
                                            _fun76786_ip = 439;
                                            continue _fun76786
                                        }
                                    case 389:
                                        var6 = var2.value;
                                        var5 = _closure2_slot114;
                                        var1 = var5.generate;
                                        var6 = var1.bind(var5)(var6);
                                        var5 = _closure2_slot113;
                                        var1 = var5.createRow;
                                        var1 = var1.bind(var5)(var6);
                                        var5 = var3.bind(var4)();
                                        var1 = var5.done;
                                        var2 = var5;
                                        if (!var1) {
                                            _fun76786_ip = 389;
                                            continue _fun76786
                                        }
                                    case 439:
                                        var1 = _closure2_slot113;
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
                var39 = var34.bind(var125)(var18, var33);
                var _closure2_slot121 = var39;
                var34 = var125.useCallback;
                var33 = new Array(1);
                var33[0] = var6;
                var18 = function(arg0) { // Environment: var0
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 82;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.findMessageIndexInRows;
                    var1 = _closure2_slot113;
                    var0 = var1.getPreviousRows;
                    var1 = var0.bind(var1)();
                    var0 = arg0;
                    var0 = var2.bind(var3)(var0, var1);
                    return var0;
                };
                var18 = var34.bind(var125)(var18, var33);
                var _closure2_slot122 = var18;
                var38 = var125.useCallback;
                var34 = new Array(2);
                var34[0] = var31;
                var34[1] = var18;
                var33 = function(arg0) { // Environment: var0
                    _fun76788: for (var _fun76788_ip = 0;;) switch (_fun76788_ip) {
                        case 0:
                            var2 = arg0;
                            var9 = var2.scrollToMessageId;
                            var _closure3_slot0 = var9;
                            var8 = var2.jumpTargetId;
                            var0 = undefined;
                            if (!(var8 === var0)) {
                                _fun76788_ip = 29;
                                continue _fun76788
                            }
                        case 27:
                            var8 = null;
                        case 29:
                            var _closure3_slot1 = var8;
                            var10 = var2.jumpType;
                            if (!(var10 === var0)) {
                                _fun76788_ip = 78;
                                continue _fun76788
                            }
                        case 43:
                            var4 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var3 = 86;
                            var3 = var5[var3];
                            var3 = var4.bind(var0)(var3);
                            var3 = var3.JumpTypes;
                            var10 = var3.ANIMATED;
                        case 78:
                            var7 = var2.scrollPosition;
                            if (!(var7 === var0)) {
                                _fun76788_ip = 123;
                                continue _fun76788
                            }
                        case 88:
                            var4 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var3 = 83;
                            var3 = var5[var3];
                            var3 = var4.bind(var0)(var3);
                            var3 = var3.ChatScrollPosition;
                            var7 = var3.TOP;
                        case 123:
                            var4 = var2.minimizeScrolling;
                            if (!(var4 === var0)) {
                                _fun76788_ip = 135;
                                continue _fun76788
                            }
                        case 133:
                            var4 = false;
                        case 135:
                            var5 = var2.isRescrolling;
                            if (!(var5 === var0)) {
                                _fun76788_ip = 147;
                                continue _fun76788
                            }
                        case 145:
                            var5 = false;
                        case 147:
                            var _closure3_slot2 = var0;
                            var _closure3_slot3 = var0;
                            var3 = _closure2_slot57;
                            if (var3) {
                                _fun76788_ip = 204;
                                continue _fun76788
                            }
                        case 165:
                            var11 = _closure1_slot0;
                            var12 = _closure1_slot2;
                            var6 = 86;
                            var6 = var12[var6];
                            var6 = var11.bind(var0)(var6);
                            var6 = var6.JumpTypes;
                            var6 = var6.INSTANT;
                            var3 = var10 === var6;
                        case 204:
                            var10 = !var3;
                            _closure3_slot2 = var10;
                            var11 = _closure1_slot0;
                            var12 = _closure1_slot2;
                            var6 = 87;
                            var6 = var12[var6];
                            var11 = var11.bind(var0)(var6);
                            var6 = var11.isIOS;
                            var6 = var6.bind(var11)();
                            if (!var6) {
                                _fun76788_ip = 332;
                                continue _fun76788
                            }
                        case 247:
                            if (var5) {
                                _fun76788_ip = 332;
                                continue _fun76788
                            }
                        case 250:
                            var5 = _closure2_slot122;
                            var13 = var5.bind(var0)(var9);
                            var5 = null;
                            if (!(var5 != var13)) {
                                _fun76788_ip = 442;
                                continue _fun76788
                            }
                        case 268:
                            var6 = _closure1_slot1;
                            var11 = _closure1_slot2;
                            var5 = 83;
                            var5 = var11[var5];
                            var12 = var6.bind(var0)(var5);
                            var11 = var12.scrollTo;
                            var5 = _closure2_slot104;
                            var6 = var5.current;
                            var5 = {};
                            var5.animated = var10;
                            var14 = var8 === var9;
                            var5.highlight = var14;
                            var5.position = var7;
                            var5 = var11.bind(var12)(var6, var13, var5);
                            _fun76788_ip = 442;
                            continue _fun76788;
                        case 332:
                            var5 = _closure2_slot122;
                            var6 = var5.bind(var0)(var9);
                            _closure3_slot3 = var6;
                            var5 = null;
                            if (!(var5 != var6)) {
                                _fun76788_ip = 442;
                                continue _fun76788
                            }
                        case 351:
                            if (var4) {
                                _fun76788_ip = 418;
                                continue _fun76788
                            }
                        case 354:
                            var4 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var3 = 83;
                            var3 = var5[var3];
                            var5 = var4.bind(var0)(var3);
                            var4 = var5.scrollTo;
                            var2 = _closure2_slot104;
                            var3 = var2.current;
                            var2 = {};
                            var2.animated = var10;
                            var8 = var8 === var9;
                            var2.highlight = var8;
                            var2.position = var7;
                            var2 = var4.bind(var5)(var3, var6, var2);
                            _fun76788_ip = 442;
                            continue _fun76788;
                        case 418:
                            var2 = global;
                            var3 = var2.setTimeout;
                            var2 = function() { // Environment: var1
                                var2 = _closure1_slot1;
                                var1 = _closure1_slot2;
                                var0 = 83;
                                var1 = var1[var0];
                                var0 = undefined;
                                var5 = var2.bind(var0)(var1);
                                var4 = var5.scrollIntoView;
                                var1 = _closure2_slot104;
                                var3 = var1.current;
                                var2 = _closure3_slot3;
                                var1 = {};
                                var7 = _closure3_slot2;
                                var1.animated = var7;
                                var7 = _closure3_slot1;
                                var6 = _closure3_slot0;
                                var6 = var7 === var6;
                                var1.highlight = var6;
                                var1 = var4.bind(var5)(var3, var2, var1);
                                return var0;
                            };
                            var1 = 5;
                            var1 = var3.bind(var0)(var2, var1);
                        case 442:
                            return var0;
                    }
                };
                var38 = var38.bind(var125)(var33, var34);
                var _closure2_slot123 = var38;
                var34 = var125.useCallback;
                var33 = new Array(14);
                var33[0] = var39;
                var39 = var30.animated;
                var33[1] = var39;
                var33[2] = var12;
                var33[3] = var35;
                var33[4] = var18;
                var33[5] = var37;
                var33[6] = var38;
                var33[7] = var7;
                var33[8] = var9;
                var33[9] = var8;
                var33[10] = var40;
                var33[11] = var51;
                var33[12] = var21;
                var33[13] = var6;
                var21 = function() { // Environment: var0
                    _fun76790: for (var _fun76790_ip = 0;;) switch (_fun76790_ip) {
                        case 0:
                            var2 = arguments[0];
                            var0 = undefined;
                            if (!(var2 === var0)) {
                                _fun76790_ip = 13;
                                continue _fun76790
                            }
                        case 11:
                            var2 = {};
                        case 13:
                            var11 = var2.forceRender;
                            if (!(var11 === var0)) {
                                _fun76790_ip = 25;
                                continue _fun76790
                            }
                        case 23:
                            var11 = false;
                        case 25:
                            var9 = var2.updateMessageIds;
                            if (!(var9 === var0)) {
                                _fun76790_ip = 63;
                                continue _fun76790
                            }
                        case 35:
                            var3 = global;
                            var3 = var3.Set;
                            var4 = var3.prototype;
                            var4 = Object.create(var4, {
                                constructor: {
                                    value: var3
                                }
                            });
                            var26 = var4;
                            var3 = new var26[var3](var25);
                            var9 = var3 instanceof Object ? var3 : var4;
                        case 63:
                            var15 = var2.scrollToMessageId;
                            if (!(var15 === var0)) {
                                _fun76790_ip = 75;
                                continue _fun76790
                            }
                        case 73:
                            var15 = null;
                        case 75:
                            var14 = var2.jumpTargetId;
                            if (!(var14 === var0)) {
                                _fun76790_ip = 87;
                                continue _fun76790
                            }
                        case 85:
                            var14 = null;
                        case 87:
                            var17 = var2.jumpType;
                            if (!(var17 === var0)) {
                                _fun76790_ip = 132;
                                continue _fun76790
                            }
                        case 97:
                            var4 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var3 = 86;
                            var3 = var5[var3];
                            var3 = var4.bind(var0)(var3);
                            var3 = var3.JumpTypes;
                            var17 = var3.ANIMATED;
                        case 132:
                            var7 = var2.focusTargetId;
                            if (!(var7 === var0)) {
                                _fun76790_ip = 144;
                                continue _fun76790
                            }
                        case 142:
                            var7 = null;
                        case 144:
                            var5 = var2.ignoreEmbedDescriptionCache;
                            if (!(var5 === var0)) {
                                _fun76790_ip = 156;
                                continue _fun76790
                            }
                        case 154:
                            var5 = false;
                        case 156:
                            var6 = var2.messagesNewlyLoaded;
                            if (!(var6 === var0)) {
                                _fun76790_ip = 168;
                                continue _fun76790
                            }
                        case 166:
                            var6 = false;
                        case 168:
                            var12 = var2.shouldInitialScroll;
                            if (!(var12 === var0)) {
                                _fun76790_ip = 180;
                                continue _fun76790
                            }
                        case 178:
                            var12 = false;
                        case 180:
                            var16 = var2.minimizeScrolling;
                            if (!(var16 === var0)) {
                                _fun76790_ip = 192;
                                continue _fun76790
                            }
                        case 190:
                            var16 = false;
                        case 192:
                            var8 = var2.isRescrolling;
                            if (!(var8 === var0)) {
                                _fun76790_ip = 204;
                                continue _fun76790
                            }
                        case 202:
                            var8 = false;
                        case 204:
                            var10 = var2.overrideScrollJumpType;
                            var2 = _closure2_slot104;
                            var2 = var2.current;
                            var13 = null;
                            if (!(var13 != var2)) {
                                _fun76790_ip = 989;
                                continue _fun76790
                            }
                        case 231:
                            var4 = _closure2_slot121;
                            var2 = {};
                            var2.forceRender = var11;
                            var2.updateMessageIds = var9;
                            var2.ignoreEmbedDescriptionCache = var5;
                            var11 = var4.bind(var0)(var2);
                            var2 = _closure2_slot115;
                            var5 = var2.current;
                            var2 = _closure2_slot86;
                            var2 = var13 != var2;
                            var9 = undefined;
                            if (!var2) {
                                _fun76790_ip = 330;
                                continue _fun76790
                            }
                        case 279:
                            var2 = _closure2_slot86;
                            var2 = var2.startId;
                            var9 = undefined;
                            if (!(var2 === var15)) {
                                _fun76790_ip = 330;
                                continue _fun76790
                            }
                        case 295:
                            var4 = _closure1_slot0;
                            var18 = _closure1_slot2;
                            var2 = 83;
                            var2 = var18[var2];
                            var2 = var4.bind(var0)(var2);
                            var2 = var2.ChatScrollPosition;
                            var9 = var2.MIDDLE;
                        case 330:
                            if (!(var13 != var11)) {
                                _fun76790_ip = 348;
                                continue _fun76790
                            }
                        case 334:
                            var4 = var11.length;
                            var2 = 0;
                            if (!(!(var4 > var2))) {
                                _fun76790_ip = 651;
                                continue _fun76790
                            }
                        case 348:
                            var2 = _closure2_slot115;
                            var2 = var2.current;
                            if (!var2) {
                                _fun76790_ip = 380;
                                continue _fun76790
                            }
                        case 360:
                            var4 = _closure2_slot119;
                            var2 = var4.hasUpdates;
                            var2 = var2.bind(var4)();
                            if (var2) {
                                _fun76790_ip = 632;
                                continue _fun76790
                            }
                        case 380:
                            var2 = _closure2_slot115;
                            var2 = var2.current;
                            if (var2) {
                                _fun76790_ip = 455;
                                continue _fun76790
                            }
                        case 392:
                            if (!(var13 != var11)) {
                                _fun76790_ip = 455;
                                continue _fun76790
                            }
                        case 396:
                            var4 = var11.length;
                            var2 = 0;
                            if (!(var2 === var4)) {
                                _fun76790_ip = 455;
                                continue _fun76790
                            }
                        case 407:
                            var4 = _closure1_slot1;
                            var18 = _closure1_slot2;
                            var2 = 83;
                            var2 = var18[var2];
                            var18 = var4.bind(var0)(var2);
                            var4 = var18.fadeIn;
                            var2 = _closure2_slot104;
                            var2 = var2.current;
                            var2 = var4.bind(var18)(var2);
                            _fun76790_ip = 930;
                            continue _fun76790;
                        case 455:
                            if (!(var13 != var15)) {
                                _fun76790_ip = 560;
                                continue _fun76790
                            }
                        case 459:
                            var4 = _closure1_slot0;
                            var18 = _closure1_slot2;
                            var2 = 82;
                            var2 = var18[var2];
                            var21 = var4.bind(var0)(var2);
                            var20 = var21.shouldJumpToOriginalPost;
                            var25 = _closure2_slot1;
                            var24 = _closure2_slot7;
                            var23 = _closure2_slot6;
                            var22 = _closure2_slot110;
                            var26 = var21;
                            var2 = var26[var20](var25, var24, var23, var22, var21);
                            if (var2) {
                                _fun76790_ip = 560;
                                continue _fun76790
                            }
                        case 514:
                            var4 = _closure2_slot123;
                            var2 = {};
                            var2.scrollToMessageId = var15;
                            var2.jumpTargetId = var14;
                            var2.jumpType = var17;
                            var2.scrollPosition = var9;
                            var2.minimizeScrolling = var16;
                            var2.isRescrolling = var8;
                            var2 = var4.bind(var0)(var2);
                            _fun76790_ip = 930;
                            continue _fun76790;
                        case 560:
                            if (!(var13 != var7)) {
                                _fun76790_ip = 930;
                                continue _fun76790
                            }
                        case 567:
                            var2 = _closure2_slot122;
                            var16 = var2.bind(var0)(var7);
                            if (!(var13 != var16)) {
                                _fun76790_ip = 930;
                                continue _fun76790
                            }
                        case 583:
                            var4 = _closure1_slot1;
                            var8 = _closure1_slot2;
                            var2 = 83;
                            var2 = var8[var2];
                            var8 = var4.bind(var0)(var2);
                            var4 = var8.focus;
                            var2 = _closure2_slot104;
                            var2 = var2.current;
                            var2 = var4.bind(var8)(var2, var16);
                            _fun76790_ip = 930;
                            continue _fun76790;
                        case 632:
                            var4 = _closure2_slot119;
                            var2 = var4.tryFlush;
                            var2 = var2.bind(var4)();
                            _fun76790_ip = 930;
                            continue _fun76790;
                        case 651:
                            var4 = _closure1_slot1;
                            var16 = _closure1_slot2;
                            var2 = 88;
                            var2 = var16[var2];
                            var4 = var4.bind(var0)(var2);
                            var2 = {};
                            var17 = _closure2_slot113;
                            var16 = var17.getPreviousRows;
                            var16 = var16.bind(var17)();
                            var2.rows = var16;
                            var2.scrollToMessageId = var15;
                            var2.jumpTargetId = var14;
                            if (!(var13 == var10)) {
                                _fun76790_ip = 719;
                                continue _fun76790
                            }
                        case 709:
                            var13 = _closure2_slot6;
                            var10 = var13.jumpType;
                        case 719:
                            var2.jumpType = var10;
                            var10 = _closure2_slot115;
                            var10 = var10.current;
                            var10 = !var10;
                            if (var10) {
                                _fun76790_ip = 742;
                                continue _fun76790
                            }
                        case 739:
                            var10 = var12;
                        case 742:
                            var2.shouldInitialScroll = var10;
                            var10 = _closure2_slot105;
                            var10 = var10.animated;
                            var2.animated = var10;
                            var2.scrollPosition = var9;
                            var2.focusTargetId = var7;
                            var7 = function() {
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 89;
                                var1 = var1[var0];
                                var0 = undefined;
                                var4 = var2.bind(var0)(var1);
                                var3 = var4.trackMentionsOnInitialUnreadChannelScroll;
                                var2 = _closure2_slot1;
                                var1 = _closure2_slot6;
                                var1 = var3.bind(var4)(var2, var1);
                                return var0;
                            };
                            var2.onComputedScrollToUnread = var7;
                            var7 = var4.bind(var0)(var2);
                            var4 = _closure2_slot115;
                            var2 = true;
                            var4.current = var2;
                            var4 = _closure2_slot120;
                            var2 = {};
                            var2.rows = var11;
                            var9 = _closure2_slot6;
                            var9 = var9.hasMoreAfter;
                            var2.hasMoreMessagesAfter = var9;
                            var9 = _closure1_slot0;
                            var10 = _closure1_slot2;
                            var8 = 82;
                            var8 = var10[var8];
                            var10 = var9.bind(var0)(var8);
                            var9 = var10.isLoadingAtTop;
                            var8 = _closure2_slot117;
                            var8 = var8.current;
                            var8 = var9.bind(var10)(var11, var8);
                            var2.isLoadingAtTop = var8;
                            var2.scrollData = var7;
                            var2.HACK_iOSForceAnimations = var6;
                            var2 = var4.bind(var0)(var2);
                            if (var5) {
                                _fun76790_ip = 930;
                                continue _fun76790
                            }
                        case 891:
                            var2 = _closure2_slot116;
                            var6 = var2.current;
                            var4 = var6.finish;
                            var2 = {};
                            var7 = _closure2_slot7;
                            var2.channelId = var7;
                            var7 = _closure2_slot69;
                            var2.areMessagesCached = var7;
                            var2 = var4.bind(var6)(var2);
                        case 930:
                            var2 = _closure2_slot115;
                            var2 = var2.current;
                            if (!var2) {
                                _fun76790_ip = 955;
                                continue _fun76790
                            }
                        case 942:
                            var4 = _closure2_slot115;
                            var4 = var4.current;
                            var2 = var4 !== var5;
                        case 955:
                            if (!var2) {
                                _fun76790_ip = 962;
                                continue _fun76790
                            }
                        case 958:
                            var2 = _closure2_slot4;
                        case 962:
                            if (!var2) {
                                _fun76790_ip = 989;
                                continue _fun76790
                            }
                        case 965:
                            var2 = global;
                            var3 = var2.setTimeout;
                            var2 = function() { // Environment: var1
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 82;
                                var1 = var1[var0];
                                var0 = undefined;
                                var3 = var2.bind(var0)(var1);
                                var2 = var3.scrollToTopMessage;
                                var1 = _closure2_slot104;
                                var0 = _closure2_slot113;
                                var0 = var2.bind(var3)(var1, var0);
                                return var0;
                            };
                            var1 = 100;
                            var1 = var3.bind(var0)(var2, var1);
                        case 989:
                            return var0;
                    }
                };
                var21 = var34.bind(var125)(var21, var33);
                var _closure2_slot124 = var21;
                var35 = var125.useCallback;
                var34 = new Array(2);
                var34[0] = var18;
                var34[1] = var21;
                var33 = function(arg0) { // Environment: var0
                    _fun76793: for (var _fun76793_ip = 0;;) switch (_fun76793_ip) {
                        case 0:
                            var5 = arguments[1];
                            var1 = arguments[2];
                            var0 = undefined;
                            if (!(var5 === var0)) {
                                _fun76793_ip = 14;
                                continue _fun76793
                            }
                        case 12:
                            var5 = false;
                        case 14:
                            if (!(var1 === var0)) {
                                _fun76793_ip = 53;
                                continue _fun76793
                            }
                        case 18:
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var2 = 86;
                            var2 = var4[var2];
                            var2 = var3.bind(var0)(var2);
                            var2 = var2.JumpTypes;
                            var1 = var2.INSTANT;
                        case 53:
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var2 = 82;
                            var2 = var4[var2];
                            var4 = var3.bind(var0)(var2);
                            var3 = var4.maybeRescrollToMessageId;
                            var2 = {};
                            var7 = _closure2_slot104;
                            var2.chatRef = var7;
                            var7 = _closure2_slot122;
                            var2.findMessageIndex = var7;
                            var6 = _closure2_slot124;
                            var2.updateRows = var6;
                            var2.updateRowsEnabled = var5;
                            var2.jumpType = var1;
                            var1 = arg0;
                            var1 = var3.bind(var4)(var1, var2);
                            return var0;
                    }
                };
                var35 = var35.bind(var125)(var33, var34);
                var _closure2_slot125 = var35;
                var39 = var125.useCallback;
                var34 = new Array(5);
                var34[0] = var9;
                var34[1] = var17;
                var34[2] = var14;
                var34[3] = var2;
                var34[4] = var6;
                var33 = function() { // Environment: var0
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 82;
                    var1 = var1[var0];
                    var0 = undefined;
                    var7 = var2.bind(var0)(var1);
                    var6 = var7.clearRows;
                    var12 = _closure2_slot104;
                    var11 = _closure2_slot113;
                    var10 = _closure2_slot7;
                    var9 = _closure2_slot2;
                    var8 = function(arg0) { // Environment: var1
                        var3 = _closure2_slot106;
                        var0 = undefined;
                        var2 = arg0;
                        var2 = var3.bind(var0)(var2);
                        var3 = _closure2_slot108;
                        var2 = null;
                        var2 = var3.bind(var0)(var2);
                        var2 = _closure2_slot115;
                        var1 = false;
                        var2.current = var1;
                        return var0;
                    };
                    var13 = var7;
                    var1 = var13[var6](var12, var11, var10, var9, var8, var7);
                    return var0;
                };
                var34 = var39.bind(var125)(var33, var34);
                var _closure2_slot126 = var34;
                var43 = var125.useCallback;
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
                    var0 = 82;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.getVisibleMessages;
                    var0 = {};
                    var0.firstVisibleMessageRowIndex = var6;
                    var0.lastVisibleMessageRowIndex = var5;
                    var0.firstVisibleMessagePercentVisible = var4;
                    var0.lastVisibleMessagePercentVisible = var3;
                    var4 = _closure2_slot113;
                    var0.chatManager = var4;
                    var3 = _closure2_slot7;
                    var0.channelId = var3;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var33 = var43.bind(var125)(var33, var39);
                var _closure2_slot127 = var33;
                var43 = var125.useCallback;
                var39 = new Array(6);
                var39[0] = var9;
                var39[1] = var13;
                var39[2] = var8;
                var39[3] = var64;
                var39[4] = var16;
                var39[5] = var14;
                var16 = function() { // Environment: var0
                    _fun76797: for (var _fun76797_ip = 0;;) switch (_fun76797_ip) {
                        case 0:
                            var0 = {};
                            var2 = function arg0() {
                                var1 = arg0;
                                var _closure4_slot0 = var1;
                                var3 = _closure1_slot1;
                                var2 = _closure1_slot2;
                                var1 = 90;
                                var2 = var2[var1];
                                var1 = undefined;
                                var3 = var3.bind(var1)(var2);
                                var2 = var3.find;
                                var4 = _closure2_slot6;
                                var1 = var4.toArray;
                                var1 = var1.bind(var4)();
                                var0 = function(arg0) { // Environment: var0
                                    _fun76799: for (var _fun76799_ip = 0;;) switch (_fun76799_ip) {
                                        case 0:
                                            var0 = arg0;
                                            var3 = var0.id;
                                            var2 = var0.nonce;
                                            var0 = _closure4_slot0;
                                            var0 = var3 === var0;
                                            if (var0) {
                                                _fun76799_ip = 36;
                                                continue _fun76799
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
                            var2 = _closure2_slot55;
                            var4 = null;
                            if (!(var4 == var2)) {
                                _fun76797_ip = 68;
                                continue _fun76797
                            }
                        case 62:
                            var2 = new Array(0);
                            _fun76797_ip = 72;
                            continue _fun76797;
                        case 68:
                            var2 = _closure2_slot55;
                        case 72:
                            var0.uploads = var2;
                            var2 = _closure2_slot78;
                            var2 = var4 != var2;
                            if (!var2) {
                                _fun76797_ip = 92;
                                continue _fun76797
                            }
                        case 88:
                            var2 = _closure2_slot78;
                        case 92:
                            var0.paymentsBlocked = var2;
                            var2 = function() {
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 82;
                                var1 = var1[var0];
                                var0 = undefined;
                                var4 = var2.bind(var0)(var1);
                                var3 = var4.loadMoreBefore;
                                var2 = _closure2_slot7;
                                var1 = _closure2_slot6;
                                var0 = function(arg0) { // Environment: var0
                                    var2 = _closure2_slot106;
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
                                var0 = 82;
                                var1 = var1[var0];
                                var0 = undefined;
                                var4 = var2.bind(var0)(var1);
                                var3 = var4.loadMoreAfter;
                                var2 = _closure2_slot7;
                                var1 = _closure2_slot6;
                                var0 = function(arg0) { // Environment: var0
                                    var2 = _closure2_slot106;
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
                var16 = var43.bind(var125)(var16, var39);
                var _closure2_slot128 = var16;
                var43 = var125.useMemo;
                var39 = new Array(1);
                var39[0] = var16;
                var16 = function() { // Environment: var0
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 91;
                    var1 = var1[var0];
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    var2 = var0.MessagesHandlers;
                    var3 = _closure2_slot128;
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
                var16 = var43.bind(var125)(var16, var39);
                var _closure2_slot129 = var16;
                var43 = var125.useCallback;
                var39 = new Array(7);
                var39[0] = var65;
                var39[1] = var7;
                var39[2] = var8;
                var39[3] = var12;
                var39[4] = var30;
                var39[5] = var9;
                var39[6] = var14;
                var12 = function(arg0) { // Environment: var0
                    _fun76805: for (var _fun76805_ip = 0;;) switch (_fun76805_ip) {
                        case 0:
                            var0 = arg0;
                            var5 = var0.isAtBottom;
                            var9 = var0.isNearBottom;
                            var3 = undefined;
                            if (!(var9 === var3)) {
                                _fun76805_ip = 25;
                                continue _fun76805
                            }
                        case 23:
                            var9 = false;
                        case 25:
                            var11 = var0.isNearTop;
                            if (!(var11 === var3)) {
                                _fun76805_ip = 37;
                                continue _fun76805
                            }
                        case 35:
                            var11 = false;
                        case 37:
                            var12 = var0.dragging;
                            if (!(var12 === var3)) {
                                _fun76805_ip = 49;
                                continue _fun76805
                            }
                        case 47:
                            var12 = false;
                        case 49:
                            var14 = var0.decelerating;
                            if (!(var14 === var3)) {
                                _fun76805_ip = 61;
                                continue _fun76805
                            }
                        case 59:
                            var14 = false;
                        case 61:
                            var4 = var0.isFirstMessageVisible;
                            if (!(var4 === var3)) {
                                _fun76805_ip = 73;
                                continue _fun76805
                            }
                        case 71:
                            var4 = false;
                        case 73:
                            var1 = _closure2_slot0;
                            var2 = var1.onScroll;
                            var6 = _closure2_slot1;
                            var1 = null;
                            if (!(var1 != var6)) {
                                _fun76805_ip = 524;
                                continue _fun76805
                            }
                        case 99:
                            var6 = _closure2_slot6;
                            var6 = var6.length;
                            var10 = 0;
                            if (!(var10 === var6)) {
                                _fun76805_ip = 130;
                                continue _fun76805
                            }
                        case 114:
                            var6 = _closure2_slot6;
                            var6 = var6.loadingMore;
                            if (var6) {
                                _fun76805_ip = 524;
                                continue _fun76805
                            }
                        case 130:
                            var13 = _closure1_slot0;
                            var15 = _closure1_slot2;
                            var8 = 92;
                            var8 = var15[var8];
                            var13 = var13.bind(var3)(var8);
                            var8 = var13.getIsScreenReaderEnabled;
                            var13 = var8.bind(var13)();
                            var8 = _closure2_slot6;
                            var8 = var8.loadingMore;
                            var8 = !var8;
                            if (!var8) {
                                _fun76805_ip = 194;
                                continue _fun76805
                            }
                        case 179:
                            if (var12) {
                                _fun76805_ip = 185;
                                continue _fun76805
                            }
                        case 182:
                            var12 = var14;
                        case 185:
                            if (var12) {
                                _fun76805_ip = 191;
                                continue _fun76805
                            }
                        case 188:
                            var12 = var13;
                        case 191:
                            var8 = var12;
                        case 194:
                            if (!var8) {
                                _fun76805_ip = 214;
                                continue _fun76805
                            }
                        case 197:
                            var13 = _closure2_slot119;
                            var12 = var13.hasUpdates;
                            var12 = var12.bind(var13)();
                            var8 = !var12;
                        case 214:
                            var12 = _closure2_slot105;
                            var12 = var12.isNearTop;
                            if (var12) {
                                _fun76805_ip = 299;
                                continue _fun76805
                            }
                        case 227:
                            if (!var11) {
                                _fun76805_ip = 299;
                                continue _fun76805
                            }
                        case 230:
                            var11 = _closure2_slot6;
                            var11 = var11.hasMoreBefore;
                            if (!var11) {
                                _fun76805_ip = 299;
                                continue _fun76805
                            }
                        case 243:
                            if (!var8) {
                                _fun76805_ip = 299;
                                continue _fun76805
                            }
                        case 246:
                            var12 = _closure1_slot0;
                            var13 = _closure1_slot2;
                            var11 = 82;
                            var11 = var13[var11];
                            var15 = var12.bind(var3)(var11);
                            var14 = var15.loadMoreBefore;
                            var13 = _closure2_slot7;
                            var12 = _closure2_slot6;
                            var11 = function(arg0) { // Environment: var7
                                var2 = _closure2_slot106;
                                var1 = {};
                                var0 = arg0;
                                var1.animated = var0;
                                var0 = undefined;
                                var0 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var11 = var14.bind(var15)(var13, var12, var11);
                            _fun76805_ip = 490;
                            continue _fun76805;
                        case 299:
                            var11 = _closure2_slot105;
                            var11 = var11.isNearBottom;
                            if (var11) {
                                _fun76805_ip = 381;
                                continue _fun76805
                            }
                        case 312:
                            if (!var9) {
                                _fun76805_ip = 381;
                                continue _fun76805
                            }
                        case 315:
                            var9 = _closure2_slot6;
                            var9 = var9.hasMoreAfter;
                            if (!var9) {
                                _fun76805_ip = 381;
                                continue _fun76805
                            }
                        case 328:
                            if (!var8) {
                                _fun76805_ip = 381;
                                continue _fun76805
                            }
                        case 331:
                            var9 = _closure1_slot0;
                            var11 = _closure1_slot2;
                            var8 = 82;
                            var8 = var11[var8];
                            var12 = var9.bind(var3)(var8);
                            var11 = var12.loadMoreAfter;
                            var9 = _closure2_slot7;
                            var8 = _closure2_slot6;
                            var7 = function(arg0) { // Environment: var7
                                var2 = _closure2_slot106;
                                var1 = {};
                                var0 = arg0;
                                var1.animated = var0;
                                var0 = undefined;
                                var0 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var7 = var11.bind(var12)(var9, var8, var7);
                            _fun76805_ip = 490;
                            continue _fun76805;
                        case 381:
                            var7 = _closure2_slot105;
                            var7 = var7.isAtBottom;
                            var7 = var7 === var5;
                            if (!var7) {
                                _fun76805_ip = 408;
                                continue _fun76805
                            }
                        case 398:
                            var8 = _closure2_slot105;
                            var7 = var8.hasHandledScroll;
                        case 408:
                            if (var7) {
                                _fun76805_ip = 490;
                                continue _fun76805
                            }
                        case 411:
                            var7 = _closure1_slot1;
                            var8 = _closure1_slot2;
                            var6 = 70;
                            var6 = var8[var6];
                            var9 = var7.bind(var3)(var6);
                            var8 = var9.updateChannelDimensions;
                            var6 = _closure2_slot1;
                            var7 = var6.id;
                            var6 = 0;
                            if (!var5) {
                                _fun76805_ip = 454;
                                continue _fun76805
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
                            var6 = _closure2_slot106;
                            var5 = {};
                            var7 = true;
                            var5.hasHandledScroll = var7;
                            var5 = var6.bind(var3)(var5);
                        case 490:
                            if (!(var1 != var2)) {
                                _fun76805_ip = 506;
                                continue _fun76805
                            }
                        case 494:
                            var1 = {};
                            var1.isFirstMessageVisible = var4;
                            var1 = var2.bind(var3)(var1);
                        case 506:
                            var1 = _closure2_slot119;
                            var0 = var1.tryFlush;
                            var0 = var0.bind(var1)();
                            var0 = true;
                            return var0;
                        case 524:
                            var0 = false;
                            return var0;
                    }
                };
                var12 = var43.bind(var125)(var12, var39);
                var _closure2_slot130 = var12;
                var43 = var125.useCallback;
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
                    _fun76808: for (var _fun76808_ip = 0;;) switch (_fun76808_ip) {
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
                            var0 = 93;
                            var6 = var6[var0];
                            var0 = undefined;
                            var15 = var12.bind(var0)(var6);
                            var13 = var15.getChangesetIdForChat;
                            var12 = _closure2_slot104;
                            var12 = var12.current;
                            var18 = var13.bind(var15)(var12);
                            if (!(var19 !== var18)) {
                                _fun76808_ip = 180;
                                continue _fun76808
                            }
                        case 133:
                            var12 = _closure2_slot100;
                            if (!var12) {
                                _fun76808_ip = 419;
                                continue _fun76808
                            }
                        case 143:
                            var16 = _closure1_slot62;
                            var15 = var16.log;
                            var22 = _closure2_slot7;
                            var23 = 'STAFF-ACK-LOG: Ignoring outdated scroll event.';
                            var24 = var16;
                            var21 = var19;
                            var20 = var18;
                            var12 = var24[var15](var23, var22, var21, var20, var19);
                            _fun76808_ip = 419;
                            continue _fun76808;
                        case 180:
                            var15 = _closure1_slot0;
                            var16 = _closure1_slot2;
                            var2 = 82;
                            var2 = var16[var2];
                            var13 = var15.bind(var0)(var2);
                            var12 = var13.handleVisibleMessagesChange;
                            var2 = {};
                            var2.firstVisibleMessageRowIndex = var5;
                            var2.firstVisibleMessagePercentVisible = var17;
                            var2.lastVisibleMessageRowIndex = var4;
                            var2.lastVisibleMessagePercentVisible = var14;
                            var14 = 94;
                            var14 = var16[var14];
                            var14 = var15.bind(var0)(var14);
                            var14 = var14.QuestsVisibleMessagesChangedSource;
                            var14 = var14.SCROLL;
                            var2.source = var14;
                            var14 = _closure2_slot113;
                            var2.chatManager = var14;
                            var14 = _closure2_slot88;
                            var2.shouldTrackAnnouncementMessageViews = var14;
                            var14 = _closure2_slot89;
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
                                _fun76809: for (var _fun76809_ip = 0;;) switch (_fun76809_ip) {
                                    case 0:
                                        var2 = arg0;
                                        var8 = var2.isAtBottom;
                                        var7 = var2.isNearBottom;
                                        var0 = undefined;
                                        if (!(var7 === var0)) {
                                            _fun76809_ip = 25;
                                            continue _fun76809
                                        }
                                    case 23:
                                        var7 = false;
                                    case 25:
                                        var6 = var2.isNearTop;
                                        if (!(var6 === var0)) {
                                            _fun76809_ip = 37;
                                            continue _fun76809
                                        }
                                    case 35:
                                        var6 = false;
                                    case 37:
                                        var5 = var2.dragging;
                                        if (!(var5 === var0)) {
                                            _fun76809_ip = 49;
                                            continue _fun76809
                                        }
                                    case 47:
                                        var5 = false;
                                    case 49:
                                        var4 = var2.decelerating;
                                        if (!(var4 === var0)) {
                                            _fun76809_ip = 61;
                                            continue _fun76809
                                        }
                                    case 59:
                                        var4 = false;
                                    case 61:
                                        var3 = var2.shouldShowJumpToPresent;
                                        if (!(var3 === var0)) {
                                            _fun76809_ip = 73;
                                            continue _fun76809
                                        }
                                    case 71:
                                        var3 = false;
                                    case 73:
                                        var _closure4_slot0 = var3;
                                        var10 = var2.isFirstMessageVisible;
                                        if (!(var10 === var0)) {
                                            _fun76809_ip = 89;
                                            continue _fun76809
                                        }
                                    case 87:
                                        var10 = false;
                                    case 89:
                                        var9 = _closure2_slot130;
                                        var3 = {};
                                        var3.isAtBottom = var8;
                                        var3.isNearBottom = var7;
                                        var3.isNearTop = var6;
                                        var3.dragging = var5;
                                        var3.decelerating = var4;
                                        var3.isFirstMessageVisible = var10;
                                        var3 = var9.bind(var0)(var3);
                                        if (!var3) {
                                            _fun76809_ip = 213;
                                            continue _fun76809
                                        }
                                    case 136:
                                        var3 = _closure2_slot106;
                                        var2 = {};
                                        var2.isAtBottom = var8;
                                        var2.isNearBottom = var7;
                                        var2.isNearTop = var6;
                                        var2.dragging = var5;
                                        var2.decelerating = var4;
                                        var2 = var3.bind(var0)(var2);
                                        var3 = _closure1_slot0;
                                        var4 = _closure1_slot2;
                                        var2 = 95;
                                        var2 = var4[var2];
                                        var3 = var3.bind(var0)(var2);
                                        var2 = var3.batchUpdates;
                                        var1 = function() { // Environment: var1
                                            _fun76810: for (var _fun76810_ip = 0;;) switch (_fun76810_ip) {
                                                case 0:
                                                    var4 = _closure1_slot13;
                                                    var3 = _closure2_slot7;
                                                    var2 = _closure2_slot2;
                                                    var1 = _closure4_slot0;
                                                    if (var1) {
                                                        _fun76810_ip = 38;
                                                        continue _fun76810
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
                                _fun76808_ip = 419;
                                continue _fun76808
                            }
                        case 373:
                            var3 = _closure2_slot5;
                            var2 = var3.handleScrollPosition;
                            var1 = {};
                            var7 = _closure2_slot113;
                            var6 = var7.getPreviousRows;
                            var6 = var6.bind(var7)();
                            var1.rows = var6;
                            var1.firstVisibleMessageRowIndex = var5;
                            var1.lastVisibleMessageRowIndex = var4;
                            var1 = var2.bind(var3)(var1);
                        case 419:
                            return var0;
                    }
                };
                var22 = var43.bind(var125)(var22, var39);
                var43 = var125.useMemo;
                var39 = new Array(1);
                var39[0] = var16;
                var16 = function() { // Environment: var0
                    var0 = {};
                    var2 = function arg0() {
                        var2 = _closure2_slot129;
                        var1 = var2.handleTapImage;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapImage = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot129;
                        var1 = var2.handleTapChannel;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapChannel = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot129;
                        var1 = var2.handleLongPressChannel;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleLongPressChannel = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot129;
                        var1 = var2.handleTapAttachmentLink;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapAttachmentLink = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot129;
                        var1 = var2.handleLongPressAttachmentLink;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleLongPressAttachmentLink = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot129;
                        var1 = var2.handleTapCall;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapCall = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot129;
                        var1 = var2.handleTapMention;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapMention = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot129;
                        var1 = var2.handleTapCommandMention;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapCommandMention = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot129;
                        var1 = var2.handleLongPressCommandMention;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleLongPressCommandMention = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot129;
                        var1 = var2.handleTapLink;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapLink = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot129;
                        var1 = var2.handleLongPressLink;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleLongPressLink = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot129;
                        var1 = var2.handleTapReaction;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapReaction = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot129;
                        var1 = var2.handleLongPressReaction;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleLongPressReaction = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot129;
                        var1 = var2.handleOpenSticker;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleOpenSticker = var2;
                    var2 = function arg0() {
                        var3 = _closure2_slot129;
                        var2 = var3.handleOpenProfile;
                        var4 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var0 = 96;
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
                        var2 = _closure2_slot129;
                        var1 = var2.handleTapUsername;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapUsername = var2;
                    var2 = function arg0() {
                        var3 = _closure2_slot129;
                        var2 = var3.handleOpenProfile;
                        var4 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var0 = 96;
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
                        var2 = _closure2_slot129;
                        var1 = var2.handleTapThreadEmbed;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapThreadEmbed = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot129;
                        var1 = var2.handleTapReply;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapReply = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot129;
                        var1 = var2.handleTapSummary;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapSummary = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot129;
                        var1 = var2.handleTapSummaryJump;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapSummaryJump = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot129;
                        var1 = var2.handleLongPressMessage;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleLongPressMessage = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot129;
                        var1 = var2.handleInitiateReply;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleInitiateReply = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot129;
                        var1 = var2.handleInitiateEdit;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleInitiateEdit = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot129;
                        var1 = var2.handleInitiateThread;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleInitiateThread = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot129;
                        var1 = var2.handleTapMessage;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapMessage = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot129;
                        var1 = var2.handleTapSeparator;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapSeparator = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot129;
                        var1 = var2.handleDoubleTapMessage;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleDoubleTapMessage = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot129;
                        var1 = var2.handleTapCancelUploadItem;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapCancelUploadItem = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot129;
                        var1 = var2.handleTapInviteEmbedAccept;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapInviteEmbedAccept = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot129;
                        var1 = var2.handleTapInviteEmbed;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapInviteEmbed = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot129;
                        var1 = var2.handleTapJoinActivity;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapJoinActivity = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot129;
                        var1 = var2.handleTapJoinRichPresence;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapJoinRichPresence = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot129;
                        var1 = var2.handleTapGiftCodeEmbed;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapGiftCodeEmbed = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot129;
                        var1 = var2.handleTapGiftCodeAccept;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapGiftCodeAccept = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot129;
                        var1 = var2.handleTapReferralRedeem;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapReferralRedeem = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot129;
                        var1 = var2.handleTapEmoji;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapEmoji = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot129;
                        var1 = var2.handleTapTimestamp;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapTimestamp = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot129;
                        var1 = var2.handleTapInlineCode;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapInlineCode = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot129;
                        var1 = var2.handleTapRoleIcon;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapRoleIcon = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot129;
                        var1 = var2.handleTapGameIcon;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapGameIcon = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot129;
                        var1 = var2.handleTapSuppressNotificationsIcon;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapSuppressNotificationsIcon = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot129;
                        var1 = var2.handleTapConnectionsRoleTag;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapConnectionsRoleTag = var2;
                    var2 = function() {
                        var1 = _closure2_slot129;
                        var0 = var1.handleTapTimeoutIcon;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    var0.handleTapTimeoutIcon = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot129;
                        var1 = var2.handleTapButtonActionComponent;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapButtonActionComponent = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot129;
                        var1 = var2.handleTapSelectActionComponent;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapSelectActionComponent = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot129;
                        var1 = var2.handleTapWelcomeReply;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapWelcomeReply = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot129;
                        var1 = var2.handleTapInviteToSpeak;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapInviteToSpeak = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot129;
                        var1 = var2.handleTapAutoModerationActions;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapAutoModerationActions = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot129;
                        var1 = var2.handleTapAutoModerationFeedback;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapAutoModerationFeedback = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot129;
                        var1 = var2.handleTapFollowForumPost;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapFollowForumPost = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot129;
                        var1 = var2.handleTapShareForumPost;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapShareForumPost = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot129;
                        var1 = var2.handleTapReactionOverflow;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapReactionOverflow = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot129;
                        var1 = var2.handleCopyText;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleCopyText = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot129;
                        var1 = var2.handleTapOpTag;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapOpTag = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot129;
                        var1 = var2.handleTapTag;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapTag = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot129;
                        var1 = var2.handleMediaAttachmentPlaybackStarted;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleMediaAttachmentPlaybackStarted = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot129;
                        var1 = var2.handleMediaAttachmentPlaybackEnded;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleMediaAttachmentPlaybackEnded = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot129;
                        var1 = var2.handleVoiceMessagePlaybackFailed;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handlerVoiceMessagePlaybackFailed = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot129;
                        var1 = var2.handleTapPostPreviewEmbed;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapPostPreviewEmbed = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot129;
                        var1 = var2.handleTapDismissMediaPostSharePrompt;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapDismissMediaPostSharePrompt = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot129;
                        var1 = var2.handleTapChannelPromptButton;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapChannelPromptButton = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot129;
                        var1 = var2.handleTapObscuredMediaLearnMore;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapObscuredMediaLearnMore = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot129;
                        var1 = var2.onTapObscuredMediaToggle;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapObscuredMediaToggle = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot129;
                        var1 = var2.handleTapSafetyPolicyNoticeEmbed;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapSafetyPolicyNoticeEmbed = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot129;
                        var1 = var2.handleTapSafetySystemNotificationCta;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapSafetySystemNotificationCta = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot129;
                        var1 = var2.handleTapPollAnswer;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapPollAnswer = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot129;
                        var1 = var2.handleTapPollSubmitVote;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapPollSubmitVote = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot129;
                        var1 = var2.handleTapPollAction;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapPollAction = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot129;
                        var1 = var2.handleLongPressPollImage;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleLongPressPollImage = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot129;
                        var1 = var2.handleTapCtaButton;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapCtaButton = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot129;
                        var1 = var2.handleMessageAccessibilityAction;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleMessageAccessibilityAction = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot129;
                        var1 = var2.handleTapForwardFooter;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapForwardFooter = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot129;
                        var1 = var2.handleTapInlineForward;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapInlineForward = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot129;
                        var1 = var2.handleTapClanTagChiplet;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapClanTagChiplet = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot129;
                        var1 = var2.handleTapContentInventoryEntryEmbed;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapContentInventoryEntryEmbed = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot129;
                        var1 = var2.handleTapCheckpointCard;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapCheckpointCard = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot129;
                        var1 = var2.handleTapSoundmoji;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapSoundmoji = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot129;
                        var1 = var2.handleTapAppMessageEmbed;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapAppMessageEmbed = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot129;
                        var1 = var2.handleTapPreviewSharedClientTheme;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapSharedClientTheme = var2;
                    var1 = function arg0() {
                        var2 = _closure2_slot129;
                        var1 = var2.handleSharedClientThemeViewed;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleSharedClientThemeViewed = var1;
                    return var0;
                };
                var16 = var43.bind(var125)(var16, var39);
                var65 = var125.useMemo;
                var43 = new Array(82);
                var43[0] = var123;
                var43[1] = var122;
                var43[2] = var119;
                var43[3] = var118;
                var43[4] = var117;
                var43[5] = var114;
                var43[6] = var80;
                var43[7] = var120;
                var43[8] = var102;
                var43[9] = var101;
                var43[10] = var113;
                var43[11] = var69;
                var43[12] = var76;
                var43[13] = var68;
                var43[14] = var79;
                var43[15] = var67;
                var43[16] = var36;
                var43[17] = var74;
                var43[18] = var73;
                var43[19] = var72;
                var43[20] = var77;
                var43[21] = var71;
                var43[22] = var59;
                var43[23] = var104;
                var43[24] = var50;
                var43[25] = var40;
                var43[26] = var57;
                var43[27] = var56;
                var43[28] = var53;
                var43[29] = var52;
                var43[30] = var19;
                var43[31] = var62;
                var43[32] = var60;
                var43[33] = var61;
                var43[34] = var58;
                var43[35] = var81;
                var43[36] = var23;
                var43[37] = var78;
                var43[38] = var82;
                var43[39] = var51;
                var43[40] = var49;
                var43[41] = var93;
                var43[42] = var54;
                var43[43] = var55;
                var43[44] = var48;
                var43[45] = var47;
                var43[46] = var42;
                var43[47] = var110;
                var43[48] = var109;
                var43[49] = var108;
                var43[50] = var107;
                var43[51] = var106;
                var43[52] = var95;
                var43[53] = var98;
                var43[54] = var97;
                var43[55] = var96;
                var43[56] = var105;
                var43[57] = var100;
                var43[58] = var99;
                var43[59] = var87;
                var43[60] = var86;
                var43[61] = var85;
                var43[62] = var94;
                var43[63] = var92;
                var43[64] = var91;
                var43[65] = var90;
                var43[66] = var89;
                var43[67] = var88;
                var43[68] = var75;
                var43[69] = var121;
                var43[70] = var112;
                var43[71] = var111;
                var43[72] = var46;
                var43[73] = var116;
                var43[74] = var115;
                var43[75] = var84;
                var43[76] = var83;
                var43[77] = var103;
                var43[78] = var64;
                var43[79] = var45;
                var43[80] = var44;
                var43[81] = var41;
                var39 = function() { // Environment: var0
                    var0 = {};
                    var2 = _closure2_slot61;
                    var0.channelThreadsVersion = var2;
                    var2 = _closure2_slot71;
                    var0.rsvpVersion = var2;
                    var2 = _closure2_slot73;
                    var0.communicationDisabledVersion = var2;
                    var2 = _closure2_slot74;
                    var0.messageAuthorMembers = var2;
                    var2 = _closure2_slot72;
                    var0.failedMessagesVersion = var2;
                    var2 = _closure2_slot64;
                    var0.interactionComponentStatesVersion = var2;
                    var2 = _closure2_slot101;
                    var0.forwardGuildsVersion = var2;
                    var2 = _closure2_slot65;
                    var0.hasLoadedExperiments = var2;
                    var2 = _closure2_slot79;
                    var0.isFollowingForumPost = var2;
                    var2 = _closure2_slot80;
                    var0.showMediaPostSharePrompt = var2;
                    var2 = _closure2_slot92;
                    var0.shouldDisableInteractiveComponents = var2;
                    var2 = _closure2_slot48;
                    var0.isCallActive = var2;
                    var2 = _closure2_slot49;
                    var0.voiceStateChannelId = var2;
                    var2 = _closure2_slot54;
                    var0.participantsLength = var2;
                    var2 = _closure2_slot43;
                    var0.editingMessageId = var2;
                    var2 = _closure2_slot44;
                    var0.replyingMessageId = var2;
                    var2 = _closure2_slot45;
                    var0.oldestUnreadMessageId = var2;
                    var2 = _closure2_slot66;
                    var0.isSpamMessageRequest = var2;
                    var2 = _closure2_slot67;
                    var0.isMessageRequest = var2;
                    var2 = _closure2_slot76;
                    var0.currentUserCommunicationDisabled = var2;
                    var2 = _closure2_slot83;
                    var0.androidKeyboardHeight = var2;
                    var2 = _closure2_slot75;
                    var0.renderCommunicationDisabled = var2;
                    var2 = _closure2_slot102;
                    var0.guildInviteColorsFetched = var2;
                    var2 = _closure2_slot82;
                    var0.lazyCacheStatus = var2;
                    var2 = _closure2_slot109;
                    var0.shouldForceRender = var2;
                    var2 = _closure2_slot69;
                    var0.isMessagesCached = var2;
                    var2 = _closure2_slot103;
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
                    var2 = _closure2_slot97;
                    var0.containerWidth = var2;
                    var2 = _closure2_slot10;
                    var0.guildSystemChannelFlags = var2;
                    var2 = _closure2_slot77;
                    var0.userSettingsLocale = var2;
                    var2 = _closure2_slot58;
                    var0.roleStyle = var2;
                    var2 = _closure2_slot47;
                    var0.canSendMessages = var2;
                    var2 = _closure2_slot81;
                    var0.showPushFeedback = var2;
                    var2 = _closure2_slot86;
                    var0.selectedSummary = var2;
                    var2 = _closure2_slot90;
                    var0.shouldObscureSpoiler = var2;
                    var2 = _closure2_slot96;
                    var0.explicitMediaFalsePositiveInfo = var2;
                    var2 = _closure2_slot100;
                    var0.isStaff = var2;
                    var2 = _closure2_slot91;
                    var0.isAgeVerified = var2;
                    var2 = _closure2_slot19;
                    var0.theme = var2;
                    var2 = _closure2_slot59;
                    var0.saturation = var2;
                    var2 = _closure2_slot60;
                    var0.displayNameStylesEnabled = var2;
                    var2 = _closure2_slot29;
                    var0.activityInstanceIds = var2;
                    var2 = _closure2_slot31;
                    var0.activityParticipants = var2;
                    var2 = _closure2_slot30;
                    var0.activityInstancePresenceDetails = var2;
                    var2 = _closure2_slot32;
                    var0.messagesWithActivitiesLaunching = var2;
                    var2 = _closure2_slot27;
                    var0.invalidApplicationIds = var2;
                    var2 = _closure2_slot28;
                    var0.applicationAssetFetchingIds = var2;
                    var2 = _closure2_slot24;
                    var0.appDirectoryEmbedApplications = var2;
                    var2 = _closure2_slot25;
                    var0.invalidAppDirectoryEmbedApplicationIds = var2;
                    var2 = _closure2_slot26;
                    var0.appDirectoryEmbedApplicationFetchStates = var2;
                    var2 = _closure2_slot40;
                    var0.referralTrialOfferIds = var2;
                    var2 = _closure2_slot21;
                    var0.messageAuthorActivities = var2;
                    var2 = _closure2_slot22;
                    var0.activityInviteMessageIds = var2;
                    var2 = _closure2_slot51;
                    var0.resolvingGiftCodes = var2;
                    var2 = _closure2_slot52;
                    var0.resolvedGiftCodes = var2;
                    var2 = _closure2_slot53;
                    var0.acceptingGiftCodes = var2;
                    var2 = _closure2_slot33;
                    var0.mediaPostPreviewEmbeds = var2;
                    var2 = _closure2_slot34;
                    var0.guildTemplates = var2;
                    var2 = _closure2_slot35;
                    var0.buildOverrides = var2;
                    var2 = _closure2_slot36;
                    var0.experimentEmbeds = var2;
                    var2 = _closure2_slot37;
                    var0.quests = var2;
                    var2 = _closure2_slot38;
                    var0.isFetchingCurrentQuests = var2;
                    var2 = _closure2_slot23;
                    var0.invites = var2;
                    var2 = _closure2_slot56;
                    var0.repliedIds = var2;
                    var2 = _closure2_slot93;
                    var0.channelPolls = var2;
                    var2 = _closure2_slot95;
                    var0.messageReferencePolls = var2;
                    var2 = _closure2_slot98;
                    var0.unloadedContentEntryMessageIds = var2;
                    var2 = _closure2_slot62;
                    var0.interactionStates = var2;
                    var2 = _closure2_slot63;
                    var0.interactionComponentStates = var2;
                    var2 = _closure2_slot41;
                    var0.trialOffer = var2;
                    var2 = _closure2_slot42;
                    var0.isPremiumTier2User = var2;
                    var2 = _closure2_slot50;
                    var0.threadStartingReferenceMessage = var2;
                    var2 = _closure2_slot55;
                    var0.uploads = var2;
                    var1 = _closure2_slot87;
                    var0.currentUserDisplayNameStyles = var1;
                    return var0;
                };
                var43 = var65.bind(var125)(var39, var43);
                var65 = 97;
                var39 = var126[var65];
                var39 = var66.bind(var3)(var39);
                var43 = var39.bind(var3)(var43);
                var _closure2_slot131 = var43;
                var39 = var126[var65];
                var39 = var66.bind(var3)(var39);
                var125 = var39.bind(var3)(var9);
                var _closure2_slot132 = var125;
                var39 = var126[var65];
                var39 = var66.bind(var3)(var39);
                var39 = var39.bind(var3)(var127);
                var _closure2_slot133 = var39;
                var65 = var126[var65];
                var65 = var66.bind(var3)(var65);
                var65 = var65.bind(var3)(var8);
                var _closure2_slot134 = var65;
                var66 = var124;
                if (!var66) {
                    _fun76716_ip = 5338;
                    continue _fun76716
                }
            case 5335:
                var66 = !var40;
            case 5338:
                if (!var66) {
                    _fun76716_ip = 5359;
                    continue _fun76716
                }
            case 5341:
                var126 = var4 == var43;
                var40 = undefined;
                if (var126) {
                    _fun76716_ip = 5356;
                    continue _fun76716
                }
            case 5350:
                var40 = var43.isMessagesCached;
            case 5356:
                var66 = var40;
            case 5359:
                var _closure2_slot135 = var66;
                var40 = _closure1_slot5;
                var129 = var40.useEffect;
                var126 = new Array(7);
                var126[0] = var7;
                var126[1] = var9;
                var126[2] = var37;
                var126[3] = var8;
                var126[4] = var36;
                var126[5] = var125;
                var126[6] = var34;
                var125 = function() { // Environment: var0
                    _fun76894: for (var _fun76894_ip = 0;;) switch (_fun76894_ip) {
                        case 0:
                            var0 = _closure2_slot132;
                            var2 = null;
                            var1 = var2 != var0;
                            if (!var1) {
                                _fun76894_ip = 28;
                                continue _fun76894
                            }
                        case 16:
                            var4 = _closure2_slot132;
                            var0 = _closure2_slot7;
                            var1 = var4 !== var0;
                        case 28:
                            var0 = _closure2_slot132;
                            var0 = var2 == var0;
                            if (!var1) {
                                _fun76894_ip = 87;
                                continue _fun76894
                            }
                        case 39:
                            var2 = _closure2_slot126;
                            var5 = undefined;
                            var2 = var2.bind(var5)();
                            var4 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var2 = 70;
                            var2 = var6[var2];
                            var5 = var4.bind(var5)(var2);
                            var4 = var5.clearChannelDimensions;
                            var2 = _closure2_slot7;
                            var2 = var4.bind(var5)(var2);
                        case 87:
                            if (var0) {
                                _fun76894_ip = 93;
                                continue _fun76894
                            }
                        case 90:
                            var0 = var1;
                        case 93:
                            if (!var0) {
                                _fun76894_ip = 226;
                                continue _fun76894
                            }
                        case 99:
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var4 = 82;
                            var0 = var7[var4];
                            var5 = undefined;
                            var2 = var6.bind(var5)(var0);
                            var1 = var2.startOrCancelChannelLatestMessagesLoad;
                            var0 = {};
                            var8 = _closure2_slot6;
                            var8 = var8.jumpTargetId;
                            var0.jumpTargetId = var8;
                            var8 = _closure2_slot45;
                            var0.oldestUnreadMessageId = var8;
                            var4 = var7[var4];
                            var9 = var6.bind(var5)(var4);
                            var8 = var9.shouldJumpToOriginalPost;
                            var13 = _closure2_slot1;
                            var12 = _closure2_slot7;
                            var11 = _closure2_slot6;
                            var10 = _closure2_slot110;
                            var14 = var9;
                            var4 = var14[var8](var13, var12, var11, var10, var9);
                            var0.shouldJumpToOriginalPost = var4;
                            var4 = _closure2_slot7;
                            var0.channelId = var4;
                            var3 = _closure2_slot116;
                            var3 = var3.current;
                            var0.tracker = var3;
                            var0 = var1.bind(var2)(var0);
                        case 226:
                            var0 = undefined;
                            return var0;
                    }
                };
                var125 = var129.bind(var40)(var125, var126);
                var126 = _closure1_slot0;
                var125 = _closure1_slot2;
                var125 = var125[var128];
                var128 = var126.bind(var3)(var125);
                var126 = var128.useMessagesLifecycle;
                var125 = {};
                var125.messages = var8;
                var125.isMessagesReady = var124;
                var125.oldestUnreadMessageId = var36;
                var125.channelId = var9;
                var125.screenIndex = var17;
                var125.updateRows = var21;
                var125.scrollToMessageId = var38;
                var125 = var126.bind(var128)(var125);
                var126 = var40.useEffect;
                var125 = new Array(3);
                var125[0] = var127;
                var125[1] = var39;
                var125[2] = var14;
                var39 = function() { // Environment: var0
                    _fun76895: for (var _fun76895_ip = 0;;) switch (_fun76895_ip) {
                        case 0:
                            var1 = _closure2_slot133;
                            var1 = !var1;
                            if (!var1) {
                                _fun76895_ip = 17;
                                continue _fun76895
                            }
                        case 13:
                            var1 = _closure2_slot70;
                        case 17:
                            if (!var1) {
                                _fun76895_ip = 40;
                                continue _fun76895
                            }
                        case 20:
                            var2 = _closure2_slot106;
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
                var39 = var126.bind(var40)(var39, var125);
                var125 = var40.useEffect;
                var39 = new Array(8);
                var39[0] = var7;
                var39[1] = var9;
                var39[2] = var8;
                var39[3] = var37;
                var39[4] = var31;
                var39[5] = var65;
                var39[6] = var124;
                var39[7] = var32;
                var32 = function() { // Environment: var0
                    _fun76896: for (var _fun76896_ip = 0;;) switch (_fun76896_ip) {
                        case 0:
                            var3 = _closure1_slot0;
                            var0 = _closure1_slot2;
                            var4 = 82;
                            var1 = var0[var4];
                            var0 = undefined;
                            var9 = var3.bind(var0)(var1);
                            var8 = var9.shouldJumpToOriginalPost;
                            var13 = _closure2_slot1;
                            var12 = _closure2_slot7;
                            var11 = _closure2_slot6;
                            var10 = _closure2_slot110;
                            var14 = var9;
                            var3 = var14[var8](var13, var12, var11, var10, var9);
                            if (!var3) {
                                _fun76896_ip = 163;
                                continue _fun76896
                            }
                        case 60:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var2 = var2[var4];
                            var6 = var3.bind(var0)(var2);
                            var5 = var6.scrollToTop;
                            var4 = _closure2_slot104;
                            var3 = _closure2_slot57;
                            var2 = false;
                            var2 = var5.bind(var6)(var4, var3, var2);
                            var2 = _closure2_slot134;
                            var4 = null;
                            var2 = var4 == var2;
                            var3 = undefined;
                            if (var2) {
                                _fun76896_ip = 125;
                                continue _fun76896
                            }
                        case 115:
                            var2 = _closure2_slot134;
                            var3 = var2.jumpSequenceId;
                        case 125:
                            var2 = _closure2_slot6;
                            var4 = var4 == var2;
                            var2 = undefined;
                            if (var4) {
                                _fun76896_ip = 148;
                                continue _fun76896
                            }
                        case 138:
                            var4 = _closure2_slot6;
                            var2 = var4.jumpSequenceId;
                        case 148:
                            if (!(var3 === var2)) {
                                _fun76896_ip = 163;
                                continue _fun76896
                            }
                        case 152:
                            var2 = _closure2_slot111;
                            var1 = true;
                            var1 = var2.bind(var0)(var1);
                        case 163:
                            return var0;
                    }
                };
                var32 = var125.bind(var40)(var32, var39);
                var39 = var40.useEffect;
                var32 = new Array(174);
                var32[0] = var124;
                var32[1] = var8;
                var32[2] = var123;
                var32[3] = var122;
                var32[4] = var121;
                var32[5] = var120;
                var32[6] = var119;
                var32[7] = var118;
                var32[8] = var117;
                var32[9] = var116;
                var32[10] = var115;
                var32[11] = var114;
                var32[12] = var113;
                var32[13] = var112;
                var32[14] = var111;
                var32[15] = var110;
                var32[16] = var109;
                var32[17] = var108;
                var32[18] = var107;
                var32[19] = var106;
                var32[20] = var105;
                var32[21] = var104;
                var32[22] = var103;
                var32[23] = var102;
                var32[24] = var101;
                var32[25] = var100;
                var32[26] = var99;
                var32[27] = var98;
                var32[28] = var97;
                var32[29] = var96;
                var32[30] = var95;
                var32[31] = var94;
                var32[32] = var93;
                var32[33] = var92;
                var32[34] = var91;
                var32[35] = var90;
                var32[36] = var89;
                var32[37] = var88;
                var32[38] = var87;
                var32[39] = var86;
                var32[40] = var85;
                var32[41] = var84;
                var32[42] = var83;
                var32[43] = var82;
                var32[44] = var81;
                var32[45] = var80;
                var32[46] = var79;
                var32[47] = var78;
                var32[48] = var77;
                var32[49] = var76;
                var32[50] = var75;
                var32[51] = var74;
                var32[52] = var73;
                var32[53] = var72;
                var32[54] = var71;
                var32[55] = var70;
                var32[56] = var11;
                var32[57] = var9;
                var32[58] = var7;
                var32[59] = var21;
                var32[60] = var69;
                var32[61] = var68;
                var32[62] = var67;
                var68 = var4 == var43;
                var67 = undefined;
                if (var68) {
                    _fun76716_ip = 5845;
                    continue _fun76716
                }
            case 5839:
                var67 = var43.channelThreadsVersion;
            case 5845:
                var32[63] = var67;
                var68 = var4 == var43;
                var67 = undefined;
                if (var68) {
                    _fun76716_ip = 5864;
                    continue _fun76716
                }
            case 5858:
                var67 = var43.rsvpVersion;
            case 5864:
                var32[64] = var67;
                var68 = var4 == var43;
                var67 = undefined;
                if (var68) {
                    _fun76716_ip = 5883;
                    continue _fun76716
                }
            case 5877:
                var67 = var43.repliedIds;
            case 5883:
                var32[65] = var67;
                var68 = var4 == var43;
                var67 = undefined;
                if (var68) {
                    _fun76716_ip = 5902;
                    continue _fun76716
                }
            case 5896:
                var67 = var43.hasLoadedExperiments;
            case 5902:
                var32[66] = var67;
                var68 = var4 == var43;
                var67 = undefined;
                if (var68) {
                    _fun76716_ip = 5921;
                    continue _fun76716
                }
            case 5915:
                var67 = var43.communicationDisabledVersion;
            case 5921:
                var32[67] = var67;
                var68 = var4 == var43;
                var67 = undefined;
                if (var68) {
                    _fun76716_ip = 5940;
                    continue _fun76716
                }
            case 5934:
                var67 = var43.messageAuthorMembers;
            case 5940:
                var32[68] = var67;
                var68 = var4 == var43;
                var67 = undefined;
                if (var68) {
                    _fun76716_ip = 5959;
                    continue _fun76716
                }
            case 5953:
                var67 = var43.failedMessagesVersion;
            case 5959:
                var32[69] = var67;
                var68 = var4 == var43;
                var67 = undefined;
                if (var68) {
                    _fun76716_ip = 5978;
                    continue _fun76716
                }
            case 5972:
                var67 = var43.interactionStates;
            case 5978:
                var32[70] = var67;
                var68 = var4 == var43;
                var67 = undefined;
                if (var68) {
                    _fun76716_ip = 5997;
                    continue _fun76716
                }
            case 5991:
                var67 = var43.interactionComponentStates;
            case 5997:
                var32[71] = var67;
                var68 = var4 == var43;
                var67 = undefined;
                if (var68) {
                    _fun76716_ip = 6016;
                    continue _fun76716
                }
            case 6010:
                var67 = var43.interactionComponentStatesVersion;
            case 6016:
                var32[72] = var67;
                var68 = var4 == var43;
                var67 = undefined;
                if (var68) {
                    _fun76716_ip = 6035;
                    continue _fun76716
                }
            case 6029:
                var67 = var43.shouldDisableInteractiveComponents;
            case 6035:
                var32[73] = var67;
                var68 = var4 == var43;
                var67 = undefined;
                if (var68) {
                    _fun76716_ip = 6054;
                    continue _fun76716
                }
            case 6048:
                var67 = var43.channelPolls;
            case 6054:
                var32[74] = var67;
                var68 = var4 == var43;
                var67 = undefined;
                if (var68) {
                    _fun76716_ip = 6073;
                    continue _fun76716
                }
            case 6067:
                var67 = var43.messageReferencePolls;
            case 6073:
                var32[75] = var67;
                var68 = var4 == var43;
                var67 = undefined;
                if (var68) {
                    _fun76716_ip = 6092;
                    continue _fun76716
                }
            case 6086:
                var67 = var43.activityInstanceIds;
            case 6092:
                var32[76] = var67;
                var68 = var4 == var43;
                var67 = undefined;
                if (var68) {
                    _fun76716_ip = 6111;
                    continue _fun76716
                }
            case 6105:
                var67 = var43.activityParticipants;
            case 6111:
                var32[77] = var67;
                var68 = var4 == var43;
                var67 = undefined;
                if (var68) {
                    _fun76716_ip = 6130;
                    continue _fun76716
                }
            case 6124:
                var67 = var43.activityInstancePresenceDetails;
            case 6130:
                var32[78] = var67;
                var68 = var4 == var43;
                var67 = undefined;
                if (var68) {
                    _fun76716_ip = 6149;
                    continue _fun76716
                }
            case 6143:
                var67 = var43.messagesWithActivitiesLaunching;
            case 6149:
                var32[79] = var67;
                var68 = var4 == var43;
                var67 = undefined;
                if (var68) {
                    _fun76716_ip = 6168;
                    continue _fun76716
                }
            case 6162:
                var67 = var43.invalidApplicationIds;
            case 6168:
                var32[80] = var67;
                var68 = var4 == var43;
                var67 = undefined;
                if (var68) {
                    _fun76716_ip = 6187;
                    continue _fun76716
                }
            case 6181:
                var67 = var43.applicationAssetFetchingIds;
            case 6187:
                var32[81] = var67;
                var68 = var4 == var43;
                var67 = undefined;
                if (var68) {
                    _fun76716_ip = 6206;
                    continue _fun76716
                }
            case 6200:
                var67 = var43.appDirectoryEmbedApplications;
            case 6206:
                var32[82] = var67;
                var68 = var4 == var43;
                var67 = undefined;
                if (var68) {
                    _fun76716_ip = 6225;
                    continue _fun76716
                }
            case 6219:
                var67 = var43.invalidAppDirectoryEmbedApplicationIds;
            case 6225:
                var32[83] = var67;
                var68 = var4 == var43;
                var67 = undefined;
                if (var68) {
                    _fun76716_ip = 6244;
                    continue _fun76716
                }
            case 6238:
                var67 = var43.appDirectoryEmbedApplicationFetchStates;
            case 6244:
                var32[84] = var67;
                var68 = var4 == var43;
                var67 = undefined;
                if (var68) {
                    _fun76716_ip = 6263;
                    continue _fun76716
                }
            case 6257:
                var67 = var43.lazyCacheStatus;
            case 6263:
                var32[85] = var67;
                var68 = var4 == var43;
                var67 = undefined;
                if (var68) {
                    _fun76716_ip = 6282;
                    continue _fun76716
                }
            case 6276:
                var67 = var43.isFollowingForumPost;
            case 6282:
                var32[86] = var67;
                var68 = var4 == var43;
                var67 = undefined;
                if (var68) {
                    _fun76716_ip = 6301;
                    continue _fun76716
                }
            case 6295:
                var67 = var43.showMediaPostSharePrompt;
            case 6301:
                var32[87] = var67;
                var68 = var4 == var43;
                var67 = undefined;
                if (var68) {
                    _fun76716_ip = 6320;
                    continue _fun76716
                }
            case 6314:
                var67 = var43.referralTrialOfferIds;
            case 6320:
                var32[88] = var67;
                var68 = var4 == var43;
                var67 = undefined;
                if (var68) {
                    _fun76716_ip = 6339;
                    continue _fun76716
                }
            case 6333:
                var67 = var43.trialOffer;
            case 6339:
                var32[89] = var67;
                var68 = var4 == var43;
                var67 = undefined;
                if (var68) {
                    _fun76716_ip = 6358;
                    continue _fun76716
                }
            case 6352:
                var67 = var43.isPremiumTier2User;
            case 6358:
                var32[90] = var67;
                var68 = var4 == var43;
                var67 = undefined;
                if (var68) {
                    _fun76716_ip = 6377;
                    continue _fun76716
                }
            case 6371:
                var67 = var43.messageAuthorActivities;
            case 6377:
                var32[91] = var67;
                var68 = var4 == var43;
                var67 = undefined;
                if (var68) {
                    _fun76716_ip = 6396;
                    continue _fun76716
                }
            case 6390:
                var67 = var43.activityInviteMessageIds;
            case 6396:
                var32[92] = var67;
                var68 = var4 == var43;
                var67 = undefined;
                if (var68) {
                    _fun76716_ip = 6415;
                    continue _fun76716
                }
            case 6409:
                var67 = var43.resolvingGiftCodes;
            case 6415:
                var32[93] = var67;
                var68 = var4 == var43;
                var67 = undefined;
                if (var68) {
                    _fun76716_ip = 6434;
                    continue _fun76716
                }
            case 6428:
                var67 = var43.resolvedGiftCodes;
            case 6434:
                var32[94] = var67;
                var68 = var4 == var43;
                var67 = undefined;
                if (var68) {
                    _fun76716_ip = 6453;
                    continue _fun76716
                }
            case 6447:
                var67 = var43.acceptingGiftCodes;
            case 6453:
                var32[95] = var67;
                var68 = var4 == var43;
                var67 = undefined;
                if (var68) {
                    _fun76716_ip = 6472;
                    continue _fun76716
                }
            case 6466:
                var67 = var43.mediaPostPreviewEmbeds;
            case 6472:
                var32[96] = var67;
                var68 = var4 == var43;
                var67 = undefined;
                if (var68) {
                    _fun76716_ip = 6491;
                    continue _fun76716
                }
            case 6485:
                var67 = var43.explicitMediaFalsePositiveInfo;
            case 6491:
                var32[97] = var67;
                var68 = var4 == var43;
                var67 = undefined;
                if (var68) {
                    _fun76716_ip = 6510;
                    continue _fun76716
                }
            case 6504:
                var67 = var43.guildTemplates;
            case 6510:
                var32[98] = var67;
                var68 = var4 == var43;
                var67 = undefined;
                if (var68) {
                    _fun76716_ip = 6529;
                    continue _fun76716
                }
            case 6523:
                var67 = var43.buildOverrides;
            case 6529:
                var32[99] = var67;
                var68 = var4 == var43;
                var67 = undefined;
                if (var68) {
                    _fun76716_ip = 6548;
                    continue _fun76716
                }
            case 6542:
                var67 = var43.experimentEmbeds;
            case 6548:
                var32[100] = var67;
                var68 = var4 == var43;
                var67 = undefined;
                if (var68) {
                    _fun76716_ip = 6567;
                    continue _fun76716
                }
            case 6561:
                var67 = var43.quests;
            case 6567:
                var32[101] = var67;
                var68 = var4 == var43;
                var67 = undefined;
                if (var68) {
                    _fun76716_ip = 6586;
                    continue _fun76716
                }
            case 6580:
                var67 = var43.isFetchingCurrentQuests;
            case 6586:
                var32[102] = var67;
                var68 = var4 == var43;
                var67 = undefined;
                if (var68) {
                    _fun76716_ip = 6605;
                    continue _fun76716
                }
            case 6599:
                var67 = var43.showPushFeedback;
            case 6605:
                var32[103] = var67;
                var68 = var4 == var43;
                var67 = undefined;
                if (var68) {
                    _fun76716_ip = 6624;
                    continue _fun76716
                }
            case 6618:
                var67 = var43.forwardGuildsVersion;
            case 6624:
                var32[104] = var67;
                var68 = var4 == var43;
                var67 = undefined;
                if (var68) {
                    _fun76716_ip = 6643;
                    continue _fun76716
                }
            case 6637:
                var67 = var43.renderCommunicationDisabled;
            case 6643:
                var32[105] = var67;
                var68 = var4 == var43;
                var67 = undefined;
                if (var68) {
                    _fun76716_ip = 6662;
                    continue _fun76716
                }
            case 6656:
                var67 = var43.editingMessageId;
            case 6662:
                var32[106] = var67;
                var68 = var4 == var43;
                var67 = undefined;
                if (var68) {
                    _fun76716_ip = 6681;
                    continue _fun76716
                }
            case 6675:
                var67 = var43.replyingMessageId;
            case 6681:
                var32[107] = var67;
                var68 = var4 == var43;
                var67 = undefined;
                if (var68) {
                    _fun76716_ip = 6700;
                    continue _fun76716
                }
            case 6694:
                var67 = var43.oldestUnreadMessageId;
            case 6700:
                var32[108] = var67;
                var68 = var4 == var43;
                var67 = undefined;
                if (var68) {
                    _fun76716_ip = 6719;
                    continue _fun76716
                }
            case 6713:
                var67 = var43.isCallActive;
            case 6719:
                var32[109] = var67;
                var68 = var4 == var43;
                var67 = undefined;
                if (var68) {
                    _fun76716_ip = 6738;
                    continue _fun76716
                }
            case 6732:
                var67 = var43.voiceStateChannelId;
            case 6738:
                var32[110] = var67;
                var68 = var4 == var43;
                var67 = undefined;
                if (var68) {
                    _fun76716_ip = 6757;
                    continue _fun76716
                }
            case 6751:
                var67 = var43.participantsLength;
            case 6757:
                var32[111] = var67;
                var68 = var4 == var43;
                var67 = undefined;
                if (var68) {
                    _fun76716_ip = 6776;
                    continue _fun76716
                }
            case 6770:
                var67 = var43.invites;
            case 6776:
                var32[112] = var67;
                var68 = var4 == var43;
                var67 = undefined;
                if (var68) {
                    _fun76716_ip = 6795;
                    continue _fun76716
                }
            case 6789:
                var67 = var43.isSpamMessageRequest;
            case 6795:
                var32[113] = var67;
                var68 = var4 == var43;
                var67 = undefined;
                if (var68) {
                    _fun76716_ip = 6814;
                    continue _fun76716
                }
            case 6808:
                var67 = var43.isMessageRequest;
            case 6814:
                var32[114] = var67;
                var68 = var4 == var43;
                var67 = undefined;
                if (var68) {
                    _fun76716_ip = 6833;
                    continue _fun76716
                }
            case 6827:
                var67 = var43.currentUserCommunicationDisabled;
            case 6833:
                var32[115] = var67;
                var68 = var4 == var43;
                var67 = undefined;
                if (var68) {
                    _fun76716_ip = 6852;
                    continue _fun76716
                }
            case 6846:
                var67 = var43.androidKeyboardHeight;
            case 6852:
                var32[116] = var67;
                var68 = var4 == var43;
                var67 = undefined;
                if (var68) {
                    _fun76716_ip = 6871;
                    continue _fun76716
                }
            case 6865:
                var67 = var43.inlineAttachmentMedia;
            case 6871:
                var32[117] = var67;
                var68 = var4 == var43;
                var67 = undefined;
                if (var68) {
                    _fun76716_ip = 6890;
                    continue _fun76716
                }
            case 6884:
                var67 = var43.inlineEmbedMedia;
            case 6890:
                var32[118] = var67;
                var68 = var4 == var43;
                var67 = undefined;
                if (var68) {
                    _fun76716_ip = 6909;
                    continue _fun76716
                }
            case 6903:
                var67 = var43.renderEmbeds;
            case 6909:
                var32[119] = var67;
                var68 = var4 == var43;
                var67 = undefined;
                if (var68) {
                    _fun76716_ip = 6928;
                    continue _fun76716
                }
            case 6922:
                var67 = var43.renderReactions;
            case 6928:
                var32[120] = var67;
                var68 = var4 == var43;
                var67 = undefined;
                if (var68) {
                    _fun76716_ip = 6947;
                    continue _fun76716
                }
            case 6941:
                var67 = var43.animateEmoji;
            case 6947:
                var32[121] = var67;
                var68 = var4 == var43;
                var67 = undefined;
                if (var68) {
                    _fun76716_ip = 6966;
                    continue _fun76716
                }
            case 6960:
                var67 = var43.animateStickers;
            case 6966:
                var32[122] = var67;
                var68 = var4 == var43;
                var67 = undefined;
                if (var68) {
                    _fun76716_ip = 6985;
                    continue _fun76716
                }
            case 6979:
                var67 = var43.gifAutoPlay;
            case 6985:
                var32[123] = var67;
                var68 = var4 == var43;
                var67 = undefined;
                if (var68) {
                    _fun76716_ip = 7004;
                    continue _fun76716
                }
            case 6998:
                var67 = var43.containerWidth;
            case 7004:
                var32[124] = var67;
                var68 = var4 == var43;
                var67 = undefined;
                if (var68) {
                    _fun76716_ip = 7023;
                    continue _fun76716
                }
            case 7017:
                var67 = var43.guildSystemChannelFlags;
            case 7023:
                var32[125] = var67;
                var68 = var4 == var43;
                var67 = undefined;
                if (var68) {
                    _fun76716_ip = 7042;
                    continue _fun76716
                }
            case 7036:
                var67 = var43.userSettingsLocale;
            case 7042:
                var32[126] = var67;
                var68 = var4 == var43;
                var67 = undefined;
                if (var68) {
                    _fun76716_ip = 7061;
                    continue _fun76716
                }
            case 7055:
                var67 = var43.roleStyle;
            case 7061:
                var32[127] = var67;
                var68 = var4 == var43;
                var67 = undefined;
                if (var68) {
                    _fun76716_ip = 7080;
                    continue _fun76716
                }
            case 7074:
                var67 = var43.canSendMessages;
            case 7080:
                var32[128] = var67;
                var68 = var4 == var43;
                var67 = undefined;
                if (var68) {
                    _fun76716_ip = 7099;
                    continue _fun76716
                }
            case 7093:
                var67 = var43.selectedSummary;
            case 7099:
                var32[129] = var67;
                var68 = var4 == var43;
                var67 = undefined;
                if (var68) {
                    _fun76716_ip = 7118;
                    continue _fun76716
                }
            case 7112:
                var67 = var43.shouldObscureSpoiler;
            case 7118:
                var32[130] = var67;
                var68 = var4 == var43;
                var67 = undefined;
                if (var68) {
                    _fun76716_ip = 7137;
                    continue _fun76716
                }
            case 7131:
                var67 = var43.isStaff;
            case 7137:
                var32[131] = var67;
                var68 = var4 == var43;
                var67 = undefined;
                if (var68) {
                    _fun76716_ip = 7156;
                    continue _fun76716
                }
            case 7150:
                var67 = var43.isAgeVerified;
            case 7156:
                var32[132] = var67;
                var68 = var4 == var43;
                var67 = undefined;
                if (var68) {
                    _fun76716_ip = 7175;
                    continue _fun76716
                }
            case 7169:
                var67 = var43.theme;
            case 7175:
                var32[133] = var67;
                var68 = var4 == var43;
                var67 = undefined;
                if (var68) {
                    _fun76716_ip = 7194;
                    continue _fun76716
                }
            case 7188:
                var67 = var43.saturation;
            case 7194:
                var32[134] = var67;
                var68 = var4 == var43;
                var67 = undefined;
                if (var68) {
                    _fun76716_ip = 7213;
                    continue _fun76716
                }
            case 7207:
                var67 = var43.threadStartingReferenceMessage;
            case 7213:
                var32[135] = var67;
                var68 = var4 == var43;
                var67 = undefined;
                if (var68) {
                    _fun76716_ip = 7232;
                    continue _fun76716
                }
            case 7226:
                var67 = var43.unloadedContentEntryMessageIds;
            case 7232:
                var32[136] = var67;
                var68 = var4 == var43;
                var67 = undefined;
                if (var68) {
                    _fun76716_ip = 7251;
                    continue _fun76716
                }
            case 7245:
                var67 = var43.guildInviteColorsFetched;
            case 7251:
                var32[137] = var67;
                var32[138] = var66;
                var32[139] = var65;
                var65 = var30.isAtBottom;
                var32[140] = var65;
                var32[141] = var64;
                var65 = var4 == var43;
                var64 = undefined;
                if (var65) {
                    _fun76716_ip = 7292;
                    continue _fun76716
                }
            case 7286:
                var64 = var43.uploads;
            case 7292:
                var32[142] = var64;
                var32[143] = var63;
                var32[144] = var19;
                var32[145] = var62;
                var32[146] = var61;
                var32[147] = var60;
                var32[148] = var59;
                var32[149] = var58;
                var32[150] = var57;
                var32[151] = var56;
                var32[152] = var55;
                var32[153] = var54;
                var32[154] = var36;
                var55 = var4 == var43;
                var54 = undefined;
                if (var55) {
                    _fun76716_ip = 7359;
                    continue _fun76716
                }
            case 7353:
                var54 = var43.shouldForceRender;
            case 7359:
                var32[155] = var54;
                var32[156] = var53;
                var32[157] = var52;
                var32[158] = var23;
                var32[159] = var51;
                var32[160] = var50;
                var32[161] = var49;
                var32[162] = var48;
                var32[163] = var47;
                var32[164] = var46;
                var32[165] = var6;
                var32[166] = var45;
                var46 = var4 == var43;
                var45 = undefined;
                if (var46) {
                    _fun76716_ip = 7422;
                    continue _fun76716
                }
            case 7416:
                var45 = var43.guildEmojis;
            case 7422:
                var32[167] = var45;
                var32[168] = var44;
                var45 = var4 == var43;
                var44 = undefined;
                if (var45) {
                    _fun76716_ip = 7445;
                    continue _fun76716
                }
            case 7439:
                var44 = var43.enableSwipeActions;
            case 7445:
                var32[169] = var44;
                var45 = var4 == var43;
                var44 = undefined;
                if (var45) {
                    _fun76716_ip = 7464;
                    continue _fun76716
                }
            case 7458:
                var44 = var43.displayNameStylesEnabled;
            case 7464:
                var32[170] = var44;
                var32[171] = var42;
                var44 = var4 == var43;
                var42 = undefined;
                if (var44) {
                    _fun76716_ip = 7502;
                    continue _fun76716
                }
            case 7481:
                var43 = var43.currentUserDisplayNameStyles;
                var44 = var4 == var43;
                var42 = undefined;
                if (var44) {
                    _fun76716_ip = 7502;
                    continue _fun76716
                }
            case 7496:
                var42 = var43.fontId;
            case 7502:
                var32[172] = var42;
                var42 = var4 == var41;
                var4 = undefined;
                if (var42) {
                    _fun76716_ip = 7521;
                    continue _fun76716
                }
            case 7515:
                var4 = var41.fontId;
            case 7521:
                var32[173] = var4;
                var4 = function() { // Environment: var0
                    _fun76897: for (var _fun76897_ip = 0;;) switch (_fun76897_ip) {
                        case 0:
                            var1 = _closure2_slot11;
                            var7 = null;
                            if (!(var7 != var1)) {
                                _fun76897_ip = 4274;
                                continue _fun76897
                            }
                        case 18:
                            var1 = _closure2_slot131;
                            var1 = var7 == var1;
                            var3 = undefined;
                            var4 = undefined;
                            if (var1) {
                                _fun76897_ip = 43;
                                continue _fun76897
                            }
                        case 33:
                            var1 = _closure2_slot131;
                            var4 = var1.inlineAttachmentMedia;
                        case 43:
                            var1 = _closure2_slot12;
                            var13 = var4 !== var1;
                            if (var13) {
                                _fun76897_ip = 85;
                                continue _fun76897
                            }
                        case 54:
                            var1 = _closure2_slot131;
                            var1 = var7 == var1;
                            var4 = undefined;
                            if (var1) {
                                _fun76897_ip = 77;
                                continue _fun76897
                            }
                        case 67:
                            var1 = _closure2_slot131;
                            var4 = var1.inlineEmbedMedia;
                        case 77:
                            var1 = _closure2_slot13;
                            var13 = var4 !== var1;
                        case 85:
                            if (var13) {
                                _fun76897_ip = 119;
                                continue _fun76897
                            }
                        case 88:
                            var1 = _closure2_slot131;
                            var1 = var7 == var1;
                            var4 = undefined;
                            if (var1) {
                                _fun76897_ip = 111;
                                continue _fun76897
                            }
                        case 101:
                            var1 = _closure2_slot131;
                            var4 = var1.renderEmbeds;
                        case 111:
                            var1 = _closure2_slot14;
                            var13 = var4 !== var1;
                        case 119:
                            if (var13) {
                                _fun76897_ip = 153;
                                continue _fun76897
                            }
                        case 122:
                            var1 = _closure2_slot131;
                            var1 = var7 == var1;
                            var4 = undefined;
                            if (var1) {
                                _fun76897_ip = 145;
                                continue _fun76897
                            }
                        case 135:
                            var1 = _closure2_slot131;
                            var4 = var1.renderReactions;
                        case 145:
                            var1 = _closure2_slot15;
                            var13 = var4 !== var1;
                        case 153:
                            if (var13) {
                                _fun76897_ip = 187;
                                continue _fun76897
                            }
                        case 156:
                            var1 = _closure2_slot131;
                            var1 = var7 == var1;
                            var4 = undefined;
                            if (var1) {
                                _fun76897_ip = 179;
                                continue _fun76897
                            }
                        case 169:
                            var1 = _closure2_slot131;
                            var4 = var1.animateEmoji;
                        case 179:
                            var1 = _closure2_slot16;
                            var13 = var4 !== var1;
                        case 187:
                            if (var13) {
                                _fun76897_ip = 221;
                                continue _fun76897
                            }
                        case 190:
                            var1 = _closure2_slot131;
                            var1 = var7 == var1;
                            var4 = undefined;
                            if (var1) {
                                _fun76897_ip = 213;
                                continue _fun76897
                            }
                        case 203:
                            var1 = _closure2_slot131;
                            var4 = var1.animateStickers;
                        case 213:
                            var1 = _closure2_slot17;
                            var13 = var4 !== var1;
                        case 221:
                            if (var13) {
                                _fun76897_ip = 255;
                                continue _fun76897
                            }
                        case 224:
                            var1 = _closure2_slot131;
                            var1 = var7 == var1;
                            var4 = undefined;
                            if (var1) {
                                _fun76897_ip = 247;
                                continue _fun76897
                            }
                        case 237:
                            var1 = _closure2_slot131;
                            var4 = var1.gifAutoPlay;
                        case 247:
                            var1 = _closure2_slot18;
                            var13 = var4 !== var1;
                        case 255:
                            if (var13) {
                                _fun76897_ip = 289;
                                continue _fun76897
                            }
                        case 258:
                            var1 = _closure2_slot131;
                            var1 = var7 == var1;
                            var4 = undefined;
                            if (var1) {
                                _fun76897_ip = 281;
                                continue _fun76897
                            }
                        case 271:
                            var1 = _closure2_slot131;
                            var4 = var1.containerWidth;
                        case 281:
                            var1 = _closure2_slot97;
                            var13 = var4 !== var1;
                        case 289:
                            if (var13) {
                                _fun76897_ip = 323;
                                continue _fun76897
                            }
                        case 292:
                            var1 = _closure2_slot131;
                            var1 = var7 == var1;
                            var4 = undefined;
                            if (var1) {
                                _fun76897_ip = 315;
                                continue _fun76897
                            }
                        case 305:
                            var1 = _closure2_slot131;
                            var4 = var1.guildSystemChannelFlags;
                        case 315:
                            var1 = _closure2_slot10;
                            var13 = var4 !== var1;
                        case 323:
                            if (var13) {
                                _fun76897_ip = 357;
                                continue _fun76897
                            }
                        case 326:
                            var1 = _closure2_slot131;
                            var1 = var7 == var1;
                            var4 = undefined;
                            if (var1) {
                                _fun76897_ip = 349;
                                continue _fun76897
                            }
                        case 339:
                            var1 = _closure2_slot131;
                            var4 = var1.userSettingsLocale;
                        case 349:
                            var1 = _closure2_slot77;
                            var13 = var4 !== var1;
                        case 357:
                            if (var13) {
                                _fun76897_ip = 391;
                                continue _fun76897
                            }
                        case 360:
                            var1 = _closure2_slot131;
                            var1 = var7 == var1;
                            var4 = undefined;
                            if (var1) {
                                _fun76897_ip = 383;
                                continue _fun76897
                            }
                        case 373:
                            var1 = _closure2_slot131;
                            var4 = var1.roleStyle;
                        case 383:
                            var1 = _closure2_slot58;
                            var13 = var4 !== var1;
                        case 391:
                            if (var13) {
                                _fun76897_ip = 425;
                                continue _fun76897
                            }
                        case 394:
                            var1 = _closure2_slot131;
                            var1 = var7 == var1;
                            var4 = undefined;
                            if (var1) {
                                _fun76897_ip = 417;
                                continue _fun76897
                            }
                        case 407:
                            var1 = _closure2_slot131;
                            var4 = var1.canSendMessages;
                        case 417:
                            var1 = _closure2_slot47;
                            var13 = var4 !== var1;
                        case 425:
                            if (var13) {
                                _fun76897_ip = 459;
                                continue _fun76897
                            }
                        case 428:
                            var1 = _closure2_slot131;
                            var1 = var7 == var1;
                            var4 = undefined;
                            if (var1) {
                                _fun76897_ip = 451;
                                continue _fun76897
                            }
                        case 441:
                            var1 = _closure2_slot131;
                            var4 = var1.showPushFeedback;
                        case 451:
                            var1 = _closure2_slot81;
                            var13 = var4 !== var1;
                        case 459:
                            if (var13) {
                                _fun76897_ip = 493;
                                continue _fun76897
                            }
                        case 462:
                            var1 = _closure2_slot131;
                            var1 = var7 == var1;
                            var4 = undefined;
                            if (var1) {
                                _fun76897_ip = 485;
                                continue _fun76897
                            }
                        case 475:
                            var1 = _closure2_slot131;
                            var4 = var1.selectedSummary;
                        case 485:
                            var1 = _closure2_slot86;
                            var13 = var4 !== var1;
                        case 493:
                            if (var13) {
                                _fun76897_ip = 527;
                                continue _fun76897
                            }
                        case 496:
                            var1 = _closure2_slot131;
                            var1 = var7 == var1;
                            var4 = undefined;
                            if (var1) {
                                _fun76897_ip = 519;
                                continue _fun76897
                            }
                        case 509:
                            var1 = _closure2_slot131;
                            var4 = var1.shouldObscureSpoiler;
                        case 519:
                            var1 = _closure2_slot90;
                            var13 = var4 !== var1;
                        case 527:
                            if (var13) {
                                _fun76897_ip = 561;
                                continue _fun76897
                            }
                        case 530:
                            var1 = _closure2_slot131;
                            var1 = var7 == var1;
                            var4 = undefined;
                            if (var1) {
                                _fun76897_ip = 553;
                                continue _fun76897
                            }
                        case 543:
                            var1 = _closure2_slot131;
                            var4 = var1.explicitMediaFalsePositiveInfo;
                        case 553:
                            var1 = _closure2_slot96;
                            var13 = var4 !== var1;
                        case 561:
                            if (var13) {
                                _fun76897_ip = 595;
                                continue _fun76897
                            }
                        case 564:
                            var1 = _closure2_slot131;
                            var1 = var7 == var1;
                            var4 = undefined;
                            if (var1) {
                                _fun76897_ip = 587;
                                continue _fun76897
                            }
                        case 577:
                            var1 = _closure2_slot131;
                            var4 = var1.isStaff;
                        case 587:
                            var1 = _closure2_slot100;
                            var13 = var4 !== var1;
                        case 595:
                            if (var13) {
                                _fun76897_ip = 629;
                                continue _fun76897
                            }
                        case 598:
                            var1 = _closure2_slot131;
                            var1 = var7 == var1;
                            var4 = undefined;
                            if (var1) {
                                _fun76897_ip = 621;
                                continue _fun76897
                            }
                        case 611:
                            var1 = _closure2_slot131;
                            var4 = var1.isAgeVerified;
                        case 621:
                            var1 = _closure2_slot91;
                            var13 = var4 !== var1;
                        case 629:
                            if (var13) {
                                _fun76897_ip = 663;
                                continue _fun76897
                            }
                        case 632:
                            var1 = _closure2_slot131;
                            var1 = var7 == var1;
                            var4 = undefined;
                            if (var1) {
                                _fun76897_ip = 655;
                                continue _fun76897
                            }
                        case 645:
                            var1 = _closure2_slot131;
                            var4 = var1.theme;
                        case 655:
                            var1 = _closure2_slot19;
                            var13 = var4 !== var1;
                        case 663:
                            if (var13) {
                                _fun76897_ip = 697;
                                continue _fun76897
                            }
                        case 666:
                            var1 = _closure2_slot131;
                            var1 = var7 == var1;
                            var4 = undefined;
                            if (var1) {
                                _fun76897_ip = 689;
                                continue _fun76897
                            }
                        case 679:
                            var1 = _closure2_slot131;
                            var4 = var1.saturation;
                        case 689:
                            var1 = _closure2_slot59;
                            var13 = var4 !== var1;
                        case 697:
                            if (var13) {
                                _fun76897_ip = 731;
                                continue _fun76897
                            }
                        case 700:
                            var1 = _closure2_slot131;
                            var1 = var7 == var1;
                            var4 = undefined;
                            if (var1) {
                                _fun76897_ip = 723;
                                continue _fun76897
                            }
                        case 713:
                            var1 = _closure2_slot131;
                            var4 = var1.displayNameStylesEnabled;
                        case 723:
                            var1 = _closure2_slot60;
                            var13 = var4 !== var1;
                        case 731:
                            if (var13) {
                                _fun76897_ip = 775;
                                continue _fun76897
                            }
                        case 734:
                            var1 = _closure2_slot131;
                            var1 = var7 == var1;
                            var4 = undefined;
                            if (var1) {
                                _fun76897_ip = 757;
                                continue _fun76897
                            }
                        case 747:
                            var1 = _closure2_slot131;
                            var4 = var1.shouldForceRender;
                        case 757:
                            var1 = _closure2_slot109;
                            var1 = var4 !== var1;
                            if (!var1) {
                                _fun76897_ip = 772;
                                continue _fun76897
                            }
                        case 768:
                            var1 = _closure2_slot109;
                        case 772:
                            var13 = var1;
                        case 775:
                            var5 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var4 = 67;
                            var4 = var6[var4];
                            var8 = var5.bind(var3)(var4);
                            var6 = {};
                            var4 = _closure2_slot6;
                            var6.messages = var4;
                            var4 = _closure2_slot83;
                            var6.androidKeyboardHeight = var4;
                            var4 = _closure2_slot44;
                            var6.replyingMessageId = var4;
                            var5 = {};
                            var4 = _closure2_slot105;
                            var4 = var4.isAtBottom;
                            var5.isAtBottom = var4;
                            var9 = _closure2_slot113;
                            var4 = var9.getPreviousMessages;
                            var4 = var4.bind(var9)();
                            var4 = var7 != var4;
                            var5.hasPreviousMessages = var4;
                            var4 = {};
                            var9 = _closure2_slot134;
                            if (!(var7 == var9)) {
                                _fun76897_ip = 883;
                                continue _fun76897
                            }
                        case 877:
                            var9 = _closure2_slot6;
                            _fun76897_ip = 887;
                            continue _fun76897;
                        case 883:
                            var9 = _closure2_slot134;
                        case 887:
                            var4.messages = var9;
                            var9 = _closure2_slot131;
                            var10 = var7 == var9;
                            var9 = undefined;
                            if (var10) {
                                _fun76897_ip = 915;
                                continue _fun76897
                            }
                        case 905:
                            var10 = _closure2_slot131;
                            var9 = var10.androidKeyboardHeight;
                        case 915:
                            if (!(var7 == var9)) {
                                _fun76897_ip = 923;
                                continue _fun76897
                            }
                        case 919:
                            var9 = _closure2_slot83;
                        case 923:
                            var4.androidKeyboardHeight = var9;
                            var4 = var8.bind(var3)(var6, var5, var4);
                            var11 = var4.scrollToMessageId;
                            var10 = var4.jumpTargetId;
                            var9 = var4.jumpType;
                            var5 = var4.minimizeScrolling;
                            var8 = var4.focusTargetId;
                            var6 = var4.shouldInitialScroll;
                            var4 = _closure2_slot131;
                            var4 = var7 == var4;
                            var12 = undefined;
                            if (var4) {
                                _fun76897_ip = 994;
                                continue _fun76897
                            }
                        case 984:
                            var4 = _closure2_slot131;
                            var12 = var4.resolvingGiftCodes;
                        case 994:
                            var4 = _closure2_slot51;
                            var35 = var12 !== var4;
                            if (var35) {
                                _fun76897_ip = 1036;
                                continue _fun76897
                            }
                        case 1005:
                            var4 = _closure2_slot131;
                            var4 = var7 == var4;
                            var12 = undefined;
                            if (var4) {
                                _fun76897_ip = 1028;
                                continue _fun76897
                            }
                        case 1018:
                            var4 = _closure2_slot131;
                            var12 = var4.resolvedGiftCodes;
                        case 1028:
                            var4 = _closure2_slot52;
                            var35 = var12 !== var4;
                        case 1036:
                            if (var35) {
                                _fun76897_ip = 1070;
                                continue _fun76897
                            }
                        case 1039:
                            var4 = _closure2_slot131;
                            var4 = var7 == var4;
                            var12 = undefined;
                            if (var4) {
                                _fun76897_ip = 1062;
                                continue _fun76897
                            }
                        case 1052:
                            var4 = _closure2_slot131;
                            var12 = var4.acceptingGiftCodes;
                        case 1062:
                            var4 = _closure2_slot53;
                            var35 = var12 !== var4;
                        case 1070:
                            var _closure3_slot0 = var35;
                            var4 = _closure2_slot131;
                            var4 = var7 == var4;
                            var34 = undefined;
                            if (var4) {
                                _fun76897_ip = 1097;
                                continue _fun76897
                            }
                        case 1087:
                            var4 = _closure2_slot131;
                            var34 = var4.uploads;
                        case 1097:
                            var33 = _closure2_slot55;
                            var12 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var14 = 98;
                            var4 = var4[var14];
                            var15 = var12.bind(var3)(var4);
                            var4 = _closure2_slot131;
                            var4 = var7 == var4;
                            var12 = undefined;
                            if (var4) {
                                _fun76897_ip = 1144;
                                continue _fun76897
                            }
                        case 1134:
                            var4 = _closure2_slot131;
                            var12 = var4.interactionStates;
                        case 1144:
                            var4 = _closure2_slot62;
                            var4 = var15.bind(var3)(var12, var4);
                            var25 = !var4;
                            var _closure3_slot1 = var25;
                            var4 = _closure2_slot131;
                            var4 = var7 == var4;
                            var12 = undefined;
                            if (var4) {
                                _fun76897_ip = 1184;
                                continue _fun76897
                            }
                        case 1174:
                            var4 = _closure2_slot131;
                            var12 = var4.channelPolls;
                        case 1184:
                            var4 = _closure2_slot93;
                            var22 = var12 !== var4;
                            var _closure3_slot2 = var22;
                            var4 = _closure2_slot131;
                            var4 = var7 == var4;
                            var12 = undefined;
                            if (var4) {
                                _fun76897_ip = 1219;
                                continue _fun76897
                            }
                        case 1209:
                            var4 = _closure2_slot131;
                            var12 = var4.messageReferencePolls;
                        case 1219:
                            var4 = _closure2_slot95;
                            var21 = var12 !== var4;
                            var _closure3_slot3 = var21;
                            var4 = _closure2_slot131;
                            var4 = var7 == var4;
                            var12 = undefined;
                            if (var4) {
                                _fun76897_ip = 1254;
                                continue _fun76897
                            }
                        case 1244:
                            var4 = _closure2_slot131;
                            var12 = var4.interactionComponentStatesVersion;
                        case 1254:
                            var4 = _closure2_slot64;
                            var24 = var12 !== var4;
                            var _closure3_slot4 = var24;
                            var4 = _closure2_slot131;
                            var4 = var7 == var4;
                            var12 = undefined;
                            if (var4) {
                                _fun76897_ip = 1289;
                                continue _fun76897
                            }
                        case 1279:
                            var4 = _closure2_slot131;
                            var12 = var4.shouldDisableInteractiveComponents;
                        case 1289:
                            var4 = _closure2_slot92;
                            var4 = var12 !== var4;
                            var _closure3_slot5 = var4;
                            var4 = _closure2_slot131;
                            var4 = var7 == var4;
                            var12 = undefined;
                            if (var4) {
                                _fun76897_ip = 1324;
                                continue _fun76897
                            }
                        case 1314:
                            var4 = _closure2_slot131;
                            var12 = var4.communicationDisabledVersion;
                        case 1324:
                            var4 = _closure2_slot73;
                            var31 = var12 !== var4;
                            var _closure3_slot6 = var31;
                            var4 = _closure2_slot131;
                            var4 = var7 == var4;
                            var12 = undefined;
                            if (var4) {
                                _fun76897_ip = 1359;
                                continue _fun76897
                            }
                        case 1349:
                            var4 = _closure2_slot131;
                            var12 = var4.messageAuthorMembers;
                        case 1359:
                            var4 = _closure2_slot74;
                            var30 = var12 !== var4;
                            var _closure3_slot7 = var30;
                            var4 = _closure2_slot131;
                            var4 = var7 == var4;
                            var12 = undefined;
                            if (var4) {
                                _fun76897_ip = 1394;
                                continue _fun76897
                            }
                        case 1384:
                            var4 = _closure2_slot131;
                            var12 = var4.failedMessagesVersion;
                        case 1394:
                            var4 = _closure2_slot72;
                            var29 = var12 !== var4;
                            var _closure3_slot8 = var29;
                            var4 = _closure2_slot131;
                            var4 = var7 == var4;
                            var12 = undefined;
                            if (var4) {
                                _fun76897_ip = 1429;
                                continue _fun76897
                            }
                        case 1419:
                            var4 = _closure2_slot131;
                            var12 = var4.renderCommunicationDisabled;
                        case 1429:
                            var4 = _closure2_slot75;
                            var26 = var12 !== var4;
                            var _closure3_slot9 = var26;
                            var4 = _closure2_slot131;
                            var4 = var7 == var4;
                            var28 = undefined;
                            if (var4) {
                                _fun76897_ip = 1464;
                                continue _fun76897
                            }
                        case 1454:
                            var4 = _closure2_slot131;
                            var28 = var4.forwardGuildsVersion;
                        case 1464:
                            var27 = _closure2_slot101;
                            var12 = _closure2_slot1;
                            var4 = var12.isForumPost;
                            var23 = var4.bind(var12)();
                            if (!var23) {
                                _fun76897_ip = 1516;
                                continue _fun76897
                            }
                        case 1485:
                            var4 = _closure2_slot131;
                            var4 = var7 == var4;
                            var12 = undefined;
                            if (var4) {
                                _fun76897_ip = 1508;
                                continue _fun76897
                            }
                        case 1498:
                            var4 = _closure2_slot131;
                            var12 = var4.isFollowingForumPost;
                        case 1508:
                            var4 = _closure2_slot79;
                            var23 = var12 !== var4;
                        case 1516:
                            var _closure3_slot10 = var23;
                            var4 = _closure2_slot131;
                            var4 = var7 == var4;
                            var12 = undefined;
                            if (var4) {
                                _fun76897_ip = 1543;
                                continue _fun76897
                            }
                        case 1533:
                            var4 = _closure2_slot131;
                            var12 = var4.showMediaPostSharePrompt;
                        case 1543:
                            var4 = _closure2_slot80;
                            var20 = var12 !== var4;
                            var _closure3_slot11 = var20;
                            var4 = _closure2_slot131;
                            var4 = var7 == var4;
                            var12 = undefined;
                            if (var4) {
                                _fun76897_ip = 1578;
                                continue _fun76897
                            }
                        case 1568:
                            var4 = _closure2_slot131;
                            var12 = var4.unloadedContentEntryMessageIds;
                        case 1578:
                            var4 = _closure2_slot98;
                            var19 = var12 !== var4;
                            var _closure3_slot12 = var19;
                            var4 = _closure2_slot131;
                            var4 = var7 == var4;
                            var12 = undefined;
                            if (var4) {
                                _fun76897_ip = 1613;
                                continue _fun76897
                            }
                        case 1603:
                            var4 = _closure2_slot131;
                            var12 = var4.invalidApplicationIds;
                        case 1613:
                            var4 = _closure2_slot27;
                            var4 = var12 !== var4;
                            var _closure3_slot13 = var4;
                            var12 = _closure2_slot131;
                            var12 = var7 == var12;
                            var15 = undefined;
                            if (var12) {
                                _fun76897_ip = 1648;
                                continue _fun76897
                            }
                        case 1638:
                            var12 = _closure2_slot131;
                            var15 = var12.activityInstanceIds;
                        case 1648:
                            var12 = _closure2_slot29;
                            var32 = var15 !== var12;
                            if (var32) {
                                _fun76897_ip = 1690;
                                continue _fun76897
                            }
                        case 1659:
                            var12 = _closure2_slot131;
                            var12 = var7 == var12;
                            var15 = undefined;
                            if (var12) {
                                _fun76897_ip = 1682;
                                continue _fun76897
                            }
                        case 1672:
                            var12 = _closure2_slot131;
                            var15 = var12.activityParticipants;
                        case 1682:
                            var12 = _closure2_slot31;
                            var32 = var15 !== var12;
                        case 1690:
                            if (var32) {
                                _fun76897_ip = 1724;
                                continue _fun76897
                            }
                        case 1693:
                            var12 = _closure2_slot131;
                            var12 = var7 == var12;
                            var15 = undefined;
                            if (var12) {
                                _fun76897_ip = 1716;
                                continue _fun76897
                            }
                        case 1706:
                            var12 = _closure2_slot131;
                            var15 = var12.applicationAssetFetchingIds;
                        case 1716:
                            var12 = _closure2_slot28;
                            var32 = var15 !== var12;
                        case 1724:
                            if (var32) {
                                _fun76897_ip = 1758;
                                continue _fun76897
                            }
                        case 1727:
                            var12 = _closure2_slot131;
                            var12 = var7 == var12;
                            var15 = undefined;
                            if (var12) {
                                _fun76897_ip = 1750;
                                continue _fun76897
                            }
                        case 1740:
                            var12 = _closure2_slot131;
                            var15 = var12.activityInstancePresenceDetails;
                        case 1750:
                            var12 = _closure2_slot30;
                            var32 = var15 !== var12;
                        case 1758:
                            if (var32) {
                                _fun76897_ip = 1792;
                                continue _fun76897
                            }
                        case 1761:
                            var12 = _closure2_slot131;
                            var12 = var7 == var12;
                            var15 = undefined;
                            if (var12) {
                                _fun76897_ip = 1784;
                                continue _fun76897
                            }
                        case 1774:
                            var12 = _closure2_slot131;
                            var15 = var12.messagesWithActivitiesLaunching;
                        case 1784:
                            var12 = _closure2_slot32;
                            var32 = var15 !== var12;
                        case 1792:
                            if (var32) {
                                _fun76897_ip = 1798;
                                continue _fun76897
                            }
                        case 1795:
                            var32 = var4;
                        case 1798:
                            var _closure3_slot14 = var32;
                            var12 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var4 = var4[var14];
                            var16 = var12.bind(var3)(var4);
                            var15 = var16.areArraysShallowEqual;
                            var4 = _closure2_slot131;
                            var4 = var7 == var4;
                            var12 = undefined;
                            if (var4) {
                                _fun76897_ip = 1848;
                                continue _fun76897
                            }
                        case 1838:
                            var4 = _closure2_slot131;
                            var12 = var4.activityInviteMessageIds;
                        case 1848:
                            if (!(var7 == var12)) {
                                _fun76897_ip = 1856;
                                continue _fun76897
                            }
                        case 1852:
                            var12 = new Array(0);
                        case 1856:
                            var4 = _closure2_slot22;
                            if (!(var7 == var4)) {
                                _fun76897_ip = 1870;
                                continue _fun76897
                            }
                        case 1864:
                            var4 = new Array(0);
                            _fun76897_ip = 1874;
                            continue _fun76897;
                        case 1870:
                            var4 = _closure2_slot22;
                        case 1874:
                            var4 = var15.bind(var16)(var12, var4);
                            var18 = !var4;
                            var _closure3_slot15 = var18;
                            var12 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var4 = var4[var14];
                            var15 = var12.bind(var3)(var4);
                            var14 = var15.areArraysShallowEqual;
                            var4 = _closure2_slot131;
                            var4 = var7 == var4;
                            var12 = undefined;
                            if (var4) {
                                _fun76897_ip = 1933;
                                continue _fun76897
                            }
                        case 1923:
                            var4 = _closure2_slot131;
                            var12 = var4.referralTrialOfferIds;
                        case 1933:
                            if (!(var7 == var12)) {
                                _fun76897_ip = 1941;
                                continue _fun76897
                            }
                        case 1937:
                            var12 = new Array(0);
                        case 1941:
                            var4 = _closure2_slot40;
                            if (!(var7 == var4)) {
                                _fun76897_ip = 1955;
                                continue _fun76897
                            }
                        case 1949:
                            var4 = new Array(0);
                            _fun76897_ip = 1959;
                            continue _fun76897;
                        case 1955:
                            var4 = _closure2_slot40;
                        case 1959:
                            var4 = var14.bind(var15)(var12, var4);
                            var17 = !var4;
                            if (var17) {
                                _fun76897_ip = 2002;
                                continue _fun76897
                            }
                        case 1971:
                            var4 = _closure2_slot131;
                            var4 = var7 == var4;
                            var12 = undefined;
                            if (var4) {
                                _fun76897_ip = 1994;
                                continue _fun76897
                            }
                        case 1984:
                            var4 = _closure2_slot131;
                            var12 = var4.trialOffer;
                        case 1994:
                            var4 = _closure2_slot41;
                            var17 = var12 !== var4;
                        case 2002:
                            if (var17) {
                                _fun76897_ip = 2036;
                                continue _fun76897
                            }
                        case 2005:
                            var4 = _closure2_slot131;
                            var4 = var7 == var4;
                            var12 = undefined;
                            if (var4) {
                                _fun76897_ip = 2028;
                                continue _fun76897
                            }
                        case 2018:
                            var4 = _closure2_slot131;
                            var12 = var4.isPremiumTier2User;
                        case 2028:
                            var4 = _closure2_slot42;
                            var17 = var12 !== var4;
                        case 2036:
                            var _closure3_slot16 = var17;
                            var4 = _closure2_slot131;
                            var4 = var7 == var4;
                            var12 = undefined;
                            if (var4) {
                                _fun76897_ip = 2063;
                                continue _fun76897
                            }
                        case 2053:
                            var4 = _closure2_slot131;
                            var12 = var4.guildInviteColorsFetched;
                        case 2063:
                            var4 = _closure2_slot102;
                            var16 = var12 !== var4;
                            var _closure3_slot17 = var16;
                            var4 = _closure2_slot131;
                            var4 = var7 == var4;
                            var12 = undefined;
                            if (var4) {
                                _fun76897_ip = 2098;
                                continue _fun76897
                            }
                        case 2088:
                            var4 = _closure2_slot131;
                            var12 = var4.guildEmojis;
                        case 2098:
                            var4 = _closure2_slot103;
                            var15 = var12 !== var4;
                            var _closure3_slot18 = var15;
                            var4 = _closure2_slot82;
                            var14 = 'initializing';
                            var4 = var14 !== var4;
                            var12 = _closure2_slot131;
                            var36 = var7 == var12;
                            var12 = undefined;
                            if (var36) {
                                _fun76897_ip = 2147;
                                continue _fun76897
                            }
                        case 2137:
                            var36 = _closure2_slot131;
                            var12 = var36.lazyCacheStatus;
                        case 2147:
                            var14 = var14 !== var12;
                            var12 = _closure2_slot131;
                            var12 = var7 == var12;
                            var36 = undefined;
                            if (var12) {
                                _fun76897_ip = 2189;
                                continue _fun76897
                            }
                        case 2164:
                            var12 = _closure2_slot131;
                            var12 = var12.currentUserDisplayNameStyles;
                            var37 = var7 == var12;
                            var36 = undefined;
                            if (var37) {
                                _fun76897_ip = 2189;
                                continue _fun76897
                            }
                        case 2183:
                            var36 = var12.fontId;
                        case 2189:
                            var12 = _closure2_slot87;
                            var37 = var7 == var12;
                            var12 = undefined;
                            if (var37) {
                                _fun76897_ip = 2212;
                                continue _fun76897
                            }
                        case 2202:
                            var37 = _closure2_slot87;
                            var12 = var37.fontId;
                        case 2212:
                            var12 = var36 !== var12;
                            var _closure3_slot19 = var12;
                            if (var13) {
                                _fun76897_ip = 3464;
                                continue _fun76897
                            }
                        case 2226:
                            if (var35) {
                                _fun76897_ip = 3464;
                                continue _fun76897
                            }
                        case 2232:
                            if (!(var34 === var33)) {
                                _fun76897_ip = 3464;
                                continue _fun76897
                            }
                        case 2239:
                            if (var32) {
                                _fun76897_ip = 3464;
                                continue _fun76897
                            }
                        case 2245:
                            var33 = _closure2_slot134;
                            var32 = _closure2_slot6;
                            if (!(var33 === var32)) {
                                _fun76897_ip = 3464;
                                continue _fun76897
                            }
                        case 2260:
                            var32 = _closure2_slot131;
                            var32 = var7 == var32;
                            var33 = undefined;
                            if (var32) {
                                _fun76897_ip = 2283;
                                continue _fun76897
                            }
                        case 2273:
                            var32 = _closure2_slot131;
                            var33 = var32.editingMessageId;
                        case 2283:
                            var32 = _closure2_slot43;
                            if (!(var33 === var32)) {
                                _fun76897_ip = 3464;
                                continue _fun76897
                            }
                        case 2294:
                            var32 = _closure2_slot131;
                            var32 = var7 == var32;
                            var33 = undefined;
                            if (var32) {
                                _fun76897_ip = 2317;
                                continue _fun76897
                            }
                        case 2307:
                            var32 = _closure2_slot131;
                            var33 = var32.replyingMessageId;
                        case 2317:
                            var32 = _closure2_slot44;
                            if (!(var33 === var32)) {
                                _fun76897_ip = 3464;
                                continue _fun76897
                            }
                        case 2328:
                            var32 = _closure2_slot131;
                            var32 = var7 == var32;
                            var33 = undefined;
                            if (var32) {
                                _fun76897_ip = 2351;
                                continue _fun76897
                            }
                        case 2341:
                            var32 = _closure2_slot131;
                            var33 = var32.voiceStateChannelId;
                        case 2351:
                            var32 = _closure2_slot49;
                            if (!(var33 === var32)) {
                                _fun76897_ip = 3464;
                                continue _fun76897
                            }
                        case 2362:
                            var32 = _closure2_slot131;
                            var32 = var7 == var32;
                            var33 = undefined;
                            if (var32) {
                                _fun76897_ip = 2385;
                                continue _fun76897
                            }
                        case 2375:
                            var32 = _closure2_slot131;
                            var33 = var32.messageAuthorActivities;
                        case 2385:
                            var32 = _closure2_slot21;
                            if (!(var33 === var32)) {
                                _fun76897_ip = 3464;
                                continue _fun76897
                            }
                        case 2396:
                            var32 = _closure2_slot131;
                            var32 = var7 == var32;
                            var33 = undefined;
                            if (var32) {
                                _fun76897_ip = 2419;
                                continue _fun76897
                            }
                        case 2409:
                            var32 = _closure2_slot131;
                            var33 = var32.oldestUnreadMessageId;
                        case 2419:
                            var32 = _closure2_slot45;
                            if (!(var33 === var32)) {
                                _fun76897_ip = 3464;
                                continue _fun76897
                            }
                        case 2430:
                            var32 = _closure2_slot131;
                            var32 = var7 == var32;
                            var33 = undefined;
                            if (var32) {
                                _fun76897_ip = 2453;
                                continue _fun76897
                            }
                        case 2443:
                            var32 = _closure2_slot131;
                            var33 = var32.invites;
                        case 2453:
                            var32 = _closure2_slot23;
                            if (!(var33 === var32)) {
                                _fun76897_ip = 3464;
                                continue _fun76897
                            }
                        case 2464:
                            var32 = _closure2_slot131;
                            var32 = var7 == var32;
                            var33 = undefined;
                            if (var32) {
                                _fun76897_ip = 2487;
                                continue _fun76897
                            }
                        case 2477:
                            var32 = _closure2_slot131;
                            var33 = var32.appDirectoryEmbedApplications;
                        case 2487:
                            var32 = _closure2_slot24;
                            if (!(var33 === var32)) {
                                _fun76897_ip = 3464;
                                continue _fun76897
                            }
                        case 2498:
                            var32 = _closure2_slot131;
                            var32 = var7 == var32;
                            var33 = undefined;
                            if (var32) {
                                _fun76897_ip = 2521;
                                continue _fun76897
                            }
                        case 2511:
                            var32 = _closure2_slot131;
                            var33 = var32.invalidAppDirectoryEmbedApplicationIds;
                        case 2521:
                            var32 = _closure2_slot25;
                            if (!(var33 === var32)) {
                                _fun76897_ip = 3464;
                                continue _fun76897
                            }
                        case 2532:
                            var32 = _closure2_slot131;
                            var32 = var7 == var32;
                            var33 = undefined;
                            if (var32) {
                                _fun76897_ip = 2555;
                                continue _fun76897
                            }
                        case 2545:
                            var32 = _closure2_slot131;
                            var33 = var32.appDirectoryEmbedApplicationFetchStates;
                        case 2555:
                            var32 = _closure2_slot26;
                            if (!(var33 === var32)) {
                                _fun76897_ip = 3464;
                                continue _fun76897
                            }
                        case 2566:
                            var32 = _closure2_slot131;
                            var32 = var7 == var32;
                            var33 = undefined;
                            if (var32) {
                                _fun76897_ip = 2589;
                                continue _fun76897
                            }
                        case 2579:
                            var32 = _closure2_slot131;
                            var33 = var32.guildTemplates;
                        case 2589:
                            var32 = _closure2_slot34;
                            if (!(var33 === var32)) {
                                _fun76897_ip = 3464;
                                continue _fun76897
                            }
                        case 2600:
                            var32 = _closure2_slot131;
                            var32 = var7 == var32;
                            var33 = undefined;
                            if (var32) {
                                _fun76897_ip = 2623;
                                continue _fun76897
                            }
                        case 2613:
                            var32 = _closure2_slot131;
                            var33 = var32.buildOverrides;
                        case 2623:
                            var32 = _closure2_slot35;
                            if (!(var33 === var32)) {
                                _fun76897_ip = 3464;
                                continue _fun76897
                            }
                        case 2634:
                            var32 = _closure2_slot131;
                            var32 = var7 == var32;
                            var33 = undefined;
                            if (var32) {
                                _fun76897_ip = 2657;
                                continue _fun76897
                            }
                        case 2647:
                            var32 = _closure2_slot131;
                            var33 = var32.experimentEmbeds;
                        case 2657:
                            var32 = _closure2_slot36;
                            if (!(var33 === var32)) {
                                _fun76897_ip = 3464;
                                continue _fun76897
                            }
                        case 2668:
                            var32 = _closure2_slot131;
                            var32 = var7 == var32;
                            var33 = undefined;
                            if (var32) {
                                _fun76897_ip = 2691;
                                continue _fun76897
                            }
                        case 2681:
                            var32 = _closure2_slot131;
                            var33 = var32.quests;
                        case 2691:
                            var32 = _closure2_slot37;
                            if (!(var33 === var32)) {
                                _fun76897_ip = 3464;
                                continue _fun76897
                            }
                        case 2702:
                            var32 = _closure2_slot131;
                            var32 = var7 == var32;
                            var33 = undefined;
                            if (var32) {
                                _fun76897_ip = 2725;
                                continue _fun76897
                            }
                        case 2715:
                            var32 = _closure2_slot131;
                            var33 = var32.isFetchingCurrentQuests;
                        case 2725:
                            var32 = _closure2_slot38;
                            if (!(var33 === var32)) {
                                _fun76897_ip = 3464;
                                continue _fun76897
                            }
                        case 2736:
                            var32 = _closure2_slot131;
                            var32 = var7 == var32;
                            var33 = undefined;
                            if (var32) {
                                _fun76897_ip = 2759;
                                continue _fun76897
                            }
                        case 2749:
                            var32 = _closure2_slot131;
                            var33 = var32.participantsLength;
                        case 2759:
                            var32 = _closure2_slot54;
                            if (!(var33 === var32)) {
                                _fun76897_ip = 3464;
                                continue _fun76897
                            }
                        case 2770:
                            var33 = _closure2_slot68;
                            var32 = _closure2_slot134;
                            var32 = var7 != var32;
                            if (!var32) {
                                _fun76897_ip = 2811;
                                continue _fun76897
                            }
                        case 2785:
                            var34 = _closure2_slot134;
                            var34 = var34.ready;
                            if (var34) {
                                _fun76897_ip = 2808;
                                continue _fun76897
                            }
                        case 2798:
                            var35 = _closure2_slot134;
                            var34 = var35.cached;
                        case 2808:
                            var32 = var34;
                        case 2811:
                            if (!(var33 === var32)) {
                                _fun76897_ip = 3464;
                                continue _fun76897
                            }
                        case 2818:
                            var32 = _closure2_slot131;
                            var32 = var7 == var32;
                            var33 = undefined;
                            if (var32) {
                                _fun76897_ip = 2841;
                                continue _fun76897
                            }
                        case 2831:
                            var32 = _closure2_slot131;
                            var33 = var32.channelThreadsVersion;
                        case 2841:
                            var32 = _closure2_slot61;
                            if (!(var33 === var32)) {
                                _fun76897_ip = 3464;
                                continue _fun76897
                            }
                        case 2852:
                            var32 = _closure2_slot131;
                            var32 = var7 == var32;
                            var33 = undefined;
                            if (var32) {
                                _fun76897_ip = 2875;
                                continue _fun76897
                            }
                        case 2865:
                            var32 = _closure2_slot131;
                            var33 = var32.rsvpVersion;
                        case 2875:
                            var32 = _closure2_slot71;
                            if (!(var33 === var32)) {
                                _fun76897_ip = 3464;
                                continue _fun76897
                            }
                        case 2886:
                            var32 = _closure2_slot131;
                            var32 = var7 == var32;
                            var33 = undefined;
                            if (var32) {
                                _fun76897_ip = 2909;
                                continue _fun76897
                            }
                        case 2899:
                            var32 = _closure2_slot131;
                            var33 = var32.repliedIds;
                        case 2909:
                            var32 = _closure2_slot56;
                            if (!(var33 === var32)) {
                                _fun76897_ip = 3464;
                                continue _fun76897
                            }
                        case 2920:
                            var32 = _closure2_slot131;
                            var32 = var7 == var32;
                            var33 = undefined;
                            if (var32) {
                                _fun76897_ip = 2943;
                                continue _fun76897
                            }
                        case 2933:
                            var32 = _closure2_slot131;
                            var33 = var32.hasLoadedExperiments;
                        case 2943:
                            var32 = _closure2_slot65;
                            if (!(var33 === var32)) {
                                _fun76897_ip = 3464;
                                continue _fun76897
                            }
                        case 2954:
                            var32 = _closure2_slot131;
                            var32 = var7 == var32;
                            var33 = undefined;
                            if (var32) {
                                _fun76897_ip = 2977;
                                continue _fun76897
                            }
                        case 2967:
                            var32 = _closure2_slot131;
                            var33 = var32.isMessageRequest;
                        case 2977:
                            var32 = _closure2_slot67;
                            if (!(var33 === var32)) {
                                _fun76897_ip = 3464;
                                continue _fun76897
                            }
                        case 2988:
                            var32 = _closure2_slot131;
                            var32 = var7 == var32;
                            var33 = undefined;
                            if (var32) {
                                _fun76897_ip = 3011;
                                continue _fun76897
                            }
                        case 3001:
                            var32 = _closure2_slot131;
                            var33 = var32.isSpamMessageRequest;
                        case 3011:
                            var32 = _closure2_slot66;
                            if (!(var33 === var32)) {
                                _fun76897_ip = 3464;
                                continue _fun76897
                            }
                        case 3022:
                            var32 = _closure2_slot131;
                            var32 = var7 == var32;
                            var33 = undefined;
                            if (var32) {
                                _fun76897_ip = 3045;
                                continue _fun76897
                            }
                        case 3035:
                            var32 = _closure2_slot131;
                            var33 = var32.currentUserCommunicationDisabled;
                        case 3045:
                            var32 = _closure2_slot76;
                            if (!(var33 === var32)) {
                                _fun76897_ip = 3464;
                                continue _fun76897
                            }
                        case 3056:
                            var32 = _closure2_slot131;
                            var32 = var7 == var32;
                            var33 = undefined;
                            if (var32) {
                                _fun76897_ip = 3079;
                                continue _fun76897
                            }
                        case 3069:
                            var32 = _closure2_slot131;
                            var33 = var32.userSettingsLocale;
                        case 3079:
                            var32 = _closure2_slot77;
                            if (!(var33 === var32)) {
                                _fun76897_ip = 3464;
                                continue _fun76897
                            }
                        case 3090:
                            var32 = _closure2_slot131;
                            var32 = var7 == var32;
                            var33 = undefined;
                            if (var32) {
                                _fun76897_ip = 3113;
                                continue _fun76897
                            }
                        case 3103:
                            var32 = _closure2_slot131;
                            var33 = var32.selectedSummary;
                        case 3113:
                            var32 = _closure2_slot86;
                            if (!(var33 === var32)) {
                                _fun76897_ip = 3464;
                                continue _fun76897
                            }
                        case 3124:
                            var32 = _closure2_slot131;
                            var32 = var7 == var32;
                            var33 = undefined;
                            if (var32) {
                                _fun76897_ip = 3147;
                                continue _fun76897
                            }
                        case 3137:
                            var32 = _closure2_slot131;
                            var33 = var32.showPushFeedback;
                        case 3147:
                            var32 = _closure2_slot81;
                            if (!(var33 === var32)) {
                                _fun76897_ip = 3464;
                                continue _fun76897
                            }
                        case 3158:
                            if (!(var14 === var4)) {
                                _fun76897_ip = 3464;
                                continue _fun76897
                            }
                        case 3165:
                            if (var31) {
                                _fun76897_ip = 3464;
                                continue _fun76897
                            }
                        case 3171:
                            if (var30) {
                                _fun76897_ip = 3464;
                                continue _fun76897
                            }
                        case 3177:
                            if (var29) {
                                _fun76897_ip = 3464;
                                continue _fun76897
                            }
                        case 3183:
                            if (!(var28 === var27)) {
                                _fun76897_ip = 3464;
                                continue _fun76897
                            }
                        case 3190:
                            if (var26) {
                                _fun76897_ip = 3464;
                                continue _fun76897
                            }
                        case 3196:
                            if (var25) {
                                _fun76897_ip = 3464;
                                continue _fun76897
                            }
                        case 3202:
                            if (var24) {
                                _fun76897_ip = 3464;
                                continue _fun76897
                            }
                        case 3208:
                            if (var23) {
                                _fun76897_ip = 3464;
                                continue _fun76897
                            }
                        case 3214:
                            if (!(var7 == var10)) {
                                _fun76897_ip = 3464;
                                continue _fun76897
                            }
                        case 3221:
                            if (!(var7 == var8)) {
                                _fun76897_ip = 3464;
                                continue _fun76897
                            }
                        case 3228:
                            var23 = _closure2_slot131;
                            var23 = var7 == var23;
                            var24 = undefined;
                            if (var23) {
                                _fun76897_ip = 3251;
                                continue _fun76897
                            }
                        case 3241:
                            var23 = _closure2_slot131;
                            var24 = var23.androidKeyboardHeight;
                        case 3251:
                            var23 = _closure2_slot83;
                            if (!(var24 === var23)) {
                                _fun76897_ip = 3464;
                                continue _fun76897
                            }
                        case 3262:
                            var23 = _closure2_slot131;
                            var23 = var7 == var23;
                            var24 = undefined;
                            if (var23) {
                                _fun76897_ip = 3285;
                                continue _fun76897
                            }
                        case 3275:
                            var23 = _closure2_slot131;
                            var24 = var23.mediaPostPreviewEmbeds;
                        case 3285:
                            var23 = _closure2_slot33;
                            if (!(var24 === var23)) {
                                _fun76897_ip = 3464;
                                continue _fun76897
                            }
                        case 3296:
                            var23 = _closure2_slot131;
                            var23 = var7 == var23;
                            var24 = undefined;
                            if (var23) {
                                _fun76897_ip = 3319;
                                continue _fun76897
                            }
                        case 3309:
                            var23 = _closure2_slot131;
                            var24 = var23.shouldObscureSpoiler;
                        case 3319:
                            var23 = _closure2_slot90;
                            if (!(var24 === var23)) {
                                _fun76897_ip = 3464;
                                continue _fun76897
                            }
                        case 3330:
                            var23 = _closure2_slot131;
                            var23 = var7 == var23;
                            var24 = undefined;
                            if (var23) {
                                _fun76897_ip = 3353;
                                continue _fun76897
                            }
                        case 3343:
                            var23 = _closure2_slot131;
                            var24 = var23.shouldDisableInteractiveComponents;
                        case 3353:
                            var23 = _closure2_slot92;
                            if (!(var24 === var23)) {
                                _fun76897_ip = 3464;
                                continue _fun76897
                            }
                        case 3361:
                            if (var22) {
                                _fun76897_ip = 3464;
                                continue _fun76897
                            }
                        case 3364:
                            if (var21) {
                                _fun76897_ip = 3464;
                                continue _fun76897
                            }
                        case 3367:
                            if (var20) {
                                _fun76897_ip = 3464;
                                continue _fun76897
                            }
                        case 3370:
                            var20 = _closure2_slot131;
                            var20 = var7 == var20;
                            var21 = undefined;
                            if (var20) {
                                _fun76897_ip = 3393;
                                continue _fun76897
                            }
                        case 3383:
                            var20 = _closure2_slot131;
                            var21 = var20.threadStartingReferenceMessage;
                        case 3393:
                            var20 = _closure2_slot50;
                            if (!(var21 === var20)) {
                                _fun76897_ip = 3464;
                                continue _fun76897
                            }
                        case 3401:
                            if (var19) {
                                _fun76897_ip = 3464;
                                continue _fun76897
                            }
                        case 3404:
                            if (var18) {
                                _fun76897_ip = 3464;
                                continue _fun76897
                            }
                        case 3407:
                            if (var17) {
                                _fun76897_ip = 3464;
                                continue _fun76897
                            }
                        case 3410:
                            if (var16) {
                                _fun76897_ip = 3464;
                                continue _fun76897
                            }
                        case 3413:
                            if (var15) {
                                _fun76897_ip = 3464;
                                continue _fun76897
                            }
                        case 3416:
                            if (var12) {
                                _fun76897_ip = 3464;
                                continue _fun76897
                            }
                        case 3419:
                            var15 = _closure1_slot0;
                            var16 = _closure1_slot2;
                            var12 = 82;
                            var12 = var16[var12];
                            var17 = var15.bind(var3)(var12);
                            var16 = var17.recordTimings;
                            var15 = _closure2_slot7;
                            var12 = _closure2_slot6;
                            var12 = var16.bind(var17)(var15, var12);
                            _fun76897_ip = 4274;
                            continue _fun76897;
                        case 3464:
                            var12 = global;
                            var12 = var12.Set;
                            var15 = var12.prototype;
                            var15 = Object.create(var15, {
                                constructor: {
                                    value: var12
                                }
                            });
                            var41 = var15;
                            var12 = new var41[var12](var40);
                            var12 = var12 instanceof Object ? var12 : var15;
                            var _closure3_slot20 = var12;
                            var15 = _closure2_slot131;
                            var15 = var7 == var15;
                            var16 = undefined;
                            if (var15) {
                                _fun76897_ip = 3519;
                                continue _fun76897
                            }
                        case 3509:
                            var15 = _closure2_slot131;
                            var16 = var15.editingMessageId;
                        case 3519:
                            var15 = _closure2_slot43;
                            if (!(var16 !== var15)) {
                                _fun76897_ip = 3609;
                                continue _fun76897
                            }
                        case 3527:
                            var15 = _closure2_slot43;
                            if (!(var7 != var15)) {
                                _fun76897_ip = 3549;
                                continue _fun76897
                            }
                        case 3535:
                            var16 = var12.add;
                            var15 = _closure2_slot43;
                            var15 = var16.bind(var12)(var15);
                        case 3549:
                            var15 = _closure2_slot131;
                            var16 = var7 == var15;
                            var15 = undefined;
                            if (var16) {
                                _fun76897_ip = 3572;
                                continue _fun76897
                            }
                        case 3562:
                            var16 = _closure2_slot131;
                            var15 = var16.editingMessageId;
                        case 3572:
                            if (!(var7 != var15)) {
                                _fun76897_ip = 3609;
                                continue _fun76897
                            }
                        case 3576:
                            var16 = var12.add;
                            var15 = _closure2_slot131;
                            var17 = var7 == var15;
                            var15 = undefined;
                            if (var17) {
                                _fun76897_ip = 3604;
                                continue _fun76897
                            }
                        case 3594:
                            var17 = _closure2_slot131;
                            var15 = var17.editingMessageId;
                        case 3604:
                            var15 = var16.bind(var12)(var15);
                        case 3609:
                            var15 = _closure2_slot131;
                            var15 = var7 == var15;
                            var16 = undefined;
                            if (var15) {
                                _fun76897_ip = 3632;
                                continue _fun76897
                            }
                        case 3622:
                            var15 = _closure2_slot131;
                            var16 = var15.replyingMessageId;
                        case 3632:
                            var15 = _closure2_slot44;
                            if (!(var16 !== var15)) {
                                _fun76897_ip = 3722;
                                continue _fun76897
                            }
                        case 3640:
                            var15 = _closure2_slot44;
                            if (!(var7 != var15)) {
                                _fun76897_ip = 3662;
                                continue _fun76897
                            }
                        case 3648:
                            var16 = var12.add;
                            var15 = _closure2_slot44;
                            var15 = var16.bind(var12)(var15);
                        case 3662:
                            var15 = _closure2_slot131;
                            var16 = var7 == var15;
                            var15 = undefined;
                            if (var16) {
                                _fun76897_ip = 3685;
                                continue _fun76897
                            }
                        case 3675:
                            var16 = _closure2_slot131;
                            var15 = var16.replyingMessageId;
                        case 3685:
                            if (!(var7 != var15)) {
                                _fun76897_ip = 3722;
                                continue _fun76897
                            }
                        case 3689:
                            var16 = var12.add;
                            var15 = _closure2_slot131;
                            var17 = var7 == var15;
                            var15 = undefined;
                            if (var17) {
                                _fun76897_ip = 3717;
                                continue _fun76897
                            }
                        case 3707:
                            var17 = _closure2_slot131;
                            var15 = var17.replyingMessageId;
                        case 3717:
                            var15 = var16.bind(var12)(var15);
                        case 3722:
                            var16 = _closure2_slot68;
                            var15 = _closure2_slot134;
                            var15 = var7 != var15;
                            if (!var15) {
                                _fun76897_ip = 3763;
                                continue _fun76897
                            }
                        case 3737:
                            var17 = _closure2_slot134;
                            var17 = var17.ready;
                            if (var17) {
                                _fun76897_ip = 3760;
                                continue _fun76897
                            }
                        case 3750:
                            var18 = _closure2_slot134;
                            var17 = var18.cached;
                        case 3760:
                            var15 = var17;
                        case 3763:
                            if (!(var16 === var15)) {
                                _fun76897_ip = 3860;
                                continue _fun76897
                            }
                        case 3767:
                            var15 = _closure2_slot131;
                            var15 = var7 == var15;
                            var16 = undefined;
                            if (var15) {
                                _fun76897_ip = 3790;
                                continue _fun76897
                            }
                        case 3780:
                            var15 = _closure2_slot131;
                            var16 = var15.isCallActive;
                        case 3790:
                            var15 = _closure2_slot48;
                            if (!(var16 === var15)) {
                                _fun76897_ip = 3860;
                                continue _fun76897
                            }
                        case 3798:
                            var15 = _closure2_slot131;
                            var15 = var7 == var15;
                            var16 = undefined;
                            if (var15) {
                                _fun76897_ip = 3821;
                                continue _fun76897
                            }
                        case 3811:
                            var15 = _closure2_slot131;
                            var16 = var15.voiceStateChannelId;
                        case 3821:
                            var15 = _closure2_slot49;
                            if (!(var16 === var15)) {
                                _fun76897_ip = 3860;
                                continue _fun76897
                            }
                        case 3829:
                            var15 = _closure2_slot131;
                            var15 = var7 == var15;
                            var16 = undefined;
                            if (var15) {
                                _fun76897_ip = 3852;
                                continue _fun76897
                            }
                        case 3842:
                            var15 = _closure2_slot131;
                            var16 = var15.participantsLength;
                        case 3852:
                            var15 = _closure2_slot54;
                            if (!(var16 !== var15)) {
                                _fun76897_ip = 3941;
                                continue _fun76897
                            }
                        case 3860:
                            var16 = _closure1_slot1;
                            var17 = _closure1_slot2;
                            var15 = 90;
                            var15 = var17[var15];
                            var18 = var16.bind(var3)(var15);
                            var17 = var18.find;
                            var16 = _closure2_slot6;
                            var15 = var16.toArray;
                            var16 = var15.bind(var16)();
                            var15 = var16.reverse;
                            var16 = var15.bind(var16)();
                            var15 = function(arg0) { // Environment: var2
                                var0 = arg0;
                                var1 = var0.type;
                                var0 = _closure1_slot53;
                                var0 = var0.CALL;
                                var0 = var1 === var0;
                                return var0;
                            };
                            var15 = var17.bind(var18)(var16, var15);
                            if (!(var7 != var15)) {
                                _fun76897_ip = 3941;
                                continue _fun76897
                            }
                        case 3926:
                            var16 = var12.add;
                            var15 = var15.id;
                            var15 = var16.bind(var12)(var15);
                        case 3941:
                            var15 = _closure2_slot131;
                            var15 = var7 == var15;
                            var16 = undefined;
                            if (var15) {
                                _fun76897_ip = 3964;
                                continue _fun76897
                            }
                        case 3954:
                            var15 = _closure2_slot131;
                            var16 = var15.channelThreadsVersion;
                        case 3964:
                            var15 = _closure2_slot61;
                            var15 = var16 !== var15;
                            var _closure3_slot21 = var15;
                            var15 = _closure2_slot131;
                            var15 = var7 == var15;
                            var16 = undefined;
                            if (var15) {
                                _fun76897_ip = 3999;
                                continue _fun76897
                            }
                        case 3989:
                            var15 = _closure2_slot131;
                            var16 = var15.rsvpVersion;
                        case 3999:
                            var15 = _closure2_slot71;
                            var15 = var16 !== var15;
                            var _closure3_slot22 = var15;
                            var15 = _closure2_slot131;
                            var15 = var7 == var15;
                            var16 = undefined;
                            if (var15) {
                                _fun76897_ip = 4034;
                                continue _fun76897
                            }
                        case 4024:
                            var15 = _closure2_slot131;
                            var16 = var15.repliedIds;
                        case 4034:
                            var15 = _closure2_slot56;
                            var15 = var16 !== var15;
                            var _closure3_slot23 = var15;
                            var15 = _closure2_slot131;
                            var15 = var7 == var15;
                            var16 = undefined;
                            if (var15) {
                                _fun76897_ip = 4069;
                                continue _fun76897
                            }
                        case 4059:
                            var15 = _closure2_slot131;
                            var16 = var15.hasLoadedExperiments;
                        case 4069:
                            var15 = _closure2_slot65;
                            var15 = var16 !== var15;
                            var _closure3_slot24 = var15;
                            var15 = _closure2_slot131;
                            var16 = var7 == var15;
                            var15 = undefined;
                            if (var16) {
                                _fun76897_ip = 4104;
                                continue _fun76897
                            }
                        case 4094:
                            var16 = _closure2_slot131;
                            var15 = var16.communicationDisabledVersion;
                        case 4104:
                            var16 = var7 != var15;
                            var7 = -1;
                            if (!var16) {
                                _fun76897_ip = 4120;
                                continue _fun76897
                            }
                        case 4117:
                            var7 = var15;
                        case 4120:
                            var _closure3_slot25 = var7;
                            var7 = !var14;
                            if (var14) {
                                _fun76897_ip = 4133;
                                continue _fun76897
                            }
                        case 4130:
                            var7 = var4;
                        case 4133:
                            var _closure3_slot26 = var7;
                            var14 = _closure2_slot6;
                            var4 = var14.forEach;
                            var2 = function(arg0) { // Environment: var2
                                _fun76899: for (var _fun76899_ip = 0;;) switch (_fun76899_ip) {
                                    case 0:
                                        var0 = arg0;
                                        var2 = _closure3_slot24;
                                        if (!var2) {
                                            _fun76899_ip = 38;
                                            continue _fun76899
                                        }
                                    case 13:
                                        var3 = var0.type;
                                        var2 = _closure1_slot53;
                                        var2 = var2.USER_JOIN;
                                        if (!(var3 !== var2)) {
                                            _fun76899_ip = 3179;
                                            continue _fun76899
                                        }
                                    case 38:
                                        var2 = _closure3_slot23;
                                        if (!var2) {
                                            _fun76899_ip = 108;
                                            continue _fun76899
                                        }
                                    case 45:
                                        var3 = var0.type;
                                        var2 = _closure1_slot53;
                                        var2 = var2.REPLY;
                                        if (!(var3 === var2)) {
                                            _fun76899_ip = 108;
                                            continue _fun76899
                                        }
                                    case 67:
                                        var2 = var0.messageReference;
                                        var3 = null;
                                        if (!(var3 != var2)) {
                                            _fun76899_ip = 108;
                                            continue _fun76899
                                        }
                                    case 79:
                                        var4 = _closure2_slot56;
                                        var3 = var4.has;
                                        var2 = var2.message_id;
                                        var2 = var3.bind(var4)(var2);
                                        if (var2) {
                                            _fun76899_ip = 3156;
                                            continue _fun76899
                                        }
                                    case 108:
                                        var2 = _closure3_slot21;
                                        if (!var2) {
                                            _fun76899_ip = 145;
                                            continue _fun76899
                                        }
                                    case 115:
                                        var3 = var0.hasFlag;
                                        var2 = _closure1_slot54;
                                        var2 = var2.HAS_THREAD;
                                        var2 = var3.bind(var0)(var2);
                                        if (var2) {
                                            _fun76899_ip = 3135;
                                            continue _fun76899
                                        }
                                    case 145:
                                        var2 = _closure3_slot22;
                                        if (!var2) {
                                            _fun76899_ip = 172;
                                            continue _fun76899
                                        }
                                    case 152:
                                        var2 = var0.codedLinks;
                                        var3 = var2.length;
                                        var2 = 0;
                                        if (!(!(var3 > var2))) {
                                            _fun76899_ip = 3114;
                                            continue _fun76899
                                        }
                                    case 172:
                                        var2 = _closure3_slot18;
                                        if (!var2) {
                                            _fun76899_ip = 204;
                                            continue _fun76899
                                        }
                                    case 179:
                                        var3 = var0.type;
                                        var2 = _closure1_slot53;
                                        var2 = var2.EMOJI_ADDED;
                                        if (!(var3 !== var2)) {
                                            _fun76899_ip = 3093;
                                            continue _fun76899
                                        }
                                    case 204:
                                        var2 = _closure3_slot9;
                                        if (var2) {
                                            _fun76899_ip = 3072;
                                            continue _fun76899
                                        }
                                    case 214:
                                        var2 = _closure3_slot6;
                                        if (!var2) {
                                            _fun76899_ip = 275;
                                            continue _fun76899
                                        }
                                    case 221:
                                        var4 = _closure2_slot8;
                                        var3 = null;
                                        if (!(var3 != var4)) {
                                            _fun76899_ip = 275;
                                            continue _fun76899
                                        }
                                    case 234:
                                        var5 = _closure1_slot41;
                                        var4 = _closure2_slot8;
                                        var2 = var0.author;
                                        var3 = var2.id;
                                        var2 = undefined;
                                        var3 = var5.bind(var2)(var4, var3);
                                        var2 = _closure3_slot25;
                                        if (!(!(var3 > var2))) {
                                            _fun76899_ip = 3072;
                                            continue _fun76899
                                        }
                                    case 275:
                                        var2 = _closure3_slot7;
                                        if (!var2) {
                                            _fun76899_ip = 322;
                                            continue _fun76899
                                        }
                                    case 282:
                                        var2 = _closure2_slot8;
                                        var4 = null;
                                        if (!(var4 != var2)) {
                                            _fun76899_ip = 322;
                                            continue _fun76899
                                        }
                                    case 295:
                                        var3 = var0.author;
                                        var7 = var4 == var3;
                                        var2 = undefined;
                                        if (var7) {
                                            _fun76899_ip = 315;
                                            continue _fun76899
                                        }
                                    case 310:
                                        var2 = var3.id;
                                    case 315:
                                        if (!(var4 == var2)) {
                                            _fun76899_ip = 2975;
                                            continue _fun76899
                                        }
                                    case 322:
                                        var2 = _closure3_slot8;
                                        if (!var2) {
                                            _fun76899_ip = 354;
                                            continue _fun76899
                                        }
                                    case 329:
                                        var2 = var0.author;
                                        var3 = var2.id;
                                        var2 = _closure2_slot11;
                                        if (!(var3 !== var2)) {
                                            _fun76899_ip = 2951;
                                            continue _fun76899
                                        }
                                    case 354:
                                        var2 = _closure3_slot1;
                                        if (!var2) {
                                            _fun76899_ip = 436;
                                            continue _fun76899
                                        }
                                    case 361:
                                        var3 = _closure2_slot131;
                                        var8 = null;
                                        var3 = var8 == var3;
                                        var7 = undefined;
                                        if (var3) {
                                            _fun76899_ip = 389;
                                            continue _fun76899
                                        }
                                    case 379:
                                        var3 = _closure2_slot131;
                                        var7 = var3.interactionStates;
                                    case 389:
                                        if (!(var8 == var7)) {
                                            _fun76899_ip = 395;
                                            continue _fun76899
                                        }
                                    case 393:
                                        var7 = {};
                                    case 395:
                                        var3 = var0.id;
                                        var3 = var7[var3];
                                        var7 = _closure2_slot62;
                                        if (!(var8 == var7)) {
                                            _fun76899_ip = 416;
                                            continue _fun76899
                                        }
                                    case 412:
                                        var7 = {};
                                        _fun76899_ip = 420;
                                        continue _fun76899;
                                    case 416:
                                        var7 = _closure2_slot62;
                                    case 420:
                                        var2 = var0.id;
                                        var2 = var7[var2];
                                        if (!(var3 === var2)) {
                                            _fun76899_ip = 2928;
                                            continue _fun76899
                                        }
                                    case 436:
                                        var2 = _closure3_slot4;
                                        if (!var2) {
                                            _fun76899_ip = 534;
                                            continue _fun76899
                                        }
                                    case 443:
                                        var2 = _closure2_slot131;
                                        var9 = null;
                                        var8 = var9 == var2;
                                        var2 = undefined;
                                        if (var8) {
                                            _fun76899_ip = 495;
                                            continue _fun76899
                                        }
                                    case 461:
                                        var8 = _closure2_slot131;
                                        var11 = var8.interactionComponentStates;
                                        var8 = var9 == var11;
                                        var2 = undefined;
                                        if (var8) {
                                            _fun76899_ip = 495;
                                            continue _fun76899
                                        }
                                    case 480:
                                        var10 = var11.get;
                                        var8 = var0.id;
                                        var2 = var10.bind(var11)(var8);
                                    case 495:
                                        var8 = _closure2_slot63;
                                        var8 = var9 == var8;
                                        var3 = undefined;
                                        if (var8) {
                                            _fun76899_ip = 527;
                                            continue _fun76899
                                        }
                                    case 508:
                                        var9 = _closure2_slot63;
                                        var8 = var9.get;
                                        var7 = var0.id;
                                        var3 = var8.bind(var9)(var7);
                                    case 527:
                                        if (!(var2 === var3)) {
                                            _fun76899_ip = 2905;
                                            continue _fun76899
                                        }
                                    case 534:
                                        var2 = _closure3_slot5;
                                        if (!var2) {
                                            _fun76899_ip = 561;
                                            continue _fun76899
                                        }
                                    case 541:
                                        var2 = var0.components;
                                        var3 = var2.length;
                                        var2 = 0;
                                        if (!(var2 === var3)) {
                                            _fun76899_ip = 2881;
                                            continue _fun76899
                                        }
                                    case 561:
                                        var2 = _closure3_slot2;
                                        if (!var2) {
                                            _fun76899_ip = 643;
                                            continue _fun76899
                                        }
                                    case 568:
                                        var3 = _closure2_slot131;
                                        var8 = null;
                                        var3 = var8 == var3;
                                        var7 = undefined;
                                        if (var3) {
                                            _fun76899_ip = 596;
                                            continue _fun76899
                                        }
                                    case 586:
                                        var3 = _closure2_slot131;
                                        var7 = var3.channelPolls;
                                    case 596:
                                        if (!(var8 == var7)) {
                                            _fun76899_ip = 602;
                                            continue _fun76899
                                        }
                                    case 600:
                                        var7 = {};
                                    case 602:
                                        var3 = var0.id;
                                        var3 = var7[var3];
                                        var7 = _closure2_slot93;
                                        if (!(var8 == var7)) {
                                            _fun76899_ip = 623;
                                            continue _fun76899
                                        }
                                    case 619:
                                        var7 = {};
                                        _fun76899_ip = 627;
                                        continue _fun76899;
                                    case 623:
                                        var7 = _closure2_slot93;
                                    case 627:
                                        var2 = var0.id;
                                        var2 = var7[var2];
                                        if (!(var3 === var2)) {
                                            _fun76899_ip = 2858;
                                            continue _fun76899
                                        }
                                    case 643:
                                        var2 = _closure3_slot3;
                                        if (!var2) {
                                            _fun76899_ip = 740;
                                            continue _fun76899
                                        }
                                    case 650:
                                        var3 = var0.messageReference;
                                        var9 = null;
                                        var8 = var9 == var3;
                                        var7 = undefined;
                                        if (var8) {
                                            _fun76899_ip = 673;
                                            continue _fun76899
                                        }
                                    case 667:
                                        var7 = var3.message_id;
                                    case 673:
                                        if (!(var9 != var7)) {
                                            _fun76899_ip = 740;
                                            continue _fun76899
                                        }
                                    case 677:
                                        var3 = _closure2_slot131;
                                        var3 = var9 == var3;
                                        var2 = undefined;
                                        if (var3) {
                                            _fun76899_ip = 703;
                                            continue _fun76899
                                        }
                                    case 693:
                                        var3 = _closure2_slot131;
                                        var2 = var3.messageReferencePolls;
                                    case 703:
                                        if (!(var9 == var2)) {
                                            _fun76899_ip = 709;
                                            continue _fun76899
                                        }
                                    case 707:
                                        var2 = {};
                                    case 709:
                                        var3 = var2[var7];
                                        var2 = _closure2_slot95;
                                        if (!(var9 == var2)) {
                                            _fun76899_ip = 725;
                                            continue _fun76899
                                        }
                                    case 721:
                                        var2 = {};
                                        _fun76899_ip = 729;
                                        continue _fun76899;
                                    case 725:
                                        var2 = _closure2_slot95;
                                    case 729:
                                        var2 = var2[var7];
                                        if (!(var3 === var2)) {
                                            _fun76899_ip = 2835;
                                            continue _fun76899
                                        }
                                    case 740:
                                        var2 = _closure3_slot12;
                                        if (!var2) {
                                            _fun76899_ip = 889;
                                            continue _fun76899
                                        }
                                    case 750:
                                        var3 = _closure2_slot131;
                                        var8 = null;
                                        var3 = var8 == var3;
                                        var9 = undefined;
                                        if (var3) {
                                            _fun76899_ip = 778;
                                            continue _fun76899
                                        }
                                    case 768:
                                        var3 = _closure2_slot131;
                                        var9 = var3.unloadedContentEntryMessageIds;
                                    case 778:
                                        if (!(var8 == var9)) {
                                            _fun76899_ip = 810;
                                            continue _fun76899
                                        }
                                    case 782:
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
                                    case 810:
                                        var7 = var9.has;
                                        var3 = var0.id;
                                        var3 = var7.bind(var9)(var3);
                                        var7 = _closure2_slot98;
                                        if (!(var8 == var7)) {
                                            _fun76899_ip = 863;
                                            continue _fun76899
                                        }
                                    case 833:
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
                                        _fun76899_ip = 867;
                                        continue _fun76899;
                                    case 863:
                                        var8 = _closure2_slot98;
                                    case 867:
                                        var7 = var8.has;
                                        var2 = var0.id;
                                        var2 = var7.bind(var8)(var2);
                                        if (!(var3 === var2)) {
                                            _fun76899_ip = 2812;
                                            continue _fun76899
                                        }
                                    case 889:
                                        var7 = _closure2_slot1;
                                        var2 = var7.isForumPost;
                                        var2 = var2.bind(var7)();
                                        if (!var2) {
                                            _fun76899_ip = 975;
                                            continue _fun76899
                                        }
                                    case 909:
                                        var2 = _closure3_slot10;
                                        if (var2) {
                                            _fun76899_ip = 923;
                                            continue _fun76899
                                        }
                                    case 916:
                                        var2 = _closure3_slot11;
                                        if (!var2) {
                                            _fun76899_ip = 975;
                                            continue _fun76899
                                        }
                                    case 923:
                                        var7 = var0.id;
                                        var9 = _closure1_slot1;
                                        var8 = _closure1_slot2;
                                        var2 = 99;
                                        var8 = var8[var2];
                                        var2 = undefined;
                                        var9 = var9.bind(var2)(var8);
                                        var8 = var9.castChannelIdAsMessageId;
                                        var2 = _closure2_slot7;
                                        var2 = var8.bind(var9)(var2);
                                        if (!(var7 !== var2)) {
                                            _fun76899_ip = 2788;
                                            continue _fun76899
                                        }
                                    case 975:
                                        var2 = _closure3_slot14;
                                        if (!var2) {
                                            _fun76899_ip = 997;
                                            continue _fun76899
                                        }
                                    case 982:
                                        var7 = var0.activityInstance;
                                        var2 = null;
                                        if (!(var2 == var7)) {
                                            _fun76899_ip = 2764;
                                            continue _fun76899
                                        }
                                    case 997:
                                        var2 = _closure3_slot15;
                                        if (!var2) {
                                            _fun76899_ip = 1031;
                                            continue _fun76899
                                        }
                                    case 1004:
                                        var9 = var0.activity;
                                        var8 = null;
                                        var10 = var8 == var9;
                                        var7 = undefined;
                                        if (var10) {
                                            _fun76899_ip = 1027;
                                            continue _fun76899
                                        }
                                    case 1021:
                                        var7 = var9.party_id;
                                    case 1027:
                                        var2 = var8 != var7;
                                    case 1031:
                                        if (!var2) {
                                            _fun76899_ip = 1053;
                                            continue _fun76899
                                        }
                                    case 1034:
                                        var8 = _closure3_slot20;
                                        var7 = var8.add;
                                        var2 = var0.id;
                                        var2 = var7.bind(var8)(var2);
                                    case 1053:
                                        var2 = var0.author;
                                        var9 = null;
                                        if (!(var9 != var2)) {
                                            _fun76899_ip = 3198;
                                            continue _fun76899
                                        }
                                    case 1068:
                                        var19 = {};
                                        var2 = _closure2_slot131;
                                        var8 = var9 == var2;
                                        var7 = undefined;
                                        var2 = undefined;
                                        if (var8) {
                                            _fun76899_ip = 1095;
                                            continue _fun76899
                                        }
                                    case 1085:
                                        var8 = _closure2_slot131;
                                        var2 = var8.messageAuthorActivities;
                                    case 1095:
                                        if (!(var9 == var2)) {
                                            _fun76899_ip = 1101;
                                            continue _fun76899
                                        }
                                    case 1099:
                                        var2 = {};
                                    case 1101:
                                        var19.messageAuthorActivities = var2;
                                        var18 = {};
                                        var2 = _closure2_slot21;
                                        if (!(var9 == var2)) {
                                            _fun76899_ip = 1120;
                                            continue _fun76899
                                        }
                                    case 1116:
                                        var2 = {};
                                        _fun76899_ip = 1124;
                                        continue _fun76899;
                                    case 1120:
                                        var2 = _closure2_slot21;
                                    case 1124:
                                        var18.messageAuthorActivities = var2;
                                        var17 = {};
                                        var2 = _closure2_slot131;
                                        var8 = var9 == var2;
                                        var2 = undefined;
                                        if (var8) {
                                            _fun76899_ip = 1154;
                                            continue _fun76899
                                        }
                                    case 1144:
                                        var8 = _closure2_slot131;
                                        var2 = var8.invites;
                                    case 1154:
                                        if (!(var9 == var2)) {
                                            _fun76899_ip = 1186;
                                            continue _fun76899
                                        }
                                    case 1158:
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
                                    case 1186:
                                        var17.invites = var2;
                                        var2 = _closure2_slot131;
                                        var8 = var9 == var2;
                                        var2 = undefined;
                                        if (var8) {
                                            _fun76899_ip = 1214;
                                            continue _fun76899
                                        }
                                    case 1204:
                                        var8 = _closure2_slot131;
                                        var2 = var8.appDirectoryEmbedApplications;
                                    case 1214:
                                        if (!(var9 == var2)) {
                                            _fun76899_ip = 1220;
                                            continue _fun76899
                                        }
                                    case 1218:
                                        var2 = {};
                                    case 1220:
                                        var17.appDirectoryEmbedApplications = var2;
                                        var2 = _closure2_slot131;
                                        var8 = var9 == var2;
                                        var2 = undefined;
                                        if (var8) {
                                            _fun76899_ip = 1248;
                                            continue _fun76899
                                        }
                                    case 1238:
                                        var8 = _closure2_slot131;
                                        var2 = var8.invalidAppDirectoryEmbedApplicationIds;
                                    case 1248:
                                        if (!(var9 == var2)) {
                                            _fun76899_ip = 1280;
                                            continue _fun76899
                                        }
                                    case 1252:
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
                                    case 1280:
                                        var17.invalidAppDirectoryEmbedApplicationIds = var2;
                                        var2 = _closure2_slot131;
                                        var8 = var9 == var2;
                                        var2 = undefined;
                                        if (var8) {
                                            _fun76899_ip = 1308;
                                            continue _fun76899
                                        }
                                    case 1298:
                                        var8 = _closure2_slot131;
                                        var2 = var8.invalidApplicationIds;
                                    case 1308:
                                        if (!(var9 == var2)) {
                                            _fun76899_ip = 1316;
                                            continue _fun76899
                                        }
                                    case 1312:
                                        var2 = new Array(0);
                                    case 1316:
                                        var17.invalidApplicationIds = var2;
                                        var2 = _closure2_slot131;
                                        var8 = var9 == var2;
                                        var2 = undefined;
                                        if (var8) {
                                            _fun76899_ip = 1344;
                                            continue _fun76899
                                        }
                                    case 1334:
                                        var8 = _closure2_slot131;
                                        var2 = var8.activityParticipants;
                                    case 1344:
                                        if (!(var9 == var2)) {
                                            _fun76899_ip = 1352;
                                            continue _fun76899
                                        }
                                    case 1348:
                                        var2 = new Array(0);
                                    case 1352:
                                        var17.activityParticipants = var2;
                                        var2 = _closure2_slot131;
                                        var8 = var9 == var2;
                                        var2 = undefined;
                                        if (var8) {
                                            _fun76899_ip = 1380;
                                            continue _fun76899
                                        }
                                    case 1370:
                                        var8 = _closure2_slot131;
                                        var2 = var8.applicationAssetFetchingIds;
                                    case 1380:
                                        if (!(var9 == var2)) {
                                            _fun76899_ip = 1388;
                                            continue _fun76899
                                        }
                                    case 1384:
                                        var2 = new Array(0);
                                    case 1388:
                                        var17.applicationAssetFetchingIds = var2;
                                        var2 = _closure2_slot131;
                                        var8 = var9 == var2;
                                        var2 = undefined;
                                        if (var8) {
                                            _fun76899_ip = 1416;
                                            continue _fun76899
                                        }
                                    case 1406:
                                        var8 = _closure2_slot131;
                                        var2 = var8.appDirectoryEmbedApplicationFetchStates;
                                    case 1416:
                                        if (!(var9 == var2)) {
                                            _fun76899_ip = 1422;
                                            continue _fun76899
                                        }
                                    case 1420:
                                        var2 = {};
                                    case 1422:
                                        var17.appDirectoryEmbedApplicationFetchStates = var2;
                                        var2 = _closure2_slot131;
                                        var8 = var9 == var2;
                                        var2 = undefined;
                                        if (var8) {
                                            _fun76899_ip = 1450;
                                            continue _fun76899
                                        }
                                    case 1440:
                                        var8 = _closure2_slot131;
                                        var2 = var8.guildTemplates;
                                    case 1450:
                                        if (!(var9 == var2)) {
                                            _fun76899_ip = 1482;
                                            continue _fun76899
                                        }
                                    case 1454:
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
                                    case 1482:
                                        var17.guildTemplates = var2;
                                        var2 = _closure2_slot131;
                                        var8 = var9 == var2;
                                        var2 = undefined;
                                        if (var8) {
                                            _fun76899_ip = 1510;
                                            continue _fun76899
                                        }
                                    case 1500:
                                        var8 = _closure2_slot131;
                                        var2 = var8.buildOverrides;
                                    case 1510:
                                        if (!(var9 == var2)) {
                                            _fun76899_ip = 1516;
                                            continue _fun76899
                                        }
                                    case 1514:
                                        var2 = {};
                                    case 1516:
                                        var17.buildOverrides = var2;
                                        var2 = _closure2_slot131;
                                        var8 = var9 == var2;
                                        var2 = undefined;
                                        if (var8) {
                                            _fun76899_ip = 1544;
                                            continue _fun76899
                                        }
                                    case 1534:
                                        var8 = _closure2_slot131;
                                        var2 = var8.experimentEmbeds;
                                    case 1544:
                                        if (!(var9 == var2)) {
                                            _fun76899_ip = 1550;
                                            continue _fun76899
                                        }
                                    case 1548:
                                        var2 = {};
                                    case 1550:
                                        var17.experimentEmbeds = var2;
                                        var2 = _closure2_slot131;
                                        var8 = var9 == var2;
                                        var2 = undefined;
                                        if (var8) {
                                            _fun76899_ip = 1578;
                                            continue _fun76899
                                        }
                                    case 1568:
                                        var8 = _closure2_slot131;
                                        var2 = var8.quests;
                                    case 1578:
                                        if (!(var9 == var2)) {
                                            _fun76899_ip = 1586;
                                            continue _fun76899
                                        }
                                    case 1582:
                                        var2 = new Array(0);
                                    case 1586:
                                        var17.quests = var2;
                                        var2 = _closure2_slot131;
                                        var2 = var9 == var2;
                                        var8 = undefined;
                                        if (var2) {
                                            _fun76899_ip = 1614;
                                            continue _fun76899
                                        }
                                    case 1604:
                                        var2 = _closure2_slot131;
                                        var8 = var2.isFetchingCurrentQuests;
                                    case 1614:
                                        var2 = var9 != var8;
                                        if (!var2) {
                                            _fun76899_ip = 1624;
                                            continue _fun76899
                                        }
                                    case 1621:
                                        var2 = var8;
                                    case 1624:
                                        var17.isFetchingCurrentQuests = var2;
                                        var16 = {};
                                        var2 = _closure2_slot23;
                                        if (!(var9 == var2)) {
                                            _fun76899_ip = 1669;
                                            continue _fun76899
                                        }
                                    case 1639:
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
                                        _fun76899_ip = 1673;
                                        continue _fun76899;
                                    case 1669:
                                        var2 = _closure2_slot23;
                                    case 1673:
                                        var16.invites = var2;
                                        var2 = _closure2_slot24;
                                        if (!(var9 == var2)) {
                                            _fun76899_ip = 1690;
                                            continue _fun76899
                                        }
                                    case 1686:
                                        var2 = {};
                                        _fun76899_ip = 1694;
                                        continue _fun76899;
                                    case 1690:
                                        var2 = _closure2_slot24;
                                    case 1694:
                                        var16.appDirectoryEmbedApplications = var2;
                                        var2 = _closure2_slot25;
                                        if (!(var9 == var2)) {
                                            _fun76899_ip = 1737;
                                            continue _fun76899
                                        }
                                    case 1707:
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
                                        _fun76899_ip = 1741;
                                        continue _fun76899;
                                    case 1737:
                                        var2 = _closure2_slot25;
                                    case 1741:
                                        var16.invalidAppDirectoryEmbedApplicationIds = var2;
                                        var2 = _closure2_slot27;
                                        if (!(var9 == var2)) {
                                            _fun76899_ip = 1760;
                                            continue _fun76899
                                        }
                                    case 1754:
                                        var2 = new Array(0);
                                        _fun76899_ip = 1764;
                                        continue _fun76899;
                                    case 1760:
                                        var2 = _closure2_slot27;
                                    case 1764:
                                        var16.invalidApplicationIds = var2;
                                        var2 = _closure2_slot31;
                                        if (!(var9 == var2)) {
                                            _fun76899_ip = 1783;
                                            continue _fun76899
                                        }
                                    case 1777:
                                        var2 = new Array(0);
                                        _fun76899_ip = 1787;
                                        continue _fun76899;
                                    case 1783:
                                        var2 = _closure2_slot31;
                                    case 1787:
                                        var16.activityParticipants = var2;
                                        var2 = _closure2_slot28;
                                        if (!(var9 == var2)) {
                                            _fun76899_ip = 1806;
                                            continue _fun76899
                                        }
                                    case 1800:
                                        var2 = new Array(0);
                                        _fun76899_ip = 1810;
                                        continue _fun76899;
                                    case 1806:
                                        var2 = _closure2_slot28;
                                    case 1810:
                                        var16.applicationAssetFetchingIds = var2;
                                        var2 = _closure2_slot26;
                                        if (!(var9 == var2)) {
                                            _fun76899_ip = 1827;
                                            continue _fun76899
                                        }
                                    case 1823:
                                        var2 = {};
                                        _fun76899_ip = 1831;
                                        continue _fun76899;
                                    case 1827:
                                        var2 = _closure2_slot26;
                                    case 1831:
                                        var16.appDirectoryEmbedApplicationFetchStates = var2;
                                        var2 = _closure2_slot34;
                                        if (!(var9 == var2)) {
                                            _fun76899_ip = 1874;
                                            continue _fun76899
                                        }
                                    case 1844:
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
                                        _fun76899_ip = 1878;
                                        continue _fun76899;
                                    case 1874:
                                        var2 = _closure2_slot34;
                                    case 1878:
                                        var16.guildTemplates = var2;
                                        var2 = _closure2_slot35;
                                        if (!(var9 == var2)) {
                                            _fun76899_ip = 1895;
                                            continue _fun76899
                                        }
                                    case 1891:
                                        var2 = {};
                                        _fun76899_ip = 1899;
                                        continue _fun76899;
                                    case 1895:
                                        var2 = _closure2_slot35;
                                    case 1899:
                                        var16.buildOverrides = var2;
                                        var2 = _closure2_slot36;
                                        if (!(var9 == var2)) {
                                            _fun76899_ip = 1916;
                                            continue _fun76899
                                        }
                                    case 1912:
                                        var2 = {};
                                        _fun76899_ip = 1920;
                                        continue _fun76899;
                                    case 1916:
                                        var2 = _closure2_slot36;
                                    case 1920:
                                        var16.experimentEmbeds = var2;
                                        var2 = _closure2_slot37;
                                        if (!(var9 == var2)) {
                                            _fun76899_ip = 1939;
                                            continue _fun76899
                                        }
                                    case 1933:
                                        var2 = new Array(0);
                                        _fun76899_ip = 1943;
                                        continue _fun76899;
                                    case 1939:
                                        var2 = _closure2_slot37;
                                    case 1943:
                                        var16.quests = var2;
                                        var2 = _closure2_slot38;
                                        var2 = var9 != var2;
                                        if (!var2) {
                                            _fun76899_ip = 1963;
                                            continue _fun76899
                                        }
                                    case 1959:
                                        var2 = _closure2_slot38;
                                    case 1963:
                                        var16.isFetchingCurrentQuests = var2;
                                        var15 = {};
                                        var2 = _closure2_slot131;
                                        var8 = var9 == var2;
                                        var2 = undefined;
                                        if (var8) {
                                            _fun76899_ip = 1993;
                                            continue _fun76899
                                        }
                                    case 1983:
                                        var8 = _closure2_slot131;
                                        var2 = var8.resolvingGiftCodes;
                                    case 1993:
                                        if (!(var9 == var2)) {
                                            _fun76899_ip = 2001;
                                            continue _fun76899
                                        }
                                    case 1997:
                                        var2 = new Array(0);
                                    case 2001:
                                        var15.resolvingGiftCodes = var2;
                                        var2 = _closure2_slot131;
                                        var8 = var9 == var2;
                                        var2 = undefined;
                                        if (var8) {
                                            _fun76899_ip = 2029;
                                            continue _fun76899
                                        }
                                    case 2019:
                                        var8 = _closure2_slot131;
                                        var2 = var8.resolvedGiftCodes;
                                    case 2029:
                                        if (!(var9 == var2)) {
                                            _fun76899_ip = 2037;
                                            continue _fun76899
                                        }
                                    case 2033:
                                        var2 = new Array(0);
                                    case 2037:
                                        var15.resolvedGiftCodes = var2;
                                        var2 = _closure2_slot131;
                                        var8 = var9 == var2;
                                        var2 = undefined;
                                        if (var8) {
                                            _fun76899_ip = 2065;
                                            continue _fun76899
                                        }
                                    case 2055:
                                        var8 = _closure2_slot131;
                                        var2 = var8.acceptingGiftCodes;
                                    case 2065:
                                        if (!(var9 == var2)) {
                                            _fun76899_ip = 2073;
                                            continue _fun76899
                                        }
                                    case 2069:
                                        var2 = new Array(0);
                                    case 2073:
                                        var15.acceptingGiftCodes = var2;
                                        var14 = {};
                                        var2 = _closure2_slot51;
                                        if (!(var9 == var2)) {
                                            _fun76899_ip = 2094;
                                            continue _fun76899
                                        }
                                    case 2088:
                                        var2 = new Array(0);
                                        _fun76899_ip = 2098;
                                        continue _fun76899;
                                    case 2094:
                                        var2 = _closure2_slot51;
                                    case 2098:
                                        var14.resolvingGiftCodes = var2;
                                        var2 = _closure2_slot52;
                                        if (!(var9 == var2)) {
                                            _fun76899_ip = 2117;
                                            continue _fun76899
                                        }
                                    case 2111:
                                        var2 = new Array(0);
                                        _fun76899_ip = 2121;
                                        continue _fun76899;
                                    case 2117:
                                        var2 = _closure2_slot52;
                                    case 2121:
                                        var14.resolvedGiftCodes = var2;
                                        var2 = _closure2_slot53;
                                        if (!(var9 == var2)) {
                                            _fun76899_ip = 2140;
                                            continue _fun76899
                                        }
                                    case 2134:
                                        var2 = new Array(0);
                                        _fun76899_ip = 2144;
                                        continue _fun76899;
                                    case 2140:
                                        var2 = _closure2_slot53;
                                    case 2144:
                                        var14.acceptingGiftCodes = var2;
                                        var12 = {};
                                        var2 = _closure2_slot131;
                                        var8 = var9 == var2;
                                        var2 = undefined;
                                        if (var8) {
                                            _fun76899_ip = 2174;
                                            continue _fun76899
                                        }
                                    case 2164:
                                        var8 = _closure2_slot131;
                                        var2 = var8.mediaPostPreviewEmbeds;
                                    case 2174:
                                        if (!(var9 == var2)) {
                                            _fun76899_ip = 2180;
                                            continue _fun76899
                                        }
                                    case 2178:
                                        var2 = {};
                                    case 2180:
                                        var12.mediaPostPreviewEmbeds = var2;
                                        var11 = {};
                                        var2 = _closure2_slot33;
                                        if (!(var9 == var2)) {
                                            _fun76899_ip = 2199;
                                            continue _fun76899
                                        }
                                    case 2195:
                                        var2 = {};
                                        _fun76899_ip = 2203;
                                        continue _fun76899;
                                    case 2199:
                                        var2 = _closure2_slot33;
                                    case 2203:
                                        var11.mediaPostPreviewEmbeds = var2;
                                        var10 = _closure1_slot1;
                                        var8 = _closure1_slot2;
                                        var13 = 100;
                                        var8 = var8[var13];
                                        var10 = var10.bind(var7)(var8);
                                        var8 = var10.messageAuthorActivitiesChanged;
                                        var8 = var8.bind(var10)(var0, var19, var18);
                                        if (var8) {
                                            _fun76899_ip = 2740;
                                            continue _fun76899
                                        }
                                    case 2250:
                                        var10 = _closure1_slot1;
                                        var8 = _closure1_slot2;
                                        var8 = var8[var13];
                                        var10 = var10.bind(var7)(var8);
                                        var8 = var10.codedLinksChanged;
                                        var8 = var8.bind(var10)(var0, var17, var16);
                                        if (var8) {
                                            _fun76899_ip = 2740;
                                            continue _fun76899
                                        }
                                    case 2286:
                                        var8 = _closure3_slot0;
                                        if (!var8) {
                                            _fun76899_ip = 2329;
                                            continue _fun76899
                                        }
                                    case 2293:
                                        var10 = _closure1_slot1;
                                        var8 = _closure1_slot2;
                                        var8 = var8[var13];
                                        var10 = var10.bind(var7)(var8);
                                        var8 = var10.giftCodesChanged;
                                        var8 = var8.bind(var10)(var0, var15, var14);
                                        if (var8) {
                                            _fun76899_ip = 2740;
                                            continue _fun76899
                                        }
                                    case 2329:
                                        var10 = _closure1_slot1;
                                        var8 = _closure1_slot2;
                                        var8 = var8[var13];
                                        var10 = var10.bind(var7)(var8);
                                        var8 = var10.mediaPostPreviewEmbedsChanged;
                                        var8 = var8.bind(var10)(var0, var12, var11);
                                        if (var8) {
                                            _fun76899_ip = 2740;
                                            continue _fun76899
                                        }
                                    case 2365:
                                        var8 = _closure3_slot26;
                                        if (!var8) {
                                            _fun76899_ip = 2389;
                                            continue _fun76899
                                        }
                                    case 2372:
                                        var10 = var0.embeds;
                                        var11 = var10.length;
                                        var10 = 0;
                                        var8 = var11 > var10;
                                    case 2389:
                                        if (!var8) {
                                            _fun76899_ip = 2411;
                                            continue _fun76899
                                        }
                                    case 2392:
                                        var11 = _closure3_slot20;
                                        var10 = var11.add;
                                        var8 = var0.id;
                                        var8 = var10.bind(var11)(var8);
                                    case 2411:
                                        var8 = var0.type;
                                        var2 = _closure1_slot53;
                                        var2 = var2.THREAD_STARTER_MESSAGE;
                                        var2 = var8 === var2;
                                        if (!var2) {
                                            _fun76899_ip = 2464;
                                            continue _fun76899
                                        }
                                    case 2433:
                                        var8 = _closure2_slot131;
                                        var8 = var9 == var8;
                                        var10 = undefined;
                                        if (var8) {
                                            _fun76899_ip = 2456;
                                            continue _fun76899
                                        }
                                    case 2446:
                                        var8 = _closure2_slot131;
                                        var10 = var8.threadStartingReferenceMessage;
                                    case 2456:
                                        var8 = _closure2_slot50;
                                        var2 = var10 !== var8;
                                    case 2464:
                                        if (!var2) {
                                            _fun76899_ip = 2486;
                                            continue _fun76899
                                        }
                                    case 2467:
                                        var10 = _closure3_slot20;
                                        var8 = var10.add;
                                        var2 = var0.id;
                                        var2 = var8.bind(var10)(var2);
                                    case 2486:
                                        var2 = _closure3_slot13;
                                        if (!var2) {
                                            _fun76899_ip = 2502;
                                            continue _fun76899
                                        }
                                    case 2493:
                                        var8 = var0.applicationId;
                                        var2 = var9 != var8;
                                    case 2502:
                                        if (!var2) {
                                            _fun76899_ip = 2551;
                                            continue _fun76899
                                        }
                                    case 2505:
                                        var8 = _closure2_slot131;
                                        var8 = var9 == var8;
                                        var11 = undefined;
                                        if (var8) {
                                            _fun76899_ip = 2528;
                                            continue _fun76899
                                        }
                                    case 2518:
                                        var8 = _closure2_slot131;
                                        var11 = var8.invalidApplicationIds;
                                    case 2528:
                                        if (!(var9 == var11)) {
                                            _fun76899_ip = 2536;
                                            continue _fun76899
                                        }
                                    case 2532:
                                        var11 = new Array(0);
                                    case 2536:
                                        var10 = var11.includes;
                                        var8 = var0.applicationId;
                                        var2 = var10.bind(var11)(var8);
                                    case 2551:
                                        if (!var2) {
                                            _fun76899_ip = 2573;
                                            continue _fun76899
                                        }
                                    case 2554:
                                        var10 = _closure3_slot20;
                                        var8 = var10.add;
                                        var2 = var0.id;
                                        var2 = var8.bind(var10)(var2);
                                    case 2573:
                                        var2 = _closure3_slot16;
                                        if (!var2) {
                                            _fun76899_ip = 2629;
                                            continue _fun76899
                                        }
                                    case 2580:
                                        var11 = var0.referralTrialOfferId;
                                        var2 = var9 != var11;
                                        if (!var2) {
                                            _fun76899_ip = 2607;
                                            continue _fun76899
                                        }
                                    case 2593:
                                        var10 = _closure2_slot40;
                                        var8 = var10.includes;
                                        var2 = var8.bind(var10)(var11);
                                    case 2607:
                                        if (!var2) {
                                            _fun76899_ip = 2629;
                                            continue _fun76899
                                        }
                                    case 2610:
                                        var10 = _closure3_slot20;
                                        var8 = var10.add;
                                        var2 = var0.id;
                                        var2 = var8.bind(var10)(var2);
                                    case 2629:
                                        var2 = _closure3_slot17;
                                        if (!var2) {
                                            _fun76899_ip = 2653;
                                            continue _fun76899
                                        }
                                    case 2636:
                                        var8 = var0.codedLinks;
                                        var10 = var8.length;
                                        var8 = 0;
                                        var2 = var10 > var8;
                                    case 2653:
                                        if (!var2) {
                                            _fun76899_ip = 2675;
                                            continue _fun76899
                                        }
                                    case 2656:
                                        var10 = _closure3_slot20;
                                        var8 = var10.add;
                                        var2 = var0.id;
                                        var2 = var8.bind(var10)(var2);
                                    case 2675:
                                        var2 = _closure3_slot19;
                                        if (!var2) {
                                            _fun76899_ip = 2710;
                                            continue _fun76899
                                        }
                                    case 2682:
                                        var8 = var0.author;
                                        var9 = var9 == var8;
                                        var7 = undefined;
                                        if (var9) {
                                            _fun76899_ip = 2702;
                                            continue _fun76899
                                        }
                                    case 2697:
                                        var7 = var8.id;
                                    case 2702:
                                        var3 = _closure2_slot11;
                                        var2 = var7 === var3;
                                    case 2710:
                                        if (!var2) {
                                            _fun76899_ip = 3198;
                                            continue _fun76899
                                        }
                                    case 2716:
                                        var7 = _closure3_slot20;
                                        var3 = var7.add;
                                        var2 = var0.id;
                                        var2 = var3.bind(var7)(var2);
                                        _fun76899_ip = 3198;
                                        continue _fun76899;
                                    case 2740:
                                        var7 = _closure3_slot20;
                                        var3 = var7.add;
                                        var2 = var0.id;
                                        var2 = var3.bind(var7)(var2);
                                        _fun76899_ip = 3198;
                                        continue _fun76899;
                                    case 2764:
                                        var7 = _closure3_slot20;
                                        var3 = var7.add;
                                        var2 = var0.id;
                                        var2 = var3.bind(var7)(var2);
                                        _fun76899_ip = 3198;
                                        continue _fun76899;
                                    case 2788:
                                        var7 = _closure3_slot20;
                                        var3 = var7.add;
                                        var2 = var0.id;
                                        var2 = var3.bind(var7)(var2);
                                        _fun76899_ip = 3198;
                                        continue _fun76899;
                                    case 2812:
                                        var7 = _closure3_slot20;
                                        var3 = var7.add;
                                        var2 = var0.id;
                                        var2 = var3.bind(var7)(var2);
                                        var2 = undefined;
                                        return var2;
                                    case 2835:
                                        var7 = _closure3_slot20;
                                        var3 = var7.add;
                                        var2 = var0.id;
                                        var2 = var3.bind(var7)(var2);
                                        var2 = undefined;
                                        return var2;
                                    case 2858:
                                        var7 = _closure3_slot20;
                                        var3 = var7.add;
                                        var2 = var0.id;
                                        var2 = var3.bind(var7)(var2);
                                        var2 = undefined;
                                        return var2;
                                    case 2881:
                                        var7 = _closure3_slot20;
                                        var3 = var7.add;
                                        var2 = var0.id;
                                        var2 = var3.bind(var7)(var2);
                                        _fun76899_ip = 3198;
                                        continue _fun76899;
                                    case 2905:
                                        var7 = _closure3_slot20;
                                        var3 = var7.add;
                                        var2 = var0.id;
                                        var2 = var3.bind(var7)(var2);
                                        var2 = undefined;
                                        return var2;
                                    case 2928:
                                        var7 = _closure3_slot20;
                                        var3 = var7.add;
                                        var2 = var0.id;
                                        var2 = var3.bind(var7)(var2);
                                        var2 = undefined;
                                        return var2;
                                    case 2951:
                                        var7 = _closure3_slot20;
                                        var3 = var7.add;
                                        var2 = var0.id;
                                        var2 = var3.bind(var7)(var2);
                                        _fun76899_ip = 3198;
                                        continue _fun76899;
                                    case 2975:
                                        var3 = _closure2_slot74;
                                        var2 = var0.author;
                                        var2 = var2.id;
                                        var3 = var3[var2];
                                        var2 = _closure2_slot131;
                                        var7 = var4 == var2;
                                        var2 = undefined;
                                        if (var7) {
                                            _fun76899_ip = 3041;
                                            continue _fun76899
                                        }
                                    case 3007:
                                        var5 = _closure2_slot131;
                                        var5 = var5.messageAuthorMembers;
                                        var4 = var4 == var5;
                                        var2 = undefined;
                                        if (var4) {
                                            _fun76899_ip = 3041;
                                            continue _fun76899
                                        }
                                    case 3026:
                                        var4 = var0.author;
                                        var4 = var4.id;
                                        var2 = var5[var4];
                                    case 3041:
                                        if (!(var3 !== var2)) {
                                            _fun76899_ip = 3198;
                                            continue _fun76899
                                        }
                                    case 3048:
                                        var4 = _closure3_slot20;
                                        var3 = var4.add;
                                        var2 = var0.id;
                                        var2 = var3.bind(var4)(var2);
                                        _fun76899_ip = 3198;
                                        continue _fun76899;
                                    case 3072:
                                        var4 = _closure3_slot20;
                                        var3 = var4.add;
                                        var2 = var0.id;
                                        var2 = var3.bind(var4)(var2);
                                        _fun76899_ip = 3198;
                                        continue _fun76899;
                                    case 3093:
                                        var4 = _closure3_slot20;
                                        var3 = var4.add;
                                        var2 = var0.id;
                                        var2 = var3.bind(var4)(var2);
                                        _fun76899_ip = 3198;
                                        continue _fun76899;
                                    case 3114:
                                        var4 = _closure3_slot20;
                                        var3 = var4.add;
                                        var2 = var0.id;
                                        var2 = var3.bind(var4)(var2);
                                        _fun76899_ip = 3198;
                                        continue _fun76899;
                                    case 3135:
                                        var4 = _closure3_slot20;
                                        var3 = var4.add;
                                        var2 = var0.id;
                                        var2 = var3.bind(var4)(var2);
                                        _fun76899_ip = 3198;
                                        continue _fun76899;
                                    case 3156:
                                        var4 = _closure3_slot20;
                                        var3 = var4.add;
                                        var2 = var0.id;
                                        var2 = var3.bind(var4)(var2);
                                        var2 = undefined;
                                        return var2;
                                    case 3179:
                                        var2 = _closure3_slot20;
                                        var1 = var2.add;
                                        var0 = var0.id;
                                        var0 = var1.bind(var2)(var0);
                                    case 3198:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var2 = var4.bind(var14)(var2);
                            var4 = _closure2_slot124;
                            var2 = {};
                            var2.forceRender = var13;
                            var2.updateMessageIds = var12;
                            var2.scrollToMessageId = var11;
                            var2.jumpTargetId = var10;
                            var2.jumpType = var9;
                            var2.focusTargetId = var8;
                            var2.ignoreEmbedDescriptionCache = var7;
                            var7 = _closure2_slot135;
                            var2.messagesNewlyLoaded = var7;
                            var2.shouldInitialScroll = var6;
                            var2.minimizeScrolling = var5;
                            var2 = var4.bind(var3)(var2);
                            var4 = _closure2_slot112;
                            var2 = false;
                            var2 = var4.bind(var3)(var2);
                            var2 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var1 = 82;
                            var1 = var4[var1];
                            var3 = var2.bind(var3)(var1);
                            var2 = var3.recordTimings;
                            var1 = _closure2_slot7;
                            var0 = _closure2_slot6;
                            var0 = var2.bind(var3)(var1, var0);
                        case 4274:
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
                    var3 = _closure2_slot122;
                    var0.findMessageIndex = var3;
                    var3 = _closure2_slot124;
                    var0.updateRows = var3;
                    var3 = _closure2_slot123;
                    var0.scrollToMessageId = var3;
                    var3 = function() {
                        _fun76903: for (var _fun76903_ip = 0;;) switch (_fun76903_ip) {
                            case 0:
                                var6 = arguments[0];
                                var0 = undefined;
                                if (!(var6 === var0)) {
                                    _fun76903_ip = 11;
                                    continue _fun76903
                                }
                            case 9:
                                var6 = true;
                            case 11:
                                var2 = _closure1_slot0;
                                var3 = _closure1_slot2;
                                var1 = 82;
                                var1 = var3[var1];
                                var5 = var2.bind(var0)(var1);
                                var4 = var5.scrollToBottom;
                                var10 = _closure2_slot104;
                                var9 = _closure2_slot57;
                                var8 = _closure2_slot130;
                                var11 = var5;
                                var7 = var6;
                                var1 = var11[var4](var10, var9, var8, var7, var6);
                                return var0;
                        }
                    };
                    var0.scrollToBottom = var3;
                    var3 = function() {
                        _fun76904: for (var _fun76904_ip = 0;;) switch (_fun76904_ip) {
                            case 0:
                                var4 = arguments[0];
                                var2 = undefined;
                                if (!(var4 === var2)) {
                                    _fun76904_ip = 11;
                                    continue _fun76904
                                }
                            case 9:
                                var4 = true;
                            case 11:
                                var1 = _closure1_slot0;
                                var3 = _closure1_slot2;
                                var0 = 82;
                                var0 = var3[var0];
                                var3 = var1.bind(var2)(var0);
                                var2 = var3.scrollToTop;
                                var1 = _closure2_slot104;
                                var0 = _closure2_slot57;
                                var0 = var2.bind(var3)(var1, var0, var4);
                                return var0;
                        }
                    };
                    var0.scrollToTop = var3;
                    var3 = function arg0() {
                        _fun76905: for (var _fun76905_ip = 0;;) switch (_fun76905_ip) {
                            case 0:
                                var5 = arguments[1];
                                var2 = undefined;
                                if (!(var5 === var2)) {
                                    _fun76905_ip = 11;
                                    continue _fun76905
                                }
                            case 9:
                                var5 = true;
                            case 11:
                                var1 = _closure1_slot0;
                                var3 = _closure1_slot2;
                                var0 = 82;
                                var0 = var3[var0];
                                var4 = var1.bind(var2)(var0);
                                var3 = var4.scrollToRelativeOffset;
                                var9 = _closure2_slot104;
                                var8 = _closure2_slot57;
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
                        var0 = 82;
                        var1 = var1[var0];
                        var0 = undefined;
                        var3 = var2.bind(var0)(var1);
                        var2 = var3.scrollToTopMessage;
                        var1 = _closure2_slot104;
                        var0 = _closure2_slot113;
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                    };
                    var0.scrollToTopMessage = var3;
                    var3 = function() {
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var0 = 82;
                        var1 = var1[var0];
                        var0 = undefined;
                        var5 = var2.bind(var0)(var1);
                        var4 = var5.jumpToPresent;
                        var3 = _closure2_slot6;
                        var2 = _closure2_slot1;
                        var1 = function() { // Environment: var1
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 82;
                            var1 = var1[var0];
                            var0 = undefined;
                            var6 = var2.bind(var0)(var1);
                            var5 = var6.scrollToBottom;
                            var10 = _closure2_slot104;
                            var9 = _closure2_slot57;
                            var8 = _closure2_slot130;
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
                        _fun76909: for (var _fun76909_ip = 0;;) switch (_fun76909_ip) {
                            case 0:
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 82;
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
                                var4 = _closure2_slot110;
                                var0.hasJumpedToOriginalPost = var4;
                                var4 = _closure2_slot57;
                                var0.useReducedMotion = var4;
                                var5 = _closure2_slot45;
                                var4 = null;
                                var5 = var4 != var5;
                                if (!var5) {
                                    _fun76909_ip = 96;
                                    continue _fun76909
                                }
                            case 92:
                                var4 = _closure2_slot45;
                            case 96:
                                var0.oldestUnreadMessageId = var4;
                                var5 = _closure2_slot113;
                                var4 = var5.getPreviousRows;
                                var4 = var4.bind(var5)();
                                var0.chatManagerRows = var4;
                                var4 = _closure2_slot122;
                                var0.findMessageIndex = var4;
                                var3 = _closure2_slot104;
                                var0.chatRef = var3;
                                var3 = function() {
                                    var2 = _closure1_slot0;
                                    var1 = _closure1_slot2;
                                    var0 = 82;
                                    var1 = var1[var0];
                                    var0 = undefined;
                                    var4 = var2.bind(var0)(var1);
                                    var3 = var4.loadMoreBefore;
                                    var2 = _closure2_slot7;
                                    var1 = _closure2_slot6;
                                    var0 = function(arg0) { // Environment: var0
                                        var2 = _closure2_slot106;
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
                        var0 = 82;
                        var1 = var1[var0];
                        var0 = undefined;
                        var2 = var2.bind(var0)(var1);
                        var1 = var2.getChatRef;
                        var0 = _closure2_slot104;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.getChatRef = var2;
                    var2 = _closure2_slot125;
                    var0.maybeRescrollToMessageId = var2;
                    var2 = _closure2_slot126;
                    var0.clearRows = var2;
                    var1 = _closure2_slot127;
                    var0.getVisibleMessages = var1;
                    return var0;
                };
                var12 = var32.bind(var4)(var14, var12, var17);
                var17 = var4.useCallback;
                var14 = _closure1_slot3;
                var12 = function*() { // Environment: var0
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun76914: for (var _fun76914_ip = 0;;) switch (_fun76914_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun76914_ip = 140;
                                    continue _fun76914
                                }
                            case 10:
                                var3 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var1 = 82;
                                var1 = var2[var1];
                                var2 = undefined;
                                var4 = var3.bind(var2)(var1);
                                var3 = var4.handleTapNavBar;
                                var1 = {};
                                var6 = _closure2_slot1;
                                var1.channel = var6;
                                var6 = _closure2_slot57;
                                var1.useReducedMotion = var6;
                                var6 = _closure2_slot105;
                                var6 = var6.isNearTop;
                                var1.isNearTop = var6;
                                var6 = _closure2_slot6;
                                var1.messages = var6;
                                var6 = _closure2_slot122;
                                var1.findMessageIndex = var6;
                                var6 = function() {
                                    _fun76915: for (var _fun76915_ip = 0;;) switch (_fun76915_ip) {
                                        case 0:
                                            var4 = arguments[0];
                                            var2 = undefined;
                                            if (!(var4 === var2)) {
                                                _fun76915_ip = 11;
                                                continue _fun76915
                                            }
                                        case 9:
                                            var4 = true;
                                        case 11:
                                            var1 = _closure1_slot0;
                                            var3 = _closure1_slot2;
                                            var0 = 82;
                                            var0 = var3[var0];
                                            var3 = var1.bind(var2)(var0);
                                            var2 = var3.scrollToTop;
                                            var1 = _closure2_slot104;
                                            var0 = _closure2_slot57;
                                            var0 = var2.bind(var3)(var1, var0, var4);
                                            return var0;
                                    }
                                };
                                var1.scrollToTop = var6;
                                var5 = _closure2_slot104;
                                var1.chatRef = var5;
                                var1 = var3.bind(var4)(var1);
                                SaveGenerator(address = 128);
                            case 126:
                                return var1;
                            case 128:
                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                                if (var3) {
                                    _fun76914_ip = 137;
                                    continue _fun76914
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
                    var0 = 101;
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
                    var0 = 102;
                    var1 = var3[var0];
                    var0 = undefined;
                    var5 = var2.bind(var0)(var1);
                    var4 = var5.getNativeSyntheticEventData;
                    var1 = arg0;
                    var1 = var4.bind(var5)(var1);
                    var6 = var1.messageId;
                    var1 = 82;
                    var1 = var3[var1];
                    var5 = var2.bind(var0)(var1);
                    var4 = var5.handleLongPressSticker;
                    var3 = _closure2_slot107;
                    var2 = _closure2_slot124;
                    var2 = var4.bind(var5)(var6, var3, var2);
                    var1 = _closure2_slot108;
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
                    var0 = 82;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.handleTapTableView;
                    var1 = _closure2_slot3;
                    var0 = _closure2_slot84;
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
                    _fun76919: for (var _fun76919_ip = 0;;) switch (_fun76919_ip) {
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
                                _fun76919_ip = 46;
                                continue _fun76919
                            }
                        case 42:
                            var0 = var1 != var5;
                        case 46:
                            if (!var0) {
                                _fun76919_ip = 53;
                                continue _fun76919
                            }
                        case 49:
                            var0 = var1 != var4;
                        case 53:
                            if (!var0) {
                                _fun76919_ip = 60;
                                continue _fun76919
                            }
                        case 56:
                            var0 = var1 != var3;
                        case 60:
                            if (!var0) {
                                _fun76919_ip = 122;
                                continue _fun76919
                            }
                        case 63:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 82;
                            var1 = var1[var0];
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.handleFirstLayout;
                            var11 = function(arg0) { // Environment: var0
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 82;
                                var1 = var1[var0];
                                var0 = undefined;
                                var2 = var2.bind(var0)(var1);
                                var1 = var2.handleVisibleMessagesChange;
                                var0 = {};
                                var6 = arg0;
                                var7 = var0;
                                var3 = copyDataProperties(var7, var6);
                                var5 = _closure2_slot113;
                                var4 = 'chatManager';
                                var0[var4] = var5;
                                var5 = _closure2_slot88;
                                var4 = 'shouldTrackAnnouncementMessageViews';
                                var0[var4] = var5;
                                var5 = _closure2_slot89;
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
                        case 122:
                            var0 = undefined;
                            return var0;
                    }
                };
                var13 = var12.bind(var4)(var1, var2);
                var12 = var4.useCallback;
                var2 = function(arg0) { // Environment: var0
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 82;
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
                    _fun76922: for (var _fun76922_ip = 0;;) switch (_fun76922_ip) {
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
                                _fun76922_ip = 46;
                                continue _fun76922
                            }
                        case 42:
                            var0 = var1 != var5;
                        case 46:
                            if (!var0) {
                                _fun76922_ip = 53;
                                continue _fun76922
                            }
                        case 49:
                            var0 = var1 != var4;
                        case 53:
                            if (!var0) {
                                _fun76922_ip = 60;
                                continue _fun76922
                            }
                        case 56:
                            var0 = var1 != var3;
                        case 60:
                            if (!var0) {
                                _fun76922_ip = 122;
                                continue _fun76922
                            }
                        case 63:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 82;
                            var1 = var1[var0];
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.handleMessageVisibilityChanged;
                            var11 = function(arg0) { // Environment: var0
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 82;
                                var1 = var1[var0];
                                var0 = undefined;
                                var2 = var2.bind(var0)(var1);
                                var1 = var2.handleVisibleMessagesChange;
                                var0 = {};
                                var6 = arg0;
                                var7 = var0;
                                var3 = copyDataProperties(var7, var6);
                                var5 = _closure2_slot113;
                                var4 = 'chatManager';
                                var0[var4] = var5;
                                var5 = _closure2_slot88;
                                var4 = 'shouldTrackAnnouncementMessageViews';
                                var0[var4] = var5;
                                var5 = _closure2_slot89;
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
                        case 122:
                            var0 = undefined;
                            return var0;
                    }
                };
                var11 = var2.bind(var4)(var0, var1);
                var2 = _closure1_slot61;
                var1 = _closure1_slot60;
                var0 = {};
                var7 = _closure1_slot59;
                var6 = _closure1_slot1;
                var9 = _closure1_slot2;
                var4 = 103;
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
                var5 = 104;
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
    var1 = var3.bind(var6)(var1);
    var3 = 'MessagesFunctional';
    var1.displayName = var3;
    var3 = 105;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/messages/native/MessagesFunctional.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 31, 1298, 1371, 5617, 3413, 9748, 4329, 3907, 7856, 4700, 1590, 4221, 5307, 6632, 6484, 3293, 6490, 6785, 6487, 9749, 6599, 6763, 6604, 9750, 6494, 4232, 9204, 3052, 6435, 1676, 3155, 1216, 6495, 6820, 1672, 1410, 4198, 3282, 4213, 3050, 3569, 3906, 6576, 1613, 3480, 660, 1615, 33, 3, 566, 1348, 9751, 9754, 9756, 1304, 9760, 5275, 6610, 3068, 6646, 8372, 9764, 9765, 6787, 6827, 9766, 3873, 9206, 9035, 9198, 9767, 4212, 9200, 6784, 9768, 9770, 6799, 9771, 6478, 9773, 9177, 9193, 14, 9774, 4215, 478, 9192, 9781, 22, 9782, 4029, 9196, 5193, 802, 5541, 5268, 628, 21, 11508, 9165, 9176, 9619, 11509, 2]);