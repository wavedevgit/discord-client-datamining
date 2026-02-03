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
        _fun77207: for (var _fun77207_ip = 0;;) switch (_fun77207_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun77207_ip = 46;
                    continue _fun77207
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun77207_ip = 55;
                    continue _fun77207
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun77207_ip = 345;
                    continue _fun77207
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun77207_ip = 323;
                    continue _fun77207
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun77207_ip = 283;
                    continue _fun77207
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun77207_ip = 270;
                    continue _fun77207
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
                    _fun77207_ip = 163;
                    continue _fun77207
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun77207_ip = 179;
                    continue _fun77207
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun77207_ip = 249;
                    continue _fun77207
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun77207_ip = 249;
                    continue _fun77207
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun77207_ip = 234;
                    continue _fun77207
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun77207_ip = 247;
                    continue _fun77207
                }
            case 234:
                var8 = _closure1_slot68;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun77207_ip = 265;
                continue _fun77207;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun77207_ip = 283;
                continue _fun77207;
            case 270:
                var6 = _closure1_slot68;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun77207_ip = 323;
                    continue _fun77207
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
                    _fun77207_ip = 330;
                    continue _fun77207
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun77208: for (var _fun77208_ip = 0;;) switch (_fun77208_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun77208_ip = 56;
                                continue _fun77208
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
                            _fun77208_ip = 67;
                            continue _fun77208;
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
        _fun77209: for (var _fun77209_ip = 0;;) switch (_fun77209_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun77209_ip = 23;
                    continue _fun77209
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun77209_ip = 33;
                    continue _fun77209
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
                    _fun77209_ip = 70;
                    continue _fun77209
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun77209_ip = 55;
                    continue _fun77209
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
        _fun77210: for (var _fun77210_ip = 0;;) switch (_fun77210_ip) {
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
                    _fun77210_ip = 242;
                    continue _fun77210
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
                var1 = 56;
                var1 = var16[var1];
                var6 = var14.bind(var3)(var1);
                var1 = var6.useIsMessageSwipeActionsEnabled;
                var44 = var1.bind(var6)();
                var _closure2_slot20 = var44;
                var131 = 57;
                var1 = var16[var131];
                var6 = var14.bind(var3)(var1);
                var1 = var6.useMessageAuthorActivities;
                var100 = var1.bind(var6)(var8);
                var _closure2_slot21 = var100;
                var1 = var16[var131];
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
                    var0 = 59;
                    var3 = var3[var0];
                    var0 = undefined;
                    var0 = var4.bind(var0)(var3);
                    var0 = var0.isNotNullish;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var113 = var30.bind(var31)(var28, var26, var27);
                var _closure2_slot29 = var113;
                var26 = var16[var2];
                var30 = var14.bind(var3)(var26);
                var28 = var30.useStateFromStoresArray;
                var27 = new Array(2);
                var27[0] = var1;
                var26 = _closure1_slot47;
                var27[1] = var26;
                var26 = function() { // Environment: var0
                    _fun77221: for (var _fun77221_ip = 0;;) switch (_fun77221_ip) {
                        case 0:
                            var0 = new Array(0);
                            var _closure3_slot0 = var0;
                            var5 = function arg0() {
                                _fun77222: for (var _fun77222_ip = 0;;) switch (_fun77222_ip) {
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
                                            _fun77222_ip = 83;
                                            continue _fun77222
                                        }
                                    case 77:
                                        var2 = var1.details;
                                    case 83:
                                        if (!(var3 != var2)) {
                                            _fun77222_ip = 144;
                                            continue _fun77222
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
                                _fun77221_ip = 90;
                                continue _fun77221
                            }
                        case 65:
                            var1 = var2.value;
                            var1 = var5.bind(var4)(var1);
                            var6 = var3.bind(var4)();
                            var1 = var6.done;
                            var2 = var6;
                            if (!var1) {
                                _fun77221_ip = 65;
                                continue _fun77221
                            }
                        case 90:
                            return var0;
                    }
                };
                var111 = var28.bind(var30)(var27, var26);
                var _closure2_slot30 = var111;
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
                var112 = var28.bind(var30)(var27, var26);
                var _closure2_slot31 = var112;
                var26 = var16[var2];
                var28 = var14.bind(var3)(var26);
                var27 = var28.useStateFromStoresArray;
                var26 = new Array(1);
                var26[0] = var1;
                var1 = function() { // Environment: var0
                    _fun77228: for (var _fun77228_ip = 0;;) switch (_fun77228_ip) {
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
                                _fun77228_ip = 148;
                                continue _fun77228
                            }
                        case 54:
                            var10 = var2.value;
                            var1 = _closure1_slot4;
                            var1 = var1.bind(var8)(var10, var4);
                            var10 = var1[var6];
                            var1 = var1[var3];
                            var10 = var1.isLaunching;
                            if (!var10) {
                                _fun77228_ip = 96;
                                continue _fun77228
                            }
                        case 86:
                            var11 = var1.componentId;
                            var10 = var5 != var11;
                        case 96:
                            if (!var10) {
                                _fun77228_ip = 114;
                                continue _fun77228
                            }
                        case 99:
                            var11 = var1.componentId;
                            var11 = var11.length;
                            var10 = var11 > var6;
                        case 114:
                            if (!var10) {
                                _fun77228_ip = 133;
                                continue _fun77228
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
                                _fun77228_ip = 54;
                                continue _fun77228
                            }
                        case 148:
                            return var0;
                    }
                };
                var110 = var27.bind(var28)(var26, var1);
                var _closure2_slot32 = var110;
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
                var1 = 60;
                var1 = var16[var1];
                var26 = var14.bind(var3)(var1);
                var1 = var26.useCodedLinksExperimentEmbeds;
                var90 = var1.bind(var26)();
                var _closure2_slot36 = var90;
                var1 = 61;
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
                        _fun77235: for (var _fun77235_ip = 0;;) switch (_fun77235_ip) {
                            case 0:
                                var2 = _closure1_slot28;
                                var1 = var2.getRelevantUserTrialOffer;
                                var0 = arg0;
                                var1 = var1.bind(var2)(var0);
                                var0 = null;
                                var2 = var0 == var1;
                                var0 = undefined;
                                if (var2) {
                                    _fun77235_ip = 37;
                                    continue _fun77235
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
                var105 = var27.bind(var28)(var26, var1);
                var _closure2_slot40 = var105;
                var1 = 62;
                var1 = var16[var1];
                var27 = var14.bind(var3)(var1);
                var26 = var27.useTrialOffer;
                var1 = _closure1_slot61;
                var84 = var26.bind(var27)(var1);
                var _closure2_slot41 = var84;
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
                    _fun77238: for (var _fun77238_ip = 0;;) switch (_fun77238_ip) {
                        case 0:
                            var2 = _closure1_slot30;
                            var1 = var2.getPendingReply;
                            var0 = _closure2_slot7;
                            var1 = var1.bind(var2)(var0);
                            var0 = null;
                            var2 = var0 == var1;
                            var0 = undefined;
                            if (var2) {
                                _fun77238_ip = 46;
                                continue _fun77238
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
                    _fun77240: for (var _fun77240_ip = 0;;) switch (_fun77240_ip) {
                        case 0:
                            var2 = _closure2_slot8;
                            var0 = null;
                            var0 = var0 != var2;
                            if (!var0) {
                                _fun77240_ip = 38;
                                continue _fun77240
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
                    var0 = _closure1_slot58;
                    var1 = var0.SEND_MESSAGES;
                    var0 = _closure2_slot1;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var78 = var28.bind(var30)(var27, var1, var26);
                var _closure2_slot47 = var78;
                var1 = 64;
                var1 = var16[var1];
                var1 = var23.bind(var3)(var1);
                var69 = var1.bind(var3)(var9);
                var _closure2_slot48 = var69;
                var1 = var16[var2];
                var28 = var14.bind(var3)(var1);
                var27 = var28.useStateFromStores;
                var1 = _closure1_slot53;
                var26 = new Array(1);
                var26[0] = var1;
                var23 = new Array(1);
                var23[0] = var70;
                var1 = function() { // Environment: var0
                    var3 = _closure1_slot53;
                    var2 = var3.getUserVoiceChannelId;
                    var1 = _closure1_slot59;
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
                    _fun77243: for (var _fun77243_ip = 0;;) switch (_fun77243_ip) {
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
                                _fun77243_ip = 124;
                                continue _fun77243
                            }
                        case 42:
                            var2 = _closure2_slot1;
                            var2 = var2.parent_id;
                            var2 = var3 != var2;
                            var0 = null;
                            if (!var2) {
                                _fun77243_ip = 124;
                                continue _fun77243
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
                var124 = var27.bind(var28)(var26, var1, var23);
                var _closure2_slot56 = var124;
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
                var126 = var28.bind(var30)(var27, var1, var26);
                var _closure2_slot61 = var126;
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
                var119 = var27.bind(var28)(var26, var1);
                var _closure2_slot62 = var119;
                var1 = var16[var2];
                var33 = var14.bind(var3)(var1);
                var30 = var33.useStateFromStores;
                var1 = _closure1_slot22;
                var28 = new Array(1);
                var28[0] = var1;
                var1 = 65;
                var1 = var16[var1];
                var1 = var14.bind(var3)(var1);
                var134 = var1.isVersionEqual;
                var136 = function() { // Environment: var0
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
                var135 = new Array(0);
                var138 = var33;
                var137 = var28;
                var1 = var138[var30](var137, var136, var135, var134, var133);
                var1 = var18.bind(var3)(var1, var29);
                var118 = var1[var12];
                var _closure2_slot63 = var118;
                var117 = var1[var6];
                var _closure2_slot64 = var117;
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
                var123 = var26.bind(var27)(var18, var1);
                var _closure2_slot65 = var123;
                var1 = 66;
                var1 = var16[var1];
                var26 = var14.bind(var3)(var1);
                var18 = var26.useIsSpamMessageRequest;
                var1 = var7.id;
                var74 = var18.bind(var26)(var1);
                var _closure2_slot66 = var74;
                var1 = 67;
                var1 = var16[var1];
                var16 = var14.bind(var3)(var1);
                var14 = var16.useIsMessageRequest;
                var1 = var7.id;
                var73 = var14.bind(var16)(var1);
                var _closure2_slot67 = var73;
                var127 = var4 != var8;
                if (!var127) {
                    _fun77210_ip = 2491;
                    continue _fun77210
                }
            case 2473:
                var1 = var8.ready;
                if (var1) {
                    _fun77210_ip = 2488;
                    continue _fun77210
                }
            case 2482:
                var1 = var8.cached;
            case 2488:
                var127 = var1;
            case 2491:
                var _closure2_slot68 = var127;
                var40 = var4 != var8;
                if (!var40) {
                    _fun77210_ip = 2508;
                    continue _fun77210
                }
            case 2502:
                var40 = var8.cached;
            case 2508:
                var _closure2_slot69 = var40;
                var130 = var4 != var8;
                if (!var130) {
                    _fun77210_ip = 2525;
                    continue _fun77210
                }
            case 2519:
                var130 = var8.ready;
            case 2525:
                if (!var130) {
                    _fun77210_ip = 2537;
                    continue _fun77210
                }
            case 2528:
                var1 = var8.loadingMore;
                var130 = !var1;
            case 2537:
                var _closure2_slot70 = var130;
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
                var125 = var26.bind(var27)(var18, var1);
                var _closure2_slot71 = var125;
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
                var120 = var26.bind(var27)(var18, var1);
                var _closure2_slot72 = var120;
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
                var122 = var27.bind(var28)(var26, var18);
                var _closure2_slot73 = var122;
                var18 = var16[var2];
                var28 = var14.bind(var3)(var18);
                var27 = var28.useStateFromStoresObject;
                var26 = new Array(1);
                var26[0] = var1;
                var18 = new Array(2);
                var18[0] = var11;
                var18[1] = var8;
                var1 = function() { // Environment: var0
                    _fun77256: for (var _fun77256_ip = 0;;) switch (_fun77256_ip) {
                        case 0:
                            var0 = _closure2_slot8;
                            var3 = null;
                            if (!(var3 != var0)) {
                                _fun77256_ip = 52;
                                continue _fun77256
                            }
                        case 15:
                            var0 = _closure2_slot6;
                            if (!(var3 != var0)) {
                                _fun77256_ip = 52;
                                continue _fun77256
                            }
                        case 23:
                            var0 = {};
                            var _closure3_slot0 = var0;
                            var3 = _closure2_slot6;
                            var2 = var3.forEach;
                            var1 = function(arg0) { // Environment: var1
                                _fun77257: for (var _fun77257_ip = 0;;) switch (_fun77257_ip) {
                                    case 0:
                                        var1 = arg0;
                                        var4 = var1.author;
                                        var2 = null;
                                        var5 = var2 == var4;
                                        var0 = undefined;
                                        var3 = undefined;
                                        if (var5) {
                                            _fun77257_ip = 27;
                                            continue _fun77257
                                        }
                                    case 22:
                                        var3 = var4.id;
                                    case 27:
                                        if (!(var2 != var3)) {
                                            _fun77257_ip = 94;
                                            continue _fun77257
                                        }
                                    case 31:
                                        var6 = _closure1_slot40;
                                        var5 = var6.getMember;
                                        var4 = _closure2_slot8;
                                        var3 = var1.author;
                                        var3 = var3.id;
                                        var3 = var5.bind(var6)(var4, var3);
                                        if (!(var2 != var3)) {
                                            _fun77257_ip = 94;
                                            continue _fun77257
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
                var121 = var27.bind(var28)(var26, var1, var18);
                var _closure2_slot74 = var121;
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
                var71 = var26.bind(var27)(var18, var1);
                var _closure2_slot75 = var71;
                var1 = 68;
                var1 = var16[var1];
                var16 = var14.bind(var3)(var1);
                var14 = var16.useCurrentUserCommunicationDisabled;
                var18 = var4 == var32;
                var1 = undefined;
                if (var18) {
                    _fun77210_ip = 2806;
                    continue _fun77210
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
                var129 = _closure1_slot2;
                var1 = var129[var2];
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
                var1 = 69;
                var1 = var129[var1];
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
                var1 = var129[var2];
                var27 = var34.bind(var3)(var1);
                var26 = var27.useStateFromStores;
                var1 = _closure1_slot33;
                var14 = new Array(1);
                var14[0] = var1;
                var1 = function() { // Environment: var0
                    _fun77260: for (var _fun77260_ip = 0;;) switch (_fun77260_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            var0 = var2.isForumPost;
                            var0 = var0.bind(var2)();
                            var2 = !var0;
                            var0 = !var2;
                            if (var2) {
                                _fun77260_ip = 48;
                                continue _fun77260
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
                var1 = var129[var2];
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
                var1 = var129[var2];
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
                var1 = var129[var2];
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
                var1 = 70;
                var1 = var129[var1];
                var14 = var34.bind(var3)(var1);
                var1 = var14.useMessageJumpAndroidKeyboardHeight;
                var77 = var1.bind(var14)();
                var _closure2_slot83 = var77;
                var1 = 71;
                var1 = var129[var1];
                var1 = var66.bind(var3)(var1);
                var1 = var1.bind(var3)();
                var _closure2_slot84 = var1;
                var14 = 72;
                var14 = var129[var14];
                var26 = var34.bind(var3)(var14);
                var14 = var26.useChannelSummariesExperiment;
                var14 = var14.bind(var26)(var7);
                var _closure2_slot85 = var14;
                var26 = var129[var2];
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
                    _fun77264: for (var _fun77264_ip = 0;;) switch (_fun77264_ip) {
                        case 0:
                            var2 = _closure2_slot85;
                            var0 = null;
                            if (!var2) {
                                _fun77264_ip = 39;
                                continue _fun77264
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
                var14 = var129[var2];
                var30 = var34.bind(var3)(var14);
                var28 = var30.useStateFromStores;
                var14 = _closure1_slot52;
                var27 = new Array(1);
                var27[0] = var14;
                var26 = function() { // Environment: var0
                    _fun77265: for (var _fun77265_ip = 0;;) switch (_fun77265_ip) {
                        case 0:
                            var1 = _closure1_slot52;
                            var0 = var1.getCurrentUser;
                            var1 = var0.bind(var1)();
                            var0 = null;
                            var2 = var0 == var1;
                            var0 = undefined;
                            if (var2) {
                                _fun77265_ip = 33;
                                continue _fun77265
                            }
                        case 27:
                            var0 = var1.displayNameStyles;
                        case 33:
                            return var0;
                    }
                };
                var41 = var28.bind(var30)(var27, var26);
                var _closure2_slot87 = var41;
                var128 = _closure1_slot5;
                var28 = var128.useEffect;
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
                    _fun77266: for (var _fun77266_ip = 0;;) switch (_fun77266_ip) {
                        case 0:
                            var1 = _closure2_slot6;
                            var1 = var1.ready;
                            var1 = !var1;
                            if (var1) {
                                _fun77266_ip = 34;
                                continue _fun77266
                            }
                        case 19:
                            var2 = _closure2_slot6;
                            var3 = var2.length;
                            var2 = 0;
                            var1 = var2 !== var3;
                        case 34:
                            if (var1) {
                                _fun77266_ip = 47;
                                continue _fun77266
                            }
                        case 37:
                            var2 = _closure2_slot6;
                            var1 = var2.hasMoreBefore;
                        case 47:
                            if (var1) {
                                _fun77266_ip = 60;
                                continue _fun77266
                            }
                        case 50:
                            var2 = _closure2_slot6;
                            var1 = var2.hasMoreAfter;
                        case 60:
                            if (var1) {
                                _fun77266_ip = 121;
                                continue _fun77266
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
                var26 = var28.bind(var128)(var26, var27);
                var26 = 74;
                var27 = var129[var26];
                var30 = var34.bind(var3)(var27);
                var28 = var30.useShouldTrackAnnouncementMessageViews;
                var27 = {};
                var27.guild = var32;
                var27.channel = var7;
                var27.messages = var8;
                var27.isMessagesReady = var127;
                var132 = 'Messages';
                var27.location = var132;
                var28 = var28.bind(var30)(var27);
                var _closure2_slot88 = var28;
                var26 = var129[var26];
                var30 = var34.bind(var3)(var26);
                var27 = var30.useShouldTrackRichPresenceInviteEmbedViews;
                var26 = {};
                var26.messages = var8;
                var26.isMessagesReady = var127;
                var27 = var27.bind(var30)(var26);
                var _closure2_slot89 = var27;
                var26 = 75;
                var26 = var129[var26];
                var30 = var34.bind(var3)(var26);
                var26 = var30.useShouldDisplaySpoilerObscurity;
                var49 = var26.bind(var30)(var7);
                var _closure2_slot90 = var49;
                var26 = 76;
                var26 = var129[var26];
                var30 = var34.bind(var3)(var26);
                var26 = var30.useIsAgeVerified;
                var55 = var26.bind(var30)();
                var _closure2_slot91 = var55;
                var32 = var128.useEffect;
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
                var26 = var32.bind(var128)(var26, var30);
                var26 = 78;
                var26 = var129[var26];
                var32 = var34.bind(var3)(var26);
                var30 = var32.useShouldDisableInteractiveComponents;
                var26 = var7.id;
                var116 = var30.bind(var32)(var26);
                var _closure2_slot92 = var116;
                var30 = _closure1_slot26;
                var26 = var7.id;
                var115 = var30.bind(var3)(var26);
                var _closure2_slot93 = var115;
                var30 = new Array(0);
                var _closure2_slot94 = var30;
                var32 = var8.forEach;
                var26 = function(arg0) { // Environment: var0
                    _fun77269: for (var _fun77269_ip = 0;;) switch (_fun77269_ip) {
                        case 0:
                            var0 = arg0;
                            var2 = var0.messageReference;
                            var1 = null;
                            var4 = var1 == var2;
                            var0 = undefined;
                            var3 = undefined;
                            if (var4) {
                                _fun77269_ip = 28;
                                continue _fun77269
                            }
                        case 22:
                            var3 = var2.message_id;
                        case 28:
                            if (!(var1 != var3)) {
                                _fun77269_ip = 49;
                                continue _fun77269
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
                var114 = var26.bind(var3)(var30);
                var _closure2_slot95 = var114;
                var26 = var129[var2];
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
                var26 = 79;
                var26 = var129[var26];
                var26 = var66.bind(var3)(var26);
                var61 = var26.bind(var3)();
                var _closure2_slot97 = var61;
                var26 = 80;
                var26 = var129[var26];
                var26 = var66.bind(var3)(var26);
                var26 = var26.bind(var3)(var8);
                var46 = var26.unloadedContentEntryMessageIds;
                var _closure2_slot98 = var46;
                var38 = var26.unloadableContentEntryMessageIds;
                var _closure2_slot99 = var38;
                var26 = var129[var2];
                var32 = var34.bind(var3)(var26);
                var30 = var32.useStateFromStores;
                var26 = new Array(1);
                var26[0] = var14;
                var14 = function() { // Environment: var0
                    _fun77271: for (var _fun77271_ip = 0;;) switch (_fun77271_ip) {
                        case 0:
                            var1 = _closure1_slot52;
                            var0 = var1.getCurrentUser;
                            var3 = var0.bind(var1)();
                            var0 = null;
                            var2 = var0 == var3;
                            var1 = undefined;
                            if (var2) {
                                _fun77271_ip = 37;
                                continue _fun77271
                            }
                        case 27:
                            var2 = var3.isStaff;
                            var1 = var2.bind(var3)();
                        case 37:
                            var0 = var0 != var1;
                            if (!var0) {
                                _fun77271_ip = 47;
                                continue _fun77271
                            }
                        case 44:
                            var0 = var1;
                        case 47:
                            return var0;
                    }
                };
                var54 = var30.bind(var32)(var26, var14);
                var _closure2_slot100 = var54;
                var14 = var129[var2];
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
                var14 = 81;
                var14 = var129[var14];
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
                var14 = var129[var2];
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
                var _closure2_slot103 = var45;
                var14 = var129[var2];
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
                var108 = var32.bind(var35)(var30, var26, var14);
                var _closure2_slot104 = var108;
                var14 = var129[var2];
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
                var107 = var30.bind(var32)(var26, var14);
                var _closure2_slot105 = var107;
                var2 = var129[var2];
                var30 = var34.bind(var3)(var2);
                var26 = var30.useStateFromStoresObject;
                var2 = _closure1_slot54;
                var14 = new Array(1);
                var14[0] = var2;
                var2 = function() { // Environment: var0
                    var3 = _closure2_slot105;
                    var2 = var3.reduce;
                    var1 = function(arg0, arg1) { // Environment: var0
                        _fun77278: for (var _fun77278_ip = 0;;) switch (_fun77278_ip) {
                            case 0:
                                var0 = arg0;
                                var1 = arg1;
                                var2 = var1.application_id;
                                var3 = null;
                                if (!(var3 != var2)) {
                                    _fun77278_ip = 69;
                                    continue _fun77278
                                }
                            case 18:
                                var6 = _closure1_slot54;
                                var5 = var6.getState;
                                var4 = var1.application_id;
                                var2 = _closure1_slot60;
                                var2 = var2.JOIN;
                                var2 = var5.bind(var6)(var4, var2);
                                if (!(var3 != var2)) {
                                    _fun77278_ip = 67;
                                    continue _fun77278
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
                var109 = var26.bind(var30)(var14, var2);
                var _closure2_slot106 = var109;
                var2 = var128.useRef;
                var26 = var2.bind(var128)(var4);
                var _closure2_slot107 = var26;
                var2 = var129[var131];
                var14 = var34.bind(var3)(var2);
                var2 = var14.useScrollState;
                var2 = var2.bind(var14)();
                var2 = var18.bind(var3)(var2, var29);
                var30 = var2[var12];
                var _closure2_slot108 = var30;
                var14 = var2[var6];
                var _closure2_slot109 = var14;
                var2 = var128.useState;
                var2 = var2.bind(var128)(var4);
                var2 = var18.bind(var3)(var2, var29);
                var29 = var2[var12];
                var _closure2_slot110 = var29;
                var2 = var2[var6];
                var _closure2_slot111 = var2;
                var6 = var129[var131];
                var12 = var34.bind(var3)(var6);
                var6 = var12.useMessagesState;
                var6 = var6.bind(var12)();
                var50 = var6.shouldForceRender;
                var _closure2_slot112 = var50;
                var37 = var6.hasJumpedToOriginalPost;
                var _closure2_slot113 = var37;
                var32 = var6.setHasJumpedToOriginalPost;
                var _closure2_slot114 = var32;
                var63 = var6.setShouldForceRender;
                var _closure2_slot115 = var63;
                var18 = var128.useMemo;
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
                var6 = var18.bind(var128)(var12, var6);
                var _closure2_slot116 = var6;
                var35 = var128.useMemo;
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
                var18 = var35.bind(var128)(var18, var12);
                var _closure2_slot117 = var18;
                var12 = var128.useRef;
                var12 = var12.bind(var128)(var33);
                var _closure2_slot118 = var12;
                var35 = var128.useRef;
                var12 = 84;
                var12 = var129[var12];
                var12 = var66.bind(var3)(var12);
                var43 = var12.prototype;
                var43 = Object.create(var43, {
                    constructor: {
                        value: var12
                    }
                });
                var138 = var43;
                var137 = var132;
                var12 = new var138[var12](var137, var136);
                var12 = var12 instanceof Object ? var12 : var43;
                var12 = var35.bind(var128)(var12);
                var _closure2_slot119 = var12;
                var12 = var128.useRef;
                var12 = var12.bind(var128)(var33);
                var _closure2_slot120 = var12;
                var35 = var128.useCallback;
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
                    var4 = _closure2_slot120;
                    var4 = var4.current;
                    var10 = var10.bind(var12)(var6, var4);
                    var4 = _closure1_slot1;
                    var3 = 86;
                    var3 = var5[var3];
                    var6 = var4.bind(var0)(var3);
                    var5 = var6.updateRows;
                    var3 = _closure2_slot107;
                    var4 = var3.current;
                    var3 = {};
                    var3.rows = var11;
                    var3.isLoadingAtTop = var10;
                    var3.scrollData = var9;
                    var3.HACK_iOSForceAnimations = var8;
                    var3.forceReload = var7;
                    var3 = var5.bind(var6)(var4, var3);
                    var1 = _closure2_slot120;
                    var1.current = var2;
                    return var0;
                };
                var12 = new Array(0);
                var33 = var35.bind(var128)(var33, var12);
                var _closure2_slot121 = var33;
                var12 = var129[var131];
                var34 = var34.bind(var3)(var12);
                var12 = var34.useChatUpdatesQueue;
                var12 = var12.bind(var34)(var26, var33);
                var _closure2_slot122 = var12;
                var35 = var128.useCallback;
                var34 = new Array(4);
                var34[0] = var12;
                var34[1] = var33;
                var33 = var30.decelerating;
                var34[2] = var33;
                var33 = var30.dragging;
                var34[3] = var33;
                var33 = function(arg0) { // Environment: var0
                    _fun77282: for (var _fun77282_ip = 0;;) switch (_fun77282_ip) {
                        case 0:
                            var2 = arg0;
                            var1 = _closure2_slot122;
                            var1 = var1.isBlocking;
                            if (var1) {
                                _fun77282_ip = 85;
                                continue _fun77282
                            }
                        case 21:
                            var1 = var2.isLoadingAtTop;
                            if (!var1) {
                                _fun77282_ip = 56;
                                continue _fun77282
                            }
                        case 30:
                            var1 = _closure2_slot108;
                            var1 = var1.decelerating;
                            if (var1) {
                                _fun77282_ip = 69;
                                continue _fun77282
                            }
                        case 43:
                            var1 = _closure2_slot108;
                            var1 = var1.dragging;
                            if (var1) {
                                _fun77282_ip = 69;
                                continue _fun77282
                            }
                        case 56:
                            var3 = _closure2_slot121;
                            var1 = undefined;
                            var1 = var3.bind(var1)(var2);
                            _fun77282_ip = 99;
                            continue _fun77282;
                        case 69:
                            var3 = _closure2_slot122;
                            var1 = var3.add;
                            var1 = var1.bind(var3)(var2);
                            _fun77282_ip = 99;
                            continue _fun77282;
                        case 85:
                            var1 = _closure2_slot122;
                            var0 = var1.add;
                            var0 = var0.bind(var1)(var2);
                        case 99:
                            var0 = undefined;
                            return var0;
                    }
                };
                var35 = var35.bind(var128)(var33, var34);
                var _closure2_slot123 = var35;
                var34 = var128.useCallback;
                var33 = new Array(26);
                var33[0] = var7;
                var33[1] = var8;
                var33[2] = var127;
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
                var33[14] = var116;
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
                    _fun77283: for (var _fun77283_ip = 0;;) switch (_fun77283_ip) {
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
                                _fun77283_ip = 124;
                                continue _fun77283
                            }
                        case 53:
                            var4 = _closure2_slot6;
                            var4 = var3 != var4;
                            var0 = null;
                            if (!var4) {
                                _fun77283_ip = 124;
                                continue _fun77283
                            }
                        case 66:
                            var2 = _closure2_slot68;
                            var0 = null;
                            if (!var2) {
                                _fun77283_ip = 124;
                                continue _fun77283
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
                                _fun77284: for (var _fun77284_ip = 0;;) switch (_fun77284_ip) {
                                    case 0:
                                        var3 = _closure2_slot116;
                                        var2 = var3.setup;
                                        var1 = _closure2_slot6;
                                        var1 = var2.bind(var3)(var1);
                                        var3 = _closure2_slot117;
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
                                        var4 = _closure2_slot110;
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
                                        var8 = _closure2_slot55;
                                        var7 = null;
                                        if (!(var7 == var8)) {
                                            _fun77284_ip = 223;
                                            continue _fun77284
                                        }
                                    case 217:
                                        var7 = new Array(0);
                                        _fun77284_ip = 227;
                                        continue _fun77284;
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
                                        var6 = 85;
                                        var6 = var8[var6];
                                        var9 = var7.bind(var4)(var6);
                                        var8 = var9.canAddNewReactions;
                                        var7 = _closure2_slot1;
                                        var6 = _closure2_slot46;
                                        var6 = var8.bind(var9)(var7, var6);
                                        var1.canAddNewReactions = var6;
                                        var6 = _closure2_slot86;
                                        var1.selectedSummary = var6;
                                        var6 = _closure2_slot116;
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
                                            _fun77284_ip = 439;
                                            continue _fun77284
                                        }
                                    case 389:
                                        var6 = var2.value;
                                        var5 = _closure2_slot117;
                                        var1 = var5.generate;
                                        var6 = var1.bind(var5)(var6);
                                        var5 = _closure2_slot116;
                                        var1 = var5.createRow;
                                        var1 = var1.bind(var5)(var6);
                                        var5 = var3.bind(var4)();
                                        var1 = var5.done;
                                        var2 = var5;
                                        if (!var1) {
                                            _fun77284_ip = 389;
                                            continue _fun77284
                                        }
                                    case 439:
                                        var1 = _closure2_slot116;
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
                var38 = var34.bind(var128)(var18, var33);
                var _closure2_slot124 = var38;
                var34 = var128.useCallback;
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
                    var1 = _closure2_slot116;
                    var0 = var1.getPreviousRows;
                    var1 = var0.bind(var1)();
                    var0 = arg0;
                    var0 = var2.bind(var3)(var0, var1);
                    return var0;
                };
                var18 = var34.bind(var128)(var18, var33);
                var _closure2_slot125 = var18;
                var34 = var128.useCallback;
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
                    _fun77286: for (var _fun77286_ip = 0;;) switch (_fun77286_ip) {
                        case 0:
                            var2 = arguments[0];
                            var0 = undefined;
                            if (!(var2 === var0)) {
                                _fun77286_ip = 13;
                                continue _fun77286
                            }
                        case 11:
                            var2 = {};
                        case 13:
                            var10 = var2.forceRender;
                            if (!(var10 === var0)) {
                                _fun77286_ip = 25;
                                continue _fun77286
                            }
                        case 23:
                            var10 = false;
                        case 25:
                            var6 = var2.forceReload;
                            var9 = var2.updateMessageIds;
                            if (!(var9 === var0)) {
                                _fun77286_ip = 69;
                                continue _fun77286
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
                                _fun77286_ip = 81;
                                continue _fun77286
                            }
                        case 79:
                            var16 = null;
                        case 81:
                            var15 = var2.jumpTargetId;
                            if (!(var15 === var0)) {
                                _fun77286_ip = 93;
                                continue _fun77286
                            }
                        case 91:
                            var15 = null;
                        case 93:
                            var19 = var2.jumpType;
                            if (!(var19 === var0)) {
                                _fun77286_ip = 138;
                                continue _fun77286
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
                                _fun77286_ip = 150;
                                continue _fun77286
                            }
                        case 148:
                            var8 = null;
                        case 150:
                            var5 = var2.ignoreEmbedDescriptionCache;
                            if (!(var5 === var0)) {
                                _fun77286_ip = 162;
                                continue _fun77286
                            }
                        case 160:
                            var5 = false;
                        case 162:
                            var7 = var2.messagesNewlyLoaded;
                            if (!(var7 === var0)) {
                                _fun77286_ip = 174;
                                continue _fun77286
                            }
                        case 172:
                            var7 = false;
                        case 174:
                            var13 = var2.shouldInitialScroll;
                            if (!(var13 === var0)) {
                                _fun77286_ip = 186;
                                continue _fun77286
                            }
                        case 184:
                            var13 = false;
                        case 186:
                            var18 = var2.minimizeScrolling;
                            if (!(var18 === var0)) {
                                _fun77286_ip = 198;
                                continue _fun77286
                            }
                        case 196:
                            var18 = false;
                        case 198:
                            var17 = var2.isRescrolling;
                            if (!(var17 === var0)) {
                                _fun77286_ip = 210;
                                continue _fun77286
                            }
                        case 208:
                            var17 = false;
                        case 210:
                            var11 = var2.overrideScrollJumpType;
                            var2 = _closure2_slot107;
                            var2 = var2.current;
                            var14 = null;
                            if (!(var14 != var2)) {
                                _fun77286_ip = 1058;
                                continue _fun77286
                            }
                        case 237:
                            var4 = _closure2_slot124;
                            var2 = {};
                            var2.forceRender = var10;
                            var2.updateMessageIds = var9;
                            var2.ignoreEmbedDescriptionCache = var5;
                            var12 = var4.bind(var0)(var2);
                            var2 = _closure2_slot118;
                            var5 = var2.current;
                            var2 = _closure2_slot86;
                            var2 = var14 != var2;
                            var10 = undefined;
                            if (!var2) {
                                _fun77286_ip = 336;
                                continue _fun77286
                            }
                        case 285:
                            var2 = _closure2_slot86;
                            var2 = var2.startId;
                            var10 = undefined;
                            if (!(var2 === var16)) {
                                _fun77286_ip = 336;
                                continue _fun77286
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
                                _fun77286_ip = 354;
                                continue _fun77286
                            }
                        case 340:
                            var4 = var12.length;
                            var2 = 0;
                            if (!(!(var4 > var2))) {
                                _fun77286_ip = 715;
                                continue _fun77286
                            }
                        case 354:
                            var2 = _closure2_slot118;
                            var2 = var2.current;
                            if (!var2) {
                                _fun77286_ip = 386;
                                continue _fun77286
                            }
                        case 366:
                            var4 = _closure2_slot122;
                            var2 = var4.hasUpdates;
                            var2 = var2.bind(var4)();
                            if (var2) {
                                _fun77286_ip = 696;
                                continue _fun77286
                            }
                        case 386:
                            var2 = _closure2_slot118;
                            var2 = var2.current;
                            if (var2) {
                                _fun77286_ip = 461;
                                continue _fun77286
                            }
                        case 398:
                            if (!(var14 != var12)) {
                                _fun77286_ip = 461;
                                continue _fun77286
                            }
                        case 402:
                            var4 = var12.length;
                            var2 = 0;
                            if (!(var2 === var4)) {
                                _fun77286_ip = 461;
                                continue _fun77286
                            }
                        case 413:
                            var4 = _closure1_slot1;
                            var9 = _closure1_slot2;
                            var2 = 86;
                            var2 = var9[var2];
                            var9 = var4.bind(var0)(var2);
                            var4 = var9.fadeIn;
                            var2 = _closure2_slot107;
                            var2 = var2.current;
                            var2 = var4.bind(var9)(var2);
                            _fun77286_ip = 999;
                            continue _fun77286;
                        case 461:
                            if (!(var14 != var16)) {
                                _fun77286_ip = 624;
                                continue _fun77286
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
                            var25 = _closure2_slot113;
                            var29 = var24;
                            var4 = var29[var23](var28, var27, var26, var25, var24);
                            if (var4) {
                                _fun77286_ip = 624;
                                continue _fun77286
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
                            var17 = _closure2_slot57;
                            var2.useReducedMotion = var17;
                            var17 = _closure2_slot107;
                            var2.chatRef = var17;
                            var17 = _closure2_slot125;
                            var2.findMessageIndex = var17;
                            var17 = _closure2_slot126;
                            var2.updateRows = var17;
                            var2 = var4.bind(var9)(var2);
                            _fun77286_ip = 999;
                            continue _fun77286;
                        case 624:
                            if (!(var14 != var8)) {
                                _fun77286_ip = 999;
                                continue _fun77286
                            }
                        case 631:
                            var2 = _closure2_slot125;
                            var17 = var2.bind(var0)(var8);
                            if (!(var14 != var17)) {
                                _fun77286_ip = 999;
                                continue _fun77286
                            }
                        case 647:
                            var4 = _closure1_slot1;
                            var9 = _closure1_slot2;
                            var2 = 86;
                            var2 = var9[var2];
                            var9 = var4.bind(var0)(var2);
                            var4 = var9.focus;
                            var2 = _closure2_slot107;
                            var2 = var2.current;
                            var2 = var4.bind(var9)(var2, var17);
                            _fun77286_ip = 999;
                            continue _fun77286;
                        case 696:
                            var4 = _closure2_slot122;
                            var2 = var4.tryFlush;
                            var2 = var2.bind(var4)();
                            _fun77286_ip = 999;
                            continue _fun77286;
                        case 715:
                            var4 = _closure1_slot1;
                            var17 = _closure1_slot2;
                            var2 = 90;
                            var2 = var17[var2];
                            var4 = var4.bind(var0)(var2);
                            var2 = {};
                            var18 = _closure2_slot116;
                            var17 = var18.getPreviousRows;
                            var17 = var17.bind(var18)();
                            var2.rows = var17;
                            var2.scrollToMessageId = var16;
                            var2.jumpTargetId = var15;
                            if (!(var14 == var11)) {
                                _fun77286_ip = 783;
                                continue _fun77286
                            }
                        case 773:
                            var14 = _closure2_slot6;
                            var11 = var14.jumpType;
                        case 783:
                            var2.jumpType = var11;
                            var11 = _closure2_slot118;
                            var11 = var11.current;
                            var11 = !var11;
                            if (var11) {
                                _fun77286_ip = 806;
                                continue _fun77286
                            }
                        case 803:
                            var11 = var13;
                        case 806:
                            var2.shouldInitialScroll = var11;
                            var11 = _closure2_slot108;
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
                                var4 = var2.bind(var0)(var1);
                                var3 = var4.getAndTrackOldestUnreadMentionOnLoad;
                                var2 = _closure2_slot1;
                                var1 = _closure2_slot6;
                                var1 = var3.bind(var4)(var2, var1);
                                return var0;
                            };
                            var2.onComputedScrollToUnread = var8;
                            var8 = var4.bind(var0)(var2);
                            var4 = _closure2_slot118;
                            var2 = true;
                            var4.current = var2;
                            var4 = _closure2_slot123;
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
                            var9 = _closure2_slot120;
                            var9 = var9.current;
                            var9 = var10.bind(var11)(var12, var9);
                            var2.isLoadingAtTop = var9;
                            var2.scrollData = var8;
                            var2.HACK_iOSForceAnimations = var7;
                            var2.forceReload = var6;
                            var2 = var4.bind(var0)(var2);
                            if (var5) {
                                _fun77286_ip = 999;
                                continue _fun77286
                            }
                        case 960:
                            var2 = _closure2_slot119;
                            var6 = var2.current;
                            var4 = var6.finish;
                            var2 = {};
                            var7 = _closure2_slot7;
                            var2.channelId = var7;
                            var7 = _closure2_slot69;
                            var2.areMessagesCached = var7;
                            var2 = var4.bind(var6)(var2);
                        case 999:
                            var2 = _closure2_slot118;
                            var2 = var2.current;
                            if (!var2) {
                                _fun77286_ip = 1024;
                                continue _fun77286
                            }
                        case 1011:
                            var4 = _closure2_slot118;
                            var4 = var4.current;
                            var2 = var4 !== var5;
                        case 1024:
                            if (!var2) {
                                _fun77286_ip = 1031;
                                continue _fun77286
                            }
                        case 1027:
                            var2 = _closure2_slot4;
                        case 1031:
                            if (!var2) {
                                _fun77286_ip = 1058;
                                continue _fun77286
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
                                var1 = _closure2_slot107;
                                var0 = _closure2_slot116;
                                var0 = var2.bind(var3)(var1, var0);
                                return var0;
                            };
                            var1 = 100;
                            var1 = var3.bind(var0)(var2, var1);
                        case 1058:
                            return var0;
                    }
                };
                var21 = var34.bind(var128)(var21, var33);
                var _closure2_slot126 = var21;
                var35 = var128.useCallback;
                var34 = new Array(4);
                var34[0] = var31;
                var34[1] = var26;
                var34[2] = var18;
                var34[3] = var21;
                var33 = function(arg0) { // Environment: var0
                    _fun77289: for (var _fun77289_ip = 0;;) switch (_fun77289_ip) {
                        case 0:
                            var1 = arg0;
                            var9 = var1.scrollToMessageId;
                            var8 = var1.jumpTargetId;
                            var0 = undefined;
                            if (!(var8 === var0)) {
                                _fun77289_ip = 23;
                                continue _fun77289
                            }
                        case 21:
                            var8 = null;
                        case 23:
                            var7 = var1.jumpType;
                            if (!(var7 === var0)) {
                                _fun77289_ip = 68;
                                continue _fun77289
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
                                _fun77289_ip = 113;
                                continue _fun77289
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
                                _fun77289_ip = 125;
                                continue _fun77289
                            }
                        case 123:
                            var5 = false;
                        case 125:
                            var4 = var1.isRescrolling;
                            if (!(var4 === var0)) {
                                _fun77289_ip = 137;
                                continue _fun77289
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
                            var5 = _closure2_slot57;
                            var1.useReducedMotion = var5;
                            var5 = _closure2_slot107;
                            var1.chatRef = var5;
                            var5 = _closure2_slot125;
                            var1.findMessageIndex = var5;
                            var4 = _closure2_slot126;
                            var1.updateRows = var4;
                            var1 = var2.bind(var3)(var1);
                            return var0;
                    }
                };
                var38 = var35.bind(var128)(var33, var34);
                var _closure2_slot127 = var38;
                var35 = var128.useCallback;
                var34 = new Array(2);
                var34[0] = var18;
                var34[1] = var21;
                var33 = function(arg0) { // Environment: var0
                    _fun77290: for (var _fun77290_ip = 0;;) switch (_fun77290_ip) {
                        case 0:
                            var5 = arguments[1];
                            var1 = arguments[2];
                            var0 = undefined;
                            if (!(var5 === var0)) {
                                _fun77290_ip = 14;
                                continue _fun77290
                            }
                        case 12:
                            var5 = false;
                        case 14:
                            if (!(var1 === var0)) {
                                _fun77290_ip = 53;
                                continue _fun77290
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
                            var7 = _closure2_slot107;
                            var2.chatRef = var7;
                            var7 = _closure2_slot125;
                            var2.findMessageIndex = var7;
                            var6 = _closure2_slot126;
                            var2.updateRows = var6;
                            var2.updateRowsEnabled = var5;
                            var2.jumpType = var1;
                            var1 = arg0;
                            var1 = var3.bind(var4)(var1, var2);
                            return var0;
                    }
                };
                var35 = var35.bind(var128)(var33, var34);
                var _closure2_slot128 = var35;
                var39 = var128.useCallback;
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
                    var12 = _closure2_slot107;
                    var11 = _closure2_slot116;
                    var10 = _closure2_slot7;
                    var9 = _closure2_slot2;
                    var8 = function(arg0) { // Environment: var1
                        var3 = _closure2_slot109;
                        var0 = undefined;
                        var2 = arg0;
                        var2 = var3.bind(var0)(var2);
                        var3 = _closure2_slot111;
                        var2 = null;
                        var2 = var3.bind(var0)(var2);
                        var2 = _closure2_slot118;
                        var1 = false;
                        var2.current = var1;
                        return var0;
                    };
                    var13 = var7;
                    var1 = var13[var6](var12, var11, var10, var9, var8, var7);
                    return var0;
                };
                var34 = var39.bind(var128)(var33, var34);
                var _closure2_slot129 = var34;
                var43 = var128.useCallback;
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
                    var4 = _closure2_slot116;
                    var0.chatManager = var4;
                    var3 = _closure2_slot7;
                    var0.channelId = var3;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var33 = var43.bind(var128)(var33, var39);
                var _closure2_slot130 = var33;
                var43 = var128.useCallback;
                var39 = new Array(6);
                var39[0] = var9;
                var39[1] = var13;
                var39[2] = var8;
                var39[3] = var64;
                var39[4] = var16;
                var39[5] = var14;
                var16 = function() { // Environment: var0
                    _fun77294: for (var _fun77294_ip = 0;;) switch (_fun77294_ip) {
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
                                    _fun77296: for (var _fun77296_ip = 0;;) switch (_fun77296_ip) {
                                        case 0:
                                            var0 = arg0;
                                            var3 = var0.id;
                                            var2 = var0.nonce;
                                            var0 = _closure4_slot0;
                                            var0 = var3 === var0;
                                            if (var0) {
                                                _fun77296_ip = 36;
                                                continue _fun77296
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
                                _fun77294_ip = 68;
                                continue _fun77294
                            }
                        case 62:
                            var2 = new Array(0);
                            _fun77294_ip = 72;
                            continue _fun77294;
                        case 68:
                            var2 = _closure2_slot55;
                        case 72:
                            var0.uploads = var2;
                            var2 = _closure2_slot78;
                            var2 = var4 != var2;
                            if (!var2) {
                                _fun77294_ip = 92;
                                continue _fun77294
                            }
                        case 88:
                            var2 = _closure2_slot78;
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
                                    var2 = _closure2_slot109;
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
                                    var2 = _closure2_slot109;
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
                var16 = var43.bind(var128)(var16, var39);
                var _closure2_slot131 = var16;
                var43 = var128.useMemo;
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
                    var3 = _closure2_slot131;
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
                var16 = var43.bind(var128)(var16, var39);
                var _closure2_slot132 = var16;
                var43 = var128.useCallback;
                var39 = new Array(7);
                var39[0] = var65;
                var39[1] = var7;
                var39[2] = var8;
                var39[3] = var12;
                var39[4] = var30;
                var39[5] = var9;
                var39[6] = var14;
                var12 = function(arg0) { // Environment: var0
                    _fun77302: for (var _fun77302_ip = 0;;) switch (_fun77302_ip) {
                        case 0:
                            var0 = arg0;
                            var5 = var0.isAtBottom;
                            var9 = var0.isNearBottom;
                            var3 = undefined;
                            if (!(var9 === var3)) {
                                _fun77302_ip = 25;
                                continue _fun77302
                            }
                        case 23:
                            var9 = false;
                        case 25:
                            var11 = var0.isNearTop;
                            if (!(var11 === var3)) {
                                _fun77302_ip = 37;
                                continue _fun77302
                            }
                        case 35:
                            var11 = false;
                        case 37:
                            var12 = var0.dragging;
                            if (!(var12 === var3)) {
                                _fun77302_ip = 49;
                                continue _fun77302
                            }
                        case 47:
                            var12 = false;
                        case 49:
                            var14 = var0.decelerating;
                            if (!(var14 === var3)) {
                                _fun77302_ip = 61;
                                continue _fun77302
                            }
                        case 59:
                            var14 = false;
                        case 61:
                            var4 = var0.isFirstMessageVisible;
                            if (!(var4 === var3)) {
                                _fun77302_ip = 73;
                                continue _fun77302
                            }
                        case 71:
                            var4 = false;
                        case 73:
                            var1 = _closure2_slot0;
                            var2 = var1.onScroll;
                            var6 = _closure2_slot1;
                            var1 = null;
                            if (!(var1 != var6)) {
                                _fun77302_ip = 524;
                                continue _fun77302
                            }
                        case 99:
                            var6 = _closure2_slot6;
                            var6 = var6.length;
                            var10 = 0;
                            if (!(var10 === var6)) {
                                _fun77302_ip = 130;
                                continue _fun77302
                            }
                        case 114:
                            var6 = _closure2_slot6;
                            var6 = var6.loadingMore;
                            if (var6) {
                                _fun77302_ip = 524;
                                continue _fun77302
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
                                _fun77302_ip = 194;
                                continue _fun77302
                            }
                        case 179:
                            if (var12) {
                                _fun77302_ip = 185;
                                continue _fun77302
                            }
                        case 182:
                            var12 = var14;
                        case 185:
                            if (var12) {
                                _fun77302_ip = 191;
                                continue _fun77302
                            }
                        case 188:
                            var12 = var13;
                        case 191:
                            var8 = var12;
                        case 194:
                            if (!var8) {
                                _fun77302_ip = 214;
                                continue _fun77302
                            }
                        case 197:
                            var13 = _closure2_slot122;
                            var12 = var13.hasUpdates;
                            var12 = var12.bind(var13)();
                            var8 = !var12;
                        case 214:
                            var12 = _closure2_slot108;
                            var12 = var12.isNearTop;
                            if (var12) {
                                _fun77302_ip = 299;
                                continue _fun77302
                            }
                        case 227:
                            if (!var11) {
                                _fun77302_ip = 299;
                                continue _fun77302
                            }
                        case 230:
                            var11 = _closure2_slot6;
                            var11 = var11.hasMoreBefore;
                            if (!var11) {
                                _fun77302_ip = 299;
                                continue _fun77302
                            }
                        case 243:
                            if (!var8) {
                                _fun77302_ip = 299;
                                continue _fun77302
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
                                var2 = _closure2_slot109;
                                var1 = {};
                                var0 = arg0;
                                var1.animated = var0;
                                var0 = undefined;
                                var0 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var11 = var14.bind(var15)(var13, var12, var11);
                            _fun77302_ip = 490;
                            continue _fun77302;
                        case 299:
                            var11 = _closure2_slot108;
                            var11 = var11.isNearBottom;
                            if (var11) {
                                _fun77302_ip = 381;
                                continue _fun77302
                            }
                        case 312:
                            if (!var9) {
                                _fun77302_ip = 381;
                                continue _fun77302
                            }
                        case 315:
                            var9 = _closure2_slot6;
                            var9 = var9.hasMoreAfter;
                            if (!var9) {
                                _fun77302_ip = 381;
                                continue _fun77302
                            }
                        case 328:
                            if (!var8) {
                                _fun77302_ip = 381;
                                continue _fun77302
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
                                var2 = _closure2_slot109;
                                var1 = {};
                                var0 = arg0;
                                var1.animated = var0;
                                var0 = undefined;
                                var0 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var7 = var11.bind(var12)(var9, var8, var7);
                            _fun77302_ip = 490;
                            continue _fun77302;
                        case 381:
                            var7 = _closure2_slot108;
                            var7 = var7.isAtBottom;
                            var7 = var7 === var5;
                            if (!var7) {
                                _fun77302_ip = 408;
                                continue _fun77302
                            }
                        case 398:
                            var8 = _closure2_slot108;
                            var7 = var8.hasHandledScroll;
                        case 408:
                            if (var7) {
                                _fun77302_ip = 490;
                                continue _fun77302
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
                                _fun77302_ip = 454;
                                continue _fun77302
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
                            var6 = _closure2_slot109;
                            var5 = {};
                            var7 = true;
                            var5.hasHandledScroll = var7;
                            var5 = var6.bind(var3)(var5);
                        case 490:
                            if (!(var1 != var2)) {
                                _fun77302_ip = 506;
                                continue _fun77302
                            }
                        case 494:
                            var1 = {};
                            var1.isFirstMessageVisible = var4;
                            var1 = var2.bind(var3)(var1);
                        case 506:
                            var1 = _closure2_slot122;
                            var0 = var1.tryFlush;
                            var0 = var0.bind(var1)();
                            var0 = true;
                            return var0;
                        case 524:
                            var0 = false;
                            return var0;
                    }
                };
                var12 = var43.bind(var128)(var12, var39);
                var _closure2_slot133 = var12;
                var43 = var128.useCallback;
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
                    _fun77305: for (var _fun77305_ip = 0;;) switch (_fun77305_ip) {
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
                            var12 = _closure2_slot107;
                            var12 = var12.current;
                            var18 = var13.bind(var15)(var12);
                            if (!(var19 !== var18)) {
                                _fun77305_ip = 182;
                                continue _fun77305
                            }
                        case 135:
                            var12 = _closure2_slot100;
                            if (!var12) {
                                _fun77305_ip = 421;
                                continue _fun77305
                            }
                        case 145:
                            var16 = _closure1_slot66;
                            var15 = var16.log;
                            var22 = _closure2_slot7;
                            var23 = 'STAFF-ACK-LOG: Ignoring outdated scroll event.';
                            var24 = var16;
                            var21 = var19;
                            var20 = var18;
                            var12 = var24[var15](var23, var22, var21, var20, var19);
                            _fun77305_ip = 421;
                            continue _fun77305;
                        case 182:
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
                            var14 = _closure2_slot116;
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
                                _fun77306: for (var _fun77306_ip = 0;;) switch (_fun77306_ip) {
                                    case 0:
                                        var2 = arg0;
                                        var8 = var2.isAtBottom;
                                        var7 = var2.isNearBottom;
                                        var0 = undefined;
                                        if (!(var7 === var0)) {
                                            _fun77306_ip = 25;
                                            continue _fun77306
                                        }
                                    case 23:
                                        var7 = false;
                                    case 25:
                                        var6 = var2.isNearTop;
                                        if (!(var6 === var0)) {
                                            _fun77306_ip = 37;
                                            continue _fun77306
                                        }
                                    case 35:
                                        var6 = false;
                                    case 37:
                                        var5 = var2.dragging;
                                        if (!(var5 === var0)) {
                                            _fun77306_ip = 49;
                                            continue _fun77306
                                        }
                                    case 47:
                                        var5 = false;
                                    case 49:
                                        var4 = var2.decelerating;
                                        if (!(var4 === var0)) {
                                            _fun77306_ip = 61;
                                            continue _fun77306
                                        }
                                    case 59:
                                        var4 = false;
                                    case 61:
                                        var3 = var2.shouldShowJumpToPresent;
                                        if (!(var3 === var0)) {
                                            _fun77306_ip = 73;
                                            continue _fun77306
                                        }
                                    case 71:
                                        var3 = false;
                                    case 73:
                                        var _closure4_slot0 = var3;
                                        var10 = var2.isFirstMessageVisible;
                                        if (!(var10 === var0)) {
                                            _fun77306_ip = 89;
                                            continue _fun77306
                                        }
                                    case 87:
                                        var10 = false;
                                    case 89:
                                        var9 = _closure2_slot133;
                                        var3 = {};
                                        var3.isAtBottom = var8;
                                        var3.isNearBottom = var7;
                                        var3.isNearTop = var6;
                                        var3.dragging = var5;
                                        var3.decelerating = var4;
                                        var3.isFirstMessageVisible = var10;
                                        var3 = var9.bind(var0)(var3);
                                        if (!var3) {
                                            _fun77306_ip = 213;
                                            continue _fun77306
                                        }
                                    case 136:
                                        var3 = _closure2_slot109;
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
                                            _fun77307: for (var _fun77307_ip = 0;;) switch (_fun77307_ip) {
                                                case 0:
                                                    var4 = _closure1_slot13;
                                                    var3 = _closure2_slot7;
                                                    var2 = _closure2_slot2;
                                                    var1 = _closure4_slot0;
                                                    if (var1) {
                                                        _fun77307_ip = 38;
                                                        continue _fun77307
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
                                _fun77305_ip = 421;
                                continue _fun77305
                            }
                        case 375:
                            var3 = _closure2_slot5;
                            var2 = var3.handleScrollPosition;
                            var1 = {};
                            var7 = _closure2_slot116;
                            var6 = var7.getPreviousRows;
                            var6 = var6.bind(var7)();
                            var1.rows = var6;
                            var1.firstVisibleMessageRowIndex = var5;
                            var1.lastVisibleMessageRowIndex = var4;
                            var1 = var2.bind(var3)(var1);
                        case 421:
                            return var0;
                    }
                };
                var22 = var43.bind(var128)(var22, var39);
                var43 = var128.useMemo;
                var39 = new Array(1);
                var39[0] = var16;
                var16 = function() { // Environment: var0
                    var0 = {};
                    var2 = function arg0() {
                        var2 = _closure2_slot132;
                        var1 = var2.handleTapImage;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapImage = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot132;
                        var1 = var2.handleTapChannel;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapChannel = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot132;
                        var1 = var2.handleLongPressChannel;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleLongPressChannel = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot132;
                        var1 = var2.handleTapAttachmentLink;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapAttachmentLink = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot132;
                        var1 = var2.handleLongPressAttachmentLink;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleLongPressAttachmentLink = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot132;
                        var1 = var2.handleTapCall;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapCall = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot132;
                        var1 = var2.handleTapMention;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapMention = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot132;
                        var1 = var2.handleTapCommandMention;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapCommandMention = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot132;
                        var1 = var2.handleLongPressCommandMention;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleLongPressCommandMention = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot132;
                        var1 = var2.handleTapLink;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapLink = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot132;
                        var1 = var2.handleLongPressLink;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleLongPressLink = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot132;
                        var1 = var2.handleTapReaction;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapReaction = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot132;
                        var1 = var2.handleLongPressReaction;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleLongPressReaction = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot132;
                        var1 = var2.handleOpenSticker;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleOpenSticker = var2;
                    var2 = function arg0() {
                        var3 = _closure2_slot132;
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
                        var2 = _closure2_slot132;
                        var1 = var2.handleTapUsername;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapUsername = var2;
                    var2 = function arg0() {
                        var3 = _closure2_slot132;
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
                        var2 = _closure2_slot132;
                        var1 = var2.handleTapThreadEmbed;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapThreadEmbed = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot132;
                        var1 = var2.handleTapReply;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapReply = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot132;
                        var1 = var2.handleTapSummary;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapSummary = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot132;
                        var1 = var2.handleTapSummaryJump;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapSummaryJump = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot132;
                        var1 = var2.handleLongPressMessage;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleLongPressMessage = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot132;
                        var1 = var2.handleInitiateReply;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleInitiateReply = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot132;
                        var1 = var2.handleInitiateEdit;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleInitiateEdit = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot132;
                        var1 = var2.handleInitiateThread;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleInitiateThread = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot132;
                        var1 = var2.handleTapMessage;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapMessage = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot132;
                        var1 = var2.handleTapSeparator;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapSeparator = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot132;
                        var1 = var2.handleDoubleTapMessage;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleDoubleTapMessage = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot132;
                        var1 = var2.handleTapCancelUploadItem;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapCancelUploadItem = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot132;
                        var1 = var2.handleTapInviteEmbedAccept;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapInviteEmbedAccept = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot132;
                        var1 = var2.handleTapInviteEmbed;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapInviteEmbed = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot132;
                        var1 = var2.handleTapJoinActivity;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapJoinActivity = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot132;
                        var1 = var2.handleTapJoinRichPresence;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapJoinRichPresence = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot132;
                        var1 = var2.handleTapGiftCodeEmbed;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapGiftCodeEmbed = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot132;
                        var1 = var2.handleTapGiftCodeAccept;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapGiftCodeAccept = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot132;
                        var1 = var2.handleTapReferralRedeem;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapReferralRedeem = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot132;
                        var1 = var2.handleTapEmoji;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapEmoji = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot132;
                        var1 = var2.handleTapTimestamp;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapTimestamp = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot132;
                        var1 = var2.handleTapInlineCode;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapInlineCode = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot132;
                        var1 = var2.handleTapRoleIcon;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapRoleIcon = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot132;
                        var1 = var2.handleTapGameIcon;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapGameIcon = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot132;
                        var1 = var2.handleTapSuppressNotificationsIcon;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapSuppressNotificationsIcon = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot132;
                        var1 = var2.handleTapConnectionsRoleTag;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapConnectionsRoleTag = var2;
                    var2 = function() {
                        var1 = _closure2_slot132;
                        var0 = var1.handleTapTimeoutIcon;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    var0.handleTapTimeoutIcon = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot132;
                        var1 = var2.handleTapButtonActionComponent;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapButtonActionComponent = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot132;
                        var1 = var2.handleTapSelectActionComponent;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapSelectActionComponent = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot132;
                        var1 = var2.handleTapWelcomeReply;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapWelcomeReply = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot132;
                        var1 = var2.handleTapInviteToSpeak;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapInviteToSpeak = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot132;
                        var1 = var2.handleTapAutoModerationActions;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapAutoModerationActions = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot132;
                        var1 = var2.handleTapAutoModerationFeedback;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapAutoModerationFeedback = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot132;
                        var1 = var2.handleTapFollowForumPost;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapFollowForumPost = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot132;
                        var1 = var2.handleTapShareForumPost;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapShareForumPost = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot132;
                        var1 = var2.handleTapReactionOverflow;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapReactionOverflow = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot132;
                        var1 = var2.handleCopyText;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleCopyText = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot132;
                        var1 = var2.handleTapOpTag;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapOpTag = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot132;
                        var1 = var2.handleTapTag;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapTag = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot132;
                        var1 = var2.handleMediaAttachmentPlaybackStarted;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleMediaAttachmentPlaybackStarted = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot132;
                        var1 = var2.handleMediaAttachmentPlaybackEnded;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleMediaAttachmentPlaybackEnded = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot132;
                        var1 = var2.handleVoiceMessagePlaybackFailed;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handlerVoiceMessagePlaybackFailed = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot132;
                        var1 = var2.handleTapPostPreviewEmbed;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapPostPreviewEmbed = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot132;
                        var1 = var2.handleTapDismissMediaPostSharePrompt;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapDismissMediaPostSharePrompt = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot132;
                        var1 = var2.handleTapChannelPromptButton;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapChannelPromptButton = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot132;
                        var1 = var2.handleTapObscuredMediaLearnMore;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapObscuredMediaLearnMore = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot132;
                        var1 = var2.onTapObscuredMediaToggle;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapObscuredMediaToggle = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot132;
                        var1 = var2.handleTapSafetyPolicyNoticeEmbed;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapSafetyPolicyNoticeEmbed = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot132;
                        var1 = var2.handleTapSafetySystemNotificationCta;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapSafetySystemNotificationCta = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot132;
                        var1 = var2.handleTapPollAnswer;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapPollAnswer = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot132;
                        var1 = var2.handleTapPollSubmitVote;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapPollSubmitVote = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot132;
                        var1 = var2.handleTapPollAction;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapPollAction = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot132;
                        var1 = var2.handleLongPressPollImage;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleLongPressPollImage = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot132;
                        var1 = var2.handleTapCtaButton;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapCtaButton = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot132;
                        var1 = var2.handleMessageAccessibilityAction;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleMessageAccessibilityAction = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot132;
                        var1 = var2.handleTapForwardFooter;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapForwardFooter = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot132;
                        var1 = var2.handleTapInlineForward;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapInlineForward = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot132;
                        var1 = var2.handleTapClanTagChiplet;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapClanTagChiplet = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot132;
                        var1 = var2.handleTapContentInventoryEntryEmbed;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapContentInventoryEntryEmbed = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot132;
                        var1 = var2.handleTapCheckpointCard;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapCheckpointCard = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot132;
                        var1 = var2.handleTapSoundmoji;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapSoundmoji = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot132;
                        var1 = var2.handleTapAppMessageEmbed;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapAppMessageEmbed = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot132;
                        var1 = var2.handleTapPreviewSharedClientTheme;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleTapSharedClientTheme = var2;
                    var1 = function arg0() {
                        var2 = _closure2_slot132;
                        var1 = var2.handleSharedClientThemeViewed;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.handleSharedClientThemeViewed = var1;
                    return var0;
                };
                var16 = var43.bind(var128)(var16, var39);
                var65 = var128.useMemo;
                var43 = new Array(85);
                var43[0] = var126;
                var43[1] = var125;
                var43[2] = var122;
                var43[3] = var121;
                var43[4] = var120;
                var43[5] = var117;
                var43[6] = var80;
                var43[7] = var123;
                var43[8] = var102;
                var43[9] = var101;
                var43[10] = var116;
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
                var43[47] = var113;
                var43[48] = var112;
                var43[49] = var111;
                var43[50] = var110;
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
                var43[69] = var124;
                var43[70] = var115;
                var43[71] = var114;
                var43[72] = var46;
                var43[73] = var119;
                var43[74] = var118;
                var43[75] = var84;
                var43[76] = var83;
                var43[77] = var103;
                var43[78] = var64;
                var43[79] = var45;
                var43[80] = var44;
                var43[81] = var41;
                var43[82] = var108;
                var43[83] = var107;
                var43[84] = var109;
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
                    var2 = _closure2_slot112;
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
                    var2 = _closure2_slot87;
                    var0.currentUserDisplayNameStyles = var2;
                    var2 = _closure2_slot104;
                    var0.currentClientVoiceChannelId = var2;
                    var2 = _closure2_slot105;
                    var0.selfActivities = var2;
                    var1 = _closure2_slot106;
                    var0.activityLaunchJoinStates = var1;
                    return var0;
                };
                var43 = var65.bind(var128)(var39, var43);
                var65 = 99;
                var39 = var129[var65];
                var39 = var66.bind(var3)(var39);
                var43 = var39.bind(var3)(var43);
                var _closure2_slot134 = var43;
                var39 = var129[var65];
                var39 = var66.bind(var3)(var39);
                var128 = var39.bind(var3)(var9);
                var _closure2_slot135 = var128;
                var39 = var129[var65];
                var39 = var66.bind(var3)(var39);
                var39 = var39.bind(var3)(var130);
                var _closure2_slot136 = var39;
                var65 = var129[var65];
                var65 = var66.bind(var3)(var65);
                var65 = var65.bind(var3)(var8);
                var _closure2_slot137 = var65;
                var66 = var127;
                if (!var66) {
                    _fun77210_ip = 5492;
                    continue _fun77210
                }
            case 5489:
                var66 = !var40;
            case 5492:
                if (!var66) {
                    _fun77210_ip = 5513;
                    continue _fun77210
                }
            case 5495:
                var129 = var4 == var43;
                var40 = undefined;
                if (var129) {
                    _fun77210_ip = 5510;
                    continue _fun77210
                }
            case 5504:
                var40 = var43.isMessagesCached;
            case 5510:
                var66 = var40;
            case 5513:
                var _closure2_slot138 = var66;
                var40 = _closure1_slot5;
                var132 = var40.useEffect;
                var129 = new Array(7);
                var129[0] = var7;
                var129[1] = var9;
                var129[2] = var37;
                var129[3] = var8;
                var129[4] = var36;
                var129[5] = var128;
                var129[6] = var34;
                var128 = function() { // Environment: var0
                    _fun77391: for (var _fun77391_ip = 0;;) switch (_fun77391_ip) {
                        case 0:
                            var0 = _closure2_slot135;
                            var2 = null;
                            var1 = var2 != var0;
                            if (!var1) {
                                _fun77391_ip = 28;
                                continue _fun77391
                            }
                        case 16:
                            var4 = _closure2_slot135;
                            var0 = _closure2_slot7;
                            var1 = var4 !== var0;
                        case 28:
                            var0 = _closure2_slot135;
                            var0 = var2 == var0;
                            if (!var1) {
                                _fun77391_ip = 87;
                                continue _fun77391
                            }
                        case 39:
                            var2 = _closure2_slot129;
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
                                _fun77391_ip = 93;
                                continue _fun77391
                            }
                        case 90:
                            var0 = var1;
                        case 93:
                            if (!var0) {
                                _fun77391_ip = 226;
                                continue _fun77391
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
                            var8 = _closure2_slot45;
                            var0.oldestUnreadMessageId = var8;
                            var4 = var7[var4];
                            var9 = var6.bind(var5)(var4);
                            var8 = var9.shouldJumpToOriginalPost;
                            var13 = _closure2_slot1;
                            var12 = _closure2_slot7;
                            var11 = _closure2_slot6;
                            var10 = _closure2_slot113;
                            var14 = var9;
                            var4 = var14[var8](var13, var12, var11, var10, var9);
                            var0.shouldJumpToOriginalPost = var4;
                            var4 = _closure2_slot7;
                            var0.channelId = var4;
                            var3 = _closure2_slot119;
                            var3 = var3.current;
                            var0.tracker = var3;
                            var0 = var1.bind(var2)(var0);
                        case 226:
                            var0 = undefined;
                            return var0;
                    }
                };
                var128 = var132.bind(var40)(var128, var129);
                var129 = _closure1_slot0;
                var128 = _closure1_slot2;
                var128 = var128[var131];
                var131 = var129.bind(var3)(var128);
                var129 = var131.useMessagesLifecycle;
                var128 = {};
                var128.messages = var8;
                var128.isMessagesReady = var127;
                var128.oldestUnreadMessageId = var36;
                var128.channelId = var9;
                var128.screenIndex = var17;
                var128.updateRows = var21;
                var128.scrollToMessageId = var38;
                var128 = var129.bind(var131)(var128);
                var129 = var40.useEffect;
                var128 = new Array(3);
                var128[0] = var130;
                var128[1] = var39;
                var128[2] = var14;
                var39 = function() { // Environment: var0
                    _fun77392: for (var _fun77392_ip = 0;;) switch (_fun77392_ip) {
                        case 0:
                            var1 = _closure2_slot136;
                            var1 = !var1;
                            if (!var1) {
                                _fun77392_ip = 17;
                                continue _fun77392
                            }
                        case 13:
                            var1 = _closure2_slot70;
                        case 17:
                            if (!var1) {
                                _fun77392_ip = 40;
                                continue _fun77392
                            }
                        case 20:
                            var2 = _closure2_slot109;
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
                var39 = var129.bind(var40)(var39, var128);
                var128 = var40.useEffect;
                var39 = new Array(8);
                var39[0] = var7;
                var39[1] = var9;
                var39[2] = var8;
                var39[3] = var37;
                var39[4] = var31;
                var39[5] = var65;
                var39[6] = var127;
                var39[7] = var32;
                var32 = function() { // Environment: var0
                    _fun77393: for (var _fun77393_ip = 0;;) switch (_fun77393_ip) {
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
                            var10 = _closure2_slot113;
                            var14 = var9;
                            var3 = var14[var8](var13, var12, var11, var10, var9);
                            if (!var3) {
                                _fun77393_ip = 163;
                                continue _fun77393
                            }
                        case 60:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var2 = var2[var4];
                            var6 = var3.bind(var0)(var2);
                            var5 = var6.scrollToTop;
                            var4 = _closure2_slot107;
                            var3 = _closure2_slot57;
                            var2 = false;
                            var2 = var5.bind(var6)(var4, var3, var2);
                            var2 = _closure2_slot137;
                            var4 = null;
                            var2 = var4 == var2;
                            var3 = undefined;
                            if (var2) {
                                _fun77393_ip = 125;
                                continue _fun77393
                            }
                        case 115:
                            var2 = _closure2_slot137;
                            var3 = var2.jumpSequenceId;
                        case 125:
                            var2 = _closure2_slot6;
                            var4 = var4 == var2;
                            var2 = undefined;
                            if (var4) {
                                _fun77393_ip = 148;
                                continue _fun77393
                            }
                        case 138:
                            var4 = _closure2_slot6;
                            var2 = var4.jumpSequenceId;
                        case 148:
                            if (!(var3 === var2)) {
                                _fun77393_ip = 163;
                                continue _fun77393
                            }
                        case 152:
                            var2 = _closure2_slot114;
                            var1 = true;
                            var1 = var2.bind(var0)(var1);
                        case 163:
                            return var0;
                    }
                };
                var32 = var128.bind(var40)(var32, var39);
                var39 = var40.useEffect;
                var32 = new Array(180);
                var32[0] = var127;
                var32[1] = var8;
                var32[2] = var126;
                var32[3] = var125;
                var32[4] = var124;
                var32[5] = var123;
                var32[6] = var122;
                var32[7] = var121;
                var32[8] = var120;
                var32[9] = var119;
                var32[10] = var118;
                var32[11] = var117;
                var32[12] = var116;
                var32[13] = var115;
                var32[14] = var114;
                var32[15] = var113;
                var32[16] = var112;
                var32[17] = var111;
                var32[18] = var110;
                var32[19] = var109;
                var32[20] = var108;
                var32[21] = var107;
                var32[22] = var106;
                var32[23] = var105;
                var32[24] = var104;
                var32[25] = var103;
                var32[26] = var102;
                var32[27] = var101;
                var32[28] = var100;
                var32[29] = var99;
                var32[30] = var98;
                var32[31] = var97;
                var32[32] = var96;
                var32[33] = var95;
                var32[34] = var94;
                var32[35] = var93;
                var32[36] = var92;
                var32[37] = var91;
                var32[38] = var90;
                var32[39] = var89;
                var32[40] = var88;
                var32[41] = var87;
                var32[42] = var86;
                var32[43] = var85;
                var32[44] = var84;
                var32[45] = var83;
                var32[46] = var82;
                var32[47] = var81;
                var32[48] = var80;
                var32[49] = var79;
                var32[50] = var78;
                var32[51] = var77;
                var32[52] = var76;
                var32[53] = var75;
                var32[54] = var74;
                var32[55] = var73;
                var32[56] = var72;
                var32[57] = var71;
                var32[58] = var70;
                var32[59] = var11;
                var32[60] = var9;
                var32[61] = var7;
                var32[62] = var21;
                var32[63] = var69;
                var32[64] = var68;
                var32[65] = var67;
                var68 = var4 == var43;
                var67 = undefined;
                if (var68) {
                    _fun77210_ip = 6011;
                    continue _fun77210
                }
            case 6005:
                var67 = var43.channelThreadsVersion;
            case 6011:
                var32[66] = var67;
                var68 = var4 == var43;
                var67 = undefined;
                if (var68) {
                    _fun77210_ip = 6030;
                    continue _fun77210
                }
            case 6024:
                var67 = var43.rsvpVersion;
            case 6030:
                var32[67] = var67;
                var68 = var4 == var43;
                var67 = undefined;
                if (var68) {
                    _fun77210_ip = 6049;
                    continue _fun77210
                }
            case 6043:
                var67 = var43.repliedIds;
            case 6049:
                var32[68] = var67;
                var68 = var4 == var43;
                var67 = undefined;
                if (var68) {
                    _fun77210_ip = 6068;
                    continue _fun77210
                }
            case 6062:
                var67 = var43.hasLoadedExperiments;
            case 6068:
                var32[69] = var67;
                var68 = var4 == var43;
                var67 = undefined;
                if (var68) {
                    _fun77210_ip = 6087;
                    continue _fun77210
                }
            case 6081:
                var67 = var43.communicationDisabledVersion;
            case 6087:
                var32[70] = var67;
                var68 = var4 == var43;
                var67 = undefined;
                if (var68) {
                    _fun77210_ip = 6106;
                    continue _fun77210
                }
            case 6100:
                var67 = var43.messageAuthorMembers;
            case 6106:
                var32[71] = var67;
                var68 = var4 == var43;
                var67 = undefined;
                if (var68) {
                    _fun77210_ip = 6125;
                    continue _fun77210
                }
            case 6119:
                var67 = var43.failedMessagesVersion;
            case 6125:
                var32[72] = var67;
                var68 = var4 == var43;
                var67 = undefined;
                if (var68) {
                    _fun77210_ip = 6144;
                    continue _fun77210
                }
            case 6138:
                var67 = var43.interactionStates;
            case 6144:
                var32[73] = var67;
                var68 = var4 == var43;
                var67 = undefined;
                if (var68) {
                    _fun77210_ip = 6163;
                    continue _fun77210
                }
            case 6157:
                var67 = var43.interactionComponentStates;
            case 6163:
                var32[74] = var67;
                var68 = var4 == var43;
                var67 = undefined;
                if (var68) {
                    _fun77210_ip = 6182;
                    continue _fun77210
                }
            case 6176:
                var67 = var43.interactionComponentStatesVersion;
            case 6182:
                var32[75] = var67;
                var68 = var4 == var43;
                var67 = undefined;
                if (var68) {
                    _fun77210_ip = 6201;
                    continue _fun77210
                }
            case 6195:
                var67 = var43.shouldDisableInteractiveComponents;
            case 6201:
                var32[76] = var67;
                var68 = var4 == var43;
                var67 = undefined;
                if (var68) {
                    _fun77210_ip = 6220;
                    continue _fun77210
                }
            case 6214:
                var67 = var43.channelPolls;
            case 6220:
                var32[77] = var67;
                var68 = var4 == var43;
                var67 = undefined;
                if (var68) {
                    _fun77210_ip = 6239;
                    continue _fun77210
                }
            case 6233:
                var67 = var43.messageReferencePolls;
            case 6239:
                var32[78] = var67;
                var68 = var4 == var43;
                var67 = undefined;
                if (var68) {
                    _fun77210_ip = 6258;
                    continue _fun77210
                }
            case 6252:
                var67 = var43.activityInstanceIds;
            case 6258:
                var32[79] = var67;
                var68 = var4 == var43;
                var67 = undefined;
                if (var68) {
                    _fun77210_ip = 6277;
                    continue _fun77210
                }
            case 6271:
                var67 = var43.activityParticipants;
            case 6277:
                var32[80] = var67;
                var68 = var4 == var43;
                var67 = undefined;
                if (var68) {
                    _fun77210_ip = 6296;
                    continue _fun77210
                }
            case 6290:
                var67 = var43.activityInstancePresenceDetails;
            case 6296:
                var32[81] = var67;
                var68 = var4 == var43;
                var67 = undefined;
                if (var68) {
                    _fun77210_ip = 6315;
                    continue _fun77210
                }
            case 6309:
                var67 = var43.messagesWithActivitiesLaunching;
            case 6315:
                var32[82] = var67;
                var68 = var4 == var43;
                var67 = undefined;
                if (var68) {
                    _fun77210_ip = 6334;
                    continue _fun77210
                }
            case 6328:
                var67 = var43.activityLaunchJoinStates;
            case 6334:
                var32[83] = var67;
                var68 = var4 == var43;
                var67 = undefined;
                if (var68) {
                    _fun77210_ip = 6353;
                    continue _fun77210
                }
            case 6347:
                var67 = var43.currentClientVoiceChannelId;
            case 6353:
                var32[84] = var67;
                var68 = var4 == var43;
                var67 = undefined;
                if (var68) {
                    _fun77210_ip = 6372;
                    continue _fun77210
                }
            case 6366:
                var67 = var43.selfActivities;
            case 6372:
                var32[85] = var67;
                var68 = var4 == var43;
                var67 = undefined;
                if (var68) {
                    _fun77210_ip = 6391;
                    continue _fun77210
                }
            case 6385:
                var67 = var43.invalidApplicationIds;
            case 6391:
                var32[86] = var67;
                var68 = var4 == var43;
                var67 = undefined;
                if (var68) {
                    _fun77210_ip = 6410;
                    continue _fun77210
                }
            case 6404:
                var67 = var43.applicationAssetFetchingIds;
            case 6410:
                var32[87] = var67;
                var68 = var4 == var43;
                var67 = undefined;
                if (var68) {
                    _fun77210_ip = 6429;
                    continue _fun77210
                }
            case 6423:
                var67 = var43.appDirectoryEmbedApplications;
            case 6429:
                var32[88] = var67;
                var68 = var4 == var43;
                var67 = undefined;
                if (var68) {
                    _fun77210_ip = 6448;
                    continue _fun77210
                }
            case 6442:
                var67 = var43.invalidAppDirectoryEmbedApplicationIds;
            case 6448:
                var32[89] = var67;
                var68 = var4 == var43;
                var67 = undefined;
                if (var68) {
                    _fun77210_ip = 6467;
                    continue _fun77210
                }
            case 6461:
                var67 = var43.appDirectoryEmbedApplicationFetchStates;
            case 6467:
                var32[90] = var67;
                var68 = var4 == var43;
                var67 = undefined;
                if (var68) {
                    _fun77210_ip = 6486;
                    continue _fun77210
                }
            case 6480:
                var67 = var43.lazyCacheStatus;
            case 6486:
                var32[91] = var67;
                var68 = var4 == var43;
                var67 = undefined;
                if (var68) {
                    _fun77210_ip = 6505;
                    continue _fun77210
                }
            case 6499:
                var67 = var43.isFollowingForumPost;
            case 6505:
                var32[92] = var67;
                var68 = var4 == var43;
                var67 = undefined;
                if (var68) {
                    _fun77210_ip = 6524;
                    continue _fun77210
                }
            case 6518:
                var67 = var43.showMediaPostSharePrompt;
            case 6524:
                var32[93] = var67;
                var68 = var4 == var43;
                var67 = undefined;
                if (var68) {
                    _fun77210_ip = 6543;
                    continue _fun77210
                }
            case 6537:
                var67 = var43.referralTrialOfferIds;
            case 6543:
                var32[94] = var67;
                var68 = var4 == var43;
                var67 = undefined;
                if (var68) {
                    _fun77210_ip = 6562;
                    continue _fun77210
                }
            case 6556:
                var67 = var43.trialOffer;
            case 6562:
                var32[95] = var67;
                var68 = var4 == var43;
                var67 = undefined;
                if (var68) {
                    _fun77210_ip = 6581;
                    continue _fun77210
                }
            case 6575:
                var67 = var43.isPremiumTier2User;
            case 6581:
                var32[96] = var67;
                var68 = var4 == var43;
                var67 = undefined;
                if (var68) {
                    _fun77210_ip = 6600;
                    continue _fun77210
                }
            case 6594:
                var67 = var43.messageAuthorActivities;
            case 6600:
                var32[97] = var67;
                var68 = var4 == var43;
                var67 = undefined;
                if (var68) {
                    _fun77210_ip = 6619;
                    continue _fun77210
                }
            case 6613:
                var67 = var43.activityInviteMessageIds;
            case 6619:
                var32[98] = var67;
                var68 = var4 == var43;
                var67 = undefined;
                if (var68) {
                    _fun77210_ip = 6638;
                    continue _fun77210
                }
            case 6632:
                var67 = var43.resolvingGiftCodes;
            case 6638:
                var32[99] = var67;
                var68 = var4 == var43;
                var67 = undefined;
                if (var68) {
                    _fun77210_ip = 6657;
                    continue _fun77210
                }
            case 6651:
                var67 = var43.resolvedGiftCodes;
            case 6657:
                var32[100] = var67;
                var68 = var4 == var43;
                var67 = undefined;
                if (var68) {
                    _fun77210_ip = 6676;
                    continue _fun77210
                }
            case 6670:
                var67 = var43.acceptingGiftCodes;
            case 6676:
                var32[101] = var67;
                var68 = var4 == var43;
                var67 = undefined;
                if (var68) {
                    _fun77210_ip = 6695;
                    continue _fun77210
                }
            case 6689:
                var67 = var43.mediaPostPreviewEmbeds;
            case 6695:
                var32[102] = var67;
                var68 = var4 == var43;
                var67 = undefined;
                if (var68) {
                    _fun77210_ip = 6714;
                    continue _fun77210
                }
            case 6708:
                var67 = var43.explicitMediaFalsePositiveInfo;
            case 6714:
                var32[103] = var67;
                var68 = var4 == var43;
                var67 = undefined;
                if (var68) {
                    _fun77210_ip = 6733;
                    continue _fun77210
                }
            case 6727:
                var67 = var43.guildTemplates;
            case 6733:
                var32[104] = var67;
                var68 = var4 == var43;
                var67 = undefined;
                if (var68) {
                    _fun77210_ip = 6752;
                    continue _fun77210
                }
            case 6746:
                var67 = var43.buildOverrides;
            case 6752:
                var32[105] = var67;
                var68 = var4 == var43;
                var67 = undefined;
                if (var68) {
                    _fun77210_ip = 6771;
                    continue _fun77210
                }
            case 6765:
                var67 = var43.experimentEmbeds;
            case 6771:
                var32[106] = var67;
                var68 = var4 == var43;
                var67 = undefined;
                if (var68) {
                    _fun77210_ip = 6790;
                    continue _fun77210
                }
            case 6784:
                var67 = var43.quests;
            case 6790:
                var32[107] = var67;
                var68 = var4 == var43;
                var67 = undefined;
                if (var68) {
                    _fun77210_ip = 6809;
                    continue _fun77210
                }
            case 6803:
                var67 = var43.isFetchingCurrentQuests;
            case 6809:
                var32[108] = var67;
                var68 = var4 == var43;
                var67 = undefined;
                if (var68) {
                    _fun77210_ip = 6828;
                    continue _fun77210
                }
            case 6822:
                var67 = var43.showPushFeedback;
            case 6828:
                var32[109] = var67;
                var68 = var4 == var43;
                var67 = undefined;
                if (var68) {
                    _fun77210_ip = 6847;
                    continue _fun77210
                }
            case 6841:
                var67 = var43.forwardGuildsVersion;
            case 6847:
                var32[110] = var67;
                var68 = var4 == var43;
                var67 = undefined;
                if (var68) {
                    _fun77210_ip = 6866;
                    continue _fun77210
                }
            case 6860:
                var67 = var43.renderCommunicationDisabled;
            case 6866:
                var32[111] = var67;
                var68 = var4 == var43;
                var67 = undefined;
                if (var68) {
                    _fun77210_ip = 6885;
                    continue _fun77210
                }
            case 6879:
                var67 = var43.editingMessageId;
            case 6885:
                var32[112] = var67;
                var68 = var4 == var43;
                var67 = undefined;
                if (var68) {
                    _fun77210_ip = 6904;
                    continue _fun77210
                }
            case 6898:
                var67 = var43.replyingMessageId;
            case 6904:
                var32[113] = var67;
                var68 = var4 == var43;
                var67 = undefined;
                if (var68) {
                    _fun77210_ip = 6923;
                    continue _fun77210
                }
            case 6917:
                var67 = var43.oldestUnreadMessageId;
            case 6923:
                var32[114] = var67;
                var68 = var4 == var43;
                var67 = undefined;
                if (var68) {
                    _fun77210_ip = 6942;
                    continue _fun77210
                }
            case 6936:
                var67 = var43.isCallActive;
            case 6942:
                var32[115] = var67;
                var68 = var4 == var43;
                var67 = undefined;
                if (var68) {
                    _fun77210_ip = 6961;
                    continue _fun77210
                }
            case 6955:
                var67 = var43.voiceStateChannelId;
            case 6961:
                var32[116] = var67;
                var68 = var4 == var43;
                var67 = undefined;
                if (var68) {
                    _fun77210_ip = 6980;
                    continue _fun77210
                }
            case 6974:
                var67 = var43.participantsLength;
            case 6980:
                var32[117] = var67;
                var68 = var4 == var43;
                var67 = undefined;
                if (var68) {
                    _fun77210_ip = 6999;
                    continue _fun77210
                }
            case 6993:
                var67 = var43.invites;
            case 6999:
                var32[118] = var67;
                var68 = var4 == var43;
                var67 = undefined;
                if (var68) {
                    _fun77210_ip = 7018;
                    continue _fun77210
                }
            case 7012:
                var67 = var43.isSpamMessageRequest;
            case 7018:
                var32[119] = var67;
                var68 = var4 == var43;
                var67 = undefined;
                if (var68) {
                    _fun77210_ip = 7037;
                    continue _fun77210
                }
            case 7031:
                var67 = var43.isMessageRequest;
            case 7037:
                var32[120] = var67;
                var68 = var4 == var43;
                var67 = undefined;
                if (var68) {
                    _fun77210_ip = 7056;
                    continue _fun77210
                }
            case 7050:
                var67 = var43.currentUserCommunicationDisabled;
            case 7056:
                var32[121] = var67;
                var68 = var4 == var43;
                var67 = undefined;
                if (var68) {
                    _fun77210_ip = 7075;
                    continue _fun77210
                }
            case 7069:
                var67 = var43.androidKeyboardHeight;
            case 7075:
                var32[122] = var67;
                var68 = var4 == var43;
                var67 = undefined;
                if (var68) {
                    _fun77210_ip = 7094;
                    continue _fun77210
                }
            case 7088:
                var67 = var43.inlineAttachmentMedia;
            case 7094:
                var32[123] = var67;
                var68 = var4 == var43;
                var67 = undefined;
                if (var68) {
                    _fun77210_ip = 7113;
                    continue _fun77210
                }
            case 7107:
                var67 = var43.inlineEmbedMedia;
            case 7113:
                var32[124] = var67;
                var68 = var4 == var43;
                var67 = undefined;
                if (var68) {
                    _fun77210_ip = 7132;
                    continue _fun77210
                }
            case 7126:
                var67 = var43.renderEmbeds;
            case 7132:
                var32[125] = var67;
                var68 = var4 == var43;
                var67 = undefined;
                if (var68) {
                    _fun77210_ip = 7151;
                    continue _fun77210
                }
            case 7145:
                var67 = var43.renderReactions;
            case 7151:
                var32[126] = var67;
                var68 = var4 == var43;
                var67 = undefined;
                if (var68) {
                    _fun77210_ip = 7170;
                    continue _fun77210
                }
            case 7164:
                var67 = var43.animateEmoji;
            case 7170:
                var32[127] = var67;
                var68 = var4 == var43;
                var67 = undefined;
                if (var68) {
                    _fun77210_ip = 7189;
                    continue _fun77210
                }
            case 7183:
                var67 = var43.animateStickers;
            case 7189:
                var32[128] = var67;
                var68 = var4 == var43;
                var67 = undefined;
                if (var68) {
                    _fun77210_ip = 7208;
                    continue _fun77210
                }
            case 7202:
                var67 = var43.gifAutoPlay;
            case 7208:
                var32[129] = var67;
                var68 = var4 == var43;
                var67 = undefined;
                if (var68) {
                    _fun77210_ip = 7227;
                    continue _fun77210
                }
            case 7221:
                var67 = var43.containerWidth;
            case 7227:
                var32[130] = var67;
                var68 = var4 == var43;
                var67 = undefined;
                if (var68) {
                    _fun77210_ip = 7246;
                    continue _fun77210
                }
            case 7240:
                var67 = var43.guildSystemChannelFlags;
            case 7246:
                var32[131] = var67;
                var68 = var4 == var43;
                var67 = undefined;
                if (var68) {
                    _fun77210_ip = 7265;
                    continue _fun77210
                }
            case 7259:
                var67 = var43.userSettingsLocale;
            case 7265:
                var32[132] = var67;
                var68 = var4 == var43;
                var67 = undefined;
                if (var68) {
                    _fun77210_ip = 7284;
                    continue _fun77210
                }
            case 7278:
                var67 = var43.roleStyle;
            case 7284:
                var32[133] = var67;
                var68 = var4 == var43;
                var67 = undefined;
                if (var68) {
                    _fun77210_ip = 7303;
                    continue _fun77210
                }
            case 7297:
                var67 = var43.canSendMessages;
            case 7303:
                var32[134] = var67;
                var68 = var4 == var43;
                var67 = undefined;
                if (var68) {
                    _fun77210_ip = 7322;
                    continue _fun77210
                }
            case 7316:
                var67 = var43.selectedSummary;
            case 7322:
                var32[135] = var67;
                var68 = var4 == var43;
                var67 = undefined;
                if (var68) {
                    _fun77210_ip = 7341;
                    continue _fun77210
                }
            case 7335:
                var67 = var43.shouldObscureSpoiler;
            case 7341:
                var32[136] = var67;
                var68 = var4 == var43;
                var67 = undefined;
                if (var68) {
                    _fun77210_ip = 7360;
                    continue _fun77210
                }
            case 7354:
                var67 = var43.isStaff;
            case 7360:
                var32[137] = var67;
                var68 = var4 == var43;
                var67 = undefined;
                if (var68) {
                    _fun77210_ip = 7379;
                    continue _fun77210
                }
            case 7373:
                var67 = var43.isAgeVerified;
            case 7379:
                var32[138] = var67;
                var68 = var4 == var43;
                var67 = undefined;
                if (var68) {
                    _fun77210_ip = 7398;
                    continue _fun77210
                }
            case 7392:
                var67 = var43.theme;
            case 7398:
                var32[139] = var67;
                var68 = var4 == var43;
                var67 = undefined;
                if (var68) {
                    _fun77210_ip = 7417;
                    continue _fun77210
                }
            case 7411:
                var67 = var43.saturation;
            case 7417:
                var32[140] = var67;
                var68 = var4 == var43;
                var67 = undefined;
                if (var68) {
                    _fun77210_ip = 7436;
                    continue _fun77210
                }
            case 7430:
                var67 = var43.threadStartingReferenceMessage;
            case 7436:
                var32[141] = var67;
                var68 = var4 == var43;
                var67 = undefined;
                if (var68) {
                    _fun77210_ip = 7455;
                    continue _fun77210
                }
            case 7449:
                var67 = var43.unloadedContentEntryMessageIds;
            case 7455:
                var32[142] = var67;
                var68 = var4 == var43;
                var67 = undefined;
                if (var68) {
                    _fun77210_ip = 7474;
                    continue _fun77210
                }
            case 7468:
                var67 = var43.guildInviteColorsFetched;
            case 7474:
                var32[143] = var67;
                var32[144] = var66;
                var32[145] = var65;
                var65 = var30.isAtBottom;
                var32[146] = var65;
                var32[147] = var64;
                var65 = var4 == var43;
                var64 = undefined;
                if (var65) {
                    _fun77210_ip = 7515;
                    continue _fun77210
                }
            case 7509:
                var64 = var43.uploads;
            case 7515:
                var32[148] = var64;
                var32[149] = var63;
                var32[150] = var19;
                var32[151] = var62;
                var32[152] = var61;
                var32[153] = var60;
                var32[154] = var59;
                var32[155] = var58;
                var32[156] = var57;
                var32[157] = var56;
                var32[158] = var55;
                var32[159] = var54;
                var32[160] = var36;
                var55 = var4 == var43;
                var54 = undefined;
                if (var55) {
                    _fun77210_ip = 7582;
                    continue _fun77210
                }
            case 7576:
                var54 = var43.shouldForceRender;
            case 7582:
                var32[161] = var54;
                var32[162] = var53;
                var32[163] = var52;
                var32[164] = var23;
                var32[165] = var51;
                var32[166] = var50;
                var32[167] = var49;
                var32[168] = var48;
                var32[169] = var47;
                var32[170] = var46;
                var32[171] = var6;
                var32[172] = var45;
                var46 = var4 == var43;
                var45 = undefined;
                if (var46) {
                    _fun77210_ip = 7645;
                    continue _fun77210
                }
            case 7639:
                var45 = var43.guildEmojis;
            case 7645:
                var32[173] = var45;
                var32[174] = var44;
                var45 = var4 == var43;
                var44 = undefined;
                if (var45) {
                    _fun77210_ip = 7668;
                    continue _fun77210
                }
            case 7662:
                var44 = var43.enableSwipeActions;
            case 7668:
                var32[175] = var44;
                var45 = var4 == var43;
                var44 = undefined;
                if (var45) {
                    _fun77210_ip = 7687;
                    continue _fun77210
                }
            case 7681:
                var44 = var43.displayNameStylesEnabled;
            case 7687:
                var32[176] = var44;
                var32[177] = var42;
                var44 = var4 == var43;
                var42 = undefined;
                if (var44) {
                    _fun77210_ip = 7725;
                    continue _fun77210
                }
            case 7704:
                var43 = var43.currentUserDisplayNameStyles;
                var44 = var4 == var43;
                var42 = undefined;
                if (var44) {
                    _fun77210_ip = 7725;
                    continue _fun77210
                }
            case 7719:
                var42 = var43.fontId;
            case 7725:
                var32[178] = var42;
                var42 = var4 == var41;
                var4 = undefined;
                if (var42) {
                    _fun77210_ip = 7744;
                    continue _fun77210
                }
            case 7738:
                var4 = var41.fontId;
            case 7744:
                var32[179] = var4;
                var4 = function() { // Environment: var0
                    _fun77394: for (var _fun77394_ip = 0;;) switch (_fun77394_ip) {
                        case 0:
                            var1 = _closure2_slot11;
                            var7 = null;
                            if (!(var7 != var1)) {
                                _fun77394_ip = 4398;
                                continue _fun77394
                            }
                        case 18:
                            var1 = _closure2_slot134;
                            var1 = var7 == var1;
                            var3 = undefined;
                            var4 = undefined;
                            if (var1) {
                                _fun77394_ip = 43;
                                continue _fun77394
                            }
                        case 33:
                            var1 = _closure2_slot134;
                            var4 = var1.theme;
                        case 43:
                            var1 = _closure2_slot19;
                            var13 = var4 !== var1;
                            if (var13) {
                                _fun77394_ip = 85;
                                continue _fun77394
                            }
                        case 54:
                            var1 = _closure2_slot134;
                            var1 = var7 == var1;
                            var4 = undefined;
                            if (var1) {
                                _fun77394_ip = 77;
                                continue _fun77394
                            }
                        case 67:
                            var1 = _closure2_slot134;
                            var4 = var1.saturation;
                        case 77:
                            var1 = _closure2_slot59;
                            var13 = var4 !== var1;
                        case 85:
                            var14 = var13;
                            if (var14) {
                                _fun77394_ip = 122;
                                continue _fun77394
                            }
                        case 91:
                            var1 = _closure2_slot134;
                            var1 = var7 == var1;
                            var4 = undefined;
                            if (var1) {
                                _fun77394_ip = 114;
                                continue _fun77394
                            }
                        case 104:
                            var1 = _closure2_slot134;
                            var4 = var1.inlineAttachmentMedia;
                        case 114:
                            var1 = _closure2_slot12;
                            var14 = var4 !== var1;
                        case 122:
                            if (var14) {
                                _fun77394_ip = 156;
                                continue _fun77394
                            }
                        case 125:
                            var1 = _closure2_slot134;
                            var1 = var7 == var1;
                            var4 = undefined;
                            if (var1) {
                                _fun77394_ip = 148;
                                continue _fun77394
                            }
                        case 138:
                            var1 = _closure2_slot134;
                            var4 = var1.inlineEmbedMedia;
                        case 148:
                            var1 = _closure2_slot13;
                            var14 = var4 !== var1;
                        case 156:
                            if (var14) {
                                _fun77394_ip = 190;
                                continue _fun77394
                            }
                        case 159:
                            var1 = _closure2_slot134;
                            var1 = var7 == var1;
                            var4 = undefined;
                            if (var1) {
                                _fun77394_ip = 182;
                                continue _fun77394
                            }
                        case 172:
                            var1 = _closure2_slot134;
                            var4 = var1.renderEmbeds;
                        case 182:
                            var1 = _closure2_slot14;
                            var14 = var4 !== var1;
                        case 190:
                            if (var14) {
                                _fun77394_ip = 224;
                                continue _fun77394
                            }
                        case 193:
                            var1 = _closure2_slot134;
                            var1 = var7 == var1;
                            var4 = undefined;
                            if (var1) {
                                _fun77394_ip = 216;
                                continue _fun77394
                            }
                        case 206:
                            var1 = _closure2_slot134;
                            var4 = var1.renderReactions;
                        case 216:
                            var1 = _closure2_slot15;
                            var14 = var4 !== var1;
                        case 224:
                            if (var14) {
                                _fun77394_ip = 258;
                                continue _fun77394
                            }
                        case 227:
                            var1 = _closure2_slot134;
                            var1 = var7 == var1;
                            var4 = undefined;
                            if (var1) {
                                _fun77394_ip = 250;
                                continue _fun77394
                            }
                        case 240:
                            var1 = _closure2_slot134;
                            var4 = var1.animateEmoji;
                        case 250:
                            var1 = _closure2_slot16;
                            var14 = var4 !== var1;
                        case 258:
                            if (var14) {
                                _fun77394_ip = 292;
                                continue _fun77394
                            }
                        case 261:
                            var1 = _closure2_slot134;
                            var1 = var7 == var1;
                            var4 = undefined;
                            if (var1) {
                                _fun77394_ip = 284;
                                continue _fun77394
                            }
                        case 274:
                            var1 = _closure2_slot134;
                            var4 = var1.animateStickers;
                        case 284:
                            var1 = _closure2_slot17;
                            var14 = var4 !== var1;
                        case 292:
                            if (var14) {
                                _fun77394_ip = 326;
                                continue _fun77394
                            }
                        case 295:
                            var1 = _closure2_slot134;
                            var1 = var7 == var1;
                            var4 = undefined;
                            if (var1) {
                                _fun77394_ip = 318;
                                continue _fun77394
                            }
                        case 308:
                            var1 = _closure2_slot134;
                            var4 = var1.gifAutoPlay;
                        case 318:
                            var1 = _closure2_slot18;
                            var14 = var4 !== var1;
                        case 326:
                            if (var14) {
                                _fun77394_ip = 360;
                                continue _fun77394
                            }
                        case 329:
                            var1 = _closure2_slot134;
                            var1 = var7 == var1;
                            var4 = undefined;
                            if (var1) {
                                _fun77394_ip = 352;
                                continue _fun77394
                            }
                        case 342:
                            var1 = _closure2_slot134;
                            var4 = var1.containerWidth;
                        case 352:
                            var1 = _closure2_slot97;
                            var14 = var4 !== var1;
                        case 360:
                            if (var14) {
                                _fun77394_ip = 394;
                                continue _fun77394
                            }
                        case 363:
                            var1 = _closure2_slot134;
                            var1 = var7 == var1;
                            var4 = undefined;
                            if (var1) {
                                _fun77394_ip = 386;
                                continue _fun77394
                            }
                        case 376:
                            var1 = _closure2_slot134;
                            var4 = var1.guildSystemChannelFlags;
                        case 386:
                            var1 = _closure2_slot10;
                            var14 = var4 !== var1;
                        case 394:
                            if (var14) {
                                _fun77394_ip = 428;
                                continue _fun77394
                            }
                        case 397:
                            var1 = _closure2_slot134;
                            var1 = var7 == var1;
                            var4 = undefined;
                            if (var1) {
                                _fun77394_ip = 420;
                                continue _fun77394
                            }
                        case 410:
                            var1 = _closure2_slot134;
                            var4 = var1.userSettingsLocale;
                        case 420:
                            var1 = _closure2_slot77;
                            var14 = var4 !== var1;
                        case 428:
                            if (var14) {
                                _fun77394_ip = 462;
                                continue _fun77394
                            }
                        case 431:
                            var1 = _closure2_slot134;
                            var1 = var7 == var1;
                            var4 = undefined;
                            if (var1) {
                                _fun77394_ip = 454;
                                continue _fun77394
                            }
                        case 444:
                            var1 = _closure2_slot134;
                            var4 = var1.roleStyle;
                        case 454:
                            var1 = _closure2_slot58;
                            var14 = var4 !== var1;
                        case 462:
                            if (var14) {
                                _fun77394_ip = 496;
                                continue _fun77394
                            }
                        case 465:
                            var1 = _closure2_slot134;
                            var1 = var7 == var1;
                            var4 = undefined;
                            if (var1) {
                                _fun77394_ip = 488;
                                continue _fun77394
                            }
                        case 478:
                            var1 = _closure2_slot134;
                            var4 = var1.canSendMessages;
                        case 488:
                            var1 = _closure2_slot47;
                            var14 = var4 !== var1;
                        case 496:
                            if (var14) {
                                _fun77394_ip = 530;
                                continue _fun77394
                            }
                        case 499:
                            var1 = _closure2_slot134;
                            var1 = var7 == var1;
                            var4 = undefined;
                            if (var1) {
                                _fun77394_ip = 522;
                                continue _fun77394
                            }
                        case 512:
                            var1 = _closure2_slot134;
                            var4 = var1.showPushFeedback;
                        case 522:
                            var1 = _closure2_slot81;
                            var14 = var4 !== var1;
                        case 530:
                            if (var14) {
                                _fun77394_ip = 564;
                                continue _fun77394
                            }
                        case 533:
                            var1 = _closure2_slot134;
                            var1 = var7 == var1;
                            var4 = undefined;
                            if (var1) {
                                _fun77394_ip = 556;
                                continue _fun77394
                            }
                        case 546:
                            var1 = _closure2_slot134;
                            var4 = var1.selectedSummary;
                        case 556:
                            var1 = _closure2_slot86;
                            var14 = var4 !== var1;
                        case 564:
                            if (var14) {
                                _fun77394_ip = 598;
                                continue _fun77394
                            }
                        case 567:
                            var1 = _closure2_slot134;
                            var1 = var7 == var1;
                            var4 = undefined;
                            if (var1) {
                                _fun77394_ip = 590;
                                continue _fun77394
                            }
                        case 580:
                            var1 = _closure2_slot134;
                            var4 = var1.shouldObscureSpoiler;
                        case 590:
                            var1 = _closure2_slot90;
                            var14 = var4 !== var1;
                        case 598:
                            if (var14) {
                                _fun77394_ip = 632;
                                continue _fun77394
                            }
                        case 601:
                            var1 = _closure2_slot134;
                            var1 = var7 == var1;
                            var4 = undefined;
                            if (var1) {
                                _fun77394_ip = 624;
                                continue _fun77394
                            }
                        case 614:
                            var1 = _closure2_slot134;
                            var4 = var1.explicitMediaFalsePositiveInfo;
                        case 624:
                            var1 = _closure2_slot96;
                            var14 = var4 !== var1;
                        case 632:
                            if (var14) {
                                _fun77394_ip = 666;
                                continue _fun77394
                            }
                        case 635:
                            var1 = _closure2_slot134;
                            var1 = var7 == var1;
                            var4 = undefined;
                            if (var1) {
                                _fun77394_ip = 658;
                                continue _fun77394
                            }
                        case 648:
                            var1 = _closure2_slot134;
                            var4 = var1.isStaff;
                        case 658:
                            var1 = _closure2_slot100;
                            var14 = var4 !== var1;
                        case 666:
                            if (var14) {
                                _fun77394_ip = 700;
                                continue _fun77394
                            }
                        case 669:
                            var1 = _closure2_slot134;
                            var1 = var7 == var1;
                            var4 = undefined;
                            if (var1) {
                                _fun77394_ip = 692;
                                continue _fun77394
                            }
                        case 682:
                            var1 = _closure2_slot134;
                            var4 = var1.isAgeVerified;
                        case 692:
                            var1 = _closure2_slot91;
                            var14 = var4 !== var1;
                        case 700:
                            if (var14) {
                                _fun77394_ip = 734;
                                continue _fun77394
                            }
                        case 703:
                            var1 = _closure2_slot134;
                            var1 = var7 == var1;
                            var4 = undefined;
                            if (var1) {
                                _fun77394_ip = 726;
                                continue _fun77394
                            }
                        case 716:
                            var1 = _closure2_slot134;
                            var4 = var1.displayNameStylesEnabled;
                        case 726:
                            var1 = _closure2_slot60;
                            var14 = var4 !== var1;
                        case 734:
                            if (var14) {
                                _fun77394_ip = 778;
                                continue _fun77394
                            }
                        case 737:
                            var1 = _closure2_slot134;
                            var1 = var7 == var1;
                            var4 = undefined;
                            if (var1) {
                                _fun77394_ip = 760;
                                continue _fun77394
                            }
                        case 750:
                            var1 = _closure2_slot134;
                            var4 = var1.shouldForceRender;
                        case 760:
                            var1 = _closure2_slot112;
                            var1 = var4 !== var1;
                            if (!var1) {
                                _fun77394_ip = 775;
                                continue _fun77394
                            }
                        case 771:
                            var1 = _closure2_slot112;
                        case 775:
                            var14 = var1;
                        case 778:
                            var5 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var4 = 70;
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
                            var4 = _closure2_slot108;
                            var4 = var4.isAtBottom;
                            var5.isAtBottom = var4;
                            var9 = _closure2_slot116;
                            var4 = var9.getPreviousMessages;
                            var4 = var4.bind(var9)();
                            var4 = var7 != var4;
                            var5.hasPreviousMessages = var4;
                            var4 = {};
                            var9 = _closure2_slot137;
                            if (!(var7 == var9)) {
                                _fun77394_ip = 888;
                                continue _fun77394
                            }
                        case 882:
                            var9 = _closure2_slot6;
                            _fun77394_ip = 892;
                            continue _fun77394;
                        case 888:
                            var9 = _closure2_slot137;
                        case 892:
                            var4.messages = var9;
                            var9 = _closure2_slot134;
                            var10 = var7 == var9;
                            var9 = undefined;
                            if (var10) {
                                _fun77394_ip = 920;
                                continue _fun77394
                            }
                        case 910:
                            var10 = _closure2_slot134;
                            var9 = var10.androidKeyboardHeight;
                        case 920:
                            if (!(var7 == var9)) {
                                _fun77394_ip = 928;
                                continue _fun77394
                            }
                        case 924:
                            var9 = _closure2_slot83;
                        case 928:
                            var4.androidKeyboardHeight = var9;
                            var4 = var8.bind(var3)(var6, var5, var4);
                            var11 = var4.scrollToMessageId;
                            var10 = var4.jumpTargetId;
                            var9 = var4.jumpType;
                            var5 = var4.minimizeScrolling;
                            var8 = var4.focusTargetId;
                            var6 = var4.shouldInitialScroll;
                            var4 = _closure2_slot134;
                            var4 = var7 == var4;
                            var12 = undefined;
                            if (var4) {
                                _fun77394_ip = 999;
                                continue _fun77394
                            }
                        case 989:
                            var4 = _closure2_slot134;
                            var12 = var4.resolvingGiftCodes;
                        case 999:
                            var4 = _closure2_slot51;
                            var39 = var12 !== var4;
                            if (var39) {
                                _fun77394_ip = 1041;
                                continue _fun77394
                            }
                        case 1010:
                            var4 = _closure2_slot134;
                            var4 = var7 == var4;
                            var12 = undefined;
                            if (var4) {
                                _fun77394_ip = 1033;
                                continue _fun77394
                            }
                        case 1023:
                            var4 = _closure2_slot134;
                            var12 = var4.resolvedGiftCodes;
                        case 1033:
                            var4 = _closure2_slot52;
                            var39 = var12 !== var4;
                        case 1041:
                            if (var39) {
                                _fun77394_ip = 1075;
                                continue _fun77394
                            }
                        case 1044:
                            var4 = _closure2_slot134;
                            var4 = var7 == var4;
                            var12 = undefined;
                            if (var4) {
                                _fun77394_ip = 1067;
                                continue _fun77394
                            }
                        case 1057:
                            var4 = _closure2_slot134;
                            var12 = var4.acceptingGiftCodes;
                        case 1067:
                            var4 = _closure2_slot53;
                            var39 = var12 !== var4;
                        case 1075:
                            var _closure3_slot0 = var39;
                            var4 = _closure2_slot134;
                            var4 = var7 == var4;
                            var38 = undefined;
                            if (var4) {
                                _fun77394_ip = 1102;
                                continue _fun77394
                            }
                        case 1092:
                            var4 = _closure2_slot134;
                            var38 = var4.uploads;
                        case 1102:
                            var37 = _closure2_slot55;
                            var12 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var15 = 100;
                            var4 = var4[var15];
                            var16 = var12.bind(var3)(var4);
                            var4 = _closure2_slot134;
                            var4 = var7 == var4;
                            var12 = undefined;
                            if (var4) {
                                _fun77394_ip = 1149;
                                continue _fun77394
                            }
                        case 1139:
                            var4 = _closure2_slot134;
                            var12 = var4.interactionStates;
                        case 1149:
                            var4 = _closure2_slot62;
                            var4 = var16.bind(var3)(var12, var4);
                            var29 = !var4;
                            var _closure3_slot1 = var29;
                            var4 = _closure2_slot134;
                            var4 = var7 == var4;
                            var12 = undefined;
                            if (var4) {
                                _fun77394_ip = 1189;
                                continue _fun77394
                            }
                        case 1179:
                            var4 = _closure2_slot134;
                            var12 = var4.channelPolls;
                        case 1189:
                            var4 = _closure2_slot93;
                            var26 = var12 !== var4;
                            var _closure3_slot2 = var26;
                            var4 = _closure2_slot134;
                            var4 = var7 == var4;
                            var12 = undefined;
                            if (var4) {
                                _fun77394_ip = 1224;
                                continue _fun77394
                            }
                        case 1214:
                            var4 = _closure2_slot134;
                            var12 = var4.messageReferencePolls;
                        case 1224:
                            var4 = _closure2_slot95;
                            var25 = var12 !== var4;
                            var _closure3_slot3 = var25;
                            var4 = _closure2_slot134;
                            var4 = var7 == var4;
                            var12 = undefined;
                            if (var4) {
                                _fun77394_ip = 1259;
                                continue _fun77394
                            }
                        case 1249:
                            var4 = _closure2_slot134;
                            var12 = var4.interactionComponentStatesVersion;
                        case 1259:
                            var4 = _closure2_slot64;
                            var28 = var12 !== var4;
                            var _closure3_slot4 = var28;
                            var4 = _closure2_slot134;
                            var4 = var7 == var4;
                            var12 = undefined;
                            if (var4) {
                                _fun77394_ip = 1294;
                                continue _fun77394
                            }
                        case 1284:
                            var4 = _closure2_slot134;
                            var12 = var4.shouldDisableInteractiveComponents;
                        case 1294:
                            var4 = _closure2_slot92;
                            var4 = var12 !== var4;
                            var _closure3_slot5 = var4;
                            var4 = _closure2_slot134;
                            var4 = var7 == var4;
                            var12 = undefined;
                            if (var4) {
                                _fun77394_ip = 1329;
                                continue _fun77394
                            }
                        case 1319:
                            var4 = _closure2_slot134;
                            var12 = var4.communicationDisabledVersion;
                        case 1329:
                            var4 = _closure2_slot73;
                            var35 = var12 !== var4;
                            var _closure3_slot6 = var35;
                            var4 = _closure2_slot134;
                            var4 = var7 == var4;
                            var12 = undefined;
                            if (var4) {
                                _fun77394_ip = 1364;
                                continue _fun77394
                            }
                        case 1354:
                            var4 = _closure2_slot134;
                            var12 = var4.messageAuthorMembers;
                        case 1364:
                            var4 = _closure2_slot74;
                            var34 = var12 !== var4;
                            var _closure3_slot7 = var34;
                            var4 = _closure2_slot134;
                            var4 = var7 == var4;
                            var12 = undefined;
                            if (var4) {
                                _fun77394_ip = 1399;
                                continue _fun77394
                            }
                        case 1389:
                            var4 = _closure2_slot134;
                            var12 = var4.failedMessagesVersion;
                        case 1399:
                            var4 = _closure2_slot72;
                            var33 = var12 !== var4;
                            var _closure3_slot8 = var33;
                            var4 = _closure2_slot134;
                            var4 = var7 == var4;
                            var12 = undefined;
                            if (var4) {
                                _fun77394_ip = 1434;
                                continue _fun77394
                            }
                        case 1424:
                            var4 = _closure2_slot134;
                            var12 = var4.renderCommunicationDisabled;
                        case 1434:
                            var4 = _closure2_slot75;
                            var30 = var12 !== var4;
                            var _closure3_slot9 = var30;
                            var4 = _closure2_slot134;
                            var4 = var7 == var4;
                            var32 = undefined;
                            if (var4) {
                                _fun77394_ip = 1469;
                                continue _fun77394
                            }
                        case 1459:
                            var4 = _closure2_slot134;
                            var32 = var4.forwardGuildsVersion;
                        case 1469:
                            var31 = _closure2_slot101;
                            var12 = _closure2_slot1;
                            var4 = var12.isForumPost;
                            var27 = var4.bind(var12)();
                            if (!var27) {
                                _fun77394_ip = 1521;
                                continue _fun77394
                            }
                        case 1490:
                            var4 = _closure2_slot134;
                            var4 = var7 == var4;
                            var12 = undefined;
                            if (var4) {
                                _fun77394_ip = 1513;
                                continue _fun77394
                            }
                        case 1503:
                            var4 = _closure2_slot134;
                            var12 = var4.isFollowingForumPost;
                        case 1513:
                            var4 = _closure2_slot79;
                            var27 = var12 !== var4;
                        case 1521:
                            var _closure3_slot10 = var27;
                            var4 = _closure2_slot134;
                            var4 = var7 == var4;
                            var12 = undefined;
                            if (var4) {
                                _fun77394_ip = 1548;
                                continue _fun77394
                            }
                        case 1538:
                            var4 = _closure2_slot134;
                            var12 = var4.showMediaPostSharePrompt;
                        case 1548:
                            var4 = _closure2_slot80;
                            var24 = var12 !== var4;
                            var _closure3_slot11 = var24;
                            var4 = _closure2_slot134;
                            var4 = var7 == var4;
                            var12 = undefined;
                            if (var4) {
                                _fun77394_ip = 1583;
                                continue _fun77394
                            }
                        case 1573:
                            var4 = _closure2_slot134;
                            var12 = var4.unloadedContentEntryMessageIds;
                        case 1583:
                            var4 = _closure2_slot98;
                            var23 = var12 !== var4;
                            var _closure3_slot12 = var23;
                            var4 = _closure2_slot134;
                            var4 = var7 == var4;
                            var12 = undefined;
                            if (var4) {
                                _fun77394_ip = 1618;
                                continue _fun77394
                            }
                        case 1608:
                            var4 = _closure2_slot134;
                            var12 = var4.invalidApplicationIds;
                        case 1618:
                            var4 = _closure2_slot27;
                            var4 = var12 !== var4;
                            var _closure3_slot13 = var4;
                            var12 = _closure2_slot134;
                            var12 = var7 == var12;
                            var16 = undefined;
                            if (var12) {
                                _fun77394_ip = 1653;
                                continue _fun77394
                            }
                        case 1643:
                            var12 = _closure2_slot134;
                            var16 = var12.activityInstanceIds;
                        case 1653:
                            var12 = _closure2_slot29;
                            var36 = var16 !== var12;
                            if (var36) {
                                _fun77394_ip = 1695;
                                continue _fun77394
                            }
                        case 1664:
                            var12 = _closure2_slot134;
                            var12 = var7 == var12;
                            var16 = undefined;
                            if (var12) {
                                _fun77394_ip = 1687;
                                continue _fun77394
                            }
                        case 1677:
                            var12 = _closure2_slot134;
                            var16 = var12.activityParticipants;
                        case 1687:
                            var12 = _closure2_slot31;
                            var36 = var16 !== var12;
                        case 1695:
                            if (var36) {
                                _fun77394_ip = 1729;
                                continue _fun77394
                            }
                        case 1698:
                            var12 = _closure2_slot134;
                            var12 = var7 == var12;
                            var16 = undefined;
                            if (var12) {
                                _fun77394_ip = 1721;
                                continue _fun77394
                            }
                        case 1711:
                            var12 = _closure2_slot134;
                            var16 = var12.applicationAssetFetchingIds;
                        case 1721:
                            var12 = _closure2_slot28;
                            var36 = var16 !== var12;
                        case 1729:
                            if (var36) {
                                _fun77394_ip = 1763;
                                continue _fun77394
                            }
                        case 1732:
                            var12 = _closure2_slot134;
                            var12 = var7 == var12;
                            var16 = undefined;
                            if (var12) {
                                _fun77394_ip = 1755;
                                continue _fun77394
                            }
                        case 1745:
                            var12 = _closure2_slot134;
                            var16 = var12.activityInstancePresenceDetails;
                        case 1755:
                            var12 = _closure2_slot30;
                            var36 = var16 !== var12;
                        case 1763:
                            if (var36) {
                                _fun77394_ip = 1797;
                                continue _fun77394
                            }
                        case 1766:
                            var12 = _closure2_slot134;
                            var12 = var7 == var12;
                            var16 = undefined;
                            if (var12) {
                                _fun77394_ip = 1789;
                                continue _fun77394
                            }
                        case 1779:
                            var12 = _closure2_slot134;
                            var16 = var12.messagesWithActivitiesLaunching;
                        case 1789:
                            var12 = _closure2_slot32;
                            var36 = var16 !== var12;
                        case 1797:
                            if (var36) {
                                _fun77394_ip = 1803;
                                continue _fun77394
                            }
                        case 1800:
                            var36 = var4;
                        case 1803:
                            var _closure3_slot14 = var36;
                            var12 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var4 = var4[var15];
                            var17 = var12.bind(var3)(var4);
                            var16 = var17.areArraysShallowEqual;
                            var4 = _closure2_slot134;
                            var4 = var7 == var4;
                            var12 = undefined;
                            if (var4) {
                                _fun77394_ip = 1853;
                                continue _fun77394
                            }
                        case 1843:
                            var4 = _closure2_slot134;
                            var12 = var4.activityInviteMessageIds;
                        case 1853:
                            if (!(var7 == var12)) {
                                _fun77394_ip = 1861;
                                continue _fun77394
                            }
                        case 1857:
                            var12 = new Array(0);
                        case 1861:
                            var4 = _closure2_slot22;
                            if (!(var7 == var4)) {
                                _fun77394_ip = 1875;
                                continue _fun77394
                            }
                        case 1869:
                            var4 = new Array(0);
                            _fun77394_ip = 1879;
                            continue _fun77394;
                        case 1875:
                            var4 = _closure2_slot22;
                        case 1879:
                            var4 = var16.bind(var17)(var12, var4);
                            var22 = !var4;
                            var _closure3_slot15 = var22;
                            var12 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var4 = var4[var15];
                            var16 = var12.bind(var3)(var4);
                            var15 = var16.areArraysShallowEqual;
                            var4 = _closure2_slot134;
                            var4 = var7 == var4;
                            var12 = undefined;
                            if (var4) {
                                _fun77394_ip = 1938;
                                continue _fun77394
                            }
                        case 1928:
                            var4 = _closure2_slot134;
                            var12 = var4.referralTrialOfferIds;
                        case 1938:
                            if (!(var7 == var12)) {
                                _fun77394_ip = 1946;
                                continue _fun77394
                            }
                        case 1942:
                            var12 = new Array(0);
                        case 1946:
                            var4 = _closure2_slot40;
                            if (!(var7 == var4)) {
                                _fun77394_ip = 1960;
                                continue _fun77394
                            }
                        case 1954:
                            var4 = new Array(0);
                            _fun77394_ip = 1964;
                            continue _fun77394;
                        case 1960:
                            var4 = _closure2_slot40;
                        case 1964:
                            var4 = var15.bind(var16)(var12, var4);
                            var21 = !var4;
                            if (var21) {
                                _fun77394_ip = 2007;
                                continue _fun77394
                            }
                        case 1976:
                            var4 = _closure2_slot134;
                            var4 = var7 == var4;
                            var12 = undefined;
                            if (var4) {
                                _fun77394_ip = 1999;
                                continue _fun77394
                            }
                        case 1989:
                            var4 = _closure2_slot134;
                            var12 = var4.trialOffer;
                        case 1999:
                            var4 = _closure2_slot41;
                            var21 = var12 !== var4;
                        case 2007:
                            if (var21) {
                                _fun77394_ip = 2041;
                                continue _fun77394
                            }
                        case 2010:
                            var4 = _closure2_slot134;
                            var4 = var7 == var4;
                            var12 = undefined;
                            if (var4) {
                                _fun77394_ip = 2033;
                                continue _fun77394
                            }
                        case 2023:
                            var4 = _closure2_slot134;
                            var12 = var4.isPremiumTier2User;
                        case 2033:
                            var4 = _closure2_slot42;
                            var21 = var12 !== var4;
                        case 2041:
                            var _closure3_slot16 = var21;
                            var4 = _closure2_slot134;
                            var4 = var7 == var4;
                            var12 = undefined;
                            if (var4) {
                                _fun77394_ip = 2068;
                                continue _fun77394
                            }
                        case 2058:
                            var4 = _closure2_slot134;
                            var12 = var4.guildInviteColorsFetched;
                        case 2068:
                            var4 = _closure2_slot102;
                            var20 = var12 !== var4;
                            var _closure3_slot17 = var20;
                            var4 = _closure2_slot134;
                            var4 = var7 == var4;
                            var12 = undefined;
                            if (var4) {
                                _fun77394_ip = 2103;
                                continue _fun77394
                            }
                        case 2093:
                            var4 = _closure2_slot134;
                            var12 = var4.guildEmojis;
                        case 2103:
                            var4 = _closure2_slot103;
                            var19 = var12 !== var4;
                            var _closure3_slot18 = var19;
                            var4 = _closure2_slot82;
                            var15 = 'initializing';
                            var4 = var15 !== var4;
                            var12 = _closure2_slot134;
                            var16 = var7 == var12;
                            var12 = undefined;
                            if (var16) {
                                _fun77394_ip = 2152;
                                continue _fun77394
                            }
                        case 2142:
                            var16 = _closure2_slot134;
                            var12 = var16.lazyCacheStatus;
                        case 2152:
                            var15 = var15 !== var12;
                            var12 = _closure2_slot134;
                            var12 = var7 == var12;
                            var16 = undefined;
                            if (var12) {
                                _fun77394_ip = 2194;
                                continue _fun77394
                            }
                        case 2169:
                            var12 = _closure2_slot134;
                            var12 = var12.currentUserDisplayNameStyles;
                            var17 = var7 == var12;
                            var16 = undefined;
                            if (var17) {
                                _fun77394_ip = 2194;
                                continue _fun77394
                            }
                        case 2188:
                            var16 = var12.fontId;
                        case 2194:
                            var12 = _closure2_slot87;
                            var17 = var7 == var12;
                            var12 = undefined;
                            if (var17) {
                                _fun77394_ip = 2217;
                                continue _fun77394
                            }
                        case 2207:
                            var17 = _closure2_slot87;
                            var12 = var17.fontId;
                        case 2217:
                            var18 = var16 !== var12;
                            var _closure3_slot19 = var18;
                            var12 = _closure2_slot134;
                            var12 = var7 == var12;
                            var16 = undefined;
                            if (var12) {
                                _fun77394_ip = 2248;
                                continue _fun77394
                            }
                        case 2238:
                            var12 = _closure2_slot134;
                            var16 = var12.selfActivities;
                        case 2248:
                            var12 = _closure2_slot105;
                            var17 = var16 !== var12;
                            var _closure3_slot20 = var17;
                            var12 = _closure2_slot134;
                            var12 = var7 == var12;
                            var16 = undefined;
                            if (var12) {
                                _fun77394_ip = 2283;
                                continue _fun77394
                            }
                        case 2273:
                            var12 = _closure2_slot134;
                            var16 = var12.currentClientVoiceChannelId;
                        case 2283:
                            var12 = _closure2_slot104;
                            var12 = var16 !== var12;
                            var _closure3_slot21 = var12;
                            var16 = _closure2_slot134;
                            var16 = var7 == var16;
                            var40 = undefined;
                            if (var16) {
                                _fun77394_ip = 2318;
                                continue _fun77394
                            }
                        case 2308:
                            var16 = _closure2_slot134;
                            var40 = var16.activityLaunchJoinStates;
                        case 2318:
                            var16 = _closure2_slot106;
                            var16 = var40 !== var16;
                            var _closure3_slot22 = var16;
                            if (var14) {
                                _fun77394_ip = 3583;
                                continue _fun77394
                            }
                        case 2336:
                            if (var39) {
                                _fun77394_ip = 3583;
                                continue _fun77394
                            }
                        case 2342:
                            if (!(var38 === var37)) {
                                _fun77394_ip = 3583;
                                continue _fun77394
                            }
                        case 2349:
                            if (var36) {
                                _fun77394_ip = 3583;
                                continue _fun77394
                            }
                        case 2355:
                            var37 = _closure2_slot137;
                            var36 = _closure2_slot6;
                            if (!(var37 === var36)) {
                                _fun77394_ip = 3583;
                                continue _fun77394
                            }
                        case 2370:
                            var36 = _closure2_slot134;
                            var36 = var7 == var36;
                            var37 = undefined;
                            if (var36) {
                                _fun77394_ip = 2393;
                                continue _fun77394
                            }
                        case 2383:
                            var36 = _closure2_slot134;
                            var37 = var36.editingMessageId;
                        case 2393:
                            var36 = _closure2_slot43;
                            if (!(var37 === var36)) {
                                _fun77394_ip = 3583;
                                continue _fun77394
                            }
                        case 2404:
                            var36 = _closure2_slot134;
                            var36 = var7 == var36;
                            var37 = undefined;
                            if (var36) {
                                _fun77394_ip = 2427;
                                continue _fun77394
                            }
                        case 2417:
                            var36 = _closure2_slot134;
                            var37 = var36.replyingMessageId;
                        case 2427:
                            var36 = _closure2_slot44;
                            if (!(var37 === var36)) {
                                _fun77394_ip = 3583;
                                continue _fun77394
                            }
                        case 2438:
                            var36 = _closure2_slot134;
                            var36 = var7 == var36;
                            var37 = undefined;
                            if (var36) {
                                _fun77394_ip = 2461;
                                continue _fun77394
                            }
                        case 2451:
                            var36 = _closure2_slot134;
                            var37 = var36.voiceStateChannelId;
                        case 2461:
                            var36 = _closure2_slot49;
                            if (!(var37 === var36)) {
                                _fun77394_ip = 3583;
                                continue _fun77394
                            }
                        case 2472:
                            var36 = _closure2_slot134;
                            var36 = var7 == var36;
                            var37 = undefined;
                            if (var36) {
                                _fun77394_ip = 2495;
                                continue _fun77394
                            }
                        case 2485:
                            var36 = _closure2_slot134;
                            var37 = var36.messageAuthorActivities;
                        case 2495:
                            var36 = _closure2_slot21;
                            if (!(var37 === var36)) {
                                _fun77394_ip = 3583;
                                continue _fun77394
                            }
                        case 2506:
                            var36 = _closure2_slot134;
                            var36 = var7 == var36;
                            var37 = undefined;
                            if (var36) {
                                _fun77394_ip = 2529;
                                continue _fun77394
                            }
                        case 2519:
                            var36 = _closure2_slot134;
                            var37 = var36.oldestUnreadMessageId;
                        case 2529:
                            var36 = _closure2_slot45;
                            if (!(var37 === var36)) {
                                _fun77394_ip = 3583;
                                continue _fun77394
                            }
                        case 2540:
                            var36 = _closure2_slot134;
                            var36 = var7 == var36;
                            var37 = undefined;
                            if (var36) {
                                _fun77394_ip = 2563;
                                continue _fun77394
                            }
                        case 2553:
                            var36 = _closure2_slot134;
                            var37 = var36.invites;
                        case 2563:
                            var36 = _closure2_slot23;
                            if (!(var37 === var36)) {
                                _fun77394_ip = 3583;
                                continue _fun77394
                            }
                        case 2574:
                            var36 = _closure2_slot134;
                            var36 = var7 == var36;
                            var37 = undefined;
                            if (var36) {
                                _fun77394_ip = 2597;
                                continue _fun77394
                            }
                        case 2587:
                            var36 = _closure2_slot134;
                            var37 = var36.appDirectoryEmbedApplications;
                        case 2597:
                            var36 = _closure2_slot24;
                            if (!(var37 === var36)) {
                                _fun77394_ip = 3583;
                                continue _fun77394
                            }
                        case 2608:
                            var36 = _closure2_slot134;
                            var36 = var7 == var36;
                            var37 = undefined;
                            if (var36) {
                                _fun77394_ip = 2631;
                                continue _fun77394
                            }
                        case 2621:
                            var36 = _closure2_slot134;
                            var37 = var36.invalidAppDirectoryEmbedApplicationIds;
                        case 2631:
                            var36 = _closure2_slot25;
                            if (!(var37 === var36)) {
                                _fun77394_ip = 3583;
                                continue _fun77394
                            }
                        case 2642:
                            var36 = _closure2_slot134;
                            var36 = var7 == var36;
                            var37 = undefined;
                            if (var36) {
                                _fun77394_ip = 2665;
                                continue _fun77394
                            }
                        case 2655:
                            var36 = _closure2_slot134;
                            var37 = var36.appDirectoryEmbedApplicationFetchStates;
                        case 2665:
                            var36 = _closure2_slot26;
                            if (!(var37 === var36)) {
                                _fun77394_ip = 3583;
                                continue _fun77394
                            }
                        case 2676:
                            var36 = _closure2_slot134;
                            var36 = var7 == var36;
                            var37 = undefined;
                            if (var36) {
                                _fun77394_ip = 2699;
                                continue _fun77394
                            }
                        case 2689:
                            var36 = _closure2_slot134;
                            var37 = var36.guildTemplates;
                        case 2699:
                            var36 = _closure2_slot34;
                            if (!(var37 === var36)) {
                                _fun77394_ip = 3583;
                                continue _fun77394
                            }
                        case 2710:
                            var36 = _closure2_slot134;
                            var36 = var7 == var36;
                            var37 = undefined;
                            if (var36) {
                                _fun77394_ip = 2733;
                                continue _fun77394
                            }
                        case 2723:
                            var36 = _closure2_slot134;
                            var37 = var36.buildOverrides;
                        case 2733:
                            var36 = _closure2_slot35;
                            if (!(var37 === var36)) {
                                _fun77394_ip = 3583;
                                continue _fun77394
                            }
                        case 2744:
                            var36 = _closure2_slot134;
                            var36 = var7 == var36;
                            var37 = undefined;
                            if (var36) {
                                _fun77394_ip = 2767;
                                continue _fun77394
                            }
                        case 2757:
                            var36 = _closure2_slot134;
                            var37 = var36.experimentEmbeds;
                        case 2767:
                            var36 = _closure2_slot36;
                            if (!(var37 === var36)) {
                                _fun77394_ip = 3583;
                                continue _fun77394
                            }
                        case 2778:
                            var36 = _closure2_slot134;
                            var36 = var7 == var36;
                            var37 = undefined;
                            if (var36) {
                                _fun77394_ip = 2801;
                                continue _fun77394
                            }
                        case 2791:
                            var36 = _closure2_slot134;
                            var37 = var36.quests;
                        case 2801:
                            var36 = _closure2_slot37;
                            if (!(var37 === var36)) {
                                _fun77394_ip = 3583;
                                continue _fun77394
                            }
                        case 2812:
                            var36 = _closure2_slot134;
                            var36 = var7 == var36;
                            var37 = undefined;
                            if (var36) {
                                _fun77394_ip = 2835;
                                continue _fun77394
                            }
                        case 2825:
                            var36 = _closure2_slot134;
                            var37 = var36.isFetchingCurrentQuests;
                        case 2835:
                            var36 = _closure2_slot38;
                            if (!(var37 === var36)) {
                                _fun77394_ip = 3583;
                                continue _fun77394
                            }
                        case 2846:
                            var36 = _closure2_slot134;
                            var36 = var7 == var36;
                            var37 = undefined;
                            if (var36) {
                                _fun77394_ip = 2869;
                                continue _fun77394
                            }
                        case 2859:
                            var36 = _closure2_slot134;
                            var37 = var36.participantsLength;
                        case 2869:
                            var36 = _closure2_slot54;
                            if (!(var37 === var36)) {
                                _fun77394_ip = 3583;
                                continue _fun77394
                            }
                        case 2880:
                            var37 = _closure2_slot68;
                            var36 = _closure2_slot137;
                            var36 = var7 != var36;
                            if (!var36) {
                                _fun77394_ip = 2921;
                                continue _fun77394
                            }
                        case 2895:
                            var38 = _closure2_slot137;
                            var38 = var38.ready;
                            if (var38) {
                                _fun77394_ip = 2918;
                                continue _fun77394
                            }
                        case 2908:
                            var39 = _closure2_slot137;
                            var38 = var39.cached;
                        case 2918:
                            var36 = var38;
                        case 2921:
                            if (!(var37 === var36)) {
                                _fun77394_ip = 3583;
                                continue _fun77394
                            }
                        case 2928:
                            var36 = _closure2_slot134;
                            var36 = var7 == var36;
                            var37 = undefined;
                            if (var36) {
                                _fun77394_ip = 2951;
                                continue _fun77394
                            }
                        case 2941:
                            var36 = _closure2_slot134;
                            var37 = var36.channelThreadsVersion;
                        case 2951:
                            var36 = _closure2_slot61;
                            if (!(var37 === var36)) {
                                _fun77394_ip = 3583;
                                continue _fun77394
                            }
                        case 2962:
                            var36 = _closure2_slot134;
                            var36 = var7 == var36;
                            var37 = undefined;
                            if (var36) {
                                _fun77394_ip = 2985;
                                continue _fun77394
                            }
                        case 2975:
                            var36 = _closure2_slot134;
                            var37 = var36.rsvpVersion;
                        case 2985:
                            var36 = _closure2_slot71;
                            if (!(var37 === var36)) {
                                _fun77394_ip = 3583;
                                continue _fun77394
                            }
                        case 2996:
                            var36 = _closure2_slot134;
                            var36 = var7 == var36;
                            var37 = undefined;
                            if (var36) {
                                _fun77394_ip = 3019;
                                continue _fun77394
                            }
                        case 3009:
                            var36 = _closure2_slot134;
                            var37 = var36.repliedIds;
                        case 3019:
                            var36 = _closure2_slot56;
                            if (!(var37 === var36)) {
                                _fun77394_ip = 3583;
                                continue _fun77394
                            }
                        case 3030:
                            var36 = _closure2_slot134;
                            var36 = var7 == var36;
                            var37 = undefined;
                            if (var36) {
                                _fun77394_ip = 3053;
                                continue _fun77394
                            }
                        case 3043:
                            var36 = _closure2_slot134;
                            var37 = var36.hasLoadedExperiments;
                        case 3053:
                            var36 = _closure2_slot65;
                            if (!(var37 === var36)) {
                                _fun77394_ip = 3583;
                                continue _fun77394
                            }
                        case 3064:
                            var36 = _closure2_slot134;
                            var36 = var7 == var36;
                            var37 = undefined;
                            if (var36) {
                                _fun77394_ip = 3087;
                                continue _fun77394
                            }
                        case 3077:
                            var36 = _closure2_slot134;
                            var37 = var36.isMessageRequest;
                        case 3087:
                            var36 = _closure2_slot67;
                            if (!(var37 === var36)) {
                                _fun77394_ip = 3583;
                                continue _fun77394
                            }
                        case 3098:
                            var36 = _closure2_slot134;
                            var36 = var7 == var36;
                            var37 = undefined;
                            if (var36) {
                                _fun77394_ip = 3121;
                                continue _fun77394
                            }
                        case 3111:
                            var36 = _closure2_slot134;
                            var37 = var36.isSpamMessageRequest;
                        case 3121:
                            var36 = _closure2_slot66;
                            if (!(var37 === var36)) {
                                _fun77394_ip = 3583;
                                continue _fun77394
                            }
                        case 3132:
                            var36 = _closure2_slot134;
                            var36 = var7 == var36;
                            var37 = undefined;
                            if (var36) {
                                _fun77394_ip = 3155;
                                continue _fun77394
                            }
                        case 3145:
                            var36 = _closure2_slot134;
                            var37 = var36.currentUserCommunicationDisabled;
                        case 3155:
                            var36 = _closure2_slot76;
                            if (!(var37 === var36)) {
                                _fun77394_ip = 3583;
                                continue _fun77394
                            }
                        case 3166:
                            var36 = _closure2_slot134;
                            var36 = var7 == var36;
                            var37 = undefined;
                            if (var36) {
                                _fun77394_ip = 3189;
                                continue _fun77394
                            }
                        case 3179:
                            var36 = _closure2_slot134;
                            var37 = var36.userSettingsLocale;
                        case 3189:
                            var36 = _closure2_slot77;
                            if (!(var37 === var36)) {
                                _fun77394_ip = 3583;
                                continue _fun77394
                            }
                        case 3200:
                            var36 = _closure2_slot134;
                            var36 = var7 == var36;
                            var37 = undefined;
                            if (var36) {
                                _fun77394_ip = 3223;
                                continue _fun77394
                            }
                        case 3213:
                            var36 = _closure2_slot134;
                            var37 = var36.selectedSummary;
                        case 3223:
                            var36 = _closure2_slot86;
                            if (!(var37 === var36)) {
                                _fun77394_ip = 3583;
                                continue _fun77394
                            }
                        case 3234:
                            var36 = _closure2_slot134;
                            var36 = var7 == var36;
                            var37 = undefined;
                            if (var36) {
                                _fun77394_ip = 3257;
                                continue _fun77394
                            }
                        case 3247:
                            var36 = _closure2_slot134;
                            var37 = var36.showPushFeedback;
                        case 3257:
                            var36 = _closure2_slot81;
                            if (!(var37 === var36)) {
                                _fun77394_ip = 3583;
                                continue _fun77394
                            }
                        case 3268:
                            if (!(var15 === var4)) {
                                _fun77394_ip = 3583;
                                continue _fun77394
                            }
                        case 3275:
                            if (var35) {
                                _fun77394_ip = 3583;
                                continue _fun77394
                            }
                        case 3281:
                            if (var34) {
                                _fun77394_ip = 3583;
                                continue _fun77394
                            }
                        case 3287:
                            if (var33) {
                                _fun77394_ip = 3583;
                                continue _fun77394
                            }
                        case 3293:
                            if (!(var32 === var31)) {
                                _fun77394_ip = 3583;
                                continue _fun77394
                            }
                        case 3300:
                            if (var30) {
                                _fun77394_ip = 3583;
                                continue _fun77394
                            }
                        case 3306:
                            if (var29) {
                                _fun77394_ip = 3583;
                                continue _fun77394
                            }
                        case 3312:
                            if (var28) {
                                _fun77394_ip = 3583;
                                continue _fun77394
                            }
                        case 3318:
                            if (var27) {
                                _fun77394_ip = 3583;
                                continue _fun77394
                            }
                        case 3324:
                            if (!(var7 == var10)) {
                                _fun77394_ip = 3583;
                                continue _fun77394
                            }
                        case 3331:
                            if (!(var7 == var8)) {
                                _fun77394_ip = 3583;
                                continue _fun77394
                            }
                        case 3338:
                            var27 = _closure2_slot134;
                            var27 = var7 == var27;
                            var28 = undefined;
                            if (var27) {
                                _fun77394_ip = 3361;
                                continue _fun77394
                            }
                        case 3351:
                            var27 = _closure2_slot134;
                            var28 = var27.androidKeyboardHeight;
                        case 3361:
                            var27 = _closure2_slot83;
                            if (!(var28 === var27)) {
                                _fun77394_ip = 3583;
                                continue _fun77394
                            }
                        case 3372:
                            var27 = _closure2_slot134;
                            var27 = var7 == var27;
                            var28 = undefined;
                            if (var27) {
                                _fun77394_ip = 3395;
                                continue _fun77394
                            }
                        case 3385:
                            var27 = _closure2_slot134;
                            var28 = var27.mediaPostPreviewEmbeds;
                        case 3395:
                            var27 = _closure2_slot33;
                            if (!(var28 === var27)) {
                                _fun77394_ip = 3583;
                                continue _fun77394
                            }
                        case 3406:
                            var27 = _closure2_slot134;
                            var27 = var7 == var27;
                            var28 = undefined;
                            if (var27) {
                                _fun77394_ip = 3429;
                                continue _fun77394
                            }
                        case 3419:
                            var27 = _closure2_slot134;
                            var28 = var27.shouldObscureSpoiler;
                        case 3429:
                            var27 = _closure2_slot90;
                            if (!(var28 === var27)) {
                                _fun77394_ip = 3583;
                                continue _fun77394
                            }
                        case 3440:
                            var27 = _closure2_slot134;
                            var27 = var7 == var27;
                            var28 = undefined;
                            if (var27) {
                                _fun77394_ip = 3463;
                                continue _fun77394
                            }
                        case 3453:
                            var27 = _closure2_slot134;
                            var28 = var27.shouldDisableInteractiveComponents;
                        case 3463:
                            var27 = _closure2_slot92;
                            if (!(var28 === var27)) {
                                _fun77394_ip = 3583;
                                continue _fun77394
                            }
                        case 3471:
                            if (var26) {
                                _fun77394_ip = 3583;
                                continue _fun77394
                            }
                        case 3474:
                            if (var25) {
                                _fun77394_ip = 3583;
                                continue _fun77394
                            }
                        case 3477:
                            if (var24) {
                                _fun77394_ip = 3583;
                                continue _fun77394
                            }
                        case 3480:
                            var24 = _closure2_slot134;
                            var24 = var7 == var24;
                            var25 = undefined;
                            if (var24) {
                                _fun77394_ip = 3503;
                                continue _fun77394
                            }
                        case 3493:
                            var24 = _closure2_slot134;
                            var25 = var24.threadStartingReferenceMessage;
                        case 3503:
                            var24 = _closure2_slot50;
                            if (!(var25 === var24)) {
                                _fun77394_ip = 3583;
                                continue _fun77394
                            }
                        case 3511:
                            if (var23) {
                                _fun77394_ip = 3583;
                                continue _fun77394
                            }
                        case 3514:
                            if (var22) {
                                _fun77394_ip = 3583;
                                continue _fun77394
                            }
                        case 3517:
                            if (var21) {
                                _fun77394_ip = 3583;
                                continue _fun77394
                            }
                        case 3520:
                            if (var20) {
                                _fun77394_ip = 3583;
                                continue _fun77394
                            }
                        case 3523:
                            if (var19) {
                                _fun77394_ip = 3583;
                                continue _fun77394
                            }
                        case 3526:
                            if (var18) {
                                _fun77394_ip = 3583;
                                continue _fun77394
                            }
                        case 3529:
                            if (var17) {
                                _fun77394_ip = 3583;
                                continue _fun77394
                            }
                        case 3532:
                            if (var16) {
                                _fun77394_ip = 3583;
                                continue _fun77394
                            }
                        case 3535:
                            if (var12) {
                                _fun77394_ip = 3583;
                                continue _fun77394
                            }
                        case 3538:
                            var16 = _closure1_slot0;
                            var17 = _closure1_slot2;
                            var12 = 85;
                            var12 = var17[var12];
                            var18 = var16.bind(var3)(var12);
                            var17 = var18.recordTimings;
                            var16 = _closure2_slot7;
                            var12 = _closure2_slot6;
                            var12 = var17.bind(var18)(var16, var12);
                            _fun77394_ip = 4398;
                            continue _fun77394;
                        case 3583:
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
                            var16 = _closure2_slot134;
                            var16 = var7 == var16;
                            var17 = undefined;
                            if (var16) {
                                _fun77394_ip = 3638;
                                continue _fun77394
                            }
                        case 3628:
                            var16 = _closure2_slot134;
                            var17 = var16.editingMessageId;
                        case 3638:
                            var16 = _closure2_slot43;
                            if (!(var17 !== var16)) {
                                _fun77394_ip = 3728;
                                continue _fun77394
                            }
                        case 3646:
                            var16 = _closure2_slot43;
                            if (!(var7 != var16)) {
                                _fun77394_ip = 3668;
                                continue _fun77394
                            }
                        case 3654:
                            var17 = var12.add;
                            var16 = _closure2_slot43;
                            var16 = var17.bind(var12)(var16);
                        case 3668:
                            var16 = _closure2_slot134;
                            var17 = var7 == var16;
                            var16 = undefined;
                            if (var17) {
                                _fun77394_ip = 3691;
                                continue _fun77394
                            }
                        case 3681:
                            var17 = _closure2_slot134;
                            var16 = var17.editingMessageId;
                        case 3691:
                            if (!(var7 != var16)) {
                                _fun77394_ip = 3728;
                                continue _fun77394
                            }
                        case 3695:
                            var17 = var12.add;
                            var16 = _closure2_slot134;
                            var18 = var7 == var16;
                            var16 = undefined;
                            if (var18) {
                                _fun77394_ip = 3723;
                                continue _fun77394
                            }
                        case 3713:
                            var18 = _closure2_slot134;
                            var16 = var18.editingMessageId;
                        case 3723:
                            var16 = var17.bind(var12)(var16);
                        case 3728:
                            var16 = _closure2_slot134;
                            var16 = var7 == var16;
                            var17 = undefined;
                            if (var16) {
                                _fun77394_ip = 3751;
                                continue _fun77394
                            }
                        case 3741:
                            var16 = _closure2_slot134;
                            var17 = var16.replyingMessageId;
                        case 3751:
                            var16 = _closure2_slot44;
                            if (!(var17 !== var16)) {
                                _fun77394_ip = 3841;
                                continue _fun77394
                            }
                        case 3759:
                            var16 = _closure2_slot44;
                            if (!(var7 != var16)) {
                                _fun77394_ip = 3781;
                                continue _fun77394
                            }
                        case 3767:
                            var17 = var12.add;
                            var16 = _closure2_slot44;
                            var16 = var17.bind(var12)(var16);
                        case 3781:
                            var16 = _closure2_slot134;
                            var17 = var7 == var16;
                            var16 = undefined;
                            if (var17) {
                                _fun77394_ip = 3804;
                                continue _fun77394
                            }
                        case 3794:
                            var17 = _closure2_slot134;
                            var16 = var17.replyingMessageId;
                        case 3804:
                            if (!(var7 != var16)) {
                                _fun77394_ip = 3841;
                                continue _fun77394
                            }
                        case 3808:
                            var17 = var12.add;
                            var16 = _closure2_slot134;
                            var18 = var7 == var16;
                            var16 = undefined;
                            if (var18) {
                                _fun77394_ip = 3836;
                                continue _fun77394
                            }
                        case 3826:
                            var18 = _closure2_slot134;
                            var16 = var18.replyingMessageId;
                        case 3836:
                            var16 = var17.bind(var12)(var16);
                        case 3841:
                            var17 = _closure2_slot68;
                            var16 = _closure2_slot137;
                            var16 = var7 != var16;
                            if (!var16) {
                                _fun77394_ip = 3882;
                                continue _fun77394
                            }
                        case 3856:
                            var18 = _closure2_slot137;
                            var18 = var18.ready;
                            if (var18) {
                                _fun77394_ip = 3879;
                                continue _fun77394
                            }
                        case 3869:
                            var19 = _closure2_slot137;
                            var18 = var19.cached;
                        case 3879:
                            var16 = var18;
                        case 3882:
                            if (!(var17 === var16)) {
                                _fun77394_ip = 3979;
                                continue _fun77394
                            }
                        case 3886:
                            var16 = _closure2_slot134;
                            var16 = var7 == var16;
                            var17 = undefined;
                            if (var16) {
                                _fun77394_ip = 3909;
                                continue _fun77394
                            }
                        case 3899:
                            var16 = _closure2_slot134;
                            var17 = var16.isCallActive;
                        case 3909:
                            var16 = _closure2_slot48;
                            if (!(var17 === var16)) {
                                _fun77394_ip = 3979;
                                continue _fun77394
                            }
                        case 3917:
                            var16 = _closure2_slot134;
                            var16 = var7 == var16;
                            var17 = undefined;
                            if (var16) {
                                _fun77394_ip = 3940;
                                continue _fun77394
                            }
                        case 3930:
                            var16 = _closure2_slot134;
                            var17 = var16.voiceStateChannelId;
                        case 3940:
                            var16 = _closure2_slot49;
                            if (!(var17 === var16)) {
                                _fun77394_ip = 3979;
                                continue _fun77394
                            }
                        case 3948:
                            var16 = _closure2_slot134;
                            var16 = var7 == var16;
                            var17 = undefined;
                            if (var16) {
                                _fun77394_ip = 3971;
                                continue _fun77394
                            }
                        case 3961:
                            var16 = _closure2_slot134;
                            var17 = var16.participantsLength;
                        case 3971:
                            var16 = _closure2_slot54;
                            if (!(var17 !== var16)) {
                                _fun77394_ip = 4060;
                                continue _fun77394
                            }
                        case 3979:
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
                                _fun77394_ip = 4060;
                                continue _fun77394
                            }
                        case 4045:
                            var17 = var12.add;
                            var16 = var16.id;
                            var16 = var17.bind(var12)(var16);
                        case 4060:
                            var16 = _closure2_slot134;
                            var16 = var7 == var16;
                            var17 = undefined;
                            if (var16) {
                                _fun77394_ip = 4083;
                                continue _fun77394
                            }
                        case 4073:
                            var16 = _closure2_slot134;
                            var17 = var16.channelThreadsVersion;
                        case 4083:
                            var16 = _closure2_slot61;
                            var16 = var17 !== var16;
                            var _closure3_slot24 = var16;
                            var16 = _closure2_slot134;
                            var16 = var7 == var16;
                            var17 = undefined;
                            if (var16) {
                                _fun77394_ip = 4118;
                                continue _fun77394
                            }
                        case 4108:
                            var16 = _closure2_slot134;
                            var17 = var16.rsvpVersion;
                        case 4118:
                            var16 = _closure2_slot71;
                            var16 = var17 !== var16;
                            var _closure3_slot25 = var16;
                            var16 = _closure2_slot134;
                            var16 = var7 == var16;
                            var17 = undefined;
                            if (var16) {
                                _fun77394_ip = 4153;
                                continue _fun77394
                            }
                        case 4143:
                            var16 = _closure2_slot134;
                            var17 = var16.repliedIds;
                        case 4153:
                            var16 = _closure2_slot56;
                            var16 = var17 !== var16;
                            var _closure3_slot26 = var16;
                            var16 = _closure2_slot134;
                            var16 = var7 == var16;
                            var17 = undefined;
                            if (var16) {
                                _fun77394_ip = 4188;
                                continue _fun77394
                            }
                        case 4178:
                            var16 = _closure2_slot134;
                            var17 = var16.hasLoadedExperiments;
                        case 4188:
                            var16 = _closure2_slot65;
                            var16 = var17 !== var16;
                            var _closure3_slot27 = var16;
                            var16 = _closure2_slot134;
                            var17 = var7 == var16;
                            var16 = undefined;
                            if (var17) {
                                _fun77394_ip = 4223;
                                continue _fun77394
                            }
                        case 4213:
                            var17 = _closure2_slot134;
                            var16 = var17.communicationDisabledVersion;
                        case 4223:
                            var17 = var7 != var16;
                            var7 = -1;
                            if (!var17) {
                                _fun77394_ip = 4239;
                                continue _fun77394
                            }
                        case 4236:
                            var7 = var16;
                        case 4239:
                            var _closure3_slot28 = var7;
                            var7 = !var15;
                            if (var15) {
                                _fun77394_ip = 4252;
                                continue _fun77394
                            }
                        case 4249:
                            var7 = var4;
                        case 4252:
                            var _closure3_slot29 = var7;
                            var15 = _closure2_slot6;
                            var4 = var15.forEach;
                            var2 = function(arg0) { // Environment: var2
                                _fun77396: for (var _fun77396_ip = 0;;) switch (_fun77396_ip) {
                                    case 0:
                                        var0 = arg0;
                                        var2 = _closure3_slot21;
                                        if (!var2) {
                                            _fun77396_ip = 55;
                                            continue _fun77396
                                        }
                                    case 13:
                                        var2 = var0.activity;
                                        var3 = null;
                                        var4 = var3 == var2;
                                        var3 = undefined;
                                        if (var4) {
                                            _fun77396_ip = 35;
                                            continue _fun77396
                                        }
                                    case 30:
                                        var3 = var2.type;
                                    case 35:
                                        var2 = _closure1_slot60;
                                        var2 = var2.STREAM_REQUEST;
                                        if (!(var3 !== var2)) {
                                            _fun77396_ip = 3312;
                                            continue _fun77396
                                        }
                                    case 55:
                                        var2 = _closure3_slot27;
                                        if (!var2) {
                                            _fun77396_ip = 87;
                                            continue _fun77396
                                        }
                                    case 62:
                                        var3 = var0.type;
                                        var2 = _closure1_slot56;
                                        var2 = var2.USER_JOIN;
                                        if (!(var3 !== var2)) {
                                            _fun77396_ip = 3291;
                                            continue _fun77396
                                        }
                                    case 87:
                                        var2 = _closure3_slot26;
                                        if (!var2) {
                                            _fun77396_ip = 157;
                                            continue _fun77396
                                        }
                                    case 94:
                                        var3 = var0.type;
                                        var2 = _closure1_slot56;
                                        var2 = var2.REPLY;
                                        if (!(var3 === var2)) {
                                            _fun77396_ip = 157;
                                            continue _fun77396
                                        }
                                    case 116:
                                        var2 = var0.messageReference;
                                        var3 = null;
                                        if (!(var3 != var2)) {
                                            _fun77396_ip = 157;
                                            continue _fun77396
                                        }
                                    case 128:
                                        var4 = _closure2_slot56;
                                        var3 = var4.has;
                                        var2 = var2.message_id;
                                        var2 = var3.bind(var4)(var2);
                                        if (var2) {
                                            _fun77396_ip = 3268;
                                            continue _fun77396
                                        }
                                    case 157:
                                        var2 = _closure3_slot24;
                                        if (!var2) {
                                            _fun77396_ip = 194;
                                            continue _fun77396
                                        }
                                    case 164:
                                        var3 = var0.hasFlag;
                                        var2 = _closure1_slot57;
                                        var2 = var2.HAS_THREAD;
                                        var2 = var3.bind(var0)(var2);
                                        if (var2) {
                                            _fun77396_ip = 3247;
                                            continue _fun77396
                                        }
                                    case 194:
                                        var2 = _closure3_slot25;
                                        if (!var2) {
                                            _fun77396_ip = 221;
                                            continue _fun77396
                                        }
                                    case 201:
                                        var2 = var0.codedLinks;
                                        var3 = var2.length;
                                        var2 = 0;
                                        if (!(!(var3 > var2))) {
                                            _fun77396_ip = 3226;
                                            continue _fun77396
                                        }
                                    case 221:
                                        var2 = _closure3_slot18;
                                        if (!var2) {
                                            _fun77396_ip = 253;
                                            continue _fun77396
                                        }
                                    case 228:
                                        var3 = var0.type;
                                        var2 = _closure1_slot56;
                                        var2 = var2.EMOJI_ADDED;
                                        if (!(var3 !== var2)) {
                                            _fun77396_ip = 3205;
                                            continue _fun77396
                                        }
                                    case 253:
                                        var2 = _closure3_slot9;
                                        if (var2) {
                                            _fun77396_ip = 3181;
                                            continue _fun77396
                                        }
                                    case 263:
                                        var2 = _closure3_slot6;
                                        if (!var2) {
                                            _fun77396_ip = 324;
                                            continue _fun77396
                                        }
                                    case 270:
                                        var4 = _closure2_slot8;
                                        var3 = null;
                                        if (!(var3 != var4)) {
                                            _fun77396_ip = 324;
                                            continue _fun77396
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
                                            _fun77396_ip = 3181;
                                            continue _fun77396
                                        }
                                    case 324:
                                        var2 = _closure3_slot7;
                                        if (!var2) {
                                            _fun77396_ip = 371;
                                            continue _fun77396
                                        }
                                    case 331:
                                        var2 = _closure2_slot8;
                                        var4 = null;
                                        if (!(var4 != var2)) {
                                            _fun77396_ip = 371;
                                            continue _fun77396
                                        }
                                    case 344:
                                        var3 = var0.author;
                                        var7 = var4 == var3;
                                        var2 = undefined;
                                        if (var7) {
                                            _fun77396_ip = 364;
                                            continue _fun77396
                                        }
                                    case 359:
                                        var2 = var3.id;
                                    case 364:
                                        if (!(var4 == var2)) {
                                            _fun77396_ip = 3084;
                                            continue _fun77396
                                        }
                                    case 371:
                                        var2 = _closure3_slot8;
                                        if (!var2) {
                                            _fun77396_ip = 403;
                                            continue _fun77396
                                        }
                                    case 378:
                                        var2 = var0.author;
                                        var3 = var2.id;
                                        var2 = _closure2_slot11;
                                        if (!(var3 !== var2)) {
                                            _fun77396_ip = 3060;
                                            continue _fun77396
                                        }
                                    case 403:
                                        var2 = _closure3_slot1;
                                        if (!var2) {
                                            _fun77396_ip = 485;
                                            continue _fun77396
                                        }
                                    case 410:
                                        var3 = _closure2_slot134;
                                        var8 = null;
                                        var3 = var8 == var3;
                                        var7 = undefined;
                                        if (var3) {
                                            _fun77396_ip = 438;
                                            continue _fun77396
                                        }
                                    case 428:
                                        var3 = _closure2_slot134;
                                        var7 = var3.interactionStates;
                                    case 438:
                                        if (!(var8 == var7)) {
                                            _fun77396_ip = 444;
                                            continue _fun77396
                                        }
                                    case 442:
                                        var7 = {};
                                    case 444:
                                        var3 = var0.id;
                                        var3 = var7[var3];
                                        var7 = _closure2_slot62;
                                        if (!(var8 == var7)) {
                                            _fun77396_ip = 465;
                                            continue _fun77396
                                        }
                                    case 461:
                                        var7 = {};
                                        _fun77396_ip = 469;
                                        continue _fun77396;
                                    case 465:
                                        var7 = _closure2_slot62;
                                    case 469:
                                        var2 = var0.id;
                                        var2 = var7[var2];
                                        if (!(var3 === var2)) {
                                            _fun77396_ip = 3037;
                                            continue _fun77396
                                        }
                                    case 485:
                                        var2 = _closure3_slot4;
                                        if (!var2) {
                                            _fun77396_ip = 583;
                                            continue _fun77396
                                        }
                                    case 492:
                                        var2 = _closure2_slot134;
                                        var9 = null;
                                        var8 = var9 == var2;
                                        var2 = undefined;
                                        if (var8) {
                                            _fun77396_ip = 544;
                                            continue _fun77396
                                        }
                                    case 510:
                                        var8 = _closure2_slot134;
                                        var11 = var8.interactionComponentStates;
                                        var8 = var9 == var11;
                                        var2 = undefined;
                                        if (var8) {
                                            _fun77396_ip = 544;
                                            continue _fun77396
                                        }
                                    case 529:
                                        var10 = var11.get;
                                        var8 = var0.id;
                                        var2 = var10.bind(var11)(var8);
                                    case 544:
                                        var8 = _closure2_slot63;
                                        var8 = var9 == var8;
                                        var3 = undefined;
                                        if (var8) {
                                            _fun77396_ip = 576;
                                            continue _fun77396
                                        }
                                    case 557:
                                        var9 = _closure2_slot63;
                                        var8 = var9.get;
                                        var7 = var0.id;
                                        var3 = var8.bind(var9)(var7);
                                    case 576:
                                        if (!(var2 === var3)) {
                                            _fun77396_ip = 3014;
                                            continue _fun77396
                                        }
                                    case 583:
                                        var2 = _closure3_slot5;
                                        if (!var2) {
                                            _fun77396_ip = 610;
                                            continue _fun77396
                                        }
                                    case 590:
                                        var2 = var0.components;
                                        var3 = var2.length;
                                        var2 = 0;
                                        if (!(var2 === var3)) {
                                            _fun77396_ip = 2990;
                                            continue _fun77396
                                        }
                                    case 610:
                                        var2 = _closure3_slot2;
                                        if (!var2) {
                                            _fun77396_ip = 692;
                                            continue _fun77396
                                        }
                                    case 617:
                                        var3 = _closure2_slot134;
                                        var8 = null;
                                        var3 = var8 == var3;
                                        var7 = undefined;
                                        if (var3) {
                                            _fun77396_ip = 645;
                                            continue _fun77396
                                        }
                                    case 635:
                                        var3 = _closure2_slot134;
                                        var7 = var3.channelPolls;
                                    case 645:
                                        if (!(var8 == var7)) {
                                            _fun77396_ip = 651;
                                            continue _fun77396
                                        }
                                    case 649:
                                        var7 = {};
                                    case 651:
                                        var3 = var0.id;
                                        var3 = var7[var3];
                                        var7 = _closure2_slot93;
                                        if (!(var8 == var7)) {
                                            _fun77396_ip = 672;
                                            continue _fun77396
                                        }
                                    case 668:
                                        var7 = {};
                                        _fun77396_ip = 676;
                                        continue _fun77396;
                                    case 672:
                                        var7 = _closure2_slot93;
                                    case 676:
                                        var2 = var0.id;
                                        var2 = var7[var2];
                                        if (!(var3 === var2)) {
                                            _fun77396_ip = 2967;
                                            continue _fun77396
                                        }
                                    case 692:
                                        var2 = _closure3_slot3;
                                        if (!var2) {
                                            _fun77396_ip = 789;
                                            continue _fun77396
                                        }
                                    case 699:
                                        var3 = var0.messageReference;
                                        var9 = null;
                                        var8 = var9 == var3;
                                        var7 = undefined;
                                        if (var8) {
                                            _fun77396_ip = 722;
                                            continue _fun77396
                                        }
                                    case 716:
                                        var7 = var3.message_id;
                                    case 722:
                                        if (!(var9 != var7)) {
                                            _fun77396_ip = 789;
                                            continue _fun77396
                                        }
                                    case 726:
                                        var3 = _closure2_slot134;
                                        var3 = var9 == var3;
                                        var2 = undefined;
                                        if (var3) {
                                            _fun77396_ip = 752;
                                            continue _fun77396
                                        }
                                    case 742:
                                        var3 = _closure2_slot134;
                                        var2 = var3.messageReferencePolls;
                                    case 752:
                                        if (!(var9 == var2)) {
                                            _fun77396_ip = 758;
                                            continue _fun77396
                                        }
                                    case 756:
                                        var2 = {};
                                    case 758:
                                        var3 = var2[var7];
                                        var2 = _closure2_slot95;
                                        if (!(var9 == var2)) {
                                            _fun77396_ip = 774;
                                            continue _fun77396
                                        }
                                    case 770:
                                        var2 = {};
                                        _fun77396_ip = 778;
                                        continue _fun77396;
                                    case 774:
                                        var2 = _closure2_slot95;
                                    case 778:
                                        var2 = var2[var7];
                                        if (!(var3 === var2)) {
                                            _fun77396_ip = 2944;
                                            continue _fun77396
                                        }
                                    case 789:
                                        var2 = _closure3_slot12;
                                        if (!var2) {
                                            _fun77396_ip = 938;
                                            continue _fun77396
                                        }
                                    case 799:
                                        var3 = _closure2_slot134;
                                        var8 = null;
                                        var3 = var8 == var3;
                                        var9 = undefined;
                                        if (var3) {
                                            _fun77396_ip = 827;
                                            continue _fun77396
                                        }
                                    case 817:
                                        var3 = _closure2_slot134;
                                        var9 = var3.unloadedContentEntryMessageIds;
                                    case 827:
                                        if (!(var8 == var9)) {
                                            _fun77396_ip = 859;
                                            continue _fun77396
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
                                        var7 = _closure2_slot98;
                                        if (!(var8 == var7)) {
                                            _fun77396_ip = 912;
                                            continue _fun77396
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
                                        _fun77396_ip = 916;
                                        continue _fun77396;
                                    case 912:
                                        var8 = _closure2_slot98;
                                    case 916:
                                        var7 = var8.has;
                                        var2 = var0.id;
                                        var2 = var7.bind(var8)(var2);
                                        if (!(var3 === var2)) {
                                            _fun77396_ip = 2921;
                                            continue _fun77396
                                        }
                                    case 938:
                                        var7 = _closure2_slot1;
                                        var2 = var7.isForumPost;
                                        var2 = var2.bind(var7)();
                                        if (!var2) {
                                            _fun77396_ip = 1024;
                                            continue _fun77396
                                        }
                                    case 958:
                                        var2 = _closure3_slot10;
                                        if (var2) {
                                            _fun77396_ip = 972;
                                            continue _fun77396
                                        }
                                    case 965:
                                        var2 = _closure3_slot11;
                                        if (!var2) {
                                            _fun77396_ip = 1024;
                                            continue _fun77396
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
                                            _fun77396_ip = 2897;
                                            continue _fun77396
                                        }
                                    case 1024:
                                        var2 = _closure3_slot14;
                                        if (!var2) {
                                            _fun77396_ip = 1046;
                                            continue _fun77396
                                        }
                                    case 1031:
                                        var7 = var0.activityInstance;
                                        var2 = null;
                                        if (!(var2 == var7)) {
                                            _fun77396_ip = 2873;
                                            continue _fun77396
                                        }
                                    case 1046:
                                        var2 = _closure3_slot15;
                                        if (!var2) {
                                            _fun77396_ip = 1080;
                                            continue _fun77396
                                        }
                                    case 1053:
                                        var9 = var0.activity;
                                        var8 = null;
                                        var10 = var8 == var9;
                                        var7 = undefined;
                                        if (var10) {
                                            _fun77396_ip = 1076;
                                            continue _fun77396
                                        }
                                    case 1070:
                                        var7 = var9.party_id;
                                    case 1076:
                                        var2 = var8 != var7;
                                    case 1080:
                                        if (!var2) {
                                            _fun77396_ip = 1102;
                                            continue _fun77396
                                        }
                                    case 1083:
                                        var8 = _closure3_slot23;
                                        var7 = var8.add;
                                        var2 = var0.id;
                                        var2 = var7.bind(var8)(var2);
                                    case 1102:
                                        var2 = _closure3_slot20;
                                        if (var2) {
                                            _fun77396_ip = 1116;
                                            continue _fun77396
                                        }
                                    case 1109:
                                        var2 = _closure3_slot22;
                                        if (!var2) {
                                            _fun77396_ip = 1162;
                                            continue _fun77396
                                        }
                                    case 1116:
                                        var8 = var0.activity;
                                        var7 = null;
                                        var9 = var7 == var8;
                                        var2 = undefined;
                                        if (var9) {
                                            _fun77396_ip = 1139;
                                            continue _fun77396
                                        }
                                    case 1133:
                                        var2 = var8.party_id;
                                    case 1139:
                                        if (!(var7 != var2)) {
                                            _fun77396_ip = 1162;
                                            continue _fun77396
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
                                            _fun77396_ip = 3331;
                                            continue _fun77396
                                        }
                                    case 1177:
                                        var19 = {};
                                        var2 = _closure2_slot134;
                                        var8 = var9 == var2;
                                        var7 = undefined;
                                        var2 = undefined;
                                        if (var8) {
                                            _fun77396_ip = 1204;
                                            continue _fun77396
                                        }
                                    case 1194:
                                        var8 = _closure2_slot134;
                                        var2 = var8.messageAuthorActivities;
                                    case 1204:
                                        if (!(var9 == var2)) {
                                            _fun77396_ip = 1210;
                                            continue _fun77396
                                        }
                                    case 1208:
                                        var2 = {};
                                    case 1210:
                                        var19.messageAuthorActivities = var2;
                                        var18 = {};
                                        var2 = _closure2_slot21;
                                        if (!(var9 == var2)) {
                                            _fun77396_ip = 1229;
                                            continue _fun77396
                                        }
                                    case 1225:
                                        var2 = {};
                                        _fun77396_ip = 1233;
                                        continue _fun77396;
                                    case 1229:
                                        var2 = _closure2_slot21;
                                    case 1233:
                                        var18.messageAuthorActivities = var2;
                                        var17 = {};
                                        var2 = _closure2_slot134;
                                        var8 = var9 == var2;
                                        var2 = undefined;
                                        if (var8) {
                                            _fun77396_ip = 1263;
                                            continue _fun77396
                                        }
                                    case 1253:
                                        var8 = _closure2_slot134;
                                        var2 = var8.invites;
                                    case 1263:
                                        if (!(var9 == var2)) {
                                            _fun77396_ip = 1295;
                                            continue _fun77396
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
                                        var2 = _closure2_slot134;
                                        var8 = var9 == var2;
                                        var2 = undefined;
                                        if (var8) {
                                            _fun77396_ip = 1323;
                                            continue _fun77396
                                        }
                                    case 1313:
                                        var8 = _closure2_slot134;
                                        var2 = var8.appDirectoryEmbedApplications;
                                    case 1323:
                                        if (!(var9 == var2)) {
                                            _fun77396_ip = 1329;
                                            continue _fun77396
                                        }
                                    case 1327:
                                        var2 = {};
                                    case 1329:
                                        var17.appDirectoryEmbedApplications = var2;
                                        var2 = _closure2_slot134;
                                        var8 = var9 == var2;
                                        var2 = undefined;
                                        if (var8) {
                                            _fun77396_ip = 1357;
                                            continue _fun77396
                                        }
                                    case 1347:
                                        var8 = _closure2_slot134;
                                        var2 = var8.invalidAppDirectoryEmbedApplicationIds;
                                    case 1357:
                                        if (!(var9 == var2)) {
                                            _fun77396_ip = 1389;
                                            continue _fun77396
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
                                        var2 = _closure2_slot134;
                                        var8 = var9 == var2;
                                        var2 = undefined;
                                        if (var8) {
                                            _fun77396_ip = 1417;
                                            continue _fun77396
                                        }
                                    case 1407:
                                        var8 = _closure2_slot134;
                                        var2 = var8.invalidApplicationIds;
                                    case 1417:
                                        if (!(var9 == var2)) {
                                            _fun77396_ip = 1425;
                                            continue _fun77396
                                        }
                                    case 1421:
                                        var2 = new Array(0);
                                    case 1425:
                                        var17.invalidApplicationIds = var2;
                                        var2 = _closure2_slot134;
                                        var8 = var9 == var2;
                                        var2 = undefined;
                                        if (var8) {
                                            _fun77396_ip = 1453;
                                            continue _fun77396
                                        }
                                    case 1443:
                                        var8 = _closure2_slot134;
                                        var2 = var8.activityParticipants;
                                    case 1453:
                                        if (!(var9 == var2)) {
                                            _fun77396_ip = 1461;
                                            continue _fun77396
                                        }
                                    case 1457:
                                        var2 = new Array(0);
                                    case 1461:
                                        var17.activityParticipants = var2;
                                        var2 = _closure2_slot134;
                                        var8 = var9 == var2;
                                        var2 = undefined;
                                        if (var8) {
                                            _fun77396_ip = 1489;
                                            continue _fun77396
                                        }
                                    case 1479:
                                        var8 = _closure2_slot134;
                                        var2 = var8.applicationAssetFetchingIds;
                                    case 1489:
                                        if (!(var9 == var2)) {
                                            _fun77396_ip = 1497;
                                            continue _fun77396
                                        }
                                    case 1493:
                                        var2 = new Array(0);
                                    case 1497:
                                        var17.applicationAssetFetchingIds = var2;
                                        var2 = _closure2_slot134;
                                        var8 = var9 == var2;
                                        var2 = undefined;
                                        if (var8) {
                                            _fun77396_ip = 1525;
                                            continue _fun77396
                                        }
                                    case 1515:
                                        var8 = _closure2_slot134;
                                        var2 = var8.appDirectoryEmbedApplicationFetchStates;
                                    case 1525:
                                        if (!(var9 == var2)) {
                                            _fun77396_ip = 1531;
                                            continue _fun77396
                                        }
                                    case 1529:
                                        var2 = {};
                                    case 1531:
                                        var17.appDirectoryEmbedApplicationFetchStates = var2;
                                        var2 = _closure2_slot134;
                                        var8 = var9 == var2;
                                        var2 = undefined;
                                        if (var8) {
                                            _fun77396_ip = 1559;
                                            continue _fun77396
                                        }
                                    case 1549:
                                        var8 = _closure2_slot134;
                                        var2 = var8.guildTemplates;
                                    case 1559:
                                        if (!(var9 == var2)) {
                                            _fun77396_ip = 1591;
                                            continue _fun77396
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
                                        var2 = _closure2_slot134;
                                        var8 = var9 == var2;
                                        var2 = undefined;
                                        if (var8) {
                                            _fun77396_ip = 1619;
                                            continue _fun77396
                                        }
                                    case 1609:
                                        var8 = _closure2_slot134;
                                        var2 = var8.buildOverrides;
                                    case 1619:
                                        if (!(var9 == var2)) {
                                            _fun77396_ip = 1625;
                                            continue _fun77396
                                        }
                                    case 1623:
                                        var2 = {};
                                    case 1625:
                                        var17.buildOverrides = var2;
                                        var2 = _closure2_slot134;
                                        var8 = var9 == var2;
                                        var2 = undefined;
                                        if (var8) {
                                            _fun77396_ip = 1653;
                                            continue _fun77396
                                        }
                                    case 1643:
                                        var8 = _closure2_slot134;
                                        var2 = var8.experimentEmbeds;
                                    case 1653:
                                        if (!(var9 == var2)) {
                                            _fun77396_ip = 1659;
                                            continue _fun77396
                                        }
                                    case 1657:
                                        var2 = {};
                                    case 1659:
                                        var17.experimentEmbeds = var2;
                                        var2 = _closure2_slot134;
                                        var8 = var9 == var2;
                                        var2 = undefined;
                                        if (var8) {
                                            _fun77396_ip = 1687;
                                            continue _fun77396
                                        }
                                    case 1677:
                                        var8 = _closure2_slot134;
                                        var2 = var8.quests;
                                    case 1687:
                                        if (!(var9 == var2)) {
                                            _fun77396_ip = 1695;
                                            continue _fun77396
                                        }
                                    case 1691:
                                        var2 = new Array(0);
                                    case 1695:
                                        var17.quests = var2;
                                        var2 = _closure2_slot134;
                                        var2 = var9 == var2;
                                        var8 = undefined;
                                        if (var2) {
                                            _fun77396_ip = 1723;
                                            continue _fun77396
                                        }
                                    case 1713:
                                        var2 = _closure2_slot134;
                                        var8 = var2.isFetchingCurrentQuests;
                                    case 1723:
                                        var2 = var9 != var8;
                                        if (!var2) {
                                            _fun77396_ip = 1733;
                                            continue _fun77396
                                        }
                                    case 1730:
                                        var2 = var8;
                                    case 1733:
                                        var17.isFetchingCurrentQuests = var2;
                                        var16 = {};
                                        var2 = _closure2_slot23;
                                        if (!(var9 == var2)) {
                                            _fun77396_ip = 1778;
                                            continue _fun77396
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
                                        _fun77396_ip = 1782;
                                        continue _fun77396;
                                    case 1778:
                                        var2 = _closure2_slot23;
                                    case 1782:
                                        var16.invites = var2;
                                        var2 = _closure2_slot24;
                                        if (!(var9 == var2)) {
                                            _fun77396_ip = 1799;
                                            continue _fun77396
                                        }
                                    case 1795:
                                        var2 = {};
                                        _fun77396_ip = 1803;
                                        continue _fun77396;
                                    case 1799:
                                        var2 = _closure2_slot24;
                                    case 1803:
                                        var16.appDirectoryEmbedApplications = var2;
                                        var2 = _closure2_slot25;
                                        if (!(var9 == var2)) {
                                            _fun77396_ip = 1846;
                                            continue _fun77396
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
                                        _fun77396_ip = 1850;
                                        continue _fun77396;
                                    case 1846:
                                        var2 = _closure2_slot25;
                                    case 1850:
                                        var16.invalidAppDirectoryEmbedApplicationIds = var2;
                                        var2 = _closure2_slot27;
                                        if (!(var9 == var2)) {
                                            _fun77396_ip = 1869;
                                            continue _fun77396
                                        }
                                    case 1863:
                                        var2 = new Array(0);
                                        _fun77396_ip = 1873;
                                        continue _fun77396;
                                    case 1869:
                                        var2 = _closure2_slot27;
                                    case 1873:
                                        var16.invalidApplicationIds = var2;
                                        var2 = _closure2_slot31;
                                        if (!(var9 == var2)) {
                                            _fun77396_ip = 1892;
                                            continue _fun77396
                                        }
                                    case 1886:
                                        var2 = new Array(0);
                                        _fun77396_ip = 1896;
                                        continue _fun77396;
                                    case 1892:
                                        var2 = _closure2_slot31;
                                    case 1896:
                                        var16.activityParticipants = var2;
                                        var2 = _closure2_slot28;
                                        if (!(var9 == var2)) {
                                            _fun77396_ip = 1915;
                                            continue _fun77396
                                        }
                                    case 1909:
                                        var2 = new Array(0);
                                        _fun77396_ip = 1919;
                                        continue _fun77396;
                                    case 1915:
                                        var2 = _closure2_slot28;
                                    case 1919:
                                        var16.applicationAssetFetchingIds = var2;
                                        var2 = _closure2_slot26;
                                        if (!(var9 == var2)) {
                                            _fun77396_ip = 1936;
                                            continue _fun77396
                                        }
                                    case 1932:
                                        var2 = {};
                                        _fun77396_ip = 1940;
                                        continue _fun77396;
                                    case 1936:
                                        var2 = _closure2_slot26;
                                    case 1940:
                                        var16.appDirectoryEmbedApplicationFetchStates = var2;
                                        var2 = _closure2_slot34;
                                        if (!(var9 == var2)) {
                                            _fun77396_ip = 1983;
                                            continue _fun77396
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
                                        _fun77396_ip = 1987;
                                        continue _fun77396;
                                    case 1983:
                                        var2 = _closure2_slot34;
                                    case 1987:
                                        var16.guildTemplates = var2;
                                        var2 = _closure2_slot35;
                                        if (!(var9 == var2)) {
                                            _fun77396_ip = 2004;
                                            continue _fun77396
                                        }
                                    case 2000:
                                        var2 = {};
                                        _fun77396_ip = 2008;
                                        continue _fun77396;
                                    case 2004:
                                        var2 = _closure2_slot35;
                                    case 2008:
                                        var16.buildOverrides = var2;
                                        var2 = _closure2_slot36;
                                        if (!(var9 == var2)) {
                                            _fun77396_ip = 2025;
                                            continue _fun77396
                                        }
                                    case 2021:
                                        var2 = {};
                                        _fun77396_ip = 2029;
                                        continue _fun77396;
                                    case 2025:
                                        var2 = _closure2_slot36;
                                    case 2029:
                                        var16.experimentEmbeds = var2;
                                        var2 = _closure2_slot37;
                                        if (!(var9 == var2)) {
                                            _fun77396_ip = 2048;
                                            continue _fun77396
                                        }
                                    case 2042:
                                        var2 = new Array(0);
                                        _fun77396_ip = 2052;
                                        continue _fun77396;
                                    case 2048:
                                        var2 = _closure2_slot37;
                                    case 2052:
                                        var16.quests = var2;
                                        var2 = _closure2_slot38;
                                        var2 = var9 != var2;
                                        if (!var2) {
                                            _fun77396_ip = 2072;
                                            continue _fun77396
                                        }
                                    case 2068:
                                        var2 = _closure2_slot38;
                                    case 2072:
                                        var16.isFetchingCurrentQuests = var2;
                                        var15 = {};
                                        var2 = _closure2_slot134;
                                        var8 = var9 == var2;
                                        var2 = undefined;
                                        if (var8) {
                                            _fun77396_ip = 2102;
                                            continue _fun77396
                                        }
                                    case 2092:
                                        var8 = _closure2_slot134;
                                        var2 = var8.resolvingGiftCodes;
                                    case 2102:
                                        if (!(var9 == var2)) {
                                            _fun77396_ip = 2110;
                                            continue _fun77396
                                        }
                                    case 2106:
                                        var2 = new Array(0);
                                    case 2110:
                                        var15.resolvingGiftCodes = var2;
                                        var2 = _closure2_slot134;
                                        var8 = var9 == var2;
                                        var2 = undefined;
                                        if (var8) {
                                            _fun77396_ip = 2138;
                                            continue _fun77396
                                        }
                                    case 2128:
                                        var8 = _closure2_slot134;
                                        var2 = var8.resolvedGiftCodes;
                                    case 2138:
                                        if (!(var9 == var2)) {
                                            _fun77396_ip = 2146;
                                            continue _fun77396
                                        }
                                    case 2142:
                                        var2 = new Array(0);
                                    case 2146:
                                        var15.resolvedGiftCodes = var2;
                                        var2 = _closure2_slot134;
                                        var8 = var9 == var2;
                                        var2 = undefined;
                                        if (var8) {
                                            _fun77396_ip = 2174;
                                            continue _fun77396
                                        }
                                    case 2164:
                                        var8 = _closure2_slot134;
                                        var2 = var8.acceptingGiftCodes;
                                    case 2174:
                                        if (!(var9 == var2)) {
                                            _fun77396_ip = 2182;
                                            continue _fun77396
                                        }
                                    case 2178:
                                        var2 = new Array(0);
                                    case 2182:
                                        var15.acceptingGiftCodes = var2;
                                        var14 = {};
                                        var2 = _closure2_slot51;
                                        if (!(var9 == var2)) {
                                            _fun77396_ip = 2203;
                                            continue _fun77396
                                        }
                                    case 2197:
                                        var2 = new Array(0);
                                        _fun77396_ip = 2207;
                                        continue _fun77396;
                                    case 2203:
                                        var2 = _closure2_slot51;
                                    case 2207:
                                        var14.resolvingGiftCodes = var2;
                                        var2 = _closure2_slot52;
                                        if (!(var9 == var2)) {
                                            _fun77396_ip = 2226;
                                            continue _fun77396
                                        }
                                    case 2220:
                                        var2 = new Array(0);
                                        _fun77396_ip = 2230;
                                        continue _fun77396;
                                    case 2226:
                                        var2 = _closure2_slot52;
                                    case 2230:
                                        var14.resolvedGiftCodes = var2;
                                        var2 = _closure2_slot53;
                                        if (!(var9 == var2)) {
                                            _fun77396_ip = 2249;
                                            continue _fun77396
                                        }
                                    case 2243:
                                        var2 = new Array(0);
                                        _fun77396_ip = 2253;
                                        continue _fun77396;
                                    case 2249:
                                        var2 = _closure2_slot53;
                                    case 2253:
                                        var14.acceptingGiftCodes = var2;
                                        var12 = {};
                                        var2 = _closure2_slot134;
                                        var8 = var9 == var2;
                                        var2 = undefined;
                                        if (var8) {
                                            _fun77396_ip = 2283;
                                            continue _fun77396
                                        }
                                    case 2273:
                                        var8 = _closure2_slot134;
                                        var2 = var8.mediaPostPreviewEmbeds;
                                    case 2283:
                                        if (!(var9 == var2)) {
                                            _fun77396_ip = 2289;
                                            continue _fun77396
                                        }
                                    case 2287:
                                        var2 = {};
                                    case 2289:
                                        var12.mediaPostPreviewEmbeds = var2;
                                        var11 = {};
                                        var2 = _closure2_slot33;
                                        if (!(var9 == var2)) {
                                            _fun77396_ip = 2308;
                                            continue _fun77396
                                        }
                                    case 2304:
                                        var2 = {};
                                        _fun77396_ip = 2312;
                                        continue _fun77396;
                                    case 2308:
                                        var2 = _closure2_slot33;
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
                                            _fun77396_ip = 2849;
                                            continue _fun77396
                                        }
                                    case 2359:
                                        var10 = _closure1_slot1;
                                        var8 = _closure1_slot2;
                                        var8 = var8[var13];
                                        var10 = var10.bind(var7)(var8);
                                        var8 = var10.codedLinksChanged;
                                        var8 = var8.bind(var10)(var0, var17, var16);
                                        if (var8) {
                                            _fun77396_ip = 2849;
                                            continue _fun77396
                                        }
                                    case 2395:
                                        var8 = _closure3_slot0;
                                        if (!var8) {
                                            _fun77396_ip = 2438;
                                            continue _fun77396
                                        }
                                    case 2402:
                                        var10 = _closure1_slot1;
                                        var8 = _closure1_slot2;
                                        var8 = var8[var13];
                                        var10 = var10.bind(var7)(var8);
                                        var8 = var10.giftCodesChanged;
                                        var8 = var8.bind(var10)(var0, var15, var14);
                                        if (var8) {
                                            _fun77396_ip = 2849;
                                            continue _fun77396
                                        }
                                    case 2438:
                                        var10 = _closure1_slot1;
                                        var8 = _closure1_slot2;
                                        var8 = var8[var13];
                                        var10 = var10.bind(var7)(var8);
                                        var8 = var10.mediaPostPreviewEmbedsChanged;
                                        var8 = var8.bind(var10)(var0, var12, var11);
                                        if (var8) {
                                            _fun77396_ip = 2849;
                                            continue _fun77396
                                        }
                                    case 2474:
                                        var8 = _closure3_slot29;
                                        if (!var8) {
                                            _fun77396_ip = 2498;
                                            continue _fun77396
                                        }
                                    case 2481:
                                        var10 = var0.embeds;
                                        var11 = var10.length;
                                        var10 = 0;
                                        var8 = var11 > var10;
                                    case 2498:
                                        if (!var8) {
                                            _fun77396_ip = 2520;
                                            continue _fun77396
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
                                            _fun77396_ip = 2573;
                                            continue _fun77396
                                        }
                                    case 2542:
                                        var8 = _closure2_slot134;
                                        var8 = var9 == var8;
                                        var10 = undefined;
                                        if (var8) {
                                            _fun77396_ip = 2565;
                                            continue _fun77396
                                        }
                                    case 2555:
                                        var8 = _closure2_slot134;
                                        var10 = var8.threadStartingReferenceMessage;
                                    case 2565:
                                        var8 = _closure2_slot50;
                                        var2 = var10 !== var8;
                                    case 2573:
                                        if (!var2) {
                                            _fun77396_ip = 2595;
                                            continue _fun77396
                                        }
                                    case 2576:
                                        var10 = _closure3_slot23;
                                        var8 = var10.add;
                                        var2 = var0.id;
                                        var2 = var8.bind(var10)(var2);
                                    case 2595:
                                        var2 = _closure3_slot13;
                                        if (!var2) {
                                            _fun77396_ip = 2611;
                                            continue _fun77396
                                        }
                                    case 2602:
                                        var8 = var0.applicationId;
                                        var2 = var9 != var8;
                                    case 2611:
                                        if (!var2) {
                                            _fun77396_ip = 2660;
                                            continue _fun77396
                                        }
                                    case 2614:
                                        var8 = _closure2_slot134;
                                        var8 = var9 == var8;
                                        var11 = undefined;
                                        if (var8) {
                                            _fun77396_ip = 2637;
                                            continue _fun77396
                                        }
                                    case 2627:
                                        var8 = _closure2_slot134;
                                        var11 = var8.invalidApplicationIds;
                                    case 2637:
                                        if (!(var9 == var11)) {
                                            _fun77396_ip = 2645;
                                            continue _fun77396
                                        }
                                    case 2641:
                                        var11 = new Array(0);
                                    case 2645:
                                        var10 = var11.includes;
                                        var8 = var0.applicationId;
                                        var2 = var10.bind(var11)(var8);
                                    case 2660:
                                        if (!var2) {
                                            _fun77396_ip = 2682;
                                            continue _fun77396
                                        }
                                    case 2663:
                                        var10 = _closure3_slot23;
                                        var8 = var10.add;
                                        var2 = var0.id;
                                        var2 = var8.bind(var10)(var2);
                                    case 2682:
                                        var2 = _closure3_slot16;
                                        if (!var2) {
                                            _fun77396_ip = 2738;
                                            continue _fun77396
                                        }
                                    case 2689:
                                        var11 = var0.referralTrialOfferId;
                                        var2 = var9 != var11;
                                        if (!var2) {
                                            _fun77396_ip = 2716;
                                            continue _fun77396
                                        }
                                    case 2702:
                                        var10 = _closure2_slot40;
                                        var8 = var10.includes;
                                        var2 = var8.bind(var10)(var11);
                                    case 2716:
                                        if (!var2) {
                                            _fun77396_ip = 2738;
                                            continue _fun77396
                                        }
                                    case 2719:
                                        var10 = _closure3_slot23;
                                        var8 = var10.add;
                                        var2 = var0.id;
                                        var2 = var8.bind(var10)(var2);
                                    case 2738:
                                        var2 = _closure3_slot17;
                                        if (!var2) {
                                            _fun77396_ip = 2762;
                                            continue _fun77396
                                        }
                                    case 2745:
                                        var8 = var0.codedLinks;
                                        var10 = var8.length;
                                        var8 = 0;
                                        var2 = var10 > var8;
                                    case 2762:
                                        if (!var2) {
                                            _fun77396_ip = 2784;
                                            continue _fun77396
                                        }
                                    case 2765:
                                        var10 = _closure3_slot23;
                                        var8 = var10.add;
                                        var2 = var0.id;
                                        var2 = var8.bind(var10)(var2);
                                    case 2784:
                                        var2 = _closure3_slot19;
                                        if (!var2) {
                                            _fun77396_ip = 2819;
                                            continue _fun77396
                                        }
                                    case 2791:
                                        var8 = var0.author;
                                        var9 = var9 == var8;
                                        var7 = undefined;
                                        if (var9) {
                                            _fun77396_ip = 2811;
                                            continue _fun77396
                                        }
                                    case 2806:
                                        var7 = var8.id;
                                    case 2811:
                                        var3 = _closure2_slot11;
                                        var2 = var7 === var3;
                                    case 2819:
                                        if (!var2) {
                                            _fun77396_ip = 3331;
                                            continue _fun77396
                                        }
                                    case 2825:
                                        var7 = _closure3_slot23;
                                        var3 = var7.add;
                                        var2 = var0.id;
                                        var2 = var3.bind(var7)(var2);
                                        _fun77396_ip = 3331;
                                        continue _fun77396;
                                    case 2849:
                                        var7 = _closure3_slot23;
                                        var3 = var7.add;
                                        var2 = var0.id;
                                        var2 = var3.bind(var7)(var2);
                                        _fun77396_ip = 3331;
                                        continue _fun77396;
                                    case 2873:
                                        var7 = _closure3_slot23;
                                        var3 = var7.add;
                                        var2 = var0.id;
                                        var2 = var3.bind(var7)(var2);
                                        _fun77396_ip = 3331;
                                        continue _fun77396;
                                    case 2897:
                                        var7 = _closure3_slot23;
                                        var3 = var7.add;
                                        var2 = var0.id;
                                        var2 = var3.bind(var7)(var2);
                                        _fun77396_ip = 3331;
                                        continue _fun77396;
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
                                        _fun77396_ip = 3331;
                                        continue _fun77396;
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
                                        _fun77396_ip = 3331;
                                        continue _fun77396;
                                    case 3084:
                                        var3 = _closure2_slot74;
                                        var2 = var0.author;
                                        var2 = var2.id;
                                        var3 = var3[var2];
                                        var2 = _closure2_slot134;
                                        var7 = var4 == var2;
                                        var2 = undefined;
                                        if (var7) {
                                            _fun77396_ip = 3150;
                                            continue _fun77396
                                        }
                                    case 3116:
                                        var5 = _closure2_slot134;
                                        var5 = var5.messageAuthorMembers;
                                        var4 = var4 == var5;
                                        var2 = undefined;
                                        if (var4) {
                                            _fun77396_ip = 3150;
                                            continue _fun77396
                                        }
                                    case 3135:
                                        var4 = var0.author;
                                        var4 = var4.id;
                                        var2 = var5[var4];
                                    case 3150:
                                        if (!(var3 !== var2)) {
                                            _fun77396_ip = 3331;
                                            continue _fun77396
                                        }
                                    case 3157:
                                        var4 = _closure3_slot23;
                                        var3 = var4.add;
                                        var2 = var0.id;
                                        var2 = var3.bind(var4)(var2);
                                        _fun77396_ip = 3331;
                                        continue _fun77396;
                                    case 3181:
                                        var4 = _closure3_slot23;
                                        var3 = var4.add;
                                        var2 = var0.id;
                                        var2 = var3.bind(var4)(var2);
                                        _fun77396_ip = 3331;
                                        continue _fun77396;
                                    case 3205:
                                        var4 = _closure3_slot23;
                                        var3 = var4.add;
                                        var2 = var0.id;
                                        var2 = var3.bind(var4)(var2);
                                        _fun77396_ip = 3331;
                                        continue _fun77396;
                                    case 3226:
                                        var4 = _closure3_slot23;
                                        var3 = var4.add;
                                        var2 = var0.id;
                                        var2 = var3.bind(var4)(var2);
                                        _fun77396_ip = 3331;
                                        continue _fun77396;
                                    case 3247:
                                        var4 = _closure3_slot23;
                                        var3 = var4.add;
                                        var2 = var0.id;
                                        var2 = var3.bind(var4)(var2);
                                        _fun77396_ip = 3331;
                                        continue _fun77396;
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
                                        _fun77396_ip = 3331;
                                        continue _fun77396;
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
                            var4 = _closure2_slot126;
                            var2 = {};
                            var2.forceRender = var14;
                            var2.forceReload = var13;
                            var2.updateMessageIds = var12;
                            var2.scrollToMessageId = var11;
                            var2.jumpTargetId = var10;
                            var2.jumpType = var9;
                            var2.focusTargetId = var8;
                            var2.ignoreEmbedDescriptionCache = var7;
                            var7 = _closure2_slot138;
                            var2.messagesNewlyLoaded = var7;
                            var2.shouldInitialScroll = var6;
                            var2.minimizeScrolling = var5;
                            var2 = var4.bind(var3)(var2);
                            var4 = _closure2_slot115;
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
                        case 4398:
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
                    var3 = _closure2_slot125;
                    var0.findMessageIndex = var3;
                    var3 = _closure2_slot126;
                    var0.updateRows = var3;
                    var3 = _closure2_slot127;
                    var0.scrollToMessageId = var3;
                    var3 = function() {
                        _fun77400: for (var _fun77400_ip = 0;;) switch (_fun77400_ip) {
                            case 0:
                                var6 = arguments[0];
                                var0 = undefined;
                                if (!(var6 === var0)) {
                                    _fun77400_ip = 11;
                                    continue _fun77400
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
                                var10 = _closure2_slot107;
                                var9 = _closure2_slot57;
                                var8 = _closure2_slot133;
                                var11 = var5;
                                var7 = var6;
                                var1 = var11[var4](var10, var9, var8, var7, var6);
                                return var0;
                        }
                    };
                    var0.scrollToBottom = var3;
                    var3 = function() {
                        _fun77401: for (var _fun77401_ip = 0;;) switch (_fun77401_ip) {
                            case 0:
                                var4 = arguments[0];
                                var2 = undefined;
                                if (!(var4 === var2)) {
                                    _fun77401_ip = 11;
                                    continue _fun77401
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
                                var1 = _closure2_slot107;
                                var0 = _closure2_slot57;
                                var0 = var2.bind(var3)(var1, var0, var4);
                                return var0;
                        }
                    };
                    var0.scrollToTop = var3;
                    var3 = function arg0() {
                        _fun77402: for (var _fun77402_ip = 0;;) switch (_fun77402_ip) {
                            case 0:
                                var5 = arguments[1];
                                var2 = undefined;
                                if (!(var5 === var2)) {
                                    _fun77402_ip = 11;
                                    continue _fun77402
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
                                var9 = _closure2_slot107;
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
                        var0 = 85;
                        var1 = var1[var0];
                        var0 = undefined;
                        var3 = var2.bind(var0)(var1);
                        var2 = var3.scrollToTopMessage;
                        var1 = _closure2_slot107;
                        var0 = _closure2_slot116;
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
                            var10 = _closure2_slot107;
                            var9 = _closure2_slot57;
                            var8 = _closure2_slot133;
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
                        _fun77406: for (var _fun77406_ip = 0;;) switch (_fun77406_ip) {
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
                                var4 = _closure2_slot113;
                                var0.hasJumpedToOriginalPost = var4;
                                var4 = _closure2_slot57;
                                var0.useReducedMotion = var4;
                                var5 = _closure2_slot45;
                                var4 = null;
                                var5 = var4 != var5;
                                if (!var5) {
                                    _fun77406_ip = 96;
                                    continue _fun77406
                                }
                            case 92:
                                var4 = _closure2_slot45;
                            case 96:
                                var0.oldestUnreadMessageId = var4;
                                var5 = _closure2_slot116;
                                var4 = var5.getPreviousRows;
                                var4 = var4.bind(var5)();
                                var0.chatManagerRows = var4;
                                var4 = _closure2_slot125;
                                var0.findMessageIndex = var4;
                                var3 = _closure2_slot107;
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
                                        var2 = _closure2_slot109;
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
                        var0 = _closure2_slot107;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.getChatRef = var2;
                    var2 = _closure2_slot128;
                    var0.maybeRescrollToMessageId = var2;
                    var2 = _closure2_slot129;
                    var0.clearRows = var2;
                    var1 = _closure2_slot130;
                    var0.getVisibleMessages = var1;
                    return var0;
                };
                var12 = var32.bind(var4)(var14, var12, var17);
                var17 = var4.useCallback;
                var14 = _closure1_slot3;
                var12 = function*() { // Environment: var0
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun77411: for (var _fun77411_ip = 0;;) switch (_fun77411_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun77411_ip = 140;
                                    continue _fun77411
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
                                var6 = _closure2_slot57;
                                var1.useReducedMotion = var6;
                                var6 = _closure2_slot108;
                                var6 = var6.isNearTop;
                                var1.isNearTop = var6;
                                var6 = _closure2_slot6;
                                var1.messages = var6;
                                var6 = _closure2_slot125;
                                var1.findMessageIndex = var6;
                                var6 = function() {
                                    _fun77412: for (var _fun77412_ip = 0;;) switch (_fun77412_ip) {
                                        case 0:
                                            var4 = arguments[0];
                                            var2 = undefined;
                                            if (!(var4 === var2)) {
                                                _fun77412_ip = 11;
                                                continue _fun77412
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
                                            var1 = _closure2_slot107;
                                            var0 = _closure2_slot57;
                                            var0 = var2.bind(var3)(var1, var0, var4);
                                            return var0;
                                    }
                                };
                                var1.scrollToTop = var6;
                                var5 = _closure2_slot107;
                                var1.chatRef = var5;
                                var1 = var3.bind(var4)(var1);
                                SaveGenerator(address = 128);
                            case 126:
                                return var1;
                            case 128:
                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                                if (var3) {
                                    _fun77411_ip = 137;
                                    continue _fun77411
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
                    var3 = _closure2_slot110;
                    var2 = _closure2_slot126;
                    var2 = var4.bind(var5)(var6, var3, var2);
                    var1 = _closure2_slot111;
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
                    _fun77416: for (var _fun77416_ip = 0;;) switch (_fun77416_ip) {
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
                                _fun77416_ip = 46;
                                continue _fun77416
                            }
                        case 42:
                            var0 = var1 != var5;
                        case 46:
                            if (!var0) {
                                _fun77416_ip = 53;
                                continue _fun77416
                            }
                        case 49:
                            var0 = var1 != var4;
                        case 53:
                            if (!var0) {
                                _fun77416_ip = 60;
                                continue _fun77416
                            }
                        case 56:
                            var0 = var1 != var3;
                        case 60:
                            if (!var0) {
                                _fun77416_ip = 122;
                                continue _fun77416
                            }
                        case 63:
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
                                var5 = _closure2_slot116;
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
                    _fun77419: for (var _fun77419_ip = 0;;) switch (_fun77419_ip) {
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
                                _fun77419_ip = 46;
                                continue _fun77419
                            }
                        case 42:
                            var0 = var1 != var5;
                        case 46:
                            if (!var0) {
                                _fun77419_ip = 53;
                                continue _fun77419
                            }
                        case 49:
                            var0 = var1 != var4;
                        case 53:
                            if (!var0) {
                                _fun77419_ip = 60;
                                continue _fun77419
                            }
                        case 56:
                            var0 = var1 != var3;
                        case 60:
                            if (!var0) {
                                _fun77419_ip = 122;
                                continue _fun77419
                            }
                        case 63:
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
                                var5 = _closure2_slot116;
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 31, 1298, 1371, 5655, 3454, 9849, 4365, 3948, 7894, 4737, 1590, 4257, 5345, 6670, 6522, 3334, 6528, 6823, 6525, 9850, 6637, 6801, 6642, 9851, 6532, 4268, 9257, 3093, 6473, 1685, 3196, 1216, 6533, 6858, 1681, 1410, 4234, 3323, 4249, 3091, 3610, 3518, 3947, 3520, 6614, 1621, 3521, 9852, 660, 1623, 33, 3, 566, 1348, 9853, 9854, 9856, 1304, 9860, 5313, 6648, 3109, 6684, 8411, 9812, 9813, 6825, 6865, 9864, 3914, 9259, 9088, 9251, 9865, 4248, 9253, 6822, 9866, 9868, 6837, 9869, 6516, 9871, 9230, 9246, 14, 9872, 4251, 9245, 9879, 22, 9880, 4070, 9249, 5230, 802, 5579, 5306, 628, 21, 11598, 9218, 9229, 9672, 11599, 2]);